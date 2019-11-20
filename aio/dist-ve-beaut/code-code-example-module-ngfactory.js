(window.webpackJsonp = window.webpackJsonp || []).push([ [ 5 ], {
    zZvA: function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        var core = __webpack_require__("8Y7J");
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
        class code_example_module_CodeExampleModule {
            constructor() {
                this.customElementComponent = CodeExampleComponent;
            }
        }
        var index_ngfactory = __webpack_require__("007U"), code_component_ngfactory = __webpack_require__("0GXo"), common = __webpack_require__("SVse"), code_component = __webpack_require__("6CTB"), snack_bar = __webpack_require__("zHaW"), pretty_printer_service = __webpack_require__("vVVL"), copier_service = __webpack_require__("/ck9"), logger_service = __webpack_require__("vHPH"), RenderType_CodeExampleComponent = core.ub({
            encapsulation: 2,
            styles: [],
            data: {}
        });
        function View_CodeExampleComponent_1(_l) {
            return core.Ub(0, [ (_l()(), core.wb(0, 0, null, null, 1, "header", [], null, null, null, null, null)), (_l()(), 
            core.Rb(1, null, [ "", "" ])) ], null, (function(_ck, _v) {
                _ck(_v, 1, 0, _v.component.header);
            }));
        }
        function View_CodeExampleComponent_0(_l) {
            return core.Ub(0, [ core.Nb(402653184, 1, {
                content: 0
            }), core.Nb(402653184, 2, {
                aioCode: 0
            }), (_l()(), core.wb(2, 0, [ [ 1, 0 ], [ "content", 1 ] ], null, 1, "div", [ [ "style", "display: none" ] ], null, null, null, null, null)), core.Ib(null, 0), (_l()(), 
            core.gb(16777216, null, null, 1, null, View_CodeExampleComponent_1)), core.vb(5, 16384, null, 0, common.k, [ core.O, core.L ], {
                ngIf: [ 0, "ngIf" ]
            }, null), (_l()(), core.wb(6, 0, null, null, 3, "aio-code", [], null, null, null, code_component_ngfactory.c, code_component_ngfactory.b)), core.Mb(512, null, common.w, common.x, [ core.r, core.s, core.k, core.D ]), core.vb(8, 278528, null, 0, common.i, [ common.w ], {
                ngClass: [ 0, "ngClass" ]
            }, null), core.vb(9, 573440, [ [ 2, 4 ] ], 0, code_component.a, [ snack_bar.b, pretty_printer_service.a, copier_service.a, logger_service.a ], {
                hideCopy: [ 0, "hideCopy" ],
                language: [ 1, "language" ],
                linenums: [ 2, "linenums" ],
                path: [ 3, "path" ],
                region: [ 4, "region" ],
                header: [ 5, "header" ]
            }, null) ], (function(_ck, _v) {
                var _co = _v.component;
                _ck(_v, 5, 0, _co.header), _ck(_v, 8, 0, _co.classes), _ck(_v, 9, 0, _co.hidecopy, _co.language, _co.linenums, _co.path, _co.region, _co.header);
            }), null);
        }
        function View_CodeExampleComponent_Host_0(_l) {
            return core.Ub(0, [ (_l()(), core.wb(0, 0, null, null, 1, "code-example", [], [ [ 2, "avoidFile", null ] ], null, null, View_CodeExampleComponent_0, RenderType_CodeExampleComponent)), core.vb(1, 4243456, null, 0, CodeExampleComponent, [], null, null) ], null, (function(_ck, _v) {
                _ck(_v, 0, 0, core.Jb(_v, 1).isAvoid);
            }));
        }
        var CodeExampleComponentNgFactory = core.sb("code-example", CodeExampleComponent, View_CodeExampleComponent_Host_0, {
            language: "language",
            linenums: "linenums",
            region: "region",
            header: "header",
            path: "path",
            hidecopy: "hidecopy",
            hyphenatedHideCopy: "hide-copy",
            capitalizedHideCopy: "hideCopy"
        }, {}, [ "*" ]), overlay = __webpack_require__("1O3W"), bidi = __webpack_require__("9gLZ"), portal = __webpack_require__("1z/I"), platform = __webpack_require__("SCoL"), scrolling = __webpack_require__("7KAL"), fesm2015_core = __webpack_require__("UhP/"), fesm2015_button = __webpack_require__("Dxy4"), code_module = __webpack_require__("V90o");
        __webpack_require__.d(__webpack_exports__, "CodeExampleModuleNgFactory", (function() {
            return CodeExampleModuleNgFactory;
        }));
        var CodeExampleModuleNgFactory = core.tb(code_example_module_CodeExampleModule, [], (function(_l) {
            return core.Gb([ core.Hb(512, core.j, core.Y, [ [ 8, [ index_ngfactory.a, index_ngfactory.b, code_component_ngfactory.a, CodeExampleComponentNgFactory ] ], [ 3, core.j ], core.w ]), core.Hb(4608, common.m, common.l, [ core.t ]), core.Hb(4608, overlay.a, overlay.a, [ overlay.g, overlay.c, core.j, overlay.f, overlay.d, core.q, core.y, common.d, bidi.b, [ 2, common.g ] ]), core.Hb(5120, overlay.h, overlay.i, [ overlay.a ]), core.Hb(4608, pretty_printer_service.a, pretty_printer_service.a, [ logger_service.a ]), core.Hb(4608, copier_service.a, copier_service.a, []), core.Hb(1073742336, common.c, common.c, []), core.Hb(1073742336, bidi.a, bidi.a, []), core.Hb(1073742336, portal.g, portal.g, []), core.Hb(1073742336, platform.b, platform.b, []), core.Hb(1073742336, scrolling.c, scrolling.c, []), core.Hb(1073742336, overlay.e, overlay.e, []), core.Hb(1073742336, fesm2015_core.c, fesm2015_core.c, [ [ 2, fesm2015_core.a ] ]), core.Hb(1073742336, fesm2015_core.e, fesm2015_core.e, []), core.Hb(1073742336, fesm2015_button.c, fesm2015_button.c, []), core.Hb(1073742336, snack_bar.e, snack_bar.e, []), core.Hb(1073742336, code_module.a, code_module.a, []), core.Hb(1073742336, code_example_module_CodeExampleModule, code_example_module_CodeExampleModule, []) ]);
        }));
    }
} ]);
//# sourceMappingURL=code-code-example-module-ngfactory.js.map