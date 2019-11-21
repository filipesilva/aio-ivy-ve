# Notes while analysing the AIO size difference with Ivy

The samples analysed below can be found at https://github.com/filipesilva/aio-ivy-ve.

The setup for AIO from where I got these samples can be reproduced by following these steps:
```
git clone https://github.com/filipesilva/angular
cd angular
git checkout aio-ivy-size-diff
cd aio
yarn
```

I made dist-ivy, dist-ivy-beaut, dist-ve, and dist-ve-beaut variants by running `ng build --configuration=stable --output-path dist-ivy-beaut`. The output path changed for each variant.

The ve/ivy variants were made by flipping the `angularCompilerOptions.enableIvy` flag in `aio/tsconfig.json`.

The *-beaut variants have mangling turned off and are pretty-printed. 
They were made by editing `aio/node_modules/@angular-devkit/build-angular/src/angular-cli-files/models/webpack-configs/common.js` and adding these two lines:

```
terserOptions.mangle = false;           // <-- add this
terserOptions.output.beautify = true;   // <-- and this
extraMinimizers.push(new TerserPlugin({
```

## Sizes

Here's the comparison between baseline Ivy and VE:

- Ivy
```
$ du -acb --max-depth=1 ./dist-ivy/*.js
31037   ./dist-ivy/0.worker.js
1780    ./dist-ivy/announcement-bar-announcement-bar-module.js
6231    ./dist-ivy/api-api-list-module.js
14918   ./dist-ivy/assets-js-prettify-js.js
2179    ./dist-ivy/code-code-example-module.js
35462   ./dist-ivy/code-code-tabs-module.js
5535    ./dist-ivy/contributor-contributor-list-module.js
54246   ./dist-ivy/default~code-code-example-module~code-code-tabs-module.js
4174    ./dist-ivy/live-example-live-example-module.js
462480  ./dist-ivy/main.js
141320  ./dist-ivy/ngsw-worker.js
52475   ./dist-ivy/polyfills.js
3411    ./dist-ivy/resource-resource-list-module.js
2665    ./dist-ivy/runtime.js
519     ./dist-ivy/safety-worker.js
1155    ./dist-ivy/search-file-not-found-search-module.js
5121    ./dist-ivy/toc-toc-module.js
519     ./dist-ivy/worker-basic.min.js
825227  total
```
- VE
```
$ du -acb --max-depth=1 ./dist-ve/*.js
31037   ./dist-ve/0.worker.js
2596    ./dist-ve/announcement-bar-announcement-bar-module-ngfactory.js
8332    ./dist-ve/api-api-list-module-ngfactory.js
14918   ./dist-ve/assets-js-prettify-js.js
3064    ./dist-ve/code-code-example-module-ngfactory.js
37221   ./dist-ve/code-code-tabs-module-ngfactory.js
7614    ./dist-ve/contributor-contributor-list-module-ngfactory.js
53332   ./dist-ve/default~code-code-example-module-ngfactory~code-code-tabs-module-ngfactory.js
5202    ./dist-ve/live-example-live-example-module-ngfactory.js
438975  ./dist-ve/main.js
141320  ./dist-ve/ngsw-worker.js
52475   ./dist-ve/polyfills.js
4666    ./dist-ve/resource-resource-list-module-ngfactory.js
2775    ./dist-ve/runtime.js
519     ./dist-ve/safety-worker.js
1531    ./dist-ve/search-file-not-found-search-module-ngfactory.js
6330    ./dist-ve/toc-toc-module-ngfactory.js
519     ./dist-ve/worker-basic.min.js
812426  total
```
- diff (`-` means Ivy is smaller, `+` means Ivy is larger):
```
0       ./dist-ivy/0.worker.js
-816    ./dist-ivy/announcement-bar-announcement-bar-module.js
-2101   ./dist-ivy/api-api-list-module.js
0       ./dist-ivy/assets-js-prettify-js.js
-885    ./dist-ivy/code-code-example-module.js
-1759   ./dist-ivy/code-code-tabs-module.js
-2079   ./dist-ivy/contributor-contributor-list-module.js
914     ./dist-ivy/default~code-code-example-module~code-code-tabs-module.js
-1028   ./dist-ivy/live-example-live-example-module.js
+23505  ./dist-ivy/main.js
0       ./dist-ivy/ngsw-worker.js
0       ./dist-ivy/polyfills.js
-1255   ./dist-ivy/resource-resource-list-module.js
-110    ./dist-ivy/runtime.js
0       ./dist-ivy/safety-worker.js
-376    ./dist-ivy/search-file-not-found-search-module.js
-1209   ./dist-ivy/toc-toc-module.js
0       ./dist-ivy/worker-basic.min.js
+12801  total
```


## Ivy size decreases

I tried to analyse the diffs for `api-api-list-module.js` (-2101) and found a couple of things.

### Chained property access

Using repetitions of `[\w$]+\.[\w$]+` regex to find property accesses, whose names cannot be mangled, we can count how many there are.

- `[\w$]+\.[\w$]+`: Ivy has 227, VE has 292
- `[\w$]+\.[\w$]+\.[\w$]+`:, Ivy has 28, VE has 39
- `[\w$]+\.[\w$]+\.[\w$]+\.[\w$]+`:, Ivy has 1, VE has 12

More property accesses means less benefit from mangling. This should be the bulk of the size difference.

### Primitive usage

Primitives can't be renamed, so more of them means less opportunities for size savings.

- `null`: Ivy has 2, VE has 140
- `this`: Ivy has 70, VE has 70
- `return`: Ivy has 13, VE has 14
- strings: Ivy has 141, VE has 150, 
  - VE seems to have `"document"`, `"keydown.escape"`, `document:keydown.escape"`, `"document.click"`, and some others in generated code that Ivy doesn't

### Differences between source maps

For `api-api-list-module.js`, sourcemaps showed the following split:

- dist-ivy/api-api-list-module.js
  - 2.5   KB api-list.component.ts
  - 1.23  KB api-list.component.html
  - 938   B api.service.ts
  - 907   B api-list.component.ts.pre-build-optimizer.js
  - 369   B unmapped
  - 160   B api-list.module.ts
  - 65    B api-list.module.ts.pre-build-optimizer.js
  - 53    B api.service.ts.pre-build-optimizer.js
  - 6.22  KB total  
- dist-ve/api-api-list-module-ngfactory.js
  - 3.28  KB api-list.component.html 
  - 2.41  KB api-list.component.ts
  - 846   B api.service.ts
  - 743   B api-list.component.ngfactory.js.pre-build-optimizer.js
  - 657   B api-list.module.ngfactory.js.pre-build-optimizer.js
  - 349   B unmapped
  - 53    B api-list.module.ts
  - 8.33  KB total  


## Ivy size increases

I tried to analyse the diffs for `main.js` (+23505) and found a couple of things.

### Differences between source maps

For `main.js`, sourcemaps showed the following split of toplevel contributors:

- dist-ivy/main.js
  - 130.29  KB @angular/core
  - 66.23   KB @angular/animations
  - 59.42   KB @angular/material
  - 35.11   KB @angular/common
  - 30.31   KB @angular/cdk
  - 21.66   KB @angular/platform-browser
  - 41.37   KB rxjs
  - 56.86   KB src
  - 10.64   KB unmapped
  - 462.12  KB total
- dist-ve/main.js
  - 116.38  KB @angular/core
  - 66.43   KB @angular/animations
  - 50.32   KB @angular/material
  - 31.47   KB @angular/common
  - 25.68   KB @angular/cdk
  - 21.46   KB @angular/platform-browser
  - 41.25   KB rxjs
  - 68.69   KB src
  - 7.39    KB unmapped
  - 438.94  KB total
- diff (`-` means Ivy is smaller, `+` means Ivy is larger):  
  - +13.91  KB @angular/core
  - -0.20   KB @angular/animations
  - +9.10   KB @angular/material
  - +3.64   KB @angular/common
  - +4.63   KB @angular/cdk
  - +0.20   KB @angular/platform-browser
  - +0.12   KB rxjs
  - -11.83  KB src
  - +3.25   KB unmapped
  - +23.18  KB total

The end result is that code for user sources is smaller, but Angular libraries are bigger.
