(window.webpackJsonp = window.webpackJsonp || []).push([ [ 9 ], {
    tYwi: function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        var components_module = __webpack_require__("PXUV"), shared_module = __webpack_require__("MnlZ"), core = __webpack_require__("fXoL"), pluginloader_service = __webpack_require__("VlAU"), common = __webpack_require__("ofXK"), card = __webpack_require__("Wp6s");
        const _c0 = [ "pluginViewRef" ];
        function PluginHolderComponent_mat_card_2_Template(rf, ctx) {
            1 & rf && (core["ɵɵelementStart"](0, "mat-card"), core["ɵɵtext"](1, "This plugin has no entry component"), 
            core["ɵɵelementEnd"]());
        }
        function PluginHolderComponent_ng_template_3_Template(rf, ctx) {}
        let holder_PluginHolderComponent = (() => {
            class PluginHolderComponent {
                constructor(injector, pluginLoader) {
                    this.injector = injector, this.pluginLoader = pluginLoader, this.entryError = !1;
                }
                ngOnInit() {
                    try {
                        this.loadPlugin(this.pluginName);
                    } catch (e) {
                        console.log(e);
                    }
                }
                loadPlugin(pluginName) {
                    this.pluginLoader.load(pluginName).then(moduleFactory => {
                        const moduleRef = moduleFactory.create(this.injector), entryComponent = moduleFactory.moduleType.entry;
                        try {
                            const compFactory = moduleRef.componentFactoryResolver.resolveComponentFactory(entryComponent);
                            this.vcRef.createComponent(compFactory);
                        } catch (e) {
                            this.entryError = !0;
                        }
                    });
                }
            }
            return PluginHolderComponent.ɵfac = function(t) {
                return new (t || PluginHolderComponent)(core["ɵɵdirectiveInject"](core.Injector), core["ɵɵdirectiveInject"](pluginloader_service.a));
            }, PluginHolderComponent.ɵcmp = core["ɵɵdefineComponent"]({
                type: PluginHolderComponent,
                selectors: [ [ "kd-plugin-holder" ] ],
                viewQuery: function(rf, ctx) {
                    var _t;
                    1 & rf && core["ɵɵstaticViewQuery"](_c0, !0, core.ViewContainerRef), 2 & rf && core["ɵɵqueryRefresh"](_t = core["ɵɵloadQuery"]()) && (ctx.vcRef = _t.first);
                },
                inputs: {
                    pluginName: "pluginName"
                },
                decls: 6,
                vars: 1,
                consts: [ [ 1, "plugin" ], [ 4, "ngIf" ], [ "pluginViewRef", "", "elseBlock", "" ] ],
                template: function(rf, ctx) {
                    1 & rf && (core["ɵɵelementStart"](0, "div"), core["ɵɵelementStart"](1, "div", 0), 
                    core["ɵɵtemplate"](2, PluginHolderComponent_mat_card_2_Template, 2, 0, "mat-card", 1), 
                    core["ɵɵtemplate"](3, PluginHolderComponent_ng_template_3_Template, 0, 0, "ng-template", null, 2, core["ɵɵtemplateRefExtractor"]), 
                    core["ɵɵelementEnd"](), core["ɵɵelementEnd"]()), 2 & rf && (core["ɵɵadvance"](2), 
                    core["ɵɵproperty"]("ngIf", ctx.entryError));
                },
                directives: [ common.NgIf, card.a ],
                encapsulation: 2
            }), PluginHolderComponent;
        })();
        var component = __webpack_require__("l/kb");
        let component_PluginListComponent = (() => {
            class PluginListComponent {}
            return PluginListComponent.ɵfac = function(t) {
                return new (t || PluginListComponent);
            }, PluginListComponent.ɵcmp = core["ɵɵdefineComponent"]({
                type: PluginListComponent,
                selectors: [ [ "kd-plugins" ] ],
                decls: 1,
                vars: 0,
                template: function(rf, ctx) {
                    1 & rf && core["ɵɵelement"](0, "kd-plugin-list");
                },
                directives: [ component.a ],
                encapsulation: 2
            }), PluginListComponent;
        })();
        var router = __webpack_require__("tyNb");
        const PLUGIN_LIST_ROUTE = {
            path: "",
            component: component_PluginListComponent,
            data: {
                breadcrumb: "Plugins"
            }
        }, PLUGIN_DETAIL_ROUTE = {
            path: ":pluginNamespace/:pluginName",
            component: (() => {
                class PluginDetailComponent {
                    constructor(activatedRoute_) {
                        this.activatedRoute_ = activatedRoute_;
                    }
                    pluginName() {
                        return this.activatedRoute_.snapshot.params.pluginName;
                    }
                }
                return PluginDetailComponent.ɵfac = function(t) {
                    return new (t || PluginDetailComponent)(core["ɵɵdirectiveInject"](router.ActivatedRoute));
                }, PluginDetailComponent.ɵcmp = core["ɵɵdefineComponent"]({
                    type: PluginDetailComponent,
                    selectors: [ [ "kd-plugin-detail" ] ],
                    decls: 1,
                    vars: 1,
                    consts: [ [ 3, "pluginName" ] ],
                    template: function(rf, ctx) {
                        1 & rf && core["ɵɵelement"](0, "kd-plugin-holder", 0), 2 & rf && core["ɵɵproperty"]("pluginName", ctx.pluginName());
                    },
                    directives: [ holder_PluginHolderComponent ],
                    encapsulation: 2
                }), PluginDetailComponent;
            })(),
            data: {
                breadcrumb: "{{ pluginName }}",
                parent: PLUGIN_LIST_ROUTE
            }
        };
        let routing_PluginsRoutingModule = (() => {
            class PluginsRoutingModule {}
            return PluginsRoutingModule.ɵmod = core["ɵɵdefineNgModule"]({
                type: PluginsRoutingModule
            }), PluginsRoutingModule.ɵinj = core["ɵɵdefineInjector"]({
                factory: function(t) {
                    return new (t || PluginsRoutingModule);
                },
                imports: [ [ router.RouterModule.forChild([ PLUGIN_LIST_ROUTE, PLUGIN_DETAIL_ROUTE ]) ], router.RouterModule ]
            }), PluginsRoutingModule;
        })();
        __webpack_require__.d(__webpack_exports__, "PluginModule", (function() {
            return module_PluginModule;
        }));
        let module_PluginModule = (() => {
            class PluginModule {}
            return PluginModule.ɵmod = core["ɵɵdefineNgModule"]({
                type: PluginModule
            }), PluginModule.ɵinj = core["ɵɵdefineInjector"]({
                factory: function(t) {
                    return new (t || PluginModule);
                },
                imports: [ [ shared_module.a, components_module.a, routing_PluginsRoutingModule ] ]
            }), PluginModule;
        })();
    }
} ]);
//# sourceMappingURL=plugin-module.js.map