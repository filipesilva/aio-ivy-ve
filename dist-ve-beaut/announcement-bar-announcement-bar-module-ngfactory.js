(window.webpackJsonp = window.webpackJsonp || []).push([ [ 2 ], {
    WoO9: function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        var core = __webpack_require__("8Y7J"), catchError = __webpack_require__("JIr8"), map = __webpack_require__("lJxs");
        const announcementsPath = __webpack_require__("jn67").a + "announcements.json";
        class announcement_bar_component_AnnouncementBarComponent {
            constructor(http, logger) {
                this.http = http, this.logger = logger;
            }
            ngOnInit() {
                this.http.get(announcementsPath).pipe(Object(catchError.a)(error => (this.logger.error(new Error(`${announcementsPath} request failed: ${error.message}`)), 
                [])), Object(map.a)(announcements => this.findCurrentAnnouncement(announcements)), Object(catchError.a)(error => (this.logger.error(new Error(`${announcementsPath} contains invalid data: ${error.message}`)), 
                []))).subscribe(announcement => this.announcement = announcement);
            }
            findCurrentAnnouncement(announcements) {
                return announcements.filter(announcement => new Date(announcement.startDate).valueOf() < Date.now()).filter(announcement => new Date(announcement.endDate).valueOf() > Date.now())[0];
            }
        }
        class announcement_bar_module_AnnouncementBarModule {
            constructor() {
                this.customElementComponent = announcement_bar_component_AnnouncementBarComponent;
            }
        }
        var common = __webpack_require__("SVse"), http = __webpack_require__("IheW"), logger_service = __webpack_require__("vHPH"), RenderType_AnnouncementBarComponent = core.ub({
            encapsulation: 2,
            styles: [],
            data: {}
        });
        function View_AnnouncementBarComponent_1(_l) {
            return core.Ub(0, [ (_l()(), core.wb(0, 0, null, null, 5, "div", [ [ "class", "homepage-container" ] ], null, null, null, null, null)), (_l()(), 
            core.wb(1, 0, null, null, 4, "div", [ [ "class", "announcement-bar" ] ], null, null, null, null, null)), (_l()(), 
            core.wb(2, 0, null, null, 0, "img", [ [ "alt", "" ] ], [ [ 8, "src", 4 ] ], null, null, null, null)), (_l()(), 
            core.wb(3, 0, null, null, 0, "p", [], [ [ 8, "innerHTML", 1 ] ], null, null, null, null)), (_l()(), 
            core.wb(4, 0, null, null, 1, "a", [ [ "class", "button" ] ], [ [ 8, "href", 4 ] ], null, null, null, null)), (_l()(), 
            core.Rb(-1, null, [ "Learn More" ])) ], null, (function(_ck, _v) {
                var _co = _v.component;
                _ck(_v, 2, 0, _co.announcement.imageUrl), _ck(_v, 3, 0, _co.announcement.message), 
                _ck(_v, 4, 0, _co.announcement.linkUrl);
            }));
        }
        function View_AnnouncementBarComponent_0(_l) {
            return core.Ub(0, [ (_l()(), core.gb(16777216, null, null, 1, null, View_AnnouncementBarComponent_1)), core.vb(1, 16384, null, 0, common.k, [ core.O, core.L ], {
                ngIf: [ 0, "ngIf" ]
            }, null) ], (function(_ck, _v) {
                _ck(_v, 1, 0, _v.component.announcement);
            }), null);
        }
        function View_AnnouncementBarComponent_Host_0(_l) {
            return core.Ub(0, [ (_l()(), core.wb(0, 0, null, null, 1, "aio-announcement-bar", [], null, null, null, View_AnnouncementBarComponent_0, RenderType_AnnouncementBarComponent)), core.vb(1, 114688, null, 0, announcement_bar_component_AnnouncementBarComponent, [ http.c, logger_service.a ], null, null) ], (function(_ck, _v) {
                _ck(_v, 1, 0);
            }), null);
        }
        var AnnouncementBarComponentNgFactory = core.sb("aio-announcement-bar", announcement_bar_component_AnnouncementBarComponent, View_AnnouncementBarComponent_Host_0, {}, {}, []), shared_module = __webpack_require__("PCNd");
        __webpack_require__.d(__webpack_exports__, "AnnouncementBarModuleNgFactory", (function() {
            return AnnouncementBarModuleNgFactory;
        }));
        var AnnouncementBarModuleNgFactory = core.tb(announcement_bar_module_AnnouncementBarModule, [], (function(_l) {
            return core.Gb([ core.Hb(512, core.j, core.Y, [ [ 8, [ AnnouncementBarComponentNgFactory ] ], [ 3, core.j ], core.w ]), core.Hb(4608, common.m, common.l, [ core.t ]), core.Hb(4608, http.h, http.n, [ common.d, core.A, http.l ]), core.Hb(4608, http.o, http.o, [ http.h, http.m ]), core.Hb(5120, http.a, (function(p0_0) {
                return [ p0_0 ];
            }), [ http.o ]), core.Hb(4608, http.k, http.k, []), core.Hb(6144, http.i, null, [ http.k ]), core.Hb(4608, http.g, http.g, [ http.i ]), core.Hb(6144, http.b, null, [ http.g ]), core.Hb(4608, http.f, http.j, [ http.b, core.q ]), core.Hb(4608, http.c, http.c, [ http.f ]), core.Hb(1073742336, common.c, common.c, []), core.Hb(1073742336, shared_module.a, shared_module.a, []), core.Hb(1073742336, http.e, http.e, []), core.Hb(1073742336, http.d, http.d, []), core.Hb(1073742336, announcement_bar_module_AnnouncementBarModule, announcement_bar_module_AnnouncementBarModule, []), core.Hb(256, http.l, "XSRF-TOKEN", []), core.Hb(256, http.m, "X-XSRF-TOKEN", []) ]);
        }));
    }
} ]);
//# sourceMappingURL=announcement-bar-announcement-bar-module-ngfactory.js.map