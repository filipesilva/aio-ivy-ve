(window.webpackJsonp = window.webpackJsonp || []).push([ [ 2 ], {
    "5UAH": function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        var common = __webpack_require__("ofXK"), http = __webpack_require__("tk/3"), shared_module = __webpack_require__("PCNd"), catchError = __webpack_require__("JIr8"), map = __webpack_require__("lJxs"), document_service = __webpack_require__("jn67"), core = __webpack_require__("fXoL"), logger_service = __webpack_require__("vHPH");
        function AnnouncementBarComponent_div_0_Template(rf, ctx) {
            if (1 & rf && (core.Vb(0, "div", 1), core.Vb(1, "div", 2), core.Qb(2, "img", 3), 
            core.Qb(3, "p", 4), core.Vb(4, "a", 5), core.Ec(5, "Learn More"), core.Tb(), core.Tb(), 
            core.Tb()), 2 & rf) {
                const ctx_r52 = core.gc();
                core.Ab(2), core.lc("src", ctx_r52.announcement.imageUrl, core.wc), core.Ab(1), 
                core.lc("innerHTML", ctx_r52.announcement.message, core.vc), core.Ab(1), core.lc("href", ctx_r52.announcement.linkUrl, core.wc);
            }
        }
        const announcementsPath = document_service.a + "announcements.json";
        let announcement_bar_component_AnnouncementBarComponent = (() => {
            class AnnouncementBarComponent {
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
            return AnnouncementBarComponent.ɵfac = function(t) {
                return new (t || AnnouncementBarComponent)(core.Pb(http.a), core.Pb(logger_service.a));
            }, AnnouncementBarComponent.ɵcmp = core.Jb({
                type: AnnouncementBarComponent,
                selectors: [ [ "aio-announcement-bar" ] ],
                decls: 1,
                vars: 1,
                consts: [ [ "class", "homepage-container", 4, "ngIf" ], [ 1, "homepage-container" ], [ 1, "announcement-bar" ], [ "alt", "", 3, "src" ], [ 3, "innerHTML" ], [ 1, "button", 3, "href" ] ],
                template: function(rf, ctx) {
                    1 & rf && core.Cc(0, AnnouncementBarComponent_div_0_Template, 6, 3, "div", 0), 2 & rf && core.lc("ngIf", ctx.announcement);
                },
                directives: [ common.k ],
                encapsulation: 2
            }), AnnouncementBarComponent;
        })();
        __webpack_require__.d(__webpack_exports__, "AnnouncementBarModule", (function() {
            return announcement_bar_module_AnnouncementBarModule;
        }));
        let announcement_bar_module_AnnouncementBarModule = (() => {
            class AnnouncementBarModule {
                constructor() {
                    this.customElementComponent = announcement_bar_component_AnnouncementBarComponent;
                }
            }
            return AnnouncementBarModule.ɵmod = core.Nb({
                type: AnnouncementBarModule
            }), AnnouncementBarModule.ɵinj = core.Mb({
                factory: function(t) {
                    return new (t || AnnouncementBarModule);
                },
                imports: [ [ common.c, shared_module.a, http.b ] ]
            }), AnnouncementBarModule;
        })();
    }
} ]);
//# sourceMappingURL=announcement-bar-announcement-bar-module.js.map