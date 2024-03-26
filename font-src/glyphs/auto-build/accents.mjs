'use strict';
import * as _s0_t0 from '../../support/gr.mjs';
import * as _s0_t1 from '../../support/utils.mjs';
import * as _s0_t2 from '../../meta/unicode-knowledge.mjs';
var _s0_t3;
export {
    _s0_t3 as apply
};
var r1_apply, _r1_t0, _r1_t1, _r1_t2, _r1_t3, _r1_t5, _r1_t6, _r1_t7, _r1_t10;
var _r1_t4 = function _r1_t10(r286_lo, r286_hi) {
    var r286_j, _r286_t3, _r286_t4, _r286_t5, _r286_t6, _r286_t7, _r286_t8, _r286_t9, _r286_t10, _r286_t11, _r286_t12, _r286_t13;
    var _r286_t0 = function () {
        _r286_t7 = r286_j = r286_lo;
        _r286_t8 = function (_r286_t10) {
            _r286_t0 = function () {
                throw 'Iteration Stopped';
            };
            return {
                'done': true,
                'value': _r286_t10
            };
        };
        _r286_t9 = function (_r286_t11) {
            _r286_t12 = r286_j < r286_hi;
            if (_r286_t12) {
                _r286_t0 = function (_r286_t13) {
                    return _r286_t9(r286_j = r286_j + 1);
                };
                return {
                    'value': r286_j,
                    'done': false
                };
            } else
                return _r286_t8(_r286_t11);
        };
        return _r286_t9();
    };
    var _r286_t1 = function (x) {
        try {
            return _r286_t0(x);
        } catch (ex) {
            return _r286_t2(ex);
        }
    };
    var _r286_t2 = function (e) {
        throw e;
    };
    if (this instanceof _r1_t10)
        _r286_t3 = this;
    else {
        _r286_t4 = function () {
            void 0;
        };
        _r286_t4.prototype = _r1_t10.prototype;
        _r286_t3 = new _r286_t4();
    }
    _r286_t3[Symbol.iterator] = function () {
        return _r286_t3;
    };
    _r286_t3.next = _r286_t1;
    _r286_t3.throw = function (x) {
        return _r286_t2(x);
    };
    return _r286_t3;
};
var _r1_t8 = _s0_t0;
var r1_Dotless = _r1_t8.Dotless;
var r1_AnyDerivingCv = _r1_t8.AnyDerivingCv;
var r1_DotlessOrNot = _r1_t8.DotlessOrNot;
var r1_getGrTree = _r1_t8.getGrTree;
var r1_CvDecompose = _r1_t8.CvDecompose;
var _r1_t9 = _s0_t1;
var r1_fallback = _r1_t9.fallback;
var r1_UnicodeKnowledge = _s0_t2;
var r1_xn$GlyphBlocks$2Lrc2b = [];
_s0_t3 = r1_apply = function () {
    var r267_block, _r267_t4, _r267_t6;
    var _r267_t3 = this;
    var _r267_t0 = r1_xn$GlyphBlocks$2Lrc2b;
    var _r267_t1 = _r267_t0.length;
    var _r267_t2 = 0;
    var _r267_t5 = _r267_t2 < _r267_t1;
    while (_r267_t5) {
        _r267_t6 = (r267_block = _r267_t0[_r267_t2], r267_block(_r267_t3), _r267_t2 = _r267_t2 + 1);
        _r267_t5 = _r267_t2 < _r267_t1;
    }
    return _r267_t6;
};
r1_xn$GlyphBlocks$2Lrc2b.push(function (r271_xn$Capture_Ext$2Lrc2b) {
    var _r271_t0, _r271_t1;
    r271_xn$Capture_Ext$2Lrc2b['$defineGlyphBlockImpl$'](r271_xn$Capture_Ext$2Lrc2b, 'AutoBuild-Accents', function (r272_xn$Capture$2Lrc8, r272_xn$ExportCapture$2Lrc4b) {
        var r272_code, r272__id, _r272_t10, _r272_t11, _r272_t12, _r272_tag13, _r272_t15, _r272_t16, _r272_tag17;
        var _r272_t0 = r272_xn$Capture$2Lrc8;
        var r272_xn$createAndSaveGlyphImpl$2Lrc3c = _r272_t0['$createAndSaveGlyphImpl$'];
        var r272_xn$NamedParameterPair$2Lrc9b = _r272_t0['$NamedParameterPair$'];
        var r272_xn$assignUnicodeImpl$2Lrc8b = _r272_t0['$assignUnicodeImpl$'];
        var r272_xn$execState$2Lrc0b = _r272_t0['$execState$'];
        var r272_glyphStore = _r272_t0.glyphStore;
        var r272_AS_BASE = _r272_t0.AS_BASE;
        var r272_ALSO_METRICS = _r272_t0.ALSO_METRICS;
        var _r272_t1 = r272_xn$Capture$2Lrc8.Metrics;
        var _r272_t2 = r272_xn$Capture$2Lrc8.SpiroFns;
        var _r272_t3 = r272_xn$Capture$2Lrc8.BooleFns;
        var _r272_t4 = r272_xn$Capture$2Lrc8['Common-Derivatives'].resolve();
        var r272_xn$queryglyph$1aao = _r272_t4['query-glyph'];
        var r272_xn$referglyph$1aao = _r272_t4['refer-glyph'];
        var r272_suggestName = function (r274__name) {
            var r274_j, _r274_t0, _r274_t1;
            var r274_name = r274__name;
            if (r272_xn$queryglyph$1aao(r274_name)) {
                r274_j = 2;
                while (r272_xn$queryglyph$1aao(r274_name + r274_j))
                    r274_j = r274_j + 1;
                r274_name = r274_name + r274_j;
            }
            return r274_name;
        };
        var r272_suggestMappedName = function (r275_map, r275_key, r275_name) {
            var _r275_t0, _r275_t1;
            if (r275_map[r275_key])
                return r275_map[r275_key];
            var r275_amended = r272_suggestName(r275_name);
            r275_map[r275_key] = r275_amended;
            return r275_amended;
        };
        var r272_isAboveMark = function (r276_mark) {
            var _r276_t0, _r276_t1;
            return r276_mark && r276_mark.markAnchors && r276_mark.markAnchors.above;
        };
        var r272_MarkSubst = function (r277_lookup) {
            var _r277_t0, _r277_t1;
            return function (r278_p, r278_j, r278_parts) {
                var r278_k, r278_v, _r278_t2, _r278_t3, _r278_t4, _r278_t6;
                var _r278_t0 = Object.entries(r277_lookup)[Symbol.iterator]();
                var _r278_t1 = void 0;
                var _r278_t5 = !(_r278_t1 = _r278_t0.next()).done;
                while (_r278_t5) {
                    _r278_t6 = (_r278_t2 = _r278_t1.value, r278_k = _r278_t2[0], r278_v = _r278_t2[1], r278_p === r272_xn$queryglyph$1aao(r278_k) ? r278_parts[r278_j] = r272_xn$queryglyph$1aao(r278_v) : void 0);
                    _r278_t5 = !(_r278_t1 = _r278_t0.next()).done;
                }
                return _r278_t6;
            };
        };
        var r272_iotaBelowToLF = r272_MarkSubst(r1_UnicodeKnowledge.iotaBelowToLfTf);
        var r272_ogonekBelowToTR = r272_MarkSubst(r1_UnicodeKnowledge.ogonekBelowToTRTf);
        var r272_grekUpperTonos = r272_MarkSubst(r1_UnicodeKnowledge.upperGrekMarkToTonosTf);
        var r272_subParts = function (r280_parts) {
            var r280_p, r280_dotless, r280_gidFirst, r280_seconds, r280_gidSecond, r280_gidTo, _r280_t3, _r280_t4, _r280_t5, _r280_t6, _r280_t7, _r280_t8, _r280_t9, _r280_t10;
            var r280_hasMarkAbove = false;
            var _r280_t0 = r280_parts;
            var _r280_t1 = _r280_t0.length;
            var _r280_t2 = 0;
            while (_r280_t2 < _r280_t1) {
                r280_p = _r280_t0[_r280_t2];
                if (r272_isAboveMark(r280_p))
                    r280_hasMarkAbove = true;
                _r280_t2 = _r280_t2 + 1;
            }
            if (r280_hasMarkAbove && r1_Dotless.get(r280_parts[0])) {
                r280_dotless = r272_xn$queryglyph$1aao(r1_Dotless.get(r280_parts[0]));
                if (r280_dotless)
                    r280_parts[0] = r280_dotless;
            }
            if (r280_parts[0].baseAnchors.lf)
                r280_parts.forEach(r272_iotaBelowToLF);
            if (r280_parts[0].baseAnchors.trailing)
                r280_parts.forEach(r272_ogonekBelowToTR);
            var r280_j = 0;
            while (r280_j < r280_parts.length) {
                _r280_t3 = Object.entries(r1_UnicodeKnowledge.markCompositionTf)[Symbol.iterator]();
                _r280_t4 = void 0;
                while (!(_r280_t4 = _r280_t3.next()).done) {
                    _r280_t5 = _r280_t4.value;
                    r280_gidFirst = _r280_t5[0];
                    r280_seconds = _r280_t5[1];
                    if (r280_parts[r280_j] === r272_xn$queryglyph$1aao(r280_gidFirst)) {
                        _r280_t6 = Object.entries(r280_seconds)[Symbol.iterator]();
                        _r280_t7 = void 0;
                        while (!(_r280_t7 = _r280_t6.next()).done) {
                            _r280_t8 = _r280_t7.value;
                            r280_gidSecond = _r280_t8[0];
                            r280_gidTo = _r280_t8[1];
                            if (r280_parts[r280_j + 1] === r272_xn$queryglyph$1aao(r280_gidSecond)) {
                                r280_parts[r280_j] = r272_xn$queryglyph$1aao(r280_gidTo);
                                r280_parts[r280_j + 1] = null;
                            }
                        }
                    }
                }
                r280_j = r280_j + 1;
            }
            if (r280_parts[0].baseAnchors.grekUpperTonos)
                r272_grekUpperTonos(r280_parts[1], 1, r280_parts);
            return r280_parts.filter(function (r284_x) {
                var _r284_t0, _r284_t1;
                return !!r284_x;
            });
        };
        var r272_pad = function (r285__s, r285_n) {
            var _r285_t0, _r285_t1;
            var r285_s = r285__s;
            while (r285_s.length < r285_n)
                r285_s = '0' + r285_s;
            return r285_s;
        };
        var r272_foundDecompositions = {};
        var r272_goalCodes = _r1_t4(0, 131071);
        var _r272_t5 = r272_goalCodes[Symbol.iterator]();
        var _r272_t6 = void 0;
        while (!(_r272_t6 = _r272_t5.next()).done) {
            r272_code = _r272_t6.value;
            if (!r272_glyphStore.queryByUnicode(r272_code))
                (function () {
                    var r290_partName, r290_part, r290_nfdChars, r290_partChar, r290_glyphName, _r290_t0, _r290_t1, _r290_t2, _r290_t3, _r290_t4;
                    var r290_parts = [];
                    var r290_allFound = true;
                    var r290_customDecomp = r1_UnicodeKnowledge.decompOverrides[r272_code];
                    var r290_str = String.fromCodePoint(r272_code);
                    var r290_nfd = r290_str.normalize('NFD');
                    if (r290_customDecomp) {
                        _r290_t0 = r290_customDecomp[Symbol.iterator]();
                        _r290_t1 = void 0;
                        while (!(_r290_t1 = _r290_t0.next()).done) {
                            r290_partName = _r290_t1.value;
                            r290_part = r272_glyphStore.queryByName(r290_partName);
                            if (!r290_part)
                                r290_allFound = false;
                            else
                                r290_parts.push(r290_part);
                        }
                    } else if (r290_str !== r290_nfd) {
                        r290_nfdChars = Array.from(r290_nfd);
                        _r290_t2 = r290_nfdChars;
                        _r290_t3 = _r290_t2.length;
                        _r290_t4 = 0;
                        while (_r290_t4 < _r290_t3) {
                            r290_partChar = _r290_t2[_r290_t4];
                            r290_part = r272_glyphStore.queryByUnicode(r290_partChar.codePointAt(0));
                            if (!r290_part)
                                r290_allFound = false;
                            else
                                r290_parts.push(r290_part);
                            _r290_t4 = _r290_t4 + 1;
                        }
                    }
                    return r290_allFound && r290_parts.length ? (r290_glyphName = 'u' + r272_code.toString(16).padStart(4, '0'), r290_parts = r272_subParts(r290_parts), r272_foundDecompositions[r290_glyphName] = [
                        r290_glyphName,
                        r272_code,
                        r290_parts
                    ]) : void 0;
                }());
        }
        var r272_s_goalName = void 0;
        var r272_s_code = void 0;
        var r272_s_parts = void 0;
        var r272_recursivelyDecompose = function (r293_g, r293_sink) {
            var r293_gnPart, _r293_t0, _r293_t1, _r293_t2, _r293_t3, _r293_t4, _r293_t5, _r293_t6, _r293_t7;
            var r293_decomposition = r1_CvDecompose.get(r293_g);
            if (r293_decomposition) {
                _r293_t0 = r293_decomposition;
                _r293_t1 = _r293_t0.length;
                _r293_t2 = 0;
                _r293_t6 = _r293_t2 < _r293_t1;
                while (_r293_t6) {
                    _r293_t7 = (r293_gnPart = _r293_t0[_r293_t2], r293_g = r272_xn$queryglyph$1aao(r293_gnPart), r293_g ? r272_recursivelyDecompose(r293_g, r293_sink) : void 0, _r293_t2 = _r293_t2 + 1);
                    _r293_t6 = _r293_t2 < _r293_t1;
                }
                return _r293_t7;
            } else
                return r293_sink.push(r272_glyphStore.queryNameOf(r293_g));
        };
        var r272_construction = function () {
            var r296_part, r296_decomposeParts, _r296_t3, _r296_t4, _r296_t5, _r296_t7;
            var _r296_t6 = this;
            var r296_currentGlyph = _r296_t6;
            r296_currentGlyph.include(r272_s_parts[0], r272_AS_BASE, r272_ALSO_METRICS);
            var r296_nonTrivial = r1_AnyDerivingCv.hasNonDerivingVariants(r272_s_parts[0]);
            if (r296_nonTrivial)
                console.log(r272_s_parts[0]);
            var _r296_t0 = r272_s_parts.slice(1);
            var _r296_t1 = _r296_t0.length;
            var _r296_t2 = 0;
            while (_r296_t2 < _r296_t1) {
                r296_part = _r296_t0[_r296_t2];
                if (r296_part) {
                    r296_currentGlyph.include(r296_part);
                    if (r296_part.markAnchors && r296_part.markAnchors.bottomRight) {
                        r296_currentGlyph.ejectTagged('serifRB');
                        r296_nonTrivial = true;
                    }
                }
                _r296_t2 = _r296_t2 + 1;
            }
            if (!r296_nonTrivial && r1_AnyDerivingCv.query(r272_s_parts[0])) {
                r296_decomposeParts = [];
                _r296_t3 = r272_s_parts;
                _r296_t4 = _r296_t3.length;
                _r296_t5 = 0;
                while (_r296_t5 < _r296_t4) {
                    r296_part = _r296_t3[_r296_t5];
                    r272_recursivelyDecompose(r296_part, r296_decomposeParts);
                    _r296_t5 = _r296_t5 + 1;
                }
                r1_CvDecompose.set(r296_currentGlyph, r296_decomposeParts);
            }
            return void 0;
        };
        var r272_RootGlyphProc = function (r302_goalName, r302_code, r302_parts) {
            var _r302_t0, _r302_t1;
            r272_s_goalName = r302_goalName;
            r272_s_code = r302_code;
            r272_s_parts = r302_parts;
            return r272_xn$createAndSaveGlyphImpl$2Lrc3c(r302_goalName, r302_code, r272_construction);
        };
        var r272_NeedBuildMesh = function (r304_glyphName, r304_part0Name) {
            var _r304_t0, _r304_t1;
            var r304_g = r272_xn$queryglyph$1aao(r304_glyphName);
            var r304_part0 = r272_xn$queryglyph$1aao(r304_part0Name);
            if (!r304_g)
                return false;
            if (!r304_part0)
                return false;
            if (!r1_CvDecompose.get(r304_g))
                return true;
            if (r1_DotlessOrNot.query(r304_part0))
                return true;
            return false;
        };
        var _r272_t7 = Object.keys(r272_foundDecompositions);
        var _r272_t8 = _r272_t7.length;
        var _r272_t9 = 0;
        var _r272_t14 = _r272_t9 < _r272_t8;
        while (_r272_t14) {
            r272__id = _r272_t7[_r272_t9];
            (function () {
                var r308_part0Name, r308_dstTree, r308_targetNameMap, r308_tree, r308_gr, r308_origBase, r308_relBase, r308_origGN, r308_relGN, r308_parts1, _r308_t1, _r308_t2, _r308_t3, _r308_t4, _r308_t5, _r308_t6, _r308_t7;
                var _r308_t0 = r272_foundDecompositions[r272__id];
                var r308_glyphName = _r308_t0[0];
                var r308_code = _r308_t0[1];
                var r308_parts = _r308_t0[2];
                var r308_saved = r272_RootGlyphProc(r308_glyphName, r308_code, r308_parts);
                if (r308_saved) {
                    r308_part0Name = r272_glyphStore.queryNameOf(r308_parts[0]);
                    if (r308_parts[0] !== r272_xn$queryglyph$1aao(r308_part0Name))
                        throw new Error('Unreachable');
                }
                if (r272_NeedBuildMesh(r308_glyphName, r308_part0Name)) {
                    r308_dstTree = [];
                    r308_targetNameMap = {};
                    r308_targetNameMap[r308_part0Name] = r308_glyphName;
                    r308_tree = r1_getGrTree(r308_part0Name, [
                        r1_DotlessOrNot,
                        r1_AnyDerivingCv
                    ], r272_xn$queryglyph$1aao);
                    _r308_t1 = r308_tree;
                    _r308_t2 = _r308_t1.length;
                    _r308_t3 = 0;
                    _r308_t6 = _r308_t3 < _r308_t2;
                    while (_r308_t6) {
                        _r308_t4 = _r308_t1[_r308_t3];
                        r308_gr = _r308_t4[0];
                        r308_origBase = _r308_t4[1];
                        r308_relBase = _r308_t4[2];
                        r308_origGN = r308_targetNameMap[r308_origBase];
                        if (!r308_origGN)
                            throw new Error('Unreachable');
                        r308_relGN = r272_suggestMappedName(r308_targetNameMap, r308_relBase, r308_gr.amendName(r308_origGN));
                        r308_parts1 = r308_parts.slice(0);
                        r308_parts1[0] = r272_xn$queryglyph$1aao(r308_relBase);
                        if (!r272_xn$queryglyph$1aao(r308_relGN))
                            r272_RootGlyphProc(r308_relGN, null, r308_parts1);
                        if (r272_xn$queryglyph$1aao(r308_origGN))
                            r308_gr.set(r272_xn$queryglyph$1aao(r308_origGN), r308_relGN);
                        _r308_t7 = _r308_t3 = _r308_t3 + 1;
                        _r308_t6 = _r308_t3 < _r308_t2;
                    }
                    _r308_t5 = _r308_t7;
                }
                return _r308_t5;
            }());
            _r272_t15 = _r272_t9 = _r272_t9 + 1;
            _r272_t14 = _r272_t9 < _r272_t8;
        }
        return _r272_t15;
    });
    return void 0;
});
