(window.webpackJsonp = window.webpackJsonp || []).push([ [ 14 ], {
    "+1zh": function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        var common = __webpack_require__("ofXK"), icon = __webpack_require__("NFeN"), Subject = __webpack_require__("XNiG"), combineLatest = __webpack_require__("itXk"), asap = __webpack_require__("7Hc7"), takeUntil = __webpack_require__("1G5W"), Observable = __webpack_require__("HDdC"), isNumeric = __webpack_require__("Y7HM");
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
        var startWith = __webpack_require__("JX91"), core = __webpack_require__("fXoL"), scroll_service = __webpack_require__("Faly"), toc_service = __webpack_require__("TNhP");
        const _c0 = [ "tocItem" ];
        function TocComponent_div_0_div_1_Template(rf, ctx) {
            1 & rf && (core.Vb(0, "div", 7), core.Ec(1, " Contents "), core.Tb());
        }
        function TocComponent_div_0_button_2_Template(rf, ctx) {
            if (1 & rf) {
                const _r95 = core.Wb();
                core.Vb(0, "button", 8), core.cc("click", (function($event) {
                    return core.uc(_r95), core.gc(2).toggle(!1);
                })), core.Ec(1, " Contents "), core.Qb(2, "mat-icon", 9), core.Tb();
            }
            if (2 & rf) {
                const ctx_r91 = core.gc(2);
                core.Cb("aria-pressed", !ctx_r91.isCollapsed), core.Ab(2), core.Fb("collapsed", ctx_r91.isCollapsed);
            }
        }
        function TocComponent_div_0_ng_container_4_li_1_Template(rf, ctx) {
            if (1 & rf && (core.Vb(0, "li", 11, 12), core.Qb(2, "a", 13), core.Tb()), 2 & rf) {
                const ctx_r100 = core.gc(), toc_r96 = ctx_r100.$implicit, i_r97 = ctx_r100.index, ctx_r98 = core.gc(2);
                core.Db(toc_r96.level), core.Fb("secondary", "EmbeddedExpandable" === ctx_r98.type && i_r97 >= ctx_r98.primaryMax), 
                core.Fb("active", i_r97 === ctx_r98.activeIndex), core.mc("title", toc_r96.title), 
                core.Ab(2), core.lc("href", toc_r96.href, core.wc)("innerHTML", toc_r96.content, core.vc);
            }
        }
        function TocComponent_div_0_ng_container_4_Template(rf, ctx) {
            if (1 & rf && (core.Sb(0), core.Cc(1, TocComponent_div_0_ng_container_4_li_1_Template, 3, 8, "li", 10), 
            core.Rb()), 2 & rf) {
                const toc_r96 = ctx.$implicit, ctx_r92 = core.gc(2);
                core.Ab(1), core.lc("ngIf", "Floating" === ctx_r92.type || "h1" !== toc_r96.level);
            }
        }
        function TocComponent_div_0_button_5_Template(rf, ctx) {
            if (1 & rf) {
                const _r102 = core.Wb();
                core.Vb(0, "button", 14), core.cc("click", (function($event) {
                    return core.uc(_r102), core.gc(2).toggle();
                })), core.Tb();
            }
            if (2 & rf) {
                const ctx_r93 = core.gc(2);
                core.Fb("collapsed", ctx_r93.isCollapsed), core.Cb("aria-pressed", !ctx_r93.isCollapsed);
            }
        }
        function TocComponent_div_0_Template(rf, ctx) {
            if (1 & rf && (core.Vb(0, "div", 1), core.Cc(1, TocComponent_div_0_div_1_Template, 2, 0, "div", 2), 
            core.Cc(2, TocComponent_div_0_button_2_Template, 3, 2, "button", 3), core.Vb(3, "ul", 4), 
            core.Cc(4, TocComponent_div_0_ng_container_4_Template, 2, 1, "ng-container", 5), 
            core.Tb(), core.Cc(5, TocComponent_div_0_button_5_Template, 1, 2, "button", 6), 
            core.Tb()), 2 & rf) {
                const ctx_r89 = core.gc();
                core.Fb("collapsed", ctx_r89.isCollapsed), core.Ab(1), core.lc("ngIf", "EmbeddedSimple" === ctx_r89.type), 
                core.Ab(1), core.lc("ngIf", "EmbeddedExpandable" === ctx_r89.type), core.Ab(1), 
                core.Fb("embedded", "Floating" !== ctx_r89.type), core.Ab(1), core.lc("ngForOf", ctx_r89.tocList), 
                core.Ab(1), core.lc("ngIf", "EmbeddedExpandable" === ctx_r89.type);
            }
        }
        let toc_component_TocComponent = (() => {
            class TocComponent {
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
            return TocComponent.ɵfac = function(t) {
                return new (t || TocComponent)(core.Pb(scroll_service.a), core.Pb(core.k), core.Pb(toc_service.a));
            }, TocComponent.ɵcmp = core.Jb({
                type: TocComponent,
                selectors: [ [ "aio-toc" ] ],
                viewQuery: function(rf, ctx) {
                    var _t;
                    1 & rf && core.Jc(_c0, !0), 2 & rf && core.qc(_t = core.dc()) && (ctx.items = _t);
                },
                decls: 1,
                vars: 1,
                consts: [ [ "class", "toc-inner no-print", 3, "collapsed", 4, "ngIf" ], [ 1, "toc-inner", "no-print" ], [ "class", "toc-heading embedded", 4, "ngIf" ], [ "type", "button", "class", "toc-heading embedded secondary", "title", "Expand/collapse contents", "aria-label", "Expand/collapse contents", 3, "click", 4, "ngIf" ], [ 1, "toc-list" ], [ 4, "ngFor", "ngForOf" ], [ "type", "button", "class", "toc-more-items embedded material-icons", "title", "Expand/collapse contents", "aria-label", "Expand/collapse contents", 3, "collapsed", "click", 4, "ngIf" ], [ 1, "toc-heading", "embedded" ], [ "type", "button", "title", "Expand/collapse contents", "aria-label", "Expand/collapse contents", 1, "toc-heading", "embedded", "secondary", 3, "click" ], [ "svgIcon", "keyboard_arrow_right", 1, "rotating-icon" ], [ 3, "title", "class", "secondary", "active", 4, "ngIf" ], [ 3, "title" ], [ "tocItem", "" ], [ 3, "href", "innerHTML" ], [ "type", "button", "title", "Expand/collapse contents", "aria-label", "Expand/collapse contents", 1, "toc-more-items", "embedded", "material-icons", 3, "click" ] ],
                template: function(rf, ctx) {
                    1 & rf && core.Cc(0, TocComponent_div_0_Template, 6, 6, "div", 0), 2 & rf && core.lc("ngIf", "None" !== ctx.type);
                },
                directives: [ common.k, common.j, icon.a ],
                encapsulation: 2
            }), TocComponent;
        })();
        __webpack_require__.d(__webpack_exports__, "TocModule", (function() {
            return toc_module_TocModule;
        }));
        let toc_module_TocModule = (() => {
            class TocModule {
                constructor() {
                    this.customElementComponent = toc_component_TocComponent;
                }
            }
            return TocModule.ɵmod = core.Nb({
                type: TocModule
            }), TocModule.ɵinj = core.Mb({
                factory: function(t) {
                    return new (t || TocModule);
                },
                imports: [ [ common.c, icon.b ] ]
            }), TocModule;
        })();
    }
} ]);
//# sourceMappingURL=toc-toc-module.js.map