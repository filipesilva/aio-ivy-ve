(window.webpackJsonp = window.webpackJsonp || []).push([ [ 51 ], {
    RoEW: function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        var core = __webpack_require__("8Y7J");
        class SettingsModule {}
        var index_ngfactory = __webpack_require__("ntJQ"), dialog_index_ngfactory = __webpack_require__("9cE2"), snack_bar_index_ngfactory = __webpack_require__("007U"), router_ngfactory = __webpack_require__("pMnS"), dialog_ngfactory = __webpack_require__("wyY1"), component_ngfactory = __webpack_require__("HrBQ"), menu_component_ngfactory = __webpack_require__("Shg9"), changedialog_dialog_ngfactory = __webpack_require__("rO67"), card_component_ngfactory = __webpack_require__("bLTg"), component = __webpack_require__("TN1b"), fesm2015_forms = __webpack_require__("s7LF"), flex = __webpack_require__("VDRc"), esm2015_core = __webpack_require__("/q54");
        class SettingsEntryComponent {}
        var RenderType_SettingsEntryComponent = core["ɵcrt"]({
            encapsulation: 2,
            styles: [],
            data: {}
        });
        function View_SettingsEntryComponent_0(_l) {
            return core["ɵvid"](0, [ (_l()(), core["ɵeld"](0, 0, null, null, 7, "div", [ [ "fxFlex", "" ], [ "fxLayout", "column" ], [ "fxLayoutAlign", "center none" ] ], null, null, null, null, null)), core["ɵdid"](1, 671744, null, 0, flex.d, [ core.ElementRef, esm2015_core.i, [ 2, flex.k ], esm2015_core.f ], {
                fxLayout: [ 0, "fxLayout" ]
            }, null), core["ɵdid"](2, 671744, null, 0, flex.c, [ core.ElementRef, esm2015_core.i, [ 2, flex.j ], esm2015_core.f ], {
                fxLayoutAlign: [ 0, "fxLayoutAlign" ]
            }, null), core["ɵdid"](3, 671744, null, 0, flex.b, [ core.ElementRef, esm2015_core.i, esm2015_core.e, flex.i, esm2015_core.f ], {
                fxFlex: [ 0, "fxFlex" ]
            }, null), (_l()(), core["ɵeld"](4, 0, null, null, 1, "div", [], null, null, null, null, null)), (_l()(), 
            core["ɵted"](5, null, [ "", "" ])), (_l()(), core["ɵeld"](6, 0, null, null, 1, "div", [ [ "class", "kd-muted" ] ], null, null, null, null, null)), (_l()(), 
            core["ɵted"](7, null, [ "", "" ])), core["ɵncd"](null, 0) ], (function(_ck, _v) {
                _ck(_v, 1, 0, "column"), _ck(_v, 2, 0, "center none"), _ck(_v, 3, 0, "");
            }), (function(_ck, _v) {
                var _co = _v.component;
                _ck(_v, 5, 0, _co.key), _ck(_v, 7, 0, _co.desc);
            }));
        }
        var form_field_index_ngfactory = __webpack_require__("H3DK"), form_field = __webpack_require__("Q2Ze"), fesm2015_core = __webpack_require__("UhP/"), bidi = __webpack_require__("9gLZ"), platform = __webpack_require__("SCoL"), animations = __webpack_require__("omvX"), input = __webpack_require__("e6WT"), text_field = __webpack_require__("8sFK"), slider = __webpack_require__("mPVK"), common = __webpack_require__("SVse"), a11y = __webpack_require__("YEUz"), RenderType_MatSlider = core["ɵcrt"]({
            encapsulation: 2,
            styles: [ '.mat-slider{display:inline-block;position:relative;box-sizing:border-box;padding:8px;outline:none;vertical-align:middle}.mat-slider:not(.mat-slider-disabled):active,.mat-slider.mat-slider-sliding:not(.mat-slider-disabled){cursor:-webkit-grabbing;cursor:grabbing}.mat-slider-wrapper{position:absolute}.mat-slider-track-wrapper{position:absolute;top:0;left:0;overflow:hidden}.mat-slider-track-fill{position:absolute;transform-origin:0 0;transition:transform 400ms cubic-bezier(0.25, 0.8, 0.25, 1),background-color 400ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-slider-track-background{position:absolute;transform-origin:100% 100%;transition:transform 400ms cubic-bezier(0.25, 0.8, 0.25, 1),background-color 400ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-slider-ticks-container{position:absolute;left:0;top:0;overflow:hidden}.mat-slider-ticks{background-repeat:repeat;background-clip:content-box;box-sizing:border-box;opacity:0;transition:opacity 400ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-slider-thumb-container{position:absolute;z-index:1;transition:transform 400ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-slider-focus-ring{position:absolute;width:30px;height:30px;border-radius:50%;transform:scale(0);opacity:0;transition:transform 400ms cubic-bezier(0.25, 0.8, 0.25, 1),background-color 400ms cubic-bezier(0.25, 0.8, 0.25, 1),opacity 400ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-slider.cdk-keyboard-focused .mat-slider-focus-ring,.mat-slider.cdk-program-focused .mat-slider-focus-ring{transform:scale(1);opacity:1}.mat-slider:not(.mat-slider-disabled):not(.mat-slider-sliding) .mat-slider-thumb-label,.mat-slider:not(.mat-slider-disabled):not(.mat-slider-sliding) .mat-slider-thumb{cursor:-webkit-grab;cursor:grab}.mat-slider-thumb{position:absolute;right:-10px;bottom:-10px;box-sizing:border-box;width:20px;height:20px;border:3px solid transparent;border-radius:50%;transform:scale(0.7);transition:transform 400ms cubic-bezier(0.25, 0.8, 0.25, 1),background-color 400ms cubic-bezier(0.25, 0.8, 0.25, 1),border-color 400ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-slider-thumb-label{display:none;align-items:center;justify-content:center;position:absolute;width:28px;height:28px;border-radius:50%;transition:transform 400ms cubic-bezier(0.25, 0.8, 0.25, 1),border-radius 400ms cubic-bezier(0.25, 0.8, 0.25, 1),background-color 400ms cubic-bezier(0.25, 0.8, 0.25, 1)}.cdk-high-contrast-active .mat-slider-thumb-label{outline:solid 1px}.mat-slider-thumb-label-text{z-index:1;opacity:0;transition:opacity 400ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-slider-sliding .mat-slider-track-fill,.mat-slider-sliding .mat-slider-track-background,.mat-slider-sliding .mat-slider-thumb-container{transition-duration:0ms}.mat-slider-has-ticks .mat-slider-wrapper::after{content:"";position:absolute;border-width:0;border-style:solid;opacity:0;transition:opacity 400ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-slider-has-ticks.cdk-focused:not(.mat-slider-hide-last-tick) .mat-slider-wrapper::after,.mat-slider-has-ticks:hover:not(.mat-slider-hide-last-tick) .mat-slider-wrapper::after{opacity:1}.mat-slider-has-ticks.cdk-focused:not(.mat-slider-disabled) .mat-slider-ticks,.mat-slider-has-ticks:hover:not(.mat-slider-disabled) .mat-slider-ticks{opacity:1}.mat-slider-thumb-label-showing .mat-slider-focus-ring{display:none}.mat-slider-thumb-label-showing .mat-slider-thumb-label{display:flex}.mat-slider-axis-inverted .mat-slider-track-fill{transform-origin:100% 100%}.mat-slider-axis-inverted .mat-slider-track-background{transform-origin:0 0}.mat-slider:not(.mat-slider-disabled).cdk-focused.mat-slider-thumb-label-showing .mat-slider-thumb{transform:scale(0)}.mat-slider:not(.mat-slider-disabled).cdk-focused .mat-slider-thumb-label{border-radius:50% 50% 0}.mat-slider:not(.mat-slider-disabled).cdk-focused .mat-slider-thumb-label-text{opacity:1}.mat-slider:not(.mat-slider-disabled).cdk-mouse-focused .mat-slider-thumb,.mat-slider:not(.mat-slider-disabled).cdk-touch-focused .mat-slider-thumb,.mat-slider:not(.mat-slider-disabled).cdk-program-focused .mat-slider-thumb{border-width:2px;transform:scale(1)}.mat-slider-disabled .mat-slider-focus-ring{transform:scale(0);opacity:0}.mat-slider-disabled .mat-slider-thumb{border-width:4px;transform:scale(0.5)}.mat-slider-disabled .mat-slider-thumb-label{display:none}.mat-slider-horizontal{height:48px;min-width:128px}.mat-slider-horizontal .mat-slider-wrapper{height:2px;top:23px;left:8px;right:8px}.mat-slider-horizontal .mat-slider-wrapper::after{height:2px;border-left-width:2px;right:0;top:0}.mat-slider-horizontal .mat-slider-track-wrapper{height:2px;width:100%}.mat-slider-horizontal .mat-slider-track-fill{height:2px;width:100%;transform:scaleX(0)}.mat-slider-horizontal .mat-slider-track-background{height:2px;width:100%;transform:scaleX(1)}.mat-slider-horizontal .mat-slider-ticks-container{height:2px;width:100%}.cdk-high-contrast-active .mat-slider-horizontal .mat-slider-ticks-container{height:0;outline:solid 2px;top:1px}.mat-slider-horizontal .mat-slider-ticks{height:2px;width:100%}.mat-slider-horizontal .mat-slider-thumb-container{width:100%;height:0;top:50%}.mat-slider-horizontal .mat-slider-focus-ring{top:-15px;right:-15px}.mat-slider-horizontal .mat-slider-thumb-label{right:-14px;top:-40px;transform:translateY(26px) scale(0.01) rotate(45deg)}.mat-slider-horizontal .mat-slider-thumb-label-text{transform:rotate(-45deg)}.mat-slider-horizontal.cdk-focused .mat-slider-thumb-label{transform:rotate(45deg)}.cdk-high-contrast-active .mat-slider-horizontal.cdk-focused .mat-slider-thumb-label,.cdk-high-contrast-active .mat-slider-horizontal.cdk-focused .mat-slider-thumb-label-text{transform:none}.mat-slider-vertical{width:48px;min-height:128px}.mat-slider-vertical .mat-slider-wrapper{width:2px;top:8px;bottom:8px;left:23px}.mat-slider-vertical .mat-slider-wrapper::after{width:2px;border-top-width:2px;bottom:0;left:0}.mat-slider-vertical .mat-slider-track-wrapper{height:100%;width:2px}.mat-slider-vertical .mat-slider-track-fill{height:100%;width:2px;transform:scaleY(0)}.mat-slider-vertical .mat-slider-track-background{height:100%;width:2px;transform:scaleY(1)}.mat-slider-vertical .mat-slider-ticks-container{width:2px;height:100%}.cdk-high-contrast-active .mat-slider-vertical .mat-slider-ticks-container{width:0;outline:solid 2px;left:1px}.mat-slider-vertical .mat-slider-focus-ring{bottom:-15px;left:-15px}.mat-slider-vertical .mat-slider-ticks{width:2px;height:100%}.mat-slider-vertical .mat-slider-thumb-container{height:100%;width:0;left:50%}.mat-slider-vertical .mat-slider-thumb{-webkit-backface-visibility:hidden;backface-visibility:hidden}.mat-slider-vertical .mat-slider-thumb-label{bottom:-14px;left:-40px;transform:translateX(26px) scale(0.01) rotate(-45deg)}.mat-slider-vertical .mat-slider-thumb-label-text{transform:rotate(45deg)}.mat-slider-vertical.cdk-focused .mat-slider-thumb-label{transform:rotate(-45deg)}[dir=rtl] .mat-slider-wrapper::after{left:0;right:auto}[dir=rtl] .mat-slider-horizontal .mat-slider-track-fill{transform-origin:100% 100%}[dir=rtl] .mat-slider-horizontal .mat-slider-track-background{transform-origin:0 0}[dir=rtl] .mat-slider-horizontal.mat-slider-axis-inverted .mat-slider-track-fill{transform-origin:0 0}[dir=rtl] .mat-slider-horizontal.mat-slider-axis-inverted .mat-slider-track-background{transform-origin:100% 100%}.mat-slider._mat-animation-noopable .mat-slider-track-fill,.mat-slider._mat-animation-noopable .mat-slider-track-background,.mat-slider._mat-animation-noopable .mat-slider-ticks,.mat-slider._mat-animation-noopable .mat-slider-thumb-container,.mat-slider._mat-animation-noopable .mat-slider-focus-ring,.mat-slider._mat-animation-noopable .mat-slider-thumb,.mat-slider._mat-animation-noopable .mat-slider-thumb-label,.mat-slider._mat-animation-noopable .mat-slider-thumb-label-text,.mat-slider._mat-animation-noopable .mat-slider-has-ticks .mat-slider-wrapper::after{transition:none}\n' ],
            data: {}
        });
        function View_MatSlider_0(_l) {
            return core["ɵvid"](2, [ core["ɵqud"](671088640, 1, {
                _sliderWrapper: 0
            }), (_l()(), core["ɵeld"](1, 0, [ [ 1, 0 ], [ "sliderWrapper", 1 ] ], null, 21, "div", [ [ "class", "mat-slider-wrapper" ] ], null, null, null, null, null)), (_l()(), 
            core["ɵeld"](2, 0, null, null, 6, "div", [ [ "class", "mat-slider-track-wrapper" ] ], null, null, null, null, null)), (_l()(), 
            core["ɵeld"](3, 0, null, null, 2, "div", [ [ "class", "mat-slider-track-background" ] ], null, null, null, null, null)), core["ɵprd"](512, null, common["ɵNgStyleImpl"], common["ɵNgStyleR2Impl"], [ core.ElementRef, core.KeyValueDiffers, core.Renderer2 ]), core["ɵdid"](5, 278528, null, 0, common.NgStyle, [ common["ɵNgStyleImpl"] ], {
                ngStyle: [ 0, "ngStyle" ]
            }, null), (_l()(), core["ɵeld"](6, 0, null, null, 2, "div", [ [ "class", "mat-slider-track-fill" ] ], null, null, null, null, null)), core["ɵprd"](512, null, common["ɵNgStyleImpl"], common["ɵNgStyleR2Impl"], [ core.ElementRef, core.KeyValueDiffers, core.Renderer2 ]), core["ɵdid"](8, 278528, null, 0, common.NgStyle, [ common["ɵNgStyleImpl"] ], {
                ngStyle: [ 0, "ngStyle" ]
            }, null), (_l()(), core["ɵeld"](9, 0, null, null, 5, "div", [ [ "class", "mat-slider-ticks-container" ] ], null, null, null, null, null)), core["ɵprd"](512, null, common["ɵNgStyleImpl"], common["ɵNgStyleR2Impl"], [ core.ElementRef, core.KeyValueDiffers, core.Renderer2 ]), core["ɵdid"](11, 278528, null, 0, common.NgStyle, [ common["ɵNgStyleImpl"] ], {
                ngStyle: [ 0, "ngStyle" ]
            }, null), (_l()(), core["ɵeld"](12, 0, null, null, 2, "div", [ [ "class", "mat-slider-ticks" ] ], null, null, null, null, null)), core["ɵprd"](512, null, common["ɵNgStyleImpl"], common["ɵNgStyleR2Impl"], [ core.ElementRef, core.KeyValueDiffers, core.Renderer2 ]), core["ɵdid"](14, 278528, null, 0, common.NgStyle, [ common["ɵNgStyleImpl"] ], {
                ngStyle: [ 0, "ngStyle" ]
            }, null), (_l()(), core["ɵeld"](15, 0, null, null, 7, "div", [ [ "class", "mat-slider-thumb-container" ] ], null, null, null, null, null)), core["ɵprd"](512, null, common["ɵNgStyleImpl"], common["ɵNgStyleR2Impl"], [ core.ElementRef, core.KeyValueDiffers, core.Renderer2 ]), core["ɵdid"](17, 278528, null, 0, common.NgStyle, [ common["ɵNgStyleImpl"] ], {
                ngStyle: [ 0, "ngStyle" ]
            }, null), (_l()(), core["ɵeld"](18, 0, null, null, 0, "div", [ [ "class", "mat-slider-focus-ring" ] ], null, null, null, null, null)), (_l()(), 
            core["ɵeld"](19, 0, null, null, 0, "div", [ [ "class", "mat-slider-thumb" ] ], null, null, null, null, null)), (_l()(), 
            core["ɵeld"](20, 0, null, null, 2, "div", [ [ "class", "mat-slider-thumb-label" ] ], null, null, null, null, null)), (_l()(), 
            core["ɵeld"](21, 0, null, null, 1, "span", [ [ "class", "mat-slider-thumb-label-text" ] ], null, null, null, null, null)), (_l()(), 
            core["ɵted"](22, null, [ "", "" ])) ], (function(_ck, _v) {
                var _co = _v.component;
                _ck(_v, 5, 0, _co._trackBackgroundStyles), _ck(_v, 8, 0, _co._trackFillStyles), 
                _ck(_v, 11, 0, _co._ticksContainerStyles), _ck(_v, 14, 0, _co._ticksStyles), _ck(_v, 17, 0, _co._thumbContainerStyles);
            }), (function(_ck, _v) {
                _ck(_v, 22, 0, _v.component.displayValue);
            }));
        }
        var button_index_ngfactory = __webpack_require__("1Xc+"), fesm2015_button = __webpack_require__("Dxy4");
        class SaveAnywayDialog {
            constructor(dialogRef) {
                this.dialogRef = dialogRef;
            }
            onNoClick() {
                this.dialogRef.close();
            }
        }
        class component_GlobalSettingsComponent {
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
                    err && -1 !== err.data.indexOf(this.concurrentChangeErr_) && this.dialog_.open(SaveAnywayDialog, {
                        width: "420px"
                    }).afterClosed().subscribe(result => {
                        !0 === result ? this.save(form) : this.load(form);
                    });
                });
            }
        }
        var globalsettings = __webpack_require__("5fJw"), dialog = __webpack_require__("iELJ"), title = __webpack_require__("UeXa"), RenderType_GlobalSettingsComponent = core["ɵcrt"]({
            encapsulation: 2,
            styles: [],
            data: {}
        });
        function View_GlobalSettingsComponent_1(_l) {
            return core["ɵvid"](0, [ (_l()(), core["ɵeld"](0, 0, null, null, 84, "kd-card", [], null, null, null, card_component_ngfactory.b, card_component_ngfactory.a)), core["ɵdid"](1, 49152, null, 0, component.a, [], {
                initialized: [ 0, "initialized" ],
                expandable: [ 1, "expandable" ]
            }, null), (_l()(), core["ɵeld"](2, 0, null, 0, 1, "div", [ [ "title", "" ] ], null, null, null, null, null)), (_l()(), 
            core["ɵted"](-1, null, [ "Global settings" ])), (_l()(), core["ɵeld"](4, 0, null, 3, 80, "div", [ [ "content", "" ] ], null, null, null, null, null)), (_l()(), 
            core["ɵeld"](5, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), 
            core["ɵted"](-1, null, [ " Global settings are stored in config map, so all of them are applied for every instance of the app. " ])), (_l()(), 
            core["ɵeld"](7, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), 
            core["ɵeld"](8, 0, null, null, 76, "form", [ [ "novalidate", "" ] ], [ [ 2, "ng-untouched", null ], [ 2, "ng-touched", null ], [ 2, "ng-pristine", null ], [ 2, "ng-dirty", null ], [ 2, "ng-valid", null ], [ 2, "ng-invalid", null ], [ 2, "ng-pending", null ] ], [ [ null, "ngSubmit" ], [ null, "submit" ], [ null, "reset" ] ], (function(_v, en, $event) {
                var ad = !0, _co = _v.component;
                return "submit" === en && (ad = !1 !== core["ɵnov"](_v, 10).onSubmit($event) && ad), 
                "reset" === en && (ad = !1 !== core["ɵnov"](_v, 10).onReset() && ad), "ngSubmit" === en && (ad = !1 !== _co.save(core["ɵnov"](_v, 10)) && ad), 
                ad;
            }), null, null)), core["ɵdid"](9, 16384, null, 0, fesm2015_forms["ɵangular_packages_forms_forms_y"], [], null, null), core["ɵdid"](10, 4210688, [ [ "form", 4 ] ], 0, fesm2015_forms.NgForm, [ [ 8, null ], [ 8, null ] ], null, {
                ngSubmit: "ngSubmit"
            }), core["ɵprd"](2048, null, fesm2015_forms.ControlContainer, null, [ fesm2015_forms.NgForm ]), core["ɵdid"](12, 16384, null, 0, fesm2015_forms.NgControlStatusGroup, [ [ 4, fesm2015_forms.ControlContainer ] ], null, null), (_l()(), 
            core["ɵeld"](13, 0, null, null, 21, "kd-settings-entry", [ [ "desc", "Cluster name appears in the browser window title if it is set." ], [ "key", "Cluster name" ] ], null, null, null, View_SettingsEntryComponent_0, RenderType_SettingsEntryComponent)), core["ɵdid"](14, 49152, null, 0, SettingsEntryComponent, [], {
                key: [ 0, "key" ],
                desc: [ 1, "desc" ]
            }, null), (_l()(), core["ɵeld"](15, 0, null, 0, 19, "mat-form-field", [ [ "class", "mat-form-field" ], [ "fxFlex", "" ] ], [ [ 2, "mat-form-field-appearance-standard", null ], [ 2, "mat-form-field-appearance-fill", null ], [ 2, "mat-form-field-appearance-outline", null ], [ 2, "mat-form-field-appearance-legacy", null ], [ 2, "mat-form-field-invalid", null ], [ 2, "mat-form-field-can-float", null ], [ 2, "mat-form-field-should-float", null ], [ 2, "mat-form-field-has-label", null ], [ 2, "mat-form-field-hide-placeholder", null ], [ 2, "mat-form-field-disabled", null ], [ 2, "mat-form-field-autofilled", null ], [ 2, "mat-focused", null ], [ 2, "mat-accent", null ], [ 2, "mat-warn", null ], [ 2, "ng-untouched", null ], [ 2, "ng-touched", null ], [ 2, "ng-pristine", null ], [ 2, "ng-dirty", null ], [ 2, "ng-valid", null ], [ 2, "ng-invalid", null ], [ 2, "ng-pending", null ], [ 2, "_mat-animation-noopable", null ] ], null, null, form_field_index_ngfactory.b, form_field_index_ngfactory.a)), core["ɵdid"](16, 7520256, null, 9, form_field.c, [ core.ElementRef, core.ChangeDetectorRef, [ 2, fesm2015_core.h ], [ 2, bidi.b ], [ 2, form_field.a ], platform.a, core.NgZone, [ 2, animations.a ] ], null, null), core["ɵqud"](603979776, 1, {
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
            }), core["ɵdid"](26, 671744, null, 0, flex.b, [ core.ElementRef, esm2015_core.i, esm2015_core.e, flex.i, esm2015_core.f ], {
                fxFlex: [ 0, "fxFlex" ]
            }, null), (_l()(), core["ɵeld"](27, 0, null, 1, 7, "input", [ [ "class", "mat-input-element mat-form-field-autofill-control" ], [ "matInput", "" ], [ "name", "clusterName" ], [ "placeholder", "Cluster name" ], [ "type", "text" ] ], [ [ 2, "ng-untouched", null ], [ 2, "ng-touched", null ], [ 2, "ng-pristine", null ], [ 2, "ng-dirty", null ], [ 2, "ng-valid", null ], [ 2, "ng-invalid", null ], [ 2, "ng-pending", null ], [ 2, "mat-input-server", null ], [ 1, "id", 0 ], [ 1, "placeholder", 0 ], [ 8, "disabled", 0 ], [ 8, "required", 0 ], [ 1, "readonly", 0 ], [ 1, "aria-describedby", 0 ], [ 1, "aria-invalid", 0 ], [ 1, "aria-required", 0 ] ], [ [ null, "ngModelChange" ], [ null, "input" ], [ null, "blur" ], [ null, "compositionstart" ], [ null, "compositionend" ], [ null, "focus" ] ], (function(_v, en, $event) {
                var ad = !0, _co = _v.component;
                return "input" === en && (ad = !1 !== core["ɵnov"](_v, 28)._handleInput($event.target.value) && ad), 
                "blur" === en && (ad = !1 !== core["ɵnov"](_v, 28).onTouched() && ad), "compositionstart" === en && (ad = !1 !== core["ɵnov"](_v, 28)._compositionStart() && ad), 
                "compositionend" === en && (ad = !1 !== core["ɵnov"](_v, 28)._compositionEnd($event.target.value) && ad), 
                "blur" === en && (ad = !1 !== core["ɵnov"](_v, 33)._focusChanged(!1) && ad), "focus" === en && (ad = !1 !== core["ɵnov"](_v, 33)._focusChanged(!0) && ad), 
                "input" === en && (ad = !1 !== core["ɵnov"](_v, 33)._onInput() && ad), "ngModelChange" === en && (ad = !1 !== (_co.settings.clusterName = $event) && ad), 
                ad;
            }), null, null)), core["ɵdid"](28, 16384, null, 0, fesm2015_forms.DefaultValueAccessor, [ core.Renderer2, core.ElementRef, [ 2, fesm2015_forms.COMPOSITION_BUFFER_MODE ] ], null, null), core["ɵprd"](1024, null, fesm2015_forms.NG_VALUE_ACCESSOR, (function(p0_0) {
                return [ p0_0 ];
            }), [ fesm2015_forms.DefaultValueAccessor ]), core["ɵdid"](30, 671744, null, 0, fesm2015_forms.NgModel, [ [ 2, fesm2015_forms.ControlContainer ], [ 8, null ], [ 8, null ], [ 6, fesm2015_forms.NG_VALUE_ACCESSOR ] ], {
                name: [ 0, "name" ],
                model: [ 1, "model" ]
            }, {
                update: "ngModelChange"
            }), core["ɵprd"](2048, null, fesm2015_forms.NgControl, null, [ fesm2015_forms.NgModel ]), core["ɵdid"](32, 16384, null, 0, fesm2015_forms.NgControlStatus, [ [ 4, fesm2015_forms.NgControl ] ], null, null), core["ɵdid"](33, 999424, null, 0, input.a, [ core.ElementRef, platform.a, [ 6, fesm2015_forms.NgControl ], [ 2, fesm2015_forms.NgForm ], [ 2, fesm2015_forms.FormGroupDirective ], fesm2015_core.d, [ 8, null ], text_field.a, core.NgZone ], {
                placeholder: [ 0, "placeholder" ],
                type: [ 1, "type" ]
            }, null), core["ɵprd"](2048, [ [ 1, 4 ], [ 2, 4 ] ], form_field.d, null, [ input.a ]), (_l()(), 
            core["ɵeld"](35, 0, null, null, 13, "kd-settings-entry", [ [ "desc", "Max number of items that can be displayed on each list page." ], [ "key", "Items per page" ] ], null, null, null, View_SettingsEntryComponent_0, RenderType_SettingsEntryComponent)), core["ɵdid"](36, 49152, null, 0, SettingsEntryComponent, [], {
                key: [ 0, "key" ],
                desc: [ 1, "desc" ]
            }, null), (_l()(), core["ɵeld"](37, 0, null, 0, 11, "div", [ [ "fxFlex", "" ] ], null, null, null, null, null)), core["ɵdid"](38, 671744, null, 0, flex.b, [ core.ElementRef, esm2015_core.i, esm2015_core.e, flex.i, esm2015_core.f ], {
                fxFlex: [ 0, "fxFlex" ]
            }, null), (_l()(), core["ɵeld"](39, 0, null, null, 6, "mat-slider", [ [ "class", "mat-slider" ], [ "color", "primary" ], [ "fxFlex", "" ], [ "max", "50" ], [ "min", "5" ], [ "name", "itemsPerPage" ], [ "role", "slider" ], [ "step", "5" ] ], [ [ 8, "tabIndex", 0 ], [ 1, "aria-disabled", 0 ], [ 1, "aria-valuemax", 0 ], [ 1, "aria-valuemin", 0 ], [ 1, "aria-valuenow", 0 ], [ 1, "aria-orientation", 0 ], [ 2, "mat-slider-disabled", null ], [ 2, "mat-slider-has-ticks", null ], [ 2, "mat-slider-horizontal", null ], [ 2, "mat-slider-axis-inverted", null ], [ 2, "mat-slider-invert-mouse-coords", null ], [ 2, "mat-slider-sliding", null ], [ 2, "mat-slider-thumb-label-showing", null ], [ 2, "mat-slider-vertical", null ], [ 2, "mat-slider-min-value", null ], [ 2, "mat-slider-hide-last-tick", null ], [ 2, "_mat-animation-noopable", null ], [ 2, "ng-untouched", null ], [ 2, "ng-touched", null ], [ 2, "ng-pristine", null ], [ 2, "ng-dirty", null ], [ 2, "ng-valid", null ], [ 2, "ng-invalid", null ], [ 2, "ng-pending", null ] ], [ [ null, "ngModelChange" ], [ null, "focus" ], [ null, "blur" ], [ null, "keydown" ], [ null, "keyup" ], [ null, "mouseenter" ], [ null, "selectstart" ] ], (function(_v, en, $event) {
                var ad = !0, _co = _v.component;
                return "focus" === en && (ad = !1 !== core["ɵnov"](_v, 40)._onFocus() && ad), "blur" === en && (ad = !1 !== core["ɵnov"](_v, 40)._onBlur() && ad), 
                "keydown" === en && (ad = !1 !== core["ɵnov"](_v, 40)._onKeydown($event) && ad), 
                "keyup" === en && (ad = !1 !== core["ɵnov"](_v, 40)._onKeyup() && ad), "mouseenter" === en && (ad = !1 !== core["ɵnov"](_v, 40)._onMouseenter() && ad), 
                "selectstart" === en && (ad = !1 !== $event.preventDefault() && ad), "ngModelChange" === en && (ad = !1 !== (_co.settings.itemsPerPage = $event) && ad), 
                ad;
            }), View_MatSlider_0, RenderType_MatSlider)), core["ɵdid"](40, 245760, null, 0, slider.a, [ core.ElementRef, a11y.f, core.ChangeDetectorRef, [ 2, bidi.b ], [ 8, null ], [ 2, animations.a ], core.NgZone ], {
                color: [ 0, "color" ],
                max: [ 1, "max" ],
                min: [ 2, "min" ],
                step: [ 3, "step" ]
            }, null), core["ɵprd"](1024, null, fesm2015_forms.NG_VALUE_ACCESSOR, (function(p0_0) {
                return [ p0_0 ];
            }), [ slider.a ]), core["ɵdid"](42, 671744, null, 0, fesm2015_forms.NgModel, [ [ 2, fesm2015_forms.ControlContainer ], [ 8, null ], [ 8, null ], [ 6, fesm2015_forms.NG_VALUE_ACCESSOR ] ], {
                name: [ 0, "name" ],
                model: [ 1, "model" ]
            }, {
                update: "ngModelChange"
            }), core["ɵprd"](2048, null, fesm2015_forms.NgControl, null, [ fesm2015_forms.NgModel ]), core["ɵdid"](44, 16384, null, 0, fesm2015_forms.NgControlStatus, [ [ 4, fesm2015_forms.NgControl ] ], null, null), core["ɵdid"](45, 671744, null, 0, flex.b, [ core.ElementRef, esm2015_core.i, esm2015_core.e, flex.i, esm2015_core.f ], {
                fxFlex: [ 0, "fxFlex" ]
            }, null), (_l()(), core["ɵeld"](46, 0, null, null, 2, "div", [ [ "class", "kd-slider-value kd-muted" ], [ "fxFlexAlign", " center" ] ], null, null, null, null, null)), core["ɵdid"](47, 671744, null, 0, flex.a, [ core.ElementRef, esm2015_core.i, [ 2, flex.e ], esm2015_core.f ], {
                fxFlexAlign: [ 0, "fxFlexAlign" ]
            }, null), (_l()(), core["ɵted"](48, null, [ " ", " " ])), (_l()(), core["ɵeld"](49, 0, null, null, 13, "kd-settings-entry", [ [ "desc", "Number of seconds between every auto-refresh of logs." ], [ "key", "Logs auto-refresh time interval" ] ], null, null, null, View_SettingsEntryComponent_0, RenderType_SettingsEntryComponent)), core["ɵdid"](50, 49152, null, 0, SettingsEntryComponent, [], {
                key: [ 0, "key" ],
                desc: [ 1, "desc" ]
            }, null), (_l()(), core["ɵeld"](51, 0, null, 0, 11, "div", [ [ "fxFlex", "" ] ], null, null, null, null, null)), core["ɵdid"](52, 671744, null, 0, flex.b, [ core.ElementRef, esm2015_core.i, esm2015_core.e, flex.i, esm2015_core.f ], {
                fxFlex: [ 0, "fxFlex" ]
            }, null), (_l()(), core["ɵeld"](53, 0, null, null, 6, "mat-slider", [ [ "class", "mat-slider" ], [ "color", "primary" ], [ "fxFlex", "" ], [ "max", "10" ], [ "min", "1" ], [ "name", "autoRefreshTimeInterval" ], [ "role", "slider" ], [ "step", "1" ] ], [ [ 8, "tabIndex", 0 ], [ 1, "aria-disabled", 0 ], [ 1, "aria-valuemax", 0 ], [ 1, "aria-valuemin", 0 ], [ 1, "aria-valuenow", 0 ], [ 1, "aria-orientation", 0 ], [ 2, "mat-slider-disabled", null ], [ 2, "mat-slider-has-ticks", null ], [ 2, "mat-slider-horizontal", null ], [ 2, "mat-slider-axis-inverted", null ], [ 2, "mat-slider-invert-mouse-coords", null ], [ 2, "mat-slider-sliding", null ], [ 2, "mat-slider-thumb-label-showing", null ], [ 2, "mat-slider-vertical", null ], [ 2, "mat-slider-min-value", null ], [ 2, "mat-slider-hide-last-tick", null ], [ 2, "_mat-animation-noopable", null ], [ 2, "ng-untouched", null ], [ 2, "ng-touched", null ], [ 2, "ng-pristine", null ], [ 2, "ng-dirty", null ], [ 2, "ng-valid", null ], [ 2, "ng-invalid", null ], [ 2, "ng-pending", null ] ], [ [ null, "ngModelChange" ], [ null, "focus" ], [ null, "blur" ], [ null, "keydown" ], [ null, "keyup" ], [ null, "mouseenter" ], [ null, "selectstart" ] ], (function(_v, en, $event) {
                var ad = !0, _co = _v.component;
                return "focus" === en && (ad = !1 !== core["ɵnov"](_v, 54)._onFocus() && ad), "blur" === en && (ad = !1 !== core["ɵnov"](_v, 54)._onBlur() && ad), 
                "keydown" === en && (ad = !1 !== core["ɵnov"](_v, 54)._onKeydown($event) && ad), 
                "keyup" === en && (ad = !1 !== core["ɵnov"](_v, 54)._onKeyup() && ad), "mouseenter" === en && (ad = !1 !== core["ɵnov"](_v, 54)._onMouseenter() && ad), 
                "selectstart" === en && (ad = !1 !== $event.preventDefault() && ad), "ngModelChange" === en && (ad = !1 !== (_co.settings.logsAutoRefreshTimeInterval = $event) && ad), 
                ad;
            }), View_MatSlider_0, RenderType_MatSlider)), core["ɵdid"](54, 245760, null, 0, slider.a, [ core.ElementRef, a11y.f, core.ChangeDetectorRef, [ 2, bidi.b ], [ 8, null ], [ 2, animations.a ], core.NgZone ], {
                color: [ 0, "color" ],
                max: [ 1, "max" ],
                min: [ 2, "min" ],
                step: [ 3, "step" ]
            }, null), core["ɵprd"](1024, null, fesm2015_forms.NG_VALUE_ACCESSOR, (function(p0_0) {
                return [ p0_0 ];
            }), [ slider.a ]), core["ɵdid"](56, 671744, null, 0, fesm2015_forms.NgModel, [ [ 2, fesm2015_forms.ControlContainer ], [ 8, null ], [ 8, null ], [ 6, fesm2015_forms.NG_VALUE_ACCESSOR ] ], {
                name: [ 0, "name" ],
                model: [ 1, "model" ]
            }, {
                update: "ngModelChange"
            }), core["ɵprd"](2048, null, fesm2015_forms.NgControl, null, [ fesm2015_forms.NgModel ]), core["ɵdid"](58, 16384, null, 0, fesm2015_forms.NgControlStatus, [ [ 4, fesm2015_forms.NgControl ] ], null, null), core["ɵdid"](59, 671744, null, 0, flex.b, [ core.ElementRef, esm2015_core.i, esm2015_core.e, flex.i, esm2015_core.f ], {
                fxFlex: [ 0, "fxFlex" ]
            }, null), (_l()(), core["ɵeld"](60, 0, null, null, 2, "span", [ [ "class", "kd-slider-value kd-muted" ], [ "fxFlexAlign", " center" ] ], null, null, null, null, null)), core["ɵdid"](61, 671744, null, 0, flex.a, [ core.ElementRef, esm2015_core.i, [ 2, flex.e ], esm2015_core.f ], {
                fxFlexAlign: [ 0, "fxFlexAlign" ]
            }, null), (_l()(), core["ɵted"](62, null, [ " ", " " ])), (_l()(), core["ɵeld"](63, 0, null, null, 13, "kd-settings-entry", [ [ "desc", "Number of seconds between every auto-refresh of every resource. Set 0 to disable." ], [ "key", "Resource auto-refresh time interval" ] ], null, null, null, View_SettingsEntryComponent_0, RenderType_SettingsEntryComponent)), core["ɵdid"](64, 49152, null, 0, SettingsEntryComponent, [], {
                key: [ 0, "key" ],
                desc: [ 1, "desc" ]
            }, null), (_l()(), core["ɵeld"](65, 0, null, 0, 11, "div", [ [ "fxFlex", "" ] ], null, null, null, null, null)), core["ɵdid"](66, 671744, null, 0, flex.b, [ core.ElementRef, esm2015_core.i, esm2015_core.e, flex.i, esm2015_core.f ], {
                fxFlex: [ 0, "fxFlex" ]
            }, null), (_l()(), core["ɵeld"](67, 0, null, null, 6, "mat-slider", [ [ "class", "mat-slider" ], [ "color", "primary" ], [ "fxFlex", "" ], [ "max", "60" ], [ "min", "0" ], [ "name", "resourceAutoRefreshTimeInterval" ], [ "role", "slider" ], [ "step", "5" ] ], [ [ 8, "tabIndex", 0 ], [ 1, "aria-disabled", 0 ], [ 1, "aria-valuemax", 0 ], [ 1, "aria-valuemin", 0 ], [ 1, "aria-valuenow", 0 ], [ 1, "aria-orientation", 0 ], [ 2, "mat-slider-disabled", null ], [ 2, "mat-slider-has-ticks", null ], [ 2, "mat-slider-horizontal", null ], [ 2, "mat-slider-axis-inverted", null ], [ 2, "mat-slider-invert-mouse-coords", null ], [ 2, "mat-slider-sliding", null ], [ 2, "mat-slider-thumb-label-showing", null ], [ 2, "mat-slider-vertical", null ], [ 2, "mat-slider-min-value", null ], [ 2, "mat-slider-hide-last-tick", null ], [ 2, "_mat-animation-noopable", null ], [ 2, "ng-untouched", null ], [ 2, "ng-touched", null ], [ 2, "ng-pristine", null ], [ 2, "ng-dirty", null ], [ 2, "ng-valid", null ], [ 2, "ng-invalid", null ], [ 2, "ng-pending", null ] ], [ [ null, "ngModelChange" ], [ null, "focus" ], [ null, "blur" ], [ null, "keydown" ], [ null, "keyup" ], [ null, "mouseenter" ], [ null, "selectstart" ] ], (function(_v, en, $event) {
                var ad = !0, _co = _v.component;
                return "focus" === en && (ad = !1 !== core["ɵnov"](_v, 68)._onFocus() && ad), "blur" === en && (ad = !1 !== core["ɵnov"](_v, 68)._onBlur() && ad), 
                "keydown" === en && (ad = !1 !== core["ɵnov"](_v, 68)._onKeydown($event) && ad), 
                "keyup" === en && (ad = !1 !== core["ɵnov"](_v, 68)._onKeyup() && ad), "mouseenter" === en && (ad = !1 !== core["ɵnov"](_v, 68)._onMouseenter() && ad), 
                "selectstart" === en && (ad = !1 !== $event.preventDefault() && ad), "ngModelChange" === en && (ad = !1 !== (_co.settings.resourceAutoRefreshTimeInterval = $event) && ad), 
                ad;
            }), View_MatSlider_0, RenderType_MatSlider)), core["ɵdid"](68, 245760, null, 0, slider.a, [ core.ElementRef, a11y.f, core.ChangeDetectorRef, [ 2, bidi.b ], [ 8, null ], [ 2, animations.a ], core.NgZone ], {
                color: [ 0, "color" ],
                max: [ 1, "max" ],
                min: [ 2, "min" ],
                step: [ 3, "step" ]
            }, null), core["ɵprd"](1024, null, fesm2015_forms.NG_VALUE_ACCESSOR, (function(p0_0) {
                return [ p0_0 ];
            }), [ slider.a ]), core["ɵdid"](70, 671744, null, 0, fesm2015_forms.NgModel, [ [ 2, fesm2015_forms.ControlContainer ], [ 8, null ], [ 8, null ], [ 6, fesm2015_forms.NG_VALUE_ACCESSOR ] ], {
                name: [ 0, "name" ],
                model: [ 1, "model" ]
            }, {
                update: "ngModelChange"
            }), core["ɵprd"](2048, null, fesm2015_forms.NgControl, null, [ fesm2015_forms.NgModel ]), core["ɵdid"](72, 16384, null, 0, fesm2015_forms.NgControlStatus, [ [ 4, fesm2015_forms.NgControl ] ], null, null), core["ɵdid"](73, 671744, null, 0, flex.b, [ core.ElementRef, esm2015_core.i, esm2015_core.e, flex.i, esm2015_core.f ], {
                fxFlex: [ 0, "fxFlex" ]
            }, null), (_l()(), core["ɵeld"](74, 0, null, null, 2, "span", [ [ "class", "kd-slider-value kd-muted" ], [ "fxFlexAlign", " center" ] ], null, null, null, null, null)), core["ɵdid"](75, 671744, null, 0, flex.a, [ core.ElementRef, esm2015_core.i, [ 2, flex.e ], esm2015_core.f ], {
                fxFlexAlign: [ 0, "fxFlexAlign" ]
            }, null), (_l()(), core["ɵted"](76, null, [ " ", " " ])), (_l()(), core["ɵeld"](77, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), 
            core["ɵeld"](78, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), 
            core["ɵeld"](79, 0, null, null, 2, "button", [ [ "color", "primary" ], [ "mat-raised-button", "" ], [ "type", "submit" ] ], [ [ 1, "disabled", 0 ], [ 2, "_mat-animation-noopable", null ] ], null, null, button_index_ngfactory.d, button_index_ngfactory.b)), core["ɵdid"](80, 180224, null, 0, fesm2015_button.b, [ core.ElementRef, a11y.f, [ 2, animations.a ] ], {
                disabled: [ 0, "disabled" ],
                color: [ 1, "color" ]
            }, null), (_l()(), core["ɵted"](-1, 0, [ " Save " ])), (_l()(), core["ɵeld"](82, 0, null, null, 2, "button", [ [ "color", "primary" ], [ "mat-raised-button", "" ], [ "type", "button" ] ], [ [ 1, "disabled", 0 ], [ 2, "_mat-animation-noopable", null ] ], [ [ null, "click" ] ], (function(_v, en, $event) {
                var ad = !0;
                return "click" === en && (ad = !1 !== _v.component.load(core["ɵnov"](_v, 10)) && ad), 
                ad;
            }), button_index_ngfactory.d, button_index_ngfactory.b)), core["ɵdid"](83, 180224, null, 0, fesm2015_button.b, [ core.ElementRef, a11y.f, [ 2, animations.a ] ], {
                color: [ 0, "color" ]
            }, null), (_l()(), core["ɵted"](-1, 0, [ " Reload " ])) ], (function(_ck, _v) {
                var _co = _v.component;
                _ck(_v, 1, 0, _co.isInitialized(), !0), _ck(_v, 14, 0, "Cluster name", "Cluster name appears in the browser window title if it is set."), 
                _ck(_v, 26, 0, ""), _ck(_v, 30, 0, "clusterName", _co.settings.clusterName), _ck(_v, 33, 0, "Cluster name", "text"), 
                _ck(_v, 36, 0, "Items per page", "Max number of items that can be displayed on each list page."), 
                _ck(_v, 38, 0, ""), _ck(_v, 40, 0, "primary", "50", "5", "5"), _ck(_v, 42, 0, "itemsPerPage", _co.settings.itemsPerPage), 
                _ck(_v, 45, 0, ""), _ck(_v, 47, 0, " center"), _ck(_v, 50, 0, "Logs auto-refresh time interval", "Number of seconds between every auto-refresh of logs."), 
                _ck(_v, 52, 0, ""), _ck(_v, 54, 0, "primary", "10", "1", "1"), _ck(_v, 56, 0, "autoRefreshTimeInterval", _co.settings.logsAutoRefreshTimeInterval), 
                _ck(_v, 59, 0, ""), _ck(_v, 61, 0, " center"), _ck(_v, 64, 0, "Resource auto-refresh time interval", "Number of seconds between every auto-refresh of every resource. Set 0 to disable."), 
                _ck(_v, 66, 0, ""), _ck(_v, 68, 0, "primary", "60", "0", "5"), _ck(_v, 70, 0, "resourceAutoRefreshTimeInterval", _co.settings.resourceAutoRefreshTimeInterval), 
                _ck(_v, 73, 0, ""), _ck(_v, 75, 0, " center"), _ck(_v, 80, 0, core["ɵnov"](_v, 10).pristine, "primary"), 
                _ck(_v, 83, 0, "primary");
            }), (function(_ck, _v) {
                var _co = _v.component;
                _ck(_v, 8, 0, core["ɵnov"](_v, 12).ngClassUntouched, core["ɵnov"](_v, 12).ngClassTouched, core["ɵnov"](_v, 12).ngClassPristine, core["ɵnov"](_v, 12).ngClassDirty, core["ɵnov"](_v, 12).ngClassValid, core["ɵnov"](_v, 12).ngClassInvalid, core["ɵnov"](_v, 12).ngClassPending), 
                _ck(_v, 15, 1, [ "standard" == core["ɵnov"](_v, 16).appearance, "fill" == core["ɵnov"](_v, 16).appearance, "outline" == core["ɵnov"](_v, 16).appearance, "legacy" == core["ɵnov"](_v, 16).appearance, core["ɵnov"](_v, 16)._control.errorState, core["ɵnov"](_v, 16)._canLabelFloat, core["ɵnov"](_v, 16)._shouldLabelFloat(), core["ɵnov"](_v, 16)._hasFloatingLabel(), core["ɵnov"](_v, 16)._hideControlPlaceholder(), core["ɵnov"](_v, 16)._control.disabled, core["ɵnov"](_v, 16)._control.autofilled, core["ɵnov"](_v, 16)._control.focused, "accent" == core["ɵnov"](_v, 16).color, "warn" == core["ɵnov"](_v, 16).color, core["ɵnov"](_v, 16)._shouldForward("untouched"), core["ɵnov"](_v, 16)._shouldForward("touched"), core["ɵnov"](_v, 16)._shouldForward("pristine"), core["ɵnov"](_v, 16)._shouldForward("dirty"), core["ɵnov"](_v, 16)._shouldForward("valid"), core["ɵnov"](_v, 16)._shouldForward("invalid"), core["ɵnov"](_v, 16)._shouldForward("pending"), !core["ɵnov"](_v, 16)._animationsEnabled ]), 
                _ck(_v, 27, 1, [ core["ɵnov"](_v, 32).ngClassUntouched, core["ɵnov"](_v, 32).ngClassTouched, core["ɵnov"](_v, 32).ngClassPristine, core["ɵnov"](_v, 32).ngClassDirty, core["ɵnov"](_v, 32).ngClassValid, core["ɵnov"](_v, 32).ngClassInvalid, core["ɵnov"](_v, 32).ngClassPending, core["ɵnov"](_v, 33)._isServer, core["ɵnov"](_v, 33).id, core["ɵnov"](_v, 33).placeholder, core["ɵnov"](_v, 33).disabled, core["ɵnov"](_v, 33).required, core["ɵnov"](_v, 33).readonly && !core["ɵnov"](_v, 33)._isNativeSelect || null, core["ɵnov"](_v, 33)._ariaDescribedby || null, core["ɵnov"](_v, 33).errorState, core["ɵnov"](_v, 33).required.toString() ]), 
                _ck(_v, 39, 1, [ core["ɵnov"](_v, 40).tabIndex, core["ɵnov"](_v, 40).disabled, core["ɵnov"](_v, 40).max, core["ɵnov"](_v, 40).min, core["ɵnov"](_v, 40).value, core["ɵnov"](_v, 40).vertical ? "vertical" : "horizontal", core["ɵnov"](_v, 40).disabled, core["ɵnov"](_v, 40).tickInterval, !core["ɵnov"](_v, 40).vertical, core["ɵnov"](_v, 40)._invertAxis, core["ɵnov"](_v, 40)._shouldInvertMouseCoords(), core["ɵnov"](_v, 40)._isSliding, core["ɵnov"](_v, 40).thumbLabel, core["ɵnov"](_v, 40).vertical, core["ɵnov"](_v, 40)._isMinValue, core["ɵnov"](_v, 40).disabled || core["ɵnov"](_v, 40)._isMinValue && core["ɵnov"](_v, 40)._thumbGap && core["ɵnov"](_v, 40)._invertAxis, "NoopAnimations" === core["ɵnov"](_v, 40)._animationMode, core["ɵnov"](_v, 44).ngClassUntouched, core["ɵnov"](_v, 44).ngClassTouched, core["ɵnov"](_v, 44).ngClassPristine, core["ɵnov"](_v, 44).ngClassDirty, core["ɵnov"](_v, 44).ngClassValid, core["ɵnov"](_v, 44).ngClassInvalid, core["ɵnov"](_v, 44).ngClassPending ]), 
                _ck(_v, 48, 0, _co.settings.itemsPerPage), _ck(_v, 53, 1, [ core["ɵnov"](_v, 54).tabIndex, core["ɵnov"](_v, 54).disabled, core["ɵnov"](_v, 54).max, core["ɵnov"](_v, 54).min, core["ɵnov"](_v, 54).value, core["ɵnov"](_v, 54).vertical ? "vertical" : "horizontal", core["ɵnov"](_v, 54).disabled, core["ɵnov"](_v, 54).tickInterval, !core["ɵnov"](_v, 54).vertical, core["ɵnov"](_v, 54)._invertAxis, core["ɵnov"](_v, 54)._shouldInvertMouseCoords(), core["ɵnov"](_v, 54)._isSliding, core["ɵnov"](_v, 54).thumbLabel, core["ɵnov"](_v, 54).vertical, core["ɵnov"](_v, 54)._isMinValue, core["ɵnov"](_v, 54).disabled || core["ɵnov"](_v, 54)._isMinValue && core["ɵnov"](_v, 54)._thumbGap && core["ɵnov"](_v, 54)._invertAxis, "NoopAnimations" === core["ɵnov"](_v, 54)._animationMode, core["ɵnov"](_v, 58).ngClassUntouched, core["ɵnov"](_v, 58).ngClassTouched, core["ɵnov"](_v, 58).ngClassPristine, core["ɵnov"](_v, 58).ngClassDirty, core["ɵnov"](_v, 58).ngClassValid, core["ɵnov"](_v, 58).ngClassInvalid, core["ɵnov"](_v, 58).ngClassPending ]), 
                _ck(_v, 62, 0, _co.settings.logsAutoRefreshTimeInterval), _ck(_v, 67, 1, [ core["ɵnov"](_v, 68).tabIndex, core["ɵnov"](_v, 68).disabled, core["ɵnov"](_v, 68).max, core["ɵnov"](_v, 68).min, core["ɵnov"](_v, 68).value, core["ɵnov"](_v, 68).vertical ? "vertical" : "horizontal", core["ɵnov"](_v, 68).disabled, core["ɵnov"](_v, 68).tickInterval, !core["ɵnov"](_v, 68).vertical, core["ɵnov"](_v, 68)._invertAxis, core["ɵnov"](_v, 68)._shouldInvertMouseCoords(), core["ɵnov"](_v, 68)._isSliding, core["ɵnov"](_v, 68).thumbLabel, core["ɵnov"](_v, 68).vertical, core["ɵnov"](_v, 68)._isMinValue, core["ɵnov"](_v, 68).disabled || core["ɵnov"](_v, 68)._isMinValue && core["ɵnov"](_v, 68)._thumbGap && core["ɵnov"](_v, 68)._invertAxis, "NoopAnimations" === core["ɵnov"](_v, 68)._animationMode, core["ɵnov"](_v, 72).ngClassUntouched, core["ɵnov"](_v, 72).ngClassTouched, core["ɵnov"](_v, 72).ngClassPristine, core["ɵnov"](_v, 72).ngClassDirty, core["ɵnov"](_v, 72).ngClassValid, core["ɵnov"](_v, 72).ngClassInvalid, core["ɵnov"](_v, 72).ngClassPending ]), 
                _ck(_v, 76, 0, _co.settings.resourceAutoRefreshTimeInterval), _ck(_v, 79, 0, core["ɵnov"](_v, 80).disabled || null, "NoopAnimations" === core["ɵnov"](_v, 80)._animationMode), 
                _ck(_v, 82, 0, core["ɵnov"](_v, 83).disabled || null, "NoopAnimations" === core["ɵnov"](_v, 83)._animationMode);
            }));
        }
        function View_GlobalSettingsComponent_0(_l) {
            return core["ɵvid"](0, [ (_l()(), core["ɵand"](16777216, null, null, 1, null, View_GlobalSettingsComponent_1)), core["ɵdid"](1, 16384, null, 0, common.NgIf, [ core.ViewContainerRef, core.TemplateRef ], {
                ngIf: [ 0, "ngIf" ]
            }, null) ], (function(_ck, _v) {
                _ck(_v, 1, 0, !_v.component.hasLoadError);
            }), null);
        }
        var slide_toggle = __webpack_require__("jMqV"), observers = __webpack_require__("9b/N"), RenderType_MatSlideToggle = core["ɵcrt"]({
            encapsulation: 2,
            styles: [ ".mat-slide-toggle{display:inline-block;height:24px;max-width:100%;line-height:24px;white-space:nowrap;outline:none;-webkit-tap-highlight-color:transparent}.mat-slide-toggle.mat-checked .mat-slide-toggle-thumb-container{transform:translate3d(16px, 0, 0)}[dir=rtl] .mat-slide-toggle.mat-checked .mat-slide-toggle-thumb-container{transform:translate3d(-16px, 0, 0)}.mat-slide-toggle.mat-disabled{opacity:.38}.mat-slide-toggle.mat-disabled .mat-slide-toggle-label,.mat-slide-toggle.mat-disabled .mat-slide-toggle-thumb-container{cursor:default}.mat-slide-toggle-label{display:flex;flex:1;flex-direction:row;align-items:center;height:inherit;cursor:pointer}.mat-slide-toggle-content{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.mat-slide-toggle-label-before .mat-slide-toggle-label{order:1}.mat-slide-toggle-label-before .mat-slide-toggle-bar{order:2}[dir=rtl] .mat-slide-toggle-label-before .mat-slide-toggle-bar,.mat-slide-toggle-bar{margin-right:8px;margin-left:0}[dir=rtl] .mat-slide-toggle-bar,.mat-slide-toggle-label-before .mat-slide-toggle-bar{margin-left:8px;margin-right:0}.mat-slide-toggle-bar-no-side-margin{margin-left:0;margin-right:0}.mat-slide-toggle-thumb-container{position:absolute;z-index:1;width:20px;height:20px;top:-3px;left:0;transform:translate3d(0, 0, 0);transition:all 80ms linear;transition-property:transform}._mat-animation-noopable .mat-slide-toggle-thumb-container{transition:none}[dir=rtl] .mat-slide-toggle-thumb-container{left:auto;right:0}.mat-slide-toggle-thumb{height:20px;width:20px;border-radius:50%}.mat-slide-toggle-bar{position:relative;width:36px;height:14px;flex-shrink:0;border-radius:8px}.mat-slide-toggle-input{bottom:0;left:10px}[dir=rtl] .mat-slide-toggle-input{left:auto;right:10px}.mat-slide-toggle-bar,.mat-slide-toggle-thumb{transition:all 80ms linear;transition-property:background-color;transition-delay:50ms}._mat-animation-noopable .mat-slide-toggle-bar,._mat-animation-noopable .mat-slide-toggle-thumb{transition:none}.mat-slide-toggle .mat-slide-toggle-ripple{position:absolute;top:calc(50% - 20px);left:calc(50% - 20px);height:40px;width:40px;z-index:1;pointer-events:none}.mat-slide-toggle .mat-slide-toggle-ripple .mat-ripple-element:not(.mat-slide-toggle-persistent-ripple){opacity:.12}.mat-slide-toggle-persistent-ripple{width:100%;height:100%;transform:none}.mat-slide-toggle-bar:hover .mat-slide-toggle-persistent-ripple{opacity:.04}.mat-slide-toggle:not(.mat-disabled).cdk-keyboard-focused .mat-slide-toggle-persistent-ripple{opacity:.12}.mat-slide-toggle-persistent-ripple,.mat-slide-toggle.mat-disabled .mat-slide-toggle-bar:hover .mat-slide-toggle-persistent-ripple{opacity:0}@media(hover: none){.mat-slide-toggle-bar:hover .mat-slide-toggle-persistent-ripple{display:none}}.cdk-high-contrast-active .mat-slide-toggle-thumb{background:#fff;border:1px solid #000}.mat-slide-toggle.mat-checked .cdk-high-contrast-active .mat-slide-toggle-thumb{background:#000;border:1px solid #fff}.cdk-high-contrast-active .mat-slide-toggle-bar{background:#fff}.mat-slide-toggle.cdk-keyboard-focused .cdk-high-contrast-active .mat-slide-toggle-bar{outline:1px dotted;outline-offset:5px}.cdk-high-contrast-black-on-white .mat-slide-toggle-bar{border:1px solid #000}\n" ],
            data: {}
        });
        function View_MatSlideToggle_0(_l) {
            return core["ɵvid"](2, [ core["ɵqud"](671088640, 1, {
                _thumbEl: 0
            }), core["ɵqud"](671088640, 2, {
                _thumbBarEl: 0
            }), core["ɵqud"](671088640, 3, {
                _inputElement: 0
            }), (_l()(), core["ɵeld"](3, 0, [ [ "label", 1 ] ], null, 13, "label", [ [ "class", "mat-slide-toggle-label" ] ], [ [ 1, "for", 0 ] ], null, null, null, null)), (_l()(), 
            core["ɵeld"](4, 0, [ [ 2, 0 ], [ "toggleBar", 1 ] ], null, 7, "div", [ [ "class", "mat-slide-toggle-bar" ] ], [ [ 2, "mat-slide-toggle-bar-no-side-margin", null ] ], null, null, null, null)), (_l()(), 
            core["ɵeld"](5, 0, [ [ 3, 0 ], [ "input", 1 ] ], null, 0, "input", [ [ "class", "mat-slide-toggle-input cdk-visually-hidden" ], [ "role", "switch" ], [ "type", "checkbox" ] ], [ [ 8, "id", 0 ], [ 8, "required", 0 ], [ 8, "tabIndex", 0 ], [ 8, "checked", 0 ], [ 8, "disabled", 0 ], [ 1, "name", 0 ], [ 1, "aria-checked", 0 ], [ 1, "aria-label", 0 ], [ 1, "aria-labelledby", 0 ] ], [ [ null, "change" ], [ null, "click" ] ], (function(_v, en, $event) {
                var ad = !0, _co = _v.component;
                return "change" === en && (ad = !1 !== _co._onChangeEvent($event) && ad), "click" === en && (ad = !1 !== _co._onInputClick($event) && ad), 
                ad;
            }), null, null)), (_l()(), core["ɵeld"](6, 0, [ [ 1, 0 ], [ "thumbContainer", 1 ] ], null, 5, "div", [ [ "class", "mat-slide-toggle-thumb-container" ] ], null, null, null, null, null)), (_l()(), 
            core["ɵeld"](7, 0, null, null, 0, "div", [ [ "class", "mat-slide-toggle-thumb" ] ], null, null, null, null, null)), (_l()(), 
            core["ɵeld"](8, 0, null, null, 3, "div", [ [ "class", "mat-slide-toggle-ripple mat-ripple" ], [ "mat-ripple", "" ] ], [ [ 2, "mat-ripple-unbounded", null ] ], null, null, null, null)), core["ɵdid"](9, 212992, null, 0, fesm2015_core.t, [ core.ElementRef, core.NgZone, platform.a, [ 2, fesm2015_core.k ], [ 2, animations.a ] ], {
                centered: [ 0, "centered" ],
                radius: [ 1, "radius" ],
                animation: [ 2, "animation" ],
                disabled: [ 3, "disabled" ],
                trigger: [ 4, "trigger" ]
            }, null), core["ɵpod"](10, {
                enterDuration: 0
            }), (_l()(), core["ɵeld"](11, 0, null, null, 0, "div", [ [ "class", "mat-ripple-element mat-slide-toggle-persistent-ripple" ] ], null, null, null, null, null)), (_l()(), 
            core["ɵeld"](12, 0, [ [ "labelContent", 1 ] ], null, 4, "span", [ [ "class", "mat-slide-toggle-content" ] ], null, [ [ null, "cdkObserveContent" ] ], (function(_v, en, $event) {
                var ad = !0;
                return "cdkObserveContent" === en && (ad = !1 !== _v.component._onLabelTextChange() && ad), 
                ad;
            }), null, null)), core["ɵdid"](13, 1196032, null, 0, observers.a, [ observers.b, core.ElementRef, core.NgZone ], null, {
                event: "cdkObserveContent"
            }), (_l()(), core["ɵeld"](14, 0, null, null, 1, "span", [ [ "style", "display:none" ] ], null, null, null, null, null)), (_l()(), 
            core["ɵted"](-1, null, [ " " ])), core["ɵncd"](null, 0) ], (function(_ck, _v) {
                var _co = _v.component, currVal_14 = _ck(_v, 10, 0, 150);
                _ck(_v, 9, 0, !0, 20, currVal_14, _co.disableRipple || _co.disabled, core["ɵnov"](_v, 3));
            }), (function(_ck, _v) {
                var _co = _v.component;
                _ck(_v, 3, 0, _co.inputId), _ck(_v, 4, 0, !core["ɵnov"](_v, 12).textContent || !core["ɵnov"](_v, 12).textContent.trim()), 
                _ck(_v, 5, 0, _co.inputId, _co.required, _co.tabIndex, _co.checked, _co.disabled, _co.name, _co.checked.toString(), _co.ariaLabel, _co.ariaLabelledby), 
                _ck(_v, 8, 0, core["ɵnov"](_v, 9).unbounded);
            }));
        }
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
        var localsettings = __webpack_require__("itu2"), RenderType_LocalSettingsComponent = core["ɵcrt"]({
            encapsulation: 2,
            styles: [],
            data: {}
        });
        function View_LocalSettingsComponent_0(_l) {
            return core["ɵvid"](0, [ (_l()(), core["ɵeld"](0, 0, null, null, 17, "kd-card", [], null, null, null, card_component_ngfactory.b, card_component_ngfactory.a)), core["ɵdid"](1, 49152, null, 0, component.a, [], {
                expandable: [ 0, "expandable" ]
            }, null), (_l()(), core["ɵeld"](2, 0, null, 0, 1, "div", [ [ "title", "" ] ], null, null, null, null, null)), (_l()(), 
            core["ɵted"](-1, null, [ "Local settings" ])), (_l()(), core["ɵeld"](4, 0, null, 3, 13, "div", [ [ "content", "" ] ], null, null, null, null, null)), (_l()(), 
            core["ɵeld"](5, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), 
            core["ɵted"](-1, null, [ " Local settings are stored in the browser cookies, so they are not synchronized between multiple devices. Changes are applied automatically on every change. " ])), (_l()(), 
            core["ɵeld"](7, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), 
            core["ɵeld"](8, 0, null, null, 9, "kd-settings-entry", [ [ "desc", "Use dark theme in the whole app" ], [ "key", "Dark theme" ] ], null, null, null, View_SettingsEntryComponent_0, RenderType_SettingsEntryComponent)), core["ɵdid"](9, 49152, null, 0, SettingsEntryComponent, [], {
                key: [ 0, "key" ],
                desc: [ 1, "desc" ]
            }, null), (_l()(), core["ɵeld"](10, 0, null, 0, 7, "div", [ [ "fxFlex", "" ] ], null, null, null, null, null)), core["ɵdid"](11, 671744, null, 0, flex.b, [ core.ElementRef, esm2015_core.i, esm2015_core.e, flex.i, esm2015_core.f ], {
                fxFlex: [ 0, "fxFlex" ]
            }, null), (_l()(), core["ɵeld"](12, 0, null, null, 5, "mat-slide-toggle", [ [ "class", "mat-slide-toggle" ], [ "color", "primary" ], [ "name", "isThemeDark" ] ], [ [ 8, "id", 0 ], [ 1, "tabindex", 0 ], [ 1, "aria-label", 0 ], [ 1, "aria-labelledby", 0 ], [ 2, "mat-checked", null ], [ 2, "mat-disabled", null ], [ 2, "mat-slide-toggle-label-before", null ], [ 2, "_mat-animation-noopable", null ], [ 2, "ng-untouched", null ], [ 2, "ng-touched", null ], [ 2, "ng-pristine", null ], [ 2, "ng-dirty", null ], [ 2, "ng-valid", null ], [ 2, "ng-invalid", null ], [ 2, "ng-pending", null ] ], [ [ null, "ngModelChange" ], [ null, "change" ], [ null, "focus" ] ], (function(_v, en, $event) {
                var ad = !0, _co = _v.component;
                return "focus" === en && (ad = !1 !== core["ɵnov"](_v, 13)._inputElement.nativeElement.focus() && ad), 
                "ngModelChange" === en && (ad = !1 !== (_co.settings.isThemeDark = $event) && ad), 
                "change" === en && (ad = !1 !== _co.onThemeChange() && ad), ad;
            }), View_MatSlideToggle_0, RenderType_MatSlideToggle)), core["ɵdid"](13, 1228800, null, 0, slide_toggle.b, [ core.ElementRef, a11y.f, core.ChangeDetectorRef, [ 8, null ], core.NgZone, slide_toggle.a, [ 2, animations.a ], [ 2, bidi.b ] ], {
                color: [ 0, "color" ],
                name: [ 1, "name" ]
            }, {
                change: "change"
            }), core["ɵprd"](1024, null, fesm2015_forms.NG_VALUE_ACCESSOR, (function(p0_0) {
                return [ p0_0 ];
            }), [ slide_toggle.b ]), core["ɵdid"](15, 671744, null, 0, fesm2015_forms.NgModel, [ [ 8, null ], [ 8, null ], [ 8, null ], [ 6, fesm2015_forms.NG_VALUE_ACCESSOR ] ], {
                name: [ 0, "name" ],
                model: [ 1, "model" ]
            }, {
                update: "ngModelChange"
            }), core["ɵprd"](2048, null, fesm2015_forms.NgControl, null, [ fesm2015_forms.NgModel ]), core["ɵdid"](17, 16384, null, 0, fesm2015_forms.NgControlStatus, [ [ 4, fesm2015_forms.NgControl ] ], null, null) ], (function(_ck, _v) {
                var _co = _v.component;
                _ck(_v, 1, 0, !0), _ck(_v, 9, 0, "Dark theme", "Use dark theme in the whole app"), 
                _ck(_v, 11, 0, ""), _ck(_v, 13, 0, "primary", "isThemeDark"), _ck(_v, 15, 0, "isThemeDark", _co.settings.isThemeDark);
            }), (function(_ck, _v) {
                _ck(_v, 12, 1, [ core["ɵnov"](_v, 13).id, core["ɵnov"](_v, 13).disabled ? null : -1, null, null, core["ɵnov"](_v, 13).checked, core["ɵnov"](_v, 13).disabled, "before" == core["ɵnov"](_v, 13).labelPosition, "NoopAnimations" === core["ɵnov"](_v, 13)._animationMode, core["ɵnov"](_v, 17).ngClassUntouched, core["ɵnov"](_v, 17).ngClassTouched, core["ɵnov"](_v, 17).ngClassPristine, core["ɵnov"](_v, 17).ngClassDirty, core["ɵnov"](_v, 17).ngClassValid, core["ɵnov"](_v, 17).ngClassInvalid, core["ɵnov"](_v, 17).ngClassPending ]);
            }));
        }
        class SettingsComponent {}
        var RenderType_SettingsComponent = core["ɵcrt"]({
            encapsulation: 2,
            styles: [],
            data: {}
        });
        function View_SettingsComponent_0(_l) {
            return core["ɵvid"](0, [ (_l()(), core["ɵeld"](0, 0, null, null, 1, "kd-global-settings", [], null, null, null, View_GlobalSettingsComponent_0, RenderType_GlobalSettingsComponent)), core["ɵdid"](1, 114688, null, 0, component_GlobalSettingsComponent, [ globalsettings.a, dialog.e, title.a ], null, null), (_l()(), 
            core["ɵeld"](2, 0, null, null, 1, "kd-local-settings", [], null, null, null, View_LocalSettingsComponent_0, RenderType_LocalSettingsComponent)), core["ɵdid"](3, 114688, null, 0, LocalSettingsComponent, [ localsettings.a ], null, null) ], (function(_ck, _v) {
                _ck(_v, 1, 0), _ck(_v, 3, 0);
            }), null);
        }
        function View_SettingsComponent_Host_0(_l) {
            return core["ɵvid"](0, [ (_l()(), core["ɵeld"](0, 0, null, null, 1, "kd-settings", [], null, null, null, View_SettingsComponent_0, RenderType_SettingsComponent)), core["ɵdid"](1, 49152, null, 0, SettingsComponent, [], null, null) ], null, null);
        }
        var SettingsComponentNgFactory = core["ɵccf"]("kd-settings", SettingsComponent, View_SettingsComponent_Host_0, {}, {}, []), RenderType_SaveAnywayDialog = core["ɵcrt"]({
            encapsulation: 2,
            styles: [],
            data: {}
        });
        function View_SaveAnywayDialog_0(_l) {
            return core["ɵvid"](0, [ (_l()(), core["ɵeld"](0, 0, null, null, 2, "h2", [ [ "class", "mat-dialog-title" ], [ "mat-dialog-title", "" ] ], [ [ 8, "id", 0 ] ], null, null, null, null)), core["ɵdid"](1, 81920, null, 0, dialog.m, [ [ 2, dialog.l ], core.ElementRef, dialog.e ], null, null), (_l()(), 
            core["ɵted"](-1, null, [ "Settings have changed since last reload" ])), (_l()(), 
            core["ɵeld"](3, 0, null, null, 2, "mat-dialog-content", [ [ "class", "mat-dialog-content" ] ], null, null, null, null, null)), core["ɵdid"](4, 16384, null, 0, dialog.j, [], null, null), (_l()(), 
            core["ɵted"](-1, null, [ "Do you want to save them anyways?" ])), (_l()(), core["ɵeld"](6, 0, null, null, 9, "mat-dialog-actions", [ [ "class", "mat-dialog-actions" ] ], null, null, null, null, null)), core["ɵdid"](7, 16384, null, 0, dialog.f, [], null, null), (_l()(), 
            core["ɵeld"](8, 0, null, null, 3, "button", [ [ "color", "primary" ], [ "mat-button", "" ] ], [ [ 1, "disabled", 0 ], [ 2, "_mat-animation-noopable", null ], [ 1, "aria-label", 0 ], [ 1, "type", 0 ] ], [ [ null, "click" ] ], (function(_v, en, $event) {
                var ad = !0;
                return "click" === en && (ad = !1 !== core["ɵnov"](_v, 10).dialogRef.close(core["ɵnov"](_v, 10).dialogResult) && ad), 
                ad;
            }), button_index_ngfactory.d, button_index_ngfactory.b)), core["ɵdid"](9, 180224, null, 0, fesm2015_button.b, [ core.ElementRef, a11y.f, [ 2, animations.a ] ], {
                color: [ 0, "color" ]
            }, null), core["ɵdid"](10, 606208, null, 0, dialog.g, [ [ 2, dialog.l ], core.ElementRef, dialog.e ], {
                dialogResult: [ 0, "dialogResult" ]
            }, null), (_l()(), core["ɵted"](-1, 0, [ "Save" ])), (_l()(), core["ɵeld"](12, 0, null, null, 3, "button", [ [ "color", "primary" ], [ "mat-button", "" ] ], [ [ 1, "disabled", 0 ], [ 2, "_mat-animation-noopable", null ], [ 1, "aria-label", 0 ], [ 1, "type", 0 ] ], [ [ null, "click" ] ], (function(_v, en, $event) {
                var ad = !0;
                return "click" === en && (ad = !1 !== core["ɵnov"](_v, 14).dialogRef.close(core["ɵnov"](_v, 14).dialogResult) && ad), 
                ad;
            }), button_index_ngfactory.d, button_index_ngfactory.b)), core["ɵdid"](13, 180224, null, 0, fesm2015_button.b, [ core.ElementRef, a11y.f, [ 2, animations.a ] ], {
                color: [ 0, "color" ]
            }, null), core["ɵdid"](14, 606208, null, 0, dialog.g, [ [ 2, dialog.l ], core.ElementRef, dialog.e ], {
                dialogResult: [ 0, "dialogResult" ]
            }, null), (_l()(), core["ɵted"](-1, 0, [ "Refresh" ])) ], (function(_ck, _v) {
                _ck(_v, 1, 0), _ck(_v, 9, 0, "primary"), _ck(_v, 10, 0, !0), _ck(_v, 13, 0, "primary"), 
                _ck(_v, 14, 0, !1);
            }), (function(_ck, _v) {
                _ck(_v, 0, 0, core["ɵnov"](_v, 1).id), _ck(_v, 8, 0, core["ɵnov"](_v, 9).disabled || null, "NoopAnimations" === core["ɵnov"](_v, 9)._animationMode, core["ɵnov"](_v, 10).ariaLabel || null, core["ɵnov"](_v, 10).type), 
                _ck(_v, 12, 0, core["ɵnov"](_v, 13).disabled || null, "NoopAnimations" === core["ɵnov"](_v, 13)._animationMode, core["ɵnov"](_v, 14).ariaLabel || null, core["ɵnov"](_v, 14).type);
            }));
        }
        function View_SaveAnywayDialog_Host_0(_l) {
            return core["ɵvid"](0, [ (_l()(), core["ɵeld"](0, 0, null, null, 1, "kd-settings-save-anyway-dialog", [], null, null, null, View_SaveAnywayDialog_0, RenderType_SaveAnywayDialog)), core["ɵdid"](1, 49152, null, 0, SaveAnywayDialog, [ dialog.l ], null, null) ], null, null);
        }
        var SaveAnywayDialogNgFactory = core["ɵccf"]("kd-settings-save-anyway-dialog", SaveAnywayDialog, View_SaveAnywayDialog_Host_0, {}, {}, []), overlay = __webpack_require__("1O3W"), tooltip = __webpack_require__("ZFy/"), sort = __webpack_require__("LUZP"), fesm2015_select = __webpack_require__("ZTz/"), paginator = __webpack_require__("5QHs"), menu = __webpack_require__("rJgo"), ngx_filter_pipe = __webpack_require__("4muW"), card = __webpack_require__("PDjf"), fesm2015_checkbox = __webpack_require__("pMoy"), divider = __webpack_require__("BSbQ"), grid_list = __webpack_require__("40+f"), icon = __webpack_require__("Tj54"), progress_spinner = __webpack_require__("pu8Q"), progress_bar = __webpack_require__("BTe0"), fesm2015_radio = __webpack_require__("zQhy"), scrolling = __webpack_require__("7KAL"), sidenav = __webpack_require__("q7Ft"), toolbar = __webpack_require__("l0rg"), portal = __webpack_require__("1z/I"), chips = __webpack_require__("f44v"), table = __webpack_require__("GXRp"), fesm2015_table = __webpack_require__("OaSA"), tabs = __webpack_require__("M9ds"), button_toggle = __webpack_require__("Ynp+"), snack_bar = __webpack_require__("zHaW"), extended = __webpack_require__("ura0"), grid = __webpack_require__("Nhcz"), flex_layout = __webpack_require__("u9T3"), router = __webpack_require__("iInd"), src_module = __webpack_require__("o6Sk"), pipes_module = __webpack_require__("I7rD"), shared_module = __webpack_require__("MnlZ"), components_module = __webpack_require__("PXUV");
        const ɵ0 = {
            breadcrumb: "Settings"
        };
        class SettingsRoutingModule {}
        var keycodes = __webpack_require__("Ht+U");
        __webpack_require__.d(__webpack_exports__, "SettingsModuleNgFactory", (function() {
            return SettingsModuleNgFactory;
        }));
        var SettingsModuleNgFactory = core["ɵcmf"](SettingsModule, [], (function(_l) {
            return core["ɵmod"]([ core["ɵmpd"](512, core.ComponentFactoryResolver, core["ɵCodegenComponentFactoryResolver"], [ [ 8, [ index_ngfactory.a, dialog_index_ngfactory.a, snack_bar_index_ngfactory.a, snack_bar_index_ngfactory.b, router_ngfactory.a, dialog_ngfactory.a, component_ngfactory.a, menu_component_ngfactory.a, changedialog_dialog_ngfactory.a, SettingsComponentNgFactory, SaveAnywayDialogNgFactory ] ], [ 3, core.ComponentFactoryResolver ], core.NgModuleRef ]), core["ɵmpd"](4608, common.NgLocalization, common.NgLocaleLocalization, [ core.LOCALE_ID ]), core["ɵmpd"](4608, fesm2015_forms["ɵangular_packages_forms_forms_n"], fesm2015_forms["ɵangular_packages_forms_forms_n"], []), core["ɵmpd"](4608, fesm2015_forms.FormBuilder, fesm2015_forms.FormBuilder, []), core["ɵmpd"](4608, observers.c, observers.c, []), core["ɵmpd"](4608, fesm2015_core.d, fesm2015_core.d, []), core["ɵmpd"](4608, overlay.c, overlay.c, [ overlay.i, overlay.e, core.ComponentFactoryResolver, overlay.h, overlay.f, core.Injector, core.NgZone, common.DOCUMENT, bidi.b, [ 2, common.Location ] ]), core["ɵmpd"](5120, overlay.j, overlay.k, [ overlay.c ]), core["ɵmpd"](5120, tooltip.b, tooltip.c, [ overlay.c ]), core["ɵmpd"](5120, dialog.c, dialog.d, [ overlay.c ]), core["ɵmpd"](135680, dialog.e, dialog.e, [ overlay.c, core.Injector, [ 2, common.Location ], [ 2, dialog.b ], dialog.c, [ 3, dialog.e ], overlay.e ]), core["ɵmpd"](5120, sort.d, sort.a, [ [ 3, sort.d ] ]), core["ɵmpd"](5120, fesm2015_select.a, fesm2015_select.b, [ overlay.c ]), core["ɵmpd"](5120, paginator.c, paginator.a, [ [ 3, paginator.c ] ]), core["ɵmpd"](5120, menu.c, menu.j, [ overlay.c ]), core["ɵmpd"](5120, core.APP_BOOTSTRAP_LISTENER, (function(p0_0, p0_1) {
                return [ esm2015_core.j(p0_0, p0_1) ];
            }), [ common.DOCUMENT, core.PLATFORM_ID ]), core["ɵmpd"](4608, ngx_filter_pipe.a, ngx_filter_pipe.a, []), core["ɵmpd"](1073742336, common.CommonModule, common.CommonModule, []), core["ɵmpd"](1073742336, fesm2015_forms["ɵangular_packages_forms_forms_d"], fesm2015_forms["ɵangular_packages_forms_forms_d"], []), core["ɵmpd"](1073742336, fesm2015_forms.FormsModule, fesm2015_forms.FormsModule, []), core["ɵmpd"](1073742336, fesm2015_forms.ReactiveFormsModule, fesm2015_forms.ReactiveFormsModule, []), core["ɵmpd"](1073742336, bidi.a, bidi.a, []), core["ɵmpd"](1073742336, fesm2015_core.l, fesm2015_core.l, [ a11y.h, [ 2, fesm2015_core.e ] ]), core["ɵmpd"](1073742336, platform.b, platform.b, []), core["ɵmpd"](1073742336, fesm2015_core.u, fesm2015_core.u, []), core["ɵmpd"](1073742336, fesm2015_button.c, fesm2015_button.c, []), core["ɵmpd"](1073742336, card.e, card.e, []), core["ɵmpd"](1073742336, observers.d, observers.d, []), core["ɵmpd"](1073742336, fesm2015_checkbox.e, fesm2015_checkbox.e, []), core["ɵmpd"](1073742336, fesm2015_checkbox.d, fesm2015_checkbox.d, []), core["ɵmpd"](1073742336, divider.b, divider.b, []), core["ɵmpd"](1073742336, fesm2015_core.m, fesm2015_core.m, []), core["ɵmpd"](1073742336, grid_list.a, grid_list.a, []), core["ɵmpd"](1073742336, form_field.e, form_field.e, []), core["ɵmpd"](1073742336, icon.c, icon.c, []), core["ɵmpd"](1073742336, text_field.c, text_field.c, []), core["ɵmpd"](1073742336, input.b, input.b, []), core["ɵmpd"](1073742336, progress_spinner.c, progress_spinner.c, []), core["ɵmpd"](1073742336, progress_bar.c, progress_bar.c, []), core["ɵmpd"](1073742336, fesm2015_radio.d, fesm2015_radio.d, []), core["ɵmpd"](1073742336, scrolling.c, scrolling.c, []), core["ɵmpd"](1073742336, sidenav.h, sidenav.h, []), core["ɵmpd"](1073742336, toolbar.b, toolbar.b, []), core["ɵmpd"](1073742336, a11y.a, a11y.a, [ a11y.h ]), core["ɵmpd"](1073742336, portal.g, portal.g, []), core["ɵmpd"](1073742336, overlay.g, overlay.g, []), core["ɵmpd"](1073742336, tooltip.e, tooltip.e, []), core["ɵmpd"](1073742336, slider.b, slider.b, []), core["ɵmpd"](1073742336, dialog.k, dialog.k, []), core["ɵmpd"](1073742336, slide_toggle.d, slide_toggle.d, []), core["ɵmpd"](1073742336, slide_toggle.c, slide_toggle.c, []), core["ɵmpd"](1073742336, chips.d, chips.d, []), core["ɵmpd"](1073742336, table.p, table.p, []), core["ɵmpd"](1073742336, fesm2015_table.m, fesm2015_table.m, []), core["ɵmpd"](1073742336, sort.e, sort.e, []), core["ɵmpd"](1073742336, fesm2015_core.s, fesm2015_core.s, []), core["ɵmpd"](1073742336, fesm2015_core.q, fesm2015_core.q, []), core["ɵmpd"](1073742336, fesm2015_select.d, fesm2015_select.d, []), core["ɵmpd"](1073742336, paginator.d, paginator.d, []), core["ɵmpd"](1073742336, tabs.k, tabs.k, []), core["ɵmpd"](1073742336, menu.i, menu.i, []), core["ɵmpd"](1073742336, menu.f, menu.f, []), core["ɵmpd"](1073742336, button_toggle.e, button_toggle.e, []), core["ɵmpd"](1073742336, snack_bar.e, snack_bar.e, []), core["ɵmpd"](1073742336, esm2015_core.c, esm2015_core.c, []), core["ɵmpd"](1073742336, flex.h, flex.h, []), core["ɵmpd"](1073742336, extended.b, extended.b, []), core["ɵmpd"](1073742336, grid.a, grid.a, []), core["ɵmpd"](1073742336, flex_layout.a, flex_layout.a, [ [ 2, esm2015_core.g ], core.PLATFORM_ID ]), core["ɵmpd"](1073742336, router.RouterModule, router.RouterModule, [ [ 2, router["ɵangular_packages_router_router_a"] ], [ 2, router.Router ] ]), core["ɵmpd"](1073742336, src_module.a, src_module.a, []), core["ɵmpd"](1073742336, ngx_filter_pipe.b, ngx_filter_pipe.b, []), core["ɵmpd"](1073742336, pipes_module.a, pipes_module.a, []), core["ɵmpd"](1073742336, shared_module.a, shared_module.a, []), core["ɵmpd"](1073742336, components_module.a, components_module.a, []), core["ɵmpd"](1073742336, SettingsRoutingModule, SettingsRoutingModule, []), core["ɵmpd"](1073742336, SettingsModule, SettingsModule, []), core["ɵmpd"](256, chips.a, {
                separatorKeyCodes: [ keycodes.f ]
            }, []), core["ɵmpd"](256, tooltip.a, shared_module.b, []), core["ɵmpd"](1024, router.ROUTES, (function() {
                return [ [ {
                    path: "",
                    component: SettingsComponent,
                    data: ɵ0
                } ] ];
            }), []) ]);
        }));
    }
} ]);