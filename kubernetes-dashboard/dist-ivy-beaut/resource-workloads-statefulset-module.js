(window.webpackJsonp = window.webpackJsonp || []).push([ [ 32 ], {
    VmOx: function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        var I18N_0, I18N_2, I18N_4, I18N_6, components_module = __webpack_require__("PXUV"), shared_module = __webpack_require__("MnlZ"), actionbar = __webpack_require__("SRaF"), endpoint = __webpack_require__("m/E6"), core = __webpack_require__("fXoL"), resource = __webpack_require__("KyHI"), router = __webpack_require__("tyNb"), notifications = __webpack_require__("PXtb"), component = __webpack_require__("YS1y"), card_component = __webpack_require__("TN1b"), common = __webpack_require__("ofXK"), podstatus_component = __webpack_require__("TsCr"), pod_component = __webpack_require__("D5Vd"), event_component = __webpack_require__("MmPu"), flex = __webpack_require__("XiUz"), property_component = __webpack_require__("Rx8Q"), chips_component = __webpack_require__("svQk");
        function StatefulSetDetailComponent_div_4_kd_property_1_Template(rf, ctx) {
            if (1 & rf && (core["ɵɵelementStart"](0, "kd-property", 9), core["ɵɵelementStart"](1, "div", 10), 
            core["ɵɵi18n"](2, I18N_2), core["ɵɵelementEnd"](), core["ɵɵelementStart"](3, "div", 11), 
            core["ɵɵelement"](4, "kd-chips", 12), core["ɵɵelementEnd"](), core["ɵɵelementEnd"]()), 
            2 & rf) {
                const ctx_r1299 = core["ɵɵnextContext"](2);
                core["ɵɵadvance"](4), core["ɵɵproperty"]("map", ctx_r1299.statefulSet.labelSelector);
            }
        }
        function StatefulSetDetailComponent_div_4_kd_property_2_Template(rf, ctx) {
            if (1 & rf && (core["ɵɵelementStart"](0, "kd-property"), core["ɵɵelementStart"](1, "div", 10), 
            core["ɵɵi18n"](2, I18N_4), core["ɵɵelementEnd"](), core["ɵɵelementStart"](3, "div", 11), 
            core["ɵɵelement"](4, "kd-chips", 12), core["ɵɵelementEnd"](), core["ɵɵelementEnd"]()), 
            2 & rf) {
                const ctx_r1300 = core["ɵɵnextContext"](2);
                core["ɵɵadvance"](4), core["ɵɵproperty"]("map", ctx_r1300.statefulSet.containerImages);
            }
        }
        function StatefulSetDetailComponent_div_4_kd_property_3_Template(rf, ctx) {
            if (1 & rf && (core["ɵɵelementStart"](0, "kd-property"), core["ɵɵelementStart"](1, "div", 10), 
            core["ɵɵi18n"](2, I18N_6), core["ɵɵelementEnd"](), core["ɵɵelementStart"](3, "div", 11), 
            core["ɵɵelement"](4, "kd-chips", 12), core["ɵɵelementEnd"](), core["ɵɵelementEnd"]()), 
            2 & rf) {
                const ctx_r1301 = core["ɵɵnextContext"](2);
                core["ɵɵadvance"](4), core["ɵɵproperty"]("map", ctx_r1301.statefulSet.initContainerImages);
            }
        }
        function StatefulSetDetailComponent_div_4_Template(rf, ctx) {
            if (1 & rf && (core["ɵɵelementStart"](0, "div", 6), core["ɵɵtemplate"](1, StatefulSetDetailComponent_div_4_kd_property_1_Template, 5, 1, "kd-property", 7), 
            core["ɵɵtemplate"](2, StatefulSetDetailComponent_div_4_kd_property_2_Template, 5, 1, "kd-property", 8), 
            core["ɵɵtemplate"](3, StatefulSetDetailComponent_div_4_kd_property_3_Template, 5, 1, "kd-property", 8), 
            core["ɵɵelementEnd"]()), 2 & rf) {
                const ctx_r1298 = core["ɵɵnextContext"]();
                core["ɵɵadvance"](1), core["ɵɵproperty"]("ngIf", null == ctx_r1298.statefulSet ? null : ctx_r1298.statefulSet.labelSelector), 
                core["ɵɵadvance"](1), core["ɵɵproperty"]("ngIf", null == ctx_r1298.statefulSet ? null : ctx_r1298.statefulSet.containerImages), 
                core["ɵɵadvance"](1), core["ɵɵproperty"]("ngIf", null == ctx_r1298.statefulSet ? null : ctx_r1298.statefulSet.initContainerImages);
            }
        }
        I18N_0 = $localize`Resource information`, I18N_2 = $localize`Label Selector`, I18N_4 = $localize`Images`, 
        I18N_6 = $localize`Init images`;
        let component_StatefulSetDetailComponent = (() => {
            class StatefulSetDetailComponent {
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
            return StatefulSetDetailComponent.ɵfac = function(t) {
                return new (t || StatefulSetDetailComponent)(core["ɵɵdirectiveInject"](resource.a), core["ɵɵdirectiveInject"](actionbar.a), core["ɵɵdirectiveInject"](router.ActivatedRoute), core["ɵɵdirectiveInject"](notifications.b));
            }, StatefulSetDetailComponent.ɵcmp = core["ɵɵdefineComponent"]({
                type: StatefulSetDetailComponent,
                selectors: [ [ "kd-stateful-set-detail" ] ],
                decls: 8,
                vars: 8,
                consts: [ [ 3, "initialized", "objectMeta" ], [ 3, "initialized" ], [ "title", "" ], [ "content", "", "fxLayout", "row wrap", 4, "ngIf" ], [ 3, "podInfo", "initialized" ], [ 3, "endpoint" ], [ "content", "", "fxLayout", "row wrap" ], [ "fxFlex", "100", 4, "ngIf" ], [ 4, "ngIf" ], [ "fxFlex", "100" ], [ "key", "" ], [ "value", "" ], [ 3, "map" ] ],
                template: function(rf, ctx) {
                    1 & rf && (core["ɵɵelement"](0, "kd-object-meta", 0), core["ɵɵelementStart"](1, "kd-card", 1), 
                    core["ɵɵelementStart"](2, "div", 2), core["ɵɵi18n"](3, I18N_0), core["ɵɵelementEnd"](), 
                    core["ɵɵtemplate"](4, StatefulSetDetailComponent_div_4_Template, 4, 3, "div", 3), 
                    core["ɵɵelementEnd"](), core["ɵɵelement"](5, "kd-pod-status-card", 4), core["ɵɵelement"](6, "kd-pod-list", 5), 
                    core["ɵɵelement"](7, "kd-event-list", 5)), 2 & rf && (core["ɵɵproperty"]("initialized", ctx.isInitialized)("objectMeta", null == ctx.statefulSet ? null : ctx.statefulSet.objectMeta), 
                    core["ɵɵadvance"](1), core["ɵɵproperty"]("initialized", ctx.isInitialized), core["ɵɵadvance"](3), 
                    core["ɵɵproperty"]("ngIf", ctx.isInitialized), core["ɵɵadvance"](1), core["ɵɵproperty"]("podInfo", null == ctx.statefulSet ? null : ctx.statefulSet.podInfo)("initialized", ctx.isInitialized), 
                    core["ɵɵadvance"](1), core["ɵɵproperty"]("endpoint", ctx.podListEndpoint), core["ɵɵadvance"](1), 
                    core["ɵɵproperty"]("endpoint", ctx.eventListEndpoint));
                },
                directives: [ component.a, card_component.a, common.NgIf, podstatus_component.a, pod_component.a, event_component.a, flex.d, property_component.a, flex.b, chips_component.a ],
                encapsulation: 2
            }), StatefulSetDetailComponent;
        })();
        var statefulset_component = __webpack_require__("mhPB");
        let component_StatefulSetListComponent = (() => {
            class StatefulSetListComponent {}
            return StatefulSetListComponent.ɵfac = function(t) {
                return new (t || StatefulSetListComponent);
            }, StatefulSetListComponent.ɵcmp = core["ɵɵdefineComponent"]({
                type: StatefulSetListComponent,
                selectors: [ [ "kd-stateful-set-state" ] ],
                decls: 1,
                vars: 0,
                template: function(rf, ctx) {
                    1 & rf && core["ɵɵelement"](0, "kd-stateful-set-list");
                },
                directives: [ statefulset_component.a ],
                encapsulation: 2
            }), StatefulSetListComponent;
        })();
        var routing = __webpack_require__("1spY");
        const REPLICASET_LIST_ROUTE = {
            path: "",
            component: component_StatefulSetListComponent,
            data: {
                breadcrumb: "Stateful Sets",
                parent: __webpack_require__("6XRW").a
            }
        }, REPLICASET_DETAIL_ROUTE = {
            path: ":resourceNamespace/:resourceName",
            component: component_StatefulSetDetailComponent,
            data: {
                breadcrumb: "{{ resourceName }}",
                parent: REPLICASET_LIST_ROUTE
            }
        };
        let routing_StatefulSetRoutingModule = (() => {
            class StatefulSetRoutingModule {}
            return StatefulSetRoutingModule.ɵmod = core["ɵɵdefineNgModule"]({
                type: StatefulSetRoutingModule
            }), StatefulSetRoutingModule.ɵinj = core["ɵɵdefineInjector"]({
                factory: function(t) {
                    return new (t || StatefulSetRoutingModule);
                },
                imports: [ [ router.RouterModule.forChild([ REPLICASET_LIST_ROUTE, REPLICASET_DETAIL_ROUTE, routing.d ]) ], router.RouterModule ]
            }), StatefulSetRoutingModule;
        })();
        __webpack_require__.d(__webpack_exports__, "StatefulSetModule", (function() {
            return module_StatefulSetModule;
        }));
        let module_StatefulSetModule = (() => {
            class StatefulSetModule {}
            return StatefulSetModule.ɵmod = core["ɵɵdefineNgModule"]({
                type: StatefulSetModule
            }), StatefulSetModule.ɵinj = core["ɵɵdefineInjector"]({
                factory: function(t) {
                    return new (t || StatefulSetModule);
                },
                imports: [ [ shared_module.a, components_module.a, routing_StatefulSetRoutingModule ] ]
            }), StatefulSetModule;
        })();
    }
} ]);