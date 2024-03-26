'use strict';
import * as _s0_t0 from '../../../support/utils.mjs';
import * as _s0_t1 from '../../../support/gr.mjs';
var _s0_t2;
export {
    _s0_t2 as apply
};
var r1_apply, _r1_t0, _r1_t1, _r1_t3, _r1_t4, _r1_t5, _r1_t6, _r1_t7, _r1_t10;
var _r1_t2 = function _r1_t10(r333_t) {
    var r333_n, r333_i, r333_a, _r333_t3, _r333_t4, _r333_t5, _r333_t6, _r333_t7, _r333_t8, _r333_t9, _r333_t10, _r333_t11, _r333_t12, _r333_t13, _r333_t14, _r333_t15, _r333_t16, _r333_t17, _r333_t18, _r333_t19, _r333_t20, _r333_t21, _r333_t22, _r333_t23, _r333_t24, _r333_t25, _r333_t26;
    var _r333_t0 = function () {
        _r333_t7 = function (_r333_t8) {
            _r333_t0 = function () {
                throw 'Iteration Stopped';
            };
            return {
                'done': true,
                'value': _r333_t8
            };
        };
        _r333_t9 = r333_t instanceof Array;
        if (_r333_t9) {
            _r333_t10 = r333_n = r333_t.length;
            _r333_t11 = r333_i = 0;
            _r333_t12 = function (_r333_t14) {
                return _r333_t7(_r333_t14);
            };
            _r333_t13 = function (_r333_t15) {
                _r333_t16 = r333_i < r333_n;
                if (_r333_t16) {
                    _r333_t0 = function (_r333_t17) {
                        return _r333_t13(r333_i = r333_i + 1);
                    };
                    return {
                        'value': [
                            r333_i,
                            r333_t[r333_i]
                        ],
                        'done': false
                    };
                } else
                    return _r333_t12(_r333_t15);
            };
            return _r333_t13();
        } else {
            _r333_t18 = r333_a = Object.keys(r333_t);
            _r333_t19 = r333_n = r333_a.length;
            _r333_t20 = r333_i = 0;
            _r333_t21 = function (_r333_t23) {
                return _r333_t7(_r333_t23);
            };
            _r333_t22 = function (_r333_t24) {
                _r333_t25 = r333_i < r333_n;
                if (_r333_t25) {
                    _r333_t0 = function (_r333_t26) {
                        return _r333_t22(r333_i = r333_i + 1);
                    };
                    return {
                        'value': [
                            r333_a[r333_i],
                            r333_t[r333_a[r333_i]]
                        ],
                        'done': false
                    };
                } else
                    return _r333_t21(_r333_t24);
            };
            return _r333_t22();
        }
    };
    var _r333_t1 = function (x) {
        try {
            return _r333_t0(x);
        } catch (ex) {
            return _r333_t2(ex);
        }
    };
    var _r333_t2 = function (e) {
        throw e;
    };
    if (this instanceof _r1_t10)
        _r333_t3 = this;
    else {
        _r333_t4 = function () {
            void 0;
        };
        _r333_t4.prototype = _r1_t10.prototype;
        _r333_t3 = new _r333_t4();
    }
    _r333_t3[Symbol.iterator] = function () {
        return _r333_t3;
    };
    _r333_t3.next = _r333_t1;
    _r333_t3.throw = function (x) {
        return _r333_t2(x);
    };
    return _r333_t3;
};
var _r1_t8 = _s0_t0;
var r1_mix = _r1_t8.mix;
var r1_linreg = _r1_t8.linreg;
var r1_clamp = _r1_t8.clamp;
var r1_fallback = _r1_t8.fallback;
var r1_SuffixCfg = _r1_t8.SuffixCfg;
var _r1_t9 = _s0_t1;
var r1_Dotless = _r1_t9.Dotless;
var r1_CvDecompose = _r1_t9.CvDecompose;
var r1_MathSansSerif = _r1_t9.MathSansSerif;
var r1_xn$GlyphBlocks$2Lrc2b = [];
_s0_t2 = r1_apply = function () {
    var r266_block, _r266_t4, _r266_t6;
    var _r266_t3 = this;
    var _r266_t0 = r1_xn$GlyphBlocks$2Lrc2b;
    var _r266_t1 = _r266_t0.length;
    var _r266_t2 = 0;
    var _r266_t5 = _r266_t2 < _r266_t1;
    while (_r266_t5) {
        _r266_t6 = (r266_block = _r266_t0[_r266_t2], r266_block(_r266_t3), _r266_t2 = _r266_t2 + 1);
        _r266_t5 = _r266_t2 < _r266_t1;
    }
    return _r266_t6;
};
r1_xn$GlyphBlocks$2Lrc2b.push(function (r270_xn$Capture_Ext$2Lrc2b) {
    var _r270_t0, _r270_t1;
    r270_xn$Capture_Ext$2Lrc2b['$defineGlyphBlockImpl$'](r270_xn$Capture_Ext$2Lrc2b, 'Letter-Latin-Lower-R', function (r271_xn$Capture$2Lrc8, r271_xn$ExportCapture$2Lrc4b) {
        var r271_suffix, r271_F, r271_df, r271_mode, r271_doTS, r271_doBS, _r271_t11, _r271_t12, _r271_t13, _r271_t14, _r271_tag15;
        var _r271_t0 = r271_xn$Capture$2Lrc8;
        var r271_xn$createAndSaveGlyphImpl$2Lrc3c = _r271_t0['$createAndSaveGlyphImpl$'];
        var r271_xn$NamedParameterPair$2Lrc9b = _r271_t0['$NamedParameterPair$'];
        var r271_xn$assignUnicodeImpl$2Lrc8b = _r271_t0['$assignUnicodeImpl$'];
        var r271_xn$execState$2Lrc0b = _r271_t0['$execState$'];
        var r271_para = _r271_t0.para;
        var r271_AS_BASE = _r271_t0.AS_BASE;
        var r271_ALSO_METRICS = _r271_t0.ALSO_METRICS;
        var r271_tagged = _r271_t0.tagged;
        var r271_DivFrame = _r271_t0.DivFrame;
        var _r271_t1 = r271_xn$Capture$2Lrc8.Metrics;
        var r271_Width = _r271_t1.Width;
        var r271_SB = _r271_t1.SB;
        var r271_CAP = _r271_t1.CAP;
        var r271_XH = _r271_t1.XH;
        var r271_Descender = _r271_t1.Descender;
        var r271_ApparentTranslate = _r271_t1.ApparentTranslate;
        var r271_TanSlope = _r271_t1.TanSlope;
        var r271_HVContrast = _r271_t1.HVContrast;
        var r271_Upward = _r271_t1.Upward;
        var r271_Downward = _r271_t1.Downward;
        var r271_Leftward = _r271_t1.Leftward;
        var r271_O = _r271_t1.O;
        var r271_OX = _r271_t1.OX;
        var r271_RHook = _r271_t1.RHook;
        var r271_SmallArchDepth = _r271_t1.SmallArchDepth;
        var r271_Stroke = _r271_t1.Stroke;
        var r271_VJut = _r271_t1.VJut;
        var r271_RBalance = _r271_t1.RBalance;
        var r271_RBalance2 = _r271_t1.RBalance2;
        var r271_SideJut = _r271_t1.SideJut;
        var r271_SmallArchDepthA = _r271_t1.SmallArchDepthA;
        var r271_CorrectionOMidS = _r271_t1.CorrectionOMidS;
        var r271_ShoulderFine = _r271_t1.ShoulderFine;
        var r271_StrokeWidthBlend = _r271_t1.StrokeWidthBlend;
        var _r271_t2 = r271_xn$Capture$2Lrc8.SpiroFns;
        var r271_g4 = _r271_t2.g4;
        var r271_corner = _r271_t2.corner;
        var r271_flat = _r271_t2.flat;
        var r271_curl = _r271_t2.curl;
        var r271_end = _r271_t2.end;
        var r271_straight = _r271_t2.straight;
        var r271_widths = _r271_t2.widths;
        var r271_heading = _r271_t2.heading;
        var r271_archv = _r271_t2.archv;
        var r271_arcvh = _r271_t2.arcvh;
        var r271_dispiro = _r271_t2.dispiro;
        var r271_xn$spirooutline$1aao = _r271_t2['spiro-outline'];
        var _r271_t3 = r271_xn$Capture$2Lrc8.BooleFns;
        var r271_union = _r271_t3.union;
        var r271_intersection = _r271_t3.intersection;
        var _r271_t4 = r271_xn$Capture$2Lrc8.CommonShapes.resolve();
        var r271_HSerif = _r271_t4.HSerif;
        var r271_VSerif = _r271_t4.VSerif;
        var r271_HBar = _r271_t4.HBar;
        var r271_VBar = _r271_t4.VBar;
        var r271_hookstart = _r271_t4.hookstart;
        var r271_FlipAround = _r271_t4.FlipAround;
        var r271_WithTransform = _r271_t4.WithTransform;
        var _r271_t5 = r271_xn$Capture$2Lrc8['Common-Derivatives'].resolve();
        var r271_xn$selectvariant$7Hrq = _r271_t5['select-variant'];
        var r271_xn$referglyph$1aao = _r271_t5['refer-glyph'];
        var r271_turned = _r271_t5.turned;
        var r271_xn$linkreducedvariant$5sIl8 = _r271_t5['link-reduced-variant'];
        var r271_HalfAdvance = _r271_t5.HalfAdvance;
        var r271_TurnMarks = _r271_t5.TurnMarks;
        var _r271_t6 = r271_xn$Capture$2Lrc8['Letter-Shared'].resolve();
        var r271_CreateAccentedComposition = _r271_t6.CreateAccentedComposition;
        var _r271_t7 = r271_xn$Capture$2Lrc8['Letter-Shared-Shapes'].resolve();
        var r271_DToothlessRise = _r271_t7.DToothlessRise;
        var r271_DMBlend = _r271_t7.DMBlend;
        var r271_PalatalHook = _r271_t7.PalatalHook;
        var r271_RetroflexHook = _r271_t7.RetroflexHook;
        var _r271_t8 = r271_xn$Capture$2Lrc8['Letter-Blackboard'].resolve();
        var r271_BBS = _r271_t8.BBS;
        var r271_BBD = _r271_t8.BBD;
        var r271_BBBarRight = _r271_t8.BBBarRight;
        var r271_dfN = r271_DivFrame(1);
        var r271_dfR = r271_DivFrame(r271_para.diversityF);
        var r271_rStraight = 0;
        var r271_rSerifed = 1;
        var r271_rNarrow = 2;
        var r271_rNarrowSerifed = 3;
        var r271_rEarless = 4;
        var r271_rCornerHooked = 5;
        var r271_rCornerHookedSerifed = 6;
        var r271_RDim = function (r277_df, r277_mode, r277__strokeBar, r277__stroke) {
            var r277___, _r277_t1, _r277_t2, _r277_t3, _r277_t4, _r277_t5, _r277_t6, _r277_t7;
            var r277_strokeBar = r1_fallback(r277__strokeBar, r271_Stroke);
            var r277_stroke = r1_fallback(r277__stroke, r271_Stroke);
            var r277_strokeA = r1_mix(r277_strokeBar, r277_stroke, 0.5);
            var _r277_t0 = (_r277_t1 = r277_mode, _r277_t1 === r271_rStraight ? [
                1,
                1,
                0,
                0,
                2.35
            ] : _r277_t1 === r271_rSerifed ? [
                4 / 3,
                2 / 3,
                1 / 4,
                1 / 3,
                2.35
            ] : _r277_t1 === r271_rNarrow ? [
                2 * (r277_df.div - 0.5),
                1,
                0,
                0,
                2.35
            ] : _r277_t1 === r271_rNarrowSerifed ? [
                5 / 8 * r277_df.div,
                3 / 4,
                0,
                1 / 2 * Math.max(0, r1_mix(1, r277_df.div, 4)),
                2.35
            ] : _r277_t1 === r271_rCornerHooked ? [
                2 * (r277_df.div - 0.5),
                1,
                0,
                0,
                2.35
            ] : _r277_t1 === r271_rCornerHookedSerifed ? [
                4 / 3,
                2 / 3,
                1 / 4,
                1 / 3,
                2.35
            ] : _r277_t1 === r271_rEarless ? [
                1,
                1,
                0,
                0,
                2.35
            ] : void 0);
            var r277_rBalanceMultiplier = _r277_t0[0];
            var r277_rHookMultiplier = _r277_t0[1];
            var r277_rHookSwMultiplier = _r277_t0[2];
            var r277_rSerifLeftExtender = _r277_t0[3];
            var r277_hookSuperness = _r277_t0[4];
            var r277_xBar = (_r277_t2 = r277_mode, _r277_t2 === r271_rNarrowSerifed ? r277_df.middle + 0.5 * r271_HVContrast * r277_strokeBar - r271_RBalance * r277_rBalanceMultiplier : (r277___ = _r277_t2, r271_SB + r271_RBalance * r277_rBalanceMultiplier + r277_strokeBar * r271_HVContrast));
            var r277_rSerifX = r277_xBar - r277_strokeBar / 2 * r271_HVContrast;
            var r277_rSerifLeftJut = r271_SideJut + r271_RBalance * (0.3 + r277_rSerifLeftExtender);
            var r277_rSerifRightJut = r277_rSerifLeftJut * 1.2;
            var r277_rBottomSerif = function (r278_y) {
                var _r278_t0, _r278_t1;
                return function () {
                    var _r280_t1;
                    var _r280_t0 = this;
                    var r280_currentGlyph = _r280_t0;
                    r280_currentGlyph.include(r271_tagged('serifLB', r271_union(r271_HSerif.lb(r277_rSerifX, r278_y, r277_rSerifLeftJut + r277_strokeBar / 2 * r271_HVContrast), r271_HSerif.rb(r277_rSerifX, r278_y, r277_rSerifRightJut + r277_strokeBar / 2 * r271_HVContrast))));
                    var r280_xAtt = r277_rSerifX + r277_rSerifRightJut + r277_strokeBar / 2 * r271_HVContrast;
                    r280_currentGlyph.setBaseAnchor('palatalHookAttach', r280_xAtt, 0);
                    r280_currentGlyph.setBaseAnchor('palatalHookPos', r280_xAtt, 0);
                    return void 0;
                };
            };
            var r277_rTopSerif = function (r284_y) {
                var _r284_t0, _r284_t1;
                return r271_tagged('serifLT', r271_HSerif.lt(r277_rSerifX, r284_y, r277_rSerifLeftJut + r277_strokeBar / 2 * r271_HVContrast));
            };
            var r277_fine = r271_ShoulderFine;
            var r277_rHookX = r277_df.rightSB + r271_RBalance2 * r277_rBalanceMultiplier - (r271_OX - r271_O);
            var r277_xArchMiddle = (_r277_t3 = r277_mode, _r277_t3 === r271_rStraight ? r1_mix(r277_xBar - r277_fine, r277_rHookX, 0.54 + 2 * r271_TanSlope * r277_strokeBar / r271_Width) : _r277_t3 === r271_rSerifed ? r1_mix(r277_xBar - r277_fine, r277_rHookX, 0.59 + 2 * r271_TanSlope * r277_strokeBar / r271_Width) : _r277_t3 === r271_rNarrow ? r1_mix(r277_df.width, r277_rHookX, Math.max(1.01, 5 / 4 * r1_mix(1, r271_dfR.div, 2))) : _r277_t3 === r271_rNarrowSerifed ? Math.min(r1_mix(r277_df.width, r277_rHookX, r277_df.div) - 0.1, r277_xBar + r271_RHook * 1.25 * r277_df.div) : _r277_t3 === r271_rCornerHooked ? r277_rHookX - r277_strokeBar / 2 * r271_HVContrast : _r277_t3 === r271_rCornerHookedSerifed ? r277_rHookX - r277_strokeBar / 2 * r271_HVContrast : _r277_t3 === r271_rEarless ? r1_mix(r277_xBar - r277_strokeBar * r271_HVContrast, r277_rHookX, 0.5) : void 0);
            var r277_mixpin = (_r277_t4 = r277_mode, _r277_t4 === r271_rSerifed || _r277_t4 === r271_rCornerHooked || _r277_t4 === r271_rCornerHookedSerifed ? 0.65 + 0.25 * r277_strokeA / r271_Width + 4 * r271_TanSlope * r277_strokeA / r271_Width : (r277___ = _r277_t4, 0.65 + 4 * r271_TanSlope * r277_strokeA / r271_Width));
            var r277_rmiddlein = r1_mix(r277_xBar, r277_rHookX - r277_strokeA * r271_HVContrast * 1.05, r277_mixpin) - r271_CorrectionOMidS;
            var r277_skew = Math.max(0, (r277_xArchMiddle - r277_rmiddlein) / r277_stroke - r271_TanSlope);
            var r277_rHookY = r271_RHook * r277_rHookMultiplier + r277_stroke * r277_rHookSwMultiplier;
            var r277_rHookXN = (_r277_t5 = r277_mode, _r277_t5 === r271_rNarrowSerifed ? r1_mix(r277_df.width, r277_rHookX, r277_df.div) : _r277_t5 === r271_rNarrow ? r277_xArchMiddle + 0.1 : (r277___ = _r277_t5, r277_rHookX));
            var r277_setMarks = function (r285_doTopSerif) {
                var _r285_t0, _r285_t1;
                return function () {
                    var _r287_t1;
                    var _r287_t0 = this;
                    var r287_currentGlyph = _r287_t0;
                    r287_currentGlyph.setBaseAnchor('above', r1_mix(r1_mix(r277_df.leftSB, r277_xBar - r271_Stroke * r271_HVContrast, r285_doTopSerif ? 0.5 : 1), r277_df.rightSB, 0.5), r271_XH);
                    r287_currentGlyph.setBaseAnchor('overlay', r277_xBar - r271_Stroke * 0.25, r271_XH * 0.5);
                    r287_currentGlyph.setBaseAnchor('palatalHookAttach', r277_xBar, 0);
                    r287_currentGlyph.setBaseAnchor('palatalHookPos', r277_xBar + r271_PalatalHook.adviceGap(r271_Stroke), 0);
                    return void 0;
                };
            };
            return {
                'xBar': r277_xBar,
                'rBottomSerif': r277_rBottomSerif,
                'rTopSerif': r277_rTopSerif,
                'fine': r277_fine,
                'xArchMiddle': r277_xArchMiddle,
                'skew': r277_skew,
                'rHookX': r277_rHookX,
                'rHookXN': r277_rHookXN,
                'rHookY': r277_rHookY,
                'hookSuperness': r277_hookSuperness,
                'setMarks': r277_setMarks
            };
        };
        var r271_StandardShape = function (r292_df, r292_md, r292_doTopSerif, r292_doBottomSerif) {
            var _r292_t0, _r292_t1;
            return function () {
                var _r294_t2;
                var _r294_t1 = this;
                var r294_currentGlyph = _r294_t1;
                var _r294_t0 = r271_RDim(r292_df, r292_md);
                var r294_xBar = _r294_t0.xBar;
                var r294_rBottomSerif = _r294_t0.rBottomSerif;
                var r294_rTopSerif = _r294_t0.rTopSerif;
                var r294_fine = _r294_t0.fine;
                var r294_xArchMiddle = _r294_t0.xArchMiddle;
                var r294_skew = _r294_t0.skew;
                var r294_rHookX = _r294_t0.rHookX;
                var r294_rHookY = _r294_t0.rHookY;
                var r294_hookSuperness = _r294_t0.hookSuperness;
                var r294_setMarks = _r294_t0.setMarks;
                r294_currentGlyph.include(r294_setMarks(r292_doTopSerif));
                r294_currentGlyph.include(r271_dispiro(r271_widths.lhs(), r271_g4.up.start(r294_rHookX, r271_XH - r294_rHookY - r271_Stroke * 0.5, r271_heading(r271_Upward)), r271_arcvh(32, r294_hookSuperness), r271_g4.left.mid(r294_xArchMiddle - r271_CorrectionOMidS * r1_linreg(72, 0.75, 108, 1, r271_Stroke), r271_XH - r271_O, r271_widths.heading(r271_Stroke, 0, {
                    'y': -1,
                    'x': -r294_skew
                })), r271_archv(32), r271_straight.down.end(r294_xBar - r294_fine * r271_HVContrast, r271_XH * 0.53 + (r271_SmallArchDepth - r271_SmallArchDepthA), r271_widths.heading(r294_fine, 0, r271_Downward))));
                r294_currentGlyph.include(r271_VBar.r(r294_xBar, 0, r271_XH));
                if (r292_doBottomSerif)
                    r294_currentGlyph.include(r294_rBottomSerif(0));
                if (r292_doTopSerif)
                    r294_currentGlyph.include(r294_rTopSerif(r271_XH));
                return void 0;
            };
        };
        var r271_CompactShape = function (r300_df, r300_md, r300_ts, r300_bs) {
            var _r300_t0, _r300_t1;
            return r271_CompactShapeImpl(r300_df, r300_md, false, r300_ts, r300_bs);
        };
        var r271_CornerHookShape = function (r301_df, r301_md, r301_ts, r301_bs) {
            var _r301_t0, _r301_t1;
            return r271_CompactShapeImpl(r301_df, r301_md, true, r301_ts, r301_bs);
        };
        var r271_CompactShapeImpl = function (r302_df, r302_md, r302_doHookSerif, r302_doTopSerif, r302_doBottomSerif) {
            var _r302_t0, _r302_t1;
            return function () {
                var r304___, _r304_t1, _r304_t2, _r304_t4;
                var _r304_t3 = this;
                var r304_currentGlyph = _r304_t3;
                var _r304_t0 = r271_RDim(r302_df, r302_md);
                var r304_xBar = _r304_t0.xBar;
                var r304_rBottomSerif = _r304_t0.rBottomSerif;
                var r304_rTopSerif = _r304_t0.rTopSerif;
                var r304_fine = _r304_t0.fine;
                var r304_xArchMiddle = _r304_t0.xArchMiddle;
                var r304_rHookXN = _r304_t0.rHookXN;
                var r304_setMarks = _r304_t0.setMarks;
                r304_currentGlyph.include(r304_setMarks(r302_doTopSerif));
                var r304_xCor = r302_doHookSerif ? 0 : r271_CorrectionOMidS * r1_linreg(72, 0.75, 108, 1, r271_Stroke);
                var r304_arcTopShift = (_r304_t1 = r302_md, _r304_t1 === r271_rNarrow ? r271_O * r1_clamp(0, 1, r271_StrokeWidthBlend(0, 16)) : (r304___ = _r304_t1, 0));
                var r304_arcTopWidth = (_r304_t2 = r302_md, _r304_t2 === r271_rNarrow ? r271_Stroke - r271_O * r1_clamp(0, 1, r271_StrokeWidthBlend(0, 16)) : (r304___ = _r304_t2, r271_Stroke));
                var r304_ArcKnots = function () {
                    var _r306_t0, _r306_t1;
                    return [
                        r271_flat(r304_rHookXN - r304_xCor, r271_XH - r304_arcTopShift, r302_doHookSerif ? r271_heading(r271_Leftward) : null),
                        r271_curl(r304_xArchMiddle - r304_xCor, r271_XH - r304_arcTopShift, r302_doHookSerif ? r271_heading(r271_Leftward) : null),
                        r271_archv(),
                        r271_straight.down.end(r304_xBar - r304_fine * r271_HVContrast, r271_XH * 0.53 + (r271_SmallArchDepth - r271_SmallArchDepthA), r271_widths.heading(r304_fine, 0, r271_Downward))
                    ];
                };
                r304_currentGlyph.include(r271_dispiro(r271_widths.lhs(r304_arcTopWidth), r304_ArcKnots()));
                r304_currentGlyph.include(r271_VBar.r(r304_xBar, 0, r271_XH));
                if (r302_doHookSerif)
                    r304_currentGlyph.include(r271_intersection(r271_VSerif.dr(r304_rHookXN - r304_xCor, r271_XH, r271_VJut), r271_xn$spirooutline$1aao(r304_ArcKnots(), r271_corner(r304_xBar - r304_fine * r271_HVContrast, 0), r271_corner(r271_Width * 16, 0), r271_corner(r271_Width * 16, r271_XH))));
                if (r302_doBottomSerif)
                    r304_currentGlyph.include(r304_rBottomSerif(0));
                if (r302_doTopSerif)
                    r304_currentGlyph.include(r304_rTopSerif(r271_XH));
                return void 0;
            };
        };
        var r271_EarlessCornerShape = function (r312_df, r312_md, r312_doTopSerif, r312_doBottomSerif) {
            var _r312_t0, _r312_t1;
            return function () {
                var _r314_t2;
                var _r314_t1 = this;
                var r314_currentGlyph = _r314_t1;
                var _r314_t0 = r271_RDim(r312_df, r312_md);
                var r314_xBar = _r314_t0.xBar;
                var r314_xArchMiddle = _r314_t0.xArchMiddle;
                var r314_rHookX = _r314_t0.rHookX;
                var r314_rHookY = _r314_t0.rHookY;
                var r314_hookSuperness = _r314_t0.hookSuperness;
                var r314_rBottomSerif = _r314_t0.rBottomSerif;
                var r314_setMarks = _r314_t0.setMarks;
                r314_currentGlyph.include(r314_setMarks(r312_doTopSerif));
                r314_currentGlyph.include(r271_dispiro(r271_widths.lhs(), r271_g4.up.start(r314_rHookX, r271_XH - r314_rHookY - r271_Stroke * 0.5, r271_heading(r271_Upward)), r271_arcvh(void 0, r314_hookSuperness), r271_g4.left.mid(r314_xArchMiddle - r271_CorrectionOMidS, r271_XH - r271_O, r271_heading(r271_Leftward)), r271_g4(r314_xBar - r271_Stroke * r271_HVContrast, r271_XH - r271_DToothlessRise)));
                r314_currentGlyph.include(r271_VBar.r(r314_xBar, 0, r271_XH - r271_DToothlessRise));
                if (r312_doBottomSerif)
                    r314_currentGlyph.include(r314_rBottomSerif(0));
                return void 0;
            };
        };
        var r271_EarlessRoundedShape = function (r319_df, r319_md, r319_doTopSerif, r319_doBottomSerif) {
            var _r319_t0, _r319_t1;
            return function () {
                var _r321_t2;
                var _r321_t1 = this;
                var r321_currentGlyph = _r321_t1;
                var _r321_t0 = r271_RDim(r319_df, r319_md);
                var r321_xBar = _r321_t0.xBar;
                var r321_xArchMiddle = _r321_t0.xArchMiddle;
                var r321_rHookX = _r321_t0.rHookX;
                var r321_rHookY = _r321_t0.rHookY;
                var r321_hookSuperness = _r321_t0.hookSuperness;
                var r321_rBottomSerif = _r321_t0.rBottomSerif;
                var r321_setMarks = _r321_t0.setMarks;
                r321_currentGlyph.include(r321_setMarks(r319_doTopSerif));
                var r321_hx = Math.max(r321_rHookX, r321_xBar + 1.25 * r271_Stroke);
                r321_currentGlyph.include(r271_dispiro(r271_widths.lhs(), r271_g4(r321_hx, r271_XH - r321_rHookY), r271_hookstart(r271_XH - r271_O), r271_flat(r321_xBar - r271_Stroke * r271_HVContrast, r271_XH - r271_SmallArchDepthA), r271_curl(r321_xBar - r271_Stroke * r271_HVContrast, 0, r271_heading(r271_Downward))));
                if (r319_doBottomSerif)
                    r321_currentGlyph.include(r321_rBottomSerif(0));
                return void 0;
            };
        };
        var r271_FlapHooklessShape = function (r325_df, r325_md, r325_doTopSerif, r325_doBottomSerif) {
            var _r325_t0, _r325_t1;
            return function () {
                var _r327_t2;
                var _r327_t1 = this;
                var r327_currentGlyph = _r327_t1;
                var _r327_t0 = r271_RDim(r325_df, r325_md);
                var r327_xBar = _r327_t0.xBar;
                var r327_rBottomSerif = _r327_t0.rBottomSerif;
                var r327_xArchMiddle = _r327_t0.xArchMiddle;
                var r327_setMarks = _r327_t0.setMarks;
                r327_currentGlyph.setBaseAnchor('overlay', r327_xBar - 0.5 * r271_Stroke * r271_HVContrast, r271_XH / 2);
                r327_currentGlyph.include(r327_setMarks(r325_doTopSerif));
                r327_currentGlyph.include(r271_dispiro(r271_widths.lhs(), r271_g4.left.start(r327_xArchMiddle - r271_CorrectionOMidS * r1_linreg(72, 0.75, 108, 1, r271_Stroke), r271_XH - r271_O), r271_archv(), r271_flat(r327_xBar - r271_Stroke * r271_HVContrast, r271_XH - r271_SmallArchDepthA), r271_curl(r327_xBar - r271_Stroke * r271_HVContrast, 0, r271_heading(r271_Downward))));
                if (r325_doBottomSerif)
                    r327_currentGlyph.include(r327_rBottomSerif(0));
                return void 0;
            };
        };
        var r271_SmallRConfig = r1_SuffixCfg.weave({
            '': [
                r271_StandardShape,
                r271_dfN,
                r271_rStraight
            ],
            'earlessCorner': [
                r271_EarlessCornerShape,
                r271_dfN,
                r271_rEarless
            ],
            'earlessRounded': [
                r271_EarlessRoundedShape,
                r271_dfN,
                r271_rEarless
            ],
            'hookless': [
                r271_CompactShape,
                r271_dfN,
                r271_rNarrow
            ],
            'cornerHooked': [
                r271_CornerHookShape,
                r271_dfN,
                r271_rCornerHooked
            ],
            'compact': [
                r271_CompactShape,
                r271_dfR,
                r271_rNarrow
            ],
            'hooklessFlap': [
                r271_FlapHooklessShape,
                r271_dfN,
                r271_rNarrow
            ],
            'compactFlap': [
                r271_FlapHooklessShape,
                r271_dfR,
                r271_rNarrow
            ]
        }, {
            'serifless': [
                0,
                0
            ],
            'topSerifed': [
                1,
                0
            ],
            'baseSerifed': [
                0,
                1
            ],
            'serifed': [
                1,
                1
            ]
        });
        var _r271_t9 = _r1_t2(r271_SmallRConfig)[Symbol.iterator]();
        var _r271_t10 = void 0;
        while (!(_r271_t10 = _r271_t9.next()).done) {
            _r271_t11 = _r271_t10.value;
            r271_suffix = _r271_t11[0];
            r271_F = _r271_t11[1][0][0];
            r271_df = _r271_t11[1][0][1];
            r271_mode = _r271_t11[1][0][2];
            _r271_t11[1][0];
            r271_doTS = _r271_t11[1][1][0];
            r271_doBS = _r271_t11[1][1][1];
            _r271_t11[1][1];
            _r271_t11[1];
            (function () {
                r271_xn$createAndSaveGlyphImpl$2Lrc3c('r.' + r271_suffix, null, function () {
                    var _r339_t1;
                    var _r339_t0 = this;
                    var r339_currentGlyph = _r339_t0;
                    r339_currentGlyph.setWidth(r271_df.width);
                    r339_currentGlyph.include(r271_df.markSet.e());
                    r339_currentGlyph.include(r271_F(r271_df, r271_mode, r271_doTS, r271_doBS));
                    return void 0;
                });
                r271_xn$createAndSaveGlyphImpl$2Lrc3c('rLongLeg.' + r271_suffix, null, function () {
                    var _r345_t2;
                    var _r345_t1 = this;
                    var r345_currentGlyph = _r345_t1;
                    r345_currentGlyph.setWidth(r271_df.width);
                    r345_currentGlyph.include(r271_df.markSet.p());
                    var _r345_t0 = r271_RDim(r271_df, r271_mode);
                    var r345_xBar = _r345_t0.xBar;
                    var r345_rBottomSerif = _r345_t0.rBottomSerif;
                    r345_currentGlyph.include(r271_F(r271_df, r271_mode, r271_doTS, 0));
                    r345_currentGlyph.ejectTagged('serifLB');
                    r345_currentGlyph.include(r271_VBar.r(r345_xBar, r271_Descender, 0));
                    if (r271_doBS)
                        r345_currentGlyph.include(r345_rBottomSerif(r271_Descender));
                    return void 0;
                });
                r271_xn$createAndSaveGlyphImpl$2Lrc3c('rCapLongLeg.' + r271_suffix, null, function () {
                    var _r354_t2;
                    var _r354_t1 = this;
                    var r354_currentGlyph = _r354_t1;
                    r354_currentGlyph.setWidth(r271_df.width);
                    r354_currentGlyph.include(r271_df.markSet.capDesc());
                    var _r354_t0 = r271_RDim(r271_df, r271_mode);
                    var r354_xBar = _r354_t0.xBar;
                    var r354_rBottomSerif = _r354_t0.rBottomSerif;
                    r354_currentGlyph.include(r271_WithTransform(r271_ApparentTranslate(0, r271_CAP - r271_XH), r271_F(r271_df, r271_mode, r271_doTS, 0)));
                    r354_currentGlyph.ejectTagged('serifLB');
                    r354_currentGlyph.include(r271_VBar.r(r354_xBar, r271_Descender, r271_CAP - r271_XH));
                    if (r271_doBS)
                        r354_currentGlyph.include(r354_rBottomSerif(r271_Descender));
                    return void 0;
                });
                r271_xn$createAndSaveGlyphImpl$2Lrc3c('fInsular.' + r271_suffix, null, function () {
                    var _r363_t2;
                    var _r363_t1 = this;
                    var r363_currentGlyph = _r363_t1;
                    r363_currentGlyph.include(r271_xn$referglyph$1aao('rLongLeg.' + r271_suffix), r271_AS_BASE, r271_ALSO_METRICS);
                    var _r363_t0 = r271_RDim(r271_df, r271_mode);
                    var r363_xBar = _r363_t0.xBar;
                    var r363_rHookX = _r363_t0.rHookX;
                    r363_currentGlyph.include(r271_HBar.b(r363_xBar, r363_rHookX - Math.max(0.15 * (r271_df.rightSB - r271_df.leftSB), 0.25 * r271_HVContrast * r271_Stroke), 0));
                    return void 0;
                });
                r271_xn$createAndSaveGlyphImpl$2Lrc3c('FInsular.' + r271_suffix, null, function () {
                    var _r368_t2;
                    var _r368_t1 = this;
                    var r368_currentGlyph = _r368_t1;
                    r368_currentGlyph.include(r271_xn$referglyph$1aao('rCapLongLeg.' + r271_suffix), r271_AS_BASE, r271_ALSO_METRICS);
                    var _r368_t0 = r271_RDim(r271_df, r271_mode);
                    var r368_xBar = _r368_t0.xBar;
                    var r368_rHookX = _r368_t0.rHookX;
                    r368_currentGlyph.include(r271_HBar.b(r368_xBar, r368_rHookX - Math.max(0.15 * (r271_df.rightSB - r271_df.leftSB), 0.25 * r271_HVContrast * r271_Stroke), 0));
                    return void 0;
                });
                r271_xn$createAndSaveGlyphImpl$2Lrc3c('rPalatalHook.' + r271_suffix, null, function () {
                    var _r373_t1;
                    var _r373_t0 = this;
                    var r373_currentGlyph = _r373_t0;
                    r373_currentGlyph.include(r271_xn$referglyph$1aao('r.' + r271_suffix), r271_AS_BASE, r271_ALSO_METRICS);
                    var r373_attach = r373_currentGlyph.gizmo.unapply(r373_currentGlyph.baseAnchors.palatalHookAttach);
                    var r373_pos = r373_currentGlyph.gizmo.unapply(r373_currentGlyph.baseAnchors.palatalHookPos);
                    r373_currentGlyph.include(r271_PalatalHook.r(new r271_xn$NamedParameterPair$2Lrc9b('x', r373_pos.x), new r271_xn$NamedParameterPair$2Lrc9b('y', r373_pos.y), new r271_xn$NamedParameterPair$2Lrc9b('xLink', r373_attach.x)));
                    return void 0;
                });
                r271_xn$createAndSaveGlyphImpl$2Lrc3c('rRTail.' + r271_suffix, null, function () {
                    var _r381_t2;
                    var _r381_t1 = this;
                    var r381_currentGlyph = _r381_t1;
                    r381_currentGlyph.setWidth(r271_df.width);
                    r381_currentGlyph.include(r271_df.markSet.e());
                    r381_currentGlyph.include(r271_F(r271_df, r271_mode, r271_doTS, 0));
                    r381_currentGlyph.ejectTagged('serifLB');
                    var _r381_t0 = r271_RDim(r271_df, r271_mode);
                    var r381_xBar = _r381_t0.xBar;
                    r381_currentGlyph.include(r271_RetroflexHook.rExt(r381_xBar, 0));
                    return void 0;
                });
                r271_xn$createAndSaveGlyphImpl$2Lrc3c('rTurnRTail.' + r271_suffix, null, function () {
                    var _r389_t2;
                    var _r389_t1 = this;
                    var r389_currentGlyph = _r389_t1;
                    r389_currentGlyph.setWidth(r271_df.width);
                    r389_currentGlyph.include(r271_df.markSet.e());
                    r389_currentGlyph.include(r271_F(r271_df, r271_mode, 0, r271_doBS));
                    r389_currentGlyph.ejectTagged('serifLT');
                    r389_currentGlyph.include(r271_FlipAround(r271_df.middle, r271_XH / 2));
                    var _r389_t0 = r271_RDim(r271_df, r271_mode);
                    var r389_xBar = _r389_t0.xBar;
                    r389_currentGlyph.include(r271_RetroflexHook.lExt(r271_df.rightSB - r389_xBar + r271_df.leftSB, 0));
                    return void 0;
                });
                return r271_xn$createAndSaveGlyphImpl$2Lrc3c('rTurnLongLetRTail.' + r271_suffix, null, function () {
                    var _r398_t2;
                    var _r398_t1 = this;
                    var r398_currentGlyph = _r398_t1;
                    r398_currentGlyph.include(r271_xn$referglyph$1aao('rLongLeg.' + r271_suffix), r271_AS_BASE, r271_ALSO_METRICS);
                    r398_currentGlyph.ejectTagged('serifLT');
                    r398_currentGlyph.include(r271_FlipAround(r271_df.middle, r271_XH / 2));
                    r398_currentGlyph.include(r271_df.markSet.b());
                    var _r398_t0 = r271_RDim(r271_df, r271_mode);
                    var r398_xBar = _r398_t0.xBar;
                    r398_currentGlyph.include(r271_RetroflexHook.lExt(r271_df.rightSB - r398_xBar + r271_df.leftSB, 0));
                    return void 0;
                });
            }());
        }
        r271_xn$selectvariant$7Hrq('r', 'r');
        r271_xn$linkreducedvariant$5sIl8('r/sansSerif', 'r', r1_MathSansSerif);
        var r271_TurnRMarks = function (r404_k) {
            var _r404_t0, _r404_t1;
            return r271_TurnMarks(r404_k, function (r405_df) {
                var _r405_t0, _r405_t1;
                return {
                    'baseAnchors': {
                        'bottomRight': {
                            'x': r405_df.rightSB - r271_RBalance,
                            'y': 0
                        }
                    }
                };
            });
        };
        r271_turned('turnr', 633, 'r', r271_HalfAdvance, r271_XH / 2, r271_TurnRMarks('e'));
        r271_CreateAccentedComposition('rTildeOver', 7538, 'r', 'tildeOver');
        r271_turned('turnrTildeOver', 43880, 'rTildeOver', r271_HalfAdvance, r271_XH / 2, r271_TurnRMarks('e'));
        r271_xn$selectvariant$7Hrq('rLongLeg', 636, new r271_xn$NamedParameterPair$2Lrc9b('follow', 'r'));
        r271_xn$selectvariant$7Hrq('SInsular', 42884, new r271_xn$NamedParameterPair$2Lrc9b('shapeFrom', 'rCapLongLeg'), new r271_xn$NamedParameterPair$2Lrc9b('follow', 'rRTail'));
        r271_xn$selectvariant$7Hrq('sInsular', 42885, new r271_xn$NamedParameterPair$2Lrc9b('shapeFrom', 'rLongLeg'), new r271_xn$NamedParameterPair$2Lrc9b('follow', 'rRTail'));
        r271_xn$selectvariant$7Hrq('FInsular', 42875, new r271_xn$NamedParameterPair$2Lrc9b('follow', 'rRTail'));
        r271_xn$selectvariant$7Hrq('fInsular', 42876, new r271_xn$NamedParameterPair$2Lrc9b('follow', 'rRTail'));
        r271_turned('turnrLongLeg', 634, 'rLongLeg', r271_HalfAdvance, r271_XH / 2, r271_TurnRMarks('b'));
        r271_xn$selectvariant$7Hrq('rRTail', 637);
        r271_turned('smallLetterTurnedRWithTail', 11385, 'rRTail', r271_HalfAdvance, r271_XH / 2, function () {
            var _r414_t1;
            var _r414_t0 = this;
            var r414_currentGlyph = _r414_t0;
            var r414_df = r271_DivFrame(r414_currentGlyph.advanceWidth / r271_Width);
            r414_currentGlyph.include(r414_df.markSet.b());
            return void 0;
        });
        r271_xn$selectvariant$7Hrq('rTurnRTail', 635);
        r271_xn$selectvariant$7Hrq('rTurnLongLetRTail', 122632, new r271_xn$NamedParameterPair$2Lrc9b('follow', 'rTurnRTail'));
        r271_xn$selectvariant$7Hrq('rPalatalHook', 7561, new r271_xn$NamedParameterPair$2Lrc9b('follow', 'r'));
        var r271_BBRShape = function (r418_df, r418_md, r418_doTopSerif, r418_doBottomSerif) {
            var _r418_t0, _r418_t1;
            return function () {
                var _r420_t2;
                var _r420_t1 = this;
                var r420_currentGlyph = _r420_t1;
                var _r420_t0 = r271_RDim(r418_df, r418_md, r271_BBD, r271_BBS);
                var r420_xBar = _r420_t0.xBar;
                var r420_fine = _r420_t0.fine;
                var r420_xArchMiddle = _r420_t0.xArchMiddle;
                var r420_skew = _r420_t0.skew;
                var r420_rHookX = _r420_t0.rHookX;
                var r420_rHookY = _r420_t0.rHookY;
                var r420_hookSuperness = _r420_t0.hookSuperness;
                r420_currentGlyph.include(r271_dispiro(r271_widths.lhs(r271_BBS), r271_g4.up.start(r420_rHookX, r271_XH - r420_rHookY - r271_BBS * 0.5, r271_heading(r271_Upward)), r271_arcvh(void 0, r420_hookSuperness), r271_g4.left.mid(r420_xArchMiddle - r271_CorrectionOMidS * r1_linreg(72, 0.75, 108, 1, r271_BBS), r271_XH - r271_O, r271_widths.heading(r271_BBS, 0, {
                    'y': -1,
                    'x': -r420_skew
                })), r271_archv(), r271_straight.down.end(r420_xBar - r420_fine * r271_HVContrast, r271_XH * 0.53 + (r271_SmallArchDepth - r271_SmallArchDepthA), r271_widths.heading(r420_fine, 0, r271_Downward))));
                r420_currentGlyph.include(r271_BBBarRight(r420_xBar, 0, r271_XH));
                r420_currentGlyph.setBaseAnchor('overlay', r420_xBar - r271_HVContrast * (r271_BBD + r271_BBS * 2) * 0.25, r271_XH * 0.5);
                return void 0;
            };
        };
        r271_xn$createAndSaveGlyphImpl$2Lrc3c('mathbb/r', 120163, function () {
            var _r426_t1;
            var _r426_t0 = this;
            var r426_currentGlyph = _r426_t0;
            r426_currentGlyph.include(r271_dfR.markSet.e());
            r426_currentGlyph.include(r271_BBRShape(r271_dfN, r271_rStraight, 0, 0));
            return void 0;
        });
        r271_xn$selectvariant$7Hrq('rFlap', 638, new r271_xn$NamedParameterPair$2Lrc9b('shapeFrom', 'r'));
        return r271_CreateAccentedComposition('rFlapTildeOver', 7539, 'rFlap', 'tildeOver');
    });
    return void 0;
});
