        "use strict";
        __webpack_require__.d(__webpack_exports__, "a", (function() {
            return LocationService;
        }));
        var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("jtHE"), rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("lJxs"), rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("vkgz"), _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("fXoL"), app_shared_ga_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("4MUX"), _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("ofXK"), _scroll_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("Faly"), app_sw_updates_sw_updates_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("iL+y");
        let LocationService = (() => {
            class LocationService {
                constructor(gaService, location, scrollService, platformLocation, swUpdates) {
                    this.gaService = gaService, this.location = location, this.scrollService = scrollService, 
                    this.platformLocation = platformLocation, this.urlParser = document.createElement("a"), 
                    this.urlSubject = new rxjs__WEBPACK_IMPORTED_MODULE_0__.a(1), this.swUpdateActivated = !1, 
                    this.currentUrl = this.urlSubject.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.a)(url => this.stripSlashes(url))), 
                    this.currentPath = this.currentUrl.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.a)(url => (url.match(/[^?#]*/) || [])[0]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.a)(path => this.gaService.locationChanged(path))), 
                    this.urlSubject.next(location.path(!0)), this.location.subscribe(state => this.urlSubject.next(state.url || "")), 
                    swUpdates.updateActivated.subscribe(() => this.swUpdateActivated = !0);
                }
                go(url) {
                    url && (url = this.stripSlashes(url), /^http/.test(url) ? this.goExternal(url) : this.swUpdateActivated ? (this.scrollService.removeStoredScrollInfo(), 
                    this.goExternal(url)) : (this.location.go(url), this.urlSubject.next(url)));
                }
                goExternal(url) {
                    window.location.assign(url);
                }
                replace(url) {
                    window.location.replace(url);
                }
                stripSlashes(url) {
                    return url.replace(/^\/+/, "").replace(/\/+(\?|#|$)/, "$1");
                }
                search() {
                    const search = {}, path = this.location.path(), q = path.indexOf("?");
                    if (q > -1) try {
                        path.substr(q + 1).split("&").forEach(p => {
                            const pair = p.split("=");
                            pair[0] && (search[decodeURIComponent(pair[0])] = pair[1] && decodeURIComponent(pair[1]));
                        });
                    } catch (e) {}
                    return search;
                }
                setSearch(label, params) {
                    const search = Object.keys(params).reduce((acc, key) => {
                        const value = params[key];
                        return void 0 === value ? acc : acc += (acc ? "&" : "?") + `${encodeURIComponent(key)}=${encodeURIComponent(value)}`;
                    }, "");
                    this.platformLocation.replaceState({}, label, this.platformLocation.pathname + search);
                }
                handleAnchorClick(anchor, button = 0, ctrlKey = !1, metaKey = !1) {
                    if (0 !== button || ctrlKey || metaKey) return !0;
                    const anchorTarget = anchor.target;
                    if (anchorTarget && "_self" !== anchorTarget) return !0;
                    if (null != anchor.getAttribute("download")) return !0;
                    const {pathname: pathname, search: search, hash: hash} = anchor, relativeUrl = pathname + search + hash;
                    return this.urlParser.href = relativeUrl, anchor.href !== this.urlParser.href || !/\/[^/.]*$/.test(pathname) || (this.go(relativeUrl), 
                    !1);
                }
            }
            return LocationService.ɵfac = function(t) {
                return new (t || LocationService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__.Zb(app_shared_ga_service__WEBPACK_IMPORTED_MODULE_4__.a), _angular_core__WEBPACK_IMPORTED_MODULE_3__.Zb(_angular_common__WEBPACK_IMPORTED_MODULE_5__.g), _angular_core__WEBPACK_IMPORTED_MODULE_3__.Zb(_scroll_service__WEBPACK_IMPORTED_MODULE_6__.a), _angular_core__WEBPACK_IMPORTED_MODULE_3__.Zb(_angular_common__WEBPACK_IMPORTED_MODULE_5__.q), _angular_core__WEBPACK_IMPORTED_MODULE_3__.Zb(app_sw_updates_sw_updates_service__WEBPACK_IMPORTED_MODULE_7__.a));
            }, LocationService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_3__.Lb({
                token: LocationService,
                factory: function(t) {
                    return LocationService.ɵfac(t);
                },
                providedIn: null
            }), LocationService;
        })();