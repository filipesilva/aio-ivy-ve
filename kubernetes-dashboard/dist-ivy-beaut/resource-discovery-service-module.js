(window.webpackJsonp = window.webpackJsonp || []).push([ [ 23 ], {
    q8qa: function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        var I18N_0, I18N_2, I18N_4, I18N_6, I18N_8, components_module = __webpack_require__("PXUV"), shared_module = __webpack_require__("MnlZ"), actionbar = __webpack_require__("SRaF"), endpoint = __webpack_require__("m/E6"), core = __webpack_require__("fXoL"), resource = __webpack_require__("KyHI"), router = __webpack_require__("tyNb"), notifications = __webpack_require__("PXtb"), component = __webpack_require__("YS1y"), card_component = __webpack_require__("TN1b"), common = __webpack_require__("ofXK"), cardlist_component = __webpack_require__("JPwO"), pod_component = __webpack_require__("D5Vd"), event_component = __webpack_require__("MmPu"), flex = __webpack_require__("XiUz"), property_component = __webpack_require__("Rx8Q"), chips_component = __webpack_require__("svQk");
        function ServiceDetailComponent_div_4_kd_property_1_Template(rf, ctx) {
            if (1 & rf && (core["ɵɵelementStart"](0, "kd-property"), core["ɵɵelementStart"](1, "div", 9), 
            core["ɵɵi18n"](2, I18N_2), core["ɵɵelementEnd"](), core["ɵɵelementStart"](3, "div", 10), 
            core["ɵɵtext"](4), core["ɵɵelementEnd"](), core["ɵɵelementEnd"]()), 2 & rf) {
                const ctx_r1303 = core["ɵɵnextContext"](2);
                core["ɵɵadvance"](4), core["ɵɵtextInterpolate"](null == ctx_r1303.service ? null : ctx_r1303.service.type);
            }
        }
        function ServiceDetailComponent_div_4_kd_property_2_Template(rf, ctx) {
            if (1 & rf && (core["ɵɵelementStart"](0, "kd-property"), core["ɵɵelementStart"](1, "div", 9), 
            core["ɵɵi18n"](2, I18N_4), core["ɵɵelementEnd"](), core["ɵɵelementStart"](3, "div", 10), 
            core["ɵɵtext"](4), core["ɵɵelementEnd"](), core["ɵɵelementEnd"]()), 2 & rf) {
                const ctx_r1304 = core["ɵɵnextContext"](2);
                core["ɵɵadvance"](4), core["ɵɵtextInterpolate"](null == ctx_r1304.service ? null : ctx_r1304.service.clusterIP);
            }
        }
        function ServiceDetailComponent_div_4_kd_property_3_Template(rf, ctx) {
            if (1 & rf && (core["ɵɵelementStart"](0, "kd-property"), core["ɵɵelementStart"](1, "div", 9), 
            core["ɵɵi18n"](2, I18N_6), core["ɵɵelementEnd"](), core["ɵɵelementStart"](3, "div", 10), 
            core["ɵɵtext"](4), core["ɵɵelementEnd"](), core["ɵɵelementEnd"]()), 2 & rf) {
                const ctx_r1305 = core["ɵɵnextContext"](2);
                core["ɵɵadvance"](4), core["ɵɵtextInterpolate"](null == ctx_r1305.service ? null : ctx_r1305.service.sessionAffinity);
            }
        }
        function ServiceDetailComponent_div_4_kd_property_4_Template(rf, ctx) {
            if (1 & rf && (core["ɵɵelementStart"](0, "kd-property", 11), core["ɵɵelementStart"](1, "div", 9), 
            core["ɵɵi18n"](2, I18N_8), core["ɵɵelementEnd"](), core["ɵɵelementStart"](3, "div", 10), 
            core["ɵɵelement"](4, "kd-chips", 12), core["ɵɵelementEnd"](), core["ɵɵelementEnd"]()), 
            2 & rf) {
                const ctx_r1306 = core["ɵɵnextContext"](2);
                core["ɵɵadvance"](4), core["ɵɵproperty"]("map", null == ctx_r1306.service ? null : ctx_r1306.service.selector);
            }
        }
        function ServiceDetailComponent_div_4_Template(rf, ctx) {
            if (1 & rf && (core["ɵɵelementStart"](0, "div", 6), core["ɵɵtemplate"](1, ServiceDetailComponent_div_4_kd_property_1_Template, 5, 1, "kd-property", 7), 
            core["ɵɵtemplate"](2, ServiceDetailComponent_div_4_kd_property_2_Template, 5, 1, "kd-property", 7), 
            core["ɵɵtemplate"](3, ServiceDetailComponent_div_4_kd_property_3_Template, 5, 1, "kd-property", 7), 
            core["ɵɵtemplate"](4, ServiceDetailComponent_div_4_kd_property_4_Template, 5, 1, "kd-property", 8), 
            core["ɵɵelementEnd"]()), 2 & rf) {
                const ctx_r1302 = core["ɵɵnextContext"]();
                core["ɵɵadvance"](1), core["ɵɵproperty"]("ngIf", null == ctx_r1302.service ? null : ctx_r1302.service.type), 
                core["ɵɵadvance"](1), core["ɵɵproperty"]("ngIf", null == ctx_r1302.service ? null : ctx_r1302.service.clusterIP), 
                core["ɵɵadvance"](1), core["ɵɵproperty"]("ngIf", null == ctx_r1302.service ? null : ctx_r1302.service.sessionAffinity), 
                core["ɵɵadvance"](1), core["ɵɵproperty"]("ngIf", null == ctx_r1302.service ? null : ctx_r1302.service.selector);
            }
        }
        I18N_0 = $localize`Resource information`, I18N_2 = $localize`Type`, I18N_4 = $localize`Cluster IP`, 
        I18N_6 = $localize`Session Affinity`, I18N_8 = $localize`Selector`;
        let component_ServiceDetailComponent = (() => {
            class ServiceDetailComponent {
                constructor(service_, actionbar_, activatedRoute_, notifications_) {
                    this.service_ = service_, this.actionbar_ = actionbar_, this.activatedRoute_ = activatedRoute_, 
                    this.notifications_ = notifications_, this.endpoint_ = endpoint.a.resource(endpoint.b.service, !0), 
                    this.isInitialized = !1;
                }
                ngOnInit() {
                    const resourceName = this.activatedRoute_.snapshot.params.resourceName, resourceNamespace = this.activatedRoute_.snapshot.params.resourceNamespace;
                    this.podListEndpoint = this.endpoint_.child(resourceName, endpoint.b.pod, resourceNamespace), 
                    this.eventListEndpoint = this.endpoint_.child(resourceName, endpoint.b.event, resourceNamespace), 
                    this.serviceSubscription_ = this.service_.get(this.endpoint_.detail(), resourceName, resourceNamespace).subscribe(d => {
                        this.service = d, this.notifications_.pushErrors(d.errors), this.actionbar_.onInit.emit(new actionbar.b("Service", d.objectMeta, d.typeMeta)), 
                        this.isInitialized = !0;
                    });
                }
                ngOnDestroy() {
                    this.serviceSubscription_.unsubscribe(), this.actionbar_.onDetailsLeave.emit();
                }
            }
            return ServiceDetailComponent.ɵfac = function(t) {
                return new (t || ServiceDetailComponent)(core["ɵɵdirectiveInject"](resource.a), core["ɵɵdirectiveInject"](actionbar.a), core["ɵɵdirectiveInject"](router.ActivatedRoute), core["ɵɵdirectiveInject"](notifications.b));
            }, ServiceDetailComponent.ɵcmp = core["ɵɵdefineComponent"]({
                type: ServiceDetailComponent,
                selectors: [ [ "kd-service-detail" ] ],
                decls: 8,
                vars: 8,
                consts: [ [ 3, "initialized", "objectMeta" ], [ 3, "initialized" ], [ "title", "" ], [ "content", "", "fxLayout", "row wrap", 4, "ngIf" ], [ 3, "endpoints", "initialized" ], [ 3, "endpoint" ], [ "content", "", "fxLayout", "row wrap" ], [ 4, "ngIf" ], [ "fxFlex", "100", 4, "ngIf" ], [ "key", "" ], [ "value", "" ], [ "fxFlex", "100" ], [ 3, "map" ] ],
                template: function(rf, ctx) {
                    1 & rf && (core["ɵɵelement"](0, "kd-object-meta", 0), core["ɵɵelementStart"](1, "kd-card", 1), 
                    core["ɵɵelementStart"](2, "div", 2), core["ɵɵi18n"](3, I18N_0), core["ɵɵelementEnd"](), 
                    core["ɵɵtemplate"](4, ServiceDetailComponent_div_4_Template, 5, 4, "div", 3), core["ɵɵelementEnd"](), 
                    core["ɵɵelement"](5, "kd-endpoint-card-list", 4), core["ɵɵelement"](6, "kd-pod-list", 5), 
                    core["ɵɵelement"](7, "kd-event-list", 5)), 2 & rf && (core["ɵɵproperty"]("initialized", ctx.isInitialized)("objectMeta", null == ctx.service ? null : ctx.service.objectMeta), 
                    core["ɵɵadvance"](1), core["ɵɵproperty"]("initialized", ctx.isInitialized), core["ɵɵadvance"](3), 
                    core["ɵɵproperty"]("ngIf", ctx.isInitialized), core["ɵɵadvance"](1), core["ɵɵproperty"]("endpoints", null == ctx.service ? null : null == ctx.service.endpointList ? null : ctx.service.endpointList.endpoints)("initialized", ctx.isInitialized), 
                    core["ɵɵadvance"](1), core["ɵɵproperty"]("endpoint", ctx.podListEndpoint), core["ɵɵadvance"](1), 
                    core["ɵɵproperty"]("endpoint", ctx.eventListEndpoint));
                },
                directives: [ component.a, card_component.a, common.NgIf, cardlist_component.a, pod_component.a, event_component.a, flex.d, property_component.a, flex.b, chips_component.a ],
                encapsulation: 2
            }), ServiceDetailComponent;
        })();
        var service_component = __webpack_require__("0t1c");
        let component_ServiceListComponent = (() => {
            class ServiceListComponent {}
            return ServiceListComponent.ɵfac = function(t) {
                return new (t || ServiceListComponent);
            }, ServiceListComponent.ɵcmp = core["ɵɵdefineComponent"]({
                type: ServiceListComponent,
                selectors: [ [ "kd-service-list-state" ] ],
                decls: 1,
                vars: 0,
                template: function(rf, ctx) {
                    1 & rf && core["ɵɵelement"](0, "kd-service-list");
                },
                directives: [ service_component.a ],
                encapsulation: 2
            }), ServiceListComponent;
        })();
        var routing = __webpack_require__("1spY");
        const SERVICE_LIST_ROUTE = {
            path: "",
            component: component_ServiceListComponent,
            data: {
                breadcrumb: "Services",
                parent: __webpack_require__("ePD8").a
            }
        }, SERVICE_DETAIL_ROUTE = {
            path: ":resourceNamespace/:resourceName",
            component: component_ServiceDetailComponent,
            data: {
                breadcrumb: "{{ resourceName }}",
                parent: SERVICE_LIST_ROUTE
            }
        };
        let routing_ServiceRoutingModule = (() => {
            class ServiceRoutingModule {}
            return ServiceRoutingModule.ɵmod = core["ɵɵdefineNgModule"]({
                type: ServiceRoutingModule
            }), ServiceRoutingModule.ɵinj = core["ɵɵdefineInjector"]({
                factory: function(t) {
                    return new (t || ServiceRoutingModule);
                },
                imports: [ [ router.RouterModule.forChild([ SERVICE_LIST_ROUTE, SERVICE_DETAIL_ROUTE, routing.a ]) ], router.RouterModule ]
            }), ServiceRoutingModule;
        })();
        __webpack_require__.d(__webpack_exports__, "ServiceModule", (function() {
            return module_ServiceModule;
        }));
        let module_ServiceModule = (() => {
            class ServiceModule {}
            return ServiceModule.ɵmod = core["ɵɵdefineNgModule"]({
                type: ServiceModule
            }), ServiceModule.ɵinj = core["ɵɵdefineInjector"]({
                factory: function(t) {
                    return new (t || ServiceModule);
                },
                imports: [ [ shared_module.a, components_module.a, routing_ServiceRoutingModule ] ]
            }), ServiceModule;
        })();
    }
} ]);