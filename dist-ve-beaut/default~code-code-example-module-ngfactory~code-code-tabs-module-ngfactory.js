(window.webpackJsonp = window.webpackJsonp || []).push([ [ 1 ], {
    "/ck9": function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.d(__webpack_exports__, "a", (function() {
            return CopierService;
        }));
        class CopierService {
            createFake(text) {
                const docElem = document.documentElement, isRTL = "rtl" === docElem.getAttribute("dir");
                this.fakeElem = document.createElement("textarea"), this.fakeElem.style.fontSize = "12pt", 
                this.fakeElem.style.border = "0", this.fakeElem.style.padding = "0", this.fakeElem.style.margin = "0", 
                this.fakeElem.style.position = "absolute", this.fakeElem.style[isRTL ? "right" : "left"] = "-9999px";
                const yPosition = window.pageYOffset || docElem.scrollTop;
                this.fakeElem.style.top = yPosition + "px", this.fakeElem.setAttribute("readonly", ""), 
                this.fakeElem.value = text, document.body.appendChild(this.fakeElem), this.fakeElem.select(), 
                this.fakeElem.setSelectionRange(0, this.fakeElem.value.length);
            }
            removeFake() {
                this.fakeElem && (document.body.removeChild(this.fakeElem), this.fakeElem = null);
            }
            copyText(text) {
                try {
                    return this.createFake(text), document.execCommand("copy");
                } catch (err) {
                    return !1;
                } finally {
                    this.removeFake();
                }
            }
        }
    },
    "007U": function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.d(__webpack_exports__, "a", (function() {
            return MatSnackBarContainerNgFactory;
        })), __webpack_require__.d(__webpack_exports__, "b", (function() {
            return SimpleSnackBarNgFactory;
        }));
        var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("8Y7J"), _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("zHaW"), _angular_common__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_require__("1O3W"), 
        __webpack_require__("SVse")), _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_5__ = (__webpack_require__("9gLZ"), 
        __webpack_require__("1z/I")), _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = (__webpack_require__("SCoL"), 
        __webpack_require__("7KAL"), __webpack_require__("UhP/"), __webpack_require__("Dxy4")), _button_index_ngfactory__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("1Xc+"), _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("YEUz"), _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("omvX"), RenderType_MatSnackBarContainer = _angular_core__WEBPACK_IMPORTED_MODULE_0__.ub({
            encapsulation: 2,
            styles: [ ".mat-snack-bar-container{border-radius:4px;box-sizing:border-box;display:block;margin:24px;max-width:33vw;min-width:344px;padding:14px 16px;min-height:48px;transform-origin:center}@media(-ms-high-contrast: active){.mat-snack-bar-container{border:solid 1px}}.mat-snack-bar-handset{width:100%}.mat-snack-bar-handset .mat-snack-bar-container{margin:8px;max-width:100%;min-width:0;width:100%}/*# sourceMappingURL=snack-bar-container.css.map */\n" ],
            data: {
                animation: [ {
                    type: 7,
                    name: "state",
                    definitions: [ {
                        type: 0,
                        name: "void, hidden",
                        styles: {
                            type: 6,
                            styles: {
                                transform: "scale(0.8)",
                                opacity: 0
                            },
                            offset: null
                        },
                        options: void 0
                    }, {
                        type: 0,
                        name: "visible",
                        styles: {
                            type: 6,
                            styles: {
                                transform: "scale(1)",
                                opacity: 1
                            },
                            offset: null
                        },
                        options: void 0
                    }, {
                        type: 1,
                        expr: "* => visible",
                        animation: {
                            type: 4,
                            styles: null,
                            timings: "150ms cubic-bezier(0, 0, 0.2, 1)"
                        },
                        options: null
                    }, {
                        type: 1,
                        expr: "* => void, * => hidden",
                        animation: {
                            type: 4,
                            styles: {
                                type: 6,
                                styles: {
                                    opacity: 0
                                },
                                offset: null
                            },
                            timings: "75ms cubic-bezier(0.4, 0.0, 1, 1)"
                        },
                        options: null
                    } ],
                    options: {}
                } ]
            }
        });
        function View_MatSnackBarContainer_1(_l) {
            return _angular_core__WEBPACK_IMPORTED_MODULE_0__.Ub(0, [ (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__.gb(0, null, null, 0)) ], null, null);
        }
        function View_MatSnackBarContainer_0(_l) {
            return _angular_core__WEBPACK_IMPORTED_MODULE_0__.Ub(0, [ _angular_core__WEBPACK_IMPORTED_MODULE_0__.Nb(402653184, 1, {
                _portalOutlet: 0
            }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__.gb(16777216, null, null, 1, null, View_MatSnackBarContainer_1)), _angular_core__WEBPACK_IMPORTED_MODULE_0__.vb(2, 212992, [ [ 1, 4 ] ], 0, _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_5__.c, [ _angular_core__WEBPACK_IMPORTED_MODULE_0__.j, _angular_core__WEBPACK_IMPORTED_MODULE_0__.O ], {
                portal: [ 0, "portal" ]
            }, null) ], (function(_ck, _v) {
                _ck(_v, 2, 0, "");
            }), null);
        }
        function View_MatSnackBarContainer_Host_0(_l) {
            return _angular_core__WEBPACK_IMPORTED_MODULE_0__.Ub(0, [ (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__.wb(0, 0, null, null, 1, "snack-bar-container", [ [ "class", "mat-snack-bar-container" ] ], [ [ 1, "role", 0 ], [ 40, "@state", 0 ] ], [ [ "component", "@state.done" ] ], (function(_v, en, $event) {
                var ad = !0;
                return "component:@state.done" === en && (ad = !1 !== _angular_core__WEBPACK_IMPORTED_MODULE_0__.Jb(_v, 1).onAnimationEnd($event) && ad), 
                ad;
            }), View_MatSnackBarContainer_0, RenderType_MatSnackBarContainer)), _angular_core__WEBPACK_IMPORTED_MODULE_0__.vb(1, 180224, null, 0, _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_1__.d, [ _angular_core__WEBPACK_IMPORTED_MODULE_0__.y, _angular_core__WEBPACK_IMPORTED_MODULE_0__.k, _angular_core__WEBPACK_IMPORTED_MODULE_0__.h, _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_1__.c ], null, null) ], null, (function(_ck, _v) {
                _ck(_v, 0, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__.Jb(_v, 1)._role, _angular_core__WEBPACK_IMPORTED_MODULE_0__.Jb(_v, 1)._animationState);
            }));
        }
        var MatSnackBarContainerNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__.sb("snack-bar-container", _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_1__.d, View_MatSnackBarContainer_Host_0, {}, {}, []), RenderType_SimpleSnackBar = _angular_core__WEBPACK_IMPORTED_MODULE_0__.ub({
            encapsulation: 2,
            styles: [ ".mat-simple-snackbar{display:flex;justify-content:space-between;align-items:center;line-height:20px;opacity:1}.mat-simple-snackbar-action{flex-shrink:0;margin:-8px -8px -8px 8px}.mat-simple-snackbar-action button{max-height:36px;min-width:0}[dir=rtl] .mat-simple-snackbar-action{margin-left:-8px;margin-right:8px}/*# sourceMappingURL=simple-snack-bar.css.map */\n" ],
            data: {}
        });
        function View_SimpleSnackBar_1(_l) {
            return _angular_core__WEBPACK_IMPORTED_MODULE_0__.Ub(0, [ (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__.wb(0, 0, null, null, 3, "div", [ [ "class", "mat-simple-snackbar-action" ] ], null, null, null, null, null)), (_l()(), 
            _angular_core__WEBPACK_IMPORTED_MODULE_0__.wb(1, 0, null, null, 2, "button", [ [ "mat-button", "" ] ], [ [ 1, "disabled", 0 ], [ 2, "_mat-animation-noopable", null ] ], [ [ null, "click" ] ], (function(_v, en, $event) {
                var ad = !0;
                return "click" === en && (ad = !1 !== _v.component.action() && ad), ad;
            }), _button_index_ngfactory__WEBPACK_IMPORTED_MODULE_10__.b, _button_index_ngfactory__WEBPACK_IMPORTED_MODULE_10__.a)), _angular_core__WEBPACK_IMPORTED_MODULE_0__.vb(2, 180224, null, 0, _angular_material_button__WEBPACK_IMPORTED_MODULE_9__.b, [ _angular_core__WEBPACK_IMPORTED_MODULE_0__.k, _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_11__.d, [ 2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__.a ] ], null, null), (_l()(), 
            _angular_core__WEBPACK_IMPORTED_MODULE_0__.Rb(3, 0, [ "", "" ])) ], null, (function(_ck, _v) {
                var _co = _v.component;
                _ck(_v, 1, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__.Jb(_v, 2).disabled || null, "NoopAnimations" === _angular_core__WEBPACK_IMPORTED_MODULE_0__.Jb(_v, 2)._animationMode), 
                _ck(_v, 3, 0, _co.data.action);
            }));
        }
        function View_SimpleSnackBar_0(_l) {
            return _angular_core__WEBPACK_IMPORTED_MODULE_0__.Ub(2, [ (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__.wb(0, 0, null, null, 1, "span", [], null, null, null, null, null)), (_l()(), 
            _angular_core__WEBPACK_IMPORTED_MODULE_0__.Rb(1, null, [ "", "" ])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__.gb(16777216, null, null, 1, null, View_SimpleSnackBar_1)), _angular_core__WEBPACK_IMPORTED_MODULE_0__.vb(3, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__.k, [ _angular_core__WEBPACK_IMPORTED_MODULE_0__.O, _angular_core__WEBPACK_IMPORTED_MODULE_0__.L ], {
                ngIf: [ 0, "ngIf" ]
            }, null) ], (function(_ck, _v) {
                _ck(_v, 3, 0, _v.component.hasAction);
            }), (function(_ck, _v) {
                _ck(_v, 1, 0, _v.component.data.message);
            }));
        }
        function View_SimpleSnackBar_Host_0(_l) {
            return _angular_core__WEBPACK_IMPORTED_MODULE_0__.Ub(0, [ (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__.wb(0, 0, null, null, 1, "simple-snack-bar", [ [ "class", "mat-simple-snackbar" ] ], null, null, null, View_SimpleSnackBar_0, RenderType_SimpleSnackBar)), _angular_core__WEBPACK_IMPORTED_MODULE_0__.vb(1, 49152, null, 0, _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_1__.g, [ _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_1__.f, _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_1__.a ], null, null) ], null, null);
        }
        var SimpleSnackBarNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__.sb("simple-snack-bar", _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_1__.g, View_SimpleSnackBar_Host_0, {}, {}, []);
    },
    "0GXo": function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.d(__webpack_exports__, "b", (function() {
            return RenderType_CodeComponent;
        })), __webpack_require__.d(__webpack_exports__, "c", (function() {
            return View_CodeComponent_0;
        })), __webpack_require__.d(__webpack_exports__, "a", (function() {
            return CodeComponentNgFactory;
        }));
        var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("8Y7J"), _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("SVse"), _code_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("6CTB"), _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("zHaW"), _pretty_printer_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("vVVL"), _shared_copier_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("/ck9"), _shared_logger_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("vHPH"), RenderType_CodeComponent = _angular_core__WEBPACK_IMPORTED_MODULE_0__.ub({
            encapsulation: 2,
            styles: [],
            data: {}
        });
        function View_CodeComponent_1(_l) {
            return _angular_core__WEBPACK_IMPORTED_MODULE_0__.Ub(0, [ (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__.wb(0, 0, null, null, 4, "button", [ [ "class", "material-icons copy-button no-print" ], [ "title", "Copy code snippet" ] ], [ [ 1, "aria-label", 0 ] ], [ [ null, "click" ] ], (function(_v, en, $event) {
                var ad = !0;
                return "click" === en && (ad = !1 !== _v.component.doCopy() && ad), ad;
            }), null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__.Rb(-1, null, [ "\n        " ])), (_l()(), 
            _angular_core__WEBPACK_IMPORTED_MODULE_0__.wb(2, 0, null, null, 1, "span", [ [ "aria-hidden", "true" ] ], null, null, null, null, null)), (_l()(), 
            _angular_core__WEBPACK_IMPORTED_MODULE_0__.Rb(-1, null, [ "content_copy" ])), (_l()(), 
            _angular_core__WEBPACK_IMPORTED_MODULE_0__.Rb(-1, null, [ "\n      " ])) ], null, (function(_ck, _v) {
                _ck(_v, 0, 0, _v.component.ariaLabel);
            }));
        }
        function View_CodeComponent_0(_l) {
            return _angular_core__WEBPACK_IMPORTED_MODULE_0__.Ub(0, [ _angular_core__WEBPACK_IMPORTED_MODULE_0__.Nb(402653184, 1, {
                codeContainer: 0
            }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__.wb(1, 0, null, null, 6, "pre", [], [ [ 8, "className", 0 ] ], null, null, null, null)), (_l()(), 
            _angular_core__WEBPACK_IMPORTED_MODULE_0__.Rb(-1, null, [ "      " ])), (_l()(), 
            _angular_core__WEBPACK_IMPORTED_MODULE_0__.gb(16777216, null, null, 1, null, View_CodeComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_0__.vb(4, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_1__.k, [ _angular_core__WEBPACK_IMPORTED_MODULE_0__.O, _angular_core__WEBPACK_IMPORTED_MODULE_0__.L ], {
                ngIf: [ 0, "ngIf" ]
            }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__.Rb(-1, null, [ "\n      " ])), (_l()(), 
            _angular_core__WEBPACK_IMPORTED_MODULE_0__.wb(6, 0, [ [ 1, 0 ], [ "codeContainer", 1 ] ], null, 0, "code", [ [ "class", "animated fadeIn" ] ], null, null, null, null, null)), (_l()(), 
            _angular_core__WEBPACK_IMPORTED_MODULE_0__.Rb(-1, null, [ "\n    " ])) ], (function(_ck, _v) {
                _ck(_v, 4, 0, !_v.component.hideCopy);
            }), (function(_ck, _v) {
                _ck(_v, 1, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__.Bb(1, "prettyprint lang-", _v.component.language, ""));
            }));
        }
        function View_CodeComponent_Host_0(_l) {
            return _angular_core__WEBPACK_IMPORTED_MODULE_0__.Ub(0, [ (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__.wb(0, 0, null, null, 1, "aio-code", [], null, null, null, View_CodeComponent_0, RenderType_CodeComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_0__.vb(1, 573440, null, 0, _code_component__WEBPACK_IMPORTED_MODULE_2__.a, [ _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__.b, _pretty_printer_service__WEBPACK_IMPORTED_MODULE_4__.a, _shared_copier_service__WEBPACK_IMPORTED_MODULE_5__.a, _shared_logger_service__WEBPACK_IMPORTED_MODULE_6__.a ], null, null) ], null, null);
        }
        var CodeComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__.sb("aio-code", _code_component__WEBPACK_IMPORTED_MODULE_2__.a, View_CodeComponent_Host_0, {
            hideCopy: "hideCopy",
            language: "language",
            linenums: "linenums",
            path: "path",
            region: "region",
            header: "header"
        }, {
            codeFormatted: "codeFormatted"
        }, []);
    },
    "1O3W": function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.d(__webpack_exports__, "h", (function() {
            return CDK_CONNECTED_OVERLAY_SCROLL_STRATEGY;
        })), __webpack_require__.d(__webpack_exports__, "i", (function() {
            return CDK_CONNECTED_OVERLAY_SCROLL_STRATEGY_PROVIDER_FACTORY;
        })), __webpack_require__.d(__webpack_exports__, "b", (function() {
            return OverlayConfig;
        })), __webpack_require__.d(__webpack_exports__, "g", (function() {
            return ScrollStrategyOptions;
        })), __webpack_require__.d(__webpack_exports__, "e", (function() {
            return OverlayModule;
        })), __webpack_require__.d(__webpack_exports__, "a", (function() {
            return Overlay;
        })), __webpack_require__.d(__webpack_exports__, "c", (function() {
            return OverlayContainer;
        })), __webpack_require__.d(__webpack_exports__, "d", (function() {
            return OverlayKeyboardDispatcher;
        })), __webpack_require__.d(__webpack_exports__, "f", (function() {
            return OverlayPositionBuilder;
        }));
        var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("7KAL"), _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("SVse"), _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("8Y7J"), _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("8LU1"), _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("1z/I"), rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("XNiG"), rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("quSY"), rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("HDdC"), rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("VRyK"), rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("IzEk"), rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("1G5W"), _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("SCoL");
        __webpack_require__("Ht+U");
        class BlockScrollStrategy {
            constructor(_viewportRuler, document) {
                this._viewportRuler = _viewportRuler, this._previousHTMLStyles = {
                    top: "",
                    left: ""
                }, this._isEnabled = !1, this._document = document;
            }
            attach() {}
            enable() {
                if (this._canBeEnabled()) {
                    const root = this._document.documentElement;
                    this._previousScrollPosition = this._viewportRuler.getViewportScrollPosition(), 
                    this._previousHTMLStyles.left = root.style.left || "", this._previousHTMLStyles.top = root.style.top || "", 
                    root.style.left = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__.c)(-this._previousScrollPosition.left), 
                    root.style.top = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__.c)(-this._previousScrollPosition.top), 
                    root.classList.add("cdk-global-scrollblock"), this._isEnabled = !0;
                }
            }
            disable() {
                if (this._isEnabled) {
                    const html = this._document.documentElement, htmlStyle = html.style, bodyStyle = this._document.body.style, previousHtmlScrollBehavior = htmlStyle.scrollBehavior || "", previousBodyScrollBehavior = bodyStyle.scrollBehavior || "";
                    this._isEnabled = !1, htmlStyle.left = this._previousHTMLStyles.left, htmlStyle.top = this._previousHTMLStyles.top, 
                    html.classList.remove("cdk-global-scrollblock"), htmlStyle.scrollBehavior = bodyStyle.scrollBehavior = "auto", 
                    window.scroll(this._previousScrollPosition.left, this._previousScrollPosition.top), 
                    htmlStyle.scrollBehavior = previousHtmlScrollBehavior, bodyStyle.scrollBehavior = previousBodyScrollBehavior;
                }
            }
            _canBeEnabled() {
                if (this._document.documentElement.classList.contains("cdk-global-scrollblock") || this._isEnabled) return !1;
                const body = this._document.body, viewport = this._viewportRuler.getViewportSize();
                return body.scrollHeight > viewport.height || body.scrollWidth > viewport.width;
            }
        }
        function getMatScrollStrategyAlreadyAttachedError() {
            return Error("Scroll strategy has already been attached.");
        }
        class CloseScrollStrategy {
            constructor(_scrollDispatcher, _ngZone, _viewportRuler, _config) {
                this._scrollDispatcher = _scrollDispatcher, this._ngZone = _ngZone, this._viewportRuler = _viewportRuler, 
                this._config = _config, this._scrollSubscription = null, this._detach = () => {
                    this.disable(), this._overlayRef.hasAttached() && this._ngZone.run(() => this._overlayRef.detach());
                };
            }
            attach(overlayRef) {
                if (this._overlayRef) throw getMatScrollStrategyAlreadyAttachedError();
                this._overlayRef = overlayRef;
            }
            enable() {
                if (this._scrollSubscription) return;
                const stream = this._scrollDispatcher.scrolled(0);
                this._config && this._config.threshold && this._config.threshold > 1 ? (this._initialScrollPosition = this._viewportRuler.getViewportScrollPosition().top, 
                this._scrollSubscription = stream.subscribe(() => {
                    const scrollPosition = this._viewportRuler.getViewportScrollPosition().top;
                    Math.abs(scrollPosition - this._initialScrollPosition) > this._config.threshold ? this._detach() : this._overlayRef.updatePosition();
                })) : this._scrollSubscription = stream.subscribe(this._detach);
            }
            disable() {
                this._scrollSubscription && (this._scrollSubscription.unsubscribe(), this._scrollSubscription = null);
            }
            detach() {
                this.disable(), this._overlayRef = null;
            }
        }
        class NoopScrollStrategy {
            enable() {}
            disable() {}
            attach() {}
        }
        function isElementScrolledOutsideView(element, scrollContainers) {
            return scrollContainers.some(containerBounds => element.bottom < containerBounds.top || element.top > containerBounds.bottom || element.right < containerBounds.left || element.left > containerBounds.right);
        }
        function isElementClippedByScrolling(element, scrollContainers) {
            return scrollContainers.some(scrollContainerRect => element.top < scrollContainerRect.top || element.bottom > scrollContainerRect.bottom || element.left < scrollContainerRect.left || element.right > scrollContainerRect.right);
        }
        class RepositionScrollStrategy {
            constructor(_scrollDispatcher, _viewportRuler, _ngZone, _config) {
                this._scrollDispatcher = _scrollDispatcher, this._viewportRuler = _viewportRuler, 
                this._ngZone = _ngZone, this._config = _config, this._scrollSubscription = null;
            }
            attach(overlayRef) {
                if (this._overlayRef) throw getMatScrollStrategyAlreadyAttachedError();
                this._overlayRef = overlayRef;
            }
            enable() {
                this._scrollSubscription || (this._scrollSubscription = this._scrollDispatcher.scrolled(this._config ? this._config.scrollThrottle : 0).subscribe(() => {
                    if (this._overlayRef.updatePosition(), this._config && this._config.autoClose) {
                        const overlayRect = this._overlayRef.overlayElement.getBoundingClientRect(), {width: width, height: height} = this._viewportRuler.getViewportSize();
                        isElementScrolledOutsideView(overlayRect, [ {
                            width: width,
                            height: height,
                            bottom: height,
                            right: width,
                            top: 0,
                            left: 0
                        } ]) && (this.disable(), this._ngZone.run(() => this._overlayRef.detach()));
                    }
                }));
            }
            disable() {
                this._scrollSubscription && (this._scrollSubscription.unsubscribe(), this._scrollSubscription = null);
            }
            detach() {
                this.disable(), this._overlayRef = null;
            }
        }
        let ScrollStrategyOptions = (() => {
            class ScrollStrategyOptions {
                constructor(_scrollDispatcher, _viewportRuler, _ngZone, document) {
                    this._scrollDispatcher = _scrollDispatcher, this._viewportRuler = _viewportRuler, 
                    this._ngZone = _ngZone, this.noop = () => new NoopScrollStrategy, this.close = config => new CloseScrollStrategy(this._scrollDispatcher, this._ngZone, this._viewportRuler, config), 
                    this.block = () => new BlockScrollStrategy(this._viewportRuler, this._document), 
                    this.reposition = config => new RepositionScrollStrategy(this._scrollDispatcher, this._viewportRuler, this._ngZone, config), 
                    this._document = document;
                }
            }
            return ScrollStrategyOptions.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__.Yb)({
                factory: function() {
                    return new ScrollStrategyOptions(Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__.Zb)(_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_0__.b), Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__.Zb)(_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_0__.e), Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__.Zb)(_angular_core__WEBPACK_IMPORTED_MODULE_2__.y), Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__.Zb)(_angular_common__WEBPACK_IMPORTED_MODULE_1__.d));
                },
                token: ScrollStrategyOptions,
                providedIn: "root"
            }), ScrollStrategyOptions;
        })();
        class OverlayConfig {
            constructor(config) {
                if (this.scrollStrategy = new NoopScrollStrategy, this.panelClass = "", this.hasBackdrop = !1, 
                this.backdropClass = "cdk-overlay-dark-backdrop", this.disposeOnNavigation = !1, 
                config) {
                    const configKeys = Object.keys(config);
                    for (const key of configKeys) void 0 !== config[key] && (this[key] = config[key]);
                }
            }
        }
        class ConnectionPositionPair {
            constructor(origin, overlay, offsetX, offsetY, panelClass) {
                this.offsetX = offsetX, this.offsetY = offsetY, this.panelClass = panelClass, this.originX = origin.originX, 
                this.originY = origin.originY, this.overlayX = overlay.overlayX, this.overlayY = overlay.overlayY;
            }
        }
        class ConnectedOverlayPositionChange {
            constructor(connectionPair, scrollableViewProperties) {
                this.connectionPair = connectionPair, this.scrollableViewProperties = scrollableViewProperties;
            }
        }
        function validateVerticalPosition(property, value) {
            if ("top" !== value && "bottom" !== value && "center" !== value) throw Error(`ConnectedPosition: Invalid ${property} "${value}". ` + 'Expected "top", "bottom" or "center".');
        }
        function validateHorizontalPosition(property, value) {
            if ("start" !== value && "end" !== value && "center" !== value) throw Error(`ConnectedPosition: Invalid ${property} "${value}". ` + 'Expected "start", "end" or "center".');
        }
        let OverlayKeyboardDispatcher = (() => {
            class OverlayKeyboardDispatcher {
                constructor(document) {
                    this._attachedOverlays = [], this._keydownListener = event => {
                        const overlays = this._attachedOverlays;
                        for (let i = overlays.length - 1; i > -1; i--) if (overlays[i]._keydownEventSubscriptions > 0) {
                            overlays[i]._keydownEvents.next(event);
                            break;
                        }
                    }, this._document = document;
                }
                ngOnDestroy() {
                    this._detach();
                }
                add(overlayRef) {
                    this.remove(overlayRef), this._isAttached || (this._document.body.addEventListener("keydown", this._keydownListener), 
                    this._isAttached = !0), this._attachedOverlays.push(overlayRef);
                }
                remove(overlayRef) {
                    const index = this._attachedOverlays.indexOf(overlayRef);
                    index > -1 && this._attachedOverlays.splice(index, 1), 0 === this._attachedOverlays.length && this._detach();
                }
                _detach() {
                    this._isAttached && (this._document.body.removeEventListener("keydown", this._keydownListener), 
                    this._isAttached = !1);
                }
            }
            return OverlayKeyboardDispatcher.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__.Yb)({
                factory: function() {
                    return new OverlayKeyboardDispatcher(Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__.Zb)(_angular_common__WEBPACK_IMPORTED_MODULE_1__.d));
                },
                token: OverlayKeyboardDispatcher,
                providedIn: "root"
            }), OverlayKeyboardDispatcher;
        })(), OverlayContainer = (() => {
            class OverlayContainer {
                constructor(document) {
                    this._document = document;
                }
                ngOnDestroy() {
                    this._containerElement && this._containerElement.parentNode && this._containerElement.parentNode.removeChild(this._containerElement);
                }
                getContainerElement() {
                    return this._containerElement || this._createContainer(), this._containerElement;
                }
                _createContainer() {
                    const previousContainers = this._document.getElementsByClassName("cdk-overlay-container");
                    for (let i = 0; i < previousContainers.length; i++) previousContainers[i].parentNode.removeChild(previousContainers[i]);
                    const container = this._document.createElement("div");
                    container.classList.add("cdk-overlay-container"), this._document.body.appendChild(container), 
                    this._containerElement = container;
                }
            }
            return OverlayContainer.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__.Yb)({
                factory: function() {
                    return new OverlayContainer(Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__.Zb)(_angular_common__WEBPACK_IMPORTED_MODULE_1__.d));
                },
                token: OverlayContainer,
                providedIn: "root"
            }), OverlayContainer;
        })();
        class OverlayRef {
            constructor(_portalOutlet, _host, _pane, _config, _ngZone, _keyboardDispatcher, _document, _location) {
                this._portalOutlet = _portalOutlet, this._host = _host, this._pane = _pane, this._config = _config, 
                this._ngZone = _ngZone, this._keyboardDispatcher = _keyboardDispatcher, this._document = _document, 
                this._location = _location, this._backdropElement = null, this._backdropClick = new rxjs__WEBPACK_IMPORTED_MODULE_5__.a, 
                this._attachments = new rxjs__WEBPACK_IMPORTED_MODULE_5__.a, this._detachments = new rxjs__WEBPACK_IMPORTED_MODULE_5__.a, 
                this._locationChanges = rxjs__WEBPACK_IMPORTED_MODULE_6__.a.EMPTY, this._backdropClickHandler = event => this._backdropClick.next(event), 
                this._keydownEventsObservable = new rxjs__WEBPACK_IMPORTED_MODULE_7__.a(observer => {
                    const subscription = this._keydownEvents.subscribe(observer);
                    return this._keydownEventSubscriptions++, () => {
                        subscription.unsubscribe(), this._keydownEventSubscriptions--;
                    };
                }), this._keydownEvents = new rxjs__WEBPACK_IMPORTED_MODULE_5__.a, this._keydownEventSubscriptions = 0, 
                _config.scrollStrategy && (this._scrollStrategy = _config.scrollStrategy, this._scrollStrategy.attach(this)), 
                this._positionStrategy = _config.positionStrategy;
            }
            get overlayElement() {
                return this._pane;
            }
            get backdropElement() {
                return this._backdropElement;
            }
            get hostElement() {
                return this._host;
            }
            attach(portal) {
                let attachResult = this._portalOutlet.attach(portal);
                return this._positionStrategy && this._positionStrategy.attach(this), !this._host.parentElement && this._previousHostParent && this._previousHostParent.appendChild(this._host), 
                this._updateStackingOrder(), this._updateElementSize(), this._updateElementDirection(), 
                this._scrollStrategy && this._scrollStrategy.enable(), this._ngZone.onStable.asObservable().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.a)(1)).subscribe(() => {
                    this.hasAttached() && this.updatePosition();
                }), this._togglePointerEvents(!0), this._config.hasBackdrop && this._attachBackdrop(), 
                this._config.panelClass && this._toggleClasses(this._pane, this._config.panelClass, !0), 
                this._attachments.next(), this._keyboardDispatcher.add(this), this._config.disposeOnNavigation && this._location && (this._locationChanges = this._location.subscribe(() => this.dispose())), 
                attachResult;
            }
            detach() {
                if (!this.hasAttached()) return;
                this.detachBackdrop(), this._togglePointerEvents(!1), this._positionStrategy && this._positionStrategy.detach && this._positionStrategy.detach(), 
                this._scrollStrategy && this._scrollStrategy.disable();
                const detachmentResult = this._portalOutlet.detach();
                return this._detachments.next(), this._keyboardDispatcher.remove(this), this._detachContentWhenStable(), 
                this._locationChanges.unsubscribe(), detachmentResult;
            }
            dispose() {
                const isAttached = this.hasAttached();
                this._positionStrategy && this._positionStrategy.dispose(), this._disposeScrollStrategy(), 
                this.detachBackdrop(), this._locationChanges.unsubscribe(), this._keyboardDispatcher.remove(this), 
                this._portalOutlet.dispose(), this._attachments.complete(), this._backdropClick.complete(), 
                this._keydownEvents.complete(), this._host && this._host.parentNode && (this._host.parentNode.removeChild(this._host), 
                this._host = null), this._previousHostParent = this._pane = null, isAttached && this._detachments.next(), 
                this._detachments.complete();
            }
            hasAttached() {
                return this._portalOutlet.hasAttached();
            }
            backdropClick() {
                return this._backdropClick.asObservable();
            }
            attachments() {
                return this._attachments.asObservable();
            }
            detachments() {
                return this._detachments.asObservable();
            }
            keydownEvents() {
                return this._keydownEventsObservable;
            }
            getConfig() {
                return this._config;
            }
            updatePosition() {
                this._positionStrategy && this._positionStrategy.apply();
            }
            updatePositionStrategy(strategy) {
                strategy !== this._positionStrategy && (this._positionStrategy && this._positionStrategy.dispose(), 
                this._positionStrategy = strategy, this.hasAttached() && (strategy.attach(this), 
                this.updatePosition()));
            }
            updateSize(sizeConfig) {
                this._config = Object.assign({}, this._config, sizeConfig), this._updateElementSize();
            }
            setDirection(dir) {
                this._config = Object.assign({}, this._config, {
                    direction: dir
                }), this._updateElementDirection();
            }
            addPanelClass(classes) {
                this._pane && this._toggleClasses(this._pane, classes, !0);
            }
            removePanelClass(classes) {
                this._pane && this._toggleClasses(this._pane, classes, !1);
            }
            getDirection() {
                const direction = this._config.direction;
                return direction ? "string" == typeof direction ? direction : direction.value : "ltr";
            }
            updateScrollStrategy(strategy) {
                strategy !== this._scrollStrategy && (this._disposeScrollStrategy(), this._scrollStrategy = strategy, 
                this.hasAttached() && (strategy.attach(this), strategy.enable()));
            }
            _updateElementDirection() {
                this._host.setAttribute("dir", this.getDirection());
            }
            _updateElementSize() {
                if (!this._pane) return;
                const style = this._pane.style;
                style.width = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__.c)(this._config.width), 
                style.height = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__.c)(this._config.height), 
                style.minWidth = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__.c)(this._config.minWidth), 
                style.minHeight = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__.c)(this._config.minHeight), 
                style.maxWidth = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__.c)(this._config.maxWidth), 
                style.maxHeight = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__.c)(this._config.maxHeight);
            }
            _togglePointerEvents(enablePointer) {
                this._pane.style.pointerEvents = enablePointer ? "auto" : "none";
            }
            _attachBackdrop() {
                this._backdropElement = this._document.createElement("div"), this._backdropElement.classList.add("cdk-overlay-backdrop"), 
                this._config.backdropClass && this._toggleClasses(this._backdropElement, this._config.backdropClass, !0), 
                this._host.parentElement.insertBefore(this._backdropElement, this._host), this._backdropElement.addEventListener("click", this._backdropClickHandler), 
                "undefined" != typeof requestAnimationFrame ? this._ngZone.runOutsideAngular(() => {
                    requestAnimationFrame(() => {
                        this._backdropElement && this._backdropElement.classList.add("cdk-overlay-backdrop-showing");
                    });
                }) : this._backdropElement.classList.add("cdk-overlay-backdrop-showing");
            }
            _updateStackingOrder() {
                this._host.nextSibling && this._host.parentNode.appendChild(this._host);
            }
            detachBackdrop() {
                let timeoutId, backdropToDetach = this._backdropElement;
                if (!backdropToDetach) return;
                let finishDetach = () => {
                    backdropToDetach && (backdropToDetach.removeEventListener("click", this._backdropClickHandler), 
                    backdropToDetach.removeEventListener("transitionend", finishDetach), backdropToDetach.parentNode && backdropToDetach.parentNode.removeChild(backdropToDetach)), 
                    this._backdropElement == backdropToDetach && (this._backdropElement = null), this._config.backdropClass && this._toggleClasses(backdropToDetach, this._config.backdropClass, !1), 
                    clearTimeout(timeoutId);
                };
                backdropToDetach.classList.remove("cdk-overlay-backdrop-showing"), this._ngZone.runOutsideAngular(() => {
                    backdropToDetach.addEventListener("transitionend", finishDetach);
                }), backdropToDetach.style.pointerEvents = "none", timeoutId = this._ngZone.runOutsideAngular(() => setTimeout(finishDetach, 500));
            }
            _toggleClasses(element, cssClasses, isAdd) {
                const classList = element.classList;
                Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__.a)(cssClasses).forEach(cssClass => {
                    cssClass && (isAdd ? classList.add(cssClass) : classList.remove(cssClass));
                });
            }
            _detachContentWhenStable() {
                this._ngZone.runOutsideAngular(() => {
                    const subscription = this._ngZone.onStable.asObservable().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.a)(Object(rxjs__WEBPACK_IMPORTED_MODULE_8__.a)(this._attachments, this._detachments))).subscribe(() => {
                        this._pane && this._host && 0 !== this._pane.children.length || (this._pane && this._config.panelClass && this._toggleClasses(this._pane, this._config.panelClass, !1), 
                        this._host && this._host.parentElement && (this._previousHostParent = this._host.parentElement, 
                        this._previousHostParent.removeChild(this._host)), subscription.unsubscribe());
                    });
                });
            }
            _disposeScrollStrategy() {
                const scrollStrategy = this._scrollStrategy;
                scrollStrategy && (scrollStrategy.disable(), scrollStrategy.detach && scrollStrategy.detach());
            }
        }
        const boundingBoxClass = "cdk-overlay-connected-position-bounding-box";
        class FlexibleConnectedPositionStrategy {
            constructor(connectedTo, _viewportRuler, _document, _platform, _overlayContainer) {
                this._viewportRuler = _viewportRuler, this._document = _document, this._platform = _platform, 
                this._overlayContainer = _overlayContainer, this._lastBoundingBoxSize = {
                    width: 0,
                    height: 0
                }, this._isPushed = !1, this._canPush = !0, this._growAfterOpen = !1, this._hasFlexibleDimensions = !0, 
                this._positionLocked = !1, this._viewportMargin = 0, this._scrollables = [], this._preferredPositions = [], 
                this._positionChanges = new rxjs__WEBPACK_IMPORTED_MODULE_5__.a, this._resizeSubscription = rxjs__WEBPACK_IMPORTED_MODULE_6__.a.EMPTY, 
                this._offsetX = 0, this._offsetY = 0, this._appliedPanelClasses = [], this.positionChanges = this._positionChanges.asObservable(), 
                this.setOrigin(connectedTo);
            }
            get positions() {
                return this._preferredPositions;
            }
            attach(overlayRef) {
                if (this._overlayRef && overlayRef !== this._overlayRef) throw Error("This position strategy is already attached to an overlay");
                this._validatePositions(), overlayRef.hostElement.classList.add(boundingBoxClass), 
                this._overlayRef = overlayRef, this._boundingBox = overlayRef.hostElement, this._pane = overlayRef.overlayElement, 
                this._isDisposed = !1, this._isInitialRender = !0, this._lastPosition = null, this._resizeSubscription.unsubscribe(), 
                this._resizeSubscription = this._viewportRuler.change().subscribe(() => {
                    this._isInitialRender = !0, this.apply();
                });
            }
            apply() {
                if (this._isDisposed || !this._platform.isBrowser) return;
                if (!this._isInitialRender && this._positionLocked && this._lastPosition) return void this.reapplyLastPosition();
                this._clearPanelClasses(), this._resetOverlayElementStyles(), this._resetBoundingBoxStyles(), 
                this._viewportRect = this._getNarrowedViewportRect(), this._originRect = this._getOriginRect(), 
                this._overlayRect = this._pane.getBoundingClientRect();
                const originRect = this._originRect, overlayRect = this._overlayRect, viewportRect = this._viewportRect, flexibleFits = [];
                let fallback;
                for (let pos of this._preferredPositions) {
                    let originPoint = this._getOriginPoint(originRect, pos), overlayPoint = this._getOverlayPoint(originPoint, overlayRect, pos), overlayFit = this._getOverlayFit(overlayPoint, overlayRect, viewportRect, pos);
                    if (overlayFit.isCompletelyWithinViewport) return this._isPushed = !1, void this._applyPosition(pos, originPoint);
                    this._canFitWithFlexibleDimensions(overlayFit, overlayPoint, viewportRect) ? flexibleFits.push({
                        position: pos,
                        origin: originPoint,
                        overlayRect: overlayRect,
                        boundingBoxRect: this._calculateBoundingBoxRect(originPoint, pos)
                    }) : (!fallback || fallback.overlayFit.visibleArea < overlayFit.visibleArea) && (fallback = {
                        overlayFit: overlayFit,
                        overlayPoint: overlayPoint,
                        originPoint: originPoint,
                        position: pos,
                        overlayRect: overlayRect
                    });
                }
                if (flexibleFits.length) {
                    let bestFit = null, bestScore = -1;
                    for (const fit of flexibleFits) {
                        const score = fit.boundingBoxRect.width * fit.boundingBoxRect.height * (fit.position.weight || 1);
                        score > bestScore && (bestScore = score, bestFit = fit);
                    }
                    return this._isPushed = !1, void this._applyPosition(bestFit.position, bestFit.origin);
                }
                if (this._canPush) return this._isPushed = !0, void this._applyPosition(fallback.position, fallback.originPoint);
                this._applyPosition(fallback.position, fallback.originPoint);
            }
            detach() {
                this._clearPanelClasses(), this._lastPosition = null, this._previousPushAmount = null, 
                this._resizeSubscription.unsubscribe();
            }
            dispose() {
                this._isDisposed || (this._boundingBox && extendStyles(this._boundingBox.style, {
                    top: "",
                    left: "",
                    right: "",
                    bottom: "",
                    height: "",
                    width: "",
                    alignItems: "",
                    justifyContent: ""
                }), this._pane && this._resetOverlayElementStyles(), this._overlayRef && this._overlayRef.hostElement.classList.remove(boundingBoxClass), 
                this.detach(), this._positionChanges.complete(), this._overlayRef = this._boundingBox = null, 
                this._isDisposed = !0);
            }
            reapplyLastPosition() {
                if (!this._isDisposed && (!this._platform || this._platform.isBrowser)) {
                    this._originRect = this._getOriginRect(), this._overlayRect = this._pane.getBoundingClientRect(), 
                    this._viewportRect = this._getNarrowedViewportRect();
                    const lastPosition = this._lastPosition || this._preferredPositions[0], originPoint = this._getOriginPoint(this._originRect, lastPosition);
                    this._applyPosition(lastPosition, originPoint);
                }
            }
            withScrollableContainers(scrollables) {
                return this._scrollables = scrollables, this;
            }
            withPositions(positions) {
                return this._preferredPositions = positions, -1 === positions.indexOf(this._lastPosition) && (this._lastPosition = null), 
                this._validatePositions(), this;
            }
            withViewportMargin(margin) {
                return this._viewportMargin = margin, this;
            }
            withFlexibleDimensions(flexibleDimensions = !0) {
                return this._hasFlexibleDimensions = flexibleDimensions, this;
            }
            withGrowAfterOpen(growAfterOpen = !0) {
                return this._growAfterOpen = growAfterOpen, this;
            }
            withPush(canPush = !0) {
                return this._canPush = canPush, this;
            }
            withLockedPosition(isLocked = !0) {
                return this._positionLocked = isLocked, this;
            }
            setOrigin(origin) {
                return this._origin = origin, this;
            }
            withDefaultOffsetX(offset) {
                return this._offsetX = offset, this;
            }
            withDefaultOffsetY(offset) {
                return this._offsetY = offset, this;
            }
            withTransformOriginOn(selector) {
                return this._transformOriginSelector = selector, this;
            }
            _getOriginPoint(originRect, pos) {
                let x, y;
                if ("center" == pos.originX) x = originRect.left + originRect.width / 2; else {
                    const startX = this._isRtl() ? originRect.right : originRect.left, endX = this._isRtl() ? originRect.left : originRect.right;
                    x = "start" == pos.originX ? startX : endX;
                }
                return {
                    x: x,
                    y: y = "center" == pos.originY ? originRect.top + originRect.height / 2 : "top" == pos.originY ? originRect.top : originRect.bottom
                };
            }
            _getOverlayPoint(originPoint, overlayRect, pos) {
                let overlayStartX, overlayStartY;
                return overlayStartX = "center" == pos.overlayX ? -overlayRect.width / 2 : "start" === pos.overlayX ? this._isRtl() ? -overlayRect.width : 0 : this._isRtl() ? 0 : -overlayRect.width, 
                {
                    x: originPoint.x + overlayStartX,
                    y: originPoint.y + (overlayStartY = "center" == pos.overlayY ? -overlayRect.height / 2 : "top" == pos.overlayY ? 0 : -overlayRect.height)
                };
            }
            _getOverlayFit(point, overlay, viewport, position) {
                let {x: x, y: y} = point, offsetX = this._getOffset(position, "x"), offsetY = this._getOffset(position, "y");
                offsetX && (x += offsetX), offsetY && (y += offsetY);
                let topOverflow = 0 - y, bottomOverflow = y + overlay.height - viewport.height, visibleWidth = this._subtractOverflows(overlay.width, 0 - x, x + overlay.width - viewport.width), visibleHeight = this._subtractOverflows(overlay.height, topOverflow, bottomOverflow), visibleArea = visibleWidth * visibleHeight;
                return {
                    visibleArea: visibleArea,
                    isCompletelyWithinViewport: overlay.width * overlay.height === visibleArea,
                    fitsInViewportVertically: visibleHeight === overlay.height,
                    fitsInViewportHorizontally: visibleWidth == overlay.width
                };
            }
            _canFitWithFlexibleDimensions(fit, point, viewport) {
                if (this._hasFlexibleDimensions) {
                    const availableHeight = viewport.bottom - point.y, availableWidth = viewport.right - point.x, minHeight = this._overlayRef.getConfig().minHeight, minWidth = this._overlayRef.getConfig().minWidth, horizontalFit = fit.fitsInViewportHorizontally || null != minWidth && minWidth <= availableWidth;
                    return (fit.fitsInViewportVertically || null != minHeight && minHeight <= availableHeight) && horizontalFit;
                }
                return !1;
            }
            _pushOverlayOnScreen(start, overlay, scrollPosition) {
                if (this._previousPushAmount && this._positionLocked) return {
                    x: start.x + this._previousPushAmount.x,
                    y: start.y + this._previousPushAmount.y
                };
                const viewport = this._viewportRect, overflowRight = Math.max(start.x + overlay.width - viewport.right, 0), overflowBottom = Math.max(start.y + overlay.height - viewport.bottom, 0), overflowTop = Math.max(viewport.top - scrollPosition.top - start.y, 0), overflowLeft = Math.max(viewport.left - scrollPosition.left - start.x, 0);
                let pushX = 0, pushY = 0;
                return this._previousPushAmount = {
                    x: pushX = overlay.width <= viewport.width ? overflowLeft || -overflowRight : start.x < this._viewportMargin ? viewport.left - scrollPosition.left - start.x : 0,
                    y: pushY = overlay.height <= viewport.height ? overflowTop || -overflowBottom : start.y < this._viewportMargin ? viewport.top - scrollPosition.top - start.y : 0
                }, {
                    x: start.x + pushX,
                    y: start.y + pushY
                };
            }
            _applyPosition(position, originPoint) {
                if (this._setTransformOrigin(position), this._setOverlayElementStyles(originPoint, position), 
                this._setBoundingBoxStyles(originPoint, position), position.panelClass && this._addPanelClasses(position.panelClass), 
                this._lastPosition = position, this._positionChanges.observers.length) {
                    const scrollableViewProperties = this._getScrollVisibility(), changeEvent = new ConnectedOverlayPositionChange(position, scrollableViewProperties);
                    this._positionChanges.next(changeEvent);
                }
                this._isInitialRender = !1;
            }
            _setTransformOrigin(position) {
                if (!this._transformOriginSelector) return;
                const elements = this._boundingBox.querySelectorAll(this._transformOriginSelector);
                let xOrigin, yOrigin = position.overlayY;
                xOrigin = "center" === position.overlayX ? "center" : this._isRtl() ? "start" === position.overlayX ? "right" : "left" : "start" === position.overlayX ? "left" : "right";
                for (let i = 0; i < elements.length; i++) elements[i].style.transformOrigin = `${xOrigin} ${yOrigin}`;
            }
            _calculateBoundingBoxRect(origin, position) {
                const viewport = this._viewportRect, isRtl = this._isRtl();
                let height, top, bottom, width, left, right;
                if ("top" === position.overlayY) height = viewport.height - (top = origin.y) + this._viewportMargin; else if ("bottom" === position.overlayY) height = viewport.height - (bottom = viewport.height - origin.y + 2 * this._viewportMargin) + this._viewportMargin; else {
                    const smallestDistanceToViewportEdge = Math.min(viewport.bottom - origin.y + viewport.top, origin.y), previousHeight = this._lastBoundingBoxSize.height;
                    top = origin.y - smallestDistanceToViewportEdge, (height = 2 * smallestDistanceToViewportEdge) > previousHeight && !this._isInitialRender && !this._growAfterOpen && (top = origin.y - previousHeight / 2);
                }
                if ("end" === position.overlayX && !isRtl || "start" === position.overlayX && isRtl) right = viewport.width - origin.x + this._viewportMargin, 
                width = origin.x - this._viewportMargin; else if ("start" === position.overlayX && !isRtl || "end" === position.overlayX && isRtl) left = origin.x, 
                width = viewport.right - origin.x; else {
                    const smallestDistanceToViewportEdge = Math.min(viewport.right - origin.x + viewport.left, origin.x), previousWidth = this._lastBoundingBoxSize.width;
                    left = origin.x - smallestDistanceToViewportEdge, (width = 2 * smallestDistanceToViewportEdge) > previousWidth && !this._isInitialRender && !this._growAfterOpen && (left = origin.x - previousWidth / 2);
                }
                return {
                    top: top,
                    left: left,
                    bottom: bottom,
                    right: right,
                    width: width,
                    height: height
                };
            }
            _setBoundingBoxStyles(origin, position) {
                const boundingBoxRect = this._calculateBoundingBoxRect(origin, position);
                this._isInitialRender || this._growAfterOpen || (boundingBoxRect.height = Math.min(boundingBoxRect.height, this._lastBoundingBoxSize.height), 
                boundingBoxRect.width = Math.min(boundingBoxRect.width, this._lastBoundingBoxSize.width));
                const styles = {};
                if (this._hasExactPosition()) styles.top = styles.left = "0", styles.bottom = styles.right = "", 
                styles.width = styles.height = "100%"; else {
                    const maxHeight = this._overlayRef.getConfig().maxHeight, maxWidth = this._overlayRef.getConfig().maxWidth;
                    styles.height = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__.c)(boundingBoxRect.height), 
                    styles.top = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__.c)(boundingBoxRect.top), 
                    styles.bottom = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__.c)(boundingBoxRect.bottom), 
                    styles.width = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__.c)(boundingBoxRect.width), 
                    styles.left = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__.c)(boundingBoxRect.left), 
                    styles.right = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__.c)(boundingBoxRect.right), 
                    styles.alignItems = "center" === position.overlayX ? "center" : "end" === position.overlayX ? "flex-end" : "flex-start", 
                    styles.justifyContent = "center" === position.overlayY ? "center" : "bottom" === position.overlayY ? "flex-end" : "flex-start", 
                    maxHeight && (styles.maxHeight = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__.c)(maxHeight)), 
                    maxWidth && (styles.maxWidth = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__.c)(maxWidth));
                }
                this._lastBoundingBoxSize = boundingBoxRect, extendStyles(this._boundingBox.style, styles);
            }
            _resetBoundingBoxStyles() {
                extendStyles(this._boundingBox.style, {
                    top: "0",
                    left: "0",
                    right: "0",
                    bottom: "0",
                    height: "",
                    width: "",
                    alignItems: "",
                    justifyContent: ""
                });
            }
            _resetOverlayElementStyles() {
                extendStyles(this._pane.style, {
                    top: "",
                    left: "",
                    bottom: "",
                    right: "",
                    position: "",
                    transform: ""
                });
            }
            _setOverlayElementStyles(originPoint, position) {
                const styles = {};
                if (this._hasExactPosition()) {
                    const scrollPosition = this._viewportRuler.getViewportScrollPosition();
                    extendStyles(styles, this._getExactOverlayY(position, originPoint, scrollPosition)), 
                    extendStyles(styles, this._getExactOverlayX(position, originPoint, scrollPosition));
                } else styles.position = "static";
                let transformString = "", offsetX = this._getOffset(position, "x"), offsetY = this._getOffset(position, "y");
                offsetX && (transformString += `translateX(${offsetX}px) `), offsetY && (transformString += `translateY(${offsetY}px)`), 
                styles.transform = transformString.trim(), this._hasFlexibleDimensions && this._overlayRef.getConfig().maxHeight && (styles.maxHeight = ""), 
                this._hasFlexibleDimensions && this._overlayRef.getConfig().maxWidth && (styles.maxWidth = ""), 
                extendStyles(this._pane.style, styles);
            }
            _getExactOverlayY(position, originPoint, scrollPosition) {
                let styles = {
                    top: null,
                    bottom: null
                }, overlayPoint = this._getOverlayPoint(originPoint, this._overlayRect, position);
                this._isPushed && (overlayPoint = this._pushOverlayOnScreen(overlayPoint, this._overlayRect, scrollPosition));
                let virtualKeyboardOffset = this._overlayContainer.getContainerElement().getBoundingClientRect().top;
                return overlayPoint.y -= virtualKeyboardOffset, "bottom" === position.overlayY ? styles.bottom = `${this._document.documentElement.clientHeight - (overlayPoint.y + this._overlayRect.height)}px` : styles.top = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__.c)(overlayPoint.y), 
                styles;
            }
            _getExactOverlayX(position, originPoint, scrollPosition) {
                let horizontalStyleProperty, styles = {
                    left: null,
                    right: null
                }, overlayPoint = this._getOverlayPoint(originPoint, this._overlayRect, position);
                return this._isPushed && (overlayPoint = this._pushOverlayOnScreen(overlayPoint, this._overlayRect, scrollPosition)), 
                "right" == (horizontalStyleProperty = this._isRtl() ? "end" === position.overlayX ? "left" : "right" : "end" === position.overlayX ? "right" : "left") ? styles.right = `${this._document.documentElement.clientWidth - (overlayPoint.x + this._overlayRect.width)}px` : styles.left = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__.c)(overlayPoint.x), 
                styles;
            }
            _getScrollVisibility() {
                const originBounds = this._getOriginRect(), overlayBounds = this._pane.getBoundingClientRect(), scrollContainerBounds = this._scrollables.map(scrollable => scrollable.getElementRef().nativeElement.getBoundingClientRect());
                return {
                    isOriginClipped: isElementClippedByScrolling(originBounds, scrollContainerBounds),
                    isOriginOutsideView: isElementScrolledOutsideView(originBounds, scrollContainerBounds),
                    isOverlayClipped: isElementClippedByScrolling(overlayBounds, scrollContainerBounds),
                    isOverlayOutsideView: isElementScrolledOutsideView(overlayBounds, scrollContainerBounds)
                };
            }
            _subtractOverflows(length, ...overflows) {
                return overflows.reduce((currentValue, currentOverflow) => currentValue - Math.max(currentOverflow, 0), length);
            }
            _getNarrowedViewportRect() {
                const width = this._document.documentElement.clientWidth, height = this._document.documentElement.clientHeight, scrollPosition = this._viewportRuler.getViewportScrollPosition();
                return {
                    top: scrollPosition.top + this._viewportMargin,
                    left: scrollPosition.left + this._viewportMargin,
                    right: scrollPosition.left + width - this._viewportMargin,
                    bottom: scrollPosition.top + height - this._viewportMargin,
                    width: width - 2 * this._viewportMargin,
                    height: height - 2 * this._viewportMargin
                };
            }
            _isRtl() {
                return "rtl" === this._overlayRef.getDirection();
            }
            _hasExactPosition() {
                return !this._hasFlexibleDimensions || this._isPushed;
            }
            _getOffset(position, axis) {
                return "x" === axis ? null == position.offsetX ? this._offsetX : position.offsetX : null == position.offsetY ? this._offsetY : position.offsetY;
            }
            _validatePositions() {
                if (!this._preferredPositions.length) throw Error("FlexibleConnectedPositionStrategy: At least one position is required.");
                this._preferredPositions.forEach(pair => {
                    validateHorizontalPosition("originX", pair.originX), validateVerticalPosition("originY", pair.originY), 
                    validateHorizontalPosition("overlayX", pair.overlayX), validateVerticalPosition("overlayY", pair.overlayY);
                });
            }
            _addPanelClasses(cssClasses) {
                this._pane && Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__.a)(cssClasses).forEach(cssClass => {
                    "" !== cssClass && -1 === this._appliedPanelClasses.indexOf(cssClass) && (this._appliedPanelClasses.push(cssClass), 
                    this._pane.classList.add(cssClass));
                });
            }
            _clearPanelClasses() {
                this._pane && (this._appliedPanelClasses.forEach(cssClass => {
                    this._pane.classList.remove(cssClass);
                }), this._appliedPanelClasses = []);
            }
            _getOriginRect() {
                const origin = this._origin;
                if (origin instanceof _angular_core__WEBPACK_IMPORTED_MODULE_2__.k) return origin.nativeElement.getBoundingClientRect();
                if (origin instanceof HTMLElement) return origin.getBoundingClientRect();
                const width = origin.width || 0, height = origin.height || 0;
                return {
                    top: origin.y,
                    bottom: origin.y + height,
                    left: origin.x,
                    right: origin.x + width,
                    height: height,
                    width: width
                };
            }
        }
        function extendStyles(dest, source) {
            for (let key in source) source.hasOwnProperty(key) && (dest[key] = source[key]);
            return dest;
        }
        class ConnectedPositionStrategy {
            constructor(originPos, overlayPos, connectedTo, viewportRuler, document, platform, overlayContainer) {
                this._preferredPositions = [], this._positionStrategy = new FlexibleConnectedPositionStrategy(connectedTo, viewportRuler, document, platform, overlayContainer).withFlexibleDimensions(!1).withPush(!1).withViewportMargin(0), 
                this.withFallbackPosition(originPos, overlayPos);
            }
            get _isRtl() {
                return "rtl" === this._overlayRef.getDirection();
            }
            get onPositionChange() {
                return this._positionStrategy.positionChanges;
            }
            get positions() {
                return this._preferredPositions;
            }
            attach(overlayRef) {
                this._overlayRef = overlayRef, this._positionStrategy.attach(overlayRef), this._direction && (overlayRef.setDirection(this._direction), 
                this._direction = null);
            }
            dispose() {
                this._positionStrategy.dispose();
            }
            detach() {
                this._positionStrategy.detach();
            }
            apply() {
                this._positionStrategy.apply();
            }
            recalculateLastPosition() {
                this._positionStrategy.reapplyLastPosition();
            }
            withScrollableContainers(scrollables) {
                this._positionStrategy.withScrollableContainers(scrollables);
            }
            withFallbackPosition(originPos, overlayPos, offsetX, offsetY) {
                const position = new ConnectionPositionPair(originPos, overlayPos, offsetX, offsetY);
                return this._preferredPositions.push(position), this._positionStrategy.withPositions(this._preferredPositions), 
                this;
            }
            withDirection(dir) {
                return this._overlayRef ? this._overlayRef.setDirection(dir) : this._direction = dir, 
                this;
            }
            withOffsetX(offset) {
                return this._positionStrategy.withDefaultOffsetX(offset), this;
            }
            withOffsetY(offset) {
                return this._positionStrategy.withDefaultOffsetY(offset), this;
            }
            withLockedPosition(isLocked) {
                return this._positionStrategy.withLockedPosition(isLocked), this;
            }
            withPositions(positions) {
                return this._preferredPositions = positions.slice(), this._positionStrategy.withPositions(this._preferredPositions), 
                this;
            }
            setOrigin(origin) {
                return this._positionStrategy.setOrigin(origin), this;
            }
        }
        const wrapperClass = "cdk-global-overlay-wrapper";
        class GlobalPositionStrategy {
            constructor() {
                this._cssPosition = "static", this._topOffset = "", this._bottomOffset = "", this._leftOffset = "", 
                this._rightOffset = "", this._alignItems = "", this._justifyContent = "", this._width = "", 
                this._height = "";
            }
            attach(overlayRef) {
                const config = overlayRef.getConfig();
                this._overlayRef = overlayRef, this._width && !config.width && overlayRef.updateSize({
                    width: this._width
                }), this._height && !config.height && overlayRef.updateSize({
                    height: this._height
                }), overlayRef.hostElement.classList.add(wrapperClass), this._isDisposed = !1;
            }
            top(value = "") {
                return this._bottomOffset = "", this._topOffset = value, this._alignItems = "flex-start", 
                this;
            }
            left(value = "") {
                return this._rightOffset = "", this._leftOffset = value, this._justifyContent = "flex-start", 
                this;
            }
            bottom(value = "") {
                return this._topOffset = "", this._bottomOffset = value, this._alignItems = "flex-end", 
                this;
            }
            right(value = "") {
                return this._leftOffset = "", this._rightOffset = value, this._justifyContent = "flex-end", 
                this;
            }
            width(value = "") {
                return this._overlayRef ? this._overlayRef.updateSize({
                    width: value
                }) : this._width = value, this;
            }
            height(value = "") {
                return this._overlayRef ? this._overlayRef.updateSize({
                    height: value
                }) : this._height = value, this;
            }
            centerHorizontally(offset = "") {
                return this.left(offset), this._justifyContent = "center", this;
            }
            centerVertically(offset = "") {
                return this.top(offset), this._alignItems = "center", this;
            }
            apply() {
                if (!this._overlayRef || !this._overlayRef.hasAttached()) return;
                const styles = this._overlayRef.overlayElement.style, parentStyles = this._overlayRef.hostElement.style, config = this._overlayRef.getConfig();
                styles.position = this._cssPosition, styles.marginLeft = "100%" === config.width ? "0" : this._leftOffset, 
                styles.marginTop = "100%" === config.height ? "0" : this._topOffset, styles.marginBottom = this._bottomOffset, 
                styles.marginRight = this._rightOffset, "100%" === config.width ? parentStyles.justifyContent = "flex-start" : "center" === this._justifyContent ? parentStyles.justifyContent = "center" : "rtl" === this._overlayRef.getConfig().direction ? "flex-start" === this._justifyContent ? parentStyles.justifyContent = "flex-end" : "flex-end" === this._justifyContent && (parentStyles.justifyContent = "flex-start") : parentStyles.justifyContent = this._justifyContent, 
                parentStyles.alignItems = "100%" === config.height ? "flex-start" : this._alignItems;
            }
            dispose() {
                if (this._isDisposed || !this._overlayRef) return;
                const styles = this._overlayRef.overlayElement.style, parent = this._overlayRef.hostElement, parentStyles = parent.style;
                parent.classList.remove(wrapperClass), parentStyles.justifyContent = parentStyles.alignItems = styles.marginTop = styles.marginBottom = styles.marginLeft = styles.marginRight = styles.position = "", 
                this._overlayRef = null, this._isDisposed = !0;
            }
        }
        let OverlayPositionBuilder = (() => {
            class OverlayPositionBuilder {
                constructor(_viewportRuler, _document, _platform, _overlayContainer) {
                    this._viewportRuler = _viewportRuler, this._document = _document, this._platform = _platform, 
                    this._overlayContainer = _overlayContainer;
                }
                global() {
                    return new GlobalPositionStrategy;
                }
                connectedTo(elementRef, originPos, overlayPos) {
                    return new ConnectedPositionStrategy(originPos, overlayPos, elementRef, this._viewportRuler, this._document, this._platform, this._overlayContainer);
                }
                flexibleConnectedTo(origin) {
                    return new FlexibleConnectedPositionStrategy(origin, this._viewportRuler, this._document, this._platform, this._overlayContainer);
                }
            }
            return OverlayPositionBuilder.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__.Yb)({
                factory: function() {
                    return new OverlayPositionBuilder(Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__.Zb)(_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_0__.e), Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__.Zb)(_angular_common__WEBPACK_IMPORTED_MODULE_1__.d), Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__.Zb)(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_11__.a), Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__.Zb)(OverlayContainer));
                },
                token: OverlayPositionBuilder,
                providedIn: "root"
            }), OverlayPositionBuilder;
        })(), nextUniqueId = 0;
        class Overlay {
            constructor(scrollStrategies, _overlayContainer, _componentFactoryResolver, _positionBuilder, _keyboardDispatcher, _injector, _ngZone, _document, _directionality, _location) {
                this.scrollStrategies = scrollStrategies, this._overlayContainer = _overlayContainer, 
                this._componentFactoryResolver = _componentFactoryResolver, this._positionBuilder = _positionBuilder, 
                this._keyboardDispatcher = _keyboardDispatcher, this._injector = _injector, this._ngZone = _ngZone, 
                this._document = _document, this._directionality = _directionality, this._location = _location;
            }
            create(config) {
                const host = this._createHostElement(), pane = this._createPaneElement(host), portalOutlet = this._createPortalOutlet(pane), overlayConfig = new OverlayConfig(config);
                return overlayConfig.direction = overlayConfig.direction || this._directionality.value, 
                new OverlayRef(portalOutlet, host, pane, overlayConfig, this._ngZone, this._keyboardDispatcher, this._document, this._location);
            }
            position() {
                return this._positionBuilder;
            }
            _createPaneElement(host) {
                const pane = this._document.createElement("div");
                return pane.id = `cdk-overlay-${nextUniqueId++}`, pane.classList.add("cdk-overlay-pane"), 
                host.appendChild(pane), pane;
            }
            _createHostElement() {
                const host = this._document.createElement("div");
                return this._overlayContainer.getContainerElement().appendChild(host), host;
            }
            _createPortalOutlet(pane) {
                return this._appRef || (this._appRef = this._injector.get(_angular_core__WEBPACK_IMPORTED_MODULE_2__.g)), 
                new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_4__.e(pane, this._componentFactoryResolver, this._appRef, this._injector);
            }
        }
        const CDK_CONNECTED_OVERLAY_SCROLL_STRATEGY = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.p("cdk-connected-overlay-scroll-strategy");
        function CDK_CONNECTED_OVERLAY_SCROLL_STRATEGY_PROVIDER_FACTORY(overlay) {
            return () => overlay.scrollStrategies.reposition();
        }
        class OverlayModule {}
    },
    "1z/I": function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.d(__webpack_exports__, "d", (function() {
            return ComponentPortal;
        })), __webpack_require__.d(__webpack_exports__, "h", (function() {
            return TemplatePortal;
        })), __webpack_require__.d(__webpack_exports__, "a", (function() {
            return BasePortalOutlet;
        })), __webpack_require__.d(__webpack_exports__, "e", (function() {
            return DomPortalOutlet;
        })), __webpack_require__.d(__webpack_exports__, "b", (function() {
            return CdkPortal;
        })), __webpack_require__.d(__webpack_exports__, "c", (function() {
            return CdkPortalOutlet;
        })), __webpack_require__.d(__webpack_exports__, "g", (function() {
            return PortalModule;
        })), __webpack_require__.d(__webpack_exports__, "f", (function() {
            return PortalInjector;
        }));
        var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("8Y7J");
        function throwPortalAlreadyAttachedError() {
            throw Error("Host already has a portal attached");
        }
        class Portal {
            attach(host) {
                return null == host && function() {
                    throw Error("Attempting to attach a portal to a null PortalOutlet");
                }(), host.hasAttached() && throwPortalAlreadyAttachedError(), this._attachedHost = host, 
                host.attach(this);
            }
            detach() {
                let host = this._attachedHost;
                null == host ? function() {
                    throw Error("Attempting to detach a portal that is not attached to a host");
                }() : (this._attachedHost = null, host.detach());
            }
            get isAttached() {
                return null != this._attachedHost;
            }
            setAttachedHost(host) {
                this._attachedHost = host;
            }
        }
        class ComponentPortal extends Portal {
            constructor(component, viewContainerRef, injector, componentFactoryResolver) {
                super(), this.component = component, this.viewContainerRef = viewContainerRef, this.injector = injector, 
                this.componentFactoryResolver = componentFactoryResolver;
            }
        }
        class TemplatePortal extends Portal {
            constructor(template, viewContainerRef, context) {
                super(), this.templateRef = template, this.viewContainerRef = viewContainerRef, 
                this.context = context;
            }
            get origin() {
                return this.templateRef.elementRef;
            }
            attach(host, context = this.context) {
                return this.context = context, super.attach(host);
            }
            detach() {
                return this.context = void 0, super.detach();
            }
        }
        class BasePortalOutlet {
            constructor() {
                this._isDisposed = !1;
            }
            hasAttached() {
                return !!this._attachedPortal;
            }
            attach(portal) {
                return portal || function() {
                    throw Error("Must provide a portal to attach");
                }(), this.hasAttached() && throwPortalAlreadyAttachedError(), this._isDisposed && function() {
                    throw Error("This PortalOutlet has already been disposed");
                }(), portal instanceof ComponentPortal ? (this._attachedPortal = portal, this.attachComponentPortal(portal)) : portal instanceof TemplatePortal ? (this._attachedPortal = portal, 
                this.attachTemplatePortal(portal)) : void function() {
                    throw Error("Attempting to attach an unknown Portal type. BasePortalOutlet accepts either a ComponentPortal or a TemplatePortal.");
                }();
            }
            detach() {
                this._attachedPortal && (this._attachedPortal.setAttachedHost(null), this._attachedPortal = null), 
                this._invokeDisposeFn();
            }
            dispose() {
                this.hasAttached() && this.detach(), this._invokeDisposeFn(), this._isDisposed = !0;
            }
            setDisposeFn(fn) {
                this._disposeFn = fn;
            }
            _invokeDisposeFn() {
                this._disposeFn && (this._disposeFn(), this._disposeFn = null);
            }
        }
        class DomPortalOutlet extends BasePortalOutlet {
            constructor(outletElement, _componentFactoryResolver, _appRef, _defaultInjector) {
                super(), this.outletElement = outletElement, this._componentFactoryResolver = _componentFactoryResolver, 
                this._appRef = _appRef, this._defaultInjector = _defaultInjector;
            }
            attachComponentPortal(portal) {
                const componentFactory = (portal.componentFactoryResolver || this._componentFactoryResolver).resolveComponentFactory(portal.component);
                let componentRef;
                return portal.viewContainerRef ? (componentRef = portal.viewContainerRef.createComponent(componentFactory, portal.viewContainerRef.length, portal.injector || portal.viewContainerRef.injector), 
                this.setDisposeFn(() => componentRef.destroy())) : (componentRef = componentFactory.create(portal.injector || this._defaultInjector), 
                this._appRef.attachView(componentRef.hostView), this.setDisposeFn(() => {
                    this._appRef.detachView(componentRef.hostView), componentRef.destroy();
                })), this.outletElement.appendChild(this._getComponentRootNode(componentRef)), componentRef;
            }
            attachTemplatePortal(portal) {
                let viewContainer = portal.viewContainerRef, viewRef = viewContainer.createEmbeddedView(portal.templateRef, portal.context);
                return viewRef.detectChanges(), viewRef.rootNodes.forEach(rootNode => this.outletElement.appendChild(rootNode)), 
                this.setDisposeFn(() => {
                    let index = viewContainer.indexOf(viewRef);
                    -1 !== index && viewContainer.remove(index);
                }), viewRef;
            }
            dispose() {
                super.dispose(), null != this.outletElement.parentNode && this.outletElement.parentNode.removeChild(this.outletElement);
            }
            _getComponentRootNode(componentRef) {
                return componentRef.hostView.rootNodes[0];
            }
        }
        class CdkPortal extends TemplatePortal {
            constructor(templateRef, viewContainerRef) {
                super(templateRef, viewContainerRef);
            }
        }
        class CdkPortalOutlet extends BasePortalOutlet {
            constructor(_componentFactoryResolver, _viewContainerRef) {
                super(), this._componentFactoryResolver = _componentFactoryResolver, this._viewContainerRef = _viewContainerRef, 
                this._isInitialized = !1, this.attached = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.m;
            }
            get portal() {
                return this._attachedPortal;
            }
            set portal(portal) {
                (!this.hasAttached() || portal || this._isInitialized) && (this.hasAttached() && super.detach(), 
                portal && super.attach(portal), this._attachedPortal = portal);
            }
            get attachedRef() {
                return this._attachedRef;
            }
            ngOnInit() {
                this._isInitialized = !0;
            }
            ngOnDestroy() {
                super.dispose(), this._attachedPortal = null, this._attachedRef = null;
            }
            attachComponentPortal(portal) {
                portal.setAttachedHost(this);
                const viewContainerRef = null != portal.viewContainerRef ? portal.viewContainerRef : this._viewContainerRef, componentFactory = (portal.componentFactoryResolver || this._componentFactoryResolver).resolveComponentFactory(portal.component), ref = viewContainerRef.createComponent(componentFactory, viewContainerRef.length, portal.injector || viewContainerRef.injector);
                return super.setDisposeFn(() => ref.destroy()), this._attachedPortal = portal, this._attachedRef = ref, 
                this.attached.emit(ref), ref;
            }
            attachTemplatePortal(portal) {
                portal.setAttachedHost(this);
                const viewRef = this._viewContainerRef.createEmbeddedView(portal.templateRef, portal.context);
                return super.setDisposeFn(() => this._viewContainerRef.clear()), this._attachedPortal = portal, 
                this._attachedRef = viewRef, this.attached.emit(viewRef), viewRef;
            }
        }
        class PortalModule {}
        class PortalInjector {
            constructor(_parentInjector, _customTokens) {
                this._parentInjector = _parentInjector, this._customTokens = _customTokens;
            }
            get(token, notFoundValue) {
                const value = this._customTokens.get(token);
                return void 0 !== value ? value : this._parentInjector.get(token, notFoundValue);
            }
        }
    },
    "6CTB": function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.d(__webpack_exports__, "a", (function() {
            return CodeComponent;
        }));
        var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("8Y7J"), rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("vkgz");
        class CodeComponent {
            constructor(snackbar, pretty, copier, logger) {
                this.snackbar = snackbar, this.pretty = pretty, this.copier = copier, this.logger = logger, 
                this.ariaLabel = "", this.codeFormatted = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.m;
            }
            set code(code) {
                this._code = code, this._code && this._code.trim() ? this.formatDisplayedCode() : this.showMissingCodeMessage();
            }
            get code() {
                return this._code;
            }
            set header(header) {
                this._header = header, this.ariaLabel = this.header ? `Copy code snippet from ${this.header}` : "";
            }
            get header() {
                return this._header;
            }
            ngOnChanges() {
                this.code && this.formatDisplayedCode();
            }
            formatDisplayedCode() {
                const leftAlignedCode = function(text) {
                    let indent = Number.MAX_VALUE;
                    const lines = text.split("\n");
                    return lines.forEach(line => {
                        const lineIndent = line.search(/\S/);
                        -1 !== lineIndent && (indent = Math.min(lineIndent, indent));
                    }), lines.map(line => line.substr(indent)).join("\n").trim();
                }(this.code);
                this.setCodeHtml(leftAlignedCode), this.codeText = this.getCodeText(), this.pretty.formatCode(leftAlignedCode, this.language, this.getLinenums()).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.a)(() => this.codeFormatted.emit())).subscribe(c => this.setCodeHtml(c), () => {});
            }
            showMissingCodeMessage() {
                const src = this.path ? this.path + (this.region ? "#" + this.region : "") : "";
                this.setCodeHtml(`<p class="code-missing">The code sample is missing${src ? ` for\n${src}` : "."}</p>`);
            }
            setCodeHtml(formattedCode) {
                this.codeContainer.nativeElement.innerHTML = formattedCode;
            }
            getCodeText() {
                return this.codeContainer.nativeElement.textContent;
            }
            doCopy() {
                const code = this.codeText;
                this.copier.copyText(code) ? (this.logger.log("Copied code to clipboard:", code), 
                this.snackbar.open("Code Copied", "", {
                    duration: 800
                })) : (this.logger.error(new Error(`ERROR copying code to clipboard: "${code}"`)), 
                this.snackbar.open("Copy failed. Please try again!", "", {
                    duration: 800
                }));
            }
            getLinenums() {
                const linenums = "boolean" == typeof this.linenums ? this.linenums : "true" === this.linenums || "false" !== this.linenums && ("string" == typeof this.linenums ? parseInt(this.linenums, 10) : this.linenums);
                return null != linenums && !isNaN(linenums) && linenums;
            }
        }
    },
    V90o: function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.d(__webpack_exports__, "a", (function() {
            return CodeModule;
        }));
        class CodeModule {}
    },
    vVVL: function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.d(__webpack_exports__, "a", (function() {
            return PrettyPrinter;
        }));
        var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("Cfvw"), rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("w1tV"), rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("lJxs"), rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("SxV6");
        class PrettyPrinter {
            constructor(logger) {
                this.logger = logger, this.prettyPrintOne = Object(rxjs__WEBPACK_IMPORTED_MODULE_0__.a)(this.getPrettyPrintOne()).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.a)());
            }
            getPrettyPrintOne() {
                const ppo = window.prettyPrintOne;
                return ppo ? Promise.resolve(ppo) : __webpack_require__.e(4).then(__webpack_require__.t.bind(null, "Ue1H", 7)).then(() => window.prettyPrintOne, err => {
                    const msg = `Cannot get prettify.js from server: ${err.message}`;
                    return this.logger.error(new Error(msg)), () => {
                        throw new Error(msg);
                    };
                });
            }
            formatCode(code, language, linenums) {
                return this.prettyPrintOne.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.a)(ppo => {
                    try {
                        return ppo(code, language, linenums);
                    } catch (err) {
                        const msg = `Could not format code that begins '${code.substr(0, 50)}...'.`;
                        throw console.error(msg, err), new Error(msg);
                    }
                }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.a)());
            }
        }
    },
    zHaW: function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        var overlay = __webpack_require__("1O3W"), fesm2015_portal = __webpack_require__("1z/I"), core = __webpack_require__("8Y7J"), Subject = __webpack_require__("XNiG"), take = __webpack_require__("IzEk"), takeUntil = __webpack_require__("1G5W"), a11y = (__webpack_require__("GS7A"), 
        __webpack_require__("YEUz")), platform = __webpack_require__("SCoL"), combineLatest = __webpack_require__("itXk"), concat = __webpack_require__("GyhO"), Observable = __webpack_require__("HDdC"), Subscriber = __webpack_require__("7o/Q");
        class SkipOperator {
            constructor(total) {
                this.total = total;
            }
            call(subscriber, source) {
                return source.subscribe(new skip_SkipSubscriber(subscriber, this.total));
            }
        }
        class skip_SkipSubscriber extends Subscriber.a {
            constructor(destination, total) {
                super(destination), this.total = total, this.count = 0;
            }
            _next(x) {
                ++this.count > this.total && this.destination.next(x);
            }
        }
        var debounceTime = __webpack_require__("Kj3r"), map = __webpack_require__("lJxs"), startWith = __webpack_require__("JX91"), coercion = __webpack_require__("8LU1");
        const mediaQueriesForWebkitCompatibility = new Set;
        let mediaQueryStyleNode, layout_MediaMatcher = (() => {
            class MediaMatcher {
                constructor(_platform) {
                    this._platform = _platform, this._matchMedia = this._platform.isBrowser && window.matchMedia ? window.matchMedia.bind(window) : noopMatchMedia;
                }
                matchMedia(query) {
                    return this._platform.WEBKIT && function(query) {
                        if (!mediaQueriesForWebkitCompatibility.has(query)) try {
                            mediaQueryStyleNode || ((mediaQueryStyleNode = document.createElement("style")).setAttribute("type", "text/css"), 
                            document.head.appendChild(mediaQueryStyleNode)), mediaQueryStyleNode.sheet && (mediaQueryStyleNode.sheet.insertRule(`@media ${query} {.fx-query-test{ }}`, 0), 
                            mediaQueriesForWebkitCompatibility.add(query));
                        } catch (e) {
                            console.error(e);
                        }
                    }(query), this._matchMedia(query);
                }
            }
            return MediaMatcher.ngInjectableDef = Object(core.Yb)({
                factory: function() {
                    return new MediaMatcher(Object(core.Zb)(platform.a));
                },
                token: MediaMatcher,
                providedIn: "root"
            }), MediaMatcher;
        })();
        function noopMatchMedia(query) {
            return {
                matches: "all" === query || "" === query,
                media: query,
                addListener: () => {},
                removeListener: () => {}
            };
        }
        let layout_BreakpointObserver = (() => {
            class BreakpointObserver {
                constructor(_mediaMatcher, _zone) {
                    this._mediaMatcher = _mediaMatcher, this._zone = _zone, this._queries = new Map, 
                    this._destroySubject = new Subject.a;
                }
                ngOnDestroy() {
                    this._destroySubject.next(), this._destroySubject.complete();
                }
                isMatched(value) {
                    return splitQueries(Object(coercion.a)(value)).some(mediaQuery => this._registerQuery(mediaQuery).mql.matches);
                }
                observe(value) {
                    const observables = splitQueries(Object(coercion.a)(value)).map(query => this._registerQuery(query).observable);
                    let stateObservable = Object(combineLatest.a)(observables);
                    return (stateObservable = Object(concat.a)(stateObservable.pipe(Object(take.a)(1)), stateObservable.pipe(source => source.lift(new SkipOperator(1)), Object(debounceTime.a)(0)))).pipe(Object(map.a)(breakpointStates => {
                        const response = {
                            matches: !1,
                            breakpoints: {}
                        };
                        return breakpointStates.forEach(state => {
                            response.matches = response.matches || state.matches, response.breakpoints[state.query] = state.matches;
                        }), response;
                    }));
                }
                _registerQuery(query) {
                    if (this._queries.has(query)) return this._queries.get(query);
                    const mql = this._mediaMatcher.matchMedia(query), output = {
                        observable: new Observable.a(observer => {
                            const handler = e => this._zone.run(() => observer.next(e));
                            return mql.addListener(handler), () => {
                                mql.removeListener(handler);
                            };
                        }).pipe(Object(startWith.a)(mql), Object(map.a)(nextMql => ({
                            query: query,
                            matches: nextMql.matches
                        })), Object(takeUntil.a)(this._destroySubject)),
                        mql: mql
                    };
                    return this._queries.set(query, output), output;
                }
            }
            return BreakpointObserver.ngInjectableDef = Object(core.Yb)({
                factory: function() {
                    return new BreakpointObserver(Object(core.Zb)(layout_MediaMatcher), Object(core.Zb)(core.y));
                },
                token: BreakpointObserver,
                providedIn: "root"
            }), BreakpointObserver;
        })();
        function splitQueries(queries) {
            return queries.map(query => query.split(",")).reduce((a1, a2) => a1.concat(a2)).map(query => query.trim());
        }
        const Breakpoints = {
            XSmall: "(max-width: 599.99px)",
            Small: "(min-width: 600px) and (max-width: 959.99px)",
            Medium: "(min-width: 960px) and (max-width: 1279.99px)",
            Large: "(min-width: 1280px) and (max-width: 1919.99px)",
            XLarge: "(min-width: 1920px)",
            Handset: "(max-width: 599.99px) and (orientation: portrait), (max-width: 959.99px) and (orientation: landscape)",
            Tablet: "(min-width: 600px) and (max-width: 839.99px) and (orientation: portrait), (min-width: 960px) and (max-width: 1279.99px) and (orientation: landscape)",
            Web: "(min-width: 840px) and (orientation: portrait), (min-width: 1280px) and (orientation: landscape)",
            HandsetPortrait: "(max-width: 599.99px) and (orientation: portrait)",
            TabletPortrait: "(min-width: 600px) and (max-width: 839.99px) and (orientation: portrait)",
            WebPortrait: "(min-width: 840px) and (orientation: portrait)",
            HandsetLandscape: "(max-width: 959.99px) and (orientation: landscape)",
            TabletLandscape: "(min-width: 960px) and (max-width: 1279.99px) and (orientation: landscape)",
            WebLandscape: "(min-width: 1280px) and (orientation: landscape)"
        };
        __webpack_require__.d(__webpack_exports__, "e", (function() {
            return MatSnackBarModule;
        })), __webpack_require__.d(__webpack_exports__, "b", (function() {
            return snack_bar_MatSnackBar;
        })), __webpack_require__.d(__webpack_exports__, "d", (function() {
            return snack_bar_MatSnackBarContainer;
        })), __webpack_require__.d(__webpack_exports__, "a", (function() {
            return MAT_SNACK_BAR_DATA;
        })), __webpack_require__.d(__webpack_exports__, "c", (function() {
            return MatSnackBarConfig;
        })), __webpack_require__.d(__webpack_exports__, "f", (function() {
            return snack_bar_MatSnackBarRef;
        })), __webpack_require__.d(__webpack_exports__, "g", (function() {
            return SimpleSnackBar;
        }));
        class snack_bar_MatSnackBarRef {
            constructor(containerInstance, _overlayRef) {
                this._overlayRef = _overlayRef, this._afterDismissed = new Subject.a, this._afterOpened = new Subject.a, 
                this._onAction = new Subject.a, this._dismissedByAction = !1, this.containerInstance = containerInstance, 
                this.onAction().subscribe(() => this.dismiss()), containerInstance._onExit.subscribe(() => this._finishDismiss());
            }
            dismiss() {
                this._afterDismissed.closed || this.containerInstance.exit(), clearTimeout(this._durationTimeoutId);
            }
            dismissWithAction() {
                this._onAction.closed || (this._dismissedByAction = !0, this._onAction.next(), this._onAction.complete());
            }
            closeWithAction() {
                this.dismissWithAction();
            }
            _dismissAfter(duration) {
                this._durationTimeoutId = setTimeout(() => this.dismiss(), duration);
            }
            _open() {
                this._afterOpened.closed || (this._afterOpened.next(), this._afterOpened.complete());
            }
            _finishDismiss() {
                this._overlayRef.dispose(), this._onAction.closed || this._onAction.complete(), 
                this._afterDismissed.next({
                    dismissedByAction: this._dismissedByAction
                }), this._afterDismissed.complete(), this._dismissedByAction = !1;
            }
            afterDismissed() {
                return this._afterDismissed.asObservable();
            }
            afterOpened() {
                return this.containerInstance._onEnter;
            }
            onAction() {
                return this._onAction.asObservable();
            }
        }
        const MAT_SNACK_BAR_DATA = new core.p("MatSnackBarData");
        class MatSnackBarConfig {
            constructor() {
                this.politeness = "assertive", this.announcementMessage = "", this.duration = 0, 
                this.data = null, this.horizontalPosition = "center", this.verticalPosition = "bottom";
            }
        }
        class SimpleSnackBar {
            constructor(snackBarRef, data) {
                this.snackBarRef = snackBarRef, this.data = data;
            }
            action() {
                this.snackBarRef.dismissWithAction();
            }
            get hasAction() {
                return !!this.data.action;
            }
        }
        class snack_bar_MatSnackBarContainer extends fesm2015_portal.a {
            constructor(_ngZone, _elementRef, _changeDetectorRef, snackBarConfig) {
                super(), this._ngZone = _ngZone, this._elementRef = _elementRef, this._changeDetectorRef = _changeDetectorRef, 
                this.snackBarConfig = snackBarConfig, this._destroyed = !1, this._onExit = new Subject.a, 
                this._onEnter = new Subject.a, this._animationState = "void", this._role = "assertive" !== snackBarConfig.politeness || snackBarConfig.announcementMessage ? "off" === snackBarConfig.politeness ? null : "status" : "alert";
            }
            attachComponentPortal(portal) {
                return this._assertNotAttached(), this._applySnackBarClasses(), this._portalOutlet.attachComponentPortal(portal);
            }
            attachTemplatePortal(portal) {
                return this._assertNotAttached(), this._applySnackBarClasses(), this._portalOutlet.attachTemplatePortal(portal);
            }
            onAnimationEnd(event) {
                const {fromState: fromState, toState: toState} = event;
                if (("void" === toState && "void" !== fromState || "hidden" === toState) && this._completeExit(), 
                "visible" === toState) {
                    const onEnter = this._onEnter;
                    this._ngZone.run(() => {
                        onEnter.next(), onEnter.complete();
                    });
                }
            }
            enter() {
                this._destroyed || (this._animationState = "visible", this._changeDetectorRef.detectChanges());
            }
            exit() {
                return this._animationState = "hidden", this._onExit;
            }
            ngOnDestroy() {
                this._destroyed = !0, this._completeExit();
            }
            _completeExit() {
                this._ngZone.onMicrotaskEmpty.asObservable().pipe(Object(take.a)(1)).subscribe(() => {
                    this._onExit.next(), this._onExit.complete();
                });
            }
            _applySnackBarClasses() {
                const element = this._elementRef.nativeElement, panelClasses = this.snackBarConfig.panelClass;
                panelClasses && (Array.isArray(panelClasses) ? panelClasses.forEach(cssClass => element.classList.add(cssClass)) : element.classList.add(panelClasses)), 
                "center" === this.snackBarConfig.horizontalPosition && element.classList.add("mat-snack-bar-center"), 
                "top" === this.snackBarConfig.verticalPosition && element.classList.add("mat-snack-bar-top");
            }
            _assertNotAttached() {
                if (this._portalOutlet.hasAttached()) throw Error("Attempting to attach snack bar content after content is already attached");
            }
        }
        class MatSnackBarModule {}
        const MAT_SNACK_BAR_DEFAULT_OPTIONS = new core.p("mat-snack-bar-default-options", {
            providedIn: "root",
            factory: function() {
                return new MatSnackBarConfig;
            }
        });
        let snack_bar_MatSnackBar = (() => {
            class MatSnackBar {
                constructor(_overlay, _live, _injector, _breakpointObserver, _parentSnackBar, _defaultConfig) {
                    this._overlay = _overlay, this._live = _live, this._injector = _injector, this._breakpointObserver = _breakpointObserver, 
                    this._parentSnackBar = _parentSnackBar, this._defaultConfig = _defaultConfig, this._snackBarRefAtThisLevel = null;
                }
                get _openedSnackBarRef() {
                    const parent = this._parentSnackBar;
                    return parent ? parent._openedSnackBarRef : this._snackBarRefAtThisLevel;
                }
                set _openedSnackBarRef(value) {
                    this._parentSnackBar ? this._parentSnackBar._openedSnackBarRef = value : this._snackBarRefAtThisLevel = value;
                }
                openFromComponent(component, config) {
                    return this._attach(component, config);
                }
                openFromTemplate(template, config) {
                    return this._attach(template, config);
                }
                open(message, action = "", config) {
                    const _config = Object.assign({}, this._defaultConfig, config);
                    return _config.data = {
                        message: message,
                        action: action
                    }, _config.announcementMessage || (_config.announcementMessage = message), this.openFromComponent(SimpleSnackBar, _config);
                }
                dismiss() {
                    this._openedSnackBarRef && this._openedSnackBarRef.dismiss();
                }
                ngOnDestroy() {
                    this._snackBarRefAtThisLevel && this._snackBarRefAtThisLevel.dismiss();
                }
                _attachSnackBarContainer(overlayRef, config) {
                    const injector = new fesm2015_portal.f(config && config.viewContainerRef && config.viewContainerRef.injector || this._injector, new WeakMap([ [ MatSnackBarConfig, config ] ])), containerPortal = new fesm2015_portal.d(snack_bar_MatSnackBarContainer, config.viewContainerRef, injector), containerRef = overlayRef.attach(containerPortal);
                    return containerRef.instance.snackBarConfig = config, containerRef.instance;
                }
                _attach(content, userConfig) {
                    const config = Object.assign({}, new MatSnackBarConfig, this._defaultConfig, userConfig), overlayRef = this._createOverlay(config), container = this._attachSnackBarContainer(overlayRef, config), snackBarRef = new snack_bar_MatSnackBarRef(container, overlayRef);
                    if (content instanceof core.L) {
                        const portal = new fesm2015_portal.h(content, null, {
                            $implicit: config.data,
                            snackBarRef: snackBarRef
                        });
                        snackBarRef.instance = container.attachTemplatePortal(portal);
                    } else {
                        const injector = this._createInjector(config, snackBarRef), portal = new fesm2015_portal.d(content, void 0, injector), contentRef = container.attachComponentPortal(portal);
                        snackBarRef.instance = contentRef.instance;
                    }
                    return this._breakpointObserver.observe(Breakpoints.HandsetPortrait).pipe(Object(takeUntil.a)(overlayRef.detachments())).subscribe(state => {
                        const classList = overlayRef.overlayElement.classList;
                        state.matches ? classList.add("mat-snack-bar-handset") : classList.remove("mat-snack-bar-handset");
                    }), this._animateSnackBar(snackBarRef, config), this._openedSnackBarRef = snackBarRef, 
                    this._openedSnackBarRef;
                }
                _animateSnackBar(snackBarRef, config) {
                    snackBarRef.afterDismissed().subscribe(() => {
                        this._openedSnackBarRef == snackBarRef && (this._openedSnackBarRef = null), config.announcementMessage && this._live.clear();
                    }), this._openedSnackBarRef ? (this._openedSnackBarRef.afterDismissed().subscribe(() => {
                        snackBarRef.containerInstance.enter();
                    }), this._openedSnackBarRef.dismiss()) : snackBarRef.containerInstance.enter(), 
                    config.duration && config.duration > 0 && snackBarRef.afterOpened().subscribe(() => snackBarRef._dismissAfter(config.duration)), 
                    config.announcementMessage && this._live.announce(config.announcementMessage, config.politeness);
                }
                _createOverlay(config) {
                    const overlayConfig = new overlay.b;
                    overlayConfig.direction = config.direction;
                    let positionStrategy = this._overlay.position().global();
                    const isRtl = "rtl" === config.direction, isLeft = "left" === config.horizontalPosition || "start" === config.horizontalPosition && !isRtl || "end" === config.horizontalPosition && isRtl, isRight = !isLeft && "center" !== config.horizontalPosition;
                    return isLeft ? positionStrategy.left("0") : isRight ? positionStrategy.right("0") : positionStrategy.centerHorizontally(), 
                    "top" === config.verticalPosition ? positionStrategy.top("0") : positionStrategy.bottom("0"), 
                    overlayConfig.positionStrategy = positionStrategy, this._overlay.create(overlayConfig);
                }
                _createInjector(config, snackBarRef) {
                    return new fesm2015_portal.f(config && config.viewContainerRef && config.viewContainerRef.injector || this._injector, new WeakMap([ [ snack_bar_MatSnackBarRef, snackBarRef ], [ MAT_SNACK_BAR_DATA, config.data ] ]));
                }
            }
            return MatSnackBar.ngInjectableDef = Object(core.Yb)({
                factory: function() {
                    return new MatSnackBar(Object(core.Zb)(overlay.a), Object(core.Zb)(a11y.f), Object(core.Zb)(core.n), Object(core.Zb)(layout_BreakpointObserver), Object(core.Zb)(MatSnackBar, 12), Object(core.Zb)(MAT_SNACK_BAR_DEFAULT_OPTIONS));
                },
                token: MatSnackBar,
                providedIn: MatSnackBarModule
            }), MatSnackBar;
        })();
    }
} ]);
//# sourceMappingURL=default~code-code-example-module-ngfactory~code-code-tabs-module-ngfactory.js.map