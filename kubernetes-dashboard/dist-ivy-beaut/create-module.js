(window.webpackJsonp = window.webpackJsonp || []).push([ [ 4 ], {
    wLtH: function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        var components_module = __webpack_require__("PXUV"), index_config = __webpack_require__("r1w+"), dialog = __webpack_require__("e4jz"), params = __webpack_require__("yn8F"), core = __webpack_require__("fXoL"), fesm2015_http = __webpack_require__("tk/3"), global_namespace = __webpack_require__("cpu9"), csrftoken = __webpack_require__("SSUc"), fesm2015_dialog = __webpack_require__("0IaG"), router = __webpack_require__("tyNb"), __awaiter = function(thisArg, _arguments, P, generator) {
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
        let service_CreateService = (() => {
            class CreateService {
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
                    this.matDialog_.open(dialog.a, {
                        data: {
                            title: title,
                            message: message,
                            confirmLabel: "OK"
                        }
                    });
                }
            }
            return CreateService.ɵfac = function(t) {
                return new (t || CreateService)(core["ɵɵinject"](fesm2015_http.b), core["ɵɵinject"](global_namespace.a), core["ɵɵinject"](csrftoken.a), core["ɵɵinject"](fesm2015_dialog.b), core["ɵɵinject"](router.Router), core["ɵɵinject"](index_config.b));
            }, CreateService.ɵprov = core["ɵɵdefineInjectable"]({
                token: CreateService,
                factory: function(t) {
                    return CreateService.ɵfac(t);
                },
                providedIn: null
            }), CreateService;
        })(), module_CreateServiceModule = (() => {
            class CreateServiceModule {}
            return CreateServiceModule.ɵmod = core["ɵɵdefineNgModule"]({
                type: CreateServiceModule
            }), CreateServiceModule.ɵinj = core["ɵɵdefineInjector"]({
                factory: function(t) {
                    return new (t || CreateServiceModule);
                },
                providers: [ service_CreateService ]
            }), CreateServiceModule;
        })();
        var I18N_0, I18N_2, I18N_4, I18N_6, I18N_8, shared_module = __webpack_require__("MnlZ"), card = __webpack_require__("Wp6s"), tabs = __webpack_require__("wZkO"), global_history = __webpack_require__("RYKQ"), common = __webpack_require__("ofXK"), component = __webpack_require__("GCPd"), fesm2015_button = __webpack_require__("bTqV");
        function CreateFromInputComponent_span_1_Template(rf, ctx) {
            1 & rf && (core["ɵɵelementStart"](0, "span"), core["ɵɵi18n"](1, I18N_6), core["ɵɵelementEnd"]());
        }
        function CreateFromInputComponent_span_2_Template(rf, ctx) {
            1 & rf && (core["ɵɵelementStart"](0, "span"), core["ɵɵi18n"](1, I18N_8), core["ɵɵelementEnd"]());
        }
        I18N_0 = $localize` Learn more ${"�#5�"}:START_ITALIC_TEXT:open_in_new${"�/#5�"}:CLOSE_ITALIC_TEXT:`, 
        I18N_2 = $localize` Upload
`, I18N_4 = $localize` Cancel
`, I18N_6 = $localize` Enter YAML or JSON content specifying the resources to create to the namespace specified in the file. `, 
        I18N_8 = $localize` Enter YAML or JSON content specifying the resources to create to the currently selected namespace. `;
        let component_CreateFromInputComponent = (() => {
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
            return CreateFromInputComponent.ɵfac = function(t) {
                return new (t || CreateFromInputComponent)(core["ɵɵdirectiveInject"](global_namespace.a), core["ɵɵdirectiveInject"](service_CreateService), core["ɵɵdirectiveInject"](global_history.a));
            }, CreateFromInputComponent.ɵcmp = core["ɵɵdefineComponent"]({
                type: CreateFromInputComponent,
                selectors: [ [ "kd-create-from-input" ] ],
                decls: 11,
                vars: 4,
                consts: [ [ 1, "kd-create-from-input-info" ], [ 4, "ngIf" ], [ "href", "https://kubernetes.io/docs/tasks/run-application/run-stateless-application-deployment/", "target", "_blank" ], [ 1, "material-icons" ], [ 3, "text", "textChange" ], [ "type", "button", "color", "primary", "mat-raised-button", "", 3, "disabled", "click" ], [ "type", "button", "color", "primary", "mat-button", "", 3, "click" ] ],
                template: function(rf, ctx) {
                    1 & rf && (core["ɵɵelementStart"](0, "div", 0), core["ɵɵtemplate"](1, CreateFromInputComponent_span_1_Template, 2, 0, "span", 1), 
                    core["ɵɵtemplate"](2, CreateFromInputComponent_span_2_Template, 2, 0, "span", 1), 
                    core["ɵɵelementStart"](3, "a", 2), core["ɵɵi18nStart"](4, I18N_0), core["ɵɵelement"](5, "i", 3), 
                    core["ɵɵi18nEnd"](), core["ɵɵelementEnd"](), core["ɵɵelementEnd"](), core["ɵɵelementStart"](6, "kd-text-input", 4), 
                    core["ɵɵlistener"]("textChange", (function($event) {
                        return ctx.inputData = $event;
                    })), core["ɵɵelementEnd"](), core["ɵɵelementStart"](7, "button", 5), core["ɵɵlistener"]("click", (function($event) {
                        return ctx.create();
                    })), core["ɵɵi18n"](8, I18N_2), core["ɵɵelementEnd"](), core["ɵɵelementStart"](9, "button", 6), 
                    core["ɵɵlistener"]("click", (function($event) {
                        return ctx.cancel();
                    })), core["ɵɵi18n"](10, I18N_4), core["ɵɵelementEnd"]()), 2 & rf && (core["ɵɵadvance"](1), 
                    core["ɵɵproperty"]("ngIf", ctx.areMultipleNamespacesSelected()), core["ɵɵadvance"](1), 
                    core["ɵɵproperty"]("ngIf", !ctx.areMultipleNamespacesSelected()), core["ɵɵadvance"](4), 
                    core["ɵɵproperty"]("text", ctx.inputData), core["ɵɵadvance"](1), core["ɵɵproperty"]("disabled", ctx.isCreateDisabled()));
                },
                directives: [ common.NgIf, component.a, fesm2015_button.b ],
                styles: [ ".kd-create-from-input-info[_ngcontent-%COMP%]{margin-bottom:24px;padding:0 4px}.kd-create-from-input-info[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%]{font-size:14px}.kd-create-from-input-button[_ngcontent-%COMP%]{margin-left:0}kd-text-input[_ngcontent-%COMP%]  ace-editor{margin-bottom:24px}" ]
            }), CreateFromInputComponent;
        })();
        var component_I18N_0, fesm2015_forms = __webpack_require__("3Pt+"), uploadfile_component = __webpack_require__("PCAo");
        component_I18N_0 = $localize` Learn more ${"�#5�"}:START_ITALIC_TEXT:open_in_new${"�/#5�"}:CLOSE_ITALIC_TEXT:`;
        const _c4 = [ "label", $localize`Choose YAML or JSON file` ];
        var I18N_5, I18N_7, I18N_9, I18N_11;
        function CreateFromFileComponent_span_1_Template(rf, ctx) {
            1 & rf && (core["ɵɵelementStart"](0, "span"), core["ɵɵi18n"](1, I18N_9), core["ɵɵelementEnd"]());
        }
        function CreateFromFileComponent_span_2_Template(rf, ctx) {
            1 & rf && (core["ɵɵelementStart"](0, "span"), core["ɵɵi18n"](1, I18N_11), core["ɵɵelementEnd"]());
        }
        I18N_5 = $localize` Upload `, I18N_7 = $localize` Cancel `, I18N_9 = $localize` Select YAML or JSON file specifying the resources to deploy to the namespace specified in the file. `, 
        I18N_11 = $localize` Select YAML or JSON file specifying the resources to deploy to the currently selected namespace. `;
        let component_CreateFromFileComponent = (() => {
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
            return CreateFromFileComponent.ɵfac = function(t) {
                return new (t || CreateFromFileComponent)(core["ɵɵdirectiveInject"](global_namespace.a), core["ɵɵdirectiveInject"](service_CreateService), core["ɵɵdirectiveInject"](global_history.a));
            }, CreateFromFileComponent.ɵcmp = core["ɵɵdefineComponent"]({
                type: CreateFromFileComponent,
                selectors: [ [ "kd-create-from-file" ] ],
                viewQuery: function(rf, ctx) {
                    var _t;
                    1 & rf && core["ɵɵstaticViewQuery"](fesm2015_forms.NgForm, !0), 2 & rf && core["ɵɵqueryRefresh"](_t = core["ɵɵloadQuery"]()) && (ctx.ngForm = _t.first);
                },
                decls: 13,
                vars: 3,
                consts: [ [ 1, "kd-create-from-file-info" ], [ 4, "ngIf" ], [ "href", "https://kubernetes.io/docs/tasks/run-application/run-stateless-application-deployment/", "target", "_blank" ], [ 1, "material-icons" ], [ 3, "ngSubmit" ], [ 3, "onLoad", 6, "label" ], [ "type", "button", "type", "submit", "color", "primary", "mat-raised-button", "", 3, "disabled" ], [ "type", "button", "color", "primary", "mat-button", "", 3, "click" ] ],
                template: function(rf, ctx) {
                    1 & rf && (core["ɵɵelementStart"](0, "div", 0), core["ɵɵtemplate"](1, CreateFromFileComponent_span_1_Template, 2, 0, "span", 1), 
                    core["ɵɵtemplate"](2, CreateFromFileComponent_span_2_Template, 2, 0, "span", 1), 
                    core["ɵɵelementStart"](3, "a", 2), core["ɵɵi18nStart"](4, component_I18N_0), core["ɵɵelement"](5, "i", 3), 
                    core["ɵɵi18nEnd"](), core["ɵɵelementEnd"](), core["ɵɵelementEnd"](), core["ɵɵelementStart"](6, "form", 4), 
                    core["ɵɵlistener"]("ngSubmit", (function($event) {
                        return ctx.create();
                    })), core["ɵɵelementStart"](7, "kd-upload-file", 5), core["ɵɵi18nAttributes"](8, _c4), 
                    core["ɵɵlistener"]("onLoad", (function($event) {
                        return ctx.onFileLoad($event);
                    })), core["ɵɵelementEnd"](), core["ɵɵelementStart"](9, "button", 6), core["ɵɵi18n"](10, I18N_5), 
                    core["ɵɵelementEnd"](), core["ɵɵelementStart"](11, "button", 7), core["ɵɵlistener"]("click", (function($event) {
                        return ctx.cancel();
                    })), core["ɵɵi18n"](12, I18N_7), core["ɵɵelementEnd"](), core["ɵɵelementEnd"]()), 
                    2 & rf && (core["ɵɵadvance"](1), core["ɵɵproperty"]("ngIf", ctx.areMultipleNamespacesSelected()), 
                    core["ɵɵadvance"](1), core["ɵɵproperty"]("ngIf", !ctx.areMultipleNamespacesSelected()), 
                    core["ɵɵadvance"](7), core["ɵɵproperty"]("disabled", ctx.isCreateDisabled()));
                },
                directives: [ common.NgIf, fesm2015_forms["ɵangular_packages_forms_forms_y"], fesm2015_forms.NgControlStatusGroup, fesm2015_forms.NgForm, uploadfile_component.a, fesm2015_button.b ],
                styles: [ ".kd-create-from-file-info[_ngcontent-%COMP%]{margin-bottom:24px;padding:0 4px}.kd-create-from-file-info[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%]{font-size:14px}.kd-deploy-from-file-button[_ngcontent-%COMP%]{margin-left:0}" ]
            }), CreateFromFileComponent;
        })();
        var flex = __webpack_require__("XiUz");
        const _c0 = [ "*" ];
        let component_HelpSectionComponent = (() => {
            class HelpSectionComponent {}
            return HelpSectionComponent.ɵfac = function(t) {
                return new (t || HelpSectionComponent);
            }, HelpSectionComponent.ɵcmp = core["ɵɵdefineComponent"]({
                type: HelpSectionComponent,
                selectors: [ [ "kd-help-section" ] ],
                ngContentSelectors: _c0,
                decls: 2,
                vars: 0,
                consts: [ [ "fxLayout", "row", "fxLayout.xs", "column", "fxLayout.sm", "column", 1, "kd-help-section" ] ],
                template: function(rf, ctx) {
                    1 & rf && (core["ɵɵprojectionDef"](), core["ɵɵelementStart"](0, "div", 0), core["ɵɵprojection"](1), 
                    core["ɵɵelementEnd"]());
                },
                directives: [ flex.d ],
                styles: [ ".kd-help-section[_ngcontent-%COMP%]    >*{flex:1;flex-basis:auto;margin:8px 0;width:100%}.kd-help-section[_ngcontent-%COMP%]    >:last-child{padding-left:32px}.kd-help-section[_ngcontent-%COMP%]    >:first-child{max-width:48.5%}@media (max-width:959px){.kd-help-section[_ngcontent-%COMP%]    >:first-child{max-width:100%}}.kd-help-section[_ngcontent-%COMP%]   kd-port-mappings[_ngcontent-%COMP%]{margin-bottom:0;margin-top:0}" ]
            }), HelpSectionComponent;
        })();
        var form_field = __webpack_require__("kmnG"), input = __webpack_require__("qFsG");
        const component_c0 = [ "*" ];
        let component_UserHelpComponent = (() => {
            class UserHelpComponent {}
            return UserHelpComponent.ɵfac = function(t) {
                return new (t || UserHelpComponent);
            }, UserHelpComponent.ɵcmp = core["ɵɵdefineComponent"]({
                type: UserHelpComponent,
                selectors: [ [ "kd-user-help" ] ],
                ngContentSelectors: component_c0,
                decls: 2,
                vars: 0,
                consts: [ [ 1, "kd-user-help" ] ],
                template: function(rf, ctx) {
                    1 & rf && (core["ɵɵprojectionDef"](), core["ɵɵelementStart"](0, "div", 0), core["ɵɵprojection"](1), 
                    core["ɵɵelementEnd"]());
                },
                styles: [ ".kd-user-help[_ngcontent-%COMP%]    {font-size:14px}.kd-user-help[_ngcontent-%COMP%]     .material-icons{font-size:12px;vertical-align:middle}.kd-user-help[_ngcontent-%COMP%]     a{opacity:1;text-decoration:none}" ]
            }), UserHelpComponent;
        })();
        var dialog_I18N_0, dialog_I18N_2;
        dialog_I18N_0 = $localize`Create a new namespace`, dialog_I18N_2 = $localize`The new namespace will be added to the cluster.`;
        const _c6 = [ "placeholder", $localize`Namespace name` ];
        var dialog_I18N_7, dialog_I18N_9, dialog_I18N_11, I18N_13, I18N_15, I18N_17, I18N_19;
        function CreateNamespaceDialog_mat_error_14_Template(rf, ctx) {
            1 & rf && (core["ɵɵelementStart"](0, "mat-error"), core["ɵɵi18n"](1, I18N_15), core["ɵɵelementEnd"]());
        }
        function CreateNamespaceDialog_mat_error_15_Template(rf, ctx) {
            if (1 & rf && (core["ɵɵelementStart"](0, "mat-error"), core["ɵɵi18n"](1, I18N_17), 
            core["ɵɵelementEnd"]()), 2 & rf) {
                const ctx_r1343 = core["ɵɵnextContext"]();
                core["ɵɵi18nExp"](ctx_r1343.namespaceMaxLength), core["ɵɵi18nApply"](1);
            }
        }
        function CreateNamespaceDialog_mat_error_16_Template(rf, ctx) {
            1 & rf && (core["ɵɵelementStart"](0, "mat-error"), core["ɵɵi18n"](1, I18N_19), core["ɵɵelementEnd"]());
        }
        dialog_I18N_7 = $localize`A namespace with the specified name will be added to the cluster.`, 
        dialog_I18N_9 = $localize` Learn more ${"�#22�"}:START_ITALIC_TEXT:open_in_new${"�/#22�"}:CLOSE_ITALIC_TEXT:`, 
        dialog_I18N_11 = $localize`Create`, I18N_13 = $localize`Cancel`, I18N_15 = $localize` Name is required. `, 
        I18N_17 = $localize` Name must be up to ${"�0�"}:INTERPOLATION: characters long. `, 
        I18N_19 = $localize` Name must be alphanumeric and may contain dashes. `;
        let dialog_CreateNamespaceDialog = (() => {
            class CreateNamespaceDialog {
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
                        headers: (new fesm2015_http.f).set(this.config_.csrfHeaderName, csrfToken.token)
                    }).subscribe(() => {
                        this.dialogRef.close(this.namespace.value);
                    }, error => {
                        this.dialogRef.close(), this.matDialog_.open(dialog.a, {
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
            return CreateNamespaceDialog.ɵfac = function(t) {
                return new (t || CreateNamespaceDialog)(core["ɵɵdirectiveInject"](fesm2015_dialog.g), core["ɵɵdirectiveInject"](fesm2015_dialog.a), core["ɵɵdirectiveInject"](fesm2015_http.b), core["ɵɵdirectiveInject"](csrftoken.a), core["ɵɵdirectiveInject"](fesm2015_dialog.b), core["ɵɵdirectiveInject"](fesm2015_forms.FormBuilder));
            }, CreateNamespaceDialog.ɵcmp = core["ɵɵdefineComponent"]({
                type: CreateNamespaceDialog,
                selectors: [ [ "kd-create-namespace-dialog" ] ],
                decls: 29,
                vars: 7,
                consts: [ [ "mat-dialog-title", "" ], [ 1, "kd-dialog-text" ], [ 3, "formGroup" ], [ "matInput", "", "type", "text", "name", "namespace", "formControlName", "namespace", "required", "", 6, "placeholder" ], [ "align", "end" ], [ 4, "ngIf" ], [ "href", "http://kubernetes.io/docs/admin/namespaces/", "target", "_blank", "tabindex", "-1" ], [ 1, "material-icons" ], [ "mat-button", "", "type", "submit", "color", "primary", 3, "disabled", "click" ], [ "mat-button", "", 3, "click" ] ],
                template: function(rf, ctx) {
                    1 & rf && (core["ɵɵelementStart"](0, "h4", 0), core["ɵɵi18n"](1, dialog_I18N_0), 
                    core["ɵɵelementEnd"](), core["ɵɵelementStart"](2, "mat-dialog-content", 1), core["ɵɵelementContainerStart"](3), 
                    core["ɵɵelementStart"](4, "div"), core["ɵɵi18n"](5, dialog_I18N_2), core["ɵɵelementEnd"](), 
                    core["ɵɵelementStart"](6, "div"), core["ɵɵelementStart"](7, "form", 2), core["ɵɵelementStart"](8, "kd-help-section"), 
                    core["ɵɵelementStart"](9, "mat-form-field"), core["ɵɵelementStart"](10, "input", 3), 
                    core["ɵɵi18nAttributes"](11, _c6), core["ɵɵelementEnd"](), core["ɵɵelementStart"](12, "mat-hint", 4), 
                    core["ɵɵtext"](13), core["ɵɵelementEnd"](), core["ɵɵtemplate"](14, CreateNamespaceDialog_mat_error_14_Template, 2, 0, "mat-error", 5), 
                    core["ɵɵtemplate"](15, CreateNamespaceDialog_mat_error_15_Template, 2, 1, "mat-error", 5), 
                    core["ɵɵtemplate"](16, CreateNamespaceDialog_mat_error_16_Template, 2, 0, "mat-error", 5), 
                    core["ɵɵelementEnd"](), core["ɵɵelementStart"](17, "kd-user-help"), core["ɵɵelementContainerStart"](18), 
                    core["ɵɵi18n"](19, dialog_I18N_7), core["ɵɵelementContainerEnd"](), core["ɵɵelementStart"](20, "a", 6), 
                    core["ɵɵi18nStart"](21, dialog_I18N_9), core["ɵɵelement"](22, "i", 7), core["ɵɵi18nEnd"](), 
                    core["ɵɵelementEnd"](), core["ɵɵelementEnd"](), core["ɵɵelementEnd"](), core["ɵɵelementEnd"](), 
                    core["ɵɵelementEnd"](), core["ɵɵelementContainerEnd"](), core["ɵɵelementEnd"](), 
                    core["ɵɵelementStart"](23, "mat-dialog-actions", 4), core["ɵɵelementContainerStart"](24), 
                    core["ɵɵelementStart"](25, "button", 8), core["ɵɵlistener"]("click", (function($event) {
                        return ctx.createNamespace();
                    })), core["ɵɵi18n"](26, dialog_I18N_11), core["ɵɵelementEnd"](), core["ɵɵelementStart"](27, "button", 9), 
                    core["ɵɵlistener"]("click", (function($event) {
                        return ctx.cancel();
                    })), core["ɵɵi18n"](28, I18N_13), core["ɵɵelementEnd"](), core["ɵɵelementContainerEnd"](), 
                    core["ɵɵelementEnd"]()), 2 & rf && (core["ɵɵadvance"](7), core["ɵɵproperty"]("formGroup", ctx.form), 
                    core["ɵɵadvance"](6), core["ɵɵtextInterpolate2"]("", ctx.namespace.value.length, " / ", ctx.namespaceMaxLength, ""), 
                    core["ɵɵadvance"](1), core["ɵɵproperty"]("ngIf", null == ctx.namespace.errors ? null : ctx.namespace.errors.required), 
                    core["ɵɵadvance"](1), core["ɵɵproperty"]("ngIf", null == ctx.namespace.errors ? null : ctx.namespace.errors.maxlength), 
                    core["ɵɵadvance"](1), core["ɵɵproperty"]("ngIf", null == ctx.namespace.errors ? null : ctx.namespace.errors.pattern), 
                    core["ɵɵadvance"](9), core["ɵɵproperty"]("disabled", ctx.isDisabled()));
                },
                directives: [ fesm2015_dialog.h, fesm2015_dialog.e, fesm2015_forms["ɵangular_packages_forms_forms_y"], fesm2015_forms.NgControlStatusGroup, fesm2015_forms.FormGroupDirective, component_HelpSectionComponent, form_field.b, input.a, fesm2015_forms.DefaultValueAccessor, fesm2015_forms.NgControlStatus, fesm2015_forms.FormControlName, fesm2015_forms.RequiredValidator, form_field.e, common.NgIf, component_UserHelpComponent, fesm2015_dialog.c, fesm2015_button.b, form_field.a ],
                encapsulation: 2
            }), CreateNamespaceDialog;
        })();
        var createsecret_dialog_I18N_0, createsecret_dialog_I18N_2;
        createsecret_dialog_I18N_0 = $localize`Create a new image pull secret`, createsecret_dialog_I18N_2 = $localize`The new secret will be added to the cluster`;
        const dialog_c6 = [ "placeholder", $localize`Secret name` ];
        var createsecret_dialog_I18N_7, createsecret_dialog_I18N_9, createsecret_dialog_I18N_11, dialog_I18N_13, dialog_I18N_15, dialog_I18N_17, dialog_I18N_19, I18N_21, I18N_23, I18N_25, I18N_27;
        function CreateSecretDialog_mat_error_14_Template(rf, ctx) {
            1 & rf && (core["ɵɵelementStart"](0, "mat-error"), core["ɵɵi18n"](1, dialog_I18N_19), 
            core["ɵɵelementEnd"]());
        }
        function CreateSecretDialog_mat_error_15_Template(rf, ctx) {
            if (1 & rf && (core["ɵɵelementStart"](0, "mat-error"), core["ɵɵi18n"](1, I18N_21), 
            core["ɵɵelementEnd"]()), 2 & rf) {
                const ctx_r1346 = core["ɵɵnextContext"]();
                core["ɵɵi18nExp"](ctx_r1346.secretNameMaxLength), core["ɵɵi18nApply"](1);
            }
        }
        function CreateSecretDialog_mat_error_16_Template(rf, ctx) {
            1 & rf && (core["ɵɵelementStart"](0, "mat-error"), core["ɵɵi18n"](1, I18N_23), core["ɵɵelementEnd"]());
        }
        function CreateSecretDialog_mat_error_26_Template(rf, ctx) {
            1 & rf && (core["ɵɵelementStart"](0, "mat-error"), core["ɵɵi18n"](1, I18N_25), core["ɵɵelementEnd"]());
        }
        function CreateSecretDialog_mat_error_27_Template(rf, ctx) {
            1 & rf && (core["ɵɵelementStart"](0, "mat-error"), core["ɵɵi18n"](1, I18N_27), core["ɵɵelementEnd"]());
        }
        createsecret_dialog_I18N_7 = $localize`A secret with the specified name will be added to the cluster in the namespace.`, 
        createsecret_dialog_I18N_9 = $localize` Learn more ${"�#22�"}:START_ITALIC_TEXT:open_in_new${"�/#22�"}:CLOSE_ITALIC_TEXT:`, 
        createsecret_dialog_I18N_11 = $localize`Specify the data for your secret to hold. The value is the Base64 encoded content of a .dockercfg file.`, 
        dialog_I18N_13 = $localize` Learn more ${"�#33�"}:START_ITALIC_TEXT:open_in_new${"�/#33�"}:CLOSE_ITALIC_TEXT:`, 
        dialog_I18N_15 = $localize`Create`, dialog_I18N_17 = $localize`Cancel`, dialog_I18N_19 = $localize` Name is required. `, 
        I18N_21 = $localize` Name must be up to ${"�0�"}:INTERPOLATION: characters long. `, 
        I18N_23 = $localize` Name must follow the DNS domain name syntax (e.g. new.image-pull.secret). `, 
        I18N_25 = $localize` Data is required. `, I18N_27 = $localize` Data must be Base64 encoded. `;
        let dialog_CreateSecretDialog = (() => {
            class CreateSecretDialog {
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
                        headers: (new fesm2015_http.f).set(this.config_.csrfHeaderName, csrfToken.token)
                    }).subscribe(() => {
                        this.dialogRef.close(this.secretName.value);
                    }, error => {
                        this.dialogRef.close(), this.matDialog_.open(dialog.a, {
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
            return CreateSecretDialog.ɵfac = function(t) {
                return new (t || CreateSecretDialog)(core["ɵɵdirectiveInject"](fesm2015_dialog.g), core["ɵɵdirectiveInject"](fesm2015_dialog.a), core["ɵɵdirectiveInject"](fesm2015_http.b), core["ɵɵdirectiveInject"](csrftoken.a), core["ɵɵdirectiveInject"](fesm2015_dialog.b), core["ɵɵdirectiveInject"](fesm2015_forms.FormBuilder));
            }, CreateSecretDialog.ɵcmp = core["ɵɵdefineComponent"]({
                type: CreateSecretDialog,
                selectors: [ [ "kd-create-secret-dialog" ] ],
                decls: 40,
                vars: 8,
                consts: [ [ "mat-dialog-title", "" ], [ 1, "kd-dialog-text" ], [ 3, "formGroup" ], [ "matInput", "", "type", "text", "name", "secretName", "formControlName", "secretName", "required", "", 6, "placeholder" ], [ "align", "end" ], [ 4, "ngIf" ], [ "href", "http://kubernetes.io/docs/user-guide/secrets/", "target", "_blank", "tabindex", "-1" ], [ 1, "material-icons" ], [ "matInput", "", "type", "text", "placeholder", "Image pull secret data", "name", "data", "formControlName", "data", "required", "" ], [ "href", "http://kubernetes.io/docs/user-guide/images/#specifying-imagepullsecrets-on-a-pod", "target", "_blank", "tabindex", "-1" ], [ "mat-button", "", "type", "submit", "color", "primary", 3, "click" ], [ "mat-button", "", 3, "click" ] ],
                template: function(rf, ctx) {
                    1 & rf && (core["ɵɵelementStart"](0, "h4", 0), core["ɵɵi18n"](1, createsecret_dialog_I18N_0), 
                    core["ɵɵelementEnd"](), core["ɵɵelementStart"](2, "mat-dialog-content", 1), core["ɵɵelementContainerStart"](3), 
                    core["ɵɵelementStart"](4, "div"), core["ɵɵi18n"](5, createsecret_dialog_I18N_2), 
                    core["ɵɵelementEnd"](), core["ɵɵelementStart"](6, "div"), core["ɵɵelementStart"](7, "form", 2), 
                    core["ɵɵelementStart"](8, "kd-help-section"), core["ɵɵelementStart"](9, "mat-form-field"), 
                    core["ɵɵelementStart"](10, "input", 3), core["ɵɵi18nAttributes"](11, dialog_c6), 
                    core["ɵɵelementEnd"](), core["ɵɵelementStart"](12, "mat-hint", 4), core["ɵɵtext"](13), 
                    core["ɵɵelementEnd"](), core["ɵɵtemplate"](14, CreateSecretDialog_mat_error_14_Template, 2, 0, "mat-error", 5), 
                    core["ɵɵtemplate"](15, CreateSecretDialog_mat_error_15_Template, 2, 1, "mat-error", 5), 
                    core["ɵɵtemplate"](16, CreateSecretDialog_mat_error_16_Template, 2, 0, "mat-error", 5), 
                    core["ɵɵelementEnd"](), core["ɵɵelementStart"](17, "kd-user-help"), core["ɵɵelementStart"](18, "span"), 
                    core["ɵɵi18n"](19, createsecret_dialog_I18N_7), core["ɵɵelementEnd"](), core["ɵɵelementStart"](20, "a", 6), 
                    core["ɵɵi18nStart"](21, createsecret_dialog_I18N_9), core["ɵɵelement"](22, "i", 7), 
                    core["ɵɵi18nEnd"](), core["ɵɵelementEnd"](), core["ɵɵelementEnd"](), core["ɵɵelementEnd"](), 
                    core["ɵɵelementStart"](23, "kd-help-section"), core["ɵɵelementStart"](24, "mat-form-field"), 
                    core["ɵɵelement"](25, "input", 8), core["ɵɵtemplate"](26, CreateSecretDialog_mat_error_26_Template, 2, 0, "mat-error", 5), 
                    core["ɵɵtemplate"](27, CreateSecretDialog_mat_error_27_Template, 2, 0, "mat-error", 5), 
                    core["ɵɵelementEnd"](), core["ɵɵelementStart"](28, "kd-user-help"), core["ɵɵelementContainerStart"](29), 
                    core["ɵɵi18n"](30, createsecret_dialog_I18N_11), core["ɵɵelementContainerEnd"](), 
                    core["ɵɵelementStart"](31, "a", 9), core["ɵɵi18nStart"](32, dialog_I18N_13), core["ɵɵelement"](33, "i", 7), 
                    core["ɵɵi18nEnd"](), core["ɵɵelementEnd"](), core["ɵɵelementEnd"](), core["ɵɵelementEnd"](), 
                    core["ɵɵelementEnd"](), core["ɵɵelementEnd"](), core["ɵɵelementContainerEnd"](), 
                    core["ɵɵelementEnd"](), core["ɵɵelementStart"](34, "mat-dialog-actions", 4), core["ɵɵelementContainerStart"](35), 
                    core["ɵɵelementStart"](36, "button", 10), core["ɵɵlistener"]("click", (function($event) {
                        return ctx.createSecret();
                    })), core["ɵɵi18n"](37, dialog_I18N_15), core["ɵɵelementEnd"](), core["ɵɵelementStart"](38, "button", 11), 
                    core["ɵɵlistener"]("click", (function($event) {
                        return ctx.cancel();
                    })), core["ɵɵi18n"](39, dialog_I18N_17), core["ɵɵelementEnd"](), core["ɵɵelementContainerEnd"](), 
                    core["ɵɵelementEnd"]()), 2 & rf && (core["ɵɵadvance"](7), core["ɵɵproperty"]("formGroup", ctx.form), 
                    core["ɵɵadvance"](6), core["ɵɵtextInterpolate2"]("", ctx.secretName.value.length, " / ", ctx.secretNameMaxLength, ""), 
                    core["ɵɵadvance"](1), core["ɵɵproperty"]("ngIf", null == ctx.secretName.errors ? null : ctx.secretName.errors.required), 
                    core["ɵɵadvance"](1), core["ɵɵproperty"]("ngIf", null == ctx.secretName.errors ? null : ctx.secretName.errors.maxlength), 
                    core["ɵɵadvance"](1), core["ɵɵproperty"]("ngIf", null == ctx.secretName.errors ? null : ctx.secretName.errors.pattern), 
                    core["ɵɵadvance"](10), core["ɵɵproperty"]("ngIf", null == ctx.data.errors ? null : ctx.data.errors.required), 
                    core["ɵɵadvance"](1), core["ɵɵproperty"]("ngIf", null == ctx.data.errors ? null : ctx.data.errors.pattern));
                },
                directives: [ fesm2015_dialog.h, fesm2015_dialog.e, fesm2015_forms["ɵangular_packages_forms_forms_y"], fesm2015_forms.NgControlStatusGroup, fesm2015_forms.FormGroupDirective, component_HelpSectionComponent, form_field.b, input.a, fesm2015_forms.DefaultValueAccessor, fesm2015_forms.NgControlStatus, fesm2015_forms.FormControlName, fesm2015_forms.RequiredValidator, form_field.e, common.NgIf, component_UserHelpComponent, fesm2015_dialog.c, fesm2015_button.b, form_field.a ],
                encapsulation: 2
            }), CreateSecretDialog;
        })();
        class DeployLabel {
            constructor(key = "", value = "", editable = !0) {
                this.editable = editable, this.key = key, this.value = value;
            }
        }
        var Observable = __webpack_require__("zE9r"), debounceTime = __webpack_require__("Kj3r"), map = __webpack_require__("lJxs");
        const uniqueNameValidationKey = "uniqueName";
        let uniquename_validator_UniqueNameValidator = (() => {
            class UniqueNameValidator {
                constructor(http) {
                    this.http = http;
                }
                validate(control) {
                    return validateUniqueName(this.http, this.namespace)(control);
                }
            }
            return UniqueNameValidator.ɵfac = function(t) {
                return new (t || UniqueNameValidator)(core["ɵɵdirectiveInject"](fesm2015_http.b));
            }, UniqueNameValidator.ɵdir = core["ɵɵdefineDirective"]({
                type: UniqueNameValidator,
                selectors: [ [ "", "kdUniqueName", "" ] ],
                inputs: {
                    namespace: "namespace"
                },
                features: [ core["ɵɵProvidersFeature"]([ {
                    provide: fesm2015_forms.NG_ASYNC_VALIDATORS,
                    useExisting: Object(core.forwardRef)(() => UniqueNameValidator),
                    multi: !0
                } ]) ]
            }), UniqueNameValidator;
        })();
        function validateUniqueName(http, namespace) {
            return control => control.value ? http.post("api/v1/appdeployment/validate/name", {
                name: control.value,
                namespace: namespace
            }).pipe(Object(debounceTime.a)(500), Object(map.a)(res => res.valid ? null : {
                [uniqueNameValidationKey]: control.value
            })) : Observable.a.of(null);
        }
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
        var progress_bar = __webpack_require__("bv9b"), extended = __webpack_require__("znSr");
        const validimagereference_validator_uniqueNameValidationKey = "validImageReference";
        let validimagereference_validator_ValidImageReferenceValidator = (() => {
            class ValidImageReferenceValidator {
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
            return ValidImageReferenceValidator.ɵfac = function(t) {
                return new (t || ValidImageReferenceValidator)(core["ɵɵdirectiveInject"](fesm2015_http.b));
            }, ValidImageReferenceValidator.ɵdir = core["ɵɵdefineDirective"]({
                type: ValidImageReferenceValidator,
                selectors: [ [ "", "kdValidImageReference", "" ] ],
                inputs: {
                    namespace: "namespace"
                },
                features: [ core["ɵɵProvidersFeature"]([ {
                    provide: fesm2015_forms.NG_ASYNC_VALIDATORS,
                    useExisting: Object(core.forwardRef)(() => ValidImageReferenceValidator),
                    multi: !0
                } ]) ]
            }), ValidImageReferenceValidator;
        })(), warnthreshold_validator_WarnThresholdValidator = (() => {
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
            return WarnThresholdValidator.ɵfac = function(t) {
                return new (t || WarnThresholdValidator);
            }, WarnThresholdValidator.ɵdir = core["ɵɵdefineDirective"]({
                type: WarnThresholdValidator,
                selectors: [ [ "", "kdWarnThreshold", "" ] ],
                inputs: {
                    kdWarnThreshold: "kdWarnThreshold"
                },
                features: [ core["ɵɵProvidersFeature"]([ {
                    provide: fesm2015_forms.NG_VALIDATORS,
                    useExisting: Object(core.forwardRef)(() => WarnThresholdValidator),
                    multi: !0
                } ]) ]
            }), WarnThresholdValidator;
        })();
        var startWith = __webpack_require__("JX91"), first = __webpack_require__("SxV6");
        const validProtocolValidationKey = "validProtocol";
        let validprotocol_validator_ProtocolValidator = (() => {
            class ProtocolValidator {
                constructor(http) {
                    this.http = http;
                }
                validate(control) {
                    return validateProtocol(this.http, this.isExternal)(control);
                }
            }
            return ProtocolValidator.ɵfac = function(t) {
                return new (t || ProtocolValidator)(core["ɵɵdirectiveInject"](fesm2015_http.b));
            }, ProtocolValidator.ɵdir = core["ɵɵdefineDirective"]({
                type: ProtocolValidator,
                selectors: [ [ "", "kdValidProtocol", "" ] ],
                inputs: {
                    isExternal: "isExternal"
                },
                features: [ core["ɵɵProvidersFeature"]([ {
                    provide: fesm2015_forms.NG_ASYNC_VALIDATORS,
                    useExisting: Object(core.forwardRef)(() => ProtocolValidator),
                    multi: !0
                } ]) ]
            }), ProtocolValidator;
        })();
        function validateProtocol(http, isExternal) {
            return control => control.value ? http.post("api/v1/appdeployment/validate/protocol", {
                protocol: control.value,
                isExternal: isExternal
            }).first().pipe(Object(debounceTime.a)(500), Object(map.a)(res => res.valid ? null : {
                [validProtocolValidationKey]: !0
            })) : Observable.a.of(null);
        }
        var fesm2015_select = __webpack_require__("d3UM"), fesm2015_core = __webpack_require__("FKr1"), icon = __webpack_require__("NFeN");
        const _c2 = [ "placeholder", $localize`Service` ];
        function PortMappingsComponent_mat_option_5_Template(rf, ctx) {
            if (1 & rf && (core["ɵɵelementStart"](0, "mat-option", 7), core["ɵɵtext"](1), core["ɵɵelementEnd"]()), 
            2 & rf) {
                const serviceType_r1396 = ctx.$implicit;
                core["ɵɵproperty"]("value", serviceType_r1396), core["ɵɵadvance"](1), core["ɵɵtextInterpolate1"](" ", serviceType_r1396.label, " ");
            }
        }
        const _c5 = [ "placeholder", $localize`Port` ], _c8 = [ "placeholder", $localize`Target port` ], _c11 = [ "placeholder", $localize`Protocol` ];
        var I18N_12, I18N_14, I18N_16, I18N_18, I18N_20, I18N_22, I18N_24, I18N_26, I18N_28, I18N_30;
        function PortMappingsComponent_div_8_mat_error_4_Template(rf, ctx) {
            1 & rf && (core["ɵɵelementStart"](0, "mat-error"), core["ɵɵi18n"](1, I18N_12), core["ɵɵelementEnd"]());
        }
        function PortMappingsComponent_div_8_mat_error_5_Template(rf, ctx) {
            1 & rf && (core["ɵɵelementStart"](0, "mat-error"), core["ɵɵi18n"](1, I18N_14), core["ɵɵelementEnd"]());
        }
        function PortMappingsComponent_div_8_mat_error_6_Template(rf, ctx) {
            1 & rf && (core["ɵɵelementStart"](0, "mat-error"), core["ɵɵi18n"](1, I18N_16), core["ɵɵelementEnd"]());
        }
        function PortMappingsComponent_div_8_mat_error_7_Template(rf, ctx) {
            1 & rf && (core["ɵɵelementStart"](0, "mat-error"), core["ɵɵi18n"](1, I18N_18), core["ɵɵelementEnd"]());
        }
        function PortMappingsComponent_div_8_mat_error_12_Template(rf, ctx) {
            1 & rf && (core["ɵɵelementStart"](0, "mat-error"), core["ɵɵi18n"](1, I18N_20), core["ɵɵelementEnd"]());
        }
        function PortMappingsComponent_div_8_mat_error_13_Template(rf, ctx) {
            1 & rf && (core["ɵɵelementStart"](0, "mat-error"), core["ɵɵi18n"](1, I18N_22), core["ɵɵelementEnd"]());
        }
        function PortMappingsComponent_div_8_mat_error_14_Template(rf, ctx) {
            1 & rf && (core["ɵɵelementStart"](0, "mat-error"), core["ɵɵi18n"](1, I18N_24), core["ɵɵelementEnd"]());
        }
        function PortMappingsComponent_div_8_mat_error_15_Template(rf, ctx) {
            1 & rf && (core["ɵɵelementStart"](0, "mat-error"), core["ɵɵi18n"](1, I18N_26), core["ɵɵelementEnd"]());
        }
        function PortMappingsComponent_div_8_mat_option_20_Template(rf, ctx) {
            if (1 & rf && (core["ɵɵelementStart"](0, "mat-option", 7), core["ɵɵtext"](1), core["ɵɵelementEnd"]()), 
            2 & rf) {
                const protocol_r1411 = ctx.$implicit;
                core["ɵɵproperty"]("value", protocol_r1411), core["ɵɵadvance"](1), core["ɵɵtextInterpolate"](protocol_r1411);
            }
        }
        function PortMappingsComponent_div_8_mat_error_22_Template(rf, ctx) {
            1 & rf && (core["ɵɵelementStart"](0, "mat-error"), core["ɵɵi18n"](1, I18N_28), core["ɵɵelementEnd"]());
        }
        function PortMappingsComponent_div_8_mat_error_23_Template(rf, ctx) {
            1 & rf && (core["ɵɵelementStart"](0, "mat-error"), core["ɵɵi18n"](1, I18N_30), core["ɵɵelementEnd"]());
        }
        function PortMappingsComponent_div_8_button_25_Template(rf, ctx) {
            if (1 & rf) {
                const _r1414 = core["ɵɵgetCurrentView"]();
                core["ɵɵelementStart"](0, "button", 19), core["ɵɵlistener"]("click", (function($event) {
                    core["ɵɵrestoreView"](_r1414);
                    const i_r1398 = core["ɵɵnextContext"]().index;
                    return core["ɵɵnextContext"]().remove(i_r1398);
                })), core["ɵɵelementStart"](1, "mat-icon"), core["ɵɵtext"](2, "delete"), core["ɵɵelementEnd"](), 
                core["ɵɵelementEnd"]();
            }
        }
        I18N_12 = $localize` Port must be an integer. `, I18N_14 = $localize` Port cannot be empty. `, 
        I18N_16 = $localize` Port must be greater than 0. `, I18N_18 = $localize` Port must be less than 65536. `, 
        I18N_20 = $localize` Target port must be an integer. `, I18N_22 = $localize` Target port cannot be empty. `, 
        I18N_24 = $localize` Target port must be greater than 0. `, I18N_26 = $localize` Target port must be less than 65536. `, 
        I18N_28 = $localize` Protocol is required. `, I18N_30 = $localize` Invalid protocol. `;
        const _c32 = function(a0) {
            return {
                "kd-deploy-form-progress-show": a0
            };
        };
        function PortMappingsComponent_div_8_Template(rf, ctx) {
            if (1 & rf) {
                const _r1416 = core["ɵɵgetCurrentView"]();
                core["ɵɵelementStart"](0, "div", 8), core["ɵɵelementStart"](1, "mat-form-field", 9), 
                core["ɵɵelementStart"](2, "input", 10), core["ɵɵi18nAttributes"](3, _c5), core["ɵɵlistener"]("change", (function($event) {
                    core["ɵɵrestoreView"](_r1416);
                    const i_r1398 = ctx.index;
                    return core["ɵɵnextContext"]().checkPortMapping(i_r1398);
                })), core["ɵɵelementEnd"](), core["ɵɵtemplate"](4, PortMappingsComponent_div_8_mat_error_4_Template, 2, 0, "mat-error", 11), 
                core["ɵɵtemplate"](5, PortMappingsComponent_div_8_mat_error_5_Template, 2, 0, "mat-error", 11), 
                core["ɵɵtemplate"](6, PortMappingsComponent_div_8_mat_error_6_Template, 2, 0, "mat-error", 11), 
                core["ɵɵtemplate"](7, PortMappingsComponent_div_8_mat_error_7_Template, 2, 0, "mat-error", 11), 
                core["ɵɵelementEnd"](), core["ɵɵelement"](8, "p", 12), core["ɵɵelementStart"](9, "mat-form-field", 9), 
                core["ɵɵelementStart"](10, "input", 13), core["ɵɵi18nAttributes"](11, _c8), core["ɵɵlistener"]("change", (function($event) {
                    core["ɵɵrestoreView"](_r1416);
                    const i_r1398 = ctx.index;
                    return core["ɵɵnextContext"]().checkPortMapping(i_r1398);
                })), core["ɵɵelementEnd"](), core["ɵɵtemplate"](12, PortMappingsComponent_div_8_mat_error_12_Template, 2, 0, "mat-error", 11), 
                core["ɵɵtemplate"](13, PortMappingsComponent_div_8_mat_error_13_Template, 2, 0, "mat-error", 11), 
                core["ɵɵtemplate"](14, PortMappingsComponent_div_8_mat_error_14_Template, 2, 0, "mat-error", 11), 
                core["ɵɵtemplate"](15, PortMappingsComponent_div_8_mat_error_15_Template, 2, 0, "mat-error", 11), 
                core["ɵɵelementEnd"](), core["ɵɵelement"](16, "p", 12), core["ɵɵelementStart"](17, "mat-form-field", 14), 
                core["ɵɵelementStart"](18, "mat-select", 15), core["ɵɵi18nAttributes"](19, _c11), 
                core["ɵɵtemplate"](20, PortMappingsComponent_div_8_mat_option_20_Template, 2, 2, "mat-option", 4), 
                core["ɵɵelementEnd"](), core["ɵɵelement"](21, "mat-progress-bar", 16), core["ɵɵtemplate"](22, PortMappingsComponent_div_8_mat_error_22_Template, 2, 0, "mat-error", 11), 
                core["ɵɵtemplate"](23, PortMappingsComponent_div_8_mat_error_23_Template, 2, 0, "mat-error", 11), 
                core["ɵɵelementEnd"](), core["ɵɵelementStart"](24, "div", 17), core["ɵɵtemplate"](25, PortMappingsComponent_div_8_button_25_Template, 3, 0, "button", 18), 
                core["ɵɵelementEnd"](), core["ɵɵelementEnd"]();
            }
            if (2 & rf) {
                const portMapping_r1397 = ctx.$implicit, i_r1398 = ctx.index, ctx_r1395 = core["ɵɵnextContext"]();
                core["ɵɵproperty"]("formGroupName", i_r1398), core["ɵɵadvance"](2), core["ɵɵproperty"]("required", ctx_r1395.isFirst(i_r1398)), 
                core["ɵɵadvance"](2), core["ɵɵproperty"]("ngIf", null == portMapping_r1397.get("port").errors ? null : portMapping_r1397.get("port").errors.kdValidInteger), 
                core["ɵɵadvance"](1), core["ɵɵproperty"]("ngIf", null == portMapping_r1397.get("port").errors ? null : portMapping_r1397.get("port").errors.required), 
                core["ɵɵadvance"](1), core["ɵɵproperty"]("ngIf", null == portMapping_r1397.get("port").errors ? null : portMapping_r1397.get("port").errors.min), 
                core["ɵɵadvance"](1), core["ɵɵproperty"]("ngIf", null == portMapping_r1397.get("port").errors ? null : portMapping_r1397.get("port").errors.max), 
                core["ɵɵadvance"](3), core["ɵɵproperty"]("required", ctx_r1395.isFirst(i_r1398)), 
                core["ɵɵadvance"](2), core["ɵɵproperty"]("ngIf", null == portMapping_r1397.get("targetPort").errors ? null : portMapping_r1397.get("targetPort").errors.kdValidInteger), 
                core["ɵɵadvance"](1), core["ɵɵproperty"]("ngIf", null == portMapping_r1397.get("targetPort").errors ? null : portMapping_r1397.get("targetPort").errors.required), 
                core["ɵɵadvance"](1), core["ɵɵproperty"]("ngIf", null == portMapping_r1397.get("targetPort").errors ? null : portMapping_r1397.get("targetPort").errors.min), 
                core["ɵɵadvance"](1), core["ɵɵproperty"]("ngIf", null == portMapping_r1397.get("targetPort").errors ? null : portMapping_r1397.get("targetPort").errors.max), 
                core["ɵɵadvance"](3), core["ɵɵproperty"]("isExternal", ctx_r1395.isExternal), core["ɵɵadvance"](2), 
                core["ɵɵproperty"]("ngForOf", ctx_r1395.protocols), core["ɵɵadvance"](1), core["ɵɵproperty"]("ngClass", core["ɵɵpureFunction1"](17, _c32, portMapping_r1397.get("protocol").pending)), 
                core["ɵɵadvance"](1), core["ɵɵproperty"]("ngIf", null == portMapping_r1397.get("protocol").errors ? null : portMapping_r1397.get("protocol").errors.required), 
                core["ɵɵadvance"](1), core["ɵɵproperty"]("ngIf", null == portMapping_r1397.get("protocol").errors ? null : portMapping_r1397.get("protocol").errors.validProtocol), 
                core["ɵɵadvance"](2), core["ɵɵproperty"]("ngIf", ctx_r1395.isRemovable(i_r1398));
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
        let component_PortMappingsComponent = (() => {
            class PortMappingsComponent {
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
            return PortMappingsComponent.ɵfac = function(t) {
                return new (t || PortMappingsComponent)(core["ɵɵdirectiveInject"](fesm2015_forms.FormBuilder), core["ɵɵdirectiveInject"](fesm2015_http.b));
            }, PortMappingsComponent.ɵcmp = core["ɵɵdefineComponent"]({
                type: PortMappingsComponent,
                selectors: [ [ "kd-port-mappings" ] ],
                inputs: {
                    protocols: "protocols",
                    isExternal: "isExternal"
                },
                outputs: {
                    changeExternal: "changeExternal"
                },
                features: [ core["ɵɵProvidersFeature"]([ {
                    provide: fesm2015_forms.NG_VALUE_ACCESSOR,
                    useExisting: Object(core.forwardRef)(() => PortMappingsComponent),
                    multi: !0
                }, {
                    provide: fesm2015_forms.NG_ASYNC_VALIDATORS,
                    useExisting: Object(core.forwardRef)(() => PortMappingsComponent),
                    multi: !0
                } ]) ],
                decls: 9,
                vars: 3,
                consts: [ [ "fxLayout", "column", 3, "formGroup" ], [ "fxLayout", "row" ], [ 1, "mat-block", "kd-deploy-input-row", 2, "width", "100%" ], [ "namespace", "serviceType", "formControlName", "serviceType", "required", "", 6, "placeholder" ], [ 3, "value", 4, "ngFor", "ngForOf" ], [ "formArrayName", "portMappings" ], [ "fxLayout", "row", 3, "formGroupName", 4, "ngFor", "ngForOf" ], [ 3, "value" ], [ "fxLayout", "row", 3, "formGroupName" ], [ "md-no-float", "", "fxFlex", "30", 1, "kd-deploy-input-row", "kd-port-form-field" ], [ "matInput", "", "type", "number", "name", "port", "formControlName", "port", 3, "required", "change", 6, "placeholder" ], [ 4, "ngIf" ], [ "fxFlex", "5" ], [ "matInput", "", "type", "number", "name", "targetPort", "formControlName", "targetPort", "min", "1", "max", "65535", 3, "required", "change", 6, "placeholder" ], [ "md-no-float", "", "fxFlex", "20", 1, "kd-deploy-input-row", "kd-port-form-field" ], [ "name", "protocol", "formControlName", "protocol", "kdValidProtocol", "", "required", "", 3, "isExternal", 6, "placeholder" ], [ "mode", "indeterminate", 1, "kd-deploy-form-progress", 3, "ngClass" ], [ "fxFlex", "10" ], [ "mat-icon-button", "", 3, "click", 4, "ngIf" ], [ "mat-icon-button", "", 3, "click" ] ],
                template: function(rf, ctx) {
                    1 & rf && (core["ɵɵelementStart"](0, "div", 0), core["ɵɵelementStart"](1, "div", 1), 
                    core["ɵɵelementStart"](2, "mat-form-field", 2), core["ɵɵelementStart"](3, "mat-select", 3), 
                    core["ɵɵi18nAttributes"](4, _c2), core["ɵɵtemplate"](5, PortMappingsComponent_mat_option_5_Template, 2, 2, "mat-option", 4), 
                    core["ɵɵelementEnd"](), core["ɵɵelementEnd"](), core["ɵɵelementEnd"](), core["ɵɵelementContainerStart"](6), 
                    core["ɵɵelementContainerStart"](7, 5), core["ɵɵtemplate"](8, PortMappingsComponent_div_8_Template, 26, 19, "div", 6), 
                    core["ɵɵelementContainerEnd"](), core["ɵɵelementContainerEnd"](), core["ɵɵelementEnd"]()), 
                    2 & rf && (core["ɵɵproperty"]("formGroup", ctx.portMappingForm), core["ɵɵadvance"](5), 
                    core["ɵɵproperty"]("ngForOf", ctx.serviceTypes), core["ɵɵadvance"](3), core["ɵɵproperty"]("ngForOf", ctx.portMappings.controls));
                },
                directives: [ flex.d, fesm2015_forms.NgControlStatusGroup, fesm2015_forms.FormGroupDirective, form_field.b, fesm2015_select.a, fesm2015_forms.NgControlStatus, fesm2015_forms.FormControlName, fesm2015_forms.RequiredValidator, common.NgForOf, fesm2015_forms.FormArrayName, fesm2015_core.k, fesm2015_forms.FormGroupName, flex.b, input.a, fesm2015_forms.NumberValueAccessor, fesm2015_forms.DefaultValueAccessor, common.NgIf, validprotocol_validator_ProtocolValidator, progress_bar.a, common.NgClass, extended.a, form_field.a, fesm2015_button.b, icon.a ],
                styles: [ ".kd-port-form-field[_ngcontent-%COMP%]{margin:0 0 18px}" ]
            }), PortMappingsComponent;
        })();
        const component_c2 = [ "placeholder", $localize`key` ], component_c5 = [ "placeholder", $localize`value` ];
        var deploylabel_component_I18N_6, component_I18N_8, I18N_10, component_I18N_12, component_I18N_14, component_I18N_16, component_I18N_18;
        function DeployLabelComponent_div_2_mat_error_4_Template(rf, ctx) {
            if (1 & rf && (core["ɵɵelementStart"](0, "mat-error"), core["ɵɵi18n"](1, deploylabel_component_I18N_6), 
            core["ɵɵelementEnd"]()), 2 & rf) {
                const label_r1367 = core["ɵɵnextContext"]().$implicit;
                core["ɵɵi18nExp"](label_r1367.get("key").value), core["ɵɵi18nApply"](1);
            }
        }
        function DeployLabelComponent_div_2_mat_error_5_Template(rf, ctx) {
            1 & rf && (core["ɵɵelementStart"](0, "mat-error"), core["ɵɵi18n"](1, component_I18N_8), 
            core["ɵɵelementEnd"]());
        }
        function DeployLabelComponent_div_2_mat_error_6_Template(rf, ctx) {
            1 & rf && (core["ɵɵelementStart"](0, "mat-error"), core["ɵɵi18n"](1, I18N_10), core["ɵɵelementEnd"]());
        }
        function DeployLabelComponent_div_2_mat_error_7_Template(rf, ctx) {
            1 & rf && (core["ɵɵelementStart"](0, "mat-error"), core["ɵɵi18n"](1, component_I18N_12), 
            core["ɵɵelementEnd"]());
        }
        function DeployLabelComponent_div_2_mat_error_8_Template(rf, ctx) {
            1 & rf && (core["ɵɵelementStart"](0, "mat-error"), core["ɵɵi18n"](1, component_I18N_14), 
            core["ɵɵelementEnd"]());
        }
        function DeployLabelComponent_div_2_mat_error_15_Template(rf, ctx) {
            1 & rf && (core["ɵɵelementStart"](0, "mat-error"), core["ɵɵi18n"](1, component_I18N_16), 
            core["ɵɵelementEnd"]());
        }
        function DeployLabelComponent_div_2_mat_error_16_Template(rf, ctx) {
            1 & rf && (core["ɵɵelementStart"](0, "mat-error"), core["ɵɵi18n"](1, component_I18N_18), 
            core["ɵɵelementEnd"]());
        }
        function DeployLabelComponent_div_2_button_19_Template(rf, ctx) {
            if (1 & rf) {
                const _r1380 = core["ɵɵgetCurrentView"]();
                core["ɵɵelementStart"](0, "button", 14), core["ɵɵlistener"]("click", (function($event) {
                    core["ɵɵrestoreView"](_r1380);
                    const i_r1368 = core["ɵɵnextContext"]().index;
                    return core["ɵɵnextContext"]().deleteLabel(i_r1368);
                })), core["ɵɵelementStart"](1, "mat-icon"), core["ɵɵtext"](2, "delete"), core["ɵɵelementEnd"](), 
                core["ɵɵelementEnd"]();
            }
        }
        function DeployLabelComponent_div_2_Template(rf, ctx) {
            if (1 & rf) {
                const _r1382 = core["ɵɵgetCurrentView"]();
                core["ɵɵelementStart"](0, "div", 3), core["ɵɵelementStart"](1, "mat-form-field", 4), 
                core["ɵɵelementStart"](2, "input", 5), core["ɵɵi18nAttributes"](3, component_c2), 
                core["ɵɵlistener"]("keyup", (function($event) {
                    core["ɵɵrestoreView"](_r1382);
                    const i_r1368 = ctx.index;
                    return core["ɵɵnextContext"]().check(i_r1368);
                })), core["ɵɵelementEnd"](), core["ɵɵtemplate"](4, DeployLabelComponent_div_2_mat_error_4_Template, 2, 1, "mat-error", 6), 
                core["ɵɵtemplate"](5, DeployLabelComponent_div_2_mat_error_5_Template, 2, 0, "mat-error", 6), 
                core["ɵɵtemplate"](6, DeployLabelComponent_div_2_mat_error_6_Template, 2, 0, "mat-error", 6), 
                core["ɵɵtemplate"](7, DeployLabelComponent_div_2_mat_error_7_Template, 2, 0, "mat-error", 6), 
                core["ɵɵtemplate"](8, DeployLabelComponent_div_2_mat_error_8_Template, 2, 0, "mat-error", 6), 
                core["ɵɵelementEnd"](), core["ɵɵelement"](9, "p", 7), core["ɵɵelementStart"](10, "mat-form-field", 8), 
                core["ɵɵelementStart"](11, "input", 9), core["ɵɵi18nAttributes"](12, component_c5), 
                core["ɵɵlistener"]("keyup", (function($event) {
                    core["ɵɵrestoreView"](_r1382);
                    const i_r1368 = ctx.index;
                    return core["ɵɵnextContext"]().check(i_r1368);
                })), core["ɵɵelementEnd"](), core["ɵɵelementStart"](13, "mat-hint", 10), core["ɵɵtext"](14), 
                core["ɵɵelementEnd"](), core["ɵɵtemplate"](15, DeployLabelComponent_div_2_mat_error_15_Template, 2, 0, "mat-error", 6), 
                core["ɵɵtemplate"](16, DeployLabelComponent_div_2_mat_error_16_Template, 2, 0, "mat-error", 6), 
                core["ɵɵelementEnd"](), core["ɵɵelement"](17, "input", 11), core["ɵɵelementStart"](18, "div", 12), 
                core["ɵɵtemplate"](19, DeployLabelComponent_div_2_button_19_Template, 3, 0, "button", 13), 
                core["ɵɵelementEnd"](), core["ɵɵelementEnd"]();
            }
            if (2 & rf) {
                const label_r1367 = ctx.$implicit, i_r1368 = ctx.index, ctx_r1366 = core["ɵɵnextContext"]();
                core["ɵɵproperty"]("formGroupName", i_r1368), core["ɵɵadvance"](2), core["ɵɵproperty"]("readonly", !label_r1367.get("editable").value), 
                core["ɵɵadvance"](2), core["ɵɵproperty"]("ngIf", null == label_r1367.get("key").errors ? null : label_r1367.get("key").errors.unique), 
                core["ɵɵadvance"](1), core["ɵɵproperty"]("ngIf", null == label_r1367.get("key").errors ? null : label_r1367.get("key").errors.kdValidLabelKeyPrefixPattern), 
                core["ɵɵadvance"](1), core["ɵɵproperty"]("ngIf", null == label_r1367.get("key").errors ? null : label_r1367.get("key").errors.kdValidLabelKeyNamePattern), 
                core["ɵɵadvance"](1), core["ɵɵproperty"]("ngIf", null == label_r1367.get("key").errors ? null : label_r1367.get("key").errors.kdValidLabelKeyPrefixLength), 
                core["ɵɵadvance"](1), core["ɵɵproperty"]("ngIf", null == label_r1367.get("key").errors ? null : label_r1367.get("key").errors.kdValidLabelKeyNameLength), 
                core["ɵɵadvance"](3), core["ɵɵproperty"]("readonly", !label_r1367.get("editable").value), 
                core["ɵɵadvance"](3), core["ɵɵtextInterpolate1"]("", null == label_r1367.get("value").value ? null : label_r1367.get("value").value.length, " / 253"), 
                core["ɵɵadvance"](1), core["ɵɵproperty"]("ngIf", null == label_r1367.get("value").errors ? null : label_r1367.get("value").errors.kdValidLabelValuePattern), 
                core["ɵɵadvance"](1), core["ɵɵproperty"]("ngIf", null == label_r1367.get("value").errors ? null : label_r1367.get("value").errors.maxlength), 
                core["ɵɵadvance"](3), core["ɵɵproperty"]("ngIf", ctx_r1366.isRemovable(i_r1368));
            }
        }
        deploylabel_component_I18N_6 = $localize` ${"�0�"}:INTERPOLATION: is not unique `, 
        component_I18N_8 = $localize` Prefix is not a valid DNS subdomain prefix (eg. my-domain.com). `, 
        I18N_10 = $localize` Label key name must be alphanumeric separated by '-', '_' or '.', optionally prefixed by a DNS subdomain and '/'. `, 
        component_I18N_12 = $localize` Prefix should not exceed 253 characters. `, component_I18N_14 = $localize` Label Key name should not exceed 63 characters. `, 
        component_I18N_16 = $localize` Label value must be alphanumeric separated by '.' , '-' or '_'. `, 
        component_I18N_18 = $localize` Label Value must not exceed 253 characters. `;
        let component_DeployLabelComponent = (() => {
            class DeployLabelComponent {
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
            return DeployLabelComponent.ɵfac = function(t) {
                return new (t || DeployLabelComponent)(core["ɵɵdirectiveInject"](fesm2015_forms.FormBuilder));
            }, DeployLabelComponent.ɵcmp = core["ɵɵdefineComponent"]({
                type: DeployLabelComponent,
                selectors: [ [ "kd-deploy-label" ] ],
                inputs: {
                    labelArr: "labelArr"
                },
                features: [ core["ɵɵProvidersFeature"]([ {
                    provide: fesm2015_forms.NG_VALUE_ACCESSOR,
                    useExisting: Object(core.forwardRef)(() => DeployLabelComponent),
                    multi: !0
                }, {
                    provide: fesm2015_forms.NG_VALIDATORS,
                    useExisting: Object(core.forwardRef)(() => DeployLabelComponent),
                    multi: !0
                } ]) ],
                decls: 3,
                vars: 2,
                consts: [ [ 3, "formGroup" ], [ "formArrayName", "labels" ], [ 3, "formGroupName", 4, "ngFor", "ngForOf" ], [ 3, "formGroupName" ], [ "md-no-float", "", "fxFlex", "45", 1, "kd-deploy-input-row" ], [ "matInput", "", "name", "key", "formControlName", "key", 3, "readonly", "keyup", 6, "placeholder" ], [ 4, "ngIf" ], [ "fxFlex", "5" ], [ "md-no-float", "", "fxFlex", "40", 1, "kd-deploy-input-row" ], [ "matInput", "", "name", "value", "formControlName", "value", 3, "readonly", "keyup", 6, "placeholder" ], [ "align", "end" ], [ "type", "hidden", "formControlName", "editable" ], [ "fxFlex", "10" ], [ "mat-icon-button", "", 3, "click", 4, "ngIf" ], [ "mat-icon-button", "", 3, "click" ] ],
                template: function(rf, ctx) {
                    1 & rf && (core["ɵɵelementContainerStart"](0, 0), core["ɵɵelementStart"](1, "div", 1), 
                    core["ɵɵtemplate"](2, DeployLabelComponent_div_2_Template, 20, 12, "div", 2), core["ɵɵelementEnd"](), 
                    core["ɵɵelementContainerEnd"]()), 2 & rf && (core["ɵɵproperty"]("formGroup", ctx.labelForm), 
                    core["ɵɵadvance"](2), core["ɵɵproperty"]("ngForOf", ctx.labels.controls));
                },
                directives: [ fesm2015_forms.NgControlStatusGroup, fesm2015_forms.FormGroupDirective, fesm2015_forms.FormArrayName, common.NgForOf, fesm2015_forms.FormGroupName, form_field.b, flex.b, input.a, fesm2015_forms.DefaultValueAccessor, fesm2015_forms.NgControlStatus, fesm2015_forms.FormControlName, common.NgIf, form_field.e, form_field.a, fesm2015_button.b, icon.a ],
                encapsulation: 2
            }), DeployLabelComponent;
        })();
        var environmentvariables_component_I18N_0, fesm2015_checkbox = __webpack_require__("bSwM");
        environmentvariables_component_I18N_0 = $localize`Environment variables`;
        const component_c4 = [ "placeholder", $localize`Name` ], _c7 = [ "placeholder", $localize`Value` ];
        var environmentvariables_component_I18N_8;
        function EnvironmentVariablesComponent_div_5_mat_error_4_Template(rf, ctx) {
            1 & rf && (core["ɵɵelementStart"](0, "mat-error"), core["ɵɵi18n"](1, environmentvariables_component_I18N_8), 
            core["ɵɵelementEnd"]());
        }
        function EnvironmentVariablesComponent_div_5_button_10_Template(rf, ctx) {
            if (1 & rf) {
                const _r1391 = core["ɵɵgetCurrentView"]();
                core["ɵɵelementStart"](0, "button", 13), core["ɵɵlistener"]("click", (function($event) {
                    core["ɵɵrestoreView"](_r1391);
                    const i_r1386 = core["ɵɵnextContext"]().index;
                    return core["ɵɵnextContext"]().remove(i_r1386);
                })), core["ɵɵelementStart"](1, "mat-icon"), core["ɵɵtext"](2, "delete"), core["ɵɵelementEnd"](), 
                core["ɵɵelementEnd"]();
            }
        }
        function EnvironmentVariablesComponent_div_5_Template(rf, ctx) {
            if (1 & rf) {
                const _r1393 = core["ɵɵgetCurrentView"]();
                core["ɵɵelementStart"](0, "div", 5), core["ɵɵelementStart"](1, "mat-form-field", 6), 
                core["ɵɵelementStart"](2, "input", 7), core["ɵɵi18nAttributes"](3, component_c4), 
                core["ɵɵlistener"]("change", (function($event) {
                    core["ɵɵrestoreView"](_r1393);
                    const i_r1386 = ctx.index;
                    return core["ɵɵnextContext"]().addVariableIfNeeed(i_r1386);
                })), core["ɵɵelementEnd"](), core["ɵɵtemplate"](4, EnvironmentVariablesComponent_div_5_mat_error_4_Template, 2, 0, "mat-error", 8), 
                core["ɵɵelementEnd"](), core["ɵɵelement"](5, "div", 9), core["ɵɵelementStart"](6, "mat-form-field", 6), 
                core["ɵɵelementStart"](7, "input", 10), core["ɵɵi18nAttributes"](8, _c7), core["ɵɵelementEnd"](), 
                core["ɵɵelementEnd"](), core["ɵɵelementStart"](9, "div", 11), core["ɵɵtemplate"](10, EnvironmentVariablesComponent_div_5_button_10_Template, 3, 0, "button", 12), 
                core["ɵɵelementEnd"](), core["ɵɵelementEnd"]();
            }
            if (2 & rf) {
                const variable_r1385 = ctx.$implicit, i_r1386 = ctx.index, ctx_r1384 = core["ɵɵnextContext"]();
                core["ɵɵproperty"]("formGroupName", i_r1386), core["ɵɵadvance"](4), core["ɵɵproperty"]("ngIf", null == variable_r1385.get("name").errors ? null : variable_r1385.get("name").errors.pattern), 
                core["ɵɵadvance"](6), core["ɵɵproperty"]("ngIf", ctx_r1384.isRemovable(i_r1386));
            }
        }
        environmentvariables_component_I18N_8 = $localize` Variable name must be a valid C identifier. `;
        let component_EnvironmentVariablesComponent = (() => {
            class EnvironmentVariablesComponent {
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
            return EnvironmentVariablesComponent.ɵfac = function(t) {
                return new (t || EnvironmentVariablesComponent)(core["ɵɵdirectiveInject"](fesm2015_forms.FormBuilder));
            }, EnvironmentVariablesComponent.ɵcmp = core["ɵɵdefineComponent"]({
                type: EnvironmentVariablesComponent,
                selectors: [ [ "kd-environment-variables" ] ],
                features: [ core["ɵɵProvidersFeature"]([ {
                    provide: fesm2015_forms.NG_VALUE_ACCESSOR,
                    useExisting: Object(core.forwardRef)(() => EnvironmentVariablesComponent),
                    multi: !0
                }, {
                    provide: fesm2015_forms.NG_VALIDATORS,
                    useExisting: Object(core.forwardRef)(() => EnvironmentVariablesComponent),
                    multi: !0
                } ]) ],
                decls: 6,
                vars: 2,
                consts: [ [ "fxLayout", "column" ], [ 1, "kd-margin-bottom" ], [ 3, "formGroup" ], [ "formArrayName", "variables" ], [ 3, "formGroupName", 4, "ngFor", "ngForOf" ], [ 3, "formGroupName" ], [ "fxFlex", "auto" ], [ "matInput", "", "name", "name", "formControlName", "name", 3, "change", 6, "placeholder" ], [ 4, "ngIf" ], [ "fxFlex", "5" ], [ "matInput", "", "name", "value", "formControlName", "value", 6, "placeholder" ], [ "fxFlex", "10" ], [ "mat-icon-button", "", 3, "click", 4, "ngIf" ], [ "mat-icon-button", "", 3, "click" ] ],
                template: function(rf, ctx) {
                    1 & rf && (core["ɵɵelementStart"](0, "div", 0), core["ɵɵelementStart"](1, "div", 1), 
                    core["ɵɵi18n"](2, environmentvariables_component_I18N_0), core["ɵɵelementEnd"](), 
                    core["ɵɵelementContainerStart"](3, 2), core["ɵɵelementContainerStart"](4, 3), core["ɵɵtemplate"](5, EnvironmentVariablesComponent_div_5_Template, 11, 3, "div", 4), 
                    core["ɵɵelementContainerEnd"](), core["ɵɵelementContainerEnd"](), core["ɵɵelementEnd"]()), 
                    2 & rf && (core["ɵɵadvance"](3), core["ɵɵproperty"]("formGroup", ctx.form), core["ɵɵadvance"](2), 
                    core["ɵɵproperty"]("ngForOf", ctx.variables.controls));
                },
                directives: [ flex.d, fesm2015_forms.NgControlStatusGroup, fesm2015_forms.FormGroupDirective, fesm2015_forms.FormArrayName, common.NgForOf, fesm2015_forms.FormGroupName, form_field.b, flex.b, input.a, fesm2015_forms.DefaultValueAccessor, fesm2015_forms.NgControlStatus, fesm2015_forms.FormControlName, common.NgIf, form_field.a, fesm2015_button.b, icon.a ],
                encapsulation: 2
            }), EnvironmentVariablesComponent;
        })();
        const form_component_c2 = [ "placeholder", $localize`App name` ];
        var form_component_I18N_3, form_component_I18N_5;
        form_component_I18N_3 = $localize`An 'app' label with this value will be added to the Deployment and Service that get deployed.`, 
        form_component_I18N_5 = $localize` Learn more ${"�#16�"}:START_ITALIC_TEXT:open_in_new${"�/#16�"}:CLOSE_ITALIC_TEXT:`;
        const _c9 = [ "placeholder", $localize`Container image` ];
        var component_I18N_10, form_component_I18N_12;
        component_I18N_10 = $localize`Enter the URL of a public image on any registry, or a private image hosted on Docker Hub or Google Container Registry.`, 
        form_component_I18N_12 = $localize` Learn more ${"�#28�"}:START_ITALIC_TEXT:open_in_new${"�/#28�"}:CLOSE_ITALIC_TEXT:`;
        const _c16 = [ "placeholder", $localize`Number of pods` ];
        var component_I18N_17, component_I18N_19, component_I18N_21, component_I18N_23;
        component_I18N_17 = $localize`A Deployment will be created to maintain the desired number of pods across your cluster.`, 
        component_I18N_19 = $localize` Learn more ${"�#41�"}:START_ITALIC_TEXT:open_in_new${"�/#41�"}:CLOSE_ITALIC_TEXT:`, 
        component_I18N_21 = $localize`Optionally, an internal or external Service can be defined to map an incoming Port to a target Port seen by the container.`, 
        component_I18N_23 = $localize` Learn more ${"�#50�"}:START_ITALIC_TEXT:open_in_new${"�/#50�"}:CLOSE_ITALIC_TEXT:`;
        const _c27 = [ "placeholder", $localize`Description` ];
        var component_I18N_28, component_I18N_30, I18N_32, I18N_34;
        component_I18N_28 = $localize` The description will be added as an annotation to the Deployment and displayed in the application's details. `, 
        component_I18N_30 = $localize`Labels`, I18N_32 = $localize`The specified labels will be applied to the created Deployment, Service (if any) and Pods. Common labels include release, environment, tier, partition and track.`, 
        I18N_34 = $localize` Learn more ${"�#68�"}:START_ITALIC_TEXT:open_in_new${"�/#68�"}:CLOSE_ITALIC_TEXT:`;
        const _c38 = [ "placeholder", $localize`Namespace` ];
        var I18N_39, I18N_41, I18N_43;
        I18N_39 = $localize` Create a new namespace... `, I18N_41 = $localize`Namespaces let you partition resources into logically named groups.`, 
        I18N_43 = $localize` Learn more ${"�#81�"}:START_ITALIC_TEXT:open_in_new${"�/#81�"}:CLOSE_ITALIC_TEXT:`;
        const _c47 = [ "placeholder", $localize`Image Pull Secret` ];
        var I18N_48, I18N_50, I18N_52;
        I18N_48 = $localize` Create a new secret... `, I18N_50 = $localize`The specified image could require a pull secret credential if it is private. You may choose an existing secret or create a new one.`, 
        I18N_52 = $localize` Learn more ${"�#94�"}:START_ITALIC_TEXT:open_in_new${"�/#94�"}:CLOSE_ITALIC_TEXT:`;
        const _c56 = [ "placeholder", $localize`CPU requirement (cores)` ], _c59 = [ "placeholder", $localize`Memory requirement (MiB)` ];
        var I18N_60, I18N_62;
        I18N_60 = $localize`You can specify minimum CPU and memory requirements for the container.`, 
        I18N_62 = $localize` Learn more ${"�#113�"}:START_ITALIC_TEXT:open_in_new${"�/#113�"}:CLOSE_ITALIC_TEXT:`;
        const _c66 = [ "placeholder", $localize`Run command` ], _c69 = [ "placeholder", $localize`Run command arguments` ];
        var I18N_70, I18N_72, I18N_74, I18N_76, I18N_78, I18N_80, I18N_82, I18N_84, I18N_86, I18N_89, I18N_88, I18N_92, I18N_94, I18N_96, I18N_98, I18N_100, I18N_102, I18N_104, I18N_106, I18N_108, I18N_110, I18N_112, I18N_114;
        function CreateFromFormComponent_mat_error_8_Template(rf, ctx) {
            1 & rf && (core["ɵɵelementStart"](0, "mat-error"), core["ɵɵi18n"](1, I18N_92), core["ɵɵelementEnd"]());
        }
        function CreateFromFormComponent_mat_error_9_Template(rf, ctx) {
            1 & rf && (core["ɵɵelementStart"](0, "mat-error"), core["ɵɵi18n"](1, I18N_94), core["ɵɵelementEnd"]());
        }
        function CreateFromFormComponent_mat_error_10_Template(rf, ctx) {
            1 & rf && (core["ɵɵelementStart"](0, "mat-error"), core["ɵɵi18n"](1, I18N_96), core["ɵɵelementEnd"]());
        }
        function CreateFromFormComponent_mat_error_21_Template(rf, ctx) {
            1 & rf && (core["ɵɵelementStart"](0, "mat-error"), core["ɵɵi18n"](1, I18N_98), core["ɵɵelementEnd"]());
        }
        function CreateFromFormComponent_mat_error_22_Template(rf, ctx) {
            if (1 & rf && (core["ɵɵelementStart"](0, "mat-error"), core["ɵɵi18n"](1, I18N_100), 
            core["ɵɵelementEnd"]()), 2 & rf) {
                const ctx_r1354 = core["ɵɵnextContext"]();
                core["ɵɵi18nExp"](null == ctx_r1354.containerImage.errors ? null : ctx_r1354.containerImage.errors.validImageReference), 
                core["ɵɵi18nApply"](1);
            }
        }
        function CreateFromFormComponent_mat_error_33_Template(rf, ctx) {
            1 & rf && (core["ɵɵelementStart"](0, "mat-error"), core["ɵɵi18n"](1, I18N_102), 
            core["ɵɵelementEnd"]());
        }
        function CreateFromFormComponent_mat_error_34_Template(rf, ctx) {
            1 & rf && (core["ɵɵelementStart"](0, "mat-error"), core["ɵɵi18n"](1, I18N_104), 
            core["ɵɵelementEnd"]());
        }
        function CreateFromFormComponent_mat_error_35_Template(rf, ctx) {
            1 & rf && (core["ɵɵelementStart"](0, "mat-error"), core["ɵɵi18n"](1, I18N_106), 
            core["ɵɵelementEnd"]());
        }
        function CreateFromFormComponent_mat_option_73_Template(rf, ctx) {
            if (1 & rf && (core["ɵɵelementStart"](0, "mat-option", 41), core["ɵɵtext"](1), core["ɵɵelementEnd"]()), 
            2 & rf) {
                const namespace_r1364 = ctx.$implicit;
                core["ɵɵproperty"]("value", namespace_r1364), core["ɵɵadvance"](1), core["ɵɵtextInterpolate1"](" ", namespace_r1364, " ");
            }
        }
        function CreateFromFormComponent_mat_option_86_Template(rf, ctx) {
            if (1 & rf && (core["ɵɵelementStart"](0, "mat-option", 41), core["ɵɵtext"](1), core["ɵɵelementEnd"]()), 
            2 & rf) {
                const secret_r1365 = ctx.$implicit;
                core["ɵɵproperty"]("value", secret_r1365), core["ɵɵadvance"](1), core["ɵɵtextInterpolate1"](" ", secret_r1365, " ");
            }
        }
        function CreateFromFormComponent_mat_error_100_Template(rf, ctx) {
            1 & rf && (core["ɵɵelementStart"](0, "mat-error"), core["ɵɵi18n"](1, I18N_108), 
            core["ɵɵelementEnd"]());
        }
        function CreateFromFormComponent_mat_error_101_Template(rf, ctx) {
            1 & rf && (core["ɵɵelementStart"](0, "mat-error"), core["ɵɵi18n"](1, I18N_110), 
            core["ɵɵelementEnd"]());
        }
        function CreateFromFormComponent_mat_error_106_Template(rf, ctx) {
            1 & rf && (core["ɵɵelementStart"](0, "mat-error"), core["ɵɵi18n"](1, I18N_112), 
            core["ɵɵelementEnd"]());
        }
        function CreateFromFormComponent_mat_error_107_Template(rf, ctx) {
            1 & rf && (core["ɵɵelementStart"](0, "mat-error"), core["ɵɵi18n"](1, I18N_114), 
            core["ɵɵelementEnd"]());
        }
        I18N_70 = $localize`By default, your containers run the selected image's default entrypoint command. You can use the command options to override the default.`, 
        I18N_72 = $localize` Learn more ${"�#127�"}:START_ITALIC_TEXT:open_in_new${"�/#127�"}:CLOSE_ITALIC_TEXT:`, 
        I18N_74 = $localize`Run as privileged`, I18N_76 = $localize`Processes in privileged containers are equivalent to processes running as root on the host.`, 
        I18N_78 = $localize` Learn more ${"�#137�"}:START_ITALIC_TEXT:open_in_new${"�/#137�"}:CLOSE_ITALIC_TEXT:`, 
        I18N_80 = $localize`Environment variables available for use in the container. Values can reference other variables using $(VAR_NAME) syntax.`, 
        I18N_82 = $localize` Learn more ${"�#145�"}:START_ITALIC_TEXT:open_in_new${"�/#145�"}:CLOSE_ITALIC_TEXT:`, 
        I18N_84 = $localize` Deploy
`, I18N_86 = $localize` Cancel
`, I18N_89 = $localize`{VAR_SELECT, select, 1 {Hide advanced options} other {Show advanced options}}`, 
        I18N_89 = core["ɵɵi18nPostprocess"](I18N_89, {
            VAR_SELECT: "�0�"
        }), I18N_88 = $localize` ${I18N_89}:ICU:
`, I18N_92 = $localize` Deployment or service with this name already exists within namespace. `, 
        I18N_94 = $localize` Application name is required. `, I18N_96 = $localize` Application name must start with a lowercase letter and contain only lowercase letters, numbers, and '-' between words. `, 
        I18N_98 = $localize` Container image is required `, I18N_100 = $localize` Container image is invalid: ${"�0�"}:INTERPOLATION: `, 
        I18N_102 = $localize` Number of pods is required `, I18N_104 = $localize` Number of pods must be a positive integer `, 
        I18N_106 = $localize` Setting high number of pods may cause performance issues of the cluster and Dashboard UI. `, 
        I18N_108 = $localize` CPU requirement must be given as a positive number. `, I18N_110 = $localize` CPU requirement must be given as a valid number. `, 
        I18N_112 = $localize` Memory requirement must be given as a positive number. `, 
        I18N_114 = $localize` Memory requirement must be given as a valid number. `;
        const _c116 = function(a0) {
            return {
                "kd-deploy-form-progress-show": a0
            };
        }, APP_LABEL_KEY = "k8s-app";
        let component_CreateFromFormComponent = (() => {
            class CreateFromFormComponent {
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
            return CreateFromFormComponent.ɵfac = function(t) {
                return new (t || CreateFromFormComponent)(core["ɵɵdirectiveInject"](global_namespace.a), core["ɵɵdirectiveInject"](service_CreateService), core["ɵɵdirectiveInject"](global_history.a), core["ɵɵdirectiveInject"](fesm2015_http.b), core["ɵɵdirectiveInject"](router.ActivatedRoute), core["ɵɵdirectiveInject"](fesm2015_forms.FormBuilder), core["ɵɵdirectiveInject"](fesm2015_dialog.b));
            }, CreateFromFormComponent.ɵcmp = core["ɵɵdefineComponent"]({
                type: CreateFromFormComponent,
                selectors: [ [ "kd-create-from-form" ] ],
                decls: 152,
                vars: 29,
                consts: [ [ "novalidate", "", 3, "formGroup" ], [ "matInput", "", "formControlName", "name", "kdUniqueName", "", "required", "", 3, "maxlength", "namespace", 6, "placeholder" ], [ "mode", "indeterminate", 1, "kd-deploy-form-progress", 3, "ngClass" ], [ "align", "end" ], [ 4, "ngIf" ], [ "href", "http://kubernetes.io/docs/user-guide/labels/", "target", "_blank", "tabindex", "-1" ], [ 1, "material-icons" ], [ "matInput", "", "formControlName", "containerImage", "kdValidImageReference", "", "required", "", 6, "placeholder" ], [ "href", "http://kubernetes.io/docs/user-guide/images/", "target", "_blank", "tabindex", "-1" ], [ "matInput", "", "type", "number", "formControlName", "replicas", "min", "1", "kdWarnThreshold", "100", "required", "", 6, "placeholder" ], [ "href", "https://kubernetes.io/docs/concepts/workloads/controllers/deployment/", "target", "_blank", "tabindex", "-1" ], [ "fxLayout", "column" ], [ "formControlName", "portMappings", 3, "protocols", "isExternal", "changeExternal" ], [ "href", "http://kubernetes.io/docs/user-guide/services/", "target", "_blank", "tabindex", "-1" ], [ 3, "hidden" ], [ "formControlName", "description", "matInput", "", 6, "placeholder" ], [ 1, "kd-margin-bottom" ], [ "formControlName", "labels", 3, "labelArr" ], [ "formControlName", "namespace", "required", "", 3, "click", 6, "placeholder" ], [ 3, "value", 4, "ngFor", "ngForOf" ], [ 3, "click" ], [ "href", "http://kubernetes.io/docs/admin/namespaces/", "target", "_blank", "tabindex", "-1" ], [ "formControlName", "imagePullSecret", 3, "click", 6, "placeholder" ], [ "href", "http://kubernetes.io/docs/user-guide/secrets/", "target", "_blank", "tabindex", "-1" ], [ "fxLayout", "row" ], [ "fxFlex", "auto" ], [ "matInput", "", "type", "number", "name", "cpuRequirement", "min", "0", "formControlName", "cpuRequirement", 6, "placeholder" ], [ "fxFlex", "5" ], [ "matInput", "", "type", "number", "name", "memoryRequirement", "min", "0", "formControlName", "memoryRequirement", 6, "placeholder" ], [ "href", "http://kubernetes.io/docs/admin/limitrange/", "target", "_blank", "tabindex", "-1" ], [ 1, "kd-block" ], [ "matInput", "", "formControlName", "containerCommand", 6, "placeholder" ], [ "matInput", "", "formControlName", "containerCommandArgs", 6, "placeholder" ], [ "href", "http://kubernetes.io/docs/user-guide/containers/", "target", "_blank", "tabindex", "-1" ], [ "color", "primary", "formControlName", "runAsPrivileged" ], [ "href", "http://kubernetes.io/docs/user-guide/pods/#privileged-mode-for-pod-containers", "target", "_blank", "tabindex", "-1" ], [ "formControlName", "variables" ], [ "href", "https://kubernetes.io/docs/tasks/inject-data-application/define-environment-variable-container/", "target", "_blank", "tabindex", "-1" ], [ "type", "button", "color", "primary", "mat-raised-button", "", 3, "disabled", "click" ], [ "type", "button", "color", "primary", "mat-button", "", 3, "click" ], [ "mat-button", "", "color", "primary", 3, "hidden", "click" ], [ 3, "value" ] ],
                template: function(rf, ctx) {
                    1 & rf && (core["ɵɵelementStart"](0, "form", 0), core["ɵɵelementStart"](1, "kd-help-section"), 
                    core["ɵɵelementStart"](2, "mat-form-field"), core["ɵɵelementStart"](3, "input", 1), 
                    core["ɵɵi18nAttributes"](4, form_component_c2), core["ɵɵelementEnd"](), core["ɵɵelement"](5, "mat-progress-bar", 2), 
                    core["ɵɵelementStart"](6, "mat-hint", 3), core["ɵɵtext"](7), core["ɵɵelementEnd"](), 
                    core["ɵɵtemplate"](8, CreateFromFormComponent_mat_error_8_Template, 2, 0, "mat-error", 4), 
                    core["ɵɵtemplate"](9, CreateFromFormComponent_mat_error_9_Template, 2, 0, "mat-error", 4), 
                    core["ɵɵtemplate"](10, CreateFromFormComponent_mat_error_10_Template, 2, 0, "mat-error", 4), 
                    core["ɵɵelementEnd"](), core["ɵɵelementStart"](11, "kd-user-help"), core["ɵɵelementContainerStart"](12), 
                    core["ɵɵi18n"](13, form_component_I18N_3), core["ɵɵelementContainerEnd"](), core["ɵɵelementStart"](14, "a", 5), 
                    core["ɵɵi18nStart"](15, form_component_I18N_5), core["ɵɵelement"](16, "i", 6), core["ɵɵi18nEnd"](), 
                    core["ɵɵelementEnd"](), core["ɵɵelementEnd"](), core["ɵɵelementEnd"](), core["ɵɵelementStart"](17, "kd-help-section"), 
                    core["ɵɵelementStart"](18, "mat-form-field"), core["ɵɵelementStart"](19, "input", 7), 
                    core["ɵɵi18nAttributes"](20, _c9), core["ɵɵelementEnd"](), core["ɵɵtemplate"](21, CreateFromFormComponent_mat_error_21_Template, 2, 0, "mat-error", 4), 
                    core["ɵɵtemplate"](22, CreateFromFormComponent_mat_error_22_Template, 2, 1, "mat-error", 4), 
                    core["ɵɵelementEnd"](), core["ɵɵelementStart"](23, "kd-user-help"), core["ɵɵelementContainerStart"](24), 
                    core["ɵɵi18n"](25, component_I18N_10), core["ɵɵelementContainerEnd"](), core["ɵɵelementStart"](26, "a", 8), 
                    core["ɵɵi18nStart"](27, form_component_I18N_12), core["ɵɵelement"](28, "i", 6), 
                    core["ɵɵi18nEnd"](), core["ɵɵelementEnd"](), core["ɵɵelementEnd"](), core["ɵɵelementEnd"](), 
                    core["ɵɵelementStart"](29, "kd-help-section"), core["ɵɵelementStart"](30, "mat-form-field"), 
                    core["ɵɵelementStart"](31, "input", 9), core["ɵɵi18nAttributes"](32, _c16), core["ɵɵelementEnd"](), 
                    core["ɵɵtemplate"](33, CreateFromFormComponent_mat_error_33_Template, 2, 0, "mat-error", 4), 
                    core["ɵɵtemplate"](34, CreateFromFormComponent_mat_error_34_Template, 2, 0, "mat-error", 4), 
                    core["ɵɵtemplate"](35, CreateFromFormComponent_mat_error_35_Template, 2, 0, "mat-error", 4), 
                    core["ɵɵelementEnd"](), core["ɵɵelementStart"](36, "kd-user-help"), core["ɵɵelementContainerStart"](37), 
                    core["ɵɵi18n"](38, component_I18N_17), core["ɵɵelementContainerEnd"](), core["ɵɵelementStart"](39, "a", 10), 
                    core["ɵɵi18nStart"](40, component_I18N_19), core["ɵɵelement"](41, "i", 6), core["ɵɵi18nEnd"](), 
                    core["ɵɵelementEnd"](), core["ɵɵelementEnd"](), core["ɵɵelementEnd"](), core["ɵɵelementStart"](42, "kd-help-section"), 
                    core["ɵɵelementStart"](43, "div", 11), core["ɵɵelementStart"](44, "kd-port-mappings", 12), 
                    core["ɵɵlistener"]("changeExternal", (function($event) {
                        return ctx.changeExternal($event);
                    })), core["ɵɵelementEnd"](), core["ɵɵelementEnd"](), core["ɵɵelementStart"](45, "kd-user-help"), 
                    core["ɵɵelementContainerStart"](46), core["ɵɵi18n"](47, component_I18N_21), core["ɵɵelementContainerEnd"](), 
                    core["ɵɵelementStart"](48, "a", 13), core["ɵɵi18nStart"](49, component_I18N_23), 
                    core["ɵɵelement"](50, "i", 6), core["ɵɵi18nEnd"](), core["ɵɵelementEnd"](), core["ɵɵelementEnd"](), 
                    core["ɵɵelementEnd"](), core["ɵɵelementStart"](51, "div", 14), core["ɵɵelementStart"](52, "kd-help-section"), 
                    core["ɵɵelementStart"](53, "mat-form-field"), core["ɵɵelementStart"](54, "textarea", 15), 
                    core["ɵɵi18nAttributes"](55, _c27), core["ɵɵelementEnd"](), core["ɵɵelementEnd"](), 
                    core["ɵɵelementStart"](56, "kd-user-help"), core["ɵɵi18n"](57, component_I18N_28), 
                    core["ɵɵelementEnd"](), core["ɵɵelementEnd"](), core["ɵɵelementStart"](58, "kd-help-section"), 
                    core["ɵɵelementStart"](59, "div", 11), core["ɵɵelementStart"](60, "div", 16), core["ɵɵi18n"](61, component_I18N_30), 
                    core["ɵɵelementEnd"](), core["ɵɵelement"](62, "kd-deploy-label", 17), core["ɵɵelementEnd"](), 
                    core["ɵɵelementStart"](63, "kd-user-help"), core["ɵɵelementContainerStart"](64), 
                    core["ɵɵi18n"](65, I18N_32), core["ɵɵelementContainerEnd"](), core["ɵɵelementStart"](66, "a", 5), 
                    core["ɵɵi18nStart"](67, I18N_34), core["ɵɵelement"](68, "i", 6), core["ɵɵi18nEnd"](), 
                    core["ɵɵelementEnd"](), core["ɵɵelementEnd"](), core["ɵɵelementEnd"](), core["ɵɵelementStart"](69, "kd-help-section"), 
                    core["ɵɵelementStart"](70, "mat-form-field"), core["ɵɵelementStart"](71, "mat-select", 18), 
                    core["ɵɵi18nAttributes"](72, _c38), core["ɵɵlistener"]("click", (function($event) {
                        return ctx.resetImagePullSecret();
                    })), core["ɵɵtemplate"](73, CreateFromFormComponent_mat_option_73_Template, 2, 2, "mat-option", 19), 
                    core["ɵɵelementStart"](74, "mat-option", 20), core["ɵɵlistener"]("click", (function($event) {
                        return ctx.handleNamespaceDialog();
                    })), core["ɵɵi18n"](75, I18N_39), core["ɵɵelementEnd"](), core["ɵɵelementEnd"](), 
                    core["ɵɵelementEnd"](), core["ɵɵelementStart"](76, "kd-user-help"), core["ɵɵelementContainerStart"](77), 
                    core["ɵɵi18n"](78, I18N_41), core["ɵɵelementContainerEnd"](), core["ɵɵelementStart"](79, "a", 21), 
                    core["ɵɵi18nStart"](80, I18N_43), core["ɵɵelement"](81, "i", 6), core["ɵɵi18nEnd"](), 
                    core["ɵɵelementEnd"](), core["ɵɵelementEnd"](), core["ɵɵelementEnd"](), core["ɵɵelementStart"](82, "kd-help-section"), 
                    core["ɵɵelementStart"](83, "mat-form-field"), core["ɵɵelementStart"](84, "mat-select", 22), 
                    core["ɵɵi18nAttributes"](85, _c47), core["ɵɵlistener"]("click", (function($event) {
                        return ctx.getSecrets();
                    })), core["ɵɵtemplate"](86, CreateFromFormComponent_mat_option_86_Template, 2, 2, "mat-option", 19), 
                    core["ɵɵelementStart"](87, "mat-option", 20), core["ɵɵlistener"]("click", (function($event) {
                        return ctx.handleCreateSecretDialog();
                    })), core["ɵɵi18n"](88, I18N_48), core["ɵɵelementEnd"](), core["ɵɵelementEnd"](), 
                    core["ɵɵelementEnd"](), core["ɵɵelementStart"](89, "kd-user-help"), core["ɵɵelementContainerStart"](90), 
                    core["ɵɵi18n"](91, I18N_50), core["ɵɵelementContainerEnd"](), core["ɵɵelementStart"](92, "a", 23), 
                    core["ɵɵi18nStart"](93, I18N_52), core["ɵɵelement"](94, "i", 6), core["ɵɵi18nEnd"](), 
                    core["ɵɵelementEnd"](), core["ɵɵelementEnd"](), core["ɵɵelementEnd"](), core["ɵɵelementStart"](95, "kd-help-section"), 
                    core["ɵɵelementStart"](96, "div", 24), core["ɵɵelementStart"](97, "mat-form-field", 25), 
                    core["ɵɵelementStart"](98, "input", 26), core["ɵɵi18nAttributes"](99, _c56), core["ɵɵelementEnd"](), 
                    core["ɵɵtemplate"](100, CreateFromFormComponent_mat_error_100_Template, 2, 0, "mat-error", 4), 
                    core["ɵɵtemplate"](101, CreateFromFormComponent_mat_error_101_Template, 2, 0, "mat-error", 4), 
                    core["ɵɵelementEnd"](), core["ɵɵelement"](102, "div", 27), core["ɵɵelementStart"](103, "mat-form-field", 25), 
                    core["ɵɵelementStart"](104, "input", 28), core["ɵɵi18nAttributes"](105, _c59), core["ɵɵelementEnd"](), 
                    core["ɵɵtemplate"](106, CreateFromFormComponent_mat_error_106_Template, 2, 0, "mat-error", 4), 
                    core["ɵɵtemplate"](107, CreateFromFormComponent_mat_error_107_Template, 2, 0, "mat-error", 4), 
                    core["ɵɵelementEnd"](), core["ɵɵelementEnd"](), core["ɵɵelementStart"](108, "kd-user-help"), 
                    core["ɵɵelementContainerStart"](109), core["ɵɵi18n"](110, I18N_60), core["ɵɵelementContainerEnd"](), 
                    core["ɵɵelementStart"](111, "a", 29), core["ɵɵi18nStart"](112, I18N_62), core["ɵɵelement"](113, "i", 6), 
                    core["ɵɵi18nEnd"](), core["ɵɵelementEnd"](), core["ɵɵelementEnd"](), core["ɵɵelementEnd"](), 
                    core["ɵɵelementStart"](114, "kd-help-section"), core["ɵɵelementStart"](115, "div"), 
                    core["ɵɵelementStart"](116, "mat-form-field", 30), core["ɵɵelementStart"](117, "input", 31), 
                    core["ɵɵi18nAttributes"](118, _c66), core["ɵɵelementEnd"](), core["ɵɵelementEnd"](), 
                    core["ɵɵelementStart"](119, "mat-form-field", 30), core["ɵɵelementStart"](120, "input", 32), 
                    core["ɵɵi18nAttributes"](121, _c69), core["ɵɵelementEnd"](), core["ɵɵelementEnd"](), 
                    core["ɵɵelementEnd"](), core["ɵɵelementStart"](122, "kd-user-help"), core["ɵɵelementContainerStart"](123), 
                    core["ɵɵi18n"](124, I18N_70), core["ɵɵelementContainerEnd"](), core["ɵɵelementStart"](125, "a", 33), 
                    core["ɵɵi18nStart"](126, I18N_72), core["ɵɵelement"](127, "i", 6), core["ɵɵi18nEnd"](), 
                    core["ɵɵelementEnd"](), core["ɵɵelementEnd"](), core["ɵɵelementEnd"](), core["ɵɵelementStart"](128, "kd-help-section"), 
                    core["ɵɵelementStart"](129, "div", 30), core["ɵɵelementStart"](130, "mat-checkbox", 34), 
                    core["ɵɵi18n"](131, I18N_74), core["ɵɵelementEnd"](), core["ɵɵelementEnd"](), core["ɵɵelementStart"](132, "kd-user-help"), 
                    core["ɵɵelementContainerStart"](133), core["ɵɵi18n"](134, I18N_76), core["ɵɵelementContainerEnd"](), 
                    core["ɵɵelementStart"](135, "a", 35), core["ɵɵi18nStart"](136, I18N_78), core["ɵɵelement"](137, "i", 6), 
                    core["ɵɵi18nEnd"](), core["ɵɵelementEnd"](), core["ɵɵelementEnd"](), core["ɵɵelementEnd"](), 
                    core["ɵɵelementStart"](138, "kd-help-section"), core["ɵɵelement"](139, "kd-environment-variables", 36), 
                    core["ɵɵelementStart"](140, "kd-user-help"), core["ɵɵelementContainerStart"](141), 
                    core["ɵɵi18n"](142, I18N_80), core["ɵɵelementContainerEnd"](), core["ɵɵelementStart"](143, "a", 37), 
                    core["ɵɵi18nStart"](144, I18N_82), core["ɵɵelement"](145, "i", 6), core["ɵɵi18nEnd"](), 
                    core["ɵɵelementEnd"](), core["ɵɵelementEnd"](), core["ɵɵelementEnd"](), core["ɵɵelementEnd"](), 
                    core["ɵɵelementEnd"](), core["ɵɵelementStart"](146, "button", 38), core["ɵɵlistener"]("click", (function($event) {
                        return ctx.deploy();
                    })), core["ɵɵi18n"](147, I18N_84), core["ɵɵelementEnd"](), core["ɵɵelementStart"](148, "button", 39), 
                    core["ɵɵlistener"]("click", (function($event) {
                        return ctx.cancel();
                    })), core["ɵɵi18n"](149, I18N_86), core["ɵɵelementEnd"](), core["ɵɵelementStart"](150, "button", 40), 
                    core["ɵɵlistener"]("click", (function($event) {
                        return ctx.switchMoreOptions();
                    })), core["ɵɵi18n"](151, I18N_88), core["ɵɵelementEnd"]()), 2 & rf && (core["ɵɵproperty"]("formGroup", ctx.form), 
                    core["ɵɵadvance"](3), core["ɵɵproperty"]("maxlength", ctx.nameMaxLength)("namespace", ctx.namespace.value), 
                    core["ɵɵadvance"](2), core["ɵɵproperty"]("ngClass", core["ɵɵpureFunction1"](27, _c116, ctx.name.pending)), 
                    core["ɵɵadvance"](2), core["ɵɵtextInterpolate2"]("", null == ctx.name.value ? null : ctx.name.value.length, " / ", ctx.nameMaxLength, ""), 
                    core["ɵɵadvance"](1), core["ɵɵproperty"]("ngIf", null == ctx.name.errors ? null : ctx.name.errors.uniqueName), 
                    core["ɵɵadvance"](1), core["ɵɵproperty"]("ngIf", null == ctx.name.errors ? null : ctx.name.errors.required), 
                    core["ɵɵadvance"](1), core["ɵɵproperty"]("ngIf", null == ctx.name.errors ? null : ctx.name.errors.namePattern), 
                    core["ɵɵadvance"](11), core["ɵɵproperty"]("ngIf", null == ctx.containerImage.errors ? null : ctx.containerImage.errors.required), 
                    core["ɵɵadvance"](1), core["ɵɵproperty"]("ngIf", null == ctx.containerImage.errors ? null : ctx.containerImage.errors.validImageReference), 
                    core["ɵɵadvance"](11), core["ɵɵproperty"]("ngIf", null == ctx.replicas.errors ? null : ctx.replicas.errors.required), 
                    core["ɵɵadvance"](1), core["ɵɵproperty"]("ngIf", null == ctx.replicas.errors ? null : ctx.replicas.errors.kdValidInteger), 
                    core["ɵɵadvance"](1), core["ɵɵproperty"]("ngIf", null == ctx.replicas.errors ? null : ctx.replicas.errors.warnThreshold), 
                    core["ɵɵadvance"](9), core["ɵɵproperty"]("protocols", ctx.protocols)("isExternal", ctx.isExternal), 
                    core["ɵɵadvance"](7), core["ɵɵproperty"]("hidden", !ctx.isMoreOptionsEnabled()), 
                    core["ɵɵadvance"](11), core["ɵɵproperty"]("labelArr", ctx.labelArr), core["ɵɵadvance"](11), 
                    core["ɵɵproperty"]("ngForOf", ctx.namespaces), core["ɵɵadvance"](13), core["ɵɵproperty"]("ngForOf", ctx.secrets), 
                    core["ɵɵadvance"](14), core["ɵɵproperty"]("ngIf", null == ctx.cpuRequirement.errors ? null : ctx.cpuRequirement.errors.min), 
                    core["ɵɵadvance"](1), core["ɵɵproperty"]("ngIf", null == ctx.cpuRequirement.errors ? null : ctx.cpuRequirement.errors.kdValidInteger), 
                    core["ɵɵadvance"](5), core["ɵɵproperty"]("ngIf", null == ctx.memoryRequirement.errors ? null : ctx.memoryRequirement.errors.min), 
                    core["ɵɵadvance"](1), core["ɵɵproperty"]("ngIf", null == ctx.memoryRequirement.errors ? null : ctx.memoryRequirement.errors.kdValidInteger), 
                    core["ɵɵadvance"](39), core["ɵɵproperty"]("disabled", ctx.isCreateDisabled()), core["ɵɵadvance"](4), 
                    core["ɵɵproperty"]("hidden", !ctx.isMoreOptionsEnabled()), core["ɵɵi18nExp"](ctx.isMoreOptionsEnabled()), 
                    core["ɵɵi18nApply"](151));
                },
                directives: [ fesm2015_forms["ɵangular_packages_forms_forms_y"], fesm2015_forms.NgControlStatusGroup, fesm2015_forms.FormGroupDirective, component_HelpSectionComponent, form_field.b, input.a, fesm2015_forms.DefaultValueAccessor, fesm2015_forms.NgControlStatus, fesm2015_forms.FormControlName, uniquename_validator_UniqueNameValidator, fesm2015_forms.RequiredValidator, fesm2015_forms.MaxLengthValidator, progress_bar.a, common.NgClass, extended.a, form_field.e, common.NgIf, component_UserHelpComponent, validimagereference_validator_ValidImageReferenceValidator, fesm2015_forms.NumberValueAccessor, warnthreshold_validator_WarnThresholdValidator, flex.d, component_PortMappingsComponent, component_DeployLabelComponent, fesm2015_select.a, common.NgForOf, fesm2015_core.k, flex.b, fesm2015_checkbox.a, component_EnvironmentVariablesComponent, fesm2015_button.b, form_field.a ],
                styles: [ ".kd-block[_ngcontent-%COMP%]{display:block}.kd-deploy-input-row[_ngcontent-%COMP%]{margin-bottom:8px;margin-top:8px}  mat-progress-bar.kd-deploy-form-progress{clear:left;height:.5px;margin-bottom:-.5px;overflow:hidden;top:5px}  mat-progress-bar.kd-deploy-form-progress:not(.kd-deploy-form-progress-show){visibility:hidden}" ]
            }), CreateFromFormComponent;
        })();
        const create_component_c2 = [ "label", $localize`Create from input` ], create_component_c5 = [ "label", $localize`Create from file` ], component_c8 = [ "label", $localize`Create from form` ];
        let component_CreateComponent = (() => {
            class CreateComponent {}
            return CreateComponent.ɵfac = function(t) {
                return new (t || CreateComponent);
            }, CreateComponent.ɵcmp = core["ɵɵdefineComponent"]({
                type: CreateComponent,
                selectors: [ [ "kd-create" ] ],
                decls: 11,
                vars: 1,
                consts: [ [ 1, "kd-create-container" ], [ 6, "label" ] ],
                template: function(rf, ctx) {
                    1 & rf && (core["ɵɵelementStart"](0, "mat-card", 0), core["ɵɵelementStart"](1, "mat-tab-group"), 
                    core["ɵɵelementStart"](2, "mat-tab", 1), core["ɵɵi18nAttributes"](3, create_component_c2), 
                    core["ɵɵelement"](4, "kd-create-from-input"), core["ɵɵelementEnd"](), core["ɵɵelementStart"](5, "mat-tab", 1), 
                    core["ɵɵi18nAttributes"](6, create_component_c5), core["ɵɵelement"](7, "kd-create-from-file"), 
                    core["ɵɵelementEnd"](), core["ɵɵelementStart"](8, "mat-tab", 1), core["ɵɵi18nAttributes"](9, component_c8), 
                    core["ɵɵelement"](10, "kd-create-from-form"), core["ɵɵelementEnd"](), core["ɵɵelementEnd"](), 
                    core["ɵɵelementEnd"]()), 2 & rf && (core["ɵɵadvance"](1), core["ɵɵproperty"]("@.disabled", !0));
                },
                directives: [ card.a, tabs.b, tabs.a, component_CreateFromInputComponent, component_CreateFromFileComponent, component_CreateFromFormComponent ],
                styles: [ ".kd-create-container[_ngcontent-%COMP%]{padding:0}.kd-create-container[_ngcontent-%COMP%]     .mat-tab-body-content{height:auto;padding:20px}" ]
            }), CreateComponent;
        })(), module_CreateFromFormModule = (() => {
            class CreateFromFormModule {}
            return CreateFromFormModule.ɵmod = core["ɵɵdefineNgModule"]({
                type: CreateFromFormModule
            }), CreateFromFormModule.ɵinj = core["ɵɵdefineInjector"]({
                factory: function(t) {
                    return new (t || CreateFromFormModule);
                },
                imports: [ [ common.CommonModule, shared_module.a, components_module.a ] ]
            }), CreateFromFormModule;
        })();
        const CREATE_ROUTE = {
            path: "",
            component: component_CreateComponent,
            data: {
                breadcrumb: "Create"
            }
        };
        let routing_CreateRoutingModule = (() => {
            class CreateRoutingModule {}
            return CreateRoutingModule.ɵmod = core["ɵɵdefineNgModule"]({
                type: CreateRoutingModule
            }), CreateRoutingModule.ɵinj = core["ɵɵdefineInjector"]({
                factory: function(t) {
                    return new (t || CreateRoutingModule);
                },
                imports: [ [ router.RouterModule.forChild([ CREATE_ROUTE ]) ], router.RouterModule ]
            }), CreateRoutingModule;
        })();
        __webpack_require__.d(__webpack_exports__, "CreateModule", (function() {
            return module_CreateModule;
        }));
        let module_CreateModule = (() => {
            class CreateModule {}
            return CreateModule.ɵmod = core["ɵɵdefineNgModule"]({
                type: CreateModule
            }), CreateModule.ɵinj = core["ɵɵdefineInjector"]({
                factory: function(t) {
                    return new (t || CreateModule);
                },
                imports: [ [ shared_module.a, components_module.a, module_CreateFromFormModule, module_CreateServiceModule, routing_CreateRoutingModule ] ]
            }), CreateModule;
        })();
    }
} ]);