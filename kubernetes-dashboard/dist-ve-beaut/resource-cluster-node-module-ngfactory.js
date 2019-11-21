(window.webpackJsonp = window.webpackJsonp || []).push([ [ 31 ], {
    "+xdR": function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        var core = __webpack_require__("8Y7J");
        class NodeModule {}
        var index_ngfactory = __webpack_require__("ntJQ"), dialog_index_ngfactory = __webpack_require__("9cE2"), snack_bar_index_ngfactory = __webpack_require__("007U"), router_ngfactory = __webpack_require__("pMnS"), dialog_ngfactory = __webpack_require__("wyY1"), component_ngfactory = __webpack_require__("HrBQ"), menu_component_ngfactory = __webpack_require__("Shg9"), changedialog_dialog_ngfactory = __webpack_require__("rO67"), node_component_ngfactory = __webpack_require__("tw7G"), component = __webpack_require__("wGc6"), resource = __webpack_require__("KyHI"), notifications = __webpack_require__("PXtb");
        class NodeListComponent {}
        var RenderType_NodeListComponent = core["ɵcrt"]({
            encapsulation: 2,
            styles: [],
            data: {}
        });
        function View_NodeListComponent_0(_l) {
            return core["ɵvid"](0, [ (_l()(), core["ɵeld"](0, 0, null, null, 1, "kd-node-list", [], null, null, null, node_component_ngfactory.b, node_component_ngfactory.a)), core["ɵdid"](1, 245760, null, 0, component.a, [ resource.b, notifications.b, core.ChangeDetectorRef ], null, null) ], (function(_ck, _v) {
                _ck(_v, 1, 0);
            }), null);
        }
        function View_NodeListComponent_Host_0(_l) {
            return core["ɵvid"](0, [ (_l()(), core["ɵeld"](0, 0, null, null, 1, "kd-node-list-state", [], null, null, null, View_NodeListComponent_0, RenderType_NodeListComponent)), core["ɵdid"](1, 49152, null, 0, NodeListComponent, [], null, null) ], null, null);
        }
        var NodeListComponentNgFactory = core["ɵccf"]("kd-node-list-state", NodeListComponent, View_NodeListComponent_Host_0, {}, {}, []), property_component_ngfactory = __webpack_require__("ZO99"), property_component = __webpack_require__("Rx8Q"), flex = __webpack_require__("VDRc"), esm2015_core = __webpack_require__("/q54"), chips_component_ngfactory = __webpack_require__("OEkR"), chips_component = __webpack_require__("svQk"), dialog = __webpack_require__("iELJ"), common = __webpack_require__("SVse"), allocationchart_component_ngfactory = __webpack_require__("Ohk9"), allocationchart_component = __webpack_require__("e5Yu"), icon_index_ngfactory = __webpack_require__("XE/z"), icon = __webpack_require__("Tj54"), coreformatter = __webpack_require__("ps3+"), memoryformatter = __webpack_require__("eHX4"), objectmeta_component_ngfactory = __webpack_require__("5J1W"), objectmeta_component = __webpack_require__("YS1y"), card_component_ngfactory = __webpack_require__("bLTg"), card_component = __webpack_require__("TN1b"), condition_component_ngfactory = __webpack_require__("wtK6"), condition_component = __webpack_require__("/CJJ"), pod_component_ngfactory = __webpack_require__("pH9A"), pod_component = __webpack_require__("D5Vd"), event_component_ngfactory = __webpack_require__("16HJ"), event_component = __webpack_require__("MmPu"), actionbar = __webpack_require__("SRaF"), endpoint = __webpack_require__("m/E6");
        class component_NodeDetailComponent {
            constructor(node_, actionbar_, activatedRoute_, notifications_) {
                this.node_ = node_, this.actionbar_ = actionbar_, this.activatedRoute_ = activatedRoute_, 
                this.notifications_ = notifications_, this.endpoint_ = endpoint.a.resource(endpoint.b.node), 
                this.isInitialized = !1;
            }
            ngOnInit() {
                const resourceName = this.activatedRoute_.snapshot.params.resourceName;
                this.podListEndpoint = this.endpoint_.child(resourceName, endpoint.b.pod), this.eventListEndpoint = this.endpoint_.child(resourceName, endpoint.b.event), 
                this.nodeSubscription_ = this.node_.get(this.endpoint_.detail(), resourceName).subscribe(d => {
                    this.node = d, this.notifications_.pushErrors(d.errors), this.actionbar_.onInit.emit(new actionbar.b("Node", d.objectMeta, d.typeMeta)), 
                    this.isInitialized = !0;
                });
            }
            ngOnDestroy() {
                this.nodeSubscription_.unsubscribe(), this.actionbar_.onDetailsLeave.emit();
            }
            getAddresses() {
                return this.node.addresses.map(address => `${address.type}: ${address.address}`);
            }
            getTaints() {
                return this.node.taints.map(taint => taint.value ? `${taint.key}=${taint.value}:${taint.effect}` : `${taint.key}=${taint.effect}`);
            }
        }
        var router = __webpack_require__("iInd"), RenderType_NodeDetailComponent = core["ɵcrt"]({
            encapsulation: 0,
            styles: [ [ ".kd-allocated-resources[_ngcontent-%COMP%]{display:flex;flex-flow:row wrap;justify-content:center}.kd-graph-container[_ngcontent-%COMP%]{flex:auto;text-align:center}.kd-graph-legend[_ngcontent-%COMP%]{padding-bottom:16px}.kd-graph-legend-title[_ngcontent-%COMP%]{font-size:18px;padding-bottom:8px;text-align:center}.kd-graph-legend-entry[_ngcontent-%COMP%]{display:flex;margin:0 auto;padding:8px;text-align:left;width:240px}.kd-graph-legend-placeholder[_ngcontent-%COMP%]{width:22px}.kd-graph-legend-value[_ngcontent-%COMP%]{flex:1 auto;text-align:right}.kd-graph-title[_ngcontent-%COMP%]{font-size:16px;padding-bottom:16px}" ] ],
            data: {}
        });
        function View_NodeDetailComponent_2(_l) {
            return core["ɵvid"](0, [ (_l()(), core["ɵeld"](0, 0, null, null, 5, "kd-property", [], null, null, null, property_component_ngfactory.b, property_component_ngfactory.a)), core["ɵdid"](1, 49152, null, 0, property_component.a, [], null, null), (_l()(), 
            core["ɵeld"](2, 0, null, 0, 1, "div", [ [ "key", "" ] ], null, null, null, null, null)), (_l()(), 
            core["ɵted"](-1, null, [ "Phase" ])), (_l()(), core["ɵeld"](4, 0, null, 1, 1, "div", [ [ "value", "" ] ], null, null, null, null, null)), (_l()(), 
            core["ɵted"](5, null, [ "", "" ])) ], null, (function(_ck, _v) {
                var _co = _v.component;
                _ck(_v, 5, 0, null == _co.node ? null : _co.node.phase);
            }));
        }
        function View_NodeDetailComponent_3(_l) {
            return core["ɵvid"](0, [ (_l()(), core["ɵeld"](0, 0, null, null, 5, "kd-property", [], null, null, null, property_component_ngfactory.b, property_component_ngfactory.a)), core["ɵdid"](1, 49152, null, 0, property_component.a, [], null, null), (_l()(), 
            core["ɵeld"](2, 0, null, 0, 1, "div", [ [ "key", "" ] ], null, null, null, null, null)), (_l()(), 
            core["ɵted"](-1, null, [ "Pod CIDR" ])), (_l()(), core["ɵeld"](4, 0, null, 1, 1, "div", [ [ "value", "" ] ], null, null, null, null, null)), (_l()(), 
            core["ɵted"](5, null, [ "", "" ])) ], null, (function(_ck, _v) {
                var _co = _v.component;
                _ck(_v, 5, 0, null == _co.node ? null : _co.node.podCIDR);
            }));
        }
        function View_NodeDetailComponent_4(_l) {
            return core["ɵvid"](0, [ (_l()(), core["ɵeld"](0, 0, null, null, 5, "kd-property", [], null, null, null, property_component_ngfactory.b, property_component_ngfactory.a)), core["ɵdid"](1, 49152, null, 0, property_component.a, [], null, null), (_l()(), 
            core["ɵeld"](2, 0, null, 0, 1, "div", [ [ "key", "" ] ], null, null, null, null, null)), (_l()(), 
            core["ɵted"](-1, null, [ "Provider ID" ])), (_l()(), core["ɵeld"](4, 0, null, 1, 1, "div", [ [ "value", "" ] ], null, null, null, null, null)), (_l()(), 
            core["ɵted"](5, null, [ "", "" ])) ], null, (function(_ck, _v) {
                var _co = _v.component;
                _ck(_v, 5, 0, null == _co.node ? null : _co.node.providerID);
            }));
        }
        function View_NodeDetailComponent_5(_l) {
            return core["ɵvid"](0, [ (_l()(), core["ɵeld"](0, 0, null, null, 5, "kd-property", [], null, null, null, property_component_ngfactory.b, property_component_ngfactory.a)), core["ɵdid"](1, 49152, null, 0, property_component.a, [], null, null), (_l()(), 
            core["ɵeld"](2, 0, null, 0, 1, "div", [ [ "key", "" ] ], null, null, null, null, null)), (_l()(), 
            core["ɵted"](-1, null, [ "Unschedulable" ])), (_l()(), core["ɵeld"](4, 0, null, 1, 1, "div", [ [ "value", "" ] ], null, null, null, null, null)), (_l()(), 
            core["ɵted"](5, null, [ "", "" ])) ], null, (function(_ck, _v) {
                var _co = _v.component;
                _ck(_v, 5, 0, null == _co.node ? null : _co.node.unschedulable);
            }));
        }
        function View_NodeDetailComponent_6(_l) {
            return core["ɵvid"](0, [ (_l()(), core["ɵeld"](0, 0, null, null, 7, "kd-property", [ [ "fxFlex", "100" ] ], null, null, null, property_component_ngfactory.b, property_component_ngfactory.a)), core["ɵdid"](1, 671744, null, 0, flex.b, [ core.ElementRef, esm2015_core.i, esm2015_core.e, flex.i, esm2015_core.f ], {
                fxFlex: [ 0, "fxFlex" ]
            }, null), core["ɵdid"](2, 49152, null, 0, property_component.a, [], null, null), (_l()(), 
            core["ɵeld"](3, 0, null, 0, 1, "div", [ [ "key", "" ] ], null, null, null, null, null)), (_l()(), 
            core["ɵted"](-1, null, [ "Addresses" ])), (_l()(), core["ɵeld"](5, 0, null, 1, 2, "div", [ [ "value", "" ] ], null, null, null, null, null)), (_l()(), 
            core["ɵeld"](6, 0, null, null, 1, "kd-chips", [], null, null, null, chips_component_ngfactory.b, chips_component_ngfactory.a)), core["ɵdid"](7, 114688, null, 0, chips_component.a, [ dialog.e ], {
                map: [ 0, "map" ]
            }, null) ], (function(_ck, _v) {
                var _co = _v.component;
                _ck(_v, 1, 0, "100"), _ck(_v, 7, 0, _co.getAddresses());
            }), null);
        }
        function View_NodeDetailComponent_7(_l) {
            return core["ɵvid"](0, [ (_l()(), core["ɵeld"](0, 0, null, null, 7, "kd-property", [ [ "fxFlex", "100" ] ], null, null, null, property_component_ngfactory.b, property_component_ngfactory.a)), core["ɵdid"](1, 671744, null, 0, flex.b, [ core.ElementRef, esm2015_core.i, esm2015_core.e, flex.i, esm2015_core.f ], {
                fxFlex: [ 0, "fxFlex" ]
            }, null), core["ɵdid"](2, 49152, null, 0, property_component.a, [], null, null), (_l()(), 
            core["ɵeld"](3, 0, null, 0, 1, "div", [ [ "key", "" ] ], null, null, null, null, null)), (_l()(), 
            core["ɵted"](-1, null, [ "Taints" ])), (_l()(), core["ɵeld"](5, 0, null, 1, 2, "div", [ [ "value", "" ] ], null, null, null, null, null)), (_l()(), 
            core["ɵeld"](6, 0, null, null, 1, "kd-chips", [], null, null, null, chips_component_ngfactory.b, chips_component_ngfactory.a)), core["ɵdid"](7, 114688, null, 0, chips_component.a, [ dialog.e ], {
                map: [ 0, "map" ]
            }, null) ], (function(_ck, _v) {
                var _co = _v.component;
                _ck(_v, 1, 0, "100"), _ck(_v, 7, 0, _co.getTaints());
            }), null);
        }
        function View_NodeDetailComponent_1(_l) {
            return core["ɵvid"](0, [ (_l()(), core["ɵeld"](0, 0, null, null, 13, "div", [ [ "content", "" ], [ "fxLayout", "row wrap" ] ], null, null, null, null, null)), core["ɵdid"](1, 671744, null, 0, flex.d, [ core.ElementRef, esm2015_core.i, [ 2, flex.k ], esm2015_core.f ], {
                fxLayout: [ 0, "fxLayout" ]
            }, null), (_l()(), core["ɵand"](16777216, null, null, 1, null, View_NodeDetailComponent_2)), core["ɵdid"](3, 16384, null, 0, common.NgIf, [ core.ViewContainerRef, core.TemplateRef ], {
                ngIf: [ 0, "ngIf" ]
            }, null), (_l()(), core["ɵand"](16777216, null, null, 1, null, View_NodeDetailComponent_3)), core["ɵdid"](5, 16384, null, 0, common.NgIf, [ core.ViewContainerRef, core.TemplateRef ], {
                ngIf: [ 0, "ngIf" ]
            }, null), (_l()(), core["ɵand"](16777216, null, null, 1, null, View_NodeDetailComponent_4)), core["ɵdid"](7, 16384, null, 0, common.NgIf, [ core.ViewContainerRef, core.TemplateRef ], {
                ngIf: [ 0, "ngIf" ]
            }, null), (_l()(), core["ɵand"](16777216, null, null, 1, null, View_NodeDetailComponent_5)), core["ɵdid"](9, 16384, null, 0, common.NgIf, [ core.ViewContainerRef, core.TemplateRef ], {
                ngIf: [ 0, "ngIf" ]
            }, null), (_l()(), core["ɵand"](16777216, null, null, 1, null, View_NodeDetailComponent_6)), core["ɵdid"](11, 16384, null, 0, common.NgIf, [ core.ViewContainerRef, core.TemplateRef ], {
                ngIf: [ 0, "ngIf" ]
            }, null), (_l()(), core["ɵand"](16777216, null, null, 1, null, View_NodeDetailComponent_7)), core["ɵdid"](13, 16384, null, 0, common.NgIf, [ core.ViewContainerRef, core.TemplateRef ], {
                ngIf: [ 0, "ngIf" ]
            }, null) ], (function(_ck, _v) {
                var _co = _v.component;
                _ck(_v, 1, 0, "row wrap"), _ck(_v, 3, 0, null == _co.node ? null : _co.node.phase), 
                _ck(_v, 5, 0, null == _co.node ? null : _co.node.podCIDR), _ck(_v, 7, 0, null == _co.node ? null : _co.node.providerID), 
                _ck(_v, 9, 0, null == _co.node ? null : _co.node.unschedulable), _ck(_v, 11, 0, null == _co.node ? null : _co.node.addresses), 
                _ck(_v, 13, 0, null == _co.node ? null : _co.node.taints);
            }), null);
        }
        function View_NodeDetailComponent_9(_l) {
            return core["ɵvid"](0, [ (_l()(), core["ɵeld"](0, 0, null, null, 5, "kd-property", [], null, null, null, property_component_ngfactory.b, property_component_ngfactory.a)), core["ɵdid"](1, 49152, null, 0, property_component.a, [], null, null), (_l()(), 
            core["ɵeld"](2, 0, null, 0, 1, "div", [ [ "key", "" ] ], null, null, null, null, null)), (_l()(), 
            core["ɵted"](-1, null, [ "Machine ID" ])), (_l()(), core["ɵeld"](4, 0, null, 1, 1, "div", [ [ "value", "" ] ], null, null, null, null, null)), (_l()(), 
            core["ɵted"](5, null, [ "", "" ])) ], null, (function(_ck, _v) {
                var _co = _v.component;
                _ck(_v, 5, 0, null == _co.node ? null : _co.node.nodeInfo.machineID);
            }));
        }
        function View_NodeDetailComponent_10(_l) {
            return core["ɵvid"](0, [ (_l()(), core["ɵeld"](0, 0, null, null, 5, "kd-property", [], null, null, null, property_component_ngfactory.b, property_component_ngfactory.a)), core["ɵdid"](1, 49152, null, 0, property_component.a, [], null, null), (_l()(), 
            core["ɵeld"](2, 0, null, 0, 1, "div", [ [ "key", "" ] ], null, null, null, null, null)), (_l()(), 
            core["ɵted"](-1, null, [ "System UUID" ])), (_l()(), core["ɵeld"](4, 0, null, 1, 1, "div", [ [ "value", "" ] ], null, null, null, null, null)), (_l()(), 
            core["ɵted"](5, null, [ "", "" ])) ], null, (function(_ck, _v) {
                var _co = _v.component;
                _ck(_v, 5, 0, null == _co.node ? null : _co.node.nodeInfo.systemUUID);
            }));
        }
        function View_NodeDetailComponent_11(_l) {
            return core["ɵvid"](0, [ (_l()(), core["ɵeld"](0, 0, null, null, 5, "kd-property", [], null, null, null, property_component_ngfactory.b, property_component_ngfactory.a)), core["ɵdid"](1, 49152, null, 0, property_component.a, [], null, null), (_l()(), 
            core["ɵeld"](2, 0, null, 0, 1, "div", [ [ "key", "" ] ], null, null, null, null, null)), (_l()(), 
            core["ɵted"](-1, null, [ "Boot ID" ])), (_l()(), core["ɵeld"](4, 0, null, 1, 1, "div", [ [ "value", "" ] ], null, null, null, null, null)), (_l()(), 
            core["ɵted"](5, null, [ "", "" ])) ], null, (function(_ck, _v) {
                var _co = _v.component;
                _ck(_v, 5, 0, null == _co.node ? null : _co.node.nodeInfo.bootID);
            }));
        }
        function View_NodeDetailComponent_12(_l) {
            return core["ɵvid"](0, [ (_l()(), core["ɵeld"](0, 0, null, null, 5, "kd-property", [], null, null, null, property_component_ngfactory.b, property_component_ngfactory.a)), core["ɵdid"](1, 49152, null, 0, property_component.a, [], null, null), (_l()(), 
            core["ɵeld"](2, 0, null, 0, 1, "div", [ [ "key", "" ] ], null, null, null, null, null)), (_l()(), 
            core["ɵted"](-1, null, [ "Kernel version" ])), (_l()(), core["ɵeld"](4, 0, null, 1, 1, "div", [ [ "value", "" ] ], null, null, null, null, null)), (_l()(), 
            core["ɵted"](5, null, [ "", "" ])) ], null, (function(_ck, _v) {
                var _co = _v.component;
                _ck(_v, 5, 0, null == _co.node ? null : _co.node.nodeInfo.kernelVersion);
            }));
        }
        function View_NodeDetailComponent_13(_l) {
            return core["ɵvid"](0, [ (_l()(), core["ɵeld"](0, 0, null, null, 5, "kd-property", [], null, null, null, property_component_ngfactory.b, property_component_ngfactory.a)), core["ɵdid"](1, 49152, null, 0, property_component.a, [], null, null), (_l()(), 
            core["ɵeld"](2, 0, null, 0, 1, "div", [ [ "key", "" ] ], null, null, null, null, null)), (_l()(), 
            core["ɵted"](-1, null, [ "OS Image" ])), (_l()(), core["ɵeld"](4, 0, null, 1, 1, "div", [ [ "value", "" ] ], null, null, null, null, null)), (_l()(), 
            core["ɵted"](5, null, [ "", "" ])) ], null, (function(_ck, _v) {
                var _co = _v.component;
                _ck(_v, 5, 0, null == _co.node ? null : _co.node.nodeInfo.osImage);
            }));
        }
        function View_NodeDetailComponent_14(_l) {
            return core["ɵvid"](0, [ (_l()(), core["ɵeld"](0, 0, null, null, 5, "kd-property", [], null, null, null, property_component_ngfactory.b, property_component_ngfactory.a)), core["ɵdid"](1, 49152, null, 0, property_component.a, [], null, null), (_l()(), 
            core["ɵeld"](2, 0, null, 0, 1, "div", [ [ "key", "" ] ], null, null, null, null, null)), (_l()(), 
            core["ɵted"](-1, null, [ "Container runtime version" ])), (_l()(), core["ɵeld"](4, 0, null, 1, 1, "div", [ [ "value", "" ] ], null, null, null, null, null)), (_l()(), 
            core["ɵted"](5, null, [ "", "" ])) ], null, (function(_ck, _v) {
                var _co = _v.component;
                _ck(_v, 5, 0, null == _co.node ? null : _co.node.nodeInfo.containerRuntimeVersion);
            }));
        }
        function View_NodeDetailComponent_15(_l) {
            return core["ɵvid"](0, [ (_l()(), core["ɵeld"](0, 0, null, null, 5, "kd-property", [], null, null, null, property_component_ngfactory.b, property_component_ngfactory.a)), core["ɵdid"](1, 49152, null, 0, property_component.a, [], null, null), (_l()(), 
            core["ɵeld"](2, 0, null, 0, 1, "div", [ [ "key", "" ] ], null, null, null, null, null)), (_l()(), 
            core["ɵted"](-1, null, [ "kubelet version" ])), (_l()(), core["ɵeld"](4, 0, null, 1, 1, "div", [ [ "value", "" ] ], null, null, null, null, null)), (_l()(), 
            core["ɵted"](5, null, [ "", "" ])) ], null, (function(_ck, _v) {
                var _co = _v.component;
                _ck(_v, 5, 0, null == _co.node ? null : _co.node.nodeInfo.kubeletVersion);
            }));
        }
        function View_NodeDetailComponent_16(_l) {
            return core["ɵvid"](0, [ (_l()(), core["ɵeld"](0, 0, null, null, 5, "kd-property", [], null, null, null, property_component_ngfactory.b, property_component_ngfactory.a)), core["ɵdid"](1, 49152, null, 0, property_component.a, [], null, null), (_l()(), 
            core["ɵeld"](2, 0, null, 0, 1, "div", [ [ "key", "" ] ], null, null, null, null, null)), (_l()(), 
            core["ɵted"](-1, null, [ "kube-proxy version" ])), (_l()(), core["ɵeld"](4, 0, null, 1, 1, "div", [ [ "value", "" ] ], null, null, null, null, null)), (_l()(), 
            core["ɵted"](5, null, [ "", "" ])) ], null, (function(_ck, _v) {
                var _co = _v.component;
                _ck(_v, 5, 0, null == _co.node ? null : _co.node.nodeInfo.kubeProxyVersion);
            }));
        }
        function View_NodeDetailComponent_17(_l) {
            return core["ɵvid"](0, [ (_l()(), core["ɵeld"](0, 0, null, null, 5, "kd-property", [], null, null, null, property_component_ngfactory.b, property_component_ngfactory.a)), core["ɵdid"](1, 49152, null, 0, property_component.a, [], null, null), (_l()(), 
            core["ɵeld"](2, 0, null, 0, 1, "div", [ [ "key", "" ] ], null, null, null, null, null)), (_l()(), 
            core["ɵted"](-1, null, [ "Operating system" ])), (_l()(), core["ɵeld"](4, 0, null, 1, 1, "div", [ [ "value", "" ] ], null, null, null, null, null)), (_l()(), 
            core["ɵted"](5, null, [ "", "" ])) ], null, (function(_ck, _v) {
                var _co = _v.component;
                _ck(_v, 5, 0, null == _co.node ? null : _co.node.nodeInfo.operatingSystem);
            }));
        }
        function View_NodeDetailComponent_18(_l) {
            return core["ɵvid"](0, [ (_l()(), core["ɵeld"](0, 0, null, null, 5, "kd-property", [], null, null, null, property_component_ngfactory.b, property_component_ngfactory.a)), core["ɵdid"](1, 49152, null, 0, property_component.a, [], null, null), (_l()(), 
            core["ɵeld"](2, 0, null, 0, 1, "div", [ [ "key", "" ] ], null, null, null, null, null)), (_l()(), 
            core["ɵted"](-1, null, [ "Architecture" ])), (_l()(), core["ɵeld"](4, 0, null, 1, 1, "div", [ [ "value", "" ] ], null, null, null, null, null)), (_l()(), 
            core["ɵted"](5, null, [ "", "" ])) ], null, (function(_ck, _v) {
                var _co = _v.component;
                _ck(_v, 5, 0, null == _co.node ? null : _co.node.nodeInfo.architecture);
            }));
        }
        function View_NodeDetailComponent_8(_l) {
            return core["ɵvid"](0, [ (_l()(), core["ɵeld"](0, 0, null, null, 21, "div", [ [ "content", "" ], [ "fxLayout", "row wrap" ] ], null, null, null, null, null)), core["ɵdid"](1, 671744, null, 0, flex.d, [ core.ElementRef, esm2015_core.i, [ 2, flex.k ], esm2015_core.f ], {
                fxLayout: [ 0, "fxLayout" ]
            }, null), (_l()(), core["ɵand"](16777216, null, null, 1, null, View_NodeDetailComponent_9)), core["ɵdid"](3, 16384, null, 0, common.NgIf, [ core.ViewContainerRef, core.TemplateRef ], {
                ngIf: [ 0, "ngIf" ]
            }, null), (_l()(), core["ɵand"](16777216, null, null, 1, null, View_NodeDetailComponent_10)), core["ɵdid"](5, 16384, null, 0, common.NgIf, [ core.ViewContainerRef, core.TemplateRef ], {
                ngIf: [ 0, "ngIf" ]
            }, null), (_l()(), core["ɵand"](16777216, null, null, 1, null, View_NodeDetailComponent_11)), core["ɵdid"](7, 16384, null, 0, common.NgIf, [ core.ViewContainerRef, core.TemplateRef ], {
                ngIf: [ 0, "ngIf" ]
            }, null), (_l()(), core["ɵand"](16777216, null, null, 1, null, View_NodeDetailComponent_12)), core["ɵdid"](9, 16384, null, 0, common.NgIf, [ core.ViewContainerRef, core.TemplateRef ], {
                ngIf: [ 0, "ngIf" ]
            }, null), (_l()(), core["ɵand"](16777216, null, null, 1, null, View_NodeDetailComponent_13)), core["ɵdid"](11, 16384, null, 0, common.NgIf, [ core.ViewContainerRef, core.TemplateRef ], {
                ngIf: [ 0, "ngIf" ]
            }, null), (_l()(), core["ɵand"](16777216, null, null, 1, null, View_NodeDetailComponent_14)), core["ɵdid"](13, 16384, null, 0, common.NgIf, [ core.ViewContainerRef, core.TemplateRef ], {
                ngIf: [ 0, "ngIf" ]
            }, null), (_l()(), core["ɵand"](16777216, null, null, 1, null, View_NodeDetailComponent_15)), core["ɵdid"](15, 16384, null, 0, common.NgIf, [ core.ViewContainerRef, core.TemplateRef ], {
                ngIf: [ 0, "ngIf" ]
            }, null), (_l()(), core["ɵand"](16777216, null, null, 1, null, View_NodeDetailComponent_16)), core["ɵdid"](17, 16384, null, 0, common.NgIf, [ core.ViewContainerRef, core.TemplateRef ], {
                ngIf: [ 0, "ngIf" ]
            }, null), (_l()(), core["ɵand"](16777216, null, null, 1, null, View_NodeDetailComponent_17)), core["ɵdid"](19, 16384, null, 0, common.NgIf, [ core.ViewContainerRef, core.TemplateRef ], {
                ngIf: [ 0, "ngIf" ]
            }, null), (_l()(), core["ɵand"](16777216, null, null, 1, null, View_NodeDetailComponent_18)), core["ɵdid"](21, 16384, null, 0, common.NgIf, [ core.ViewContainerRef, core.TemplateRef ], {
                ngIf: [ 0, "ngIf" ]
            }, null) ], (function(_ck, _v) {
                var _co = _v.component;
                _ck(_v, 1, 0, "row wrap"), _ck(_v, 3, 0, null == _co.node ? null : _co.node.nodeInfo.machineID), 
                _ck(_v, 5, 0, null == _co.node ? null : _co.node.nodeInfo.systemUUID), _ck(_v, 7, 0, null == _co.node ? null : _co.node.nodeInfo.bootID), 
                _ck(_v, 9, 0, null == _co.node ? null : _co.node.nodeInfo.kernelVersion), _ck(_v, 11, 0, null == _co.node ? null : _co.node.nodeInfo.osImage), 
                _ck(_v, 13, 0, null == _co.node ? null : _co.node.nodeInfo.containerRuntimeVersion), 
                _ck(_v, 15, 0, null == _co.node ? null : _co.node.nodeInfo.kubeletVersion), _ck(_v, 17, 0, null == _co.node ? null : _co.node.nodeInfo.kubeProxyVersion), 
                _ck(_v, 19, 0, null == _co.node ? null : _co.node.nodeInfo.operatingSystem), _ck(_v, 21, 0, null == _co.node ? null : _co.node.nodeInfo.architecture);
            }), null);
        }
        function View_NodeDetailComponent_19(_l) {
            return core["ɵvid"](0, [ (_l()(), core["ɵeld"](0, 0, null, null, 86, "div", [ [ "content", "" ] ], null, null, null, null, null)), (_l()(), 
            core["ɵeld"](1, 0, null, null, 85, "div", [ [ "class", "kd-allocated-resources" ] ], null, null, null, null, null)), (_l()(), 
            core["ɵeld"](2, 0, null, null, 31, "div", [ [ "class", "kd-graph-container" ], [ "fxFlex", "" ] ], null, null, null, null, null)), core["ɵdid"](3, 671744, null, 0, flex.b, [ core.ElementRef, esm2015_core.i, esm2015_core.e, flex.i, esm2015_core.f ], {
                fxFlex: [ 0, "fxFlex" ]
            }, null), (_l()(), core["ɵeld"](4, 0, null, null, 1, "kd-allocation-chart", [ [ "id", "cpu" ] ], null, null, null, allocationchart_component_ngfactory.b, allocationchart_component_ngfactory.a)), core["ɵdid"](5, 573440, null, 0, allocationchart_component.a, [], {
                outerPercent: [ 0, "outerPercent" ],
                innerPercent: [ 1, "innerPercent" ],
                id: [ 2, "id" ]
            }, null), (_l()(), core["ɵeld"](6, 0, null, null, 27, "div", [ [ "class", "kd-graph-legend" ] ], null, null, null, null, null)), (_l()(), 
            core["ɵeld"](7, 0, null, null, 1, "div", [ [ "class", "kd-graph-legend-title" ] ], null, null, null, null, null)), (_l()(), 
            core["ɵted"](-1, null, [ "CPU allocation (cores)" ])), (_l()(), core["ɵeld"](9, 0, null, null, 8, "div", [ [ "class", "kd-graph-legend-entry" ] ], null, null, null, null, null)), (_l()(), 
            core["ɵeld"](10, 0, null, null, 2, "mat-icon", [ [ "class", "kd-chart-green mat-icon notranslate" ], [ "role", "img" ] ], [ [ 2, "mat-icon-inline", null ], [ 2, "mat-icon-no-color", null ] ], null, null, icon_index_ngfactory.b, icon_index_ngfactory.a)), core["ɵdid"](11, 9158656, null, 0, icon.b, [ core.ElementRef, icon.d, [ 8, null ], [ 2, icon.a ], [ 2, core.ErrorHandler ] ], null, null), (_l()(), 
            core["ɵted"](-1, 0, [ "stop" ])), (_l()(), core["ɵeld"](13, 0, null, null, 1, "span", [], null, null, null, null, null)), (_l()(), 
            core["ɵted"](-1, null, [ "Requests" ])), (_l()(), core["ɵeld"](15, 0, null, null, 2, "span", [ [ "class", "kd-graph-legend-value" ] ], null, null, null, null, null)), (_l()(), 
            core["ɵted"](16, null, [ " ", " " ])), core["ɵppd"](17, 1), (_l()(), core["ɵeld"](18, 0, null, null, 8, "div", [ [ "class", "kd-graph-legend-entry" ] ], null, null, null, null, null)), (_l()(), 
            core["ɵeld"](19, 0, null, null, 2, "mat-icon", [ [ "class", "kd-chart-blue mat-icon notranslate" ], [ "role", "img" ] ], [ [ 2, "mat-icon-inline", null ], [ 2, "mat-icon-no-color", null ] ], null, null, icon_index_ngfactory.b, icon_index_ngfactory.a)), core["ɵdid"](20, 9158656, null, 0, icon.b, [ core.ElementRef, icon.d, [ 8, null ], [ 2, icon.a ], [ 2, core.ErrorHandler ] ], null, null), (_l()(), 
            core["ɵted"](-1, 0, [ "stop" ])), (_l()(), core["ɵeld"](22, 0, null, null, 1, "span", [], null, null, null, null, null)), (_l()(), 
            core["ɵted"](-1, null, [ "Limits" ])), (_l()(), core["ɵeld"](24, 0, null, null, 2, "span", [ [ "class", "kd-graph-legend-value" ] ], null, null, null, null, null)), (_l()(), 
            core["ɵted"](25, null, [ " ", " " ])), core["ɵppd"](26, 1), (_l()(), core["ɵeld"](27, 0, null, null, 6, "div", [ [ "class", "kd-graph-legend-entry" ] ], null, null, null, null, null)), (_l()(), 
            core["ɵeld"](28, 0, null, null, 0, "div", [ [ "class", "kd-graph-legend-placeholder" ] ], null, null, null, null, null)), (_l()(), 
            core["ɵeld"](29, 0, null, null, 1, "span", [], null, null, null, null, null)), (_l()(), 
            core["ɵted"](-1, null, [ "Capacity" ])), (_l()(), core["ɵeld"](31, 0, null, null, 2, "span", [ [ "class", "kd-graph-legend-value" ] ], null, null, null, null, null)), (_l()(), 
            core["ɵted"](32, null, [ " ", " " ])), core["ɵppd"](33, 1), (_l()(), core["ɵeld"](34, 0, null, null, 31, "div", [ [ "class", "kd-graph-container" ], [ "fxFlex", "" ] ], null, null, null, null, null)), core["ɵdid"](35, 671744, null, 0, flex.b, [ core.ElementRef, esm2015_core.i, esm2015_core.e, flex.i, esm2015_core.f ], {
                fxFlex: [ 0, "fxFlex" ]
            }, null), (_l()(), core["ɵeld"](36, 0, null, null, 1, "kd-allocation-chart", [ [ "id", "memory" ] ], null, null, null, allocationchart_component_ngfactory.b, allocationchart_component_ngfactory.a)), core["ɵdid"](37, 573440, null, 0, allocationchart_component.a, [], {
                outerPercent: [ 0, "outerPercent" ],
                innerPercent: [ 1, "innerPercent" ],
                id: [ 2, "id" ]
            }, null), (_l()(), core["ɵeld"](38, 0, null, null, 27, "div", [ [ "class", "kd-graph-legend" ] ], null, null, null, null, null)), (_l()(), 
            core["ɵeld"](39, 0, null, null, 1, "div", [ [ "class", "kd-graph-legend-title" ] ], null, null, null, null, null)), (_l()(), 
            core["ɵted"](-1, null, [ "Memory allocation (bytes)" ])), (_l()(), core["ɵeld"](41, 0, null, null, 8, "div", [ [ "class", "kd-graph-legend-entry" ] ], null, null, null, null, null)), (_l()(), 
            core["ɵeld"](42, 0, null, null, 2, "mat-icon", [ [ "class", "kd-chart-green mat-icon notranslate" ], [ "role", "img" ] ], [ [ 2, "mat-icon-inline", null ], [ 2, "mat-icon-no-color", null ] ], null, null, icon_index_ngfactory.b, icon_index_ngfactory.a)), core["ɵdid"](43, 9158656, null, 0, icon.b, [ core.ElementRef, icon.d, [ 8, null ], [ 2, icon.a ], [ 2, core.ErrorHandler ] ], null, null), (_l()(), 
            core["ɵted"](-1, 0, [ "stop" ])), (_l()(), core["ɵeld"](45, 0, null, null, 1, "span", [], null, null, null, null, null)), (_l()(), 
            core["ɵted"](-1, null, [ "Requests" ])), (_l()(), core["ɵeld"](47, 0, null, null, 2, "span", [ [ "class", "kd-graph-legend-value" ] ], null, null, null, null, null)), (_l()(), 
            core["ɵted"](48, null, [ " ", " " ])), core["ɵppd"](49, 1), (_l()(), core["ɵeld"](50, 0, null, null, 8, "div", [ [ "class", "kd-graph-legend-entry" ] ], null, null, null, null, null)), (_l()(), 
            core["ɵeld"](51, 0, null, null, 2, "mat-icon", [ [ "class", "kd-chart-blue mat-icon notranslate" ], [ "role", "img" ] ], [ [ 2, "mat-icon-inline", null ], [ 2, "mat-icon-no-color", null ] ], null, null, icon_index_ngfactory.b, icon_index_ngfactory.a)), core["ɵdid"](52, 9158656, null, 0, icon.b, [ core.ElementRef, icon.d, [ 8, null ], [ 2, icon.a ], [ 2, core.ErrorHandler ] ], null, null), (_l()(), 
            core["ɵted"](-1, 0, [ "stop" ])), (_l()(), core["ɵeld"](54, 0, null, null, 1, "span", [], null, null, null, null, null)), (_l()(), 
            core["ɵted"](-1, null, [ "Limits" ])), (_l()(), core["ɵeld"](56, 0, null, null, 2, "span", [ [ "class", "kd-graph-legend-value" ] ], null, null, null, null, null)), (_l()(), 
            core["ɵted"](57, null, [ " ", " " ])), core["ɵppd"](58, 1), (_l()(), core["ɵeld"](59, 0, null, null, 6, "div", [ [ "class", "kd-graph-legend-entry" ] ], null, null, null, null, null)), (_l()(), 
            core["ɵeld"](60, 0, null, null, 0, "div", [ [ "class", "kd-graph-legend-placeholder" ] ], null, null, null, null, null)), (_l()(), 
            core["ɵeld"](61, 0, null, null, 1, "span", [], null, null, null, null, null)), (_l()(), 
            core["ɵted"](-1, null, [ "Capacity" ])), (_l()(), core["ɵeld"](63, 0, null, null, 2, "span", [ [ "class", "kd-graph-legend-value" ] ], null, null, null, null, null)), (_l()(), 
            core["ɵted"](64, null, [ " ", " " ])), core["ɵppd"](65, 1), (_l()(), core["ɵeld"](66, 0, null, null, 20, "div", [ [ "class", "kd-graph-container" ], [ "fxFlex", "" ] ], null, null, null, null, null)), core["ɵdid"](67, 671744, null, 0, flex.b, [ core.ElementRef, esm2015_core.i, esm2015_core.e, flex.i, esm2015_core.f ], {
                fxFlex: [ 0, "fxFlex" ]
            }, null), (_l()(), core["ɵeld"](68, 0, null, null, 1, "kd-allocation-chart", [ [ "id", "pods" ] ], null, null, null, allocationchart_component_ngfactory.b, allocationchart_component_ngfactory.a)), core["ɵdid"](69, 573440, null, 0, allocationchart_component.a, [], {
                outerPercent: [ 0, "outerPercent" ],
                id: [ 1, "id" ]
            }, null), (_l()(), core["ɵeld"](70, 0, null, null, 16, "div", [ [ "class", "kd-graph-legend" ] ], null, null, null, null, null)), (_l()(), 
            core["ɵeld"](71, 0, null, null, 1, "div", [ [ "class", "kd-graph-legend-title" ] ], null, null, null, null, null)), (_l()(), 
            core["ɵted"](-1, null, [ "Pods allocation" ])), (_l()(), core["ɵeld"](73, 0, null, null, 7, "div", [ [ "class", "kd-graph-legend-entry" ] ], null, null, null, null, null)), (_l()(), 
            core["ɵeld"](74, 0, null, null, 2, "mat-icon", [ [ "class", "kd-chart-green mat-icon notranslate" ], [ "role", "img" ] ], [ [ 2, "mat-icon-inline", null ], [ 2, "mat-icon-no-color", null ] ], null, null, icon_index_ngfactory.b, icon_index_ngfactory.a)), core["ɵdid"](75, 9158656, null, 0, icon.b, [ core.ElementRef, icon.d, [ 8, null ], [ 2, icon.a ], [ 2, core.ErrorHandler ] ], null, null), (_l()(), 
            core["ɵted"](-1, 0, [ "stop" ])), (_l()(), core["ɵeld"](77, 0, null, null, 1, "span", [], null, null, null, null, null)), (_l()(), 
            core["ɵted"](-1, null, [ "Allocation" ])), (_l()(), core["ɵeld"](79, 0, null, null, 1, "span", [ [ "class", "kd-graph-legend-value" ] ], null, null, null, null, null)), (_l()(), 
            core["ɵted"](80, null, [ "", "" ])), (_l()(), core["ɵeld"](81, 0, null, null, 5, "div", [ [ "class", "kd-graph-legend-entry" ] ], null, null, null, null, null)), (_l()(), 
            core["ɵeld"](82, 0, null, null, 0, "div", [ [ "class", "kd-graph-legend-placeholder" ] ], null, null, null, null, null)), (_l()(), 
            core["ɵeld"](83, 0, null, null, 1, "span", [], null, null, null, null, null)), (_l()(), 
            core["ɵted"](-1, null, [ "Capacity" ])), (_l()(), core["ɵeld"](85, 0, null, null, 1, "span", [ [ "class", "kd-graph-legend-value" ] ], null, null, null, null, null)), (_l()(), 
            core["ɵted"](86, null, [ "", "" ])) ], (function(_ck, _v) {
                var _co = _v.component;
                _ck(_v, 3, 0, ""), _ck(_v, 5, 0, null == _co.node ? null : _co.node.allocatedResources.cpuRequestsFraction, null == _co.node ? null : _co.node.allocatedResources.cpuLimitsFraction, "cpu"), 
                _ck(_v, 11, 0), _ck(_v, 20, 0), _ck(_v, 35, 0, ""), _ck(_v, 37, 0, null == _co.node ? null : _co.node.allocatedResources.memoryRequestsFraction, null == _co.node ? null : _co.node.allocatedResources.memoryLimitsFraction, "memory"), 
                _ck(_v, 43, 0), _ck(_v, 52, 0), _ck(_v, 67, 0, ""), _ck(_v, 69, 0, null == _co.node ? null : _co.node.allocatedResources.podFraction, "pods"), 
                _ck(_v, 75, 0);
            }), (function(_ck, _v) {
                var _co = _v.component;
                _ck(_v, 10, 0, core["ɵnov"](_v, 11).inline, "primary" !== core["ɵnov"](_v, 11).color && "accent" !== core["ɵnov"](_v, 11).color && "warn" !== core["ɵnov"](_v, 11).color);
                var currVal_6 = core["ɵunv"](_v, 16, 0, _ck(_v, 17, 0, core["ɵnov"](_v.parent, 0), null == _co.node ? null : _co.node.allocatedResources.cpuRequests));
                _ck(_v, 16, 0, currVal_6), _ck(_v, 19, 0, core["ɵnov"](_v, 20).inline, "primary" !== core["ɵnov"](_v, 20).color && "accent" !== core["ɵnov"](_v, 20).color && "warn" !== core["ɵnov"](_v, 20).color);
                var currVal_9 = core["ɵunv"](_v, 25, 0, _ck(_v, 26, 0, core["ɵnov"](_v.parent, 0), null == _co.node ? null : _co.node.allocatedResources.cpuLimits));
                _ck(_v, 25, 0, currVal_9);
                var currVal_10 = core["ɵunv"](_v, 32, 0, _ck(_v, 33, 0, core["ɵnov"](_v.parent, 0), null == _co.node ? null : _co.node.allocatedResources.cpuCapacity));
                _ck(_v, 32, 0, currVal_10), _ck(_v, 42, 0, core["ɵnov"](_v, 43).inline, "primary" !== core["ɵnov"](_v, 43).color && "accent" !== core["ɵnov"](_v, 43).color && "warn" !== core["ɵnov"](_v, 43).color);
                var currVal_17 = core["ɵunv"](_v, 48, 0, _ck(_v, 49, 0, core["ɵnov"](_v.parent, 1), null == _co.node ? null : _co.node.allocatedResources.memoryRequests));
                _ck(_v, 48, 0, currVal_17), _ck(_v, 51, 0, core["ɵnov"](_v, 52).inline, "primary" !== core["ɵnov"](_v, 52).color && "accent" !== core["ɵnov"](_v, 52).color && "warn" !== core["ɵnov"](_v, 52).color);
                var currVal_20 = core["ɵunv"](_v, 57, 0, _ck(_v, 58, 0, core["ɵnov"](_v.parent, 1), null == _co.node ? null : _co.node.allocatedResources.memoryLimits));
                _ck(_v, 57, 0, currVal_20);
                var currVal_21 = core["ɵunv"](_v, 64, 0, _ck(_v, 65, 0, core["ɵnov"](_v.parent, 1), null == _co.node ? null : _co.node.allocatedResources.memoryCapacity));
                _ck(_v, 64, 0, currVal_21), _ck(_v, 74, 0, core["ɵnov"](_v, 75).inline, "primary" !== core["ɵnov"](_v, 75).color && "accent" !== core["ɵnov"](_v, 75).color && "warn" !== core["ɵnov"](_v, 75).color), 
                _ck(_v, 80, 0, null == _co.node ? null : _co.node.allocatedResources.allocatedPods), 
                _ck(_v, 86, 0, null == _co.node ? null : _co.node.allocatedResources.podCapacity);
            }));
        }
        function View_NodeDetailComponent_0(_l) {
            return core["ɵvid"](0, [ core["ɵpid"](0, coreformatter.a, [ core.LOCALE_ID ]), core["ɵpid"](0, memoryformatter.a, [ core.LOCALE_ID ]), (_l()(), 
            core["ɵeld"](2, 0, null, null, 1, "kd-object-meta", [], null, null, null, objectmeta_component_ngfactory.b, objectmeta_component_ngfactory.a)), core["ɵdid"](3, 49152, null, 0, objectmeta_component.a, [], {
                initialized: [ 0, "initialized" ],
                objectMeta: [ 1, "objectMeta" ]
            }, null), (_l()(), core["ɵeld"](4, 0, null, null, 5, "kd-card", [], null, null, null, card_component_ngfactory.b, card_component_ngfactory.a)), core["ɵdid"](5, 49152, null, 0, card_component.a, [], {
                initialized: [ 0, "initialized" ]
            }, null), (_l()(), core["ɵeld"](6, 0, null, 0, 1, "div", [ [ "title", "" ] ], null, null, null, null, null)), (_l()(), 
            core["ɵted"](-1, null, [ "Resource information" ])), (_l()(), core["ɵand"](16777216, null, 3, 1, null, View_NodeDetailComponent_1)), core["ɵdid"](9, 16384, null, 0, common.NgIf, [ core.ViewContainerRef, core.TemplateRef ], {
                ngIf: [ 0, "ngIf" ]
            }, null), (_l()(), core["ɵeld"](10, 0, null, null, 5, "kd-card", [], null, null, null, card_component_ngfactory.b, card_component_ngfactory.a)), core["ɵdid"](11, 49152, null, 0, card_component.a, [], {
                initialized: [ 0, "initialized" ]
            }, null), (_l()(), core["ɵeld"](12, 0, null, 0, 1, "div", [ [ "title", "" ] ], null, null, null, null, null)), (_l()(), 
            core["ɵted"](-1, null, [ "System information" ])), (_l()(), core["ɵand"](16777216, null, 3, 1, null, View_NodeDetailComponent_8)), core["ɵdid"](15, 16384, null, 0, common.NgIf, [ core.ViewContainerRef, core.TemplateRef ], {
                ngIf: [ 0, "ngIf" ]
            }, null), (_l()(), core["ɵeld"](16, 0, null, null, 5, "kd-card", [], null, null, null, card_component_ngfactory.b, card_component_ngfactory.a)), core["ɵdid"](17, 49152, null, 0, card_component.a, [], {
                initialized: [ 0, "initialized" ]
            }, null), (_l()(), core["ɵeld"](18, 0, null, 0, 1, "div", [ [ "title", "" ] ], null, null, null, null, null)), (_l()(), 
            core["ɵted"](-1, null, [ "Allocation" ])), (_l()(), core["ɵand"](16777216, null, 3, 1, null, View_NodeDetailComponent_19)), core["ɵdid"](21, 16384, null, 0, common.NgIf, [ core.ViewContainerRef, core.TemplateRef ], {
                ngIf: [ 0, "ngIf" ]
            }, null), (_l()(), core["ɵeld"](22, 0, null, null, 1, "kd-condition-list", [], null, null, null, condition_component_ngfactory.b, condition_component_ngfactory.a)), core["ɵdid"](23, 114688, null, 0, condition_component.a, [], {
                initialized: [ 0, "initialized" ],
                conditions: [ 1, "conditions" ]
            }, null), (_l()(), core["ɵeld"](24, 0, null, null, 1, "kd-pod-list", [], null, null, null, pod_component_ngfactory.b, pod_component_ngfactory.a)), core["ɵdid"](25, 245760, null, 0, pod_component.a, [ resource.a, core.ComponentFactoryResolver, notifications.b, core.ChangeDetectorRef ], {
                endpoint: [ 0, "endpoint" ]
            }, null), (_l()(), core["ɵeld"](26, 0, null, null, 1, "kd-event-list", [], null, null, null, event_component_ngfactory.b, event_component_ngfactory.a)), core["ɵdid"](27, 245760, null, 0, event_component.a, [ resource.a, notifications.b, core.ChangeDetectorRef ], {
                endpoint: [ 0, "endpoint" ]
            }, null) ], (function(_ck, _v) {
                var _co = _v.component;
                _ck(_v, 3, 0, _co.isInitialized, null == _co.node ? null : _co.node.objectMeta), 
                _ck(_v, 5, 0, _co.isInitialized), _ck(_v, 9, 0, _co.isInitialized), _ck(_v, 11, 0, _co.isInitialized), 
                _ck(_v, 15, 0, _co.isInitialized), _ck(_v, 17, 0, _co.isInitialized), _ck(_v, 21, 0, _co.isInitialized), 
                _ck(_v, 23, 0, _co.isInitialized, null == _co.node ? null : _co.node.conditions), 
                _ck(_v, 25, 0, _co.podListEndpoint), _ck(_v, 27, 0, _co.eventListEndpoint);
            }), null);
        }
        function View_NodeDetailComponent_Host_0(_l) {
            return core["ɵvid"](0, [ (_l()(), core["ɵeld"](0, 0, null, null, 1, "kd-node-detail", [], null, null, null, View_NodeDetailComponent_0, RenderType_NodeDetailComponent)), core["ɵdid"](1, 245760, null, 0, component_NodeDetailComponent, [ resource.b, actionbar.a, router.ActivatedRoute, notifications.b ], null, null) ], (function(_ck, _v) {
                _ck(_v, 1, 0);
            }), null);
        }
        var NodeDetailComponentNgFactory = core["ɵccf"]("kd-node-detail", component_NodeDetailComponent, View_NodeDetailComponent_Host_0, {}, {}, []), default_component_ngfactory = __webpack_require__("qnFn"), fesm2015_forms = __webpack_require__("s7LF"), observers = __webpack_require__("9b/N"), fesm2015_core = __webpack_require__("UhP/"), overlay = __webpack_require__("1O3W"), bidi = __webpack_require__("9gLZ"), tooltip = __webpack_require__("ZFy/"), sort = __webpack_require__("LUZP"), fesm2015_select = __webpack_require__("ZTz/"), paginator = __webpack_require__("5QHs"), menu = __webpack_require__("rJgo"), ngx_filter_pipe = __webpack_require__("4muW"), a11y = __webpack_require__("YEUz"), platform = __webpack_require__("SCoL"), fesm2015_button = __webpack_require__("Dxy4"), card = __webpack_require__("PDjf"), fesm2015_checkbox = __webpack_require__("pMoy"), divider = __webpack_require__("BSbQ"), grid_list = __webpack_require__("40+f"), form_field = __webpack_require__("Q2Ze"), text_field = __webpack_require__("8sFK"), input = __webpack_require__("e6WT"), progress_spinner = __webpack_require__("pu8Q"), progress_bar = __webpack_require__("BTe0"), fesm2015_radio = __webpack_require__("zQhy"), scrolling = __webpack_require__("7KAL"), sidenav = __webpack_require__("q7Ft"), toolbar = __webpack_require__("l0rg"), portal = __webpack_require__("1z/I"), slider = __webpack_require__("mPVK"), slide_toggle = __webpack_require__("jMqV"), chips = __webpack_require__("f44v"), table = __webpack_require__("GXRp"), fesm2015_table = __webpack_require__("OaSA"), tabs = __webpack_require__("M9ds"), button_toggle = __webpack_require__("Ynp+"), snack_bar = __webpack_require__("zHaW"), extended = __webpack_require__("ura0"), grid = __webpack_require__("Nhcz"), flex_layout = __webpack_require__("u9T3"), src_module = __webpack_require__("o6Sk"), pipes_module = __webpack_require__("I7rD"), shared_module = __webpack_require__("MnlZ"), components_module = __webpack_require__("PXUV");
        const ɵ0 = {
            breadcrumb: "Nodes",
            parent: __webpack_require__("wSpo").a
        }, ɵ1 = {
            breadcrumb: "{{ resourceName }}",
            parent: {
                path: "",
                component: NodeListComponent,
                data: ɵ0
            }
        };
        class NodeRoutingModule {}
        var keycodes = __webpack_require__("Ht+U"), default_component = __webpack_require__("zWhM");
        __webpack_require__.d(__webpack_exports__, "NodeModuleNgFactory", (function() {
            return NodeModuleNgFactory;
        }));
        var NodeModuleNgFactory = core["ɵcmf"](NodeModule, [], (function(_l) {
            return core["ɵmod"]([ core["ɵmpd"](512, core.ComponentFactoryResolver, core["ɵCodegenComponentFactoryResolver"], [ [ 8, [ index_ngfactory.a, dialog_index_ngfactory.a, snack_bar_index_ngfactory.a, snack_bar_index_ngfactory.b, router_ngfactory.a, dialog_ngfactory.a, component_ngfactory.a, menu_component_ngfactory.a, changedialog_dialog_ngfactory.a, NodeListComponentNgFactory, NodeDetailComponentNgFactory, default_component_ngfactory.a ] ], [ 3, core.ComponentFactoryResolver ], core.NgModuleRef ]), core["ɵmpd"](4608, common.NgLocalization, common.NgLocaleLocalization, [ core.LOCALE_ID ]), core["ɵmpd"](4608, fesm2015_forms["ɵangular_packages_forms_forms_n"], fesm2015_forms["ɵangular_packages_forms_forms_n"], []), core["ɵmpd"](4608, fesm2015_forms.FormBuilder, fesm2015_forms.FormBuilder, []), core["ɵmpd"](4608, observers.c, observers.c, []), core["ɵmpd"](4608, fesm2015_core.d, fesm2015_core.d, []), core["ɵmpd"](4608, overlay.c, overlay.c, [ overlay.i, overlay.e, core.ComponentFactoryResolver, overlay.h, overlay.f, core.Injector, core.NgZone, common.DOCUMENT, bidi.b, [ 2, common.Location ] ]), core["ɵmpd"](5120, overlay.j, overlay.k, [ overlay.c ]), core["ɵmpd"](5120, tooltip.b, tooltip.c, [ overlay.c ]), core["ɵmpd"](5120, dialog.c, dialog.d, [ overlay.c ]), core["ɵmpd"](135680, dialog.e, dialog.e, [ overlay.c, core.Injector, [ 2, common.Location ], [ 2, dialog.b ], dialog.c, [ 3, dialog.e ], overlay.e ]), core["ɵmpd"](5120, sort.d, sort.a, [ [ 3, sort.d ] ]), core["ɵmpd"](5120, fesm2015_select.a, fesm2015_select.b, [ overlay.c ]), core["ɵmpd"](5120, paginator.c, paginator.a, [ [ 3, paginator.c ] ]), core["ɵmpd"](5120, menu.c, menu.j, [ overlay.c ]), core["ɵmpd"](5120, core.APP_BOOTSTRAP_LISTENER, (function(p0_0, p0_1) {
                return [ esm2015_core.j(p0_0, p0_1) ];
            }), [ common.DOCUMENT, core.PLATFORM_ID ]), core["ɵmpd"](4608, ngx_filter_pipe.a, ngx_filter_pipe.a, []), core["ɵmpd"](1073742336, common.CommonModule, common.CommonModule, []), core["ɵmpd"](1073742336, fesm2015_forms["ɵangular_packages_forms_forms_d"], fesm2015_forms["ɵangular_packages_forms_forms_d"], []), core["ɵmpd"](1073742336, fesm2015_forms.FormsModule, fesm2015_forms.FormsModule, []), core["ɵmpd"](1073742336, fesm2015_forms.ReactiveFormsModule, fesm2015_forms.ReactiveFormsModule, []), core["ɵmpd"](1073742336, bidi.a, bidi.a, []), core["ɵmpd"](1073742336, fesm2015_core.l, fesm2015_core.l, [ a11y.h, [ 2, fesm2015_core.e ] ]), core["ɵmpd"](1073742336, platform.b, platform.b, []), core["ɵmpd"](1073742336, fesm2015_core.u, fesm2015_core.u, []), core["ɵmpd"](1073742336, fesm2015_button.c, fesm2015_button.c, []), core["ɵmpd"](1073742336, card.e, card.e, []), core["ɵmpd"](1073742336, observers.d, observers.d, []), core["ɵmpd"](1073742336, fesm2015_checkbox.e, fesm2015_checkbox.e, []), core["ɵmpd"](1073742336, fesm2015_checkbox.d, fesm2015_checkbox.d, []), core["ɵmpd"](1073742336, divider.b, divider.b, []), core["ɵmpd"](1073742336, fesm2015_core.m, fesm2015_core.m, []), core["ɵmpd"](1073742336, grid_list.a, grid_list.a, []), core["ɵmpd"](1073742336, form_field.e, form_field.e, []), core["ɵmpd"](1073742336, icon.c, icon.c, []), core["ɵmpd"](1073742336, text_field.c, text_field.c, []), core["ɵmpd"](1073742336, input.b, input.b, []), core["ɵmpd"](1073742336, progress_spinner.c, progress_spinner.c, []), core["ɵmpd"](1073742336, progress_bar.c, progress_bar.c, []), core["ɵmpd"](1073742336, fesm2015_radio.d, fesm2015_radio.d, []), core["ɵmpd"](1073742336, scrolling.c, scrolling.c, []), core["ɵmpd"](1073742336, sidenav.h, sidenav.h, []), core["ɵmpd"](1073742336, toolbar.b, toolbar.b, []), core["ɵmpd"](1073742336, a11y.a, a11y.a, [ a11y.h ]), core["ɵmpd"](1073742336, portal.g, portal.g, []), core["ɵmpd"](1073742336, overlay.g, overlay.g, []), core["ɵmpd"](1073742336, tooltip.e, tooltip.e, []), core["ɵmpd"](1073742336, slider.b, slider.b, []), core["ɵmpd"](1073742336, dialog.k, dialog.k, []), core["ɵmpd"](1073742336, slide_toggle.d, slide_toggle.d, []), core["ɵmpd"](1073742336, slide_toggle.c, slide_toggle.c, []), core["ɵmpd"](1073742336, chips.d, chips.d, []), core["ɵmpd"](1073742336, table.p, table.p, []), core["ɵmpd"](1073742336, fesm2015_table.m, fesm2015_table.m, []), core["ɵmpd"](1073742336, sort.e, sort.e, []), core["ɵmpd"](1073742336, fesm2015_core.s, fesm2015_core.s, []), core["ɵmpd"](1073742336, fesm2015_core.q, fesm2015_core.q, []), core["ɵmpd"](1073742336, fesm2015_select.d, fesm2015_select.d, []), core["ɵmpd"](1073742336, paginator.d, paginator.d, []), core["ɵmpd"](1073742336, tabs.k, tabs.k, []), core["ɵmpd"](1073742336, menu.i, menu.i, []), core["ɵmpd"](1073742336, menu.f, menu.f, []), core["ɵmpd"](1073742336, button_toggle.e, button_toggle.e, []), core["ɵmpd"](1073742336, snack_bar.e, snack_bar.e, []), core["ɵmpd"](1073742336, esm2015_core.c, esm2015_core.c, []), core["ɵmpd"](1073742336, flex.h, flex.h, []), core["ɵmpd"](1073742336, extended.b, extended.b, []), core["ɵmpd"](1073742336, grid.a, grid.a, []), core["ɵmpd"](1073742336, flex_layout.a, flex_layout.a, [ [ 2, esm2015_core.g ], core.PLATFORM_ID ]), core["ɵmpd"](1073742336, router.RouterModule, router.RouterModule, [ [ 2, router["ɵangular_packages_router_router_a"] ], [ 2, router.Router ] ]), core["ɵmpd"](1073742336, src_module.a, src_module.a, []), core["ɵmpd"](1073742336, ngx_filter_pipe.b, ngx_filter_pipe.b, []), core["ɵmpd"](1073742336, pipes_module.a, pipes_module.a, []), core["ɵmpd"](1073742336, shared_module.a, shared_module.a, []), core["ɵmpd"](1073742336, components_module.a, components_module.a, []), core["ɵmpd"](1073742336, NodeRoutingModule, NodeRoutingModule, []), core["ɵmpd"](1073742336, NodeModule, NodeModule, []), core["ɵmpd"](256, chips.a, {
                separatorKeyCodes: [ keycodes.f ]
            }, []), core["ɵmpd"](256, tooltip.a, shared_module.b, []), core["ɵmpd"](1024, router.ROUTES, (function() {
                return [ [ {
                    path: "",
                    component: NodeListComponent,
                    data: ɵ0
                }, {
                    path: ":resourceName",
                    component: component_NodeDetailComponent,
                    data: ɵ1
                }, {
                    path: "",
                    component: default_component.a,
                    outlet: "actionbar"
                } ] ];
            }), []) ]);
        }));
    },
    Ohk9: function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.d(__webpack_exports__, "a", (function() {
            return RenderType_AllocationChartComponent;
        })), __webpack_require__.d(__webpack_exports__, "b", (function() {
            return View_AllocationChartComponent_0;
        }));
        var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("8Y7J"), RenderType_AllocationChartComponent = (__webpack_require__("e5Yu"), 
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcrt"]({
            encapsulation: 2,
            styles: [],
            data: {}
        }));
        function View_AllocationChartComponent_0(_l) {
            return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [ (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 0, "div", [], [ [ 8, "id", 0 ] ], null, null, null, null)) ], null, (function(_ck, _v) {
                _ck(_v, 0, 0, _v.component.id);
            }));
        }
    }
} ]);
//# sourceMappingURL=resource-cluster-node-module-ngfactory.js.map