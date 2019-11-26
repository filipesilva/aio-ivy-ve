        "use strict";
        __webpack_require__.d(__webpack_exports__, "b", (function() {
            return MatButtonModule;
        })), __webpack_require__.d(__webpack_exports__, "a", (function() {
            return MatButton;
        }));
        var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("ofXK"), _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("fXoL"), _angular_material_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("FKr1"), _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("u47x"), _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("R1ws");
        const _c0 = [ "mat-button", "" ], _c1 = [ "*" ], DEFAULT_ROUND_BUTTON_COLOR = "accent", BUTTON_HOST_ATTRIBUTES = [ "mat-button", "mat-flat-button", "mat-icon-button", "mat-raised-button", "mat-stroked-button", "mat-mini-fab", "mat-fab" ];
        class MatButtonBase {
            constructor(_elementRef) {
                this._elementRef = _elementRef;
            }
        }
        const _MatButtonMixinBase = Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_2__.f)(Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_2__.h)(Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_2__.g)(MatButtonBase)));
        let MatButton = (() => {
            class MatButton extends _MatButtonMixinBase {
                constructor(elementRef, _focusMonitor, _animationMode) {
                    super(elementRef), this._focusMonitor = _focusMonitor, this._animationMode = _animationMode, 
                    this.isRoundButton = this._hasHostAttributes("mat-fab", "mat-mini-fab"), this.isIconButton = this._hasHostAttributes("mat-icon-button");
                    for (const attr of BUTTON_HOST_ATTRIBUTES) this._hasHostAttributes(attr) && this._getHostElement().classList.add(attr);
                    elementRef.nativeElement.classList.add("mat-button-base"), this._focusMonitor.monitor(this._elementRef, !0), 
                    this.isRoundButton && (this.color = DEFAULT_ROUND_BUTTON_COLOR);
                }
                ngOnDestroy() {
                    this._focusMonitor.stopMonitoring(this._elementRef);
                }
                focus(origin = "program", options) {
                    this._focusMonitor.focusVia(this._getHostElement(), origin, options);
                }
                _getHostElement() {
                    return this._elementRef.nativeElement;
                }
                _isRippleDisabled() {
                    return this.disableRipple || this.disabled;
                }
                _hasHostAttributes(...attributes) {
                    return attributes.some(attribute => this._getHostElement().hasAttribute(attribute));
                }
            }
            return MatButton.ɵfac = function(t) {
                return new (t || MatButton)(_angular_core__WEBPACK_IMPORTED_MODULE_1__.Pb(_angular_core__WEBPACK_IMPORTED_MODULE_1__.k), _angular_core__WEBPACK_IMPORTED_MODULE_1__.Pb(_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_3__.d), _angular_core__WEBPACK_IMPORTED_MODULE_1__.Pb(_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__.a, 8));
            }, MatButton.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__.Jb({
                type: MatButton,
                selectors: [ [ "button", "mat-button", "" ], [ "button", "mat-raised-button", "" ], [ "button", "mat-icon-button", "" ], [ "button", "mat-fab", "" ], [ "button", "mat-mini-fab", "" ], [ "button", "mat-stroked-button", "" ], [ "button", "mat-flat-button", "" ] ],
                viewQuery: function(rf, ctx) {
                    var _t;
                    1 & rf && _angular_core__WEBPACK_IMPORTED_MODULE_1__.Jc(_angular_material_core__WEBPACK_IMPORTED_MODULE_2__.c, !0), 
                    2 & rf && _angular_core__WEBPACK_IMPORTED_MODULE_1__.qc(_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__.dc()) && (ctx.ripple = _t.first);
                },
                hostBindings: function(rf, ctx, elIndex) {
                    1 & rf && _angular_core__WEBPACK_IMPORTED_MODULE_1__.Bb(2), 2 & rf && (_angular_core__WEBPACK_IMPORTED_MODULE_1__.Cb("disabled", ctx.disabled || null), 
                    _angular_core__WEBPACK_IMPORTED_MODULE_1__.Fb("_mat-animation-noopable", "NoopAnimations" === ctx._animationMode));
                },
                inputs: {
                    disabled: "disabled",
                    disableRipple: "disableRipple",
                    color: "color"
                },
                exportAs: [ "matButton" ],
                features: [ _angular_core__WEBPACK_IMPORTED_MODULE_1__.xb ],
                attrs: _c0,
                ngContentSelectors: _c1,
                decls: 4,
                vars: 4,
                consts: [ [ 1, "mat-button-wrapper" ], [ "matRipple", "", 1, "mat-button-ripple", 3, "matRippleDisabled", "matRippleCentered", "matRippleTrigger" ], [ 1, "mat-button-focus-overlay" ] ],
                template: function(rf, ctx) {
                    1 & rf && (_angular_core__WEBPACK_IMPORTED_MODULE_1__.kc(), _angular_core__WEBPACK_IMPORTED_MODULE_1__.Vb(0, "span", 0), 
                    _angular_core__WEBPACK_IMPORTED_MODULE_1__.jc(1), _angular_core__WEBPACK_IMPORTED_MODULE_1__.Tb(), 
                    _angular_core__WEBPACK_IMPORTED_MODULE_1__.Qb(2, "div", 1), _angular_core__WEBPACK_IMPORTED_MODULE_1__.Qb(3, "div", 2)), 
                    2 & rf && (_angular_core__WEBPACK_IMPORTED_MODULE_1__.Ab(2), _angular_core__WEBPACK_IMPORTED_MODULE_1__.Fb("mat-button-ripple-round", ctx.isRoundButton || ctx.isIconButton), 
                    _angular_core__WEBPACK_IMPORTED_MODULE_1__.lc("matRippleDisabled", ctx._isRippleDisabled())("matRippleCentered", ctx.isIconButton)("matRippleTrigger", ctx._getHostElement()));
                },
                directives: [ _angular_material_core__WEBPACK_IMPORTED_MODULE_2__.c ],
                styles: [ ".mat-button .mat-button-focus-overlay,.mat-icon-button .mat-button-focus-overlay{opacity:0}.mat-button:hover .mat-button-focus-overlay,.mat-stroked-button:hover .mat-button-focus-overlay{opacity:.04}@media(hover: none){.mat-button:hover .mat-button-focus-overlay,.mat-stroked-button:hover .mat-button-focus-overlay{opacity:0}}.mat-button,.mat-icon-button,.mat-stroked-button,.mat-flat-button{box-sizing:border-box;position:relative;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;outline:none;border:none;-webkit-tap-highlight-color:transparent;display:inline-block;white-space:nowrap;text-decoration:none;vertical-align:baseline;text-align:center;margin:0;min-width:64px;line-height:36px;padding:0 16px;border-radius:4px;overflow:visible}.mat-button::-moz-focus-inner,.mat-icon-button::-moz-focus-inner,.mat-stroked-button::-moz-focus-inner,.mat-flat-button::-moz-focus-inner{border:0}.mat-button[disabled],.mat-icon-button[disabled],.mat-stroked-button[disabled],.mat-flat-button[disabled]{cursor:default}.mat-button.cdk-keyboard-focused .mat-button-focus-overlay,.mat-button.cdk-program-focused .mat-button-focus-overlay,.mat-icon-button.cdk-keyboard-focused .mat-button-focus-overlay,.mat-icon-button.cdk-program-focused .mat-button-focus-overlay,.mat-stroked-button.cdk-keyboard-focused .mat-button-focus-overlay,.mat-stroked-button.cdk-program-focused .mat-button-focus-overlay,.mat-flat-button.cdk-keyboard-focused .mat-button-focus-overlay,.mat-flat-button.cdk-program-focused .mat-button-focus-overlay{opacity:.12}.mat-button::-moz-focus-inner,.mat-icon-button::-moz-focus-inner,.mat-stroked-button::-moz-focus-inner,.mat-flat-button::-moz-focus-inner{border:0}.mat-raised-button{box-sizing:border-box;position:relative;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;outline:none;border:none;-webkit-tap-highlight-color:transparent;display:inline-block;white-space:nowrap;text-decoration:none;vertical-align:baseline;text-align:center;margin:0;min-width:64px;line-height:36px;padding:0 16px;border-radius:4px;overflow:visible;transform:translate3d(0, 0, 0);transition:background 400ms cubic-bezier(0.25, 0.8, 0.25, 1),box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1)}.mat-raised-button::-moz-focus-inner{border:0}.mat-raised-button[disabled]{cursor:default}.mat-raised-button.cdk-keyboard-focused .mat-button-focus-overlay,.mat-raised-button.cdk-program-focused .mat-button-focus-overlay{opacity:.12}.mat-raised-button::-moz-focus-inner{border:0}._mat-animation-noopable.mat-raised-button{transition:none;animation:none}.mat-stroked-button{border:1px solid currentColor;padding:0 15px;line-height:34px}.mat-stroked-button .mat-button-ripple.mat-ripple,.mat-stroked-button .mat-button-focus-overlay{top:-1px;left:-1px;right:-1px;bottom:-1px}.mat-fab{box-sizing:border-box;position:relative;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;outline:none;border:none;-webkit-tap-highlight-color:transparent;display:inline-block;white-space:nowrap;text-decoration:none;vertical-align:baseline;text-align:center;margin:0;min-width:64px;line-height:36px;padding:0 16px;border-radius:4px;overflow:visible;transform:translate3d(0, 0, 0);transition:background 400ms cubic-bezier(0.25, 0.8, 0.25, 1),box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);min-width:0;border-radius:50%;width:56px;height:56px;padding:0;flex-shrink:0}.mat-fab::-moz-focus-inner{border:0}.mat-fab[disabled]{cursor:default}.mat-fab.cdk-keyboard-focused .mat-button-focus-overlay,.mat-fab.cdk-program-focused .mat-button-focus-overlay{opacity:.12}.mat-fab::-moz-focus-inner{border:0}._mat-animation-noopable.mat-fab{transition:none;animation:none}.mat-fab .mat-button-wrapper{padding:16px 0;display:inline-block;line-height:24px}.mat-mini-fab{box-sizing:border-box;position:relative;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;outline:none;border:none;-webkit-tap-highlight-color:transparent;display:inline-block;white-space:nowrap;text-decoration:none;vertical-align:baseline;text-align:center;margin:0;min-width:64px;line-height:36px;padding:0 16px;border-radius:4px;overflow:visible;transform:translate3d(0, 0, 0);transition:background 400ms cubic-bezier(0.25, 0.8, 0.25, 1),box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);min-width:0;border-radius:50%;width:40px;height:40px;padding:0;flex-shrink:0}.mat-mini-fab::-moz-focus-inner{border:0}.mat-mini-fab[disabled]{cursor:default}.mat-mini-fab.cdk-keyboard-focused .mat-button-focus-overlay,.mat-mini-fab.cdk-program-focused .mat-button-focus-overlay{opacity:.12}.mat-mini-fab::-moz-focus-inner{border:0}._mat-animation-noopable.mat-mini-fab{transition:none;animation:none}.mat-mini-fab .mat-button-wrapper{padding:8px 0;display:inline-block;line-height:24px}.mat-icon-button{padding:0;min-width:0;width:40px;height:40px;flex-shrink:0;line-height:40px;border-radius:50%}.mat-icon-button i,.mat-icon-button .mat-icon{line-height:24px}.mat-button-ripple.mat-ripple,.mat-button-focus-overlay{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none;border-radius:inherit}.mat-button-ripple.mat-ripple:not(:empty){transform:translateZ(0)}.mat-button-focus-overlay{opacity:0;transition:opacity 200ms cubic-bezier(0.35, 0, 0.25, 1),background-color 200ms cubic-bezier(0.35, 0, 0.25, 1)}._mat-animation-noopable .mat-button-focus-overlay{transition:none}@media(-ms-high-contrast: active){.mat-button-focus-overlay{background-color:#fff}}@media(-ms-high-contrast: black-on-white){.mat-button-focus-overlay{background-color:#000}}.mat-button-ripple-round{border-radius:50%;z-index:1}.mat-button .mat-button-wrapper>*,.mat-flat-button .mat-button-wrapper>*,.mat-stroked-button .mat-button-wrapper>*,.mat-raised-button .mat-button-wrapper>*,.mat-icon-button .mat-button-wrapper>*,.mat-fab .mat-button-wrapper>*,.mat-mini-fab .mat-button-wrapper>*{vertical-align:middle}.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon-button,.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon-button{display:block;font-size:inherit;width:2.5em;height:2.5em}@media(-ms-high-contrast: active){.mat-button,.mat-flat-button,.mat-raised-button,.mat-icon-button,.mat-fab,.mat-mini-fab{outline:solid 1px}}/*# sourceMappingURL=button.css.map */\n" ],
                encapsulation: 2,
                changeDetection: 0
            }), MatButton;
        })(), MatButtonModule = (() => {
            class MatButtonModule {}
            return MatButtonModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__.Nb({
                type: MatButtonModule
            }), MatButtonModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__.Mb({
                factory: function(t) {
                    return new (t || MatButtonModule);
                },
                imports: [ [ _angular_common__WEBPACK_IMPORTED_MODULE_0__.c, _angular_material_core__WEBPACK_IMPORTED_MODULE_2__.d, _angular_material_core__WEBPACK_IMPORTED_MODULE_2__.b ], _angular_material_core__WEBPACK_IMPORTED_MODULE_2__.b ]
            }), MatButtonModule;
        })();
    