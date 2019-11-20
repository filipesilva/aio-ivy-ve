(window.webpackJsonp = window.webpackJsonp || []).push([ [ 3 ], {
    "/CO3": function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        var core = __webpack_require__("8Y7J"), ReplaySubject = __webpack_require__("jtHE"), combineLatest = __webpack_require__("itXk"), map = __webpack_require__("lJxs");
        class SearchCriteria {
            constructor() {
                this.query = "", this.status = "all", this.type = "all";
            }
        }
        class api_list_component_ApiListComponent {
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
        class api_list_module_ApiListModule {
            constructor() {
                this.customElementComponent = api_list_component_ApiListComponent;
            }
        }
        var common = __webpack_require__("SVse"), select_component_ngfactory = __webpack_require__("1nbL"), select_component = __webpack_require__("x4lQ"), Subject = __webpack_require__("XNiG"), takeUntil = __webpack_require__("1G5W"), tap = __webpack_require__("vkgz"), document_service = __webpack_require__("jn67");
        class api_service_ApiService {
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
        var location_service = __webpack_require__("/lUL"), RenderType_ApiListComponent = core.ub({
            encapsulation: 2,
            styles: [],
            data: {}
        });
        function View_ApiListComponent_2(_l) {
            return core.Ub(0, [ (_l()(), core.wb(0, 0, null, null, 2, "h2", [], null, null, null, null, null)), (_l()(), 
            core.wb(1, 0, null, null, 1, "a", [], [ [ 8, "href", 4 ], [ 2, "deprecated-api-item", null ] ], null, null, null, null)), (_l()(), 
            core.Rb(2, null, [ "", "" ])) ], null, (function(_ck, _v) {
                _ck(_v, 1, 0, _v.parent.context.$implicit.path, _v.parent.context.$implicit.deprecated), 
                _ck(_v, 2, 0, _v.parent.context.$implicit.title);
            }));
        }
        function View_ApiListComponent_4(_l) {
            return core.Ub(0, [ (_l()(), core.wb(0, 0, null, null, 4, null, null, null, null, null, null, null)), (_l()(), 
            core.wb(1, 0, null, null, 3, "li", [ [ "class", "api-item" ] ], null, null, null, null, null)), (_l()(), 
            core.wb(2, 0, null, null, 2, "a", [], [ [ 8, "href", 4 ], [ 2, "deprecated-api-item", null ] ], null, null, null, null)), (_l()(), 
            core.wb(3, 0, null, null, 0, "span", [], [ [ 8, "className", 0 ] ], null, null, null, null)), (_l()(), 
            core.Rb(4, null, [ " ", " " ])) ], null, (function(_ck, _v) {
                _ck(_v, 2, 0, _v.context.$implicit.path, "deprecated" === _v.context.$implicit.stability), 
                _ck(_v, 3, 0, core.Bb(1, "symbol ", _v.context.$implicit.docType, "")), _ck(_v, 4, 0, _v.context.$implicit.title);
            }));
        }
        function View_ApiListComponent_3(_l) {
            return core.Ub(0, [ (_l()(), core.wb(0, 0, null, null, 2, "ul", [ [ "class", "api-list" ] ], null, null, null, null, null)), (_l()(), 
            core.gb(16777216, null, null, 1, null, View_ApiListComponent_4)), core.vb(2, 278528, null, 0, common.j, [ core.O, core.L, core.r ], {
                ngForOf: [ 0, "ngForOf" ]
            }, null) ], (function(_ck, _v) {
                _ck(_v, 2, 0, _v.parent.context.$implicit.items);
            }), null);
        }
        function View_ApiListComponent_1(_l) {
            return core.Ub(0, [ (_l()(), core.wb(0, 0, null, null, 4, "div", [], null, null, null, null, null)), (_l()(), 
            core.gb(16777216, null, null, 1, null, View_ApiListComponent_2)), core.vb(2, 16384, null, 0, common.k, [ core.O, core.L ], {
                ngIf: [ 0, "ngIf" ]
            }, null), (_l()(), core.gb(16777216, null, null, 1, null, View_ApiListComponent_3)), core.vb(4, 16384, null, 0, common.k, [ core.O, core.L ], {
                ngIf: [ 0, "ngIf" ]
            }, null) ], (function(_ck, _v) {
                _ck(_v, 2, 0, _v.context.$implicit.items), _ck(_v, 4, 0, _v.context.$implicit.items && _v.context.$implicit.items.length);
            }), null);
        }
        function View_ApiListComponent_0(_l) {
            return core.Ub(0, [ core.Nb(402653184, 1, {
                queryEl: 0
            }), (_l()(), core.wb(1, 0, null, null, 8, "div", [ [ "class", "l-flex-wrap api-filter" ] ], null, null, null, null, null)), (_l()(), 
            core.wb(2, 0, null, null, 1, "aio-select", [ [ "label", "Type:" ] ], null, [ [ null, "change" ], [ "document", "click" ], [ "document", "keydown.escape" ] ], (function(_v, en, $event) {
                var ad = !0, _co = _v.component;
                return "document:click" === en && (ad = !1 !== core.Jb(_v, 3).onClick($event.target) && ad), 
                "document:keydown.escape" === en && (ad = !1 !== core.Jb(_v, 3).onKeyDown() && ad), 
                "change" === en && (ad = !1 !== _co.setType($event.option) && ad), ad;
            }), select_component_ngfactory.b, select_component_ngfactory.a)), core.vb(3, 114688, null, 0, select_component.a, [ core.k ], {
                selected: [ 0, "selected" ],
                options: [ 1, "options" ],
                showSymbol: [ 2, "showSymbol" ],
                label: [ 3, "label" ]
            }, {
                change: "change"
            }), (_l()(), core.wb(4, 0, null, null, 1, "aio-select", [ [ "label", "Status:" ] ], null, [ [ null, "change" ], [ "document", "click" ], [ "document", "keydown.escape" ] ], (function(_v, en, $event) {
                var ad = !0, _co = _v.component;
                return "document:click" === en && (ad = !1 !== core.Jb(_v, 5).onClick($event.target) && ad), 
                "document:keydown.escape" === en && (ad = !1 !== core.Jb(_v, 5).onKeyDown() && ad), 
                "change" === en && (ad = !1 !== _co.setStatus($event.option) && ad), ad;
            }), select_component_ngfactory.b, select_component_ngfactory.a)), core.vb(5, 114688, null, 0, select_component.a, [ core.k ], {
                selected: [ 0, "selected" ],
                options: [ 1, "options" ],
                label: [ 2, "label" ],
                disabled: [ 3, "disabled" ]
            }, {
                change: "change"
            }), (_l()(), core.wb(6, 0, null, null, 3, "div", [ [ "class", "form-search" ] ], null, null, null, null, null)), (_l()(), 
            core.wb(7, 0, [ [ 1, 0 ], [ "filter", 1 ] ], null, 0, "input", [ [ "aria-label", "Filter Search" ], [ "placeholder", "Filter" ] ], null, [ [ null, "input" ] ], (function(_v, en, $event) {
                var ad = !0;
                return "input" === en && (ad = !1 !== _v.component.setQuery($event.target.value) && ad), 
                ad;
            }), null, null)), (_l()(), core.wb(8, 0, null, null, 1, "i", [ [ "class", "material-icons" ] ], null, null, null, null, null)), (_l()(), 
            core.Rb(-1, null, [ "search" ])), (_l()(), core.wb(10, 0, null, null, 3, "article", [ [ "class", "api-list-container l-content-small docs-content" ] ], null, null, null, null, null)), (_l()(), 
            core.gb(16777216, null, null, 2, null, View_ApiListComponent_1)), core.vb(12, 278528, null, 0, common.j, [ core.O, core.L, core.r ], {
                ngForOf: [ 0, "ngForOf" ]
            }, null), core.Kb(131072, common.b, [ core.h ]) ], (function(_ck, _v) {
                var _co = _v.component;
                _ck(_v, 3, 0, _co.type, _co.types, !0, "Type:"), _ck(_v, 5, 0, _co.status, _co.statuses, "Status:", "package" === _co.type.value), 
                _ck(_v, 12, 0, core.Sb(_v, 12, 0, core.Jb(_v, 13).transform(_co.filteredSections)));
            }), null);
        }
        function View_ApiListComponent_Host_0(_l) {
            return core.Ub(0, [ (_l()(), core.wb(0, 0, null, null, 1, "aio-api-list", [], null, null, null, View_ApiListComponent_0, RenderType_ApiListComponent)), core.vb(1, 114688, null, 0, api_list_component_ApiListComponent, [ api_service_ApiService, location_service.a ], null, null) ], (function(_ck, _v) {
                _ck(_v, 1, 0);
            }), null);
        }
        var ApiListComponentNgFactory = core.sb("aio-api-list", api_list_component_ApiListComponent, View_ApiListComponent_Host_0, {}, {}, []), fesm2015_http = __webpack_require__("IheW"), logger_service = __webpack_require__("vHPH"), shared_module = __webpack_require__("PCNd");
        __webpack_require__.d(__webpack_exports__, "ApiListModuleNgFactory", (function() {
            return ApiListModuleNgFactory;
        }));
        var ApiListModuleNgFactory = core.tb(api_list_module_ApiListModule, [], (function(_l) {
            return core.Gb([ core.Hb(512, core.j, core.Y, [ [ 8, [ ApiListComponentNgFactory ] ], [ 3, core.j ], core.w ]), core.Hb(4608, common.m, common.l, [ core.t ]), core.Hb(4608, fesm2015_http.h, fesm2015_http.n, [ common.d, core.A, fesm2015_http.l ]), core.Hb(4608, fesm2015_http.o, fesm2015_http.o, [ fesm2015_http.h, fesm2015_http.m ]), core.Hb(5120, fesm2015_http.a, (function(p0_0) {
                return [ p0_0 ];
            }), [ fesm2015_http.o ]), core.Hb(4608, fesm2015_http.k, fesm2015_http.k, []), core.Hb(6144, fesm2015_http.i, null, [ fesm2015_http.k ]), core.Hb(4608, fesm2015_http.g, fesm2015_http.g, [ fesm2015_http.i ]), core.Hb(6144, fesm2015_http.b, null, [ fesm2015_http.g ]), core.Hb(4608, fesm2015_http.f, fesm2015_http.j, [ fesm2015_http.b, core.q ]), core.Hb(4608, fesm2015_http.c, fesm2015_http.c, [ fesm2015_http.f ]), core.Hb(135680, api_service_ApiService, api_service_ApiService, [ fesm2015_http.c, logger_service.a ]), core.Hb(1073742336, common.c, common.c, []), core.Hb(1073742336, shared_module.a, shared_module.a, []), core.Hb(1073742336, fesm2015_http.e, fesm2015_http.e, []), core.Hb(1073742336, fesm2015_http.d, fesm2015_http.d, []), core.Hb(1073742336, api_list_module_ApiListModule, api_list_module_ApiListModule, []), core.Hb(256, fesm2015_http.l, "XSRF-TOKEN", []), core.Hb(256, fesm2015_http.m, "X-XSRF-TOKEN", []) ]);
        }));
    }
} ]);
//# sourceMappingURL=api-api-list-module-ngfactory.js.map