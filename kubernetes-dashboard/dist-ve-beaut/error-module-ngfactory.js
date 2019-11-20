(window.webpackJsonp = window.webpackJsonp || []).push([ [ 22 ], {
    AkbH: function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        var core = __webpack_require__("8Y7J");
        class ErrorModule {}
        var index_ngfactory = __webpack_require__("ntJQ"), dialog_index_ngfactory = __webpack_require__("9cE2"), snack_bar_index_ngfactory = __webpack_require__("007U"), router_ngfactory = __webpack_require__("pMnS"), dialog_ngfactory = __webpack_require__("wyY1"), component_ngfactory = __webpack_require__("HrBQ"), menu_component_ngfactory = __webpack_require__("Shg9"), changedialog_dialog_ngfactory = __webpack_require__("rO67"), flex = __webpack_require__("VDRc"), esm2015_core = __webpack_require__("/q54"), card_component_ngfactory = __webpack_require__("bLTg"), component = __webpack_require__("TN1b"), icon_index_ngfactory = __webpack_require__("XE/z"), icon = __webpack_require__("Tj54"), map = __webpack_require__("lJxs");
        class component_ErrorComponent {
            constructor(route_) {
                this.route_ = route_;
            }
            ngOnInit() {
                this.route_.paramMap.pipe(Object(map.a)(() => window.history.state)).subscribe(state => {
                    state.error && (this.error_ = state.error);
                });
            }
            getErrorStatus() {
                return this.error_ ? `${this.error_.status} (${this.error_.code})` : "Unknown Error";
            }
            getErrorData() {
                return this.error_ ? this.error_.message : "No error data available.";
            }
        }
        var router = __webpack_require__("iInd"), RenderType_ErrorComponent = core["ɵcrt"]({
            encapsulation: 0,
            styles: [ [ ".kd-about-logo-icon[_ngcontent-%COMP%]{font-size:64px;height:64px;max-height:64px;max-width:64px;width:64px;margin:0 16px 0 0}.kd-error-icon[_ngcontent-%COMP%]{margin-right:8px}" ] ],
            data: {}
        });
        function View_ErrorComponent_0(_l) {
            return core["ɵvid"](0, [ (_l()(), core["ɵeld"](0, 0, null, null, 13, "div", [ [ "fxLayoutAlign", "center" ] ], null, null, null, null, null)), core["ɵdid"](1, 671744, null, 0, flex.c, [ core.ElementRef, esm2015_core.i, [ 2, flex.j ], esm2015_core.f ], {
                fxLayoutAlign: [ 0, "fxLayoutAlign" ]
            }, null), (_l()(), core["ɵeld"](2, 0, null, null, 11, "kd-card", [ [ "fxFlex", "none" ] ], null, null, null, card_component_ngfactory.b, card_component_ngfactory.a)), core["ɵdid"](3, 671744, null, 0, flex.b, [ core.ElementRef, esm2015_core.i, esm2015_core.e, flex.i, esm2015_core.f ], {
                fxFlex: [ 0, "fxFlex" ]
            }, null), core["ɵdid"](4, 49152, null, 0, component.a, [], {
                expandable: [ 0, "expandable" ]
            }, null), (_l()(), core["ɵeld"](5, 0, null, 0, 6, "div", [ [ "fxLayout", "" ], [ "title", "" ] ], null, null, null, null, null)), core["ɵdid"](6, 671744, null, 0, flex.d, [ core.ElementRef, esm2015_core.i, [ 2, flex.k ], esm2015_core.f ], {
                fxLayout: [ 0, "fxLayout" ]
            }, null), (_l()(), core["ɵeld"](7, 0, null, null, 2, "mat-icon", [ [ "class", "kd-error-icon mat-icon notranslate" ], [ "role", "img" ] ], [ [ 2, "mat-icon-inline", null ], [ 2, "mat-icon-no-color", null ] ], null, null, icon_index_ngfactory.b, icon_index_ngfactory.a)), core["ɵdid"](8, 9158656, null, 0, icon.b, [ core.ElementRef, icon.d, [ 8, null ], [ 2, icon.a ], [ 2, core.ErrorHandler ] ], null, null), (_l()(), 
            core["ɵted"](-1, 0, [ "error_outline" ])), (_l()(), core["ɵeld"](10, 0, null, null, 1, "div", [], null, null, null, null, null)), (_l()(), 
            core["ɵted"](11, null, [ "", "" ])), (_l()(), core["ɵeld"](12, 0, null, 3, 1, "div", [ [ "content", "" ] ], null, null, null, null, null)), (_l()(), 
            core["ɵted"](13, null, [ " ", " " ])) ], (function(_ck, _v) {
                _ck(_v, 1, 0, "center"), _ck(_v, 3, 0, "none"), _ck(_v, 4, 0, !1), _ck(_v, 6, 0, ""), 
                _ck(_v, 8, 0);
            }), (function(_ck, _v) {
                var _co = _v.component;
                _ck(_v, 7, 0, core["ɵnov"](_v, 8).inline, "primary" !== core["ɵnov"](_v, 8).color && "accent" !== core["ɵnov"](_v, 8).color && "warn" !== core["ɵnov"](_v, 8).color), 
                _ck(_v, 11, 0, _co.getErrorStatus()), _ck(_v, 13, 0, _co.getErrorData());
            }));
        }
        function View_ErrorComponent_Host_0(_l) {
            return core["ɵvid"](0, [ (_l()(), core["ɵeld"](0, 0, null, null, 1, "kd-error", [], null, null, null, View_ErrorComponent_0, RenderType_ErrorComponent)), core["ɵdid"](1, 114688, null, 0, component_ErrorComponent, [ router.ActivatedRoute ], null, null) ], (function(_ck, _v) {
                _ck(_v, 1, 0);
            }), null);
        }
        var ErrorComponentNgFactory = core["ɵccf"]("kd-error", component_ErrorComponent, View_ErrorComponent_Host_0, {}, {}, []), common = __webpack_require__("SVse"), fesm2015_forms = __webpack_require__("s7LF"), observers = __webpack_require__("9b/N"), fesm2015_core = __webpack_require__("UhP/"), overlay = __webpack_require__("1O3W"), bidi = __webpack_require__("9gLZ"), tooltip = __webpack_require__("ZFy/"), dialog = __webpack_require__("iELJ"), sort = __webpack_require__("LUZP"), fesm2015_select = __webpack_require__("ZTz/"), paginator = __webpack_require__("5QHs"), menu = __webpack_require__("rJgo"), ngx_filter_pipe = __webpack_require__("4muW"), service = __webpack_require__("pkD2"), a11y = __webpack_require__("YEUz"), platform = __webpack_require__("SCoL"), fesm2015_button = __webpack_require__("Dxy4"), card = __webpack_require__("PDjf"), fesm2015_checkbox = __webpack_require__("pMoy"), divider = __webpack_require__("BSbQ"), grid_list = __webpack_require__("40+f"), form_field = __webpack_require__("Q2Ze"), text_field = __webpack_require__("8sFK"), input = __webpack_require__("e6WT"), progress_spinner = __webpack_require__("pu8Q"), progress_bar = __webpack_require__("BTe0"), fesm2015_radio = __webpack_require__("zQhy"), scrolling = __webpack_require__("7KAL"), sidenav = __webpack_require__("q7Ft"), toolbar = __webpack_require__("l0rg"), portal = __webpack_require__("1z/I"), slider = __webpack_require__("mPVK"), slide_toggle = __webpack_require__("jMqV"), chips = __webpack_require__("f44v"), table = __webpack_require__("GXRp"), fesm2015_table = __webpack_require__("OaSA"), tabs = __webpack_require__("M9ds"), button_toggle = __webpack_require__("Ynp+"), snack_bar = __webpack_require__("zHaW"), extended = __webpack_require__("ura0"), grid = __webpack_require__("Nhcz"), flex_layout = __webpack_require__("u9T3"), src_module = __webpack_require__("o6Sk"), pipes_module = __webpack_require__("I7rD"), shared_module = __webpack_require__("MnlZ"), components_module = __webpack_require__("PXUV"), nav_module = __webpack_require__("JiyO");
        const ɵ0 = {
            breadcrumb: "Error"
        };
        class ErrorRoutingModule {}
        var keycodes = __webpack_require__("Ht+U");
        __webpack_require__.d(__webpack_exports__, "ErrorModuleNgFactory", (function() {
            return ErrorModuleNgFactory;
        }));
        var ErrorModuleNgFactory = core["ɵcmf"](ErrorModule, [], (function(_l) {
            return core["ɵmod"]([ core["ɵmpd"](512, core.ComponentFactoryResolver, core["ɵCodegenComponentFactoryResolver"], [ [ 8, [ index_ngfactory.a, dialog_index_ngfactory.a, snack_bar_index_ngfactory.a, snack_bar_index_ngfactory.b, router_ngfactory.a, dialog_ngfactory.a, component_ngfactory.a, menu_component_ngfactory.a, changedialog_dialog_ngfactory.a, ErrorComponentNgFactory ] ], [ 3, core.ComponentFactoryResolver ], core.NgModuleRef ]), core["ɵmpd"](4608, common.NgLocalization, common.NgLocaleLocalization, [ core.LOCALE_ID ]), core["ɵmpd"](4608, fesm2015_forms["ɵangular_packages_forms_forms_n"], fesm2015_forms["ɵangular_packages_forms_forms_n"], []), core["ɵmpd"](4608, fesm2015_forms.FormBuilder, fesm2015_forms.FormBuilder, []), core["ɵmpd"](4608, observers.c, observers.c, []), core["ɵmpd"](4608, fesm2015_core.d, fesm2015_core.d, []), core["ɵmpd"](4608, overlay.c, overlay.c, [ overlay.i, overlay.e, core.ComponentFactoryResolver, overlay.h, overlay.f, core.Injector, core.NgZone, common.DOCUMENT, bidi.b, [ 2, common.Location ] ]), core["ɵmpd"](5120, overlay.j, overlay.k, [ overlay.c ]), core["ɵmpd"](5120, tooltip.b, tooltip.c, [ overlay.c ]), core["ɵmpd"](5120, dialog.c, dialog.d, [ overlay.c ]), core["ɵmpd"](135680, dialog.e, dialog.e, [ overlay.c, core.Injector, [ 2, common.Location ], [ 2, dialog.b ], dialog.c, [ 3, dialog.e ], overlay.e ]), core["ɵmpd"](5120, sort.d, sort.a, [ [ 3, sort.d ] ]), core["ɵmpd"](5120, fesm2015_select.a, fesm2015_select.b, [ overlay.c ]), core["ɵmpd"](5120, paginator.c, paginator.a, [ [ 3, paginator.c ] ]), core["ɵmpd"](5120, menu.c, menu.j, [ overlay.c ]), core["ɵmpd"](5120, core.APP_BOOTSTRAP_LISTENER, (function(p0_0, p0_1) {
                return [ esm2015_core.j(p0_0, p0_1) ];
            }), [ common.DOCUMENT, core.PLATFORM_ID ]), core["ɵmpd"](4608, ngx_filter_pipe.a, ngx_filter_pipe.a, []), core["ɵmpd"](4608, service.a, service.a, []), core["ɵmpd"](1073742336, common.CommonModule, common.CommonModule, []), core["ɵmpd"](1073742336, fesm2015_forms["ɵangular_packages_forms_forms_d"], fesm2015_forms["ɵangular_packages_forms_forms_d"], []), core["ɵmpd"](1073742336, fesm2015_forms.FormsModule, fesm2015_forms.FormsModule, []), core["ɵmpd"](1073742336, fesm2015_forms.ReactiveFormsModule, fesm2015_forms.ReactiveFormsModule, []), core["ɵmpd"](1073742336, bidi.a, bidi.a, []), core["ɵmpd"](1073742336, fesm2015_core.l, fesm2015_core.l, [ a11y.h, [ 2, fesm2015_core.e ] ]), core["ɵmpd"](1073742336, platform.b, platform.b, []), core["ɵmpd"](1073742336, fesm2015_core.u, fesm2015_core.u, []), core["ɵmpd"](1073742336, fesm2015_button.c, fesm2015_button.c, []), core["ɵmpd"](1073742336, card.e, card.e, []), core["ɵmpd"](1073742336, observers.d, observers.d, []), core["ɵmpd"](1073742336, fesm2015_checkbox.e, fesm2015_checkbox.e, []), core["ɵmpd"](1073742336, fesm2015_checkbox.d, fesm2015_checkbox.d, []), core["ɵmpd"](1073742336, divider.b, divider.b, []), core["ɵmpd"](1073742336, fesm2015_core.m, fesm2015_core.m, []), core["ɵmpd"](1073742336, grid_list.a, grid_list.a, []), core["ɵmpd"](1073742336, form_field.e, form_field.e, []), core["ɵmpd"](1073742336, icon.c, icon.c, []), core["ɵmpd"](1073742336, text_field.c, text_field.c, []), core["ɵmpd"](1073742336, input.b, input.b, []), core["ɵmpd"](1073742336, progress_spinner.c, progress_spinner.c, []), core["ɵmpd"](1073742336, progress_bar.c, progress_bar.c, []), core["ɵmpd"](1073742336, fesm2015_radio.d, fesm2015_radio.d, []), core["ɵmpd"](1073742336, scrolling.c, scrolling.c, []), core["ɵmpd"](1073742336, sidenav.h, sidenav.h, []), core["ɵmpd"](1073742336, toolbar.b, toolbar.b, []), core["ɵmpd"](1073742336, a11y.a, a11y.a, [ a11y.h ]), core["ɵmpd"](1073742336, portal.g, portal.g, []), core["ɵmpd"](1073742336, overlay.g, overlay.g, []), core["ɵmpd"](1073742336, tooltip.e, tooltip.e, []), core["ɵmpd"](1073742336, slider.b, slider.b, []), core["ɵmpd"](1073742336, dialog.k, dialog.k, []), core["ɵmpd"](1073742336, slide_toggle.d, slide_toggle.d, []), core["ɵmpd"](1073742336, slide_toggle.c, slide_toggle.c, []), core["ɵmpd"](1073742336, chips.d, chips.d, []), core["ɵmpd"](1073742336, table.p, table.p, []), core["ɵmpd"](1073742336, fesm2015_table.m, fesm2015_table.m, []), core["ɵmpd"](1073742336, sort.e, sort.e, []), core["ɵmpd"](1073742336, fesm2015_core.s, fesm2015_core.s, []), core["ɵmpd"](1073742336, fesm2015_core.q, fesm2015_core.q, []), core["ɵmpd"](1073742336, fesm2015_select.d, fesm2015_select.d, []), core["ɵmpd"](1073742336, paginator.d, paginator.d, []), core["ɵmpd"](1073742336, tabs.k, tabs.k, []), core["ɵmpd"](1073742336, menu.i, menu.i, []), core["ɵmpd"](1073742336, menu.f, menu.f, []), core["ɵmpd"](1073742336, button_toggle.e, button_toggle.e, []), core["ɵmpd"](1073742336, snack_bar.e, snack_bar.e, []), core["ɵmpd"](1073742336, esm2015_core.c, esm2015_core.c, []), core["ɵmpd"](1073742336, flex.h, flex.h, []), core["ɵmpd"](1073742336, extended.b, extended.b, []), core["ɵmpd"](1073742336, grid.a, grid.a, []), core["ɵmpd"](1073742336, flex_layout.a, flex_layout.a, [ [ 2, esm2015_core.g ], core.PLATFORM_ID ]), core["ɵmpd"](1073742336, router.RouterModule, router.RouterModule, [ [ 2, router["ɵangular_packages_router_router_a"] ], [ 2, router.Router ] ]), core["ɵmpd"](1073742336, src_module.a, src_module.a, []), core["ɵmpd"](1073742336, ngx_filter_pipe.b, ngx_filter_pipe.b, []), core["ɵmpd"](1073742336, pipes_module.a, pipes_module.a, []), core["ɵmpd"](1073742336, shared_module.a, shared_module.a, []), core["ɵmpd"](1073742336, components_module.a, components_module.a, []), core["ɵmpd"](1073742336, nav_module.a, nav_module.a, []), core["ɵmpd"](1073742336, ErrorRoutingModule, ErrorRoutingModule, []), core["ɵmpd"](1073742336, ErrorModule, ErrorModule, []), core["ɵmpd"](256, chips.a, {
                separatorKeyCodes: [ keycodes.f ]
            }, []), core["ɵmpd"](256, tooltip.a, shared_module.b, []), core["ɵmpd"](1024, router.ROUTES, (function() {
                return [ [ {
                    path: "",
                    component: component_ErrorComponent,
                    data: ɵ0
                } ] ];
            }), []) ]);
        }));
    }
} ]);