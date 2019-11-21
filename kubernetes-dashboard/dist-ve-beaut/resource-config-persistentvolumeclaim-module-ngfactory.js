(window.webpackJsonp = window.webpackJsonp || []).push([ [ 36 ], {
    DMte: function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        var core = __webpack_require__("8Y7J");
        class PersistentVolumeClaimModule {}
        var index_ngfactory = __webpack_require__("ntJQ"), dialog_index_ngfactory = __webpack_require__("9cE2"), snack_bar_index_ngfactory = __webpack_require__("007U"), router_ngfactory = __webpack_require__("pMnS"), dialog_ngfactory = __webpack_require__("wyY1"), component_ngfactory = __webpack_require__("HrBQ"), menu_component_ngfactory = __webpack_require__("Shg9"), changedialog_dialog_ngfactory = __webpack_require__("rO67"), persistentvolumeclaim_component_ngfactory = __webpack_require__("syXy"), component = __webpack_require__("H082"), resource = __webpack_require__("KyHI"), notifications = __webpack_require__("PXtb");
        class PersistentVolumeClaimListComponent {}
        var RenderType_PersistentVolumeClaimListComponent = core["ɵcrt"]({
            encapsulation: 2,
            styles: [],
            data: {}
        });
        function View_PersistentVolumeClaimListComponent_0(_l) {
            return core["ɵvid"](0, [ (_l()(), core["ɵeld"](0, 0, null, null, 1, "kd-persistent-volume-claim-list", [], null, null, null, persistentvolumeclaim_component_ngfactory.b, persistentvolumeclaim_component_ngfactory.a)), core["ɵdid"](1, 245760, null, 0, component.a, [ resource.a, notifications.b, core.ChangeDetectorRef ], null, null) ], (function(_ck, _v) {
                _ck(_v, 1, 0);
            }), null);
        }
        function View_PersistentVolumeClaimListComponent_Host_0(_l) {
            return core["ɵvid"](0, [ (_l()(), core["ɵeld"](0, 0, null, null, 1, "kd-persistent-volume-claim-list-state", [], null, null, null, View_PersistentVolumeClaimListComponent_0, RenderType_PersistentVolumeClaimListComponent)), core["ɵdid"](1, 49152, null, 0, PersistentVolumeClaimListComponent, [], null, null) ], null, null);
        }
        var PersistentVolumeClaimListComponentNgFactory = core["ɵccf"]("kd-persistent-volume-claim-list-state", PersistentVolumeClaimListComponent, View_PersistentVolumeClaimListComponent_Host_0, {}, {}, []), property_component_ngfactory = __webpack_require__("ZO99"), property_component = __webpack_require__("Rx8Q"), flex = __webpack_require__("VDRc"), esm2015_core = __webpack_require__("/q54"), chips_component_ngfactory = __webpack_require__("OEkR"), chips_component = __webpack_require__("svQk"), dialog = __webpack_require__("iELJ"), common = __webpack_require__("SVse"), objectmeta_component_ngfactory = __webpack_require__("5J1W"), objectmeta_component = __webpack_require__("YS1y"), card_component_ngfactory = __webpack_require__("bLTg"), card_component = __webpack_require__("TN1b"), actionbar = __webpack_require__("SRaF"), endpoint = __webpack_require__("m/E6");
        class component_PersistentVolumeClaimDetailComponent {
            constructor(persistentVolumeClaim_, actionbar_, activatedRoute_, notifications_) {
                this.persistentVolumeClaim_ = persistentVolumeClaim_, this.actionbar_ = actionbar_, 
                this.activatedRoute_ = activatedRoute_, this.notifications_ = notifications_, this.endpoint_ = endpoint.a.resource(endpoint.b.persistentVolumeClaim, !0), 
                this.isInitialized = !1;
            }
            ngOnInit() {
                const resourceName = this.activatedRoute_.snapshot.params.resourceName, resourceNamespace = this.activatedRoute_.snapshot.params.resourceNamespace;
                this.persistentVolumeClaimSubscription_ = this.persistentVolumeClaim_.get(this.endpoint_.detail(), resourceName, resourceNamespace).subscribe(d => {
                    this.persistentVolumeClaim = d, this.notifications_.pushErrors(d.errors), this.actionbar_.onInit.emit(new actionbar.b("Persistent Volume Claim", d.objectMeta, d.typeMeta)), 
                    this.isInitialized = !0;
                });
            }
            ngOnDestroy() {
                this.persistentVolumeClaimSubscription_.unsubscribe(), this.actionbar_.onDetailsLeave.emit();
            }
        }
        var router = __webpack_require__("iInd"), RenderType_PersistentVolumeClaimDetailComponent = core["ɵcrt"]({
            encapsulation: 2,
            styles: [],
            data: {}
        });
        function View_PersistentVolumeClaimDetailComponent_2(_l) {
            return core["ɵvid"](0, [ (_l()(), core["ɵeld"](0, 0, null, null, 5, "kd-property", [], null, null, null, property_component_ngfactory.b, property_component_ngfactory.a)), core["ɵdid"](1, 49152, null, 0, property_component.a, [], null, null), (_l()(), 
            core["ɵeld"](2, 0, null, 0, 1, "div", [ [ "key", "" ] ], null, null, null, null, null)), (_l()(), 
            core["ɵted"](-1, null, [ "Status" ])), (_l()(), core["ɵeld"](4, 0, null, 1, 1, "div", [ [ "value", "" ] ], null, null, null, null, null)), (_l()(), 
            core["ɵted"](5, null, [ "", "" ])) ], null, (function(_ck, _v) {
                _ck(_v, 5, 0, _v.component.persistentVolumeClaim.status);
            }));
        }
        function View_PersistentVolumeClaimDetailComponent_3(_l) {
            return core["ɵvid"](0, [ (_l()(), core["ɵeld"](0, 0, null, null, 5, "kd-property", [], null, null, null, property_component_ngfactory.b, property_component_ngfactory.a)), core["ɵdid"](1, 49152, null, 0, property_component.a, [], null, null), (_l()(), 
            core["ɵeld"](2, 0, null, 0, 1, "div", [ [ "key", "" ] ], null, null, null, null, null)), (_l()(), 
            core["ɵted"](-1, null, [ "Storage Class" ])), (_l()(), core["ɵeld"](4, 0, null, 1, 1, "div", [ [ "value", "" ] ], null, null, null, null, null)), (_l()(), 
            core["ɵted"](5, null, [ "", "" ])) ], null, (function(_ck, _v) {
                _ck(_v, 5, 0, _v.component.persistentVolumeClaim.storageClass);
            }));
        }
        function View_PersistentVolumeClaimDetailComponent_4(_l) {
            return core["ɵvid"](0, [ (_l()(), core["ɵeld"](0, 0, null, null, 7, "kd-property", [ [ "fxFlex", "100" ] ], null, null, null, property_component_ngfactory.b, property_component_ngfactory.a)), core["ɵdid"](1, 671744, null, 0, flex.b, [ core.ElementRef, esm2015_core.i, esm2015_core.e, flex.i, esm2015_core.f ], {
                fxFlex: [ 0, "fxFlex" ]
            }, null), core["ɵdid"](2, 49152, null, 0, property_component.a, [], null, null), (_l()(), 
            core["ɵeld"](3, 0, null, 0, 1, "div", [ [ "key", "" ] ], null, null, null, null, null)), (_l()(), 
            core["ɵted"](-1, null, [ "Capacity" ])), (_l()(), core["ɵeld"](5, 0, null, 1, 2, "div", [ [ "value", "" ] ], null, null, null, null, null)), (_l()(), 
            core["ɵeld"](6, 0, null, null, 1, "kd-chips", [], null, null, null, chips_component_ngfactory.b, chips_component_ngfactory.a)), core["ɵdid"](7, 114688, null, 0, chips_component.a, [ dialog.e ], {
                map: [ 0, "map" ]
            }, null) ], (function(_ck, _v) {
                var _co = _v.component;
                _ck(_v, 1, 0, "100"), _ck(_v, 7, 0, _co.persistentVolumeClaim.capacity);
            }), null);
        }
        function View_PersistentVolumeClaimDetailComponent_5(_l) {
            return core["ɵvid"](0, [ (_l()(), core["ɵeld"](0, 0, null, null, 7, "kd-property", [ [ "fxFlex", "100" ] ], null, null, null, property_component_ngfactory.b, property_component_ngfactory.a)), core["ɵdid"](1, 671744, null, 0, flex.b, [ core.ElementRef, esm2015_core.i, esm2015_core.e, flex.i, esm2015_core.f ], {
                fxFlex: [ 0, "fxFlex" ]
            }, null), core["ɵdid"](2, 49152, null, 0, property_component.a, [], null, null), (_l()(), 
            core["ɵeld"](3, 0, null, 0, 1, "div", [ [ "key", "" ] ], null, null, null, null, null)), (_l()(), 
            core["ɵted"](-1, null, [ "Access Modes" ])), (_l()(), core["ɵeld"](5, 0, null, 1, 2, "div", [ [ "value", "" ] ], null, null, null, null, null)), (_l()(), 
            core["ɵeld"](6, 0, null, null, 1, "kd-chips", [], null, null, null, chips_component_ngfactory.b, chips_component_ngfactory.a)), core["ɵdid"](7, 114688, null, 0, chips_component.a, [ dialog.e ], {
                map: [ 0, "map" ]
            }, null) ], (function(_ck, _v) {
                var _co = _v.component;
                _ck(_v, 1, 0, "100"), _ck(_v, 7, 0, _co.persistentVolumeClaim.accessModes);
            }), null);
        }
        function View_PersistentVolumeClaimDetailComponent_1(_l) {
            return core["ɵvid"](0, [ (_l()(), core["ɵeld"](0, 0, null, null, 9, "div", [ [ "content", "" ], [ "fxLayout", "row wrap" ] ], null, null, null, null, null)), core["ɵdid"](1, 671744, null, 0, flex.d, [ core.ElementRef, esm2015_core.i, [ 2, flex.k ], esm2015_core.f ], {
                fxLayout: [ 0, "fxLayout" ]
            }, null), (_l()(), core["ɵand"](16777216, null, null, 1, null, View_PersistentVolumeClaimDetailComponent_2)), core["ɵdid"](3, 16384, null, 0, common.NgIf, [ core.ViewContainerRef, core.TemplateRef ], {
                ngIf: [ 0, "ngIf" ]
            }, null), (_l()(), core["ɵand"](16777216, null, null, 1, null, View_PersistentVolumeClaimDetailComponent_3)), core["ɵdid"](5, 16384, null, 0, common.NgIf, [ core.ViewContainerRef, core.TemplateRef ], {
                ngIf: [ 0, "ngIf" ]
            }, null), (_l()(), core["ɵand"](16777216, null, null, 1, null, View_PersistentVolumeClaimDetailComponent_4)), core["ɵdid"](7, 16384, null, 0, common.NgIf, [ core.ViewContainerRef, core.TemplateRef ], {
                ngIf: [ 0, "ngIf" ]
            }, null), (_l()(), core["ɵand"](16777216, null, null, 1, null, View_PersistentVolumeClaimDetailComponent_5)), core["ɵdid"](9, 16384, null, 0, common.NgIf, [ core.ViewContainerRef, core.TemplateRef ], {
                ngIf: [ 0, "ngIf" ]
            }, null) ], (function(_ck, _v) {
                var _co = _v.component;
                _ck(_v, 1, 0, "row wrap"), _ck(_v, 3, 0, null == _co.persistentVolumeClaim ? null : _co.persistentVolumeClaim.status), 
                _ck(_v, 5, 0, null == _co.persistentVolumeClaim ? null : _co.persistentVolumeClaim.storageClass), 
                _ck(_v, 7, 0, null == _co.persistentVolumeClaim ? null : _co.persistentVolumeClaim.capacity), 
                _ck(_v, 9, 0, null == _co.persistentVolumeClaim ? null : _co.persistentVolumeClaim.accessModes);
            }), null);
        }
        function View_PersistentVolumeClaimDetailComponent_0(_l) {
            return core["ɵvid"](0, [ (_l()(), core["ɵeld"](0, 0, null, null, 1, "kd-object-meta", [], null, null, null, objectmeta_component_ngfactory.b, objectmeta_component_ngfactory.a)), core["ɵdid"](1, 49152, null, 0, objectmeta_component.a, [], {
                initialized: [ 0, "initialized" ],
                objectMeta: [ 1, "objectMeta" ]
            }, null), (_l()(), core["ɵeld"](2, 0, null, null, 5, "kd-card", [], null, null, null, card_component_ngfactory.b, card_component_ngfactory.a)), core["ɵdid"](3, 49152, null, 0, card_component.a, [], {
                initialized: [ 0, "initialized" ]
            }, null), (_l()(), core["ɵeld"](4, 0, null, 0, 1, "div", [ [ "title", "" ] ], null, null, null, null, null)), (_l()(), 
            core["ɵted"](-1, null, [ "Resource information" ])), (_l()(), core["ɵand"](16777216, null, 3, 1, null, View_PersistentVolumeClaimDetailComponent_1)), core["ɵdid"](7, 16384, null, 0, common.NgIf, [ core.ViewContainerRef, core.TemplateRef ], {
                ngIf: [ 0, "ngIf" ]
            }, null) ], (function(_ck, _v) {
                var _co = _v.component;
                _ck(_v, 1, 0, _co.isInitialized, null == _co.persistentVolumeClaim ? null : _co.persistentVolumeClaim.objectMeta), 
                _ck(_v, 3, 0, _co.isInitialized), _ck(_v, 7, 0, _co.isInitialized);
            }), null);
        }
        function View_PersistentVolumeClaimDetailComponent_Host_0(_l) {
            return core["ɵvid"](0, [ (_l()(), core["ɵeld"](0, 0, null, null, 1, "kd-persistent-volume-claim-detail", [], null, null, null, View_PersistentVolumeClaimDetailComponent_0, RenderType_PersistentVolumeClaimDetailComponent)), core["ɵdid"](1, 245760, null, 0, component_PersistentVolumeClaimDetailComponent, [ resource.a, actionbar.a, router.ActivatedRoute, notifications.b ], null, null) ], (function(_ck, _v) {
                _ck(_v, 1, 0);
            }), null);
        }
        var PersistentVolumeClaimDetailComponentNgFactory = core["ɵccf"]("kd-persistent-volume-claim-detail", component_PersistentVolumeClaimDetailComponent, View_PersistentVolumeClaimDetailComponent_Host_0, {}, {}, []), default_component_ngfactory = __webpack_require__("qnFn"), fesm2015_forms = __webpack_require__("s7LF"), observers = __webpack_require__("9b/N"), fesm2015_core = __webpack_require__("UhP/"), overlay = __webpack_require__("1O3W"), bidi = __webpack_require__("9gLZ"), tooltip = __webpack_require__("ZFy/"), sort = __webpack_require__("LUZP"), fesm2015_select = __webpack_require__("ZTz/"), paginator = __webpack_require__("5QHs"), menu = __webpack_require__("rJgo"), ngx_filter_pipe = __webpack_require__("4muW"), a11y = __webpack_require__("YEUz"), platform = __webpack_require__("SCoL"), fesm2015_button = __webpack_require__("Dxy4"), card = __webpack_require__("PDjf"), fesm2015_checkbox = __webpack_require__("pMoy"), divider = __webpack_require__("BSbQ"), grid_list = __webpack_require__("40+f"), form_field = __webpack_require__("Q2Ze"), icon = __webpack_require__("Tj54"), text_field = __webpack_require__("8sFK"), input = __webpack_require__("e6WT"), progress_spinner = __webpack_require__("pu8Q"), progress_bar = __webpack_require__("BTe0"), fesm2015_radio = __webpack_require__("zQhy"), scrolling = __webpack_require__("7KAL"), sidenav = __webpack_require__("q7Ft"), toolbar = __webpack_require__("l0rg"), portal = __webpack_require__("1z/I"), slider = __webpack_require__("mPVK"), slide_toggle = __webpack_require__("jMqV"), chips = __webpack_require__("f44v"), table = __webpack_require__("GXRp"), fesm2015_table = __webpack_require__("OaSA"), tabs = __webpack_require__("M9ds"), button_toggle = __webpack_require__("Ynp+"), snack_bar = __webpack_require__("zHaW"), extended = __webpack_require__("ura0"), grid = __webpack_require__("Nhcz"), flex_layout = __webpack_require__("u9T3"), src_module = __webpack_require__("o6Sk"), pipes_module = __webpack_require__("I7rD"), shared_module = __webpack_require__("MnlZ"), components_module = __webpack_require__("PXUV");
        const ɵ0 = {
            breadcrumb: "Persistent Volume Claims",
            parent: __webpack_require__("g5tn").a
        }, ɵ1 = {
            breadcrumb: "{{ resourceName }}",
            parent: {
                path: "",
                component: PersistentVolumeClaimListComponent,
                data: ɵ0
            }
        };
        class PersistentVolumeClaimRoutingModule {}
        var keycodes = __webpack_require__("Ht+U"), default_component = __webpack_require__("zWhM");
        __webpack_require__.d(__webpack_exports__, "PersistentVolumeClaimModuleNgFactory", (function() {
            return PersistentVolumeClaimModuleNgFactory;
        }));
        var PersistentVolumeClaimModuleNgFactory = core["ɵcmf"](PersistentVolumeClaimModule, [], (function(_l) {
            return core["ɵmod"]([ core["ɵmpd"](512, core.ComponentFactoryResolver, core["ɵCodegenComponentFactoryResolver"], [ [ 8, [ index_ngfactory.a, dialog_index_ngfactory.a, snack_bar_index_ngfactory.a, snack_bar_index_ngfactory.b, router_ngfactory.a, dialog_ngfactory.a, component_ngfactory.a, menu_component_ngfactory.a, changedialog_dialog_ngfactory.a, PersistentVolumeClaimListComponentNgFactory, PersistentVolumeClaimDetailComponentNgFactory, default_component_ngfactory.a ] ], [ 3, core.ComponentFactoryResolver ], core.NgModuleRef ]), core["ɵmpd"](4608, common.NgLocalization, common.NgLocaleLocalization, [ core.LOCALE_ID ]), core["ɵmpd"](4608, fesm2015_forms["ɵangular_packages_forms_forms_n"], fesm2015_forms["ɵangular_packages_forms_forms_n"], []), core["ɵmpd"](4608, fesm2015_forms.FormBuilder, fesm2015_forms.FormBuilder, []), core["ɵmpd"](4608, observers.c, observers.c, []), core["ɵmpd"](4608, fesm2015_core.d, fesm2015_core.d, []), core["ɵmpd"](4608, overlay.c, overlay.c, [ overlay.i, overlay.e, core.ComponentFactoryResolver, overlay.h, overlay.f, core.Injector, core.NgZone, common.DOCUMENT, bidi.b, [ 2, common.Location ] ]), core["ɵmpd"](5120, overlay.j, overlay.k, [ overlay.c ]), core["ɵmpd"](5120, tooltip.b, tooltip.c, [ overlay.c ]), core["ɵmpd"](5120, dialog.c, dialog.d, [ overlay.c ]), core["ɵmpd"](135680, dialog.e, dialog.e, [ overlay.c, core.Injector, [ 2, common.Location ], [ 2, dialog.b ], dialog.c, [ 3, dialog.e ], overlay.e ]), core["ɵmpd"](5120, sort.d, sort.a, [ [ 3, sort.d ] ]), core["ɵmpd"](5120, fesm2015_select.a, fesm2015_select.b, [ overlay.c ]), core["ɵmpd"](5120, paginator.c, paginator.a, [ [ 3, paginator.c ] ]), core["ɵmpd"](5120, menu.c, menu.j, [ overlay.c ]), core["ɵmpd"](5120, core.APP_BOOTSTRAP_LISTENER, (function(p0_0, p0_1) {
                return [ esm2015_core.j(p0_0, p0_1) ];
            }), [ common.DOCUMENT, core.PLATFORM_ID ]), core["ɵmpd"](4608, ngx_filter_pipe.a, ngx_filter_pipe.a, []), core["ɵmpd"](1073742336, common.CommonModule, common.CommonModule, []), core["ɵmpd"](1073742336, fesm2015_forms["ɵangular_packages_forms_forms_d"], fesm2015_forms["ɵangular_packages_forms_forms_d"], []), core["ɵmpd"](1073742336, fesm2015_forms.FormsModule, fesm2015_forms.FormsModule, []), core["ɵmpd"](1073742336, fesm2015_forms.ReactiveFormsModule, fesm2015_forms.ReactiveFormsModule, []), core["ɵmpd"](1073742336, bidi.a, bidi.a, []), core["ɵmpd"](1073742336, fesm2015_core.l, fesm2015_core.l, [ a11y.h, [ 2, fesm2015_core.e ] ]), core["ɵmpd"](1073742336, platform.b, platform.b, []), core["ɵmpd"](1073742336, fesm2015_core.u, fesm2015_core.u, []), core["ɵmpd"](1073742336, fesm2015_button.c, fesm2015_button.c, []), core["ɵmpd"](1073742336, card.e, card.e, []), core["ɵmpd"](1073742336, observers.d, observers.d, []), core["ɵmpd"](1073742336, fesm2015_checkbox.e, fesm2015_checkbox.e, []), core["ɵmpd"](1073742336, fesm2015_checkbox.d, fesm2015_checkbox.d, []), core["ɵmpd"](1073742336, divider.b, divider.b, []), core["ɵmpd"](1073742336, fesm2015_core.m, fesm2015_core.m, []), core["ɵmpd"](1073742336, grid_list.a, grid_list.a, []), core["ɵmpd"](1073742336, form_field.e, form_field.e, []), core["ɵmpd"](1073742336, icon.c, icon.c, []), core["ɵmpd"](1073742336, text_field.c, text_field.c, []), core["ɵmpd"](1073742336, input.b, input.b, []), core["ɵmpd"](1073742336, progress_spinner.c, progress_spinner.c, []), core["ɵmpd"](1073742336, progress_bar.c, progress_bar.c, []), core["ɵmpd"](1073742336, fesm2015_radio.d, fesm2015_radio.d, []), core["ɵmpd"](1073742336, scrolling.c, scrolling.c, []), core["ɵmpd"](1073742336, sidenav.h, sidenav.h, []), core["ɵmpd"](1073742336, toolbar.b, toolbar.b, []), core["ɵmpd"](1073742336, a11y.a, a11y.a, [ a11y.h ]), core["ɵmpd"](1073742336, portal.g, portal.g, []), core["ɵmpd"](1073742336, overlay.g, overlay.g, []), core["ɵmpd"](1073742336, tooltip.e, tooltip.e, []), core["ɵmpd"](1073742336, slider.b, slider.b, []), core["ɵmpd"](1073742336, dialog.k, dialog.k, []), core["ɵmpd"](1073742336, slide_toggle.d, slide_toggle.d, []), core["ɵmpd"](1073742336, slide_toggle.c, slide_toggle.c, []), core["ɵmpd"](1073742336, chips.d, chips.d, []), core["ɵmpd"](1073742336, table.p, table.p, []), core["ɵmpd"](1073742336, fesm2015_table.m, fesm2015_table.m, []), core["ɵmpd"](1073742336, sort.e, sort.e, []), core["ɵmpd"](1073742336, fesm2015_core.s, fesm2015_core.s, []), core["ɵmpd"](1073742336, fesm2015_core.q, fesm2015_core.q, []), core["ɵmpd"](1073742336, fesm2015_select.d, fesm2015_select.d, []), core["ɵmpd"](1073742336, paginator.d, paginator.d, []), core["ɵmpd"](1073742336, tabs.k, tabs.k, []), core["ɵmpd"](1073742336, menu.i, menu.i, []), core["ɵmpd"](1073742336, menu.f, menu.f, []), core["ɵmpd"](1073742336, button_toggle.e, button_toggle.e, []), core["ɵmpd"](1073742336, snack_bar.e, snack_bar.e, []), core["ɵmpd"](1073742336, esm2015_core.c, esm2015_core.c, []), core["ɵmpd"](1073742336, flex.h, flex.h, []), core["ɵmpd"](1073742336, extended.b, extended.b, []), core["ɵmpd"](1073742336, grid.a, grid.a, []), core["ɵmpd"](1073742336, flex_layout.a, flex_layout.a, [ [ 2, esm2015_core.g ], core.PLATFORM_ID ]), core["ɵmpd"](1073742336, router.RouterModule, router.RouterModule, [ [ 2, router["ɵangular_packages_router_router_a"] ], [ 2, router.Router ] ]), core["ɵmpd"](1073742336, src_module.a, src_module.a, []), core["ɵmpd"](1073742336, ngx_filter_pipe.b, ngx_filter_pipe.b, []), core["ɵmpd"](1073742336, pipes_module.a, pipes_module.a, []), core["ɵmpd"](1073742336, shared_module.a, shared_module.a, []), core["ɵmpd"](1073742336, components_module.a, components_module.a, []), core["ɵmpd"](1073742336, PersistentVolumeClaimRoutingModule, PersistentVolumeClaimRoutingModule, []), core["ɵmpd"](1073742336, PersistentVolumeClaimModule, PersistentVolumeClaimModule, []), core["ɵmpd"](256, chips.a, {
                separatorKeyCodes: [ keycodes.f ]
            }, []), core["ɵmpd"](256, tooltip.a, shared_module.b, []), core["ɵmpd"](1024, router.ROUTES, (function() {
                return [ [ {
                    path: "",
                    component: PersistentVolumeClaimListComponent,
                    data: ɵ0
                }, {
                    path: ":resourceNamespace/:resourceName",
                    component: component_PersistentVolumeClaimDetailComponent,
                    data: ɵ1
                }, {
                    path: "",
                    component: default_component.a,
                    outlet: "actionbar"
                } ] ];
            }), []) ]);
        }));
    }
} ]);
//# sourceMappingURL=resource-config-persistentvolumeclaim-module-ngfactory.js.map