(window.webpackJsonp = window.webpackJsonp || []).push([ [ 8 ], {
    "8h02": function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        var I18N_0, I18N_2, I18N_4, components_module = __webpack_require__("PXUV"), shared_module = __webpack_require__("MnlZ"), groupids = __webpack_require__("od+m"), groupedlist = __webpack_require__("tFbj"), core = __webpack_require__("fXoL"), common = __webpack_require__("ofXK"), component = __webpack_require__("RzvL"), daemonset_component = __webpack_require__("hbcI"), deployment_component = __webpack_require__("D3Y/"), job_component = __webpack_require__("Rkdh"), pod_component = __webpack_require__("D5Vd"), replicaset_component = __webpack_require__("ZonX"), replicationcontroller_component = __webpack_require__("JJm4"), statefulset_component = __webpack_require__("mhPB"), ingress_component = __webpack_require__("pboN"), service_component = __webpack_require__("0t1c"), configmap_component = __webpack_require__("Zv2W"), persistentvolumeclaim_component = __webpack_require__("H082"), secret_component = __webpack_require__("GXVr"), zerostate_component = __webpack_require__("/p1U"), flex = __webpack_require__("XiUz"), graphcard_component = __webpack_require__("1+Xt"), workloadstatus_component = __webpack_require__("zT9v");
        function OverviewComponent_div_4_Template(rf, ctx) {
            if (1 & rf && (core["ɵɵelementStart"](0, "div", 5), core["ɵɵelementStart"](1, "div", 6), 
            core["ɵɵelement"](2, "kd-graph-card", 7), core["ɵɵelementEnd"](), core["ɵɵelementStart"](3, "div", 6), 
            core["ɵɵelement"](4, "kd-graph-card", 8), core["ɵɵelementEnd"](), core["ɵɵelementEnd"]()), 
            2 & rf) {
                const ctx_r1229 = core["ɵɵnextContext"]();
                core["ɵɵadvance"](2), core["ɵɵproperty"]("metrics", ctx_r1229.cumulativeMetrics), 
                core["ɵɵadvance"](2), core["ɵɵproperty"]("metrics", ctx_r1229.cumulativeMetrics);
            }
        }
        function OverviewComponent_kd_workload_statuses_5_Template(rf, ctx) {
            if (1 & rf && core["ɵɵelement"](0, "kd-workload-statuses", 9), 2 & rf) {
                const ctx_r1230 = core["ɵɵnextContext"]();
                core["ɵɵproperty"]("resourcesRatio", ctx_r1230.resourcesRatio);
            }
        }
        I18N_0 = $localize`Workloads`, I18N_2 = $localize`Discovery and Load Balancing`, 
        I18N_4 = $localize`Config and Storage`;
        let component_OverviewComponent = (() => {
            class OverviewComponent extends groupedlist.a {
                hasWorkloads() {
                    return this.isGroupVisible(groupids.a.workloads);
                }
                hasDiscovery() {
                    return this.isGroupVisible(groupids.a.discovery);
                }
                hasConfig() {
                    return this.isGroupVisible(groupids.a.config);
                }
                showWorkloadStatuses() {
                    return 0 !== Object.values(this.resourcesRatio).reduce((sum, ratioItems) => sum + ratioItems.length, 0);
                }
                showGraphs() {
                    return this.cumulativeMetrics.every(metrics => metrics.dataPoints && metrics.dataPoints.length > 1);
                }
            }
            return OverviewComponent.ɵfac = function(t) {
                return ɵOverviewComponent_BaseFactory(t || OverviewComponent);
            }, OverviewComponent.ɵcmp = core["ɵɵdefineComponent"]({
                type: OverviewComponent,
                selectors: [ [ "kd-overview" ] ],
                features: [ core["ɵɵInheritDefinitionFeature"] ],
                decls: 26,
                vars: 20,
                consts: [ [ 3, "hidden" ], [ 1, "kd-card-group-header", "kd-muted", 3, "hidden" ], [ "fxLayout", "row", 4, "ngIf" ], [ 3, "resourcesRatio", 4, "ngIf" ], [ 3, "hideable", "onchange" ], [ "fxLayout", "row" ], [ 1, "graph-col" ], [ "graphTitle", "CPU Usage", "selectedMetricName", "cpu/usage_rate", 3, "metrics" ], [ "graphTitle", "Memory Usage", "selectedMetricName", "memory/usage", 3, "metrics" ], [ 3, "resourcesRatio" ] ],
                template: function(rf, ctx) {
                    1 & rf && (core["ɵɵelementStart"](0, "div", 0), core["ɵɵelementStart"](1, "div", 1), 
                    core["ɵɵi18n"](2, I18N_0), core["ɵɵelementEnd"](), core["ɵɵelementStart"](3, "div"), 
                    core["ɵɵtemplate"](4, OverviewComponent_div_4_Template, 5, 2, "div", 2), core["ɵɵtemplate"](5, OverviewComponent_kd_workload_statuses_5_Template, 1, 1, "kd-workload-statuses", 3), 
                    core["ɵɵelementStart"](6, "kd-cron-job-list", 4), core["ɵɵlistener"]("onchange", (function($event) {
                        return ctx.onListUpdate($event);
                    })), core["ɵɵelementEnd"](), core["ɵɵelementStart"](7, "kd-daemon-set-list", 4), 
                    core["ɵɵlistener"]("onchange", (function($event) {
                        return ctx.onListUpdate($event);
                    })), core["ɵɵelementEnd"](), core["ɵɵelementStart"](8, "kd-deployment-list", 4), 
                    core["ɵɵlistener"]("onchange", (function($event) {
                        return ctx.onListUpdate($event);
                    })), core["ɵɵelementEnd"](), core["ɵɵelementStart"](9, "kd-job-list", 4), core["ɵɵlistener"]("onchange", (function($event) {
                        return ctx.onListUpdate($event);
                    })), core["ɵɵelementEnd"](), core["ɵɵelementStart"](10, "kd-pod-list", 4), core["ɵɵlistener"]("onchange", (function($event) {
                        return ctx.onListUpdate($event);
                    })), core["ɵɵelementEnd"](), core["ɵɵelementStart"](11, "kd-replica-set-list", 4), 
                    core["ɵɵlistener"]("onchange", (function($event) {
                        return ctx.onListUpdate($event);
                    })), core["ɵɵelementEnd"](), core["ɵɵelementStart"](12, "kd-replication-controller-list", 4), 
                    core["ɵɵlistener"]("onchange", (function($event) {
                        return ctx.onListUpdate($event);
                    })), core["ɵɵelementEnd"](), core["ɵɵelementStart"](13, "kd-stateful-set-list", 4), 
                    core["ɵɵlistener"]("onchange", (function($event) {
                        return ctx.onListUpdate($event);
                    })), core["ɵɵelementEnd"](), core["ɵɵelementEnd"](), core["ɵɵelementStart"](14, "div", 1), 
                    core["ɵɵi18n"](15, I18N_2), core["ɵɵelementEnd"](), core["ɵɵelementStart"](16, "div"), 
                    core["ɵɵelementStart"](17, "kd-ingress-list", 4), core["ɵɵlistener"]("onchange", (function($event) {
                        return ctx.onListUpdate($event);
                    })), core["ɵɵelementEnd"](), core["ɵɵelementStart"](18, "kd-service-list", 4), core["ɵɵlistener"]("onchange", (function($event) {
                        return ctx.onListUpdate($event);
                    })), core["ɵɵelementEnd"](), core["ɵɵelementEnd"](), core["ɵɵelementStart"](19, "div", 1), 
                    core["ɵɵi18n"](20, I18N_4), core["ɵɵelementEnd"](), core["ɵɵelementStart"](21, "div"), 
                    core["ɵɵelementStart"](22, "kd-config-map-list", 4), core["ɵɵlistener"]("onchange", (function($event) {
                        return ctx.onListUpdate($event);
                    })), core["ɵɵelementEnd"](), core["ɵɵelementStart"](23, "kd-persistent-volume-claim-list", 4), 
                    core["ɵɵlistener"]("onchange", (function($event) {
                        return ctx.onListUpdate($event);
                    })), core["ɵɵelementEnd"](), core["ɵɵelementStart"](24, "kd-secret-list", 4), core["ɵɵlistener"]("onchange", (function($event) {
                        return ctx.onListUpdate($event);
                    })), core["ɵɵelementEnd"](), core["ɵɵelementEnd"](), core["ɵɵelementEnd"](), core["ɵɵelement"](25, "kd-zero-state", 0)), 
                    2 & rf && (core["ɵɵproperty"]("hidden", ctx.shouldShowZeroState()), core["ɵɵadvance"](1), 
                    core["ɵɵproperty"]("hidden", !ctx.hasWorkloads()), core["ɵɵadvance"](3), core["ɵɵproperty"]("ngIf", ctx.showGraphs()), 
                    core["ɵɵadvance"](1), core["ɵɵproperty"]("ngIf", !1), core["ɵɵadvance"](1), core["ɵɵproperty"]("hideable", !0), 
                    core["ɵɵadvance"](1), core["ɵɵproperty"]("hideable", !0), core["ɵɵadvance"](1), 
                    core["ɵɵproperty"]("hideable", !0), core["ɵɵadvance"](1), core["ɵɵproperty"]("hideable", !0), 
                    core["ɵɵadvance"](1), core["ɵɵproperty"]("hideable", !0), core["ɵɵadvance"](1), 
                    core["ɵɵproperty"]("hideable", !0), core["ɵɵadvance"](1), core["ɵɵproperty"]("hideable", !0), 
                    core["ɵɵadvance"](1), core["ɵɵproperty"]("hideable", !0), core["ɵɵadvance"](1), 
                    core["ɵɵproperty"]("hidden", !ctx.hasDiscovery()), core["ɵɵadvance"](3), core["ɵɵproperty"]("hideable", !0), 
                    core["ɵɵadvance"](1), core["ɵɵproperty"]("hideable", !0), core["ɵɵadvance"](1), 
                    core["ɵɵproperty"]("hidden", !ctx.hasConfig()), core["ɵɵadvance"](3), core["ɵɵproperty"]("hideable", !0), 
                    core["ɵɵadvance"](1), core["ɵɵproperty"]("hideable", !0), core["ɵɵadvance"](1), 
                    core["ɵɵproperty"]("hideable", !0), core["ɵɵadvance"](1), core["ɵɵproperty"]("hidden", !ctx.shouldShowZeroState()));
                },
                directives: [ common.NgIf, component.a, daemonset_component.a, deployment_component.a, job_component.a, pod_component.a, replicaset_component.a, replicationcontroller_component.a, statefulset_component.a, ingress_component.a, service_component.a, configmap_component.a, persistentvolumeclaim_component.a, secret_component.a, zerostate_component.a, flex.d, graphcard_component.a, workloadstatus_component.a ],
                styles: [ ".graph-col[_ngcontent-%COMP%]{flex:50%}" ]
            }), OverviewComponent;
        })();
        const ɵOverviewComponent_BaseFactory = core["ɵɵgetInheritedFactory"](component_OverviewComponent);
        var router = __webpack_require__("tyNb");
        const OVERVIEW_ROUTE = {
            path: "",
            component: component_OverviewComponent,
            data: {
                breadcrumb: "Overview"
            }
        };
        let routing_OverviewRoutingModule = (() => {
            class OverviewRoutingModule {}
            return OverviewRoutingModule.ɵmod = core["ɵɵdefineNgModule"]({
                type: OverviewRoutingModule
            }), OverviewRoutingModule.ɵinj = core["ɵɵdefineInjector"]({
                factory: function(t) {
                    return new (t || OverviewRoutingModule);
                },
                imports: [ [ router.RouterModule.forChild([ OVERVIEW_ROUTE ]) ], router.RouterModule ]
            }), OverviewRoutingModule;
        })();
        __webpack_require__.d(__webpack_exports__, "OverviewModule", (function() {
            return module_OverviewModule;
        }));
        let module_OverviewModule = (() => {
            class OverviewModule {}
            return OverviewModule.ɵmod = core["ɵɵdefineNgModule"]({
                type: OverviewModule
            }), OverviewModule.ɵinj = core["ɵɵdefineInjector"]({
                factory: function(t) {
                    return new (t || OverviewModule);
                },
                imports: [ [ shared_module.a, components_module.a, routing_OverviewRoutingModule ] ]
            }), OverviewModule;
        })();
    }
} ]);