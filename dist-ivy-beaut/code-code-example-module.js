(window.webpackJsonp = window.webpackJsonp || []).push([ [ 5 ], {
    DzVX: function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        var common = __webpack_require__("ofXK"), code_component = __webpack_require__("6CTB"), core = __webpack_require__("fXoL");
        const _c0 = [ "content" ];
        function CodeExampleComponent_header_3_Template(rf, ctx) {
            if (1 & rf && (core.Vb(0, "header"), core.Ec(1), core.Tb()), 2 & rf) {
                const ctx_r108 = core.gc();
                core.Ab(1), core.Fc(ctx_r108.header);
            }
        }
        const _c1 = [ "*" ];
        let code_example_component_CodeExampleComponent = (() => {
            class CodeExampleComponent {
                constructor() {
                    this._path = "", this.isAvoid = !1;
                }
                set header(header) {
                    this._header = header, this.classes = {
                        "headed-code": !!this.header,
                        "simple-code": !this.header
                    };
                }
                get header() {
                    return this._header;
                }
                set path(path) {
                    this._path = path, this.isAvoid = -1 !== this.path.indexOf(".avoid.");
                }
                get path() {
                    return this._path;
                }
                set hidecopy(hidecopy) {
                    this._hidecopy = null != hidecopy && "false" !== `${hidecopy}`;
                }
                get hidecopy() {
                    return this._hidecopy;
                }
                set hyphenatedHideCopy(hidecopy) {
                    this.hidecopy = hidecopy;
                }
                set capitalizedHideCopy(hidecopy) {
                    this.hidecopy = hidecopy;
                }
                ngAfterViewInit() {
                    this.aioCode.code = this.content.nativeElement.innerHTML;
                }
            }
            return CodeExampleComponent.ɵfac = function(t) {
                return new (t || CodeExampleComponent);
            }, CodeExampleComponent.ɵcmp = core.Jb({
                type: CodeExampleComponent,
                selectors: [ [ "code-example" ] ],
                viewQuery: function(rf, ctx) {
                    var _t;
                    1 & rf && (core.yc(_c0, !0), core.yc(code_component.a, !0)), 2 & rf && (core.qc(_t = core.dc()) && (ctx.content = _t.first), 
                    core.qc(_t = core.dc()) && (ctx.aioCode = _t.first));
                },
                hostBindings: function(rf, ctx, elIndex) {
                    1 & rf && core.Bb(1), 2 & rf && core.Fb("avoidFile", ctx.isAvoid);
                },
                inputs: {
                    language: "language",
                    linenums: "linenums",
                    region: "region",
                    header: "header",
                    path: "path",
                    hidecopy: "hidecopy",
                    hyphenatedHideCopy: [ "hide-copy", "hyphenatedHideCopy" ],
                    capitalizedHideCopy: [ "hideCopy", "capitalizedHideCopy" ]
                },
                ngContentSelectors: _c1,
                decls: 5,
                vars: 8,
                consts: [ [ 2, "display", "none" ], [ "content", "" ], [ 4, "ngIf" ], [ 3, "ngClass", "language", "linenums", "path", "region", "hideCopy", "header" ] ],
                template: function(rf, ctx) {
                    1 & rf && (core.kc(), core.Vb(0, "div", 0, 1), core.jc(2), core.Tb(), core.Cc(3, CodeExampleComponent_header_3_Template, 2, 1, "header", 2), 
                    core.Qb(4, "aio-code", 3)), 2 & rf && (core.Ab(3), core.lc("ngIf", ctx.header), 
                    core.Ab(1), core.lc("ngClass", ctx.classes)("language", ctx.language)("linenums", ctx.linenums)("path", ctx.path)("region", ctx.region)("hideCopy", ctx.hidecopy)("header", ctx.header));
                },
                directives: [ common.k, code_component.a, common.i ],
                encapsulation: 2
            }), CodeExampleComponent;
        })();
        var code_module = __webpack_require__("V90o");
        __webpack_require__.d(__webpack_exports__, "CodeExampleModule", (function() {
            return code_example_module_CodeExampleModule;
        }));
        let code_example_module_CodeExampleModule = (() => {
            class CodeExampleModule {
                constructor() {
                    this.customElementComponent = code_example_component_CodeExampleComponent;
                }
            }
            return CodeExampleModule.ɵmod = core.Nb({
                type: CodeExampleModule
            }), CodeExampleModule.ɵinj = core.Mb({
                factory: function(t) {
                    return new (t || CodeExampleModule);
                },
                imports: [ [ common.c, code_module.a ] ]
            }), CodeExampleModule;
        })();
    }
} ]);
//# sourceMappingURL=code-code-example-module.js.map