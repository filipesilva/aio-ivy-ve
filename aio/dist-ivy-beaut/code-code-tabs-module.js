(window.webpackJsonp = window.webpackJsonp || []).push([ [ 6 ], {
    g5Zp: function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        var common = __webpack_require__("ofXK"), code_component = __webpack_require__("6CTB"), core = __webpack_require__("fXoL"), animations = __webpack_require__("R1ws"), fesm2015_core = __webpack_require__("FKr1");
        const _c11 = [ 1, "mat-card" ], _c12 = [ "*", [ [ "mat-card-footer" ] ] ], _c13 = [ "*", "mat-card-footer" ];
        let card_MatCard = (() => {
            class MatCard {
                constructor(_animationMode) {
                    this._animationMode = _animationMode;
                }
            }
            return MatCard.ɵfac = function(t) {
                return new (t || MatCard)(core.Pb(animations.a, 8));
            }, MatCard.ɵcmp = core.Jb({
                type: MatCard,
                selectors: [ [ "mat-card" ] ],
                hostBindings: function(rf, ctx, elIndex) {
                    1 & rf && (core.Bb(1), core.Ub(_c11)), 2 & rf && core.Fb("_mat-animation-noopable", "NoopAnimations" === ctx._animationMode);
                },
                exportAs: [ "matCard" ],
                ngContentSelectors: _c13,
                decls: 2,
                vars: 0,
                template: function(rf, ctx) {
                    1 & rf && (core.kc(_c12), core.jc(0), core.jc(1, 1));
                },
                styles: [ ".mat-card{transition:box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);display:block;position:relative;padding:16px;border-radius:4px}._mat-animation-noopable.mat-card{transition:none;animation:none}.mat-card .mat-divider-horizontal{position:absolute;left:0;width:100%}[dir=rtl] .mat-card .mat-divider-horizontal{left:auto;right:0}.mat-card .mat-divider-horizontal.mat-divider-inset{position:static;margin:0}[dir=rtl] .mat-card .mat-divider-horizontal.mat-divider-inset{margin-right:0}@media(-ms-high-contrast: active){.mat-card{outline:solid 1px}}.mat-card-actions,.mat-card-subtitle,.mat-card-content{display:block;margin-bottom:16px}.mat-card-title{display:block;margin-bottom:8px}.mat-card-actions{margin-left:-8px;margin-right:-8px;padding:8px 0}.mat-card-actions-align-end{display:flex;justify-content:flex-end}.mat-card-image{width:calc(100% + 32px);margin:0 -16px 16px -16px}.mat-card-footer{display:block;margin:0 -16px -16px -16px}.mat-card-actions .mat-button,.mat-card-actions .mat-raised-button,.mat-card-actions .mat-stroked-button{margin:0 8px}.mat-card-header{display:flex;flex-direction:row}.mat-card-header .mat-card-title{margin-bottom:12px}.mat-card-header-text{margin:0 16px}.mat-card-avatar{height:40px;width:40px;border-radius:50%;flex-shrink:0;object-fit:cover}.mat-card-title-group{display:flex;justify-content:space-between}.mat-card-sm-image{width:80px;height:80px}.mat-card-md-image{width:112px;height:112px}.mat-card-lg-image{width:152px;height:152px}.mat-card-xl-image{width:240px;height:240px;margin:-8px}.mat-card-title-group>.mat-card-xl-image{margin:-8px 0 8px}@media(max-width: 599px){.mat-card-title-group{margin:0}.mat-card-xl-image{margin-left:0;margin-right:0}}.mat-card>:first-child,.mat-card-content>:first-child{margin-top:0}.mat-card>:last-child:not(.mat-card-footer),.mat-card-content>:last-child:not(.mat-card-footer){margin-bottom:0}.mat-card-image:first-child{margin-top:-16px;border-top-left-radius:inherit;border-top-right-radius:inherit}.mat-card>.mat-card-actions:last-child{margin-bottom:-8px;padding-bottom:0}.mat-card-actions .mat-button:first-child,.mat-card-actions .mat-raised-button:first-child,.mat-card-actions .mat-stroked-button:first-child{margin-left:0;margin-right:0}.mat-card-title:not(:first-child),.mat-card-subtitle:not(:first-child){margin-top:-4px}.mat-card-header .mat-card-subtitle:not(:first-child){margin-top:-8px}.mat-card>.mat-card-xl-image:first-child{margin-top:-8px}.mat-card>.mat-card-xl-image:last-child{margin-bottom:-8px}/*# sourceMappingURL=card.css.map */\n" ],
                encapsulation: 2,
                changeDetection: 0
            }), MatCard;
        })(), card_MatCardModule = (() => {
            class MatCardModule {}
            return MatCardModule.ɵmod = core.Nb({
                type: MatCardModule
            }), MatCardModule.ɵinj = core.Mb({
                factory: function(t) {
                    return new (t || MatCardModule);
                },
                imports: [ [ fesm2015_core.b ], fesm2015_core.b ]
            }), MatCardModule;
        })();
        var observers = __webpack_require__("GU7r"), portal = __webpack_require__("+rOU"), a11y = __webpack_require__("u47x"), Subject = __webpack_require__("XNiG"), Subscription = __webpack_require__("quSY"), merge = __webpack_require__("VRyK"), fromEvent = __webpack_require__("xgIS"), of = __webpack_require__("LRne"), timer = __webpack_require__("PqYM"), bidi = __webpack_require__("cH1L"), fesm2015_animations = __webpack_require__("R0Ic"), startWith = __webpack_require__("JX91"), distinctUntilChanged = __webpack_require__("/uUt"), takeUntil = __webpack_require__("1G5W"), coercion = __webpack_require__("8LU1"), scrolling = __webpack_require__("vxfF"), fesm2015_platform = __webpack_require__("nLfN"), keycodes = __webpack_require__("FtGj");
        const tabs_c0 = [ 1, "mat-ink-bar" ];
        function MatTab_ng_template_0_Template(rf, ctx) {
            1 & rf && core.jc(0);
        }
        const tabs_c1 = [ "*" ], tabs_c2 = [ 1, "mat-tab-body" ];
        function MatTabBody_ng_template_2_Template(rf, ctx) {}
        const tabs_c3 = function(a0) {
            return {
                animationDuration: a0
            };
        }, tabs_c4 = function(a0, a1) {
            return {
                value: a0,
                params: a1
            };
        }, tabs_c5 = [ "tabBodyWrapper" ], tabs_c6 = [ "tabHeader" ], tabs_c7 = [ 1, "mat-tab-group" ];
        function MatTabGroup_div_2_ng_template_2_ng_template_0_Template(rf, ctx) {}
        function MatTabGroup_div_2_ng_template_2_Template(rf, ctx) {
            if (1 & rf && core.Cc(0, MatTabGroup_div_2_ng_template_2_ng_template_0_Template, 0, 0, "ng-template", 9), 
            2 & rf) {
                const tab_r22 = core.gc().$implicit;
                core.lc("cdkPortalOutlet", tab_r22.templateLabel);
            }
        }
        function MatTabGroup_div_2_ng_template_3_Template(rf, ctx) {
            if (1 & rf && core.Ec(0), 2 & rf) {
                const tab_r22 = core.gc().$implicit;
                core.Fc(tab_r22.textLabel);
            }
        }
        function MatTabGroup_div_2_Template(rf, ctx) {
            if (1 & rf) {
                const _r30 = core.Wb();
                core.Vb(0, "div", 6), core.cc("click", (function($event) {
                    core.uc(_r30);
                    const tab_r22 = ctx.$implicit, i_r23 = ctx.index, ctx_r29 = core.gc(), _r18 = core.rc(1);
                    return ctx_r29._handleClick(tab_r22, _r18, i_r23);
                })), core.Vb(1, "div", 7), core.Cc(2, MatTabGroup_div_2_ng_template_2_Template, 1, 1, "ng-template", 8), 
                core.Cc(3, MatTabGroup_div_2_ng_template_3_Template, 1, 1, "ng-template", 8), core.Tb(), 
                core.Tb();
            }
            if (2 & rf) {
                const tab_r22 = ctx.$implicit, i_r23 = ctx.index, ctx_r19 = core.gc();
                core.Fb("mat-tab-label-active", ctx_r19.selectedIndex == i_r23), core.lc("id", ctx_r19._getTabLabelId(i_r23))("disabled", tab_r22.disabled)("matRippleDisabled", tab_r22.disabled || ctx_r19.disableRipple), 
                core.Cb("tabIndex", ctx_r19._getTabIndex(tab_r22, i_r23))("aria-posinset", i_r23 + 1)("aria-setsize", ctx_r19._tabs.length)("aria-controls", ctx_r19._getTabContentId(i_r23))("aria-selected", ctx_r19.selectedIndex == i_r23)("aria-label", tab_r22.ariaLabel || null)("aria-labelledby", !tab_r22.ariaLabel && tab_r22.ariaLabelledby ? tab_r22.ariaLabelledby : null), 
                core.Ab(2), core.lc("ngIf", tab_r22.templateLabel), core.Ab(1), core.lc("ngIf", !tab_r22.templateLabel);
            }
        }
        function MatTabGroup_mat_tab_body_5_Template(rf, ctx) {
            if (1 & rf) {
                const _r34 = core.Wb();
                core.Vb(0, "mat-tab-body", 10), core.cc("_onCentered", (function($event) {
                    return core.uc(_r34), core.gc()._removeTabBodyWrapperHeight();
                })), core.cc("_onCentering", (function($event) {
                    return core.uc(_r34), core.gc()._setTabBodyWrapperHeight($event);
                })), core.Tb();
            }
            if (2 & rf) {
                const tab_r31 = ctx.$implicit, i_r32 = ctx.index, ctx_r21 = core.gc();
                core.Fb("mat-tab-body-active", ctx_r21.selectedIndex == i_r32), core.lc("id", ctx_r21._getTabContentId(i_r32))("content", tab_r31.content)("position", tab_r31.position)("origin", tab_r31.origin)("animationDuration", ctx_r21.animationDuration), 
                core.Cb("aria-labelledby", ctx_r21._getTabLabelId(i_r32));
            }
        }
        const tabs_c8 = [ "tabListContainer" ], tabs_c9 = [ "tabList" ], tabs_c10 = [ "nextPaginator" ], tabs_c11 = [ "previousPaginator" ], tabs_c12 = [ 1, "mat-tab-header" ], _MAT_INK_BAR_POSITIONER = new core.p("MatInkBarPositioner", {
            providedIn: "root",
            factory: function() {
                return element => ({
                    left: element ? (element.offsetLeft || 0) + "px" : "0",
                    width: element ? (element.offsetWidth || 0) + "px" : "0"
                });
            }
        });
        let tabs_MatInkBar = (() => {
            class MatInkBar {
                constructor(_elementRef, _ngZone, _inkBarPositioner, _animationMode) {
                    this._elementRef = _elementRef, this._ngZone = _ngZone, this._inkBarPositioner = _inkBarPositioner, 
                    this._animationMode = _animationMode;
                }
                alignToElement(element) {
                    this.show(), "undefined" != typeof requestAnimationFrame ? this._ngZone.runOutsideAngular(() => {
                        requestAnimationFrame(() => this._setStyles(element));
                    }) : this._setStyles(element);
                }
                show() {
                    this._elementRef.nativeElement.style.visibility = "visible";
                }
                hide() {
                    this._elementRef.nativeElement.style.visibility = "hidden";
                }
                _setStyles(element) {
                    const positions = this._inkBarPositioner(element), inkBar = this._elementRef.nativeElement;
                    inkBar.style.left = positions.left, inkBar.style.width = positions.width;
                }
            }
            return MatInkBar.ɵfac = function(t) {
                return new (t || MatInkBar)(core.Pb(core.k), core.Pb(core.y), core.Pb(_MAT_INK_BAR_POSITIONER), core.Pb(animations.a, 8));
            }, MatInkBar.ɵdir = core.Kb({
                type: MatInkBar,
                selectors: [ [ "mat-ink-bar" ] ],
                hostBindings: function(rf, ctx, elIndex) {
                    1 & rf && (core.Bb(1), core.Ub(tabs_c0)), 2 & rf && core.Fb("_mat-animation-noopable", "NoopAnimations" === ctx._animationMode);
                }
            }), MatInkBar;
        })(), tabs_MatTabContent = (() => {
            class MatTabContent {
                constructor(template) {
                    this.template = template;
                }
            }
            return MatTabContent.ɵfac = function(t) {
                return new (t || MatTabContent)(core.Pb(core.L));
            }, MatTabContent.ɵdir = core.Kb({
                type: MatTabContent,
                selectors: [ [ "", "matTabContent", "" ] ]
            }), MatTabContent;
        })(), tabs_MatTabLabel = (() => {
            class MatTabLabel extends portal.b {}
            return MatTabLabel.ɵfac = function(t) {
                return ɵMatTabLabel_BaseFactory(t || MatTabLabel);
            }, MatTabLabel.ɵdir = core.Kb({
                type: MatTabLabel,
                selectors: [ [ "", "mat-tab-label", "" ], [ "", "matTabLabel", "" ] ],
                features: [ core.xb ]
            }), MatTabLabel;
        })();
        const ɵMatTabLabel_BaseFactory = core.Xb(tabs_MatTabLabel);
        class MatTabBase {}
        const _MatTabMixinBase = Object(fesm2015_core.h)(MatTabBase);
        let tabs_MatTab = (() => {
            class MatTab extends _MatTabMixinBase {
                constructor(_viewContainerRef) {
                    super(), this._viewContainerRef = _viewContainerRef, this.textLabel = "", this._contentPortal = null, 
                    this._stateChanges = new Subject.a, this.position = null, this.origin = null, this.isActive = !1;
                }
                get content() {
                    return this._contentPortal;
                }
                ngOnChanges(changes) {
                    (changes.hasOwnProperty("textLabel") || changes.hasOwnProperty("disabled")) && this._stateChanges.next();
                }
                ngOnDestroy() {
                    this._stateChanges.complete();
                }
                ngOnInit() {
                    this._contentPortal = new portal.i(this._explicitContent || this._implicitContent, this._viewContainerRef);
                }
            }
            return MatTab.ɵfac = function(t) {
                return new (t || MatTab)(core.Pb(core.O));
            }, MatTab.ɵcmp = core.Jb({
                type: MatTab,
                selectors: [ [ "mat-tab" ] ],
                contentQueries: function(rf, ctx, dirIndex) {
                    var _t;
                    1 & rf && (core.Hb(dirIndex, tabs_MatTabLabel, !0), core.xc(dirIndex, tabs_MatTabContent, !0, core.L)), 
                    2 & rf && (core.qc(_t = core.dc()) && (ctx.templateLabel = _t.first), core.qc(_t = core.dc()) && (ctx._explicitContent = _t.first));
                },
                viewQuery: function(rf, ctx) {
                    var _t;
                    1 & rf && core.yc(core.L, !0), 2 & rf && core.qc(_t = core.dc()) && (ctx._implicitContent = _t.first);
                },
                inputs: {
                    disabled: "disabled",
                    textLabel: [ "label", "textLabel" ],
                    ariaLabel: [ "aria-label", "ariaLabel" ],
                    ariaLabelledby: [ "aria-labelledby", "ariaLabelledby" ]
                },
                exportAs: [ "matTab" ],
                features: [ core.xb, core.yb() ],
                ngContentSelectors: tabs_c1,
                decls: 1,
                vars: 0,
                template: function(rf, ctx) {
                    1 & rf && (core.kc(), core.Cc(0, MatTab_ng_template_0_Template, 1, 0, "ng-template"));
                },
                encapsulation: 2,
                changeDetection: 0
            }), MatTab;
        })();
        const matTabsAnimations = {
            translateTab: Object(fesm2015_animations.j)("translateTab", [ Object(fesm2015_animations.g)("center, void, left-origin-center, right-origin-center", Object(fesm2015_animations.h)({
                transform: "none"
            })), Object(fesm2015_animations.g)("left", Object(fesm2015_animations.h)({
                transform: "translate3d(-100%, 0, 0)",
                minHeight: "1px"
            })), Object(fesm2015_animations.g)("right", Object(fesm2015_animations.h)({
                transform: "translate3d(100%, 0, 0)",
                minHeight: "1px"
            })), Object(fesm2015_animations.i)("* => left, * => right, left => center, right => center", Object(fesm2015_animations.e)("{{animationDuration}} cubic-bezier(0.35, 0, 0.25, 1)")), Object(fesm2015_animations.i)("void => left-origin-center", [ Object(fesm2015_animations.h)({
                transform: "translate3d(-100%, 0, 0)"
            }), Object(fesm2015_animations.e)("{{animationDuration}} cubic-bezier(0.35, 0, 0.25, 1)") ]), Object(fesm2015_animations.i)("void => right-origin-center", [ Object(fesm2015_animations.h)({
                transform: "translate3d(100%, 0, 0)"
            }), Object(fesm2015_animations.e)("{{animationDuration}} cubic-bezier(0.35, 0, 0.25, 1)") ]) ])
        };
        let tabs_MatTabBodyPortal = (() => {
            class MatTabBodyPortal extends portal.c {
                constructor(componentFactoryResolver, viewContainerRef, _host) {
                    super(componentFactoryResolver, viewContainerRef), this._host = _host, this._centeringSub = Subscription.a.EMPTY, 
                    this._leavingSub = Subscription.a.EMPTY;
                }
                ngOnInit() {
                    super.ngOnInit(), this._centeringSub = this._host._beforeCentering.pipe(Object(startWith.a)(this._host._isCenterPosition(this._host._position))).subscribe(isCentering => {
                        isCentering && !this.hasAttached() && this.attach(this._host._content);
                    }), this._leavingSub = this._host._afterLeavingCenter.subscribe(() => {
                        this.detach();
                    });
                }
                ngOnDestroy() {
                    super.ngOnDestroy(), this._centeringSub.unsubscribe(), this._leavingSub.unsubscribe();
                }
            }
            return MatTabBodyPortal.ɵfac = function(t) {
                return new (t || MatTabBodyPortal)(core.Pb(core.j), core.Pb(core.O), core.Pb(Object(core.T)(() => tabs_MatTabBody)));
            }, MatTabBodyPortal.ɵdir = core.Kb({
                type: MatTabBodyPortal,
                selectors: [ [ "", "matTabBodyHost", "" ] ],
                features: [ core.xb ]
            }), MatTabBodyPortal;
        })(), tabs_MatTabBodyBase = (() => {
            class _MatTabBodyBase {
                constructor(_elementRef, _dir, changeDetectorRef) {
                    this._elementRef = _elementRef, this._dir = _dir, this._dirChangeSubscription = Subscription.a.EMPTY, 
                    this._translateTabComplete = new Subject.a, this._onCentering = new core.m, this._beforeCentering = new core.m, 
                    this._afterLeavingCenter = new core.m, this._onCentered = new core.m(!0), this.animationDuration = "500ms", 
                    _dir && (this._dirChangeSubscription = _dir.change.subscribe(dir => {
                        this._computePositionAnimationState(dir), changeDetectorRef.markForCheck();
                    })), this._translateTabComplete.pipe(Object(distinctUntilChanged.a)((x, y) => x.fromState === y.fromState && x.toState === y.toState)).subscribe(event => {
                        this._isCenterPosition(event.toState) && this._isCenterPosition(this._position) && this._onCentered.emit(), 
                        this._isCenterPosition(event.fromState) && !this._isCenterPosition(this._position) && this._afterLeavingCenter.emit();
                    });
                }
                set position(position) {
                    this._positionIndex = position, this._computePositionAnimationState();
                }
                ngOnInit() {
                    "center" == this._position && null != this.origin && (this._position = this._computePositionFromOrigin());
                }
                ngOnDestroy() {
                    this._dirChangeSubscription.unsubscribe(), this._translateTabComplete.complete();
                }
                _onTranslateTabStarted(event) {
                    const isCentering = this._isCenterPosition(event.toState);
                    this._beforeCentering.emit(isCentering), isCentering && this._onCentering.emit(this._elementRef.nativeElement.clientHeight);
                }
                _getLayoutDirection() {
                    return this._dir && "rtl" === this._dir.value ? "rtl" : "ltr";
                }
                _isCenterPosition(position) {
                    return "center" == position || "left-origin-center" == position || "right-origin-center" == position;
                }
                _computePositionAnimationState(dir = this._getLayoutDirection()) {
                    this._position = this._positionIndex < 0 ? "ltr" == dir ? "left" : "right" : this._positionIndex > 0 ? "ltr" == dir ? "right" : "left" : "center";
                }
                _computePositionFromOrigin() {
                    const dir = this._getLayoutDirection();
                    return "ltr" == dir && this.origin <= 0 || "rtl" == dir && this.origin > 0 ? "left-origin-center" : "right-origin-center";
                }
            }
            return _MatTabBodyBase.ɵfac = function(t) {
                return new (t || _MatTabBodyBase)(core.Pb(core.k), core.Pb(bidi.b, 8), core.Pb(core.h));
            }, _MatTabBodyBase.ɵdir = core.Kb({
                type: _MatTabBodyBase,
                selectors: [ [ "do-not-use-abstract-mat-tab-body-base" ] ],
                inputs: {
                    animationDuration: "animationDuration",
                    position: "position",
                    _content: [ "content", "_content" ],
                    origin: "origin"
                },
                outputs: {
                    _onCentering: "_onCentering",
                    _beforeCentering: "_beforeCentering",
                    _afterLeavingCenter: "_afterLeavingCenter",
                    _onCentered: "_onCentered"
                }
            }), _MatTabBodyBase;
        })(), tabs_MatTabBody = (() => {
            class MatTabBody extends tabs_MatTabBodyBase {
                constructor(elementRef, dir, changeDetectorRef) {
                    super(elementRef, dir, changeDetectorRef);
                }
            }
            return MatTabBody.ɵfac = function(t) {
                return new (t || MatTabBody)(core.Pb(core.k), core.Pb(bidi.b, 8), core.Pb(core.h));
            }, MatTabBody.ɵcmp = core.Jb({
                type: MatTabBody,
                selectors: [ [ "mat-tab-body" ] ],
                viewQuery: function(rf, ctx) {
                    var _t;
                    1 & rf && core.Jc(portal.f, !0), 2 & rf && core.qc(_t = core.dc()) && (ctx._portalHost = _t.first);
                },
                hostBindings: function(rf, ctx, elIndex) {
                    1 & rf && core.Ub(tabs_c2);
                },
                features: [ core.xb ],
                decls: 3,
                vars: 6,
                consts: [ [ 1, "mat-tab-body-content" ], [ "content", "" ], [ "matTabBodyHost", "" ] ],
                template: function(rf, ctx) {
                    1 & rf && (core.Vb(0, "div", 0, 1), core.cc("@translateTab.start", (function($event) {
                        return ctx._onTranslateTabStarted($event);
                    })), core.cc("@translateTab.done", (function($event) {
                        return ctx._translateTabComplete.next($event);
                    })), core.Cc(2, MatTabBody_ng_template_2_Template, 0, 0, "ng-template", 2), core.Tb()), 
                    2 & rf && core.lc("@translateTab", core.pc(3, tabs_c4, ctx._position, core.oc(1, tabs_c3, ctx.animationDuration)));
                },
                directives: [ tabs_MatTabBodyPortal ],
                styles: [ ".mat-tab-body-content{height:100%;overflow:auto}.mat-tab-group-dynamic-height .mat-tab-body-content{overflow:hidden}/*# sourceMappingURL=tab-body.css.map */\n" ],
                encapsulation: 2,
                data: {
                    animation: [ matTabsAnimations.translateTab ]
                },
                changeDetection: 0
            }), MatTabBody;
        })(), nextId = 0;
        class MatTabChangeEvent {}
        const MAT_TABS_CONFIG = new core.p("MAT_TABS_CONFIG");
        class MatTabGroupMixinBase {
            constructor(_elementRef) {
                this._elementRef = _elementRef;
            }
        }
        const _MatTabGroupMixinBase = Object(fesm2015_core.f)(Object(fesm2015_core.g)(MatTabGroupMixinBase), "primary");
        let tabs_MatTabGroupBase = (() => {
            class _MatTabGroupBase extends _MatTabGroupMixinBase {
                constructor(elementRef, _changeDetectorRef, defaultConfig, _animationMode) {
                    super(elementRef), this._changeDetectorRef = _changeDetectorRef, this._animationMode = _animationMode, 
                    this._indexToSelect = 0, this._tabBodyWrapperHeight = 0, this._tabsSubscription = Subscription.a.EMPTY, 
                    this._tabLabelSubscription = Subscription.a.EMPTY, this._dynamicHeight = !1, this._selectedIndex = null, 
                    this.headerPosition = "above", this.selectedIndexChange = new core.m, this.focusChange = new core.m, 
                    this.animationDone = new core.m, this.selectedTabChange = new core.m(!0), this._groupId = nextId++, 
                    this.animationDuration = defaultConfig && defaultConfig.animationDuration ? defaultConfig.animationDuration : "500ms";
                }
                get dynamicHeight() {
                    return this._dynamicHeight;
                }
                set dynamicHeight(value) {
                    this._dynamicHeight = Object(coercion.b)(value);
                }
                get selectedIndex() {
                    return this._selectedIndex;
                }
                set selectedIndex(value) {
                    this._indexToSelect = Object(coercion.e)(value, null);
                }
                get animationDuration() {
                    return this._animationDuration;
                }
                set animationDuration(value) {
                    this._animationDuration = /^\d+$/.test(value) ? value + "ms" : value;
                }
                get backgroundColor() {
                    return this._backgroundColor;
                }
                set backgroundColor(value) {
                    const nativeElement = this._elementRef.nativeElement;
                    nativeElement.classList.remove(`mat-background-${this.backgroundColor}`), value && nativeElement.classList.add(`mat-background-${value}`), 
                    this._backgroundColor = value;
                }
                ngAfterContentChecked() {
                    const indexToSelect = this._indexToSelect = this._clampTabIndex(this._indexToSelect);
                    if (this._selectedIndex != indexToSelect) {
                        const isFirstRun = null == this._selectedIndex;
                        isFirstRun || this.selectedTabChange.emit(this._createChangeEvent(indexToSelect)), 
                        Promise.resolve().then(() => {
                            this._tabs.forEach((tab, index) => tab.isActive = index === indexToSelect), isFirstRun || this.selectedIndexChange.emit(indexToSelect);
                        });
                    }
                    this._tabs.forEach((tab, index) => {
                        tab.position = index - indexToSelect, null == this._selectedIndex || 0 != tab.position || tab.origin || (tab.origin = indexToSelect - this._selectedIndex);
                    }), this._selectedIndex !== indexToSelect && (this._selectedIndex = indexToSelect, 
                    this._changeDetectorRef.markForCheck());
                }
                ngAfterContentInit() {
                    this._subscribeToTabLabels(), this._tabsSubscription = this._tabs.changes.subscribe(() => {
                        if (this._clampTabIndex(this._indexToSelect) === this._selectedIndex) {
                            const tabs = this._tabs.toArray();
                            for (let i = 0; i < tabs.length; i++) if (tabs[i].isActive) {
                                this._indexToSelect = this._selectedIndex = i;
                                break;
                            }
                        }
                        this._subscribeToTabLabels(), this._changeDetectorRef.markForCheck();
                    });
                }
                ngOnDestroy() {
                    this._tabsSubscription.unsubscribe(), this._tabLabelSubscription.unsubscribe();
                }
                realignInkBar() {
                    this._tabHeader && this._tabHeader._alignInkBarToSelectedTab();
                }
                _focusChanged(index) {
                    this.focusChange.emit(this._createChangeEvent(index));
                }
                _createChangeEvent(index) {
                    const event = new MatTabChangeEvent;
                    return event.index = index, this._tabs && this._tabs.length && (event.tab = this._tabs.toArray()[index]), 
                    event;
                }
                _subscribeToTabLabels() {
                    this._tabLabelSubscription && this._tabLabelSubscription.unsubscribe(), this._tabLabelSubscription = Object(merge.a)(...this._tabs.map(tab => tab._stateChanges)).subscribe(() => this._changeDetectorRef.markForCheck());
                }
                _clampTabIndex(index) {
                    return Math.min(this._tabs.length - 1, Math.max(index || 0, 0));
                }
                _getTabLabelId(i) {
                    return `mat-tab-label-${this._groupId}-${i}`;
                }
                _getTabContentId(i) {
                    return `mat-tab-content-${this._groupId}-${i}`;
                }
                _setTabBodyWrapperHeight(tabHeight) {
                    if (!this._dynamicHeight || !this._tabBodyWrapperHeight) return;
                    const wrapper = this._tabBodyWrapper.nativeElement;
                    wrapper.style.height = this._tabBodyWrapperHeight + "px", this._tabBodyWrapper.nativeElement.offsetHeight && (wrapper.style.height = tabHeight + "px");
                }
                _removeTabBodyWrapperHeight() {
                    const wrapper = this._tabBodyWrapper.nativeElement;
                    this._tabBodyWrapperHeight = wrapper.clientHeight, wrapper.style.height = "", this.animationDone.emit();
                }
                _handleClick(tab, tabHeader, index) {
                    tab.disabled || (this.selectedIndex = tabHeader.focusIndex = index);
                }
                _getTabIndex(tab, idx) {
                    return tab.disabled ? null : this.selectedIndex === idx ? 0 : -1;
                }
            }
            return _MatTabGroupBase.ɵfac = function(t) {
                return new (t || _MatTabGroupBase)(core.Pb(core.k), core.Pb(core.h), core.Pb(MAT_TABS_CONFIG, 8), core.Pb(animations.a, 8));
            }, _MatTabGroupBase.ɵdir = core.Kb({
                type: _MatTabGroupBase,
                selectors: [ [ "do-not-use-abstract-mat-tab-group-base" ] ],
                inputs: {
                    headerPosition: "headerPosition",
                    animationDuration: "animationDuration",
                    dynamicHeight: "dynamicHeight",
                    selectedIndex: "selectedIndex",
                    backgroundColor: "backgroundColor"
                },
                outputs: {
                    selectedIndexChange: "selectedIndexChange",
                    focusChange: "focusChange",
                    animationDone: "animationDone",
                    selectedTabChange: "selectedTabChange"
                },
                features: [ core.xb ]
            }), _MatTabGroupBase;
        })(), tabs_MatTabGroup = (() => {
            class MatTabGroup extends tabs_MatTabGroupBase {
                constructor(elementRef, changeDetectorRef, defaultConfig, animationMode) {
                    super(elementRef, changeDetectorRef, defaultConfig, animationMode);
                }
            }
            return MatTabGroup.ɵfac = function(t) {
                return new (t || MatTabGroup)(core.Pb(core.k), core.Pb(core.h), core.Pb(MAT_TABS_CONFIG, 8), core.Pb(animations.a, 8));
            }, MatTabGroup.ɵcmp = core.Jb({
                type: MatTabGroup,
                selectors: [ [ "mat-tab-group" ] ],
                contentQueries: function(rf, ctx, dirIndex) {
                    var _t;
                    1 & rf && core.Hb(dirIndex, tabs_MatTab, !1), 2 & rf && core.qc(_t = core.dc()) && (ctx._tabs = _t);
                },
                viewQuery: function(rf, ctx) {
                    var _t;
                    1 & rf && (core.Jc(tabs_c5, !0), core.Jc(tabs_c6, !0)), 2 & rf && (core.qc(_t = core.dc()) && (ctx._tabBodyWrapper = _t.first), 
                    core.qc(_t = core.dc()) && (ctx._tabHeader = _t.first));
                },
                hostBindings: function(rf, ctx, elIndex) {
                    1 & rf && (core.Bb(2), core.Ub(tabs_c7)), 2 & rf && (core.Fb("mat-tab-group-dynamic-height", ctx.dynamicHeight), 
                    core.Fb("mat-tab-group-inverted-header", "below" === ctx.headerPosition));
                },
                inputs: {
                    color: "color",
                    disableRipple: "disableRipple"
                },
                exportAs: [ "matTabGroup" ],
                features: [ core.xb ],
                decls: 6,
                vars: 5,
                consts: [ [ 3, "selectedIndex", "disableRipple", "indexFocused", "selectFocusedIndex" ], [ "tabHeader", "" ], [ "class", "mat-tab-label", "role", "tab", "matTabLabelWrapper", "", "mat-ripple", "", "cdkMonitorElementFocus", "", 3, "id", "mat-tab-label-active", "disabled", "matRippleDisabled", "click", 4, "ngFor", "ngForOf" ], [ 1, "mat-tab-body-wrapper" ], [ "tabBodyWrapper", "" ], [ "role", "tabpanel", 3, "id", "mat-tab-body-active", "content", "position", "origin", "animationDuration", "_onCentered", "_onCentering", 4, "ngFor", "ngForOf" ], [ "role", "tab", "matTabLabelWrapper", "", "mat-ripple", "", "cdkMonitorElementFocus", "", 1, "mat-tab-label", 3, "id", "disabled", "matRippleDisabled", "click" ], [ 1, "mat-tab-label-content" ], [ 3, "ngIf" ], [ 3, "cdkPortalOutlet" ], [ "role", "tabpanel", 3, "id", "content", "position", "origin", "animationDuration", "_onCentered", "_onCentering" ] ],
                template: function(rf, ctx) {
                    1 & rf && (core.Vb(0, "mat-tab-header", 0, 1), core.cc("indexFocused", (function($event) {
                        return ctx._focusChanged($event);
                    })), core.cc("selectFocusedIndex", (function($event) {
                        return ctx.selectedIndex = $event;
                    })), core.Cc(2, MatTabGroup_div_2_Template, 4, 13, "div", 2), core.Tb(), core.Vb(3, "div", 3, 4), 
                    core.Cc(5, MatTabGroup_mat_tab_body_5_Template, 1, 7, "mat-tab-body", 5), core.Tb()), 
                    2 & rf && (core.lc("selectedIndex", ctx.selectedIndex)("disableRipple", ctx.disableRipple), 
                    core.Ab(2), core.lc("ngForOf", ctx._tabs), core.Ab(1), core.Fb("_mat-animation-noopable", "NoopAnimations" === ctx._animationMode), 
                    core.Ab(2), core.lc("ngForOf", ctx._tabs));
                },
                directives: function() {
                    return [ tabs_MatTabHeader, common.j, tabs_MatTabLabelWrapper, fesm2015_core.c, a11y.b, common.k, portal.c, tabs_MatTabBody ];
                },
                styles: [ ".mat-tab-group{display:flex;flex-direction:column}.mat-tab-group.mat-tab-group-inverted-header{flex-direction:column-reverse}.mat-tab-label{height:48px;padding:0 24px;cursor:pointer;box-sizing:border-box;opacity:.6;min-width:160px;text-align:center;display:inline-flex;justify-content:center;align-items:center;white-space:nowrap;position:relative}.mat-tab-label:focus{outline:none}.mat-tab-label:focus:not(.mat-tab-disabled){opacity:1}@media(-ms-high-contrast: active){.mat-tab-label:focus{outline:dotted 2px}}.mat-tab-label.mat-tab-disabled{cursor:default}@media(-ms-high-contrast: active){.mat-tab-label.mat-tab-disabled{opacity:.5}}.mat-tab-label .mat-tab-label-content{display:inline-flex;justify-content:center;align-items:center;white-space:nowrap}@media(-ms-high-contrast: active){.mat-tab-label{opacity:1}}@media(max-width: 599px){.mat-tab-label{padding:0 12px}}@media(max-width: 959px){.mat-tab-label{padding:0 12px}}.mat-tab-group[mat-stretch-tabs]>.mat-tab-header .mat-tab-label{flex-basis:0;flex-grow:1}.mat-tab-body-wrapper{position:relative;overflow:hidden;display:flex;transition:height 500ms cubic-bezier(0.35, 0, 0.25, 1)}._mat-animation-noopable.mat-tab-body-wrapper{transition:none;animation:none}.mat-tab-body{top:0;left:0;right:0;bottom:0;position:absolute;display:block;overflow:hidden;flex-basis:100%}.mat-tab-body.mat-tab-body-active{position:relative;overflow-x:hidden;overflow-y:auto;z-index:1;flex-grow:1}.mat-tab-group.mat-tab-group-dynamic-height .mat-tab-body.mat-tab-body-active{overflow-y:hidden}/*# sourceMappingURL=tab-group.css.map */\n" ],
                encapsulation: 2,
                changeDetection: 0
            }), MatTabGroup;
        })();
        class MatTabLabelWrapperBase {}
        const _MatTabLabelWrapperMixinBase = Object(fesm2015_core.h)(MatTabLabelWrapperBase);
        let tabs_MatTabLabelWrapper = (() => {
            class MatTabLabelWrapper extends _MatTabLabelWrapperMixinBase {
                constructor(elementRef) {
                    super(), this.elementRef = elementRef;
                }
                focus() {
                    this.elementRef.nativeElement.focus();
                }
                getOffsetLeft() {
                    return this.elementRef.nativeElement.offsetLeft;
                }
                getOffsetWidth() {
                    return this.elementRef.nativeElement.offsetWidth;
                }
            }
            return MatTabLabelWrapper.ɵfac = function(t) {
                return new (t || MatTabLabelWrapper)(core.Pb(core.k));
            }, MatTabLabelWrapper.ɵdir = core.Kb({
                type: MatTabLabelWrapper,
                selectors: [ [ "", "matTabLabelWrapper", "" ] ],
                hostBindings: function(rf, ctx, elIndex) {
                    1 & rf && core.Bb(2), 2 & rf && (core.Cb("aria-disabled", !!ctx.disabled), core.Fb("mat-tab-disabled", ctx.disabled));
                },
                inputs: {
                    disabled: "disabled"
                },
                features: [ core.xb ]
            }), MatTabLabelWrapper;
        })();
        const passiveEventListenerOptions = Object(fesm2015_platform.e)({
            passive: !0
        }), EXAGGERATED_OVERSCROLL = 60, HEADER_SCROLL_DELAY = 650, HEADER_SCROLL_INTERVAL = 100;
        let tabs_MatPaginatedTabHeader = (() => {
            class MatPaginatedTabHeader {
                constructor(_elementRef, _changeDetectorRef, _viewportRuler, _dir, _ngZone, _platform, _animationMode) {
                    this._elementRef = _elementRef, this._changeDetectorRef = _changeDetectorRef, this._viewportRuler = _viewportRuler, 
                    this._dir = _dir, this._ngZone = _ngZone, this._platform = _platform, this._animationMode = _animationMode, 
                    this._scrollDistance = 0, this._selectedIndexChanged = !1, this._destroyed = new Subject.a, 
                    this._showPaginationControls = !1, this._disableScrollAfter = !0, this._disableScrollBefore = !0, 
                    this._stopScrolling = new Subject.a, this._selectedIndex = 0, this.selectFocusedIndex = new core.m, 
                    this.indexFocused = new core.m, _ngZone.runOutsideAngular(() => {
                        Object(fromEvent.a)(_elementRef.nativeElement, "mouseleave").pipe(Object(takeUntil.a)(this._destroyed)).subscribe(() => {
                            this._stopInterval();
                        });
                    });
                }
                get selectedIndex() {
                    return this._selectedIndex;
                }
                set selectedIndex(value) {
                    value = Object(coercion.e)(value), this._selectedIndex != value && (this._selectedIndexChanged = !0, 
                    this._selectedIndex = value, this._keyManager && this._keyManager.updateActiveItemIndex(value));
                }
                ngAfterViewInit() {
                    Object(fromEvent.a)(this._previousPaginator.nativeElement, "touchstart", passiveEventListenerOptions).pipe(Object(takeUntil.a)(this._destroyed)).subscribe(() => {
                        this._handlePaginatorPress("before");
                    }), Object(fromEvent.a)(this._nextPaginator.nativeElement, "touchstart", passiveEventListenerOptions).pipe(Object(takeUntil.a)(this._destroyed)).subscribe(() => {
                        this._handlePaginatorPress("after");
                    });
                }
                ngAfterContentInit() {
                    const dirChange = this._dir ? this._dir.change : Object(of.a)(null), resize = this._viewportRuler.change(150), realign = () => {
                        this.updatePagination(), this._alignInkBarToSelectedTab();
                    };
                    this._keyManager = new a11y.c(this._items).withHorizontalOrientation(this._getLayoutDirection()).withWrap(), 
                    this._keyManager.updateActiveItem(0), "undefined" != typeof requestAnimationFrame ? requestAnimationFrame(realign) : realign(), 
                    Object(merge.a)(dirChange, resize, this._items.changes).pipe(Object(takeUntil.a)(this._destroyed)).subscribe(() => {
                        realign(), this._keyManager.withHorizontalOrientation(this._getLayoutDirection());
                    }), this._keyManager.change.pipe(Object(takeUntil.a)(this._destroyed)).subscribe(newFocusIndex => {
                        this.indexFocused.emit(newFocusIndex), this._setTabFocus(newFocusIndex);
                    });
                }
                ngAfterContentChecked() {
                    this._tabLabelCount != this._items.length && (this.updatePagination(), this._tabLabelCount = this._items.length, 
                    this._changeDetectorRef.markForCheck()), this._selectedIndexChanged && (this._scrollToLabel(this._selectedIndex), 
                    this._checkScrollingControls(), this._alignInkBarToSelectedTab(), this._selectedIndexChanged = !1, 
                    this._changeDetectorRef.markForCheck()), this._scrollDistanceChanged && (this._updateTabScrollPosition(), 
                    this._scrollDistanceChanged = !1, this._changeDetectorRef.markForCheck());
                }
                ngOnDestroy() {
                    this._destroyed.next(), this._destroyed.complete(), this._stopScrolling.complete();
                }
                _handleKeydown(event) {
                    if (!Object(keycodes.o)(event)) switch (event.keyCode) {
                      case keycodes.f:
                        this._keyManager.setFirstItemActive(), event.preventDefault();
                        break;

                      case keycodes.c:
                        this._keyManager.setLastItemActive(), event.preventDefault();
                        break;

                      case keycodes.d:
                      case keycodes.j:
                        this.selectFocusedIndex.emit(this.focusIndex), this._itemSelected(event);
                        break;

                      default:
                        this._keyManager.onKeydown(event);
                    }
                }
                _onContentChanges() {
                    const textContent = this._elementRef.nativeElement.textContent;
                    textContent !== this._currentTextContent && (this._currentTextContent = textContent || "", 
                    this._ngZone.run(() => {
                        this.updatePagination(), this._alignInkBarToSelectedTab(), this._changeDetectorRef.markForCheck();
                    }));
                }
                updatePagination() {
                    this._checkPaginationEnabled(), this._checkScrollingControls(), this._updateTabScrollPosition();
                }
                get focusIndex() {
                    return this._keyManager ? this._keyManager.activeItemIndex : 0;
                }
                set focusIndex(value) {
                    this._isValidIndex(value) && this.focusIndex !== value && this._keyManager && this._keyManager.setActiveItem(value);
                }
                _isValidIndex(index) {
                    if (!this._items) return !0;
                    const tab = this._items ? this._items.toArray()[index] : null;
                    return !!tab && !tab.disabled;
                }
                _setTabFocus(tabIndex) {
                    if (this._showPaginationControls && this._scrollToLabel(tabIndex), this._items && this._items.length) {
                        this._items.toArray()[tabIndex].focus();
                        const containerEl = this._tabListContainer.nativeElement, dir = this._getLayoutDirection();
                        containerEl.scrollLeft = "ltr" == dir ? 0 : containerEl.scrollWidth - containerEl.offsetWidth;
                    }
                }
                _getLayoutDirection() {
                    return this._dir && "rtl" === this._dir.value ? "rtl" : "ltr";
                }
                _updateTabScrollPosition() {
                    const scrollDistance = this.scrollDistance, platform = this._platform, translateX = "ltr" === this._getLayoutDirection() ? -scrollDistance : scrollDistance;
                    this._tabList.nativeElement.style.transform = `translateX(${Math.round(translateX)}px)`, 
                    platform && (platform.TRIDENT || platform.EDGE) && (this._tabListContainer.nativeElement.scrollLeft = 0);
                }
                get scrollDistance() {
                    return this._scrollDistance;
                }
                set scrollDistance(value) {
                    this._scrollTo(value);
                }
                _scrollHeader(direction) {
                    return this._scrollTo(this._scrollDistance + ("before" == direction ? -1 : 1) * this._tabListContainer.nativeElement.offsetWidth / 3);
                }
                _handlePaginatorClick(direction) {
                    this._stopInterval(), this._scrollHeader(direction);
                }
                _scrollToLabel(labelIndex) {
                    const selectedLabel = this._items ? this._items.toArray()[labelIndex] : null;
                    if (!selectedLabel) return;
                    const viewLength = this._tabListContainer.nativeElement.offsetWidth, {offsetLeft: offsetLeft, offsetWidth: offsetWidth} = selectedLabel.elementRef.nativeElement;
                    let labelBeforePos, labelAfterPos;
                    "ltr" == this._getLayoutDirection() ? labelAfterPos = (labelBeforePos = offsetLeft) + offsetWidth : labelBeforePos = (labelAfterPos = this._tabList.nativeElement.offsetWidth - offsetLeft) - offsetWidth;
                    const beforeVisiblePos = this.scrollDistance, afterVisiblePos = this.scrollDistance + viewLength;
                    labelBeforePos < beforeVisiblePos ? this.scrollDistance -= beforeVisiblePos - labelBeforePos + EXAGGERATED_OVERSCROLL : labelAfterPos > afterVisiblePos && (this.scrollDistance += labelAfterPos - afterVisiblePos + EXAGGERATED_OVERSCROLL);
                }
                _checkPaginationEnabled() {
                    const isEnabled = this._tabList.nativeElement.scrollWidth > this._elementRef.nativeElement.offsetWidth;
                    isEnabled || (this.scrollDistance = 0), isEnabled !== this._showPaginationControls && this._changeDetectorRef.markForCheck(), 
                    this._showPaginationControls = isEnabled;
                }
                _checkScrollingControls() {
                    this._disableScrollBefore = 0 == this.scrollDistance, this._disableScrollAfter = this.scrollDistance == this._getMaxScrollDistance(), 
                    this._changeDetectorRef.markForCheck();
                }
                _getMaxScrollDistance() {
                    return this._tabList.nativeElement.scrollWidth - this._tabListContainer.nativeElement.offsetWidth || 0;
                }
                _alignInkBarToSelectedTab() {
                    const selectedItem = this._items && this._items.length ? this._items.toArray()[this.selectedIndex] : null, selectedLabelWrapper = selectedItem ? selectedItem.elementRef.nativeElement : null;
                    selectedLabelWrapper ? this._inkBar.alignToElement(selectedLabelWrapper) : this._inkBar.hide();
                }
                _stopInterval() {
                    this._stopScrolling.next();
                }
                _handlePaginatorPress(direction) {
                    this._stopInterval(), Object(timer.a)(HEADER_SCROLL_DELAY, HEADER_SCROLL_INTERVAL).pipe(Object(takeUntil.a)(Object(merge.a)(this._stopScrolling, this._destroyed))).subscribe(() => {
                        const {maxScrollDistance: maxScrollDistance, distance: distance} = this._scrollHeader(direction);
                        (0 === distance || distance >= maxScrollDistance) && this._stopInterval();
                    });
                }
                _scrollTo(position) {
                    const maxScrollDistance = this._getMaxScrollDistance();
                    return this._scrollDistance = Math.max(0, Math.min(maxScrollDistance, position)), 
                    this._scrollDistanceChanged = !0, this._checkScrollingControls(), {
                        maxScrollDistance: maxScrollDistance,
                        distance: this._scrollDistance
                    };
                }
            }
            return MatPaginatedTabHeader.ɵfac = function(t) {
                return new (t || MatPaginatedTabHeader)(core.Pb(core.k), core.Pb(core.h), core.Pb(scrolling.e), core.Pb(bidi.b, 8), core.Pb(core.y), core.Pb(fesm2015_platform.a), core.Pb(animations.a, 8));
            }, MatPaginatedTabHeader.ɵdir = core.Kb({
                type: MatPaginatedTabHeader,
                selectors: [ [ "do-not-use-abstract-mat-paginated-tab-header" ] ]
            }), MatPaginatedTabHeader;
        })(), tabs_MatTabHeaderBase = (() => {
            class _MatTabHeaderBase extends tabs_MatPaginatedTabHeader {
                constructor(elementRef, changeDetectorRef, viewportRuler, dir, ngZone, platform, animationMode) {
                    super(elementRef, changeDetectorRef, viewportRuler, dir, ngZone, platform, animationMode), 
                    this._disableRipple = !1;
                }
                get disableRipple() {
                    return this._disableRipple;
                }
                set disableRipple(value) {
                    this._disableRipple = Object(coercion.b)(value);
                }
                _itemSelected(event) {
                    event.preventDefault();
                }
            }
            return _MatTabHeaderBase.ɵfac = function(t) {
                return new (t || _MatTabHeaderBase)(core.Pb(core.k), core.Pb(core.h), core.Pb(scrolling.e), core.Pb(bidi.b, 8), core.Pb(core.y), core.Pb(fesm2015_platform.a), core.Pb(animations.a, 8));
            }, _MatTabHeaderBase.ɵdir = core.Kb({
                type: _MatTabHeaderBase,
                selectors: [ [ "do-not-use-abstract-mat-tab-header-base" ] ],
                inputs: {
                    disableRipple: "disableRipple"
                },
                features: [ core.xb ]
            }), _MatTabHeaderBase;
        })(), tabs_MatTabHeader = (() => {
            class MatTabHeader extends tabs_MatTabHeaderBase {
                constructor(elementRef, changeDetectorRef, viewportRuler, dir, ngZone, platform, animationMode) {
                    super(elementRef, changeDetectorRef, viewportRuler, dir, ngZone, platform, animationMode);
                }
            }
            return MatTabHeader.ɵfac = function(t) {
                return new (t || MatTabHeader)(core.Pb(core.k), core.Pb(core.h), core.Pb(scrolling.e), core.Pb(bidi.b, 8), core.Pb(core.y), core.Pb(fesm2015_platform.a), core.Pb(animations.a, 8));
            }, MatTabHeader.ɵcmp = core.Jb({
                type: MatTabHeader,
                selectors: [ [ "mat-tab-header" ] ],
                contentQueries: function(rf, ctx, dirIndex) {
                    var _t;
                    1 & rf && core.Hb(dirIndex, tabs_MatTabLabelWrapper, !1), 2 & rf && core.qc(_t = core.dc()) && (ctx._items = _t);
                },
                viewQuery: function(rf, ctx) {
                    var _t;
                    1 & rf && (core.yc(tabs_MatInkBar, !0), core.yc(tabs_c8, !0), core.yc(tabs_c9, !0), 
                    core.Jc(tabs_c10, !0), core.Jc(tabs_c11, !0)), 2 & rf && (core.qc(_t = core.dc()) && (ctx._inkBar = _t.first), 
                    core.qc(_t = core.dc()) && (ctx._tabListContainer = _t.first), core.qc(_t = core.dc()) && (ctx._tabList = _t.first), 
                    core.qc(_t = core.dc()) && (ctx._nextPaginator = _t.first), core.qc(_t = core.dc()) && (ctx._previousPaginator = _t.first));
                },
                hostBindings: function(rf, ctx, elIndex) {
                    1 & rf && (core.Bb(2), core.Ub(tabs_c12)), 2 & rf && (core.Fb("mat-tab-header-pagination-controls-enabled", ctx._showPaginationControls), 
                    core.Fb("mat-tab-header-rtl", "rtl" == ctx._getLayoutDirection()));
                },
                inputs: {
                    selectedIndex: "selectedIndex"
                },
                outputs: {
                    selectFocusedIndex: "selectFocusedIndex",
                    indexFocused: "indexFocused"
                },
                features: [ core.xb ],
                ngContentSelectors: tabs_c1,
                decls: 13,
                vars: 5,
                consts: [ [ "aria-hidden", "true", "mat-ripple", "", 1, "mat-tab-header-pagination", "mat-tab-header-pagination-before", "mat-elevation-z4", 3, "matRippleDisabled", "click", "mousedown", "touchend" ], [ "previousPaginator", "" ], [ 1, "mat-tab-header-pagination-chevron" ], [ 1, "mat-tab-label-container", 3, "keydown" ], [ "tabListContainer", "" ], [ "role", "tablist", 1, "mat-tab-list", 3, "cdkObserveContent" ], [ "tabList", "" ], [ 1, "mat-tab-labels" ], [ "aria-hidden", "true", "mat-ripple", "", 1, "mat-tab-header-pagination", "mat-tab-header-pagination-after", "mat-elevation-z4", 3, "matRippleDisabled", "mousedown", "click", "touchend" ], [ "nextPaginator", "" ] ],
                template: function(rf, ctx) {
                    1 & rf && (core.kc(), core.Vb(0, "div", 0, 1), core.cc("click", (function($event) {
                        return ctx._handlePaginatorClick("before");
                    })), core.cc("mousedown", (function($event) {
                        return ctx._handlePaginatorPress("before");
                    })), core.cc("touchend", (function($event) {
                        return ctx._stopInterval();
                    })), core.Qb(2, "div", 2), core.Tb(), core.Vb(3, "div", 3, 4), core.cc("keydown", (function($event) {
                        return ctx._handleKeydown($event);
                    })), core.Vb(5, "div", 5, 6), core.cc("cdkObserveContent", (function($event) {
                        return ctx._onContentChanges();
                    })), core.Vb(7, "div", 7), core.jc(8), core.Tb(), core.Qb(9, "mat-ink-bar"), core.Tb(), 
                    core.Tb(), core.Vb(10, "div", 8, 9), core.cc("mousedown", (function($event) {
                        return ctx._handlePaginatorPress("after");
                    })), core.cc("click", (function($event) {
                        return ctx._handlePaginatorClick("after");
                    })), core.cc("touchend", (function($event) {
                        return ctx._stopInterval();
                    })), core.Qb(12, "div", 2), core.Tb()), 2 & rf && (core.Fb("mat-tab-header-pagination-disabled", ctx._disableScrollBefore), 
                    core.lc("matRippleDisabled", ctx._disableScrollBefore || ctx.disableRipple), core.Ab(5), 
                    core.Fb("_mat-animation-noopable", "NoopAnimations" === ctx._animationMode), core.Ab(5), 
                    core.Fb("mat-tab-header-pagination-disabled", ctx._disableScrollAfter), core.lc("matRippleDisabled", ctx._disableScrollAfter || ctx.disableRipple));
                },
                directives: [ fesm2015_core.c, observers.a, tabs_MatInkBar ],
                styles: [ '.mat-tab-header{display:flex;overflow:hidden;position:relative;flex-shrink:0}.mat-tab-header-pagination{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;position:relative;display:none;justify-content:center;align-items:center;min-width:32px;cursor:pointer;z-index:2;-webkit-tap-highlight-color:transparent;touch-action:none}.mat-tab-header-pagination-controls-enabled .mat-tab-header-pagination{display:flex}.mat-tab-header-pagination-before,.mat-tab-header-rtl .mat-tab-header-pagination-after{padding-left:4px}.mat-tab-header-pagination-before .mat-tab-header-pagination-chevron,.mat-tab-header-rtl .mat-tab-header-pagination-after .mat-tab-header-pagination-chevron{transform:rotate(-135deg)}.mat-tab-header-rtl .mat-tab-header-pagination-before,.mat-tab-header-pagination-after{padding-right:4px}.mat-tab-header-rtl .mat-tab-header-pagination-before .mat-tab-header-pagination-chevron,.mat-tab-header-pagination-after .mat-tab-header-pagination-chevron{transform:rotate(45deg)}.mat-tab-header-pagination-chevron{border-style:solid;border-width:2px 2px 0 0;content:"";height:8px;width:8px}.mat-tab-header-pagination-disabled{box-shadow:none;cursor:default}.mat-tab-list{flex-grow:1;position:relative;transition:transform 500ms cubic-bezier(0.35, 0, 0.25, 1)}.mat-ink-bar{position:absolute;bottom:0;height:2px;transition:500ms cubic-bezier(0.35, 0, 0.25, 1)}._mat-animation-noopable.mat-ink-bar{transition:none;animation:none}.mat-tab-group-inverted-header .mat-ink-bar{bottom:auto;top:0}@media(-ms-high-contrast: active){.mat-ink-bar{outline:solid 2px;height:0}}.mat-tab-labels{display:flex}[mat-align-tabs=center] .mat-tab-labels{justify-content:center}[mat-align-tabs=end] .mat-tab-labels{justify-content:flex-end}.mat-tab-label-container{display:flex;flex-grow:1;overflow:hidden;z-index:1}._mat-animation-noopable.mat-tab-list{transition:none;animation:none}.mat-tab-label{height:48px;padding:0 24px;cursor:pointer;box-sizing:border-box;opacity:.6;min-width:160px;text-align:center;display:inline-flex;justify-content:center;align-items:center;white-space:nowrap;position:relative}.mat-tab-label:focus{outline:none}.mat-tab-label:focus:not(.mat-tab-disabled){opacity:1}@media(-ms-high-contrast: active){.mat-tab-label:focus{outline:dotted 2px}}.mat-tab-label.mat-tab-disabled{cursor:default}@media(-ms-high-contrast: active){.mat-tab-label.mat-tab-disabled{opacity:.5}}.mat-tab-label .mat-tab-label-content{display:inline-flex;justify-content:center;align-items:center;white-space:nowrap}@media(-ms-high-contrast: active){.mat-tab-label{opacity:1}}@media(max-width: 599px){.mat-tab-label{min-width:72px}}/*# sourceMappingURL=tab-header.css.map */\n' ],
                encapsulation: 2,
                changeDetection: 0
            }), MatTabHeader;
        })(), tabs_MatTabsModule = (() => {
            class MatTabsModule {}
            return MatTabsModule.ɵmod = core.Nb({
                type: MatTabsModule
            }), MatTabsModule.ɵinj = core.Mb({
                factory: function(t) {
                    return new (t || MatTabsModule);
                },
                imports: [ [ common.c, fesm2015_core.b, portal.h, fesm2015_core.d, observers.c, a11y.a ], fesm2015_core.b ]
            }), MatTabsModule;
        })();
        const code_tabs_component_c0 = [ "content" ];
        function CodeTabsComponent_mat_tab_5_ng_template_1_Template(rf, ctx) {
            if (1 & rf && (core.Vb(0, "span"), core.Ec(1), core.Tb()), 2 & rf) {
                const tab_r111 = core.gc().$implicit;
                core.Db(tab_r111.class), core.Ab(1), core.Fc(tab_r111.header);
            }
        }
        function CodeTabsComponent_mat_tab_5_Template(rf, ctx) {
            if (1 & rf && (core.Vb(0, "mat-tab", 4), core.Cc(1, CodeTabsComponent_mat_tab_5_ng_template_1_Template, 2, 4, "ng-template", 5), 
            core.Qb(2, "aio-code", 6), core.Tb()), 2 & rf) {
                const tab_r111 = ctx.$implicit;
                core.Ab(2), core.Db(tab_r111.class), core.lc("language", tab_r111.language)("linenums", tab_r111.linenums)("path", tab_r111.path)("region", tab_r111.region)("header", tab_r111.header);
            }
        }
        const code_tabs_component_c1 = [ "*" ];
        let code_tabs_component_CodeTabsComponent = (() => {
            class CodeTabsComponent {
                ngOnInit() {
                    this.tabs = [];
                    const codeExamples = Array.from(this.content.nativeElement.querySelectorAll("code-pane"));
                    for (const tabContent of codeExamples) this.tabs.push(this.getTabInfo(tabContent));
                }
                ngAfterViewInit() {
                    this.codeComponents.toArray().forEach((codeComponent, i) => {
                        codeComponent.code = this.tabs[i].code;
                    });
                }
                getTabInfo(tabContent) {
                    return {
                        class: tabContent.getAttribute("class") || "",
                        code: tabContent.innerHTML,
                        path: tabContent.getAttribute("path") || "",
                        region: tabContent.getAttribute("region") || "",
                        header: tabContent.getAttribute("header") || void 0,
                        language: tabContent.getAttribute("language") || void 0,
                        linenums: tabContent.getAttribute("linenums") || this.linenums
                    };
                }
            }
            return CodeTabsComponent.ɵfac = function(t) {
                return new (t || CodeTabsComponent);
            }, CodeTabsComponent.ɵcmp = core.Jb({
                type: CodeTabsComponent,
                selectors: [ [ "code-tabs" ] ],
                viewQuery: function(rf, ctx) {
                    var _t;
                    1 & rf && (core.yc(code_tabs_component_c0, !0), core.Jc(code_component.a, !0)), 
                    2 & rf && (core.qc(_t = core.dc()) && (ctx.content = _t.first), core.qc(_t = core.dc()) && (ctx.codeComponents = _t));
                },
                inputs: {
                    linenums: "linenums"
                },
                ngContentSelectors: code_tabs_component_c1,
                decls: 6,
                vars: 2,
                consts: [ [ 2, "display", "none" ], [ "content", "" ], [ 1, "code-tab-group", 3, "disableRipple" ], [ "style", "overflow-y: hidden;", 4, "ngFor", "ngForOf" ], [ 2, "overflow-y", "hidden" ], [ "mat-tab-label", "" ], [ 3, "language", "linenums", "path", "region", "header" ] ],
                template: function(rf, ctx) {
                    1 & rf && (core.kc(), core.Vb(0, "div", 0, 1), core.jc(2), core.Tb(), core.Vb(3, "mat-card"), 
                    core.Vb(4, "mat-tab-group", 2), core.Cc(5, CodeTabsComponent_mat_tab_5_Template, 3, 8, "mat-tab", 3), 
                    core.Tb(), core.Tb()), 2 & rf && (core.Ab(4), core.lc("disableRipple", !0), core.Ab(1), 
                    core.lc("ngForOf", ctx.tabs));
                },
                directives: [ card_MatCard, tabs_MatTabGroup, common.j, tabs_MatTab, tabs_MatTabLabel, code_component.a ],
                encapsulation: 2
            }), CodeTabsComponent;
        })();
        var code_module = __webpack_require__("V90o");
        __webpack_require__.d(__webpack_exports__, "CodeTabsModule", (function() {
            return code_tabs_module_CodeTabsModule;
        }));
        let code_tabs_module_CodeTabsModule = (() => {
            class CodeTabsModule {
                constructor() {
                    this.customElementComponent = code_tabs_component_CodeTabsComponent;
                }
            }
            return CodeTabsModule.ɵmod = core.Nb({
                type: CodeTabsModule
            }), CodeTabsModule.ɵinj = core.Mb({
                factory: function(t) {
                    return new (t || CodeTabsModule);
                },
                imports: [ [ common.c, card_MatCardModule, tabs_MatTabsModule, code_module.a ] ]
            }), CodeTabsModule;
        })();
    }
} ]);
//# sourceMappingURL=code-code-tabs-module.js.map