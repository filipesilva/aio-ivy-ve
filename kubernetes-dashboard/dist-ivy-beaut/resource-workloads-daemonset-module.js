(window.webpackJsonp = window.webpackJsonp || []).push([ [ 25 ], {
    "9HDx": function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        var components_module = __webpack_require__("PXUV"), shared_module = __webpack_require__("MnlZ"), core = __webpack_require__("fXoL"), actionbar = __webpack_require__("SRaF"), flex = __webpack_require__("XiUz"), common = __webpack_require__("ofXK");
        __webpack_require__("R//s"), __webpack_require__("WWzS");
        var I18N_0, I18N_2, I18N_4, I18N_6, endpoint = __webpack_require__("m/E6"), resource = __webpack_require__("KyHI"), router = __webpack_require__("tyNb"), notifications = __webpack_require__("PXtb"), objectmeta_component = __webpack_require__("YS1y"), card_component = __webpack_require__("TN1b"), podstatus_component = __webpack_require__("TsCr"), pod_component = __webpack_require__("D5Vd"), service_component = __webpack_require__("0t1c"), event_component = __webpack_require__("MmPu"), property_component = __webpack_require__("Rx8Q"), chips_component = __webpack_require__("svQk");
        function DaemonSetDetailComponent_div_4_kd_property_1_Template(rf, ctx) {
            if (1 & rf && (core["ɵɵelementStart"](0, "kd-property", 9), core["ɵɵelementStart"](1, "div", 10), 
            core["ɵɵi18n"](2, I18N_2), core["ɵɵelementEnd"](), core["ɵɵelementStart"](3, "div", 11), 
            core["ɵɵelement"](4, "kd-chips", 12), core["ɵɵelementEnd"](), core["ɵɵelementEnd"]()), 
            2 & rf) {
                const ctx_r1244 = core["ɵɵnextContext"](2);
                core["ɵɵadvance"](4), core["ɵɵproperty"]("map", ctx_r1244.daemonSet.labelSelector.matchLabels);
            }
        }
        function DaemonSetDetailComponent_div_4_kd_property_2_Template(rf, ctx) {
            if (1 & rf && (core["ɵɵelementStart"](0, "kd-property"), core["ɵɵelementStart"](1, "div", 10), 
            core["ɵɵi18n"](2, I18N_4), core["ɵɵelementEnd"](), core["ɵɵelementStart"](3, "div", 11), 
            core["ɵɵelement"](4, "kd-chips", 12), core["ɵɵelementEnd"](), core["ɵɵelementEnd"]()), 
            2 & rf) {
                const ctx_r1245 = core["ɵɵnextContext"](2);
                core["ɵɵadvance"](4), core["ɵɵproperty"]("map", ctx_r1245.daemonSet.containerImages);
            }
        }
        function DaemonSetDetailComponent_div_4_kd_property_3_Template(rf, ctx) {
            if (1 & rf && (core["ɵɵelementStart"](0, "kd-property"), core["ɵɵelementStart"](1, "div", 10), 
            core["ɵɵi18n"](2, I18N_6), core["ɵɵelementEnd"](), core["ɵɵelementStart"](3, "div", 11), 
            core["ɵɵelement"](4, "kd-chips", 12), core["ɵɵelementEnd"](), core["ɵɵelementEnd"]()), 
            2 & rf) {
                const ctx_r1246 = core["ɵɵnextContext"](2);
                core["ɵɵadvance"](4), core["ɵɵproperty"]("map", ctx_r1246.daemonSet.initContainerImages);
            }
        }
        function DaemonSetDetailComponent_div_4_Template(rf, ctx) {
            if (1 & rf && (core["ɵɵelementStart"](0, "div", 6), core["ɵɵtemplate"](1, DaemonSetDetailComponent_div_4_kd_property_1_Template, 5, 1, "kd-property", 7), 
            core["ɵɵtemplate"](2, DaemonSetDetailComponent_div_4_kd_property_2_Template, 5, 1, "kd-property", 8), 
            core["ɵɵtemplate"](3, DaemonSetDetailComponent_div_4_kd_property_3_Template, 5, 1, "kd-property", 8), 
            core["ɵɵelementEnd"]()), 2 & rf) {
                const ctx_r1243 = core["ɵɵnextContext"]();
                core["ɵɵadvance"](1), core["ɵɵproperty"]("ngIf", null == ctx_r1243.daemonSet ? null : ctx_r1243.daemonSet.labelSelector), 
                core["ɵɵadvance"](1), core["ɵɵproperty"]("ngIf", null == ctx_r1243.daemonSet ? null : ctx_r1243.daemonSet.containerImages), 
                core["ɵɵadvance"](1), core["ɵɵproperty"]("ngIf", null == ctx_r1243.daemonSet ? null : ctx_r1243.daemonSet.initContainerImages);
            }
        }
        I18N_0 = $localize`Resource information`, I18N_2 = $localize`Selector`, I18N_4 = $localize`Images`, 
        I18N_6 = $localize`Init images`;
        let component_DaemonSetDetailComponent = (() => {
            class DaemonSetDetailComponent {
                constructor(daemonSet_, actionbar_, activatedRoute_, notifications_) {
                    this.daemonSet_ = daemonSet_, this.actionbar_ = actionbar_, this.activatedRoute_ = activatedRoute_, 
                    this.notifications_ = notifications_, this.endpoint_ = endpoint.a.resource(endpoint.b.daemonSet, !0), 
                    this.isInitialized = !1;
                }
                ngOnInit() {
                    const resourceName = this.activatedRoute_.snapshot.params.resourceName, resourceNamespace = this.activatedRoute_.snapshot.params.resourceNamespace;
                    this.eventListEndpoint = this.endpoint_.child(resourceName, endpoint.b.event, resourceNamespace), 
                    this.podListEndpoint = this.endpoint_.child(resourceName, endpoint.b.pod, resourceNamespace), 
                    this.serviceListEndpoint = this.endpoint_.child(resourceName, endpoint.b.service, resourceNamespace), 
                    this.daemonSetSubscription_ = this.daemonSet_.get(this.endpoint_.detail(), resourceName, resourceNamespace).subscribe(d => {
                        this.daemonSet = d, this.notifications_.pushErrors(d.errors), this.actionbar_.onInit.emit(new actionbar.b("Daemon Set", d.objectMeta, d.typeMeta)), 
                        this.isInitialized = !0;
                    });
                }
                ngOnDestroy() {
                    this.daemonSetSubscription_.unsubscribe(), this.actionbar_.onDetailsLeave.emit();
                }
            }
            return DaemonSetDetailComponent.ɵfac = function(t) {
                return new (t || DaemonSetDetailComponent)(core["ɵɵdirectiveInject"](resource.a), core["ɵɵdirectiveInject"](actionbar.a), core["ɵɵdirectiveInject"](router.ActivatedRoute), core["ɵɵdirectiveInject"](notifications.b));
            }, DaemonSetDetailComponent.ɵcmp = core["ɵɵdefineComponent"]({
                type: DaemonSetDetailComponent,
                selectors: [ [ "kd-daemon-set-detail" ] ],
                decls: 9,
                vars: 9,
                consts: [ [ 3, "initialized", "objectMeta" ], [ 3, "initialized" ], [ "title", "" ], [ "content", "", "fxLayout", "row wrap", 4, "ngIf" ], [ 3, "podInfo", "initialized" ], [ 3, "endpoint" ], [ "content", "", "fxLayout", "row wrap" ], [ "fxFlex", "100", 4, "ngIf" ], [ 4, "ngIf" ], [ "fxFlex", "100" ], [ "key", "" ], [ "value", "" ], [ 3, "map" ] ],
                template: function(rf, ctx) {
                    1 & rf && (core["ɵɵelement"](0, "kd-object-meta", 0), core["ɵɵelementStart"](1, "kd-card", 1), 
                    core["ɵɵelementStart"](2, "div", 2), core["ɵɵi18n"](3, I18N_0), core["ɵɵelementEnd"](), 
                    core["ɵɵtemplate"](4, DaemonSetDetailComponent_div_4_Template, 4, 3, "div", 3), 
                    core["ɵɵelementEnd"](), core["ɵɵelement"](5, "kd-pod-status-card", 4), core["ɵɵelement"](6, "kd-pod-list", 5), 
                    core["ɵɵelement"](7, "kd-service-list", 5), core["ɵɵelement"](8, "kd-event-list", 5)), 
                    2 & rf && (core["ɵɵproperty"]("initialized", ctx.isInitialized)("objectMeta", null == ctx.daemonSet ? null : ctx.daemonSet.objectMeta), 
                    core["ɵɵadvance"](1), core["ɵɵproperty"]("initialized", ctx.isInitialized), core["ɵɵadvance"](3), 
                    core["ɵɵproperty"]("ngIf", ctx.isInitialized), core["ɵɵadvance"](1), core["ɵɵproperty"]("podInfo", null == ctx.daemonSet ? null : ctx.daemonSet.podInfo)("initialized", ctx.isInitialized), 
                    core["ɵɵadvance"](1), core["ɵɵproperty"]("endpoint", ctx.podListEndpoint), core["ɵɵadvance"](1), 
                    core["ɵɵproperty"]("endpoint", ctx.serviceListEndpoint), core["ɵɵadvance"](1), core["ɵɵproperty"]("endpoint", ctx.eventListEndpoint));
                },
                directives: [ objectmeta_component.a, card_component.a, common.NgIf, podstatus_component.a, pod_component.a, service_component.a, event_component.a, flex.d, property_component.a, flex.b, chips_component.a ],
                encapsulation: 2
            }), DaemonSetDetailComponent;
        })();
        var daemonset_component = __webpack_require__("hbcI");
        let component_DaemonSetListComponent = (() => {
            class DaemonSetListComponent {}
            return DaemonSetListComponent.ɵfac = function(t) {
                return new (t || DaemonSetListComponent);
            }, DaemonSetListComponent.ɵcmp = core["ɵɵdefineComponent"]({
                type: DaemonSetListComponent,
                selectors: [ [ "kd-daemon-set-list-state" ] ],
                decls: 1,
                vars: 0,
                template: function(rf, ctx) {
                    1 & rf && core["ɵɵelement"](0, "kd-daemon-set-list");
                },
                directives: [ daemonset_component.a ],
                encapsulation: 2
            }), DaemonSetListComponent;
        })();
        var routing = __webpack_require__("1spY");
        const DAEMONSET_LIST_ROUTE = {
            path: "",
            component: component_DaemonSetListComponent,
            data: {
                breadcrumb: "Daemon Sets",
                parent: __webpack_require__("6XRW").a
            }
        }, DAEMONSET_DETAIL_ROUTE = {
            path: ":resourceNamespace/:resourceName",
            component: component_DaemonSetDetailComponent,
            data: {
                breadcrumb: "{{ resourceName }}",
                parent: DAEMONSET_LIST_ROUTE
            }
        };
        let routing_DaemonSetRoutingModule = (() => {
            class DaemonSetRoutingModule {}
            return DaemonSetRoutingModule.ɵmod = core["ɵɵdefineNgModule"]({
                type: DaemonSetRoutingModule
            }), DaemonSetRoutingModule.ɵinj = core["ɵɵdefineInjector"]({
                factory: function(t) {
                    return new (t || DaemonSetRoutingModule);
                },
                imports: [ [ router.RouterModule.forChild([ DAEMONSET_LIST_ROUTE, DAEMONSET_DETAIL_ROUTE, routing.b ]) ], router.RouterModule ]
            }), DaemonSetRoutingModule;
        })();
        __webpack_require__.d(__webpack_exports__, "DaemonSetModule", (function() {
            return module_DaemonSetModule;
        }));
        let module_DaemonSetModule = (() => {
            class DaemonSetModule {}
            return DaemonSetModule.ɵmod = core["ɵɵdefineNgModule"]({
                type: DaemonSetModule
            }), DaemonSetModule.ɵinj = core["ɵɵdefineInjector"]({
                factory: function(t) {
                    return new (t || DaemonSetModule);
                },
                imports: [ [ shared_module.a, components_module.a, routing_DaemonSetRoutingModule ] ]
            }), DaemonSetModule;
        })();
    }
} ]);