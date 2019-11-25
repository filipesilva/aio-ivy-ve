        "use strict"; 
        __webpack_require__.d(__webpack_exports__, "a", (function() {
            return APP_BASE_HREF;
        })), __webpack_require__.d(__webpack_exports__, "b", (function() {
            return AsyncPipe;
        })), __webpack_require__.d(__webpack_exports__, "c", (function() {
            return CommonModule;
        })), __webpack_require__.d(__webpack_exports__, "d", (function() {
            return DOCUMENT;
        })), __webpack_require__.d(__webpack_exports__, "e", (function() {
            return HashLocationStrategy;
        })), __webpack_require__.d(__webpack_exports__, "f", (function() {
            return LOCATION_INITIALIZED;
        })), __webpack_require__.d(__webpack_exports__, "g", (function() {
            return Location;
        })), __webpack_require__.d(__webpack_exports__, "h", (function() {
            return LocationStrategy;
        })), __webpack_require__.d(__webpack_exports__, "i", (function() {
            return NgClass;
        })), __webpack_require__.d(__webpack_exports__, "j", (function() {
            return NgForOf;
        })), __webpack_require__.d(__webpack_exports__, "k", (function() {
            return NgIf;
        })), __webpack_require__.d(__webpack_exports__, "l", (function() {
            return NgStyle;
        })), __webpack_require__.d(__webpack_exports__, "m", (function() {
            return NgSwitch;
        })), __webpack_require__.d(__webpack_exports__, "n", (function() {
            return NgSwitchCase;
        })), __webpack_require__.d(__webpack_exports__, "o", (function() {
            return NgSwitchDefault;
        })), __webpack_require__.d(__webpack_exports__, "p", (function() {
            return PathLocationStrategy;
        })), __webpack_require__.d(__webpack_exports__, "q", (function() {
            return PlatformLocation;
        })), __webpack_require__.d(__webpack_exports__, "r", (function() {
            return ViewportScroller;
        })), __webpack_require__.d(__webpack_exports__, "s", (function() {
            return isPlatformBrowser;
        })), __webpack_require__.d(__webpack_exports__, "t", (function() {
            return DomAdapter;
        })), __webpack_require__.d(__webpack_exports__, "u", (function() {
            return PLATFORM_BROWSER_ID;
        })), __webpack_require__.d(__webpack_exports__, "v", (function() {
            return getDOM;
        })), __webpack_require__.d(__webpack_exports__, "w", (function() {
            return parseCookieValue;
        })), __webpack_require__.d(__webpack_exports__, "x", (function() {
            return setRootDomAdapter;
        }));
        var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("fXoL");
        class StylingDiffer {
            constructor(_name, _options) {
                this._name = _name, this._options = _options, this.value = null, this._lastSetValue = null, 
                this._lastSetValueType = 0, this._lastSetValueIdentityChange = !1;
            }
            setValue(value) {
                if (Array.isArray(value)) this._lastSetValueType = 4; else if (value instanceof Set) this._lastSetValueType = 8; else if (value && "string" == typeof value) {
                    if (!(4 & this._options)) throw new Error(this._name + " string values are not allowed");
                    this._lastSetValueType = 1;
                } else this._lastSetValueType = value ? 2 : 0;
                this._lastSetValueIdentityChange = !0, this._lastSetValue = value || null;
            }
            hasValueChanged() {
                let valueHasChanged = this._lastSetValueIdentityChange;
                if (!(valueHasChanged || 14 & this._lastSetValueType)) return !1;
                let finalValue = null;
                const trimValues = !!(1 & this._options), parseOutUnits = !!(8 & this._options), allowSubKeys = !!(2 & this._options);
                switch (this._lastSetValueType) {
                  case 1:
                    const tokens = this._lastSetValue.split(/\s+/g);
                    16 & this._options ? (finalValue = {}, tokens.forEach((token, i) => finalValue[token] = !0)) : finalValue = tokens.reduce((str, token, i) => str + (i ? " " : "") + token);
                    break;

                  case 2:
                    const map = this._lastSetValue, keys = Object.keys(map);
                    valueHasChanged || (valueHasChanged = !this.value || function(keys, a, b) {
                        const newKeys = keys;
                        if (!arrayEqualsArray(Object.keys(a), newKeys)) return !0;
                        for (let i = 0; i < newKeys.length; i++) {
                            const key = newKeys[i];
                            if (a[key] !== b[key]) return !0;
                        }
                        return !1;
                    }(keys, this.value, map)), valueHasChanged && (finalValue = bulidMapFromValues(this._name, trimValues, parseOutUnits, allowSubKeys, map, keys));
                    break;

                  case 4:
                  case 8:
                    const values = Array.from(this._lastSetValue);
                    valueHasChanged || (valueHasChanged = !arrayEqualsArray(Object.keys(this.value), values)), 
                    valueHasChanged && (finalValue = bulidMapFromValues(this._name, trimValues, parseOutUnits, allowSubKeys, values));
                    break;

                  default:
                    finalValue = null;
                }
                return valueHasChanged && (this.value = finalValue), valueHasChanged;
            }
        }
        function bulidMapFromValues(errorPrefix, trim, parseOutUnits, allowSubKeys, values, keys) {
            const map = {};
            if (keys) for (let i = 0; i < keys.length; i++) {
                let key = keys[i];
                setMapValues(map, key = trim ? key.trim() : key, values[key], parseOutUnits, allowSubKeys);
            } else for (let i = 0; i < values.length; i++) {
                let value = values[i];
                assertValidValue(errorPrefix, value), setMapValues(map, value = trim ? value.trim() : value, !0, !1, allowSubKeys);
            }
            return map;
        }
        function assertValidValue(errorPrefix, value) {
            if ("string" != typeof value) throw new Error(`${errorPrefix} can only toggle CSS classes expressed as strings, got ${value}`);
        }
        function setMapValues(map, key, value, parseOutUnits, allowSubKeys) {
            if (allowSubKeys && key.indexOf(" ") > 0) {
                const innerKeys = key.split(/\s+/g);
                for (let j = 0; j < innerKeys.length; j++) setIndividualMapValue(map, innerKeys[j], value, parseOutUnits);
            } else setIndividualMapValue(map, key, value, parseOutUnits);
        }
        function setIndividualMapValue(map, key, value, parseOutUnits) {
            if (parseOutUnits) {
                const values = function(key, value) {
                    const index = key.indexOf(".");
                    if (index > 0) {
                        const unit = key.substr(index + 1);
                        key = key.substring(0, index), null != value && (value += unit);
                    }
                    return {
                        key: key,
                        value: value
                    };
                }(key, value);
                value = values.value, key = values.key;
            }
            map[key] = value;
        }
        function arrayEqualsArray(a, b) {
            if (a && b) {
                if (a.length !== b.length) return !1;
                for (let i = 0; i < a.length; i++) if (-1 === b.indexOf(a[i])) return !1;
                return !0;
            }
            return !1;
        }
        class NgClassImpl {}
        const NgClassImplProvider = {
            provide: NgClassImpl,
            useClass: (() => {
                class NgClassR3Impl {
                    constructor() {
                        this._value = null, this._ngClassDiffer = new StylingDiffer("NgClass", 23), this._classStringDiffer = null;
                    }
                    getValue() {
                        return this._value;
                    }
                    setClass(value) {
                        (value || this._classStringDiffer) && (this._classStringDiffer = this._classStringDiffer || new StylingDiffer("class", 20), 
                        this._classStringDiffer.setValue(value));
                    }
                    setNgClass(value) {
                        this._ngClassDiffer.setValue(value);
                    }
                    applyChanges() {
                        const classChanged = !!this._classStringDiffer && this._classStringDiffer.hasValueChanged(), ngClassChanged = this._ngClassDiffer.hasValueChanged();
                        if (classChanged || ngClassChanged) {
                            let value = this._ngClassDiffer.value;
                            if (this._classStringDiffer) {
                                let classValue = this._classStringDiffer.value;
                                classValue && (value = value ? Object.assign(Object.assign({}, classValue), value) : classValue);
                            }
                            this._value = value;
                        }
                    }
                }
                return NgClassR3Impl.ɵfac = function(t) {
                    return new (t || NgClassR3Impl);
                }, NgClassR3Impl.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__.Lb({
                    token: NgClassR3Impl,
                    factory: function(t) {
                        return NgClassR3Impl.ɵfac(t);
                    },
                    providedIn: null
                }), NgClassR3Impl;
            })()
        }, ngClassDirectiveDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__.Kb)({
            type: function() {},
            selectors: null,
            hostBindings: function(rf, ctx, elIndex) {
                1 & rf && Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__.Bb)(2), 2 & rf && Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__.Db)(ctx.getValue());
            }
        }), ngClassFactoryDef = function() {};
        let NgClassBase = (() => {
            class NgClassBase {
                constructor(_delegate) {
                    this._delegate = _delegate;
                }
                getValue() {
                    return this._delegate.getValue();
                }
            }
            return NgClassBase.ɵdir = ngClassDirectiveDef, NgClassBase.ɵfac = ngClassFactoryDef, 
            NgClassBase;
        })(), NgClass = (() => {
            class NgClass extends NgClassBase {
                constructor(delegate) {
                    super(delegate);
                }
                set klass(value) {
                    this._delegate.setClass(value);
                }
                set ngClass(value) {
                    this._delegate.setNgClass(value);
                }
                ngDoCheck() {
                    this._delegate.applyChanges();
                }
            }
            return NgClass.ɵfac = function(t) {
                return new (t || NgClass)(_angular_core__WEBPACK_IMPORTED_MODULE_0__.Pb(NgClassImpl));
            }, NgClass.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__.Kb({
                type: NgClass,
                selectors: [ [ "", "ngClass", "" ] ],
                inputs: {
                    klass: [ "class", "klass" ],
                    ngClass: "ngClass"
                },
                features: [ _angular_core__WEBPACK_IMPORTED_MODULE_0__.zb([ NgClassImplProvider ]), _angular_core__WEBPACK_IMPORTED_MODULE_0__.xb ]
            }), NgClass;
        })();
        class NgStyleImpl {}
        const NgStyleImplProvider = {
            provide: NgStyleImpl,
            useClass: (() => {
                class NgStyleR3Impl {
                    constructor() {
                        this._differ = new StylingDiffer("NgStyle", 8), this._value = null;
                    }
                    getValue() {
                        return this._value;
                    }
                    setNgStyle(value) {
                        this._differ.setValue(value);
                    }
                    applyChanges() {
                        this._differ.hasValueChanged() && (this._value = this._differ.value);
                    }
                }
                return NgStyleR3Impl.ɵfac = function(t) {
                    return new (t || NgStyleR3Impl);
                }, NgStyleR3Impl.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__.Lb({
                    token: NgStyleR3Impl,
                    factory: function(t) {
                        return NgStyleR3Impl.ɵfac(t);
                    },
                    providedIn: null
                }), NgStyleR3Impl;
            })()
        }, ngStyleDirectiveDef__POST_R3__ = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__.Kb)({
            type: function() {},
            selectors: null,
            hostBindings: function(rf, ctx, elIndex) {
                1 & rf && Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__.Bb)(2), 2 & rf && Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__.zc)(ctx.getValue());
            }
        }), ngStyleDirectiveDef = ngStyleDirectiveDef__POST_R3__, ngStyleFactoryDef = ngStyleDirectiveDef__POST_R3__;
        let NgStyleBase = (() => {
            class NgStyleBase {
                constructor(_delegate) {
                    this._delegate = _delegate;
                }
                getValue() {
                    return this._delegate.getValue();
                }
            }
            return NgStyleBase.ɵdir = ngStyleDirectiveDef, NgStyleBase.ɵfac = ngStyleFactoryDef, 
            NgStyleBase;
        })(), NgStyle = (() => {
            class NgStyle extends NgStyleBase {
                constructor(delegate) {
                    super(delegate);
                }
                set ngStyle(value) {
                    this._delegate.setNgStyle(value);
                }
                ngDoCheck() {
                    this._delegate.applyChanges();
                }
            }
            return NgStyle.ɵfac = function(t) {
                return new (t || NgStyle)(_angular_core__WEBPACK_IMPORTED_MODULE_0__.Pb(NgStyleImpl));
            }, NgStyle.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__.Kb({
                type: NgStyle,
                selectors: [ [ "", "ngStyle", "" ] ],
                inputs: {
                    ngStyle: "ngStyle"
                },
                features: [ _angular_core__WEBPACK_IMPORTED_MODULE_0__.zb([ NgStyleImplProvider ]), _angular_core__WEBPACK_IMPORTED_MODULE_0__.xb ]
            }), NgStyle;
        })(), _DOM = null;
        function getDOM() {
            return _DOM;
        }
        function setRootDomAdapter(adapter) {
            _DOM || (_DOM = adapter);
        }
        class DomAdapter {}
        const DOCUMENT = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.p("DocumentToken");
        let PlatformLocation = (() => {
            class PlatformLocation {}
            return PlatformLocation.ɵfac = function(t) {
                return new (t || PlatformLocation);
            }, PlatformLocation.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__.Lb({
                token: PlatformLocation,
                factory: function() {
                    return useBrowserPlatformLocation();
                },
                providedIn: "platform"
            }), PlatformLocation.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__.Lb)({
                factory: useBrowserPlatformLocation,
                token: PlatformLocation,
                providedIn: "platform"
            }), PlatformLocation;
        })();
        function useBrowserPlatformLocation() {
            return Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__.Zb)(BrowserPlatformLocation);
        }
        const LOCATION_INITIALIZED = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.p("Location Initialized");
        let BrowserPlatformLocation = (() => {
            class BrowserPlatformLocation extends PlatformLocation {
                constructor(_doc) {
                    super(), this._doc = _doc, this._init();
                }
                _init() {
                    this.location = getDOM().getLocation(), this._history = getDOM().getHistory();
                }
                getBaseHrefFromDOM() {
                    return getDOM().getBaseHref(this._doc);
                }
                onPopState(fn) {
                    getDOM().getGlobalEventTarget(this._doc, "window").addEventListener("popstate", fn, !1);
                }
                onHashChange(fn) {
                    getDOM().getGlobalEventTarget(this._doc, "window").addEventListener("hashchange", fn, !1);
                }
                get href() {
                    return this.location.href;
                }
                get protocol() {
                    return this.location.protocol;
                }
                get hostname() {
                    return this.location.hostname;
                }
                get port() {
                    return this.location.port;
                }
                get pathname() {
                    return this.location.pathname;
                }
                get search() {
                    return this.location.search;
                }
                get hash() {
                    return this.location.hash;
                }
                set pathname(newPath) {
                    this.location.pathname = newPath;
                }
                pushState(state, title, url) {
                    supportsState() ? this._history.pushState(state, title, url) : this.location.hash = url;
                }
                replaceState(state, title, url) {
                    supportsState() ? this._history.replaceState(state, title, url) : this.location.hash = url;
                }
                forward() {
                    this._history.forward();
                }
                back() {
                    this._history.back();
                }
                getState() {
                    return this._history.state;
                }
            }
            return BrowserPlatformLocation.ɵfac = function(t) {
                return new (t || BrowserPlatformLocation)(_angular_core__WEBPACK_IMPORTED_MODULE_0__.Zb(DOCUMENT));
            }, BrowserPlatformLocation.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__.Lb({
                token: BrowserPlatformLocation,
                factory: function() {
                    return createBrowserPlatformLocation();
                },
                providedIn: "platform"
            }), BrowserPlatformLocation.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__.Lb)({
                factory: createBrowserPlatformLocation,
                token: BrowserPlatformLocation,
                providedIn: "platform"
            }), BrowserPlatformLocation;
        })();
        function supportsState() {
            return !!window.history.pushState;
        }
        function createBrowserPlatformLocation() {
            return new BrowserPlatformLocation(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__.Zb)(DOCUMENT));
        }
        function joinWithSlash(start, end) {
            if (0 == start.length) return end;
            if (0 == end.length) return start;
            let slashes = 0;
            return start.endsWith("/") && slashes++, end.startsWith("/") && slashes++, 2 == slashes ? start + end.substring(1) : 1 == slashes ? start + end : start + "/" + end;
        }
        function stripTrailingSlash(url) {
            const match = url.match(/#|\?|$/), pathEndIdx = match && match.index || url.length;
            return url.slice(0, pathEndIdx - ("/" === url[pathEndIdx - 1] ? 1 : 0)) + url.slice(pathEndIdx);
        }
        function normalizeQueryParams(params) {
            return params && "?" !== params[0] ? "?" + params : params;
        }
        let LocationStrategy = (() => {
            class LocationStrategy {}
            return LocationStrategy.ɵfac = function(t) {
                return new (t || LocationStrategy);
            }, LocationStrategy.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__.Lb({
                token: LocationStrategy,
                factory: function() {
                    return provideLocationStrategy();
                },
                providedIn: "root"
            }), LocationStrategy.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__.Lb)({
                factory: provideLocationStrategy,
                token: LocationStrategy,
                providedIn: "root"
            }), LocationStrategy;
        })();
        function provideLocationStrategy(platformLocation) {
            const location = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__.Zb)(DOCUMENT).location;
            return new PathLocationStrategy(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__.Zb)(PlatformLocation), location && location.origin || "");
        }
        const APP_BASE_HREF = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.p("appBaseHref");
        let PathLocationStrategy = (() => {
            class PathLocationStrategy extends LocationStrategy {
                constructor(_platformLocation, href) {
                    if (super(), this._platformLocation = _platformLocation, null == href && (href = this._platformLocation.getBaseHrefFromDOM()), 
                    null == href) throw new Error("No base href set. Please provide a value for the APP_BASE_HREF token or add a base element to the document.");
                    this._baseHref = href;
                }
                onPopState(fn) {
                    this._platformLocation.onPopState(fn), this._platformLocation.onHashChange(fn);
                }
                getBaseHref() {
                    return this._baseHref;
                }
                prepareExternalUrl(internal) {
                    return joinWithSlash(this._baseHref, internal);
                }
                path(includeHash = !1) {
                    const pathname = this._platformLocation.pathname + normalizeQueryParams(this._platformLocation.search), hash = this._platformLocation.hash;
                    return hash && includeHash ? `${pathname}${hash}` : pathname;
                }
                pushState(state, title, url, queryParams) {
                    const externalUrl = this.prepareExternalUrl(url + normalizeQueryParams(queryParams));
                    this._platformLocation.pushState(state, title, externalUrl);
                }
                replaceState(state, title, url, queryParams) {
                    const externalUrl = this.prepareExternalUrl(url + normalizeQueryParams(queryParams));
                    this._platformLocation.replaceState(state, title, externalUrl);
                }
                forward() {
                    this._platformLocation.forward();
                }
                back() {
                    this._platformLocation.back();
                }
            }
            return PathLocationStrategy.ɵfac = function(t) {
                return new (t || PathLocationStrategy)(_angular_core__WEBPACK_IMPORTED_MODULE_0__.Zb(PlatformLocation), _angular_core__WEBPACK_IMPORTED_MODULE_0__.Zb(APP_BASE_HREF, 8));
            }, PathLocationStrategy.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__.Lb({
                token: PathLocationStrategy,
                factory: function(t) {
                    return PathLocationStrategy.ɵfac(t);
                },
                providedIn: null
            }), PathLocationStrategy;
        })(), HashLocationStrategy = (() => {
            class HashLocationStrategy extends LocationStrategy {
                constructor(_platformLocation, _baseHref) {
                    super(), this._platformLocation = _platformLocation, this._baseHref = "", null != _baseHref && (this._baseHref = _baseHref);
                }
                onPopState(fn) {
                    this._platformLocation.onPopState(fn), this._platformLocation.onHashChange(fn);
                }
                getBaseHref() {
                    return this._baseHref;
                }
                path(includeHash = !1) {
                    let path = this._platformLocation.hash;
                    return null == path && (path = "#"), path.length > 0 ? path.substring(1) : path;
                }
                prepareExternalUrl(internal) {
                    const url = joinWithSlash(this._baseHref, internal);
                    return url.length > 0 ? "#" + url : url;
                }
                pushState(state, title, path, queryParams) {
                    let url = this.prepareExternalUrl(path + normalizeQueryParams(queryParams));
                    0 == url.length && (url = this._platformLocation.pathname), this._platformLocation.pushState(state, title, url);
                }
                replaceState(state, title, path, queryParams) {
                    let url = this.prepareExternalUrl(path + normalizeQueryParams(queryParams));
                    0 == url.length && (url = this._platformLocation.pathname), this._platformLocation.replaceState(state, title, url);
                }
                forward() {
                    this._platformLocation.forward();
                }
                back() {
                    this._platformLocation.back();
                }
            }
            return HashLocationStrategy.ɵfac = function(t) {
                return new (t || HashLocationStrategy)(_angular_core__WEBPACK_IMPORTED_MODULE_0__.Zb(PlatformLocation), _angular_core__WEBPACK_IMPORTED_MODULE_0__.Zb(APP_BASE_HREF, 8));
            }, HashLocationStrategy.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__.Lb({
                token: HashLocationStrategy,
                factory: function(t) {
                    return HashLocationStrategy.ɵfac(t);
                },
                providedIn: null
            }), HashLocationStrategy;
        })(), Location = (() => {
            class Location {
                constructor(platformStrategy, platformLocation) {
                    this._subject = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.m, this._urlChangeListeners = [], 
                    this._platformStrategy = platformStrategy;
                    const browserBaseHref = this._platformStrategy.getBaseHref();
                    this._platformLocation = platformLocation, this._baseHref = stripTrailingSlash(_stripIndexHtml(browserBaseHref)), 
                    this._platformStrategy.onPopState(ev => {
                        this._subject.emit({
                            url: this.path(!0),
                            pop: !0,
                            state: ev.state,
                            type: ev.type
                        });
                    });
                }
                path(includeHash = !1) {
                    return this.normalize(this._platformStrategy.path(includeHash));
                }
                getState() {
                    return this._platformLocation.getState();
                }
                isCurrentPathEqualTo(path, query = "") {
                    return this.path() == this.normalize(path + normalizeQueryParams(query));
                }
                normalize(url) {
                    return Location.stripTrailingSlash(function(baseHref, url) {
                        return baseHref && url.startsWith(baseHref) ? url.substring(baseHref.length) : url;
                    }(this._baseHref, _stripIndexHtml(url)));
                }
                prepareExternalUrl(url) {
                    return url && "/" !== url[0] && (url = "/" + url), this._platformStrategy.prepareExternalUrl(url);
                }
                go(path, query = "", state = null) {
                    this._platformStrategy.pushState(state, "", path, query), this._notifyUrlChangeListeners(this.prepareExternalUrl(path + normalizeQueryParams(query)), state);
                }
                replaceState(path, query = "", state = null) {
                    this._platformStrategy.replaceState(state, "", path, query), this._notifyUrlChangeListeners(this.prepareExternalUrl(path + normalizeQueryParams(query)), state);
                }
                forward() {
                    this._platformStrategy.forward();
                }
                back() {
                    this._platformStrategy.back();
                }
                onUrlChange(fn) {
                    this._urlChangeListeners.push(fn), this.subscribe(v => {
                        this._notifyUrlChangeListeners(v.url, v.state);
                    });
                }
                _notifyUrlChangeListeners(url = "", state) {
                    this._urlChangeListeners.forEach(fn => fn(url, state));
                }
                subscribe(onNext, onThrow, onReturn) {
                    return this._subject.subscribe({
                        next: onNext,
                        error: onThrow,
                        complete: onReturn
                    });
                }
            }
            return Location.ɵfac = function(t) {
                return new (t || Location)(_angular_core__WEBPACK_IMPORTED_MODULE_0__.Zb(LocationStrategy), _angular_core__WEBPACK_IMPORTED_MODULE_0__.Zb(PlatformLocation));
            }, Location.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__.Lb({
                token: Location,
                factory: function() {
                    return createLocation();
                },
                providedIn: "root"
            }), Location.normalizeQueryParams = normalizeQueryParams, Location.joinWithSlash = joinWithSlash, 
            Location.stripTrailingSlash = stripTrailingSlash, Location.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__.Lb)({
                factory: createLocation,
                token: Location,
                providedIn: "root"
            }), Location;
        })();
        function createLocation() {
            return new Location(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__.Zb)(LocationStrategy), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__.Zb)(PlatformLocation));
        }
        function _stripIndexHtml(url) {
            return url.replace(/\/index.html$/, "");
        }
        const Plural = function() {
            var Plural = {
                Zero: 0,
                One: 1,
                Two: 2,
                Few: 3,
                Many: 4,
                Other: 5
            };
            return Plural[Plural.Zero] = "Zero", Plural[Plural.One] = "One", Plural[Plural.Two] = "Two", 
            Plural[Plural.Few] = "Few", Plural[Plural.Many] = "Many", Plural[Plural.Other] = "Other", 
            Plural;
        }(), getLocalePluralCase = _angular_core__WEBPACK_IMPORTED_MODULE_0__.mb;
        class NgLocalization {}
        let NgLocaleLocalization = (() => {
            class NgLocaleLocalization extends NgLocalization {
                constructor(locale) {
                    super(), this.locale = locale;
                }
                getPluralCategory(value, locale) {
                    switch (getLocalePluralCase(locale || this.locale)(value)) {
                      case Plural.Zero:
                        return "zero";

                      case Plural.One:
                        return "one";

                      case Plural.Two:
                        return "two";

                      case Plural.Few:
                        return "few";

                      case Plural.Many:
                        return "many";

                      default:
                        return "other";
                    }
                }
            }
            return NgLocaleLocalization.ɵfac = function(t) {
                return new (t || NgLocaleLocalization)(_angular_core__WEBPACK_IMPORTED_MODULE_0__.Zb(_angular_core__WEBPACK_IMPORTED_MODULE_0__.t));
            }, NgLocaleLocalization.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__.Lb({
                token: NgLocaleLocalization,
                factory: function(t) {
                    return NgLocaleLocalization.ɵfac(t);
                },
                providedIn: null
            }), NgLocaleLocalization;
        })();
        function parseCookieValue(cookieStr, name) {
            name = encodeURIComponent(name);
            for (const cookie of cookieStr.split(";")) {
                const eqIndex = cookie.indexOf("="), [cookieName, cookieValue] = -1 == eqIndex ? [ cookie, "" ] : [ cookie.slice(0, eqIndex), cookie.slice(eqIndex + 1) ];
                if (cookieName.trim() === name) return decodeURIComponent(cookieValue);
            }
            return null;
        }
        class NgForOfContext {
            constructor($implicit, ngForOf, index, count) {
                this.$implicit = $implicit, this.ngForOf = ngForOf, this.index = index, this.count = count;
            }
            get first() {
                return 0 === this.index;
            }
            get last() {
                return this.index === this.count - 1;
            }
            get even() {
                return this.index % 2 == 0;
            }
            get odd() {
                return !this.even;
            }
        }
        let NgForOf = (() => {
            class NgForOf {
                constructor(_viewContainer, _template, _differs) {
                    this._viewContainer = _viewContainer, this._template = _template, this._differs = _differs, 
                    this._ngForOf = null, this._ngForOfDirty = !0, this._differ = null;
                }
                set ngForOf(ngForOf) {
                    this._ngForOf = ngForOf, this._ngForOfDirty = !0;
                }
                set ngForTrackBy(fn) {
                    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__.W)() && null != fn && "function" != typeof fn && console && console.warn && console.warn(`trackBy must be a function, but received ${JSON.stringify(fn)}. ` + "See https://angular.io/docs/ts/latest/api/common/index/NgFor-directive.html#!#change-propagation for more information."), 
                    this._trackByFn = fn;
                }
                get ngForTrackBy() {
                    return this._trackByFn;
                }
                set ngForTemplate(value) {
                    value && (this._template = value);
                }
                ngDoCheck() {
                    if (this._ngForOfDirty) {
                        this._ngForOfDirty = !1;
                        const value = this._ngForOf;
                        if (!this._differ && value) try {
                            this._differ = this._differs.find(value).create(this.ngForTrackBy);
                        } catch (_a) {
                            throw new Error(`Cannot find a differ supporting object '${value}' of type '${type = value, 
                            type.name || typeof type}'. NgFor only supports binding to Iterables such as Arrays.`);
                        }
                    }
                    var type;
                    if (this._differ) {
                        const changes = this._differ.diff(this._ngForOf);
                        changes && this._applyChanges(changes);
                    }
                }
                _applyChanges(changes) {
                    const insertTuples = [];
                    changes.forEachOperation((item, adjustedPreviousIndex, currentIndex) => {
                        if (null == item.previousIndex) {
                            const view = this._viewContainer.createEmbeddedView(this._template, new NgForOfContext(null, this._ngForOf, -1, -1), null === currentIndex ? void 0 : currentIndex), tuple = new RecordViewTuple(item, view);
                            insertTuples.push(tuple);
                        } else if (null == currentIndex) this._viewContainer.remove(null === adjustedPreviousIndex ? void 0 : adjustedPreviousIndex); else if (null !== adjustedPreviousIndex) {
                            const view = this._viewContainer.get(adjustedPreviousIndex);
                            this._viewContainer.move(view, currentIndex);
                            const tuple = new RecordViewTuple(item, view);
                            insertTuples.push(tuple);
                        }
                    });
                    for (let i = 0; i < insertTuples.length; i++) this._perViewChange(insertTuples[i].view, insertTuples[i].record);
                    for (let i = 0, ilen = this._viewContainer.length; i < ilen; i++) {
                        const viewRef = this._viewContainer.get(i);
                        viewRef.context.index = i, viewRef.context.count = ilen, viewRef.context.ngForOf = this._ngForOf;
                    }
                    changes.forEachIdentityChange(record => {
                        this._viewContainer.get(record.currentIndex).context.$implicit = record.item;
                    });
                }
                _perViewChange(view, record) {
                    view.context.$implicit = record.item;
                }
                static ngTemplateContextGuard(dir, ctx) {
                    return !0;
                }
            }
            return NgForOf.ɵfac = function(t) {
                return new (t || NgForOf)(_angular_core__WEBPACK_IMPORTED_MODULE_0__.Pb(_angular_core__WEBPACK_IMPORTED_MODULE_0__.O), _angular_core__WEBPACK_IMPORTED_MODULE_0__.Pb(_angular_core__WEBPACK_IMPORTED_MODULE_0__.L), _angular_core__WEBPACK_IMPORTED_MODULE_0__.Pb(_angular_core__WEBPACK_IMPORTED_MODULE_0__.r));
            }, NgForOf.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__.Kb({
                type: NgForOf,
                selectors: [ [ "", "ngFor", "", "ngForOf", "" ] ],
                inputs: {
                    ngForOf: "ngForOf",
                    ngForTrackBy: "ngForTrackBy",
                    ngForTemplate: "ngForTemplate"
                }
            }), NgForOf;
        })();
        class RecordViewTuple {
            constructor(record, view) {
                this.record = record, this.view = view;
            }
        }
        let NgIf = (() => {
            class NgIf {
                constructor(_viewContainer, templateRef) {
                    this._viewContainer = _viewContainer, this._context = new NgIfContext, this._thenTemplateRef = null, 
                    this._elseTemplateRef = null, this._thenViewRef = null, this._elseViewRef = null, 
                    this._thenTemplateRef = templateRef;
                }
                set ngIf(condition) {
                    this._context.$implicit = this._context.ngIf = condition, this._updateView();
                }
                set ngIfThen(templateRef) {
                    assertTemplate("ngIfThen", templateRef), this._thenTemplateRef = templateRef, this._thenViewRef = null, 
                    this._updateView();
                }
                set ngIfElse(templateRef) {
                    assertTemplate("ngIfElse", templateRef), this._elseTemplateRef = templateRef, this._elseViewRef = null, 
                    this._updateView();
                }
                _updateView() {
                    this._context.$implicit ? this._thenViewRef || (this._viewContainer.clear(), this._elseViewRef = null, 
                    this._thenTemplateRef && (this._thenViewRef = this._viewContainer.createEmbeddedView(this._thenTemplateRef, this._context))) : this._elseViewRef || (this._viewContainer.clear(), 
                    this._thenViewRef = null, this._elseTemplateRef && (this._elseViewRef = this._viewContainer.createEmbeddedView(this._elseTemplateRef, this._context)));
                }
            }
            return NgIf.ɵfac = function(t) {
                return new (t || NgIf)(_angular_core__WEBPACK_IMPORTED_MODULE_0__.Pb(_angular_core__WEBPACK_IMPORTED_MODULE_0__.O), _angular_core__WEBPACK_IMPORTED_MODULE_0__.Pb(_angular_core__WEBPACK_IMPORTED_MODULE_0__.L));
            }, NgIf.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__.Kb({
                type: NgIf,
                selectors: [ [ "", "ngIf", "" ] ],
                inputs: {
                    ngIf: "ngIf",
                    ngIfThen: "ngIfThen",
                    ngIfElse: "ngIfElse"
                }
            }), NgIf;
        })();
        class NgIfContext {
            constructor() {
                this.$implicit = null, this.ngIf = null;
            }
        }
        function assertTemplate(property, templateRef) {
            if (templateRef && !templateRef.createEmbeddedView) throw new Error(`${property} must be a TemplateRef, but received '${Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__.vb)(templateRef)}'.`);
        }
        class SwitchView {
            constructor(_viewContainerRef, _templateRef) {
                this._viewContainerRef = _viewContainerRef, this._templateRef = _templateRef, this._created = !1;
            }
            create() {
                this._created = !0, this._viewContainerRef.createEmbeddedView(this._templateRef);
            }
            destroy() {
                this._created = !1, this._viewContainerRef.clear();
            }
            enforceState(created) {
                created && !this._created ? this.create() : !created && this._created && this.destroy();
            }
        }
        let NgSwitch = (() => {
            class NgSwitch {
                constructor() {
                    this._defaultUsed = !1, this._caseCount = 0, this._lastCaseCheckIndex = 0, this._lastCasesMatched = !1;
                }
                set ngSwitch(newValue) {
                    this._ngSwitch = newValue, 0 === this._caseCount && this._updateDefaultCases(!0);
                }
                _addCase() {
                    return this._caseCount++;
                }
                _addDefault(view) {
                    this._defaultViews || (this._defaultViews = []), this._defaultViews.push(view);
                }
                _matchCase(value) {
                    const matched = value == this._ngSwitch;
                    return this._lastCasesMatched = this._lastCasesMatched || matched, this._lastCaseCheckIndex++, 
                    this._lastCaseCheckIndex === this._caseCount && (this._updateDefaultCases(!this._lastCasesMatched), 
                    this._lastCaseCheckIndex = 0, this._lastCasesMatched = !1), matched;
                }
                _updateDefaultCases(useDefault) {
                    if (this._defaultViews && useDefault !== this._defaultUsed) {
                        this._defaultUsed = useDefault;
                        for (let i = 0; i < this._defaultViews.length; i++) this._defaultViews[i].enforceState(useDefault);
                    }
                }
            }
            return NgSwitch.ɵfac = function(t) {
                return new (t || NgSwitch);
            }, NgSwitch.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__.Kb({
                type: NgSwitch,
                selectors: [ [ "", "ngSwitch", "" ] ],
                inputs: {
                    ngSwitch: "ngSwitch"
                }
            }), NgSwitch;
        })(), NgSwitchCase = (() => {
            class NgSwitchCase {
                constructor(viewContainer, templateRef, ngSwitch) {
                    this.ngSwitch = ngSwitch, ngSwitch._addCase(), this._view = new SwitchView(viewContainer, templateRef);
                }
                ngDoCheck() {
                    this._view.enforceState(this.ngSwitch._matchCase(this.ngSwitchCase));
                }
            }
            return NgSwitchCase.ɵfac = function(t) {
                return new (t || NgSwitchCase)(_angular_core__WEBPACK_IMPORTED_MODULE_0__.Pb(_angular_core__WEBPACK_IMPORTED_MODULE_0__.O), _angular_core__WEBPACK_IMPORTED_MODULE_0__.Pb(_angular_core__WEBPACK_IMPORTED_MODULE_0__.L), _angular_core__WEBPACK_IMPORTED_MODULE_0__.Pb(NgSwitch, 1));
            }, NgSwitchCase.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__.Kb({
                type: NgSwitchCase,
                selectors: [ [ "", "ngSwitchCase", "" ] ],
                inputs: {
                    ngSwitchCase: "ngSwitchCase"
                }
            }), NgSwitchCase;
        })(), NgSwitchDefault = (() => {
            class NgSwitchDefault {
                constructor(viewContainer, templateRef, ngSwitch) {
                    ngSwitch._addDefault(new SwitchView(viewContainer, templateRef));
                }
            }
            return NgSwitchDefault.ɵfac = function(t) {
                return new (t || NgSwitchDefault)(_angular_core__WEBPACK_IMPORTED_MODULE_0__.Pb(_angular_core__WEBPACK_IMPORTED_MODULE_0__.O), _angular_core__WEBPACK_IMPORTED_MODULE_0__.Pb(_angular_core__WEBPACK_IMPORTED_MODULE_0__.L), _angular_core__WEBPACK_IMPORTED_MODULE_0__.Pb(NgSwitch, 1));
            }, NgSwitchDefault.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__.Kb({
                type: NgSwitchDefault,
                selectors: [ [ "", "ngSwitchDefault", "" ] ]
            }), NgSwitchDefault;
        })();
        class ObservableStrategy {
            createSubscription(async, updateLatestValue) {
                return async.subscribe({
                    next: updateLatestValue,
                    error: e => {
                        throw e;
                    }
                });
            }
            dispose(subscription) {
                subscription.unsubscribe();
            }
            onDestroy(subscription) {
                subscription.unsubscribe();
            }
        }
        class PromiseStrategy {
            createSubscription(async, updateLatestValue) {
                return async.then(updateLatestValue, e => {
                    throw e;
                });
            }
            dispose(subscription) {}
            onDestroy(subscription) {}
        }
        const _promiseStrategy = new PromiseStrategy, _observableStrategy = new ObservableStrategy;
        let AsyncPipe = (() => {
            class AsyncPipe {
                constructor(_ref) {
                    this._ref = _ref, this._latestValue = null, this._latestReturnedValue = null, this._subscription = null, 
                    this._obj = null, this._strategy = null;
                }
                ngOnDestroy() {
                    this._subscription && this._dispose();
                }
                transform(obj) {
                    return this._obj ? obj !== this._obj ? (this._dispose(), this.transform(obj)) : Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__.sb)(this._latestValue, this._latestReturnedValue) ? this._latestReturnedValue : (this._latestReturnedValue = this._latestValue, 
                    _angular_core__WEBPACK_IMPORTED_MODULE_0__.Q.wrap(this._latestValue)) : (obj && this._subscribe(obj), 
                    this._latestReturnedValue = this._latestValue, this._latestValue);
                }
                _subscribe(obj) {
                    this._obj = obj, this._strategy = this._selectStrategy(obj), this._subscription = this._strategy.createSubscription(obj, value => this._updateLatestValue(obj, value));
                }
                _selectStrategy(obj) {
                    if (Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__.rb)(obj)) return _promiseStrategy;
                    if (Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__.qb)(obj)) return _observableStrategy;
                    throw type = AsyncPipe, Error(`InvalidPipeArgument: '${obj}' for pipe '${Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__.vb)(type)}'`);
                    var type;
                }
                _dispose() {
                    this._strategy.dispose(this._subscription), this._latestValue = null, this._latestReturnedValue = null, 
                    this._subscription = null, this._obj = null;
                }
                _updateLatestValue(async, value) {
                    async === this._obj && (this._latestValue = value, this._ref.markForCheck());
                }
            }
            return AsyncPipe.ɵfac = function(t) {
                return new (t || AsyncPipe)(_angular_core__WEBPACK_IMPORTED_MODULE_0__.Pb(_angular_core__WEBPACK_IMPORTED_MODULE_0__.h));
            }, AsyncPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__.Ob({
                name: "async",
                type: AsyncPipe,
                pure: !1
            }), AsyncPipe;
        })(), CommonModule = (() => {
            class CommonModule {}
            return CommonModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__.Nb({
                type: CommonModule
            }), CommonModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__.Mb({
                factory: function(t) {
                    return new (t || CommonModule);
                },
                providers: [ {
                    provide: NgLocalization,
                    useClass: NgLocaleLocalization
                } ]
            }), CommonModule;
        })();
        const PLATFORM_BROWSER_ID = "browser";
        function isPlatformBrowser(platformId) {
            return platformId === PLATFORM_BROWSER_ID;
        }
        let ViewportScroller = (() => {
            class ViewportScroller {}
            return ViewportScroller.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__.Lb)({
                token: ViewportScroller,
                providedIn: "root",
                factory: () => new BrowserViewportScroller(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__.Zb)(DOCUMENT), window, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__.Zb)(_angular_core__WEBPACK_IMPORTED_MODULE_0__.l))
            }), ViewportScroller;
        })();
        class BrowserViewportScroller {
            constructor(document, window, errorHandler) {
                this.document = document, this.window = window, this.errorHandler = errorHandler, 
                this.offset = () => [ 0, 0 ];
            }
            setOffset(offset) {
                this.offset = Array.isArray(offset) ? () => offset : offset;
            }
            getScrollPosition() {
                return this.supportScrollRestoration() ? [ this.window.scrollX, this.window.scrollY ] : [ 0, 0 ];
            }
            scrollToPosition(position) {
                this.supportScrollRestoration() && this.window.scrollTo(position[0], position[1]);
            }
            scrollToAnchor(anchor) {
                if (this.supportScrollRestoration()) {
                    anchor = this.window.CSS && this.window.CSS.escape ? this.window.CSS.escape(anchor) : anchor.replace(/(\"|\'\ |:|\.|\[|\]|,|=)/g, "\\$1");
                    try {
                        const elSelectedById = this.document.querySelector(`#${anchor}`);
                        if (elSelectedById) return void this.scrollToElement(elSelectedById);
                        const elSelectedByName = this.document.querySelector(`[name='${anchor}']`);
                        if (elSelectedByName) return void this.scrollToElement(elSelectedByName);
                    } catch (e) {
                        this.errorHandler.handleError(e);
                    }
                }
            }
            setHistoryScrollRestoration(scrollRestoration) {
                if (this.supportScrollRestoration()) {
                    const history = this.window.history;
                    history && history.scrollRestoration && (history.scrollRestoration = scrollRestoration);
                }
            }
            scrollToElement(el) {
                const rect = el.getBoundingClientRect(), left = rect.left + this.window.pageXOffset, top = rect.top + this.window.pageYOffset, offset = this.offset();
                this.window.scrollTo(left - offset[0], top - offset[1]);
            }
            supportScrollRestoration() {
                try {
                    return !!this.window && !!this.window.scrollTo;
                } catch (_a) {
                    return !1;
                }
            }
        }
    