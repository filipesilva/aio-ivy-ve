(window.webpackJsonp = window.webpackJsonp || []).push([ [ 27 ], {
    "2qLq": function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        var I18N_0, I18N_2, I18N_4, I18N_6, I18N_8, I18N_10, I18N_12, components_module = __webpack_require__("PXUV"), shared_module = __webpack_require__("MnlZ"), actionbar = __webpack_require__("SRaF"), endpoint = __webpack_require__("m/E6"), core = __webpack_require__("fXoL"), resource = __webpack_require__("KyHI"), router = __webpack_require__("tyNb"), notifications = __webpack_require__("PXtb"), component = __webpack_require__("YS1y"), card_component = __webpack_require__("TN1b"), common = __webpack_require__("ofXK"), podstatus_component = __webpack_require__("TsCr"), pod_component = __webpack_require__("D5Vd"), event_component = __webpack_require__("MmPu"), flex = __webpack_require__("XiUz"), property_component = __webpack_require__("Rx8Q"), chips_component = __webpack_require__("svQk");
        function JobDetailComponent_div_5_Template(rf, ctx) {
            if (1 & rf && (core["ɵɵelementStart"](0, "div", 8), core["ɵɵelementStart"](1, "span", 9), 
            core["ɵɵi18n"](2, I18N_2), core["ɵɵelementEnd"](), core["ɵɵelementStart"](3, "span"), 
            core["ɵɵtext"](4), core["ɵɵelementEnd"](), core["ɵɵelementEnd"]()), 2 & rf) {
                const ctx_r1282 = core["ɵɵnextContext"]();
                core["ɵɵadvance"](4), core["ɵɵtextInterpolate"](ctx_r1282.job.completions);
            }
        }
        function JobDetailComponent_div_6_Template(rf, ctx) {
            if (1 & rf && (core["ɵɵelementStart"](0, "div", 8), core["ɵɵelementStart"](1, "span", 9), 
            core["ɵɵi18n"](2, I18N_4), core["ɵɵelementEnd"](), core["ɵɵelementStart"](3, "span"), 
            core["ɵɵtext"](4), core["ɵɵelementEnd"](), core["ɵɵelementEnd"]()), 2 & rf) {
                const ctx_r1283 = core["ɵɵnextContext"]();
                core["ɵɵadvance"](4), core["ɵɵtextInterpolate"](ctx_r1283.job.parallelism);
            }
        }
        function JobDetailComponent_div_7_kd_property_1_Template(rf, ctx) {
            if (1 & rf && (core["ɵɵelementStart"](0, "kd-property"), core["ɵɵelementStart"](1, "div", 13), 
            core["ɵɵi18n"](2, I18N_6), core["ɵɵelementEnd"](), core["ɵɵelementStart"](3, "div", 14), 
            core["ɵɵtext"](4), core["ɵɵelementEnd"](), core["ɵɵelementEnd"]()), 2 & rf) {
                const ctx_r1285 = core["ɵɵnextContext"](2);
                core["ɵɵadvance"](4), core["ɵɵtextInterpolate"](ctx_r1285.job.completions);
            }
        }
        function JobDetailComponent_div_7_kd_property_2_Template(rf, ctx) {
            if (1 & rf && (core["ɵɵelementStart"](0, "kd-property"), core["ɵɵelementStart"](1, "div", 13), 
            core["ɵɵi18n"](2, I18N_8), core["ɵɵelementEnd"](), core["ɵɵelementStart"](3, "div", 14), 
            core["ɵɵtext"](4), core["ɵɵelementEnd"](), core["ɵɵelementEnd"]()), 2 & rf) {
                const ctx_r1286 = core["ɵɵnextContext"](2);
                core["ɵɵadvance"](4), core["ɵɵtextInterpolate"](ctx_r1286.job.parallelism);
            }
        }
        function JobDetailComponent_div_7_kd_property_3_Template(rf, ctx) {
            if (1 & rf && (core["ɵɵelementStart"](0, "kd-property", 15), core["ɵɵelementStart"](1, "div", 13), 
            core["ɵɵi18n"](2, I18N_10), core["ɵɵelementEnd"](), core["ɵɵelementStart"](3, "div", 14), 
            core["ɵɵelement"](4, "kd-chips", 16), core["ɵɵelementEnd"](), core["ɵɵelementEnd"]()), 
            2 & rf) {
                const ctx_r1287 = core["ɵɵnextContext"](2);
                core["ɵɵadvance"](4), core["ɵɵproperty"]("map", ctx_r1287.job.containerImages);
            }
        }
        function JobDetailComponent_div_7_kd_property_4_Template(rf, ctx) {
            if (1 & rf && (core["ɵɵelementStart"](0, "kd-property"), core["ɵɵelementStart"](1, "div", 13), 
            core["ɵɵi18n"](2, I18N_12), core["ɵɵelementEnd"](), core["ɵɵelementStart"](3, "div", 14), 
            core["ɵɵelement"](4, "kd-chips", 16), core["ɵɵelementEnd"](), core["ɵɵelementEnd"]()), 
            2 & rf) {
                const ctx_r1288 = core["ɵɵnextContext"](2);
                core["ɵɵadvance"](4), core["ɵɵproperty"]("map", ctx_r1288.job.initContainerImages);
            }
        }
        function JobDetailComponent_div_7_Template(rf, ctx) {
            if (1 & rf && (core["ɵɵelementStart"](0, "div", 10), core["ɵɵtemplate"](1, JobDetailComponent_div_7_kd_property_1_Template, 5, 1, "kd-property", 11), 
            core["ɵɵtemplate"](2, JobDetailComponent_div_7_kd_property_2_Template, 5, 1, "kd-property", 11), 
            core["ɵɵtemplate"](3, JobDetailComponent_div_7_kd_property_3_Template, 5, 1, "kd-property", 12), 
            core["ɵɵtemplate"](4, JobDetailComponent_div_7_kd_property_4_Template, 5, 1, "kd-property", 11), 
            core["ɵɵelementEnd"]()), 2 & rf) {
                const ctx_r1284 = core["ɵɵnextContext"]();
                core["ɵɵadvance"](1), core["ɵɵproperty"]("ngIf", null == ctx_r1284.job ? null : ctx_r1284.job.completions), 
                core["ɵɵadvance"](1), core["ɵɵproperty"]("ngIf", null == ctx_r1284.job ? null : ctx_r1284.job.parallelism), 
                core["ɵɵadvance"](1), core["ɵɵproperty"]("ngIf", null == ctx_r1284.job ? null : ctx_r1284.job.containerImages), 
                core["ɵɵadvance"](1), core["ɵɵproperty"]("ngIf", null == ctx_r1284.job ? null : ctx_r1284.job.initContainerImages);
            }
        }
        I18N_0 = $localize`Resource information`, I18N_2 = $localize`Completions:\u00A0`, 
        I18N_4 = $localize`Parallelism:\u00A0`, I18N_6 = $localize`Completions`, I18N_8 = $localize`Parallelism`, 
        I18N_10 = $localize`Images`, I18N_12 = $localize`Init images`;
        let component_JobDetailComponent = (() => {
            class JobDetailComponent {
                constructor(job_, actionbar_, activatedRoute_, notifications_) {
                    this.job_ = job_, this.actionbar_ = actionbar_, this.activatedRoute_ = activatedRoute_, 
                    this.notifications_ = notifications_, this.endpoint_ = endpoint.a.resource(endpoint.b.job, !0), 
                    this.isInitialized = !1;
                }
                ngOnInit() {
                    const resourceName = this.activatedRoute_.snapshot.params.resourceName, resourceNamespace = this.activatedRoute_.snapshot.params.resourceNamespace;
                    this.eventListEndpoint = this.endpoint_.child(resourceName, endpoint.b.event, resourceNamespace), 
                    this.podListEndpoint = this.endpoint_.child(resourceName, endpoint.b.pod, resourceNamespace), 
                    this.jobSubscription_ = this.job_.get(this.endpoint_.detail(), resourceName, resourceNamespace).subscribe(d => {
                        this.job = d, this.notifications_.pushErrors(d.errors), this.actionbar_.onInit.emit(new actionbar.b("Job", d.objectMeta, d.typeMeta)), 
                        this.isInitialized = !0;
                    });
                }
                ngOnDestroy() {
                    this.jobSubscription_.unsubscribe(), this.actionbar_.onDetailsLeave.emit();
                }
            }
            return JobDetailComponent.ɵfac = function(t) {
                return new (t || JobDetailComponent)(core["ɵɵdirectiveInject"](resource.a), core["ɵɵdirectiveInject"](actionbar.a), core["ɵɵdirectiveInject"](router.ActivatedRoute), core["ɵɵdirectiveInject"](notifications.b));
            }, JobDetailComponent.ɵcmp = core["ɵɵdefineComponent"]({
                type: JobDetailComponent,
                selectors: [ [ "kd-job-detail" ] ],
                decls: 11,
                vars: 10,
                consts: [ [ 3, "initialized", "objectMeta" ], [ 3, "initialized" ], [ "title", "" ], [ "description", "" ], [ "class", "kd-inline-property", 4, "ngIf" ], [ "content", "", "fxLayout", "row wrap", 4, "ngIf" ], [ 3, "podInfo", "initialized" ], [ 3, "endpoint" ], [ 1, "kd-inline-property" ], [ 1, "kd-muted-light" ], [ "content", "", "fxLayout", "row wrap" ], [ 4, "ngIf" ], [ "fxFlex", "100", 4, "ngIf" ], [ "key", "" ], [ "value", "" ], [ "fxFlex", "100" ], [ 3, "map" ] ],
                template: function(rf, ctx) {
                    1 & rf && (core["ɵɵelement"](0, "kd-object-meta", 0), core["ɵɵelementStart"](1, "kd-card", 1), 
                    core["ɵɵelementStart"](2, "div", 2), core["ɵɵi18n"](3, I18N_0), core["ɵɵelementEnd"](), 
                    core["ɵɵelementStart"](4, "div", 3), core["ɵɵtemplate"](5, JobDetailComponent_div_5_Template, 5, 1, "div", 4), 
                    core["ɵɵtemplate"](6, JobDetailComponent_div_6_Template, 5, 1, "div", 4), core["ɵɵelementEnd"](), 
                    core["ɵɵtemplate"](7, JobDetailComponent_div_7_Template, 5, 4, "div", 5), core["ɵɵelementEnd"](), 
                    core["ɵɵelement"](8, "kd-pod-status-card", 6), core["ɵɵelement"](9, "kd-pod-list", 7), 
                    core["ɵɵelement"](10, "kd-event-list", 7)), 2 & rf && (core["ɵɵproperty"]("initialized", ctx.isInitialized)("objectMeta", null == ctx.job ? null : ctx.job.objectMeta), 
                    core["ɵɵadvance"](1), core["ɵɵproperty"]("initialized", ctx.isInitialized), core["ɵɵadvance"](4), 
                    core["ɵɵproperty"]("ngIf", null == ctx.job ? null : ctx.job.completions), core["ɵɵadvance"](1), 
                    core["ɵɵproperty"]("ngIf", null == ctx.job ? null : ctx.job.parallelism), core["ɵɵadvance"](1), 
                    core["ɵɵproperty"]("ngIf", ctx.isInitialized), core["ɵɵadvance"](1), core["ɵɵproperty"]("podInfo", null == ctx.job ? null : ctx.job.podInfo)("initialized", ctx.isInitialized), 
                    core["ɵɵadvance"](1), core["ɵɵproperty"]("endpoint", ctx.podListEndpoint), core["ɵɵadvance"](1), 
                    core["ɵɵproperty"]("endpoint", ctx.eventListEndpoint));
                },
                directives: [ component.a, card_component.a, common.NgIf, podstatus_component.a, pod_component.a, event_component.a, flex.d, property_component.a, flex.b, chips_component.a ],
                encapsulation: 2
            }), JobDetailComponent;
        })();
        var job_component = __webpack_require__("Rkdh");
        let component_JobListComponent = (() => {
            class JobListComponent {}
            return JobListComponent.ɵfac = function(t) {
                return new (t || JobListComponent);
            }, JobListComponent.ɵcmp = core["ɵɵdefineComponent"]({
                type: JobListComponent,
                selectors: [ [ "kd-job-list-state" ] ],
                decls: 1,
                vars: 0,
                template: function(rf, ctx) {
                    1 & rf && core["ɵɵelement"](0, "kd-job-list");
                },
                directives: [ job_component.a ],
                encapsulation: 2
            }), JobListComponent;
        })();
        var routing = __webpack_require__("1spY");
        const JOB_LIST_ROUTE = {
            path: "",
            component: component_JobListComponent,
            data: {
                breadcrumb: "Jobs",
                parent: __webpack_require__("6XRW").a
            }
        }, JOB_DETAIL_ROUTE = {
            path: ":resourceNamespace/:resourceName",
            component: component_JobDetailComponent,
            data: {
                breadcrumb: "{{ resourceName }}",
                parent: JOB_LIST_ROUTE
            }
        };
        let routing_JobRoutingModule = (() => {
            class JobRoutingModule {}
            return JobRoutingModule.ɵmod = core["ɵɵdefineNgModule"]({
                type: JobRoutingModule
            }), JobRoutingModule.ɵinj = core["ɵɵdefineInjector"]({
                factory: function(t) {
                    return new (t || JobRoutingModule);
                },
                imports: [ [ router.RouterModule.forChild([ JOB_LIST_ROUTE, JOB_DETAIL_ROUTE, routing.b ]) ], router.RouterModule ]
            }), JobRoutingModule;
        })();
        __webpack_require__.d(__webpack_exports__, "JobModule", (function() {
            return module_JobModule;
        }));
        let module_JobModule = (() => {
            class JobModule {}
            return JobModule.ɵmod = core["ɵɵdefineNgModule"]({
                type: JobModule
            }), JobModule.ɵinj = core["ɵɵdefineInjector"]({
                factory: function(t) {
                    return new (t || JobModule);
                },
                imports: [ [ shared_module.a, components_module.a, routing_JobRoutingModule ] ]
            }), JobModule;
        })();
    }
} ]);
//# sourceMappingURL=resource-workloads-job-module.js.map