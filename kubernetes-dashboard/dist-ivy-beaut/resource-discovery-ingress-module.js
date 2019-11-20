(window.webpackJsonp = window.webpackJsonp || []).push([ [ 21 ], {
    "60eK": function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        var components_module = __webpack_require__("PXUV"), shared_module = __webpack_require__("MnlZ"), actionbar = (__webpack_require__("MUlj"), 
        __webpack_require__("SRaF")), endpoint = __webpack_require__("m/E6"), core = __webpack_require__("fXoL"), resource = __webpack_require__("KyHI"), router = __webpack_require__("tyNb"), notifications = __webpack_require__("PXtb"), component = __webpack_require__("YS1y");
        let component_IngressDetailComponent = (() => {
            class IngressDetailComponent {
                constructor(ingress_, actionbar_, activatedRoute_, notifications_) {
                    this.ingress_ = ingress_, this.actionbar_ = actionbar_, this.activatedRoute_ = activatedRoute_, 
                    this.notifications_ = notifications_, this.endpoint_ = endpoint.a.resource(endpoint.b.ingress, !0), 
                    this.isInitialized = !1;
                }
                ngOnInit() {
                    const resourceName = this.activatedRoute_.snapshot.params.resourceName, resourceNamespace = this.activatedRoute_.snapshot.params.resourceNamespace;
                    this.ingressSubscription_ = this.ingress_.get(this.endpoint_.detail(), resourceName, resourceNamespace).subscribe(d => {
                        this.ingress = d, this.notifications_.pushErrors(d.errors), this.actionbar_.onInit.emit(new actionbar.b("Ingress", d.objectMeta, d.typeMeta)), 
                        this.isInitialized = !0;
                    });
                }
                ngOnDestroy() {
                    this.ingressSubscription_.unsubscribe(), this.actionbar_.onDetailsLeave.emit();
                }
            }
            return IngressDetailComponent.ɵfac = function(t) {
                return new (t || IngressDetailComponent)(core["ɵɵdirectiveInject"](resource.a), core["ɵɵdirectiveInject"](actionbar.a), core["ɵɵdirectiveInject"](router.ActivatedRoute), core["ɵɵdirectiveInject"](notifications.b));
            }, IngressDetailComponent.ɵcmp = core["ɵɵdefineComponent"]({
                type: IngressDetailComponent,
                selectors: [ [ "kd-ingress-detail" ] ],
                decls: 1,
                vars: 2,
                consts: [ [ 3, "initialized", "objectMeta" ] ],
                template: function(rf, ctx) {
                    1 & rf && core["ɵɵelement"](0, "kd-object-meta", 0), 2 & rf && core["ɵɵproperty"]("initialized", ctx.isInitialized)("objectMeta", null == ctx.ingress ? null : ctx.ingress.objectMeta);
                },
                directives: [ component.a ],
                encapsulation: 2
            }), IngressDetailComponent;
        })();
        var ingress_component = __webpack_require__("pboN");
        let component_IngressListComponent = (() => {
            class IngressListComponent {}
            return IngressListComponent.ɵfac = function(t) {
                return new (t || IngressListComponent);
            }, IngressListComponent.ɵcmp = core["ɵɵdefineComponent"]({
                type: IngressListComponent,
                selectors: [ [ "kd-ingress-list-state" ] ],
                decls: 1,
                vars: 0,
                template: function(rf, ctx) {
                    1 & rf && core["ɵɵelement"](0, "kd-ingress-list");
                },
                directives: [ ingress_component.a ],
                encapsulation: 2
            }), IngressListComponent;
        })();
        var routing = __webpack_require__("1spY");
        const INGRESS_LIST_ROUTE = {
            path: "",
            component: component_IngressListComponent,
            data: {
                breadcrumb: "Ingresses",
                parent: __webpack_require__("ePD8").a
            }
        }, INGRESS_DETAIL_ROUTE = {
            path: ":resourceNamespace/:resourceName",
            component: component_IngressDetailComponent,
            data: {
                breadcrumb: "{{ resourceName }}",
                parent: INGRESS_LIST_ROUTE
            }
        };
        let routing_IngressRoutingModule = (() => {
            class IngressRoutingModule {}
            return IngressRoutingModule.ɵmod = core["ɵɵdefineNgModule"]({
                type: IngressRoutingModule
            }), IngressRoutingModule.ɵinj = core["ɵɵdefineInjector"]({
                factory: function(t) {
                    return new (t || IngressRoutingModule);
                },
                imports: [ [ router.RouterModule.forChild([ INGRESS_LIST_ROUTE, INGRESS_DETAIL_ROUTE, routing.a ]) ], router.RouterModule ]
            }), IngressRoutingModule;
        })();
        __webpack_require__.d(__webpack_exports__, "IngressModule", (function() {
            return module_IngressModule;
        }));
        let module_IngressModule = (() => {
            class IngressModule {}
            return IngressModule.ɵmod = core["ɵɵdefineNgModule"]({
                type: IngressModule
            }), IngressModule.ɵinj = core["ɵɵdefineInjector"]({
                factory: function(t) {
                    return new (t || IngressModule);
                },
                imports: [ [ shared_module.a, components_module.a, routing_IngressRoutingModule ] ]
            }), IngressModule;
        })();
    },
    MUlj: function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        var Observable = __webpack_require__("HDdC"), startWith = __webpack_require__("JX91");
        Observable.a.prototype.startWith = function(...array) {
            return Object(startWith.a)(...array)(this);
        };
    }
} ]);