(window.webpackJsonp = window.webpackJsonp || []).push([ [ 11 ], {
    "6U+v": function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        var common = __webpack_require__("ofXK"), core = __webpack_require__("fXoL"), map = __webpack_require__("lJxs"), publishLast = __webpack_require__("qZ0a"), document_service = __webpack_require__("jn67"), http = __webpack_require__("tk/3");
        const resourcesPath = document_service.a + "resources.json";
        let resource_service_ResourceService = (() => {
            class ResourceService {
                constructor(http) {
                    this.http = http, this.categories = this.getCategories();
                }
                getCategories() {
                    const categories = this.http.get(resourcesPath).pipe(Object(map.a)(data => (function(categoryJson) {
                        return Object.keys(categoryJson).map(catKey => {
                            const cat = categoryJson[catKey];
                            return {
                                id: makeId(catKey),
                                title: catKey,
                                order: cat.order,
                                subCategories: mkSubCategories(cat.subCategories, catKey)
                            };
                        }).sort(compareCats);
                    })(data)), Object(publishLast.a)());
                    return categories.connect(), categories;
                }
            }
            return ResourceService.ɵfac = function(t) {
                return new (t || ResourceService)(core.Zb(http.a));
            }, ResourceService.ɵprov = core.Lb({
                token: ResourceService,
                factory: function(t) {
                    return ResourceService.ɵfac(t);
                },
                providedIn: null
            }), ResourceService;
        })();
        function mkSubCategories(subCategoryJson, catKey) {
            return Object.keys(subCategoryJson).map(subKey => {
                const sub = subCategoryJson[subKey];
                return {
                    id: makeId(subKey),
                    title: subKey,
                    order: sub.order,
                    resources: mkResources(sub.resources, subKey, catKey)
                };
            }).sort(compareCats);
        }
        function mkResources(resourceJson, subKey, catKey) {
            return Object.keys(resourceJson).map(resKey => {
                const res = resourceJson[resKey];
                return res.category = catKey, res.subCategory = subKey, res.id = makeId(resKey), 
                res;
            }).sort(compareTitles);
        }
        function compareCats(l, r) {
            return l.order === r.order ? compareTitles(l, r) : l.order > r.order ? 1 : -1;
        }
        function compareTitles(l, r) {
            return l.title.toUpperCase() > r.title.toUpperCase() ? 1 : -1;
        }
        function makeId(title) {
            return title.toLowerCase().replace(/\s+/g, "-");
        }
        function ResourceListComponent_div_2_div_6_div_4_div_1_Template(rf, ctx) {
            if (1 & rf && (core.Vb(0, "div", 10), core.Vb(1, "a", 11), core.Vb(2, "div"), core.Vb(3, "h4"), 
            core.Ec(4), core.Tb(), core.Vb(5, "p", 12), core.Ec(6), core.Tb(), core.Tb(), core.Tb(), 
            core.Tb()), 2 & rf) {
                const resource_r86 = core.gc().$implicit;
                core.Ab(1), core.lc("href", resource_r86.url, core.wc), core.Ab(3), core.Fc(resource_r86.title), 
                core.Ab(2), core.Fc(resource_r86.desc || "No Description");
            }
        }
        function ResourceListComponent_div_2_div_6_div_4_Template(rf, ctx) {
            if (1 & rf && (core.Vb(0, "div"), core.Cc(1, ResourceListComponent_div_2_div_6_div_4_div_1_Template, 7, 3, "div", 9), 
            core.Tb()), 2 & rf) {
                const resource_r86 = ctx.$implicit;
                core.Ab(1), core.lc("ngIf", resource_r86.rev);
            }
        }
        function ResourceListComponent_div_2_div_6_Template(rf, ctx) {
            if (1 & rf && (core.Vb(0, "div"), core.Qb(1, "a", 5), core.Vb(2, "h3", 8), core.Ec(3), 
            core.Tb(), core.Cc(4, ResourceListComponent_div_2_div_6_div_4_Template, 2, 1, "div", 7), 
            core.Tb()), 2 & rf) {
                const subCategory_r84 = ctx.$implicit;
                core.Ab(1), core.mc("id", subCategory_r84.id), core.Ab(2), core.Fc(subCategory_r84.title), 
                core.Ab(1), core.lc("ngForOf", subCategory_r84.resources);
            }
        }
        function ResourceListComponent_div_2_Template(rf, ctx) {
            if (1 & rf && (core.Vb(0, "div", 3), core.Vb(1, "header", 4), core.Qb(2, "a", 5), 
            core.Vb(3, "h2"), core.Ec(4), core.Tb(), core.Tb(), core.Vb(5, "div", 6), core.Cc(6, ResourceListComponent_div_2_div_6_Template, 5, 3, "div", 7), 
            core.Tb(), core.Tb()), 2 & rf) {
                const category_r82 = ctx.$implicit;
                core.Ab(2), core.mc("id", category_r82.id), core.Ab(2), core.Fc(category_r82.title), 
                core.Ab(2), core.lc("ngForOf", category_r82.subCategories);
            }
        }
        let resource_list_component_ResourceListComponent = (() => {
            class ResourceListComponent {
                constructor(location, resourceService) {
                    this.resourceService = resourceService, this.scrollPos = 0, this.location = location.pathname.replace(/^\/+/, "");
                }
                href(cat) {
                    return this.location + "#" + cat.id;
                }
                ngOnInit() {
                    this.resourceService.categories.subscribe(cats => this.categories = cats);
                }
                onScroll(target) {
                    this.scrollPos = target && (target.scrollTop || target.body.scrollTop) || 0;
                }
            }
            return ResourceListComponent.ɵfac = function(t) {
                return new (t || ResourceListComponent)(core.Pb(common.q), core.Pb(resource_service_ResourceService));
            }, ResourceListComponent.ɵcmp = core.Jb({
                type: ResourceListComponent,
                selectors: [ [ "aio-resource-list" ] ],
                hostBindings: function(rf, ctx, elIndex) {
                    1 & rf && core.cc("scroll", (function($event) {
                        return ctx.onScroll($event.target);
                    }), !1, core.tc);
                },
                decls: 3,
                vars: 1,
                consts: [ [ 1, "resources-container" ], [ 1, "l-flex--column" ], [ "class", "showcase", 4, "ngFor", "ngForOf" ], [ 1, "showcase" ], [ 1, "c-resource-header" ], [ 1, "h-anchor-offset", 3, "id" ], [ 1, "shadow-1" ], [ 4, "ngFor", "ngForOf" ], [ 1, "subcategory-title" ], [ "class", "c-resource", 4, "ngIf" ], [ 1, "c-resource" ], [ "target", "_blank", 1, "l-flex--column", "resource-row-link", 3, "href" ], [ 1, "resource-description" ] ],
                template: function(rf, ctx) {
                    1 & rf && (core.Vb(0, "div", 0), core.Vb(1, "div", 1), core.Cc(2, ResourceListComponent_div_2_Template, 7, 3, "div", 2), 
                    core.Tb(), core.Tb()), 2 & rf && (core.Ab(2), core.lc("ngForOf", ctx.categories));
                },
                directives: [ common.j, common.k ],
                encapsulation: 2
            }), ResourceListComponent;
        })();
        __webpack_require__.d(__webpack_exports__, "ResourceListModule", (function() {
            return resource_list_module_ResourceListModule;
        }));
        let resource_list_module_ResourceListModule = (() => {
            class ResourceListModule {
                constructor() {
                    this.customElementComponent = resource_list_component_ResourceListComponent;
                }
            }
            return ResourceListModule.ɵmod = core.Nb({
                type: ResourceListModule
            }), ResourceListModule.ɵinj = core.Mb({
                factory: function(t) {
                    return new (t || ResourceListModule);
                },
                providers: [ resource_service_ResourceService ],
                imports: [ [ common.c ] ]
            }), ResourceListModule;
        })();
    }
} ]);
//# sourceMappingURL=resource-resource-list-module.js.map