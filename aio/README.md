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


## Builds without lazy chunks

In order to better analyse what changed between modules we can eagerly load the lazy modules.

This helps on a couple of fronts:
- we know that lazy chunks can be a source of hard to debug deoptimizations.
- the best case scenario for tree-shaking is a single large module.
- having all app code in a single module gives us a toplevel picture of library usage through source maps.
- diffing code is easier because there's less module loading noise.

We can make eagerly load the lazy chunks by adding the following code to the top of `src/app/custom-elements/element-registry.ts` that directly imports the same thing that the `import()` statements would import:

- for Ivy builds import the modules directly
```
import { AnnouncementBarModule } from './announcement-bar/announcement-bar.module';
import { ApiListModule } from './api/api-list.module';
import { ContributorListModule } from './contributor/contributor-list.module';
import { FileNotFoundSearchModule } from './search/file-not-found-search.module';
import { ResourceListModule } from './resource/resource-list.module';
import { TocModule } from './toc/toc.module';
import { CodeExampleModule } from './code/code-example.module';
import { CodeTabsModule } from './code/code-tabs.module';
import { LiveExampleModule } from './live-example/live-example.module';

console.log(AnnouncementBarModule);
console.log(ApiListModule);
console.log(ContributorListModule);
console.log(FileNotFoundSearchModule);
console.log(ResourceListModule);
console.log(TocModule);
console.log(CodeExampleModule);
console.log(CodeTabsModule);
console.log(LiveExampleModule);
```
- for VE builds import the module ngfactories
```
import { AnnouncementBarModuleNgFactory } from './announcement-bar/announcement-bar.module.ngfactory';
import { ApiListModuleNgFactory } from './api/api-list.module.ngfactory';
import { ContributorListModuleNgFactory } from './contributor/contributor-list.module.ngfactory';
import { FileNotFoundSearchModuleNgFactory } from './search/file-not-found-search.module.ngfactory';
import { ResourceListModuleNgFactory } from './resource/resource-list.module.ngfactory';
import { TocModuleNgFactory } from './toc/toc.module.ngfactory';
import { CodeExampleModuleNgFactory } from './code/code-example.module.ngfactory';
import { CodeTabsModuleNgFactory } from './code/code-tabs.module.ngfactory';
import { LiveExampleModuleNgFactory } from './live-example/live-example.module.ngfactory';

console.log(AnnouncementBarModuleNgFactory);
console.log(ApiListModuleNgFactory);
console.log(ContributorListModuleNgFactory);
console.log(FileNotFoundSearchModuleNgFactory);
console.log(ResourceListModuleNgFactory);
console.log(TocModuleNgFactory);
console.log(CodeExampleModuleNgFactory);
console.log(CodeTabsModuleNgFactory);
console.log(LiveExampleModuleNgFactory);
```

Then we create the same 4 builds as before, but we call them `dist-*-nolazy-*` instead.

- Ivy
```
$ du -acb --max-depth=1 ./dist-ivy-nolazy/*.js
31037   ./dist-nolazy-ivy/0.worker.js
14918   ./dist-nolazy-ivy/assets-js-prettify-js.js
581054  ./dist-nolazy-ivy/main.js
141320  ./dist-nolazy-ivy/ngsw-worker.js
52474   ./dist-nolazy-ivy/polyfills.js
2309    ./dist-nolazy-ivy/runtime.js
519     ./dist-nolazy-ivy/safety-worker.js
519     ./dist-nolazy-ivy/worker-basic.min.js
824150  total
```
- VE
```
$ du -acb --max-depth=1 ./dist-ve-nolazy/*.js
31037   ./dist-nolazy-ve/0.worker.js
14918   ./dist-nolazy-ve/assets-js-prettify-js.js
568114  ./dist-nolazy-ve/main.js
141320  ./dist-nolazy-ve/ngsw-worker.js
52474   ./dist-nolazy-ve/polyfills.js
2309    ./dist-nolazy-ve/runtime.js
519     ./dist-nolazy-ve/safety-worker.js
519     ./dist-nolazy-ve/worker-basic.min.js
811210  total
```
- diff (`-` means Ivy is smaller, `+` means Ivy is larger):
```
0       ./dist-nolazy-ivy/0.worker.js
0       ./dist-nolazy-ivy/assets-js-prettify-js.js
+12940  ./dist-nolazy-ivy/main.js
0       ./dist-nolazy-ivy/ngsw-worker.js
0       ./dist-nolazy-ivy/polyfills.js
0       ./dist-nolazy-ivy/runtime.js
0       ./dist-nolazy-ivy/safety-worker.js
0       ./dist-nolazy-ivy/worker-basic.min.js
+12940  total
```

We can also look at the sourcemap differences for main and get the full picture of dependency sizes:

- dist-ivy-nolazy/main.js
```
130.29  KB @angular/core
101.02  KB @angular/material
68.99   KB @angular/cdk
66.23   KB @angular/animations
35.11   KB @angular/common
21.66   KB @angular/platform-browser
5.11    KB @angular/elements
4.89    KB @angular/service-worker
42.22   KB rxjs
90.71   KB src
14.11   KB unmapped
580.57  KB total
```  
- dist-ve-nolazy/main.js
```
116.38  KB @angular/core
90.76   KB @angular/material
66.43   KB @angular/animations
65.17   KB @angular/cdk
31.47   KB @angular/common
21.46   KB @angular/platform-browser
5.11    KB @angular/elements
4.52    KB @angular/service-worker 
42.11   KB rxjs
114.24  KB src
10.2    KB unmapped
568.08  KB total
```
- diff (`-` means Ivy is smaller, `+` means Ivy is larger):  
```
+13.91  KB @angular/core
+10.26  KB @angular/material
+3.82   KB @angular/cdk
-0.2    KB @angular/animations
+3.64   KB @angular/common
+0.2    KB @angular/platform-browser
0       KB @angular/elements
+0.37   KB @angular/service-worker
+0.11   KB rxjs
-23.53  KB src
+3.91   KB unmapped
+12.49  KB total
```

In comparison with the lazy load builds, sizes for material, cdk, and src increase. elements and service-worker is included. The rest mostly stay the same. 
Thus we can see a similar effect as before: src is smaller in Ivy but libraries are larger.

A good way to visualize what parts of the bundle correspont to original modules is to drag both the `.js` and `.js.map` files to http://sokra.github.io/source-map-visualization/. 
Unfortunately, this doesn't seem to fully load the beautified files. The production bundles display correctly though.

Below I have some specific modules for which I extracted samples. A good way to diff them is to use VSCode's "Compare active file with..." command. That will display a side-by-side diff of the whole files.

### angular/service-worker size increase

On small change that stood out was the size increase for angular/service-worker. It goes up 0.37KB in Ivy, from 4.52 to 4.89KB.
I use the source-map-visualization to identify what code was part of the service-worker module and extracted the beautified version into `extracted-samples/sw-ivy.js` and `sw-ve.js` .

This size increase seems to be due to factories:

- Ivy
```
        let service_worker_ServiceWorkerModule = (() => {
            class ServiceWorkerModule {
                static register(script, opts = {}) {
                    return {
                        ngModule: ServiceWorkerModule,
                        providers: [ {
                            provide: SCRIPT,
                            useValue: script
                        }, {
                            provide: SwRegistrationOptions,
                            useValue: opts
                        }, {
                            provide: service_worker_NgswCommChannel,
                            useFactory: ngswCommChannelFactory,
                            deps: [ SwRegistrationOptions, core.A ]
                        }, {
                            provide: core.d,
                            useFactory: ngswAppInitializer,
                            deps: [ core.q, SCRIPT, SwRegistrationOptions, core.A ],
                            multi: !0
                        } ]
                    };
                }
            }
            return ServiceWorkerModule.ɵmod = core.Nb({
                type: ServiceWorkerModule
            }), ServiceWorkerModule.ɵinj = core.Mb({
                factory: function(t) {
                    return new (t || ServiceWorkerModule);
                },
                providers: [ service_worker_SwPush, service_worker_SwUpdate ]
            }), ServiceWorkerModule;
        })();
```
- VE
```
        class service_worker_ServiceWorkerModule {
            static register(script, opts = {}) {
                return {
                    ngModule: service_worker_ServiceWorkerModule,
                    providers: [ {
                        provide: SCRIPT,
                        useValue: script
                    }, {
                        provide: SwRegistrationOptions,
                        useValue: opts
                    }, {
                        provide: service_worker_NgswCommChannel,
                        useFactory: ngswCommChannelFactory,
                        deps: [ SwRegistrationOptions, core.A ]
                    }, {
                        provide: core.d,
                        useFactory: ngswAppInitializer,
                        deps: [ core.q, SCRIPT, SwRegistrationOptions, core.A ],
                        multi: !0
                    } ]
                };
            }
        }
```


### angular/material tabs

The angular material tabs module is the largest material module used in AIO.

In VE it consists of the main tabs.js file (13.6 KB) plus tabs/index.ngfactory.js (14.18) for a total of 27.78 KB. In Ivy it consists of a single module of 29.36 KB.

It seems to consist mostly of templates, and thus I expected it to be smaller in Ivy. It is larger instead.

I can't correctly ascertain if the retained code is as expected, but have extracted it into `extracted-samples/mat-tab-ivy.js` and `mat-tab-ve.js`.


### angular/common

Aside from material, the angular common also showed a noteworthy increase in Ivy of 3.64 KB, from 31.47 to 35.11. I extracted samples to `extracted-samples/common-ivy.js` and `common-ve.js`. 

One large addition in Ivy seems to be the `StylingDiffer` class, that is not present in VE. 

Many classes are larger due to also containing `ɵfac` and `ɵdir` and methods, much like the angular/service-worker case.

`PlatformLocation`, `BrowserPlatformLocation`, `LocationStrategy`, and `Location` contain double `ɵprov` methods in Ivy, one of which also present in VE:
- Ivy
```
        let PlatformLocation = (() => {
            class PlatformLocation {}
            return PlatformLocation.ɵfac = function(t) {
                return new (t || PlatformLocation);
            }, PlatformLocation.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__.Lb({
                token: PlatformLocation,
                factory: function() {
                    return useBrowserPlatformLocation();
                },
                providedIn: "platform"
            }), PlatformLocation.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__.Lb)({
                factory: useBrowserPlatformLocation,
                token: PlatformLocation,
                providedIn: "platform"
            }), PlatformLocation;
        })();
```
- VE
```
        let PlatformLocation = (() => {
            class PlatformLocation {}
            return PlatformLocation.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__.Yb)({
                factory: useBrowserPlatformLocation,
                token: PlatformLocation,
                providedIn: "platform"
            }), PlatformLocation;
        })();
```


### AIO LocationService

While extracting samples I noticed that it's in an isolated Webpack closure mode. I expected it to have been concatenated into the rest of the Angular modules. For that matter, angular core and others also seem to be in their own scopes as shown in the webpack module loaders below:

- Ivy
```
    "/lUL": function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.d(__webpack_exports__, "a", (function() {
            return LocationService;
        }));
        var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("jtHE"), rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("lJxs"), rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("vkgz"), _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("fXoL"), app_shared_ga_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("4MUX"), _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("ofXK"), _scroll_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("Faly"), app_sw_updates_sw_updates_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("iL+y");
        let LocationService = (() => {
            class LocationService {
```
- VE
```
    "/lUL": function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.d(__webpack_exports__, "a", (function() {
            return LocationService;
        }));
        var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("jtHE"), rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("lJxs"), rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("vkgz");
        class LocationService {
```

I extracted the samples to `extracted-samples/location-service-ivy.js` and `location-service-ve.js`. 
There I could see that the Ivy `LocationService.ɵfac` did make use of all these imports, whereas the VE version did not have such a thing.

I could also confirm that elsewhere in the VE bundle I could see angular/core had it's own module scope.
At first I thought this happened because, while adding static imports to prevent lazy modules, I still left in there the dynamic imports.
This bears further scrutiny as to the cause of the deoptimization. We can figure out the why it wasn't concatenated by running a verbose build.


### angular/core

angular/core has an increase in Ivy of 13.91 KB, from 116.38 to 130.29 KB. I extracted samples to `extracted-samples/core-ivy.js` and `core-ve.js`.

I couldn't reach any conclusions from this aside that angular/core in Ivy has more code to start with than in VE. It seems to mostly be function declarations. 
There didn't see to be a lot of generated code, but there's still extra `ɵfac` and `ɵprov` as usual.


### material/toolbar

The angular material toolbar module is the smallest material module used in AIO.

In VE it consists of the main toolbar.js file (851 B) plus toolbar/index.ngfactory.js (698 B) for a total of 1.55 KB. In Ivy it consists of a single module of 2.37 KB.

Like material/tabs, it seems to consist mostly of templates, and thus I expected it to be smaller in Ivy. It is larger instead.

I have extracted it into `extracted-samples/mat-toolbar-ivy.js` and `mat-toolbar-ve.js`.

There is one notable detail that is not visible in the samples, but is visible in the source mappings (via http://sokra.github.io/source-map-visualization/).
The VE sample is missing the `MatToolbarNgFactory` below:

```
var MatToolbarNgFactory = i0.ɵccf("mat-toolbar", i1.MatToolbar, View_MatToolbar_Host_0, { color: "color" }, {}, ["*", "mat-toolbar-row"]);
```

According to sourcemaps, this declaration seems to be completely gone.
`MatToolbar.ɵfac` however, which I assume to be equivalent Ivy declaration, is present in the Ivy sample.

Using that knowledge I looked for more instances of the `"mat-toolbar-row"` string as a reference to this code, since it shouldn't be altered by minification.
Ivy has 5 references to `"mat-toolbar-row"` in the sample, whereas VE only has 1. In the whole bundle, Ivy has 7 references, whereas VE only has 4.

This in turn leads to the `MatToolbarRow` class.
In Ivy it is present in the sample as follows:
```
        let toolbar_MatToolbarRow = (() => {
            class MatToolbarRow {}
            return MatToolbarRow.ɵfac = function(t) {
                return new (t || MatToolbarRow);
            }, MatToolbarRow.ɵdir = core.Kb({
                type: MatToolbarRow,
                selectors: [ [ "mat-toolbar-row" ] ],
                hostBindings: function(rf, ctx, elIndex) {
                    1 & rf && core.Ub(toolbar_c0);
                },
                exportAs: [ "matToolbarRow" ]
            }), MatToolbarRow;
```

In VE the only reference I find is an empty class with no corresponding factory.
```
class MatToolbarRow {}
```

The VE sourcemaps also do not reference `MatToolbarRowNgFactory`.

This example seems to point towards Ivy containg factories that VE does not.

### material/button and material/card

The material/button and material/card modules both have very small factory-to-class ratios in VE. Like material/tabs, both seem to consist mostly of templates, and thus I expected them to be smaller in Ivy.

I extracted samples to `extracted-samples/button-ivy.js` and `button-ve.js`, plus `extracted-samples/card-ivy.js` and `card-ve.js`

material/button in VE consists of the main buton.js file (1.27 KB) plus button/index.ngfactory.js (7.42 KB) for a total of 8.69 KB. In Ivy it consists of a single module of 8.94 KB.

material/cards in VE consists of the main card.js file (57 B) plus card/index.ngfactory.js (2.66 KB) for a total of 3.23 KB. In Ivy it consists of a single module of 3.14 KB.

The material/cards sample is an interesting one. Just by looking at it it seems to contain a lot more code than the VE sample. However, it is mangled extremely well. That leaves the style string as the dominant contributor to bundle size, similar to VE.

> const c=[1,"mat-card"],l=["*",[["mat-card-footer"]]],u=["*","mat-card-footer"];let h=(()=>{class t{constructor(t){this._animationMode=t}}return t.ɵfac=function(e){return new(e||t)(r.Pb(o.a,8))},t.ɵcmp=r.Jb({type:t,selectors:[["mat-card"]],hostBindings:function(t,e,n){1&t&&(r.Bb(1),r.Ub(c)),2&t&&r.Fb("_mat-animation-noopable","NoopAnimations"===e._animationMode)},exportAs:["matCard"],ngContentSelectors:u,decls:2,vars:0,template:function(t,e){1&t&&(r.kc(l),r.jc(0),r.jc(1,1))},styles:[".mat-card{transition:box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);display:block;position:relative;padding:16px;border-radius:4px}._mat-animation-noopable.mat-card{transition:none;animation:none}.mat-card .mat-divider-horizontal{position:absolute;left:0;width:100%}[dir=rtl] .mat-card .mat-divider-horizontal{left:auto;right:0}.mat-card .mat-divider-horizontal.mat-divider-inset{position:static;margin:0}[dir=rtl] .mat-card .mat-divider-horizontal.mat-divider-inset{margin-right:0}@media(-ms-high-contrast: active){.mat-card{outline:solid 1px}}.mat-card-actions,.mat-card-subtitle,.mat-card-content{display:block;margin-bottom:16px}.mat-card-title{display:block;margin-bottom:8px}.mat-card-actions{margin-left:-8px;margin-right:-8px;padding:8px 0}.mat-card-actions-align-end{display:flex;justify-content:flex-end}.mat-card-image{width:calc(100% + 32px);margin:0 -16px 16px -16px}.mat-card-footer{display:block;margin:0 -16px -16px -16px}.mat-card-actions .mat-button,.mat-card-actions .mat-raised-button,.mat-card-actions .mat-stroked-button{margin:0 8px}.mat-card-header{display:flex;flex-direction:row}.mat-card-header .mat-card-title{margin-bottom:12px}.mat-card-header-text{margin:0 16px}.mat-card-avatar{height:40px;width:40px;border-radius:50%;flex-shrink:0;object-fit:cover}.mat-card-title-group{display:flex;justify-content:space-between}.mat-card-sm-image{width:80px;height:80px}.mat-card-md-image{width:112px;height:112px}.mat-card-lg-image{width:152px;height:152px}.mat-card-xl-image{width:240px;height:240px;margin:-8px}.mat-card-title-group>.mat-card-xl-image{margin:-8px 0 8px}@media(max-width: 599px){.mat-card-title-group{margin:0}.mat-card-xl-image{margin-left:0;margin-right:0}}.mat-card>:first-child,.mat-card-content>:first-child{margin-top:0}.mat-card>:last-child:not(.mat-card-footer),.mat-card-content>:last-child:not(.mat-card-footer){margin-bottom:0}.mat-card-image:first-child{margin-top:-16px;border-top-left-radius:inherit;border-top-right-radius:inherit}.mat-card>.mat-card-actions:last-child{margin-bottom:-8px;padding-bottom:0}.mat-card-actions .mat-button:first-child,.mat-card-actions .mat-raised-button:first-child,.mat-card-actions .mat-stroked-button:first-child{margin-left:0;margin-right:0}.mat-card-title:not(:first-child),.mat-card-subtitle:not(:first-child){margin-top:-4px}.mat-card-header .mat-card-subtitle:not(:first-child){margin-top:-8px}.mat-card>.mat-card-xl-image:first-child{margin-top:-8px}.mat-card>.mat-card-xl-image:last-child{margin-bottom:-8px}/*# sourceMappingURL=card.css.map */\n"],encapsulation:2,changeDetection:0}),t})(),d=(()=>{class t{}return t.ɵmod=r.Nb({type:t}),t.ɵinj=r.Mb({factory:function(e){return new(e||t)},imports:[[a.b],a.b]}),t})()

material/button contains a similar large style string, but also contains a lot more non-string code.