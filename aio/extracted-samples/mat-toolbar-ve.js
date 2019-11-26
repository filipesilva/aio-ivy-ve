        class MatToolbarBase {
            constructor(_elementRef) {
                this._elementRef = _elementRef;
            }
        }
        const _MatToolbarMixinBase = Object(fesm2015_core.g)(MatToolbarBase);
        class MatToolbarRow {}
        class toolbar_MatToolbar extends _MatToolbarMixinBase {
            constructor(elementRef, _platform, document) {
                super(elementRef), this._platform = _platform, this._document = document;
            }
            ngAfterViewInit() {
                Object(core.V)() && this._platform.isBrowser && (this._checkToolbarMixedModes(), 
                this._toolbarRows.changes.subscribe(() => this._checkToolbarMixedModes()));
            }
            _checkToolbarMixedModes() {
                this._toolbarRows.length && Array.from(this._elementRef.nativeElement.childNodes).filter(node => !(node.classList && node.classList.contains("mat-toolbar-row"))).filter(node => node.nodeType !== (this._document ? this._document.COMMENT_NODE : 8)).some(node => !(!node.textContent || !node.textContent.trim())) && function() {
                    throw Error("MatToolbar: Attempting to combine different toolbar modes. Either specify multiple `<mat-toolbar-row>` elements explicitly or just place content inside of a `<mat-toolbar>` for a single row.");
                }();
            }
        }
        class MatToolbarModule {}
        var platform = __webpack_require__("SCoL"), RenderType_MatToolbar = core.ub({
            encapsulation: 2,
            styles: [ "@media(-ms-high-contrast: active){.mat-toolbar{outline:solid 1px}}.mat-toolbar-row,.mat-toolbar-single-row{display:flex;box-sizing:border-box;padding:0 16px;width:100%;flex-direction:row;align-items:center;white-space:nowrap}.mat-toolbar-multiple-rows{display:flex;box-sizing:border-box;flex-direction:column;width:100%}.mat-toolbar-multiple-rows{min-height:64px}.mat-toolbar-row,.mat-toolbar-single-row{height:64px}@media(max-width: 599px){.mat-toolbar-multiple-rows{min-height:56px}.mat-toolbar-row,.mat-toolbar-single-row{height:56px}}/*# sourceMappingURL=toolbar.css.map */\n" ],
            data: {}
        });
        function View_MatToolbar_0(_l) {
            return core.Ub(2, [ core.Ib(null, 0), core.Ib(null, 1) ], null, null);
        }