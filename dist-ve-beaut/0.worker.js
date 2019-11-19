!function(modules) {
    var installedModules = {};
    function __webpack_require__(moduleId) {
        if (installedModules[moduleId]) return installedModules[moduleId].exports;
        var module = installedModules[moduleId] = {
            i: moduleId,
            l: !1,
            exports: {}
        };
        return modules[moduleId].call(module.exports, module, module.exports, __webpack_require__), 
        module.l = !0, module.exports;
    }
    __webpack_require__.m = modules, __webpack_require__.c = installedModules, __webpack_require__.d = function(exports, name, getter) {
        __webpack_require__.o(exports, name) || Object.defineProperty(exports, name, {
            enumerable: !0,
            get: getter
        });
    }, __webpack_require__.r = function(exports) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(exports, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(exports, "__esModule", {
            value: !0
        });
    }, __webpack_require__.t = function(value, mode) {
        if (1 & mode && (value = __webpack_require__(value)), 8 & mode) return value;
        if (4 & mode && "object" == typeof value && value && value.__esModule) return value;
        var ns = Object.create(null);
        if (__webpack_require__.r(ns), Object.defineProperty(ns, "default", {
            enumerable: !0,
            value: value
        }), 2 & mode && "string" != typeof value) for (var key in value) __webpack_require__.d(ns, key, (function(key) {
            return value[key];
        }).bind(null, key));
        return ns;
    }, __webpack_require__.n = function(module) {
        var getter = module && module.__esModule ? function() {
            return module.default;
        } : function() {
            return module;
        };
        return __webpack_require__.d(getter, "a", getter), getter;
    }, __webpack_require__.o = function(object, property) {
        return Object.prototype.hasOwnProperty.call(object, property);
    }, __webpack_require__.p = "", __webpack_require__(__webpack_require__.s = "L8ff");
}({
    L8ff: function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        var lunr__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("LyFZ");
        let index;
        const pages = {};
        function queryIndex(query) {
            try {
                if (query.length) {
                    let results = index.search(query);
                    if (0 === results.length) {
                        const titleQuery = "titleWords:*" + query.split(" ", 1)[0] + "*";
                        results = index.search(query + " " + titleQuery);
                    }
                    return results.map((function(hit) {
                        return pages[hit.ref];
                    }));
                }
            } catch (e) {
                console.log(e);
            }
            return [];
        }
        addEventListener("message", (function(message) {
            const type = message.data.type, id = message.data.id, payload = message.data.payload;
            switch (type) {
              case "load-index":
                !function(url, callback) {
                    const searchDataRequest = new XMLHttpRequest;
                    searchDataRequest.onload = function() {
                        var searchInfo, loadIndexFn, pagesData;
                        searchInfo = JSON.parse(this.responseText), pagesData = searchInfo, loadIndexFn = indexBuilder => {
                            pagesData.forEach(page => {
                                indexBuilder.add(page), pages[page.path] = page;
                            });
                        }, lunr__WEBPACK_IMPORTED_MODULE_0__.QueryLexer.termSeparator = lunr__WEBPACK_IMPORTED_MODULE_0__.tokenizer.separator = /\s+/, 
                        index = lunr__WEBPACK_IMPORTED_MODULE_0__((function() {
                            this.ref("path"), this.field("titleWords", {
                                boost: 10
                            }), this.field("headingWords", {
                                boost: 5
                            }), this.field("members", {
                                boost: 4
                            }), this.field("keywords", {
                                boost: 2
                            }), loadIndexFn(this);
                        })), postMessage({
                            type: type,
                            id: id,
                            payload: !0
                        });
                    }, searchDataRequest.open("GET", "/generated/docs/app/search-data.json"), searchDataRequest.send();
                }();
                break;

              case "query-index":
                postMessage({
                    type: type,
                    id: id,
                    payload: {
                        query: payload,
                        results: queryIndex(payload)
                    }
                });
                break;

              default:
                postMessage({
                    type: type,
                    id: id,
                    payload: {
                        error: "invalid message type"
                    }
                });
            }
        }));
    },
    LyFZ: function(module, exports, __webpack_require__) {
        var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;
        !function() {
            var global, step2list, step3list, v, C, re_mgr0, re_mgr1, re_meq1, re_s_v, re_1a, re2_1a, re_1b, re2_1b, re_1b_2, re2_1b_2, re3_1b_2, re4_1b_2, re_1c, re_2, re_3, re_4, re2_4, re_5, re_5_1, re3_5, porterStemmer, lunr = function(config) {
                var builder = new lunr.Builder;
                return builder.pipeline.add(lunr.trimmer, lunr.stopWordFilter, lunr.stemmer), builder.searchPipeline.add(lunr.stemmer), 
                config.call(builder, builder), builder.build();
            };
            lunr.version = "2.3.6", lunr.utils = {}, lunr.utils.warn = (global = this, function(message) {
                global.console && console.warn && console.warn(message);
            }), lunr.utils.asString = function(obj) {
                return null == obj ? "" : obj.toString();
            }, lunr.utils.clone = function(obj) {
                if (null == obj) return obj;
                for (var clone = Object.create(null), keys = Object.keys(obj), i = 0; i < keys.length; i++) {
                    var key = keys[i], val = obj[key];
                    if (Array.isArray(val)) clone[key] = val.slice(); else {
                        if ("string" != typeof val && "number" != typeof val && "boolean" != typeof val) throw new TypeError("clone is not deep and does not support nested objects");
                        clone[key] = val;
                    }
                }
                return clone;
            }, lunr.FieldRef = function(docRef, fieldName, stringValue) {
                this.docRef = docRef, this.fieldName = fieldName, this._stringValue = stringValue;
            }, lunr.FieldRef.joiner = "/", lunr.FieldRef.fromString = function(s) {
                var n = s.indexOf(lunr.FieldRef.joiner);
                if (-1 === n) throw "malformed field ref string";
                var fieldRef = s.slice(0, n), docRef = s.slice(n + 1);
                return new lunr.FieldRef(docRef, fieldRef, s);
            }, lunr.FieldRef.prototype.toString = function() {
                return null == this._stringValue && (this._stringValue = this.fieldName + lunr.FieldRef.joiner + this.docRef), 
                this._stringValue;
            }, lunr.Set = function(elements) {
                if (this.elements = Object.create(null), elements) {
                    this.length = elements.length;
                    for (var i = 0; i < this.length; i++) this.elements[elements[i]] = !0;
                } else this.length = 0;
            }, lunr.Set.complete = {
                intersect: function(other) {
                    return other;
                },
                union: function(other) {
                    return other;
                },
                contains: function() {
                    return !0;
                }
            }, lunr.Set.empty = {
                intersect: function() {
                    return this;
                },
                union: function(other) {
                    return other;
                },
                contains: function() {
                    return !1;
                }
            }, lunr.Set.prototype.contains = function(object) {
                return !!this.elements[object];
            }, lunr.Set.prototype.intersect = function(other) {
                var a, b, elements, intersection = [];
                if (other === lunr.Set.complete) return this;
                if (other === lunr.Set.empty) return other;
                this.length < other.length ? (a = this, b = other) : (a = other, b = this), elements = Object.keys(a.elements);
                for (var i = 0; i < elements.length; i++) {
                    var element = elements[i];
                    element in b.elements && intersection.push(element);
                }
                return new lunr.Set(intersection);
            }, lunr.Set.prototype.union = function(other) {
                return other === lunr.Set.complete ? lunr.Set.complete : other === lunr.Set.empty ? this : new lunr.Set(Object.keys(this.elements).concat(Object.keys(other.elements)));
            }, lunr.idf = function(posting, documentCount) {
                var documentsWithTerm = 0;
                for (var fieldName in posting) "_index" != fieldName && (documentsWithTerm += Object.keys(posting[fieldName]).length);
                return Math.log(1 + Math.abs((documentCount - documentsWithTerm + .5) / (documentsWithTerm + .5)));
            }, lunr.Token = function(str, metadata) {
                this.str = str || "", this.metadata = metadata || {};
            }, lunr.Token.prototype.toString = function() {
                return this.str;
            }, lunr.Token.prototype.update = function(fn) {
                return this.str = fn(this.str, this.metadata), this;
            }, lunr.Token.prototype.clone = function(fn) {
                return new lunr.Token((fn = fn || function(s) {
                    return s;
                })(this.str, this.metadata), this.metadata);
            }, lunr.tokenizer = function(obj, metadata) {
                if (null == obj || null == obj) return [];
                if (Array.isArray(obj)) return obj.map((function(t) {
                    return new lunr.Token(lunr.utils.asString(t).toLowerCase(), lunr.utils.clone(metadata));
                }));
                for (var str = obj.toString().trim().toLowerCase(), len = str.length, tokens = [], sliceEnd = 0, sliceStart = 0; sliceEnd <= len; sliceEnd++) {
                    var sliceLength = sliceEnd - sliceStart;
                    if (str.charAt(sliceEnd).match(lunr.tokenizer.separator) || sliceEnd == len) {
                        if (sliceLength > 0) {
                            var tokenMetadata = lunr.utils.clone(metadata) || {};
                            tokenMetadata.position = [ sliceStart, sliceLength ], tokenMetadata.index = tokens.length, 
                            tokens.push(new lunr.Token(str.slice(sliceStart, sliceEnd), tokenMetadata));
                        }
                        sliceStart = sliceEnd + 1;
                    }
                }
                return tokens;
            }, lunr.tokenizer.separator = /[\s\-]+/, lunr.Pipeline = function() {
                this._stack = [];
            }, lunr.Pipeline.registeredFunctions = Object.create(null), lunr.Pipeline.registerFunction = function(fn, label) {
                label in this.registeredFunctions && lunr.utils.warn("Overwriting existing registered function: " + label), 
                fn.label = label, lunr.Pipeline.registeredFunctions[fn.label] = fn;
            }, lunr.Pipeline.warnIfFunctionNotRegistered = function(fn) {
                fn.label && fn.label in this.registeredFunctions || lunr.utils.warn("Function is not registered with pipeline. This may cause problems when serialising the index.\n", fn);
            }, lunr.Pipeline.load = function(serialised) {
                var pipeline = new lunr.Pipeline;
                return serialised.forEach((function(fnName) {
                    var fn = lunr.Pipeline.registeredFunctions[fnName];
                    if (!fn) throw new Error("Cannot load unregistered function: " + fnName);
                    pipeline.add(fn);
                })), pipeline;
            }, lunr.Pipeline.prototype.add = function() {
                var fns = Array.prototype.slice.call(arguments);
                fns.forEach((function(fn) {
                    lunr.Pipeline.warnIfFunctionNotRegistered(fn), this._stack.push(fn);
                }), this);
            }, lunr.Pipeline.prototype.after = function(existingFn, newFn) {
                lunr.Pipeline.warnIfFunctionNotRegistered(newFn);
                var pos = this._stack.indexOf(existingFn);
                if (-1 == pos) throw new Error("Cannot find existingFn");
                this._stack.splice(pos += 1, 0, newFn);
            }, lunr.Pipeline.prototype.before = function(existingFn, newFn) {
                lunr.Pipeline.warnIfFunctionNotRegistered(newFn);
                var pos = this._stack.indexOf(existingFn);
                if (-1 == pos) throw new Error("Cannot find existingFn");
                this._stack.splice(pos, 0, newFn);
            }, lunr.Pipeline.prototype.remove = function(fn) {
                var pos = this._stack.indexOf(fn);
                -1 != pos && this._stack.splice(pos, 1);
            }, lunr.Pipeline.prototype.run = function(tokens) {
                for (var stackLength = this._stack.length, i = 0; i < stackLength; i++) {
                    for (var fn = this._stack[i], memo = [], j = 0; j < tokens.length; j++) {
                        var result = fn(tokens[j], j, tokens);
                        if (void 0 !== result && "" !== result) if (Array.isArray(result)) for (var k = 0; k < result.length; k++) memo.push(result[k]); else memo.push(result);
                    }
                    tokens = memo;
                }
                return tokens;
            }, lunr.Pipeline.prototype.runString = function(str, metadata) {
                var token = new lunr.Token(str, metadata);
                return this.run([ token ]).map((function(t) {
                    return t.toString();
                }));
            }, lunr.Pipeline.prototype.reset = function() {
                this._stack = [];
            }, lunr.Pipeline.prototype.toJSON = function() {
                return this._stack.map((function(fn) {
                    return lunr.Pipeline.warnIfFunctionNotRegistered(fn), fn.label;
                }));
            }, lunr.Vector = function(elements) {
                this._magnitude = 0, this.elements = elements || [];
            }, lunr.Vector.prototype.positionForIndex = function(index) {
                if (0 == this.elements.length) return 0;
                for (var start = 0, end = this.elements.length / 2, sliceLength = end - start, pivotPoint = Math.floor(sliceLength / 2), pivotIndex = this.elements[2 * pivotPoint]; sliceLength > 1 && (pivotIndex < index && (start = pivotPoint), 
                pivotIndex > index && (end = pivotPoint), pivotIndex != index); ) sliceLength = end - start, 
                pivotPoint = start + Math.floor(sliceLength / 2), pivotIndex = this.elements[2 * pivotPoint];
                return pivotIndex == index ? 2 * pivotPoint : pivotIndex > index ? 2 * pivotPoint : pivotIndex < index ? 2 * (pivotPoint + 1) : void 0;
            }, lunr.Vector.prototype.insert = function(insertIdx, val) {
                this.upsert(insertIdx, val, (function() {
                    throw "duplicate index";
                }));
            }, lunr.Vector.prototype.upsert = function(insertIdx, val, fn) {
                this._magnitude = 0;
                var position = this.positionForIndex(insertIdx);
                this.elements[position] == insertIdx ? this.elements[position + 1] = fn(this.elements[position + 1], val) : this.elements.splice(position, 0, insertIdx, val);
            }, lunr.Vector.prototype.magnitude = function() {
                if (this._magnitude) return this._magnitude;
                for (var sumOfSquares = 0, elementsLength = this.elements.length, i = 1; i < elementsLength; i += 2) {
                    var val = this.elements[i];
                    sumOfSquares += val * val;
                }
                return this._magnitude = Math.sqrt(sumOfSquares);
            }, lunr.Vector.prototype.dot = function(otherVector) {
                for (var dotProduct = 0, a = this.elements, b = otherVector.elements, aLen = a.length, bLen = b.length, aVal = 0, bVal = 0, i = 0, j = 0; i < aLen && j < bLen; ) (aVal = a[i]) < (bVal = b[j]) ? i += 2 : aVal > bVal ? j += 2 : aVal == bVal && (dotProduct += a[i + 1] * b[j + 1], 
                i += 2, j += 2);
                return dotProduct;
            }, lunr.Vector.prototype.similarity = function(otherVector) {
                return this.dot(otherVector) / this.magnitude() || 0;
            }, lunr.Vector.prototype.toArray = function() {
                for (var output = new Array(this.elements.length / 2), i = 1, j = 0; i < this.elements.length; i += 2, 
                j++) output[j] = this.elements[i];
                return output;
            }, lunr.Vector.prototype.toJSON = function() {
                return this.elements;
            }, lunr.stemmer = (step2list = {
                ational: "ate",
                tional: "tion",
                enci: "ence",
                anci: "ance",
                izer: "ize",
                bli: "ble",
                alli: "al",
                entli: "ent",
                eli: "e",
                ousli: "ous",
                ization: "ize",
                ation: "ate",
                ator: "ate",
                alism: "al",
                iveness: "ive",
                fulness: "ful",
                ousness: "ous",
                aliti: "al",
                iviti: "ive",
                biliti: "ble",
                logi: "log"
            }, step3list = {
                icate: "ic",
                ative: "",
                alize: "al",
                iciti: "ic",
                ical: "ic",
                ful: "",
                ness: ""
            }, v = "[aeiouy]", C = "[^aeiou][^aeiouy]*", re_mgr0 = new RegExp("^([^aeiou][^aeiouy]*)?[aeiouy][aeiou]*[^aeiou][^aeiouy]*"), 
            re_mgr1 = new RegExp("^([^aeiou][^aeiouy]*)?[aeiouy][aeiou]*[^aeiou][^aeiouy]*[aeiouy][aeiou]*[^aeiou][^aeiouy]*"), 
            re_meq1 = new RegExp("^([^aeiou][^aeiouy]*)?[aeiouy][aeiou]*[^aeiou][^aeiouy]*([aeiouy][aeiou]*)?$"), 
            re_s_v = new RegExp("^([^aeiou][^aeiouy]*)?[aeiouy]"), re_1a = /^(.+?)(ss|i)es$/, 
            re2_1a = /^(.+?)([^s])s$/, re_1b = /^(.+?)eed$/, re2_1b = /^(.+?)(ed|ing)$/, re_1b_2 = /.$/, 
            re2_1b_2 = /(at|bl|iz)$/, re3_1b_2 = new RegExp("([^aeiouylsz])\\1$"), re4_1b_2 = new RegExp("^" + C + v + "[^aeiouwxy]$"), 
            re_1c = /^(.+?[^aeiou])y$/, re_2 = /^(.+?)(ational|tional|enci|anci|izer|bli|alli|entli|eli|ousli|ization|ation|ator|alism|iveness|fulness|ousness|aliti|iviti|biliti|logi)$/, 
            re_3 = /^(.+?)(icate|ative|alize|iciti|ical|ful|ness)$/, re_4 = /^(.+?)(al|ance|ence|er|ic|able|ible|ant|ement|ment|ent|ou|ism|ate|iti|ous|ive|ize)$/, 
            re2_4 = /^(.+?)(s|t)(ion)$/, re_5 = /^(.+?)e$/, re_5_1 = /ll$/, re3_5 = new RegExp("^" + C + v + "[^aeiouwxy]$"), 
            porterStemmer = function(w) {
                var stem, suffix, firstch, re, re2, re3, re4;
                if (w.length < 3) return w;
                if ("y" == (firstch = w.substr(0, 1)) && (w = firstch.toUpperCase() + w.substr(1)), 
                re2 = re2_1a, (re = re_1a).test(w) ? w = w.replace(re, "$1$2") : re2.test(w) && (w = w.replace(re2, "$1$2")), 
                re2 = re2_1b, (re = re_1b).test(w)) {
                    var fp = re.exec(w);
                    (re = re_mgr0).test(fp[1]) && (w = w.replace(re = re_1b_2, ""));
                } else re2.test(w) && (fp = re2.exec(w), (re2 = re_s_v).test(stem = fp[1]) && (re3 = re3_1b_2, 
                re4 = re4_1b_2, (re2 = re2_1b_2).test(w = stem) ? w += "e" : re3.test(w) ? w = w.replace(re = re_1b_2, "") : re4.test(w) && (w += "e")));
                return (re = re_1c).test(w) && (w = (stem = (fp = re.exec(w))[1]) + "i"), (re = re_2).test(w) && (suffix = (fp = re.exec(w))[2], 
                (re = re_mgr0).test(stem = fp[1]) && (w = stem + step2list[suffix])), (re = re_3).test(w) && (suffix = (fp = re.exec(w))[2], 
                (re = re_mgr0).test(stem = fp[1]) && (w = stem + step3list[suffix])), re2 = re2_4, 
                (re = re_4).test(w) ? (fp = re.exec(w), (re = re_mgr1).test(stem = fp[1]) && (w = stem)) : re2.test(w) && (fp = re2.exec(w), 
                (re2 = re_mgr1).test(stem = fp[1] + fp[2]) && (w = stem)), (re = re_5).test(w) && (fp = re.exec(w), 
                re2 = re_meq1, re3 = re3_5, ((re = re_mgr1).test(stem = fp[1]) || re2.test(stem) && !re3.test(stem)) && (w = stem)), 
                re2 = re_mgr1, (re = re_5_1).test(w) && re2.test(w) && (w = w.replace(re = re_1b_2, "")), 
                "y" == firstch && (w = firstch.toLowerCase() + w.substr(1)), w;
            }, function(token) {
                return token.update(porterStemmer);
            }), lunr.Pipeline.registerFunction(lunr.stemmer, "stemmer"), lunr.generateStopWordFilter = function(stopWords) {
                var words = stopWords.reduce((function(memo, stopWord) {
                    return memo[stopWord] = stopWord, memo;
                }), {});
                return function(token) {
                    if (token && words[token.toString()] !== token.toString()) return token;
                };
            }, lunr.stopWordFilter = lunr.generateStopWordFilter([ "a", "able", "about", "across", "after", "all", "almost", "also", "am", "among", "an", "and", "any", "are", "as", "at", "be", "because", "been", "but", "by", "can", "cannot", "could", "dear", "did", "do", "does", "either", "else", "ever", "every", "for", "from", "get", "got", "had", "has", "have", "he", "her", "hers", "him", "his", "how", "however", "i", "if", "in", "into", "is", "it", "its", "just", "least", "let", "like", "likely", "may", "me", "might", "most", "must", "my", "neither", "no", "nor", "not", "of", "off", "often", "on", "only", "or", "other", "our", "own", "rather", "said", "say", "says", "she", "should", "since", "so", "some", "than", "that", "the", "their", "them", "then", "there", "these", "they", "this", "tis", "to", "too", "twas", "us", "wants", "was", "we", "were", "what", "when", "where", "which", "while", "who", "whom", "why", "will", "with", "would", "yet", "you", "your" ]), 
            lunr.Pipeline.registerFunction(lunr.stopWordFilter, "stopWordFilter"), lunr.trimmer = function(token) {
                return token.update((function(s) {
                    return s.replace(/^\W+/, "").replace(/\W+$/, "");
                }));
            }, lunr.Pipeline.registerFunction(lunr.trimmer, "trimmer"), lunr.TokenSet = function() {
                this.final = !1, this.edges = {}, this.id = lunr.TokenSet._nextId, lunr.TokenSet._nextId += 1;
            }, lunr.TokenSet._nextId = 1, lunr.TokenSet.fromArray = function(arr) {
                for (var builder = new lunr.TokenSet.Builder, i = 0, len = arr.length; i < len; i++) builder.insert(arr[i]);
                return builder.finish(), builder.root;
            }, lunr.TokenSet.fromClause = function(clause) {
                return "editDistance" in clause ? lunr.TokenSet.fromFuzzyString(clause.term, clause.editDistance) : lunr.TokenSet.fromString(clause.term);
            }, lunr.TokenSet.fromFuzzyString = function(str, editDistance) {
                for (var root = new lunr.TokenSet, stack = [ {
                    node: root,
                    editsRemaining: editDistance,
                    str: str
                } ]; stack.length; ) {
                    var frame = stack.pop();
                    if (frame.str.length > 0) {
                        var noEditNode, char = frame.str.charAt(0);
                        char in frame.node.edges ? noEditNode = frame.node.edges[char] : (noEditNode = new lunr.TokenSet, 
                        frame.node.edges[char] = noEditNode), 1 == frame.str.length && (noEditNode.final = !0), 
                        stack.push({
                            node: noEditNode,
                            editsRemaining: frame.editsRemaining,
                            str: frame.str.slice(1)
                        });
                    }
                    if (0 != frame.editsRemaining) {
                        if ("*" in frame.node.edges) var insertionNode = frame.node.edges["*"]; else insertionNode = new lunr.TokenSet, 
                        frame.node.edges["*"] = insertionNode;
                        if (0 == frame.str.length && (insertionNode.final = !0), stack.push({
                            node: insertionNode,
                            editsRemaining: frame.editsRemaining - 1,
                            str: frame.str
                        }), frame.str.length > 1 && stack.push({
                            node: frame.node,
                            editsRemaining: frame.editsRemaining - 1,
                            str: frame.str.slice(1)
                        }), 1 == frame.str.length && (frame.node.final = !0), frame.str.length >= 1) {
                            if ("*" in frame.node.edges) var substitutionNode = frame.node.edges["*"]; else substitutionNode = new lunr.TokenSet, 
                            frame.node.edges["*"] = substitutionNode;
                            1 == frame.str.length && (substitutionNode.final = !0), stack.push({
                                node: substitutionNode,
                                editsRemaining: frame.editsRemaining - 1,
                                str: frame.str.slice(1)
                            });
                        }
                        if (frame.str.length > 1) {
                            var transposeNode, charA = frame.str.charAt(0), charB = frame.str.charAt(1);
                            charB in frame.node.edges ? transposeNode = frame.node.edges[charB] : (transposeNode = new lunr.TokenSet, 
                            frame.node.edges[charB] = transposeNode), 1 == frame.str.length && (transposeNode.final = !0), 
                            stack.push({
                                node: transposeNode,
                                editsRemaining: frame.editsRemaining - 1,
                                str: charA + frame.str.slice(2)
                            });
                        }
                    }
                }
                return root;
            }, lunr.TokenSet.fromString = function(str) {
                for (var node = new lunr.TokenSet, root = node, i = 0, len = str.length; i < len; i++) {
                    var char = str[i], final = i == len - 1;
                    if ("*" == char) node.edges[char] = node, node.final = final; else {
                        var next = new lunr.TokenSet;
                        next.final = final, node.edges[char] = next, node = next;
                    }
                }
                return root;
            }, lunr.TokenSet.prototype.toArray = function() {
                for (var words = [], stack = [ {
                    prefix: "",
                    node: this
                } ]; stack.length; ) {
                    var frame = stack.pop(), edges = Object.keys(frame.node.edges), len = edges.length;
                    frame.node.final && (frame.prefix.charAt(0), words.push(frame.prefix));
                    for (var i = 0; i < len; i++) {
                        var edge = edges[i];
                        stack.push({
                            prefix: frame.prefix.concat(edge),
                            node: frame.node.edges[edge]
                        });
                    }
                }
                return words;
            }, lunr.TokenSet.prototype.toString = function() {
                if (this._str) return this._str;
                for (var str = this.final ? "1" : "0", labels = Object.keys(this.edges).sort(), len = labels.length, i = 0; i < len; i++) {
                    var label = labels[i];
                    str = str + label + this.edges[label].id;
                }
                return str;
            }, lunr.TokenSet.prototype.intersect = function(b) {
                for (var output = new lunr.TokenSet, frame = void 0, stack = [ {
                    qNode: b,
                    output: output,
                    node: this
                } ]; stack.length; ) {
                    frame = stack.pop();
                    for (var qEdges = Object.keys(frame.qNode.edges), qLen = qEdges.length, nEdges = Object.keys(frame.node.edges), nLen = nEdges.length, q = 0; q < qLen; q++) for (var qEdge = qEdges[q], n = 0; n < nLen; n++) {
                        var nEdge = nEdges[n];
                        if (nEdge == qEdge || "*" == qEdge) {
                            var node = frame.node.edges[nEdge], qNode = frame.qNode.edges[qEdge], final = node.final && qNode.final, next = void 0;
                            nEdge in frame.output.edges ? (next = frame.output.edges[nEdge]).final = next.final || final : ((next = new lunr.TokenSet).final = final, 
                            frame.output.edges[nEdge] = next), stack.push({
                                qNode: qNode,
                                output: next,
                                node: node
                            });
                        }
                    }
                }
                return output;
            }, lunr.TokenSet.Builder = function() {
                this.previousWord = "", this.root = new lunr.TokenSet, this.uncheckedNodes = [], 
                this.minimizedNodes = {};
            }, lunr.TokenSet.Builder.prototype.insert = function(word) {
                var node, commonPrefix = 0;
                if (word < this.previousWord) throw new Error("Out of order word insertion");
                for (var i = 0; i < word.length && i < this.previousWord.length && word[i] == this.previousWord[i]; i++) commonPrefix++;
                for (this.minimize(commonPrefix), node = 0 == this.uncheckedNodes.length ? this.root : this.uncheckedNodes[this.uncheckedNodes.length - 1].child, 
                i = commonPrefix; i < word.length; i++) {
                    var nextNode = new lunr.TokenSet, char = word[i];
                    node.edges[char] = nextNode, this.uncheckedNodes.push({
                        parent: node,
                        char: char,
                        child: nextNode
                    }), node = nextNode;
                }
                node.final = !0, this.previousWord = word;
            }, lunr.TokenSet.Builder.prototype.finish = function() {
                this.minimize(0);
            }, lunr.TokenSet.Builder.prototype.minimize = function(downTo) {
                for (var i = this.uncheckedNodes.length - 1; i >= downTo; i--) {
                    var node = this.uncheckedNodes[i], childKey = node.child.toString();
                    childKey in this.minimizedNodes ? node.parent.edges[node.char] = this.minimizedNodes[childKey] : (node.child._str = childKey, 
                    this.minimizedNodes[childKey] = node.child), this.uncheckedNodes.pop();
                }
            }, lunr.Index = function(attrs) {
                this.invertedIndex = attrs.invertedIndex, this.fieldVectors = attrs.fieldVectors, 
                this.tokenSet = attrs.tokenSet, this.fields = attrs.fields, this.pipeline = attrs.pipeline;
            }, lunr.Index.prototype.search = function(queryString) {
                return this.query((function(query) {
                    new lunr.QueryParser(queryString, query).parse();
                }));
            }, lunr.Index.prototype.query = function(fn) {
                for (var query = new lunr.Query(this.fields), matchingFields = Object.create(null), queryVectors = Object.create(null), termFieldCache = Object.create(null), requiredMatches = Object.create(null), prohibitedMatches = Object.create(null), i = 0; i < this.fields.length; i++) queryVectors[this.fields[i]] = new lunr.Vector;
                for (fn.call(query, query), i = 0; i < query.clauses.length; i++) {
                    var terms, clause = query.clauses[i], clauseMatches = lunr.Set.complete;
                    terms = clause.usePipeline ? this.pipeline.runString(clause.term, {
                        fields: clause.fields
                    }) : [ clause.term ];
                    for (var m = 0; m < terms.length; m++) {
                        clause.term = terms[m];
                        var termTokenSet = lunr.TokenSet.fromClause(clause), expandedTerms = this.tokenSet.intersect(termTokenSet).toArray();
                        if (0 === expandedTerms.length && clause.presence === lunr.Query.presence.REQUIRED) {
                            for (var k = 0; k < clause.fields.length; k++) requiredMatches[field = clause.fields[k]] = lunr.Set.empty;
                            break;
                        }
                        for (var j = 0; j < expandedTerms.length; j++) {
                            var expandedTerm = expandedTerms[j], posting = this.invertedIndex[expandedTerm], termIndex = posting._index;
                            for (k = 0; k < clause.fields.length; k++) {
                                var fieldPosting = posting[field = clause.fields[k]], matchingDocumentRefs = Object.keys(fieldPosting), termField = expandedTerm + "/" + field, matchingDocumentsSet = new lunr.Set(matchingDocumentRefs);
                                if (clause.presence == lunr.Query.presence.REQUIRED && (clauseMatches = clauseMatches.union(matchingDocumentsSet), 
                                void 0 === requiredMatches[field] && (requiredMatches[field] = lunr.Set.complete)), 
                                clause.presence != lunr.Query.presence.PROHIBITED) {
                                    if (queryVectors[field].upsert(termIndex, clause.boost, (function(a, b) {
                                        return a + b;
                                    })), !termFieldCache[termField]) {
                                        for (var l = 0; l < matchingDocumentRefs.length; l++) {
                                            var fieldMatch, matchingDocumentRef = matchingDocumentRefs[l], matchingFieldRef = new lunr.FieldRef(matchingDocumentRef, field), metadata = fieldPosting[matchingDocumentRef];
                                            void 0 === (fieldMatch = matchingFields[matchingFieldRef]) ? matchingFields[matchingFieldRef] = new lunr.MatchData(expandedTerm, field, metadata) : fieldMatch.add(expandedTerm, field, metadata);
                                        }
                                        termFieldCache[termField] = !0;
                                    }
                                } else void 0 === prohibitedMatches[field] && (prohibitedMatches[field] = lunr.Set.empty), 
                                prohibitedMatches[field] = prohibitedMatches[field].union(matchingDocumentsSet);
                            }
                        }
                    }
                    if (clause.presence === lunr.Query.presence.REQUIRED) for (k = 0; k < clause.fields.length; k++) requiredMatches[field = clause.fields[k]] = requiredMatches[field].intersect(clauseMatches);
                }
                var allRequiredMatches = lunr.Set.complete, allProhibitedMatches = lunr.Set.empty;
                for (i = 0; i < this.fields.length; i++) {
                    var field;
                    requiredMatches[field = this.fields[i]] && (allRequiredMatches = allRequiredMatches.intersect(requiredMatches[field])), 
                    prohibitedMatches[field] && (allProhibitedMatches = allProhibitedMatches.union(prohibitedMatches[field]));
                }
                var matchingFieldRefs = Object.keys(matchingFields), results = [], matches = Object.create(null);
                if (query.isNegated()) for (matchingFieldRefs = Object.keys(this.fieldVectors), 
                i = 0; i < matchingFieldRefs.length; i++) {
                    var fieldRef = lunr.FieldRef.fromString(matchingFieldRef = matchingFieldRefs[i]);
                    matchingFields[matchingFieldRef] = new lunr.MatchData;
                }
                for (i = 0; i < matchingFieldRefs.length; i++) {
                    var docRef = (fieldRef = lunr.FieldRef.fromString(matchingFieldRefs[i])).docRef;
                    if (allRequiredMatches.contains(docRef) && !allProhibitedMatches.contains(docRef)) {
                        var docMatch, score = queryVectors[fieldRef.fieldName].similarity(this.fieldVectors[fieldRef]);
                        if (void 0 !== (docMatch = matches[docRef])) docMatch.score += score, docMatch.matchData.combine(matchingFields[fieldRef]); else {
                            var match = {
                                ref: docRef,
                                score: score,
                                matchData: matchingFields[fieldRef]
                            };
                            matches[docRef] = match, results.push(match);
                        }
                    }
                }
                return results.sort((function(a, b) {
                    return b.score - a.score;
                }));
            }, lunr.Index.prototype.toJSON = function() {
                var invertedIndex = Object.keys(this.invertedIndex).sort().map((function(term) {
                    return [ term, this.invertedIndex[term] ];
                }), this), fieldVectors = Object.keys(this.fieldVectors).map((function(ref) {
                    return [ ref, this.fieldVectors[ref].toJSON() ];
                }), this);
                return {
                    version: lunr.version,
                    fields: this.fields,
                    fieldVectors: fieldVectors,
                    invertedIndex: invertedIndex,
                    pipeline: this.pipeline.toJSON()
                };
            }, lunr.Index.load = function(serializedIndex) {
                var attrs = {}, fieldVectors = {}, serializedVectors = serializedIndex.fieldVectors, invertedIndex = Object.create(null), serializedInvertedIndex = serializedIndex.invertedIndex, tokenSetBuilder = new lunr.TokenSet.Builder, pipeline = lunr.Pipeline.load(serializedIndex.pipeline);
                serializedIndex.version != lunr.version && lunr.utils.warn("Version mismatch when loading serialised index. Current version of lunr '" + lunr.version + "' does not match serialized index '" + serializedIndex.version + "'");
                for (var i = 0; i < serializedVectors.length; i++) fieldVectors[(tuple = serializedVectors[i])[0]] = new lunr.Vector(tuple[1]);
                for (i = 0; i < serializedInvertedIndex.length; i++) {
                    var tuple, term = (tuple = serializedInvertedIndex[i])[0], posting = tuple[1];
                    tokenSetBuilder.insert(term), invertedIndex[term] = posting;
                }
                return tokenSetBuilder.finish(), attrs.fields = serializedIndex.fields, attrs.fieldVectors = fieldVectors, 
                attrs.invertedIndex = invertedIndex, attrs.tokenSet = tokenSetBuilder.root, attrs.pipeline = pipeline, 
                new lunr.Index(attrs);
            }, lunr.Builder = function() {
                this._ref = "id", this._fields = Object.create(null), this._documents = Object.create(null), 
                this.invertedIndex = Object.create(null), this.fieldTermFrequencies = {}, this.fieldLengths = {}, 
                this.tokenizer = lunr.tokenizer, this.pipeline = new lunr.Pipeline, this.searchPipeline = new lunr.Pipeline, 
                this.documentCount = 0, this._b = .75, this._k1 = 1.2, this.termIndex = 0, this.metadataWhitelist = [];
            }, lunr.Builder.prototype.ref = function(ref) {
                this._ref = ref;
            }, lunr.Builder.prototype.field = function(fieldName, attributes) {
                if (/\//.test(fieldName)) throw new RangeError("Field '" + fieldName + "' contains illegal character '/'");
                this._fields[fieldName] = attributes || {};
            }, lunr.Builder.prototype.b = function(number) {
                this._b = number < 0 ? 0 : number > 1 ? 1 : number;
            }, lunr.Builder.prototype.k1 = function(number) {
                this._k1 = number;
            }, lunr.Builder.prototype.add = function(doc, attributes) {
                var docRef = doc[this._ref], fields = Object.keys(this._fields);
                this._documents[docRef] = attributes || {}, this.documentCount += 1;
                for (var i = 0; i < fields.length; i++) {
                    var fieldName = fields[i], extractor = this._fields[fieldName].extractor, field = extractor ? extractor(doc) : doc[fieldName], tokens = this.tokenizer(field, {
                        fields: [ fieldName ]
                    }), terms = this.pipeline.run(tokens), fieldRef = new lunr.FieldRef(docRef, fieldName), fieldTerms = Object.create(null);
                    this.fieldTermFrequencies[fieldRef] = fieldTerms, this.fieldLengths[fieldRef] = 0, 
                    this.fieldLengths[fieldRef] += terms.length;
                    for (var j = 0; j < terms.length; j++) {
                        var term = terms[j];
                        if (null == fieldTerms[term] && (fieldTerms[term] = 0), fieldTerms[term] += 1, null == this.invertedIndex[term]) {
                            var posting = Object.create(null);
                            posting._index = this.termIndex, this.termIndex += 1;
                            for (var k = 0; k < fields.length; k++) posting[fields[k]] = Object.create(null);
                            this.invertedIndex[term] = posting;
                        }
                        null == this.invertedIndex[term][fieldName][docRef] && (this.invertedIndex[term][fieldName][docRef] = Object.create(null));
                        for (var l = 0; l < this.metadataWhitelist.length; l++) {
                            var metadataKey = this.metadataWhitelist[l], metadata = term.metadata[metadataKey];
                            null == this.invertedIndex[term][fieldName][docRef][metadataKey] && (this.invertedIndex[term][fieldName][docRef][metadataKey] = []), 
                            this.invertedIndex[term][fieldName][docRef][metadataKey].push(metadata);
                        }
                    }
                }
            }, lunr.Builder.prototype.calculateAverageFieldLengths = function() {
                for (var fieldRefs = Object.keys(this.fieldLengths), numberOfFields = fieldRefs.length, accumulator = {}, documentsWithField = {}, i = 0; i < numberOfFields; i++) {
                    var fieldRef = lunr.FieldRef.fromString(fieldRefs[i]), field = fieldRef.fieldName;
                    documentsWithField[field] || (documentsWithField[field] = 0), documentsWithField[field] += 1, 
                    accumulator[field] || (accumulator[field] = 0), accumulator[field] += this.fieldLengths[fieldRef];
                }
                var fields = Object.keys(this._fields);
                for (i = 0; i < fields.length; i++) {
                    var fieldName = fields[i];
                    accumulator[fieldName] = accumulator[fieldName] / documentsWithField[fieldName];
                }
                this.averageFieldLength = accumulator;
            }, lunr.Builder.prototype.createFieldVectors = function() {
                for (var fieldVectors = {}, fieldRefs = Object.keys(this.fieldTermFrequencies), fieldRefsLength = fieldRefs.length, termIdfCache = Object.create(null), i = 0; i < fieldRefsLength; i++) {
                    for (var fieldRef = lunr.FieldRef.fromString(fieldRefs[i]), fieldName = fieldRef.fieldName, fieldLength = this.fieldLengths[fieldRef], fieldVector = new lunr.Vector, termFrequencies = this.fieldTermFrequencies[fieldRef], terms = Object.keys(termFrequencies), termsLength = terms.length, fieldBoost = this._fields[fieldName].boost || 1, docBoost = this._documents[fieldRef.docRef].boost || 1, j = 0; j < termsLength; j++) {
                        var idf, score, scoreWithPrecision, term = terms[j], tf = termFrequencies[term], termIndex = this.invertedIndex[term]._index;
                        void 0 === termIdfCache[term] ? (idf = lunr.idf(this.invertedIndex[term], this.documentCount), 
                        termIdfCache[term] = idf) : idf = termIdfCache[term], score = idf * ((this._k1 + 1) * tf) / (this._k1 * (1 - this._b + this._b * (fieldLength / this.averageFieldLength[fieldName])) + tf), 
                        score *= fieldBoost, score *= docBoost, scoreWithPrecision = Math.round(1e3 * score) / 1e3, 
                        fieldVector.insert(termIndex, scoreWithPrecision);
                    }
                    fieldVectors[fieldRef] = fieldVector;
                }
                this.fieldVectors = fieldVectors;
            }, lunr.Builder.prototype.createTokenSet = function() {
                this.tokenSet = lunr.TokenSet.fromArray(Object.keys(this.invertedIndex).sort());
            }, lunr.Builder.prototype.build = function() {
                return this.calculateAverageFieldLengths(), this.createFieldVectors(), this.createTokenSet(), 
                new lunr.Index({
                    invertedIndex: this.invertedIndex,
                    fieldVectors: this.fieldVectors,
                    tokenSet: this.tokenSet,
                    fields: Object.keys(this._fields),
                    pipeline: this.searchPipeline
                });
            }, lunr.Builder.prototype.use = function(fn) {
                var args = Array.prototype.slice.call(arguments, 1);
                args.unshift(this), fn.apply(this, args);
            }, lunr.MatchData = function(term, field, metadata) {
                for (var clonedMetadata = Object.create(null), metadataKeys = Object.keys(metadata || {}), i = 0; i < metadataKeys.length; i++) {
                    var key = metadataKeys[i];
                    clonedMetadata[key] = metadata[key].slice();
                }
                this.metadata = Object.create(null), void 0 !== term && (this.metadata[term] = Object.create(null), 
                this.metadata[term][field] = clonedMetadata);
            }, lunr.MatchData.prototype.combine = function(otherMatchData) {
                for (var terms = Object.keys(otherMatchData.metadata), i = 0; i < terms.length; i++) {
                    var term = terms[i], fields = Object.keys(otherMatchData.metadata[term]);
                    null == this.metadata[term] && (this.metadata[term] = Object.create(null));
                    for (var j = 0; j < fields.length; j++) {
                        var field = fields[j], keys = Object.keys(otherMatchData.metadata[term][field]);
                        null == this.metadata[term][field] && (this.metadata[term][field] = Object.create(null));
                        for (var k = 0; k < keys.length; k++) {
                            var key = keys[k];
                            this.metadata[term][field][key] = null == this.metadata[term][field][key] ? otherMatchData.metadata[term][field][key] : this.metadata[term][field][key].concat(otherMatchData.metadata[term][field][key]);
                        }
                    }
                }
            }, lunr.MatchData.prototype.add = function(term, field, metadata) {
                if (!(term in this.metadata)) return this.metadata[term] = Object.create(null), 
                void (this.metadata[term][field] = metadata);
                if (field in this.metadata[term]) for (var metadataKeys = Object.keys(metadata), i = 0; i < metadataKeys.length; i++) {
                    var key = metadataKeys[i];
                    this.metadata[term][field][key] = key in this.metadata[term][field] ? this.metadata[term][field][key].concat(metadata[key]) : metadata[key];
                } else this.metadata[term][field] = metadata;
            }, lunr.Query = function(allFields) {
                this.clauses = [], this.allFields = allFields;
            }, lunr.Query.wildcard = new String("*"), lunr.Query.wildcard.NONE = 0, lunr.Query.wildcard.LEADING = 1, 
            lunr.Query.wildcard.TRAILING = 2, lunr.Query.presence = {
                OPTIONAL: 1,
                REQUIRED: 2,
                PROHIBITED: 3
            }, lunr.Query.prototype.clause = function(clause) {
                return "fields" in clause || (clause.fields = this.allFields), "boost" in clause || (clause.boost = 1), 
                "usePipeline" in clause || (clause.usePipeline = !0), "wildcard" in clause || (clause.wildcard = lunr.Query.wildcard.NONE), 
                clause.wildcard & lunr.Query.wildcard.LEADING && clause.term.charAt(0) != lunr.Query.wildcard && (clause.term = "*" + clause.term), 
                clause.wildcard & lunr.Query.wildcard.TRAILING && clause.term.slice(-1) != lunr.Query.wildcard && (clause.term = clause.term + "*"), 
                "presence" in clause || (clause.presence = lunr.Query.presence.OPTIONAL), this.clauses.push(clause), 
                this;
            }, lunr.Query.prototype.isNegated = function() {
                for (var i = 0; i < this.clauses.length; i++) if (this.clauses[i].presence != lunr.Query.presence.PROHIBITED) return !1;
                return !0;
            }, lunr.Query.prototype.term = function(term, options) {
                if (Array.isArray(term)) return term.forEach((function(t) {
                    this.term(t, lunr.utils.clone(options));
                }), this), this;
                var clause = options || {};
                return clause.term = term.toString(), this.clause(clause), this;
            }, lunr.QueryParseError = function(message, start, end) {
                this.name = "QueryParseError", this.message = message, this.start = start, this.end = end;
            }, lunr.QueryParseError.prototype = new Error, lunr.QueryLexer = function(str) {
                this.lexemes = [], this.str = str, this.length = str.length, this.pos = 0, this.start = 0, 
                this.escapeCharPositions = [];
            }, lunr.QueryLexer.prototype.run = function() {
                for (var state = lunr.QueryLexer.lexText; state; ) state = state(this);
            }, lunr.QueryLexer.prototype.sliceString = function() {
                for (var subSlices = [], sliceStart = this.start, sliceEnd = this.pos, i = 0; i < this.escapeCharPositions.length; i++) subSlices.push(this.str.slice(sliceStart, sliceEnd = this.escapeCharPositions[i])), 
                sliceStart = sliceEnd + 1;
                return subSlices.push(this.str.slice(sliceStart, this.pos)), this.escapeCharPositions.length = 0, 
                subSlices.join("");
            }, lunr.QueryLexer.prototype.emit = function(type) {
                this.lexemes.push({
                    type: type,
                    str: this.sliceString(),
                    start: this.start,
                    end: this.pos
                }), this.start = this.pos;
            }, lunr.QueryLexer.prototype.escapeCharacter = function() {
                this.escapeCharPositions.push(this.pos - 1), this.pos += 1;
            }, lunr.QueryLexer.prototype.next = function() {
                if (this.pos >= this.length) return lunr.QueryLexer.EOS;
                var char = this.str.charAt(this.pos);
                return this.pos += 1, char;
            }, lunr.QueryLexer.prototype.width = function() {
                return this.pos - this.start;
            }, lunr.QueryLexer.prototype.ignore = function() {
                this.start == this.pos && (this.pos += 1), this.start = this.pos;
            }, lunr.QueryLexer.prototype.backup = function() {
                this.pos -= 1;
            }, lunr.QueryLexer.prototype.acceptDigitRun = function() {
                var char, charCode;
                do {
                    charCode = (char = this.next()).charCodeAt(0);
                } while (charCode > 47 && charCode < 58);
                char != lunr.QueryLexer.EOS && this.backup();
            }, lunr.QueryLexer.prototype.more = function() {
                return this.pos < this.length;
            }, lunr.QueryLexer.EOS = "EOS", lunr.QueryLexer.FIELD = "FIELD", lunr.QueryLexer.TERM = "TERM", 
            lunr.QueryLexer.EDIT_DISTANCE = "EDIT_DISTANCE", lunr.QueryLexer.BOOST = "BOOST", 
            lunr.QueryLexer.PRESENCE = "PRESENCE", lunr.QueryLexer.lexField = function(lexer) {
                return lexer.backup(), lexer.emit(lunr.QueryLexer.FIELD), lexer.ignore(), lunr.QueryLexer.lexText;
            }, lunr.QueryLexer.lexTerm = function(lexer) {
                if (lexer.width() > 1 && (lexer.backup(), lexer.emit(lunr.QueryLexer.TERM)), lexer.ignore(), 
                lexer.more()) return lunr.QueryLexer.lexText;
            }, lunr.QueryLexer.lexEditDistance = function(lexer) {
                return lexer.ignore(), lexer.acceptDigitRun(), lexer.emit(lunr.QueryLexer.EDIT_DISTANCE), 
                lunr.QueryLexer.lexText;
            }, lunr.QueryLexer.lexBoost = function(lexer) {
                return lexer.ignore(), lexer.acceptDigitRun(), lexer.emit(lunr.QueryLexer.BOOST), 
                lunr.QueryLexer.lexText;
            }, lunr.QueryLexer.lexEOS = function(lexer) {
                lexer.width() > 0 && lexer.emit(lunr.QueryLexer.TERM);
            }, lunr.QueryLexer.termSeparator = lunr.tokenizer.separator, lunr.QueryLexer.lexText = function(lexer) {
                for (;;) {
                    var char = lexer.next();
                    if (char == lunr.QueryLexer.EOS) return lunr.QueryLexer.lexEOS;
                    if (92 != char.charCodeAt(0)) {
                        if (":" == char) return lunr.QueryLexer.lexField;
                        if ("~" == char) return lexer.backup(), lexer.width() > 0 && lexer.emit(lunr.QueryLexer.TERM), 
                        lunr.QueryLexer.lexEditDistance;
                        if ("^" == char) return lexer.backup(), lexer.width() > 0 && lexer.emit(lunr.QueryLexer.TERM), 
                        lunr.QueryLexer.lexBoost;
                        if ("+" == char && 1 === lexer.width()) return lexer.emit(lunr.QueryLexer.PRESENCE), 
                        lunr.QueryLexer.lexText;
                        if ("-" == char && 1 === lexer.width()) return lexer.emit(lunr.QueryLexer.PRESENCE), 
                        lunr.QueryLexer.lexText;
                        if (char.match(lunr.QueryLexer.termSeparator)) return lunr.QueryLexer.lexTerm;
                    } else lexer.escapeCharacter();
                }
            }, lunr.QueryParser = function(str, query) {
                this.lexer = new lunr.QueryLexer(str), this.query = query, this.currentClause = {}, 
                this.lexemeIdx = 0;
            }, lunr.QueryParser.prototype.parse = function() {
                this.lexer.run(), this.lexemes = this.lexer.lexemes;
                for (var state = lunr.QueryParser.parseClause; state; ) state = state(this);
                return this.query;
            }, lunr.QueryParser.prototype.peekLexeme = function() {
                return this.lexemes[this.lexemeIdx];
            }, lunr.QueryParser.prototype.consumeLexeme = function() {
                var lexeme = this.peekLexeme();
                return this.lexemeIdx += 1, lexeme;
            }, lunr.QueryParser.prototype.nextClause = function() {
                this.query.clause(this.currentClause), this.currentClause = {};
            }, lunr.QueryParser.parseClause = function(parser) {
                var lexeme = parser.peekLexeme();
                if (null != lexeme) switch (lexeme.type) {
                  case lunr.QueryLexer.PRESENCE:
                    return lunr.QueryParser.parsePresence;

                  case lunr.QueryLexer.FIELD:
                    return lunr.QueryParser.parseField;

                  case lunr.QueryLexer.TERM:
                    return lunr.QueryParser.parseTerm;

                  default:
                    var errorMessage = "expected either a field or a term, found " + lexeme.type;
                    throw lexeme.str.length >= 1 && (errorMessage += " with value '" + lexeme.str + "'"), 
                    new lunr.QueryParseError(errorMessage, lexeme.start, lexeme.end);
                }
            }, lunr.QueryParser.parsePresence = function(parser) {
                var lexeme = parser.consumeLexeme();
                if (null != lexeme) {
                    switch (lexeme.str) {
                      case "-":
                        parser.currentClause.presence = lunr.Query.presence.PROHIBITED;
                        break;

                      case "+":
                        parser.currentClause.presence = lunr.Query.presence.REQUIRED;
                        break;

                      default:
                        throw new lunr.QueryParseError("unrecognised presence operator'" + lexeme.str + "'", lexeme.start, lexeme.end);
                    }
                    var nextLexeme = parser.peekLexeme();
                    if (null == nextLexeme) throw new lunr.QueryParseError("expecting term or field, found nothing", lexeme.start, lexeme.end);
                    switch (nextLexeme.type) {
                      case lunr.QueryLexer.FIELD:
                        return lunr.QueryParser.parseField;

                      case lunr.QueryLexer.TERM:
                        return lunr.QueryParser.parseTerm;

                      default:
                        throw new lunr.QueryParseError("expecting term or field, found '" + nextLexeme.type + "'", nextLexeme.start, nextLexeme.end);
                    }
                }
            }, lunr.QueryParser.parseField = function(parser) {
                var lexeme = parser.consumeLexeme();
                if (null != lexeme) {
                    if (-1 == parser.query.allFields.indexOf(lexeme.str)) {
                        var possibleFields = parser.query.allFields.map((function(f) {
                            return "'" + f + "'";
                        })).join(", ");
                        throw new lunr.QueryParseError("unrecognised field '" + lexeme.str + "', possible fields: " + possibleFields, lexeme.start, lexeme.end);
                    }
                    parser.currentClause.fields = [ lexeme.str ];
                    var nextLexeme = parser.peekLexeme();
                    if (null == nextLexeme) throw new lunr.QueryParseError("expecting term, found nothing", lexeme.start, lexeme.end);
                    switch (nextLexeme.type) {
                      case lunr.QueryLexer.TERM:
                        return lunr.QueryParser.parseTerm;

                      default:
                        throw new lunr.QueryParseError("expecting term, found '" + nextLexeme.type + "'", nextLexeme.start, nextLexeme.end);
                    }
                }
            }, lunr.QueryParser.parseTerm = function(parser) {
                var lexeme = parser.consumeLexeme();
                if (null != lexeme) {
                    parser.currentClause.term = lexeme.str.toLowerCase(), -1 != lexeme.str.indexOf("*") && (parser.currentClause.usePipeline = !1);
                    var nextLexeme = parser.peekLexeme();
                    if (null != nextLexeme) switch (nextLexeme.type) {
                      case lunr.QueryLexer.TERM:
                        return parser.nextClause(), lunr.QueryParser.parseTerm;

                      case lunr.QueryLexer.FIELD:
                        return parser.nextClause(), lunr.QueryParser.parseField;

                      case lunr.QueryLexer.EDIT_DISTANCE:
                        return lunr.QueryParser.parseEditDistance;

                      case lunr.QueryLexer.BOOST:
                        return lunr.QueryParser.parseBoost;

                      case lunr.QueryLexer.PRESENCE:
                        return parser.nextClause(), lunr.QueryParser.parsePresence;

                      default:
                        throw new lunr.QueryParseError("Unexpected lexeme type '" + nextLexeme.type + "'", nextLexeme.start, nextLexeme.end);
                    } else parser.nextClause();
                }
            }, lunr.QueryParser.parseEditDistance = function(parser) {
                var lexeme = parser.consumeLexeme();
                if (null != lexeme) {
                    var editDistance = parseInt(lexeme.str, 10);
                    if (isNaN(editDistance)) throw new lunr.QueryParseError("edit distance must be numeric", lexeme.start, lexeme.end);
                    parser.currentClause.editDistance = editDistance;
                    var nextLexeme = parser.peekLexeme();
                    if (null != nextLexeme) switch (nextLexeme.type) {
                      case lunr.QueryLexer.TERM:
                        return parser.nextClause(), lunr.QueryParser.parseTerm;

                      case lunr.QueryLexer.FIELD:
                        return parser.nextClause(), lunr.QueryParser.parseField;

                      case lunr.QueryLexer.EDIT_DISTANCE:
                        return lunr.QueryParser.parseEditDistance;

                      case lunr.QueryLexer.BOOST:
                        return lunr.QueryParser.parseBoost;

                      case lunr.QueryLexer.PRESENCE:
                        return parser.nextClause(), lunr.QueryParser.parsePresence;

                      default:
                        throw new lunr.QueryParseError("Unexpected lexeme type '" + nextLexeme.type + "'", nextLexeme.start, nextLexeme.end);
                    } else parser.nextClause();
                }
            }, lunr.QueryParser.parseBoost = function(parser) {
                var lexeme = parser.consumeLexeme();
                if (null != lexeme) {
                    var boost = parseInt(lexeme.str, 10);
                    if (isNaN(boost)) throw new lunr.QueryParseError("boost must be numeric", lexeme.start, lexeme.end);
                    parser.currentClause.boost = boost;
                    var nextLexeme = parser.peekLexeme();
                    if (null != nextLexeme) switch (nextLexeme.type) {
                      case lunr.QueryLexer.TERM:
                        return parser.nextClause(), lunr.QueryParser.parseTerm;

                      case lunr.QueryLexer.FIELD:
                        return parser.nextClause(), lunr.QueryParser.parseField;

                      case lunr.QueryLexer.EDIT_DISTANCE:
                        return lunr.QueryParser.parseEditDistance;

                      case lunr.QueryLexer.BOOST:
                        return lunr.QueryParser.parseBoost;

                      case lunr.QueryLexer.PRESENCE:
                        return parser.nextClause(), lunr.QueryParser.parsePresence;

                      default:
                        throw new lunr.QueryParseError("Unexpected lexeme type '" + nextLexeme.type + "'", nextLexeme.start, nextLexeme.end);
                    } else parser.nextClause();
                }
            }, void 0 === (__WEBPACK_AMD_DEFINE_RESULT__ = "function" == typeof (__WEBPACK_AMD_DEFINE_FACTORY__ = function() {
                return lunr;
            }) ? __WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module) : __WEBPACK_AMD_DEFINE_FACTORY__) || (module.exports = __WEBPACK_AMD_DEFINE_RESULT__);
        }();
    }
});
//# sourceMappingURL=0.worker.js.map