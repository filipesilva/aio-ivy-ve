(window.webpackJsonp = window.webpackJsonp || []).push([ [ 6 ], {
    wi8J: function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        var common = __webpack_require__("ofXK"), components_module = __webpack_require__("PXUV"), shared_module = __webpack_require__("MnlZ"), http = __webpack_require__("tk/3"), notifications = __webpack_require__("PXtb"), Observable = __webpack_require__("HDdC"), dialog = __webpack_require__("tDv3"), core = __webpack_require__("fXoL"), logs = __webpack_require__("NLcA"), router = __webpack_require__("tyNb"), globalsettings = __webpack_require__("5fJw"), fesm2015_dialog = __webpack_require__("0IaG"), component = __webpack_require__("TN1b"), flex = __webpack_require__("XiUz"), form_field = __webpack_require__("kmnG"), fesm2015_select = __webpack_require__("d3UM"), fesm2015_forms = __webpack_require__("3Pt+"), fesm2015_button = __webpack_require__("bTqV"), tooltip = __webpack_require__("Qu3c"), icon = __webpack_require__("NFeN"), menu = __webpack_require__("STbY"), extended = __webpack_require__("znSr"), spinner_component = __webpack_require__("4uYH"), fesm2015_core = __webpack_require__("FKr1"), date_component = __webpack_require__("RMBR"), safehtml = __webpack_require__("g/p3");
        const _c0 = [ "logViewContainer" ];
        var I18N_1, I18N_3;
        I18N_1 = $localize`Logs from`, I18N_3 = $localize`in`;
        const _c7 = [ "matTooltip", $localize`Download logs` ];
        var I18N_8, I18N_10, I18N_12, I18N_14, I18N_16, I18N_18;
        I18N_8 = $localize`Invert colors`, I18N_10 = $localize`Reduce font size`, I18N_12 = $localize`Show timestamps`, 
        I18N_14 = $localize`Auto-refresh (every ${"�0�"}:INTERPOLATION: s.)`, I18N_16 = $localize`Follow logs`, 
        I18N_18 = $localize`Show previous logs`;
        const _c22 = [ "label", $localize`Containers` ];
        function LogsComponent_mat_optgroup_7_mat_option_2_Template(rf, ctx) {
            if (1 & rf && (core["ɵɵelementStart"](0, "mat-option", 26), core["ɵɵtext"](1), core["ɵɵelementEnd"]()), 
            2 & rf) {
                const item_r1428 = ctx.$implicit;
                core["ɵɵproperty"]("value", item_r1428), core["ɵɵadvance"](1), core["ɵɵtextInterpolate1"](" ", item_r1428, " ");
            }
        }
        function LogsComponent_mat_optgroup_7_Template(rf, ctx) {
            if (1 & rf && (core["ɵɵelementStart"](0, "mat-optgroup", 25), core["ɵɵi18nAttributes"](1, _c22), 
            core["ɵɵtemplate"](2, LogsComponent_mat_optgroup_7_mat_option_2_Template, 2, 2, "mat-option", 8), 
            core["ɵɵelementEnd"]()), 2 & rf) {
                const ctx_r1420 = core["ɵɵnextContext"]();
                core["ɵɵadvance"](2), core["ɵɵproperty"]("ngForOf", null == ctx_r1420.logSources ? null : ctx_r1420.logSources.containerNames);
            }
        }
        const _c25 = [ "label", $localize`Init Containers` ];
        function LogsComponent_mat_optgroup_8_mat_option_2_Template(rf, ctx) {
            if (1 & rf && (core["ɵɵelementStart"](0, "mat-option", 26), core["ɵɵtext"](1), core["ɵɵelementEnd"]()), 
            2 & rf) {
                const item_r1430 = ctx.$implicit;
                core["ɵɵproperty"]("value", item_r1430), core["ɵɵadvance"](1), core["ɵɵtextInterpolate1"](" ", item_r1430, " ");
            }
        }
        function LogsComponent_mat_optgroup_8_Template(rf, ctx) {
            if (1 & rf && (core["ɵɵelementStart"](0, "mat-optgroup", 25), core["ɵɵi18nAttributes"](1, _c25), 
            core["ɵɵtemplate"](2, LogsComponent_mat_optgroup_8_mat_option_2_Template, 2, 2, "mat-option", 8), 
            core["ɵɵelementEnd"]()), 2 & rf) {
                const ctx_r1421 = core["ɵɵnextContext"]();
                core["ɵɵadvance"](2), core["ɵɵproperty"]("ngForOf", null == ctx_r1421.logSources ? null : ctx_r1421.logSources.initContainerNames);
            }
        }
        function LogsComponent_mat_option_13_Template(rf, ctx) {
            if (1 & rf && (core["ɵɵelementStart"](0, "mat-option", 26), core["ɵɵtext"](1), core["ɵɵelementEnd"]()), 
            2 & rf) {
                const item_r1431 = ctx.$implicit;
                core["ɵɵproperty"]("value", item_r1431), core["ɵɵadvance"](1), core["ɵɵtextInterpolate1"](" ", item_r1431, " ");
            }
        }
        const _c26 = function(a0, a1) {
            return {
                "kd-logs-element-compact": a0,
                "kd-logs-element": a1
            };
        };
        function LogsComponent_div_27_Template(rf, ctx) {
            if (1 & rf && (core["ɵɵelementStart"](0, "div", 27), core["ɵɵelement"](1, "span", 28), 
            core["ɵɵpipe"](2, "kdSafeHtml"), core["ɵɵelementEnd"]()), 2 & rf) {
                const item_r1432 = ctx.$implicit, ctx_r1424 = core["ɵɵnextContext"]();
                core["ɵɵproperty"]("ngClass", core["ɵɵpureFunction2"](4, _c26, ctx_r1424.logService.getCompact(), !ctx_r1424.logService.getCompact())), 
                core["ɵɵadvance"](1), core["ɵɵproperty"]("innerHTML", core["ɵɵpipeBind1"](2, 2, item_r1432), core["ɵɵsanitizeHtml"]);
            }
        }
        var I18N_27;
        function LogsComponent_span_29_Template(rf, ctx) {
            if (1 & rf && (core["ɵɵelementStart"](0, "span", 29), core["ɵɵi18nStart"](1, I18N_27), 
            core["ɵɵelement"](2, "kd-date", 30), core["ɵɵelement"](3, "kd-date", 30), core["ɵɵi18nEnd"](), 
            core["ɵɵelementEnd"]()), 2 & rf) {
                const ctx_r1425 = core["ɵɵnextContext"]();
                core["ɵɵadvance"](2), core["ɵɵproperty"]("date", null == ctx_r1425.podLogs ? null : ctx_r1425.podLogs.info.fromDate), 
                core["ɵɵadvance"](1), core["ɵɵproperty"]("date", null == ctx_r1425.podLogs ? null : ctx_r1425.podLogs.info.toDate);
            }
        }
        I18N_27 = $localize` Logs from ${"�#2�"}:START_TAG_KD_DATE:${"[�/#2�|�/#3�]"}:CLOSE_TAG_KD_DATE: to ${"�#3�"}:START_TAG_KD_DATE_1:${"[�/#2�|�/#3�]"}:CLOSE_TAG_KD_DATE: UTC `, 
        I18N_27 = core["ɵɵi18nPostprocess"](I18N_27);
        const _c29 = function(a0, a1) {
            return {
                "kd-logs-text-color-invert": a0,
                "kd-logs-text-color": a1
            };
        }, logsPerView = 100, maxLogSize = 2e9, beginningOfLogFile = "beginning", endOfLogFile = "end", oldestTimestamp = "oldest", newestTimestamp = "newest", i18n = {
            MSG_LOGS_ZEROSTATE_TEXT: "The selected container has not logged any messages yet.",
            MSG_LOGS_TRUNCATED_WARNING: "The middle part of the log file cannot be loaded, because it is too big."
        }, LOGS_ROUTE = {
            path: ":resourceNamespace/:resourceName/:resourceType",
            component: (() => {
                class LogsComponent {
                    constructor(logService, activatedRoute_, settingsService_, dialog_, notifications_, _router) {
                        this.activatedRoute_ = activatedRoute_, this.settingsService_ = settingsService_, 
                        this.dialog_ = dialog_, this.notifications_ = notifications_, this._router = _router, 
                        this.totalItems = 0, this.itemsPerPage = 10, this.refreshInterval = 5e3, this.logService = logService, 
                        this.refreshInterval = 1e3 * this.settingsService_.getLogsAutoRefreshTimeInterval(), 
                        this.isLoading = !0;
                        const namespace = this.activatedRoute_.snapshot.params.resourceNamespace, containerName = this.activatedRoute_.snapshot.queryParams.container;
                        this.sourceSubscription = logService.getResource(`source/${namespace}/${this.activatedRoute_.snapshot.params.resourceName}/${this.activatedRoute_.snapshot.params.resourceType}`).subscribe(data => {
                            this.logSources = data, this.pod = data.podNames[0], this.container = containerName || data.containerNames[0], 
                            this.appendContainerParam(), this.logsSubscription = this.logService.getResource(`${namespace}/${this.pod}/${this.container}`).subscribe(data => {
                                this.updateUiModel(data), this.isLoading = !1;
                            });
                        });
                    }
                    ngOnDestroy() {
                        this._router.navigate([], {
                            queryParams: {
                                container: null
                            },
                            queryParamsHandling: "merge"
                        }), this.intervalSubscription && this.intervalSubscription.unsubscribe(), this.sourceSubscription && this.sourceSubscription.unsubscribe(), 
                        this.logsSubscription && this.logsSubscription.unsubscribe();
                    }
                    updateUiModel(podLogs) {
                        this.podLogs = podLogs, this.currentSelection = podLogs.selection, this.logsSet = this.formatAllLogs(podLogs.logs), 
                        podLogs.info.truncated && this.notifications_.push(i18n.MSG_LOGS_TRUNCATED_WARNING, notifications.a.error), 
                        this.logService.getFollowing() && setTimeout(() => {
                            this.scrollToBottom();
                        });
                    }
                    formatAllLogs(logs) {
                        return 0 === logs.length && (logs = [ {
                            timestamp: "0",
                            content: i18n.MSG_LOGS_ZEROSTATE_TEXT
                        } ]), logs.map(line => this.formatLine(line));
                    }
                    formatLine(line) {
                        return this.logService.getShowTimestamp() ? `${line.timestamp}  ${line.content}` : line.content;
                    }
                    appendContainerParam() {
                        this._router.navigate([], {
                            queryParams: {
                                container: this.container
                            },
                            queryParamsHandling: "merge"
                        });
                    }
                    onContainerChange() {
                        this.appendContainerParam(), this.loadNewest();
                    }
                    loadOldest() {
                        this.loadView(beginningOfLogFile, oldestTimestamp, 0, -maxLogSize - logsPerView, -maxLogSize);
                    }
                    loadNewest() {
                        this.loadView(endOfLogFile, newestTimestamp, 0, maxLogSize, maxLogSize + logsPerView);
                    }
                    loadOlder() {
                        this.loadView(this.currentSelection.logFilePosition, this.currentSelection.referencePoint.timestamp, this.currentSelection.referencePoint.lineNum, this.currentSelection.offsetFrom - logsPerView, this.currentSelection.offsetFrom, this.scrollToBottom.bind(this));
                    }
                    loadNewer() {
                        this.loadView(this.currentSelection.logFilePosition, this.currentSelection.referencePoint.timestamp, this.currentSelection.referencePoint.lineNum, this.currentSelection.offsetTo, this.currentSelection.offsetTo + logsPerView, this.scrollToTop.bind(this));
                    }
                    loadView(logFilePosition, referenceTimestamp, referenceLinenum, offsetFrom, offsetTo, onLoad) {
                        const namespace = this.activatedRoute_.snapshot.params.resourceNamespace, params = (new http.g).set("logFilePosition", logFilePosition).set("referenceTimestamp", referenceTimestamp).set("referenceLineNum", `${referenceLinenum}`).set("offsetFrom", `${offsetFrom}`).set("offsetTo", `${offsetTo}`).set("previous", `${this.logService.getPrevious()}`);
                        this.logsSubscription = this.logService.getResource(`${namespace}/${this.pod}/${this.container}`, params).subscribe(podLogs => {
                            this.updateUiModel(podLogs), onLoad && onLoad();
                        });
                    }
                    onTextColorChange() {
                        this.logService.setInverted();
                    }
                    onFontSizeChange() {
                        this.logService.setCompact();
                    }
                    onShowTimestamp() {
                        this.logService.setShowTimestamp(), this.logsSet = this.formatAllLogs(this.podLogs.logs);
                    }
                    onPreviousChange() {
                        this.logService.setPrevious(), this.loadNewest();
                    }
                    toggleLogAutoRefresh() {
                        this.logService.setAutoRefresh(), this.toggleIntervalFunction();
                    }
                    toggleLogFollow() {
                        this.logService.toggleFollowing();
                    }
                    toggleIntervalFunction() {
                        if (this.intervalSubscription && !this.intervalSubscription.closed) this.intervalSubscription.unsubscribe(); else {
                            const intervalObservable = Observable.a.interval(this.refreshInterval);
                            this.intervalSubscription = intervalObservable.subscribe(() => this.loadNewest());
                        }
                    }
                    downloadLog() {
                        const dialogData = {
                            data: {
                                pod: this.pod,
                                container: this.container,
                                namespace: this.activatedRoute_.snapshot.paramMap.get("resourceNamespace")
                            }
                        };
                        this.dialog_.open(dialog.a, dialogData);
                    }
                    onLogsScroll() {
                        this.logService.setFollowing(this.isScrolledBottom());
                    }
                    isScrolledBottom() {
                        const {nativeElement: nativeElement} = this.logViewContainer_;
                        return nativeElement.scrollHeight <= nativeElement.scrollTop + nativeElement.clientHeight;
                    }
                    scrollToBottom() {
                        this.scrollTo("BOTTOM");
                    }
                    scrollToTop() {
                        this.scrollTo("TOP");
                    }
                    scrollTo(position) {
                        const {nativeElement: nativeElement} = this.logViewContainer_;
                        if (!nativeElement) return;
                        let top;
                        switch (position) {
                          case "TOP":
                            top = 0;
                            break;

                          case "BOTTOM":
                            top = nativeElement.scrollHeight;
                            break;

                          default:
                            return;
                        }
                        nativeElement.scrollTo({
                            top: top,
                            left: 0,
                            behavior: "smooth"
                        });
                    }
                }
                return LogsComponent.ɵfac = function(t) {
                    return new (t || LogsComponent)(core["ɵɵdirectiveInject"](logs.a), core["ɵɵdirectiveInject"](router.ActivatedRoute), core["ɵɵdirectiveInject"](globalsettings.a), core["ɵɵdirectiveInject"](fesm2015_dialog.b), core["ɵɵdirectiveInject"](notifications.b), core["ɵɵdirectiveInject"](router.Router));
                }, LogsComponent.ɵcmp = core["ɵɵdefineComponent"]({
                    type: LogsComponent,
                    selectors: [ [ "kd-logs" ] ],
                    viewQuery: function(rf, ctx) {
                        var _t;
                        1 & rf && core["ɵɵstaticViewQuery"](_c0, !0), 2 & rf && core["ɵɵqueryRefresh"](_t = core["ɵɵloadQuery"]()) && (ctx.logViewContainer_ = _t.first);
                    },
                    decls: 76,
                    vars: 23,
                    consts: [ [ 1, "kd-logs-container" ], [ 3, "expandable" ], [ "title", "", 3, "fxLayout", "fxFlex" ], [ 1, "kd-logs-header-text" ], [ 1, "kd-logs-toolbar-select", 3, "ngModel", "ngModelChange", "selectionChange" ], [ "label", "Containers", 4, "ngIf" ], [ "label", "Init Containers", 4, "ngIf" ], [ 1, "kd-form-field" ], [ 3, "value", 4, "ngFor", "ngForOf" ], [ 1, "kd-logs-style-buttons" ], [ "mat-icon-button", "", 3, "click", 6, "matTooltip" ], [ "mat-icon-button", "", 3, "matMenuTriggerFor" ], [ "content", "", 1, "kd-log-view", 3, "ngClass" ], [ "kdLoadingSpinner", "", 3, "isLoading" ], [ 1, "kd-log-view-container", 3, "scroll" ], [ "logViewContainer", "" ], [ 1, "kd-virtual-repeat-sizer" ], [ "class", "kd-logs-element", 3, "ngClass", 4, "ngFor", "ngForOf" ], [ "fxLayout", "row", 1, "kd-muted" ], [ "class", "kd-logs-info", 4, "ngIf" ], [ "fxFlex", "" ], [ 1, "kd-list-pagination-buttons" ], [ "mat-icon-button", "", 3, "click" ], [ "kdMenu", "matMenu" ], [ "mat-menu-item", "", 3, "click" ], [ 6, "label" ], [ 3, "value" ], [ 1, "kd-logs-element", 3, "ngClass" ], [ 1, "kd-log-line", 3, "innerHTML" ], [ 1, "kd-logs-info" ], [ "format", "short", 3, "date" ] ],
                    template: function(rf, ctx) {
                        if (1 & rf && (core["ɵɵelementStart"](0, "div", 0), core["ɵɵelementStart"](1, "kd-card", 1), 
                        core["ɵɵelementStart"](2, "div", 2), core["ɵɵelementStart"](3, "span", 3), core["ɵɵi18n"](4, I18N_1), 
                        core["ɵɵelementEnd"](), core["ɵɵelementStart"](5, "mat-form-field"), core["ɵɵelementStart"](6, "mat-select", 4), 
                        core["ɵɵlistener"]("ngModelChange", (function($event) {
                            return ctx.container = $event;
                        }))("selectionChange", (function($event) {
                            return ctx.onContainerChange();
                        })), core["ɵɵtemplate"](7, LogsComponent_mat_optgroup_7_Template, 3, 1, "mat-optgroup", 5), 
                        core["ɵɵtemplate"](8, LogsComponent_mat_optgroup_8_Template, 3, 1, "mat-optgroup", 6), 
                        core["ɵɵelementEnd"](), core["ɵɵelementEnd"](), core["ɵɵelementStart"](9, "span", 3), 
                        core["ɵɵi18n"](10, I18N_3), core["ɵɵelementEnd"](), core["ɵɵelementStart"](11, "mat-form-field", 7), 
                        core["ɵɵelementStart"](12, "mat-select", 4), core["ɵɵlistener"]("ngModelChange", (function($event) {
                            return ctx.pod = $event;
                        }))("selectionChange", (function($event) {
                            return ctx.loadNewest();
                        })), core["ɵɵtemplate"](13, LogsComponent_mat_option_13_Template, 2, 2, "mat-option", 8), 
                        core["ɵɵelementEnd"](), core["ɵɵelementEnd"](), core["ɵɵelementStart"](14, "div", 9), 
                        core["ɵɵelementStart"](15, "button", 10), core["ɵɵi18nAttributes"](16, _c7), core["ɵɵlistener"]("click", (function($event) {
                            return ctx.downloadLog();
                        })), core["ɵɵelementStart"](17, "mat-icon"), core["ɵɵtext"](18, "file_download"), 
                        core["ɵɵelementEnd"](), core["ɵɵelementEnd"](), core["ɵɵelementStart"](19, "button", 11), 
                        core["ɵɵelementStart"](20, "mat-icon"), core["ɵɵtext"](21, "more_vert"), core["ɵɵelementEnd"](), 
                        core["ɵɵelementEnd"](), core["ɵɵelementEnd"](), core["ɵɵelementEnd"](), core["ɵɵelementStart"](22, "div", 12), 
                        core["ɵɵelement"](23, "div", 13), core["ɵɵelementStart"](24, "div", 14, 15), core["ɵɵlistener"]("scroll", (function($event) {
                            return ctx.onLogsScroll();
                        })), core["ɵɵelement"](26, "div", 16), core["ɵɵtemplate"](27, LogsComponent_div_27_Template, 3, 7, "div", 17), 
                        core["ɵɵelementEnd"](), core["ɵɵelementStart"](28, "div", 18), core["ɵɵtemplate"](29, LogsComponent_span_29_Template, 4, 2, "span", 19), 
                        core["ɵɵelement"](30, "span", 20), core["ɵɵelementStart"](31, "div", 21), core["ɵɵelementStart"](32, "button", 22), 
                        core["ɵɵlistener"]("click", (function($event) {
                            return ctx.loadOldest();
                        })), core["ɵɵelementStart"](33, "mat-icon"), core["ɵɵtext"](34, "first_page"), core["ɵɵelementEnd"](), 
                        core["ɵɵelementEnd"](), core["ɵɵelementStart"](35, "button", 22), core["ɵɵlistener"]("click", (function($event) {
                            return ctx.loadOlder();
                        })), core["ɵɵelementStart"](36, "mat-icon"), core["ɵɵtext"](37, "chevron_left"), 
                        core["ɵɵelementEnd"](), core["ɵɵelementEnd"](), core["ɵɵelementStart"](38, "button", 22), 
                        core["ɵɵlistener"]("click", (function($event) {
                            return ctx.loadNewer();
                        })), core["ɵɵelementStart"](39, "mat-icon"), core["ɵɵtext"](40, "chevron_right"), 
                        core["ɵɵelementEnd"](), core["ɵɵelementEnd"](), core["ɵɵelementStart"](41, "button", 22), 
                        core["ɵɵlistener"]("click", (function($event) {
                            return ctx.loadNewest();
                        })), core["ɵɵelementStart"](42, "mat-icon"), core["ɵɵtext"](43, "last_page"), core["ɵɵelementEnd"](), 
                        core["ɵɵelementEnd"](), core["ɵɵelementEnd"](), core["ɵɵelementEnd"](), core["ɵɵelementEnd"](), 
                        core["ɵɵelementEnd"](), core["ɵɵelementEnd"](), core["ɵɵelementStart"](44, "mat-menu", null, 23), 
                        core["ɵɵelementStart"](46, "button", 24), core["ɵɵlistener"]("click", (function($event) {
                            return ctx.onTextColorChange();
                        })), core["ɵɵelementStart"](47, "mat-icon"), core["ɵɵtext"](48), core["ɵɵelementEnd"](), 
                        core["ɵɵelementStart"](49, "span"), core["ɵɵi18n"](50, I18N_8), core["ɵɵelementEnd"](), 
                        core["ɵɵelementEnd"](), core["ɵɵelementStart"](51, "button", 24), core["ɵɵlistener"]("click", (function($event) {
                            return ctx.onFontSizeChange();
                        })), core["ɵɵelementStart"](52, "mat-icon"), core["ɵɵtext"](53), core["ɵɵelementEnd"](), 
                        core["ɵɵelementStart"](54, "span"), core["ɵɵi18n"](55, I18N_10), core["ɵɵelementEnd"](), 
                        core["ɵɵelementEnd"](), core["ɵɵelementStart"](56, "button", 24), core["ɵɵlistener"]("click", (function($event) {
                            return ctx.onShowTimestamp();
                        })), core["ɵɵelementStart"](57, "mat-icon"), core["ɵɵtext"](58), core["ɵɵelementEnd"](), 
                        core["ɵɵelementStart"](59, "span"), core["ɵɵi18n"](60, I18N_12), core["ɵɵelementEnd"](), 
                        core["ɵɵelementEnd"](), core["ɵɵelementStart"](61, "button", 24), core["ɵɵlistener"]("click", (function($event) {
                            return ctx.toggleLogAutoRefresh();
                        })), core["ɵɵelementStart"](62, "mat-icon"), core["ɵɵtext"](63), core["ɵɵelementEnd"](), 
                        core["ɵɵelementStart"](64, "span"), core["ɵɵi18n"](65, I18N_14), core["ɵɵelementEnd"](), 
                        core["ɵɵelementEnd"](), core["ɵɵelementStart"](66, "button", 24), core["ɵɵlistener"]("click", (function($event) {
                            return ctx.toggleLogFollow();
                        })), core["ɵɵelementStart"](67, "mat-icon"), core["ɵɵtext"](68), core["ɵɵelementEnd"](), 
                        core["ɵɵelementStart"](69, "span"), core["ɵɵi18n"](70, I18N_16), core["ɵɵelementEnd"](), 
                        core["ɵɵelementEnd"](), core["ɵɵelementStart"](71, "button", 24), core["ɵɵlistener"]("click", (function($event) {
                            return ctx.onPreviousChange();
                        })), core["ɵɵelementStart"](72, "mat-icon"), core["ɵɵtext"](73), core["ɵɵelementEnd"](), 
                        core["ɵɵelementStart"](74, "span"), core["ɵɵi18n"](75, I18N_18), core["ɵɵelementEnd"](), 
                        core["ɵɵelementEnd"](), core["ɵɵelementEnd"]()), 2 & rf) {
                            const _r1426 = core["ɵɵreference"](45);
                            core["ɵɵadvance"](1), core["ɵɵproperty"]("expandable", !1), core["ɵɵadvance"](1), 
                            core["ɵɵproperty"]("fxLayout", "row")("fxFlex", 100), core["ɵɵadvance"](4), core["ɵɵproperty"]("ngModel", ctx.container), 
                            core["ɵɵadvance"](1), core["ɵɵproperty"]("ngIf", (null == ctx.logSources ? null : null == ctx.logSources.containerNames ? null : ctx.logSources.containerNames.length) > 0), 
                            core["ɵɵadvance"](1), core["ɵɵproperty"]("ngIf", (null == ctx.logSources ? null : null == ctx.logSources.initContainerNames ? null : ctx.logSources.initContainerNames.length) > 0), 
                            core["ɵɵadvance"](4), core["ɵɵproperty"]("ngModel", ctx.pod), core["ɵɵadvance"](1), 
                            core["ɵɵproperty"]("ngForOf", null == ctx.logSources ? null : ctx.logSources.podNames), 
                            core["ɵɵadvance"](6), core["ɵɵproperty"]("matMenuTriggerFor", _r1426), core["ɵɵadvance"](3), 
                            core["ɵɵproperty"]("ngClass", core["ɵɵpureFunction2"](20, _c29, null == ctx.logService ? null : ctx.logService.getInverted(), !(null != ctx.logService && ctx.logService.getInverted()))), 
                            core["ɵɵadvance"](1), core["ɵɵproperty"]("isLoading", ctx.isLoading), core["ɵɵadvance"](4), 
                            core["ɵɵproperty"]("ngForOf", ctx.logsSet), core["ɵɵadvance"](2), core["ɵɵproperty"]("ngIf", (null == ctx.logsSet ? null : ctx.logsSet.length) > 1), 
                            core["ɵɵadvance"](19), core["ɵɵtextInterpolate"](null == ctx.logService ? null : ctx.logService.getInverted() ? "check_box" : "check_box_outline_blank"), 
                            core["ɵɵadvance"](5), core["ɵɵtextInterpolate"](ctx.logService.getCompact() ? "check_box" : "check_box_outline_blank"), 
                            core["ɵɵadvance"](5), core["ɵɵtextInterpolate"](ctx.logService.getShowTimestamp() ? "check_box" : "check_box_outline_blank"), 
                            core["ɵɵadvance"](5), core["ɵɵtextInterpolate"](ctx.logService.getAutoRefresh() ? "check_box" : "check_box_outline_blank"), 
                            core["ɵɵi18nExp"](ctx.refreshInterval / 1e3), core["ɵɵi18nApply"](65), core["ɵɵadvance"](5), 
                            core["ɵɵtextInterpolate"](ctx.logService.getFollowing() ? "check_box" : "check_box_outline_blank"), 
                            core["ɵɵadvance"](5), core["ɵɵtextInterpolate"](ctx.logService.getPrevious() ? "check_box" : "check_box_outline_blank");
                        }
                    },
                    directives: [ component.a, flex.d, flex.b, form_field.b, fesm2015_select.a, fesm2015_forms.NgControlStatus, fesm2015_forms.NgModel, common.NgIf, common.NgForOf, fesm2015_button.b, tooltip.b, icon.a, menu.c, common.NgClass, extended.a, spinner_component.a, menu.d, menu.a, fesm2015_core.j, fesm2015_core.k, date_component.a ],
                    pipes: [ safehtml.a ],
                    styles: [ '.kd-logs-header-text[_ngcontent-%COMP%]{line-height:42px;white-space:nowrap}.kd-logs-container[_ngcontent-%COMP%]{box-sizing:border-box;height:100%;padding-bottom:35px}.kd-logs-color-icon[_ngcontent-%COMP%], .kd-logs-text-color-invert[_ngcontent-%COMP%]{background-color:#000;color:#fff}.kd-logs-text-color-invert[_ngcontent-%COMP%]   [_ngcontent-%COMP%]::-webkit-scrollbar-thumb{background-color:rgba(255,255,255,.5)}.kd-logs-text-color[_ngcontent-%COMP%]{background-color:#fff;color:#000}.kd-logs-size-icon[_ngcontent-%COMP%]{color:#000}.kd-logs-size-icon-compact[_ngcontent-%COMP%]{color:#000;transform:scale(-1,1)}.kd-log-view[_ngcontent-%COMP%]{-webkit-font-smoothing:antialiased;display:flex;flex:1;font-family:"Roboto Mono Regular",monospace;padding:0;width:100%}.kd-log-line[_ngcontent-%COMP%]{white-space:pre-wrap}.kd-logs-element[_ngcontent-%COMP%], .kd-logs-element-compact[_ngcontent-%COMP%]{padding:0 16px;word-wrap:break-word}.kd-logs-element[_ngcontent-%COMP%]{font-size:14px}.kd-logs-element-compact[_ngcontent-%COMP%]{font-size:12px}.kd-logs-toolbar-select[_ngcontent-%COMP%]{display:inline-flex;flex-grow:1;margin:0;position:relative}.kd-logs-style-buttons[_ngcontent-%COMP%]{float:right;white-space:nowrap}.kd-cross-line-black[_ngcontent-%COMP%]{stroke:#000;stroke-width:2}.kd-cross-line-white[_ngcontent-%COMP%]{stroke:#fff;stroke-width:4}.kd-logs-info[_ngcontent-%COMP%]{padding:12px}.kd-cross-style[_ngcontent-%COMP%]{bottom:0;left:0;position:absolute;right:0;top:0}.kd-list-pagination-buttons[_ngcontent-%COMP%]{margin-right:8px}.mat-form-field[_ngcontent-%COMP%]{align-items:center;display:inline-flex;margin-bottom:-25px;margin-top:-16px;padding:0 5px;vertical-align:middle;width:auto}.mat-form-field.kd-form-field[_ngcontent-%COMP%]{flex:1}.kd-log-view-container[_ngcontent-%COMP%]{-webkit-overflow-scrolling:touch;background-color:inherit;bottom:50px;box-sizing:border-box;left:0;margin:0;overflow-x:hidden;padding:0;position:absolute;right:0;top:57px}.kd-virtual-repeat-sizer[_ngcontent-%COMP%]{box-sizing:border-box;display:block;height:1px;margin:0;padding:0;width:1px}.kd-muted[_ngcontent-%COMP%]{bottom:0;box-sizing:border-box;color:#000;left:0;position:absolute;width:100%}[_nghost-%COMP%]     mat-card{height:100%}[_nghost-%COMP%]     .mat-form-field-infix{width:inherit}[_nghost-%COMP%]     .mat-select-value{max-width:100%;width:inherit}' ]
                }), LogsComponent;
            })(),
            data: {
                breadcrumb: "Logs",
                parent: __webpack_require__("Y4Kv").c
            }
        };
        let routing_LogsRoutingModule = (() => {
            class LogsRoutingModule {}
            return LogsRoutingModule.ɵmod = core["ɵɵdefineNgModule"]({
                type: LogsRoutingModule
            }), LogsRoutingModule.ɵinj = core["ɵɵdefineInjector"]({
                factory: function(t) {
                    return new (t || LogsRoutingModule);
                },
                imports: [ [ router.RouterModule.forChild([ LOGS_ROUTE ]) ], router.RouterModule ]
            }), LogsRoutingModule;
        })();
        __webpack_require__.d(__webpack_exports__, "LogsModule", (function() {
            return module_LogsModule;
        }));
        let module_LogsModule = (() => {
            class LogsModule {}
            return LogsModule.ɵmod = core["ɵɵdefineNgModule"]({
                type: LogsModule
            }), LogsModule.ɵinj = core["ɵɵdefineInjector"]({
                factory: function(t) {
                    return new (t || LogsModule);
                },
                imports: [ [ common.CommonModule, shared_module.a, components_module.a, routing_LogsRoutingModule ] ]
            }), LogsModule;
        })();
    }
} ]);