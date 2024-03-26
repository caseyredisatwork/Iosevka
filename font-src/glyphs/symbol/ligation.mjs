'use strict';
import * as _s0_t0 from '../../support/utils.mjs';
import * as _s0_t1 from '../../support/gr.mjs';
import * as _s0_t2 from '../../meta/aesthetics.mjs';
var _s0_t3;
export {
    _s0_t3 as apply
};
var r1_apply, _r1_t0, _r1_t1, _r1_t2, _r1_t3, _r1_t4, _r1_t5, _r1_t6, _r1_t7;
var _r1_t8 = _s0_t0;
var r1_mix = _r1_t8.mix;
var r1_clamp = _r1_t8.clamp;
var r1_fallback = _r1_t8.fallback;
var _r1_t9 = _s0_t1;
var r1_Joining = _r1_t9.Joining;
var r1_NeqLigationSlashDotted = _r1_t9.NeqLigationSlashDotted;
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
    r271_xn$Capture_Ext$2Lrc2b['$defineGlyphBlockImpl$'](r271_xn$Capture_Ext$2Lrc2b, 'Symbol-Ligation', function (r272_xn$Capture$2Lrc8, r272_xn$ExportCapture$2Lrc4b) {
        var _r272_t8, _r272_t9, _r272_t10, _r272_tag11, _r272_t12, _r272_tag13, _r272_t14, _r272_tag15, _r272_t16, _r272_tag17, _r272_t18, _r272_tag19, _r272_t20, _r272_tag21, _r272_t22, _r272_tag23, _r272_t24, _r272_tag25;
        var _r272_t0 = r272_xn$Capture$2Lrc8;
        var r272_xn$createAndSaveGlyphImpl$2Lrc3c = _r272_t0['$createAndSaveGlyphImpl$'];
        var r272_xn$NamedParameterPair$2Lrc9b = _r272_t0['$NamedParameterPair$'];
        var r272_xn$assignUnicodeImpl$2Lrc8b = _r272_t0['$assignUnicodeImpl$'];
        var r272_xn$execState$2Lrc0b = _r272_t0['$execState$'];
        var r272_AS_BASE = _r272_t0.AS_BASE;
        var r272_ALSO_METRICS = _r272_t0.ALSO_METRICS;
        var _r272_t1 = r272_xn$Capture$2Lrc8.Metrics;
        var r272_Width = _r272_t1.Width;
        var r272_SB = _r272_t1.SB;
        var r272_SymbolMid = _r272_t1.SymbolMid;
        var r272_ParenTop = _r272_t1.ParenTop;
        var r272_ParenBot = _r272_t1.ParenBot;
        var r272_BgOpTop = _r272_t1.BgOpTop;
        var r272_BgOpBot = _r272_t1.BgOpBot;
        var r272_Translate = _r272_t1.Translate;
        var r272_HVContrast = _r272_t1.HVContrast;
        var r272_O = _r272_t1.O;
        var r272_Stroke = _r272_t1.Stroke;
        var r272_HalfStroke = _r272_t1.HalfStroke;
        var r272_RightSB = _r272_t1.RightSB;
        var r272_Middle = _r272_t1.Middle;
        var r272_DotRadius = _r272_t1.DotRadius;
        var r272_AdviceStroke = _r272_t1.AdviceStroke;
        var r272_OperatorStroke = _r272_t1.OperatorStroke;
        var _r272_t2 = r272_xn$Capture$2Lrc8.SpiroFns;
        var r272_corner = _r272_t2.corner;
        var r272_widths = _r272_t2.widths;
        var r272_dispiro = _r272_t2.dispiro;
        var _r272_t3 = r272_xn$Capture$2Lrc8.BooleFns;
        var r272_union = _r272_t3.union;
        var r272_intersection = _r272_t3.intersection;
        var r272_difference = _r272_t3.difference;
        var _r272_t4 = r272_xn$Capture$2Lrc8.CommonShapes.resolve();
        var r272_xn$noshape$3cah = _r272_t4['no-shape'];
        var r272_Rect = _r272_t4.Rect;
        var r272_HBar = _r272_t4.HBar;
        var r272_VBar = _r272_t4.VBar;
        var r272_MaskAbove = _r272_t4.MaskAbove;
        var r272_MaskBelow = _r272_t4.MaskBelow;
        var r272_MaskLeftLine = _r272_t4.MaskLeftLine;
        var r272_MaskRightLine = _r272_t4.MaskRightLine;
        var r272_DotVariants = _r272_t4.DotVariants;
        var _r272_t5 = r272_xn$Capture$2Lrc8['Common-Derivatives'].resolve();
        var r272_xn$selectvariant$7Hrq = _r272_t5['select-variant'];
        var r272_xn$referglyph$1aao = _r272_t5['refer-glyph'];
        var r272_xn$queryglyph$1aao = _r272_t5['query-glyph'];
        var r272_xn$deriveglyphs$7Hrq = _r272_t5['derive-glyphs'];
        var r272_xn$derivemultipartglyphs$7Hrq65 = _r272_t5['derive-multi-part-glyphs'];
        var _r272_t6 = r272_xn$Capture$2Lrc8['Symbol-Math-Relation-Common'].resolve();
        var r272_LessSlope = _r272_t6.LessSlope;
        var r272_EqualHalfSpace = _r272_t6.EqualHalfSpace;
        var r272_EqualHoleWidth = _r272_t6.EqualHoleWidth;
        var _r272_t7 = r272_xn$Capture$2Lrc8['Symbol-Math-Relation-Equal'].resolve();
        var r272_EqualShape = _r272_t7.EqualShape;
        var r272_EqualHole = _r272_t7.EqualHole;
        var r272_IdentShape = _r272_t7.IdentShape;
        var r272_IdentHole = _r272_t7.IdentHole;
        var r272_arrowheadsKern = 2 / 3 * r1_clamp(0, r272_Width * 0.4, r272_Width - r272_OperatorStroke * 3);
        var r272_SetJoiningKind = function (r277_lk, r277_rk) {
            var _r277_t0, _r277_t1;
            return function () {
                var _r279_t1;
                var _r279_t0 = this;
                var r279_currentGlyph = _r279_t0;
                var r279_k = 0;
                if (r277_lk !== 'f')
                    r279_k = r279_k + r1_Joining.Classes.Left;
                if (r277_rk !== 'f')
                    r279_k = r279_k + r1_Joining.Classes.Right;
                r1_Joining.set(r279_currentGlyph, r279_k);
                return void 0;
            };
        };
        var r272_RodBarHGap = Math.max(r272_Width / 8, r272_AdviceStroke(6));
        var r272_RodBarHOffset = 0.5 * r272_Width - r272_HalfStroke * r272_HVContrast - r272_RodBarHGap;
        var r272_arrowheadSlope = 1 / r272_LessSlope;
        var r272_arrowExtend = r1_clamp(0, r272_Width, r272_RightSB - 0.5 * r272_OperatorStroke * r272_arrowheadSlope);
        var r272_arrowJ = r1_clamp(0, r272_Width, r272_SB + 0.5 * r272_OperatorStroke * r272_arrowheadSlope);
        var r272_dblExtend = r1_clamp(0, r272_Width, r272_RightSB - r272_EqualHalfSpace * r272_arrowheadSlope);
        var r272_dblArrowJ = r1_clamp(0, r272_Width, r272_SB + r272_EqualHalfSpace * r272_arrowheadSlope);
        (function () {
            var r281_prefix, r281_Shape, r281_Notch, r281_extend, r281_kern, r281_join, r281_fDB, _r281_t2, _r281_t4, _r281_t5, _r281_tag6;
            var r281_ArrowBarConfig = function (r282_extend, r282_kern, r282_join, r282_doubleBar) {
                var r282_l, r282_r, _r282_t3, _r282_t4, _r282_t5, _r282_t6, _r282_t7;
                var r282_cleft = r272_O;
                var r282_cright = r272_Width - r272_O;
                var r282_arrowr = r282_doubleBar ? r272_Width + r272_SB + r272_OperatorStroke * r272_HVContrast : r272_Width + r282_extend;
                var r282_arrowl = r282_doubleBar ? -r272_Width + r272_RightSB - r272_OperatorStroke * r272_HVContrast : 0 - r282_extend;
                var r282_zleft = r282_cleft - r272_Width + r272_RightSB;
                var r282_zright = r282_cright + r272_SB;
                var r282_lk = {
                    'x': r272_SB - r272_Width,
                    'y': -r282_join - r272_Width,
                    'f': r272_SB,
                    'p': r282_arrowl + r272_Width,
                    'l': r282_arrowl,
                    'l1': r282_arrowl - r282_kern,
                    'c': r282_cleft,
                    'm': 0 - r272_RodBarHOffset,
                    'j': -r282_join,
                    'j1': -r282_join - r282_kern,
                    'z': r282_zleft,
                    'lx': r1_mix(r282_arrowl, 0, 0.5)
                };
                var r282_rk = {
                    'x': r272_RightSB + r272_Width,
                    'y': 2 * r272_Width + r282_join,
                    'f': r272_RightSB,
                    'p': r282_arrowr - r272_Width,
                    'r': r282_arrowr,
                    'r1': r282_arrowr + r282_kern,
                    'c': r282_cright,
                    'm': r272_Width + r272_RodBarHOffset,
                    'j': r272_Width + r282_join,
                    'j1': r272_Width + r282_join + r282_kern,
                    'z': r282_zright
                };
                var r282_result = [];
                var _r282_t0 = Object.keys(r282_lk);
                var _r282_t1 = _r282_t0.length;
                var _r282_t2 = 0;
                while (_r282_t2 < _r282_t1) {
                    r282_l = _r282_t0[_r282_t2];
                    _r282_t3 = Object.keys(r282_rk);
                    _r282_t4 = _r282_t3.length;
                    _r282_t5 = 0;
                    while (_r282_t5 < _r282_t4) {
                        r282_r = _r282_t3[_r282_t5];
                        r282_result.push([
                            r282_l,
                            r282_r,
                            r282_lk[r282_l],
                            r282_rk[r282_r]
                        ]);
                        _r282_t5 = _r282_t5 + 1;
                    }
                    _r282_t2 = _r282_t2 + 1;
                }
                return r282_result;
            };
            var r281_HyphenShape = function (r287_l, r287_r) {
                var _r287_t0, _r287_t1;
                return r272_HBar.m(r287_l, r287_r, r272_SymbolMid, r272_OperatorStroke);
            };
            var r281_HyphenNotch = function (r288_x) {
                var _r288_t0, _r288_t1;
                return r272_union(r272_VBar.m(r288_x, r272_SymbolMid + r272_OperatorStroke / 3, r272_SymbolMid + r272_OperatorStroke, r272_EqualHoleWidth), r272_VBar.m(r288_x, r272_SymbolMid - r272_OperatorStroke / 3, r272_SymbolMid - r272_OperatorStroke, r272_EqualHoleWidth));
            };
            var r281_Shapes = {
                'hyphen': [
                    r281_HyphenShape,
                    r281_HyphenNotch,
                    [
                        r272_arrowExtend,
                        r272_arrowheadsKern,
                        r272_arrowJ,
                        0
                    ]
                ],
                'equal': [
                    r272_EqualShape,
                    r272_EqualHole,
                    [
                        r272_dblExtend,
                        r272_arrowheadsKern,
                        r272_dblArrowJ,
                        1
                    ]
                ],
                'ident': [
                    r272_IdentShape,
                    r272_IdentHole,
                    [
                        r272_dblExtend,
                        r272_arrowheadsKern,
                        r272_dblArrowJ,
                        1
                    ]
                ]
            };
            var r281_NotchConfig = {
                'withoutNotch': [false],
                'withNotch': [true]
            };
            var _r281_t0 = Object.entries(r281_Shapes)[Symbol.iterator]();
            var _r281_t1 = void 0;
            var _r281_t3 = !(_r281_t1 = _r281_t0.next()).done;
            while (_r281_t3) {
                _r281_t2 = _r281_t1.value;
                r281_prefix = _r281_t2[0];
                r281_Shape = _r281_t2[1][0];
                r281_Notch = _r281_t2[1][1];
                r281_extend = _r281_t2[1][2][0];
                r281_kern = _r281_t2[1][2][1];
                r281_join = _r281_t2[1][2][2];
                r281_fDB = _r281_t2[1][2][3];
                _r281_t2[1][2];
                _r281_t2[1];
                _r281_t4 = function () {
                    var r291_lS, r291_rS, r291_left, r291_right, _r291_t3, _r291_t5, _r291_t6, _r291_tag7;
                    var _r291_t0 = r281_ArrowBarConfig(r281_extend, r281_kern, r281_join, r281_fDB);
                    var _r291_t1 = _r291_t0.length;
                    var _r291_t2 = 0;
                    var _r291_t4 = _r291_t2 < _r291_t1;
                    while (_r291_t4) {
                        _r291_t3 = _r291_t0[_r291_t2];
                        r291_lS = _r291_t3[0];
                        r291_rS = _r291_t3[1];
                        r291_left = _r291_t3[2];
                        r291_right = _r291_t3[3];
                        (function () {
                            var r294_suffix, r294_fNotch, _r294_t2, _r294_t3, _r294_tag4;
                            var _r294_t0 = Object.entries(r281_NotchConfig)[Symbol.iterator]();
                            var _r294_t1 = void 0;
                            while (!(_r294_t1 = _r294_t0.next()).done) {
                                _r294_t2 = _r294_t1.value;
                                r294_suffix = _r294_t2[0];
                                r294_fNotch = _r294_t2[1][0];
                                _r294_t2[1];
                                (function () {
                                    return r272_xn$createAndSaveGlyphImpl$2Lrc3c('' + r281_prefix + '.lig.' + r291_lS + '' + r291_rS + '.' + r294_suffix, null, function () {
                                        var _r300_t1;
                                        var _r300_t0 = this;
                                        var r300_currentGlyph = _r300_t0;
                                        r300_currentGlyph.include(r272_SetJoiningKind(r291_lS, r291_rS));
                                        r300_currentGlyph.include(r272_difference(r281_Shape(r291_left, r291_right), r294_fNotch && r291_left < r272_SB - r272_Width ? r281_Notch(-r272_Width) : r272_xn$noshape$3cah(), r294_fNotch && r291_left < r272_SB ? r281_Notch(0) : r272_xn$noshape$3cah(), r294_fNotch && r291_right > r272_RightSB ? r281_Notch(r272_Width) : r272_xn$noshape$3cah(), r294_fNotch && r291_right > r272_RightSB + r272_Width ? r281_Notch(2 * r272_Width) : r272_xn$noshape$3cah()));
                                        return void 0;
                                    });
                                }());
                            }
                            r272_xn$selectvariant$7Hrq('' + r281_prefix + '.lig.' + r291_lS + '' + r291_rS, new r272_xn$NamedParameterPair$2Lrc9b('follow', 'lig-' + r281_prefix));
                            return r272_xn$selectvariant$7Hrq('' + r281_prefix + '.arrowBar.' + r291_lS + '' + r291_rS, new r272_xn$NamedParameterPair$2Lrc9b('follow', 'lig-arrowBar-' + r281_prefix), new r272_xn$NamedParameterPair$2Lrc9b('shapeFrom', '' + r281_prefix + '.lig.' + r291_lS + '' + r291_rS));
                        }());
                        _r291_t5 = _r291_t2 = _r291_t2 + 1;
                        _r291_t4 = _r291_t2 < _r291_t1;
                    }
                    return _r291_t5;
                }();
                _r281_t3 = !(_r281_t1 = _r281_t0.next()).done;
            }
            return _r281_t4;
        }());
        (function () {
            var r307_lS, r307_rS, _r307_t4, _r307_t5, _r307_t6, _r307_t8;
            var _r307_t0 = r272_xn$Capture$2Lrc8['Shared-Symbol-Shapes'].resolve();
            var r307_CreateWaveShape = _r307_t0.CreateWaveShape;
            var r307_WaveShape = r307_CreateWaveShape(r272_EqualHalfSpace + 0.5 * r272_OperatorStroke, r272_OperatorStroke, -1 / 4);
            var r307_LR = 2 / 32;
            var r307_LR1 = 9 / 32;
            var r307_Z = 1 / 4;
            var r307_F = -1 / 4;
            var r307_C = 0;
            var r307_J = -1 / 8;
            var r307_lk = {
                'l': [
                    r307_LR,
                    -r272_arrowExtend,
                    false
                ],
                'l1': [
                    r307_LR1,
                    -r272_arrowExtend - r272_arrowheadsKern,
                    false
                ],
                'f': [
                    r307_F,
                    void 0,
                    false
                ],
                'z': [
                    r307_Z,
                    void 0,
                    false
                ],
                'c': [
                    r307_C,
                    void 0,
                    false
                ],
                'm': [
                    r307_J,
                    0 - r272_RodBarHOffset,
                    true
                ],
                'j': [
                    r307_J,
                    -r272_arrowJ,
                    true
                ],
                'j1': [
                    r307_J,
                    -r272_arrowJ - r272_arrowheadsKern,
                    true
                ]
            };
            var r307_rk = {
                'r': [
                    r307_LR,
                    r272_Width + r272_arrowExtend,
                    false
                ],
                'r1': [
                    r307_LR1,
                    r272_Width + r272_arrowExtend + r272_arrowheadsKern,
                    false
                ],
                'f': [
                    r307_F,
                    void 0,
                    false
                ],
                'z': [
                    r307_Z,
                    void 0,
                    false
                ],
                'c': [
                    r307_C,
                    void 0,
                    false
                ],
                'm': [
                    r307_J,
                    r272_Width + r272_RodBarHOffset,
                    true
                ],
                'j': [
                    r307_J,
                    r272_Width + r272_arrowJ,
                    true
                ],
                'j1': [
                    r307_J,
                    r272_Width + r272_arrowJ + r272_arrowheadsKern,
                    true
                ]
            };
            var _r307_t1 = Object.keys(r307_lk);
            var _r307_t2 = _r307_t1.length;
            var _r307_t3 = 0;
            var _r307_t7 = _r307_t3 < _r307_t2;
            while (_r307_t7) {
                r307_lS = _r307_t1[_r307_t3];
                _r307_t4 = Object.keys(r307_rk);
                _r307_t5 = _r307_t4.length;
                _r307_t6 = 0;
                while (_r307_t6 < _r307_t5) {
                    r307_rS = _r307_t4[_r307_t6];
                    r272_xn$createAndSaveGlyphImpl$2Lrc3c('wave.lig.' + r307_lS + '' + r307_rS, null, function () {
                        var _r315_t3;
                        var _r315_t2 = this;
                        var r315_currentGlyph = _r315_t2;
                        r315_currentGlyph.include(r272_SetJoiningKind(r307_lS, r307_rS));
                        var _r315_t0 = r307_lk[r307_lS];
                        var r315_tL = _r315_t0[0];
                        var r315_jL = _r315_t0[1];
                        var r315_djL = _r315_t0[2];
                        var _r315_t1 = r307_rk[r307_rS];
                        var r315_tR = _r315_t1[0];
                        var r315_jR = _r315_t1[1];
                        var r315_djR = _r315_t1[2];
                        r315_currentGlyph.include(r307_WaveShape(new r272_xn$NamedParameterPair$2Lrc9b('left', r315_tL), new r272_xn$NamedParameterPair$2Lrc9b('right', r315_tR), new r272_xn$NamedParameterPair$2Lrc9b('xsJoin', r315_jL), new r272_xn$NamedParameterPair$2Lrc9b('xfJoin', r315_jR), new r272_xn$NamedParameterPair$2Lrc9b('diagJoinS', r315_djL), new r272_xn$NamedParameterPair$2Lrc9b('diagJoinF', r315_djR)));
                        return void 0;
                    });
                    _r307_t6 = _r307_t6 + 1;
                }
                _r307_t8 = _r307_t3 = _r307_t3 + 1;
                _r307_t7 = _r307_t3 < _r307_t2;
            }
            return _r307_t8;
        }());
        (function () {
            var _r325_t0 = r272_xn$Capture$2Lrc8['Symbol-Math-Relation-Common'].resolve();
            var r325_dH = _r325_t0.dH;
            var _r325_t1 = r272_xn$Capture$2Lrc8['Symbol-Math-Relation-Inequality'].resolve();
            var r325_LigationLessShape = _r325_t1.LigationLessShape;
            var r325_LigationGreaterShape = _r325_t1.LigationGreaterShape;
            r272_xn$createAndSaveGlyphImpl$2Lrc3c('less.lig.dblhead', null, function () {
                var _r330_t1;
                var _r330_t0 = this;
                var r330_currentGlyph = _r330_t0;
                r1_Joining.set(r330_currentGlyph, r1_Joining.Classes.Right);
                r330_currentGlyph.include(r325_LigationLessShape(r272_SymbolMid + r325_dH, r272_SymbolMid - r325_dH, r272_SB, r272_RightSB, r272_OperatorStroke, r272_OperatorStroke, 2 * r272_EqualHalfSpace));
                r272_xn$createAndSaveGlyphImpl$2Lrc3c('less.lig.dblhead.mid', null, function () {
                    var _r334_t1;
                    var _r334_t0 = this;
                    _r334_t0.include(r330_currentGlyph, true, true);
                    return _r334_t0.cloneRankFromGlyph(r330_currentGlyph);
                });
                r272_xn$createAndSaveGlyphImpl$2Lrc3c('less.lig.dblhead.shift1', null, function () {
                    var _r337_t1;
                    var _r337_t0 = this;
                    _r337_t0.include(r330_currentGlyph, true, true);
                    _r337_t0.cloneRankFromGlyph(r330_currentGlyph);
                    return _r337_t0.include(function () {
                        var _r339_t1;
                        var _r339_t0 = this;
                        var r339_currentGlyph = _r339_t0;
                        r1_Joining.set(r339_currentGlyph, r1_Joining.Classes.Mid);
                        r339_currentGlyph.include(r272_Translate(-r272_arrowheadsKern, 0));
                        return void 0;
                    });
                });
                return void 0;
            });
            r272_xn$createAndSaveGlyphImpl$2Lrc3c('greater.lig.dblhead', null, function () {
                var _r343_t1;
                var _r343_t0 = this;
                var r343_currentGlyph = _r343_t0;
                r1_Joining.set(r343_currentGlyph, r1_Joining.Classes.Left);
                r343_currentGlyph.include(r325_LigationGreaterShape(r272_SymbolMid + r325_dH, r272_SymbolMid - r325_dH, r272_SB, r272_RightSB, r272_OperatorStroke, r272_OperatorStroke, 2 * r272_EqualHalfSpace));
                r272_xn$createAndSaveGlyphImpl$2Lrc3c('greater.lig.dblhead.mid', null, function () {
                    var _r347_t1;
                    var _r347_t0 = this;
                    _r347_t0.include(r343_currentGlyph, true, true);
                    return _r347_t0.cloneRankFromGlyph(r343_currentGlyph);
                });
                r272_xn$createAndSaveGlyphImpl$2Lrc3c('greater.lig.dblhead.shift1', null, function () {
                    var _r350_t1;
                    var _r350_t0 = this;
                    _r350_t0.include(r343_currentGlyph, true, true);
                    _r350_t0.cloneRankFromGlyph(r343_currentGlyph);
                    return _r350_t0.include(function () {
                        var _r352_t1;
                        var _r352_t0 = this;
                        var r352_currentGlyph = _r352_t0;
                        r1_Joining.set(r352_currentGlyph, r1_Joining.Classes.Mid);
                        r352_currentGlyph.include(r272_Translate(+r272_arrowheadsKern, 0));
                        return void 0;
                    });
                });
                return void 0;
            });
            r272_xn$deriveglyphs$7Hrq('exclam.lig.htmlcommentstart', null, 'exclam', function (r354_src, r354_gr) {
                var _r354_t0, _r354_t1;
                return function () {
                    var _r356_t1;
                    var _r356_t0 = this;
                    var r356_currentGlyph = _r356_t0;
                    r1_Joining.set(r356_currentGlyph, r1_Joining.Classes.Mid);
                    r356_currentGlyph.include(r272_xn$referglyph$1aao(r354_src));
                    r356_currentGlyph.include(r272_Translate((r272_RightSB - r272_Width + (r272_Width - r272_arrowExtend / 2)) / 2 - r272_Middle, 0));
                    r356_currentGlyph.include(r272_HBar.m(-r272_arrowExtend, r272_RightSB - r272_Width, r272_SymbolMid, r272_OperatorStroke));
                    return void 0;
                };
            });
            var r325_ArrowShiftTranslate = function (r360_k) {
                var _r360_t0, _r360_t1;
                return function () {
                    var _r362_t1;
                    var _r362_t0 = this;
                    var r362_currentGlyph = _r362_t0;
                    r362_currentGlyph.include(r272_Translate(r272_arrowheadsKern * r360_k, 0));
                    if (r360_k > 0)
                        r1_Joining.set(r362_currentGlyph, r1_Joining.Classes.Right);
                    if (r360_k < 0)
                        r1_Joining.set(r362_currentGlyph, r1_Joining.Classes.Left);
                    return void 0;
                };
            };
            r272_xn$createAndSaveGlyphImpl$2Lrc3c('greater.lig.shift0', null, function () {
                var _r366_t1;
                var _r366_t0 = this;
                var r366_currentGlyph = _r366_t0;
                r366_currentGlyph.include(r272_xn$referglyph$1aao('greater'), r272_AS_BASE, r272_ALSO_METRICS);
                r272_xn$createAndSaveGlyphImpl$2Lrc3c('greater.lig.shift0.head', null, function () {
                    var _r370_t1;
                    var _r370_t0 = this;
                    _r370_t0.include(r366_currentGlyph, true, true);
                    return _r370_t0.cloneRankFromGlyph(r366_currentGlyph);
                });
                r272_xn$createAndSaveGlyphImpl$2Lrc3c('greater.lig.shift0.mid', null, function () {
                    var _r373_t1;
                    var _r373_t0 = this;
                    _r373_t0.include(r366_currentGlyph, true, true);
                    return _r373_t0.cloneRankFromGlyph(r366_currentGlyph);
                });
                r272_xn$createAndSaveGlyphImpl$2Lrc3c('greater.lig.shift0.anti', null, function () {
                    var _r376_t1;
                    var _r376_t0 = this;
                    _r376_t0.include(r366_currentGlyph, true, true);
                    return _r376_t0.cloneRankFromGlyph(r366_currentGlyph);
                });
                r272_xn$createAndSaveGlyphImpl$2Lrc3c('greater.lig.shiftN0', null, function () {
                    var _r379_t1;
                    var _r379_t0 = this;
                    _r379_t0.include(r366_currentGlyph, true, true);
                    return _r379_t0.cloneRankFromGlyph(r366_currentGlyph);
                });
                r272_xn$createAndSaveGlyphImpl$2Lrc3c('greater.lig.shiftN0.mid', null, function () {
                    var _r382_t1;
                    var _r382_t0 = this;
                    _r382_t0.include(r366_currentGlyph, true, true);
                    return _r382_t0.cloneRankFromGlyph(r366_currentGlyph);
                });
                r272_xn$createAndSaveGlyphImpl$2Lrc3c('greater.lig.shift0h', null, function () {
                    var _r385_t1;
                    var _r385_t0 = this;
                    _r385_t0.include(r366_currentGlyph, true, true);
                    _r385_t0.cloneRankFromGlyph(r366_currentGlyph);
                    return _r385_t0.include(r325_ArrowShiftTranslate(0.5));
                });
                r272_xn$createAndSaveGlyphImpl$2Lrc3c('greater.lig.shift1', null, function () {
                    var _r388_t1;
                    var _r388_t0 = this;
                    _r388_t0.include(r366_currentGlyph, true, true);
                    _r388_t0.cloneRankFromGlyph(r366_currentGlyph);
                    return _r388_t0.include(r325_ArrowShiftTranslate(1));
                });
                r272_xn$createAndSaveGlyphImpl$2Lrc3c('greater.lig.shift1.head', null, function () {
                    var _r391_t1;
                    var _r391_t0 = this;
                    _r391_t0.include(r366_currentGlyph, true, true);
                    _r391_t0.cloneRankFromGlyph(r366_currentGlyph);
                    return _r391_t0.include(r325_ArrowShiftTranslate(1));
                });
                r272_xn$createAndSaveGlyphImpl$2Lrc3c('greater.lig.shift1h', null, function () {
                    var _r394_t1;
                    var _r394_t0 = this;
                    _r394_t0.include(r366_currentGlyph, true, true);
                    _r394_t0.cloneRankFromGlyph(r366_currentGlyph);
                    return _r394_t0.include(r325_ArrowShiftTranslate(1.5));
                });
                r272_xn$createAndSaveGlyphImpl$2Lrc3c('greater.lig.shift2', null, function () {
                    var _r397_t1;
                    var _r397_t0 = this;
                    _r397_t0.include(r366_currentGlyph, true, true);
                    _r397_t0.cloneRankFromGlyph(r366_currentGlyph);
                    return _r397_t0.include(r325_ArrowShiftTranslate(2));
                });
                r272_xn$createAndSaveGlyphImpl$2Lrc3c('greater.lig.shiftN0h', null, function () {
                    var _r400_t1;
                    var _r400_t0 = this;
                    _r400_t0.include(r366_currentGlyph, true, true);
                    _r400_t0.cloneRankFromGlyph(r366_currentGlyph);
                    return _r400_t0.include(r325_ArrowShiftTranslate(-0.5));
                });
                r272_xn$createAndSaveGlyphImpl$2Lrc3c('greater.lig.shiftN1', null, function () {
                    var _r403_t1;
                    var _r403_t0 = this;
                    _r403_t0.include(r366_currentGlyph, true, true);
                    _r403_t0.cloneRankFromGlyph(r366_currentGlyph);
                    return _r403_t0.include(r325_ArrowShiftTranslate(-1));
                });
                r272_xn$createAndSaveGlyphImpl$2Lrc3c('greater.lig.shiftN1.anti', null, function () {
                    var _r406_t1;
                    var _r406_t0 = this;
                    _r406_t0.include(r366_currentGlyph, true, true);
                    _r406_t0.cloneRankFromGlyph(r366_currentGlyph);
                    return _r406_t0.include(r325_ArrowShiftTranslate(-1));
                });
                r272_xn$createAndSaveGlyphImpl$2Lrc3c('greater.lig.shiftN1h', null, function () {
                    var _r409_t1;
                    var _r409_t0 = this;
                    _r409_t0.include(r366_currentGlyph, true, true);
                    _r409_t0.cloneRankFromGlyph(r366_currentGlyph);
                    return _r409_t0.include(r325_ArrowShiftTranslate(-1.5));
                });
                r272_xn$createAndSaveGlyphImpl$2Lrc3c('greater.lig.shiftN2', null, function () {
                    var _r412_t1;
                    var _r412_t0 = this;
                    _r412_t0.include(r366_currentGlyph, true, true);
                    _r412_t0.cloneRankFromGlyph(r366_currentGlyph);
                    return _r412_t0.include(r325_ArrowShiftTranslate(-2));
                });
                return void 0;
            });
            r272_xn$createAndSaveGlyphImpl$2Lrc3c('less.lig.shift0', null, function () {
                var _r415_t1;
                var _r415_t0 = this;
                var r415_currentGlyph = _r415_t0;
                r415_currentGlyph.include(r272_xn$referglyph$1aao('less'), r272_AS_BASE, r272_ALSO_METRICS);
                r272_xn$createAndSaveGlyphImpl$2Lrc3c('less.lig.shift0.head', null, function () {
                    var _r419_t1;
                    var _r419_t0 = this;
                    _r419_t0.include(r415_currentGlyph, true, true);
                    return _r419_t0.cloneRankFromGlyph(r415_currentGlyph);
                });
                r272_xn$createAndSaveGlyphImpl$2Lrc3c('less.lig.shift0.mid', null, function () {
                    var _r422_t1;
                    var _r422_t0 = this;
                    _r422_t0.include(r415_currentGlyph, true, true);
                    return _r422_t0.cloneRankFromGlyph(r415_currentGlyph);
                });
                r272_xn$createAndSaveGlyphImpl$2Lrc3c('less.lig.shift0.anti', null, function () {
                    var _r425_t1;
                    var _r425_t0 = this;
                    _r425_t0.include(r415_currentGlyph, true, true);
                    return _r425_t0.cloneRankFromGlyph(r415_currentGlyph);
                });
                r272_xn$createAndSaveGlyphImpl$2Lrc3c('less.lig.shiftN0', null, function () {
                    var _r428_t1;
                    var _r428_t0 = this;
                    _r428_t0.include(r415_currentGlyph, true, true);
                    return _r428_t0.cloneRankFromGlyph(r415_currentGlyph);
                });
                r272_xn$createAndSaveGlyphImpl$2Lrc3c('less.lig.shiftN0.mid', null, function () {
                    var _r431_t1;
                    var _r431_t0 = this;
                    _r431_t0.include(r415_currentGlyph, true, true);
                    return _r431_t0.cloneRankFromGlyph(r415_currentGlyph);
                });
                r272_xn$createAndSaveGlyphImpl$2Lrc3c('less.lig.shift0h', null, function () {
                    var _r434_t1;
                    var _r434_t0 = this;
                    _r434_t0.include(r415_currentGlyph, true, true);
                    _r434_t0.cloneRankFromGlyph(r415_currentGlyph);
                    return _r434_t0.include(r325_ArrowShiftTranslate(-0.5));
                });
                r272_xn$createAndSaveGlyphImpl$2Lrc3c('less.lig.shift1', null, function () {
                    var _r437_t1;
                    var _r437_t0 = this;
                    _r437_t0.include(r415_currentGlyph, true, true);
                    _r437_t0.cloneRankFromGlyph(r415_currentGlyph);
                    return _r437_t0.include(r325_ArrowShiftTranslate(-1));
                });
                r272_xn$createAndSaveGlyphImpl$2Lrc3c('less.lig.shift1.head', null, function () {
                    var _r440_t1;
                    var _r440_t0 = this;
                    _r440_t0.include(r415_currentGlyph, true, true);
                    _r440_t0.cloneRankFromGlyph(r415_currentGlyph);
                    return _r440_t0.include(r325_ArrowShiftTranslate(-1));
                });
                r272_xn$createAndSaveGlyphImpl$2Lrc3c('less.lig.shift1h', null, function () {
                    var _r443_t1;
                    var _r443_t0 = this;
                    _r443_t0.include(r415_currentGlyph, true, true);
                    _r443_t0.cloneRankFromGlyph(r415_currentGlyph);
                    return _r443_t0.include(r325_ArrowShiftTranslate(-1.5));
                });
                r272_xn$createAndSaveGlyphImpl$2Lrc3c('less.lig.shift2', null, function () {
                    var _r446_t1;
                    var _r446_t0 = this;
                    _r446_t0.include(r415_currentGlyph, true, true);
                    _r446_t0.cloneRankFromGlyph(r415_currentGlyph);
                    return _r446_t0.include(r325_ArrowShiftTranslate(-2));
                });
                r272_xn$createAndSaveGlyphImpl$2Lrc3c('less.lig.shiftN0h', null, function () {
                    var _r449_t1;
                    var _r449_t0 = this;
                    _r449_t0.include(r415_currentGlyph, true, true);
                    _r449_t0.cloneRankFromGlyph(r415_currentGlyph);
                    return _r449_t0.include(r325_ArrowShiftTranslate(0.5));
                });
                r272_xn$createAndSaveGlyphImpl$2Lrc3c('less.lig.shiftN1', null, function () {
                    var _r452_t1;
                    var _r452_t0 = this;
                    _r452_t0.include(r415_currentGlyph, true, true);
                    _r452_t0.cloneRankFromGlyph(r415_currentGlyph);
                    return _r452_t0.include(r325_ArrowShiftTranslate(1));
                });
                r272_xn$createAndSaveGlyphImpl$2Lrc3c('less.lig.shiftN1.anti', null, function () {
                    var _r455_t1;
                    var _r455_t0 = this;
                    _r455_t0.include(r415_currentGlyph, true, true);
                    _r455_t0.cloneRankFromGlyph(r415_currentGlyph);
                    return _r455_t0.include(r325_ArrowShiftTranslate(1));
                });
                r272_xn$createAndSaveGlyphImpl$2Lrc3c('less.lig.shiftN1h', null, function () {
                    var _r458_t1;
                    var _r458_t0 = this;
                    _r458_t0.include(r415_currentGlyph, true, true);
                    _r458_t0.cloneRankFromGlyph(r415_currentGlyph);
                    return _r458_t0.include(r325_ArrowShiftTranslate(1.5));
                });
                r272_xn$createAndSaveGlyphImpl$2Lrc3c('less.lig.shiftN2', null, function () {
                    var _r461_t1;
                    var _r461_t0 = this;
                    _r461_t0.include(r415_currentGlyph, true, true);
                    _r461_t0.cloneRankFromGlyph(r415_currentGlyph);
                    return _r461_t0.include(r325_ArrowShiftTranslate(2));
                });
                return void 0;
            });
            var r325_ArrowHeadHole = function () {
                var _r462_t0, _r462_t1;
                return r272_Rect(r272_SymbolMid + r272_EqualHalfSpace - 0.5 * r272_OperatorStroke, r272_SymbolMid - r272_EqualHalfSpace + 0.5 * r272_OperatorStroke, -r272_Width, 2 * r272_Width);
            };
            r272_xn$createAndSaveGlyphImpl$2Lrc3c('less.lig.hole', null, function () {
                var _r465_t1;
                var _r465_t0 = this;
                var r465_currentGlyph = _r465_t0;
                r1_Joining.set(r465_currentGlyph, r1_Joining.Classes.Left);
                r465_currentGlyph.include(r272_difference(function () {
                    var _r468_t1;
                    var _r468_t0 = this;
                    var r468_currentGlyph = _r468_t0;
                    r468_currentGlyph.include(r272_xn$referglyph$1aao('less'));
                    return void 0;
                }, r325_ArrowHeadHole()));
                return void 0;
            });
            r272_xn$createAndSaveGlyphImpl$2Lrc3c('greater.lig.hole', null, function () {
                var _r472_t1;
                var _r472_t0 = this;
                var r472_currentGlyph = _r472_t0;
                r1_Joining.set(r472_currentGlyph, r1_Joining.Classes.Right);
                r472_currentGlyph.include(r272_difference(function () {
                    var _r475_t1;
                    var _r475_t0 = this;
                    var r475_currentGlyph = _r475_t0;
                    r475_currentGlyph.include(r272_xn$referglyph$1aao('greater'));
                    return void 0;
                }, r325_ArrowHeadHole()));
                return void 0;
            });
            r272_xn$createAndSaveGlyphImpl$2Lrc3c('less.lig.hole.shiftN1', null, function () {
                var _r479_t1;
                var _r479_t0 = this;
                var r479_currentGlyph = _r479_t0;
                r1_Joining.set(r479_currentGlyph, r1_Joining.Classes.Mid);
                r479_currentGlyph.include(r272_difference(function () {
                    var _r482_t1;
                    var _r482_t0 = this;
                    var r482_currentGlyph = _r482_t0;
                    r482_currentGlyph.include(r272_xn$referglyph$1aao('less.lig.shiftN1'));
                    return void 0;
                }, r325_ArrowHeadHole()));
                return void 0;
            });
            return r272_xn$createAndSaveGlyphImpl$2Lrc3c('greater.lig.hole.shiftN1', null, function () {
                var _r486_t1;
                var _r486_t0 = this;
                var r486_currentGlyph = _r486_t0;
                r1_Joining.set(r486_currentGlyph, r1_Joining.Classes.Mid);
                r486_currentGlyph.include(r272_difference(function () {
                    var _r489_t1;
                    var _r489_t0 = this;
                    var r489_currentGlyph = _r489_t0;
                    r489_currentGlyph.include(r272_xn$referglyph$1aao('greater.lig.shiftN1'));
                    return void 0;
                }, r325_ArrowHeadHole()));
                return void 0;
            });
        }());
        (function () {
            var r492_suffix, r492_yBar, _r492_t3, _r492_t4, _r492_tag5;
            var _r492_t0 = r272_xn$Capture$2Lrc8['Symbol-Punctuation-Dashes'].resolve();
            var r492_UnderScoreConfig = _r492_t0.UnderScoreConfig;
            var _r492_t1 = Object.entries(r492_UnderScoreConfig)[Symbol.iterator]();
            var _r492_t2 = void 0;
            while (!(_r492_t2 = _r492_t1.next()).done) {
                _r492_t3 = _r492_t2.value;
                r492_suffix = _r492_t3[0];
                r492_yBar = _r492_t3[1][0];
                _r492_t3[1];
                (function () {
                    r272_xn$createAndSaveGlyphImpl$2Lrc3c('underscore.lig.zf.' + r492_suffix, null, function () {
                        var _r499_t1;
                        var _r499_t0 = this;
                        var r499_currentGlyph = _r499_t0;
                        r1_Joining.set(r499_currentGlyph, r1_Joining.Classes.Left);
                        r499_currentGlyph.include(r272_HBar.b(r272_O - r272_SB, r272_RightSB, r492_yBar));
                        return void 0;
                    });
                    r272_xn$createAndSaveGlyphImpl$2Lrc3c('underscore.lig.fm.' + r492_suffix, null, function () {
                        var _r503_t1;
                        var _r503_t0 = this;
                        var r503_currentGlyph = _r503_t0;
                        r1_Joining.set(r503_currentGlyph, r1_Joining.Classes.Right);
                        r503_currentGlyph.include(r272_HBar.b(r272_SB, r272_Width + r272_RodBarHOffset, r492_yBar));
                        return void 0;
                    });
                    r272_xn$createAndSaveGlyphImpl$2Lrc3c('underscore.lig.mf.' + r492_suffix, null, function () {
                        var _r507_t1;
                        var _r507_t0 = this;
                        var r507_currentGlyph = _r507_t0;
                        r1_Joining.set(r507_currentGlyph, r1_Joining.Classes.Left);
                        r507_currentGlyph.include(r272_HBar.b(0 - r272_RodBarHOffset, r272_RightSB, r492_yBar));
                        return void 0;
                    });
                    return r272_xn$createAndSaveGlyphImpl$2Lrc3c('bar.lig.bottomMid.' + r492_suffix, null, r272_VBar.m(r272_Middle, r492_yBar, r272_ParenTop));
                }());
            }
            r272_xn$selectvariant$7Hrq('underscore.lig.zf', new r272_xn$NamedParameterPair$2Lrc9b('follow', 'underscore'));
            r272_xn$selectvariant$7Hrq('underscore.lig.fm', new r272_xn$NamedParameterPair$2Lrc9b('follow', 'underscore'));
            r272_xn$selectvariant$7Hrq('underscore.lig.mf', new r272_xn$NamedParameterPair$2Lrc9b('follow', 'underscore'));
            return r272_xn$selectvariant$7Hrq('bar.lig.bottomMid', new r272_xn$NamedParameterPair$2Lrc9b('follow', 'underscore'));
        }());
        (function () {
            var r515_suffix, r515_DrawAt, r515_kdr, r515_overshoot, r515_place, r515_shift, r515_joinCls, _r515_t2, _r515_t5, _r515_t6, _r515_tag7, _r515_t9, _r515_t10, _r515_tag11, _r515_t12, _r515_tag13;
            var r515_Neq = function () {
                var r518_Sw, r518_Dr, r518_DotGap, r518_PlacementSuffixes, r518_BarShapeSuffixes, r518_DependentGlyphBuilder;
                var r518_exports = {};
                r518_exports.Sw = r518_Sw = r272_OperatorStroke;
                r518_exports.Dr = r518_Dr = r518_Sw / r272_Stroke * r272_DotRadius;
                r518_exports.DotGap = r518_DotGap = Math.max((r272_ParenTop - r272_ParenBot) / 8, r272_AdviceStroke(5));
                r518_exports.PlacementSuffixes = r518_PlacementSuffixes = {
                    '1l': [
                        0,
                        r1_Joining.Classes.Right
                    ],
                    '2l': [
                        1,
                        r1_Joining.Classes.Right
                    ],
                    '3l': [
                        2,
                        r1_Joining.Classes.Right
                    ],
                    '4l': [
                        3,
                        r1_Joining.Classes.Right
                    ],
                    '1m': [
                        0,
                        r1_Joining.Classes.Mid
                    ],
                    '2m': [
                        1,
                        r1_Joining.Classes.Mid
                    ],
                    '3m': [
                        2,
                        r1_Joining.Classes.Mid
                    ],
                    '4m': [
                        3,
                        r1_Joining.Classes.Mid
                    ]
                };
                r518_exports.BarShapeSuffixes = r518_BarShapeSuffixes = {
                    'vertical': [
                        0,
                        false
                    ],
                    'slightlySlanted': [
                        0.375,
                        false
                    ],
                    'moreSlanted': [
                        0.75,
                        false
                    ],
                    'verticalDotted': [
                        0,
                        true
                    ],
                    'slightlySlantedDotted': [
                        0.375,
                        true
                    ],
                    'moreSlantedDotted': [
                        0.75,
                        true
                    ]
                };
                r518_exports.DependentGlyphBuilder = r518_DependentGlyphBuilder = function (r531_src) {
                    var _r531_t0, _r531_t1;
                    return function () {
                        var _r533_t2;
                        var _r533_t1 = this;
                        var r533_currentGlyph = _r533_t1;
                        var _r533_t0 = r531_src;
                        var r533_bar = _r533_t0[0];
                        var r533_dot = _r533_t0[1];
                        r533_currentGlyph.include(r272_xn$referglyph$1aao(r533_bar), r272_AS_BASE, r272_ALSO_METRICS);
                        var r533_dotted = r1_NeqLigationSlashDotted.get(r272_xn$queryglyph$1aao(r533_bar));
                        if (r533_dotted)
                            r533_currentGlyph.include(r272_xn$referglyph$1aao(r533_dot));
                        return void 0;
                    };
                };
                return r518_exports;
            }();
            var _r515_t0 = Object.entries(r272_DotVariants)[Symbol.iterator]();
            var _r515_t1 = void 0;
            while (!(_r515_t1 = _r515_t0.next()).done) {
                _r515_t2 = _r515_t1.value;
                r515_suffix = _r515_t2[0];
                r515_DrawAt = _r515_t2[1][0];
                r515_kdr = _r515_t2[1][1];
                r515_overshoot = _r515_t2[1][2];
                _r515_t2[1];
                (function () {
                    return r272_xn$createAndSaveGlyphImpl$2Lrc3c('neq/dotPart.' + r515_suffix, null, function () {
                        var _r541_t1;
                        var _r541_t0 = this;
                        var r541_currentGlyph = _r541_t0;
                        r541_currentGlyph.setWidth(0);
                        r541_currentGlyph.setMarkAnchor('cvDecompose', 0, 0);
                        r541_currentGlyph.include(r515_DrawAt(0, 0, r515_Neq.Dr - r515_overshoot));
                        return void 0;
                    });
                }());
            }
            r272_xn$selectvariant$7Hrq('neq/dotPart', new r272_xn$NamedParameterPair$2Lrc9b('follow', 'punctuationDot'));
            var _r515_t3 = Object.entries(r515_Neq.PlacementSuffixes)[Symbol.iterator]();
            var _r515_t4 = void 0;
            var _r515_t8 = !(_r515_t4 = _r515_t3.next()).done;
            while (_r515_t8) {
                _r515_t5 = _r515_t4.value;
                r515_place = _r515_t5[0];
                r515_shift = _r515_t5[1][0];
                r515_joinCls = _r515_t5[1][1];
                _r515_t5[1];
                _r515_t9 = function () {
                    var r548_barSuffix, r548_slope, r548_fDotted, _r548_t2, _r548_t3, _r548_tag4;
                    var _r548_t0 = Object.entries(r515_Neq.BarShapeSuffixes)[Symbol.iterator]();
                    var _r548_t1 = void 0;
                    while (!(_r548_t1 = _r548_t0.next()).done) {
                        _r548_t2 = _r548_t1.value;
                        r548_barSuffix = _r548_t2[0];
                        r548_slope = _r548_t2[1][0];
                        r548_fDotted = _r548_t2[1][1];
                        _r548_t2[1];
                        (function () {
                            return r272_xn$createAndSaveGlyphImpl$2Lrc3c('neq.' + r515_place + '/barPart.' + r548_barSuffix, null, function () {
                                var r554_yDotCenter, r554_xDotCenter, _r554_t1;
                                var _r554_t0 = this;
                                var r554_currentGlyph = _r554_t0;
                                var r554_yUp = r272_BgOpTop;
                                var r554_yDown = r272_BgOpBot + (r548_fDotted ? 2 * r515_Neq.Dr + r515_Neq.DotGap : 0);
                                var r554_xCenter = r272_Width * (1 / 2 + r515_shift / 2);
                                var r554_xUp = r554_xCenter + r548_slope * (r554_yUp - r272_SymbolMid);
                                var r554_xDown = r554_xCenter + r548_slope * (r554_yDown - r272_SymbolMid);
                                r554_currentGlyph.include(r272_dispiro(r272_widths.center(r515_Neq.Sw), r272_corner(r554_xUp, r554_yUp), r272_corner(r554_xDown, r554_yDown)));
                                if (r548_fDotted) {
                                    r1_NeqLigationSlashDotted.set(r554_currentGlyph);
                                    r554_yDotCenter = r272_BgOpBot + r515_Neq.Dr;
                                    r554_xDotCenter = r554_xCenter + r548_slope * (r554_yDotCenter - r272_SymbolMid);
                                    r554_currentGlyph.setBaseAnchor('cvDecompose', r554_xDotCenter, r554_yDotCenter);
                                }
                                return void 0;
                            });
                        }());
                    }
                    r272_xn$selectvariant$7Hrq('neq.allow-dot.' + r515_place + '/barPart', new r272_xn$NamedParameterPair$2Lrc9b('follow', 'neq.allow-dot'), new r272_xn$NamedParameterPair$2Lrc9b('shapeFrom', 'neq.' + r515_place + '/barPart'));
                    r272_xn$selectvariant$7Hrq('neq.bar-only.' + r515_place + '/barPart', new r272_xn$NamedParameterPair$2Lrc9b('follow', 'neq.bar-only'), new r272_xn$NamedParameterPair$2Lrc9b('shapeFrom', 'neq.' + r515_place + '/barPart'));
                    r272_xn$derivemultipartglyphs$7Hrq65('neq.allow-dot.' + r515_place, null, [
                        'neq.allow-dot.' + r515_place + '/barPart',
                        'neq/dotPart'
                    ], r515_Neq.DependentGlyphBuilder);
                    return r272_xn$derivemultipartglyphs$7Hrq65('neq.bar-only.' + r515_place, null, [
                        'neq.bar-only.' + r515_place + '/barPart',
                        'neq/dotPart'
                    ], r515_Neq.DependentGlyphBuilder);
                }();
                _r515_t8 = !(_r515_t4 = _r515_t3.next()).done;
            }
            return _r515_t9;
        }());
        (function () {
            var _r562_t0 = r272_xn$Capture$2Lrc8['Symbol-Math-Relation-Inequality'].resolve();
            var r562_LessShape = _r562_t0.LessShape;
            var r562_GreaterShape = _r562_t0.GreaterShape;
            var _r562_t1 = r272_xn$Capture$2Lrc8['Symbol-Punctuation-Slashes-And-Number-Sign'].resolve();
            var r562_slashDefautLeft = _r562_t1.slashDefautLeft;
            var r562_slashDefaultRight = _r562_t1.slashDefaultRight;
            var r562_koTriangle = 1 / 6;
            var r562_koTag = 0;
            var r562_kiShrunk = 0;
            var r562_kiExtend = 1;
            var r562_kiExtend2 = 2;
            var r562_trigLeft = function (r565_k) {
                var _r565_t0, _r565_t1;
                return r1_mix(r272_SB, r272_RightSB, r565_k);
            };
            var r562_trigRight = function (r566_k) {
                var _r566_t0, _r566_t1;
                return r1_mix(r272_RightSB, r272_Width * 1.5 - r272_OperatorStroke * 1.5 * r272_HVContrast, r566_k);
            };
            var r562_dHTriangle = function (r567_kOut, r567_kIn) {
                var _r567_t0, _r567_t1;
                return r272_LessSlope * (r562_trigRight(r567_kIn) - r562_trigLeft(r567_kOut));
            };
            var r562_TrigLeftShape = function (r568_kOut, r568_kIn, r568_shift) {
                var _r568_t0, _r568_t1;
                return r562_LessShape(r272_SymbolMid + r562_dHTriangle(r568_kOut, r568_kIn), r272_SymbolMid - r562_dHTriangle(r568_kOut, r568_kIn), r562_trigLeft(r568_kOut) + r568_shift, r562_trigRight(r568_kIn) + r568_shift);
            };
            var r562_TrigRightShape = function (r569_kOut, r569_kIn, r569_shift) {
                var _r569_t0, _r569_t1;
                return r562_GreaterShape(r272_SymbolMid + r562_dHTriangle(r569_kOut, r569_kIn), r272_SymbolMid - r562_dHTriangle(r569_kOut, r569_kIn), r272_Width - r562_trigRight(r569_kIn) + r569_shift, r272_Width - r562_trigLeft(r569_kOut) + r569_shift);
            };
            r272_xn$createAndSaveGlyphImpl$2Lrc3c('less.lig.trig', null, function () {
                var _r572_t1;
                var _r572_t0 = this;
                var r572_currentGlyph = _r572_t0;
                r1_Joining.set(r572_currentGlyph, r1_Joining.Classes.Right);
                r572_currentGlyph.include(r562_TrigLeftShape(r562_koTriangle, r562_kiExtend, 0));
                return void 0;
            });
            r272_xn$createAndSaveGlyphImpl$2Lrc3c('bar.lig.trig', null, function () {
                var _r576_t1;
                var _r576_t0 = this;
                var r576_currentGlyph = _r576_t0;
                r576_currentGlyph.include(r272_VBar.m(r272_Middle, r272_SymbolMid + r562_dHTriangle(r562_koTriangle, r562_kiExtend) + r272_OperatorStroke, r272_SymbolMid - r562_dHTriangle(r562_koTriangle, r562_kiExtend) - r272_OperatorStroke, r272_OperatorStroke));
                return void 0;
            });
            r272_xn$createAndSaveGlyphImpl$2Lrc3c('greater.lig.trig', null, function () {
                var _r580_t1;
                var _r580_t0 = this;
                var r580_currentGlyph = _r580_t0;
                r1_Joining.set(r580_currentGlyph, r1_Joining.Classes.Left);
                r580_currentGlyph.include(r562_TrigRightShape(r562_koTriangle, r562_kiExtend, 0));
                return void 0;
            });
            r272_xn$createAndSaveGlyphImpl$2Lrc3c('less.lig.diamond', null, function () {
                var _r584_t1;
                var _r584_t0 = this;
                var r584_currentGlyph = _r584_t0;
                r1_Joining.set(r584_currentGlyph, r1_Joining.Classes.Right);
                r584_currentGlyph.include(r272_intersection(r562_TrigLeftShape(r562_koTriangle, r562_kiExtend2, 0), r272_union(r272_Rect(r272_ParenTop, r272_ParenBot, 0, r272_Width), r562_TrigRightShape(r562_koTriangle, r562_kiExtend2, r272_Width))));
                return void 0;
            });
            r272_xn$createAndSaveGlyphImpl$2Lrc3c('greater.lig.diamond', null, function () {
                var _r588_t1;
                var _r588_t0 = this;
                var r588_currentGlyph = _r588_t0;
                r1_Joining.set(r588_currentGlyph, r1_Joining.Classes.Left);
                r588_currentGlyph.include(r272_intersection(r562_TrigRightShape(r562_koTriangle, r562_kiExtend2, 0), r272_union(r272_Rect(r272_ParenTop, r272_ParenBot, 0, r272_Width), r562_TrigLeftShape(r562_koTriangle, r562_kiExtend2, -r272_Width))));
                return void 0;
            });
            r272_xn$createAndSaveGlyphImpl$2Lrc3c('less.lig.diamond.tag', null, function () {
                var _r592_t1;
                var _r592_t0 = this;
                var r592_currentGlyph = _r592_t0;
                r1_Joining.set(r592_currentGlyph, r1_Joining.Classes.Right);
                r592_currentGlyph.include(r272_intersection(r562_TrigLeftShape(r562_koTag, r562_kiExtend2, 0), r272_union(r272_Rect(r272_ParenTop, r272_ParenBot, 0, r272_Width), r562_TrigRightShape(r562_koTag, r562_kiExtend2, r272_Width))));
                return void 0;
            });
            r272_xn$createAndSaveGlyphImpl$2Lrc3c('greater.lig.diamond.tag', null, function () {
                var _r596_t1;
                var _r596_t0 = this;
                var r596_currentGlyph = _r596_t0;
                r1_Joining.set(r596_currentGlyph, r1_Joining.Classes.Left);
                r596_currentGlyph.include(r272_intersection(r562_TrigRightShape(r562_koTag, r562_kiExtend2, 0), r272_union(r272_Rect(r272_ParenTop, r272_ParenBot, 0, r272_Width), r562_TrigLeftShape(r562_koTag, r562_kiExtend2, -r272_Width))));
                return void 0;
            });
            r272_xn$createAndSaveGlyphImpl$2Lrc3c('less.lig.tag-slash', null, function () {
                var _r600_t1;
                var _r600_t0 = this;
                var r600_currentGlyph = _r600_t0;
                r1_Joining.set(r600_currentGlyph, r1_Joining.Classes.Right);
                r600_currentGlyph.include(r272_intersection(r272_MaskAbove(r272_SymbolMid), r562_TrigLeftShape(r562_koTag, r562_kiShrunk, 0)));
                r600_currentGlyph.include(r272_intersection(r272_MaskBelow(r272_SymbolMid), r562_TrigLeftShape(r562_koTag, r562_kiExtend2, 0), r272_MaskLeftLine(r562_slashDefautLeft + r272_Width, r272_ParenBot, r562_slashDefaultRight + r272_Width, r272_ParenTop)));
                return void 0;
            });
            return r272_xn$createAndSaveGlyphImpl$2Lrc3c('greater.lig.tag-slash', null, function () {
                var _r605_t1;
                var _r605_t0 = this;
                var r605_currentGlyph = _r605_t0;
                r1_Joining.set(r605_currentGlyph, r1_Joining.Classes.Left);
                r605_currentGlyph.include(r272_intersection(r272_MaskBelow(r272_SymbolMid), r562_TrigRightShape(r562_koTag, r562_kiShrunk, 0)));
                r605_currentGlyph.include(r272_intersection(r272_MaskAbove(r272_SymbolMid), r562_TrigRightShape(r562_koTag, r562_kiExtend2, 0), r272_MaskRightLine(r562_slashDefautLeft - r272_Width, r272_ParenBot, r562_slashDefaultRight - r272_Width, r272_ParenTop)));
                return void 0;
            });
        }());
        (function () {
            var _r609_t0 = r272_xn$Capture$2Lrc8['Symbol-Math-Arith'].resolve();
            var r609_PlusShape = _r609_t0.PlusShape;
            r272_xn$createAndSaveGlyphImpl$2Lrc3c('plus.lig.fc', null, function () {
                var _r613_t1;
                var _r613_t0 = this;
                var r613_currentGlyph = _r613_t0;
                r1_Joining.set(r613_currentGlyph, r1_Joining.Classes.Right);
                r613_currentGlyph.include(r609_PlusShape(r272_SB, r272_Width - r272_O));
                return void 0;
            });
            r272_xn$createAndSaveGlyphImpl$2Lrc3c('plus.lig.fc.s', null, function () {
                var _r617_t1;
                var _r617_t0 = this;
                var r617_currentGlyph = _r617_t0;
                r1_Joining.set(r617_currentGlyph, r1_Joining.Classes.Right);
                r617_currentGlyph.include(r609_PlusShape(r272_SB, r272_Width - r272_O, r272_SB));
                return void 0;
            });
            r272_xn$createAndSaveGlyphImpl$2Lrc3c('plus.lig.cc', null, function () {
                var _r621_t1;
                var _r621_t0 = this;
                var r621_currentGlyph = _r621_t0;
                r1_Joining.set(r621_currentGlyph, r1_Joining.Classes.Mid);
                r621_currentGlyph.include(r609_PlusShape(r272_O, r272_Width - r272_O));
                return void 0;
            });
            r272_xn$createAndSaveGlyphImpl$2Lrc3c('plus.lig.cf', null, function () {
                var _r625_t1;
                var _r625_t0 = this;
                var r625_currentGlyph = _r625_t0;
                r1_Joining.set(r625_currentGlyph, r1_Joining.Classes.Left);
                r625_currentGlyph.include(r609_PlusShape(r272_O, r272_RightSB));
                return void 0;
            });
            r272_xn$createAndSaveGlyphImpl$2Lrc3c('plus.lig.cf.s', null, function () {
                var _r629_t1;
                var _r629_t0 = this;
                var r629_currentGlyph = _r629_t0;
                r1_Joining.set(r629_currentGlyph, r1_Joining.Classes.Left);
                r629_currentGlyph.include(r609_PlusShape(r272_O, r272_RightSB, -r272_SB));
                return void 0;
            });
            return r272_xn$createAndSaveGlyphImpl$2Lrc3c('plus.lig.zf', null, function () {
                var _r633_t1;
                var _r633_t0 = this;
                var r633_currentGlyph = _r633_t0;
                r1_Joining.set(r633_currentGlyph, r1_Joining.Classes.Left);
                r633_currentGlyph.include(r609_PlusShape(-r272_SB + r272_O, r272_RightSB));
                return void 0;
            });
        }());
        return function () {
            return r272_xn$createAndSaveGlyphImpl$2Lrc3c('greaterArrow', null, function () {
                var _r639_t1;
                var _r639_t0 = this;
                var r639_currentGlyph = _r639_t0;
                r639_currentGlyph.include(r272_xn$referglyph$1aao('hyphen.lig.jp'), true, true);
                r639_currentGlyph.include(r272_xn$referglyph$1aao('greater'));
                return void 0;
            });
        }();
    });
    return void 0;
});
