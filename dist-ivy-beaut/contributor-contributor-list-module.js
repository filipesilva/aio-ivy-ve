(window.webpackJsonp = window.webpackJsonp || []).push([ [ 7 ], {
    fPy6: function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        var common = __webpack_require__("ofXK"), icon = __webpack_require__("NFeN"), core = __webpack_require__("fXoL"), map = __webpack_require__("lJxs"), publishLast = __webpack_require__("qZ0a"), document_service = __webpack_require__("jn67"), http = __webpack_require__("tk/3");
        const contributorsPath = document_service.a + "contributors.json", knownGroups = [ "Angular", "Collaborators", "GDE" ];
        let contributor_service_ContributorService = (() => {
            class ContributorService {
                constructor(http) {
                    this.http = http, this.contributors = this.getContributors();
                }
                getContributors() {
                    const contributors = this.http.get(contributorsPath).pipe(Object(map.a)(contribs => {
                        const contribMap = {};
                        return Object.keys(contribs).forEach(key => {
                            const contributor = contribs[key];
                            contributor.groups.forEach(group => {
                                (contribMap[group] || (contribMap[group] = [])).push(contributor);
                            });
                        }), contribMap;
                    }), Object(map.a)(cmap => Object.keys(cmap).map(key => {
                        const order = knownGroups.indexOf(key);
                        return {
                            name: key,
                            order: -1 === order ? knownGroups.length : order,
                            contributors: cmap[key].sort(compareContributors)
                        };
                    }).sort(compareGroups)), Object(publishLast.a)());
                    return contributors.connect(), contributors;
                }
            }
            return ContributorService.ɵfac = function(t) {
                return new (t || ContributorService)(core.Zb(http.a));
            }, ContributorService.ɵprov = core.Lb({
                token: ContributorService,
                factory: function(t) {
                    return ContributorService.ɵfac(t);
                },
                providedIn: null
            }), ContributorService;
        })();
        function compareContributors(l, r) {
            return l.name.toUpperCase() > r.name.toUpperCase() ? 1 : -1;
        }
        function compareGroups(l, r) {
            return l.order === r.order ? l.name > r.name ? 1 : -1 : l.order > r.order ? 1 : -1;
        }
        var location_service = __webpack_require__("/lUL");
        function ContributorComponent_a_6_Template(rf, ctx) {
            1 & rf && (core.Vb(0, "a", 7), core.Ec(1, " View Bio "), core.Tb());
        }
        function ContributorComponent_a_7_Template(rf, ctx) {
            if (1 & rf) {
                const _r75 = core.Wb();
                core.Vb(0, "a", 8), core.cc("click", (function($event) {
                    return core.uc(_r75), $event.stopPropagation();
                })), core.Qb(1, "mat-icon", 9), core.Tb();
            }
            if (2 & rf) {
                const ctx_r71 = core.gc();
                core.nc("href", "https://twitter.com/", ctx_r71.person.twitter, "", core.wc);
            }
        }
        function ContributorComponent_a_8_Template(rf, ctx) {
            if (1 & rf) {
                const _r77 = core.Wb();
                core.Vb(0, "a", 8), core.cc("click", (function($event) {
                    return core.uc(_r77), $event.stopPropagation();
                })), core.Vb(1, "mat-icon", 10), core.Ec(2, "link"), core.Tb(), core.Tb();
            }
            if (2 & rf) {
                const ctx_r72 = core.gc();
                core.mc("href", ctx_r72.person.website, core.wc);
            }
        }
        function ContributorComponent_div_9_Template(rf, ctx) {
            if (1 & rf) {
                const _r79 = core.Wb();
                core.Vb(0, "div", 11), core.cc("click", (function($event) {
                    core.uc(_r79);
                    const ctx_r78 = core.gc();
                    return ctx_r78.flipCard(ctx_r78.person);
                })), core.cc("keyup.enter", (function($event) {
                    core.uc(_r79);
                    const ctx_r80 = core.gc();
                    return ctx_r80.flipCard(ctx_r80.person);
                })), core.Vb(1, "h3"), core.Ec(2), core.Tb(), core.Vb(3, "p", 12), core.Ec(4), core.Tb(), 
                core.Tb();
            }
            if (2 & rf) {
                const ctx_r73 = core.gc();
                core.Ab(2), core.Fc(ctx_r73.person.name), core.Ab(2), core.Fc(ctx_r73.person.bio);
            }
        }
        const _c0 = function(a0) {
            return {
                flipped: a0
            };
        };
        let contributor_component_ContributorComponent = (() => {
            class ContributorComponent {
                constructor() {
                    this.noPicture = "_no-one.png", this.pictureBase = document_service.a + "images/bios/";
                }
                flipCard(person) {
                    person.isFlipped = !person.isFlipped;
                }
            }
            return ContributorComponent.ɵfac = function(t) {
                return new (t || ContributorComponent);
            }, ContributorComponent.ɵcmp = core.Jb({
                type: ContributorComponent,
                selectors: [ [ "aio-contributor" ] ],
                inputs: {
                    person: "person"
                },
                decls: 10,
                vars: 9,
                consts: [ [ 1, "contributor-card", 3, "ngClass" ], [ 1, "card-front", 3, "click", "keyup.enter" ], [ 1, "contributor-image" ], [ 1, "contributor-info" ], [ "mat-button", "", "class", "info-item", 4, "ngIf" ], [ "mat-icon-button", "", "class", "info-item icon", "target", "_blank", 3, "href", "click", 4, "ngIf" ], [ "class", "card-back", 3, "click", "keyup.enter", 4, "ngIf" ], [ "mat-button", "", 1, "info-item" ], [ "mat-icon-button", "", "target", "_blank", 1, "info-item", "icon", 3, "href", "click" ], [ "svgIcon", "logos:twitter" ], [ 1, "link-icon" ], [ 1, "card-back", 3, "click", "keyup.enter" ], [ 1, "contributor-bio" ] ],
                template: function(rf, ctx) {
                    1 & rf && (core.Vb(0, "div", 0), core.Vb(1, "div", 1), core.cc("click", (function($event) {
                        return ctx.flipCard(ctx.person);
                    })), core.cc("keyup.enter", (function($event) {
                        return ctx.flipCard(ctx.person);
                    })), core.Vb(2, "h3"), core.Ec(3), core.Tb(), core.Vb(4, "div", 2), core.Vb(5, "div", 3), 
                    core.Cc(6, ContributorComponent_a_6_Template, 2, 0, "a", 4), core.Cc(7, ContributorComponent_a_7_Template, 2, 1, "a", 5), 
                    core.Cc(8, ContributorComponent_a_8_Template, 3, 1, "a", 5), core.Tb(), core.Tb(), 
                    core.Tb(), core.Cc(9, ContributorComponent_div_9_Template, 5, 2, "div", 6), core.Tb()), 
                    2 & rf && (core.lc("ngClass", core.oc(7, _c0, ctx.person.isFlipped)), core.Ab(3), 
                    core.Fc(ctx.person.name), core.Ab(1), core.Bc(core.Ib), core.Ac("background-image", "url(" + ctx.pictureBase + (ctx.person.picture || ctx.noPicture) + ")"), 
                    core.Ab(2), core.lc("ngIf", ctx.person.bio), core.Ab(1), core.lc("ngIf", ctx.person.twitter), 
                    core.Ab(1), core.lc("ngIf", ctx.person.website), core.Ab(1), core.lc("ngIf", ctx.person.isFlipped));
                },
                directives: [ common.i, common.k, icon.a ],
                encapsulation: 2
            }), ContributorComponent;
        })();
        function ContributorListComponent_a_1_Template(rf, ctx) {
            if (1 & rf) {
                const _r66 = core.Wb();
                core.Vb(0, "a", 3), core.cc("click", (function($event) {
                    core.uc(_r66);
                    const name_r64 = ctx.$implicit;
                    return core.gc().selectGroup(name_r64);
                })), core.cc("keyup.enter", (function($event) {
                    core.uc(_r66);
                    const name_r64 = ctx.$implicit;
                    return core.gc().selectGroup(name_r64);
                })), core.Ec(1), core.Tb();
            }
            if (2 & rf) {
                const name_r64 = ctx.$implicit, ctx_r62 = core.gc();
                core.Fb("selected", name_r64 == ctx_r62.selectedGroup.name), core.Ab(1), core.Fc(name_r64);
            }
        }
        function ContributorListComponent_section_2_aio_contributor_2_Template(rf, ctx) {
            1 & rf && core.Qb(0, "aio-contributor", 7), 2 & rf && core.lc("person", ctx.$implicit);
        }
        function ContributorListComponent_section_2_Template(rf, ctx) {
            if (1 & rf && (core.Vb(0, "section", 4), core.Vb(1, "div", 5), core.Cc(2, ContributorListComponent_section_2_aio_contributor_2_Template, 1, 1, "aio-contributor", 6), 
            core.Tb(), core.Tb()), 2 & rf) {
                const ctx_r63 = core.gc();
                core.Ab(2), core.lc("ngForOf", ctx_r63.selectedGroup.contributors);
            }
        }
        let contributor_list_component_ContributorListComponent = (() => {
            class ContributorListComponent {
                constructor(contributorService, locationService) {
                    this.contributorService = contributorService, this.locationService = locationService;
                }
                ngOnInit() {
                    const groupName = this.locationService.search().group || "";
                    this.contributorService.contributors.subscribe(grps => {
                        this.groups = grps, this.groupNames = grps.map(g => g.name), this.selectGroup(groupName);
                    });
                }
                selectGroup(name) {
                    name = name.toLowerCase(), this.selectedGroup = this.groups.find(g => g.name.toLowerCase() === name) || this.groups[0], 
                    this.locationService.setSearch("", {
                        group: this.selectedGroup.name
                    });
                }
            }
            return ContributorListComponent.ɵfac = function(t) {
                return new (t || ContributorListComponent)(core.Pb(contributor_service_ContributorService), core.Pb(location_service.a));
            }, ContributorListComponent.ɵcmp = core.Jb({
                type: ContributorListComponent,
                selectors: [ [ "aio-contributor-list" ] ],
                decls: 3,
                vars: 2,
                consts: [ [ 1, "flex-center", "group-buttons" ], [ "class", "button mat-button filter-button", 3, "selected", "click", "keyup.enter", 4, "ngFor", "ngForOf" ], [ "class", "grid-fluid", 4, "ngIf" ], [ 1, "button", "mat-button", "filter-button", 3, "click", "keyup.enter" ], [ 1, "grid-fluid" ], [ 1, "contributor-group" ], [ 3, "person", 4, "ngFor", "ngForOf" ], [ 3, "person" ] ],
                template: function(rf, ctx) {
                    1 & rf && (core.Vb(0, "div", 0), core.Cc(1, ContributorListComponent_a_1_Template, 2, 2, "a", 1), 
                    core.Tb(), core.Cc(2, ContributorListComponent_section_2_Template, 3, 1, "section", 2)), 
                    2 & rf && (core.Ab(1), core.lc("ngForOf", ctx.groupNames), core.Ab(1), core.lc("ngIf", ctx.selectedGroup));
                },
                directives: [ common.j, common.k, contributor_component_ContributorComponent ],
                encapsulation: 2
            }), ContributorListComponent;
        })();
        __webpack_require__.d(__webpack_exports__, "ContributorListModule", (function() {
            return contributor_list_module_ContributorListModule;
        }));
        let contributor_list_module_ContributorListModule = (() => {
            class ContributorListModule {
                constructor() {
                    this.customElementComponent = contributor_list_component_ContributorListComponent;
                }
            }
            return ContributorListModule.ɵmod = core.Nb({
                type: ContributorListModule
            }), ContributorListModule.ɵinj = core.Mb({
                factory: function(t) {
                    return new (t || ContributorListModule);
                },
                providers: [ contributor_service_ContributorService ],
                imports: [ [ common.c, icon.b ] ]
            }), ContributorListModule;
        })();
    }
} ]);
//# sourceMappingURL=contributor-contributor-list-module.js.map