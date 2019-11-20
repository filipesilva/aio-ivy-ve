(window.webpackJsonp = window.webpackJsonp || []).push([ [ 10 ], {
    1: function(module, exports, __webpack_require__) {
        module.exports = __webpack_require__("hN/g");
    },
    aVe3: function(module, exports) {
        (function() {
            "use strict";
            var aa = new Set("annotation-xml color-profile font-face font-face-src font-face-uri font-face-format font-face-name missing-glyph".split(" "));
            function g(b) {
                var a = aa.has(b);
                return b = /^[a-z][.0-9_a-z]*-[\-.0-9_a-z]*$/.test(b), !a && b;
            }
            function l(b) {
                var a = b.isConnected;
                if (void 0 !== a) return a;
                for (;b && !(b.__CE_isImportDocument || b instanceof Document); ) b = b.parentNode || (window.ShadowRoot && b instanceof ShadowRoot ? b.host : void 0);
                return !(!b || !(b.__CE_isImportDocument || b instanceof Document));
            }
            function p(b, a) {
                for (;a && a !== b && !a.nextSibling; ) a = a.parentNode;
                return a && a !== b ? a.nextSibling : null;
            }
            function q(b, a, d) {
                d = void 0 === d ? new Set : d;
                for (var c = b; c; ) {
                    if (c.nodeType === Node.ELEMENT_NODE) {
                        var e = c;
                        a(e);
                        var f = e.localName;
                        if ("link" === f && "import" === e.getAttribute("rel")) {
                            if ((c = e.import) instanceof Node && !d.has(c)) for (d.add(c), c = c.firstChild; c; c = c.nextSibling) q(c, a, d);
                            c = p(b, e);
                            continue;
                        }
                        if ("template" === f) {
                            c = p(b, e);
                            continue;
                        }
                        if (e = e.__CE_shadowRoot) for (e = e.firstChild; e; e = e.nextSibling) q(e, a, d);
                    }
                    c = c.firstChild ? c.firstChild : p(b, c);
                }
            }
            function t(b, a, d) {
                b[a] = d;
            }
            function u() {
                this.a = new Map, this.f = new Map, this.c = [], this.b = !1;
            }
            function v(b, a) {
                b.b = !0, b.c.push(a);
            }
            function w(b, a) {
                b.b && q(a, (function(a) {
                    return x(b, a);
                }));
            }
            function x(b, a) {
                if (b.b && !a.__CE_patched) {
                    a.__CE_patched = !0;
                    for (var d = 0; d < b.c.length; d++) b.c[d](a);
                }
            }
            function y(b, a) {
                var d = [];
                for (q(a, (function(a) {
                    return d.push(a);
                })), a = 0; a < d.length; a++) {
                    var c = d[a];
                    1 === c.__CE_state ? b.connectedCallback(c) : z(b, c);
                }
            }
            function A(b, a) {
                var d = [];
                for (q(a, (function(a) {
                    return d.push(a);
                })), a = 0; a < d.length; a++) {
                    var c = d[a];
                    1 === c.__CE_state && b.disconnectedCallback(c);
                }
            }
            function B(b, a, d) {
                var c = (d = void 0 === d ? {} : d).u || new Set, e = d.h || function(a) {
                    return z(b, a);
                }, f = [];
                if (q(a, (function(a) {
                    if ("link" === a.localName && "import" === a.getAttribute("rel")) {
                        var d = a.import;
                        d instanceof Node && (d.__CE_isImportDocument = !0, d.__CE_hasRegistry = !0), d && "complete" === d.readyState ? d.__CE_documentLoadHandled = !0 : a.addEventListener("load", (function() {
                            var d = a.import;
                            if (!d.__CE_documentLoadHandled) {
                                d.__CE_documentLoadHandled = !0;
                                var f = new Set(c);
                                f.delete(d), B(b, d, {
                                    u: f,
                                    h: e
                                });
                            }
                        }));
                    } else f.push(a);
                }), c), b.b) for (a = 0; a < f.length; a++) x(b, f[a]);
                for (a = 0; a < f.length; a++) e(f[a]);
            }
            function z(b, a) {
                if (void 0 === a.__CE_state) {
                    var d = a.ownerDocument;
                    if ((d.defaultView || d.__CE_isImportDocument && d.__CE_hasRegistry) && (d = b.a.get(a.localName))) {
                        d.constructionStack.push(a);
                        var c = d.constructorFunction;
                        try {
                            try {
                                if (new c !== a) throw Error("The custom element constructor did not produce the element being upgraded.");
                            } finally {
                                d.constructionStack.pop();
                            }
                        } catch (m) {
                            throw a.__CE_state = 2, m;
                        }
                        if (a.__CE_state = 1, a.__CE_definition = d, d.attributeChangedCallback) for (d = d.observedAttributes, 
                        c = 0; c < d.length; c++) {
                            var e = d[c], f = a.getAttribute(e);
                            null !== f && b.attributeChangedCallback(a, e, null, f, null);
                        }
                        l(a) && b.connectedCallback(a);
                    }
                }
            }
            function C(b) {
                var a = document;
                this.c = b, this.a = a, this.b = void 0, B(this.c, this.a), "loading" === this.a.readyState && (this.b = new MutationObserver(this.f.bind(this)), 
                this.b.observe(this.a, {
                    childList: !0,
                    subtree: !0
                }));
            }
            function D(b) {
                b.b && b.b.disconnect();
            }
            function ca() {
                var b = this;
                this.b = this.a = void 0, this.c = new Promise((function(a) {
                    b.b = a, b.a && a(b.a);
                }));
            }
            function E(b) {
                if (b.a) throw Error("Already resolved.");
                b.a = void 0, b.b && b.b(void 0);
            }
            function F(b) {
                this.c = !1, this.a = b, this.j = new Map, this.f = function(a) {
                    return a();
                }, this.b = !1, this.i = [], this.o = new C(b);
            }
            u.prototype.connectedCallback = function(b) {
                var a = b.__CE_definition;
                a.connectedCallback && a.connectedCallback.call(b);
            }, u.prototype.disconnectedCallback = function(b) {
                var a = b.__CE_definition;
                a.disconnectedCallback && a.disconnectedCallback.call(b);
            }, u.prototype.attributeChangedCallback = function(b, a, d, c, e) {
                var f = b.__CE_definition;
                f.attributeChangedCallback && -1 < f.observedAttributes.indexOf(a) && f.attributeChangedCallback.call(b, a, d, c, e);
            }, C.prototype.f = function(b) {
                var a = this.a.readyState;
                for ("interactive" !== a && "complete" !== a || D(this), a = 0; a < b.length; a++) for (var d = b[a].addedNodes, c = 0; c < d.length; c++) B(this.c, d[c]);
            }, F.prototype.l = function(b, a) {
                var d = this;
                if (!(a instanceof Function)) throw new TypeError("Custom element constructors must be functions.");
                if (!g(b)) throw new SyntaxError("The element name '" + b + "' is not valid.");
                if (this.a.a.get(b)) throw Error("A custom element with name '" + b + "' has already been defined.");
                if (this.c) throw Error("A custom element is already being defined.");
                this.c = !0;
                try {
                    var c = function(a) {
                        var b = e[a];
                        if (void 0 !== b && !(b instanceof Function)) throw Error("The '" + a + "' callback must be a function.");
                        return b;
                    }, e = a.prototype;
                    if (!(e instanceof Object)) throw new TypeError("The custom element constructor's prototype is not an object.");
                    var f = c("connectedCallback"), m = c("disconnectedCallback"), k = c("adoptedCallback"), h = c("attributeChangedCallback"), n = a.observedAttributes || [];
                } catch (r) {
                    return;
                } finally {
                    this.c = !1;
                }
                (function(b, a, d) {
                    b.a.set(a, d), b.f.set(d.constructorFunction, d);
                })(this.a, b, a = {
                    localName: b,
                    constructorFunction: a,
                    connectedCallback: f,
                    disconnectedCallback: m,
                    adoptedCallback: k,
                    attributeChangedCallback: h,
                    observedAttributes: n,
                    constructionStack: []
                }), this.i.push(a), this.b || (this.b = !0, this.f((function() {
                    return function(b) {
                        if (!1 !== b.b) {
                            b.b = !1;
                            for (var a = b.i, d = [], c = new Map, e = 0; e < a.length; e++) c.set(a[e].localName, []);
                            for (B(b.a, document, {
                                h: function(a) {
                                    if (void 0 === a.__CE_state) {
                                        var e = a.localName, f = c.get(e);
                                        f ? f.push(a) : b.a.a.get(e) && d.push(a);
                                    }
                                }
                            }), e = 0; e < d.length; e++) z(b.a, d[e]);
                            for (;0 < a.length; ) {
                                var f = a.shift();
                                e = f.localName, f = c.get(f.localName);
                                for (var m = 0; m < f.length; m++) z(b.a, f[m]);
                                (e = b.j.get(e)) && E(e);
                            }
                        }
                    }(d);
                })));
            }, F.prototype.h = function(b) {
                B(this.a, b);
            }, F.prototype.get = function(b) {
                if (b = this.a.a.get(b)) return b.constructorFunction;
            }, F.prototype.m = function(b) {
                if (!g(b)) return Promise.reject(new SyntaxError("'" + b + "' is not a valid custom element name."));
                var a = this.j.get(b);
                return a ? a.c : (a = new ca, this.j.set(b, a), this.a.a.get(b) && !this.i.some((function(a) {
                    return a.localName === b;
                })) && E(a), a.c);
            }, F.prototype.s = function(b) {
                D(this.o);
                var a = this.f;
                this.f = function(d) {
                    return b((function() {
                        return a(d);
                    }));
                };
            }, window.CustomElementRegistry = F, F.prototype.define = F.prototype.l, F.prototype.upgrade = F.prototype.h, 
            F.prototype.get = F.prototype.get, F.prototype.whenDefined = F.prototype.m, F.prototype.polyfillWrapFlushCallback = F.prototype.s;
            var G = window.Document.prototype.createElement, H = window.Document.prototype.createElementNS, ea = window.Document.prototype.importNode, fa = window.Document.prototype.prepend, ha = window.Document.prototype.append, ia = window.DocumentFragment.prototype.prepend, ja = window.DocumentFragment.prototype.append, I = window.Node.prototype.cloneNode, J = window.Node.prototype.appendChild, K = window.Node.prototype.insertBefore, L = window.Node.prototype.removeChild, M = window.Node.prototype.replaceChild, N = Object.getOwnPropertyDescriptor(window.Node.prototype, "textContent"), O = window.Element.prototype.attachShadow, P = Object.getOwnPropertyDescriptor(window.Element.prototype, "innerHTML"), Q = window.Element.prototype.getAttribute, R = window.Element.prototype.setAttribute, S = window.Element.prototype.removeAttribute, T = window.Element.prototype.getAttributeNS, U = window.Element.prototype.setAttributeNS, ka = window.Element.prototype.removeAttributeNS, la = window.Element.prototype.insertAdjacentElement, ma = window.Element.prototype.insertAdjacentHTML, na = window.Element.prototype.prepend, oa = window.Element.prototype.append, V = window.Element.prototype.before, pa = window.Element.prototype.after, qa = window.Element.prototype.replaceWith, ra = window.Element.prototype.remove, sa = window.HTMLElement, W = Object.getOwnPropertyDescriptor(window.HTMLElement.prototype, "innerHTML"), ta = window.HTMLElement.prototype.insertAdjacentElement, ua = window.HTMLElement.prototype.insertAdjacentHTML, va = new function() {};
            function Y(b, a, d) {
                function c(a) {
                    return function(d) {
                        for (var e = [], c = 0; c < arguments.length; ++c) e[c] = arguments[c];
                        c = [];
                        for (var f = [], n = 0; n < e.length; n++) {
                            var r = e[n];
                            if (r instanceof Element && l(r) && f.push(r), r instanceof DocumentFragment) for (r = r.firstChild; r; r = r.nextSibling) c.push(r); else c.push(r);
                        }
                        for (a.apply(this, e), e = 0; e < f.length; e++) A(b, f[e]);
                        if (l(this)) for (e = 0; e < c.length; e++) (f = c[e]) instanceof Element && y(b, f);
                    };
                }
                void 0 !== d.g && (a.prepend = c(d.g)), void 0 !== d.append && (a.append = c(d.append));
            }
            var b, Z = window.customElements;
            if (!Z || Z.forcePolyfill || "function" != typeof Z.define || "function" != typeof Z.get) {
                var X = new u;
                b = X, window.HTMLElement = function() {
                    function a() {
                        var a = this.constructor, c = b.f.get(a);
                        if (!c) throw Error("The custom element being constructed was not registered with `customElements`.");
                        var e = c.constructionStack;
                        if (0 === e.length) return e = G.call(document, c.localName), Object.setPrototypeOf(e, a.prototype), 
                        e.__CE_state = 1, e.__CE_definition = c, x(b, e), e;
                        var f = e[c = e.length - 1];
                        if (f === va) throw Error("The HTMLElement constructor was either called reentrantly for this constructor or called multiple times.");
                        return e[c] = va, Object.setPrototypeOf(f, a.prototype), x(b, f), f;
                    }
                    return a.prototype = sa.prototype, Object.defineProperty(a.prototype, "constructor", {
                        writable: !0,
                        configurable: !0,
                        enumerable: !1,
                        value: a
                    }), a;
                }(), function() {
                    var b = X;
                    t(Document.prototype, "createElement", (function(a) {
                        if (this.__CE_hasRegistry) {
                            var d = b.a.get(a);
                            if (d) return new d.constructorFunction;
                        }
                        return a = G.call(this, a), x(b, a), a;
                    })), t(Document.prototype, "importNode", (function(a, d) {
                        return a = ea.call(this, a, !!d), this.__CE_hasRegistry ? B(b, a) : w(b, a), a;
                    })), t(Document.prototype, "createElementNS", (function(a, d) {
                        if (this.__CE_hasRegistry && (null === a || "http://www.w3.org/1999/xhtml" === a)) {
                            var c = b.a.get(d);
                            if (c) return new c.constructorFunction;
                        }
                        return a = H.call(this, a, d), x(b, a), a;
                    })), Y(b, Document.prototype, {
                        g: fa,
                        append: ha
                    });
                }(), Y(X, DocumentFragment.prototype, {
                    g: ia,
                    append: ja
                }), function() {
                    function b(b, c) {
                        Object.defineProperty(b, "textContent", {
                            enumerable: c.enumerable,
                            configurable: !0,
                            get: c.get,
                            set: function(b) {
                                if (this.nodeType === Node.TEXT_NODE) c.set.call(this, b); else {
                                    var d = void 0;
                                    if (this.firstChild) {
                                        var e = this.childNodes, k = e.length;
                                        if (0 < k && l(this)) {
                                            d = Array(k);
                                            for (var h = 0; h < k; h++) d[h] = e[h];
                                        }
                                    }
                                    if (c.set.call(this, b), d) for (b = 0; b < d.length; b++) A(a, d[b]);
                                }
                            }
                        });
                    }
                    var a = X;
                    t(Node.prototype, "insertBefore", (function(b, c) {
                        if (b instanceof DocumentFragment) {
                            var e = Array.prototype.slice.apply(b.childNodes);
                            if (b = K.call(this, b, c), l(this)) for (c = 0; c < e.length; c++) y(a, e[c]);
                            return b;
                        }
                        return e = l(b), c = K.call(this, b, c), e && A(a, b), l(this) && y(a, b), c;
                    })), t(Node.prototype, "appendChild", (function(b) {
                        if (b instanceof DocumentFragment) {
                            var c = Array.prototype.slice.apply(b.childNodes);
                            if (b = J.call(this, b), l(this)) for (var e = 0; e < c.length; e++) y(a, c[e]);
                            return b;
                        }
                        return c = l(b), e = J.call(this, b), c && A(a, b), l(this) && y(a, b), e;
                    })), t(Node.prototype, "cloneNode", (function(b) {
                        return b = I.call(this, !!b), this.ownerDocument.__CE_hasRegistry ? B(a, b) : w(a, b), 
                        b;
                    })), t(Node.prototype, "removeChild", (function(b) {
                        var c = l(b), e = L.call(this, b);
                        return c && A(a, b), e;
                    })), t(Node.prototype, "replaceChild", (function(b, c) {
                        if (b instanceof DocumentFragment) {
                            var e = Array.prototype.slice.apply(b.childNodes);
                            if (b = M.call(this, b, c), l(this)) for (A(a, c), c = 0; c < e.length; c++) y(a, e[c]);
                            return b;
                        }
                        e = l(b);
                        var f = M.call(this, b, c), d = l(this);
                        return d && A(a, c), e && A(a, b), d && y(a, b), f;
                    })), N && N.get ? b(Node.prototype, N) : v(a, (function(a) {
                        b(a, {
                            enumerable: !0,
                            configurable: !0,
                            get: function() {
                                for (var b = [], a = 0; a < this.childNodes.length; a++) b.push(this.childNodes[a].textContent);
                                return b.join("");
                            },
                            set: function(b) {
                                for (;this.firstChild; ) L.call(this, this.firstChild);
                                J.call(this, document.createTextNode(b));
                            }
                        });
                    }));
                }(), function() {
                    function b(a, b) {
                        Object.defineProperty(a, "innerHTML", {
                            enumerable: b.enumerable,
                            configurable: !0,
                            get: b.get,
                            set: function(a) {
                                var d = this, e = void 0;
                                if (l(this) && (e = [], q(this, (function(a) {
                                    a !== d && e.push(a);
                                }))), b.set.call(this, a), e) for (var f = 0; f < e.length; f++) {
                                    var m = e[f];
                                    1 === m.__CE_state && c.disconnectedCallback(m);
                                }
                                return this.ownerDocument.__CE_hasRegistry ? B(c, this) : w(c, this), a;
                            }
                        });
                    }
                    function a(a, b) {
                        t(a, "insertAdjacentElement", (function(a, d) {
                            var e = l(d);
                            return a = b.call(this, a, d), e && A(c, d), l(a) && y(c, d), a;
                        }));
                    }
                    function d(a, b) {
                        function d(a, b) {
                            for (var d = []; a !== b; a = a.nextSibling) d.push(a);
                            for (b = 0; b < d.length; b++) B(c, d[b]);
                        }
                        t(a, "insertAdjacentHTML", (function(a, c) {
                            if ("beforebegin" === (a = a.toLowerCase())) {
                                var e = this.previousSibling;
                                b.call(this, a, c), d(e || this.parentNode.firstChild, this);
                            } else if ("afterbegin" === a) e = this.firstChild, b.call(this, a, c), d(this.firstChild, e); else if ("beforeend" === a) e = this.lastChild, 
                            b.call(this, a, c), d(e || this.firstChild, null); else {
                                if ("afterend" !== a) throw new SyntaxError("The value provided (" + String(a) + ") is not one of 'beforebegin', 'afterbegin', 'beforeend', or 'afterend'.");
                                e = this.nextSibling, b.call(this, a, c), d(this.nextSibling, e);
                            }
                        }));
                    }
                    var c = X;
                    O && t(Element.prototype, "attachShadow", (function(a) {
                        return this.__CE_shadowRoot = O.call(this, a);
                    })), P && P.get ? b(Element.prototype, P) : W && W.get ? b(HTMLElement.prototype, W) : v(c, (function(a) {
                        b(a, {
                            enumerable: !0,
                            configurable: !0,
                            get: function() {
                                return I.call(this, !0).innerHTML;
                            },
                            set: function(a) {
                                var b = "template" === this.localName, c = b ? this.content : this, d = H.call(document, this.namespaceURI, this.localName);
                                for (d.innerHTML = a; 0 < c.childNodes.length; ) L.call(c, c.childNodes[0]);
                                for (a = b ? d.content : d; 0 < a.childNodes.length; ) J.call(c, a.childNodes[0]);
                            }
                        });
                    })), t(Element.prototype, "setAttribute", (function(a, b) {
                        if (1 !== this.__CE_state) return R.call(this, a, b);
                        var d = Q.call(this, a);
                        R.call(this, a, b), b = Q.call(this, a), c.attributeChangedCallback(this, a, d, b, null);
                    })), t(Element.prototype, "setAttributeNS", (function(a, b, d) {
                        if (1 !== this.__CE_state) return U.call(this, a, b, d);
                        var e = T.call(this, a, b);
                        U.call(this, a, b, d), d = T.call(this, a, b), c.attributeChangedCallback(this, b, e, d, a);
                    })), t(Element.prototype, "removeAttribute", (function(a) {
                        if (1 !== this.__CE_state) return S.call(this, a);
                        var b = Q.call(this, a);
                        S.call(this, a), null !== b && c.attributeChangedCallback(this, a, b, null, null);
                    })), t(Element.prototype, "removeAttributeNS", (function(a, b) {
                        if (1 !== this.__CE_state) return ka.call(this, a, b);
                        var d = T.call(this, a, b);
                        ka.call(this, a, b);
                        var e = T.call(this, a, b);
                        d !== e && c.attributeChangedCallback(this, b, d, e, a);
                    })), ta ? a(HTMLElement.prototype, ta) : la ? a(Element.prototype, la) : console.warn("Custom Elements: `Element#insertAdjacentElement` was not patched."), 
                    ua ? d(HTMLElement.prototype, ua) : ma ? d(Element.prototype, ma) : console.warn("Custom Elements: `Element#insertAdjacentHTML` was not patched."), 
                    Y(c, Element.prototype, {
                        g: na,
                        append: oa
                    }), function(b) {
                        function a(a) {
                            return function(e) {
                                for (var c = [], d = 0; d < arguments.length; ++d) c[d] = arguments[d];
                                d = [];
                                for (var k = [], h = 0; h < c.length; h++) {
                                    var n = c[h];
                                    if (n instanceof Element && l(n) && k.push(n), n instanceof DocumentFragment) for (n = n.firstChild; n; n = n.nextSibling) d.push(n); else d.push(n);
                                }
                                for (a.apply(this, c), c = 0; c < k.length; c++) A(b, k[c]);
                                if (l(this)) for (c = 0; c < d.length; c++) (k = d[c]) instanceof Element && y(b, k);
                            };
                        }
                        var d = Element.prototype;
                        void 0 !== V && (d.before = a(V)), void 0 !== V && (d.after = a(pa)), void 0 !== qa && t(d, "replaceWith", (function(a) {
                            for (var c = [], d = 0; d < arguments.length; ++d) c[d] = arguments[d];
                            d = [];
                            for (var m = [], k = 0; k < c.length; k++) {
                                var h = c[k];
                                if (h instanceof Element && l(h) && m.push(h), h instanceof DocumentFragment) for (h = h.firstChild; h; h = h.nextSibling) d.push(h); else d.push(h);
                            }
                            for (k = l(this), qa.apply(this, c), c = 0; c < m.length; c++) A(b, m[c]);
                            if (k) for (A(b, this), c = 0; c < d.length; c++) (m = d[c]) instanceof Element && y(b, m);
                        })), void 0 !== ra && t(d, "remove", (function() {
                            var a = l(this);
                            ra.call(this), a && A(b, this);
                        }));
                    }(c);
                }(), document.__CE_hasRegistry = !0;
                var customElements = new F(X);
                Object.defineProperty(window, "customElements", {
                    configurable: !0,
                    enumerable: !0,
                    value: customElements
                });
            }
        }).call(self);
    },
    "hN/g": function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__), __webpack_require__("pDpN"), __webpack_require__("aVe3"), 
        __webpack_require__("s1Zv");
    },
    pDpN: function(module, exports, __webpack_require__) {
        var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;
        void 0 === (__WEBPACK_AMD_DEFINE_RESULT__ = "function" == typeof (__WEBPACK_AMD_DEFINE_FACTORY__ = function() {
            "use strict";
            !function(global) {
                const performance = global.performance;
                function mark(name) {
                    performance && performance.mark && performance.mark(name);
                }
                function performanceMeasure(name, label) {
                    performance && performance.measure && performance.measure(name, label);
                }
                mark("Zone");
                const symbolPrefix = global.__Zone_symbol_prefix || "__zone_symbol__";
                function __symbol__(name) {
                    return symbolPrefix + name;
                }
                const checkDuplicate = !0 === global[__symbol__("forceDuplicateZoneCheck")];
                if (global.Zone) {
                    if (checkDuplicate || "function" != typeof global.Zone.__symbol__) throw new Error("Zone already loaded.");
                    return global.Zone;
                }
                class Zone {
                    constructor(parent, zoneSpec) {
                        this._parent = parent, this._name = zoneSpec ? zoneSpec.name || "unnamed" : "<root>", 
                        this._properties = zoneSpec && zoneSpec.properties || {}, this._zoneDelegate = new ZoneDelegate(this, this._parent && this._parent._zoneDelegate, zoneSpec);
                    }
                    static assertZonePatched() {
                        if (global.Promise !== patches.ZoneAwarePromise) throw new Error("Zone.js has detected that ZoneAwarePromise `(window|global).Promise` has been overwritten.\nMost likely cause is that a Promise polyfill has been loaded after Zone.js (Polyfilling Promise api is not necessary when zone.js is loaded. If you must load one, do so before loading zone.js.)");
                    }
                    static get root() {
                        let zone = Zone.current;
                        for (;zone.parent; ) zone = zone.parent;
                        return zone;
                    }
                    static get current() {
                        return _currentZoneFrame.zone;
                    }
                    static get currentTask() {
                        return _currentTask;
                    }
                    static __load_patch(name, fn) {
                        if (patches.hasOwnProperty(name)) {
                            if (checkDuplicate) throw Error("Already loaded patch: " + name);
                        } else if (!global["__Zone_disable_" + name]) {
                            const perfName = "Zone:" + name;
                            mark(perfName), patches[name] = fn(global, Zone, _api), performanceMeasure(perfName, perfName);
                        }
                    }
                    get parent() {
                        return this._parent;
                    }
                    get name() {
                        return this._name;
                    }
                    get(key) {
                        const zone = this.getZoneWith(key);
                        if (zone) return zone._properties[key];
                    }
                    getZoneWith(key) {
                        let current = this;
                        for (;current; ) {
                            if (current._properties.hasOwnProperty(key)) return current;
                            current = current._parent;
                        }
                        return null;
                    }
                    fork(zoneSpec) {
                        if (!zoneSpec) throw new Error("ZoneSpec required!");
                        return this._zoneDelegate.fork(this, zoneSpec);
                    }
                    wrap(callback, source) {
                        if ("function" != typeof callback) throw new Error("Expecting function got: " + callback);
                        const _callback = this._zoneDelegate.intercept(this, callback, source), zone = this;
                        return function() {
                            return zone.runGuarded(_callback, this, arguments, source);
                        };
                    }
                    run(callback, applyThis, applyArgs, source) {
                        _currentZoneFrame = {
                            parent: _currentZoneFrame,
                            zone: this
                        };
                        try {
                            return this._zoneDelegate.invoke(this, callback, applyThis, applyArgs, source);
                        } finally {
                            _currentZoneFrame = _currentZoneFrame.parent;
                        }
                    }
                    runGuarded(callback, applyThis = null, applyArgs, source) {
                        _currentZoneFrame = {
                            parent: _currentZoneFrame,
                            zone: this
                        };
                        try {
                            try {
                                return this._zoneDelegate.invoke(this, callback, applyThis, applyArgs, source);
                            } catch (error) {
                                if (this._zoneDelegate.handleError(this, error)) throw error;
                            }
                        } finally {
                            _currentZoneFrame = _currentZoneFrame.parent;
                        }
                    }
                    runTask(task, applyThis, applyArgs) {
                        if (task.zone != this) throw new Error("A task can only be run in the zone of creation! (Creation: " + (task.zone || NO_ZONE).name + "; Execution: " + this.name + ")");
                        if (task.state === notScheduled && (task.type === eventTask || task.type === macroTask)) return;
                        const reEntryGuard = task.state != running;
                        reEntryGuard && task._transitionTo(running, scheduled), task.runCount++;
                        const previousTask = _currentTask;
                        _currentTask = task, _currentZoneFrame = {
                            parent: _currentZoneFrame,
                            zone: this
                        };
                        try {
                            task.type == macroTask && task.data && !task.data.isPeriodic && (task.cancelFn = void 0);
                            try {
                                return this._zoneDelegate.invokeTask(this, task, applyThis, applyArgs);
                            } catch (error) {
                                if (this._zoneDelegate.handleError(this, error)) throw error;
                            }
                        } finally {
                            task.state !== notScheduled && task.state !== unknown && (task.type == eventTask || task.data && task.data.isPeriodic ? reEntryGuard && task._transitionTo(scheduled, running) : (task.runCount = 0, 
                            this._updateTaskCount(task, -1), reEntryGuard && task._transitionTo(notScheduled, running, notScheduled))), 
                            _currentZoneFrame = _currentZoneFrame.parent, _currentTask = previousTask;
                        }
                    }
                    scheduleTask(task) {
                        if (task.zone && task.zone !== this) {
                            let newZone = this;
                            for (;newZone; ) {
                                if (newZone === task.zone) throw Error(`can not reschedule task to ${this.name} which is descendants of the original zone ${task.zone.name}`);
                                newZone = newZone.parent;
                            }
                        }
                        task._transitionTo(scheduling, notScheduled);
                        const zoneDelegates = [];
                        task._zoneDelegates = zoneDelegates, task._zone = this;
                        try {
                            task = this._zoneDelegate.scheduleTask(this, task);
                        } catch (err) {
                            throw task._transitionTo(unknown, scheduling, notScheduled), this._zoneDelegate.handleError(this, err), 
                            err;
                        }
                        return task._zoneDelegates === zoneDelegates && this._updateTaskCount(task, 1), 
                        task.state == scheduling && task._transitionTo(scheduled, scheduling), task;
                    }
                    scheduleMicroTask(source, callback, data, customSchedule) {
                        return this.scheduleTask(new ZoneTask(microTask, source, callback, data, customSchedule, void 0));
                    }
                    scheduleMacroTask(source, callback, data, customSchedule, customCancel) {
                        return this.scheduleTask(new ZoneTask(macroTask, source, callback, data, customSchedule, customCancel));
                    }
                    scheduleEventTask(source, callback, data, customSchedule, customCancel) {
                        return this.scheduleTask(new ZoneTask(eventTask, source, callback, data, customSchedule, customCancel));
                    }
                    cancelTask(task) {
                        if (task.zone != this) throw new Error("A task can only be cancelled in the zone of creation! (Creation: " + (task.zone || NO_ZONE).name + "; Execution: " + this.name + ")");
                        task._transitionTo(canceling, scheduled, running);
                        try {
                            this._zoneDelegate.cancelTask(this, task);
                        } catch (err) {
                            throw task._transitionTo(unknown, canceling), this._zoneDelegate.handleError(this, err), 
                            err;
                        }
                        return this._updateTaskCount(task, -1), task._transitionTo(notScheduled, canceling), 
                        task.runCount = 0, task;
                    }
                    _updateTaskCount(task, count) {
                        const zoneDelegates = task._zoneDelegates;
                        -1 == count && (task._zoneDelegates = null);
                        for (let i = 0; i < zoneDelegates.length; i++) zoneDelegates[i]._updateTaskCount(task.type, count);
                    }
                }
                Zone.__symbol__ = __symbol__;
                const DELEGATE_ZS = {
                    name: "",
                    onHasTask: (delegate, _, target, hasTaskState) => delegate.hasTask(target, hasTaskState),
                    onScheduleTask: (delegate, _, target, task) => delegate.scheduleTask(target, task),
                    onInvokeTask: (delegate, _, target, task, applyThis, applyArgs) => delegate.invokeTask(target, task, applyThis, applyArgs),
                    onCancelTask: (delegate, _, target, task) => delegate.cancelTask(target, task)
                };
                class ZoneDelegate {
                    constructor(zone, parentDelegate, zoneSpec) {
                        this._taskCounts = {
                            microTask: 0,
                            macroTask: 0,
                            eventTask: 0
                        }, this.zone = zone, this._parentDelegate = parentDelegate, this._forkZS = zoneSpec && (zoneSpec && zoneSpec.onFork ? zoneSpec : parentDelegate._forkZS), 
                        this._forkDlgt = zoneSpec && (zoneSpec.onFork ? parentDelegate : parentDelegate._forkDlgt), 
                        this._forkCurrZone = zoneSpec && (zoneSpec.onFork ? this.zone : parentDelegate._forkCurrZone), 
                        this._interceptZS = zoneSpec && (zoneSpec.onIntercept ? zoneSpec : parentDelegate._interceptZS), 
                        this._interceptDlgt = zoneSpec && (zoneSpec.onIntercept ? parentDelegate : parentDelegate._interceptDlgt), 
                        this._interceptCurrZone = zoneSpec && (zoneSpec.onIntercept ? this.zone : parentDelegate._interceptCurrZone), 
                        this._invokeZS = zoneSpec && (zoneSpec.onInvoke ? zoneSpec : parentDelegate._invokeZS), 
                        this._invokeDlgt = zoneSpec && (zoneSpec.onInvoke ? parentDelegate : parentDelegate._invokeDlgt), 
                        this._invokeCurrZone = zoneSpec && (zoneSpec.onInvoke ? this.zone : parentDelegate._invokeCurrZone), 
                        this._handleErrorZS = zoneSpec && (zoneSpec.onHandleError ? zoneSpec : parentDelegate._handleErrorZS), 
                        this._handleErrorDlgt = zoneSpec && (zoneSpec.onHandleError ? parentDelegate : parentDelegate._handleErrorDlgt), 
                        this._handleErrorCurrZone = zoneSpec && (zoneSpec.onHandleError ? this.zone : parentDelegate._handleErrorCurrZone), 
                        this._scheduleTaskZS = zoneSpec && (zoneSpec.onScheduleTask ? zoneSpec : parentDelegate._scheduleTaskZS), 
                        this._scheduleTaskDlgt = zoneSpec && (zoneSpec.onScheduleTask ? parentDelegate : parentDelegate._scheduleTaskDlgt), 
                        this._scheduleTaskCurrZone = zoneSpec && (zoneSpec.onScheduleTask ? this.zone : parentDelegate._scheduleTaskCurrZone), 
                        this._invokeTaskZS = zoneSpec && (zoneSpec.onInvokeTask ? zoneSpec : parentDelegate._invokeTaskZS), 
                        this._invokeTaskDlgt = zoneSpec && (zoneSpec.onInvokeTask ? parentDelegate : parentDelegate._invokeTaskDlgt), 
                        this._invokeTaskCurrZone = zoneSpec && (zoneSpec.onInvokeTask ? this.zone : parentDelegate._invokeTaskCurrZone), 
                        this._cancelTaskZS = zoneSpec && (zoneSpec.onCancelTask ? zoneSpec : parentDelegate._cancelTaskZS), 
                        this._cancelTaskDlgt = zoneSpec && (zoneSpec.onCancelTask ? parentDelegate : parentDelegate._cancelTaskDlgt), 
                        this._cancelTaskCurrZone = zoneSpec && (zoneSpec.onCancelTask ? this.zone : parentDelegate._cancelTaskCurrZone), 
                        this._hasTaskZS = null, this._hasTaskDlgt = null, this._hasTaskDlgtOwner = null, 
                        this._hasTaskCurrZone = null;
                        const zoneSpecHasTask = zoneSpec && zoneSpec.onHasTask;
                        (zoneSpecHasTask || parentDelegate && parentDelegate._hasTaskZS) && (this._hasTaskZS = zoneSpecHasTask ? zoneSpec : DELEGATE_ZS, 
                        this._hasTaskDlgt = parentDelegate, this._hasTaskDlgtOwner = this, this._hasTaskCurrZone = zone, 
                        zoneSpec.onScheduleTask || (this._scheduleTaskZS = DELEGATE_ZS, this._scheduleTaskDlgt = parentDelegate, 
                        this._scheduleTaskCurrZone = this.zone), zoneSpec.onInvokeTask || (this._invokeTaskZS = DELEGATE_ZS, 
                        this._invokeTaskDlgt = parentDelegate, this._invokeTaskCurrZone = this.zone), zoneSpec.onCancelTask || (this._cancelTaskZS = DELEGATE_ZS, 
                        this._cancelTaskDlgt = parentDelegate, this._cancelTaskCurrZone = this.zone));
                    }
                    fork(targetZone, zoneSpec) {
                        return this._forkZS ? this._forkZS.onFork(this._forkDlgt, this.zone, targetZone, zoneSpec) : new Zone(targetZone, zoneSpec);
                    }
                    intercept(targetZone, callback, source) {
                        return this._interceptZS ? this._interceptZS.onIntercept(this._interceptDlgt, this._interceptCurrZone, targetZone, callback, source) : callback;
                    }
                    invoke(targetZone, callback, applyThis, applyArgs, source) {
                        return this._invokeZS ? this._invokeZS.onInvoke(this._invokeDlgt, this._invokeCurrZone, targetZone, callback, applyThis, applyArgs, source) : callback.apply(applyThis, applyArgs);
                    }
                    handleError(targetZone, error) {
                        return !this._handleErrorZS || this._handleErrorZS.onHandleError(this._handleErrorDlgt, this._handleErrorCurrZone, targetZone, error);
                    }
                    scheduleTask(targetZone, task) {
                        let returnTask = task;
                        if (this._scheduleTaskZS) this._hasTaskZS && returnTask._zoneDelegates.push(this._hasTaskDlgtOwner), 
                        (returnTask = this._scheduleTaskZS.onScheduleTask(this._scheduleTaskDlgt, this._scheduleTaskCurrZone, targetZone, task)) || (returnTask = task); else if (task.scheduleFn) task.scheduleFn(task); else {
                            if (task.type != microTask) throw new Error("Task is missing scheduleFn.");
                            scheduleMicroTask(task);
                        }
                        return returnTask;
                    }
                    invokeTask(targetZone, task, applyThis, applyArgs) {
                        return this._invokeTaskZS ? this._invokeTaskZS.onInvokeTask(this._invokeTaskDlgt, this._invokeTaskCurrZone, targetZone, task, applyThis, applyArgs) : task.callback.apply(applyThis, applyArgs);
                    }
                    cancelTask(targetZone, task) {
                        let value;
                        if (this._cancelTaskZS) value = this._cancelTaskZS.onCancelTask(this._cancelTaskDlgt, this._cancelTaskCurrZone, targetZone, task); else {
                            if (!task.cancelFn) throw Error("Task is not cancelable");
                            value = task.cancelFn(task);
                        }
                        return value;
                    }
                    hasTask(targetZone, isEmpty) {
                        try {
                            this._hasTaskZS && this._hasTaskZS.onHasTask(this._hasTaskDlgt, this._hasTaskCurrZone, targetZone, isEmpty);
                        } catch (err) {
                            this.handleError(targetZone, err);
                        }
                    }
                    _updateTaskCount(type, count) {
                        const counts = this._taskCounts, prev = counts[type], next = counts[type] = prev + count;
                        if (next < 0) throw new Error("More tasks executed then were scheduled.");
                        0 != prev && 0 != next || this.hasTask(this.zone, {
                            microTask: counts.microTask > 0,
                            macroTask: counts.macroTask > 0,
                            eventTask: counts.eventTask > 0,
                            change: type
                        });
                    }
                }
                class ZoneTask {
                    constructor(type, source, callback, options, scheduleFn, cancelFn) {
                        if (this._zone = null, this.runCount = 0, this._zoneDelegates = null, this._state = "notScheduled", 
                        this.type = type, this.source = source, this.data = options, this.scheduleFn = scheduleFn, 
                        this.cancelFn = cancelFn, !callback) throw new Error("callback is not defined");
                        this.callback = callback;
                        const self = this;
                        this.invoke = type === eventTask && options && options.useG ? ZoneTask.invokeTask : function() {
                            return ZoneTask.invokeTask.call(global, self, this, arguments);
                        };
                    }
                    static invokeTask(task, target, args) {
                        task || (task = this), _numberOfNestedTaskFrames++;
                        try {
                            return task.runCount++, task.zone.runTask(task, target, args);
                        } finally {
                            1 == _numberOfNestedTaskFrames && drainMicroTaskQueue(), _numberOfNestedTaskFrames--;
                        }
                    }
                    get zone() {
                        return this._zone;
                    }
                    get state() {
                        return this._state;
                    }
                    cancelScheduleRequest() {
                        this._transitionTo(notScheduled, scheduling);
                    }
                    _transitionTo(toState, fromState1, fromState2) {
                        if (this._state !== fromState1 && this._state !== fromState2) throw new Error(`${this.type} '${this.source}': can not transition to '${toState}', expecting state '${fromState1}'${fromState2 ? " or '" + fromState2 + "'" : ""}, was '${this._state}'.`);
                        this._state = toState, toState == notScheduled && (this._zoneDelegates = null);
                    }
                    toString() {
                        return this.data && void 0 !== this.data.handleId ? this.data.handleId.toString() : Object.prototype.toString.call(this);
                    }
                    toJSON() {
                        return {
                            type: this.type,
                            state: this.state,
                            source: this.source,
                            zone: this.zone.name,
                            runCount: this.runCount
                        };
                    }
                }
                const symbolSetTimeout = __symbol__("setTimeout"), symbolPromise = __symbol__("Promise"), symbolThen = __symbol__("then");
                let nativeMicroTaskQueuePromise, _microTaskQueue = [], _isDrainingMicrotaskQueue = !1;
                function scheduleMicroTask(task) {
                    if (0 === _numberOfNestedTaskFrames && 0 === _microTaskQueue.length) if (nativeMicroTaskQueuePromise || global[symbolPromise] && (nativeMicroTaskQueuePromise = global[symbolPromise].resolve(0)), 
                    nativeMicroTaskQueuePromise) {
                        let nativeThen = nativeMicroTaskQueuePromise[symbolThen];
                        nativeThen || (nativeThen = nativeMicroTaskQueuePromise.then), nativeThen.call(nativeMicroTaskQueuePromise, drainMicroTaskQueue);
                    } else global[symbolSetTimeout](drainMicroTaskQueue, 0);
                    task && _microTaskQueue.push(task);
                }
                function drainMicroTaskQueue() {
                    if (!_isDrainingMicrotaskQueue) {
                        for (_isDrainingMicrotaskQueue = !0; _microTaskQueue.length; ) {
                            const queue = _microTaskQueue;
                            _microTaskQueue = [];
                            for (let i = 0; i < queue.length; i++) {
                                const task = queue[i];
                                try {
                                    task.zone.runTask(task, null, null);
                                } catch (error) {
                                    _api.onUnhandledError(error);
                                }
                            }
                        }
                        _api.microtaskDrainDone(), _isDrainingMicrotaskQueue = !1;
                    }
                }
                const NO_ZONE = {
                    name: "NO ZONE"
                }, notScheduled = "notScheduled", scheduling = "scheduling", scheduled = "scheduled", running = "running", canceling = "canceling", unknown = "unknown", microTask = "microTask", macroTask = "macroTask", eventTask = "eventTask", patches = {}, _api = {
                    symbol: __symbol__,
                    currentZoneFrame: () => _currentZoneFrame,
                    onUnhandledError: noop,
                    microtaskDrainDone: noop,
                    scheduleMicroTask: scheduleMicroTask,
                    showUncaughtError: () => !Zone[__symbol__("ignoreConsoleErrorUncaughtError")],
                    patchEventTarget: () => [],
                    patchOnProperties: noop,
                    patchMethod: () => noop,
                    bindArguments: () => [],
                    patchThen: () => noop,
                    patchMacroTask: () => noop,
                    setNativePromise: NativePromise => {
                        NativePromise && "function" == typeof NativePromise.resolve && (nativeMicroTaskQueuePromise = NativePromise.resolve(0));
                    },
                    patchEventPrototype: () => noop,
                    isIEOrEdge: () => !1,
                    getGlobalObjects: () => void 0,
                    ObjectDefineProperty: () => noop,
                    ObjectGetOwnPropertyDescriptor: () => void 0,
                    ObjectCreate: () => void 0,
                    ArraySlice: () => [],
                    patchClass: () => noop,
                    wrapWithCurrentZone: () => noop,
                    filterProperties: () => [],
                    attachOriginToPatched: () => noop,
                    _redefineProperty: () => noop,
                    patchCallbacks: () => noop
                };
                let _currentZoneFrame = {
                    parent: null,
                    zone: new Zone(null, null)
                }, _currentTask = null, _numberOfNestedTaskFrames = 0;
                function noop() {}
                performanceMeasure("Zone", "Zone"), global.Zone = Zone;
            }("undefined" != typeof window && window || "undefined" != typeof self && self || global), 
            Zone.__load_patch("ZoneAwarePromise", (global, Zone, api) => {
                const ObjectGetOwnPropertyDescriptor = Object.getOwnPropertyDescriptor, ObjectDefineProperty = Object.defineProperty, __symbol__ = api.symbol, _uncaughtPromiseErrors = [], symbolPromise = __symbol__("Promise"), symbolThen = __symbol__("then"), creationTrace = "__creationTrace__";
                api.onUnhandledError = e => {
                    if (api.showUncaughtError()) {
                        const rejection = e && e.rejection;
                        rejection ? console.error("Unhandled Promise rejection:", rejection instanceof Error ? rejection.message : rejection, "; Zone:", e.zone.name, "; Task:", e.task && e.task.source, "; Value:", rejection, rejection instanceof Error ? rejection.stack : void 0) : console.error(e);
                    }
                }, api.microtaskDrainDone = () => {
                    for (;_uncaughtPromiseErrors.length; ) for (;_uncaughtPromiseErrors.length; ) {
                        const uncaughtPromiseError = _uncaughtPromiseErrors.shift();
                        try {
                            uncaughtPromiseError.zone.runGuarded(() => {
                                throw uncaughtPromiseError;
                            });
                        } catch (error) {
                            handleUnhandledRejection(error);
                        }
                    }
                };
                const UNHANDLED_PROMISE_REJECTION_HANDLER_SYMBOL = __symbol__("unhandledPromiseRejectionHandler");
                function handleUnhandledRejection(e) {
                    api.onUnhandledError(e);
                    try {
                        const handler = Zone[UNHANDLED_PROMISE_REJECTION_HANDLER_SYMBOL];
                        handler && "function" == typeof handler && handler.call(this, e);
                    } catch (err) {}
                }
                function isThenable(value) {
                    return value && value.then;
                }
                function forwardResolution(value) {
                    return value;
                }
                function forwardRejection(rejection) {
                    return ZoneAwarePromise.reject(rejection);
                }
                const symbolState = __symbol__("state"), symbolValue = __symbol__("value"), symbolFinally = __symbol__("finally"), symbolParentPromiseValue = __symbol__("parentPromiseValue"), symbolParentPromiseState = __symbol__("parentPromiseState"), source = "Promise.then", UNRESOLVED = null, RESOLVED = !0, REJECTED = !1, REJECTED_NO_CATCH = 0;
                function makeResolver(promise, state) {
                    return v => {
                        try {
                            resolvePromise(promise, state, v);
                        } catch (err) {
                            resolvePromise(promise, !1, err);
                        }
                    };
                }
                const once = function() {
                    let wasCalled = !1;
                    return function(wrappedFunction) {
                        return function() {
                            wasCalled || (wasCalled = !0, wrappedFunction.apply(null, arguments));
                        };
                    };
                }, TYPE_ERROR = "Promise resolved with itself", CURRENT_TASK_TRACE_SYMBOL = __symbol__("currentTaskTrace");
                function resolvePromise(promise, state, value) {
                    const onceWrapper = once();
                    if (promise === value) throw new TypeError(TYPE_ERROR);
                    if (promise[symbolState] === UNRESOLVED) {
                        let then = null;
                        try {
                            "object" != typeof value && "function" != typeof value || (then = value && value.then);
                        } catch (err) {
                            return onceWrapper(() => {
                                resolvePromise(promise, !1, err);
                            })(), promise;
                        }
                        if (state !== REJECTED && value instanceof ZoneAwarePromise && value.hasOwnProperty(symbolState) && value.hasOwnProperty(symbolValue) && value[symbolState] !== UNRESOLVED) clearRejectedNoCatch(value), 
                        resolvePromise(promise, value[symbolState], value[symbolValue]); else if (state !== REJECTED && "function" == typeof then) try {
                            then.call(value, onceWrapper(makeResolver(promise, state)), onceWrapper(makeResolver(promise, !1)));
                        } catch (err) {
                            onceWrapper(() => {
                                resolvePromise(promise, !1, err);
                            })();
                        } else {
                            promise[symbolState] = state;
                            const queue = promise[symbolValue];
                            if (promise[symbolValue] = value, promise[symbolFinally] === symbolFinally && state === RESOLVED && (promise[symbolState] = promise[symbolParentPromiseState], 
                            promise[symbolValue] = promise[symbolParentPromiseValue]), state === REJECTED && value instanceof Error) {
                                const trace = Zone.currentTask && Zone.currentTask.data && Zone.currentTask.data[creationTrace];
                                trace && ObjectDefineProperty(value, CURRENT_TASK_TRACE_SYMBOL, {
                                    configurable: !0,
                                    enumerable: !1,
                                    writable: !0,
                                    value: trace
                                });
                            }
                            for (let i = 0; i < queue.length; ) scheduleResolveOrReject(promise, queue[i++], queue[i++], queue[i++], queue[i++]);
                            if (0 == queue.length && state == REJECTED) {
                                promise[symbolState] = REJECTED_NO_CATCH;
                                try {
                                    throw new Error("Uncaught (in promise): " + ((obj = value) && obj.toString === Object.prototype.toString ? (obj.constructor && obj.constructor.name || "") + ": " + JSON.stringify(obj) : obj ? obj.toString() : Object.prototype.toString.call(obj)) + (value && value.stack ? "\n" + value.stack : ""));
                                } catch (err) {
                                    const error = err;
                                    error.rejection = value, error.promise = promise, error.zone = Zone.current, error.task = Zone.currentTask, 
                                    _uncaughtPromiseErrors.push(error), api.scheduleMicroTask();
                                }
                            }
                        }
                    }
                    var obj;
                    return promise;
                }
                const REJECTION_HANDLED_HANDLER = __symbol__("rejectionHandledHandler");
                function clearRejectedNoCatch(promise) {
                    if (promise[symbolState] === REJECTED_NO_CATCH) {
                        try {
                            const handler = Zone[REJECTION_HANDLED_HANDLER];
                            handler && "function" == typeof handler && handler.call(this, {
                                rejection: promise[symbolValue],
                                promise: promise
                            });
                        } catch (err) {}
                        promise[symbolState] = REJECTED;
                        for (let i = 0; i < _uncaughtPromiseErrors.length; i++) promise === _uncaughtPromiseErrors[i].promise && _uncaughtPromiseErrors.splice(i, 1);
                    }
                }
                function scheduleResolveOrReject(promise, zone, chainPromise, onFulfilled, onRejected) {
                    clearRejectedNoCatch(promise);
                    const promiseState = promise[symbolState], delegate = promiseState ? "function" == typeof onFulfilled ? onFulfilled : forwardResolution : "function" == typeof onRejected ? onRejected : forwardRejection;
                    zone.scheduleMicroTask(source, () => {
                        try {
                            const parentPromiseValue = promise[symbolValue], isFinallyPromise = !!chainPromise && symbolFinally === chainPromise[symbolFinally];
                            isFinallyPromise && (chainPromise[symbolParentPromiseValue] = parentPromiseValue, 
                            chainPromise[symbolParentPromiseState] = promiseState);
                            const value = zone.run(delegate, void 0, isFinallyPromise && delegate !== forwardRejection && delegate !== forwardResolution ? [] : [ parentPromiseValue ]);
                            resolvePromise(chainPromise, !0, value);
                        } catch (error) {
                            resolvePromise(chainPromise, !1, error);
                        }
                    }, chainPromise);
                }
                const ZONE_AWARE_PROMISE_TO_STRING = "function ZoneAwarePromise() { [native code] }";
                class ZoneAwarePromise {
                    constructor(executor) {
                        const promise = this;
                        if (!(promise instanceof ZoneAwarePromise)) throw new Error("Must be an instanceof Promise.");
                        promise[symbolState] = UNRESOLVED, promise[symbolValue] = [];
                        try {
                            executor && executor(makeResolver(promise, RESOLVED), makeResolver(promise, REJECTED));
                        } catch (error) {
                            resolvePromise(promise, !1, error);
                        }
                    }
                    static toString() {
                        return ZONE_AWARE_PROMISE_TO_STRING;
                    }
                    static resolve(value) {
                        return resolvePromise(new this(null), RESOLVED, value);
                    }
                    static reject(error) {
                        return resolvePromise(new this(null), REJECTED, error);
                    }
                    static race(values) {
                        let resolve, reject, promise = new this((res, rej) => {
                            resolve = res, reject = rej;
                        });
                        function onResolve(value) {
                            resolve(value);
                        }
                        function onReject(error) {
                            reject(error);
                        }
                        for (let value of values) isThenable(value) || (value = this.resolve(value)), value.then(onResolve, onReject);
                        return promise;
                    }
                    static all(values) {
                        return ZoneAwarePromise.allWithCallback(values);
                    }
                    static allSettled(values) {
                        return (this && this.prototype instanceof ZoneAwarePromise ? this : ZoneAwarePromise).allWithCallback(values, {
                            thenCallback: value => ({
                                status: "fulfilled",
                                value: value
                            }),
                            errorCallback: err => ({
                                status: "rejected",
                                reason: err
                            })
                        });
                    }
                    static allWithCallback(values, callback) {
                        let resolve, reject, promise = new this((res, rej) => {
                            resolve = res, reject = rej;
                        }), unresolvedCount = 2, valueIndex = 0;
                        const resolvedValues = [];
                        for (let value of values) {
                            isThenable(value) || (value = this.resolve(value));
                            const curValueIndex = valueIndex;
                            try {
                                value.then(value => {
                                    resolvedValues[curValueIndex] = callback ? callback.thenCallback(value) : value, 
                                    0 == --unresolvedCount && resolve(resolvedValues);
                                }, err => {
                                    callback ? (resolvedValues[curValueIndex] = callback.errorCallback(err), 0 == --unresolvedCount && resolve(resolvedValues)) : reject(err);
                                });
                            } catch (thenErr) {
                                reject(thenErr);
                            }
                            unresolvedCount++, valueIndex++;
                        }
                        return 0 == (unresolvedCount -= 2) && resolve(resolvedValues), promise;
                    }
                    get [Symbol.toStringTag]() {
                        return "Promise";
                    }
                    then(onFulfilled, onRejected) {
                        const chainPromise = new this.constructor(null), zone = Zone.current;
                        return this[symbolState] == UNRESOLVED ? this[symbolValue].push(zone, chainPromise, onFulfilled, onRejected) : scheduleResolveOrReject(this, zone, chainPromise, onFulfilled, onRejected), 
                        chainPromise;
                    }
                    catch(onRejected) {
                        return this.then(null, onRejected);
                    }
                    finally(onFinally) {
                        const chainPromise = new this.constructor(null);
                        chainPromise[symbolFinally] = symbolFinally;
                        const zone = Zone.current;
                        return this[symbolState] == UNRESOLVED ? this[symbolValue].push(zone, chainPromise, onFinally, onFinally) : scheduleResolveOrReject(this, zone, chainPromise, onFinally, onFinally), 
                        chainPromise;
                    }
                }
                ZoneAwarePromise.resolve = ZoneAwarePromise.resolve, ZoneAwarePromise.reject = ZoneAwarePromise.reject, 
                ZoneAwarePromise.race = ZoneAwarePromise.race, ZoneAwarePromise.all = ZoneAwarePromise.all;
                const NativePromise = global[symbolPromise] = global.Promise, ZONE_AWARE_PROMISE = Zone.__symbol__("ZoneAwarePromise");
                let desc = ObjectGetOwnPropertyDescriptor(global, "Promise");
                desc && !desc.configurable || (desc && delete desc.writable, desc && delete desc.value, 
                desc || (desc = {
                    configurable: !0,
                    enumerable: !0
                }), desc.get = function() {
                    return global[ZONE_AWARE_PROMISE] ? global[ZONE_AWARE_PROMISE] : global[symbolPromise];
                }, desc.set = function(NewNativePromise) {
                    NewNativePromise === ZoneAwarePromise ? global[ZONE_AWARE_PROMISE] = NewNativePromise : (global[symbolPromise] = NewNativePromise, 
                    NewNativePromise.prototype[symbolThen] || patchThen(NewNativePromise), api.setNativePromise(NewNativePromise));
                }, ObjectDefineProperty(global, "Promise", desc)), global.Promise = ZoneAwarePromise;
                const symbolThenPatched = __symbol__("thenPatched");
                function patchThen(Ctor) {
                    const proto = Ctor.prototype, prop = ObjectGetOwnPropertyDescriptor(proto, "then");
                    if (prop && (!1 === prop.writable || !prop.configurable)) return;
                    const originalThen = proto.then;
                    proto[symbolThen] = originalThen, Ctor.prototype.then = function(onResolve, onReject) {
                        return new ZoneAwarePromise((resolve, reject) => {
                            originalThen.call(this, resolve, reject);
                        }).then(onResolve, onReject);
                    }, Ctor[symbolThenPatched] = !0;
                }
                if (api.patchThen = patchThen, NativePromise) {
                    patchThen(NativePromise);
                    const fetch = global.fetch;
                    "function" == typeof fetch && (global[api.symbol("fetch")] = fetch, global.fetch = function(fn) {
                        return function() {
                            let resultPromise = fn.apply(this, arguments);
                            if (resultPromise instanceof ZoneAwarePromise) return resultPromise;
                            let ctor = resultPromise.constructor;
                            return ctor[symbolThenPatched] || patchThen(ctor), resultPromise;
                        };
                    }(fetch));
                }
                return Promise[Zone.__symbol__("uncaughtPromiseErrors")] = _uncaughtPromiseErrors, 
                ZoneAwarePromise;
            });
            const ObjectGetOwnPropertyDescriptor = Object.getOwnPropertyDescriptor, ObjectDefineProperty = Object.defineProperty, ObjectGetPrototypeOf = Object.getPrototypeOf, ObjectCreate = Object.create, ArraySlice = Array.prototype.slice, ADD_EVENT_LISTENER_STR = "addEventListener", REMOVE_EVENT_LISTENER_STR = "removeEventListener", ZONE_SYMBOL_ADD_EVENT_LISTENER = Zone.__symbol__(ADD_EVENT_LISTENER_STR), ZONE_SYMBOL_REMOVE_EVENT_LISTENER = Zone.__symbol__(REMOVE_EVENT_LISTENER_STR), TRUE_STR = "true", FALSE_STR = "false", ZONE_SYMBOL_PREFIX = Zone.__symbol__("");
            function wrapWithCurrentZone(callback, source) {
                return Zone.current.wrap(callback, source);
            }
            function scheduleMacroTaskWithCurrentZone(source, callback, data, customSchedule, customCancel) {
                return Zone.current.scheduleMacroTask(source, callback, data, customSchedule, customCancel);
            }
            const zoneSymbol = Zone.__symbol__, isWindowExists = "undefined" != typeof window, internalWindow = isWindowExists ? window : void 0, _global = isWindowExists && internalWindow || "object" == typeof self && self || global, REMOVE_ATTRIBUTE = "removeAttribute", NULL_ON_PROP_VALUE = [ null ];
            function bindArguments(args, source) {
                for (let i = args.length - 1; i >= 0; i--) "function" == typeof args[i] && (args[i] = wrapWithCurrentZone(args[i], source + "_" + i));
                return args;
            }
            function isPropertyWritable(propertyDesc) {
                return !propertyDesc || !1 !== propertyDesc.writable && !("function" == typeof propertyDesc.get && void 0 === propertyDesc.set);
            }
            const isWebWorker = "undefined" != typeof WorkerGlobalScope && self instanceof WorkerGlobalScope, isNode = !("nw" in _global) && void 0 !== _global.process && "[object process]" === {}.toString.call(_global.process), isBrowser = !isNode && !isWebWorker && !(!isWindowExists || !internalWindow.HTMLElement), isMix = void 0 !== _global.process && "[object process]" === {}.toString.call(_global.process) && !isWebWorker && !(!isWindowExists || !internalWindow.HTMLElement), zoneSymbolEventNames = {}, wrapFn = function(event) {
                if (!(event = event || _global.event)) return;
                let eventNameSymbol = zoneSymbolEventNames[event.type];
                eventNameSymbol || (eventNameSymbol = zoneSymbolEventNames[event.type] = zoneSymbol("ON_PROPERTY" + event.type));
                const target = this || event.target || _global, listener = target[eventNameSymbol];
                let result;
                if (isBrowser && target === internalWindow && "error" === event.type) {
                    const errorEvent = event;
                    !0 === (result = listener && listener.call(this, errorEvent.message, errorEvent.filename, errorEvent.lineno, errorEvent.colno, errorEvent.error)) && event.preventDefault();
                } else null == (result = listener && listener.apply(this, arguments)) || result || event.preventDefault();
                return result;
            };
            function patchProperty(obj, prop, prototype) {
                let desc = ObjectGetOwnPropertyDescriptor(obj, prop);
                if (!desc && prototype && ObjectGetOwnPropertyDescriptor(prototype, prop) && (desc = {
                    enumerable: !0,
                    configurable: !0
                }), !desc || !desc.configurable) return;
                const onPropPatchedSymbol = zoneSymbol("on" + prop + "patched");
                if (obj.hasOwnProperty(onPropPatchedSymbol) && obj[onPropPatchedSymbol]) return;
                delete desc.writable, delete desc.value;
                const originalDescGet = desc.get, originalDescSet = desc.set, eventName = prop.substr(2);
                let eventNameSymbol = zoneSymbolEventNames[eventName];
                eventNameSymbol || (eventNameSymbol = zoneSymbolEventNames[eventName] = zoneSymbol("ON_PROPERTY" + eventName)), 
                desc.set = function(newValue) {
                    let target = this;
                    target || obj !== _global || (target = _global), target && (target[eventNameSymbol] && target.removeEventListener(eventName, wrapFn), 
                    originalDescSet && originalDescSet.apply(target, NULL_ON_PROP_VALUE), "function" == typeof newValue ? (target[eventNameSymbol] = newValue, 
                    target.addEventListener(eventName, wrapFn, !1)) : target[eventNameSymbol] = null);
                }, desc.get = function() {
                    let target = this;
                    if (target || obj !== _global || (target = _global), !target) return null;
                    const listener = target[eventNameSymbol];
                    if (listener) return listener;
                    if (originalDescGet) {
                        let value = originalDescGet && originalDescGet.call(this);
                        if (value) return desc.set.call(this, value), "function" == typeof target[REMOVE_ATTRIBUTE] && target.removeAttribute(prop), 
                        value;
                    }
                    return null;
                }, ObjectDefineProperty(obj, prop, desc), obj[onPropPatchedSymbol] = !0;
            }
            function patchOnProperties(obj, properties, prototype) {
                if (properties) for (let i = 0; i < properties.length; i++) patchProperty(obj, "on" + properties[i], prototype); else {
                    const onProperties = [];
                    for (const prop in obj) "on" == prop.substr(0, 2) && onProperties.push(prop);
                    for (let j = 0; j < onProperties.length; j++) patchProperty(obj, onProperties[j], prototype);
                }
            }
            const originalInstanceKey = zoneSymbol("originalInstance");
            function patchClass(className) {
                const OriginalClass = _global[className];
                if (!OriginalClass) return;
                _global[zoneSymbol(className)] = OriginalClass, _global[className] = function() {
                    const a = bindArguments(arguments, className);
                    switch (a.length) {
                      case 0:
                        this[originalInstanceKey] = new OriginalClass;
                        break;

                      case 1:
                        this[originalInstanceKey] = new OriginalClass(a[0]);
                        break;

                      case 2:
                        this[originalInstanceKey] = new OriginalClass(a[0], a[1]);
                        break;

                      case 3:
                        this[originalInstanceKey] = new OriginalClass(a[0], a[1], a[2]);
                        break;

                      case 4:
                        this[originalInstanceKey] = new OriginalClass(a[0], a[1], a[2], a[3]);
                        break;

                      default:
                        throw new Error("Arg list too long.");
                    }
                }, attachOriginToPatched(_global[className], OriginalClass);
                const instance = new OriginalClass((function() {}));
                let prop;
                for (prop in instance) "XMLHttpRequest" === className && "responseBlob" === prop || function(prop) {
                    "function" == typeof instance[prop] ? _global[className].prototype[prop] = function() {
                        return this[originalInstanceKey][prop].apply(this[originalInstanceKey], arguments);
                    } : ObjectDefineProperty(_global[className].prototype, prop, {
                        set: function(fn) {
                            "function" == typeof fn ? (this[originalInstanceKey][prop] = wrapWithCurrentZone(fn, className + "." + prop), 
                            attachOriginToPatched(this[originalInstanceKey][prop], fn)) : this[originalInstanceKey][prop] = fn;
                        },
                        get: function() {
                            return this[originalInstanceKey][prop];
                        }
                    });
                }(prop);
                for (prop in OriginalClass) "prototype" !== prop && OriginalClass.hasOwnProperty(prop) && (_global[className][prop] = OriginalClass[prop]);
            }
            let shouldCopySymbolProperties = !1;
            function patchMethod(target, name, patchFn) {
                let proto = target;
                for (;proto && !proto.hasOwnProperty(name); ) proto = ObjectGetPrototypeOf(proto);
                !proto && target[name] && (proto = target);
                const delegateName = zoneSymbol(name);
                let delegate = null;
                if (proto && !(delegate = proto[delegateName]) && (delegate = proto[delegateName] = proto[name], 
                isPropertyWritable(proto && ObjectGetOwnPropertyDescriptor(proto, name)))) {
                    const patchDelegate = patchFn(delegate, delegateName, name);
                    proto[name] = function() {
                        return patchDelegate(this, arguments);
                    }, attachOriginToPatched(proto[name], delegate), shouldCopySymbolProperties && (src = delegate, 
                    dest = proto[name], "function" == typeof Object.getOwnPropertySymbols && Object.getOwnPropertySymbols(src).forEach(symbol => {
                        const desc = Object.getOwnPropertyDescriptor(src, symbol);
                        Object.defineProperty(dest, symbol, {
                            get: function() {
                                return src[symbol];
                            },
                            set: function(value) {
                                (!desc || desc.writable && "function" == typeof desc.set) && (src[symbol] = value);
                            },
                            enumerable: !desc || desc.enumerable,
                            configurable: !desc || desc.configurable
                        });
                    }));
                }
                var src, dest;
                return delegate;
            }
            function patchMacroTask(obj, funcName, metaCreator) {
                let setNative = null;
                function scheduleTask(task) {
                    const data = task.data;
                    return data.args[data.cbIdx] = function() {
                        task.invoke.apply(this, arguments);
                    }, setNative.apply(data.target, data.args), task;
                }
                setNative = patchMethod(obj, funcName, delegate => (function(self, args) {
                    const meta = metaCreator(self, args);
                    return meta.cbIdx >= 0 && "function" == typeof args[meta.cbIdx] ? scheduleMacroTaskWithCurrentZone(meta.name, args[meta.cbIdx], meta, scheduleTask) : delegate.apply(self, args);
                }));
            }
            function attachOriginToPatched(patched, original) {
                patched[zoneSymbol("OriginalDelegate")] = original;
            }
            let isDetectedIEOrEdge = !1, ieOrEdge = !1;
            function isIE() {
                try {
                    const ua = internalWindow.navigator.userAgent;
                    if (-1 !== ua.indexOf("MSIE ") || -1 !== ua.indexOf("Trident/")) return !0;
                } catch (error) {}
                return !1;
            }
            function isIEOrEdge() {
                if (isDetectedIEOrEdge) return ieOrEdge;
                isDetectedIEOrEdge = !0;
                try {
                    const ua = internalWindow.navigator.userAgent;
                    -1 === ua.indexOf("MSIE ") && -1 === ua.indexOf("Trident/") && -1 === ua.indexOf("Edge/") || (ieOrEdge = !0);
                } catch (error) {}
                return ieOrEdge;
            }
            Zone.__load_patch("toString", global => {
                const originalFunctionToString = Function.prototype.toString, ORIGINAL_DELEGATE_SYMBOL = zoneSymbol("OriginalDelegate"), PROMISE_SYMBOL = zoneSymbol("Promise"), ERROR_SYMBOL = zoneSymbol("Error"), newFunctionToString = function() {
                    if ("function" == typeof this) {
                        const originalDelegate = this[ORIGINAL_DELEGATE_SYMBOL];
                        if (originalDelegate) return "function" == typeof originalDelegate ? originalFunctionToString.call(originalDelegate) : Object.prototype.toString.call(originalDelegate);
                        if (this === Promise) {
                            const nativePromise = global[PROMISE_SYMBOL];
                            if (nativePromise) return originalFunctionToString.call(nativePromise);
                        }
                        if (this === Error) {
                            const nativeError = global[ERROR_SYMBOL];
                            if (nativeError) return originalFunctionToString.call(nativeError);
                        }
                    }
                    return originalFunctionToString.call(this);
                };
                newFunctionToString[ORIGINAL_DELEGATE_SYMBOL] = originalFunctionToString, Function.prototype.toString = newFunctionToString;
                const originalObjectToString = Object.prototype.toString;
                Object.prototype.toString = function() {
                    return this instanceof Promise ? "[object Promise]" : originalObjectToString.call(this);
                };
            });
            let passiveSupported = !1;
            if ("undefined" != typeof window) try {
                const options = Object.defineProperty({}, "passive", {
                    get: function() {
                        passiveSupported = !0;
                    }
                });
                window.addEventListener("test", options, options), window.removeEventListener("test", options, options);
            } catch (err) {
                passiveSupported = !1;
            }
            const OPTIMIZED_ZONE_EVENT_TASK_DATA = {
                useG: !0
            }, zoneSymbolEventNames$1 = {}, globalSources = {}, EVENT_NAME_SYMBOL_REGX = new RegExp("^" + ZONE_SYMBOL_PREFIX + "(\\w+)(true|false)$"), IMMEDIATE_PROPAGATION_SYMBOL = zoneSymbol("propagationStopped");
            function patchEventTarget(_global, apis, patchOptions) {
                const ADD_EVENT_LISTENER = patchOptions && patchOptions.add || ADD_EVENT_LISTENER_STR, REMOVE_EVENT_LISTENER = patchOptions && patchOptions.rm || REMOVE_EVENT_LISTENER_STR, LISTENERS_EVENT_LISTENER = patchOptions && patchOptions.listeners || "eventListeners", REMOVE_ALL_LISTENERS_EVENT_LISTENER = patchOptions && patchOptions.rmAll || "removeAllListeners", zoneSymbolAddEventListener = zoneSymbol(ADD_EVENT_LISTENER), ADD_EVENT_LISTENER_SOURCE = "." + ADD_EVENT_LISTENER + ":", PREPEND_EVENT_LISTENER = "prependListener", PREPEND_EVENT_LISTENER_SOURCE = "." + PREPEND_EVENT_LISTENER + ":", invokeTask = function(task, target, event) {
                    if (task.isRemoved) return;
                    const delegate = task.callback;
                    "object" == typeof delegate && delegate.handleEvent && (task.callback = event => delegate.handleEvent(event), 
                    task.originalDelegate = delegate), task.invoke(task, target, [ event ]);
                    const options = task.options;
                    options && "object" == typeof options && options.once && target[REMOVE_EVENT_LISTENER].call(target, event.type, task.originalDelegate ? task.originalDelegate : task.callback, options);
                }, globalZoneAwareCallback = function(event) {
                    if (!(event = event || _global.event)) return;
                    const target = this || event.target || _global, tasks = target[zoneSymbolEventNames$1[event.type][FALSE_STR]];
                    if (tasks) if (1 === tasks.length) invokeTask(tasks[0], target, event); else {
                        const copyTasks = tasks.slice();
                        for (let i = 0; i < copyTasks.length && (!event || !0 !== event[IMMEDIATE_PROPAGATION_SYMBOL]); i++) invokeTask(copyTasks[i], target, event);
                    }
                }, globalZoneAwareCaptureCallback = function(event) {
                    if (!(event = event || _global.event)) return;
                    const target = this || event.target || _global, tasks = target[zoneSymbolEventNames$1[event.type][TRUE_STR]];
                    if (tasks) if (1 === tasks.length) invokeTask(tasks[0], target, event); else {
                        const copyTasks = tasks.slice();
                        for (let i = 0; i < copyTasks.length && (!event || !0 !== event[IMMEDIATE_PROPAGATION_SYMBOL]); i++) invokeTask(copyTasks[i], target, event);
                    }
                };
                function patchEventTargetMethods(obj, patchOptions) {
                    if (!obj) return !1;
                    let useGlobalCallback = !0;
                    patchOptions && void 0 !== patchOptions.useG && (useGlobalCallback = patchOptions.useG);
                    const validateHandler = patchOptions && patchOptions.vh;
                    let checkDuplicate = !0;
                    patchOptions && void 0 !== patchOptions.chkDup && (checkDuplicate = patchOptions.chkDup);
                    let returnTarget = !1;
                    patchOptions && void 0 !== patchOptions.rt && (returnTarget = patchOptions.rt);
                    let proto = obj;
                    for (;proto && !proto.hasOwnProperty(ADD_EVENT_LISTENER); ) proto = ObjectGetPrototypeOf(proto);
                    if (!proto && obj[ADD_EVENT_LISTENER] && (proto = obj), !proto) return !1;
                    if (proto[zoneSymbolAddEventListener]) return !1;
                    const eventNameToString = patchOptions && patchOptions.eventNameToString, taskData = {}, nativeAddEventListener = proto[zoneSymbolAddEventListener] = proto[ADD_EVENT_LISTENER], nativeRemoveEventListener = proto[zoneSymbol(REMOVE_EVENT_LISTENER)] = proto[REMOVE_EVENT_LISTENER], nativeListeners = proto[zoneSymbol(LISTENERS_EVENT_LISTENER)] = proto[LISTENERS_EVENT_LISTENER], nativeRemoveAllListeners = proto[zoneSymbol(REMOVE_ALL_LISTENERS_EVENT_LISTENER)] = proto[REMOVE_ALL_LISTENERS_EVENT_LISTENER];
                    let nativePrependEventListener;
                    function checkIsPassive(task) {
                        passiveSupported || "boolean" == typeof taskData.options || null == taskData.options || (task.options = !!taskData.options.capture, 
                        taskData.options = task.options);
                    }
                    patchOptions && patchOptions.prepend && (nativePrependEventListener = proto[zoneSymbol(patchOptions.prepend)] = proto[patchOptions.prepend]);
                    const customSchedule = useGlobalCallback ? function(task) {
                        if (!taskData.isExisting) return checkIsPassive(task), nativeAddEventListener.call(taskData.target, taskData.eventName, taskData.capture ? globalZoneAwareCaptureCallback : globalZoneAwareCallback, taskData.options);
                    } : function(task) {
                        return checkIsPassive(task), nativeAddEventListener.call(taskData.target, taskData.eventName, task.invoke, taskData.options);
                    }, customCancel = useGlobalCallback ? function(task) {
                        if (!task.isRemoved) {
                            const symbolEventNames = zoneSymbolEventNames$1[task.eventName];
                            let symbolEventName;
                            symbolEventNames && (symbolEventName = symbolEventNames[task.capture ? TRUE_STR : FALSE_STR]);
                            const existingTasks = symbolEventName && task.target[symbolEventName];
                            if (existingTasks) for (let i = 0; i < existingTasks.length; i++) if (existingTasks[i] === task) {
                                existingTasks.splice(i, 1), task.isRemoved = !0, 0 === existingTasks.length && (task.allRemoved = !0, 
                                task.target[symbolEventName] = null);
                                break;
                            }
                        }
                        if (task.allRemoved) return nativeRemoveEventListener.call(task.target, task.eventName, task.capture ? globalZoneAwareCaptureCallback : globalZoneAwareCallback, task.options);
                    } : function(task) {
                        return nativeRemoveEventListener.call(task.target, task.eventName, task.invoke, task.options);
                    }, compare = patchOptions && patchOptions.diff ? patchOptions.diff : function(task, delegate) {
                        const typeOfDelegate = typeof delegate;
                        return "function" === typeOfDelegate && task.callback === delegate || "object" === typeOfDelegate && task.originalDelegate === delegate;
                    }, blackListedEvents = Zone[zoneSymbol("BLACK_LISTED_EVENTS")], makeAddListener = function(nativeListener, addSource, customScheduleFn, customCancelFn, returnTarget = !1, prepend = !1) {
                        return function() {
                            const target = this || _global;
                            let eventName = arguments[0];
                            patchOptions && patchOptions.transferEventName && (eventName = patchOptions.transferEventName(eventName));
                            let delegate = arguments[1];
                            if (!delegate) return nativeListener.apply(this, arguments);
                            if (isNode && "uncaughtException" === eventName) return nativeListener.apply(this, arguments);
                            let isHandleEvent = !1;
                            if ("function" != typeof delegate) {
                                if (!delegate.handleEvent) return nativeListener.apply(this, arguments);
                                isHandleEvent = !0;
                            }
                            if (validateHandler && !validateHandler(nativeListener, delegate, target, arguments)) return;
                            const options = arguments[2];
                            if (blackListedEvents) for (let i = 0; i < blackListedEvents.length; i++) if (eventName === blackListedEvents[i]) return nativeListener.apply(this, arguments);
                            let capture, once = !1;
                            void 0 === options ? capture = !1 : !0 === options ? capture = !0 : !1 === options ? capture = !1 : (capture = !!options && !!options.capture, 
                            once = !!options && !!options.once);
                            const zone = Zone.current, symbolEventNames = zoneSymbolEventNames$1[eventName];
                            let symbolEventName;
                            if (symbolEventNames) symbolEventName = symbolEventNames[capture ? TRUE_STR : FALSE_STR]; else {
                                const falseEventName = (eventNameToString ? eventNameToString(eventName) : eventName) + FALSE_STR, trueEventName = (eventNameToString ? eventNameToString(eventName) : eventName) + TRUE_STR, symbol = ZONE_SYMBOL_PREFIX + falseEventName, symbolCapture = ZONE_SYMBOL_PREFIX + trueEventName;
                                zoneSymbolEventNames$1[eventName] = {}, zoneSymbolEventNames$1[eventName][FALSE_STR] = symbol, 
                                zoneSymbolEventNames$1[eventName][TRUE_STR] = symbolCapture, symbolEventName = capture ? symbolCapture : symbol;
                            }
                            let source, existingTasks = target[symbolEventName], isExisting = !1;
                            if (existingTasks) {
                                if (isExisting = !0, checkDuplicate) for (let i = 0; i < existingTasks.length; i++) if (compare(existingTasks[i], delegate)) return;
                            } else existingTasks = target[symbolEventName] = [];
                            const constructorName = target.constructor.name, targetSource = globalSources[constructorName];
                            targetSource && (source = targetSource[eventName]), source || (source = constructorName + addSource + (eventNameToString ? eventNameToString(eventName) : eventName)), 
                            taskData.options = options, once && (taskData.options.once = !1), taskData.target = target, 
                            taskData.capture = capture, taskData.eventName = eventName, taskData.isExisting = isExisting;
                            const data = useGlobalCallback ? OPTIMIZED_ZONE_EVENT_TASK_DATA : void 0;
                            data && (data.taskData = taskData);
                            const task = zone.scheduleEventTask(source, delegate, data, customScheduleFn, customCancelFn);
                            return taskData.target = null, data && (data.taskData = null), once && (options.once = !0), 
                            (passiveSupported || "boolean" != typeof task.options) && (task.options = options), 
                            task.target = target, task.capture = capture, task.eventName = eventName, isHandleEvent && (task.originalDelegate = delegate), 
                            prepend ? existingTasks.unshift(task) : existingTasks.push(task), returnTarget ? target : void 0;
                        };
                    };
                    return proto[ADD_EVENT_LISTENER] = makeAddListener(nativeAddEventListener, ADD_EVENT_LISTENER_SOURCE, customSchedule, customCancel, returnTarget), 
                    nativePrependEventListener && (proto[PREPEND_EVENT_LISTENER] = makeAddListener(nativePrependEventListener, PREPEND_EVENT_LISTENER_SOURCE, (function(task) {
                        return nativePrependEventListener.call(taskData.target, taskData.eventName, task.invoke, taskData.options);
                    }), customCancel, returnTarget, !0)), proto[REMOVE_EVENT_LISTENER] = function() {
                        const target = this || _global;
                        let eventName = arguments[0];
                        patchOptions && patchOptions.transferEventName && (eventName = patchOptions.transferEventName(eventName));
                        const options = arguments[2];
                        let capture;
                        capture = void 0 !== options && (!0 === options || !1 !== options && !!options && !!options.capture);
                        const delegate = arguments[1];
                        if (!delegate) return nativeRemoveEventListener.apply(this, arguments);
                        if (validateHandler && !validateHandler(nativeRemoveEventListener, delegate, target, arguments)) return;
                        const symbolEventNames = zoneSymbolEventNames$1[eventName];
                        let symbolEventName;
                        symbolEventNames && (symbolEventName = symbolEventNames[capture ? TRUE_STR : FALSE_STR]);
                        const existingTasks = symbolEventName && target[symbolEventName];
                        if (existingTasks) for (let i = 0; i < existingTasks.length; i++) {
                            const existingTask = existingTasks[i];
                            if (compare(existingTask, delegate)) return existingTasks.splice(i, 1), existingTask.isRemoved = !0, 
                            0 === existingTasks.length && (existingTask.allRemoved = !0, target[symbolEventName] = null, 
                            "string" == typeof eventName) && (target[ZONE_SYMBOL_PREFIX + "ON_PROPERTY" + eventName] = null), 
                            existingTask.zone.cancelTask(existingTask), returnTarget ? target : void 0;
                        }
                        return nativeRemoveEventListener.apply(this, arguments);
                    }, proto[LISTENERS_EVENT_LISTENER] = function() {
                        const target = this || _global;
                        let eventName = arguments[0];
                        patchOptions && patchOptions.transferEventName && (eventName = patchOptions.transferEventName(eventName));
                        const listeners = [], tasks = findEventTasks(target, eventNameToString ? eventNameToString(eventName) : eventName);
                        for (let i = 0; i < tasks.length; i++) {
                            const task = tasks[i];
                            listeners.push(task.originalDelegate ? task.originalDelegate : task.callback);
                        }
                        return listeners;
                    }, proto[REMOVE_ALL_LISTENERS_EVENT_LISTENER] = function() {
                        const target = this || _global;
                        let eventName = arguments[0];
                        if (eventName) {
                            patchOptions && patchOptions.transferEventName && (eventName = patchOptions.transferEventName(eventName));
                            const symbolEventNames = zoneSymbolEventNames$1[eventName];
                            if (symbolEventNames) {
                                const tasks = target[symbolEventNames[FALSE_STR]], captureTasks = target[symbolEventNames[TRUE_STR]];
                                if (tasks) {
                                    const removeTasks = tasks.slice();
                                    for (let i = 0; i < removeTasks.length; i++) {
                                        const task = removeTasks[i];
                                        this[REMOVE_EVENT_LISTENER].call(this, eventName, task.originalDelegate ? task.originalDelegate : task.callback, task.options);
                                    }
                                }
                                if (captureTasks) {
                                    const removeTasks = captureTasks.slice();
                                    for (let i = 0; i < removeTasks.length; i++) {
                                        const task = removeTasks[i];
                                        this[REMOVE_EVENT_LISTENER].call(this, eventName, task.originalDelegate ? task.originalDelegate : task.callback, task.options);
                                    }
                                }
                            }
                        } else {
                            const keys = Object.keys(target);
                            for (let i = 0; i < keys.length; i++) {
                                const match = EVENT_NAME_SYMBOL_REGX.exec(keys[i]);
                                let evtName = match && match[1];
                                evtName && "removeListener" !== evtName && this[REMOVE_ALL_LISTENERS_EVENT_LISTENER].call(this, evtName);
                            }
                            this[REMOVE_ALL_LISTENERS_EVENT_LISTENER].call(this, "removeListener");
                        }
                        if (returnTarget) return this;
                    }, attachOriginToPatched(proto[ADD_EVENT_LISTENER], nativeAddEventListener), attachOriginToPatched(proto[REMOVE_EVENT_LISTENER], nativeRemoveEventListener), 
                    nativeRemoveAllListeners && attachOriginToPatched(proto[REMOVE_ALL_LISTENERS_EVENT_LISTENER], nativeRemoveAllListeners), 
                    nativeListeners && attachOriginToPatched(proto[LISTENERS_EVENT_LISTENER], nativeListeners), 
                    !0;
                }
                let results = [];
                for (let i = 0; i < apis.length; i++) results[i] = patchEventTargetMethods(apis[i], patchOptions);
                return results;
            }
            function findEventTasks(target, eventName) {
                const foundTasks = [];
                for (let prop in target) {
                    const match = EVENT_NAME_SYMBOL_REGX.exec(prop);
                    let evtName = match && match[1];
                    if (evtName && (!eventName || evtName === eventName)) {
                        const tasks = target[prop];
                        if (tasks) for (let i = 0; i < tasks.length; i++) foundTasks.push(tasks[i]);
                    }
                }
                return foundTasks;
            }
            function patchEventPrototype(global, api) {
                const Event = global.Event;
                Event && Event.prototype && api.patchMethod(Event.prototype, "stopImmediatePropagation", delegate => (function(self, args) {
                    self[IMMEDIATE_PROPAGATION_SYMBOL] = !0, delegate && delegate.apply(self, args);
                }));
            }
            function patchCallbacks(api, target, targetName, method, callbacks) {
                const symbol = Zone.__symbol__(method);
                if (target[symbol]) return;
                const nativeDelegate = target[symbol] = target[method];
                target[method] = function(name, opts, options) {
                    return opts && opts.prototype && callbacks.forEach((function(callback) {
                        const source = `${targetName}.${method}::` + callback, prototype = opts.prototype;
                        if (prototype.hasOwnProperty(callback)) {
                            const descriptor = api.ObjectGetOwnPropertyDescriptor(prototype, callback);
                            descriptor && descriptor.value ? (descriptor.value = api.wrapWithCurrentZone(descriptor.value, source), 
                            api._redefineProperty(opts.prototype, callback, descriptor)) : prototype[callback] && (prototype[callback] = api.wrapWithCurrentZone(prototype[callback], source));
                        } else prototype[callback] && (prototype[callback] = api.wrapWithCurrentZone(prototype[callback], source));
                    })), nativeDelegate.call(target, name, opts, options);
                }, api.attachOriginToPatched(target[method], nativeDelegate);
            }
            const windowEventNames = [ "absolutedeviceorientation", "afterinput", "afterprint", "appinstalled", "beforeinstallprompt", "beforeprint", "beforeunload", "devicelight", "devicemotion", "deviceorientation", "deviceorientationabsolute", "deviceproximity", "hashchange", "languagechange", "message", "mozbeforepaint", "offline", "online", "paint", "pageshow", "pagehide", "popstate", "rejectionhandled", "storage", "unhandledrejection", "unload", "userproximity", "vrdisplyconnected", "vrdisplaydisconnected", "vrdisplaypresentchange" ], mediaElementEventNames = [ "encrypted", "waitingforkey", "msneedkey", "mozinterruptbegin", "mozinterruptend" ], frameEventNames = [ "load" ], frameSetEventNames = [ "blur", "error", "focus", "load", "resize", "scroll", "messageerror" ], marqueeEventNames = [ "bounce", "finish", "start" ], XMLHttpRequestEventNames = [ "loadstart", "progress", "abort", "error", "load", "progress", "timeout", "loadend", "readystatechange" ], IDBIndexEventNames = [ "upgradeneeded", "complete", "abort", "success", "error", "blocked", "versionchange", "close" ], websocketEventNames = [ "close", "error", "open", "message" ], workerEventNames = [ "error", "message" ], eventNames = [ "abort", "animationcancel", "animationend", "animationiteration", "auxclick", "beforeinput", "blur", "cancel", "canplay", "canplaythrough", "change", "compositionstart", "compositionupdate", "compositionend", "cuechange", "click", "close", "contextmenu", "curechange", "dblclick", "drag", "dragend", "dragenter", "dragexit", "dragleave", "dragover", "drop", "durationchange", "emptied", "ended", "error", "focus", "focusin", "focusout", "gotpointercapture", "input", "invalid", "keydown", "keypress", "keyup", "load", "loadstart", "loadeddata", "loadedmetadata", "lostpointercapture", "mousedown", "mouseenter", "mouseleave", "mousemove", "mouseout", "mouseover", "mouseup", "mousewheel", "orientationchange", "pause", "play", "playing", "pointercancel", "pointerdown", "pointerenter", "pointerleave", "pointerlockchange", "mozpointerlockchange", "webkitpointerlockerchange", "pointerlockerror", "mozpointerlockerror", "webkitpointerlockerror", "pointermove", "pointout", "pointerover", "pointerup", "progress", "ratechange", "reset", "resize", "scroll", "seeked", "seeking", "select", "selectionchange", "selectstart", "show", "sort", "stalled", "submit", "suspend", "timeupdate", "volumechange", "touchcancel", "touchmove", "touchstart", "touchend", "transitioncancel", "transitionend", "waiting", "wheel" ].concat([ "webglcontextrestored", "webglcontextlost", "webglcontextcreationerror" ], [ "autocomplete", "autocompleteerror" ], [ "toggle" ], [ "afterscriptexecute", "beforescriptexecute", "DOMContentLoaded", "freeze", "fullscreenchange", "mozfullscreenchange", "webkitfullscreenchange", "msfullscreenchange", "fullscreenerror", "mozfullscreenerror", "webkitfullscreenerror", "msfullscreenerror", "readystatechange", "visibilitychange", "resume" ], windowEventNames, [ "beforecopy", "beforecut", "beforepaste", "copy", "cut", "paste", "dragstart", "loadend", "animationstart", "search", "transitionrun", "transitionstart", "webkitanimationend", "webkitanimationiteration", "webkitanimationstart", "webkittransitionend" ], [ "activate", "afterupdate", "ariarequest", "beforeactivate", "beforedeactivate", "beforeeditfocus", "beforeupdate", "cellchange", "controlselect", "dataavailable", "datasetchanged", "datasetcomplete", "errorupdate", "filterchange", "layoutcomplete", "losecapture", "move", "moveend", "movestart", "propertychange", "resizeend", "resizestart", "rowenter", "rowexit", "rowsdelete", "rowsinserted", "command", "compassneedscalibration", "deactivate", "help", "mscontentzoom", "msmanipulationstatechanged", "msgesturechange", "msgesturedoubletap", "msgestureend", "msgesturehold", "msgesturestart", "msgesturetap", "msgotpointercapture", "msinertiastart", "mslostpointercapture", "mspointercancel", "mspointerdown", "mspointerenter", "mspointerhover", "mspointerleave", "mspointermove", "mspointerout", "mspointerover", "mspointerup", "pointerout", "mssitemodejumplistitemremoved", "msthumbnailclick", "stop", "storagecommit" ]);
            function filterProperties(target, onProperties, ignoreProperties) {
                if (!ignoreProperties || 0 === ignoreProperties.length) return onProperties;
                const tip = ignoreProperties.filter(ip => ip.target === target);
                if (!tip || 0 === tip.length) return onProperties;
                const targetIgnoreProperties = tip[0].ignoreProperties;
                return onProperties.filter(op => -1 === targetIgnoreProperties.indexOf(op));
            }
            function patchFilteredProperties(target, onProperties, ignoreProperties, prototype) {
                target && patchOnProperties(target, filterProperties(target, onProperties, ignoreProperties), prototype);
            }
            function propertyDescriptorPatch(api, _global) {
                if (isNode && !isMix) return;
                if (Zone[api.symbol("patchEvents")]) return;
                const supportsWebSocket = "undefined" != typeof WebSocket, ignoreProperties = _global.__Zone_ignore_on_properties;
                if (isBrowser) {
                    const internalWindow = window, ignoreErrorProperties = isIE ? [ {
                        target: internalWindow,
                        ignoreProperties: [ "error" ]
                    } ] : [];
                    patchFilteredProperties(internalWindow, eventNames.concat([ "messageerror" ]), ignoreProperties ? ignoreProperties.concat(ignoreErrorProperties) : ignoreProperties, ObjectGetPrototypeOf(internalWindow)), 
                    patchFilteredProperties(Document.prototype, eventNames, ignoreProperties), void 0 !== internalWindow.SVGElement && patchFilteredProperties(internalWindow.SVGElement.prototype, eventNames, ignoreProperties), 
                    patchFilteredProperties(Element.prototype, eventNames, ignoreProperties), patchFilteredProperties(HTMLElement.prototype, eventNames, ignoreProperties), 
                    patchFilteredProperties(HTMLMediaElement.prototype, mediaElementEventNames, ignoreProperties), 
                    patchFilteredProperties(HTMLFrameSetElement.prototype, windowEventNames.concat(frameSetEventNames), ignoreProperties), 
                    patchFilteredProperties(HTMLBodyElement.prototype, windowEventNames.concat(frameSetEventNames), ignoreProperties), 
                    patchFilteredProperties(HTMLFrameElement.prototype, frameEventNames, ignoreProperties), 
                    patchFilteredProperties(HTMLIFrameElement.prototype, frameEventNames, ignoreProperties);
                    const HTMLMarqueeElement = internalWindow.HTMLMarqueeElement;
                    HTMLMarqueeElement && patchFilteredProperties(HTMLMarqueeElement.prototype, marqueeEventNames, ignoreProperties);
                    const Worker = internalWindow.Worker;
                    Worker && patchFilteredProperties(Worker.prototype, workerEventNames, ignoreProperties);
                }
                const XMLHttpRequest = _global.XMLHttpRequest;
                XMLHttpRequest && patchFilteredProperties(XMLHttpRequest.prototype, XMLHttpRequestEventNames, ignoreProperties);
                const XMLHttpRequestEventTarget = _global.XMLHttpRequestEventTarget;
                XMLHttpRequestEventTarget && patchFilteredProperties(XMLHttpRequestEventTarget && XMLHttpRequestEventTarget.prototype, XMLHttpRequestEventNames, ignoreProperties), 
                "undefined" != typeof IDBIndex && (patchFilteredProperties(IDBIndex.prototype, IDBIndexEventNames, ignoreProperties), 
                patchFilteredProperties(IDBRequest.prototype, IDBIndexEventNames, ignoreProperties), 
                patchFilteredProperties(IDBOpenDBRequest.prototype, IDBIndexEventNames, ignoreProperties), 
                patchFilteredProperties(IDBDatabase.prototype, IDBIndexEventNames, ignoreProperties), 
                patchFilteredProperties(IDBTransaction.prototype, IDBIndexEventNames, ignoreProperties), 
                patchFilteredProperties(IDBCursor.prototype, IDBIndexEventNames, ignoreProperties)), 
                supportsWebSocket && patchFilteredProperties(WebSocket.prototype, websocketEventNames, ignoreProperties);
            }
            Zone.__load_patch("util", (global, Zone, api) => {
                api.patchOnProperties = patchOnProperties, api.patchMethod = patchMethod, api.bindArguments = bindArguments, 
                api.patchMacroTask = patchMacroTask;
                const SYMBOL_BLACK_LISTED_EVENTS = Zone.__symbol__("BLACK_LISTED_EVENTS"), SYMBOL_UNPATCHED_EVENTS = Zone.__symbol__("UNPATCHED_EVENTS");
                global[SYMBOL_UNPATCHED_EVENTS] && (global[SYMBOL_BLACK_LISTED_EVENTS] = global[SYMBOL_UNPATCHED_EVENTS]), 
                global[SYMBOL_BLACK_LISTED_EVENTS] && (Zone[SYMBOL_BLACK_LISTED_EVENTS] = Zone[SYMBOL_UNPATCHED_EVENTS] = global[SYMBOL_BLACK_LISTED_EVENTS]), 
                api.patchEventPrototype = patchEventPrototype, api.patchEventTarget = patchEventTarget, 
                api.isIEOrEdge = isIEOrEdge, api.ObjectDefineProperty = ObjectDefineProperty, api.ObjectGetOwnPropertyDescriptor = ObjectGetOwnPropertyDescriptor, 
                api.ObjectCreate = ObjectCreate, api.ArraySlice = ArraySlice, api.patchClass = patchClass, 
                api.wrapWithCurrentZone = wrapWithCurrentZone, api.filterProperties = filterProperties, 
                api.attachOriginToPatched = attachOriginToPatched, api._redefineProperty = Object.defineProperty, 
                api.patchCallbacks = patchCallbacks, api.getGlobalObjects = () => ({
                    globalSources: globalSources,
                    zoneSymbolEventNames: zoneSymbolEventNames$1,
                    eventNames: eventNames,
                    isBrowser: isBrowser,
                    isMix: isMix,
                    isNode: isNode,
                    TRUE_STR: TRUE_STR,
                    FALSE_STR: FALSE_STR,
                    ZONE_SYMBOL_PREFIX: ZONE_SYMBOL_PREFIX,
                    ADD_EVENT_LISTENER_STR: ADD_EVENT_LISTENER_STR,
                    REMOVE_EVENT_LISTENER_STR: REMOVE_EVENT_LISTENER_STR
                });
            });
            const taskSymbol = zoneSymbol("zoneTask");
            function patchTimer(window, setName, cancelName, nameSuffix) {
                let setNative = null, clearNative = null;
                cancelName += nameSuffix;
                const tasksByHandleId = {};
                function scheduleTask(task) {
                    const data = task.data;
                    return data.args[0] = function() {
                        try {
                            task.invoke.apply(this, arguments);
                        } finally {
                            task.data && task.data.isPeriodic || ("number" == typeof data.handleId ? delete tasksByHandleId[data.handleId] : data.handleId && (data.handleId[taskSymbol] = null));
                        }
                    }, data.handleId = setNative.apply(window, data.args), task;
                }
                function clearTask(task) {
                    return clearNative(task.data.handleId);
                }
                setNative = patchMethod(window, setName += nameSuffix, delegate => (function(self, args) {
                    if ("function" == typeof args[0]) {
                        const task = scheduleMacroTaskWithCurrentZone(setName, args[0], {
                            isPeriodic: "Interval" === nameSuffix,
                            delay: "Timeout" === nameSuffix || "Interval" === nameSuffix ? args[1] || 0 : void 0,
                            args: args
                        }, scheduleTask, clearTask);
                        if (!task) return task;
                        const handle = task.data.handleId;
                        return "number" == typeof handle ? tasksByHandleId[handle] = task : handle && (handle[taskSymbol] = task), 
                        handle && handle.ref && handle.unref && "function" == typeof handle.ref && "function" == typeof handle.unref && (task.ref = handle.ref.bind(handle), 
                        task.unref = handle.unref.bind(handle)), "number" == typeof handle || handle ? handle : task;
                    }
                    return delegate.apply(window, args);
                })), clearNative = patchMethod(window, cancelName, delegate => (function(self, args) {
                    const id = args[0];
                    let task;
                    "number" == typeof id ? task = tasksByHandleId[id] : (task = id && id[taskSymbol]) || (task = id), 
                    task && "string" == typeof task.type ? "notScheduled" !== task.state && (task.cancelFn && task.data.isPeriodic || 0 === task.runCount) && ("number" == typeof id ? delete tasksByHandleId[id] : id && (id[taskSymbol] = null), 
                    task.zone.cancelTask(task)) : delegate.apply(window, args);
                }));
            }
            function eventTargetPatch(_global, api) {
                if (Zone[api.symbol("patchEventTarget")]) return;
                const {eventNames: eventNames, zoneSymbolEventNames: zoneSymbolEventNames, TRUE_STR: TRUE_STR, FALSE_STR: FALSE_STR, ZONE_SYMBOL_PREFIX: ZONE_SYMBOL_PREFIX} = api.getGlobalObjects();
                for (let i = 0; i < eventNames.length; i++) {
                    const eventName = eventNames[i], symbol = ZONE_SYMBOL_PREFIX + (eventName + FALSE_STR), symbolCapture = ZONE_SYMBOL_PREFIX + (eventName + TRUE_STR);
                    zoneSymbolEventNames[eventName] = {}, zoneSymbolEventNames[eventName][FALSE_STR] = symbol, 
                    zoneSymbolEventNames[eventName][TRUE_STR] = symbolCapture;
                }
                const EVENT_TARGET = _global.EventTarget;
                return EVENT_TARGET && EVENT_TARGET.prototype ? (api.patchEventTarget(_global, [ EVENT_TARGET && EVENT_TARGET.prototype ]), 
                !0) : void 0;
            }
            Zone.__load_patch("legacy", global => {
                const legacyPatch = global[Zone.__symbol__("legacyPatch")];
                legacyPatch && legacyPatch();
            }), Zone.__load_patch("timers", global => {
                patchTimer(global, "set", "clear", "Timeout"), patchTimer(global, "set", "clear", "Interval"), 
                patchTimer(global, "set", "clear", "Immediate");
            }), Zone.__load_patch("requestAnimationFrame", global => {
                patchTimer(global, "request", "cancel", "AnimationFrame"), patchTimer(global, "mozRequest", "mozCancel", "AnimationFrame"), 
                patchTimer(global, "webkitRequest", "webkitCancel", "AnimationFrame");
            }), Zone.__load_patch("blocking", (global, Zone) => {
                const blockingMethods = [ "alert", "prompt", "confirm" ];
                for (let i = 0; i < blockingMethods.length; i++) patchMethod(global, blockingMethods[i], (delegate, symbol, name) => (function(s, args) {
                    return Zone.current.run(delegate, global, args, name);
                }));
            }), Zone.__load_patch("EventTarget", (global, Zone, api) => {
                !function(global, api) {
                    api.patchEventPrototype(global, api);
                }(global, api), eventTargetPatch(global, api);
                const XMLHttpRequestEventTarget = global.XMLHttpRequestEventTarget;
                XMLHttpRequestEventTarget && XMLHttpRequestEventTarget.prototype && api.patchEventTarget(global, [ XMLHttpRequestEventTarget.prototype ]), 
                patchClass("MutationObserver"), patchClass("WebKitMutationObserver"), patchClass("IntersectionObserver"), 
                patchClass("FileReader");
            }), Zone.__load_patch("on_property", (global, Zone, api) => {
                propertyDescriptorPatch(api, global);
            }), Zone.__load_patch("customElements", (global, Zone, api) => {
                !function(_global, api) {
                    const {isBrowser: isBrowser, isMix: isMix} = api.getGlobalObjects();
                    (isBrowser || isMix) && _global.customElements && "customElements" in _global && api.patchCallbacks(api, _global.customElements, "customElements", "define", [ "connectedCallback", "disconnectedCallback", "adoptedCallback", "attributeChangedCallback" ]);
                }(global, api);
            }), Zone.__load_patch("XHR", (global, Zone) => {
                !function(window) {
                    const XMLHttpRequest = window.XMLHttpRequest;
                    if (!XMLHttpRequest) return;
                    const XMLHttpRequestPrototype = XMLHttpRequest.prototype;
                    let oriAddListener = XMLHttpRequestPrototype[ZONE_SYMBOL_ADD_EVENT_LISTENER], oriRemoveListener = XMLHttpRequestPrototype[ZONE_SYMBOL_REMOVE_EVENT_LISTENER];
                    if (!oriAddListener) {
                        const XMLHttpRequestEventTarget = window.XMLHttpRequestEventTarget;
                        if (XMLHttpRequestEventTarget) {
                            const XMLHttpRequestEventTargetPrototype = XMLHttpRequestEventTarget.prototype;
                            oriAddListener = XMLHttpRequestEventTargetPrototype[ZONE_SYMBOL_ADD_EVENT_LISTENER], 
                            oriRemoveListener = XMLHttpRequestEventTargetPrototype[ZONE_SYMBOL_REMOVE_EVENT_LISTENER];
                        }
                    }
                    const READY_STATE_CHANGE = "readystatechange", SCHEDULED = "scheduled";
                    function scheduleTask(task) {
                        const data = task.data, target = data.target;
                        target[XHR_SCHEDULED] = !1, target[XHR_ERROR_BEFORE_SCHEDULED] = !1;
                        const listener = target[XHR_LISTENER];
                        oriAddListener || (oriAddListener = target[ZONE_SYMBOL_ADD_EVENT_LISTENER], oriRemoveListener = target[ZONE_SYMBOL_REMOVE_EVENT_LISTENER]), 
                        listener && oriRemoveListener.call(target, READY_STATE_CHANGE, listener);
                        const newListener = target[XHR_LISTENER] = () => {
                            if (target.readyState === target.DONE) if (!data.aborted && target[XHR_SCHEDULED] && task.state === SCHEDULED) {
                                const loadTasks = target[Zone.__symbol__("loadfalse")];
                                if (loadTasks && loadTasks.length > 0) {
                                    const oriInvoke = task.invoke;
                                    task.invoke = function() {
                                        const loadTasks = target[Zone.__symbol__("loadfalse")];
                                        for (let i = 0; i < loadTasks.length; i++) loadTasks[i] === task && loadTasks.splice(i, 1);
                                        data.aborted || task.state !== SCHEDULED || oriInvoke.call(task);
                                    }, loadTasks.push(task);
                                } else task.invoke();
                            } else data.aborted || !1 !== target[XHR_SCHEDULED] || (target[XHR_ERROR_BEFORE_SCHEDULED] = !0);
                        };
                        return oriAddListener.call(target, READY_STATE_CHANGE, newListener), target[XHR_TASK] || (target[XHR_TASK] = task), 
                        sendNative.apply(target, data.args), target[XHR_SCHEDULED] = !0, task;
                    }
                    function placeholderCallback() {}
                    function clearTask(task) {
                        const data = task.data;
                        return data.aborted = !0, abortNative.apply(data.target, data.args);
                    }
                    const openNative = patchMethod(XMLHttpRequestPrototype, "open", () => (function(self, args) {
                        return self[XHR_SYNC] = 0 == args[2], self[XHR_URL] = args[1], openNative.apply(self, args);
                    })), fetchTaskAborting = zoneSymbol("fetchTaskAborting"), fetchTaskScheduling = zoneSymbol("fetchTaskScheduling"), sendNative = patchMethod(XMLHttpRequestPrototype, "send", () => (function(self, args) {
                        if (!0 === Zone.current[fetchTaskScheduling]) return sendNative.apply(self, args);
                        if (self[XHR_SYNC]) return sendNative.apply(self, args);
                        {
                            const options = {
                                target: self,
                                url: self[XHR_URL],
                                isPeriodic: !1,
                                args: args,
                                aborted: !1
                            }, task = scheduleMacroTaskWithCurrentZone("XMLHttpRequest.send", placeholderCallback, options, scheduleTask, clearTask);
                            self && !0 === self[XHR_ERROR_BEFORE_SCHEDULED] && !options.aborted && task.state === SCHEDULED && task.invoke();
                        }
                    })), abortNative = patchMethod(XMLHttpRequestPrototype, "abort", () => (function(self, args) {
                        const task = self[XHR_TASK];
                        if (task && "string" == typeof task.type) {
                            if (null == task.cancelFn || task.data && task.data.aborted) return;
                            task.zone.cancelTask(task);
                        } else if (!0 === Zone.current[fetchTaskAborting]) return abortNative.apply(self, args);
                    }));
                }(global);
                const XHR_TASK = zoneSymbol("xhrTask"), XHR_SYNC = zoneSymbol("xhrSync"), XHR_LISTENER = zoneSymbol("xhrListener"), XHR_SCHEDULED = zoneSymbol("xhrScheduled"), XHR_URL = zoneSymbol("xhrURL"), XHR_ERROR_BEFORE_SCHEDULED = zoneSymbol("xhrErrorBeforeScheduled");
            }), Zone.__load_patch("geolocation", global => {
                global.navigator && global.navigator.geolocation && function(prototype, fnNames) {
                    const source = prototype.constructor.name;
                    for (let i = 0; i < fnNames.length; i++) {
                        const name = fnNames[i], delegate = prototype[name];
                        if (delegate) {
                            if (!isPropertyWritable(ObjectGetOwnPropertyDescriptor(prototype, name))) continue;
                            prototype[name] = (delegate => {
                                const patched = function() {
                                    return delegate.apply(this, bindArguments(arguments, source + "." + name));
                                };
                                return attachOriginToPatched(patched, delegate), patched;
                            })(delegate);
                        }
                    }
                }(global.navigator.geolocation, [ "getCurrentPosition", "watchPosition" ]);
            }), Zone.__load_patch("PromiseRejectionEvent", (global, Zone) => {
                function findPromiseRejectionHandler(evtName) {
                    return function(e) {
                        findEventTasks(global, evtName).forEach(eventTask => {
                            const PromiseRejectionEvent = global.PromiseRejectionEvent;
                            if (PromiseRejectionEvent) {
                                const evt = new PromiseRejectionEvent(evtName, {
                                    promise: e.promise,
                                    reason: e.rejection
                                });
                                eventTask.invoke(evt);
                            }
                        });
                    };
                }
                global.PromiseRejectionEvent && (Zone[zoneSymbol("unhandledPromiseRejectionHandler")] = findPromiseRejectionHandler("unhandledrejection"), 
                Zone[zoneSymbol("rejectionHandledHandler")] = findPromiseRejectionHandler("rejectionhandled"));
            });
        }) ? __WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module) : __WEBPACK_AMD_DEFINE_FACTORY__) || (module.exports = __WEBPACK_AMD_DEFINE_RESULT__);
    },
    s1Zv: function(module, exports) {
        !function() {
            if (void 0 === window.Reflect || void 0 === window.customElements || window.customElements.hasOwnProperty("polyfillWrapFlushCallback")) return;
            const BuiltInHTMLElement = HTMLElement;
            window.HTMLElement = function() {
                return Reflect.construct(BuiltInHTMLElement, [], this.constructor);
            }, HTMLElement.prototype = BuiltInHTMLElement.prototype, HTMLElement.prototype.constructor = HTMLElement, 
            Object.setPrototypeOf(HTMLElement, BuiltInHTMLElement);
        }();
    }
}, [ [ 1, 0 ] ] ]);
//# sourceMappingURL=polyfills.js.map