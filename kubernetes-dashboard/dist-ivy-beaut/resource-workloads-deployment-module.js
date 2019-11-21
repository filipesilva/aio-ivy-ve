(window.webpackJsonp = window.webpackJsonp || []).push([ [ 26 ], {
    RPYn: function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        var I18N_0, I18N_2, I18N_4, components_module = __webpack_require__("PXUV"), shared_module = __webpack_require__("MnlZ"), Subject = __webpack_require__("XNiG"), takeUntil = __webpack_require__("1G5W"), actionbar = __webpack_require__("SRaF"), endpoint = __webpack_require__("m/E6"), core = __webpack_require__("fXoL"), resource = __webpack_require__("KyHI"), router = __webpack_require__("tyNb"), state = __webpack_require__("C6oQ"), notifications = __webpack_require__("PXtb"), component = __webpack_require__("YS1y"), card_component = __webpack_require__("TN1b"), common = __webpack_require__("ofXK"), condition_component = __webpack_require__("/CJJ"), replicaset_component = __webpack_require__("ZonX"), event_component = __webpack_require__("MmPu"), flex = __webpack_require__("XiUz"), property_component = __webpack_require__("Rx8Q"), chips_component = __webpack_require__("svQk"), date_component = __webpack_require__("RMBR");
        I18N_0 = $localize`Resource information`, I18N_2 = $localize`Rolling update strategy`, 
        I18N_4 = $localize`Pods status`;
        const _c8 = [ "title", $localize`Old Replica Sets` ];
        var I18N_9, I18N_11, I18N_13, I18N_15, I18N_17, I18N_19, I18N_21, I18N_23, I18N_25, I18N_27, I18N_29, I18N_31, I18N_33, I18N_35, I18N_37, I18N_39, I18N_41, I18N_43, I18N_45, I18N_47, I18N_49, I18N_51, I18N_53, I18N_55, I18N_57, I18N_59, I18N_61, I18N_63, I18N_65, I18N_67, I18N_69;
        function DeploymentDetailComponent_div_5_Template(rf, ctx) {
            if (1 & rf && (core["ɵɵelementStart"](0, "div", 10), core["ɵɵelementStart"](1, "span", 11), 
            core["ɵɵi18n"](2, I18N_9), core["ɵɵelementEnd"](), core["ɵɵelementStart"](3, "span"), 
            core["ɵɵtext"](4), core["ɵɵelementEnd"](), core["ɵɵelementEnd"]()), 2 & rf) {
                const ctx_r1247 = core["ɵɵnextContext"]();
                core["ɵɵadvance"](4), core["ɵɵtextInterpolate"](ctx_r1247.deployment.strategy);
            }
        }
        function DeploymentDetailComponent_div_6_Template(rf, ctx) {
            if (1 & rf && (core["ɵɵelementStart"](0, "div", 10), core["ɵɵelementStart"](1, "span", 11), 
            core["ɵɵi18n"](2, I18N_11), core["ɵɵelementEnd"](), core["ɵɵelementStart"](3, "span"), 
            core["ɵɵtext"](4), core["ɵɵelementEnd"](), core["ɵɵelementEnd"]()), 2 & rf) {
                const ctx_r1248 = core["ɵɵnextContext"]();
                core["ɵɵadvance"](4), core["ɵɵtextInterpolate"](ctx_r1248.deployment.minReadySeconds);
            }
        }
        function DeploymentDetailComponent_div_7_Template(rf, ctx) {
            if (1 & rf && (core["ɵɵelementStart"](0, "div", 10), core["ɵɵelementStart"](1, "span", 11), 
            core["ɵɵi18n"](2, I18N_13), core["ɵɵelementEnd"](), core["ɵɵelementStart"](3, "span"), 
            core["ɵɵtext"](4), core["ɵɵelementEnd"](), core["ɵɵelementEnd"]()), 2 & rf) {
                const ctx_r1249 = core["ɵɵnextContext"]();
                core["ɵɵadvance"](4), core["ɵɵtextInterpolate"](ctx_r1249.deployment.revisionHistoryLimit);
            }
        }
        function DeploymentDetailComponent_div_8_kd_property_1_Template(rf, ctx) {
            if (1 & rf && (core["ɵɵelementStart"](0, "kd-property"), core["ɵɵelementStart"](1, "div", 15), 
            core["ɵɵi18n"](2, I18N_15), core["ɵɵelementEnd"](), core["ɵɵelementStart"](3, "div", 16), 
            core["ɵɵtext"](4), core["ɵɵelementEnd"](), core["ɵɵelementEnd"]()), 2 & rf) {
                const ctx_r1260 = core["ɵɵnextContext"](2);
                core["ɵɵadvance"](4), core["ɵɵtextInterpolate"](ctx_r1260.deployment.strategy);
            }
        }
        function DeploymentDetailComponent_div_8_kd_property_2_Template(rf, ctx) {
            if (1 & rf && (core["ɵɵelementStart"](0, "kd-property"), core["ɵɵelementStart"](1, "div", 15), 
            core["ɵɵi18n"](2, I18N_17), core["ɵɵelementEnd"](), core["ɵɵelementStart"](3, "div", 16), 
            core["ɵɵtext"](4), core["ɵɵelementEnd"](), core["ɵɵelementEnd"]()), 2 & rf) {
                const ctx_r1261 = core["ɵɵnextContext"](2);
                core["ɵɵadvance"](4), core["ɵɵtextInterpolate"](ctx_r1261.deployment.minReadySeconds);
            }
        }
        function DeploymentDetailComponent_div_8_kd_property_3_Template(rf, ctx) {
            if (1 & rf && (core["ɵɵelementStart"](0, "kd-property"), core["ɵɵelementStart"](1, "div", 15), 
            core["ɵɵi18n"](2, I18N_19), core["ɵɵelementEnd"](), core["ɵɵelementStart"](3, "div", 16), 
            core["ɵɵtext"](4), core["ɵɵelementEnd"](), core["ɵɵelementEnd"]()), 2 & rf) {
                const ctx_r1262 = core["ɵɵnextContext"](2);
                core["ɵɵadvance"](4), core["ɵɵtextInterpolate"](ctx_r1262.deployment.revisionHistoryLimit);
            }
        }
        function DeploymentDetailComponent_div_8_kd_property_4_Template(rf, ctx) {
            if (1 & rf && (core["ɵɵelementStart"](0, "kd-property", 17), core["ɵɵelementStart"](1, "div", 15), 
            core["ɵɵi18n"](2, I18N_21), core["ɵɵelementEnd"](), core["ɵɵelementStart"](3, "div", 16), 
            core["ɵɵelement"](4, "kd-chips", 18), core["ɵɵelementEnd"](), core["ɵɵelementEnd"]()), 
            2 & rf) {
                const ctx_r1263 = core["ɵɵnextContext"](2);
                core["ɵɵadvance"](4), core["ɵɵproperty"]("map", ctx_r1263.deployment.selector);
            }
        }
        function DeploymentDetailComponent_div_8_Template(rf, ctx) {
            if (1 & rf && (core["ɵɵelementStart"](0, "div", 12), core["ɵɵtemplate"](1, DeploymentDetailComponent_div_8_kd_property_1_Template, 5, 1, "kd-property", 13), 
            core["ɵɵtemplate"](2, DeploymentDetailComponent_div_8_kd_property_2_Template, 5, 1, "kd-property", 13), 
            core["ɵɵtemplate"](3, DeploymentDetailComponent_div_8_kd_property_3_Template, 5, 1, "kd-property", 13), 
            core["ɵɵtemplate"](4, DeploymentDetailComponent_div_8_kd_property_4_Template, 5, 1, "kd-property", 14), 
            core["ɵɵelementEnd"]()), 2 & rf) {
                const ctx_r1250 = core["ɵɵnextContext"]();
                core["ɵɵadvance"](1), core["ɵɵproperty"]("ngIf", null == ctx_r1250.deployment ? null : ctx_r1250.deployment.strategy), 
                core["ɵɵadvance"](1), core["ɵɵproperty"]("ngIf", null !== (null == ctx_r1250.deployment ? null : ctx_r1250.deployment.minReadySeconds)), 
                core["ɵɵadvance"](1), core["ɵɵproperty"]("ngIf", null !== (null == ctx_r1250.deployment ? null : ctx_r1250.deployment.revisionHistoryLimit)), 
                core["ɵɵadvance"](1), core["ɵɵproperty"]("ngIf", null == ctx_r1250.deployment ? null : ctx_r1250.deployment.selector);
            }
        }
        function DeploymentDetailComponent_div_13_Template(rf, ctx) {
            if (1 & rf && (core["ɵɵelementStart"](0, "div", 10), core["ɵɵelementStart"](1, "span", 11), 
            core["ɵɵi18n"](2, I18N_23), core["ɵɵelementEnd"](), core["ɵɵelementStart"](3, "span"), 
            core["ɵɵtext"](4), core["ɵɵelementEnd"](), core["ɵɵelementEnd"]()), 2 & rf) {
                const ctx_r1251 = core["ɵɵnextContext"]();
                core["ɵɵadvance"](4), core["ɵɵtextInterpolate"](ctx_r1251.deployment.rollingUpdateStrategy.maxSurge);
            }
        }
        function DeploymentDetailComponent_div_14_Template(rf, ctx) {
            if (1 & rf && (core["ɵɵelementStart"](0, "div", 10), core["ɵɵelementStart"](1, "span", 11), 
            core["ɵɵi18n"](2, I18N_25), core["ɵɵelementEnd"](), core["ɵɵelementStart"](3, "span"), 
            core["ɵɵtext"](4), core["ɵɵelementEnd"](), core["ɵɵelementEnd"]()), 2 & rf) {
                const ctx_r1252 = core["ɵɵnextContext"]();
                core["ɵɵadvance"](4), core["ɵɵtextInterpolate"](ctx_r1252.deployment.rollingUpdateStrategy.maxUnavailable);
            }
        }
        function DeploymentDetailComponent_div_15_kd_property_1_Template(rf, ctx) {
            if (1 & rf && (core["ɵɵelementStart"](0, "kd-property"), core["ɵɵelementStart"](1, "div", 15), 
            core["ɵɵi18n"](2, I18N_27), core["ɵɵelementEnd"](), core["ɵɵelementStart"](3, "div", 16), 
            core["ɵɵtext"](4), core["ɵɵelementEnd"](), core["ɵɵelementEnd"]()), 2 & rf) {
                const ctx_r1264 = core["ɵɵnextContext"](2);
                core["ɵɵadvance"](4), core["ɵɵtextInterpolate"](ctx_r1264.deployment.rollingUpdateStrategy.maxSurge);
            }
        }
        function DeploymentDetailComponent_div_15_kd_property_2_Template(rf, ctx) {
            if (1 & rf && (core["ɵɵelementStart"](0, "kd-property"), core["ɵɵelementStart"](1, "div", 15), 
            core["ɵɵi18n"](2, I18N_29), core["ɵɵelementEnd"](), core["ɵɵelementStart"](3, "div", 16), 
            core["ɵɵtext"](4), core["ɵɵelementEnd"](), core["ɵɵelementEnd"]()), 2 & rf) {
                const ctx_r1265 = core["ɵɵnextContext"](2);
                core["ɵɵadvance"](4), core["ɵɵtextInterpolate"](ctx_r1265.deployment.rollingUpdateStrategy.maxUnavailable);
            }
        }
        function DeploymentDetailComponent_div_15_Template(rf, ctx) {
            if (1 & rf && (core["ɵɵelementStart"](0, "div", 12), core["ɵɵtemplate"](1, DeploymentDetailComponent_div_15_kd_property_1_Template, 5, 1, "kd-property", 13), 
            core["ɵɵtemplate"](2, DeploymentDetailComponent_div_15_kd_property_2_Template, 5, 1, "kd-property", 13), 
            core["ɵɵelementEnd"]()), 2 & rf) {
                const ctx_r1253 = core["ɵɵnextContext"]();
                core["ɵɵadvance"](1), core["ɵɵproperty"]("ngIf", null !== (null == ctx_r1253.deployment ? null : null == ctx_r1253.deployment.rollingUpdateStrategy ? null : ctx_r1253.deployment.rollingUpdateStrategy.maxSurge)), 
                core["ɵɵadvance"](1), core["ɵɵproperty"]("ngIf", null !== (null == ctx_r1253.deployment ? null : null == ctx_r1253.deployment.rollingUpdateStrategy ? null : ctx_r1253.deployment.rollingUpdateStrategy.maxUnavailable));
            }
        }
        function DeploymentDetailComponent_div_20_Template(rf, ctx) {
            if (1 & rf && (core["ɵɵelementStart"](0, "div", 10), core["ɵɵelementStart"](1, "span", 11), 
            core["ɵɵi18n"](2, I18N_31), core["ɵɵelementEnd"](), core["ɵɵelementStart"](3, "span"), 
            core["ɵɵtext"](4), core["ɵɵelementEnd"](), core["ɵɵelementEnd"]()), 2 & rf) {
                const ctx_r1254 = core["ɵɵnextContext"]();
                core["ɵɵadvance"](4), core["ɵɵtextInterpolate"](ctx_r1254.deployment.statusInfo.updated);
            }
        }
        function DeploymentDetailComponent_div_21_Template(rf, ctx) {
            if (1 & rf && (core["ɵɵelementStart"](0, "div", 10), core["ɵɵelementStart"](1, "span", 11), 
            core["ɵɵi18n"](2, I18N_33), core["ɵɵelementEnd"](), core["ɵɵelementStart"](3, "span"), 
            core["ɵɵtext"](4), core["ɵɵelementEnd"](), core["ɵɵelementEnd"]()), 2 & rf) {
                const ctx_r1255 = core["ɵɵnextContext"]();
                core["ɵɵadvance"](4), core["ɵɵtextInterpolate"](ctx_r1255.deployment.statusInfo.replicas);
            }
        }
        function DeploymentDetailComponent_div_22_Template(rf, ctx) {
            if (1 & rf && (core["ɵɵelementStart"](0, "div", 10), core["ɵɵelementStart"](1, "span", 11), 
            core["ɵɵi18n"](2, I18N_35), core["ɵɵelementEnd"](), core["ɵɵelementStart"](3, "span"), 
            core["ɵɵtext"](4), core["ɵɵelementEnd"](), core["ɵɵelementEnd"]()), 2 & rf) {
                const ctx_r1256 = core["ɵɵnextContext"]();
                core["ɵɵadvance"](4), core["ɵɵtextInterpolate"](ctx_r1256.deployment.statusInfo.available);
            }
        }
        function DeploymentDetailComponent_div_23_Template(rf, ctx) {
            if (1 & rf && (core["ɵɵelementStart"](0, "div", 10), core["ɵɵelementStart"](1, "span", 11), 
            core["ɵɵi18n"](2, I18N_37), core["ɵɵelementEnd"](), core["ɵɵelementStart"](3, "span"), 
            core["ɵɵtext"](4), core["ɵɵelementEnd"](), core["ɵɵelementEnd"]()), 2 & rf) {
                const ctx_r1257 = core["ɵɵnextContext"]();
                core["ɵɵadvance"](4), core["ɵɵtextInterpolate"](ctx_r1257.deployment.statusInfo.unavailable);
            }
        }
        function DeploymentDetailComponent_div_24_kd_property_1_Template(rf, ctx) {
            if (1 & rf && (core["ɵɵelementStart"](0, "kd-property"), core["ɵɵelementStart"](1, "div", 15), 
            core["ɵɵi18n"](2, I18N_39), core["ɵɵelementEnd"](), core["ɵɵelementStart"](3, "div", 16), 
            core["ɵɵtext"](4), core["ɵɵelementEnd"](), core["ɵɵelementEnd"]()), 2 & rf) {
                const ctx_r1266 = core["ɵɵnextContext"](2);
                core["ɵɵadvance"](4), core["ɵɵtextInterpolate"](ctx_r1266.deployment.statusInfo.updated);
            }
        }
        function DeploymentDetailComponent_div_24_kd_property_2_Template(rf, ctx) {
            if (1 & rf && (core["ɵɵelementStart"](0, "kd-property"), core["ɵɵelementStart"](1, "div", 15), 
            core["ɵɵi18n"](2, I18N_41), core["ɵɵelementEnd"](), core["ɵɵelementStart"](3, "div", 16), 
            core["ɵɵtext"](4), core["ɵɵelementEnd"](), core["ɵɵelementEnd"]()), 2 & rf) {
                const ctx_r1267 = core["ɵɵnextContext"](2);
                core["ɵɵadvance"](4), core["ɵɵtextInterpolate"](ctx_r1267.deployment.statusInfo.replicas);
            }
        }
        function DeploymentDetailComponent_div_24_kd_property_3_Template(rf, ctx) {
            if (1 & rf && (core["ɵɵelementStart"](0, "kd-property"), core["ɵɵelementStart"](1, "div", 15), 
            core["ɵɵi18n"](2, I18N_43), core["ɵɵelementEnd"](), core["ɵɵelementStart"](3, "div", 16), 
            core["ɵɵtext"](4), core["ɵɵelementEnd"](), core["ɵɵelementEnd"]()), 2 & rf) {
                const ctx_r1268 = core["ɵɵnextContext"](2);
                core["ɵɵadvance"](4), core["ɵɵtextInterpolate"](ctx_r1268.deployment.statusInfo.available);
            }
        }
        function DeploymentDetailComponent_div_24_kd_property_4_Template(rf, ctx) {
            if (1 & rf && (core["ɵɵelementStart"](0, "kd-property"), core["ɵɵelementStart"](1, "div", 15), 
            core["ɵɵi18n"](2, I18N_45), core["ɵɵelementEnd"](), core["ɵɵelementStart"](3, "div", 16), 
            core["ɵɵtext"](4), core["ɵɵelementEnd"](), core["ɵɵelementEnd"]()), 2 & rf) {
                const ctx_r1269 = core["ɵɵnextContext"](2);
                core["ɵɵadvance"](4), core["ɵɵtextInterpolate"](ctx_r1269.deployment.statusInfo.unavailable);
            }
        }
        function DeploymentDetailComponent_div_24_Template(rf, ctx) {
            if (1 & rf && (core["ɵɵelementStart"](0, "div", 12), core["ɵɵtemplate"](1, DeploymentDetailComponent_div_24_kd_property_1_Template, 5, 1, "kd-property", 13), 
            core["ɵɵtemplate"](2, DeploymentDetailComponent_div_24_kd_property_2_Template, 5, 1, "kd-property", 13), 
            core["ɵɵtemplate"](3, DeploymentDetailComponent_div_24_kd_property_3_Template, 5, 1, "kd-property", 13), 
            core["ɵɵtemplate"](4, DeploymentDetailComponent_div_24_kd_property_4_Template, 5, 1, "kd-property", 13), 
            core["ɵɵelementEnd"]()), 2 & rf) {
                const ctx_r1258 = core["ɵɵnextContext"]();
                core["ɵɵadvance"](1), core["ɵɵproperty"]("ngIf", (null == ctx_r1258.deployment ? null : null == ctx_r1258.deployment.statusInfo ? null : ctx_r1258.deployment.statusInfo.updated) > 0), 
                core["ɵɵadvance"](1), core["ɵɵproperty"]("ngIf", (null == ctx_r1258.deployment ? null : null == ctx_r1258.deployment.statusInfo ? null : ctx_r1258.deployment.statusInfo.replicas) > 0), 
                core["ɵɵadvance"](1), core["ɵɵproperty"]("ngIf", (null == ctx_r1258.deployment ? null : null == ctx_r1258.deployment.statusInfo ? null : ctx_r1258.deployment.statusInfo.available) > 0), 
                core["ɵɵadvance"](1), core["ɵɵproperty"]("ngIf", (null == ctx_r1258.deployment ? null : null == ctx_r1258.deployment.statusInfo ? null : ctx_r1258.deployment.statusInfo.unavailable) > 0);
            }
        }
        function DeploymentDetailComponent_kd_card_26_div_4_Template(rf, ctx) {
            if (1 & rf && (core["ɵɵelementStart"](0, "div", 10), core["ɵɵelementStart"](1, "span", 11), 
            core["ɵɵi18n"](2, I18N_49), core["ɵɵelementEnd"](), core["ɵɵelementStart"](3, "span"), 
            core["ɵɵtext"](4), core["ɵɵelementEnd"](), core["ɵɵelementEnd"]()), 2 & rf) {
                const ctx_r1270 = core["ɵɵnextContext"](2);
                core["ɵɵadvance"](4), core["ɵɵtextInterpolate"](ctx_r1270.newReplicaSet.objectMeta.name);
            }
        }
        function DeploymentDetailComponent_kd_card_26_div_5_Template(rf, ctx) {
            if (1 & rf && (core["ɵɵelementStart"](0, "div", 10), core["ɵɵelementStart"](1, "span", 11), 
            core["ɵɵi18n"](2, I18N_51), core["ɵɵelementEnd"](), core["ɵɵelementStart"](3, "span"), 
            core["ɵɵtext"](4), core["ɵɵelementEnd"](), core["ɵɵelementEnd"]()), 2 & rf) {
                const ctx_r1271 = core["ɵɵnextContext"](2);
                core["ɵɵadvance"](4), core["ɵɵtextInterpolate"](ctx_r1271.newReplicaSet.objectMeta.namespace);
            }
        }
        function DeploymentDetailComponent_kd_card_26_div_6_Template(rf, ctx) {
            if (1 & rf && (core["ɵɵelementStart"](0, "div", 10), core["ɵɵelementStart"](1, "span", 11), 
            core["ɵɵi18n"](2, I18N_53), core["ɵɵelementEnd"](), core["ɵɵelement"](3, "kd-date", 19), 
            core["ɵɵelementEnd"]()), 2 & rf) {
                const ctx_r1272 = core["ɵɵnextContext"](2);
                core["ɵɵadvance"](3), core["ɵɵproperty"]("date", ctx_r1272.newReplicaSet.objectMeta.creationTimestamp);
            }
        }
        function DeploymentDetailComponent_kd_card_26_div_7_Template(rf, ctx) {
            if (1 & rf && (core["ɵɵelementStart"](0, "div", 10), core["ɵɵelementStart"](1, "span", 11), 
            core["ɵɵi18n"](2, I18N_55), core["ɵɵelementEnd"](), core["ɵɵelementStart"](3, "span"), 
            core["ɵɵtext"](4), core["ɵɵelementEnd"](), core["ɵɵelementEnd"]()), 2 & rf) {
                const ctx_r1273 = core["ɵɵnextContext"](2);
                core["ɵɵadvance"](4), core["ɵɵtextInterpolate2"]("", ctx_r1273.newReplicaSet.podInfo.running, " / ", ctx_r1273.newReplicaSet.podInfo.desired, "");
            }
        }
        function DeploymentDetailComponent_kd_card_26_div_8_kd_property_1_Template(rf, ctx) {
            if (1 & rf && (core["ɵɵelementStart"](0, "kd-property"), core["ɵɵelementStart"](1, "div", 15), 
            core["ɵɵi18n"](2, I18N_57), core["ɵɵelementEnd"](), core["ɵɵelementStart"](3, "a", 20), 
            core["ɵɵtext"](4), core["ɵɵelementEnd"](), core["ɵɵelementEnd"]()), 2 & rf) {
                const ctx_r1275 = core["ɵɵnextContext"](3);
                core["ɵɵadvance"](3), core["ɵɵproperty"]("routerLink", ctx_r1275.getNewReplicaSetHref()), 
                core["ɵɵadvance"](1), core["ɵɵtextInterpolate"](ctx_r1275.newReplicaSet.objectMeta.name);
            }
        }
        function DeploymentDetailComponent_kd_card_26_div_8_kd_property_2_Template(rf, ctx) {
            if (1 & rf && (core["ɵɵelementStart"](0, "kd-property"), core["ɵɵelementStart"](1, "div", 15), 
            core["ɵɵi18n"](2, I18N_59), core["ɵɵelementEnd"](), core["ɵɵelementStart"](3, "div", 16), 
            core["ɵɵtext"](4), core["ɵɵelementEnd"](), core["ɵɵelementEnd"]()), 2 & rf) {
                const ctx_r1276 = core["ɵɵnextContext"](3);
                core["ɵɵadvance"](4), core["ɵɵtextInterpolate"](ctx_r1276.newReplicaSet.objectMeta.namespace);
            }
        }
        function DeploymentDetailComponent_kd_card_26_div_8_kd_property_3_Template(rf, ctx) {
            if (1 & rf && (core["ɵɵelementStart"](0, "kd-property"), core["ɵɵelementStart"](1, "div", 15), 
            core["ɵɵi18n"](2, I18N_61), core["ɵɵelementEnd"](), core["ɵɵelementStart"](3, "div", 16), 
            core["ɵɵelement"](4, "kd-date", 19), core["ɵɵelementEnd"](), core["ɵɵelementEnd"]()), 
            2 & rf) {
                const ctx_r1277 = core["ɵɵnextContext"](3);
                core["ɵɵadvance"](4), core["ɵɵproperty"]("date", ctx_r1277.newReplicaSet.objectMeta.creationTimestamp);
            }
        }
        function DeploymentDetailComponent_kd_card_26_div_8_kd_property_4_Template(rf, ctx) {
            if (1 & rf && (core["ɵɵelementStart"](0, "kd-property"), core["ɵɵelementStart"](1, "div", 15), 
            core["ɵɵi18n"](2, I18N_63), core["ɵɵelementEnd"](), core["ɵɵelementStart"](3, "div", 16), 
            core["ɵɵtext"](4), core["ɵɵelementEnd"](), core["ɵɵelementEnd"]()), 2 & rf) {
                const ctx_r1278 = core["ɵɵnextContext"](3);
                core["ɵɵadvance"](4), core["ɵɵtextInterpolate2"]("", ctx_r1278.newReplicaSet.podInfo.running, " / ", ctx_r1278.newReplicaSet.podInfo.desired, "");
            }
        }
        function DeploymentDetailComponent_kd_card_26_div_8_kd_property_5_Template(rf, ctx) {
            if (1 & rf && (core["ɵɵelementStart"](0, "kd-property", 17), core["ɵɵelementStart"](1, "div", 15), 
            core["ɵɵi18n"](2, I18N_65), core["ɵɵelementEnd"](), core["ɵɵelementStart"](3, "div", 16), 
            core["ɵɵelement"](4, "kd-chips", 18), core["ɵɵelementEnd"](), core["ɵɵelementEnd"]()), 
            2 & rf) {
                const ctx_r1279 = core["ɵɵnextContext"](3);
                core["ɵɵadvance"](4), core["ɵɵproperty"]("map", ctx_r1279.newReplicaSet.objectMeta.labels);
            }
        }
        function DeploymentDetailComponent_kd_card_26_div_8_kd_property_6_Template(rf, ctx) {
            if (1 & rf && (core["ɵɵelementStart"](0, "kd-property"), core["ɵɵelementStart"](1, "div", 15), 
            core["ɵɵi18n"](2, I18N_67), core["ɵɵelementEnd"](), core["ɵɵelementStart"](3, "div", 16), 
            core["ɵɵelement"](4, "kd-chips", 18), core["ɵɵelementEnd"](), core["ɵɵelementEnd"]()), 
            2 & rf) {
                const ctx_r1280 = core["ɵɵnextContext"](3);
                core["ɵɵadvance"](4), core["ɵɵproperty"]("map", ctx_r1280.newReplicaSet.containerImages);
            }
        }
        function DeploymentDetailComponent_kd_card_26_div_8_kd_property_7_Template(rf, ctx) {
            if (1 & rf && (core["ɵɵelementStart"](0, "kd-property"), core["ɵɵelementStart"](1, "div", 15), 
            core["ɵɵi18n"](2, I18N_69), core["ɵɵelementEnd"](), core["ɵɵelementStart"](3, "div", 16), 
            core["ɵɵelement"](4, "kd-chips", 18), core["ɵɵelementEnd"](), core["ɵɵelementEnd"]()), 
            2 & rf) {
                const ctx_r1281 = core["ɵɵnextContext"](3);
                core["ɵɵadvance"](4), core["ɵɵproperty"]("map", ctx_r1281.newReplicaSet.initContainerImages);
            }
        }
        function DeploymentDetailComponent_kd_card_26_div_8_Template(rf, ctx) {
            if (1 & rf && (core["ɵɵelementStart"](0, "div", 12), core["ɵɵtemplate"](1, DeploymentDetailComponent_kd_card_26_div_8_kd_property_1_Template, 5, 2, "kd-property", 13), 
            core["ɵɵtemplate"](2, DeploymentDetailComponent_kd_card_26_div_8_kd_property_2_Template, 5, 1, "kd-property", 13), 
            core["ɵɵtemplate"](3, DeploymentDetailComponent_kd_card_26_div_8_kd_property_3_Template, 5, 1, "kd-property", 13), 
            core["ɵɵtemplate"](4, DeploymentDetailComponent_kd_card_26_div_8_kd_property_4_Template, 5, 2, "kd-property", 13), 
            core["ɵɵtemplate"](5, DeploymentDetailComponent_kd_card_26_div_8_kd_property_5_Template, 5, 1, "kd-property", 14), 
            core["ɵɵtemplate"](6, DeploymentDetailComponent_kd_card_26_div_8_kd_property_6_Template, 5, 1, "kd-property", 13), 
            core["ɵɵtemplate"](7, DeploymentDetailComponent_kd_card_26_div_8_kd_property_7_Template, 5, 1, "kd-property", 13), 
            core["ɵɵelementEnd"]()), 2 & rf) {
                const ctx_r1274 = core["ɵɵnextContext"](2);
                core["ɵɵadvance"](1), core["ɵɵproperty"]("ngIf", null == ctx_r1274.newReplicaSet ? null : ctx_r1274.newReplicaSet.objectMeta.name), 
                core["ɵɵadvance"](1), core["ɵɵproperty"]("ngIf", null == ctx_r1274.newReplicaSet ? null : ctx_r1274.newReplicaSet.objectMeta.namespace), 
                core["ɵɵadvance"](1), core["ɵɵproperty"]("ngIf", null == ctx_r1274.newReplicaSet ? null : ctx_r1274.newReplicaSet.objectMeta.creationTimestamp), 
                core["ɵɵadvance"](1), core["ɵɵproperty"]("ngIf", null == ctx_r1274.newReplicaSet ? null : ctx_r1274.newReplicaSet.podInfo), 
                core["ɵɵadvance"](1), core["ɵɵproperty"]("ngIf", null == ctx_r1274.newReplicaSet ? null : null == ctx_r1274.newReplicaSet.objectMeta ? null : ctx_r1274.newReplicaSet.objectMeta.labels), 
                core["ɵɵadvance"](1), core["ɵɵproperty"]("ngIf", null == ctx_r1274.newReplicaSet ? null : ctx_r1274.newReplicaSet.containerImages), 
                core["ɵɵadvance"](1), core["ɵɵproperty"]("ngIf", null == ctx_r1274.newReplicaSet ? null : ctx_r1274.newReplicaSet.initContainerImages);
            }
        }
        function DeploymentDetailComponent_kd_card_26_Template(rf, ctx) {
            if (1 & rf && (core["ɵɵelementStart"](0, "kd-card", 1), core["ɵɵelementStart"](1, "div", 2), 
            core["ɵɵi18n"](2, I18N_47), core["ɵɵelementEnd"](), core["ɵɵelementStart"](3, "div", 3), 
            core["ɵɵtemplate"](4, DeploymentDetailComponent_kd_card_26_div_4_Template, 5, 1, "div", 4), 
            core["ɵɵtemplate"](5, DeploymentDetailComponent_kd_card_26_div_5_Template, 5, 1, "div", 4), 
            core["ɵɵtemplate"](6, DeploymentDetailComponent_kd_card_26_div_6_Template, 4, 1, "div", 4), 
            core["ɵɵtemplate"](7, DeploymentDetailComponent_kd_card_26_div_7_Template, 5, 2, "div", 4), 
            core["ɵɵelementEnd"](), core["ɵɵtemplate"](8, DeploymentDetailComponent_kd_card_26_div_8_Template, 8, 7, "div", 5), 
            core["ɵɵelementEnd"]()), 2 & rf) {
                const ctx_r1259 = core["ɵɵnextContext"]();
                core["ɵɵproperty"]("initialized", ctx_r1259.isInitialized), core["ɵɵadvance"](4), 
                core["ɵɵproperty"]("ngIf", null == ctx_r1259.newReplicaSet ? null : ctx_r1259.newReplicaSet.objectMeta.name), 
                core["ɵɵadvance"](1), core["ɵɵproperty"]("ngIf", null == ctx_r1259.newReplicaSet ? null : ctx_r1259.newReplicaSet.objectMeta.namespace), 
                core["ɵɵadvance"](1), core["ɵɵproperty"]("ngIf", null == ctx_r1259.newReplicaSet ? null : ctx_r1259.newReplicaSet.objectMeta.creationTimestamp), 
                core["ɵɵadvance"](1), core["ɵɵproperty"]("ngIf", null == ctx_r1259.newReplicaSet ? null : ctx_r1259.newReplicaSet.podInfo), 
                core["ɵɵadvance"](1), core["ɵɵproperty"]("ngIf", ctx_r1259.isInitialized);
            }
        }
        I18N_9 = $localize`Strategy:\u00A0`, I18N_11 = $localize`Min ready seconds:\u00A0`, 
        I18N_13 = $localize`Revision history limit:\u00A0`, I18N_15 = $localize`Strategy`, 
        I18N_17 = $localize`Min ready seconds`, I18N_19 = $localize`Revision history limit`, 
        I18N_21 = $localize`Selector`, I18N_23 = $localize`Max surge:\u00A0`, I18N_25 = $localize`Max unavailable:\u00A0`, 
        I18N_27 = $localize`Max surge`, I18N_29 = $localize`Max unavailable`, I18N_31 = $localize`Updated:\u00A0`, 
        I18N_33 = $localize`Total:\u00A0`, I18N_35 = $localize`Available:\u00A0`, I18N_37 = $localize`Unavailable:\u00A0`, 
        I18N_39 = $localize`Updated`, I18N_41 = $localize`Total`, I18N_43 = $localize`Available`, 
        I18N_45 = $localize`Unavailable`, I18N_47 = $localize`New Replica Set`, I18N_49 = $localize`Name:\u00A0`, 
        I18N_51 = $localize`Namespace:\u00A0`, I18N_53 = $localize`Age:\u00A0`, I18N_55 = $localize`Pods:\u00A0`, 
        I18N_57 = $localize`Name`, I18N_59 = $localize`Namespace`, I18N_61 = $localize`Age `, 
        I18N_63 = $localize`Pods`, I18N_65 = $localize`Labels`, I18N_67 = $localize`Images`, 
        I18N_69 = $localize`Init images`;
        let component_DeploymentDetailComponent = (() => {
            class DeploymentDetailComponent {
                constructor(deployment_, replicaSet_, activatedRoute_, actionbar_, kdState_, notifications_) {
                    this.deployment_ = deployment_, this.replicaSet_ = replicaSet_, this.activatedRoute_ = activatedRoute_, 
                    this.actionbar_ = actionbar_, this.kdState_ = kdState_, this.notifications_ = notifications_, 
                    this.unsubscribe_ = new Subject.b, this.endpoint_ = endpoint.a.resource(endpoint.b.deployment, !0), 
                    this.isInitialized = !1;
                }
                ngOnInit() {
                    const resourceName = this.activatedRoute_.snapshot.params.resourceName, resourceNamespace = this.activatedRoute_.snapshot.params.resourceNamespace;
                    this.eventListEndpoint = this.endpoint_.child(resourceName, endpoint.b.event, resourceNamespace), 
                    this.oldReplicaSetsEndpoint = this.endpoint_.child(resourceName, endpoint.b.oldReplicaSet, resourceNamespace), 
                    this.newReplicaSetEndpoint = this.endpoint_.child(resourceName, endpoint.b.newReplicaSet, resourceNamespace), 
                    this.deployment_.get(this.endpoint_.detail(), resourceName, resourceNamespace).pipe(Object(takeUntil.a)(this.unsubscribe_)).subscribe(d => {
                        this.deployment = d, this.notifications_.pushErrors(d.errors), this.actionbar_.onInit.emit(new actionbar.b("Deployment", d.objectMeta, d.typeMeta)), 
                        this.isInitialized = !0;
                    }), this.replicaSet_.get(this.newReplicaSetEndpoint).pipe(Object(takeUntil.a)(this.unsubscribe_)).subscribe(rs => {
                        this.newReplicaSet = rs;
                    });
                }
                getNewReplicaSetHref() {
                    return this.kdState_.href(this.newReplicaSet.typeMeta.kind, this.newReplicaSet.objectMeta.name, this.newReplicaSet.objectMeta.namespace);
                }
                ngOnDestroy() {
                    this.unsubscribe_.next(), this.unsubscribe_.complete(), this.actionbar_.onDetailsLeave.emit();
                }
            }
            return DeploymentDetailComponent.ɵfac = function(t) {
                return new (t || DeploymentDetailComponent)(core["ɵɵdirectiveInject"](resource.a), core["ɵɵdirectiveInject"](resource.a), core["ɵɵdirectiveInject"](router.ActivatedRoute), core["ɵɵdirectiveInject"](actionbar.a), core["ɵɵdirectiveInject"](state.a), core["ɵɵdirectiveInject"](notifications.b));
            }, DeploymentDetailComponent.ɵcmp = core["ɵɵdefineComponent"]({
                type: DeploymentDetailComponent,
                selectors: [ [ "kd-deployment-detail" ] ],
                decls: 30,
                vars: 22,
                consts: [ [ 3, "initialized", "objectMeta" ], [ 3, "initialized" ], [ "title", "" ], [ "description", "" ], [ "class", "kd-inline-property", 4, "ngIf" ], [ "content", "", "fxLayout", "row wrap", 4, "ngIf" ], [ 3, "conditions", "initialized" ], [ 3, "initialized", 4, "ngIf" ], [ 3, "endpoint", 6, "title" ], [ 3, "endpoint" ], [ 1, "kd-inline-property" ], [ 1, "kd-muted-light" ], [ "content", "", "fxLayout", "row wrap" ], [ 4, "ngIf" ], [ "fxFlex", "100", 4, "ngIf" ], [ "key", "" ], [ "value", "" ], [ "fxFlex", "100" ], [ 3, "map" ], [ "relative", "", 3, "date" ], [ "value", "", "queryParamsHandling", "preserve", 3, "routerLink" ] ],
                template: function(rf, ctx) {
                    1 & rf && (core["ɵɵelement"](0, "kd-object-meta", 0), core["ɵɵelementStart"](1, "kd-card", 1), 
                    core["ɵɵelementStart"](2, "div", 2), core["ɵɵi18n"](3, I18N_0), core["ɵɵelementEnd"](), 
                    core["ɵɵelementStart"](4, "div", 3), core["ɵɵtemplate"](5, DeploymentDetailComponent_div_5_Template, 5, 1, "div", 4), 
                    core["ɵɵtemplate"](6, DeploymentDetailComponent_div_6_Template, 5, 1, "div", 4), 
                    core["ɵɵtemplate"](7, DeploymentDetailComponent_div_7_Template, 5, 1, "div", 4), 
                    core["ɵɵelementEnd"](), core["ɵɵtemplate"](8, DeploymentDetailComponent_div_8_Template, 5, 4, "div", 5), 
                    core["ɵɵelementEnd"](), core["ɵɵelementStart"](9, "kd-card", 1), core["ɵɵelementStart"](10, "div", 2), 
                    core["ɵɵi18n"](11, I18N_2), core["ɵɵelementEnd"](), core["ɵɵelementStart"](12, "div", 3), 
                    core["ɵɵtemplate"](13, DeploymentDetailComponent_div_13_Template, 5, 1, "div", 4), 
                    core["ɵɵtemplate"](14, DeploymentDetailComponent_div_14_Template, 5, 1, "div", 4), 
                    core["ɵɵelementEnd"](), core["ɵɵtemplate"](15, DeploymentDetailComponent_div_15_Template, 3, 2, "div", 5), 
                    core["ɵɵelementEnd"](), core["ɵɵelementStart"](16, "kd-card", 1), core["ɵɵelementStart"](17, "div", 2), 
                    core["ɵɵi18n"](18, I18N_4), core["ɵɵelementEnd"](), core["ɵɵelementStart"](19, "div", 3), 
                    core["ɵɵtemplate"](20, DeploymentDetailComponent_div_20_Template, 5, 1, "div", 4), 
                    core["ɵɵtemplate"](21, DeploymentDetailComponent_div_21_Template, 5, 1, "div", 4), 
                    core["ɵɵtemplate"](22, DeploymentDetailComponent_div_22_Template, 5, 1, "div", 4), 
                    core["ɵɵtemplate"](23, DeploymentDetailComponent_div_23_Template, 5, 1, "div", 4), 
                    core["ɵɵelementEnd"](), core["ɵɵtemplate"](24, DeploymentDetailComponent_div_24_Template, 5, 4, "div", 5), 
                    core["ɵɵelementEnd"](), core["ɵɵelement"](25, "kd-condition-list", 6), core["ɵɵtemplate"](26, DeploymentDetailComponent_kd_card_26_Template, 9, 6, "kd-card", 7), 
                    core["ɵɵelementStart"](27, "kd-replica-set-list", 8), core["ɵɵi18nAttributes"](28, _c8), 
                    core["ɵɵelementEnd"](), core["ɵɵelement"](29, "kd-event-list", 9)), 2 & rf && (core["ɵɵproperty"]("initialized", ctx.isInitialized)("objectMeta", null == ctx.deployment ? null : ctx.deployment.objectMeta), 
                    core["ɵɵadvance"](1), core["ɵɵproperty"]("initialized", ctx.isInitialized), core["ɵɵadvance"](4), 
                    core["ɵɵproperty"]("ngIf", null == ctx.deployment ? null : ctx.deployment.strategy), 
                    core["ɵɵadvance"](1), core["ɵɵproperty"]("ngIf", null !== (null == ctx.deployment ? null : ctx.deployment.minReadySeconds)), 
                    core["ɵɵadvance"](1), core["ɵɵproperty"]("ngIf", null !== (null == ctx.deployment ? null : ctx.deployment.revisionHistoryLimit)), 
                    core["ɵɵadvance"](1), core["ɵɵproperty"]("ngIf", ctx.isInitialized), core["ɵɵadvance"](1), 
                    core["ɵɵproperty"]("initialized", ctx.isInitialized), core["ɵɵadvance"](4), core["ɵɵproperty"]("ngIf", (null == ctx.deployment ? null : null == ctx.deployment.rollingUpdateStrategy ? null : ctx.deployment.rollingUpdateStrategy.maxSurge) > 0), 
                    core["ɵɵadvance"](1), core["ɵɵproperty"]("ngIf", (null == ctx.deployment ? null : null == ctx.deployment.rollingUpdateStrategy ? null : ctx.deployment.rollingUpdateStrategy.maxUnavailable) > 0), 
                    core["ɵɵadvance"](1), core["ɵɵproperty"]("ngIf", ctx.isInitialized), core["ɵɵadvance"](1), 
                    core["ɵɵproperty"]("initialized", ctx.isInitialized), core["ɵɵadvance"](4), core["ɵɵproperty"]("ngIf", (null == ctx.deployment ? null : null == ctx.deployment.statusInfo ? null : ctx.deployment.statusInfo.updated) > 0), 
                    core["ɵɵadvance"](1), core["ɵɵproperty"]("ngIf", (null == ctx.deployment ? null : null == ctx.deployment.statusInfo ? null : ctx.deployment.statusInfo.replicas) > 0), 
                    core["ɵɵadvance"](1), core["ɵɵproperty"]("ngIf", (null == ctx.deployment ? null : null == ctx.deployment.statusInfo ? null : ctx.deployment.statusInfo.available) > 0), 
                    core["ɵɵadvance"](1), core["ɵɵproperty"]("ngIf", (null == ctx.deployment ? null : null == ctx.deployment.statusInfo ? null : ctx.deployment.statusInfo.unavailable) > 0), 
                    core["ɵɵadvance"](1), core["ɵɵproperty"]("ngIf", ctx.isInitialized), core["ɵɵadvance"](1), 
                    core["ɵɵproperty"]("conditions", null == ctx.deployment ? null : ctx.deployment.conditions)("initialized", ctx.isInitialized), 
                    core["ɵɵadvance"](1), core["ɵɵproperty"]("ngIf", ctx.newReplicaSet), core["ɵɵadvance"](1), 
                    core["ɵɵproperty"]("endpoint", ctx.oldReplicaSetsEndpoint), core["ɵɵadvance"](2), 
                    core["ɵɵproperty"]("endpoint", ctx.eventListEndpoint));
                },
                directives: [ component.a, card_component.a, common.NgIf, condition_component.a, replicaset_component.a, event_component.a, flex.d, property_component.a, flex.b, chips_component.a, date_component.a, router.RouterLinkWithHref ],
                encapsulation: 2
            }), DeploymentDetailComponent;
        })();
        var deployment_component = __webpack_require__("D3Y/");
        let component_DeploymentListComponent = (() => {
            class DeploymentListComponent {}
            return DeploymentListComponent.ɵfac = function(t) {
                return new (t || DeploymentListComponent);
            }, DeploymentListComponent.ɵcmp = core["ɵɵdefineComponent"]({
                type: DeploymentListComponent,
                selectors: [ [ "kd-deployment-list-state" ] ],
                decls: 1,
                vars: 0,
                template: function(rf, ctx) {
                    1 & rf && core["ɵɵelement"](0, "kd-deployment-list");
                },
                directives: [ deployment_component.a ],
                encapsulation: 2
            }), DeploymentListComponent;
        })();
        var routing = __webpack_require__("1spY");
        const DEPLOYMENT_LIST_ROUTE = {
            path: "",
            component: component_DeploymentListComponent,
            data: {
                breadcrumb: "Deployments",
                parent: __webpack_require__("6XRW").a
            }
        }, DEPLOYMENT_DETAIL_ROUTE = {
            path: ":resourceNamespace/:resourceName",
            component: component_DeploymentDetailComponent,
            data: {
                breadcrumb: "{{ resourceName }}",
                parent: DEPLOYMENT_LIST_ROUTE
            }
        };
        let routing_DeploymentRoutingModule = (() => {
            class DeploymentRoutingModule {}
            return DeploymentRoutingModule.ɵmod = core["ɵɵdefineNgModule"]({
                type: DeploymentRoutingModule
            }), DeploymentRoutingModule.ɵinj = core["ɵɵdefineInjector"]({
                factory: function(t) {
                    return new (t || DeploymentRoutingModule);
                },
                imports: [ [ router.RouterModule.forChild([ DEPLOYMENT_LIST_ROUTE, DEPLOYMENT_DETAIL_ROUTE, routing.f ]) ], router.RouterModule ]
            }), DeploymentRoutingModule;
        })();
        __webpack_require__.d(__webpack_exports__, "DeploymentModule", (function() {
            return module_DeploymentModule;
        }));
        let module_DeploymentModule = (() => {
            class DeploymentModule {}
            return DeploymentModule.ɵmod = core["ɵɵdefineNgModule"]({
                type: DeploymentModule
            }), DeploymentModule.ɵinj = core["ɵɵdefineInjector"]({
                factory: function(t) {
                    return new (t || DeploymentModule);
                },
                imports: [ [ shared_module.a, components_module.a, routing_DeploymentRoutingModule ] ]
            }), DeploymentModule;
        })();
    }
} ]);
//# sourceMappingURL=resource-workloads-deployment-module.js.map