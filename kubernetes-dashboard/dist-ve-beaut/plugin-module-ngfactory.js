(window.webpackJsonp = window.webpackJsonp || []).push([ [ 26 ], {
    YHhN: function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        var core = __webpack_require__("8Y7J");
        class PluginModule {}
        var index_ngfactory = __webpack_require__("ntJQ"), dialog_index_ngfactory = __webpack_require__("9cE2"), snack_bar_index_ngfactory = __webpack_require__("007U"), router_ngfactory = __webpack_require__("pMnS"), dialog_ngfactory = __webpack_require__("wyY1"), component_ngfactory = __webpack_require__("HrBQ"), menu_component_ngfactory = __webpack_require__("Shg9"), changedialog_dialog_ngfactory = __webpack_require__("rO67"), sort_index_ngfactory = __webpack_require__("GlcN"), table = __webpack_require__("OaSA"), fesm2015_table = __webpack_require__("GXRp"), sort = __webpack_require__("LUZP"), router = __webpack_require__("iInd"), common = __webpack_require__("SVse"), date_component_ngfactory = __webpack_require__("2N10"), component = __webpack_require__("RMBR"), column_component_ngfactory = __webpack_require__("K5on"), column_component = __webpack_require__("NaXA"), table_index_ngfactory = __webpack_require__("K0NO"), commaseparated = __webpack_require__("1oZ3"), card_component_ngfactory = __webpack_require__("bLTg"), card_component = __webpack_require__("TN1b"), flex = __webpack_require__("VDRc"), esm2015_core = __webpack_require__("/q54"), filter_component_ngfactory = __webpack_require__("lnbV"), filter_component = __webpack_require__("77sm"), spinner_component_ngfactory = __webpack_require__("zTgR"), spinner_component = __webpack_require__("4uYH"), bidi = __webpack_require__("9gLZ"), platform = __webpack_require__("SCoL"), paginator_index_ngfactory = __webpack_require__("dbD4"), paginator = __webpack_require__("5QHs"), zerostate_component_ngfactory = __webpack_require__("+/33"), zerostate_component = __webpack_require__("iKjI"), plugin_component = __webpack_require__("l/kb"), resource = __webpack_require__("KyHI"), notifications = __webpack_require__("PXtb"), RenderType_PluginListComponent = core["ɵcrt"]({
            encapsulation: 2,
            styles: [],
            data: {}
        });
        function View_PluginListComponent_1(_l) {
            return core["ɵvid"](0, [ (_l()(), core["ɵeld"](0, 0, null, null, 3, "mat-header-cell", [ [ "class", "mat-header-cell" ], [ "disableClear", "true" ], [ "mat-sort-header", "" ], [ "role", "columnheader" ] ], [ [ 1, "aria-sort", 0 ], [ 2, "mat-sort-header-disabled", null ] ], [ [ null, "click" ], [ null, "mouseenter" ], [ null, "mouseleave" ] ], (function(_v, en, $event) {
                var ad = !0;
                return "click" === en && (ad = !1 !== core["ɵnov"](_v, 2)._handleClick() && ad), 
                "mouseenter" === en && (ad = !1 !== core["ɵnov"](_v, 2)._setIndicatorHintVisible(!0) && ad), 
                "mouseleave" === en && (ad = !1 !== core["ɵnov"](_v, 2)._setIndicatorHintVisible(!1) && ad), 
                ad;
            }), sort_index_ngfactory.b, sort_index_ngfactory.a)), core["ɵdid"](1, 16384, null, 0, table.e, [ fesm2015_table.d, core.ElementRef ], null, null), core["ɵdid"](2, 245760, null, 0, sort.c, [ sort.d, core.ChangeDetectorRef, [ 2, sort.b ], [ 2, "MAT_SORT_HEADER_COLUMN_DEF" ] ], {
                id: [ 0, "id" ],
                disableClear: [ 1, "disableClear" ]
            }, null), (_l()(), core["ɵted"](-1, 0, [ "Name" ])) ], (function(_ck, _v) {
                _ck(_v, 2, 0, "", "true");
            }), (function(_ck, _v) {
                _ck(_v, 0, 0, core["ɵnov"](_v, 2)._getAriaSortAttribute(), core["ɵnov"](_v, 2)._isDisabled());
            }));
        }
        function View_PluginListComponent_2(_l) {
            return core["ɵvid"](0, [ (_l()(), core["ɵeld"](0, 0, null, null, 4, "mat-cell", [ [ "class", "mat-cell" ], [ "role", "gridcell" ] ], null, null, null, null, null)), core["ɵdid"](1, 16384, null, 0, table.a, [ fesm2015_table.d, core.ElementRef ], null, null), (_l()(), 
            core["ɵeld"](2, 0, null, null, 2, "a", [ [ "queryParamsHandling", "preserve" ] ], [ [ 1, "target", 0 ], [ 8, "href", 4 ] ], [ [ null, "click" ] ], (function(_v, en, $event) {
                var ad = !0;
                return "click" === en && (ad = !1 !== core["ɵnov"](_v, 3).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) && ad), 
                ad;
            }), null, null)), core["ɵdid"](3, 671744, null, 0, router.RouterLinkWithHref, [ router.Router, router.ActivatedRoute, common.LocationStrategy ], {
                queryParamsHandling: [ 0, "queryParamsHandling" ],
                routerLink: [ 1, "routerLink" ]
            }, null), (_l()(), core["ɵted"](4, null, [ " ", " " ])) ], (function(_ck, _v) {
                _ck(_v, 3, 0, "preserve", _v.component.getDetailsHref(_v.context.$implicit.objectMeta.name, _v.context.$implicit.objectMeta.namespace));
            }), (function(_ck, _v) {
                _ck(_v, 2, 0, core["ɵnov"](_v, 3).target, core["ɵnov"](_v, 3).href), _ck(_v, 4, 0, _v.context.$implicit.objectMeta.name);
            }));
        }
        function View_PluginListComponent_3(_l) {
            return core["ɵvid"](0, [ (_l()(), core["ɵeld"](0, 0, null, null, 2, "mat-header-cell", [ [ "class", "mat-header-cell" ], [ "disableClear", "true" ], [ "role", "columnheader" ] ], null, null, null, null, null)), core["ɵdid"](1, 16384, null, 0, table.e, [ fesm2015_table.d, core.ElementRef ], null, null), (_l()(), 
            core["ɵted"](-1, null, [ "Dependencies" ])) ], null, null);
        }
        function View_PluginListComponent_4(_l) {
            return core["ɵvid"](0, [ (_l()(), core["ɵeld"](0, 0, null, null, 4, "mat-cell", [ [ "class", "mat-cell" ], [ "role", "gridcell" ] ], null, null, null, null, null)), core["ɵdid"](1, 16384, null, 0, table.a, [ fesm2015_table.d, core.ElementRef ], null, null), (_l()(), 
            core["ɵeld"](2, 0, null, null, 2, "span", [], null, null, null, null, null)), (_l()(), 
            core["ɵted"](3, null, [ "", "" ])), core["ɵppd"](4, 1) ], null, (function(_ck, _v) {
                var currVal_0 = core["ɵunv"](_v, 3, 0, _ck(_v, 4, 0, core["ɵnov"](_v.parent, 0), _v.context.$implicit.dependencies));
                _ck(_v, 3, 0, currVal_0);
            }));
        }
        function View_PluginListComponent_6(_l) {
            return core["ɵvid"](0, [ (_l()(), core["ɵeld"](0, 0, null, null, 2, "mat-header-cell", [ [ "class", "mat-header-cell" ], [ "role", "columnheader" ] ], null, null, null, null, null)), core["ɵdid"](1, 16384, null, 0, table.e, [ fesm2015_table.d, core.ElementRef ], null, null), (_l()(), 
            core["ɵted"](-1, null, [ "Namespace" ])) ], null, null);
        }
        function View_PluginListComponent_7(_l) {
            return core["ɵvid"](0, [ (_l()(), core["ɵeld"](0, 0, null, null, 2, "mat-cell", [ [ "class", "mat-cell" ], [ "role", "gridcell" ] ], null, null, null, null, null)), core["ɵdid"](1, 16384, null, 0, table.a, [ fesm2015_table.d, core.ElementRef ], null, null), (_l()(), 
            core["ɵted"](2, null, [ "", "" ])) ], null, (function(_ck, _v) {
                _ck(_v, 2, 0, _v.context.$implicit.objectMeta.namespace);
            }));
        }
        function View_PluginListComponent_5(_l) {
            return core["ɵvid"](0, [ (_l()(), core["ɵeld"](0, 0, null, null, 12, null, null, null, null, null, null, null)), core["ɵprd"](6144, null, "MAT_SORT_HEADER_COLUMN_DEF", null, [ table.c ]), core["ɵdid"](2, 16384, null, 3, table.c, [], {
                name: [ 0, "name" ]
            }, null), core["ɵqud"](603979776, 14, {
                cell: 0
            }), core["ɵqud"](603979776, 15, {
                headerCell: 0
            }), core["ɵqud"](603979776, 16, {
                footerCell: 0
            }), core["ɵprd"](2048, [ [ 4, 4 ] ], fesm2015_table.d, null, [ table.c ]), (_l()(), 
            core["ɵand"](0, null, null, 2, null, View_PluginListComponent_6)), core["ɵdid"](8, 16384, null, 0, table.f, [ core.TemplateRef ], null, null), core["ɵprd"](2048, [ [ 15, 4 ] ], fesm2015_table.j, null, [ table.f ]), (_l()(), 
            core["ɵand"](0, null, null, 2, null, View_PluginListComponent_7)), core["ɵdid"](11, 16384, null, 0, table.b, [ core.TemplateRef ], null, null), core["ɵprd"](2048, [ [ 14, 4 ] ], fesm2015_table.b, null, [ table.b ]) ], (function(_ck, _v) {
                _ck(_v, 2, 0, "namespace");
            }), null);
        }
        function View_PluginListComponent_8(_l) {
            return core["ɵvid"](0, [ (_l()(), core["ɵeld"](0, 0, null, null, 3, "mat-header-cell", [ [ "class", "mat-header-cell" ], [ "disableClear", "true" ], [ "mat-sort-header", "" ], [ "role", "columnheader" ] ], [ [ 1, "aria-sort", 0 ], [ 2, "mat-sort-header-disabled", null ] ], [ [ null, "click" ], [ null, "mouseenter" ], [ null, "mouseleave" ] ], (function(_v, en, $event) {
                var ad = !0;
                return "click" === en && (ad = !1 !== core["ɵnov"](_v, 2)._handleClick() && ad), 
                "mouseenter" === en && (ad = !1 !== core["ɵnov"](_v, 2)._setIndicatorHintVisible(!0) && ad), 
                "mouseleave" === en && (ad = !1 !== core["ɵnov"](_v, 2)._setIndicatorHintVisible(!1) && ad), 
                ad;
            }), sort_index_ngfactory.b, sort_index_ngfactory.a)), core["ɵdid"](1, 16384, null, 0, table.e, [ fesm2015_table.d, core.ElementRef ], null, null), core["ɵdid"](2, 245760, null, 0, sort.c, [ sort.d, core.ChangeDetectorRef, [ 2, sort.b ], [ 2, "MAT_SORT_HEADER_COLUMN_DEF" ] ], {
                id: [ 0, "id" ],
                disableClear: [ 1, "disableClear" ]
            }, null), (_l()(), core["ɵted"](-1, 0, [ "Age" ])) ], (function(_ck, _v) {
                _ck(_v, 2, 0, "", "true");
            }), (function(_ck, _v) {
                _ck(_v, 0, 0, core["ɵnov"](_v, 2)._getAriaSortAttribute(), core["ɵnov"](_v, 2)._isDisabled());
            }));
        }
        function View_PluginListComponent_9(_l) {
            return core["ɵvid"](0, [ (_l()(), core["ɵeld"](0, 0, null, null, 3, "mat-cell", [ [ "class", "mat-cell" ], [ "role", "gridcell" ] ], null, null, null, null, null)), core["ɵdid"](1, 16384, null, 0, table.a, [ fesm2015_table.d, core.ElementRef ], null, null), (_l()(), 
            core["ɵeld"](2, 0, null, null, 1, "kd-date", [ [ "relative", "" ] ], null, null, null, date_component_ngfactory.b, date_component_ngfactory.a)), core["ɵdid"](3, 49152, null, 0, component.a, [], {
                date: [ 0, "date" ],
                relative: [ 1, "relative" ]
            }, null) ], (function(_ck, _v) {
                _ck(_v, 3, 0, _v.context.$implicit.objectMeta.creationTimestamp, "");
            }), null);
        }
        function View_PluginListComponent_11(_l) {
            return core["ɵvid"](0, [ (_l()(), core["ɵeld"](0, 0, null, null, 1, "mat-header-cell", [ [ "class", "mat-header-cell" ], [ "role", "columnheader" ] ], null, null, null, null, null)), core["ɵdid"](1, 16384, null, 0, table.e, [ fesm2015_table.d, core.ElementRef ], null, null) ], null, null);
        }
        function View_PluginListComponent_12(_l) {
            return core["ɵvid"](0, [ (_l()(), core["ɵeld"](0, 0, null, null, 3, "mat-cell", [ [ "class", "mat-cell" ], [ "role", "gridcell" ] ], null, null, null, null, null)), core["ɵdid"](1, 16384, null, 0, table.a, [ fesm2015_table.d, core.ElementRef ], null, null), (_l()(), 
            core["ɵeld"](2, 0, null, null, 1, "kd-dynamic-cell", [], null, null, null, column_component_ngfactory.b, column_component_ngfactory.a)), core["ɵdid"](3, 573440, null, 0, column_component.a, [ core.ComponentFactoryResolver ], {
                component: [ 0, "component" ],
                resource: [ 1, "resource" ]
            }, null) ], (function(_ck, _v) {
                _ck(_v, 3, 0, _v.parent.context.$implicit.component, _v.context.$implicit);
            }), null);
        }
        function View_PluginListComponent_10(_l) {
            return core["ɵvid"](0, [ (_l()(), core["ɵeld"](0, 0, null, null, 12, null, null, null, null, null, null, null)), core["ɵprd"](6144, null, "MAT_SORT_HEADER_COLUMN_DEF", null, [ table.c ]), core["ɵdid"](2, 16384, null, 3, table.c, [], {
                name: [ 0, "name" ]
            }, null), core["ɵqud"](603979776, 20, {
                cell: 0
            }), core["ɵqud"](603979776, 21, {
                headerCell: 0
            }), core["ɵqud"](603979776, 22, {
                footerCell: 0
            }), core["ɵprd"](2048, [ [ 4, 4 ] ], fesm2015_table.d, null, [ table.c ]), (_l()(), 
            core["ɵand"](0, null, null, 2, null, View_PluginListComponent_11)), core["ɵdid"](8, 16384, null, 0, table.f, [ core.TemplateRef ], null, null), core["ɵprd"](2048, [ [ 21, 4 ] ], fesm2015_table.j, null, [ table.f ]), (_l()(), 
            core["ɵand"](0, null, null, 2, null, View_PluginListComponent_12)), core["ɵdid"](11, 16384, null, 0, table.b, [ core.TemplateRef ], null, null), core["ɵprd"](2048, [ [ 20, 4 ] ], fesm2015_table.b, null, [ table.b ]) ], (function(_ck, _v) {
                _ck(_v, 2, 0, _v.context.$implicit.name);
            }), null);
        }
        function View_PluginListComponent_13(_l) {
            return core["ɵvid"](0, [ (_l()(), core["ɵeld"](0, 0, null, null, 2, "mat-header-row", [ [ "class", "mat-header-row" ], [ "role", "row" ] ], null, null, null, table_index_ngfactory.d, table_index_ngfactory.a)), core["ɵprd"](6144, null, fesm2015_table.k, null, [ table.g ]), core["ɵdid"](2, 49152, null, 0, table.g, [], null, null) ], null, null);
        }
        function View_PluginListComponent_14(_l) {
            return core["ɵvid"](0, [ (_l()(), core["ɵeld"](0, 0, null, null, 2, "mat-row", [ [ "class", "mat-row" ], [ "role", "row" ] ], null, null, null, table_index_ngfactory.e, table_index_ngfactory.b)), core["ɵprd"](6144, null, fesm2015_table.m, null, [ table.i ]), core["ɵdid"](2, 49152, null, 0, table.i, [], null, null) ], null, null);
        }
        function View_PluginListComponent_0(_l) {
            return core["ɵvid"](2, [ core["ɵpid"](0, commaseparated.a, []), core["ɵqud"](402653184, 1, {
                matSort_: 0
            }), core["ɵqud"](402653184, 2, {
                matPaginator_: 0
            }), core["ɵqud"](402653184, 3, {
                cardFilter_: 0
            }), (_l()(), core["ɵeld"](4, 0, null, null, 76, "kd-card", [ [ "role", "table" ] ], [ [ 8, "hidden", 0 ] ], null, null, card_component_ngfactory.b, card_component_ngfactory.a)), core["ɵdid"](5, 49152, null, 0, card_component.a, [], {
                role: [ 0, "role" ]
            }, null), (_l()(), core["ɵeld"](6, 0, null, 0, 2, "div", [ [ "fxLayout", "row" ], [ "title", "" ] ], null, null, null, null, null)), core["ɵdid"](7, 671744, null, 0, flex.d, [ core.ElementRef, esm2015_core.i, [ 2, flex.k ], esm2015_core.f ], {
                fxLayout: [ 0, "fxLayout" ]
            }, null), (_l()(), core["ɵted"](-1, null, [ "Plugins" ])), (_l()(), core["ɵeld"](9, 0, null, 1, 3, "div", [ [ "description", "" ] ], null, null, null, null, null)), (_l()(), 
            core["ɵeld"](10, 0, null, null, 1, "span", [ [ "class", "kd-muted-light" ] ], null, null, null, null, null)), (_l()(), 
            core["ɵted"](-1, null, [ "Items: " ])), (_l()(), core["ɵted"](12, null, [ "", "" ])), (_l()(), 
            core["ɵeld"](13, 0, null, 2, 2, "div", [ [ "actions", "" ] ], null, null, null, null, null)), (_l()(), 
            core["ɵeld"](14, 0, null, null, 1, "kd-card-list-filter", [], null, null, null, filter_component_ngfactory.b, filter_component_ngfactory.a)), core["ɵdid"](15, 114688, [ [ 3, 4 ] ], 0, filter_component.a, [], null, null), (_l()(), 
            core["ɵeld"](16, 0, null, 3, 61, "div", [ [ "content", "" ] ], [ [ 8, "hidden", 0 ] ], null, null, null, null)), (_l()(), 
            core["ɵeld"](17, 0, null, null, 1, "div", [ [ "kdLoadingSpinner", "" ] ], [ [ 2, "kd-loading-shade", null ] ], null, null, spinner_component_ngfactory.b, spinner_component_ngfactory.a)), core["ɵdid"](18, 114688, null, 0, spinner_component.a, [], {
                isLoading: [ 0, "isLoading" ]
            }, null), (_l()(), core["ɵeld"](19, 0, null, null, 56, "mat-table", [ [ "class", "mat-table" ], [ "matSort", "" ], [ "matSortActive", "age" ], [ "matSortDirection", "asc" ], [ "matSortDisableClear", "" ] ], null, null, null, table_index_ngfactory.f, table_index_ngfactory.c)), core["ɵprd"](6144, null, fesm2015_table.o, null, [ table.k ]), core["ɵdid"](21, 2342912, null, 4, table.k, [ core.IterableDiffers, core.ChangeDetectorRef, core.ElementRef, [ 8, null ], [ 2, bidi.b ], common.DOCUMENT, platform.a ], {
                dataSource: [ 0, "dataSource" ]
            }, null), core["ɵqud"](603979776, 4, {
                _contentColumnDefs: 1
            }), core["ɵqud"](603979776, 5, {
                _contentRowDefs: 1
            }), core["ɵqud"](603979776, 6, {
                _contentHeaderRowDefs: 1
            }), core["ɵqud"](603979776, 7, {
                _contentFooterRowDefs: 1
            }), core["ɵdid"](26, 737280, [ [ 1, 4 ] ], 0, sort.b, [], {
                active: [ 0, "active" ],
                direction: [ 1, "direction" ],
                disableClear: [ 2, "disableClear" ]
            }, null), (_l()(), core["ɵeld"](27, 0, null, null, 12, null, null, null, null, null, null, null)), core["ɵprd"](6144, null, "MAT_SORT_HEADER_COLUMN_DEF", null, [ table.c ]), core["ɵdid"](29, 16384, null, 3, table.c, [], {
                name: [ 0, "name" ]
            }, null), core["ɵqud"](603979776, 8, {
                cell: 0
            }), core["ɵqud"](603979776, 9, {
                headerCell: 0
            }), core["ɵqud"](603979776, 10, {
                footerCell: 0
            }), core["ɵprd"](2048, [ [ 4, 4 ] ], fesm2015_table.d, null, [ table.c ]), (_l()(), 
            core["ɵand"](0, null, null, 2, null, View_PluginListComponent_1)), core["ɵdid"](35, 16384, null, 0, table.f, [ core.TemplateRef ], null, null), core["ɵprd"](2048, [ [ 9, 4 ] ], fesm2015_table.j, null, [ table.f ]), (_l()(), 
            core["ɵand"](0, null, null, 2, null, View_PluginListComponent_2)), core["ɵdid"](38, 16384, null, 0, table.b, [ core.TemplateRef ], null, null), core["ɵprd"](2048, [ [ 8, 4 ] ], fesm2015_table.b, null, [ table.b ]), (_l()(), 
            core["ɵeld"](40, 0, null, null, 12, null, null, null, null, null, null, null)), core["ɵprd"](6144, null, "MAT_SORT_HEADER_COLUMN_DEF", null, [ table.c ]), core["ɵdid"](42, 16384, null, 3, table.c, [], {
                name: [ 0, "name" ]
            }, null), core["ɵqud"](603979776, 11, {
                cell: 0
            }), core["ɵqud"](603979776, 12, {
                headerCell: 0
            }), core["ɵqud"](603979776, 13, {
                footerCell: 0
            }), core["ɵprd"](2048, [ [ 4, 4 ] ], fesm2015_table.d, null, [ table.c ]), (_l()(), 
            core["ɵand"](0, null, null, 2, null, View_PluginListComponent_3)), core["ɵdid"](48, 16384, null, 0, table.f, [ core.TemplateRef ], null, null), core["ɵprd"](2048, [ [ 12, 4 ] ], fesm2015_table.j, null, [ table.f ]), (_l()(), 
            core["ɵand"](0, null, null, 2, null, View_PluginListComponent_4)), core["ɵdid"](51, 16384, null, 0, table.b, [ core.TemplateRef ], null, null), core["ɵprd"](2048, [ [ 11, 4 ] ], fesm2015_table.b, null, [ table.b ]), (_l()(), 
            core["ɵand"](16777216, null, null, 1, null, View_PluginListComponent_5)), core["ɵdid"](54, 16384, null, 0, common.NgIf, [ core.ViewContainerRef, core.TemplateRef ], {
                ngIf: [ 0, "ngIf" ]
            }, null), (_l()(), core["ɵeld"](55, 0, null, null, 12, null, null, null, null, null, null, null)), core["ɵprd"](6144, null, "MAT_SORT_HEADER_COLUMN_DEF", null, [ table.c ]), core["ɵdid"](57, 16384, null, 3, table.c, [], {
                name: [ 0, "name" ]
            }, null), core["ɵqud"](603979776, 17, {
                cell: 0
            }), core["ɵqud"](603979776, 18, {
                headerCell: 0
            }), core["ɵqud"](603979776, 19, {
                footerCell: 0
            }), core["ɵprd"](2048, [ [ 4, 4 ] ], fesm2015_table.d, null, [ table.c ]), (_l()(), 
            core["ɵand"](0, null, null, 2, null, View_PluginListComponent_8)), core["ɵdid"](63, 16384, null, 0, table.f, [ core.TemplateRef ], null, null), core["ɵprd"](2048, [ [ 18, 4 ] ], fesm2015_table.j, null, [ table.f ]), (_l()(), 
            core["ɵand"](0, null, null, 2, null, View_PluginListComponent_9)), core["ɵdid"](66, 16384, null, 0, table.b, [ core.TemplateRef ], null, null), core["ɵprd"](2048, [ [ 17, 4 ] ], fesm2015_table.b, null, [ table.b ]), (_l()(), 
            core["ɵand"](16777216, null, null, 1, null, View_PluginListComponent_10)), core["ɵdid"](69, 278528, null, 0, common.NgForOf, [ core.ViewContainerRef, core.TemplateRef, core.IterableDiffers ], {
                ngForOf: [ 0, "ngForOf" ]
            }, null), (_l()(), core["ɵand"](0, null, null, 2, null, View_PluginListComponent_13)), core["ɵdid"](71, 540672, null, 0, table.h, [ core.TemplateRef, core.IterableDiffers ], {
                columns: [ 0, "columns" ]
            }, null), core["ɵprd"](2048, [ [ 6, 4 ] ], fesm2015_table.l, null, [ table.h ]), (_l()(), 
            core["ɵand"](0, null, null, 2, null, View_PluginListComponent_14)), core["ɵdid"](74, 540672, null, 0, table.j, [ core.TemplateRef, core.IterableDiffers ], {
                columns: [ 0, "columns" ]
            }, null), core["ɵprd"](2048, [ [ 5, 4 ] ], fesm2015_table.n, null, [ table.j ]), (_l()(), 
            core["ɵeld"](76, 0, null, null, 1, "mat-paginator", [ [ "class", "mat-paginator" ] ], null, null, null, paginator_index_ngfactory.b, paginator_index_ngfactory.a)), core["ɵdid"](77, 245760, [ [ 2, 4 ] ], 0, paginator.b, [ paginator.c, core.ChangeDetectorRef ], {
                length: [ 0, "length" ],
                pageSize: [ 1, "pageSize" ],
                hidePageSize: [ 2, "hidePageSize" ],
                showFirstLastButtons: [ 3, "showFirstLastButtons" ]
            }, null), (_l()(), core["ɵeld"](78, 0, null, 3, 2, "div", [ [ "content", "" ] ], [ [ 8, "hidden", 0 ] ], null, null, null, null)), (_l()(), 
            core["ɵeld"](79, 0, null, null, 1, "kd-list-zero-state", [], null, null, null, zerostate_component_ngfactory.b, zerostate_component_ngfactory.a)), core["ɵdid"](80, 49152, null, 0, zerostate_component.a, [], null, null) ], (function(_ck, _v) {
                var _co = _v.component;
                _ck(_v, 5, 0, "table"), _ck(_v, 7, 0, "row"), _ck(_v, 15, 0), _ck(_v, 18, 0, _co.isLoading), 
                _ck(_v, 21, 0, _co.getData()), _ck(_v, 26, 0, "age", "asc", ""), _ck(_v, 29, 0, "name"), 
                _ck(_v, 42, 0, "dependencies"), _ck(_v, 54, 0, _co.shouldShowColumn("namespace")), 
                _ck(_v, 57, 0, "age"), _ck(_v, 69, 0, _co.getActionColumns()), _ck(_v, 71, 0, _co.getColumns()), 
                _ck(_v, 74, 0, _co.getColumns()), _ck(_v, 77, 0, _co.totalItems, _co.itemsPerPage, !0, !0);
            }), (function(_ck, _v) {
                var _co = _v.component;
                _ck(_v, 4, 0, _co.isHidden()), _ck(_v, 12, 0, _co.totalItems), _ck(_v, 16, 0, _co.showZeroState()), 
                _ck(_v, 17, 0, core["ɵnov"](_v, 18).isLoading), _ck(_v, 78, 0, !_co.showZeroState());
            }));
        }
        class PluginListComponent {}
        var component_ngfactory_RenderType_PluginListComponent = core["ɵcrt"]({
            encapsulation: 2,
            styles: [],
            data: {}
        });
        function component_ngfactory_View_PluginListComponent_0(_l) {
            return core["ɵvid"](0, [ (_l()(), core["ɵeld"](0, 0, null, null, 1, "kd-plugin-list", [], null, null, null, View_PluginListComponent_0, RenderType_PluginListComponent)), core["ɵdid"](1, 245760, null, 0, plugin_component.a, [ resource.a, notifications.b, core.ChangeDetectorRef ], null, null) ], (function(_ck, _v) {
                _ck(_v, 1, 0);
            }), null);
        }
        function component_ngfactory_View_PluginListComponent_Host_0(_l) {
            return core["ɵvid"](0, [ (_l()(), core["ɵeld"](0, 0, null, null, 1, "kd-plugins", [], null, null, null, component_ngfactory_View_PluginListComponent_0, component_ngfactory_RenderType_PluginListComponent)), core["ɵdid"](1, 49152, null, 0, PluginListComponent, [], null, null) ], null, null);
        }
        var component_ngfactory_PluginListComponentNgFactory = core["ɵccf"]("kd-plugins", PluginListComponent, component_ngfactory_View_PluginListComponent_Host_0, {}, {}, []), card_index_ngfactory = __webpack_require__("YHaq"), card = __webpack_require__("PDjf"), animations = __webpack_require__("omvX");
        class PluginHolderComponent {
            constructor(injector, pluginLoader) {
                this.injector = injector, this.pluginLoader = pluginLoader, this.entryError = !1;
            }
            ngOnInit() {
                try {
                    this.loadPlugin(this.pluginName);
                } catch (e) {
                    console.log(e);
                }
            }
            loadPlugin(pluginName) {
                this.pluginLoader.load(pluginName).then(moduleFactory => {
                    const moduleRef = moduleFactory.create(this.injector), entryComponent = moduleFactory.moduleType.entry;
                    try {
                        const compFactory = moduleRef.componentFactoryResolver.resolveComponentFactory(entryComponent);
                        this.vcRef.createComponent(compFactory);
                    } catch (e) {
                        this.entryError = !0;
                    }
                });
            }
        }
        var pluginloader_service = __webpack_require__("VlAU"), RenderType_PluginHolderComponent = core["ɵcrt"]({
            encapsulation: 2,
            styles: [],
            data: {}
        });
        function View_PluginHolderComponent_1(_l) {
            return core["ɵvid"](0, [ (_l()(), core["ɵeld"](0, 0, null, null, 2, "mat-card", [ [ "class", "mat-card" ] ], [ [ 2, "_mat-animation-noopable", null ] ], null, null, card_index_ngfactory.b, card_index_ngfactory.a)), core["ɵdid"](1, 49152, null, 0, card.a, [ [ 2, animations.a ] ], null, null), (_l()(), 
            core["ɵted"](-1, 0, [ "This plugin has no entry component" ])) ], null, (function(_ck, _v) {
                _ck(_v, 0, 0, "NoopAnimations" === core["ɵnov"](_v, 1)._animationMode);
            }));
        }
        function View_PluginHolderComponent_2(_l) {
            return core["ɵvid"](0, [ (_l()(), core["ɵand"](0, null, null, 0)) ], null, null);
        }
        function View_PluginHolderComponent_0(_l) {
            return core["ɵvid"](0, [ core["ɵqud"](402653184, 1, {
                vcRef: 0
            }), (_l()(), core["ɵeld"](1, 0, null, null, 4, "div", [], null, null, null, null, null)), (_l()(), 
            core["ɵeld"](2, 0, null, null, 3, "div", [ [ "class", "plugin" ] ], null, null, null, null, null)), (_l()(), 
            core["ɵand"](16777216, null, null, 1, null, View_PluginHolderComponent_1)), core["ɵdid"](4, 16384, null, 0, common.NgIf, [ core.ViewContainerRef, core.TemplateRef ], {
                ngIf: [ 0, "ngIf" ]
            }, null), (_l()(), core["ɵand"](16777216, [ [ 1, 3 ], [ "pluginViewRef", 2 ], [ "elseBlock", 2 ] ], null, 0, null, View_PluginHolderComponent_2)) ], (function(_ck, _v) {
                _ck(_v, 4, 0, _v.component.entryError);
            }), null);
        }
        class PluginDetailComponent {
            constructor(activatedRoute_) {
                this.activatedRoute_ = activatedRoute_;
            }
            pluginName() {
                return this.activatedRoute_.snapshot.params.pluginName;
            }
        }
        var RenderType_PluginDetailComponent = core["ɵcrt"]({
            encapsulation: 2,
            styles: [],
            data: {}
        });
        function View_PluginDetailComponent_0(_l) {
            return core["ɵvid"](0, [ (_l()(), core["ɵeld"](0, 0, null, null, 1, "kd-plugin-holder", [], null, null, null, View_PluginHolderComponent_0, RenderType_PluginHolderComponent)), core["ɵdid"](1, 114688, null, 0, PluginHolderComponent, [ core.Injector, pluginloader_service.a ], {
                pluginName: [ 0, "pluginName" ]
            }, null) ], (function(_ck, _v) {
                _ck(_v, 1, 0, _v.component.pluginName());
            }), null);
        }
        function View_PluginDetailComponent_Host_0(_l) {
            return core["ɵvid"](0, [ (_l()(), core["ɵeld"](0, 0, null, null, 1, "kd-plugin-detail", [], null, null, null, View_PluginDetailComponent_0, RenderType_PluginDetailComponent)), core["ɵdid"](1, 49152, null, 0, PluginDetailComponent, [ router.ActivatedRoute ], null, null) ], null, null);
        }
        var PluginDetailComponentNgFactory = core["ɵccf"]("kd-plugin-detail", PluginDetailComponent, View_PluginDetailComponent_Host_0, {}, {}, []), fesm2015_forms = __webpack_require__("s7LF"), observers = __webpack_require__("9b/N"), fesm2015_core = __webpack_require__("UhP/"), overlay = __webpack_require__("1O3W"), tooltip = __webpack_require__("ZFy/"), dialog = __webpack_require__("iELJ"), fesm2015_select = __webpack_require__("ZTz/"), menu = __webpack_require__("rJgo"), ngx_filter_pipe = __webpack_require__("4muW"), a11y = __webpack_require__("YEUz"), fesm2015_button = __webpack_require__("Dxy4"), fesm2015_checkbox = __webpack_require__("pMoy"), divider = __webpack_require__("BSbQ"), grid_list = __webpack_require__("40+f"), form_field = __webpack_require__("Q2Ze"), icon = __webpack_require__("Tj54"), text_field = __webpack_require__("8sFK"), input = __webpack_require__("e6WT"), progress_spinner = __webpack_require__("pu8Q"), progress_bar = __webpack_require__("BTe0"), fesm2015_radio = __webpack_require__("zQhy"), scrolling = __webpack_require__("7KAL"), sidenav = __webpack_require__("q7Ft"), toolbar = __webpack_require__("l0rg"), portal = __webpack_require__("1z/I"), slider = __webpack_require__("mPVK"), slide_toggle = __webpack_require__("jMqV"), chips = __webpack_require__("f44v"), tabs = __webpack_require__("M9ds"), button_toggle = __webpack_require__("Ynp+"), snack_bar = __webpack_require__("zHaW"), extended = __webpack_require__("ura0"), grid = __webpack_require__("Nhcz"), flex_layout = __webpack_require__("u9T3"), src_module = __webpack_require__("o6Sk"), pipes_module = __webpack_require__("I7rD"), shared_module = __webpack_require__("MnlZ"), components_module = __webpack_require__("PXUV");
        const ɵ0 = {
            breadcrumb: "Plugins"
        }, ɵ1 = {
            breadcrumb: "{{ pluginName }}",
            parent: {
                path: "",
                component: PluginListComponent,
                data: ɵ0
            }
        };
        class PluginsRoutingModule {}
        var keycodes = __webpack_require__("Ht+U");
        __webpack_require__.d(__webpack_exports__, "PluginModuleNgFactory", (function() {
            return PluginModuleNgFactory;
        }));
        var PluginModuleNgFactory = core["ɵcmf"](PluginModule, [], (function(_l) {
            return core["ɵmod"]([ core["ɵmpd"](512, core.ComponentFactoryResolver, core["ɵCodegenComponentFactoryResolver"], [ [ 8, [ index_ngfactory.a, dialog_index_ngfactory.a, snack_bar_index_ngfactory.a, snack_bar_index_ngfactory.b, router_ngfactory.a, dialog_ngfactory.a, component_ngfactory.a, menu_component_ngfactory.a, changedialog_dialog_ngfactory.a, component_ngfactory_PluginListComponentNgFactory, PluginDetailComponentNgFactory ] ], [ 3, core.ComponentFactoryResolver ], core.NgModuleRef ]), core["ɵmpd"](4608, common.NgLocalization, common.NgLocaleLocalization, [ core.LOCALE_ID ]), core["ɵmpd"](4608, fesm2015_forms["ɵangular_packages_forms_forms_n"], fesm2015_forms["ɵangular_packages_forms_forms_n"], []), core["ɵmpd"](4608, fesm2015_forms.FormBuilder, fesm2015_forms.FormBuilder, []), core["ɵmpd"](4608, observers.c, observers.c, []), core["ɵmpd"](4608, fesm2015_core.d, fesm2015_core.d, []), core["ɵmpd"](4608, overlay.c, overlay.c, [ overlay.i, overlay.e, core.ComponentFactoryResolver, overlay.h, overlay.f, core.Injector, core.NgZone, common.DOCUMENT, bidi.b, [ 2, common.Location ] ]), core["ɵmpd"](5120, overlay.j, overlay.k, [ overlay.c ]), core["ɵmpd"](5120, tooltip.b, tooltip.c, [ overlay.c ]), core["ɵmpd"](5120, dialog.c, dialog.d, [ overlay.c ]), core["ɵmpd"](135680, dialog.e, dialog.e, [ overlay.c, core.Injector, [ 2, common.Location ], [ 2, dialog.b ], dialog.c, [ 3, dialog.e ], overlay.e ]), core["ɵmpd"](5120, sort.d, sort.a, [ [ 3, sort.d ] ]), core["ɵmpd"](5120, fesm2015_select.a, fesm2015_select.b, [ overlay.c ]), core["ɵmpd"](5120, paginator.c, paginator.a, [ [ 3, paginator.c ] ]), core["ɵmpd"](5120, menu.c, menu.j, [ overlay.c ]), core["ɵmpd"](5120, core.APP_BOOTSTRAP_LISTENER, (function(p0_0, p0_1) {
                return [ esm2015_core.j(p0_0, p0_1) ];
            }), [ common.DOCUMENT, core.PLATFORM_ID ]), core["ɵmpd"](4608, ngx_filter_pipe.a, ngx_filter_pipe.a, []), core["ɵmpd"](1073742336, common.CommonModule, common.CommonModule, []), core["ɵmpd"](1073742336, fesm2015_forms["ɵangular_packages_forms_forms_d"], fesm2015_forms["ɵangular_packages_forms_forms_d"], []), core["ɵmpd"](1073742336, fesm2015_forms.FormsModule, fesm2015_forms.FormsModule, []), core["ɵmpd"](1073742336, fesm2015_forms.ReactiveFormsModule, fesm2015_forms.ReactiveFormsModule, []), core["ɵmpd"](1073742336, bidi.a, bidi.a, []), core["ɵmpd"](1073742336, fesm2015_core.l, fesm2015_core.l, [ a11y.h, [ 2, fesm2015_core.e ] ]), core["ɵmpd"](1073742336, platform.b, platform.b, []), core["ɵmpd"](1073742336, fesm2015_core.u, fesm2015_core.u, []), core["ɵmpd"](1073742336, fesm2015_button.c, fesm2015_button.c, []), core["ɵmpd"](1073742336, card.e, card.e, []), core["ɵmpd"](1073742336, observers.d, observers.d, []), core["ɵmpd"](1073742336, fesm2015_checkbox.e, fesm2015_checkbox.e, []), core["ɵmpd"](1073742336, fesm2015_checkbox.d, fesm2015_checkbox.d, []), core["ɵmpd"](1073742336, divider.b, divider.b, []), core["ɵmpd"](1073742336, fesm2015_core.m, fesm2015_core.m, []), core["ɵmpd"](1073742336, grid_list.a, grid_list.a, []), core["ɵmpd"](1073742336, form_field.e, form_field.e, []), core["ɵmpd"](1073742336, icon.c, icon.c, []), core["ɵmpd"](1073742336, text_field.c, text_field.c, []), core["ɵmpd"](1073742336, input.b, input.b, []), core["ɵmpd"](1073742336, progress_spinner.c, progress_spinner.c, []), core["ɵmpd"](1073742336, progress_bar.c, progress_bar.c, []), core["ɵmpd"](1073742336, fesm2015_radio.d, fesm2015_radio.d, []), core["ɵmpd"](1073742336, scrolling.c, scrolling.c, []), core["ɵmpd"](1073742336, sidenav.h, sidenav.h, []), core["ɵmpd"](1073742336, toolbar.b, toolbar.b, []), core["ɵmpd"](1073742336, a11y.a, a11y.a, [ a11y.h ]), core["ɵmpd"](1073742336, portal.g, portal.g, []), core["ɵmpd"](1073742336, overlay.g, overlay.g, []), core["ɵmpd"](1073742336, tooltip.e, tooltip.e, []), core["ɵmpd"](1073742336, slider.b, slider.b, []), core["ɵmpd"](1073742336, dialog.k, dialog.k, []), core["ɵmpd"](1073742336, slide_toggle.d, slide_toggle.d, []), core["ɵmpd"](1073742336, slide_toggle.c, slide_toggle.c, []), core["ɵmpd"](1073742336, chips.d, chips.d, []), core["ɵmpd"](1073742336, fesm2015_table.p, fesm2015_table.p, []), core["ɵmpd"](1073742336, table.m, table.m, []), core["ɵmpd"](1073742336, sort.e, sort.e, []), core["ɵmpd"](1073742336, fesm2015_core.s, fesm2015_core.s, []), core["ɵmpd"](1073742336, fesm2015_core.q, fesm2015_core.q, []), core["ɵmpd"](1073742336, fesm2015_select.d, fesm2015_select.d, []), core["ɵmpd"](1073742336, paginator.d, paginator.d, []), core["ɵmpd"](1073742336, tabs.k, tabs.k, []), core["ɵmpd"](1073742336, menu.i, menu.i, []), core["ɵmpd"](1073742336, menu.f, menu.f, []), core["ɵmpd"](1073742336, button_toggle.e, button_toggle.e, []), core["ɵmpd"](1073742336, snack_bar.e, snack_bar.e, []), core["ɵmpd"](1073742336, esm2015_core.c, esm2015_core.c, []), core["ɵmpd"](1073742336, flex.h, flex.h, []), core["ɵmpd"](1073742336, extended.b, extended.b, []), core["ɵmpd"](1073742336, grid.a, grid.a, []), core["ɵmpd"](1073742336, flex_layout.a, flex_layout.a, [ [ 2, esm2015_core.g ], core.PLATFORM_ID ]), core["ɵmpd"](1073742336, router.RouterModule, router.RouterModule, [ [ 2, router["ɵangular_packages_router_router_a"] ], [ 2, router.Router ] ]), core["ɵmpd"](1073742336, src_module.a, src_module.a, []), core["ɵmpd"](1073742336, ngx_filter_pipe.b, ngx_filter_pipe.b, []), core["ɵmpd"](1073742336, pipes_module.a, pipes_module.a, []), core["ɵmpd"](1073742336, shared_module.a, shared_module.a, []), core["ɵmpd"](1073742336, components_module.a, components_module.a, []), core["ɵmpd"](1073742336, PluginsRoutingModule, PluginsRoutingModule, []), core["ɵmpd"](1073742336, PluginModule, PluginModule, []), core["ɵmpd"](256, chips.a, {
                separatorKeyCodes: [ keycodes.f ]
            }, []), core["ɵmpd"](256, tooltip.a, shared_module.b, []), core["ɵmpd"](1024, router.ROUTES, (function() {
                return [ [ {
                    path: "",
                    component: PluginListComponent,
                    data: ɵ0
                }, {
                    path: ":pluginNamespace/:pluginName",
                    component: PluginDetailComponent,
                    data: ɵ1
                } ] ];
            }), []) ]);
        }));
    }
} ]);