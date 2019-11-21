(window.webpackJsonp = window.webpackJsonp || []).push([ [ 11 ], {
    A29P: function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        var components_module = __webpack_require__("PXUV"), shared_module = __webpack_require__("MnlZ"), actionbar = __webpack_require__("SRaF"), endpoint = __webpack_require__("m/E6"), core = __webpack_require__("fXoL"), resource = __webpack_require__("KyHI"), router = __webpack_require__("tyNb"), notifications = __webpack_require__("PXtb"), component = __webpack_require__("YS1y"), policyrule_component = __webpack_require__("H2iN");
        let component_ClusterRoleDetailComponent = (() => {
            class ClusterRoleDetailComponent {
                constructor(clusterRole_, actionbar_, route_, notifications_) {
                    this.clusterRole_ = clusterRole_, this.actionbar_ = actionbar_, this.route_ = route_, 
                    this.notifications_ = notifications_, this.endpoint_ = endpoint.a.resource(endpoint.b.clusterRole), 
                    this.isInitialized = !1;
                }
                ngOnInit() {
                    const resourceName = this.route_.snapshot.params.resourceName;
                    this.clusterRoleSubscription_ = this.clusterRole_.get(this.endpoint_.detail(), resourceName).subscribe(d => {
                        this.clusterRole = d, this.notifications_.pushErrors(d.errors), this.actionbar_.onInit.emit(new actionbar.b("Cluster Role", d.objectMeta, d.typeMeta)), 
                        this.isInitialized = !0;
                    });
                }
                ngOnDestroy() {
                    this.clusterRoleSubscription_.unsubscribe(), this.actionbar_.onDetailsLeave.emit();
                }
            }
            return ClusterRoleDetailComponent.ɵfac = function(t) {
                return new (t || ClusterRoleDetailComponent)(core["ɵɵdirectiveInject"](resource.b), core["ɵɵdirectiveInject"](actionbar.a), core["ɵɵdirectiveInject"](router.ActivatedRoute), core["ɵɵdirectiveInject"](notifications.b));
            }, ClusterRoleDetailComponent.ɵcmp = core["ɵɵdefineComponent"]({
                type: ClusterRoleDetailComponent,
                selectors: [ [ "kd-cluster-role-detail" ] ],
                decls: 2,
                vars: 4,
                consts: [ [ 3, "initialized", "objectMeta" ], [ 3, "rules", "initialized" ] ],
                template: function(rf, ctx) {
                    1 & rf && (core["ɵɵelement"](0, "kd-object-meta", 0), core["ɵɵelement"](1, "kd-policy-rule-list", 1)), 
                    2 & rf && (core["ɵɵproperty"]("initialized", ctx.isInitialized)("objectMeta", null == ctx.clusterRole ? null : ctx.clusterRole.objectMeta), 
                    core["ɵɵadvance"](1), core["ɵɵproperty"]("rules", null == ctx.clusterRole ? null : ctx.clusterRole.rules)("initialized", ctx.isInitialized));
                },
                directives: [ component.a, policyrule_component.a ],
                encapsulation: 2
            }), ClusterRoleDetailComponent;
        })();
        var clusterrole_component = __webpack_require__("1iBD");
        let component_ClusterRoleListComponent = (() => {
            class ClusterRoleListComponent {}
            return ClusterRoleListComponent.ɵfac = function(t) {
                return new (t || ClusterRoleListComponent);
            }, ClusterRoleListComponent.ɵcmp = core["ɵɵdefineComponent"]({
                type: ClusterRoleListComponent,
                selectors: [ [ "kd-cluster-role-list-state" ] ],
                decls: 1,
                vars: 0,
                template: function(rf, ctx) {
                    1 & rf && core["ɵɵelement"](0, "kd-cluster-role-list");
                },
                directives: [ clusterrole_component.a ],
                encapsulation: 2
            }), ClusterRoleListComponent;
        })();
        var routing = __webpack_require__("1spY");
        const CLUSTERROLE_LIST_ROUTE = {
            path: "",
            component: component_ClusterRoleListComponent,
            data: {
                breadcrumb: "Cluster Roles",
                parent: __webpack_require__("wSpo").a
            }
        }, CLUSTERROLE_DETAIL_ROUTE = {
            path: ":resourceName",
            component: component_ClusterRoleDetailComponent,
            data: {
                breadcrumb: "{{ resourceName }}",
                parent: CLUSTERROLE_LIST_ROUTE
            }
        };
        let routing_ClusterRoutingModule = (() => {
            class ClusterRoutingModule {}
            return ClusterRoutingModule.ɵmod = core["ɵɵdefineNgModule"]({
                type: ClusterRoutingModule
            }), ClusterRoutingModule.ɵinj = core["ɵɵdefineInjector"]({
                factory: function(t) {
                    return new (t || ClusterRoutingModule);
                },
                imports: [ [ router.RouterModule.forChild([ CLUSTERROLE_LIST_ROUTE, CLUSTERROLE_DETAIL_ROUTE, routing.a ]) ], router.RouterModule ]
            }), ClusterRoutingModule;
        })();
        __webpack_require__.d(__webpack_exports__, "ClusterRoleModule", (function() {
            return module_ClusterRoleModule;
        }));
        let module_ClusterRoleModule = (() => {
            class ClusterRoleModule {}
            return ClusterRoleModule.ɵmod = core["ɵɵdefineNgModule"]({
                type: ClusterRoleModule
            }), ClusterRoleModule.ɵinj = core["ɵɵdefineInjector"]({
                factory: function(t) {
                    return new (t || ClusterRoleModule);
                },
                imports: [ [ shared_module.a, components_module.a, routing_ClusterRoutingModule ] ]
            }), ClusterRoleModule;
        })();
    }
} ]);
//# sourceMappingURL=resource-cluster-clusterrole-module.js.map