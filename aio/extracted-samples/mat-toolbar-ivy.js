        const toolbar_c0 = [ 1, "mat-toolbar-row" ], toolbar_c1 = [ 1, "mat-toolbar" ], toolbar_c2 = [ "*", [ [ "mat-toolbar-row" ] ] ], toolbar_c3 = [ "*", "mat-toolbar-row" ];
        class MatToolbarBase {
            constructor(_elementRef) {
                this._elementRef = _elementRef;
            }
        }
        const _MatToolbarMixinBase = Object(fesm2015_core.f)(MatToolbarBase);
        let toolbar_MatToolbarRow = (() => {
            class MatToolbarRow {}
            return MatToolbarRow.ɵfac = function(t) {
                return new (t || MatToolbarRow);
            }, MatToolbarRow.ɵdir = core.Kb({
                type: MatToolbarRow,
                selectors: [ [ "mat-toolbar-row" ] ],
                hostBindings: function(rf, ctx, elIndex) {
                    1 & rf && core.Ub(toolbar_c0);
                },
                exportAs: [ "matToolbarRow" ]
            }), MatToolbarRow;
        })(), toolbar_MatToolbar = (() => {
            class MatToolbar extends _MatToolbarMixinBase {
                constructor(elementRef, _platform, document) {
                    super(elementRef), this._platform = _platform, this._document = document;
                }
                ngAfterViewInit() {
                    Object(core.W)() && this._platform.isBrowser && (this._checkToolbarMixedModes(), 
                    this._toolbarRows.changes.subscribe(() => this._checkToolbarMixedModes()));
                }
                _checkToolbarMixedModes() {
                    this._toolbarRows.length && Array.from(this._elementRef.nativeElement.childNodes).filter(node => !(node.classList && node.classList.contains("mat-toolbar-row"))).filter(node => node.nodeType !== (this._document ? this._document.COMMENT_NODE : 8)).some(node => !(!node.textContent || !node.textContent.trim())) && function() {
                        throw Error("MatToolbar: Attempting to combine different toolbar modes. Either specify multiple `<mat-toolbar-row>` elements explicitly or just place content inside of a `<mat-toolbar>` for a single row.");
                    }();
                }
            }
            return MatToolbar.ɵfac = function(t) {
                return new (t || MatToolbar)(core.Pb(core.k), core.Pb(platform.a), core.Pb(common.d));
            }, MatToolbar.ɵcmp = core.Jb({
                type: MatToolbar,
                selectors: [ [ "mat-toolbar" ] ],
                contentQueries: function(rf, ctx, dirIndex) {
                    var _t;
                    1 & rf && core.Hb(dirIndex, toolbar_MatToolbarRow, !1), 2 & rf && core.qc(_t = core.dc()) && (ctx._toolbarRows = _t);
                },
                hostBindings: function(rf, ctx, elIndex) {
                    1 & rf && (core.Bb(2), core.Ub(toolbar_c1)), 2 & rf && (core.Fb("mat-toolbar-multiple-rows", ctx._toolbarRows.length > 0), 
                    core.Fb("mat-toolbar-single-row", 0 === ctx._toolbarRows.length));
                },
                inputs: {
                    color: "color"
                },
                exportAs: [ "matToolbar" ],
                features: [ core.xb ],
                ngContentSelectors: toolbar_c3,
                decls: 2,
                vars: 0,
                template: function(rf, ctx) {
                    1 & rf && (core.kc(toolbar_c2), core.jc(0), core.jc(1, 1));
                },
                styles: [ "@media(-ms-high-contrast: active){.mat-toolbar{outline:solid 1px}}.mat-toolbar-row,.mat-toolbar-single-row{display:flex;box-sizing:border-box;padding:0 16px;width:100%;flex-direction:row;align-items:center;white-space:nowrap}.mat-toolbar-multiple-rows{display:flex;box-sizing:border-box;flex-direction:column;width:100%}.mat-toolbar-multiple-rows{min-height:64px}.mat-toolbar-row,.mat-toolbar-single-row{height:64px}@media(max-width: 599px){.mat-toolbar-multiple-rows{min-height:56px}.mat-toolbar-row,.mat-toolbar-single-row{height:56px}}/*# sourceMappingURL=toolbar.css.map */\n" ],
                encapsulation: 2,
                changeDetection: 0
            }), MatToolbar;
        })(), toolbar_MatToolbarModule = (() => {
            class MatToolbarModule {}
            return MatToolbarModule.ɵmod = core.Nb({
                type: MatToolbarModule
            }), MatToolbarModule.ɵinj = core.Mb({
                factory: function(t) {
                    return new (t || MatToolbarModule);
                },
                imports: [ [ fesm2015_core.b ], fesm2015_core.b ]
            }), MatToolbarModule;
        })();