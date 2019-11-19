(window.webpackJsonp = window.webpackJsonp || []).push([ [ 8 ], {
    Rz96: function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        var core = __webpack_require__("8Y7J"), document_service = __webpack_require__("jn67");
        function getAttrValue(attrs, attr) {
            const key = "string" == typeof attr ? attr : attr.find(a => attrs.hasOwnProperty(a.toLowerCase()));
            return void 0 === key ? void 0 : attrs[key.toLowerCase()];
        }
        function boolFromValue(attrValue, def = !1) {
            return void 0 === attrValue ? def : "false" !== attrValue.trim();
        }
        const LIVE_EXAMPLE_BASE = document_service.a + "live-examples/", ZIP_BASE = document_service.a + "zips/";
        class live_example_component_LiveExampleComponent {
            constructor(elementRef, location) {
                const attrs = function(el) {
                    const attrs = el instanceof core.k ? el.nativeElement.attributes : el.attributes, attrMap = {};
                    for (const attr of attrs) attrMap[attr.name.toLowerCase()] = attr.value;
                    return attrMap;
                }(elementRef), exampleDir = this.getExampleDir(attrs, location.path(!1)), stackblitzName = this.getStackblitzName(attrs);
                this.mode = this.getMode(attrs), this.enableDownload = this.getEnableDownload(attrs), 
                this.stackblitz = this.getStackblitz(exampleDir, stackblitzName, "embedded" === this.mode), 
                this.zip = this.getZip(exampleDir, stackblitzName), this.title = this.getTitle(attrs);
            }
            ngAfterContentInit() {
                const textContent = this.content.nativeElement.textContent.trim();
                textContent && (this.title = textContent);
            }
            getEnableDownload(attrs) {
                return !boolFromValue(getAttrValue(attrs, "noDownload"));
            }
            getExampleDir(attrs, path) {
                let exampleDir = getAttrValue(attrs, "name");
                if (!exampleDir) {
                    const match = path.match(/[^/?#]+(?=\/?(?:\?|#|$))/);
                    exampleDir = match ? match[0] : "index";
                }
                return exampleDir.trim();
            }
            getMode(attrs) {
                const downloadOnly = boolFromValue(getAttrValue(attrs, "downloadOnly")), isEmbedded = boolFromValue(getAttrValue(attrs, "embedded"));
                return downloadOnly ? "downloadOnly" : isEmbedded ? "embedded" : "default";
            }
            getStackblitz(exampleDir, stackblitzName, isEmbedded) {
                return `${LIVE_EXAMPLE_BASE}${exampleDir}/${stackblitzName}stackblitz.html${isEmbedded ? "?ctl=1" : ""}`;
            }
            getStackblitzName(attrs) {
                const attrValue = (getAttrValue(attrs, "stackblitz") || "").trim();
                return attrValue && `${attrValue}.`;
            }
            getTitle(attrs) {
                return (getAttrValue(attrs, "title") || "live example").trim();
            }
            getZip(exampleDir, stackblitzName) {
                const zipName = exampleDir.split("/")[0];
                return `${ZIP_BASE}${exampleDir}/${stackblitzName}${zipName}.zip`;
            }
        }
        class EmbeddedStackblitzComponent {
            ngAfterViewInit() {
                this.iframe && (this.iframe.nativeElement.src = this.src);
            }
        }
        class live_example_module_LiveExampleModule {
            constructor() {
                this.customElementComponent = live_example_component_LiveExampleComponent;
            }
        }
        var common = __webpack_require__("SVse"), RenderType_LiveExampleComponent = core.ub({
            encapsulation: 2,
            styles: [],
            data: {}
        });
        function View_LiveExampleComponent_2(_l) {
            return core.Ub(0, [ (_l()(), core.wb(0, 0, null, null, 4, "p", [], null, null, null, null, null)), (_l()(), 
            core.Rb(-1, null, [ " You can also " ])), (_l()(), core.wb(2, 0, null, null, 1, "a", [ [ "download", "" ], [ "title", "Download example" ] ], [ [ 8, "href", 4 ] ], null, null, null, null)), (_l()(), 
            core.Rb(-1, null, [ "download this example" ])), (_l()(), core.Rb(-1, null, [ ". " ])) ], null, (function(_ck, _v) {
                _ck(_v, 2, 0, _v.component.zip);
            }));
        }
        function View_LiveExampleComponent_1(_l) {
            return core.Ub(0, [ (_l()(), core.wb(0, 0, null, null, 5, "span", [], null, null, null, null, null)), (_l()(), 
            core.wb(1, 0, null, null, 2, "div", [], [ [ 8, "title", 0 ] ], null, null, null, null)), (_l()(), 
            core.wb(2, 0, null, null, 1, "aio-embedded-stackblitz", [], null, null, null, View_EmbeddedStackblitzComponent_0, RenderType_EmbeddedStackblitzComponent)), core.vb(3, 4243456, null, 0, EmbeddedStackblitzComponent, [], {
                src: [ 0, "src" ]
            }, null), (_l()(), core.gb(16777216, null, null, 1, null, View_LiveExampleComponent_2)), core.vb(5, 16384, null, 0, common.k, [ core.O, core.L ], {
                ngIf: [ 0, "ngIf" ]
            }, null) ], (function(_ck, _v) {
                var _co = _v.component;
                _ck(_v, 3, 0, _co.stackblitz), _ck(_v, 5, 0, _co.enableDownload);
            }), (function(_ck, _v) {
                _ck(_v, 1, 0, core.Bb(1, "", _v.component.title, ""));
            }));
        }
        function View_LiveExampleComponent_3(_l) {
            return core.Ub(0, [ (_l()(), core.wb(0, 0, null, null, 2, "span", [], null, null, null, null, null)), (_l()(), 
            core.wb(1, 0, null, null, 1, "a", [ [ "download", "" ] ], [ [ 8, "href", 4 ], [ 8, "title", 0 ] ], null, null, null, null)), (_l()(), 
            core.Rb(2, null, [ "", "" ])) ], null, (function(_ck, _v) {
                var _co = _v.component;
                _ck(_v, 1, 0, _co.zip, core.Bb(1, "", _co.title, "")), _ck(_v, 2, 0, _co.title);
            }));
        }
        function View_LiveExampleComponent_5(_l) {
            return core.Ub(0, [ (_l()(), core.wb(0, 0, null, null, 3, "span", [], null, null, null, null, null)), (_l()(), 
            core.Rb(-1, null, [ " / " ])), (_l()(), core.wb(2, 0, null, null, 1, "a", [ [ "download", "" ], [ "title", "Download example" ] ], [ [ 8, "href", 4 ] ], null, null, null, null)), (_l()(), 
            core.Rb(-1, null, [ "download example" ])) ], null, (function(_ck, _v) {
                _ck(_v, 2, 0, _v.component.zip);
            }));
        }
        function View_LiveExampleComponent_4(_l) {
            return core.Ub(0, [ (_l()(), core.wb(0, 0, null, null, 4, "span", [], null, null, null, null, null)), (_l()(), 
            core.wb(1, 0, null, null, 1, "a", [ [ "target", "_blank" ] ], [ [ 8, "href", 4 ], [ 8, "title", 0 ] ], null, null, null, null)), (_l()(), 
            core.Rb(2, null, [ "", "" ])), (_l()(), core.gb(16777216, null, null, 1, null, View_LiveExampleComponent_5)), core.vb(4, 16384, null, 0, common.k, [ core.O, core.L ], {
                ngIf: [ 0, "ngIf" ]
            }, null) ], (function(_ck, _v) {
                _ck(_v, 4, 0, _v.component.enableDownload);
            }), (function(_ck, _v) {
                var _co = _v.component;
                _ck(_v, 1, 0, _co.stackblitz, core.Bb(1, "", _co.title, "")), _ck(_v, 2, 0, _co.title);
            }));
        }
        function View_LiveExampleComponent_0(_l) {
            return core.Ub(0, [ core.Nb(402653184, 1, {
                content: 0
            }), (_l()(), core.wb(1, 0, [ [ 1, 0 ], [ "content", 1 ] ], null, 1, "span", [ [ "style", "display: none" ] ], null, null, null, null, null)), core.Ib(null, 0), (_l()(), 
            core.wb(3, 0, null, null, 7, "span", [], null, null, null, null, null)), core.vb(4, 16384, null, 0, common.o, [], {
                ngSwitch: [ 0, "ngSwitch" ]
            }, null), (_l()(), core.gb(16777216, null, null, 1, null, View_LiveExampleComponent_1)), core.vb(6, 278528, null, 0, common.p, [ core.O, core.L, common.o ], {
                ngSwitchCase: [ 0, "ngSwitchCase" ]
            }, null), (_l()(), core.gb(16777216, null, null, 1, null, View_LiveExampleComponent_3)), core.vb(8, 278528, null, 0, common.p, [ core.O, core.L, common.o ], {
                ngSwitchCase: [ 0, "ngSwitchCase" ]
            }, null), (_l()(), core.gb(16777216, null, null, 1, null, View_LiveExampleComponent_4)), core.vb(10, 16384, null, 0, common.q, [ core.O, core.L, common.o ], null, null) ], (function(_ck, _v) {
                _ck(_v, 4, 0, _v.component.mode), _ck(_v, 6, 0, "embedded"), _ck(_v, 8, 0, "downloadOnly");
            }), null);
        }
        function View_LiveExampleComponent_Host_0(_l) {
            return core.Ub(0, [ (_l()(), core.wb(0, 0, null, null, 1, "live-example", [], null, null, null, View_LiveExampleComponent_0, RenderType_LiveExampleComponent)), core.vb(1, 1097728, null, 0, live_example_component_LiveExampleComponent, [ core.k, common.g ], null, null) ], null, null);
        }
        var LiveExampleComponentNgFactory = core.sb("live-example", live_example_component_LiveExampleComponent, View_LiveExampleComponent_Host_0, {}, {}, [ "*" ]), RenderType_EmbeddedStackblitzComponent = core.ub({
            encapsulation: 0,
            styles: [ "iframe[_ngcontent-%COMP%] { min-height: 400px; }" ],
            data: {}
        });
        function View_EmbeddedStackblitzComponent_0(_l) {
            return core.Ub(0, [ core.Nb(402653184, 1, {
                iframe: 0
            }), (_l()(), core.wb(1, 0, [ [ 1, 0 ], [ "iframe", 1 ] ], null, 0, "iframe", [ [ "frameborder", "0" ], [ "height", "100%" ], [ "width", "100%" ] ], null, null, null, null, null)) ], null, null);
        }
        __webpack_require__.d(__webpack_exports__, "LiveExampleModuleNgFactory", (function() {
            return LiveExampleModuleNgFactory;
        }));
        var LiveExampleModuleNgFactory = core.tb(live_example_module_LiveExampleModule, [], (function(_l) {
            return core.Gb([ core.Hb(512, core.j, core.Y, [ [ 8, [ LiveExampleComponentNgFactory ] ], [ 3, core.j ], core.w ]), core.Hb(4608, common.m, common.l, [ core.t ]), core.Hb(1073742336, common.c, common.c, []), core.Hb(1073742336, live_example_module_LiveExampleModule, live_example_module_LiveExampleModule, []) ]);
        }));
    }
} ]);
//# sourceMappingURL=live-example-live-example-module-ngfactory.js.map