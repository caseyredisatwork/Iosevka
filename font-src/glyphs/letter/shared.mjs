'use strict';
import * as _s0_t0 from '../../support/utils.mjs';
import * as _s0_t1 from '../../support/gr.mjs';
import * as _s0_t2 from '../../meta/aesthetics.mjs';
var _s0_t3;
export {
    _s0_t3 as apply
};
var r1_apply, _r1_t0, _r1_t1, _r1_t3, _r1_t4, _r1_t5, _r1_t6, _r1_t7, _r1_t11;
var _r1_t2 = function _r1_t11(r314_t) {
    var r314_n, r314_i, r314_a, _r314_t3, _r314_t4, _r314_t5, _r314_t6, _r314_t7, _r314_t8, _r314_t9, _r314_t10, _r314_t11, _r314_t12, _r314_t13, _r314_t14, _r314_t15, _r314_t16, _r314_t17, _r314_t18, _r314_t19, _r314_t20, _r314_t21, _r314_t22, _r314_t23, _r314_t24, _r314_t25, _r314_t26;
    var _r314_t0 = function () {
        _r314_t7 = function (_r314_t8) {
            _r314_t0 = function () {
                throw 'Iteration Stopped';
            };
            return {
                'done': true,
                'value': _r314_t8
            };
        };
        _r314_t9 = r314_t instanceof Array;
        if (_r314_t9) {
            _r314_t10 = r314_n = r314_t.length;
            _r314_t11 = r314_i = 0;
            _r314_t12 = function (_r314_t14) {
                return _r314_t7(_r314_t14);
            };
            _r314_t13 = function (_r314_t15) {
                _r314_t16 = r314_i < r314_n;
                if (_r314_t16) {
                    _r314_t0 = function (_r314_t17) {
                        return _r314_t13(r314_i = r314_i + 1);
                    };
                    return {
                        'value': [
                            r314_i,
                            r314_t[r314_i]
                        ],
                        'done': false
                    };
                } else
                    return _r314_t12(_r314_t15);
            };
            return _r314_t13();
        } else {
            _r314_t18 = r314_a = Object.keys(r314_t);
            _r314_t19 = r314_n = r314_a.length;
            _r314_t20 = r314_i = 0;
            _r314_t21 = function (_r314_t23) {
                return _r314_t7(_r314_t23);
            };
            _r314_t22 = function (_r314_t24) {
                _r314_t25 = r314_i < r314_n;
                if (_r314_t25) {
                    _r314_t0 = function (_r314_t26) {
                        return _r314_t22(r314_i = r314_i + 1);
                    };
                    return {
                        'value': [
                            r314_a[r314_i],
                            r314_t[r314_a[r314_i]]
                        ],
                        'done': false
                    };
                } else
                    return _r314_t21(_r314_t24);
            };
            return _r314_t22();
        }
    };
    var _r314_t1 = function (x) {
        try {
            return _r314_t0(x);
        } catch (ex) {
            return _r314_t2(ex);
        }
    };
    var _r314_t2 = function (e) {
        throw e;
    };
    if (this instanceof _r1_t11)
        _r314_t3 = this;
    else {
        _r314_t4 = function () {
            void 0;
        };
        _r314_t4.prototype = _r1_t11.prototype;
        _r314_t3 = new _r314_t4();
    }
    _r314_t3[Symbol.iterator] = function () {
        return _r314_t3;
    };
    _r314_t3.next = _r314_t1;
    _r314_t3.throw = function (x) {
        return _r314_t2(x);
    };
    return _r314_t3;
};
var _r1_t8 = _s0_t0;
var r1_mix = _r1_t8.mix;
var r1_clamp = _r1_t8.clamp;
var r1_fallback = _r1_t8.fallback;
var _r1_t9 = _s0_t1;
var r1_Dotless = _r1_t9.Dotless;
var r1_CvDecompose = _r1_t9.CvDecompose;
var r1_RightDependentTrigger = _r1_t9.RightDependentTrigger;
var r1_RightDependentLink = _r1_t9.RightDependentLink;
var r1_DependentSelector = _r1_t9.DependentSelector;
var _r1_t10 = _s0_t2;
var r1_DesignParameters = _r1_t10.DesignParameters;
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
    r271_xn$Capture_Ext$2Lrc2b['$defineGlyphBlockImpl$'](r271_xn$Capture_Ext$2Lrc2b, 'Letter-Shared', function (r272_xn$Capture$2Lrc8, r272_xn$ExportCapture$2Lrc4b) {
        var r272_SetGrekUpperTonos, _r272_t6, _r272_t7;
        var _r272_t0 = r272_xn$Capture$2Lrc8;
        var r272_xn$createAndSaveGlyphImpl$2Lrc3c = _r272_t0['$createAndSaveGlyphImpl$'];
        var r272_xn$NamedParameterPair$2Lrc9b = _r272_t0['$NamedParameterPair$'];
        var r272_xn$assignUnicodeImpl$2Lrc8b = _r272_t0['$assignUnicodeImpl$'];
        var r272_xn$execState$2Lrc0b = _r272_t0['$execState$'];
        var r272_AS_BASE = _r272_t0.AS_BASE;
        var r272_ALSO_METRICS = _r272_t0.ALSO_METRICS;
        var _r272_t1 = r272_xn$Capture$2Lrc8.Metrics;
        var r272_Width = _r272_t1.Width;
        var r272_CAP = _r272_t1.CAP;
        var r272_ApparentTranslate = _r272_t1.ApparentTranslate;
        var r272_AccentStackOffset = _r272_t1.AccentStackOffset;
        var _r272_t2 = r272_xn$Capture$2Lrc8.SpiroFns;
        var _r272_t3 = r272_xn$Capture$2Lrc8.BooleFns;
        var _r272_t4 = r272_xn$Capture$2Lrc8.CommonShapes.resolve();
        var _r272_t5 = r272_xn$Capture$2Lrc8['Common-Derivatives'].resolve();
        var r272_xn$referglyph$1aao = _r272_t5['refer-glyph'];
        var r272_xn$queryglyph$1aao = _r272_t5['query-glyph'];
        var r272_xn$deriveglyphs$7Hrq = _r272_t5['derive-glyphs'];
        var r272_xn$derivemultipartglyphs$7Hrq65 = _r272_t5['derive-multi-part-glyphs'];
        r272_xn$ExportCapture$2Lrc4b(function () {
            var _r276_t0, _r276_t1;
            return { 'CreateAccentedComposition': r272_CreateAccentedComposition };
        });
        var r272_CreateAccentedComposition = function (r277_dst, r277_u, r277_srcGid, r277_accentGid) {
            var _r277_t0, _r277_t1;
            return r272_xn$derivemultipartglyphs$7Hrq65(r277_dst, r277_u, [
                r277_srcGid,
                r277_accentGid
            ], function (r278_gns, r278_gr) {
                var _r278_t0, _r278_t1;
                return function () {
                    var _r280_t2;
                    var _r280_t1 = this;
                    var r280_currentGlyph = _r280_t1;
                    var _r280_t0 = r278_gns;
                    var r280_base = _r280_t0[0];
                    var r280_mark = _r280_t0[1];
                    r280_currentGlyph.include(r272_xn$referglyph$1aao(r280_base), r272_AS_BASE, r272_ALSO_METRICS);
                    r280_currentGlyph.include(r272_xn$referglyph$1aao(r280_mark));
                    if (!r278_gr && r277_accentGid === 'dotAbove')
                        r1_Dotless.set(r280_currentGlyph, r280_base);
                    return void 0;
                };
            });
        };
        r272_xn$ExportCapture$2Lrc4b(function () {
            var _r284_t0, _r284_t1;
            return { 'CreateOgonekComposition': r272_CreateOgonekComposition };
        });
        var r272_CreateOgonekComposition = function (r285_dst, r285_u, r285_srcGid) {
            var _r285_t0, _r285_t1;
            return r272_xn$derivemultipartglyphs$7Hrq65(r285_dst, r285_u, [
                r285_srcGid,
                'ogonekBelow',
                'ogonekTR'
            ], function (r286_gns, r286_gr) {
                var _r286_t0, _r286_t1;
                return function () {
                    var _r288_t2;
                    var _r288_t1 = this;
                    var r288_currentGlyph = _r288_t1;
                    var _r288_t0 = r286_gns;
                    var r288_base = _r288_t0[0];
                    var r288_markBelow = _r288_t0[1];
                    var r288_markTR = _r288_t0[2];
                    r288_currentGlyph.include(r272_xn$referglyph$1aao(r288_base), r272_AS_BASE, r272_ALSO_METRICS);
                    if (r288_currentGlyph.baseAnchors.trailing)
                        r288_currentGlyph.include(r272_xn$referglyph$1aao(r288_markTR));
                    else
                        r288_currentGlyph.include(r272_xn$referglyph$1aao(r288_markBelow));
                    return void 0;
                };
            });
        };
        r272_xn$ExportCapture$2Lrc4b(function () {
            var _r293_t0, _r293_t1;
            return { 'CreateCommaCaronComposition': r272_CreateCommaCaronComposition };
        });
        var r272_CreateCommaCaronComposition = function (r294_dst, r294_u, r294_sourceGid) {
            var _r294_t0, _r294_t1;
            return r272_xn$derivemultipartglyphs$7Hrq65(r294_dst, r294_u, [
                r294_sourceGid,
                'commaTR'
            ], function (r295_gns, r295_gr) {
                var _r295_t0, _r295_t1;
                return function () {
                    var _r297_t2;
                    var _r297_t1 = this;
                    var r297_currentGlyph = _r297_t1;
                    var _r297_t0 = r295_gns;
                    var r297_base = _r297_t0[0];
                    var r297_comma = _r297_t0[1];
                    var r297_baseGlyph = r272_xn$queryglyph$1aao(r297_base);
                    var r297_commaOffset = r272_Width / 2 * Math.pow(r297_baseGlyph.advanceWidth / r272_Width * 2, 2 / 3);
                    r297_currentGlyph.include(r272_xn$referglyph$1aao(r297_comma));
                    r297_currentGlyph.include(r272_ApparentTranslate(r297_commaOffset, 0));
                    r297_currentGlyph.include(r272_xn$referglyph$1aao(r297_base), r272_AS_BASE, r272_ALSO_METRICS);
                    return void 0;
                };
            });
        };
        r272_xn$ExportCapture$2Lrc4b(function () {
            var _r302_t0, _r302_t1;
            return { 'CreateMultiAccentedComposition': r272_CreateMultiAccentedComposition };
        });
        var r272_CreateMultiAccentedComposition = function (r303_dstGid, r303_unicode, r303_srcGid, r303_accentGids, r303_fDontDecompose) {
            var _r303_t0, _r303_t1;
            return r272_xn$deriveglyphs$7Hrq(r303_dstGid, r303_unicode, r303_srcGid, function (r304_src, r304_gr) {
                var _r304_t0, _r304_t1;
                return function () {
                    var r306_accentGid, _r306_t4;
                    var _r306_t3 = this;
                    var r306_currentGlyph = _r306_t3;
                    r306_currentGlyph.include(r272_xn$referglyph$1aao(r304_src), r272_AS_BASE, r272_ALSO_METRICS);
                    var _r306_t0 = r303_accentGids;
                    var _r306_t1 = _r306_t0.length;
                    var _r306_t2 = 0;
                    while (_r306_t2 < _r306_t1) {
                        r306_accentGid = _r306_t0[_r306_t2];
                        r306_currentGlyph.include(r272_xn$referglyph$1aao(r306_accentGid));
                        _r306_t2 = _r306_t2 + 1;
                    }
                    if (!r303_fDontDecompose && !r304_gr)
                        r1_CvDecompose.set(r306_currentGlyph, [r304_src].concat(r303_accentGids));
                    return void 0;
                };
            });
        };
        r272_xn$ExportCapture$2Lrc4b(function () {
            var _r311_t0, _r311_t1;
            return { 'CreateDependentComposite': r272_CreateDependentComposite };
        });
        var r272_CreateDependentComposite = function (r312_gidDst, r312_unicode, r312_gidPart1, r312_gidPart2Map) {
            var r312_key, r312_g, _r312_t2, _r312_t3, _r312_t4;
            var r312_sourceGidList = [r312_gidPart1];
            var r312_keyToIndexMap = {};
            var _r312_t0 = _r1_t2(r312_gidPart2Map)[Symbol.iterator]();
            var _r312_t1 = void 0;
            while (!(_r312_t1 = _r312_t0.next()).done) {
                _r312_t2 = _r312_t1.value;
                r312_key = _r312_t2[0];
                r312_g = _r312_t2[1];
                r312_keyToIndexMap[r312_key] = r312_sourceGidList.length;
                r312_sourceGidList.push(r312_g);
            }
            return r272_xn$derivemultipartglyphs$7Hrq65(r312_gidDst, r312_unicode, r312_sourceGidList, function (r316_src) {
                var _r316_t0, _r316_t1;
                return function () {
                    var _r318_t1;
                    var _r318_t0 = this;
                    var r318_currentGlyph = _r318_t0;
                    var r318_a = r316_src[0];
                    var r318_selector = r1_DependentSelector.get(r272_xn$queryglyph$1aao(r318_a));
                    var r318_b = r316_src[r312_keyToIndexMap[r318_selector]];
                    r318_currentGlyph.include(r272_xn$referglyph$1aao(r318_a), r272_AS_BASE, r272_ALSO_METRICS);
                    r318_currentGlyph.include(r272_xn$referglyph$1aao(r318_b));
                    return void 0;
                };
            });
        };
        r272_xn$ExportCapture$2Lrc4b(function () {
            var _r322_t0, _r322_t1;
            return { 'SetGrekUpperTonos': r272_SetGrekUpperTonos };
        });
        return r272_SetGrekUpperTonos = function (r323_kern) {
            var _r323_t0, _r323_t1;
            return function () {
                var _r325_t1;
                var _r325_t0 = this;
                var r325_currentGlyph = _r325_t0;
                r325_currentGlyph.setBaseAnchor('grekUpperTonos', r323_kern, r272_CAP - 0.75 * r272_AccentStackOffset);
                return void 0;
            };
        };
    });
    return void 0;
});
r1_xn$GlyphBlocks$2Lrc2b.push(function (r329_xn$Capture_Ext$2Lrc2b) {
    var _r329_t0, _r329_t1;
    r329_xn$Capture_Ext$2Lrc2b['$defineGlyphBlockImpl$'](r329_xn$Capture_Ext$2Lrc2b, 'Letter-Blackboard', function (r330_xn$Capture$2Lrc8, r330_xn$ExportCapture$2Lrc4b) {
        var _r330_t7, _r330_t8;
        var _r330_t0 = r330_xn$Capture$2Lrc8;
        var r330_xn$createAndSaveGlyphImpl$2Lrc3c = _r330_t0['$createAndSaveGlyphImpl$'];
        var r330_xn$NamedParameterPair$2Lrc9b = _r330_t0['$NamedParameterPair$'];
        var r330_xn$assignUnicodeImpl$2Lrc8b = _r330_t0['$assignUnicodeImpl$'];
        var r330_xn$execState$2Lrc0b = _r330_t0['$execState$'];
        var _r330_t1 = r330_xn$Capture$2Lrc8.Metrics;
        var r330_Width = _r330_t1.Width;
        var r330_XH = _r330_t1.XH;
        var r330_AccentStackOffset = _r330_t1.AccentStackOffset;
        var r330_AdviceStroke = _r330_t1.AdviceStroke;
        var _r330_t2 = r330_xn$Capture$2Lrc8.SpiroFns;
        var _r330_t3 = r330_xn$Capture$2Lrc8.BooleFns;
        var r330_union = _r330_t3.union;
        var _r330_t4 = r330_xn$Capture$2Lrc8.CommonShapes.resolve();
        var r330_DotStrokeAt = _r330_t4.DotStrokeAt;
        var r330_HBar = _r330_t4.HBar;
        var r330_VBar = _r330_t4.VBar;
        r330_xn$ExportCapture$2Lrc4b(function () {
            var _r333_t0, _r333_t1;
            return {
                'BBS': r330_BBS,
                'BBD': r330_BBD
            };
        });
        var r330_BBS = r330_AdviceStroke(6);
        var r330_BBD = r1_clamp(r330_Width / 5.5, r330_Width / 4, r330_BBS * 2);
        r330_xn$ExportCapture$2Lrc4b(function () {
            var _r335_t0, _r335_t1;
            return { 'BBBarLeft': r330_BBBarLeft };
        });
        var r330_BBBarLeft = function () {
            var _r336_t6;
            var _r336_t7 = arguments;
            var _r336_t0 = [].slice.call(_r336_t7, 0);
            var _r336_t1 = [];
            var _r336_t2 = 0;
            while (_r336_t2 < _r336_t0.length) {
                if (!(_r336_t0[_r336_t2] instanceof r330_xn$NamedParameterPair$2Lrc9b))
                    _r336_t1.push(_r336_t0[_r336_t2]);
                _r336_t2 = _r336_t2 + 1;
            }
            var _r336_t3 = _r336_t0;
            var _r336_t4 = _r336_t3.length;
            var _r336_t5 = 0;
            while (_r336_t5 < _r336_t4) {
                _r336_t2 = _r336_t3[_r336_t5];
                if (_r336_t2 && _r336_t2 instanceof r330_xn$NamedParameterPair$2Lrc9b && _r336_t2.left === 'x')
                    r336_x = _r336_t2.right;
                if (_r336_t2 && _r336_t2 instanceof r330_xn$NamedParameterPair$2Lrc9b && _r336_t2.left === 'yBot')
                    r336_yBot = _r336_t2.right;
                if (_r336_t2 && _r336_t2 instanceof r330_xn$NamedParameterPair$2Lrc9b && _r336_t2.left === 'yTop')
                    r336_yTop = _r336_t2.right;
                if (_r336_t2 && _r336_t2 instanceof r330_xn$NamedParameterPair$2Lrc9b && _r336_t2.left === 'bbs')
                    r336_bbs = _r336_t2.right;
                if (_r336_t2 && _r336_t2 instanceof r330_xn$NamedParameterPair$2Lrc9b && _r336_t2.left === 'bbd')
                    r336_bbd = _r336_t2.right;
                _r336_t5 = _r336_t5 + 1;
            }
            var r336_x = r1_fallback(r336_x, _r336_t1[0]);
            var r336_yBot = r1_fallback(r336_yBot, _r336_t1[1]);
            var r336_yTop = r1_fallback(r336_yTop, _r336_t1[2]);
            var r336_bbs = r1_fallback(r336_bbs, _r336_t1[3], r330_BBS);
            var r336_bbd = r1_fallback(r336_bbd, _r336_t1[4], r330_BBD);
            return r330_union(r330_VBar.l(r336_x, r336_yBot, r336_yTop, r336_bbs), r330_VBar.l(r336_x + r336_bbd, r336_yBot, r336_yTop, r336_bbs), r330_HBar.t(r336_x, r336_x + r336_bbd, r336_yTop, r336_bbs), r330_HBar.b(r336_x, r336_x + r336_bbd, r336_yBot, r336_bbs));
        };
        r330_xn$ExportCapture$2Lrc4b(function () {
            var _r342_t0, _r342_t1;
            return { 'BBBarCenter': r330_BBBarCenter };
        });
        var r330_BBBarCenter = function () {
            var _r343_t6;
            var _r343_t7 = arguments;
            var _r343_t0 = [].slice.call(_r343_t7, 0);
            var _r343_t1 = [];
            var _r343_t2 = 0;
            while (_r343_t2 < _r343_t0.length) {
                if (!(_r343_t0[_r343_t2] instanceof r330_xn$NamedParameterPair$2Lrc9b))
                    _r343_t1.push(_r343_t0[_r343_t2]);
                _r343_t2 = _r343_t2 + 1;
            }
            var _r343_t3 = _r343_t0;
            var _r343_t4 = _r343_t3.length;
            var _r343_t5 = 0;
            while (_r343_t5 < _r343_t4) {
                _r343_t2 = _r343_t3[_r343_t5];
                if (_r343_t2 && _r343_t2 instanceof r330_xn$NamedParameterPair$2Lrc9b && _r343_t2.left === 'x')
                    r343_x = _r343_t2.right;
                if (_r343_t2 && _r343_t2 instanceof r330_xn$NamedParameterPair$2Lrc9b && _r343_t2.left === 'yBot')
                    r343_yBot = _r343_t2.right;
                if (_r343_t2 && _r343_t2 instanceof r330_xn$NamedParameterPair$2Lrc9b && _r343_t2.left === 'yTop')
                    r343_yTop = _r343_t2.right;
                if (_r343_t2 && _r343_t2 instanceof r330_xn$NamedParameterPair$2Lrc9b && _r343_t2.left === 'bbs')
                    r343_bbs = _r343_t2.right;
                if (_r343_t2 && _r343_t2 instanceof r330_xn$NamedParameterPair$2Lrc9b && _r343_t2.left === 'bbd')
                    r343_bbd = _r343_t2.right;
                _r343_t5 = _r343_t5 + 1;
            }
            var r343_x = r1_fallback(r343_x, _r343_t1[0]);
            var r343_yBot = r1_fallback(r343_yBot, _r343_t1[1]);
            var r343_yTop = r1_fallback(r343_yTop, _r343_t1[2]);
            var r343_bbs = r1_fallback(r343_bbs, _r343_t1[3], r330_BBS);
            var r343_bbd = r1_fallback(r343_bbd, _r343_t1[4], r330_BBD);
            return r330_union(r330_VBar.m(r343_x - r343_bbd / 2, r343_yBot, r343_yTop, r343_bbs), r330_VBar.m(r343_x + r343_bbd / 2, r343_yBot, r343_yTop, r343_bbs), r330_HBar.t(r343_x - r343_bbd / 2, r343_x + r343_bbd / 2, r343_yTop, r343_bbs), r330_HBar.b(r343_x - r343_bbd / 2, r343_x + r343_bbd / 2, r343_yBot, r343_bbs));
        };
        r330_xn$ExportCapture$2Lrc4b(function () {
            var _r349_t0, _r349_t1;
            return { 'BBBarRight': r330_BBBarRight };
        });
        var r330_BBBarRight = function () {
            var _r350_t6;
            var _r350_t7 = arguments;
            var _r350_t0 = [].slice.call(_r350_t7, 0);
            var _r350_t1 = [];
            var _r350_t2 = 0;
            while (_r350_t2 < _r350_t0.length) {
                if (!(_r350_t0[_r350_t2] instanceof r330_xn$NamedParameterPair$2Lrc9b))
                    _r350_t1.push(_r350_t0[_r350_t2]);
                _r350_t2 = _r350_t2 + 1;
            }
            var _r350_t3 = _r350_t0;
            var _r350_t4 = _r350_t3.length;
            var _r350_t5 = 0;
            while (_r350_t5 < _r350_t4) {
                _r350_t2 = _r350_t3[_r350_t5];
                if (_r350_t2 && _r350_t2 instanceof r330_xn$NamedParameterPair$2Lrc9b && _r350_t2.left === 'x')
                    r350_x = _r350_t2.right;
                if (_r350_t2 && _r350_t2 instanceof r330_xn$NamedParameterPair$2Lrc9b && _r350_t2.left === 'yBot')
                    r350_yBot = _r350_t2.right;
                if (_r350_t2 && _r350_t2 instanceof r330_xn$NamedParameterPair$2Lrc9b && _r350_t2.left === 'yTop')
                    r350_yTop = _r350_t2.right;
                if (_r350_t2 && _r350_t2 instanceof r330_xn$NamedParameterPair$2Lrc9b && _r350_t2.left === 'bbs')
                    r350_bbs = _r350_t2.right;
                if (_r350_t2 && _r350_t2 instanceof r330_xn$NamedParameterPair$2Lrc9b && _r350_t2.left === 'bbd')
                    r350_bbd = _r350_t2.right;
                _r350_t5 = _r350_t5 + 1;
            }
            var r350_x = r1_fallback(r350_x, _r350_t1[0]);
            var r350_yBot = r1_fallback(r350_yBot, _r350_t1[1]);
            var r350_yTop = r1_fallback(r350_yTop, _r350_t1[2]);
            var r350_bbs = r1_fallback(r350_bbs, _r350_t1[3], r330_BBS);
            var r350_bbd = r1_fallback(r350_bbd, _r350_t1[4], r330_BBD);
            return r330_union(r330_VBar.r(r350_x, r350_yBot, r350_yTop, r350_bbs), r330_VBar.r(r350_x - r350_bbd, r350_yBot, r350_yTop, r350_bbs), r330_HBar.t(r350_x, r350_x - r350_bbd, r350_yTop, r350_bbs), r330_HBar.b(r350_x, r350_x - r350_bbd, r350_yBot, r350_bbs));
        };
        var _r330_t5 = r330_xn$Capture$2Lrc8['Mark-Shared-Metrics'].resolve();
        var r330_markMiddle = _r330_t5.markMiddle;
        var _r330_t6 = r330_xn$Capture$2Lrc8['Mark-Above'].resolve();
        var r330_aboveMarkStack = _r330_t6.aboveMarkStack;
        return r330_xn$createAndSaveGlyphImpl$2Lrc3c('mathbb/dotAbove', null, function () {
            var _r359_t1;
            var _r359_t0 = this;
            var r359_currentGlyph = _r359_t0;
            r359_currentGlyph.setWidth(0);
            r359_currentGlyph.setMarkAnchor('above', r330_markMiddle, r330_XH, r330_markMiddle, r330_aboveMarkStack);
            r359_currentGlyph.setBaseAnchor('aboveBraceL', r330_markMiddle, r330_XH + r330_AccentStackOffset);
            r359_currentGlyph.setBaseAnchor('aboveBraceR', r330_markMiddle, r330_XH + r330_AccentStackOffset);
            r359_currentGlyph.include(r330_DotStrokeAt(r330_markMiddle, r330_XH + r330_AccentStackOffset, r330_BBD / 2 + r330_BBS, r330_BBS));
            return void 0;
        });
    });
    return void 0;
});
r1_xn$GlyphBlocks$2Lrc2b.push(function (r367_xn$Capture_Ext$2Lrc2b) {
    var _r367_t0, _r367_t1;
    r367_xn$Capture_Ext$2Lrc2b['$defineGlyphBlockImpl$'](r367_xn$Capture_Ext$2Lrc2b, 'Letter-Shared-Metrics', function (r368_xn$Capture$2Lrc8, r368_xn$ExportCapture$2Lrc4b) {
        var r368_BowlXDepth, _r368_t4, _r368_t5;
        var _r368_t0 = r368_xn$Capture$2Lrc8;
        var r368_xn$createAndSaveGlyphImpl$2Lrc3c = _r368_t0['$createAndSaveGlyphImpl$'];
        var r368_xn$NamedParameterPair$2Lrc9b = _r368_t0['$NamedParameterPair$'];
        var r368_xn$assignUnicodeImpl$2Lrc8b = _r368_t0['$assignUnicodeImpl$'];
        var r368_xn$execState$2Lrc0b = _r368_t0['$execState$'];
        var _r368_t1 = r368_xn$Capture$2Lrc8.Metrics;
        var r368_HVContrast = _r368_t1.HVContrast;
        var _r368_t2 = r368_xn$Capture$2Lrc8.SpiroFns;
        var _r368_t3 = r368_xn$Capture$2Lrc8.BooleFns;
        r368_xn$ExportCapture$2Lrc4b(function () {
            var _r370_t0, _r370_t1;
            return { 'BowlXDepth': r368_BowlXDepth };
        });
        return r368_BowlXDepth = function (r371_top, r371_bottom, r371_left, r371_right, r371_sw) {
            var _r371_t0, _r371_t1;
            var r371_trShrink = Math.pow((r371_right - r371_left) / (r371_top - r371_bottom), 0.5);
            return Math.max(r371_sw * 1.25 * r368_HVContrast, r371_trShrink * Math.min((r371_top - r371_bottom) * 0.45, (r371_right - r371_left + r371_sw * r368_HVContrast) * 0.875));
        };
    });
    return void 0;
});
r1_xn$GlyphBlocks$2Lrc2b.push(function (r374_xn$Capture_Ext$2Lrc2b) {
    var _r374_t0, _r374_t1;
    r374_xn$Capture_Ext$2Lrc2b['$defineGlyphBlockImpl$'](r374_xn$Capture_Ext$2Lrc2b, 'Letter-Shared-Shapes', function (r375_xn$Capture$2Lrc8, r375_xn$ExportCapture$2Lrc4b) {
        var _r375_t7, _r375_t8, _r375_t9, _r375_tag10, _r375_t11, _r375_tag12, _r375_t13, _r375_tag14, _r375_t15, _r375_tag16, _r375_t17, _r375_tag18, _r375_t19, _r375_tag20, _r375_t21, _r375_tag22, _r375_t23, _r375_tag24, _r375_t25, _r375_tag26, _r375_t27, _r375_tag28, _r375_t29, _r375_tag30, _r375_t31, _r375_tag32;
        var _r375_t0 = r375_xn$Capture$2Lrc8;
        var r375_xn$createAndSaveGlyphImpl$2Lrc3c = _r375_t0['$createAndSaveGlyphImpl$'];
        var r375_xn$NamedParameterPair$2Lrc9b = _r375_t0['$NamedParameterPair$'];
        var r375_xn$assignUnicodeImpl$2Lrc8b = _r375_t0['$assignUnicodeImpl$'];
        var r375_xn$execState$2Lrc0b = _r375_t0['$execState$'];
        var r375_para = _r375_t0.para;
        var r375_AS_BASE = _r375_t0.AS_BASE;
        var r375_ALSO_METRICS = _r375_t0.ALSO_METRICS;
        var r375_tagged = _r375_t0.tagged;
        var r375_DivFrame = _r375_t0.DivFrame;
        var _r375_t1 = r375_xn$Capture$2Lrc8.Metrics;
        var r375_DesignParameters = _r375_t1.DesignParameters;
        var r375_Width = _r375_t1.Width;
        var r375_SB = _r375_t1.SB;
        var r375_CAP = _r375_t1.CAP;
        var r375_XH = _r375_t1.XH;
        var r375_Ascender = _r375_t1.Ascender;
        var r375_Descender = _r375_t1.Descender;
        var r375_ApparentTranslate = _r375_t1.ApparentTranslate;
        var r375_TanSlope = _r375_t1.TanSlope;
        var r375_HVContrast = _r375_t1.HVContrast;
        var r375_Upward = _r375_t1.Upward;
        var r375_Downward = _r375_t1.Downward;
        var r375_Rightward = _r375_t1.Rightward;
        var r375_Leftward = _r375_t1.Leftward;
        var r375_O = _r375_t1.O;
        var r375_OX = _r375_t1.OX;
        var r375_Hook = _r375_t1.Hook;
        var r375_SHook = _r375_t1.SHook;
        var r375_HookX = _r375_t1.HookX;
        var r375_TailX = _r375_t1.TailX;
        var r375_TailY = _r375_t1.TailY;
        var r375_Stroke = _r375_t1.Stroke;
        var r375_LongJut = _r375_t1.LongJut;
        var r375_Jut = _r375_t1.Jut;
        var r375_VJutStroke = _r375_t1.VJutStroke;
        var r375_CThinB = _r375_t1.CThinB;
        var r375_HalfStroke = _r375_t1.HalfStroke;
        var r375_RightSB = _r375_t1.RightSB;
        var r375_SideJut = _r375_t1.SideJut;
        var r375_ArchDepthA = _r375_t1.ArchDepthA;
        var r375_ArchDepthB = _r375_t1.ArchDepthB;
        var r375_SmallArchDepthA = _r375_t1.SmallArchDepthA;
        var r375_SmallArchDepthB = _r375_t1.SmallArchDepthB;
        var r375_CorrectionOMidX = _r375_t1.CorrectionOMidX;
        var r375_AdviceStroke = _r375_t1.AdviceStroke;
        var r375_AdviceStroke2 = _r375_t1.AdviceStroke2;
        var r375_OverlayStroke = _r375_t1.OverlayStroke;
        var r375_ShoulderFine = _r375_t1.ShoulderFine;
        var r375_shoulderMidSkew = _r375_t1.shoulderMidSkew;
        var r375_MidJutSide = _r375_t1.MidJutSide;
        var _r375_t2 = r375_xn$Capture$2Lrc8.SpiroFns;
        var r375_g4 = _r375_t2.g4;
        var r375_g2 = _r375_t2.g2;
        var r375_corner = _r375_t2.corner;
        var r375_flat = _r375_t2.flat;
        var r375_curl = _r375_t2.curl;
        var r375_end = _r375_t2.end;
        var r375_straight = _r375_t2.straight;
        var r375_widths = _r375_t2.widths;
        var r375_heading = _r375_t2.heading;
        var r375_important = _r375_t2.important;
        var r375_alsoThru = _r375_t2.alsoThru;
        var r375_alsoThruThem = _r375_t2.alsoThruThem;
        var r375_quadControls = _r375_t2.quadControls;
        var r375_archv = _r375_t2.archv;
        var r375_arcvh = _r375_t2.arcvh;
        var r375_dispiro = _r375_t2.dispiro;
        var r375_xn$spirooutline$1aao = _r375_t2['spiro-outline'];
        var _r375_t3 = r375_xn$Capture$2Lrc8.BooleFns;
        var r375_union = _r375_t3.union;
        var r375_intersection = _r375_t3.intersection;
        var r375_difference = _r375_t3.difference;
        var _r375_t4 = r375_xn$Capture$2Lrc8.CommonShapes.resolve();
        var r375_xn$noshape$3cah = _r375_t4['no-shape'];
        var r375_Rect = _r375_t4.Rect;
        var r375_HSerif = _r375_t4.HSerif;
        var r375_HBar = _r375_t4.HBar;
        var r375_HOverlayBar = _r375_t4.HOverlayBar;
        var r375_VBar = _r375_t4.VBar;
        var r375_FlipAround = _r375_t4.FlipAround;
        var r375_WithTransform = _r375_t4.WithTransform;
        var r375_ExtLineCenter = _r375_t4.ExtLineCenter;
        var r375_MaskAbove = _r375_t4.MaskAbove;
        var r375_MaskBelow = _r375_t4.MaskBelow;
        var _r375_t5 = r375_xn$Capture$2Lrc8['Common-Derivatives'].resolve();
        var r375_xn$referglyph$1aao = _r375_t5['refer-glyph'];
        var r375_xn$addglyphdependency$9Jrj6 = _r375_t5['add-glyph-dependency'];
        var _r375_t6 = r375_xn$Capture$2Lrc8['Mark-Adjustment'].resolve();
        var r375_ExtendAboveBaseAnchors = _r375_t6.ExtendAboveBaseAnchors;
        var r375_ExtendBelowBaseAnchors = _r375_t6.ExtendBelowBaseAnchors;
        r375_xn$ExportCapture$2Lrc4b(function () {
            var _r380_t0, _r380_t1;
            return { 'RightwardTailedBar': r375_RightwardTailedBar };
        });
        var r375_RightwardTailedBar = function () {
            var _r381_t6;
            var _r381_t7 = arguments;
            var _r381_t0 = [].slice.call(_r381_t7, 0);
            var _r381_t1 = [];
            var _r381_t2 = 0;
            while (_r381_t2 < _r381_t0.length) {
                if (!(_r381_t0[_r381_t2] instanceof r375_xn$NamedParameterPair$2Lrc9b))
                    _r381_t1.push(_r381_t0[_r381_t2]);
                _r381_t2 = _r381_t2 + 1;
            }
            var _r381_t3 = _r381_t0;
            var _r381_t4 = _r381_t3.length;
            var _r381_t5 = 0;
            while (_r381_t5 < _r381_t4) {
                _r381_t2 = _r381_t3[_r381_t5];
                if (_r381_t2 && _r381_t2 instanceof r375_xn$NamedParameterPair$2Lrc9b && _r381_t2.left === 'x')
                    r381_x = _r381_t2.right;
                if (_r381_t2 && _r381_t2 instanceof r375_xn$NamedParameterPair$2Lrc9b && _r381_t2.left === 'low')
                    r381_low = _r381_t2.right;
                if (_r381_t2 && _r381_t2 instanceof r375_xn$NamedParameterPair$2Lrc9b && _r381_t2.left === 'high')
                    r381_high = _r381_t2.right;
                if (_r381_t2 && _r381_t2 instanceof r375_xn$NamedParameterPair$2Lrc9b && _r381_t2.left === 'sw')
                    r381_sw = _r381_t2.right;
                _r381_t5 = _r381_t5 + 1;
            }
            var r381_x = r1_fallback(r381_x, _r381_t1[0]);
            var r381_low = r1_fallback(r381_low, _r381_t1[1]);
            var r381_high = r1_fallback(r381_high, _r381_t1[2]);
            var r381_sw = r1_fallback(r381_sw, _r381_t1[3], r375_Stroke);
            var r381_hookDepth = Math.max(r375_SideJut, r375_AdviceStroke(8), r375_SB * 0.625);
            var r381_hookTurn = Math.max(r375_AdviceStroke(16), r381_hookDepth - r375_AdviceStroke(16));
            var r381_overshoot = r375_O * 1;
            return r375_dispiro(r375_flat(r381_x - r375_HVContrast * r381_sw, r381_high, r375_widths.lhs.heading(r381_sw, r375_Downward)), r375_curl(r381_x - r375_HVContrast * r381_sw, r381_low + r381_overshoot + r381_sw + r381_hookTurn, r375_heading(r375_Downward)), r375_arcvh(), r375_flat(r381_x + r381_hookTurn, r381_low + r381_overshoot, r375_heading(r375_Rightward)), r375_curl(r381_x + r381_hookDepth + r381_sw * r375_TanSlope, r381_low + r381_overshoot));
        };
        r375_xn$ExportCapture$2Lrc4b(function () {
            var _r387_t0, _r387_t1;
            return { 'InvRightwardTailedBar': r375_InvRightwardTailedBar };
        });
        var r375_InvRightwardTailedBar = function () {
            var _r388_t6;
            var _r388_t7 = arguments;
            var _r388_t0 = [].slice.call(_r388_t7, 0);
            var _r388_t1 = [];
            var _r388_t2 = 0;
            while (_r388_t2 < _r388_t0.length) {
                if (!(_r388_t0[_r388_t2] instanceof r375_xn$NamedParameterPair$2Lrc9b))
                    _r388_t1.push(_r388_t0[_r388_t2]);
                _r388_t2 = _r388_t2 + 1;
            }
            var _r388_t3 = _r388_t0;
            var _r388_t4 = _r388_t3.length;
            var _r388_t5 = 0;
            while (_r388_t5 < _r388_t4) {
                _r388_t2 = _r388_t3[_r388_t5];
                if (_r388_t2 && _r388_t2 instanceof r375_xn$NamedParameterPair$2Lrc9b && _r388_t2.left === 'x')
                    r388_x = _r388_t2.right;
                if (_r388_t2 && _r388_t2 instanceof r375_xn$NamedParameterPair$2Lrc9b && _r388_t2.left === 'low')
                    r388_low = _r388_t2.right;
                if (_r388_t2 && _r388_t2 instanceof r375_xn$NamedParameterPair$2Lrc9b && _r388_t2.left === 'high')
                    r388_high = _r388_t2.right;
                if (_r388_t2 && _r388_t2 instanceof r375_xn$NamedParameterPair$2Lrc9b && _r388_t2.left === 'sw')
                    r388_sw = _r388_t2.right;
                _r388_t5 = _r388_t5 + 1;
            }
            var r388_x = r1_fallback(r388_x, _r388_t1[0]);
            var r388_low = r1_fallback(r388_low, _r388_t1[1]);
            var r388_high = r1_fallback(r388_high, _r388_t1[2]);
            var r388_sw = r1_fallback(r388_sw, _r388_t1[3], r375_Stroke);
            var r388_hookDepth = Math.max(r375_SideJut, r375_AdviceStroke(8), r375_SB * 0.625);
            var r388_hookTurn = Math.max(r375_AdviceStroke(16), r388_hookDepth - r375_AdviceStroke(16));
            var r388_overshoot = r375_O * 1;
            return r375_dispiro(r375_flat(r388_x - r375_HVContrast * r388_sw, r388_low, r375_widths.rhs.heading(r388_sw, r375_Upward)), r375_curl(r388_x - r375_HVContrast * r388_sw, r388_high - r388_overshoot - r388_sw - r388_hookTurn, r375_heading(r375_Upward)), r375_arcvh(), r375_flat(r388_x + r388_hookTurn, r388_high - r388_overshoot, r375_heading(r375_Rightward)), r375_curl(r388_x + r388_hookDepth + r388_sw * r375_TanSlope, r388_high - r388_overshoot));
        };
        r375_xn$ExportCapture$2Lrc4b(function () {
            var _r394_t0, _r394_t1;
            return { 'DToothlessRise': r375_DToothlessRise };
        });
        r375_xn$ExportCapture$2Lrc4b(function () {
            var _r396_t0, _r396_t1;
            return { 'DMBlend': r375_DMBlend };
        });
        var r375_DToothlessRise = r375_Hook * 0.25 + r375_Stroke / 16;
        var r375_DMBlend = 0.8;
        r375_xn$ExportCapture$2Lrc4b(function () {
            var _r398_t0, _r398_t1;
            return { 'CurlyTail': r375_CurlyTail };
        });
        var r375_CurlyTail = function () {
            var _r399_t6;
            var _r399_t7 = arguments;
            var _r399_t0 = [].slice.call(_r399_t7, 0);
            var _r399_t1 = [];
            var _r399_t2 = 0;
            while (_r399_t2 < _r399_t0.length) {
                if (!(_r399_t0[_r399_t2] instanceof r375_xn$NamedParameterPair$2Lrc9b))
                    _r399_t1.push(_r399_t0[_r399_t2]);
                _r399_t2 = _r399_t2 + 1;
            }
            var _r399_t3 = _r399_t0;
            var _r399_t4 = _r399_t3.length;
            var _r399_t5 = 0;
            while (_r399_t5 < _r399_t4) {
                _r399_t2 = _r399_t3[_r399_t5];
                if (_r399_t2 && _r399_t2 instanceof r375_xn$NamedParameterPair$2Lrc9b && _r399_t2.left === 'fine')
                    r399_fine = _r399_t2.right;
                if (_r399_t2 && _r399_t2 instanceof r375_xn$NamedParameterPair$2Lrc9b && _r399_t2.left === 'rinner')
                    r399_rinner = _r399_t2.right;
                if (_r399_t2 && _r399_t2 instanceof r375_xn$NamedParameterPair$2Lrc9b && _r399_t2.left === 'xleft')
                    r399_xleft = _r399_t2.right;
                if (_r399_t2 && _r399_t2 instanceof r375_xn$NamedParameterPair$2Lrc9b && _r399_t2.left === 'bottom')
                    r399_bottom = _r399_t2.right;
                if (_r399_t2 && _r399_t2 instanceof r375_xn$NamedParameterPair$2Lrc9b && _r399_t2.left === 'right')
                    r399_right = _r399_t2.right;
                if (_r399_t2 && _r399_t2 instanceof r375_xn$NamedParameterPair$2Lrc9b && _r399_t2.left === 'x2')
                    r399_x2 = _r399_t2.right;
                if (_r399_t2 && _r399_t2 instanceof r375_xn$NamedParameterPair$2Lrc9b && _r399_t2.left === 'y2')
                    r399_y2 = _r399_t2.right;
                if (_r399_t2 && _r399_t2 instanceof r375_xn$NamedParameterPair$2Lrc9b && _r399_t2.left === 'adj')
                    r399_adj = _r399_t2.right;
                if (_r399_t2 && _r399_t2 instanceof r375_xn$NamedParameterPair$2Lrc9b && _r399_t2.left === 'adj2')
                    r399_adj2 = _r399_t2.right;
                if (_r399_t2 && _r399_t2 instanceof r375_xn$NamedParameterPair$2Lrc9b && _r399_t2.left === 'adj3')
                    r399_adj3 = _r399_t2.right;
                _r399_t5 = _r399_t5 + 1;
            }
            var r399_fine = r1_fallback(r399_fine, _r399_t1[0]);
            var r399_rinner = r1_fallback(r399_rinner, _r399_t1[1]);
            var r399_xleft = r1_fallback(r399_xleft, _r399_t1[2]);
            var r399_bottom = r1_fallback(r399_bottom, _r399_t1[3]);
            var r399_right = r1_fallback(r399_right, _r399_t1[4]);
            var r399_x2 = r1_fallback(r399_x2, _r399_t1[5]);
            var r399_y2 = r1_fallback(r399_y2, _r399_t1[6]);
            var r399_adj = r1_fallback(r399_adj, _r399_t1[7], 0.4);
            var r399_adj2 = r1_fallback(r399_adj2, _r399_t1[8], 0.4);
            var r399_adj3 = r1_fallback(r399_adj3, _r399_t1[9], 0);
            var r399_ltr = r399_right > r399_xleft;
            r399_right = r399_right - r399_fine * (r399_ltr ? 1 : -1) * r375_HVContrast;
            var r399_mid = r1_mix(r1_mix(r399_xleft, r399_right, 0.5), r399_right - r399_rinner * (r399_ltr ? 1 : -1), r399_adj);
            var r399_midu = r1_mix(r1_mix(r399_xleft, r399_right, 0.5), r399_right - r399_rinner * (r399_ltr ? 1 : -1), r399_adj2);
            return [
                r375_g4[r399_ltr ? 'right' : 'left'].mid(r399_mid + r375_CorrectionOMidX * r399_fine * r399_adj3 * (r399_ltr ? 1 : -1), r399_bottom + r399_fine + r375_O, r375_widths(r399_ltr ? 0 : r399_fine, r399_ltr ? r399_fine : 0)),
                r375_archv(2),
                r375_g4.up.mid(r399_right, r399_bottom + r399_fine + r399_rinner),
                r375_arcvh(2),
                r375_g4(r399_mid, r399_bottom + r399_fine + r399_rinner * 2 - r375_O),
                r375_alsoThruThem([
                    [
                        0.25,
                        0.06
                    ],
                    [
                        0.52,
                        0.25
                    ]
                ], r375_important),
                r375_g4(r399_x2, r399_y2)
            ];
        };
        r375_xn$ExportCapture$2Lrc4b(function () {
            var _r405_t0, _r405_t1;
            return { 'HCurlyTail': r375_HCurlyTail };
        });
        var r375_HCurlyTail = function (r406_fine, r406_wide, r406_rinner, r406_left, r406_m1, r406__right, r406_x1, r406_x2, r406_y2) {
            var _r406_t0, _r406_t1;
            return function () {
                var _r408_t1;
                var _r408_t0 = this;
                var r408_currentGlyph = _r408_t0;
                var r408_right = r406__right - r406_fine;
                var r408_mid = r408_right - r406_rinner + r375_O;
                r408_currentGlyph.include(r375_dispiro(r375_widths.rhs(r406_wide), r375_flat(r406_left, r406_wide, r375_heading(r375_Rightward)), r375_curl(r406_m1, r406_wide, r375_heading(r375_Rightward)), r375_archv(8), r375_g4(r408_right, r406_wide + r406_rinner - r375_O / 2, r375_widths.heading(0, r406_fine, {
                    'x': -r375_HVContrast,
                    'y': (r406_wide - r406_fine) / (r406_wide + r406_rinner * 2 - r375_O)
                })), r375_arcvh(8), r375_g4.left.mid(r408_mid, r406_wide + r406_rinner * 2 - r375_O, r375_heading(r375_Leftward)), r375_quadControls((r406_x1 - r408_mid) / (r406_x2 - r408_mid), 0, 8), r375_g4(r406_x2, r406_y2)));
                return void 0;
            };
        };
        r375_xn$ExportCapture$2Lrc4b(function () {
            var _r411_t0, _r411_t1;
            return { 'ShoulderMidKnotLhs': r375_ShoulderMidKnotLhs };
        });
        var r375_ShoulderMidKnotLhs = function (r412_cx, r412_cy, r412_fine, r412_sw, r412_dirX, r412_dirY) {
            var _r412_t0, _r412_t1;
            var r412_skew = r375_shoulderMidSkew(r412_fine, r412_sw);
            return r375_g4(r412_cx + (r412_dirY * r375_CorrectionOMidX - r412_skew - r412_dirX * r375_TanSlope) * r412_sw, r412_cy, r375_widths.heading(r412_sw, 0, {
                'y': r412_dirY,
                'x': r412_skew
            }));
        };
        r375_xn$ExportCapture$2Lrc4b(function () {
            var _r414_t0, _r414_t1;
            return { 'ShoulderMidKnotLhsRev': r375_ShoulderMidKnotLhsRev };
        });
        var r375_ShoulderMidKnotLhsRev = function (r415_cx, r415_cy, r415_fine, r415_sw, r415_dirX, r415_dirY) {
            var _r415_t0, _r415_t1;
            var r415_skew = r375_shoulderMidSkew(r415_fine, r415_sw);
            return r375_g4(r415_cx + (r415_dirY * r375_CorrectionOMidX + r415_skew - r415_dirX * r375_TanSlope) * r415_sw, r415_cy, r375_widths.heading(r415_sw, 0, {
                'y': r415_dirY,
                'x': -r415_skew
            }));
        };
        r375_xn$ExportCapture$2Lrc4b(function () {
            var _r417_t0, _r417_t1;
            return { 'ShoulderMidKnotRhs': r375_ShoulderMidKnotRhs };
        });
        var r375_ShoulderMidKnotRhs = function (r418_cx, r418_cy, r418_fine, r418_sw, r418_dirX, r418_dirY) {
            var _r418_t0, _r418_t1;
            var r418_skew = r375_shoulderMidSkew(r418_fine, r418_sw);
            return r375_g4(r418_cx + (r418_dirY * r375_CorrectionOMidX + r418_skew + r418_dirX * r375_TanSlope) * r418_sw, r418_cy, r375_widths.heading(0, r418_sw, {
                'y': -r418_dirY,
                'x': r418_skew
            }));
        };
        r375_xn$ExportCapture$2Lrc4b(function () {
            var _r420_t0, _r420_t1;
            return { 'nShoulderKnots': r375_nShoulderKnots };
        });
        var r375_nShoulderKnots = function () {
            var _r421_t6;
            var _r421_t7 = arguments;
            var _r421_t0 = [].slice.call(_r421_t7, 0);
            var _r421_t1 = [];
            var _r421_t2 = 0;
            while (_r421_t2 < _r421_t0.length) {
                if (!(_r421_t0[_r421_t2] instanceof r375_xn$NamedParameterPair$2Lrc9b))
                    _r421_t1.push(_r421_t0[_r421_t2]);
                _r421_t2 = _r421_t2 + 1;
            }
            var _r421_t3 = _r421_t0;
            var _r421_t4 = _r421_t3.length;
            var _r421_t5 = 0;
            while (_r421_t5 < _r421_t4) {
                _r421_t2 = _r421_t3[_r421_t5];
                if (_r421_t2 && _r421_t2 instanceof r375_xn$NamedParameterPair$2Lrc9b && _r421_t2.left === 'left')
                    r421_left = _r421_t2.right;
                if (_r421_t2 && _r421_t2 instanceof r375_xn$NamedParameterPair$2Lrc9b && _r421_t2.left === 'right')
                    r421_right = _r421_t2.right;
                if (_r421_t2 && _r421_t2 instanceof r375_xn$NamedParameterPair$2Lrc9b && _r421_t2.left === 'fine')
                    r421_fine = _r421_t2.right;
                if (_r421_t2 && _r421_t2 instanceof r375_xn$NamedParameterPair$2Lrc9b && _r421_t2.left === 'top')
                    r421_top = _r421_t2.right;
                if (_r421_t2 && _r421_t2 instanceof r375_xn$NamedParameterPair$2Lrc9b && _r421_t2.left === 'bottom')
                    r421_bottom = _r421_t2.right;
                if (_r421_t2 && _r421_t2 instanceof r375_xn$NamedParameterPair$2Lrc9b && _r421_t2.left === 'ada')
                    r421_ada = _r421_t2.right;
                if (_r421_t2 && _r421_t2 instanceof r375_xn$NamedParameterPair$2Lrc9b && _r421_t2.left === 'adb')
                    r421_adb = _r421_t2.right;
                if (_r421_t2 && _r421_t2 instanceof r375_xn$NamedParameterPair$2Lrc9b && _r421_t2.left === 'stroke')
                    r421_stroke = _r421_t2.right;
                if (_r421_t2 && _r421_t2 instanceof r375_xn$NamedParameterPair$2Lrc9b && _r421_t2.left === 'fMask')
                    r421_fMask = _r421_t2.right;
                if (_r421_t2 && _r421_t2 instanceof r375_xn$NamedParameterPair$2Lrc9b && _r421_t2.left === 'leftY0')
                    r421_leftY0 = _r421_t2.right;
                _r421_t5 = _r421_t5 + 1;
            }
            var r421_left = r1_fallback(r421_left, _r421_t1[0]);
            var r421_right = r1_fallback(r421_right, _r421_t1[1]);
            var r421_fine = r1_fallback(r421_fine, _r421_t1[2], r375_ShoulderFine);
            var r421_top = r1_fallback(r421_top, _r421_t1[3], r375_XH);
            var r421_bottom = r1_fallback(r421_bottom, _r421_t1[4], 0);
            var r421_ada = r1_fallback(r421_ada, _r421_t1[5], r375_SmallArchDepthA);
            var r421_adb = r1_fallback(r421_adb, _r421_t1[6], r375_SmallArchDepthB);
            var r421_stroke = r1_fallback(r421_stroke, _r421_t1[7], r375_Stroke);
            var r421_fMask = r1_fallback(r421_fMask, _r421_t1[8], false);
            var r421_leftY0 = r1_fallback(r421_leftY0, _r421_t1[9], void 0);
            var r421_skew = r375_shoulderMidSkew(r421_fine, r421_stroke);
            var r421_middle = r1_mix(r421_left - r421_stroke * r375_HVContrast, r421_right, 0.5) + (r421_skew - r375_CorrectionOMidX) * r421_stroke;
            return [
                r375_flat(r421_left - r421_fine * r375_HVContrast, r1_fallback(r421_leftY0, r421_top - r421_ada - 2), r375_widths.rhs(r421_fine)),
                r375_curl(r421_left - r421_fine * r375_HVContrast, r421_top - r421_ada),
                r375_arcvh(),
                r375_ShoulderMidKnotRhs(r1_mix(r421_left - r421_stroke * r375_HVContrast, r421_right, 0.5), r421_top - r375_O, r421_fine, r421_stroke, +1, -1),
                r375_archv(),
                r375_flat(r421_right, r421_top - r421_adb, r375_widths.rhs(r421_stroke)),
                (r421_fMask ? r375_corner : r375_curl)(r421_right, r421_bottom, r375_widths.rhs.heading(r421_stroke, r375_Downward)),
                !r421_fMask ? [] : [r375_corner(r421_left, r421_bottom)]
            ];
        };
        r375_xn$ExportCapture$2Lrc4b(function () {
            var _r427_t0, _r427_t1;
            return {
                'nShoulder': r375_nShoulder,
                'nShoulderMask': r375_nShoulderMask
            };
        });
        var r375_nShoulder = function () {
            var _r428_t0;
            var _r428_t1 = arguments;
            var r428_a = Array.prototype.slice.call(_r428_t1, 0);
            return function () {
                var _r430_t1;
                var _r430_t0 = this;
                var r430_currentGlyph = _r430_t0;
                r430_currentGlyph.include(r375_dispiro(r375_nShoulderKnots.apply(null, r428_a)));
                return void 0;
            };
        };
        var r375_nShoulderMask = function () {
            var _r432_t0;
            var _r432_t1 = arguments;
            var r432_a = Array.prototype.slice.call(_r432_t1, 0);
            return function () {
                var _r434_t1;
                var _r434_t0 = this;
                var r434_currentGlyph = _r434_t0;
                r434_currentGlyph.include(r375_xn$spirooutline$1aao(r375_nShoulderKnots.apply(null, r432_a.concat([new r375_xn$NamedParameterPair$2Lrc9b('fMask', true)]))));
                return void 0;
            };
        };
        r375_xn$ExportCapture$2Lrc4b(function () {
            var _r438_t0, _r438_t1;
            return { 'OBarLeft': r375_OBarLeft };
        });
        var r375_OBarLeft = function () {
            var r441_shape, r441_toothless, r441_rounded, r441_toothlessTop, r441_roundedTop;
            var r441_exports = {};
            var r441_kSkewShift = 0.5;
            r441_exports.shape = r441_shape = function () {
                var _r449_t6;
                var _r449_t7 = arguments;
                var _r449_t0 = [].slice.call(_r449_t7, 0);
                var _r449_t1 = [];
                var _r449_t2 = 0;
                while (_r449_t2 < _r449_t0.length) {
                    if (!(_r449_t0[_r449_t2] instanceof r375_xn$NamedParameterPair$2Lrc9b))
                        _r449_t1.push(_r449_t0[_r449_t2]);
                    _r449_t2 = _r449_t2 + 1;
                }
                var _r449_t3 = _r449_t0;
                var _r449_t4 = _r449_t3.length;
                var _r449_t5 = 0;
                while (_r449_t5 < _r449_t4) {
                    _r449_t2 = _r449_t3[_r449_t5];
                    if (_r449_t2 && _r449_t2 instanceof r375_xn$NamedParameterPair$2Lrc9b && _r449_t2.left === 'top')
                        r449_top = _r449_t2.right;
                    if (_r449_t2 && _r449_t2 instanceof r375_xn$NamedParameterPair$2Lrc9b && _r449_t2.left === 'left')
                        r449_left = _r449_t2.right;
                    if (_r449_t2 && _r449_t2 instanceof r375_xn$NamedParameterPair$2Lrc9b && _r449_t2.left === 'right')
                        r449_right = _r449_t2.right;
                    if (_r449_t2 && _r449_t2 instanceof r375_xn$NamedParameterPair$2Lrc9b && _r449_t2.left === 'sw')
                        r449_sw = _r449_t2.right;
                    if (_r449_t2 && _r449_t2 instanceof r375_xn$NamedParameterPair$2Lrc9b && _r449_t2.left === 'fine')
                        r449_fine = _r449_t2.right;
                    if (_r449_t2 && _r449_t2 instanceof r375_xn$NamedParameterPair$2Lrc9b && _r449_t2.left === 'ada')
                        r449_ada = _r449_t2.right;
                    if (_r449_t2 && _r449_t2 instanceof r375_xn$NamedParameterPair$2Lrc9b && _r449_t2.left === 'adb')
                        r449_adb = _r449_t2.right;
                    _r449_t5 = _r449_t5 + 1;
                }
                var r449_top = r1_fallback(r449_top, _r449_t1[0], r375_XH);
                var r449_left = r1_fallback(r449_left, _r449_t1[1], r375_SB);
                var r449_right = r1_fallback(r449_right, _r449_t1[2], r375_RightSB);
                var r449_sw = r1_fallback(r449_sw, _r449_t1[3], r375_Stroke);
                var r449_fine = r1_fallback(r449_fine, _r449_t1[4], r375_ShoulderFine);
                var r449_ada = r1_fallback(r449_ada, _r449_t1[5], r375_SmallArchDepthA);
                var r449_adb = r1_fallback(r449_adb, _r449_t1[6], r375_SmallArchDepthB);
                var r449_skew = r375_shoulderMidSkew(r449_fine, r449_sw);
                var r449_mt = r1_mix(r449_left, r449_right, 0.5) + (r449_skew + r441_kSkewShift * r375_TanSlope) * r449_sw;
                var r449_mb = r1_mix(r449_left, r449_right, 0.5) + (r449_skew + r441_kSkewShift * r375_TanSlope) * r449_sw;
                return r375_dispiro(r375_widths.lhs(r449_fine), r375_flat(r449_left + (r449_sw - r449_fine) * r375_HVContrast, r449_top - r449_ada - 0.01), r375_curl(r449_left + (r449_sw - r449_fine) * r375_HVContrast, 0 + r449_adb), r375_arcvh(), r375_g4(r449_mb, r375_O, r375_widths.lhs.heading(r449_sw, {
                    'y': 1,
                    'x': -r449_skew
                })), r375_archv(), r375_flat(r449_right - r375_OX, 0 + r449_ada), r375_curl(r449_right - r375_OX, r449_top - r449_adb), r375_arcvh(), r375_g4(r449_mt, r449_top - r375_O, r375_widths.lhs.heading(r449_sw, {
                    'y': -1,
                    'x': -r449_skew
                })), r375_archv(), r375_flat(r449_left + (r449_sw - r449_fine) * r375_HVContrast, r449_top - r449_ada, r375_widths.lhs(r449_fine)), r375_curl(r449_left + (r449_sw - r449_fine) * r375_HVContrast, r449_top - r449_ada - 0.01));
            };
            r441_exports.toothless = r441_toothless = function () {
                var _r455_t6;
                var _r455_t7 = arguments;
                var _r455_t0 = [].slice.call(_r455_t7, 0);
                var _r455_t1 = [];
                var _r455_t2 = 0;
                while (_r455_t2 < _r455_t0.length) {
                    if (!(_r455_t0[_r455_t2] instanceof r375_xn$NamedParameterPair$2Lrc9b))
                        _r455_t1.push(_r455_t0[_r455_t2]);
                    _r455_t2 = _r455_t2 + 1;
                }
                var _r455_t3 = _r455_t0;
                var _r455_t4 = _r455_t3.length;
                var _r455_t5 = 0;
                while (_r455_t5 < _r455_t4) {
                    _r455_t2 = _r455_t3[_r455_t5];
                    if (_r455_t2 && _r455_t2 instanceof r375_xn$NamedParameterPair$2Lrc9b && _r455_t2.left === 'top')
                        r455_top = _r455_t2.right;
                    if (_r455_t2 && _r455_t2 instanceof r375_xn$NamedParameterPair$2Lrc9b && _r455_t2.left === 'left')
                        r455_left = _r455_t2.right;
                    if (_r455_t2 && _r455_t2 instanceof r375_xn$NamedParameterPair$2Lrc9b && _r455_t2.left === 'right')
                        r455_right = _r455_t2.right;
                    if (_r455_t2 && _r455_t2 instanceof r375_xn$NamedParameterPair$2Lrc9b && _r455_t2.left === 'rise')
                        r455_rise = _r455_t2.right;
                    if (_r455_t2 && _r455_t2 instanceof r375_xn$NamedParameterPair$2Lrc9b && _r455_t2.left === 'sw')
                        r455_sw = _r455_t2.right;
                    if (_r455_t2 && _r455_t2 instanceof r375_xn$NamedParameterPair$2Lrc9b && _r455_t2.left === 'mBlend')
                        r455_mBlend = _r455_t2.right;
                    if (_r455_t2 && _r455_t2 instanceof r375_xn$NamedParameterPair$2Lrc9b && _r455_t2.left === 'ada')
                        r455_ada = _r455_t2.right;
                    if (_r455_t2 && _r455_t2 instanceof r375_xn$NamedParameterPair$2Lrc9b && _r455_t2.left === 'adb')
                        r455_adb = _r455_t2.right;
                    _r455_t5 = _r455_t5 + 1;
                }
                var r455_top = r1_fallback(r455_top, _r455_t1[0], r375_XH);
                var r455_left = r1_fallback(r455_left, _r455_t1[1], r375_SB);
                var r455_right = r1_fallback(r455_right, _r455_t1[2], r375_RightSB);
                var r455_rise = r1_fallback(r455_rise, _r455_t1[3], r375_SHook);
                var r455_sw = r1_fallback(r455_sw, _r455_t1[4], r375_Stroke);
                var r455_mBlend = r1_fallback(r455_mBlend, _r455_t1[5], Math.sqrt(1 / 2));
                var r455_ada = r1_fallback(r455_ada, _r455_t1[6], r375_SmallArchDepthA);
                var r455_adb = r1_fallback(r455_adb, _r455_t1[7], r375_SmallArchDepthB);
                var r455_fine = r375_ShoulderFine;
                var r455_skew = r375_shoulderMidSkew(r455_fine, r455_sw);
                var r455_mt = r1_mix(r455_left, r455_right, 0.5) + (r455_skew + r441_kSkewShift * r375_TanSlope) * r455_sw;
                var r455_mb = r1_mix(r455_left, r455_right, 0.5) + r375_CorrectionOMidX * r455_sw;
                return r375_dispiro(r375_g4(r455_left, r455_rise, r375_widths.lhs(r455_sw)), r375_alsoThru.g2(0.5, r455_mBlend, r375_important), r375_g4.right.mid(r455_mb, r375_O), r375_archv(), r375_flat(r455_right - r375_OX, 0 + r455_ada), r375_curl(r455_right - r375_OX, r455_top - r455_adb), r375_arcvh(), r375_g4(r455_mt, r455_top - r375_O, r375_widths.heading(r455_sw, 0, {
                    'y': -1,
                    'x': -r455_skew
                })), r375_archv(), r375_flat(r455_left + (r455_sw - r455_fine) * r375_HVContrast, r455_top - r455_ada, r375_widths(r455_fine, 0)), r375_curl(r455_left + (r455_sw - r455_fine) * r375_HVContrast, r455_top - r455_ada - 0.01, r375_widths(r455_fine, 0)));
            };
            r441_exports.rounded = r441_rounded = function () {
                var _r461_t6;
                var _r461_t7 = arguments;
                var _r461_t0 = [].slice.call(_r461_t7, 0);
                var _r461_t1 = [];
                var _r461_t2 = 0;
                while (_r461_t2 < _r461_t0.length) {
                    if (!(_r461_t0[_r461_t2] instanceof r375_xn$NamedParameterPair$2Lrc9b))
                        _r461_t1.push(_r461_t0[_r461_t2]);
                    _r461_t2 = _r461_t2 + 1;
                }
                var _r461_t3 = _r461_t0;
                var _r461_t4 = _r461_t3.length;
                var _r461_t5 = 0;
                while (_r461_t5 < _r461_t4) {
                    _r461_t2 = _r461_t3[_r461_t5];
                    if (_r461_t2 && _r461_t2 instanceof r375_xn$NamedParameterPair$2Lrc9b && _r461_t2.left === 'top')
                        r461_top = _r461_t2.right;
                    if (_r461_t2 && _r461_t2 instanceof r375_xn$NamedParameterPair$2Lrc9b && _r461_t2.left === 'left')
                        r461_left = _r461_t2.right;
                    if (_r461_t2 && _r461_t2 instanceof r375_xn$NamedParameterPair$2Lrc9b && _r461_t2.left === 'right')
                        r461_right = _r461_t2.right;
                    if (_r461_t2 && _r461_t2 instanceof r375_xn$NamedParameterPair$2Lrc9b && _r461_t2.left === 'yTerminal')
                        r461_yTerminal = _r461_t2.right;
                    if (_r461_t2 && _r461_t2 instanceof r375_xn$NamedParameterPair$2Lrc9b && _r461_t2.left === 'sw')
                        r461_sw = _r461_t2.right;
                    if (_r461_t2 && _r461_t2 instanceof r375_xn$NamedParameterPair$2Lrc9b && _r461_t2.left === 'fine')
                        r461_fine = _r461_t2.right;
                    if (_r461_t2 && _r461_t2 instanceof r375_xn$NamedParameterPair$2Lrc9b && _r461_t2.left === 'ada')
                        r461_ada = _r461_t2.right;
                    if (_r461_t2 && _r461_t2 instanceof r375_xn$NamedParameterPair$2Lrc9b && _r461_t2.left === 'adb')
                        r461_adb = _r461_t2.right;
                    _r461_t5 = _r461_t5 + 1;
                }
                var r461_top = r1_fallback(r461_top, _r461_t1[0], r375_XH);
                var r461_left = r1_fallback(r461_left, _r461_t1[1], r375_SB);
                var r461_right = r1_fallback(r461_right, _r461_t1[2], r375_RightSB);
                var r461_yTerminal = r1_fallback(r461_yTerminal, _r461_t1[3], r375_CAP);
                var r461_sw = r1_fallback(r461_sw, _r461_t1[4], r375_Stroke);
                var r461_fine = r1_fallback(r461_fine, _r461_t1[5], r375_ShoulderFine);
                var r461_ada = r1_fallback(r461_ada, _r461_t1[6], r375_SmallArchDepthA);
                var r461_adb = r1_fallback(r461_adb, _r461_t1[7], r375_SmallArchDepthB);
                var r461_skew = r375_shoulderMidSkew(r461_fine, r461_sw);
                var r461_mt = r1_mix(r461_left, r461_right, 0.5) + (r461_skew + r441_kSkewShift * r375_TanSlope) * r461_sw;
                var r461_mb = r1_mix(r461_left, r461_right, 0.5) + r375_CorrectionOMidX * r461_sw;
                return r375_dispiro(r375_flat(r461_left, r461_yTerminal, r375_widths.lhs.heading(r461_sw, r375_Downward)), r375_curl(r461_left, Math.min(r461_adb, r461_yTerminal - 0.01)), r375_arcvh(), r375_g4(r461_mb, r375_O), r375_archv(), r375_flat(r461_right - r375_OX, 0 + r461_ada), r375_curl(r461_right - r375_OX, r461_top - r461_adb), r375_arcvh(), r375_g4(r461_mt, r461_top - r375_O, r375_widths.heading(r461_sw, 0, {
                    'y': -1,
                    'x': -r461_skew
                })), r375_archv(), r375_flat(r461_left + (r461_sw - r461_fine) * r375_HVContrast, r461_top - r461_ada + 0.01, r375_widths(r461_fine, 0)), r375_curl(r461_left + (r461_sw - r461_fine) * r375_HVContrast, r461_top - r461_ada, r375_widths(r461_fine, 0)));
            };
            r441_exports.toothlessTop = r441_toothlessTop = function () {
                var _r467_t6;
                var _r467_t7 = arguments;
                var _r467_t0 = [].slice.call(_r467_t7, 0);
                var _r467_t1 = [];
                var _r467_t2 = 0;
                while (_r467_t2 < _r467_t0.length) {
                    if (!(_r467_t0[_r467_t2] instanceof r375_xn$NamedParameterPair$2Lrc9b))
                        _r467_t1.push(_r467_t0[_r467_t2]);
                    _r467_t2 = _r467_t2 + 1;
                }
                var _r467_t3 = _r467_t0;
                var _r467_t4 = _r467_t3.length;
                var _r467_t5 = 0;
                while (_r467_t5 < _r467_t4) {
                    _r467_t2 = _r467_t3[_r467_t5];
                    if (_r467_t2 && _r467_t2 instanceof r375_xn$NamedParameterPair$2Lrc9b && _r467_t2.left === 'top')
                        r467_top = _r467_t2.right;
                    if (_r467_t2 && _r467_t2 instanceof r375_xn$NamedParameterPair$2Lrc9b && _r467_t2.left === 'left')
                        r467_left = _r467_t2.right;
                    if (_r467_t2 && _r467_t2 instanceof r375_xn$NamedParameterPair$2Lrc9b && _r467_t2.left === 'right')
                        r467_right = _r467_t2.right;
                    if (_r467_t2 && _r467_t2 instanceof r375_xn$NamedParameterPair$2Lrc9b && _r467_t2.left === 'rise')
                        r467_rise = _r467_t2.right;
                    if (_r467_t2 && _r467_t2 instanceof r375_xn$NamedParameterPair$2Lrc9b && _r467_t2.left === 'sw')
                        r467_sw = _r467_t2.right;
                    if (_r467_t2 && _r467_t2 instanceof r375_xn$NamedParameterPair$2Lrc9b && _r467_t2.left === 'mBlend')
                        r467_mBlend = _r467_t2.right;
                    if (_r467_t2 && _r467_t2 instanceof r375_xn$NamedParameterPair$2Lrc9b && _r467_t2.left === 'ada')
                        r467_ada = _r467_t2.right;
                    if (_r467_t2 && _r467_t2 instanceof r375_xn$NamedParameterPair$2Lrc9b && _r467_t2.left === 'adb')
                        r467_adb = _r467_t2.right;
                    _r467_t5 = _r467_t5 + 1;
                }
                var r467_top = r1_fallback(r467_top, _r467_t1[0], r375_XH);
                var r467_left = r1_fallback(r467_left, _r467_t1[1], r375_SB);
                var r467_right = r1_fallback(r467_right, _r467_t1[2], r375_RightSB);
                var r467_rise = r1_fallback(r467_rise, _r467_t1[3], r375_SHook);
                var r467_sw = r1_fallback(r467_sw, _r467_t1[4], r375_Stroke);
                var r467_mBlend = r1_fallback(r467_mBlend, _r467_t1[5], Math.sqrt(1 / 2));
                var r467_ada = r1_fallback(r467_ada, _r467_t1[6], r375_SmallArchDepthA);
                var r467_adb = r1_fallback(r467_adb, _r467_t1[7], r375_SmallArchDepthB);
                var r467_fine = r375_ShoulderFine;
                var r467_skew = r375_shoulderMidSkew(r467_fine);
                var r467_mt = r1_mix(r467_left, r467_right, 0.5) - r375_CorrectionOMidX * r467_sw;
                var r467_mb = r1_mix(r467_left, r467_right, 0.5) + (r467_skew + r441_kSkewShift * r375_TanSlope) * r467_sw;
                return r375_dispiro(r375_flat(r467_left + (r467_sw - r467_fine) * r375_HVContrast, r467_top - r467_ada - 0.01, r375_widths(r467_fine, 0)), r375_curl(r467_left + (r467_sw - r467_fine) * r375_HVContrast, 0 + r467_adb, r375_widths(r467_fine, 0)), r375_arcvh(), r375_g4(r467_mb, r375_O, r375_widths.heading(r467_sw, 0, {
                    'y': 1,
                    'x': -r467_skew
                })), r375_archv(), r375_flat(r467_right - r375_OX, 0 + r467_ada), r375_curl(r467_right - r375_OX, r467_top - r467_adb), r375_arcvh(), r375_g4(r467_mt, r467_top - r375_O, r375_widths.lhs(r467_sw)), r375_alsoThru.g2(0.5, 1 - r467_mBlend, r375_important), r375_g4(r467_left, r467_top - r467_rise, r375_widths.lhs(r467_sw)));
            };
            r441_exports.roundedTop = r441_roundedTop = function () {
                var _r473_t6;
                var _r473_t7 = arguments;
                var _r473_t0 = [].slice.call(_r473_t7, 0);
                var _r473_t1 = [];
                var _r473_t2 = 0;
                while (_r473_t2 < _r473_t0.length) {
                    if (!(_r473_t0[_r473_t2] instanceof r375_xn$NamedParameterPair$2Lrc9b))
                        _r473_t1.push(_r473_t0[_r473_t2]);
                    _r473_t2 = _r473_t2 + 1;
                }
                var _r473_t3 = _r473_t0;
                var _r473_t4 = _r473_t3.length;
                var _r473_t5 = 0;
                while (_r473_t5 < _r473_t4) {
                    _r473_t2 = _r473_t3[_r473_t5];
                    if (_r473_t2 && _r473_t2 instanceof r375_xn$NamedParameterPair$2Lrc9b && _r473_t2.left === 'top')
                        r473_top = _r473_t2.right;
                    if (_r473_t2 && _r473_t2 instanceof r375_xn$NamedParameterPair$2Lrc9b && _r473_t2.left === 'left')
                        r473_left = _r473_t2.right;
                    if (_r473_t2 && _r473_t2 instanceof r375_xn$NamedParameterPair$2Lrc9b && _r473_t2.left === 'right')
                        r473_right = _r473_t2.right;
                    if (_r473_t2 && _r473_t2 instanceof r375_xn$NamedParameterPair$2Lrc9b && _r473_t2.left === 'yTerminal')
                        r473_yTerminal = _r473_t2.right;
                    if (_r473_t2 && _r473_t2 instanceof r375_xn$NamedParameterPair$2Lrc9b && _r473_t2.left === 'sw')
                        r473_sw = _r473_t2.right;
                    if (_r473_t2 && _r473_t2 instanceof r375_xn$NamedParameterPair$2Lrc9b && _r473_t2.left === 'fine')
                        r473_fine = _r473_t2.right;
                    if (_r473_t2 && _r473_t2 instanceof r375_xn$NamedParameterPair$2Lrc9b && _r473_t2.left === 'ada')
                        r473_ada = _r473_t2.right;
                    if (_r473_t2 && _r473_t2 instanceof r375_xn$NamedParameterPair$2Lrc9b && _r473_t2.left === 'adb')
                        r473_adb = _r473_t2.right;
                    _r473_t5 = _r473_t5 + 1;
                }
                var r473_top = r1_fallback(r473_top, _r473_t1[0], r375_XH);
                var r473_left = r1_fallback(r473_left, _r473_t1[1], r375_SB);
                var r473_right = r1_fallback(r473_right, _r473_t1[2], r375_RightSB);
                var r473_yTerminal = r1_fallback(r473_yTerminal, _r473_t1[3], r375_Descender);
                var r473_sw = r1_fallback(r473_sw, _r473_t1[4], r375_Stroke);
                var r473_fine = r1_fallback(r473_fine, _r473_t1[5], r375_ShoulderFine);
                var r473_ada = r1_fallback(r473_ada, _r473_t1[6], r375_SmallArchDepthA);
                var r473_adb = r1_fallback(r473_adb, _r473_t1[7], r375_SmallArchDepthB);
                var r473_skew = r375_shoulderMidSkew(r473_fine);
                var r473_mt = r1_mix(r473_left, r473_right, 0.5) - r375_CorrectionOMidX * r473_sw;
                var r473_mb = r1_mix(r473_left, r473_right, 0.5) + (r473_skew + r441_kSkewShift * r375_TanSlope) * r473_sw;
                return r375_dispiro(r375_flat(r473_left + (r473_sw - r473_fine) * r375_HVContrast, r473_top - r473_ada - 0.01, r375_widths(r473_fine, 0)), r375_curl(r473_left + (r473_sw - r473_fine) * r375_HVContrast, 0 + r473_adb, r375_widths(r473_fine, 0)), r375_arcvh(), r375_g4(r473_mb, r375_O, r375_widths.heading(r473_sw, 0, {
                    'y': 1,
                    'x': -r473_skew
                })), r375_archv(), r375_flat(r473_right - r375_OX, 0 + r473_ada), r375_curl(r473_right - r375_OX, r473_top - r473_adb), r375_arcvh(), r375_g4(r473_mt, r473_top - r375_O, r375_widths.lhs(r473_sw)), r375_archv(), r375_flat(r473_left, Math.max(r473_yTerminal + 0.01 - r375_TanSlope * r375_Stroke, r473_top - r473_ada)), r375_curl(r473_left, r473_yTerminal, r375_widths.lhs.heading(r473_sw, r375_Downward)));
            };
            return r441_exports;
        }();
        r375_xn$ExportCapture$2Lrc4b(function () {
            var _r479_t0, _r479_t1;
            return { 'OBarRight': r375_OBarRight };
        });
        var r375_OBarRight = function () {
            var r482_shape, r482_toothless, r482_rounded;
            var r482_exports = {};
            r482_exports.shape = r482_shape = function () {
                var _r490_t6;
                var _r490_t7 = arguments;
                var _r490_t0 = [].slice.call(_r490_t7, 0);
                var _r490_t1 = [];
                var _r490_t2 = 0;
                while (_r490_t2 < _r490_t0.length) {
                    if (!(_r490_t0[_r490_t2] instanceof r375_xn$NamedParameterPair$2Lrc9b))
                        _r490_t1.push(_r490_t0[_r490_t2]);
                    _r490_t2 = _r490_t2 + 1;
                }
                var _r490_t3 = _r490_t0;
                var _r490_t4 = _r490_t3.length;
                var _r490_t5 = 0;
                while (_r490_t5 < _r490_t4) {
                    _r490_t2 = _r490_t3[_r490_t5];
                    if (_r490_t2 && _r490_t2 instanceof r375_xn$NamedParameterPair$2Lrc9b && _r490_t2.left === 'top')
                        r490_top = _r490_t2.right;
                    if (_r490_t2 && _r490_t2 instanceof r375_xn$NamedParameterPair$2Lrc9b && _r490_t2.left === 'left')
                        r490_left = _r490_t2.right;
                    if (_r490_t2 && _r490_t2 instanceof r375_xn$NamedParameterPair$2Lrc9b && _r490_t2.left === 'right')
                        r490_right = _r490_t2.right;
                    if (_r490_t2 && _r490_t2 instanceof r375_xn$NamedParameterPair$2Lrc9b && _r490_t2.left === 'sw')
                        r490_sw = _r490_t2.right;
                    if (_r490_t2 && _r490_t2 instanceof r375_xn$NamedParameterPair$2Lrc9b && _r490_t2.left === 'fine')
                        r490_fine = _r490_t2.right;
                    if (_r490_t2 && _r490_t2 instanceof r375_xn$NamedParameterPair$2Lrc9b && _r490_t2.left === 'ada')
                        r490_ada = _r490_t2.right;
                    if (_r490_t2 && _r490_t2 instanceof r375_xn$NamedParameterPair$2Lrc9b && _r490_t2.left === 'adb')
                        r490_adb = _r490_t2.right;
                    _r490_t5 = _r490_t5 + 1;
                }
                var r490_top = r1_fallback(r490_top, _r490_t1[0], r375_XH);
                var r490_left = r1_fallback(r490_left, _r490_t1[1], r375_SB);
                var r490_right = r1_fallback(r490_right, _r490_t1[2], r375_RightSB);
                var r490_sw = r1_fallback(r490_sw, _r490_t1[3], r375_Stroke);
                var r490_fine = r1_fallback(r490_fine, _r490_t1[4], r375_ShoulderFine);
                var r490_ada = r1_fallback(r490_ada, _r490_t1[5], r375_SmallArchDepthA);
                var r490_adb = r1_fallback(r490_adb, _r490_t1[6], r375_SmallArchDepthB);
                return r375_xn$createAndSaveGlyphImpl$2Lrc3c(null, null, function () {
                    var _r497_t1;
                    var _r497_t0 = this;
                    var r497_currentGlyph = _r497_t0;
                    r497_currentGlyph.include(r375_OBarLeft.shape(new r375_xn$NamedParameterPair$2Lrc9b('top', r490_top), new r375_xn$NamedParameterPair$2Lrc9b('left', r490_left), new r375_xn$NamedParameterPair$2Lrc9b('right', r490_right), new r375_xn$NamedParameterPair$2Lrc9b('sw', r490_sw), new r375_xn$NamedParameterPair$2Lrc9b('fine', r490_fine), new r375_xn$NamedParameterPair$2Lrc9b('ada', r490_ada), new r375_xn$NamedParameterPair$2Lrc9b('adb', r490_adb)));
                    r497_currentGlyph.include(r375_FlipAround(r1_mix(r490_left, r490_right, 0.5), r490_top / 2));
                    return void 0;
                });
            };
            r482_exports.toothless = r482_toothless = function () {
                var _r508_t6;
                var _r508_t7 = arguments;
                var _r508_t0 = [].slice.call(_r508_t7, 0);
                var _r508_t1 = [];
                var _r508_t2 = 0;
                while (_r508_t2 < _r508_t0.length) {
                    if (!(_r508_t0[_r508_t2] instanceof r375_xn$NamedParameterPair$2Lrc9b))
                        _r508_t1.push(_r508_t0[_r508_t2]);
                    _r508_t2 = _r508_t2 + 1;
                }
                var _r508_t3 = _r508_t0;
                var _r508_t4 = _r508_t3.length;
                var _r508_t5 = 0;
                while (_r508_t5 < _r508_t4) {
                    _r508_t2 = _r508_t3[_r508_t5];
                    if (_r508_t2 && _r508_t2 instanceof r375_xn$NamedParameterPair$2Lrc9b && _r508_t2.left === 'top')
                        r508_top = _r508_t2.right;
                    if (_r508_t2 && _r508_t2 instanceof r375_xn$NamedParameterPair$2Lrc9b && _r508_t2.left === 'left')
                        r508_left = _r508_t2.right;
                    if (_r508_t2 && _r508_t2 instanceof r375_xn$NamedParameterPair$2Lrc9b && _r508_t2.left === 'right')
                        r508_right = _r508_t2.right;
                    if (_r508_t2 && _r508_t2 instanceof r375_xn$NamedParameterPair$2Lrc9b && _r508_t2.left === 'rise')
                        r508_rise = _r508_t2.right;
                    if (_r508_t2 && _r508_t2 instanceof r375_xn$NamedParameterPair$2Lrc9b && _r508_t2.left === 'sw')
                        r508_sw = _r508_t2.right;
                    if (_r508_t2 && _r508_t2 instanceof r375_xn$NamedParameterPair$2Lrc9b && _r508_t2.left === 'mBlend')
                        r508_mBlend = _r508_t2.right;
                    if (_r508_t2 && _r508_t2 instanceof r375_xn$NamedParameterPair$2Lrc9b && _r508_t2.left === 'ada')
                        r508_ada = _r508_t2.right;
                    if (_r508_t2 && _r508_t2 instanceof r375_xn$NamedParameterPair$2Lrc9b && _r508_t2.left === 'adb')
                        r508_adb = _r508_t2.right;
                    _r508_t5 = _r508_t5 + 1;
                }
                var r508_top = r1_fallback(r508_top, _r508_t1[0], r375_XH);
                var r508_left = r1_fallback(r508_left, _r508_t1[1], r375_SB);
                var r508_right = r1_fallback(r508_right, _r508_t1[2], r375_RightSB);
                var r508_rise = r1_fallback(r508_rise, _r508_t1[3], r375_SHook);
                var r508_sw = r1_fallback(r508_sw, _r508_t1[4], r375_Stroke);
                var r508_mBlend = r1_fallback(r508_mBlend, _r508_t1[5], Math.sqrt(1 / 2));
                var r508_ada = r1_fallback(r508_ada, _r508_t1[6], r375_SmallArchDepthA);
                var r508_adb = r1_fallback(r508_adb, _r508_t1[7], r375_SmallArchDepthB);
                return r375_xn$createAndSaveGlyphImpl$2Lrc3c(null, null, function () {
                    var _r515_t1;
                    var _r515_t0 = this;
                    var r515_currentGlyph = _r515_t0;
                    r515_currentGlyph.include(r375_OBarLeft.toothlessTop(new r375_xn$NamedParameterPair$2Lrc9b('top', r508_top), new r375_xn$NamedParameterPair$2Lrc9b('left', r508_left), new r375_xn$NamedParameterPair$2Lrc9b('right', r508_right), new r375_xn$NamedParameterPair$2Lrc9b('rise', r508_rise), new r375_xn$NamedParameterPair$2Lrc9b('sw', r508_sw), new r375_xn$NamedParameterPair$2Lrc9b('mBlend', r508_mBlend), new r375_xn$NamedParameterPair$2Lrc9b('ada', r508_ada), new r375_xn$NamedParameterPair$2Lrc9b('adb', r508_adb)));
                    r515_currentGlyph.include(r375_FlipAround(r1_mix(r508_left, r508_right, 0.5), r508_top / 2));
                    return void 0;
                });
            };
            r482_exports.rounded = r482_rounded = function () {
                var _r527_t6;
                var _r527_t7 = arguments;
                var _r527_t0 = [].slice.call(_r527_t7, 0);
                var _r527_t1 = [];
                var _r527_t2 = 0;
                while (_r527_t2 < _r527_t0.length) {
                    if (!(_r527_t0[_r527_t2] instanceof r375_xn$NamedParameterPair$2Lrc9b))
                        _r527_t1.push(_r527_t0[_r527_t2]);
                    _r527_t2 = _r527_t2 + 1;
                }
                var _r527_t3 = _r527_t0;
                var _r527_t4 = _r527_t3.length;
                var _r527_t5 = 0;
                while (_r527_t5 < _r527_t4) {
                    _r527_t2 = _r527_t3[_r527_t5];
                    if (_r527_t2 && _r527_t2 instanceof r375_xn$NamedParameterPair$2Lrc9b && _r527_t2.left === 'top')
                        r527_top = _r527_t2.right;
                    if (_r527_t2 && _r527_t2 instanceof r375_xn$NamedParameterPair$2Lrc9b && _r527_t2.left === 'left')
                        r527_left = _r527_t2.right;
                    if (_r527_t2 && _r527_t2 instanceof r375_xn$NamedParameterPair$2Lrc9b && _r527_t2.left === 'right')
                        r527_right = _r527_t2.right;
                    if (_r527_t2 && _r527_t2 instanceof r375_xn$NamedParameterPair$2Lrc9b && _r527_t2.left === 'sw')
                        r527_sw = _r527_t2.right;
                    if (_r527_t2 && _r527_t2 instanceof r375_xn$NamedParameterPair$2Lrc9b && _r527_t2.left === 'yTerminal')
                        r527_yTerminal = _r527_t2.right;
                    if (_r527_t2 && _r527_t2 instanceof r375_xn$NamedParameterPair$2Lrc9b && _r527_t2.left === 'ada')
                        r527_ada = _r527_t2.right;
                    if (_r527_t2 && _r527_t2 instanceof r375_xn$NamedParameterPair$2Lrc9b && _r527_t2.left === 'adb')
                        r527_adb = _r527_t2.right;
                    _r527_t5 = _r527_t5 + 1;
                }
                var r527_top = r1_fallback(r527_top, _r527_t1[0], r375_XH);
                var r527_left = r1_fallback(r527_left, _r527_t1[1], r375_SB);
                var r527_right = r1_fallback(r527_right, _r527_t1[2], r375_RightSB);
                var r527_sw = r1_fallback(r527_sw, _r527_t1[3], r375_Stroke);
                var r527_yTerminal = r1_fallback(r527_yTerminal, _r527_t1[4], r375_CAP);
                var r527_ada = r1_fallback(r527_ada, _r527_t1[5], r375_SmallArchDepthA);
                var r527_adb = r1_fallback(r527_adb, _r527_t1[6], r375_SmallArchDepthB);
                return r375_xn$createAndSaveGlyphImpl$2Lrc3c(null, null, function () {
                    var _r534_t1;
                    var _r534_t0 = this;
                    var r534_currentGlyph = _r534_t0;
                    r534_currentGlyph.include(r375_OBarLeft.roundedTop(new r375_xn$NamedParameterPair$2Lrc9b('top', r527_top), new r375_xn$NamedParameterPair$2Lrc9b('left', r527_left), new r375_xn$NamedParameterPair$2Lrc9b('right', r527_right), new r375_xn$NamedParameterPair$2Lrc9b('sw', r527_sw), new r375_xn$NamedParameterPair$2Lrc9b('yTerminal', r527_top - r527_yTerminal), new r375_xn$NamedParameterPair$2Lrc9b('ada', r527_ada), new r375_xn$NamedParameterPair$2Lrc9b('adb', r527_adb)));
                    r534_currentGlyph.include(r375_FlipAround(r1_mix(r527_left, r527_right, 0.5), r527_top / 2));
                    return void 0;
                });
            };
            return r482_exports;
        }();
        r375_xn$ExportCapture$2Lrc4b(function () {
            var _r545_t0, _r545_t1;
            return { 'FlatHookDepth': r375_FlatHookDepth };
        });
        var r375_FlatHookDepth = function (r546_df, r546_s) {
            var _r546_t0, _r546_t1;
            return {
                'x': r1_fallback(r546_s, 1) * r375_FlatHookDepthImpl(Math.min(1, Math.sqrt(r546_df.div)), r375_HVContrast),
                'y': r1_fallback(r546_s, 1) * r375_FlatHookDepthImpl(Math.min(1, Math.sqrt(r546_df.div)), 1)
            };
        };
        var r375_FlatHookDepthImpl = function (r547_sHook, r547_sStroke) {
            var _r547_t0, _r547_t1;
            var r547_kFlathook = 15 / 16;
            return Math.max(r547_kFlathook * r547_sHook * r375_Hook, r547_sStroke * r375_Stroke * 1.375, Math.min(r547_kFlathook * r547_sHook * r375_Hook, r547_sStroke * r375_Stroke * 1.625));
        };
        r375_xn$ExportCapture$2Lrc4b(function () {
            var _r549_t0, _r549_t1;
            return { 'ConnectedCedilla': r375_ConnectedCedilla };
        });
        var r375_ConnectedCedilla = function (r550_src, r550_sel) {
            var _r550_t0, _r550_t1;
            return function () {
                var _r552_t1;
                var _r552_t0 = this;
                var r552_currentGlyph = _r552_t0;
                r552_currentGlyph.include(r375_xn$referglyph$1aao(r550_src), r375_AS_BASE, r375_ALSO_METRICS);
                r552_currentGlyph.include(r375_xn$addglyphdependency$9Jrj6('cedillaExtShapeBelow'));
                r552_currentGlyph.include(r375_difference(r375_xn$createAndSaveGlyphImpl$2Lrc3c(null, null, function () {
                    var _r558_t1;
                    var _r558_t0 = this;
                    var r558_currentGlyph = _r558_t0;
                    r558_currentGlyph.include(r375_xn$referglyph$1aao(r550_src), r375_AS_BASE, r375_ALSO_METRICS);
                    r558_currentGlyph.clearGeometry();
                    r558_currentGlyph.include(r375_xn$referglyph$1aao('cedillaExtShapeBelow'));
                    return void 0;
                }), r375_WithTransform(r375_ApparentTranslate(0, r375_Stroke * 0.25), r375_xn$referglyph$1aao(r550_src)), r375_WithTransform(r375_ApparentTranslate(0, r375_Stroke * 0.5), r375_xn$referglyph$1aao(r550_src)), r375_WithTransform(r375_ApparentTranslate(0, r375_Stroke * 0.75), r375_xn$referglyph$1aao(r550_src)), r375_WithTransform(r375_ApparentTranslate(0, r375_Stroke * 1), r375_xn$referglyph$1aao(r550_src)), r375_WithTransform(r375_ApparentTranslate(0, r375_Stroke * 1.25), r375_xn$referglyph$1aao(r550_src)), r375_WithTransform(r375_ApparentTranslate(0, r375_Stroke * 1.5), r375_xn$referglyph$1aao(r550_src)), r375_WithTransform(r375_ApparentTranslate(0, r375_Stroke * 1.75), r375_xn$referglyph$1aao(r550_src)), r375_WithTransform(r375_ApparentTranslate(0, r375_Stroke * 2), r375_xn$referglyph$1aao(r550_src))));
                r552_currentGlyph.include(r375_xn$referglyph$1aao('blankBelow'));
                return void 0;
            };
        };
        r375_xn$ExportCapture$2Lrc4b(function () {
            var _r563_t0, _r563_t1;
            return { 'SerifedArcStart': r375_SerifedArcStart };
        });
        var r375_SerifedArcStart = function () {
            var r566_RtlLhs, r566_LtrRhs;
            var r566_exports = {};
            r566_exports.RtlLhs = r566_RtlLhs = function (r574_sx, r574_cx, r574_cy, r574_sw, r574_hook, r574_origBar) {
                var _r574_t0, _r574_t1;
                var r574_barSw = r574_origBar ? r574_sw : r375_ArcStartSerifWidth(r574_sw);
                var r574_fine = r574_barSw * r1_mix(r375_CThinB, r375_ShoulderFine / r375_Stroke, 0.5);
                return [
                    r375_g4.up.start(r574_sx - (r574_barSw - r574_fine) * r375_HVContrast, r574_cy - r574_hook + r375_O * 2, r375_widths.lhs.heading(r574_fine, r375_Upward)),
                    r375_arcvh.superness(2),
                    r375_ShoulderMidKnotLhs(r574_cx, r574_cy - r375_O, r574_fine, r574_sw, -1, -1),
                    r375_archv()
                ];
            };
            r566_exports.LtrRhs = r566_LtrRhs = function (r576_sx, r576_cx, r576_cy, r576_sw, r576_hook, r576_origBar) {
                var _r576_t0, _r576_t1;
                var r576_barSw = r576_origBar ? r576_sw : r375_ArcStartSerifWidth(r576_sw);
                var r576_fine = r576_barSw * r1_mix(r375_CThinB, r375_ShoulderFine / r375_Stroke, 0.5);
                return [
                    r375_g4.up.start(r576_sx + (r576_barSw - r576_fine) * r375_HVContrast, r576_cy - r576_hook + r375_O * 2, r375_widths.rhs.heading(r576_fine, r375_Upward)),
                    r375_arcvh.superness(2),
                    r375_ShoulderMidKnotRhs(r576_cx, r576_cy - r375_O, r576_fine, r576_sw, +1, -1),
                    r375_archv()
                ];
            };
            return r566_exports;
        }();
        r375_xn$ExportCapture$2Lrc4b(function () {
            var _r578_t0, _r578_t1;
            return { 'SerifedArcEnd': r375_SerifedArcEnd };
        });
        var r375_SerifedArcEnd = function () {
            var r581_RtlRhs, r581_LtrLhs;
            var r581_exports = {};
            r581_exports.RtlRhs = r581_RtlRhs = function (r589_sx, r589_cx, r589_cy, r589_sw, r589_hook, r589_origBar) {
                var _r589_t0, _r589_t1;
                var r589_barSw = r589_origBar ? r589_sw : r375_ArcStartSerifWidth(r589_sw);
                var r589_fine = r589_barSw * r1_mix(r375_CThinB, r375_ShoulderFine / r375_Stroke, 0.5);
                return [
                    r375_arcvh(),
                    r375_ShoulderMidKnotRhs(r589_cx, r589_cy + r375_O, r589_fine, r589_sw, -1, +1),
                    r375_archv.superness(2),
                    r375_g4.up.end(r589_sx + (r589_barSw - r589_fine) * r375_HVContrast, r589_cy + r589_hook - r375_O * 2, r375_widths.rhs.heading(r589_fine, r375_Upward))
                ];
            };
            r581_exports.LtrLhs = r581_LtrLhs = function (r591_sx, r591_cx, r591_cy, r591_sw, r591_hook, r591_origBar) {
                var _r591_t0, _r591_t1;
                var r591_barSw = r591_origBar ? r591_sw : r375_ArcStartSerifWidth(r591_sw);
                var r591_fine = r591_barSw * r1_mix(r375_CThinB, r375_ShoulderFine / r375_Stroke, 0.5);
                return [
                    r375_arcvh(),
                    r375_ShoulderMidKnotLhs(r591_cx, r591_cy + r375_O, r591_fine, r591_sw, +1, +1),
                    r375_archv.superness(2),
                    r375_g4.up.end(r591_sx - (r591_barSw - r591_fine) * r375_HVContrast, r591_cy + r591_hook - r375_O * 2, r375_widths.lhs.heading(r591_fine, r375_Upward))
                ];
            };
            return r581_exports;
        }();
        r375_xn$ExportCapture$2Lrc4b(function () {
            var _r593_t0, _r593_t1;
            return { 'InwardSlabArcStart': r375_InwardSlabArcStart };
        });
        var r375_InwardSlabArcStart = function () {
            var r596_RtlLhs, r596_LtrRhs;
            var r596_exports = {};
            r596_exports.RtlLhs = r596_RtlLhs = function (r604_sx, r604_cx, r604_cy, r604_sw, r604_hook) {
                var _r604_t0, _r604_t1;
                return [
                    r375_g4(r604_sx, r604_cy - r375_DToothlessRise, r375_widths.lhs(r604_sw)),
                    r375_g4(r604_cx - r375_CorrectionOMidX * r604_sw, r604_cy - r375_O),
                    r375_archv()
                ];
            };
            r596_exports.LtrRhs = r596_LtrRhs = function (r606_sx, r606_cx, r606_cy, r606_sw, r606_hook) {
                var _r606_t0, _r606_t1;
                return [
                    r375_g4(r606_sx, r606_cy - r375_DToothlessRise, r375_widths.rhs(r606_sw)),
                    r375_g4(r606_cx - r375_CorrectionOMidX * r606_sw, r606_cy - r375_O),
                    r375_archv()
                ];
            };
            return r596_exports;
        }();
        r375_xn$ExportCapture$2Lrc4b(function () {
            var _r608_t0, _r608_t1;
            return { 'InwardSlabArcEnd': r375_InwardSlabArcEnd };
        });
        var r375_InwardSlabArcEnd = function () {
            var r611_RtlRhs, r611_LtrLhs;
            var r611_exports = {};
            r611_exports.RtlRhs = r611_RtlRhs = function (r619_sx, r619_cx, r619_cy, r619_sw, r619_hook) {
                var _r619_t0, _r619_t1;
                return [
                    r375_arcvh(),
                    r375_g4(r619_cx + r375_CorrectionOMidX * r619_sw, r619_cy + r375_O),
                    r375_g4(r619_sx, r619_cy + r375_DToothlessRise, r375_widths.rhs(r619_sw))
                ];
            };
            r611_exports.LtrLhs = r611_LtrLhs = function (r621_sx, r621_cx, r621_cy, r621_sw, r621_hook) {
                var _r621_t0, _r621_t1;
                return [
                    r375_arcvh(),
                    r375_g4(r621_cx + r375_CorrectionOMidX * r621_sw, r621_cy + r375_O),
                    r375_g4(r621_sx, r621_cy + r375_DToothlessRise, r375_widths.lhs(r621_sw))
                ];
            };
            return r611_exports;
        }();
        r375_xn$ExportCapture$2Lrc4b(function () {
            var _r623_t0, _r623_t1;
            return { 'ArcStartSerifWidth': r375_ArcStartSerifWidth };
        });
        var r375_ArcStartSerifWidth = function (r624_stroke) {
            var _r624_t0, _r624_t1;
            return r1_clamp(r624_stroke * 0.875, r624_stroke, r375_VJutStroke);
        };
        r375_xn$ExportCapture$2Lrc4b(function () {
            var _r626_t0, _r626_t1;
            return { 'ArcStartSerifDepth': r375_ArcStartSerifDepth };
        });
        var r375_ArcStartSerifDepth = function (r627_hook) {
            var _r627_t0, _r627_t1;
            return r627_hook - r375_O * 2;
        };
        r375_xn$ExportCapture$2Lrc4b(function () {
            var _r629_t0, _r629_t1;
            return { 'ArcStartSerif': r375_ArcStartSerif };
        });
        var r375_ArcStartSerif = function () {
            var r632_L, r632_R, r632_InwardL, r632_InwardR;
            var r632_exports = {};
            r632_exports.L = r632_L = function (r640_cx, r640_cy, r640_stroke, r640_hook, r640_overflow) {
                var _r640_t0, _r640_t1;
                return r375_tagged('arcStartSerifL', r375_VBar.l(r640_cx, r640_cy - r640_hook + r375_O * 2, r640_cy + r1_fallback(r640_overflow, 0), r375_ArcStartSerifWidth(r640_stroke)));
            };
            r632_exports.R = r632_R = function (r642_cx, r642_cy, r642_stroke, r642_hook, r642_overflow) {
                var _r642_t0, _r642_t1;
                return r375_tagged('arcStartSerifR', r375_VBar.r(r642_cx, r642_cy - r642_hook + r375_O * 2, r642_cy + r1_fallback(r642_overflow, 0), r375_ArcStartSerifWidth(r642_stroke)));
            };
            r632_exports.InwardL = r632_InwardL = function (r644_cx, r644_cy, r644_stroke, r644_hook) {
                var _r644_t0, _r644_t1;
                return r375_tagged('arcStartSerifL', r375_VBar.l(r644_cx, r644_cy - r644_hook - r375_DToothlessRise / 3, r644_cy - r375_DToothlessRise, r375_ArcStartSerifWidth(r644_stroke)));
            };
            r632_exports.InwardR = r632_InwardR = function (r646_cx, r646_cy, r646_stroke, r646_hook) {
                var _r646_t0, _r646_t1;
                return r375_tagged('arcStartSerifR', r375_VBar.r(r646_cx, r646_cy - r646_hook - r375_DToothlessRise / 3, r646_cy - r375_DToothlessRise, r375_ArcStartSerifWidth(r646_stroke)));
            };
            return r632_exports;
        }();
        r375_xn$ExportCapture$2Lrc4b(function () {
            var _r648_t0, _r648_t1;
            return { 'ArcEndSerif': r375_ArcEndSerif };
        });
        var r375_ArcEndSerif = function () {
            var r651_L, r651_R, r651_InwardL, r651_InwardR;
            var r651_exports = {};
            r651_exports.L = r651_L = function (r659_cx, r659_cy, r659_stroke, r659_hook, r659_overflow) {
                var _r659_t0, _r659_t1;
                return r375_tagged('arcEndSerifL', r375_VBar.l(r659_cx, r659_cy + r659_hook - r375_O * 2, r659_cy - r1_fallback(r659_overflow, 0), r375_ArcStartSerifWidth(r659_stroke)));
            };
            r651_exports.R = r651_R = function (r661_cx, r661_cy, r661_stroke, r661_hook, r661_overflow) {
                var _r661_t0, _r661_t1;
                return r375_tagged('arcEndSerifR', r375_VBar.r(r661_cx, r661_cy + r661_hook - r375_O * 2, r661_cy - r1_fallback(r661_overflow, 0), r375_ArcStartSerifWidth(r661_stroke)));
            };
            r651_exports.InwardL = r651_InwardL = function (r663_cx, r663_cy, r663_stroke, r663_hook) {
                var _r663_t0, _r663_t1;
                return r375_tagged('arcEndSerifL', r375_VBar.l(r663_cx, r663_cy + r663_hook + r375_DToothlessRise / 2, r663_cy + r375_DToothlessRise, r375_ArcStartSerifWidth(r663_stroke)));
            };
            r651_exports.InwardR = r651_InwardR = function (r665_cx, r665_cy, r665_stroke, r665_hook) {
                var _r665_t0, _r665_t1;
                return r375_tagged('arcEndSerifR', r375_VBar.r(r665_cx, r665_cy + r665_hook + r375_DToothlessRise / 2, r665_cy + r375_DToothlessRise, r375_ArcStartSerifWidth(r665_stroke)));
            };
            return r651_exports;
        }();
        var r375_DiagTailDefaultAngle = 40;
        r375_xn$ExportCapture$2Lrc4b(function () {
            var _r667_t0, _r667_t1;
            return { 'DiagonalTailStdDepth': r375_DiagonalTailStdDepth };
        });
        var r375_DiagonalTailStdDepth = function (r668_df, r668_sw) {
            var _r668_t0, _r668_t1;
            return Math.max(0.5 * r668_sw, r668_df.div * r375_para.unitWidthScalar * Math.hypot(r375_HookX, r375_Hook) - 0.25 * r668_sw);
        };
        r375_xn$ExportCapture$2Lrc4b(function () {
            var _r670_t0, _r670_t1;
            return { 'DiagonalTailInnerRadius': r375_DiagonalTailInnerRadius };
        });
        var r375_DiagonalTailInnerRadius = function () {
            var _r671_t0, _r671_t1;
            return Math.max(r375_XH / 32, 0.5 * r375_AdviceStroke2(24, 32, r375_XH));
        };
        r375_xn$ExportCapture$2Lrc4b(function () {
            var _r673_t0, _r673_t1;
            return { 'DiagonalTailF': r375_DiagonalTailF };
        });
        var r375_DiagonalTailF = function (r674_sign, r674_df, r674_cx, r674_cy, r674_rIn, r674_angle, r674_depth, r674_sw) {
            var _r674_t0, _r674_t1;
            var r674_tailAngle = r674_angle / 180 * Math.PI;
            var r674_sinAngle = Math.sin(r674_tailAngle);
            var r674_cosAngle = Math.cos(r674_tailAngle);
            var r674_mocFine = r375_AdviceStroke(3) / r375_Stroke * r674_sw;
            var r674_mocSwMid = r1_mix(r674_sw, r674_mocFine, 2 / 3);
            var r674_fine = r674_mocFine / r1_mix(1, r375_HVContrast, 0.375);
            var r674_swMid = r1_mix(r674_sw, r674_fine, 0.7);
            var r674_dxTurn = 0.5 * r674_sw * r375_HVContrast + r674_rIn * r674_df.div;
            var r674_dxTurnObl = r674_sign > 0 ? -0.75 * r375_TanSlope * r674_rIn : 0.75 * r375_TanSlope * r674_rIn;
            var r674_dyTurn = 0.5 * r674_mocSwMid;
            var r674_dxTailStart = r674_dxTurn + r674_sinAngle * (r674_rIn + 0.5 * r674_mocFine * r1_mix(1, r375_HVContrast, r674_sinAngle));
            var r674_dyTailStart = r674_dyTurn + (1 - r674_cosAngle + (r674_sign > 0 ? 0 : r375_TanSlope)) * (r674_rIn + 0.5 * r674_mocFine);
            var r674_dxDepth = (r674_depth - 0.5 * r674_sw) * r674_cosAngle;
            var r674_dyDepth = (r674_depth - 0.5 * r674_sw) * r674_sinAngle;
            return [
                r375_g4[r674_sign > 0 ? 'right' : 'left'].mid(r674_cx + r674_sign * r674_dxTurn + r674_dxTurnObl, r674_cy + r375_O + r674_dyTurn, r674_sign > 0 ? r375_widths.center.heading(r674_swMid, r375_Rightward) : r375_widths.center.heading(r674_swMid, r375_Leftward)),
                r674_sign <= 0 ? [] : r375_alsoThruThem([
                    r375_DiagonalTailFArc2K(r674_tailAngle, 1 / 4),
                    r375_DiagonalTailFArc2K(r674_tailAngle, 2 / 4),
                    r375_DiagonalTailFArc2K(r674_tailAngle, 3 / 4)
                ]),
                r375_flat(r674_cx + r674_sign * r674_dxTailStart, r674_cy + r375_O + r674_dyTailStart, r375_widths.center(r674_fine)),
                r375_curl(r674_cx + r674_sign * r674_dxTailStart + r674_sign * r674_dxDepth, r674_cy + r375_O + r674_dyTailStart + r674_dyDepth)
            ];
        };
        var r375_DiagonalTailFArc2K = function (r675_tailAngle, r675_t) {
            var _r675_t0, _r675_t1;
            return [
                Math.sin(r675_t * r675_tailAngle) / Math.sin(r675_tailAngle),
                (1 - Math.cos(r675_t * r675_tailAngle)) / (1 - Math.cos(r675_tailAngle)),
                r675_t
            ];
        };
        r375_xn$ExportCapture$2Lrc4b(function () {
            var _r677_t0, _r677_t1;
            return { 'DiagonalTailR': r375_DiagonalTailR };
        });
        var r375_DiagonalTailR = function (r678_df, r678_cx, r678_cy, r678_depth, r678_sw) {
            var _r678_t0, _r678_t1;
            var r678_rInY = r375_DiagonalTailInnerRadius();
            return [
                r375_curl(r678_cx, r678_cy + r678_sw + r678_rInY),
                r375_arcvh(8),
                r375_DiagonalTailF(+1, r678_df, r678_cx, r678_cy, r678_rInY, r375_DiagTailDefaultAngle, r678_depth, r678_sw)
            ];
        };
        r375_xn$ExportCapture$2Lrc4b(function () {
            var _r680_t0, _r680_t1;
            return { 'DiagonalTailL': r375_DiagonalTailL };
        });
        var r375_DiagonalTailL = function (r681_df, r681_cx, r681_cy, r681_depth, r681_sw) {
            var _r681_t0, _r681_t1;
            var r681_rInY = r375_DiagonalTailInnerRadius();
            return [
                r375_curl(r681_cx, r681_cy + r681_sw + r681_rInY),
                r375_arcvh(8),
                r375_DiagonalTailF(-1, r681_df, r681_cx, r681_cy, r681_rInY, r375_DiagTailDefaultAngle, r681_depth, r681_sw)
            ];
        };
        var r375_JutIn = function (r682_left, r682_right, r682_jut, r682_swRef, r682_hSplit) {
            var _r682_t0, _r682_t1;
            var r682_ink = r375_HVContrast * r682_swRef;
            var r682_gap = (r682_right - r682_left - r682_hSplit * r682_ink) / (r682_hSplit - 1);
            return Math.min(r682_jut, 0.5 * r682_ink + Math.max(r375_Stroke * r375_TanSlope, 0.375 * r682_gap));
        };
        var r375_CSerifFrame = function (r684_Super) {
            var _r684_t0, _r684_t1;
            var r684_Constructor = function () {
                var _r685_t0, _r685_t1;
                return void 0;
            };
            var r684_Type = function () {
                var _r686_t0 = this;
                var _r686_t1 = arguments;
                r684_Constructor.apply(_r686_t0, _r686_t1);
                return void 0;
            };
            var r684_Symbol = Symbol;
            (function () {
                var r688_protectedTerms, _r688_t0, _r688_t1;
                r684_Type.protectedTerms = r688_protectedTerms = Object.create(r684_Super.protectedTerms || null);
                r684_Constructor = function (r716_top, r716_bot, r716_left, r716_right, r716_swRef, r716_swSerif, r716_div, r716_hSplit) {
                    var _r716_t1;
                    var _r716_t0 = this;
                    _r716_t0.top = r716_top;
                    _r716_t0.bot = r716_bot;
                    _r716_t0.left = r716_left;
                    _r716_t0.right = r716_right;
                    _r716_t0.swRef = r716_swRef;
                    _r716_t0.swSerif = r716_swSerif;
                    _r716_t0.div = r716_div;
                    _r716_t0.hSplit = r716_hSplit;
                    var r716_ink = r375_HVContrast * r716_swRef;
                    var r716_gap = (r716_right - r716_left - r716_hSplit * r716_ink) / (r716_hSplit - 1);
                    var r716_jutFS = r375_MidJutSide;
                    var r716_jut = r1_mix(0.5 * r375_HVContrast * r716_swRef, r375_Jut, Math.min(1, r716_div * 2.25 / r716_hSplit));
                    var r716_sideJut = r716_jut - 0.5 * r716_ink;
                    var r716_jutIn = r375_JutIn(r716_left, r716_right, r716_jut, r716_swRef, r716_hSplit);
                    var r716_sideJutIn = r716_jutIn - 0.5 * r716_ink;
                    var r716_lBarCenter = r716_left + 0.5 * r716_ink;
                    var r716_lBarInner = r716_left + 1 * r716_ink;
                    var r716_rBarCenter = r716_right - 0.5 * r716_ink;
                    var r716_rBarInner = r716_right - 1 * r716_ink;
                    _r716_t0.jut = r716_jut;
                    _r716_t0.sideJut = r716_sideJut;
                    _r716_t0.enoughSpaceForFullSerifs = 0.5 * r716_ink + 0.375 * r716_gap > r375_para.refJut;
                    _r716_t0.lt = {
                        'full': r375_tagged('serifLT', r375_HSerif.mtAsymmetric(r716_lBarCenter, r716_top, r716_jut, r716_jutIn, r716_swSerif)),
                        'fullExt': function (r722_s) {
                            var _r722_t0, _r722_t1;
                            return r375_tagged('serifLT', r375_HSerif.mtAsymmetric(r716_lBarCenter, r716_top, r716_jut, r375_JutIn(r716_left, r716_right, r716_jut, r716_swRef, r722_s), r716_swSerif));
                        },
                        'fullSide': r375_tagged('serifLT', r375_HSerif.mtAsymmetric(r716_lBarCenter, r716_top, r716_jut, r716_jutFS, r716_swSerif)),
                        'outer': r375_tagged('serifLT', r375_HSerif.lt(r716_left, r716_top, r716_sideJut, r716_swSerif)),
                        'inner': r375_tagged('serifLT', r375_HSerif.rt(r716_lBarInner, r716_top, r716_sideJutIn, r716_swSerif))
                    };
                    _r716_t0.rt = {
                        'full': r375_tagged('serifRT', r375_HSerif.mtAsymmetric(r716_rBarCenter, r716_top, r716_jutIn, r716_jut, r716_swSerif)),
                        'fullExt': function (r723_s) {
                            var _r723_t0, _r723_t1;
                            return r375_tagged('serifRT', r375_HSerif.mtAsymmetric(r716_rBarCenter, r716_top, r375_JutIn(r716_left, r716_right, r716_jut, r716_swRef, r723_s), r716_jut, r716_swSerif));
                        },
                        'fullSide': r375_tagged('serifRT', r375_HSerif.mtAsymmetric(r716_rBarCenter, r716_top, r716_jutFS, r716_jut, r716_swSerif)),
                        'outer': r375_tagged('serifRT', r375_HSerif.rt(r716_right, r716_top, r716_sideJut, r716_swSerif)),
                        'inner': r375_tagged('serifRT', r375_HSerif.lt(r716_rBarInner, r716_top, r716_sideJutIn, r716_swSerif))
                    };
                    _r716_t0.lb = {
                        'full': r375_tagged('serifLB', r375_HSerif.mbAsymmetric(r716_lBarCenter, r716_bot, r716_jut, r716_jutIn, r716_swSerif)),
                        'fullExt': function (r724_s) {
                            var _r724_t0, _r724_t1;
                            return r375_tagged('serifLB', r375_HSerif.mbAsymmetric(r716_lBarCenter, r716_bot, r716_jut, r375_JutIn(r716_left, r716_right, r716_jut, r716_swRef, r724_s), r716_swSerif));
                        },
                        'fullSide': r375_tagged('serifLB', r375_HSerif.mbAsymmetric(r716_lBarCenter, r716_bot, r716_jut, r716_jutFS, r716_swSerif)),
                        'outer': r375_tagged('serifLB', r375_HSerif.lb(r716_left, r716_bot, r716_sideJut, r716_swSerif)),
                        'inner': r375_tagged('serifLB', r375_HSerif.rb(r716_lBarInner, r716_bot, r716_sideJutIn, r716_swSerif))
                    };
                    _r716_t0.rb = {
                        'full': r375_tagged('serifRB', r375_HSerif.mbAsymmetric(r716_rBarCenter, r716_bot, r716_jutIn, r716_jut, r716_swSerif)),
                        'fullExt': function (r725_s) {
                            var _r725_t0, _r725_t1;
                            return r375_tagged('serifRB', r375_HSerif.mbAsymmetric(r716_rBarCenter, r716_bot, r375_JutIn(r716_left, r716_right, r716_jut, r716_swRef, r725_s), r716_jut, r716_swSerif));
                        },
                        'fullSide': r375_tagged('serifRB', r375_HSerif.mbAsymmetric(r716_rBarCenter, r716_bot, r716_jutFS, r716_jut, r716_swSerif)),
                        'outer': r375_tagged('serifRB', r375_HSerif.rb(r716_right, r716_bot, r716_sideJut, r716_swSerif)),
                        'inner': r375_tagged('serifRB', r375_HSerif.lb(r716_rBarInner, r716_bot, r716_sideJutIn, r716_swSerif))
                    };
                    _r716_t0.mb = {
                        'full': r375_tagged('serifMB', r375_HSerif.mbAsymmetric(r1_mix(r716_lBarCenter, r716_rBarCenter, 0.5), r716_bot, r716_jutIn, r716_jutIn, r716_swSerif)),
                        'left': r375_tagged('serifMB', r375_HSerif.mbAsymmetric(r1_mix(r716_lBarCenter, r716_rBarCenter, 0.5), r716_bot, r716_jutIn, 0, r716_swSerif)),
                        'right': r375_tagged('serifMB', r375_HSerif.mbAsymmetric(r1_mix(r716_lBarCenter, r716_rBarCenter, 0.5), r716_bot, 0, r716_jutIn, r716_swSerif))
                    };
                    _r716_t0.mt = { 'full': r375_tagged('serifMT', r375_HSerif.mtAsymmetric(r1_mix(r716_lBarCenter, r716_rBarCenter, 0.5), r716_top, r716_jutIn, r716_jutIn, r716_swSerif)) };
                    return void 0;
                };
                r684_Type.prototype.slice = function (r726_l, r726_r) {
                    var _r726_t1;
                    var _r726_t0 = this;
                    var r726_ink = _r726_t0.swRef * r375_HVContrast;
                    var r726_gap = (_r726_t0.right - _r726_t0.left - _r726_t0.hSplit * r726_ink) / (_r726_t0.hSplit - 1);
                    var r726_l1 = _r726_t0.left + (r726_ink + r726_gap) * r726_l;
                    var r726_r1 = _r726_t0.left + (r726_ink + r726_gap) * r726_r + r726_ink;
                    return new r375_CSerifFrame(_r726_t0.top, _r726_t0.bot, r726_l1, r726_r1, _r726_t0.swRef, _r726_t0.swSerif, _r726_t0.div, r726_r - r726_l + 1);
                };
                return void 0;
            }.call(r684_Type.prototype));
            return r684_Type;
        }(Object);
        r375_xn$ExportCapture$2Lrc4b(function () {
            var _r733_t0, _r733_t1;
            return { 'SerifFrame': r375_SerifFrame };
        });
        var r375_SerifFrame = function () {
            var _r734_t6;
            var _r734_t7 = arguments;
            var _r734_t0 = [].slice.call(_r734_t7, 0);
            var _r734_t1 = [];
            var _r734_t2 = 0;
            while (_r734_t2 < _r734_t0.length) {
                if (!(_r734_t0[_r734_t2] instanceof r375_xn$NamedParameterPair$2Lrc9b))
                    _r734_t1.push(_r734_t0[_r734_t2]);
                _r734_t2 = _r734_t2 + 1;
            }
            var _r734_t3 = _r734_t0;
            var _r734_t4 = _r734_t3.length;
            var _r734_t5 = 0;
            while (_r734_t5 < _r734_t4) {
                _r734_t2 = _r734_t3[_r734_t5];
                if (_r734_t2 && _r734_t2 instanceof r375_xn$NamedParameterPair$2Lrc9b && _r734_t2.left === 'top')
                    r734_top = _r734_t2.right;
                if (_r734_t2 && _r734_t2 instanceof r375_xn$NamedParameterPair$2Lrc9b && _r734_t2.left === 'bot')
                    r734_bot = _r734_t2.right;
                if (_r734_t2 && _r734_t2 instanceof r375_xn$NamedParameterPair$2Lrc9b && _r734_t2.left === 'left')
                    r734_left = _r734_t2.right;
                if (_r734_t2 && _r734_t2 instanceof r375_xn$NamedParameterPair$2Lrc9b && _r734_t2.left === 'right')
                    r734_right = _r734_t2.right;
                if (_r734_t2 && _r734_t2 instanceof r375_xn$NamedParameterPair$2Lrc9b && _r734_t2.left === 'swRef')
                    r734_swRef = _r734_t2.right;
                if (_r734_t2 && _r734_t2 instanceof r375_xn$NamedParameterPair$2Lrc9b && _r734_t2.left === 'swSerif')
                    r734_swSerif = _r734_t2.right;
                if (_r734_t2 && _r734_t2 instanceof r375_xn$NamedParameterPair$2Lrc9b && _r734_t2.left === 'div')
                    r734_div = _r734_t2.right;
                if (_r734_t2 && _r734_t2 instanceof r375_xn$NamedParameterPair$2Lrc9b && _r734_t2.left === 'hSplit')
                    r734_hSplit = _r734_t2.right;
                _r734_t5 = _r734_t5 + 1;
            }
            var r734_top = r1_fallback(r734_top, _r734_t1[0]);
            var r734_bot = r1_fallback(r734_bot, _r734_t1[1]);
            var r734_left = r1_fallback(r734_left, _r734_t1[2]);
            var r734_right = r1_fallback(r734_right, _r734_t1[3]);
            var r734_swRef = r1_fallback(r734_swRef, _r734_t1[4], r375_Stroke);
            var r734_swSerif = r1_fallback(r734_swSerif, _r734_t1[5], r734_swRef);
            var r734_div = r1_fallback(r734_div, _r734_t1[6], 1);
            var r734_hSplit = r1_fallback(r734_hSplit, _r734_t1[7], 2);
            return new r375_CSerifFrame(r734_top, r734_bot, r734_left, r734_right, r734_swRef, r734_swSerif, r734_div, r734_hSplit);
        };
        r375_SerifFrame.fromDf = function () {
            var _r739_t6;
            var _r739_t7 = arguments;
            var _r739_t0 = [].slice.call(_r739_t7, 0);
            var _r739_t1 = [];
            var _r739_t2 = 0;
            while (_r739_t2 < _r739_t0.length) {
                if (!(_r739_t0[_r739_t2] instanceof r375_xn$NamedParameterPair$2Lrc9b))
                    _r739_t1.push(_r739_t0[_r739_t2]);
                _r739_t2 = _r739_t2 + 1;
            }
            var _r739_t3 = _r739_t0;
            var _r739_t4 = _r739_t3.length;
            var _r739_t5 = 0;
            while (_r739_t5 < _r739_t4) {
                _r739_t2 = _r739_t3[_r739_t5];
                if (_r739_t2 && _r739_t2 instanceof r375_xn$NamedParameterPair$2Lrc9b && _r739_t2.left === 'df')
                    r739_df = _r739_t2.right;
                if (_r739_t2 && _r739_t2 instanceof r375_xn$NamedParameterPair$2Lrc9b && _r739_t2.left === 'top')
                    r739_top = _r739_t2.right;
                if (_r739_t2 && _r739_t2 instanceof r375_xn$NamedParameterPair$2Lrc9b && _r739_t2.left === 'bot')
                    r739_bot = _r739_t2.right;
                if (_r739_t2 && _r739_t2 instanceof r375_xn$NamedParameterPair$2Lrc9b && _r739_t2.left === 'swSerif')
                    r739_swSerif = _r739_t2.right;
                _r739_t5 = _r739_t5 + 1;
            }
            var r739_df = r1_fallback(r739_df, _r739_t1[0]);
            var r739_top = r1_fallback(r739_top, _r739_t1[1]);
            var r739_bot = r1_fallback(r739_bot, _r739_t1[2]);
            var r739_swSerif = r1_fallback(r739_swSerif, _r739_t1[3], r739_df.mvs);
            return r375_SerifFrame(r739_top, r739_bot, r739_df.leftSB, r739_df.rightSB, new r375_xn$NamedParameterPair$2Lrc9b('swRef', r739_df.mvs), new r375_xn$NamedParameterPair$2Lrc9b('div', r739_df.div), new r375_xn$NamedParameterPair$2Lrc9b('hSplit', Math.max(2, r739_df.hPack)), new r375_xn$NamedParameterPair$2Lrc9b('swSerif', r739_swSerif));
        };
        r375_xn$ExportCapture$2Lrc4b(function () {
            var _r749_t0, _r749_t1;
            return { 'WithSerifOverflowMask': r375_WithSerifOverflowMask };
        });
        var r375_WithSerifOverflowMask = function (r750_fEnable, r750_top, r750_bottom, r750_left, r750_right, r750_s) {
            var _r750_t0, _r750_t1;
            if (!r750_fEnable)
                return r750_s;
            var r750_leftCenter = r750_left + r375_HalfStroke * r375_HVContrast;
            var r750_rightCenter = r750_right - r375_HalfStroke * r375_HVContrast;
            var r750_adj = r375_TanSlope * r375_Stroke * r375_DesignParameters.serifShiftX;
            return r375_intersection(r750_s, r375_union(r375_Rect(r750_top, r1_mix(r750_top, r750_bottom, 0.5), r750_leftCenter - r375_Jut, r750_rightCenter + r375_Jut - r750_adj), r375_Rect(r1_mix(r750_top, r750_bottom, 0.5), r750_bottom, r750_leftCenter - r375_Jut + r750_adj, r750_rightCenter + r375_Jut)));
        };
        r375_xn$ExportCapture$2Lrc4b(function () {
            var _r752_t0, _r752_t1;
            return { 'LegShape': r375_LegShape };
        });
        var r375_LegShape = function () {
            var _r753_t6;
            var _r753_t7 = arguments;
            var _r753_t0 = [].slice.call(_r753_t7, 0);
            var _r753_t1 = [];
            var _r753_t2 = 0;
            while (_r753_t2 < _r753_t0.length) {
                if (!(_r753_t0[_r753_t2] instanceof r375_xn$NamedParameterPair$2Lrc9b))
                    _r753_t1.push(_r753_t0[_r753_t2]);
                _r753_t2 = _r753_t2 + 1;
            }
            var _r753_t3 = _r753_t0;
            var _r753_t4 = _r753_t3.length;
            var _r753_t5 = 0;
            while (_r753_t5 < _r753_t4) {
                _r753_t2 = _r753_t3[_r753_t5];
                if (_r753_t2 && _r753_t2 instanceof r375_xn$NamedParameterPair$2Lrc9b && _r753_t2.left === 'ztop')
                    r753_ztop = _r753_t2.right;
                if (_r753_t2 && _r753_t2 instanceof r375_xn$NamedParameterPair$2Lrc9b && _r753_t2.left === 'zbot')
                    r753_zbot = _r753_t2.right;
                if (_r753_t2 && _r753_t2 instanceof r375_xn$NamedParameterPair$2Lrc9b && _r753_t2.left === 'xb')
                    r753_xb = _r753_t2.right;
                if (_r753_t2 && _r753_t2 instanceof r375_xn$NamedParameterPair$2Lrc9b && _r753_t2.left === 'fine')
                    r753_fine = _r753_t2.right;
                _r753_t5 = _r753_t5 + 1;
            }
            var r753_ztop = r1_fallback(r753_ztop, _r753_t1[0]);
            var r753_zbot = r1_fallback(r753_zbot, _r753_t1[1]);
            var r753_xb = r1_fallback(r753_xb, _r753_t1[2]);
            var r753_fine = r1_fallback(r753_fine, _r753_t1[3], r375_Stroke);
            return function () {
                var _r759_t1;
                var _r759_t0 = this;
                var r759_currentGlyph = _r759_t0;
                r759_currentGlyph.include(r375_dispiro(r375_widths.lhs(r753_fine), r375_flat(r753_ztop.x, r753_ztop.y, r375_heading(r375_Downward)), r375_curl(r753_xb, r1_mix(r753_zbot.y + r375_LongJut, r753_ztop.y, 0.25)), r375_alsoThruThem([[
                        0.5,
                        0.94
                    ]]), r375_straight.left.end(r753_zbot.x, r753_zbot.y + r753_fine, r375_heading(r375_Leftward))));
                return void 0;
            };
        };
        r375_xn$ExportCapture$2Lrc4b(function () {
            var _r762_t0, _r762_t1;
            return { 'UpwardHookShape': r375_UpwardHookShape };
        });
        var r375_UpwardHookShape = function () {
            var _r763_t6;
            var _r763_t7 = arguments;
            var _r763_t0 = [].slice.call(_r763_t7, 0);
            var _r763_t1 = [];
            var _r763_t2 = 0;
            while (_r763_t2 < _r763_t0.length) {
                if (!(_r763_t0[_r763_t2] instanceof r375_xn$NamedParameterPair$2Lrc9b))
                    _r763_t1.push(_r763_t0[_r763_t2]);
                _r763_t2 = _r763_t2 + 1;
            }
            var _r763_t3 = _r763_t0;
            var _r763_t4 = _r763_t3.length;
            var _r763_t5 = 0;
            while (_r763_t5 < _r763_t4) {
                _r763_t2 = _r763_t3[_r763_t5];
                if (_r763_t2 && _r763_t2 instanceof r375_xn$NamedParameterPair$2Lrc9b && _r763_t2.left === 'left')
                    r763_left = _r763_t2.right;
                if (_r763_t2 && _r763_t2 instanceof r375_xn$NamedParameterPair$2Lrc9b && _r763_t2.left === 'right')
                    r763_right = _r763_t2.right;
                if (_r763_t2 && _r763_t2 instanceof r375_xn$NamedParameterPair$2Lrc9b && _r763_t2.left === 'ybegin')
                    r763_ybegin = _r763_t2.right;
                if (_r763_t2 && _r763_t2 instanceof r375_xn$NamedParameterPair$2Lrc9b && _r763_t2.left === 'yend')
                    r763_yend = _r763_t2.right;
                if (_r763_t2 && _r763_t2 instanceof r375_xn$NamedParameterPair$2Lrc9b && _r763_t2.left === 'bottom')
                    r763_bottom = _r763_t2.right;
                if (_r763_t2 && _r763_t2 instanceof r375_xn$NamedParameterPair$2Lrc9b && _r763_t2.left === 'ada')
                    r763_ada = _r763_t2.right;
                if (_r763_t2 && _r763_t2 instanceof r375_xn$NamedParameterPair$2Lrc9b && _r763_t2.left === 'adb')
                    r763_adb = _r763_t2.right;
                if (_r763_t2 && _r763_t2 instanceof r375_xn$NamedParameterPair$2Lrc9b && _r763_t2.left === 'sw')
                    r763_sw = _r763_t2.right;
                _r763_t5 = _r763_t5 + 1;
            }
            var r763_left = r1_fallback(r763_left, _r763_t1[0]);
            var r763_right = r1_fallback(r763_right, _r763_t1[1]);
            var r763_ybegin = r1_fallback(r763_ybegin, _r763_t1[2]);
            var r763_yend = r1_fallback(r763_yend, _r763_t1[3]);
            var r763_bottom = r1_fallback(r763_bottom, _r763_t1[4], r375_O);
            var r763_ada = r1_fallback(r763_ada, _r763_t1[5]);
            var r763_adb = r1_fallback(r763_adb, _r763_t1[6]);
            var r763_sw = r1_fallback(r763_sw, _r763_t1[7], r375_Stroke);
            return function () {
                var _r769_t1;
                var _r769_t0 = this;
                var r769_currentGlyph = _r769_t0;
                r769_currentGlyph.include(r375_dispiro(r375_widths.lhs(r763_sw), r375_flat(r763_left, r763_ybegin, r375_heading(r375_Downward)), r375_curl(r763_left, Math.min(r763_ybegin - 0.01, r763_adb)), r375_arcvh(), r375_g4(r1_mix(r763_left, r763_right, 0.5), r763_bottom, r375_heading(r375_Rightward)), r375_archv(), r375_flat(r763_right, r763_ada), r375_curl(r763_right, r763_yend, r375_heading(r375_Upward))));
                return void 0;
            };
        };
        r375_xn$ExportCapture$2Lrc4b(function () {
            var _r772_t0, _r772_t1;
            return { 'VerticalHook': r375_VerticalHook };
        });
        var r375_VerticalHook = function () {
            var r775_m, r775_l, r775_r;
            var r775_exports = {};
            r775_exports.m = r775_m = function () {
                var _r783_t6;
                var _r783_t7 = arguments;
                var _r783_t0 = [].slice.call(_r783_t7, 0);
                var _r783_t1 = [];
                var _r783_t2 = 0;
                while (_r783_t2 < _r783_t0.length) {
                    if (!(_r783_t0[_r783_t2] instanceof r375_xn$NamedParameterPair$2Lrc9b))
                        _r783_t1.push(_r783_t0[_r783_t2]);
                    _r783_t2 = _r783_t2 + 1;
                }
                var _r783_t3 = _r783_t0;
                var _r783_t4 = _r783_t3.length;
                var _r783_t5 = 0;
                while (_r783_t5 < _r783_t4) {
                    _r783_t2 = _r783_t3[_r783_t5];
                    if (_r783_t2 && _r783_t2 instanceof r375_xn$NamedParameterPair$2Lrc9b && _r783_t2.left === 'x')
                        r783_x = _r783_t2.right;
                    if (_r783_t2 && _r783_t2 instanceof r375_xn$NamedParameterPair$2Lrc9b && _r783_t2.left === 'y')
                        r783_y = _r783_t2.right;
                    if (_r783_t2 && _r783_t2 instanceof r375_xn$NamedParameterPair$2Lrc9b && _r783_t2.left === 'xDepth')
                        r783_xDepth = _r783_t2.right;
                    if (_r783_t2 && _r783_t2 instanceof r375_xn$NamedParameterPair$2Lrc9b && _r783_t2.left === 'yDepth')
                        r783_yDepth = _r783_t2.right;
                    if (_r783_t2 && _r783_t2 instanceof r375_xn$NamedParameterPair$2Lrc9b && _r783_t2.left === 'sw')
                        r783_sw = _r783_t2.right;
                    if (_r783_t2 && _r783_t2 instanceof r375_xn$NamedParameterPair$2Lrc9b && _r783_t2.left === 'yExtension')
                        r783_yExtension = _r783_t2.right;
                    _r783_t5 = _r783_t5 + 1;
                }
                var r783_x = r1_fallback(r783_x, _r783_t1[0]);
                var r783_y = r1_fallback(r783_y, _r783_t1[1]);
                var r783_xDepth = r1_fallback(r783_xDepth, _r783_t1[2]);
                var r783_yDepth = r1_fallback(r783_yDepth, _r783_t1[3]);
                var r783_sw = r1_fallback(r783_sw, _r783_t1[4], r375_Stroke);
                var r783_yExtension = r1_fallback(r783_yExtension, _r783_t1[5], 0);
                var r783_hd = r375_FlatHookDepth(r375_DivFrame(1));
                var r783_hdX = r783_xDepth < 0 ? -r783_hd.x : r783_hd.x;
                var r783_hdY = r783_yDepth < 0 ? -r783_hd.y : r783_hd.y;
                var r783_y2 = r783_yDepth > 0 ? Math.min(r783_y - r783_yDepth + r783_hd.y - 0.25 * r783_sw, r783_y - 0.01) : Math.max(r783_y - r783_yDepth - r783_hd.y + 0.25 * r783_sw, r783_y + 0.01);
                var r783_x3 = r783_xDepth > 0 ? Math.min(r783_x + r783_xDepth - 0.01, r783_x + r783_hd.x - 0.25 * r783_sw * r375_HVContrast) : Math.max(r783_x + r783_xDepth + 0.01, r783_x - r783_hd.x + 0.25 * r783_sw * r375_HVContrast);
                return r375_dispiro(r375_widths.center(r783_sw), r375_flat(r783_x, r783_y + r783_yExtension, r375_heading(r783_yDepth > 0 ? r375_Downward : r375_Upward)), r375_curl(r783_x, r783_y2, r375_heading(r783_yDepth > 0 ? r375_Downward : r375_Upward)), r375_arcvh(), r375_flat(r783_x3, r783_y - r783_yDepth), r375_curl(r783_x + r783_xDepth, r783_y - r783_yDepth));
            };
            r775_exports.l = r775_l = function () {
                var _r789_t6;
                var _r789_t7 = arguments;
                var _r789_t0 = [].slice.call(_r789_t7, 0);
                var _r789_t1 = [];
                var _r789_t2 = 0;
                while (_r789_t2 < _r789_t0.length) {
                    if (!(_r789_t0[_r789_t2] instanceof r375_xn$NamedParameterPair$2Lrc9b))
                        _r789_t1.push(_r789_t0[_r789_t2]);
                    _r789_t2 = _r789_t2 + 1;
                }
                var _r789_t3 = _r789_t0;
                var _r789_t4 = _r789_t3.length;
                var _r789_t5 = 0;
                while (_r789_t5 < _r789_t4) {
                    _r789_t2 = _r789_t3[_r789_t5];
                    if (_r789_t2 && _r789_t2 instanceof r375_xn$NamedParameterPair$2Lrc9b && _r789_t2.left === 'x')
                        r789_x = _r789_t2.right;
                    if (_r789_t2 && _r789_t2 instanceof r375_xn$NamedParameterPair$2Lrc9b && _r789_t2.left === 'y')
                        r789_y = _r789_t2.right;
                    if (_r789_t2 && _r789_t2 instanceof r375_xn$NamedParameterPair$2Lrc9b && _r789_t2.left === 'xDepth')
                        r789_xDepth = _r789_t2.right;
                    if (_r789_t2 && _r789_t2 instanceof r375_xn$NamedParameterPair$2Lrc9b && _r789_t2.left === 'yDepth')
                        r789_yDepth = _r789_t2.right;
                    if (_r789_t2 && _r789_t2 instanceof r375_xn$NamedParameterPair$2Lrc9b && _r789_t2.left === 'sw')
                        r789_sw = _r789_t2.right;
                    if (_r789_t2 && _r789_t2 instanceof r375_xn$NamedParameterPair$2Lrc9b && _r789_t2.left === 'yExtension')
                        r789_yExtension = _r789_t2.right;
                    _r789_t5 = _r789_t5 + 1;
                }
                var r789_x = r1_fallback(r789_x, _r789_t1[0]);
                var r789_y = r1_fallback(r789_y, _r789_t1[1]);
                var r789_xDepth = r1_fallback(r789_xDepth, _r789_t1[2]);
                var r789_yDepth = r1_fallback(r789_yDepth, _r789_t1[3]);
                var r789_sw = r1_fallback(r789_sw, _r789_t1[4], r375_Stroke);
                var r789_yExtension = r1_fallback(r789_yExtension, _r789_t1[5], 0);
                return r775_m(new r375_xn$NamedParameterPair$2Lrc9b('x', r789_x + 0.5 * r789_sw * r375_HVContrast), new r375_xn$NamedParameterPair$2Lrc9b('y', r789_y), new r375_xn$NamedParameterPair$2Lrc9b('xDepth', r789_xDepth), new r375_xn$NamedParameterPair$2Lrc9b('yDepth', r789_yDepth), new r375_xn$NamedParameterPair$2Lrc9b('sw', r789_sw), new r375_xn$NamedParameterPair$2Lrc9b('yExtension', r789_yExtension));
            };
            r775_exports.r = r775_r = function () {
                var _r801_t6;
                var _r801_t7 = arguments;
                var _r801_t0 = [].slice.call(_r801_t7, 0);
                var _r801_t1 = [];
                var _r801_t2 = 0;
                while (_r801_t2 < _r801_t0.length) {
                    if (!(_r801_t0[_r801_t2] instanceof r375_xn$NamedParameterPair$2Lrc9b))
                        _r801_t1.push(_r801_t0[_r801_t2]);
                    _r801_t2 = _r801_t2 + 1;
                }
                var _r801_t3 = _r801_t0;
                var _r801_t4 = _r801_t3.length;
                var _r801_t5 = 0;
                while (_r801_t5 < _r801_t4) {
                    _r801_t2 = _r801_t3[_r801_t5];
                    if (_r801_t2 && _r801_t2 instanceof r375_xn$NamedParameterPair$2Lrc9b && _r801_t2.left === 'x')
                        r801_x = _r801_t2.right;
                    if (_r801_t2 && _r801_t2 instanceof r375_xn$NamedParameterPair$2Lrc9b && _r801_t2.left === 'y')
                        r801_y = _r801_t2.right;
                    if (_r801_t2 && _r801_t2 instanceof r375_xn$NamedParameterPair$2Lrc9b && _r801_t2.left === 'xDepth')
                        r801_xDepth = _r801_t2.right;
                    if (_r801_t2 && _r801_t2 instanceof r375_xn$NamedParameterPair$2Lrc9b && _r801_t2.left === 'yDepth')
                        r801_yDepth = _r801_t2.right;
                    if (_r801_t2 && _r801_t2 instanceof r375_xn$NamedParameterPair$2Lrc9b && _r801_t2.left === 'sw')
                        r801_sw = _r801_t2.right;
                    if (_r801_t2 && _r801_t2 instanceof r375_xn$NamedParameterPair$2Lrc9b && _r801_t2.left === 'yExtension')
                        r801_yExtension = _r801_t2.right;
                    _r801_t5 = _r801_t5 + 1;
                }
                var r801_x = r1_fallback(r801_x, _r801_t1[0]);
                var r801_y = r1_fallback(r801_y, _r801_t1[1]);
                var r801_xDepth = r1_fallback(r801_xDepth, _r801_t1[2]);
                var r801_yDepth = r1_fallback(r801_yDepth, _r801_t1[3]);
                var r801_sw = r1_fallback(r801_sw, _r801_t1[4], r375_Stroke);
                var r801_yExtension = r1_fallback(r801_yExtension, _r801_t1[5], 0);
                return r775_m(new r375_xn$NamedParameterPair$2Lrc9b('x', r801_x - 0.5 * r801_sw * r375_HVContrast), new r375_xn$NamedParameterPair$2Lrc9b('y', r801_y), new r375_xn$NamedParameterPair$2Lrc9b('xDepth', r801_xDepth), new r375_xn$NamedParameterPair$2Lrc9b('yDepth', r801_yDepth), new r375_xn$NamedParameterPair$2Lrc9b('sw', r801_sw), new r375_xn$NamedParameterPair$2Lrc9b('yExtension', r801_yExtension));
            };
            return r775_exports;
        }();
        (function () {
            var _r813_t0, _r813_tag1, _r813_t2, _r813_tag3;
            var r813_xLinkStroke = function (r814_xLink, r814_x, r814_yAttach, r814_sw) {
                var _r814_t0, _r814_t1;
                return r814_xLink === void 0 ? r375_xn$noshape$3cah() : r375_HBar.b(Math.min(r814_xLink, r814_x - 0.5 * r375_HVContrast * r814_sw), Math.max(r814_xLink, r814_x + 0.5 * r375_HVContrast * r814_sw), r814_yAttach);
            };
            var r813_Descenders = function (r815_Impl) {
                var _r815_t0, _r815_t1, _r815_t2, _r815_tag3;
                return function () {
                    var r818_Sw, r818_adviceGap, r818_m, r818_l, r818_r, r818_lExt, r818_mExt, r818_rExt, r818_lSideJut, r818_rSideJut;
                    var r818_exports = {};
                    r818_exports.Sw = r818_Sw = r375_ArcStartSerifWidth;
                    r818_exports.adviceGap = r818_adviceGap = function (r827_refSw) {
                        var _r827_t0, _r827_t1;
                        return r375_HVContrast * r818_Sw(r827_refSw) + Math.max(r375_Width / 16, r375_AdviceStroke(12));
                    };
                    r818_exports.m = r818_m = function () {
                        var _r829_t6;
                        var _r829_t7 = arguments;
                        var _r829_t0 = [].slice.call(_r829_t7, 0);
                        var _r829_t1 = [];
                        var _r829_t2 = 0;
                        while (_r829_t2 < _r829_t0.length) {
                            if (!(_r829_t0[_r829_t2] instanceof r375_xn$NamedParameterPair$2Lrc9b))
                                _r829_t1.push(_r829_t0[_r829_t2]);
                            _r829_t2 = _r829_t2 + 1;
                        }
                        var _r829_t3 = _r829_t0;
                        var _r829_t4 = _r829_t3.length;
                        var _r829_t5 = 0;
                        while (_r829_t5 < _r829_t4) {
                            _r829_t2 = _r829_t3[_r829_t5];
                            if (_r829_t2 && _r829_t2 instanceof r375_xn$NamedParameterPair$2Lrc9b && _r829_t2.left === 'x')
                                r829_x = _r829_t2.right;
                            if (_r829_t2 && _r829_t2 instanceof r375_xn$NamedParameterPair$2Lrc9b && _r829_t2.left === 'y')
                                r829_y = _r829_t2.right;
                            if (_r829_t2 && _r829_t2 instanceof r375_xn$NamedParameterPair$2Lrc9b && _r829_t2.left === 'xLink')
                                r829_xLink = _r829_t2.right;
                            if (_r829_t2 && _r829_t2 instanceof r375_xn$NamedParameterPair$2Lrc9b && _r829_t2.left === 'yAttach')
                                r829_yAttach = _r829_t2.right;
                            if (_r829_t2 && _r829_t2 instanceof r375_xn$NamedParameterPair$2Lrc9b && _r829_t2.left === 'yOverflow')
                                r829_yOverflow = _r829_t2.right;
                            if (_r829_t2 && _r829_t2 instanceof r375_xn$NamedParameterPair$2Lrc9b && _r829_t2.left === 'refSw')
                                r829_refSw = _r829_t2.right;
                            if (_r829_t2 && _r829_t2 instanceof r375_xn$NamedParameterPair$2Lrc9b && _r829_t2.left === 'maskOut')
                                r829_maskOut = _r829_t2.right;
                            _r829_t5 = _r829_t5 + 1;
                        }
                        var r829_x = r1_fallback(r829_x, _r829_t1[0]);
                        var r829_y = r1_fallback(r829_y, _r829_t1[1]);
                        var r829_xLink = r1_fallback(r829_xLink, _r829_t1[2]);
                        var r829_yAttach = r1_fallback(r829_yAttach, _r829_t1[3], r829_y);
                        var r829_yOverflow = r1_fallback(r829_yOverflow, _r829_t1[4], 0);
                        var r829_refSw = r1_fallback(r829_refSw, _r829_t1[5], r375_Stroke);
                        var r829_maskOut = r1_fallback(r829_maskOut, _r829_t1[6], null);
                        var r829_sw = r818_Sw(r829_refSw);
                        return r815_Impl(r829_x, r829_y, r829_xLink, r829_yAttach, r829_yOverflow, r829_sw, r829_maskOut);
                    };
                    r818_exports.l = r818_l = function () {
                        var _r835_t6;
                        var _r835_t7 = arguments;
                        var _r835_t0 = [].slice.call(_r835_t7, 0);
                        var _r835_t1 = [];
                        var _r835_t2 = 0;
                        while (_r835_t2 < _r835_t0.length) {
                            if (!(_r835_t0[_r835_t2] instanceof r375_xn$NamedParameterPair$2Lrc9b))
                                _r835_t1.push(_r835_t0[_r835_t2]);
                            _r835_t2 = _r835_t2 + 1;
                        }
                        var _r835_t3 = _r835_t0;
                        var _r835_t4 = _r835_t3.length;
                        var _r835_t5 = 0;
                        while (_r835_t5 < _r835_t4) {
                            _r835_t2 = _r835_t3[_r835_t5];
                            if (_r835_t2 && _r835_t2 instanceof r375_xn$NamedParameterPair$2Lrc9b && _r835_t2.left === 'x')
                                r835_x = _r835_t2.right;
                            if (_r835_t2 && _r835_t2 instanceof r375_xn$NamedParameterPair$2Lrc9b && _r835_t2.left === 'y')
                                r835_y = _r835_t2.right;
                            if (_r835_t2 && _r835_t2 instanceof r375_xn$NamedParameterPair$2Lrc9b && _r835_t2.left === 'xLink')
                                r835_xLink = _r835_t2.right;
                            if (_r835_t2 && _r835_t2 instanceof r375_xn$NamedParameterPair$2Lrc9b && _r835_t2.left === 'yAttach')
                                r835_yAttach = _r835_t2.right;
                            if (_r835_t2 && _r835_t2 instanceof r375_xn$NamedParameterPair$2Lrc9b && _r835_t2.left === 'yOverflow')
                                r835_yOverflow = _r835_t2.right;
                            if (_r835_t2 && _r835_t2 instanceof r375_xn$NamedParameterPair$2Lrc9b && _r835_t2.left === 'refSw')
                                r835_refSw = _r835_t2.right;
                            if (_r835_t2 && _r835_t2 instanceof r375_xn$NamedParameterPair$2Lrc9b && _r835_t2.left === 'maskOut')
                                r835_maskOut = _r835_t2.right;
                            _r835_t5 = _r835_t5 + 1;
                        }
                        var r835_x = r1_fallback(r835_x, _r835_t1[0]);
                        var r835_y = r1_fallback(r835_y, _r835_t1[1]);
                        var r835_xLink = r1_fallback(r835_xLink, _r835_t1[2]);
                        var r835_yAttach = r1_fallback(r835_yAttach, _r835_t1[3], r835_y);
                        var r835_yOverflow = r1_fallback(r835_yOverflow, _r835_t1[4], 0);
                        var r835_refSw = r1_fallback(r835_refSw, _r835_t1[5], r375_Stroke);
                        var r835_maskOut = r1_fallback(r835_maskOut, _r835_t1[6], null);
                        var r835_sw = r818_Sw(r835_refSw);
                        return r815_Impl(r835_x + 0.5 * r835_sw * r375_HVContrast, r835_y, r835_xLink, r835_yAttach, r835_yOverflow, r835_sw, r835_maskOut);
                    };
                    r818_exports.r = r818_r = function () {
                        var _r841_t6;
                        var _r841_t7 = arguments;
                        var _r841_t0 = [].slice.call(_r841_t7, 0);
                        var _r841_t1 = [];
                        var _r841_t2 = 0;
                        while (_r841_t2 < _r841_t0.length) {
                            if (!(_r841_t0[_r841_t2] instanceof r375_xn$NamedParameterPair$2Lrc9b))
                                _r841_t1.push(_r841_t0[_r841_t2]);
                            _r841_t2 = _r841_t2 + 1;
                        }
                        var _r841_t3 = _r841_t0;
                        var _r841_t4 = _r841_t3.length;
                        var _r841_t5 = 0;
                        while (_r841_t5 < _r841_t4) {
                            _r841_t2 = _r841_t3[_r841_t5];
                            if (_r841_t2 && _r841_t2 instanceof r375_xn$NamedParameterPair$2Lrc9b && _r841_t2.left === 'x')
                                r841_x = _r841_t2.right;
                            if (_r841_t2 && _r841_t2 instanceof r375_xn$NamedParameterPair$2Lrc9b && _r841_t2.left === 'y')
                                r841_y = _r841_t2.right;
                            if (_r841_t2 && _r841_t2 instanceof r375_xn$NamedParameterPair$2Lrc9b && _r841_t2.left === 'xLink')
                                r841_xLink = _r841_t2.right;
                            if (_r841_t2 && _r841_t2 instanceof r375_xn$NamedParameterPair$2Lrc9b && _r841_t2.left === 'yAttach')
                                r841_yAttach = _r841_t2.right;
                            if (_r841_t2 && _r841_t2 instanceof r375_xn$NamedParameterPair$2Lrc9b && _r841_t2.left === 'yOverflow')
                                r841_yOverflow = _r841_t2.right;
                            if (_r841_t2 && _r841_t2 instanceof r375_xn$NamedParameterPair$2Lrc9b && _r841_t2.left === 'refSw')
                                r841_refSw = _r841_t2.right;
                            if (_r841_t2 && _r841_t2 instanceof r375_xn$NamedParameterPair$2Lrc9b && _r841_t2.left === 'maskOut')
                                r841_maskOut = _r841_t2.right;
                            _r841_t5 = _r841_t5 + 1;
                        }
                        var r841_x = r1_fallback(r841_x, _r841_t1[0]);
                        var r841_y = r1_fallback(r841_y, _r841_t1[1]);
                        var r841_xLink = r1_fallback(r841_xLink, _r841_t1[2]);
                        var r841_yAttach = r1_fallback(r841_yAttach, _r841_t1[3], r841_y);
                        var r841_yOverflow = r1_fallback(r841_yOverflow, _r841_t1[4], 0);
                        var r841_refSw = r1_fallback(r841_refSw, _r841_t1[5], r375_Stroke);
                        var r841_maskOut = r1_fallback(r841_maskOut, _r841_t1[6], null);
                        var r841_sw = r818_Sw(r841_refSw);
                        return r815_Impl(r841_x - 0.5 * r841_sw * r375_HVContrast, r841_y, r841_xLink, r841_yAttach, r841_yOverflow, r841_sw, r841_maskOut);
                    };
                    r818_exports.lExt = r818_lExt = function () {
                        var _r847_t6;
                        var _r847_t7 = arguments;
                        var _r847_t0 = [].slice.call(_r847_t7, 0);
                        var _r847_t1 = [];
                        var _r847_t2 = 0;
                        while (_r847_t2 < _r847_t0.length) {
                            if (!(_r847_t0[_r847_t2] instanceof r375_xn$NamedParameterPair$2Lrc9b))
                                _r847_t1.push(_r847_t0[_r847_t2]);
                            _r847_t2 = _r847_t2 + 1;
                        }
                        var _r847_t3 = _r847_t0;
                        var _r847_t4 = _r847_t3.length;
                        var _r847_t5 = 0;
                        while (_r847_t5 < _r847_t4) {
                            _r847_t2 = _r847_t3[_r847_t5];
                            if (_r847_t2 && _r847_t2 instanceof r375_xn$NamedParameterPair$2Lrc9b && _r847_t2.left === 'x')
                                r847_x = _r847_t2.right;
                            if (_r847_t2 && _r847_t2 instanceof r375_xn$NamedParameterPair$2Lrc9b && _r847_t2.left === 'y')
                                r847_y = _r847_t2.right;
                            if (_r847_t2 && _r847_t2 instanceof r375_xn$NamedParameterPair$2Lrc9b && _r847_t2.left === 'xLink')
                                r847_xLink = _r847_t2.right;
                            if (_r847_t2 && _r847_t2 instanceof r375_xn$NamedParameterPair$2Lrc9b && _r847_t2.left === 'yAttach')
                                r847_yAttach = _r847_t2.right;
                            if (_r847_t2 && _r847_t2 instanceof r375_xn$NamedParameterPair$2Lrc9b && _r847_t2.left === 'yOverflow')
                                r847_yOverflow = _r847_t2.right;
                            if (_r847_t2 && _r847_t2 instanceof r375_xn$NamedParameterPair$2Lrc9b && _r847_t2.left === 'sw')
                                r847_sw = _r847_t2.right;
                            if (_r847_t2 && _r847_t2 instanceof r375_xn$NamedParameterPair$2Lrc9b && _r847_t2.left === 'maskOut')
                                r847_maskOut = _r847_t2.right;
                            _r847_t5 = _r847_t5 + 1;
                        }
                        var r847_x = r1_fallback(r847_x, _r847_t1[0]);
                        var r847_y = r1_fallback(r847_y, _r847_t1[1]);
                        var r847_xLink = r1_fallback(r847_xLink, _r847_t1[2]);
                        var r847_yAttach = r1_fallback(r847_yAttach, _r847_t1[3], r847_y);
                        var r847_yOverflow = r1_fallback(r847_yOverflow, _r847_t1[4], 0);
                        var r847_sw = r1_fallback(r847_sw, _r847_t1[5], r375_Stroke);
                        var r847_maskOut = r1_fallback(r847_maskOut, _r847_t1[6], null);
                        return r815_Impl(r847_x + 0.5 * r847_sw * r375_HVContrast, r847_y, r847_xLink, r847_yAttach, r847_yOverflow, r847_sw, r847_maskOut);
                    };
                    r818_exports.mExt = r818_mExt = function () {
                        var _r853_t6;
                        var _r853_t7 = arguments;
                        var _r853_t0 = [].slice.call(_r853_t7, 0);
                        var _r853_t1 = [];
                        var _r853_t2 = 0;
                        while (_r853_t2 < _r853_t0.length) {
                            if (!(_r853_t0[_r853_t2] instanceof r375_xn$NamedParameterPair$2Lrc9b))
                                _r853_t1.push(_r853_t0[_r853_t2]);
                            _r853_t2 = _r853_t2 + 1;
                        }
                        var _r853_t3 = _r853_t0;
                        var _r853_t4 = _r853_t3.length;
                        var _r853_t5 = 0;
                        while (_r853_t5 < _r853_t4) {
                            _r853_t2 = _r853_t3[_r853_t5];
                            if (_r853_t2 && _r853_t2 instanceof r375_xn$NamedParameterPair$2Lrc9b && _r853_t2.left === 'x')
                                r853_x = _r853_t2.right;
                            if (_r853_t2 && _r853_t2 instanceof r375_xn$NamedParameterPair$2Lrc9b && _r853_t2.left === 'y')
                                r853_y = _r853_t2.right;
                            if (_r853_t2 && _r853_t2 instanceof r375_xn$NamedParameterPair$2Lrc9b && _r853_t2.left === 'xLink')
                                r853_xLink = _r853_t2.right;
                            if (_r853_t2 && _r853_t2 instanceof r375_xn$NamedParameterPair$2Lrc9b && _r853_t2.left === 'yAttach')
                                r853_yAttach = _r853_t2.right;
                            if (_r853_t2 && _r853_t2 instanceof r375_xn$NamedParameterPair$2Lrc9b && _r853_t2.left === 'yOverflow')
                                r853_yOverflow = _r853_t2.right;
                            if (_r853_t2 && _r853_t2 instanceof r375_xn$NamedParameterPair$2Lrc9b && _r853_t2.left === 'sw')
                                r853_sw = _r853_t2.right;
                            if (_r853_t2 && _r853_t2 instanceof r375_xn$NamedParameterPair$2Lrc9b && _r853_t2.left === 'maskOut')
                                r853_maskOut = _r853_t2.right;
                            _r853_t5 = _r853_t5 + 1;
                        }
                        var r853_x = r1_fallback(r853_x, _r853_t1[0]);
                        var r853_y = r1_fallback(r853_y, _r853_t1[1]);
                        var r853_xLink = r1_fallback(r853_xLink, _r853_t1[2]);
                        var r853_yAttach = r1_fallback(r853_yAttach, _r853_t1[3], r853_y);
                        var r853_yOverflow = r1_fallback(r853_yOverflow, _r853_t1[4], 0);
                        var r853_sw = r1_fallback(r853_sw, _r853_t1[5], r375_Stroke);
                        var r853_maskOut = r1_fallback(r853_maskOut, _r853_t1[6], null);
                        return r815_Impl(r853_x, r853_y, r853_xLink, r853_yAttach, r853_yOverflow, r853_sw, r853_maskOut);
                    };
                    r818_exports.rExt = r818_rExt = function () {
                        var _r859_t6;
                        var _r859_t7 = arguments;
                        var _r859_t0 = [].slice.call(_r859_t7, 0);
                        var _r859_t1 = [];
                        var _r859_t2 = 0;
                        while (_r859_t2 < _r859_t0.length) {
                            if (!(_r859_t0[_r859_t2] instanceof r375_xn$NamedParameterPair$2Lrc9b))
                                _r859_t1.push(_r859_t0[_r859_t2]);
                            _r859_t2 = _r859_t2 + 1;
                        }
                        var _r859_t3 = _r859_t0;
                        var _r859_t4 = _r859_t3.length;
                        var _r859_t5 = 0;
                        while (_r859_t5 < _r859_t4) {
                            _r859_t2 = _r859_t3[_r859_t5];
                            if (_r859_t2 && _r859_t2 instanceof r375_xn$NamedParameterPair$2Lrc9b && _r859_t2.left === 'x')
                                r859_x = _r859_t2.right;
                            if (_r859_t2 && _r859_t2 instanceof r375_xn$NamedParameterPair$2Lrc9b && _r859_t2.left === 'y')
                                r859_y = _r859_t2.right;
                            if (_r859_t2 && _r859_t2 instanceof r375_xn$NamedParameterPair$2Lrc9b && _r859_t2.left === 'xLink')
                                r859_xLink = _r859_t2.right;
                            if (_r859_t2 && _r859_t2 instanceof r375_xn$NamedParameterPair$2Lrc9b && _r859_t2.left === 'yAttach')
                                r859_yAttach = _r859_t2.right;
                            if (_r859_t2 && _r859_t2 instanceof r375_xn$NamedParameterPair$2Lrc9b && _r859_t2.left === 'yOverflow')
                                r859_yOverflow = _r859_t2.right;
                            if (_r859_t2 && _r859_t2 instanceof r375_xn$NamedParameterPair$2Lrc9b && _r859_t2.left === 'sw')
                                r859_sw = _r859_t2.right;
                            if (_r859_t2 && _r859_t2 instanceof r375_xn$NamedParameterPair$2Lrc9b && _r859_t2.left === 'maskOut')
                                r859_maskOut = _r859_t2.right;
                            _r859_t5 = _r859_t5 + 1;
                        }
                        var r859_x = r1_fallback(r859_x, _r859_t1[0]);
                        var r859_y = r1_fallback(r859_y, _r859_t1[1]);
                        var r859_xLink = r1_fallback(r859_xLink, _r859_t1[2]);
                        var r859_yAttach = r1_fallback(r859_yAttach, _r859_t1[3], r859_y);
                        var r859_yOverflow = r1_fallback(r859_yOverflow, _r859_t1[4], 0);
                        var r859_sw = r1_fallback(r859_sw, _r859_t1[5], r375_Stroke);
                        var r859_maskOut = r1_fallback(r859_maskOut, _r859_t1[6], null);
                        return r815_Impl(r859_x - 0.5 * r859_sw * r375_HVContrast, r859_y, r859_xLink, r859_yAttach, r859_yOverflow, r859_sw, r859_maskOut);
                    };
                    r818_exports.lSideJut = r818_lSideJut = function () {
                        var _r865_t6;
                        var _r865_t7 = arguments;
                        var _r865_t0 = [].slice.call(_r865_t7, 0);
                        var _r865_t1 = [];
                        var _r865_t2 = 0;
                        while (_r865_t2 < _r865_t0.length) {
                            if (!(_r865_t0[_r865_t2] instanceof r375_xn$NamedParameterPair$2Lrc9b))
                                _r865_t1.push(_r865_t0[_r865_t2]);
                            _r865_t2 = _r865_t2 + 1;
                        }
                        var _r865_t3 = _r865_t0;
                        var _r865_t4 = _r865_t3.length;
                        var _r865_t5 = 0;
                        while (_r865_t5 < _r865_t4) {
                            _r865_t2 = _r865_t3[_r865_t5];
                            if (_r865_t2 && _r865_t2 instanceof r375_xn$NamedParameterPair$2Lrc9b && _r865_t2.left === 'x')
                                r865_x = _r865_t2.right;
                            if (_r865_t2 && _r865_t2 instanceof r375_xn$NamedParameterPair$2Lrc9b && _r865_t2.left === 'y')
                                r865_y = _r865_t2.right;
                            if (_r865_t2 && _r865_t2 instanceof r375_xn$NamedParameterPair$2Lrc9b && _r865_t2.left === 'yOverflow')
                                r865_yOverflow = _r865_t2.right;
                            if (_r865_t2 && _r865_t2 instanceof r375_xn$NamedParameterPair$2Lrc9b && _r865_t2.left === 'refSw')
                                r865_refSw = _r865_t2.right;
                            if (_r865_t2 && _r865_t2 instanceof r375_xn$NamedParameterPair$2Lrc9b && _r865_t2.left === 'jut')
                                r865_jut = _r865_t2.right;
                            if (_r865_t2 && _r865_t2 instanceof r375_xn$NamedParameterPair$2Lrc9b && _r865_t2.left === 'sideJut')
                                r865_sideJut = _r865_t2.right;
                            _r865_t5 = _r865_t5 + 1;
                        }
                        var r865_x = r1_fallback(r865_x, _r865_t1[0]);
                        var r865_y = r1_fallback(r865_y, _r865_t1[1]);
                        var r865_yOverflow = r1_fallback(r865_yOverflow, _r865_t1[2], 0);
                        var r865_refSw = r1_fallback(r865_refSw, _r865_t1[3], r375_Stroke);
                        var r865_jut = r1_fallback(r865_jut, _r865_t1[4], r375_Jut);
                        var r865_sideJut = r1_fallback(r865_sideJut, _r865_t1[5], void 0);
                        var r865_sj = r1_fallback(r865_sideJut, r865_jut - 0.5 * r375_HVContrast * r865_refSw);
                        var r865_sw = r818_Sw(r865_refSw);
                        var r865_xLink = r865_x + 0.5 * r375_HVContrast * r865_refSw - r375_TanSlope * r865_sw;
                        var r865_xPos = r865_x + 0.5 * r375_HVContrast * r865_sw - r865_sj + r865_sw * r375_TanSlope * (r1_DesignParameters.serifShiftX - 1);
                        return r815_Impl(r865_xPos, r865_y, r865_xLink, r865_y, r865_yOverflow, r865_sw);
                    };
                    r818_exports.rSideJut = r818_rSideJut = function () {
                        var _r871_t6;
                        var _r871_t7 = arguments;
                        var _r871_t0 = [].slice.call(_r871_t7, 0);
                        var _r871_t1 = [];
                        var _r871_t2 = 0;
                        while (_r871_t2 < _r871_t0.length) {
                            if (!(_r871_t0[_r871_t2] instanceof r375_xn$NamedParameterPair$2Lrc9b))
                                _r871_t1.push(_r871_t0[_r871_t2]);
                            _r871_t2 = _r871_t2 + 1;
                        }
                        var _r871_t3 = _r871_t0;
                        var _r871_t4 = _r871_t3.length;
                        var _r871_t5 = 0;
                        while (_r871_t5 < _r871_t4) {
                            _r871_t2 = _r871_t3[_r871_t5];
                            if (_r871_t2 && _r871_t2 instanceof r375_xn$NamedParameterPair$2Lrc9b && _r871_t2.left === 'x')
                                r871_x = _r871_t2.right;
                            if (_r871_t2 && _r871_t2 instanceof r375_xn$NamedParameterPair$2Lrc9b && _r871_t2.left === 'y')
                                r871_y = _r871_t2.right;
                            if (_r871_t2 && _r871_t2 instanceof r375_xn$NamedParameterPair$2Lrc9b && _r871_t2.left === 'yOverflow')
                                r871_yOverflow = _r871_t2.right;
                            if (_r871_t2 && _r871_t2 instanceof r375_xn$NamedParameterPair$2Lrc9b && _r871_t2.left === 'refSw')
                                r871_refSw = _r871_t2.right;
                            if (_r871_t2 && _r871_t2 instanceof r375_xn$NamedParameterPair$2Lrc9b && _r871_t2.left === 'jut')
                                r871_jut = _r871_t2.right;
                            if (_r871_t2 && _r871_t2 instanceof r375_xn$NamedParameterPair$2Lrc9b && _r871_t2.left === 'sideJut')
                                r871_sideJut = _r871_t2.right;
                            _r871_t5 = _r871_t5 + 1;
                        }
                        var r871_x = r1_fallback(r871_x, _r871_t1[0]);
                        var r871_y = r1_fallback(r871_y, _r871_t1[1]);
                        var r871_yOverflow = r1_fallback(r871_yOverflow, _r871_t1[2], 0);
                        var r871_refSw = r1_fallback(r871_refSw, _r871_t1[3], r375_Stroke);
                        var r871_jut = r1_fallback(r871_jut, _r871_t1[4], r375_Jut);
                        var r871_sideJut = r1_fallback(r871_sideJut, _r871_t1[5], void 0);
                        var r871_sj = r1_fallback(r871_sideJut, r871_jut - 0.5 * r375_HVContrast * r871_refSw);
                        var r871_sw = r818_Sw(r871_refSw);
                        var r871_xLink = r871_x - 0.5 * r375_HVContrast * r871_refSw;
                        var r871_xPos = r871_x - 0.5 * r375_HVContrast * r871_sw + r871_sj + r871_sw * r375_TanSlope * (r1_DesignParameters.serifShiftX + 1);
                        return r815_Impl(r871_xPos, r871_y, r871_xLink, r871_y, r871_yOverflow, r871_sw);
                    };
                    return r818_exports;
                }();
            };
            r375_xn$ExportCapture$2Lrc4b(function () {
                var _r877_t0, _r877_t1;
                return { 'CyrDescender': r813_CyrDescender };
            });
            var r813_CyrDescender = r813_Descenders(function (r878_x, r878_y, r878_xLink, r878_yAttach, r878_yOverflow, r878_sw) {
                var _r878_t0, _r878_t1;
                return function () {
                    var _r880_t1;
                    var _r880_t0 = this;
                    var r880_currentGlyph = _r880_t0;
                    var r880_extension = 0.25 * r375_Stroke - r375_LongJut;
                    r880_currentGlyph.include(r375_ExtendBelowBaseAnchors(r878_y + r880_extension));
                    r880_currentGlyph.include(r375_union(r813_xLinkStroke(r878_xLink, r878_x, r878_yAttach, r878_sw), r375_VBar.m(r878_x, r878_yAttach, r878_y + r880_extension, r878_sw)));
                    return void 0;
                };
            });
            r375_xn$ExportCapture$2Lrc4b(function () {
                var _r884_t0, _r884_t1;
                return { 'CyrTailDescender': r813_CyrTailDescender };
            });
            var r813_CyrTailDescender = r813_Descenders(function (r885_x, r885_y, r885_xLink, r885_yAttach, r885_yOverflow, r885_sw) {
                var _r885_t0, _r885_t1;
                return function () {
                    var _r887_t1;
                    var _r887_t0 = this;
                    var r887_currentGlyph = _r887_t0;
                    var r887_extension = 0.25 * r375_Stroke - r375_LongJut;
                    r887_currentGlyph.include(r375_ExtendBelowBaseAnchors(r885_y + r887_extension));
                    r887_currentGlyph.include(r375_union(r813_xLinkStroke(r885_xLink, r885_x, r885_yAttach, r885_sw), r375_intersection(r375_MaskBelow(r885_yAttach + r375_Stroke), r375_MaskAbove(r885_y + r887_extension), r375_ExtLineCenter(16, r885_sw, r885_x + 0.24 * r375_Descender, r885_y + 0.5 * r885_sw + r375_Descender, r885_x, r885_y))));
                    return void 0;
                };
            });
            r375_xn$ExportCapture$2Lrc4b(function () {
                var _r891_t0, _r891_t1;
                return { 'PalatalHook': r813_PalatalHook };
            });
            var r813_PalatalHook = r813_Descenders(function (r892_x, r892_y, r892_xLink, r892_yAttach, r892_yOverflow, r892_sw, r892_maskOut) {
                var _r892_t0, _r892_t1;
                return function () {
                    var _r894_t1;
                    var _r894_t0 = this;
                    var r894_currentGlyph = _r894_t0;
                    var r894_fullDepth = 0 - r375_Descender - 0.5 * r892_sw - r375_O;
                    r894_currentGlyph.include(r375_ExtendBelowBaseAnchors(r892_y + r375_Descender));
                    r894_currentGlyph.include(r375_difference(r375_union(r813_xLinkStroke(r892_xLink, r892_x, r892_yAttach, r892_sw), r375_VerticalHook.m(new r375_xn$NamedParameterPair$2Lrc9b('x', r892_x), new r375_xn$NamedParameterPair$2Lrc9b('y', r892_y - (r894_fullDepth - r375_TailY)), new r375_xn$NamedParameterPair$2Lrc9b('xDepth', -r375_TailX), new r375_xn$NamedParameterPair$2Lrc9b('yDepth', r375_TailY), new r375_xn$NamedParameterPair$2Lrc9b('sw', r892_sw), new r375_xn$NamedParameterPair$2Lrc9b('yExtension', Math.max(0, r892_yAttach + r892_yOverflow - r892_y + (r894_fullDepth - r375_TailY))))), r892_maskOut ? r892_maskOut : r375_xn$noshape$3cah()));
                    return void 0;
                };
            });
            r375_xn$ExportCapture$2Lrc4b(function () {
                var _r904_t0, _r904_t1;
                return { 'RetroflexHook': r813_RetroflexHook };
            });
            var r813_RetroflexHook = r813_Descenders(function (r905_x, r905_y, r905_xLink, r905_yAttach, r905_yOverflow, r905_sw) {
                var _r905_t0, _r905_t1;
                return function () {
                    var _r907_t1;
                    var _r907_t0 = this;
                    var r907_currentGlyph = _r907_t0;
                    var r907_fullDepth = 0 - r375_Descender - 0.5 * r905_sw - r375_O;
                    r907_currentGlyph.include(r375_ExtendBelowBaseAnchors(r905_y + r375_Descender));
                    r907_currentGlyph.include(r375_union(r813_xLinkStroke(r905_xLink, r905_x, r905_yAttach, r905_sw), r375_VerticalHook.m(new r375_xn$NamedParameterPair$2Lrc9b('x', r905_x), new r375_xn$NamedParameterPair$2Lrc9b('y', r905_y - (r907_fullDepth - r375_TailY)), new r375_xn$NamedParameterPair$2Lrc9b('xDepth', r375_TailX), new r375_xn$NamedParameterPair$2Lrc9b('yDepth', r375_TailY), new r375_xn$NamedParameterPair$2Lrc9b('sw', r905_sw), new r375_xn$NamedParameterPair$2Lrc9b('yExtension', Math.max(0, r905_yAttach + r905_yOverflow - r905_y + (r907_fullDepth - r375_TailY))))));
                    return void 0;
                };
            });
            r375_xn$ExportCapture$2Lrc4b(function () {
                var _r917_t0, _r917_t1;
                return { 'MidHook': r813_MidHook };
            });
            var r813_MidHook = function () {
                var r920_general, r920_m;
                var r920_exports = {};
                r920_exports.general = r920_general = function () {
                    var _r928_t6;
                    var _r928_t7 = arguments;
                    var _r928_t0 = [].slice.call(_r928_t7, 0);
                    var _r928_t1 = [];
                    var _r928_t2 = 0;
                    while (_r928_t2 < _r928_t0.length) {
                        if (!(_r928_t0[_r928_t2] instanceof r375_xn$NamedParameterPair$2Lrc9b))
                            _r928_t1.push(_r928_t0[_r928_t2]);
                        _r928_t2 = _r928_t2 + 1;
                    }
                    var _r928_t3 = _r928_t0;
                    var _r928_t4 = _r928_t3.length;
                    var _r928_t5 = 0;
                    while (_r928_t5 < _r928_t4) {
                        _r928_t2 = _r928_t3[_r928_t5];
                        if (_r928_t2 && _r928_t2 instanceof r375_xn$NamedParameterPair$2Lrc9b && _r928_t2.left === 'left')
                            r928_left = _r928_t2.right;
                        if (_r928_t2 && _r928_t2 instanceof r375_xn$NamedParameterPair$2Lrc9b && _r928_t2.left === 'right')
                            r928_right = _r928_t2.right;
                        if (_r928_t2 && _r928_t2 instanceof r375_xn$NamedParameterPair$2Lrc9b && _r928_t2.left === 'top')
                            r928_top = _r928_t2.right;
                        if (_r928_t2 && _r928_t2 instanceof r375_xn$NamedParameterPair$2Lrc9b && _r928_t2.left === 'bottom')
                            r928_bottom = _r928_t2.right;
                        if (_r928_t2 && _r928_t2 instanceof r375_xn$NamedParameterPair$2Lrc9b && _r928_t2.left === 'ada')
                            r928_ada = _r928_t2.right;
                        if (_r928_t2 && _r928_t2 instanceof r375_xn$NamedParameterPair$2Lrc9b && _r928_t2.left === 'adb')
                            r928_adb = _r928_t2.right;
                        if (_r928_t2 && _r928_t2 instanceof r375_xn$NamedParameterPair$2Lrc9b && _r928_t2.left === 'sw')
                            r928_sw = _r928_t2.right;
                        if (_r928_t2 && _r928_t2 instanceof r375_xn$NamedParameterPair$2Lrc9b && _r928_t2.left === 'xDepth')
                            r928_xDepth = _r928_t2.right;
                        _r928_t5 = _r928_t5 + 1;
                    }
                    var r928_left = r1_fallback(r928_left, _r928_t1[0]);
                    var r928_right = r1_fallback(r928_right, _r928_t1[1]);
                    var r928_top = r1_fallback(r928_top, _r928_t1[2]);
                    var r928_bottom = r1_fallback(r928_bottom, _r928_t1[3], 0);
                    var r928_ada = r1_fallback(r928_ada, _r928_t1[4]);
                    var r928_adb = r1_fallback(r928_adb, _r928_t1[5]);
                    var r928_sw = r1_fallback(r928_sw, _r928_t1[6], r375_Stroke);
                    var r928_xDepth = r1_fallback(r928_xDepth, _r928_t1[7], -r375_HookX);
                    return function () {
                        var _r934_t1;
                        var _r934_t0 = this;
                        var r934_currentGlyph = _r934_t0;
                        r934_currentGlyph.include(r375_nShoulder(new r375_xn$NamedParameterPair$2Lrc9b('left', r928_left), new r375_xn$NamedParameterPair$2Lrc9b('right', r928_right), new r375_xn$NamedParameterPair$2Lrc9b('top', r928_top), new r375_xn$NamedParameterPair$2Lrc9b('bottom', r928_bottom), new r375_xn$NamedParameterPair$2Lrc9b('ada', r928_ada), new r375_xn$NamedParameterPair$2Lrc9b('adb', r928_adb), new r375_xn$NamedParameterPair$2Lrc9b('stroke', r928_sw)), true, true);
                        r934_currentGlyph.include(r375_VerticalHook.r(r928_right, r928_bottom, r928_xDepth, r375_Hook, r928_sw));
                        return void 0;
                    };
                };
                r920_exports.m = r920_m = function (r945_df, r945_top) {
                    var _r945_t0, _r945_t1;
                    var r945_xm = r945_df.middle + 0.5 * r945_df.mvs * r375_HVContrast;
                    return r920_general(new r375_xn$NamedParameterPair$2Lrc9b('left', r945_xm), new r375_xn$NamedParameterPair$2Lrc9b('right', r945_df.rightSB), new r375_xn$NamedParameterPair$2Lrc9b('top', r945_top * 0.625 + r945_df.mvs / 4), new r375_xn$NamedParameterPair$2Lrc9b('ada', r375_ArchDepthA), new r375_xn$NamedParameterPair$2Lrc9b('adb', r375_ArchDepthB), new r375_xn$NamedParameterPair$2Lrc9b('sw', r945_df.mvs), new r375_xn$NamedParameterPair$2Lrc9b('xDepth', -Math.max(r945_df.mvs * r375_HVContrast, Math.min(r375_HookX, 0.5 * (r945_df.rightSB - r945_df.leftSB - 2 * r945_df.mvs * r375_HVContrast)))));
                };
                return r920_exports;
            }();
            r375_xn$ExportCapture$2Lrc4b(function () {
                var _r954_t0, _r954_t1;
                return { 'EngHook': r813_EngHook };
            });
            var r813_EngHook = function () {
                var _r955_t6;
                var _r955_t7 = arguments;
                var _r955_t0 = [].slice.call(_r955_t7, 0);
                var _r955_t1 = [];
                var _r955_t2 = 0;
                while (_r955_t2 < _r955_t0.length) {
                    if (!(_r955_t0[_r955_t2] instanceof r375_xn$NamedParameterPair$2Lrc9b))
                        _r955_t1.push(_r955_t0[_r955_t2]);
                    _r955_t2 = _r955_t2 + 1;
                }
                var _r955_t3 = _r955_t0;
                var _r955_t4 = _r955_t3.length;
                var _r955_t5 = 0;
                while (_r955_t5 < _r955_t4) {
                    _r955_t2 = _r955_t3[_r955_t5];
                    if (_r955_t2 && _r955_t2 instanceof r375_xn$NamedParameterPair$2Lrc9b && _r955_t2.left === 'x')
                        r955_x = _r955_t2.right;
                    if (_r955_t2 && _r955_t2 instanceof r375_xn$NamedParameterPair$2Lrc9b && _r955_t2.left === 'yStart')
                        r955_yStart = _r955_t2.right;
                    if (_r955_t2 && _r955_t2 instanceof r375_xn$NamedParameterPair$2Lrc9b && _r955_t2.left === 'yEnd')
                        r955_yEnd = _r955_t2.right;
                    if (_r955_t2 && _r955_t2 instanceof r375_xn$NamedParameterPair$2Lrc9b && _r955_t2.left === 'sw')
                        r955_sw = _r955_t2.right;
                    _r955_t5 = _r955_t5 + 1;
                }
                var r955_x = r1_fallback(r955_x, _r955_t1[0]);
                var r955_yStart = r1_fallback(r955_yStart, _r955_t1[1]);
                var r955_yEnd = r1_fallback(r955_yEnd, _r955_t1[2]);
                var r955_sw = r1_fallback(r955_sw, _r955_t1[3], r375_Stroke);
                return r375_VerticalHook.r(r955_x, r955_yEnd + r375_Hook + 0.5 * r955_sw, -r375_HookX, r375_Hook, new r375_xn$NamedParameterPair$2Lrc9b('yExtension', Math.max(0, r955_yStart - (r955_yEnd + r375_Hook + 0.5 * r955_sw))));
            };
            r375_xn$ExportCapture$2Lrc4b(function () {
                var _r962_t0, _r962_t1;
                return { 'TopHook': r813_TopHook };
            });
            var r813_TopHook = function () {
                var r965_lBarOuter, r965_lBarInner, r965_rBarOuter, r965_rBarInner, r965_mBarOuter, r965_mBarInner, r965_arcStart;
                var r965_exports = {};
                r965_exports.lBarOuter = r965_lBarOuter = function () {
                    var _r973_t6;
                    var _r973_t7 = arguments;
                    var _r973_t0 = [].slice.call(_r973_t7, 0);
                    var _r973_t1 = [];
                    var _r973_t2 = 0;
                    while (_r973_t2 < _r973_t0.length) {
                        if (!(_r973_t0[_r973_t2] instanceof r375_xn$NamedParameterPair$2Lrc9b))
                            _r973_t1.push(_r973_t0[_r973_t2]);
                        _r973_t2 = _r973_t2 + 1;
                    }
                    var _r973_t3 = _r973_t0;
                    var _r973_t4 = _r973_t3.length;
                    var _r973_t5 = 0;
                    while (_r973_t5 < _r973_t4) {
                        _r973_t2 = _r973_t3[_r973_t5];
                        if (_r973_t2 && _r973_t2 instanceof r375_xn$NamedParameterPair$2Lrc9b && _r973_t2.left === 'x')
                            r973_x = _r973_t2.right;
                        if (_r973_t2 && _r973_t2 instanceof r375_xn$NamedParameterPair$2Lrc9b && _r973_t2.left === 'yBot')
                            r973_yBot = _r973_t2.right;
                        if (_r973_t2 && _r973_t2 instanceof r375_xn$NamedParameterPair$2Lrc9b && _r973_t2.left === 'yTop')
                            r973_yTop = _r973_t2.right;
                        if (_r973_t2 && _r973_t2 instanceof r375_xn$NamedParameterPair$2Lrc9b && _r973_t2.left === 'sw')
                            r973_sw = _r973_t2.right;
                        _r973_t5 = _r973_t5 + 1;
                    }
                    var r973_x = r1_fallback(r973_x, _r973_t1[0]);
                    var r973_yBot = r1_fallback(r973_yBot, _r973_t1[1]);
                    var r973_yTop = r1_fallback(r973_yTop, _r973_t1[2]);
                    var r973_sw = r1_fallback(r973_sw, _r973_t1[3], r375_Stroke);
                    return function () {
                        var _r979_t1;
                        var _r979_t0 = this;
                        var r979_currentGlyph = _r979_t0;
                        var r979_fullDepth = r375_Ascender - r375_XH - 0.5 * r973_sw - r375_O;
                        var r979_yHookStart = r973_yTop + (r979_fullDepth - r375_TailY);
                        r979_currentGlyph.include(r375_ExtendAboveBaseAnchors(r973_yTop + (r375_Ascender - r375_XH)));
                        r979_currentGlyph.include(r375_union(r375_VBar.l(r973_x, r973_yBot, r979_yHookStart, r973_sw), r375_VerticalHook.l(r973_x, r979_yHookStart, r375_TailX, -r375_TailY, new r375_xn$NamedParameterPair$2Lrc9b('sw', r973_sw))));
                        return void 0;
                    };
                };
                r965_exports.lBarInner = r965_lBarInner = function () {
                    var _r984_t6;
                    var _r984_t7 = arguments;
                    var _r984_t0 = [].slice.call(_r984_t7, 0);
                    var _r984_t1 = [];
                    var _r984_t2 = 0;
                    while (_r984_t2 < _r984_t0.length) {
                        if (!(_r984_t0[_r984_t2] instanceof r375_xn$NamedParameterPair$2Lrc9b))
                            _r984_t1.push(_r984_t0[_r984_t2]);
                        _r984_t2 = _r984_t2 + 1;
                    }
                    var _r984_t3 = _r984_t0;
                    var _r984_t4 = _r984_t3.length;
                    var _r984_t5 = 0;
                    while (_r984_t5 < _r984_t4) {
                        _r984_t2 = _r984_t3[_r984_t5];
                        if (_r984_t2 && _r984_t2 instanceof r375_xn$NamedParameterPair$2Lrc9b && _r984_t2.left === 'x')
                            r984_x = _r984_t2.right;
                        if (_r984_t2 && _r984_t2 instanceof r375_xn$NamedParameterPair$2Lrc9b && _r984_t2.left === 'yBot')
                            r984_yBot = _r984_t2.right;
                        if (_r984_t2 && _r984_t2 instanceof r375_xn$NamedParameterPair$2Lrc9b && _r984_t2.left === 'yTop')
                            r984_yTop = _r984_t2.right;
                        if (_r984_t2 && _r984_t2 instanceof r375_xn$NamedParameterPair$2Lrc9b && _r984_t2.left === 'sw')
                            r984_sw = _r984_t2.right;
                        _r984_t5 = _r984_t5 + 1;
                    }
                    var r984_x = r1_fallback(r984_x, _r984_t1[0]);
                    var r984_yBot = r1_fallback(r984_yBot, _r984_t1[1]);
                    var r984_yTop = r1_fallback(r984_yTop, _r984_t1[2]);
                    var r984_sw = r1_fallback(r984_sw, _r984_t1[3], r375_Stroke);
                    return function () {
                        var _r990_t1;
                        var _r990_t0 = this;
                        var r990_currentGlyph = _r990_t0;
                        var r990_yHookStart = r984_yTop - r375_O - r375_TailY - 0.5 * r984_sw;
                        r990_currentGlyph.include(r375_union(r375_VBar.l(r984_x, r984_yBot, r990_yHookStart, r984_sw), r375_VerticalHook.l(r984_x, r990_yHookStart, r375_TailX, -r375_TailY, new r375_xn$NamedParameterPair$2Lrc9b('sw', r984_sw))));
                        return void 0;
                    };
                };
                r965_exports.rBarOuter = r965_rBarOuter = function () {
                    var _r994_t6;
                    var _r994_t7 = arguments;
                    var _r994_t0 = [].slice.call(_r994_t7, 0);
                    var _r994_t1 = [];
                    var _r994_t2 = 0;
                    while (_r994_t2 < _r994_t0.length) {
                        if (!(_r994_t0[_r994_t2] instanceof r375_xn$NamedParameterPair$2Lrc9b))
                            _r994_t1.push(_r994_t0[_r994_t2]);
                        _r994_t2 = _r994_t2 + 1;
                    }
                    var _r994_t3 = _r994_t0;
                    var _r994_t4 = _r994_t3.length;
                    var _r994_t5 = 0;
                    while (_r994_t5 < _r994_t4) {
                        _r994_t2 = _r994_t3[_r994_t5];
                        if (_r994_t2 && _r994_t2 instanceof r375_xn$NamedParameterPair$2Lrc9b && _r994_t2.left === 'x')
                            r994_x = _r994_t2.right;
                        if (_r994_t2 && _r994_t2 instanceof r375_xn$NamedParameterPair$2Lrc9b && _r994_t2.left === 'yBot')
                            r994_yBot = _r994_t2.right;
                        if (_r994_t2 && _r994_t2 instanceof r375_xn$NamedParameterPair$2Lrc9b && _r994_t2.left === 'yTop')
                            r994_yTop = _r994_t2.right;
                        if (_r994_t2 && _r994_t2 instanceof r375_xn$NamedParameterPair$2Lrc9b && _r994_t2.left === 'sw')
                            r994_sw = _r994_t2.right;
                        _r994_t5 = _r994_t5 + 1;
                    }
                    var r994_x = r1_fallback(r994_x, _r994_t1[0]);
                    var r994_yBot = r1_fallback(r994_yBot, _r994_t1[1]);
                    var r994_yTop = r1_fallback(r994_yTop, _r994_t1[2]);
                    var r994_sw = r1_fallback(r994_sw, _r994_t1[3], r375_Stroke);
                    return r965_lBarOuter(r994_x - r375_HVContrast * r994_sw, r994_yBot, r994_yTop, new r375_xn$NamedParameterPair$2Lrc9b('sw', r994_sw));
                };
                r965_exports.rBarInner = r965_rBarInner = function () {
                    var _r1001_t6;
                    var _r1001_t7 = arguments;
                    var _r1001_t0 = [].slice.call(_r1001_t7, 0);
                    var _r1001_t1 = [];
                    var _r1001_t2 = 0;
                    while (_r1001_t2 < _r1001_t0.length) {
                        if (!(_r1001_t0[_r1001_t2] instanceof r375_xn$NamedParameterPair$2Lrc9b))
                            _r1001_t1.push(_r1001_t0[_r1001_t2]);
                        _r1001_t2 = _r1001_t2 + 1;
                    }
                    var _r1001_t3 = _r1001_t0;
                    var _r1001_t4 = _r1001_t3.length;
                    var _r1001_t5 = 0;
                    while (_r1001_t5 < _r1001_t4) {
                        _r1001_t2 = _r1001_t3[_r1001_t5];
                        if (_r1001_t2 && _r1001_t2 instanceof r375_xn$NamedParameterPair$2Lrc9b && _r1001_t2.left === 'x')
                            r1001_x = _r1001_t2.right;
                        if (_r1001_t2 && _r1001_t2 instanceof r375_xn$NamedParameterPair$2Lrc9b && _r1001_t2.left === 'yBot')
                            r1001_yBot = _r1001_t2.right;
                        if (_r1001_t2 && _r1001_t2 instanceof r375_xn$NamedParameterPair$2Lrc9b && _r1001_t2.left === 'yTop')
                            r1001_yTop = _r1001_t2.right;
                        if (_r1001_t2 && _r1001_t2 instanceof r375_xn$NamedParameterPair$2Lrc9b && _r1001_t2.left === 'sw')
                            r1001_sw = _r1001_t2.right;
                        _r1001_t5 = _r1001_t5 + 1;
                    }
                    var r1001_x = r1_fallback(r1001_x, _r1001_t1[0]);
                    var r1001_yBot = r1_fallback(r1001_yBot, _r1001_t1[1]);
                    var r1001_yTop = r1_fallback(r1001_yTop, _r1001_t1[2]);
                    var r1001_sw = r1_fallback(r1001_sw, _r1001_t1[3], r375_Stroke);
                    return r965_lBarInner(r1001_x - r375_HVContrast * r1001_sw, r1001_yBot, r1001_yTop, new r375_xn$NamedParameterPair$2Lrc9b('sw', r1001_sw));
                };
                r965_exports.mBarOuter = r965_mBarOuter = function () {
                    var _r1008_t6;
                    var _r1008_t7 = arguments;
                    var _r1008_t0 = [].slice.call(_r1008_t7, 0);
                    var _r1008_t1 = [];
                    var _r1008_t2 = 0;
                    while (_r1008_t2 < _r1008_t0.length) {
                        if (!(_r1008_t0[_r1008_t2] instanceof r375_xn$NamedParameterPair$2Lrc9b))
                            _r1008_t1.push(_r1008_t0[_r1008_t2]);
                        _r1008_t2 = _r1008_t2 + 1;
                    }
                    var _r1008_t3 = _r1008_t0;
                    var _r1008_t4 = _r1008_t3.length;
                    var _r1008_t5 = 0;
                    while (_r1008_t5 < _r1008_t4) {
                        _r1008_t2 = _r1008_t3[_r1008_t5];
                        if (_r1008_t2 && _r1008_t2 instanceof r375_xn$NamedParameterPair$2Lrc9b && _r1008_t2.left === 'x')
                            r1008_x = _r1008_t2.right;
                        if (_r1008_t2 && _r1008_t2 instanceof r375_xn$NamedParameterPair$2Lrc9b && _r1008_t2.left === 'yBot')
                            r1008_yBot = _r1008_t2.right;
                        if (_r1008_t2 && _r1008_t2 instanceof r375_xn$NamedParameterPair$2Lrc9b && _r1008_t2.left === 'yTop')
                            r1008_yTop = _r1008_t2.right;
                        if (_r1008_t2 && _r1008_t2 instanceof r375_xn$NamedParameterPair$2Lrc9b && _r1008_t2.left === 'sw')
                            r1008_sw = _r1008_t2.right;
                        _r1008_t5 = _r1008_t5 + 1;
                    }
                    var r1008_x = r1_fallback(r1008_x, _r1008_t1[0]);
                    var r1008_yBot = r1_fallback(r1008_yBot, _r1008_t1[1]);
                    var r1008_yTop = r1_fallback(r1008_yTop, _r1008_t1[2]);
                    var r1008_sw = r1_fallback(r1008_sw, _r1008_t1[3], r375_Stroke);
                    return r965_lBarOuter(r1008_x - 0.5 * r375_HVContrast * r1008_sw, r1008_yBot, r1008_yTop, new r375_xn$NamedParameterPair$2Lrc9b('sw', r1008_sw));
                };
                r965_exports.mBarInner = r965_mBarInner = function () {
                    var _r1015_t6;
                    var _r1015_t7 = arguments;
                    var _r1015_t0 = [].slice.call(_r1015_t7, 0);
                    var _r1015_t1 = [];
                    var _r1015_t2 = 0;
                    while (_r1015_t2 < _r1015_t0.length) {
                        if (!(_r1015_t0[_r1015_t2] instanceof r375_xn$NamedParameterPair$2Lrc9b))
                            _r1015_t1.push(_r1015_t0[_r1015_t2]);
                        _r1015_t2 = _r1015_t2 + 1;
                    }
                    var _r1015_t3 = _r1015_t0;
                    var _r1015_t4 = _r1015_t3.length;
                    var _r1015_t5 = 0;
                    while (_r1015_t5 < _r1015_t4) {
                        _r1015_t2 = _r1015_t3[_r1015_t5];
                        if (_r1015_t2 && _r1015_t2 instanceof r375_xn$NamedParameterPair$2Lrc9b && _r1015_t2.left === 'x')
                            r1015_x = _r1015_t2.right;
                        if (_r1015_t2 && _r1015_t2 instanceof r375_xn$NamedParameterPair$2Lrc9b && _r1015_t2.left === 'yBot')
                            r1015_yBot = _r1015_t2.right;
                        if (_r1015_t2 && _r1015_t2 instanceof r375_xn$NamedParameterPair$2Lrc9b && _r1015_t2.left === 'yTop')
                            r1015_yTop = _r1015_t2.right;
                        if (_r1015_t2 && _r1015_t2 instanceof r375_xn$NamedParameterPair$2Lrc9b && _r1015_t2.left === 'sw')
                            r1015_sw = _r1015_t2.right;
                        _r1015_t5 = _r1015_t5 + 1;
                    }
                    var r1015_x = r1_fallback(r1015_x, _r1015_t1[0]);
                    var r1015_yBot = r1_fallback(r1015_yBot, _r1015_t1[1]);
                    var r1015_yTop = r1_fallback(r1015_yTop, _r1015_t1[2]);
                    var r1015_sw = r1_fallback(r1015_sw, _r1015_t1[3], r375_Stroke);
                    return r965_lBarInner(r1015_x - 0.5 * r375_HVContrast * r1015_sw, r1015_yBot, r1015_yTop, new r375_xn$NamedParameterPair$2Lrc9b('sw', r1015_sw));
                };
                r965_exports.arcStart = r965_arcStart = function () {
                    var _r1022_t6;
                    var _r1022_t7 = arguments;
                    var _r1022_t0 = [].slice.call(_r1022_t7, 0);
                    var _r1022_t1 = [];
                    var _r1022_t2 = 0;
                    while (_r1022_t2 < _r1022_t0.length) {
                        if (!(_r1022_t0[_r1022_t2] instanceof r375_xn$NamedParameterPair$2Lrc9b))
                            _r1022_t1.push(_r1022_t0[_r1022_t2]);
                        _r1022_t2 = _r1022_t2 + 1;
                    }
                    var _r1022_t3 = _r1022_t0;
                    var _r1022_t4 = _r1022_t3.length;
                    var _r1022_t5 = 0;
                    while (_r1022_t5 < _r1022_t4) {
                        _r1022_t2 = _r1022_t3[_r1022_t5];
                        if (_r1022_t2 && _r1022_t2 instanceof r375_xn$NamedParameterPair$2Lrc9b && _r1022_t2.left === 'cx')
                            r1022_cx = _r1022_t2.right;
                        if (_r1022_t2 && _r1022_t2 instanceof r375_xn$NamedParameterPair$2Lrc9b && _r1022_t2.left === 'cy')
                            r1022_cy = _r1022_t2.right;
                        if (_r1022_t2 && _r1022_t2 instanceof r375_xn$NamedParameterPair$2Lrc9b && _r1022_t2.left === 'hookY')
                            r1022_hookY = _r1022_t2.right;
                        if (_r1022_t2 && _r1022_t2 instanceof r375_xn$NamedParameterPair$2Lrc9b && _r1022_t2.left === 'refSw')
                            r1022_refSw = _r1022_t2.right;
                        _r1022_t5 = _r1022_t5 + 1;
                    }
                    var r1022_cx = r1_fallback(r1022_cx, _r1022_t1[0]);
                    var r1022_cy = r1_fallback(r1022_cy, _r1022_t1[1]);
                    var r1022_hookY = r1_fallback(r1022_hookY, _r1022_t1[2]);
                    var r1022_refSw = r1_fallback(r1022_refSw, _r1022_t1[3], r375_Stroke);
                    var r1022_sw = r375_ArcStartSerifWidth(r1022_refSw);
                    var r1022_fullDepth = r375_Ascender - r375_XH - 0.5 * r1022_sw - r375_O;
                    var r1022_yHookStart = r1022_cy + (r1022_fullDepth - r375_TailY);
                    return r375_union(r375_VBar.r(r1022_cx, r1022_cy - r1022_hookY + r375_O * 2, r1022_yHookStart, r1022_sw), r375_VerticalHook.r(r1022_cx, r1022_yHookStart, r375_TailX, -r375_TailY, r1022_sw));
                };
                return r965_exports;
            }();
            r375_xn$ExportCapture$2Lrc4b(function () {
                var _r1028_t0, _r1028_t1;
                return { 'LeftHook': r813_LeftHook };
            });
            var r813_LeftHook = function (r1029_x, r1029_y, r1029_xextend) {
                var _r1029_t0, _r1029_t1;
                return function () {
                    var _r1031_t1;
                    var _r1031_t0 = this;
                    var r1031_currentGlyph = _r1031_t0;
                    var r1031_fine = r375_AdviceStroke(4.25);
                    r1031_currentGlyph.include(r375_dispiro(r375_widths.lhs(r1031_fine), r375_flat(r1_fallback(r1029_xextend, r1029_x + 1), r1029_y), r375_curl(r1029_x, r1029_y), r375_archv(8), r375_g4.down.end(r1029_x - r813_LeftHook.extension, r1029_y - r375_HookX, r375_heading(r375_Downward))));
                    return void 0;
                };
            };
            return r813_LeftHook.extension = Math.max(r375_Width * 0.2, r375_AdviceStroke(4.25) * 1.5);
        }());
        (function () {
            var r1034_BeltOverlayAt = function (r1035_x, r1035_y) {
                var _r1035_t0, _r1035_t1;
                var r1035_fine = r375_AdviceStroke(4.5);
                var r1035_r = r375_XH * 0.05;
                return r375_dispiro(r375_widths.rhs(r1035_fine), r375_flat(r1035_x, r1035_y + r1035_r, r375_heading(r375_Leftward)), r375_curl(r1035_x - r375_HalfStroke - r1035_r * 1.5, r1035_y + r1035_r), r375_archv(), r375_g4.down.mid(r1035_x - r375_HalfStroke - r1035_r * 2.5, r1035_y, r375_heading(r375_Downward)), r375_arcvh(), r375_flat(r1035_x - r375_HalfStroke - r1035_r * 1.5, r1035_y - r1035_r), r375_curl(r1035_x + r375_HalfStroke + r1035_r * 1.5 + r1035_fine, r1035_y - r1035_r));
            };
            r375_xn$ExportCapture$2Lrc4b(function () {
                var _r1037_t0, _r1037_t1;
                return { 'BeltOverlay': r1034_BeltOverlay };
            });
            var r1034_BeltOverlay = function (r1038_top, r1038_xMiddle) {
                var _r1038_t0, _r1038_t1;
                return r1034_BeltOverlayAt(r1038_xMiddle, 0.5 * r1038_top);
            };
            return r1034_BeltOverlay.at = r1034_BeltOverlayAt;
        }());
        return function () {
            r375_xn$ExportCapture$2Lrc4b(function () {
                var _r1042_t0, _r1042_t1;
                return { 'LetterBarOverlay': r1040_LetterBarOverlay };
            });
            var r1040_LetterBarOverlay = function () {
                var _r1043_t7;
                var _r1043_t8 = arguments;
                var _r1043_t0 = [].slice.call(_r1043_t8, 0);
                var _r1043_t1 = [];
                var _r1043_t2 = 0;
                while (_r1043_t2 < _r1043_t0.length) {
                    if (!(_r1043_t0[_r1043_t2] instanceof r375_xn$NamedParameterPair$2Lrc9b))
                        _r1043_t1.push(_r1043_t0[_r1043_t2]);
                    _r1043_t2 = _r1043_t2 + 1;
                }
                var _r1043_t3 = _r1043_t0;
                var _r1043_t4 = _r1043_t3.length;
                var _r1043_t5 = 0;
                while (_r1043_t5 < _r1043_t4) {
                    _r1043_t2 = _r1043_t3[_r1043_t5];
                    if (_r1043_t2 && _r1043_t2 instanceof r375_xn$NamedParameterPair$2Lrc9b && _r1043_t2.left === 'x')
                        r1043_x = _r1043_t2.right;
                    if (_r1043_t2 && _r1043_t2 instanceof r375_xn$NamedParameterPair$2Lrc9b && _r1043_t2.left === 'y')
                        r1043_y = _r1043_t2.right;
                    if (_r1043_t2 && _r1043_t2 instanceof r375_xn$NamedParameterPair$2Lrc9b && _r1043_t2.left === 'space')
                        r1043_space = _r1043_t2.right;
                    if (_r1043_t2 && _r1043_t2 instanceof r375_xn$NamedParameterPair$2Lrc9b && _r1043_t2.left === 'refSw')
                        r1043_refSw = _r1043_t2.right;
                    if (_r1043_t2 && _r1043_t2 instanceof r375_xn$NamedParameterPair$2Lrc9b && _r1043_t2.left === 'pXInSw')
                        r1043_pXInSw = _r1043_t2.right;
                    if (_r1043_t2 && _r1043_t2 instanceof r375_xn$NamedParameterPair$2Lrc9b && _r1043_t2.left === 'sw')
                        r1043_sw = _r1043_t2.right;
                    _r1043_t5 = _r1043_t5 + 1;
                }
                var r1043_x = r1_fallback(r1043_x, _r1043_t1[0]);
                var r1043_y = r1_fallback(r1043_y, _r1043_t1[1]);
                var r1043_space = r1_fallback(r1043_space, _r1043_t1[2]);
                var r1043_refSw = r1_fallback(r1043_refSw, _r1043_t1[3]);
                var r1043_pXInSw = r1_fallback(r1043_pXInSw, _r1043_t1[4]);
                var r1043_sw = r1_fallback(r1043_sw, _r1043_t1[5]);
                var _r1043_t6 = r1043_space;
                var r1043_xLeftSpace = _r1043_t6[0];
                var r1043_xRightSpace = _r1043_t6[1];
                var r1043_xLeftEdge = r1043_x - r1043_pXInSw * r1043_refSw * r375_HVContrast;
                var r1043_xRightEdge = r1043_x + (1 - r1043_pXInSw) * r1043_refSw * r375_HVContrast;
                var r1043_p = (r1043_xLeftEdge - r1043_xLeftSpace) / (r1043_xRightSpace - r1043_xRightEdge + (r1043_xLeftEdge - r1043_xLeftSpace));
                var r1043_xC = r1_mix(r1043_xLeftEdge, r1043_xRightEdge, r1_mix(0.5, 1 - r1043_p, 0.5));
                var r1043_jut = 0.75 * r375_LongJut;
                return r375_HOverlayBar(Math.min(r1043_xLeftEdge - r375_SideJut, Math.max(r1043_xC - r1043_jut, r1_mix(r1043_xLeftSpace, r1043_xLeftEdge, 0.3))), Math.max(r1043_xRightEdge + r375_SideJut, Math.min(r1_mix(r1043_xRightSpace, r1043_xRightEdge, 0.3), r1043_xC + r1043_jut)), r1043_y, r1043_sw);
            };
            r1040_LetterBarOverlay.l = function () {
                var _r1048_t6;
                var _r1048_t7 = arguments;
                var _r1048_t0 = [].slice.call(_r1048_t7, 0);
                var _r1048_t1 = [];
                var _r1048_t2 = 0;
                while (_r1048_t2 < _r1048_t0.length) {
                    if (!(_r1048_t0[_r1048_t2] instanceof r375_xn$NamedParameterPair$2Lrc9b))
                        _r1048_t1.push(_r1048_t0[_r1048_t2]);
                    _r1048_t2 = _r1048_t2 + 1;
                }
                var _r1048_t3 = _r1048_t0;
                var _r1048_t4 = _r1048_t3.length;
                var _r1048_t5 = 0;
                while (_r1048_t5 < _r1048_t4) {
                    _r1048_t2 = _r1048_t3[_r1048_t5];
                    if (_r1048_t2 && _r1048_t2 instanceof r375_xn$NamedParameterPair$2Lrc9b && _r1048_t2.left === 'x')
                        r1048_x = _r1048_t2.right;
                    if (_r1048_t2 && _r1048_t2 instanceof r375_xn$NamedParameterPair$2Lrc9b && _r1048_t2.left === 'y')
                        r1048_y = _r1048_t2.right;
                    if (_r1048_t2 && _r1048_t2 instanceof r375_xn$NamedParameterPair$2Lrc9b && _r1048_t2.left === 'space')
                        r1048_space = _r1048_t2.right;
                    if (_r1048_t2 && _r1048_t2 instanceof r375_xn$NamedParameterPair$2Lrc9b && _r1048_t2.left === 'refSw')
                        r1048_refSw = _r1048_t2.right;
                    if (_r1048_t2 && _r1048_t2 instanceof r375_xn$NamedParameterPair$2Lrc9b && _r1048_t2.left === 'sw')
                        r1048_sw = _r1048_t2.right;
                    _r1048_t5 = _r1048_t5 + 1;
                }
                var r1048_x = r1_fallback(r1048_x, _r1048_t1[0]);
                var r1048_y = r1_fallback(r1048_y, _r1048_t1[1]);
                var r1048_space = r1_fallback(r1048_space, _r1048_t1[2], [
                    0,
                    r375_Width
                ]);
                var r1048_refSw = r1_fallback(r1048_refSw, _r1048_t1[3], r375_Stroke);
                var r1048_sw = r1_fallback(r1048_sw, _r1048_t1[4], r375_OverlayStroke);
                return r1040_LetterBarOverlay(r1048_x, r1048_y, new r375_xn$NamedParameterPair$2Lrc9b('space', r1048_space), new r375_xn$NamedParameterPair$2Lrc9b('refSw', r1048_refSw), new r375_xn$NamedParameterPair$2Lrc9b('pXInSw', 0), new r375_xn$NamedParameterPair$2Lrc9b('sw', r1048_sw));
            };
            r1040_LetterBarOverlay.m = function () {
                var _r1057_t6;
                var _r1057_t7 = arguments;
                var _r1057_t0 = [].slice.call(_r1057_t7, 0);
                var _r1057_t1 = [];
                var _r1057_t2 = 0;
                while (_r1057_t2 < _r1057_t0.length) {
                    if (!(_r1057_t0[_r1057_t2] instanceof r375_xn$NamedParameterPair$2Lrc9b))
                        _r1057_t1.push(_r1057_t0[_r1057_t2]);
                    _r1057_t2 = _r1057_t2 + 1;
                }
                var _r1057_t3 = _r1057_t0;
                var _r1057_t4 = _r1057_t3.length;
                var _r1057_t5 = 0;
                while (_r1057_t5 < _r1057_t4) {
                    _r1057_t2 = _r1057_t3[_r1057_t5];
                    if (_r1057_t2 && _r1057_t2 instanceof r375_xn$NamedParameterPair$2Lrc9b && _r1057_t2.left === 'x')
                        r1057_x = _r1057_t2.right;
                    if (_r1057_t2 && _r1057_t2 instanceof r375_xn$NamedParameterPair$2Lrc9b && _r1057_t2.left === 'y')
                        r1057_y = _r1057_t2.right;
                    if (_r1057_t2 && _r1057_t2 instanceof r375_xn$NamedParameterPair$2Lrc9b && _r1057_t2.left === 'space')
                        r1057_space = _r1057_t2.right;
                    if (_r1057_t2 && _r1057_t2 instanceof r375_xn$NamedParameterPair$2Lrc9b && _r1057_t2.left === 'refSw')
                        r1057_refSw = _r1057_t2.right;
                    if (_r1057_t2 && _r1057_t2 instanceof r375_xn$NamedParameterPair$2Lrc9b && _r1057_t2.left === 'sw')
                        r1057_sw = _r1057_t2.right;
                    _r1057_t5 = _r1057_t5 + 1;
                }
                var r1057_x = r1_fallback(r1057_x, _r1057_t1[0]);
                var r1057_y = r1_fallback(r1057_y, _r1057_t1[1]);
                var r1057_space = r1_fallback(r1057_space, _r1057_t1[2], [
                    0,
                    r375_Width
                ]);
                var r1057_refSw = r1_fallback(r1057_refSw, _r1057_t1[3], r375_Stroke);
                var r1057_sw = r1_fallback(r1057_sw, _r1057_t1[4], r375_OverlayStroke);
                return r1040_LetterBarOverlay(r1057_x, r1057_y, new r375_xn$NamedParameterPair$2Lrc9b('space', r1057_space), new r375_xn$NamedParameterPair$2Lrc9b('refSw', r1057_refSw), new r375_xn$NamedParameterPair$2Lrc9b('pXInSw', 0.5), new r375_xn$NamedParameterPair$2Lrc9b('sw', r1057_sw));
            };
            r1040_LetterBarOverlay.r = function () {
                var _r1066_t6;
                var _r1066_t7 = arguments;
                var _r1066_t0 = [].slice.call(_r1066_t7, 0);
                var _r1066_t1 = [];
                var _r1066_t2 = 0;
                while (_r1066_t2 < _r1066_t0.length) {
                    if (!(_r1066_t0[_r1066_t2] instanceof r375_xn$NamedParameterPair$2Lrc9b))
                        _r1066_t1.push(_r1066_t0[_r1066_t2]);
                    _r1066_t2 = _r1066_t2 + 1;
                }
                var _r1066_t3 = _r1066_t0;
                var _r1066_t4 = _r1066_t3.length;
                var _r1066_t5 = 0;
                while (_r1066_t5 < _r1066_t4) {
                    _r1066_t2 = _r1066_t3[_r1066_t5];
                    if (_r1066_t2 && _r1066_t2 instanceof r375_xn$NamedParameterPair$2Lrc9b && _r1066_t2.left === 'x')
                        r1066_x = _r1066_t2.right;
                    if (_r1066_t2 && _r1066_t2 instanceof r375_xn$NamedParameterPair$2Lrc9b && _r1066_t2.left === 'y')
                        r1066_y = _r1066_t2.right;
                    if (_r1066_t2 && _r1066_t2 instanceof r375_xn$NamedParameterPair$2Lrc9b && _r1066_t2.left === 'space')
                        r1066_space = _r1066_t2.right;
                    if (_r1066_t2 && _r1066_t2 instanceof r375_xn$NamedParameterPair$2Lrc9b && _r1066_t2.left === 'refSw')
                        r1066_refSw = _r1066_t2.right;
                    if (_r1066_t2 && _r1066_t2 instanceof r375_xn$NamedParameterPair$2Lrc9b && _r1066_t2.left === 'sw')
                        r1066_sw = _r1066_t2.right;
                    _r1066_t5 = _r1066_t5 + 1;
                }
                var r1066_x = r1_fallback(r1066_x, _r1066_t1[0]);
                var r1066_y = r1_fallback(r1066_y, _r1066_t1[1]);
                var r1066_space = r1_fallback(r1066_space, _r1066_t1[2], [
                    0,
                    r375_Width
                ]);
                var r1066_refSw = r1_fallback(r1066_refSw, _r1066_t1[3], r375_Stroke);
                var r1066_sw = r1_fallback(r1066_sw, _r1066_t1[4], r375_OverlayStroke);
                return r1040_LetterBarOverlay(r1066_x, r1066_y, new r375_xn$NamedParameterPair$2Lrc9b('space', r1066_space), new r375_xn$NamedParameterPair$2Lrc9b('refSw', r1066_refSw), new r375_xn$NamedParameterPair$2Lrc9b('pXInSw', 1), new r375_xn$NamedParameterPair$2Lrc9b('sw', r1066_sw));
            };
            var r1040_calcYAndSw = function (r1075_bot, r1075_top, r1075_py, r1075_sw) {
                var _r1075_t0, _r1075_t1;
                var r1075_y = r1_mix(r1075_bot, r1075_top, r1075_py);
                var r1075_sw1 = Math.min(r1075_sw, 1.25 * (r1075_top - r1075_bot) * r1075_py, 1.25 * (r1075_top - r1075_bot) * (1 - r1075_py));
                return [
                    r1075_y,
                    r1075_sw1
                ];
            };
            r1040_LetterBarOverlay.l.in = function () {
                var _r1076_t7;
                var _r1076_t8 = arguments;
                var _r1076_t0 = [].slice.call(_r1076_t8, 0);
                var _r1076_t1 = [];
                var _r1076_t2 = 0;
                while (_r1076_t2 < _r1076_t0.length) {
                    if (!(_r1076_t0[_r1076_t2] instanceof r375_xn$NamedParameterPair$2Lrc9b))
                        _r1076_t1.push(_r1076_t0[_r1076_t2]);
                    _r1076_t2 = _r1076_t2 + 1;
                }
                var _r1076_t3 = _r1076_t0;
                var _r1076_t4 = _r1076_t3.length;
                var _r1076_t5 = 0;
                while (_r1076_t5 < _r1076_t4) {
                    _r1076_t2 = _r1076_t3[_r1076_t5];
                    if (_r1076_t2 && _r1076_t2 instanceof r375_xn$NamedParameterPair$2Lrc9b && _r1076_t2.left === 'x')
                        r1076_x = _r1076_t2.right;
                    if (_r1076_t2 && _r1076_t2 instanceof r375_xn$NamedParameterPair$2Lrc9b && _r1076_t2.left === 'bot')
                        r1076_bot = _r1076_t2.right;
                    if (_r1076_t2 && _r1076_t2 instanceof r375_xn$NamedParameterPair$2Lrc9b && _r1076_t2.left === 'top')
                        r1076_top = _r1076_t2.right;
                    if (_r1076_t2 && _r1076_t2 instanceof r375_xn$NamedParameterPair$2Lrc9b && _r1076_t2.left === 'py')
                        r1076_py = _r1076_t2.right;
                    if (_r1076_t2 && _r1076_t2 instanceof r375_xn$NamedParameterPair$2Lrc9b && _r1076_t2.left === 'space')
                        r1076_space = _r1076_t2.right;
                    if (_r1076_t2 && _r1076_t2 instanceof r375_xn$NamedParameterPair$2Lrc9b && _r1076_t2.left === 'refSw')
                        r1076_refSw = _r1076_t2.right;
                    if (_r1076_t2 && _r1076_t2 instanceof r375_xn$NamedParameterPair$2Lrc9b && _r1076_t2.left === 'sw')
                        r1076_sw = _r1076_t2.right;
                    _r1076_t5 = _r1076_t5 + 1;
                }
                var r1076_x = r1_fallback(r1076_x, _r1076_t1[0]);
                var r1076_bot = r1_fallback(r1076_bot, _r1076_t1[1]);
                var r1076_top = r1_fallback(r1076_top, _r1076_t1[2]);
                var r1076_py = r1_fallback(r1076_py, _r1076_t1[3], 0.5);
                var r1076_space = r1_fallback(r1076_space, _r1076_t1[4], [
                    0,
                    r375_Width
                ]);
                var r1076_refSw = r1_fallback(r1076_refSw, _r1076_t1[5], r375_Stroke);
                var r1076_sw = r1_fallback(r1076_sw, _r1076_t1[6], r375_OverlayStroke);
                var _r1076_t6 = r1040_calcYAndSw(r1076_bot, r1076_top, r1076_py, r1076_sw);
                var r1076_y = _r1076_t6[0];
                var r1076_sw1 = _r1076_t6[1];
                return r1040_LetterBarOverlay(r1076_x, r1076_y, new r375_xn$NamedParameterPair$2Lrc9b('space', r1076_space), new r375_xn$NamedParameterPair$2Lrc9b('refSw', r1076_refSw), new r375_xn$NamedParameterPair$2Lrc9b('pXInSw', 0), new r375_xn$NamedParameterPair$2Lrc9b('sw', r1076_sw1));
            };
            r1040_LetterBarOverlay.m.in = function () {
                var _r1085_t7;
                var _r1085_t8 = arguments;
                var _r1085_t0 = [].slice.call(_r1085_t8, 0);
                var _r1085_t1 = [];
                var _r1085_t2 = 0;
                while (_r1085_t2 < _r1085_t0.length) {
                    if (!(_r1085_t0[_r1085_t2] instanceof r375_xn$NamedParameterPair$2Lrc9b))
                        _r1085_t1.push(_r1085_t0[_r1085_t2]);
                    _r1085_t2 = _r1085_t2 + 1;
                }
                var _r1085_t3 = _r1085_t0;
                var _r1085_t4 = _r1085_t3.length;
                var _r1085_t5 = 0;
                while (_r1085_t5 < _r1085_t4) {
                    _r1085_t2 = _r1085_t3[_r1085_t5];
                    if (_r1085_t2 && _r1085_t2 instanceof r375_xn$NamedParameterPair$2Lrc9b && _r1085_t2.left === 'x')
                        r1085_x = _r1085_t2.right;
                    if (_r1085_t2 && _r1085_t2 instanceof r375_xn$NamedParameterPair$2Lrc9b && _r1085_t2.left === 'bot')
                        r1085_bot = _r1085_t2.right;
                    if (_r1085_t2 && _r1085_t2 instanceof r375_xn$NamedParameterPair$2Lrc9b && _r1085_t2.left === 'top')
                        r1085_top = _r1085_t2.right;
                    if (_r1085_t2 && _r1085_t2 instanceof r375_xn$NamedParameterPair$2Lrc9b && _r1085_t2.left === 'py')
                        r1085_py = _r1085_t2.right;
                    if (_r1085_t2 && _r1085_t2 instanceof r375_xn$NamedParameterPair$2Lrc9b && _r1085_t2.left === 'space')
                        r1085_space = _r1085_t2.right;
                    if (_r1085_t2 && _r1085_t2 instanceof r375_xn$NamedParameterPair$2Lrc9b && _r1085_t2.left === 'refSw')
                        r1085_refSw = _r1085_t2.right;
                    if (_r1085_t2 && _r1085_t2 instanceof r375_xn$NamedParameterPair$2Lrc9b && _r1085_t2.left === 'sw')
                        r1085_sw = _r1085_t2.right;
                    _r1085_t5 = _r1085_t5 + 1;
                }
                var r1085_x = r1_fallback(r1085_x, _r1085_t1[0]);
                var r1085_bot = r1_fallback(r1085_bot, _r1085_t1[1]);
                var r1085_top = r1_fallback(r1085_top, _r1085_t1[2]);
                var r1085_py = r1_fallback(r1085_py, _r1085_t1[3], 0.5);
                var r1085_space = r1_fallback(r1085_space, _r1085_t1[4], [
                    0,
                    r375_Width
                ]);
                var r1085_refSw = r1_fallback(r1085_refSw, _r1085_t1[5], r375_Stroke);
                var r1085_sw = r1_fallback(r1085_sw, _r1085_t1[6], r375_OverlayStroke);
                var _r1085_t6 = r1040_calcYAndSw(r1085_bot, r1085_top, r1085_py, r1085_sw);
                var r1085_y = _r1085_t6[0];
                var r1085_sw1 = _r1085_t6[1];
                return r1040_LetterBarOverlay(r1085_x, r1085_y, new r375_xn$NamedParameterPair$2Lrc9b('space', r1085_space), new r375_xn$NamedParameterPair$2Lrc9b('refSw', r1085_refSw), new r375_xn$NamedParameterPair$2Lrc9b('pXInSw', 0.5), new r375_xn$NamedParameterPair$2Lrc9b('sw', r1085_sw1));
            };
            return r1040_LetterBarOverlay.r.in = function () {
                var _r1094_t7;
                var _r1094_t8 = arguments;
                var _r1094_t0 = [].slice.call(_r1094_t8, 0);
                var _r1094_t1 = [];
                var _r1094_t2 = 0;
                while (_r1094_t2 < _r1094_t0.length) {
                    if (!(_r1094_t0[_r1094_t2] instanceof r375_xn$NamedParameterPair$2Lrc9b))
                        _r1094_t1.push(_r1094_t0[_r1094_t2]);
                    _r1094_t2 = _r1094_t2 + 1;
                }
                var _r1094_t3 = _r1094_t0;
                var _r1094_t4 = _r1094_t3.length;
                var _r1094_t5 = 0;
                while (_r1094_t5 < _r1094_t4) {
                    _r1094_t2 = _r1094_t3[_r1094_t5];
                    if (_r1094_t2 && _r1094_t2 instanceof r375_xn$NamedParameterPair$2Lrc9b && _r1094_t2.left === 'x')
                        r1094_x = _r1094_t2.right;
                    if (_r1094_t2 && _r1094_t2 instanceof r375_xn$NamedParameterPair$2Lrc9b && _r1094_t2.left === 'bot')
                        r1094_bot = _r1094_t2.right;
                    if (_r1094_t2 && _r1094_t2 instanceof r375_xn$NamedParameterPair$2Lrc9b && _r1094_t2.left === 'top')
                        r1094_top = _r1094_t2.right;
                    if (_r1094_t2 && _r1094_t2 instanceof r375_xn$NamedParameterPair$2Lrc9b && _r1094_t2.left === 'py')
                        r1094_py = _r1094_t2.right;
                    if (_r1094_t2 && _r1094_t2 instanceof r375_xn$NamedParameterPair$2Lrc9b && _r1094_t2.left === 'space')
                        r1094_space = _r1094_t2.right;
                    if (_r1094_t2 && _r1094_t2 instanceof r375_xn$NamedParameterPair$2Lrc9b && _r1094_t2.left === 'refSw')
                        r1094_refSw = _r1094_t2.right;
                    if (_r1094_t2 && _r1094_t2 instanceof r375_xn$NamedParameterPair$2Lrc9b && _r1094_t2.left === 'sw')
                        r1094_sw = _r1094_t2.right;
                    _r1094_t5 = _r1094_t5 + 1;
                }
                var r1094_x = r1_fallback(r1094_x, _r1094_t1[0]);
                var r1094_bot = r1_fallback(r1094_bot, _r1094_t1[1]);
                var r1094_top = r1_fallback(r1094_top, _r1094_t1[2]);
                var r1094_py = r1_fallback(r1094_py, _r1094_t1[3], 0.5);
                var r1094_space = r1_fallback(r1094_space, _r1094_t1[4], [
                    0,
                    r375_Width
                ]);
                var r1094_refSw = r1_fallback(r1094_refSw, _r1094_t1[5], r375_Stroke);
                var r1094_sw = r1_fallback(r1094_sw, _r1094_t1[6], r375_OverlayStroke);
                var _r1094_t6 = r1040_calcYAndSw(r1094_bot, r1094_top, r1094_py, r1094_sw);
                var r1094_y = _r1094_t6[0];
                var r1094_sw1 = _r1094_t6[1];
                return r1040_LetterBarOverlay(r1094_x, r1094_y, new r375_xn$NamedParameterPair$2Lrc9b('space', r1094_space), new r375_xn$NamedParameterPair$2Lrc9b('refSw', r1094_refSw), new r375_xn$NamedParameterPair$2Lrc9b('pXInSw', 1), new r375_xn$NamedParameterPair$2Lrc9b('sw', r1094_sw1));
            };
        }();
    });
    return void 0;
});
