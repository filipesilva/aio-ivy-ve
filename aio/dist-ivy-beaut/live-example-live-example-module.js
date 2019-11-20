(window.webpackJsonp = window.webpackJsonp || []).push([ [ 8 ], {
    m7ka: function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        var common = __webpack_require__("ofXK"), document_service = __webpack_require__("jn67"), core = __webpack_require__("fXoL");
        function getAttrValue(attrs, attr) {
            const key = "string" == typeof attr ? attr : attr.find(a => attrs.hasOwnProperty(a.toLowerCase()));
            return void 0 === key ? void 0 : attrs[key.toLowerCase()];
        }
        function boolFromValue(attrValue, def = !1) {
            return void 0 === attrValue ? def : "false" !== attrValue.trim();
        }
        const _c0 = [ "content" ];
        function LiveExampleComponent_span_4_p_3_Template(rf, ctx) {
            if (1 & rf && (core.Vb(0, "p"), core.Ec(1, " You can also "), core.Vb(2, "a", 8), 
            core.Ec(3, "download this example"), core.Tb(), core.Ec(4, ". "), core.Tb()), 2 & rf) {
                const ctx_r118 = core.gc(2);
                core.Ab(2), core.lc("href", ctx_r118.zip, core.wc);
            }
        }
        function LiveExampleComponent_span_4_Template(rf, ctx) {
            if (1 & rf && (core.Vb(0, "span"), core.Vb(1, "div", 5), core.Qb(2, "aio-embedded-stackblitz", 6), 
            core.Tb(), core.Cc(3, LiveExampleComponent_span_4_p_3_Template, 5, 1, "p", 7), core.Tb()), 
            2 & rf) {
                const ctx_r115 = core.gc();
                core.Ab(1), core.mc("title", ctx_r115.title), core.Ab(1), core.lc("src", ctx_r115.stackblitz), 
                core.Ab(1), core.lc("ngIf", ctx_r115.enableDownload);
            }
        }
        function LiveExampleComponent_span_5_Template(rf, ctx) {
            if (1 & rf && (core.Vb(0, "span"), core.Vb(1, "a", 9), core.Ec(2), core.Tb(), core.Tb()), 
            2 & rf) {
                const ctx_r116 = core.gc();
                core.Ab(1), core.mc("title", ctx_r116.title), core.lc("href", ctx_r116.zip, core.wc), 
                core.Ab(1), core.Fc(ctx_r116.title);
            }
        }
        function LiveExampleComponent_span_6_span_3_Template(rf, ctx) {
            if (1 & rf && (core.Vb(0, "span"), core.Ec(1, " / "), core.Vb(2, "a", 8), core.Ec(3, "download example"), 
            core.Tb(), core.Tb()), 2 & rf) {
                const ctx_r119 = core.gc(2);
                core.Ab(2), core.lc("href", ctx_r119.zip, core.wc);
            }
        }
        function LiveExampleComponent_span_6_Template(rf, ctx) {
            if (1 & rf && (core.Vb(0, "span"), core.Vb(1, "a", 10), core.Ec(2), core.Tb(), core.Cc(3, LiveExampleComponent_span_6_span_3_Template, 4, 1, "span", 7), 
            core.Tb()), 2 & rf) {
                const ctx_r117 = core.gc();
                core.Ab(1), core.mc("title", ctx_r117.title), core.lc("href", ctx_r117.stackblitz, core.wc), 
                core.Ab(1), core.Fc(ctx_r117.title), core.Ab(1), core.lc("ngIf", ctx_r117.enableDownload);
            }
        }
        const _c1 = [ "*" ], _c2 = [ "iframe" ], LIVE_EXAMPLE_BASE = document_service.a + "live-examples/", ZIP_BASE = document_service.a + "zips/";
        let live_example_component_LiveExampleComponent = (() => {
            class LiveExampleComponent {
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
            return LiveExampleComponent.ɵfac = function(t) {
                return new (t || LiveExampleComponent)(core.Pb(core.k), core.Pb(common.g));
            }, LiveExampleComponent.ɵcmp = core.Jb({
                type: LiveExampleComponent,
                selectors: [ [ "live-example" ] ],
                viewQuery: function(rf, ctx) {
                    var _t;
                    1 & rf && core.yc(_c0, !0), 2 & rf && core.qc(_t = core.dc()) && (ctx.content = _t.first);
                },
                ngContentSelectors: _c1,
                decls: 7,
                vars: 3,
                consts: [ [ 2, "display", "none" ], [ "content", "" ], [ 3, "ngSwitch" ], [ 4, "ngSwitchCase" ], [ 4, "ngSwitchDefault" ], [ 3, "title" ], [ 3, "src" ], [ 4, "ngIf" ], [ "download", "", "title", "Download example", 3, "href" ], [ "download", "", 3, "href", "title" ], [ "target", "_blank", 3, "href", "title" ] ],
                template: function(rf, ctx) {
                    1 & rf && (core.kc(), core.Vb(0, "span", 0, 1), core.jc(2), core.Tb(), core.Vb(3, "span", 2), 
                    core.Cc(4, LiveExampleComponent_span_4_Template, 4, 3, "span", 3), core.Cc(5, LiveExampleComponent_span_5_Template, 3, 3, "span", 3), 
                    core.Cc(6, LiveExampleComponent_span_6_Template, 4, 4, "span", 4), core.Tb()), 2 & rf && (core.Ab(3), 
                    core.lc("ngSwitch", ctx.mode), core.Ab(1), core.lc("ngSwitchCase", "embedded"), 
                    core.Ab(1), core.lc("ngSwitchCase", "downloadOnly"));
                },
                directives: function() {
                    return [ common.m, common.n, common.o, live_example_component_EmbeddedStackblitzComponent, common.k ];
                },
                encapsulation: 2
            }), LiveExampleComponent;
        })(), live_example_component_EmbeddedStackblitzComponent = (() => {
            class EmbeddedStackblitzComponent {
                ngAfterViewInit() {
                    this.iframe && (this.iframe.nativeElement.src = this.src);
                }
            }
            return EmbeddedStackblitzComponent.ɵfac = function(t) {
                return new (t || EmbeddedStackblitzComponent);
            }, EmbeddedStackblitzComponent.ɵcmp = core.Jb({
                type: EmbeddedStackblitzComponent,
                selectors: [ [ "aio-embedded-stackblitz" ] ],
                viewQuery: function(rf, ctx) {
                    var _t;
                    1 & rf && core.yc(_c2, !0), 2 & rf && core.qc(_t = core.dc()) && (ctx.iframe = _t.first);
                },
                inputs: {
                    src: "src"
                },
                decls: 2,
                vars: 0,
                consts: [ [ "frameborder", "0", "width", "100%", "height", "100%" ], [ "iframe", "" ] ],
                template: function(rf, ctx) {
                    1 & rf && core.Qb(0, "iframe", 0, 1);
                },
                styles: [ "iframe[_ngcontent-%COMP%] { min-height: 400px; }" ]
            }), EmbeddedStackblitzComponent;
        })();
        __webpack_require__.d(__webpack_exports__, "LiveExampleModule", (function() {
            return live_example_module_LiveExampleModule;
        }));
        let live_example_module_LiveExampleModule = (() => {
            class LiveExampleModule {
                constructor() {
                    this.customElementComponent = live_example_component_LiveExampleComponent;
                }
            }
            return LiveExampleModule.ɵmod = core.Nb({
                type: LiveExampleModule
            }), LiveExampleModule.ɵinj = core.Mb({
                factory: function(t) {
                    return new (t || LiveExampleModule);
                },
                imports: [ [ common.c ] ]
            }), LiveExampleModule;
        })();
    }
} ]);
//# sourceMappingURL=live-example-live-example-module.js.map