(window.webpackJsonp = window.webpackJsonp || []).push([ [ 49 ], {
    LmnF: function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        var core = __webpack_require__("8Y7J");
        class StatefulSetModule {}
        var index_ngfactory = __webpack_require__("ntJQ"), dialog_index_ngfactory = __webpack_require__("9cE2"), snack_bar_index_ngfactory = __webpack_require__("007U"), router_ngfactory = __webpack_require__("pMnS"), dialog_ngfactory = __webpack_require__("wyY1"), component_ngfactory = __webpack_require__("HrBQ"), menu_component_ngfactory = __webpack_require__("Shg9"), changedialog_dialog_ngfactory = __webpack_require__("rO67"), statefulset_component_ngfactory = __webpack_require__("YwQD"), component = __webpack_require__("mhPB"), resource = __webpack_require__("KyHI"), notifications = __webpack_require__("PXtb");
        class StatefulSetListComponent {}
        var RenderType_StatefulSetListComponent = core["ɵcrt"]({
            encapsulation: 2,
            styles: [],
            data: {}
        });
        function View_StatefulSetListComponent_0(_l) {
            return core["ɵvid"](0, [ (_l()(), core["ɵeld"](0, 0, null, null, 1, "kd-stateful-set-list", [], null, null, null, statefulset_component_ngfactory.b, statefulset_component_ngfactory.a)), core["ɵdid"](1, 245760, null, 0, component.a, [ resource.a, core.ComponentFactoryResolver, notifications.b, core.ChangeDetectorRef ], null, null) ], (function(_ck, _v) {
                _ck(_v, 1, 0);
            }), null);
        }
        function View_StatefulSetListComponent_Host_0(_l) {
            return core["ɵvid"](0, [ (_l()(), core["ɵeld"](0, 0, null, null, 1, "kd-stateful-set-state", [], null, null, null, View_StatefulSetListComponent_0, RenderType_StatefulSetListComponent)), core["ɵdid"](1, 49152, null, 0, StatefulSetListComponent, [], null, null) ], null, null);
        }
        var StatefulSetListComponentNgFactory = core["ɵccf"]("kd-stateful-set-state", StatefulSetListComponent, View_StatefulSetListComponent_Host_0, {}, {}, []), property_component_ngfactory = __webpack_require__("ZO99"), flex = __webpack_require__("VDRc"), esm2015_core = __webpack_require__("/q54"), property_component = __webpack_require__("Rx8Q"), chips_component_ngfactory = __webpack_require__("OEkR"), chips_component = __webpack_require__("svQk"), dialog = __webpack_require__("iELJ"), common = __webpack_require__("SVse"), objectmeta_component_ngfactory = __webpack_require__("5J1W"), objectmeta_component = __webpack_require__("YS1y"), card_component_ngfactory = __webpack_require__("bLTg"), card_component = __webpack_require__("TN1b"), podstatus_component_ngfactory = __webpack_require__("DtvC"), podstatus_component = __webpack_require__("TsCr"), pod_component_ngfactory = __webpack_require__("pH9A"), pod_component = __webpack_require__("D5Vd"), event_component_ngfactory = __webpack_require__("16HJ"), event_component = __webpack_require__("MmPu"), actionbar = __webpack_require__("SRaF"), endpoint = __webpack_require__("m/E6");
        class component_StatefulSetDetailComponent {
            constructor(statefulSet_, actionbar_, activatedRoute_, notifications_) {
                this.statefulSet_ = statefulSet_, this.actionbar_ = actionbar_, this.activatedRoute_ = activatedRoute_, 
                this.notifications_ = notifications_, this.endpoint_ = endpoint.a.resource(endpoint.b.statefulSet, !0), 
                this.isInitialized = !1;
            }
            ngOnInit() {
                const resourceName = this.activatedRoute_.snapshot.params.resourceName, resourceNamespace = this.activatedRoute_.snapshot.params.resourceNamespace;
                this.podListEndpoint = this.endpoint_.child(resourceName, endpoint.b.pod, resourceNamespace), 
                this.eventListEndpoint = this.endpoint_.child(resourceName, endpoint.b.event, resourceNamespace), 
                this.statefulSetSubscription_ = this.statefulSet_.get(this.endpoint_.detail(), resourceName, resourceNamespace).subscribe(d => {
                    this.statefulSet = d, this.notifications_.pushErrors(d.errors), this.actionbar_.onInit.emit(new actionbar.b("Stateful Set", d.objectMeta, d.typeMeta)), 
                    this.isInitialized = !0;
                });
            }
            ngOnDestroy() {
                this.statefulSetSubscription_.unsubscribe(), this.actionbar_.onDetailsLeave.emit();
            }
        }
        var router = __webpack_require__("iInd"), RenderType_StatefulSetDetailComponent = core["ɵcrt"]({
            encapsulation: 2,
            styles: [],
            data: {}
        });
        function View_StatefulSetDetailComponent_2(_l) {
            return core["ɵvid"](0, [ (_l()(), core["ɵeld"](0, 0, null, null, 7, "kd-property", [ [ "fxFlex", "100" ] ], null, null, null, property_component_ngfactory.b, property_component_ngfactory.a)), core["ɵdid"](1, 671744, null, 0, flex.b, [ core.ElementRef, esm2015_core.i, esm2015_core.e, flex.i, esm2015_core.f ], {
                fxFlex: [ 0, "fxFlex" ]
            }, null), core["ɵdid"](2, 49152, null, 0, property_component.a, [], null, null), (_l()(), 
            core["ɵeld"](3, 0, null, 0, 1, "div", [ [ "key", "" ] ], null, null, null, null, null)), (_l()(), 
            core["ɵted"](-1, null, [ "Label Selector" ])), (_l()(), core["ɵeld"](5, 0, null, 1, 2, "div", [ [ "value", "" ] ], null, null, null, null, null)), (_l()(), 
            core["ɵeld"](6, 0, null, null, 1, "kd-chips", [], null, null, null, chips_component_ngfactory.b, chips_component_ngfactory.a)), core["ɵdid"](7, 114688, null, 0, chips_component.a, [ dialog.e ], {
                map: [ 0, "map" ]
            }, null) ], (function(_ck, _v) {
                var _co = _v.component;
                _ck(_v, 1, 0, "100"), _ck(_v, 7, 0, _co.statefulSet.labelSelector);
            }), null);
        }
        function View_StatefulSetDetailComponent_3(_l) {
            return core["ɵvid"](0, [ (_l()(), core["ɵeld"](0, 0, null, null, 6, "kd-property", [], null, null, null, property_component_ngfactory.b, property_component_ngfactory.a)), core["ɵdid"](1, 49152, null, 0, property_component.a, [], null, null), (_l()(), 
            core["ɵeld"](2, 0, null, 0, 1, "div", [ [ "key", "" ] ], null, null, null, null, null)), (_l()(), 
            core["ɵted"](-1, null, [ "Images" ])), (_l()(), core["ɵeld"](4, 0, null, 1, 2, "div", [ [ "value", "" ] ], null, null, null, null, null)), (_l()(), 
            core["ɵeld"](5, 0, null, null, 1, "kd-chips", [], null, null, null, chips_component_ngfactory.b, chips_component_ngfactory.a)), core["ɵdid"](6, 114688, null, 0, chips_component.a, [ dialog.e ], {
                map: [ 0, "map" ]
            }, null) ], (function(_ck, _v) {
                _ck(_v, 6, 0, _v.component.statefulSet.containerImages);
            }), null);
        }
        function View_StatefulSetDetailComponent_4(_l) {
            return core["ɵvid"](0, [ (_l()(), core["ɵeld"](0, 0, null, null, 6, "kd-property", [], null, null, null, property_component_ngfactory.b, property_component_ngfactory.a)), core["ɵdid"](1, 49152, null, 0, property_component.a, [], null, null), (_l()(), 
            core["ɵeld"](2, 0, null, 0, 1, "div", [ [ "key", "" ] ], null, null, null, null, null)), (_l()(), 
            core["ɵted"](-1, null, [ "Init images" ])), (_l()(), core["ɵeld"](4, 0, null, 1, 2, "div", [ [ "value", "" ] ], null, null, null, null, null)), (_l()(), 
            core["ɵeld"](5, 0, null, null, 1, "kd-chips", [], null, null, null, chips_component_ngfactory.b, chips_component_ngfactory.a)), core["ɵdid"](6, 114688, null, 0, chips_component.a, [ dialog.e ], {
                map: [ 0, "map" ]
            }, null) ], (function(_ck, _v) {
                _ck(_v, 6, 0, _v.component.statefulSet.initContainerImages);
            }), null);
        }
        function View_StatefulSetDetailComponent_1(_l) {
            return core["ɵvid"](0, [ (_l()(), core["ɵeld"](0, 0, null, null, 7, "div", [ [ "content", "" ], [ "fxLayout", "row wrap" ] ], null, null, null, null, null)), core["ɵdid"](1, 671744, null, 0, flex.d, [ core.ElementRef, esm2015_core.i, [ 2, flex.k ], esm2015_core.f ], {
                fxLayout: [ 0, "fxLayout" ]
            }, null), (_l()(), core["ɵand"](16777216, null, null, 1, null, View_StatefulSetDetailComponent_2)), core["ɵdid"](3, 16384, null, 0, common.NgIf, [ core.ViewContainerRef, core.TemplateRef ], {
                ngIf: [ 0, "ngIf" ]
            }, null), (_l()(), core["ɵand"](16777216, null, null, 1, null, View_StatefulSetDetailComponent_3)), core["ɵdid"](5, 16384, null, 0, common.NgIf, [ core.ViewContainerRef, core.TemplateRef ], {
                ngIf: [ 0, "ngIf" ]
            }, null), (_l()(), core["ɵand"](16777216, null, null, 1, null, View_StatefulSetDetailComponent_4)), core["ɵdid"](7, 16384, null, 0, common.NgIf, [ core.ViewContainerRef, core.TemplateRef ], {
                ngIf: [ 0, "ngIf" ]
            }, null) ], (function(_ck, _v) {
                var _co = _v.component;
                _ck(_v, 1, 0, "row wrap"), _ck(_v, 3, 0, null == _co.statefulSet ? null : _co.statefulSet.labelSelector), 
                _ck(_v, 5, 0, null == _co.statefulSet ? null : _co.statefulSet.containerImages), 
                _ck(_v, 7, 0, null == _co.statefulSet ? null : _co.statefulSet.initContainerImages);
            }), null);
        }
        function View_StatefulSetDetailComponent_0(_l) {
            return core["ɵvid"](0, [ (_l()(), core["ɵeld"](0, 0, null, null, 1, "kd-object-meta", [], null, null, null, objectmeta_component_ngfactory.b, objectmeta_component_ngfactory.a)), core["ɵdid"](1, 49152, null, 0, objectmeta_component.a, [], {
                initialized: [ 0, "initialized" ],
                objectMeta: [ 1, "objectMeta" ]
            }, null), (_l()(), core["ɵeld"](2, 0, null, null, 5, "kd-card", [], null, null, null, card_component_ngfactory.b, card_component_ngfactory.a)), core["ɵdid"](3, 49152, null, 0, card_component.a, [], {
                initialized: [ 0, "initialized" ]
            }, null), (_l()(), core["ɵeld"](4, 0, null, 0, 1, "div", [ [ "title", "" ] ], null, null, null, null, null)), (_l()(), 
            core["ɵted"](-1, null, [ "Resource information" ])), (_l()(), core["ɵand"](16777216, null, 3, 1, null, View_StatefulSetDetailComponent_1)), core["ɵdid"](7, 16384, null, 0, common.NgIf, [ core.ViewContainerRef, core.TemplateRef ], {
                ngIf: [ 0, "ngIf" ]
            }, null), (_l()(), core["ɵeld"](8, 0, null, null, 1, "kd-pod-status-card", [], null, null, null, podstatus_component_ngfactory.b, podstatus_component_ngfactory.a)), core["ɵdid"](9, 49152, null, 0, podstatus_component.a, [], {
                podInfo: [ 0, "podInfo" ],
                initialized: [ 1, "initialized" ]
            }, null), (_l()(), core["ɵeld"](10, 0, null, null, 1, "kd-pod-list", [], null, null, null, pod_component_ngfactory.b, pod_component_ngfactory.a)), core["ɵdid"](11, 245760, null, 0, pod_component.a, [ resource.a, core.ComponentFactoryResolver, notifications.b, core.ChangeDetectorRef ], {
                endpoint: [ 0, "endpoint" ]
            }, null), (_l()(), core["ɵeld"](12, 0, null, null, 1, "kd-event-list", [], null, null, null, event_component_ngfactory.b, event_component_ngfactory.a)), core["ɵdid"](13, 245760, null, 0, event_component.a, [ resource.a, notifications.b, core.ChangeDetectorRef ], {
                endpoint: [ 0, "endpoint" ]
            }, null) ], (function(_ck, _v) {
                var _co = _v.component;
                _ck(_v, 1, 0, _co.isInitialized, null == _co.statefulSet ? null : _co.statefulSet.objectMeta), 
                _ck(_v, 3, 0, _co.isInitialized), _ck(_v, 7, 0, _co.isInitialized), _ck(_v, 9, 0, null == _co.statefulSet ? null : _co.statefulSet.podInfo, _co.isInitialized), 
                _ck(_v, 11, 0, _co.podListEndpoint), _ck(_v, 13, 0, _co.eventListEndpoint);
            }), null);
        }
        function View_StatefulSetDetailComponent_Host_0(_l) {
            return core["ɵvid"](0, [ (_l()(), core["ɵeld"](0, 0, null, null, 1, "kd-stateful-set-detail", [], null, null, null, View_StatefulSetDetailComponent_0, RenderType_StatefulSetDetailComponent)), core["ɵdid"](1, 245760, null, 0, component_StatefulSetDetailComponent, [ resource.a, actionbar.a, router.ActivatedRoute, notifications.b ], null, null) ], (function(_ck, _v) {
                _ck(_v, 1, 0);
            }), null);
        }
        var StatefulSetDetailComponentNgFactory = core["ɵccf"]("kd-stateful-set-detail", component_StatefulSetDetailComponent, View_StatefulSetDetailComponent_Host_0, {}, {}, []), logsscaledefault_component_ngfactory = __webpack_require__("RUiK"), fesm2015_forms = __webpack_require__("s7LF"), observers = __webpack_require__("9b/N"), fesm2015_core = __webpack_require__("UhP/"), overlay = __webpack_require__("1O3W"), bidi = __webpack_require__("9gLZ"), tooltip = __webpack_require__("ZFy/"), sort = __webpack_require__("LUZP"), fesm2015_select = __webpack_require__("ZTz/"), paginator = __webpack_require__("5QHs"), menu = __webpack_require__("rJgo"), ngx_filter_pipe = __webpack_require__("4muW"), a11y = __webpack_require__("YEUz"), platform = __webpack_require__("SCoL"), fesm2015_button = __webpack_require__("Dxy4"), card = __webpack_require__("PDjf"), fesm2015_checkbox = __webpack_require__("pMoy"), divider = __webpack_require__("BSbQ"), grid_list = __webpack_require__("40+f"), form_field = __webpack_require__("Q2Ze"), icon = __webpack_require__("Tj54"), text_field = __webpack_require__("8sFK"), input = __webpack_require__("e6WT"), progress_spinner = __webpack_require__("pu8Q"), progress_bar = __webpack_require__("BTe0"), fesm2015_radio = __webpack_require__("zQhy"), scrolling = __webpack_require__("7KAL"), sidenav = __webpack_require__("q7Ft"), toolbar = __webpack_require__("l0rg"), portal = __webpack_require__("1z/I"), slider = __webpack_require__("mPVK"), slide_toggle = __webpack_require__("jMqV"), chips = __webpack_require__("f44v"), table = __webpack_require__("GXRp"), fesm2015_table = __webpack_require__("OaSA"), tabs = __webpack_require__("M9ds"), button_toggle = __webpack_require__("Ynp+"), snack_bar = __webpack_require__("zHaW"), extended = __webpack_require__("ura0"), grid = __webpack_require__("Nhcz"), flex_layout = __webpack_require__("u9T3"), src_module = __webpack_require__("o6Sk"), pipes_module = __webpack_require__("I7rD"), shared_module = __webpack_require__("MnlZ"), components_module = __webpack_require__("PXUV");
        const ɵ0 = {
            breadcrumb: "Stateful Sets",
            parent: __webpack_require__("6XRW").a
        }, ɵ1 = {
            breadcrumb: "{{ resourceName }}",
            parent: {
                path: "",
                component: StatefulSetListComponent,
                data: ɵ0
            }
        };
        class StatefulSetRoutingModule {}
        var keycodes = __webpack_require__("Ht+U"), logsscaledefault_component = __webpack_require__("VL/P");
        __webpack_require__.d(__webpack_exports__, "StatefulSetModuleNgFactory", (function() {
            return StatefulSetModuleNgFactory;
        }));
        var StatefulSetModuleNgFactory = core["ɵcmf"](StatefulSetModule, [], (function(_l) {
            return core["ɵmod"]([ core["ɵmpd"](512, core.ComponentFactoryResolver, core["ɵCodegenComponentFactoryResolver"], [ [ 8, [ index_ngfactory.a, dialog_index_ngfactory.a, snack_bar_index_ngfactory.a, snack_bar_index_ngfactory.b, router_ngfactory.a, dialog_ngfactory.a, component_ngfactory.a, menu_component_ngfactory.a, changedialog_dialog_ngfactory.a, StatefulSetListComponentNgFactory, StatefulSetDetailComponentNgFactory, logsscaledefault_component_ngfactory.a ] ], [ 3, core.ComponentFactoryResolver ], core.NgModuleRef ]), core["ɵmpd"](4608, common.NgLocalization, common.NgLocaleLocalization, [ core.LOCALE_ID ]), core["ɵmpd"](4608, fesm2015_forms["ɵangular_packages_forms_forms_n"], fesm2015_forms["ɵangular_packages_forms_forms_n"], []), core["ɵmpd"](4608, fesm2015_forms.FormBuilder, fesm2015_forms.FormBuilder, []), core["ɵmpd"](4608, observers.c, observers.c, []), core["ɵmpd"](4608, fesm2015_core.d, fesm2015_core.d, []), core["ɵmpd"](4608, overlay.c, overlay.c, [ overlay.i, overlay.e, core.ComponentFactoryResolver, overlay.h, overlay.f, core.Injector, core.NgZone, common.DOCUMENT, bidi.b, [ 2, common.Location ] ]), core["ɵmpd"](5120, overlay.j, overlay.k, [ overlay.c ]), core["ɵmpd"](5120, tooltip.b, tooltip.c, [ overlay.c ]), core["ɵmpd"](5120, dialog.c, dialog.d, [ overlay.c ]), core["ɵmpd"](135680, dialog.e, dialog.e, [ overlay.c, core.Injector, [ 2, common.Location ], [ 2, dialog.b ], dialog.c, [ 3, dialog.e ], overlay.e ]), core["ɵmpd"](5120, sort.d, sort.a, [ [ 3, sort.d ] ]), core["ɵmpd"](5120, fesm2015_select.a, fesm2015_select.b, [ overlay.c ]), core["ɵmpd"](5120, paginator.c, paginator.a, [ [ 3, paginator.c ] ]), core["ɵmpd"](5120, menu.c, menu.j, [ overlay.c ]), core["ɵmpd"](5120, core.APP_BOOTSTRAP_LISTENER, (function(p0_0, p0_1) {
                return [ esm2015_core.j(p0_0, p0_1) ];
            }), [ common.DOCUMENT, core.PLATFORM_ID ]), core["ɵmpd"](4608, ngx_filter_pipe.a, ngx_filter_pipe.a, []), core["ɵmpd"](1073742336, common.CommonModule, common.CommonModule, []), core["ɵmpd"](1073742336, fesm2015_forms["ɵangular_packages_forms_forms_d"], fesm2015_forms["ɵangular_packages_forms_forms_d"], []), core["ɵmpd"](1073742336, fesm2015_forms.FormsModule, fesm2015_forms.FormsModule, []), core["ɵmpd"](1073742336, fesm2015_forms.ReactiveFormsModule, fesm2015_forms.ReactiveFormsModule, []), core["ɵmpd"](1073742336, bidi.a, bidi.a, []), core["ɵmpd"](1073742336, fesm2015_core.l, fesm2015_core.l, [ a11y.h, [ 2, fesm2015_core.e ] ]), core["ɵmpd"](1073742336, platform.b, platform.b, []), core["ɵmpd"](1073742336, fesm2015_core.u, fesm2015_core.u, []), core["ɵmpd"](1073742336, fesm2015_button.c, fesm2015_button.c, []), core["ɵmpd"](1073742336, card.e, card.e, []), core["ɵmpd"](1073742336, observers.d, observers.d, []), core["ɵmpd"](1073742336, fesm2015_checkbox.e, fesm2015_checkbox.e, []), core["ɵmpd"](1073742336, fesm2015_checkbox.d, fesm2015_checkbox.d, []), core["ɵmpd"](1073742336, divider.b, divider.b, []), core["ɵmpd"](1073742336, fesm2015_core.m, fesm2015_core.m, []), core["ɵmpd"](1073742336, grid_list.a, grid_list.a, []), core["ɵmpd"](1073742336, form_field.e, form_field.e, []), core["ɵmpd"](1073742336, icon.c, icon.c, []), core["ɵmpd"](1073742336, text_field.c, text_field.c, []), core["ɵmpd"](1073742336, input.b, input.b, []), core["ɵmpd"](1073742336, progress_spinner.c, progress_spinner.c, []), core["ɵmpd"](1073742336, progress_bar.c, progress_bar.c, []), core["ɵmpd"](1073742336, fesm2015_radio.d, fesm2015_radio.d, []), core["ɵmpd"](1073742336, scrolling.c, scrolling.c, []), core["ɵmpd"](1073742336, sidenav.h, sidenav.h, []), core["ɵmpd"](1073742336, toolbar.b, toolbar.b, []), core["ɵmpd"](1073742336, a11y.a, a11y.a, [ a11y.h ]), core["ɵmpd"](1073742336, portal.g, portal.g, []), core["ɵmpd"](1073742336, overlay.g, overlay.g, []), core["ɵmpd"](1073742336, tooltip.e, tooltip.e, []), core["ɵmpd"](1073742336, slider.b, slider.b, []), core["ɵmpd"](1073742336, dialog.k, dialog.k, []), core["ɵmpd"](1073742336, slide_toggle.d, slide_toggle.d, []), core["ɵmpd"](1073742336, slide_toggle.c, slide_toggle.c, []), core["ɵmpd"](1073742336, chips.d, chips.d, []), core["ɵmpd"](1073742336, table.p, table.p, []), core["ɵmpd"](1073742336, fesm2015_table.m, fesm2015_table.m, []), core["ɵmpd"](1073742336, sort.e, sort.e, []), core["ɵmpd"](1073742336, fesm2015_core.s, fesm2015_core.s, []), core["ɵmpd"](1073742336, fesm2015_core.q, fesm2015_core.q, []), core["ɵmpd"](1073742336, fesm2015_select.d, fesm2015_select.d, []), core["ɵmpd"](1073742336, paginator.d, paginator.d, []), core["ɵmpd"](1073742336, tabs.k, tabs.k, []), core["ɵmpd"](1073742336, menu.i, menu.i, []), core["ɵmpd"](1073742336, menu.f, menu.f, []), core["ɵmpd"](1073742336, button_toggle.e, button_toggle.e, []), core["ɵmpd"](1073742336, snack_bar.e, snack_bar.e, []), core["ɵmpd"](1073742336, esm2015_core.c, esm2015_core.c, []), core["ɵmpd"](1073742336, flex.h, flex.h, []), core["ɵmpd"](1073742336, extended.b, extended.b, []), core["ɵmpd"](1073742336, grid.a, grid.a, []), core["ɵmpd"](1073742336, flex_layout.a, flex_layout.a, [ [ 2, esm2015_core.g ], core.PLATFORM_ID ]), core["ɵmpd"](1073742336, router.RouterModule, router.RouterModule, [ [ 2, router["ɵangular_packages_router_router_a"] ], [ 2, router.Router ] ]), core["ɵmpd"](1073742336, src_module.a, src_module.a, []), core["ɵmpd"](1073742336, ngx_filter_pipe.b, ngx_filter_pipe.b, []), core["ɵmpd"](1073742336, pipes_module.a, pipes_module.a, []), core["ɵmpd"](1073742336, shared_module.a, shared_module.a, []), core["ɵmpd"](1073742336, components_module.a, components_module.a, []), core["ɵmpd"](1073742336, StatefulSetRoutingModule, StatefulSetRoutingModule, []), core["ɵmpd"](1073742336, StatefulSetModule, StatefulSetModule, []), core["ɵmpd"](256, chips.a, {
                separatorKeyCodes: [ keycodes.f ]
            }, []), core["ɵmpd"](256, tooltip.a, shared_module.b, []), core["ɵmpd"](1024, router.ROUTES, (function() {
                return [ [ {
                    path: "",
                    component: StatefulSetListComponent,
                    data: ɵ0
                }, {
                    path: ":resourceNamespace/:resourceName",
                    component: component_StatefulSetDetailComponent,
                    data: ɵ1
                }, {
                    path: "",
                    component: logsscaledefault_component.a,
                    outlet: "actionbar"
                } ] ];
            }), []) ]);
        }));
    }
} ]);
//# sourceMappingURL=resource-workloads-statefulset-module-ngfactory.js.map