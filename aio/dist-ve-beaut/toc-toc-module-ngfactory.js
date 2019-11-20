(window.webpackJsonp = window.webpackJsonp || []).push([ [ 14 ], {
    s8K4: function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        var core = __webpack_require__("8Y7J"), Subject = __webpack_require__("XNiG"), combineLatest = __webpack_require__("itXk"), asap = __webpack_require__("7Hc7"), takeUntil = __webpack_require__("1G5W"), Observable = __webpack_require__("HDdC"), isNumeric = __webpack_require__("Y7HM");
        class SubscribeOnObservable_SubscribeOnObservable extends Observable.a {
            constructor(source, delayTime = 0, scheduler = asap.a) {
                super(), this.source = source, this.delayTime = delayTime, this.scheduler = scheduler, 
                (!Object(isNumeric.a)(delayTime) || delayTime < 0) && (this.delayTime = 0), scheduler && "function" == typeof scheduler.schedule || (this.scheduler = asap.a);
            }
            static create(source, delay = 0, scheduler = asap.a) {
                return new SubscribeOnObservable_SubscribeOnObservable(source, delay, scheduler);
            }
            static dispatch(arg) {
                const {source: source, subscriber: subscriber} = arg;
                return this.add(source.subscribe(subscriber));
            }
            _subscribe(subscriber) {
                return this.scheduler.schedule(SubscribeOnObservable_SubscribeOnObservable.dispatch, this.delayTime, {
                    source: this.source,
                    subscriber: subscriber
                });
            }
        }
        function subscribeOn(scheduler, delay = 0) {
            return function(source) {
                return source.lift(new subscribeOn_SubscribeOnOperator(scheduler, delay));
            };
        }
        class subscribeOn_SubscribeOnOperator {
            constructor(scheduler, delay) {
                this.scheduler = scheduler, this.delay = delay;
            }
            call(subscriber, source) {
                return new SubscribeOnObservable_SubscribeOnObservable(source, this.delay, this.scheduler).subscribe(subscriber);
            }
        }
        var startWith = __webpack_require__("JX91");
        class toc_component_TocComponent {
            constructor(scrollService, elementRef, tocService) {
                this.scrollService = scrollService, this.tocService = tocService, this.activeIndex = null, 
                this.type = "None", this.isCollapsed = !0, this.isEmbedded = !1, this.onDestroy = new Subject.a, 
                this.primaryMax = 4, this.isEmbedded = -1 !== elementRef.nativeElement.className.indexOf("embedded");
            }
            ngOnInit() {
                this.tocService.tocList.pipe(Object(takeUntil.a)(this.onDestroy)).subscribe(tocList => {
                    this.tocList = tocList;
                    const itemCount = function(array, fn) {
                        return array.reduce((result, item) => (item => "h1" !== item.level)(item) ? result + 1 : result, 0);
                    }(this.tocList);
                    this.type = itemCount > 0 ? this.isEmbedded ? itemCount > this.primaryMax ? "EmbeddedExpandable" : "EmbeddedSimple" : "Floating" : "None";
                });
            }
            ngAfterViewInit() {
                this.isEmbedded || Object(combineLatest.a)([ this.tocService.activeItemIndex.pipe(subscribeOn(asap.a)), this.items.changes.pipe(Object(startWith.a)(this.items)) ]).pipe(Object(takeUntil.a)(this.onDestroy)).subscribe(([index, items]) => {
                    if (this.activeIndex = index, null === index || index >= items.length) return;
                    const e = items.toArray()[index].nativeElement, p = e.offsetParent, eRect = e.getBoundingClientRect(), pRect = p.getBoundingClientRect();
                    eRect.top >= pRect.top && eRect.bottom <= pRect.bottom || (p.scrollTop += eRect.top - pRect.top - p.clientHeight / 2);
                });
            }
            ngOnDestroy() {
                this.onDestroy.next();
            }
            toggle(canScroll = !0) {
                this.isCollapsed = !this.isCollapsed, canScroll && this.isCollapsed && this.toTop();
            }
            toTop() {
                this.scrollService.scrollToTop();
            }
        }
        class toc_module_TocModule {
            constructor() {
                this.customElementComponent = toc_component_TocComponent;
            }
        }
        var index_ngfactory = __webpack_require__("XE/z"), icon = __webpack_require__("Tj54"), common = __webpack_require__("SVse"), scroll_service = __webpack_require__("Faly"), toc_service = __webpack_require__("TNhP"), RenderType_TocComponent = core.ub({
            encapsulation: 2,
            styles: [],
            data: {}
        });
        function View_TocComponent_2(_l) {
            return core.Ub(0, [ (_l()(), core.wb(0, 0, null, null, 1, "div", [ [ "class", "toc-heading embedded" ] ], null, null, null, null, null)), (_l()(), 
            core.Rb(-1, null, [ " Contents " ])) ], null, null);
        }
        function View_TocComponent_3(_l) {
            return core.Ub(0, [ (_l()(), core.wb(0, 0, null, null, 3, "button", [ [ "aria-label", "Expand/collapse contents" ], [ "class", "toc-heading embedded secondary" ], [ "title", "Expand/collapse contents" ], [ "type", "button" ] ], [ [ 1, "aria-pressed", 0 ] ], [ [ null, "click" ] ], (function(_v, en, $event) {
                var ad = !0;
                return "click" === en && (ad = !1 !== _v.component.toggle(!1) && ad), ad;
            }), null, null)), (_l()(), core.Rb(-1, null, [ " Contents " ])), (_l()(), core.wb(2, 0, null, null, 1, "mat-icon", [ [ "class", "rotating-icon mat-icon notranslate" ], [ "role", "img" ], [ "svgIcon", "keyboard_arrow_right" ] ], [ [ 2, "collapsed", null ], [ 2, "mat-icon-inline", null ], [ 2, "mat-icon-no-color", null ] ], null, null, index_ngfactory.b, index_ngfactory.a)), core.vb(3, 9158656, null, 0, icon.b, [ core.k, icon.d, [ 8, null ], [ 2, icon.a ], [ 2, core.l ] ], {
                svgIcon: [ 0, "svgIcon" ]
            }, null) ], (function(_ck, _v) {
                _ck(_v, 3, 0, "keyboard_arrow_right");
            }), (function(_ck, _v) {
                var _co = _v.component;
                _ck(_v, 0, 0, !_co.isCollapsed), _ck(_v, 2, 0, _co.isCollapsed, core.Jb(_v, 3).inline, "primary" !== core.Jb(_v, 3).color && "accent" !== core.Jb(_v, 3).color && "warn" !== core.Jb(_v, 3).color);
            }));
        }
        function View_TocComponent_5(_l) {
            return core.Ub(0, [ (_l()(), core.wb(0, 0, [ [ 1, 0 ], [ "tocItem", 1 ] ], null, 1, "li", [], [ [ 8, "title", 0 ], [ 8, "className", 0 ], [ 2, "secondary", null ], [ 2, "active", null ] ], null, null, null, null)), (_l()(), 
            core.wb(1, 0, null, null, 0, "a", [], [ [ 8, "href", 4 ], [ 8, "innerHTML", 1 ] ], null, null, null, null)) ], null, (function(_ck, _v) {
                var _co = _v.component;
                _ck(_v, 0, 0, core.Bb(1, "", _v.parent.context.$implicit.title, ""), core.Bb(1, "", _v.parent.context.$implicit.level, ""), "EmbeddedExpandable" === _co.type && _v.parent.context.index >= _co.primaryMax, _v.parent.context.index === _co.activeIndex), 
                _ck(_v, 1, 0, _v.parent.context.$implicit.href, _v.parent.context.$implicit.content);
            }));
        }
        function View_TocComponent_4(_l) {
            return core.Ub(0, [ (_l()(), core.wb(0, 0, null, null, 2, null, null, null, null, null, null, null)), (_l()(), 
            core.gb(16777216, null, null, 1, null, View_TocComponent_5)), core.vb(2, 16384, null, 0, common.k, [ core.O, core.L ], {
                ngIf: [ 0, "ngIf" ]
            }, null), (_l()(), core.gb(0, null, null, 0)) ], (function(_ck, _v) {
                _ck(_v, 2, 0, "Floating" === _v.component.type || "h1" !== _v.context.$implicit.level);
            }), null);
        }
        function View_TocComponent_6(_l) {
            return core.Ub(0, [ (_l()(), core.wb(0, 0, null, null, 0, "button", [ [ "aria-label", "Expand/collapse contents" ], [ "class", "toc-more-items embedded material-icons" ], [ "title", "Expand/collapse contents" ], [ "type", "button" ] ], [ [ 2, "collapsed", null ], [ 1, "aria-pressed", 0 ] ], [ [ null, "click" ] ], (function(_v, en, $event) {
                var ad = !0;
                return "click" === en && (ad = !1 !== _v.component.toggle() && ad), ad;
            }), null, null)) ], null, (function(_ck, _v) {
                var _co = _v.component;
                _ck(_v, 0, 0, _co.isCollapsed, !_co.isCollapsed);
            }));
        }
        function View_TocComponent_1(_l) {
            return core.Ub(0, [ (_l()(), core.wb(0, 0, null, null, 9, "div", [ [ "class", "toc-inner no-print" ] ], [ [ 2, "collapsed", null ] ], null, null, null, null)), (_l()(), 
            core.gb(16777216, null, null, 1, null, View_TocComponent_2)), core.vb(2, 16384, null, 0, common.k, [ core.O, core.L ], {
                ngIf: [ 0, "ngIf" ]
            }, null), (_l()(), core.gb(16777216, null, null, 1, null, View_TocComponent_3)), core.vb(4, 16384, null, 0, common.k, [ core.O, core.L ], {
                ngIf: [ 0, "ngIf" ]
            }, null), (_l()(), core.wb(5, 0, null, null, 2, "ul", [ [ "class", "toc-list" ] ], [ [ 2, "embedded", null ] ], null, null, null, null)), (_l()(), 
            core.gb(16777216, null, null, 1, null, View_TocComponent_4)), core.vb(7, 278528, null, 0, common.j, [ core.O, core.L, core.r ], {
                ngForOf: [ 0, "ngForOf" ]
            }, null), (_l()(), core.gb(16777216, null, null, 1, null, View_TocComponent_6)), core.vb(9, 16384, null, 0, common.k, [ core.O, core.L ], {
                ngIf: [ 0, "ngIf" ]
            }, null) ], (function(_ck, _v) {
                var _co = _v.component;
                _ck(_v, 2, 0, "EmbeddedSimple" === _co.type), _ck(_v, 4, 0, "EmbeddedExpandable" === _co.type), 
                _ck(_v, 7, 0, _co.tocList), _ck(_v, 9, 0, "EmbeddedExpandable" === _co.type);
            }), (function(_ck, _v) {
                var _co = _v.component;
                _ck(_v, 0, 0, _co.isCollapsed), _ck(_v, 5, 0, "Floating" !== _co.type);
            }));
        }
        function View_TocComponent_0(_l) {
            return core.Ub(0, [ core.Nb(671088640, 1, {
                items: 1
            }), (_l()(), core.gb(16777216, null, null, 1, null, View_TocComponent_1)), core.vb(2, 16384, null, 0, common.k, [ core.O, core.L ], {
                ngIf: [ 0, "ngIf" ]
            }, null) ], (function(_ck, _v) {
                _ck(_v, 2, 0, "None" !== _v.component.type);
            }), null);
        }
        function View_TocComponent_Host_0(_l) {
            return core.Ub(0, [ (_l()(), core.wb(0, 0, null, null, 1, "aio-toc", [], null, null, null, View_TocComponent_0, RenderType_TocComponent)), core.vb(1, 4440064, null, 0, toc_component_TocComponent, [ scroll_service.a, core.k, toc_service.a ], null, null) ], (function(_ck, _v) {
                _ck(_v, 1, 0);
            }), null);
        }
        var TocComponentNgFactory = core.sb("aio-toc", toc_component_TocComponent, View_TocComponent_Host_0, {}, {}, []), bidi = __webpack_require__("9gLZ"), fesm2015_core = __webpack_require__("UhP/");
        __webpack_require__.d(__webpack_exports__, "TocModuleNgFactory", (function() {
            return TocModuleNgFactory;
        }));
        var TocModuleNgFactory = core.tb(toc_module_TocModule, [], (function(_l) {
            return core.Gb([ core.Hb(512, core.j, core.Y, [ [ 8, [ TocComponentNgFactory ] ], [ 3, core.j ], core.w ]), core.Hb(4608, common.m, common.l, [ core.t ]), core.Hb(1073742336, common.c, common.c, []), core.Hb(1073742336, bidi.a, bidi.a, []), core.Hb(1073742336, fesm2015_core.c, fesm2015_core.c, [ [ 2, fesm2015_core.a ] ]), core.Hb(1073742336, icon.c, icon.c, []), core.Hb(1073742336, toc_module_TocModule, toc_module_TocModule, []) ]);
        }));
    }
} ]);
//# sourceMappingURL=toc-toc-module-ngfactory.js.map