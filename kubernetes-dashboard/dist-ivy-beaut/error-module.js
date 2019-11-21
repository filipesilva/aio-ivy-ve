(window.webpackJsonp = window.webpackJsonp || []).push([ [ 5 ], {
    INEK: function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        var components_module = __webpack_require__("PXUV"), nav_module = __webpack_require__("JiyO"), shared_module = __webpack_require__("MnlZ"), map = __webpack_require__("lJxs"), core = __webpack_require__("fXoL"), router = __webpack_require__("tyNb"), flex = __webpack_require__("XiUz"), component = __webpack_require__("TN1b"), icon = __webpack_require__("NFeN");
        const ERROR_ROUTE = {
            path: "",
            component: (() => {
                class ErrorComponent {
                    constructor(route_) {
                        this.route_ = route_;
                    }
                    ngOnInit() {
                        this.route_.paramMap.pipe(Object(map.a)(() => window.history.state)).subscribe(state => {
                            state.error && (this.error_ = state.error);
                        });
                    }
                    getErrorStatus() {
                        return this.error_ ? `${this.error_.status} (${this.error_.code})` : "Unknown Error";
                    }
                    getErrorData() {
                        return this.error_ ? this.error_.message : "No error data available.";
                    }
                }
                return ErrorComponent.ɵfac = function(t) {
                    return new (t || ErrorComponent)(core["ɵɵdirectiveInject"](router.ActivatedRoute));
                }, ErrorComponent.ɵcmp = core["ɵɵdefineComponent"]({
                    type: ErrorComponent,
                    selectors: [ [ "kd-error" ] ],
                    decls: 9,
                    vars: 3,
                    consts: [ [ "fxLayoutAlign", "center" ], [ "fxFlex", "none", 3, "expandable" ], [ "title", "", "fxLayout", "" ], [ 1, "kd-error-icon" ], [ "content", "" ] ],
                    template: function(rf, ctx) {
                        1 & rf && (core["ɵɵelementStart"](0, "div", 0), core["ɵɵelementStart"](1, "kd-card", 1), 
                        core["ɵɵelementStart"](2, "div", 2), core["ɵɵelementStart"](3, "mat-icon", 3), core["ɵɵtext"](4, "error_outline"), 
                        core["ɵɵelementEnd"](), core["ɵɵelementStart"](5, "div"), core["ɵɵtext"](6), core["ɵɵelementEnd"](), 
                        core["ɵɵelementEnd"](), core["ɵɵelementStart"](7, "div", 4), core["ɵɵtext"](8), 
                        core["ɵɵelementEnd"](), core["ɵɵelementEnd"](), core["ɵɵelementEnd"]()), 2 & rf && (core["ɵɵadvance"](1), 
                        core["ɵɵproperty"]("expandable", !1), core["ɵɵadvance"](5), core["ɵɵtextInterpolate"](ctx.getErrorStatus()), 
                        core["ɵɵadvance"](2), core["ɵɵtextInterpolate1"](" ", ctx.getErrorData(), " "));
                    },
                    directives: [ flex.c, component.a, flex.b, flex.d, icon.a ],
                    styles: [ ".kd-about-logo-icon[_ngcontent-%COMP%]{font-size:64px;height:64px;max-height:64px;max-width:64px;width:64px;margin:0 16px 0 0}.kd-error-icon[_ngcontent-%COMP%]{margin-right:8px}" ]
                }), ErrorComponent;
            })(),
            data: {
                breadcrumb: "Error"
            }
        };
        let routing_ErrorRoutingModule = (() => {
            class ErrorRoutingModule {}
            return ErrorRoutingModule.ɵmod = core["ɵɵdefineNgModule"]({
                type: ErrorRoutingModule
            }), ErrorRoutingModule.ɵinj = core["ɵɵdefineInjector"]({
                factory: function(t) {
                    return new (t || ErrorRoutingModule);
                },
                imports: [ [ router.RouterModule.forChild([ ERROR_ROUTE ]) ], router.RouterModule ]
            }), ErrorRoutingModule;
        })();
        __webpack_require__.d(__webpack_exports__, "ErrorModule", (function() {
            return module_ErrorModule;
        }));
        let module_ErrorModule = (() => {
            class ErrorModule {}
            return ErrorModule.ɵmod = core["ɵɵdefineNgModule"]({
                type: ErrorModule
            }), ErrorModule.ɵinj = core["ɵɵdefineInjector"]({
                factory: function(t) {
                    return new (t || ErrorModule);
                },
                imports: [ [ shared_module.a, components_module.a, nav_module.a, routing_ErrorRoutingModule ] ]
            }), ErrorModule;
        })();
    }
} ]);
//# sourceMappingURL=error-module.js.map