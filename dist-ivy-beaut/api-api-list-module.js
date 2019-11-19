(window.webpackJsonp = window.webpackJsonp || []).push([ [ 3 ], {
    dth9: function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        var common = __webpack_require__("ofXK"), fesm2015_http = __webpack_require__("tk/3"), shared_module = __webpack_require__("PCNd"), ReplaySubject = __webpack_require__("jtHE"), combineLatest = __webpack_require__("itXk"), map = __webpack_require__("lJxs"), core = __webpack_require__("fXoL"), Subject = __webpack_require__("XNiG"), takeUntil = __webpack_require__("1G5W"), tap = __webpack_require__("vkgz"), document_service = __webpack_require__("jn67"), logger_service = __webpack_require__("vHPH");
        let api_service_ApiService = (() => {
            class ApiService {
                constructor(http, logger) {
                    this.http = http, this.logger = logger, this.apiBase = document_service.b + "api/", 
                    this.apiListJsonDefault = "api-list.json", this.firstTime = !0, this.onDestroy = new Subject.a, 
                    this.sectionsSubject = new ReplaySubject.a(1), this._sections = this.sectionsSubject.pipe(Object(takeUntil.a)(this.onDestroy));
                }
                get sections() {
                    return this.firstTime && (this.firstTime = !1, this.fetchSections(), this._sections.subscribe(sections => this.logger.log(`ApiService got API ${sections.length} section(s)`))), 
                    this._sections.pipe(Object(tap.a)(sections => {
                        sections.forEach(section => {
                            section.deprecated = !!section.items && section.items.every(item => "deprecated" === item.stability);
                        });
                    }));
                }
                ngOnDestroy() {
                    this.onDestroy.next();
                }
                fetchSections(src) {
                    const url = this.apiBase + (src || this.apiListJsonDefault);
                    this.http.get(url).pipe(Object(takeUntil.a)(this.onDestroy), Object(tap.a)(() => this.logger.log(`Got API sections from ${url}`))).subscribe(sections => this.sectionsSubject.next(sections), err => {
                        throw this.logger.error(err), err;
                    });
                }
            }
            return ApiService.ɵfac = function(t) {
                return new (t || ApiService)(core.Zb(fesm2015_http.a), core.Zb(logger_service.a));
            }, ApiService.ɵprov = core.Lb({
                token: ApiService,
                factory: function(t) {
                    return ApiService.ɵfac(t);
                },
                providedIn: null
            }), ApiService;
        })();
        var location_service = __webpack_require__("/lUL"), select_component = __webpack_require__("x4lQ");
        const _c0 = [ "filter" ];
        function ApiListComponent_div_9_h2_1_Template(rf, ctx) {
            if (1 & rf && (core.Vb(0, "h2"), core.Vb(1, "a", 11), core.Ec(2), core.Tb(), core.Tb()), 
            2 & rf) {
                const section_r55 = core.gc().$implicit;
                core.Ab(1), core.Fb("deprecated-api-item", section_r55.deprecated), core.lc("href", section_r55.path, core.wc), 
                core.Ab(1), core.Fc(section_r55.title);
            }
        }
        function ApiListComponent_div_9_ul_2_ng_container_1_Template(rf, ctx) {
            if (1 & rf && (core.Sb(0), core.Vb(1, "li", 13), core.Vb(2, "a", 11), core.Qb(3, "span"), 
            core.Ec(4), core.Tb(), core.Tb(), core.Rb()), 2 & rf) {
                const item_r60 = ctx.$implicit;
                core.Ab(2), core.Fb("deprecated-api-item", "deprecated" === item_r60.stability), 
                core.lc("href", item_r60.path, core.wc), core.Ab(1), core.Eb("symbol ", item_r60.docType, ""), 
                core.Ab(1), core.Gc(" ", item_r60.title, " ");
            }
        }
        function ApiListComponent_div_9_ul_2_Template(rf, ctx) {
            if (1 & rf && (core.Vb(0, "ul", 12), core.Cc(1, ApiListComponent_div_9_ul_2_ng_container_1_Template, 5, 6, "ng-container", 8), 
            core.Tb()), 2 & rf) {
                const section_r55 = core.gc().$implicit;
                core.Ab(1), core.lc("ngForOf", section_r55.items);
            }
        }
        function ApiListComponent_div_9_Template(rf, ctx) {
            if (1 & rf && (core.Vb(0, "div"), core.Cc(1, ApiListComponent_div_9_h2_1_Template, 3, 3, "h2", 9), 
            core.Cc(2, ApiListComponent_div_9_ul_2_Template, 2, 1, "ul", 10), core.Tb()), 2 & rf) {
                const section_r55 = ctx.$implicit;
                core.Ab(1), core.lc("ngIf", section_r55.items), core.Ab(1), core.lc("ngIf", section_r55.items && section_r55.items.length);
            }
        }
        class SearchCriteria {
            constructor() {
                this.query = "", this.status = "all", this.type = "all";
            }
        }
        let api_list_component_ApiListComponent = (() => {
            class ApiListComponent {
                constructor(apiService, locationService) {
                    this.apiService = apiService, this.locationService = locationService, this.showStatusMenu = !1, 
                    this.showTypeMenu = !1, this.criteriaSubject = new ReplaySubject.a(1), this.searchCriteria = new SearchCriteria, 
                    this.types = [ {
                        value: "all",
                        title: "All"
                    }, {
                        value: "class",
                        title: "Class"
                    }, {
                        value: "const",
                        title: "Const"
                    }, {
                        value: "decorator",
                        title: "Decorator"
                    }, {
                        value: "directive",
                        title: "Directive"
                    }, {
                        value: "enum",
                        title: "Enum"
                    }, {
                        value: "function",
                        title: "Function"
                    }, {
                        value: "interface",
                        title: "Interface"
                    }, {
                        value: "pipe",
                        title: "Pipe"
                    }, {
                        value: "ngmodule",
                        title: "NgModule"
                    }, {
                        value: "type-alias",
                        title: "Type alias"
                    }, {
                        value: "package",
                        title: "Package"
                    } ], this.statuses = [ {
                        value: "all",
                        title: "All"
                    }, {
                        value: "deprecated",
                        title: "Deprecated"
                    }, {
                        value: "security-risk",
                        title: "Security Risk"
                    } ];
                }
                ngOnInit() {
                    this.filteredSections = Object(combineLatest.a)([ this.apiService.sections, this.criteriaSubject ]).pipe(Object(map.a)(results => ({
                        sections: results[0],
                        criteria: results[1]
                    })), Object(map.a)(results => results.sections.map(section => Object.assign(Object.assign({}, section), {
                        items: this.filterSection(section, results.criteria)
                    })))), this.initializeSearchCriteria();
                }
                setQuery(query) {
                    this.setSearchCriteria({
                        query: (query || "").toLowerCase().trim()
                    });
                }
                setStatus(status) {
                    this.toggleStatusMenu(), this.status = status, this.setSearchCriteria({
                        status: status.value
                    });
                }
                setType(type) {
                    this.toggleTypeMenu(), this.type = type, this.setSearchCriteria({
                        type: type.value
                    });
                }
                toggleStatusMenu() {
                    this.showStatusMenu = !this.showStatusMenu;
                }
                toggleTypeMenu() {
                    this.showTypeMenu = !this.showTypeMenu;
                }
                filterSection(section, {query: query, status: status, type: type}) {
                    const sectionNameMatches = !query || -1 !== section.name.indexOf(query), items = section.items.filter(item => (item => "all" === type || type === item.docType)(item) && (item => "all" === status || status === item.stability || "security-risk" === status && item.securityRisk)(item) && (item => sectionNameMatches || -1 !== item.name.indexOf(query))(item));
                    return items.length ? items : sectionNameMatches && "package" === type ? [] : null;
                }
                initializeSearchCriteria() {
                    const {query: query, status: status, type: type} = this.locationService.search(), q = (query || "").toLowerCase();
                    this.queryEl.nativeElement.value = q, this.status = this.statuses.find(x => x.value === status) || this.statuses[0], 
                    this.type = this.types.find(x => x.value === type) || this.types[0], this.searchCriteria = {
                        query: q,
                        status: this.status.value,
                        type: this.type.value
                    }, this.criteriaSubject.next(this.searchCriteria);
                }
                setLocationSearch() {
                    const {query: query, status: status, type: type} = this.searchCriteria;
                    this.locationService.setSearch("API Search", {
                        query: query || void 0,
                        status: "all" !== status ? status : void 0,
                        type: "all" !== type ? type : void 0
                    });
                }
                setSearchCriteria(criteria) {
                    this.criteriaSubject.next(Object.assign(this.searchCriteria, criteria)), this.setLocationSearch();
                }
            }
            return ApiListComponent.ɵfac = function(t) {
                return new (t || ApiListComponent)(core.Pb(api_service_ApiService), core.Pb(location_service.a));
            }, ApiListComponent.ɵcmp = core.Jb({
                type: ApiListComponent,
                selectors: [ [ "aio-api-list" ] ],
                viewQuery: function(rf, ctx) {
                    var _t;
                    1 & rf && core.yc(_c0, !0), 2 & rf && core.qc(_t = core.dc()) && (ctx.queryEl = _t.first);
                },
                decls: 11,
                vars: 9,
                consts: [ [ 1, "l-flex-wrap", "api-filter" ], [ "label", "Type:", 3, "options", "selected", "showSymbol", "change" ], [ "label", "Status:", 3, "options", "selected", "disabled", "change" ], [ 1, "form-search" ], [ "placeholder", "Filter", "aria-label", "Filter Search", 3, "input" ], [ "filter", "" ], [ 1, "material-icons" ], [ 1, "api-list-container", "l-content-small", "docs-content" ], [ 4, "ngFor", "ngForOf" ], [ 4, "ngIf" ], [ "class", "api-list", 4, "ngIf" ], [ 3, "href" ], [ 1, "api-list" ], [ 1, "api-item" ] ],
                template: function(rf, ctx) {
                    1 & rf && (core.Vb(0, "div", 0), core.Vb(1, "aio-select", 1), core.cc("change", (function($event) {
                        return ctx.setType($event.option);
                    })), core.Tb(), core.Vb(2, "aio-select", 2), core.cc("change", (function($event) {
                        return ctx.setStatus($event.option);
                    })), core.Tb(), core.Vb(3, "div", 3), core.Vb(4, "input", 4, 5), core.cc("input", (function($event) {
                        return ctx.setQuery($event.target.value);
                    })), core.Tb(), core.Vb(6, "i", 6), core.Ec(7, "search"), core.Tb(), core.Tb(), 
                    core.Tb(), core.Vb(8, "article", 7), core.Cc(9, ApiListComponent_div_9_Template, 3, 2, "div", 8), 
                    core.hc(10, "async"), core.Tb()), 2 & rf && (core.Ab(1), core.lc("options", ctx.types)("selected", ctx.type)("showSymbol", !0), 
                    core.Ab(1), core.lc("options", ctx.statuses)("selected", ctx.status)("disabled", "package" === ctx.type.value), 
                    core.Ab(7), core.lc("ngForOf", core.ic(10, 7, ctx.filteredSections)));
                },
                directives: [ select_component.a, common.j, common.k ],
                pipes: [ common.b ],
                encapsulation: 2
            }), ApiListComponent;
        })();
        __webpack_require__.d(__webpack_exports__, "ApiListModule", (function() {
            return api_list_module_ApiListModule;
        }));
        let api_list_module_ApiListModule = (() => {
            class ApiListModule {
                constructor() {
                    this.customElementComponent = api_list_component_ApiListComponent;
                }
            }
            return ApiListModule.ɵmod = core.Nb({
                type: ApiListModule
            }), ApiListModule.ɵinj = core.Mb({
                factory: function(t) {
                    return new (t || ApiListModule);
                },
                providers: [ api_service_ApiService ],
                imports: [ [ common.c, shared_module.a, fesm2015_http.b ] ]
            }), ApiListModule;
        })();
    }
} ]);
//# sourceMappingURL=api-api-list-module.js.map