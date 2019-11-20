(window.webpackJsonp = window.webpackJsonp || []).push([ [ 47 ], {
    e6OM: function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        var core = __webpack_require__("8Y7J");
        class ReplicaSetModule {}
        var index_ngfactory = __webpack_require__("ntJQ"), dialog_index_ngfactory = __webpack_require__("9cE2"), snack_bar_index_ngfactory = __webpack_require__("007U"), router_ngfactory = __webpack_require__("pMnS"), dialog_ngfactory = __webpack_require__("wyY1"), component_ngfactory = __webpack_require__("HrBQ"), menu_component_ngfactory = __webpack_require__("Shg9"), changedialog_dialog_ngfactory = __webpack_require__("rO67"), replicaset_component_ngfactory = __webpack_require__("fjEM"), component = __webpack_require__("ZonX"), resource = __webpack_require__("KyHI"), router = __webpack_require__("iInd"), notifications = __webpack_require__("PXtb");
        class ReplicaSetListComponent {}
        var RenderType_ReplicaSetListComponent = core["ɵcrt"]({
            encapsulation: 2,
            styles: [],
            data: {}
        });
        function View_ReplicaSetListComponent_0(_l) {
            return core["ɵvid"](0, [ (_l()(), core["ɵeld"](0, 0, null, null, 1, "kd-replica-set-list", [], null, null, null, replicaset_component_ngfactory.b, replicaset_component_ngfactory.a)), core["ɵdid"](1, 245760, null, 0, component.a, [ resource.a, router.ActivatedRoute, notifications.b, core.ComponentFactoryResolver, core.ChangeDetectorRef ], null, null) ], (function(_ck, _v) {
                _ck(_v, 1, 0);
            }), null);
        }
        function View_ReplicaSetListComponent_Host_0(_l) {
            return core["ɵvid"](0, [ (_l()(), core["ɵeld"](0, 0, null, null, 1, "kd-replica-set-list-state", [], null, null, null, View_ReplicaSetListComponent_0, RenderType_ReplicaSetListComponent)), core["ɵdid"](1, 49152, null, 0, ReplicaSetListComponent, [], null, null) ], null, null);
        }
        var ReplicaSetListComponentNgFactory = core["ɵccf"]("kd-replica-set-list-state", ReplicaSetListComponent, View_ReplicaSetListComponent_Host_0, {}, {}, []), property_component_ngfactory = __webpack_require__("ZO99"), property_component = __webpack_require__("Rx8Q"), chips_component_ngfactory = __webpack_require__("OEkR"), chips_component = __webpack_require__("svQk"), dialog = __webpack_require__("iELJ"), flex = __webpack_require__("VDRc"), esm2015_core = __webpack_require__("/q54"), common = __webpack_require__("SVse"), objectmeta_component_ngfactory = __webpack_require__("5J1W"), objectmeta_component = __webpack_require__("YS1y"), card_component_ngfactory = __webpack_require__("bLTg"), card_component = __webpack_require__("TN1b"), podstatus_component_ngfactory = __webpack_require__("DtvC"), podstatus_component = __webpack_require__("TsCr"), pod_component_ngfactory = __webpack_require__("pH9A"), pod_component = __webpack_require__("D5Vd"), service_component_ngfactory = __webpack_require__("F9lf"), service_component = __webpack_require__("0t1c"), event_component_ngfactory = __webpack_require__("16HJ"), event_component = __webpack_require__("MmPu"), actionbar = __webpack_require__("SRaF"), endpoint = __webpack_require__("m/E6");
        class component_ReplicaSetDetailComponent {
            constructor(replicaSet_, actionbar_, activatedRoute_, notifications_) {
                this.replicaSet_ = replicaSet_, this.actionbar_ = actionbar_, this.activatedRoute_ = activatedRoute_, 
                this.notifications_ = notifications_, this.endpoint_ = endpoint.a.resource(endpoint.b.replicaSet, !0), 
                this.isInitialized = !1;
            }
            ngOnInit() {
                const resourceName = this.activatedRoute_.snapshot.params.resourceName, resourceNamespace = this.activatedRoute_.snapshot.params.resourceNamespace;
                this.eventListEndpoint = this.endpoint_.child(resourceName, endpoint.b.event, resourceNamespace), 
                this.podListEndpoint = this.endpoint_.child(resourceName, endpoint.b.pod, resourceNamespace), 
                this.serviceListEndpoint = this.endpoint_.child(resourceName, endpoint.b.service, resourceNamespace), 
                this.replicaSetSubscription_ = this.replicaSet_.get(this.endpoint_.detail(), resourceName, resourceNamespace).subscribe(d => {
                    this.replicaSet = d, this.notifications_.pushErrors(d.errors), this.actionbar_.onInit.emit(new actionbar.b("Replica Set", d.objectMeta, d.typeMeta)), 
                    this.isInitialized = !0;
                });
            }
            ngOnDestroy() {
                this.replicaSetSubscription_.unsubscribe(), this.actionbar_.onDetailsLeave.emit();
            }
        }
        var RenderType_ReplicaSetDetailComponent = core["ɵcrt"]({
            encapsulation: 2,
            styles: [],
            data: {}
        });
        function View_ReplicaSetDetailComponent_1(_l) {
            return core["ɵvid"](0, [ (_l()(), core["ɵeld"](0, 0, null, null, 4, "div", [ [ "class", "kd-inline-property" ] ], null, null, null, null, null)), (_l()(), 
            core["ɵeld"](1, 0, null, null, 1, "span", [ [ "class", "kd-muted-light" ] ], null, null, null, null, null)), (_l()(), 
            core["ɵted"](-1, null, [ "Pods: " ])), (_l()(), core["ɵeld"](3, 0, null, null, 1, "span", [], null, null, null, null, null)), (_l()(), 
            core["ɵted"](4, null, [ "", " / ", "" ])) ], null, (function(_ck, _v) {
                var _co = _v.component;
                _ck(_v, 4, 0, _co.replicaSet.podInfo.running, _co.replicaSet.podInfo.desired);
            }));
        }
        function View_ReplicaSetDetailComponent_3(_l) {
            return core["ɵvid"](0, [ (_l()(), core["ɵeld"](0, 0, null, null, 6, "kd-property", [], null, null, null, property_component_ngfactory.b, property_component_ngfactory.a)), core["ɵdid"](1, 49152, null, 0, property_component.a, [], null, null), (_l()(), 
            core["ɵeld"](2, 0, null, 0, 1, "div", [ [ "key", "" ] ], null, null, null, null, null)), (_l()(), 
            core["ɵted"](-1, null, [ "Selector" ])), (_l()(), core["ɵeld"](4, 0, null, 1, 2, "div", [ [ "value", "" ] ], null, null, null, null, null)), (_l()(), 
            core["ɵeld"](5, 0, null, null, 1, "kd-chips", [], null, null, null, chips_component_ngfactory.b, chips_component_ngfactory.a)), core["ɵdid"](6, 114688, null, 0, chips_component.a, [ dialog.e ], {
                map: [ 0, "map" ]
            }, null) ], (function(_ck, _v) {
                _ck(_v, 6, 0, _v.component.replicaSet.selector.matchLabels);
            }), null);
        }
        function View_ReplicaSetDetailComponent_4(_l) {
            return core["ɵvid"](0, [ (_l()(), core["ɵeld"](0, 0, null, null, 6, "kd-property", [], null, null, null, property_component_ngfactory.b, property_component_ngfactory.a)), core["ɵdid"](1, 49152, null, 0, property_component.a, [], null, null), (_l()(), 
            core["ɵeld"](2, 0, null, 0, 1, "div", [ [ "key", "" ] ], null, null, null, null, null)), (_l()(), 
            core["ɵted"](-1, null, [ "Images" ])), (_l()(), core["ɵeld"](4, 0, null, 1, 2, "div", [ [ "value", "" ] ], null, null, null, null, null)), (_l()(), 
            core["ɵeld"](5, 0, null, null, 1, "kd-chips", [], null, null, null, chips_component_ngfactory.b, chips_component_ngfactory.a)), core["ɵdid"](6, 114688, null, 0, chips_component.a, [ dialog.e ], {
                map: [ 0, "map" ]
            }, null) ], (function(_ck, _v) {
                _ck(_v, 6, 0, _v.component.replicaSet.containerImages);
            }), null);
        }
        function View_ReplicaSetDetailComponent_5(_l) {
            return core["ɵvid"](0, [ (_l()(), core["ɵeld"](0, 0, null, null, 6, "kd-property", [], null, null, null, property_component_ngfactory.b, property_component_ngfactory.a)), core["ɵdid"](1, 49152, null, 0, property_component.a, [], null, null), (_l()(), 
            core["ɵeld"](2, 0, null, 0, 1, "div", [ [ "key", "" ] ], null, null, null, null, null)), (_l()(), 
            core["ɵted"](-1, null, [ "Init images" ])), (_l()(), core["ɵeld"](4, 0, null, 1, 2, "div", [ [ "value", "" ] ], null, null, null, null, null)), (_l()(), 
            core["ɵeld"](5, 0, null, null, 1, "kd-chips", [], null, null, null, chips_component_ngfactory.b, chips_component_ngfactory.a)), core["ɵdid"](6, 114688, null, 0, chips_component.a, [ dialog.e ], {
                map: [ 0, "map" ]
            }, null) ], (function(_ck, _v) {
                _ck(_v, 6, 0, _v.component.replicaSet.initContainerImages);
            }), null);
        }
        function View_ReplicaSetDetailComponent_2(_l) {
            return core["ɵvid"](0, [ (_l()(), core["ɵeld"](0, 0, null, null, 7, "div", [ [ "content", "" ], [ "fxLayout", "row wrap" ] ], null, null, null, null, null)), core["ɵdid"](1, 671744, null, 0, flex.d, [ core.ElementRef, esm2015_core.i, [ 2, flex.k ], esm2015_core.f ], {
                fxLayout: [ 0, "fxLayout" ]
            }, null), (_l()(), core["ɵand"](16777216, null, null, 1, null, View_ReplicaSetDetailComponent_3)), core["ɵdid"](3, 16384, null, 0, common.NgIf, [ core.ViewContainerRef, core.TemplateRef ], {
                ngIf: [ 0, "ngIf" ]
            }, null), (_l()(), core["ɵand"](16777216, null, null, 1, null, View_ReplicaSetDetailComponent_4)), core["ɵdid"](5, 16384, null, 0, common.NgIf, [ core.ViewContainerRef, core.TemplateRef ], {
                ngIf: [ 0, "ngIf" ]
            }, null), (_l()(), core["ɵand"](16777216, null, null, 1, null, View_ReplicaSetDetailComponent_5)), core["ɵdid"](7, 16384, null, 0, common.NgIf, [ core.ViewContainerRef, core.TemplateRef ], {
                ngIf: [ 0, "ngIf" ]
            }, null) ], (function(_ck, _v) {
                var _co = _v.component;
                _ck(_v, 1, 0, "row wrap"), _ck(_v, 3, 0, null == _co.replicaSet ? null : _co.replicaSet.selector), 
                _ck(_v, 5, 0, null == _co.replicaSet ? null : _co.replicaSet.containerImages), _ck(_v, 7, 0, null == _co.replicaSet ? null : _co.replicaSet.initContainerImages);
            }), null);
        }
        function View_ReplicaSetDetailComponent_0(_l) {
            return core["ɵvid"](0, [ (_l()(), core["ɵeld"](0, 0, null, null, 1, "kd-object-meta", [], null, null, null, objectmeta_component_ngfactory.b, objectmeta_component_ngfactory.a)), core["ɵdid"](1, 49152, null, 0, objectmeta_component.a, [], {
                initialized: [ 0, "initialized" ],
                objectMeta: [ 1, "objectMeta" ]
            }, null), (_l()(), core["ɵeld"](2, 0, null, null, 8, "kd-card", [], null, null, null, card_component_ngfactory.b, card_component_ngfactory.a)), core["ɵdid"](3, 49152, null, 0, card_component.a, [], {
                initialized: [ 0, "initialized" ]
            }, null), (_l()(), core["ɵeld"](4, 0, null, 0, 1, "div", [ [ "title", "" ] ], null, null, null, null, null)), (_l()(), 
            core["ɵted"](-1, null, [ "Resource information" ])), (_l()(), core["ɵeld"](6, 0, null, 1, 2, "div", [ [ "description", "" ] ], null, null, null, null, null)), (_l()(), 
            core["ɵand"](16777216, null, null, 1, null, View_ReplicaSetDetailComponent_1)), core["ɵdid"](8, 16384, null, 0, common.NgIf, [ core.ViewContainerRef, core.TemplateRef ], {
                ngIf: [ 0, "ngIf" ]
            }, null), (_l()(), core["ɵand"](16777216, null, 3, 1, null, View_ReplicaSetDetailComponent_2)), core["ɵdid"](10, 16384, null, 0, common.NgIf, [ core.ViewContainerRef, core.TemplateRef ], {
                ngIf: [ 0, "ngIf" ]
            }, null), (_l()(), core["ɵeld"](11, 0, null, null, 1, "kd-pod-status-card", [], null, null, null, podstatus_component_ngfactory.b, podstatus_component_ngfactory.a)), core["ɵdid"](12, 49152, null, 0, podstatus_component.a, [], {
                podInfo: [ 0, "podInfo" ],
                initialized: [ 1, "initialized" ]
            }, null), (_l()(), core["ɵeld"](13, 0, null, null, 1, "kd-pod-list", [], null, null, null, pod_component_ngfactory.b, pod_component_ngfactory.a)), core["ɵdid"](14, 245760, null, 0, pod_component.a, [ resource.a, core.ComponentFactoryResolver, notifications.b, core.ChangeDetectorRef ], {
                endpoint: [ 0, "endpoint" ]
            }, null), (_l()(), core["ɵeld"](15, 0, null, null, 1, "kd-service-list", [], null, null, null, service_component_ngfactory.b, service_component_ngfactory.a)), core["ɵdid"](16, 245760, null, 0, service_component.a, [ resource.a, notifications.b, core.ChangeDetectorRef ], {
                endpoint: [ 0, "endpoint" ]
            }, null), (_l()(), core["ɵeld"](17, 0, null, null, 1, "kd-event-list", [], null, null, null, event_component_ngfactory.b, event_component_ngfactory.a)), core["ɵdid"](18, 245760, null, 0, event_component.a, [ resource.a, notifications.b, core.ChangeDetectorRef ], {
                endpoint: [ 0, "endpoint" ]
            }, null) ], (function(_ck, _v) {
                var _co = _v.component;
                _ck(_v, 1, 0, _co.isInitialized, null == _co.replicaSet ? null : _co.replicaSet.objectMeta), 
                _ck(_v, 3, 0, _co.isInitialized), _ck(_v, 8, 0, null == _co.replicaSet ? null : _co.replicaSet.podInfo), 
                _ck(_v, 10, 0, _co.isInitialized), _ck(_v, 12, 0, null == _co.replicaSet ? null : _co.replicaSet.podInfo, _co.isInitialized), 
                _ck(_v, 14, 0, _co.podListEndpoint), _ck(_v, 16, 0, _co.serviceListEndpoint), _ck(_v, 18, 0, _co.eventListEndpoint);
            }), null);
        }
        function View_ReplicaSetDetailComponent_Host_0(_l) {
            return core["ɵvid"](0, [ (_l()(), core["ɵeld"](0, 0, null, null, 1, "kd-replica-set-detail", [], null, null, null, View_ReplicaSetDetailComponent_0, RenderType_ReplicaSetDetailComponent)), core["ɵdid"](1, 245760, null, 0, component_ReplicaSetDetailComponent, [ resource.a, actionbar.a, router.ActivatedRoute, notifications.b ], null, null) ], (function(_ck, _v) {
                _ck(_v, 1, 0);
            }), null);
        }
        var ReplicaSetDetailComponentNgFactory = core["ɵccf"]("kd-replica-set-detail", component_ReplicaSetDetailComponent, View_ReplicaSetDetailComponent_Host_0, {}, {}, []), logsscaledefault_component_ngfactory = __webpack_require__("RUiK"), fesm2015_forms = __webpack_require__("s7LF"), observers = __webpack_require__("9b/N"), fesm2015_core = __webpack_require__("UhP/"), overlay = __webpack_require__("1O3W"), bidi = __webpack_require__("9gLZ"), tooltip = __webpack_require__("ZFy/"), sort = __webpack_require__("LUZP"), fesm2015_select = __webpack_require__("ZTz/"), paginator = __webpack_require__("5QHs"), menu = __webpack_require__("rJgo"), ngx_filter_pipe = __webpack_require__("4muW"), a11y = __webpack_require__("YEUz"), platform = __webpack_require__("SCoL"), fesm2015_button = __webpack_require__("Dxy4"), card = __webpack_require__("PDjf"), fesm2015_checkbox = __webpack_require__("pMoy"), divider = __webpack_require__("BSbQ"), grid_list = __webpack_require__("40+f"), form_field = __webpack_require__("Q2Ze"), icon = __webpack_require__("Tj54"), text_field = __webpack_require__("8sFK"), input = __webpack_require__("e6WT"), progress_spinner = __webpack_require__("pu8Q"), progress_bar = __webpack_require__("BTe0"), fesm2015_radio = __webpack_require__("zQhy"), scrolling = __webpack_require__("7KAL"), sidenav = __webpack_require__("q7Ft"), toolbar = __webpack_require__("l0rg"), portal = __webpack_require__("1z/I"), slider = __webpack_require__("mPVK"), slide_toggle = __webpack_require__("jMqV"), chips = __webpack_require__("f44v"), table = __webpack_require__("GXRp"), fesm2015_table = __webpack_require__("OaSA"), tabs = __webpack_require__("M9ds"), button_toggle = __webpack_require__("Ynp+"), snack_bar = __webpack_require__("zHaW"), extended = __webpack_require__("ura0"), grid = __webpack_require__("Nhcz"), flex_layout = __webpack_require__("u9T3"), src_module = __webpack_require__("o6Sk"), pipes_module = __webpack_require__("I7rD"), shared_module = __webpack_require__("MnlZ"), components_module = __webpack_require__("PXUV");
        const ɵ0 = {
            breadcrumb: "Replica Sets",
            parent: __webpack_require__("6XRW").a
        }, ɵ1 = {
            breadcrumb: "{{ resourceName }}",
            parent: {
                path: "",
                component: ReplicaSetListComponent,
                data: ɵ0
            }
        };
        class ReplicaSetRoutingModule {}
        var keycodes = __webpack_require__("Ht+U"), logsscaledefault_component = __webpack_require__("VL/P");
        __webpack_require__.d(__webpack_exports__, "ReplicaSetModuleNgFactory", (function() {
            return ReplicaSetModuleNgFactory;
        }));
        var ReplicaSetModuleNgFactory = core["ɵcmf"](ReplicaSetModule, [], (function(_l) {
            return core["ɵmod"]([ core["ɵmpd"](512, core.ComponentFactoryResolver, core["ɵCodegenComponentFactoryResolver"], [ [ 8, [ index_ngfactory.a, dialog_index_ngfactory.a, snack_bar_index_ngfactory.a, snack_bar_index_ngfactory.b, router_ngfactory.a, dialog_ngfactory.a, component_ngfactory.a, menu_component_ngfactory.a, changedialog_dialog_ngfactory.a, ReplicaSetListComponentNgFactory, ReplicaSetDetailComponentNgFactory, logsscaledefault_component_ngfactory.a ] ], [ 3, core.ComponentFactoryResolver ], core.NgModuleRef ]), core["ɵmpd"](4608, common.NgLocalization, common.NgLocaleLocalization, [ core.LOCALE_ID ]), core["ɵmpd"](4608, fesm2015_forms["ɵangular_packages_forms_forms_n"], fesm2015_forms["ɵangular_packages_forms_forms_n"], []), core["ɵmpd"](4608, fesm2015_forms.FormBuilder, fesm2015_forms.FormBuilder, []), core["ɵmpd"](4608, observers.c, observers.c, []), core["ɵmpd"](4608, fesm2015_core.d, fesm2015_core.d, []), core["ɵmpd"](4608, overlay.c, overlay.c, [ overlay.i, overlay.e, core.ComponentFactoryResolver, overlay.h, overlay.f, core.Injector, core.NgZone, common.DOCUMENT, bidi.b, [ 2, common.Location ] ]), core["ɵmpd"](5120, overlay.j, overlay.k, [ overlay.c ]), core["ɵmpd"](5120, tooltip.b, tooltip.c, [ overlay.c ]), core["ɵmpd"](5120, dialog.c, dialog.d, [ overlay.c ]), core["ɵmpd"](135680, dialog.e, dialog.e, [ overlay.c, core.Injector, [ 2, common.Location ], [ 2, dialog.b ], dialog.c, [ 3, dialog.e ], overlay.e ]), core["ɵmpd"](5120, sort.d, sort.a, [ [ 3, sort.d ] ]), core["ɵmpd"](5120, fesm2015_select.a, fesm2015_select.b, [ overlay.c ]), core["ɵmpd"](5120, paginator.c, paginator.a, [ [ 3, paginator.c ] ]), core["ɵmpd"](5120, menu.c, menu.j, [ overlay.c ]), core["ɵmpd"](5120, core.APP_BOOTSTRAP_LISTENER, (function(p0_0, p0_1) {
                return [ esm2015_core.j(p0_0, p0_1) ];
            }), [ common.DOCUMENT, core.PLATFORM_ID ]), core["ɵmpd"](4608, ngx_filter_pipe.a, ngx_filter_pipe.a, []), core["ɵmpd"](1073742336, common.CommonModule, common.CommonModule, []), core["ɵmpd"](1073742336, fesm2015_forms["ɵangular_packages_forms_forms_d"], fesm2015_forms["ɵangular_packages_forms_forms_d"], []), core["ɵmpd"](1073742336, fesm2015_forms.FormsModule, fesm2015_forms.FormsModule, []), core["ɵmpd"](1073742336, fesm2015_forms.ReactiveFormsModule, fesm2015_forms.ReactiveFormsModule, []), core["ɵmpd"](1073742336, bidi.a, bidi.a, []), core["ɵmpd"](1073742336, fesm2015_core.l, fesm2015_core.l, [ a11y.h, [ 2, fesm2015_core.e ] ]), core["ɵmpd"](1073742336, platform.b, platform.b, []), core["ɵmpd"](1073742336, fesm2015_core.u, fesm2015_core.u, []), core["ɵmpd"](1073742336, fesm2015_button.c, fesm2015_button.c, []), core["ɵmpd"](1073742336, card.e, card.e, []), core["ɵmpd"](1073742336, observers.d, observers.d, []), core["ɵmpd"](1073742336, fesm2015_checkbox.e, fesm2015_checkbox.e, []), core["ɵmpd"](1073742336, fesm2015_checkbox.d, fesm2015_checkbox.d, []), core["ɵmpd"](1073742336, divider.b, divider.b, []), core["ɵmpd"](1073742336, fesm2015_core.m, fesm2015_core.m, []), core["ɵmpd"](1073742336, grid_list.a, grid_list.a, []), core["ɵmpd"](1073742336, form_field.e, form_field.e, []), core["ɵmpd"](1073742336, icon.c, icon.c, []), core["ɵmpd"](1073742336, text_field.c, text_field.c, []), core["ɵmpd"](1073742336, input.b, input.b, []), core["ɵmpd"](1073742336, progress_spinner.c, progress_spinner.c, []), core["ɵmpd"](1073742336, progress_bar.c, progress_bar.c, []), core["ɵmpd"](1073742336, fesm2015_radio.d, fesm2015_radio.d, []), core["ɵmpd"](1073742336, scrolling.c, scrolling.c, []), core["ɵmpd"](1073742336, sidenav.h, sidenav.h, []), core["ɵmpd"](1073742336, toolbar.b, toolbar.b, []), core["ɵmpd"](1073742336, a11y.a, a11y.a, [ a11y.h ]), core["ɵmpd"](1073742336, portal.g, portal.g, []), core["ɵmpd"](1073742336, overlay.g, overlay.g, []), core["ɵmpd"](1073742336, tooltip.e, tooltip.e, []), core["ɵmpd"](1073742336, slider.b, slider.b, []), core["ɵmpd"](1073742336, dialog.k, dialog.k, []), core["ɵmpd"](1073742336, slide_toggle.d, slide_toggle.d, []), core["ɵmpd"](1073742336, slide_toggle.c, slide_toggle.c, []), core["ɵmpd"](1073742336, chips.d, chips.d, []), core["ɵmpd"](1073742336, table.p, table.p, []), core["ɵmpd"](1073742336, fesm2015_table.m, fesm2015_table.m, []), core["ɵmpd"](1073742336, sort.e, sort.e, []), core["ɵmpd"](1073742336, fesm2015_core.s, fesm2015_core.s, []), core["ɵmpd"](1073742336, fesm2015_core.q, fesm2015_core.q, []), core["ɵmpd"](1073742336, fesm2015_select.d, fesm2015_select.d, []), core["ɵmpd"](1073742336, paginator.d, paginator.d, []), core["ɵmpd"](1073742336, tabs.k, tabs.k, []), core["ɵmpd"](1073742336, menu.i, menu.i, []), core["ɵmpd"](1073742336, menu.f, menu.f, []), core["ɵmpd"](1073742336, button_toggle.e, button_toggle.e, []), core["ɵmpd"](1073742336, snack_bar.e, snack_bar.e, []), core["ɵmpd"](1073742336, esm2015_core.c, esm2015_core.c, []), core["ɵmpd"](1073742336, flex.h, flex.h, []), core["ɵmpd"](1073742336, extended.b, extended.b, []), core["ɵmpd"](1073742336, grid.a, grid.a, []), core["ɵmpd"](1073742336, flex_layout.a, flex_layout.a, [ [ 2, esm2015_core.g ], core.PLATFORM_ID ]), core["ɵmpd"](1073742336, router.RouterModule, router.RouterModule, [ [ 2, router["ɵangular_packages_router_router_a"] ], [ 2, router.Router ] ]), core["ɵmpd"](1073742336, src_module.a, src_module.a, []), core["ɵmpd"](1073742336, ngx_filter_pipe.b, ngx_filter_pipe.b, []), core["ɵmpd"](1073742336, pipes_module.a, pipes_module.a, []), core["ɵmpd"](1073742336, shared_module.a, shared_module.a, []), core["ɵmpd"](1073742336, components_module.a, components_module.a, []), core["ɵmpd"](1073742336, ReplicaSetRoutingModule, ReplicaSetRoutingModule, []), core["ɵmpd"](1073742336, ReplicaSetModule, ReplicaSetModule, []), core["ɵmpd"](256, chips.a, {
                separatorKeyCodes: [ keycodes.f ]
            }, []), core["ɵmpd"](256, tooltip.a, shared_module.b, []), core["ɵmpd"](1024, router.ROUTES, (function() {
                return [ [ {
                    path: "",
                    component: ReplicaSetListComponent,
                    data: ɵ0
                }, {
                    path: ":resourceNamespace/:resourceName",
                    component: component_ReplicaSetDetailComponent,
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