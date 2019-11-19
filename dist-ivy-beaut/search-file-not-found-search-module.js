(window.webpackJsonp = window.webpackJsonp || []).push([ [ 12 ], {
    Afo1: function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        var common = __webpack_require__("ofXK"), shared_module = __webpack_require__("PCNd"), switchMap = __webpack_require__("eIep"), core = __webpack_require__("fXoL"), location_service = __webpack_require__("/lUL"), search_service = __webpack_require__("to4i"), search_results_component = __webpack_require__("LwjS");
        let file_not_found_search_component_FileNotFoundSearchComponent = (() => {
            class FileNotFoundSearchComponent {
                constructor(location, search) {
                    this.location = location, this.search = search;
                }
                ngOnInit() {
                    this.searchResults = this.location.currentPath.pipe(Object(switchMap.a)(path => {
                        const query = path.split(/\W+/).join(" ");
                        return this.search.search(query);
                    }));
                }
            }
            return FileNotFoundSearchComponent.ɵfac = function(t) {
                return new (t || FileNotFoundSearchComponent)(core.Pb(location_service.a), core.Pb(search_service.a));
            }, FileNotFoundSearchComponent.ɵcmp = core.Jb({
                type: FileNotFoundSearchComponent,
                selectors: [ [ "aio-file-not-found-search" ] ],
                decls: 4,
                vars: 3,
                consts: [ [ 1, "embedded", 3, "searchResults" ] ],
                template: function(rf, ctx) {
                    1 & rf && (core.Vb(0, "p"), core.Ec(1, "Let's see if any of these search results help..."), 
                    core.Tb(), core.Qb(2, "aio-search-results", 0), core.hc(3, "async")), 2 & rf && (core.Ab(2), 
                    core.lc("searchResults", core.ic(3, 1, ctx.searchResults)));
                },
                directives: [ search_results_component.a ],
                pipes: [ common.b ],
                encapsulation: 2
            }), FileNotFoundSearchComponent;
        })();
        __webpack_require__.d(__webpack_exports__, "FileNotFoundSearchModule", (function() {
            return file_not_found_search_module_FileNotFoundSearchModule;
        }));
        let file_not_found_search_module_FileNotFoundSearchModule = (() => {
            class FileNotFoundSearchModule {
                constructor() {
                    this.customElementComponent = file_not_found_search_component_FileNotFoundSearchComponent;
                }
            }
            return FileNotFoundSearchModule.ɵmod = core.Nb({
                type: FileNotFoundSearchModule
            }), FileNotFoundSearchModule.ɵinj = core.Mb({
                factory: function(t) {
                    return new (t || FileNotFoundSearchModule);
                },
                imports: [ [ common.c, shared_module.a ] ]
            }), FileNotFoundSearchModule;
        })();
    }
} ]);
//# sourceMappingURL=search-file-not-found-search-module.js.map