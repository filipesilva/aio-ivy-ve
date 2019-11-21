(window.webpackJsonp = window.webpackJsonp || []).push([ [ 23 ], {
    jKtO: function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        var core = __webpack_require__("8Y7J");
        class LogsModule {}
        var index_ngfactory = __webpack_require__("ntJQ"), dialog_index_ngfactory = __webpack_require__("9cE2"), snack_bar_index_ngfactory = __webpack_require__("007U"), router_ngfactory = __webpack_require__("pMnS"), dialog_ngfactory = __webpack_require__("wyY1"), component_ngfactory = __webpack_require__("HrBQ"), menu_component_ngfactory = __webpack_require__("Shg9"), changedialog_dialog_ngfactory = __webpack_require__("rO67"), core_index_ngfactory = __webpack_require__("CeGm"), fesm2015_core = __webpack_require__("UhP/"), common = __webpack_require__("SVse"), extended = __webpack_require__("ura0"), esm2015_core = __webpack_require__("/q54"), date_component_ngfactory = __webpack_require__("2N10"), component = __webpack_require__("RMBR");
        class safehtml_SafeHtmlFormatter {
            constructor(sanitizer) {
                this.sanitizer = sanitizer;
            }
            transform(value) {
                return this.sanitizer.sanitize(core.SecurityContext.HTML, value.replace("<", "&lt;").replace(">", "&gt;"));
            }
        }
        var platform_browser = __webpack_require__("cUpR"), card_component_ngfactory = __webpack_require__("bLTg"), card_component = __webpack_require__("TN1b"), flex = __webpack_require__("VDRc"), form_field_index_ngfactory = __webpack_require__("H3DK"), form_field = __webpack_require__("Q2Ze"), bidi = __webpack_require__("9gLZ"), platform = __webpack_require__("SCoL"), animations = __webpack_require__("omvX"), select_index_ngfactory = __webpack_require__("Y1Mv"), fesm2015_select = __webpack_require__("ZTz/"), fesm2015_forms = __webpack_require__("s7LF"), scrolling = __webpack_require__("7KAL"), a11y = __webpack_require__("YEUz"), button_index_ngfactory = __webpack_require__("1Xc+"), fesm2015_button = __webpack_require__("Dxy4"), tooltip = __webpack_require__("ZFy/"), overlay = __webpack_require__("1O3W"), icon_index_ngfactory = __webpack_require__("XE/z"), icon = __webpack_require__("Tj54"), menu = __webpack_require__("rJgo"), spinner_component_ngfactory = __webpack_require__("zTgR"), spinner_component = __webpack_require__("4uYH"), menu_index_ngfactory = __webpack_require__("qXT7"), http = __webpack_require__("IheW"), notifications = __webpack_require__("PXtb"), Observable = __webpack_require__("HDdC"), dialog = __webpack_require__("tDv3");
        const logsPerView = 100, maxLogSize = 2e9, beginningOfLogFile = "beginning", endOfLogFile = "end", oldestTimestamp = "oldest", newestTimestamp = "newest", i18n = {
            MSG_LOGS_ZEROSTATE_TEXT: "The selected container has not logged any messages yet.",
            MSG_LOGS_TRUNCATED_WARNING: "The middle part of the log file cannot be loaded, because it is too big."
        };
        class component_LogsComponent {
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
                const namespace = this.activatedRoute_.snapshot.params.resourceNamespace, params = (new http.j).set("logFilePosition", logFilePosition).set("referenceTimestamp", referenceTimestamp).set("referenceLineNum", `${referenceLinenum}`).set("offsetFrom", `${offsetFrom}`).set("offsetTo", `${offsetTo}`).set("previous", `${this.logService.getPrevious()}`);
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
        var logs = __webpack_require__("NLcA"), router = __webpack_require__("iInd"), globalsettings = __webpack_require__("5fJw"), fesm2015_dialog = __webpack_require__("iELJ"), RenderType_LogsComponent = core["ɵcrt"]({
            encapsulation: 0,
            styles: [ [ '.kd-logs-header-text[_ngcontent-%COMP%]{line-height:42px;white-space:nowrap}.kd-logs-container[_ngcontent-%COMP%]{box-sizing:border-box;height:100%;padding-bottom:35px}.kd-logs-color-icon[_ngcontent-%COMP%], .kd-logs-text-color-invert[_ngcontent-%COMP%]{background-color:#000;color:#fff}.kd-logs-text-color-invert[_ngcontent-%COMP%]   [_ngcontent-%COMP%]::-webkit-scrollbar-thumb{background-color:rgba(255,255,255,.5)}.kd-logs-text-color[_ngcontent-%COMP%]{background-color:#fff;color:#000}.kd-logs-size-icon[_ngcontent-%COMP%]{color:#000}.kd-logs-size-icon-compact[_ngcontent-%COMP%]{color:#000;transform:scale(-1,1)}.kd-log-view[_ngcontent-%COMP%]{-webkit-font-smoothing:antialiased;display:flex;flex:1;font-family:"Roboto Mono Regular",monospace;padding:0;width:100%}.kd-log-line[_ngcontent-%COMP%]{white-space:pre-wrap}.kd-logs-element[_ngcontent-%COMP%], .kd-logs-element-compact[_ngcontent-%COMP%]{padding:0 16px;word-wrap:break-word}.kd-logs-element[_ngcontent-%COMP%]{font-size:14px}.kd-logs-element-compact[_ngcontent-%COMP%]{font-size:12px}.kd-logs-toolbar-select[_ngcontent-%COMP%]{display:inline-flex;flex-grow:1;margin:0;position:relative}.kd-logs-style-buttons[_ngcontent-%COMP%]{float:right;white-space:nowrap}.kd-cross-line-black[_ngcontent-%COMP%]{stroke:#000;stroke-width:2}.kd-cross-line-white[_ngcontent-%COMP%]{stroke:#fff;stroke-width:4}.kd-logs-info[_ngcontent-%COMP%]{padding:12px}.kd-cross-style[_ngcontent-%COMP%]{bottom:0;left:0;position:absolute;right:0;top:0}.kd-list-pagination-buttons[_ngcontent-%COMP%]{margin-right:8px}.mat-form-field[_ngcontent-%COMP%]{align-items:center;display:inline-flex;margin-bottom:-25px;margin-top:-16px;padding:0 5px;vertical-align:middle;width:auto}.mat-form-field.kd-form-field[_ngcontent-%COMP%]{flex:1}.kd-log-view-container[_ngcontent-%COMP%]{-webkit-overflow-scrolling:touch;background-color:inherit;bottom:50px;box-sizing:border-box;left:0;margin:0;overflow-x:hidden;padding:0;position:absolute;right:0;top:57px}.kd-virtual-repeat-sizer[_ngcontent-%COMP%]{box-sizing:border-box;display:block;height:1px;margin:0;padding:0;width:1px}.kd-muted[_ngcontent-%COMP%]{bottom:0;box-sizing:border-box;color:#000;left:0;position:absolute;width:100%}[_nghost-%COMP%]     mat-card{height:100%}[_nghost-%COMP%]     .mat-form-field-infix{width:inherit}[_nghost-%COMP%]     .mat-select-value{max-width:100%;width:inherit}' ] ],
            data: {}
        });
        function View_LogsComponent_2(_l) {
            return core["ɵvid"](0, [ (_l()(), core["ɵeld"](0, 0, null, null, 2, "mat-option", [ [ "class", "mat-option" ], [ "role", "option" ] ], [ [ 1, "tabindex", 0 ], [ 2, "mat-selected", null ], [ 2, "mat-option-multiple", null ], [ 2, "mat-active", null ], [ 8, "id", 0 ], [ 1, "aria-selected", 0 ], [ 1, "aria-disabled", 0 ], [ 2, "mat-option-disabled", null ] ], [ [ null, "click" ], [ null, "keydown" ] ], (function(_v, en, $event) {
                var ad = !0;
                return "click" === en && (ad = !1 !== core["ɵnov"](_v, 1)._selectViaInteraction() && ad), 
                "keydown" === en && (ad = !1 !== core["ɵnov"](_v, 1)._handleKeydown($event) && ad), 
                ad;
            }), core_index_ngfactory.d, core_index_ngfactory.b)), core["ɵdid"](1, 8568832, [ [ 11, 4 ] ], 0, fesm2015_core.p, [ core.ElementRef, core.ChangeDetectorRef, [ 2, fesm2015_core.j ], [ 2, fesm2015_core.o ] ], {
                value: [ 0, "value" ]
            }, null), (_l()(), core["ɵted"](2, 0, [ " ", " " ])) ], (function(_ck, _v) {
                _ck(_v, 1, 0, _v.context.$implicit);
            }), (function(_ck, _v) {
                _ck(_v, 0, 0, core["ɵnov"](_v, 1)._getTabIndex(), core["ɵnov"](_v, 1).selected, core["ɵnov"](_v, 1).multiple, core["ɵnov"](_v, 1).active, core["ɵnov"](_v, 1).id, core["ɵnov"](_v, 1)._getAriaSelected(), core["ɵnov"](_v, 1).disabled.toString(), core["ɵnov"](_v, 1).disabled), 
                _ck(_v, 2, 0, _v.context.$implicit);
            }));
        }
        function View_LogsComponent_1(_l) {
            return core["ɵvid"](0, [ (_l()(), core["ɵeld"](0, 0, null, null, 3, "mat-optgroup", [ [ "class", "mat-optgroup" ], [ "label", "Containers" ], [ "role", "group" ] ], [ [ 2, "mat-optgroup-disabled", null ], [ 1, "aria-disabled", 0 ], [ 1, "aria-labelledby", 0 ] ], null, null, core_index_ngfactory.c, core_index_ngfactory.a)), core["ɵdid"](1, 49152, [ [ 12, 4 ] ], 0, fesm2015_core.o, [], {
                label: [ 0, "label" ]
            }, null), (_l()(), core["ɵand"](16777216, null, 1, 1, null, View_LogsComponent_2)), core["ɵdid"](3, 278528, null, 0, common.NgForOf, [ core.ViewContainerRef, core.TemplateRef, core.IterableDiffers ], {
                ngForOf: [ 0, "ngForOf" ]
            }, null) ], (function(_ck, _v) {
                var _co = _v.component;
                _ck(_v, 1, 0, "Containers"), _ck(_v, 3, 0, null == _co.logSources ? null : _co.logSources.containerNames);
            }), (function(_ck, _v) {
                _ck(_v, 0, 0, core["ɵnov"](_v, 1).disabled, core["ɵnov"](_v, 1).disabled.toString(), core["ɵnov"](_v, 1)._labelId);
            }));
        }
        function View_LogsComponent_4(_l) {
            return core["ɵvid"](0, [ (_l()(), core["ɵeld"](0, 0, null, null, 2, "mat-option", [ [ "class", "mat-option" ], [ "role", "option" ] ], [ [ 1, "tabindex", 0 ], [ 2, "mat-selected", null ], [ 2, "mat-option-multiple", null ], [ 2, "mat-active", null ], [ 8, "id", 0 ], [ 1, "aria-selected", 0 ], [ 1, "aria-disabled", 0 ], [ 2, "mat-option-disabled", null ] ], [ [ null, "click" ], [ null, "keydown" ] ], (function(_v, en, $event) {
                var ad = !0;
                return "click" === en && (ad = !1 !== core["ɵnov"](_v, 1)._selectViaInteraction() && ad), 
                "keydown" === en && (ad = !1 !== core["ɵnov"](_v, 1)._handleKeydown($event) && ad), 
                ad;
            }), core_index_ngfactory.d, core_index_ngfactory.b)), core["ɵdid"](1, 8568832, [ [ 11, 4 ] ], 0, fesm2015_core.p, [ core.ElementRef, core.ChangeDetectorRef, [ 2, fesm2015_core.j ], [ 2, fesm2015_core.o ] ], {
                value: [ 0, "value" ]
            }, null), (_l()(), core["ɵted"](2, 0, [ " ", " " ])) ], (function(_ck, _v) {
                _ck(_v, 1, 0, _v.context.$implicit);
            }), (function(_ck, _v) {
                _ck(_v, 0, 0, core["ɵnov"](_v, 1)._getTabIndex(), core["ɵnov"](_v, 1).selected, core["ɵnov"](_v, 1).multiple, core["ɵnov"](_v, 1).active, core["ɵnov"](_v, 1).id, core["ɵnov"](_v, 1)._getAriaSelected(), core["ɵnov"](_v, 1).disabled.toString(), core["ɵnov"](_v, 1).disabled), 
                _ck(_v, 2, 0, _v.context.$implicit);
            }));
        }
        function View_LogsComponent_3(_l) {
            return core["ɵvid"](0, [ (_l()(), core["ɵeld"](0, 0, null, null, 3, "mat-optgroup", [ [ "class", "mat-optgroup" ], [ "label", "Init Containers" ], [ "role", "group" ] ], [ [ 2, "mat-optgroup-disabled", null ], [ 1, "aria-disabled", 0 ], [ 1, "aria-labelledby", 0 ] ], null, null, core_index_ngfactory.c, core_index_ngfactory.a)), core["ɵdid"](1, 49152, [ [ 12, 4 ] ], 0, fesm2015_core.o, [], {
                label: [ 0, "label" ]
            }, null), (_l()(), core["ɵand"](16777216, null, 1, 1, null, View_LogsComponent_4)), core["ɵdid"](3, 278528, null, 0, common.NgForOf, [ core.ViewContainerRef, core.TemplateRef, core.IterableDiffers ], {
                ngForOf: [ 0, "ngForOf" ]
            }, null) ], (function(_ck, _v) {
                var _co = _v.component;
                _ck(_v, 1, 0, "Init Containers"), _ck(_v, 3, 0, null == _co.logSources ? null : _co.logSources.initContainerNames);
            }), (function(_ck, _v) {
                _ck(_v, 0, 0, core["ɵnov"](_v, 1).disabled, core["ɵnov"](_v, 1).disabled.toString(), core["ɵnov"](_v, 1)._labelId);
            }));
        }
        function View_LogsComponent_5(_l) {
            return core["ɵvid"](0, [ (_l()(), core["ɵeld"](0, 0, null, null, 2, "mat-option", [ [ "class", "mat-option" ], [ "role", "option" ] ], [ [ 1, "tabindex", 0 ], [ 2, "mat-selected", null ], [ 2, "mat-option-multiple", null ], [ 2, "mat-active", null ], [ 8, "id", 0 ], [ 1, "aria-selected", 0 ], [ 1, "aria-disabled", 0 ], [ 2, "mat-option-disabled", null ] ], [ [ null, "click" ], [ null, "keydown" ] ], (function(_v, en, $event) {
                var ad = !0;
                return "click" === en && (ad = !1 !== core["ɵnov"](_v, 1)._selectViaInteraction() && ad), 
                "keydown" === en && (ad = !1 !== core["ɵnov"](_v, 1)._handleKeydown($event) && ad), 
                ad;
            }), core_index_ngfactory.d, core_index_ngfactory.b)), core["ɵdid"](1, 8568832, [ [ 23, 4 ] ], 0, fesm2015_core.p, [ core.ElementRef, core.ChangeDetectorRef, [ 2, fesm2015_core.j ], [ 2, fesm2015_core.o ] ], {
                value: [ 0, "value" ]
            }, null), (_l()(), core["ɵted"](2, 0, [ " ", " " ])) ], (function(_ck, _v) {
                _ck(_v, 1, 0, _v.context.$implicit);
            }), (function(_ck, _v) {
                _ck(_v, 0, 0, core["ɵnov"](_v, 1)._getTabIndex(), core["ɵnov"](_v, 1).selected, core["ɵnov"](_v, 1).multiple, core["ɵnov"](_v, 1).active, core["ɵnov"](_v, 1).id, core["ɵnov"](_v, 1)._getAriaSelected(), core["ɵnov"](_v, 1).disabled.toString(), core["ɵnov"](_v, 1).disabled), 
                _ck(_v, 2, 0, _v.context.$implicit);
            }));
        }
        function View_LogsComponent_6(_l) {
            return core["ɵvid"](0, [ (_l()(), core["ɵeld"](0, 0, null, null, 7, "div", [ [ "class", "kd-logs-element" ] ], null, null, null, null, null)), core["ɵprd"](512, null, common["ɵNgClassImpl"], common["ɵNgClassR2Impl"], [ core.IterableDiffers, core.KeyValueDiffers, core.ElementRef, core.Renderer2 ]), core["ɵdid"](2, 278528, null, 0, common.NgClass, [ common["ɵNgClassImpl"] ], {
                klass: [ 0, "klass" ],
                ngClass: [ 1, "ngClass" ]
            }, null), core["ɵpod"](3, {
                "kd-logs-element-compact": 0,
                "kd-logs-element": 1
            }), core["ɵdid"](4, 933888, null, 0, extended.a, [ core.ElementRef, esm2015_core.i, esm2015_core.f, common["ɵNgClassImpl"], [ 6, common.NgClass ] ], {
                ngClass: [ 0, "ngClass" ],
                klass: [ 1, "klass" ]
            }, null), core["ɵpod"](5, {
                "kd-logs-element-compact": 0,
                "kd-logs-element": 1
            }), (_l()(), core["ɵeld"](6, 0, null, null, 1, "span", [ [ "class", "kd-log-line" ] ], [ [ 8, "innerHTML", 1 ] ], null, null, null, null)), core["ɵppd"](7, 1) ], (function(_ck, _v) {
                var _co = _v.component, currVal_1 = _ck(_v, 3, 0, _co.logService.getCompact(), !_co.logService.getCompact());
                _ck(_v, 2, 0, "kd-logs-element", currVal_1);
                var currVal_2 = _ck(_v, 5, 0, _co.logService.getCompact(), !_co.logService.getCompact());
                _ck(_v, 4, 0, currVal_2, "kd-logs-element");
            }), (function(_ck, _v) {
                var currVal_4 = core["ɵunv"](_v, 6, 0, _ck(_v, 7, 0, core["ɵnov"](_v.parent, 0), _v.context.$implicit));
                _ck(_v, 6, 0, currVal_4);
            }));
        }
        function View_LogsComponent_7(_l) {
            return core["ɵvid"](0, [ (_l()(), core["ɵeld"](0, 0, null, null, 7, "span", [ [ "class", "kd-logs-info" ] ], null, null, null, null, null)), (_l()(), 
            core["ɵted"](-1, null, [ " Logs from " ])), (_l()(), core["ɵeld"](2, 0, null, null, 1, "kd-date", [ [ "format", "short" ] ], null, null, null, date_component_ngfactory.b, date_component_ngfactory.a)), core["ɵdid"](3, 49152, null, 0, component.a, [], {
                date: [ 0, "date" ],
                format: [ 1, "format" ]
            }, null), (_l()(), core["ɵted"](-1, null, [ " to " ])), (_l()(), core["ɵeld"](5, 0, null, null, 1, "kd-date", [ [ "format", "short" ] ], null, null, null, date_component_ngfactory.b, date_component_ngfactory.a)), core["ɵdid"](6, 49152, null, 0, component.a, [], {
                date: [ 0, "date" ],
                format: [ 1, "format" ]
            }, null), (_l()(), core["ɵted"](-1, null, [ " UTC " ])) ], (function(_ck, _v) {
                var _co = _v.component;
                _ck(_v, 3, 0, null == _co.podLogs ? null : _co.podLogs.info.fromDate, "short"), 
                _ck(_v, 6, 0, null == _co.podLogs ? null : _co.podLogs.info.toDate, "short");
            }), null);
        }
        function View_LogsComponent_0(_l) {
            return core["ɵvid"](0, [ core["ɵpid"](0, safehtml_SafeHtmlFormatter, [ platform_browser.b ]), core["ɵqud"](402653184, 1, {
                logViewContainer_: 0
            }), (_l()(), core["ɵeld"](2, 0, null, null, 109, "div", [ [ "class", "kd-logs-container" ] ], null, null, null, null, null)), (_l()(), 
            core["ɵeld"](3, 0, null, null, 108, "kd-card", [], null, null, null, card_component_ngfactory.b, card_component_ngfactory.a)), core["ɵdid"](4, 49152, null, 0, card_component.a, [], {
                expandable: [ 0, "expandable" ]
            }, null), (_l()(), core["ɵeld"](5, 0, null, 0, 67, "div", [ [ "title", "" ] ], null, null, null, null, null)), core["ɵdid"](6, 671744, null, 0, flex.d, [ core.ElementRef, esm2015_core.i, [ 2, flex.k ], esm2015_core.f ], {
                fxLayout: [ 0, "fxLayout" ]
            }, null), core["ɵdid"](7, 671744, null, 0, flex.b, [ core.ElementRef, esm2015_core.i, esm2015_core.e, flex.i, esm2015_core.f ], {
                fxFlex: [ 0, "fxFlex" ]
            }, null), (_l()(), core["ɵeld"](8, 0, null, null, 1, "span", [ [ "class", "kd-logs-header-text" ] ], null, null, null, null, null)), (_l()(), 
            core["ɵted"](-1, null, [ "Logs from" ])), (_l()(), core["ɵeld"](10, 0, null, null, 24, "mat-form-field", [ [ "class", "mat-form-field" ] ], [ [ 2, "mat-form-field-appearance-standard", null ], [ 2, "mat-form-field-appearance-fill", null ], [ 2, "mat-form-field-appearance-outline", null ], [ 2, "mat-form-field-appearance-legacy", null ], [ 2, "mat-form-field-invalid", null ], [ 2, "mat-form-field-can-float", null ], [ 2, "mat-form-field-should-float", null ], [ 2, "mat-form-field-has-label", null ], [ 2, "mat-form-field-hide-placeholder", null ], [ 2, "mat-form-field-disabled", null ], [ 2, "mat-form-field-autofilled", null ], [ 2, "mat-focused", null ], [ 2, "mat-accent", null ], [ 2, "mat-warn", null ], [ 2, "ng-untouched", null ], [ 2, "ng-touched", null ], [ 2, "ng-pristine", null ], [ 2, "ng-dirty", null ], [ 2, "ng-valid", null ], [ 2, "ng-invalid", null ], [ 2, "ng-pending", null ], [ 2, "_mat-animation-noopable", null ] ], null, null, form_field_index_ngfactory.b, form_field_index_ngfactory.a)), core["ɵdid"](11, 7520256, null, 9, form_field.c, [ core.ElementRef, core.ChangeDetectorRef, [ 2, fesm2015_core.h ], [ 2, bidi.b ], [ 2, form_field.a ], platform.a, core.NgZone, [ 2, animations.a ] ], null, null), core["ɵqud"](603979776, 2, {
                _controlNonStatic: 0
            }), core["ɵqud"](335544320, 3, {
                _controlStatic: 0
            }), core["ɵqud"](603979776, 4, {
                _labelChildNonStatic: 0
            }), core["ɵqud"](335544320, 5, {
                _labelChildStatic: 0
            }), core["ɵqud"](603979776, 6, {
                _placeholderChild: 0
            }), core["ɵqud"](603979776, 7, {
                _errorChildren: 1
            }), core["ɵqud"](603979776, 8, {
                _hintChildren: 1
            }), core["ɵqud"](603979776, 9, {
                _prefixChildren: 1
            }), core["ɵqud"](603979776, 10, {
                _suffixChildren: 1
            }), (_l()(), core["ɵeld"](21, 0, null, 1, 13, "mat-select", [ [ "class", "kd-logs-toolbar-select mat-select" ], [ "role", "listbox" ] ], [ [ 2, "ng-untouched", null ], [ 2, "ng-touched", null ], [ 2, "ng-pristine", null ], [ 2, "ng-dirty", null ], [ 2, "ng-valid", null ], [ 2, "ng-invalid", null ], [ 2, "ng-pending", null ], [ 1, "id", 0 ], [ 1, "tabindex", 0 ], [ 1, "aria-label", 0 ], [ 1, "aria-labelledby", 0 ], [ 1, "aria-required", 0 ], [ 1, "aria-disabled", 0 ], [ 1, "aria-invalid", 0 ], [ 1, "aria-owns", 0 ], [ 1, "aria-multiselectable", 0 ], [ 1, "aria-describedby", 0 ], [ 1, "aria-activedescendant", 0 ], [ 2, "mat-select-disabled", null ], [ 2, "mat-select-invalid", null ], [ 2, "mat-select-required", null ], [ 2, "mat-select-empty", null ] ], [ [ null, "ngModelChange" ], [ null, "selectionChange" ], [ null, "keydown" ], [ null, "focus" ], [ null, "blur" ] ], (function(_v, en, $event) {
                var ad = !0, _co = _v.component;
                return "keydown" === en && (ad = !1 !== core["ɵnov"](_v, 26)._handleKeydown($event) && ad), 
                "focus" === en && (ad = !1 !== core["ɵnov"](_v, 26)._onFocus() && ad), "blur" === en && (ad = !1 !== core["ɵnov"](_v, 26)._onBlur() && ad), 
                "ngModelChange" === en && (ad = !1 !== (_co.container = $event) && ad), "selectionChange" === en && (ad = !1 !== _co.onContainerChange() && ad), 
                ad;
            }), select_index_ngfactory.b, select_index_ngfactory.a)), core["ɵprd"](6144, null, fesm2015_core.j, null, [ fesm2015_select.c ]), core["ɵdid"](23, 671744, null, 0, fesm2015_forms.NgModel, [ [ 8, null ], [ 8, null ], [ 8, null ], [ 8, null ] ], {
                model: [ 0, "model" ]
            }, {
                update: "ngModelChange"
            }), core["ɵprd"](2048, null, fesm2015_forms.NgControl, null, [ fesm2015_forms.NgModel ]), core["ɵdid"](25, 16384, null, 0, fesm2015_forms.NgControlStatus, [ [ 4, fesm2015_forms.NgControl ] ], null, null), core["ɵdid"](26, 2080768, null, 3, fesm2015_select.c, [ scrolling.d, core.ChangeDetectorRef, core.NgZone, fesm2015_core.d, core.ElementRef, [ 2, bidi.b ], [ 2, fesm2015_forms.NgForm ], [ 2, fesm2015_forms.FormGroupDirective ], [ 2, form_field.c ], [ 6, fesm2015_forms.NgControl ], [ 8, null ], fesm2015_select.a, a11y.i ], null, {
                selectionChange: "selectionChange"
            }), core["ɵqud"](603979776, 11, {
                options: 1
            }), core["ɵqud"](603979776, 12, {
                optionGroups: 1
            }), core["ɵqud"](603979776, 13, {
                customTrigger: 0
            }), core["ɵprd"](2048, [ [ 2, 4 ], [ 3, 4 ] ], form_field.d, null, [ fesm2015_select.c ]), (_l()(), 
            core["ɵand"](16777216, null, 1, 1, null, View_LogsComponent_1)), core["ɵdid"](32, 16384, null, 0, common.NgIf, [ core.ViewContainerRef, core.TemplateRef ], {
                ngIf: [ 0, "ngIf" ]
            }, null), (_l()(), core["ɵand"](16777216, null, 1, 1, null, View_LogsComponent_3)), core["ɵdid"](34, 16384, null, 0, common.NgIf, [ core.ViewContainerRef, core.TemplateRef ], {
                ngIf: [ 0, "ngIf" ]
            }, null), (_l()(), core["ɵeld"](35, 0, null, null, 1, "span", [ [ "class", "kd-logs-header-text" ] ], null, null, null, null, null)), (_l()(), 
            core["ɵted"](-1, null, [ "in" ])), (_l()(), core["ɵeld"](37, 0, null, null, 22, "mat-form-field", [ [ "class", "kd-form-field mat-form-field" ] ], [ [ 2, "mat-form-field-appearance-standard", null ], [ 2, "mat-form-field-appearance-fill", null ], [ 2, "mat-form-field-appearance-outline", null ], [ 2, "mat-form-field-appearance-legacy", null ], [ 2, "mat-form-field-invalid", null ], [ 2, "mat-form-field-can-float", null ], [ 2, "mat-form-field-should-float", null ], [ 2, "mat-form-field-has-label", null ], [ 2, "mat-form-field-hide-placeholder", null ], [ 2, "mat-form-field-disabled", null ], [ 2, "mat-form-field-autofilled", null ], [ 2, "mat-focused", null ], [ 2, "mat-accent", null ], [ 2, "mat-warn", null ], [ 2, "ng-untouched", null ], [ 2, "ng-touched", null ], [ 2, "ng-pristine", null ], [ 2, "ng-dirty", null ], [ 2, "ng-valid", null ], [ 2, "ng-invalid", null ], [ 2, "ng-pending", null ], [ 2, "_mat-animation-noopable", null ] ], null, null, form_field_index_ngfactory.b, form_field_index_ngfactory.a)), core["ɵdid"](38, 7520256, null, 9, form_field.c, [ core.ElementRef, core.ChangeDetectorRef, [ 2, fesm2015_core.h ], [ 2, bidi.b ], [ 2, form_field.a ], platform.a, core.NgZone, [ 2, animations.a ] ], null, null), core["ɵqud"](603979776, 14, {
                _controlNonStatic: 0
            }), core["ɵqud"](335544320, 15, {
                _controlStatic: 0
            }), core["ɵqud"](603979776, 16, {
                _labelChildNonStatic: 0
            }), core["ɵqud"](335544320, 17, {
                _labelChildStatic: 0
            }), core["ɵqud"](603979776, 18, {
                _placeholderChild: 0
            }), core["ɵqud"](603979776, 19, {
                _errorChildren: 1
            }), core["ɵqud"](603979776, 20, {
                _hintChildren: 1
            }), core["ɵqud"](603979776, 21, {
                _prefixChildren: 1
            }), core["ɵqud"](603979776, 22, {
                _suffixChildren: 1
            }), (_l()(), core["ɵeld"](48, 0, null, 1, 11, "mat-select", [ [ "class", "kd-logs-toolbar-select mat-select" ], [ "role", "listbox" ] ], [ [ 2, "ng-untouched", null ], [ 2, "ng-touched", null ], [ 2, "ng-pristine", null ], [ 2, "ng-dirty", null ], [ 2, "ng-valid", null ], [ 2, "ng-invalid", null ], [ 2, "ng-pending", null ], [ 1, "id", 0 ], [ 1, "tabindex", 0 ], [ 1, "aria-label", 0 ], [ 1, "aria-labelledby", 0 ], [ 1, "aria-required", 0 ], [ 1, "aria-disabled", 0 ], [ 1, "aria-invalid", 0 ], [ 1, "aria-owns", 0 ], [ 1, "aria-multiselectable", 0 ], [ 1, "aria-describedby", 0 ], [ 1, "aria-activedescendant", 0 ], [ 2, "mat-select-disabled", null ], [ 2, "mat-select-invalid", null ], [ 2, "mat-select-required", null ], [ 2, "mat-select-empty", null ] ], [ [ null, "ngModelChange" ], [ null, "selectionChange" ], [ null, "keydown" ], [ null, "focus" ], [ null, "blur" ] ], (function(_v, en, $event) {
                var ad = !0, _co = _v.component;
                return "keydown" === en && (ad = !1 !== core["ɵnov"](_v, 53)._handleKeydown($event) && ad), 
                "focus" === en && (ad = !1 !== core["ɵnov"](_v, 53)._onFocus() && ad), "blur" === en && (ad = !1 !== core["ɵnov"](_v, 53)._onBlur() && ad), 
                "ngModelChange" === en && (ad = !1 !== (_co.pod = $event) && ad), "selectionChange" === en && (ad = !1 !== _co.loadNewest() && ad), 
                ad;
            }), select_index_ngfactory.b, select_index_ngfactory.a)), core["ɵprd"](6144, null, fesm2015_core.j, null, [ fesm2015_select.c ]), core["ɵdid"](50, 671744, null, 0, fesm2015_forms.NgModel, [ [ 8, null ], [ 8, null ], [ 8, null ], [ 8, null ] ], {
                model: [ 0, "model" ]
            }, {
                update: "ngModelChange"
            }), core["ɵprd"](2048, null, fesm2015_forms.NgControl, null, [ fesm2015_forms.NgModel ]), core["ɵdid"](52, 16384, null, 0, fesm2015_forms.NgControlStatus, [ [ 4, fesm2015_forms.NgControl ] ], null, null), core["ɵdid"](53, 2080768, null, 3, fesm2015_select.c, [ scrolling.d, core.ChangeDetectorRef, core.NgZone, fesm2015_core.d, core.ElementRef, [ 2, bidi.b ], [ 2, fesm2015_forms.NgForm ], [ 2, fesm2015_forms.FormGroupDirective ], [ 2, form_field.c ], [ 6, fesm2015_forms.NgControl ], [ 8, null ], fesm2015_select.a, a11y.i ], null, {
                selectionChange: "selectionChange"
            }), core["ɵqud"](603979776, 23, {
                options: 1
            }), core["ɵqud"](603979776, 24, {
                optionGroups: 1
            }), core["ɵqud"](603979776, 25, {
                customTrigger: 0
            }), core["ɵprd"](2048, [ [ 14, 4 ], [ 15, 4 ] ], form_field.d, null, [ fesm2015_select.c ]), (_l()(), 
            core["ɵand"](16777216, null, 1, 1, null, View_LogsComponent_5)), core["ɵdid"](59, 278528, null, 0, common.NgForOf, [ core.ViewContainerRef, core.TemplateRef, core.IterableDiffers ], {
                ngForOf: [ 0, "ngForOf" ]
            }, null), (_l()(), core["ɵeld"](60, 0, null, null, 12, "div", [ [ "class", "kd-logs-style-buttons" ] ], null, null, null, null, null)), (_l()(), 
            core["ɵeld"](61, 16777216, null, null, 5, "button", [ [ "mat-icon-button", "" ], [ "matTooltip", "Download logs" ] ], [ [ 1, "disabled", 0 ], [ 2, "_mat-animation-noopable", null ] ], [ [ null, "click" ] ], (function(_v, en, $event) {
                var ad = !0;
                return "click" === en && (ad = !1 !== _v.component.downloadLog() && ad), ad;
            }), button_index_ngfactory.d, button_index_ngfactory.b)), core["ɵdid"](62, 180224, null, 0, fesm2015_button.b, [ core.ElementRef, a11y.f, [ 2, animations.a ] ], null, null), core["ɵdid"](63, 212992, null, 0, tooltip.d, [ overlay.c, core.ElementRef, scrolling.b, core.ViewContainerRef, core.NgZone, platform.a, a11y.c, a11y.f, tooltip.b, [ 2, bidi.b ], [ 2, tooltip.a ], core.ElementRef ], {
                message: [ 0, "message" ]
            }, null), (_l()(), core["ɵeld"](64, 0, null, 0, 2, "mat-icon", [ [ "class", "mat-icon notranslate" ], [ "role", "img" ] ], [ [ 2, "mat-icon-inline", null ], [ 2, "mat-icon-no-color", null ] ], null, null, icon_index_ngfactory.b, icon_index_ngfactory.a)), core["ɵdid"](65, 9158656, null, 0, icon.b, [ core.ElementRef, icon.d, [ 8, null ], [ 2, icon.a ], [ 2, core.ErrorHandler ] ], null, null), (_l()(), 
            core["ɵted"](-1, 0, [ "file_download" ])), (_l()(), core["ɵeld"](67, 16777216, null, null, 5, "button", [ [ "aria-haspopup", "true" ], [ "class", "mat-menu-trigger" ], [ "mat-icon-button", "" ] ], [ [ 1, "disabled", 0 ], [ 2, "_mat-animation-noopable", null ], [ 1, "aria-expanded", 0 ], [ 1, "aria-controls", 0 ] ], [ [ null, "mousedown" ], [ null, "keydown" ], [ null, "click" ] ], (function(_v, en, $event) {
                var ad = !0;
                return "mousedown" === en && (ad = !1 !== core["ɵnov"](_v, 69)._handleMousedown($event) && ad), 
                "keydown" === en && (ad = !1 !== core["ɵnov"](_v, 69)._handleKeydown($event) && ad), 
                "click" === en && (ad = !1 !== core["ɵnov"](_v, 69)._handleClick($event) && ad), 
                ad;
            }), button_index_ngfactory.d, button_index_ngfactory.b)), core["ɵdid"](68, 180224, null, 0, fesm2015_button.b, [ core.ElementRef, a11y.f, [ 2, animations.a ] ], null, null), core["ɵdid"](69, 1196032, null, 0, menu.g, [ overlay.c, core.ElementRef, core.ViewContainerRef, menu.c, [ 2, menu.d ], [ 8, null ], [ 2, bidi.b ], a11y.f ], {
                menu: [ 0, "menu" ]
            }, null), (_l()(), core["ɵeld"](70, 0, null, 0, 2, "mat-icon", [ [ "class", "mat-icon notranslate" ], [ "role", "img" ] ], [ [ 2, "mat-icon-inline", null ], [ 2, "mat-icon-no-color", null ] ], null, null, icon_index_ngfactory.b, icon_index_ngfactory.a)), core["ɵdid"](71, 9158656, null, 0, icon.b, [ core.ElementRef, icon.d, [ 8, null ], [ 2, icon.a ], [ 2, core.ErrorHandler ] ], null, null), (_l()(), 
            core["ɵted"](-1, 0, [ "more_vert" ])), (_l()(), core["ɵeld"](73, 0, null, 3, 38, "div", [ [ "class", "kd-log-view" ], [ "content", "" ] ], null, null, null, null, null)), core["ɵprd"](512, null, common["ɵNgClassImpl"], common["ɵNgClassR2Impl"], [ core.IterableDiffers, core.KeyValueDiffers, core.ElementRef, core.Renderer2 ]), core["ɵdid"](75, 278528, null, 0, common.NgClass, [ common["ɵNgClassImpl"] ], {
                klass: [ 0, "klass" ],
                ngClass: [ 1, "ngClass" ]
            }, null), core["ɵpod"](76, {
                "kd-logs-text-color-invert": 0,
                "kd-logs-text-color": 1
            }), core["ɵdid"](77, 933888, null, 0, extended.a, [ core.ElementRef, esm2015_core.i, esm2015_core.f, common["ɵNgClassImpl"], [ 6, common.NgClass ] ], {
                ngClass: [ 0, "ngClass" ],
                klass: [ 1, "klass" ]
            }, null), core["ɵpod"](78, {
                "kd-logs-text-color-invert": 0,
                "kd-logs-text-color": 1
            }), (_l()(), core["ɵeld"](79, 0, null, null, 1, "div", [ [ "kdLoadingSpinner", "" ] ], [ [ 2, "kd-loading-shade", null ] ], null, null, spinner_component_ngfactory.b, spinner_component_ngfactory.a)), core["ɵdid"](80, 114688, null, 0, spinner_component.a, [], {
                isLoading: [ 0, "isLoading" ]
            }, null), (_l()(), core["ɵeld"](81, 0, [ [ 1, 0 ], [ "logViewContainer", 1 ] ], null, 3, "div", [ [ "class", "kd-log-view-container" ] ], null, [ [ null, "scroll" ] ], (function(_v, en, $event) {
                var ad = !0;
                return "scroll" === en && (ad = !1 !== _v.component.onLogsScroll() && ad), ad;
            }), null, null)), (_l()(), core["ɵeld"](82, 0, null, null, 0, "div", [ [ "class", "kd-virtual-repeat-sizer" ] ], null, null, null, null, null)), (_l()(), 
            core["ɵand"](16777216, null, null, 1, null, View_LogsComponent_6)), core["ɵdid"](84, 278528, null, 0, common.NgForOf, [ core.ViewContainerRef, core.TemplateRef, core.IterableDiffers ], {
                ngForOf: [ 0, "ngForOf" ]
            }, null), (_l()(), core["ɵeld"](85, 0, null, null, 26, "div", [ [ "class", "kd-muted" ], [ "fxLayout", "row" ] ], null, null, null, null, null)), core["ɵdid"](86, 671744, null, 0, flex.d, [ core.ElementRef, esm2015_core.i, [ 2, flex.k ], esm2015_core.f ], {
                fxLayout: [ 0, "fxLayout" ]
            }, null), (_l()(), core["ɵand"](16777216, null, null, 1, null, View_LogsComponent_7)), core["ɵdid"](88, 16384, null, 0, common.NgIf, [ core.ViewContainerRef, core.TemplateRef ], {
                ngIf: [ 0, "ngIf" ]
            }, null), (_l()(), core["ɵeld"](89, 0, null, null, 1, "span", [ [ "fxFlex", "" ] ], null, null, null, null, null)), core["ɵdid"](90, 671744, null, 0, flex.b, [ core.ElementRef, esm2015_core.i, esm2015_core.e, flex.i, esm2015_core.f ], {
                fxFlex: [ 0, "fxFlex" ]
            }, null), (_l()(), core["ɵeld"](91, 0, null, null, 20, "div", [ [ "class", "kd-list-pagination-buttons" ] ], null, null, null, null, null)), (_l()(), 
            core["ɵeld"](92, 0, null, null, 4, "button", [ [ "mat-icon-button", "" ] ], [ [ 1, "disabled", 0 ], [ 2, "_mat-animation-noopable", null ] ], [ [ null, "click" ] ], (function(_v, en, $event) {
                var ad = !0;
                return "click" === en && (ad = !1 !== _v.component.loadOldest() && ad), ad;
            }), button_index_ngfactory.d, button_index_ngfactory.b)), core["ɵdid"](93, 180224, null, 0, fesm2015_button.b, [ core.ElementRef, a11y.f, [ 2, animations.a ] ], null, null), (_l()(), 
            core["ɵeld"](94, 0, null, 0, 2, "mat-icon", [ [ "class", "mat-icon notranslate" ], [ "role", "img" ] ], [ [ 2, "mat-icon-inline", null ], [ 2, "mat-icon-no-color", null ] ], null, null, icon_index_ngfactory.b, icon_index_ngfactory.a)), core["ɵdid"](95, 9158656, null, 0, icon.b, [ core.ElementRef, icon.d, [ 8, null ], [ 2, icon.a ], [ 2, core.ErrorHandler ] ], null, null), (_l()(), 
            core["ɵted"](-1, 0, [ "first_page" ])), (_l()(), core["ɵeld"](97, 0, null, null, 4, "button", [ [ "mat-icon-button", "" ] ], [ [ 1, "disabled", 0 ], [ 2, "_mat-animation-noopable", null ] ], [ [ null, "click" ] ], (function(_v, en, $event) {
                var ad = !0;
                return "click" === en && (ad = !1 !== _v.component.loadOlder() && ad), ad;
            }), button_index_ngfactory.d, button_index_ngfactory.b)), core["ɵdid"](98, 180224, null, 0, fesm2015_button.b, [ core.ElementRef, a11y.f, [ 2, animations.a ] ], null, null), (_l()(), 
            core["ɵeld"](99, 0, null, 0, 2, "mat-icon", [ [ "class", "mat-icon notranslate" ], [ "role", "img" ] ], [ [ 2, "mat-icon-inline", null ], [ 2, "mat-icon-no-color", null ] ], null, null, icon_index_ngfactory.b, icon_index_ngfactory.a)), core["ɵdid"](100, 9158656, null, 0, icon.b, [ core.ElementRef, icon.d, [ 8, null ], [ 2, icon.a ], [ 2, core.ErrorHandler ] ], null, null), (_l()(), 
            core["ɵted"](-1, 0, [ "chevron_left" ])), (_l()(), core["ɵeld"](102, 0, null, null, 4, "button", [ [ "mat-icon-button", "" ] ], [ [ 1, "disabled", 0 ], [ 2, "_mat-animation-noopable", null ] ], [ [ null, "click" ] ], (function(_v, en, $event) {
                var ad = !0;
                return "click" === en && (ad = !1 !== _v.component.loadNewer() && ad), ad;
            }), button_index_ngfactory.d, button_index_ngfactory.b)), core["ɵdid"](103, 180224, null, 0, fesm2015_button.b, [ core.ElementRef, a11y.f, [ 2, animations.a ] ], null, null), (_l()(), 
            core["ɵeld"](104, 0, null, 0, 2, "mat-icon", [ [ "class", "mat-icon notranslate" ], [ "role", "img" ] ], [ [ 2, "mat-icon-inline", null ], [ 2, "mat-icon-no-color", null ] ], null, null, icon_index_ngfactory.b, icon_index_ngfactory.a)), core["ɵdid"](105, 9158656, null, 0, icon.b, [ core.ElementRef, icon.d, [ 8, null ], [ 2, icon.a ], [ 2, core.ErrorHandler ] ], null, null), (_l()(), 
            core["ɵted"](-1, 0, [ "chevron_right" ])), (_l()(), core["ɵeld"](107, 0, null, null, 4, "button", [ [ "mat-icon-button", "" ] ], [ [ 1, "disabled", 0 ], [ 2, "_mat-animation-noopable", null ] ], [ [ null, "click" ] ], (function(_v, en, $event) {
                var ad = !0;
                return "click" === en && (ad = !1 !== _v.component.loadNewest() && ad), ad;
            }), button_index_ngfactory.d, button_index_ngfactory.b)), core["ɵdid"](108, 180224, null, 0, fesm2015_button.b, [ core.ElementRef, a11y.f, [ 2, animations.a ] ], null, null), (_l()(), 
            core["ɵeld"](109, 0, null, 0, 2, "mat-icon", [ [ "class", "mat-icon notranslate" ], [ "role", "img" ] ], [ [ 2, "mat-icon-inline", null ], [ 2, "mat-icon-no-color", null ] ], null, null, icon_index_ngfactory.b, icon_index_ngfactory.a)), core["ɵdid"](110, 9158656, null, 0, icon.b, [ core.ElementRef, icon.d, [ 8, null ], [ 2, icon.a ], [ 2, core.ErrorHandler ] ], null, null), (_l()(), 
            core["ɵted"](-1, 0, [ "last_page" ])), (_l()(), core["ɵeld"](112, 0, null, null, 48, "mat-menu", [], null, null, null, menu_index_ngfactory.d, menu_index_ngfactory.b)), core["ɵdid"](113, 1294336, [ [ "kdMenu", 4 ] ], 3, menu.h, [ core.ElementRef, core.NgZone, menu.a ], null, null), core["ɵqud"](603979776, 26, {
                _allItems: 1
            }), core["ɵqud"](603979776, 27, {
                items: 1
            }), core["ɵqud"](603979776, 28, {
                lazyContent: 0
            }), core["ɵprd"](2048, null, menu.d, null, [ menu.h ]), core["ɵprd"](2048, null, menu.b, null, [ menu.d ]), (_l()(), 
            core["ɵeld"](119, 0, null, 0, 6, "button", [ [ "class", "mat-menu-item" ], [ "mat-menu-item", "" ] ], [ [ 1, "role", 0 ], [ 2, "mat-menu-item-highlighted", null ], [ 2, "mat-menu-item-submenu-trigger", null ], [ 1, "tabindex", 0 ], [ 1, "aria-disabled", 0 ], [ 1, "disabled", 0 ] ], [ [ null, "click" ], [ null, "mouseenter" ] ], (function(_v, en, $event) {
                var ad = !0, _co = _v.component;
                return "click" === en && (ad = !1 !== core["ɵnov"](_v, 120)._checkDisabled($event) && ad), 
                "mouseenter" === en && (ad = !1 !== core["ɵnov"](_v, 120)._handleMouseEnter() && ad), 
                "click" === en && (ad = !1 !== _co.onTextColorChange() && ad), ad;
            }), menu_index_ngfactory.c, menu_index_ngfactory.a)), core["ɵdid"](120, 180224, [ [ 26, 4 ], [ 27, 4 ] ], 0, menu.e, [ core.ElementRef, common.DOCUMENT, a11y.f, [ 2, menu.b ] ], null, null), (_l()(), 
            core["ɵeld"](121, 0, null, 0, 2, "mat-icon", [ [ "class", "mat-icon notranslate" ], [ "role", "img" ] ], [ [ 2, "mat-icon-inline", null ], [ 2, "mat-icon-no-color", null ] ], null, null, icon_index_ngfactory.b, icon_index_ngfactory.a)), core["ɵdid"](122, 9158656, null, 0, icon.b, [ core.ElementRef, icon.d, [ 8, null ], [ 2, icon.a ], [ 2, core.ErrorHandler ] ], null, null), (_l()(), 
            core["ɵted"](123, 0, [ "", "" ])), (_l()(), core["ɵeld"](124, 0, null, 0, 1, "span", [], null, null, null, null, null)), (_l()(), 
            core["ɵted"](-1, null, [ "Invert colors" ])), (_l()(), core["ɵeld"](126, 0, null, 0, 6, "button", [ [ "class", "mat-menu-item" ], [ "mat-menu-item", "" ] ], [ [ 1, "role", 0 ], [ 2, "mat-menu-item-highlighted", null ], [ 2, "mat-menu-item-submenu-trigger", null ], [ 1, "tabindex", 0 ], [ 1, "aria-disabled", 0 ], [ 1, "disabled", 0 ] ], [ [ null, "click" ], [ null, "mouseenter" ] ], (function(_v, en, $event) {
                var ad = !0, _co = _v.component;
                return "click" === en && (ad = !1 !== core["ɵnov"](_v, 127)._checkDisabled($event) && ad), 
                "mouseenter" === en && (ad = !1 !== core["ɵnov"](_v, 127)._handleMouseEnter() && ad), 
                "click" === en && (ad = !1 !== _co.onFontSizeChange() && ad), ad;
            }), menu_index_ngfactory.c, menu_index_ngfactory.a)), core["ɵdid"](127, 180224, [ [ 26, 4 ], [ 27, 4 ] ], 0, menu.e, [ core.ElementRef, common.DOCUMENT, a11y.f, [ 2, menu.b ] ], null, null), (_l()(), 
            core["ɵeld"](128, 0, null, 0, 2, "mat-icon", [ [ "class", "mat-icon notranslate" ], [ "role", "img" ] ], [ [ 2, "mat-icon-inline", null ], [ 2, "mat-icon-no-color", null ] ], null, null, icon_index_ngfactory.b, icon_index_ngfactory.a)), core["ɵdid"](129, 9158656, null, 0, icon.b, [ core.ElementRef, icon.d, [ 8, null ], [ 2, icon.a ], [ 2, core.ErrorHandler ] ], null, null), (_l()(), 
            core["ɵted"](130, 0, [ "", "" ])), (_l()(), core["ɵeld"](131, 0, null, 0, 1, "span", [], null, null, null, null, null)), (_l()(), 
            core["ɵted"](-1, null, [ "Reduce font size" ])), (_l()(), core["ɵeld"](133, 0, null, 0, 6, "button", [ [ "class", "mat-menu-item" ], [ "mat-menu-item", "" ] ], [ [ 1, "role", 0 ], [ 2, "mat-menu-item-highlighted", null ], [ 2, "mat-menu-item-submenu-trigger", null ], [ 1, "tabindex", 0 ], [ 1, "aria-disabled", 0 ], [ 1, "disabled", 0 ] ], [ [ null, "click" ], [ null, "mouseenter" ] ], (function(_v, en, $event) {
                var ad = !0, _co = _v.component;
                return "click" === en && (ad = !1 !== core["ɵnov"](_v, 134)._checkDisabled($event) && ad), 
                "mouseenter" === en && (ad = !1 !== core["ɵnov"](_v, 134)._handleMouseEnter() && ad), 
                "click" === en && (ad = !1 !== _co.onShowTimestamp() && ad), ad;
            }), menu_index_ngfactory.c, menu_index_ngfactory.a)), core["ɵdid"](134, 180224, [ [ 26, 4 ], [ 27, 4 ] ], 0, menu.e, [ core.ElementRef, common.DOCUMENT, a11y.f, [ 2, menu.b ] ], null, null), (_l()(), 
            core["ɵeld"](135, 0, null, 0, 2, "mat-icon", [ [ "class", "mat-icon notranslate" ], [ "role", "img" ] ], [ [ 2, "mat-icon-inline", null ], [ 2, "mat-icon-no-color", null ] ], null, null, icon_index_ngfactory.b, icon_index_ngfactory.a)), core["ɵdid"](136, 9158656, null, 0, icon.b, [ core.ElementRef, icon.d, [ 8, null ], [ 2, icon.a ], [ 2, core.ErrorHandler ] ], null, null), (_l()(), 
            core["ɵted"](137, 0, [ "", "" ])), (_l()(), core["ɵeld"](138, 0, null, 0, 1, "span", [], null, null, null, null, null)), (_l()(), 
            core["ɵted"](-1, null, [ "Show timestamps" ])), (_l()(), core["ɵeld"](140, 0, null, 0, 6, "button", [ [ "class", "mat-menu-item" ], [ "mat-menu-item", "" ] ], [ [ 1, "role", 0 ], [ 2, "mat-menu-item-highlighted", null ], [ 2, "mat-menu-item-submenu-trigger", null ], [ 1, "tabindex", 0 ], [ 1, "aria-disabled", 0 ], [ 1, "disabled", 0 ] ], [ [ null, "click" ], [ null, "mouseenter" ] ], (function(_v, en, $event) {
                var ad = !0, _co = _v.component;
                return "click" === en && (ad = !1 !== core["ɵnov"](_v, 141)._checkDisabled($event) && ad), 
                "mouseenter" === en && (ad = !1 !== core["ɵnov"](_v, 141)._handleMouseEnter() && ad), 
                "click" === en && (ad = !1 !== _co.toggleLogAutoRefresh() && ad), ad;
            }), menu_index_ngfactory.c, menu_index_ngfactory.a)), core["ɵdid"](141, 180224, [ [ 26, 4 ], [ 27, 4 ] ], 0, menu.e, [ core.ElementRef, common.DOCUMENT, a11y.f, [ 2, menu.b ] ], null, null), (_l()(), 
            core["ɵeld"](142, 0, null, 0, 2, "mat-icon", [ [ "class", "mat-icon notranslate" ], [ "role", "img" ] ], [ [ 2, "mat-icon-inline", null ], [ 2, "mat-icon-no-color", null ] ], null, null, icon_index_ngfactory.b, icon_index_ngfactory.a)), core["ɵdid"](143, 9158656, null, 0, icon.b, [ core.ElementRef, icon.d, [ 8, null ], [ 2, icon.a ], [ 2, core.ErrorHandler ] ], null, null), (_l()(), 
            core["ɵted"](144, 0, [ "", "" ])), (_l()(), core["ɵeld"](145, 0, null, 0, 1, "span", [], null, null, null, null, null)), (_l()(), 
            core["ɵted"](146, null, [ "Auto-refresh (every ", " s.)" ])), (_l()(), core["ɵeld"](147, 0, null, 0, 6, "button", [ [ "class", "mat-menu-item" ], [ "mat-menu-item", "" ] ], [ [ 1, "role", 0 ], [ 2, "mat-menu-item-highlighted", null ], [ 2, "mat-menu-item-submenu-trigger", null ], [ 1, "tabindex", 0 ], [ 1, "aria-disabled", 0 ], [ 1, "disabled", 0 ] ], [ [ null, "click" ], [ null, "mouseenter" ] ], (function(_v, en, $event) {
                var ad = !0, _co = _v.component;
                return "click" === en && (ad = !1 !== core["ɵnov"](_v, 148)._checkDisabled($event) && ad), 
                "mouseenter" === en && (ad = !1 !== core["ɵnov"](_v, 148)._handleMouseEnter() && ad), 
                "click" === en && (ad = !1 !== _co.toggleLogFollow() && ad), ad;
            }), menu_index_ngfactory.c, menu_index_ngfactory.a)), core["ɵdid"](148, 180224, [ [ 26, 4 ], [ 27, 4 ] ], 0, menu.e, [ core.ElementRef, common.DOCUMENT, a11y.f, [ 2, menu.b ] ], null, null), (_l()(), 
            core["ɵeld"](149, 0, null, 0, 2, "mat-icon", [ [ "class", "mat-icon notranslate" ], [ "role", "img" ] ], [ [ 2, "mat-icon-inline", null ], [ 2, "mat-icon-no-color", null ] ], null, null, icon_index_ngfactory.b, icon_index_ngfactory.a)), core["ɵdid"](150, 9158656, null, 0, icon.b, [ core.ElementRef, icon.d, [ 8, null ], [ 2, icon.a ], [ 2, core.ErrorHandler ] ], null, null), (_l()(), 
            core["ɵted"](151, 0, [ "", "" ])), (_l()(), core["ɵeld"](152, 0, null, 0, 1, "span", [], null, null, null, null, null)), (_l()(), 
            core["ɵted"](-1, null, [ "Follow logs" ])), (_l()(), core["ɵeld"](154, 0, null, 0, 6, "button", [ [ "class", "mat-menu-item" ], [ "mat-menu-item", "" ] ], [ [ 1, "role", 0 ], [ 2, "mat-menu-item-highlighted", null ], [ 2, "mat-menu-item-submenu-trigger", null ], [ 1, "tabindex", 0 ], [ 1, "aria-disabled", 0 ], [ 1, "disabled", 0 ] ], [ [ null, "click" ], [ null, "mouseenter" ] ], (function(_v, en, $event) {
                var ad = !0, _co = _v.component;
                return "click" === en && (ad = !1 !== core["ɵnov"](_v, 155)._checkDisabled($event) && ad), 
                "mouseenter" === en && (ad = !1 !== core["ɵnov"](_v, 155)._handleMouseEnter() && ad), 
                "click" === en && (ad = !1 !== _co.onPreviousChange() && ad), ad;
            }), menu_index_ngfactory.c, menu_index_ngfactory.a)), core["ɵdid"](155, 180224, [ [ 26, 4 ], [ 27, 4 ] ], 0, menu.e, [ core.ElementRef, common.DOCUMENT, a11y.f, [ 2, menu.b ] ], null, null), (_l()(), 
            core["ɵeld"](156, 0, null, 0, 2, "mat-icon", [ [ "class", "mat-icon notranslate" ], [ "role", "img" ] ], [ [ 2, "mat-icon-inline", null ], [ 2, "mat-icon-no-color", null ] ], null, null, icon_index_ngfactory.b, icon_index_ngfactory.a)), core["ɵdid"](157, 9158656, null, 0, icon.b, [ core.ElementRef, icon.d, [ 8, null ], [ 2, icon.a ], [ 2, core.ErrorHandler ] ], null, null), (_l()(), 
            core["ɵted"](158, 0, [ "", "" ])), (_l()(), core["ɵeld"](159, 0, null, 0, 1, "span", [], null, null, null, null, null)), (_l()(), 
            core["ɵted"](-1, null, [ "Show previous logs" ])) ], (function(_ck, _v) {
                var _co = _v.component;
                _ck(_v, 4, 0, !1), _ck(_v, 6, 0, "row"), _ck(_v, 7, 0, 100), _ck(_v, 23, 0, _co.container), 
                _ck(_v, 26, 0), _ck(_v, 32, 0, (null == _co.logSources ? null : null == _co.logSources.containerNames ? null : _co.logSources.containerNames.length) > 0), 
                _ck(_v, 34, 0, (null == _co.logSources ? null : null == _co.logSources.initContainerNames ? null : _co.logSources.initContainerNames.length) > 0), 
                _ck(_v, 50, 0, _co.pod), _ck(_v, 53, 0), _ck(_v, 59, 0, null == _co.logSources ? null : _co.logSources.podNames), 
                _ck(_v, 63, 0, "Download logs"), _ck(_v, 65, 0), _ck(_v, 69, 0, core["ɵnov"](_v, 113)), 
                _ck(_v, 71, 0);
                var currVal_109 = _ck(_v, 76, 0, null == _co.logService ? null : _co.logService.getInverted(), !(null != _co.logService && _co.logService.getInverted()));
                _ck(_v, 75, 0, "kd-log-view", currVal_109);
                var currVal_110 = _ck(_v, 78, 0, null == _co.logService ? null : _co.logService.getInverted(), !(null != _co.logService && _co.logService.getInverted()));
                _ck(_v, 77, 0, currVal_110, "kd-log-view"), _ck(_v, 80, 0, _co.isLoading), _ck(_v, 84, 0, _co.logsSet), 
                _ck(_v, 86, 0, "row"), _ck(_v, 88, 0, (null == _co.logsSet ? null : _co.logsSet.length) > 1), 
                _ck(_v, 90, 0, ""), _ck(_v, 95, 0), _ck(_v, 100, 0), _ck(_v, 105, 0), _ck(_v, 110, 0), 
                _ck(_v, 113, 0), _ck(_v, 122, 0), _ck(_v, 129, 0), _ck(_v, 136, 0), _ck(_v, 143, 0), 
                _ck(_v, 150, 0), _ck(_v, 157, 0);
            }), (function(_ck, _v) {
                var _co = _v.component;
                _ck(_v, 10, 1, [ "standard" == core["ɵnov"](_v, 11).appearance, "fill" == core["ɵnov"](_v, 11).appearance, "outline" == core["ɵnov"](_v, 11).appearance, "legacy" == core["ɵnov"](_v, 11).appearance, core["ɵnov"](_v, 11)._control.errorState, core["ɵnov"](_v, 11)._canLabelFloat, core["ɵnov"](_v, 11)._shouldLabelFloat(), core["ɵnov"](_v, 11)._hasFloatingLabel(), core["ɵnov"](_v, 11)._hideControlPlaceholder(), core["ɵnov"](_v, 11)._control.disabled, core["ɵnov"](_v, 11)._control.autofilled, core["ɵnov"](_v, 11)._control.focused, "accent" == core["ɵnov"](_v, 11).color, "warn" == core["ɵnov"](_v, 11).color, core["ɵnov"](_v, 11)._shouldForward("untouched"), core["ɵnov"](_v, 11)._shouldForward("touched"), core["ɵnov"](_v, 11)._shouldForward("pristine"), core["ɵnov"](_v, 11)._shouldForward("dirty"), core["ɵnov"](_v, 11)._shouldForward("valid"), core["ɵnov"](_v, 11)._shouldForward("invalid"), core["ɵnov"](_v, 11)._shouldForward("pending"), !core["ɵnov"](_v, 11)._animationsEnabled ]), 
                _ck(_v, 21, 1, [ core["ɵnov"](_v, 25).ngClassUntouched, core["ɵnov"](_v, 25).ngClassTouched, core["ɵnov"](_v, 25).ngClassPristine, core["ɵnov"](_v, 25).ngClassDirty, core["ɵnov"](_v, 25).ngClassValid, core["ɵnov"](_v, 25).ngClassInvalid, core["ɵnov"](_v, 25).ngClassPending, core["ɵnov"](_v, 26).id, core["ɵnov"](_v, 26).tabIndex, core["ɵnov"](_v, 26)._getAriaLabel(), core["ɵnov"](_v, 26)._getAriaLabelledby(), core["ɵnov"](_v, 26).required.toString(), core["ɵnov"](_v, 26).disabled.toString(), core["ɵnov"](_v, 26).errorState, core["ɵnov"](_v, 26).panelOpen ? core["ɵnov"](_v, 26)._optionIds : null, core["ɵnov"](_v, 26).multiple, core["ɵnov"](_v, 26)._ariaDescribedby || null, core["ɵnov"](_v, 26)._getAriaActiveDescendant(), core["ɵnov"](_v, 26).disabled, core["ɵnov"](_v, 26).errorState, core["ɵnov"](_v, 26).required, core["ɵnov"](_v, 26).empty ]), 
                _ck(_v, 37, 1, [ "standard" == core["ɵnov"](_v, 38).appearance, "fill" == core["ɵnov"](_v, 38).appearance, "outline" == core["ɵnov"](_v, 38).appearance, "legacy" == core["ɵnov"](_v, 38).appearance, core["ɵnov"](_v, 38)._control.errorState, core["ɵnov"](_v, 38)._canLabelFloat, core["ɵnov"](_v, 38)._shouldLabelFloat(), core["ɵnov"](_v, 38)._hasFloatingLabel(), core["ɵnov"](_v, 38)._hideControlPlaceholder(), core["ɵnov"](_v, 38)._control.disabled, core["ɵnov"](_v, 38)._control.autofilled, core["ɵnov"](_v, 38)._control.focused, "accent" == core["ɵnov"](_v, 38).color, "warn" == core["ɵnov"](_v, 38).color, core["ɵnov"](_v, 38)._shouldForward("untouched"), core["ɵnov"](_v, 38)._shouldForward("touched"), core["ɵnov"](_v, 38)._shouldForward("pristine"), core["ɵnov"](_v, 38)._shouldForward("dirty"), core["ɵnov"](_v, 38)._shouldForward("valid"), core["ɵnov"](_v, 38)._shouldForward("invalid"), core["ɵnov"](_v, 38)._shouldForward("pending"), !core["ɵnov"](_v, 38)._animationsEnabled ]), 
                _ck(_v, 48, 1, [ core["ɵnov"](_v, 52).ngClassUntouched, core["ɵnov"](_v, 52).ngClassTouched, core["ɵnov"](_v, 52).ngClassPristine, core["ɵnov"](_v, 52).ngClassDirty, core["ɵnov"](_v, 52).ngClassValid, core["ɵnov"](_v, 52).ngClassInvalid, core["ɵnov"](_v, 52).ngClassPending, core["ɵnov"](_v, 53).id, core["ɵnov"](_v, 53).tabIndex, core["ɵnov"](_v, 53)._getAriaLabel(), core["ɵnov"](_v, 53)._getAriaLabelledby(), core["ɵnov"](_v, 53).required.toString(), core["ɵnov"](_v, 53).disabled.toString(), core["ɵnov"](_v, 53).errorState, core["ɵnov"](_v, 53).panelOpen ? core["ɵnov"](_v, 53)._optionIds : null, core["ɵnov"](_v, 53).multiple, core["ɵnov"](_v, 53)._ariaDescribedby || null, core["ɵnov"](_v, 53)._getAriaActiveDescendant(), core["ɵnov"](_v, 53).disabled, core["ɵnov"](_v, 53).errorState, core["ɵnov"](_v, 53).required, core["ɵnov"](_v, 53).empty ]), 
                _ck(_v, 61, 0, core["ɵnov"](_v, 62).disabled || null, "NoopAnimations" === core["ɵnov"](_v, 62)._animationMode), 
                _ck(_v, 64, 0, core["ɵnov"](_v, 65).inline, "primary" !== core["ɵnov"](_v, 65).color && "accent" !== core["ɵnov"](_v, 65).color && "warn" !== core["ɵnov"](_v, 65).color), 
                _ck(_v, 67, 0, core["ɵnov"](_v, 68).disabled || null, "NoopAnimations" === core["ɵnov"](_v, 68)._animationMode, core["ɵnov"](_v, 69).menuOpen || null, core["ɵnov"](_v, 69).menuOpen ? core["ɵnov"](_v, 69).menu.panelId : null), 
                _ck(_v, 70, 0, core["ɵnov"](_v, 71).inline, "primary" !== core["ɵnov"](_v, 71).color && "accent" !== core["ɵnov"](_v, 71).color && "warn" !== core["ɵnov"](_v, 71).color), 
                _ck(_v, 79, 0, core["ɵnov"](_v, 80).isLoading), _ck(_v, 92, 0, core["ɵnov"](_v, 93).disabled || null, "NoopAnimations" === core["ɵnov"](_v, 93)._animationMode), 
                _ck(_v, 94, 0, core["ɵnov"](_v, 95).inline, "primary" !== core["ɵnov"](_v, 95).color && "accent" !== core["ɵnov"](_v, 95).color && "warn" !== core["ɵnov"](_v, 95).color), 
                _ck(_v, 97, 0, core["ɵnov"](_v, 98).disabled || null, "NoopAnimations" === core["ɵnov"](_v, 98)._animationMode), 
                _ck(_v, 99, 0, core["ɵnov"](_v, 100).inline, "primary" !== core["ɵnov"](_v, 100).color && "accent" !== core["ɵnov"](_v, 100).color && "warn" !== core["ɵnov"](_v, 100).color), 
                _ck(_v, 102, 0, core["ɵnov"](_v, 103).disabled || null, "NoopAnimations" === core["ɵnov"](_v, 103)._animationMode), 
                _ck(_v, 104, 0, core["ɵnov"](_v, 105).inline, "primary" !== core["ɵnov"](_v, 105).color && "accent" !== core["ɵnov"](_v, 105).color && "warn" !== core["ɵnov"](_v, 105).color), 
                _ck(_v, 107, 0, core["ɵnov"](_v, 108).disabled || null, "NoopAnimations" === core["ɵnov"](_v, 108)._animationMode), 
                _ck(_v, 109, 0, core["ɵnov"](_v, 110).inline, "primary" !== core["ɵnov"](_v, 110).color && "accent" !== core["ɵnov"](_v, 110).color && "warn" !== core["ɵnov"](_v, 110).color), 
                _ck(_v, 119, 0, core["ɵnov"](_v, 120).role, core["ɵnov"](_v, 120)._highlighted, core["ɵnov"](_v, 120)._triggersSubmenu, core["ɵnov"](_v, 120)._getTabIndex(), core["ɵnov"](_v, 120).disabled.toString(), core["ɵnov"](_v, 120).disabled || null), 
                _ck(_v, 121, 0, core["ɵnov"](_v, 122).inline, "primary" !== core["ɵnov"](_v, 122).color && "accent" !== core["ɵnov"](_v, 122).color && "warn" !== core["ɵnov"](_v, 122).color), 
                _ck(_v, 123, 0, null != _co.logService && _co.logService.getInverted() ? "check_box" : "check_box_outline_blank"), 
                _ck(_v, 126, 0, core["ɵnov"](_v, 127).role, core["ɵnov"](_v, 127)._highlighted, core["ɵnov"](_v, 127)._triggersSubmenu, core["ɵnov"](_v, 127)._getTabIndex(), core["ɵnov"](_v, 127).disabled.toString(), core["ɵnov"](_v, 127).disabled || null), 
                _ck(_v, 128, 0, core["ɵnov"](_v, 129).inline, "primary" !== core["ɵnov"](_v, 129).color && "accent" !== core["ɵnov"](_v, 129).color && "warn" !== core["ɵnov"](_v, 129).color), 
                _ck(_v, 130, 0, _co.logService.getCompact() ? "check_box" : "check_box_outline_blank"), 
                _ck(_v, 133, 0, core["ɵnov"](_v, 134).role, core["ɵnov"](_v, 134)._highlighted, core["ɵnov"](_v, 134)._triggersSubmenu, core["ɵnov"](_v, 134)._getTabIndex(), core["ɵnov"](_v, 134).disabled.toString(), core["ɵnov"](_v, 134).disabled || null), 
                _ck(_v, 135, 0, core["ɵnov"](_v, 136).inline, "primary" !== core["ɵnov"](_v, 136).color && "accent" !== core["ɵnov"](_v, 136).color && "warn" !== core["ɵnov"](_v, 136).color), 
                _ck(_v, 137, 0, _co.logService.getShowTimestamp() ? "check_box" : "check_box_outline_blank"), 
                _ck(_v, 140, 0, core["ɵnov"](_v, 141).role, core["ɵnov"](_v, 141)._highlighted, core["ɵnov"](_v, 141)._triggersSubmenu, core["ɵnov"](_v, 141)._getTabIndex(), core["ɵnov"](_v, 141).disabled.toString(), core["ɵnov"](_v, 141).disabled || null), 
                _ck(_v, 142, 0, core["ɵnov"](_v, 143).inline, "primary" !== core["ɵnov"](_v, 143).color && "accent" !== core["ɵnov"](_v, 143).color && "warn" !== core["ɵnov"](_v, 143).color), 
                _ck(_v, 144, 0, _co.logService.getAutoRefresh() ? "check_box" : "check_box_outline_blank"), 
                _ck(_v, 146, 0, _co.refreshInterval / 1e3), _ck(_v, 147, 0, core["ɵnov"](_v, 148).role, core["ɵnov"](_v, 148)._highlighted, core["ɵnov"](_v, 148)._triggersSubmenu, core["ɵnov"](_v, 148)._getTabIndex(), core["ɵnov"](_v, 148).disabled.toString(), core["ɵnov"](_v, 148).disabled || null), 
                _ck(_v, 149, 0, core["ɵnov"](_v, 150).inline, "primary" !== core["ɵnov"](_v, 150).color && "accent" !== core["ɵnov"](_v, 150).color && "warn" !== core["ɵnov"](_v, 150).color), 
                _ck(_v, 151, 0, _co.logService.getFollowing() ? "check_box" : "check_box_outline_blank"), 
                _ck(_v, 154, 0, core["ɵnov"](_v, 155).role, core["ɵnov"](_v, 155)._highlighted, core["ɵnov"](_v, 155)._triggersSubmenu, core["ɵnov"](_v, 155)._getTabIndex(), core["ɵnov"](_v, 155).disabled.toString(), core["ɵnov"](_v, 155).disabled || null), 
                _ck(_v, 156, 0, core["ɵnov"](_v, 157).inline, "primary" !== core["ɵnov"](_v, 157).color && "accent" !== core["ɵnov"](_v, 157).color && "warn" !== core["ɵnov"](_v, 157).color), 
                _ck(_v, 158, 0, _co.logService.getPrevious() ? "check_box" : "check_box_outline_blank");
            }));
        }
        function View_LogsComponent_Host_0(_l) {
            return core["ɵvid"](0, [ (_l()(), core["ɵeld"](0, 0, null, null, 1, "kd-logs", [], null, null, null, View_LogsComponent_0, RenderType_LogsComponent)), core["ɵdid"](1, 180224, null, 0, component_LogsComponent, [ logs.a, router.ActivatedRoute, globalsettings.a, fesm2015_dialog.e, notifications.b, router.Router ], null, null) ], null, null);
        }
        var LogsComponentNgFactory = core["ɵccf"]("kd-logs", component_LogsComponent, View_LogsComponent_Host_0, {}, {}, []), observers = __webpack_require__("9b/N"), sort = __webpack_require__("LUZP"), paginator = __webpack_require__("5QHs"), ngx_filter_pipe = __webpack_require__("4muW"), card = __webpack_require__("PDjf"), fesm2015_checkbox = __webpack_require__("pMoy"), divider = __webpack_require__("BSbQ"), grid_list = __webpack_require__("40+f"), text_field = __webpack_require__("8sFK"), input = __webpack_require__("e6WT"), progress_spinner = __webpack_require__("pu8Q"), progress_bar = __webpack_require__("BTe0"), fesm2015_radio = __webpack_require__("zQhy"), sidenav = __webpack_require__("q7Ft"), toolbar = __webpack_require__("l0rg"), portal = __webpack_require__("1z/I"), slider = __webpack_require__("mPVK"), slide_toggle = __webpack_require__("jMqV"), chips = __webpack_require__("f44v"), table = __webpack_require__("GXRp"), fesm2015_table = __webpack_require__("OaSA"), tabs = __webpack_require__("M9ds"), button_toggle = __webpack_require__("Ynp+"), snack_bar = __webpack_require__("zHaW"), grid = __webpack_require__("Nhcz"), flex_layout = __webpack_require__("u9T3"), src_module = __webpack_require__("o6Sk"), pipes_module = __webpack_require__("I7rD"), shared_module = __webpack_require__("MnlZ"), components_module = __webpack_require__("PXUV");
        const ɵ0 = {
            breadcrumb: "Logs",
            parent: __webpack_require__("Y4Kv").c
        };
        class LogsRoutingModule {}
        var keycodes = __webpack_require__("Ht+U");
        __webpack_require__.d(__webpack_exports__, "LogsModuleNgFactory", (function() {
            return LogsModuleNgFactory;
        }));
        var LogsModuleNgFactory = core["ɵcmf"](LogsModule, [], (function(_l) {
            return core["ɵmod"]([ core["ɵmpd"](512, core.ComponentFactoryResolver, core["ɵCodegenComponentFactoryResolver"], [ [ 8, [ index_ngfactory.a, dialog_index_ngfactory.a, snack_bar_index_ngfactory.a, snack_bar_index_ngfactory.b, router_ngfactory.a, dialog_ngfactory.a, component_ngfactory.a, menu_component_ngfactory.a, changedialog_dialog_ngfactory.a, LogsComponentNgFactory ] ], [ 3, core.ComponentFactoryResolver ], core.NgModuleRef ]), core["ɵmpd"](4608, common.NgLocalization, common.NgLocaleLocalization, [ core.LOCALE_ID ]), core["ɵmpd"](4608, fesm2015_forms["ɵangular_packages_forms_forms_n"], fesm2015_forms["ɵangular_packages_forms_forms_n"], []), core["ɵmpd"](4608, fesm2015_forms.FormBuilder, fesm2015_forms.FormBuilder, []), core["ɵmpd"](4608, observers.c, observers.c, []), core["ɵmpd"](4608, fesm2015_core.d, fesm2015_core.d, []), core["ɵmpd"](4608, overlay.c, overlay.c, [ overlay.i, overlay.e, core.ComponentFactoryResolver, overlay.h, overlay.f, core.Injector, core.NgZone, common.DOCUMENT, bidi.b, [ 2, common.Location ] ]), core["ɵmpd"](5120, overlay.j, overlay.k, [ overlay.c ]), core["ɵmpd"](5120, tooltip.b, tooltip.c, [ overlay.c ]), core["ɵmpd"](5120, fesm2015_dialog.c, fesm2015_dialog.d, [ overlay.c ]), core["ɵmpd"](135680, fesm2015_dialog.e, fesm2015_dialog.e, [ overlay.c, core.Injector, [ 2, common.Location ], [ 2, fesm2015_dialog.b ], fesm2015_dialog.c, [ 3, fesm2015_dialog.e ], overlay.e ]), core["ɵmpd"](5120, sort.d, sort.a, [ [ 3, sort.d ] ]), core["ɵmpd"](5120, fesm2015_select.a, fesm2015_select.b, [ overlay.c ]), core["ɵmpd"](5120, paginator.c, paginator.a, [ [ 3, paginator.c ] ]), core["ɵmpd"](5120, menu.c, menu.j, [ overlay.c ]), core["ɵmpd"](5120, core.APP_BOOTSTRAP_LISTENER, (function(p0_0, p0_1) {
                return [ esm2015_core.j(p0_0, p0_1) ];
            }), [ common.DOCUMENT, core.PLATFORM_ID ]), core["ɵmpd"](4608, ngx_filter_pipe.a, ngx_filter_pipe.a, []), core["ɵmpd"](1073742336, common.CommonModule, common.CommonModule, []), core["ɵmpd"](1073742336, fesm2015_forms["ɵangular_packages_forms_forms_d"], fesm2015_forms["ɵangular_packages_forms_forms_d"], []), core["ɵmpd"](1073742336, fesm2015_forms.FormsModule, fesm2015_forms.FormsModule, []), core["ɵmpd"](1073742336, fesm2015_forms.ReactiveFormsModule, fesm2015_forms.ReactiveFormsModule, []), core["ɵmpd"](1073742336, bidi.a, bidi.a, []), core["ɵmpd"](1073742336, fesm2015_core.l, fesm2015_core.l, [ a11y.h, [ 2, fesm2015_core.e ] ]), core["ɵmpd"](1073742336, platform.b, platform.b, []), core["ɵmpd"](1073742336, fesm2015_core.u, fesm2015_core.u, []), core["ɵmpd"](1073742336, fesm2015_button.c, fesm2015_button.c, []), core["ɵmpd"](1073742336, card.e, card.e, []), core["ɵmpd"](1073742336, observers.d, observers.d, []), core["ɵmpd"](1073742336, fesm2015_checkbox.e, fesm2015_checkbox.e, []), core["ɵmpd"](1073742336, fesm2015_checkbox.d, fesm2015_checkbox.d, []), core["ɵmpd"](1073742336, divider.b, divider.b, []), core["ɵmpd"](1073742336, fesm2015_core.m, fesm2015_core.m, []), core["ɵmpd"](1073742336, grid_list.a, grid_list.a, []), core["ɵmpd"](1073742336, form_field.e, form_field.e, []), core["ɵmpd"](1073742336, icon.c, icon.c, []), core["ɵmpd"](1073742336, text_field.c, text_field.c, []), core["ɵmpd"](1073742336, input.b, input.b, []), core["ɵmpd"](1073742336, progress_spinner.c, progress_spinner.c, []), core["ɵmpd"](1073742336, progress_bar.c, progress_bar.c, []), core["ɵmpd"](1073742336, fesm2015_radio.d, fesm2015_radio.d, []), core["ɵmpd"](1073742336, scrolling.c, scrolling.c, []), core["ɵmpd"](1073742336, sidenav.h, sidenav.h, []), core["ɵmpd"](1073742336, toolbar.b, toolbar.b, []), core["ɵmpd"](1073742336, a11y.a, a11y.a, [ a11y.h ]), core["ɵmpd"](1073742336, portal.g, portal.g, []), core["ɵmpd"](1073742336, overlay.g, overlay.g, []), core["ɵmpd"](1073742336, tooltip.e, tooltip.e, []), core["ɵmpd"](1073742336, slider.b, slider.b, []), core["ɵmpd"](1073742336, fesm2015_dialog.k, fesm2015_dialog.k, []), core["ɵmpd"](1073742336, slide_toggle.d, slide_toggle.d, []), core["ɵmpd"](1073742336, slide_toggle.c, slide_toggle.c, []), core["ɵmpd"](1073742336, chips.d, chips.d, []), core["ɵmpd"](1073742336, table.p, table.p, []), core["ɵmpd"](1073742336, fesm2015_table.m, fesm2015_table.m, []), core["ɵmpd"](1073742336, sort.e, sort.e, []), core["ɵmpd"](1073742336, fesm2015_core.s, fesm2015_core.s, []), core["ɵmpd"](1073742336, fesm2015_core.q, fesm2015_core.q, []), core["ɵmpd"](1073742336, fesm2015_select.d, fesm2015_select.d, []), core["ɵmpd"](1073742336, paginator.d, paginator.d, []), core["ɵmpd"](1073742336, tabs.k, tabs.k, []), core["ɵmpd"](1073742336, menu.i, menu.i, []), core["ɵmpd"](1073742336, menu.f, menu.f, []), core["ɵmpd"](1073742336, button_toggle.e, button_toggle.e, []), core["ɵmpd"](1073742336, snack_bar.e, snack_bar.e, []), core["ɵmpd"](1073742336, esm2015_core.c, esm2015_core.c, []), core["ɵmpd"](1073742336, flex.h, flex.h, []), core["ɵmpd"](1073742336, extended.b, extended.b, []), core["ɵmpd"](1073742336, grid.a, grid.a, []), core["ɵmpd"](1073742336, flex_layout.a, flex_layout.a, [ [ 2, esm2015_core.g ], core.PLATFORM_ID ]), core["ɵmpd"](1073742336, router.RouterModule, router.RouterModule, [ [ 2, router["ɵangular_packages_router_router_a"] ], [ 2, router.Router ] ]), core["ɵmpd"](1073742336, src_module.a, src_module.a, []), core["ɵmpd"](1073742336, ngx_filter_pipe.b, ngx_filter_pipe.b, []), core["ɵmpd"](1073742336, pipes_module.a, pipes_module.a, []), core["ɵmpd"](1073742336, shared_module.a, shared_module.a, []), core["ɵmpd"](1073742336, components_module.a, components_module.a, []), core["ɵmpd"](1073742336, LogsRoutingModule, LogsRoutingModule, []), core["ɵmpd"](1073742336, LogsModule, LogsModule, []), core["ɵmpd"](256, chips.a, {
                separatorKeyCodes: [ keycodes.f ]
            }, []), core["ɵmpd"](256, tooltip.a, shared_module.b, []), core["ɵmpd"](1024, router.ROUTES, (function() {
                return [ [ {
                    path: ":resourceNamespace/:resourceName/:resourceType",
                    component: component_LogsComponent,
                    data: ɵ0
                } ] ];
            }), []) ]);
        }));
    },
    zTgR: function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.d(__webpack_exports__, "a", (function() {
            return RenderType_LoadingSpinner;
        })), __webpack_require__.d(__webpack_exports__, "b", (function() {
            return View_LoadingSpinner_0;
        }));
        var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("8Y7J"), _node_modules_angular_material_progress_spinner_index_ngfactory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("oBbD"), _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("pu8Q"), _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("SCoL"), _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("SVse"), _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("omvX"), RenderType_LoadingSpinner = (__webpack_require__("4uYH"), 
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcrt"]({
            encapsulation: 2,
            styles: [],
            data: {}
        }));
        function View_LoadingSpinner_1(_l) {
            return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [ (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "mat-spinner", [ [ "class", "mat-spinner mat-progress-spinner" ], [ "mode", "indeterminate" ], [ "role", "progressbar" ] ], [ [ 2, "_mat-animation-noopable", null ], [ 4, "width", "px" ], [ 4, "height", "px" ] ], null, null, _node_modules_angular_material_progress_spinner_index_ngfactory__WEBPACK_IMPORTED_MODULE_1__.d, _node_modules_angular_material_progress_spinner_index_ngfactory__WEBPACK_IMPORTED_MODULE_1__.b)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 114688, null, 0, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_2__.d, [ _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef, _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_3__.a, [ 2, _angular_common__WEBPACK_IMPORTED_MODULE_4__.DOCUMENT ], [ 2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__.a ], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_2__.a ], null, null) ], (function(_ck, _v) {
                _ck(_v, 1, 0);
            }), (function(_ck, _v) {
                _ck(_v, 0, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 1)._noopAnimations, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 1).diameter, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 1).diameter);
            }));
        }
        function View_LoadingSpinner_0(_l) {
            return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [ (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_LoadingSpinner_1)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, [ _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewContainerRef, _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef ], {
                ngIf: [ 0, "ngIf" ]
            }, null) ], (function(_ck, _v) {
                _ck(_v, 1, 0, _v.component.isLoading);
            }), null);
        }
    }
} ]);
//# sourceMappingURL=logs-module-ngfactory.js.map