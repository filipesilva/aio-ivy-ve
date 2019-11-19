Made dist-ivy, dist-ivy-beaut, dist-ve, and dist-ve-beaut variants.

The ve/ivy variants were made by flipping the `angularCompilerOptions.enableIvy` flag in `aio/tsconfig.json`.

The *-beaut variants have mangling turned off and are pretty-printed. 
They were made by editing `aio/node_modules/@angular-devkit/build-angular/src/angular-cli-files/models/webpack-configs/common.js` and adding these two lines:

```
terserOptions.mangle = false;           // <-- add this
terserOptions.output.beautify = true;   // <-- and this
extraMinimizers.push(new TerserPlugin({
```

Here's the comparison between baseline Ivy and VE:

- Ivy
```
$ du -ach --max-depth=1 ./dist-ivy/*.js
32K     ./dist-ivy/0.worker.js
4.0K    ./dist-ivy/announcement-bar-announcement-bar-module.js
8.0K    ./dist-ivy/api-api-list-module.js
16K     ./dist-ivy/assets-js-prettify-js.js
4.0K    ./dist-ivy/code-code-example-module.js
36K     ./dist-ivy/code-code-tabs-module.js
8.0K    ./dist-ivy/contributor-contributor-list-module.js
56K     ./dist-ivy/default~code-code-example-module~code-code-tabs-module.js
8.0K    ./dist-ivy/live-example-live-example-module.js
452K    ./dist-ivy/main.js
140K    ./dist-ivy/ngsw-worker.js
52K     ./dist-ivy/polyfills.js
4.0K    ./dist-ivy/resource-resource-list-module.js
4.0K    ./dist-ivy/runtime.js
1.0K    ./dist-ivy/safety-worker.js
4.0K    ./dist-ivy/search-file-not-found-search-module.js
8.0K    ./dist-ivy/toc-toc-module.js
1.0K    ./dist-ivy/worker-basic.min.js
838K    total
```

- VE
```
$ du -ach --max-depth=1 ./dist-ve/*.js
32K     ./dist-ve/0.worker.js
4.0K    ./dist-ve/announcement-bar-announcement-bar-module-ngfactory.js
12K     ./dist-ve/api-api-list-module-ngfactory.js
16K     ./dist-ve/assets-js-prettify-js.js
4.0K    ./dist-ve/code-code-example-module-ngfactory.js
40K     ./dist-ve/code-code-tabs-module-ngfactory.js
8.0K    ./dist-ve/contributor-contributor-list-module-ngfactory.js
56K     ./dist-ve/default~code-code-example-module-ngfactory~code-code-tabs-module-ngfactory.js
8.0K    ./dist-ve/live-example-live-example-module-ngfactory.js
432K    ./dist-ve/main.js
140K    ./dist-ve/ngsw-worker.js
52K     ./dist-ve/polyfills.js
8.0K    ./dist-ve/resource-resource-list-module-ngfactory.js
4.0K    ./dist-ve/runtime.js
1.0K    ./dist-ve/safety-worker.js
4.0K    ./dist-ve/search-file-not-found-search-module-ngfactory.js
8.0K    ./dist-ve/toc-toc-module-ngfactory.js
1.0K    ./dist-ve/worker-basic.min.js
830K    total
```

Ivy is 8kb larger on total, and has the following changes in bundle sizes:
- `api-api-list-module.js` is 4kb smaller
- `code-code-tabs-module.js` is 4kb smaller
- `main.js` is 20kb larger
- `resource-resource-list-module.js` is 4kb smaller

Below is the comparison between the beautified versions:

- Ivy
```
$ du -ach --max-depth=1 ./dist-ivy-beaut/*.js
64K     ./dist-ivy-beaut/0.worker.js
8.0K    ./dist-ivy-beaut/announcement-bar-announcement-bar-module.js
16K     ./dist-ivy-beaut/api-api-list-module.js
28K     ./dist-ivy-beaut/assets-js-prettify-js.js
8.0K    ./dist-ivy-beaut/code-code-example-module.js
64K     ./dist-ivy-beaut/code-code-tabs-module.js
16K     ./dist-ivy-beaut/contributor-contributor-list-module.js
112K    ./dist-ivy-beaut/default~code-code-example-module~code-code-tabs-module.js
12K     ./dist-ivy-beaut/live-example-live-example-module.js
1.1M    ./dist-ivy-beaut/main.js
140K    ./dist-ivy-beaut/ngsw-worker.js
128K    ./dist-ivy-beaut/polyfills.js
12K     ./dist-ivy-beaut/resource-resource-list-module.js
8.0K    ./dist-ivy-beaut/runtime.js
1.0K    ./dist-ivy-beaut/safety-worker.js
4.0K    ./dist-ivy-beaut/search-file-not-found-search-module.js
12K     ./dist-ivy-beaut/toc-toc-module.js
1.0K    ./dist-ivy-beaut/worker-basic.min.js
1.8M    total
```

- VE
```
$ du -ach --max-depth=1 ./dist-ve-beaut/*.js
64K     ./dist-ve-beaut/0.worker.js
8.0K    ./dist-ve-beaut/announcement-bar-announcement-bar-module-ngfactory.js
16K     ./dist-ve-beaut/api-api-list-module-ngfactory.js
28K     ./dist-ve-beaut/assets-js-prettify-js.js
8.0K    ./dist-ve-beaut/code-code-example-module-ngfactory.js
64K     ./dist-ve-beaut/code-code-tabs-module-ngfactory.js
16K     ./dist-ve-beaut/contributor-contributor-list-module-ngfactory.js
112K    ./dist-ve-beaut/default~code-code-example-module-ngfactory~code-code-tabs-module-ngfactory.js
12K     ./dist-ve-beaut/live-example-live-example-module-ngfactory.js
1000K   ./dist-ve-beaut/main.js
140K    ./dist-ve-beaut/ngsw-worker.js
128K    ./dist-ve-beaut/polyfills.js
12K     ./dist-ve-beaut/resource-resource-list-module-ngfactory.js
8.0K    ./dist-ve-beaut/runtime.js
1.0K    ./dist-ve-beaut/safety-worker.js
4.0K    ./dist-ve-beaut/search-file-not-found-search-module-ngfactory.js
12K     ./dist-ve-beaut/toc-toc-module-ngfactory.js
1.0K    ./dist-ve-beaut/worker-basic.min.js
1.6M    total
```

Going by the unminified results, we should expect to find size differences in the same modules.
However, that's not the case: only main.js has any size changes.