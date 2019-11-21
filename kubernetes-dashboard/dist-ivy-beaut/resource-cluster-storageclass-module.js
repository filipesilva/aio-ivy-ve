(window.webpackJsonp = window.webpackJsonp || []).push([ [ 16 ], {
    G2ag: function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        var I18N_0, I18N_2, components_module = __webpack_require__("PXUV"), shared_module = __webpack_require__("MnlZ"), actionbar = __webpack_require__("SRaF"), endpoint = __webpack_require__("m/E6"), core = __webpack_require__("fXoL"), resource = __webpack_require__("KyHI"), router = __webpack_require__("tyNb"), notifications = __webpack_require__("PXtb"), component = __webpack_require__("YS1y"), card_component = __webpack_require__("TN1b"), common = __webpack_require__("ofXK"), persistentvolume_component = __webpack_require__("+it7"), flex = __webpack_require__("XiUz"), property_component = __webpack_require__("Rx8Q"), icon = __webpack_require__("NFeN"), tooltip = __webpack_require__("Qu3c");
        function StorageClassDetailComponent_div_4_kd_property_1_Template(rf, ctx) {
            if (1 & rf && (core["ɵɵelementStart"](0, "kd-property", 8), core["ɵɵelementStart"](1, "div", 9), 
            core["ɵɵi18n"](2, I18N_2), core["ɵɵelementEnd"](), core["ɵɵelementStart"](3, "div", 10), 
            core["ɵɵtext"](4), core["ɵɵelementEnd"](), core["ɵɵelementEnd"]()), 2 & rf) {
                const ctx_r1226 = core["ɵɵnextContext"](2);
                core["ɵɵadvance"](4), core["ɵɵtextInterpolate"](null == ctx_r1226.storageClass ? null : ctx_r1226.storageClass.provisioner);
            }
        }
        function StorageClassDetailComponent_div_4_kd_property_2_Template(rf, ctx) {
            if (1 & rf && (core["ɵɵelementStart"](0, "kd-property"), core["ɵɵelementStart"](1, "div", 11), 
            core["ɵɵtext"](2), core["ɵɵelementStart"](3, "mat-icon", 12), core["ɵɵtext"](4, "tune"), 
            core["ɵɵelementEnd"](), core["ɵɵelementEnd"](), core["ɵɵelementStart"](5, "div", 10), 
            core["ɵɵtext"](6), core["ɵɵelementEnd"](), core["ɵɵelementEnd"]()), 2 & rf) {
                const parameter_r1228 = ctx.$implicit, ctx_r1227 = core["ɵɵnextContext"](2);
                core["ɵɵadvance"](2), core["ɵɵtextInterpolate1"](" ", parameter_r1228, " "), core["ɵɵadvance"](4), 
                core["ɵɵtextInterpolate"](null == ctx_r1227.storageClass ? null : ctx_r1227.storageClass.parameters[parameter_r1228]);
            }
        }
        function StorageClassDetailComponent_div_4_Template(rf, ctx) {
            if (1 & rf && (core["ɵɵelementStart"](0, "div", 5), core["ɵɵtemplate"](1, StorageClassDetailComponent_div_4_kd_property_1_Template, 5, 1, "kd-property", 6), 
            core["ɵɵtemplate"](2, StorageClassDetailComponent_div_4_kd_property_2_Template, 7, 2, "kd-property", 7), 
            core["ɵɵelementEnd"]()), 2 & rf) {
                const ctx_r1225 = core["ɵɵnextContext"]();
                core["ɵɵadvance"](1), core["ɵɵproperty"]("ngIf", null == ctx_r1225.storageClass ? null : ctx_r1225.storageClass.provisioner), 
                core["ɵɵadvance"](1), core["ɵɵproperty"]("ngForOf", ctx_r1225.getParameterNames());
            }
        }
        I18N_0 = $localize`Resource information`, I18N_2 = $localize`Provisioner`;
        let component_StorageClassDetailComponent = (() => {
            class StorageClassDetailComponent {
                constructor(storageClass_, actionbar_, activatedRoute_, notifications_) {
                    this.storageClass_ = storageClass_, this.actionbar_ = actionbar_, this.activatedRoute_ = activatedRoute_, 
                    this.notifications_ = notifications_, this.endpoint_ = endpoint.a.resource(endpoint.b.storageClass), 
                    this.isInitialized = !1;
                }
                ngOnInit() {
                    const resourceName = this.activatedRoute_.snapshot.params.resourceName;
                    this.pvListEndpoint = this.endpoint_.child(resourceName, endpoint.b.persistentVolume), 
                    this.storageClassSubscription_ = this.storageClass_.get(this.endpoint_.detail(), resourceName).subscribe(d => {
                        this.storageClass = d, this.notifications_.pushErrors(d.errors), this.actionbar_.onInit.emit(new actionbar.b("Storage Class", d.objectMeta, d.typeMeta)), 
                        this.isInitialized = !0;
                    });
                }
                ngOnDestroy() {
                    this.storageClassSubscription_.unsubscribe(), this.actionbar_.onDetailsLeave.emit();
                }
                getParameterNames() {
                    return this.storageClass.parameters ? Object.keys(this.storageClass.parameters) : [];
                }
            }
            return StorageClassDetailComponent.ɵfac = function(t) {
                return new (t || StorageClassDetailComponent)(core["ɵɵdirectiveInject"](resource.b), core["ɵɵdirectiveInject"](actionbar.a), core["ɵɵdirectiveInject"](router.ActivatedRoute), core["ɵɵdirectiveInject"](notifications.b));
            }, StorageClassDetailComponent.ɵcmp = core["ɵɵdefineComponent"]({
                type: StorageClassDetailComponent,
                selectors: [ [ "kd-storage-class-detail" ] ],
                decls: 6,
                vars: 5,
                consts: [ [ 3, "initialized", "objectMeta" ], [ 3, "initialized" ], [ "title", "" ], [ "content", "", "fxLayout", "row wrap", 4, "ngIf" ], [ 3, "endpoint" ], [ "content", "", "fxLayout", "row wrap" ], [ "fxFlex", "100", 4, "ngIf" ], [ 4, "ngFor", "ngForOf" ], [ "fxFlex", "100" ], [ "key", "" ], [ "value", "" ], [ "key", "", "fxLayout", "" ], [ "matTooltip", "Parameter", 1, "kd-storage-class-parameter-icon" ] ],
                template: function(rf, ctx) {
                    1 & rf && (core["ɵɵelement"](0, "kd-object-meta", 0), core["ɵɵelementStart"](1, "kd-card", 1), 
                    core["ɵɵelementStart"](2, "div", 2), core["ɵɵi18n"](3, I18N_0), core["ɵɵelementEnd"](), 
                    core["ɵɵtemplate"](4, StorageClassDetailComponent_div_4_Template, 3, 2, "div", 3), 
                    core["ɵɵelementEnd"](), core["ɵɵelement"](5, "kd-persistent-volume-list", 4)), 2 & rf && (core["ɵɵproperty"]("initialized", ctx.isInitialized)("objectMeta", null == ctx.storageClass ? null : ctx.storageClass.objectMeta), 
                    core["ɵɵadvance"](1), core["ɵɵproperty"]("initialized", ctx.isInitialized), core["ɵɵadvance"](3), 
                    core["ɵɵproperty"]("ngIf", ctx.isInitialized), core["ɵɵadvance"](1), core["ɵɵproperty"]("endpoint", ctx.pvListEndpoint));
                },
                directives: [ component.a, card_component.a, common.NgIf, persistentvolume_component.a, flex.d, common.NgForOf, property_component.a, flex.b, icon.a, tooltip.b ],
                styles: [ ".kd-storage-class-parameter-icon[_ngcontent-%COMP%]{font-size:12px;height:12px;max-height:12px;max-width:12px;width:12px;align-self:center;margin-left:4px}" ]
            }), StorageClassDetailComponent;
        })();
        var storageclass_component = __webpack_require__("Kykq");
        let component_StorageClassListComponent = (() => {
            class StorageClassListComponent {}
            return StorageClassListComponent.ɵfac = function(t) {
                return new (t || StorageClassListComponent);
            }, StorageClassListComponent.ɵcmp = core["ɵɵdefineComponent"]({
                type: StorageClassListComponent,
                selectors: [ [ "kd-storage-class-list-state" ] ],
                decls: 1,
                vars: 0,
                template: function(rf, ctx) {
                    1 & rf && core["ɵɵelement"](0, "kd-storage-class-list");
                },
                directives: [ storageclass_component.a ],
                encapsulation: 2
            }), StorageClassListComponent;
        })();
        var routing = __webpack_require__("1spY");
        const STORAGECLASS_LIST_ROUTE = {
            path: "",
            component: component_StorageClassListComponent,
            data: {
                breadcrumb: "Storage Classes",
                parent: __webpack_require__("wSpo").a
            }
        }, STORAGECLASS_DETAIL_ROUTE = {
            path: ":resourceName",
            component: component_StorageClassDetailComponent,
            data: {
                breadcrumb: "{{ resourceName }}",
                parent: STORAGECLASS_LIST_ROUTE
            }
        };
        let routing_StorageClassRoutingModule = (() => {
            class StorageClassRoutingModule {}
            return StorageClassRoutingModule.ɵmod = core["ɵɵdefineNgModule"]({
                type: StorageClassRoutingModule
            }), StorageClassRoutingModule.ɵinj = core["ɵɵdefineInjector"]({
                factory: function(t) {
                    return new (t || StorageClassRoutingModule);
                },
                imports: [ [ router.RouterModule.forChild([ STORAGECLASS_LIST_ROUTE, STORAGECLASS_DETAIL_ROUTE, routing.a ]) ], router.RouterModule ]
            }), StorageClassRoutingModule;
        })();
        __webpack_require__.d(__webpack_exports__, "StorageClassModule", (function() {
            return module_StorageClassModule;
        }));
        let module_StorageClassModule = (() => {
            class StorageClassModule {}
            return StorageClassModule.ɵmod = core["ɵɵdefineNgModule"]({
                type: StorageClassModule
            }), StorageClassModule.ɵinj = core["ɵɵdefineInjector"]({
                factory: function(t) {
                    return new (t || StorageClassModule);
                },
                imports: [ [ shared_module.a, components_module.a, routing_StorageClassRoutingModule ] ]
            }), StorageClassModule;
        })();
    }
} ]);
//# sourceMappingURL=resource-cluster-storageclass-module.js.map