        const _MAT_INK_BAR_POSITIONER = new core.p("MatInkBarPositioner", {
            providedIn: "root",
            factory: function() {
                return element => ({
                    left: element ? (element.offsetLeft || 0) + "px" : "0",
                    width: element ? (element.offsetWidth || 0) + "px" : "0"
                });
            }
        });
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
        class tabs_MatTabLabel extends portal.b {}
        class MatTabBase {}
        const _MatTabMixinBase = Object(fesm2015_core.i)(MatTabBase);
        class tabs_MatTab extends _MatTabMixinBase {
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
                this._contentPortal = new portal.h(this._explicitContent || this._implicitContent, this._viewContainerRef);
            }
        }
        class tabs_MatTabBodyPortal extends portal.c {
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
        class tabs_MatTabBodyBase {
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
        class MatTabBody extends tabs_MatTabBodyBase {
            constructor(elementRef, dir, changeDetectorRef) {
                super(elementRef, dir, changeDetectorRef);
            }
        }
        let nextId = 0;
        class MatTabChangeEvent {}
        const MAT_TABS_CONFIG = new core.p("MAT_TABS_CONFIG");
        class MatTabGroupMixinBase {
            constructor(_elementRef) {
                this._elementRef = _elementRef;
            }
        }
        const _MatTabGroupMixinBase = Object(fesm2015_core.g)(Object(fesm2015_core.h)(MatTabGroupMixinBase), "primary");
        class tabs_MatTabGroupBase extends _MatTabGroupMixinBase {
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
        class MatTabGroup extends tabs_MatTabGroupBase {
            constructor(elementRef, changeDetectorRef, defaultConfig, animationMode) {
                super(elementRef, changeDetectorRef, defaultConfig, animationMode);
            }
        }
        class MatTabLabelWrapperBase {}
        const _MatTabLabelWrapperMixinBase = Object(fesm2015_core.i)(MatTabLabelWrapperBase);
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
        const passiveEventListenerOptions = Object(fesm2015_platform.e)({
            passive: !0
        }), EXAGGERATED_OVERSCROLL = 60, HEADER_SCROLL_DELAY = 650, HEADER_SCROLL_INTERVAL = 100;
        class tabs_MatPaginatedTabHeader {
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
        class tabs_MatTabHeaderBase extends tabs_MatPaginatedTabHeader {
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
        class MatTabHeader extends tabs_MatTabHeaderBase {
            constructor(elementRef, changeDetectorRef, viewportRuler, dir, ngZone, platform, animationMode) {
                super(elementRef, changeDetectorRef, viewportRuler, dir, ngZone, platform, animationMode);
            }
        }
        class MatTabsModule {}
        var common = __webpack_require__("SVse"), observers = __webpack_require__("9b/N"), bidi = __webpack_require__("9gLZ"), fesm2015_animations = __webpack_require__("omvX"), scrolling = __webpack_require__("7KAL"), RenderType_MatTabGroup = core.ub({
            encapsulation: 2,
            styles: [ ".mat-tab-group{display:flex;flex-direction:column}.mat-tab-group.mat-tab-group-inverted-header{flex-direction:column-reverse}.mat-tab-label{height:48px;padding:0 24px;cursor:pointer;box-sizing:border-box;opacity:.6;min-width:160px;text-align:center;display:inline-flex;justify-content:center;align-items:center;white-space:nowrap;position:relative}.mat-tab-label:focus{outline:none}.mat-tab-label:focus:not(.mat-tab-disabled){opacity:1}@media(-ms-high-contrast: active){.mat-tab-label:focus{outline:dotted 2px}}.mat-tab-label.mat-tab-disabled{cursor:default}@media(-ms-high-contrast: active){.mat-tab-label.mat-tab-disabled{opacity:.5}}.mat-tab-label .mat-tab-label-content{display:inline-flex;justify-content:center;align-items:center;white-space:nowrap}@media(-ms-high-contrast: active){.mat-tab-label{opacity:1}}@media(max-width: 599px){.mat-tab-label{padding:0 12px}}@media(max-width: 959px){.mat-tab-label{padding:0 12px}}.mat-tab-group[mat-stretch-tabs]>.mat-tab-header .mat-tab-label{flex-basis:0;flex-grow:1}.mat-tab-body-wrapper{position:relative;overflow:hidden;display:flex;transition:height 500ms cubic-bezier(0.35, 0, 0.25, 1)}._mat-animation-noopable.mat-tab-body-wrapper{transition:none;animation:none}.mat-tab-body{top:0;left:0;right:0;bottom:0;position:absolute;display:block;overflow:hidden;flex-basis:100%}.mat-tab-body.mat-tab-body-active{position:relative;overflow-x:hidden;overflow-y:auto;z-index:1;flex-grow:1}.mat-tab-group.mat-tab-group-dynamic-height .mat-tab-body.mat-tab-body-active{overflow-y:hidden}/*# sourceMappingURL=tab-group.css.map */\n" ],
            data: {}
        });
        function View_MatTabGroup_3(_l) {
            return core.Ub(0, [ (_l()(), core.gb(0, null, null, 0)) ], null, null);
        }
        function View_MatTabGroup_2(_l) {
            return core.Ub(0, [ (_l()(), core.gb(16777216, null, null, 1, null, View_MatTabGroup_3)), core.vb(1, 212992, null, 0, portal.c, [ core.j, core.O ], {
                portal: [ 0, "portal" ]
            }, null), (_l()(), core.gb(0, null, null, 0)) ], (function(_ck, _v) {
                _ck(_v, 1, 0, _v.parent.context.$implicit.templateLabel);
            }), null);
        }
        function View_MatTabGroup_4(_l) {
            return core.Ub(0, [ (_l()(), core.Rb(0, null, [ "", "" ])) ], null, (function(_ck, _v) {
                _ck(_v, 0, 0, _v.parent.context.$implicit.textLabel);
            }));
        }
        function View_MatTabGroup_1(_l) {
            return core.Ub(0, [ (_l()(), core.wb(0, 0, null, null, 8, "div", [ [ "cdkMonitorElementFocus", "" ], [ "class", "mat-tab-label mat-ripple" ], [ "mat-ripple", "" ], [ "matTabLabelWrapper", "" ], [ "role", "tab" ] ], [ [ 8, "id", 0 ], [ 1, "tabIndex", 0 ], [ 1, "aria-posinset", 0 ], [ 1, "aria-setsize", 0 ], [ 1, "aria-controls", 0 ], [ 1, "aria-selected", 0 ], [ 1, "aria-label", 0 ], [ 1, "aria-labelledby", 0 ], [ 2, "mat-tab-label-active", null ], [ 2, "mat-ripple-unbounded", null ], [ 2, "mat-tab-disabled", null ], [ 1, "aria-disabled", 0 ] ], [ [ null, "click" ] ], (function(_v, en, $event) {
                var ad = !0;
                return "click" === en && (ad = !1 !== _v.component._handleClick(_v.context.$implicit, core.Jb(_v.parent, 3), _v.context.index) && ad), 
                ad;
            }), null, null)), core.vb(1, 212992, null, 0, fesm2015_core.d, [ core.k, core.y, fesm2015_platform.a, [ 2, fesm2015_core.b ], [ 2, fesm2015_animations.a ] ], {
                disabled: [ 0, "disabled" ]
            }, null), core.vb(2, 147456, null, 0, a11y.b, [ core.k, a11y.d ], null, null), core.vb(3, 16384, [ [ 3, 4 ] ], 0, MatTabLabelWrapper, [ core.k ], {
                disabled: [ 0, "disabled" ]
            }, null), (_l()(), core.wb(4, 0, null, null, 4, "div", [ [ "class", "mat-tab-label-content" ] ], null, null, null, null, null)), (_l()(), 
            core.gb(16777216, null, null, 1, null, View_MatTabGroup_2)), core.vb(6, 16384, null, 0, common.k, [ core.O, core.L ], {
                ngIf: [ 0, "ngIf" ]
            }, null), (_l()(), core.gb(16777216, null, null, 1, null, View_MatTabGroup_4)), core.vb(8, 16384, null, 0, common.k, [ core.O, core.L ], {
                ngIf: [ 0, "ngIf" ]
            }, null) ], (function(_ck, _v) {
                _ck(_v, 1, 0, _v.context.$implicit.disabled || _v.component.disableRipple), _ck(_v, 3, 0, _v.context.$implicit.disabled), 
                _ck(_v, 6, 0, _v.context.$implicit.templateLabel), _ck(_v, 8, 0, !_v.context.$implicit.templateLabel);
            }), (function(_ck, _v) {
                var _co = _v.component;
                _ck(_v, 0, 1, [ _co._getTabLabelId(_v.context.index), _co._getTabIndex(_v.context.$implicit, _v.context.index), _v.context.index + 1, _co._tabs.length, _co._getTabContentId(_v.context.index), _co.selectedIndex == _v.context.index, _v.context.$implicit.ariaLabel || null, !_v.context.$implicit.ariaLabel && _v.context.$implicit.ariaLabelledby ? _v.context.$implicit.ariaLabelledby : null, _co.selectedIndex == _v.context.index, core.Jb(_v, 1).unbounded, core.Jb(_v, 3).disabled, !!core.Jb(_v, 3).disabled ]);
            }));
        }
        function View_MatTabGroup_5(_l) {
            return core.Ub(0, [ (_l()(), core.wb(0, 0, null, null, 1, "mat-tab-body", [ [ "class", "mat-tab-body" ], [ "role", "tabpanel" ] ], [ [ 8, "id", 0 ], [ 1, "aria-labelledby", 0 ], [ 2, "mat-tab-body-active", null ] ], [ [ null, "_onCentered" ], [ null, "_onCentering" ] ], (function(_v, en, $event) {
                var ad = !0, _co = _v.component;
                return "_onCentered" === en && (ad = !1 !== _co._removeTabBodyWrapperHeight() && ad), 
                "_onCentering" === en && (ad = !1 !== _co._setTabBodyWrapperHeight($event) && ad), 
                ad;
            }), View_MatTabBody_0, RenderType_MatTabBody)), core.vb(1, 245760, null, 0, MatTabBody, [ core.k, [ 2, bidi.b ], core.h ], {
                _content: [ 0, "_content" ],
                origin: [ 1, "origin" ],
                animationDuration: [ 2, "animationDuration" ],
                position: [ 3, "position" ]
            }, {
                _onCentering: "_onCentering",
                _onCentered: "_onCentered"
            }) ], (function(_ck, _v) {
                _ck(_v, 1, 0, _v.context.$implicit.content, _v.context.$implicit.origin, _v.component.animationDuration, _v.context.$implicit.position);
            }), (function(_ck, _v) {
                var _co = _v.component;
                _ck(_v, 0, 0, _co._getTabContentId(_v.context.index), _co._getTabLabelId(_v.context.index), _co.selectedIndex == _v.context.index);
            }));
        }
        function View_MatTabGroup_0(_l) {
            return core.Ub(2, [ core.Nb(671088640, 1, {
                _tabBodyWrapper: 0
            }), core.Nb(671088640, 2, {
                _tabHeader: 0
            }), (_l()(), core.wb(2, 0, null, null, 4, "mat-tab-header", [ [ "class", "mat-tab-header" ] ], [ [ 2, "mat-tab-header-pagination-controls-enabled", null ], [ 2, "mat-tab-header-rtl", null ] ], [ [ null, "indexFocused" ], [ null, "selectFocusedIndex" ] ], (function(_v, en, $event) {
                var ad = !0, _co = _v.component;
                return "indexFocused" === en && (ad = !1 !== _co._focusChanged($event) && ad), "selectFocusedIndex" === en && (ad = !1 !== (_co.selectedIndex = $event) && ad), 
                ad;
            }), View_MatTabHeader_0, RenderType_MatTabHeader)), core.vb(3, 7520256, [ [ 2, 4 ], [ "tabHeader", 4 ] ], 1, MatTabHeader, [ core.k, core.h, scrolling.e, [ 2, bidi.b ], core.y, fesm2015_platform.a, [ 2, fesm2015_animations.a ] ], {
                selectedIndex: [ 0, "selectedIndex" ],
                disableRipple: [ 1, "disableRipple" ]
            }, {
                selectFocusedIndex: "selectFocusedIndex",
                indexFocused: "indexFocused"
            }), core.Nb(603979776, 3, {
                _items: 1
            }), (_l()(), core.gb(16777216, null, 0, 1, null, View_MatTabGroup_1)), core.vb(6, 278528, null, 0, common.j, [ core.O, core.L, core.r ], {
                ngForOf: [ 0, "ngForOf" ]
            }, null), (_l()(), core.wb(7, 0, [ [ 1, 0 ], [ "tabBodyWrapper", 1 ] ], null, 2, "div", [ [ "class", "mat-tab-body-wrapper" ] ], [ [ 2, "_mat-animation-noopable", null ] ], null, null, null, null)), (_l()(), 
            core.gb(16777216, null, null, 1, null, View_MatTabGroup_5)), core.vb(9, 278528, null, 0, common.j, [ core.O, core.L, core.r ], {
                ngForOf: [ 0, "ngForOf" ]
            }, null) ], (function(_ck, _v) {
                var _co = _v.component;
                _ck(_v, 3, 0, _co.selectedIndex, _co.disableRipple), _ck(_v, 6, 0, _co._tabs), _ck(_v, 9, 0, _co._tabs);
            }), (function(_ck, _v) {
                var _co = _v.component;
                _ck(_v, 2, 0, core.Jb(_v, 3)._showPaginationControls, "rtl" == core.Jb(_v, 3)._getLayoutDirection()), 
                _ck(_v, 7, 0, "NoopAnimations" === _co._animationMode);
            }));
        }
        var RenderType_MatTabBody = core.ub({
            encapsulation: 2,
            styles: [ ".mat-tab-body-content{height:100%;overflow:auto}.mat-tab-group-dynamic-height .mat-tab-body-content{overflow:hidden}/*# sourceMappingURL=tab-body.css.map */\n" ],
            data: {
                animation: [ {
                    type: 7,
                    name: "translateTab",
                    definitions: [ {
                        type: 0,
                        name: "center, void, left-origin-center, right-origin-center",
                        styles: {
                            type: 6,
                            styles: {
                                transform: "none"
                            },
                            offset: null
                        },
                        options: void 0
                    }, {
                        type: 0,
                        name: "left",
                        styles: {
                            type: 6,
                            styles: {
                                transform: "translate3d(-100%, 0, 0)",
                                minHeight: "1px"
                            },
                            offset: null
                        },
                        options: void 0
                    }, {
                        type: 0,
                        name: "right",
                        styles: {
                            type: 6,
                            styles: {
                                transform: "translate3d(100%, 0, 0)",
                                minHeight: "1px"
                            },
                            offset: null
                        },
                        options: void 0
                    }, {
                        type: 1,
                        expr: "* => left, * => right, left => center, right => center",
                        animation: {
                            type: 4,
                            styles: null,
                            timings: "{{animationDuration}} cubic-bezier(0.35, 0, 0.25, 1)"
                        },
                        options: null
                    }, {
                        type: 1,
                        expr: "void => left-origin-center",
                        animation: [ {
                            type: 6,
                            styles: {
                                transform: "translate3d(-100%, 0, 0)"
                            },
                            offset: null
                        }, {
                            type: 4,
                            styles: null,
                            timings: "{{animationDuration}} cubic-bezier(0.35, 0, 0.25, 1)"
                        } ],
                        options: null
                    }, {
                        type: 1,
                        expr: "void => right-origin-center",
                        animation: [ {
                            type: 6,
                            styles: {
                                transform: "translate3d(100%, 0, 0)"
                            },
                            offset: null
                        }, {
                            type: 4,
                            styles: null,
                            timings: "{{animationDuration}} cubic-bezier(0.35, 0, 0.25, 1)"
                        } ],
                        options: null
                    } ],
                    options: {}
                } ]
            }
        });
        function View_MatTabBody_1(_l) {
            return core.Ub(0, [ (_l()(), core.gb(0, null, null, 0)) ], null, null);
        }
        function View_MatTabBody_0(_l) {
            return core.Ub(2, [ core.Nb(671088640, 1, {
                _portalHost: 0
            }), (_l()(), core.wb(1, 0, [ [ "content", 1 ] ], null, 4, "div", [ [ "class", "mat-tab-body-content" ] ], [ [ 24, "@translateTab", 0 ] ], [ [ null, "@translateTab.start" ], [ null, "@translateTab.done" ] ], (function(_v, en, $event) {
                var ad = !0, _co = _v.component;
                return "@translateTab.start" === en && (ad = !1 !== _co._onTranslateTabStarted($event) && ad), 
                "@translateTab.done" === en && (ad = !1 !== _co._translateTabComplete.next($event) && ad), 
                ad;
            }), null, null)), core.Lb(2, {
                animationDuration: 0
            }), core.Lb(3, {
                value: 0,
                params: 1
            }), (_l()(), core.gb(16777216, null, null, 1, null, View_MatTabBody_1)), core.vb(5, 212992, null, 0, tabs_MatTabBodyPortal, [ core.j, core.O, MatTabBody ], null, null) ], (function(_ck, _v) {
                _ck(_v, 5, 0);
            }), (function(_ck, _v) {
                var _co = _v.component, currVal_0 = _ck(_v, 3, 0, _co._position, _ck(_v, 2, 0, _co.animationDuration));
                _ck(_v, 1, 0, currVal_0);
            }));
        }
        var RenderType_MatTabHeader = core.ub({
            encapsulation: 2,
            styles: [ '.mat-tab-header{display:flex;overflow:hidden;position:relative;flex-shrink:0}.mat-tab-header-pagination{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;position:relative;display:none;justify-content:center;align-items:center;min-width:32px;cursor:pointer;z-index:2;-webkit-tap-highlight-color:transparent;touch-action:none}.mat-tab-header-pagination-controls-enabled .mat-tab-header-pagination{display:flex}.mat-tab-header-pagination-before,.mat-tab-header-rtl .mat-tab-header-pagination-after{padding-left:4px}.mat-tab-header-pagination-before .mat-tab-header-pagination-chevron,.mat-tab-header-rtl .mat-tab-header-pagination-after .mat-tab-header-pagination-chevron{transform:rotate(-135deg)}.mat-tab-header-rtl .mat-tab-header-pagination-before,.mat-tab-header-pagination-after{padding-right:4px}.mat-tab-header-rtl .mat-tab-header-pagination-before .mat-tab-header-pagination-chevron,.mat-tab-header-pagination-after .mat-tab-header-pagination-chevron{transform:rotate(45deg)}.mat-tab-header-pagination-chevron{border-style:solid;border-width:2px 2px 0 0;content:"";height:8px;width:8px}.mat-tab-header-pagination-disabled{box-shadow:none;cursor:default}.mat-tab-list{flex-grow:1;position:relative;transition:transform 500ms cubic-bezier(0.35, 0, 0.25, 1)}.mat-ink-bar{position:absolute;bottom:0;height:2px;transition:500ms cubic-bezier(0.35, 0, 0.25, 1)}._mat-animation-noopable.mat-ink-bar{transition:none;animation:none}.mat-tab-group-inverted-header .mat-ink-bar{bottom:auto;top:0}@media(-ms-high-contrast: active){.mat-ink-bar{outline:solid 2px;height:0}}.mat-tab-labels{display:flex}[mat-align-tabs=center] .mat-tab-labels{justify-content:center}[mat-align-tabs=end] .mat-tab-labels{justify-content:flex-end}.mat-tab-label-container{display:flex;flex-grow:1;overflow:hidden;z-index:1}._mat-animation-noopable.mat-tab-list{transition:none;animation:none}.mat-tab-label{height:48px;padding:0 24px;cursor:pointer;box-sizing:border-box;opacity:.6;min-width:160px;text-align:center;display:inline-flex;justify-content:center;align-items:center;white-space:nowrap;position:relative}.mat-tab-label:focus{outline:none}.mat-tab-label:focus:not(.mat-tab-disabled){opacity:1}@media(-ms-high-contrast: active){.mat-tab-label:focus{outline:dotted 2px}}.mat-tab-label.mat-tab-disabled{cursor:default}@media(-ms-high-contrast: active){.mat-tab-label.mat-tab-disabled{opacity:.5}}.mat-tab-label .mat-tab-label-content{display:inline-flex;justify-content:center;align-items:center;white-space:nowrap}@media(-ms-high-contrast: active){.mat-tab-label{opacity:1}}@media(max-width: 599px){.mat-tab-label{min-width:72px}}/*# sourceMappingURL=tab-header.css.map */\n' ],
            data: {}
        });
        function View_MatTabHeader_0(_l) {
            return core.Ub(2, [ core.Nb(402653184, 1, {
                _inkBar: 0
            }), core.Nb(402653184, 2, {
                _tabListContainer: 0
            }), core.Nb(402653184, 3, {
                _tabList: 0
            }), core.Nb(671088640, 4, {
                _nextPaginator: 0
            }), core.Nb(671088640, 5, {
                _previousPaginator: 0
            }), (_l()(), core.wb(5, 0, [ [ 5, 0 ], [ "previousPaginator", 1 ] ], null, 2, "div", [ [ "aria-hidden", "true" ], [ "class", "mat-tab-header-pagination mat-tab-header-pagination-before mat-elevation-z4 mat-ripple" ], [ "mat-ripple", "" ] ], [ [ 2, "mat-tab-header-pagination-disabled", null ], [ 2, "mat-ripple-unbounded", null ] ], [ [ null, "click" ], [ null, "mousedown" ], [ null, "touchend" ] ], (function(_v, en, $event) {
                var ad = !0, _co = _v.component;
                return "click" === en && (ad = !1 !== _co._handlePaginatorClick("before") && ad), 
                "mousedown" === en && (ad = !1 !== _co._handlePaginatorPress("before") && ad), "touchend" === en && (ad = !1 !== _co._stopInterval() && ad), 
                ad;
            }), null, null)), core.vb(6, 212992, null, 0, fesm2015_core.d, [ core.k, core.y, fesm2015_platform.a, [ 2, fesm2015_core.b ], [ 2, fesm2015_animations.a ] ], {
                disabled: [ 0, "disabled" ]
            }, null), (_l()(), core.wb(7, 0, null, null, 0, "div", [ [ "class", "mat-tab-header-pagination-chevron" ] ], null, null, null, null, null)), (_l()(), 
            core.wb(8, 0, [ [ 2, 0 ], [ "tabListContainer", 1 ] ], null, 6, "div", [ [ "class", "mat-tab-label-container" ] ], null, [ [ null, "keydown" ] ], (function(_v, en, $event) {
                var ad = !0;
                return "keydown" === en && (ad = !1 !== _v.component._handleKeydown($event) && ad), 
                ad;
            }), null, null)), (_l()(), core.wb(9, 0, [ [ 3, 0 ], [ "tabList", 1 ] ], null, 5, "div", [ [ "class", "mat-tab-list" ], [ "role", "tablist" ] ], [ [ 2, "_mat-animation-noopable", null ] ], [ [ null, "cdkObserveContent" ] ], (function(_v, en, $event) {
                var ad = !0;
                return "cdkObserveContent" === en && (ad = !1 !== _v.component._onContentChanges() && ad), 
                ad;
            }), null, null)), core.vb(10, 1196032, null, 0, observers.a, [ observers.b, core.k, core.y ], null, {
                event: "cdkObserveContent"
            }), (_l()(), core.wb(11, 0, null, null, 1, "div", [ [ "class", "mat-tab-labels" ] ], null, null, null, null, null)), core.Ib(null, 0), (_l()(), 
            core.wb(13, 0, null, null, 1, "mat-ink-bar", [ [ "class", "mat-ink-bar" ] ], [ [ 2, "_mat-animation-noopable", null ] ], null, null, null, null)), core.vb(14, 16384, [ [ 1, 4 ] ], 0, MatInkBar, [ core.k, core.y, _MAT_INK_BAR_POSITIONER, [ 2, fesm2015_animations.a ] ], null, null), (_l()(), 
            core.wb(15, 0, [ [ 4, 0 ], [ "nextPaginator", 1 ] ], null, 2, "div", [ [ "aria-hidden", "true" ], [ "class", "mat-tab-header-pagination mat-tab-header-pagination-after mat-elevation-z4 mat-ripple" ], [ "mat-ripple", "" ] ], [ [ 2, "mat-tab-header-pagination-disabled", null ], [ 2, "mat-ripple-unbounded", null ] ], [ [ null, "mousedown" ], [ null, "click" ], [ null, "touchend" ] ], (function(_v, en, $event) {
                var ad = !0, _co = _v.component;
                return "mousedown" === en && (ad = !1 !== _co._handlePaginatorPress("after") && ad), 
                "click" === en && (ad = !1 !== _co._handlePaginatorClick("after") && ad), "touchend" === en && (ad = !1 !== _co._stopInterval() && ad), 
                ad;
            }), null, null)), core.vb(16, 212992, null, 0, fesm2015_core.d, [ core.k, core.y, fesm2015_platform.a, [ 2, fesm2015_core.b ], [ 2, fesm2015_animations.a ] ], {
                disabled: [ 0, "disabled" ]
            }, null), (_l()(), core.wb(17, 0, null, null, 0, "div", [ [ "class", "mat-tab-header-pagination-chevron" ] ], null, null, null, null, null)) ], (function(_ck, _v) {
                var _co = _v.component;
                _ck(_v, 6, 0, _co._disableScrollBefore || _co.disableRipple), _ck(_v, 16, 0, _co._disableScrollAfter || _co.disableRipple);
            }), (function(_ck, _v) {
                var _co = _v.component;
                _ck(_v, 5, 0, _co._disableScrollBefore, core.Jb(_v, 6).unbounded), _ck(_v, 9, 0, "NoopAnimations" === _co._animationMode), 
                _ck(_v, 13, 0, "NoopAnimations" === core.Jb(_v, 14)._animationMode), _ck(_v, 15, 0, _co._disableScrollAfter, core.Jb(_v, 16).unbounded);
            }));
        }
        var RenderType_MatTab = core.ub({
            encapsulation: 2,
            styles: [],
            data: {}
        });
        function View_MatTab_1(_l) {
            return core.Ub(0, [ core.Ib(null, 0), (_l()(), core.gb(0, null, null, 0)) ], null, null);
        }
        function View_MatTab_0(_l) {
            return core.Ub(2, [ core.Nb(402653184, 1, {
                _implicitContent: 0
            }), (_l()(), core.gb(0, [ [ 1, 2 ] ], null, 0, null, View_MatTab_1)) ], null, null);
        }