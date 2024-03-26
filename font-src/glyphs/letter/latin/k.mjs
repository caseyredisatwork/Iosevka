'use strict';
import * as _s0_t0 from '../../../support/utils.mjs';
import * as _s0_t1 from '../../../support/gr.mjs';
import * as _s0_t2 from '../../../support/util/mask-bit.mjs';
var _s0_t3;
export {
    _s0_t3 as apply
};
var r1_apply, _r1_t0, _r1_t1, _r1_t3, _r1_t4, _r1_t5, _r1_t6, _r1_t7, _r1_t11;
var _r1_t2 = function _r1_t11(r385_t) {
    var r385_n, r385_i, r385_a, _r385_t3, _r385_t4, _r385_t5, _r385_t6, _r385_t7, _r385_t8, _r385_t9, _r385_t10, _r385_t11, _r385_t12, _r385_t13, _r385_t14, _r385_t15, _r385_t16, _r385_t17, _r385_t18, _r385_t19, _r385_t20, _r385_t21, _r385_t22, _r385_t23, _r385_t24, _r385_t25, _r385_t26;
    var _r385_t0 = function () {
        _r385_t7 = function (_r385_t8) {
            _r385_t0 = function () {
                throw 'Iteration Stopped';
            };
            return {
                'done': true,
                'value': _r385_t8
            };
        };
        _r385_t9 = r385_t instanceof Array;
        if (_r385_t9) {
            _r385_t10 = r385_n = r385_t.length;
            _r385_t11 = r385_i = 0;
            _r385_t12 = function (_r385_t14) {
                return _r385_t7(_r385_t14);
            };
            _r385_t13 = function (_r385_t15) {
                _r385_t16 = r385_i < r385_n;
                if (_r385_t16) {
                    _r385_t0 = function (_r385_t17) {
                        return _r385_t13(r385_i = r385_i + 1);
                    };
                    return {
                        'value': [
                            r385_i,
                            r385_t[r385_i]
                        ],
                        'done': false
                    };
                } else
                    return _r385_t12(_r385_t15);
            };
            return _r385_t13();
        } else {
            _r385_t18 = r385_a = Object.keys(r385_t);
            _r385_t19 = r385_n = r385_a.length;
            _r385_t20 = r385_i = 0;
            _r385_t21 = function (_r385_t23) {
                return _r385_t7(_r385_t23);
            };
            _r385_t22 = function (_r385_t24) {
                _r385_t25 = r385_i < r385_n;
                if (_r385_t25) {
                    _r385_t0 = function (_r385_t26) {
                        return _r385_t22(r385_i = r385_i + 1);
                    };
                    return {
                        'value': [
                            r385_a[r385_i],
                            r385_t[r385_a[r385_i]]
                        ],
                        'done': false
                    };
                } else
                    return _r385_t21(_r385_t24);
            };
            return _r385_t22();
        }
    };
    var _r385_t1 = function (x) {
        try {
            return _r385_t0(x);
        } catch (ex) {
            return _r385_t2(ex);
        }
    };
    var _r385_t2 = function (e) {
        throw e;
    };
    if (this instanceof _r1_t11)
        _r385_t3 = this;
    else {
        _r385_t4 = function () {
            void 0;
        };
        _r385_t4.prototype = _r1_t11.prototype;
        _r385_t3 = new _r385_t4();
    }
    _r385_t3[Symbol.iterator] = function () {
        return _r385_t3;
    };
    _r385_t3.next = _r385_t1;
    _r385_t3.throw = function (x) {
        return _r385_t2(x);
    };
    return _r385_t3;
};
var _r1_t8 = _s0_t0;
var r1_mix = _r1_t8.mix;
var r1_clamp = _r1_t8.clamp;
var r1_fallback = _r1_t8.fallback;
var r1_SuffixCfg = _r1_t8.SuffixCfg;
var _r1_t9 = _s0_t1;
var r1_Dotless = _r1_t9.Dotless;
var r1_CvDecompose = _r1_t9.CvDecompose;
var r1_MathSansSerif = _r1_t9.MathSansSerif;
var _r1_t10 = _s0_t2;
var r1_maskBit = _r1_t10.maskBit;
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
    r271_xn$Capture_Ext$2Lrc2b['$defineGlyphBlockImpl$'](r271_xn$Capture_Ext$2Lrc2b, 'Letter-Latin-K', function (r272_xn$Capture$2Lrc8, r272_xn$ExportCapture$2Lrc4b) {
        var r272_suffix, r272_LegsImpl, r272_slabLT, r272_slabLB, r272_slabLegs, r272_slabKS, _r272_t13, _r272_t16, _r272_t18, _r272_t19, _r272_t20, _r272_tag21, _r272_t22, _r272_tag23, _r272_t24, _r272_tag25;
        var _r272_t0 = r272_xn$Capture$2Lrc8;
        var r272_xn$createAndSaveGlyphImpl$2Lrc3c = _r272_t0['$createAndSaveGlyphImpl$'];
        var r272_xn$NamedParameterPair$2Lrc9b = _r272_t0['$NamedParameterPair$'];
        var r272_xn$assignUnicodeImpl$2Lrc8b = _r272_t0['$assignUnicodeImpl$'];
        var r272_xn$execState$2Lrc0b = _r272_t0['$execState$'];
        var r272_MarkSet = _r272_t0.MarkSet;
        var r272_AS_BASE = _r272_t0.AS_BASE;
        var r272_ALSO_METRICS = _r272_t0.ALSO_METRICS;
        var r272_tagged = _r272_t0.tagged;
        var r272_DivFrame = _r272_t0.DivFrame;
        var _r272_t1 = r272_xn$Capture$2Lrc8.Metrics;
        var r272_UPM = _r272_t1.UPM;
        var r272_Width = _r272_t1.Width;
        var r272_SB = _r272_t1.SB;
        var r272_CAP = _r272_t1.CAP;
        var r272_XH = _r272_t1.XH;
        var r272_Ascender = _r272_t1.Ascender;
        var r272_Descender = _r272_t1.Descender;
        var r272_TanSlope = _r272_t1.TanSlope;
        var r272_HVContrast = _r272_t1.HVContrast;
        var r272_Upward = _r272_t1.Upward;
        var r272_Downward = _r272_t1.Downward;
        var r272_Rightward = _r272_t1.Rightward;
        var r272_Leftward = _r272_t1.Leftward;
        var r272_O = _r272_t1.O;
        var r272_OX = _r272_t1.OX;
        var r272_Hook = _r272_t1.Hook;
        var r272_HookX = _r272_t1.HookX;
        var r272_Stroke = _r272_t1.Stroke;
        var r272_LongJut = _r272_t1.LongJut;
        var r272_Jut = _r272_t1.Jut;
        var r272_VJut = _r272_t1.VJut;
        var r272_VJutStroke = _r272_t1.VJutStroke;
        var r272_CThin = _r272_t1.CThin;
        var r272_SLAB = _r272_t1.SLAB;
        var r272_HalfStroke = _r272_t1.HalfStroke;
        var r272_RightSB = _r272_t1.RightSB;
        var r272_Middle = _r272_t1.Middle;
        var r272_SideJut = _r272_t1.SideJut;
        var r272_ArchDepthB = _r272_t1.ArchDepthB;
        var r272_AdviceStroke = _r272_t1.AdviceStroke;
        var r272_AdviceStroke2 = _r272_t1.AdviceStroke2;
        var r272_shoulderMidSkew = _r272_t1.shoulderMidSkew;
        var _r272_t2 = r272_xn$Capture$2Lrc8.SpiroFns;
        var r272_g4 = _r272_t2.g4;
        var r272_corner = _r272_t2.corner;
        var r272_flat = _r272_t2.flat;
        var r272_curl = _r272_t2.curl;
        var r272_end = _r272_t2.end;
        var r272_straight = _r272_t2.straight;
        var r272_widths = _r272_t2.widths;
        var r272_heading = _r272_t2.heading;
        var r272_bezControls = _r272_t2.bezControls;
        var r272_quadControls = _r272_t2.quadControls;
        var r272_archv = _r272_t2.archv;
        var r272_arcvh = _r272_t2.arcvh;
        var r272_dispiro = _r272_t2.dispiro;
        var r272_xn$spirooutline$1aao = _r272_t2['spiro-outline'];
        var _r272_t3 = r272_xn$Capture$2Lrc8.BooleFns;
        var r272_union = _r272_t3.union;
        var r272_intersection = _r272_t3.intersection;
        var r272_difference = _r272_t3.difference;
        var _r272_t4 = r272_xn$Capture$2Lrc8.CommonShapes.resolve();
        var r272_xn$noshape$3cah = _r272_t4['no-shape'];
        var r272_Rect = _r272_t4.Rect;
        var r272_HSerif = _r272_t4.HSerif;
        var r272_VSerif = _r272_t4.VSerif;
        var r272_HBar = _r272_t4.HBar;
        var r272_VBar = _r272_t4.VBar;
        var r272_PointingTo = _r272_t4.PointingTo;
        var r272_ExtLineCenter = _r272_t4.ExtLineCenter;
        var r272_DiagCorDs = _r272_t4.DiagCorDs;
        var r272_HalfRectTriangle = _r272_t4.HalfRectTriangle;
        var _r272_t5 = r272_xn$Capture$2Lrc8['Common-Derivatives'].resolve();
        var r272_xn$selectvariant$7Hrq = _r272_t5['select-variant'];
        var r272_xn$referglyph$1aao = _r272_t5['refer-glyph'];
        var r272_alias = _r272_t5.alias;
        var r272_turned = _r272_t5.turned;
        var r272_xn$deriveglyphs$7Hrq = _r272_t5['derive-glyphs'];
        var r272_xn$linkreducedvariant$5sIl8 = _r272_t5['link-reduced-variant'];
        var r272_xn$aliasreducedvariant$1aao8 = _r272_t5['alias-reduced-variant'];
        var _r272_t6 = r272_xn$Capture$2Lrc8['Mark-Shared-Metrics'].resolve();
        var r272_markExtend = _r272_t6.markExtend;
        var _r272_t7 = r272_xn$Capture$2Lrc8['Mark-Above'].resolve();
        var r272_aboveMarkMid = _r272_t7.aboveMarkMid;
        var _r272_t8 = r272_xn$Capture$2Lrc8['Mark-Adjustment'].resolve();
        var r272_ExtendBelowBaseAnchors = _r272_t8.ExtendBelowBaseAnchors;
        var _r272_t9 = r272_xn$Capture$2Lrc8['Letter-Shared-Shapes'].resolve();
        var r272_DiagonalTailInnerRadius = _r272_t9.DiagonalTailInnerRadius;
        var r272_DiagonalTailF = _r272_t9.DiagonalTailF;
        var r272_CyrDescender = _r272_t9.CyrDescender;
        var _r272_t10 = r272_xn$Capture$2Lrc8['Letter-Shared-Shapes'].resolve();
        var r272_LetterBarOverlay = _r272_t10.LetterBarOverlay;
        var r272_PalatalHook = _r272_t10.PalatalHook;
        var r272_TopHook = _r272_t10.TopHook;
        var r272_KBalance = function (r280_slabLT, r280_straightBar) {
            var _r280_t0, _r280_t1;
            return r280_straightBar ? r272_Width / 32 : 0;
        };
        var r272_KBalanceRight = function (r281_slabLegs, r281_straightBar) {
            var _r281_t0, _r281_t1;
            return r281_slabLegs ? 0 : r281_straightBar ? r272_Width / 32 : 0;
        };
        var r272_KO = function (r282_slabLegs, r282_straightBar, r282_top, r282_stroke) {
            var _r282_t0, _r282_t1;
            return r282_straightBar ? ((r282_slabLegs ? 0 : -4) * r272_OX - r282_stroke / 3) * (r272_XH / r282_top) : 0;
        };
        var r272_KAttachment = function (r283_shape, r283_mode, r283_top, r283_left, r283_right, r283_stroke, r283_straightBar) {
            var _r283_t0, _r283_t1;
            if (!r283_shape)
                return r272_xn$noshape$3cah();
            var r283_Ok = r272_KO(r283_mode, true, r283_top, r283_stroke);
            var r283_kshRight = r283_right + r272_KBalanceRight(true, r283_straightBar);
            var r283_serifLengthAdj = r283_Ok + r283_stroke * r272_HVContrast;
            return r283_shape.rSideJut(new r272_xn$NamedParameterPair$2Lrc9b('x', r283_kshRight - r283_serifLengthAdj), new r272_xn$NamedParameterPair$2Lrc9b('y', 0), new r272_xn$NamedParameterPair$2Lrc9b('jut', r272_Jut + r283_serifLengthAdj));
        };
        var r272_KSlabs = function (r287_mode, r287_top, r287_left, r287_right, r287_stroke, r287_straightBar) {
            var _r287_t0, _r287_t1;
            return function () {
                var _r289_t1;
                var _r289_t0 = this;
                var r289_currentGlyph = _r289_t0;
                var r289_Ok = r272_KO(r287_mode, true, r287_top, r287_stroke);
                var r289_kshRight = r287_right + r272_KBalanceRight(true, r287_straightBar);
                var r289_serifLengthAdj = r289_Ok + r287_stroke * r272_HVContrast;
                r289_currentGlyph.include(r272_tagged('serifRT', r1_maskBit(r287_mode, 1) ? r272_HSerif.rt(r289_kshRight - r289_serifLengthAdj, r287_top, r272_SideJut + r289_serifLengthAdj) : r272_xn$noshape$3cah()));
                r289_currentGlyph.include(r272_tagged('serifRB', r1_maskBit(r287_mode, 0) ? r272_HSerif.rb(r289_kshRight - r289_serifLengthAdj, 0, r272_SideJut + r289_serifLengthAdj) : r272_xn$noshape$3cah()));
                return void 0;
            };
        };
        var r272_KLegs = function () {
            var r294_Straight, r294_Symmetric, r294_Curly, r294_Cursive, r294_CursiveTailed;
            var r294_exports = {};
            r294_exports.Straight = r294_Straight = function (r302_fHookTop, r302_left, r302_right, r302_stroke, r302_top, r302_slabLT, r302_slabLegs, r302_attachment) {
                var _r302_t0, _r302_t1;
                return function () {
                    var r304_kHookTopMix, _r304_t1;
                    var _r304_t0 = this;
                    var r304_currentGlyph = _r304_t0;
                    var r304_fine = r272_AdviceStroke(3.5);
                    var r304_Ok = r272_KO(r302_slabLegs, true, r302_top, r302_stroke);
                    var r304_kshLeft = r302_left + r272_KBalance(r302_slabLT, true);
                    var r304_kshRightBot = r302_right + r272_KBalanceRight(r302_slabLegs, true);
                    var r304_kshRightTop = r302_fHookTop ? r304_kshRightBot - r272_HookX * 0.5 + 0.5 * r302_stroke * r272_HVContrast : r304_kshRightBot;
                    var r304_attach = r302_top * 0.42 - r302_stroke;
                    var r304_attach2 = r302_top * 0.72 + r302_stroke;
                    r304_currentGlyph.setBaseAnchor('trailing', r304_kshRightBot - r304_Ok, 0);
                    var r304_kshRightSerifs = r302_right + r272_KBalanceRight(true, true);
                    var r304_serifLengthAdj = r304_Ok + r302_stroke * r272_HVContrast;
                    var r304_TopStrokeMask = function (r306_offset) {
                        var _r306_t0, _r306_t1;
                        return r272_Rect(r302_top, 0, r304_kshLeft, r1_maskBit(r302_slabLegs, 1) ? r304_kshRightSerifs + r306_offset + r272_SideJut - r272_TanSlope * r272_Stroke : 2 * r272_Width);
                    };
                    var r304_BottomStrokeMask = function (r307_offset) {
                        var _r307_t0, _r307_t1;
                        return r272_Rect(r302_top, 0, r304_kshLeft, r1_maskBit(r302_slabLegs, 0) ? r304_kshRightSerifs + r307_offset + r272_SideJut + r272_TanSlope * r272_Stroke : 2 * r272_Width);
                    };
                    if (r302_fHookTop) {
                        r304_kHookTopMix = 0.5;
                        if (r302_fHookTop)
                            r304_currentGlyph.include(r272_dispiro(r272_widths.rhs(r302_stroke), r272_straight.left.start(r304_kshRightBot + (r1_maskBit(r302_slabLegs, 1) ? r272_SideJut : 0) - r272_TanSlope * r302_stroke, r302_top - r302_stroke), r272_flat(r1_mix(r304_kshRightTop - r304_Ok, r304_kshLeft + r302_stroke, r304_kHookTopMix), r1_mix(r302_top, r304_attach, r304_kHookTopMix), r272_widths.rhs(r1_mix(r302_stroke, r304_fine, r304_kHookTopMix))), r272_curl(r304_kshLeft + r302_stroke, r304_attach, r272_widths.rhs(r304_fine))));
                    } else
                        r304_currentGlyph.include(r272_intersection(r304_TopStrokeMask(0), r272_dispiro(r272_widths.rhs(r302_stroke), r272_flat(r304_kshRightTop - r304_Ok, r302_top), r272_curl(r304_kshLeft + r302_stroke, r304_attach, r272_widths(0, r304_fine)))));
                    r304_currentGlyph.include(r272_intersection(r304_BottomStrokeMask(-0.1), r272_xn$spirooutline$1aao(r272_corner(r304_kshLeft + r302_stroke, 0), r272_corner(r304_kshLeft + r302_stroke, r304_attach + 1), r272_corner(r304_kshRightTop - r304_Ok - 0.1, r302_top), r272_corner(r304_kshRightBot - r304_Ok, r302_top), r272_corner(r304_kshRightBot - r304_Ok, 0)), r272_dispiro(r272_flat(r304_kshRightBot - r304_Ok, 0, r272_widths.lhs(r302_stroke)), r272_curl(r304_kshLeft + r302_stroke, r304_attach2, r272_widths.lhs(r304_fine)))));
                    r304_currentGlyph.include(r272_difference(r272_union(r272_KSlabs(r302_slabLegs, r302_top, r302_left, r302_right, r302_stroke, true), r272_KAttachment(r302_attachment, r302_slabLegs, r302_top, r302_left, r302_right, r302_stroke, true)), r272_union(r272_HalfRectTriangle(r304_kshRightBot - r304_Ok - 0.1, 0, r304_kshLeft + r302_stroke - 0.1, r304_attach2), r272_intersection(r304_TopStrokeMask(-0.1), r272_HalfRectTriangle(r304_kshRightTop - r304_Ok - 0.1, r302_top, r304_kshLeft + r302_stroke - 0.1, r304_attach)))));
                    return void 0;
                };
            };
            r294_exports.Symmetric = r294_Symmetric = function (r313_leadGap, r313_hookDepth) {
                var _r313_t0, _r313_t1;
                return function (r314_fHookTop, r314_left, r314_right, r314_stroke, r314_top, r314_slabLT, r314_slabLegs, r314_attachment) {
                    var _r314_t0, _r314_t1;
                    return function () {
                        var r316_kHookTopMix, r316_kshRightHookTop, _r316_t1;
                        var _r316_t0 = this;
                        var r316_currentGlyph = _r316_t0;
                        var r316_fine = r272_AdviceStroke(r313_leadGap ? 3.5 : 3);
                        var r316_Ok = r272_KO(r314_slabLegs, true, r314_top, r314_stroke);
                        var r316_kshLeft = r314_left + r272_KBalance(r314_slabLT, true);
                        var r316_kshRight = r314_right + r272_KBalanceRight(r314_slabLegs, true);
                        var r316_xAttach = r316_kshLeft + r314_stroke * r272_HVContrast + (r313_leadGap || r316_fine);
                        var r316_yAttach = r314_top * (r313_leadGap ? 0.42 : 0.49) - r314_stroke * (r313_leadGap ? 1 : -0.1);
                        var r316_coYAttach = r314_top - r316_yAttach;
                        if (!r313_hookDepth)
                            r316_currentGlyph.setBaseAnchor('trailing', r316_kshRight - r316_Ok, 0);
                        var r316_StrokeMask = function (r318_bit, r318_t, r318_b, r318_offset) {
                            var _r318_t0, _r318_t1;
                            return r272_Rect(r318_t, r318_b, r316_kshLeft, r1_maskBit(r314_slabLegs, r318_bit) ? r316_kshRight + r318_offset : 2 * r272_Width);
                        };
                        if (r314_fHookTop) {
                            r316_kHookTopMix = 0.5;
                            r316_kshRightHookTop = r316_kshRight - r272_HookX * 0.5 + 0.5 * r314_stroke * r272_HVContrast;
                            r316_currentGlyph.include(r272_tagged('strokeRT', r272_intersection(r272_Rect(r314_top, 0.5 * r314_top, r316_kshLeft, 2 * r272_Width), r272_dispiro(r272_widths.rhs(r314_stroke), r272_straight.left.start(r316_kshRight + (r1_maskBit(r314_slabLegs, 1) ? r272_SideJut : 0) - r272_TanSlope * r314_stroke, r314_top - r314_stroke), r272_flat(r1_mix(r316_kshRightHookTop - r316_Ok, r316_xAttach, r316_kHookTopMix), r1_mix(r314_top, r316_yAttach, r316_kHookTopMix), r272_widths.rhs(r1_mix(r314_stroke, r316_fine, r316_kHookTopMix))), r272_curl(r1_mix(r316_kshRightHookTop - r316_Ok, r316_xAttach, 2), r1_mix(r314_top, r316_yAttach, 2), r272_widths.rhs(r316_fine))))));
                        } else
                            r316_currentGlyph.include(r272_tagged('strokeRT', r272_intersection(r316_StrokeMask(1, r314_top, 0.5 * r314_top, 0), r272_dispiro(r272_widths.rhs(r314_stroke), r272_flat(r316_kshRight - r316_Ok, r314_top), r272_curl(r1_mix(r316_kshRight - r316_Ok, r316_xAttach, 2), r1_mix(r314_top, r316_yAttach, 2), r272_widths.rhs(r316_fine))))));
                        if (r313_hookDepth) {
                            r316_currentGlyph.include(r272_ExtendBelowBaseAnchors(r313_hookDepth));
                            r316_currentGlyph.include(r272_tagged('strokeRB', r272_dispiro(r272_flat(r316_kshLeft, 0.5 * r314_top + r314_stroke / 2, r272_widths.rhs.heading(r314_stroke, r272_Rightward)), r272_curl(r1_mix(r316_kshLeft, r314_right, 0.5), 0.5 * r314_top + r314_stroke / 2), r272_archv(), r272_flat(r314_right, 0.5 * r314_top + r314_stroke / 2 - r272_ArchDepthB), r272_curl(r314_right, r313_hookDepth + r272_Hook + r314_stroke / 2), r272_arcvh(), r272_straight.left.end(r314_right - r272_HookX - 0.5 * r314_stroke * r272_HVContrast, r313_hookDepth))));
                        } else {
                            r316_currentGlyph.include(r272_tagged('strokeRB', r272_intersection(r316_StrokeMask(0, 0.5 * r314_top, 0, 0), r272_dispiro(r272_flat(r316_kshRight - r316_Ok, 0, r272_widths.lhs(r314_stroke)), r272_curl(r1_mix(r316_kshRight - r316_Ok, r316_xAttach, 2), r1_mix(0, r316_coYAttach, 2), r272_widths.lhs(r316_fine))))));
                            if (r313_leadGap)
                                r316_currentGlyph.include(r272_intersection(r272_HBar.m(r316_kshLeft, 2 * r272_Width, 0.5 * r314_top, r314_stroke), r272_union(r272_Rect(r314_top, 0, r316_kshLeft, r316_xAttach), r272_xn$spirooutline$1aao(r272_corner((r314_fHookTop ? r316_kshRightHookTop : r316_kshRight) - r316_Ok - 1, r314_top), r272_corner(r316_xAttach - 1, r316_yAttach), r272_corner(r316_xAttach - 1, r314_top)), r272_xn$spirooutline$1aao(r272_corner(r316_kshRight - r316_Ok - 1, 0), r272_corner(r316_xAttach - 1, r316_coYAttach), r272_corner(r316_xAttach - 1, 0)))));
                        }
                        r316_currentGlyph.include(r272_difference(r272_union(r272_KSlabs(r314_slabLegs, r314_top, r314_left, r314_right, r314_stroke, true), r272_KAttachment(r314_attachment, r314_slabLegs, r314_top, r314_left, r314_right, r314_stroke, true)), r272_union(r272_intersection(r316_StrokeMask(1, r314_top, 0.5 * r314_top, -0.1), r272_HalfRectTriangle(r316_kshRight - r316_Ok - 0.1, r314_top, r1_mix(r316_kshRight - r316_Ok, r316_xAttach, 2) - 0.1, r1_mix(r314_top, r316_yAttach, 2))), r272_intersection(r316_StrokeMask(0, 0.5 * r314_top, 0, -0.1), r272_HalfRectTriangle(r316_kshRight - r316_Ok - 0.1, 0, r1_mix(r316_kshRight - r316_Ok, r316_xAttach, 2) - 0.1, r1_mix(0, r316_coYAttach, 2))))));
                        return void 0;
                    };
                };
            };
            r294_exports.Curly = r294_Curly = function (r327_fHookTop, r327_left, r327_right, r327_stroke, r327_top, r327_slabLT, r327_slabLegs, r327_attachment) {
                var _r327_t0, _r327_t1;
                return function () {
                    var _r329_t1;
                    var _r329_t0 = this;
                    var r329_currentGlyph = _r329_t0;
                    var r329_turn = r327_top * 0.99;
                    var r329_fine = r272_AdviceStroke(3.5);
                    var r329_kshLeft = r327_left + r272_KBalance(r327_slabLT, false);
                    var r329_kshRight = r327_right + r272_KBalanceRight(r327_slabLegs, false);
                    r329_currentGlyph.setBaseAnchor('trailing', r329_kshRight - r272_O, 0);
                    var r329_upperCurvature = function () {
                        var _r331_t0, _r331_t1;
                        return r272_bezControls(0, 0.3, 0.5, 0.65, 8);
                    };
                    var r329_upperCurvatureHT = function () {
                        var _r332_t0, _r332_t1;
                        return r272_bezControls(0.5, 0, 0.5, 0.65, 8, {
                            'blend': function (r333_t) {
                                var _r333_t0, _r333_t1;
                                return r272_widths.rhs(r1_mix(r327_stroke, r329_fine, r333_t));
                            }
                        });
                    };
                    var r329_lowerCurvature = function () {
                        var _r334_t0, _r334_t1;
                        return r272_quadControls(0, 0.3, 8);
                    };
                    var r329_xAttach1 = r329_kshLeft + r327_stroke * r272_HVContrast;
                    var r329_yAttach1 = r327_top * (r327_slabLegs ? 0.325 : 0.375);
                    var r329_xAttach2 = r329_kshLeft + r327_stroke * r272_HVContrast;
                    var r329_yAttach2 = r327_top * 0.75;
                    var r329_kDiag = r1_mix(1, r272_DiagCorDs(r327_top - r329_yAttach1, r329_kshRight - r329_kshLeft, r327_stroke), 0.5);
                    r329_currentGlyph.include(r272_intersection(r272_Rect(r327_top, 0, r329_kshLeft, 2 * r272_Width), r327_fHookTop ? r272_dispiro(r272_straight.left.start(r329_kshRight + (r1_maskBit(r327_slabLegs, 1) ? r272_SideJut : 0) - r272_TanSlope * r327_stroke, r327_top - r327_stroke, r272_widths.rhs(r327_stroke)), r329_upperCurvatureHT(), r272_g4(r329_xAttach1, r329_yAttach1, r272_widths.rhs(r329_fine))) : r272_dispiro(r272_g4.down.start(r329_kshRight, r327_top, r272_widths.rhs.heading(r327_stroke, r272_Downward)), r329_upperCurvature(), r272_g4(r329_xAttach1, r329_yAttach1, r272_widths.rhs(r329_fine)))));
                    r329_currentGlyph.include(r272_difference(r272_dispiro(r272_g4.up.start(r329_kshRight - r272_O, 0, r272_widths.lhs.heading(r327_stroke, r272_Upward)), r329_lowerCurvature(), r272_g4(r329_xAttach2, r329_yAttach2, r272_widths.center(r329_fine))), r327_fHookTop ? r272_xn$spirooutline$1aao(r272_straight.left.start(r329_kshRight + (r1_maskBit(r327_slabLegs, 1) ? r272_SideJut : 0) - r272_TanSlope * r327_stroke, r327_top - r327_stroke + 0.1), r329_upperCurvatureHT(), r272_corner(r329_xAttach1 - 0.1, r329_yAttach1), r272_corner(-r272_Width, r329_yAttach1), r272_corner(-r272_Width, r327_top * 2), r272_corner(2 * r272_Width, r327_top * 2), r272_corner(2 * r272_Width, r327_top - r327_stroke + 0.1)) : r272_xn$spirooutline$1aao(r272_corner.down.start(r329_kshRight - 0.1, r327_top), r329_upperCurvature(), r272_corner(r329_kshLeft + r327_stroke, r329_yAttach1 + 0.1), r272_corner(r329_kshLeft, 0), r272_corner(r329_kshLeft, r327_top))));
                    r329_currentGlyph.include(r272_difference(r272_union(r272_KSlabs(r327_slabLegs, r327_top, r327_left, r327_right, r327_stroke, false), r272_KAttachment(r327_attachment, r327_slabLegs, r327_top, r327_left, r327_right, r327_stroke, false)), r272_union(r272_HalfRectTriangle(r329_kshRight, r327_top, r329_xAttach1, r329_yAttach1), r272_HalfRectTriangle(r329_kshRight - r272_O - r327_stroke / 2 * r272_HVContrast, 0, r329_xAttach2, r329_yAttach2))));
                    return void 0;
                };
            };
            var r294_CursiveDimen = function (r338_left, r338_right, r338_top, r338_stroke, r338_slabLT, r338_slabLegs) {
                var _r338_t0, _r338_t1;
                var r338_kshLeft = r338_left + r272_KBalance(r338_slabLegs, true);
                var r338_kshRight = r338_right + r272_KBalanceRight(r338_slabLegs, true);
                var r338_Ok = r272_KO(r338_slabLegs, true, r338_top, r338_stroke);
                var r338_arcFine = r338_stroke * r272_CThin;
                var r338_arcStroke = r272_AdviceStroke2(2, 3, r338_top);
                var r338_arcTerminalFine = r272_AdviceStroke2(3, 4, r338_top);
                var r338_expansion = r272_Width / (r272_UPM / 2) - 1;
                var r338_pArcStartY = 0.46 + 0.1 * (r338_arcStroke / r272_Width);
                var r338_pArcTopX = 0.625 - 0.05 * (r338_arcStroke / r272_Width) - 0 * r338_expansion * (r338_arcStroke / r272_UPM);
                var r338_pArcRightX = 0.925 - r272_TanSlope * 0.25 + ((r272_SLAB ? 0 : 0.05) + 0.75 * r272_TanSlope) * (r338_arcStroke / r272_Width);
                var r338_pArcRightY = 0.575 - 0.625 * (r338_arcStroke / r272_Width) - 0.5 * r338_expansion * (r338_arcStroke / r272_UPM);
                var r338_pArcTerminalX = 0.15 - 0.5 * (r338_arcStroke / r272_Width);
                var r338_pArcBottomX = 0.15 + 0.5 * (r338_arcStroke / r272_Width);
                var r338_pArcBottomY = 0.45 + 0.5 * (r338_arcStroke / r272_Width);
                var r338_arcRightSlope = 0.05 + 0.2 * (r338_arcStroke / r272_Width) + 1 * r338_expansion * (r338_arcStroke / r272_UPM);
                var r338_arcTopSkew = r272_shoulderMidSkew(r338_arcFine, r338_arcStroke);
                var r338_arcStartX = r338_kshLeft + r272_HVContrast * (r338_stroke - r338_arcFine);
                var r338_arcStartY = r338_top * r338_pArcStartY;
                var r338_arcTerminalX = r1_mix(r338_arcStartX, r338_kshRight, r338_pArcTerminalX);
                var r338_arcBottomX = r1_mix(r338_arcStartX, r338_kshRight, r338_pArcBottomX);
                var r338_arcBottomY = r1_mix(0, r338_top, r338_pArcBottomY);
                var r338_arcTerminalY = r338_arcBottomY + r338_arcStroke * 0.125 - r272_O;
                var r338_arcRightX = r338_kshRight * r338_pArcRightX + 0.2 * r338_stroke * r272_HVContrast;
                var r338_arcRightY = r1_mix(r338_arcBottomY, r338_top, r338_pArcRightY);
                var r338_arcTopX = r1_mix(r338_arcStartX, r338_arcRightX, r338_pArcTopX);
                var r338_arcTopY = r338_top - r272_O;
                return {
                    'Ok': r338_Ok,
                    'arcStartX': r338_arcStartX,
                    'arcStartY': r338_arcStartY,
                    'arcFine': r338_arcFine,
                    'arcRightX': r338_arcRightX,
                    'arcRightY': r338_arcRightY,
                    'arcRightSlope': r338_arcRightSlope,
                    'arcTopX': r338_arcTopX,
                    'arcTopY': r338_arcTopY,
                    'arcStroke': r338_arcStroke,
                    'arcTopSkew': r338_arcTopSkew,
                    'arcBottomX': r338_arcBottomX,
                    'arcBottomY': r338_arcBottomY,
                    'arcTerminalX': r338_arcTerminalX,
                    'arcTerminalY': r338_arcTerminalY,
                    'arcTerminalFine': r338_arcTerminalFine,
                    'kshLeft': r338_kshLeft,
                    'kshRight': r338_kshRight
                };
            };
            var r294_CursiveLoopT = function (r339_sink, r339_offset, r339_left, r339_right, r339_stroke, r339_top, r339_slabLT, r339_slabLegs) {
                var _r339_t0, _r339_t1;
                var r339_dim = r294_CursiveDimen(r339_left, r339_right, r339_top, r339_stroke, r339_slabLT, r339_slabLegs);
                return r339_sink(r272_g4.up.start(r339_dim.arcStartX + r339_offset, r339_dim.arcStartY, r272_widths.rhs.heading(r339_dim.arcFine, r272_Upward)), r272_arcvh(8), r272_g4(r339_dim.arcTopX, r339_dim.arcTopY - r339_offset, r272_widths.rhs.heading(r339_dim.arcStroke, {
                    'y': +1,
                    'x': r339_dim.arcTopSkew
                })), r272_archv(8, 2), r272_g4.down.mid(r339_dim.arcRightX - r339_offset, r339_dim.arcRightY - 0.5 * r339_dim.arcRightSlope * r339_dim.arcStroke * r272_HVContrast, r272_heading({
                    'y': r339_dim.arcRightSlope,
                    'x': r272_HVContrast
                })), r272_arcvh(), r272_g4(r339_dim.arcBottomX, r339_dim.arcBottomY - r339_dim.arcStroke + r339_offset, r272_widths.rhs.heading(r339_dim.arcTerminalFine, r272_Leftward)), r272_g4(r339_dim.arcStartX, r339_dim.arcTerminalY - r339_dim.arcStroke + r339_offset, r272_widths.rhs.heading(r339_dim.arcStroke, r272_Leftward)));
            };
            r294_exports.Cursive = r294_Cursive = function (r341_fHookTop, r341_left, r341_right, r341_stroke, r341_top, r341_slabLT, r341_slabLegs, r341_attachment) {
                var _r341_t0, _r341_t1;
                return function () {
                    var _r343_t1;
                    var _r343_t0 = this;
                    var r343_currentGlyph = _r343_t0;
                    var r343_dim = r294_CursiveDimen(r341_left, r341_right, r341_top, r341_stroke, r341_slabLT, r341_slabLegs);
                    var r343_BottomStrokeMask = function () {
                        var _r344_t0, _r344_t1;
                        return r272_Rect(r272_XH, 0, 0, r341_slabLegs ? r343_dim.kshRight + r272_SideJut + r272_TanSlope * r272_Stroke : r272_Width * 2);
                    };
                    r343_currentGlyph.include(r294_CursiveLoopT(r272_dispiro, 0, r341_left, r341_right, r341_stroke, r341_top, r341_slabLT, r341_slabLegs));
                    r343_currentGlyph.include(r272_difference(r272_intersection(r343_BottomStrokeMask(), r272_dispiro(r272_flat(r343_dim.arcTerminalX, r343_dim.arcTerminalY, r272_widths.lhs()), r272_curl(r343_dim.kshRight - r343_dim.Ok, 0, r272_widths.rhs()))), r294_CursiveLoopT(r272_xn$spirooutline$1aao, -r272_O, r341_left, r341_right, r341_stroke, r341_top, r341_slabLT, r341_slabLegs)));
                    r343_currentGlyph.include(r272_difference(r272_union(r272_KSlabs(r341_slabLegs ? 1 : 0, r341_top, r341_left, r341_right, r341_stroke, true), r272_KAttachment(r341_attachment, r341_slabLegs, r341_top, r341_left, r341_right, r341_stroke, true)), r272_HalfRectTriangle(r343_dim.kshRight - r343_dim.Ok - 0.1, 0, r343_dim.arcTerminalX - 0.1, r343_dim.arcTerminalY)));
                    return void 0;
                };
            };
            r294_exports.CursiveTailed = r294_CursiveTailed = function (r349_fHookTop, r349_left, r349_right, r349_stroke, r349_top, r349_slabLT, r349_slabLegs, r349_attachment) {
                var _r349_t0, _r349_t1;
                return function () {
                    var _r351_t1;
                    var _r351_t0 = this;
                    var r351_currentGlyph = _r351_t0;
                    var r351_dim = r294_CursiveDimen(r349_left, r349_right, r349_top, r349_stroke, r349_slabLT, r349_slabLegs);
                    r351_currentGlyph.include(r294_CursiveLoopT(r272_dispiro, 0, r349_left, r349_right, r349_stroke, r349_top, r349_slabLT, r349_slabLegs));
                    var r351_swDiagTail = r272_AdviceStroke(2, 1 - (r351_dim.kshLeft - r272_SB) / r272_Width);
                    var r351_swDiagTailAdj = r351_swDiagTail / r1_mix(1, r272_HVContrast, 0.375);
                    var r351_xDTGap = 0.1 * (r272_RightSB - r272_SB) - (0.125 + r1_clamp(0, 0.375, 0.5 * (r272_Width / r272_UPM * 2 - 1))) * r351_swDiagTail;
                    var r351_xDTStart = r351_dim.arcTerminalX + r351_swDiagTail * r272_HVContrast + r351_xDTGap;
                    var r351_xDTEnd = r351_dim.kshRight - 0.8 * r272_Hook - 0.25 * r351_swDiagTail * r272_HVContrast + r351_xDTGap * 0.625;
                    var r351_tailAngle = Math.min(85, 50 + Math.atan2(0.75 * r351_swDiagTail, r272_Hook) / Math.PI * 180);
                    var r351_dtInnerRadius = r1_clamp(0.125, 1, r1_mix(1, r272_Width / r272_UPM * 2, 3)) * r272_DiagonalTailInnerRadius();
                    r351_currentGlyph.include(r272_difference(r272_dispiro(r272_flat(r351_xDTStart, r351_dim.arcTerminalY, r272_widths.center(r351_swDiagTailAdj)), r272_curl(r351_xDTEnd + 0.125 * r351_dtInnerRadius, 0.9 * r351_swDiagTail + 0.5 * r351_dtInnerRadius), r272_DiagonalTailF(1, r272_DivFrame(1), r351_xDTEnd, 0, r351_dtInnerRadius, r351_tailAngle, r272_Hook + r351_swDiagTail / 4, r351_swDiagTail)), r294_CursiveLoopT(r272_xn$spirooutline$1aao, -r272_O, r349_left, r349_right, r349_stroke, r349_top, r349_slabLT, r349_slabLegs)));
                    return void 0;
                };
            };
            return r294_exports;
        }();
        var r272_KHookTopBar = function (r354_slabLegs, r354_straightBar) {
            var _r354_t0, _r354_t1;
            return r272_TopHook.lBarInner(new r272_xn$NamedParameterPair$2Lrc9b('x', r272_SB + r272_KBalance(r354_slabLegs, r354_straightBar)), new r272_xn$NamedParameterPair$2Lrc9b('yBot', 0), new r272_xn$NamedParameterPair$2Lrc9b('yTop', r272_Ascender));
        };
        var r272_CyrlVbGap = (r272_RightSB - r272_SB) * 0.375;
        var r272_CyrlVbLength = function (r358_top) {
            var _r358_t0, _r358_t1;
            return r358_top * 0.375 + r272_Stroke;
        };
        var r272_CyrlVbSw = r272_AdviceStroke(3);
        var r272_UpperKConfig = r1_SuffixCfg.weave({
            'straight': r272_KLegs.Straight,
            'curly': r272_KLegs.Curly,
            'symmetricTouching': r272_KLegs.Symmetric(0),
            'symmetricConnected': r272_KLegs.Symmetric(r272_AdviceStroke(6)),
            'symmetricConnectedKH': r272_KLegs.Symmetric(r272_AdviceStroke(6), r272_Descender),
            'symmetricConnectedVB': r272_KLegs.Symmetric(r272_CyrlVbGap)
        }, {
            'serifless': [
                0,
                0,
                0,
                0
            ],
            'topLeftSerifed': [
                2,
                0,
                0,
                0
            ],
            'bottomRightSerifed': [
                0,
                0,
                1,
                0
            ],
            'bottomRightSerifed2': [
                0,
                0,
                0,
                1
            ],
            'topLeftAndBottomRightSerifed': [
                2,
                0,
                1,
                0
            ],
            'topLeftAndBottomRightSerifed2': [
                2,
                0,
                0,
                1
            ],
            'serifed': [
                1,
                1,
                3,
                0
            ],
            'serifedKH': [
                1,
                1,
                2,
                0
            ],
            'serifed2': [
                1,
                1,
                2,
                1
            ]
        });
        var r272_UpperKLTSerif = function (r359_top, r359_sw, r359_slabLT, r359_straightBar) {
            var r359__, _r359_t1, _r359_t2;
            var _r359_t0 = r359_slabLT;
            return 2 === _r359_t0 ? r272_HSerif.lt(r272_SB + r272_KBalance(r359_slabLT, r359_straightBar), r359_top, r272_SideJut) : 1 === _r359_t0 ? r272_HSerif.mt(r272_SB + r272_KBalance(r359_slabLT, r359_straightBar) + 0.5 * r359_sw * r272_HVContrast, r359_top, r272_Jut) : (r359__ = _r359_t0, function () {
                var _r361_t1;
                var _r361_t0 = this;
                var r361_currentGlyph = _r361_t0;
                return void 0;
            });
        };
        var r272_UpperKLBSerif = function (r362_top, r362_sw, r362_slabLT, r362_straightBar) {
            var r362__, _r362_t1, _r362_t2;
            var _r362_t0 = r362_slabLT;
            return 2 === _r362_t0 ? r272_HSerif.lb(r272_SB + r272_KBalance(r362_slabLT, r362_straightBar), 0, r272_SideJut) : 1 === _r362_t0 ? r272_HSerif.mb(r272_SB + r272_KBalance(r362_slabLT, r362_straightBar) + 0.5 * r362_sw * r272_HVContrast, 0, r272_Jut) : (r362__ = _r362_t0, function () {
                var _r364_t1;
                var _r364_t0 = this;
                var r364_currentGlyph = _r364_t0;
                return void 0;
            });
        };
        var r272_CyrlKaVBar = function (r365_top, r365_slabLT, r365_straightBar) {
            var _r365_t0, _r365_t1;
            return r272_VBar.m(r272_SB + r272_KBalance(r365_slabLT, r365_straightBar) + 0.5 * r272_HVContrast * r272_CyrlVbSw + 0.7 * r272_CyrlVbGap, r365_top / 2 - r272_CyrlVbLength(r365_top) / 2, r365_top / 2 + r272_CyrlVbLength(r365_top) / 2, Math.min(r272_AdviceStroke(5), r272_CyrlVbGap * 0.5));
        };
        var r272_GrekKaiAttachmentshape = function (r366_fSerif) {
            var _r366_t0, _r366_t1;
            var r366_shapeDepth = 0.8 * r272_Descender - 0.25 * r272_Stroke;
            return r272_PointingTo(0, 0, r366_shapeDepth, r366_shapeDepth, function (r367_mag) {
                var _r367_t0, _r367_t1;
                return function () {
                    var _r369_t1;
                    var _r369_t0 = this;
                    var r369_currentGlyph = _r369_t0;
                    var r369_kSw = r1_mix(1, r272_HVContrast, Math.sqrt(2) / 2);
                    r369_currentGlyph.include(r272_dispiro(r272_widths.lhs(r272_Stroke * r369_kSw), r272_flat(0, 0), r272_curl(r367_mag, 0)));
                    if (r366_fSerif)
                        r369_currentGlyph.include(r272_dispiro(r272_widths.center(r272_Stroke / r369_kSw), r272_flat(0, r272_Stroke * r369_kSw + r272_SideJut), r272_curl(0, 0 - r272_SideJut)));
                    return void 0;
                };
            });
        };
        r272_xn$createAndSaveGlyphImpl$2Lrc3c('UpperKaiSymbolAttachment/sans', null, function () {
            var _r374_t1;
            var _r374_t0 = this;
            var r374_currentGlyph = _r374_t0;
            r374_currentGlyph.setWidth(0);
            r374_currentGlyph.setMarkAnchor('trailing', 0, 0);
            r374_currentGlyph.include(r272_GrekKaiAttachmentshape(false));
            return void 0;
        });
        r272_xn$createAndSaveGlyphImpl$2Lrc3c('UpperKaiSymbolAttachment/serifed', null, function () {
            var _r380_t1;
            var _r380_t0 = this;
            var r380_currentGlyph = _r380_t0;
            r380_currentGlyph.setWidth(0);
            r380_currentGlyph.setMarkAnchor('trailing', 0, 0);
            r380_currentGlyph.include(r272_GrekKaiAttachmentshape(true));
            return void 0;
        });
        var _r272_t11 = _r1_t2(r272_UpperKConfig)[Symbol.iterator]();
        var _r272_t12 = void 0;
        while (!(_r272_t12 = _r272_t11.next()).done) {
            _r272_t13 = _r272_t12.value;
            r272_suffix = _r272_t13[0];
            r272_LegsImpl = _r272_t13[1][0];
            r272_slabLT = _r272_t13[1][1][0];
            r272_slabLB = _r272_t13[1][1][1];
            r272_slabLegs = _r272_t13[1][1][2];
            r272_slabKS = _r272_t13[1][1][3];
            _r272_t13[1][1];
            _r272_t13[1];
            (function () {
                var r388_straightBar = r272_LegsImpl !== r272_KLegs.Curly;
                var r388_KBaseShape = function (r389_sw, r389_top, r389_attachment) {
                    var _r389_t0, _r389_t1;
                    return function () {
                        var _r391_t1;
                        var _r391_t0 = this;
                        var r391_currentGlyph = _r391_t0;
                        r391_currentGlyph.include(r272_VBar.l(r272_SB + r272_KBalance(r272_slabLT, r388_straightBar), 0, r389_top, r389_sw));
                        r391_currentGlyph.include(r272_LegsImpl(false, r272_SB, r272_RightSB, r389_sw, r389_top, r272_slabLT, r272_slabLegs, r389_attachment));
                        if (r272_slabLT)
                            r391_currentGlyph.include(r272_UpperKLTSerif(r389_top, r389_sw, r272_slabLT, r388_straightBar));
                        if (r272_slabLB)
                            r391_currentGlyph.include(r272_UpperKLBSerif(r389_top, r389_sw, r272_slabLT, r388_straightBar));
                        return void 0;
                    };
                };
                r272_xn$createAndSaveGlyphImpl$2Lrc3c('K.' + r272_suffix, null, function () {
                    var _r398_t1;
                    var _r398_t0 = this;
                    var r398_currentGlyph = _r398_t0;
                    r398_currentGlyph.include(r272_MarkSet.capital());
                    r398_currentGlyph.include(r388_KBaseShape(r272_Stroke, r272_CAP));
                    return void 0;
                });
                r272_xn$createAndSaveGlyphImpl$2Lrc3c('KDescender.' + r272_suffix, null, function () {
                    var _r403_t1;
                    var _r403_t0 = this;
                    var r403_currentGlyph = _r403_t0;
                    r403_currentGlyph.include(r272_MarkSet.capital());
                    r403_currentGlyph.include(r388_KBaseShape(r272_Stroke, r272_CAP, r272_CyrDescender));
                    r403_currentGlyph.include(r272_ExtendBelowBaseAnchors(-r272_LongJut + 0.5 * r272_Stroke));
                    return void 0;
                });
                r272_xn$createAndSaveGlyphImpl$2Lrc3c('KBar.' + r272_suffix, null, function () {
                    var _r409_t1;
                    var _r409_t0 = this;
                    var r409_currentGlyph = _r409_t0;
                    r409_currentGlyph.include(r272_xn$referglyph$1aao('K.' + r272_suffix), r272_AS_BASE, r272_ALSO_METRICS);
                    r409_currentGlyph.include(r272_LetterBarOverlay.l.in(new r272_xn$NamedParameterPair$2Lrc9b('x', r272_SB + r272_KBalance(r272_slabLT, r388_straightBar)), new r272_xn$NamedParameterPair$2Lrc9b('bot', r272_XH), new r272_xn$NamedParameterPair$2Lrc9b('top', r272_CAP - (r272_slabLT ? r272_Stroke : 0)), new r272_xn$NamedParameterPair$2Lrc9b('space', [
                        0,
                        r1_mix(r272_SB, r272_RightSB, 0.75)
                    ])));
                    return void 0;
                });
                r272_xn$createAndSaveGlyphImpl$2Lrc3c('KVBar.' + r272_suffix, null, function () {
                    var _r418_t1;
                    var _r418_t0 = this;
                    var r418_currentGlyph = _r418_t0;
                    r418_currentGlyph.include(r272_MarkSet.capital());
                    r418_currentGlyph.include(r388_KBaseShape(r272_CyrlVbSw, r272_CAP));
                    r418_currentGlyph.include(r272_CyrlKaVBar(r272_CAP, r272_slabLT, r388_straightBar));
                    return void 0;
                });
                r272_xn$createAndSaveGlyphImpl$2Lrc3c('grek/kappa.' + r272_suffix, null, function () {
                    var _r424_t1;
                    var _r424_t0 = this;
                    var r424_currentGlyph = _r424_t0;
                    r424_currentGlyph.include(r272_MarkSet.e());
                    r424_currentGlyph.include(r272_VBar.l(r272_SB + r272_KBalance(r272_slabLT, r388_straightBar), 0, r272_XH));
                    r424_currentGlyph.include(r272_LegsImpl(false, r272_SB, r272_RightSB, r272_Stroke, r272_XH, r272_slabLT, false));
                    if (r272_slabLT)
                        r424_currentGlyph.include(r272_HSerif.lt(r272_SB + r272_KBalance(r272_slabLT, r388_straightBar), r272_XH, r272_SideJut));
                    return void 0;
                });
                r272_xn$createAndSaveGlyphImpl$2Lrc3c('grek/KaiSymbol.' + r272_suffix, null, function () {
                    var _r431_t0, _r431_t2;
                    var _r431_t1 = this;
                    var r431_currentGlyph = _r431_t1;
                    r431_currentGlyph.include(r272_xn$referglyph$1aao('K.' + r272_suffix), r272_AS_BASE, r272_ALSO_METRICS);
                    r431_currentGlyph.include(r272_MarkSet.capDesc());
                    r431_currentGlyph.include(r272_xn$referglyph$1aao((_r431_t0 = r272_slabKS, 0 === _r431_t0 ? 'UpperKaiSymbolAttachment/sans' : 1 === _r431_t0 ? 'UpperKaiSymbolAttachment/serifed' : void 0)));
                    return void 0;
                });
                r272_xn$createAndSaveGlyphImpl$2Lrc3c('smcpK.' + r272_suffix, null, function () {
                    var _r437_t1;
                    var _r437_t0 = this;
                    var r437_currentGlyph = _r437_t0;
                    r437_currentGlyph.include(r272_MarkSet.e());
                    r437_currentGlyph.include(r388_KBaseShape(r272_Stroke, r272_XH));
                    return void 0;
                });
                r272_xn$createAndSaveGlyphImpl$2Lrc3c('smcpKDescender.' + r272_suffix, null, function () {
                    var _r442_t1;
                    var _r442_t0 = this;
                    var r442_currentGlyph = _r442_t0;
                    r442_currentGlyph.include(r272_MarkSet.e());
                    r442_currentGlyph.include(r388_KBaseShape(r272_Stroke, r272_XH, r272_CyrDescender));
                    r442_currentGlyph.include(r272_ExtendBelowBaseAnchors(-r272_LongJut + 0.5 * r272_Stroke));
                    return void 0;
                });
                r272_xn$createAndSaveGlyphImpl$2Lrc3c('smcpKVBar.' + r272_suffix, null, function () {
                    var _r448_t1;
                    var _r448_t0 = this;
                    var r448_currentGlyph = _r448_t0;
                    r448_currentGlyph.include(r272_MarkSet.e());
                    r448_currentGlyph.include(r388_KBaseShape(r272_CyrlVbSw, r272_XH));
                    r448_currentGlyph.include(r272_CyrlKaVBar(r272_XH, r272_slabLT, r388_straightBar));
                    return void 0;
                });
                r272_xn$createAndSaveGlyphImpl$2Lrc3c('KHookTop.' + r272_suffix, null, function () {
                    var _r454_t1;
                    var _r454_t0 = this;
                    var r454_currentGlyph = _r454_t0;
                    r454_currentGlyph.include(r272_MarkSet.capital());
                    r454_currentGlyph.include(r272_VBar.l(r272_SB + r272_KBalance(r272_slabLT, r388_straightBar), 0, r272_CAP, r272_Stroke));
                    r454_currentGlyph.include(r272_LegsImpl(true, r272_SB, r272_RightSB, r272_Stroke, r272_CAP, r272_slabLT, r272_slabLegs));
                    r454_currentGlyph.ejectTagged('serifRT');
                    if (r272_slabLT)
                        r454_currentGlyph.include(r272_UpperKLTSerif(r272_CAP, r272_Stroke, r272_slabLT, r388_straightBar));
                    if (r272_slabLB)
                        r454_currentGlyph.include(r272_UpperKLBSerif(r272_CAP, r272_Stroke, r272_slabLT, r388_straightBar));
                    return void 0;
                });
                var r388_BashkirKaShape = function (r461_df, r461_top) {
                    var _r461_t0, _r461_t1;
                    return function () {
                        var _r463_t1;
                        var _r463_t0 = this;
                        var r463_currentGlyph = _r463_t0;
                        var r463_left = r272_slabLT ? r1_mix(r272_SB, r272_RightSB, 0.35) - r461_df.mvs / 2 * r272_HVContrast : r1_mix(r272_SB, r272_RightSB, 0.2);
                        var r463_leftNB = r463_left - r272_KBalance(r272_slabLT, r388_straightBar);
                        var r463_xTopBarLeftEnd = r1_mix(0, r272_SB, r272_slabLT ? 0.25 : 0.375);
                        var r463_sw = r272_AdviceStroke(3);
                        r463_currentGlyph.include(r272_HBar.t(r463_xTopBarLeftEnd, r272_Stroke * 0.1 + r463_left, r461_top));
                        r463_currentGlyph.include(r272_VBar.l(r463_left, 0, r461_top, r463_sw));
                        r463_currentGlyph.include(r272_LegsImpl(false, r463_leftNB, r272_RightSB, r463_sw, r461_top, r272_slabLT, r272_slabLegs));
                        if (r272_slabLT)
                            r463_currentGlyph.include(r272_VSerif.dl(r463_xTopBarLeftEnd, r461_top, r272_VJut, Math.min(r272_VJutStroke * r461_df.mvs / r272_Stroke, 0.625 * (r463_left - r463_xTopBarLeftEnd))));
                        if (r272_slabLB)
                            r463_currentGlyph.include(r272_HSerif.mb(r463_left + 0.5 * r463_sw * r272_HVContrast, 0, r272_Jut));
                        return void 0;
                    };
                };
                r272_xn$createAndSaveGlyphImpl$2Lrc3c('cyrl/BashkirUpperKa.' + r272_suffix, null, function () {
                    var _r471_t1;
                    var _r471_t0 = this;
                    var r471_currentGlyph = _r471_t0;
                    var r471_df = r272_DivFrame(1);
                    r471_currentGlyph.setWidth(r471_df.width);
                    r471_currentGlyph.include(r471_df.markSet.capital());
                    r471_currentGlyph.include(r388_BashkirKaShape(r471_df, r272_CAP));
                    return void 0;
                });
                return r272_xn$createAndSaveGlyphImpl$2Lrc3c('cyrl/BashkirKa.' + r272_suffix, null, function () {
                    var _r477_t1;
                    var _r477_t0 = this;
                    var r477_currentGlyph = _r477_t0;
                    var r477_df = r272_DivFrame(1);
                    r477_currentGlyph.setWidth(r477_df.width);
                    r477_currentGlyph.include(r477_df.markSet.e());
                    r477_currentGlyph.include(r388_BashkirKaShape(r477_df, r272_XH));
                    return void 0;
                });
            }());
        }
        var r272_LowerKConfig = r1_SuffixCfg.weave({
            'straight': r272_KLegs.Straight,
            'curly': r272_KLegs.Curly,
            'cursive': r272_KLegs.Cursive,
            'cursiveTailed': r272_KLegs.CursiveTailed,
            'symmetricTouching': r272_KLegs.Symmetric(0),
            'symmetricConnected': r272_KLegs.Symmetric(r272_AdviceStroke(6))
        }, {
            'serifless': [
                0,
                0,
                0
            ],
            'topLeftSerifed': [
                1,
                0,
                0
            ],
            'bottomRightSerifed': [
                0,
                0,
                1
            ],
            'topLeftAndBottomRightSerifed': [
                1,
                0,
                1
            ],
            'serifed': [
                1,
                1,
                3
            ]
        });
        var _r272_t14 = _r1_t2(r272_LowerKConfig)[Symbol.iterator]();
        var _r272_t15 = void 0;
        while (!(_r272_t15 = _r272_t14.next()).done) {
            _r272_t16 = _r272_t15.value;
            r272_suffix = _r272_t16[0];
            r272_LegsImpl = _r272_t16[1][0];
            r272_slabLT = _r272_t16[1][1][0];
            r272_slabLB = _r272_t16[1][1][1];
            r272_slabLegs = _r272_t16[1][1][2];
            _r272_t16[1][1];
            _r272_t16[1];
            (function () {
                var r484_straightBar = r272_LegsImpl !== r272_KLegs.Curly;
                var r484_kBaseShape = function (r485_attachment) {
                    var _r485_t0, _r485_t1;
                    return function () {
                        var _r487_t1;
                        var _r487_t0 = this;
                        var r487_currentGlyph = _r487_t0;
                        r487_currentGlyph.include(r272_VBar.l(r272_SB + r272_KBalance(r272_slabLT, r484_straightBar), 0, r272_Ascender));
                        r487_currentGlyph.include(r272_LegsImpl(false, r272_SB, r272_RightSB, r272_Stroke, r272_XH, r272_slabLT, r272_slabLegs, r485_attachment));
                        if (r272_slabLT)
                            r487_currentGlyph.include(r272_HSerif.lt(r272_SB + r272_KBalance(r272_slabLT, r484_straightBar), r272_Ascender, r272_SideJut));
                        if (r272_slabLB)
                            r487_currentGlyph.include(r272_tagged('serifLB', r272_HSerif.mb(r272_SB + r272_KBalance(r272_slabLT, r484_straightBar) + r272_HalfStroke * r272_HVContrast, 0, r272_Jut)));
                        return void 0;
                    };
                };
                r272_xn$createAndSaveGlyphImpl$2Lrc3c('k.' + r272_suffix, null, function () {
                    var _r494_t1;
                    var _r494_t0 = this;
                    var r494_currentGlyph = _r494_t0;
                    r494_currentGlyph.include(r272_MarkSet.b());
                    r494_currentGlyph.include(r484_kBaseShape());
                    return void 0;
                });
                r272_xn$createAndSaveGlyphImpl$2Lrc3c('k/circumflexBase.' + r272_suffix, null, function () {
                    var _r499_t1;
                    var _r499_t0 = this;
                    var r499_currentGlyph = _r499_t0;
                    r499_currentGlyph.include(r272_xn$referglyph$1aao('k.' + r272_suffix), r272_AS_BASE, r272_ALSO_METRICS);
                    r499_currentGlyph.setBaseAnchor('above', r272_SB + r272_KBalance(r272_slabLT, r484_straightBar) + r272_HVContrast * r272_HalfStroke, r272_Ascender);
                    return void 0;
                });
                r272_xn$createAndSaveGlyphImpl$2Lrc3c('kDescender.' + r272_suffix, null, function () {
                    var _r504_t1;
                    var _r504_t0 = this;
                    var r504_currentGlyph = _r504_t0;
                    r504_currentGlyph.include(r272_MarkSet.b());
                    r504_currentGlyph.include(r484_kBaseShape(r272_CyrDescender));
                    r504_currentGlyph.include(r272_ExtendBelowBaseAnchors(-r272_LongJut + 0.5 * r272_Stroke));
                    return void 0;
                });
                r272_xn$createAndSaveGlyphImpl$2Lrc3c('kPalatalHook.' + r272_suffix, null, function () {
                    var _r510_t1;
                    var _r510_t0 = this;
                    var r510_currentGlyph = _r510_t0;
                    r510_currentGlyph.include(r272_MarkSet.b());
                    r510_currentGlyph.include(r484_kBaseShape(r272_PalatalHook));
                    r510_currentGlyph.include(r272_ExtendBelowBaseAnchors(r272_Descender));
                    return void 0;
                });
                r272_xn$createAndSaveGlyphImpl$2Lrc3c('kBar.' + r272_suffix, null, function () {
                    var _r516_t1;
                    var _r516_t0 = this;
                    var r516_currentGlyph = _r516_t0;
                    r516_currentGlyph.include(r272_xn$referglyph$1aao('k.' + r272_suffix), r272_AS_BASE, r272_ALSO_METRICS);
                    r516_currentGlyph.include(r272_LetterBarOverlay.l.in(new r272_xn$NamedParameterPair$2Lrc9b('x', r272_SB + r272_KBalance(r272_slabLT, r484_straightBar)), new r272_xn$NamedParameterPair$2Lrc9b('bot', r272_XH), new r272_xn$NamedParameterPair$2Lrc9b('top', r272_Ascender - (r272_slabLT ? r272_Stroke : 0))));
                    return void 0;
                });
                return r272_xn$createAndSaveGlyphImpl$2Lrc3c('kHookTop.' + r272_suffix, null, function () {
                    var _r524_t1;
                    var _r524_t0 = this;
                    var r524_currentGlyph = _r524_t0;
                    r524_currentGlyph.include(r272_MarkSet.b());
                    r524_currentGlyph.include(r272_LegsImpl(false, r272_SB, r272_RightSB, r272_Stroke, r272_XH, r272_slabLT, r272_slabLegs));
                    r524_currentGlyph.include(r272_KHookTopBar(r272_slabLT, r484_straightBar));
                    if (r272_slabLB)
                        r524_currentGlyph.include(r272_tagged('serifLB', r272_HSerif.mb(r272_SB + r272_KBalance(r272_slabLT, r484_straightBar) + r272_HalfStroke * r272_HVContrast, 0, r272_Jut)));
                    return void 0;
                });
            }());
        }
        r272_xn$selectvariant$7Hrq('K', 'K');
        r272_xn$linkreducedvariant$5sIl8('K/sansSerif', 'K', r1_MathSansSerif);
        r272_alias('grek/Kappa', 922, 'K');
        r272_xn$aliasreducedvariant$1aao8('grek/Kappa/sansSerif', 'grek/Kappa', 'K/sansSerif', r1_MathSansSerif);
        r272_xn$selectvariant$7Hrq('KBar', 42816, new r272_xn$NamedParameterPair$2Lrc9b('follow', 'K'));
        r272_xn$selectvariant$7Hrq('cyrl/KaStroke', 1182, new r272_xn$NamedParameterPair$2Lrc9b('shapeFrom', 'KBar'), new r272_xn$NamedParameterPair$2Lrc9b('follow', 'cyrl/Ka'));
        r272_alias('letterLike/kelvinSign', 8490, 'K');
        r272_xn$selectvariant$7Hrq('KDescender', 11369);
        r272_xn$selectvariant$7Hrq('cyrl/Ka', 1050, 'K', new r272_xn$NamedParameterPair$2Lrc9b('shapeFrom', 'K'), new r272_xn$NamedParameterPair$2Lrc9b('follow', 'cyrl/Ka'));
        r272_xn$selectvariant$7Hrq('cyrl/KaDescender', 1178, new r272_xn$NamedParameterPair$2Lrc9b('shapeFrom', 'KDescender'));
        r272_xn$selectvariant$7Hrq('cyrl/KaVBar', 1180, new r272_xn$NamedParameterPair$2Lrc9b('shapeFrom', 'KVBar'), new r272_xn$NamedParameterPair$2Lrc9b('follow', 'cyrl/KaVBar'));
        r272_xn$selectvariant$7Hrq('cyrl/KaHook', 1219, new r272_xn$NamedParameterPair$2Lrc9b('shapeFrom', 'K'), new r272_xn$NamedParameterPair$2Lrc9b('follow', 'cyrl/KaHook'));
        r272_xn$selectvariant$7Hrq('k', 'k');
        r272_xn$selectvariant$7Hrq('k/circumflexBase', new r272_xn$NamedParameterPair$2Lrc9b('follow', 'k'));
        r272_xn$linkreducedvariant$5sIl8('k/sansSerif', 'k', r1_MathSansSerif);
        r272_xn$selectvariant$7Hrq('kDescender', 11370);
        r272_xn$selectvariant$7Hrq('kPalatalHook', 7556, new r272_xn$NamedParameterPair$2Lrc9b('follow', 'kDescender'));
        r272_xn$selectvariant$7Hrq('kBar', 42817, new r272_xn$NamedParameterPair$2Lrc9b('follow', 'k'));
        r272_xn$selectvariant$7Hrq('cyrl/kaStroke', 1183, new r272_xn$NamedParameterPair$2Lrc9b('shapeFrom', 'kBar'), new r272_xn$NamedParameterPair$2Lrc9b('follow', 'cyrl/ka'));
        r272_xn$selectvariant$7Hrq('grek/kappa', 954);
        r272_xn$selectvariant$7Hrq('smcpK', 7435, new r272_xn$NamedParameterPair$2Lrc9b('follow', 'K'));
        r272_xn$selectvariant$7Hrq('latn/kappa', 312, new r272_xn$NamedParameterPair$2Lrc9b('shapeFrom', 'smcpK'));
        r272_xn$selectvariant$7Hrq('cyrl/ka', 1082, new r272_xn$NamedParameterPair$2Lrc9b('shapeFrom', 'smcpK'));
        r272_xn$selectvariant$7Hrq('cyrl/kaDescender', 1179, new r272_xn$NamedParameterPair$2Lrc9b('shapeFrom', 'smcpKDescender'));
        r272_xn$selectvariant$7Hrq('cyrl/ka.BGR', new r272_xn$NamedParameterPair$2Lrc9b('shapeFrom', 'k'), new r272_xn$NamedParameterPair$2Lrc9b('follow', 'cyrl/ka'));
        r272_xn$selectvariant$7Hrq('cyrl/kaVBar', 1181, new r272_xn$NamedParameterPair$2Lrc9b('shapeFrom', 'smcpKVBar'), new r272_xn$NamedParameterPair$2Lrc9b('follow', 'cyrl/kaVBar'));
        r272_xn$selectvariant$7Hrq('cyrl/kaHook', 1220, new r272_xn$NamedParameterPair$2Lrc9b('shapeFrom', 'smcpK'), new r272_xn$NamedParameterPair$2Lrc9b('follow', 'cyrl/kaHook'));
        r272_xn$selectvariant$7Hrq('KHookTop', 408, new r272_xn$NamedParameterPair$2Lrc9b('follow', 'K'));
        r272_xn$selectvariant$7Hrq('kHookTop', 409);
        r272_xn$deriveglyphs$7Hrq('kCaron', 489, 'k/circumflexBase', function (r555_src, r555_gr) {
            var _r555_t0, _r555_t1;
            return function () {
                var _r557_t1;
                var _r557_t0 = this;
                var r557_currentGlyph = _r557_t0;
                var r557_shift = r272_Width + r272_SB - r272_Middle + r272_HalfStroke * r272_HVContrast;
                r557_currentGlyph.include(r272_xn$referglyph$1aao(r555_src), r272_AS_BASE, r272_ALSO_METRICS);
                r557_currentGlyph.include(r272_xn$referglyph$1aao('caronAbove'));
                return void 0;
            };
        });
        r272_turned('turnK', 42928, 'K', r272_Middle, r272_CAP / 2);
        r272_turned('turnk', 670, 'k', r272_Middle, r272_XH / 2, r272_MarkSet.p());
        r272_turned('turnSmcpK', 122640, 'smcpK', r272_Middle, r272_XH / 2);
        r272_xn$selectvariant$7Hrq('cyrl/BashkirUpperKa', 1184, new r272_xn$NamedParameterPair$2Lrc9b('follow', 'cyrl/Ka'));
        r272_xn$selectvariant$7Hrq('cyrl/BashkirKa', 1185, new r272_xn$NamedParameterPair$2Lrc9b('follow', 'cyrl/ka'));
        r272_xn$selectvariant$7Hrq('grek/KaiSymbol', 975);
        var _r272_t17 = r272_xn$Capture$2Lrc8['Letter-Blackboard'].resolve();
        var r272_BBS = _r272_t17.BBS;
        var r272_BBD = _r272_t17.BBD;
        var r272_BBBarLeft = _r272_t17.BBBarLeft;
        var r272_BBKLegShape = function (r563_top, r563_left, r563_right) {
            var _r563_t0, _r563_t1;
            var r563_kDiag = r272_DiagCorDs(r563_top / 2, r563_right - r563_left, r272_BBD);
            return r272_union(r272_HBar.b(r563_right - r563_kDiag * r272_BBD, r563_right, 0, r272_BBS), r272_intersection(r272_Rect(r563_top, 0, r563_left, 2 * r272_Width), r272_ExtLineCenter(2, r272_BBS, r563_right, r563_top, r563_left, r563_top / 2)), r272_intersection(r272_xn$spirooutline$1aao(r272_corner(r563_right, r563_top), r272_corner(r563_left, r563_top / 2), r272_corner(r563_left, 0), r272_corner(r272_Width * 2, 0), r272_corner(r272_Width * 2, r563_top)), r272_union(r272_ExtLineCenter(2, r272_BBS, r563_right, 0, r563_left + r563_kDiag * r272_BBD, r563_top / 2), r272_ExtLineCenter(2, r272_BBS, r563_right - r563_kDiag * r272_BBD, 0, r563_left, r563_top / 2))));
        };
        r272_xn$createAndSaveGlyphImpl$2Lrc3c('mathbb/K', 120130, function () {
            var _r566_t1;
            var _r566_t0 = this;
            var r566_currentGlyph = _r566_t0;
            r566_currentGlyph.include(r272_MarkSet.capital());
            r566_currentGlyph.include(r272_BBBarLeft(r272_SB, 0, r272_CAP));
            r566_currentGlyph.include(r272_BBKLegShape(r272_CAP, r272_SB + r272_BBD + r272_HVContrast * r272_BBS, r272_RightSB));
            return void 0;
        });
        return r272_xn$createAndSaveGlyphImpl$2Lrc3c('mathbb/k', 120156, function () {
            var _r572_t1;
            var _r572_t0 = this;
            var r572_currentGlyph = _r572_t0;
            r572_currentGlyph.include(r272_MarkSet.b());
            r572_currentGlyph.include(r272_BBBarLeft(r272_SB, 0, r272_Ascender));
            r572_currentGlyph.include(r272_BBKLegShape(r272_XH, r272_SB + r272_BBD + r272_HVContrast * r272_BBS, r272_RightSB));
            return void 0;
        });
    });
    return void 0;
});
