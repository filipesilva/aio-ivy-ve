(window.webpackJsonp = window.webpackJsonp || []).push([ [ 34 ], {
    wFcm: function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        var I18N_0, I18N_2, I18N_4, I18N_6, components_module = __webpack_require__("PXUV"), shared_module = __webpack_require__("MnlZ"), core = __webpack_require__("fXoL"), dialog = __webpack_require__("0IaG"), fesm2015_button = __webpack_require__("bTqV");
        I18N_0 = $localize`Settings have changed since last reload`, I18N_2 = $localize`Do you want to save them anyways?`, 
        I18N_4 = $localize`Save`, I18N_6 = $localize`Refresh`;
        let dialog_SaveAnywayDialog = (() => {
            class SaveAnywayDialog {
                constructor(dialogRef) {
                    this.dialogRef = dialogRef;
                }
                onNoClick() {
                    this.dialogRef.close();
                }
            }
            return SaveAnywayDialog.ɵfac = function(t) {
                return new (t || SaveAnywayDialog)(core["ɵɵdirectiveInject"](dialog.g));
            }, SaveAnywayDialog.ɵcmp = core["ɵɵdefineComponent"]({
                type: SaveAnywayDialog,
                selectors: [ [ "kd-settings-save-anyway-dialog" ] ],
                decls: 9,
                vars: 2,
                consts: [ [ "mat-dialog-title", "" ], [ "mat-button", "", "color", "primary", 3, "mat-dialog-close" ] ],
                template: function(rf, ctx) {
                    1 & rf && (core["ɵɵelementStart"](0, "h2", 0), core["ɵɵi18n"](1, I18N_0), core["ɵɵelementEnd"](), 
                    core["ɵɵelementStart"](2, "mat-dialog-content"), core["ɵɵi18n"](3, I18N_2), core["ɵɵelementEnd"](), 
                    core["ɵɵelementStart"](4, "mat-dialog-actions"), core["ɵɵelementStart"](5, "button", 1), 
                    core["ɵɵi18n"](6, I18N_4), core["ɵɵelementEnd"](), core["ɵɵelementStart"](7, "button", 1), 
                    core["ɵɵi18n"](8, I18N_6), core["ɵɵelementEnd"](), core["ɵɵelementEnd"]()), 2 & rf && (core["ɵɵadvance"](5), 
                    core["ɵɵproperty"]("mat-dialog-close", !0), core["ɵɵadvance"](2), core["ɵɵproperty"]("mat-dialog-close", !1));
                },
                directives: [ dialog.h, dialog.e, dialog.c, fesm2015_button.b, dialog.d ],
                encapsulation: 2
            }), SaveAnywayDialog;
        })();
        var globalsettings = __webpack_require__("5fJw"), title = __webpack_require__("UeXa"), common = __webpack_require__("ofXK"), component = __webpack_require__("TN1b"), fesm2015_forms = __webpack_require__("3Pt+"), flex = __webpack_require__("XiUz");
        const _c0 = [ "*" ];
        let component_SettingsEntryComponent = (() => {
            class SettingsEntryComponent {}
            return SettingsEntryComponent.ɵfac = function(t) {
                return new (t || SettingsEntryComponent);
            }, SettingsEntryComponent.ɵcmp = core["ɵɵdefineComponent"]({
                type: SettingsEntryComponent,
                selectors: [ [ "kd-settings-entry" ] ],
                inputs: {
                    key: "key",
                    desc: "desc"
                },
                ngContentSelectors: _c0,
                decls: 6,
                vars: 2,
                consts: [ [ "fxLayout", "column", "fxLayoutAlign", "center none", "fxFlex", "" ], [ 1, "kd-muted" ] ],
                template: function(rf, ctx) {
                    1 & rf && (core["ɵɵprojectionDef"](), core["ɵɵelementStart"](0, "div", 0), core["ɵɵelementStart"](1, "div"), 
                    core["ɵɵtext"](2), core["ɵɵelementEnd"](), core["ɵɵelementStart"](3, "div", 1), 
                    core["ɵɵtext"](4), core["ɵɵelementEnd"](), core["ɵɵelementEnd"](), core["ɵɵprojection"](5, 0, [ "class", "kd-settings-entry-form", "fxFlex", "" ])), 
                    2 & rf && (core["ɵɵadvance"](2), core["ɵɵtextInterpolate"](ctx.key), core["ɵɵadvance"](2), 
                    core["ɵɵtextInterpolate"](ctx.desc));
                },
                directives: [ flex.d, flex.c, flex.b ],
                encapsulation: 2
            }), SettingsEntryComponent;
        })();
        var component_I18N_0, component_I18N_2, form_field = __webpack_require__("kmnG"), input = __webpack_require__("qFsG"), slider = __webpack_require__("5RNC");
        component_I18N_0 = $localize`Global settings`, component_I18N_2 = $localize` Global settings are stored in config map, so all of them are applied for every instance of the app. `;
        const _c8 = [ "key", $localize`Cluster name`, "desc", $localize`Cluster name appears in the browser window title if it is set.` ], _c11 = [ "placeholder", $localize`Cluster name` ], _c16 = [ "key", $localize`Items per page`, "desc", $localize`Max number of items that can be displayed on each list page.` ], _c21 = [ "key", $localize`Logs auto-refresh time interval`, "desc", $localize`Number of seconds between every auto-refresh of logs.` ], _c26 = [ "key", $localize`Resource auto-refresh time interval`, "desc", $localize`Number of seconds between every auto-refresh of every resource. Set 0 to disable.` ];
        var I18N_27, I18N_29;
        function GlobalSettingsComponent_kd_card_0_Template(rf, ctx) {
            if (1 & rf) {
                const _r1334 = core["ɵɵgetCurrentView"]();
                core["ɵɵelementStart"](0, "kd-card", 1), core["ɵɵelementStart"](1, "div", 2), core["ɵɵi18n"](2, component_I18N_0), 
                core["ɵɵelementEnd"](), core["ɵɵelementStart"](3, "div", 3), core["ɵɵelementStart"](4, "p"), 
                core["ɵɵi18n"](5, component_I18N_2), core["ɵɵelementEnd"](), core["ɵɵelement"](6, "br"), 
                core["ɵɵelementStart"](7, "form", 4, 5), core["ɵɵlistener"]("ngSubmit", (function($event) {
                    core["ɵɵrestoreView"](_r1334);
                    const _r1332 = core["ɵɵreference"](8);
                    return core["ɵɵnextContext"]().save(_r1332);
                })), core["ɵɵelementStart"](9, "kd-settings-entry", 6), core["ɵɵi18nAttributes"](10, _c8), 
                core["ɵɵelementStart"](11, "mat-form-field", 7), core["ɵɵelementStart"](12, "input", 8), 
                core["ɵɵi18nAttributes"](13, _c11), core["ɵɵlistener"]("ngModelChange", (function($event) {
                    return core["ɵɵrestoreView"](_r1334), core["ɵɵnextContext"]().settings.clusterName = $event;
                })), core["ɵɵelementEnd"](), core["ɵɵelementEnd"](), core["ɵɵelementEnd"](), core["ɵɵelementStart"](14, "kd-settings-entry", 6), 
                core["ɵɵi18nAttributes"](15, _c16), core["ɵɵelementStart"](16, "div", 7), core["ɵɵelementStart"](17, "mat-slider", 9), 
                core["ɵɵlistener"]("ngModelChange", (function($event) {
                    return core["ɵɵrestoreView"](_r1334), core["ɵɵnextContext"]().settings.itemsPerPage = $event;
                })), core["ɵɵelementEnd"](), core["ɵɵelementStart"](18, "div", 10), core["ɵɵtext"](19), 
                core["ɵɵelementEnd"](), core["ɵɵelementEnd"](), core["ɵɵelementEnd"](), core["ɵɵelementStart"](20, "kd-settings-entry", 6), 
                core["ɵɵi18nAttributes"](21, _c21), core["ɵɵelementStart"](22, "div", 7), core["ɵɵelementStart"](23, "mat-slider", 11), 
                core["ɵɵlistener"]("ngModelChange", (function($event) {
                    return core["ɵɵrestoreView"](_r1334), core["ɵɵnextContext"]().settings.logsAutoRefreshTimeInterval = $event;
                })), core["ɵɵelementEnd"](), core["ɵɵelementStart"](24, "span", 10), core["ɵɵtext"](25), 
                core["ɵɵelementEnd"](), core["ɵɵelementEnd"](), core["ɵɵelementEnd"](), core["ɵɵelementStart"](26, "kd-settings-entry", 6), 
                core["ɵɵi18nAttributes"](27, _c26), core["ɵɵelementStart"](28, "div", 7), core["ɵɵelementStart"](29, "mat-slider", 12), 
                core["ɵɵlistener"]("ngModelChange", (function($event) {
                    return core["ɵɵrestoreView"](_r1334), core["ɵɵnextContext"]().settings.resourceAutoRefreshTimeInterval = $event;
                })), core["ɵɵelementEnd"](), core["ɵɵelementStart"](30, "span", 10), core["ɵɵtext"](31), 
                core["ɵɵelementEnd"](), core["ɵɵelementEnd"](), core["ɵɵelementEnd"](), core["ɵɵelement"](32, "br"), 
                core["ɵɵelement"](33, "br"), core["ɵɵelementStart"](34, "button", 13), core["ɵɵi18n"](35, I18N_27), 
                core["ɵɵelementEnd"](), core["ɵɵelementStart"](36, "button", 14), core["ɵɵlistener"]("click", (function($event) {
                    core["ɵɵrestoreView"](_r1334);
                    const _r1332 = core["ɵɵreference"](8);
                    return core["ɵɵnextContext"]().load(_r1332);
                })), core["ɵɵi18n"](37, I18N_29), core["ɵɵelementEnd"](), core["ɵɵelementEnd"](), 
                core["ɵɵelementEnd"](), core["ɵɵelementEnd"]();
            }
            if (2 & rf) {
                const _r1332 = core["ɵɵreference"](8), ctx_r1331 = core["ɵɵnextContext"]();
                core["ɵɵproperty"]("initialized", ctx_r1331.isInitialized())("expandable", !0), 
                core["ɵɵadvance"](12), core["ɵɵproperty"]("ngModel", ctx_r1331.settings.clusterName), 
                core["ɵɵadvance"](5), core["ɵɵproperty"]("ngModel", ctx_r1331.settings.itemsPerPage), 
                core["ɵɵadvance"](2), core["ɵɵtextInterpolate1"](" ", ctx_r1331.settings.itemsPerPage, " "), 
                core["ɵɵadvance"](4), core["ɵɵproperty"]("ngModel", ctx_r1331.settings.logsAutoRefreshTimeInterval), 
                core["ɵɵadvance"](2), core["ɵɵtextInterpolate1"](" ", ctx_r1331.settings.logsAutoRefreshTimeInterval, " "), 
                core["ɵɵadvance"](4), core["ɵɵproperty"]("ngModel", ctx_r1331.settings.resourceAutoRefreshTimeInterval), 
                core["ɵɵadvance"](2), core["ɵɵtextInterpolate1"](" ", ctx_r1331.settings.resourceAutoRefreshTimeInterval, " "), 
                core["ɵɵadvance"](3), core["ɵɵproperty"]("disabled", _r1332.pristine);
            }
        }
        I18N_27 = $localize` Save `, I18N_29 = $localize` Reload `;
        let component_GlobalSettingsComponent = (() => {
            class GlobalSettingsComponent {
                constructor(settings_, dialog_, title_) {
                    this.settings_ = settings_, this.dialog_ = dialog_, this.title_ = title_, this.concurrentChangeErr_ = "settings changed since last reload", 
                    this.settings = {}, this.hasLoadError = !1;
                }
                ngOnInit() {
                    this.load();
                }
                isInitialized() {
                    return this.settings_.isInitialized();
                }
                load(form) {
                    form && form.resetForm(), this.settings_.load(this.onLoad.bind(this), this.onLoadError.bind(this));
                }
                onLoad() {
                    this.settings.itemsPerPage = this.settings_.getItemsPerPage(), this.settings.clusterName = this.settings_.getClusterName(), 
                    this.settings.logsAutoRefreshTimeInterval = this.settings_.getLogsAutoRefreshTimeInterval(), 
                    this.settings.resourceAutoRefreshTimeInterval = this.settings_.getResourceAutoRefreshTimeInterval();
                }
                onLoadError() {
                    this.hasLoadError = !0;
                }
                save(form) {
                    this.settings_.save(this.settings).subscribe(() => {
                        this.load(form), this.title_.update(), this.settings_.onSettingsUpdate.next();
                    }, err => {
                        err && -1 !== err.data.indexOf(this.concurrentChangeErr_) && this.dialog_.open(dialog_SaveAnywayDialog, {
                            width: "420px"
                        }).afterClosed().subscribe(result => {
                            !0 === result ? this.save(form) : this.load(form);
                        });
                    });
                }
            }
            return GlobalSettingsComponent.ɵfac = function(t) {
                return new (t || GlobalSettingsComponent)(core["ɵɵdirectiveInject"](globalsettings.a), core["ɵɵdirectiveInject"](dialog.b), core["ɵɵdirectiveInject"](title.a));
            }, GlobalSettingsComponent.ɵcmp = core["ɵɵdefineComponent"]({
                type: GlobalSettingsComponent,
                selectors: [ [ "kd-global-settings" ] ],
                decls: 1,
                vars: 1,
                consts: [ [ 3, "initialized", "expandable", 4, "ngIf" ], [ 3, "initialized", "expandable" ], [ "title", "" ], [ "content", "" ], [ 3, "ngSubmit" ], [ "form", "ngForm" ], [ 6, "key", "desc" ], [ "fxFlex", "" ], [ "name", "clusterName", "type", "text", "matInput", "", 3, "ngModel", "ngModelChange", 6, "placeholder" ], [ "name", "itemsPerPage", "color", "primary", "min", "5", "max", "50", "step", "5", "fxFlex", "", 3, "ngModel", "ngModelChange" ], [ "fxFlexAlign", " center", 1, "kd-slider-value", "kd-muted" ], [ "name", "autoRefreshTimeInterval", "color", "primary", "min", "1", "max", "10", "step", "1", "fxFlex", "", 3, "ngModel", "ngModelChange" ], [ "name", "resourceAutoRefreshTimeInterval", "color", "primary", "min", "0", "max", "60", "step", "5", "fxFlex", "", 3, "ngModel", "ngModelChange" ], [ "type", "submit", "color", "primary", "mat-raised-button", "", 3, "disabled" ], [ "type", "button", "color", "primary", "mat-raised-button", "", 3, "click" ] ],
                template: function(rf, ctx) {
                    1 & rf && core["ɵɵtemplate"](0, GlobalSettingsComponent_kd_card_0_Template, 38, 10, "kd-card", 0), 
                    2 & rf && core["ɵɵproperty"]("ngIf", !ctx.hasLoadError);
                },
                directives: [ common.NgIf, component.a, fesm2015_forms["ɵangular_packages_forms_forms_y"], fesm2015_forms.NgControlStatusGroup, fesm2015_forms.NgForm, component_SettingsEntryComponent, form_field.b, flex.b, input.a, fesm2015_forms.DefaultValueAccessor, fesm2015_forms.NgControlStatus, fesm2015_forms.NgModel, slider.a, flex.a, fesm2015_button.b ],
                encapsulation: 2
            }), GlobalSettingsComponent;
        })();
        var local_component_I18N_0, local_component_I18N_2, localsettings = __webpack_require__("itu2"), slide_toggle = __webpack_require__("1jcm");
        local_component_I18N_0 = $localize`Local settings`, local_component_I18N_2 = $localize` Local settings are stored in the browser cookies, so they are not synchronized between multiple devices. Changes are applied automatically on every change. `;
        const component_c8 = [ "key", $localize`Dark theme`, "desc", $localize`Use dark theme in the whole app` ];
        let component_LocalSettingsComponent = (() => {
            class LocalSettingsComponent {
                constructor(settings_) {
                    this.settings_ = settings_, this.settings = {};
                }
                ngOnInit() {
                    this.settings = this.settings_.get();
                }
                onThemeChange() {
                    this.settings_.handleThemeChange(this.settings.isThemeDark);
                }
            }
            return LocalSettingsComponent.ɵfac = function(t) {
                return new (t || LocalSettingsComponent)(core["ɵɵdirectiveInject"](localsettings.a));
            }, LocalSettingsComponent.ɵcmp = core["ɵɵdefineComponent"]({
                type: LocalSettingsComponent,
                selectors: [ [ "kd-local-settings" ] ],
                decls: 11,
                vars: 2,
                consts: [ [ 3, "expandable" ], [ "title", "" ], [ "content", "" ], [ 6, "key", "desc" ], [ "fxFlex", "" ], [ "color", "primary", "name", "isThemeDark", 3, "ngModel", "ngModelChange", "change" ] ],
                template: function(rf, ctx) {
                    1 & rf && (core["ɵɵelementStart"](0, "kd-card", 0), core["ɵɵelementStart"](1, "div", 1), 
                    core["ɵɵi18n"](2, local_component_I18N_0), core["ɵɵelementEnd"](), core["ɵɵelementStart"](3, "div", 2), 
                    core["ɵɵelementStart"](4, "p"), core["ɵɵi18n"](5, local_component_I18N_2), core["ɵɵelementEnd"](), 
                    core["ɵɵelement"](6, "br"), core["ɵɵelementStart"](7, "kd-settings-entry", 3), core["ɵɵi18nAttributes"](8, component_c8), 
                    core["ɵɵelementStart"](9, "div", 4), core["ɵɵelementStart"](10, "mat-slide-toggle", 5), 
                    core["ɵɵlistener"]("ngModelChange", (function($event) {
                        return ctx.settings.isThemeDark = $event;
                    }))("change", (function($event) {
                        return ctx.onThemeChange();
                    })), core["ɵɵelementEnd"](), core["ɵɵelementEnd"](), core["ɵɵelementEnd"](), core["ɵɵelementEnd"](), 
                    core["ɵɵelementEnd"]()), 2 & rf && (core["ɵɵproperty"]("expandable", !0), core["ɵɵadvance"](10), 
                    core["ɵɵproperty"]("ngModel", ctx.settings.isThemeDark));
                },
                directives: [ component.a, component_SettingsEntryComponent, flex.b, slide_toggle.a, fesm2015_forms.NgControlStatus, fesm2015_forms.NgModel ],
                encapsulation: 2
            }), LocalSettingsComponent;
        })(), component_SettingsComponent = (() => {
            class SettingsComponent {}
            return SettingsComponent.ɵfac = function(t) {
                return new (t || SettingsComponent);
            }, SettingsComponent.ɵcmp = core["ɵɵdefineComponent"]({
                type: SettingsComponent,
                selectors: [ [ "kd-settings" ] ],
                decls: 2,
                vars: 0,
                template: function(rf, ctx) {
                    1 & rf && (core["ɵɵelement"](0, "kd-global-settings"), core["ɵɵelement"](1, "kd-local-settings"));
                },
                directives: [ component_GlobalSettingsComponent, component_LocalSettingsComponent ],
                encapsulation: 2
            }), SettingsComponent;
        })();
        var router = __webpack_require__("tyNb");
        const SETTINGS_ROUTE = {
            path: "",
            component: component_SettingsComponent,
            data: {
                breadcrumb: "Settings"
            }
        };
        let routing_SettingsRoutingModule = (() => {
            class SettingsRoutingModule {}
            return SettingsRoutingModule.ɵmod = core["ɵɵdefineNgModule"]({
                type: SettingsRoutingModule
            }), SettingsRoutingModule.ɵinj = core["ɵɵdefineInjector"]({
                factory: function(t) {
                    return new (t || SettingsRoutingModule);
                },
                imports: [ [ router.RouterModule.forChild([ SETTINGS_ROUTE ]) ], router.RouterModule ]
            }), SettingsRoutingModule;
        })();
        __webpack_require__.d(__webpack_exports__, "SettingsModule", (function() {
            return module_SettingsModule;
        }));
        let module_SettingsModule = (() => {
            class SettingsModule {}
            return SettingsModule.ɵmod = core["ɵɵdefineNgModule"]({
                type: SettingsModule
            }), SettingsModule.ɵinj = core["ɵɵdefineInjector"]({
                factory: function(t) {
                    return new (t || SettingsModule);
                },
                imports: [ [ shared_module.a, components_module.a, routing_SettingsRoutingModule ] ]
            }), SettingsModule;
        })();
    }
} ]);
//# sourceMappingURL=settings-module.js.map