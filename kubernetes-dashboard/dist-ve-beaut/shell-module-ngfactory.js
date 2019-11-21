(window.webpackJsonp = window.webpackJsonp || []).push([ [ 52 ], {
    "+0l7": function(module, exports, __webpack_require__) {
        "use strict";
        var extendStatics, __extends = this && this.__extends || (extendStatics = function(d, b) {
            return (extendStatics = Object.setPrototypeOf || {
                __proto__: []
            } instanceof Array && function(d, b) {
                d.__proto__ = b;
            } || function(d, b) {
                for (var p in b) b.hasOwnProperty(p) && (d[p] = b[p]);
            })(d, b);
        }, function(d, b) {
            function __() {
                this.constructor = d;
            }
            extendStatics(d, b), d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, 
            new __);
        });
        Object.defineProperty(exports, "__esModule", {
            value: !0
        });
        var Lifecycle_1 = __webpack_require__("4wKv"), Lifecycle_2 = __webpack_require__("N7yj"), FALLBACK_SCROLL_BAR_WIDTH = 15, Viewport = function(_super) {
            function Viewport(_terminal, _viewportElement, _scrollArea, _charMeasure, _dimensions) {
                var _this = _super.call(this) || this;
                return _this._terminal = _terminal, _this._viewportElement = _viewportElement, _this._scrollArea = _scrollArea, 
                _this._charMeasure = _charMeasure, _this._dimensions = _dimensions, _this.scrollBarWidth = 0, 
                _this._currentRowHeight = 0, _this._lastRecordedBufferLength = 0, _this._lastRecordedViewportHeight = 0, 
                _this._lastRecordedBufferHeight = 0, _this._lastScrollTop = 0, _this._wheelPartialScroll = 0, 
                _this._refreshAnimationFrame = null, _this._ignoreNextScrollEvent = !1, _this.scrollBarWidth = _this._viewportElement.offsetWidth - _this._scrollArea.offsetWidth || FALLBACK_SCROLL_BAR_WIDTH, 
                _this.register(Lifecycle_2.addDisposableDomListener(_this._viewportElement, "scroll", _this._onScroll.bind(_this))), 
                setTimeout((function() {
                    return _this.syncScrollArea();
                }), 0), _this;
            }
            return __extends(Viewport, _super), Viewport.prototype.onDimensionsChance = function(dimensions) {
                this._dimensions = dimensions;
            }, Viewport.prototype.onThemeChange = function(colors) {
                this._viewportElement.style.backgroundColor = colors.background.css;
            }, Viewport.prototype._refresh = function() {
                var _this = this;
                null === this._refreshAnimationFrame && (this._refreshAnimationFrame = requestAnimationFrame((function() {
                    return _this._innerRefresh();
                })));
            }, Viewport.prototype._innerRefresh = function() {
                if (this._charMeasure.height > 0) {
                    this._currentRowHeight = this._dimensions.scaledCellHeight / window.devicePixelRatio, 
                    this._lastRecordedViewportHeight = this._viewportElement.offsetHeight;
                    var newBufferHeight = Math.round(this._currentRowHeight * this._lastRecordedBufferLength) + (this._lastRecordedViewportHeight - this._dimensions.canvasHeight);
                    this._lastRecordedBufferHeight !== newBufferHeight && (this._lastRecordedBufferHeight = newBufferHeight, 
                    this._scrollArea.style.height = this._lastRecordedBufferHeight + "px");
                }
                var scrollTop = this._terminal.buffer.ydisp * this._currentRowHeight;
                this._viewportElement.scrollTop !== scrollTop && (this._ignoreNextScrollEvent = !0, 
                this._viewportElement.scrollTop = scrollTop), this._refreshAnimationFrame = null;
            }, Viewport.prototype.syncScrollArea = function() {
                if (this._lastRecordedBufferLength !== this._terminal.buffer.lines.length) return this._lastRecordedBufferLength = this._terminal.buffer.lines.length, 
                void this._refresh();
                this._lastRecordedViewportHeight === this._dimensions.canvasHeight && this._lastScrollTop === this._terminal.buffer.ydisp * this._currentRowHeight && this._lastScrollTop === this._viewportElement.scrollTop && this._dimensions.scaledCellHeight / window.devicePixelRatio === this._currentRowHeight || this._refresh();
            }, Viewport.prototype._onScroll = function(ev) {
                if (this._lastScrollTop = this._viewportElement.scrollTop, this._viewportElement.offsetParent) if (this._ignoreNextScrollEvent) this._ignoreNextScrollEvent = !1; else {
                    var newRow = Math.round(this._lastScrollTop / this._currentRowHeight);
                    this._terminal.scrollLines(newRow - this._terminal.buffer.ydisp, !0);
                }
            }, Viewport.prototype.onWheel = function(ev) {
                var amount = this._getPixelsScrolled(ev);
                0 !== amount && (this._viewportElement.scrollTop += amount, ev.preventDefault());
            }, Viewport.prototype._getPixelsScrolled = function(ev) {
                if (0 === ev.deltaY) return 0;
                var amount = ev.deltaY;
                return ev.deltaMode === WheelEvent.DOM_DELTA_LINE ? amount *= this._currentRowHeight : ev.deltaMode === WheelEvent.DOM_DELTA_PAGE && (amount *= this._currentRowHeight * this._terminal.rows), 
                amount;
            }, Viewport.prototype.getLinesScrolled = function(ev) {
                if (0 === ev.deltaY) return 0;
                var amount = ev.deltaY;
                return ev.deltaMode === WheelEvent.DOM_DELTA_PIXEL ? (this._wheelPartialScroll += amount /= this._currentRowHeight + 0, 
                amount = Math.floor(Math.abs(this._wheelPartialScroll)) * (this._wheelPartialScroll > 0 ? 1 : -1), 
                this._wheelPartialScroll %= 1) : ev.deltaMode === WheelEvent.DOM_DELTA_PAGE && (amount *= this._terminal.rows), 
                amount;
            }, Viewport.prototype.onTouchStart = function(ev) {
                this._lastTouchY = ev.touches[0].pageY;
            }, Viewport.prototype.onTouchMove = function(ev) {
                var deltaY = this._lastTouchY - ev.touches[0].pageY;
                this._lastTouchY = ev.touches[0].pageY, 0 !== deltaY && (this._viewportElement.scrollTop += deltaY, 
                ev.preventDefault());
            }, Viewport;
        }(Lifecycle_1.Disposable);
        exports.Viewport = Viewport;
    },
    "+uUd": function(module, exports, __webpack_require__) {
        "use strict";
        var extendStatics, __extends = this && this.__extends || (extendStatics = function(d, b) {
            return (extendStatics = Object.setPrototypeOf || {
                __proto__: []
            } instanceof Array && function(d, b) {
                d.__proto__ = b;
            } || function(d, b) {
                for (var p in b) b.hasOwnProperty(p) && (d[p] = b[p]);
            })(d, b);
        }, function(d, b) {
            function __() {
                this.constructor = d;
            }
            extendStatics(d, b), d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, 
            new __);
        });
        Object.defineProperty(exports, "__esModule", {
            value: !0
        });
        var ScreenDprMonitor = function(_super) {
            function ScreenDprMonitor() {
                var _this = null !== _super && _super.apply(this, arguments) || this;
                return _this._currentDevicePixelRatio = window.devicePixelRatio, _this;
            }
            return __extends(ScreenDprMonitor, _super), ScreenDprMonitor.prototype.setListener = function(listener) {
                var _this = this;
                this._listener && this.clearListener(), this._listener = listener, this._outerListener = function() {
                    _this._listener && (_this._listener(window.devicePixelRatio, _this._currentDevicePixelRatio), 
                    _this._updateDpr());
                }, this._updateDpr();
            }, ScreenDprMonitor.prototype.dispose = function() {
                _super.prototype.dispose.call(this), this.clearListener();
            }, ScreenDprMonitor.prototype._updateDpr = function() {
                this._resolutionMediaMatchList && this._outerListener && (this._resolutionMediaMatchList.removeListener(this._outerListener), 
                this._currentDevicePixelRatio = window.devicePixelRatio, this._resolutionMediaMatchList = window.matchMedia("screen and (resolution: " + window.devicePixelRatio + "dppx)"), 
                this._resolutionMediaMatchList.addListener(this._outerListener));
            }, ScreenDprMonitor.prototype.clearListener = function() {
                this._resolutionMediaMatchList && this._listener && this._outerListener && (this._resolutionMediaMatchList.removeListener(this._outerListener), 
                this._resolutionMediaMatchList = void 0, this._listener = void 0, this._outerListener = void 0);
            }, ScreenDprMonitor;
        }(__webpack_require__("4wKv").Disposable);
        exports.ScreenDprMonitor = ScreenDprMonitor;
    },
    "+uZM": function(module, exports, __webpack_require__) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        });
        var BufferLine_1 = __webpack_require__("XMT/");
        exports.applyWindowsMode = function(terminal) {
            return terminal.onLineFeed((function() {
                var lastChar = terminal.buffer.lines.get(terminal.buffer.ybase + terminal.buffer.y - 1).get(terminal.cols - 1);
                terminal.buffer.lines.get(terminal.buffer.ybase + terminal.buffer.y).isWrapped = lastChar[BufferLine_1.CHAR_DATA_CODE_INDEX] !== BufferLine_1.NULL_CELL_CODE && lastChar[BufferLine_1.CHAR_DATA_CODE_INDEX] !== BufferLine_1.WHITESPACE_CELL_CODE;
            }));
        };
    },
    "0J8d": function(module, exports, __webpack_require__) {
        "use strict";
        var extendStatics, __extends = this && this.__extends || (extendStatics = function(d, b) {
            return (extendStatics = Object.setPrototypeOf || {
                __proto__: []
            } instanceof Array && function(d, b) {
                d.__proto__ = b;
            } || function(d, b) {
                for (var p in b) b.hasOwnProperty(p) && (d[p] = b[p]);
            })(d, b);
        }, function(d, b) {
            function __() {
                this.constructor = d;
            }
            extendStatics(d, b), d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, 
            new __);
        });
        Object.defineProperty(exports, "__esModule", {
            value: !0
        });
        var Lifecycle_1 = __webpack_require__("4wKv"), Lifecycle_2 = __webpack_require__("N7yj"), MouseZoneManager = function(_super) {
            function MouseZoneManager(_terminal) {
                var _this = _super.call(this) || this;
                return _this._terminal = _terminal, _this._zones = [], _this._areZonesActive = !1, 
                _this._tooltipTimeout = null, _this._currentZone = null, _this._lastHoverCoords = [ null, null ], 
                _this.register(Lifecycle_2.addDisposableDomListener(_this._terminal.element, "mousedown", (function(e) {
                    return _this._onMouseDown(e);
                }))), _this._mouseMoveListener = function(e) {
                    return _this._onMouseMove(e);
                }, _this._mouseLeaveListener = function(e) {
                    return _this._onMouseLeave(e);
                }, _this._clickListener = function(e) {
                    return _this._onClick(e);
                }, _this;
            }
            return __extends(MouseZoneManager, _super), MouseZoneManager.prototype.dispose = function() {
                _super.prototype.dispose.call(this), this._deactivate();
            }, MouseZoneManager.prototype.add = function(zone) {
                this._zones.push(zone), 1 === this._zones.length && this._activate();
            }, MouseZoneManager.prototype.clearAll = function(start, end) {
                if (0 !== this._zones.length) {
                    end || (start = 0, end = this._terminal.rows - 1);
                    for (var i = 0; i < this._zones.length; i++) {
                        var zone = this._zones[i];
                        (zone.y1 > start && zone.y1 <= end + 1 || zone.y2 > start && zone.y2 <= end + 1 || zone.y1 < start && zone.y2 > end + 1) && (this._currentZone && this._currentZone === zone && (this._currentZone.leaveCallback(), 
                        this._currentZone = null), this._zones.splice(i--, 1));
                    }
                    0 === this._zones.length && this._deactivate();
                }
            }, MouseZoneManager.prototype._activate = function() {
                this._areZonesActive || (this._areZonesActive = !0, this._terminal.element.addEventListener("mousemove", this._mouseMoveListener), 
                this._terminal.element.addEventListener("mouseleave", this._mouseLeaveListener), 
                this._terminal.element.addEventListener("click", this._clickListener));
            }, MouseZoneManager.prototype._deactivate = function() {
                this._areZonesActive && (this._areZonesActive = !1, this._terminal.element.removeEventListener("mousemove", this._mouseMoveListener), 
                this._terminal.element.removeEventListener("mouseleave", this._mouseLeaveListener), 
                this._terminal.element.removeEventListener("click", this._clickListener));
            }, MouseZoneManager.prototype._onMouseMove = function(e) {
                this._lastHoverCoords[0] === e.pageX && this._lastHoverCoords[1] === e.pageY || (this._onHover(e), 
                this._lastHoverCoords = [ e.pageX, e.pageY ]);
            }, MouseZoneManager.prototype._onHover = function(e) {
                var _this = this, zone = this._findZoneEventAt(e);
                zone !== this._currentZone && (this._currentZone && (this._currentZone.leaveCallback(), 
                this._currentZone = null, this._tooltipTimeout && clearTimeout(this._tooltipTimeout)), 
                zone && (this._currentZone = zone, zone.hoverCallback && zone.hoverCallback(e), 
                this._tooltipTimeout = setTimeout((function() {
                    return _this._onTooltip(e);
                }), 500)));
            }, MouseZoneManager.prototype._onTooltip = function(e) {
                this._tooltipTimeout = null;
                var zone = this._findZoneEventAt(e);
                zone && zone.tooltipCallback && zone.tooltipCallback(e);
            }, MouseZoneManager.prototype._onMouseDown = function(e) {
                if (this._initialSelectionLength = this._terminal.getSelection().length, this._areZonesActive) {
                    var zone = this._findZoneEventAt(e);
                    zone && zone.willLinkActivate(e) && (e.preventDefault(), e.stopImmediatePropagation());
                }
            }, MouseZoneManager.prototype._onMouseLeave = function(e) {
                this._currentZone && (this._currentZone.leaveCallback(), this._currentZone = null, 
                this._tooltipTimeout && clearTimeout(this._tooltipTimeout));
            }, MouseZoneManager.prototype._onClick = function(e) {
                var zone = this._findZoneEventAt(e), currentSelectionLength = this._terminal.getSelection().length;
                zone && currentSelectionLength === this._initialSelectionLength && (zone.clickCallback(e), 
                e.preventDefault(), e.stopImmediatePropagation());
            }, MouseZoneManager.prototype._findZoneEventAt = function(e) {
                var coords = this._terminal.mouseHelper.getCoords(e, this._terminal.screenElement, this._terminal.charMeasure, this._terminal.cols, this._terminal.rows);
                if (!coords) return null;
                for (var x = coords[0], y = coords[1], i = 0; i < this._zones.length; i++) {
                    var zone = this._zones[i];
                    if (zone.y1 === zone.y2) {
                        if (y === zone.y1 && x >= zone.x1 && x < zone.x2) return zone;
                    } else if (y === zone.y1 && x >= zone.x1 || y === zone.y2 && x < zone.x2 || y > zone.y1 && y < zone.y2) return zone;
                }
                return null;
            }, MouseZoneManager;
        }(Lifecycle_1.Disposable);
        exports.MouseZoneManager = MouseZoneManager, exports.MouseZone = function(x1, y1, x2, y2, clickCallback, hoverCallback, tooltipCallback, leaveCallback, willLinkActivate) {
            this.x1 = x1, this.y1 = y1, this.x2 = x2, this.y2 = y2, this.clickCallback = clickCallback, 
            this.hoverCallback = hoverCallback, this.tooltipCallback = tooltipCallback, this.leaveCallback = leaveCallback, 
            this.willLinkActivate = willLinkActivate;
        };
    },
    "2+Wn": function(module, exports, __webpack_require__) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports.INVERTED_DEFAULT_COLOR = 257, exports.DIM_OPACITY = .5, exports.CHAR_ATLAS_CELL_SPACING = 1;
    },
    "3+mF": function(module, exports, __webpack_require__) {
        "use strict";
        var extendStatics, __extends = this && this.__extends || (extendStatics = function(d, b) {
            return (extendStatics = Object.setPrototypeOf || {
                __proto__: []
            } instanceof Array && function(d, b) {
                d.__proto__ = b;
            } || function(d, b) {
                for (var p in b) b.hasOwnProperty(p) && (d[p] = b[p]);
            })(d, b);
        }, function(d, b) {
            function __() {
                this.constructor = d;
            }
            extendStatics(d, b), d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, 
            new __);
        });
        Object.defineProperty(exports, "__esModule", {
            value: !0
        });
        var BaseRenderLayer_1 = __webpack_require__("HHOg"), Types_1 = __webpack_require__("2+Wn"), CharAtlasUtils_1 = __webpack_require__("jNJa"), LinkRenderLayer = function(_super) {
            function LinkRenderLayer(container, zIndex, colors, terminal) {
                var _this = _super.call(this, container, "link", zIndex, !0, colors) || this;
                return _this._state = null, terminal.linkifier.onLinkHover((function(e) {
                    return _this._onLinkHover(e);
                })), terminal.linkifier.onLinkLeave((function(e) {
                    return _this._onLinkLeave(e);
                })), _this;
            }
            return __extends(LinkRenderLayer, _super), LinkRenderLayer.prototype.resize = function(terminal, dim) {
                _super.prototype.resize.call(this, terminal, dim), this._state = null;
            }, LinkRenderLayer.prototype.reset = function(terminal) {
                this._clearCurrentLink();
            }, LinkRenderLayer.prototype._clearCurrentLink = function() {
                if (this._state) {
                    this.clearCells(this._state.x1, this._state.y1, this._state.cols - this._state.x1, 1);
                    var middleRowCount = this._state.y2 - this._state.y1 - 1;
                    middleRowCount > 0 && this.clearCells(0, this._state.y1 + 1, this._state.cols, middleRowCount), 
                    this.clearCells(0, this._state.y2, this._state.x2, 1), this._state = null;
                }
            }, LinkRenderLayer.prototype._onLinkHover = function(e) {
                if (this._ctx.fillStyle = e.fg === Types_1.INVERTED_DEFAULT_COLOR ? this._colors.background.css : CharAtlasUtils_1.is256Color(e.fg) ? this._colors.ansi[e.fg].css : this._colors.foreground.css, 
                e.y1 === e.y2) this.fillBottomLineAtCells(e.x1, e.y1, e.x2 - e.x1); else {
                    this.fillBottomLineAtCells(e.x1, e.y1, e.cols - e.x1);
                    for (var y = e.y1 + 1; y < e.y2; y++) this.fillBottomLineAtCells(0, y, e.cols);
                    this.fillBottomLineAtCells(0, e.y2, e.x2);
                }
                this._state = e;
            }, LinkRenderLayer.prototype._onLinkLeave = function(e) {
                this._clearCurrentLink();
            }, LinkRenderLayer;
        }(BaseRenderLayer_1.BaseRenderLayer);
        exports.LinkRenderLayer = LinkRenderLayer;
    },
    "3TFC": function(module, exports, __webpack_require__) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        });
        var EventEmitter2_1 = __webpack_require__("Fn1x"), CircularList = function() {
            function CircularList(_maxLength) {
                this._maxLength = _maxLength, this.onDeleteEmitter = new EventEmitter2_1.EventEmitter2, 
                this.onInsertEmitter = new EventEmitter2_1.EventEmitter2, this.onTrimEmitter = new EventEmitter2_1.EventEmitter2, 
                this._array = new Array(this._maxLength), this._startIndex = 0, this._length = 0;
            }
            return Object.defineProperty(CircularList.prototype, "onDelete", {
                get: function() {
                    return this.onDeleteEmitter.event;
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(CircularList.prototype, "onInsert", {
                get: function() {
                    return this.onInsertEmitter.event;
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(CircularList.prototype, "onTrim", {
                get: function() {
                    return this.onTrimEmitter.event;
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(CircularList.prototype, "maxLength", {
                get: function() {
                    return this._maxLength;
                },
                set: function(newMaxLength) {
                    if (this._maxLength !== newMaxLength) {
                        for (var newArray = new Array(newMaxLength), i = 0; i < Math.min(newMaxLength, this.length); i++) newArray[i] = this._array[this._getCyclicIndex(i)];
                        this._array = newArray, this._maxLength = newMaxLength, this._startIndex = 0;
                    }
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(CircularList.prototype, "length", {
                get: function() {
                    return this._length;
                },
                set: function(newLength) {
                    if (newLength > this._length) for (var i = this._length; i < newLength; i++) this._array[i] = void 0;
                    this._length = newLength;
                },
                enumerable: !0,
                configurable: !0
            }), CircularList.prototype.get = function(index) {
                return this._array[this._getCyclicIndex(index)];
            }, CircularList.prototype.set = function(index, value) {
                this._array[this._getCyclicIndex(index)] = value;
            }, CircularList.prototype.push = function(value) {
                this._array[this._getCyclicIndex(this._length)] = value, this._length === this._maxLength ? (this._startIndex = ++this._startIndex % this._maxLength, 
                this.onTrimEmitter.fire(1)) : this._length++;
            }, CircularList.prototype.recycle = function() {
                if (this._length !== this._maxLength) throw new Error("Can only recycle when the buffer is full");
                return this._startIndex = ++this._startIndex % this._maxLength, this.onTrimEmitter.fire(1), 
                this._array[this._getCyclicIndex(this._length - 1)];
            }, Object.defineProperty(CircularList.prototype, "isFull", {
                get: function() {
                    return this._length === this._maxLength;
                },
                enumerable: !0,
                configurable: !0
            }), CircularList.prototype.pop = function() {
                return this._array[this._getCyclicIndex(this._length-- - 1)];
            }, CircularList.prototype.splice = function(start, deleteCount) {
                for (var items = [], _i = 2; _i < arguments.length; _i++) items[_i - 2] = arguments[_i];
                if (deleteCount) {
                    for (var i = start; i < this._length - deleteCount; i++) this._array[this._getCyclicIndex(i)] = this._array[this._getCyclicIndex(i + deleteCount)];
                    this._length -= deleteCount;
                }
                for (i = this._length - 1; i >= start; i--) this._array[this._getCyclicIndex(i + items.length)] = this._array[this._getCyclicIndex(i)];
                for (i = 0; i < items.length; i++) this._array[this._getCyclicIndex(start + i)] = items[i];
                if (this._length + items.length > this._maxLength) {
                    var countToTrim = this._length + items.length - this._maxLength;
                    this._startIndex += countToTrim, this._length = this._maxLength, this.onTrimEmitter.fire(countToTrim);
                } else this._length += items.length;
            }, CircularList.prototype.trimStart = function(count) {
                count > this._length && (count = this._length), this._startIndex += count, this._length -= count, 
                this.onTrimEmitter.fire(count);
            }, CircularList.prototype.shiftElements = function(start, count, offset) {
                if (!(count <= 0)) {
                    if (start < 0 || start >= this._length) throw new Error("start argument out of range");
                    if (start + offset < 0) throw new Error("Cannot shift elements in list beyond index 0");
                    if (offset > 0) {
                        for (var i = count - 1; i >= 0; i--) this.set(start + i + offset, this.get(start + i));
                        var expandListBy = start + count + offset - this._length;
                        if (expandListBy > 0) for (this._length += expandListBy; this._length > this._maxLength; ) this._length--, 
                        this._startIndex++, this.onTrimEmitter.fire(1);
                    } else for (i = 0; i < count; i++) this.set(start + i + offset, this.get(start + i));
                }
            }, CircularList.prototype._getCyclicIndex = function(index) {
                return (this._startIndex + index) % this._maxLength;
            }, CircularList;
        }();
        exports.CircularList = CircularList;
    },
    "3Y3P": function(module, exports, __webpack_require__) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        });
        var SelectionModel = function() {
            function SelectionModel(_terminal) {
                this._terminal = _terminal, this.clearSelection();
            }
            return SelectionModel.prototype.clearSelection = function() {
                this.selectionStart = null, this.selectionEnd = null, this.isSelectAllActive = !1, 
                this.selectionStartLength = 0;
            }, Object.defineProperty(SelectionModel.prototype, "finalSelectionStart", {
                get: function() {
                    return this.isSelectAllActive ? [ 0, 0 ] : this.selectionEnd && this.selectionStart && this.areSelectionValuesReversed() ? this.selectionEnd : this.selectionStart;
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(SelectionModel.prototype, "finalSelectionEnd", {
                get: function() {
                    if (this.isSelectAllActive) return [ this._terminal.cols, this._terminal.buffer.ybase + this._terminal.rows - 1 ];
                    if (!this.selectionStart) return null;
                    if (!this.selectionEnd || this.areSelectionValuesReversed()) {
                        var startPlusLength = this.selectionStart[0] + this.selectionStartLength;
                        return startPlusLength > this._terminal.cols ? [ startPlusLength % this._terminal.cols, this.selectionStart[1] + Math.floor(startPlusLength / this._terminal.cols) ] : [ startPlusLength, this.selectionStart[1] ];
                    }
                    return this.selectionStartLength && this.selectionEnd[1] === this.selectionStart[1] ? [ Math.max(this.selectionStart[0] + this.selectionStartLength, this.selectionEnd[0]), this.selectionEnd[1] ] : this.selectionEnd;
                },
                enumerable: !0,
                configurable: !0
            }), SelectionModel.prototype.areSelectionValuesReversed = function() {
                var start = this.selectionStart, end = this.selectionEnd;
                return !(!start || !end) && (start[1] > end[1] || start[1] === end[1] && start[0] > end[0]);
            }, SelectionModel.prototype.onTrim = function(amount) {
                return this.selectionStart && (this.selectionStart[1] -= amount), this.selectionEnd && (this.selectionEnd[1] -= amount), 
                this.selectionEnd && this.selectionEnd[1] < 0 ? (this.clearSelection(), !0) : (this.selectionStart && this.selectionStart[1] < 0 && (this.selectionStart[1] = 0), 
                !1);
            }, SelectionModel;
        }();
        exports.SelectionModel = SelectionModel;
    },
    "4s8G": function(module, exports, __webpack_require__) {
        "use strict";
        var extendStatics, __extends = this && this.__extends || (extendStatics = function(d, b) {
            return (extendStatics = Object.setPrototypeOf || {
                __proto__: []
            } instanceof Array && function(d, b) {
                d.__proto__ = b;
            } || function(d, b) {
                for (var p in b) b.hasOwnProperty(p) && (d[p] = b[p]);
            })(d, b);
        }, function(d, b) {
            function __() {
                this.constructor = d;
            }
            extendStatics(d, b), d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, 
            new __);
        });
        Object.defineProperty(exports, "__esModule", {
            value: !0
        });
        var EscapeSequences_1 = __webpack_require__("dog+"), Charsets_1 = __webpack_require__("paPD"), CharWidth_1 = __webpack_require__("oV0L"), EscapeSequenceParser_1 = __webpack_require__("szlt"), Lifecycle_1 = __webpack_require__("4wKv"), TypedArrayUtils_1 = __webpack_require__("cxSQ"), TextDecoder_1 = __webpack_require__("ev6p"), BufferLine_1 = __webpack_require__("XMT/"), EventEmitter2_1 = __webpack_require__("Fn1x"), GLEVEL = {
            "(": 0,
            ")": 1,
            "*": 2,
            "+": 3,
            "-": 1,
            ".": 2
        }, DECRQSS = function() {
            function DECRQSS(_terminal) {
                this._terminal = _terminal, this._data = new Uint32Array(0);
            }
            return DECRQSS.prototype.hook = function(collect, params, flag) {
                this._data = new Uint32Array(0);
            }, DECRQSS.prototype.put = function(data, start, end) {
                this._data = TypedArrayUtils_1.concat(this._data, data.subarray(start, end));
            }, DECRQSS.prototype.unhook = function() {
                var data = TextDecoder_1.utf32ToString(this._data);
                switch (this._data = new Uint32Array(0), data) {
                  case '"q':
                    return this._terminal.handler(EscapeSequences_1.C0.ESC + 'P1$r0"q' + EscapeSequences_1.C0.ESC + "\\");

                  case '"p':
                    return this._terminal.handler(EscapeSequences_1.C0.ESC + 'P1$r61"p' + EscapeSequences_1.C0.ESC + "\\");

                  case "r":
                    return this._terminal.handler(EscapeSequences_1.C0.ESC + "P1$r" + (this._terminal.buffer.scrollTop + 1) + ";" + (this._terminal.buffer.scrollBottom + 1) + "r" + EscapeSequences_1.C0.ESC + "\\");

                  case "m":
                    return this._terminal.handler(EscapeSequences_1.C0.ESC + "P1$r0m" + EscapeSequences_1.C0.ESC + "\\");

                  case " q":
                    var style = {
                        block: 2,
                        underline: 4,
                        bar: 6
                    }[this._terminal.getOption("cursorStyle")];
                    return style -= this._terminal.getOption("cursorBlink"), this._terminal.handler(EscapeSequences_1.C0.ESC + "P1$r" + style + " q" + EscapeSequences_1.C0.ESC + "\\");

                  default:
                    this._terminal.error("Unknown DCS $q %s", data), this._terminal.handler(EscapeSequences_1.C0.ESC + "P0$r" + EscapeSequences_1.C0.ESC + "\\");
                }
            }, DECRQSS;
        }(), InputHandler = function(_super) {
            function InputHandler(_terminal, _parser) {
                void 0 === _parser && (_parser = new EscapeSequenceParser_1.EscapeSequenceParser);
                var _this = _super.call(this) || this;
                _this._terminal = _terminal, _this._parser = _parser, _this._parseBuffer = new Uint32Array(4096), 
                _this._stringDecoder = new TextDecoder_1.StringToUtf32, _this._utf8Decoder = new TextDecoder_1.Utf8ToUtf32, 
                _this._workCell = new BufferLine_1.CellData, _this._onCursorMove = new EventEmitter2_1.EventEmitter2, 
                _this._onData = new EventEmitter2_1.EventEmitter2, _this._onLineFeed = new EventEmitter2_1.EventEmitter2, 
                _this._onScroll = new EventEmitter2_1.EventEmitter2, _this.register(_this._parser), 
                _this._parser.setCsiHandlerFallback((function(collect, params, flag) {
                    _this._terminal.error("Unknown CSI code: ", {
                        collect: collect,
                        params: params,
                        flag: String.fromCharCode(flag)
                    });
                })), _this._parser.setEscHandlerFallback((function(collect, flag) {
                    _this._terminal.error("Unknown ESC code: ", {
                        collect: collect,
                        flag: String.fromCharCode(flag)
                    });
                })), _this._parser.setExecuteHandlerFallback((function(code) {
                    _this._terminal.error("Unknown EXECUTE code: ", {
                        code: code
                    });
                })), _this._parser.setOscHandlerFallback((function(identifier, data) {
                    _this._terminal.error("Unknown OSC code: ", {
                        identifier: identifier,
                        data: data
                    });
                })), _this._parser.setPrintHandler((function(data, start, end) {
                    return _this.print(data, start, end);
                })), _this._parser.setCsiHandler("@", (function(params, collect) {
                    return _this.insertChars(params);
                })), _this._parser.setCsiHandler("A", (function(params, collect) {
                    return _this.cursorUp(params);
                })), _this._parser.setCsiHandler("B", (function(params, collect) {
                    return _this.cursorDown(params);
                })), _this._parser.setCsiHandler("C", (function(params, collect) {
                    return _this.cursorForward(params);
                })), _this._parser.setCsiHandler("D", (function(params, collect) {
                    return _this.cursorBackward(params);
                })), _this._parser.setCsiHandler("E", (function(params, collect) {
                    return _this.cursorNextLine(params);
                })), _this._parser.setCsiHandler("F", (function(params, collect) {
                    return _this.cursorPrecedingLine(params);
                })), _this._parser.setCsiHandler("G", (function(params, collect) {
                    return _this.cursorCharAbsolute(params);
                })), _this._parser.setCsiHandler("H", (function(params, collect) {
                    return _this.cursorPosition(params);
                })), _this._parser.setCsiHandler("I", (function(params, collect) {
                    return _this.cursorForwardTab(params);
                })), _this._parser.setCsiHandler("J", (function(params, collect) {
                    return _this.eraseInDisplay(params);
                })), _this._parser.setCsiHandler("K", (function(params, collect) {
                    return _this.eraseInLine(params);
                })), _this._parser.setCsiHandler("L", (function(params, collect) {
                    return _this.insertLines(params);
                })), _this._parser.setCsiHandler("M", (function(params, collect) {
                    return _this.deleteLines(params);
                })), _this._parser.setCsiHandler("P", (function(params, collect) {
                    return _this.deleteChars(params);
                })), _this._parser.setCsiHandler("S", (function(params, collect) {
                    return _this.scrollUp(params);
                })), _this._parser.setCsiHandler("T", (function(params, collect) {
                    return _this.scrollDown(params, collect);
                })), _this._parser.setCsiHandler("X", (function(params, collect) {
                    return _this.eraseChars(params);
                })), _this._parser.setCsiHandler("Z", (function(params, collect) {
                    return _this.cursorBackwardTab(params);
                })), _this._parser.setCsiHandler("`", (function(params, collect) {
                    return _this.charPosAbsolute(params);
                })), _this._parser.setCsiHandler("a", (function(params, collect) {
                    return _this.hPositionRelative(params);
                })), _this._parser.setCsiHandler("b", (function(params, collect) {
                    return _this.repeatPrecedingCharacter(params);
                })), _this._parser.setCsiHandler("c", (function(params, collect) {
                    return _this.sendDeviceAttributes(params, collect);
                })), _this._parser.setCsiHandler("d", (function(params, collect) {
                    return _this.linePosAbsolute(params);
                })), _this._parser.setCsiHandler("e", (function(params, collect) {
                    return _this.vPositionRelative(params);
                })), _this._parser.setCsiHandler("f", (function(params, collect) {
                    return _this.hVPosition(params);
                })), _this._parser.setCsiHandler("g", (function(params, collect) {
                    return _this.tabClear(params);
                })), _this._parser.setCsiHandler("h", (function(params, collect) {
                    return _this.setMode(params, collect);
                })), _this._parser.setCsiHandler("l", (function(params, collect) {
                    return _this.resetMode(params, collect);
                })), _this._parser.setCsiHandler("m", (function(params, collect) {
                    return _this.charAttributes(params);
                })), _this._parser.setCsiHandler("n", (function(params, collect) {
                    return _this.deviceStatus(params, collect);
                })), _this._parser.setCsiHandler("p", (function(params, collect) {
                    return _this.softReset(params, collect);
                })), _this._parser.setCsiHandler("q", (function(params, collect) {
                    return _this.setCursorStyle(params, collect);
                })), _this._parser.setCsiHandler("r", (function(params, collect) {
                    return _this.setScrollRegion(params, collect);
                })), _this._parser.setCsiHandler("s", (function(params, collect) {
                    return _this.saveCursor(params);
                })), _this._parser.setCsiHandler("u", (function(params, collect) {
                    return _this.restoreCursor(params);
                })), _this._parser.setExecuteHandler(EscapeSequences_1.C0.BEL, (function() {
                    return _this.bell();
                })), _this._parser.setExecuteHandler(EscapeSequences_1.C0.LF, (function() {
                    return _this.lineFeed();
                })), _this._parser.setExecuteHandler(EscapeSequences_1.C0.VT, (function() {
                    return _this.lineFeed();
                })), _this._parser.setExecuteHandler(EscapeSequences_1.C0.FF, (function() {
                    return _this.lineFeed();
                })), _this._parser.setExecuteHandler(EscapeSequences_1.C0.CR, (function() {
                    return _this.carriageReturn();
                })), _this._parser.setExecuteHandler(EscapeSequences_1.C0.BS, (function() {
                    return _this.backspace();
                })), _this._parser.setExecuteHandler(EscapeSequences_1.C0.HT, (function() {
                    return _this.tab();
                })), _this._parser.setExecuteHandler(EscapeSequences_1.C0.SO, (function() {
                    return _this.shiftOut();
                })), _this._parser.setExecuteHandler(EscapeSequences_1.C0.SI, (function() {
                    return _this.shiftIn();
                })), _this._parser.setExecuteHandler(EscapeSequences_1.C1.IND, (function() {
                    return _this.index();
                })), _this._parser.setExecuteHandler(EscapeSequences_1.C1.NEL, (function() {
                    return _this.nextLine();
                })), _this._parser.setExecuteHandler(EscapeSequences_1.C1.HTS, (function() {
                    return _this.tabSet();
                })), _this._parser.setOscHandler(0, (function(data) {
                    return _this.setTitle(data);
                })), _this._parser.setOscHandler(2, (function(data) {
                    return _this.setTitle(data);
                })), _this._parser.setEscHandler("7", (function() {
                    return _this.saveCursor([]);
                })), _this._parser.setEscHandler("8", (function() {
                    return _this.restoreCursor([]);
                })), _this._parser.setEscHandler("D", (function() {
                    return _this.index();
                })), _this._parser.setEscHandler("E", (function() {
                    return _this.nextLine();
                })), _this._parser.setEscHandler("H", (function() {
                    return _this.tabSet();
                })), _this._parser.setEscHandler("M", (function() {
                    return _this.reverseIndex();
                })), _this._parser.setEscHandler("=", (function() {
                    return _this.keypadApplicationMode();
                })), _this._parser.setEscHandler(">", (function() {
                    return _this.keypadNumericMode();
                })), _this._parser.setEscHandler("c", (function() {
                    return _this.reset();
                })), _this._parser.setEscHandler("n", (function() {
                    return _this.setgLevel(2);
                })), _this._parser.setEscHandler("o", (function() {
                    return _this.setgLevel(3);
                })), _this._parser.setEscHandler("|", (function() {
                    return _this.setgLevel(3);
                })), _this._parser.setEscHandler("}", (function() {
                    return _this.setgLevel(2);
                })), _this._parser.setEscHandler("~", (function() {
                    return _this.setgLevel(1);
                })), _this._parser.setEscHandler("%@", (function() {
                    return _this.selectDefaultCharset();
                })), _this._parser.setEscHandler("%G", (function() {
                    return _this.selectDefaultCharset();
                }));
                var _loop_1 = function(flag) {
                    this_1._parser.setEscHandler("(" + flag, (function() {
                        return _this.selectCharset("(" + flag);
                    })), this_1._parser.setEscHandler(")" + flag, (function() {
                        return _this.selectCharset(")" + flag);
                    })), this_1._parser.setEscHandler("*" + flag, (function() {
                        return _this.selectCharset("*" + flag);
                    })), this_1._parser.setEscHandler("+" + flag, (function() {
                        return _this.selectCharset("+" + flag);
                    })), this_1._parser.setEscHandler("-" + flag, (function() {
                        return _this.selectCharset("-" + flag);
                    })), this_1._parser.setEscHandler("." + flag, (function() {
                        return _this.selectCharset("." + flag);
                    })), this_1._parser.setEscHandler("/" + flag, (function() {
                        return _this.selectCharset("/" + flag);
                    }));
                }, this_1 = this;
                for (var flag in Charsets_1.CHARSETS) _loop_1(flag);
                return _this._parser.setErrorHandler((function(state) {
                    return _this._terminal.error("Parsing error: ", state), state;
                })), _this._parser.setDcsHandler("$q", new DECRQSS(_this._terminal)), _this;
            }
            return __extends(InputHandler, _super), Object.defineProperty(InputHandler.prototype, "onCursorMove", {
                get: function() {
                    return this._onCursorMove.event;
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(InputHandler.prototype, "onData", {
                get: function() {
                    return this._onData.event;
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(InputHandler.prototype, "onLineFeed", {
                get: function() {
                    return this._onLineFeed.event;
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(InputHandler.prototype, "onScroll", {
                get: function() {
                    return this._onScroll.event;
                },
                enumerable: !0,
                configurable: !0
            }), InputHandler.prototype.dispose = function() {
                _super.prototype.dispose.call(this), this._terminal = null;
            }, InputHandler.prototype.parse = function(data) {
                if (this._terminal) {
                    var buffer = this._terminal.buffer, cursorStartX = buffer.x, cursorStartY = buffer.y;
                    this._terminal.debug && this._terminal.log("data: " + data), this._parseBuffer.length < data.length && (this._parseBuffer = new Uint32Array(data.length)), 
                    this._parser.parse(this._parseBuffer, this._stringDecoder.decode(data, this._parseBuffer)), 
                    (buffer = this._terminal.buffer).x === cursorStartX && buffer.y === cursorStartY || this._onCursorMove.fire();
                }
            }, InputHandler.prototype.parseUtf8 = function(data) {
                if (this._terminal) {
                    var buffer = this._terminal.buffer, cursorStartX = buffer.x, cursorStartY = buffer.y;
                    this._terminal.debug && this._terminal.log("data: " + data), this._parseBuffer.length < data.length && (this._parseBuffer = new Uint32Array(data.length)), 
                    this._parser.parse(this._parseBuffer, this._utf8Decoder.decode(data, this._parseBuffer)), 
                    (buffer = this._terminal.buffer).x === cursorStartX && buffer.y === cursorStartY || this._terminal.emit("cursormove");
                }
            }, InputHandler.prototype.print = function(data, start, end) {
                var code, chWidth, buffer = this._terminal.buffer, charset = this._terminal.charset, screenReaderMode = this._terminal.options.screenReaderMode, cols = this._terminal.cols, wraparoundMode = this._terminal.wraparoundMode, insertMode = this._terminal.insertMode, curAttr = this._terminal.curAttrData, bufferRow = buffer.lines.get(buffer.y + buffer.ybase);
                this._terminal.updateRange(buffer.y);
                for (var pos = start; pos < end; ++pos) {
                    if (chWidth = CharWidth_1.wcwidth(code = data[pos]), code < 127 && charset) {
                        var ch = charset[String.fromCharCode(code)];
                        ch && (code = ch.charCodeAt(0));
                    }
                    if (screenReaderMode && this._terminal.emit("a11y.char", TextDecoder_1.stringFromCodePoint(code)), 
                    chWidth || !buffer.x) {
                        if (buffer.x + chWidth - 1 >= cols) if (wraparoundMode) buffer.x = 0, buffer.y++, 
                        buffer.y > buffer.scrollBottom ? (buffer.y--, this._terminal.scroll(!0)) : buffer.lines.get(buffer.y).isWrapped = !0, 
                        bufferRow = buffer.lines.get(buffer.y + buffer.ybase); else if (2 === chWidth) continue;
                        if (insertMode && (bufferRow.insertCells(buffer.x, chWidth, buffer.getNullCell(curAttr)), 
                        2 === bufferRow.getWidth(cols - 1) && bufferRow.setCellFromCodePoint(cols - 1, BufferLine_1.NULL_CELL_CODE, BufferLine_1.NULL_CELL_WIDTH, curAttr.fg, curAttr.bg)), 
                        bufferRow.setCellFromCodePoint(buffer.x++, code, chWidth, curAttr.fg, curAttr.bg), 
                        chWidth > 0) for (;--chWidth; ) bufferRow.setCellFromCodePoint(buffer.x++, 0, 0, curAttr.fg, curAttr.bg);
                    } else bufferRow.getWidth(buffer.x - 1) ? bufferRow.addCodepointToCell(buffer.x - 1, code) : bufferRow.addCodepointToCell(buffer.x - 2, code);
                }
                this._terminal.updateRange(buffer.y);
            }, InputHandler.prototype.addCsiHandler = function(flag, callback) {
                return this._parser.addCsiHandler(flag, callback);
            }, InputHandler.prototype.addOscHandler = function(ident, callback) {
                return this._parser.addOscHandler(ident, callback);
            }, InputHandler.prototype.bell = function() {
                this._terminal.bell();
            }, InputHandler.prototype.lineFeed = function() {
                var buffer = this._terminal.buffer;
                this._terminal.options.convertEol && (buffer.x = 0), buffer.y++, buffer.y > buffer.scrollBottom && (buffer.y--, 
                this._terminal.scroll()), buffer.x >= this._terminal.cols && buffer.x--, this._onLineFeed.fire();
            }, InputHandler.prototype.carriageReturn = function() {
                this._terminal.buffer.x = 0;
            }, InputHandler.prototype.backspace = function() {
                this._terminal.buffer.x > 0 && this._terminal.buffer.x--;
            }, InputHandler.prototype.tab = function() {
                var originalX = this._terminal.buffer.x;
                this._terminal.buffer.x = this._terminal.buffer.nextStop(), this._terminal.options.screenReaderMode && this._terminal.emit("a11y.tab", this._terminal.buffer.x - originalX);
            }, InputHandler.prototype.shiftOut = function() {
                this._terminal.setgLevel(1);
            }, InputHandler.prototype.shiftIn = function() {
                this._terminal.setgLevel(0);
            }, InputHandler.prototype.insertChars = function(params) {
                this._terminal.buffer.lines.get(this._terminal.buffer.y + this._terminal.buffer.ybase).insertCells(this._terminal.buffer.x, params[0] || 1, this._terminal.buffer.getNullCell(this._terminal.eraseAttrData())), 
                this._terminal.updateRange(this._terminal.buffer.y);
            }, InputHandler.prototype.cursorUp = function(params) {
                var param = params[0];
                param < 1 && (param = 1), this._terminal.buffer.y -= param, this._terminal.buffer.y < 0 && (this._terminal.buffer.y = 0);
            }, InputHandler.prototype.cursorDown = function(params) {
                var param = params[0];
                param < 1 && (param = 1), this._terminal.buffer.y += param, this._terminal.buffer.y >= this._terminal.rows && (this._terminal.buffer.y = this._terminal.rows - 1), 
                this._terminal.buffer.x >= this._terminal.cols && this._terminal.buffer.x--;
            }, InputHandler.prototype.cursorForward = function(params) {
                var param = params[0];
                param < 1 && (param = 1), this._terminal.buffer.x += param, this._terminal.buffer.x >= this._terminal.cols && (this._terminal.buffer.x = this._terminal.cols - 1);
            }, InputHandler.prototype.cursorBackward = function(params) {
                var param = params[0];
                param < 1 && (param = 1), this._terminal.buffer.x >= this._terminal.cols && this._terminal.buffer.x--, 
                this._terminal.buffer.x -= param, this._terminal.buffer.x < 0 && (this._terminal.buffer.x = 0);
            }, InputHandler.prototype.cursorNextLine = function(params) {
                var param = params[0];
                param < 1 && (param = 1), this._terminal.buffer.y += param, this._terminal.buffer.y >= this._terminal.rows && (this._terminal.buffer.y = this._terminal.rows - 1), 
                this._terminal.buffer.x = 0;
            }, InputHandler.prototype.cursorPrecedingLine = function(params) {
                var param = params[0];
                param < 1 && (param = 1), this._terminal.buffer.y -= param, this._terminal.buffer.y < 0 && (this._terminal.buffer.y = 0), 
                this._terminal.buffer.x = 0;
            }, InputHandler.prototype.cursorCharAbsolute = function(params) {
                var param = params[0];
                param < 1 && (param = 1), this._terminal.buffer.x = param - 1;
            }, InputHandler.prototype.cursorPosition = function(params) {
                var col, row = params[0] - 1;
                row < 0 ? row = 0 : row >= this._terminal.rows && (row = this._terminal.rows - 1), 
                (col = params.length >= 2 ? params[1] - 1 : 0) < 0 ? col = 0 : col >= this._terminal.cols && (col = this._terminal.cols - 1), 
                this._terminal.buffer.x = col, this._terminal.buffer.y = row;
            }, InputHandler.prototype.cursorForwardTab = function(params) {
                for (var param = params[0] || 1; param--; ) this._terminal.buffer.x = this._terminal.buffer.nextStop();
            }, InputHandler.prototype._eraseInBufferLine = function(y, start, end, clearWrap) {
                void 0 === clearWrap && (clearWrap = !1);
                var line = this._terminal.buffer.lines.get(this._terminal.buffer.ybase + y);
                line.replaceCells(start, end, this._terminal.buffer.getNullCell(this._terminal.eraseAttrData())), 
                clearWrap && (line.isWrapped = !1);
            }, InputHandler.prototype._resetBufferLine = function(y) {
                this._eraseInBufferLine(y, 0, this._terminal.cols, !0);
            }, InputHandler.prototype.eraseInDisplay = function(params) {
                var j;
                switch (params[0]) {
                  case 0:
                    for (this._terminal.updateRange(j = this._terminal.buffer.y), this._eraseInBufferLine(j++, this._terminal.buffer.x, this._terminal.cols, 0 === this._terminal.buffer.x); j < this._terminal.rows; j++) this._resetBufferLine(j);
                    this._terminal.updateRange(j);
                    break;

                  case 1:
                    for (this._terminal.updateRange(j = this._terminal.buffer.y), this._eraseInBufferLine(j, 0, this._terminal.buffer.x + 1, !0), 
                    this._terminal.buffer.x + 1 >= this._terminal.cols && (this._terminal.buffer.lines.get(j + 1).isWrapped = !1); j--; ) this._resetBufferLine(j);
                    this._terminal.updateRange(0);
                    break;

                  case 2:
                    for (this._terminal.updateRange((j = this._terminal.rows) - 1); j--; ) this._resetBufferLine(j);
                    this._terminal.updateRange(0);
                    break;

                  case 3:
                    var scrollBackSize = this._terminal.buffer.lines.length - this._terminal.rows;
                    scrollBackSize > 0 && (this._terminal.buffer.lines.trimStart(scrollBackSize), this._terminal.buffer.ybase = Math.max(this._terminal.buffer.ybase - scrollBackSize, 0), 
                    this._terminal.buffer.ydisp = Math.max(this._terminal.buffer.ydisp - scrollBackSize, 0), 
                    this._onScroll.fire(0));
                }
            }, InputHandler.prototype.eraseInLine = function(params) {
                switch (params[0]) {
                  case 0:
                    this._eraseInBufferLine(this._terminal.buffer.y, this._terminal.buffer.x, this._terminal.cols);
                    break;

                  case 1:
                    this._eraseInBufferLine(this._terminal.buffer.y, 0, this._terminal.buffer.x + 1);
                    break;

                  case 2:
                    this._eraseInBufferLine(this._terminal.buffer.y, 0, this._terminal.cols);
                }
                this._terminal.updateRange(this._terminal.buffer.y);
            }, InputHandler.prototype.insertLines = function(params) {
                var param = params[0];
                param < 1 && (param = 1);
                for (var buffer = this._terminal.buffer, row = buffer.y + buffer.ybase, scrollBottomAbsolute = this._terminal.rows - 1 + buffer.ybase - (this._terminal.rows - 1 - buffer.scrollBottom) + 1; param--; ) buffer.lines.splice(scrollBottomAbsolute - 1, 1), 
                buffer.lines.splice(row, 0, buffer.getBlankLine(this._terminal.eraseAttrData()));
                this._terminal.updateRange(buffer.y), this._terminal.updateRange(buffer.scrollBottom);
            }, InputHandler.prototype.deleteLines = function(params) {
                var param = params[0];
                param < 1 && (param = 1);
                var j, buffer = this._terminal.buffer, row = buffer.y + buffer.ybase;
                for (j = this._terminal.rows - 1 + buffer.ybase - (j = this._terminal.rows - 1 - buffer.scrollBottom); param--; ) buffer.lines.splice(row, 1), 
                buffer.lines.splice(j, 0, buffer.getBlankLine(this._terminal.eraseAttrData()));
                this._terminal.updateRange(buffer.y), this._terminal.updateRange(buffer.scrollBottom);
            }, InputHandler.prototype.deleteChars = function(params) {
                this._terminal.buffer.lines.get(this._terminal.buffer.y + this._terminal.buffer.ybase).deleteCells(this._terminal.buffer.x, params[0] || 1, this._terminal.buffer.getNullCell(this._terminal.eraseAttrData())), 
                this._terminal.updateRange(this._terminal.buffer.y);
            }, InputHandler.prototype.scrollUp = function(params) {
                for (var param = params[0] || 1, buffer = this._terminal.buffer; param--; ) buffer.lines.splice(buffer.ybase + buffer.scrollTop, 1), 
                buffer.lines.splice(buffer.ybase + buffer.scrollBottom, 0, buffer.getBlankLine(BufferLine_1.DEFAULT_ATTR_DATA));
                this._terminal.updateRange(buffer.scrollTop), this._terminal.updateRange(buffer.scrollBottom);
            }, InputHandler.prototype.scrollDown = function(params, collect) {
                if (params.length < 2 && !collect) {
                    for (var param = params[0] || 1, buffer = this._terminal.buffer; param--; ) buffer.lines.splice(buffer.ybase + buffer.scrollBottom, 1), 
                    buffer.lines.splice(buffer.ybase + buffer.scrollTop, 0, buffer.getBlankLine(BufferLine_1.DEFAULT_ATTR_DATA));
                    this._terminal.updateRange(buffer.scrollTop), this._terminal.updateRange(buffer.scrollBottom);
                }
            }, InputHandler.prototype.eraseChars = function(params) {
                this._terminal.buffer.lines.get(this._terminal.buffer.y + this._terminal.buffer.ybase).replaceCells(this._terminal.buffer.x, this._terminal.buffer.x + (params[0] || 1), this._terminal.buffer.getNullCell(this._terminal.eraseAttrData()));
            }, InputHandler.prototype.cursorBackwardTab = function(params) {
                for (var param = params[0] || 1, buffer = this._terminal.buffer; param--; ) buffer.x = buffer.prevStop();
            }, InputHandler.prototype.charPosAbsolute = function(params) {
                var param = params[0];
                param < 1 && (param = 1), this._terminal.buffer.x = param - 1, this._terminal.buffer.x >= this._terminal.cols && (this._terminal.buffer.x = this._terminal.cols - 1);
            }, InputHandler.prototype.hPositionRelative = function(params) {
                var param = params[0];
                param < 1 && (param = 1), this._terminal.buffer.x += param, this._terminal.buffer.x >= this._terminal.cols && (this._terminal.buffer.x = this._terminal.cols - 1);
            }, InputHandler.prototype.repeatPrecedingCharacter = function(params) {
                var buffer = this._terminal.buffer, line = buffer.lines.get(buffer.ybase + buffer.y);
                line.loadCell(buffer.x - 1, this._workCell), line.replaceCells(buffer.x, buffer.x + (params[0] || 1), void 0 !== this._workCell.content ? this._workCell : buffer.getNullCell(BufferLine_1.DEFAULT_ATTR_DATA));
            }, InputHandler.prototype.sendDeviceAttributes = function(params, collect) {
                params[0] > 0 || (collect ? ">" === collect && (this._terminal.is("xterm") ? this._terminal.handler(EscapeSequences_1.C0.ESC + "[>0;276;0c") : this._terminal.is("rxvt-unicode") ? this._terminal.handler(EscapeSequences_1.C0.ESC + "[>85;95;0c") : this._terminal.is("linux") ? this._terminal.handler(params[0] + "c") : this._terminal.is("screen") && this._terminal.handler(EscapeSequences_1.C0.ESC + "[>83;40003;0c")) : this._terminal.is("xterm") || this._terminal.is("rxvt-unicode") || this._terminal.is("screen") ? this._terminal.handler(EscapeSequences_1.C0.ESC + "[?1;2c") : this._terminal.is("linux") && this._terminal.handler(EscapeSequences_1.C0.ESC + "[?6c"));
            }, InputHandler.prototype.linePosAbsolute = function(params) {
                var param = params[0];
                param < 1 && (param = 1), this._terminal.buffer.y = param - 1, this._terminal.buffer.y >= this._terminal.rows && (this._terminal.buffer.y = this._terminal.rows - 1);
            }, InputHandler.prototype.vPositionRelative = function(params) {
                var param = params[0];
                param < 1 && (param = 1), this._terminal.buffer.y += param, this._terminal.buffer.y >= this._terminal.rows && (this._terminal.buffer.y = this._terminal.rows - 1), 
                this._terminal.buffer.x >= this._terminal.cols && this._terminal.buffer.x--;
            }, InputHandler.prototype.hVPosition = function(params) {
                params[0] < 1 && (params[0] = 1), params[1] < 1 && (params[1] = 1), this._terminal.buffer.y = params[0] - 1, 
                this._terminal.buffer.y >= this._terminal.rows && (this._terminal.buffer.y = this._terminal.rows - 1), 
                this._terminal.buffer.x = params[1] - 1, this._terminal.buffer.x >= this._terminal.cols && (this._terminal.buffer.x = this._terminal.cols - 1);
            }, InputHandler.prototype.tabClear = function(params) {
                var param = params[0];
                param <= 0 ? delete this._terminal.buffer.tabs[this._terminal.buffer.x] : 3 === param && (this._terminal.buffer.tabs = {});
            }, InputHandler.prototype.setMode = function(params, collect) {
                if (params.length > 1) for (var i = 0; i < params.length; i++) this.setMode([ params[i] ]); else if (collect) {
                    if ("?" === collect) switch (params[0]) {
                      case 1:
                        this._terminal.applicationCursor = !0;
                        break;

                      case 2:
                        this._terminal.setgCharset(0, Charsets_1.DEFAULT_CHARSET), this._terminal.setgCharset(1, Charsets_1.DEFAULT_CHARSET), 
                        this._terminal.setgCharset(2, Charsets_1.DEFAULT_CHARSET), this._terminal.setgCharset(3, Charsets_1.DEFAULT_CHARSET);
                        break;

                      case 3:
                        this._terminal.savedCols = this._terminal.cols, this._terminal.resize(132, this._terminal.rows);
                        break;

                      case 6:
                        this._terminal.originMode = !0;
                        break;

                      case 7:
                        this._terminal.wraparoundMode = !0;
                        break;

                      case 12:
                        break;

                      case 66:
                        this._terminal.log("Serial port requested application keypad."), this._terminal.applicationKeypad = !0, 
                        this._terminal.viewport && this._terminal.viewport.syncScrollArea();
                        break;

                      case 9:
                      case 1e3:
                      case 1002:
                      case 1003:
                        this._terminal.x10Mouse = 9 === params[0], this._terminal.vt200Mouse = 1e3 === params[0], 
                        this._terminal.normalMouse = params[0] > 1e3, this._terminal.mouseEvents = !0, this._terminal.element && this._terminal.element.classList.add("enable-mouse-events"), 
                        this._terminal.selectionManager && this._terminal.selectionManager.disable(), this._terminal.log("Binding to mouse events.");
                        break;

                      case 1004:
                        this._terminal.sendFocus = !0;
                        break;

                      case 1005:
                        this._terminal.utfMouse = !0;
                        break;

                      case 1006:
                        this._terminal.sgrMouse = !0;
                        break;

                      case 1015:
                        this._terminal.urxvtMouse = !0;
                        break;

                      case 25:
                        this._terminal.cursorHidden = !1;
                        break;

                      case 1048:
                        this.saveCursor(params);
                        break;

                      case 1049:
                        this.saveCursor(params);

                      case 47:
                      case 1047:
                        this._terminal.buffers.activateAltBuffer(this._terminal.eraseAttrData()), this._terminal.refresh(0, this._terminal.rows - 1), 
                        this._terminal.viewport && this._terminal.viewport.syncScrollArea(), this._terminal.showCursor();
                        break;

                      case 2004:
                        this._terminal.bracketedPasteMode = !0;
                    }
                } else switch (params[0]) {
                  case 4:
                    this._terminal.insertMode = !0;
                }
            }, InputHandler.prototype.resetMode = function(params, collect) {
                if (params.length > 1) for (var i = 0; i < params.length; i++) this.resetMode([ params[i] ]); else if (collect) {
                    if ("?" === collect) switch (params[0]) {
                      case 1:
                        this._terminal.applicationCursor = !1;
                        break;

                      case 3:
                        132 === this._terminal.cols && this._terminal.savedCols && this._terminal.resize(this._terminal.savedCols, this._terminal.rows), 
                        delete this._terminal.savedCols;
                        break;

                      case 6:
                        this._terminal.originMode = !1;
                        break;

                      case 7:
                        this._terminal.wraparoundMode = !1;
                        break;

                      case 12:
                        break;

                      case 66:
                        this._terminal.log("Switching back to normal keypad."), this._terminal.applicationKeypad = !1, 
                        this._terminal.viewport && this._terminal.viewport.syncScrollArea();
                        break;

                      case 9:
                      case 1e3:
                      case 1002:
                      case 1003:
                        this._terminal.x10Mouse = !1, this._terminal.vt200Mouse = !1, this._terminal.normalMouse = !1, 
                        this._terminal.mouseEvents = !1, this._terminal.element && this._terminal.element.classList.remove("enable-mouse-events"), 
                        this._terminal.selectionManager && this._terminal.selectionManager.enable();
                        break;

                      case 1004:
                        this._terminal.sendFocus = !1;
                        break;

                      case 1005:
                        this._terminal.utfMouse = !1;
                        break;

                      case 1006:
                        this._terminal.sgrMouse = !1;
                        break;

                      case 1015:
                        this._terminal.urxvtMouse = !1;
                        break;

                      case 25:
                        this._terminal.cursorHidden = !0;
                        break;

                      case 1048:
                        this.restoreCursor(params);
                        break;

                      case 1049:
                      case 47:
                      case 1047:
                        this._terminal.buffers.activateNormalBuffer(), 1049 === params[0] && this.restoreCursor(params), 
                        this._terminal.refresh(0, this._terminal.rows - 1), this._terminal.viewport && this._terminal.viewport.syncScrollArea(), 
                        this._terminal.showCursor();
                        break;

                      case 2004:
                        this._terminal.bracketedPasteMode = !1;
                    }
                } else switch (params[0]) {
                  case 4:
                    this._terminal.insertMode = !1;
                }
            }, InputHandler.prototype.charAttributes = function(params) {
                if (1 === params.length && 0 === params[0]) return this._terminal.curAttrData.fg = BufferLine_1.DEFAULT_ATTR_DATA.fg, 
                void (this._terminal.curAttrData.bg = BufferLine_1.DEFAULT_ATTR_DATA.bg);
                for (var p, l = params.length, attr = this._terminal.curAttrData, i = 0; i < l; i++) (p = params[i]) >= 30 && p <= 37 ? (attr.fg &= -50331904, 
                attr.fg |= 16777216 | p - 30) : p >= 40 && p <= 47 ? (attr.bg &= -50331904, attr.bg |= 16777216 | p - 40) : p >= 90 && p <= 97 ? (attr.fg &= -50331904, 
                attr.fg |= 16777224 | p - 90) : p >= 100 && p <= 107 ? (attr.bg &= -50331904, attr.bg |= 16777224 | p - 100) : 0 === p ? (attr.fg = BufferLine_1.DEFAULT_ATTR_DATA.fg, 
                attr.bg = BufferLine_1.DEFAULT_ATTR_DATA.bg) : 1 === p ? attr.fg |= 134217728 : 3 === p ? attr.bg |= 67108864 : 4 === p ? attr.fg |= 268435456 : 5 === p ? attr.fg |= 536870912 : 7 === p ? attr.fg |= 67108864 : 8 === p ? attr.fg |= 1073741824 : 2 === p ? attr.bg |= 134217728 : 22 === p ? (attr.fg &= -134217729, 
                attr.bg &= -134217729) : 23 === p ? attr.bg &= -67108865 : 24 === p ? attr.fg &= -268435457 : 25 === p ? attr.fg &= -536870913 : 27 === p ? attr.fg &= -67108865 : 28 === p ? attr.fg &= -1073741825 : 39 === p ? (attr.fg &= -67108864, 
                attr.fg |= 16777215 & BufferLine_1.DEFAULT_ATTR_DATA.fg) : 49 === p ? (attr.bg &= -67108864, 
                attr.bg |= 16777215 & BufferLine_1.DEFAULT_ATTR_DATA.bg) : 38 === p ? 2 === params[i + 1] ? (i += 2, 
                attr.fg |= 50331648, attr.fg &= -16777216, attr.fg |= BufferLine_1.AttributeData.fromColorRGB([ params[i], params[i + 1], params[i + 2] ]), 
                i += 2) : 5 === params[i + 1] && (p = 255 & params[i += 2], attr.fg &= -50331904, 
                attr.fg |= 33554432 | p) : 48 === p ? 2 === params[i + 1] ? (i += 2, attr.bg |= 50331648, 
                attr.bg &= -16777216, attr.bg |= BufferLine_1.AttributeData.fromColorRGB([ params[i], params[i + 1], params[i + 2] ]), 
                i += 2) : 5 === params[i + 1] && (p = 255 & params[i += 2], attr.bg &= -50331904, 
                attr.bg |= 33554432 | p) : 100 === p ? (attr.fg &= -67108864, attr.fg |= 16777215 & BufferLine_1.DEFAULT_ATTR_DATA.fg, 
                attr.bg &= -67108864, attr.bg |= 16777215 & BufferLine_1.DEFAULT_ATTR_DATA.bg) : this._terminal.error("Unknown SGR attribute: %d.", p);
            }, InputHandler.prototype.deviceStatus = function(params, collect) {
                if (collect) {
                    if ("?" === collect) switch (params[0]) {
                      case 6:
                        this._onData.fire(EscapeSequences_1.C0.ESC + "[?" + (this._terminal.buffer.y + 1) + ";" + (this._terminal.buffer.x + 1) + "R");
                    }
                } else switch (params[0]) {
                  case 5:
                    this._onData.fire(EscapeSequences_1.C0.ESC + "[0n");
                    break;

                  case 6:
                    this._onData.fire(EscapeSequences_1.C0.ESC + "[" + (this._terminal.buffer.y + 1) + ";" + (this._terminal.buffer.x + 1) + "R");
                }
            }, InputHandler.prototype.softReset = function(params, collect) {
                "!" === collect && (this._terminal.cursorHidden = !1, this._terminal.insertMode = !1, 
                this._terminal.originMode = !1, this._terminal.wraparoundMode = !0, this._terminal.applicationKeypad = !1, 
                this._terminal.viewport && this._terminal.viewport.syncScrollArea(), this._terminal.applicationCursor = !1, 
                this._terminal.buffer.scrollTop = 0, this._terminal.buffer.scrollBottom = this._terminal.rows - 1, 
                this._terminal.curAttrData = BufferLine_1.DEFAULT_ATTR_DATA.clone(), this._terminal.buffer.x = this._terminal.buffer.y = 0, 
                this._terminal.charset = null, this._terminal.glevel = 0, this._terminal.charsets = [ null ]);
            }, InputHandler.prototype.setCursorStyle = function(params, collect) {
                if (" " === collect) {
                    var param = params[0] < 1 ? 1 : params[0];
                    switch (param) {
                      case 1:
                      case 2:
                        this._terminal.setOption("cursorStyle", "block");
                        break;

                      case 3:
                      case 4:
                        this._terminal.setOption("cursorStyle", "underline");
                        break;

                      case 5:
                      case 6:
                        this._terminal.setOption("cursorStyle", "bar");
                    }
                    this._terminal.setOption("cursorBlink", param % 2 == 1);
                }
            }, InputHandler.prototype.setScrollRegion = function(params, collect) {
                collect || (this._terminal.buffer.scrollTop = (params[0] || 1) - 1, this._terminal.buffer.scrollBottom = (params[1] && params[1] <= this._terminal.rows ? params[1] : this._terminal.rows) - 1, 
                this._terminal.buffer.x = 0, this._terminal.buffer.y = 0);
            }, InputHandler.prototype.saveCursor = function(params) {
                this._terminal.buffer.savedX = this._terminal.buffer.x, this._terminal.buffer.savedY = this._terminal.buffer.y, 
                this._terminal.buffer.savedCurAttrData.fg = this._terminal.curAttrData.fg, this._terminal.buffer.savedCurAttrData.bg = this._terminal.curAttrData.bg;
            }, InputHandler.prototype.restoreCursor = function(params) {
                this._terminal.buffer.x = this._terminal.buffer.savedX || 0, this._terminal.buffer.y = this._terminal.buffer.savedY || 0, 
                this._terminal.curAttrData.fg = this._terminal.buffer.savedCurAttrData.fg, this._terminal.curAttrData.bg = this._terminal.buffer.savedCurAttrData.bg;
            }, InputHandler.prototype.setTitle = function(data) {
                this._terminal.handleTitle(data);
            }, InputHandler.prototype.nextLine = function() {
                this._terminal.buffer.x = 0, this.index();
            }, InputHandler.prototype.keypadApplicationMode = function() {
                this._terminal.log("Serial port requested application keypad."), this._terminal.applicationKeypad = !0, 
                this._terminal.viewport && this._terminal.viewport.syncScrollArea();
            }, InputHandler.prototype.keypadNumericMode = function() {
                this._terminal.log("Switching back to normal keypad."), this._terminal.applicationKeypad = !1, 
                this._terminal.viewport && this._terminal.viewport.syncScrollArea();
            }, InputHandler.prototype.selectDefaultCharset = function() {
                this._terminal.setgLevel(0), this._terminal.setgCharset(0, Charsets_1.DEFAULT_CHARSET);
            }, InputHandler.prototype.selectCharset = function(collectAndFlag) {
                2 === collectAndFlag.length ? "/" !== collectAndFlag[0] && this._terminal.setgCharset(GLEVEL[collectAndFlag[0]], Charsets_1.CHARSETS[collectAndFlag[1]] || Charsets_1.DEFAULT_CHARSET) : this.selectDefaultCharset();
            }, InputHandler.prototype.index = function() {
                this._terminal.index();
            }, InputHandler.prototype.tabSet = function() {
                this._terminal.tabSet();
            }, InputHandler.prototype.reverseIndex = function() {
                this._terminal.reverseIndex();
            }, InputHandler.prototype.reset = function() {
                this._parser.reset(), this._terminal.reset();
            }, InputHandler.prototype.setgLevel = function(level) {
                this._terminal.setgLevel(level);
            }, InputHandler;
        }(Lifecycle_1.Disposable);
        exports.InputHandler = InputHandler;
    },
    "4wKv": function(module, exports, __webpack_require__) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        });
        var Disposable = function() {
            function Disposable() {
                this._disposables = [], this._isDisposed = !1;
            }
            return Disposable.prototype.dispose = function() {
                this._isDisposed = !0, this._disposables.forEach((function(d) {
                    return d.dispose();
                })), this._disposables.length = 0;
            }, Disposable.prototype.register = function(d) {
                this._disposables.push(d);
            }, Disposable.prototype.unregister = function(d) {
                var index = this._disposables.indexOf(d);
                -1 !== index && this._disposables.splice(index, 1);
            }, Disposable;
        }();
        exports.Disposable = Disposable;
    },
    "5tIu": function(module, exports, __webpack_require__) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        });
        var isNode = "undefined" == typeof navigator, userAgent = isNode ? "node" : navigator.userAgent, platform = isNode ? "node" : navigator.platform;
        function contains(arr, el) {
            return arr.indexOf(el) >= 0;
        }
        exports.isFirefox = !!~userAgent.indexOf("Firefox"), exports.isSafari = /^((?!chrome|android).)*safari/i.test(userAgent), 
        exports.isMSIE = !!~userAgent.indexOf("MSIE") || !!~userAgent.indexOf("Trident"), 
        exports.isMac = contains([ "Macintosh", "MacIntel", "MacPPC", "Mac68K" ], platform), 
        exports.isIpad = "iPad" === platform, exports.isIphone = "iPhone" === platform, 
        exports.isMSWindows = contains([ "Windows", "Win16", "Win32", "WinCE" ], platform), 
        exports.isLinux = platform.indexOf("Linux") >= 0;
    },
    "7jsR": function(module, exports, __webpack_require__) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        });
        var EventEmitter2_1 = __webpack_require__("Fn1x"), CharMeasure = function() {
            function CharMeasure(document, parentElement) {
                this._onCharSizeChanged = new EventEmitter2_1.EventEmitter2, this._document = document, 
                this._parentElement = parentElement, this._measureElement = this._document.createElement("span"), 
                this._measureElement.classList.add("xterm-char-measure-element"), this._measureElement.textContent = "W", 
                this._measureElement.setAttribute("aria-hidden", "true"), this._parentElement.appendChild(this._measureElement);
            }
            return Object.defineProperty(CharMeasure.prototype, "onCharSizeChanged", {
                get: function() {
                    return this._onCharSizeChanged.event;
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(CharMeasure.prototype, "width", {
                get: function() {
                    return this._width;
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(CharMeasure.prototype, "height", {
                get: function() {
                    return this._height;
                },
                enumerable: !0,
                configurable: !0
            }), CharMeasure.prototype.measure = function(options) {
                this._measureElement.style.fontFamily = options.fontFamily, this._measureElement.style.fontSize = options.fontSize + "px";
                var geometry = this._measureElement.getBoundingClientRect();
                if (0 !== geometry.width && 0 !== geometry.height) {
                    var adjustedHeight = Math.ceil(geometry.height);
                    this._width === geometry.width && this._height === adjustedHeight || (this._width = geometry.width, 
                    this._height = adjustedHeight, this._onCharSizeChanged.fire());
                }
            }, CharMeasure;
        }();
        exports.CharMeasure = CharMeasure;
    },
    "7vZz": function(module, exports, __webpack_require__) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        });
        var GridCache = function() {
            function GridCache() {
                this.cache = [];
            }
            return GridCache.prototype.resize = function(width, height) {
                for (var x = 0; x < width; x++) {
                    this.cache.length <= x && this.cache.push([]);
                    for (var y = this.cache[x].length; y < height; y++) this.cache[x].push(null);
                    this.cache[x].length = height;
                }
                this.cache.length = width;
            }, GridCache.prototype.clear = function() {
                for (var x = 0; x < this.cache.length; x++) for (var y = 0; y < this.cache[x].length; y++) this.cache[x][y] = null;
            }, GridCache;
        }();
        exports.GridCache = GridCache;
    },
    "9qiJ": function(module, exports, __webpack_require__) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        });
        var Buffer_1 = __webpack_require__("MsZC"), EventEmitter2_1 = __webpack_require__("Fn1x"), BufferSet = function() {
            function BufferSet(_terminal) {
                this._terminal = _terminal, this._onBufferActivate = new EventEmitter2_1.EventEmitter2, 
                this._normal = new Buffer_1.Buffer(this._terminal, !0), this._normal.fillViewportRows(), 
                this._alt = new Buffer_1.Buffer(this._terminal, !1), this._activeBuffer = this._normal, 
                this.setupTabStops();
            }
            return Object.defineProperty(BufferSet.prototype, "onBufferActivate", {
                get: function() {
                    return this._onBufferActivate.event;
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(BufferSet.prototype, "alt", {
                get: function() {
                    return this._alt;
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(BufferSet.prototype, "active", {
                get: function() {
                    return this._activeBuffer;
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(BufferSet.prototype, "normal", {
                get: function() {
                    return this._normal;
                },
                enumerable: !0,
                configurable: !0
            }), BufferSet.prototype.activateNormalBuffer = function() {
                this._activeBuffer !== this._normal && (this._normal.x = this._alt.x, this._normal.y = this._alt.y, 
                this._alt.clear(), this._activeBuffer = this._normal, this._onBufferActivate.fire({
                    activeBuffer: this._normal,
                    inactiveBuffer: this._alt
                }));
            }, BufferSet.prototype.activateAltBuffer = function(fillAttr) {
                this._activeBuffer !== this._alt && (this._alt.fillViewportRows(fillAttr), this._alt.x = this._normal.x, 
                this._alt.y = this._normal.y, this._activeBuffer = this._alt, this._onBufferActivate.fire({
                    activeBuffer: this._alt,
                    inactiveBuffer: this._normal
                }));
            }, BufferSet.prototype.resize = function(newCols, newRows) {
                this._normal.resize(newCols, newRows), this._alt.resize(newCols, newRows);
            }, BufferSet.prototype.setupTabStops = function(i) {
                this._normal.setupTabStops(i), this._alt.setupTabStops(i);
            }, BufferSet;
        }();
        exports.BufferSet = BufferSet;
    },
    A2P1: function(module, exports, __webpack_require__) {
        "use strict";
        var extendStatics, __extends = this && this.__extends || (extendStatics = function(d, b) {
            return (extendStatics = Object.setPrototypeOf || {
                __proto__: []
            } instanceof Array && function(d, b) {
                d.__proto__ = b;
            } || function(d, b) {
                for (var p in b) b.hasOwnProperty(p) && (d[p] = b[p]);
            })(d, b);
        }, function(d, b) {
            function __() {
                this.constructor = d;
            }
            extendStatics(d, b), d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, 
            new __);
        });
        Object.defineProperty(exports, "__esModule", {
            value: !0
        });
        var BufferLine_1 = __webpack_require__("XMT/"), JoinedCellData = function(_super) {
            function JoinedCellData(firstCell, chars, width) {
                var _this = _super.call(this) || this;
                return _this.content = 0, _this.combinedData = "", _this.fg = firstCell.fg, _this.bg = firstCell.bg, 
                _this.combinedData = chars, _this._width = width, _this;
            }
            return __extends(JoinedCellData, _super), JoinedCellData.prototype.isCombined = function() {
                return 2097152;
            }, JoinedCellData.prototype.getWidth = function() {
                return this._width;
            }, JoinedCellData.prototype.getChars = function() {
                return this.combinedData;
            }, JoinedCellData.prototype.getCode = function() {
                return 2097151;
            }, JoinedCellData.prototype.setFromCharData = function(value) {
                throw new Error("not implemented");
            }, JoinedCellData.prototype.getAsCharData = function() {
                return [ this.fg, this.getChars(), this.getWidth(), this.getCode() ];
            }, JoinedCellData;
        }(BufferLine_1.AttributeData);
        exports.JoinedCellData = JoinedCellData;
        var CharacterJoinerRegistry = function() {
            function CharacterJoinerRegistry(_terminal) {
                this._terminal = _terminal, this._characterJoiners = [], this._nextCharacterJoinerId = 0, 
                this._workCell = new BufferLine_1.CellData;
            }
            return CharacterJoinerRegistry.prototype.registerCharacterJoiner = function(handler) {
                var joiner = {
                    id: this._nextCharacterJoinerId++,
                    handler: handler
                };
                return this._characterJoiners.push(joiner), joiner.id;
            }, CharacterJoinerRegistry.prototype.deregisterCharacterJoiner = function(joinerId) {
                for (var i = 0; i < this._characterJoiners.length; i++) if (this._characterJoiners[i].id === joinerId) return this._characterJoiners.splice(i, 1), 
                !0;
                return !1;
            }, CharacterJoinerRegistry.prototype.getJoinedCharacters = function(row) {
                if (0 === this._characterJoiners.length) return [];
                var line = this._terminal.buffer.lines.get(row);
                if (0 === line.length) return [];
                for (var ranges = [], lineStr = line.translateToString(!0), rangeStartColumn = 0, currentStringIndex = 0, rangeStartStringIndex = 0, rangeAttrFG = line.getFg(0), rangeAttrBG = line.getBg(0), x = 0; x < line.getTrimmedLength(); x++) if (line.loadCell(x, this._workCell), 
                0 !== this._workCell.getWidth()) {
                    if (this._workCell.fg !== rangeAttrFG || this._workCell.bg !== rangeAttrBG) {
                        if (x - rangeStartColumn > 1) for (var joinedRanges = this._getJoinedRanges(lineStr, rangeStartStringIndex, currentStringIndex, line, rangeStartColumn), i = 0; i < joinedRanges.length; i++) ranges.push(joinedRanges[i]);
                        rangeStartColumn = x, rangeStartStringIndex = currentStringIndex, rangeAttrFG = this._workCell.fg, 
                        rangeAttrBG = this._workCell.bg;
                    }
                    currentStringIndex += this._workCell.getChars().length || BufferLine_1.WHITESPACE_CELL_CHAR.length;
                }
                if (this._terminal.cols - rangeStartColumn > 1) for (joinedRanges = this._getJoinedRanges(lineStr, rangeStartStringIndex, currentStringIndex, line, rangeStartColumn), 
                i = 0; i < joinedRanges.length; i++) ranges.push(joinedRanges[i]);
                return ranges;
            }, CharacterJoinerRegistry.prototype._getJoinedRanges = function(line, startIndex, endIndex, lineData, startCol) {
                for (var text = line.substring(startIndex, endIndex), joinedRanges = this._characterJoiners[0].handler(text), i = 1; i < this._characterJoiners.length; i++) for (var joinerRanges = this._characterJoiners[i].handler(text), j = 0; j < joinerRanges.length; j++) CharacterJoinerRegistry._mergeRanges(joinedRanges, joinerRanges[j]);
                return this._stringRangesToCellRanges(joinedRanges, lineData, startCol), joinedRanges;
            }, CharacterJoinerRegistry.prototype._stringRangesToCellRanges = function(ranges, line, startCol) {
                var currentRangeIndex = 0, currentRangeStarted = !1, currentStringIndex = 0, currentRange = ranges[currentRangeIndex];
                if (currentRange) {
                    for (var x = startCol; x < this._terminal.cols; x++) {
                        var width = line.getWidth(x), length_1 = line.getString(x).length || BufferLine_1.WHITESPACE_CELL_CHAR.length;
                        if (0 !== width) {
                            if (!currentRangeStarted && currentRange[0] <= currentStringIndex && (currentRange[0] = x, 
                            currentRangeStarted = !0), currentRange[1] <= currentStringIndex) {
                                if (currentRange[1] = x, !(currentRange = ranges[++currentRangeIndex])) break;
                                currentRange[0] <= currentStringIndex ? (currentRange[0] = x, currentRangeStarted = !0) : currentRangeStarted = !1;
                            }
                            currentStringIndex += length_1;
                        }
                    }
                    currentRange && (currentRange[1] = this._terminal.cols);
                }
            }, CharacterJoinerRegistry._mergeRanges = function(ranges, newRange) {
                for (var inRange = !1, i = 0; i < ranges.length; i++) {
                    var range = ranges[i];
                    if (inRange) {
                        if (newRange[1] <= range[0]) return ranges[i - 1][1] = newRange[1], ranges;
                        if (newRange[1] <= range[1]) return ranges[i - 1][1] = Math.max(newRange[1], range[1]), 
                        ranges.splice(i, 1), inRange = !1, ranges;
                        ranges.splice(i, 1), i--;
                    } else {
                        if (newRange[1] <= range[0]) return ranges.splice(i, 0, newRange), ranges;
                        if (newRange[1] <= range[1]) return range[0] = Math.min(newRange[0], range[0]), 
                        ranges;
                        newRange[0] < range[1] && (range[0] = Math.min(newRange[0], range[0]), inRange = !0);
                    }
                }
                return inRange ? ranges[ranges.length - 1][1] = newRange[1] : ranges.push(newRange), 
                ranges;
            }, CharacterJoinerRegistry;
        }();
        exports.CharacterJoinerRegistry = CharacterJoinerRegistry;
    },
    "C+Ro": function(module, exports, __webpack_require__) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports.clone = function clone(val, depth) {
            if (void 0 === depth && (depth = 5), "object" != typeof val) return val;
            if (null === val) return null;
            var clonedObject = Array.isArray(val) ? [] : {};
            for (var key in val) clonedObject[key] = depth <= 1 ? val[key] : clone(val[key], depth - 1);
            return clonedObject;
        };
    },
    Fn1x: function(module, exports, __webpack_require__) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        });
        var EventEmitter2 = function() {
            function EventEmitter2() {
                this._listeners = [];
            }
            return Object.defineProperty(EventEmitter2.prototype, "event", {
                get: function() {
                    var _this = this;
                    return this._event || (this._event = function(listener) {
                        return _this._listeners.push(listener), {
                            dispose: function() {
                                for (var i = 0; i < _this._listeners.length; i++) if (_this._listeners[i] === listener) return void _this._listeners.splice(i, 1);
                            }
                        };
                    }), this._event;
                },
                enumerable: !0,
                configurable: !0
            }), EventEmitter2.prototype.fire = function(data) {
                for (var queue = [], i = 0; i < this._listeners.length; i++) queue.push(this._listeners[i]);
                for (i = 0; i < queue.length; i++) queue[i].call(void 0, data);
            }, EventEmitter2;
        }();
        exports.EventEmitter2 = EventEmitter2;
    },
    HBUc: function(module, exports, __webpack_require__) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        });
        var Types_1 = __webpack_require__("2+Wn"), BufferLine_1 = __webpack_require__("XMT/");
        exports.BOLD_CLASS = "xterm-bold", exports.DIM_CLASS = "xterm-dim", exports.ITALIC_CLASS = "xterm-italic", 
        exports.UNDERLINE_CLASS = "xterm-underline", exports.CURSOR_CLASS = "xterm-cursor", 
        exports.CURSOR_BLINK_CLASS = "xterm-cursor-blink", exports.CURSOR_STYLE_BLOCK_CLASS = "xterm-cursor-block", 
        exports.CURSOR_STYLE_BAR_CLASS = "xterm-cursor-bar", exports.CURSOR_STYLE_UNDERLINE_CLASS = "xterm-cursor-underline";
        var DomRendererRowFactory = function() {
            function DomRendererRowFactory(_terminalOptions, _document) {
                this._terminalOptions = _terminalOptions, this._document = _document, this._workCell = new BufferLine_1.CellData;
            }
            return DomRendererRowFactory.prototype.createRow = function(lineData, isCursorRow, cursorStyle, cursorX, cursorBlink, cellWidth, cols) {
                for (var fragment = this._document.createDocumentFragment(), lineLength = 0, x = Math.min(lineData.length, cols) - 1; x >= 0; x--) if (lineData.loadCell(x, this._workCell).getCode() !== BufferLine_1.NULL_CELL_CODE || isCursorRow && x === cursorX) {
                    lineLength = x + 1;
                    break;
                }
                for (x = 0; x < lineLength; x++) {
                    lineData.loadCell(x, this._workCell);
                    var width = this._workCell.getWidth();
                    if (0 !== width) {
                        var charElement = this._document.createElement("span");
                        if (width > 1 && (charElement.style.width = cellWidth * width + "px"), isCursorRow && x === cursorX) switch (charElement.classList.add(exports.CURSOR_CLASS), 
                        cursorBlink && charElement.classList.add(exports.CURSOR_BLINK_CLASS), cursorStyle) {
                          case "bar":
                            charElement.classList.add(exports.CURSOR_STYLE_BAR_CLASS);
                            break;

                          case "underline":
                            charElement.classList.add(exports.CURSOR_STYLE_UNDERLINE_CLASS);
                            break;

                          default:
                            charElement.classList.add(exports.CURSOR_STYLE_BLOCK_CLASS);
                        }
                        this._workCell.isBold() && this._terminalOptions.enableBold && charElement.classList.add(exports.BOLD_CLASS), 
                        this._workCell.isItalic() && charElement.classList.add(exports.ITALIC_CLASS), this._workCell.isDim() && charElement.classList.add(exports.DIM_CLASS), 
                        this._workCell.isUnderline() && charElement.classList.add(exports.UNDERLINE_CLASS), 
                        charElement.textContent = this._workCell.getChars() || BufferLine_1.WHITESPACE_CELL_CHAR;
                        var swapColor = this._workCell.isInverse();
                        if (this._workCell.isFgRGB()) {
                            var style = charElement.getAttribute("style") || "";
                            style += (swapColor ? "background-" : "") + "color:rgb(" + BufferLine_1.AttributeData.toColorRGB(this._workCell.getFgColor()).join(",") + ");", 
                            charElement.setAttribute("style", style);
                        } else if (this._workCell.isFgPalette()) {
                            var fg = this._workCell.getFgColor();
                            this._workCell.isBold() && fg < 8 && !swapColor && this._terminalOptions.enableBold && this._terminalOptions.drawBoldTextInBrightColors && (fg += 8), 
                            charElement.classList.add("xterm-" + (swapColor ? "b" : "f") + "g-" + fg);
                        } else swapColor && charElement.classList.add("xterm-bg-" + Types_1.INVERTED_DEFAULT_COLOR);
                        this._workCell.isBgRGB() ? (style = charElement.getAttribute("style") || "", style += (swapColor ? "" : "background-") + "color:rgb(" + BufferLine_1.AttributeData.toColorRGB(this._workCell.getBgColor()).join(",") + ");", 
                        charElement.setAttribute("style", style)) : this._workCell.isBgPalette() ? charElement.classList.add("xterm-" + (swapColor ? "f" : "b") + "g-" + this._workCell.getBgColor()) : swapColor && charElement.classList.add("xterm-fg-" + Types_1.INVERTED_DEFAULT_COLOR), 
                        fragment.appendChild(charElement);
                    }
                }
                return fragment;
            }, DomRendererRowFactory;
        }();
        exports.DomRendererRowFactory = DomRendererRowFactory;
    },
    HHOg: function(module, exports, __webpack_require__) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        });
        var Types_1 = __webpack_require__("J+Hc"), Types_2 = __webpack_require__("2+Wn"), CharAtlasCache_1 = __webpack_require__("T4hZ"), BufferLine_1 = __webpack_require__("XMT/"), BaseRenderLayer = function() {
            function BaseRenderLayer(_container, id, zIndex, _alpha, _colors) {
                this._container = _container, this._alpha = _alpha, this._colors = _colors, this._scaledCharWidth = 0, 
                this._scaledCharHeight = 0, this._scaledCellWidth = 0, this._scaledCellHeight = 0, 
                this._scaledCharLeft = 0, this._scaledCharTop = 0, this._currentGlyphIdentifier = {
                    chars: "",
                    code: 0,
                    bg: 0,
                    fg: 0,
                    bold: !1,
                    dim: !1,
                    italic: !1
                }, this._canvas = document.createElement("canvas"), this._canvas.classList.add("xterm-" + id + "-layer"), 
                this._canvas.style.zIndex = zIndex.toString(), this._initCanvas(), this._container.appendChild(this._canvas);
            }
            return BaseRenderLayer.prototype.dispose = function() {
                this._container.removeChild(this._canvas), this._charAtlas && this._charAtlas.dispose();
            }, BaseRenderLayer.prototype._initCanvas = function() {
                this._ctx = this._canvas.getContext("2d", {
                    alpha: this._alpha
                }), this._alpha || this.clearAll();
            }, BaseRenderLayer.prototype.onOptionsChanged = function(terminal) {}, BaseRenderLayer.prototype.onBlur = function(terminal) {}, 
            BaseRenderLayer.prototype.onFocus = function(terminal) {}, BaseRenderLayer.prototype.onCursorMove = function(terminal) {}, 
            BaseRenderLayer.prototype.onGridChanged = function(terminal, startRow, endRow) {}, 
            BaseRenderLayer.prototype.onSelectionChanged = function(terminal, start, end, columnSelectMode) {
                void 0 === columnSelectMode && (columnSelectMode = !1);
            }, BaseRenderLayer.prototype.setColors = function(terminal, colorSet) {
                this._refreshCharAtlas(terminal, colorSet);
            }, BaseRenderLayer.prototype.setTransparency = function(terminal, alpha) {
                if (alpha !== this._alpha) {
                    var oldCanvas = this._canvas;
                    this._alpha = alpha, this._canvas = this._canvas.cloneNode(), this._initCanvas(), 
                    this._container.replaceChild(this._canvas, oldCanvas), this._refreshCharAtlas(terminal, this._colors), 
                    this.onGridChanged(terminal, 0, terminal.rows - 1);
                }
            }, BaseRenderLayer.prototype._refreshCharAtlas = function(terminal, colorSet) {
                this._scaledCharWidth <= 0 && this._scaledCharHeight <= 0 || (this._charAtlas = CharAtlasCache_1.acquireCharAtlas(terminal, colorSet, this._scaledCharWidth, this._scaledCharHeight), 
                this._charAtlas.warmUp());
            }, BaseRenderLayer.prototype.resize = function(terminal, dim) {
                this._scaledCellWidth = dim.scaledCellWidth, this._scaledCellHeight = dim.scaledCellHeight, 
                this._scaledCharWidth = dim.scaledCharWidth, this._scaledCharHeight = dim.scaledCharHeight, 
                this._scaledCharLeft = dim.scaledCharLeft, this._scaledCharTop = dim.scaledCharTop, 
                this._canvas.width = dim.scaledCanvasWidth, this._canvas.height = dim.scaledCanvasHeight, 
                this._canvas.style.width = dim.canvasWidth + "px", this._canvas.style.height = dim.canvasHeight + "px", 
                this._alpha || this.clearAll(), this._refreshCharAtlas(terminal, this._colors);
            }, BaseRenderLayer.prototype.fillCells = function(x, y, width, height) {
                this._ctx.fillRect(x * this._scaledCellWidth, y * this._scaledCellHeight, width * this._scaledCellWidth, height * this._scaledCellHeight);
            }, BaseRenderLayer.prototype.fillBottomLineAtCells = function(x, y, width) {
                void 0 === width && (width = 1), this._ctx.fillRect(x * this._scaledCellWidth, (y + 1) * this._scaledCellHeight - window.devicePixelRatio - 1, width * this._scaledCellWidth, window.devicePixelRatio);
            }, BaseRenderLayer.prototype.fillLeftLineAtCell = function(x, y) {
                this._ctx.fillRect(x * this._scaledCellWidth, y * this._scaledCellHeight, window.devicePixelRatio, this._scaledCellHeight);
            }, BaseRenderLayer.prototype.strokeRectAtCell = function(x, y, width, height) {
                this._ctx.lineWidth = window.devicePixelRatio, this._ctx.strokeRect(x * this._scaledCellWidth + window.devicePixelRatio / 2, y * this._scaledCellHeight + window.devicePixelRatio / 2, width * this._scaledCellWidth - window.devicePixelRatio, height * this._scaledCellHeight - window.devicePixelRatio);
            }, BaseRenderLayer.prototype.clearAll = function() {
                this._alpha ? this._ctx.clearRect(0, 0, this._canvas.width, this._canvas.height) : (this._ctx.fillStyle = this._colors.background.css, 
                this._ctx.fillRect(0, 0, this._canvas.width, this._canvas.height));
            }, BaseRenderLayer.prototype.clearCells = function(x, y, width, height) {
                this._alpha ? this._ctx.clearRect(x * this._scaledCellWidth, y * this._scaledCellHeight, width * this._scaledCellWidth, height * this._scaledCellHeight) : (this._ctx.fillStyle = this._colors.background.css, 
                this._ctx.fillRect(x * this._scaledCellWidth, y * this._scaledCellHeight, width * this._scaledCellWidth, height * this._scaledCellHeight));
            }, BaseRenderLayer.prototype.fillCharTrueColor = function(terminal, cell, x, y) {
                this._ctx.font = this._getFont(terminal, !1, !1), this._ctx.textBaseline = "middle", 
                this._clipRow(terminal, y), this._ctx.fillText(cell.getChars(), x * this._scaledCellWidth + this._scaledCharLeft, y * this._scaledCellHeight + this._scaledCharTop + this._scaledCharHeight / 2);
            }, BaseRenderLayer.prototype.drawChars = function(terminal, cell, x, y) {
                var fg, bg;
                cell.isFgRGB() || cell.isBgRGB() ? this._drawUncachedChars(terminal, cell, x, y) : (cell.isInverse() ? (fg = cell.isBgDefault() ? Types_2.INVERTED_DEFAULT_COLOR : cell.getBgColor(), 
                bg = cell.isFgDefault() ? Types_2.INVERTED_DEFAULT_COLOR : cell.getFgColor()) : (bg = cell.isBgDefault() ? Types_1.DEFAULT_COLOR : cell.getBgColor(), 
                fg = cell.isFgDefault() ? Types_1.DEFAULT_COLOR : cell.getFgColor()), fg += terminal.options.drawBoldTextInBrightColors && cell.isBold() && fg < 8 && fg !== Types_2.INVERTED_DEFAULT_COLOR ? 8 : 0, 
                this._currentGlyphIdentifier.chars = cell.getChars() || BufferLine_1.WHITESPACE_CELL_CHAR, 
                this._currentGlyphIdentifier.code = cell.getCode() || BufferLine_1.WHITESPACE_CELL_CODE, 
                this._currentGlyphIdentifier.bg = bg, this._currentGlyphIdentifier.fg = fg, this._currentGlyphIdentifier.bold = cell.isBold() && terminal.options.enableBold, 
                this._currentGlyphIdentifier.dim = !!cell.isDim(), this._currentGlyphIdentifier.italic = !!cell.isItalic(), 
                this._charAtlas && this._charAtlas.draw(this._ctx, this._currentGlyphIdentifier, x * this._scaledCellWidth + this._scaledCharLeft, y * this._scaledCellHeight + this._scaledCharTop) || this._drawUncachedChars(terminal, cell, x, y));
            }, BaseRenderLayer.prototype._drawUncachedChars = function(terminal, cell, x, y) {
                if (this._ctx.save(), this._ctx.font = this._getFont(terminal, cell.isBold() && terminal.options.enableBold, !!cell.isItalic()), 
                this._ctx.textBaseline = "middle", cell.isInverse()) this._ctx.fillStyle = cell.isBgDefault() ? this._colors.background.css : cell.isBgRGB() ? "rgb(" + BufferLine_1.AttributeData.toColorRGB(cell.getBgColor()).join(",") + ")" : this._colors.ansi[cell.getBgColor()].css; else if (cell.isFgDefault()) this._ctx.fillStyle = this._colors.foreground.css; else if (cell.isFgRGB()) this._ctx.fillStyle = "rgb(" + BufferLine_1.AttributeData.toColorRGB(cell.getFgColor()).join(",") + ")"; else {
                    var fg = cell.getFgColor();
                    terminal.options.drawBoldTextInBrightColors && cell.isBold() && fg < 8 && (fg += 8), 
                    this._ctx.fillStyle = this._colors.ansi[fg].css;
                }
                this._clipRow(terminal, y), cell.isDim() && (this._ctx.globalAlpha = Types_2.DIM_OPACITY), 
                this._ctx.fillText(cell.getChars(), x * this._scaledCellWidth + this._scaledCharLeft, y * this._scaledCellHeight + this._scaledCharTop + this._scaledCharHeight / 2), 
                this._ctx.restore();
            }, BaseRenderLayer.prototype._clipRow = function(terminal, y) {
                this._ctx.beginPath(), this._ctx.rect(0, y * this._scaledCellHeight, terminal.cols * this._scaledCellWidth, this._scaledCellHeight), 
                this._ctx.clip();
            }, BaseRenderLayer.prototype._getFont = function(terminal, isBold, isItalic) {
                return (isItalic ? "italic" : "") + " " + (isBold ? terminal.options.fontWeightBold : terminal.options.fontWeight) + " " + terminal.options.fontSize * window.devicePixelRatio + "px " + terminal.options.fontFamily;
            }, BaseRenderLayer;
        }();
        exports.BaseRenderLayer = BaseRenderLayer;
    },
    IjFs: function(module, exports, __webpack_require__) {
        "use strict";
        function prepareTextForTerminal(text) {
            return text.replace(/\r?\n/g, "\r");
        }
        function bracketTextForPaste(text, bracketedPasteMode) {
            return bracketedPasteMode ? "[200~" + text + "[201~" : text;
        }
        function moveTextAreaUnderMouseCursor(ev, term) {
            var pos = term.screenElement.getBoundingClientRect(), left = ev.clientX - pos.left - 10, top = ev.clientY - pos.top - 10;
            term.textarea.style.position = "absolute", term.textarea.style.width = "20px", term.textarea.style.height = "20px", 
            term.textarea.style.left = left + "px", term.textarea.style.top = top + "px", term.textarea.style.zIndex = "1000", 
            term.textarea.focus(), setTimeout((function() {
                term.textarea.style.position = null, term.textarea.style.width = null, term.textarea.style.height = null, 
                term.textarea.style.left = null, term.textarea.style.top = null, term.textarea.style.zIndex = null;
            }), 200);
        }
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports.prepareTextForTerminal = prepareTextForTerminal, exports.bracketTextForPaste = bracketTextForPaste, 
        exports.copyHandler = function(ev, term, selectionManager) {
            term.browser.isMSIE ? window.clipboardData.setData("Text", selectionManager.selectionText) : ev.clipboardData.setData("text/plain", selectionManager.selectionText), 
            ev.preventDefault();
        }, exports.pasteHandler = function(ev, term) {
            ev.stopPropagation();
            var dispatchPaste = function(text) {
                text = bracketTextForPaste(text = prepareTextForTerminal(text), term.bracketedPasteMode), 
                term.handler(text), term.textarea.value = "", term.emit("paste", text), term.cancel(ev);
            };
            term.browser.isMSIE ? window.clipboardData && dispatchPaste(window.clipboardData.getData("Text")) : ev.clipboardData && dispatchPaste(ev.clipboardData.getData("text/plain"));
        }, exports.moveTextAreaUnderMouseCursor = moveTextAreaUnderMouseCursor, exports.rightClickHandler = function(ev, term, selectionManager, shouldSelectWord) {
            moveTextAreaUnderMouseCursor(ev, term), shouldSelectWord && !selectionManager.isClickInSelection(ev) && selectionManager.selectWordAtCursor(ev), 
            term.textarea.value = selectionManager.selectionText, term.textarea.select();
        };
    },
    Im2J: function(module, exports, __webpack_require__) {
        "use strict";
        var extendStatics, __extends = this && this.__extends || (extendStatics = function(d, b) {
            return (extendStatics = Object.setPrototypeOf || {
                __proto__: []
            } instanceof Array && function(d, b) {
                d.__proto__ = b;
            } || function(d, b) {
                for (var p in b) b.hasOwnProperty(p) && (d[p] = b[p]);
            })(d, b);
        }, function(d, b) {
            function __() {
                this.constructor = d;
            }
            extendStatics(d, b), d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, 
            new __);
        });
        Object.defineProperty(exports, "__esModule", {
            value: !0
        });
        var Strings = __webpack_require__("hqvf"), Platform_1 = __webpack_require__("5tIu"), RenderDebouncer_1 = __webpack_require__("MI/u"), Lifecycle_1 = __webpack_require__("N7yj"), Lifecycle_2 = __webpack_require__("4wKv"), ScreenDprMonitor_1 = __webpack_require__("+uUd"), AccessibilityManager = function(_super) {
            function AccessibilityManager(_terminal, _dimensions) {
                var _this = _super.call(this) || this;
                _this._terminal = _terminal, _this._dimensions = _dimensions, _this._liveRegionLineCount = 0, 
                _this._charsToConsume = [], _this._charsToAnnounce = "", _this._accessibilityTreeRoot = document.createElement("div"), 
                _this._accessibilityTreeRoot.classList.add("xterm-accessibility"), _this._rowContainer = document.createElement("div"), 
                _this._rowContainer.classList.add("xterm-accessibility-tree"), _this._rowElements = [];
                for (var i = 0; i < _this._terminal.rows; i++) _this._rowElements[i] = _this._createAccessibilityTreeNode(), 
                _this._rowContainer.appendChild(_this._rowElements[i]);
                return _this._topBoundaryFocusListener = function(e) {
                    return _this._onBoundaryFocus(e, 0);
                }, _this._bottomBoundaryFocusListener = function(e) {
                    return _this._onBoundaryFocus(e, 1);
                }, _this._rowElements[0].addEventListener("focus", _this._topBoundaryFocusListener), 
                _this._rowElements[_this._rowElements.length - 1].addEventListener("focus", _this._bottomBoundaryFocusListener), 
                _this._refreshRowsDimensions(), _this._accessibilityTreeRoot.appendChild(_this._rowContainer), 
                _this._renderRowsDebouncer = new RenderDebouncer_1.RenderDebouncer(_this._renderRows.bind(_this)), 
                _this._refreshRows(), _this._liveRegion = document.createElement("div"), _this._liveRegion.classList.add("live-region"), 
                _this._liveRegion.setAttribute("aria-live", "assertive"), _this._accessibilityTreeRoot.appendChild(_this._liveRegion), 
                _this._terminal.element.insertAdjacentElement("afterbegin", _this._accessibilityTreeRoot), 
                _this.register(_this._renderRowsDebouncer), _this.register(_this._terminal.onResize((function(e) {
                    return _this._onResize(e.rows);
                }))), _this.register(_this._terminal.onRender((function(e) {
                    return _this._refreshRows(e.start, e.end);
                }))), _this.register(_this._terminal.onScroll((function() {
                    return _this._refreshRows();
                }))), _this.register(_this._terminal.addDisposableListener("a11y.char", (function(char) {
                    return _this._onChar(char);
                }))), _this.register(_this._terminal.onLineFeed((function() {
                    return _this._onChar("\n");
                }))), _this.register(_this._terminal.addDisposableListener("a11y.tab", (function(spaceCount) {
                    return _this._onTab(spaceCount);
                }))), _this.register(_this._terminal.onKey((function(e) {
                    return _this._onKey(e.key);
                }))), _this.register(_this._terminal.addDisposableListener("blur", (function() {
                    return _this._clearLiveRegion();
                }))), _this._screenDprMonitor = new ScreenDprMonitor_1.ScreenDprMonitor, _this.register(_this._screenDprMonitor), 
                _this._screenDprMonitor.setListener((function() {
                    return _this._refreshRowsDimensions();
                })), _this.register(Lifecycle_1.addDisposableDomListener(window, "resize", (function() {
                    return _this._refreshRowsDimensions();
                }))), _this;
            }
            return __extends(AccessibilityManager, _super), AccessibilityManager.prototype.dispose = function() {
                _super.prototype.dispose.call(this), this._terminal.element.removeChild(this._accessibilityTreeRoot), 
                this._rowElements.length = 0;
            }, AccessibilityManager.prototype._onBoundaryFocus = function(e, position) {
                var boundaryElement = e.target, beforeBoundaryElement = this._rowElements[0 === position ? 1 : this._rowElements.length - 2];
                if (boundaryElement.getAttribute("aria-posinset") !== (0 === position ? "1" : "" + this._terminal.buffer.lines.length) && e.relatedTarget === beforeBoundaryElement) {
                    var topBoundaryElement, bottomBoundaryElement;
                    if (0 === position ? (topBoundaryElement = boundaryElement, bottomBoundaryElement = this._rowElements.pop(), 
                    this._rowContainer.removeChild(bottomBoundaryElement)) : (topBoundaryElement = this._rowElements.shift(), 
                    bottomBoundaryElement = boundaryElement, this._rowContainer.removeChild(topBoundaryElement)), 
                    topBoundaryElement.removeEventListener("focus", this._topBoundaryFocusListener), 
                    bottomBoundaryElement.removeEventListener("focus", this._bottomBoundaryFocusListener), 
                    0 === position) {
                        var newElement = this._createAccessibilityTreeNode();
                        this._rowElements.unshift(newElement), this._rowContainer.insertAdjacentElement("afterbegin", newElement);
                    } else newElement = this._createAccessibilityTreeNode(), this._rowElements.push(newElement), 
                    this._rowContainer.appendChild(newElement);
                    this._rowElements[0].addEventListener("focus", this._topBoundaryFocusListener), 
                    this._rowElements[this._rowElements.length - 1].addEventListener("focus", this._bottomBoundaryFocusListener), 
                    this._terminal.scrollLines(0 === position ? -1 : 1), this._rowElements[0 === position ? 1 : this._rowElements.length - 2].focus(), 
                    e.preventDefault(), e.stopImmediatePropagation();
                }
            }, AccessibilityManager.prototype._onResize = function(rows) {
                this._rowElements[this._rowElements.length - 1].removeEventListener("focus", this._bottomBoundaryFocusListener);
                for (var i = this._rowContainer.children.length; i < this._terminal.rows; i++) this._rowElements[i] = this._createAccessibilityTreeNode(), 
                this._rowContainer.appendChild(this._rowElements[i]);
                for (;this._rowElements.length > rows; ) this._rowContainer.removeChild(this._rowElements.pop());
                this._rowElements[this._rowElements.length - 1].addEventListener("focus", this._bottomBoundaryFocusListener), 
                this._refreshRowsDimensions();
            }, AccessibilityManager.prototype._createAccessibilityTreeNode = function() {
                var element = document.createElement("div");
                return element.setAttribute("role", "listitem"), element.tabIndex = -1, this._refreshRowDimensions(element), 
                element;
            }, AccessibilityManager.prototype._onTab = function(spaceCount) {
                for (var i = 0; i < spaceCount; i++) this._onChar(" ");
            }, AccessibilityManager.prototype._onChar = function(char) {
                var _this = this;
                this._liveRegionLineCount < 21 && (this._charsToConsume.length > 0 ? this._charsToConsume.shift() !== char && (this._charsToAnnounce += char) : this._charsToAnnounce += char, 
                "\n" === char && (this._liveRegionLineCount++, 21 === this._liveRegionLineCount && (this._liveRegion.textContent += Strings.tooMuchOutput)), 
                Platform_1.isMac && this._liveRegion.textContent && this._liveRegion.textContent.length > 0 && !this._liveRegion.parentNode && setTimeout((function() {
                    _this._accessibilityTreeRoot.appendChild(_this._liveRegion);
                }), 0));
            }, AccessibilityManager.prototype._clearLiveRegion = function() {
                this._liveRegion.textContent = "", this._liveRegionLineCount = 0, Platform_1.isMac && this._liveRegion.parentNode && this._accessibilityTreeRoot.removeChild(this._liveRegion);
            }, AccessibilityManager.prototype._onKey = function(keyChar) {
                this._clearLiveRegion(), this._charsToConsume.push(keyChar);
            }, AccessibilityManager.prototype._refreshRows = function(start, end) {
                this._renderRowsDebouncer.refresh(start, end, this._terminal.rows);
            }, AccessibilityManager.prototype._renderRows = function(start, end) {
                for (var buffer = this._terminal.buffer, setSize = buffer.lines.length.toString(), i = start; i <= end; i++) {
                    var lineData = buffer.translateBufferLineToString(buffer.ydisp + i, !0), posInSet = (buffer.ydisp + i + 1).toString(), element = this._rowElements[i];
                    element && (element.textContent = 0 === lineData.length ? Strings.blankLine : lineData, 
                    element.setAttribute("aria-posinset", posInSet), element.setAttribute("aria-setsize", setSize));
                }
                this._announceCharacters();
            }, AccessibilityManager.prototype._refreshRowsDimensions = function() {
                if (this._dimensions.actualCellHeight) {
                    this._rowElements.length !== this._terminal.rows && this._onResize(this._terminal.rows);
                    for (var i = 0; i < this._terminal.rows; i++) this._refreshRowDimensions(this._rowElements[i]);
                }
            }, AccessibilityManager.prototype.setDimensions = function(dimensions) {
                this._dimensions = dimensions, this._refreshRowsDimensions();
            }, AccessibilityManager.prototype._refreshRowDimensions = function(element) {
                element.style.height = this._dimensions.actualCellHeight + "px";
            }, AccessibilityManager.prototype._announceCharacters = function() {
                0 !== this._charsToAnnounce.length && (this._liveRegion.textContent += this._charsToAnnounce, 
                this._charsToAnnounce = "");
            }, AccessibilityManager;
        }(Lifecycle_2.Disposable);
        exports.AccessibilityManager = AccessibilityManager;
    },
    Ipkf: function(module, exports, __webpack_require__) {
        "use strict";
        var extendStatics, __extends = this && this.__extends || (extendStatics = function(d, b) {
            return (extendStatics = Object.setPrototypeOf || {
                __proto__: []
            } instanceof Array && function(d, b) {
                d.__proto__ = b;
            } || function(d, b) {
                for (var p in b) b.hasOwnProperty(p) && (d[p] = b[p]);
            })(d, b);
        }, function(d, b) {
            function __() {
                this.constructor = d;
            }
            extendStatics(d, b), d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, 
            new __);
        });
        Object.defineProperty(exports, "__esModule", {
            value: !0
        });
        var SelectionRenderLayer = function(_super) {
            function SelectionRenderLayer(container, zIndex, colors) {
                var _this = _super.call(this, container, "selection", zIndex, !0, colors) || this;
                return _this._clearState(), _this;
            }
            return __extends(SelectionRenderLayer, _super), SelectionRenderLayer.prototype._clearState = function() {
                this._state = {
                    start: null,
                    end: null,
                    columnSelectMode: null,
                    ydisp: null
                };
            }, SelectionRenderLayer.prototype.resize = function(terminal, dim) {
                _super.prototype.resize.call(this, terminal, dim), this._clearState();
            }, SelectionRenderLayer.prototype.reset = function(terminal) {
                this._state.start && this._state.end && (this._clearState(), this.clearAll());
            }, SelectionRenderLayer.prototype.onSelectionChanged = function(terminal, start, end, columnSelectMode) {
                if (this._didStateChange(start, end, columnSelectMode, terminal.buffer.ydisp)) if (this.clearAll(), 
                start && end) {
                    var viewportStartRow = start[1] - terminal.buffer.ydisp, viewportEndRow = end[1] - terminal.buffer.ydisp, viewportCappedStartRow = Math.max(viewportStartRow, 0), viewportCappedEndRow = Math.min(viewportEndRow, terminal.rows - 1);
                    if (!(viewportCappedStartRow >= terminal.rows || viewportCappedEndRow < 0)) {
                        if (this._ctx.fillStyle = this._colors.selection.css, columnSelectMode) this.fillCells(startCol = start[0], viewportCappedStartRow, end[0] - startCol, viewportCappedEndRow - viewportCappedStartRow + 1); else {
                            var startCol;
                            this.fillCells(startCol = viewportStartRow === viewportCappedStartRow ? start[0] : 0, viewportCappedStartRow, (viewportCappedStartRow === viewportCappedEndRow ? end[0] : terminal.cols) - startCol, 1);
                            var middleRowsCount = Math.max(viewportCappedEndRow - viewportCappedStartRow - 1, 0);
                            this.fillCells(0, viewportCappedStartRow + 1, terminal.cols, middleRowsCount), viewportCappedStartRow !== viewportCappedEndRow && this.fillCells(0, viewportCappedEndRow, viewportEndRow === viewportCappedEndRow ? end[0] : terminal.cols, 1);
                        }
                        this._state.start = [ start[0], start[1] ], this._state.end = [ end[0], end[1] ], 
                        this._state.columnSelectMode = columnSelectMode, this._state.ydisp = terminal.buffer.ydisp;
                    }
                } else this._clearState();
            }, SelectionRenderLayer.prototype._didStateChange = function(start, end, columnSelectMode, ydisp) {
                return !this._areCoordinatesEqual(start, this._state.start) || !this._areCoordinatesEqual(end, this._state.end) || columnSelectMode !== this._state.columnSelectMode || ydisp !== this._state.ydisp;
            }, SelectionRenderLayer.prototype._areCoordinatesEqual = function(coord1, coord2) {
                return !(!coord1 || !coord2) && coord1[0] === coord2[0] && coord1[1] === coord2[1];
            }, SelectionRenderLayer;
        }(__webpack_require__("HHOg").BaseRenderLayer);
        exports.SelectionRenderLayer = SelectionRenderLayer;
    },
    "J+Hc": function(module, exports, __webpack_require__) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports.DEFAULT_COLOR = 256;
    },
    LvDl: function(module, exports, __webpack_require__) {
        (function(module) {
            var __WEBPACK_AMD_DEFINE_RESULT__;
            (function() {
                var undefined, LARGE_ARRAY_SIZE = 200, FUNC_ERROR_TEXT = "Expected a function", PLACEHOLDER = "__lodash_placeholder__", CLONE_DEEP_FLAG = 1, CLONE_FLAT_FLAG = 2, CLONE_SYMBOLS_FLAG = 4, COMPARE_PARTIAL_FLAG = 1, COMPARE_UNORDERED_FLAG = 2, WRAP_BIND_FLAG = 1, WRAP_BIND_KEY_FLAG = 2, WRAP_CURRY_BOUND_FLAG = 4, WRAP_CURRY_FLAG = 8, WRAP_CURRY_RIGHT_FLAG = 16, WRAP_PARTIAL_FLAG = 32, WRAP_PARTIAL_RIGHT_FLAG = 64, WRAP_ARY_FLAG = 128, WRAP_REARG_FLAG = 256, WRAP_FLIP_FLAG = 512, HOT_COUNT = 800, HOT_SPAN = 16, INFINITY = 1 / 0, MAX_SAFE_INTEGER = 9007199254740991, MAX_INTEGER = 17976931348623157e292, NAN = NaN, MAX_ARRAY_LENGTH = 4294967295, MAX_ARRAY_INDEX = MAX_ARRAY_LENGTH - 1, HALF_MAX_ARRAY_LENGTH = MAX_ARRAY_LENGTH >>> 1, wrapFlags = [ [ "ary", WRAP_ARY_FLAG ], [ "bind", WRAP_BIND_FLAG ], [ "bindKey", WRAP_BIND_KEY_FLAG ], [ "curry", WRAP_CURRY_FLAG ], [ "curryRight", WRAP_CURRY_RIGHT_FLAG ], [ "flip", WRAP_FLIP_FLAG ], [ "partial", WRAP_PARTIAL_FLAG ], [ "partialRight", WRAP_PARTIAL_RIGHT_FLAG ], [ "rearg", WRAP_REARG_FLAG ] ], argsTag = "[object Arguments]", arrayTag = "[object Array]", asyncTag = "[object AsyncFunction]", boolTag = "[object Boolean]", dateTag = "[object Date]", domExcTag = "[object DOMException]", errorTag = "[object Error]", funcTag = "[object Function]", genTag = "[object GeneratorFunction]", mapTag = "[object Map]", numberTag = "[object Number]", nullTag = "[object Null]", objectTag = "[object Object]", proxyTag = "[object Proxy]", regexpTag = "[object RegExp]", setTag = "[object Set]", stringTag = "[object String]", symbolTag = "[object Symbol]", undefinedTag = "[object Undefined]", weakMapTag = "[object WeakMap]", arrayBufferTag = "[object ArrayBuffer]", dataViewTag = "[object DataView]", float32Tag = "[object Float32Array]", float64Tag = "[object Float64Array]", int8Tag = "[object Int8Array]", int16Tag = "[object Int16Array]", int32Tag = "[object Int32Array]", uint8Tag = "[object Uint8Array]", uint8ClampedTag = "[object Uint8ClampedArray]", uint16Tag = "[object Uint16Array]", uint32Tag = "[object Uint32Array]", reEmptyStringLeading = /\b__p \+= '';/g, reEmptyStringMiddle = /\b(__p \+=) '' \+/g, reEmptyStringTrailing = /(__e\(.*?\)|\b__t\)) \+\n'';/g, reEscapedHtml = /&(?:amp|lt|gt|quot|#39);/g, reUnescapedHtml = /[&<>"']/g, reHasEscapedHtml = RegExp(reEscapedHtml.source), reHasUnescapedHtml = RegExp(reUnescapedHtml.source), reEscape = /<%-([\s\S]+?)%>/g, reEvaluate = /<%([\s\S]+?)%>/g, reInterpolate = /<%=([\s\S]+?)%>/g, reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, reIsPlainProp = /^\w*$/, rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, reRegExpChar = /[\\^$.*+?()[\]{}|]/g, reHasRegExpChar = RegExp(reRegExpChar.source), reTrim = /^\s+|\s+$/g, reTrimStart = /^\s+/, reTrimEnd = /\s+$/, reWrapComment = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/, reWrapDetails = /\{\n\/\* \[wrapped with (.+)\] \*/, reSplitDetails = /,? & /, reAsciiWord = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g, reEscapeChar = /\\(\\)?/g, reEsTemplate = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g, reFlags = /\w*$/, reIsBadHex = /^[-+]0x[0-9a-f]+$/i, reIsBinary = /^0b[01]+$/i, reIsHostCtor = /^\[object .+?Constructor\]$/, reIsOctal = /^0o[0-7]+$/i, reIsUint = /^(?:0|[1-9]\d*)$/, reLatin = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g, reNoMatch = /($^)/, reUnescapedString = /['\n\r\u2028\u2029\\]/g, rsComboRange = "\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff", rsBreakRange = "\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000", rsBreak = "[" + rsBreakRange + "]", rsCombo = "[" + rsComboRange + "]", rsDigits = "\\d+", rsLower = "[a-z\\xdf-\\xf6\\xf8-\\xff]", rsMisc = "[^\\ud800-\\udfff" + rsBreakRange + rsDigits + "\\u2700-\\u27bfa-z\\xdf-\\xf6\\xf8-\\xffA-Z\\xc0-\\xd6\\xd8-\\xde]", rsFitz = "\\ud83c[\\udffb-\\udfff]", rsNonAstral = "[^\\ud800-\\udfff]", rsRegional = "(?:\\ud83c[\\udde6-\\uddff]){2}", rsSurrPair = "[\\ud800-\\udbff][\\udc00-\\udfff]", rsUpper = "[A-Z\\xc0-\\xd6\\xd8-\\xde]", rsMiscLower = "(?:" + rsLower + "|" + rsMisc + ")", rsMiscUpper = "(?:" + rsUpper + "|" + rsMisc + ")", reOptMod = "(?:" + rsCombo + "|" + rsFitz + ")?", rsSeq = "[\\ufe0e\\ufe0f]?" + reOptMod + "(?:\\u200d(?:" + [ rsNonAstral, rsRegional, rsSurrPair ].join("|") + ")[\\ufe0e\\ufe0f]?" + reOptMod + ")*", rsEmoji = "(?:" + [ "[\\u2700-\\u27bf]", rsRegional, rsSurrPair ].join("|") + ")" + rsSeq, rsSymbol = "(?:" + [ rsNonAstral + rsCombo + "?", rsCombo, rsRegional, rsSurrPair, "[\\ud800-\\udfff]" ].join("|") + ")", reApos = RegExp("['’]", "g"), reComboMark = RegExp(rsCombo, "g"), reUnicode = RegExp(rsFitz + "(?=" + rsFitz + ")|" + rsSymbol + rsSeq, "g"), reUnicodeWord = RegExp([ rsUpper + "?" + rsLower + "+(?:['’](?:d|ll|m|re|s|t|ve))?(?=" + [ rsBreak, rsUpper, "$" ].join("|") + ")", rsMiscUpper + "+(?:['’](?:D|LL|M|RE|S|T|VE))?(?=" + [ rsBreak, rsUpper + rsMiscLower, "$" ].join("|") + ")", rsUpper + "?" + rsMiscLower + "+(?:['’](?:d|ll|m|re|s|t|ve))?", rsUpper + "+(?:['’](?:D|LL|M|RE|S|T|VE))?", "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])", "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])", rsDigits, rsEmoji ].join("|"), "g"), reHasUnicode = RegExp("[\\u200d\\ud800-\\udfff" + rsComboRange + "\\ufe0e\\ufe0f]"), reHasUnicodeWord = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/, contextProps = [ "Array", "Buffer", "DataView", "Date", "Error", "Float32Array", "Float64Array", "Function", "Int8Array", "Int16Array", "Int32Array", "Map", "Math", "Object", "Promise", "RegExp", "Set", "String", "Symbol", "TypeError", "Uint8Array", "Uint8ClampedArray", "Uint16Array", "Uint32Array", "WeakMap", "_", "clearTimeout", "isFinite", "parseInt", "setTimeout" ], templateCounter = -1, typedArrayTags = {};
                typedArrayTags[float32Tag] = typedArrayTags[float64Tag] = typedArrayTags[int8Tag] = typedArrayTags[int16Tag] = typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] = typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] = typedArrayTags[uint32Tag] = !0, 
                typedArrayTags[argsTag] = typedArrayTags[arrayTag] = typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] = typedArrayTags[dataViewTag] = typedArrayTags[dateTag] = typedArrayTags[errorTag] = typedArrayTags[funcTag] = typedArrayTags[mapTag] = typedArrayTags[numberTag] = typedArrayTags[objectTag] = typedArrayTags[regexpTag] = typedArrayTags[setTag] = typedArrayTags[stringTag] = typedArrayTags[weakMapTag] = !1;
                var cloneableTags = {};
                cloneableTags[argsTag] = cloneableTags[arrayTag] = cloneableTags[arrayBufferTag] = cloneableTags[dataViewTag] = cloneableTags[boolTag] = cloneableTags[dateTag] = cloneableTags[float32Tag] = cloneableTags[float64Tag] = cloneableTags[int8Tag] = cloneableTags[int16Tag] = cloneableTags[int32Tag] = cloneableTags[mapTag] = cloneableTags[numberTag] = cloneableTags[objectTag] = cloneableTags[regexpTag] = cloneableTags[setTag] = cloneableTags[stringTag] = cloneableTags[symbolTag] = cloneableTags[uint8Tag] = cloneableTags[uint8ClampedTag] = cloneableTags[uint16Tag] = cloneableTags[uint32Tag] = !0, 
                cloneableTags[errorTag] = cloneableTags[funcTag] = cloneableTags[weakMapTag] = !1;
                var stringEscapes = {
                    "\\": "\\",
                    "'": "'",
                    "\n": "n",
                    "\r": "r",
                    "\u2028": "u2028",
                    "\u2029": "u2029"
                }, freeParseFloat = parseFloat, freeParseInt = parseInt, freeGlobal = "object" == typeof global && global && global.Object === Object && global, freeSelf = "object" == typeof self && self && self.Object === Object && self, root = freeGlobal || freeSelf || Function("return this")(), freeExports = exports && !exports.nodeType && exports, freeModule = freeExports && "object" == typeof module && module && !module.nodeType && module, moduleExports = freeModule && freeModule.exports === freeExports, freeProcess = moduleExports && freeGlobal.process, nodeUtil = function() {
                    try {
                        return freeModule && freeModule.require && freeModule.require("util").types || freeProcess && freeProcess.binding && freeProcess.binding("util");
                    } catch (e) {}
                }(), nodeIsArrayBuffer = nodeUtil && nodeUtil.isArrayBuffer, nodeIsDate = nodeUtil && nodeUtil.isDate, nodeIsMap = nodeUtil && nodeUtil.isMap, nodeIsRegExp = nodeUtil && nodeUtil.isRegExp, nodeIsSet = nodeUtil && nodeUtil.isSet, nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;
                function apply(func, thisArg, args) {
                    switch (args.length) {
                      case 0:
                        return func.call(thisArg);

                      case 1:
                        return func.call(thisArg, args[0]);

                      case 2:
                        return func.call(thisArg, args[0], args[1]);

                      case 3:
                        return func.call(thisArg, args[0], args[1], args[2]);
                    }
                    return func.apply(thisArg, args);
                }
                function arrayAggregator(array, setter, iteratee, accumulator) {
                    for (var index = -1, length = null == array ? 0 : array.length; ++index < length; ) {
                        var value = array[index];
                        setter(accumulator, value, iteratee(value), array);
                    }
                    return accumulator;
                }
                function arrayEach(array, iteratee) {
                    for (var index = -1, length = null == array ? 0 : array.length; ++index < length && !1 !== iteratee(array[index], index, array); ) ;
                    return array;
                }
                function arrayEachRight(array, iteratee) {
                    for (var length = null == array ? 0 : array.length; length-- && !1 !== iteratee(array[length], length, array); ) ;
                    return array;
                }
                function arrayEvery(array, predicate) {
                    for (var index = -1, length = null == array ? 0 : array.length; ++index < length; ) if (!predicate(array[index], index, array)) return !1;
                    return !0;
                }
                function arrayFilter(array, predicate) {
                    for (var index = -1, length = null == array ? 0 : array.length, resIndex = 0, result = []; ++index < length; ) {
                        var value = array[index];
                        predicate(value, index, array) && (result[resIndex++] = value);
                    }
                    return result;
                }
                function arrayIncludes(array, value) {
                    return !(null == array || !array.length) && baseIndexOf(array, value, 0) > -1;
                }
                function arrayIncludesWith(array, value, comparator) {
                    for (var index = -1, length = null == array ? 0 : array.length; ++index < length; ) if (comparator(value, array[index])) return !0;
                    return !1;
                }
                function arrayMap(array, iteratee) {
                    for (var index = -1, length = null == array ? 0 : array.length, result = Array(length); ++index < length; ) result[index] = iteratee(array[index], index, array);
                    return result;
                }
                function arrayPush(array, values) {
                    for (var index = -1, length = values.length, offset = array.length; ++index < length; ) array[offset + index] = values[index];
                    return array;
                }
                function arrayReduce(array, iteratee, accumulator, initAccum) {
                    var index = -1, length = null == array ? 0 : array.length;
                    for (initAccum && length && (accumulator = array[++index]); ++index < length; ) accumulator = iteratee(accumulator, array[index], index, array);
                    return accumulator;
                }
                function arrayReduceRight(array, iteratee, accumulator, initAccum) {
                    var length = null == array ? 0 : array.length;
                    for (initAccum && length && (accumulator = array[--length]); length--; ) accumulator = iteratee(accumulator, array[length], length, array);
                    return accumulator;
                }
                function arraySome(array, predicate) {
                    for (var index = -1, length = null == array ? 0 : array.length; ++index < length; ) if (predicate(array[index], index, array)) return !0;
                    return !1;
                }
                var asciiSize = baseProperty("length");
                function baseFindKey(collection, predicate, eachFunc) {
                    var result;
                    return eachFunc(collection, (function(value, key, collection) {
                        if (predicate(value, key, collection)) return result = key, !1;
                    })), result;
                }
                function baseFindIndex(array, predicate, fromIndex, fromRight) {
                    for (var length = array.length, index = fromIndex + (fromRight ? 1 : -1); fromRight ? index-- : ++index < length; ) if (predicate(array[index], index, array)) return index;
                    return -1;
                }
                function baseIndexOf(array, value, fromIndex) {
                    return value == value ? function(array, value, fromIndex) {
                        for (var index = fromIndex - 1, length = array.length; ++index < length; ) if (array[index] === value) return index;
                        return -1;
                    }(array, value, fromIndex) : baseFindIndex(array, baseIsNaN, fromIndex);
                }
                function baseIndexOfWith(array, value, fromIndex, comparator) {
                    for (var index = fromIndex - 1, length = array.length; ++index < length; ) if (comparator(array[index], value)) return index;
                    return -1;
                }
                function baseIsNaN(value) {
                    return value != value;
                }
                function baseMean(array, iteratee) {
                    var length = null == array ? 0 : array.length;
                    return length ? baseSum(array, iteratee) / length : NAN;
                }
                function baseProperty(key) {
                    return function(object) {
                        return null == object ? undefined : object[key];
                    };
                }
                function basePropertyOf(object) {
                    return function(key) {
                        return null == object ? undefined : object[key];
                    };
                }
                function baseReduce(collection, iteratee, accumulator, initAccum, eachFunc) {
                    return eachFunc(collection, (function(value, index, collection) {
                        accumulator = initAccum ? (initAccum = !1, value) : iteratee(accumulator, value, index, collection);
                    })), accumulator;
                }
                function baseSum(array, iteratee) {
                    for (var result, index = -1, length = array.length; ++index < length; ) {
                        var current = iteratee(array[index]);
                        current !== undefined && (result = result === undefined ? current : result + current);
                    }
                    return result;
                }
                function baseTimes(n, iteratee) {
                    for (var index = -1, result = Array(n); ++index < n; ) result[index] = iteratee(index);
                    return result;
                }
                function baseUnary(func) {
                    return function(value) {
                        return func(value);
                    };
                }
                function baseValues(object, props) {
                    return arrayMap(props, (function(key) {
                        return object[key];
                    }));
                }
                function cacheHas(cache, key) {
                    return cache.has(key);
                }
                function charsStartIndex(strSymbols, chrSymbols) {
                    for (var index = -1, length = strSymbols.length; ++index < length && baseIndexOf(chrSymbols, strSymbols[index], 0) > -1; ) ;
                    return index;
                }
                function charsEndIndex(strSymbols, chrSymbols) {
                    for (var index = strSymbols.length; index-- && baseIndexOf(chrSymbols, strSymbols[index], 0) > -1; ) ;
                    return index;
                }
                var deburrLetter = basePropertyOf({
                    "À": "A",
                    "Á": "A",
                    "Â": "A",
                    "Ã": "A",
                    "Ä": "A",
                    "Å": "A",
                    "à": "a",
                    "á": "a",
                    "â": "a",
                    "ã": "a",
                    "ä": "a",
                    "å": "a",
                    "Ç": "C",
                    "ç": "c",
                    "Ð": "D",
                    "ð": "d",
                    "È": "E",
                    "É": "E",
                    "Ê": "E",
                    "Ë": "E",
                    "è": "e",
                    "é": "e",
                    "ê": "e",
                    "ë": "e",
                    "Ì": "I",
                    "Í": "I",
                    "Î": "I",
                    "Ï": "I",
                    "ì": "i",
                    "í": "i",
                    "î": "i",
                    "ï": "i",
                    "Ñ": "N",
                    "ñ": "n",
                    "Ò": "O",
                    "Ó": "O",
                    "Ô": "O",
                    "Õ": "O",
                    "Ö": "O",
                    "Ø": "O",
                    "ò": "o",
                    "ó": "o",
                    "ô": "o",
                    "õ": "o",
                    "ö": "o",
                    "ø": "o",
                    "Ù": "U",
                    "Ú": "U",
                    "Û": "U",
                    "Ü": "U",
                    "ù": "u",
                    "ú": "u",
                    "û": "u",
                    "ü": "u",
                    "Ý": "Y",
                    "ý": "y",
                    "ÿ": "y",
                    "Æ": "Ae",
                    "æ": "ae",
                    "Þ": "Th",
                    "þ": "th",
                    "ß": "ss",
                    "Ā": "A",
                    "Ă": "A",
                    "Ą": "A",
                    "ā": "a",
                    "ă": "a",
                    "ą": "a",
                    "Ć": "C",
                    "Ĉ": "C",
                    "Ċ": "C",
                    "Č": "C",
                    "ć": "c",
                    "ĉ": "c",
                    "ċ": "c",
                    "č": "c",
                    "Ď": "D",
                    "Đ": "D",
                    "ď": "d",
                    "đ": "d",
                    "Ē": "E",
                    "Ĕ": "E",
                    "Ė": "E",
                    "Ę": "E",
                    "Ě": "E",
                    "ē": "e",
                    "ĕ": "e",
                    "ė": "e",
                    "ę": "e",
                    "ě": "e",
                    "Ĝ": "G",
                    "Ğ": "G",
                    "Ġ": "G",
                    "Ģ": "G",
                    "ĝ": "g",
                    "ğ": "g",
                    "ġ": "g",
                    "ģ": "g",
                    "Ĥ": "H",
                    "Ħ": "H",
                    "ĥ": "h",
                    "ħ": "h",
                    "Ĩ": "I",
                    "Ī": "I",
                    "Ĭ": "I",
                    "Į": "I",
                    "İ": "I",
                    "ĩ": "i",
                    "ī": "i",
                    "ĭ": "i",
                    "į": "i",
                    "ı": "i",
                    "Ĵ": "J",
                    "ĵ": "j",
                    "Ķ": "K",
                    "ķ": "k",
                    "ĸ": "k",
                    "Ĺ": "L",
                    "Ļ": "L",
                    "Ľ": "L",
                    "Ŀ": "L",
                    "Ł": "L",
                    "ĺ": "l",
                    "ļ": "l",
                    "ľ": "l",
                    "ŀ": "l",
                    "ł": "l",
                    "Ń": "N",
                    "Ņ": "N",
                    "Ň": "N",
                    "Ŋ": "N",
                    "ń": "n",
                    "ņ": "n",
                    "ň": "n",
                    "ŋ": "n",
                    "Ō": "O",
                    "Ŏ": "O",
                    "Ő": "O",
                    "ō": "o",
                    "ŏ": "o",
                    "ő": "o",
                    "Ŕ": "R",
                    "Ŗ": "R",
                    "Ř": "R",
                    "ŕ": "r",
                    "ŗ": "r",
                    "ř": "r",
                    "Ś": "S",
                    "Ŝ": "S",
                    "Ş": "S",
                    "Š": "S",
                    "ś": "s",
                    "ŝ": "s",
                    "ş": "s",
                    "š": "s",
                    "Ţ": "T",
                    "Ť": "T",
                    "Ŧ": "T",
                    "ţ": "t",
                    "ť": "t",
                    "ŧ": "t",
                    "Ũ": "U",
                    "Ū": "U",
                    "Ŭ": "U",
                    "Ů": "U",
                    "Ű": "U",
                    "Ų": "U",
                    "ũ": "u",
                    "ū": "u",
                    "ŭ": "u",
                    "ů": "u",
                    "ű": "u",
                    "ų": "u",
                    "Ŵ": "W",
                    "ŵ": "w",
                    "Ŷ": "Y",
                    "ŷ": "y",
                    "Ÿ": "Y",
                    "Ź": "Z",
                    "Ż": "Z",
                    "Ž": "Z",
                    "ź": "z",
                    "ż": "z",
                    "ž": "z",
                    "Ĳ": "IJ",
                    "ĳ": "ij",
                    "Œ": "Oe",
                    "œ": "oe",
                    "ŉ": "'n",
                    "ſ": "s"
                }), escapeHtmlChar = basePropertyOf({
                    "&": "&amp;",
                    "<": "&lt;",
                    ">": "&gt;",
                    '"': "&quot;",
                    "'": "&#39;"
                });
                function escapeStringChar(chr) {
                    return "\\" + stringEscapes[chr];
                }
                function hasUnicode(string) {
                    return reHasUnicode.test(string);
                }
                function mapToArray(map) {
                    var index = -1, result = Array(map.size);
                    return map.forEach((function(value, key) {
                        result[++index] = [ key, value ];
                    })), result;
                }
                function overArg(func, transform) {
                    return function(arg) {
                        return func(transform(arg));
                    };
                }
                function replaceHolders(array, placeholder) {
                    for (var index = -1, length = array.length, resIndex = 0, result = []; ++index < length; ) {
                        var value = array[index];
                        value !== placeholder && value !== PLACEHOLDER || (array[index] = PLACEHOLDER, result[resIndex++] = index);
                    }
                    return result;
                }
                function setToArray(set) {
                    var index = -1, result = Array(set.size);
                    return set.forEach((function(value) {
                        result[++index] = value;
                    })), result;
                }
                function setToPairs(set) {
                    var index = -1, result = Array(set.size);
                    return set.forEach((function(value) {
                        result[++index] = [ value, value ];
                    })), result;
                }
                function stringSize(string) {
                    return hasUnicode(string) ? function(string) {
                        for (var result = reUnicode.lastIndex = 0; reUnicode.test(string); ) ++result;
                        return result;
                    }(string) : asciiSize(string);
                }
                function stringToArray(string) {
                    return hasUnicode(string) ? function(string) {
                        return string.match(reUnicode) || [];
                    }(string) : function(string) {
                        return string.split("");
                    }(string);
                }
                var unescapeHtmlChar = basePropertyOf({
                    "&amp;": "&",
                    "&lt;": "<",
                    "&gt;": ">",
                    "&quot;": '"',
                    "&#39;": "'"
                }), _ = function runInContext(context) {
                    var uid, Array = (context = null == context ? root : _.defaults(root.Object(), context, _.pick(root, contextProps))).Array, Date = context.Date, Error = context.Error, Function = context.Function, Math = context.Math, Object = context.Object, RegExp = context.RegExp, String = context.String, TypeError = context.TypeError, arrayProto = Array.prototype, objectProto = Object.prototype, coreJsData = context["__core-js_shared__"], funcToString = Function.prototype.toString, hasOwnProperty = objectProto.hasOwnProperty, idCounter = 0, maskSrcKey = (uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || "")) ? "Symbol(src)_1." + uid : "", nativeObjectToString = objectProto.toString, objectCtorString = funcToString.call(Object), oldDash = root._, reIsNative = RegExp("^" + funcToString.call(hasOwnProperty).replace(reRegExpChar, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"), Buffer = moduleExports ? context.Buffer : undefined, Symbol = context.Symbol, Uint8Array = context.Uint8Array, allocUnsafe = Buffer ? Buffer.allocUnsafe : undefined, getPrototype = overArg(Object.getPrototypeOf, Object), objectCreate = Object.create, propertyIsEnumerable = objectProto.propertyIsEnumerable, splice = arrayProto.splice, spreadableSymbol = Symbol ? Symbol.isConcatSpreadable : undefined, symIterator = Symbol ? Symbol.iterator : undefined, symToStringTag = Symbol ? Symbol.toStringTag : undefined, defineProperty = function() {
                        try {
                            var func = getNative(Object, "defineProperty");
                            return func({}, "", {}), func;
                        } catch (e) {}
                    }(), ctxClearTimeout = context.clearTimeout !== root.clearTimeout && context.clearTimeout, ctxNow = Date && Date.now !== root.Date.now && Date.now, ctxSetTimeout = context.setTimeout !== root.setTimeout && context.setTimeout, nativeCeil = Math.ceil, nativeFloor = Math.floor, nativeGetSymbols = Object.getOwnPropertySymbols, nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined, nativeIsFinite = context.isFinite, nativeJoin = arrayProto.join, nativeKeys = overArg(Object.keys, Object), nativeMax = Math.max, nativeMin = Math.min, nativeNow = Date.now, nativeParseInt = context.parseInt, nativeRandom = Math.random, nativeReverse = arrayProto.reverse, DataView = getNative(context, "DataView"), Map = getNative(context, "Map"), Promise = getNative(context, "Promise"), Set = getNative(context, "Set"), WeakMap = getNative(context, "WeakMap"), nativeCreate = getNative(Object, "create"), metaMap = WeakMap && new WeakMap, realNames = {}, dataViewCtorString = toSource(DataView), mapCtorString = toSource(Map), promiseCtorString = toSource(Promise), setCtorString = toSource(Set), weakMapCtorString = toSource(WeakMap), symbolProto = Symbol ? Symbol.prototype : undefined, symbolValueOf = symbolProto ? symbolProto.valueOf : undefined, symbolToString = symbolProto ? symbolProto.toString : undefined;
                    function lodash(value) {
                        if (isObjectLike(value) && !isArray(value) && !(value instanceof LazyWrapper)) {
                            if (value instanceof LodashWrapper) return value;
                            if (hasOwnProperty.call(value, "__wrapped__")) return wrapperClone(value);
                        }
                        return new LodashWrapper(value);
                    }
                    var baseCreate = function() {
                        function object() {}
                        return function(proto) {
                            if (!isObject(proto)) return {};
                            if (objectCreate) return objectCreate(proto);
                            object.prototype = proto;
                            var result = new object;
                            return object.prototype = undefined, result;
                        };
                    }();
                    function baseLodash() {}
                    function LodashWrapper(value, chainAll) {
                        this.__wrapped__ = value, this.__actions__ = [], this.__chain__ = !!chainAll, this.__index__ = 0, 
                        this.__values__ = undefined;
                    }
                    function LazyWrapper(value) {
                        this.__wrapped__ = value, this.__actions__ = [], this.__dir__ = 1, this.__filtered__ = !1, 
                        this.__iteratees__ = [], this.__takeCount__ = MAX_ARRAY_LENGTH, this.__views__ = [];
                    }
                    function Hash(entries) {
                        var index = -1, length = null == entries ? 0 : entries.length;
                        for (this.clear(); ++index < length; ) {
                            var entry = entries[index];
                            this.set(entry[0], entry[1]);
                        }
                    }
                    function ListCache(entries) {
                        var index = -1, length = null == entries ? 0 : entries.length;
                        for (this.clear(); ++index < length; ) {
                            var entry = entries[index];
                            this.set(entry[0], entry[1]);
                        }
                    }
                    function MapCache(entries) {
                        var index = -1, length = null == entries ? 0 : entries.length;
                        for (this.clear(); ++index < length; ) {
                            var entry = entries[index];
                            this.set(entry[0], entry[1]);
                        }
                    }
                    function SetCache(values) {
                        var index = -1, length = null == values ? 0 : values.length;
                        for (this.__data__ = new MapCache; ++index < length; ) this.add(values[index]);
                    }
                    function Stack(entries) {
                        var data = this.__data__ = new ListCache(entries);
                        this.size = data.size;
                    }
                    function arrayLikeKeys(value, inherited) {
                        var isArr = isArray(value), isArg = !isArr && isArguments(value), isBuff = !isArr && !isArg && isBuffer(value), isType = !isArr && !isArg && !isBuff && isTypedArray(value), skipIndexes = isArr || isArg || isBuff || isType, result = skipIndexes ? baseTimes(value.length, String) : [], length = result.length;
                        for (var key in value) !inherited && !hasOwnProperty.call(value, key) || skipIndexes && ("length" == key || isBuff && ("offset" == key || "parent" == key) || isType && ("buffer" == key || "byteLength" == key || "byteOffset" == key) || isIndex(key, length)) || result.push(key);
                        return result;
                    }
                    function arraySample(array) {
                        var length = array.length;
                        return length ? array[baseRandom(0, length - 1)] : undefined;
                    }
                    function arraySampleSize(array, n) {
                        return shuffleSelf(copyArray(array), baseClamp(n, 0, array.length));
                    }
                    function arrayShuffle(array) {
                        return shuffleSelf(copyArray(array));
                    }
                    function assignMergeValue(object, key, value) {
                        (value === undefined || eq(object[key], value)) && (value !== undefined || key in object) || baseAssignValue(object, key, value);
                    }
                    function assignValue(object, key, value) {
                        var objValue = object[key];
                        hasOwnProperty.call(object, key) && eq(objValue, value) && (value !== undefined || key in object) || baseAssignValue(object, key, value);
                    }
                    function assocIndexOf(array, key) {
                        for (var length = array.length; length--; ) if (eq(array[length][0], key)) return length;
                        return -1;
                    }
                    function baseAggregator(collection, setter, iteratee, accumulator) {
                        return baseEach(collection, (function(value, key, collection) {
                            setter(accumulator, value, iteratee(value), collection);
                        })), accumulator;
                    }
                    function baseAssign(object, source) {
                        return object && copyObject(source, keys(source), object);
                    }
                    function baseAssignValue(object, key, value) {
                        "__proto__" == key && defineProperty ? defineProperty(object, key, {
                            configurable: !0,
                            enumerable: !0,
                            value: value,
                            writable: !0
                        }) : object[key] = value;
                    }
                    function baseAt(object, paths) {
                        for (var index = -1, length = paths.length, result = Array(length), skip = null == object; ++index < length; ) result[index] = skip ? undefined : get(object, paths[index]);
                        return result;
                    }
                    function baseClamp(number, lower, upper) {
                        return number == number && (upper !== undefined && (number = number <= upper ? number : upper), 
                        lower !== undefined && (number = number >= lower ? number : lower)), number;
                    }
                    function baseClone(value, bitmask, customizer, key, object, stack) {
                        var result, isDeep = bitmask & CLONE_DEEP_FLAG, isFlat = bitmask & CLONE_FLAT_FLAG, isFull = bitmask & CLONE_SYMBOLS_FLAG;
                        if (customizer && (result = object ? customizer(value, key, object, stack) : customizer(value)), 
                        result !== undefined) return result;
                        if (!isObject(value)) return value;
                        var isArr = isArray(value);
                        if (isArr) {
                            if (result = function(array) {
                                var length = array.length, result = new array.constructor(length);
                                return length && "string" == typeof array[0] && hasOwnProperty.call(array, "index") && (result.index = array.index, 
                                result.input = array.input), result;
                            }(value), !isDeep) return copyArray(value, result);
                        } else {
                            var tag = getTag(value), isFunc = tag == funcTag || tag == genTag;
                            if (isBuffer(value)) return cloneBuffer(value, isDeep);
                            if (tag == objectTag || tag == argsTag || isFunc && !object) {
                                if (result = isFlat || isFunc ? {} : initCloneObject(value), !isDeep) return isFlat ? function(source, object) {
                                    return copyObject(source, getSymbolsIn(source), object);
                                }(value, function(object, source) {
                                    return object && copyObject(source, keysIn(source), object);
                                }(result, value)) : function(source, object) {
                                    return copyObject(source, getSymbols(source), object);
                                }(value, baseAssign(result, value));
                            } else {
                                if (!cloneableTags[tag]) return object ? value : {};
                                result = function(object, tag, isDeep) {
                                    var Ctor = object.constructor;
                                    switch (tag) {
                                      case arrayBufferTag:
                                        return cloneArrayBuffer(object);

                                      case boolTag:
                                      case dateTag:
                                        return new Ctor(+object);

                                      case dataViewTag:
                                        return function(dataView, isDeep) {
                                            var buffer = isDeep ? cloneArrayBuffer(dataView.buffer) : dataView.buffer;
                                            return new dataView.constructor(buffer, dataView.byteOffset, dataView.byteLength);
                                        }(object, isDeep);

                                      case float32Tag:
                                      case float64Tag:
                                      case int8Tag:
                                      case int16Tag:
                                      case int32Tag:
                                      case uint8Tag:
                                      case uint8ClampedTag:
                                      case uint16Tag:
                                      case uint32Tag:
                                        return cloneTypedArray(object, isDeep);

                                      case mapTag:
                                        return new Ctor;

                                      case numberTag:
                                      case stringTag:
                                        return new Ctor(object);

                                      case regexpTag:
                                        return function(regexp) {
                                            var result = new regexp.constructor(regexp.source, reFlags.exec(regexp));
                                            return result.lastIndex = regexp.lastIndex, result;
                                        }(object);

                                      case setTag:
                                        return new Ctor;

                                      case symbolTag:
                                        return symbolValueOf ? Object(symbolValueOf.call(object)) : {};
                                    }
                                }(value, tag, isDeep);
                            }
                        }
                        stack || (stack = new Stack);
                        var stacked = stack.get(value);
                        if (stacked) return stacked;
                        stack.set(value, result), isSet(value) ? value.forEach((function(subValue) {
                            result.add(baseClone(subValue, bitmask, customizer, subValue, value, stack));
                        })) : isMap(value) && value.forEach((function(subValue, key) {
                            result.set(key, baseClone(subValue, bitmask, customizer, key, value, stack));
                        }));
                        var props = isArr ? undefined : (isFull ? isFlat ? getAllKeysIn : getAllKeys : isFlat ? keysIn : keys)(value);
                        return arrayEach(props || value, (function(subValue, key) {
                            props && (subValue = value[key = subValue]), assignValue(result, key, baseClone(subValue, bitmask, customizer, key, value, stack));
                        })), result;
                    }
                    function baseConformsTo(object, source, props) {
                        var length = props.length;
                        if (null == object) return !length;
                        for (object = Object(object); length--; ) {
                            var key = props[length], value = object[key];
                            if (value === undefined && !(key in object) || !(0, source[key])(value)) return !1;
                        }
                        return !0;
                    }
                    function baseDelay(func, wait, args) {
                        if ("function" != typeof func) throw new TypeError(FUNC_ERROR_TEXT);
                        return setTimeout((function() {
                            func.apply(undefined, args);
                        }), wait);
                    }
                    function baseDifference(array, values, iteratee, comparator) {
                        var index = -1, includes = arrayIncludes, isCommon = !0, length = array.length, result = [], valuesLength = values.length;
                        if (!length) return result;
                        iteratee && (values = arrayMap(values, baseUnary(iteratee))), comparator ? (includes = arrayIncludesWith, 
                        isCommon = !1) : values.length >= LARGE_ARRAY_SIZE && (includes = cacheHas, isCommon = !1, 
                        values = new SetCache(values));
                        outer: for (;++index < length; ) {
                            var value = array[index], computed = null == iteratee ? value : iteratee(value);
                            if (value = comparator || 0 !== value ? value : 0, isCommon && computed == computed) {
                                for (var valuesIndex = valuesLength; valuesIndex--; ) if (values[valuesIndex] === computed) continue outer;
                                result.push(value);
                            } else includes(values, computed, comparator) || result.push(value);
                        }
                        return result;
                    }
                    lodash.templateSettings = {
                        escape: reEscape,
                        evaluate: reEvaluate,
                        interpolate: reInterpolate,
                        variable: "",
                        imports: {
                            _: lodash
                        }
                    }, (lodash.prototype = baseLodash.prototype).constructor = lodash, (LodashWrapper.prototype = baseCreate(baseLodash.prototype)).constructor = LodashWrapper, 
                    (LazyWrapper.prototype = baseCreate(baseLodash.prototype)).constructor = LazyWrapper, 
                    Hash.prototype.clear = function() {
                        this.__data__ = nativeCreate ? nativeCreate(null) : {}, this.size = 0;
                    }, Hash.prototype.delete = function(key) {
                        var result = this.has(key) && delete this.__data__[key];
                        return this.size -= result ? 1 : 0, result;
                    }, Hash.prototype.get = function(key) {
                        var data = this.__data__;
                        if (nativeCreate) {
                            var result = data[key];
                            return "__lodash_hash_undefined__" === result ? undefined : result;
                        }
                        return hasOwnProperty.call(data, key) ? data[key] : undefined;
                    }, Hash.prototype.has = function(key) {
                        var data = this.__data__;
                        return nativeCreate ? data[key] !== undefined : hasOwnProperty.call(data, key);
                    }, Hash.prototype.set = function(key, value) {
                        var data = this.__data__;
                        return this.size += this.has(key) ? 0 : 1, data[key] = nativeCreate && value === undefined ? "__lodash_hash_undefined__" : value, 
                        this;
                    }, ListCache.prototype.clear = function() {
                        this.__data__ = [], this.size = 0;
                    }, ListCache.prototype.delete = function(key) {
                        var data = this.__data__, index = assocIndexOf(data, key);
                        return !(index < 0 || (index == data.length - 1 ? data.pop() : splice.call(data, index, 1), 
                        --this.size, 0));
                    }, ListCache.prototype.get = function(key) {
                        var data = this.__data__, index = assocIndexOf(data, key);
                        return index < 0 ? undefined : data[index][1];
                    }, ListCache.prototype.has = function(key) {
                        return assocIndexOf(this.__data__, key) > -1;
                    }, ListCache.prototype.set = function(key, value) {
                        var data = this.__data__, index = assocIndexOf(data, key);
                        return index < 0 ? (++this.size, data.push([ key, value ])) : data[index][1] = value, 
                        this;
                    }, MapCache.prototype.clear = function() {
                        this.size = 0, this.__data__ = {
                            hash: new Hash,
                            map: new (Map || ListCache),
                            string: new Hash
                        };
                    }, MapCache.prototype.delete = function(key) {
                        var result = getMapData(this, key).delete(key);
                        return this.size -= result ? 1 : 0, result;
                    }, MapCache.prototype.get = function(key) {
                        return getMapData(this, key).get(key);
                    }, MapCache.prototype.has = function(key) {
                        return getMapData(this, key).has(key);
                    }, MapCache.prototype.set = function(key, value) {
                        var data = getMapData(this, key), size = data.size;
                        return data.set(key, value), this.size += data.size == size ? 0 : 1, this;
                    }, SetCache.prototype.add = SetCache.prototype.push = function(value) {
                        return this.__data__.set(value, "__lodash_hash_undefined__"), this;
                    }, SetCache.prototype.has = function(value) {
                        return this.__data__.has(value);
                    }, Stack.prototype.clear = function() {
                        this.__data__ = new ListCache, this.size = 0;
                    }, Stack.prototype.delete = function(key) {
                        var data = this.__data__, result = data.delete(key);
                        return this.size = data.size, result;
                    }, Stack.prototype.get = function(key) {
                        return this.__data__.get(key);
                    }, Stack.prototype.has = function(key) {
                        return this.__data__.has(key);
                    }, Stack.prototype.set = function(key, value) {
                        var data = this.__data__;
                        if (data instanceof ListCache) {
                            var pairs = data.__data__;
                            if (!Map || pairs.length < LARGE_ARRAY_SIZE - 1) return pairs.push([ key, value ]), 
                            this.size = ++data.size, this;
                            data = this.__data__ = new MapCache(pairs);
                        }
                        return data.set(key, value), this.size = data.size, this;
                    };
                    var baseEach = createBaseEach(baseForOwn), baseEachRight = createBaseEach(baseForOwnRight, !0);
                    function baseEvery(collection, predicate) {
                        var result = !0;
                        return baseEach(collection, (function(value, index, collection) {
                            return result = !!predicate(value, index, collection);
                        })), result;
                    }
                    function baseExtremum(array, iteratee, comparator) {
                        for (var index = -1, length = array.length; ++index < length; ) {
                            var value = array[index], current = iteratee(value);
                            if (null != current && (computed === undefined ? current == current && !isSymbol(current) : comparator(current, computed))) var computed = current, result = value;
                        }
                        return result;
                    }
                    function baseFilter(collection, predicate) {
                        var result = [];
                        return baseEach(collection, (function(value, index, collection) {
                            predicate(value, index, collection) && result.push(value);
                        })), result;
                    }
                    function baseFlatten(array, depth, predicate, isStrict, result) {
                        var index = -1, length = array.length;
                        for (predicate || (predicate = isFlattenable), result || (result = []); ++index < length; ) {
                            var value = array[index];
                            depth > 0 && predicate(value) ? depth > 1 ? baseFlatten(value, depth - 1, predicate, isStrict, result) : arrayPush(result, value) : isStrict || (result[result.length] = value);
                        }
                        return result;
                    }
                    var baseFor = createBaseFor(), baseForRight = createBaseFor(!0);
                    function baseForOwn(object, iteratee) {
                        return object && baseFor(object, iteratee, keys);
                    }
                    function baseForOwnRight(object, iteratee) {
                        return object && baseForRight(object, iteratee, keys);
                    }
                    function baseFunctions(object, props) {
                        return arrayFilter(props, (function(key) {
                            return isFunction(object[key]);
                        }));
                    }
                    function baseGet(object, path) {
                        for (var index = 0, length = (path = castPath(path, object)).length; null != object && index < length; ) object = object[toKey(path[index++])];
                        return index && index == length ? object : undefined;
                    }
                    function baseGetAllKeys(object, keysFunc, symbolsFunc) {
                        var result = keysFunc(object);
                        return isArray(object) ? result : arrayPush(result, symbolsFunc(object));
                    }
                    function baseGetTag(value) {
                        return null == value ? value === undefined ? undefinedTag : nullTag : symToStringTag && symToStringTag in Object(value) ? function(value) {
                            var isOwn = hasOwnProperty.call(value, symToStringTag), tag = value[symToStringTag];
                            try {
                                value[symToStringTag] = undefined;
                                var unmasked = !0;
                            } catch (e) {}
                            var result = nativeObjectToString.call(value);
                            return unmasked && (isOwn ? value[symToStringTag] = tag : delete value[symToStringTag]), 
                            result;
                        }(value) : function(value) {
                            return nativeObjectToString.call(value);
                        }(value);
                    }
                    function baseGt(value, other) {
                        return value > other;
                    }
                    function baseHas(object, key) {
                        return null != object && hasOwnProperty.call(object, key);
                    }
                    function baseHasIn(object, key) {
                        return null != object && key in Object(object);
                    }
                    function baseIntersection(arrays, iteratee, comparator) {
                        for (var includes = comparator ? arrayIncludesWith : arrayIncludes, length = arrays[0].length, othLength = arrays.length, othIndex = othLength, caches = Array(othLength), maxLength = 1 / 0, result = []; othIndex--; ) {
                            var array = arrays[othIndex];
                            othIndex && iteratee && (array = arrayMap(array, baseUnary(iteratee))), maxLength = nativeMin(array.length, maxLength), 
                            caches[othIndex] = !comparator && (iteratee || length >= 120 && array.length >= 120) ? new SetCache(othIndex && array) : undefined;
                        }
                        array = arrays[0];
                        var index = -1, seen = caches[0];
                        outer: for (;++index < length && result.length < maxLength; ) {
                            var value = array[index], computed = iteratee ? iteratee(value) : value;
                            if (value = comparator || 0 !== value ? value : 0, !(seen ? cacheHas(seen, computed) : includes(result, computed, comparator))) {
                                for (othIndex = othLength; --othIndex; ) {
                                    var cache = caches[othIndex];
                                    if (!(cache ? cacheHas(cache, computed) : includes(arrays[othIndex], computed, comparator))) continue outer;
                                }
                                seen && seen.push(computed), result.push(value);
                            }
                        }
                        return result;
                    }
                    function baseInvoke(object, path, args) {
                        var func = null == (object = parent(object, path = castPath(path, object))) ? object : object[toKey(last(path))];
                        return null == func ? undefined : apply(func, object, args);
                    }
                    function baseIsArguments(value) {
                        return isObjectLike(value) && baseGetTag(value) == argsTag;
                    }
                    function baseIsEqual(value, other, bitmask, customizer, stack) {
                        return value === other || (null == value || null == other || !isObjectLike(value) && !isObjectLike(other) ? value != value && other != other : function(object, other, bitmask, customizer, equalFunc, stack) {
                            var objIsArr = isArray(object), othIsArr = isArray(other), objTag = objIsArr ? arrayTag : getTag(object), othTag = othIsArr ? arrayTag : getTag(other), objIsObj = (objTag = objTag == argsTag ? objectTag : objTag) == objectTag, othIsObj = (othTag = othTag == argsTag ? objectTag : othTag) == objectTag, isSameTag = objTag == othTag;
                            if (isSameTag && isBuffer(object)) {
                                if (!isBuffer(other)) return !1;
                                objIsArr = !0, objIsObj = !1;
                            }
                            if (isSameTag && !objIsObj) return stack || (stack = new Stack), objIsArr || isTypedArray(object) ? equalArrays(object, other, bitmask, customizer, equalFunc, stack) : function(object, other, tag, bitmask, customizer, equalFunc, stack) {
                                switch (tag) {
                                  case dataViewTag:
                                    if (object.byteLength != other.byteLength || object.byteOffset != other.byteOffset) return !1;
                                    object = object.buffer, other = other.buffer;

                                  case arrayBufferTag:
                                    return !(object.byteLength != other.byteLength || !equalFunc(new Uint8Array(object), new Uint8Array(other)));

                                  case boolTag:
                                  case dateTag:
                                  case numberTag:
                                    return eq(+object, +other);

                                  case errorTag:
                                    return object.name == other.name && object.message == other.message;

                                  case regexpTag:
                                  case stringTag:
                                    return object == other + "";

                                  case mapTag:
                                    var convert = mapToArray;

                                  case setTag:
                                    if (convert || (convert = setToArray), object.size != other.size && !(bitmask & COMPARE_PARTIAL_FLAG)) return !1;
                                    var stacked = stack.get(object);
                                    if (stacked) return stacked == other;
                                    bitmask |= COMPARE_UNORDERED_FLAG, stack.set(object, other);
                                    var result = equalArrays(convert(object), convert(other), bitmask, customizer, equalFunc, stack);
                                    return stack.delete(object), result;

                                  case symbolTag:
                                    if (symbolValueOf) return symbolValueOf.call(object) == symbolValueOf.call(other);
                                }
                                return !1;
                            }(object, other, objTag, bitmask, customizer, equalFunc, stack);
                            if (!(bitmask & COMPARE_PARTIAL_FLAG)) {
                                var objIsWrapped = objIsObj && hasOwnProperty.call(object, "__wrapped__"), othIsWrapped = othIsObj && hasOwnProperty.call(other, "__wrapped__");
                                if (objIsWrapped || othIsWrapped) {
                                    var objUnwrapped = objIsWrapped ? object.value() : object, othUnwrapped = othIsWrapped ? other.value() : other;
                                    return stack || (stack = new Stack), equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack);
                                }
                            }
                            return !!isSameTag && (stack || (stack = new Stack), function(object, other, bitmask, customizer, equalFunc, stack) {
                                var isPartial = bitmask & COMPARE_PARTIAL_FLAG, objProps = getAllKeys(object), objLength = objProps.length;
                                if (objLength != getAllKeys(other).length && !isPartial) return !1;
                                for (var index = objLength; index--; ) {
                                    var key = objProps[index];
                                    if (!(isPartial ? key in other : hasOwnProperty.call(other, key))) return !1;
                                }
                                var stacked = stack.get(object);
                                if (stacked && stack.get(other)) return stacked == other;
                                var result = !0;
                                stack.set(object, other), stack.set(other, object);
                                for (var skipCtor = isPartial; ++index < objLength; ) {
                                    var objValue = object[key = objProps[index]], othValue = other[key];
                                    if (customizer) var compared = isPartial ? customizer(othValue, objValue, key, other, object, stack) : customizer(objValue, othValue, key, object, other, stack);
                                    if (!(compared === undefined ? objValue === othValue || equalFunc(objValue, othValue, bitmask, customizer, stack) : compared)) {
                                        result = !1;
                                        break;
                                    }
                                    skipCtor || (skipCtor = "constructor" == key);
                                }
                                if (result && !skipCtor) {
                                    var objCtor = object.constructor, othCtor = other.constructor;
                                    objCtor != othCtor && "constructor" in object && "constructor" in other && !("function" == typeof objCtor && objCtor instanceof objCtor && "function" == typeof othCtor && othCtor instanceof othCtor) && (result = !1);
                                }
                                return stack.delete(object), stack.delete(other), result;
                            }(object, other, bitmask, customizer, equalFunc, stack));
                        }(value, other, bitmask, customizer, baseIsEqual, stack));
                    }
                    function baseIsMatch(object, source, matchData, customizer) {
                        var index = matchData.length, length = index, noCustomizer = !customizer;
                        if (null == object) return !length;
                        for (object = Object(object); index--; ) {
                            var data = matchData[index];
                            if (noCustomizer && data[2] ? data[1] !== object[data[0]] : !(data[0] in object)) return !1;
                        }
                        for (;++index < length; ) {
                            var key = (data = matchData[index])[0], objValue = object[key], srcValue = data[1];
                            if (noCustomizer && data[2]) {
                                if (objValue === undefined && !(key in object)) return !1;
                            } else {
                                var stack = new Stack;
                                if (customizer) var result = customizer(objValue, srcValue, key, object, source, stack);
                                if (!(result === undefined ? baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG, customizer, stack) : result)) return !1;
                            }
                        }
                        return !0;
                    }
                    function baseIsNative(value) {
                        return !(!isObject(value) || (func = value, maskSrcKey && maskSrcKey in func)) && (isFunction(value) ? reIsNative : reIsHostCtor).test(toSource(value));
                        var func;
                    }
                    function baseIteratee(value) {
                        return "function" == typeof value ? value : null == value ? identity : "object" == typeof value ? isArray(value) ? baseMatchesProperty(value[0], value[1]) : baseMatches(value) : property(value);
                    }
                    function baseKeys(object) {
                        if (!isPrototype(object)) return nativeKeys(object);
                        var result = [];
                        for (var key in Object(object)) hasOwnProperty.call(object, key) && "constructor" != key && result.push(key);
                        return result;
                    }
                    function baseLt(value, other) {
                        return value < other;
                    }
                    function baseMap(collection, iteratee) {
                        var index = -1, result = isArrayLike(collection) ? Array(collection.length) : [];
                        return baseEach(collection, (function(value, key, collection) {
                            result[++index] = iteratee(value, key, collection);
                        })), result;
                    }
                    function baseMatches(source) {
                        var matchData = getMatchData(source);
                        return 1 == matchData.length && matchData[0][2] ? matchesStrictComparable(matchData[0][0], matchData[0][1]) : function(object) {
                            return object === source || baseIsMatch(object, source, matchData);
                        };
                    }
                    function baseMatchesProperty(path, srcValue) {
                        return isKey(path) && isStrictComparable(srcValue) ? matchesStrictComparable(toKey(path), srcValue) : function(object) {
                            var objValue = get(object, path);
                            return objValue === undefined && objValue === srcValue ? hasIn(object, path) : baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG);
                        };
                    }
                    function baseMerge(object, source, srcIndex, customizer, stack) {
                        object !== source && baseFor(source, (function(srcValue, key) {
                            if (stack || (stack = new Stack), isObject(srcValue)) !function(object, source, key, srcIndex, mergeFunc, customizer, stack) {
                                var objValue = safeGet(object, key), srcValue = safeGet(source, key), stacked = stack.get(srcValue);
                                if (stacked) assignMergeValue(object, key, stacked); else {
                                    var newValue = customizer ? customizer(objValue, srcValue, key + "", object, source, stack) : undefined, isCommon = newValue === undefined;
                                    if (isCommon) {
                                        var isArr = isArray(srcValue), isBuff = !isArr && isBuffer(srcValue), isTyped = !isArr && !isBuff && isTypedArray(srcValue);
                                        newValue = srcValue, isArr || isBuff || isTyped ? isArray(objValue) ? newValue = objValue : isArrayLikeObject(objValue) ? newValue = copyArray(objValue) : isBuff ? (isCommon = !1, 
                                        newValue = cloneBuffer(srcValue, !0)) : isTyped ? (isCommon = !1, newValue = cloneTypedArray(srcValue, !0)) : newValue = [] : isPlainObject(srcValue) || isArguments(srcValue) ? (newValue = objValue, 
                                        isArguments(objValue) ? newValue = toPlainObject(objValue) : isObject(objValue) && !isFunction(objValue) || (newValue = initCloneObject(srcValue))) : isCommon = !1;
                                    }
                                    isCommon && (stack.set(srcValue, newValue), mergeFunc(newValue, srcValue, srcIndex, customizer, stack), 
                                    stack.delete(srcValue)), assignMergeValue(object, key, newValue);
                                }
                            }(object, source, key, srcIndex, baseMerge, customizer, stack); else {
                                var newValue = customizer ? customizer(safeGet(object, key), srcValue, key + "", object, source, stack) : undefined;
                                newValue === undefined && (newValue = srcValue), assignMergeValue(object, key, newValue);
                            }
                        }), keysIn);
                    }
                    function baseNth(array, n) {
                        var length = array.length;
                        if (length) return isIndex(n += n < 0 ? length : 0, length) ? array[n] : undefined;
                    }
                    function baseOrderBy(collection, iteratees, orders) {
                        var index = -1;
                        return iteratees = arrayMap(iteratees.length ? iteratees : [ identity ], baseUnary(getIteratee())), 
                        function(array, comparer) {
                            var length = array.length;
                            for (array.sort((function(object, other) {
                                return function(object, other, orders) {
                                    for (var index = -1, objCriteria = object.criteria, othCriteria = other.criteria, length = objCriteria.length, ordersLength = orders.length; ++index < length; ) {
                                        var result = compareAscending(objCriteria[index], othCriteria[index]);
                                        if (result) return index >= ordersLength ? result : result * ("desc" == orders[index] ? -1 : 1);
                                    }
                                    return object.index - other.index;
                                }(object, other, orders);
                            })); length--; ) array[length] = array[length].value;
                            return array;
                        }(baseMap(collection, (function(value, key, collection) {
                            return {
                                criteria: arrayMap(iteratees, (function(iteratee) {
                                    return iteratee(value);
                                })),
                                index: ++index,
                                value: value
                            };
                        })));
                    }
                    function basePickBy(object, paths, predicate) {
                        for (var index = -1, length = paths.length, result = {}; ++index < length; ) {
                            var path = paths[index], value = baseGet(object, path);
                            predicate(value, path) && baseSet(result, castPath(path, object), value);
                        }
                        return result;
                    }
                    function basePullAll(array, values, iteratee, comparator) {
                        var indexOf = comparator ? baseIndexOfWith : baseIndexOf, index = -1, length = values.length, seen = array;
                        for (array === values && (values = copyArray(values)), iteratee && (seen = arrayMap(array, baseUnary(iteratee))); ++index < length; ) for (var fromIndex = 0, value = values[index], computed = iteratee ? iteratee(value) : value; (fromIndex = indexOf(seen, computed, fromIndex, comparator)) > -1; ) seen !== array && splice.call(seen, fromIndex, 1), 
                        splice.call(array, fromIndex, 1);
                        return array;
                    }
                    function basePullAt(array, indexes) {
                        for (var length = array ? indexes.length : 0, lastIndex = length - 1; length--; ) {
                            var index = indexes[length];
                            if (length == lastIndex || index !== previous) {
                                var previous = index;
                                isIndex(index) ? splice.call(array, index, 1) : baseUnset(array, index);
                            }
                        }
                        return array;
                    }
                    function baseRandom(lower, upper) {
                        return lower + nativeFloor(nativeRandom() * (upper - lower + 1));
                    }
                    function baseRepeat(string, n) {
                        var result = "";
                        if (!string || n < 1 || n > MAX_SAFE_INTEGER) return result;
                        do {
                            n % 2 && (result += string), (n = nativeFloor(n / 2)) && (string += string);
                        } while (n);
                        return result;
                    }
                    function baseRest(func, start) {
                        return setToString(overRest(func, start, identity), func + "");
                    }
                    function baseSample(collection) {
                        return arraySample(values(collection));
                    }
                    function baseSampleSize(collection, n) {
                        var array = values(collection);
                        return shuffleSelf(array, baseClamp(n, 0, array.length));
                    }
                    function baseSet(object, path, value, customizer) {
                        if (!isObject(object)) return object;
                        for (var index = -1, length = (path = castPath(path, object)).length, lastIndex = length - 1, nested = object; null != nested && ++index < length; ) {
                            var key = toKey(path[index]), newValue = value;
                            if (index != lastIndex) {
                                var objValue = nested[key];
                                (newValue = customizer ? customizer(objValue, key, nested) : undefined) === undefined && (newValue = isObject(objValue) ? objValue : isIndex(path[index + 1]) ? [] : {});
                            }
                            assignValue(nested, key, newValue), nested = nested[key];
                        }
                        return object;
                    }
                    var baseSetData = metaMap ? function(func, data) {
                        return metaMap.set(func, data), func;
                    } : identity, baseSetToString = defineProperty ? function(func, string) {
                        return defineProperty(func, "toString", {
                            configurable: !0,
                            enumerable: !1,
                            value: constant(string),
                            writable: !0
                        });
                    } : identity;
                    function baseShuffle(collection) {
                        return shuffleSelf(values(collection));
                    }
                    function baseSlice(array, start, end) {
                        var index = -1, length = array.length;
                        start < 0 && (start = -start > length ? 0 : length + start), (end = end > length ? length : end) < 0 && (end += length), 
                        length = start > end ? 0 : end - start >>> 0, start >>>= 0;
                        for (var result = Array(length); ++index < length; ) result[index] = array[index + start];
                        return result;
                    }
                    function baseSome(collection, predicate) {
                        var result;
                        return baseEach(collection, (function(value, index, collection) {
                            return !(result = predicate(value, index, collection));
                        })), !!result;
                    }
                    function baseSortedIndex(array, value, retHighest) {
                        var low = 0, high = null == array ? low : array.length;
                        if ("number" == typeof value && value == value && high <= HALF_MAX_ARRAY_LENGTH) {
                            for (;low < high; ) {
                                var mid = low + high >>> 1, computed = array[mid];
                                null !== computed && !isSymbol(computed) && (retHighest ? computed <= value : computed < value) ? low = mid + 1 : high = mid;
                            }
                            return high;
                        }
                        return baseSortedIndexBy(array, value, identity, retHighest);
                    }
                    function baseSortedIndexBy(array, value, iteratee, retHighest) {
                        value = iteratee(value);
                        for (var low = 0, high = null == array ? 0 : array.length, valIsNaN = value != value, valIsNull = null === value, valIsSymbol = isSymbol(value), valIsUndefined = value === undefined; low < high; ) {
                            var mid = nativeFloor((low + high) / 2), computed = iteratee(array[mid]), othIsDefined = computed !== undefined, othIsNull = null === computed, othIsReflexive = computed == computed, othIsSymbol = isSymbol(computed);
                            if (valIsNaN) var setLow = retHighest || othIsReflexive; else setLow = valIsUndefined ? othIsReflexive && (retHighest || othIsDefined) : valIsNull ? othIsReflexive && othIsDefined && (retHighest || !othIsNull) : valIsSymbol ? othIsReflexive && othIsDefined && !othIsNull && (retHighest || !othIsSymbol) : !othIsNull && !othIsSymbol && (retHighest ? computed <= value : computed < value);
                            setLow ? low = mid + 1 : high = mid;
                        }
                        return nativeMin(high, MAX_ARRAY_INDEX);
                    }
                    function baseSortedUniq(array, iteratee) {
                        for (var index = -1, length = array.length, resIndex = 0, result = []; ++index < length; ) {
                            var value = array[index], computed = iteratee ? iteratee(value) : value;
                            if (!index || !eq(computed, seen)) {
                                var seen = computed;
                                result[resIndex++] = 0 === value ? 0 : value;
                            }
                        }
                        return result;
                    }
                    function baseToNumber(value) {
                        return "number" == typeof value ? value : isSymbol(value) ? NAN : +value;
                    }
                    function baseToString(value) {
                        if ("string" == typeof value) return value;
                        if (isArray(value)) return arrayMap(value, baseToString) + "";
                        if (isSymbol(value)) return symbolToString ? symbolToString.call(value) : "";
                        var result = value + "";
                        return "0" == result && 1 / value == -INFINITY ? "-0" : result;
                    }
                    function baseUniq(array, iteratee, comparator) {
                        var index = -1, includes = arrayIncludes, length = array.length, isCommon = !0, result = [], seen = result;
                        if (comparator) isCommon = !1, includes = arrayIncludesWith; else if (length >= LARGE_ARRAY_SIZE) {
                            var set = iteratee ? null : createSet(array);
                            if (set) return setToArray(set);
                            isCommon = !1, includes = cacheHas, seen = new SetCache;
                        } else seen = iteratee ? [] : result;
                        outer: for (;++index < length; ) {
                            var value = array[index], computed = iteratee ? iteratee(value) : value;
                            if (value = comparator || 0 !== value ? value : 0, isCommon && computed == computed) {
                                for (var seenIndex = seen.length; seenIndex--; ) if (seen[seenIndex] === computed) continue outer;
                                iteratee && seen.push(computed), result.push(value);
                            } else includes(seen, computed, comparator) || (seen !== result && seen.push(computed), 
                            result.push(value));
                        }
                        return result;
                    }
                    function baseUnset(object, path) {
                        return null == (object = parent(object, path = castPath(path, object))) || delete object[toKey(last(path))];
                    }
                    function baseUpdate(object, path, updater, customizer) {
                        return baseSet(object, path, updater(baseGet(object, path)), customizer);
                    }
                    function baseWhile(array, predicate, isDrop, fromRight) {
                        for (var length = array.length, index = fromRight ? length : -1; (fromRight ? index-- : ++index < length) && predicate(array[index], index, array); ) ;
                        return isDrop ? baseSlice(array, fromRight ? 0 : index, fromRight ? index + 1 : length) : baseSlice(array, fromRight ? index + 1 : 0, fromRight ? length : index);
                    }
                    function baseWrapperValue(value, actions) {
                        var result = value;
                        return result instanceof LazyWrapper && (result = result.value()), arrayReduce(actions, (function(result, action) {
                            return action.func.apply(action.thisArg, arrayPush([ result ], action.args));
                        }), result);
                    }
                    function baseXor(arrays, iteratee, comparator) {
                        var length = arrays.length;
                        if (length < 2) return length ? baseUniq(arrays[0]) : [];
                        for (var index = -1, result = Array(length); ++index < length; ) for (var array = arrays[index], othIndex = -1; ++othIndex < length; ) othIndex != index && (result[index] = baseDifference(result[index] || array, arrays[othIndex], iteratee, comparator));
                        return baseUniq(baseFlatten(result, 1), iteratee, comparator);
                    }
                    function baseZipObject(props, values, assignFunc) {
                        for (var index = -1, length = props.length, valsLength = values.length, result = {}; ++index < length; ) assignFunc(result, props[index], index < valsLength ? values[index] : undefined);
                        return result;
                    }
                    function castArrayLikeObject(value) {
                        return isArrayLikeObject(value) ? value : [];
                    }
                    function castFunction(value) {
                        return "function" == typeof value ? value : identity;
                    }
                    function castPath(value, object) {
                        return isArray(value) ? value : isKey(value, object) ? [ value ] : stringToPath(toString(value));
                    }
                    var castRest = baseRest;
                    function castSlice(array, start, end) {
                        var length = array.length;
                        return end = end === undefined ? length : end, !start && end >= length ? array : baseSlice(array, start, end);
                    }
                    var clearTimeout = ctxClearTimeout || function(id) {
                        return root.clearTimeout(id);
                    };
                    function cloneBuffer(buffer, isDeep) {
                        if (isDeep) return buffer.slice();
                        var length = buffer.length, result = allocUnsafe ? allocUnsafe(length) : new buffer.constructor(length);
                        return buffer.copy(result), result;
                    }
                    function cloneArrayBuffer(arrayBuffer) {
                        var result = new arrayBuffer.constructor(arrayBuffer.byteLength);
                        return new Uint8Array(result).set(new Uint8Array(arrayBuffer)), result;
                    }
                    function cloneTypedArray(typedArray, isDeep) {
                        var buffer = isDeep ? cloneArrayBuffer(typedArray.buffer) : typedArray.buffer;
                        return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
                    }
                    function compareAscending(value, other) {
                        if (value !== other) {
                            var valIsDefined = value !== undefined, valIsNull = null === value, valIsReflexive = value == value, valIsSymbol = isSymbol(value), othIsDefined = other !== undefined, othIsNull = null === other, othIsReflexive = other == other, othIsSymbol = isSymbol(other);
                            if (!othIsNull && !othIsSymbol && !valIsSymbol && value > other || valIsSymbol && othIsDefined && othIsReflexive && !othIsNull && !othIsSymbol || valIsNull && othIsDefined && othIsReflexive || !valIsDefined && othIsReflexive || !valIsReflexive) return 1;
                            if (!valIsNull && !valIsSymbol && !othIsSymbol && value < other || othIsSymbol && valIsDefined && valIsReflexive && !valIsNull && !valIsSymbol || othIsNull && valIsDefined && valIsReflexive || !othIsDefined && valIsReflexive || !othIsReflexive) return -1;
                        }
                        return 0;
                    }
                    function composeArgs(args, partials, holders, isCurried) {
                        for (var argsIndex = -1, argsLength = args.length, holdersLength = holders.length, leftIndex = -1, leftLength = partials.length, rangeLength = nativeMax(argsLength - holdersLength, 0), result = Array(leftLength + rangeLength), isUncurried = !isCurried; ++leftIndex < leftLength; ) result[leftIndex] = partials[leftIndex];
                        for (;++argsIndex < holdersLength; ) (isUncurried || argsIndex < argsLength) && (result[holders[argsIndex]] = args[argsIndex]);
                        for (;rangeLength--; ) result[leftIndex++] = args[argsIndex++];
                        return result;
                    }
                    function composeArgsRight(args, partials, holders, isCurried) {
                        for (var argsIndex = -1, argsLength = args.length, holdersIndex = -1, holdersLength = holders.length, rightIndex = -1, rightLength = partials.length, rangeLength = nativeMax(argsLength - holdersLength, 0), result = Array(rangeLength + rightLength), isUncurried = !isCurried; ++argsIndex < rangeLength; ) result[argsIndex] = args[argsIndex];
                        for (var offset = argsIndex; ++rightIndex < rightLength; ) result[offset + rightIndex] = partials[rightIndex];
                        for (;++holdersIndex < holdersLength; ) (isUncurried || argsIndex < argsLength) && (result[offset + holders[holdersIndex]] = args[argsIndex++]);
                        return result;
                    }
                    function copyArray(source, array) {
                        var index = -1, length = source.length;
                        for (array || (array = Array(length)); ++index < length; ) array[index] = source[index];
                        return array;
                    }
                    function copyObject(source, props, object, customizer) {
                        var isNew = !object;
                        object || (object = {});
                        for (var index = -1, length = props.length; ++index < length; ) {
                            var key = props[index], newValue = customizer ? customizer(object[key], source[key], key, object, source) : undefined;
                            newValue === undefined && (newValue = source[key]), isNew ? baseAssignValue(object, key, newValue) : assignValue(object, key, newValue);
                        }
                        return object;
                    }
                    function createAggregator(setter, initializer) {
                        return function(collection, iteratee) {
                            var func = isArray(collection) ? arrayAggregator : baseAggregator, accumulator = initializer ? initializer() : {};
                            return func(collection, setter, getIteratee(iteratee, 2), accumulator);
                        };
                    }
                    function createAssigner(assigner) {
                        return baseRest((function(object, sources) {
                            var index = -1, length = sources.length, customizer = length > 1 ? sources[length - 1] : undefined, guard = length > 2 ? sources[2] : undefined;
                            for (customizer = assigner.length > 3 && "function" == typeof customizer ? (length--, 
                            customizer) : undefined, guard && isIterateeCall(sources[0], sources[1], guard) && (customizer = length < 3 ? undefined : customizer, 
                            length = 1), object = Object(object); ++index < length; ) {
                                var source = sources[index];
                                source && assigner(object, source, index, customizer);
                            }
                            return object;
                        }));
                    }
                    function createBaseEach(eachFunc, fromRight) {
                        return function(collection, iteratee) {
                            if (null == collection) return collection;
                            if (!isArrayLike(collection)) return eachFunc(collection, iteratee);
                            for (var length = collection.length, index = fromRight ? length : -1, iterable = Object(collection); (fromRight ? index-- : ++index < length) && !1 !== iteratee(iterable[index], index, iterable); ) ;
                            return collection;
                        };
                    }
                    function createBaseFor(fromRight) {
                        return function(object, iteratee, keysFunc) {
                            for (var index = -1, iterable = Object(object), props = keysFunc(object), length = props.length; length--; ) {
                                var key = props[fromRight ? length : ++index];
                                if (!1 === iteratee(iterable[key], key, iterable)) break;
                            }
                            return object;
                        };
                    }
                    function createCaseFirst(methodName) {
                        return function(string) {
                            var strSymbols = hasUnicode(string = toString(string)) ? stringToArray(string) : undefined, chr = strSymbols ? strSymbols[0] : string.charAt(0), trailing = strSymbols ? castSlice(strSymbols, 1).join("") : string.slice(1);
                            return chr[methodName]() + trailing;
                        };
                    }
                    function createCompounder(callback) {
                        return function(string) {
                            return arrayReduce(words(deburr(string).replace(reApos, "")), callback, "");
                        };
                    }
                    function createCtor(Ctor) {
                        return function() {
                            var args = arguments;
                            switch (args.length) {
                              case 0:
                                return new Ctor;

                              case 1:
                                return new Ctor(args[0]);

                              case 2:
                                return new Ctor(args[0], args[1]);

                              case 3:
                                return new Ctor(args[0], args[1], args[2]);

                              case 4:
                                return new Ctor(args[0], args[1], args[2], args[3]);

                              case 5:
                                return new Ctor(args[0], args[1], args[2], args[3], args[4]);

                              case 6:
                                return new Ctor(args[0], args[1], args[2], args[3], args[4], args[5]);

                              case 7:
                                return new Ctor(args[0], args[1], args[2], args[3], args[4], args[5], args[6]);
                            }
                            var thisBinding = baseCreate(Ctor.prototype), result = Ctor.apply(thisBinding, args);
                            return isObject(result) ? result : thisBinding;
                        };
                    }
                    function createFind(findIndexFunc) {
                        return function(collection, predicate, fromIndex) {
                            var iterable = Object(collection);
                            if (!isArrayLike(collection)) {
                                var iteratee = getIteratee(predicate, 3);
                                collection = keys(collection), predicate = function(key) {
                                    return iteratee(iterable[key], key, iterable);
                                };
                            }
                            var index = findIndexFunc(collection, predicate, fromIndex);
                            return index > -1 ? iterable[iteratee ? collection[index] : index] : undefined;
                        };
                    }
                    function createFlow(fromRight) {
                        return flatRest((function(funcs) {
                            var length = funcs.length, index = length, prereq = LodashWrapper.prototype.thru;
                            for (fromRight && funcs.reverse(); index--; ) {
                                var func = funcs[index];
                                if ("function" != typeof func) throw new TypeError(FUNC_ERROR_TEXT);
                                if (prereq && !wrapper && "wrapper" == getFuncName(func)) var wrapper = new LodashWrapper([], !0);
                            }
                            for (index = wrapper ? index : length; ++index < length; ) {
                                var funcName = getFuncName(func = funcs[index]), data = "wrapper" == funcName ? getData(func) : undefined;
                                wrapper = data && isLaziable(data[0]) && data[1] == (WRAP_ARY_FLAG | WRAP_CURRY_FLAG | WRAP_PARTIAL_FLAG | WRAP_REARG_FLAG) && !data[4].length && 1 == data[9] ? wrapper[getFuncName(data[0])].apply(wrapper, data[3]) : 1 == func.length && isLaziable(func) ? wrapper[funcName]() : wrapper.thru(func);
                            }
                            return function() {
                                var args = arguments, value = args[0];
                                if (wrapper && 1 == args.length && isArray(value)) return wrapper.plant(value).value();
                                for (var index = 0, result = length ? funcs[index].apply(this, args) : value; ++index < length; ) result = funcs[index].call(this, result);
                                return result;
                            };
                        }));
                    }
                    function createHybrid(func, bitmask, thisArg, partials, holders, partialsRight, holdersRight, argPos, ary, arity) {
                        var isAry = bitmask & WRAP_ARY_FLAG, isBind = bitmask & WRAP_BIND_FLAG, isBindKey = bitmask & WRAP_BIND_KEY_FLAG, isCurried = bitmask & (WRAP_CURRY_FLAG | WRAP_CURRY_RIGHT_FLAG), isFlip = bitmask & WRAP_FLIP_FLAG, Ctor = isBindKey ? undefined : createCtor(func);
                        return function wrapper() {
                            for (var length = arguments.length, args = Array(length), index = length; index--; ) args[index] = arguments[index];
                            if (isCurried) var placeholder = getHolder(wrapper), holdersCount = function(array, placeholder) {
                                for (var length = array.length, result = 0; length--; ) array[length] === placeholder && ++result;
                                return result;
                            }(args, placeholder);
                            if (partials && (args = composeArgs(args, partials, holders, isCurried)), partialsRight && (args = composeArgsRight(args, partialsRight, holdersRight, isCurried)), 
                            length -= holdersCount, isCurried && length < arity) {
                                var newHolders = replaceHolders(args, placeholder);
                                return createRecurry(func, bitmask, createHybrid, wrapper.placeholder, thisArg, args, newHolders, argPos, ary, arity - length);
                            }
                            var thisBinding = isBind ? thisArg : this, fn = isBindKey ? thisBinding[func] : func;
                            return length = args.length, argPos ? args = function(array, indexes) {
                                for (var arrLength = array.length, length = nativeMin(indexes.length, arrLength), oldArray = copyArray(array); length--; ) {
                                    var index = indexes[length];
                                    array[length] = isIndex(index, arrLength) ? oldArray[index] : undefined;
                                }
                                return array;
                            }(args, argPos) : isFlip && length > 1 && args.reverse(), isAry && ary < length && (args.length = ary), 
                            this && this !== root && this instanceof wrapper && (fn = Ctor || createCtor(fn)), 
                            fn.apply(thisBinding, args);
                        };
                    }
                    function createInverter(setter, toIteratee) {
                        return function(object, iteratee) {
                            return function(object, setter, iteratee, accumulator) {
                                return baseForOwn(object, (function(value, key, object) {
                                    setter(accumulator, iteratee(value), key, object);
                                })), accumulator;
                            }(object, setter, toIteratee(iteratee), {});
                        };
                    }
                    function createMathOperation(operator, defaultValue) {
                        return function(value, other) {
                            var result;
                            if (value === undefined && other === undefined) return defaultValue;
                            if (value !== undefined && (result = value), other !== undefined) {
                                if (result === undefined) return other;
                                "string" == typeof value || "string" == typeof other ? (value = baseToString(value), 
                                other = baseToString(other)) : (value = baseToNumber(value), other = baseToNumber(other)), 
                                result = operator(value, other);
                            }
                            return result;
                        };
                    }
                    function createOver(arrayFunc) {
                        return flatRest((function(iteratees) {
                            return iteratees = arrayMap(iteratees, baseUnary(getIteratee())), baseRest((function(args) {
                                var thisArg = this;
                                return arrayFunc(iteratees, (function(iteratee) {
                                    return apply(iteratee, thisArg, args);
                                }));
                            }));
                        }));
                    }
                    function createPadding(length, chars) {
                        var charsLength = (chars = chars === undefined ? " " : baseToString(chars)).length;
                        if (charsLength < 2) return charsLength ? baseRepeat(chars, length) : chars;
                        var result = baseRepeat(chars, nativeCeil(length / stringSize(chars)));
                        return hasUnicode(chars) ? castSlice(stringToArray(result), 0, length).join("") : result.slice(0, length);
                    }
                    function createRange(fromRight) {
                        return function(start, end, step) {
                            return step && "number" != typeof step && isIterateeCall(start, end, step) && (end = step = undefined), 
                            start = toFinite(start), end === undefined ? (end = start, start = 0) : end = toFinite(end), 
                            function(start, end, step, fromRight) {
                                for (var index = -1, length = nativeMax(nativeCeil((end - start) / (step || 1)), 0), result = Array(length); length--; ) result[fromRight ? length : ++index] = start, 
                                start += step;
                                return result;
                            }(start, end, step = step === undefined ? start < end ? 1 : -1 : toFinite(step), fromRight);
                        };
                    }
                    function createRelationalOperation(operator) {
                        return function(value, other) {
                            return "string" == typeof value && "string" == typeof other || (value = toNumber(value), 
                            other = toNumber(other)), operator(value, other);
                        };
                    }
                    function createRecurry(func, bitmask, wrapFunc, placeholder, thisArg, partials, holders, argPos, ary, arity) {
                        var isCurry = bitmask & WRAP_CURRY_FLAG;
                        bitmask |= isCurry ? WRAP_PARTIAL_FLAG : WRAP_PARTIAL_RIGHT_FLAG, (bitmask &= ~(isCurry ? WRAP_PARTIAL_RIGHT_FLAG : WRAP_PARTIAL_FLAG)) & WRAP_CURRY_BOUND_FLAG || (bitmask &= ~(WRAP_BIND_FLAG | WRAP_BIND_KEY_FLAG));
                        var newData = [ func, bitmask, thisArg, isCurry ? partials : undefined, isCurry ? holders : undefined, isCurry ? undefined : partials, isCurry ? undefined : holders, argPos, ary, arity ], result = wrapFunc.apply(undefined, newData);
                        return isLaziable(func) && setData(result, newData), result.placeholder = placeholder, 
                        setWrapToString(result, func, bitmask);
                    }
                    function createRound(methodName) {
                        var func = Math[methodName];
                        return function(number, precision) {
                            if (number = toNumber(number), (precision = null == precision ? 0 : nativeMin(toInteger(precision), 292)) && nativeIsFinite(number)) {
                                var pair = (toString(number) + "e").split("e");
                                return +((pair = (toString(func(pair[0] + "e" + (+pair[1] + precision))) + "e").split("e"))[0] + "e" + (+pair[1] - precision));
                            }
                            return func(number);
                        };
                    }
                    var createSet = Set && 1 / setToArray(new Set([ , -0 ]))[1] == INFINITY ? function(values) {
                        return new Set(values);
                    } : noop;
                    function createToPairs(keysFunc) {
                        return function(object) {
                            var tag = getTag(object);
                            return tag == mapTag ? mapToArray(object) : tag == setTag ? setToPairs(object) : function(object, props) {
                                return arrayMap(props, (function(key) {
                                    return [ key, object[key] ];
                                }));
                            }(object, keysFunc(object));
                        };
                    }
                    function createWrap(func, bitmask, thisArg, partials, holders, argPos, ary, arity) {
                        var isBindKey = bitmask & WRAP_BIND_KEY_FLAG;
                        if (!isBindKey && "function" != typeof func) throw new TypeError(FUNC_ERROR_TEXT);
                        var length = partials ? partials.length : 0;
                        if (length || (bitmask &= ~(WRAP_PARTIAL_FLAG | WRAP_PARTIAL_RIGHT_FLAG), partials = holders = undefined), 
                        ary = ary === undefined ? ary : nativeMax(toInteger(ary), 0), arity = arity === undefined ? arity : toInteger(arity), 
                        length -= holders ? holders.length : 0, bitmask & WRAP_PARTIAL_RIGHT_FLAG) {
                            var partialsRight = partials, holdersRight = holders;
                            partials = holders = undefined;
                        }
                        var data = isBindKey ? undefined : getData(func), newData = [ func, bitmask, thisArg, partials, holders, partialsRight, holdersRight, argPos, ary, arity ];
                        if (data && function(data, source) {
                            var bitmask = data[1], srcBitmask = source[1], newBitmask = bitmask | srcBitmask;
                            if (!(newBitmask < (WRAP_BIND_FLAG | WRAP_BIND_KEY_FLAG | WRAP_ARY_FLAG) || srcBitmask == WRAP_ARY_FLAG && bitmask == WRAP_CURRY_FLAG || srcBitmask == WRAP_ARY_FLAG && bitmask == WRAP_REARG_FLAG && data[7].length <= source[8] || srcBitmask == (WRAP_ARY_FLAG | WRAP_REARG_FLAG) && source[7].length <= source[8] && bitmask == WRAP_CURRY_FLAG)) return data;
                            srcBitmask & WRAP_BIND_FLAG && (data[2] = source[2], newBitmask |= bitmask & WRAP_BIND_FLAG ? 0 : WRAP_CURRY_BOUND_FLAG);
                            var value = source[3];
                            if (value) {
                                var partials = data[3];
                                data[3] = partials ? composeArgs(partials, value, source[4]) : value, data[4] = partials ? replaceHolders(data[3], PLACEHOLDER) : source[4];
                            }
                            (value = source[5]) && (data[5] = (partials = data[5]) ? composeArgsRight(partials, value, source[6]) : value, 
                            data[6] = partials ? replaceHolders(data[5], PLACEHOLDER) : source[6]), (value = source[7]) && (data[7] = value), 
                            srcBitmask & WRAP_ARY_FLAG && (data[8] = null == data[8] ? source[8] : nativeMin(data[8], source[8])), 
                            null == data[9] && (data[9] = source[9]), data[0] = source[0], data[1] = newBitmask;
                        }(newData, data), func = newData[0], bitmask = newData[1], thisArg = newData[2], 
                        partials = newData[3], holders = newData[4], !(arity = newData[9] = newData[9] === undefined ? isBindKey ? 0 : func.length : nativeMax(newData[9] - length, 0)) && bitmask & (WRAP_CURRY_FLAG | WRAP_CURRY_RIGHT_FLAG) && (bitmask &= ~(WRAP_CURRY_FLAG | WRAP_CURRY_RIGHT_FLAG)), 
                        bitmask && bitmask != WRAP_BIND_FLAG) result = bitmask == WRAP_CURRY_FLAG || bitmask == WRAP_CURRY_RIGHT_FLAG ? function(func, bitmask, arity) {
                            var Ctor = createCtor(func);
                            return function wrapper() {
                                for (var length = arguments.length, args = Array(length), index = length, placeholder = getHolder(wrapper); index--; ) args[index] = arguments[index];
                                var holders = length < 3 && args[0] !== placeholder && args[length - 1] !== placeholder ? [] : replaceHolders(args, placeholder);
                                return (length -= holders.length) < arity ? createRecurry(func, bitmask, createHybrid, wrapper.placeholder, undefined, args, holders, undefined, undefined, arity - length) : apply(this && this !== root && this instanceof wrapper ? Ctor : func, this, args);
                            };
                        }(func, bitmask, arity) : bitmask != WRAP_PARTIAL_FLAG && bitmask != (WRAP_BIND_FLAG | WRAP_PARTIAL_FLAG) || holders.length ? createHybrid.apply(undefined, newData) : function(func, bitmask, thisArg, partials) {
                            var isBind = bitmask & WRAP_BIND_FLAG, Ctor = createCtor(func);
                            return function wrapper() {
                                for (var argsIndex = -1, argsLength = arguments.length, leftIndex = -1, leftLength = partials.length, args = Array(leftLength + argsLength), fn = this && this !== root && this instanceof wrapper ? Ctor : func; ++leftIndex < leftLength; ) args[leftIndex] = partials[leftIndex];
                                for (;argsLength--; ) args[leftIndex++] = arguments[++argsIndex];
                                return apply(fn, isBind ? thisArg : this, args);
                            };
                        }(func, bitmask, thisArg, partials); else var result = function(func, bitmask, thisArg) {
                            var isBind = bitmask & WRAP_BIND_FLAG, Ctor = createCtor(func);
                            return function wrapper() {
                                return (this && this !== root && this instanceof wrapper ? Ctor : func).apply(isBind ? thisArg : this, arguments);
                            };
                        }(func, bitmask, thisArg);
                        return setWrapToString((data ? baseSetData : setData)(result, newData), func, bitmask);
                    }
                    function customDefaultsAssignIn(objValue, srcValue, key, object) {
                        return objValue === undefined || eq(objValue, objectProto[key]) && !hasOwnProperty.call(object, key) ? srcValue : objValue;
                    }
                    function customDefaultsMerge(objValue, srcValue, key, object, source, stack) {
                        return isObject(objValue) && isObject(srcValue) && (stack.set(srcValue, objValue), 
                        baseMerge(objValue, srcValue, undefined, customDefaultsMerge, stack), stack.delete(srcValue)), 
                        objValue;
                    }
                    function customOmitClone(value) {
                        return isPlainObject(value) ? undefined : value;
                    }
                    function equalArrays(array, other, bitmask, customizer, equalFunc, stack) {
                        var isPartial = bitmask & COMPARE_PARTIAL_FLAG, arrLength = array.length, othLength = other.length;
                        if (arrLength != othLength && !(isPartial && othLength > arrLength)) return !1;
                        var stacked = stack.get(array);
                        if (stacked && stack.get(other)) return stacked == other;
                        var index = -1, result = !0, seen = bitmask & COMPARE_UNORDERED_FLAG ? new SetCache : undefined;
                        for (stack.set(array, other), stack.set(other, array); ++index < arrLength; ) {
                            var arrValue = array[index], othValue = other[index];
                            if (customizer) var compared = isPartial ? customizer(othValue, arrValue, index, other, array, stack) : customizer(arrValue, othValue, index, array, other, stack);
                            if (compared !== undefined) {
                                if (compared) continue;
                                result = !1;
                                break;
                            }
                            if (seen) {
                                if (!arraySome(other, (function(othValue, othIndex) {
                                    if (!cacheHas(seen, othIndex) && (arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) return seen.push(othIndex);
                                }))) {
                                    result = !1;
                                    break;
                                }
                            } else if (arrValue !== othValue && !equalFunc(arrValue, othValue, bitmask, customizer, stack)) {
                                result = !1;
                                break;
                            }
                        }
                        return stack.delete(array), stack.delete(other), result;
                    }
                    function flatRest(func) {
                        return setToString(overRest(func, undefined, flatten), func + "");
                    }
                    function getAllKeys(object) {
                        return baseGetAllKeys(object, keys, getSymbols);
                    }
                    function getAllKeysIn(object) {
                        return baseGetAllKeys(object, keysIn, getSymbolsIn);
                    }
                    var getData = metaMap ? function(func) {
                        return metaMap.get(func);
                    } : noop;
                    function getFuncName(func) {
                        for (var result = func.name + "", array = realNames[result], length = hasOwnProperty.call(realNames, result) ? array.length : 0; length--; ) {
                            var data = array[length], otherFunc = data.func;
                            if (null == otherFunc || otherFunc == func) return data.name;
                        }
                        return result;
                    }
                    function getHolder(func) {
                        return (hasOwnProperty.call(lodash, "placeholder") ? lodash : func).placeholder;
                    }
                    function getIteratee() {
                        var result = lodash.iteratee || iteratee;
                        return result = result === iteratee ? baseIteratee : result, arguments.length ? result(arguments[0], arguments[1]) : result;
                    }
                    function getMapData(map, key) {
                        var value, type, data = map.__data__;
                        return ("string" == (type = typeof (value = key)) || "number" == type || "symbol" == type || "boolean" == type ? "__proto__" !== value : null === value) ? data["string" == typeof key ? "string" : "hash"] : data.map;
                    }
                    function getMatchData(object) {
                        for (var result = keys(object), length = result.length; length--; ) {
                            var key = result[length], value = object[key];
                            result[length] = [ key, value, isStrictComparable(value) ];
                        }
                        return result;
                    }
                    function getNative(object, key) {
                        var value = function(object, key) {
                            return null == object ? undefined : object[key];
                        }(object, key);
                        return baseIsNative(value) ? value : undefined;
                    }
                    var getSymbols = nativeGetSymbols ? function(object) {
                        return null == object ? [] : (object = Object(object), arrayFilter(nativeGetSymbols(object), (function(symbol) {
                            return propertyIsEnumerable.call(object, symbol);
                        })));
                    } : stubArray, getSymbolsIn = nativeGetSymbols ? function(object) {
                        for (var result = []; object; ) arrayPush(result, getSymbols(object)), object = getPrototype(object);
                        return result;
                    } : stubArray, getTag = baseGetTag;
                    function hasPath(object, path, hasFunc) {
                        for (var index = -1, length = (path = castPath(path, object)).length, result = !1; ++index < length; ) {
                            var key = toKey(path[index]);
                            if (!(result = null != object && hasFunc(object, key))) break;
                            object = object[key];
                        }
                        return result || ++index != length ? result : !!(length = null == object ? 0 : object.length) && isLength(length) && isIndex(key, length) && (isArray(object) || isArguments(object));
                    }
                    function initCloneObject(object) {
                        return "function" != typeof object.constructor || isPrototype(object) ? {} : baseCreate(getPrototype(object));
                    }
                    function isFlattenable(value) {
                        return isArray(value) || isArguments(value) || !!(spreadableSymbol && value && value[spreadableSymbol]);
                    }
                    function isIndex(value, length) {
                        var type = typeof value;
                        return !!(length = null == length ? MAX_SAFE_INTEGER : length) && ("number" == type || "symbol" != type && reIsUint.test(value)) && value > -1 && value % 1 == 0 && value < length;
                    }
                    function isIterateeCall(value, index, object) {
                        if (!isObject(object)) return !1;
                        var type = typeof index;
                        return !!("number" == type ? isArrayLike(object) && isIndex(index, object.length) : "string" == type && index in object) && eq(object[index], value);
                    }
                    function isKey(value, object) {
                        if (isArray(value)) return !1;
                        var type = typeof value;
                        return !("number" != type && "symbol" != type && "boolean" != type && null != value && !isSymbol(value)) || reIsPlainProp.test(value) || !reIsDeepProp.test(value) || null != object && value in Object(object);
                    }
                    function isLaziable(func) {
                        var funcName = getFuncName(func), other = lodash[funcName];
                        if ("function" != typeof other || !(funcName in LazyWrapper.prototype)) return !1;
                        if (func === other) return !0;
                        var data = getData(other);
                        return !!data && func === data[0];
                    }
                    (DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag || Map && getTag(new Map) != mapTag || Promise && "[object Promise]" != getTag(Promise.resolve()) || Set && getTag(new Set) != setTag || WeakMap && getTag(new WeakMap) != weakMapTag) && (getTag = function(value) {
                        var result = baseGetTag(value), Ctor = result == objectTag ? value.constructor : undefined, ctorString = Ctor ? toSource(Ctor) : "";
                        if (ctorString) switch (ctorString) {
                          case dataViewCtorString:
                            return dataViewTag;

                          case mapCtorString:
                            return mapTag;

                          case promiseCtorString:
                            return "[object Promise]";

                          case setCtorString:
                            return setTag;

                          case weakMapCtorString:
                            return weakMapTag;
                        }
                        return result;
                    });
                    var isMaskable = coreJsData ? isFunction : stubFalse;
                    function isPrototype(value) {
                        var Ctor = value && value.constructor;
                        return value === ("function" == typeof Ctor && Ctor.prototype || objectProto);
                    }
                    function isStrictComparable(value) {
                        return value == value && !isObject(value);
                    }
                    function matchesStrictComparable(key, srcValue) {
                        return function(object) {
                            return null != object && object[key] === srcValue && (srcValue !== undefined || key in Object(object));
                        };
                    }
                    function overRest(func, start, transform) {
                        return start = nativeMax(start === undefined ? func.length - 1 : start, 0), function() {
                            for (var args = arguments, index = -1, length = nativeMax(args.length - start, 0), array = Array(length); ++index < length; ) array[index] = args[start + index];
                            index = -1;
                            for (var otherArgs = Array(start + 1); ++index < start; ) otherArgs[index] = args[index];
                            return otherArgs[start] = transform(array), apply(func, this, otherArgs);
                        };
                    }
                    function parent(object, path) {
                        return path.length < 2 ? object : baseGet(object, baseSlice(path, 0, -1));
                    }
                    function safeGet(object, key) {
                        if (("constructor" !== key || "function" != typeof object[key]) && "__proto__" != key) return object[key];
                    }
                    var setData = shortOut(baseSetData), setTimeout = ctxSetTimeout || function(func, wait) {
                        return root.setTimeout(func, wait);
                    }, setToString = shortOut(baseSetToString);
                    function setWrapToString(wrapper, reference, bitmask) {
                        var source = reference + "";
                        return setToString(wrapper, function(source, details) {
                            var length = details.length;
                            if (!length) return source;
                            var lastIndex = length - 1;
                            return details[lastIndex] = (length > 1 ? "& " : "") + details[lastIndex], details = details.join(length > 2 ? ", " : " "), 
                            source.replace(reWrapComment, "{\n/* [wrapped with " + details + "] */\n");
                        }(source, function(details, bitmask) {
                            return arrayEach(wrapFlags, (function(pair) {
                                var value = "_." + pair[0];
                                bitmask & pair[1] && !arrayIncludes(details, value) && details.push(value);
                            })), details.sort();
                        }(function(source) {
                            var match = source.match(reWrapDetails);
                            return match ? match[1].split(reSplitDetails) : [];
                        }(source), bitmask)));
                    }
                    function shortOut(func) {
                        var count = 0, lastCalled = 0;
                        return function() {
                            var stamp = nativeNow(), remaining = HOT_SPAN - (stamp - lastCalled);
                            if (lastCalled = stamp, remaining > 0) {
                                if (++count >= HOT_COUNT) return arguments[0];
                            } else count = 0;
                            return func.apply(undefined, arguments);
                        };
                    }
                    function shuffleSelf(array, size) {
                        var index = -1, length = array.length, lastIndex = length - 1;
                        for (size = size === undefined ? length : size; ++index < size; ) {
                            var rand = baseRandom(index, lastIndex), value = array[rand];
                            array[rand] = array[index], array[index] = value;
                        }
                        return array.length = size, array;
                    }
                    var result, cache, stringToPath = (result = memoize((function(string) {
                        var result = [];
                        return 46 === string.charCodeAt(0) && result.push(""), string.replace(rePropName, (function(match, number, quote, subString) {
                            result.push(quote ? subString.replace(reEscapeChar, "$1") : number || match);
                        })), result;
                    }), (function(key) {
                        return 500 === cache.size && cache.clear(), key;
                    })), cache = result.cache, result);
                    function toKey(value) {
                        if ("string" == typeof value || isSymbol(value)) return value;
                        var result = value + "";
                        return "0" == result && 1 / value == -INFINITY ? "-0" : result;
                    }
                    function toSource(func) {
                        if (null != func) {
                            try {
                                return funcToString.call(func);
                            } catch (e) {}
                            try {
                                return func + "";
                            } catch (e) {}
                        }
                        return "";
                    }
                    function wrapperClone(wrapper) {
                        if (wrapper instanceof LazyWrapper) return wrapper.clone();
                        var result = new LodashWrapper(wrapper.__wrapped__, wrapper.__chain__);
                        return result.__actions__ = copyArray(wrapper.__actions__), result.__index__ = wrapper.__index__, 
                        result.__values__ = wrapper.__values__, result;
                    }
                    var difference = baseRest((function(array, values) {
                        return isArrayLikeObject(array) ? baseDifference(array, baseFlatten(values, 1, isArrayLikeObject, !0)) : [];
                    })), differenceBy = baseRest((function(array, values) {
                        var iteratee = last(values);
                        return isArrayLikeObject(iteratee) && (iteratee = undefined), isArrayLikeObject(array) ? baseDifference(array, baseFlatten(values, 1, isArrayLikeObject, !0), getIteratee(iteratee, 2)) : [];
                    })), differenceWith = baseRest((function(array, values) {
                        var comparator = last(values);
                        return isArrayLikeObject(comparator) && (comparator = undefined), isArrayLikeObject(array) ? baseDifference(array, baseFlatten(values, 1, isArrayLikeObject, !0), undefined, comparator) : [];
                    }));
                    function findIndex(array, predicate, fromIndex) {
                        var length = null == array ? 0 : array.length;
                        if (!length) return -1;
                        var index = null == fromIndex ? 0 : toInteger(fromIndex);
                        return index < 0 && (index = nativeMax(length + index, 0)), baseFindIndex(array, getIteratee(predicate, 3), index);
                    }
                    function findLastIndex(array, predicate, fromIndex) {
                        var length = null == array ? 0 : array.length;
                        if (!length) return -1;
                        var index = length - 1;
                        return fromIndex !== undefined && (index = toInteger(fromIndex), index = fromIndex < 0 ? nativeMax(length + index, 0) : nativeMin(index, length - 1)), 
                        baseFindIndex(array, getIteratee(predicate, 3), index, !0);
                    }
                    function flatten(array) {
                        return null != array && array.length ? baseFlatten(array, 1) : [];
                    }
                    function head(array) {
                        return array && array.length ? array[0] : undefined;
                    }
                    var intersection = baseRest((function(arrays) {
                        var mapped = arrayMap(arrays, castArrayLikeObject);
                        return mapped.length && mapped[0] === arrays[0] ? baseIntersection(mapped) : [];
                    })), intersectionBy = baseRest((function(arrays) {
                        var iteratee = last(arrays), mapped = arrayMap(arrays, castArrayLikeObject);
                        return iteratee === last(mapped) ? iteratee = undefined : mapped.pop(), mapped.length && mapped[0] === arrays[0] ? baseIntersection(mapped, getIteratee(iteratee, 2)) : [];
                    })), intersectionWith = baseRest((function(arrays) {
                        var comparator = last(arrays), mapped = arrayMap(arrays, castArrayLikeObject);
                        return (comparator = "function" == typeof comparator ? comparator : undefined) && mapped.pop(), 
                        mapped.length && mapped[0] === arrays[0] ? baseIntersection(mapped, undefined, comparator) : [];
                    }));
                    function last(array) {
                        var length = null == array ? 0 : array.length;
                        return length ? array[length - 1] : undefined;
                    }
                    var pull = baseRest(pullAll);
                    function pullAll(array, values) {
                        return array && array.length && values && values.length ? basePullAll(array, values) : array;
                    }
                    var pullAt = flatRest((function(array, indexes) {
                        var length = null == array ? 0 : array.length, result = baseAt(array, indexes);
                        return basePullAt(array, arrayMap(indexes, (function(index) {
                            return isIndex(index, length) ? +index : index;
                        })).sort(compareAscending)), result;
                    }));
                    function reverse(array) {
                        return null == array ? array : nativeReverse.call(array);
                    }
                    var union = baseRest((function(arrays) {
                        return baseUniq(baseFlatten(arrays, 1, isArrayLikeObject, !0));
                    })), unionBy = baseRest((function(arrays) {
                        var iteratee = last(arrays);
                        return isArrayLikeObject(iteratee) && (iteratee = undefined), baseUniq(baseFlatten(arrays, 1, isArrayLikeObject, !0), getIteratee(iteratee, 2));
                    })), unionWith = baseRest((function(arrays) {
                        var comparator = last(arrays);
                        return comparator = "function" == typeof comparator ? comparator : undefined, baseUniq(baseFlatten(arrays, 1, isArrayLikeObject, !0), undefined, comparator);
                    }));
                    function unzip(array) {
                        if (!array || !array.length) return [];
                        var length = 0;
                        return array = arrayFilter(array, (function(group) {
                            if (isArrayLikeObject(group)) return length = nativeMax(group.length, length), !0;
                        })), baseTimes(length, (function(index) {
                            return arrayMap(array, baseProperty(index));
                        }));
                    }
                    function unzipWith(array, iteratee) {
                        if (!array || !array.length) return [];
                        var result = unzip(array);
                        return null == iteratee ? result : arrayMap(result, (function(group) {
                            return apply(iteratee, undefined, group);
                        }));
                    }
                    var without = baseRest((function(array, values) {
                        return isArrayLikeObject(array) ? baseDifference(array, values) : [];
                    })), xor = baseRest((function(arrays) {
                        return baseXor(arrayFilter(arrays, isArrayLikeObject));
                    })), xorBy = baseRest((function(arrays) {
                        var iteratee = last(arrays);
                        return isArrayLikeObject(iteratee) && (iteratee = undefined), baseXor(arrayFilter(arrays, isArrayLikeObject), getIteratee(iteratee, 2));
                    })), xorWith = baseRest((function(arrays) {
                        var comparator = last(arrays);
                        return comparator = "function" == typeof comparator ? comparator : undefined, baseXor(arrayFilter(arrays, isArrayLikeObject), undefined, comparator);
                    })), zip = baseRest(unzip), zipWith = baseRest((function(arrays) {
                        var length = arrays.length, iteratee = length > 1 ? arrays[length - 1] : undefined;
                        return iteratee = "function" == typeof iteratee ? (arrays.pop(), iteratee) : undefined, 
                        unzipWith(arrays, iteratee);
                    }));
                    function chain(value) {
                        var result = lodash(value);
                        return result.__chain__ = !0, result;
                    }
                    function thru(value, interceptor) {
                        return interceptor(value);
                    }
                    var wrapperAt = flatRest((function(paths) {
                        var length = paths.length, start = length ? paths[0] : 0, value = this.__wrapped__, interceptor = function(object) {
                            return baseAt(object, paths);
                        };
                        return !(length > 1 || this.__actions__.length) && value instanceof LazyWrapper && isIndex(start) ? ((value = value.slice(start, +start + (length ? 1 : 0))).__actions__.push({
                            func: thru,
                            args: [ interceptor ],
                            thisArg: undefined
                        }), new LodashWrapper(value, this.__chain__).thru((function(array) {
                            return length && !array.length && array.push(undefined), array;
                        }))) : this.thru(interceptor);
                    })), countBy = createAggregator((function(result, value, key) {
                        hasOwnProperty.call(result, key) ? ++result[key] : baseAssignValue(result, key, 1);
                    })), find = createFind(findIndex), findLast = createFind(findLastIndex);
                    function forEach(collection, iteratee) {
                        return (isArray(collection) ? arrayEach : baseEach)(collection, getIteratee(iteratee, 3));
                    }
                    function forEachRight(collection, iteratee) {
                        return (isArray(collection) ? arrayEachRight : baseEachRight)(collection, getIteratee(iteratee, 3));
                    }
                    var groupBy = createAggregator((function(result, value, key) {
                        hasOwnProperty.call(result, key) ? result[key].push(value) : baseAssignValue(result, key, [ value ]);
                    })), invokeMap = baseRest((function(collection, path, args) {
                        var index = -1, isFunc = "function" == typeof path, result = isArrayLike(collection) ? Array(collection.length) : [];
                        return baseEach(collection, (function(value) {
                            result[++index] = isFunc ? apply(path, value, args) : baseInvoke(value, path, args);
                        })), result;
                    })), keyBy = createAggregator((function(result, value, key) {
                        baseAssignValue(result, key, value);
                    }));
                    function map(collection, iteratee) {
                        return (isArray(collection) ? arrayMap : baseMap)(collection, getIteratee(iteratee, 3));
                    }
                    var partition = createAggregator((function(result, value, key) {
                        result[key ? 0 : 1].push(value);
                    }), (function() {
                        return [ [], [] ];
                    })), sortBy = baseRest((function(collection, iteratees) {
                        if (null == collection) return [];
                        var length = iteratees.length;
                        return length > 1 && isIterateeCall(collection, iteratees[0], iteratees[1]) ? iteratees = [] : length > 2 && isIterateeCall(iteratees[0], iteratees[1], iteratees[2]) && (iteratees = [ iteratees[0] ]), 
                        baseOrderBy(collection, baseFlatten(iteratees, 1), []);
                    })), now = ctxNow || function() {
                        return root.Date.now();
                    };
                    function ary(func, n, guard) {
                        return n = guard ? undefined : n, createWrap(func, WRAP_ARY_FLAG, undefined, undefined, undefined, undefined, n = func && null == n ? func.length : n);
                    }
                    function before(n, func) {
                        var result;
                        if ("function" != typeof func) throw new TypeError(FUNC_ERROR_TEXT);
                        return n = toInteger(n), function() {
                            return --n > 0 && (result = func.apply(this, arguments)), n <= 1 && (func = undefined), 
                            result;
                        };
                    }
                    var bind = baseRest((function(func, thisArg, partials) {
                        var bitmask = WRAP_BIND_FLAG;
                        if (partials.length) {
                            var holders = replaceHolders(partials, getHolder(bind));
                            bitmask |= WRAP_PARTIAL_FLAG;
                        }
                        return createWrap(func, bitmask, thisArg, partials, holders);
                    })), bindKey = baseRest((function(object, key, partials) {
                        var bitmask = WRAP_BIND_FLAG | WRAP_BIND_KEY_FLAG;
                        if (partials.length) {
                            var holders = replaceHolders(partials, getHolder(bindKey));
                            bitmask |= WRAP_PARTIAL_FLAG;
                        }
                        return createWrap(key, bitmask, object, partials, holders);
                    }));
                    function debounce(func, wait, options) {
                        var lastArgs, lastThis, maxWait, result, timerId, lastCallTime, lastInvokeTime = 0, leading = !1, maxing = !1, trailing = !0;
                        if ("function" != typeof func) throw new TypeError(FUNC_ERROR_TEXT);
                        function invokeFunc(time) {
                            var args = lastArgs, thisArg = lastThis;
                            return lastArgs = lastThis = undefined, lastInvokeTime = time, result = func.apply(thisArg, args);
                        }
                        function shouldInvoke(time) {
                            var timeSinceLastCall = time - lastCallTime;
                            return lastCallTime === undefined || timeSinceLastCall >= wait || timeSinceLastCall < 0 || maxing && time - lastInvokeTime >= maxWait;
                        }
                        function timerExpired() {
                            var time = now();
                            if (shouldInvoke(time)) return trailingEdge(time);
                            timerId = setTimeout(timerExpired, function(time) {
                                var timeWaiting = wait - (time - lastCallTime);
                                return maxing ? nativeMin(timeWaiting, maxWait - (time - lastInvokeTime)) : timeWaiting;
                            }(time));
                        }
                        function trailingEdge(time) {
                            return timerId = undefined, trailing && lastArgs ? invokeFunc(time) : (lastArgs = lastThis = undefined, 
                            result);
                        }
                        function debounced() {
                            var time = now(), isInvoking = shouldInvoke(time);
                            if (lastArgs = arguments, lastThis = this, lastCallTime = time, isInvoking) {
                                if (timerId === undefined) return function(time) {
                                    return lastInvokeTime = time, timerId = setTimeout(timerExpired, wait), leading ? invokeFunc(time) : result;
                                }(lastCallTime);
                                if (maxing) return clearTimeout(timerId), timerId = setTimeout(timerExpired, wait), 
                                invokeFunc(lastCallTime);
                            }
                            return timerId === undefined && (timerId = setTimeout(timerExpired, wait)), result;
                        }
                        return wait = toNumber(wait) || 0, isObject(options) && (leading = !!options.leading, 
                        maxWait = (maxing = "maxWait" in options) ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait, 
                        trailing = "trailing" in options ? !!options.trailing : trailing), debounced.cancel = function() {
                            timerId !== undefined && clearTimeout(timerId), lastInvokeTime = 0, lastArgs = lastCallTime = lastThis = timerId = undefined;
                        }, debounced.flush = function() {
                            return timerId === undefined ? result : trailingEdge(now());
                        }, debounced;
                    }
                    var defer = baseRest((function(func, args) {
                        return baseDelay(func, 1, args);
                    })), delay = baseRest((function(func, wait, args) {
                        return baseDelay(func, toNumber(wait) || 0, args);
                    }));
                    function memoize(func, resolver) {
                        if ("function" != typeof func || null != resolver && "function" != typeof resolver) throw new TypeError(FUNC_ERROR_TEXT);
                        var memoized = function() {
                            var args = arguments, key = resolver ? resolver.apply(this, args) : args[0], cache = memoized.cache;
                            if (cache.has(key)) return cache.get(key);
                            var result = func.apply(this, args);
                            return memoized.cache = cache.set(key, result) || cache, result;
                        };
                        return memoized.cache = new (memoize.Cache || MapCache), memoized;
                    }
                    function negate(predicate) {
                        if ("function" != typeof predicate) throw new TypeError(FUNC_ERROR_TEXT);
                        return function() {
                            var args = arguments;
                            switch (args.length) {
                              case 0:
                                return !predicate.call(this);

                              case 1:
                                return !predicate.call(this, args[0]);

                              case 2:
                                return !predicate.call(this, args[0], args[1]);

                              case 3:
                                return !predicate.call(this, args[0], args[1], args[2]);
                            }
                            return !predicate.apply(this, args);
                        };
                    }
                    memoize.Cache = MapCache;
                    var overArgs = castRest((function(func, transforms) {
                        var funcsLength = (transforms = 1 == transforms.length && isArray(transforms[0]) ? arrayMap(transforms[0], baseUnary(getIteratee())) : arrayMap(baseFlatten(transforms, 1), baseUnary(getIteratee()))).length;
                        return baseRest((function(args) {
                            for (var index = -1, length = nativeMin(args.length, funcsLength); ++index < length; ) args[index] = transforms[index].call(this, args[index]);
                            return apply(func, this, args);
                        }));
                    })), partial = baseRest((function(func, partials) {
                        var holders = replaceHolders(partials, getHolder(partial));
                        return createWrap(func, WRAP_PARTIAL_FLAG, undefined, partials, holders);
                    })), partialRight = baseRest((function(func, partials) {
                        var holders = replaceHolders(partials, getHolder(partialRight));
                        return createWrap(func, WRAP_PARTIAL_RIGHT_FLAG, undefined, partials, holders);
                    })), rearg = flatRest((function(func, indexes) {
                        return createWrap(func, WRAP_REARG_FLAG, undefined, undefined, undefined, indexes);
                    }));
                    function eq(value, other) {
                        return value === other || value != value && other != other;
                    }
                    var gt = createRelationalOperation(baseGt), gte = createRelationalOperation((function(value, other) {
                        return value >= other;
                    })), isArguments = baseIsArguments(function() {
                        return arguments;
                    }()) ? baseIsArguments : function(value) {
                        return isObjectLike(value) && hasOwnProperty.call(value, "callee") && !propertyIsEnumerable.call(value, "callee");
                    }, isArray = Array.isArray, isArrayBuffer = nodeIsArrayBuffer ? baseUnary(nodeIsArrayBuffer) : function(value) {
                        return isObjectLike(value) && baseGetTag(value) == arrayBufferTag;
                    };
                    function isArrayLike(value) {
                        return null != value && isLength(value.length) && !isFunction(value);
                    }
                    function isArrayLikeObject(value) {
                        return isObjectLike(value) && isArrayLike(value);
                    }
                    var isBuffer = nativeIsBuffer || stubFalse, isDate = nodeIsDate ? baseUnary(nodeIsDate) : function(value) {
                        return isObjectLike(value) && baseGetTag(value) == dateTag;
                    };
                    function isError(value) {
                        if (!isObjectLike(value)) return !1;
                        var tag = baseGetTag(value);
                        return tag == errorTag || tag == domExcTag || "string" == typeof value.message && "string" == typeof value.name && !isPlainObject(value);
                    }
                    function isFunction(value) {
                        if (!isObject(value)) return !1;
                        var tag = baseGetTag(value);
                        return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
                    }
                    function isInteger(value) {
                        return "number" == typeof value && value == toInteger(value);
                    }
                    function isLength(value) {
                        return "number" == typeof value && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
                    }
                    function isObject(value) {
                        var type = typeof value;
                        return null != value && ("object" == type || "function" == type);
                    }
                    function isObjectLike(value) {
                        return null != value && "object" == typeof value;
                    }
                    var isMap = nodeIsMap ? baseUnary(nodeIsMap) : function(value) {
                        return isObjectLike(value) && getTag(value) == mapTag;
                    };
                    function isNumber(value) {
                        return "number" == typeof value || isObjectLike(value) && baseGetTag(value) == numberTag;
                    }
                    function isPlainObject(value) {
                        if (!isObjectLike(value) || baseGetTag(value) != objectTag) return !1;
                        var proto = getPrototype(value);
                        if (null === proto) return !0;
                        var Ctor = hasOwnProperty.call(proto, "constructor") && proto.constructor;
                        return "function" == typeof Ctor && Ctor instanceof Ctor && funcToString.call(Ctor) == objectCtorString;
                    }
                    var isRegExp = nodeIsRegExp ? baseUnary(nodeIsRegExp) : function(value) {
                        return isObjectLike(value) && baseGetTag(value) == regexpTag;
                    }, isSet = nodeIsSet ? baseUnary(nodeIsSet) : function(value) {
                        return isObjectLike(value) && getTag(value) == setTag;
                    };
                    function isString(value) {
                        return "string" == typeof value || !isArray(value) && isObjectLike(value) && baseGetTag(value) == stringTag;
                    }
                    function isSymbol(value) {
                        return "symbol" == typeof value || isObjectLike(value) && baseGetTag(value) == symbolTag;
                    }
                    var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : function(value) {
                        return isObjectLike(value) && isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
                    }, lt = createRelationalOperation(baseLt), lte = createRelationalOperation((function(value, other) {
                        return value <= other;
                    }));
                    function toArray(value) {
                        if (!value) return [];
                        if (isArrayLike(value)) return isString(value) ? stringToArray(value) : copyArray(value);
                        if (symIterator && value[symIterator]) return function(iterator) {
                            for (var data, result = []; !(data = iterator.next()).done; ) result.push(data.value);
                            return result;
                        }(value[symIterator]());
                        var tag = getTag(value);
                        return (tag == mapTag ? mapToArray : tag == setTag ? setToArray : values)(value);
                    }
                    function toFinite(value) {
                        return value ? (value = toNumber(value)) === INFINITY || value === -INFINITY ? (value < 0 ? -1 : 1) * MAX_INTEGER : value == value ? value : 0 : 0 === value ? value : 0;
                    }
                    function toInteger(value) {
                        var result = toFinite(value), remainder = result % 1;
                        return result == result ? remainder ? result - remainder : result : 0;
                    }
                    function toLength(value) {
                        return value ? baseClamp(toInteger(value), 0, MAX_ARRAY_LENGTH) : 0;
                    }
                    function toNumber(value) {
                        if ("number" == typeof value) return value;
                        if (isSymbol(value)) return NAN;
                        if (isObject(value)) {
                            var other = "function" == typeof value.valueOf ? value.valueOf() : value;
                            value = isObject(other) ? other + "" : other;
                        }
                        if ("string" != typeof value) return 0 === value ? value : +value;
                        value = value.replace(reTrim, "");
                        var isBinary = reIsBinary.test(value);
                        return isBinary || reIsOctal.test(value) ? freeParseInt(value.slice(2), isBinary ? 2 : 8) : reIsBadHex.test(value) ? NAN : +value;
                    }
                    function toPlainObject(value) {
                        return copyObject(value, keysIn(value));
                    }
                    function toString(value) {
                        return null == value ? "" : baseToString(value);
                    }
                    var assign = createAssigner((function(object, source) {
                        if (isPrototype(source) || isArrayLike(source)) copyObject(source, keys(source), object); else for (var key in source) hasOwnProperty.call(source, key) && assignValue(object, key, source[key]);
                    })), assignIn = createAssigner((function(object, source) {
                        copyObject(source, keysIn(source), object);
                    })), assignInWith = createAssigner((function(object, source, srcIndex, customizer) {
                        copyObject(source, keysIn(source), object, customizer);
                    })), assignWith = createAssigner((function(object, source, srcIndex, customizer) {
                        copyObject(source, keys(source), object, customizer);
                    })), at = flatRest(baseAt), defaults = baseRest((function(object, sources) {
                        object = Object(object);
                        var index = -1, length = sources.length, guard = length > 2 ? sources[2] : undefined;
                        for (guard && isIterateeCall(sources[0], sources[1], guard) && (length = 1); ++index < length; ) for (var source = sources[index], props = keysIn(source), propsIndex = -1, propsLength = props.length; ++propsIndex < propsLength; ) {
                            var key = props[propsIndex], value = object[key];
                            (value === undefined || eq(value, objectProto[key]) && !hasOwnProperty.call(object, key)) && (object[key] = source[key]);
                        }
                        return object;
                    })), defaultsDeep = baseRest((function(args) {
                        return args.push(undefined, customDefaultsMerge), apply(mergeWith, undefined, args);
                    }));
                    function get(object, path, defaultValue) {
                        var result = null == object ? undefined : baseGet(object, path);
                        return result === undefined ? defaultValue : result;
                    }
                    function hasIn(object, path) {
                        return null != object && hasPath(object, path, baseHasIn);
                    }
                    var invert = createInverter((function(result, value, key) {
                        null != value && "function" != typeof value.toString && (value = nativeObjectToString.call(value)), 
                        result[value] = key;
                    }), constant(identity)), invertBy = createInverter((function(result, value, key) {
                        null != value && "function" != typeof value.toString && (value = nativeObjectToString.call(value)), 
                        hasOwnProperty.call(result, value) ? result[value].push(key) : result[value] = [ key ];
                    }), getIteratee), invoke = baseRest(baseInvoke);
                    function keys(object) {
                        return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
                    }
                    function keysIn(object) {
                        return isArrayLike(object) ? arrayLikeKeys(object, !0) : function(object) {
                            if (!isObject(object)) return function(object) {
                                var result = [];
                                if (null != object) for (var key in Object(object)) result.push(key);
                                return result;
                            }(object);
                            var isProto = isPrototype(object), result = [];
                            for (var key in object) ("constructor" != key || !isProto && hasOwnProperty.call(object, key)) && result.push(key);
                            return result;
                        }(object);
                    }
                    var merge = createAssigner((function(object, source, srcIndex) {
                        baseMerge(object, source, srcIndex);
                    })), mergeWith = createAssigner((function(object, source, srcIndex, customizer) {
                        baseMerge(object, source, srcIndex, customizer);
                    })), omit = flatRest((function(object, paths) {
                        var result = {};
                        if (null == object) return result;
                        var isDeep = !1;
                        paths = arrayMap(paths, (function(path) {
                            return path = castPath(path, object), isDeep || (isDeep = path.length > 1), path;
                        })), copyObject(object, getAllKeysIn(object), result), isDeep && (result = baseClone(result, CLONE_DEEP_FLAG | CLONE_FLAT_FLAG | CLONE_SYMBOLS_FLAG, customOmitClone));
                        for (var length = paths.length; length--; ) baseUnset(result, paths[length]);
                        return result;
                    })), pick = flatRest((function(object, paths) {
                        return null == object ? {} : function(object, paths) {
                            return basePickBy(object, paths, (function(value, path) {
                                return hasIn(object, path);
                            }));
                        }(object, paths);
                    }));
                    function pickBy(object, predicate) {
                        if (null == object) return {};
                        var props = arrayMap(getAllKeysIn(object), (function(prop) {
                            return [ prop ];
                        }));
                        return predicate = getIteratee(predicate), basePickBy(object, props, (function(value, path) {
                            return predicate(value, path[0]);
                        }));
                    }
                    var toPairs = createToPairs(keys), toPairsIn = createToPairs(keysIn);
                    function values(object) {
                        return null == object ? [] : baseValues(object, keys(object));
                    }
                    var camelCase = createCompounder((function(result, word, index) {
                        return word = word.toLowerCase(), result + (index ? capitalize(word) : word);
                    }));
                    function capitalize(string) {
                        return upperFirst(toString(string).toLowerCase());
                    }
                    function deburr(string) {
                        return (string = toString(string)) && string.replace(reLatin, deburrLetter).replace(reComboMark, "");
                    }
                    var kebabCase = createCompounder((function(result, word, index) {
                        return result + (index ? "-" : "") + word.toLowerCase();
                    })), lowerCase = createCompounder((function(result, word, index) {
                        return result + (index ? " " : "") + word.toLowerCase();
                    })), lowerFirst = createCaseFirst("toLowerCase"), snakeCase = createCompounder((function(result, word, index) {
                        return result + (index ? "_" : "") + word.toLowerCase();
                    })), startCase = createCompounder((function(result, word, index) {
                        return result + (index ? " " : "") + upperFirst(word);
                    })), upperCase = createCompounder((function(result, word, index) {
                        return result + (index ? " " : "") + word.toUpperCase();
                    })), upperFirst = createCaseFirst("toUpperCase");
                    function words(string, pattern, guard) {
                        return string = toString(string), (pattern = guard ? undefined : pattern) === undefined ? function(string) {
                            return reHasUnicodeWord.test(string);
                        }(string) ? function(string) {
                            return string.match(reUnicodeWord) || [];
                        }(string) : function(string) {
                            return string.match(reAsciiWord) || [];
                        }(string) : string.match(pattern) || [];
                    }
                    var attempt = baseRest((function(func, args) {
                        try {
                            return apply(func, undefined, args);
                        } catch (e) {
                            return isError(e) ? e : new Error(e);
                        }
                    })), bindAll = flatRest((function(object, methodNames) {
                        return arrayEach(methodNames, (function(key) {
                            key = toKey(key), baseAssignValue(object, key, bind(object[key], object));
                        })), object;
                    }));
                    function constant(value) {
                        return function() {
                            return value;
                        };
                    }
                    var flow = createFlow(), flowRight = createFlow(!0);
                    function identity(value) {
                        return value;
                    }
                    function iteratee(func) {
                        return baseIteratee("function" == typeof func ? func : baseClone(func, CLONE_DEEP_FLAG));
                    }
                    var method = baseRest((function(path, args) {
                        return function(object) {
                            return baseInvoke(object, path, args);
                        };
                    })), methodOf = baseRest((function(object, args) {
                        return function(path) {
                            return baseInvoke(object, path, args);
                        };
                    }));
                    function mixin(object, source, options) {
                        var props = keys(source), methodNames = baseFunctions(source, props);
                        null != options || isObject(source) && (methodNames.length || !props.length) || (options = source, 
                        source = object, object = this, methodNames = baseFunctions(source, keys(source)));
                        var chain = !(isObject(options) && "chain" in options && !options.chain), isFunc = isFunction(object);
                        return arrayEach(methodNames, (function(methodName) {
                            var func = source[methodName];
                            object[methodName] = func, isFunc && (object.prototype[methodName] = function() {
                                var chainAll = this.__chain__;
                                if (chain || chainAll) {
                                    var result = object(this.__wrapped__), actions = result.__actions__ = copyArray(this.__actions__);
                                    return actions.push({
                                        func: func,
                                        args: arguments,
                                        thisArg: object
                                    }), result.__chain__ = chainAll, result;
                                }
                                return func.apply(object, arrayPush([ this.value() ], arguments));
                            });
                        })), object;
                    }
                    function noop() {}
                    var over = createOver(arrayMap), overEvery = createOver(arrayEvery), overSome = createOver(arraySome);
                    function property(path) {
                        return isKey(path) ? baseProperty(toKey(path)) : function(path) {
                            return function(object) {
                                return baseGet(object, path);
                            };
                        }(path);
                    }
                    var range = createRange(), rangeRight = createRange(!0);
                    function stubArray() {
                        return [];
                    }
                    function stubFalse() {
                        return !1;
                    }
                    var source, add = createMathOperation((function(augend, addend) {
                        return augend + addend;
                    }), 0), ceil = createRound("ceil"), divide = createMathOperation((function(dividend, divisor) {
                        return dividend / divisor;
                    }), 1), floor = createRound("floor"), multiply = createMathOperation((function(multiplier, multiplicand) {
                        return multiplier * multiplicand;
                    }), 1), round = createRound("round"), subtract = createMathOperation((function(minuend, subtrahend) {
                        return minuend - subtrahend;
                    }), 0);
                    return lodash.after = function(n, func) {
                        if ("function" != typeof func) throw new TypeError(FUNC_ERROR_TEXT);
                        return n = toInteger(n), function() {
                            if (--n < 1) return func.apply(this, arguments);
                        };
                    }, lodash.ary = ary, lodash.assign = assign, lodash.assignIn = assignIn, lodash.assignInWith = assignInWith, 
                    lodash.assignWith = assignWith, lodash.at = at, lodash.before = before, lodash.bind = bind, 
                    lodash.bindAll = bindAll, lodash.bindKey = bindKey, lodash.castArray = function() {
                        if (!arguments.length) return [];
                        var value = arguments[0];
                        return isArray(value) ? value : [ value ];
                    }, lodash.chain = chain, lodash.chunk = function(array, size, guard) {
                        size = (guard ? isIterateeCall(array, size, guard) : size === undefined) ? 1 : nativeMax(toInteger(size), 0);
                        var length = null == array ? 0 : array.length;
                        if (!length || size < 1) return [];
                        for (var index = 0, resIndex = 0, result = Array(nativeCeil(length / size)); index < length; ) result[resIndex++] = baseSlice(array, index, index += size);
                        return result;
                    }, lodash.compact = function(array) {
                        for (var index = -1, length = null == array ? 0 : array.length, resIndex = 0, result = []; ++index < length; ) {
                            var value = array[index];
                            value && (result[resIndex++] = value);
                        }
                        return result;
                    }, lodash.concat = function() {
                        var length = arguments.length;
                        if (!length) return [];
                        for (var args = Array(length - 1), array = arguments[0], index = length; index--; ) args[index - 1] = arguments[index];
                        return arrayPush(isArray(array) ? copyArray(array) : [ array ], baseFlatten(args, 1));
                    }, lodash.cond = function(pairs) {
                        var length = null == pairs ? 0 : pairs.length, toIteratee = getIteratee();
                        return pairs = length ? arrayMap(pairs, (function(pair) {
                            if ("function" != typeof pair[1]) throw new TypeError(FUNC_ERROR_TEXT);
                            return [ toIteratee(pair[0]), pair[1] ];
                        })) : [], baseRest((function(args) {
                            for (var index = -1; ++index < length; ) {
                                var pair = pairs[index];
                                if (apply(pair[0], this, args)) return apply(pair[1], this, args);
                            }
                        }));
                    }, lodash.conforms = function(source) {
                        return function(source) {
                            var props = keys(source);
                            return function(object) {
                                return baseConformsTo(object, source, props);
                            };
                        }(baseClone(source, CLONE_DEEP_FLAG));
                    }, lodash.constant = constant, lodash.countBy = countBy, lodash.create = function(prototype, properties) {
                        var result = baseCreate(prototype);
                        return null == properties ? result : baseAssign(result, properties);
                    }, lodash.curry = function curry(func, arity, guard) {
                        var result = createWrap(func, WRAP_CURRY_FLAG, undefined, undefined, undefined, undefined, undefined, arity = guard ? undefined : arity);
                        return result.placeholder = curry.placeholder, result;
                    }, lodash.curryRight = function curryRight(func, arity, guard) {
                        var result = createWrap(func, WRAP_CURRY_RIGHT_FLAG, undefined, undefined, undefined, undefined, undefined, arity = guard ? undefined : arity);
                        return result.placeholder = curryRight.placeholder, result;
                    }, lodash.debounce = debounce, lodash.defaults = defaults, lodash.defaultsDeep = defaultsDeep, 
                    lodash.defer = defer, lodash.delay = delay, lodash.difference = difference, lodash.differenceBy = differenceBy, 
                    lodash.differenceWith = differenceWith, lodash.drop = function(array, n, guard) {
                        var length = null == array ? 0 : array.length;
                        return length ? baseSlice(array, (n = guard || n === undefined ? 1 : toInteger(n)) < 0 ? 0 : n, length) : [];
                    }, lodash.dropRight = function(array, n, guard) {
                        var length = null == array ? 0 : array.length;
                        return length ? baseSlice(array, 0, (n = length - (n = guard || n === undefined ? 1 : toInteger(n))) < 0 ? 0 : n) : [];
                    }, lodash.dropRightWhile = function(array, predicate) {
                        return array && array.length ? baseWhile(array, getIteratee(predicate, 3), !0, !0) : [];
                    }, lodash.dropWhile = function(array, predicate) {
                        return array && array.length ? baseWhile(array, getIteratee(predicate, 3), !0) : [];
                    }, lodash.fill = function(array, value, start, end) {
                        var length = null == array ? 0 : array.length;
                        return length ? (start && "number" != typeof start && isIterateeCall(array, value, start) && (start = 0, 
                        end = length), function(array, value, start, end) {
                            var length = array.length;
                            for ((start = toInteger(start)) < 0 && (start = -start > length ? 0 : length + start), 
                            (end = end === undefined || end > length ? length : toInteger(end)) < 0 && (end += length), 
                            end = start > end ? 0 : toLength(end); start < end; ) array[start++] = value;
                            return array;
                        }(array, value, start, end)) : [];
                    }, lodash.filter = function(collection, predicate) {
                        return (isArray(collection) ? arrayFilter : baseFilter)(collection, getIteratee(predicate, 3));
                    }, lodash.flatMap = function(collection, iteratee) {
                        return baseFlatten(map(collection, iteratee), 1);
                    }, lodash.flatMapDeep = function(collection, iteratee) {
                        return baseFlatten(map(collection, iteratee), INFINITY);
                    }, lodash.flatMapDepth = function(collection, iteratee, depth) {
                        return depth = depth === undefined ? 1 : toInteger(depth), baseFlatten(map(collection, iteratee), depth);
                    }, lodash.flatten = flatten, lodash.flattenDeep = function(array) {
                        return null != array && array.length ? baseFlatten(array, INFINITY) : [];
                    }, lodash.flattenDepth = function(array, depth) {
                        return null != array && array.length ? baseFlatten(array, depth = depth === undefined ? 1 : toInteger(depth)) : [];
                    }, lodash.flip = function(func) {
                        return createWrap(func, WRAP_FLIP_FLAG);
                    }, lodash.flow = flow, lodash.flowRight = flowRight, lodash.fromPairs = function(pairs) {
                        for (var index = -1, length = null == pairs ? 0 : pairs.length, result = {}; ++index < length; ) {
                            var pair = pairs[index];
                            result[pair[0]] = pair[1];
                        }
                        return result;
                    }, lodash.functions = function(object) {
                        return null == object ? [] : baseFunctions(object, keys(object));
                    }, lodash.functionsIn = function(object) {
                        return null == object ? [] : baseFunctions(object, keysIn(object));
                    }, lodash.groupBy = groupBy, lodash.initial = function(array) {
                        return null != array && array.length ? baseSlice(array, 0, -1) : [];
                    }, lodash.intersection = intersection, lodash.intersectionBy = intersectionBy, lodash.intersectionWith = intersectionWith, 
                    lodash.invert = invert, lodash.invertBy = invertBy, lodash.invokeMap = invokeMap, 
                    lodash.iteratee = iteratee, lodash.keyBy = keyBy, lodash.keys = keys, lodash.keysIn = keysIn, 
                    lodash.map = map, lodash.mapKeys = function(object, iteratee) {
                        var result = {};
                        return iteratee = getIteratee(iteratee, 3), baseForOwn(object, (function(value, key, object) {
                            baseAssignValue(result, iteratee(value, key, object), value);
                        })), result;
                    }, lodash.mapValues = function(object, iteratee) {
                        var result = {};
                        return iteratee = getIteratee(iteratee, 3), baseForOwn(object, (function(value, key, object) {
                            baseAssignValue(result, key, iteratee(value, key, object));
                        })), result;
                    }, lodash.matches = function(source) {
                        return baseMatches(baseClone(source, CLONE_DEEP_FLAG));
                    }, lodash.matchesProperty = function(path, srcValue) {
                        return baseMatchesProperty(path, baseClone(srcValue, CLONE_DEEP_FLAG));
                    }, lodash.memoize = memoize, lodash.merge = merge, lodash.mergeWith = mergeWith, 
                    lodash.method = method, lodash.methodOf = methodOf, lodash.mixin = mixin, lodash.negate = negate, 
                    lodash.nthArg = function(n) {
                        return n = toInteger(n), baseRest((function(args) {
                            return baseNth(args, n);
                        }));
                    }, lodash.omit = omit, lodash.omitBy = function(object, predicate) {
                        return pickBy(object, negate(getIteratee(predicate)));
                    }, lodash.once = function(func) {
                        return before(2, func);
                    }, lodash.orderBy = function(collection, iteratees, orders, guard) {
                        return null == collection ? [] : (isArray(iteratees) || (iteratees = null == iteratees ? [] : [ iteratees ]), 
                        isArray(orders = guard ? undefined : orders) || (orders = null == orders ? [] : [ orders ]), 
                        baseOrderBy(collection, iteratees, orders));
                    }, lodash.over = over, lodash.overArgs = overArgs, lodash.overEvery = overEvery, 
                    lodash.overSome = overSome, lodash.partial = partial, lodash.partialRight = partialRight, 
                    lodash.partition = partition, lodash.pick = pick, lodash.pickBy = pickBy, lodash.property = property, 
                    lodash.propertyOf = function(object) {
                        return function(path) {
                            return null == object ? undefined : baseGet(object, path);
                        };
                    }, lodash.pull = pull, lodash.pullAll = pullAll, lodash.pullAllBy = function(array, values, iteratee) {
                        return array && array.length && values && values.length ? basePullAll(array, values, getIteratee(iteratee, 2)) : array;
                    }, lodash.pullAllWith = function(array, values, comparator) {
                        return array && array.length && values && values.length ? basePullAll(array, values, undefined, comparator) : array;
                    }, lodash.pullAt = pullAt, lodash.range = range, lodash.rangeRight = rangeRight, 
                    lodash.rearg = rearg, lodash.reject = function(collection, predicate) {
                        return (isArray(collection) ? arrayFilter : baseFilter)(collection, negate(getIteratee(predicate, 3)));
                    }, lodash.remove = function(array, predicate) {
                        var result = [];
                        if (!array || !array.length) return result;
                        var index = -1, indexes = [], length = array.length;
                        for (predicate = getIteratee(predicate, 3); ++index < length; ) {
                            var value = array[index];
                            predicate(value, index, array) && (result.push(value), indexes.push(index));
                        }
                        return basePullAt(array, indexes), result;
                    }, lodash.rest = function(func, start) {
                        if ("function" != typeof func) throw new TypeError(FUNC_ERROR_TEXT);
                        return baseRest(func, start = start === undefined ? start : toInteger(start));
                    }, lodash.reverse = reverse, lodash.sampleSize = function(collection, n, guard) {
                        return n = (guard ? isIterateeCall(collection, n, guard) : n === undefined) ? 1 : toInteger(n), 
                        (isArray(collection) ? arraySampleSize : baseSampleSize)(collection, n);
                    }, lodash.set = function(object, path, value) {
                        return null == object ? object : baseSet(object, path, value);
                    }, lodash.setWith = function(object, path, value, customizer) {
                        return customizer = "function" == typeof customizer ? customizer : undefined, null == object ? object : baseSet(object, path, value, customizer);
                    }, lodash.shuffle = function(collection) {
                        return (isArray(collection) ? arrayShuffle : baseShuffle)(collection);
                    }, lodash.slice = function(array, start, end) {
                        var length = null == array ? 0 : array.length;
                        return length ? (end && "number" != typeof end && isIterateeCall(array, start, end) ? (start = 0, 
                        end = length) : (start = null == start ? 0 : toInteger(start), end = end === undefined ? length : toInteger(end)), 
                        baseSlice(array, start, end)) : [];
                    }, lodash.sortBy = sortBy, lodash.sortedUniq = function(array) {
                        return array && array.length ? baseSortedUniq(array) : [];
                    }, lodash.sortedUniqBy = function(array, iteratee) {
                        return array && array.length ? baseSortedUniq(array, getIteratee(iteratee, 2)) : [];
                    }, lodash.split = function(string, separator, limit) {
                        return limit && "number" != typeof limit && isIterateeCall(string, separator, limit) && (separator = limit = undefined), 
                        (limit = limit === undefined ? MAX_ARRAY_LENGTH : limit >>> 0) ? (string = toString(string)) && ("string" == typeof separator || null != separator && !isRegExp(separator)) && !(separator = baseToString(separator)) && hasUnicode(string) ? castSlice(stringToArray(string), 0, limit) : string.split(separator, limit) : [];
                    }, lodash.spread = function(func, start) {
                        if ("function" != typeof func) throw new TypeError(FUNC_ERROR_TEXT);
                        return start = null == start ? 0 : nativeMax(toInteger(start), 0), baseRest((function(args) {
                            var array = args[start], otherArgs = castSlice(args, 0, start);
                            return array && arrayPush(otherArgs, array), apply(func, this, otherArgs);
                        }));
                    }, lodash.tail = function(array) {
                        var length = null == array ? 0 : array.length;
                        return length ? baseSlice(array, 1, length) : [];
                    }, lodash.take = function(array, n, guard) {
                        return array && array.length ? baseSlice(array, 0, (n = guard || n === undefined ? 1 : toInteger(n)) < 0 ? 0 : n) : [];
                    }, lodash.takeRight = function(array, n, guard) {
                        var length = null == array ? 0 : array.length;
                        return length ? baseSlice(array, (n = length - (n = guard || n === undefined ? 1 : toInteger(n))) < 0 ? 0 : n, length) : [];
                    }, lodash.takeRightWhile = function(array, predicate) {
                        return array && array.length ? baseWhile(array, getIteratee(predicate, 3), !1, !0) : [];
                    }, lodash.takeWhile = function(array, predicate) {
                        return array && array.length ? baseWhile(array, getIteratee(predicate, 3)) : [];
                    }, lodash.tap = function(value, interceptor) {
                        return interceptor(value), value;
                    }, lodash.throttle = function(func, wait, options) {
                        var leading = !0, trailing = !0;
                        if ("function" != typeof func) throw new TypeError(FUNC_ERROR_TEXT);
                        return isObject(options) && (leading = "leading" in options ? !!options.leading : leading, 
                        trailing = "trailing" in options ? !!options.trailing : trailing), debounce(func, wait, {
                            leading: leading,
                            maxWait: wait,
                            trailing: trailing
                        });
                    }, lodash.thru = thru, lodash.toArray = toArray, lodash.toPairs = toPairs, lodash.toPairsIn = toPairsIn, 
                    lodash.toPath = function(value) {
                        return isArray(value) ? arrayMap(value, toKey) : isSymbol(value) ? [ value ] : copyArray(stringToPath(toString(value)));
                    }, lodash.toPlainObject = toPlainObject, lodash.transform = function(object, iteratee, accumulator) {
                        var isArr = isArray(object), isArrLike = isArr || isBuffer(object) || isTypedArray(object);
                        if (iteratee = getIteratee(iteratee, 4), null == accumulator) {
                            var Ctor = object && object.constructor;
                            accumulator = isArrLike ? isArr ? new Ctor : [] : isObject(object) && isFunction(Ctor) ? baseCreate(getPrototype(object)) : {};
                        }
                        return (isArrLike ? arrayEach : baseForOwn)(object, (function(value, index, object) {
                            return iteratee(accumulator, value, index, object);
                        })), accumulator;
                    }, lodash.unary = function(func) {
                        return ary(func, 1);
                    }, lodash.union = union, lodash.unionBy = unionBy, lodash.unionWith = unionWith, 
                    lodash.uniq = function(array) {
                        return array && array.length ? baseUniq(array) : [];
                    }, lodash.uniqBy = function(array, iteratee) {
                        return array && array.length ? baseUniq(array, getIteratee(iteratee, 2)) : [];
                    }, lodash.uniqWith = function(array, comparator) {
                        return comparator = "function" == typeof comparator ? comparator : undefined, array && array.length ? baseUniq(array, undefined, comparator) : [];
                    }, lodash.unset = function(object, path) {
                        return null == object || baseUnset(object, path);
                    }, lodash.unzip = unzip, lodash.unzipWith = unzipWith, lodash.update = function(object, path, updater) {
                        return null == object ? object : baseUpdate(object, path, castFunction(updater));
                    }, lodash.updateWith = function(object, path, updater, customizer) {
                        return customizer = "function" == typeof customizer ? customizer : undefined, null == object ? object : baseUpdate(object, path, castFunction(updater), customizer);
                    }, lodash.values = values, lodash.valuesIn = function(object) {
                        return null == object ? [] : baseValues(object, keysIn(object));
                    }, lodash.without = without, lodash.words = words, lodash.wrap = function(value, wrapper) {
                        return partial(castFunction(wrapper), value);
                    }, lodash.xor = xor, lodash.xorBy = xorBy, lodash.xorWith = xorWith, lodash.zip = zip, 
                    lodash.zipObject = function(props, values) {
                        return baseZipObject(props || [], values || [], assignValue);
                    }, lodash.zipObjectDeep = function(props, values) {
                        return baseZipObject(props || [], values || [], baseSet);
                    }, lodash.zipWith = zipWith, lodash.entries = toPairs, lodash.entriesIn = toPairsIn, 
                    lodash.extend = assignIn, lodash.extendWith = assignInWith, mixin(lodash, lodash), 
                    lodash.add = add, lodash.attempt = attempt, lodash.camelCase = camelCase, lodash.capitalize = capitalize, 
                    lodash.ceil = ceil, lodash.clamp = function(number, lower, upper) {
                        return upper === undefined && (upper = lower, lower = undefined), upper !== undefined && (upper = (upper = toNumber(upper)) == upper ? upper : 0), 
                        lower !== undefined && (lower = (lower = toNumber(lower)) == lower ? lower : 0), 
                        baseClamp(toNumber(number), lower, upper);
                    }, lodash.clone = function(value) {
                        return baseClone(value, CLONE_SYMBOLS_FLAG);
                    }, lodash.cloneDeep = function(value) {
                        return baseClone(value, CLONE_DEEP_FLAG | CLONE_SYMBOLS_FLAG);
                    }, lodash.cloneDeepWith = function(value, customizer) {
                        return baseClone(value, CLONE_DEEP_FLAG | CLONE_SYMBOLS_FLAG, customizer = "function" == typeof customizer ? customizer : undefined);
                    }, lodash.cloneWith = function(value, customizer) {
                        return baseClone(value, CLONE_SYMBOLS_FLAG, customizer = "function" == typeof customizer ? customizer : undefined);
                    }, lodash.conformsTo = function(object, source) {
                        return null == source || baseConformsTo(object, source, keys(source));
                    }, lodash.deburr = deburr, lodash.defaultTo = function(value, defaultValue) {
                        return null == value || value != value ? defaultValue : value;
                    }, lodash.divide = divide, lodash.endsWith = function(string, target, position) {
                        string = toString(string), target = baseToString(target);
                        var length = string.length, end = position = position === undefined ? length : baseClamp(toInteger(position), 0, length);
                        return (position -= target.length) >= 0 && string.slice(position, end) == target;
                    }, lodash.eq = eq, lodash.escape = function(string) {
                        return (string = toString(string)) && reHasUnescapedHtml.test(string) ? string.replace(reUnescapedHtml, escapeHtmlChar) : string;
                    }, lodash.escapeRegExp = function(string) {
                        return (string = toString(string)) && reHasRegExpChar.test(string) ? string.replace(reRegExpChar, "\\$&") : string;
                    }, lodash.every = function(collection, predicate, guard) {
                        var func = isArray(collection) ? arrayEvery : baseEvery;
                        return guard && isIterateeCall(collection, predicate, guard) && (predicate = undefined), 
                        func(collection, getIteratee(predicate, 3));
                    }, lodash.find = find, lodash.findIndex = findIndex, lodash.findKey = function(object, predicate) {
                        return baseFindKey(object, getIteratee(predicate, 3), baseForOwn);
                    }, lodash.findLast = findLast, lodash.findLastIndex = findLastIndex, lodash.findLastKey = function(object, predicate) {
                        return baseFindKey(object, getIteratee(predicate, 3), baseForOwnRight);
                    }, lodash.floor = floor, lodash.forEach = forEach, lodash.forEachRight = forEachRight, 
                    lodash.forIn = function(object, iteratee) {
                        return null == object ? object : baseFor(object, getIteratee(iteratee, 3), keysIn);
                    }, lodash.forInRight = function(object, iteratee) {
                        return null == object ? object : baseForRight(object, getIteratee(iteratee, 3), keysIn);
                    }, lodash.forOwn = function(object, iteratee) {
                        return object && baseForOwn(object, getIteratee(iteratee, 3));
                    }, lodash.forOwnRight = function(object, iteratee) {
                        return object && baseForOwnRight(object, getIteratee(iteratee, 3));
                    }, lodash.get = get, lodash.gt = gt, lodash.gte = gte, lodash.has = function(object, path) {
                        return null != object && hasPath(object, path, baseHas);
                    }, lodash.hasIn = hasIn, lodash.head = head, lodash.identity = identity, lodash.includes = function(collection, value, fromIndex, guard) {
                        collection = isArrayLike(collection) ? collection : values(collection), fromIndex = fromIndex && !guard ? toInteger(fromIndex) : 0;
                        var length = collection.length;
                        return fromIndex < 0 && (fromIndex = nativeMax(length + fromIndex, 0)), isString(collection) ? fromIndex <= length && collection.indexOf(value, fromIndex) > -1 : !!length && baseIndexOf(collection, value, fromIndex) > -1;
                    }, lodash.indexOf = function(array, value, fromIndex) {
                        var length = null == array ? 0 : array.length;
                        if (!length) return -1;
                        var index = null == fromIndex ? 0 : toInteger(fromIndex);
                        return index < 0 && (index = nativeMax(length + index, 0)), baseIndexOf(array, value, index);
                    }, lodash.inRange = function(number, start, end) {
                        return start = toFinite(start), end === undefined ? (end = start, start = 0) : end = toFinite(end), 
                        function(number, start, end) {
                            return number >= nativeMin(start, end) && number < nativeMax(start, end);
                        }(number = toNumber(number), start, end);
                    }, lodash.invoke = invoke, lodash.isArguments = isArguments, lodash.isArray = isArray, 
                    lodash.isArrayBuffer = isArrayBuffer, lodash.isArrayLike = isArrayLike, lodash.isArrayLikeObject = isArrayLikeObject, 
                    lodash.isBoolean = function(value) {
                        return !0 === value || !1 === value || isObjectLike(value) && baseGetTag(value) == boolTag;
                    }, lodash.isBuffer = isBuffer, lodash.isDate = isDate, lodash.isElement = function(value) {
                        return isObjectLike(value) && 1 === value.nodeType && !isPlainObject(value);
                    }, lodash.isEmpty = function(value) {
                        if (null == value) return !0;
                        if (isArrayLike(value) && (isArray(value) || "string" == typeof value || "function" == typeof value.splice || isBuffer(value) || isTypedArray(value) || isArguments(value))) return !value.length;
                        var tag = getTag(value);
                        if (tag == mapTag || tag == setTag) return !value.size;
                        if (isPrototype(value)) return !baseKeys(value).length;
                        for (var key in value) if (hasOwnProperty.call(value, key)) return !1;
                        return !0;
                    }, lodash.isEqual = function(value, other) {
                        return baseIsEqual(value, other);
                    }, lodash.isEqualWith = function(value, other, customizer) {
                        var result = (customizer = "function" == typeof customizer ? customizer : undefined) ? customizer(value, other) : undefined;
                        return result === undefined ? baseIsEqual(value, other, undefined, customizer) : !!result;
                    }, lodash.isError = isError, lodash.isFinite = function(value) {
                        return "number" == typeof value && nativeIsFinite(value);
                    }, lodash.isFunction = isFunction, lodash.isInteger = isInteger, lodash.isLength = isLength, 
                    lodash.isMap = isMap, lodash.isMatch = function(object, source) {
                        return object === source || baseIsMatch(object, source, getMatchData(source));
                    }, lodash.isMatchWith = function(object, source, customizer) {
                        return customizer = "function" == typeof customizer ? customizer : undefined, baseIsMatch(object, source, getMatchData(source), customizer);
                    }, lodash.isNaN = function(value) {
                        return isNumber(value) && value != +value;
                    }, lodash.isNative = function(value) {
                        if (isMaskable(value)) throw new Error("Unsupported core-js use. Try https://npms.io/search?q=ponyfill.");
                        return baseIsNative(value);
                    }, lodash.isNil = function(value) {
                        return null == value;
                    }, lodash.isNull = function(value) {
                        return null === value;
                    }, lodash.isNumber = isNumber, lodash.isObject = isObject, lodash.isObjectLike = isObjectLike, 
                    lodash.isPlainObject = isPlainObject, lodash.isRegExp = isRegExp, lodash.isSafeInteger = function(value) {
                        return isInteger(value) && value >= -MAX_SAFE_INTEGER && value <= MAX_SAFE_INTEGER;
                    }, lodash.isSet = isSet, lodash.isString = isString, lodash.isSymbol = isSymbol, 
                    lodash.isTypedArray = isTypedArray, lodash.isUndefined = function(value) {
                        return value === undefined;
                    }, lodash.isWeakMap = function(value) {
                        return isObjectLike(value) && getTag(value) == weakMapTag;
                    }, lodash.isWeakSet = function(value) {
                        return isObjectLike(value) && "[object WeakSet]" == baseGetTag(value);
                    }, lodash.join = function(array, separator) {
                        return null == array ? "" : nativeJoin.call(array, separator);
                    }, lodash.kebabCase = kebabCase, lodash.last = last, lodash.lastIndexOf = function(array, value, fromIndex) {
                        var length = null == array ? 0 : array.length;
                        if (!length) return -1;
                        var index = length;
                        return fromIndex !== undefined && (index = (index = toInteger(fromIndex)) < 0 ? nativeMax(length + index, 0) : nativeMin(index, length - 1)), 
                        value == value ? function(array, value, fromIndex) {
                            for (var index = fromIndex + 1; index--; ) if (array[index] === value) return index;
                            return index;
                        }(array, value, index) : baseFindIndex(array, baseIsNaN, index, !0);
                    }, lodash.lowerCase = lowerCase, lodash.lowerFirst = lowerFirst, lodash.lt = lt, 
                    lodash.lte = lte, lodash.max = function(array) {
                        return array && array.length ? baseExtremum(array, identity, baseGt) : undefined;
                    }, lodash.maxBy = function(array, iteratee) {
                        return array && array.length ? baseExtremum(array, getIteratee(iteratee, 2), baseGt) : undefined;
                    }, lodash.mean = function(array) {
                        return baseMean(array, identity);
                    }, lodash.meanBy = function(array, iteratee) {
                        return baseMean(array, getIteratee(iteratee, 2));
                    }, lodash.min = function(array) {
                        return array && array.length ? baseExtremum(array, identity, baseLt) : undefined;
                    }, lodash.minBy = function(array, iteratee) {
                        return array && array.length ? baseExtremum(array, getIteratee(iteratee, 2), baseLt) : undefined;
                    }, lodash.stubArray = stubArray, lodash.stubFalse = stubFalse, lodash.stubObject = function() {
                        return {};
                    }, lodash.stubString = function() {
                        return "";
                    }, lodash.stubTrue = function() {
                        return !0;
                    }, lodash.multiply = multiply, lodash.nth = function(array, n) {
                        return array && array.length ? baseNth(array, toInteger(n)) : undefined;
                    }, lodash.noConflict = function() {
                        return root._ === this && (root._ = oldDash), this;
                    }, lodash.noop = noop, lodash.now = now, lodash.pad = function(string, length, chars) {
                        string = toString(string);
                        var strLength = (length = toInteger(length)) ? stringSize(string) : 0;
                        if (!length || strLength >= length) return string;
                        var mid = (length - strLength) / 2;
                        return createPadding(nativeFloor(mid), chars) + string + createPadding(nativeCeil(mid), chars);
                    }, lodash.padEnd = function(string, length, chars) {
                        string = toString(string);
                        var strLength = (length = toInteger(length)) ? stringSize(string) : 0;
                        return length && strLength < length ? string + createPadding(length - strLength, chars) : string;
                    }, lodash.padStart = function(string, length, chars) {
                        string = toString(string);
                        var strLength = (length = toInteger(length)) ? stringSize(string) : 0;
                        return length && strLength < length ? createPadding(length - strLength, chars) + string : string;
                    }, lodash.parseInt = function(string, radix, guard) {
                        return guard || null == radix ? radix = 0 : radix && (radix = +radix), nativeParseInt(toString(string).replace(reTrimStart, ""), radix || 0);
                    }, lodash.random = function(lower, upper, floating) {
                        if (floating && "boolean" != typeof floating && isIterateeCall(lower, upper, floating) && (upper = floating = undefined), 
                        floating === undefined && ("boolean" == typeof upper ? (floating = upper, upper = undefined) : "boolean" == typeof lower && (floating = lower, 
                        lower = undefined)), lower === undefined && upper === undefined ? (lower = 0, upper = 1) : (lower = toFinite(lower), 
                        upper === undefined ? (upper = lower, lower = 0) : upper = toFinite(upper)), lower > upper) {
                            var temp = lower;
                            lower = upper, upper = temp;
                        }
                        if (floating || lower % 1 || upper % 1) {
                            var rand = nativeRandom();
                            return nativeMin(lower + rand * (upper - lower + freeParseFloat("1e-" + ((rand + "").length - 1))), upper);
                        }
                        return baseRandom(lower, upper);
                    }, lodash.reduce = function(collection, iteratee, accumulator) {
                        var func = isArray(collection) ? arrayReduce : baseReduce, initAccum = arguments.length < 3;
                        return func(collection, getIteratee(iteratee, 4), accumulator, initAccum, baseEach);
                    }, lodash.reduceRight = function(collection, iteratee, accumulator) {
                        var func = isArray(collection) ? arrayReduceRight : baseReduce, initAccum = arguments.length < 3;
                        return func(collection, getIteratee(iteratee, 4), accumulator, initAccum, baseEachRight);
                    }, lodash.repeat = function(string, n, guard) {
                        return n = (guard ? isIterateeCall(string, n, guard) : n === undefined) ? 1 : toInteger(n), 
                        baseRepeat(toString(string), n);
                    }, lodash.replace = function() {
                        var args = arguments, string = toString(args[0]);
                        return args.length < 3 ? string : string.replace(args[1], args[2]);
                    }, lodash.result = function(object, path, defaultValue) {
                        var index = -1, length = (path = castPath(path, object)).length;
                        for (length || (length = 1, object = undefined); ++index < length; ) {
                            var value = null == object ? undefined : object[toKey(path[index])];
                            value === undefined && (index = length, value = defaultValue), object = isFunction(value) ? value.call(object) : value;
                        }
                        return object;
                    }, lodash.round = round, lodash.runInContext = runInContext, lodash.sample = function(collection) {
                        return (isArray(collection) ? arraySample : baseSample)(collection);
                    }, lodash.size = function(collection) {
                        if (null == collection) return 0;
                        if (isArrayLike(collection)) return isString(collection) ? stringSize(collection) : collection.length;
                        var tag = getTag(collection);
                        return tag == mapTag || tag == setTag ? collection.size : baseKeys(collection).length;
                    }, lodash.snakeCase = snakeCase, lodash.some = function(collection, predicate, guard) {
                        var func = isArray(collection) ? arraySome : baseSome;
                        return guard && isIterateeCall(collection, predicate, guard) && (predicate = undefined), 
                        func(collection, getIteratee(predicate, 3));
                    }, lodash.sortedIndex = function(array, value) {
                        return baseSortedIndex(array, value);
                    }, lodash.sortedIndexBy = function(array, value, iteratee) {
                        return baseSortedIndexBy(array, value, getIteratee(iteratee, 2));
                    }, lodash.sortedIndexOf = function(array, value) {
                        var length = null == array ? 0 : array.length;
                        if (length) {
                            var index = baseSortedIndex(array, value);
                            if (index < length && eq(array[index], value)) return index;
                        }
                        return -1;
                    }, lodash.sortedLastIndex = function(array, value) {
                        return baseSortedIndex(array, value, !0);
                    }, lodash.sortedLastIndexBy = function(array, value, iteratee) {
                        return baseSortedIndexBy(array, value, getIteratee(iteratee, 2), !0);
                    }, lodash.sortedLastIndexOf = function(array, value) {
                        if (null != array && array.length) {
                            var index = baseSortedIndex(array, value, !0) - 1;
                            if (eq(array[index], value)) return index;
                        }
                        return -1;
                    }, lodash.startCase = startCase, lodash.startsWith = function(string, target, position) {
                        return string = toString(string), position = null == position ? 0 : baseClamp(toInteger(position), 0, string.length), 
                        target = baseToString(target), string.slice(position, position + target.length) == target;
                    }, lodash.subtract = subtract, lodash.sum = function(array) {
                        return array && array.length ? baseSum(array, identity) : 0;
                    }, lodash.sumBy = function(array, iteratee) {
                        return array && array.length ? baseSum(array, getIteratee(iteratee, 2)) : 0;
                    }, lodash.template = function(string, options, guard) {
                        var settings = lodash.templateSettings;
                        guard && isIterateeCall(string, options, guard) && (options = undefined), string = toString(string), 
                        options = assignInWith({}, options, settings, customDefaultsAssignIn);
                        var isEscaping, isEvaluating, imports = assignInWith({}, options.imports, settings.imports, customDefaultsAssignIn), importsKeys = keys(imports), importsValues = baseValues(imports, importsKeys), index = 0, interpolate = options.interpolate || reNoMatch, source = "__p += '", reDelimiters = RegExp((options.escape || reNoMatch).source + "|" + interpolate.source + "|" + (interpolate === reInterpolate ? reEsTemplate : reNoMatch).source + "|" + (options.evaluate || reNoMatch).source + "|$", "g"), sourceURL = "//# sourceURL=" + (hasOwnProperty.call(options, "sourceURL") ? (options.sourceURL + "").replace(/[\r\n]/g, " ") : "lodash.templateSources[" + ++templateCounter + "]") + "\n";
                        string.replace(reDelimiters, (function(match, escapeValue, interpolateValue, esTemplateValue, evaluateValue, offset) {
                            return interpolateValue || (interpolateValue = esTemplateValue), source += string.slice(index, offset).replace(reUnescapedString, escapeStringChar), 
                            escapeValue && (isEscaping = !0, source += "' +\n__e(" + escapeValue + ") +\n'"), 
                            evaluateValue && (isEvaluating = !0, source += "';\n" + evaluateValue + ";\n__p += '"), 
                            interpolateValue && (source += "' +\n((__t = (" + interpolateValue + ")) == null ? '' : __t) +\n'"), 
                            index = offset + match.length, match;
                        })), source += "';\n";
                        var variable = hasOwnProperty.call(options, "variable") && options.variable;
                        variable || (source = "with (obj) {\n" + source + "\n}\n"), source = (isEvaluating ? source.replace(reEmptyStringLeading, "") : source).replace(reEmptyStringMiddle, "$1").replace(reEmptyStringTrailing, "$1;"), 
                        source = "function(" + (variable || "obj") + ") {\n" + (variable ? "" : "obj || (obj = {});\n") + "var __t, __p = ''" + (isEscaping ? ", __e = _.escape" : "") + (isEvaluating ? ", __j = Array.prototype.join;\nfunction print() { __p += __j.call(arguments, '') }\n" : ";\n") + source + "return __p\n}";
                        var result = attempt((function() {
                            return Function(importsKeys, sourceURL + "return " + source).apply(undefined, importsValues);
                        }));
                        if (result.source = source, isError(result)) throw result;
                        return result;
                    }, lodash.times = function(n, iteratee) {
                        if ((n = toInteger(n)) < 1 || n > MAX_SAFE_INTEGER) return [];
                        var index = MAX_ARRAY_LENGTH, length = nativeMin(n, MAX_ARRAY_LENGTH);
                        iteratee = getIteratee(iteratee), n -= MAX_ARRAY_LENGTH;
                        for (var result = baseTimes(length, iteratee); ++index < n; ) iteratee(index);
                        return result;
                    }, lodash.toFinite = toFinite, lodash.toInteger = toInteger, lodash.toLength = toLength, 
                    lodash.toLower = function(value) {
                        return toString(value).toLowerCase();
                    }, lodash.toNumber = toNumber, lodash.toSafeInteger = function(value) {
                        return value ? baseClamp(toInteger(value), -MAX_SAFE_INTEGER, MAX_SAFE_INTEGER) : 0 === value ? value : 0;
                    }, lodash.toString = toString, lodash.toUpper = function(value) {
                        return toString(value).toUpperCase();
                    }, lodash.trim = function(string, chars, guard) {
                        if ((string = toString(string)) && (guard || chars === undefined)) return string.replace(reTrim, "");
                        if (!string || !(chars = baseToString(chars))) return string;
                        var strSymbols = stringToArray(string), chrSymbols = stringToArray(chars);
                        return castSlice(strSymbols, charsStartIndex(strSymbols, chrSymbols), charsEndIndex(strSymbols, chrSymbols) + 1).join("");
                    }, lodash.trimEnd = function(string, chars, guard) {
                        if ((string = toString(string)) && (guard || chars === undefined)) return string.replace(reTrimEnd, "");
                        if (!string || !(chars = baseToString(chars))) return string;
                        var strSymbols = stringToArray(string);
                        return castSlice(strSymbols, 0, charsEndIndex(strSymbols, stringToArray(chars)) + 1).join("");
                    }, lodash.trimStart = function(string, chars, guard) {
                        if ((string = toString(string)) && (guard || chars === undefined)) return string.replace(reTrimStart, "");
                        if (!string || !(chars = baseToString(chars))) return string;
                        var strSymbols = stringToArray(string);
                        return castSlice(strSymbols, charsStartIndex(strSymbols, stringToArray(chars))).join("");
                    }, lodash.truncate = function(string, options) {
                        var length = 30, omission = "...";
                        if (isObject(options)) {
                            var separator = "separator" in options ? options.separator : separator;
                            length = "length" in options ? toInteger(options.length) : length, omission = "omission" in options ? baseToString(options.omission) : omission;
                        }
                        var strLength = (string = toString(string)).length;
                        if (hasUnicode(string)) {
                            var strSymbols = stringToArray(string);
                            strLength = strSymbols.length;
                        }
                        if (length >= strLength) return string;
                        var end = length - stringSize(omission);
                        if (end < 1) return omission;
                        var result = strSymbols ? castSlice(strSymbols, 0, end).join("") : string.slice(0, end);
                        if (separator === undefined) return result + omission;
                        if (strSymbols && (end += result.length - end), isRegExp(separator)) {
                            if (string.slice(end).search(separator)) {
                                var match, substring = result;
                                for (separator.global || (separator = RegExp(separator.source, toString(reFlags.exec(separator)) + "g")), 
                                separator.lastIndex = 0; match = separator.exec(substring); ) var newEnd = match.index;
                                result = result.slice(0, newEnd === undefined ? end : newEnd);
                            }
                        } else if (string.indexOf(baseToString(separator), end) != end) {
                            var index = result.lastIndexOf(separator);
                            index > -1 && (result = result.slice(0, index));
                        }
                        return result + omission;
                    }, lodash.unescape = function(string) {
                        return (string = toString(string)) && reHasEscapedHtml.test(string) ? string.replace(reEscapedHtml, unescapeHtmlChar) : string;
                    }, lodash.uniqueId = function(prefix) {
                        var id = ++idCounter;
                        return toString(prefix) + id;
                    }, lodash.upperCase = upperCase, lodash.upperFirst = upperFirst, lodash.each = forEach, 
                    lodash.eachRight = forEachRight, lodash.first = head, mixin(lodash, (source = {}, 
                    baseForOwn(lodash, (function(func, methodName) {
                        hasOwnProperty.call(lodash.prototype, methodName) || (source[methodName] = func);
                    })), source), {
                        chain: !1
                    }), lodash.VERSION = "4.17.13", arrayEach([ "bind", "bindKey", "curry", "curryRight", "partial", "partialRight" ], (function(methodName) {
                        lodash[methodName].placeholder = lodash;
                    })), arrayEach([ "drop", "take" ], (function(methodName, index) {
                        LazyWrapper.prototype[methodName] = function(n) {
                            n = n === undefined ? 1 : nativeMax(toInteger(n), 0);
                            var result = this.__filtered__ && !index ? new LazyWrapper(this) : this.clone();
                            return result.__filtered__ ? result.__takeCount__ = nativeMin(n, result.__takeCount__) : result.__views__.push({
                                size: nativeMin(n, MAX_ARRAY_LENGTH),
                                type: methodName + (result.__dir__ < 0 ? "Right" : "")
                            }), result;
                        }, LazyWrapper.prototype[methodName + "Right"] = function(n) {
                            return this.reverse()[methodName](n).reverse();
                        };
                    })), arrayEach([ "filter", "map", "takeWhile" ], (function(methodName, index) {
                        var type = index + 1, isFilter = 1 == type || 3 == type;
                        LazyWrapper.prototype[methodName] = function(iteratee) {
                            var result = this.clone();
                            return result.__iteratees__.push({
                                iteratee: getIteratee(iteratee, 3),
                                type: type
                            }), result.__filtered__ = result.__filtered__ || isFilter, result;
                        };
                    })), arrayEach([ "head", "last" ], (function(methodName, index) {
                        var takeName = "take" + (index ? "Right" : "");
                        LazyWrapper.prototype[methodName] = function() {
                            return this[takeName](1).value()[0];
                        };
                    })), arrayEach([ "initial", "tail" ], (function(methodName, index) {
                        var dropName = "drop" + (index ? "" : "Right");
                        LazyWrapper.prototype[methodName] = function() {
                            return this.__filtered__ ? new LazyWrapper(this) : this[dropName](1);
                        };
                    })), LazyWrapper.prototype.compact = function() {
                        return this.filter(identity);
                    }, LazyWrapper.prototype.find = function(predicate) {
                        return this.filter(predicate).head();
                    }, LazyWrapper.prototype.findLast = function(predicate) {
                        return this.reverse().find(predicate);
                    }, LazyWrapper.prototype.invokeMap = baseRest((function(path, args) {
                        return "function" == typeof path ? new LazyWrapper(this) : this.map((function(value) {
                            return baseInvoke(value, path, args);
                        }));
                    })), LazyWrapper.prototype.reject = function(predicate) {
                        return this.filter(negate(getIteratee(predicate)));
                    }, LazyWrapper.prototype.slice = function(start, end) {
                        start = toInteger(start);
                        var result = this;
                        return result.__filtered__ && (start > 0 || end < 0) ? new LazyWrapper(result) : (start < 0 ? result = result.takeRight(-start) : start && (result = result.drop(start)), 
                        end !== undefined && (result = (end = toInteger(end)) < 0 ? result.dropRight(-end) : result.take(end - start)), 
                        result);
                    }, LazyWrapper.prototype.takeRightWhile = function(predicate) {
                        return this.reverse().takeWhile(predicate).reverse();
                    }, LazyWrapper.prototype.toArray = function() {
                        return this.take(MAX_ARRAY_LENGTH);
                    }, baseForOwn(LazyWrapper.prototype, (function(func, methodName) {
                        var checkIteratee = /^(?:filter|find|map|reject)|While$/.test(methodName), isTaker = /^(?:head|last)$/.test(methodName), lodashFunc = lodash[isTaker ? "take" + ("last" == methodName ? "Right" : "") : methodName], retUnwrapped = isTaker || /^find/.test(methodName);
                        lodashFunc && (lodash.prototype[methodName] = function() {
                            var value = this.__wrapped__, args = isTaker ? [ 1 ] : arguments, isLazy = value instanceof LazyWrapper, iteratee = args[0], useLazy = isLazy || isArray(value), interceptor = function(value) {
                                var result = lodashFunc.apply(lodash, arrayPush([ value ], args));
                                return isTaker && chainAll ? result[0] : result;
                            };
                            useLazy && checkIteratee && "function" == typeof iteratee && 1 != iteratee.length && (isLazy = useLazy = !1);
                            var chainAll = this.__chain__, isHybrid = !!this.__actions__.length, isUnwrapped = retUnwrapped && !chainAll, onlyLazy = isLazy && !isHybrid;
                            if (!retUnwrapped && useLazy) {
                                value = onlyLazy ? value : new LazyWrapper(this);
                                var result = func.apply(value, args);
                                return result.__actions__.push({
                                    func: thru,
                                    args: [ interceptor ],
                                    thisArg: undefined
                                }), new LodashWrapper(result, chainAll);
                            }
                            return isUnwrapped && onlyLazy ? func.apply(this, args) : (result = this.thru(interceptor), 
                            isUnwrapped ? isTaker ? result.value()[0] : result.value() : result);
                        });
                    })), arrayEach([ "pop", "push", "shift", "sort", "splice", "unshift" ], (function(methodName) {
                        var func = arrayProto[methodName], chainName = /^(?:push|sort|unshift)$/.test(methodName) ? "tap" : "thru", retUnwrapped = /^(?:pop|shift)$/.test(methodName);
                        lodash.prototype[methodName] = function() {
                            var args = arguments;
                            if (retUnwrapped && !this.__chain__) {
                                var value = this.value();
                                return func.apply(isArray(value) ? value : [], args);
                            }
                            return this[chainName]((function(value) {
                                return func.apply(isArray(value) ? value : [], args);
                            }));
                        };
                    })), baseForOwn(LazyWrapper.prototype, (function(func, methodName) {
                        var lodashFunc = lodash[methodName];
                        if (lodashFunc) {
                            var key = lodashFunc.name + "";
                            hasOwnProperty.call(realNames, key) || (realNames[key] = []), realNames[key].push({
                                name: methodName,
                                func: lodashFunc
                            });
                        }
                    })), realNames[createHybrid(undefined, WRAP_BIND_KEY_FLAG).name] = [ {
                        name: "wrapper",
                        func: undefined
                    } ], LazyWrapper.prototype.clone = function() {
                        var result = new LazyWrapper(this.__wrapped__);
                        return result.__actions__ = copyArray(this.__actions__), result.__dir__ = this.__dir__, 
                        result.__filtered__ = this.__filtered__, result.__iteratees__ = copyArray(this.__iteratees__), 
                        result.__takeCount__ = this.__takeCount__, result.__views__ = copyArray(this.__views__), 
                        result;
                    }, LazyWrapper.prototype.reverse = function() {
                        if (this.__filtered__) {
                            var result = new LazyWrapper(this);
                            result.__dir__ = -1, result.__filtered__ = !0;
                        } else (result = this.clone()).__dir__ *= -1;
                        return result;
                    }, LazyWrapper.prototype.value = function() {
                        var array = this.__wrapped__.value(), dir = this.__dir__, isArr = isArray(array), isRight = dir < 0, arrLength = isArr ? array.length : 0, view = function(start, end, transforms) {
                            for (var index = -1, length = transforms.length; ++index < length; ) {
                                var data = transforms[index], size = data.size;
                                switch (data.type) {
                                  case "drop":
                                    start += size;
                                    break;

                                  case "dropRight":
                                    end -= size;
                                    break;

                                  case "take":
                                    end = nativeMin(end, start + size);
                                    break;

                                  case "takeRight":
                                    start = nativeMax(start, end - size);
                                }
                            }
                            return {
                                start: start,
                                end: end
                            };
                        }(0, arrLength, this.__views__), start = view.start, end = view.end, length = end - start, index = isRight ? end : start - 1, iteratees = this.__iteratees__, iterLength = iteratees.length, resIndex = 0, takeCount = nativeMin(length, this.__takeCount__);
                        if (!isArr || !isRight && arrLength == length && takeCount == length) return baseWrapperValue(array, this.__actions__);
                        var result = [];
                        outer: for (;length-- && resIndex < takeCount; ) {
                            for (var iterIndex = -1, value = array[index += dir]; ++iterIndex < iterLength; ) {
                                var data = iteratees[iterIndex], type = data.type, computed = (0, data.iteratee)(value);
                                if (2 == type) value = computed; else if (!computed) {
                                    if (1 == type) continue outer;
                                    break outer;
                                }
                            }
                            result[resIndex++] = value;
                        }
                        return result;
                    }, lodash.prototype.at = wrapperAt, lodash.prototype.chain = function() {
                        return chain(this);
                    }, lodash.prototype.commit = function() {
                        return new LodashWrapper(this.value(), this.__chain__);
                    }, lodash.prototype.next = function() {
                        this.__values__ === undefined && (this.__values__ = toArray(this.value()));
                        var done = this.__index__ >= this.__values__.length;
                        return {
                            done: done,
                            value: done ? undefined : this.__values__[this.__index__++]
                        };
                    }, lodash.prototype.plant = function(value) {
                        for (var result, parent = this; parent instanceof baseLodash; ) {
                            var clone = wrapperClone(parent);
                            clone.__index__ = 0, clone.__values__ = undefined, result ? previous.__wrapped__ = clone : result = clone;
                            var previous = clone;
                            parent = parent.__wrapped__;
                        }
                        return previous.__wrapped__ = value, result;
                    }, lodash.prototype.reverse = function() {
                        var value = this.__wrapped__;
                        if (value instanceof LazyWrapper) {
                            var wrapped = value;
                            return this.__actions__.length && (wrapped = new LazyWrapper(this)), (wrapped = wrapped.reverse()).__actions__.push({
                                func: thru,
                                args: [ reverse ],
                                thisArg: undefined
                            }), new LodashWrapper(wrapped, this.__chain__);
                        }
                        return this.thru(reverse);
                    }, lodash.prototype.toJSON = lodash.prototype.valueOf = lodash.prototype.value = function() {
                        return baseWrapperValue(this.__wrapped__, this.__actions__);
                    }, lodash.prototype.first = lodash.prototype.head, symIterator && (lodash.prototype[symIterator] = function() {
                        return this;
                    }), lodash;
                }();
                root._ = _, (__WEBPACK_AMD_DEFINE_RESULT__ = (function() {
                    return _;
                }).call(exports, __webpack_require__, exports, module)) === undefined || (module.exports = __WEBPACK_AMD_DEFINE_RESULT__);
            }).call(this);
        }).call(this, __webpack_require__("YuTi")(module));
    },
    "MI/u": function(module, exports, __webpack_require__) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        });
        var RenderDebouncer = function() {
            function RenderDebouncer(_renderCallback) {
                this._renderCallback = _renderCallback;
            }
            return RenderDebouncer.prototype.dispose = function() {
                this._animationFrame && (window.cancelAnimationFrame(this._animationFrame), this._animationFrame = void 0);
            }, RenderDebouncer.prototype.refresh = function(rowStart, rowEnd, rowCount) {
                var _this = this;
                this._rowCount = rowCount, rowStart = void 0 !== rowStart ? rowStart : 0, rowEnd = void 0 !== rowEnd ? rowEnd : this._rowCount - 1, 
                this._rowStart = void 0 !== this._rowStart ? Math.min(this._rowStart, rowStart) : rowStart, 
                this._rowEnd = void 0 !== this._rowEnd ? Math.max(this._rowEnd, rowEnd) : rowEnd, 
                this._animationFrame || (this._animationFrame = window.requestAnimationFrame((function() {
                    return _this._innerRefresh();
                })));
            }, RenderDebouncer.prototype._innerRefresh = function() {
                void 0 !== this._rowStart && void 0 !== this._rowEnd && void 0 !== this._rowCount && (this._rowStart = Math.max(this._rowStart, 0), 
                this._rowEnd = Math.min(this._rowEnd, this._rowCount - 1), this._renderCallback(this._rowStart, this._rowEnd), 
                this._rowStart = void 0, this._rowEnd = void 0, this._animationFrame = void 0);
            }, RenderDebouncer;
        }();
        exports.RenderDebouncer = RenderDebouncer;
    },
    MTJE: function(module, exports, __webpack_require__) {
        "use strict";
        var extendStatics, __extends = this && this.__extends || (extendStatics = function(d, b) {
            return (extendStatics = Object.setPrototypeOf || {
                __proto__: []
            } instanceof Array && function(d, b) {
                d.__proto__ = b;
            } || function(d, b) {
                for (var p in b) b.hasOwnProperty(p) && (d[p] = b[p]);
            })(d, b);
        }, function(d, b) {
            function __() {
                this.constructor = d;
            }
            extendStatics(d, b), d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, 
            new __);
        });
        Object.defineProperty(exports, "__esModule", {
            value: !0
        });
        var DomRendererRowFactory_1 = __webpack_require__("HBUc"), Types_1 = __webpack_require__("2+Wn"), Lifecycle_1 = __webpack_require__("4wKv"), TERMINAL_CLASS_PREFIX = "xterm-dom-renderer-owner-", ROW_CONTAINER_CLASS = "xterm-rows", SELECTION_CLASS = "xterm-selection", nextTerminalId = 1, DomRenderer = function(_super) {
            function DomRenderer(_terminal, _colors) {
                var _this = _super.call(this) || this;
                return _this._terminal = _terminal, _this._colors = _colors, _this._terminalClass = nextTerminalId++, 
                _this._rowElements = [], _this._rowContainer = document.createElement("div"), _this._rowContainer.classList.add(ROW_CONTAINER_CLASS), 
                _this._rowContainer.style.lineHeight = "normal", _this._rowContainer.setAttribute("aria-hidden", "true"), 
                _this._refreshRowElements(_this._terminal.cols, _this._terminal.rows), _this._selectionContainer = document.createElement("div"), 
                _this._selectionContainer.classList.add(SELECTION_CLASS), _this._selectionContainer.setAttribute("aria-hidden", "true"), 
                _this.dimensions = {
                    scaledCharWidth: null,
                    scaledCharHeight: null,
                    scaledCellWidth: null,
                    scaledCellHeight: null,
                    scaledCharLeft: null,
                    scaledCharTop: null,
                    scaledCanvasWidth: null,
                    scaledCanvasHeight: null,
                    canvasWidth: null,
                    canvasHeight: null,
                    actualCellWidth: null,
                    actualCellHeight: null
                }, _this._updateDimensions(), _this._injectCss(), _this._rowFactory = new DomRendererRowFactory_1.DomRendererRowFactory(_terminal.options, document), 
                _this._terminal.element.classList.add(TERMINAL_CLASS_PREFIX + _this._terminalClass), 
                _this._terminal.screenElement.appendChild(_this._rowContainer), _this._terminal.screenElement.appendChild(_this._selectionContainer), 
                _this._terminal.linkifier.onLinkHover((function(e) {
                    return _this._onLinkHover(e);
                })), _this._terminal.linkifier.onLinkLeave((function(e) {
                    return _this._onLinkLeave(e);
                })), _this;
            }
            return __extends(DomRenderer, _super), DomRenderer.prototype.dispose = function() {
                this._terminal.element.classList.remove(TERMINAL_CLASS_PREFIX + this._terminalClass), 
                this._terminal.screenElement.removeChild(this._rowContainer), this._terminal.screenElement.removeChild(this._selectionContainer), 
                this._terminal.screenElement.removeChild(this._themeStyleElement), this._terminal.screenElement.removeChild(this._dimensionsStyleElement), 
                _super.prototype.dispose.call(this);
            }, DomRenderer.prototype._updateDimensions = function() {
                var _this = this;
                this.dimensions.scaledCharWidth = this._terminal.charMeasure.width * window.devicePixelRatio, 
                this.dimensions.scaledCharHeight = Math.ceil(this._terminal.charMeasure.height * window.devicePixelRatio), 
                this.dimensions.scaledCellWidth = this.dimensions.scaledCharWidth + Math.round(this._terminal.options.letterSpacing), 
                this.dimensions.scaledCellHeight = Math.floor(this.dimensions.scaledCharHeight * this._terminal.options.lineHeight), 
                this.dimensions.scaledCharLeft = 0, this.dimensions.scaledCharTop = 0, this.dimensions.scaledCanvasWidth = this.dimensions.scaledCellWidth * this._terminal.cols, 
                this.dimensions.scaledCanvasHeight = this.dimensions.scaledCellHeight * this._terminal.rows, 
                this.dimensions.canvasWidth = Math.round(this.dimensions.scaledCanvasWidth / window.devicePixelRatio), 
                this.dimensions.canvasHeight = Math.round(this.dimensions.scaledCanvasHeight / window.devicePixelRatio), 
                this.dimensions.actualCellWidth = this.dimensions.canvasWidth / this._terminal.cols, 
                this.dimensions.actualCellHeight = this.dimensions.canvasHeight / this._terminal.rows, 
                this._rowElements.forEach((function(element) {
                    element.style.width = _this.dimensions.canvasWidth + "px", element.style.height = _this.dimensions.actualCellHeight + "px", 
                    element.style.lineHeight = _this.dimensions.actualCellHeight + "px", element.style.overflow = "hidden";
                })), this._dimensionsStyleElement || (this._dimensionsStyleElement = document.createElement("style"), 
                this._terminal.screenElement.appendChild(this._dimensionsStyleElement)), this._dimensionsStyleElement.innerHTML = this._terminalSelector + " ." + ROW_CONTAINER_CLASS + " span { display: inline-block; height: 100%; vertical-align: top; width: " + this.dimensions.actualCellWidth + "px}", 
                this._selectionContainer.style.height = this._terminal._viewportElement.style.height, 
                this._terminal.screenElement.style.width = this.dimensions.canvasWidth + "px", this._terminal.screenElement.style.height = this.dimensions.canvasHeight + "px";
            }, DomRenderer.prototype.setColors = function(colors) {
                this._colors = colors, this._injectCss();
            }, DomRenderer.prototype._injectCss = function() {
                var _this = this;
                this._themeStyleElement || (this._themeStyleElement = document.createElement("style"), 
                this._terminal.screenElement.appendChild(this._themeStyleElement));
                var styles = this._terminalSelector + " ." + ROW_CONTAINER_CLASS + " { color: " + this._colors.foreground.css + "; background-color: " + this._colors.background.css + "; font-family: " + this._terminal.options.fontFamily + "; font-size: " + this._terminal.options.fontSize + "px;}";
                styles += this._terminalSelector + " span:not(." + DomRendererRowFactory_1.BOLD_CLASS + ") { font-weight: " + this._terminal.options.fontWeight + ";}" + this._terminalSelector + " span." + DomRendererRowFactory_1.BOLD_CLASS + " { font-weight: " + this._terminal.options.fontWeightBold + ";}" + this._terminalSelector + " span." + DomRendererRowFactory_1.ITALIC_CLASS + " { font-style: italic;}", 
                styles += "@keyframes blink { 0% { opacity: 1.0; } 50% { opacity: 0.0; } 100% { opacity: 1.0; }}", 
                styles += this._terminalSelector + " ." + ROW_CONTAINER_CLASS + ":not(.xterm-focus) ." + DomRendererRowFactory_1.CURSOR_CLASS + " { outline: 1px solid " + this._colors.cursor.css + "; outline-offset: -1px;}" + this._terminalSelector + " ." + ROW_CONTAINER_CLASS + ".xterm-focus ." + DomRendererRowFactory_1.CURSOR_CLASS + "." + DomRendererRowFactory_1.CURSOR_BLINK_CLASS + " { animation: blink 1s step-end infinite;}" + this._terminalSelector + " ." + ROW_CONTAINER_CLASS + ".xterm-focus ." + DomRendererRowFactory_1.CURSOR_CLASS + "." + DomRendererRowFactory_1.CURSOR_STYLE_BLOCK_CLASS + " { background-color: " + this._colors.cursor.css + "; color: " + this._colors.cursorAccent.css + ";}" + this._terminalSelector + " ." + ROW_CONTAINER_CLASS + ".xterm-focus ." + DomRendererRowFactory_1.CURSOR_CLASS + "." + DomRendererRowFactory_1.CURSOR_STYLE_BAR_CLASS + " { box-shadow: 1px 0 0 " + this._colors.cursor.css + " inset;}" + this._terminalSelector + " ." + ROW_CONTAINER_CLASS + ".xterm-focus ." + DomRendererRowFactory_1.CURSOR_CLASS + "." + DomRendererRowFactory_1.CURSOR_STYLE_UNDERLINE_CLASS + " { box-shadow: 0 -1px 0 " + this._colors.cursor.css + " inset;}", 
                styles += this._terminalSelector + " ." + SELECTION_CLASS + " { position: absolute; top: 0; left: 0; z-index: 1; pointer-events: none;}" + this._terminalSelector + " ." + SELECTION_CLASS + " div { position: absolute; background-color: " + this._colors.selection.css + ";}", 
                this._colors.ansi.forEach((function(c, i) {
                    styles += _this._terminalSelector + " .xterm-fg-" + i + " { color: " + c.css + "; }" + _this._terminalSelector + " .xterm-bg-" + i + " { background-color: " + c.css + "; }";
                })), this._themeStyleElement.innerHTML = styles += this._terminalSelector + " .xterm-fg-" + Types_1.INVERTED_DEFAULT_COLOR + " { color: " + this._colors.background.css + "; }" + this._terminalSelector + " .xterm-bg-" + Types_1.INVERTED_DEFAULT_COLOR + " { background-color: " + this._colors.foreground.css + "; }";
            }, DomRenderer.prototype.onDevicePixelRatioChange = function() {
                this._updateDimensions();
            }, DomRenderer.prototype._refreshRowElements = function(cols, rows) {
                for (var i = this._rowElements.length; i <= rows; i++) {
                    var row = document.createElement("div");
                    this._rowContainer.appendChild(row), this._rowElements.push(row);
                }
                for (;this._rowElements.length > rows; ) this._rowContainer.removeChild(this._rowElements.pop());
            }, DomRenderer.prototype.onResize = function(cols, rows) {
                this._refreshRowElements(cols, rows), this._updateDimensions();
            }, DomRenderer.prototype.onCharSizeChanged = function() {
                this._updateDimensions();
            }, DomRenderer.prototype.onBlur = function() {
                this._rowContainer.classList.remove("xterm-focus");
            }, DomRenderer.prototype.onFocus = function() {
                this._rowContainer.classList.add("xterm-focus");
            }, DomRenderer.prototype.onSelectionChanged = function(start, end, columnSelectMode) {
                for (;this._selectionContainer.children.length; ) this._selectionContainer.removeChild(this._selectionContainer.children[0]);
                if (start && end) {
                    var viewportStartRow = start[1] - this._terminal.buffer.ydisp, viewportEndRow = end[1] - this._terminal.buffer.ydisp, viewportCappedStartRow = Math.max(viewportStartRow, 0), viewportCappedEndRow = Math.min(viewportEndRow, this._terminal.rows - 1);
                    if (!(viewportCappedStartRow >= this._terminal.rows || viewportCappedEndRow < 0)) {
                        var documentFragment = document.createDocumentFragment();
                        columnSelectMode ? documentFragment.appendChild(this._createSelectionElement(viewportCappedStartRow, start[0], end[0], viewportCappedEndRow - viewportCappedStartRow + 1)) : (documentFragment.appendChild(this._createSelectionElement(viewportCappedStartRow, viewportStartRow === viewportCappedStartRow ? start[0] : 0, viewportCappedStartRow === viewportCappedEndRow ? end[0] : this._terminal.cols)), 
                        documentFragment.appendChild(this._createSelectionElement(viewportCappedStartRow + 1, 0, this._terminal.cols, viewportCappedEndRow - viewportCappedStartRow - 1)), 
                        viewportCappedStartRow !== viewportCappedEndRow && documentFragment.appendChild(this._createSelectionElement(viewportCappedEndRow, 0, viewportEndRow === viewportCappedEndRow ? end[0] : this._terminal.cols))), 
                        this._selectionContainer.appendChild(documentFragment);
                    }
                }
            }, DomRenderer.prototype._createSelectionElement = function(row, colStart, colEnd, rowCount) {
                void 0 === rowCount && (rowCount = 1);
                var element = document.createElement("div");
                return element.style.height = rowCount * this.dimensions.actualCellHeight + "px", 
                element.style.top = row * this.dimensions.actualCellHeight + "px", element.style.left = colStart * this.dimensions.actualCellWidth + "px", 
                element.style.width = this.dimensions.actualCellWidth * (colEnd - colStart) + "px", 
                element;
            }, DomRenderer.prototype.onCursorMove = function() {}, DomRenderer.prototype.onOptionsChanged = function() {
                this._updateDimensions(), this._injectCss(), this._terminal.refresh(0, this._terminal.rows - 1);
            }, DomRenderer.prototype.clear = function() {
                this._rowElements.forEach((function(e) {
                    return e.innerHTML = "";
                }));
            }, DomRenderer.prototype.renderRows = function(start, end) {
                for (var terminal = this._terminal, cursorAbsoluteY = terminal.buffer.ybase + terminal.buffer.y, cursorX = this._terminal.buffer.x, cursorBlink = this._terminal.options.cursorBlink, y = start; y <= end; y++) {
                    var rowElement = this._rowElements[y];
                    rowElement.innerHTML = "";
                    var row = y + terminal.buffer.ydisp, lineData = terminal.buffer.lines.get(row);
                    rowElement.appendChild(this._rowFactory.createRow(lineData, row === cursorAbsoluteY, terminal.options.cursorStyle, cursorX, cursorBlink, this.dimensions.actualCellWidth, terminal.cols));
                }
            }, Object.defineProperty(DomRenderer.prototype, "_terminalSelector", {
                get: function() {
                    return "." + TERMINAL_CLASS_PREFIX + this._terminalClass;
                },
                enumerable: !0,
                configurable: !0
            }), DomRenderer.prototype.registerCharacterJoiner = function(handler) {
                return -1;
            }, DomRenderer.prototype.deregisterCharacterJoiner = function(joinerId) {
                return !1;
            }, DomRenderer.prototype._onLinkHover = function(e) {
                this._setCellUnderline(e.x1, e.x2, e.y1, e.y2, e.cols, !0);
            }, DomRenderer.prototype._onLinkLeave = function(e) {
                this._setCellUnderline(e.x1, e.x2, e.y1, e.y2, e.cols, !1);
            }, DomRenderer.prototype._setCellUnderline = function(x, x2, y, y2, cols, enabled) {
                for (;x !== x2 || y !== y2; ) {
                    var row = this._rowElements[y];
                    if (!row) return;
                    var span = row.children[x];
                    span && (span.style.textDecoration = enabled ? "underline" : "none"), ++x >= cols && (x = 0, 
                    y++);
                }
            }, DomRenderer;
        }(Lifecycle_1.Disposable);
        exports.DomRenderer = DomRenderer;
    },
    MsZC: function(module, exports, __webpack_require__) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        });
        var CircularList_1 = __webpack_require__("3TFC"), BufferLine_1 = __webpack_require__("XMT/"), BufferReflow_1 = __webpack_require__("aCt+"), Marker_1 = __webpack_require__("xC8T");
        exports.MAX_BUFFER_SIZE = 4294967295;
        var Buffer = function() {
            function Buffer(_terminal, _hasScrollback) {
                this._terminal = _terminal, this._hasScrollback = _hasScrollback, this.savedCurAttrData = BufferLine_1.DEFAULT_ATTR_DATA.clone(), 
                this.markers = [], this._nullCell = BufferLine_1.CellData.fromCharData([ 0, BufferLine_1.NULL_CELL_CHAR, BufferLine_1.NULL_CELL_WIDTH, BufferLine_1.NULL_CELL_CODE ]), 
                this._whitespaceCell = BufferLine_1.CellData.fromCharData([ 0, BufferLine_1.WHITESPACE_CELL_CHAR, BufferLine_1.WHITESPACE_CELL_WIDTH, BufferLine_1.WHITESPACE_CELL_CODE ]), 
                this._cols = this._terminal.cols, this._rows = this._terminal.rows, this.clear();
            }
            return Buffer.prototype.getNullCell = function(attr) {
                return attr ? (this._nullCell.fg = attr.fg, this._nullCell.bg = attr.bg) : (this._nullCell.fg = 0, 
                this._nullCell.bg = 0), this._nullCell;
            }, Buffer.prototype.getWhitespaceCell = function(attr) {
                return attr ? (this._whitespaceCell.fg = attr.fg, this._whitespaceCell.bg = attr.bg) : (this._whitespaceCell.fg = 0, 
                this._whitespaceCell.bg = 0), this._whitespaceCell;
            }, Buffer.prototype.getBlankLine = function(attr, isWrapped) {
                return new BufferLine_1.BufferLine(this._terminal.cols, this.getNullCell(attr), isWrapped);
            }, Object.defineProperty(Buffer.prototype, "hasScrollback", {
                get: function() {
                    return this._hasScrollback && this.lines.maxLength > this._rows;
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(Buffer.prototype, "isCursorInViewport", {
                get: function() {
                    var relativeY = this.ybase + this.y - this.ydisp;
                    return relativeY >= 0 && relativeY < this._rows;
                },
                enumerable: !0,
                configurable: !0
            }), Buffer.prototype._getCorrectBufferLength = function(rows) {
                if (!this._hasScrollback) return rows;
                var correctBufferLength = rows + this._terminal.options.scrollback;
                return correctBufferLength > exports.MAX_BUFFER_SIZE ? exports.MAX_BUFFER_SIZE : correctBufferLength;
            }, Buffer.prototype.fillViewportRows = function(fillAttr) {
                if (0 === this.lines.length) {
                    void 0 === fillAttr && (fillAttr = BufferLine_1.DEFAULT_ATTR_DATA);
                    for (var i = this._rows; i--; ) this.lines.push(this.getBlankLine(fillAttr));
                }
            }, Buffer.prototype.clear = function() {
                this.ydisp = 0, this.ybase = 0, this.y = 0, this.x = 0, this.lines = new CircularList_1.CircularList(this._getCorrectBufferLength(this._rows)), 
                this.scrollTop = 0, this.scrollBottom = this._rows - 1, this.setupTabStops();
            }, Buffer.prototype.resize = function(newCols, newRows) {
                var nullCell = this.getNullCell(BufferLine_1.DEFAULT_ATTR_DATA), newMaxLength = this._getCorrectBufferLength(newRows);
                if (newMaxLength > this.lines.maxLength && (this.lines.maxLength = newMaxLength), 
                this.lines.length > 0) {
                    if (this._cols < newCols) for (var i = 0; i < this.lines.length; i++) this.lines.get(i).resize(newCols, nullCell);
                    var addToY = 0;
                    if (this._rows < newRows) for (var y = this._rows; y < newRows; y++) this.lines.length < newRows + this.ybase && (this.ybase > 0 && this.lines.length <= this.ybase + this.y + addToY + 1 ? (this.ybase--, 
                    addToY++, this.ydisp > 0 && this.ydisp--) : this.lines.push(new BufferLine_1.BufferLine(newCols, nullCell))); else for (y = this._rows; y > newRows; y--) this.lines.length > newRows + this.ybase && (this.lines.length > this.ybase + this.y + 1 ? this.lines.pop() : (this.ybase++, 
                    this.ydisp++));
                    if (newMaxLength < this.lines.maxLength) {
                        var amountToTrim = this.lines.length - newMaxLength;
                        amountToTrim > 0 && (this.lines.trimStart(amountToTrim), this.ybase = Math.max(this.ybase - amountToTrim, 0), 
                        this.ydisp = Math.max(this.ydisp - amountToTrim, 0)), this.lines.maxLength = newMaxLength;
                    }
                    this.x = Math.min(this.x, newCols - 1), this.y = Math.min(this.y, newRows - 1), 
                    addToY && (this.y += addToY), this.savedY = Math.min(this.savedY, newRows - 1), 
                    this.savedX = Math.min(this.savedX, newCols - 1), this.scrollTop = 0;
                }
                if (this.scrollBottom = newRows - 1, this._isReflowEnabled && (this._reflow(newCols, newRows), 
                this._cols > newCols)) for (i = 0; i < this.lines.length; i++) this.lines.get(i).resize(newCols, nullCell);
                this._cols = newCols, this._rows = newRows;
            }, Object.defineProperty(Buffer.prototype, "_isReflowEnabled", {
                get: function() {
                    return this._hasScrollback && !this._terminal.options.windowsMode;
                },
                enumerable: !0,
                configurable: !0
            }), Buffer.prototype._reflow = function(newCols, newRows) {
                this._cols !== newCols && (newCols > this._cols ? this._reflowLarger(newCols, newRows) : this._reflowSmaller(newCols, newRows));
            }, Buffer.prototype._reflowLarger = function(newCols, newRows) {
                var toRemove = BufferReflow_1.reflowLargerGetLinesToRemove(this.lines, this._cols, newCols, this.ybase + this.y, this.getNullCell(BufferLine_1.DEFAULT_ATTR_DATA));
                if (toRemove.length > 0) {
                    var newLayoutResult = BufferReflow_1.reflowLargerCreateNewLayout(this.lines, toRemove);
                    BufferReflow_1.reflowLargerApplyNewLayout(this.lines, newLayoutResult.layout), this._reflowLargerAdjustViewport(newCols, newRows, newLayoutResult.countRemoved);
                }
            }, Buffer.prototype._reflowLargerAdjustViewport = function(newCols, newRows, countRemoved) {
                for (var nullCell = this.getNullCell(BufferLine_1.DEFAULT_ATTR_DATA), viewportAdjustments = countRemoved; viewportAdjustments-- > 0; ) 0 === this.ybase ? (this.y > 0 && this.y--, 
                this.lines.length < newRows && this.lines.push(new BufferLine_1.BufferLine(newCols, nullCell))) : (this.ydisp === this.ybase && this.ydisp--, 
                this.ybase--);
            }, Buffer.prototype._reflowSmaller = function(newCols, newRows) {
                for (var nullCell = this.getNullCell(BufferLine_1.DEFAULT_ATTR_DATA), toInsert = [], countToInsert = 0, y = this.lines.length - 1; y >= 0; y--) {
                    var nextLine = this.lines.get(y);
                    if (!(!nextLine || !nextLine.isWrapped && nextLine.getTrimmedLength() <= newCols)) {
                        for (var wrappedLines = [ nextLine ]; nextLine.isWrapped && y > 0; ) nextLine = this.lines.get(--y), 
                        wrappedLines.unshift(nextLine);
                        var absoluteY = this.ybase + this.y;
                        if (!(absoluteY >= y && absoluteY < y + wrappedLines.length)) {
                            var trimmedLines, lastLineLength = wrappedLines[wrappedLines.length - 1].getTrimmedLength(), destLineLengths = BufferReflow_1.reflowSmallerGetNewLineLengths(wrappedLines, this._cols, newCols), linesToAdd = destLineLengths.length - wrappedLines.length;
                            trimmedLines = 0 === this.ybase && this.y !== this.lines.length - 1 ? Math.max(0, this.y - this.lines.maxLength + linesToAdd) : Math.max(0, this.lines.length - this.lines.maxLength + linesToAdd);
                            for (var newLines = [], i = 0; i < linesToAdd; i++) {
                                var newLine = this.getBlankLine(BufferLine_1.DEFAULT_ATTR_DATA, !0);
                                newLines.push(newLine);
                            }
                            newLines.length > 0 && (toInsert.push({
                                start: y + wrappedLines.length + countToInsert,
                                newLines: newLines
                            }), countToInsert += newLines.length), wrappedLines.push.apply(wrappedLines, newLines);
                            var destLineIndex = destLineLengths.length - 1, destCol = destLineLengths[destLineIndex];
                            0 === destCol && (destCol = destLineLengths[--destLineIndex]);
                            for (var srcLineIndex = wrappedLines.length - linesToAdd - 1, srcCol = lastLineLength; srcLineIndex >= 0; ) {
                                var cellsToCopy = Math.min(srcCol, destCol);
                                if (wrappedLines[destLineIndex].copyCellsFrom(wrappedLines[srcLineIndex], srcCol - cellsToCopy, destCol - cellsToCopy, cellsToCopy, !0), 
                                0 == (destCol -= cellsToCopy) && (destCol = destLineLengths[--destLineIndex]), 0 == (srcCol -= cellsToCopy)) {
                                    srcLineIndex--;
                                    var wrappedLinesIndex = Math.max(srcLineIndex, 0);
                                    srcCol = BufferReflow_1.getWrappedLineTrimmedLength(wrappedLines, wrappedLinesIndex, this._cols);
                                }
                            }
                            for (i = 0; i < wrappedLines.length; i++) destLineLengths[i] < newCols && wrappedLines[i].setCell(destLineLengths[i], nullCell);
                            for (var viewportAdjustments = linesToAdd - trimmedLines; viewportAdjustments-- > 0; ) 0 === this.ybase ? this.y < newRows - 1 ? (this.y++, 
                            this.lines.pop()) : (this.ybase++, this.ydisp++) : this.ybase < Math.min(this.lines.maxLength, this.lines.length + countToInsert) - newRows && (this.ybase === this.ydisp && this.ydisp++, 
                            this.ybase++);
                        }
                    }
                }
                if (toInsert.length > 0) {
                    var insertEvents = [], originalLines = [];
                    for (i = 0; i < this.lines.length; i++) originalLines.push(this.lines.get(i));
                    var originalLinesLength = this.lines.length, originalLineIndex = originalLinesLength - 1, nextToInsertIndex = 0, nextToInsert = toInsert[nextToInsertIndex];
                    this.lines.length = Math.min(this.lines.maxLength, this.lines.length + countToInsert);
                    var countInsertedSoFar = 0;
                    for (i = Math.min(this.lines.maxLength - 1, originalLinesLength + countToInsert - 1); i >= 0; i--) if (nextToInsert && nextToInsert.start > originalLineIndex + countInsertedSoFar) {
                        for (var nextI = nextToInsert.newLines.length - 1; nextI >= 0; nextI--) this.lines.set(i--, nextToInsert.newLines[nextI]);
                        i++, insertEvents.push({
                            index: originalLineIndex + 1,
                            amount: nextToInsert.newLines.length
                        }), countInsertedSoFar += nextToInsert.newLines.length, nextToInsert = toInsert[++nextToInsertIndex];
                    } else this.lines.set(i, originalLines[originalLineIndex--]);
                    var insertCountEmitted = 0;
                    for (i = insertEvents.length - 1; i >= 0; i--) insertEvents[i].index += insertCountEmitted, 
                    this.lines.onInsertEmitter.fire(insertEvents[i]), insertCountEmitted += insertEvents[i].amount;
                    var amountToTrim = Math.max(0, originalLinesLength + countToInsert - this.lines.maxLength);
                    amountToTrim > 0 && this.lines.onTrimEmitter.fire(amountToTrim);
                }
            }, Buffer.prototype.stringIndexToBufferIndex = function(lineIndex, stringIndex, trimRight) {
                for (void 0 === trimRight && (trimRight = !1); stringIndex; ) {
                    var line = this.lines.get(lineIndex);
                    if (!line) return [ -1, -1 ];
                    for (var length_1 = trimRight ? line.getTrimmedLength() : line.length, i = 0; i < length_1; ++i) if (line.get(i)[BufferLine_1.CHAR_DATA_WIDTH_INDEX] && (stringIndex -= line.get(i)[BufferLine_1.CHAR_DATA_CHAR_INDEX].length || 1), 
                    stringIndex < 0) return [ lineIndex, i ];
                    lineIndex++;
                }
                return [ lineIndex, 0 ];
            }, Buffer.prototype.translateBufferLineToString = function(lineIndex, trimRight, startCol, endCol) {
                void 0 === startCol && (startCol = 0);
                var line = this.lines.get(lineIndex);
                return line ? line.translateToString(trimRight, startCol, endCol) : "";
            }, Buffer.prototype.getWrappedRangeForLine = function(y) {
                for (var first = y, last = y; first > 0 && this.lines.get(first).isWrapped; ) first--;
                for (;last + 1 < this.lines.length && this.lines.get(last + 1).isWrapped; ) last++;
                return {
                    first: first,
                    last: last
                };
            }, Buffer.prototype.setupTabStops = function(i) {
                for (null != i ? this.tabs[i] || (i = this.prevStop(i)) : (this.tabs = {}, i = 0); i < this._cols; i += this._terminal.options.tabStopWidth) this.tabs[i] = !0;
            }, Buffer.prototype.prevStop = function(x) {
                for (null == x && (x = this.x); !this.tabs[--x] && x > 0; ) ;
                return x >= this._cols ? this._cols - 1 : x < 0 ? 0 : x;
            }, Buffer.prototype.nextStop = function(x) {
                for (null == x && (x = this.x); !this.tabs[++x] && x < this._cols; ) ;
                return x >= this._cols ? this._cols - 1 : x < 0 ? 0 : x;
            }, Buffer.prototype.addMarker = function(y) {
                var _this = this, marker = new Marker_1.Marker(y);
                return this.markers.push(marker), marker.register(this.lines.onTrim((function(amount) {
                    marker.line -= amount, marker.line < 0 && marker.dispose();
                }))), marker.register(this.lines.onInsert((function(event) {
                    marker.line >= event.index && (marker.line += event.amount);
                }))), marker.register(this.lines.onDelete((function(event) {
                    marker.line >= event.index && marker.line < event.index + event.amount && marker.dispose(), 
                    marker.line > event.index && (marker.line -= event.amount);
                }))), marker.register(marker.onDispose((function() {
                    return _this._removeMarker(marker);
                }))), marker;
            }, Buffer.prototype._removeMarker = function(marker) {
                this.markers.splice(this.markers.indexOf(marker), 1);
            }, Buffer.prototype.iterator = function(trimRight, startIndex, endIndex, startOverscan, endOverscan) {
                return new BufferStringIterator(this, trimRight, startIndex, endIndex, startOverscan, endOverscan);
            }, Buffer;
        }();
        exports.Buffer = Buffer;
        var BufferStringIterator = function() {
            function BufferStringIterator(_buffer, _trimRight, _startIndex, _endIndex, _startOverscan, _endOverscan) {
                void 0 === _startIndex && (_startIndex = 0), void 0 === _endIndex && (_endIndex = _buffer.lines.length), 
                void 0 === _startOverscan && (_startOverscan = 0), void 0 === _endOverscan && (_endOverscan = 0), 
                this._buffer = _buffer, this._trimRight = _trimRight, this._startIndex = _startIndex, 
                this._endIndex = _endIndex, this._startOverscan = _startOverscan, this._endOverscan = _endOverscan, 
                this._startIndex < 0 && (this._startIndex = 0), this._endIndex > this._buffer.lines.length && (this._endIndex = this._buffer.lines.length), 
                this._current = this._startIndex;
            }
            return BufferStringIterator.prototype.hasNext = function() {
                return this._current < this._endIndex;
            }, BufferStringIterator.prototype.next = function() {
                var range = this._buffer.getWrappedRangeForLine(this._current);
                range.first < this._startIndex - this._startOverscan && (range.first = this._startIndex - this._startOverscan), 
                range.last > this._endIndex + this._endOverscan && (range.last = this._endIndex + this._endOverscan), 
                range.first = Math.max(range.first, 0), range.last = Math.min(range.last, this._buffer.lines.length);
                for (var result = "", i = range.first; i <= range.last; ++i) result += this._buffer.translateBufferLineToString(i, this._trimRight);
                return this._current = range.last + 1, {
                    range: range,
                    content: result
                };
            }, BufferStringIterator;
        }();
        exports.BufferStringIterator = BufferStringIterator;
    },
    N7yj: function(module, exports, __webpack_require__) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports.addDisposableDomListener = function(node, type, handler, useCapture) {
            return node.addEventListener(type, handler, useCapture), {
                dispose: function() {
                    handler && node.removeEventListener(type, handler, useCapture);
                }
            };
        };
    },
    OOrL: function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        var core = __webpack_require__("8Y7J");
        class ShellModule {}
        var index_ngfactory = __webpack_require__("ntJQ"), dialog_index_ngfactory = __webpack_require__("9cE2"), snack_bar_index_ngfactory = __webpack_require__("007U"), router_ngfactory = __webpack_require__("pMnS"), dialog_ngfactory = __webpack_require__("wyY1"), component_ngfactory = __webpack_require__("HrBQ"), menu_component_ngfactory = __webpack_require__("Shg9"), changedialog_dialog_ngfactory = __webpack_require__("rO67"), core_index_ngfactory = __webpack_require__("CeGm"), fesm2015_core = __webpack_require__("UhP/"), select_index_ngfactory = __webpack_require__("Y1Mv"), fesm2015_select = __webpack_require__("ZTz/"), form_field = __webpack_require__("Q2Ze"), fesm2015_forms = __webpack_require__("s7LF"), scrolling = __webpack_require__("7KAL"), bidi = __webpack_require__("9gLZ"), a11y = __webpack_require__("YEUz"), common = __webpack_require__("SVse"), card_component_ngfactory = __webpack_require__("bLTg"), component = __webpack_require__("TN1b"), lodash = __webpack_require__("LvDl"), ReplaySubject = __webpack_require__("jtHE"), Subject = __webpack_require__("XNiG"), takeUntil = __webpack_require__("1G5W"), Terminal = __webpack_require__("Wb/s"), fit = __webpack_require__("xVS5"), endpoint = __webpack_require__("m/E6"), __awaiter = function(thisArg, _arguments, P, generator) {
            return new (P || (P = Promise))((function(resolve, reject) {
                function fulfilled(value) {
                    try {
                        step(generator.next(value));
                    } catch (e) {
                        reject(e);
                    }
                }
                function rejected(value) {
                    try {
                        step(generator.throw(value));
                    } catch (e) {
                        reject(e);
                    }
                }
                function step(result) {
                    var value;
                    result.done ? resolve(result.value) : (value = result.value, value instanceof P ? value : new P((function(resolve) {
                        resolve(value);
                    }))).then(fulfilled, rejected);
                }
                step((generator = generator.apply(thisArg, _arguments || [])).next());
            }));
        };
        class component_ShellComponent {
            constructor(containers_, utility_, activatedRoute_, matSnackBar_, cdr_, _router) {
                this.containers_ = containers_, this.utility_ = utility_, this.activatedRoute_ = activatedRoute_, 
                this.matSnackBar_ = matSnackBar_, this.cdr_ = cdr_, this._router = _router, this.connected_ = !1, 
                this.connSubject_ = new ReplaySubject.a(100), this.incommingMessage$_ = new Subject.b, 
                this.endpoint_ = endpoint.a.resource(endpoint.b.pod, !0), this.unsubscribe_ = new Subject.b, 
                this.keyEvent$_ = new ReplaySubject.a(2), this.namespace_ = this.activatedRoute_.snapshot.params.resourceNamespace, 
                this.podName = this.activatedRoute_.snapshot.params.resourceName;
                const containersEndpoint = this.endpoint_.child(this.podName, endpoint.b.container, this.namespace_);
                this.containers_.get(containersEndpoint).pipe(Object(takeUntil.a)(this.unsubscribe_)).subscribe(containerList => {
                    this.containers = containerList.containers, this.containers.length > 0 && !this.selectedContainer && this.onPodContainerChange(this.containers[0]);
                });
            }
            ngAfterViewInit() {
                this.activatedRoute_.paramMap.pipe(Object(takeUntil.a)(this.unsubscribe_)).subscribe(paramMap => {
                    const container = paramMap.get("containerName");
                    this.conn_ && this.connected_ && this.disconnect(), container && (this.selectedContainer = container, 
                    this.setupConnection(), this.initTerm());
                });
            }
            ngOnDestroy() {
                this.unsubscribe_.next(), this.unsubscribe_.complete(), this.conn_ && this.conn_.close(), 
                this.connSubject_ && this.connSubject_.complete(), this.term && this.term.dispose(), 
                this.incommingMessage$_.complete();
            }
            onPodContainerChange(podContainer) {
                this._router.navigate([ `/shell/${this.namespace_}/${this.podName}/${podContainer}` ], {
                    queryParamsHandling: "preserve"
                });
            }
            disconnect() {
                this.conn_ && this.conn_.close(), this.connSubject_ && (this.connSubject_.complete(), 
                this.connSubject_ = new ReplaySubject.a(100)), this.term && this.term.dispose(), 
                this.incommingMessage$_.complete(), this.incommingMessage$_ = new Subject.b;
            }
            initTerm() {
                this.connSubject_ && (this.connSubject_.complete(), this.connSubject_ = new ReplaySubject.a(100)), 
                this.term && this.term.dispose(), this.term = new Terminal.Terminal({
                    fontSize: 14,
                    fontFamily: 'Consolas, "Courier New", monospace',
                    bellStyle: "sound",
                    cursorBlink: !0
                }), this.term.open(this.anchorRef.nativeElement), this.debouncedFit_ = Object(lodash.debounce)(() => {
                    Object(fit.fit)(this.term), this.cdr_.markForCheck();
                }, 100), this.debouncedFit_(), window.addEventListener("resize", () => this.debouncedFit_()), 
                this.connSubject_.pipe(Object(takeUntil.a)(this.unsubscribe_)).subscribe(frame => {
                    this.handleConnectionMessage(frame);
                }), this.term.on("data", this.onTerminalSendString.bind(this)), this.term.on("resize", this.onTerminalResize.bind(this)), 
                this.term.on("key", (_, event) => {
                    this.keyEvent$_.next(event);
                }), this.cdr_.markForCheck();
            }
            setupConnection() {
                return __awaiter(this, void 0, void 0, (function*() {
                    if (!(this.selectedContainer && this.podName && this.namespace_) || this.connecting_) return;
                    this.connecting_ = !0, this.connectionClosed_ = !1;
                    const terminalSessionUrl = `${endpoint.a.utility(endpoint.c.shell).shell(this.namespace_, this.podName)}/${this.selectedContainer}`, {id: id} = yield this.utility_.shell(terminalSessionUrl).toPromise();
                    this.conn_ = new SockJS(`api/sockjs?${id}`), this.conn_.onopen = this.onConnectionOpen.bind(this, id), 
                    this.conn_.onmessage = this.onConnectionMessage.bind(this), this.conn_.onclose = this.onConnectionClose.bind(this), 
                    this.cdr_.markForCheck();
                }));
            }
            onConnectionOpen(sessionId) {
                const startData = {
                    Op: "bind",
                    SessionID: sessionId
                };
                this.conn_.send(JSON.stringify(startData)), this.connSubject_.next(startData), this.connected_ = !0, 
                this.connecting_ = !1, this.connectionClosed_ = !1, this.onTerminalResize(), this.term.focus(), 
                this.cdr_.markForCheck();
            }
            handleConnectionMessage(frame) {
                "stdout" === frame.Op && this.term.write(frame.Data), "toast" === frame.Op && this.matSnackBar_.open(frame.Data, null, {
                    duration: 3e3
                }), this.incommingMessage$_.next(frame), this.cdr_.markForCheck();
            }
            onConnectionMessage(evt) {
                const msg = JSON.parse(evt.data);
                this.connSubject_.next(msg);
            }
            onConnectionClose(_evt) {
                this.connected_ && (this.conn_.close(), this.connected_ = !1, this.connecting_ = !1, 
                this.connectionClosed_ = !0, this.matSnackBar_.open(_evt.reason, null, {
                    duration: 3e3
                }), this.cdr_.markForCheck());
            }
            onTerminalSendString(str) {
                this.connected_ && this.conn_.send(JSON.stringify({
                    Op: "stdin",
                    Data: str,
                    Cols: this.term.cols,
                    Rows: this.term.rows
                }));
            }
            onTerminalResize() {
                this.connected_ && this.conn_.send(JSON.stringify({
                    Op: "resize",
                    Cols: this.term.cols,
                    Rows: this.term.rows
                }));
            }
        }
        var resource = __webpack_require__("KyHI"), utility = __webpack_require__("ss/G"), router = __webpack_require__("iInd"), snack_bar = __webpack_require__("zHaW"), RenderType_ShellComponent = core["ɵcrt"]({
            encapsulation: 0,
            styles: [ [ "[_nghost-%COMP%]{display:block;height:calc(100% - 56px);width:100%}.kd-shell-content-card[_ngcontent-%COMP%]{box-sizing:border-box;display:block;height:100%;width:100%}.kd-shell-content-card[_ngcontent-%COMP%]   .kd-shell-content-card-title[_ngcontent-%COMP%]{display:inline}.kd-shell-content-card[_ngcontent-%COMP%]     mat-card{display:flex;flex-flow:column;height:100%}.kd-shell-content-card[_ngcontent-%COMP%]     mat-card>mat-card-title+div{display:flex;flex:1;flex-flow:column}.kd-shell-content-card[_ngcontent-%COMP%]     mat-card mat-card-content{display:flex;flex:1;flex-flow:column;background:#000;padding:0}.kd-shell-content-card[_ngcontent-%COMP%]     mat-card mat-card-content .xterm-anchor, .kd-shell-content-card[_ngcontent-%COMP%]     mat-card mat-card-content>div{display:flex;flex:1;flex-flow:column}.kd-shell-toolbar-select[_ngcontent-%COMP%]{width:180px}.kd-shell-toolbar-select[_ngcontent-%COMP%]   .md-select-value[_ngcontent-%COMP%]{font-size:20px;min-width:160px}" ] ],
            data: {}
        });
        function View_ShellComponent_2(_l) {
            return core["ɵvid"](0, [ (_l()(), core["ɵeld"](0, 0, null, null, 2, "mat-option", [ [ "class", "mat-option" ], [ "role", "option" ] ], [ [ 1, "tabindex", 0 ], [ 2, "mat-selected", null ], [ 2, "mat-option-multiple", null ], [ 2, "mat-active", null ], [ 8, "id", 0 ], [ 1, "aria-selected", 0 ], [ 1, "aria-disabled", 0 ], [ 2, "mat-option-disabled", null ] ], [ [ null, "click" ], [ null, "keydown" ] ], (function(_v, en, $event) {
                var ad = !0;
                return "click" === en && (ad = !1 !== core["ɵnov"](_v, 1)._selectViaInteraction() && ad), 
                "keydown" === en && (ad = !1 !== core["ɵnov"](_v, 1)._handleKeydown($event) && ad), 
                ad;
            }), core_index_ngfactory.d, core_index_ngfactory.b)), core["ɵdid"](1, 8568832, [ [ 2, 4 ] ], 0, fesm2015_core.p, [ core.ElementRef, core.ChangeDetectorRef, [ 2, fesm2015_core.j ], [ 2, fesm2015_core.o ] ], {
                value: [ 0, "value" ]
            }, null), (_l()(), core["ɵted"](2, 0, [ " ", " " ])) ], (function(_ck, _v) {
                _ck(_v, 1, 0, _v.context.$implicit);
            }), (function(_ck, _v) {
                _ck(_v, 0, 0, core["ɵnov"](_v, 1)._getTabIndex(), core["ɵnov"](_v, 1).selected, core["ɵnov"](_v, 1).multiple, core["ɵnov"](_v, 1).active, core["ɵnov"](_v, 1).id, core["ɵnov"](_v, 1)._getAriaSelected(), core["ɵnov"](_v, 1).disabled.toString(), core["ɵnov"](_v, 1).disabled), 
                _ck(_v, 2, 0, _v.context.$implicit);
            }));
        }
        function View_ShellComponent_1(_l) {
            return core["ɵvid"](0, [ (_l()(), core["ɵeld"](0, 0, null, null, 11, "mat-select", [ [ "class", "kd-shell-toolbar-select mat-select" ], [ "role", "listbox" ] ], [ [ 2, "ng-untouched", null ], [ 2, "ng-touched", null ], [ 2, "ng-pristine", null ], [ 2, "ng-dirty", null ], [ 2, "ng-valid", null ], [ 2, "ng-invalid", null ], [ 2, "ng-pending", null ], [ 1, "id", 0 ], [ 1, "tabindex", 0 ], [ 1, "aria-label", 0 ], [ 1, "aria-labelledby", 0 ], [ 1, "aria-required", 0 ], [ 1, "aria-disabled", 0 ], [ 1, "aria-invalid", 0 ], [ 1, "aria-owns", 0 ], [ 1, "aria-multiselectable", 0 ], [ 1, "aria-describedby", 0 ], [ 1, "aria-activedescendant", 0 ], [ 2, "mat-select-disabled", null ], [ 2, "mat-select-invalid", null ], [ 2, "mat-select-required", null ], [ 2, "mat-select-empty", null ] ], [ [ null, "ngModelChange" ], [ null, "keydown" ], [ null, "focus" ], [ null, "blur" ] ], (function(_v, en, $event) {
                var ad = !0, _co = _v.component;
                return "keydown" === en && (ad = !1 !== core["ɵnov"](_v, 6)._handleKeydown($event) && ad), 
                "focus" === en && (ad = !1 !== core["ɵnov"](_v, 6)._onFocus() && ad), "blur" === en && (ad = !1 !== core["ɵnov"](_v, 6)._onBlur() && ad), 
                "ngModelChange" === en && (ad = !1 !== _co.onPodContainerChange($event) && ad), 
                "ngModelChange" === en && (ad = !1 !== (_co.selectedContainer = $event) && ad), 
                ad;
            }), select_index_ngfactory.b, select_index_ngfactory.a)), core["ɵprd"](6144, null, fesm2015_core.j, null, [ fesm2015_select.c ]), core["ɵprd"](6144, null, form_field.d, null, [ fesm2015_select.c ]), core["ɵdid"](3, 671744, null, 0, fesm2015_forms.NgModel, [ [ 8, null ], [ 8, null ], [ 8, null ], [ 8, null ] ], {
                model: [ 0, "model" ]
            }, {
                update: "ngModelChange"
            }), core["ɵprd"](2048, null, fesm2015_forms.NgControl, null, [ fesm2015_forms.NgModel ]), core["ɵdid"](5, 16384, null, 0, fesm2015_forms.NgControlStatus, [ [ 4, fesm2015_forms.NgControl ] ], null, null), core["ɵdid"](6, 2080768, null, 3, fesm2015_select.c, [ scrolling.d, core.ChangeDetectorRef, core.NgZone, fesm2015_core.d, core.ElementRef, [ 2, bidi.b ], [ 2, fesm2015_forms.NgForm ], [ 2, fesm2015_forms.FormGroupDirective ], [ 2, form_field.c ], [ 6, fesm2015_forms.NgControl ], [ 8, null ], fesm2015_select.a, a11y.i ], null, null), core["ɵqud"](603979776, 2, {
                options: 1
            }), core["ɵqud"](603979776, 3, {
                optionGroups: 1
            }), core["ɵqud"](603979776, 4, {
                customTrigger: 0
            }), (_l()(), core["ɵand"](16777216, null, 1, 1, null, View_ShellComponent_2)), core["ɵdid"](11, 278528, null, 0, common.NgForOf, [ core.ViewContainerRef, core.TemplateRef, core.IterableDiffers ], {
                ngForOf: [ 0, "ngForOf" ]
            }, null) ], (function(_ck, _v) {
                var _co = _v.component;
                _ck(_v, 3, 0, _co.selectedContainer), _ck(_v, 6, 0), _ck(_v, 11, 0, _co.containers);
            }), (function(_ck, _v) {
                _ck(_v, 0, 1, [ core["ɵnov"](_v, 5).ngClassUntouched, core["ɵnov"](_v, 5).ngClassTouched, core["ɵnov"](_v, 5).ngClassPristine, core["ɵnov"](_v, 5).ngClassDirty, core["ɵnov"](_v, 5).ngClassValid, core["ɵnov"](_v, 5).ngClassInvalid, core["ɵnov"](_v, 5).ngClassPending, core["ɵnov"](_v, 6).id, core["ɵnov"](_v, 6).tabIndex, core["ɵnov"](_v, 6)._getAriaLabel(), core["ɵnov"](_v, 6)._getAriaLabelledby(), core["ɵnov"](_v, 6).required.toString(), core["ɵnov"](_v, 6).disabled.toString(), core["ɵnov"](_v, 6).errorState, core["ɵnov"](_v, 6).panelOpen ? core["ɵnov"](_v, 6)._optionIds : null, core["ɵnov"](_v, 6).multiple, core["ɵnov"](_v, 6)._ariaDescribedby || null, core["ɵnov"](_v, 6)._getAriaActiveDescendant(), core["ɵnov"](_v, 6).disabled, core["ɵnov"](_v, 6).errorState, core["ɵnov"](_v, 6).required, core["ɵnov"](_v, 6).empty ]);
            }));
        }
        function View_ShellComponent_0(_l) {
            return core["ɵvid"](0, [ core["ɵqud"](402653184, 1, {
                anchorRef: 0
            }), (_l()(), core["ɵeld"](1, 0, null, null, 7, "kd-card", [ [ "class", "kd-shell-content-card" ] ], null, null, null, card_component_ngfactory.b, card_component_ngfactory.a)), core["ɵdid"](2, 49152, null, 0, component.a, [], {
                expandable: [ 0, "expandable" ]
            }, null), (_l()(), core["ɵeld"](3, 0, null, 0, 4, "div", [ [ "class", "kd-shell-content-card-title" ], [ "title", "" ] ], null, null, null, null, null)), (_l()(), 
            core["ɵted"](-1, null, [ " Shell in " ])), (_l()(), core["ɵand"](16777216, null, null, 1, null, View_ShellComponent_1)), core["ɵdid"](6, 16384, null, 0, common.NgIf, [ core.ViewContainerRef, core.TemplateRef ], {
                ngIf: [ 0, "ngIf" ]
            }, null), (_l()(), core["ɵted"](7, null, [ " in ", " " ])), (_l()(), core["ɵeld"](8, 0, [ [ 1, 0 ], [ "anchor", 1 ] ], 3, 0, "div", [ [ "class", "xterm-anchor" ], [ "content", "" ] ], null, null, null, null, null)) ], (function(_ck, _v) {
                var _co = _v.component;
                _ck(_v, 2, 0, !1), _ck(_v, 6, 0, (null == _co.containers ? null : _co.containers.length) > 0);
            }), (function(_ck, _v) {
                _ck(_v, 7, 0, _v.component.podName);
            }));
        }
        function View_ShellComponent_Host_0(_l) {
            return core["ɵvid"](0, [ (_l()(), core["ɵeld"](0, 0, null, null, 1, "kd-shell", [], null, null, null, View_ShellComponent_0, RenderType_ShellComponent)), core["ɵdid"](1, 4374528, null, 0, component_ShellComponent, [ resource.a, utility.a, router.ActivatedRoute, snack_bar.b, core.ChangeDetectorRef, router.Router ], null, null) ], null, null);
        }
        var ShellComponentNgFactory = core["ɵccf"]("kd-shell", component_ShellComponent, View_ShellComponent_Host_0, {}, {}, []), observers = __webpack_require__("9b/N"), overlay = __webpack_require__("1O3W"), tooltip = __webpack_require__("ZFy/"), dialog = __webpack_require__("iELJ"), sort = __webpack_require__("LUZP"), paginator = __webpack_require__("5QHs"), menu = __webpack_require__("rJgo"), esm2015_core = __webpack_require__("/q54"), ngx_filter_pipe = __webpack_require__("4muW"), platform = __webpack_require__("SCoL"), fesm2015_button = __webpack_require__("Dxy4"), card = __webpack_require__("PDjf"), fesm2015_checkbox = __webpack_require__("pMoy"), divider = __webpack_require__("BSbQ"), grid_list = __webpack_require__("40+f"), icon = __webpack_require__("Tj54"), text_field = __webpack_require__("8sFK"), input = __webpack_require__("e6WT"), progress_spinner = __webpack_require__("pu8Q"), progress_bar = __webpack_require__("BTe0"), fesm2015_radio = __webpack_require__("zQhy"), sidenav = __webpack_require__("q7Ft"), toolbar = __webpack_require__("l0rg"), portal = __webpack_require__("1z/I"), slider = __webpack_require__("mPVK"), slide_toggle = __webpack_require__("jMqV"), chips = __webpack_require__("f44v"), table = __webpack_require__("GXRp"), fesm2015_table = __webpack_require__("OaSA"), tabs = __webpack_require__("M9ds"), button_toggle = __webpack_require__("Ynp+"), flex = __webpack_require__("VDRc"), extended = __webpack_require__("ura0"), grid = __webpack_require__("Nhcz"), flex_layout = __webpack_require__("u9T3"), src_module = __webpack_require__("o6Sk"), pipes_module = __webpack_require__("I7rD"), shared_module = __webpack_require__("MnlZ"), components_module = __webpack_require__("PXUV"), breadcrumbs_component = __webpack_require__("Y4Kv");
        const ɵ0 = {
            breadcrumb: "Shell",
            parent: breadcrumbs_component.b
        }, ɵ1 = {
            breadcrumb: "Shell",
            parent: breadcrumbs_component.b
        };
        class ShellRoutingModule {}
        var keycodes = __webpack_require__("Ht+U");
        __webpack_require__.d(__webpack_exports__, "ShellModuleNgFactory", (function() {
            return ShellModuleNgFactory;
        }));
        var ShellModuleNgFactory = core["ɵcmf"](ShellModule, [], (function(_l) {
            return core["ɵmod"]([ core["ɵmpd"](512, core.ComponentFactoryResolver, core["ɵCodegenComponentFactoryResolver"], [ [ 8, [ index_ngfactory.a, dialog_index_ngfactory.a, snack_bar_index_ngfactory.a, snack_bar_index_ngfactory.b, router_ngfactory.a, dialog_ngfactory.a, component_ngfactory.a, menu_component_ngfactory.a, changedialog_dialog_ngfactory.a, ShellComponentNgFactory ] ], [ 3, core.ComponentFactoryResolver ], core.NgModuleRef ]), core["ɵmpd"](4608, common.NgLocalization, common.NgLocaleLocalization, [ core.LOCALE_ID ]), core["ɵmpd"](4608, fesm2015_forms["ɵangular_packages_forms_forms_n"], fesm2015_forms["ɵangular_packages_forms_forms_n"], []), core["ɵmpd"](4608, fesm2015_forms.FormBuilder, fesm2015_forms.FormBuilder, []), core["ɵmpd"](4608, observers.c, observers.c, []), core["ɵmpd"](4608, fesm2015_core.d, fesm2015_core.d, []), core["ɵmpd"](4608, overlay.c, overlay.c, [ overlay.i, overlay.e, core.ComponentFactoryResolver, overlay.h, overlay.f, core.Injector, core.NgZone, common.DOCUMENT, bidi.b, [ 2, common.Location ] ]), core["ɵmpd"](5120, overlay.j, overlay.k, [ overlay.c ]), core["ɵmpd"](5120, tooltip.b, tooltip.c, [ overlay.c ]), core["ɵmpd"](5120, dialog.c, dialog.d, [ overlay.c ]), core["ɵmpd"](135680, dialog.e, dialog.e, [ overlay.c, core.Injector, [ 2, common.Location ], [ 2, dialog.b ], dialog.c, [ 3, dialog.e ], overlay.e ]), core["ɵmpd"](5120, sort.d, sort.a, [ [ 3, sort.d ] ]), core["ɵmpd"](5120, fesm2015_select.a, fesm2015_select.b, [ overlay.c ]), core["ɵmpd"](5120, paginator.c, paginator.a, [ [ 3, paginator.c ] ]), core["ɵmpd"](5120, menu.c, menu.j, [ overlay.c ]), core["ɵmpd"](5120, core.APP_BOOTSTRAP_LISTENER, (function(p0_0, p0_1) {
                return [ esm2015_core.j(p0_0, p0_1) ];
            }), [ common.DOCUMENT, core.PLATFORM_ID ]), core["ɵmpd"](4608, ngx_filter_pipe.a, ngx_filter_pipe.a, []), core["ɵmpd"](1073742336, common.CommonModule, common.CommonModule, []), core["ɵmpd"](1073742336, fesm2015_forms["ɵangular_packages_forms_forms_d"], fesm2015_forms["ɵangular_packages_forms_forms_d"], []), core["ɵmpd"](1073742336, fesm2015_forms.FormsModule, fesm2015_forms.FormsModule, []), core["ɵmpd"](1073742336, fesm2015_forms.ReactiveFormsModule, fesm2015_forms.ReactiveFormsModule, []), core["ɵmpd"](1073742336, bidi.a, bidi.a, []), core["ɵmpd"](1073742336, fesm2015_core.l, fesm2015_core.l, [ a11y.h, [ 2, fesm2015_core.e ] ]), core["ɵmpd"](1073742336, platform.b, platform.b, []), core["ɵmpd"](1073742336, fesm2015_core.u, fesm2015_core.u, []), core["ɵmpd"](1073742336, fesm2015_button.c, fesm2015_button.c, []), core["ɵmpd"](1073742336, card.e, card.e, []), core["ɵmpd"](1073742336, observers.d, observers.d, []), core["ɵmpd"](1073742336, fesm2015_checkbox.e, fesm2015_checkbox.e, []), core["ɵmpd"](1073742336, fesm2015_checkbox.d, fesm2015_checkbox.d, []), core["ɵmpd"](1073742336, divider.b, divider.b, []), core["ɵmpd"](1073742336, fesm2015_core.m, fesm2015_core.m, []), core["ɵmpd"](1073742336, grid_list.a, grid_list.a, []), core["ɵmpd"](1073742336, form_field.e, form_field.e, []), core["ɵmpd"](1073742336, icon.c, icon.c, []), core["ɵmpd"](1073742336, text_field.c, text_field.c, []), core["ɵmpd"](1073742336, input.b, input.b, []), core["ɵmpd"](1073742336, progress_spinner.c, progress_spinner.c, []), core["ɵmpd"](1073742336, progress_bar.c, progress_bar.c, []), core["ɵmpd"](1073742336, fesm2015_radio.d, fesm2015_radio.d, []), core["ɵmpd"](1073742336, scrolling.c, scrolling.c, []), core["ɵmpd"](1073742336, sidenav.h, sidenav.h, []), core["ɵmpd"](1073742336, toolbar.b, toolbar.b, []), core["ɵmpd"](1073742336, a11y.a, a11y.a, [ a11y.h ]), core["ɵmpd"](1073742336, portal.g, portal.g, []), core["ɵmpd"](1073742336, overlay.g, overlay.g, []), core["ɵmpd"](1073742336, tooltip.e, tooltip.e, []), core["ɵmpd"](1073742336, slider.b, slider.b, []), core["ɵmpd"](1073742336, dialog.k, dialog.k, []), core["ɵmpd"](1073742336, slide_toggle.d, slide_toggle.d, []), core["ɵmpd"](1073742336, slide_toggle.c, slide_toggle.c, []), core["ɵmpd"](1073742336, chips.d, chips.d, []), core["ɵmpd"](1073742336, table.p, table.p, []), core["ɵmpd"](1073742336, fesm2015_table.m, fesm2015_table.m, []), core["ɵmpd"](1073742336, sort.e, sort.e, []), core["ɵmpd"](1073742336, fesm2015_core.s, fesm2015_core.s, []), core["ɵmpd"](1073742336, fesm2015_core.q, fesm2015_core.q, []), core["ɵmpd"](1073742336, fesm2015_select.d, fesm2015_select.d, []), core["ɵmpd"](1073742336, paginator.d, paginator.d, []), core["ɵmpd"](1073742336, tabs.k, tabs.k, []), core["ɵmpd"](1073742336, menu.i, menu.i, []), core["ɵmpd"](1073742336, menu.f, menu.f, []), core["ɵmpd"](1073742336, button_toggle.e, button_toggle.e, []), core["ɵmpd"](1073742336, snack_bar.e, snack_bar.e, []), core["ɵmpd"](1073742336, esm2015_core.c, esm2015_core.c, []), core["ɵmpd"](1073742336, flex.h, flex.h, []), core["ɵmpd"](1073742336, extended.b, extended.b, []), core["ɵmpd"](1073742336, grid.a, grid.a, []), core["ɵmpd"](1073742336, flex_layout.a, flex_layout.a, [ [ 2, esm2015_core.g ], core.PLATFORM_ID ]), core["ɵmpd"](1073742336, router.RouterModule, router.RouterModule, [ [ 2, router["ɵangular_packages_router_router_a"] ], [ 2, router.Router ] ]), core["ɵmpd"](1073742336, src_module.a, src_module.a, []), core["ɵmpd"](1073742336, ngx_filter_pipe.b, ngx_filter_pipe.b, []), core["ɵmpd"](1073742336, pipes_module.a, pipes_module.a, []), core["ɵmpd"](1073742336, shared_module.a, shared_module.a, []), core["ɵmpd"](1073742336, components_module.a, components_module.a, []), core["ɵmpd"](1073742336, ShellRoutingModule, ShellRoutingModule, []), core["ɵmpd"](1073742336, ShellModule, ShellModule, []), core["ɵmpd"](256, chips.a, {
                separatorKeyCodes: [ keycodes.f ]
            }, []), core["ɵmpd"](256, tooltip.a, shared_module.b, []), core["ɵmpd"](1024, router.ROUTES, (function() {
                return [ [ {
                    path: ":resourceNamespace/:resourceName",
                    component: component_ShellComponent,
                    data: ɵ1
                }, {
                    path: ":resourceNamespace/:resourceName/:containerName",
                    component: component_ShellComponent,
                    data: ɵ0
                } ] ];
            }), []) ]);
        }));
    },
    PtnK: function(module, exports, __webpack_require__) {
        "use strict";
        var extendStatics, __extends = this && this.__extends || (extendStatics = function(d, b) {
            return (extendStatics = Object.setPrototypeOf || {
                __proto__: []
            } instanceof Array && function(d, b) {
                d.__proto__ = b;
            } || function(d, b) {
                for (var p in b) b.hasOwnProperty(p) && (d[p] = b[p]);
            })(d, b);
        }, function(d, b) {
            function __() {
                this.constructor = d;
            }
            extendStatics(d, b), d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, 
            new __);
        });
        Object.defineProperty(exports, "__esModule", {
            value: !0
        });
        var TextRenderLayer_1 = __webpack_require__("i/Fu"), SelectionRenderLayer_1 = __webpack_require__("Ipkf"), CursorRenderLayer_1 = __webpack_require__("makB"), LinkRenderLayer_1 = __webpack_require__("3+mF"), CharacterJoinerRegistry_1 = __webpack_require__("A2P1"), Renderer = function(_super) {
            function Renderer(_terminal, _colors) {
                var _this = _super.call(this) || this;
                _this._terminal = _terminal, _this._colors = _colors;
                var allowTransparency = _this._terminal.options.allowTransparency;
                return _this._characterJoinerRegistry = new CharacterJoinerRegistry_1.CharacterJoinerRegistry(_terminal), 
                _this._renderLayers = [ new TextRenderLayer_1.TextRenderLayer(_this._terminal.screenElement, 0, _this._colors, _this._characterJoinerRegistry, allowTransparency), new SelectionRenderLayer_1.SelectionRenderLayer(_this._terminal.screenElement, 1, _this._colors), new LinkRenderLayer_1.LinkRenderLayer(_this._terminal.screenElement, 2, _this._colors, _this._terminal), new CursorRenderLayer_1.CursorRenderLayer(_this._terminal.screenElement, 3, _this._colors) ], 
                _this.dimensions = {
                    scaledCharWidth: null,
                    scaledCharHeight: null,
                    scaledCellWidth: null,
                    scaledCellHeight: null,
                    scaledCharLeft: null,
                    scaledCharTop: null,
                    scaledCanvasWidth: null,
                    scaledCanvasHeight: null,
                    canvasWidth: null,
                    canvasHeight: null,
                    actualCellWidth: null,
                    actualCellHeight: null
                }, _this._devicePixelRatio = window.devicePixelRatio, _this._updateDimensions(), 
                _this.onOptionsChanged(), _this;
            }
            return __extends(Renderer, _super), Renderer.prototype.dispose = function() {
                _super.prototype.dispose.call(this), this._renderLayers.forEach((function(l) {
                    return l.dispose();
                }));
            }, Renderer.prototype.onDevicePixelRatioChange = function() {
                this._devicePixelRatio !== window.devicePixelRatio && (this._devicePixelRatio = window.devicePixelRatio, 
                this.onResize(this._terminal.cols, this._terminal.rows));
            }, Renderer.prototype.setColors = function(colors) {
                var _this = this;
                this._colors = colors, this._renderLayers.forEach((function(l) {
                    l.setColors(_this._terminal, _this._colors), l.reset(_this._terminal);
                }));
            }, Renderer.prototype.onResize = function(cols, rows) {
                var _this = this;
                this._updateDimensions(), this._renderLayers.forEach((function(l) {
                    return l.resize(_this._terminal, _this.dimensions);
                })), this._terminal.screenElement.style.width = this.dimensions.canvasWidth + "px", 
                this._terminal.screenElement.style.height = this.dimensions.canvasHeight + "px";
            }, Renderer.prototype.onCharSizeChanged = function() {
                this.onResize(this._terminal.cols, this._terminal.rows);
            }, Renderer.prototype.onBlur = function() {
                var _this = this;
                this._runOperation((function(l) {
                    return l.onBlur(_this._terminal);
                }));
            }, Renderer.prototype.onFocus = function() {
                var _this = this;
                this._runOperation((function(l) {
                    return l.onFocus(_this._terminal);
                }));
            }, Renderer.prototype.onSelectionChanged = function(start, end, columnSelectMode) {
                var _this = this;
                void 0 === columnSelectMode && (columnSelectMode = !1), this._runOperation((function(l) {
                    return l.onSelectionChanged(_this._terminal, start, end, columnSelectMode);
                }));
            }, Renderer.prototype.onCursorMove = function() {
                var _this = this;
                this._runOperation((function(l) {
                    return l.onCursorMove(_this._terminal);
                }));
            }, Renderer.prototype.onOptionsChanged = function() {
                var _this = this;
                this._runOperation((function(l) {
                    return l.onOptionsChanged(_this._terminal);
                }));
            }, Renderer.prototype.clear = function() {
                var _this = this;
                this._runOperation((function(l) {
                    return l.reset(_this._terminal);
                }));
            }, Renderer.prototype._runOperation = function(operation) {
                this._renderLayers.forEach((function(l) {
                    return operation(l);
                }));
            }, Renderer.prototype.renderRows = function(start, end) {
                var _this = this;
                this._renderLayers.forEach((function(l) {
                    return l.onGridChanged(_this._terminal, start, end);
                }));
            }, Renderer.prototype._updateDimensions = function() {
                this._terminal.charMeasure.width && this._terminal.charMeasure.height && (this.dimensions.scaledCharWidth = Math.floor(this._terminal.charMeasure.width * window.devicePixelRatio), 
                this.dimensions.scaledCharHeight = Math.ceil(this._terminal.charMeasure.height * window.devicePixelRatio), 
                this.dimensions.scaledCellHeight = Math.floor(this.dimensions.scaledCharHeight * this._terminal.options.lineHeight), 
                this.dimensions.scaledCharTop = 1 === this._terminal.options.lineHeight ? 0 : Math.round((this.dimensions.scaledCellHeight - this.dimensions.scaledCharHeight) / 2), 
                this.dimensions.scaledCellWidth = this.dimensions.scaledCharWidth + Math.round(this._terminal.options.letterSpacing), 
                this.dimensions.scaledCharLeft = Math.floor(this._terminal.options.letterSpacing / 2), 
                this.dimensions.scaledCanvasHeight = this._terminal.rows * this.dimensions.scaledCellHeight, 
                this.dimensions.scaledCanvasWidth = this._terminal.cols * this.dimensions.scaledCellWidth, 
                this.dimensions.canvasHeight = Math.round(this.dimensions.scaledCanvasHeight / window.devicePixelRatio), 
                this.dimensions.canvasWidth = Math.round(this.dimensions.scaledCanvasWidth / window.devicePixelRatio), 
                this.dimensions.actualCellHeight = this.dimensions.canvasHeight / this._terminal.rows, 
                this.dimensions.actualCellWidth = this.dimensions.canvasWidth / this._terminal.cols);
            }, Renderer.prototype.registerCharacterJoiner = function(handler) {
                return this._characterJoinerRegistry.registerCharacterJoiner(handler);
            }, Renderer.prototype.deregisterCharacterJoiner = function(joinerId) {
                return this._characterJoinerRegistry.deregisterCharacterJoiner(joinerId);
            }, Renderer;
        }(__webpack_require__("4wKv").Disposable);
        exports.Renderer = Renderer;
    },
    QVly: function(module, exports, __webpack_require__) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        });
        var EscapeSequences_1 = __webpack_require__("dog+"), KEYCODE_KEY_MAPPINGS = {
            48: [ "0", ")" ],
            49: [ "1", "!" ],
            50: [ "2", "@" ],
            51: [ "3", "#" ],
            52: [ "4", "$" ],
            53: [ "5", "%" ],
            54: [ "6", "^" ],
            55: [ "7", "&" ],
            56: [ "8", "*" ],
            57: [ "9", "(" ],
            186: [ ";", ":" ],
            187: [ "=", "+" ],
            188: [ ",", "<" ],
            189: [ "-", "_" ],
            190: [ ".", ">" ],
            191: [ "/", "?" ],
            192: [ "`", "~" ],
            219: [ "[", "{" ],
            220: [ "\\", "|" ],
            221: [ "]", "}" ],
            222: [ "'", '"' ]
        };
        exports.evaluateKeyboardEvent = function(ev, applicationCursorMode, isMac, macOptionIsMeta) {
            var result = {
                type: 0,
                cancel: !1,
                key: void 0
            }, modifiers = (ev.shiftKey ? 1 : 0) | (ev.altKey ? 2 : 0) | (ev.ctrlKey ? 4 : 0) | (ev.metaKey ? 8 : 0);
            switch (ev.keyCode) {
              case 0:
                "UIKeyInputUpArrow" === ev.key ? result.key = applicationCursorMode ? EscapeSequences_1.C0.ESC + "OA" : EscapeSequences_1.C0.ESC + "[A" : "UIKeyInputLeftArrow" === ev.key ? result.key = applicationCursorMode ? EscapeSequences_1.C0.ESC + "OD" : EscapeSequences_1.C0.ESC + "[D" : "UIKeyInputRightArrow" === ev.key ? result.key = applicationCursorMode ? EscapeSequences_1.C0.ESC + "OC" : EscapeSequences_1.C0.ESC + "[C" : "UIKeyInputDownArrow" === ev.key && (result.key = applicationCursorMode ? EscapeSequences_1.C0.ESC + "OB" : EscapeSequences_1.C0.ESC + "[B");
                break;

              case 8:
                if (ev.shiftKey) {
                    result.key = EscapeSequences_1.C0.BS;
                    break;
                }
                if (ev.altKey) {
                    result.key = EscapeSequences_1.C0.ESC + EscapeSequences_1.C0.DEL;
                    break;
                }
                result.key = EscapeSequences_1.C0.DEL;
                break;

              case 9:
                if (ev.shiftKey) {
                    result.key = EscapeSequences_1.C0.ESC + "[Z";
                    break;
                }
                result.key = EscapeSequences_1.C0.HT, result.cancel = !0;
                break;

              case 13:
                result.key = EscapeSequences_1.C0.CR, result.cancel = !0;
                break;

              case 27:
                result.key = EscapeSequences_1.C0.ESC, result.cancel = !0;
                break;

              case 37:
                modifiers ? (result.key = EscapeSequences_1.C0.ESC + "[1;" + (modifiers + 1) + "D", 
                result.key === EscapeSequences_1.C0.ESC + "[1;3D" && (result.key = isMac ? EscapeSequences_1.C0.ESC + "b" : EscapeSequences_1.C0.ESC + "[1;5D")) : result.key = applicationCursorMode ? EscapeSequences_1.C0.ESC + "OD" : EscapeSequences_1.C0.ESC + "[D";
                break;

              case 39:
                modifiers ? (result.key = EscapeSequences_1.C0.ESC + "[1;" + (modifiers + 1) + "C", 
                result.key === EscapeSequences_1.C0.ESC + "[1;3C" && (result.key = isMac ? EscapeSequences_1.C0.ESC + "f" : EscapeSequences_1.C0.ESC + "[1;5C")) : result.key = applicationCursorMode ? EscapeSequences_1.C0.ESC + "OC" : EscapeSequences_1.C0.ESC + "[C";
                break;

              case 38:
                modifiers ? (result.key = EscapeSequences_1.C0.ESC + "[1;" + (modifiers + 1) + "A", 
                result.key === EscapeSequences_1.C0.ESC + "[1;3A" && (result.key = EscapeSequences_1.C0.ESC + "[1;5A")) : result.key = applicationCursorMode ? EscapeSequences_1.C0.ESC + "OA" : EscapeSequences_1.C0.ESC + "[A";
                break;

              case 40:
                modifiers ? (result.key = EscapeSequences_1.C0.ESC + "[1;" + (modifiers + 1) + "B", 
                result.key === EscapeSequences_1.C0.ESC + "[1;3B" && (result.key = EscapeSequences_1.C0.ESC + "[1;5B")) : result.key = applicationCursorMode ? EscapeSequences_1.C0.ESC + "OB" : EscapeSequences_1.C0.ESC + "[B";
                break;

              case 45:
                ev.shiftKey || ev.ctrlKey || (result.key = EscapeSequences_1.C0.ESC + "[2~");
                break;

              case 46:
                result.key = modifiers ? EscapeSequences_1.C0.ESC + "[3;" + (modifiers + 1) + "~" : EscapeSequences_1.C0.ESC + "[3~";
                break;

              case 36:
                result.key = modifiers ? EscapeSequences_1.C0.ESC + "[1;" + (modifiers + 1) + "H" : applicationCursorMode ? EscapeSequences_1.C0.ESC + "OH" : EscapeSequences_1.C0.ESC + "[H";
                break;

              case 35:
                result.key = modifiers ? EscapeSequences_1.C0.ESC + "[1;" + (modifiers + 1) + "F" : applicationCursorMode ? EscapeSequences_1.C0.ESC + "OF" : EscapeSequences_1.C0.ESC + "[F";
                break;

              case 33:
                ev.shiftKey ? result.type = 2 : result.key = EscapeSequences_1.C0.ESC + "[5~";
                break;

              case 34:
                ev.shiftKey ? result.type = 3 : result.key = EscapeSequences_1.C0.ESC + "[6~";
                break;

              case 112:
                result.key = modifiers ? EscapeSequences_1.C0.ESC + "[1;" + (modifiers + 1) + "P" : EscapeSequences_1.C0.ESC + "OP";
                break;

              case 113:
                result.key = modifiers ? EscapeSequences_1.C0.ESC + "[1;" + (modifiers + 1) + "Q" : EscapeSequences_1.C0.ESC + "OQ";
                break;

              case 114:
                result.key = modifiers ? EscapeSequences_1.C0.ESC + "[1;" + (modifiers + 1) + "R" : EscapeSequences_1.C0.ESC + "OR";
                break;

              case 115:
                result.key = modifiers ? EscapeSequences_1.C0.ESC + "[1;" + (modifiers + 1) + "S" : EscapeSequences_1.C0.ESC + "OS";
                break;

              case 116:
                result.key = modifiers ? EscapeSequences_1.C0.ESC + "[15;" + (modifiers + 1) + "~" : EscapeSequences_1.C0.ESC + "[15~";
                break;

              case 117:
                result.key = modifiers ? EscapeSequences_1.C0.ESC + "[17;" + (modifiers + 1) + "~" : EscapeSequences_1.C0.ESC + "[17~";
                break;

              case 118:
                result.key = modifiers ? EscapeSequences_1.C0.ESC + "[18;" + (modifiers + 1) + "~" : EscapeSequences_1.C0.ESC + "[18~";
                break;

              case 119:
                result.key = modifiers ? EscapeSequences_1.C0.ESC + "[19;" + (modifiers + 1) + "~" : EscapeSequences_1.C0.ESC + "[19~";
                break;

              case 120:
                result.key = modifiers ? EscapeSequences_1.C0.ESC + "[20;" + (modifiers + 1) + "~" : EscapeSequences_1.C0.ESC + "[20~";
                break;

              case 121:
                result.key = modifiers ? EscapeSequences_1.C0.ESC + "[21;" + (modifiers + 1) + "~" : EscapeSequences_1.C0.ESC + "[21~";
                break;

              case 122:
                result.key = modifiers ? EscapeSequences_1.C0.ESC + "[23;" + (modifiers + 1) + "~" : EscapeSequences_1.C0.ESC + "[23~";
                break;

              case 123:
                result.key = modifiers ? EscapeSequences_1.C0.ESC + "[24;" + (modifiers + 1) + "~" : EscapeSequences_1.C0.ESC + "[24~";
                break;

              default:
                if (!ev.ctrlKey || ev.shiftKey || ev.altKey || ev.metaKey) if (isMac && !macOptionIsMeta || !ev.altKey || ev.metaKey) isMac && !ev.altKey && !ev.ctrlKey && ev.metaKey ? 65 === ev.keyCode && (result.type = 1) : ev.key && !ev.ctrlKey && !ev.altKey && !ev.metaKey && ev.keyCode >= 48 && 1 === ev.key.length ? result.key = ev.key : ev.key && ev.ctrlKey && "_" === ev.key && (result.key = EscapeSequences_1.C0.US); else {
                    var keyMapping = KEYCODE_KEY_MAPPINGS[ev.keyCode], key = keyMapping && keyMapping[ev.shiftKey ? 1 : 0];
                    key ? result.key = EscapeSequences_1.C0.ESC + key : ev.keyCode >= 65 && ev.keyCode <= 90 && (result.key = EscapeSequences_1.C0.ESC + String.fromCharCode(ev.ctrlKey ? ev.keyCode - 64 : ev.keyCode + 32));
                } else ev.keyCode >= 65 && ev.keyCode <= 90 ? result.key = String.fromCharCode(ev.keyCode - 64) : 32 === ev.keyCode ? result.key = String.fromCharCode(0) : ev.keyCode >= 51 && ev.keyCode <= 55 ? result.key = String.fromCharCode(ev.keyCode - 51 + 27) : 56 === ev.keyCode ? result.key = String.fromCharCode(127) : 219 === ev.keyCode ? result.key = String.fromCharCode(27) : 220 === ev.keyCode ? result.key = String.fromCharCode(28) : 221 === ev.keyCode && (result.key = String.fromCharCode(29));
            }
            return result;
        };
    },
    T4hZ: function(module, exports, __webpack_require__) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        });
        var CharAtlasUtils_1 = __webpack_require__("jNJa"), DynamicCharAtlas_1 = __webpack_require__("Vq7h"), NoneCharAtlas_1 = __webpack_require__("fak5"), StaticCharAtlas_1 = __webpack_require__("iqU4"), charAtlasImplementations = {
            none: NoneCharAtlas_1.default,
            static: StaticCharAtlas_1.default,
            dynamic: DynamicCharAtlas_1.default
        }, charAtlasCache = [];
        exports.acquireCharAtlas = function(terminal, colors, scaledCharWidth, scaledCharHeight) {
            for (var newConfig = CharAtlasUtils_1.generateConfig(scaledCharWidth, scaledCharHeight, terminal, colors), i = 0; i < charAtlasCache.length; i++) {
                var ownedByIndex = (entry = charAtlasCache[i]).ownedBy.indexOf(terminal);
                if (ownedByIndex >= 0) {
                    if (CharAtlasUtils_1.configEquals(entry.config, newConfig)) return entry.atlas;
                    1 === entry.ownedBy.length ? (entry.atlas.dispose(), charAtlasCache.splice(i, 1)) : entry.ownedBy.splice(ownedByIndex, 1);
                    break;
                }
            }
            for (i = 0; i < charAtlasCache.length; i++) {
                var entry;
                if (CharAtlasUtils_1.configEquals((entry = charAtlasCache[i]).config, newConfig)) return entry.ownedBy.push(terminal), 
                entry.atlas;
            }
            var newEntry = {
                atlas: new charAtlasImplementations[terminal.options.experimentalCharAtlas](document, newConfig),
                config: newConfig,
                ownedBy: [ terminal ]
            };
            return charAtlasCache.push(newEntry), newEntry.atlas;
        }, exports.removeTerminalFromCache = function(terminal) {
            for (var i = 0; i < charAtlasCache.length; i++) {
                var index = charAtlasCache[i].ownedBy.indexOf(terminal);
                if (-1 !== index) {
                    1 === charAtlasCache[i].ownedBy.length ? (charAtlasCache[i].atlas.dispose(), charAtlasCache.splice(i, 1)) : charAtlasCache[i].ownedBy.splice(index, 1);
                    break;
                }
            }
        };
    },
    VAzd: function(module, exports, __webpack_require__) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports.DEFAULT_BELL_SOUND = "data:audio/wav;base64,UklGRigBAABXQVZFZm10IBAAAAABAAEARKwAAIhYAQACABAAZGF0YQQBAADpAFgCwAMlBZoG/wdmCcoKRAypDQ8PbRDBEQQTOxRtFYcWlBePGIUZXhoiG88bcBz7HHIdzh0WHlMeZx51HmkeUx4WHs8dah0AHXwc3hs9G4saxRnyGBIYGBcQFv8U4RPAEoYRQBACD70NWwwHC6gJOwjWBloF7gOBAhABkf8b/qv8R/ve+Xf4Ife79W/0JfPZ8Z/wde9N7ijtE+wU6xvqM+lb6H7nw+YX5mrlxuQz5Mzje+Ma49fioeKD4nXiYeJy4pHitOL04j/jn+MN5IPkFOWs5U3mDefM55/ogOl36m7rdOyE7abuyu8D8Unyj/Pg9D/2qfcb+Yn6/vuK/Qj/lAAlAg==";
        var SoundManager = function() {
            function SoundManager(_terminal) {
                this._terminal = _terminal;
            }
            return Object.defineProperty(SoundManager, "audioContext", {
                get: function() {
                    if (!SoundManager._audioContext) {
                        var audioContextCtor = window.AudioContext || window.webkitAudioContext;
                        if (!audioContextCtor) return console.warn("Web Audio API is not supported by this browser. Consider upgrading to the latest version"), 
                        null;
                        SoundManager._audioContext = new audioContextCtor;
                    }
                    return SoundManager._audioContext;
                },
                enumerable: !0,
                configurable: !0
            }), SoundManager.prototype.playBellSound = function() {
                var ctx = SoundManager.audioContext;
                if (ctx) {
                    var bellAudioSource = ctx.createBufferSource();
                    ctx.decodeAudioData(this._base64ToArrayBuffer(this._removeMimeType(this._terminal.options.bellSound)), (function(buffer) {
                        bellAudioSource.buffer = buffer, bellAudioSource.connect(ctx.destination), bellAudioSource.start(0);
                    }));
                }
            }, SoundManager.prototype._base64ToArrayBuffer = function(base64) {
                for (var binaryString = window.atob(base64), len = binaryString.length, bytes = new Uint8Array(len), i = 0; i < len; i++) bytes[i] = binaryString.charCodeAt(i);
                return bytes.buffer;
            }, SoundManager.prototype._removeMimeType = function(dataURI) {
                return dataURI.split(",")[1];
            }, SoundManager;
        }();
        exports.SoundManager = SoundManager;
    },
    Vq7h: function(module, exports, __webpack_require__) {
        "use strict";
        var extendStatics, __extends = this && this.__extends || (extendStatics = function(d, b) {
            return (extendStatics = Object.setPrototypeOf || {
                __proto__: []
            } instanceof Array && function(d, b) {
                d.__proto__ = b;
            } || function(d, b) {
                for (var p in b) b.hasOwnProperty(p) && (d[p] = b[p]);
            })(d, b);
        }, function(d, b) {
            function __() {
                this.constructor = d;
            }
            extendStatics(d, b), d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, 
            new __);
        });
        Object.defineProperty(exports, "__esModule", {
            value: !0
        });
        var Types_1 = __webpack_require__("2+Wn"), BaseCharAtlas_1 = __webpack_require__("fjly"), ColorManager_1 = __webpack_require__("lbDW"), CharAtlasGenerator_1 = __webpack_require__("mtuk"), LRUMap_1 = __webpack_require__("tpul"), Platform_1 = __webpack_require__("5tIu"), TEXTURE_WIDTH = 1024, TEXTURE_HEIGHT = 1024, TRANSPARENT_COLOR = {
            css: "rgba(0, 0, 0, 0)",
            rgba: 0
        };
        function getGlyphCacheKey(glyph) {
            return glyph.code << 21 | glyph.bg << 12 | glyph.fg << 3 | (glyph.bold ? 0 : 4) + (glyph.dim ? 0 : 2) + (glyph.italic ? 0 : 1);
        }
        exports.getGlyphCacheKey = getGlyphCacheKey;
        var DynamicCharAtlas = function(_super) {
            function DynamicCharAtlas(document, _config) {
                var _this = _super.call(this) || this;
                _this._config = _config, _this._drawToCacheCount = 0, _this._glyphsWaitingOnBitmap = [], 
                _this._bitmapCommitTimeout = null, _this._bitmap = null, _this._cacheCanvas = document.createElement("canvas"), 
                _this._cacheCanvas.width = TEXTURE_WIDTH, _this._cacheCanvas.height = TEXTURE_HEIGHT, 
                _this._cacheCtx = _this._cacheCanvas.getContext("2d", {
                    alpha: !0
                });
                var tmpCanvas = document.createElement("canvas");
                tmpCanvas.width = _this._config.scaledCharWidth, tmpCanvas.height = _this._config.scaledCharHeight, 
                _this._tmpCtx = tmpCanvas.getContext("2d", {
                    alpha: _this._config.allowTransparency
                }), _this._width = Math.floor(TEXTURE_WIDTH / _this._config.scaledCharWidth), _this._height = Math.floor(TEXTURE_HEIGHT / _this._config.scaledCharHeight);
                var capacity = _this._width * _this._height;
                return _this._cacheMap = new LRUMap_1.default(capacity), _this._cacheMap.prealloc(capacity), 
                _this;
            }
            return __extends(DynamicCharAtlas, _super), DynamicCharAtlas.prototype.dispose = function() {
                null !== this._bitmapCommitTimeout && (window.clearTimeout(this._bitmapCommitTimeout), 
                this._bitmapCommitTimeout = null);
            }, DynamicCharAtlas.prototype.beginFrame = function() {
                this._drawToCacheCount = 0;
            }, DynamicCharAtlas.prototype.draw = function(ctx, glyph, x, y) {
                if (32 === glyph.code) return !0;
                if (!this._canCache(glyph)) return !1;
                var glyphKey = getGlyphCacheKey(glyph), cacheValue = this._cacheMap.get(glyphKey);
                if (null != cacheValue) return this._drawFromCache(ctx, cacheValue, x, y), !0;
                if (this._drawToCacheCount < 100) {
                    var index;
                    index = this._cacheMap.size < this._cacheMap.capacity ? this._cacheMap.size : this._cacheMap.peek().index;
                    var cacheValue_1 = this._drawToCache(glyph, index);
                    return this._cacheMap.set(glyphKey, cacheValue_1), this._drawFromCache(ctx, cacheValue_1, x, y), 
                    !0;
                }
                return !1;
            }, DynamicCharAtlas.prototype._canCache = function(glyph) {
                return glyph.code < 256;
            }, DynamicCharAtlas.prototype._toCoordinateX = function(index) {
                return index % this._width * this._config.scaledCharWidth;
            }, DynamicCharAtlas.prototype._toCoordinateY = function(index) {
                return Math.floor(index / this._width) * this._config.scaledCharHeight;
            }, DynamicCharAtlas.prototype._drawFromCache = function(ctx, cacheValue, x, y) {
                if (!cacheValue.isEmpty) {
                    var cacheX = this._toCoordinateX(cacheValue.index), cacheY = this._toCoordinateY(cacheValue.index);
                    ctx.drawImage(cacheValue.inBitmap ? this._bitmap : this._cacheCanvas, cacheX, cacheY, this._config.scaledCharWidth, this._config.scaledCharHeight, x, y, this._config.scaledCharWidth, this._config.scaledCharHeight);
                }
            }, DynamicCharAtlas.prototype._getColorFromAnsiIndex = function(idx) {
                return idx < this._config.colors.ansi.length ? this._config.colors.ansi[idx] : ColorManager_1.DEFAULT_ANSI_COLORS[idx];
            }, DynamicCharAtlas.prototype._getBackgroundColor = function(glyph) {
                return this._config.allowTransparency ? TRANSPARENT_COLOR : glyph.bg === Types_1.INVERTED_DEFAULT_COLOR ? this._config.colors.foreground : glyph.bg < 256 ? this._getColorFromAnsiIndex(glyph.bg) : this._config.colors.background;
            }, DynamicCharAtlas.prototype._getForegroundColor = function(glyph) {
                return glyph.fg === Types_1.INVERTED_DEFAULT_COLOR ? this._config.colors.background : glyph.fg < 256 ? this._getColorFromAnsiIndex(glyph.fg) : this._config.colors.foreground;
            }, DynamicCharAtlas.prototype._drawToCache = function(glyph, index) {
                this._drawToCacheCount++, this._tmpCtx.save();
                var backgroundColor = this._getBackgroundColor(glyph);
                this._tmpCtx.globalCompositeOperation = "copy", this._tmpCtx.fillStyle = backgroundColor.css, 
                this._tmpCtx.fillRect(0, 0, this._config.scaledCharWidth, this._config.scaledCharHeight), 
                this._tmpCtx.globalCompositeOperation = "source-over", this._tmpCtx.font = (glyph.italic ? "italic" : "") + " " + (glyph.bold ? this._config.fontWeightBold : this._config.fontWeight) + " " + this._config.fontSize * this._config.devicePixelRatio + "px " + this._config.fontFamily, 
                this._tmpCtx.textBaseline = "middle", this._tmpCtx.fillStyle = this._getForegroundColor(glyph).css, 
                glyph.dim && (this._tmpCtx.globalAlpha = Types_1.DIM_OPACITY), this._tmpCtx.fillText(glyph.chars, 0, this._config.scaledCharHeight / 2), 
                this._tmpCtx.restore();
                var imageData = this._tmpCtx.getImageData(0, 0, this._config.scaledCharWidth, this._config.scaledCharHeight), isEmpty = !1;
                this._config.allowTransparency || (isEmpty = CharAtlasGenerator_1.clearColor(imageData, backgroundColor));
                var x = this._toCoordinateX(index), y = this._toCoordinateY(index);
                this._cacheCtx.putImageData(imageData, x, y);
                var cacheValue = {
                    index: index,
                    isEmpty: isEmpty,
                    inBitmap: !1
                };
                return this._addGlyphToBitmap(cacheValue), cacheValue;
            }, DynamicCharAtlas.prototype._addGlyphToBitmap = function(cacheValue) {
                var _this = this;
                "createImageBitmap" in window && !Platform_1.isFirefox && !Platform_1.isSafari && (this._glyphsWaitingOnBitmap.push(cacheValue), 
                null === this._bitmapCommitTimeout && (this._bitmapCommitTimeout = window.setTimeout((function() {
                    return _this._generateBitmap();
                }), 100)));
            }, DynamicCharAtlas.prototype._generateBitmap = function() {
                var _this = this, glyphsMovingToBitmap = this._glyphsWaitingOnBitmap;
                this._glyphsWaitingOnBitmap = [], window.createImageBitmap(this._cacheCanvas).then((function(bitmap) {
                    _this._bitmap = bitmap;
                    for (var i = 0; i < glyphsMovingToBitmap.length; i++) glyphsMovingToBitmap[i].inBitmap = !0;
                })), this._bitmapCommitTimeout = null;
            }, DynamicCharAtlas;
        }(BaseCharAtlas_1.default);
        exports.default = DynamicCharAtlas;
    },
    "Wb/s": function(module, exports, __webpack_require__) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        });
        var Terminal_1 = __webpack_require__("pkdz"), Strings = __webpack_require__("hqvf"), AddonManager_1 = __webpack_require__("xmbG"), Terminal = function() {
            function Terminal(options) {
                this._core = new Terminal_1.Terminal(options), this._addonManager = new AddonManager_1.AddonManager;
            }
            return Object.defineProperty(Terminal.prototype, "onCursorMove", {
                get: function() {
                    return this._core.onCursorMove;
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(Terminal.prototype, "onLineFeed", {
                get: function() {
                    return this._core.onLineFeed;
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(Terminal.prototype, "onSelectionChange", {
                get: function() {
                    return this._core.onSelectionChange;
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(Terminal.prototype, "onData", {
                get: function() {
                    return this._core.onData;
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(Terminal.prototype, "onTitleChange", {
                get: function() {
                    return this._core.onTitleChange;
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(Terminal.prototype, "onScroll", {
                get: function() {
                    return this._core.onScroll;
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(Terminal.prototype, "onKey", {
                get: function() {
                    return this._core.onKey;
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(Terminal.prototype, "onRender", {
                get: function() {
                    return this._core.onRender;
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(Terminal.prototype, "onResize", {
                get: function() {
                    return this._core.onResize;
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(Terminal.prototype, "element", {
                get: function() {
                    return this._core.element;
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(Terminal.prototype, "textarea", {
                get: function() {
                    return this._core.textarea;
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(Terminal.prototype, "rows", {
                get: function() {
                    return this._core.rows;
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(Terminal.prototype, "cols", {
                get: function() {
                    return this._core.cols;
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(Terminal.prototype, "buffer", {
                get: function() {
                    return new BufferApiView(this._core.buffer);
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(Terminal.prototype, "markers", {
                get: function() {
                    return this._core.markers;
                },
                enumerable: !0,
                configurable: !0
            }), Terminal.prototype.blur = function() {
                this._core.blur();
            }, Terminal.prototype.focus = function() {
                this._core.focus();
            }, Terminal.prototype.on = function(type, listener) {
                this._core.on(type, listener);
            }, Terminal.prototype.off = function(type, listener) {
                this._core.off(type, listener);
            }, Terminal.prototype.emit = function(type, data) {
                this._core.emit(type, data);
            }, Terminal.prototype.addDisposableListener = function(type, handler) {
                return this._core.addDisposableListener(type, handler);
            }, Terminal.prototype.resize = function(columns, rows) {
                this._core.resize(columns, rows);
            }, Terminal.prototype.writeln = function(data) {
                this._core.writeln(data);
            }, Terminal.prototype.open = function(parent) {
                this._core.open(parent);
            }, Terminal.prototype.attachCustomKeyEventHandler = function(customKeyEventHandler) {
                this._core.attachCustomKeyEventHandler(customKeyEventHandler);
            }, Terminal.prototype.addCsiHandler = function(flag, callback) {
                return this._core.addCsiHandler(flag, callback);
            }, Terminal.prototype.addOscHandler = function(ident, callback) {
                return this._core.addOscHandler(ident, callback);
            }, Terminal.prototype.registerLinkMatcher = function(regex, handler, options) {
                return this._core.registerLinkMatcher(regex, handler, options);
            }, Terminal.prototype.deregisterLinkMatcher = function(matcherId) {
                this._core.deregisterLinkMatcher(matcherId);
            }, Terminal.prototype.registerCharacterJoiner = function(handler) {
                return this._core.registerCharacterJoiner(handler);
            }, Terminal.prototype.deregisterCharacterJoiner = function(joinerId) {
                this._core.deregisterCharacterJoiner(joinerId);
            }, Terminal.prototype.addMarker = function(cursorYOffset) {
                return this._core.addMarker(cursorYOffset);
            }, Terminal.prototype.hasSelection = function() {
                return this._core.hasSelection();
            }, Terminal.prototype.select = function(column, row, length) {
                this._core.select(column, row, length);
            }, Terminal.prototype.getSelection = function() {
                return this._core.getSelection();
            }, Terminal.prototype.getSelectionPosition = function() {
                return this._core.getSelectionPosition();
            }, Terminal.prototype.clearSelection = function() {
                this._core.clearSelection();
            }, Terminal.prototype.selectAll = function() {
                this._core.selectAll();
            }, Terminal.prototype.selectLines = function(start, end) {
                this._core.selectLines(start, end);
            }, Terminal.prototype.dispose = function() {
                this._addonManager.dispose(), this._core.dispose();
            }, Terminal.prototype.destroy = function() {
                this._core.destroy();
            }, Terminal.prototype.scrollLines = function(amount) {
                this._core.scrollLines(amount);
            }, Terminal.prototype.scrollPages = function(pageCount) {
                this._core.scrollPages(pageCount);
            }, Terminal.prototype.scrollToTop = function() {
                this._core.scrollToTop();
            }, Terminal.prototype.scrollToBottom = function() {
                this._core.scrollToBottom();
            }, Terminal.prototype.scrollToLine = function(line) {
                this._core.scrollToLine(line);
            }, Terminal.prototype.clear = function() {
                this._core.clear();
            }, Terminal.prototype.write = function(data) {
                this._core.write(data);
            }, Terminal.prototype.writeUtf8 = function(data) {
                this._core.writeUtf8(data);
            }, Terminal.prototype.getOption = function(key) {
                return this._core.getOption(key);
            }, Terminal.prototype.setOption = function(key, value) {
                this._core.setOption(key, value);
            }, Terminal.prototype.refresh = function(start, end) {
                this._core.refresh(start, end);
            }, Terminal.prototype.reset = function() {
                this._core.reset();
            }, Terminal.applyAddon = function(addon) {
                addon.apply(Terminal);
            }, Terminal.prototype.loadAddon = function(addon) {
                return this._addonManager.loadAddon(this, addon);
            }, Object.defineProperty(Terminal, "strings", {
                get: function() {
                    return Strings;
                },
                enumerable: !0,
                configurable: !0
            }), Terminal;
        }();
        exports.Terminal = Terminal;
        var BufferApiView = function() {
            function BufferApiView(_buffer) {
                this._buffer = _buffer;
            }
            return Object.defineProperty(BufferApiView.prototype, "cursorY", {
                get: function() {
                    return this._buffer.y;
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(BufferApiView.prototype, "cursorX", {
                get: function() {
                    return this._buffer.x;
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(BufferApiView.prototype, "viewportY", {
                get: function() {
                    return this._buffer.ydisp;
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(BufferApiView.prototype, "baseY", {
                get: function() {
                    return this._buffer.ybase;
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(BufferApiView.prototype, "length", {
                get: function() {
                    return this._buffer.lines.length;
                },
                enumerable: !0,
                configurable: !0
            }), BufferApiView.prototype.getLine = function(y) {
                var line = this._buffer.lines.get(y);
                if (line) return new BufferLineApiView(line);
            }, BufferApiView;
        }(), BufferLineApiView = function() {
            function BufferLineApiView(_line) {
                this._line = _line;
            }
            return Object.defineProperty(BufferLineApiView.prototype, "isWrapped", {
                get: function() {
                    return this._line.isWrapped;
                },
                enumerable: !0,
                configurable: !0
            }), BufferLineApiView.prototype.getCell = function(x) {
                if (!(x < 0 || x >= this._line.length)) return new BufferCellApiView(this._line, x);
            }, BufferLineApiView.prototype.translateToString = function(trimRight, startColumn, endColumn) {
                return this._line.translateToString(trimRight, startColumn, endColumn);
            }, BufferLineApiView;
        }(), BufferCellApiView = function() {
            function BufferCellApiView(_line, _x) {
                this._line = _line, this._x = _x;
            }
            return Object.defineProperty(BufferCellApiView.prototype, "char", {
                get: function() {
                    return this._line.getString(this._x);
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(BufferCellApiView.prototype, "width", {
                get: function() {
                    return this._line.getWidth(this._x);
                },
                enumerable: !0,
                configurable: !0
            }), BufferCellApiView;
        }();
    },
    "XMT/": function(module, exports, __webpack_require__) {
        "use strict";
        var extendStatics, __extends = this && this.__extends || (extendStatics = function(d, b) {
            return (extendStatics = Object.setPrototypeOf || {
                __proto__: []
            } instanceof Array && function(d, b) {
                d.__proto__ = b;
            } || function(d, b) {
                for (var p in b) b.hasOwnProperty(p) && (d[p] = b[p]);
            })(d, b);
        }, function(d, b) {
            function __() {
                this.constructor = d;
            }
            extendStatics(d, b), d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, 
            new __);
        });
        Object.defineProperty(exports, "__esModule", {
            value: !0
        });
        var TextDecoder_1 = __webpack_require__("ev6p"), Types_1 = __webpack_require__("J+Hc");
        exports.DEFAULT_ATTR = 256 | Types_1.DEFAULT_COLOR << 9, exports.CHAR_DATA_ATTR_INDEX = 0, 
        exports.CHAR_DATA_CHAR_INDEX = 1, exports.CHAR_DATA_WIDTH_INDEX = 2, exports.CHAR_DATA_CODE_INDEX = 3, 
        exports.NULL_CELL_CHAR = "", exports.NULL_CELL_WIDTH = 1, exports.NULL_CELL_CODE = 0, 
        exports.WHITESPACE_CELL_CHAR = " ", exports.WHITESPACE_CELL_WIDTH = 1, exports.WHITESPACE_CELL_CODE = 32;
        var CELL_SIZE = 3, AttributeData = function() {
            function AttributeData() {
                this.fg = 0, this.bg = 0;
            }
            return AttributeData.toColorRGB = function(value) {
                return [ value >>> 16 & 255, value >>> 8 & 255, 255 & value ];
            }, AttributeData.fromColorRGB = function(value) {
                return (255 & value[0]) << 16 | (255 & value[1]) << 8 | 255 & value[2];
            }, AttributeData.prototype.clone = function() {
                var newObj = new AttributeData;
                return newObj.fg = this.fg, newObj.bg = this.bg, newObj;
            }, AttributeData.prototype.isInverse = function() {
                return 67108864 & this.fg;
            }, AttributeData.prototype.isBold = function() {
                return 134217728 & this.fg;
            }, AttributeData.prototype.isUnderline = function() {
                return 268435456 & this.fg;
            }, AttributeData.prototype.isBlink = function() {
                return 536870912 & this.fg;
            }, AttributeData.prototype.isInvisible = function() {
                return 1073741824 & this.fg;
            }, AttributeData.prototype.isItalic = function() {
                return 67108864 & this.bg;
            }, AttributeData.prototype.isDim = function() {
                return 134217728 & this.bg;
            }, AttributeData.prototype.getFgColorMode = function() {
                return 50331648 & this.fg;
            }, AttributeData.prototype.getBgColorMode = function() {
                return 50331648 & this.bg;
            }, AttributeData.prototype.isFgRGB = function() {
                return 50331648 == (50331648 & this.fg);
            }, AttributeData.prototype.isBgRGB = function() {
                return 50331648 == (50331648 & this.bg);
            }, AttributeData.prototype.isFgPalette = function() {
                return 16777216 == (50331648 & this.fg) || 33554432 == (50331648 & this.fg);
            }, AttributeData.prototype.isBgPalette = function() {
                return 16777216 == (50331648 & this.bg) || 33554432 == (50331648 & this.bg);
            }, AttributeData.prototype.isFgDefault = function() {
                return 0 == (50331648 & this.fg);
            }, AttributeData.prototype.isBgDefault = function() {
                return 0 == (50331648 & this.bg);
            }, AttributeData.prototype.getFgColor = function() {
                switch (50331648 & this.fg) {
                  case 16777216:
                  case 33554432:
                    return 255 & this.fg;

                  case 50331648:
                    return 16777215 & this.fg;

                  default:
                    return -1;
                }
            }, AttributeData.prototype.getBgColor = function() {
                switch (50331648 & this.bg) {
                  case 16777216:
                  case 33554432:
                    return 255 & this.bg;

                  case 50331648:
                    return 16777215 & this.bg;

                  default:
                    return -1;
                }
            }, AttributeData;
        }();
        exports.AttributeData = AttributeData, exports.DEFAULT_ATTR_DATA = Object.freeze(new AttributeData);
        var CellData = function(_super) {
            function CellData() {
                var _this = null !== _super && _super.apply(this, arguments) || this;
                return _this.content = 0, _this.fg = 0, _this.bg = 0, _this.combinedData = "", _this;
            }
            return __extends(CellData, _super), CellData.fromCharData = function(value) {
                var obj = new CellData;
                return obj.setFromCharData(value), obj;
            }, CellData.prototype.isCombined = function() {
                return 2097152 & this.content;
            }, CellData.prototype.getWidth = function() {
                return this.content >> 22;
            }, CellData.prototype.getChars = function() {
                return 2097152 & this.content ? this.combinedData : 2097151 & this.content ? TextDecoder_1.stringFromCodePoint(2097151 & this.content) : "";
            }, CellData.prototype.getCode = function() {
                return this.isCombined() ? this.combinedData.charCodeAt(this.combinedData.length - 1) : 2097151 & this.content;
            }, CellData.prototype.setFromCharData = function(value) {
                this.fg = value[exports.CHAR_DATA_ATTR_INDEX], this.bg = 0;
                var combined = !1;
                if (value[exports.CHAR_DATA_CHAR_INDEX].length > 2) combined = !0; else if (2 === value[exports.CHAR_DATA_CHAR_INDEX].length) {
                    var code = value[exports.CHAR_DATA_CHAR_INDEX].charCodeAt(0);
                    if (55296 <= code && code <= 56319) {
                        var second = value[exports.CHAR_DATA_CHAR_INDEX].charCodeAt(1);
                        56320 <= second && second <= 57343 ? this.content = 1024 * (code - 55296) + second - 56320 + 65536 | value[exports.CHAR_DATA_WIDTH_INDEX] << 22 : combined = !0;
                    } else combined = !0;
                } else this.content = value[exports.CHAR_DATA_CHAR_INDEX].charCodeAt(0) | value[exports.CHAR_DATA_WIDTH_INDEX] << 22;
                combined && (this.combinedData = value[exports.CHAR_DATA_CHAR_INDEX], this.content = 2097152 | value[exports.CHAR_DATA_WIDTH_INDEX] << 22);
            }, CellData.prototype.getAsCharData = function() {
                return [ this.fg, this.getChars(), this.getWidth(), this.getCode() ];
            }, CellData;
        }(AttributeData);
        exports.CellData = CellData;
        var BufferLine = function() {
            function BufferLine(cols, fillCellData, isWrapped) {
                void 0 === isWrapped && (isWrapped = !1), this.isWrapped = isWrapped, this._combined = {}, 
                this._data = new Uint32Array(cols * CELL_SIZE);
                for (var cell = fillCellData || CellData.fromCharData([ 0, exports.NULL_CELL_CHAR, exports.NULL_CELL_WIDTH, exports.NULL_CELL_CODE ]), i = 0; i < cols; ++i) this.setCell(i, cell);
                this.length = cols;
            }
            return BufferLine.prototype.get = function(index) {
                var content = this._data[index * CELL_SIZE + 0], cp = 2097151 & content;
                return [ this._data[index * CELL_SIZE + 1], 2097152 & content ? this._combined[index] : cp ? TextDecoder_1.stringFromCodePoint(cp) : "", content >> 22, 2097152 & content ? this._combined[index].charCodeAt(this._combined[index].length - 1) : cp ];
            }, BufferLine.prototype.set = function(index, value) {
                this._data[index * CELL_SIZE + 1] = value[exports.CHAR_DATA_ATTR_INDEX], value[exports.CHAR_DATA_CHAR_INDEX].length > 1 ? (this._combined[index] = value[1], 
                this._data[index * CELL_SIZE + 0] = 2097152 | index | value[exports.CHAR_DATA_WIDTH_INDEX] << 22) : this._data[index * CELL_SIZE + 0] = value[exports.CHAR_DATA_CHAR_INDEX].charCodeAt(0) | value[exports.CHAR_DATA_WIDTH_INDEX] << 22;
            }, BufferLine.prototype.getWidth = function(index) {
                return this._data[index * CELL_SIZE + 0] >> 22;
            }, BufferLine.prototype.hasWidth = function(index) {
                return 12582912 & this._data[index * CELL_SIZE + 0];
            }, BufferLine.prototype.getFg = function(index) {
                return this._data[index * CELL_SIZE + 1];
            }, BufferLine.prototype.getBg = function(index) {
                return this._data[index * CELL_SIZE + 2];
            }, BufferLine.prototype.hasContent = function(index) {
                return 4194303 & this._data[index * CELL_SIZE + 0];
            }, BufferLine.prototype.getCodePoint = function(index) {
                var content = this._data[index * CELL_SIZE + 0];
                return 2097152 & content ? this._combined[index].charCodeAt(this._combined[index].length - 1) : 2097151 & content;
            }, BufferLine.prototype.isCombined = function(index) {
                return 2097152 & this._data[index * CELL_SIZE + 0];
            }, BufferLine.prototype.getString = function(index) {
                var content = this._data[index * CELL_SIZE + 0];
                return 2097152 & content ? this._combined[index] : 2097151 & content ? TextDecoder_1.stringFromCodePoint(2097151 & content) : "";
            }, BufferLine.prototype.loadCell = function(index, cell) {
                var startIndex = index * CELL_SIZE;
                return cell.content = this._data[startIndex + 0], cell.fg = this._data[startIndex + 1], 
                cell.bg = this._data[startIndex + 2], 2097152 & cell.content && (cell.combinedData = this._combined[index]), 
                cell;
            }, BufferLine.prototype.setCell = function(index, cell) {
                2097152 & cell.content && (this._combined[index] = cell.combinedData), this._data[index * CELL_SIZE + 0] = cell.content, 
                this._data[index * CELL_SIZE + 1] = cell.fg, this._data[index * CELL_SIZE + 2] = cell.bg;
            }, BufferLine.prototype.setCellFromCodePoint = function(index, codePoint, width, fg, bg) {
                this._data[index * CELL_SIZE + 0] = codePoint | width << 22, this._data[index * CELL_SIZE + 1] = fg, 
                this._data[index * CELL_SIZE + 2] = bg;
            }, BufferLine.prototype.addCodepointToCell = function(index, codePoint) {
                var content = this._data[index * CELL_SIZE + 0];
                2097152 & content ? this._combined[index] += TextDecoder_1.stringFromCodePoint(codePoint) : (2097151 & content ? (this._combined[index] = TextDecoder_1.stringFromCodePoint(2097151 & content) + TextDecoder_1.stringFromCodePoint(codePoint), 
                content &= -2097152, content |= 2097152) : content = codePoint | 1 << 22, this._data[index * CELL_SIZE + 0] = content);
            }, BufferLine.prototype.insertCells = function(pos, n, fillCellData) {
                if (n < this.length - (pos %= this.length)) {
                    for (var cell = new CellData, i = this.length - pos - n - 1; i >= 0; --i) this.setCell(pos + n + i, this.loadCell(pos + i, cell));
                    for (i = 0; i < n; ++i) this.setCell(pos + i, fillCellData);
                } else for (i = pos; i < this.length; ++i) this.setCell(i, fillCellData);
            }, BufferLine.prototype.deleteCells = function(pos, n, fillCellData) {
                if (n < this.length - (pos %= this.length)) {
                    for (var cell = new CellData, i = 0; i < this.length - pos - n; ++i) this.setCell(pos + i, this.loadCell(pos + n + i, cell));
                    for (i = this.length - n; i < this.length; ++i) this.setCell(i, fillCellData);
                } else for (i = pos; i < this.length; ++i) this.setCell(i, fillCellData);
            }, BufferLine.prototype.replaceCells = function(start, end, fillCellData) {
                for (;start < end && start < this.length; ) this.setCell(start++, fillCellData);
            }, BufferLine.prototype.resize = function(cols, fillCellData) {
                if (cols !== this.length) {
                    if (cols > this.length) {
                        var data = new Uint32Array(cols * CELL_SIZE);
                        this.length && data.set(cols * CELL_SIZE < this._data.length ? this._data.subarray(0, cols * CELL_SIZE) : this._data), 
                        this._data = data;
                        for (var i = this.length; i < cols; ++i) this.setCell(i, fillCellData);
                    } else if (cols) {
                        (data = new Uint32Array(cols * CELL_SIZE)).set(this._data.subarray(0, cols * CELL_SIZE)), 
                        this._data = data;
                        var keys = Object.keys(this._combined);
                        for (i = 0; i < keys.length; i++) {
                            var key = parseInt(keys[i], 10);
                            key >= cols && delete this._combined[key];
                        }
                    } else this._data = new Uint32Array(0), this._combined = {};
                    this.length = cols;
                }
            }, BufferLine.prototype.fill = function(fillCellData) {
                this._combined = {};
                for (var i = 0; i < this.length; ++i) this.setCell(i, fillCellData);
            }, BufferLine.prototype.copyFrom = function(line) {
                for (var el in this.length !== line.length ? this._data = new Uint32Array(line._data) : this._data.set(line._data), 
                this.length = line.length, this._combined = {}, line._combined) this._combined[el] = line._combined[el];
                this.isWrapped = line.isWrapped;
            }, BufferLine.prototype.clone = function() {
                var newLine = new BufferLine(0);
                for (var el in newLine._data = new Uint32Array(this._data), newLine.length = this.length, 
                this._combined) newLine._combined[el] = this._combined[el];
                return newLine.isWrapped = this.isWrapped, newLine;
            }, BufferLine.prototype.getTrimmedLength = function() {
                for (var i = this.length - 1; i >= 0; --i) if (4194303 & this._data[i * CELL_SIZE + 0]) return i + (this._data[i * CELL_SIZE + 0] >> 22);
                return 0;
            }, BufferLine.prototype.copyCellsFrom = function(src, srcCol, destCol, length, applyInReverse) {
                var srcData = src._data;
                if (applyInReverse) for (var cell = length - 1; cell >= 0; cell--) for (var i = 0; i < CELL_SIZE; i++) this._data[(destCol + cell) * CELL_SIZE + i] = srcData[(srcCol + cell) * CELL_SIZE + i]; else for (cell = 0; cell < length; cell++) for (i = 0; i < CELL_SIZE; i++) this._data[(destCol + cell) * CELL_SIZE + i] = srcData[(srcCol + cell) * CELL_SIZE + i];
                var srcCombinedKeys = Object.keys(src._combined);
                for (i = 0; i < srcCombinedKeys.length; i++) {
                    var key = parseInt(srcCombinedKeys[i], 10);
                    key >= srcCol && (this._combined[key - srcCol + destCol] = src._combined[key]);
                }
            }, BufferLine.prototype.translateToString = function(trimRight, startCol, endCol) {
                void 0 === trimRight && (trimRight = !1), void 0 === startCol && (startCol = 0), 
                void 0 === endCol && (endCol = this.length), trimRight && (endCol = Math.min(endCol, this.getTrimmedLength()));
                for (var result = ""; startCol < endCol; ) {
                    var content = this._data[startCol * CELL_SIZE + 0], cp = 2097151 & content;
                    result += 2097152 & content ? this._combined[startCol] : cp ? TextDecoder_1.stringFromCodePoint(cp) : exports.WHITESPACE_CELL_CHAR, 
                    startCol += content >> 22 || 1;
                }
                return result;
            }, BufferLine;
        }();
        exports.BufferLine = BufferLine;
    },
    YuTi: function(module, exports) {
        module.exports = function(module) {
            return module.webpackPolyfill || (module.deprecate = function() {}, module.paths = [], 
            module.children || (module.children = []), Object.defineProperty(module, "loaded", {
                enumerable: !0,
                get: function() {
                    return module.l;
                }
            }), Object.defineProperty(module, "id", {
                enumerable: !0,
                get: function() {
                    return module.i;
                }
            }), module.webpackPolyfill = 1), module;
        };
    },
    "aCt+": function(module, exports, __webpack_require__) {
        "use strict";
        function getWrappedLineTrimmedLength(lines, i, cols) {
            if (i === lines.length - 1) return lines[i].getTrimmedLength();
            var endsInNull = !lines[i].hasContent(cols - 1) && 1 === lines[i].getWidth(cols - 1), followingLineStartsWithWide = 2 === lines[i + 1].getWidth(0);
            return endsInNull && followingLineStartsWithWide ? cols - 1 : cols;
        }
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports.reflowLargerGetLinesToRemove = function(lines, oldCols, newCols, bufferAbsoluteY, nullCell) {
            for (var toRemove = [], y = 0; y < lines.length - 1; y++) {
                var i = y, nextLine = lines.get(++i);
                if (nextLine.isWrapped) {
                    for (var wrappedLines = [ lines.get(y) ]; i < lines.length && nextLine.isWrapped; ) wrappedLines.push(nextLine), 
                    nextLine = lines.get(++i);
                    if (bufferAbsoluteY >= y && bufferAbsoluteY < i) y += wrappedLines.length - 1; else {
                        for (var destLineIndex = 0, destCol = getWrappedLineTrimmedLength(wrappedLines, destLineIndex, oldCols), srcLineIndex = 1, srcCol = 0; srcLineIndex < wrappedLines.length; ) {
                            var srcTrimmedTineLength = getWrappedLineTrimmedLength(wrappedLines, srcLineIndex, oldCols), cellsToCopy = Math.min(srcTrimmedTineLength - srcCol, newCols - destCol);
                            wrappedLines[destLineIndex].copyCellsFrom(wrappedLines[srcLineIndex], srcCol, destCol, cellsToCopy, !1), 
                            (destCol += cellsToCopy) === newCols && (destLineIndex++, destCol = 0), (srcCol += cellsToCopy) === srcTrimmedTineLength && (srcLineIndex++, 
                            srcCol = 0), 0 === destCol && 0 !== destLineIndex && 2 === wrappedLines[destLineIndex - 1].getWidth(newCols - 1) && (wrappedLines[destLineIndex].copyCellsFrom(wrappedLines[destLineIndex - 1], newCols - 1, destCol++, 1, !1), 
                            wrappedLines[destLineIndex - 1].setCell(newCols - 1, nullCell));
                        }
                        wrappedLines[destLineIndex].replaceCells(destCol, newCols, nullCell);
                        for (var countToRemove = 0, i_1 = wrappedLines.length - 1; i_1 > 0 && (i_1 > destLineIndex || 0 === wrappedLines[i_1].getTrimmedLength()); i_1--) countToRemove++;
                        countToRemove > 0 && (toRemove.push(y + wrappedLines.length - countToRemove), toRemove.push(countToRemove)), 
                        y += wrappedLines.length - 1;
                    }
                }
            }
            return toRemove;
        }, exports.reflowLargerCreateNewLayout = function(lines, toRemove) {
            for (var layout = [], nextToRemoveIndex = 0, nextToRemoveStart = toRemove[nextToRemoveIndex], countRemovedSoFar = 0, i = 0; i < lines.length; i++) if (nextToRemoveStart === i) {
                var countToRemove = toRemove[++nextToRemoveIndex];
                lines.onDeleteEmitter.fire({
                    index: i - countRemovedSoFar,
                    amount: countToRemove
                }), i += countToRemove - 1, countRemovedSoFar += countToRemove, nextToRemoveStart = toRemove[++nextToRemoveIndex];
            } else layout.push(i);
            return {
                layout: layout,
                countRemoved: countRemovedSoFar
            };
        }, exports.reflowLargerApplyNewLayout = function(lines, newLayout) {
            for (var newLayoutLines = [], i = 0; i < newLayout.length; i++) newLayoutLines.push(lines.get(newLayout[i]));
            for (i = 0; i < newLayoutLines.length; i++) lines.set(i, newLayoutLines[i]);
            lines.length = newLayout.length;
        }, exports.reflowSmallerGetNewLineLengths = function(wrappedLines, oldCols, newCols) {
            for (var newLineLengths = [], cellsNeeded = wrappedLines.map((function(l, i) {
                return getWrappedLineTrimmedLength(wrappedLines, i, oldCols);
            })).reduce((function(p, c) {
                return p + c;
            })), srcCol = 0, srcLine = 0, cellsAvailable = 0; cellsAvailable < cellsNeeded; ) {
                if (cellsNeeded - cellsAvailable < newCols) {
                    newLineLengths.push(cellsNeeded - cellsAvailable);
                    break;
                }
                srcCol += newCols;
                var oldTrimmedLength = getWrappedLineTrimmedLength(wrappedLines, srcLine, oldCols);
                srcCol > oldTrimmedLength && (srcCol -= oldTrimmedLength, srcLine++);
                var endsWithWide = 2 === wrappedLines[srcLine].getWidth(srcCol - 1);
                endsWithWide && srcCol--;
                var lineLength = endsWithWide ? newCols - 1 : newCols;
                newLineLengths.push(lineLength), cellsAvailable += lineLength;
            }
            return newLineLengths;
        }, exports.getWrappedLineTrimmedLength = getWrappedLineTrimmedLength;
    },
    cxSQ: function(module, exports, __webpack_require__) {
        "use strict";
        function fillFallback(array, value, start, end) {
            if (void 0 === start && (start = 0), void 0 === end && (end = array.length), start >= array.length) return array;
            end = end >= array.length ? array.length : (array.length + end) % array.length;
            for (var i = start = (array.length + start) % array.length; i < end; ++i) array[i] = value;
            return array;
        }
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports.fill = function(array, value, start, end) {
            return array.fill ? array.fill(value, start, end) : fillFallback(array, value, start, end);
        }, exports.fillFallback = fillFallback, exports.concat = function(a, b) {
            var result = new a.constructor(a.length + b.length);
            return result.set(a), result.set(b, a.length), result;
        };
    },
    "dog+": function(module, exports, __webpack_require__) {
        "use strict";
        var C1, C0;
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }), (C0 = exports.C0 || (exports.C0 = {})).NUL = "\0", C0.SOH = "", C0.STX = "", 
        C0.ETX = "", C0.EOT = "", C0.ENQ = "", C0.ACK = "", C0.BEL = "", C0.BS = "\b", 
        C0.HT = "\t", C0.LF = "\n", C0.VT = "\v", C0.FF = "\f", C0.CR = "\r", C0.SO = "", 
        C0.SI = "", C0.DLE = "", C0.DC1 = "", C0.DC2 = "", C0.DC3 = "", C0.DC4 = "", 
        C0.NAK = "", C0.SYN = "", C0.ETB = "", C0.CAN = "", C0.EM = "", C0.SUB = "", 
        C0.ESC = "", C0.FS = "", C0.GS = "", C0.RS = "", C0.US = "", C0.SP = " ", C0.DEL = "", 
        (C1 = exports.C1 || (exports.C1 = {})).PAD = "", C1.HOP = "", C1.BPH = "", C1.NBH = "", 
        C1.IND = "", C1.NEL = "", C1.SSA = "", C1.ESA = "", C1.HTS = "", C1.HTJ = "", 
        C1.VTS = "", C1.PLD = "", C1.PLU = "", C1.RI = "", C1.SS2 = "", C1.SS3 = "", 
        C1.DCS = "", C1.PU1 = "", C1.PU2 = "", C1.STS = "", C1.CCH = "", C1.MW = "", 
        C1.SPA = "", C1.EPA = "", C1.SOS = "", C1.SGCI = "", C1.SCI = "", C1.CSI = "", 
        C1.ST = "", C1.OSC = "", C1.PM = "", C1.APC = "";
    },
    ev6p: function(module, exports, __webpack_require__) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports.stringFromCodePoint = function(codePoint) {
            return codePoint > 65535 ? (codePoint -= 65536, String.fromCharCode(55296 + (codePoint >> 10)) + String.fromCharCode(codePoint % 1024 + 56320)) : String.fromCharCode(codePoint);
        }, exports.utf32ToString = function(data, start, end) {
            void 0 === start && (start = 0), void 0 === end && (end = data.length);
            for (var result = "", i = start; i < end; ++i) {
                var codepoint = data[i];
                codepoint > 65535 ? (codepoint -= 65536, result += String.fromCharCode(55296 + (codepoint >> 10)) + String.fromCharCode(codepoint % 1024 + 56320)) : result += String.fromCharCode(codepoint);
            }
            return result;
        };
        var StringToUtf32 = function() {
            function StringToUtf32() {
                this._interim = 0;
            }
            return StringToUtf32.prototype.clear = function() {
                this._interim = 0;
            }, StringToUtf32.prototype.decode = function(input, target) {
                var length = input.length;
                if (!length) return 0;
                var size = 0, startPos = 0;
                this._interim && (56320 <= (second = input.charCodeAt(startPos++)) && second <= 57343 ? target[size++] = 1024 * (this._interim - 55296) + second - 56320 + 65536 : (target[size++] = this._interim, 
                target[size++] = second), this._interim = 0);
                for (var i = startPos; i < length; ++i) {
                    var code = input.charCodeAt(i);
                    if (55296 <= code && code <= 56319) {
                        if (++i >= length) return this._interim = code, size;
                        var second;
                        56320 <= (second = input.charCodeAt(i)) && second <= 57343 ? target[size++] = 1024 * (code - 55296) + second - 56320 + 65536 : (target[size++] = code, 
                        target[size++] = second);
                    } else target[size++] = code;
                }
                return size;
            }, StringToUtf32;
        }();
        exports.StringToUtf32 = StringToUtf32;
        var Utf8ToUtf32 = function() {
            function Utf8ToUtf32() {
                this.interim = new Uint8Array(3);
            }
            return Utf8ToUtf32.prototype.clear = function() {
                this.interim.fill(0);
            }, Utf8ToUtf32.prototype.decode = function(input, target) {
                var length = input.length;
                if (!length) return 0;
                var byte1, byte2, byte3, byte4, size = 0, codepoint = 0, startPos = 0;
                if (this.interim[0]) {
                    var discardInterim = !1, cp = this.interim[0];
                    cp &= 192 == (224 & cp) ? 31 : 224 == (240 & cp) ? 15 : 7;
                    for (var pos = 0, tmp = void 0; (tmp = 63 & this.interim[++pos]) && pos < 4; ) cp <<= 6, 
                    cp |= tmp;
                    for (var type = 192 == (224 & this.interim[0]) ? 2 : 224 == (240 & this.interim[0]) ? 3 : 4, missing = type - pos; startPos < missing; ) {
                        if (startPos >= length) return 0;
                        if (128 != (192 & (tmp = input[startPos++]))) {
                            startPos--, discardInterim = !0;
                            break;
                        }
                        this.interim[pos++] = tmp, cp <<= 6, cp |= 63 & tmp;
                    }
                    discardInterim || (2 === type ? cp < 128 ? startPos-- : target[size++] = cp : 3 === type ? cp < 2048 || cp >= 55296 && cp <= 57343 || (target[size++] = cp) : codepoint < 65536 || codepoint > 1114111 || (target[size++] = cp)), 
                    this.interim.fill(0);
                }
                for (var fourStop = length - 4, i = startPos; i < length; ) {
                    for (;!(!(i < fourStop) || 128 & (byte1 = input[i]) || 128 & (byte2 = input[i + 1]) || 128 & (byte3 = input[i + 2]) || 128 & (byte4 = input[i + 3])); ) target[size++] = byte1, 
                    target[size++] = byte2, target[size++] = byte3, target[size++] = byte4, i += 4;
                    if ((byte1 = input[i++]) < 128) target[size++] = byte1; else if (192 == (224 & byte1)) {
                        if (i >= length) return this.interim[0] = byte1, size;
                        if (128 != (192 & (byte2 = input[i++]))) {
                            i--;
                            continue;
                        }
                        if ((codepoint = (31 & byte1) << 6 | 63 & byte2) < 128) {
                            i--;
                            continue;
                        }
                        target[size++] = codepoint;
                    } else if (224 == (240 & byte1)) {
                        if (i >= length) return this.interim[0] = byte1, size;
                        if (128 != (192 & (byte2 = input[i++]))) {
                            i--;
                            continue;
                        }
                        if (i >= length) return this.interim[0] = byte1, this.interim[1] = byte2, size;
                        if (128 != (192 & (byte3 = input[i++]))) {
                            i--;
                            continue;
                        }
                        if ((codepoint = (15 & byte1) << 12 | (63 & byte2) << 6 | 63 & byte3) < 2048 || codepoint >= 55296 && codepoint <= 57343) continue;
                        target[size++] = codepoint;
                    } else if (240 == (248 & byte1)) {
                        if (i >= length) return this.interim[0] = byte1, size;
                        if (128 != (192 & (byte2 = input[i++]))) {
                            i--;
                            continue;
                        }
                        if (i >= length) return this.interim[0] = byte1, this.interim[1] = byte2, size;
                        if (128 != (192 & (byte3 = input[i++]))) {
                            i--;
                            continue;
                        }
                        if (i >= length) return this.interim[0] = byte1, this.interim[1] = byte2, this.interim[2] = byte3, 
                        size;
                        if (128 != (192 & (byte4 = input[i++]))) {
                            i--;
                            continue;
                        }
                        if ((codepoint = (7 & byte1) << 18 | (63 & byte2) << 12 | (63 & byte3) << 6 | 63 & byte4) < 65536 || codepoint > 1114111) continue;
                        target[size++] = codepoint;
                    }
                }
                return size;
            }, Utf8ToUtf32;
        }();
        exports.Utf8ToUtf32 = Utf8ToUtf32;
    },
    fak5: function(module, exports, __webpack_require__) {
        "use strict";
        var extendStatics, __extends = this && this.__extends || (extendStatics = function(d, b) {
            return (extendStatics = Object.setPrototypeOf || {
                __proto__: []
            } instanceof Array && function(d, b) {
                d.__proto__ = b;
            } || function(d, b) {
                for (var p in b) b.hasOwnProperty(p) && (d[p] = b[p]);
            })(d, b);
        }, function(d, b) {
            function __() {
                this.constructor = d;
            }
            extendStatics(d, b), d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, 
            new __);
        });
        Object.defineProperty(exports, "__esModule", {
            value: !0
        });
        var NoneCharAtlas = function(_super) {
            function NoneCharAtlas(document, config) {
                return _super.call(this) || this;
            }
            return __extends(NoneCharAtlas, _super), NoneCharAtlas.prototype.draw = function(ctx, glyph, x, y) {
                return !1;
            }, NoneCharAtlas;
        }(__webpack_require__("fjly").default);
        exports.default = NoneCharAtlas;
    },
    fjly: function(module, exports, __webpack_require__) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        });
        var BaseCharAtlas = function() {
            function BaseCharAtlas() {
                this._didWarmUp = !1;
            }
            return BaseCharAtlas.prototype.dispose = function() {}, BaseCharAtlas.prototype.warmUp = function() {
                this._didWarmUp || (this._doWarmUp(), this._didWarmUp = !0);
            }, BaseCharAtlas.prototype._doWarmUp = function() {}, BaseCharAtlas.prototype.beginFrame = function() {}, 
            BaseCharAtlas;
        }();
        exports.default = BaseCharAtlas;
    },
    hqvf: function(module, exports, __webpack_require__) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports.blankLine = "Blank line", exports.promptLabel = "Terminal input", exports.tooMuchOutput = "Too much output to announce, navigate to rows manually to read";
    },
    "i/Fu": function(module, exports, __webpack_require__) {
        "use strict";
        var extendStatics, __extends = this && this.__extends || (extendStatics = function(d, b) {
            return (extendStatics = Object.setPrototypeOf || {
                __proto__: []
            } instanceof Array && function(d, b) {
                d.__proto__ = b;
            } || function(d, b) {
                for (var p in b) b.hasOwnProperty(p) && (d[p] = b[p]);
            })(d, b);
        }, function(d, b) {
            function __() {
                this.constructor = d;
            }
            extendStatics(d, b), d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, 
            new __);
        });
        Object.defineProperty(exports, "__esModule", {
            value: !0
        });
        var GridCache_1 = __webpack_require__("7vZz"), BaseRenderLayer_1 = __webpack_require__("HHOg"), BufferLine_1 = __webpack_require__("XMT/"), CharacterJoinerRegistry_1 = __webpack_require__("A2P1"), TextRenderLayer = function(_super) {
            function TextRenderLayer(container, zIndex, colors, characterJoinerRegistry, alpha) {
                var _this = _super.call(this, container, "text", zIndex, alpha, colors) || this;
                return _this._characterOverlapCache = {}, _this._workCell = new BufferLine_1.CellData, 
                _this._state = new GridCache_1.GridCache, _this._characterJoinerRegistry = characterJoinerRegistry, 
                _this;
            }
            return __extends(TextRenderLayer, _super), TextRenderLayer.prototype.resize = function(terminal, dim) {
                _super.prototype.resize.call(this, terminal, dim);
                var terminalFont = this._getFont(terminal, !1, !1);
                this._characterWidth === dim.scaledCharWidth && this._characterFont === terminalFont || (this._characterWidth = dim.scaledCharWidth, 
                this._characterFont = terminalFont, this._characterOverlapCache = {}), this._state.clear(), 
                this._state.resize(terminal.cols, terminal.rows);
            }, TextRenderLayer.prototype.reset = function(terminal) {
                this._state.clear(), this.clearAll();
            }, TextRenderLayer.prototype._forEachCell = function(terminal, firstRow, lastRow, joinerRegistry, callback) {
                for (var y = firstRow; y <= lastRow; y++) for (var row = y + terminal.buffer.ydisp, line = terminal.buffer.lines.get(row), joinedRanges = joinerRegistry ? joinerRegistry.getJoinedCharacters(row) : [], x = 0; x < terminal.cols; x++) {
                    line.loadCell(x, this._workCell);
                    var cell = this._workCell, isJoined = !1, lastCharX = x;
                    if (0 !== cell.getWidth()) {
                        if (joinedRanges.length > 0 && x === joinedRanges[0][0]) {
                            isJoined = !0;
                            var range = joinedRanges.shift();
                            cell = new CharacterJoinerRegistry_1.JoinedCellData(this._workCell, line.translateToString(!0, range[0], range[1]), range[1] - range[0]), 
                            lastCharX = range[1] - 1;
                        }
                        !isJoined && this._isOverlapping(cell) && lastCharX < line.length - 1 && line.getCodePoint(lastCharX + 1) === BufferLine_1.NULL_CELL_CODE && (cell.content &= -12582913, 
                        cell.content |= 2 << 22), callback(cell, x, y), x = lastCharX;
                    }
                }
            }, TextRenderLayer.prototype._drawBackground = function(terminal, firstRow, lastRow) {
                var _this = this, ctx = this._ctx, cols = terminal.cols, startX = 0, startY = 0, prevFillStyle = null;
                ctx.save(), this._forEachCell(terminal, firstRow, lastRow, null, (function(cell, x, y) {
                    var nextFillStyle = null;
                    cell.isInverse() ? nextFillStyle = cell.isFgDefault() ? _this._colors.foreground.css : cell.isFgRGB() ? "rgb(" + BufferLine_1.AttributeData.toColorRGB(cell.getFgColor()).join(",") + ")" : _this._colors.ansi[cell.getFgColor()].css : cell.isBgRGB() ? nextFillStyle = "rgb(" + BufferLine_1.AttributeData.toColorRGB(cell.getBgColor()).join(",") + ")" : cell.isBgPalette() && (nextFillStyle = _this._colors.ansi[cell.getBgColor()].css), 
                    null === prevFillStyle && (startX = x, startY = y), y !== startY ? (ctx.fillStyle = prevFillStyle, 
                    _this.fillCells(startX, startY, cols - startX, 1), startX = x, startY = y) : prevFillStyle !== nextFillStyle && (ctx.fillStyle = prevFillStyle, 
                    _this.fillCells(startX, startY, x - startX, 1), startX = x, startY = y), prevFillStyle = nextFillStyle;
                })), null !== prevFillStyle && (ctx.fillStyle = prevFillStyle, this.fillCells(startX, startY, cols - startX, 1)), 
                ctx.restore();
            }, TextRenderLayer.prototype._drawForeground = function(terminal, firstRow, lastRow) {
                var _this = this;
                this._forEachCell(terminal, firstRow, lastRow, this._characterJoinerRegistry, (function(cell, x, y) {
                    if (!cell.isInvisible() && (_this.drawChars(terminal, cell, x, y), cell.isUnderline())) {
                        if (_this._ctx.save(), cell.isInverse()) _this._ctx.fillStyle = cell.isBgDefault() ? _this._colors.background.css : cell.isBgRGB() ? "rgb(" + BufferLine_1.AttributeData.toColorRGB(cell.getBgColor()).join(",") + ")" : _this._colors.ansi[cell.getBgColor()].css; else if (cell.isFgDefault()) _this._ctx.fillStyle = _this._colors.foreground.css; else if (cell.isFgRGB()) _this._ctx.fillStyle = "rgb(" + BufferLine_1.AttributeData.toColorRGB(cell.getFgColor()).join(",") + ")"; else {
                            var fg = cell.getFgColor();
                            terminal.options.drawBoldTextInBrightColors && cell.isBold() && fg < 8 && (fg += 8), 
                            _this._ctx.fillStyle = _this._colors.ansi[fg].css;
                        }
                        _this.fillBottomLineAtCells(x, y, cell.getWidth()), _this._ctx.restore();
                    }
                }));
            }, TextRenderLayer.prototype.onGridChanged = function(terminal, firstRow, lastRow) {
                0 !== this._state.cache.length && (this._charAtlas && this._charAtlas.beginFrame(), 
                this.clearCells(0, firstRow, terminal.cols, lastRow - firstRow + 1), this._drawBackground(terminal, firstRow, lastRow), 
                this._drawForeground(terminal, firstRow, lastRow));
            }, TextRenderLayer.prototype.onOptionsChanged = function(terminal) {
                this.setTransparency(terminal, terminal.options.allowTransparency);
            }, TextRenderLayer.prototype._isOverlapping = function(cell) {
                if (1 !== cell.getWidth()) return !1;
                if (cell.getCode() < 256) return !1;
                var chars = cell.getChars();
                if (this._characterOverlapCache.hasOwnProperty(chars)) return this._characterOverlapCache[chars];
                this._ctx.save(), this._ctx.font = this._characterFont;
                var overlaps = Math.floor(this._ctx.measureText(chars).width) > this._characterWidth;
                return this._ctx.restore(), this._characterOverlapCache[chars] = overlaps, overlaps;
            }, TextRenderLayer;
        }(BaseRenderLayer_1.BaseRenderLayer);
        exports.TextRenderLayer = TextRenderLayer;
    },
    "iE+m": function(module, exports, __webpack_require__) {
        "use strict";
        var extendStatics, __extends = this && this.__extends || (extendStatics = function(d, b) {
            return (extendStatics = Object.setPrototypeOf || {
                __proto__: []
            } instanceof Array && function(d, b) {
                d.__proto__ = b;
            } || function(d, b) {
                for (var p in b) b.hasOwnProperty(p) && (d[p] = b[p]);
            })(d, b);
        }, function(d, b) {
            function __() {
                this.constructor = d;
            }
            extendStatics(d, b), d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, 
            new __);
        });
        Object.defineProperty(exports, "__esModule", {
            value: !0
        });
        var EventEmitter = function(_super) {
            function EventEmitter() {
                var _this = _super.call(this) || this;
                return _this._events = _this._events || {}, _this;
            }
            return __extends(EventEmitter, _super), EventEmitter.prototype.on = function(type, listener) {
                this._events[type] = this._events[type] || [], this._events[type].push(listener);
            }, EventEmitter.prototype.addDisposableListener = function(type, handler) {
                var _this = this;
                this.on(type, handler);
                var disposed = !1;
                return {
                    dispose: function() {
                        disposed || (_this.off(type, handler), disposed = !0);
                    }
                };
            }, EventEmitter.prototype.off = function(type, listener) {
                if (this._events[type]) for (var obj = this._events[type], i = obj.length; i--; ) if (obj[i] === listener) return void obj.splice(i, 1);
            }, EventEmitter.prototype.removeAllListeners = function(type) {
                this._events[type] && delete this._events[type];
            }, EventEmitter.prototype.emit = function(type) {
                for (var args = [], _i = 1; _i < arguments.length; _i++) args[_i - 1] = arguments[_i];
                if (this._events[type]) for (var obj = this._events[type], i = 0; i < obj.length; i++) obj[i].apply(this, args);
            }, EventEmitter.prototype.emitMayRemoveListeners = function(type) {
                for (var args = [], _i = 1; _i < arguments.length; _i++) args[_i - 1] = arguments[_i];
                if (this._events[type]) for (var obj = this._events[type], length = obj.length, i = 0; i < obj.length; i++) obj[i].apply(this, args), 
                i -= length - obj.length, length = obj.length;
            }, EventEmitter.prototype.listeners = function(type) {
                return this._events[type] || [];
            }, EventEmitter.prototype.dispose = function() {
                _super.prototype.dispose.call(this), this._events = {};
            }, EventEmitter;
        }(__webpack_require__("4wKv").Disposable);
        exports.EventEmitter = EventEmitter;
    },
    iNX9: function(module, exports, __webpack_require__) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        });
        var MouseHelper_1 = __webpack_require__("x658"), Browser = __webpack_require__("5tIu"), SelectionModel_1 = __webpack_require__("3Y3P"), AltClickHandler_1 = __webpack_require__("rHEf"), BufferLine_1 = __webpack_require__("XMT/"), EventEmitter2_1 = __webpack_require__("Fn1x"), NON_BREAKING_SPACE_CHAR = String.fromCharCode(160), ALL_NON_BREAKING_SPACE_REGEX = new RegExp(NON_BREAKING_SPACE_CHAR, "g"), SelectionManager = function() {
            function SelectionManager(_terminal, _charMeasure) {
                this._terminal = _terminal, this._charMeasure = _charMeasure, this._enabled = !0, 
                this._workCell = new BufferLine_1.CellData, this._onLinuxMouseSelection = new EventEmitter2_1.EventEmitter2, 
                this._onRedrawRequest = new EventEmitter2_1.EventEmitter2, this._onSelectionChange = new EventEmitter2_1.EventEmitter2, 
                this._initListeners(), this.enable(), this._model = new SelectionModel_1.SelectionModel(_terminal), 
                this._activeSelectionMode = 0;
            }
            return Object.defineProperty(SelectionManager.prototype, "onLinuxMouseSelection", {
                get: function() {
                    return this._onLinuxMouseSelection.event;
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(SelectionManager.prototype, "onRedrawRequest", {
                get: function() {
                    return this._onRedrawRequest.event;
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(SelectionManager.prototype, "onSelectionChange", {
                get: function() {
                    return this._onSelectionChange.event;
                },
                enumerable: !0,
                configurable: !0
            }), SelectionManager.prototype.dispose = function() {
                this._removeMouseDownListeners();
            }, Object.defineProperty(SelectionManager.prototype, "_buffer", {
                get: function() {
                    return this._terminal.buffers.active;
                },
                enumerable: !0,
                configurable: !0
            }), SelectionManager.prototype._initListeners = function() {
                var _this = this;
                this._mouseMoveListener = function(event) {
                    return _this._onMouseMove(event);
                }, this._mouseUpListener = function(event) {
                    return _this._onMouseUp(event);
                }, this.initBuffersListeners();
            }, SelectionManager.prototype.initBuffersListeners = function() {
                var _this = this;
                this._trimListener = this._terminal.buffer.lines.onTrim((function(amount) {
                    return _this._onTrim(amount);
                })), this._terminal.buffers.onBufferActivate((function(e) {
                    return _this._onBufferActivate(e);
                }));
            }, SelectionManager.prototype.disable = function() {
                this.clearSelection(), this._enabled = !1;
            }, SelectionManager.prototype.enable = function() {
                this._enabled = !0;
            }, Object.defineProperty(SelectionManager.prototype, "selectionStart", {
                get: function() {
                    return this._model.finalSelectionStart;
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(SelectionManager.prototype, "selectionEnd", {
                get: function() {
                    return this._model.finalSelectionEnd;
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(SelectionManager.prototype, "hasSelection", {
                get: function() {
                    var start = this._model.finalSelectionStart, end = this._model.finalSelectionEnd;
                    return !(!start || !end || start[0] === end[0] && start[1] === end[1]);
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(SelectionManager.prototype, "selectionText", {
                get: function() {
                    var start = this._model.finalSelectionStart, end = this._model.finalSelectionEnd;
                    if (!start || !end) return "";
                    var result = [];
                    if (3 === this._activeSelectionMode) {
                        if (start[0] === end[0]) return "";
                        for (var i = start[1]; i <= end[1]; i++) {
                            var lineText = this._buffer.translateBufferLineToString(i, !0, start[0], end[0]);
                            result.push(lineText);
                        }
                    } else {
                        for (result.push(this._buffer.translateBufferLineToString(start[1], !0, start[0], start[1] === end[1] ? end[0] : void 0)), 
                        i = start[1] + 1; i <= end[1] - 1; i++) {
                            var bufferLine = this._buffer.lines.get(i);
                            lineText = this._buffer.translateBufferLineToString(i, !0), bufferLine.isWrapped ? result[result.length - 1] += lineText : result.push(lineText);
                        }
                        start[1] !== end[1] && (bufferLine = this._buffer.lines.get(end[1]), lineText = this._buffer.translateBufferLineToString(end[1], !0, 0, end[0]), 
                        bufferLine.isWrapped ? result[result.length - 1] += lineText : result.push(lineText));
                    }
                    return result.map((function(line) {
                        return line.replace(ALL_NON_BREAKING_SPACE_REGEX, " ");
                    })).join(Browser.isMSWindows ? "\r\n" : "\n");
                },
                enumerable: !0,
                configurable: !0
            }), SelectionManager.prototype.clearSelection = function() {
                this._model.clearSelection(), this._removeMouseDownListeners(), this.refresh(), 
                this._onSelectionChange.fire();
            }, SelectionManager.prototype.refresh = function(isLinuxMouseSelection) {
                var _this = this;
                this._refreshAnimationFrame || (this._refreshAnimationFrame = window.requestAnimationFrame((function() {
                    return _this._refresh();
                }))), Browser.isLinux && isLinuxMouseSelection && this.selectionText.length && this._onLinuxMouseSelection.fire(this.selectionText);
            }, SelectionManager.prototype._refresh = function() {
                this._refreshAnimationFrame = null, this._onRedrawRequest.fire({
                    start: this._model.finalSelectionStart,
                    end: this._model.finalSelectionEnd,
                    columnSelectMode: 3 === this._activeSelectionMode
                });
            }, SelectionManager.prototype.isClickInSelection = function(event) {
                var coords = this._getMouseBufferCoords(event), start = this._model.finalSelectionStart, end = this._model.finalSelectionEnd;
                return !(!start || !end) && this._areCoordsInSelection(coords, start, end);
            }, SelectionManager.prototype._areCoordsInSelection = function(coords, start, end) {
                return coords[1] > start[1] && coords[1] < end[1] || start[1] === end[1] && coords[1] === start[1] && coords[0] >= start[0] && coords[0] < end[0] || start[1] < end[1] && coords[1] === end[1] && coords[0] < end[0] || start[1] < end[1] && coords[1] === start[1] && coords[0] >= start[0];
            }, SelectionManager.prototype.selectWordAtCursor = function(event) {
                var coords = this._getMouseBufferCoords(event);
                coords && (this._selectWordAt(coords, !1), this._model.selectionEnd = null, this.refresh(!0));
            }, SelectionManager.prototype.selectAll = function() {
                this._model.isSelectAllActive = !0, this.refresh(), this._onSelectionChange.fire();
            }, SelectionManager.prototype.selectLines = function(start, end) {
                this._model.clearSelection(), start = Math.max(start, 0), end = Math.min(end, this._terminal.buffer.lines.length - 1), 
                this._model.selectionStart = [ 0, start ], this._model.selectionEnd = [ this._terminal.cols, end ], 
                this.refresh(), this._onSelectionChange.fire();
            }, SelectionManager.prototype._onTrim = function(amount) {
                this._model.onTrim(amount) && this.refresh();
            }, SelectionManager.prototype._getMouseBufferCoords = function(event) {
                var coords = this._terminal.mouseHelper.getCoords(event, this._terminal.screenElement, this._charMeasure, this._terminal.cols, this._terminal.rows, !0);
                return coords ? (coords[0]--, coords[1]--, coords[1] += this._terminal.buffer.ydisp, 
                coords) : null;
            }, SelectionManager.prototype._getMouseEventScrollAmount = function(event) {
                var offset = MouseHelper_1.MouseHelper.getCoordsRelativeToElement(event, this._terminal.screenElement)[1], terminalHeight = this._terminal.rows * Math.ceil(this._charMeasure.height * this._terminal.options.lineHeight);
                return offset >= 0 && offset <= terminalHeight ? 0 : (offset > terminalHeight && (offset -= terminalHeight), 
                offset = Math.min(Math.max(offset, -50), 50), (offset /= 50) / Math.abs(offset) + Math.round(14 * offset));
            }, SelectionManager.prototype.shouldForceSelection = function(event) {
                return Browser.isMac ? event.altKey && this._terminal.options.macOptionClickForcesSelection : event.shiftKey;
            }, SelectionManager.prototype.onMouseDown = function(event) {
                if (this._mouseDownTimeStamp = event.timeStamp, (2 !== event.button || !this.hasSelection) && 0 === event.button) {
                    if (!this._enabled) {
                        if (!this.shouldForceSelection(event)) return;
                        event.stopPropagation();
                    }
                    event.preventDefault(), this._dragScrollAmount = 0, this._enabled && event.shiftKey ? this._onIncrementalClick(event) : 1 === event.detail ? this._onSingleClick(event) : 2 === event.detail ? this._onDoubleClick(event) : 3 === event.detail && this._onTripleClick(event), 
                    this._addMouseDownListeners(), this.refresh(!0);
                }
            }, SelectionManager.prototype._addMouseDownListeners = function() {
                var _this = this;
                this._terminal.element.ownerDocument.addEventListener("mousemove", this._mouseMoveListener), 
                this._terminal.element.ownerDocument.addEventListener("mouseup", this._mouseUpListener), 
                this._dragScrollIntervalTimer = setInterval((function() {
                    return _this._dragScroll();
                }), 50);
            }, SelectionManager.prototype._removeMouseDownListeners = function() {
                this._terminal.element.ownerDocument && (this._terminal.element.ownerDocument.removeEventListener("mousemove", this._mouseMoveListener), 
                this._terminal.element.ownerDocument.removeEventListener("mouseup", this._mouseUpListener)), 
                clearInterval(this._dragScrollIntervalTimer), this._dragScrollIntervalTimer = null;
            }, SelectionManager.prototype._onIncrementalClick = function(event) {
                this._model.selectionStart && (this._model.selectionEnd = this._getMouseBufferCoords(event));
            }, SelectionManager.prototype._onSingleClick = function(event) {
                if (this._model.selectionStartLength = 0, this._model.isSelectAllActive = !1, this._activeSelectionMode = this.shouldColumnSelect(event) ? 3 : 0, 
                this._model.selectionStart = this._getMouseBufferCoords(event), this._model.selectionStart) {
                    this._model.selectionEnd = null;
                    var line = this._buffer.lines.get(this._model.selectionStart[1]);
                    line && (line.length >= this._model.selectionStart[0] || 0 === line.hasWidth(this._model.selectionStart[0]) && this._model.selectionStart[0]++);
                }
            }, SelectionManager.prototype._onDoubleClick = function(event) {
                var coords = this._getMouseBufferCoords(event);
                coords && (this._activeSelectionMode = 1, this._selectWordAt(coords, !0));
            }, SelectionManager.prototype._onTripleClick = function(event) {
                var coords = this._getMouseBufferCoords(event);
                coords && (this._activeSelectionMode = 2, this._selectLineAt(coords[1]));
            }, SelectionManager.prototype.shouldColumnSelect = function(event) {
                return event.altKey && !(Browser.isMac && this._terminal.options.macOptionClickForcesSelection);
            }, SelectionManager.prototype._onMouseMove = function(event) {
                event.stopImmediatePropagation();
                var previousSelectionEnd = this._model.selectionEnd ? [ this._model.selectionEnd[0], this._model.selectionEnd[1] ] : null;
                this._model.selectionEnd = this._getMouseBufferCoords(event), this._model.selectionEnd ? (2 === this._activeSelectionMode ? this._model.selectionEnd[0] = this._model.selectionEnd[1] < this._model.selectionStart[1] ? 0 : this._terminal.cols : 1 === this._activeSelectionMode && this._selectToWordAt(this._model.selectionEnd), 
                this._dragScrollAmount = this._getMouseEventScrollAmount(event), 3 !== this._activeSelectionMode && (this._dragScrollAmount > 0 ? this._model.selectionEnd[0] = this._terminal.cols : this._dragScrollAmount < 0 && (this._model.selectionEnd[0] = 0)), 
                this._model.selectionEnd[1] < this._buffer.lines.length && 0 === this._buffer.lines.get(this._model.selectionEnd[1]).hasWidth(this._model.selectionEnd[0]) && this._model.selectionEnd[0]++, 
                previousSelectionEnd && previousSelectionEnd[0] === this._model.selectionEnd[0] && previousSelectionEnd[1] === this._model.selectionEnd[1] || this.refresh(!0)) : this.refresh(!0);
            }, SelectionManager.prototype._dragScroll = function() {
                this._dragScrollAmount && (this._terminal.scrollLines(this._dragScrollAmount, !1), 
                this._dragScrollAmount > 0 ? (3 !== this._activeSelectionMode && (this._model.selectionEnd[0] = this._terminal.cols), 
                this._model.selectionEnd[1] = Math.min(this._terminal.buffer.ydisp + this._terminal.rows, this._terminal.buffer.lines.length - 1)) : (3 !== this._activeSelectionMode && (this._model.selectionEnd[0] = 0), 
                this._model.selectionEnd[1] = this._terminal.buffer.ydisp), this.refresh());
            }, SelectionManager.prototype._onMouseUp = function(event) {
                var timeElapsed = event.timeStamp - this._mouseDownTimeStamp;
                this._removeMouseDownListeners(), this.selectionText.length <= 1 && timeElapsed < 500 ? new AltClickHandler_1.AltClickHandler(event, this._terminal).move() : this.hasSelection && this._onSelectionChange.fire();
            }, SelectionManager.prototype._onBufferActivate = function(e) {
                var _this = this;
                this.clearSelection(), this._trimListener && this._trimListener.dispose(), this._trimListener = e.activeBuffer.lines.onTrim((function(amount) {
                    return _this._onTrim(amount);
                }));
            }, SelectionManager.prototype._convertViewportColToCharacterIndex = function(bufferLine, coords) {
                for (var charIndex = coords[0], i = 0; coords[0] >= i; i++) {
                    var length_1 = bufferLine.loadCell(i, this._workCell).getChars().length;
                    0 === this._workCell.getWidth() ? charIndex-- : length_1 > 1 && coords[0] !== i && (charIndex += length_1 - 1);
                }
                return charIndex;
            }, SelectionManager.prototype.setSelection = function(col, row, length) {
                this._model.clearSelection(), this._removeMouseDownListeners(), this._model.selectionStart = [ col, row ], 
                this._model.selectionStartLength = length, this.refresh();
            }, SelectionManager.prototype._getWordAt = function(coords, allowWhitespaceOnlySelection, followWrappedLinesAbove, followWrappedLinesBelow) {
                if (void 0 === followWrappedLinesAbove && (followWrappedLinesAbove = !0), void 0 === followWrappedLinesBelow && (followWrappedLinesBelow = !0), 
                coords[0] >= this._terminal.cols) return null;
                var bufferLine = this._buffer.lines.get(coords[1]);
                if (!bufferLine) return null;
                var line = this._buffer.translateBufferLineToString(coords[1], !1), startIndex = this._convertViewportColToCharacterIndex(bufferLine, coords), endIndex = startIndex, charOffset = coords[0] - startIndex, leftWideCharCount = 0, rightWideCharCount = 0, leftLongCharOffset = 0, rightLongCharOffset = 0;
                if (" " === line.charAt(startIndex)) {
                    for (;startIndex > 0 && " " === line.charAt(startIndex - 1); ) startIndex--;
                    for (;endIndex < line.length && " " === line.charAt(endIndex + 1); ) endIndex++;
                } else {
                    var startCol = coords[0], endCol = coords[0];
                    0 === bufferLine.getWidth(startCol) && (leftWideCharCount++, startCol--), 2 === bufferLine.getWidth(endCol) && (rightWideCharCount++, 
                    endCol++);
                    var length_2 = bufferLine.getString(endCol).length;
                    for (length_2 > 1 && (rightLongCharOffset += length_2 - 1, endIndex += length_2 - 1); startCol > 0 && startIndex > 0 && !this._isCharWordSeparator(bufferLine.loadCell(startCol - 1, this._workCell)); ) {
                        bufferLine.loadCell(startCol - 1, this._workCell);
                        var length_3 = this._workCell.getChars().length;
                        0 === this._workCell.getWidth() ? (leftWideCharCount++, startCol--) : length_3 > 1 && (leftLongCharOffset += length_3 - 1, 
                        startIndex -= length_3 - 1), startIndex--, startCol--;
                    }
                    for (;endCol < bufferLine.length && endIndex + 1 < line.length && !this._isCharWordSeparator(bufferLine.loadCell(endCol + 1, this._workCell)); ) {
                        bufferLine.loadCell(endCol + 1, this._workCell);
                        var length_4 = this._workCell.getChars().length;
                        2 === this._workCell.getWidth() ? (rightWideCharCount++, endCol++) : length_4 > 1 && (rightLongCharOffset += length_4 - 1, 
                        endIndex += length_4 - 1), endIndex++, endCol++;
                    }
                }
                endIndex++;
                var start = startIndex + charOffset - leftWideCharCount + leftLongCharOffset, length = Math.min(this._terminal.cols, endIndex - startIndex + leftWideCharCount + rightWideCharCount - leftLongCharOffset - rightLongCharOffset);
                if (!allowWhitespaceOnlySelection && "" === line.slice(startIndex, endIndex).trim()) return null;
                if (followWrappedLinesAbove && 0 === start && 32 !== bufferLine.getCodePoint(0)) {
                    var previousBufferLine = this._buffer.lines.get(coords[1] - 1);
                    if (previousBufferLine && bufferLine.isWrapped && 32 !== previousBufferLine.getCodePoint(this._terminal.cols - 1)) {
                        var previousLineWordPosition = this._getWordAt([ this._terminal.cols - 1, coords[1] - 1 ], !1, !0, !1);
                        if (previousLineWordPosition) {
                            var offset = this._terminal.cols - previousLineWordPosition.start;
                            start -= offset, length += offset;
                        }
                    }
                }
                if (followWrappedLinesBelow && start + length === this._terminal.cols && 32 !== bufferLine.getCodePoint(this._terminal.cols - 1)) {
                    var nextBufferLine = this._buffer.lines.get(coords[1] + 1);
                    if (nextBufferLine && nextBufferLine.isWrapped && 32 !== nextBufferLine.getCodePoint(0)) {
                        var nextLineWordPosition = this._getWordAt([ 0, coords[1] + 1 ], !1, !1, !0);
                        nextLineWordPosition && (length += nextLineWordPosition.length);
                    }
                }
                return {
                    start: start,
                    length: length
                };
            }, SelectionManager.prototype._selectWordAt = function(coords, allowWhitespaceOnlySelection) {
                var wordPosition = this._getWordAt(coords, allowWhitespaceOnlySelection);
                if (wordPosition) {
                    for (;wordPosition.start < 0; ) wordPosition.start += this._terminal.cols, coords[1]--;
                    this._model.selectionStart = [ wordPosition.start, coords[1] ], this._model.selectionStartLength = wordPosition.length;
                }
            }, SelectionManager.prototype._selectToWordAt = function(coords) {
                var wordPosition = this._getWordAt(coords, !0);
                if (wordPosition) {
                    for (var endRow = coords[1]; wordPosition.start < 0; ) wordPosition.start += this._terminal.cols, 
                    endRow--;
                    if (!this._model.areSelectionValuesReversed()) for (;wordPosition.start + wordPosition.length > this._terminal.cols; ) wordPosition.length -= this._terminal.cols, 
                    endRow++;
                    this._model.selectionEnd = [ this._model.areSelectionValuesReversed() ? wordPosition.start : wordPosition.start + wordPosition.length, endRow ];
                }
            }, SelectionManager.prototype._isCharWordSeparator = function(cell) {
                return 0 !== cell.getWidth() && " ()[]{}'\"".indexOf(cell.getChars()) >= 0;
            }, SelectionManager.prototype._selectLineAt = function(line) {
                var wrappedRange = this._buffer.getWrappedRangeForLine(line);
                this._model.selectionStart = [ 0, wrappedRange.first ], this._model.selectionEnd = [ this._terminal.cols, wrappedRange.last ], 
                this._model.selectionStartLength = 0;
            }, SelectionManager;
        }();
        exports.SelectionManager = SelectionManager;
    },
    iknm: function(module, exports, __webpack_require__) {
        "use strict";
        var extendStatics, __extends = this && this.__extends || (extendStatics = function(d, b) {
            return (extendStatics = Object.setPrototypeOf || {
                __proto__: []
            } instanceof Array && function(d, b) {
                d.__proto__ = b;
            } || function(d, b) {
                for (var p in b) b.hasOwnProperty(p) && (d[p] = b[p]);
            })(d, b);
        }, function(d, b) {
            function __() {
                this.constructor = d;
            }
            extendStatics(d, b), d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, 
            new __);
        });
        Object.defineProperty(exports, "__esModule", {
            value: !0
        });
        var RenderDebouncer_1 = __webpack_require__("MI/u"), EventEmitter2_1 = __webpack_require__("Fn1x"), Lifecycle_1 = __webpack_require__("4wKv"), ScreenDprMonitor_1 = __webpack_require__("+uUd"), Lifecycle_2 = __webpack_require__("N7yj"), RenderCoordinator = function(_super) {
            function RenderCoordinator(_renderer, _rowCount, screenElement) {
                var _this = _super.call(this) || this;
                if (_this._renderer = _renderer, _this._rowCount = _rowCount, _this._isPaused = !1, 
                _this._needsFullRefresh = !1, _this._canvasWidth = 0, _this._canvasHeight = 0, _this._onDimensionsChange = new EventEmitter2_1.EventEmitter2, 
                _this._onRender = new EventEmitter2_1.EventEmitter2, _this._onRefreshRequest = new EventEmitter2_1.EventEmitter2, 
                _this._renderDebouncer = new RenderDebouncer_1.RenderDebouncer((function(start, end) {
                    return _this._renderRows(start, end);
                })), _this.register(_this._renderDebouncer), _this._screenDprMonitor = new ScreenDprMonitor_1.ScreenDprMonitor, 
                _this._screenDprMonitor.setListener((function() {
                    return _this._renderer.onDevicePixelRatioChange();
                })), _this.register(_this._screenDprMonitor), _this.register(Lifecycle_2.addDisposableDomListener(window, "resize", (function() {
                    return _this._renderer.onDevicePixelRatioChange();
                }))), "IntersectionObserver" in window) {
                    var observer_1 = new IntersectionObserver((function(e) {
                        return _this._onIntersectionChange(e[e.length - 1]);
                    }), {
                        threshold: 0
                    });
                    observer_1.observe(screenElement), _this.register({
                        dispose: function() {
                            return observer_1.disconnect();
                        }
                    });
                }
                return _this;
            }
            return __extends(RenderCoordinator, _super), Object.defineProperty(RenderCoordinator.prototype, "onDimensionsChange", {
                get: function() {
                    return this._onDimensionsChange.event;
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(RenderCoordinator.prototype, "onRender", {
                get: function() {
                    return this._onRender.event;
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(RenderCoordinator.prototype, "onRefreshRequest", {
                get: function() {
                    return this._onRefreshRequest.event;
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(RenderCoordinator.prototype, "dimensions", {
                get: function() {
                    return this._renderer.dimensions;
                },
                enumerable: !0,
                configurable: !0
            }), RenderCoordinator.prototype._onIntersectionChange = function(entry) {
                this._isPaused = 0 === entry.intersectionRatio, !this._isPaused && this._needsFullRefresh && (this.refreshRows(0, this._rowCount - 1), 
                this._needsFullRefresh = !1);
            }, RenderCoordinator.prototype.refreshRows = function(start, end) {
                this._isPaused ? this._needsFullRefresh = !0 : this._renderDebouncer.refresh(start, end, this._rowCount);
            }, RenderCoordinator.prototype._renderRows = function(start, end) {
                this._renderer.renderRows(start, end), this._onRender.fire({
                    start: start,
                    end: end
                });
            }, RenderCoordinator.prototype.resize = function(cols, rows) {
                this._rowCount = rows, this._fireOnCanvasResize();
            }, RenderCoordinator.prototype.changeOptions = function() {
                this._renderer.onOptionsChanged(), this._fireOnCanvasResize();
            }, RenderCoordinator.prototype._fireOnCanvasResize = function() {
                this._renderer.dimensions.canvasWidth === this._canvasWidth && this._renderer.dimensions.canvasHeight === this._canvasHeight || this._onDimensionsChange.fire(this._renderer.dimensions);
            }, RenderCoordinator.prototype.setRenderer = function(renderer) {
                this._renderer.dispose(), this._renderer = renderer;
            }, RenderCoordinator.prototype._fullRefresh = function() {
                this._isPaused ? this._needsFullRefresh = !0 : this.refreshRows(0, this._rowCount);
            }, RenderCoordinator.prototype.setColors = function(colors) {
                this._renderer.setColors(colors), this._fullRefresh();
            }, RenderCoordinator.prototype.onDevicePixelRatioChange = function() {
                this._renderer.onDevicePixelRatioChange();
            }, RenderCoordinator.prototype.onResize = function(cols, rows) {
                this._renderer.onResize(cols, rows), this._fullRefresh();
            }, RenderCoordinator.prototype.onCharSizeChanged = function() {
                this._renderer.onCharSizeChanged();
            }, RenderCoordinator.prototype.onBlur = function() {
                this._renderer.onBlur();
            }, RenderCoordinator.prototype.onFocus = function() {
                this._renderer.onFocus();
            }, RenderCoordinator.prototype.onSelectionChanged = function(start, end, columnSelectMode) {
                this._renderer.onSelectionChanged(start, end, columnSelectMode);
            }, RenderCoordinator.prototype.onCursorMove = function() {
                this._renderer.onCursorMove();
            }, RenderCoordinator.prototype.onOptionsChanged = function() {
                this._renderer.onOptionsChanged();
            }, RenderCoordinator.prototype.clear = function() {
                this._renderer.clear();
            }, RenderCoordinator.prototype.registerCharacterJoiner = function(handler) {
                return this._renderer.registerCharacterJoiner(handler);
            }, RenderCoordinator.prototype.deregisterCharacterJoiner = function(joinerId) {
                return this._renderer.deregisterCharacterJoiner(joinerId);
            }, RenderCoordinator;
        }(Lifecycle_1.Disposable);
        exports.RenderCoordinator = RenderCoordinator;
    },
    iqU4: function(module, exports, __webpack_require__) {
        "use strict";
        var extendStatics, __extends = this && this.__extends || (extendStatics = function(d, b) {
            return (extendStatics = Object.setPrototypeOf || {
                __proto__: []
            } instanceof Array && function(d, b) {
                d.__proto__ = b;
            } || function(d, b) {
                for (var p in b) b.hasOwnProperty(p) && (d[p] = b[p]);
            })(d, b);
        }, function(d, b) {
            function __() {
                this.constructor = d;
            }
            extendStatics(d, b), d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, 
            new __);
        });
        Object.defineProperty(exports, "__esModule", {
            value: !0
        });
        var Types_1 = __webpack_require__("2+Wn"), CharAtlasGenerator_1 = __webpack_require__("mtuk"), BaseCharAtlas_1 = __webpack_require__("fjly"), CharAtlasUtils_1 = __webpack_require__("jNJa"), Types_2 = __webpack_require__("J+Hc"), StaticCharAtlas = function(_super) {
            function StaticCharAtlas(_document, _config) {
                var _this = _super.call(this) || this;
                return _this._document = _document, _this._config = _config, _this._canvasFactory = function(width, height) {
                    var canvas = _this._document.createElement("canvas");
                    return canvas.width = width, canvas.height = height, canvas;
                }, _this;
            }
            return __extends(StaticCharAtlas, _super), StaticCharAtlas.prototype._doWarmUp = function() {
                var _this = this, result = CharAtlasGenerator_1.generateStaticCharAtlasTexture(window, this._canvasFactory, this._config);
                result instanceof HTMLCanvasElement ? this._texture = result : result.then((function(texture) {
                    _this._texture = texture;
                }));
            }, StaticCharAtlas.prototype._isCached = function(glyph, colorIndex) {
                return glyph.code < 256 && (glyph.fg < 16 || glyph.fg === Types_2.DEFAULT_COLOR) && glyph.bg === Types_2.DEFAULT_COLOR && !glyph.italic;
            }, StaticCharAtlas.prototype.draw = function(ctx, glyph, x, y) {
                if (null == this._texture) return !1;
                var colorIndex = 0;
                if (CharAtlasUtils_1.is256Color(glyph.fg) ? colorIndex = 2 + glyph.fg + (glyph.bold ? 16 : 0) : glyph.fg === Types_2.DEFAULT_COLOR && glyph.bold && (colorIndex = 1), 
                !this._isCached(glyph, colorIndex)) return !1;
                ctx.save();
                var charAtlasCellWidth = this._config.scaledCharWidth + Types_1.CHAR_ATLAS_CELL_SPACING, charAtlasCellHeight = this._config.scaledCharHeight + Types_1.CHAR_ATLAS_CELL_SPACING;
                return glyph.dim && (ctx.globalAlpha = Types_1.DIM_OPACITY), ctx.drawImage(this._texture, glyph.code * charAtlasCellWidth, colorIndex * charAtlasCellHeight, charAtlasCellWidth, this._config.scaledCharHeight, x, y, charAtlasCellWidth, this._config.scaledCharHeight), 
                ctx.restore(), !0;
            }, StaticCharAtlas;
        }(BaseCharAtlas_1.default);
        exports.default = StaticCharAtlas;
    },
    jNJa: function(module, exports, __webpack_require__) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        });
        var Types_1 = __webpack_require__("J+Hc");
        exports.generateConfig = function(scaledCharWidth, scaledCharHeight, terminal, colors) {
            var clonedColors = {
                foreground: colors.foreground,
                background: colors.background,
                cursor: null,
                cursorAccent: null,
                selection: null,
                ansi: colors.ansi.slice(0, 16)
            };
            return {
                type: terminal.options.experimentalCharAtlas,
                devicePixelRatio: window.devicePixelRatio,
                scaledCharWidth: scaledCharWidth,
                scaledCharHeight: scaledCharHeight,
                fontFamily: terminal.options.fontFamily,
                fontSize: terminal.options.fontSize,
                fontWeight: terminal.options.fontWeight,
                fontWeightBold: terminal.options.fontWeightBold,
                allowTransparency: terminal.options.allowTransparency,
                colors: clonedColors
            };
        }, exports.configEquals = function(a, b) {
            for (var i = 0; i < a.colors.ansi.length; i++) if (a.colors.ansi[i].rgba !== b.colors.ansi[i].rgba) return !1;
            return a.type === b.type && a.devicePixelRatio === b.devicePixelRatio && a.fontFamily === b.fontFamily && a.fontSize === b.fontSize && a.fontWeight === b.fontWeight && a.fontWeightBold === b.fontWeightBold && a.allowTransparency === b.allowTransparency && a.scaledCharWidth === b.scaledCharWidth && a.scaledCharHeight === b.scaledCharHeight && a.colors.foreground === b.colors.foreground && a.colors.background === b.colors.background;
        }, exports.is256Color = function(colorCode) {
            return colorCode < Types_1.DEFAULT_COLOR;
        };
    },
    lbDW: function(module, exports, __webpack_require__) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        });
        var DEFAULT_FOREGROUND = fromHex("#ffffff"), DEFAULT_BACKGROUND = fromHex("#000000"), DEFAULT_CURSOR = fromHex("#ffffff"), DEFAULT_CURSOR_ACCENT = fromHex("#000000"), DEFAULT_SELECTION = {
            css: "rgba(255, 255, 255, 0.3)",
            rgba: 4294967159
        };
        function fromHex(css) {
            return {
                css: css,
                rgba: parseInt(css.slice(1), 16) << 8 | 255
            };
        }
        function toPaddedHex(c) {
            var s = c.toString(16);
            return s.length < 2 ? "0" + s : s;
        }
        exports.DEFAULT_ANSI_COLORS = function() {
            for (var colors = [ fromHex("#2e3436"), fromHex("#cc0000"), fromHex("#4e9a06"), fromHex("#c4a000"), fromHex("#3465a4"), fromHex("#75507b"), fromHex("#06989a"), fromHex("#d3d7cf"), fromHex("#555753"), fromHex("#ef2929"), fromHex("#8ae234"), fromHex("#fce94f"), fromHex("#729fcf"), fromHex("#ad7fa8"), fromHex("#34e2e2"), fromHex("#eeeeec") ], v = [ 0, 95, 135, 175, 215, 255 ], i = 0; i < 216; i++) {
                var r = v[i / 36 % 6 | 0], g = v[i / 6 % 6 | 0], b = v[i % 6];
                colors.push({
                    css: "#" + toPaddedHex(r) + toPaddedHex(g) + toPaddedHex(b),
                    rgba: (r << 24 | g << 16 | b << 8 | 255) >>> 0
                });
            }
            for (i = 0; i < 24; i++) {
                var c = 8 + 10 * i, ch = toPaddedHex(c);
                colors.push({
                    css: "#" + ch + ch + ch,
                    rgba: (c << 24 | c << 16 | c << 8 | 255) >>> 0
                });
            }
            return colors;
        }();
        var ColorManager = function() {
            function ColorManager(document, allowTransparency) {
                this.allowTransparency = allowTransparency;
                var canvas = document.createElement("canvas");
                canvas.width = 1, canvas.height = 1;
                var ctx = canvas.getContext("2d");
                if (!ctx) throw new Error("Could not get rendering context");
                this._ctx = ctx, this._ctx.globalCompositeOperation = "copy", this._litmusColor = this._ctx.createLinearGradient(0, 0, 1, 1), 
                this.colors = {
                    foreground: DEFAULT_FOREGROUND,
                    background: DEFAULT_BACKGROUND,
                    cursor: DEFAULT_CURSOR,
                    cursorAccent: DEFAULT_CURSOR_ACCENT,
                    selection: DEFAULT_SELECTION,
                    ansi: exports.DEFAULT_ANSI_COLORS.slice()
                };
            }
            return ColorManager.prototype.setTheme = function(theme) {
                void 0 === theme && (theme = {}), this.colors.foreground = this._parseColor(theme.foreground, DEFAULT_FOREGROUND), 
                this.colors.background = this._parseColor(theme.background, DEFAULT_BACKGROUND), 
                this.colors.cursor = this._parseColor(theme.cursor, DEFAULT_CURSOR, !0), this.colors.cursorAccent = this._parseColor(theme.cursorAccent, DEFAULT_CURSOR_ACCENT, !0), 
                this.colors.selection = this._parseColor(theme.selection, DEFAULT_SELECTION, !0), 
                this.colors.ansi[0] = this._parseColor(theme.black, exports.DEFAULT_ANSI_COLORS[0]), 
                this.colors.ansi[1] = this._parseColor(theme.red, exports.DEFAULT_ANSI_COLORS[1]), 
                this.colors.ansi[2] = this._parseColor(theme.green, exports.DEFAULT_ANSI_COLORS[2]), 
                this.colors.ansi[3] = this._parseColor(theme.yellow, exports.DEFAULT_ANSI_COLORS[3]), 
                this.colors.ansi[4] = this._parseColor(theme.blue, exports.DEFAULT_ANSI_COLORS[4]), 
                this.colors.ansi[5] = this._parseColor(theme.magenta, exports.DEFAULT_ANSI_COLORS[5]), 
                this.colors.ansi[6] = this._parseColor(theme.cyan, exports.DEFAULT_ANSI_COLORS[6]), 
                this.colors.ansi[7] = this._parseColor(theme.white, exports.DEFAULT_ANSI_COLORS[7]), 
                this.colors.ansi[8] = this._parseColor(theme.brightBlack, exports.DEFAULT_ANSI_COLORS[8]), 
                this.colors.ansi[9] = this._parseColor(theme.brightRed, exports.DEFAULT_ANSI_COLORS[9]), 
                this.colors.ansi[10] = this._parseColor(theme.brightGreen, exports.DEFAULT_ANSI_COLORS[10]), 
                this.colors.ansi[11] = this._parseColor(theme.brightYellow, exports.DEFAULT_ANSI_COLORS[11]), 
                this.colors.ansi[12] = this._parseColor(theme.brightBlue, exports.DEFAULT_ANSI_COLORS[12]), 
                this.colors.ansi[13] = this._parseColor(theme.brightMagenta, exports.DEFAULT_ANSI_COLORS[13]), 
                this.colors.ansi[14] = this._parseColor(theme.brightCyan, exports.DEFAULT_ANSI_COLORS[14]), 
                this.colors.ansi[15] = this._parseColor(theme.brightWhite, exports.DEFAULT_ANSI_COLORS[15]);
            }, ColorManager.prototype._parseColor = function(css, fallback, allowTransparency) {
                if (void 0 === allowTransparency && (allowTransparency = this.allowTransparency), 
                void 0 === css) return fallback;
                if (this._ctx.fillStyle = this._litmusColor, this._ctx.fillStyle = css, "string" != typeof this._ctx.fillStyle) return console.warn("Color: " + css + " is invalid using fallback " + fallback.css), 
                fallback;
                this._ctx.fillRect(0, 0, 1, 1);
                var data = this._ctx.getImageData(0, 0, 1, 1).data;
                return allowTransparency || 255 === data[3] ? {
                    css: css,
                    rgba: (data[0] << 24 | data[1] << 16 | data[2] << 8 | data[3]) >>> 0
                } : (console.warn("Color: " + css + " is using transparency, but allowTransparency is false. Using fallback " + fallback.css + "."), 
                fallback);
            }, ColorManager;
        }();
        exports.ColorManager = ColorManager;
    },
    makB: function(module, exports, __webpack_require__) {
        "use strict";
        var extendStatics, __extends = this && this.__extends || (extendStatics = function(d, b) {
            return (extendStatics = Object.setPrototypeOf || {
                __proto__: []
            } instanceof Array && function(d, b) {
                d.__proto__ = b;
            } || function(d, b) {
                for (var p in b) b.hasOwnProperty(p) && (d[p] = b[p]);
            })(d, b);
        }, function(d, b) {
            function __() {
                this.constructor = d;
            }
            extendStatics(d, b), d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, 
            new __);
        });
        Object.defineProperty(exports, "__esModule", {
            value: !0
        });
        var BaseRenderLayer_1 = __webpack_require__("HHOg"), BufferLine_1 = __webpack_require__("XMT/"), CursorRenderLayer = function(_super) {
            function CursorRenderLayer(container, zIndex, colors) {
                var _this = _super.call(this, container, "cursor", zIndex, !0, colors) || this;
                return _this._cell = new BufferLine_1.CellData, _this._state = {
                    x: null,
                    y: null,
                    isFocused: null,
                    style: null,
                    width: null
                }, _this._cursorRenderers = {
                    bar: _this._renderBarCursor.bind(_this),
                    block: _this._renderBlockCursor.bind(_this),
                    underline: _this._renderUnderlineCursor.bind(_this)
                }, _this;
            }
            return __extends(CursorRenderLayer, _super), CursorRenderLayer.prototype.resize = function(terminal, dim) {
                _super.prototype.resize.call(this, terminal, dim), this._state = {
                    x: null,
                    y: null,
                    isFocused: null,
                    style: null,
                    width: null
                };
            }, CursorRenderLayer.prototype.reset = function(terminal) {
                this._clearCursor(), this._cursorBlinkStateManager && (this._cursorBlinkStateManager.dispose(), 
                this._cursorBlinkStateManager = null, this.onOptionsChanged(terminal));
            }, CursorRenderLayer.prototype.onBlur = function(terminal) {
                this._cursorBlinkStateManager && this._cursorBlinkStateManager.pause(), terminal.refresh(terminal.buffer.y, terminal.buffer.y);
            }, CursorRenderLayer.prototype.onFocus = function(terminal) {
                this._cursorBlinkStateManager ? this._cursorBlinkStateManager.resume(terminal) : terminal.refresh(terminal.buffer.y, terminal.buffer.y);
            }, CursorRenderLayer.prototype.onOptionsChanged = function(terminal) {
                var _this = this;
                terminal.options.cursorBlink ? this._cursorBlinkStateManager || (this._cursorBlinkStateManager = new CursorBlinkStateManager(terminal, (function() {
                    _this._render(terminal, !0);
                }))) : (this._cursorBlinkStateManager && (this._cursorBlinkStateManager.dispose(), 
                this._cursorBlinkStateManager = null), terminal.refresh(terminal.buffer.y, terminal.buffer.y));
            }, CursorRenderLayer.prototype.onCursorMove = function(terminal) {
                this._cursorBlinkStateManager && this._cursorBlinkStateManager.restartBlinkAnimation(terminal);
            }, CursorRenderLayer.prototype.onGridChanged = function(terminal, startRow, endRow) {
                !this._cursorBlinkStateManager || this._cursorBlinkStateManager.isPaused ? this._render(terminal, !1) : this._cursorBlinkStateManager.restartBlinkAnimation(terminal);
            }, CursorRenderLayer.prototype._render = function(terminal, triggeredByAnimationFrame) {
                if (terminal.cursorState && !terminal.cursorHidden) {
                    var cursorY = terminal.buffer.ybase + terminal.buffer.y, viewportRelativeCursorY = cursorY - terminal.buffer.ydisp;
                    if (viewportRelativeCursorY < 0 || viewportRelativeCursorY >= terminal.rows) this._clearCursor(); else if (terminal.buffer.lines.get(cursorY).loadCell(terminal.buffer.x, this._cell), 
                    void 0 !== this._cell.content) {
                        if (!terminal.isFocused) return this._clearCursor(), this._ctx.save(), this._ctx.fillStyle = this._colors.cursor.css, 
                        this._renderBlurCursor(terminal, terminal.buffer.x, viewportRelativeCursorY, this._cell), 
                        this._ctx.restore(), this._state.x = terminal.buffer.x, this._state.y = viewportRelativeCursorY, 
                        this._state.isFocused = !1, this._state.style = terminal.options.cursorStyle, void (this._state.width = this._cell.getWidth());
                        if (!this._cursorBlinkStateManager || this._cursorBlinkStateManager.isCursorVisible) {
                            if (this._state) {
                                if (this._state.x === terminal.buffer.x && this._state.y === viewportRelativeCursorY && this._state.isFocused === terminal.isFocused && this._state.style === terminal.options.cursorStyle && this._state.width === this._cell.getWidth()) return;
                                this._clearCursor();
                            }
                            this._ctx.save(), this._cursorRenderers[terminal.options.cursorStyle || "block"](terminal, terminal.buffer.x, viewportRelativeCursorY, this._cell), 
                            this._ctx.restore(), this._state.x = terminal.buffer.x, this._state.y = viewportRelativeCursorY, 
                            this._state.isFocused = !1, this._state.style = terminal.options.cursorStyle, this._state.width = this._cell.getWidth();
                        } else this._clearCursor();
                    }
                } else this._clearCursor();
            }, CursorRenderLayer.prototype._clearCursor = function() {
                this._state && (this.clearCells(this._state.x, this._state.y, this._state.width, 1), 
                this._state = {
                    x: null,
                    y: null,
                    isFocused: null,
                    style: null,
                    width: null
                });
            }, CursorRenderLayer.prototype._renderBarCursor = function(terminal, x, y, cell) {
                this._ctx.save(), this._ctx.fillStyle = this._colors.cursor.css, this.fillLeftLineAtCell(x, y), 
                this._ctx.restore();
            }, CursorRenderLayer.prototype._renderBlockCursor = function(terminal, x, y, cell) {
                this._ctx.save(), this._ctx.fillStyle = this._colors.cursor.css, this.fillCells(x, y, cell.getWidth(), 1), 
                this._ctx.fillStyle = this._colors.cursorAccent.css, this.fillCharTrueColor(terminal, cell, x, y), 
                this._ctx.restore();
            }, CursorRenderLayer.prototype._renderUnderlineCursor = function(terminal, x, y, cell) {
                this._ctx.save(), this._ctx.fillStyle = this._colors.cursor.css, this.fillBottomLineAtCells(x, y), 
                this._ctx.restore();
            }, CursorRenderLayer.prototype._renderBlurCursor = function(terminal, x, y, cell) {
                this._ctx.save(), this._ctx.strokeStyle = this._colors.cursor.css, this.strokeRectAtCell(x, y, cell.getWidth(), 1), 
                this._ctx.restore();
            }, CursorRenderLayer;
        }(BaseRenderLayer_1.BaseRenderLayer);
        exports.CursorRenderLayer = CursorRenderLayer;
        var CursorBlinkStateManager = function() {
            function CursorBlinkStateManager(terminal, _renderCallback) {
                this._renderCallback = _renderCallback, this.isCursorVisible = !0, terminal.isFocused && this._restartInterval();
            }
            return Object.defineProperty(CursorBlinkStateManager.prototype, "isPaused", {
                get: function() {
                    return !(this._blinkStartTimeout || this._blinkInterval);
                },
                enumerable: !0,
                configurable: !0
            }), CursorBlinkStateManager.prototype.dispose = function() {
                this._blinkInterval && (window.clearInterval(this._blinkInterval), this._blinkInterval = null), 
                this._blinkStartTimeout && (window.clearTimeout(this._blinkStartTimeout), this._blinkStartTimeout = null), 
                this._animationFrame && (window.cancelAnimationFrame(this._animationFrame), this._animationFrame = null);
            }, CursorBlinkStateManager.prototype.restartBlinkAnimation = function(terminal) {
                var _this = this;
                this.isPaused || (this._animationTimeRestarted = Date.now(), this.isCursorVisible = !0, 
                this._animationFrame || (this._animationFrame = window.requestAnimationFrame((function() {
                    _this._renderCallback(), _this._animationFrame = null;
                }))));
            }, CursorBlinkStateManager.prototype._restartInterval = function(timeToStart) {
                var _this = this;
                void 0 === timeToStart && (timeToStart = 600), this._blinkInterval && window.clearInterval(this._blinkInterval), 
                this._blinkStartTimeout = setTimeout((function() {
                    if (_this._animationTimeRestarted) {
                        var time = 600 - (Date.now() - _this._animationTimeRestarted);
                        if (_this._animationTimeRestarted = null, time > 0) return void _this._restartInterval(time);
                    }
                    _this.isCursorVisible = !1, _this._animationFrame = window.requestAnimationFrame((function() {
                        _this._renderCallback(), _this._animationFrame = null;
                    })), _this._blinkInterval = setInterval((function() {
                        if (_this._animationTimeRestarted) {
                            var time = 600 - (Date.now() - _this._animationTimeRestarted);
                            return _this._animationTimeRestarted = null, void _this._restartInterval(time);
                        }
                        _this.isCursorVisible = !_this.isCursorVisible, _this._animationFrame = window.requestAnimationFrame((function() {
                            _this._renderCallback(), _this._animationFrame = null;
                        }));
                    }), 600);
                }), timeToStart);
            }, CursorBlinkStateManager.prototype.pause = function() {
                this.isCursorVisible = !0, this._blinkInterval && (window.clearInterval(this._blinkInterval), 
                this._blinkInterval = null), this._blinkStartTimeout && (window.clearTimeout(this._blinkStartTimeout), 
                this._blinkStartTimeout = null), this._animationFrame && (window.cancelAnimationFrame(this._animationFrame), 
                this._animationFrame = null);
            }, CursorBlinkStateManager.prototype.resume = function(terminal) {
                this._animationTimeRestarted = null, this._restartInterval(), this.restartBlinkAnimation(terminal);
            }, CursorBlinkStateManager;
        }();
    },
    mtuk: function(module, exports, __webpack_require__) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        });
        var Platform_1 = __webpack_require__("5tIu"), Types_1 = __webpack_require__("2+Wn");
        function clearColor(imageData, color) {
            for (var isEmpty = !0, r = color.rgba >>> 24, g = color.rgba >>> 16 & 255, b = color.rgba >>> 8 & 255, offset = 0; offset < imageData.data.length; offset += 4) imageData.data[offset] === r && imageData.data[offset + 1] === g && imageData.data[offset + 2] === b ? imageData.data[offset + 3] = 0 : isEmpty = !1;
            return isEmpty;
        }
        function getFont(fontWeight, config) {
            return fontWeight + " " + config.fontSize * config.devicePixelRatio + "px " + config.fontFamily;
        }
        exports.generateStaticCharAtlasTexture = function(context, canvasFactory, config) {
            var cellWidth = config.scaledCharWidth + Types_1.CHAR_ATLAS_CELL_SPACING, cellHeight = config.scaledCharHeight + Types_1.CHAR_ATLAS_CELL_SPACING, canvas = canvasFactory(255 * cellWidth, 34 * cellHeight), ctx = canvas.getContext("2d", {
                alpha: config.allowTransparency
            });
            ctx.fillStyle = config.colors.background.css, ctx.fillRect(0, 0, canvas.width, canvas.height), 
            ctx.save(), ctx.fillStyle = config.colors.foreground.css, ctx.font = getFont(config.fontWeight, config), 
            ctx.textBaseline = "middle";
            for (var i = 0; i < 256; i++) ctx.save(), ctx.beginPath(), ctx.rect(i * cellWidth, 0, cellWidth, cellHeight), 
            ctx.clip(), ctx.fillText(String.fromCharCode(i), i * cellWidth, cellHeight / 2), 
            ctx.restore();
            for (ctx.save(), ctx.font = getFont(config.fontWeightBold, config), i = 0; i < 256; i++) ctx.save(), 
            ctx.beginPath(), ctx.rect(i * cellWidth, cellHeight, cellWidth, cellHeight), ctx.clip(), 
            ctx.fillText(String.fromCharCode(i), i * cellWidth, 1.5 * cellHeight), ctx.restore();
            ctx.restore(), ctx.font = getFont(config.fontWeight, config);
            for (var colorIndex = 0; colorIndex < 16; colorIndex++) {
                var y = (colorIndex + 2) * cellHeight;
                for (i = 0; i < 256; i++) ctx.save(), ctx.beginPath(), ctx.rect(i * cellWidth, y, cellWidth, cellHeight), 
                ctx.clip(), ctx.fillStyle = config.colors.ansi[colorIndex].css, ctx.fillText(String.fromCharCode(i), i * cellWidth, y + cellHeight / 2), 
                ctx.restore();
            }
            for (ctx.font = getFont(config.fontWeightBold, config), colorIndex = 0; colorIndex < 16; colorIndex++) for (y = (colorIndex + 2 + 16) * cellHeight, 
            i = 0; i < 256; i++) ctx.save(), ctx.beginPath(), ctx.rect(i * cellWidth, y, cellWidth, cellHeight), 
            ctx.clip(), ctx.fillStyle = config.colors.ansi[colorIndex].css, ctx.fillText(String.fromCharCode(i), i * cellWidth, y + cellHeight / 2), 
            ctx.restore();
            if (ctx.restore(), !("createImageBitmap" in context) || Platform_1.isFirefox || Platform_1.isSafari) return canvas;
            var charAtlasImageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
            return clearColor(charAtlasImageData, config.colors.background), context.createImageBitmap(charAtlasImageData);
        }, exports.clearColor = clearColor;
    },
    oQJG: function(module, exports, __webpack_require__) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        });
        var CompositionHelper = function() {
            function CompositionHelper(_textarea, _compositionView, _terminal) {
                this._textarea = _textarea, this._compositionView = _compositionView, this._terminal = _terminal, 
                this._isComposing = !1, this._isSendingComposition = !1, this._compositionPosition = {
                    start: null,
                    end: null
                };
            }
            return CompositionHelper.prototype.compositionstart = function() {
                this._isComposing = !0, this._compositionPosition.start = this._textarea.value.length, 
                this._compositionView.textContent = "", this._compositionView.classList.add("active");
            }, CompositionHelper.prototype.compositionupdate = function(ev) {
                var _this = this;
                this._compositionView.textContent = ev.data, this.updateCompositionElements(), setTimeout((function() {
                    _this._compositionPosition.end = _this._textarea.value.length;
                }), 0);
            }, CompositionHelper.prototype.compositionend = function() {
                this._finalizeComposition(!0);
            }, CompositionHelper.prototype.keydown = function(ev) {
                if (this._isComposing || this._isSendingComposition) {
                    if (229 === ev.keyCode) return !1;
                    if (16 === ev.keyCode || 17 === ev.keyCode || 18 === ev.keyCode) return !1;
                    this._finalizeComposition(!1);
                }
                return 229 !== ev.keyCode || (this._handleAnyTextareaChanges(), !1);
            }, CompositionHelper.prototype._finalizeComposition = function(waitForPropagation) {
                var _this = this;
                if (this._compositionView.classList.remove("active"), this._isComposing = !1, this._clearTextareaPosition(), 
                waitForPropagation) {
                    var currentCompositionPosition_1 = {
                        start: this._compositionPosition.start,
                        end: this._compositionPosition.end
                    };
                    this._isSendingComposition = !0, setTimeout((function() {
                        var input;
                        _this._isSendingComposition && (_this._isSendingComposition = !1, input = _this._isComposing ? _this._textarea.value.substring(currentCompositionPosition_1.start, currentCompositionPosition_1.end) : _this._textarea.value.substring(currentCompositionPosition_1.start), 
                        _this._terminal.handler(input));
                    }), 0);
                } else {
                    this._isSendingComposition = !1;
                    var input = this._textarea.value.substring(this._compositionPosition.start, this._compositionPosition.end);
                    this._terminal.handler(input);
                }
            }, CompositionHelper.prototype._handleAnyTextareaChanges = function() {
                var _this = this, oldValue = this._textarea.value;
                setTimeout((function() {
                    if (!_this._isComposing) {
                        var diff = _this._textarea.value.replace(oldValue, "");
                        diff.length > 0 && _this._terminal.handler(diff);
                    }
                }), 0);
            }, CompositionHelper.prototype.updateCompositionElements = function(dontRecurse) {
                var _this = this;
                if (this._isComposing) {
                    if (this._terminal.buffer.isCursorInViewport) {
                        var cellHeight = Math.ceil(this._terminal.charMeasure.height * this._terminal.options.lineHeight), cursorTop = this._terminal.buffer.y * cellHeight, cursorLeft = this._terminal.buffer.x * this._terminal.charMeasure.width;
                        this._compositionView.style.left = cursorLeft + "px", this._compositionView.style.top = cursorTop + "px", 
                        this._compositionView.style.height = cellHeight + "px", this._compositionView.style.lineHeight = cellHeight + "px", 
                        this._compositionView.style.fontFamily = this._terminal.options.fontFamily, this._compositionView.style.fontSize = this._terminal.options.fontSize + "px";
                        var compositionViewBounds = this._compositionView.getBoundingClientRect();
                        this._textarea.style.left = cursorLeft + "px", this._textarea.style.top = cursorTop + "px", 
                        this._textarea.style.width = compositionViewBounds.width + "px", this._textarea.style.height = compositionViewBounds.height + "px", 
                        this._textarea.style.lineHeight = compositionViewBounds.height + "px";
                    }
                    dontRecurse || setTimeout((function() {
                        return _this.updateCompositionElements(!0);
                    }), 0);
                }
            }, CompositionHelper.prototype._clearTextareaPosition = function() {
                this._textarea.style.left = "", this._textarea.style.top = "";
            }, CompositionHelper;
        }();
        exports.CompositionHelper = CompositionHelper;
    },
    oV0L: function(module, exports, __webpack_require__) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        });
        var TypedArrayUtils_1 = __webpack_require__("cxSQ");
        exports.wcwidth = function(opts) {
            var COMBINING_BMP = [ [ 768, 879 ], [ 1155, 1158 ], [ 1160, 1161 ], [ 1425, 1469 ], [ 1471, 1471 ], [ 1473, 1474 ], [ 1476, 1477 ], [ 1479, 1479 ], [ 1536, 1539 ], [ 1552, 1557 ], [ 1611, 1630 ], [ 1648, 1648 ], [ 1750, 1764 ], [ 1767, 1768 ], [ 1770, 1773 ], [ 1807, 1807 ], [ 1809, 1809 ], [ 1840, 1866 ], [ 1958, 1968 ], [ 2027, 2035 ], [ 2305, 2306 ], [ 2364, 2364 ], [ 2369, 2376 ], [ 2381, 2381 ], [ 2385, 2388 ], [ 2402, 2403 ], [ 2433, 2433 ], [ 2492, 2492 ], [ 2497, 2500 ], [ 2509, 2509 ], [ 2530, 2531 ], [ 2561, 2562 ], [ 2620, 2620 ], [ 2625, 2626 ], [ 2631, 2632 ], [ 2635, 2637 ], [ 2672, 2673 ], [ 2689, 2690 ], [ 2748, 2748 ], [ 2753, 2757 ], [ 2759, 2760 ], [ 2765, 2765 ], [ 2786, 2787 ], [ 2817, 2817 ], [ 2876, 2876 ], [ 2879, 2879 ], [ 2881, 2883 ], [ 2893, 2893 ], [ 2902, 2902 ], [ 2946, 2946 ], [ 3008, 3008 ], [ 3021, 3021 ], [ 3134, 3136 ], [ 3142, 3144 ], [ 3146, 3149 ], [ 3157, 3158 ], [ 3260, 3260 ], [ 3263, 3263 ], [ 3270, 3270 ], [ 3276, 3277 ], [ 3298, 3299 ], [ 3393, 3395 ], [ 3405, 3405 ], [ 3530, 3530 ], [ 3538, 3540 ], [ 3542, 3542 ], [ 3633, 3633 ], [ 3636, 3642 ], [ 3655, 3662 ], [ 3761, 3761 ], [ 3764, 3769 ], [ 3771, 3772 ], [ 3784, 3789 ], [ 3864, 3865 ], [ 3893, 3893 ], [ 3895, 3895 ], [ 3897, 3897 ], [ 3953, 3966 ], [ 3968, 3972 ], [ 3974, 3975 ], [ 3984, 3991 ], [ 3993, 4028 ], [ 4038, 4038 ], [ 4141, 4144 ], [ 4146, 4146 ], [ 4150, 4151 ], [ 4153, 4153 ], [ 4184, 4185 ], [ 4448, 4607 ], [ 4959, 4959 ], [ 5906, 5908 ], [ 5938, 5940 ], [ 5970, 5971 ], [ 6002, 6003 ], [ 6068, 6069 ], [ 6071, 6077 ], [ 6086, 6086 ], [ 6089, 6099 ], [ 6109, 6109 ], [ 6155, 6157 ], [ 6313, 6313 ], [ 6432, 6434 ], [ 6439, 6440 ], [ 6450, 6450 ], [ 6457, 6459 ], [ 6679, 6680 ], [ 6912, 6915 ], [ 6964, 6964 ], [ 6966, 6970 ], [ 6972, 6972 ], [ 6978, 6978 ], [ 7019, 7027 ], [ 7616, 7626 ], [ 7678, 7679 ], [ 8203, 8207 ], [ 8234, 8238 ], [ 8288, 8291 ], [ 8298, 8303 ], [ 8400, 8431 ], [ 12330, 12335 ], [ 12441, 12442 ], [ 43014, 43014 ], [ 43019, 43019 ], [ 43045, 43046 ], [ 64286, 64286 ], [ 65024, 65039 ], [ 65056, 65059 ], [ 65279, 65279 ], [ 65529, 65531 ] ], COMBINING_HIGH = [ [ 68097, 68099 ], [ 68101, 68102 ], [ 68108, 68111 ], [ 68152, 68154 ], [ 68159, 68159 ], [ 119143, 119145 ], [ 119155, 119170 ], [ 119173, 119179 ], [ 119210, 119213 ], [ 119362, 119364 ], [ 917505, 917505 ], [ 917536, 917631 ], [ 917760, 917999 ] ], control = 0 | opts.control, table = new Uint8Array(65536);
            TypedArrayUtils_1.fill(table, 1), table[0] = opts.nul, TypedArrayUtils_1.fill(table, opts.control, 1, 32), 
            TypedArrayUtils_1.fill(table, opts.control, 127, 160), TypedArrayUtils_1.fill(table, 2, 4352, 4448), 
            table[9001] = 2, table[9002] = 2, TypedArrayUtils_1.fill(table, 2, 11904, 42192), 
            table[12351] = 1, TypedArrayUtils_1.fill(table, 2, 44032, 55204), TypedArrayUtils_1.fill(table, 2, 63744, 64256), 
            TypedArrayUtils_1.fill(table, 2, 65040, 65050), TypedArrayUtils_1.fill(table, 2, 65072, 65136), 
            TypedArrayUtils_1.fill(table, 2, 65280, 65377), TypedArrayUtils_1.fill(table, 2, 65504, 65511);
            for (var r = 0; r < COMBINING_BMP.length; ++r) TypedArrayUtils_1.fill(table, 0, COMBINING_BMP[r][0], COMBINING_BMP[r][1] + 1);
            return function(num) {
                return num < 32 ? 0 | control : num < 127 ? 1 : num < 65536 ? table[num] : function(ucs, data) {
                    var mid, min = 0, max = data.length - 1;
                    if (ucs < data[0][0] || ucs > data[max][1]) return !1;
                    for (;max >= min; ) if (ucs > data[mid = min + max >> 1][1]) min = mid + 1; else {
                        if (!(ucs < data[mid][0])) return !0;
                        max = mid - 1;
                    }
                    return !1;
                }(ucs = num, COMBINING_HIGH) ? 0 : ucs >= 131072 && ucs <= 196605 || ucs >= 196608 && ucs <= 262141 ? 2 : 1;
                var ucs;
            };
        }({
            nul: 0,
            control: 0
        }), exports.getStringCellWidth = function(s) {
            for (var result = 0, length = s.length, i = 0; i < length; ++i) {
                var code = s.charCodeAt(i);
                if (55296 <= code && code <= 56319) {
                    if (++i >= length) return result + exports.wcwidth(code);
                    var second = s.charCodeAt(i);
                    56320 <= second && second <= 57343 ? code = 1024 * (code - 55296) + second - 56320 + 65536 : result += exports.wcwidth(second);
                }
                result += exports.wcwidth(code);
            }
            return result;
        };
    },
    paPD: function(module, exports, __webpack_require__) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports.CHARSETS = {}, exports.DEFAULT_CHARSET = exports.CHARSETS.B, exports.CHARSETS[0] = {
            "`": "◆",
            a: "▒",
            b: "\t",
            c: "\f",
            d: "\r",
            e: "\n",
            f: "°",
            g: "±",
            h: "␤",
            i: "\v",
            j: "┘",
            k: "┐",
            l: "┌",
            m: "└",
            n: "┼",
            o: "⎺",
            p: "⎻",
            q: "─",
            r: "⎼",
            s: "⎽",
            t: "├",
            u: "┤",
            v: "┴",
            w: "┬",
            x: "│",
            y: "≤",
            z: "≥",
            "{": "π",
            "|": "≠",
            "}": "£",
            "~": "·"
        }, exports.CHARSETS.A = {
            "#": "£"
        }, exports.CHARSETS.B = null, exports.CHARSETS[4] = {
            "#": "£",
            "@": "¾",
            "[": "ij",
            "\\": "½",
            "]": "|",
            "{": "¨",
            "|": "f",
            "}": "¼",
            "~": "´"
        }, exports.CHARSETS.C = exports.CHARSETS[5] = {
            "[": "Ä",
            "\\": "Ö",
            "]": "Å",
            "^": "Ü",
            "`": "é",
            "{": "ä",
            "|": "ö",
            "}": "å",
            "~": "ü"
        }, exports.CHARSETS.R = {
            "#": "£",
            "@": "à",
            "[": "°",
            "\\": "ç",
            "]": "§",
            "{": "é",
            "|": "ù",
            "}": "è",
            "~": "¨"
        }, exports.CHARSETS.Q = {
            "@": "à",
            "[": "â",
            "\\": "ç",
            "]": "ê",
            "^": "î",
            "`": "ô",
            "{": "é",
            "|": "ù",
            "}": "è",
            "~": "û"
        }, exports.CHARSETS.K = {
            "@": "§",
            "[": "Ä",
            "\\": "Ö",
            "]": "Ü",
            "{": "ä",
            "|": "ö",
            "}": "ü",
            "~": "ß"
        }, exports.CHARSETS.Y = {
            "#": "£",
            "@": "§",
            "[": "°",
            "\\": "ç",
            "]": "é",
            "`": "ù",
            "{": "à",
            "|": "ò",
            "}": "è",
            "~": "ì"
        }, exports.CHARSETS.E = exports.CHARSETS[6] = {
            "@": "Ä",
            "[": "Æ",
            "\\": "Ø",
            "]": "Å",
            "^": "Ü",
            "`": "ä",
            "{": "æ",
            "|": "ø",
            "}": "å",
            "~": "ü"
        }, exports.CHARSETS.Z = {
            "#": "£",
            "@": "§",
            "[": "¡",
            "\\": "Ñ",
            "]": "¿",
            "{": "°",
            "|": "ñ",
            "}": "ç"
        }, exports.CHARSETS.H = exports.CHARSETS[7] = {
            "@": "É",
            "[": "Ä",
            "\\": "Ö",
            "]": "Å",
            "^": "Ü",
            "`": "é",
            "{": "ä",
            "|": "ö",
            "}": "å",
            "~": "ü"
        }, exports.CHARSETS["="] = {
            "#": "ù",
            "@": "à",
            "[": "é",
            "\\": "ç",
            "]": "ê",
            "^": "î",
            _: "è",
            "`": "ô",
            "{": "ä",
            "|": "ö",
            "}": "ü",
            "~": "û"
        };
    },
    pkdz: function(module, exports, __webpack_require__) {
        "use strict";
        var extendStatics, __extends = this && this.__extends || (extendStatics = function(d, b) {
            return (extendStatics = Object.setPrototypeOf || {
                __proto__: []
            } instanceof Array && function(d, b) {
                d.__proto__ = b;
            } || function(d, b) {
                for (var p in b) b.hasOwnProperty(p) && (d[p] = b[p]);
            })(d, b);
        }, function(d, b) {
            function __() {
                this.constructor = d;
            }
            extendStatics(d, b), d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, 
            new __);
        });
        Object.defineProperty(exports, "__esModule", {
            value: !0
        });
        var BufferSet_1 = __webpack_require__("9qiJ"), Buffer_1 = __webpack_require__("MsZC"), CompositionHelper_1 = __webpack_require__("oQJG"), EventEmitter_1 = __webpack_require__("iE+m"), Viewport_1 = __webpack_require__("+0l7"), Clipboard_1 = __webpack_require__("IjFs"), EscapeSequences_1 = __webpack_require__("dog+"), InputHandler_1 = __webpack_require__("4s8G"), Renderer_1 = __webpack_require__("PtnK"), Linkifier_1 = __webpack_require__("v+jr"), SelectionManager_1 = __webpack_require__("iNX9"), CharMeasure_1 = __webpack_require__("7jsR"), Browser = __webpack_require__("5tIu"), Lifecycle_1 = __webpack_require__("N7yj"), Strings = __webpack_require__("hqvf"), MouseHelper_1 = __webpack_require__("x658"), SoundManager_1 = __webpack_require__("VAzd"), MouseZoneManager_1 = __webpack_require__("0J8d"), AccessibilityManager_1 = __webpack_require__("Im2J"), CharAtlasCache_1 = __webpack_require__("T4hZ"), DomRenderer_1 = __webpack_require__("MTJE"), Keyboard_1 = __webpack_require__("QVly"), Clone_1 = __webpack_require__("C+Ro"), EventEmitter2_1 = __webpack_require__("Fn1x"), BufferLine_1 = __webpack_require__("XMT/"), WindowsMode_1 = __webpack_require__("+uZM"), ColorManager_1 = __webpack_require__("lbDW"), RenderCoordinator_1 = __webpack_require__("iknm"), document = "undefined" != typeof window ? window.document : null, CONSTRUCTOR_ONLY_OPTIONS = [ "cols", "rows" ], DEFAULT_OPTIONS = {
            cols: 80,
            rows: 24,
            convertEol: !1,
            termName: "xterm",
            cursorBlink: !1,
            cursorStyle: "block",
            bellSound: SoundManager_1.DEFAULT_BELL_SOUND,
            bellStyle: "none",
            drawBoldTextInBrightColors: !0,
            enableBold: !0,
            experimentalCharAtlas: "static",
            fontFamily: "courier-new, courier, monospace",
            fontSize: 15,
            fontWeight: "normal",
            fontWeightBold: "bold",
            lineHeight: 1,
            letterSpacing: 0,
            scrollback: 1e3,
            screenKeys: !1,
            screenReaderMode: !1,
            debug: !1,
            macOptionIsMeta: !1,
            macOptionClickForcesSelection: !1,
            cancelEvents: !1,
            disableStdin: !1,
            useFlowControl: !1,
            allowTransparency: !1,
            tabStopWidth: 8,
            theme: void 0,
            rightClickSelectsWord: Browser.isMac,
            rendererType: "canvas",
            windowsMode: !1
        }, Terminal = function(_super) {
            function Terminal(options) {
                void 0 === options && (options = {});
                var _this = _super.call(this) || this;
                return _this.browser = Browser, _this._blankLine = null, _this._onCursorMove = new EventEmitter2_1.EventEmitter2, 
                _this._onData = new EventEmitter2_1.EventEmitter2, _this._onKey = new EventEmitter2_1.EventEmitter2, 
                _this._onLineFeed = new EventEmitter2_1.EventEmitter2, _this._onRender = new EventEmitter2_1.EventEmitter2, 
                _this._onResize = new EventEmitter2_1.EventEmitter2, _this._onScroll = new EventEmitter2_1.EventEmitter2, 
                _this._onSelectionChange = new EventEmitter2_1.EventEmitter2, _this._onTitleChange = new EventEmitter2_1.EventEmitter2, 
                _this.options = Clone_1.clone(options), _this._setup(), _this.onCursorMove((function() {
                    return _this.emit("cursormove");
                })), _this.onData((function(e) {
                    return _this.emit("data", e);
                })), _this.onKey((function(e) {
                    return _this.emit("key", e.key, e.domEvent);
                })), _this.onLineFeed((function() {
                    return _this.emit("linefeed");
                })), _this.onRender((function(e) {
                    return _this.emit("refresh", e);
                })), _this.onResize((function(e) {
                    return _this.emit("resize", e);
                })), _this.onSelectionChange((function() {
                    return _this.emit("selection");
                })), _this.onScroll((function(e) {
                    return _this.emit("scroll", e);
                })), _this.onTitleChange((function(e) {
                    return _this.emit("title", e);
                })), _this;
            }
            return __extends(Terminal, _super), Object.defineProperty(Terminal.prototype, "onCursorMove", {
                get: function() {
                    return this._onCursorMove.event;
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(Terminal.prototype, "onData", {
                get: function() {
                    return this._onData.event;
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(Terminal.prototype, "onKey", {
                get: function() {
                    return this._onKey.event;
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(Terminal.prototype, "onLineFeed", {
                get: function() {
                    return this._onLineFeed.event;
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(Terminal.prototype, "onRender", {
                get: function() {
                    return this._onRender.event;
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(Terminal.prototype, "onResize", {
                get: function() {
                    return this._onResize.event;
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(Terminal.prototype, "onScroll", {
                get: function() {
                    return this._onScroll.event;
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(Terminal.prototype, "onSelectionChange", {
                get: function() {
                    return this._onSelectionChange.event;
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(Terminal.prototype, "onTitleChange", {
                get: function() {
                    return this._onTitleChange.event;
                },
                enumerable: !0,
                configurable: !0
            }), Terminal.prototype.dispose = function() {
                _super.prototype.dispose.call(this), this._windowsMode && (this._windowsMode.dispose(), 
                this._windowsMode = void 0), this._customKeyEventHandler = null, CharAtlasCache_1.removeTerminalFromCache(this), 
                this.handler = function() {}, this.write = function() {}, this.element && this.element.parentNode && this.element.parentNode.removeChild(this.element);
            }, Terminal.prototype.destroy = function() {
                this.dispose();
            }, Terminal.prototype._setup = function() {
                var _this = this;
                Object.keys(DEFAULT_OPTIONS).forEach((function(key) {
                    null == _this.options[key] && (_this.options[key] = DEFAULT_OPTIONS[key]);
                })), this._parent = document ? document.body : null, this.cols = Math.max(this.options.cols, 2), 
                this.rows = Math.max(this.options.rows, 1), this.options.handler && this.onData(this.options.handler), 
                this.cursorState = 0, this.cursorHidden = !1, this._customKeyEventHandler = null, 
                this.applicationKeypad = !1, this.applicationCursor = !1, this.originMode = !1, 
                this.insertMode = !1, this.wraparoundMode = !0, this.bracketedPasteMode = !1, this.charset = null, 
                this.gcharset = null, this.glevel = 0, this.charsets = [ null ], this.curAttrData = BufferLine_1.DEFAULT_ATTR_DATA.clone(), 
                this._eraseAttrData = BufferLine_1.DEFAULT_ATTR_DATA.clone(), this.params = [], 
                this.currentParam = 0, this.writeBuffer = [], this.writeBufferUtf8 = [], this._writeInProgress = !1, 
                this._xoffSentToCatchUp = !1, this._userScrolling = !1, this._inputHandler = new InputHandler_1.InputHandler(this), 
                this._inputHandler.onCursorMove((function() {
                    return _this._onCursorMove.fire();
                })), this._inputHandler.onLineFeed((function() {
                    return _this._onLineFeed.fire();
                })), this._inputHandler.onData((function(e) {
                    return _this._onData.fire(e);
                })), this.register(this._inputHandler), this.selectionManager = this.selectionManager || null, 
                this.linkifier = this.linkifier || new Linkifier_1.Linkifier(this), this._mouseZoneManager = this._mouseZoneManager || null, 
                this.soundManager = this.soundManager || new SoundManager_1.SoundManager(this), 
                this.buffers = new BufferSet_1.BufferSet(this), this.selectionManager && (this.selectionManager.clearSelection(), 
                this.selectionManager.initBuffersListeners()), this.options.windowsMode && (this._windowsMode = WindowsMode_1.applyWindowsMode(this));
            }, Object.defineProperty(Terminal.prototype, "buffer", {
                get: function() {
                    return this.buffers.active;
                },
                enumerable: !0,
                configurable: !0
            }), Terminal.prototype.eraseAttrData = function() {
                return this._eraseAttrData.bg &= -67108864, this._eraseAttrData.bg |= 67108863 & this.curAttrData.bg, 
                this._eraseAttrData;
            }, Terminal.prototype.focus = function() {
                this.textarea && this.textarea.focus({
                    preventScroll: !0
                });
            }, Object.defineProperty(Terminal.prototype, "isFocused", {
                get: function() {
                    return document.activeElement === this.textarea && document.hasFocus();
                },
                enumerable: !0,
                configurable: !0
            }), Terminal.prototype.getOption = function(key) {
                if (!(key in DEFAULT_OPTIONS)) throw new Error('No option with key "' + key + '"');
                return this.options[key];
            }, Terminal.prototype.setOption = function(key, value) {
                if (!(key in DEFAULT_OPTIONS)) throw new Error('No option with key "' + key + '"');
                if (-1 !== CONSTRUCTOR_ONLY_OPTIONS.indexOf(key) && console.error('Option "' + key + '" can only be set in the constructor'), 
                this.options[key] !== value) {
                    switch (key) {
                      case "bellStyle":
                        value || (value = "none");
                        break;

                      case "cursorStyle":
                        value || (value = "block");
                        break;

                      case "fontWeight":
                        value || (value = "normal");
                        break;

                      case "fontWeightBold":
                        value || (value = "bold");
                        break;

                      case "lineHeight":
                        if (value < 1) return void console.warn(key + " cannot be less than 1, value: " + value);

                      case "rendererType":
                        value || (value = "canvas");
                        break;

                      case "tabStopWidth":
                        if (value < 1) return void console.warn(key + " cannot be less than 1, value: " + value);
                        break;

                      case "theme":
                        this._setTheme(value);
                        break;

                      case "scrollback":
                        if ((value = Math.min(value, Buffer_1.MAX_BUFFER_SIZE)) < 0) return void console.warn(key + " cannot be less than 0, value: " + value);
                        if (this.options[key] !== value) {
                            var newBufferLength = this.rows + value;
                            if (this.buffer.lines.length > newBufferLength) {
                                var amountToTrim = this.buffer.lines.length - newBufferLength, needsRefresh = this.buffer.ydisp - amountToTrim < 0;
                                this.buffer.lines.trimStart(amountToTrim), this.buffer.ybase = Math.max(this.buffer.ybase - amountToTrim, 0), 
                                this.buffer.ydisp = Math.max(this.buffer.ydisp - amountToTrim, 0), needsRefresh && this.refresh(0, this.rows - 1);
                            }
                        }
                    }
                    switch (this.options[key] = value, key) {
                      case "fontFamily":
                      case "fontSize":
                        this._renderCoordinator && (this._renderCoordinator.clear(), this.charMeasure.measure(this.options));
                        break;

                      case "drawBoldTextInBrightColors":
                      case "experimentalCharAtlas":
                      case "enableBold":
                      case "letterSpacing":
                      case "lineHeight":
                      case "fontWeight":
                      case "fontWeightBold":
                        this._renderCoordinator && (this._renderCoordinator.clear(), this._renderCoordinator.onResize(this.cols, this.rows), 
                        this.refresh(0, this.rows - 1));
                        break;

                      case "rendererType":
                        this._renderCoordinator && this._renderCoordinator.setRenderer(this._createRenderer());
                        break;

                      case "scrollback":
                        this.buffers.resize(this.cols, this.rows), this.viewport && this.viewport.syncScrollArea();
                        break;

                      case "screenReaderMode":
                        value ? !this._accessibilityManager && this._renderCoordinator && (this._accessibilityManager = new AccessibilityManager_1.AccessibilityManager(this, this._renderCoordinator.dimensions)) : this._accessibilityManager && (this._accessibilityManager.dispose(), 
                        this._accessibilityManager = null);
                        break;

                      case "tabStopWidth":
                        this.buffers.setupTabStops();
                        break;

                      case "windowsMode":
                        value ? this._windowsMode || (this._windowsMode = WindowsMode_1.applyWindowsMode(this)) : this._windowsMode && (this._windowsMode.dispose(), 
                        this._windowsMode = void 0);
                    }
                    this._renderCoordinator && this._renderCoordinator.onOptionsChanged();
                }
            }, Terminal.prototype._onTextAreaFocus = function(ev) {
                this.sendFocus && this.handler(EscapeSequences_1.C0.ESC + "[I"), this.updateCursorStyle(ev), 
                this.element.classList.add("focus"), this.showCursor(), this.emit("focus");
            }, Terminal.prototype.blur = function() {
                return this.textarea.blur();
            }, Terminal.prototype._onTextAreaBlur = function() {
                this.textarea.value = "", this.refresh(this.buffer.y, this.buffer.y), this.sendFocus && this.handler(EscapeSequences_1.C0.ESC + "[O"), 
                this.element.classList.remove("focus"), this.emit("blur");
            }, Terminal.prototype._initGlobal = function() {
                var _this = this;
                this._bindKeys(), this.register(Lifecycle_1.addDisposableDomListener(this.element, "copy", (function(event) {
                    _this.hasSelection() && Clipboard_1.copyHandler(event, _this, _this.selectionManager);
                })));
                var pasteHandlerWrapper = function(event) {
                    return Clipboard_1.pasteHandler(event, _this);
                };
                this.register(Lifecycle_1.addDisposableDomListener(this.textarea, "paste", pasteHandlerWrapper)), 
                this.register(Lifecycle_1.addDisposableDomListener(this.element, "paste", pasteHandlerWrapper)), 
                this.register(Browser.isFirefox ? Lifecycle_1.addDisposableDomListener(this.element, "mousedown", (function(event) {
                    2 === event.button && Clipboard_1.rightClickHandler(event, _this, _this.selectionManager, _this.options.rightClickSelectsWord);
                })) : Lifecycle_1.addDisposableDomListener(this.element, "contextmenu", (function(event) {
                    Clipboard_1.rightClickHandler(event, _this, _this.selectionManager, _this.options.rightClickSelectsWord);
                }))), Browser.isLinux && this.register(Lifecycle_1.addDisposableDomListener(this.element, "auxclick", (function(event) {
                    1 === event.button && Clipboard_1.moveTextAreaUnderMouseCursor(event, _this);
                })));
            }, Terminal.prototype._bindKeys = function() {
                var _this = this, self = this;
                this.register(Lifecycle_1.addDisposableDomListener(this.element, "keydown", (function(ev) {
                    document.activeElement === this && self._keyDown(ev);
                }), !0)), this.register(Lifecycle_1.addDisposableDomListener(this.element, "keypress", (function(ev) {
                    document.activeElement === this && self._keyPress(ev);
                }), !0)), this.register(Lifecycle_1.addDisposableDomListener(this.element, "keyup", (function(ev) {
                    (function(ev) {
                        return 16 === ev.keyCode || 17 === ev.keyCode || 18 === ev.keyCode;
                    })(ev) || _this.focus(), self._keyUp(ev);
                }), !0)), this.register(Lifecycle_1.addDisposableDomListener(this.textarea, "keydown", (function(ev) {
                    return _this._keyDown(ev);
                }), !0)), this.register(Lifecycle_1.addDisposableDomListener(this.textarea, "keypress", (function(ev) {
                    return _this._keyPress(ev);
                }), !0)), this.register(Lifecycle_1.addDisposableDomListener(this.textarea, "compositionstart", (function() {
                    return _this._compositionHelper.compositionstart();
                }))), this.register(Lifecycle_1.addDisposableDomListener(this.textarea, "compositionupdate", (function(e) {
                    return _this._compositionHelper.compositionupdate(e);
                }))), this.register(Lifecycle_1.addDisposableDomListener(this.textarea, "compositionend", (function() {
                    return _this._compositionHelper.compositionend();
                }))), this.register(this.onRender((function() {
                    return _this._compositionHelper.updateCompositionElements();
                }))), this.register(this.onRender((function(e) {
                    return _this._queueLinkification(e.start, e.end);
                })));
            }, Terminal.prototype.open = function(parent) {
                var _this = this;
                if (this._parent = parent || this._parent, !this._parent) throw new Error("Terminal requires a parent element.");
                this._context = this._parent.ownerDocument.defaultView, this._document = this._parent.ownerDocument, 
                this.element = this._document.createElement("div"), this.element.dir = "ltr", this.element.classList.add("terminal"), 
                this.element.classList.add("xterm"), this.element.setAttribute("tabindex", "0"), 
                this._parent.appendChild(this.element);
                var fragment = document.createDocumentFragment();
                this._viewportElement = document.createElement("div"), this._viewportElement.classList.add("xterm-viewport"), 
                fragment.appendChild(this._viewportElement), this._viewportScrollArea = document.createElement("div"), 
                this._viewportScrollArea.classList.add("xterm-scroll-area"), this._viewportElement.appendChild(this._viewportScrollArea), 
                this.screenElement = document.createElement("div"), this.screenElement.classList.add("xterm-screen"), 
                this._helperContainer = document.createElement("div"), this._helperContainer.classList.add("xterm-helpers"), 
                this.screenElement.appendChild(this._helperContainer), fragment.appendChild(this.screenElement), 
                this._mouseZoneManager = new MouseZoneManager_1.MouseZoneManager(this), this.register(this._mouseZoneManager), 
                this.register(this.onScroll((function() {
                    return _this._mouseZoneManager.clearAll();
                }))), this.linkifier.attachToDom(this._mouseZoneManager), this.textarea = document.createElement("textarea"), 
                this.textarea.classList.add("xterm-helper-textarea"), this.textarea.setAttribute("aria-label", Strings.promptLabel), 
                this.textarea.setAttribute("aria-multiline", "false"), this.textarea.setAttribute("autocorrect", "off"), 
                this.textarea.setAttribute("autocapitalize", "off"), this.textarea.setAttribute("spellcheck", "false"), 
                this.textarea.tabIndex = 0, this.register(Lifecycle_1.addDisposableDomListener(this.textarea, "focus", (function(ev) {
                    return _this._onTextAreaFocus(ev);
                }))), this.register(Lifecycle_1.addDisposableDomListener(this.textarea, "blur", (function() {
                    return _this._onTextAreaBlur();
                }))), this._helperContainer.appendChild(this.textarea), this._compositionView = document.createElement("div"), 
                this._compositionView.classList.add("composition-view"), this._compositionHelper = new CompositionHelper_1.CompositionHelper(this.textarea, this._compositionView, this), 
                this._helperContainer.appendChild(this._compositionView), this.charMeasure = new CharMeasure_1.CharMeasure(document, this._helperContainer), 
                this.element.appendChild(fragment), this._theme = this.options.theme, this._colorManager = new ColorManager_1.ColorManager(document, this.options.allowTransparency), 
                this._colorManager.setTheme(this._theme);
                var renderer = this._createRenderer();
                this._renderCoordinator = new RenderCoordinator_1.RenderCoordinator(renderer, this.rows, this.screenElement), 
                this._renderCoordinator.onRender((function(e) {
                    return _this._onRender.fire(e);
                })), this.onResize((function(e) {
                    return _this._renderCoordinator.resize(e.cols, e.rows);
                })), this.viewport = new Viewport_1.Viewport(this, this._viewportElement, this._viewportScrollArea, this.charMeasure, this._renderCoordinator.dimensions), 
                this.viewport.onThemeChange(this._colorManager.colors), this.register(this.viewport), 
                this.register(this.onCursorMove((function() {
                    return _this._renderCoordinator.onCursorMove();
                }))), this.register(this.onResize((function() {
                    return _this._renderCoordinator.onResize(_this.cols, _this.rows);
                }))), this.register(this.addDisposableListener("blur", (function() {
                    return _this._renderCoordinator.onBlur();
                }))), this.register(this.addDisposableListener("focus", (function() {
                    return _this._renderCoordinator.onFocus();
                }))), this.register(this.charMeasure.onCharSizeChanged((function() {
                    return _this._renderCoordinator.onCharSizeChanged();
                }))), this.register(this._renderCoordinator.onDimensionsChange((function() {
                    return _this.viewport.syncScrollArea();
                }))), this.selectionManager = new SelectionManager_1.SelectionManager(this, this.charMeasure), 
                this.register(this.selectionManager.onSelectionChange((function() {
                    return _this._onSelectionChange.fire();
                }))), this.register(Lifecycle_1.addDisposableDomListener(this.element, "mousedown", (function(e) {
                    return _this.selectionManager.onMouseDown(e);
                }))), this.register(this.selectionManager.onRedrawRequest((function(e) {
                    return _this._renderCoordinator.onSelectionChanged(e.start, e.end, e.columnSelectMode);
                }))), this.register(this.selectionManager.onLinuxMouseSelection((function(text) {
                    _this.textarea.value = text, _this.textarea.focus(), _this.textarea.select();
                }))), this.register(this.onScroll((function() {
                    _this.viewport.syncScrollArea(), _this.selectionManager.refresh();
                }))), this.register(Lifecycle_1.addDisposableDomListener(this._viewportElement, "scroll", (function() {
                    return _this.selectionManager.refresh();
                }))), this.mouseHelper = new MouseHelper_1.MouseHelper(this._renderCoordinator), 
                this.element.classList.toggle("enable-mouse-events", this.mouseEvents), this.mouseEvents ? this.selectionManager.disable() : this.selectionManager.enable(), 
                this.options.screenReaderMode && (this._accessibilityManager = new AccessibilityManager_1.AccessibilityManager(this, this._renderCoordinator.dimensions), 
                this._accessibilityManager.register(this._renderCoordinator.onDimensionsChange((function(e) {
                    return _this._accessibilityManager.setDimensions(e);
                })))), this.charMeasure.measure(this.options), this.refresh(0, this.rows - 1), this._initGlobal(), 
                this.bindMouse();
            }, Terminal.prototype._createRenderer = function() {
                switch (this.options.rendererType) {
                  case "canvas":
                    return new Renderer_1.Renderer(this, this._colorManager.colors);

                  case "dom":
                    return new DomRenderer_1.DomRenderer(this, this._colorManager.colors);

                  default:
                    throw new Error('Unrecognized rendererType "' + this.options.rendererType + '"');
                }
            }, Terminal.prototype._setTheme = function(theme) {
                this._theme = theme, this._colorManager && this._colorManager.setTheme(theme), this._renderCoordinator && this._renderCoordinator.setColors(this._colorManager.colors), 
                this.viewport && this.viewport.onThemeChange(this._colorManager.colors);
            }, Terminal.prototype.bindMouse = function() {
                var _this = this, el = this.element, self = this, pressed = 32;
                function sendButton(ev) {
                    var button, pos;
                    if (button = function(ev) {
                        var button, ctrl, mod;
                        switch (ev.overrideType || ev.type) {
                          case "mousedown":
                            button = null != ev.button ? +ev.button : null != ev.which ? ev.which - 1 : null, 
                            Browser.isMSIE && (button = 1 === button ? 0 : 4 === button ? 1 : button);
                            break;

                          case "mouseup":
                            button = 3;
                            break;

                          case "DOMMouseScroll":
                            button = ev.detail < 0 ? 64 : 65;
                            break;

                          case "wheel":
                            button = ev.deltaY < 0 ? 64 : 65;
                        }
                        return mod = (ev.shiftKey ? 4 : 0) | (ev.metaKey ? 8 : 0) | (ctrl = ev.ctrlKey ? 16 : 0), 
                        self.vt200Mouse ? mod &= ctrl : self.normalMouse || (mod = 0), 32 + (mod << 2) + button;
                    }(ev), pos = self.mouseHelper.getRawByteCoords(ev, self.screenElement, self.charMeasure, self.cols, self.rows)) switch (sendEvent(button, pos), 
                    ev.overrideType || ev.type) {
                      case "mousedown":
                        pressed = button;
                        break;

                      case "mouseup":
                        pressed = 32;
                    }
                }
                function encode(data, ch) {
                    if (self.utfMouse) {
                        if (ch > 2047) return void data.push(2047);
                        data.push(ch);
                    } else {
                        if (255 === ch) return void data.push(0);
                        ch > 127 && (ch = 127), data.push(ch);
                    }
                }
                function sendEvent(button, pos) {
                    if (self._vt300Mouse) {
                        button &= 3, pos.x -= 32, pos.y -= 32;
                        var data_1 = EscapeSequences_1.C0.ESC + "[24";
                        if (0 === button) data_1 += "1"; else if (1 === button) data_1 += "3"; else if (2 === button) data_1 += "5"; else {
                            if (3 === button) return;
                            data_1 += "0";
                        }
                        self.handler(data_1 += "~[" + pos.x + "," + pos.y + "]\r");
                    } else {
                        if (self._decLocator) return button &= 3, pos.x -= 32, pos.y -= 32, 0 === button ? button = 2 : 1 === button ? button = 4 : 2 === button ? button = 6 : 3 === button && (button = 3), 
                        void self.handler(EscapeSequences_1.C0.ESC + "[" + button + ";" + (3 === button ? 4 : 0) + ";" + pos.y + ";" + pos.x + ";" + pos.page || "0&w");
                        if (self.urxvtMouse) return pos.x -= 32, pos.y -= 32, pos.x++, pos.y++, void self.handler(EscapeSequences_1.C0.ESC + "[" + button + ";" + pos.x + ";" + pos.y + "M");
                        if (self.sgrMouse) return pos.x -= 32, pos.y -= 32, void self.handler(EscapeSequences_1.C0.ESC + "[<" + ((3 == (3 & button) ? -4 & button : button) - 32) + ";" + pos.x + ";" + pos.y + (3 == (3 & button) ? "m" : "M"));
                        var data = [];
                        encode(data, button), encode(data, pos.x), encode(data, pos.y), self.handler(EscapeSequences_1.C0.ESC + "[M" + String.fromCharCode.apply(String, data));
                    }
                }
                this.register(Lifecycle_1.addDisposableDomListener(el, "mousedown", (function(ev) {
                    if (ev.preventDefault(), _this.focus(), _this.mouseEvents && !_this.selectionManager.shouldForceSelection(ev)) {
                        if (sendButton(ev), _this.vt200Mouse) return ev.overrideType = "mouseup", sendButton(ev), 
                        _this.cancel(ev);
                        var moveHandler;
                        _this.normalMouse && _this._document.addEventListener("mousemove", moveHandler = function(event) {
                            _this.normalMouse && function(ev) {
                                var button = pressed, pos = self.mouseHelper.getRawByteCoords(ev, self.screenElement, self.charMeasure, self.cols, self.rows);
                                pos && sendEvent(button += 32, pos);
                            }(event);
                        });
                        var handler = function(ev) {
                            return _this.normalMouse && !_this.x10Mouse && sendButton(ev), moveHandler && (_this._document.removeEventListener("mousemove", moveHandler), 
                            moveHandler = null), _this._document.removeEventListener("mouseup", handler), _this.cancel(ev);
                        };
                        return _this._document.addEventListener("mouseup", handler), _this.cancel(ev);
                    }
                }))), this.register(Lifecycle_1.addDisposableDomListener(el, "wheel", (function(ev) {
                    if (_this.mouseEvents) _this.x10Mouse || _this._vt300Mouse || _this._decLocator || (sendButton(ev), 
                    ev.preventDefault()); else if (!_this.buffer.hasScrollback) {
                        var amount = _this.viewport.getLinesScrolled(ev);
                        if (0 === amount) return;
                        for (var sequence = EscapeSequences_1.C0.ESC + (_this.applicationCursor ? "O" : "[") + (ev.deltaY < 0 ? "A" : "B"), data = "", i = 0; i < Math.abs(amount); i++) data += sequence;
                        _this.handler(data);
                    }
                }))), this.register(Lifecycle_1.addDisposableDomListener(el, "wheel", (function(ev) {
                    if (!_this.mouseEvents) return _this.viewport.onWheel(ev), _this.cancel(ev);
                }))), this.register(Lifecycle_1.addDisposableDomListener(el, "touchstart", (function(ev) {
                    if (!_this.mouseEvents) return _this.viewport.onTouchStart(ev), _this.cancel(ev);
                }))), this.register(Lifecycle_1.addDisposableDomListener(el, "touchmove", (function(ev) {
                    if (!_this.mouseEvents) return _this.viewport.onTouchMove(ev), _this.cancel(ev);
                })));
            }, Terminal.prototype.refresh = function(start, end) {
                this._renderCoordinator && this._renderCoordinator.refreshRows(start, end);
            }, Terminal.prototype._queueLinkification = function(start, end) {
                this.linkifier && this.linkifier.linkifyRows(start, end);
            }, Terminal.prototype.updateCursorStyle = function(ev) {
                this.selectionManager && this.selectionManager.shouldColumnSelect(ev) ? this.element.classList.add("column-select") : this.element.classList.remove("column-select");
            }, Terminal.prototype.showCursor = function() {
                this.cursorState || (this.cursorState = 1, this.refresh(this.buffer.y, this.buffer.y));
            }, Terminal.prototype.scroll = function(isWrapped) {
                var newLine;
                void 0 === isWrapped && (isWrapped = !1), newLine = this._blankLine;
                var eraseAttr = this.eraseAttrData();
                newLine && newLine.length === this.cols && newLine.getFg(0) === eraseAttr.fg && newLine.getBg(0) === eraseAttr.bg || (newLine = this.buffer.getBlankLine(eraseAttr, isWrapped), 
                this._blankLine = newLine), newLine.isWrapped = isWrapped;
                var topRow = this.buffer.ybase + this.buffer.scrollTop, bottomRow = this.buffer.ybase + this.buffer.scrollBottom;
                if (0 === this.buffer.scrollTop) {
                    var willBufferBeTrimmed = this.buffer.lines.isFull;
                    bottomRow === this.buffer.lines.length - 1 ? willBufferBeTrimmed ? this.buffer.lines.recycle().copyFrom(newLine) : this.buffer.lines.push(newLine.clone()) : this.buffer.lines.splice(bottomRow + 1, 0, newLine.clone()), 
                    willBufferBeTrimmed ? this._userScrolling && (this.buffer.ydisp = Math.max(this.buffer.ydisp - 1, 0)) : (this.buffer.ybase++, 
                    this._userScrolling || this.buffer.ydisp++);
                } else this.buffer.lines.shiftElements(topRow + 1, bottomRow - topRow + 1 - 1, -1), 
                this.buffer.lines.set(bottomRow, newLine.clone());
                this._userScrolling || (this.buffer.ydisp = this.buffer.ybase), this.updateRange(this.buffer.scrollTop), 
                this.updateRange(this.buffer.scrollBottom), this._onScroll.fire(this.buffer.ydisp);
            }, Terminal.prototype.scrollLines = function(disp, suppressScrollEvent) {
                if (disp < 0) {
                    if (0 === this.buffer.ydisp) return;
                    this._userScrolling = !0;
                } else disp + this.buffer.ydisp >= this.buffer.ybase && (this._userScrolling = !1);
                var oldYdisp = this.buffer.ydisp;
                this.buffer.ydisp = Math.max(Math.min(this.buffer.ydisp + disp, this.buffer.ybase), 0), 
                oldYdisp !== this.buffer.ydisp && (suppressScrollEvent || this._onScroll.fire(this.buffer.ydisp), 
                this.refresh(0, this.rows - 1));
            }, Terminal.prototype.scrollPages = function(pageCount) {
                this.scrollLines(pageCount * (this.rows - 1));
            }, Terminal.prototype.scrollToTop = function() {
                this.scrollLines(-this.buffer.ydisp);
            }, Terminal.prototype.scrollToBottom = function() {
                this.scrollLines(this.buffer.ybase - this.buffer.ydisp);
            }, Terminal.prototype.scrollToLine = function(line) {
                var scrollAmount = line - this.buffer.ydisp;
                0 !== scrollAmount && this.scrollLines(scrollAmount);
            }, Terminal.prototype.writeUtf8 = function(data) {
                var _this = this;
                this._isDisposed || data && (this.writeBufferUtf8.push(data), this.options.useFlowControl && !this._xoffSentToCatchUp && this.writeBufferUtf8.length >= 5 && (this.handler(EscapeSequences_1.C0.DC3), 
                this._xoffSentToCatchUp = !0), !this._writeInProgress && this.writeBufferUtf8.length > 0 && (this._writeInProgress = !0, 
                setTimeout((function() {
                    _this._innerWriteUtf8();
                }))));
            }, Terminal.prototype._innerWriteUtf8 = function(bufferOffset) {
                var _this = this;
                void 0 === bufferOffset && (bufferOffset = 0), this._isDisposed && (this.writeBufferUtf8 = []);
                for (var startTime = Date.now(); this.writeBufferUtf8.length > bufferOffset; ) {
                    var data = this.writeBufferUtf8[bufferOffset];
                    if (bufferOffset++, this._xoffSentToCatchUp && this.writeBufferUtf8.length === bufferOffset && (this.handler(EscapeSequences_1.C0.DC1), 
                    this._xoffSentToCatchUp = !1), this._refreshStart = this.buffer.y, this._refreshEnd = this.buffer.y, 
                    this._inputHandler.parseUtf8(data), this.updateRange(this.buffer.y), this.refresh(this._refreshStart, this._refreshEnd), 
                    Date.now() - startTime >= 12) break;
                }
                this.writeBufferUtf8.length > bufferOffset ? (bufferOffset > 50 && (this.writeBufferUtf8 = this.writeBufferUtf8.slice(bufferOffset), 
                bufferOffset = 0), setTimeout((function() {
                    return _this._innerWriteUtf8(bufferOffset);
                }), 0)) : (this._writeInProgress = !1, this.writeBufferUtf8 = []);
            }, Terminal.prototype.write = function(data) {
                var _this = this;
                this._isDisposed || data && (this.writeBuffer.push(data), this.options.useFlowControl && !this._xoffSentToCatchUp && this.writeBuffer.length >= 5 && (this.handler(EscapeSequences_1.C0.DC3), 
                this._xoffSentToCatchUp = !0), !this._writeInProgress && this.writeBuffer.length > 0 && (this._writeInProgress = !0, 
                setTimeout((function() {
                    _this._innerWrite();
                }))));
            }, Terminal.prototype._innerWrite = function(bufferOffset) {
                var _this = this;
                void 0 === bufferOffset && (bufferOffset = 0), this._isDisposed && (this.writeBuffer = []);
                for (var startTime = Date.now(); this.writeBuffer.length > bufferOffset; ) {
                    var data = this.writeBuffer[bufferOffset];
                    if (bufferOffset++, this._xoffSentToCatchUp && this.writeBuffer.length === bufferOffset && (this.handler(EscapeSequences_1.C0.DC1), 
                    this._xoffSentToCatchUp = !1), this._refreshStart = this.buffer.y, this._refreshEnd = this.buffer.y, 
                    this._inputHandler.parse(data), this.updateRange(this.buffer.y), this.refresh(this._refreshStart, this._refreshEnd), 
                    Date.now() - startTime >= 12) break;
                }
                this.writeBuffer.length > bufferOffset ? (bufferOffset > 50 && (this.writeBuffer = this.writeBuffer.slice(bufferOffset), 
                bufferOffset = 0), setTimeout((function() {
                    return _this._innerWrite(bufferOffset);
                }), 0)) : (this._writeInProgress = !1, this.writeBuffer = []);
            }, Terminal.prototype.writeln = function(data) {
                this.write(data + "\r\n");
            }, Terminal.prototype.attachCustomKeyEventHandler = function(customKeyEventHandler) {
                this._customKeyEventHandler = customKeyEventHandler;
            }, Terminal.prototype.addCsiHandler = function(flag, callback) {
                return this._inputHandler.addCsiHandler(flag, callback);
            }, Terminal.prototype.addOscHandler = function(ident, callback) {
                return this._inputHandler.addOscHandler(ident, callback);
            }, Terminal.prototype.registerLinkMatcher = function(regex, handler, options) {
                var matcherId = this.linkifier.registerLinkMatcher(regex, handler, options);
                return this.refresh(0, this.rows - 1), matcherId;
            }, Terminal.prototype.deregisterLinkMatcher = function(matcherId) {
                this.linkifier.deregisterLinkMatcher(matcherId) && this.refresh(0, this.rows - 1);
            }, Terminal.prototype.registerCharacterJoiner = function(handler) {
                var joinerId = this._renderCoordinator.registerCharacterJoiner(handler);
                return this.refresh(0, this.rows - 1), joinerId;
            }, Terminal.prototype.deregisterCharacterJoiner = function(joinerId) {
                this._renderCoordinator.deregisterCharacterJoiner(joinerId) && this.refresh(0, this.rows - 1);
            }, Object.defineProperty(Terminal.prototype, "markers", {
                get: function() {
                    return this.buffer.markers;
                },
                enumerable: !0,
                configurable: !0
            }), Terminal.prototype.addMarker = function(cursorYOffset) {
                if (this.buffer === this.buffers.normal) return this.buffer.addMarker(this.buffer.ybase + this.buffer.y + cursorYOffset);
            }, Terminal.prototype.hasSelection = function() {
                return !!this.selectionManager && this.selectionManager.hasSelection;
            }, Terminal.prototype.select = function(column, row, length) {
                this.selectionManager.setSelection(column, row, length);
            }, Terminal.prototype.getSelection = function() {
                return this.selectionManager ? this.selectionManager.selectionText : "";
            }, Terminal.prototype.getSelectionPosition = function() {
                if (this.selectionManager.hasSelection) return {
                    startColumn: this.selectionManager.selectionStart[0],
                    startRow: this.selectionManager.selectionStart[1],
                    endColumn: this.selectionManager.selectionEnd[0],
                    endRow: this.selectionManager.selectionEnd[1]
                };
            }, Terminal.prototype.clearSelection = function() {
                this.selectionManager && this.selectionManager.clearSelection();
            }, Terminal.prototype.selectAll = function() {
                this.selectionManager && this.selectionManager.selectAll();
            }, Terminal.prototype.selectLines = function(start, end) {
                this.selectionManager && this.selectionManager.selectLines(start, end);
            }, Terminal.prototype._keyDown = function(event) {
                if (this._customKeyEventHandler && !1 === this._customKeyEventHandler(event)) return !1;
                if (!this._compositionHelper.keydown(event)) return this.buffer.ybase !== this.buffer.ydisp && this.scrollToBottom(), 
                !1;
                var result = Keyboard_1.evaluateKeyboardEvent(event, this.applicationCursor, this.browser.isMac, this.options.macOptionIsMeta);
                if (this.updateCursorStyle(event), 3 === result.type || 2 === result.type) {
                    var scrollCount = this.rows - 1;
                    return this.scrollLines(2 === result.type ? -scrollCount : scrollCount), this.cancel(event, !0);
                }
                return 1 === result.type && this.selectAll(), !!this._isThirdLevelShift(this.browser, event) || (result.cancel && this.cancel(event, !0), 
                !result.key || (this.emit("keydown", event), this._onKey.fire({
                    key: result.key,
                    domEvent: event
                }), this.showCursor(), this.handler(result.key), this.cancel(event, !0)));
            }, Terminal.prototype._isThirdLevelShift = function(browser, ev) {
                var thirdLevelKey = browser.isMac && !this.options.macOptionIsMeta && ev.altKey && !ev.ctrlKey && !ev.metaKey || browser.isMSWindows && ev.altKey && ev.ctrlKey && !ev.metaKey;
                return "keypress" === ev.type ? thirdLevelKey : thirdLevelKey && (!ev.keyCode || ev.keyCode > 47);
            }, Terminal.prototype.setgLevel = function(g) {
                this.glevel = g, this.charset = this.charsets[g];
            }, Terminal.prototype.setgCharset = function(g, charset) {
                this.charsets[g] = charset, this.glevel === g && (this.charset = charset);
            }, Terminal.prototype._keyUp = function(ev) {
                this.updateCursorStyle(ev);
            }, Terminal.prototype._keyPress = function(ev) {
                var key;
                if (this._customKeyEventHandler && !1 === this._customKeyEventHandler(ev)) return !1;
                if (this.cancel(ev), ev.charCode) key = ev.charCode; else if (null == ev.which) key = ev.keyCode; else {
                    if (0 === ev.which || 0 === ev.charCode) return !1;
                    key = ev.which;
                }
                return !(!key || (ev.altKey || ev.ctrlKey || ev.metaKey) && !this._isThirdLevelShift(this.browser, ev) || (key = String.fromCharCode(key), 
                this.emit("keypress", key, ev), this._onKey.fire({
                    key: key,
                    domEvent: ev
                }), this.showCursor(), this.handler(key), 0));
            }, Terminal.prototype.bell = function() {
                var _this = this;
                this.emit("bell"), this._soundBell() && this.soundManager.playBellSound(), this._visualBell() && (this.element.classList.add("visual-bell-active"), 
                clearTimeout(this._visualBellTimer), this._visualBellTimer = window.setTimeout((function() {
                    _this.element.classList.remove("visual-bell-active");
                }), 200));
            }, Terminal.prototype.log = function(text, data) {
                this.options.debug && this._context.console && this._context.console.log && this._context.console.log(text, data);
            }, Terminal.prototype.error = function(text, data) {
                this.options.debug && this._context.console && this._context.console.error && this._context.console.error(text, data);
            }, Terminal.prototype.resize = function(x, y) {
                isNaN(x) || isNaN(y) || (x !== this.cols || y !== this.rows ? (x < 2 && (x = 2), 
                y < 1 && (y = 1), this.buffers.resize(x, y), this.cols = x, this.rows = y, this.buffers.setupTabStops(this.cols), 
                this.charMeasure && this.charMeasure.measure(this.options), this.refresh(0, this.rows - 1), 
                this._onResize.fire({
                    cols: x,
                    rows: y
                })) : !this.charMeasure || this.charMeasure.width && this.charMeasure.height || this.charMeasure.measure(this.options));
            }, Terminal.prototype.updateRange = function(y) {
                y < this._refreshStart && (this._refreshStart = y), y > this._refreshEnd && (this._refreshEnd = y);
            }, Terminal.prototype.maxRange = function() {
                this._refreshStart = 0, this._refreshEnd = this.rows - 1;
            }, Terminal.prototype.clear = function() {
                if (0 !== this.buffer.ybase || 0 !== this.buffer.y) {
                    this.buffer.lines.set(0, this.buffer.lines.get(this.buffer.ybase + this.buffer.y)), 
                    this.buffer.lines.length = 1, this.buffer.ydisp = 0, this.buffer.ybase = 0, this.buffer.y = 0;
                    for (var i = 1; i < this.rows; i++) this.buffer.lines.push(this.buffer.getBlankLine(BufferLine_1.DEFAULT_ATTR_DATA));
                    this.refresh(0, this.rows - 1), this._onScroll.fire(this.buffer.ydisp);
                }
            }, Terminal.prototype.is = function(term) {
                return 0 === (this.options.termName + "").indexOf(term);
            }, Terminal.prototype.handler = function(data) {
                this.options.disableStdin || (this.selectionManager && this.selectionManager.hasSelection && this.selectionManager.clearSelection(), 
                this.buffer.ybase !== this.buffer.ydisp && this.scrollToBottom(), this._onData.fire(data));
            }, Terminal.prototype.handleTitle = function(title) {
                this._onTitleChange.fire(title);
            }, Terminal.prototype.index = function() {
                this.buffer.y++, this.buffer.y > this.buffer.scrollBottom && (this.buffer.y--, this.scroll()), 
                this.buffer.x >= this.cols && this.buffer.x--;
            }, Terminal.prototype.reverseIndex = function() {
                this.buffer.y === this.buffer.scrollTop ? (this.buffer.lines.shiftElements(this.buffer.y + this.buffer.ybase, this.buffer.scrollBottom - this.buffer.scrollTop, 1), 
                this.buffer.lines.set(this.buffer.y + this.buffer.ybase, this.buffer.getBlankLine(this.eraseAttrData())), 
                this.updateRange(this.buffer.scrollTop), this.updateRange(this.buffer.scrollBottom)) : this.buffer.y--;
            }, Terminal.prototype.reset = function() {
                this.options.rows = this.rows, this.options.cols = this.cols;
                var customKeyEventHandler = this._customKeyEventHandler, inputHandler = this._inputHandler, cursorState = this.cursorState, writeBuffer = this.writeBuffer, writeBufferUtf8 = this.writeBufferUtf8, writeInProgress = this._writeInProgress, xoffSentToCatchUp = this._xoffSentToCatchUp, userScrolling = this._userScrolling;
                this._setup(), this._customKeyEventHandler = customKeyEventHandler, this._inputHandler = inputHandler, 
                this.cursorState = cursorState, this.writeBuffer = writeBuffer, this.writeBufferUtf8 = writeBufferUtf8, 
                this._writeInProgress = writeInProgress, this._xoffSentToCatchUp = xoffSentToCatchUp, 
                this._userScrolling = userScrolling, this.refresh(0, this.rows - 1), this.viewport && this.viewport.syncScrollArea();
            }, Terminal.prototype.tabSet = function() {
                this.buffer.tabs[this.buffer.x] = !0;
            }, Terminal.prototype.cancel = function(ev, force) {
                if (this.options.cancelEvents || force) return ev.preventDefault(), ev.stopPropagation(), 
                !1;
            }, Terminal.prototype._visualBell = function() {
                return !1;
            }, Terminal.prototype._soundBell = function() {
                return "sound" === this.options.bellStyle;
            }, Terminal;
        }(EventEmitter_1.EventEmitter);
        exports.Terminal = Terminal;
    },
    rHEf: function(module, exports, __webpack_require__) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        });
        var EscapeSequences_1 = __webpack_require__("dog+"), AltClickHandler = function() {
            function AltClickHandler(_mouseEvent, _terminal) {
                var _a;
                this._mouseEvent = _mouseEvent, this._terminal = _terminal, this._lines = this._terminal.buffer.lines, 
                this._startCol = this._terminal.buffer.x, this._startRow = this._terminal.buffer.y;
                var coordinates = this._terminal.mouseHelper.getCoords(this._mouseEvent, this._terminal.element, this._terminal.charMeasure, this._terminal.cols, this._terminal.rows, !1);
                coordinates && (_a = coordinates.map((function(coordinate) {
                    return coordinate - 1;
                })), this._endCol = _a[0], this._endRow = _a[1]);
            }
            return AltClickHandler.prototype.move = function() {
                this._mouseEvent.altKey && void 0 !== this._endCol && void 0 !== this._endRow && this._terminal.handler(this._arrowSequences());
            }, AltClickHandler.prototype._arrowSequences = function() {
                return this._terminal.buffer.hasScrollback ? this._moveHorizontallyOnly() : this._resetStartingRow() + this._moveToRequestedRow() + this._moveToRequestedCol();
            }, AltClickHandler.prototype._resetStartingRow = function() {
                return 0 === this._moveToRequestedRow().length ? "" : repeat(this._bufferLine(this._startCol, this._startRow, this._startCol, this._startRow - this._wrappedRowsForRow(this._startRow), !1).length, this._sequence("D"));
            }, AltClickHandler.prototype._moveToRequestedRow = function() {
                var startRow = this._startRow - this._wrappedRowsForRow(this._startRow), endRow = this._endRow - this._wrappedRowsForRow(this._endRow);
                return repeat(Math.abs(startRow - endRow) - this._wrappedRowsCount(), this._sequence(this._verticalDirection()));
            }, AltClickHandler.prototype._moveToRequestedCol = function() {
                var startRow;
                startRow = this._moveToRequestedRow().length > 0 ? this._endRow - this._wrappedRowsForRow(this._endRow) : this._startRow;
                var endRow = this._endRow, direction = this._horizontalDirection();
                return repeat(this._bufferLine(this._startCol, startRow, this._endCol, endRow, "C" === direction).length, this._sequence(direction));
            }, AltClickHandler.prototype._moveHorizontallyOnly = function() {
                var direction = this._horizontalDirection();
                return repeat(Math.abs(this._startCol - this._endCol), this._sequence(direction));
            }, AltClickHandler.prototype._wrappedRowsCount = function() {
                for (var wrappedRows = 0, startRow = this._startRow - this._wrappedRowsForRow(this._startRow), endRow = this._endRow - this._wrappedRowsForRow(this._endRow), i = 0; i < Math.abs(startRow - endRow); i++) {
                    var direction = "A" === this._verticalDirection() ? -1 : 1;
                    this._lines.get(startRow + direction * i).isWrapped && wrappedRows++;
                }
                return wrappedRows;
            }, AltClickHandler.prototype._wrappedRowsForRow = function(currentRow) {
                for (var rowCount = 0, lineWraps = this._lines.get(currentRow).isWrapped; lineWraps && currentRow >= 0 && currentRow < this._terminal.rows; ) rowCount++, 
                currentRow--, lineWraps = this._lines.get(currentRow).isWrapped;
                return rowCount;
            }, AltClickHandler.prototype._horizontalDirection = function() {
                var startRow;
                return startRow = this._moveToRequestedRow().length > 0 ? this._endRow - this._wrappedRowsForRow(this._endRow) : this._startRow, 
                this._startCol < this._endCol && startRow <= this._endRow || this._startCol >= this._endCol && startRow < this._endRow ? "C" : "D";
            }, AltClickHandler.prototype._verticalDirection = function() {
                return this._startRow > this._endRow ? "A" : "B";
            }, AltClickHandler.prototype._bufferLine = function(startCol, startRow, endCol, endRow, forward) {
                for (var currentCol = startCol, currentRow = startRow, bufferStr = ""; currentCol !== endCol || currentRow !== endRow; ) currentCol += forward ? 1 : -1, 
                forward && currentCol > this._terminal.cols - 1 ? (bufferStr += this._terminal.buffer.translateBufferLineToString(currentRow, !1, startCol, currentCol), 
                currentCol = 0, startCol = 0, currentRow++) : !forward && currentCol < 0 && (bufferStr += this._terminal.buffer.translateBufferLineToString(currentRow, !1, 0, startCol + 1), 
                startCol = currentCol = this._terminal.cols - 1, currentRow--);
                return bufferStr + this._terminal.buffer.translateBufferLineToString(currentRow, !1, startCol, currentCol);
            }, AltClickHandler.prototype._sequence = function(direction) {
                return EscapeSequences_1.C0.ESC + (this._terminal.applicationCursor ? "O" : "[") + direction;
            }, AltClickHandler;
        }();
        function repeat(count, str) {
            count = Math.floor(count);
            for (var rpt = "", i = 0; i < count; i++) rpt += str;
            return rpt;
        }
        exports.AltClickHandler = AltClickHandler;
    },
    szlt: function(module, exports, __webpack_require__) {
        "use strict";
        var extendStatics, __extends = this && this.__extends || (extendStatics = function(d, b) {
            return (extendStatics = Object.setPrototypeOf || {
                __proto__: []
            } instanceof Array && function(d, b) {
                d.__proto__ = b;
            } || function(d, b) {
                for (var p in b) b.hasOwnProperty(p) && (d[p] = b[p]);
            })(d, b);
        }, function(d, b) {
            function __() {
                this.constructor = d;
            }
            extendStatics(d, b), d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, 
            new __);
        });
        Object.defineProperty(exports, "__esModule", {
            value: !0
        });
        var Lifecycle_1 = __webpack_require__("4wKv"), TextDecoder_1 = __webpack_require__("ev6p");
        function r(low, high) {
            for (var c = high - low, arr = new Array(c); c--; ) arr[c] = --high;
            return arr;
        }
        var TransitionTable = function() {
            function TransitionTable(length) {
                this.table = "undefined" == typeof Uint8Array ? new Array(length) : new Uint8Array(length);
            }
            return TransitionTable.prototype.add = function(code, state, action, next) {
                this.table[state << 8 | code] = (0 | action) << 4 | (void 0 === next ? state : next);
            }, TransitionTable.prototype.addMany = function(codes, state, action, next) {
                for (var i = 0; i < codes.length; i++) this.add(codes[i], state, action, next);
            }, TransitionTable;
        }();
        exports.TransitionTable = TransitionTable;
        var PRINTABLES = r(32, 127), EXECUTABLES = r(0, 24);
        EXECUTABLES.push(25), EXECUTABLES.push.apply(EXECUTABLES, r(28, 32)), exports.VT500_TRANSITION_TABLE = function() {
            var state, table = new TransitionTable(4095), states = r(0, 14);
            for (state in states) for (var code = 0; code <= 160; ++code) table.add(code, state, 1, 0);
            for (state in table.addMany(PRINTABLES, 0, 2, 0), states) table.addMany([ 24, 26, 153, 154 ], state, 3, 0), 
            table.addMany(r(128, 144), state, 3, 0), table.addMany(r(144, 152), state, 3, 0), 
            table.add(156, state, 0, 0), table.add(27, state, 11, 1), table.add(157, state, 4, 8), 
            table.addMany([ 152, 158, 159 ], state, 0, 7), table.add(155, state, 11, 3), table.add(144, state, 11, 9);
            return table.addMany(EXECUTABLES, 0, 3, 0), table.addMany(EXECUTABLES, 1, 3, 1), 
            table.add(127, 1, 0, 1), table.addMany(EXECUTABLES, 8, 0, 8), table.addMany(EXECUTABLES, 3, 3, 3), 
            table.add(127, 3, 0, 3), table.addMany(EXECUTABLES, 4, 3, 4), table.add(127, 4, 0, 4), 
            table.addMany(EXECUTABLES, 6, 3, 6), table.addMany(EXECUTABLES, 5, 3, 5), table.add(127, 5, 0, 5), 
            table.addMany(EXECUTABLES, 2, 3, 2), table.add(127, 2, 0, 2), table.add(93, 1, 4, 8), 
            table.addMany(PRINTABLES, 8, 5, 8), table.add(127, 8, 5, 8), table.addMany([ 156, 27, 24, 26, 7 ], 8, 6, 0), 
            table.addMany(r(28, 32), 8, 0, 8), table.addMany([ 88, 94, 95 ], 1, 0, 7), table.addMany(PRINTABLES, 7, 0, 7), 
            table.addMany(EXECUTABLES, 7, 0, 7), table.add(156, 7, 0, 0), table.add(127, 7, 0, 7), 
            table.add(91, 1, 11, 3), table.addMany(r(64, 127), 3, 7, 0), table.addMany(r(48, 58), 3, 8, 4), 
            table.add(59, 3, 8, 4), table.addMany([ 60, 61, 62, 63 ], 3, 9, 4), table.addMany(r(48, 58), 4, 8, 4), 
            table.add(59, 4, 8, 4), table.addMany(r(64, 127), 4, 7, 0), table.addMany([ 58, 60, 61, 62, 63 ], 4, 0, 6), 
            table.addMany(r(32, 64), 6, 0, 6), table.add(127, 6, 0, 6), table.addMany(r(64, 127), 6, 0, 0), 
            table.add(58, 3, 0, 6), table.addMany(r(32, 48), 3, 9, 5), table.addMany(r(32, 48), 5, 9, 5), 
            table.addMany(r(48, 64), 5, 0, 6), table.addMany(r(64, 127), 5, 7, 0), table.addMany(r(32, 48), 4, 9, 5), 
            table.addMany(r(32, 48), 1, 9, 2), table.addMany(r(32, 48), 2, 9, 2), table.addMany(r(48, 127), 2, 10, 0), 
            table.addMany(r(48, 80), 1, 10, 0), table.addMany(r(81, 88), 1, 10, 0), table.addMany([ 89, 90, 92 ], 1, 10, 0), 
            table.addMany(r(96, 127), 1, 10, 0), table.add(80, 1, 11, 9), table.addMany(EXECUTABLES, 9, 0, 9), 
            table.add(127, 9, 0, 9), table.addMany(r(28, 32), 9, 0, 9), table.addMany(r(32, 48), 9, 9, 12), 
            table.add(58, 9, 0, 11), table.addMany(r(48, 58), 9, 8, 10), table.add(59, 9, 8, 10), 
            table.addMany([ 60, 61, 62, 63 ], 9, 9, 10), table.addMany(EXECUTABLES, 11, 0, 11), 
            table.addMany(r(32, 128), 11, 0, 11), table.addMany(r(28, 32), 11, 0, 11), table.addMany(EXECUTABLES, 10, 0, 10), 
            table.add(127, 10, 0, 10), table.addMany(r(28, 32), 10, 0, 10), table.addMany(r(48, 58), 10, 8, 10), 
            table.add(59, 10, 8, 10), table.addMany([ 58, 60, 61, 62, 63 ], 10, 0, 11), table.addMany(r(32, 48), 10, 9, 12), 
            table.addMany(EXECUTABLES, 12, 0, 12), table.add(127, 12, 0, 12), table.addMany(r(28, 32), 12, 0, 12), 
            table.addMany(r(32, 48), 12, 9, 12), table.addMany(r(48, 64), 12, 0, 11), table.addMany(r(64, 127), 12, 12, 13), 
            table.addMany(r(64, 127), 10, 12, 13), table.addMany(r(64, 127), 9, 12, 13), table.addMany(EXECUTABLES, 13, 13, 13), 
            table.addMany(PRINTABLES, 13, 13, 13), table.add(127, 13, 0, 13), table.addMany([ 27, 156 ], 13, 14, 0), 
            table.add(160, 8, 5, 8), table;
        }();
        var DcsDummy = function() {
            function DcsDummy() {}
            return DcsDummy.prototype.hook = function(collect, params, flag) {}, DcsDummy.prototype.put = function(data, start, end) {}, 
            DcsDummy.prototype.unhook = function() {}, DcsDummy;
        }(), EscapeSequenceParser = function(_super) {
            function EscapeSequenceParser(TRANSITIONS) {
                void 0 === TRANSITIONS && (TRANSITIONS = exports.VT500_TRANSITION_TABLE);
                var _this = _super.call(this) || this;
                return _this.TRANSITIONS = TRANSITIONS, _this.initialState = 0, _this.currentState = _this.initialState, 
                _this._osc = "", _this._params = [ 0 ], _this._collect = "", _this._printHandlerFb = function(data, start, end) {}, 
                _this._executeHandlerFb = function(code) {}, _this._csiHandlerFb = function(collect, params, flag) {}, 
                _this._escHandlerFb = function(collect, flag) {}, _this._oscHandlerFb = function(identifier, data) {}, 
                _this._dcsHandlerFb = new DcsDummy, _this._errorHandlerFb = function(state) {
                    return state;
                }, _this._printHandler = _this._printHandlerFb, _this._executeHandlers = Object.create(null), 
                _this._csiHandlers = Object.create(null), _this._escHandlers = Object.create(null), 
                _this._oscHandlers = Object.create(null), _this._dcsHandlers = Object.create(null), 
                _this._activeDcsHandler = null, _this._errorHandler = _this._errorHandlerFb, _this.setEscHandler("\\", (function() {})), 
                _this;
            }
            return __extends(EscapeSequenceParser, _super), EscapeSequenceParser.prototype.dispose = function() {
                this._printHandlerFb = null, this._executeHandlerFb = null, this._csiHandlerFb = null, 
                this._escHandlerFb = null, this._oscHandlerFb = null, this._dcsHandlerFb = null, 
                this._errorHandlerFb = null, this._printHandler = null, this._executeHandlers = null, 
                this._escHandlers = null, this._csiHandlers = null, this._oscHandlers = null, this._dcsHandlers = null, 
                this._activeDcsHandler = null, this._errorHandler = null;
            }, EscapeSequenceParser.prototype.setPrintHandler = function(callback) {
                this._printHandler = callback;
            }, EscapeSequenceParser.prototype.clearPrintHandler = function() {
                this._printHandler = this._printHandlerFb;
            }, EscapeSequenceParser.prototype.setExecuteHandler = function(flag, callback) {
                this._executeHandlers[flag.charCodeAt(0)] = callback;
            }, EscapeSequenceParser.prototype.clearExecuteHandler = function(flag) {
                this._executeHandlers[flag.charCodeAt(0)] && delete this._executeHandlers[flag.charCodeAt(0)];
            }, EscapeSequenceParser.prototype.setExecuteHandlerFallback = function(callback) {
                this._executeHandlerFb = callback;
            }, EscapeSequenceParser.prototype.addCsiHandler = function(flag, callback) {
                var index = flag.charCodeAt(0);
                void 0 === this._csiHandlers[index] && (this._csiHandlers[index] = []);
                var handlerList = this._csiHandlers[index];
                return handlerList.push(callback), {
                    dispose: function() {
                        var handlerIndex = handlerList.indexOf(callback);
                        -1 !== handlerIndex && handlerList.splice(handlerIndex, 1);
                    }
                };
            }, EscapeSequenceParser.prototype.setCsiHandler = function(flag, callback) {
                this._csiHandlers[flag.charCodeAt(0)] = [ callback ];
            }, EscapeSequenceParser.prototype.clearCsiHandler = function(flag) {
                this._csiHandlers[flag.charCodeAt(0)] && delete this._csiHandlers[flag.charCodeAt(0)];
            }, EscapeSequenceParser.prototype.setCsiHandlerFallback = function(callback) {
                this._csiHandlerFb = callback;
            }, EscapeSequenceParser.prototype.setEscHandler = function(collectAndFlag, callback) {
                this._escHandlers[collectAndFlag] = callback;
            }, EscapeSequenceParser.prototype.clearEscHandler = function(collectAndFlag) {
                this._escHandlers[collectAndFlag] && delete this._escHandlers[collectAndFlag];
            }, EscapeSequenceParser.prototype.setEscHandlerFallback = function(callback) {
                this._escHandlerFb = callback;
            }, EscapeSequenceParser.prototype.addOscHandler = function(ident, callback) {
                void 0 === this._oscHandlers[ident] && (this._oscHandlers[ident] = []);
                var handlerList = this._oscHandlers[ident];
                return handlerList.push(callback), {
                    dispose: function() {
                        var handlerIndex = handlerList.indexOf(callback);
                        -1 !== handlerIndex && handlerList.splice(handlerIndex, 1);
                    }
                };
            }, EscapeSequenceParser.prototype.setOscHandler = function(ident, callback) {
                this._oscHandlers[ident] = [ callback ];
            }, EscapeSequenceParser.prototype.clearOscHandler = function(ident) {
                this._oscHandlers[ident] && delete this._oscHandlers[ident];
            }, EscapeSequenceParser.prototype.setOscHandlerFallback = function(callback) {
                this._oscHandlerFb = callback;
            }, EscapeSequenceParser.prototype.setDcsHandler = function(collectAndFlag, handler) {
                this._dcsHandlers[collectAndFlag] = handler;
            }, EscapeSequenceParser.prototype.clearDcsHandler = function(collectAndFlag) {
                this._dcsHandlers[collectAndFlag] && delete this._dcsHandlers[collectAndFlag];
            }, EscapeSequenceParser.prototype.setDcsHandlerFallback = function(handler) {
                this._dcsHandlerFb = handler;
            }, EscapeSequenceParser.prototype.setErrorHandler = function(callback) {
                this._errorHandler = callback;
            }, EscapeSequenceParser.prototype.clearErrorHandler = function() {
                this._errorHandler = this._errorHandlerFb;
            }, EscapeSequenceParser.prototype.reset = function() {
                this.currentState = this.initialState, this._osc = "", this._params = [ 0 ], this._collect = "", 
                this._activeDcsHandler = null;
            }, EscapeSequenceParser.prototype.parse = function(data, length) {
                for (var code = 0, transition = 0, error = !1, currentState = this.currentState, print = -1, dcs = -1, osc = this._osc, collect = this._collect, params = this._params, table = this.TRANSITIONS.table, dcsHandler = this._activeDcsHandler, callback = null, i = 0; i < length; ++i) if (code = data[i], 
                0 === currentState && code > 31 && code < 128) {
                    print = ~print ? print : i;
                    do {
                        i++;
                    } while (i < length && data[i] > 31 && data[i] < 128);
                    i--;
                } else if (4 === currentState && code > 47 && code < 57) params[params.length - 1] = 10 * params[params.length - 1] + code - 48; else {
                    switch ((transition = table[currentState << 8 | (code < 160 ? code : 160)]) >> 4) {
                      case 2:
                        print = ~print ? print : i;
                        break;

                      case 3:
                        ~print && (this._printHandler(data, print, i), print = -1), (callback = this._executeHandlers[code]) ? callback() : this._executeHandlerFb(code);
                        break;

                      case 0:
                        ~print ? (this._printHandler(data, print, i), print = -1) : ~dcs && (dcsHandler.put(data, dcs, i), 
                        dcs = -1);
                        break;

                      case 1:
                        if (code > 159) switch (currentState) {
                          case 0:
                            print = ~print ? print : i;
                            break;

                          case 6:
                            transition |= 6;
                            break;

                          case 11:
                            transition |= 11;
                            break;

                          case 13:
                            dcs = ~dcs ? dcs : i, transition |= 13;
                            break;

                          default:
                            error = !0;
                        } else error = !0;
                        if (error) {
                            if (this._errorHandler({
                                position: i,
                                code: code,
                                currentState: currentState,
                                print: print,
                                dcs: dcs,
                                osc: osc,
                                collect: collect,
                                params: params,
                                abort: !1
                            }).abort) return;
                            error = !1;
                        }
                        break;

                      case 7:
                        for (var handlers = this._csiHandlers[code], j = handlers ? handlers.length - 1 : -1; j >= 0 && !1 === handlers[j](params, collect); j--) ;
                        j < 0 && this._csiHandlerFb(collect, params, code);
                        break;

                      case 8:
                        59 === code ? params.push(0) : params[params.length - 1] = 10 * params[params.length - 1] + code - 48;
                        break;

                      case 9:
                        collect += String.fromCharCode(code);
                        break;

                      case 10:
                        (callback = this._escHandlers[collect + String.fromCharCode(code)]) ? callback(collect, code) : this._escHandlerFb(collect, code);
                        break;

                      case 11:
                        ~print && (this._printHandler(data, print, i), print = -1), osc = "", params = [ 0 ], 
                        collect = "", dcs = -1;
                        break;

                      case 12:
                        (dcsHandler = this._dcsHandlers[collect + String.fromCharCode(code)]) || (dcsHandler = this._dcsHandlerFb), 
                        dcsHandler.hook(collect, params, code);
                        break;

                      case 13:
                        dcs = ~dcs ? dcs : i;
                        break;

                      case 14:
                        dcsHandler && (~dcs && dcsHandler.put(data, dcs, i), dcsHandler.unhook(), dcsHandler = null), 
                        27 === code && (transition |= 1), osc = "", params = [ 0 ], collect = "", dcs = -1;
                        break;

                      case 4:
                        ~print && (this._printHandler(data, print, i), print = -1), osc = "";
                        break;

                      case 5:
                        for (var j_1 = i + 1; ;j_1++) if (j_1 >= length || (code = data[j_1]) < 32 || code > 127 && code <= 159) {
                            osc += TextDecoder_1.utf32ToString(data, i, j_1), i = j_1 - 1;
                            break;
                        }
                        break;

                      case 6:
                        if (osc && 24 !== code && 26 !== code) {
                            var idx = osc.indexOf(";");
                            if (-1 === idx) this._oscHandlerFb(-1, osc); else {
                                for (var identifier = parseInt(osc.substring(0, idx)), content = osc.substring(idx + 1), handlers_1 = this._oscHandlers[identifier], j_2 = handlers_1 ? handlers_1.length - 1 : -1; j_2 >= 0 && !1 === handlers_1[j_2](content); j_2--) ;
                                j_2 < 0 && this._oscHandlerFb(identifier, content);
                            }
                        }
                        27 === code && (transition |= 1), osc = "", params = [ 0 ], collect = "", dcs = -1;
                    }
                    currentState = 15 & transition;
                }
                0 === currentState && ~print ? this._printHandler(data, print, length) : 13 === currentState && ~dcs && dcsHandler && dcsHandler.put(data, dcs, length), 
                this._osc = osc, this._collect = collect, this._params = params, this._activeDcsHandler = dcsHandler, 
                this.currentState = currentState;
            }, EscapeSequenceParser;
        }(Lifecycle_1.Disposable);
        exports.EscapeSequenceParser = EscapeSequenceParser;
    },
    tpul: function(module, exports, __webpack_require__) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        });
        var LRUMap = function() {
            function LRUMap(capacity) {
                this.capacity = capacity, this._map = {}, this._head = null, this._tail = null, 
                this._nodePool = [], this.size = 0;
            }
            return LRUMap.prototype._unlinkNode = function(node) {
                var prev = node.prev, next = node.next;
                node === this._head && (this._head = next), node === this._tail && (this._tail = prev), 
                null !== prev && (prev.next = next), null !== next && (next.prev = prev);
            }, LRUMap.prototype._appendNode = function(node) {
                var tail = this._tail;
                null !== tail && (tail.next = node), node.prev = tail, node.next = null, this._tail = node, 
                null === this._head && (this._head = node);
            }, LRUMap.prototype.prealloc = function(count) {
                for (var nodePool = this._nodePool, i = 0; i < count; i++) nodePool.push({
                    prev: null,
                    next: null,
                    key: null,
                    value: null
                });
            }, LRUMap.prototype.get = function(key) {
                var node = this._map[key];
                return void 0 !== node ? (this._unlinkNode(node), this._appendNode(node), node.value) : null;
            }, LRUMap.prototype.peekValue = function(key) {
                var node = this._map[key];
                return void 0 !== node ? node.value : null;
            }, LRUMap.prototype.peek = function() {
                var head = this._head;
                return null === head ? null : head.value;
            }, LRUMap.prototype.set = function(key, value) {
                var node = this._map[key];
                if (void 0 !== node) this._unlinkNode(node = this._map[key]), node.value = value; else if (this.size >= this.capacity) this._unlinkNode(node = this._head), 
                delete this._map[node.key], node.key = key, node.value = value, this._map[key] = node; else {
                    var nodePool = this._nodePool;
                    nodePool.length > 0 ? ((node = nodePool.pop()).key = key, node.value = value) : node = {
                        prev: null,
                        next: null,
                        key: key,
                        value: value
                    }, this._map[key] = node, this.size++;
                }
                this._appendNode(node);
            }, LRUMap;
        }();
        exports.default = LRUMap;
    },
    "v+jr": function(module, exports, __webpack_require__) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        });
        var MouseZoneManager_1 = __webpack_require__("0J8d"), CharWidth_1 = __webpack_require__("oV0L"), EventEmitter2_1 = __webpack_require__("Fn1x"), Linkifier = function() {
            function Linkifier(_terminal) {
                this._terminal = _terminal, this._linkMatchers = [], this._nextLinkMatcherId = 0, 
                this._onLinkHover = new EventEmitter2_1.EventEmitter2, this._onLinkLeave = new EventEmitter2_1.EventEmitter2, 
                this._onLinkTooltip = new EventEmitter2_1.EventEmitter2, this._rowsToLinkify = {
                    start: null,
                    end: null
                };
            }
            return Object.defineProperty(Linkifier.prototype, "onLinkHover", {
                get: function() {
                    return this._onLinkHover.event;
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(Linkifier.prototype, "onLinkLeave", {
                get: function() {
                    return this._onLinkLeave.event;
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(Linkifier.prototype, "onLinkTooltip", {
                get: function() {
                    return this._onLinkTooltip.event;
                },
                enumerable: !0,
                configurable: !0
            }), Linkifier.prototype.attachToDom = function(mouseZoneManager) {
                this._mouseZoneManager = mouseZoneManager;
            }, Linkifier.prototype.linkifyRows = function(start, end) {
                var _this = this;
                this._mouseZoneManager && (null === this._rowsToLinkify.start ? (this._rowsToLinkify.start = start, 
                this._rowsToLinkify.end = end) : (this._rowsToLinkify.start = Math.min(this._rowsToLinkify.start, start), 
                this._rowsToLinkify.end = Math.max(this._rowsToLinkify.end, end)), this._mouseZoneManager.clearAll(start, end), 
                this._rowsTimeoutId && clearTimeout(this._rowsTimeoutId), this._rowsTimeoutId = setTimeout((function() {
                    return _this._linkifyRows();
                }), Linkifier.TIME_BEFORE_LINKIFY));
            }, Linkifier.prototype._linkifyRows = function() {
                this._rowsTimeoutId = null;
                var buffer = this._terminal.buffer, absoluteRowIndexStart = buffer.ydisp + this._rowsToLinkify.start;
                if (!(absoluteRowIndexStart >= buffer.lines.length)) {
                    for (var absoluteRowIndexEnd = buffer.ydisp + Math.min(this._rowsToLinkify.end, this._terminal.rows) + 1, overscanLineLimit = Math.ceil(Linkifier.OVERSCAN_CHAR_LIMIT / this._terminal.cols), iterator = this._terminal.buffer.iterator(!1, absoluteRowIndexStart, absoluteRowIndexEnd, overscanLineLimit, overscanLineLimit); iterator.hasNext(); ) for (var lineData = iterator.next(), i = 0; i < this._linkMatchers.length; i++) this._doLinkifyRow(lineData.range.first, lineData.content, this._linkMatchers[i]);
                    this._rowsToLinkify.start = null, this._rowsToLinkify.end = null;
                }
            }, Linkifier.prototype.registerLinkMatcher = function(regex, handler, options) {
                if (void 0 === options && (options = {}), !handler) throw new Error("handler must be defined");
                var matcher = {
                    id: this._nextLinkMatcherId++,
                    regex: regex,
                    handler: handler,
                    matchIndex: options.matchIndex,
                    validationCallback: options.validationCallback,
                    hoverTooltipCallback: options.tooltipCallback,
                    hoverLeaveCallback: options.leaveCallback,
                    willLinkActivate: options.willLinkActivate,
                    priority: options.priority || 0
                };
                return this._addLinkMatcherToList(matcher), matcher.id;
            }, Linkifier.prototype._addLinkMatcherToList = function(matcher) {
                if (0 !== this._linkMatchers.length) {
                    for (var i = this._linkMatchers.length - 1; i >= 0; i--) if (matcher.priority <= this._linkMatchers[i].priority) return void this._linkMatchers.splice(i + 1, 0, matcher);
                    this._linkMatchers.splice(0, 0, matcher);
                } else this._linkMatchers.push(matcher);
            }, Linkifier.prototype.deregisterLinkMatcher = function(matcherId) {
                for (var i = 0; i < this._linkMatchers.length; i++) if (this._linkMatchers[i].id === matcherId) return this._linkMatchers.splice(i, 1), 
                !0;
                return !1;
            }, Linkifier.prototype._doLinkifyRow = function(rowIndex, text, matcher) {
                for (var match, _this = this, rex = new RegExp(matcher.regex.source, matcher.regex.flags + "g"), stringIndex = -1, _loop_1 = function() {
                    var uri = match["number" != typeof matcher.matchIndex ? 0 : matcher.matchIndex];
                    if (!uri) {
                        if (this_1._terminal.debug) throw console.log({
                            match: match,
                            matcher: matcher
                        }), new Error("match found without corresponding matchIndex");
                        return "break";
                    }
                    if (stringIndex = text.indexOf(uri, stringIndex + 1), rex.lastIndex = stringIndex + uri.length, 
                    stringIndex < 0) return "break";
                    var bufferIndex = this_1._terminal.buffer.stringIndexToBufferIndex(rowIndex, stringIndex);
                    if (bufferIndex[0] < 0) return "break";
                    var fg, attr = this_1._terminal.buffer.lines.get(bufferIndex[0]).getFg(bufferIndex[1]);
                    attr && (fg = attr >> 9 & 511), matcher.validationCallback ? matcher.validationCallback(uri, (function(isValid) {
                        _this._rowsTimeoutId || isValid && _this._addLink(bufferIndex[1], bufferIndex[0] - _this._terminal.buffer.ydisp, uri, matcher, fg);
                    })) : this_1._addLink(bufferIndex[1], bufferIndex[0] - this_1._terminal.buffer.ydisp, uri, matcher, fg);
                }, this_1 = this; null !== (match = rex.exec(text)) && "break" !== _loop_1(); ) ;
            }, Linkifier.prototype._addLink = function(x, y, uri, matcher, fg) {
                var _this = this, width = CharWidth_1.getStringCellWidth(uri), x1 = x % this._terminal.cols, y1 = y + Math.floor(x / this._terminal.cols), x2 = (x1 + width) % this._terminal.cols, y2 = y1 + Math.floor((x1 + width) / this._terminal.cols);
                0 === x2 && (x2 = this._terminal.cols, y2--), this._mouseZoneManager.add(new MouseZoneManager_1.MouseZone(x1 + 1, y1 + 1, x2 + 1, y2 + 1, (function(e) {
                    if (matcher.handler) return matcher.handler(e, uri);
                    window.open(uri, "_blank");
                }), (function() {
                    _this._onLinkHover.fire(_this._createLinkHoverEvent(x1, y1, x2, y2, fg)), _this._terminal.element.classList.add("xterm-cursor-pointer");
                }), (function(e) {
                    _this._onLinkTooltip.fire(_this._createLinkHoverEvent(x1, y1, x2, y2, fg)), matcher.hoverTooltipCallback && matcher.hoverTooltipCallback(e, uri);
                }), (function() {
                    _this._onLinkLeave.fire(_this._createLinkHoverEvent(x1, y1, x2, y2, fg)), _this._terminal.element.classList.remove("xterm-cursor-pointer"), 
                    matcher.hoverLeaveCallback && matcher.hoverLeaveCallback();
                }), (function(e) {
                    return !matcher.willLinkActivate || matcher.willLinkActivate(e, uri);
                })));
            }, Linkifier.prototype._createLinkHoverEvent = function(x1, y1, x2, y2, fg) {
                return {
                    x1: x1,
                    y1: y1,
                    x2: x2,
                    y2: y2,
                    cols: this._terminal.cols,
                    fg: fg
                };
            }, Linkifier.TIME_BEFORE_LINKIFY = 200, Linkifier.OVERSCAN_CHAR_LIMIT = 2e3, Linkifier;
        }();
        exports.Linkifier = Linkifier;
    },
    x658: function(module, exports, __webpack_require__) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        });
        var MouseHelper = function() {
            function MouseHelper(_renderCoordinator) {
                this._renderCoordinator = _renderCoordinator;
            }
            return MouseHelper.getCoordsRelativeToElement = function(event, element) {
                var rect = element.getBoundingClientRect();
                return [ event.clientX - rect.left, event.clientY - rect.top ];
            }, MouseHelper.prototype.getCoords = function(event, element, charMeasure, colCount, rowCount, isSelection) {
                if (!charMeasure.width || !charMeasure.height) return null;
                var coords = MouseHelper.getCoordsRelativeToElement(event, element);
                return coords ? (coords[0] = Math.ceil((coords[0] + (isSelection ? this._renderCoordinator.dimensions.actualCellWidth / 2 : 0)) / this._renderCoordinator.dimensions.actualCellWidth), 
                coords[1] = Math.ceil(coords[1] / this._renderCoordinator.dimensions.actualCellHeight), 
                coords[0] = Math.min(Math.max(coords[0], 1), colCount + (isSelection ? 1 : 0)), 
                coords[1] = Math.min(Math.max(coords[1], 1), rowCount), coords) : null;
            }, MouseHelper.prototype.getRawByteCoords = function(event, element, charMeasure, colCount, rowCount) {
                var coords = this.getCoords(event, element, charMeasure, colCount, rowCount), x = coords[0], y = coords[1];
                return {
                    x: x += 32,
                    y: y += 32
                };
            }, MouseHelper;
        }();
        exports.MouseHelper = MouseHelper;
    },
    xC8T: function(module, exports, __webpack_require__) {
        "use strict";
        var extendStatics, __extends = this && this.__extends || (extendStatics = function(d, b) {
            return (extendStatics = Object.setPrototypeOf || {
                __proto__: []
            } instanceof Array && function(d, b) {
                d.__proto__ = b;
            } || function(d, b) {
                for (var p in b) b.hasOwnProperty(p) && (d[p] = b[p]);
            })(d, b);
        }, function(d, b) {
            function __() {
                this.constructor = d;
            }
            extendStatics(d, b), d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, 
            new __);
        });
        Object.defineProperty(exports, "__esModule", {
            value: !0
        });
        var EventEmitter2_1 = __webpack_require__("Fn1x"), Marker = function(_super) {
            function Marker(line) {
                var _this = _super.call(this) || this;
                return _this.line = line, _this._id = Marker._nextId++, _this.isDisposed = !1, _this._onDispose = new EventEmitter2_1.EventEmitter2, 
                _this;
            }
            return __extends(Marker, _super), Object.defineProperty(Marker.prototype, "id", {
                get: function() {
                    return this._id;
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(Marker.prototype, "onDispose", {
                get: function() {
                    return this._onDispose.event;
                },
                enumerable: !0,
                configurable: !0
            }), Marker.prototype.dispose = function() {
                this.isDisposed || (this.isDisposed = !0, this._onDispose.fire());
            }, Marker._nextId = 1, Marker;
        }(__webpack_require__("4wKv").Disposable);
        exports.Marker = Marker;
    },
    xVS5: function(module, exports, __webpack_require__) {
        "use strict";
        function proposeGeometry(term) {
            if (!term.element.parentElement) return null;
            var parentElementStyle = window.getComputedStyle(term.element.parentElement), parentElementHeight = parseInt(parentElementStyle.getPropertyValue("height")), parentElementWidth = Math.max(0, parseInt(parentElementStyle.getPropertyValue("width"))), elementStyle = window.getComputedStyle(term.element), elementPadding_top = parseInt(elementStyle.getPropertyValue("padding-top")), elementPadding_bottom = parseInt(elementStyle.getPropertyValue("padding-bottom")), elementPadding_right = parseInt(elementStyle.getPropertyValue("padding-right")), elementPadding_left = parseInt(elementStyle.getPropertyValue("padding-left")), availableHeight = parentElementHeight - (elementPadding_top + elementPadding_bottom);
            return {
                cols: Math.floor((parentElementWidth - (elementPadding_right + elementPadding_left) - term._core.viewport.scrollBarWidth) / term._core._renderCoordinator.dimensions.actualCellWidth),
                rows: Math.floor(availableHeight / term._core._renderCoordinator.dimensions.actualCellHeight)
            };
        }
        function fit(term) {
            var geometry = proposeGeometry(term);
            geometry && (term.rows === geometry.rows && term.cols === geometry.cols || (term._core._renderCoordinator.clear(), 
            term.resize(geometry.cols, geometry.rows)));
        }
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports.proposeGeometry = proposeGeometry, exports.fit = fit, exports.apply = function(terminalConstructor) {
            terminalConstructor.prototype.proposeGeometry = function() {
                return proposeGeometry(this);
            }, terminalConstructor.prototype.fit = function() {
                fit(this);
            };
        };
    },
    xmbG: function(module, exports, __webpack_require__) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        });
        var AddonManager = function() {
            function AddonManager() {
                this._addons = [];
            }
            return AddonManager.prototype.dispose = function() {
                for (var i = this._addons.length - 1; i >= 0; i--) this._addons[i].instance.dispose();
            }, AddonManager.prototype.loadAddon = function(terminal, instance) {
                var _this = this, loadedAddon = {
                    instance: instance,
                    dispose: instance.dispose,
                    isDisposed: !1
                };
                this._addons.push(loadedAddon), instance.dispose = function() {
                    return _this._wrappedAddonDispose(loadedAddon);
                }, instance.activate(terminal);
            }, AddonManager.prototype._wrappedAddonDispose = function(loadedAddon) {
                if (!loadedAddon.isDisposed) {
                    for (var index = -1, i = 0; i < this._addons.length; i++) if (this._addons[i] === loadedAddon) {
                        index = i;
                        break;
                    }
                    if (-1 === index) throw new Error("Could not dispose an addon that has not been loaded");
                    loadedAddon.isDisposed = !0, loadedAddon.dispose.apply(loadedAddon.instance), this._addons.splice(index, 1);
                }
            }, AddonManager;
        }();
        exports.AddonManager = AddonManager;
    }
} ]);
//# sourceMappingURL=shell-module-ngfactory.js.map