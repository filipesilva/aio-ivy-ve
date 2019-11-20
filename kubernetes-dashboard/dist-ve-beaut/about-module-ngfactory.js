(window.webpackJsonp = window.webpackJsonp || []).push([ [ 19 ], {
    "qMr/": function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        var core = __webpack_require__("8Y7J");
        class AboutModule {}
        var index_ngfactory = __webpack_require__("ntJQ"), dialog_index_ngfactory = __webpack_require__("9cE2"), snack_bar_index_ngfactory = __webpack_require__("007U"), router_ngfactory = __webpack_require__("pMnS"), dialog_ngfactory = __webpack_require__("wyY1"), component_ngfactory = __webpack_require__("HrBQ"), menu_component_ngfactory = __webpack_require__("Shg9"), changedialog_dialog_ngfactory = __webpack_require__("rO67"), card_component_ngfactory = __webpack_require__("bLTg"), component = __webpack_require__("TN1b"), flex = __webpack_require__("VDRc"), esm2015_core = __webpack_require__("/q54"), icon_index_ngfactory = __webpack_require__("XE/z"), icon = __webpack_require__("Tj54");
        class AboutComponent {
            constructor(assets, config) {
                this.assets = assets, this.versionInfo = config.getVersionInfo(), this.latestCopyrightYear = (new Date).getFullYear();
            }
        }
        var assets = __webpack_require__("tfRF"), config = __webpack_require__("kUCb"), RenderType_AboutComponent = core["ɵcrt"]({
            encapsulation: 0,
            styles: [ [ ".kd-about-logo-icon[_ngcontent-%COMP%]{font-size:64px;height:64px;max-height:64px;max-width:64px;width:64px;margin:0 16px 0 0}" ] ],
            data: {}
        });
        function View_AboutComponent_0(_l) {
            return core["ɵvid"](0, [ (_l()(), core["ɵeld"](0, 0, null, null, 25, "kd-card", [], null, null, null, card_component_ngfactory.b, card_component_ngfactory.a)), core["ɵdid"](1, 49152, null, 0, component.a, [], {
                withFooter: [ 0, "withFooter" ]
            }, null), (_l()(), core["ɵeld"](2, 0, null, 0, 1, "div", [ [ "title", "" ] ], null, null, null, null, null)), (_l()(), 
            core["ɵted"](-1, null, [ "About" ])), (_l()(), core["ɵeld"](4, 0, null, 3, 10, "div", [ [ "content", "" ], [ "fxLayout", "row" ] ], null, null, null, null, null)), core["ɵdid"](5, 671744, null, 0, flex.d, [ core.ElementRef, esm2015_core.i, [ 2, flex.k ], esm2015_core.f ], {
                fxLayout: [ 0, "fxLayout" ]
            }, null), (_l()(), core["ɵeld"](6, 0, null, null, 1, "mat-icon", [ [ "class", "kd-about-logo-icon mat-icon notranslate" ], [ "role", "img" ] ], [ [ 2, "mat-icon-inline", null ], [ 2, "mat-icon-no-color", null ] ], null, null, icon_index_ngfactory.b, icon_index_ngfactory.a)), core["ɵdid"](7, 9158656, null, 0, icon.b, [ core.ElementRef, icon.d, [ 8, null ], [ 2, icon.a ], [ 2, core.ErrorHandler ] ], {
                svgIcon: [ 0, "svgIcon" ]
            }, null), (_l()(), core["ɵeld"](8, 0, null, null, 6, "div", [ [ "fxFlexAlign", "center" ] ], null, null, null, null, null)), core["ɵdid"](9, 671744, null, 0, flex.a, [ core.ElementRef, esm2015_core.i, [ 2, flex.e ], esm2015_core.f ], {
                fxFlexAlign: [ 0, "fxFlexAlign" ]
            }, null), (_l()(), core["ɵeld"](10, 0, null, null, 2, "div", [ [ "class", "kd-h1" ] ], null, null, null, null, null)), (_l()(), 
            core["ɵeld"](11, 0, null, null, 1, "span", [], null, null, null, null, null)), (_l()(), 
            core["ɵted"](12, null, [ "Dashboard v", "" ])), (_l()(), core["ɵeld"](13, 0, null, null, 1, "div", [ [ "class", "kd-h3" ] ], null, null, null, null, null)), (_l()(), 
            core["ɵted"](-1, null, [ "General-purpose web UI for Kubernetes clusters" ])), (_l()(), 
            core["ɵeld"](15, 0, null, 4, 10, "div", [ [ "class", "kd-muted" ], [ "footer", "" ] ], null, null, null, null, null)), (_l()(), 
            core["ɵeld"](16, 0, null, null, 1, "div", [], null, null, null, null, null)), (_l()(), 
            core["ɵted"](17, null, [ "Copyright 2015 - ", " The Kubernetes Authors." ])), (_l()(), 
            core["ɵeld"](18, 0, null, null, 7, "div", [], null, null, null, null, null)), (_l()(), 
            core["ɵted"](-1, null, [ " Kubernetes Dashboard is made possible by the Dashboard " ])), (_l()(), 
            core["ɵeld"](20, 0, null, null, 1, "a", [ [ "href", "https://github.com/kubernetes/dashboard/graphs/contributors" ] ], null, null, null, null, null)), (_l()(), 
            core["ɵted"](-1, null, [ "community" ])), (_l()(), core["ɵted"](-1, null, [ " as an " ])), (_l()(), 
            core["ɵeld"](23, 0, null, null, 1, "a", [ [ "href", "https://github.com/kubernetes/dashboard" ] ], null, null, null, null, null)), (_l()(), 
            core["ɵted"](-1, null, [ "open source project" ])), (_l()(), core["ɵted"](-1, null, [ ". " ])) ], (function(_ck, _v) {
                var _co = _v.component;
                _ck(_v, 1, 0, !0), _ck(_v, 5, 0, "row"), _ck(_v, 7, 0, _co.assets.getAppLogo()), 
                _ck(_v, 9, 0, "center");
            }), (function(_ck, _v) {
                var _co = _v.component;
                _ck(_v, 6, 0, core["ɵnov"](_v, 7).inline, "primary" !== core["ɵnov"](_v, 7).color && "accent" !== core["ɵnov"](_v, 7).color && "warn" !== core["ɵnov"](_v, 7).color), 
                _ck(_v, 12, 0, _co.versionInfo.semverString), _ck(_v, 17, 0, _co.latestCopyrightYear);
            }));
        }
        function View_AboutComponent_Host_0(_l) {
            return core["ɵvid"](0, [ (_l()(), core["ɵeld"](0, 0, null, null, 1, "kd-about", [], null, null, null, View_AboutComponent_0, RenderType_AboutComponent)), core["ɵdid"](1, 49152, null, 0, AboutComponent, [ assets.a, config.a ], null, null) ], null, null);
        }
        var AboutComponentNgFactory = core["ɵccf"]("kd-about", AboutComponent, View_AboutComponent_Host_0, {}, {}, []), button_index_ngfactory = __webpack_require__("1Xc+"), fesm2015_button = __webpack_require__("Dxy4"), a11y = __webpack_require__("YEUz"), animations = __webpack_require__("omvX"), tooltip = __webpack_require__("ZFy/"), overlay = __webpack_require__("1O3W"), scrolling = __webpack_require__("7KAL"), platform = __webpack_require__("SCoL"), bidi = __webpack_require__("9gLZ");
        class ActionbarComponent {
            constructor(config) {
                this.versionInfo = config.getVersionInfo();
            }
        }
        var RenderType_ActionbarComponent = core["ɵcrt"]({
            encapsulation: 2,
            styles: [],
            data: {}
        });
        function View_ActionbarComponent_0(_l) {
            return core["ɵvid"](0, [ (_l()(), core["ɵeld"](0, 0, null, null, 15, "div", [ [ "fxLayout", "row" ] ], null, null, null, null, null)), core["ɵdid"](1, 671744, null, 0, flex.d, [ core.ElementRef, esm2015_core.i, [ 2, flex.k ], esm2015_core.f ], {
                fxLayout: [ 0, "fxLayout" ]
            }, null), (_l()(), core["ɵeld"](2, 0, null, null, 6, "a", [ [ "href", "https://github.com/kubernetes/dashboard/tree/master/docs" ], [ "target", "_blank" ] ], null, null, null, null, null)), (_l()(), 
            core["ɵeld"](3, 16777216, null, null, 5, "button", [ [ "class", "kd-toolbar-action" ], [ "color", "accent" ], [ "mat-icon-button", "" ], [ "matTooltip", "Read documentation" ] ], [ [ 1, "disabled", 0 ], [ 2, "_mat-animation-noopable", null ] ], null, null, button_index_ngfactory.d, button_index_ngfactory.b)), core["ɵdid"](4, 180224, null, 0, fesm2015_button.b, [ core.ElementRef, a11y.f, [ 2, animations.a ] ], {
                color: [ 0, "color" ]
            }, null), core["ɵdid"](5, 212992, null, 0, tooltip.d, [ overlay.c, core.ElementRef, scrolling.b, core.ViewContainerRef, core.NgZone, platform.a, a11y.c, a11y.f, tooltip.b, [ 2, bidi.b ], [ 2, tooltip.a ], core.ElementRef ], {
                message: [ 0, "message" ]
            }, null), (_l()(), core["ɵeld"](6, 0, null, 0, 2, "mat-icon", [ [ "class", "mat-icon notranslate" ], [ "role", "img" ] ], [ [ 2, "mat-icon-inline", null ], [ 2, "mat-icon-no-color", null ] ], null, null, icon_index_ngfactory.b, icon_index_ngfactory.a)), core["ɵdid"](7, 9158656, null, 0, icon.b, [ core.ElementRef, icon.d, [ 8, null ], [ 2, icon.a ], [ 2, core.ErrorHandler ] ], null, null), (_l()(), 
            core["ɵted"](-1, 0, [ "description" ])), (_l()(), core["ɵeld"](9, 0, null, null, 6, "a", [ [ "href", "https://github.com/kubernetes/dashboard/issues/new/choose" ], [ "target", "_blank" ] ], null, null, null, null, null)), (_l()(), 
            core["ɵeld"](10, 16777216, null, null, 5, "button", [ [ "class", "kd-toolbar-action" ], [ "color", "accent" ], [ "mat-icon-button", "" ], [ "matTooltip", "Provide feedback" ] ], [ [ 1, "disabled", 0 ], [ 2, "_mat-animation-noopable", null ] ], null, null, button_index_ngfactory.d, button_index_ngfactory.b)), core["ɵdid"](11, 180224, null, 0, fesm2015_button.b, [ core.ElementRef, a11y.f, [ 2, animations.a ] ], {
                color: [ 0, "color" ]
            }, null), core["ɵdid"](12, 212992, null, 0, tooltip.d, [ overlay.c, core.ElementRef, scrolling.b, core.ViewContainerRef, core.NgZone, platform.a, a11y.c, a11y.f, tooltip.b, [ 2, bidi.b ], [ 2, tooltip.a ], core.ElementRef ], {
                message: [ 0, "message" ]
            }, null), (_l()(), core["ɵeld"](13, 0, null, 0, 2, "mat-icon", [ [ "class", "mat-icon notranslate" ], [ "role", "img" ] ], [ [ 2, "mat-icon-inline", null ], [ 2, "mat-icon-no-color", null ] ], null, null, icon_index_ngfactory.b, icon_index_ngfactory.a)), core["ɵdid"](14, 9158656, null, 0, icon.b, [ core.ElementRef, icon.d, [ 8, null ], [ 2, icon.a ], [ 2, core.ErrorHandler ] ], null, null), (_l()(), 
            core["ɵted"](-1, 0, [ "feedback" ])) ], (function(_ck, _v) {
                _ck(_v, 1, 0, "row"), _ck(_v, 4, 0, "accent"), _ck(_v, 5, 0, "Read documentation"), 
                _ck(_v, 7, 0), _ck(_v, 11, 0, "accent"), _ck(_v, 12, 0, "Provide feedback"), _ck(_v, 14, 0);
            }), (function(_ck, _v) {
                _ck(_v, 3, 0, core["ɵnov"](_v, 4).disabled || null, "NoopAnimations" === core["ɵnov"](_v, 4)._animationMode), 
                _ck(_v, 6, 0, core["ɵnov"](_v, 7).inline, "primary" !== core["ɵnov"](_v, 7).color && "accent" !== core["ɵnov"](_v, 7).color && "warn" !== core["ɵnov"](_v, 7).color), 
                _ck(_v, 10, 0, core["ɵnov"](_v, 11).disabled || null, "NoopAnimations" === core["ɵnov"](_v, 11)._animationMode), 
                _ck(_v, 13, 0, core["ɵnov"](_v, 14).inline, "primary" !== core["ɵnov"](_v, 14).color && "accent" !== core["ɵnov"](_v, 14).color && "warn" !== core["ɵnov"](_v, 14).color);
            }));
        }
        function View_ActionbarComponent_Host_0(_l) {
            return core["ɵvid"](0, [ (_l()(), core["ɵeld"](0, 0, null, null, 1, "ng-component", [], null, null, null, View_ActionbarComponent_0, RenderType_ActionbarComponent)), core["ɵdid"](1, 49152, null, 0, ActionbarComponent, [ config.a ], null, null) ], null, null);
        }
        var ActionbarComponentNgFactory = core["ɵccf"]("ng-component", ActionbarComponent, View_ActionbarComponent_Host_0, {}, {}, []), common = __webpack_require__("SVse"), fesm2015_forms = __webpack_require__("s7LF"), observers = __webpack_require__("9b/N"), fesm2015_core = __webpack_require__("UhP/"), dialog = __webpack_require__("iELJ"), sort = __webpack_require__("LUZP"), fesm2015_select = __webpack_require__("ZTz/"), paginator = __webpack_require__("5QHs"), menu = __webpack_require__("rJgo"), ngx_filter_pipe = __webpack_require__("4muW"), card = __webpack_require__("PDjf"), fesm2015_checkbox = __webpack_require__("pMoy"), divider = __webpack_require__("BSbQ"), grid_list = __webpack_require__("40+f"), form_field = __webpack_require__("Q2Ze"), text_field = __webpack_require__("8sFK"), input = __webpack_require__("e6WT"), progress_spinner = __webpack_require__("pu8Q"), progress_bar = __webpack_require__("BTe0"), fesm2015_radio = __webpack_require__("zQhy"), sidenav = __webpack_require__("q7Ft"), toolbar = __webpack_require__("l0rg"), portal = __webpack_require__("1z/I"), slider = __webpack_require__("mPVK"), slide_toggle = __webpack_require__("jMqV"), chips = __webpack_require__("f44v"), table = __webpack_require__("GXRp"), fesm2015_table = __webpack_require__("OaSA"), tabs = __webpack_require__("M9ds"), button_toggle = __webpack_require__("Ynp+"), snack_bar = __webpack_require__("zHaW"), extended = __webpack_require__("ura0"), grid = __webpack_require__("Nhcz"), flex_layout = __webpack_require__("u9T3"), router = __webpack_require__("iInd"), src_module = __webpack_require__("o6Sk"), pipes_module = __webpack_require__("I7rD"), shared_module = __webpack_require__("MnlZ"), components_module = __webpack_require__("PXUV");
        const ɵ0 = {
            breadcrumb: "About"
        };
        class AboutRoutingModule {}
        var keycodes = __webpack_require__("Ht+U");
        __webpack_require__.d(__webpack_exports__, "AboutModuleNgFactory", (function() {
            return AboutModuleNgFactory;
        }));
        var AboutModuleNgFactory = core["ɵcmf"](AboutModule, [], (function(_l) {
            return core["ɵmod"]([ core["ɵmpd"](512, core.ComponentFactoryResolver, core["ɵCodegenComponentFactoryResolver"], [ [ 8, [ index_ngfactory.a, dialog_index_ngfactory.a, snack_bar_index_ngfactory.a, snack_bar_index_ngfactory.b, router_ngfactory.a, dialog_ngfactory.a, component_ngfactory.a, menu_component_ngfactory.a, changedialog_dialog_ngfactory.a, AboutComponentNgFactory, ActionbarComponentNgFactory ] ], [ 3, core.ComponentFactoryResolver ], core.NgModuleRef ]), core["ɵmpd"](4608, common.NgLocalization, common.NgLocaleLocalization, [ core.LOCALE_ID ]), core["ɵmpd"](4608, fesm2015_forms["ɵangular_packages_forms_forms_n"], fesm2015_forms["ɵangular_packages_forms_forms_n"], []), core["ɵmpd"](4608, fesm2015_forms.FormBuilder, fesm2015_forms.FormBuilder, []), core["ɵmpd"](4608, observers.c, observers.c, []), core["ɵmpd"](4608, fesm2015_core.d, fesm2015_core.d, []), core["ɵmpd"](4608, overlay.c, overlay.c, [ overlay.i, overlay.e, core.ComponentFactoryResolver, overlay.h, overlay.f, core.Injector, core.NgZone, common.DOCUMENT, bidi.b, [ 2, common.Location ] ]), core["ɵmpd"](5120, overlay.j, overlay.k, [ overlay.c ]), core["ɵmpd"](5120, tooltip.b, tooltip.c, [ overlay.c ]), core["ɵmpd"](5120, dialog.c, dialog.d, [ overlay.c ]), core["ɵmpd"](135680, dialog.e, dialog.e, [ overlay.c, core.Injector, [ 2, common.Location ], [ 2, dialog.b ], dialog.c, [ 3, dialog.e ], overlay.e ]), core["ɵmpd"](5120, sort.d, sort.a, [ [ 3, sort.d ] ]), core["ɵmpd"](5120, fesm2015_select.a, fesm2015_select.b, [ overlay.c ]), core["ɵmpd"](5120, paginator.c, paginator.a, [ [ 3, paginator.c ] ]), core["ɵmpd"](5120, menu.c, menu.j, [ overlay.c ]), core["ɵmpd"](5120, core.APP_BOOTSTRAP_LISTENER, (function(p0_0, p0_1) {
                return [ esm2015_core.j(p0_0, p0_1) ];
            }), [ common.DOCUMENT, core.PLATFORM_ID ]), core["ɵmpd"](4608, ngx_filter_pipe.a, ngx_filter_pipe.a, []), core["ɵmpd"](1073742336, common.CommonModule, common.CommonModule, []), core["ɵmpd"](1073742336, fesm2015_forms["ɵangular_packages_forms_forms_d"], fesm2015_forms["ɵangular_packages_forms_forms_d"], []), core["ɵmpd"](1073742336, fesm2015_forms.FormsModule, fesm2015_forms.FormsModule, []), core["ɵmpd"](1073742336, fesm2015_forms.ReactiveFormsModule, fesm2015_forms.ReactiveFormsModule, []), core["ɵmpd"](1073742336, bidi.a, bidi.a, []), core["ɵmpd"](1073742336, fesm2015_core.l, fesm2015_core.l, [ a11y.h, [ 2, fesm2015_core.e ] ]), core["ɵmpd"](1073742336, platform.b, platform.b, []), core["ɵmpd"](1073742336, fesm2015_core.u, fesm2015_core.u, []), core["ɵmpd"](1073742336, fesm2015_button.c, fesm2015_button.c, []), core["ɵmpd"](1073742336, card.e, card.e, []), core["ɵmpd"](1073742336, observers.d, observers.d, []), core["ɵmpd"](1073742336, fesm2015_checkbox.e, fesm2015_checkbox.e, []), core["ɵmpd"](1073742336, fesm2015_checkbox.d, fesm2015_checkbox.d, []), core["ɵmpd"](1073742336, divider.b, divider.b, []), core["ɵmpd"](1073742336, fesm2015_core.m, fesm2015_core.m, []), core["ɵmpd"](1073742336, grid_list.a, grid_list.a, []), core["ɵmpd"](1073742336, form_field.e, form_field.e, []), core["ɵmpd"](1073742336, icon.c, icon.c, []), core["ɵmpd"](1073742336, text_field.c, text_field.c, []), core["ɵmpd"](1073742336, input.b, input.b, []), core["ɵmpd"](1073742336, progress_spinner.c, progress_spinner.c, []), core["ɵmpd"](1073742336, progress_bar.c, progress_bar.c, []), core["ɵmpd"](1073742336, fesm2015_radio.d, fesm2015_radio.d, []), core["ɵmpd"](1073742336, scrolling.c, scrolling.c, []), core["ɵmpd"](1073742336, sidenav.h, sidenav.h, []), core["ɵmpd"](1073742336, toolbar.b, toolbar.b, []), core["ɵmpd"](1073742336, a11y.a, a11y.a, [ a11y.h ]), core["ɵmpd"](1073742336, portal.g, portal.g, []), core["ɵmpd"](1073742336, overlay.g, overlay.g, []), core["ɵmpd"](1073742336, tooltip.e, tooltip.e, []), core["ɵmpd"](1073742336, slider.b, slider.b, []), core["ɵmpd"](1073742336, dialog.k, dialog.k, []), core["ɵmpd"](1073742336, slide_toggle.d, slide_toggle.d, []), core["ɵmpd"](1073742336, slide_toggle.c, slide_toggle.c, []), core["ɵmpd"](1073742336, chips.d, chips.d, []), core["ɵmpd"](1073742336, table.p, table.p, []), core["ɵmpd"](1073742336, fesm2015_table.m, fesm2015_table.m, []), core["ɵmpd"](1073742336, sort.e, sort.e, []), core["ɵmpd"](1073742336, fesm2015_core.s, fesm2015_core.s, []), core["ɵmpd"](1073742336, fesm2015_core.q, fesm2015_core.q, []), core["ɵmpd"](1073742336, fesm2015_select.d, fesm2015_select.d, []), core["ɵmpd"](1073742336, paginator.d, paginator.d, []), core["ɵmpd"](1073742336, tabs.k, tabs.k, []), core["ɵmpd"](1073742336, menu.i, menu.i, []), core["ɵmpd"](1073742336, menu.f, menu.f, []), core["ɵmpd"](1073742336, button_toggle.e, button_toggle.e, []), core["ɵmpd"](1073742336, snack_bar.e, snack_bar.e, []), core["ɵmpd"](1073742336, esm2015_core.c, esm2015_core.c, []), core["ɵmpd"](1073742336, flex.h, flex.h, []), core["ɵmpd"](1073742336, extended.b, extended.b, []), core["ɵmpd"](1073742336, grid.a, grid.a, []), core["ɵmpd"](1073742336, flex_layout.a, flex_layout.a, [ [ 2, esm2015_core.g ], core.PLATFORM_ID ]), core["ɵmpd"](1073742336, router.RouterModule, router.RouterModule, [ [ 2, router["ɵangular_packages_router_router_a"] ], [ 2, router.Router ] ]), core["ɵmpd"](1073742336, src_module.a, src_module.a, []), core["ɵmpd"](1073742336, ngx_filter_pipe.b, ngx_filter_pipe.b, []), core["ɵmpd"](1073742336, pipes_module.a, pipes_module.a, []), core["ɵmpd"](1073742336, shared_module.a, shared_module.a, []), core["ɵmpd"](1073742336, components_module.a, components_module.a, []), core["ɵmpd"](1073742336, AboutRoutingModule, AboutRoutingModule, []), core["ɵmpd"](1073742336, AboutModule, AboutModule, []), core["ɵmpd"](256, chips.a, {
                separatorKeyCodes: [ keycodes.f ]
            }, []), core["ɵmpd"](256, tooltip.a, shared_module.b, []), core["ɵmpd"](1024, router.ROUTES, (function() {
                return [ [ {
                    path: "",
                    component: AboutComponent,
                    data: ɵ0
                }, {
                    path: "",
                    component: ActionbarComponent,
                    outlet: "actionbar"
                } ] ];
            }), []) ]);
        }));
    }
} ]);