(window.webpackJsonp = window.webpackJsonp || []).push([ [ 7 ], {
    "ll+R": function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        var core = __webpack_require__("8Y7J");
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
        class contributor_list_module_ContributorListModule {
            constructor() {
                this.customElementComponent = ContributorListComponent;
            }
        }
        var index_ngfactory = __webpack_require__("XE/z"), icon = __webpack_require__("Tj54"), common = __webpack_require__("SVse"), document_service = __webpack_require__("jn67");
        class contributor_component_ContributorComponent {
            constructor() {
                this.noPicture = "_no-one.png", this.pictureBase = document_service.a + "images/bios/";
            }
            flipCard(person) {
                person.isFlipped = !person.isFlipped;
            }
        }
        var RenderType_ContributorComponent = core.ub({
            encapsulation: 2,
            styles: [],
            data: {}
        });
        function View_ContributorComponent_1(_l) {
            return core.Ub(0, [ (_l()(), core.wb(0, 0, null, null, 1, "a", [ [ "class", "info-item" ], [ "mat-button", "" ] ], null, null, null, null, null)), (_l()(), 
            core.Rb(-1, null, [ " View Bio " ])) ], null, null);
        }
        function View_ContributorComponent_2(_l) {
            return core.Ub(0, [ (_l()(), core.wb(0, 0, null, null, 2, "a", [ [ "class", "info-item icon" ], [ "mat-icon-button", "" ], [ "target", "_blank" ] ], [ [ 8, "href", 4 ] ], [ [ null, "click" ] ], (function(_v, en, $event) {
                var ad = !0;
                return "click" === en && (ad = !1 !== $event.stopPropagation() && ad), ad;
            }), null, null)), (_l()(), core.wb(1, 0, null, null, 1, "mat-icon", [ [ "class", "mat-icon notranslate" ], [ "role", "img" ], [ "svgIcon", "logos:twitter" ] ], [ [ 2, "mat-icon-inline", null ], [ 2, "mat-icon-no-color", null ] ], null, null, index_ngfactory.b, index_ngfactory.a)), core.vb(2, 9158656, null, 0, icon.b, [ core.k, icon.d, [ 8, null ], [ 2, icon.a ], [ 2, core.l ] ], {
                svgIcon: [ 0, "svgIcon" ]
            }, null) ], (function(_ck, _v) {
                _ck(_v, 2, 0, "logos:twitter");
            }), (function(_ck, _v) {
                _ck(_v, 0, 0, core.Bb(1, "https://twitter.com/", _v.component.person.twitter, "")), 
                _ck(_v, 1, 0, core.Jb(_v, 2).inline, "primary" !== core.Jb(_v, 2).color && "accent" !== core.Jb(_v, 2).color && "warn" !== core.Jb(_v, 2).color);
            }));
        }
        function View_ContributorComponent_3(_l) {
            return core.Ub(0, [ (_l()(), core.wb(0, 0, null, null, 3, "a", [ [ "class", "info-item icon" ], [ "mat-icon-button", "" ], [ "target", "_blank" ] ], [ [ 8, "href", 4 ] ], [ [ null, "click" ] ], (function(_v, en, $event) {
                var ad = !0;
                return "click" === en && (ad = !1 !== $event.stopPropagation() && ad), ad;
            }), null, null)), (_l()(), core.wb(1, 0, null, null, 2, "mat-icon", [ [ "class", "link-icon mat-icon notranslate" ], [ "role", "img" ] ], [ [ 2, "mat-icon-inline", null ], [ 2, "mat-icon-no-color", null ] ], null, null, index_ngfactory.b, index_ngfactory.a)), core.vb(2, 9158656, null, 0, icon.b, [ core.k, icon.d, [ 8, null ], [ 2, icon.a ], [ 2, core.l ] ], null, null), (_l()(), 
            core.Rb(-1, 0, [ "link" ])) ], (function(_ck, _v) {
                _ck(_v, 2, 0);
            }), (function(_ck, _v) {
                _ck(_v, 0, 0, core.Bb(1, "", _v.component.person.website, "")), _ck(_v, 1, 0, core.Jb(_v, 2).inline, "primary" !== core.Jb(_v, 2).color && "accent" !== core.Jb(_v, 2).color && "warn" !== core.Jb(_v, 2).color);
            }));
        }
        function View_ContributorComponent_4(_l) {
            return core.Ub(0, [ (_l()(), core.wb(0, 0, null, null, 4, "div", [ [ "class", "card-back" ] ], null, [ [ null, "click" ], [ null, "keyup.enter" ] ], (function(_v, en, $event) {
                var ad = !0, _co = _v.component;
                return "click" === en && (ad = !1 !== _co.flipCard(_co.person) && ad), "keyup.enter" === en && (ad = !1 !== _co.flipCard(_co.person) && ad), 
                ad;
            }), null, null)), (_l()(), core.wb(1, 0, null, null, 1, "h3", [], null, null, null, null, null)), (_l()(), 
            core.Rb(2, null, [ "", "" ])), (_l()(), core.wb(3, 0, null, null, 1, "p", [ [ "class", "contributor-bio" ] ], null, null, null, null, null)), (_l()(), 
            core.Rb(4, null, [ "", "" ])) ], null, (function(_ck, _v) {
                var _co = _v.component;
                _ck(_v, 2, 0, _co.person.name), _ck(_v, 4, 0, _co.person.bio);
            }));
        }
        function View_ContributorComponent_0(_l) {
            return core.Ub(0, [ (_l()(), core.wb(0, 0, null, null, 16, "div", [ [ "class", "contributor-card" ] ], null, null, null, null, null)), core.Mb(512, null, common.w, common.x, [ core.r, core.s, core.k, core.D ]), core.vb(2, 278528, null, 0, common.i, [ common.w ], {
                klass: [ 0, "klass" ],
                ngClass: [ 1, "ngClass" ]
            }, null), core.Lb(3, {
                flipped: 0
            }), (_l()(), core.wb(4, 0, null, null, 10, "div", [ [ "class", "card-front" ] ], null, [ [ null, "click" ], [ null, "keyup.enter" ] ], (function(_v, en, $event) {
                var ad = !0, _co = _v.component;
                return "click" === en && (ad = !1 !== _co.flipCard(_co.person) && ad), "keyup.enter" === en && (ad = !1 !== _co.flipCard(_co.person) && ad), 
                ad;
            }), null, null)), (_l()(), core.wb(5, 0, null, null, 1, "h3", [], null, null, null, null, null)), (_l()(), 
            core.Rb(6, null, [ "", "" ])), (_l()(), core.wb(7, 0, null, null, 7, "div", [ [ "class", "contributor-image" ] ], [ [ 4, "background-image", null ] ], null, null, null, null)), (_l()(), 
            core.wb(8, 0, null, null, 6, "div", [ [ "class", "contributor-info" ] ], null, null, null, null, null)), (_l()(), 
            core.gb(16777216, null, null, 1, null, View_ContributorComponent_1)), core.vb(10, 16384, null, 0, common.k, [ core.O, core.L ], {
                ngIf: [ 0, "ngIf" ]
            }, null), (_l()(), core.gb(16777216, null, null, 1, null, View_ContributorComponent_2)), core.vb(12, 16384, null, 0, common.k, [ core.O, core.L ], {
                ngIf: [ 0, "ngIf" ]
            }, null), (_l()(), core.gb(16777216, null, null, 1, null, View_ContributorComponent_3)), core.vb(14, 16384, null, 0, common.k, [ core.O, core.L ], {
                ngIf: [ 0, "ngIf" ]
            }, null), (_l()(), core.gb(16777216, null, null, 1, null, View_ContributorComponent_4)), core.vb(16, 16384, null, 0, common.k, [ core.O, core.L ], {
                ngIf: [ 0, "ngIf" ]
            }, null) ], (function(_ck, _v) {
                var _co = _v.component, currVal_1 = _ck(_v, 3, 0, _co.person.isFlipped);
                _ck(_v, 2, 0, "contributor-card", currVal_1), _ck(_v, 10, 0, _co.person.bio), _ck(_v, 12, 0, _co.person.twitter), 
                _ck(_v, 14, 0, _co.person.website), _ck(_v, 16, 0, _co.person.isFlipped);
            }), (function(_ck, _v) {
                var _co = _v.component;
                _ck(_v, 6, 0, _co.person.name), _ck(_v, 7, 0, "url(" + _co.pictureBase + (_co.person.picture || _co.noPicture) + ")");
            }));
        }
        var map = __webpack_require__("lJxs"), publishLast = __webpack_require__("qZ0a");
        const contributorsPath = document_service.a + "contributors.json", knownGroups = [ "Angular", "Collaborators", "GDE" ];
        class contributor_service_ContributorService {
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
        function compareContributors(l, r) {
            return l.name.toUpperCase() > r.name.toUpperCase() ? 1 : -1;
        }
        function compareGroups(l, r) {
            return l.order === r.order ? l.name > r.name ? 1 : -1 : l.order > r.order ? 1 : -1;
        }
        var location_service = __webpack_require__("/lUL"), RenderType_ContributorListComponent = core.ub({
            encapsulation: 2,
            styles: [],
            data: {}
        });
        function View_ContributorListComponent_1(_l) {
            return core.Ub(0, [ (_l()(), core.wb(0, 0, null, null, 1, "a", [ [ "class", "button mat-button filter-button" ] ], [ [ 2, "selected", null ] ], [ [ null, "click" ], [ null, "keyup.enter" ] ], (function(_v, en, $event) {
                var ad = !0, _co = _v.component;
                return "click" === en && (ad = !1 !== _co.selectGroup(_v.context.$implicit) && ad), 
                "keyup.enter" === en && (ad = !1 !== _co.selectGroup(_v.context.$implicit) && ad), 
                ad;
            }), null, null)), (_l()(), core.Rb(1, null, [ "", "" ])) ], null, (function(_ck, _v) {
                _ck(_v, 0, 0, _v.context.$implicit == _v.component.selectedGroup.name), _ck(_v, 1, 0, _v.context.$implicit);
            }));
        }
        function View_ContributorListComponent_3(_l) {
            return core.Ub(0, [ (_l()(), core.wb(0, 0, null, null, 1, "aio-contributor", [], null, null, null, View_ContributorComponent_0, RenderType_ContributorComponent)), core.vb(1, 49152, null, 0, contributor_component_ContributorComponent, [], {
                person: [ 0, "person" ]
            }, null) ], (function(_ck, _v) {
                _ck(_v, 1, 0, _v.context.$implicit);
            }), null);
        }
        function View_ContributorListComponent_2(_l) {
            return core.Ub(0, [ (_l()(), core.wb(0, 0, null, null, 3, "section", [ [ "class", "grid-fluid" ] ], null, null, null, null, null)), (_l()(), 
            core.wb(1, 0, null, null, 2, "div", [ [ "class", "contributor-group" ] ], null, null, null, null, null)), (_l()(), 
            core.gb(16777216, null, null, 1, null, View_ContributorListComponent_3)), core.vb(3, 278528, null, 0, common.j, [ core.O, core.L, core.r ], {
                ngForOf: [ 0, "ngForOf" ]
            }, null) ], (function(_ck, _v) {
                _ck(_v, 3, 0, _v.component.selectedGroup.contributors);
            }), null);
        }
        function View_ContributorListComponent_0(_l) {
            return core.Ub(0, [ (_l()(), core.wb(0, 0, null, null, 2, "div", [ [ "class", "flex-center group-buttons" ] ], null, null, null, null, null)), (_l()(), 
            core.gb(16777216, null, null, 1, null, View_ContributorListComponent_1)), core.vb(2, 278528, null, 0, common.j, [ core.O, core.L, core.r ], {
                ngForOf: [ 0, "ngForOf" ]
            }, null), (_l()(), core.gb(16777216, null, null, 1, null, View_ContributorListComponent_2)), core.vb(4, 16384, null, 0, common.k, [ core.O, core.L ], {
                ngIf: [ 0, "ngIf" ]
            }, null) ], (function(_ck, _v) {
                var _co = _v.component;
                _ck(_v, 2, 0, _co.groupNames), _ck(_v, 4, 0, _co.selectedGroup);
            }), null);
        }
        function View_ContributorListComponent_Host_0(_l) {
            return core.Ub(0, [ (_l()(), core.wb(0, 0, null, null, 1, "aio-contributor-list", [], null, null, null, View_ContributorListComponent_0, RenderType_ContributorListComponent)), core.vb(1, 114688, null, 0, ContributorListComponent, [ contributor_service_ContributorService, location_service.a ], null, null) ], (function(_ck, _v) {
                _ck(_v, 1, 0);
            }), null);
        }
        var ContributorListComponentNgFactory = core.sb("aio-contributor-list", ContributorListComponent, View_ContributorListComponent_Host_0, {}, {}, []), http = __webpack_require__("IheW"), bidi = __webpack_require__("9gLZ"), fesm2015_core = __webpack_require__("UhP/");
        __webpack_require__.d(__webpack_exports__, "ContributorListModuleNgFactory", (function() {
            return ContributorListModuleNgFactory;
        }));
        var ContributorListModuleNgFactory = core.tb(contributor_list_module_ContributorListModule, [], (function(_l) {
            return core.Gb([ core.Hb(512, core.j, core.Y, [ [ 8, [ ContributorListComponentNgFactory ] ], [ 3, core.j ], core.w ]), core.Hb(4608, common.m, common.l, [ core.t ]), core.Hb(4608, contributor_service_ContributorService, contributor_service_ContributorService, [ http.c ]), core.Hb(1073742336, common.c, common.c, []), core.Hb(1073742336, bidi.a, bidi.a, []), core.Hb(1073742336, fesm2015_core.c, fesm2015_core.c, [ [ 2, fesm2015_core.a ] ]), core.Hb(1073742336, icon.c, icon.c, []), core.Hb(1073742336, contributor_list_module_ContributorListModule, contributor_list_module_ContributorListModule, []) ]);
        }));
    }
} ]);
//# sourceMappingURL=contributor-contributor-list-module-ngfactory.js.map