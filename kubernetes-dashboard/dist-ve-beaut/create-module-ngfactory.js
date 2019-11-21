(window.webpackJsonp = window.webpackJsonp || []).push([ [ 21 ], {
    dbw1: function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        var core = __webpack_require__("8Y7J");
        class CreateModule {}
        var index_ngfactory = __webpack_require__("ntJQ"), dialog_index_ngfactory = __webpack_require__("9cE2"), snack_bar_index_ngfactory = __webpack_require__("007U"), router_ngfactory = __webpack_require__("pMnS"), dialog_ngfactory = __webpack_require__("wyY1"), component_ngfactory = __webpack_require__("HrBQ"), menu_component_ngfactory = __webpack_require__("Shg9"), changedialog_dialog_ngfactory = __webpack_require__("rO67"), form_field = __webpack_require__("Q2Ze"), dialog = __webpack_require__("iELJ"), fesm2015_forms = __webpack_require__("s7LF"), flex = __webpack_require__("VDRc"), esm2015_core = __webpack_require__("/q54");
        class HelpSectionComponent {}
        var RenderType_HelpSectionComponent = core["ɵcrt"]({
            encapsulation: 0,
            styles: [ [ ".kd-help-section[_ngcontent-%COMP%]    >*{flex:1;flex-basis:auto;margin:8px 0;width:100%}.kd-help-section[_ngcontent-%COMP%]    >:last-child{padding-left:32px}.kd-help-section[_ngcontent-%COMP%]    >:first-child{max-width:48.5%}@media (max-width:959px){.kd-help-section[_ngcontent-%COMP%]    >:first-child{max-width:100%}}.kd-help-section[_ngcontent-%COMP%]   kd-port-mappings[_ngcontent-%COMP%]{margin-bottom:0;margin-top:0}" ] ],
            data: {}
        });
        function View_HelpSectionComponent_0(_l) {
            return core["ɵvid"](0, [ (_l()(), core["ɵeld"](0, 0, null, null, 2, "div", [ [ "class", "kd-help-section" ], [ "fxLayout", "row" ], [ "fxLayout.sm", "column" ], [ "fxLayout.xs", "column" ] ], null, null, null, null, null)), core["ɵdid"](1, 671744, null, 0, flex.d, [ core.ElementRef, esm2015_core.i, [ 2, flex.k ], esm2015_core.f ], {
                fxLayout: [ 0, "fxLayout" ],
                "fxLayout.xs": [ 1, "fxLayout.xs" ],
                "fxLayout.sm": [ 2, "fxLayout.sm" ]
            }, null), core["ɵncd"](null, 0) ], (function(_ck, _v) {
                _ck(_v, 1, 0, "row", "column", "column");
            }), null);
        }
        var form_field_index_ngfactory = __webpack_require__("H3DK"), fesm2015_core = __webpack_require__("UhP/"), bidi = __webpack_require__("9gLZ"), platform = __webpack_require__("SCoL"), animations = __webpack_require__("omvX"), input = __webpack_require__("e6WT"), text_field = __webpack_require__("8sFK"), common = __webpack_require__("SVse");
        class UserHelpComponent {}
        var RenderType_UserHelpComponent = core["ɵcrt"]({
            encapsulation: 0,
            styles: [ [ ".kd-user-help[_ngcontent-%COMP%]    {font-size:14px}.kd-user-help[_ngcontent-%COMP%]     .material-icons{font-size:12px;vertical-align:middle}.kd-user-help[_ngcontent-%COMP%]     a{opacity:1;text-decoration:none}" ] ],
            data: {}
        });
        function View_UserHelpComponent_0(_l) {
            return core["ɵvid"](0, [ (_l()(), core["ɵeld"](0, 0, null, null, 1, "div", [ [ "class", "kd-user-help" ] ], null, null, null, null, null)), core["ɵncd"](null, 0) ], null, null);
        }
        var button_index_ngfactory = __webpack_require__("1Xc+"), fesm2015_button = __webpack_require__("Dxy4"), a11y = __webpack_require__("YEUz"), fesm2015_http = __webpack_require__("IheW"), alert_dialog = __webpack_require__("e4jz"), index_config = __webpack_require__("r1w+");
        class dialog_CreateNamespaceDialog {
            constructor(dialogRef, data, http_, csrfToken_, matDialog_, fb_) {
                this.dialogRef = dialogRef, this.data = data, this.http_ = http_, this.csrfToken_ = csrfToken_, 
                this.matDialog_ = matDialog_, this.fb_ = fb_, this.config_ = index_config.a, this.namespaceMaxLength = 63, 
                this.namespacePattern = new RegExp("^[a-z0-9]([-a-z0-9]*[a-z0-9])?$");
            }
            ngOnInit() {
                this.form = this.fb_.group({
                    namespace: [ "", fesm2015_forms.Validators.compose([ fesm2015_forms.Validators.maxLength(this.namespaceMaxLength), fesm2015_forms.Validators.pattern(this.namespacePattern) ]) ]
                });
            }
            get namespace() {
                return this.form.get("namespace");
            }
            createNamespace() {
                if (!this.form.valid) return;
                const namespaceSpec = {
                    name: this.namespace.value
                };
                this.csrfToken_.getTokenForAction("namespace").subscribe(csrfToken => this.http_.post("api/v1/namespace", Object.assign({}, namespaceSpec), {
                    headers: (new fesm2015_http.i).set(this.config_.csrfHeaderName, csrfToken.token)
                }).subscribe(() => {
                    this.dialogRef.close(this.namespace.value);
                }, error => {
                    this.dialogRef.close(), this.matDialog_.open(alert_dialog.a, {
                        data: {
                            title: "Error creating namespace",
                            message: error.data,
                            confirmLabel: "OK"
                        }
                    });
                }));
            }
            isDisabled() {
                return this.data.namespaces.indexOf(this.namespace.value) >= 0;
            }
            cancel() {
                this.dialogRef.close();
            }
        }
        var csrftoken = __webpack_require__("SSUc"), RenderType_CreateNamespaceDialog = core["ɵcrt"]({
            encapsulation: 2,
            styles: [],
            data: {}
        });
        function View_CreateNamespaceDialog_1(_l) {
            return core["ɵvid"](0, [ (_l()(), core["ɵeld"](0, 0, null, null, 2, "mat-error", [ [ "class", "mat-error" ], [ "role", "alert" ] ], [ [ 1, "id", 0 ] ], null, null, null, null)), core["ɵdid"](1, 16384, [ [ 6, 4 ] ], 0, form_field.b, [], null, null), (_l()(), 
            core["ɵted"](-1, null, [ " Name is required. " ])) ], null, (function(_ck, _v) {
                _ck(_v, 0, 0, core["ɵnov"](_v, 1).id);
            }));
        }
        function View_CreateNamespaceDialog_2(_l) {
            return core["ɵvid"](0, [ (_l()(), core["ɵeld"](0, 0, null, null, 2, "mat-error", [ [ "class", "mat-error" ], [ "role", "alert" ] ], [ [ 1, "id", 0 ] ], null, null, null, null)), core["ɵdid"](1, 16384, [ [ 6, 4 ] ], 0, form_field.b, [], null, null), (_l()(), 
            core["ɵted"](2, null, [ " Name must be up to ", " characters long. " ])) ], null, (function(_ck, _v) {
                var _co = _v.component;
                _ck(_v, 0, 0, core["ɵnov"](_v, 1).id), _ck(_v, 2, 0, _co.namespaceMaxLength);
            }));
        }
        function View_CreateNamespaceDialog_3(_l) {
            return core["ɵvid"](0, [ (_l()(), core["ɵeld"](0, 0, null, null, 2, "mat-error", [ [ "class", "mat-error" ], [ "role", "alert" ] ], [ [ 1, "id", 0 ] ], null, null, null, null)), core["ɵdid"](1, 16384, [ [ 6, 4 ] ], 0, form_field.b, [], null, null), (_l()(), 
            core["ɵted"](-1, null, [ " Name must be alphanumeric and may contain dashes. " ])) ], null, (function(_ck, _v) {
                _ck(_v, 0, 0, core["ɵnov"](_v, 1).id);
            }));
        }
        function View_CreateNamespaceDialog_0(_l) {
            return core["ɵvid"](0, [ (_l()(), core["ɵeld"](0, 0, null, null, 2, "h4", [ [ "class", "mat-dialog-title" ], [ "mat-dialog-title", "" ] ], [ [ 8, "id", 0 ] ], null, null, null, null)), core["ɵdid"](1, 81920, null, 0, dialog.m, [ [ 2, dialog.l ], core.ElementRef, dialog.e ], null, null), (_l()(), 
            core["ɵted"](-1, null, [ "Create a new namespace" ])), (_l()(), core["ɵeld"](3, 0, null, null, 50, "mat-dialog-content", [ [ "class", "kd-dialog-text mat-dialog-content" ] ], null, null, null, null, null)), core["ɵdid"](4, 16384, null, 0, dialog.j, [], null, null), (_l()(), 
            core["ɵeld"](5, 0, null, null, 48, null, null, null, null, null, null, null)), (_l()(), 
            core["ɵeld"](6, 0, null, null, 1, "div", [], null, null, null, null, null)), (_l()(), 
            core["ɵted"](-1, null, [ "The new namespace will be added to the cluster." ])), (_l()(), 
            core["ɵeld"](8, 0, null, null, 45, "div", [], null, null, null, null, null)), (_l()(), 
            core["ɵeld"](9, 0, null, null, 44, "form", [ [ "novalidate", "" ] ], [ [ 2, "ng-untouched", null ], [ 2, "ng-touched", null ], [ 2, "ng-pristine", null ], [ 2, "ng-dirty", null ], [ 2, "ng-valid", null ], [ 2, "ng-invalid", null ], [ 2, "ng-pending", null ] ], [ [ null, "submit" ], [ null, "reset" ] ], (function(_v, en, $event) {
                var ad = !0;
                return "submit" === en && (ad = !1 !== core["ɵnov"](_v, 11).onSubmit($event) && ad), 
                "reset" === en && (ad = !1 !== core["ɵnov"](_v, 11).onReset() && ad), ad;
            }), null, null)), core["ɵdid"](10, 16384, null, 0, fesm2015_forms["ɵangular_packages_forms_forms_y"], [], null, null), core["ɵdid"](11, 540672, null, 0, fesm2015_forms.FormGroupDirective, [ [ 8, null ], [ 8, null ] ], {
                form: [ 0, "form" ]
            }, null), core["ɵprd"](2048, null, fesm2015_forms.ControlContainer, null, [ fesm2015_forms.FormGroupDirective ]), core["ɵdid"](13, 16384, null, 0, fesm2015_forms.NgControlStatusGroup, [ [ 4, fesm2015_forms.ControlContainer ] ], null, null), (_l()(), 
            core["ɵeld"](14, 0, null, null, 39, "kd-help-section", [], null, null, null, View_HelpSectionComponent_0, RenderType_HelpSectionComponent)), core["ɵdid"](15, 49152, null, 0, HelpSectionComponent, [], null, null), (_l()(), 
            core["ɵeld"](16, 0, null, 0, 29, "mat-form-field", [ [ "class", "mat-form-field" ] ], [ [ 2, "mat-form-field-appearance-standard", null ], [ 2, "mat-form-field-appearance-fill", null ], [ 2, "mat-form-field-appearance-outline", null ], [ 2, "mat-form-field-appearance-legacy", null ], [ 2, "mat-form-field-invalid", null ], [ 2, "mat-form-field-can-float", null ], [ 2, "mat-form-field-should-float", null ], [ 2, "mat-form-field-has-label", null ], [ 2, "mat-form-field-hide-placeholder", null ], [ 2, "mat-form-field-disabled", null ], [ 2, "mat-form-field-autofilled", null ], [ 2, "mat-focused", null ], [ 2, "mat-accent", null ], [ 2, "mat-warn", null ], [ 2, "ng-untouched", null ], [ 2, "ng-touched", null ], [ 2, "ng-pristine", null ], [ 2, "ng-dirty", null ], [ 2, "ng-valid", null ], [ 2, "ng-invalid", null ], [ 2, "ng-pending", null ], [ 2, "_mat-animation-noopable", null ] ], null, null, form_field_index_ngfactory.b, form_field_index_ngfactory.a)), core["ɵdid"](17, 7520256, null, 9, form_field.c, [ core.ElementRef, core.ChangeDetectorRef, [ 2, fesm2015_core.h ], [ 2, bidi.b ], [ 2, form_field.a ], platform.a, core.NgZone, [ 2, animations.a ] ], null, null), core["ɵqud"](603979776, 1, {
                _controlNonStatic: 0
            }), core["ɵqud"](335544320, 2, {
                _controlStatic: 0
            }), core["ɵqud"](603979776, 3, {
                _labelChildNonStatic: 0
            }), core["ɵqud"](335544320, 4, {
                _labelChildStatic: 0
            }), core["ɵqud"](603979776, 5, {
                _placeholderChild: 0
            }), core["ɵqud"](603979776, 6, {
                _errorChildren: 1
            }), core["ɵqud"](603979776, 7, {
                _hintChildren: 1
            }), core["ɵqud"](603979776, 8, {
                _prefixChildren: 1
            }), core["ɵqud"](603979776, 9, {
                _suffixChildren: 1
            }), (_l()(), core["ɵeld"](27, 0, null, 1, 9, "input", [ [ "class", "mat-input-element mat-form-field-autofill-control" ], [ "formControlName", "namespace" ], [ "matInput", "" ], [ "name", "namespace" ], [ "placeholder", "Namespace name" ], [ "required", "" ], [ "type", "text" ] ], [ [ 1, "required", 0 ], [ 2, "ng-untouched", null ], [ 2, "ng-touched", null ], [ 2, "ng-pristine", null ], [ 2, "ng-dirty", null ], [ 2, "ng-valid", null ], [ 2, "ng-invalid", null ], [ 2, "ng-pending", null ], [ 2, "mat-input-server", null ], [ 1, "id", 0 ], [ 1, "placeholder", 0 ], [ 8, "disabled", 0 ], [ 8, "required", 0 ], [ 1, "readonly", 0 ], [ 1, "aria-describedby", 0 ], [ 1, "aria-invalid", 0 ], [ 1, "aria-required", 0 ] ], [ [ null, "input" ], [ null, "blur" ], [ null, "compositionstart" ], [ null, "compositionend" ], [ null, "focus" ] ], (function(_v, en, $event) {
                var ad = !0;
                return "input" === en && (ad = !1 !== core["ɵnov"](_v, 28)._handleInput($event.target.value) && ad), 
                "blur" === en && (ad = !1 !== core["ɵnov"](_v, 28).onTouched() && ad), "compositionstart" === en && (ad = !1 !== core["ɵnov"](_v, 28)._compositionStart() && ad), 
                "compositionend" === en && (ad = !1 !== core["ɵnov"](_v, 28)._compositionEnd($event.target.value) && ad), 
                "blur" === en && (ad = !1 !== core["ɵnov"](_v, 35)._focusChanged(!1) && ad), "focus" === en && (ad = !1 !== core["ɵnov"](_v, 35)._focusChanged(!0) && ad), 
                "input" === en && (ad = !1 !== core["ɵnov"](_v, 35)._onInput() && ad), ad;
            }), null, null)), core["ɵdid"](28, 16384, null, 0, fesm2015_forms.DefaultValueAccessor, [ core.Renderer2, core.ElementRef, [ 2, fesm2015_forms.COMPOSITION_BUFFER_MODE ] ], null, null), core["ɵdid"](29, 16384, null, 0, fesm2015_forms.RequiredValidator, [], {
                required: [ 0, "required" ]
            }, null), core["ɵprd"](1024, null, fesm2015_forms.NG_VALIDATORS, (function(p0_0) {
                return [ p0_0 ];
            }), [ fesm2015_forms.RequiredValidator ]), core["ɵprd"](1024, null, fesm2015_forms.NG_VALUE_ACCESSOR, (function(p0_0) {
                return [ p0_0 ];
            }), [ fesm2015_forms.DefaultValueAccessor ]), core["ɵdid"](32, 671744, null, 0, fesm2015_forms.FormControlName, [ [ 3, fesm2015_forms.ControlContainer ], [ 6, fesm2015_forms.NG_VALIDATORS ], [ 8, null ], [ 6, fesm2015_forms.NG_VALUE_ACCESSOR ], [ 2, fesm2015_forms["ɵangular_packages_forms_forms_p"] ] ], {
                name: [ 0, "name" ]
            }, null), core["ɵprd"](2048, null, fesm2015_forms.NgControl, null, [ fesm2015_forms.FormControlName ]), core["ɵdid"](34, 16384, null, 0, fesm2015_forms.NgControlStatus, [ [ 4, fesm2015_forms.NgControl ] ], null, null), core["ɵdid"](35, 999424, null, 0, input.a, [ core.ElementRef, platform.a, [ 6, fesm2015_forms.NgControl ], [ 2, fesm2015_forms.NgForm ], [ 2, fesm2015_forms.FormGroupDirective ], fesm2015_core.d, [ 8, null ], text_field.a, core.NgZone ], {
                placeholder: [ 0, "placeholder" ],
                required: [ 1, "required" ],
                type: [ 2, "type" ]
            }, null), core["ɵprd"](2048, [ [ 1, 4 ], [ 2, 4 ] ], form_field.d, null, [ input.a ]), (_l()(), 
            core["ɵeld"](37, 0, null, 7, 2, "mat-hint", [ [ "align", "end" ], [ "class", "mat-hint" ] ], [ [ 2, "mat-right", null ], [ 1, "id", 0 ], [ 1, "align", 0 ] ], null, null, null, null)), core["ɵdid"](38, 16384, [ [ 7, 4 ] ], 0, form_field.f, [], {
                align: [ 0, "align" ]
            }, null), (_l()(), core["ɵted"](39, null, [ "", " / ", "" ])), (_l()(), core["ɵand"](16777216, null, 5, 1, null, View_CreateNamespaceDialog_1)), core["ɵdid"](41, 16384, null, 0, common.NgIf, [ core.ViewContainerRef, core.TemplateRef ], {
                ngIf: [ 0, "ngIf" ]
            }, null), (_l()(), core["ɵand"](16777216, null, 5, 1, null, View_CreateNamespaceDialog_2)), core["ɵdid"](43, 16384, null, 0, common.NgIf, [ core.ViewContainerRef, core.TemplateRef ], {
                ngIf: [ 0, "ngIf" ]
            }, null), (_l()(), core["ɵand"](16777216, null, 5, 1, null, View_CreateNamespaceDialog_3)), core["ɵdid"](45, 16384, null, 0, common.NgIf, [ core.ViewContainerRef, core.TemplateRef ], {
                ngIf: [ 0, "ngIf" ]
            }, null), (_l()(), core["ɵeld"](46, 0, null, 0, 7, "kd-user-help", [], null, null, null, View_UserHelpComponent_0, RenderType_UserHelpComponent)), core["ɵdid"](47, 49152, null, 0, UserHelpComponent, [], null, null), (_l()(), 
            core["ɵeld"](48, 0, null, 0, 1, null, null, null, null, null, null, null)), (_l()(), 
            core["ɵted"](-1, null, [ "A namespace with the specified name will be added to the cluster." ])), (_l()(), 
            core["ɵeld"](50, 0, null, 0, 3, "a", [ [ "href", "http://kubernetes.io/docs/admin/namespaces/" ], [ "tabindex", "-1" ], [ "target", "_blank" ] ], null, null, null, null, null)), (_l()(), 
            core["ɵted"](-1, null, [ " Learn more " ])), (_l()(), core["ɵeld"](52, 0, null, null, 1, "i", [ [ "class", "material-icons" ] ], null, null, null, null, null)), (_l()(), 
            core["ɵted"](-1, null, [ "open_in_new" ])), (_l()(), core["ɵeld"](54, 0, null, null, 8, "mat-dialog-actions", [ [ "align", "end" ], [ "class", "mat-dialog-actions" ] ], null, null, null, null, null)), core["ɵdid"](55, 16384, null, 0, dialog.f, [], null, null), (_l()(), 
            core["ɵeld"](56, 0, null, null, 6, null, null, null, null, null, null, null)), (_l()(), 
            core["ɵeld"](57, 0, null, null, 2, "button", [ [ "color", "primary" ], [ "mat-button", "" ], [ "type", "submit" ] ], [ [ 1, "disabled", 0 ], [ 2, "_mat-animation-noopable", null ] ], [ [ null, "click" ] ], (function(_v, en, $event) {
                var ad = !0;
                return "click" === en && (ad = !1 !== _v.component.createNamespace() && ad), ad;
            }), button_index_ngfactory.d, button_index_ngfactory.b)), core["ɵdid"](58, 180224, null, 0, fesm2015_button.b, [ core.ElementRef, a11y.f, [ 2, animations.a ] ], {
                disabled: [ 0, "disabled" ],
                color: [ 1, "color" ]
            }, null), (_l()(), core["ɵted"](-1, 0, [ "Create" ])), (_l()(), core["ɵeld"](60, 0, null, null, 2, "button", [ [ "mat-button", "" ] ], [ [ 1, "disabled", 0 ], [ 2, "_mat-animation-noopable", null ] ], [ [ null, "click" ] ], (function(_v, en, $event) {
                var ad = !0;
                return "click" === en && (ad = !1 !== _v.component.cancel() && ad), ad;
            }), button_index_ngfactory.d, button_index_ngfactory.b)), core["ɵdid"](61, 180224, null, 0, fesm2015_button.b, [ core.ElementRef, a11y.f, [ 2, animations.a ] ], null, null), (_l()(), 
            core["ɵted"](-1, 0, [ "Cancel" ])) ], (function(_ck, _v) {
                var _co = _v.component;
                _ck(_v, 1, 0), _ck(_v, 11, 0, _co.form), _ck(_v, 29, 0, ""), _ck(_v, 32, 0, "namespace"), 
                _ck(_v, 35, 0, "Namespace name", "", "text"), _ck(_v, 38, 0, "end"), _ck(_v, 41, 0, null == _co.namespace.errors ? null : _co.namespace.errors.required), 
                _ck(_v, 43, 0, null == _co.namespace.errors ? null : _co.namespace.errors.maxlength), 
                _ck(_v, 45, 0, null == _co.namespace.errors ? null : _co.namespace.errors.pattern), 
                _ck(_v, 58, 0, _co.isDisabled(), "primary");
            }), (function(_ck, _v) {
                var _co = _v.component;
                _ck(_v, 0, 0, core["ɵnov"](_v, 1).id), _ck(_v, 9, 0, core["ɵnov"](_v, 13).ngClassUntouched, core["ɵnov"](_v, 13).ngClassTouched, core["ɵnov"](_v, 13).ngClassPristine, core["ɵnov"](_v, 13).ngClassDirty, core["ɵnov"](_v, 13).ngClassValid, core["ɵnov"](_v, 13).ngClassInvalid, core["ɵnov"](_v, 13).ngClassPending), 
                _ck(_v, 16, 1, [ "standard" == core["ɵnov"](_v, 17).appearance, "fill" == core["ɵnov"](_v, 17).appearance, "outline" == core["ɵnov"](_v, 17).appearance, "legacy" == core["ɵnov"](_v, 17).appearance, core["ɵnov"](_v, 17)._control.errorState, core["ɵnov"](_v, 17)._canLabelFloat, core["ɵnov"](_v, 17)._shouldLabelFloat(), core["ɵnov"](_v, 17)._hasFloatingLabel(), core["ɵnov"](_v, 17)._hideControlPlaceholder(), core["ɵnov"](_v, 17)._control.disabled, core["ɵnov"](_v, 17)._control.autofilled, core["ɵnov"](_v, 17)._control.focused, "accent" == core["ɵnov"](_v, 17).color, "warn" == core["ɵnov"](_v, 17).color, core["ɵnov"](_v, 17)._shouldForward("untouched"), core["ɵnov"](_v, 17)._shouldForward("touched"), core["ɵnov"](_v, 17)._shouldForward("pristine"), core["ɵnov"](_v, 17)._shouldForward("dirty"), core["ɵnov"](_v, 17)._shouldForward("valid"), core["ɵnov"](_v, 17)._shouldForward("invalid"), core["ɵnov"](_v, 17)._shouldForward("pending"), !core["ɵnov"](_v, 17)._animationsEnabled ]), 
                _ck(_v, 27, 1, [ core["ɵnov"](_v, 29).required ? "" : null, core["ɵnov"](_v, 34).ngClassUntouched, core["ɵnov"](_v, 34).ngClassTouched, core["ɵnov"](_v, 34).ngClassPristine, core["ɵnov"](_v, 34).ngClassDirty, core["ɵnov"](_v, 34).ngClassValid, core["ɵnov"](_v, 34).ngClassInvalid, core["ɵnov"](_v, 34).ngClassPending, core["ɵnov"](_v, 35)._isServer, core["ɵnov"](_v, 35).id, core["ɵnov"](_v, 35).placeholder, core["ɵnov"](_v, 35).disabled, core["ɵnov"](_v, 35).required, core["ɵnov"](_v, 35).readonly && !core["ɵnov"](_v, 35)._isNativeSelect || null, core["ɵnov"](_v, 35)._ariaDescribedby || null, core["ɵnov"](_v, 35).errorState, core["ɵnov"](_v, 35).required.toString() ]), 
                _ck(_v, 37, 0, "end" == core["ɵnov"](_v, 38).align, core["ɵnov"](_v, 38).id, null), 
                _ck(_v, 39, 0, _co.namespace.value.length, _co.namespaceMaxLength), _ck(_v, 57, 0, core["ɵnov"](_v, 58).disabled || null, "NoopAnimations" === core["ɵnov"](_v, 58)._animationMode), 
                _ck(_v, 60, 0, core["ɵnov"](_v, 61).disabled || null, "NoopAnimations" === core["ɵnov"](_v, 61)._animationMode);
            }));
        }
        function View_CreateNamespaceDialog_Host_0(_l) {
            return core["ɵvid"](0, [ (_l()(), core["ɵeld"](0, 0, null, null, 1, "kd-create-namespace-dialog", [], null, null, null, View_CreateNamespaceDialog_0, RenderType_CreateNamespaceDialog)), core["ɵdid"](1, 114688, null, 0, dialog_CreateNamespaceDialog, [ dialog.l, dialog.a, fesm2015_http.c, csrftoken.a, dialog.e, fesm2015_forms.FormBuilder ], null, null) ], (function(_ck, _v) {
                _ck(_v, 1, 0);
            }), null);
        }
        var CreateNamespaceDialogNgFactory = core["ɵccf"]("kd-create-namespace-dialog", dialog_CreateNamespaceDialog, View_CreateNamespaceDialog_Host_0, {}, {}, []);
        class dialog_CreateSecretDialog {
            constructor(dialogRef, data_, http_, csrfToken_, matDialog_, fb_) {
                this.dialogRef = dialogRef, this.data_ = data_, this.http_ = http_, this.csrfToken_ = csrfToken_, 
                this.matDialog_ = matDialog_, this.fb_ = fb_, this.config_ = index_config.a, this.secretNameMaxLength = 253, 
                this.secretNamePattern = new RegExp("^[a-z0-9]([-a-z0-9]*[a-z0-9])?(\\.[a-z0-9]([-a-z0-9]*[a-z0-9])?)*$"), 
                this.dataPattern = new RegExp("^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$");
            }
            ngOnInit() {
                this.form = this.fb_.group({
                    secretName: [ "", fesm2015_forms.Validators.compose([ fesm2015_forms.Validators.maxLength(this.secretNameMaxLength), fesm2015_forms.Validators.pattern(this.secretNamePattern) ]) ],
                    data: [ "", fesm2015_forms.Validators.pattern(this.dataPattern) ]
                });
            }
            get secretName() {
                return this.form.get("secretName");
            }
            get data() {
                return this.form.get("data");
            }
            createSecret() {
                if (!this.form.valid) return;
                const secretSpec = {
                    name: this.secretName.value,
                    namespace: this.data_.namespace,
                    data: this.data.value
                };
                this.csrfToken_.getTokenForAction("secret").subscribe(csrfToken => this.http_.post("api/v1/secret/", Object.assign({}, secretSpec), {
                    headers: (new fesm2015_http.i).set(this.config_.csrfHeaderName, csrfToken.token)
                }).subscribe(() => {
                    this.dialogRef.close(this.secretName.value);
                }, error => {
                    this.dialogRef.close(), this.matDialog_.open(alert_dialog.a, {
                        data: {
                            title: "Error creating secret",
                            message: error.data,
                            confirmLabel: "OK"
                        }
                    });
                }));
            }
            cancel() {
                this.dialogRef.close();
            }
        }
        var RenderType_CreateSecretDialog = core["ɵcrt"]({
            encapsulation: 2,
            styles: [],
            data: {}
        });
        function View_CreateSecretDialog_1(_l) {
            return core["ɵvid"](0, [ (_l()(), core["ɵeld"](0, 0, null, null, 2, "mat-error", [ [ "class", "mat-error" ], [ "role", "alert" ] ], [ [ 1, "id", 0 ] ], null, null, null, null)), core["ɵdid"](1, 16384, [ [ 6, 4 ] ], 0, form_field.b, [], null, null), (_l()(), 
            core["ɵted"](-1, null, [ " Name is required. " ])) ], null, (function(_ck, _v) {
                _ck(_v, 0, 0, core["ɵnov"](_v, 1).id);
            }));
        }
        function View_CreateSecretDialog_2(_l) {
            return core["ɵvid"](0, [ (_l()(), core["ɵeld"](0, 0, null, null, 2, "mat-error", [ [ "class", "mat-error" ], [ "role", "alert" ] ], [ [ 1, "id", 0 ] ], null, null, null, null)), core["ɵdid"](1, 16384, [ [ 6, 4 ] ], 0, form_field.b, [], null, null), (_l()(), 
            core["ɵted"](2, null, [ " Name must be up to ", " characters long. " ])) ], null, (function(_ck, _v) {
                var _co = _v.component;
                _ck(_v, 0, 0, core["ɵnov"](_v, 1).id), _ck(_v, 2, 0, _co.secretNameMaxLength);
            }));
        }
        function View_CreateSecretDialog_3(_l) {
            return core["ɵvid"](0, [ (_l()(), core["ɵeld"](0, 0, null, null, 2, "mat-error", [ [ "class", "mat-error" ], [ "role", "alert" ] ], [ [ 1, "id", 0 ] ], null, null, null, null)), core["ɵdid"](1, 16384, [ [ 6, 4 ] ], 0, form_field.b, [], null, null), (_l()(), 
            core["ɵted"](-1, null, [ " Name must follow the DNS domain name syntax (e.g. new.image-pull.secret). " ])) ], null, (function(_ck, _v) {
                _ck(_v, 0, 0, core["ɵnov"](_v, 1).id);
            }));
        }
        function View_CreateSecretDialog_4(_l) {
            return core["ɵvid"](0, [ (_l()(), core["ɵeld"](0, 0, null, null, 2, "mat-error", [ [ "class", "mat-error" ], [ "role", "alert" ] ], [ [ 1, "id", 0 ] ], null, null, null, null)), core["ɵdid"](1, 16384, [ [ 15, 4 ] ], 0, form_field.b, [], null, null), (_l()(), 
            core["ɵted"](-1, null, [ " Data is required. " ])) ], null, (function(_ck, _v) {
                _ck(_v, 0, 0, core["ɵnov"](_v, 1).id);
            }));
        }
        function View_CreateSecretDialog_5(_l) {
            return core["ɵvid"](0, [ (_l()(), core["ɵeld"](0, 0, null, null, 2, "mat-error", [ [ "class", "mat-error" ], [ "role", "alert" ] ], [ [ 1, "id", 0 ] ], null, null, null, null)), core["ɵdid"](1, 16384, [ [ 15, 4 ] ], 0, form_field.b, [], null, null), (_l()(), 
            core["ɵted"](-1, null, [ " Data must be Base64 encoded. " ])) ], null, (function(_ck, _v) {
                _ck(_v, 0, 0, core["ɵnov"](_v, 1).id);
            }));
        }
        function View_CreateSecretDialog_0(_l) {
            return core["ɵvid"](0, [ (_l()(), core["ɵeld"](0, 0, null, null, 2, "h4", [ [ "class", "mat-dialog-title" ], [ "mat-dialog-title", "" ] ], [ [ 8, "id", 0 ] ], null, null, null, null)), core["ɵdid"](1, 81920, null, 0, dialog.m, [ [ 2, dialog.l ], core.ElementRef, dialog.e ], null, null), (_l()(), 
            core["ɵted"](-1, null, [ "Create a new image pull secret" ])), (_l()(), core["ɵeld"](3, 0, null, null, 85, "mat-dialog-content", [ [ "class", "kd-dialog-text mat-dialog-content" ] ], null, null, null, null, null)), core["ɵdid"](4, 16384, null, 0, dialog.j, [], null, null), (_l()(), 
            core["ɵeld"](5, 0, null, null, 83, null, null, null, null, null, null, null)), (_l()(), 
            core["ɵeld"](6, 0, null, null, 1, "div", [], null, null, null, null, null)), (_l()(), 
            core["ɵted"](-1, null, [ "The new secret will be added to the cluster" ])), (_l()(), 
            core["ɵeld"](8, 0, null, null, 80, "div", [], null, null, null, null, null)), (_l()(), 
            core["ɵeld"](9, 0, null, null, 79, "form", [ [ "novalidate", "" ] ], [ [ 2, "ng-untouched", null ], [ 2, "ng-touched", null ], [ 2, "ng-pristine", null ], [ 2, "ng-dirty", null ], [ 2, "ng-valid", null ], [ 2, "ng-invalid", null ], [ 2, "ng-pending", null ] ], [ [ null, "submit" ], [ null, "reset" ] ], (function(_v, en, $event) {
                var ad = !0;
                return "submit" === en && (ad = !1 !== core["ɵnov"](_v, 11).onSubmit($event) && ad), 
                "reset" === en && (ad = !1 !== core["ɵnov"](_v, 11).onReset() && ad), ad;
            }), null, null)), core["ɵdid"](10, 16384, null, 0, fesm2015_forms["ɵangular_packages_forms_forms_y"], [], null, null), core["ɵdid"](11, 540672, null, 0, fesm2015_forms.FormGroupDirective, [ [ 8, null ], [ 8, null ] ], {
                form: [ 0, "form" ]
            }, null), core["ɵprd"](2048, null, fesm2015_forms.ControlContainer, null, [ fesm2015_forms.FormGroupDirective ]), core["ɵdid"](13, 16384, null, 0, fesm2015_forms.NgControlStatusGroup, [ [ 4, fesm2015_forms.ControlContainer ] ], null, null), (_l()(), 
            core["ɵeld"](14, 0, null, null, 39, "kd-help-section", [], null, null, null, View_HelpSectionComponent_0, RenderType_HelpSectionComponent)), core["ɵdid"](15, 49152, null, 0, HelpSectionComponent, [], null, null), (_l()(), 
            core["ɵeld"](16, 0, null, 0, 29, "mat-form-field", [ [ "class", "mat-form-field" ] ], [ [ 2, "mat-form-field-appearance-standard", null ], [ 2, "mat-form-field-appearance-fill", null ], [ 2, "mat-form-field-appearance-outline", null ], [ 2, "mat-form-field-appearance-legacy", null ], [ 2, "mat-form-field-invalid", null ], [ 2, "mat-form-field-can-float", null ], [ 2, "mat-form-field-should-float", null ], [ 2, "mat-form-field-has-label", null ], [ 2, "mat-form-field-hide-placeholder", null ], [ 2, "mat-form-field-disabled", null ], [ 2, "mat-form-field-autofilled", null ], [ 2, "mat-focused", null ], [ 2, "mat-accent", null ], [ 2, "mat-warn", null ], [ 2, "ng-untouched", null ], [ 2, "ng-touched", null ], [ 2, "ng-pristine", null ], [ 2, "ng-dirty", null ], [ 2, "ng-valid", null ], [ 2, "ng-invalid", null ], [ 2, "ng-pending", null ], [ 2, "_mat-animation-noopable", null ] ], null, null, form_field_index_ngfactory.b, form_field_index_ngfactory.a)), core["ɵdid"](17, 7520256, null, 9, form_field.c, [ core.ElementRef, core.ChangeDetectorRef, [ 2, fesm2015_core.h ], [ 2, bidi.b ], [ 2, form_field.a ], platform.a, core.NgZone, [ 2, animations.a ] ], null, null), core["ɵqud"](603979776, 1, {
                _controlNonStatic: 0
            }), core["ɵqud"](335544320, 2, {
                _controlStatic: 0
            }), core["ɵqud"](603979776, 3, {
                _labelChildNonStatic: 0
            }), core["ɵqud"](335544320, 4, {
                _labelChildStatic: 0
            }), core["ɵqud"](603979776, 5, {
                _placeholderChild: 0
            }), core["ɵqud"](603979776, 6, {
                _errorChildren: 1
            }), core["ɵqud"](603979776, 7, {
                _hintChildren: 1
            }), core["ɵqud"](603979776, 8, {
                _prefixChildren: 1
            }), core["ɵqud"](603979776, 9, {
                _suffixChildren: 1
            }), (_l()(), core["ɵeld"](27, 0, null, 1, 9, "input", [ [ "class", "mat-input-element mat-form-field-autofill-control" ], [ "formControlName", "secretName" ], [ "matInput", "" ], [ "name", "secretName" ], [ "placeholder", "Secret name" ], [ "required", "" ], [ "type", "text" ] ], [ [ 1, "required", 0 ], [ 2, "ng-untouched", null ], [ 2, "ng-touched", null ], [ 2, "ng-pristine", null ], [ 2, "ng-dirty", null ], [ 2, "ng-valid", null ], [ 2, "ng-invalid", null ], [ 2, "ng-pending", null ], [ 2, "mat-input-server", null ], [ 1, "id", 0 ], [ 1, "placeholder", 0 ], [ 8, "disabled", 0 ], [ 8, "required", 0 ], [ 1, "readonly", 0 ], [ 1, "aria-describedby", 0 ], [ 1, "aria-invalid", 0 ], [ 1, "aria-required", 0 ] ], [ [ null, "input" ], [ null, "blur" ], [ null, "compositionstart" ], [ null, "compositionend" ], [ null, "focus" ] ], (function(_v, en, $event) {
                var ad = !0;
                return "input" === en && (ad = !1 !== core["ɵnov"](_v, 28)._handleInput($event.target.value) && ad), 
                "blur" === en && (ad = !1 !== core["ɵnov"](_v, 28).onTouched() && ad), "compositionstart" === en && (ad = !1 !== core["ɵnov"](_v, 28)._compositionStart() && ad), 
                "compositionend" === en && (ad = !1 !== core["ɵnov"](_v, 28)._compositionEnd($event.target.value) && ad), 
                "blur" === en && (ad = !1 !== core["ɵnov"](_v, 35)._focusChanged(!1) && ad), "focus" === en && (ad = !1 !== core["ɵnov"](_v, 35)._focusChanged(!0) && ad), 
                "input" === en && (ad = !1 !== core["ɵnov"](_v, 35)._onInput() && ad), ad;
            }), null, null)), core["ɵdid"](28, 16384, null, 0, fesm2015_forms.DefaultValueAccessor, [ core.Renderer2, core.ElementRef, [ 2, fesm2015_forms.COMPOSITION_BUFFER_MODE ] ], null, null), core["ɵdid"](29, 16384, null, 0, fesm2015_forms.RequiredValidator, [], {
                required: [ 0, "required" ]
            }, null), core["ɵprd"](1024, null, fesm2015_forms.NG_VALIDATORS, (function(p0_0) {
                return [ p0_0 ];
            }), [ fesm2015_forms.RequiredValidator ]), core["ɵprd"](1024, null, fesm2015_forms.NG_VALUE_ACCESSOR, (function(p0_0) {
                return [ p0_0 ];
            }), [ fesm2015_forms.DefaultValueAccessor ]), core["ɵdid"](32, 671744, null, 0, fesm2015_forms.FormControlName, [ [ 3, fesm2015_forms.ControlContainer ], [ 6, fesm2015_forms.NG_VALIDATORS ], [ 8, null ], [ 6, fesm2015_forms.NG_VALUE_ACCESSOR ], [ 2, fesm2015_forms["ɵangular_packages_forms_forms_p"] ] ], {
                name: [ 0, "name" ]
            }, null), core["ɵprd"](2048, null, fesm2015_forms.NgControl, null, [ fesm2015_forms.FormControlName ]), core["ɵdid"](34, 16384, null, 0, fesm2015_forms.NgControlStatus, [ [ 4, fesm2015_forms.NgControl ] ], null, null), core["ɵdid"](35, 999424, null, 0, input.a, [ core.ElementRef, platform.a, [ 6, fesm2015_forms.NgControl ], [ 2, fesm2015_forms.NgForm ], [ 2, fesm2015_forms.FormGroupDirective ], fesm2015_core.d, [ 8, null ], text_field.a, core.NgZone ], {
                placeholder: [ 0, "placeholder" ],
                required: [ 1, "required" ],
                type: [ 2, "type" ]
            }, null), core["ɵprd"](2048, [ [ 1, 4 ], [ 2, 4 ] ], form_field.d, null, [ input.a ]), (_l()(), 
            core["ɵeld"](37, 0, null, 7, 2, "mat-hint", [ [ "align", "end" ], [ "class", "mat-hint" ] ], [ [ 2, "mat-right", null ], [ 1, "id", 0 ], [ 1, "align", 0 ] ], null, null, null, null)), core["ɵdid"](38, 16384, [ [ 7, 4 ] ], 0, form_field.f, [], {
                align: [ 0, "align" ]
            }, null), (_l()(), core["ɵted"](39, null, [ "", " / ", "" ])), (_l()(), core["ɵand"](16777216, null, 5, 1, null, View_CreateSecretDialog_1)), core["ɵdid"](41, 16384, null, 0, common.NgIf, [ core.ViewContainerRef, core.TemplateRef ], {
                ngIf: [ 0, "ngIf" ]
            }, null), (_l()(), core["ɵand"](16777216, null, 5, 1, null, View_CreateSecretDialog_2)), core["ɵdid"](43, 16384, null, 0, common.NgIf, [ core.ViewContainerRef, core.TemplateRef ], {
                ngIf: [ 0, "ngIf" ]
            }, null), (_l()(), core["ɵand"](16777216, null, 5, 1, null, View_CreateSecretDialog_3)), core["ɵdid"](45, 16384, null, 0, common.NgIf, [ core.ViewContainerRef, core.TemplateRef ], {
                ngIf: [ 0, "ngIf" ]
            }, null), (_l()(), core["ɵeld"](46, 0, null, 0, 7, "kd-user-help", [], null, null, null, View_UserHelpComponent_0, RenderType_UserHelpComponent)), core["ɵdid"](47, 49152, null, 0, UserHelpComponent, [], null, null), (_l()(), 
            core["ɵeld"](48, 0, null, 0, 1, "span", [], null, null, null, null, null)), (_l()(), 
            core["ɵted"](-1, null, [ "A secret with the specified name will be added to the cluster in the namespace." ])), (_l()(), 
            core["ɵeld"](50, 0, null, 0, 3, "a", [ [ "href", "http://kubernetes.io/docs/user-guide/secrets/" ], [ "tabindex", "-1" ], [ "target", "_blank" ] ], null, null, null, null, null)), (_l()(), 
            core["ɵted"](-1, null, [ " Learn more " ])), (_l()(), core["ɵeld"](52, 0, null, null, 1, "i", [ [ "class", "material-icons" ] ], null, null, null, null, null)), (_l()(), 
            core["ɵted"](-1, null, [ "open_in_new" ])), (_l()(), core["ɵeld"](54, 0, null, null, 34, "kd-help-section", [], null, null, null, View_HelpSectionComponent_0, RenderType_HelpSectionComponent)), core["ɵdid"](55, 49152, null, 0, HelpSectionComponent, [], null, null), (_l()(), 
            core["ɵeld"](56, 0, null, 0, 24, "mat-form-field", [ [ "class", "mat-form-field" ] ], [ [ 2, "mat-form-field-appearance-standard", null ], [ 2, "mat-form-field-appearance-fill", null ], [ 2, "mat-form-field-appearance-outline", null ], [ 2, "mat-form-field-appearance-legacy", null ], [ 2, "mat-form-field-invalid", null ], [ 2, "mat-form-field-can-float", null ], [ 2, "mat-form-field-should-float", null ], [ 2, "mat-form-field-has-label", null ], [ 2, "mat-form-field-hide-placeholder", null ], [ 2, "mat-form-field-disabled", null ], [ 2, "mat-form-field-autofilled", null ], [ 2, "mat-focused", null ], [ 2, "mat-accent", null ], [ 2, "mat-warn", null ], [ 2, "ng-untouched", null ], [ 2, "ng-touched", null ], [ 2, "ng-pristine", null ], [ 2, "ng-dirty", null ], [ 2, "ng-valid", null ], [ 2, "ng-invalid", null ], [ 2, "ng-pending", null ], [ 2, "_mat-animation-noopable", null ] ], null, null, form_field_index_ngfactory.b, form_field_index_ngfactory.a)), core["ɵdid"](57, 7520256, null, 9, form_field.c, [ core.ElementRef, core.ChangeDetectorRef, [ 2, fesm2015_core.h ], [ 2, bidi.b ], [ 2, form_field.a ], platform.a, core.NgZone, [ 2, animations.a ] ], null, null), core["ɵqud"](603979776, 10, {
                _controlNonStatic: 0
            }), core["ɵqud"](335544320, 11, {
                _controlStatic: 0
            }), core["ɵqud"](603979776, 12, {
                _labelChildNonStatic: 0
            }), core["ɵqud"](335544320, 13, {
                _labelChildStatic: 0
            }), core["ɵqud"](603979776, 14, {
                _placeholderChild: 0
            }), core["ɵqud"](603979776, 15, {
                _errorChildren: 1
            }), core["ɵqud"](603979776, 16, {
                _hintChildren: 1
            }), core["ɵqud"](603979776, 17, {
                _prefixChildren: 1
            }), core["ɵqud"](603979776, 18, {
                _suffixChildren: 1
            }), (_l()(), core["ɵeld"](67, 0, null, 1, 9, "input", [ [ "class", "mat-input-element mat-form-field-autofill-control" ], [ "formControlName", "data" ], [ "matInput", "" ], [ "name", "data" ], [ "placeholder", "Image pull secret data" ], [ "required", "" ], [ "type", "text" ] ], [ [ 1, "required", 0 ], [ 2, "ng-untouched", null ], [ 2, "ng-touched", null ], [ 2, "ng-pristine", null ], [ 2, "ng-dirty", null ], [ 2, "ng-valid", null ], [ 2, "ng-invalid", null ], [ 2, "ng-pending", null ], [ 2, "mat-input-server", null ], [ 1, "id", 0 ], [ 1, "placeholder", 0 ], [ 8, "disabled", 0 ], [ 8, "required", 0 ], [ 1, "readonly", 0 ], [ 1, "aria-describedby", 0 ], [ 1, "aria-invalid", 0 ], [ 1, "aria-required", 0 ] ], [ [ null, "input" ], [ null, "blur" ], [ null, "compositionstart" ], [ null, "compositionend" ], [ null, "focus" ] ], (function(_v, en, $event) {
                var ad = !0;
                return "input" === en && (ad = !1 !== core["ɵnov"](_v, 68)._handleInput($event.target.value) && ad), 
                "blur" === en && (ad = !1 !== core["ɵnov"](_v, 68).onTouched() && ad), "compositionstart" === en && (ad = !1 !== core["ɵnov"](_v, 68)._compositionStart() && ad), 
                "compositionend" === en && (ad = !1 !== core["ɵnov"](_v, 68)._compositionEnd($event.target.value) && ad), 
                "blur" === en && (ad = !1 !== core["ɵnov"](_v, 75)._focusChanged(!1) && ad), "focus" === en && (ad = !1 !== core["ɵnov"](_v, 75)._focusChanged(!0) && ad), 
                "input" === en && (ad = !1 !== core["ɵnov"](_v, 75)._onInput() && ad), ad;
            }), null, null)), core["ɵdid"](68, 16384, null, 0, fesm2015_forms.DefaultValueAccessor, [ core.Renderer2, core.ElementRef, [ 2, fesm2015_forms.COMPOSITION_BUFFER_MODE ] ], null, null), core["ɵdid"](69, 16384, null, 0, fesm2015_forms.RequiredValidator, [], {
                required: [ 0, "required" ]
            }, null), core["ɵprd"](1024, null, fesm2015_forms.NG_VALIDATORS, (function(p0_0) {
                return [ p0_0 ];
            }), [ fesm2015_forms.RequiredValidator ]), core["ɵprd"](1024, null, fesm2015_forms.NG_VALUE_ACCESSOR, (function(p0_0) {
                return [ p0_0 ];
            }), [ fesm2015_forms.DefaultValueAccessor ]), core["ɵdid"](72, 671744, null, 0, fesm2015_forms.FormControlName, [ [ 3, fesm2015_forms.ControlContainer ], [ 6, fesm2015_forms.NG_VALIDATORS ], [ 8, null ], [ 6, fesm2015_forms.NG_VALUE_ACCESSOR ], [ 2, fesm2015_forms["ɵangular_packages_forms_forms_p"] ] ], {
                name: [ 0, "name" ]
            }, null), core["ɵprd"](2048, null, fesm2015_forms.NgControl, null, [ fesm2015_forms.FormControlName ]), core["ɵdid"](74, 16384, null, 0, fesm2015_forms.NgControlStatus, [ [ 4, fesm2015_forms.NgControl ] ], null, null), core["ɵdid"](75, 999424, null, 0, input.a, [ core.ElementRef, platform.a, [ 6, fesm2015_forms.NgControl ], [ 2, fesm2015_forms.NgForm ], [ 2, fesm2015_forms.FormGroupDirective ], fesm2015_core.d, [ 8, null ], text_field.a, core.NgZone ], {
                placeholder: [ 0, "placeholder" ],
                required: [ 1, "required" ],
                type: [ 2, "type" ]
            }, null), core["ɵprd"](2048, [ [ 10, 4 ], [ 11, 4 ] ], form_field.d, null, [ input.a ]), (_l()(), 
            core["ɵand"](16777216, null, 5, 1, null, View_CreateSecretDialog_4)), core["ɵdid"](78, 16384, null, 0, common.NgIf, [ core.ViewContainerRef, core.TemplateRef ], {
                ngIf: [ 0, "ngIf" ]
            }, null), (_l()(), core["ɵand"](16777216, null, 5, 1, null, View_CreateSecretDialog_5)), core["ɵdid"](80, 16384, null, 0, common.NgIf, [ core.ViewContainerRef, core.TemplateRef ], {
                ngIf: [ 0, "ngIf" ]
            }, null), (_l()(), core["ɵeld"](81, 0, null, 0, 7, "kd-user-help", [], null, null, null, View_UserHelpComponent_0, RenderType_UserHelpComponent)), core["ɵdid"](82, 49152, null, 0, UserHelpComponent, [], null, null), (_l()(), 
            core["ɵeld"](83, 0, null, 0, 1, null, null, null, null, null, null, null)), (_l()(), 
            core["ɵted"](-1, null, [ "Specify the data for your secret to hold. The value is the Base64 encoded content of a .dockercfg file." ])), (_l()(), 
            core["ɵeld"](85, 0, null, 0, 3, "a", [ [ "href", "http://kubernetes.io/docs/user-guide/images/#specifying-imagepullsecrets-on-a-pod" ], [ "tabindex", "-1" ], [ "target", "_blank" ] ], null, null, null, null, null)), (_l()(), 
            core["ɵted"](-1, null, [ " Learn more " ])), (_l()(), core["ɵeld"](87, 0, null, null, 1, "i", [ [ "class", "material-icons" ] ], null, null, null, null, null)), (_l()(), 
            core["ɵted"](-1, null, [ "open_in_new" ])), (_l()(), core["ɵeld"](89, 0, null, null, 8, "mat-dialog-actions", [ [ "align", "end" ], [ "class", "mat-dialog-actions" ] ], null, null, null, null, null)), core["ɵdid"](90, 16384, null, 0, dialog.f, [], null, null), (_l()(), 
            core["ɵeld"](91, 0, null, null, 6, null, null, null, null, null, null, null)), (_l()(), 
            core["ɵeld"](92, 0, null, null, 2, "button", [ [ "color", "primary" ], [ "mat-button", "" ], [ "type", "submit" ] ], [ [ 1, "disabled", 0 ], [ 2, "_mat-animation-noopable", null ] ], [ [ null, "click" ] ], (function(_v, en, $event) {
                var ad = !0;
                return "click" === en && (ad = !1 !== _v.component.createSecret() && ad), ad;
            }), button_index_ngfactory.d, button_index_ngfactory.b)), core["ɵdid"](93, 180224, null, 0, fesm2015_button.b, [ core.ElementRef, a11y.f, [ 2, animations.a ] ], {
                color: [ 0, "color" ]
            }, null), (_l()(), core["ɵted"](-1, 0, [ "Create" ])), (_l()(), core["ɵeld"](95, 0, null, null, 2, "button", [ [ "mat-button", "" ] ], [ [ 1, "disabled", 0 ], [ 2, "_mat-animation-noopable", null ] ], [ [ null, "click" ] ], (function(_v, en, $event) {
                var ad = !0;
                return "click" === en && (ad = !1 !== _v.component.cancel() && ad), ad;
            }), button_index_ngfactory.d, button_index_ngfactory.b)), core["ɵdid"](96, 180224, null, 0, fesm2015_button.b, [ core.ElementRef, a11y.f, [ 2, animations.a ] ], null, null), (_l()(), 
            core["ɵted"](-1, 0, [ "Cancel" ])) ], (function(_ck, _v) {
                var _co = _v.component;
                _ck(_v, 1, 0), _ck(_v, 11, 0, _co.form), _ck(_v, 29, 0, ""), _ck(_v, 32, 0, "secretName"), 
                _ck(_v, 35, 0, "Secret name", "", "text"), _ck(_v, 38, 0, "end"), _ck(_v, 41, 0, null == _co.secretName.errors ? null : _co.secretName.errors.required), 
                _ck(_v, 43, 0, null == _co.secretName.errors ? null : _co.secretName.errors.maxlength), 
                _ck(_v, 45, 0, null == _co.secretName.errors ? null : _co.secretName.errors.pattern), 
                _ck(_v, 69, 0, ""), _ck(_v, 72, 0, "data"), _ck(_v, 75, 0, "Image pull secret data", "", "text"), 
                _ck(_v, 78, 0, null == _co.data.errors ? null : _co.data.errors.required), _ck(_v, 80, 0, null == _co.data.errors ? null : _co.data.errors.pattern), 
                _ck(_v, 93, 0, "primary");
            }), (function(_ck, _v) {
                var _co = _v.component;
                _ck(_v, 0, 0, core["ɵnov"](_v, 1).id), _ck(_v, 9, 0, core["ɵnov"](_v, 13).ngClassUntouched, core["ɵnov"](_v, 13).ngClassTouched, core["ɵnov"](_v, 13).ngClassPristine, core["ɵnov"](_v, 13).ngClassDirty, core["ɵnov"](_v, 13).ngClassValid, core["ɵnov"](_v, 13).ngClassInvalid, core["ɵnov"](_v, 13).ngClassPending), 
                _ck(_v, 16, 1, [ "standard" == core["ɵnov"](_v, 17).appearance, "fill" == core["ɵnov"](_v, 17).appearance, "outline" == core["ɵnov"](_v, 17).appearance, "legacy" == core["ɵnov"](_v, 17).appearance, core["ɵnov"](_v, 17)._control.errorState, core["ɵnov"](_v, 17)._canLabelFloat, core["ɵnov"](_v, 17)._shouldLabelFloat(), core["ɵnov"](_v, 17)._hasFloatingLabel(), core["ɵnov"](_v, 17)._hideControlPlaceholder(), core["ɵnov"](_v, 17)._control.disabled, core["ɵnov"](_v, 17)._control.autofilled, core["ɵnov"](_v, 17)._control.focused, "accent" == core["ɵnov"](_v, 17).color, "warn" == core["ɵnov"](_v, 17).color, core["ɵnov"](_v, 17)._shouldForward("untouched"), core["ɵnov"](_v, 17)._shouldForward("touched"), core["ɵnov"](_v, 17)._shouldForward("pristine"), core["ɵnov"](_v, 17)._shouldForward("dirty"), core["ɵnov"](_v, 17)._shouldForward("valid"), core["ɵnov"](_v, 17)._shouldForward("invalid"), core["ɵnov"](_v, 17)._shouldForward("pending"), !core["ɵnov"](_v, 17)._animationsEnabled ]), 
                _ck(_v, 27, 1, [ core["ɵnov"](_v, 29).required ? "" : null, core["ɵnov"](_v, 34).ngClassUntouched, core["ɵnov"](_v, 34).ngClassTouched, core["ɵnov"](_v, 34).ngClassPristine, core["ɵnov"](_v, 34).ngClassDirty, core["ɵnov"](_v, 34).ngClassValid, core["ɵnov"](_v, 34).ngClassInvalid, core["ɵnov"](_v, 34).ngClassPending, core["ɵnov"](_v, 35)._isServer, core["ɵnov"](_v, 35).id, core["ɵnov"](_v, 35).placeholder, core["ɵnov"](_v, 35).disabled, core["ɵnov"](_v, 35).required, core["ɵnov"](_v, 35).readonly && !core["ɵnov"](_v, 35)._isNativeSelect || null, core["ɵnov"](_v, 35)._ariaDescribedby || null, core["ɵnov"](_v, 35).errorState, core["ɵnov"](_v, 35).required.toString() ]), 
                _ck(_v, 37, 0, "end" == core["ɵnov"](_v, 38).align, core["ɵnov"](_v, 38).id, null), 
                _ck(_v, 39, 0, _co.secretName.value.length, _co.secretNameMaxLength), _ck(_v, 56, 1, [ "standard" == core["ɵnov"](_v, 57).appearance, "fill" == core["ɵnov"](_v, 57).appearance, "outline" == core["ɵnov"](_v, 57).appearance, "legacy" == core["ɵnov"](_v, 57).appearance, core["ɵnov"](_v, 57)._control.errorState, core["ɵnov"](_v, 57)._canLabelFloat, core["ɵnov"](_v, 57)._shouldLabelFloat(), core["ɵnov"](_v, 57)._hasFloatingLabel(), core["ɵnov"](_v, 57)._hideControlPlaceholder(), core["ɵnov"](_v, 57)._control.disabled, core["ɵnov"](_v, 57)._control.autofilled, core["ɵnov"](_v, 57)._control.focused, "accent" == core["ɵnov"](_v, 57).color, "warn" == core["ɵnov"](_v, 57).color, core["ɵnov"](_v, 57)._shouldForward("untouched"), core["ɵnov"](_v, 57)._shouldForward("touched"), core["ɵnov"](_v, 57)._shouldForward("pristine"), core["ɵnov"](_v, 57)._shouldForward("dirty"), core["ɵnov"](_v, 57)._shouldForward("valid"), core["ɵnov"](_v, 57)._shouldForward("invalid"), core["ɵnov"](_v, 57)._shouldForward("pending"), !core["ɵnov"](_v, 57)._animationsEnabled ]), 
                _ck(_v, 67, 1, [ core["ɵnov"](_v, 69).required ? "" : null, core["ɵnov"](_v, 74).ngClassUntouched, core["ɵnov"](_v, 74).ngClassTouched, core["ɵnov"](_v, 74).ngClassPristine, core["ɵnov"](_v, 74).ngClassDirty, core["ɵnov"](_v, 74).ngClassValid, core["ɵnov"](_v, 74).ngClassInvalid, core["ɵnov"](_v, 74).ngClassPending, core["ɵnov"](_v, 75)._isServer, core["ɵnov"](_v, 75).id, core["ɵnov"](_v, 75).placeholder, core["ɵnov"](_v, 75).disabled, core["ɵnov"](_v, 75).required, core["ɵnov"](_v, 75).readonly && !core["ɵnov"](_v, 75)._isNativeSelect || null, core["ɵnov"](_v, 75)._ariaDescribedby || null, core["ɵnov"](_v, 75).errorState, core["ɵnov"](_v, 75).required.toString() ]), 
                _ck(_v, 92, 0, core["ɵnov"](_v, 93).disabled || null, "NoopAnimations" === core["ɵnov"](_v, 93)._animationMode), 
                _ck(_v, 95, 0, core["ɵnov"](_v, 96).disabled || null, "NoopAnimations" === core["ɵnov"](_v, 96)._animationMode);
            }));
        }
        function View_CreateSecretDialog_Host_0(_l) {
            return core["ɵvid"](0, [ (_l()(), core["ɵeld"](0, 0, null, null, 1, "kd-create-secret-dialog", [], null, null, null, View_CreateSecretDialog_0, RenderType_CreateSecretDialog)), core["ɵdid"](1, 114688, null, 0, dialog_CreateSecretDialog, [ dialog.l, dialog.a, fesm2015_http.c, csrftoken.a, dialog.e, fesm2015_forms.FormBuilder ], null, null) ], (function(_ck, _v) {
                _ck(_v, 1, 0);
            }), null);
        }
        var CreateSecretDialogNgFactory = core["ɵccf"]("kd-create-secret-dialog", dialog_CreateSecretDialog, View_CreateSecretDialog_Host_0, {}, {}, []), card_index_ngfactory = __webpack_require__("YHaq"), card = __webpack_require__("PDjf"), tabs = __webpack_require__("M9ds"), observers = __webpack_require__("9b/N"), portal = __webpack_require__("1z/I"), scrolling = __webpack_require__("7KAL"), RenderType_MatTabGroup = core["ɵcrt"]({
            encapsulation: 2,
            styles: [ ".mat-tab-group{display:flex;flex-direction:column}.mat-tab-group.mat-tab-group-inverted-header{flex-direction:column-reverse}.mat-tab-label{height:48px;padding:0 24px;cursor:pointer;box-sizing:border-box;opacity:.6;min-width:160px;text-align:center;display:inline-flex;justify-content:center;align-items:center;white-space:nowrap;position:relative}.mat-tab-label:focus{outline:none}.mat-tab-label:focus:not(.mat-tab-disabled){opacity:1}.cdk-high-contrast-active .mat-tab-label:focus{outline:dotted 2px}.mat-tab-label.mat-tab-disabled{cursor:default}.cdk-high-contrast-active .mat-tab-label.mat-tab-disabled{opacity:.5}.mat-tab-label .mat-tab-label-content{display:inline-flex;justify-content:center;align-items:center;white-space:nowrap}.cdk-high-contrast-active .mat-tab-label{opacity:1}@media(max-width: 599px){.mat-tab-label{padding:0 12px}}@media(max-width: 959px){.mat-tab-label{padding:0 12px}}.mat-tab-group[mat-stretch-tabs]>.mat-tab-header .mat-tab-label{flex-basis:0;flex-grow:1}.mat-tab-body-wrapper{position:relative;overflow:hidden;display:flex;transition:height 500ms cubic-bezier(0.35, 0, 0.25, 1)}._mat-animation-noopable.mat-tab-body-wrapper{transition:none;animation:none}.mat-tab-body{top:0;left:0;right:0;bottom:0;position:absolute;display:block;overflow:hidden;flex-basis:100%}.mat-tab-body.mat-tab-body-active{position:relative;overflow-x:hidden;overflow-y:auto;z-index:1;flex-grow:1}.mat-tab-group.mat-tab-group-dynamic-height .mat-tab-body.mat-tab-body-active{overflow-y:hidden}\n" ],
            data: {}
        });
        function View_MatTabGroup_3(_l) {
            return core["ɵvid"](0, [ (_l()(), core["ɵand"](0, null, null, 0)) ], null, null);
        }
        function View_MatTabGroup_2(_l) {
            return core["ɵvid"](0, [ (_l()(), core["ɵand"](16777216, null, null, 1, null, View_MatTabGroup_3)), core["ɵdid"](1, 212992, null, 0, portal.c, [ core.ComponentFactoryResolver, core.ViewContainerRef, common.DOCUMENT ], {
                portal: [ 0, "portal" ]
            }, null), (_l()(), core["ɵand"](0, null, null, 0)) ], (function(_ck, _v) {
                _ck(_v, 1, 0, _v.parent.context.$implicit.templateLabel);
            }), null);
        }
        function View_MatTabGroup_4(_l) {
            return core["ɵvid"](0, [ (_l()(), core["ɵted"](0, null, [ "", "" ])) ], null, (function(_ck, _v) {
                _ck(_v, 0, 0, _v.parent.context.$implicit.textLabel);
            }));
        }
        function View_MatTabGroup_1(_l) {
            return core["ɵvid"](0, [ (_l()(), core["ɵeld"](0, 0, null, null, 8, "div", [ [ "cdkMonitorElementFocus", "" ], [ "class", "mat-tab-label mat-ripple" ], [ "mat-ripple", "" ], [ "matTabLabelWrapper", "" ], [ "role", "tab" ] ], [ [ 8, "id", 0 ], [ 1, "tabIndex", 0 ], [ 1, "aria-posinset", 0 ], [ 1, "aria-setsize", 0 ], [ 1, "aria-controls", 0 ], [ 1, "aria-selected", 0 ], [ 1, "aria-label", 0 ], [ 1, "aria-labelledby", 0 ], [ 2, "mat-tab-label-active", null ], [ 2, "mat-ripple-unbounded", null ], [ 2, "mat-tab-disabled", null ], [ 1, "aria-disabled", 0 ] ], [ [ null, "click" ] ], (function(_v, en, $event) {
                var ad = !0;
                return "click" === en && (ad = !1 !== _v.component._handleClick(_v.context.$implicit, core["ɵnov"](_v.parent, 3), _v.context.index) && ad), 
                ad;
            }), null, null)), core["ɵdid"](1, 212992, null, 0, fesm2015_core.t, [ core.ElementRef, core.NgZone, platform.a, [ 2, fesm2015_core.k ], [ 2, animations.a ] ], {
                disabled: [ 0, "disabled" ]
            }, null), core["ɵdid"](2, 147456, null, 0, a11y.d, [ core.ElementRef, a11y.f ], null, null), core["ɵdid"](3, 16384, [ [ 3, 4 ] ], 0, tabs.i, [ core.ElementRef ], {
                disabled: [ 0, "disabled" ]
            }, null), (_l()(), core["ɵeld"](4, 0, null, null, 4, "div", [ [ "class", "mat-tab-label-content" ] ], null, null, null, null, null)), (_l()(), 
            core["ɵand"](16777216, null, null, 1, null, View_MatTabGroup_2)), core["ɵdid"](6, 16384, null, 0, common.NgIf, [ core.ViewContainerRef, core.TemplateRef ], {
                ngIf: [ 0, "ngIf" ]
            }, null), (_l()(), core["ɵand"](16777216, null, null, 1, null, View_MatTabGroup_4)), core["ɵdid"](8, 16384, null, 0, common.NgIf, [ core.ViewContainerRef, core.TemplateRef ], {
                ngIf: [ 0, "ngIf" ]
            }, null) ], (function(_ck, _v) {
                _ck(_v, 1, 0, _v.context.$implicit.disabled || _v.component.disableRipple), _ck(_v, 3, 0, _v.context.$implicit.disabled), 
                _ck(_v, 6, 0, _v.context.$implicit.templateLabel), _ck(_v, 8, 0, !_v.context.$implicit.templateLabel);
            }), (function(_ck, _v) {
                var _co = _v.component;
                _ck(_v, 0, 1, [ _co._getTabLabelId(_v.context.index), _co._getTabIndex(_v.context.$implicit, _v.context.index), _v.context.index + 1, _co._tabs.length, _co._getTabContentId(_v.context.index), _co.selectedIndex == _v.context.index, _v.context.$implicit.ariaLabel || null, !_v.context.$implicit.ariaLabel && _v.context.$implicit.ariaLabelledby ? _v.context.$implicit.ariaLabelledby : null, _co.selectedIndex == _v.context.index, core["ɵnov"](_v, 1).unbounded, core["ɵnov"](_v, 3).disabled, !!core["ɵnov"](_v, 3).disabled ]);
            }));
        }
        function View_MatTabGroup_5(_l) {
            return core["ɵvid"](0, [ (_l()(), core["ɵeld"](0, 0, null, null, 1, "mat-tab-body", [ [ "class", "mat-tab-body" ], [ "role", "tabpanel" ] ], [ [ 8, "id", 0 ], [ 1, "aria-labelledby", 0 ], [ 2, "mat-tab-body-active", null ] ], [ [ null, "_onCentered" ], [ null, "_onCentering" ] ], (function(_v, en, $event) {
                var ad = !0, _co = _v.component;
                return "_onCentered" === en && (ad = !1 !== _co._removeTabBodyWrapperHeight() && ad), 
                "_onCentering" === en && (ad = !1 !== _co._setTabBodyWrapperHeight($event) && ad), 
                ad;
            }), View_MatTabBody_0, RenderType_MatTabBody)), core["ɵdid"](1, 245760, null, 0, tabs.e, [ core.ElementRef, [ 2, bidi.b ], core.ChangeDetectorRef ], {
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
            return core["ɵvid"](0, [ core["ɵqud"](671088640, 1, {
                _tabBodyWrapper: 0
            }), core["ɵqud"](671088640, 2, {
                _tabHeader: 0
            }), (_l()(), core["ɵeld"](2, 0, null, null, 4, "mat-tab-header", [ [ "class", "mat-tab-header" ] ], [ [ 2, "mat-tab-header-pagination-controls-enabled", null ], [ 2, "mat-tab-header-rtl", null ] ], [ [ null, "indexFocused" ], [ null, "selectFocusedIndex" ] ], (function(_v, en, $event) {
                var ad = !0, _co = _v.component;
                return "indexFocused" === en && (ad = !1 !== _co._focusChanged($event) && ad), "selectFocusedIndex" === en && (ad = !1 !== (_co.selectedIndex = $event) && ad), 
                ad;
            }), View_MatTabHeader_0, RenderType_MatTabHeader)), core["ɵdid"](3, 7520256, [ [ 2, 4 ], [ "tabHeader", 4 ] ], 1, tabs.h, [ core.ElementRef, core.ChangeDetectorRef, scrolling.d, [ 2, bidi.b ], core.NgZone, platform.a, [ 2, animations.a ] ], {
                selectedIndex: [ 0, "selectedIndex" ],
                disablePagination: [ 1, "disablePagination" ],
                disableRipple: [ 2, "disableRipple" ]
            }, {
                selectFocusedIndex: "selectFocusedIndex",
                indexFocused: "indexFocused"
            }), core["ɵqud"](603979776, 3, {
                _items: 1
            }), (_l()(), core["ɵand"](16777216, null, 0, 1, null, View_MatTabGroup_1)), core["ɵdid"](6, 278528, null, 0, common.NgForOf, [ core.ViewContainerRef, core.TemplateRef, core.IterableDiffers ], {
                ngForOf: [ 0, "ngForOf" ]
            }, null), (_l()(), core["ɵeld"](7, 0, [ [ 1, 0 ], [ "tabBodyWrapper", 1 ] ], null, 2, "div", [ [ "class", "mat-tab-body-wrapper" ] ], [ [ 2, "_mat-animation-noopable", null ] ], null, null, null, null)), (_l()(), 
            core["ɵand"](16777216, null, null, 1, null, View_MatTabGroup_5)), core["ɵdid"](9, 278528, null, 0, common.NgForOf, [ core.ViewContainerRef, core.TemplateRef, core.IterableDiffers ], {
                ngForOf: [ 0, "ngForOf" ]
            }, null) ], (function(_ck, _v) {
                var _co = _v.component;
                _ck(_v, 3, 0, _co.selectedIndex || 0, _co.disablePagination, _co.disableRipple), 
                _ck(_v, 6, 0, _co._tabsArray), _ck(_v, 9, 0, _co._tabsArray);
            }), (function(_ck, _v) {
                var _co = _v.component;
                _ck(_v, 2, 0, core["ɵnov"](_v, 3)._showPaginationControls, "rtl" == core["ɵnov"](_v, 3)._getLayoutDirection()), 
                _ck(_v, 7, 0, "NoopAnimations" === _co._animationMode);
            }));
        }
        var RenderType_MatTabBody = core["ɵcrt"]({
            encapsulation: 2,
            styles: [ ".mat-tab-body-content{height:100%;overflow:auto}.mat-tab-group-dynamic-height .mat-tab-body-content{overflow:hidden}\n" ],
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
            return core["ɵvid"](0, [ (_l()(), core["ɵand"](0, null, null, 0)) ], null, null);
        }
        function View_MatTabBody_0(_l) {
            return core["ɵvid"](0, [ core["ɵqud"](671088640, 1, {
                _portalHost: 0
            }), (_l()(), core["ɵeld"](1, 0, [ [ "content", 1 ] ], null, 4, "div", [ [ "class", "mat-tab-body-content" ] ], [ [ 24, "@translateTab", 0 ] ], [ [ null, "@translateTab.start" ], [ null, "@translateTab.done" ] ], (function(_v, en, $event) {
                var ad = !0, _co = _v.component;
                return "@translateTab.start" === en && (ad = !1 !== _co._onTranslateTabStarted($event) && ad), 
                "@translateTab.done" === en && (ad = !1 !== _co._translateTabComplete.next($event) && ad), 
                ad;
            }), null, null)), core["ɵpod"](2, {
                animationDuration: 0
            }), core["ɵpod"](3, {
                value: 0,
                params: 1
            }), (_l()(), core["ɵand"](16777216, null, null, 1, null, View_MatTabBody_1)), core["ɵdid"](5, 212992, null, 0, tabs.f, [ core.ComponentFactoryResolver, core.ViewContainerRef, tabs.e, common.DOCUMENT ], null, null) ], (function(_ck, _v) {
                _ck(_v, 5, 0);
            }), (function(_ck, _v) {
                var _co = _v.component, currVal_0 = _ck(_v, 3, 0, _co._position, _ck(_v, 2, 0, _co.animationDuration));
                _ck(_v, 1, 0, currVal_0);
            }));
        }
        var RenderType_MatTabHeader = core["ɵcrt"]({
            encapsulation: 2,
            styles: [ '.mat-tab-header{display:flex;overflow:hidden;position:relative;flex-shrink:0}.mat-tab-header-pagination{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;position:relative;display:none;justify-content:center;align-items:center;min-width:32px;cursor:pointer;z-index:2;-webkit-tap-highlight-color:transparent;touch-action:none}.mat-tab-header-pagination-controls-enabled .mat-tab-header-pagination{display:flex}.mat-tab-header-pagination-before,.mat-tab-header-rtl .mat-tab-header-pagination-after{padding-left:4px}.mat-tab-header-pagination-before .mat-tab-header-pagination-chevron,.mat-tab-header-rtl .mat-tab-header-pagination-after .mat-tab-header-pagination-chevron{transform:rotate(-135deg)}.mat-tab-header-rtl .mat-tab-header-pagination-before,.mat-tab-header-pagination-after{padding-right:4px}.mat-tab-header-rtl .mat-tab-header-pagination-before .mat-tab-header-pagination-chevron,.mat-tab-header-pagination-after .mat-tab-header-pagination-chevron{transform:rotate(45deg)}.mat-tab-header-pagination-chevron{border-style:solid;border-width:2px 2px 0 0;content:"";height:8px;width:8px}.mat-tab-header-pagination-disabled{box-shadow:none;cursor:default}.mat-tab-list{flex-grow:1;position:relative;transition:transform 500ms cubic-bezier(0.35, 0, 0.25, 1)}.mat-ink-bar{position:absolute;bottom:0;height:2px;transition:500ms cubic-bezier(0.35, 0, 0.25, 1)}._mat-animation-noopable.mat-ink-bar{transition:none;animation:none}.mat-tab-group-inverted-header .mat-ink-bar{bottom:auto;top:0}.cdk-high-contrast-active .mat-ink-bar{outline:solid 2px;height:0}.mat-tab-labels{display:flex}[mat-align-tabs=center] .mat-tab-labels{justify-content:center}[mat-align-tabs=end] .mat-tab-labels{justify-content:flex-end}.mat-tab-label-container{display:flex;flex-grow:1;overflow:hidden;z-index:1}._mat-animation-noopable.mat-tab-list{transition:none;animation:none}.mat-tab-label{height:48px;padding:0 24px;cursor:pointer;box-sizing:border-box;opacity:.6;min-width:160px;text-align:center;display:inline-flex;justify-content:center;align-items:center;white-space:nowrap;position:relative}.mat-tab-label:focus{outline:none}.mat-tab-label:focus:not(.mat-tab-disabled){opacity:1}.cdk-high-contrast-active .mat-tab-label:focus{outline:dotted 2px}.mat-tab-label.mat-tab-disabled{cursor:default}.cdk-high-contrast-active .mat-tab-label.mat-tab-disabled{opacity:.5}.mat-tab-label .mat-tab-label-content{display:inline-flex;justify-content:center;align-items:center;white-space:nowrap}.cdk-high-contrast-active .mat-tab-label{opacity:1}@media(max-width: 599px){.mat-tab-label{min-width:72px}}\n' ],
            data: {}
        });
        function View_MatTabHeader_0(_l) {
            return core["ɵvid"](0, [ core["ɵqud"](402653184, 1, {
                _inkBar: 0
            }), core["ɵqud"](402653184, 2, {
                _tabListContainer: 0
            }), core["ɵqud"](402653184, 3, {
                _tabList: 0
            }), core["ɵqud"](671088640, 4, {
                _nextPaginator: 0
            }), core["ɵqud"](671088640, 5, {
                _previousPaginator: 0
            }), (_l()(), core["ɵeld"](5, 0, [ [ 5, 0 ], [ "previousPaginator", 1 ] ], null, 2, "div", [ [ "aria-hidden", "true" ], [ "class", "mat-tab-header-pagination mat-tab-header-pagination-before mat-elevation-z4 mat-ripple" ], [ "mat-ripple", "" ] ], [ [ 2, "mat-tab-header-pagination-disabled", null ], [ 2, "mat-ripple-unbounded", null ] ], [ [ null, "click" ], [ null, "mousedown" ], [ null, "touchend" ] ], (function(_v, en, $event) {
                var ad = !0, _co = _v.component;
                return "click" === en && (ad = !1 !== _co._handlePaginatorClick("before") && ad), 
                "mousedown" === en && (ad = !1 !== _co._handlePaginatorPress("before") && ad), "touchend" === en && (ad = !1 !== _co._stopInterval() && ad), 
                ad;
            }), null, null)), core["ɵdid"](6, 212992, null, 0, fesm2015_core.t, [ core.ElementRef, core.NgZone, platform.a, [ 2, fesm2015_core.k ], [ 2, animations.a ] ], {
                disabled: [ 0, "disabled" ]
            }, null), (_l()(), core["ɵeld"](7, 0, null, null, 0, "div", [ [ "class", "mat-tab-header-pagination-chevron" ] ], null, null, null, null, null)), (_l()(), 
            core["ɵeld"](8, 0, [ [ 2, 0 ], [ "tabListContainer", 1 ] ], null, 6, "div", [ [ "class", "mat-tab-label-container" ] ], null, [ [ null, "keydown" ] ], (function(_v, en, $event) {
                var ad = !0;
                return "keydown" === en && (ad = !1 !== _v.component._handleKeydown($event) && ad), 
                ad;
            }), null, null)), (_l()(), core["ɵeld"](9, 0, [ [ 3, 0 ], [ "tabList", 1 ] ], null, 5, "div", [ [ "class", "mat-tab-list" ], [ "role", "tablist" ] ], [ [ 2, "_mat-animation-noopable", null ] ], [ [ null, "cdkObserveContent" ] ], (function(_v, en, $event) {
                var ad = !0;
                return "cdkObserveContent" === en && (ad = !1 !== _v.component._onContentChanges() && ad), 
                ad;
            }), null, null)), core["ɵdid"](10, 1196032, null, 0, observers.a, [ observers.b, core.ElementRef, core.NgZone ], null, {
                event: "cdkObserveContent"
            }), (_l()(), core["ɵeld"](11, 0, null, null, 1, "div", [ [ "class", "mat-tab-labels" ] ], null, null, null, null, null)), core["ɵncd"](null, 0), (_l()(), 
            core["ɵeld"](13, 0, null, null, 1, "mat-ink-bar", [ [ "class", "mat-ink-bar" ] ], [ [ 2, "_mat-animation-noopable", null ] ], null, null, null, null)), core["ɵdid"](14, 16384, [ [ 1, 4 ] ], 0, tabs.c, [ core.ElementRef, core.NgZone, tabs.l, [ 2, animations.a ] ], null, null), (_l()(), 
            core["ɵeld"](15, 0, [ [ 4, 0 ], [ "nextPaginator", 1 ] ], null, 2, "div", [ [ "aria-hidden", "true" ], [ "class", "mat-tab-header-pagination mat-tab-header-pagination-after mat-elevation-z4 mat-ripple" ], [ "mat-ripple", "" ] ], [ [ 2, "mat-tab-header-pagination-disabled", null ], [ 2, "mat-ripple-unbounded", null ] ], [ [ null, "mousedown" ], [ null, "click" ], [ null, "touchend" ] ], (function(_v, en, $event) {
                var ad = !0, _co = _v.component;
                return "mousedown" === en && (ad = !1 !== _co._handlePaginatorPress("after") && ad), 
                "click" === en && (ad = !1 !== _co._handlePaginatorClick("after") && ad), "touchend" === en && (ad = !1 !== _co._stopInterval() && ad), 
                ad;
            }), null, null)), core["ɵdid"](16, 212992, null, 0, fesm2015_core.t, [ core.ElementRef, core.NgZone, platform.a, [ 2, fesm2015_core.k ], [ 2, animations.a ] ], {
                disabled: [ 0, "disabled" ]
            }, null), (_l()(), core["ɵeld"](17, 0, null, null, 0, "div", [ [ "class", "mat-tab-header-pagination-chevron" ] ], null, null, null, null, null)) ], (function(_ck, _v) {
                var _co = _v.component;
                _ck(_v, 6, 0, _co._disableScrollBefore || _co.disableRipple), _ck(_v, 16, 0, _co._disableScrollAfter || _co.disableRipple);
            }), (function(_ck, _v) {
                var _co = _v.component;
                _ck(_v, 5, 0, _co._disableScrollBefore, core["ɵnov"](_v, 6).unbounded), _ck(_v, 9, 0, "NoopAnimations" === _co._animationMode), 
                _ck(_v, 13, 0, "NoopAnimations" === core["ɵnov"](_v, 14)._animationMode), _ck(_v, 15, 0, _co._disableScrollAfter, core["ɵnov"](_v, 16).unbounded);
            }));
        }
        var RenderType_MatTab = core["ɵcrt"]({
            encapsulation: 2,
            styles: [],
            data: {}
        });
        function View_MatTab_1(_l) {
            return core["ɵvid"](0, [ core["ɵncd"](null, 0), (_l()(), core["ɵand"](0, null, null, 0)) ], null, null);
        }
        function View_MatTab_0(_l) {
            return core["ɵvid"](0, [ core["ɵqud"](402653184, 1, {
                _implicitContent: 0
            }), (_l()(), core["ɵand"](0, [ [ 1, 2 ] ], null, 0, null, View_MatTab_1)) ], null, null);
        }
        var textinput_component_ngfactory = __webpack_require__("ag86"), component = __webpack_require__("GCPd"), theme = __webpack_require__("7bNg");
        class CreateFromInputComponent {
            constructor(namespace_, create_, history_) {
                this.namespace_ = namespace_, this.create_ = create_, this.history_ = history_, 
                this.inputData = "";
            }
            isCreateDisabled() {
                return !this.inputData || 0 === this.inputData.length || this.create_.isDeployDisabled();
            }
            create() {
                this.create_.createContent(this.inputData);
            }
            cancel() {
                this.history_.goToPreviousState("overview");
            }
            areMultipleNamespacesSelected() {
                return this.namespace_.areMultipleNamespacesSelected();
            }
        }
        var global_namespace = __webpack_require__("cpu9"), params = __webpack_require__("yn8F"), __awaiter = function(thisArg, _arguments, P, generator) {
            return new (P || (P = Promise))((function(resolve, reject) {
                function fulfilled(value) {
                    try {
                        step(generator.next(value));
                    } catch (e) {
                        reject(e);
                    }
                }
                function rejected(value) {
                    try {
                        step(generator.throw(value));
                    } catch (e) {
                        reject(e);
                    }
                }
                function step(result) {
                    var value;
                    result.done ? resolve(result.value) : (value = result.value, value instanceof P ? value : new P((function(resolve) {
                        resolve(value);
                    }))).then(fulfilled, rejected);
                }
                step((generator = generator.apply(thisArg, _arguments || [])).next());
            }));
        };
        const i18n = {
            MSG_DEPLOY_DIALOG_ERROR: "Deploying file has failed",
            MSG_DEPLOY_DIALOG_PARTIAL_COMPLETED: "Deployment has been partly completed",
            MSG_DEPLOY_ANYWAY_DIALOG_TITLE: "Validation error occurred",
            MSG_DEPLOY_ANYWAY_DIALOG_CONTENT: "Would you like to deploy anyway?",
            MSG_DEPLOY_ANYWAY_DIALOG_OK: "Yes",
            MSG_DEPLOY_ANYWAY_DIALOG_CANCEL: "No"
        };
        class service_CreateService {
            constructor(http_, namespace_, csrfToken_, matDialog_, router_, CONFIG) {
                this.http_ = http_, this.namespace_ = namespace_, this.csrfToken_ = csrfToken_, 
                this.matDialog_ = matDialog_, this.router_ = router_, this.CONFIG = CONFIG, this.isDeployInProgress_ = !1;
            }
            createContent(content, validate = !0, name = "") {
                return __awaiter(this, void 0, void 0, (function*() {
                    const spec = {
                        name: name,
                        namespace: this.namespace_.current(),
                        content: content,
                        validate: validate
                    };
                    let response, error;
                    try {
                        const {token: token} = yield this.csrfToken_.getTokenForAction("appdeploymentfromfile").toPromise();
                        this.isDeployInProgress_ = !0, (response = yield this.http_.post("api/v1/appdeploymentfromfile", spec, {
                            headers: {
                                [this.CONFIG.csrfHeaderName]: token
                            }
                        }).toPromise()).error.length > 0 && this.reportError(i18n.MSG_DEPLOY_DIALOG_PARTIAL_COMPLETED, response.error);
                    } catch (err) {
                        error = err;
                    }
                    if (this.isDeployInProgress_ = !1, error) throw this.reportError(i18n.MSG_DEPLOY_DIALOG_ERROR, error.error), 
                    error;
                    return this.router_.navigate([ "overview" ]), response;
                }));
            }
            deploy(spec) {
                return __awaiter(this, void 0, void 0, (function*() {
                    let response, error;
                    try {
                        const {token: token} = yield this.csrfToken_.getTokenForAction("appdeployment").toPromise();
                        this.isDeployInProgress_ = !0, response = yield this.http_.post("api/v1/appdeployment", spec, {
                            headers: {
                                [this.CONFIG.csrfHeaderName]: token
                            }
                        }).toPromise();
                    } catch (err) {
                        error = err;
                    }
                    if (this.isDeployInProgress_ = !1, error) throw this.reportError(i18n.MSG_DEPLOY_DIALOG_ERROR, error.error), 
                    error;
                    return this.router_.navigate([ "overview" ], {
                        queryParams: {
                            [params.a]: spec.namespace
                        }
                    }), response;
                }));
            }
            isDeployDisabled() {
                return this.isDeployInProgress_;
            }
            reportError(title, message) {
                this.matDialog_.open(alert_dialog.a, {
                    data: {
                        title: title,
                        message: message,
                        confirmLabel: "OK"
                    }
                });
            }
        }
        var global_history = __webpack_require__("RYKQ"), RenderType_CreateFromInputComponent = core["ɵcrt"]({
            encapsulation: 0,
            styles: [ [ ".kd-create-from-input-info[_ngcontent-%COMP%]{margin-bottom:24px;padding:0 4px}.kd-create-from-input-info[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%]{font-size:14px}.kd-create-from-input-button[_ngcontent-%COMP%]{margin-left:0}kd-text-input[_ngcontent-%COMP%]  ace-editor{margin-bottom:24px}" ] ],
            data: {}
        });
        function View_CreateFromInputComponent_1(_l) {
            return core["ɵvid"](0, [ (_l()(), core["ɵeld"](0, 0, null, null, 1, "span", [], null, null, null, null, null)), (_l()(), 
            core["ɵted"](-1, null, [ " Enter YAML or JSON content specifying the resources to create to the namespace specified in the file. " ])) ], null, null);
        }
        function View_CreateFromInputComponent_2(_l) {
            return core["ɵvid"](0, [ (_l()(), core["ɵeld"](0, 0, null, null, 1, "span", [], null, null, null, null, null)), (_l()(), 
            core["ɵted"](-1, null, [ " Enter YAML or JSON content specifying the resources to create to the currently selected namespace. " ])) ], null, null);
        }
        function View_CreateFromInputComponent_0(_l) {
            return core["ɵvid"](0, [ (_l()(), core["ɵeld"](0, 0, null, null, 8, "div", [ [ "class", "kd-create-from-input-info" ] ], null, null, null, null, null)), (_l()(), 
            core["ɵand"](16777216, null, null, 1, null, View_CreateFromInputComponent_1)), core["ɵdid"](2, 16384, null, 0, common.NgIf, [ core.ViewContainerRef, core.TemplateRef ], {
                ngIf: [ 0, "ngIf" ]
            }, null), (_l()(), core["ɵand"](16777216, null, null, 1, null, View_CreateFromInputComponent_2)), core["ɵdid"](4, 16384, null, 0, common.NgIf, [ core.ViewContainerRef, core.TemplateRef ], {
                ngIf: [ 0, "ngIf" ]
            }, null), (_l()(), core["ɵeld"](5, 0, null, null, 3, "a", [ [ "href", "https://kubernetes.io/docs/tasks/run-application/run-stateless-application-deployment/" ], [ "target", "_blank" ] ], null, null, null, null, null)), (_l()(), 
            core["ɵted"](-1, null, [ " Learn more " ])), (_l()(), core["ɵeld"](7, 0, null, null, 1, "i", [ [ "class", "material-icons" ] ], null, null, null, null, null)), (_l()(), 
            core["ɵted"](-1, null, [ "open_in_new" ])), (_l()(), core["ɵeld"](9, 0, null, null, 1, "kd-text-input", [], null, [ [ null, "textChange" ] ], (function(_v, en, $event) {
                var ad = !0;
                return "textChange" === en && (ad = !1 !== (_v.component.inputData = $event) && ad), 
                ad;
            }), textinput_component_ngfactory.b, textinput_component_ngfactory.a)), core["ɵdid"](10, 114688, null, 0, component.a, [ theme.a ], {
                text: [ 0, "text" ]
            }, {
                textChange: "textChange"
            }), (_l()(), core["ɵeld"](11, 0, null, null, 2, "button", [ [ "color", "primary" ], [ "mat-raised-button", "" ], [ "type", "button" ] ], [ [ 1, "disabled", 0 ], [ 2, "_mat-animation-noopable", null ] ], [ [ null, "click" ] ], (function(_v, en, $event) {
                var ad = !0;
                return "click" === en && (ad = !1 !== _v.component.create() && ad), ad;
            }), button_index_ngfactory.d, button_index_ngfactory.b)), core["ɵdid"](12, 180224, null, 0, fesm2015_button.b, [ core.ElementRef, a11y.f, [ 2, animations.a ] ], {
                disabled: [ 0, "disabled" ],
                color: [ 1, "color" ]
            }, null), (_l()(), core["ɵted"](-1, 0, [ " Upload\n" ])), (_l()(), core["ɵeld"](14, 0, null, null, 2, "button", [ [ "color", "primary" ], [ "mat-button", "" ], [ "type", "button" ] ], [ [ 1, "disabled", 0 ], [ 2, "_mat-animation-noopable", null ] ], [ [ null, "click" ] ], (function(_v, en, $event) {
                var ad = !0;
                return "click" === en && (ad = !1 !== _v.component.cancel() && ad), ad;
            }), button_index_ngfactory.d, button_index_ngfactory.b)), core["ɵdid"](15, 180224, null, 0, fesm2015_button.b, [ core.ElementRef, a11y.f, [ 2, animations.a ] ], {
                color: [ 0, "color" ]
            }, null), (_l()(), core["ɵted"](-1, 0, [ " Cancel\n" ])) ], (function(_ck, _v) {
                var _co = _v.component;
                _ck(_v, 2, 0, _co.areMultipleNamespacesSelected()), _ck(_v, 4, 0, !_co.areMultipleNamespacesSelected()), 
                _ck(_v, 10, 0, _co.inputData), _ck(_v, 12, 0, _co.isCreateDisabled(), "primary"), 
                _ck(_v, 15, 0, "primary");
            }), (function(_ck, _v) {
                _ck(_v, 11, 0, core["ɵnov"](_v, 12).disabled || null, "NoopAnimations" === core["ɵnov"](_v, 12)._animationMode), 
                _ck(_v, 14, 0, core["ɵnov"](_v, 15).disabled || null, "NoopAnimations" === core["ɵnov"](_v, 15)._animationMode);
            }));
        }
        var uploadfile_component_ngfactory = __webpack_require__("Zmg+"), uploadfile_component = __webpack_require__("PCAo");
        class CreateFromFileComponent {
            constructor(namespace_, create_, history_) {
                this.namespace_ = namespace_, this.create_ = create_, this.history_ = history_;
            }
            isCreateDisabled() {
                return !this.file || 0 === this.file.content.length || this.create_.isDeployDisabled();
            }
            create() {
                this.create_.createContent(this.file.content, !0, this.file.name);
            }
            onFileLoad(file) {
                this.file = file;
            }
            cancel() {
                this.history_.goToPreviousState("overview");
            }
            areMultipleNamespacesSelected() {
                return this.namespace_.areMultipleNamespacesSelected();
            }
        }
        var RenderType_CreateFromFileComponent = core["ɵcrt"]({
            encapsulation: 0,
            styles: [ [ ".kd-create-from-file-info[_ngcontent-%COMP%]{margin-bottom:24px;padding:0 4px}.kd-create-from-file-info[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%]{font-size:14px}.kd-deploy-from-file-button[_ngcontent-%COMP%]{margin-left:0}" ] ],
            data: {}
        });
        function View_CreateFromFileComponent_1(_l) {
            return core["ɵvid"](0, [ (_l()(), core["ɵeld"](0, 0, null, null, 1, "span", [], null, null, null, null, null)), (_l()(), 
            core["ɵted"](-1, null, [ " Select YAML or JSON file specifying the resources to deploy to the namespace specified in the file. " ])) ], null, null);
        }
        function View_CreateFromFileComponent_2(_l) {
            return core["ɵvid"](0, [ (_l()(), core["ɵeld"](0, 0, null, null, 1, "span", [], null, null, null, null, null)), (_l()(), 
            core["ɵted"](-1, null, [ " Select YAML or JSON file specifying the resources to deploy to the currently selected namespace. " ])) ], null, null);
        }
        function View_CreateFromFileComponent_0(_l) {
            return core["ɵvid"](0, [ core["ɵqud"](402653184, 1, {
                ngForm: 0
            }), (_l()(), core["ɵeld"](1, 0, null, null, 8, "div", [ [ "class", "kd-create-from-file-info" ] ], null, null, null, null, null)), (_l()(), 
            core["ɵand"](16777216, null, null, 1, null, View_CreateFromFileComponent_1)), core["ɵdid"](3, 16384, null, 0, common.NgIf, [ core.ViewContainerRef, core.TemplateRef ], {
                ngIf: [ 0, "ngIf" ]
            }, null), (_l()(), core["ɵand"](16777216, null, null, 1, null, View_CreateFromFileComponent_2)), core["ɵdid"](5, 16384, null, 0, common.NgIf, [ core.ViewContainerRef, core.TemplateRef ], {
                ngIf: [ 0, "ngIf" ]
            }, null), (_l()(), core["ɵeld"](6, 0, null, null, 3, "a", [ [ "href", "https://kubernetes.io/docs/tasks/run-application/run-stateless-application-deployment/" ], [ "target", "_blank" ] ], null, null, null, null, null)), (_l()(), 
            core["ɵted"](-1, null, [ " Learn more " ])), (_l()(), core["ɵeld"](8, 0, null, null, 1, "i", [ [ "class", "material-icons" ] ], null, null, null, null, null)), (_l()(), 
            core["ɵted"](-1, null, [ "open_in_new" ])), (_l()(), core["ɵeld"](10, 0, null, null, 12, "form", [ [ "novalidate", "" ] ], [ [ 2, "ng-untouched", null ], [ 2, "ng-touched", null ], [ 2, "ng-pristine", null ], [ 2, "ng-dirty", null ], [ 2, "ng-valid", null ], [ 2, "ng-invalid", null ], [ 2, "ng-pending", null ] ], [ [ null, "ngSubmit" ], [ null, "submit" ], [ null, "reset" ] ], (function(_v, en, $event) {
                var ad = !0, _co = _v.component;
                return "submit" === en && (ad = !1 !== core["ɵnov"](_v, 12).onSubmit($event) && ad), 
                "reset" === en && (ad = !1 !== core["ɵnov"](_v, 12).onReset() && ad), "ngSubmit" === en && (ad = !1 !== _co.create() && ad), 
                ad;
            }), null, null)), core["ɵdid"](11, 16384, null, 0, fesm2015_forms["ɵangular_packages_forms_forms_y"], [], null, null), core["ɵdid"](12, 4210688, [ [ 1, 4 ] ], 0, fesm2015_forms.NgForm, [ [ 8, null ], [ 8, null ] ], null, {
                ngSubmit: "ngSubmit"
            }), core["ɵprd"](2048, null, fesm2015_forms.ControlContainer, null, [ fesm2015_forms.NgForm ]), core["ɵdid"](14, 16384, null, 0, fesm2015_forms.NgControlStatusGroup, [ [ 4, fesm2015_forms.ControlContainer ] ], null, null), (_l()(), 
            core["ɵeld"](15, 0, null, null, 1, "kd-upload-file", [ [ "label", "Choose YAML or JSON file" ] ], null, [ [ null, "onLoad" ] ], (function(_v, en, $event) {
                var ad = !0;
                return "onLoad" === en && (ad = !1 !== _v.component.onFileLoad($event) && ad), ad;
            }), uploadfile_component_ngfactory.b, uploadfile_component_ngfactory.a)), core["ɵdid"](16, 49152, null, 0, uploadfile_component.a, [ dialog.e ], {
                label: [ 0, "label" ]
            }, {
                onLoad: "onLoad"
            }), (_l()(), core["ɵeld"](17, 0, null, null, 2, "button", [ [ "color", "primary" ], [ "mat-raised-button", "" ], [ "type", "submit" ] ], [ [ 1, "disabled", 0 ], [ 2, "_mat-animation-noopable", null ] ], null, null, button_index_ngfactory.d, button_index_ngfactory.b)), core["ɵdid"](18, 180224, null, 0, fesm2015_button.b, [ core.ElementRef, a11y.f, [ 2, animations.a ] ], {
                disabled: [ 0, "disabled" ],
                color: [ 1, "color" ]
            }, null), (_l()(), core["ɵted"](-1, 0, [ " Upload " ])), (_l()(), core["ɵeld"](20, 0, null, null, 2, "button", [ [ "color", "primary" ], [ "mat-button", "" ], [ "type", "button" ] ], [ [ 1, "disabled", 0 ], [ 2, "_mat-animation-noopable", null ] ], [ [ null, "click" ] ], (function(_v, en, $event) {
                var ad = !0;
                return "click" === en && (ad = !1 !== _v.component.cancel() && ad), ad;
            }), button_index_ngfactory.d, button_index_ngfactory.b)), core["ɵdid"](21, 180224, null, 0, fesm2015_button.b, [ core.ElementRef, a11y.f, [ 2, animations.a ] ], {
                color: [ 0, "color" ]
            }, null), (_l()(), core["ɵted"](-1, 0, [ " Cancel " ])) ], (function(_ck, _v) {
                var _co = _v.component;
                _ck(_v, 3, 0, _co.areMultipleNamespacesSelected()), _ck(_v, 5, 0, !_co.areMultipleNamespacesSelected()), 
                _ck(_v, 16, 0, "Choose YAML or JSON file"), _ck(_v, 18, 0, _co.isCreateDisabled(), "primary"), 
                _ck(_v, 21, 0, "primary");
            }), (function(_ck, _v) {
                _ck(_v, 10, 0, core["ɵnov"](_v, 14).ngClassUntouched, core["ɵnov"](_v, 14).ngClassTouched, core["ɵnov"](_v, 14).ngClassPristine, core["ɵnov"](_v, 14).ngClassDirty, core["ɵnov"](_v, 14).ngClassValid, core["ɵnov"](_v, 14).ngClassInvalid, core["ɵnov"](_v, 14).ngClassPending), 
                _ck(_v, 17, 0, core["ɵnov"](_v, 18).disabled || null, "NoopAnimations" === core["ɵnov"](_v, 18)._animationMode), 
                _ck(_v, 20, 0, core["ɵnov"](_v, 21).disabled || null, "NoopAnimations" === core["ɵnov"](_v, 21)._animationMode);
            }));
        }
        var core_index_ngfactory = __webpack_require__("CeGm"), Observable = __webpack_require__("zE9r"), debounceTime = __webpack_require__("Kj3r"), map = __webpack_require__("lJxs");
        const uniqueNameValidationKey = "uniqueName";
        class UniqueNameValidator {
            constructor(http) {
                this.http = http;
            }
            validate(control) {
                return validateUniqueName(this.http, this.namespace)(control);
            }
        }
        function validateUniqueName(http, namespace) {
            return control => control.value ? http.post("api/v1/appdeployment/validate/name", {
                name: control.value,
                namespace: namespace
            }).pipe(Object(debounceTime.a)(500), Object(map.a)(res => res.valid ? null : {
                [uniqueNameValidationKey]: control.value
            })) : Observable.a.of(null);
        }
        var progress_bar_index_ngfactory = __webpack_require__("0mH+"), progress_bar = __webpack_require__("BTe0"), extended = __webpack_require__("ura0");
        const validimagereference_validator_uniqueNameValidationKey = "validImageReference";
        class validimagereference_validator_ValidImageReferenceValidator {
            constructor(http) {
                this.http = http;
            }
            validate(control) {
                return control.value ? this.http.post("api/v1/appdeployment/validate/imagereference", {
                    reference: control.value
                }).pipe(Object(debounceTime.a)(500), Object(map.a)(res => res.valid ? null : {
                    [validimagereference_validator_uniqueNameValidationKey]: res.reason
                })) : Observable.a.of(null);
            }
        }
        class WarnThresholdValidator {
            constructor() {}
            validate(control) {
                return this.shouldSetWarning(control.value) ? (this.hasWarning = !0, {
                    warnThreshold: {
                        value: "333"
                    }
                }) : this.shouldRemoveWarning(control.value) ? (this.hasWarning = !1, null) : null;
            }
            shouldSetWarning(value) {
                return value > this.kdWarnThreshold;
            }
            shouldRemoveWarning(value) {
                return !this.hasWarning && !this.shouldSetWarning(value);
            }
        }
        var icon_index_ngfactory = __webpack_require__("XE/z"), icon = __webpack_require__("Tj54"), select_index_ngfactory = __webpack_require__("Y1Mv"), fesm2015_select = __webpack_require__("ZTz/");
        const validProtocolValidationKey = "validProtocol";
        class ProtocolValidator {
            constructor(http) {
                this.http = http;
            }
            validate(control) {
                return validateProtocol(this.http, this.isExternal)(control);
            }
        }
        function validateProtocol(http, isExternal) {
            return control => control.value ? http.post("api/v1/appdeployment/validate/protocol", {
                protocol: control.value,
                isExternal: isExternal
            }).first().pipe(Object(debounceTime.a)(500), Object(map.a)(res => res.valid ? null : {
                [validProtocolValidationKey]: !0
            })) : Observable.a.of(null);
        }
        var startWith = __webpack_require__("JX91"), first = __webpack_require__("SxV6");
        class FormValidators {
            static namePattern(control) {
                return control.value ? new RegExp("^[a-z]([-a-z0-9]*[a-z0-9])?$").test(control.value) ? null : {
                    namePattern: {
                        value: control.value
                    }
                } : null;
            }
            static isInteger(control) {
                const value = control.value;
                return value ? Number(value) === value && value % 1 == 0 || !value ? null : {
                    kdValidInteger: {
                        value: control.value
                    }
                } : null;
            }
            static labelKeyNameLength(control) {
                const value = control.value, slashPosition = value.indexOf("/");
                return (slashPosition > -1 ? value.substring(slashPosition + 1) : value).length <= 63 ? null : {
                    kdValidLabelKeyPrefixLength: {
                        value: !0
                    }
                };
            }
            static labelKeyPrefixLength(control) {
                const value = control.value, slashPosition = value.indexOf("/");
                return (slashPosition > -1 ? value.substring(0, slashPosition) : "").length <= 253 ? null : {
                    kdValidLabelKeyPrefixLength: {
                        value: !0
                    }
                };
            }
            static labelKeyNamePattern(control) {
                const value = control.value, slashPosition = value.indexOf("/"), labelKeyName = slashPosition > -1 ? value.substring(slashPosition + 1) : value;
                return /^([A-Za-z0-9][-A-Za-z0-9_.]*)?[A-Za-z0-9]$/.test(labelKeyName) || "" === value ? null : {
                    kdValidLabelKeyNamePattern: {
                        value: !0
                    }
                };
            }
            static labelKeyPrefixPattern(control) {
                const value = control.value, slashPosition = value.indexOf("/");
                return slashPosition > -1 && !/^[a-z0-9]([-a-z0-9]*[a-z0-9])?(\.[a-z0-9]([-a-z0-9]*[a-z0-9])?)*$/.test(value.substring(0, slashPosition)) ? {
                    kdValidLabelKeyPrefixPattern: {
                        value: !0
                    }
                } : null;
            }
            static labelValuePattern(control) {
                return /^(([A-Za-z0-9][-A-Za-z0-9_.]*)?[A-Za-z0-9])?$/.test(control.value) ? null : {
                    kdValidLabelValuePattern: {
                        value: !0
                    }
                };
            }
        }
        const NO_SERVICE = {
            label: "None",
            external: !1
        }, INT_SERVICE = {
            label: "Internal",
            external: !1
        }, EXT_SERVICE = {
            label: "External",
            external: !0
        };
        class component_PortMappingsComponent {
            constructor(fb_, http_) {
                this.fb_ = fb_, this.http_ = http_, this.changeExternal = new core.EventEmitter, 
                this.propagateChange = _ => {};
            }
            ngOnInit() {
                this.serviceTypes = [ NO_SERVICE, INT_SERVICE, EXT_SERVICE ], this.portMappingForm = this.fb_.group({
                    serviceType: NO_SERVICE,
                    portMappings: this.fb_.array([])
                }), this.serviceType.valueChanges.subscribe(() => {
                    this.changeServiceType();
                }), this.portMappingForm.valueChanges.subscribe(v => {
                    this.propagateChange(v);
                });
            }
            validate(_) {
                return this.portMappingForm.statusChanges.pipe(Object(startWith.a)(this.portMappingForm.status), Object(first.a)(() => !this.portMappingForm.pending), Object(map.a)(() => this.portMappingForm.invalid ? {
                    error: !0
                } : null));
            }
            changeServiceType() {
                if (this.serviceType.value === NO_SERVICE) {
                    const length = this.portMappings.length;
                    for (let i = 0; i < length; i++) this.portMappings.removeAt(0);
                } else 0 === this.portMappings.length && this.portMappings.push(this.newEmptyPortMapping(this.protocols[0]));
                this.isExternal = this.serviceType.value.external, this.changeExternal.emit(this.isExternal);
                for (let i = 0; i < this.portMappings.length; i++) {
                    const ele = this.portMappings.at(i).get("protocol");
                    ele.clearAsyncValidators(), ele.setAsyncValidators(validateProtocol(this.http_, this.isExternal)), 
                    ele.updateValueAndValidity();
                }
            }
            get portMappings() {
                return this.portMappingForm.get("portMappings");
            }
            get serviceType() {
                return this.portMappingForm.get("serviceType");
            }
            newEmptyPortMapping(defaultProtocol) {
                return this.fb_.group({
                    port: [ "", fesm2015_forms.Validators.compose([ FormValidators.isInteger, fesm2015_forms.Validators.min(1), fesm2015_forms.Validators.max(65535) ]) ],
                    targetPort: [ "", fesm2015_forms.Validators.compose([ FormValidators.isInteger, fesm2015_forms.Validators.min(1), fesm2015_forms.Validators.max(65535) ]) ],
                    protocol: [ defaultProtocol ]
                });
            }
            checkPortMapping(portMappingIndex) {
                this.addProtocolIfNeeed(), this.validatePortMapping(portMappingIndex), this.portMappings.updateValueAndValidity();
            }
            addProtocolIfNeeed() {
                this.isPortMappingFilled(this.portMappings.controls[this.portMappings.length - 1]) && this.portMappings.push(this.newEmptyPortMapping(this.protocols[0]));
            }
            isPortMappingFilled(portMapping) {
                return !!portMapping.get("port").value && !!portMapping.get("targetPort").value;
            }
            validatePortMapping(portIndex) {
                if (0 === portIndex) return;
                const portMapping = this.portMappings.at(portIndex), portElem = portMapping.get("port"), targetPortElem = portMapping.get("targetPort"), port = portElem.value, targetPort = targetPortElem.value, filledOrEmpty = this.isPortMappingFilledOrEmpty(port, targetPort), isValidTargetPort = filledOrEmpty || !!targetPort;
                portElem.setErrors(filledOrEmpty || port ? null : {
                    required: !0
                }), targetPortElem.setErrors(isValidTargetPort ? null : {
                    required: !0
                }), this.portMappingForm.updateValueAndValidity();
            }
            isPortMappingFilledOrEmpty(port, targetPort) {
                return !port == !targetPort;
            }
            isRemovable(index) {
                return index !== this.portMappings.length - 1;
            }
            remove(index) {
                this.portMappings.removeAt(index);
            }
            isFirst(index) {
                return 0 === index;
            }
            writeValue() {}
            registerOnChange(fn) {
                this.propagateChange = fn;
            }
            registerOnTouched() {}
        }
        var RenderType_PortMappingsComponent = core["ɵcrt"]({
            encapsulation: 0,
            styles: [ [ ".kd-port-form-field[_ngcontent-%COMP%]{margin:0 0 18px}" ] ],
            data: {}
        });
        function View_PortMappingsComponent_1(_l) {
            return core["ɵvid"](0, [ (_l()(), core["ɵeld"](0, 0, null, null, 2, "mat-option", [ [ "class", "mat-option" ], [ "role", "option" ] ], [ [ 1, "tabindex", 0 ], [ 2, "mat-selected", null ], [ 2, "mat-option-multiple", null ], [ 2, "mat-active", null ], [ 8, "id", 0 ], [ 1, "aria-selected", 0 ], [ 1, "aria-disabled", 0 ], [ 2, "mat-option-disabled", null ] ], [ [ null, "click" ], [ null, "keydown" ] ], (function(_v, en, $event) {
                var ad = !0;
                return "click" === en && (ad = !1 !== core["ɵnov"](_v, 1)._selectViaInteraction() && ad), 
                "keydown" === en && (ad = !1 !== core["ɵnov"](_v, 1)._handleKeydown($event) && ad), 
                ad;
            }), core_index_ngfactory.d, core_index_ngfactory.b)), core["ɵdid"](1, 8568832, [ [ 10, 4 ] ], 0, fesm2015_core.p, [ core.ElementRef, core.ChangeDetectorRef, [ 2, fesm2015_core.j ], [ 2, fesm2015_core.o ] ], {
                value: [ 0, "value" ]
            }, null), (_l()(), core["ɵted"](2, 0, [ " ", " " ])) ], (function(_ck, _v) {
                _ck(_v, 1, 0, _v.context.$implicit);
            }), (function(_ck, _v) {
                _ck(_v, 0, 0, core["ɵnov"](_v, 1)._getTabIndex(), core["ɵnov"](_v, 1).selected, core["ɵnov"](_v, 1).multiple, core["ɵnov"](_v, 1).active, core["ɵnov"](_v, 1).id, core["ɵnov"](_v, 1)._getAriaSelected(), core["ɵnov"](_v, 1).disabled.toString(), core["ɵnov"](_v, 1).disabled), 
                _ck(_v, 2, 0, _v.context.$implicit.label);
            }));
        }
        function View_PortMappingsComponent_3(_l) {
            return core["ɵvid"](0, [ (_l()(), core["ɵeld"](0, 0, null, null, 2, "mat-error", [ [ "class", "mat-error" ], [ "role", "alert" ] ], [ [ 1, "id", 0 ] ], null, null, null, null)), core["ɵdid"](1, 16384, [ [ 18, 4 ] ], 0, form_field.b, [], null, null), (_l()(), 
            core["ɵted"](-1, null, [ " Port must be an integer. " ])) ], null, (function(_ck, _v) {
                _ck(_v, 0, 0, core["ɵnov"](_v, 1).id);
            }));
        }
        function View_PortMappingsComponent_4(_l) {
            return core["ɵvid"](0, [ (_l()(), core["ɵeld"](0, 0, null, null, 2, "mat-error", [ [ "class", "mat-error" ], [ "role", "alert" ] ], [ [ 1, "id", 0 ] ], null, null, null, null)), core["ɵdid"](1, 16384, [ [ 18, 4 ] ], 0, form_field.b, [], null, null), (_l()(), 
            core["ɵted"](-1, null, [ " Port cannot be empty. " ])) ], null, (function(_ck, _v) {
                _ck(_v, 0, 0, core["ɵnov"](_v, 1).id);
            }));
        }
        function View_PortMappingsComponent_5(_l) {
            return core["ɵvid"](0, [ (_l()(), core["ɵeld"](0, 0, null, null, 2, "mat-error", [ [ "class", "mat-error" ], [ "role", "alert" ] ], [ [ 1, "id", 0 ] ], null, null, null, null)), core["ɵdid"](1, 16384, [ [ 18, 4 ] ], 0, form_field.b, [], null, null), (_l()(), 
            core["ɵted"](-1, null, [ " Port must be greater than 0. " ])) ], null, (function(_ck, _v) {
                _ck(_v, 0, 0, core["ɵnov"](_v, 1).id);
            }));
        }
        function View_PortMappingsComponent_6(_l) {
            return core["ɵvid"](0, [ (_l()(), core["ɵeld"](0, 0, null, null, 2, "mat-error", [ [ "class", "mat-error" ], [ "role", "alert" ] ], [ [ 1, "id", 0 ] ], null, null, null, null)), core["ɵdid"](1, 16384, [ [ 18, 4 ] ], 0, form_field.b, [], null, null), (_l()(), 
            core["ɵted"](-1, null, [ " Port must be less than 65536. " ])) ], null, (function(_ck, _v) {
                _ck(_v, 0, 0, core["ɵnov"](_v, 1).id);
            }));
        }
        function View_PortMappingsComponent_7(_l) {
            return core["ɵvid"](0, [ (_l()(), core["ɵeld"](0, 0, null, null, 2, "mat-error", [ [ "class", "mat-error" ], [ "role", "alert" ] ], [ [ 1, "id", 0 ] ], null, null, null, null)), core["ɵdid"](1, 16384, [ [ 27, 4 ] ], 0, form_field.b, [], null, null), (_l()(), 
            core["ɵted"](-1, null, [ " Target port must be an integer. " ])) ], null, (function(_ck, _v) {
                _ck(_v, 0, 0, core["ɵnov"](_v, 1).id);
            }));
        }
        function View_PortMappingsComponent_8(_l) {
            return core["ɵvid"](0, [ (_l()(), core["ɵeld"](0, 0, null, null, 2, "mat-error", [ [ "class", "mat-error" ], [ "role", "alert" ] ], [ [ 1, "id", 0 ] ], null, null, null, null)), core["ɵdid"](1, 16384, [ [ 27, 4 ] ], 0, form_field.b, [], null, null), (_l()(), 
            core["ɵted"](-1, null, [ " Target port cannot be empty. " ])) ], null, (function(_ck, _v) {
                _ck(_v, 0, 0, core["ɵnov"](_v, 1).id);
            }));
        }
        function View_PortMappingsComponent_9(_l) {
            return core["ɵvid"](0, [ (_l()(), core["ɵeld"](0, 0, null, null, 2, "mat-error", [ [ "class", "mat-error" ], [ "role", "alert" ] ], [ [ 1, "id", 0 ] ], null, null, null, null)), core["ɵdid"](1, 16384, [ [ 27, 4 ] ], 0, form_field.b, [], null, null), (_l()(), 
            core["ɵted"](-1, null, [ " Target port must be greater than 0. " ])) ], null, (function(_ck, _v) {
                _ck(_v, 0, 0, core["ɵnov"](_v, 1).id);
            }));
        }
        function View_PortMappingsComponent_10(_l) {
            return core["ɵvid"](0, [ (_l()(), core["ɵeld"](0, 0, null, null, 2, "mat-error", [ [ "class", "mat-error" ], [ "role", "alert" ] ], [ [ 1, "id", 0 ] ], null, null, null, null)), core["ɵdid"](1, 16384, [ [ 27, 4 ] ], 0, form_field.b, [], null, null), (_l()(), 
            core["ɵted"](-1, null, [ " Target port must be less than 65536. " ])) ], null, (function(_ck, _v) {
                _ck(_v, 0, 0, core["ɵnov"](_v, 1).id);
            }));
        }
        function View_PortMappingsComponent_11(_l) {
            return core["ɵvid"](0, [ (_l()(), core["ɵeld"](0, 0, null, null, 2, "mat-option", [ [ "class", "mat-option" ], [ "role", "option" ] ], [ [ 1, "tabindex", 0 ], [ 2, "mat-selected", null ], [ 2, "mat-option-multiple", null ], [ 2, "mat-active", null ], [ 8, "id", 0 ], [ 1, "aria-selected", 0 ], [ 1, "aria-disabled", 0 ], [ 2, "mat-option-disabled", null ] ], [ [ null, "click" ], [ null, "keydown" ] ], (function(_v, en, $event) {
                var ad = !0;
                return "click" === en && (ad = !1 !== core["ɵnov"](_v, 1)._selectViaInteraction() && ad), 
                "keydown" === en && (ad = !1 !== core["ɵnov"](_v, 1)._handleKeydown($event) && ad), 
                ad;
            }), core_index_ngfactory.d, core_index_ngfactory.b)), core["ɵdid"](1, 8568832, [ [ 40, 4 ] ], 0, fesm2015_core.p, [ core.ElementRef, core.ChangeDetectorRef, [ 2, fesm2015_core.j ], [ 2, fesm2015_core.o ] ], {
                value: [ 0, "value" ]
            }, null), (_l()(), core["ɵted"](2, 0, [ "", "" ])) ], (function(_ck, _v) {
                _ck(_v, 1, 0, _v.context.$implicit);
            }), (function(_ck, _v) {
                _ck(_v, 0, 0, core["ɵnov"](_v, 1)._getTabIndex(), core["ɵnov"](_v, 1).selected, core["ɵnov"](_v, 1).multiple, core["ɵnov"](_v, 1).active, core["ɵnov"](_v, 1).id, core["ɵnov"](_v, 1)._getAriaSelected(), core["ɵnov"](_v, 1).disabled.toString(), core["ɵnov"](_v, 1).disabled), 
                _ck(_v, 2, 0, _v.context.$implicit);
            }));
        }
        function View_PortMappingsComponent_12(_l) {
            return core["ɵvid"](0, [ (_l()(), core["ɵeld"](0, 0, null, null, 2, "mat-error", [ [ "class", "mat-error" ], [ "role", "alert" ] ], [ [ 1, "id", 0 ] ], null, null, null, null)), core["ɵdid"](1, 16384, [ [ 36, 4 ] ], 0, form_field.b, [], null, null), (_l()(), 
            core["ɵted"](-1, null, [ " Protocol is required. " ])) ], null, (function(_ck, _v) {
                _ck(_v, 0, 0, core["ɵnov"](_v, 1).id);
            }));
        }
        function View_PortMappingsComponent_13(_l) {
            return core["ɵvid"](0, [ (_l()(), core["ɵeld"](0, 0, null, null, 2, "mat-error", [ [ "class", "mat-error" ], [ "role", "alert" ] ], [ [ 1, "id", 0 ] ], null, null, null, null)), core["ɵdid"](1, 16384, [ [ 36, 4 ] ], 0, form_field.b, [], null, null), (_l()(), 
            core["ɵted"](-1, null, [ " Invalid protocol. " ])) ], null, (function(_ck, _v) {
                _ck(_v, 0, 0, core["ɵnov"](_v, 1).id);
            }));
        }
        function View_PortMappingsComponent_14(_l) {
            return core["ɵvid"](0, [ (_l()(), core["ɵeld"](0, 0, null, null, 4, "button", [ [ "mat-icon-button", "" ] ], [ [ 1, "disabled", 0 ], [ 2, "_mat-animation-noopable", null ] ], [ [ null, "click" ] ], (function(_v, en, $event) {
                var ad = !0;
                return "click" === en && (ad = !1 !== _v.component.remove(_v.parent.context.index) && ad), 
                ad;
            }), button_index_ngfactory.d, button_index_ngfactory.b)), core["ɵdid"](1, 180224, null, 0, fesm2015_button.b, [ core.ElementRef, a11y.f, [ 2, animations.a ] ], null, null), (_l()(), 
            core["ɵeld"](2, 0, null, 0, 2, "mat-icon", [ [ "class", "mat-icon notranslate" ], [ "role", "img" ] ], [ [ 2, "mat-icon-inline", null ], [ 2, "mat-icon-no-color", null ] ], null, null, icon_index_ngfactory.b, icon_index_ngfactory.a)), core["ɵdid"](3, 9158656, null, 0, icon.b, [ core.ElementRef, icon.d, [ 8, null ], [ 2, icon.a ], [ 2, core.ErrorHandler ] ], null, null), (_l()(), 
            core["ɵted"](-1, 0, [ "delete" ])) ], (function(_ck, _v) {
                _ck(_v, 3, 0);
            }), (function(_ck, _v) {
                _ck(_v, 0, 0, core["ɵnov"](_v, 1).disabled || null, "NoopAnimations" === core["ɵnov"](_v, 1)._animationMode), 
                _ck(_v, 2, 0, core["ɵnov"](_v, 3).inline, "primary" !== core["ɵnov"](_v, 3).color && "accent" !== core["ɵnov"](_v, 3).color && "warn" !== core["ɵnov"](_v, 3).color);
            }));
        }
        function View_PortMappingsComponent_2(_l) {
            return core["ɵvid"](0, [ (_l()(), core["ɵeld"](0, 0, null, null, 113, "div", [ [ "fxLayout", "row" ] ], [ [ 2, "ng-untouched", null ], [ 2, "ng-touched", null ], [ 2, "ng-pristine", null ], [ 2, "ng-dirty", null ], [ 2, "ng-valid", null ], [ 2, "ng-invalid", null ], [ 2, "ng-pending", null ] ], null, null, null, null)), core["ɵdid"](1, 212992, null, 0, fesm2015_forms.FormGroupName, [ [ 3, fesm2015_forms.ControlContainer ], [ 8, null ], [ 8, null ] ], {
                name: [ 0, "name" ]
            }, null), core["ɵprd"](2048, null, fesm2015_forms.ControlContainer, null, [ fesm2015_forms.FormGroupName ]), core["ɵdid"](3, 16384, null, 0, fesm2015_forms.NgControlStatusGroup, [ [ 4, fesm2015_forms.ControlContainer ] ], null, null), core["ɵdid"](4, 671744, null, 0, flex.d, [ core.ElementRef, esm2015_core.i, [ 2, flex.k ], esm2015_core.f ], {
                fxLayout: [ 0, "fxLayout" ]
            }, null), (_l()(), core["ɵeld"](5, 0, null, null, 30, "mat-form-field", [ [ "class", "kd-deploy-input-row kd-port-form-field mat-form-field" ], [ "fxFlex", "30" ], [ "md-no-float", "" ] ], [ [ 2, "mat-form-field-appearance-standard", null ], [ 2, "mat-form-field-appearance-fill", null ], [ 2, "mat-form-field-appearance-outline", null ], [ 2, "mat-form-field-appearance-legacy", null ], [ 2, "mat-form-field-invalid", null ], [ 2, "mat-form-field-can-float", null ], [ 2, "mat-form-field-should-float", null ], [ 2, "mat-form-field-has-label", null ], [ 2, "mat-form-field-hide-placeholder", null ], [ 2, "mat-form-field-disabled", null ], [ 2, "mat-form-field-autofilled", null ], [ 2, "mat-focused", null ], [ 2, "mat-accent", null ], [ 2, "mat-warn", null ], [ 2, "ng-untouched", null ], [ 2, "ng-touched", null ], [ 2, "ng-pristine", null ], [ 2, "ng-dirty", null ], [ 2, "ng-valid", null ], [ 2, "ng-invalid", null ], [ 2, "ng-pending", null ], [ 2, "_mat-animation-noopable", null ] ], null, null, form_field_index_ngfactory.b, form_field_index_ngfactory.a)), core["ɵdid"](6, 7520256, null, 9, form_field.c, [ core.ElementRef, core.ChangeDetectorRef, [ 2, fesm2015_core.h ], [ 2, bidi.b ], [ 2, form_field.a ], platform.a, core.NgZone, [ 2, animations.a ] ], null, null), core["ɵqud"](603979776, 13, {
                _controlNonStatic: 0
            }), core["ɵqud"](335544320, 14, {
                _controlStatic: 0
            }), core["ɵqud"](603979776, 15, {
                _labelChildNonStatic: 0
            }), core["ɵqud"](335544320, 16, {
                _labelChildStatic: 0
            }), core["ɵqud"](603979776, 17, {
                _placeholderChild: 0
            }), core["ɵqud"](603979776, 18, {
                _errorChildren: 1
            }), core["ɵqud"](603979776, 19, {
                _hintChildren: 1
            }), core["ɵqud"](603979776, 20, {
                _prefixChildren: 1
            }), core["ɵqud"](603979776, 21, {
                _suffixChildren: 1
            }), core["ɵdid"](16, 671744, null, 0, flex.b, [ core.ElementRef, esm2015_core.i, esm2015_core.e, flex.i, esm2015_core.f ], {
                fxFlex: [ 0, "fxFlex" ]
            }, null), (_l()(), core["ɵeld"](17, 0, null, 1, 10, "input", [ [ "class", "mat-input-element mat-form-field-autofill-control" ], [ "formControlName", "port" ], [ "matInput", "" ], [ "name", "port" ], [ "placeholder", "Port" ], [ "type", "number" ] ], [ [ 1, "required", 0 ], [ 2, "ng-untouched", null ], [ 2, "ng-touched", null ], [ 2, "ng-pristine", null ], [ 2, "ng-dirty", null ], [ 2, "ng-valid", null ], [ 2, "ng-invalid", null ], [ 2, "ng-pending", null ], [ 2, "mat-input-server", null ], [ 1, "id", 0 ], [ 1, "placeholder", 0 ], [ 8, "disabled", 0 ], [ 8, "required", 0 ], [ 1, "readonly", 0 ], [ 1, "aria-describedby", 0 ], [ 1, "aria-invalid", 0 ], [ 1, "aria-required", 0 ] ], [ [ null, "change" ], [ null, "input" ], [ null, "blur" ], [ null, "compositionstart" ], [ null, "compositionend" ], [ null, "focus" ] ], (function(_v, en, $event) {
                var ad = !0, _co = _v.component;
                return "input" === en && (ad = !1 !== core["ɵnov"](_v, 18)._handleInput($event.target.value) && ad), 
                "blur" === en && (ad = !1 !== core["ɵnov"](_v, 18).onTouched() && ad), "compositionstart" === en && (ad = !1 !== core["ɵnov"](_v, 18)._compositionStart() && ad), 
                "compositionend" === en && (ad = !1 !== core["ɵnov"](_v, 18)._compositionEnd($event.target.value) && ad), 
                "change" === en && (ad = !1 !== core["ɵnov"](_v, 19).onChange($event.target.value) && ad), 
                "input" === en && (ad = !1 !== core["ɵnov"](_v, 19).onChange($event.target.value) && ad), 
                "blur" === en && (ad = !1 !== core["ɵnov"](_v, 19).onTouched() && ad), "blur" === en && (ad = !1 !== core["ɵnov"](_v, 26)._focusChanged(!1) && ad), 
                "focus" === en && (ad = !1 !== core["ɵnov"](_v, 26)._focusChanged(!0) && ad), "input" === en && (ad = !1 !== core["ɵnov"](_v, 26)._onInput() && ad), 
                "change" === en && (ad = !1 !== _co.checkPortMapping(_v.context.index) && ad), ad;
            }), null, null)), core["ɵdid"](18, 16384, null, 0, fesm2015_forms.DefaultValueAccessor, [ core.Renderer2, core.ElementRef, [ 2, fesm2015_forms.COMPOSITION_BUFFER_MODE ] ], null, null), core["ɵdid"](19, 16384, null, 0, fesm2015_forms.NumberValueAccessor, [ core.Renderer2, core.ElementRef ], null, null), core["ɵdid"](20, 16384, null, 0, fesm2015_forms.RequiredValidator, [], {
                required: [ 0, "required" ]
            }, null), core["ɵprd"](1024, null, fesm2015_forms.NG_VALIDATORS, (function(p0_0) {
                return [ p0_0 ];
            }), [ fesm2015_forms.RequiredValidator ]), core["ɵprd"](1024, null, fesm2015_forms.NG_VALUE_ACCESSOR, (function(p0_0, p1_0) {
                return [ p0_0, p1_0 ];
            }), [ fesm2015_forms.DefaultValueAccessor, fesm2015_forms.NumberValueAccessor ]), core["ɵdid"](23, 671744, null, 0, fesm2015_forms.FormControlName, [ [ 3, fesm2015_forms.ControlContainer ], [ 6, fesm2015_forms.NG_VALIDATORS ], [ 8, null ], [ 6, fesm2015_forms.NG_VALUE_ACCESSOR ], [ 2, fesm2015_forms["ɵangular_packages_forms_forms_p"] ] ], {
                name: [ 0, "name" ]
            }, null), core["ɵprd"](2048, null, fesm2015_forms.NgControl, null, [ fesm2015_forms.FormControlName ]), core["ɵdid"](25, 16384, null, 0, fesm2015_forms.NgControlStatus, [ [ 4, fesm2015_forms.NgControl ] ], null, null), core["ɵdid"](26, 999424, null, 0, input.a, [ core.ElementRef, platform.a, [ 6, fesm2015_forms.NgControl ], [ 2, fesm2015_forms.NgForm ], [ 2, fesm2015_forms.FormGroupDirective ], fesm2015_core.d, [ 8, null ], text_field.a, core.NgZone ], {
                placeholder: [ 0, "placeholder" ],
                required: [ 1, "required" ],
                type: [ 2, "type" ]
            }, null), core["ɵprd"](2048, [ [ 13, 4 ], [ 14, 4 ] ], form_field.d, null, [ input.a ]), (_l()(), 
            core["ɵand"](16777216, null, 5, 1, null, View_PortMappingsComponent_3)), core["ɵdid"](29, 16384, null, 0, common.NgIf, [ core.ViewContainerRef, core.TemplateRef ], {
                ngIf: [ 0, "ngIf" ]
            }, null), (_l()(), core["ɵand"](16777216, null, 5, 1, null, View_PortMappingsComponent_4)), core["ɵdid"](31, 16384, null, 0, common.NgIf, [ core.ViewContainerRef, core.TemplateRef ], {
                ngIf: [ 0, "ngIf" ]
            }, null), (_l()(), core["ɵand"](16777216, null, 5, 1, null, View_PortMappingsComponent_5)), core["ɵdid"](33, 16384, null, 0, common.NgIf, [ core.ViewContainerRef, core.TemplateRef ], {
                ngIf: [ 0, "ngIf" ]
            }, null), (_l()(), core["ɵand"](16777216, null, 5, 1, null, View_PortMappingsComponent_6)), core["ɵdid"](35, 16384, null, 0, common.NgIf, [ core.ViewContainerRef, core.TemplateRef ], {
                ngIf: [ 0, "ngIf" ]
            }, null), (_l()(), core["ɵeld"](36, 0, null, null, 1, "p", [ [ "fxFlex", "5" ] ], null, null, null, null, null)), core["ɵdid"](37, 671744, null, 0, flex.b, [ core.ElementRef, esm2015_core.i, esm2015_core.e, flex.i, esm2015_core.f ], {
                fxFlex: [ 0, "fxFlex" ]
            }, null), (_l()(), core["ɵeld"](38, 0, null, null, 30, "mat-form-field", [ [ "class", "kd-deploy-input-row kd-port-form-field mat-form-field" ], [ "fxFlex", "30" ], [ "md-no-float", "" ] ], [ [ 2, "mat-form-field-appearance-standard", null ], [ 2, "mat-form-field-appearance-fill", null ], [ 2, "mat-form-field-appearance-outline", null ], [ 2, "mat-form-field-appearance-legacy", null ], [ 2, "mat-form-field-invalid", null ], [ 2, "mat-form-field-can-float", null ], [ 2, "mat-form-field-should-float", null ], [ 2, "mat-form-field-has-label", null ], [ 2, "mat-form-field-hide-placeholder", null ], [ 2, "mat-form-field-disabled", null ], [ 2, "mat-form-field-autofilled", null ], [ 2, "mat-focused", null ], [ 2, "mat-accent", null ], [ 2, "mat-warn", null ], [ 2, "ng-untouched", null ], [ 2, "ng-touched", null ], [ 2, "ng-pristine", null ], [ 2, "ng-dirty", null ], [ 2, "ng-valid", null ], [ 2, "ng-invalid", null ], [ 2, "ng-pending", null ], [ 2, "_mat-animation-noopable", null ] ], null, null, form_field_index_ngfactory.b, form_field_index_ngfactory.a)), core["ɵdid"](39, 7520256, null, 9, form_field.c, [ core.ElementRef, core.ChangeDetectorRef, [ 2, fesm2015_core.h ], [ 2, bidi.b ], [ 2, form_field.a ], platform.a, core.NgZone, [ 2, animations.a ] ], null, null), core["ɵqud"](603979776, 22, {
                _controlNonStatic: 0
            }), core["ɵqud"](335544320, 23, {
                _controlStatic: 0
            }), core["ɵqud"](603979776, 24, {
                _labelChildNonStatic: 0
            }), core["ɵqud"](335544320, 25, {
                _labelChildStatic: 0
            }), core["ɵqud"](603979776, 26, {
                _placeholderChild: 0
            }), core["ɵqud"](603979776, 27, {
                _errorChildren: 1
            }), core["ɵqud"](603979776, 28, {
                _hintChildren: 1
            }), core["ɵqud"](603979776, 29, {
                _prefixChildren: 1
            }), core["ɵqud"](603979776, 30, {
                _suffixChildren: 1
            }), core["ɵdid"](49, 671744, null, 0, flex.b, [ core.ElementRef, esm2015_core.i, esm2015_core.e, flex.i, esm2015_core.f ], {
                fxFlex: [ 0, "fxFlex" ]
            }, null), (_l()(), core["ɵeld"](50, 0, null, 1, 10, "input", [ [ "class", "mat-input-element mat-form-field-autofill-control" ], [ "formControlName", "targetPort" ], [ "matInput", "" ], [ "max", "65535" ], [ "min", "1" ], [ "name", "targetPort" ], [ "placeholder", "Target port" ], [ "type", "number" ] ], [ [ 1, "required", 0 ], [ 2, "ng-untouched", null ], [ 2, "ng-touched", null ], [ 2, "ng-pristine", null ], [ 2, "ng-dirty", null ], [ 2, "ng-valid", null ], [ 2, "ng-invalid", null ], [ 2, "ng-pending", null ], [ 2, "mat-input-server", null ], [ 1, "id", 0 ], [ 1, "placeholder", 0 ], [ 8, "disabled", 0 ], [ 8, "required", 0 ], [ 1, "readonly", 0 ], [ 1, "aria-describedby", 0 ], [ 1, "aria-invalid", 0 ], [ 1, "aria-required", 0 ] ], [ [ null, "change" ], [ null, "input" ], [ null, "blur" ], [ null, "compositionstart" ], [ null, "compositionend" ], [ null, "focus" ] ], (function(_v, en, $event) {
                var ad = !0, _co = _v.component;
                return "input" === en && (ad = !1 !== core["ɵnov"](_v, 51)._handleInput($event.target.value) && ad), 
                "blur" === en && (ad = !1 !== core["ɵnov"](_v, 51).onTouched() && ad), "compositionstart" === en && (ad = !1 !== core["ɵnov"](_v, 51)._compositionStart() && ad), 
                "compositionend" === en && (ad = !1 !== core["ɵnov"](_v, 51)._compositionEnd($event.target.value) && ad), 
                "change" === en && (ad = !1 !== core["ɵnov"](_v, 52).onChange($event.target.value) && ad), 
                "input" === en && (ad = !1 !== core["ɵnov"](_v, 52).onChange($event.target.value) && ad), 
                "blur" === en && (ad = !1 !== core["ɵnov"](_v, 52).onTouched() && ad), "blur" === en && (ad = !1 !== core["ɵnov"](_v, 59)._focusChanged(!1) && ad), 
                "focus" === en && (ad = !1 !== core["ɵnov"](_v, 59)._focusChanged(!0) && ad), "input" === en && (ad = !1 !== core["ɵnov"](_v, 59)._onInput() && ad), 
                "change" === en && (ad = !1 !== _co.checkPortMapping(_v.context.index) && ad), ad;
            }), null, null)), core["ɵdid"](51, 16384, null, 0, fesm2015_forms.DefaultValueAccessor, [ core.Renderer2, core.ElementRef, [ 2, fesm2015_forms.COMPOSITION_BUFFER_MODE ] ], null, null), core["ɵdid"](52, 16384, null, 0, fesm2015_forms.NumberValueAccessor, [ core.Renderer2, core.ElementRef ], null, null), core["ɵdid"](53, 16384, null, 0, fesm2015_forms.RequiredValidator, [], {
                required: [ 0, "required" ]
            }, null), core["ɵprd"](1024, null, fesm2015_forms.NG_VALIDATORS, (function(p0_0) {
                return [ p0_0 ];
            }), [ fesm2015_forms.RequiredValidator ]), core["ɵprd"](1024, null, fesm2015_forms.NG_VALUE_ACCESSOR, (function(p0_0, p1_0) {
                return [ p0_0, p1_0 ];
            }), [ fesm2015_forms.DefaultValueAccessor, fesm2015_forms.NumberValueAccessor ]), core["ɵdid"](56, 671744, null, 0, fesm2015_forms.FormControlName, [ [ 3, fesm2015_forms.ControlContainer ], [ 6, fesm2015_forms.NG_VALIDATORS ], [ 8, null ], [ 6, fesm2015_forms.NG_VALUE_ACCESSOR ], [ 2, fesm2015_forms["ɵangular_packages_forms_forms_p"] ] ], {
                name: [ 0, "name" ]
            }, null), core["ɵprd"](2048, null, fesm2015_forms.NgControl, null, [ fesm2015_forms.FormControlName ]), core["ɵdid"](58, 16384, null, 0, fesm2015_forms.NgControlStatus, [ [ 4, fesm2015_forms.NgControl ] ], null, null), core["ɵdid"](59, 999424, null, 0, input.a, [ core.ElementRef, platform.a, [ 6, fesm2015_forms.NgControl ], [ 2, fesm2015_forms.NgForm ], [ 2, fesm2015_forms.FormGroupDirective ], fesm2015_core.d, [ 8, null ], text_field.a, core.NgZone ], {
                placeholder: [ 0, "placeholder" ],
                required: [ 1, "required" ],
                type: [ 2, "type" ]
            }, null), core["ɵprd"](2048, [ [ 22, 4 ], [ 23, 4 ] ], form_field.d, null, [ input.a ]), (_l()(), 
            core["ɵand"](16777216, null, 5, 1, null, View_PortMappingsComponent_7)), core["ɵdid"](62, 16384, null, 0, common.NgIf, [ core.ViewContainerRef, core.TemplateRef ], {
                ngIf: [ 0, "ngIf" ]
            }, null), (_l()(), core["ɵand"](16777216, null, 5, 1, null, View_PortMappingsComponent_8)), core["ɵdid"](64, 16384, null, 0, common.NgIf, [ core.ViewContainerRef, core.TemplateRef ], {
                ngIf: [ 0, "ngIf" ]
            }, null), (_l()(), core["ɵand"](16777216, null, 5, 1, null, View_PortMappingsComponent_9)), core["ɵdid"](66, 16384, null, 0, common.NgIf, [ core.ViewContainerRef, core.TemplateRef ], {
                ngIf: [ 0, "ngIf" ]
            }, null), (_l()(), core["ɵand"](16777216, null, 5, 1, null, View_PortMappingsComponent_10)), core["ɵdid"](68, 16384, null, 0, common.NgIf, [ core.ViewContainerRef, core.TemplateRef ], {
                ngIf: [ 0, "ngIf" ]
            }, null), (_l()(), core["ɵeld"](69, 0, null, null, 1, "p", [ [ "fxFlex", "5" ] ], null, null, null, null, null)), core["ɵdid"](70, 671744, null, 0, flex.b, [ core.ElementRef, esm2015_core.i, esm2015_core.e, flex.i, esm2015_core.f ], {
                fxFlex: [ 0, "fxFlex" ]
            }, null), (_l()(), core["ɵeld"](71, 0, null, null, 38, "mat-form-field", [ [ "class", "kd-deploy-input-row kd-port-form-field mat-form-field" ], [ "fxFlex", "20" ], [ "md-no-float", "" ] ], [ [ 2, "mat-form-field-appearance-standard", null ], [ 2, "mat-form-field-appearance-fill", null ], [ 2, "mat-form-field-appearance-outline", null ], [ 2, "mat-form-field-appearance-legacy", null ], [ 2, "mat-form-field-invalid", null ], [ 2, "mat-form-field-can-float", null ], [ 2, "mat-form-field-should-float", null ], [ 2, "mat-form-field-has-label", null ], [ 2, "mat-form-field-hide-placeholder", null ], [ 2, "mat-form-field-disabled", null ], [ 2, "mat-form-field-autofilled", null ], [ 2, "mat-focused", null ], [ 2, "mat-accent", null ], [ 2, "mat-warn", null ], [ 2, "ng-untouched", null ], [ 2, "ng-touched", null ], [ 2, "ng-pristine", null ], [ 2, "ng-dirty", null ], [ 2, "ng-valid", null ], [ 2, "ng-invalid", null ], [ 2, "ng-pending", null ], [ 2, "_mat-animation-noopable", null ] ], null, null, form_field_index_ngfactory.b, form_field_index_ngfactory.a)), core["ɵdid"](72, 7520256, null, 9, form_field.c, [ core.ElementRef, core.ChangeDetectorRef, [ 2, fesm2015_core.h ], [ 2, bidi.b ], [ 2, form_field.a ], platform.a, core.NgZone, [ 2, animations.a ] ], null, null), core["ɵqud"](603979776, 31, {
                _controlNonStatic: 0
            }), core["ɵqud"](335544320, 32, {
                _controlStatic: 0
            }), core["ɵqud"](603979776, 33, {
                _labelChildNonStatic: 0
            }), core["ɵqud"](335544320, 34, {
                _labelChildStatic: 0
            }), core["ɵqud"](603979776, 35, {
                _placeholderChild: 0
            }), core["ɵqud"](603979776, 36, {
                _errorChildren: 1
            }), core["ɵqud"](603979776, 37, {
                _hintChildren: 1
            }), core["ɵqud"](603979776, 38, {
                _prefixChildren: 1
            }), core["ɵqud"](603979776, 39, {
                _suffixChildren: 1
            }), core["ɵdid"](82, 671744, null, 0, flex.b, [ core.ElementRef, esm2015_core.i, esm2015_core.e, flex.i, esm2015_core.f ], {
                fxFlex: [ 0, "fxFlex" ]
            }, null), (_l()(), core["ɵeld"](83, 0, null, 1, 15, "mat-select", [ [ "class", "mat-select" ], [ "formControlName", "protocol" ], [ "kdValidProtocol", "" ], [ "name", "protocol" ], [ "placeholder", "Protocol" ], [ "required", "" ], [ "role", "listbox" ] ], [ [ 1, "required", 0 ], [ 2, "ng-untouched", null ], [ 2, "ng-touched", null ], [ 2, "ng-pristine", null ], [ 2, "ng-dirty", null ], [ 2, "ng-valid", null ], [ 2, "ng-invalid", null ], [ 2, "ng-pending", null ], [ 1, "id", 0 ], [ 1, "tabindex", 0 ], [ 1, "aria-label", 0 ], [ 1, "aria-labelledby", 0 ], [ 1, "aria-required", 0 ], [ 1, "aria-disabled", 0 ], [ 1, "aria-invalid", 0 ], [ 1, "aria-owns", 0 ], [ 1, "aria-multiselectable", 0 ], [ 1, "aria-describedby", 0 ], [ 1, "aria-activedescendant", 0 ], [ 2, "mat-select-disabled", null ], [ 2, "mat-select-invalid", null ], [ 2, "mat-select-required", null ], [ 2, "mat-select-empty", null ] ], [ [ null, "keydown" ], [ null, "focus" ], [ null, "blur" ] ], (function(_v, en, $event) {
                var ad = !0;
                return "keydown" === en && (ad = !1 !== core["ɵnov"](_v, 92)._handleKeydown($event) && ad), 
                "focus" === en && (ad = !1 !== core["ɵnov"](_v, 92)._onFocus() && ad), "blur" === en && (ad = !1 !== core["ɵnov"](_v, 92)._onBlur() && ad), 
                ad;
            }), select_index_ngfactory.b, select_index_ngfactory.a)), core["ɵprd"](6144, null, fesm2015_core.j, null, [ fesm2015_select.c ]), core["ɵdid"](85, 16384, null, 0, fesm2015_forms.RequiredValidator, [], {
                required: [ 0, "required" ]
            }, null), core["ɵprd"](1024, null, fesm2015_forms.NG_VALIDATORS, (function(p0_0) {
                return [ p0_0 ];
            }), [ fesm2015_forms.RequiredValidator ]), core["ɵdid"](87, 16384, null, 0, ProtocolValidator, [ fesm2015_http.c ], {
                isExternal: [ 0, "isExternal" ]
            }, null), core["ɵprd"](1024, null, fesm2015_forms.NG_ASYNC_VALIDATORS, (function(p0_0) {
                return [ p0_0 ];
            }), [ ProtocolValidator ]), core["ɵdid"](89, 671744, null, 0, fesm2015_forms.FormControlName, [ [ 3, fesm2015_forms.ControlContainer ], [ 6, fesm2015_forms.NG_VALIDATORS ], [ 6, fesm2015_forms.NG_ASYNC_VALIDATORS ], [ 8, null ], [ 2, fesm2015_forms["ɵangular_packages_forms_forms_p"] ] ], {
                name: [ 0, "name" ]
            }, null), core["ɵprd"](2048, null, fesm2015_forms.NgControl, null, [ fesm2015_forms.FormControlName ]), core["ɵdid"](91, 16384, null, 0, fesm2015_forms.NgControlStatus, [ [ 4, fesm2015_forms.NgControl ] ], null, null), core["ɵdid"](92, 2080768, null, 3, fesm2015_select.c, [ scrolling.d, core.ChangeDetectorRef, core.NgZone, fesm2015_core.d, core.ElementRef, [ 2, bidi.b ], [ 2, fesm2015_forms.NgForm ], [ 2, fesm2015_forms.FormGroupDirective ], [ 2, form_field.c ], [ 6, fesm2015_forms.NgControl ], [ 8, null ], fesm2015_select.a, a11y.i ], {
                placeholder: [ 0, "placeholder" ],
                required: [ 1, "required" ]
            }, null), core["ɵqud"](603979776, 40, {
                options: 1
            }), core["ɵqud"](603979776, 41, {
                optionGroups: 1
            }), core["ɵqud"](603979776, 42, {
                customTrigger: 0
            }), core["ɵprd"](2048, [ [ 31, 4 ], [ 32, 4 ] ], form_field.d, null, [ fesm2015_select.c ]), (_l()(), 
            core["ɵand"](16777216, null, 1, 1, null, View_PortMappingsComponent_11)), core["ɵdid"](98, 278528, null, 0, common.NgForOf, [ core.ViewContainerRef, core.TemplateRef, core.IterableDiffers ], {
                ngForOf: [ 0, "ngForOf" ]
            }, null), (_l()(), core["ɵeld"](99, 0, null, 1, 6, "mat-progress-bar", [ [ "aria-valuemax", "100" ], [ "aria-valuemin", "0" ], [ "class", "kd-deploy-form-progress mat-progress-bar" ], [ "mode", "indeterminate" ], [ "role", "progressbar" ] ], [ [ 1, "aria-valuenow", 0 ], [ 1, "mode", 0 ], [ 2, "_mat-animation-noopable", null ] ], null, null, progress_bar_index_ngfactory.b, progress_bar_index_ngfactory.a)), core["ɵprd"](512, null, common["ɵNgClassImpl"], common["ɵNgClassR2Impl"], [ core.IterableDiffers, core.KeyValueDiffers, core.ElementRef, core.Renderer2 ]), core["ɵdid"](101, 278528, null, 0, common.NgClass, [ common["ɵNgClassImpl"] ], {
                klass: [ 0, "klass" ],
                ngClass: [ 1, "ngClass" ]
            }, null), core["ɵpod"](102, {
                "kd-deploy-form-progress-show": 0
            }), core["ɵdid"](103, 4374528, null, 0, progress_bar.b, [ core.ElementRef, core.NgZone, [ 2, animations.a ], [ 2, progress_bar.a ] ], {
                mode: [ 0, "mode" ]
            }, null), core["ɵdid"](104, 933888, null, 0, extended.a, [ core.ElementRef, esm2015_core.i, esm2015_core.f, common["ɵNgClassImpl"], [ 6, common.NgClass ] ], {
                ngClass: [ 0, "ngClass" ],
                klass: [ 1, "klass" ]
            }, null), core["ɵpod"](105, {
                "kd-deploy-form-progress-show": 0
            }), (_l()(), core["ɵand"](16777216, null, 5, 1, null, View_PortMappingsComponent_12)), core["ɵdid"](107, 16384, null, 0, common.NgIf, [ core.ViewContainerRef, core.TemplateRef ], {
                ngIf: [ 0, "ngIf" ]
            }, null), (_l()(), core["ɵand"](16777216, null, 5, 1, null, View_PortMappingsComponent_13)), core["ɵdid"](109, 16384, null, 0, common.NgIf, [ core.ViewContainerRef, core.TemplateRef ], {
                ngIf: [ 0, "ngIf" ]
            }, null), (_l()(), core["ɵeld"](110, 0, null, null, 3, "div", [ [ "fxFlex", "10" ] ], null, null, null, null, null)), core["ɵdid"](111, 671744, null, 0, flex.b, [ core.ElementRef, esm2015_core.i, esm2015_core.e, flex.i, esm2015_core.f ], {
                fxFlex: [ 0, "fxFlex" ]
            }, null), (_l()(), core["ɵand"](16777216, null, null, 1, null, View_PortMappingsComponent_14)), core["ɵdid"](113, 16384, null, 0, common.NgIf, [ core.ViewContainerRef, core.TemplateRef ], {
                ngIf: [ 0, "ngIf" ]
            }, null) ], (function(_ck, _v) {
                var _co = _v.component;
                _ck(_v, 1, 0, _v.context.index), _ck(_v, 4, 0, "row"), _ck(_v, 16, 0, "30"), _ck(_v, 20, 0, _co.isFirst(_v.context.index)), 
                _ck(_v, 23, 0, "port"), _ck(_v, 26, 0, "Port", _co.isFirst(_v.context.index), "number");
                var currVal_54 = null == _v.context.$implicit.get("port").errors ? null : _v.context.$implicit.get("port").errors.kdValidInteger;
                _ck(_v, 29, 0, currVal_54);
                var currVal_55 = null == _v.context.$implicit.get("port").errors ? null : _v.context.$implicit.get("port").errors.required;
                _ck(_v, 31, 0, currVal_55);
                var currVal_56 = null == _v.context.$implicit.get("port").errors ? null : _v.context.$implicit.get("port").errors.min;
                _ck(_v, 33, 0, currVal_56);
                var currVal_57 = null == _v.context.$implicit.get("port").errors ? null : _v.context.$implicit.get("port").errors.max;
                _ck(_v, 35, 0, currVal_57), _ck(_v, 37, 0, "5"), _ck(_v, 49, 0, "30"), _ck(_v, 53, 0, _co.isFirst(_v.context.index)), 
                _ck(_v, 56, 0, "targetPort"), _ck(_v, 59, 0, "Target port", _co.isFirst(_v.context.index), "number");
                var currVal_104 = null == _v.context.$implicit.get("targetPort").errors ? null : _v.context.$implicit.get("targetPort").errors.kdValidInteger;
                _ck(_v, 62, 0, currVal_104);
                var currVal_105 = null == _v.context.$implicit.get("targetPort").errors ? null : _v.context.$implicit.get("targetPort").errors.required;
                _ck(_v, 64, 0, currVal_105);
                var currVal_106 = null == _v.context.$implicit.get("targetPort").errors ? null : _v.context.$implicit.get("targetPort").errors.min;
                _ck(_v, 66, 0, currVal_106);
                var currVal_107 = null == _v.context.$implicit.get("targetPort").errors ? null : _v.context.$implicit.get("targetPort").errors.max;
                _ck(_v, 68, 0, currVal_107), _ck(_v, 70, 0, "5"), _ck(_v, 82, 0, "20"), _ck(_v, 85, 0, ""), 
                _ck(_v, 87, 0, _co.isExternal), _ck(_v, 89, 0, "protocol"), _ck(_v, 92, 0, "Protocol", ""), 
                _ck(_v, 98, 0, _co.protocols);
                var currVal_165 = _ck(_v, 102, 0, _v.context.$implicit.get("protocol").pending);
                _ck(_v, 101, 0, "kd-deploy-form-progress", currVal_165), _ck(_v, 103, 0, "indeterminate");
                var currVal_167 = _ck(_v, 105, 0, _v.context.$implicit.get("protocol").pending);
                _ck(_v, 104, 0, currVal_167, "kd-deploy-form-progress");
                var currVal_169 = null == _v.context.$implicit.get("protocol").errors ? null : _v.context.$implicit.get("protocol").errors.required;
                _ck(_v, 107, 0, currVal_169);
                var currVal_170 = null == _v.context.$implicit.get("protocol").errors ? null : _v.context.$implicit.get("protocol").errors.validProtocol;
                _ck(_v, 109, 0, currVal_170), _ck(_v, 111, 0, "10"), _ck(_v, 113, 0, _co.isRemovable(_v.context.index));
            }), (function(_ck, _v) {
                _ck(_v, 0, 0, core["ɵnov"](_v, 3).ngClassUntouched, core["ɵnov"](_v, 3).ngClassTouched, core["ɵnov"](_v, 3).ngClassPristine, core["ɵnov"](_v, 3).ngClassDirty, core["ɵnov"](_v, 3).ngClassValid, core["ɵnov"](_v, 3).ngClassInvalid, core["ɵnov"](_v, 3).ngClassPending), 
                _ck(_v, 5, 1, [ "standard" == core["ɵnov"](_v, 6).appearance, "fill" == core["ɵnov"](_v, 6).appearance, "outline" == core["ɵnov"](_v, 6).appearance, "legacy" == core["ɵnov"](_v, 6).appearance, core["ɵnov"](_v, 6)._control.errorState, core["ɵnov"](_v, 6)._canLabelFloat, core["ɵnov"](_v, 6)._shouldLabelFloat(), core["ɵnov"](_v, 6)._hasFloatingLabel(), core["ɵnov"](_v, 6)._hideControlPlaceholder(), core["ɵnov"](_v, 6)._control.disabled, core["ɵnov"](_v, 6)._control.autofilled, core["ɵnov"](_v, 6)._control.focused, "accent" == core["ɵnov"](_v, 6).color, "warn" == core["ɵnov"](_v, 6).color, core["ɵnov"](_v, 6)._shouldForward("untouched"), core["ɵnov"](_v, 6)._shouldForward("touched"), core["ɵnov"](_v, 6)._shouldForward("pristine"), core["ɵnov"](_v, 6)._shouldForward("dirty"), core["ɵnov"](_v, 6)._shouldForward("valid"), core["ɵnov"](_v, 6)._shouldForward("invalid"), core["ɵnov"](_v, 6)._shouldForward("pending"), !core["ɵnov"](_v, 6)._animationsEnabled ]), 
                _ck(_v, 17, 1, [ core["ɵnov"](_v, 20).required ? "" : null, core["ɵnov"](_v, 25).ngClassUntouched, core["ɵnov"](_v, 25).ngClassTouched, core["ɵnov"](_v, 25).ngClassPristine, core["ɵnov"](_v, 25).ngClassDirty, core["ɵnov"](_v, 25).ngClassValid, core["ɵnov"](_v, 25).ngClassInvalid, core["ɵnov"](_v, 25).ngClassPending, core["ɵnov"](_v, 26)._isServer, core["ɵnov"](_v, 26).id, core["ɵnov"](_v, 26).placeholder, core["ɵnov"](_v, 26).disabled, core["ɵnov"](_v, 26).required, core["ɵnov"](_v, 26).readonly && !core["ɵnov"](_v, 26)._isNativeSelect || null, core["ɵnov"](_v, 26)._ariaDescribedby || null, core["ɵnov"](_v, 26).errorState, core["ɵnov"](_v, 26).required.toString() ]), 
                _ck(_v, 38, 1, [ "standard" == core["ɵnov"](_v, 39).appearance, "fill" == core["ɵnov"](_v, 39).appearance, "outline" == core["ɵnov"](_v, 39).appearance, "legacy" == core["ɵnov"](_v, 39).appearance, core["ɵnov"](_v, 39)._control.errorState, core["ɵnov"](_v, 39)._canLabelFloat, core["ɵnov"](_v, 39)._shouldLabelFloat(), core["ɵnov"](_v, 39)._hasFloatingLabel(), core["ɵnov"](_v, 39)._hideControlPlaceholder(), core["ɵnov"](_v, 39)._control.disabled, core["ɵnov"](_v, 39)._control.autofilled, core["ɵnov"](_v, 39)._control.focused, "accent" == core["ɵnov"](_v, 39).color, "warn" == core["ɵnov"](_v, 39).color, core["ɵnov"](_v, 39)._shouldForward("untouched"), core["ɵnov"](_v, 39)._shouldForward("touched"), core["ɵnov"](_v, 39)._shouldForward("pristine"), core["ɵnov"](_v, 39)._shouldForward("dirty"), core["ɵnov"](_v, 39)._shouldForward("valid"), core["ɵnov"](_v, 39)._shouldForward("invalid"), core["ɵnov"](_v, 39)._shouldForward("pending"), !core["ɵnov"](_v, 39)._animationsEnabled ]), 
                _ck(_v, 50, 1, [ core["ɵnov"](_v, 53).required ? "" : null, core["ɵnov"](_v, 58).ngClassUntouched, core["ɵnov"](_v, 58).ngClassTouched, core["ɵnov"](_v, 58).ngClassPristine, core["ɵnov"](_v, 58).ngClassDirty, core["ɵnov"](_v, 58).ngClassValid, core["ɵnov"](_v, 58).ngClassInvalid, core["ɵnov"](_v, 58).ngClassPending, core["ɵnov"](_v, 59)._isServer, core["ɵnov"](_v, 59).id, core["ɵnov"](_v, 59).placeholder, core["ɵnov"](_v, 59).disabled, core["ɵnov"](_v, 59).required, core["ɵnov"](_v, 59).readonly && !core["ɵnov"](_v, 59)._isNativeSelect || null, core["ɵnov"](_v, 59)._ariaDescribedby || null, core["ɵnov"](_v, 59).errorState, core["ɵnov"](_v, 59).required.toString() ]), 
                _ck(_v, 71, 1, [ "standard" == core["ɵnov"](_v, 72).appearance, "fill" == core["ɵnov"](_v, 72).appearance, "outline" == core["ɵnov"](_v, 72).appearance, "legacy" == core["ɵnov"](_v, 72).appearance, core["ɵnov"](_v, 72)._control.errorState, core["ɵnov"](_v, 72)._canLabelFloat, core["ɵnov"](_v, 72)._shouldLabelFloat(), core["ɵnov"](_v, 72)._hasFloatingLabel(), core["ɵnov"](_v, 72)._hideControlPlaceholder(), core["ɵnov"](_v, 72)._control.disabled, core["ɵnov"](_v, 72)._control.autofilled, core["ɵnov"](_v, 72)._control.focused, "accent" == core["ɵnov"](_v, 72).color, "warn" == core["ɵnov"](_v, 72).color, core["ɵnov"](_v, 72)._shouldForward("untouched"), core["ɵnov"](_v, 72)._shouldForward("touched"), core["ɵnov"](_v, 72)._shouldForward("pristine"), core["ɵnov"](_v, 72)._shouldForward("dirty"), core["ɵnov"](_v, 72)._shouldForward("valid"), core["ɵnov"](_v, 72)._shouldForward("invalid"), core["ɵnov"](_v, 72)._shouldForward("pending"), !core["ɵnov"](_v, 72)._animationsEnabled ]), 
                _ck(_v, 83, 1, [ core["ɵnov"](_v, 85).required ? "" : null, core["ɵnov"](_v, 91).ngClassUntouched, core["ɵnov"](_v, 91).ngClassTouched, core["ɵnov"](_v, 91).ngClassPristine, core["ɵnov"](_v, 91).ngClassDirty, core["ɵnov"](_v, 91).ngClassValid, core["ɵnov"](_v, 91).ngClassInvalid, core["ɵnov"](_v, 91).ngClassPending, core["ɵnov"](_v, 92).id, core["ɵnov"](_v, 92).tabIndex, core["ɵnov"](_v, 92)._getAriaLabel(), core["ɵnov"](_v, 92)._getAriaLabelledby(), core["ɵnov"](_v, 92).required.toString(), core["ɵnov"](_v, 92).disabled.toString(), core["ɵnov"](_v, 92).errorState, core["ɵnov"](_v, 92).panelOpen ? core["ɵnov"](_v, 92)._optionIds : null, core["ɵnov"](_v, 92).multiple, core["ɵnov"](_v, 92)._ariaDescribedby || null, core["ɵnov"](_v, 92)._getAriaActiveDescendant(), core["ɵnov"](_v, 92).disabled, core["ɵnov"](_v, 92).errorState, core["ɵnov"](_v, 92).required, core["ɵnov"](_v, 92).empty ]), 
                _ck(_v, 99, 0, "indeterminate" === core["ɵnov"](_v, 103).mode || "query" === core["ɵnov"](_v, 103).mode ? null : core["ɵnov"](_v, 103).value, core["ɵnov"](_v, 103).mode, core["ɵnov"](_v, 103)._isNoopAnimation);
            }));
        }
        function View_PortMappingsComponent_0(_l) {
            return core["ɵvid"](0, [ (_l()(), core["ɵeld"](0, 0, null, null, 38, "div", [ [ "fxLayout", "column" ] ], [ [ 2, "ng-untouched", null ], [ 2, "ng-touched", null ], [ 2, "ng-pristine", null ], [ 2, "ng-dirty", null ], [ 2, "ng-valid", null ], [ 2, "ng-invalid", null ], [ 2, "ng-pending", null ] ], [ [ null, "submit" ], [ null, "reset" ] ], (function(_v, en, $event) {
                var ad = !0;
                return "submit" === en && (ad = !1 !== core["ɵnov"](_v, 1).onSubmit($event) && ad), 
                "reset" === en && (ad = !1 !== core["ɵnov"](_v, 1).onReset() && ad), ad;
            }), null, null)), core["ɵdid"](1, 540672, null, 0, fesm2015_forms.FormGroupDirective, [ [ 8, null ], [ 8, null ] ], {
                form: [ 0, "form" ]
            }, null), core["ɵprd"](2048, null, fesm2015_forms.ControlContainer, null, [ fesm2015_forms.FormGroupDirective ]), core["ɵdid"](3, 16384, null, 0, fesm2015_forms.NgControlStatusGroup, [ [ 4, fesm2015_forms.ControlContainer ] ], null, null), core["ɵdid"](4, 671744, null, 0, flex.d, [ core.ElementRef, esm2015_core.i, [ 2, flex.k ], esm2015_core.f ], {
                fxLayout: [ 0, "fxLayout" ]
            }, null), (_l()(), core["ɵeld"](5, 0, null, null, 26, "div", [ [ "fxLayout", "row" ] ], null, null, null, null, null)), core["ɵdid"](6, 671744, null, 0, flex.d, [ core.ElementRef, esm2015_core.i, [ 2, flex.k ], esm2015_core.f ], {
                fxLayout: [ 0, "fxLayout" ]
            }, null), (_l()(), core["ɵeld"](7, 0, null, null, 24, "mat-form-field", [ [ "class", "mat-block kd-deploy-input-row mat-form-field" ], [ "style", "width: 100%;" ] ], [ [ 2, "mat-form-field-appearance-standard", null ], [ 2, "mat-form-field-appearance-fill", null ], [ 2, "mat-form-field-appearance-outline", null ], [ 2, "mat-form-field-appearance-legacy", null ], [ 2, "mat-form-field-invalid", null ], [ 2, "mat-form-field-can-float", null ], [ 2, "mat-form-field-should-float", null ], [ 2, "mat-form-field-has-label", null ], [ 2, "mat-form-field-hide-placeholder", null ], [ 2, "mat-form-field-disabled", null ], [ 2, "mat-form-field-autofilled", null ], [ 2, "mat-focused", null ], [ 2, "mat-accent", null ], [ 2, "mat-warn", null ], [ 2, "ng-untouched", null ], [ 2, "ng-touched", null ], [ 2, "ng-pristine", null ], [ 2, "ng-dirty", null ], [ 2, "ng-valid", null ], [ 2, "ng-invalid", null ], [ 2, "ng-pending", null ], [ 2, "_mat-animation-noopable", null ] ], null, null, form_field_index_ngfactory.b, form_field_index_ngfactory.a)), core["ɵdid"](8, 7520256, null, 9, form_field.c, [ core.ElementRef, core.ChangeDetectorRef, [ 2, fesm2015_core.h ], [ 2, bidi.b ], [ 2, form_field.a ], platform.a, core.NgZone, [ 2, animations.a ] ], null, null), core["ɵqud"](603979776, 1, {
                _controlNonStatic: 0
            }), core["ɵqud"](335544320, 2, {
                _controlStatic: 0
            }), core["ɵqud"](603979776, 3, {
                _labelChildNonStatic: 0
            }), core["ɵqud"](335544320, 4, {
                _labelChildStatic: 0
            }), core["ɵqud"](603979776, 5, {
                _placeholderChild: 0
            }), core["ɵqud"](603979776, 6, {
                _errorChildren: 1
            }), core["ɵqud"](603979776, 7, {
                _hintChildren: 1
            }), core["ɵqud"](603979776, 8, {
                _prefixChildren: 1
            }), core["ɵqud"](603979776, 9, {
                _suffixChildren: 1
            }), (_l()(), core["ɵeld"](18, 0, null, 1, 13, "mat-select", [ [ "class", "mat-select" ], [ "formControlName", "serviceType" ], [ "namespace", "serviceType" ], [ "placeholder", "Service" ], [ "required", "" ], [ "role", "listbox" ] ], [ [ 1, "required", 0 ], [ 2, "ng-untouched", null ], [ 2, "ng-touched", null ], [ 2, "ng-pristine", null ], [ 2, "ng-dirty", null ], [ 2, "ng-valid", null ], [ 2, "ng-invalid", null ], [ 2, "ng-pending", null ], [ 1, "id", 0 ], [ 1, "tabindex", 0 ], [ 1, "aria-label", 0 ], [ 1, "aria-labelledby", 0 ], [ 1, "aria-required", 0 ], [ 1, "aria-disabled", 0 ], [ 1, "aria-invalid", 0 ], [ 1, "aria-owns", 0 ], [ 1, "aria-multiselectable", 0 ], [ 1, "aria-describedby", 0 ], [ 1, "aria-activedescendant", 0 ], [ 2, "mat-select-disabled", null ], [ 2, "mat-select-invalid", null ], [ 2, "mat-select-required", null ], [ 2, "mat-select-empty", null ] ], [ [ null, "keydown" ], [ null, "focus" ], [ null, "blur" ] ], (function(_v, en, $event) {
                var ad = !0;
                return "keydown" === en && (ad = !1 !== core["ɵnov"](_v, 25)._handleKeydown($event) && ad), 
                "focus" === en && (ad = !1 !== core["ɵnov"](_v, 25)._onFocus() && ad), "blur" === en && (ad = !1 !== core["ɵnov"](_v, 25)._onBlur() && ad), 
                ad;
            }), select_index_ngfactory.b, select_index_ngfactory.a)), core["ɵprd"](6144, null, fesm2015_core.j, null, [ fesm2015_select.c ]), core["ɵdid"](20, 16384, null, 0, fesm2015_forms.RequiredValidator, [], {
                required: [ 0, "required" ]
            }, null), core["ɵprd"](1024, null, fesm2015_forms.NG_VALIDATORS, (function(p0_0) {
                return [ p0_0 ];
            }), [ fesm2015_forms.RequiredValidator ]), core["ɵdid"](22, 671744, null, 0, fesm2015_forms.FormControlName, [ [ 3, fesm2015_forms.ControlContainer ], [ 6, fesm2015_forms.NG_VALIDATORS ], [ 8, null ], [ 8, null ], [ 2, fesm2015_forms["ɵangular_packages_forms_forms_p"] ] ], {
                name: [ 0, "name" ]
            }, null), core["ɵprd"](2048, null, fesm2015_forms.NgControl, null, [ fesm2015_forms.FormControlName ]), core["ɵdid"](24, 16384, null, 0, fesm2015_forms.NgControlStatus, [ [ 4, fesm2015_forms.NgControl ] ], null, null), core["ɵdid"](25, 2080768, null, 3, fesm2015_select.c, [ scrolling.d, core.ChangeDetectorRef, core.NgZone, fesm2015_core.d, core.ElementRef, [ 2, bidi.b ], [ 2, fesm2015_forms.NgForm ], [ 2, fesm2015_forms.FormGroupDirective ], [ 2, form_field.c ], [ 6, fesm2015_forms.NgControl ], [ 8, null ], fesm2015_select.a, a11y.i ], {
                placeholder: [ 0, "placeholder" ],
                required: [ 1, "required" ]
            }, null), core["ɵqud"](603979776, 10, {
                options: 1
            }), core["ɵqud"](603979776, 11, {
                optionGroups: 1
            }), core["ɵqud"](603979776, 12, {
                customTrigger: 0
            }), core["ɵprd"](2048, [ [ 1, 4 ], [ 2, 4 ] ], form_field.d, null, [ fesm2015_select.c ]), (_l()(), 
            core["ɵand"](16777216, null, 1, 1, null, View_PortMappingsComponent_1)), core["ɵdid"](31, 278528, null, 0, common.NgForOf, [ core.ViewContainerRef, core.TemplateRef, core.IterableDiffers ], {
                ngForOf: [ 0, "ngForOf" ]
            }, null), (_l()(), core["ɵeld"](32, 0, null, null, 6, null, null, null, null, null, null, null)), (_l()(), 
            core["ɵeld"](33, 0, null, null, 5, null, null, null, null, null, null, null)), core["ɵdid"](34, 212992, null, 0, fesm2015_forms.FormArrayName, [ [ 3, fesm2015_forms.ControlContainer ], [ 8, null ], [ 8, null ] ], {
                name: [ 0, "name" ]
            }, null), core["ɵprd"](2048, null, fesm2015_forms.ControlContainer, null, [ fesm2015_forms.FormArrayName ]), core["ɵdid"](36, 16384, null, 0, fesm2015_forms.NgControlStatusGroup, [ [ 4, fesm2015_forms.ControlContainer ] ], null, null), (_l()(), 
            core["ɵand"](16777216, null, null, 1, null, View_PortMappingsComponent_2)), core["ɵdid"](38, 278528, null, 0, common.NgForOf, [ core.ViewContainerRef, core.TemplateRef, core.IterableDiffers ], {
                ngForOf: [ 0, "ngForOf" ]
            }, null) ], (function(_ck, _v) {
                var _co = _v.component;
                _ck(_v, 1, 0, _co.portMappingForm), _ck(_v, 4, 0, "column"), _ck(_v, 6, 0, "row"), 
                _ck(_v, 20, 0, ""), _ck(_v, 22, 0, "serviceType"), _ck(_v, 25, 0, "Service", ""), 
                _ck(_v, 31, 0, _co.serviceTypes), _ck(_v, 34, 0, "portMappings"), _ck(_v, 38, 0, _co.portMappings.controls);
            }), (function(_ck, _v) {
                _ck(_v, 0, 0, core["ɵnov"](_v, 3).ngClassUntouched, core["ɵnov"](_v, 3).ngClassTouched, core["ɵnov"](_v, 3).ngClassPristine, core["ɵnov"](_v, 3).ngClassDirty, core["ɵnov"](_v, 3).ngClassValid, core["ɵnov"](_v, 3).ngClassInvalid, core["ɵnov"](_v, 3).ngClassPending), 
                _ck(_v, 7, 1, [ "standard" == core["ɵnov"](_v, 8).appearance, "fill" == core["ɵnov"](_v, 8).appearance, "outline" == core["ɵnov"](_v, 8).appearance, "legacy" == core["ɵnov"](_v, 8).appearance, core["ɵnov"](_v, 8)._control.errorState, core["ɵnov"](_v, 8)._canLabelFloat, core["ɵnov"](_v, 8)._shouldLabelFloat(), core["ɵnov"](_v, 8)._hasFloatingLabel(), core["ɵnov"](_v, 8)._hideControlPlaceholder(), core["ɵnov"](_v, 8)._control.disabled, core["ɵnov"](_v, 8)._control.autofilled, core["ɵnov"](_v, 8)._control.focused, "accent" == core["ɵnov"](_v, 8).color, "warn" == core["ɵnov"](_v, 8).color, core["ɵnov"](_v, 8)._shouldForward("untouched"), core["ɵnov"](_v, 8)._shouldForward("touched"), core["ɵnov"](_v, 8)._shouldForward("pristine"), core["ɵnov"](_v, 8)._shouldForward("dirty"), core["ɵnov"](_v, 8)._shouldForward("valid"), core["ɵnov"](_v, 8)._shouldForward("invalid"), core["ɵnov"](_v, 8)._shouldForward("pending"), !core["ɵnov"](_v, 8)._animationsEnabled ]), 
                _ck(_v, 18, 1, [ core["ɵnov"](_v, 20).required ? "" : null, core["ɵnov"](_v, 24).ngClassUntouched, core["ɵnov"](_v, 24).ngClassTouched, core["ɵnov"](_v, 24).ngClassPristine, core["ɵnov"](_v, 24).ngClassDirty, core["ɵnov"](_v, 24).ngClassValid, core["ɵnov"](_v, 24).ngClassInvalid, core["ɵnov"](_v, 24).ngClassPending, core["ɵnov"](_v, 25).id, core["ɵnov"](_v, 25).tabIndex, core["ɵnov"](_v, 25)._getAriaLabel(), core["ɵnov"](_v, 25)._getAriaLabelledby(), core["ɵnov"](_v, 25).required.toString(), core["ɵnov"](_v, 25).disabled.toString(), core["ɵnov"](_v, 25).errorState, core["ɵnov"](_v, 25).panelOpen ? core["ɵnov"](_v, 25)._optionIds : null, core["ɵnov"](_v, 25).multiple, core["ɵnov"](_v, 25)._ariaDescribedby || null, core["ɵnov"](_v, 25)._getAriaActiveDescendant(), core["ɵnov"](_v, 25).disabled, core["ɵnov"](_v, 25).errorState, core["ɵnov"](_v, 25).required, core["ɵnov"](_v, 25).empty ]);
            }));
        }
        class component_DeployLabelComponent {
            constructor(fb_) {
                this.fb_ = fb_, this.propagateChange = _ => {};
            }
            ngOnInit() {
                this.labelForm = this.fb_.group({
                    labels: this.fb_.array([])
                }), this.labelForm.valueChanges.subscribe(v => {
                    this.propagateChange(v);
                });
                for (let i = 0; i < this.labelArr.length; i++) this.addNewLabel(this.labelArr[i].key, this.labelArr[i].value, this.labelArr[i].editable);
            }
            validate(_) {
                return this.labelForm.valid ? null : {
                    labelValid: {
                        value: this.labels.at(0).errors
                    }
                };
            }
            get labels() {
                return this.labelForm.get("labels");
            }
            addNewLabel(key = "", value = "", editable = !0) {
                this.labels.push(this.fb_.group({
                    key: [ {
                        value: key,
                        disabled: !editable
                    }, fesm2015_forms.Validators.compose([ FormValidators.labelKeyNameLength, FormValidators.labelKeyNamePattern, FormValidators.labelKeyPrefixLength, FormValidators.labelKeyPrefixPattern ]) ],
                    value: [ {
                        value: value,
                        disabled: !editable
                    }, fesm2015_forms.Validators.compose([ fesm2015_forms.Validators.maxLength(253), FormValidators.labelValuePattern ]) ],
                    editable: editable
                }));
            }
            check(index) {
                this.addIfNeeded(), this.validateKey(index);
            }
            isRemovable(index) {
                const lastElement = this.labels.at(this.labels.length - 1), currentElement = this.labels.at(index), currentkey = currentElement.get("key").value, currentValue = currentElement.get("value").value, currentEditable = currentElement.get("editable").value, lastKey = lastElement.get("key").value, lastValue = lastElement.get("value").value;
                return !(!currentEditable || currentkey === lastKey || currentValue === lastValue);
            }
            deleteLabel(index) {
                this.labels.removeAt(index);
            }
            validateKey(index) {
                const elem = this.labels.at(index).get("key"), isUnique = !this.isKeyDuplicated(index);
                elem.setErrors(isUnique ? null : {
                    unique: !0
                }), this.labelForm.updateValueAndValidity();
            }
            isKeyDuplicated(index) {
                let duplications = 0;
                const currentKey = this.labels.at(index).get("key").value;
                for (let i = 0; i < this.labels.length; i++) {
                    const key = this.labels.at(i).get("key").value;
                    if (0 !== key.length && key === currentKey && duplications++, duplications > 1) return !0;
                }
                return !1;
            }
            addIfNeeded() {
                const lastLabel = this.labels.at(this.labels.length - 1);
                this.isFilled(lastLabel) && this.addNewLabel();
            }
            isFilled(label) {
                return 0 !== label.get("key").value.length && 0 !== label.get("value").value.length;
            }
            writeValue(labels) {
                labels.length > 0 && this.labels.at(labels[0].index).patchValue({
                    value: labels[0].value
                });
            }
            registerOnChange(fn) {
                this.propagateChange = fn;
            }
            registerOnTouched() {}
        }
        var RenderType_DeployLabelComponent = core["ɵcrt"]({
            encapsulation: 2,
            styles: [],
            data: {}
        });
        function View_DeployLabelComponent_2(_l) {
            return core["ɵvid"](0, [ (_l()(), core["ɵeld"](0, 0, null, null, 2, "mat-error", [ [ "class", "mat-error" ], [ "role", "alert" ] ], [ [ 1, "id", 0 ] ], null, null, null, null)), core["ɵdid"](1, 16384, [ [ 6, 4 ] ], 0, form_field.b, [], null, null), (_l()(), 
            core["ɵted"](2, null, [ " ", " is not unique " ])) ], null, (function(_ck, _v) {
                _ck(_v, 0, 0, core["ɵnov"](_v, 1).id);
                var currVal_1 = _v.parent.context.$implicit.get("key").value;
                _ck(_v, 2, 0, currVal_1);
            }));
        }
        function View_DeployLabelComponent_3(_l) {
            return core["ɵvid"](0, [ (_l()(), core["ɵeld"](0, 0, null, null, 2, "mat-error", [ [ "class", "mat-error" ], [ "role", "alert" ] ], [ [ 1, "id", 0 ] ], null, null, null, null)), core["ɵdid"](1, 16384, [ [ 6, 4 ] ], 0, form_field.b, [], null, null), (_l()(), 
            core["ɵted"](-1, null, [ " Prefix is not a valid DNS subdomain prefix (eg. my-domain.com). " ])) ], null, (function(_ck, _v) {
                _ck(_v, 0, 0, core["ɵnov"](_v, 1).id);
            }));
        }
        function View_DeployLabelComponent_4(_l) {
            return core["ɵvid"](0, [ (_l()(), core["ɵeld"](0, 0, null, null, 2, "mat-error", [ [ "class", "mat-error" ], [ "role", "alert" ] ], [ [ 1, "id", 0 ] ], null, null, null, null)), core["ɵdid"](1, 16384, [ [ 6, 4 ] ], 0, form_field.b, [], null, null), (_l()(), 
            core["ɵted"](-1, null, [ " Label key name must be alphanumeric separated by '-', '_' or '.', optionally prefixed by a DNS subdomain and '/'. " ])) ], null, (function(_ck, _v) {
                _ck(_v, 0, 0, core["ɵnov"](_v, 1).id);
            }));
        }
        function View_DeployLabelComponent_5(_l) {
            return core["ɵvid"](0, [ (_l()(), core["ɵeld"](0, 0, null, null, 2, "mat-error", [ [ "class", "mat-error" ], [ "role", "alert" ] ], [ [ 1, "id", 0 ] ], null, null, null, null)), core["ɵdid"](1, 16384, [ [ 6, 4 ] ], 0, form_field.b, [], null, null), (_l()(), 
            core["ɵted"](-1, null, [ " Prefix should not exceed 253 characters. " ])) ], null, (function(_ck, _v) {
                _ck(_v, 0, 0, core["ɵnov"](_v, 1).id);
            }));
        }
        function View_DeployLabelComponent_6(_l) {
            return core["ɵvid"](0, [ (_l()(), core["ɵeld"](0, 0, null, null, 2, "mat-error", [ [ "class", "mat-error" ], [ "role", "alert" ] ], [ [ 1, "id", 0 ] ], null, null, null, null)), core["ɵdid"](1, 16384, [ [ 6, 4 ] ], 0, form_field.b, [], null, null), (_l()(), 
            core["ɵted"](-1, null, [ " Label Key name should not exceed 63 characters. " ])) ], null, (function(_ck, _v) {
                _ck(_v, 0, 0, core["ɵnov"](_v, 1).id);
            }));
        }
        function View_DeployLabelComponent_7(_l) {
            return core["ɵvid"](0, [ (_l()(), core["ɵeld"](0, 0, null, null, 2, "mat-error", [ [ "class", "mat-error" ], [ "role", "alert" ] ], [ [ 1, "id", 0 ] ], null, null, null, null)), core["ɵdid"](1, 16384, [ [ 15, 4 ] ], 0, form_field.b, [], null, null), (_l()(), 
            core["ɵted"](-1, null, [ " Label value must be alphanumeric separated by '.' , '-' or '_'. " ])) ], null, (function(_ck, _v) {
                _ck(_v, 0, 0, core["ɵnov"](_v, 1).id);
            }));
        }
        function View_DeployLabelComponent_8(_l) {
            return core["ɵvid"](0, [ (_l()(), core["ɵeld"](0, 0, null, null, 2, "mat-error", [ [ "class", "mat-error" ], [ "role", "alert" ] ], [ [ 1, "id", 0 ] ], null, null, null, null)), core["ɵdid"](1, 16384, [ [ 15, 4 ] ], 0, form_field.b, [], null, null), (_l()(), 
            core["ɵted"](-1, null, [ " Label Value must not exceed 253 characters. " ])) ], null, (function(_ck, _v) {
                _ck(_v, 0, 0, core["ɵnov"](_v, 1).id);
            }));
        }
        function View_DeployLabelComponent_9(_l) {
            return core["ɵvid"](0, [ (_l()(), core["ɵeld"](0, 0, null, null, 4, "button", [ [ "mat-icon-button", "" ] ], [ [ 1, "disabled", 0 ], [ 2, "_mat-animation-noopable", null ] ], [ [ null, "click" ] ], (function(_v, en, $event) {
                var ad = !0;
                return "click" === en && (ad = !1 !== _v.component.deleteLabel(_v.parent.context.index) && ad), 
                ad;
            }), button_index_ngfactory.d, button_index_ngfactory.b)), core["ɵdid"](1, 180224, null, 0, fesm2015_button.b, [ core.ElementRef, a11y.f, [ 2, animations.a ] ], null, null), (_l()(), 
            core["ɵeld"](2, 0, null, 0, 2, "mat-icon", [ [ "class", "mat-icon notranslate" ], [ "role", "img" ] ], [ [ 2, "mat-icon-inline", null ], [ 2, "mat-icon-no-color", null ] ], null, null, icon_index_ngfactory.b, icon_index_ngfactory.a)), core["ɵdid"](3, 9158656, null, 0, icon.b, [ core.ElementRef, icon.d, [ 8, null ], [ 2, icon.a ], [ 2, core.ErrorHandler ] ], null, null), (_l()(), 
            core["ɵted"](-1, 0, [ "delete" ])) ], (function(_ck, _v) {
                _ck(_v, 3, 0);
            }), (function(_ck, _v) {
                _ck(_v, 0, 0, core["ɵnov"](_v, 1).disabled || null, "NoopAnimations" === core["ɵnov"](_v, 1)._animationMode), 
                _ck(_v, 2, 0, core["ɵnov"](_v, 3).inline, "primary" !== core["ɵnov"](_v, 3).color && "accent" !== core["ɵnov"](_v, 3).color && "warn" !== core["ɵnov"](_v, 3).color);
            }));
        }
        function View_DeployLabelComponent_1(_l) {
            return core["ɵvid"](0, [ (_l()(), core["ɵeld"](0, 0, null, null, 72, "div", [], [ [ 2, "ng-untouched", null ], [ 2, "ng-touched", null ], [ 2, "ng-pristine", null ], [ 2, "ng-dirty", null ], [ 2, "ng-valid", null ], [ 2, "ng-invalid", null ], [ 2, "ng-pending", null ] ], null, null, null, null)), core["ɵdid"](1, 212992, null, 0, fesm2015_forms.FormGroupName, [ [ 3, fesm2015_forms.ControlContainer ], [ 8, null ], [ 8, null ] ], {
                name: [ 0, "name" ]
            }, null), core["ɵprd"](2048, null, fesm2015_forms.ControlContainer, null, [ fesm2015_forms.FormGroupName ]), core["ɵdid"](3, 16384, null, 0, fesm2015_forms.NgControlStatusGroup, [ [ 4, fesm2015_forms.ControlContainer ] ], null, null), (_l()(), 
            core["ɵeld"](4, 0, null, null, 29, "mat-form-field", [ [ "class", "kd-deploy-input-row mat-form-field" ], [ "fxFlex", "45" ], [ "md-no-float", "" ] ], [ [ 2, "mat-form-field-appearance-standard", null ], [ 2, "mat-form-field-appearance-fill", null ], [ 2, "mat-form-field-appearance-outline", null ], [ 2, "mat-form-field-appearance-legacy", null ], [ 2, "mat-form-field-invalid", null ], [ 2, "mat-form-field-can-float", null ], [ 2, "mat-form-field-should-float", null ], [ 2, "mat-form-field-has-label", null ], [ 2, "mat-form-field-hide-placeholder", null ], [ 2, "mat-form-field-disabled", null ], [ 2, "mat-form-field-autofilled", null ], [ 2, "mat-focused", null ], [ 2, "mat-accent", null ], [ 2, "mat-warn", null ], [ 2, "ng-untouched", null ], [ 2, "ng-touched", null ], [ 2, "ng-pristine", null ], [ 2, "ng-dirty", null ], [ 2, "ng-valid", null ], [ 2, "ng-invalid", null ], [ 2, "ng-pending", null ], [ 2, "_mat-animation-noopable", null ] ], null, null, form_field_index_ngfactory.b, form_field_index_ngfactory.a)), core["ɵdid"](5, 7520256, null, 9, form_field.c, [ core.ElementRef, core.ChangeDetectorRef, [ 2, fesm2015_core.h ], [ 2, bidi.b ], [ 2, form_field.a ], platform.a, core.NgZone, [ 2, animations.a ] ], null, null), core["ɵqud"](603979776, 1, {
                _controlNonStatic: 0
            }), core["ɵqud"](335544320, 2, {
                _controlStatic: 0
            }), core["ɵqud"](603979776, 3, {
                _labelChildNonStatic: 0
            }), core["ɵqud"](335544320, 4, {
                _labelChildStatic: 0
            }), core["ɵqud"](603979776, 5, {
                _placeholderChild: 0
            }), core["ɵqud"](603979776, 6, {
                _errorChildren: 1
            }), core["ɵqud"](603979776, 7, {
                _hintChildren: 1
            }), core["ɵqud"](603979776, 8, {
                _prefixChildren: 1
            }), core["ɵqud"](603979776, 9, {
                _suffixChildren: 1
            }), core["ɵdid"](15, 671744, null, 0, flex.b, [ core.ElementRef, esm2015_core.i, esm2015_core.e, flex.i, esm2015_core.f ], {
                fxFlex: [ 0, "fxFlex" ]
            }, null), (_l()(), core["ɵeld"](16, 0, null, 1, 7, "input", [ [ "class", "mat-input-element mat-form-field-autofill-control" ], [ "formControlName", "key" ], [ "matInput", "" ], [ "name", "key" ], [ "placeholder", "key" ] ], [ [ 2, "ng-untouched", null ], [ 2, "ng-touched", null ], [ 2, "ng-pristine", null ], [ 2, "ng-dirty", null ], [ 2, "ng-valid", null ], [ 2, "ng-invalid", null ], [ 2, "ng-pending", null ], [ 2, "mat-input-server", null ], [ 1, "id", 0 ], [ 1, "placeholder", 0 ], [ 8, "disabled", 0 ], [ 8, "required", 0 ], [ 1, "readonly", 0 ], [ 1, "aria-describedby", 0 ], [ 1, "aria-invalid", 0 ], [ 1, "aria-required", 0 ] ], [ [ null, "keyup" ], [ null, "input" ], [ null, "blur" ], [ null, "compositionstart" ], [ null, "compositionend" ], [ null, "focus" ] ], (function(_v, en, $event) {
                var ad = !0, _co = _v.component;
                return "input" === en && (ad = !1 !== core["ɵnov"](_v, 17)._handleInput($event.target.value) && ad), 
                "blur" === en && (ad = !1 !== core["ɵnov"](_v, 17).onTouched() && ad), "compositionstart" === en && (ad = !1 !== core["ɵnov"](_v, 17)._compositionStart() && ad), 
                "compositionend" === en && (ad = !1 !== core["ɵnov"](_v, 17)._compositionEnd($event.target.value) && ad), 
                "blur" === en && (ad = !1 !== core["ɵnov"](_v, 22)._focusChanged(!1) && ad), "focus" === en && (ad = !1 !== core["ɵnov"](_v, 22)._focusChanged(!0) && ad), 
                "input" === en && (ad = !1 !== core["ɵnov"](_v, 22)._onInput() && ad), "keyup" === en && (ad = !1 !== _co.check(_v.context.index) && ad), 
                ad;
            }), null, null)), core["ɵdid"](17, 16384, null, 0, fesm2015_forms.DefaultValueAccessor, [ core.Renderer2, core.ElementRef, [ 2, fesm2015_forms.COMPOSITION_BUFFER_MODE ] ], null, null), core["ɵprd"](1024, null, fesm2015_forms.NG_VALUE_ACCESSOR, (function(p0_0) {
                return [ p0_0 ];
            }), [ fesm2015_forms.DefaultValueAccessor ]), core["ɵdid"](19, 671744, null, 0, fesm2015_forms.FormControlName, [ [ 3, fesm2015_forms.ControlContainer ], [ 8, null ], [ 8, null ], [ 6, fesm2015_forms.NG_VALUE_ACCESSOR ], [ 2, fesm2015_forms["ɵangular_packages_forms_forms_p"] ] ], {
                name: [ 0, "name" ]
            }, null), core["ɵprd"](2048, null, fesm2015_forms.NgControl, null, [ fesm2015_forms.FormControlName ]), core["ɵdid"](21, 16384, null, 0, fesm2015_forms.NgControlStatus, [ [ 4, fesm2015_forms.NgControl ] ], null, null), core["ɵdid"](22, 999424, null, 0, input.a, [ core.ElementRef, platform.a, [ 6, fesm2015_forms.NgControl ], [ 2, fesm2015_forms.NgForm ], [ 2, fesm2015_forms.FormGroupDirective ], fesm2015_core.d, [ 8, null ], text_field.a, core.NgZone ], {
                placeholder: [ 0, "placeholder" ],
                readonly: [ 1, "readonly" ]
            }, null), core["ɵprd"](2048, [ [ 1, 4 ], [ 2, 4 ] ], form_field.d, null, [ input.a ]), (_l()(), 
            core["ɵand"](16777216, null, 5, 1, null, View_DeployLabelComponent_2)), core["ɵdid"](25, 16384, null, 0, common.NgIf, [ core.ViewContainerRef, core.TemplateRef ], {
                ngIf: [ 0, "ngIf" ]
            }, null), (_l()(), core["ɵand"](16777216, null, 5, 1, null, View_DeployLabelComponent_3)), core["ɵdid"](27, 16384, null, 0, common.NgIf, [ core.ViewContainerRef, core.TemplateRef ], {
                ngIf: [ 0, "ngIf" ]
            }, null), (_l()(), core["ɵand"](16777216, null, 5, 1, null, View_DeployLabelComponent_4)), core["ɵdid"](29, 16384, null, 0, common.NgIf, [ core.ViewContainerRef, core.TemplateRef ], {
                ngIf: [ 0, "ngIf" ]
            }, null), (_l()(), core["ɵand"](16777216, null, 5, 1, null, View_DeployLabelComponent_5)), core["ɵdid"](31, 16384, null, 0, common.NgIf, [ core.ViewContainerRef, core.TemplateRef ], {
                ngIf: [ 0, "ngIf" ]
            }, null), (_l()(), core["ɵand"](16777216, null, 5, 1, null, View_DeployLabelComponent_6)), core["ɵdid"](33, 16384, null, 0, common.NgIf, [ core.ViewContainerRef, core.TemplateRef ], {
                ngIf: [ 0, "ngIf" ]
            }, null), (_l()(), core["ɵeld"](34, 0, null, null, 1, "p", [ [ "fxFlex", "5" ] ], null, null, null, null, null)), core["ɵdid"](35, 671744, null, 0, flex.b, [ core.ElementRef, esm2015_core.i, esm2015_core.e, flex.i, esm2015_core.f ], {
                fxFlex: [ 0, "fxFlex" ]
            }, null), (_l()(), core["ɵeld"](36, 0, null, null, 26, "mat-form-field", [ [ "class", "kd-deploy-input-row mat-form-field" ], [ "fxFlex", "40" ], [ "md-no-float", "" ] ], [ [ 2, "mat-form-field-appearance-standard", null ], [ 2, "mat-form-field-appearance-fill", null ], [ 2, "mat-form-field-appearance-outline", null ], [ 2, "mat-form-field-appearance-legacy", null ], [ 2, "mat-form-field-invalid", null ], [ 2, "mat-form-field-can-float", null ], [ 2, "mat-form-field-should-float", null ], [ 2, "mat-form-field-has-label", null ], [ 2, "mat-form-field-hide-placeholder", null ], [ 2, "mat-form-field-disabled", null ], [ 2, "mat-form-field-autofilled", null ], [ 2, "mat-focused", null ], [ 2, "mat-accent", null ], [ 2, "mat-warn", null ], [ 2, "ng-untouched", null ], [ 2, "ng-touched", null ], [ 2, "ng-pristine", null ], [ 2, "ng-dirty", null ], [ 2, "ng-valid", null ], [ 2, "ng-invalid", null ], [ 2, "ng-pending", null ], [ 2, "_mat-animation-noopable", null ] ], null, null, form_field_index_ngfactory.b, form_field_index_ngfactory.a)), core["ɵdid"](37, 7520256, null, 9, form_field.c, [ core.ElementRef, core.ChangeDetectorRef, [ 2, fesm2015_core.h ], [ 2, bidi.b ], [ 2, form_field.a ], platform.a, core.NgZone, [ 2, animations.a ] ], null, null), core["ɵqud"](603979776, 10, {
                _controlNonStatic: 0
            }), core["ɵqud"](335544320, 11, {
                _controlStatic: 0
            }), core["ɵqud"](603979776, 12, {
                _labelChildNonStatic: 0
            }), core["ɵqud"](335544320, 13, {
                _labelChildStatic: 0
            }), core["ɵqud"](603979776, 14, {
                _placeholderChild: 0
            }), core["ɵqud"](603979776, 15, {
                _errorChildren: 1
            }), core["ɵqud"](603979776, 16, {
                _hintChildren: 1
            }), core["ɵqud"](603979776, 17, {
                _prefixChildren: 1
            }), core["ɵqud"](603979776, 18, {
                _suffixChildren: 1
            }), core["ɵdid"](47, 671744, null, 0, flex.b, [ core.ElementRef, esm2015_core.i, esm2015_core.e, flex.i, esm2015_core.f ], {
                fxFlex: [ 0, "fxFlex" ]
            }, null), (_l()(), core["ɵeld"](48, 0, null, 1, 7, "input", [ [ "class", "mat-input-element mat-form-field-autofill-control" ], [ "formControlName", "value" ], [ "matInput", "" ], [ "name", "value" ], [ "placeholder", "value" ] ], [ [ 2, "ng-untouched", null ], [ 2, "ng-touched", null ], [ 2, "ng-pristine", null ], [ 2, "ng-dirty", null ], [ 2, "ng-valid", null ], [ 2, "ng-invalid", null ], [ 2, "ng-pending", null ], [ 2, "mat-input-server", null ], [ 1, "id", 0 ], [ 1, "placeholder", 0 ], [ 8, "disabled", 0 ], [ 8, "required", 0 ], [ 1, "readonly", 0 ], [ 1, "aria-describedby", 0 ], [ 1, "aria-invalid", 0 ], [ 1, "aria-required", 0 ] ], [ [ null, "keyup" ], [ null, "input" ], [ null, "blur" ], [ null, "compositionstart" ], [ null, "compositionend" ], [ null, "focus" ] ], (function(_v, en, $event) {
                var ad = !0, _co = _v.component;
                return "input" === en && (ad = !1 !== core["ɵnov"](_v, 49)._handleInput($event.target.value) && ad), 
                "blur" === en && (ad = !1 !== core["ɵnov"](_v, 49).onTouched() && ad), "compositionstart" === en && (ad = !1 !== core["ɵnov"](_v, 49)._compositionStart() && ad), 
                "compositionend" === en && (ad = !1 !== core["ɵnov"](_v, 49)._compositionEnd($event.target.value) && ad), 
                "blur" === en && (ad = !1 !== core["ɵnov"](_v, 54)._focusChanged(!1) && ad), "focus" === en && (ad = !1 !== core["ɵnov"](_v, 54)._focusChanged(!0) && ad), 
                "input" === en && (ad = !1 !== core["ɵnov"](_v, 54)._onInput() && ad), "keyup" === en && (ad = !1 !== _co.check(_v.context.index) && ad), 
                ad;
            }), null, null)), core["ɵdid"](49, 16384, null, 0, fesm2015_forms.DefaultValueAccessor, [ core.Renderer2, core.ElementRef, [ 2, fesm2015_forms.COMPOSITION_BUFFER_MODE ] ], null, null), core["ɵprd"](1024, null, fesm2015_forms.NG_VALUE_ACCESSOR, (function(p0_0) {
                return [ p0_0 ];
            }), [ fesm2015_forms.DefaultValueAccessor ]), core["ɵdid"](51, 671744, null, 0, fesm2015_forms.FormControlName, [ [ 3, fesm2015_forms.ControlContainer ], [ 8, null ], [ 8, null ], [ 6, fesm2015_forms.NG_VALUE_ACCESSOR ], [ 2, fesm2015_forms["ɵangular_packages_forms_forms_p"] ] ], {
                name: [ 0, "name" ]
            }, null), core["ɵprd"](2048, null, fesm2015_forms.NgControl, null, [ fesm2015_forms.FormControlName ]), core["ɵdid"](53, 16384, null, 0, fesm2015_forms.NgControlStatus, [ [ 4, fesm2015_forms.NgControl ] ], null, null), core["ɵdid"](54, 999424, null, 0, input.a, [ core.ElementRef, platform.a, [ 6, fesm2015_forms.NgControl ], [ 2, fesm2015_forms.NgForm ], [ 2, fesm2015_forms.FormGroupDirective ], fesm2015_core.d, [ 8, null ], text_field.a, core.NgZone ], {
                placeholder: [ 0, "placeholder" ],
                readonly: [ 1, "readonly" ]
            }, null), core["ɵprd"](2048, [ [ 10, 4 ], [ 11, 4 ] ], form_field.d, null, [ input.a ]), (_l()(), 
            core["ɵeld"](56, 0, null, 7, 2, "mat-hint", [ [ "align", "end" ], [ "class", "mat-hint" ] ], [ [ 2, "mat-right", null ], [ 1, "id", 0 ], [ 1, "align", 0 ] ], null, null, null, null)), core["ɵdid"](57, 16384, [ [ 16, 4 ] ], 0, form_field.f, [], {
                align: [ 0, "align" ]
            }, null), (_l()(), core["ɵted"](58, null, [ "", " / 253" ])), (_l()(), core["ɵand"](16777216, null, 5, 1, null, View_DeployLabelComponent_7)), core["ɵdid"](60, 16384, null, 0, common.NgIf, [ core.ViewContainerRef, core.TemplateRef ], {
                ngIf: [ 0, "ngIf" ]
            }, null), (_l()(), core["ɵand"](16777216, null, 5, 1, null, View_DeployLabelComponent_8)), core["ɵdid"](62, 16384, null, 0, common.NgIf, [ core.ViewContainerRef, core.TemplateRef ], {
                ngIf: [ 0, "ngIf" ]
            }, null), (_l()(), core["ɵeld"](63, 0, null, null, 5, "input", [ [ "formControlName", "editable" ], [ "type", "hidden" ] ], [ [ 2, "ng-untouched", null ], [ 2, "ng-touched", null ], [ 2, "ng-pristine", null ], [ 2, "ng-dirty", null ], [ 2, "ng-valid", null ], [ 2, "ng-invalid", null ], [ 2, "ng-pending", null ] ], [ [ null, "input" ], [ null, "blur" ], [ null, "compositionstart" ], [ null, "compositionend" ] ], (function(_v, en, $event) {
                var ad = !0;
                return "input" === en && (ad = !1 !== core["ɵnov"](_v, 64)._handleInput($event.target.value) && ad), 
                "blur" === en && (ad = !1 !== core["ɵnov"](_v, 64).onTouched() && ad), "compositionstart" === en && (ad = !1 !== core["ɵnov"](_v, 64)._compositionStart() && ad), 
                "compositionend" === en && (ad = !1 !== core["ɵnov"](_v, 64)._compositionEnd($event.target.value) && ad), 
                ad;
            }), null, null)), core["ɵdid"](64, 16384, null, 0, fesm2015_forms.DefaultValueAccessor, [ core.Renderer2, core.ElementRef, [ 2, fesm2015_forms.COMPOSITION_BUFFER_MODE ] ], null, null), core["ɵprd"](1024, null, fesm2015_forms.NG_VALUE_ACCESSOR, (function(p0_0) {
                return [ p0_0 ];
            }), [ fesm2015_forms.DefaultValueAccessor ]), core["ɵdid"](66, 671744, null, 0, fesm2015_forms.FormControlName, [ [ 3, fesm2015_forms.ControlContainer ], [ 8, null ], [ 8, null ], [ 6, fesm2015_forms.NG_VALUE_ACCESSOR ], [ 2, fesm2015_forms["ɵangular_packages_forms_forms_p"] ] ], {
                name: [ 0, "name" ]
            }, null), core["ɵprd"](2048, null, fesm2015_forms.NgControl, null, [ fesm2015_forms.FormControlName ]), core["ɵdid"](68, 16384, null, 0, fesm2015_forms.NgControlStatus, [ [ 4, fesm2015_forms.NgControl ] ], null, null), (_l()(), 
            core["ɵeld"](69, 0, null, null, 3, "div", [ [ "fxFlex", "10" ] ], null, null, null, null, null)), core["ɵdid"](70, 671744, null, 0, flex.b, [ core.ElementRef, esm2015_core.i, esm2015_core.e, flex.i, esm2015_core.f ], {
                fxFlex: [ 0, "fxFlex" ]
            }, null), (_l()(), core["ɵand"](16777216, null, null, 1, null, View_DeployLabelComponent_9)), core["ɵdid"](72, 16384, null, 0, common.NgIf, [ core.ViewContainerRef, core.TemplateRef ], {
                ngIf: [ 0, "ngIf" ]
            }, null) ], (function(_ck, _v) {
                var _co = _v.component;
                _ck(_v, 1, 0, _v.context.index), _ck(_v, 15, 0, "45"), _ck(_v, 19, 0, "key");
                var currVal_49 = !_v.context.$implicit.get("editable").value;
                _ck(_v, 22, 0, "key", currVal_49);
                var currVal_50 = null == _v.context.$implicit.get("key").errors ? null : _v.context.$implicit.get("key").errors.unique;
                _ck(_v, 25, 0, currVal_50);
                var currVal_51 = null == _v.context.$implicit.get("key").errors ? null : _v.context.$implicit.get("key").errors.kdValidLabelKeyPrefixPattern;
                _ck(_v, 27, 0, currVal_51);
                var currVal_52 = null == _v.context.$implicit.get("key").errors ? null : _v.context.$implicit.get("key").errors.kdValidLabelKeyNamePattern;
                _ck(_v, 29, 0, currVal_52);
                var currVal_53 = null == _v.context.$implicit.get("key").errors ? null : _v.context.$implicit.get("key").errors.kdValidLabelKeyPrefixLength;
                _ck(_v, 31, 0, currVal_53);
                var currVal_54 = null == _v.context.$implicit.get("key").errors ? null : _v.context.$implicit.get("key").errors.kdValidLabelKeyNameLength;
                _ck(_v, 33, 0, currVal_54), _ck(_v, 35, 0, "5"), _ck(_v, 47, 0, "40"), _ck(_v, 51, 0, "value");
                var currVal_97 = !_v.context.$implicit.get("editable").value;
                _ck(_v, 54, 0, "value", currVal_97), _ck(_v, 57, 0, "end");
                var currVal_103 = null == _v.context.$implicit.get("value").errors ? null : _v.context.$implicit.get("value").errors.kdValidLabelValuePattern;
                _ck(_v, 60, 0, currVal_103);
                var currVal_104 = null == _v.context.$implicit.get("value").errors ? null : _v.context.$implicit.get("value").errors.maxlength;
                _ck(_v, 62, 0, currVal_104), _ck(_v, 66, 0, "editable"), _ck(_v, 70, 0, "10"), _ck(_v, 72, 0, _co.isRemovable(_v.context.index));
            }), (function(_ck, _v) {
                _ck(_v, 0, 0, core["ɵnov"](_v, 3).ngClassUntouched, core["ɵnov"](_v, 3).ngClassTouched, core["ɵnov"](_v, 3).ngClassPristine, core["ɵnov"](_v, 3).ngClassDirty, core["ɵnov"](_v, 3).ngClassValid, core["ɵnov"](_v, 3).ngClassInvalid, core["ɵnov"](_v, 3).ngClassPending), 
                _ck(_v, 4, 1, [ "standard" == core["ɵnov"](_v, 5).appearance, "fill" == core["ɵnov"](_v, 5).appearance, "outline" == core["ɵnov"](_v, 5).appearance, "legacy" == core["ɵnov"](_v, 5).appearance, core["ɵnov"](_v, 5)._control.errorState, core["ɵnov"](_v, 5)._canLabelFloat, core["ɵnov"](_v, 5)._shouldLabelFloat(), core["ɵnov"](_v, 5)._hasFloatingLabel(), core["ɵnov"](_v, 5)._hideControlPlaceholder(), core["ɵnov"](_v, 5)._control.disabled, core["ɵnov"](_v, 5)._control.autofilled, core["ɵnov"](_v, 5)._control.focused, "accent" == core["ɵnov"](_v, 5).color, "warn" == core["ɵnov"](_v, 5).color, core["ɵnov"](_v, 5)._shouldForward("untouched"), core["ɵnov"](_v, 5)._shouldForward("touched"), core["ɵnov"](_v, 5)._shouldForward("pristine"), core["ɵnov"](_v, 5)._shouldForward("dirty"), core["ɵnov"](_v, 5)._shouldForward("valid"), core["ɵnov"](_v, 5)._shouldForward("invalid"), core["ɵnov"](_v, 5)._shouldForward("pending"), !core["ɵnov"](_v, 5)._animationsEnabled ]), 
                _ck(_v, 16, 1, [ core["ɵnov"](_v, 21).ngClassUntouched, core["ɵnov"](_v, 21).ngClassTouched, core["ɵnov"](_v, 21).ngClassPristine, core["ɵnov"](_v, 21).ngClassDirty, core["ɵnov"](_v, 21).ngClassValid, core["ɵnov"](_v, 21).ngClassInvalid, core["ɵnov"](_v, 21).ngClassPending, core["ɵnov"](_v, 22)._isServer, core["ɵnov"](_v, 22).id, core["ɵnov"](_v, 22).placeholder, core["ɵnov"](_v, 22).disabled, core["ɵnov"](_v, 22).required, core["ɵnov"](_v, 22).readonly && !core["ɵnov"](_v, 22)._isNativeSelect || null, core["ɵnov"](_v, 22)._ariaDescribedby || null, core["ɵnov"](_v, 22).errorState, core["ɵnov"](_v, 22).required.toString() ]), 
                _ck(_v, 36, 1, [ "standard" == core["ɵnov"](_v, 37).appearance, "fill" == core["ɵnov"](_v, 37).appearance, "outline" == core["ɵnov"](_v, 37).appearance, "legacy" == core["ɵnov"](_v, 37).appearance, core["ɵnov"](_v, 37)._control.errorState, core["ɵnov"](_v, 37)._canLabelFloat, core["ɵnov"](_v, 37)._shouldLabelFloat(), core["ɵnov"](_v, 37)._hasFloatingLabel(), core["ɵnov"](_v, 37)._hideControlPlaceholder(), core["ɵnov"](_v, 37)._control.disabled, core["ɵnov"](_v, 37)._control.autofilled, core["ɵnov"](_v, 37)._control.focused, "accent" == core["ɵnov"](_v, 37).color, "warn" == core["ɵnov"](_v, 37).color, core["ɵnov"](_v, 37)._shouldForward("untouched"), core["ɵnov"](_v, 37)._shouldForward("touched"), core["ɵnov"](_v, 37)._shouldForward("pristine"), core["ɵnov"](_v, 37)._shouldForward("dirty"), core["ɵnov"](_v, 37)._shouldForward("valid"), core["ɵnov"](_v, 37)._shouldForward("invalid"), core["ɵnov"](_v, 37)._shouldForward("pending"), !core["ɵnov"](_v, 37)._animationsEnabled ]), 
                _ck(_v, 48, 1, [ core["ɵnov"](_v, 53).ngClassUntouched, core["ɵnov"](_v, 53).ngClassTouched, core["ɵnov"](_v, 53).ngClassPristine, core["ɵnov"](_v, 53).ngClassDirty, core["ɵnov"](_v, 53).ngClassValid, core["ɵnov"](_v, 53).ngClassInvalid, core["ɵnov"](_v, 53).ngClassPending, core["ɵnov"](_v, 54)._isServer, core["ɵnov"](_v, 54).id, core["ɵnov"](_v, 54).placeholder, core["ɵnov"](_v, 54).disabled, core["ɵnov"](_v, 54).required, core["ɵnov"](_v, 54).readonly && !core["ɵnov"](_v, 54)._isNativeSelect || null, core["ɵnov"](_v, 54)._ariaDescribedby || null, core["ɵnov"](_v, 54).errorState, core["ɵnov"](_v, 54).required.toString() ]), 
                _ck(_v, 56, 0, "end" == core["ɵnov"](_v, 57).align, core["ɵnov"](_v, 57).id, null);
                var currVal_102 = null == _v.context.$implicit.get("value").value ? null : _v.context.$implicit.get("value").value.length;
                _ck(_v, 58, 0, currVal_102), _ck(_v, 63, 0, core["ɵnov"](_v, 68).ngClassUntouched, core["ɵnov"](_v, 68).ngClassTouched, core["ɵnov"](_v, 68).ngClassPristine, core["ɵnov"](_v, 68).ngClassDirty, core["ɵnov"](_v, 68).ngClassValid, core["ɵnov"](_v, 68).ngClassInvalid, core["ɵnov"](_v, 68).ngClassPending);
            }));
        }
        function View_DeployLabelComponent_0(_l) {
            return core["ɵvid"](0, [ (_l()(), core["ɵeld"](0, 0, null, null, 9, null, null, null, null, (function(_v, en, $event) {
                var ad = !0;
                return "submit" === en && (ad = !1 !== core["ɵnov"](_v, 1).onSubmit($event) && ad), 
                "reset" === en && (ad = !1 !== core["ɵnov"](_v, 1).onReset() && ad), ad;
            }), null, null)), core["ɵdid"](1, 540672, null, 0, fesm2015_forms.FormGroupDirective, [ [ 8, null ], [ 8, null ] ], {
                form: [ 0, "form" ]
            }, null), core["ɵprd"](2048, null, fesm2015_forms.ControlContainer, null, [ fesm2015_forms.FormGroupDirective ]), core["ɵdid"](3, 16384, null, 0, fesm2015_forms.NgControlStatusGroup, [ [ 4, fesm2015_forms.ControlContainer ] ], null, null), (_l()(), 
            core["ɵeld"](4, 0, null, null, 5, "div", [ [ "formArrayName", "labels" ] ], [ [ 2, "ng-untouched", null ], [ 2, "ng-touched", null ], [ 2, "ng-pristine", null ], [ 2, "ng-dirty", null ], [ 2, "ng-valid", null ], [ 2, "ng-invalid", null ], [ 2, "ng-pending", null ] ], null, null, null, null)), core["ɵdid"](5, 212992, null, 0, fesm2015_forms.FormArrayName, [ [ 3, fesm2015_forms.ControlContainer ], [ 8, null ], [ 8, null ] ], {
                name: [ 0, "name" ]
            }, null), core["ɵprd"](2048, null, fesm2015_forms.ControlContainer, null, [ fesm2015_forms.FormArrayName ]), core["ɵdid"](7, 16384, null, 0, fesm2015_forms.NgControlStatusGroup, [ [ 4, fesm2015_forms.ControlContainer ] ], null, null), (_l()(), 
            core["ɵand"](16777216, null, null, 1, null, View_DeployLabelComponent_1)), core["ɵdid"](9, 278528, null, 0, common.NgForOf, [ core.ViewContainerRef, core.TemplateRef, core.IterableDiffers ], {
                ngForOf: [ 0, "ngForOf" ]
            }, null) ], (function(_ck, _v) {
                var _co = _v.component;
                _ck(_v, 1, 0, _co.labelForm), _ck(_v, 5, 0, "labels"), _ck(_v, 9, 0, _co.labels.controls);
            }), (function(_ck, _v) {
                _ck(_v, 4, 0, core["ɵnov"](_v, 7).ngClassUntouched, core["ɵnov"](_v, 7).ngClassTouched, core["ɵnov"](_v, 7).ngClassPristine, core["ɵnov"](_v, 7).ngClassDirty, core["ɵnov"](_v, 7).ngClassValid, core["ɵnov"](_v, 7).ngClassInvalid, core["ɵnov"](_v, 7).ngClassPending);
            }));
        }
        var fesm2015_checkbox = __webpack_require__("pMoy"), RenderType_MatCheckbox = core["ɵcrt"]({
            encapsulation: 2,
            styles: [ "@keyframes mat-checkbox-fade-in-background{0%{opacity:0}50%{opacity:1}}@keyframes mat-checkbox-fade-out-background{0%,50%{opacity:1}100%{opacity:0}}@keyframes mat-checkbox-unchecked-checked-checkmark-path{0%,50%{stroke-dashoffset:22.910259}50%{animation-timing-function:cubic-bezier(0, 0, 0.2, 0.1)}100%{stroke-dashoffset:0}}@keyframes mat-checkbox-unchecked-indeterminate-mixedmark{0%,68.2%{transform:scaleX(0)}68.2%{animation-timing-function:cubic-bezier(0, 0, 0, 1)}100%{transform:scaleX(1)}}@keyframes mat-checkbox-checked-unchecked-checkmark-path{from{animation-timing-function:cubic-bezier(0.4, 0, 1, 1);stroke-dashoffset:0}to{stroke-dashoffset:-22.910259}}@keyframes mat-checkbox-checked-indeterminate-checkmark{from{animation-timing-function:cubic-bezier(0, 0, 0.2, 0.1);opacity:1;transform:rotate(0deg)}to{opacity:0;transform:rotate(45deg)}}@keyframes mat-checkbox-indeterminate-checked-checkmark{from{animation-timing-function:cubic-bezier(0.14, 0, 0, 1);opacity:0;transform:rotate(45deg)}to{opacity:1;transform:rotate(360deg)}}@keyframes mat-checkbox-checked-indeterminate-mixedmark{from{animation-timing-function:cubic-bezier(0, 0, 0.2, 0.1);opacity:0;transform:rotate(-45deg)}to{opacity:1;transform:rotate(0deg)}}@keyframes mat-checkbox-indeterminate-checked-mixedmark{from{animation-timing-function:cubic-bezier(0.14, 0, 0, 1);opacity:1;transform:rotate(0deg)}to{opacity:0;transform:rotate(315deg)}}@keyframes mat-checkbox-indeterminate-unchecked-mixedmark{0%{animation-timing-function:linear;opacity:1;transform:scaleX(1)}32.8%,100%{opacity:0;transform:scaleX(0)}}.mat-checkbox-background,.mat-checkbox-frame{top:0;left:0;right:0;bottom:0;position:absolute;border-radius:2px;box-sizing:border-box;pointer-events:none}.mat-checkbox{transition:background 400ms cubic-bezier(0.25, 0.8, 0.25, 1),box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);cursor:pointer;-webkit-tap-highlight-color:transparent}._mat-animation-noopable.mat-checkbox{transition:none;animation:none}.mat-checkbox .mat-ripple-element:not(.mat-checkbox-persistent-ripple){opacity:.16}.mat-checkbox-layout{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:inherit;align-items:baseline;vertical-align:middle;display:inline-flex;white-space:nowrap}.mat-checkbox-label{-webkit-user-select:auto;-moz-user-select:auto;-ms-user-select:auto;user-select:auto}.mat-checkbox-inner-container{display:inline-block;height:16px;line-height:0;margin:auto;margin-right:8px;order:0;position:relative;vertical-align:middle;white-space:nowrap;width:16px;flex-shrink:0}[dir=rtl] .mat-checkbox-inner-container{margin-left:8px;margin-right:auto}.mat-checkbox-inner-container-no-side-margin{margin-left:0;margin-right:0}.mat-checkbox-frame{background-color:transparent;transition:border-color 90ms cubic-bezier(0, 0, 0.2, 0.1);border-width:2px;border-style:solid}._mat-animation-noopable .mat-checkbox-frame{transition:none}.mat-checkbox.cdk-keyboard-focused .cdk-high-contrast-active .mat-checkbox-frame{border-style:dotted}.mat-checkbox-background{align-items:center;display:inline-flex;justify-content:center;transition:background-color 90ms cubic-bezier(0, 0, 0.2, 0.1),opacity 90ms cubic-bezier(0, 0, 0.2, 0.1)}._mat-animation-noopable .mat-checkbox-background{transition:none}.mat-checkbox-persistent-ripple{width:100%;height:100%;transform:none}.mat-checkbox-inner-container:hover .mat-checkbox-persistent-ripple{opacity:.04}.mat-checkbox.cdk-keyboard-focused .mat-checkbox-persistent-ripple{opacity:.12}.mat-checkbox-persistent-ripple,.mat-checkbox.mat-checkbox-disabled .mat-checkbox-inner-container:hover .mat-checkbox-persistent-ripple{opacity:0}@media(hover: none){.mat-checkbox-inner-container:hover .mat-checkbox-persistent-ripple{display:none}}.mat-checkbox-checkmark{top:0;left:0;right:0;bottom:0;position:absolute;width:100%}.mat-checkbox-checkmark-path{stroke-dashoffset:22.910259;stroke-dasharray:22.910259;stroke-width:2.1333333333px}.mat-checkbox-mixedmark{width:calc(100% - 6px);height:2px;opacity:0;transform:scaleX(0) rotate(0deg);border-radius:2px}.cdk-high-contrast-active .mat-checkbox-mixedmark{height:0;border-top:solid 2px;margin-top:2px}.mat-checkbox-label-before .mat-checkbox-inner-container{order:1;margin-left:8px;margin-right:auto}[dir=rtl] .mat-checkbox-label-before .mat-checkbox-inner-container{margin-left:auto;margin-right:8px}.mat-checkbox-checked .mat-checkbox-checkmark{opacity:1}.mat-checkbox-checked .mat-checkbox-checkmark-path{stroke-dashoffset:0}.mat-checkbox-checked .mat-checkbox-mixedmark{transform:scaleX(1) rotate(-45deg)}.mat-checkbox-indeterminate .mat-checkbox-checkmark{opacity:0;transform:rotate(45deg)}.mat-checkbox-indeterminate .mat-checkbox-checkmark-path{stroke-dashoffset:0}.mat-checkbox-indeterminate .mat-checkbox-mixedmark{opacity:1;transform:scaleX(1) rotate(0deg)}.mat-checkbox-unchecked .mat-checkbox-background{background-color:transparent}.mat-checkbox-disabled{cursor:default}.mat-checkbox-anim-unchecked-checked .mat-checkbox-background{animation:180ms linear 0ms mat-checkbox-fade-in-background}.mat-checkbox-anim-unchecked-checked .mat-checkbox-checkmark-path{animation:180ms linear 0ms mat-checkbox-unchecked-checked-checkmark-path}.mat-checkbox-anim-unchecked-indeterminate .mat-checkbox-background{animation:180ms linear 0ms mat-checkbox-fade-in-background}.mat-checkbox-anim-unchecked-indeterminate .mat-checkbox-mixedmark{animation:90ms linear 0ms mat-checkbox-unchecked-indeterminate-mixedmark}.mat-checkbox-anim-checked-unchecked .mat-checkbox-background{animation:180ms linear 0ms mat-checkbox-fade-out-background}.mat-checkbox-anim-checked-unchecked .mat-checkbox-checkmark-path{animation:90ms linear 0ms mat-checkbox-checked-unchecked-checkmark-path}.mat-checkbox-anim-checked-indeterminate .mat-checkbox-checkmark{animation:90ms linear 0ms mat-checkbox-checked-indeterminate-checkmark}.mat-checkbox-anim-checked-indeterminate .mat-checkbox-mixedmark{animation:90ms linear 0ms mat-checkbox-checked-indeterminate-mixedmark}.mat-checkbox-anim-indeterminate-checked .mat-checkbox-checkmark{animation:500ms linear 0ms mat-checkbox-indeterminate-checked-checkmark}.mat-checkbox-anim-indeterminate-checked .mat-checkbox-mixedmark{animation:500ms linear 0ms mat-checkbox-indeterminate-checked-mixedmark}.mat-checkbox-anim-indeterminate-unchecked .mat-checkbox-background{animation:180ms linear 0ms mat-checkbox-fade-out-background}.mat-checkbox-anim-indeterminate-unchecked .mat-checkbox-mixedmark{animation:300ms linear 0ms mat-checkbox-indeterminate-unchecked-mixedmark}.mat-checkbox-input{bottom:0;left:50%}.mat-checkbox .mat-checkbox-ripple{position:absolute;left:calc(50% - 20px);top:calc(50% - 20px);height:40px;width:40px;z-index:1;pointer-events:none}\n" ],
            data: {}
        });
        function View_MatCheckbox_0(_l) {
            return core["ɵvid"](2, [ core["ɵqud"](671088640, 1, {
                _inputElement: 0
            }), core["ɵqud"](671088640, 2, {
                ripple: 0
            }), (_l()(), core["ɵeld"](2, 0, [ [ "label", 1 ] ], null, 16, "label", [ [ "class", "mat-checkbox-layout" ] ], [ [ 1, "for", 0 ] ], null, null, null, null)), (_l()(), 
            core["ɵeld"](3, 0, null, null, 10, "div", [ [ "class", "mat-checkbox-inner-container" ] ], [ [ 2, "mat-checkbox-inner-container-no-side-margin", null ] ], null, null, null, null)), (_l()(), 
            core["ɵeld"](4, 0, [ [ 1, 0 ], [ "input", 1 ] ], null, 0, "input", [ [ "class", "mat-checkbox-input cdk-visually-hidden" ], [ "type", "checkbox" ] ], [ [ 8, "id", 0 ], [ 8, "required", 0 ], [ 8, "checked", 0 ], [ 1, "value", 0 ], [ 8, "disabled", 0 ], [ 1, "name", 0 ], [ 8, "tabIndex", 0 ], [ 1, "aria-label", 0 ], [ 1, "aria-labelledby", 0 ], [ 1, "aria-checked", 0 ] ], [ [ null, "change" ], [ null, "click" ] ], (function(_v, en, $event) {
                var ad = !0, _co = _v.component;
                return "change" === en && (ad = !1 !== _co._onInteractionEvent($event) && ad), "click" === en && (ad = !1 !== _co._onInputClick($event) && ad), 
                ad;
            }), null, null)), (_l()(), core["ɵeld"](5, 0, null, null, 3, "div", [ [ "class", "mat-checkbox-ripple mat-ripple" ], [ "matRipple", "" ] ], [ [ 2, "mat-ripple-unbounded", null ] ], null, null, null, null)), core["ɵdid"](6, 212992, [ [ 2, 4 ] ], 0, fesm2015_core.t, [ core.ElementRef, core.NgZone, platform.a, [ 2, fesm2015_core.k ], [ 2, animations.a ] ], {
                centered: [ 0, "centered" ],
                radius: [ 1, "radius" ],
                animation: [ 2, "animation" ],
                disabled: [ 3, "disabled" ],
                trigger: [ 4, "trigger" ]
            }, null), core["ɵpod"](7, {
                enterDuration: 0
            }), (_l()(), core["ɵeld"](8, 0, null, null, 0, "div", [ [ "class", "mat-ripple-element mat-checkbox-persistent-ripple" ] ], null, null, null, null, null)), (_l()(), 
            core["ɵeld"](9, 0, null, null, 0, "div", [ [ "class", "mat-checkbox-frame" ] ], null, null, null, null, null)), (_l()(), 
            core["ɵeld"](10, 0, null, null, 3, "div", [ [ "class", "mat-checkbox-background" ] ], null, null, null, null, null)), (_l()(), 
            core["ɵeld"](11, 0, null, null, 1, ":svg:svg", [ [ ":xml:space", "preserve" ], [ "class", "mat-checkbox-checkmark" ], [ "focusable", "false" ], [ "version", "1.1" ], [ "viewBox", "0 0 24 24" ] ], null, null, null, null, null)), (_l()(), 
            core["ɵeld"](12, 0, null, null, 0, ":svg:path", [ [ "class", "mat-checkbox-checkmark-path" ], [ "d", "M4.1,12.7 9,17.6 20.3,6.3" ], [ "fill", "none" ], [ "stroke", "white" ] ], null, null, null, null, null)), (_l()(), 
            core["ɵeld"](13, 0, null, null, 0, "div", [ [ "class", "mat-checkbox-mixedmark" ] ], null, null, null, null, null)), (_l()(), 
            core["ɵeld"](14, 0, [ [ "checkboxLabel", 1 ] ], null, 4, "span", [ [ "class", "mat-checkbox-label" ] ], null, [ [ null, "cdkObserveContent" ] ], (function(_v, en, $event) {
                var ad = !0;
                return "cdkObserveContent" === en && (ad = !1 !== _v.component._onLabelTextChange() && ad), 
                ad;
            }), null, null)), core["ɵdid"](15, 1196032, null, 0, observers.a, [ observers.b, core.ElementRef, core.NgZone ], null, {
                event: "cdkObserveContent"
            }), (_l()(), core["ɵeld"](16, 0, null, null, 1, "span", [ [ "style", "display:none" ] ], null, null, null, null, null)), (_l()(), 
            core["ɵted"](-1, null, [ " " ])), core["ɵncd"](null, 0) ], (function(_ck, _v) {
                var _co = _v.component, currVal_15 = _ck(_v, 7, 0, 150);
                _ck(_v, 6, 0, !0, 20, currVal_15, _co._isRippleDisabled(), core["ɵnov"](_v, 2));
            }), (function(_ck, _v) {
                var _co = _v.component;
                _ck(_v, 2, 0, _co.inputId), _ck(_v, 3, 0, !core["ɵnov"](_v, 14).textContent || !core["ɵnov"](_v, 14).textContent.trim()), 
                _ck(_v, 4, 0, _co.inputId, _co.required, _co.checked, _co.value, _co.disabled, _co.name, _co.tabIndex, _co.ariaLabel || null, _co.ariaLabelledby, _co._getAriaChecked()), 
                _ck(_v, 5, 0, core["ɵnov"](_v, 6).unbounded);
            }));
        }
        class component_EnvironmentVariablesComponent {
            constructor(fb_) {
                this.fb_ = fb_, this.namePattern = new RegExp("^[A-Za-z_][A-Za-z0-9_]*$"), this.propagateChange = _ => {};
            }
            ngOnInit() {
                this.form = this.fb_.group({
                    variables: this.fb_.array([ this.newVariable() ])
                }), this.form.valueChanges.subscribe(v => {
                    this.propagateChange(v);
                });
            }
            validate(_) {
                return this.form.valid ? null : {
                    labelValid: {
                        value: this.form.errors
                    }
                };
            }
            get variables() {
                return this.form.get("variables");
            }
            addVariableIfNeeed() {
                const last = this.variables.at(this.variables.length - 1);
                this.isVariableFilled(last) && last.valid && this.variables.push(this.newVariable());
            }
            isVariableFilled(variable) {
                return !!variable.get("name").value;
            }
            newVariable() {
                return this.fb_.group({
                    name: [ "", fesm2015_forms.Validators.pattern(this.namePattern) ],
                    value: ""
                });
            }
            isRemovable(index) {
                return index !== this.variables.length - 1;
            }
            remove(index) {
                this.variables.removeAt(index);
            }
            writeValue() {}
            registerOnChange(fn) {
                this.propagateChange = fn;
            }
            registerOnTouched() {}
        }
        var RenderType_EnvironmentVariablesComponent = core["ɵcrt"]({
            encapsulation: 2,
            styles: [],
            data: {}
        });
        function View_EnvironmentVariablesComponent_2(_l) {
            return core["ɵvid"](0, [ (_l()(), core["ɵeld"](0, 0, null, null, 2, "mat-error", [ [ "class", "mat-error" ], [ "role", "alert" ] ], [ [ 1, "id", 0 ] ], null, null, null, null)), core["ɵdid"](1, 16384, [ [ 6, 4 ] ], 0, form_field.b, [], null, null), (_l()(), 
            core["ɵted"](-1, null, [ " Variable name must be a valid C identifier. " ])) ], null, (function(_ck, _v) {
                _ck(_v, 0, 0, core["ɵnov"](_v, 1).id);
            }));
        }
        function View_EnvironmentVariablesComponent_3(_l) {
            return core["ɵvid"](0, [ (_l()(), core["ɵeld"](0, 0, null, null, 4, "button", [ [ "mat-icon-button", "" ] ], [ [ 1, "disabled", 0 ], [ 2, "_mat-animation-noopable", null ] ], [ [ null, "click" ] ], (function(_v, en, $event) {
                var ad = !0;
                return "click" === en && (ad = !1 !== _v.component.remove(_v.parent.context.index) && ad), 
                ad;
            }), button_index_ngfactory.d, button_index_ngfactory.b)), core["ɵdid"](1, 180224, null, 0, fesm2015_button.b, [ core.ElementRef, a11y.f, [ 2, animations.a ] ], null, null), (_l()(), 
            core["ɵeld"](2, 0, null, 0, 2, "mat-icon", [ [ "class", "mat-icon notranslate" ], [ "role", "img" ] ], [ [ 2, "mat-icon-inline", null ], [ 2, "mat-icon-no-color", null ] ], null, null, icon_index_ngfactory.b, icon_index_ngfactory.a)), core["ɵdid"](3, 9158656, null, 0, icon.b, [ core.ElementRef, icon.d, [ 8, null ], [ 2, icon.a ], [ 2, core.ErrorHandler ] ], null, null), (_l()(), 
            core["ɵted"](-1, 0, [ "delete" ])) ], (function(_ck, _v) {
                _ck(_v, 3, 0);
            }), (function(_ck, _v) {
                _ck(_v, 0, 0, core["ɵnov"](_v, 1).disabled || null, "NoopAnimations" === core["ɵnov"](_v, 1)._animationMode), 
                _ck(_v, 2, 0, core["ɵnov"](_v, 3).inline, "primary" !== core["ɵnov"](_v, 3).color && "accent" !== core["ɵnov"](_v, 3).color && "warn" !== core["ɵnov"](_v, 3).color);
            }));
        }
        function View_EnvironmentVariablesComponent_1(_l) {
            return core["ɵvid"](0, [ (_l()(), core["ɵeld"](0, 0, null, null, 51, "div", [], [ [ 2, "ng-untouched", null ], [ 2, "ng-touched", null ], [ 2, "ng-pristine", null ], [ 2, "ng-dirty", null ], [ 2, "ng-valid", null ], [ 2, "ng-invalid", null ], [ 2, "ng-pending", null ] ], null, null, null, null)), core["ɵdid"](1, 212992, null, 0, fesm2015_forms.FormGroupName, [ [ 3, fesm2015_forms.ControlContainer ], [ 8, null ], [ 8, null ] ], {
                name: [ 0, "name" ]
            }, null), core["ɵprd"](2048, null, fesm2015_forms.ControlContainer, null, [ fesm2015_forms.FormGroupName ]), core["ɵdid"](3, 16384, null, 0, fesm2015_forms.NgControlStatusGroup, [ [ 4, fesm2015_forms.ControlContainer ] ], null, null), (_l()(), 
            core["ɵeld"](4, 0, null, null, 21, "mat-form-field", [ [ "class", "mat-form-field" ], [ "fxFlex", "auto" ] ], [ [ 2, "mat-form-field-appearance-standard", null ], [ 2, "mat-form-field-appearance-fill", null ], [ 2, "mat-form-field-appearance-outline", null ], [ 2, "mat-form-field-appearance-legacy", null ], [ 2, "mat-form-field-invalid", null ], [ 2, "mat-form-field-can-float", null ], [ 2, "mat-form-field-should-float", null ], [ 2, "mat-form-field-has-label", null ], [ 2, "mat-form-field-hide-placeholder", null ], [ 2, "mat-form-field-disabled", null ], [ 2, "mat-form-field-autofilled", null ], [ 2, "mat-focused", null ], [ 2, "mat-accent", null ], [ 2, "mat-warn", null ], [ 2, "ng-untouched", null ], [ 2, "ng-touched", null ], [ 2, "ng-pristine", null ], [ 2, "ng-dirty", null ], [ 2, "ng-valid", null ], [ 2, "ng-invalid", null ], [ 2, "ng-pending", null ], [ 2, "_mat-animation-noopable", null ] ], null, null, form_field_index_ngfactory.b, form_field_index_ngfactory.a)), core["ɵdid"](5, 7520256, null, 9, form_field.c, [ core.ElementRef, core.ChangeDetectorRef, [ 2, fesm2015_core.h ], [ 2, bidi.b ], [ 2, form_field.a ], platform.a, core.NgZone, [ 2, animations.a ] ], null, null), core["ɵqud"](603979776, 1, {
                _controlNonStatic: 0
            }), core["ɵqud"](335544320, 2, {
                _controlStatic: 0
            }), core["ɵqud"](603979776, 3, {
                _labelChildNonStatic: 0
            }), core["ɵqud"](335544320, 4, {
                _labelChildStatic: 0
            }), core["ɵqud"](603979776, 5, {
                _placeholderChild: 0
            }), core["ɵqud"](603979776, 6, {
                _errorChildren: 1
            }), core["ɵqud"](603979776, 7, {
                _hintChildren: 1
            }), core["ɵqud"](603979776, 8, {
                _prefixChildren: 1
            }), core["ɵqud"](603979776, 9, {
                _suffixChildren: 1
            }), core["ɵdid"](15, 671744, null, 0, flex.b, [ core.ElementRef, esm2015_core.i, esm2015_core.e, flex.i, esm2015_core.f ], {
                fxFlex: [ 0, "fxFlex" ]
            }, null), (_l()(), core["ɵeld"](16, 0, null, 1, 7, "input", [ [ "class", "mat-input-element mat-form-field-autofill-control" ], [ "formControlName", "name" ], [ "matInput", "" ], [ "name", "name" ], [ "placeholder", "Name" ] ], [ [ 2, "ng-untouched", null ], [ 2, "ng-touched", null ], [ 2, "ng-pristine", null ], [ 2, "ng-dirty", null ], [ 2, "ng-valid", null ], [ 2, "ng-invalid", null ], [ 2, "ng-pending", null ], [ 2, "mat-input-server", null ], [ 1, "id", 0 ], [ 1, "placeholder", 0 ], [ 8, "disabled", 0 ], [ 8, "required", 0 ], [ 1, "readonly", 0 ], [ 1, "aria-describedby", 0 ], [ 1, "aria-invalid", 0 ], [ 1, "aria-required", 0 ] ], [ [ null, "change" ], [ null, "input" ], [ null, "blur" ], [ null, "compositionstart" ], [ null, "compositionend" ], [ null, "focus" ] ], (function(_v, en, $event) {
                var ad = !0, _co = _v.component;
                return "input" === en && (ad = !1 !== core["ɵnov"](_v, 17)._handleInput($event.target.value) && ad), 
                "blur" === en && (ad = !1 !== core["ɵnov"](_v, 17).onTouched() && ad), "compositionstart" === en && (ad = !1 !== core["ɵnov"](_v, 17)._compositionStart() && ad), 
                "compositionend" === en && (ad = !1 !== core["ɵnov"](_v, 17)._compositionEnd($event.target.value) && ad), 
                "blur" === en && (ad = !1 !== core["ɵnov"](_v, 22)._focusChanged(!1) && ad), "focus" === en && (ad = !1 !== core["ɵnov"](_v, 22)._focusChanged(!0) && ad), 
                "input" === en && (ad = !1 !== core["ɵnov"](_v, 22)._onInput() && ad), "change" === en && (ad = !1 !== _co.addVariableIfNeeed(_v.context.index) && ad), 
                ad;
            }), null, null)), core["ɵdid"](17, 16384, null, 0, fesm2015_forms.DefaultValueAccessor, [ core.Renderer2, core.ElementRef, [ 2, fesm2015_forms.COMPOSITION_BUFFER_MODE ] ], null, null), core["ɵprd"](1024, null, fesm2015_forms.NG_VALUE_ACCESSOR, (function(p0_0) {
                return [ p0_0 ];
            }), [ fesm2015_forms.DefaultValueAccessor ]), core["ɵdid"](19, 671744, null, 0, fesm2015_forms.FormControlName, [ [ 3, fesm2015_forms.ControlContainer ], [ 8, null ], [ 8, null ], [ 6, fesm2015_forms.NG_VALUE_ACCESSOR ], [ 2, fesm2015_forms["ɵangular_packages_forms_forms_p"] ] ], {
                name: [ 0, "name" ]
            }, null), core["ɵprd"](2048, null, fesm2015_forms.NgControl, null, [ fesm2015_forms.FormControlName ]), core["ɵdid"](21, 16384, null, 0, fesm2015_forms.NgControlStatus, [ [ 4, fesm2015_forms.NgControl ] ], null, null), core["ɵdid"](22, 999424, null, 0, input.a, [ core.ElementRef, platform.a, [ 6, fesm2015_forms.NgControl ], [ 2, fesm2015_forms.NgForm ], [ 2, fesm2015_forms.FormGroupDirective ], fesm2015_core.d, [ 8, null ], text_field.a, core.NgZone ], {
                placeholder: [ 0, "placeholder" ]
            }, null), core["ɵprd"](2048, [ [ 1, 4 ], [ 2, 4 ] ], form_field.d, null, [ input.a ]), (_l()(), 
            core["ɵand"](16777216, null, 5, 1, null, View_EnvironmentVariablesComponent_2)), core["ɵdid"](25, 16384, null, 0, common.NgIf, [ core.ViewContainerRef, core.TemplateRef ], {
                ngIf: [ 0, "ngIf" ]
            }, null), (_l()(), core["ɵeld"](26, 0, null, null, 1, "div", [ [ "fxFlex", "5" ] ], null, null, null, null, null)), core["ɵdid"](27, 671744, null, 0, flex.b, [ core.ElementRef, esm2015_core.i, esm2015_core.e, flex.i, esm2015_core.f ], {
                fxFlex: [ 0, "fxFlex" ]
            }, null), (_l()(), core["ɵeld"](28, 0, null, null, 19, "mat-form-field", [ [ "class", "mat-form-field" ], [ "fxFlex", "auto" ] ], [ [ 2, "mat-form-field-appearance-standard", null ], [ 2, "mat-form-field-appearance-fill", null ], [ 2, "mat-form-field-appearance-outline", null ], [ 2, "mat-form-field-appearance-legacy", null ], [ 2, "mat-form-field-invalid", null ], [ 2, "mat-form-field-can-float", null ], [ 2, "mat-form-field-should-float", null ], [ 2, "mat-form-field-has-label", null ], [ 2, "mat-form-field-hide-placeholder", null ], [ 2, "mat-form-field-disabled", null ], [ 2, "mat-form-field-autofilled", null ], [ 2, "mat-focused", null ], [ 2, "mat-accent", null ], [ 2, "mat-warn", null ], [ 2, "ng-untouched", null ], [ 2, "ng-touched", null ], [ 2, "ng-pristine", null ], [ 2, "ng-dirty", null ], [ 2, "ng-valid", null ], [ 2, "ng-invalid", null ], [ 2, "ng-pending", null ], [ 2, "_mat-animation-noopable", null ] ], null, null, form_field_index_ngfactory.b, form_field_index_ngfactory.a)), core["ɵdid"](29, 7520256, null, 9, form_field.c, [ core.ElementRef, core.ChangeDetectorRef, [ 2, fesm2015_core.h ], [ 2, bidi.b ], [ 2, form_field.a ], platform.a, core.NgZone, [ 2, animations.a ] ], null, null), core["ɵqud"](603979776, 10, {
                _controlNonStatic: 0
            }), core["ɵqud"](335544320, 11, {
                _controlStatic: 0
            }), core["ɵqud"](603979776, 12, {
                _labelChildNonStatic: 0
            }), core["ɵqud"](335544320, 13, {
                _labelChildStatic: 0
            }), core["ɵqud"](603979776, 14, {
                _placeholderChild: 0
            }), core["ɵqud"](603979776, 15, {
                _errorChildren: 1
            }), core["ɵqud"](603979776, 16, {
                _hintChildren: 1
            }), core["ɵqud"](603979776, 17, {
                _prefixChildren: 1
            }), core["ɵqud"](603979776, 18, {
                _suffixChildren: 1
            }), core["ɵdid"](39, 671744, null, 0, flex.b, [ core.ElementRef, esm2015_core.i, esm2015_core.e, flex.i, esm2015_core.f ], {
                fxFlex: [ 0, "fxFlex" ]
            }, null), (_l()(), core["ɵeld"](40, 0, null, 1, 7, "input", [ [ "class", "mat-input-element mat-form-field-autofill-control" ], [ "formControlName", "value" ], [ "matInput", "" ], [ "name", "value" ], [ "placeholder", "Value" ] ], [ [ 2, "ng-untouched", null ], [ 2, "ng-touched", null ], [ 2, "ng-pristine", null ], [ 2, "ng-dirty", null ], [ 2, "ng-valid", null ], [ 2, "ng-invalid", null ], [ 2, "ng-pending", null ], [ 2, "mat-input-server", null ], [ 1, "id", 0 ], [ 1, "placeholder", 0 ], [ 8, "disabled", 0 ], [ 8, "required", 0 ], [ 1, "readonly", 0 ], [ 1, "aria-describedby", 0 ], [ 1, "aria-invalid", 0 ], [ 1, "aria-required", 0 ] ], [ [ null, "input" ], [ null, "blur" ], [ null, "compositionstart" ], [ null, "compositionend" ], [ null, "focus" ] ], (function(_v, en, $event) {
                var ad = !0;
                return "input" === en && (ad = !1 !== core["ɵnov"](_v, 41)._handleInput($event.target.value) && ad), 
                "blur" === en && (ad = !1 !== core["ɵnov"](_v, 41).onTouched() && ad), "compositionstart" === en && (ad = !1 !== core["ɵnov"](_v, 41)._compositionStart() && ad), 
                "compositionend" === en && (ad = !1 !== core["ɵnov"](_v, 41)._compositionEnd($event.target.value) && ad), 
                "blur" === en && (ad = !1 !== core["ɵnov"](_v, 46)._focusChanged(!1) && ad), "focus" === en && (ad = !1 !== core["ɵnov"](_v, 46)._focusChanged(!0) && ad), 
                "input" === en && (ad = !1 !== core["ɵnov"](_v, 46)._onInput() && ad), ad;
            }), null, null)), core["ɵdid"](41, 16384, null, 0, fesm2015_forms.DefaultValueAccessor, [ core.Renderer2, core.ElementRef, [ 2, fesm2015_forms.COMPOSITION_BUFFER_MODE ] ], null, null), core["ɵprd"](1024, null, fesm2015_forms.NG_VALUE_ACCESSOR, (function(p0_0) {
                return [ p0_0 ];
            }), [ fesm2015_forms.DefaultValueAccessor ]), core["ɵdid"](43, 671744, null, 0, fesm2015_forms.FormControlName, [ [ 3, fesm2015_forms.ControlContainer ], [ 8, null ], [ 8, null ], [ 6, fesm2015_forms.NG_VALUE_ACCESSOR ], [ 2, fesm2015_forms["ɵangular_packages_forms_forms_p"] ] ], {
                name: [ 0, "name" ]
            }, null), core["ɵprd"](2048, null, fesm2015_forms.NgControl, null, [ fesm2015_forms.FormControlName ]), core["ɵdid"](45, 16384, null, 0, fesm2015_forms.NgControlStatus, [ [ 4, fesm2015_forms.NgControl ] ], null, null), core["ɵdid"](46, 999424, null, 0, input.a, [ core.ElementRef, platform.a, [ 6, fesm2015_forms.NgControl ], [ 2, fesm2015_forms.NgForm ], [ 2, fesm2015_forms.FormGroupDirective ], fesm2015_core.d, [ 8, null ], text_field.a, core.NgZone ], {
                placeholder: [ 0, "placeholder" ]
            }, null), core["ɵprd"](2048, [ [ 10, 4 ], [ 11, 4 ] ], form_field.d, null, [ input.a ]), (_l()(), 
            core["ɵeld"](48, 0, null, null, 3, "div", [ [ "fxFlex", "10" ] ], null, null, null, null, null)), core["ɵdid"](49, 671744, null, 0, flex.b, [ core.ElementRef, esm2015_core.i, esm2015_core.e, flex.i, esm2015_core.f ], {
                fxFlex: [ 0, "fxFlex" ]
            }, null), (_l()(), core["ɵand"](16777216, null, null, 1, null, View_EnvironmentVariablesComponent_3)), core["ɵdid"](51, 16384, null, 0, common.NgIf, [ core.ViewContainerRef, core.TemplateRef ], {
                ngIf: [ 0, "ngIf" ]
            }, null) ], (function(_ck, _v) {
                var _co = _v.component;
                _ck(_v, 1, 0, _v.context.index), _ck(_v, 15, 0, "auto"), _ck(_v, 19, 0, "name"), 
                _ck(_v, 22, 0, "Name");
                var currVal_49 = null == _v.context.$implicit.get("name").errors ? null : _v.context.$implicit.get("name").errors.pattern;
                _ck(_v, 25, 0, currVal_49), _ck(_v, 27, 0, "5"), _ck(_v, 39, 0, "auto"), _ck(_v, 43, 0, "value"), 
                _ck(_v, 46, 0, "Value"), _ck(_v, 49, 0, "10"), _ck(_v, 51, 0, _co.isRemovable(_v.context.index));
            }), (function(_ck, _v) {
                _ck(_v, 0, 0, core["ɵnov"](_v, 3).ngClassUntouched, core["ɵnov"](_v, 3).ngClassTouched, core["ɵnov"](_v, 3).ngClassPristine, core["ɵnov"](_v, 3).ngClassDirty, core["ɵnov"](_v, 3).ngClassValid, core["ɵnov"](_v, 3).ngClassInvalid, core["ɵnov"](_v, 3).ngClassPending), 
                _ck(_v, 4, 1, [ "standard" == core["ɵnov"](_v, 5).appearance, "fill" == core["ɵnov"](_v, 5).appearance, "outline" == core["ɵnov"](_v, 5).appearance, "legacy" == core["ɵnov"](_v, 5).appearance, core["ɵnov"](_v, 5)._control.errorState, core["ɵnov"](_v, 5)._canLabelFloat, core["ɵnov"](_v, 5)._shouldLabelFloat(), core["ɵnov"](_v, 5)._hasFloatingLabel(), core["ɵnov"](_v, 5)._hideControlPlaceholder(), core["ɵnov"](_v, 5)._control.disabled, core["ɵnov"](_v, 5)._control.autofilled, core["ɵnov"](_v, 5)._control.focused, "accent" == core["ɵnov"](_v, 5).color, "warn" == core["ɵnov"](_v, 5).color, core["ɵnov"](_v, 5)._shouldForward("untouched"), core["ɵnov"](_v, 5)._shouldForward("touched"), core["ɵnov"](_v, 5)._shouldForward("pristine"), core["ɵnov"](_v, 5)._shouldForward("dirty"), core["ɵnov"](_v, 5)._shouldForward("valid"), core["ɵnov"](_v, 5)._shouldForward("invalid"), core["ɵnov"](_v, 5)._shouldForward("pending"), !core["ɵnov"](_v, 5)._animationsEnabled ]), 
                _ck(_v, 16, 1, [ core["ɵnov"](_v, 21).ngClassUntouched, core["ɵnov"](_v, 21).ngClassTouched, core["ɵnov"](_v, 21).ngClassPristine, core["ɵnov"](_v, 21).ngClassDirty, core["ɵnov"](_v, 21).ngClassValid, core["ɵnov"](_v, 21).ngClassInvalid, core["ɵnov"](_v, 21).ngClassPending, core["ɵnov"](_v, 22)._isServer, core["ɵnov"](_v, 22).id, core["ɵnov"](_v, 22).placeholder, core["ɵnov"](_v, 22).disabled, core["ɵnov"](_v, 22).required, core["ɵnov"](_v, 22).readonly && !core["ɵnov"](_v, 22)._isNativeSelect || null, core["ɵnov"](_v, 22)._ariaDescribedby || null, core["ɵnov"](_v, 22).errorState, core["ɵnov"](_v, 22).required.toString() ]), 
                _ck(_v, 28, 1, [ "standard" == core["ɵnov"](_v, 29).appearance, "fill" == core["ɵnov"](_v, 29).appearance, "outline" == core["ɵnov"](_v, 29).appearance, "legacy" == core["ɵnov"](_v, 29).appearance, core["ɵnov"](_v, 29)._control.errorState, core["ɵnov"](_v, 29)._canLabelFloat, core["ɵnov"](_v, 29)._shouldLabelFloat(), core["ɵnov"](_v, 29)._hasFloatingLabel(), core["ɵnov"](_v, 29)._hideControlPlaceholder(), core["ɵnov"](_v, 29)._control.disabled, core["ɵnov"](_v, 29)._control.autofilled, core["ɵnov"](_v, 29)._control.focused, "accent" == core["ɵnov"](_v, 29).color, "warn" == core["ɵnov"](_v, 29).color, core["ɵnov"](_v, 29)._shouldForward("untouched"), core["ɵnov"](_v, 29)._shouldForward("touched"), core["ɵnov"](_v, 29)._shouldForward("pristine"), core["ɵnov"](_v, 29)._shouldForward("dirty"), core["ɵnov"](_v, 29)._shouldForward("valid"), core["ɵnov"](_v, 29)._shouldForward("invalid"), core["ɵnov"](_v, 29)._shouldForward("pending"), !core["ɵnov"](_v, 29)._animationsEnabled ]), 
                _ck(_v, 40, 1, [ core["ɵnov"](_v, 45).ngClassUntouched, core["ɵnov"](_v, 45).ngClassTouched, core["ɵnov"](_v, 45).ngClassPristine, core["ɵnov"](_v, 45).ngClassDirty, core["ɵnov"](_v, 45).ngClassValid, core["ɵnov"](_v, 45).ngClassInvalid, core["ɵnov"](_v, 45).ngClassPending, core["ɵnov"](_v, 46)._isServer, core["ɵnov"](_v, 46).id, core["ɵnov"](_v, 46).placeholder, core["ɵnov"](_v, 46).disabled, core["ɵnov"](_v, 46).required, core["ɵnov"](_v, 46).readonly && !core["ɵnov"](_v, 46)._isNativeSelect || null, core["ɵnov"](_v, 46)._ariaDescribedby || null, core["ɵnov"](_v, 46).errorState, core["ɵnov"](_v, 46).required.toString() ]);
            }));
        }
        function View_EnvironmentVariablesComponent_0(_l) {
            return core["ɵvid"](0, [ (_l()(), core["ɵeld"](0, 0, null, null, 13, "div", [ [ "fxLayout", "column" ] ], null, null, null, null, null)), core["ɵdid"](1, 671744, null, 0, flex.d, [ core.ElementRef, esm2015_core.i, [ 2, flex.k ], esm2015_core.f ], {
                fxLayout: [ 0, "fxLayout" ]
            }, null), (_l()(), core["ɵeld"](2, 0, null, null, 1, "div", [ [ "class", "kd-margin-bottom" ] ], null, null, null, null, null)), (_l()(), 
            core["ɵted"](-1, null, [ "Environment variables" ])), (_l()(), core["ɵeld"](4, 0, null, null, 9, null, null, null, null, (function(_v, en, $event) {
                var ad = !0;
                return "submit" === en && (ad = !1 !== core["ɵnov"](_v, 5).onSubmit($event) && ad), 
                "reset" === en && (ad = !1 !== core["ɵnov"](_v, 5).onReset() && ad), ad;
            }), null, null)), core["ɵdid"](5, 540672, null, 0, fesm2015_forms.FormGroupDirective, [ [ 8, null ], [ 8, null ] ], {
                form: [ 0, "form" ]
            }, null), core["ɵprd"](2048, null, fesm2015_forms.ControlContainer, null, [ fesm2015_forms.FormGroupDirective ]), core["ɵdid"](7, 16384, null, 0, fesm2015_forms.NgControlStatusGroup, [ [ 4, fesm2015_forms.ControlContainer ] ], null, null), (_l()(), 
            core["ɵeld"](8, 0, null, null, 5, null, null, null, null, null, null, null)), core["ɵdid"](9, 212992, null, 0, fesm2015_forms.FormArrayName, [ [ 3, fesm2015_forms.ControlContainer ], [ 8, null ], [ 8, null ] ], {
                name: [ 0, "name" ]
            }, null), core["ɵprd"](2048, null, fesm2015_forms.ControlContainer, null, [ fesm2015_forms.FormArrayName ]), core["ɵdid"](11, 16384, null, 0, fesm2015_forms.NgControlStatusGroup, [ [ 4, fesm2015_forms.ControlContainer ] ], null, null), (_l()(), 
            core["ɵand"](16777216, null, null, 1, null, View_EnvironmentVariablesComponent_1)), core["ɵdid"](13, 278528, null, 0, common.NgForOf, [ core.ViewContainerRef, core.TemplateRef, core.IterableDiffers ], {
                ngForOf: [ 0, "ngForOf" ]
            }, null) ], (function(_ck, _v) {
                var _co = _v.component;
                _ck(_v, 1, 0, "column"), _ck(_v, 5, 0, _co.form), _ck(_v, 9, 0, "variables"), _ck(_v, 13, 0, _co.variables.controls);
            }), null);
        }
        class DeployLabel {
            constructor(key = "", value = "", editable = !0) {
                this.editable = editable, this.key = key, this.value = value;
            }
        }
        const APP_LABEL_KEY = "k8s-app";
        class component_CreateFromFormComponent {
            constructor(namespace_, create_, history_, http_, route_, fb_, dialog_) {
                this.namespace_ = namespace_, this.create_ = create_, this.history_ = history_, 
                this.http_ = http_, this.route_ = route_, this.fb_ = fb_, this.dialog_ = dialog_, 
                this.nameMaxLength = 24, this.showMoreOptions_ = !1, this.isExternal = !1, this.labelArr = [];
            }
            ngOnInit() {
                this.form = this.fb_.group({
                    name: [ "", fesm2015_forms.Validators.compose([ fesm2015_forms.Validators.required, FormValidators.namePattern ]) ],
                    containerImage: [ "", fesm2015_forms.Validators.required ],
                    replicas: [ 1, fesm2015_forms.Validators.compose([ fesm2015_forms.Validators.required, FormValidators.isInteger ]) ],
                    description: [ "" ],
                    namespace: [ this.route_.snapshot.params.namespace || "", fesm2015_forms.Validators.required ],
                    imagePullSecret: [ "" ],
                    cpuRequirement: [ "", fesm2015_forms.Validators.compose([ fesm2015_forms.Validators.min(0), FormValidators.isInteger ]) ],
                    memoryRequirement: [ "", fesm2015_forms.Validators.compose([ fesm2015_forms.Validators.min(0), FormValidators.isInteger ]) ],
                    containerCommand: [ "" ],
                    containerCommandArgs: [ "" ],
                    runAsPrivileged: [ !1 ],
                    portMappings: this.fb_.control([]),
                    variables: this.fb_.control([]),
                    labels: this.fb_.control([])
                }), this.labelArr = [ new DeployLabel(APP_LABEL_KEY, "", !1), new DeployLabel ], 
                this.name.valueChanges.subscribe(v => {
                    this.labelArr[0].value = v, this.labels.patchValue([ {
                        index: 0,
                        value: v
                    } ]);
                }), this.namespace.valueChanges.subscribe(namespace => {
                    this.name.clearAsyncValidators(), this.name.setAsyncValidators(validateUniqueName(this.http_, namespace)), 
                    this.name.updateValueAndValidity();
                }), this.http_.get("api/v1/namespace").subscribe(result => {
                    this.namespaces = result.namespaces.map(namespace => namespace.objectMeta.name), 
                    this.namespace.patchValue(this.namespace_.areMultipleNamespacesSelected() ? this.namespaces[0] : this.route_.snapshot.params.namespace || this.namespaces[0]);
                }), this.http_.get("api/v1/appdeployment/protocols").subscribe(protocols => this.protocols = protocols.protocols);
            }
            get name() {
                return this.form.get("name");
            }
            get containerImage() {
                return this.form.get("containerImage");
            }
            get replicas() {
                return this.form.get("replicas");
            }
            get description() {
                return this.form.get("description");
            }
            get namespace() {
                return this.form.get("namespace");
            }
            get imagePullSecret() {
                return this.form.get("imagePullSecret");
            }
            get cpuRequirement() {
                return this.form.get("cpuRequirement");
            }
            get memoryRequirement() {
                return this.form.get("memoryRequirement");
            }
            get containerCommand() {
                return this.form.get("containerCommand");
            }
            get containerCommandArgs() {
                return this.form.get("containerCommandArgs");
            }
            get runAsPrivileged() {
                return this.form.get("runAsPrivileged");
            }
            get portMappings() {
                return this.form.get("portMappings");
            }
            get variables() {
                return this.form.get("variables");
            }
            get labels() {
                return this.form.get("labels");
            }
            changeExternal(isExternal) {
                this.isExternal = isExternal;
            }
            resetImagePullSecret() {
                this.imagePullSecret.patchValue("");
            }
            isCreateDisabled() {
                return !this.form.valid || this.create_.isDeployDisabled();
            }
            getSecrets() {
                this.http_.get(`api/v1/secret/${this.namespace.value}`).subscribe(result => {
                    this.secrets = result.secrets.map(secret => secret.objectMeta.name);
                });
            }
            cancel() {
                this.history_.goToPreviousState("overview");
            }
            areMultipleNamespacesSelected() {
                return this.namespace_.areMultipleNamespacesSelected();
            }
            isMoreOptionsEnabled() {
                return this.showMoreOptions_;
            }
            switchMoreOptions() {
                this.showMoreOptions_ = !this.showMoreOptions_;
            }
            handleNamespaceDialog() {
                this.dialog_.open(dialog_CreateNamespaceDialog, {
                    data: {
                        namespaces: this.namespaces
                    }
                }).afterClosed().take(1).subscribe(answer => {
                    answer ? (this.namespaces.push(answer), this.namespace.patchValue(answer)) : this.namespace.patchValue(this.namespaces[0]);
                });
            }
            handleCreateSecretDialog() {
                this.dialog_.open(dialog_CreateSecretDialog, {
                    data: {
                        namespace: this.namespace.value
                    }
                }).afterClosed().take(1).subscribe(response => {
                    response ? (this.secrets.push(response), this.imagePullSecret.patchValue(response)) : this.imagePullSecret.patchValue("");
                });
            }
            isPortMappingFilled(portMapping) {
                return !!portMapping.port && !!portMapping.targetPort;
            }
            isVariableFilled(variable) {
                return !!variable.name;
            }
            isNumber(value) {
                return "number" == typeof value && !isNaN(value);
            }
            toBackendApiLabels(labels) {
                return labels[0].key = this.labelArr[0].key, labels[0].value = this.labelArr[0].value, 
                labels.filter(label => 0 !== label.key.length && 0 !== label.value.length);
            }
            deploy() {
                const variables = this.variables.value.variables || [], labels = this.labels.value.labels || [], spec = {
                    containerImage: this.containerImage.value,
                    imagePullSecret: this.imagePullSecret.value ? this.imagePullSecret.value : null,
                    containerCommand: this.containerCommand.value ? this.containerCommand.value : null,
                    containerCommandArgs: this.containerCommandArgs.value ? this.containerCommandArgs.value : null,
                    isExternal: this.isExternal,
                    name: this.name.value,
                    description: this.description.value ? this.description.value : null,
                    portMappings: (this.portMappings.value.portMappings || []).filter(this.isPortMappingFilled),
                    variables: variables.filter(this.isVariableFilled),
                    replicas: this.replicas.value,
                    namespace: this.namespace.value,
                    cpuRequirement: this.isNumber(this.cpuRequirement.value) ? this.cpuRequirement.value : null,
                    memoryRequirement: this.isNumber(this.memoryRequirement.value) ? `${this.memoryRequirement.value}Mi` : null,
                    labels: this.toBackendApiLabels(labels),
                    runAsPrivileged: this.runAsPrivileged.value
                };
                this.create_.deploy(spec);
            }
        }
        var router = __webpack_require__("iInd"), RenderType_CreateFromFormComponent = core["ɵcrt"]({
            encapsulation: 0,
            styles: [ [ ".kd-block[_ngcontent-%COMP%]{display:block}.kd-deploy-input-row[_ngcontent-%COMP%]{margin-bottom:8px;margin-top:8px}  mat-progress-bar.kd-deploy-form-progress{clear:left;height:.5px;margin-bottom:-.5px;overflow:hidden;top:5px}  mat-progress-bar.kd-deploy-form-progress:not(.kd-deploy-form-progress-show){visibility:hidden}" ] ],
            data: {}
        });
        function View_CreateFromFormComponent_1(_l) {
            return core["ɵvid"](0, [ (_l()(), core["ɵeld"](0, 0, null, null, 2, "mat-error", [ [ "class", "mat-error" ], [ "role", "alert" ] ], [ [ 1, "id", 0 ] ], null, null, null, null)), core["ɵdid"](1, 16384, [ [ 6, 4 ] ], 0, form_field.b, [], null, null), (_l()(), 
            core["ɵted"](-1, null, [ " Deployment or service with this name already exists within namespace. " ])) ], null, (function(_ck, _v) {
                _ck(_v, 0, 0, core["ɵnov"](_v, 1).id);
            }));
        }
        function View_CreateFromFormComponent_2(_l) {
            return core["ɵvid"](0, [ (_l()(), core["ɵeld"](0, 0, null, null, 2, "mat-error", [ [ "class", "mat-error" ], [ "role", "alert" ] ], [ [ 1, "id", 0 ] ], null, null, null, null)), core["ɵdid"](1, 16384, [ [ 6, 4 ] ], 0, form_field.b, [], null, null), (_l()(), 
            core["ɵted"](-1, null, [ " Application name is required. " ])) ], null, (function(_ck, _v) {
                _ck(_v, 0, 0, core["ɵnov"](_v, 1).id);
            }));
        }
        function View_CreateFromFormComponent_3(_l) {
            return core["ɵvid"](0, [ (_l()(), core["ɵeld"](0, 0, null, null, 2, "mat-error", [ [ "class", "mat-error" ], [ "role", "alert" ] ], [ [ 1, "id", 0 ] ], null, null, null, null)), core["ɵdid"](1, 16384, [ [ 6, 4 ] ], 0, form_field.b, [], null, null), (_l()(), 
            core["ɵted"](-1, null, [ " Application name must start with a lowercase letter and contain only lowercase letters, numbers, and '-' between words. " ])) ], null, (function(_ck, _v) {
                _ck(_v, 0, 0, core["ɵnov"](_v, 1).id);
            }));
        }
        function View_CreateFromFormComponent_4(_l) {
            return core["ɵvid"](0, [ (_l()(), core["ɵeld"](0, 0, null, null, 2, "mat-error", [ [ "class", "mat-error" ], [ "role", "alert" ] ], [ [ 1, "id", 0 ] ], null, null, null, null)), core["ɵdid"](1, 16384, [ [ 15, 4 ] ], 0, form_field.b, [], null, null), (_l()(), 
            core["ɵted"](-1, null, [ " Container image is required " ])) ], null, (function(_ck, _v) {
                _ck(_v, 0, 0, core["ɵnov"](_v, 1).id);
            }));
        }
        function View_CreateFromFormComponent_5(_l) {
            return core["ɵvid"](0, [ (_l()(), core["ɵeld"](0, 0, null, null, 2, "mat-error", [ [ "class", "mat-error" ], [ "role", "alert" ] ], [ [ 1, "id", 0 ] ], null, null, null, null)), core["ɵdid"](1, 16384, [ [ 15, 4 ] ], 0, form_field.b, [], null, null), (_l()(), 
            core["ɵted"](2, null, [ " Container image is invalid: ", " " ])) ], null, (function(_ck, _v) {
                var _co = _v.component;
                _ck(_v, 0, 0, core["ɵnov"](_v, 1).id), _ck(_v, 2, 0, null == _co.containerImage.errors ? null : _co.containerImage.errors.validImageReference);
            }));
        }
        function View_CreateFromFormComponent_6(_l) {
            return core["ɵvid"](0, [ (_l()(), core["ɵeld"](0, 0, null, null, 2, "mat-error", [ [ "class", "mat-error" ], [ "role", "alert" ] ], [ [ 1, "id", 0 ] ], null, null, null, null)), core["ɵdid"](1, 16384, [ [ 24, 4 ] ], 0, form_field.b, [], null, null), (_l()(), 
            core["ɵted"](-1, null, [ " Number of pods is required " ])) ], null, (function(_ck, _v) {
                _ck(_v, 0, 0, core["ɵnov"](_v, 1).id);
            }));
        }
        function View_CreateFromFormComponent_7(_l) {
            return core["ɵvid"](0, [ (_l()(), core["ɵeld"](0, 0, null, null, 2, "mat-error", [ [ "class", "mat-error" ], [ "role", "alert" ] ], [ [ 1, "id", 0 ] ], null, null, null, null)), core["ɵdid"](1, 16384, [ [ 24, 4 ] ], 0, form_field.b, [], null, null), (_l()(), 
            core["ɵted"](-1, null, [ " Number of pods must be a positive integer " ])) ], null, (function(_ck, _v) {
                _ck(_v, 0, 0, core["ɵnov"](_v, 1).id);
            }));
        }
        function View_CreateFromFormComponent_8(_l) {
            return core["ɵvid"](0, [ (_l()(), core["ɵeld"](0, 0, null, null, 2, "mat-error", [ [ "class", "mat-error" ], [ "role", "alert" ] ], [ [ 1, "id", 0 ] ], null, null, null, null)), core["ɵdid"](1, 16384, [ [ 24, 4 ] ], 0, form_field.b, [], null, null), (_l()(), 
            core["ɵted"](-1, null, [ " Setting high number of pods may cause performance issues of the cluster and Dashboard UI. " ])) ], null, (function(_ck, _v) {
                _ck(_v, 0, 0, core["ɵnov"](_v, 1).id);
            }));
        }
        function View_CreateFromFormComponent_9(_l) {
            return core["ɵvid"](0, [ (_l()(), core["ɵeld"](0, 0, null, null, 2, "mat-option", [ [ "class", "mat-option" ], [ "role", "option" ] ], [ [ 1, "tabindex", 0 ], [ 2, "mat-selected", null ], [ 2, "mat-option-multiple", null ], [ 2, "mat-active", null ], [ 8, "id", 0 ], [ 1, "aria-selected", 0 ], [ 1, "aria-disabled", 0 ], [ 2, "mat-option-disabled", null ] ], [ [ null, "click" ], [ null, "keydown" ] ], (function(_v, en, $event) {
                var ad = !0;
                return "click" === en && (ad = !1 !== core["ɵnov"](_v, 1)._selectViaInteraction() && ad), 
                "keydown" === en && (ad = !1 !== core["ɵnov"](_v, 1)._handleKeydown($event) && ad), 
                ad;
            }), core_index_ngfactory.d, core_index_ngfactory.b)), core["ɵdid"](1, 8568832, [ [ 46, 4 ] ], 0, fesm2015_core.p, [ core.ElementRef, core.ChangeDetectorRef, [ 2, fesm2015_core.j ], [ 2, fesm2015_core.o ] ], {
                value: [ 0, "value" ]
            }, null), (_l()(), core["ɵted"](2, 0, [ " ", " " ])) ], (function(_ck, _v) {
                _ck(_v, 1, 0, _v.context.$implicit);
            }), (function(_ck, _v) {
                _ck(_v, 0, 0, core["ɵnov"](_v, 1)._getTabIndex(), core["ɵnov"](_v, 1).selected, core["ɵnov"](_v, 1).multiple, core["ɵnov"](_v, 1).active, core["ɵnov"](_v, 1).id, core["ɵnov"](_v, 1)._getAriaSelected(), core["ɵnov"](_v, 1).disabled.toString(), core["ɵnov"](_v, 1).disabled), 
                _ck(_v, 2, 0, _v.context.$implicit);
            }));
        }
        function View_CreateFromFormComponent_10(_l) {
            return core["ɵvid"](0, [ (_l()(), core["ɵeld"](0, 0, null, null, 2, "mat-option", [ [ "class", "mat-option" ], [ "role", "option" ] ], [ [ 1, "tabindex", 0 ], [ 2, "mat-selected", null ], [ 2, "mat-option-multiple", null ], [ 2, "mat-active", null ], [ 8, "id", 0 ], [ 1, "aria-selected", 0 ], [ 1, "aria-disabled", 0 ], [ 2, "mat-option-disabled", null ] ], [ [ null, "click" ], [ null, "keydown" ] ], (function(_v, en, $event) {
                var ad = !0;
                return "click" === en && (ad = !1 !== core["ɵnov"](_v, 1)._selectViaInteraction() && ad), 
                "keydown" === en && (ad = !1 !== core["ɵnov"](_v, 1)._handleKeydown($event) && ad), 
                ad;
            }), core_index_ngfactory.d, core_index_ngfactory.b)), core["ɵdid"](1, 8568832, [ [ 58, 4 ] ], 0, fesm2015_core.p, [ core.ElementRef, core.ChangeDetectorRef, [ 2, fesm2015_core.j ], [ 2, fesm2015_core.o ] ], {
                value: [ 0, "value" ]
            }, null), (_l()(), core["ɵted"](2, 0, [ " ", " " ])) ], (function(_ck, _v) {
                _ck(_v, 1, 0, _v.context.$implicit);
            }), (function(_ck, _v) {
                _ck(_v, 0, 0, core["ɵnov"](_v, 1)._getTabIndex(), core["ɵnov"](_v, 1).selected, core["ɵnov"](_v, 1).multiple, core["ɵnov"](_v, 1).active, core["ɵnov"](_v, 1).id, core["ɵnov"](_v, 1)._getAriaSelected(), core["ɵnov"](_v, 1).disabled.toString(), core["ɵnov"](_v, 1).disabled), 
                _ck(_v, 2, 0, _v.context.$implicit);
            }));
        }
        function View_CreateFromFormComponent_11(_l) {
            return core["ɵvid"](0, [ (_l()(), core["ɵeld"](0, 0, null, null, 2, "mat-error", [ [ "class", "mat-error" ], [ "role", "alert" ] ], [ [ 1, "id", 0 ] ], null, null, null, null)), core["ɵdid"](1, 16384, [ [ 66, 4 ] ], 0, form_field.b, [], null, null), (_l()(), 
            core["ɵted"](-1, null, [ " CPU requirement must be given as a positive number. " ])) ], null, (function(_ck, _v) {
                _ck(_v, 0, 0, core["ɵnov"](_v, 1).id);
            }));
        }
        function View_CreateFromFormComponent_12(_l) {
            return core["ɵvid"](0, [ (_l()(), core["ɵeld"](0, 0, null, null, 2, "mat-error", [ [ "class", "mat-error" ], [ "role", "alert" ] ], [ [ 1, "id", 0 ] ], null, null, null, null)), core["ɵdid"](1, 16384, [ [ 66, 4 ] ], 0, form_field.b, [], null, null), (_l()(), 
            core["ɵted"](-1, null, [ " CPU requirement must be given as a valid number. " ])) ], null, (function(_ck, _v) {
                _ck(_v, 0, 0, core["ɵnov"](_v, 1).id);
            }));
        }
        function View_CreateFromFormComponent_13(_l) {
            return core["ɵvid"](0, [ (_l()(), core["ɵeld"](0, 0, null, null, 2, "mat-error", [ [ "class", "mat-error" ], [ "role", "alert" ] ], [ [ 1, "id", 0 ] ], null, null, null, null)), core["ɵdid"](1, 16384, [ [ 75, 4 ] ], 0, form_field.b, [], null, null), (_l()(), 
            core["ɵted"](-1, null, [ " Memory requirement must be given as a positive number. " ])) ], null, (function(_ck, _v) {
                _ck(_v, 0, 0, core["ɵnov"](_v, 1).id);
            }));
        }
        function View_CreateFromFormComponent_14(_l) {
            return core["ɵvid"](0, [ (_l()(), core["ɵeld"](0, 0, null, null, 2, "mat-error", [ [ "class", "mat-error" ], [ "role", "alert" ] ], [ [ 1, "id", 0 ] ], null, null, null, null)), core["ɵdid"](1, 16384, [ [ 75, 4 ] ], 0, form_field.b, [], null, null), (_l()(), 
            core["ɵted"](-1, null, [ " Memory requirement must be given as a valid number. " ])) ], null, (function(_ck, _v) {
                _ck(_v, 0, 0, core["ɵnov"](_v, 1).id);
            }));
        }
        function View_CreateFromFormComponent_15(_l) {
            return core["ɵvid"](0, [ (_l()(), core["ɵted"](-1, null, [ "Hide advanced options" ])) ], null, null);
        }
        function View_CreateFromFormComponent_16(_l) {
            return core["ɵvid"](0, [ (_l()(), core["ɵted"](-1, null, [ "Show advanced options" ])) ], null, null);
        }
        function View_CreateFromFormComponent_0(_l) {
            return core["ɵvid"](0, [ (_l()(), core["ɵeld"](0, 0, null, null, 417, "form", [ [ "novalidate", "" ] ], [ [ 2, "ng-untouched", null ], [ 2, "ng-touched", null ], [ 2, "ng-pristine", null ], [ 2, "ng-dirty", null ], [ 2, "ng-valid", null ], [ 2, "ng-invalid", null ], [ 2, "ng-pending", null ] ], [ [ null, "submit" ], [ null, "reset" ] ], (function(_v, en, $event) {
                var ad = !0;
                return "submit" === en && (ad = !1 !== core["ɵnov"](_v, 2).onSubmit($event) && ad), 
                "reset" === en && (ad = !1 !== core["ɵnov"](_v, 2).onReset() && ad), ad;
            }), null, null)), core["ɵdid"](1, 16384, null, 0, fesm2015_forms["ɵangular_packages_forms_forms_y"], [], null, null), core["ɵdid"](2, 540672, null, 0, fesm2015_forms.FormGroupDirective, [ [ 8, null ], [ 8, null ] ], {
                form: [ 0, "form" ]
            }, null), core["ɵprd"](2048, null, fesm2015_forms.ControlContainer, null, [ fesm2015_forms.FormGroupDirective ]), core["ɵdid"](4, 16384, null, 0, fesm2015_forms.NgControlStatusGroup, [ [ 4, fesm2015_forms.ControlContainer ] ], null, null), (_l()(), 
            core["ɵeld"](5, 0, null, null, 49, "kd-help-section", [], null, null, null, View_HelpSectionComponent_0, RenderType_HelpSectionComponent)), core["ɵdid"](6, 49152, null, 0, HelpSectionComponent, [], null, null), (_l()(), 
            core["ɵeld"](7, 0, null, 0, 39, "mat-form-field", [ [ "class", "mat-form-field" ] ], [ [ 2, "mat-form-field-appearance-standard", null ], [ 2, "mat-form-field-appearance-fill", null ], [ 2, "mat-form-field-appearance-outline", null ], [ 2, "mat-form-field-appearance-legacy", null ], [ 2, "mat-form-field-invalid", null ], [ 2, "mat-form-field-can-float", null ], [ 2, "mat-form-field-should-float", null ], [ 2, "mat-form-field-has-label", null ], [ 2, "mat-form-field-hide-placeholder", null ], [ 2, "mat-form-field-disabled", null ], [ 2, "mat-form-field-autofilled", null ], [ 2, "mat-focused", null ], [ 2, "mat-accent", null ], [ 2, "mat-warn", null ], [ 2, "ng-untouched", null ], [ 2, "ng-touched", null ], [ 2, "ng-pristine", null ], [ 2, "ng-dirty", null ], [ 2, "ng-valid", null ], [ 2, "ng-invalid", null ], [ 2, "ng-pending", null ], [ 2, "_mat-animation-noopable", null ] ], null, null, form_field_index_ngfactory.b, form_field_index_ngfactory.a)), core["ɵdid"](8, 7520256, null, 9, form_field.c, [ core.ElementRef, core.ChangeDetectorRef, [ 2, fesm2015_core.h ], [ 2, bidi.b ], [ 2, form_field.a ], platform.a, core.NgZone, [ 2, animations.a ] ], null, null), core["ɵqud"](603979776, 1, {
                _controlNonStatic: 0
            }), core["ɵqud"](335544320, 2, {
                _controlStatic: 0
            }), core["ɵqud"](603979776, 3, {
                _labelChildNonStatic: 0
            }), core["ɵqud"](335544320, 4, {
                _labelChildStatic: 0
            }), core["ɵqud"](603979776, 5, {
                _placeholderChild: 0
            }), core["ɵqud"](603979776, 6, {
                _errorChildren: 1
            }), core["ɵqud"](603979776, 7, {
                _hintChildren: 1
            }), core["ɵqud"](603979776, 8, {
                _prefixChildren: 1
            }), core["ɵqud"](603979776, 9, {
                _suffixChildren: 1
            }), (_l()(), core["ɵeld"](18, 0, null, 1, 12, "input", [ [ "class", "mat-input-element mat-form-field-autofill-control" ], [ "formControlName", "name" ], [ "kdUniqueName", "" ], [ "matInput", "" ], [ "placeholder", "App name" ], [ "required", "" ] ], [ [ 1, "required", 0 ], [ 1, "maxlength", 0 ], [ 2, "ng-untouched", null ], [ 2, "ng-touched", null ], [ 2, "ng-pristine", null ], [ 2, "ng-dirty", null ], [ 2, "ng-valid", null ], [ 2, "ng-invalid", null ], [ 2, "ng-pending", null ], [ 2, "mat-input-server", null ], [ 1, "id", 0 ], [ 1, "placeholder", 0 ], [ 8, "disabled", 0 ], [ 8, "required", 0 ], [ 1, "readonly", 0 ], [ 1, "aria-describedby", 0 ], [ 1, "aria-invalid", 0 ], [ 1, "aria-required", 0 ] ], [ [ null, "input" ], [ null, "blur" ], [ null, "compositionstart" ], [ null, "compositionend" ], [ null, "focus" ] ], (function(_v, en, $event) {
                var ad = !0;
                return "input" === en && (ad = !1 !== core["ɵnov"](_v, 19)._handleInput($event.target.value) && ad), 
                "blur" === en && (ad = !1 !== core["ɵnov"](_v, 19).onTouched() && ad), "compositionstart" === en && (ad = !1 !== core["ɵnov"](_v, 19)._compositionStart() && ad), 
                "compositionend" === en && (ad = !1 !== core["ɵnov"](_v, 19)._compositionEnd($event.target.value) && ad), 
                "blur" === en && (ad = !1 !== core["ɵnov"](_v, 29)._focusChanged(!1) && ad), "focus" === en && (ad = !1 !== core["ɵnov"](_v, 29)._focusChanged(!0) && ad), 
                "input" === en && (ad = !1 !== core["ɵnov"](_v, 29)._onInput() && ad), ad;
            }), null, null)), core["ɵdid"](19, 16384, null, 0, fesm2015_forms.DefaultValueAccessor, [ core.Renderer2, core.ElementRef, [ 2, fesm2015_forms.COMPOSITION_BUFFER_MODE ] ], null, null), core["ɵdid"](20, 16384, null, 0, fesm2015_forms.RequiredValidator, [], {
                required: [ 0, "required" ]
            }, null), core["ɵdid"](21, 540672, null, 0, fesm2015_forms.MaxLengthValidator, [], {
                maxlength: [ 0, "maxlength" ]
            }, null), core["ɵprd"](1024, null, fesm2015_forms.NG_VALIDATORS, (function(p0_0, p1_0) {
                return [ p0_0, p1_0 ];
            }), [ fesm2015_forms.RequiredValidator, fesm2015_forms.MaxLengthValidator ]), core["ɵdid"](23, 16384, null, 0, UniqueNameValidator, [ fesm2015_http.c ], {
                namespace: [ 0, "namespace" ]
            }, null), core["ɵprd"](1024, null, fesm2015_forms.NG_ASYNC_VALIDATORS, (function(p0_0) {
                return [ p0_0 ];
            }), [ UniqueNameValidator ]), core["ɵprd"](1024, null, fesm2015_forms.NG_VALUE_ACCESSOR, (function(p0_0) {
                return [ p0_0 ];
            }), [ fesm2015_forms.DefaultValueAccessor ]), core["ɵdid"](26, 671744, null, 0, fesm2015_forms.FormControlName, [ [ 3, fesm2015_forms.ControlContainer ], [ 6, fesm2015_forms.NG_VALIDATORS ], [ 6, fesm2015_forms.NG_ASYNC_VALIDATORS ], [ 6, fesm2015_forms.NG_VALUE_ACCESSOR ], [ 2, fesm2015_forms["ɵangular_packages_forms_forms_p"] ] ], {
                name: [ 0, "name" ]
            }, null), core["ɵprd"](2048, null, fesm2015_forms.NgControl, null, [ fesm2015_forms.FormControlName ]), core["ɵdid"](28, 16384, null, 0, fesm2015_forms.NgControlStatus, [ [ 4, fesm2015_forms.NgControl ] ], null, null), core["ɵdid"](29, 999424, null, 0, input.a, [ core.ElementRef, platform.a, [ 6, fesm2015_forms.NgControl ], [ 2, fesm2015_forms.NgForm ], [ 2, fesm2015_forms.FormGroupDirective ], fesm2015_core.d, [ 8, null ], text_field.a, core.NgZone ], {
                placeholder: [ 0, "placeholder" ],
                required: [ 1, "required" ]
            }, null), core["ɵprd"](2048, [ [ 1, 4 ], [ 2, 4 ] ], form_field.d, null, [ input.a ]), (_l()(), 
            core["ɵeld"](31, 0, null, 1, 6, "mat-progress-bar", [ [ "aria-valuemax", "100" ], [ "aria-valuemin", "0" ], [ "class", "kd-deploy-form-progress mat-progress-bar" ], [ "mode", "indeterminate" ], [ "role", "progressbar" ] ], [ [ 1, "aria-valuenow", 0 ], [ 1, "mode", 0 ], [ 2, "_mat-animation-noopable", null ] ], null, null, progress_bar_index_ngfactory.b, progress_bar_index_ngfactory.a)), core["ɵprd"](512, null, common["ɵNgClassImpl"], common["ɵNgClassR2Impl"], [ core.IterableDiffers, core.KeyValueDiffers, core.ElementRef, core.Renderer2 ]), core["ɵdid"](33, 278528, null, 0, common.NgClass, [ common["ɵNgClassImpl"] ], {
                klass: [ 0, "klass" ],
                ngClass: [ 1, "ngClass" ]
            }, null), core["ɵpod"](34, {
                "kd-deploy-form-progress-show": 0
            }), core["ɵdid"](35, 4374528, null, 0, progress_bar.b, [ core.ElementRef, core.NgZone, [ 2, animations.a ], [ 2, progress_bar.a ] ], {
                mode: [ 0, "mode" ]
            }, null), core["ɵdid"](36, 933888, null, 0, extended.a, [ core.ElementRef, esm2015_core.i, esm2015_core.f, common["ɵNgClassImpl"], [ 6, common.NgClass ] ], {
                ngClass: [ 0, "ngClass" ],
                klass: [ 1, "klass" ]
            }, null), core["ɵpod"](37, {
                "kd-deploy-form-progress-show": 0
            }), (_l()(), core["ɵeld"](38, 0, null, 7, 2, "mat-hint", [ [ "align", "end" ], [ "class", "mat-hint" ] ], [ [ 2, "mat-right", null ], [ 1, "id", 0 ], [ 1, "align", 0 ] ], null, null, null, null)), core["ɵdid"](39, 16384, [ [ 7, 4 ] ], 0, form_field.f, [], {
                align: [ 0, "align" ]
            }, null), (_l()(), core["ɵted"](40, null, [ "", " / ", "" ])), (_l()(), core["ɵand"](16777216, null, 5, 1, null, View_CreateFromFormComponent_1)), core["ɵdid"](42, 16384, null, 0, common.NgIf, [ core.ViewContainerRef, core.TemplateRef ], {
                ngIf: [ 0, "ngIf" ]
            }, null), (_l()(), core["ɵand"](16777216, null, 5, 1, null, View_CreateFromFormComponent_2)), core["ɵdid"](44, 16384, null, 0, common.NgIf, [ core.ViewContainerRef, core.TemplateRef ], {
                ngIf: [ 0, "ngIf" ]
            }, null), (_l()(), core["ɵand"](16777216, null, 5, 1, null, View_CreateFromFormComponent_3)), core["ɵdid"](46, 16384, null, 0, common.NgIf, [ core.ViewContainerRef, core.TemplateRef ], {
                ngIf: [ 0, "ngIf" ]
            }, null), (_l()(), core["ɵeld"](47, 0, null, 0, 7, "kd-user-help", [], null, null, null, View_UserHelpComponent_0, RenderType_UserHelpComponent)), core["ɵdid"](48, 49152, null, 0, UserHelpComponent, [], null, null), (_l()(), 
            core["ɵeld"](49, 0, null, 0, 1, null, null, null, null, null, null, null)), (_l()(), 
            core["ɵted"](-1, null, [ "An 'app' label with this value will be added to the Deployment and Service that get deployed." ])), (_l()(), 
            core["ɵeld"](51, 0, null, 0, 3, "a", [ [ "href", "http://kubernetes.io/docs/user-guide/labels/" ], [ "tabindex", "-1" ], [ "target", "_blank" ] ], null, null, null, null, null)), (_l()(), 
            core["ɵted"](-1, null, [ " Learn more " ])), (_l()(), core["ɵeld"](53, 0, null, null, 1, "i", [ [ "class", "material-icons" ] ], null, null, null, null, null)), (_l()(), 
            core["ɵted"](-1, null, [ "open_in_new" ])), (_l()(), core["ɵeld"](55, 0, null, null, 36, "kd-help-section", [], null, null, null, View_HelpSectionComponent_0, RenderType_HelpSectionComponent)), core["ɵdid"](56, 49152, null, 0, HelpSectionComponent, [], null, null), (_l()(), 
            core["ɵeld"](57, 0, null, 0, 26, "mat-form-field", [ [ "class", "mat-form-field" ] ], [ [ 2, "mat-form-field-appearance-standard", null ], [ 2, "mat-form-field-appearance-fill", null ], [ 2, "mat-form-field-appearance-outline", null ], [ 2, "mat-form-field-appearance-legacy", null ], [ 2, "mat-form-field-invalid", null ], [ 2, "mat-form-field-can-float", null ], [ 2, "mat-form-field-should-float", null ], [ 2, "mat-form-field-has-label", null ], [ 2, "mat-form-field-hide-placeholder", null ], [ 2, "mat-form-field-disabled", null ], [ 2, "mat-form-field-autofilled", null ], [ 2, "mat-focused", null ], [ 2, "mat-accent", null ], [ 2, "mat-warn", null ], [ 2, "ng-untouched", null ], [ 2, "ng-touched", null ], [ 2, "ng-pristine", null ], [ 2, "ng-dirty", null ], [ 2, "ng-valid", null ], [ 2, "ng-invalid", null ], [ 2, "ng-pending", null ], [ 2, "_mat-animation-noopable", null ] ], null, null, form_field_index_ngfactory.b, form_field_index_ngfactory.a)), core["ɵdid"](58, 7520256, null, 9, form_field.c, [ core.ElementRef, core.ChangeDetectorRef, [ 2, fesm2015_core.h ], [ 2, bidi.b ], [ 2, form_field.a ], platform.a, core.NgZone, [ 2, animations.a ] ], null, null), core["ɵqud"](603979776, 10, {
                _controlNonStatic: 0
            }), core["ɵqud"](335544320, 11, {
                _controlStatic: 0
            }), core["ɵqud"](603979776, 12, {
                _labelChildNonStatic: 0
            }), core["ɵqud"](335544320, 13, {
                _labelChildStatic: 0
            }), core["ɵqud"](603979776, 14, {
                _placeholderChild: 0
            }), core["ɵqud"](603979776, 15, {
                _errorChildren: 1
            }), core["ɵqud"](603979776, 16, {
                _hintChildren: 1
            }), core["ɵqud"](603979776, 17, {
                _prefixChildren: 1
            }), core["ɵqud"](603979776, 18, {
                _suffixChildren: 1
            }), (_l()(), core["ɵeld"](68, 0, null, 1, 11, "input", [ [ "class", "mat-input-element mat-form-field-autofill-control" ], [ "formControlName", "containerImage" ], [ "kdValidImageReference", "" ], [ "matInput", "" ], [ "placeholder", "Container image" ], [ "required", "" ] ], [ [ 1, "required", 0 ], [ 2, "ng-untouched", null ], [ 2, "ng-touched", null ], [ 2, "ng-pristine", null ], [ 2, "ng-dirty", null ], [ 2, "ng-valid", null ], [ 2, "ng-invalid", null ], [ 2, "ng-pending", null ], [ 2, "mat-input-server", null ], [ 1, "id", 0 ], [ 1, "placeholder", 0 ], [ 8, "disabled", 0 ], [ 8, "required", 0 ], [ 1, "readonly", 0 ], [ 1, "aria-describedby", 0 ], [ 1, "aria-invalid", 0 ], [ 1, "aria-required", 0 ] ], [ [ null, "input" ], [ null, "blur" ], [ null, "compositionstart" ], [ null, "compositionend" ], [ null, "focus" ] ], (function(_v, en, $event) {
                var ad = !0;
                return "input" === en && (ad = !1 !== core["ɵnov"](_v, 69)._handleInput($event.target.value) && ad), 
                "blur" === en && (ad = !1 !== core["ɵnov"](_v, 69).onTouched() && ad), "compositionstart" === en && (ad = !1 !== core["ɵnov"](_v, 69)._compositionStart() && ad), 
                "compositionend" === en && (ad = !1 !== core["ɵnov"](_v, 69)._compositionEnd($event.target.value) && ad), 
                "blur" === en && (ad = !1 !== core["ɵnov"](_v, 78)._focusChanged(!1) && ad), "focus" === en && (ad = !1 !== core["ɵnov"](_v, 78)._focusChanged(!0) && ad), 
                "input" === en && (ad = !1 !== core["ɵnov"](_v, 78)._onInput() && ad), ad;
            }), null, null)), core["ɵdid"](69, 16384, null, 0, fesm2015_forms.DefaultValueAccessor, [ core.Renderer2, core.ElementRef, [ 2, fesm2015_forms.COMPOSITION_BUFFER_MODE ] ], null, null), core["ɵdid"](70, 16384, null, 0, fesm2015_forms.RequiredValidator, [], {
                required: [ 0, "required" ]
            }, null), core["ɵprd"](1024, null, fesm2015_forms.NG_VALIDATORS, (function(p0_0) {
                return [ p0_0 ];
            }), [ fesm2015_forms.RequiredValidator ]), core["ɵdid"](72, 16384, null, 0, validimagereference_validator_ValidImageReferenceValidator, [ fesm2015_http.c ], null, null), core["ɵprd"](1024, null, fesm2015_forms.NG_ASYNC_VALIDATORS, (function(p0_0) {
                return [ p0_0 ];
            }), [ validimagereference_validator_ValidImageReferenceValidator ]), core["ɵprd"](1024, null, fesm2015_forms.NG_VALUE_ACCESSOR, (function(p0_0) {
                return [ p0_0 ];
            }), [ fesm2015_forms.DefaultValueAccessor ]), core["ɵdid"](75, 671744, null, 0, fesm2015_forms.FormControlName, [ [ 3, fesm2015_forms.ControlContainer ], [ 6, fesm2015_forms.NG_VALIDATORS ], [ 6, fesm2015_forms.NG_ASYNC_VALIDATORS ], [ 6, fesm2015_forms.NG_VALUE_ACCESSOR ], [ 2, fesm2015_forms["ɵangular_packages_forms_forms_p"] ] ], {
                name: [ 0, "name" ]
            }, null), core["ɵprd"](2048, null, fesm2015_forms.NgControl, null, [ fesm2015_forms.FormControlName ]), core["ɵdid"](77, 16384, null, 0, fesm2015_forms.NgControlStatus, [ [ 4, fesm2015_forms.NgControl ] ], null, null), core["ɵdid"](78, 999424, null, 0, input.a, [ core.ElementRef, platform.a, [ 6, fesm2015_forms.NgControl ], [ 2, fesm2015_forms.NgForm ], [ 2, fesm2015_forms.FormGroupDirective ], fesm2015_core.d, [ 8, null ], text_field.a, core.NgZone ], {
                placeholder: [ 0, "placeholder" ],
                required: [ 1, "required" ]
            }, null), core["ɵprd"](2048, [ [ 10, 4 ], [ 11, 4 ] ], form_field.d, null, [ input.a ]), (_l()(), 
            core["ɵand"](16777216, null, 5, 1, null, View_CreateFromFormComponent_4)), core["ɵdid"](81, 16384, null, 0, common.NgIf, [ core.ViewContainerRef, core.TemplateRef ], {
                ngIf: [ 0, "ngIf" ]
            }, null), (_l()(), core["ɵand"](16777216, null, 5, 1, null, View_CreateFromFormComponent_5)), core["ɵdid"](83, 16384, null, 0, common.NgIf, [ core.ViewContainerRef, core.TemplateRef ], {
                ngIf: [ 0, "ngIf" ]
            }, null), (_l()(), core["ɵeld"](84, 0, null, 0, 7, "kd-user-help", [], null, null, null, View_UserHelpComponent_0, RenderType_UserHelpComponent)), core["ɵdid"](85, 49152, null, 0, UserHelpComponent, [], null, null), (_l()(), 
            core["ɵeld"](86, 0, null, 0, 1, null, null, null, null, null, null, null)), (_l()(), 
            core["ɵted"](-1, null, [ "Enter the URL of a public image on any registry, or a private image hosted on Docker Hub or Google Container Registry." ])), (_l()(), 
            core["ɵeld"](88, 0, null, 0, 3, "a", [ [ "href", "http://kubernetes.io/docs/user-guide/images/" ], [ "tabindex", "-1" ], [ "target", "_blank" ] ], null, null, null, null, null)), (_l()(), 
            core["ɵted"](-1, null, [ " Learn more " ])), (_l()(), core["ɵeld"](90, 0, null, null, 1, "i", [ [ "class", "material-icons" ] ], null, null, null, null, null)), (_l()(), 
            core["ɵted"](-1, null, [ "open_in_new" ])), (_l()(), core["ɵeld"](92, 0, null, null, 38, "kd-help-section", [], null, null, null, View_HelpSectionComponent_0, RenderType_HelpSectionComponent)), core["ɵdid"](93, 49152, null, 0, HelpSectionComponent, [], null, null), (_l()(), 
            core["ɵeld"](94, 0, null, 0, 28, "mat-form-field", [ [ "class", "mat-form-field" ] ], [ [ 2, "mat-form-field-appearance-standard", null ], [ 2, "mat-form-field-appearance-fill", null ], [ 2, "mat-form-field-appearance-outline", null ], [ 2, "mat-form-field-appearance-legacy", null ], [ 2, "mat-form-field-invalid", null ], [ 2, "mat-form-field-can-float", null ], [ 2, "mat-form-field-should-float", null ], [ 2, "mat-form-field-has-label", null ], [ 2, "mat-form-field-hide-placeholder", null ], [ 2, "mat-form-field-disabled", null ], [ 2, "mat-form-field-autofilled", null ], [ 2, "mat-focused", null ], [ 2, "mat-accent", null ], [ 2, "mat-warn", null ], [ 2, "ng-untouched", null ], [ 2, "ng-touched", null ], [ 2, "ng-pristine", null ], [ 2, "ng-dirty", null ], [ 2, "ng-valid", null ], [ 2, "ng-invalid", null ], [ 2, "ng-pending", null ], [ 2, "_mat-animation-noopable", null ] ], null, null, form_field_index_ngfactory.b, form_field_index_ngfactory.a)), core["ɵdid"](95, 7520256, null, 9, form_field.c, [ core.ElementRef, core.ChangeDetectorRef, [ 2, fesm2015_core.h ], [ 2, bidi.b ], [ 2, form_field.a ], platform.a, core.NgZone, [ 2, animations.a ] ], null, null), core["ɵqud"](603979776, 19, {
                _controlNonStatic: 0
            }), core["ɵqud"](335544320, 20, {
                _controlStatic: 0
            }), core["ɵqud"](603979776, 21, {
                _labelChildNonStatic: 0
            }), core["ɵqud"](335544320, 22, {
                _labelChildStatic: 0
            }), core["ɵqud"](603979776, 23, {
                _placeholderChild: 0
            }), core["ɵqud"](603979776, 24, {
                _errorChildren: 1
            }), core["ɵqud"](603979776, 25, {
                _hintChildren: 1
            }), core["ɵqud"](603979776, 26, {
                _prefixChildren: 1
            }), core["ɵqud"](603979776, 27, {
                _suffixChildren: 1
            }), (_l()(), core["ɵeld"](105, 0, null, 1, 11, "input", [ [ "class", "mat-input-element mat-form-field-autofill-control" ], [ "formControlName", "replicas" ], [ "kdWarnThreshold", "100" ], [ "matInput", "" ], [ "min", "1" ], [ "placeholder", "Number of pods" ], [ "required", "" ], [ "type", "number" ] ], [ [ 1, "required", 0 ], [ 2, "ng-untouched", null ], [ 2, "ng-touched", null ], [ 2, "ng-pristine", null ], [ 2, "ng-dirty", null ], [ 2, "ng-valid", null ], [ 2, "ng-invalid", null ], [ 2, "ng-pending", null ], [ 2, "mat-input-server", null ], [ 1, "id", 0 ], [ 1, "placeholder", 0 ], [ 8, "disabled", 0 ], [ 8, "required", 0 ], [ 1, "readonly", 0 ], [ 1, "aria-describedby", 0 ], [ 1, "aria-invalid", 0 ], [ 1, "aria-required", 0 ] ], [ [ null, "input" ], [ null, "blur" ], [ null, "compositionstart" ], [ null, "compositionend" ], [ null, "change" ], [ null, "focus" ] ], (function(_v, en, $event) {
                var ad = !0;
                return "input" === en && (ad = !1 !== core["ɵnov"](_v, 106)._handleInput($event.target.value) && ad), 
                "blur" === en && (ad = !1 !== core["ɵnov"](_v, 106).onTouched() && ad), "compositionstart" === en && (ad = !1 !== core["ɵnov"](_v, 106)._compositionStart() && ad), 
                "compositionend" === en && (ad = !1 !== core["ɵnov"](_v, 106)._compositionEnd($event.target.value) && ad), 
                "change" === en && (ad = !1 !== core["ɵnov"](_v, 107).onChange($event.target.value) && ad), 
                "input" === en && (ad = !1 !== core["ɵnov"](_v, 107).onChange($event.target.value) && ad), 
                "blur" === en && (ad = !1 !== core["ɵnov"](_v, 107).onTouched() && ad), "blur" === en && (ad = !1 !== core["ɵnov"](_v, 115)._focusChanged(!1) && ad), 
                "focus" === en && (ad = !1 !== core["ɵnov"](_v, 115)._focusChanged(!0) && ad), "input" === en && (ad = !1 !== core["ɵnov"](_v, 115)._onInput() && ad), 
                ad;
            }), null, null)), core["ɵdid"](106, 16384, null, 0, fesm2015_forms.DefaultValueAccessor, [ core.Renderer2, core.ElementRef, [ 2, fesm2015_forms.COMPOSITION_BUFFER_MODE ] ], null, null), core["ɵdid"](107, 16384, null, 0, fesm2015_forms.NumberValueAccessor, [ core.Renderer2, core.ElementRef ], null, null), core["ɵdid"](108, 16384, null, 0, fesm2015_forms.RequiredValidator, [], {
                required: [ 0, "required" ]
            }, null), core["ɵdid"](109, 16384, null, 0, WarnThresholdValidator, [], {
                kdWarnThreshold: [ 0, "kdWarnThreshold" ]
            }, null), core["ɵprd"](1024, null, fesm2015_forms.NG_VALIDATORS, (function(p0_0, p1_0) {
                return [ p0_0, p1_0 ];
            }), [ fesm2015_forms.RequiredValidator, WarnThresholdValidator ]), core["ɵprd"](1024, null, fesm2015_forms.NG_VALUE_ACCESSOR, (function(p0_0, p1_0) {
                return [ p0_0, p1_0 ];
            }), [ fesm2015_forms.DefaultValueAccessor, fesm2015_forms.NumberValueAccessor ]), core["ɵdid"](112, 671744, null, 0, fesm2015_forms.FormControlName, [ [ 3, fesm2015_forms.ControlContainer ], [ 6, fesm2015_forms.NG_VALIDATORS ], [ 8, null ], [ 6, fesm2015_forms.NG_VALUE_ACCESSOR ], [ 2, fesm2015_forms["ɵangular_packages_forms_forms_p"] ] ], {
                name: [ 0, "name" ]
            }, null), core["ɵprd"](2048, null, fesm2015_forms.NgControl, null, [ fesm2015_forms.FormControlName ]), core["ɵdid"](114, 16384, null, 0, fesm2015_forms.NgControlStatus, [ [ 4, fesm2015_forms.NgControl ] ], null, null), core["ɵdid"](115, 999424, null, 0, input.a, [ core.ElementRef, platform.a, [ 6, fesm2015_forms.NgControl ], [ 2, fesm2015_forms.NgForm ], [ 2, fesm2015_forms.FormGroupDirective ], fesm2015_core.d, [ 8, null ], text_field.a, core.NgZone ], {
                placeholder: [ 0, "placeholder" ],
                required: [ 1, "required" ],
                type: [ 2, "type" ]
            }, null), core["ɵprd"](2048, [ [ 19, 4 ], [ 20, 4 ] ], form_field.d, null, [ input.a ]), (_l()(), 
            core["ɵand"](16777216, null, 5, 1, null, View_CreateFromFormComponent_6)), core["ɵdid"](118, 16384, null, 0, common.NgIf, [ core.ViewContainerRef, core.TemplateRef ], {
                ngIf: [ 0, "ngIf" ]
            }, null), (_l()(), core["ɵand"](16777216, null, 5, 1, null, View_CreateFromFormComponent_7)), core["ɵdid"](120, 16384, null, 0, common.NgIf, [ core.ViewContainerRef, core.TemplateRef ], {
                ngIf: [ 0, "ngIf" ]
            }, null), (_l()(), core["ɵand"](16777216, null, 5, 1, null, View_CreateFromFormComponent_8)), core["ɵdid"](122, 16384, null, 0, common.NgIf, [ core.ViewContainerRef, core.TemplateRef ], {
                ngIf: [ 0, "ngIf" ]
            }, null), (_l()(), core["ɵeld"](123, 0, null, 0, 7, "kd-user-help", [], null, null, null, View_UserHelpComponent_0, RenderType_UserHelpComponent)), core["ɵdid"](124, 49152, null, 0, UserHelpComponent, [], null, null), (_l()(), 
            core["ɵeld"](125, 0, null, 0, 1, null, null, null, null, null, null, null)), (_l()(), 
            core["ɵted"](-1, null, [ "A Deployment will be created to maintain the desired number of pods across your cluster." ])), (_l()(), 
            core["ɵeld"](127, 0, null, 0, 3, "a", [ [ "href", "https://kubernetes.io/docs/concepts/workloads/controllers/deployment/" ], [ "tabindex", "-1" ], [ "target", "_blank" ] ], null, null, null, null, null)), (_l()(), 
            core["ɵted"](-1, null, [ " Learn more " ])), (_l()(), core["ɵeld"](129, 0, null, null, 1, "i", [ [ "class", "material-icons" ] ], null, null, null, null, null)), (_l()(), 
            core["ɵted"](-1, null, [ "open_in_new" ])), (_l()(), core["ɵeld"](131, 0, null, null, 18, "kd-help-section", [], null, null, null, View_HelpSectionComponent_0, RenderType_HelpSectionComponent)), core["ɵdid"](132, 49152, null, 0, HelpSectionComponent, [], null, null), (_l()(), 
            core["ɵeld"](133, 0, null, 0, 8, "div", [ [ "fxLayout", "column" ] ], null, null, null, null, null)), core["ɵdid"](134, 671744, null, 0, flex.d, [ core.ElementRef, esm2015_core.i, [ 2, flex.k ], esm2015_core.f ], {
                fxLayout: [ 0, "fxLayout" ]
            }, null), (_l()(), core["ɵeld"](135, 0, null, null, 6, "kd-port-mappings", [ [ "formControlName", "portMappings" ] ], [ [ 2, "ng-untouched", null ], [ 2, "ng-touched", null ], [ 2, "ng-pristine", null ], [ 2, "ng-dirty", null ], [ 2, "ng-valid", null ], [ 2, "ng-invalid", null ], [ 2, "ng-pending", null ] ], [ [ null, "changeExternal" ] ], (function(_v, en, $event) {
                var ad = !0;
                return "changeExternal" === en && (ad = !1 !== _v.component.changeExternal($event) && ad), 
                ad;
            }), View_PortMappingsComponent_0, RenderType_PortMappingsComponent)), core["ɵdid"](136, 114688, null, 0, component_PortMappingsComponent, [ fesm2015_forms.FormBuilder, fesm2015_http.c ], {
                protocols: [ 0, "protocols" ],
                isExternal: [ 1, "isExternal" ]
            }, {
                changeExternal: "changeExternal"
            }), core["ɵprd"](1024, null, fesm2015_forms.NG_ASYNC_VALIDATORS, (function(p0_0) {
                return [ p0_0 ];
            }), [ component_PortMappingsComponent ]), core["ɵprd"](1024, null, fesm2015_forms.NG_VALUE_ACCESSOR, (function(p0_0) {
                return [ p0_0 ];
            }), [ component_PortMappingsComponent ]), core["ɵdid"](139, 671744, null, 0, fesm2015_forms.FormControlName, [ [ 3, fesm2015_forms.ControlContainer ], [ 8, null ], [ 6, fesm2015_forms.NG_ASYNC_VALIDATORS ], [ 6, fesm2015_forms.NG_VALUE_ACCESSOR ], [ 2, fesm2015_forms["ɵangular_packages_forms_forms_p"] ] ], {
                name: [ 0, "name" ]
            }, null), core["ɵprd"](2048, null, fesm2015_forms.NgControl, null, [ fesm2015_forms.FormControlName ]), core["ɵdid"](141, 16384, null, 0, fesm2015_forms.NgControlStatus, [ [ 4, fesm2015_forms.NgControl ] ], null, null), (_l()(), 
            core["ɵeld"](142, 0, null, 0, 7, "kd-user-help", [], null, null, null, View_UserHelpComponent_0, RenderType_UserHelpComponent)), core["ɵdid"](143, 49152, null, 0, UserHelpComponent, [], null, null), (_l()(), 
            core["ɵeld"](144, 0, null, 0, 1, null, null, null, null, null, null, null)), (_l()(), 
            core["ɵted"](-1, null, [ "Optionally, an internal or external Service can be defined to map an incoming Port to a target Port seen by the container." ])), (_l()(), 
            core["ɵeld"](146, 0, null, 0, 3, "a", [ [ "href", "http://kubernetes.io/docs/user-guide/services/" ], [ "tabindex", "-1" ], [ "target", "_blank" ] ], null, null, null, null, null)), (_l()(), 
            core["ɵted"](-1, null, [ " Learn more " ])), (_l()(), core["ɵeld"](148, 0, null, null, 1, "i", [ [ "class", "material-icons" ] ], null, null, null, null, null)), (_l()(), 
            core["ɵted"](-1, null, [ "open_in_new" ])), (_l()(), core["ɵeld"](150, 0, null, null, 267, "div", [], [ [ 8, "hidden", 0 ] ], null, null, null, null)), (_l()(), 
            core["ɵeld"](151, 0, null, null, 23, "kd-help-section", [], null, null, null, View_HelpSectionComponent_0, RenderType_HelpSectionComponent)), core["ɵdid"](152, 49152, null, 0, HelpSectionComponent, [], null, null), (_l()(), 
            core["ɵeld"](153, 0, null, 0, 18, "mat-form-field", [ [ "class", "mat-form-field" ] ], [ [ 2, "mat-form-field-appearance-standard", null ], [ 2, "mat-form-field-appearance-fill", null ], [ 2, "mat-form-field-appearance-outline", null ], [ 2, "mat-form-field-appearance-legacy", null ], [ 2, "mat-form-field-invalid", null ], [ 2, "mat-form-field-can-float", null ], [ 2, "mat-form-field-should-float", null ], [ 2, "mat-form-field-has-label", null ], [ 2, "mat-form-field-hide-placeholder", null ], [ 2, "mat-form-field-disabled", null ], [ 2, "mat-form-field-autofilled", null ], [ 2, "mat-focused", null ], [ 2, "mat-accent", null ], [ 2, "mat-warn", null ], [ 2, "ng-untouched", null ], [ 2, "ng-touched", null ], [ 2, "ng-pristine", null ], [ 2, "ng-dirty", null ], [ 2, "ng-valid", null ], [ 2, "ng-invalid", null ], [ 2, "ng-pending", null ], [ 2, "_mat-animation-noopable", null ] ], null, null, form_field_index_ngfactory.b, form_field_index_ngfactory.a)), core["ɵdid"](154, 7520256, null, 9, form_field.c, [ core.ElementRef, core.ChangeDetectorRef, [ 2, fesm2015_core.h ], [ 2, bidi.b ], [ 2, form_field.a ], platform.a, core.NgZone, [ 2, animations.a ] ], null, null), core["ɵqud"](603979776, 28, {
                _controlNonStatic: 0
            }), core["ɵqud"](335544320, 29, {
                _controlStatic: 0
            }), core["ɵqud"](603979776, 30, {
                _labelChildNonStatic: 0
            }), core["ɵqud"](335544320, 31, {
                _labelChildStatic: 0
            }), core["ɵqud"](603979776, 32, {
                _placeholderChild: 0
            }), core["ɵqud"](603979776, 33, {
                _errorChildren: 1
            }), core["ɵqud"](603979776, 34, {
                _hintChildren: 1
            }), core["ɵqud"](603979776, 35, {
                _prefixChildren: 1
            }), core["ɵqud"](603979776, 36, {
                _suffixChildren: 1
            }), (_l()(), core["ɵeld"](164, 0, null, 1, 7, "textarea", [ [ "class", "mat-input-element mat-form-field-autofill-control" ], [ "formControlName", "description" ], [ "matInput", "" ], [ "placeholder", "Description" ] ], [ [ 2, "ng-untouched", null ], [ 2, "ng-touched", null ], [ 2, "ng-pristine", null ], [ 2, "ng-dirty", null ], [ 2, "ng-valid", null ], [ 2, "ng-invalid", null ], [ 2, "ng-pending", null ], [ 2, "mat-input-server", null ], [ 1, "id", 0 ], [ 1, "placeholder", 0 ], [ 8, "disabled", 0 ], [ 8, "required", 0 ], [ 1, "readonly", 0 ], [ 1, "aria-describedby", 0 ], [ 1, "aria-invalid", 0 ], [ 1, "aria-required", 0 ] ], [ [ null, "input" ], [ null, "blur" ], [ null, "compositionstart" ], [ null, "compositionend" ], [ null, "focus" ] ], (function(_v, en, $event) {
                var ad = !0;
                return "input" === en && (ad = !1 !== core["ɵnov"](_v, 165)._handleInput($event.target.value) && ad), 
                "blur" === en && (ad = !1 !== core["ɵnov"](_v, 165).onTouched() && ad), "compositionstart" === en && (ad = !1 !== core["ɵnov"](_v, 165)._compositionStart() && ad), 
                "compositionend" === en && (ad = !1 !== core["ɵnov"](_v, 165)._compositionEnd($event.target.value) && ad), 
                "blur" === en && (ad = !1 !== core["ɵnov"](_v, 170)._focusChanged(!1) && ad), "focus" === en && (ad = !1 !== core["ɵnov"](_v, 170)._focusChanged(!0) && ad), 
                "input" === en && (ad = !1 !== core["ɵnov"](_v, 170)._onInput() && ad), ad;
            }), null, null)), core["ɵdid"](165, 16384, null, 0, fesm2015_forms.DefaultValueAccessor, [ core.Renderer2, core.ElementRef, [ 2, fesm2015_forms.COMPOSITION_BUFFER_MODE ] ], null, null), core["ɵprd"](1024, null, fesm2015_forms.NG_VALUE_ACCESSOR, (function(p0_0) {
                return [ p0_0 ];
            }), [ fesm2015_forms.DefaultValueAccessor ]), core["ɵdid"](167, 671744, null, 0, fesm2015_forms.FormControlName, [ [ 3, fesm2015_forms.ControlContainer ], [ 8, null ], [ 8, null ], [ 6, fesm2015_forms.NG_VALUE_ACCESSOR ], [ 2, fesm2015_forms["ɵangular_packages_forms_forms_p"] ] ], {
                name: [ 0, "name" ]
            }, null), core["ɵprd"](2048, null, fesm2015_forms.NgControl, null, [ fesm2015_forms.FormControlName ]), core["ɵdid"](169, 16384, null, 0, fesm2015_forms.NgControlStatus, [ [ 4, fesm2015_forms.NgControl ] ], null, null), core["ɵdid"](170, 999424, null, 0, input.a, [ core.ElementRef, platform.a, [ 6, fesm2015_forms.NgControl ], [ 2, fesm2015_forms.NgForm ], [ 2, fesm2015_forms.FormGroupDirective ], fesm2015_core.d, [ 8, null ], text_field.a, core.NgZone ], {
                placeholder: [ 0, "placeholder" ]
            }, null), core["ɵprd"](2048, [ [ 28, 4 ], [ 29, 4 ] ], form_field.d, null, [ input.a ]), (_l()(), 
            core["ɵeld"](172, 0, null, 0, 2, "kd-user-help", [], null, null, null, View_UserHelpComponent_0, RenderType_UserHelpComponent)), core["ɵdid"](173, 49152, null, 0, UserHelpComponent, [], null, null), (_l()(), 
            core["ɵted"](-1, 0, [ " The description will be added as an annotation to the Deployment and displayed in the application's details. " ])), (_l()(), 
            core["ɵeld"](175, 0, null, null, 20, "kd-help-section", [], null, null, null, View_HelpSectionComponent_0, RenderType_HelpSectionComponent)), core["ɵdid"](176, 49152, null, 0, HelpSectionComponent, [], null, null), (_l()(), 
            core["ɵeld"](177, 0, null, 0, 10, "div", [ [ "fxLayout", "column" ] ], null, null, null, null, null)), core["ɵdid"](178, 671744, null, 0, flex.d, [ core.ElementRef, esm2015_core.i, [ 2, flex.k ], esm2015_core.f ], {
                fxLayout: [ 0, "fxLayout" ]
            }, null), (_l()(), core["ɵeld"](179, 0, null, null, 1, "div", [ [ "class", "kd-margin-bottom" ] ], null, null, null, null, null)), (_l()(), 
            core["ɵted"](-1, null, [ "Labels" ])), (_l()(), core["ɵeld"](181, 0, null, null, 6, "kd-deploy-label", [ [ "formControlName", "labels" ] ], [ [ 2, "ng-untouched", null ], [ 2, "ng-touched", null ], [ 2, "ng-pristine", null ], [ 2, "ng-dirty", null ], [ 2, "ng-valid", null ], [ 2, "ng-invalid", null ], [ 2, "ng-pending", null ] ], null, null, View_DeployLabelComponent_0, RenderType_DeployLabelComponent)), core["ɵdid"](182, 114688, null, 0, component_DeployLabelComponent, [ fesm2015_forms.FormBuilder ], {
                labelArr: [ 0, "labelArr" ]
            }, null), core["ɵprd"](1024, null, fesm2015_forms.NG_VALIDATORS, (function(p0_0) {
                return [ p0_0 ];
            }), [ component_DeployLabelComponent ]), core["ɵprd"](1024, null, fesm2015_forms.NG_VALUE_ACCESSOR, (function(p0_0) {
                return [ p0_0 ];
            }), [ component_DeployLabelComponent ]), core["ɵdid"](185, 671744, null, 0, fesm2015_forms.FormControlName, [ [ 3, fesm2015_forms.ControlContainer ], [ 6, fesm2015_forms.NG_VALIDATORS ], [ 8, null ], [ 6, fesm2015_forms.NG_VALUE_ACCESSOR ], [ 2, fesm2015_forms["ɵangular_packages_forms_forms_p"] ] ], {
                name: [ 0, "name" ]
            }, null), core["ɵprd"](2048, null, fesm2015_forms.NgControl, null, [ fesm2015_forms.FormControlName ]), core["ɵdid"](187, 16384, null, 0, fesm2015_forms.NgControlStatus, [ [ 4, fesm2015_forms.NgControl ] ], null, null), (_l()(), 
            core["ɵeld"](188, 0, null, 0, 7, "kd-user-help", [], null, null, null, View_UserHelpComponent_0, RenderType_UserHelpComponent)), core["ɵdid"](189, 49152, null, 0, UserHelpComponent, [], null, null), (_l()(), 
            core["ɵeld"](190, 0, null, 0, 1, null, null, null, null, null, null, null)), (_l()(), 
            core["ɵted"](-1, null, [ "The specified labels will be applied to the created Deployment, Service (if any) and Pods. Common labels include release, environment, tier, partition and track." ])), (_l()(), 
            core["ɵeld"](192, 0, null, 0, 3, "a", [ [ "href", "http://kubernetes.io/docs/user-guide/labels/" ], [ "tabindex", "-1" ], [ "target", "_blank" ] ], null, null, null, null, null)), (_l()(), 
            core["ɵted"](-1, null, [ " Learn more " ])), (_l()(), core["ɵeld"](194, 0, null, null, 1, "i", [ [ "class", "material-icons" ] ], null, null, null, null, null)), (_l()(), 
            core["ɵted"](-1, null, [ "open_in_new" ])), (_l()(), core["ɵeld"](196, 0, null, null, 37, "kd-help-section", [], null, null, null, View_HelpSectionComponent_0, RenderType_HelpSectionComponent)), core["ɵdid"](197, 49152, null, 0, HelpSectionComponent, [], null, null), (_l()(), 
            core["ɵeld"](198, 0, null, 0, 27, "mat-form-field", [ [ "class", "mat-form-field" ] ], [ [ 2, "mat-form-field-appearance-standard", null ], [ 2, "mat-form-field-appearance-fill", null ], [ 2, "mat-form-field-appearance-outline", null ], [ 2, "mat-form-field-appearance-legacy", null ], [ 2, "mat-form-field-invalid", null ], [ 2, "mat-form-field-can-float", null ], [ 2, "mat-form-field-should-float", null ], [ 2, "mat-form-field-has-label", null ], [ 2, "mat-form-field-hide-placeholder", null ], [ 2, "mat-form-field-disabled", null ], [ 2, "mat-form-field-autofilled", null ], [ 2, "mat-focused", null ], [ 2, "mat-accent", null ], [ 2, "mat-warn", null ], [ 2, "ng-untouched", null ], [ 2, "ng-touched", null ], [ 2, "ng-pristine", null ], [ 2, "ng-dirty", null ], [ 2, "ng-valid", null ], [ 2, "ng-invalid", null ], [ 2, "ng-pending", null ], [ 2, "_mat-animation-noopable", null ] ], null, null, form_field_index_ngfactory.b, form_field_index_ngfactory.a)), core["ɵdid"](199, 7520256, null, 9, form_field.c, [ core.ElementRef, core.ChangeDetectorRef, [ 2, fesm2015_core.h ], [ 2, bidi.b ], [ 2, form_field.a ], platform.a, core.NgZone, [ 2, animations.a ] ], null, null), core["ɵqud"](603979776, 37, {
                _controlNonStatic: 0
            }), core["ɵqud"](335544320, 38, {
                _controlStatic: 0
            }), core["ɵqud"](603979776, 39, {
                _labelChildNonStatic: 0
            }), core["ɵqud"](335544320, 40, {
                _labelChildStatic: 0
            }), core["ɵqud"](603979776, 41, {
                _placeholderChild: 0
            }), core["ɵqud"](603979776, 42, {
                _errorChildren: 1
            }), core["ɵqud"](603979776, 43, {
                _hintChildren: 1
            }), core["ɵqud"](603979776, 44, {
                _prefixChildren: 1
            }), core["ɵqud"](603979776, 45, {
                _suffixChildren: 1
            }), (_l()(), core["ɵeld"](209, 0, null, 1, 16, "mat-select", [ [ "class", "mat-select" ], [ "formControlName", "namespace" ], [ "placeholder", "Namespace" ], [ "required", "" ], [ "role", "listbox" ] ], [ [ 1, "required", 0 ], [ 2, "ng-untouched", null ], [ 2, "ng-touched", null ], [ 2, "ng-pristine", null ], [ 2, "ng-dirty", null ], [ 2, "ng-valid", null ], [ 2, "ng-invalid", null ], [ 2, "ng-pending", null ], [ 1, "id", 0 ], [ 1, "tabindex", 0 ], [ 1, "aria-label", 0 ], [ 1, "aria-labelledby", 0 ], [ 1, "aria-required", 0 ], [ 1, "aria-disabled", 0 ], [ 1, "aria-invalid", 0 ], [ 1, "aria-owns", 0 ], [ 1, "aria-multiselectable", 0 ], [ 1, "aria-describedby", 0 ], [ 1, "aria-activedescendant", 0 ], [ 2, "mat-select-disabled", null ], [ 2, "mat-select-invalid", null ], [ 2, "mat-select-required", null ], [ 2, "mat-select-empty", null ] ], [ [ null, "click" ], [ null, "keydown" ], [ null, "focus" ], [ null, "blur" ] ], (function(_v, en, $event) {
                var ad = !0, _co = _v.component;
                return "keydown" === en && (ad = !1 !== core["ɵnov"](_v, 216)._handleKeydown($event) && ad), 
                "focus" === en && (ad = !1 !== core["ɵnov"](_v, 216)._onFocus() && ad), "blur" === en && (ad = !1 !== core["ɵnov"](_v, 216)._onBlur() && ad), 
                "click" === en && (ad = !1 !== _co.resetImagePullSecret() && ad), ad;
            }), select_index_ngfactory.b, select_index_ngfactory.a)), core["ɵprd"](6144, null, fesm2015_core.j, null, [ fesm2015_select.c ]), core["ɵdid"](211, 16384, null, 0, fesm2015_forms.RequiredValidator, [], {
                required: [ 0, "required" ]
            }, null), core["ɵprd"](1024, null, fesm2015_forms.NG_VALIDATORS, (function(p0_0) {
                return [ p0_0 ];
            }), [ fesm2015_forms.RequiredValidator ]), core["ɵdid"](213, 671744, null, 0, fesm2015_forms.FormControlName, [ [ 3, fesm2015_forms.ControlContainer ], [ 6, fesm2015_forms.NG_VALIDATORS ], [ 8, null ], [ 8, null ], [ 2, fesm2015_forms["ɵangular_packages_forms_forms_p"] ] ], {
                name: [ 0, "name" ]
            }, null), core["ɵprd"](2048, null, fesm2015_forms.NgControl, null, [ fesm2015_forms.FormControlName ]), core["ɵdid"](215, 16384, null, 0, fesm2015_forms.NgControlStatus, [ [ 4, fesm2015_forms.NgControl ] ], null, null), core["ɵdid"](216, 2080768, null, 3, fesm2015_select.c, [ scrolling.d, core.ChangeDetectorRef, core.NgZone, fesm2015_core.d, core.ElementRef, [ 2, bidi.b ], [ 2, fesm2015_forms.NgForm ], [ 2, fesm2015_forms.FormGroupDirective ], [ 2, form_field.c ], [ 6, fesm2015_forms.NgControl ], [ 8, null ], fesm2015_select.a, a11y.i ], {
                placeholder: [ 0, "placeholder" ],
                required: [ 1, "required" ]
            }, null), core["ɵqud"](603979776, 46, {
                options: 1
            }), core["ɵqud"](603979776, 47, {
                optionGroups: 1
            }), core["ɵqud"](603979776, 48, {
                customTrigger: 0
            }), core["ɵprd"](2048, [ [ 37, 4 ], [ 38, 4 ] ], form_field.d, null, [ fesm2015_select.c ]), (_l()(), 
            core["ɵand"](16777216, null, 1, 1, null, View_CreateFromFormComponent_9)), core["ɵdid"](222, 278528, null, 0, common.NgForOf, [ core.ViewContainerRef, core.TemplateRef, core.IterableDiffers ], {
                ngForOf: [ 0, "ngForOf" ]
            }, null), (_l()(), core["ɵeld"](223, 0, null, 1, 2, "mat-option", [ [ "class", "mat-option" ], [ "role", "option" ] ], [ [ 1, "tabindex", 0 ], [ 2, "mat-selected", null ], [ 2, "mat-option-multiple", null ], [ 2, "mat-active", null ], [ 8, "id", 0 ], [ 1, "aria-selected", 0 ], [ 1, "aria-disabled", 0 ], [ 2, "mat-option-disabled", null ] ], [ [ null, "click" ], [ null, "keydown" ] ], (function(_v, en, $event) {
                var ad = !0, _co = _v.component;
                return "click" === en && (ad = !1 !== core["ɵnov"](_v, 224)._selectViaInteraction() && ad), 
                "keydown" === en && (ad = !1 !== core["ɵnov"](_v, 224)._handleKeydown($event) && ad), 
                "click" === en && (ad = !1 !== _co.handleNamespaceDialog() && ad), ad;
            }), core_index_ngfactory.d, core_index_ngfactory.b)), core["ɵdid"](224, 8568832, [ [ 46, 4 ] ], 0, fesm2015_core.p, [ core.ElementRef, core.ChangeDetectorRef, [ 2, fesm2015_core.j ], [ 2, fesm2015_core.o ] ], null, null), (_l()(), 
            core["ɵted"](-1, 0, [ " Create a new namespace... " ])), (_l()(), core["ɵeld"](226, 0, null, 0, 7, "kd-user-help", [], null, null, null, View_UserHelpComponent_0, RenderType_UserHelpComponent)), core["ɵdid"](227, 49152, null, 0, UserHelpComponent, [], null, null), (_l()(), 
            core["ɵeld"](228, 0, null, 0, 1, null, null, null, null, null, null, null)), (_l()(), 
            core["ɵted"](-1, null, [ "Namespaces let you partition resources into logically named groups." ])), (_l()(), 
            core["ɵeld"](230, 0, null, 0, 3, "a", [ [ "href", "http://kubernetes.io/docs/admin/namespaces/" ], [ "tabindex", "-1" ], [ "target", "_blank" ] ], null, null, null, null, null)), (_l()(), 
            core["ɵted"](-1, null, [ " Learn more " ])), (_l()(), core["ɵeld"](232, 0, null, null, 1, "i", [ [ "class", "material-icons" ] ], null, null, null, null, null)), (_l()(), 
            core["ɵted"](-1, null, [ "open_in_new" ])), (_l()(), core["ɵeld"](234, 0, null, null, 35, "kd-help-section", [], null, null, null, View_HelpSectionComponent_0, RenderType_HelpSectionComponent)), core["ɵdid"](235, 49152, null, 0, HelpSectionComponent, [], null, null), (_l()(), 
            core["ɵeld"](236, 0, null, 0, 25, "mat-form-field", [ [ "class", "mat-form-field" ] ], [ [ 2, "mat-form-field-appearance-standard", null ], [ 2, "mat-form-field-appearance-fill", null ], [ 2, "mat-form-field-appearance-outline", null ], [ 2, "mat-form-field-appearance-legacy", null ], [ 2, "mat-form-field-invalid", null ], [ 2, "mat-form-field-can-float", null ], [ 2, "mat-form-field-should-float", null ], [ 2, "mat-form-field-has-label", null ], [ 2, "mat-form-field-hide-placeholder", null ], [ 2, "mat-form-field-disabled", null ], [ 2, "mat-form-field-autofilled", null ], [ 2, "mat-focused", null ], [ 2, "mat-accent", null ], [ 2, "mat-warn", null ], [ 2, "ng-untouched", null ], [ 2, "ng-touched", null ], [ 2, "ng-pristine", null ], [ 2, "ng-dirty", null ], [ 2, "ng-valid", null ], [ 2, "ng-invalid", null ], [ 2, "ng-pending", null ], [ 2, "_mat-animation-noopable", null ] ], null, null, form_field_index_ngfactory.b, form_field_index_ngfactory.a)), core["ɵdid"](237, 7520256, null, 9, form_field.c, [ core.ElementRef, core.ChangeDetectorRef, [ 2, fesm2015_core.h ], [ 2, bidi.b ], [ 2, form_field.a ], platform.a, core.NgZone, [ 2, animations.a ] ], null, null), core["ɵqud"](603979776, 49, {
                _controlNonStatic: 0
            }), core["ɵqud"](335544320, 50, {
                _controlStatic: 0
            }), core["ɵqud"](603979776, 51, {
                _labelChildNonStatic: 0
            }), core["ɵqud"](335544320, 52, {
                _labelChildStatic: 0
            }), core["ɵqud"](603979776, 53, {
                _placeholderChild: 0
            }), core["ɵqud"](603979776, 54, {
                _errorChildren: 1
            }), core["ɵqud"](603979776, 55, {
                _hintChildren: 1
            }), core["ɵqud"](603979776, 56, {
                _prefixChildren: 1
            }), core["ɵqud"](603979776, 57, {
                _suffixChildren: 1
            }), (_l()(), core["ɵeld"](247, 0, null, 1, 14, "mat-select", [ [ "class", "mat-select" ], [ "formControlName", "imagePullSecret" ], [ "placeholder", "Image Pull Secret" ], [ "role", "listbox" ] ], [ [ 2, "ng-untouched", null ], [ 2, "ng-touched", null ], [ 2, "ng-pristine", null ], [ 2, "ng-dirty", null ], [ 2, "ng-valid", null ], [ 2, "ng-invalid", null ], [ 2, "ng-pending", null ], [ 1, "id", 0 ], [ 1, "tabindex", 0 ], [ 1, "aria-label", 0 ], [ 1, "aria-labelledby", 0 ], [ 1, "aria-required", 0 ], [ 1, "aria-disabled", 0 ], [ 1, "aria-invalid", 0 ], [ 1, "aria-owns", 0 ], [ 1, "aria-multiselectable", 0 ], [ 1, "aria-describedby", 0 ], [ 1, "aria-activedescendant", 0 ], [ 2, "mat-select-disabled", null ], [ 2, "mat-select-invalid", null ], [ 2, "mat-select-required", null ], [ 2, "mat-select-empty", null ] ], [ [ null, "click" ], [ null, "keydown" ], [ null, "focus" ], [ null, "blur" ] ], (function(_v, en, $event) {
                var ad = !0, _co = _v.component;
                return "keydown" === en && (ad = !1 !== core["ɵnov"](_v, 252)._handleKeydown($event) && ad), 
                "focus" === en && (ad = !1 !== core["ɵnov"](_v, 252)._onFocus() && ad), "blur" === en && (ad = !1 !== core["ɵnov"](_v, 252)._onBlur() && ad), 
                "click" === en && (ad = !1 !== _co.getSecrets() && ad), ad;
            }), select_index_ngfactory.b, select_index_ngfactory.a)), core["ɵprd"](6144, null, fesm2015_core.j, null, [ fesm2015_select.c ]), core["ɵdid"](249, 671744, null, 0, fesm2015_forms.FormControlName, [ [ 3, fesm2015_forms.ControlContainer ], [ 8, null ], [ 8, null ], [ 8, null ], [ 2, fesm2015_forms["ɵangular_packages_forms_forms_p"] ] ], {
                name: [ 0, "name" ]
            }, null), core["ɵprd"](2048, null, fesm2015_forms.NgControl, null, [ fesm2015_forms.FormControlName ]), core["ɵdid"](251, 16384, null, 0, fesm2015_forms.NgControlStatus, [ [ 4, fesm2015_forms.NgControl ] ], null, null), core["ɵdid"](252, 2080768, null, 3, fesm2015_select.c, [ scrolling.d, core.ChangeDetectorRef, core.NgZone, fesm2015_core.d, core.ElementRef, [ 2, bidi.b ], [ 2, fesm2015_forms.NgForm ], [ 2, fesm2015_forms.FormGroupDirective ], [ 2, form_field.c ], [ 6, fesm2015_forms.NgControl ], [ 8, null ], fesm2015_select.a, a11y.i ], {
                placeholder: [ 0, "placeholder" ]
            }, null), core["ɵqud"](603979776, 58, {
                options: 1
            }), core["ɵqud"](603979776, 59, {
                optionGroups: 1
            }), core["ɵqud"](603979776, 60, {
                customTrigger: 0
            }), core["ɵprd"](2048, [ [ 49, 4 ], [ 50, 4 ] ], form_field.d, null, [ fesm2015_select.c ]), (_l()(), 
            core["ɵand"](16777216, null, 1, 1, null, View_CreateFromFormComponent_10)), core["ɵdid"](258, 278528, null, 0, common.NgForOf, [ core.ViewContainerRef, core.TemplateRef, core.IterableDiffers ], {
                ngForOf: [ 0, "ngForOf" ]
            }, null), (_l()(), core["ɵeld"](259, 0, null, 1, 2, "mat-option", [ [ "class", "mat-option" ], [ "role", "option" ] ], [ [ 1, "tabindex", 0 ], [ 2, "mat-selected", null ], [ 2, "mat-option-multiple", null ], [ 2, "mat-active", null ], [ 8, "id", 0 ], [ 1, "aria-selected", 0 ], [ 1, "aria-disabled", 0 ], [ 2, "mat-option-disabled", null ] ], [ [ null, "click" ], [ null, "keydown" ] ], (function(_v, en, $event) {
                var ad = !0, _co = _v.component;
                return "click" === en && (ad = !1 !== core["ɵnov"](_v, 260)._selectViaInteraction() && ad), 
                "keydown" === en && (ad = !1 !== core["ɵnov"](_v, 260)._handleKeydown($event) && ad), 
                "click" === en && (ad = !1 !== _co.handleCreateSecretDialog() && ad), ad;
            }), core_index_ngfactory.d, core_index_ngfactory.b)), core["ɵdid"](260, 8568832, [ [ 58, 4 ] ], 0, fesm2015_core.p, [ core.ElementRef, core.ChangeDetectorRef, [ 2, fesm2015_core.j ], [ 2, fesm2015_core.o ] ], null, null), (_l()(), 
            core["ɵted"](-1, 0, [ " Create a new secret... " ])), (_l()(), core["ɵeld"](262, 0, null, 0, 7, "kd-user-help", [], null, null, null, View_UserHelpComponent_0, RenderType_UserHelpComponent)), core["ɵdid"](263, 49152, null, 0, UserHelpComponent, [], null, null), (_l()(), 
            core["ɵeld"](264, 0, null, 0, 1, null, null, null, null, null, null, null)), (_l()(), 
            core["ɵted"](-1, null, [ "The specified image could require a pull secret credential if it is private. You may choose an existing secret or create a new one." ])), (_l()(), 
            core["ɵeld"](266, 0, null, 0, 3, "a", [ [ "href", "http://kubernetes.io/docs/user-guide/secrets/" ], [ "tabindex", "-1" ], [ "target", "_blank" ] ], null, null, null, null, null)), (_l()(), 
            core["ɵted"](-1, null, [ " Learn more " ])), (_l()(), core["ɵeld"](268, 0, null, null, 1, "i", [ [ "class", "material-icons" ] ], null, null, null, null, null)), (_l()(), 
            core["ɵted"](-1, null, [ "open_in_new" ])), (_l()(), core["ɵeld"](270, 0, null, null, 63, "kd-help-section", [], null, null, null, View_HelpSectionComponent_0, RenderType_HelpSectionComponent)), core["ɵdid"](271, 49152, null, 0, HelpSectionComponent, [], null, null), (_l()(), 
            core["ɵeld"](272, 0, null, 0, 53, "div", [ [ "fxLayout", "row" ] ], null, null, null, null, null)), core["ɵdid"](273, 671744, null, 0, flex.d, [ core.ElementRef, esm2015_core.i, [ 2, flex.k ], esm2015_core.f ], {
                fxLayout: [ 0, "fxLayout" ]
            }, null), (_l()(), core["ɵeld"](274, 0, null, null, 24, "mat-form-field", [ [ "class", "mat-form-field" ], [ "fxFlex", "auto" ] ], [ [ 2, "mat-form-field-appearance-standard", null ], [ 2, "mat-form-field-appearance-fill", null ], [ 2, "mat-form-field-appearance-outline", null ], [ 2, "mat-form-field-appearance-legacy", null ], [ 2, "mat-form-field-invalid", null ], [ 2, "mat-form-field-can-float", null ], [ 2, "mat-form-field-should-float", null ], [ 2, "mat-form-field-has-label", null ], [ 2, "mat-form-field-hide-placeholder", null ], [ 2, "mat-form-field-disabled", null ], [ 2, "mat-form-field-autofilled", null ], [ 2, "mat-focused", null ], [ 2, "mat-accent", null ], [ 2, "mat-warn", null ], [ 2, "ng-untouched", null ], [ 2, "ng-touched", null ], [ 2, "ng-pristine", null ], [ 2, "ng-dirty", null ], [ 2, "ng-valid", null ], [ 2, "ng-invalid", null ], [ 2, "ng-pending", null ], [ 2, "_mat-animation-noopable", null ] ], null, null, form_field_index_ngfactory.b, form_field_index_ngfactory.a)), core["ɵdid"](275, 7520256, null, 9, form_field.c, [ core.ElementRef, core.ChangeDetectorRef, [ 2, fesm2015_core.h ], [ 2, bidi.b ], [ 2, form_field.a ], platform.a, core.NgZone, [ 2, animations.a ] ], null, null), core["ɵqud"](603979776, 61, {
                _controlNonStatic: 0
            }), core["ɵqud"](335544320, 62, {
                _controlStatic: 0
            }), core["ɵqud"](603979776, 63, {
                _labelChildNonStatic: 0
            }), core["ɵqud"](335544320, 64, {
                _labelChildStatic: 0
            }), core["ɵqud"](603979776, 65, {
                _placeholderChild: 0
            }), core["ɵqud"](603979776, 66, {
                _errorChildren: 1
            }), core["ɵqud"](603979776, 67, {
                _hintChildren: 1
            }), core["ɵqud"](603979776, 68, {
                _prefixChildren: 1
            }), core["ɵqud"](603979776, 69, {
                _suffixChildren: 1
            }), core["ɵdid"](285, 671744, null, 0, flex.b, [ core.ElementRef, esm2015_core.i, esm2015_core.e, flex.i, esm2015_core.f ], {
                fxFlex: [ 0, "fxFlex" ]
            }, null), (_l()(), core["ɵeld"](286, 0, null, 1, 8, "input", [ [ "class", "mat-input-element mat-form-field-autofill-control" ], [ "formControlName", "cpuRequirement" ], [ "matInput", "" ], [ "min", "0" ], [ "name", "cpuRequirement" ], [ "placeholder", "CPU requirement (cores)" ], [ "type", "number" ] ], [ [ 2, "ng-untouched", null ], [ 2, "ng-touched", null ], [ 2, "ng-pristine", null ], [ 2, "ng-dirty", null ], [ 2, "ng-valid", null ], [ 2, "ng-invalid", null ], [ 2, "ng-pending", null ], [ 2, "mat-input-server", null ], [ 1, "id", 0 ], [ 1, "placeholder", 0 ], [ 8, "disabled", 0 ], [ 8, "required", 0 ], [ 1, "readonly", 0 ], [ 1, "aria-describedby", 0 ], [ 1, "aria-invalid", 0 ], [ 1, "aria-required", 0 ] ], [ [ null, "input" ], [ null, "blur" ], [ null, "compositionstart" ], [ null, "compositionend" ], [ null, "change" ], [ null, "focus" ] ], (function(_v, en, $event) {
                var ad = !0;
                return "input" === en && (ad = !1 !== core["ɵnov"](_v, 287)._handleInput($event.target.value) && ad), 
                "blur" === en && (ad = !1 !== core["ɵnov"](_v, 287).onTouched() && ad), "compositionstart" === en && (ad = !1 !== core["ɵnov"](_v, 287)._compositionStart() && ad), 
                "compositionend" === en && (ad = !1 !== core["ɵnov"](_v, 287)._compositionEnd($event.target.value) && ad), 
                "change" === en && (ad = !1 !== core["ɵnov"](_v, 288).onChange($event.target.value) && ad), 
                "input" === en && (ad = !1 !== core["ɵnov"](_v, 288).onChange($event.target.value) && ad), 
                "blur" === en && (ad = !1 !== core["ɵnov"](_v, 288).onTouched() && ad), "blur" === en && (ad = !1 !== core["ɵnov"](_v, 293)._focusChanged(!1) && ad), 
                "focus" === en && (ad = !1 !== core["ɵnov"](_v, 293)._focusChanged(!0) && ad), "input" === en && (ad = !1 !== core["ɵnov"](_v, 293)._onInput() && ad), 
                ad;
            }), null, null)), core["ɵdid"](287, 16384, null, 0, fesm2015_forms.DefaultValueAccessor, [ core.Renderer2, core.ElementRef, [ 2, fesm2015_forms.COMPOSITION_BUFFER_MODE ] ], null, null), core["ɵdid"](288, 16384, null, 0, fesm2015_forms.NumberValueAccessor, [ core.Renderer2, core.ElementRef ], null, null), core["ɵprd"](1024, null, fesm2015_forms.NG_VALUE_ACCESSOR, (function(p0_0, p1_0) {
                return [ p0_0, p1_0 ];
            }), [ fesm2015_forms.DefaultValueAccessor, fesm2015_forms.NumberValueAccessor ]), core["ɵdid"](290, 671744, null, 0, fesm2015_forms.FormControlName, [ [ 3, fesm2015_forms.ControlContainer ], [ 8, null ], [ 8, null ], [ 6, fesm2015_forms.NG_VALUE_ACCESSOR ], [ 2, fesm2015_forms["ɵangular_packages_forms_forms_p"] ] ], {
                name: [ 0, "name" ]
            }, null), core["ɵprd"](2048, null, fesm2015_forms.NgControl, null, [ fesm2015_forms.FormControlName ]), core["ɵdid"](292, 16384, null, 0, fesm2015_forms.NgControlStatus, [ [ 4, fesm2015_forms.NgControl ] ], null, null), core["ɵdid"](293, 999424, null, 0, input.a, [ core.ElementRef, platform.a, [ 6, fesm2015_forms.NgControl ], [ 2, fesm2015_forms.NgForm ], [ 2, fesm2015_forms.FormGroupDirective ], fesm2015_core.d, [ 8, null ], text_field.a, core.NgZone ], {
                placeholder: [ 0, "placeholder" ],
                type: [ 1, "type" ]
            }, null), core["ɵprd"](2048, [ [ 61, 4 ], [ 62, 4 ] ], form_field.d, null, [ input.a ]), (_l()(), 
            core["ɵand"](16777216, null, 5, 1, null, View_CreateFromFormComponent_11)), core["ɵdid"](296, 16384, null, 0, common.NgIf, [ core.ViewContainerRef, core.TemplateRef ], {
                ngIf: [ 0, "ngIf" ]
            }, null), (_l()(), core["ɵand"](16777216, null, 5, 1, null, View_CreateFromFormComponent_12)), core["ɵdid"](298, 16384, null, 0, common.NgIf, [ core.ViewContainerRef, core.TemplateRef ], {
                ngIf: [ 0, "ngIf" ]
            }, null), (_l()(), core["ɵeld"](299, 0, null, null, 1, "div", [ [ "fxFlex", "5" ] ], null, null, null, null, null)), core["ɵdid"](300, 671744, null, 0, flex.b, [ core.ElementRef, esm2015_core.i, esm2015_core.e, flex.i, esm2015_core.f ], {
                fxFlex: [ 0, "fxFlex" ]
            }, null), (_l()(), core["ɵeld"](301, 0, null, null, 24, "mat-form-field", [ [ "class", "mat-form-field" ], [ "fxFlex", "auto" ] ], [ [ 2, "mat-form-field-appearance-standard", null ], [ 2, "mat-form-field-appearance-fill", null ], [ 2, "mat-form-field-appearance-outline", null ], [ 2, "mat-form-field-appearance-legacy", null ], [ 2, "mat-form-field-invalid", null ], [ 2, "mat-form-field-can-float", null ], [ 2, "mat-form-field-should-float", null ], [ 2, "mat-form-field-has-label", null ], [ 2, "mat-form-field-hide-placeholder", null ], [ 2, "mat-form-field-disabled", null ], [ 2, "mat-form-field-autofilled", null ], [ 2, "mat-focused", null ], [ 2, "mat-accent", null ], [ 2, "mat-warn", null ], [ 2, "ng-untouched", null ], [ 2, "ng-touched", null ], [ 2, "ng-pristine", null ], [ 2, "ng-dirty", null ], [ 2, "ng-valid", null ], [ 2, "ng-invalid", null ], [ 2, "ng-pending", null ], [ 2, "_mat-animation-noopable", null ] ], null, null, form_field_index_ngfactory.b, form_field_index_ngfactory.a)), core["ɵdid"](302, 7520256, null, 9, form_field.c, [ core.ElementRef, core.ChangeDetectorRef, [ 2, fesm2015_core.h ], [ 2, bidi.b ], [ 2, form_field.a ], platform.a, core.NgZone, [ 2, animations.a ] ], null, null), core["ɵqud"](603979776, 70, {
                _controlNonStatic: 0
            }), core["ɵqud"](335544320, 71, {
                _controlStatic: 0
            }), core["ɵqud"](603979776, 72, {
                _labelChildNonStatic: 0
            }), core["ɵqud"](335544320, 73, {
                _labelChildStatic: 0
            }), core["ɵqud"](603979776, 74, {
                _placeholderChild: 0
            }), core["ɵqud"](603979776, 75, {
                _errorChildren: 1
            }), core["ɵqud"](603979776, 76, {
                _hintChildren: 1
            }), core["ɵqud"](603979776, 77, {
                _prefixChildren: 1
            }), core["ɵqud"](603979776, 78, {
                _suffixChildren: 1
            }), core["ɵdid"](312, 671744, null, 0, flex.b, [ core.ElementRef, esm2015_core.i, esm2015_core.e, flex.i, esm2015_core.f ], {
                fxFlex: [ 0, "fxFlex" ]
            }, null), (_l()(), core["ɵeld"](313, 0, null, 1, 8, "input", [ [ "class", "mat-input-element mat-form-field-autofill-control" ], [ "formControlName", "memoryRequirement" ], [ "matInput", "" ], [ "min", "0" ], [ "name", "memoryRequirement" ], [ "placeholder", "Memory requirement (MiB)" ], [ "type", "number" ] ], [ [ 2, "ng-untouched", null ], [ 2, "ng-touched", null ], [ 2, "ng-pristine", null ], [ 2, "ng-dirty", null ], [ 2, "ng-valid", null ], [ 2, "ng-invalid", null ], [ 2, "ng-pending", null ], [ 2, "mat-input-server", null ], [ 1, "id", 0 ], [ 1, "placeholder", 0 ], [ 8, "disabled", 0 ], [ 8, "required", 0 ], [ 1, "readonly", 0 ], [ 1, "aria-describedby", 0 ], [ 1, "aria-invalid", 0 ], [ 1, "aria-required", 0 ] ], [ [ null, "input" ], [ null, "blur" ], [ null, "compositionstart" ], [ null, "compositionend" ], [ null, "change" ], [ null, "focus" ] ], (function(_v, en, $event) {
                var ad = !0;
                return "input" === en && (ad = !1 !== core["ɵnov"](_v, 314)._handleInput($event.target.value) && ad), 
                "blur" === en && (ad = !1 !== core["ɵnov"](_v, 314).onTouched() && ad), "compositionstart" === en && (ad = !1 !== core["ɵnov"](_v, 314)._compositionStart() && ad), 
                "compositionend" === en && (ad = !1 !== core["ɵnov"](_v, 314)._compositionEnd($event.target.value) && ad), 
                "change" === en && (ad = !1 !== core["ɵnov"](_v, 315).onChange($event.target.value) && ad), 
                "input" === en && (ad = !1 !== core["ɵnov"](_v, 315).onChange($event.target.value) && ad), 
                "blur" === en && (ad = !1 !== core["ɵnov"](_v, 315).onTouched() && ad), "blur" === en && (ad = !1 !== core["ɵnov"](_v, 320)._focusChanged(!1) && ad), 
                "focus" === en && (ad = !1 !== core["ɵnov"](_v, 320)._focusChanged(!0) && ad), "input" === en && (ad = !1 !== core["ɵnov"](_v, 320)._onInput() && ad), 
                ad;
            }), null, null)), core["ɵdid"](314, 16384, null, 0, fesm2015_forms.DefaultValueAccessor, [ core.Renderer2, core.ElementRef, [ 2, fesm2015_forms.COMPOSITION_BUFFER_MODE ] ], null, null), core["ɵdid"](315, 16384, null, 0, fesm2015_forms.NumberValueAccessor, [ core.Renderer2, core.ElementRef ], null, null), core["ɵprd"](1024, null, fesm2015_forms.NG_VALUE_ACCESSOR, (function(p0_0, p1_0) {
                return [ p0_0, p1_0 ];
            }), [ fesm2015_forms.DefaultValueAccessor, fesm2015_forms.NumberValueAccessor ]), core["ɵdid"](317, 671744, null, 0, fesm2015_forms.FormControlName, [ [ 3, fesm2015_forms.ControlContainer ], [ 8, null ], [ 8, null ], [ 6, fesm2015_forms.NG_VALUE_ACCESSOR ], [ 2, fesm2015_forms["ɵangular_packages_forms_forms_p"] ] ], {
                name: [ 0, "name" ]
            }, null), core["ɵprd"](2048, null, fesm2015_forms.NgControl, null, [ fesm2015_forms.FormControlName ]), core["ɵdid"](319, 16384, null, 0, fesm2015_forms.NgControlStatus, [ [ 4, fesm2015_forms.NgControl ] ], null, null), core["ɵdid"](320, 999424, null, 0, input.a, [ core.ElementRef, platform.a, [ 6, fesm2015_forms.NgControl ], [ 2, fesm2015_forms.NgForm ], [ 2, fesm2015_forms.FormGroupDirective ], fesm2015_core.d, [ 8, null ], text_field.a, core.NgZone ], {
                placeholder: [ 0, "placeholder" ],
                type: [ 1, "type" ]
            }, null), core["ɵprd"](2048, [ [ 70, 4 ], [ 71, 4 ] ], form_field.d, null, [ input.a ]), (_l()(), 
            core["ɵand"](16777216, null, 5, 1, null, View_CreateFromFormComponent_13)), core["ɵdid"](323, 16384, null, 0, common.NgIf, [ core.ViewContainerRef, core.TemplateRef ], {
                ngIf: [ 0, "ngIf" ]
            }, null), (_l()(), core["ɵand"](16777216, null, 5, 1, null, View_CreateFromFormComponent_14)), core["ɵdid"](325, 16384, null, 0, common.NgIf, [ core.ViewContainerRef, core.TemplateRef ], {
                ngIf: [ 0, "ngIf" ]
            }, null), (_l()(), core["ɵeld"](326, 0, null, 0, 7, "kd-user-help", [], null, null, null, View_UserHelpComponent_0, RenderType_UserHelpComponent)), core["ɵdid"](327, 49152, null, 0, UserHelpComponent, [], null, null), (_l()(), 
            core["ɵeld"](328, 0, null, 0, 1, null, null, null, null, null, null, null)), (_l()(), 
            core["ɵted"](-1, null, [ "You can specify minimum CPU and memory requirements for the container." ])), (_l()(), 
            core["ɵeld"](330, 0, null, 0, 3, "a", [ [ "href", "http://kubernetes.io/docs/admin/limitrange/" ], [ "tabindex", "-1" ], [ "target", "_blank" ] ], null, null, null, null, null)), (_l()(), 
            core["ɵted"](-1, null, [ " Learn more " ])), (_l()(), core["ɵeld"](332, 0, null, null, 1, "i", [ [ "class", "material-icons" ] ], null, null, null, null, null)), (_l()(), 
            core["ɵted"](-1, null, [ "open_in_new" ])), (_l()(), core["ɵeld"](334, 0, null, null, 48, "kd-help-section", [], null, null, null, View_HelpSectionComponent_0, RenderType_HelpSectionComponent)), core["ɵdid"](335, 49152, null, 0, HelpSectionComponent, [], null, null), (_l()(), 
            core["ɵeld"](336, 0, null, 0, 38, "div", [], null, null, null, null, null)), (_l()(), 
            core["ɵeld"](337, 0, null, null, 18, "mat-form-field", [ [ "class", "kd-block mat-form-field" ] ], [ [ 2, "mat-form-field-appearance-standard", null ], [ 2, "mat-form-field-appearance-fill", null ], [ 2, "mat-form-field-appearance-outline", null ], [ 2, "mat-form-field-appearance-legacy", null ], [ 2, "mat-form-field-invalid", null ], [ 2, "mat-form-field-can-float", null ], [ 2, "mat-form-field-should-float", null ], [ 2, "mat-form-field-has-label", null ], [ 2, "mat-form-field-hide-placeholder", null ], [ 2, "mat-form-field-disabled", null ], [ 2, "mat-form-field-autofilled", null ], [ 2, "mat-focused", null ], [ 2, "mat-accent", null ], [ 2, "mat-warn", null ], [ 2, "ng-untouched", null ], [ 2, "ng-touched", null ], [ 2, "ng-pristine", null ], [ 2, "ng-dirty", null ], [ 2, "ng-valid", null ], [ 2, "ng-invalid", null ], [ 2, "ng-pending", null ], [ 2, "_mat-animation-noopable", null ] ], null, null, form_field_index_ngfactory.b, form_field_index_ngfactory.a)), core["ɵdid"](338, 7520256, null, 9, form_field.c, [ core.ElementRef, core.ChangeDetectorRef, [ 2, fesm2015_core.h ], [ 2, bidi.b ], [ 2, form_field.a ], platform.a, core.NgZone, [ 2, animations.a ] ], null, null), core["ɵqud"](603979776, 79, {
                _controlNonStatic: 0
            }), core["ɵqud"](335544320, 80, {
                _controlStatic: 0
            }), core["ɵqud"](603979776, 81, {
                _labelChildNonStatic: 0
            }), core["ɵqud"](335544320, 82, {
                _labelChildStatic: 0
            }), core["ɵqud"](603979776, 83, {
                _placeholderChild: 0
            }), core["ɵqud"](603979776, 84, {
                _errorChildren: 1
            }), core["ɵqud"](603979776, 85, {
                _hintChildren: 1
            }), core["ɵqud"](603979776, 86, {
                _prefixChildren: 1
            }), core["ɵqud"](603979776, 87, {
                _suffixChildren: 1
            }), (_l()(), core["ɵeld"](348, 0, null, 1, 7, "input", [ [ "class", "mat-input-element mat-form-field-autofill-control" ], [ "formControlName", "containerCommand" ], [ "matInput", "" ], [ "placeholder", "Run command" ] ], [ [ 2, "ng-untouched", null ], [ 2, "ng-touched", null ], [ 2, "ng-pristine", null ], [ 2, "ng-dirty", null ], [ 2, "ng-valid", null ], [ 2, "ng-invalid", null ], [ 2, "ng-pending", null ], [ 2, "mat-input-server", null ], [ 1, "id", 0 ], [ 1, "placeholder", 0 ], [ 8, "disabled", 0 ], [ 8, "required", 0 ], [ 1, "readonly", 0 ], [ 1, "aria-describedby", 0 ], [ 1, "aria-invalid", 0 ], [ 1, "aria-required", 0 ] ], [ [ null, "input" ], [ null, "blur" ], [ null, "compositionstart" ], [ null, "compositionend" ], [ null, "focus" ] ], (function(_v, en, $event) {
                var ad = !0;
                return "input" === en && (ad = !1 !== core["ɵnov"](_v, 349)._handleInput($event.target.value) && ad), 
                "blur" === en && (ad = !1 !== core["ɵnov"](_v, 349).onTouched() && ad), "compositionstart" === en && (ad = !1 !== core["ɵnov"](_v, 349)._compositionStart() && ad), 
                "compositionend" === en && (ad = !1 !== core["ɵnov"](_v, 349)._compositionEnd($event.target.value) && ad), 
                "blur" === en && (ad = !1 !== core["ɵnov"](_v, 354)._focusChanged(!1) && ad), "focus" === en && (ad = !1 !== core["ɵnov"](_v, 354)._focusChanged(!0) && ad), 
                "input" === en && (ad = !1 !== core["ɵnov"](_v, 354)._onInput() && ad), ad;
            }), null, null)), core["ɵdid"](349, 16384, null, 0, fesm2015_forms.DefaultValueAccessor, [ core.Renderer2, core.ElementRef, [ 2, fesm2015_forms.COMPOSITION_BUFFER_MODE ] ], null, null), core["ɵprd"](1024, null, fesm2015_forms.NG_VALUE_ACCESSOR, (function(p0_0) {
                return [ p0_0 ];
            }), [ fesm2015_forms.DefaultValueAccessor ]), core["ɵdid"](351, 671744, null, 0, fesm2015_forms.FormControlName, [ [ 3, fesm2015_forms.ControlContainer ], [ 8, null ], [ 8, null ], [ 6, fesm2015_forms.NG_VALUE_ACCESSOR ], [ 2, fesm2015_forms["ɵangular_packages_forms_forms_p"] ] ], {
                name: [ 0, "name" ]
            }, null), core["ɵprd"](2048, null, fesm2015_forms.NgControl, null, [ fesm2015_forms.FormControlName ]), core["ɵdid"](353, 16384, null, 0, fesm2015_forms.NgControlStatus, [ [ 4, fesm2015_forms.NgControl ] ], null, null), core["ɵdid"](354, 999424, null, 0, input.a, [ core.ElementRef, platform.a, [ 6, fesm2015_forms.NgControl ], [ 2, fesm2015_forms.NgForm ], [ 2, fesm2015_forms.FormGroupDirective ], fesm2015_core.d, [ 8, null ], text_field.a, core.NgZone ], {
                placeholder: [ 0, "placeholder" ]
            }, null), core["ɵprd"](2048, [ [ 79, 4 ], [ 80, 4 ] ], form_field.d, null, [ input.a ]), (_l()(), 
            core["ɵeld"](356, 0, null, null, 18, "mat-form-field", [ [ "class", "kd-block mat-form-field" ] ], [ [ 2, "mat-form-field-appearance-standard", null ], [ 2, "mat-form-field-appearance-fill", null ], [ 2, "mat-form-field-appearance-outline", null ], [ 2, "mat-form-field-appearance-legacy", null ], [ 2, "mat-form-field-invalid", null ], [ 2, "mat-form-field-can-float", null ], [ 2, "mat-form-field-should-float", null ], [ 2, "mat-form-field-has-label", null ], [ 2, "mat-form-field-hide-placeholder", null ], [ 2, "mat-form-field-disabled", null ], [ 2, "mat-form-field-autofilled", null ], [ 2, "mat-focused", null ], [ 2, "mat-accent", null ], [ 2, "mat-warn", null ], [ 2, "ng-untouched", null ], [ 2, "ng-touched", null ], [ 2, "ng-pristine", null ], [ 2, "ng-dirty", null ], [ 2, "ng-valid", null ], [ 2, "ng-invalid", null ], [ 2, "ng-pending", null ], [ 2, "_mat-animation-noopable", null ] ], null, null, form_field_index_ngfactory.b, form_field_index_ngfactory.a)), core["ɵdid"](357, 7520256, null, 9, form_field.c, [ core.ElementRef, core.ChangeDetectorRef, [ 2, fesm2015_core.h ], [ 2, bidi.b ], [ 2, form_field.a ], platform.a, core.NgZone, [ 2, animations.a ] ], null, null), core["ɵqud"](603979776, 88, {
                _controlNonStatic: 0
            }), core["ɵqud"](335544320, 89, {
                _controlStatic: 0
            }), core["ɵqud"](603979776, 90, {
                _labelChildNonStatic: 0
            }), core["ɵqud"](335544320, 91, {
                _labelChildStatic: 0
            }), core["ɵqud"](603979776, 92, {
                _placeholderChild: 0
            }), core["ɵqud"](603979776, 93, {
                _errorChildren: 1
            }), core["ɵqud"](603979776, 94, {
                _hintChildren: 1
            }), core["ɵqud"](603979776, 95, {
                _prefixChildren: 1
            }), core["ɵqud"](603979776, 96, {
                _suffixChildren: 1
            }), (_l()(), core["ɵeld"](367, 0, null, 1, 7, "input", [ [ "class", "mat-input-element mat-form-field-autofill-control" ], [ "formControlName", "containerCommandArgs" ], [ "matInput", "" ], [ "placeholder", "Run command arguments" ] ], [ [ 2, "ng-untouched", null ], [ 2, "ng-touched", null ], [ 2, "ng-pristine", null ], [ 2, "ng-dirty", null ], [ 2, "ng-valid", null ], [ 2, "ng-invalid", null ], [ 2, "ng-pending", null ], [ 2, "mat-input-server", null ], [ 1, "id", 0 ], [ 1, "placeholder", 0 ], [ 8, "disabled", 0 ], [ 8, "required", 0 ], [ 1, "readonly", 0 ], [ 1, "aria-describedby", 0 ], [ 1, "aria-invalid", 0 ], [ 1, "aria-required", 0 ] ], [ [ null, "input" ], [ null, "blur" ], [ null, "compositionstart" ], [ null, "compositionend" ], [ null, "focus" ] ], (function(_v, en, $event) {
                var ad = !0;
                return "input" === en && (ad = !1 !== core["ɵnov"](_v, 368)._handleInput($event.target.value) && ad), 
                "blur" === en && (ad = !1 !== core["ɵnov"](_v, 368).onTouched() && ad), "compositionstart" === en && (ad = !1 !== core["ɵnov"](_v, 368)._compositionStart() && ad), 
                "compositionend" === en && (ad = !1 !== core["ɵnov"](_v, 368)._compositionEnd($event.target.value) && ad), 
                "blur" === en && (ad = !1 !== core["ɵnov"](_v, 373)._focusChanged(!1) && ad), "focus" === en && (ad = !1 !== core["ɵnov"](_v, 373)._focusChanged(!0) && ad), 
                "input" === en && (ad = !1 !== core["ɵnov"](_v, 373)._onInput() && ad), ad;
            }), null, null)), core["ɵdid"](368, 16384, null, 0, fesm2015_forms.DefaultValueAccessor, [ core.Renderer2, core.ElementRef, [ 2, fesm2015_forms.COMPOSITION_BUFFER_MODE ] ], null, null), core["ɵprd"](1024, null, fesm2015_forms.NG_VALUE_ACCESSOR, (function(p0_0) {
                return [ p0_0 ];
            }), [ fesm2015_forms.DefaultValueAccessor ]), core["ɵdid"](370, 671744, null, 0, fesm2015_forms.FormControlName, [ [ 3, fesm2015_forms.ControlContainer ], [ 8, null ], [ 8, null ], [ 6, fesm2015_forms.NG_VALUE_ACCESSOR ], [ 2, fesm2015_forms["ɵangular_packages_forms_forms_p"] ] ], {
                name: [ 0, "name" ]
            }, null), core["ɵprd"](2048, null, fesm2015_forms.NgControl, null, [ fesm2015_forms.FormControlName ]), core["ɵdid"](372, 16384, null, 0, fesm2015_forms.NgControlStatus, [ [ 4, fesm2015_forms.NgControl ] ], null, null), core["ɵdid"](373, 999424, null, 0, input.a, [ core.ElementRef, platform.a, [ 6, fesm2015_forms.NgControl ], [ 2, fesm2015_forms.NgForm ], [ 2, fesm2015_forms.FormGroupDirective ], fesm2015_core.d, [ 8, null ], text_field.a, core.NgZone ], {
                placeholder: [ 0, "placeholder" ]
            }, null), core["ɵprd"](2048, [ [ 88, 4 ], [ 89, 4 ] ], form_field.d, null, [ input.a ]), (_l()(), 
            core["ɵeld"](375, 0, null, 0, 7, "kd-user-help", [], null, null, null, View_UserHelpComponent_0, RenderType_UserHelpComponent)), core["ɵdid"](376, 49152, null, 0, UserHelpComponent, [], null, null), (_l()(), 
            core["ɵeld"](377, 0, null, 0, 1, null, null, null, null, null, null, null)), (_l()(), 
            core["ɵted"](-1, null, [ "By default, your containers run the selected image's default entrypoint command. You can use the command options to override the default." ])), (_l()(), 
            core["ɵeld"](379, 0, null, 0, 3, "a", [ [ "href", "http://kubernetes.io/docs/user-guide/containers/" ], [ "tabindex", "-1" ], [ "target", "_blank" ] ], null, null, null, null, null)), (_l()(), 
            core["ɵted"](-1, null, [ " Learn more " ])), (_l()(), core["ɵeld"](381, 0, null, null, 1, "i", [ [ "class", "material-icons" ] ], null, null, null, null, null)), (_l()(), 
            core["ɵted"](-1, null, [ "open_in_new" ])), (_l()(), core["ɵeld"](383, 0, null, null, 17, "kd-help-section", [], null, null, null, View_HelpSectionComponent_0, RenderType_HelpSectionComponent)), core["ɵdid"](384, 49152, null, 0, HelpSectionComponent, [], null, null), (_l()(), 
            core["ɵeld"](385, 0, null, 0, 7, "div", [ [ "class", "kd-block" ] ], null, null, null, null, null)), (_l()(), 
            core["ɵeld"](386, 0, null, null, 6, "mat-checkbox", [ [ "class", "mat-checkbox" ], [ "color", "primary" ], [ "formControlName", "runAsPrivileged" ] ], [ [ 8, "id", 0 ], [ 1, "tabindex", 0 ], [ 2, "mat-checkbox-indeterminate", null ], [ 2, "mat-checkbox-checked", null ], [ 2, "mat-checkbox-disabled", null ], [ 2, "mat-checkbox-label-before", null ], [ 2, "_mat-animation-noopable", null ], [ 2, "ng-untouched", null ], [ 2, "ng-touched", null ], [ 2, "ng-pristine", null ], [ 2, "ng-dirty", null ], [ 2, "ng-valid", null ], [ 2, "ng-invalid", null ], [ 2, "ng-pending", null ] ], null, null, View_MatCheckbox_0, RenderType_MatCheckbox)), core["ɵdid"](387, 12763136, null, 0, fesm2015_checkbox.c, [ core.ElementRef, core.ChangeDetectorRef, a11y.f, core.NgZone, [ 8, null ], [ 2, fesm2015_checkbox.a ], [ 2, animations.a ], [ 2, fesm2015_checkbox.b ] ], {
                color: [ 0, "color" ]
            }, null), core["ɵprd"](1024, null, fesm2015_forms.NG_VALUE_ACCESSOR, (function(p0_0) {
                return [ p0_0 ];
            }), [ fesm2015_checkbox.c ]), core["ɵdid"](389, 671744, null, 0, fesm2015_forms.FormControlName, [ [ 3, fesm2015_forms.ControlContainer ], [ 8, null ], [ 8, null ], [ 6, fesm2015_forms.NG_VALUE_ACCESSOR ], [ 2, fesm2015_forms["ɵangular_packages_forms_forms_p"] ] ], {
                name: [ 0, "name" ]
            }, null), core["ɵprd"](2048, null, fesm2015_forms.NgControl, null, [ fesm2015_forms.FormControlName ]), core["ɵdid"](391, 16384, null, 0, fesm2015_forms.NgControlStatus, [ [ 4, fesm2015_forms.NgControl ] ], null, null), (_l()(), 
            core["ɵted"](-1, 0, [ "Run as privileged" ])), (_l()(), core["ɵeld"](393, 0, null, 0, 7, "kd-user-help", [], null, null, null, View_UserHelpComponent_0, RenderType_UserHelpComponent)), core["ɵdid"](394, 49152, null, 0, UserHelpComponent, [], null, null), (_l()(), 
            core["ɵeld"](395, 0, null, 0, 1, null, null, null, null, null, null, null)), (_l()(), 
            core["ɵted"](-1, null, [ "Processes in privileged containers are equivalent to processes running as root on the host." ])), (_l()(), 
            core["ɵeld"](397, 0, null, 0, 3, "a", [ [ "href", "http://kubernetes.io/docs/user-guide/pods/#privileged-mode-for-pod-containers" ], [ "tabindex", "-1" ], [ "target", "_blank" ] ], null, null, null, null, null)), (_l()(), 
            core["ɵted"](-1, null, [ " Learn more " ])), (_l()(), core["ɵeld"](399, 0, null, null, 1, "i", [ [ "class", "material-icons" ] ], null, null, null, null, null)), (_l()(), 
            core["ɵted"](-1, null, [ "open_in_new" ])), (_l()(), core["ɵeld"](401, 0, null, null, 16, "kd-help-section", [], null, null, null, View_HelpSectionComponent_0, RenderType_HelpSectionComponent)), core["ɵdid"](402, 49152, null, 0, HelpSectionComponent, [], null, null), (_l()(), 
            core["ɵeld"](403, 0, null, 0, 6, "kd-environment-variables", [ [ "formControlName", "variables" ] ], [ [ 2, "ng-untouched", null ], [ 2, "ng-touched", null ], [ 2, "ng-pristine", null ], [ 2, "ng-dirty", null ], [ 2, "ng-valid", null ], [ 2, "ng-invalid", null ], [ 2, "ng-pending", null ] ], null, null, View_EnvironmentVariablesComponent_0, RenderType_EnvironmentVariablesComponent)), core["ɵdid"](404, 114688, null, 0, component_EnvironmentVariablesComponent, [ fesm2015_forms.FormBuilder ], null, null), core["ɵprd"](1024, null, fesm2015_forms.NG_VALIDATORS, (function(p0_0) {
                return [ p0_0 ];
            }), [ component_EnvironmentVariablesComponent ]), core["ɵprd"](1024, null, fesm2015_forms.NG_VALUE_ACCESSOR, (function(p0_0) {
                return [ p0_0 ];
            }), [ component_EnvironmentVariablesComponent ]), core["ɵdid"](407, 671744, null, 0, fesm2015_forms.FormControlName, [ [ 3, fesm2015_forms.ControlContainer ], [ 6, fesm2015_forms.NG_VALIDATORS ], [ 8, null ], [ 6, fesm2015_forms.NG_VALUE_ACCESSOR ], [ 2, fesm2015_forms["ɵangular_packages_forms_forms_p"] ] ], {
                name: [ 0, "name" ]
            }, null), core["ɵprd"](2048, null, fesm2015_forms.NgControl, null, [ fesm2015_forms.FormControlName ]), core["ɵdid"](409, 16384, null, 0, fesm2015_forms.NgControlStatus, [ [ 4, fesm2015_forms.NgControl ] ], null, null), (_l()(), 
            core["ɵeld"](410, 0, null, 0, 7, "kd-user-help", [], null, null, null, View_UserHelpComponent_0, RenderType_UserHelpComponent)), core["ɵdid"](411, 49152, null, 0, UserHelpComponent, [], null, null), (_l()(), 
            core["ɵeld"](412, 0, null, 0, 1, null, null, null, null, null, null, null)), (_l()(), 
            core["ɵted"](-1, null, [ "Environment variables available for use in the container. Values can reference other variables using $(VAR_NAME) syntax." ])), (_l()(), 
            core["ɵeld"](414, 0, null, 0, 3, "a", [ [ "href", "https://kubernetes.io/docs/tasks/inject-data-application/define-environment-variable-container/" ], [ "tabindex", "-1" ], [ "target", "_blank" ] ], null, null, null, null, null)), (_l()(), 
            core["ɵted"](-1, null, [ " Learn more " ])), (_l()(), core["ɵeld"](416, 0, null, null, 1, "i", [ [ "class", "material-icons" ] ], null, null, null, null, null)), (_l()(), 
            core["ɵted"](-1, null, [ "open_in_new" ])), (_l()(), core["ɵeld"](418, 0, null, null, 2, "button", [ [ "color", "primary" ], [ "mat-raised-button", "" ], [ "type", "button" ] ], [ [ 1, "disabled", 0 ], [ 2, "_mat-animation-noopable", null ] ], [ [ null, "click" ] ], (function(_v, en, $event) {
                var ad = !0;
                return "click" === en && (ad = !1 !== _v.component.deploy() && ad), ad;
            }), button_index_ngfactory.d, button_index_ngfactory.b)), core["ɵdid"](419, 180224, null, 0, fesm2015_button.b, [ core.ElementRef, a11y.f, [ 2, animations.a ] ], {
                disabled: [ 0, "disabled" ],
                color: [ 1, "color" ]
            }, null), (_l()(), core["ɵted"](-1, 0, [ " Deploy\n" ])), (_l()(), core["ɵeld"](421, 0, null, null, 2, "button", [ [ "color", "primary" ], [ "mat-button", "" ], [ "type", "button" ] ], [ [ 1, "disabled", 0 ], [ 2, "_mat-animation-noopable", null ] ], [ [ null, "click" ] ], (function(_v, en, $event) {
                var ad = !0;
                return "click" === en && (ad = !1 !== _v.component.cancel() && ad), ad;
            }), button_index_ngfactory.d, button_index_ngfactory.b)), core["ɵdid"](422, 180224, null, 0, fesm2015_button.b, [ core.ElementRef, a11y.f, [ 2, animations.a ] ], {
                color: [ 0, "color" ]
            }, null), (_l()(), core["ɵted"](-1, 0, [ " Cancel\n" ])), (_l()(), core["ɵeld"](424, 0, null, null, 9, "button", [ [ "color", "primary" ], [ "mat-button", "" ] ], [ [ 8, "hidden", 0 ], [ 1, "disabled", 0 ], [ 2, "_mat-animation-noopable", null ] ], [ [ null, "click" ] ], (function(_v, en, $event) {
                var ad = !0;
                return "click" === en && (ad = !1 !== _v.component.switchMoreOptions() && ad), ad;
            }), button_index_ngfactory.d, button_index_ngfactory.b)), core["ɵdid"](425, 180224, null, 0, fesm2015_button.b, [ core.ElementRef, a11y.f, [ 2, animations.a ] ], {
                color: [ 0, "color" ]
            }, null), (_l()(), core["ɵted"](-1, 0, [ " " ])), (_l()(), core["ɵeld"](427, 0, null, 0, 5, null, null, null, null, null, null, null)), core["ɵdid"](428, 16384, null, 0, common.NgSwitch, [], {
                ngSwitch: [ 0, "ngSwitch" ]
            }, null), (_l()(), core["ɵand"](16777216, null, null, 1, null, View_CreateFromFormComponent_15)), core["ɵdid"](430, 278528, null, 0, common.NgSwitchCase, [ core.ViewContainerRef, core.TemplateRef, common.NgSwitch ], {
                ngSwitchCase: [ 0, "ngSwitchCase" ]
            }, null), (_l()(), core["ɵand"](16777216, null, null, 1, null, View_CreateFromFormComponent_16)), core["ɵdid"](432, 16384, null, 0, common.NgSwitchDefault, [ core.ViewContainerRef, core.TemplateRef, common.NgSwitch ], null, null), (_l()(), 
            core["ɵted"](-1, 0, [ "\n" ])) ], (function(_ck, _v) {
                var _co = _v.component;
                _ck(_v, 2, 0, _co.form), _ck(_v, 20, 0, ""), _ck(_v, 21, 0, _co.nameMaxLength), 
                _ck(_v, 23, 0, _co.namespace.value), _ck(_v, 26, 0, "name"), _ck(_v, 29, 0, "App name", "");
                var currVal_58 = _ck(_v, 34, 0, _co.name.pending);
                _ck(_v, 33, 0, "kd-deploy-form-progress", currVal_58), _ck(_v, 35, 0, "indeterminate");
                var currVal_60 = _ck(_v, 37, 0, _co.name.pending);
                _ck(_v, 36, 0, currVal_60, "kd-deploy-form-progress"), _ck(_v, 39, 0, "end"), _ck(_v, 42, 0, null == _co.name.errors ? null : _co.name.errors.uniqueName), 
                _ck(_v, 44, 0, null == _co.name.errors ? null : _co.name.errors.required), _ck(_v, 46, 0, null == _co.name.errors ? null : _co.name.errors.namePattern), 
                _ck(_v, 70, 0, ""), _ck(_v, 75, 0, "containerImage"), _ck(_v, 78, 0, "Container image", ""), 
                _ck(_v, 81, 0, null == _co.containerImage.errors ? null : _co.containerImage.errors.required), 
                _ck(_v, 83, 0, null == _co.containerImage.errors ? null : _co.containerImage.errors.validImageReference), 
                _ck(_v, 108, 0, ""), _ck(_v, 109, 0, "100"), _ck(_v, 112, 0, "replicas"), _ck(_v, 115, 0, "Number of pods", "", "number"), 
                _ck(_v, 118, 0, null == _co.replicas.errors ? null : _co.replicas.errors.required), 
                _ck(_v, 120, 0, null == _co.replicas.errors ? null : _co.replicas.errors.kdValidInteger), 
                _ck(_v, 122, 0, null == _co.replicas.errors ? null : _co.replicas.errors.warnThreshold), 
                _ck(_v, 134, 0, "column"), _ck(_v, 136, 0, _co.protocols, _co.isExternal), _ck(_v, 139, 0, "portMappings"), 
                _ck(_v, 167, 0, "description"), _ck(_v, 170, 0, "Description"), _ck(_v, 178, 0, "column"), 
                _ck(_v, 182, 0, _co.labelArr), _ck(_v, 185, 0, "labels"), _ck(_v, 211, 0, ""), _ck(_v, 213, 0, "namespace"), 
                _ck(_v, 216, 0, "Namespace", ""), _ck(_v, 222, 0, _co.namespaces), _ck(_v, 249, 0, "imagePullSecret"), 
                _ck(_v, 252, 0, "Image Pull Secret"), _ck(_v, 258, 0, _co.secrets), _ck(_v, 273, 0, "row"), 
                _ck(_v, 285, 0, "auto"), _ck(_v, 290, 0, "cpuRequirement"), _ck(_v, 293, 0, "CPU requirement (cores)", "number"), 
                _ck(_v, 296, 0, null == _co.cpuRequirement.errors ? null : _co.cpuRequirement.errors.min), 
                _ck(_v, 298, 0, null == _co.cpuRequirement.errors ? null : _co.cpuRequirement.errors.kdValidInteger), 
                _ck(_v, 300, 0, "5"), _ck(_v, 312, 0, "auto"), _ck(_v, 317, 0, "memoryRequirement"), 
                _ck(_v, 320, 0, "Memory requirement (MiB)", "number"), _ck(_v, 323, 0, null == _co.memoryRequirement.errors ? null : _co.memoryRequirement.errors.min), 
                _ck(_v, 325, 0, null == _co.memoryRequirement.errors ? null : _co.memoryRequirement.errors.kdValidInteger), 
                _ck(_v, 351, 0, "containerCommand"), _ck(_v, 354, 0, "Run command"), _ck(_v, 370, 0, "containerCommandArgs"), 
                _ck(_v, 373, 0, "Run command arguments"), _ck(_v, 387, 0, "primary"), _ck(_v, 389, 0, "runAsPrivileged"), 
                _ck(_v, 404, 0), _ck(_v, 407, 0, "variables"), _ck(_v, 419, 0, _co.isCreateDisabled(), "primary"), 
                _ck(_v, 422, 0, "primary"), _ck(_v, 425, 0, "primary"), _ck(_v, 428, 0, _co.isMoreOptionsEnabled()), 
                _ck(_v, 430, 0, "1");
            }), (function(_ck, _v) {
                var _co = _v.component;
                _ck(_v, 0, 0, core["ɵnov"](_v, 4).ngClassUntouched, core["ɵnov"](_v, 4).ngClassTouched, core["ɵnov"](_v, 4).ngClassPristine, core["ɵnov"](_v, 4).ngClassDirty, core["ɵnov"](_v, 4).ngClassValid, core["ɵnov"](_v, 4).ngClassInvalid, core["ɵnov"](_v, 4).ngClassPending), 
                _ck(_v, 7, 1, [ "standard" == core["ɵnov"](_v, 8).appearance, "fill" == core["ɵnov"](_v, 8).appearance, "outline" == core["ɵnov"](_v, 8).appearance, "legacy" == core["ɵnov"](_v, 8).appearance, core["ɵnov"](_v, 8)._control.errorState, core["ɵnov"](_v, 8)._canLabelFloat, core["ɵnov"](_v, 8)._shouldLabelFloat(), core["ɵnov"](_v, 8)._hasFloatingLabel(), core["ɵnov"](_v, 8)._hideControlPlaceholder(), core["ɵnov"](_v, 8)._control.disabled, core["ɵnov"](_v, 8)._control.autofilled, core["ɵnov"](_v, 8)._control.focused, "accent" == core["ɵnov"](_v, 8).color, "warn" == core["ɵnov"](_v, 8).color, core["ɵnov"](_v, 8)._shouldForward("untouched"), core["ɵnov"](_v, 8)._shouldForward("touched"), core["ɵnov"](_v, 8)._shouldForward("pristine"), core["ɵnov"](_v, 8)._shouldForward("dirty"), core["ɵnov"](_v, 8)._shouldForward("valid"), core["ɵnov"](_v, 8)._shouldForward("invalid"), core["ɵnov"](_v, 8)._shouldForward("pending"), !core["ɵnov"](_v, 8)._animationsEnabled ]), 
                _ck(_v, 18, 1, [ core["ɵnov"](_v, 20).required ? "" : null, core["ɵnov"](_v, 21).maxlength ? core["ɵnov"](_v, 21).maxlength : null, core["ɵnov"](_v, 28).ngClassUntouched, core["ɵnov"](_v, 28).ngClassTouched, core["ɵnov"](_v, 28).ngClassPristine, core["ɵnov"](_v, 28).ngClassDirty, core["ɵnov"](_v, 28).ngClassValid, core["ɵnov"](_v, 28).ngClassInvalid, core["ɵnov"](_v, 28).ngClassPending, core["ɵnov"](_v, 29)._isServer, core["ɵnov"](_v, 29).id, core["ɵnov"](_v, 29).placeholder, core["ɵnov"](_v, 29).disabled, core["ɵnov"](_v, 29).required, core["ɵnov"](_v, 29).readonly && !core["ɵnov"](_v, 29)._isNativeSelect || null, core["ɵnov"](_v, 29)._ariaDescribedby || null, core["ɵnov"](_v, 29).errorState, core["ɵnov"](_v, 29).required.toString() ]), 
                _ck(_v, 31, 0, "indeterminate" === core["ɵnov"](_v, 35).mode || "query" === core["ɵnov"](_v, 35).mode ? null : core["ɵnov"](_v, 35).value, core["ɵnov"](_v, 35).mode, core["ɵnov"](_v, 35)._isNoopAnimation), 
                _ck(_v, 38, 0, "end" == core["ɵnov"](_v, 39).align, core["ɵnov"](_v, 39).id, null), 
                _ck(_v, 40, 0, null == _co.name.value ? null : _co.name.value.length, _co.nameMaxLength), 
                _ck(_v, 57, 1, [ "standard" == core["ɵnov"](_v, 58).appearance, "fill" == core["ɵnov"](_v, 58).appearance, "outline" == core["ɵnov"](_v, 58).appearance, "legacy" == core["ɵnov"](_v, 58).appearance, core["ɵnov"](_v, 58)._control.errorState, core["ɵnov"](_v, 58)._canLabelFloat, core["ɵnov"](_v, 58)._shouldLabelFloat(), core["ɵnov"](_v, 58)._hasFloatingLabel(), core["ɵnov"](_v, 58)._hideControlPlaceholder(), core["ɵnov"](_v, 58)._control.disabled, core["ɵnov"](_v, 58)._control.autofilled, core["ɵnov"](_v, 58)._control.focused, "accent" == core["ɵnov"](_v, 58).color, "warn" == core["ɵnov"](_v, 58).color, core["ɵnov"](_v, 58)._shouldForward("untouched"), core["ɵnov"](_v, 58)._shouldForward("touched"), core["ɵnov"](_v, 58)._shouldForward("pristine"), core["ɵnov"](_v, 58)._shouldForward("dirty"), core["ɵnov"](_v, 58)._shouldForward("valid"), core["ɵnov"](_v, 58)._shouldForward("invalid"), core["ɵnov"](_v, 58)._shouldForward("pending"), !core["ɵnov"](_v, 58)._animationsEnabled ]), 
                _ck(_v, 68, 1, [ core["ɵnov"](_v, 70).required ? "" : null, core["ɵnov"](_v, 77).ngClassUntouched, core["ɵnov"](_v, 77).ngClassTouched, core["ɵnov"](_v, 77).ngClassPristine, core["ɵnov"](_v, 77).ngClassDirty, core["ɵnov"](_v, 77).ngClassValid, core["ɵnov"](_v, 77).ngClassInvalid, core["ɵnov"](_v, 77).ngClassPending, core["ɵnov"](_v, 78)._isServer, core["ɵnov"](_v, 78).id, core["ɵnov"](_v, 78).placeholder, core["ɵnov"](_v, 78).disabled, core["ɵnov"](_v, 78).required, core["ɵnov"](_v, 78).readonly && !core["ɵnov"](_v, 78)._isNativeSelect || null, core["ɵnov"](_v, 78)._ariaDescribedby || null, core["ɵnov"](_v, 78).errorState, core["ɵnov"](_v, 78).required.toString() ]), 
                _ck(_v, 94, 1, [ "standard" == core["ɵnov"](_v, 95).appearance, "fill" == core["ɵnov"](_v, 95).appearance, "outline" == core["ɵnov"](_v, 95).appearance, "legacy" == core["ɵnov"](_v, 95).appearance, core["ɵnov"](_v, 95)._control.errorState, core["ɵnov"](_v, 95)._canLabelFloat, core["ɵnov"](_v, 95)._shouldLabelFloat(), core["ɵnov"](_v, 95)._hasFloatingLabel(), core["ɵnov"](_v, 95)._hideControlPlaceholder(), core["ɵnov"](_v, 95)._control.disabled, core["ɵnov"](_v, 95)._control.autofilled, core["ɵnov"](_v, 95)._control.focused, "accent" == core["ɵnov"](_v, 95).color, "warn" == core["ɵnov"](_v, 95).color, core["ɵnov"](_v, 95)._shouldForward("untouched"), core["ɵnov"](_v, 95)._shouldForward("touched"), core["ɵnov"](_v, 95)._shouldForward("pristine"), core["ɵnov"](_v, 95)._shouldForward("dirty"), core["ɵnov"](_v, 95)._shouldForward("valid"), core["ɵnov"](_v, 95)._shouldForward("invalid"), core["ɵnov"](_v, 95)._shouldForward("pending"), !core["ɵnov"](_v, 95)._animationsEnabled ]), 
                _ck(_v, 105, 1, [ core["ɵnov"](_v, 108).required ? "" : null, core["ɵnov"](_v, 114).ngClassUntouched, core["ɵnov"](_v, 114).ngClassTouched, core["ɵnov"](_v, 114).ngClassPristine, core["ɵnov"](_v, 114).ngClassDirty, core["ɵnov"](_v, 114).ngClassValid, core["ɵnov"](_v, 114).ngClassInvalid, core["ɵnov"](_v, 114).ngClassPending, core["ɵnov"](_v, 115)._isServer, core["ɵnov"](_v, 115).id, core["ɵnov"](_v, 115).placeholder, core["ɵnov"](_v, 115).disabled, core["ɵnov"](_v, 115).required, core["ɵnov"](_v, 115).readonly && !core["ɵnov"](_v, 115)._isNativeSelect || null, core["ɵnov"](_v, 115)._ariaDescribedby || null, core["ɵnov"](_v, 115).errorState, core["ɵnov"](_v, 115).required.toString() ]), 
                _ck(_v, 135, 0, core["ɵnov"](_v, 141).ngClassUntouched, core["ɵnov"](_v, 141).ngClassTouched, core["ɵnov"](_v, 141).ngClassPristine, core["ɵnov"](_v, 141).ngClassDirty, core["ɵnov"](_v, 141).ngClassValid, core["ɵnov"](_v, 141).ngClassInvalid, core["ɵnov"](_v, 141).ngClassPending), 
                _ck(_v, 150, 0, !_co.isMoreOptionsEnabled()), _ck(_v, 153, 1, [ "standard" == core["ɵnov"](_v, 154).appearance, "fill" == core["ɵnov"](_v, 154).appearance, "outline" == core["ɵnov"](_v, 154).appearance, "legacy" == core["ɵnov"](_v, 154).appearance, core["ɵnov"](_v, 154)._control.errorState, core["ɵnov"](_v, 154)._canLabelFloat, core["ɵnov"](_v, 154)._shouldLabelFloat(), core["ɵnov"](_v, 154)._hasFloatingLabel(), core["ɵnov"](_v, 154)._hideControlPlaceholder(), core["ɵnov"](_v, 154)._control.disabled, core["ɵnov"](_v, 154)._control.autofilled, core["ɵnov"](_v, 154)._control.focused, "accent" == core["ɵnov"](_v, 154).color, "warn" == core["ɵnov"](_v, 154).color, core["ɵnov"](_v, 154)._shouldForward("untouched"), core["ɵnov"](_v, 154)._shouldForward("touched"), core["ɵnov"](_v, 154)._shouldForward("pristine"), core["ɵnov"](_v, 154)._shouldForward("dirty"), core["ɵnov"](_v, 154)._shouldForward("valid"), core["ɵnov"](_v, 154)._shouldForward("invalid"), core["ɵnov"](_v, 154)._shouldForward("pending"), !core["ɵnov"](_v, 154)._animationsEnabled ]), 
                _ck(_v, 164, 1, [ core["ɵnov"](_v, 169).ngClassUntouched, core["ɵnov"](_v, 169).ngClassTouched, core["ɵnov"](_v, 169).ngClassPristine, core["ɵnov"](_v, 169).ngClassDirty, core["ɵnov"](_v, 169).ngClassValid, core["ɵnov"](_v, 169).ngClassInvalid, core["ɵnov"](_v, 169).ngClassPending, core["ɵnov"](_v, 170)._isServer, core["ɵnov"](_v, 170).id, core["ɵnov"](_v, 170).placeholder, core["ɵnov"](_v, 170).disabled, core["ɵnov"](_v, 170).required, core["ɵnov"](_v, 170).readonly && !core["ɵnov"](_v, 170)._isNativeSelect || null, core["ɵnov"](_v, 170)._ariaDescribedby || null, core["ɵnov"](_v, 170).errorState, core["ɵnov"](_v, 170).required.toString() ]), 
                _ck(_v, 181, 0, core["ɵnov"](_v, 187).ngClassUntouched, core["ɵnov"](_v, 187).ngClassTouched, core["ɵnov"](_v, 187).ngClassPristine, core["ɵnov"](_v, 187).ngClassDirty, core["ɵnov"](_v, 187).ngClassValid, core["ɵnov"](_v, 187).ngClassInvalid, core["ɵnov"](_v, 187).ngClassPending), 
                _ck(_v, 198, 1, [ "standard" == core["ɵnov"](_v, 199).appearance, "fill" == core["ɵnov"](_v, 199).appearance, "outline" == core["ɵnov"](_v, 199).appearance, "legacy" == core["ɵnov"](_v, 199).appearance, core["ɵnov"](_v, 199)._control.errorState, core["ɵnov"](_v, 199)._canLabelFloat, core["ɵnov"](_v, 199)._shouldLabelFloat(), core["ɵnov"](_v, 199)._hasFloatingLabel(), core["ɵnov"](_v, 199)._hideControlPlaceholder(), core["ɵnov"](_v, 199)._control.disabled, core["ɵnov"](_v, 199)._control.autofilled, core["ɵnov"](_v, 199)._control.focused, "accent" == core["ɵnov"](_v, 199).color, "warn" == core["ɵnov"](_v, 199).color, core["ɵnov"](_v, 199)._shouldForward("untouched"), core["ɵnov"](_v, 199)._shouldForward("touched"), core["ɵnov"](_v, 199)._shouldForward("pristine"), core["ɵnov"](_v, 199)._shouldForward("dirty"), core["ɵnov"](_v, 199)._shouldForward("valid"), core["ɵnov"](_v, 199)._shouldForward("invalid"), core["ɵnov"](_v, 199)._shouldForward("pending"), !core["ɵnov"](_v, 199)._animationsEnabled ]), 
                _ck(_v, 209, 1, [ core["ɵnov"](_v, 211).required ? "" : null, core["ɵnov"](_v, 215).ngClassUntouched, core["ɵnov"](_v, 215).ngClassTouched, core["ɵnov"](_v, 215).ngClassPristine, core["ɵnov"](_v, 215).ngClassDirty, core["ɵnov"](_v, 215).ngClassValid, core["ɵnov"](_v, 215).ngClassInvalid, core["ɵnov"](_v, 215).ngClassPending, core["ɵnov"](_v, 216).id, core["ɵnov"](_v, 216).tabIndex, core["ɵnov"](_v, 216)._getAriaLabel(), core["ɵnov"](_v, 216)._getAriaLabelledby(), core["ɵnov"](_v, 216).required.toString(), core["ɵnov"](_v, 216).disabled.toString(), core["ɵnov"](_v, 216).errorState, core["ɵnov"](_v, 216).panelOpen ? core["ɵnov"](_v, 216)._optionIds : null, core["ɵnov"](_v, 216).multiple, core["ɵnov"](_v, 216)._ariaDescribedby || null, core["ɵnov"](_v, 216)._getAriaActiveDescendant(), core["ɵnov"](_v, 216).disabled, core["ɵnov"](_v, 216).errorState, core["ɵnov"](_v, 216).required, core["ɵnov"](_v, 216).empty ]), 
                _ck(_v, 223, 0, core["ɵnov"](_v, 224)._getTabIndex(), core["ɵnov"](_v, 224).selected, core["ɵnov"](_v, 224).multiple, core["ɵnov"](_v, 224).active, core["ɵnov"](_v, 224).id, core["ɵnov"](_v, 224)._getAriaSelected(), core["ɵnov"](_v, 224).disabled.toString(), core["ɵnov"](_v, 224).disabled), 
                _ck(_v, 236, 1, [ "standard" == core["ɵnov"](_v, 237).appearance, "fill" == core["ɵnov"](_v, 237).appearance, "outline" == core["ɵnov"](_v, 237).appearance, "legacy" == core["ɵnov"](_v, 237).appearance, core["ɵnov"](_v, 237)._control.errorState, core["ɵnov"](_v, 237)._canLabelFloat, core["ɵnov"](_v, 237)._shouldLabelFloat(), core["ɵnov"](_v, 237)._hasFloatingLabel(), core["ɵnov"](_v, 237)._hideControlPlaceholder(), core["ɵnov"](_v, 237)._control.disabled, core["ɵnov"](_v, 237)._control.autofilled, core["ɵnov"](_v, 237)._control.focused, "accent" == core["ɵnov"](_v, 237).color, "warn" == core["ɵnov"](_v, 237).color, core["ɵnov"](_v, 237)._shouldForward("untouched"), core["ɵnov"](_v, 237)._shouldForward("touched"), core["ɵnov"](_v, 237)._shouldForward("pristine"), core["ɵnov"](_v, 237)._shouldForward("dirty"), core["ɵnov"](_v, 237)._shouldForward("valid"), core["ɵnov"](_v, 237)._shouldForward("invalid"), core["ɵnov"](_v, 237)._shouldForward("pending"), !core["ɵnov"](_v, 237)._animationsEnabled ]), 
                _ck(_v, 247, 1, [ core["ɵnov"](_v, 251).ngClassUntouched, core["ɵnov"](_v, 251).ngClassTouched, core["ɵnov"](_v, 251).ngClassPristine, core["ɵnov"](_v, 251).ngClassDirty, core["ɵnov"](_v, 251).ngClassValid, core["ɵnov"](_v, 251).ngClassInvalid, core["ɵnov"](_v, 251).ngClassPending, core["ɵnov"](_v, 252).id, core["ɵnov"](_v, 252).tabIndex, core["ɵnov"](_v, 252)._getAriaLabel(), core["ɵnov"](_v, 252)._getAriaLabelledby(), core["ɵnov"](_v, 252).required.toString(), core["ɵnov"](_v, 252).disabled.toString(), core["ɵnov"](_v, 252).errorState, core["ɵnov"](_v, 252).panelOpen ? core["ɵnov"](_v, 252)._optionIds : null, core["ɵnov"](_v, 252).multiple, core["ɵnov"](_v, 252)._ariaDescribedby || null, core["ɵnov"](_v, 252)._getAriaActiveDescendant(), core["ɵnov"](_v, 252).disabled, core["ɵnov"](_v, 252).errorState, core["ɵnov"](_v, 252).required, core["ɵnov"](_v, 252).empty ]), 
                _ck(_v, 259, 0, core["ɵnov"](_v, 260)._getTabIndex(), core["ɵnov"](_v, 260).selected, core["ɵnov"](_v, 260).multiple, core["ɵnov"](_v, 260).active, core["ɵnov"](_v, 260).id, core["ɵnov"](_v, 260)._getAriaSelected(), core["ɵnov"](_v, 260).disabled.toString(), core["ɵnov"](_v, 260).disabled), 
                _ck(_v, 274, 1, [ "standard" == core["ɵnov"](_v, 275).appearance, "fill" == core["ɵnov"](_v, 275).appearance, "outline" == core["ɵnov"](_v, 275).appearance, "legacy" == core["ɵnov"](_v, 275).appearance, core["ɵnov"](_v, 275)._control.errorState, core["ɵnov"](_v, 275)._canLabelFloat, core["ɵnov"](_v, 275)._shouldLabelFloat(), core["ɵnov"](_v, 275)._hasFloatingLabel(), core["ɵnov"](_v, 275)._hideControlPlaceholder(), core["ɵnov"](_v, 275)._control.disabled, core["ɵnov"](_v, 275)._control.autofilled, core["ɵnov"](_v, 275)._control.focused, "accent" == core["ɵnov"](_v, 275).color, "warn" == core["ɵnov"](_v, 275).color, core["ɵnov"](_v, 275)._shouldForward("untouched"), core["ɵnov"](_v, 275)._shouldForward("touched"), core["ɵnov"](_v, 275)._shouldForward("pristine"), core["ɵnov"](_v, 275)._shouldForward("dirty"), core["ɵnov"](_v, 275)._shouldForward("valid"), core["ɵnov"](_v, 275)._shouldForward("invalid"), core["ɵnov"](_v, 275)._shouldForward("pending"), !core["ɵnov"](_v, 275)._animationsEnabled ]), 
                _ck(_v, 286, 1, [ core["ɵnov"](_v, 292).ngClassUntouched, core["ɵnov"](_v, 292).ngClassTouched, core["ɵnov"](_v, 292).ngClassPristine, core["ɵnov"](_v, 292).ngClassDirty, core["ɵnov"](_v, 292).ngClassValid, core["ɵnov"](_v, 292).ngClassInvalid, core["ɵnov"](_v, 292).ngClassPending, core["ɵnov"](_v, 293)._isServer, core["ɵnov"](_v, 293).id, core["ɵnov"](_v, 293).placeholder, core["ɵnov"](_v, 293).disabled, core["ɵnov"](_v, 293).required, core["ɵnov"](_v, 293).readonly && !core["ɵnov"](_v, 293)._isNativeSelect || null, core["ɵnov"](_v, 293)._ariaDescribedby || null, core["ɵnov"](_v, 293).errorState, core["ɵnov"](_v, 293).required.toString() ]), 
                _ck(_v, 301, 1, [ "standard" == core["ɵnov"](_v, 302).appearance, "fill" == core["ɵnov"](_v, 302).appearance, "outline" == core["ɵnov"](_v, 302).appearance, "legacy" == core["ɵnov"](_v, 302).appearance, core["ɵnov"](_v, 302)._control.errorState, core["ɵnov"](_v, 302)._canLabelFloat, core["ɵnov"](_v, 302)._shouldLabelFloat(), core["ɵnov"](_v, 302)._hasFloatingLabel(), core["ɵnov"](_v, 302)._hideControlPlaceholder(), core["ɵnov"](_v, 302)._control.disabled, core["ɵnov"](_v, 302)._control.autofilled, core["ɵnov"](_v, 302)._control.focused, "accent" == core["ɵnov"](_v, 302).color, "warn" == core["ɵnov"](_v, 302).color, core["ɵnov"](_v, 302)._shouldForward("untouched"), core["ɵnov"](_v, 302)._shouldForward("touched"), core["ɵnov"](_v, 302)._shouldForward("pristine"), core["ɵnov"](_v, 302)._shouldForward("dirty"), core["ɵnov"](_v, 302)._shouldForward("valid"), core["ɵnov"](_v, 302)._shouldForward("invalid"), core["ɵnov"](_v, 302)._shouldForward("pending"), !core["ɵnov"](_v, 302)._animationsEnabled ]), 
                _ck(_v, 313, 1, [ core["ɵnov"](_v, 319).ngClassUntouched, core["ɵnov"](_v, 319).ngClassTouched, core["ɵnov"](_v, 319).ngClassPristine, core["ɵnov"](_v, 319).ngClassDirty, core["ɵnov"](_v, 319).ngClassValid, core["ɵnov"](_v, 319).ngClassInvalid, core["ɵnov"](_v, 319).ngClassPending, core["ɵnov"](_v, 320)._isServer, core["ɵnov"](_v, 320).id, core["ɵnov"](_v, 320).placeholder, core["ɵnov"](_v, 320).disabled, core["ɵnov"](_v, 320).required, core["ɵnov"](_v, 320).readonly && !core["ɵnov"](_v, 320)._isNativeSelect || null, core["ɵnov"](_v, 320)._ariaDescribedby || null, core["ɵnov"](_v, 320).errorState, core["ɵnov"](_v, 320).required.toString() ]), 
                _ck(_v, 337, 1, [ "standard" == core["ɵnov"](_v, 338).appearance, "fill" == core["ɵnov"](_v, 338).appearance, "outline" == core["ɵnov"](_v, 338).appearance, "legacy" == core["ɵnov"](_v, 338).appearance, core["ɵnov"](_v, 338)._control.errorState, core["ɵnov"](_v, 338)._canLabelFloat, core["ɵnov"](_v, 338)._shouldLabelFloat(), core["ɵnov"](_v, 338)._hasFloatingLabel(), core["ɵnov"](_v, 338)._hideControlPlaceholder(), core["ɵnov"](_v, 338)._control.disabled, core["ɵnov"](_v, 338)._control.autofilled, core["ɵnov"](_v, 338)._control.focused, "accent" == core["ɵnov"](_v, 338).color, "warn" == core["ɵnov"](_v, 338).color, core["ɵnov"](_v, 338)._shouldForward("untouched"), core["ɵnov"](_v, 338)._shouldForward("touched"), core["ɵnov"](_v, 338)._shouldForward("pristine"), core["ɵnov"](_v, 338)._shouldForward("dirty"), core["ɵnov"](_v, 338)._shouldForward("valid"), core["ɵnov"](_v, 338)._shouldForward("invalid"), core["ɵnov"](_v, 338)._shouldForward("pending"), !core["ɵnov"](_v, 338)._animationsEnabled ]), 
                _ck(_v, 348, 1, [ core["ɵnov"](_v, 353).ngClassUntouched, core["ɵnov"](_v, 353).ngClassTouched, core["ɵnov"](_v, 353).ngClassPristine, core["ɵnov"](_v, 353).ngClassDirty, core["ɵnov"](_v, 353).ngClassValid, core["ɵnov"](_v, 353).ngClassInvalid, core["ɵnov"](_v, 353).ngClassPending, core["ɵnov"](_v, 354)._isServer, core["ɵnov"](_v, 354).id, core["ɵnov"](_v, 354).placeholder, core["ɵnov"](_v, 354).disabled, core["ɵnov"](_v, 354).required, core["ɵnov"](_v, 354).readonly && !core["ɵnov"](_v, 354)._isNativeSelect || null, core["ɵnov"](_v, 354)._ariaDescribedby || null, core["ɵnov"](_v, 354).errorState, core["ɵnov"](_v, 354).required.toString() ]), 
                _ck(_v, 356, 1, [ "standard" == core["ɵnov"](_v, 357).appearance, "fill" == core["ɵnov"](_v, 357).appearance, "outline" == core["ɵnov"](_v, 357).appearance, "legacy" == core["ɵnov"](_v, 357).appearance, core["ɵnov"](_v, 357)._control.errorState, core["ɵnov"](_v, 357)._canLabelFloat, core["ɵnov"](_v, 357)._shouldLabelFloat(), core["ɵnov"](_v, 357)._hasFloatingLabel(), core["ɵnov"](_v, 357)._hideControlPlaceholder(), core["ɵnov"](_v, 357)._control.disabled, core["ɵnov"](_v, 357)._control.autofilled, core["ɵnov"](_v, 357)._control.focused, "accent" == core["ɵnov"](_v, 357).color, "warn" == core["ɵnov"](_v, 357).color, core["ɵnov"](_v, 357)._shouldForward("untouched"), core["ɵnov"](_v, 357)._shouldForward("touched"), core["ɵnov"](_v, 357)._shouldForward("pristine"), core["ɵnov"](_v, 357)._shouldForward("dirty"), core["ɵnov"](_v, 357)._shouldForward("valid"), core["ɵnov"](_v, 357)._shouldForward("invalid"), core["ɵnov"](_v, 357)._shouldForward("pending"), !core["ɵnov"](_v, 357)._animationsEnabled ]), 
                _ck(_v, 367, 1, [ core["ɵnov"](_v, 372).ngClassUntouched, core["ɵnov"](_v, 372).ngClassTouched, core["ɵnov"](_v, 372).ngClassPristine, core["ɵnov"](_v, 372).ngClassDirty, core["ɵnov"](_v, 372).ngClassValid, core["ɵnov"](_v, 372).ngClassInvalid, core["ɵnov"](_v, 372).ngClassPending, core["ɵnov"](_v, 373)._isServer, core["ɵnov"](_v, 373).id, core["ɵnov"](_v, 373).placeholder, core["ɵnov"](_v, 373).disabled, core["ɵnov"](_v, 373).required, core["ɵnov"](_v, 373).readonly && !core["ɵnov"](_v, 373)._isNativeSelect || null, core["ɵnov"](_v, 373)._ariaDescribedby || null, core["ɵnov"](_v, 373).errorState, core["ɵnov"](_v, 373).required.toString() ]), 
                _ck(_v, 386, 1, [ core["ɵnov"](_v, 387).id, null, core["ɵnov"](_v, 387).indeterminate, core["ɵnov"](_v, 387).checked, core["ɵnov"](_v, 387).disabled, "before" == core["ɵnov"](_v, 387).labelPosition, "NoopAnimations" === core["ɵnov"](_v, 387)._animationMode, core["ɵnov"](_v, 391).ngClassUntouched, core["ɵnov"](_v, 391).ngClassTouched, core["ɵnov"](_v, 391).ngClassPristine, core["ɵnov"](_v, 391).ngClassDirty, core["ɵnov"](_v, 391).ngClassValid, core["ɵnov"](_v, 391).ngClassInvalid, core["ɵnov"](_v, 391).ngClassPending ]), 
                _ck(_v, 403, 0, core["ɵnov"](_v, 409).ngClassUntouched, core["ɵnov"](_v, 409).ngClassTouched, core["ɵnov"](_v, 409).ngClassPristine, core["ɵnov"](_v, 409).ngClassDirty, core["ɵnov"](_v, 409).ngClassValid, core["ɵnov"](_v, 409).ngClassInvalid, core["ɵnov"](_v, 409).ngClassPending), 
                _ck(_v, 418, 0, core["ɵnov"](_v, 419).disabled || null, "NoopAnimations" === core["ɵnov"](_v, 419)._animationMode), 
                _ck(_v, 421, 0, core["ɵnov"](_v, 422).disabled || null, "NoopAnimations" === core["ɵnov"](_v, 422)._animationMode), 
                _ck(_v, 424, 0, !_co.isMoreOptionsEnabled(), core["ɵnov"](_v, 425).disabled || null, "NoopAnimations" === core["ɵnov"](_v, 425)._animationMode);
            }));
        }
        class CreateComponent {}
        var RenderType_CreateComponent = core["ɵcrt"]({
            encapsulation: 0,
            styles: [ [ ".kd-create-container[_ngcontent-%COMP%]{padding:0}.kd-create-container[_ngcontent-%COMP%]     .mat-tab-body-content{height:auto;padding:20px}" ] ],
            data: {}
        });
        function View_CreateComponent_0(_l) {
            return core["ɵvid"](0, [ (_l()(), core["ɵeld"](0, 0, null, null, 23, "mat-card", [ [ "class", "kd-create-container mat-card" ] ], [ [ 2, "_mat-animation-noopable", null ] ], null, null, card_index_ngfactory.b, card_index_ngfactory.a)), core["ɵdid"](1, 49152, null, 0, card.a, [ [ 2, animations.a ] ], null, null), (_l()(), 
            core["ɵeld"](2, 0, null, 0, 21, "mat-tab-group", [ [ "class", "mat-tab-group" ] ], [ [ 24, "@.disabled", 0 ], [ 2, "mat-tab-group-dynamic-height", null ], [ 2, "mat-tab-group-inverted-header", null ] ], null, null, View_MatTabGroup_0, RenderType_MatTabGroup)), core["ɵdid"](3, 3325952, null, 1, tabs.g, [ core.ElementRef, core.ChangeDetectorRef, [ 2, tabs.a ], [ 2, animations.a ] ], null, null), core["ɵqud"](603979776, 1, {
                _allTabs: 1
            }), core["ɵprd"](2048, null, tabs.b, null, [ tabs.g ]), (_l()(), core["ɵeld"](6, 16777216, null, null, 5, "mat-tab", [ [ "label", "Create from input" ] ], null, null, null, View_MatTab_0, RenderType_MatTab)), core["ɵdid"](7, 770048, [ [ 1, 4 ] ], 2, tabs.d, [ core.ViewContainerRef, [ 2, tabs.b ] ], {
                textLabel: [ 0, "textLabel" ]
            }, null), core["ɵqud"](603979776, 2, {
                templateLabel: 0
            }), core["ɵqud"](335544320, 3, {
                _explicitContent: 0
            }), (_l()(), core["ɵeld"](10, 0, null, 0, 1, "kd-create-from-input", [], null, null, null, View_CreateFromInputComponent_0, RenderType_CreateFromInputComponent)), core["ɵdid"](11, 49152, null, 0, CreateFromInputComponent, [ global_namespace.a, service_CreateService, global_history.a ], null, null), (_l()(), 
            core["ɵeld"](12, 16777216, null, null, 5, "mat-tab", [ [ "label", "Create from file" ] ], null, null, null, View_MatTab_0, RenderType_MatTab)), core["ɵdid"](13, 770048, [ [ 1, 4 ] ], 2, tabs.d, [ core.ViewContainerRef, [ 2, tabs.b ] ], {
                textLabel: [ 0, "textLabel" ]
            }, null), core["ɵqud"](603979776, 4, {
                templateLabel: 0
            }), core["ɵqud"](335544320, 5, {
                _explicitContent: 0
            }), (_l()(), core["ɵeld"](16, 0, null, 0, 1, "kd-create-from-file", [], null, null, null, View_CreateFromFileComponent_0, RenderType_CreateFromFileComponent)), core["ɵdid"](17, 49152, null, 0, CreateFromFileComponent, [ global_namespace.a, service_CreateService, global_history.a ], null, null), (_l()(), 
            core["ɵeld"](18, 16777216, null, null, 5, "mat-tab", [ [ "label", "Create from form" ] ], null, null, null, View_MatTab_0, RenderType_MatTab)), core["ɵdid"](19, 770048, [ [ 1, 4 ] ], 2, tabs.d, [ core.ViewContainerRef, [ 2, tabs.b ] ], {
                textLabel: [ 0, "textLabel" ]
            }, null), core["ɵqud"](603979776, 6, {
                templateLabel: 0
            }), core["ɵqud"](335544320, 7, {
                _explicitContent: 0
            }), (_l()(), core["ɵeld"](22, 0, null, 0, 1, "kd-create-from-form", [], null, null, null, View_CreateFromFormComponent_0, RenderType_CreateFromFormComponent)), core["ɵdid"](23, 114688, null, 0, component_CreateFromFormComponent, [ global_namespace.a, service_CreateService, global_history.a, fesm2015_http.c, router.ActivatedRoute, fesm2015_forms.FormBuilder, dialog.e ], null, null) ], (function(_ck, _v) {
                _ck(_v, 7, 0, "Create from input"), _ck(_v, 13, 0, "Create from file"), _ck(_v, 19, 0, "Create from form"), 
                _ck(_v, 23, 0);
            }), (function(_ck, _v) {
                _ck(_v, 0, 0, "NoopAnimations" === core["ɵnov"](_v, 1)._animationMode), _ck(_v, 2, 0, !0, core["ɵnov"](_v, 3).dynamicHeight, "below" === core["ɵnov"](_v, 3).headerPosition);
            }));
        }
        function View_CreateComponent_Host_0(_l) {
            return core["ɵvid"](0, [ (_l()(), core["ɵeld"](0, 0, null, null, 1, "kd-create", [], null, null, null, View_CreateComponent_0, RenderType_CreateComponent)), core["ɵdid"](1, 49152, null, 0, CreateComponent, [], null, null) ], null, null);
        }
        var CreateComponentNgFactory = core["ɵccf"]("kd-create", CreateComponent, View_CreateComponent_Host_0, {}, {}, []), overlay = __webpack_require__("1O3W"), tooltip = __webpack_require__("ZFy/"), sort = __webpack_require__("LUZP"), paginator = __webpack_require__("5QHs"), menu = __webpack_require__("rJgo"), ngx_filter_pipe = __webpack_require__("4muW"), divider = __webpack_require__("BSbQ"), grid_list = __webpack_require__("40+f"), progress_spinner = __webpack_require__("pu8Q"), fesm2015_radio = __webpack_require__("zQhy"), sidenav = __webpack_require__("q7Ft"), toolbar = __webpack_require__("l0rg"), slider = __webpack_require__("mPVK"), slide_toggle = __webpack_require__("jMqV"), chips = __webpack_require__("f44v"), table = __webpack_require__("GXRp"), fesm2015_table = __webpack_require__("OaSA"), button_toggle = __webpack_require__("Ynp+"), snack_bar = __webpack_require__("zHaW"), grid = __webpack_require__("Nhcz"), flex_layout = __webpack_require__("u9T3"), src_module = __webpack_require__("o6Sk"), pipes_module = __webpack_require__("I7rD"), shared_module = __webpack_require__("MnlZ"), components_module = __webpack_require__("PXUV");
        class CreateFromFormModule {}
        class CreateServiceModule {}
        const ɵ0 = {
            breadcrumb: "Create"
        };
        class CreateRoutingModule {}
        var keycodes = __webpack_require__("Ht+U");
        __webpack_require__.d(__webpack_exports__, "CreateModuleNgFactory", (function() {
            return CreateModuleNgFactory;
        }));
        var CreateModuleNgFactory = core["ɵcmf"](CreateModule, [], (function(_l) {
            return core["ɵmod"]([ core["ɵmpd"](512, core.ComponentFactoryResolver, core["ɵCodegenComponentFactoryResolver"], [ [ 8, [ index_ngfactory.a, dialog_index_ngfactory.a, snack_bar_index_ngfactory.a, snack_bar_index_ngfactory.b, router_ngfactory.a, dialog_ngfactory.a, component_ngfactory.a, menu_component_ngfactory.a, changedialog_dialog_ngfactory.a, CreateNamespaceDialogNgFactory, CreateSecretDialogNgFactory, CreateComponentNgFactory ] ], [ 3, core.ComponentFactoryResolver ], core.NgModuleRef ]), core["ɵmpd"](4608, common.NgLocalization, common.NgLocaleLocalization, [ core.LOCALE_ID ]), core["ɵmpd"](4608, fesm2015_forms["ɵangular_packages_forms_forms_n"], fesm2015_forms["ɵangular_packages_forms_forms_n"], []), core["ɵmpd"](4608, fesm2015_forms.FormBuilder, fesm2015_forms.FormBuilder, []), core["ɵmpd"](4608, observers.c, observers.c, []), core["ɵmpd"](4608, fesm2015_core.d, fesm2015_core.d, []), core["ɵmpd"](4608, overlay.c, overlay.c, [ overlay.i, overlay.e, core.ComponentFactoryResolver, overlay.h, overlay.f, core.Injector, core.NgZone, common.DOCUMENT, bidi.b, [ 2, common.Location ] ]), core["ɵmpd"](5120, overlay.j, overlay.k, [ overlay.c ]), core["ɵmpd"](5120, tooltip.b, tooltip.c, [ overlay.c ]), core["ɵmpd"](5120, dialog.c, dialog.d, [ overlay.c ]), core["ɵmpd"](135680, dialog.e, dialog.e, [ overlay.c, core.Injector, [ 2, common.Location ], [ 2, dialog.b ], dialog.c, [ 3, dialog.e ], overlay.e ]), core["ɵmpd"](5120, sort.d, sort.a, [ [ 3, sort.d ] ]), core["ɵmpd"](5120, fesm2015_select.a, fesm2015_select.b, [ overlay.c ]), core["ɵmpd"](5120, paginator.c, paginator.a, [ [ 3, paginator.c ] ]), core["ɵmpd"](5120, menu.c, menu.j, [ overlay.c ]), core["ɵmpd"](5120, core.APP_BOOTSTRAP_LISTENER, (function(p0_0, p0_1) {
                return [ esm2015_core.j(p0_0, p0_1) ];
            }), [ common.DOCUMENT, core.PLATFORM_ID ]), core["ɵmpd"](4608, ngx_filter_pipe.a, ngx_filter_pipe.a, []), core["ɵmpd"](4608, service_CreateService, service_CreateService, [ fesm2015_http.c, global_namespace.a, csrftoken.a, dialog.e, router.Router, index_config.b ]), core["ɵmpd"](1073742336, common.CommonModule, common.CommonModule, []), core["ɵmpd"](1073742336, fesm2015_forms["ɵangular_packages_forms_forms_d"], fesm2015_forms["ɵangular_packages_forms_forms_d"], []), core["ɵmpd"](1073742336, fesm2015_forms.FormsModule, fesm2015_forms.FormsModule, []), core["ɵmpd"](1073742336, fesm2015_forms.ReactiveFormsModule, fesm2015_forms.ReactiveFormsModule, []), core["ɵmpd"](1073742336, bidi.a, bidi.a, []), core["ɵmpd"](1073742336, fesm2015_core.l, fesm2015_core.l, [ a11y.h, [ 2, fesm2015_core.e ] ]), core["ɵmpd"](1073742336, platform.b, platform.b, []), core["ɵmpd"](1073742336, fesm2015_core.u, fesm2015_core.u, []), core["ɵmpd"](1073742336, fesm2015_button.c, fesm2015_button.c, []), core["ɵmpd"](1073742336, card.e, card.e, []), core["ɵmpd"](1073742336, observers.d, observers.d, []), core["ɵmpd"](1073742336, fesm2015_checkbox.e, fesm2015_checkbox.e, []), core["ɵmpd"](1073742336, fesm2015_checkbox.d, fesm2015_checkbox.d, []), core["ɵmpd"](1073742336, divider.b, divider.b, []), core["ɵmpd"](1073742336, fesm2015_core.m, fesm2015_core.m, []), core["ɵmpd"](1073742336, grid_list.a, grid_list.a, []), core["ɵmpd"](1073742336, form_field.e, form_field.e, []), core["ɵmpd"](1073742336, icon.c, icon.c, []), core["ɵmpd"](1073742336, text_field.c, text_field.c, []), core["ɵmpd"](1073742336, input.b, input.b, []), core["ɵmpd"](1073742336, progress_spinner.c, progress_spinner.c, []), core["ɵmpd"](1073742336, progress_bar.c, progress_bar.c, []), core["ɵmpd"](1073742336, fesm2015_radio.d, fesm2015_radio.d, []), core["ɵmpd"](1073742336, scrolling.c, scrolling.c, []), core["ɵmpd"](1073742336, sidenav.h, sidenav.h, []), core["ɵmpd"](1073742336, toolbar.b, toolbar.b, []), core["ɵmpd"](1073742336, a11y.a, a11y.a, [ a11y.h ]), core["ɵmpd"](1073742336, portal.g, portal.g, []), core["ɵmpd"](1073742336, overlay.g, overlay.g, []), core["ɵmpd"](1073742336, tooltip.e, tooltip.e, []), core["ɵmpd"](1073742336, slider.b, slider.b, []), core["ɵmpd"](1073742336, dialog.k, dialog.k, []), core["ɵmpd"](1073742336, slide_toggle.d, slide_toggle.d, []), core["ɵmpd"](1073742336, slide_toggle.c, slide_toggle.c, []), core["ɵmpd"](1073742336, chips.d, chips.d, []), core["ɵmpd"](1073742336, table.p, table.p, []), core["ɵmpd"](1073742336, fesm2015_table.m, fesm2015_table.m, []), core["ɵmpd"](1073742336, sort.e, sort.e, []), core["ɵmpd"](1073742336, fesm2015_core.s, fesm2015_core.s, []), core["ɵmpd"](1073742336, fesm2015_core.q, fesm2015_core.q, []), core["ɵmpd"](1073742336, fesm2015_select.d, fesm2015_select.d, []), core["ɵmpd"](1073742336, paginator.d, paginator.d, []), core["ɵmpd"](1073742336, tabs.k, tabs.k, []), core["ɵmpd"](1073742336, menu.i, menu.i, []), core["ɵmpd"](1073742336, menu.f, menu.f, []), core["ɵmpd"](1073742336, button_toggle.e, button_toggle.e, []), core["ɵmpd"](1073742336, snack_bar.e, snack_bar.e, []), core["ɵmpd"](1073742336, esm2015_core.c, esm2015_core.c, []), core["ɵmpd"](1073742336, flex.h, flex.h, []), core["ɵmpd"](1073742336, extended.b, extended.b, []), core["ɵmpd"](1073742336, grid.a, grid.a, []), core["ɵmpd"](1073742336, flex_layout.a, flex_layout.a, [ [ 2, esm2015_core.g ], core.PLATFORM_ID ]), core["ɵmpd"](1073742336, router.RouterModule, router.RouterModule, [ [ 2, router["ɵangular_packages_router_router_a"] ], [ 2, router.Router ] ]), core["ɵmpd"](1073742336, src_module.a, src_module.a, []), core["ɵmpd"](1073742336, ngx_filter_pipe.b, ngx_filter_pipe.b, []), core["ɵmpd"](1073742336, pipes_module.a, pipes_module.a, []), core["ɵmpd"](1073742336, shared_module.a, shared_module.a, []), core["ɵmpd"](1073742336, components_module.a, components_module.a, []), core["ɵmpd"](1073742336, CreateFromFormModule, CreateFromFormModule, []), core["ɵmpd"](1073742336, CreateServiceModule, CreateServiceModule, []), core["ɵmpd"](1073742336, CreateRoutingModule, CreateRoutingModule, []), core["ɵmpd"](1073742336, CreateModule, CreateModule, []), core["ɵmpd"](256, chips.a, {
                separatorKeyCodes: [ keycodes.f ]
            }, []), core["ɵmpd"](256, tooltip.a, shared_module.b, []), core["ɵmpd"](1024, router.ROUTES, (function() {
                return [ [ {
                    path: "",
                    component: CreateComponent,
                    data: ɵ0
                } ] ];
            }), []) ]);
        }));
    }
} ]);
//# sourceMappingURL=create-module-ngfactory.js.map