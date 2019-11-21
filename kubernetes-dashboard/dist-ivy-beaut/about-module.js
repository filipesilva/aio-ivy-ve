(window.webpackJsonp = window.webpackJsonp || []).push([ [ 2 ], {
    yXud: function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        var components_module = __webpack_require__("PXUV"), shared_module = __webpack_require__("MnlZ"), core = __webpack_require__("fXoL"), config = __webpack_require__("kUCb"), flex = __webpack_require__("XiUz"), fesm2015_button = __webpack_require__("bTqV"), tooltip = __webpack_require__("Qu3c"), icon = __webpack_require__("NFeN");
        const _c2 = [ "matTooltip", $localize`Read documentation` ], _c5 = [ "matTooltip", $localize`Provide feedback` ];
        let component_ActionbarComponent = (() => {
            class ActionbarComponent {
                constructor(config) {
                    this.versionInfo = config.getVersionInfo();
                }
            }
            return ActionbarComponent.ɵfac = function(t) {
                return new (t || ActionbarComponent)(core["ɵɵdirectiveInject"](config.a));
            }, ActionbarComponent.ɵcmp = core["ɵɵdefineComponent"]({
                type: ActionbarComponent,
                selectors: [ [ "ng-component" ] ],
                decls: 11,
                vars: 0,
                consts: [ [ "fxLayout", "row" ], [ "href", "https://github.com/kubernetes/dashboard/tree/master/docs", "target", "_blank" ], [ "mat-icon-button", "", "color", "accent", 1, "kd-toolbar-action", 6, "matTooltip" ], [ "href", "https://github.com/kubernetes/dashboard/issues/new/choose", "target", "_blank" ] ],
                template: function(rf, ctx) {
                    1 & rf && (core["ɵɵelementStart"](0, "div", 0), core["ɵɵelementStart"](1, "a", 1), 
                    core["ɵɵelementStart"](2, "button", 2), core["ɵɵi18nAttributes"](3, _c2), core["ɵɵelementStart"](4, "mat-icon"), 
                    core["ɵɵtext"](5, "description"), core["ɵɵelementEnd"](), core["ɵɵelementEnd"](), 
                    core["ɵɵelementEnd"](), core["ɵɵelementStart"](6, "a", 3), core["ɵɵelementStart"](7, "button", 2), 
                    core["ɵɵi18nAttributes"](8, _c5), core["ɵɵelementStart"](9, "mat-icon"), core["ɵɵtext"](10, "feedback"), 
                    core["ɵɵelementEnd"](), core["ɵɵelementEnd"](), core["ɵɵelementEnd"](), core["ɵɵelementEnd"]());
                },
                directives: [ flex.d, fesm2015_button.b, tooltip.b, icon.a ],
                encapsulation: 2
            }), ActionbarComponent;
        })();
        var component_I18N_0, I18N_2, I18N_4, assets = __webpack_require__("tfRF"), component = __webpack_require__("TN1b");
        component_I18N_0 = $localize`About`, I18N_2 = $localize`General-purpose web UI for Kubernetes clusters`, 
        I18N_4 = $localize` Kubernetes Dashboard is made possible by the Dashboard ${"�#16�"}:START_LINK:community${"[�/#16�|�/#17�]"}:CLOSE_LINK: as an ${"�#17�"}:START_LINK_1:open source project${"[�/#16�|�/#17�]"}:CLOSE_LINK:. `, 
        I18N_4 = core["ɵɵi18nPostprocess"](I18N_4);
        let component_AboutComponent = (() => {
            class AboutComponent {
                constructor(assets, config) {
                    this.assets = assets, this.versionInfo = config.getVersionInfo(), this.latestCopyrightYear = (new Date).getFullYear();
                }
            }
            return AboutComponent.ɵfac = function(t) {
                return new (t || AboutComponent)(core["ɵɵdirectiveInject"](assets.a), core["ɵɵdirectiveInject"](config.a));
            }, AboutComponent.ɵcmp = core["ɵɵdefineComponent"]({
                type: AboutComponent,
                selectors: [ [ "kd-about" ] ],
                decls: 18,
                vars: 4,
                consts: [ [ 3, "withFooter" ], [ "title", "" ], [ "content", "", "fxLayout", "row" ], [ 1, "kd-about-logo-icon", 3, "svgIcon" ], [ "fxFlexAlign", "center" ], [ 1, "kd-h1" ], [ 1, "kd-h3" ], [ "footer", "", 1, "kd-muted" ], [ "href", "https://github.com/kubernetes/dashboard/graphs/contributors" ], [ "href", "https://github.com/kubernetes/dashboard" ] ],
                template: function(rf, ctx) {
                    1 & rf && (core["ɵɵelementStart"](0, "kd-card", 0), core["ɵɵelementStart"](1, "div", 1), 
                    core["ɵɵi18n"](2, component_I18N_0), core["ɵɵelementEnd"](), core["ɵɵelementStart"](3, "div", 2), 
                    core["ɵɵelement"](4, "mat-icon", 3), core["ɵɵelementStart"](5, "div", 4), core["ɵɵelementStart"](6, "div", 5), 
                    core["ɵɵelementStart"](7, "span"), core["ɵɵtext"](8), core["ɵɵelementEnd"](), core["ɵɵelementEnd"](), 
                    core["ɵɵelementStart"](9, "div", 6), core["ɵɵi18n"](10, I18N_2), core["ɵɵelementEnd"](), 
                    core["ɵɵelementEnd"](), core["ɵɵelementEnd"](), core["ɵɵelementStart"](11, "div", 7), 
                    core["ɵɵelementStart"](12, "div"), core["ɵɵtext"](13), core["ɵɵelementEnd"](), core["ɵɵelementStart"](14, "div"), 
                    core["ɵɵi18nStart"](15, I18N_4), core["ɵɵelement"](16, "a", 8), core["ɵɵelement"](17, "a", 9), 
                    core["ɵɵi18nEnd"](), core["ɵɵelementEnd"](), core["ɵɵelementEnd"](), core["ɵɵelementEnd"]()), 
                    2 & rf && (core["ɵɵproperty"]("withFooter", !0), core["ɵɵadvance"](4), core["ɵɵproperty"]("svgIcon", ctx.assets.getAppLogo()), 
                    core["ɵɵadvance"](4), core["ɵɵtextInterpolate1"]("Dashboard v", ctx.versionInfo.semverString, ""), 
                    core["ɵɵadvance"](5), core["ɵɵtextInterpolate1"]("Copyright 2015 - ", ctx.latestCopyrightYear, " The Kubernetes Authors."));
                },
                directives: [ component.a, flex.d, icon.a, flex.a ],
                styles: [ ".kd-about-logo-icon[_ngcontent-%COMP%]{font-size:64px;height:64px;max-height:64px;max-width:64px;width:64px;margin:0 16px 0 0}" ]
            }), AboutComponent;
        })();
        var router = __webpack_require__("tyNb");
        const ABOUT_ROUTE = {
            path: "",
            component: component_AboutComponent,
            data: {
                breadcrumb: "About"
            }
        }, ACTIONBAR = {
            path: "",
            component: component_ActionbarComponent,
            outlet: "actionbar"
        };
        let routing_AboutRoutingModule = (() => {
            class AboutRoutingModule {}
            return AboutRoutingModule.ɵmod = core["ɵɵdefineNgModule"]({
                type: AboutRoutingModule
            }), AboutRoutingModule.ɵinj = core["ɵɵdefineInjector"]({
                factory: function(t) {
                    return new (t || AboutRoutingModule);
                },
                imports: [ [ router.RouterModule.forChild([ ABOUT_ROUTE, ACTIONBAR ]) ], router.RouterModule ]
            }), AboutRoutingModule;
        })();
        __webpack_require__.d(__webpack_exports__, "AboutModule", (function() {
            return module_AboutModule;
        }));
        let module_AboutModule = (() => {
            class AboutModule {}
            return AboutModule.ɵmod = core["ɵɵdefineNgModule"]({
                type: AboutModule
            }), AboutModule.ɵinj = core["ɵɵdefineInjector"]({
                factory: function(t) {
                    return new (t || AboutModule);
                },
                imports: [ [ shared_module.a, components_module.a, routing_AboutRoutingModule ] ]
            }), AboutModule;
        })();
    }
} ]);
//# sourceMappingURL=about-module.js.map