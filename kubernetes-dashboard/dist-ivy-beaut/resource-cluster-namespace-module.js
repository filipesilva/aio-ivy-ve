(window.webpackJsonp = window.webpackJsonp || []).push([ [ 13 ], {
    WpBj: function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        var components_module = __webpack_require__("PXUV"), shared_module = __webpack_require__("MnlZ"), Subject = __webpack_require__("XNiG"), takeUntil = __webpack_require__("1G5W"), params = __webpack_require__("yn8F"), core = __webpack_require__("fXoL"), actionbar = __webpack_require__("SRaF"), router = __webpack_require__("tyNb"), common = __webpack_require__("ofXK"), flex = __webpack_require__("XiUz"), fesm2015_button = __webpack_require__("bTqV"), tooltip = __webpack_require__("Qu3c"), icon = __webpack_require__("NFeN"), component = __webpack_require__("WWzS");
        function ActionbarComponent_div_0_kd_actionbar_detail_actions_4_Template(rf, ctx) {
            if (1 & rf && core["ɵɵelement"](0, "kd-actionbar-detail-actions", 4), 2 & rf) {
                const ctx_r1131 = core["ɵɵnextContext"](2);
                core["ɵɵproperty"]("objectMeta", ctx_r1131.resourceMeta.objectMeta)("typeMeta", ctx_r1131.resourceMeta.typeMeta)("displayName", ctx_r1131.resourceMeta.displayName);
            }
        }
        function ActionbarComponent_div_0_Template(rf, ctx) {
            if (1 & rf) {
                const _r1133 = core["ɵɵgetCurrentView"]();
                core["ɵɵelementStart"](0, "div", 1), core["ɵɵelementStart"](1, "button", 2), core["ɵɵlistener"]("click", (function($event) {
                    return core["ɵɵrestoreView"](_r1133), core["ɵɵnextContext"]().onClick();
                })), core["ɵɵelementStart"](2, "mat-icon"), core["ɵɵtext"](3, "description"), core["ɵɵelementEnd"](), 
                core["ɵɵelementEnd"](), core["ɵɵtemplate"](4, ActionbarComponent_div_0_kd_actionbar_detail_actions_4_Template, 1, 3, "kd-actionbar-detail-actions", 3), 
                core["ɵɵelementEnd"]();
            }
            if (2 & rf) {
                const ctx_r1130 = core["ɵɵnextContext"]();
                core["ɵɵadvance"](4), core["ɵɵproperty"]("ngIf", ctx_r1130.isInitialized);
            }
        }
        let component_ActionbarComponent = (() => {
            class ActionbarComponent {
                constructor(actionbar_, router_) {
                    this.actionbar_ = actionbar_, this.router_ = router_, this.isInitialized = !1, this.isVisible = !1, 
                    this._unsubscribe = new Subject.b;
                }
                ngOnInit() {
                    this.actionbar_.onInit.pipe(Object(takeUntil.a)(this._unsubscribe)).subscribe(resourceMeta => {
                        this.resourceMeta = resourceMeta, this.isInitialized = !0, this.isVisible = !0;
                    }), this.actionbar_.onDetailsLeave.pipe(Object(takeUntil.a)(this._unsubscribe)).subscribe(() => this.isVisible = !1);
                }
                ngOnDestroy() {
                    this._unsubscribe.next(), this._unsubscribe.complete();
                }
                onClick() {
                    this.router_.navigate([ "overview" ], {
                        queryParamsHandling: "merge",
                        queryParams: {
                            [params.a]: this.resourceMeta.objectMeta.name
                        }
                    });
                }
            }
            return ActionbarComponent.ɵfac = function(t) {
                return new (t || ActionbarComponent)(core["ɵɵdirectiveInject"](actionbar.a), core["ɵɵdirectiveInject"](router.Router));
            }, ActionbarComponent.ɵcmp = core["ɵɵdefineComponent"]({
                type: ActionbarComponent,
                selectors: [ [ "ng-component" ] ],
                decls: 1,
                vars: 1,
                consts: [ [ "fxLayout", "row", 4, "ngIf" ], [ "fxLayout", "row" ], [ "mat-icon-button", "", "color", "accent", "matTooltip", "Go to namespace overview", 1, "kd-toolbar-action", 3, "click" ], [ 3, "objectMeta", "typeMeta", "displayName", 4, "ngIf" ], [ 3, "objectMeta", "typeMeta", "displayName" ] ],
                template: function(rf, ctx) {
                    1 & rf && core["ɵɵtemplate"](0, ActionbarComponent_div_0_Template, 5, 1, "div", 0), 
                    2 & rf && core["ɵɵproperty"]("ngIf", ctx.isVisible);
                },
                directives: [ common.NgIf, flex.d, fesm2015_button.b, tooltip.b, icon.a, component.a ],
                encapsulation: 2
            }), ActionbarComponent;
        })();
        var I18N_0, I18N_2, endpoint = __webpack_require__("m/E6"), resource = __webpack_require__("KyHI"), notifications = __webpack_require__("PXtb"), objectmeta_component = __webpack_require__("YS1y"), card_component = __webpack_require__("TN1b"), quotas_component = __webpack_require__("MZ8+"), limits_component = __webpack_require__("8wem"), event_component = __webpack_require__("MmPu"), property_component = __webpack_require__("Rx8Q");
        function NamespaceDetailComponent_div_4_kd_property_1_Template(rf, ctx) {
            if (1 & rf && (core["ɵɵelementStart"](0, "kd-property"), core["ɵɵelementStart"](1, "div", 9), 
            core["ɵɵi18n"](2, I18N_2), core["ɵɵelementEnd"](), core["ɵɵelementStart"](3, "div", 10), 
            core["ɵɵtext"](4), core["ɵɵelementEnd"](), core["ɵɵelementEnd"]()), 2 & rf) {
                const ctx_r1135 = core["ɵɵnextContext"](2);
                core["ɵɵadvance"](4), core["ɵɵtextInterpolate"](null == ctx_r1135.namespace ? null : ctx_r1135.namespace.phase);
            }
        }
        function NamespaceDetailComponent_div_4_Template(rf, ctx) {
            if (1 & rf && (core["ɵɵelementStart"](0, "div", 7), core["ɵɵtemplate"](1, NamespaceDetailComponent_div_4_kd_property_1_Template, 5, 1, "kd-property", 8), 
            core["ɵɵelementEnd"]()), 2 & rf) {
                const ctx_r1134 = core["ɵɵnextContext"]();
                core["ɵɵadvance"](1), core["ɵɵproperty"]("ngIf", null == ctx_r1134.namespace ? null : ctx_r1134.namespace.phase);
            }
        }
        I18N_0 = $localize`Resource information`, I18N_2 = $localize`Status`;
        let component_NamespaceDetailComponent = (() => {
            class NamespaceDetailComponent {
                constructor(namespace_, actionbar_, activatedRoute_, notifications_) {
                    this.namespace_ = namespace_, this.actionbar_ = actionbar_, this.activatedRoute_ = activatedRoute_, 
                    this.notifications_ = notifications_, this.endpoint_ = endpoint.a.resource(endpoint.b.namespace), 
                    this.isInitialized = !1;
                }
                ngOnInit() {
                    const resourceName = this.activatedRoute_.snapshot.params.resourceName;
                    this.eventListEndpoint = this.endpoint_.child(resourceName, endpoint.b.event), this.namespaceSubscription_ = this.namespace_.get(this.endpoint_.detail(), resourceName).subscribe(d => {
                        this.namespace = d, this.notifications_.pushErrors(d.errors), this.actionbar_.onInit.emit(new actionbar.b("Namespace", d.objectMeta, d.typeMeta)), 
                        this.isInitialized = !0;
                    });
                }
                ngOnDestroy() {
                    this.namespaceSubscription_.unsubscribe(), this.actionbar_.onDetailsLeave.emit();
                }
            }
            return NamespaceDetailComponent.ɵfac = function(t) {
                return new (t || NamespaceDetailComponent)(core["ɵɵdirectiveInject"](resource.b), core["ɵɵdirectiveInject"](actionbar.a), core["ɵɵdirectiveInject"](router.ActivatedRoute), core["ɵɵdirectiveInject"](notifications.b));
            }, NamespaceDetailComponent.ɵcmp = core["ɵɵdefineComponent"]({
                type: NamespaceDetailComponent,
                selectors: [ [ "kd-namespace-detail" ] ],
                decls: 8,
                vars: 9,
                consts: [ [ 3, "initialized", "objectMeta" ], [ 3, "initialized" ], [ "title", "" ], [ "content", "", "fxLayout", "row wrap", 4, "ngIf" ], [ 3, "quotas", "initialized" ], [ 3, "limits", "initialized" ], [ 3, "endpoint" ], [ "content", "", "fxLayout", "row wrap" ], [ 4, "ngIf" ], [ "key", "" ], [ "value", "" ] ],
                template: function(rf, ctx) {
                    1 & rf && (core["ɵɵelement"](0, "kd-object-meta", 0), core["ɵɵelementStart"](1, "kd-card", 1), 
                    core["ɵɵelementStart"](2, "div", 2), core["ɵɵi18n"](3, I18N_0), core["ɵɵelementEnd"](), 
                    core["ɵɵtemplate"](4, NamespaceDetailComponent_div_4_Template, 2, 1, "div", 3), 
                    core["ɵɵelementEnd"](), core["ɵɵelement"](5, "kd-resource-quota-list", 4), core["ɵɵelement"](6, "kd-resource-limit-list", 5), 
                    core["ɵɵelement"](7, "kd-event-list", 6)), 2 & rf && (core["ɵɵproperty"]("initialized", ctx.isInitialized)("objectMeta", null == ctx.namespace ? null : ctx.namespace.objectMeta), 
                    core["ɵɵadvance"](1), core["ɵɵproperty"]("initialized", ctx.isInitialized), core["ɵɵadvance"](3), 
                    core["ɵɵproperty"]("ngIf", ctx.isInitialized), core["ɵɵadvance"](1), core["ɵɵproperty"]("quotas", null == ctx.namespace ? null : null == ctx.namespace.resourceQuotaList ? null : ctx.namespace.resourceQuotaList.items)("initialized", ctx.isInitialized), 
                    core["ɵɵadvance"](1), core["ɵɵproperty"]("limits", null == ctx.namespace ? null : ctx.namespace.resourceLimits)("initialized", ctx.isInitialized), 
                    core["ɵɵadvance"](1), core["ɵɵproperty"]("endpoint", ctx.eventListEndpoint));
                },
                directives: [ objectmeta_component.a, card_component.a, common.NgIf, quotas_component.a, limits_component.a, event_component.a, flex.d, property_component.a ],
                encapsulation: 2
            }), NamespaceDetailComponent;
        })();
        var namespace_component = __webpack_require__("QuVQ");
        const NAMESPACE_LIST_ROUTE = {
            path: "",
            component: (() => {
                class NamespaceListComponent {}
                return NamespaceListComponent.ɵfac = function(t) {
                    return new (t || NamespaceListComponent);
                }, NamespaceListComponent.ɵcmp = core["ɵɵdefineComponent"]({
                    type: NamespaceListComponent,
                    selectors: [ [ "kd-namespace-list-view" ] ],
                    decls: 1,
                    vars: 0,
                    template: function(rf, ctx) {
                        1 & rf && core["ɵɵelement"](0, "kd-namespace-list");
                    },
                    directives: [ namespace_component.a ],
                    encapsulation: 2
                }), NamespaceListComponent;
            })(),
            data: {
                breadcrumb: "Namespaces",
                parent: __webpack_require__("wSpo").a
            }
        }, NAMESPACE_DETAIL_ROUTE = {
            path: ":resourceName",
            component: component_NamespaceDetailComponent,
            data: {
                breadcrumb: "{{ resourceName }}",
                parent: NAMESPACE_LIST_ROUTE
            }
        }, ACTIONBAR = {
            path: "",
            component: component_ActionbarComponent,
            outlet: "actionbar"
        };
        let routing_NamespaceRoutingModule = (() => {
            class NamespaceRoutingModule {}
            return NamespaceRoutingModule.ɵmod = core["ɵɵdefineNgModule"]({
                type: NamespaceRoutingModule
            }), NamespaceRoutingModule.ɵinj = core["ɵɵdefineInjector"]({
                factory: function(t) {
                    return new (t || NamespaceRoutingModule);
                },
                imports: [ [ router.RouterModule.forChild([ NAMESPACE_LIST_ROUTE, NAMESPACE_DETAIL_ROUTE, ACTIONBAR ]) ], router.RouterModule ]
            }), NamespaceRoutingModule;
        })();
        __webpack_require__.d(__webpack_exports__, "NamespaceModule", (function() {
            return module_NamespaceModule;
        }));
        let module_NamespaceModule = (() => {
            class NamespaceModule {}
            return NamespaceModule.ɵmod = core["ɵɵdefineNgModule"]({
                type: NamespaceModule
            }), NamespaceModule.ɵinj = core["ɵɵdefineInjector"]({
                factory: function(t) {
                    return new (t || NamespaceModule);
                },
                imports: [ [ shared_module.a, components_module.a, routing_NamespaceRoutingModule ] ]
            }), NamespaceModule;
        })();
    }
} ]);
//# sourceMappingURL=resource-cluster-namespace-module.js.map