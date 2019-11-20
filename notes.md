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

Below is the comparison between the beautified and non-mangled versions:

- Ivy
```
$ du -acb --max-depth=1 ./dist-ivy-beaut/*.js
64422   ./dist-ivy-beaut/0.worker.js
4162    ./dist-ivy-beaut/announcement-bar-announcement-bar-module.js
13659   ./dist-ivy-beaut/api-api-list-module.js
25581   ./dist-ivy-beaut/assets-js-prettify-js.js
5107    ./dist-ivy-beaut/code-code-example-module.js
64748   ./dist-ivy-beaut/code-code-tabs-module.js
12784   ./dist-ivy-beaut/contributor-contributor-list-module.js
113639  ./dist-ivy-beaut/default~code-code-example-module~code-code-tabs-module.js
9902    ./dist-ivy-beaut/live-example-live-example-module.js
1150233 ./dist-ivy-beaut/main.js
141320  ./dist-ivy-beaut/ngsw-worker.js
130038  ./dist-ivy-beaut/polyfills.js
8457    ./dist-ivy-beaut/resource-resource-list-module.js
6480    ./dist-ivy-beaut/runtime.js
519     ./dist-ivy-beaut/safety-worker.js
3113    ./dist-ivy-beaut/search-file-not-found-search-module.js
10700   ./dist-ivy-beaut/toc-toc-module.js
519     ./dist-ivy-beaut/worker-basic.min.js
1765383 total
```
- VE
```
$ du -acb --max-depth=1 ./dist-ve-beaut/*.js
64422   ./dist-ve-beaut/0.worker.js
5401    ./dist-ve-beaut/announcement-bar-announcement-bar-module-ngfactory.js
16295   ./dist-ve-beaut/api-api-list-module-ngfactory.js
25581   ./dist-ve-beaut/assets-js-prettify-js.js
6848    ./dist-ve-beaut/code-code-example-module-ngfactory.js
65402   ./dist-ve-beaut/code-code-tabs-module-ngfactory.js
14766   ./dist-ve-beaut/contributor-contributor-list-module-ngfactory.js
113412  ./dist-ve-beaut/default~code-code-example-module-ngfactory~code-code-tabs-module-ngfactory.js
10529   ./dist-ve-beaut/live-example-live-example-module-ngfactory.js
1023937 ./dist-ve-beaut/main.js
141320  ./dist-ve-beaut/ngsw-worker.js
130038  ./dist-ve-beaut/polyfills.js
9434    ./dist-ve-beaut/resource-resource-list-module-ngfactory.js
6590    ./dist-ve-beaut/runtime.js
519     ./dist-ve-beaut/safety-worker.js
3815    ./dist-ve-beaut/search-file-not-found-search-module-ngfactory.js
12051   ./dist-ve-beaut/toc-toc-module-ngfactory.js
519     ./dist-ve-beaut/worker-basic.min.js
1650879 total
```
- diff (`-` means Ivy is smaller, `+` means Ivy is larger):
```
0       ./dist-ivy/0.worker.js
-1239   ./dist-ivy/announcement-bar-announcement-bar-module.js
-2636   ./dist-ivy/api-api-list-module.js
0       ./dist-ivy/assets-js-prettify-js.js
-1741   ./dist-ivy/code-code-example-module.js
-654    ./dist-ivy/code-code-tabs-module.js
-1982   ./dist-ivy/contributor-contributor-list-module.js
227     ./dist-ivy/default~code-code-example-module~code-code-tabs-module.js
-627    ./dist-ivy/live-example-live-example-module.js
+126296 ./dist-ivy/main.js
0       ./dist-ivy/ngsw-worker.js
0       ./dist-ivy/polyfills.js
-977    ./dist-ivy/resource-resource-list-module.js
-110    ./dist-ivy/runtime.js
0       ./dist-ivy/safety-worker.js
-702    ./dist-ivy/search-file-not-found-search-module.js
-1351   ./dist-ivy/toc-toc-module.js
0       ./dist-ivy/worker-basic.min.js
+114504  total
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

## Differences between source maps

For `api-api-list-module.js`, sourcemaps showed the following split:

- dist-ivy (size on disk 8.0K)
  - 2.5 KB api-list.component.ts
  - 1.23 KB api-list.component.html
  - 938 B api.service.ts
  - 907 B api-list.component.ts.pre-build-optimizer.js
  - 369 B unmapped
  - 160 B api-list.module.ts
  - 65 B api-list.module.ts.pre-build-optimizer.js
  - 53 B api.service.ts.pre-build-optimizer.js
  - 6.22 KB total  
- dist-ivy-beaut (size on disk 16K)
  - 5.13 KB unmapped
  - 3.24 KB api-list.component.ts
  - 1.85 KB api-list.component.html
  - 1.39 KB api-list.component.ts.pre-build-optimizer.js
  - 1.25 KB api.service.ts
  - 378 B api-list.module.ts
  - 105 B api-list.module.ts.pre-build-optimizer.js
  - 83 B api.service.ts.pre-build-optimizer.js
  - 13.42 KB total
- dist-ve (size on disk 12K)
  - 3.28 KB api-list.component.html 
  - 2.41 KB api-list.component.ts
  - 846 B api.service.ts
  - 743 B api-list.component.ngfactory.js.pre-build-optimizer.js
  - 657 B api-list.module.ngfactory.js.pre-build-optimizer.js
  - 349 B unmapped
  - 53 B api-list.module.ts
  - 8.33 KB total  
- dist-ve-beaut (size on disk 16K)
  - 4.61 KB unmapped
  - 4.35 KB api-list.component.html
  - 3.04 KB api-list.component.ts
  - 1.52 KB api-list.module.ngfactory.js.pre-build-optimizer.js
  - 1.33 KB api-list.component.ngfactory.js.pre-build-optimizer.js
  - 1.08 KB api.service.ts
  - 118 B api-list.module.ts
  - 16.05 KB total

## Ivy size increases

`main.js` increases in size for Ivy by 20K.