'use strict';
import * as _s0_t0 from '../../../support/utils.mjs';
import * as _s0_t1 from '../../../support/gr.mjs';
var _s0_t2;
export {
    _s0_t2 as apply
};
var r1_apply, _r1_t0, _r1_t1, _r1_t2, _r1_t3, _r1_t4, _r1_t5, _r1_t6, _r1_t7;
var _r1_t8 = _s0_t0;
var r1_mix = _r1_t8.mix;
var r1_linreg = _r1_t8.linreg;
var r1_clamp = _r1_t8.clamp;
var r1_fallback = _r1_t8.fallback;
var _r1_t9 = _s0_t1;
var r1_DependentSelector = _r1_t9.DependentSelector;
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
    r270_xn$Capture_Ext$2Lrc2b['$defineGlyphBlockImpl$'](r270_xn$Capture_Ext$2Lrc2b, 'Letter-Latin-S', function (r271_xn$Capture$2Lrc8, r271_xn$ExportCapture$2Lrc4b) {
        var r271_suffix, r271_doTS, r271_doBS, r271_kTop, r271_kBot, r271_overflow, r271_fillType, r271_selector, _r271_t15, _r271_t18, _r271_t19, _r271_t20, _r271_t21, _r271_tag22, _r271_t23, _r271_tag24;
        var _r271_t0 = r271_xn$Capture$2Lrc8;
        var r271_xn$createAndSaveGlyphImpl$2Lrc3c = _r271_t0['$createAndSaveGlyphImpl$'];
        var r271_xn$NamedParameterPair$2Lrc9b = _r271_t0['$NamedParameterPair$'];
        var r271_xn$assignUnicodeImpl$2Lrc8b = _r271_t0['$assignUnicodeImpl$'];
        var r271_xn$execState$2Lrc0b = _r271_t0['$execState$'];
        var r271_MarkSet = _r271_t0.MarkSet;
        var r271_DivFrame = _r271_t0.DivFrame;
        var _r271_t1 = r271_xn$Capture$2Lrc8.Metrics;
        var r271_HalfUPM = _r271_t1.HalfUPM;
        var r271_Width = _r271_t1.Width;
        var r271_SB = _r271_t1.SB;
        var r271_CAP = _r271_t1.CAP;
        var r271_XH = _r271_t1.XH;
        var r271_Ascender = _r271_t1.Ascender;
        var r271_Descender = _r271_t1.Descender;
        var r271_TanSlope = _r271_t1.TanSlope;
        var r271_HVContrast = _r271_t1.HVContrast;
        var r271_Upward = _r271_t1.Upward;
        var r271_Downward = _r271_t1.Downward;
        var r271_Rightward = _r271_t1.Rightward;
        var r271_O = _r271_t1.O;
        var r271_OX = _r271_t1.OX;
        var r271_Hook = _r271_t1.Hook;
        var r271_SHook = _r271_t1.SHook;
        var r271_Stroke = _r271_t1.Stroke;
        var r271_CThin = _r271_t1.CThin;
        var r271_CThinB = _r271_t1.CThinB;
        var r271_EssUpper = _r271_t1.EssUpper;
        var r271_EssLower = _r271_t1.EssLower;
        var r271_HalfStroke = _r271_t1.HalfStroke;
        var r271_RightSB = _r271_t1.RightSB;
        var r271_Middle = _r271_t1.Middle;
        var r271_CorrectionOMidX = _r271_t1.CorrectionOMidX;
        var r271_CorrectionOMidS = _r271_t1.CorrectionOMidS;
        var r271_AdviceStroke = _r271_t1.AdviceStroke;
        var r271_AdviceStroke2 = _r271_t1.AdviceStroke2;
        var r271_OverlayStroke = _r271_t1.OverlayStroke;
        var r271_StrokeWidthBlend = _r271_t1.StrokeWidthBlend;
        var r271_SmoothAdjust = _r271_t1.SmoothAdjust;
        var _r271_t2 = r271_xn$Capture$2Lrc8.SpiroFns;
        var r271_g4 = _r271_t2.g4;
        var r271_g2 = _r271_t2.g2;
        var r271_corner = _r271_t2.corner;
        var r271_flat = _r271_t2.flat;
        var r271_curl = _r271_t2.curl;
        var r271_widths = _r271_t2.widths;
        var r271_heading = _r271_t2.heading;
        var r271_important = _r271_t2.important;
        var r271_alsoThru = _r271_t2.alsoThru;
        var r271_archv = _r271_t2.archv;
        var r271_arcvh = _r271_t2.arcvh;
        var r271_dispiro = _r271_t2.dispiro;
        var _r271_t3 = r271_xn$Capture$2Lrc8.BooleFns;
        var r271_union = _r271_t3.union;
        var r271_difference = _r271_t3.difference;
        var _r271_t4 = r271_xn$Capture$2Lrc8.CommonShapes.resolve();
        var r271_VBar = _r271_t4.VBar;
        var r271_FlatSlashShape = _r271_t4.FlatSlashShape;
        var r271_hookstart = _r271_t4.hookstart;
        var r271_hookend = _r271_t4.hookend;
        var _r271_t5 = r271_xn$Capture$2Lrc8['Common-Derivatives'].resolve();
        var r271_xn$selectvariant$7Hrq = _r271_t5['select-variant'];
        var r271_alias = _r271_t5.alias;
        var r271_xn$derivecomposites$7Hrq = _r271_t5['derive-composites'];
        var r271_xn$linkreducedvariant$5sIl8 = _r271_t5['link-reduced-variant'];
        var _r271_t6 = r271_xn$Capture$2Lrc8['Letter-Shared'].resolve();
        var r271_CreateAccentedComposition = _r271_t6.CreateAccentedComposition;
        var r271_CreateDependentComposite = _r271_t6.CreateDependentComposite;
        var _r271_t7 = r271_xn$Capture$2Lrc8['Letter-Blackboard'].resolve();
        var r271_BBS = _r271_t7.BBS;
        var r271_BBD = _r271_t7.BBD;
        var _r271_t8 = r271_xn$Capture$2Lrc8['Letter-Shared-Shapes'].resolve();
        var r271_DToothlessRise = _r271_t8.DToothlessRise;
        var r271_FlatHookDepth = _r271_t8.FlatHookDepth;
        var _r271_t9 = r271_xn$Capture$2Lrc8['Letter-Shared-Shapes'].resolve();
        var r271_ArcStartSerifWidth = _r271_t9.ArcStartSerifWidth;
        var r271_ArcStartSerifDepth = _r271_t9.ArcStartSerifDepth;
        var _r271_t10 = r271_xn$Capture$2Lrc8['Letter-Shared-Shapes'].resolve();
        var r271_SerifedArcStart = _r271_t10.SerifedArcStart;
        var r271_SerifedArcEnd = _r271_t10.SerifedArcEnd;
        var _r271_t11 = r271_xn$Capture$2Lrc8['Letter-Shared-Shapes'].resolve();
        var r271_ArcStartSerif = _r271_t11.ArcStartSerif;
        var r271_ArcEndSerif = _r271_t11.ArcEndSerif;
        var _r271_t12 = r271_xn$Capture$2Lrc8['Letter-Shared-Shapes'].resolve();
        var r271_PalatalHook = _r271_t12.PalatalHook;
        var r271_RetroflexHook = _r271_t12.RetroflexHook;
        var r271_CyrDescender = _r271_t12.CyrDescender;
        var r271_CurlyTail = _r271_t12.CurlyTail;
        var r271_xn$SLABNONE$5sIl = 0;
        var r271_xn$SLABCLASSICAL$5sIl = 1;
        var r271_xn$SLABINWARD$5sIl = 2;
        var r271_xn$CURLYTAIL$1aao = 10;
        var r271_SOBot = r271_OX;
        r271_xn$ExportCapture$2Lrc4b(function () {
            var _r282_t0, _r282_t1;
            return { 'AdviceSArchDepth': r271_AdviceSArchDepth };
        });
        var r271_AdviceSArchDepth = function (r283_y, r283_sign, r283__stroke) {
            var _r283_t0, _r283_t1;
            var r283_stroke = r1_fallback(r283__stroke, r271_Stroke);
            var r283_strokeFactor = r283_stroke * r1_clamp(1, 2, r1_linreg(126, 1, 137, 1.025, r283_stroke)) * r1_clamp(0, 1, Math.pow(r271_Width / r271_HalfUPM, 0.5));
            var r283_widthFactor = r271_RightSB - r271_SB;
            var r283_ss = r283_y * 0.22 + 0.12 * r283_strokeFactor + 0.05 * r283_widthFactor;
            return r283_ss + r283_sign * r271_TanSlope * r271_SmoothAdjust;
        };
        var r271_SStrokeDollarInterruptGap = function (r284_deltaX, r284_top, r284_bot, r284_gap, r284_stroke, r284_refSwEss) {
            var _r284_t0, _r284_t1;
            var r284_ess = r284_refSwEss * r284_gap / r271_Stroke;
            var r284_archDepth = r271_AdviceSArchDepth(r284_top - r284_bot, -1, r284_stroke);
            return r271_dispiro(r271_g4.down.mid(r284_deltaX + r271_SB - r271_Width, r284_top - r284_archDepth, r271_widths.lhs(r284_gap)), r271_alsoThru.g2(0.5, 0.5, r271_widths.center(r284_ess)), r271_g4.down.mid(r284_deltaX + r271_RightSB - r271_Width - r271_SOBot, r284_bot + r284_archDepth, r271_widths.rhs(r284_gap)));
        };
        var r271_SCurlyTail = function (r285_sw) {
            var _r285_t0, _r285_t1;
            var r285_fine = r271_AdviceStroke2(3, 4, r271_XH);
            var r285_rinner = (r271_XH * 0.5 - r285_fine * 2 - r285_sw * 0.5) / 4;
            var r285_m1 = r271_RightSB - r271_SOBot - r285_sw * r271_HVContrast;
            var r285_x2 = r271_RightSB - r285_sw * 0.3;
            var r285_y2 = -r271_XH * 0.05;
            return r271_CurlyTail(r285_fine, r285_rinner, r285_m1, 0, r271_SB + r271_SOBot, r285_x2, r285_y2);
        };
        var r271_SStrokeImpl = function (r286_top, r286_bot, r286_st, r286_sb, r286_stroke, r286_refSwEss) {
            var r286___, _r286_t0, _r286_t1, _r286_t2, _r286_t3;
            var r286_ess = r286_refSwEss * r286_stroke / r271_Stroke;
            var r286_archDepth = r271_AdviceSArchDepth(r286_top - r286_bot, -1, r286_stroke);
            return r271_dispiro((_r286_t0 = r286_st, _r286_t0 === r271_xn$SLABCLASSICAL$5sIl ? r271_SerifedArcStart.RtlLhs(r271_RightSB, r271_Middle, r286_top, r286_stroke, r271_Hook) : _r286_t0 === r271_xn$SLABINWARD$5sIl ? [
                r271_g4(r271_RightSB, r286_top - r271_DToothlessRise, r271_widths.lhs(r286_stroke)),
                r271_g4(r271_Middle - r271_CorrectionOMidX * r286_stroke, r286_top - r271_O),
                r271_archv()
            ] : (r286___ = _r286_t0, [
                r271_g4(r271_RightSB, r286_top - r271_Hook, r271_widths.lhs(r286_stroke)),
                r271_hookstart(r286_top - r271_O, new r271_xn$NamedParameterPair$2Lrc9b('sw', r286_stroke), new r271_xn$NamedParameterPair$2Lrc9b('swItalicAdj', r271_Stroke))
            ])), r271_g4(r271_SB, r286_top - r286_archDepth), r271_alsoThru.g2(0.5, 0.5, r271_widths.center(r286_ess)), r271_g4(r271_RightSB - r271_SOBot, r286_bot + r286_archDepth, r271_widths(0, r286_stroke)), (_r286_t1 = r286_sb, _r286_t1 === r271_xn$SLABCLASSICAL$5sIl ? r271_SerifedArcEnd.RtlRhs(r271_SB, r271_Middle, r286_bot, r286_stroke, r271_Hook) : _r286_t1 === r271_xn$SLABINWARD$5sIl ? [
                r271_arcvh(),
                r271_g4(r271_Middle + r271_CorrectionOMidX * r286_stroke, r286_bot + r271_O),
                r271_g4(r271_SB, r286_bot + r271_DToothlessRise)
            ] : (r286___ = _r286_t1, [
                r271_hookend(r286_bot + r271_O, new r271_xn$NamedParameterPair$2Lrc9b('sw', r286_stroke), new r271_xn$NamedParameterPair$2Lrc9b('swItalicAdj', r271_Stroke)),
                r271_g4(r271_SB + r271_SOBot, r286_bot + r271_Hook)
            ])));
        };
        var r271_RevSStroke = function (r291_st, r291_sb, r291_stroke, r291_ess) {
            var r291___, _r291_t0, _r291_t1, _r291_t2, _r291_t3;
            var r291_archDepth = r271_AdviceSArchDepth(r271_CAP, 0.5, r291_stroke);
            return r271_dispiro((_r291_t0 = r291_st, _r291_t0 === r271_xn$SLABCLASSICAL$5sIl ? r271_SerifedArcStart.LtrRhs(r271_SB, r271_Middle, r271_CAP, r291_stroke, r271_Hook) : _r291_t0 === r271_xn$SLABINWARD$5sIl ? [
                r271_g4(r271_SB, r271_CAP - r271_DToothlessRise, r271_widths.rhs(r291_stroke)),
                r271_g4(r271_Middle - r271_CorrectionOMidX * r291_stroke, r271_CAP - r271_O),
                r271_archv()
            ] : (r291___ = _r291_t0, [
                r271_g4(r271_SB, r271_CAP - r271_Hook, r271_widths.rhs(r291_stroke)),
                r271_hookstart(r271_CAP - r271_O, new r271_xn$NamedParameterPair$2Lrc9b('sw', r291_stroke), new r271_xn$NamedParameterPair$2Lrc9b('swItalicAdj', r271_Stroke))
            ])), r271_g4(r271_RightSB, r271_CAP - r291_archDepth), r271_alsoThru.g2(0.5, 0.5, r271_widths.center(r291_ess)), r271_g4(r271_SB + r271_SOBot, r291_archDepth, r271_widths(r291_stroke, 0)), (_r291_t1 = r291_sb, _r291_t1 === r271_xn$SLABCLASSICAL$5sIl ? r271_SerifedArcEnd.LtrLhs(r271_RightSB, r271_Middle, 0, r291_stroke, r271_Hook) : _r291_t1 === r271_xn$SLABINWARD$5sIl ? [
                r271_arcvh(),
                r271_g4(r271_Middle + r271_CorrectionOMidX * r291_stroke, r271_O),
                r271_g4(r271_RightSB, r271_DToothlessRise)
            ] : (r291___ = _r291_t1, [
                r271_hookend(r271_O, new r271_xn$NamedParameterPair$2Lrc9b('sw', r291_stroke), new r271_xn$NamedParameterPair$2Lrc9b('swItalicAdj', r271_Stroke)),
                r271_g4(r271_RightSB + r271_OX - r271_SOBot, r271_Hook)
            ])));
        };
        var r271_SmallSStrokeImpl = function (r296_st, r296_sb, r296_stroke, r296_refSwEss) {
            var r296___, _r296_t0, _r296_t1, _r296_t2, _r296_t3;
            var r296_ess = r296_refSwEss * r296_stroke / r271_Stroke;
            var r296_archDepth = r271_AdviceSArchDepth(r271_XH, -1, r296_stroke);
            return r271_dispiro((_r296_t0 = r296_st, _r296_t0 === r271_xn$SLABCLASSICAL$5sIl ? r271_SerifedArcStart.RtlLhs(r271_RightSB, r271_Middle, r271_XH, r296_stroke, r271_SHook) : _r296_t0 === r271_xn$SLABINWARD$5sIl ? [
                r271_g4(r271_RightSB, r271_XH - r271_DToothlessRise, r271_widths.lhs(r296_stroke)),
                r271_g4(r271_Middle - r271_CorrectionOMidX * r296_stroke, r271_XH - r271_O),
                r271_archv()
            ] : (r296___ = _r296_t0, [
                r271_g4(r271_RightSB + r271_OX, r271_XH - r271_SHook, r271_widths.lhs(r296_stroke)),
                r271_hookstart(r271_XH - r271_O, new r271_xn$NamedParameterPair$2Lrc9b('sw', r296_stroke), new r271_xn$NamedParameterPair$2Lrc9b('swItalicAdj', r271_Stroke))
            ])), r271_g4(r271_SB - r271_OX, r271_XH - r296_archDepth), r271_alsoThru.g2(0.5, 0.5, r271_widths.center(r296_ess)), r271_g4(r271_RightSB + r271_OX - r271_SOBot, r296_archDepth, r271_widths(0, r296_stroke)), (_r296_t1 = r296_sb, _r296_t1 === r271_xn$CURLYTAIL$1aao ? [
                r271_arcvh(),
                r271_SCurlyTail(r296_stroke)
            ] : _r296_t1 === r271_xn$SLABCLASSICAL$5sIl ? r271_SerifedArcEnd.RtlRhs(r271_SB, r271_Middle, 0, r296_stroke, r271_SHook) : _r296_t1 === r271_xn$SLABINWARD$5sIl ? [
                r271_arcvh(),
                r271_g4(r271_Middle + r271_CorrectionOMidX * r296_stroke, r271_O),
                r271_g4(r271_SB, r271_DToothlessRise)
            ] : (r296___ = _r296_t1, [
                r271_hookend(r271_O, new r271_xn$NamedParameterPair$2Lrc9b('sw', r296_stroke), new r271_xn$NamedParameterPair$2Lrc9b('swItalicAdj', r271_Stroke)),
                r271_g4(r271_SB - r271_OX + r271_SOBot, r271_SHook)
            ])));
        };
        var r271_SStrokeAlt = function () {
            var _r301_t6;
            var _r301_t7 = arguments;
            var _r301_t0 = [].slice.call(_r301_t7, 0);
            var _r301_t1 = [];
            var _r301_t2 = 0;
            while (_r301_t2 < _r301_t0.length) {
                if (!(_r301_t0[_r301_t2] instanceof r271_xn$NamedParameterPair$2Lrc9b))
                    _r301_t1.push(_r301_t0[_r301_t2]);
                _r301_t2 = _r301_t2 + 1;
            }
            var _r301_t3 = _r301_t0;
            var _r301_t4 = _r301_t3.length;
            var _r301_t5 = 0;
            while (_r301_t5 < _r301_t4) {
                _r301_t2 = _r301_t3[_r301_t5];
                if (_r301_t2 && _r301_t2 instanceof r271_xn$NamedParameterPair$2Lrc9b && _r301_t2.left === 'top')
                    r301_top = _r301_t2.right;
                if (_r301_t2 && _r301_t2 instanceof r271_xn$NamedParameterPair$2Lrc9b && _r301_t2.left === 'hook')
                    r301_hook = _r301_t2.right;
                if (_r301_t2 && _r301_t2 instanceof r271_xn$NamedParameterPair$2Lrc9b && _r301_t2.left === 'swStart')
                    r301_swStart = _r301_t2.right;
                if (_r301_t2 && _r301_t2 instanceof r271_xn$NamedParameterPair$2Lrc9b && _r301_t2.left === 'swEnd')
                    r301_swEnd = _r301_t2.right;
                if (_r301_t2 && _r301_t2 instanceof r271_xn$NamedParameterPair$2Lrc9b && _r301_t2.left === 'oXLeftTop')
                    r301_oXLeftTop = _r301_t2.right;
                if (_r301_t2 && _r301_t2 instanceof r271_xn$NamedParameterPair$2Lrc9b && _r301_t2.left === 'offsetLT')
                    r301_offsetLT = _r301_t2.right;
                if (_r301_t2 && _r301_t2 instanceof r271_xn$NamedParameterPair$2Lrc9b && _r301_t2.left === 'offsetRB')
                    r301_offsetRB = _r301_t2.right;
                if (_r301_t2 && _r301_t2 instanceof r271_xn$NamedParameterPair$2Lrc9b && _r301_t2.left === 'offsetC')
                    r301_offsetC = _r301_t2.right;
                _r301_t5 = _r301_t5 + 1;
            }
            var r301_top = r1_fallback(r301_top, _r301_t1[0]);
            var r301_hook = r1_fallback(r301_hook, _r301_t1[1]);
            var r301_swStart = r1_fallback(r301_swStart, _r301_t1[2]);
            var r301_swEnd = r1_fallback(r301_swEnd, _r301_t1[3]);
            var r301_oXLeftTop = r1_fallback(r301_oXLeftTop, _r301_t1[4]);
            var r301_offsetLT = r1_fallback(r301_offsetLT, _r301_t1[5]);
            var r301_offsetRB = r1_fallback(r301_offsetRB, _r301_t1[6]);
            var r301_offsetC = r1_fallback(r301_offsetC, _r301_t1[7]);
            var r301_stroke = Math.max(r301_swStart, r301_swEnd);
            var r301_fine = Math.min(r301_swStart, r301_swEnd);
            var r301_soStart = r301_stroke - r301_swStart;
            var r301_soEnd = r301_stroke - r301_swEnd;
            var r301_archDepth = r271_AdviceSArchDepth(r301_top, -1, r301_stroke);
            return r271_dispiro(r271_widths.lhs(r301_fine), r271_g4(r271_RightSB + r271_OX / 4 - r271_HVContrast * r301_soStart, r301_top - r301_hook), r271_hookstart(r301_top - r271_O - r301_soStart, new r271_xn$NamedParameterPair$2Lrc9b('sw', r301_fine), new r271_xn$NamedParameterPair$2Lrc9b('swItalicAdj', r271_Stroke), new r271_xn$NamedParameterPair$2Lrc9b('noAdjTerminalY', true)), r271_g4(r271_SB + r301_oXLeftTop + r301_offsetLT.x, r301_top - r301_archDepth + r301_offsetLT.y), r271_g2(r301_offsetC.x + r1_mix(r271_SB + r301_oXLeftTop + r301_offsetLT.x, r271_RightSB - r271_SOBot - r301_offsetRB.x, 0.5), r301_offsetC.y + r1_mix(r301_top - r301_archDepth, r301_archDepth, 0.5), r271_widths.center(r301_stroke)), r271_g4(r271_RightSB - r271_SOBot - r301_offsetRB.x, r301_archDepth + r301_offsetRB.y, r271_widths.rhs(r301_fine)), r271_hookend(r271_O + r301_soEnd, new r271_xn$NamedParameterPair$2Lrc9b('sw', r301_fine), new r271_xn$NamedParameterPair$2Lrc9b('swItalicAdj', r271_Stroke), new r271_xn$NamedParameterPair$2Lrc9b('noAdjTerminalY', true)), r271_g4(r271_SB + r271_SOBot + r271_HVContrast * r301_soEnd, r301_hook, r271_widths.rhs(r301_fine)));
        };
        var r271_SmallSStrokePhoneticRight = function (r312_st, r312_top) {
            var r312___, _r312_t0, _r312_t1, _r312_t2;
            var r312_stroke = r271_AdviceStroke2(2, 3, r312_top);
            var r312_ess = r271_AdviceStroke2(2.2, 3.2, r312_top);
            var r312_archDepth = r271_AdviceSArchDepth(r312_top, -1, r312_stroke);
            return r271_dispiro((_r312_t0 = r312_st, _r312_t0 === r271_xn$SLABCLASSICAL$5sIl ? r271_SerifedArcStart.RtlLhs(r271_RightSB, r271_Middle, r312_top, r312_stroke, r271_Hook) : _r312_t0 === r271_xn$SLABINWARD$5sIl ? [
                r271_g4(r271_RightSB, r312_top - r271_DToothlessRise, r271_widths.lhs(r312_stroke)),
                r271_g4(r271_Middle - r271_CorrectionOMidX * r312_stroke, r312_top - r271_O),
                r271_archv()
            ] : (r312___ = _r312_t0, [
                r271_g4(r271_RightSB, r312_top - r271_Hook, r271_widths.lhs(r312_stroke)),
                r271_hookstart(r312_top - r271_O, new r271_xn$NamedParameterPair$2Lrc9b('sw', r312_stroke), new r271_xn$NamedParameterPair$2Lrc9b('swItalicAdj', r271_Stroke))
            ])), r271_g4(r271_SB, r312_top - r312_archDepth), r271_alsoThru.g2(0.5, 0.5, r271_widths.center(r312_ess)), r271_g4(r271_RightSB - r271_SOBot, r312_archDepth, r271_widths(0, r312_stroke)), r271_arcvh(), r271_flat(r271_Middle - r271_CorrectionOMidS, 0, r271_widths(0, r271_Stroke)), r271_curl(r271_SB, 0));
        };
        var r271_RevSmallSStroke = function (r315_st, r315_sb, r315_stroke, r315_ess) {
            var r315___, _r315_t0, _r315_t1, _r315_t2, _r315_t3;
            var r315_archDepth = r271_AdviceSArchDepth(r271_XH, 0.75, r315_stroke);
            return r271_dispiro((_r315_t0 = r315_st, _r315_t0 === r271_xn$SLABCLASSICAL$5sIl ? r271_SerifedArcStart.LtrRhs(r271_SB, r271_Middle, r271_XH, r315_stroke, r271_SHook) : _r315_t0 === r271_xn$SLABINWARD$5sIl ? [
                r271_g4(r271_SB, r271_XH - r271_DToothlessRise, r271_widths.rhs(r315_stroke)),
                r271_g4(r271_Middle - r271_CorrectionOMidX * r315_stroke, r271_XH - r271_O),
                r271_archv()
            ] : (r315___ = _r315_t0, [
                r271_g4(r271_SB - r271_OX, r271_XH - r271_SHook, r271_widths.rhs(r315_stroke)),
                r271_hookstart(r271_XH - r271_O, new r271_xn$NamedParameterPair$2Lrc9b('sw', r315_stroke), new r271_xn$NamedParameterPair$2Lrc9b('swItalicAdj', r271_Stroke))
            ])), r271_g4(r271_RightSB + r271_OX, r271_XH - r315_archDepth), r271_alsoThru.g2(0.5, 0.5, r271_widths.center(r315_ess)), r271_g4(r271_SB - r271_OX + r271_SOBot, r315_archDepth, r271_widths(r315_stroke, 0)), (_r315_t1 = r315_sb, _r315_t1 === r271_xn$SLABCLASSICAL$5sIl ? r271_SerifedArcEnd.LtrLhs(r271_RightSB, r271_Middle, 0, r315_stroke, r271_SHook) : _r315_t1 === r271_xn$SLABINWARD$5sIl ? [
                r271_arcvh(),
                r271_g4(r271_Middle + r271_CorrectionOMidX * r315_stroke, r271_O),
                r271_g4(r271_RightSB, r271_DToothlessRise)
            ] : (r315___ = _r315_t1, [
                r271_hookend(r271_O, new r271_xn$NamedParameterPair$2Lrc9b('sw', r315_stroke), new r271_xn$NamedParameterPair$2Lrc9b('swItalicAdj', r271_Stroke)),
                r271_g4(r271_RightSB + r271_OX - r271_SOBot, r271_SHook)
            ])));
        };
        r271_xn$ExportCapture$2Lrc4b(function () {
            var _r321_t0, _r321_t1;
            return { 'SAutoSlabStart': r271_SAutoSlabStart };
        });
        var r271_SAutoSlabStart = function (r322_st, r322_top, r322_sw, r322_hook) {
            var r322___, _r322_t1, _r322_t2;
            var _r322_t0 = r322_st;
            return _r322_t0 === r271_xn$SLABCLASSICAL$5sIl ? r271_ArcStartSerif.R(r271_RightSB, r322_top, r322_sw, r322_hook) : _r322_t0 === r271_xn$SLABINWARD$5sIl ? r271_ArcStartSerif.InwardR(r271_RightSB, r322_top, r322_sw, r322_hook) : (r322___ = _r322_t0, function () {
                var _r324_t1;
                var _r324_t0 = this;
                var r324_currentGlyph = _r324_t0;
                return void 0;
            });
        };
        r271_xn$ExportCapture$2Lrc4b(function () {
            var _r326_t0, _r326_t1;
            return { 'SAutoSlabEnd': r271_SAutoSlabEnd };
        });
        var r271_SAutoSlabEnd = function (r327_st, r327_bot, r327_sw, r327_hook) {
            var r327___, _r327_t1, _r327_t2;
            var _r327_t0 = r327_st;
            return _r327_t0 === r271_xn$SLABCLASSICAL$5sIl ? r271_ArcEndSerif.L(r271_SB, r327_bot, r327_sw, r327_hook) : _r327_t0 === r271_xn$SLABINWARD$5sIl ? r271_ArcEndSerif.InwardL(r271_SB, r327_bot, r327_sw, r327_hook) : (r327___ = _r327_t0, function () {
                var _r329_t1;
                var _r329_t0 = this;
                var r329_currentGlyph = _r329_t0;
                return void 0;
            });
        };
        var r271_RevSAutoSlabStart = function (r330_st, r330_top, r330_sw, r330_hook) {
            var r330___, _r330_t1, _r330_t2;
            var _r330_t0 = r330_st;
            return _r330_t0 === r271_xn$SLABCLASSICAL$5sIl ? r271_ArcStartSerif.L(r271_SB, r330_top, r330_sw, r330_hook) : _r330_t0 === r271_xn$SLABINWARD$5sIl ? r271_ArcStartSerif.InwardL(r271_SB, r330_top, r330_sw, r330_hook) : (r330___ = _r330_t0, function () {
                var _r332_t1;
                var _r332_t0 = this;
                var r332_currentGlyph = _r332_t0;
                return void 0;
            });
        };
        var r271_RevSAutoSlabEnd = function (r333_st, r333_bot, r333_sw, r333_hook) {
            var r333___, _r333_t1, _r333_t2;
            var _r333_t0 = r333_st;
            return _r333_t0 === r271_xn$SLABCLASSICAL$5sIl ? r271_ArcEndSerif.R(r271_RightSB, r333_bot, r333_sw, r333_hook) : _r333_t0 === r271_xn$SLABINWARD$5sIl ? r271_ArcEndSerif.InwardR(r271_RightSB, r333_bot, r333_sw, r333_hook) : (r333___ = _r333_t0, function () {
                var _r335_t1;
                var _r335_t0 = this;
                var r335_currentGlyph = _r335_t0;
                return void 0;
            });
        };
        var r271_SConfig = {
            'serifless': [
                r271_xn$SLABNONE$5sIl,
                r271_xn$SLABNONE$5sIl
            ],
            'unilateralSerifed': [
                r271_xn$SLABCLASSICAL$5sIl,
                r271_xn$SLABNONE$5sIl
            ],
            'bilateralSerifed': [
                r271_xn$SLABCLASSICAL$5sIl,
                r271_xn$SLABCLASSICAL$5sIl
            ],
            'unilateralInwardSerifed': [
                r271_xn$SLABINWARD$5sIl,
                r271_xn$SLABNONE$5sIl
            ],
            'bilateralInwardSerifed': [
                r271_xn$SLABINWARD$5sIl,
                r271_xn$SLABINWARD$5sIl
            ],
            'bottomSerifed': [
                r271_xn$SLABNONE$5sIl,
                r271_xn$SLABCLASSICAL$5sIl
            ],
            'hybridSerifed1': [
                r271_xn$SLABINWARD$5sIl,
                r271_xn$SLABCLASSICAL$5sIl
            ]
        };
        var _r271_t13 = Object.entries(r271_SConfig)[Symbol.iterator]();
        var _r271_t14 = void 0;
        while (!(_r271_t14 = _r271_t13.next()).done) {
            _r271_t15 = _r271_t14.value;
            r271_suffix = _r271_t15[0];
            r271_doTS = _r271_t15[1][0];
            r271_doBS = _r271_t15[1][1];
            _r271_t15[1];
            (function () {
                r271_xn$createAndSaveGlyphImpl$2Lrc3c('S.' + r271_suffix, null, function () {
                    var _r341_t1;
                    var _r341_t0 = this;
                    var r341_currentGlyph = _r341_t0;
                    var r341_sw = r271_AdviceStroke2(2, 3, r271_CAP);
                    r341_currentGlyph.include(r271_MarkSet.capital());
                    r341_currentGlyph.include(r271_SStrokeImpl(r271_CAP, 0, r271_doTS, r271_doBS, r341_sw, r271_EssUpper));
                    r341_currentGlyph.include(r271_SAutoSlabStart(r271_doTS, r271_CAP, r341_sw, r271_Hook));
                    r341_currentGlyph.include(r271_SAutoSlabEnd(r271_doBS, 0, r341_sw, r271_Hook));
                    return void 0;
                });
                r271_xn$createAndSaveGlyphImpl$2Lrc3c('smcpS.' + r271_suffix, null, function () {
                    var _r348_t1;
                    var _r348_t0 = this;
                    var r348_currentGlyph = _r348_t0;
                    var r348_sw = r271_AdviceStroke2(2, 3, r271_CAP);
                    r348_currentGlyph.include(r271_MarkSet.e());
                    r348_currentGlyph.include(r271_SStrokeImpl(r271_XH, 0, r271_doTS, r271_doBS, r348_sw, r271_EssUpper));
                    r348_currentGlyph.include(r271_SAutoSlabStart(r271_doTS, r271_XH, r348_sw, r271_Hook));
                    r348_currentGlyph.include(r271_SAutoSlabEnd(r271_doBS, 0, r348_sw, r271_Hook));
                    return void 0;
                });
                r271_xn$createAndSaveGlyphImpl$2Lrc3c('DollarKernelStd.' + r271_suffix, null, function () {
                    var _r355_t1;
                    var _r355_t0 = this;
                    var r355_currentGlyph = _r355_t0;
                    var r355_top = r271_CAP * 0.95;
                    var r355_bot = r271_CAP * 0.05;
                    var r355_sw = r271_AdviceStroke2(2, 3, r355_top - r355_bot);
                    r355_currentGlyph.include(r271_MarkSet.capital());
                    r355_currentGlyph.setBaseAnchor('cvDecompose', 0, 0);
                    r355_currentGlyph.include(r271_SStrokeImpl(r355_top, r355_bot, r271_doTS, r271_doBS, r355_sw, r271_EssUpper));
                    r355_currentGlyph.include(r271_SAutoSlabStart(r271_doTS, r355_top, r355_sw, r271_Hook));
                    r355_currentGlyph.include(r271_SAutoSlabEnd(r271_doBS, r355_bot, r355_sw, r271_Hook));
                    return void 0;
                });
                r271_xn$createAndSaveGlyphImpl$2Lrc3c('DollarKernelCap.' + r271_suffix, null, function () {
                    var _r363_t1;
                    var _r363_t0 = this;
                    var r363_currentGlyph = _r363_t0;
                    var r363_top = r271_CAP * 0.88;
                    var r363_bot = r271_CAP * 0.12;
                    var r363_sw = r271_AdviceStroke2(2, 3, r363_top - r363_bot);
                    r363_currentGlyph.include(r271_MarkSet.capital());
                    r363_currentGlyph.setBaseAnchor('cvDecompose', 0, 0);
                    r363_currentGlyph.include(r271_SStrokeImpl(r363_top, r363_bot, r271_doTS, r271_doBS, r363_sw, r271_EssUpper));
                    r363_currentGlyph.include(r271_SAutoSlabStart(r271_doTS, r363_top, r363_sw, r271_Hook));
                    r363_currentGlyph.include(r271_SAutoSlabEnd(r271_doBS, r363_bot, r363_sw, r271_Hook));
                    return void 0;
                });
                r271_xn$createAndSaveGlyphImpl$2Lrc3c('s.' + r271_suffix, null, function () {
                    var _r371_t1;
                    var _r371_t0 = this;
                    var r371_currentGlyph = _r371_t0;
                    var r371_sw = r271_AdviceStroke2(2, 3, r271_XH);
                    r371_currentGlyph.include(r271_MarkSet.e());
                    r371_currentGlyph.include(r271_SmallSStrokeImpl(r271_doTS, r271_doBS, r371_sw, r271_EssLower));
                    r371_currentGlyph.include(r271_SAutoSlabStart(r271_doTS, r271_XH, r371_sw, r271_Hook));
                    r371_currentGlyph.include(r271_SAutoSlabEnd(r271_doBS, 0, r371_sw, r271_Hook));
                    return void 0;
                });
                r271_xn$createAndSaveGlyphImpl$2Lrc3c('s/phoneticRight.' + r271_suffix, null, function () {
                    var _r378_t1;
                    var _r378_t0 = this;
                    var r378_currentGlyph = _r378_t0;
                    var r378_sw = r271_AdviceStroke2(2, 3, r271_XH);
                    r378_currentGlyph.include(r271_MarkSet.e());
                    r378_currentGlyph.include(r271_SmallSStrokePhoneticRight(r271_doTS, r271_XH));
                    r378_currentGlyph.include(r271_SAutoSlabStart(r271_doTS, r271_XH, r378_sw, r271_Hook));
                    return void 0;
                });
                r271_xn$createAndSaveGlyphImpl$2Lrc3c('revS.' + r271_suffix, null, function () {
                    var _r384_t1;
                    var _r384_t0 = this;
                    var r384_currentGlyph = _r384_t0;
                    var r384_sw = r271_AdviceStroke2(2, 3, r271_CAP);
                    r384_currentGlyph.include(r271_MarkSet.capital());
                    r384_currentGlyph.include(r271_RevSStroke(r271_doTS, r271_doBS, r384_sw, r271_EssUpper));
                    r384_currentGlyph.include(r271_RevSAutoSlabStart(r271_doTS, r271_CAP, r384_sw, r271_Hook));
                    r384_currentGlyph.include(r271_RevSAutoSlabEnd(r271_doBS, 0, r384_sw, r271_Hook));
                    return void 0;
                });
                r271_xn$createAndSaveGlyphImpl$2Lrc3c('revs.' + r271_suffix, null, function () {
                    var _r391_t1;
                    var _r391_t0 = this;
                    var r391_currentGlyph = _r391_t0;
                    var r391_sw = r271_AdviceStroke2(2, 3, r271_XH);
                    r391_currentGlyph.include(r271_MarkSet.e());
                    r391_currentGlyph.include(r271_RevSmallSStroke(r271_doTS, r271_doBS, r391_sw, r271_EssLower));
                    r391_currentGlyph.include(r271_RevSAutoSlabStart(r271_doTS, r271_XH, r391_sw, r271_Hook));
                    r391_currentGlyph.include(r271_RevSAutoSlabEnd(r271_doBS, 0, r391_sw, r271_Hook));
                    return void 0;
                });
                var r338_UpperSBaseWithAttach = function () {
                    var _r396_t0, _r396_t1;
                    return function () {
                        var _r398_t1;
                        var _r398_t0 = this;
                        var r398_currentGlyph = _r398_t0;
                        r398_currentGlyph.include(r271_SAutoSlabStart(r271_doTS, r271_CAP, r271_Stroke, r271_Hook));
                        var r398_stroke = r398_currentGlyph.include(r271_SStrokeImpl(r271_CAP, 0, r271_doTS, r271_doBS, r271_AdviceStroke2(2, 3, r271_CAP), r271_EssUpper));
                        return r398_stroke.lhsKnots[r398_stroke.lhsKnots.length - 1];
                    };
                };
                var r338_LowerSBaseWithAttach = function () {
                    var _r401_t0, _r401_t1;
                    return function () {
                        var _r403_t1;
                        var _r403_t0 = this;
                        var r403_currentGlyph = _r403_t0;
                        r403_currentGlyph.include(r271_SAutoSlabStart(r271_doTS, r271_XH, r271_AdviceStroke2(2, 3, r271_XH), r271_Hook));
                        var r403_stroke = r403_currentGlyph.include(r271_SmallSStrokeImpl(r271_doTS, r271_doBS, r271_AdviceStroke2(2, 3, r271_XH), r271_EssLower));
                        return r403_stroke.lhsKnots[r403_stroke.lhsKnots.length - 1];
                    };
                };
                if (!r271_doBS)
                    r271_xn$createAndSaveGlyphImpl$2Lrc3c('SSwash.' + r271_suffix, null, function () {
                        var _r408_t1;
                        var _r408_t0 = this;
                        var r408_currentGlyph = _r408_t0;
                        r408_currentGlyph.include(r271_MarkSet.capDesc());
                        var r408_start = r408_currentGlyph.include(r338_UpperSBaseWithAttach());
                        var r408_sw = r271_AdviceStroke2(2, 3, r271_CAP);
                        r408_currentGlyph.include(r271_dispiro(r271_widths.lhs(r271_AdviceStroke(4.5)), r271_g4(r408_start.x, r408_start.y), r271_alsoThru(0.15, 0.6, r271_important), r271_flat(r271_RightSB - 1, r271_Descender, r271_widths(r408_sw, 0)), r271_curl(r271_RightSB, r271_Descender)));
                        return void 0;
                    });
                if (!r271_doBS)
                    r271_xn$createAndSaveGlyphImpl$2Lrc3c('sSwash.' + r271_suffix, null, function () {
                        var _r414_t1;
                        var _r414_t0 = this;
                        var r414_currentGlyph = _r414_t0;
                        r414_currentGlyph.include(r271_MarkSet.p());
                        var r414_start = r414_currentGlyph.include(r338_LowerSBaseWithAttach());
                        var r414_sw = r271_AdviceStroke2(2, 3, r271_XH);
                        r414_currentGlyph.include(r271_dispiro(r271_widths.lhs(r271_AdviceStroke(4.5)), r271_g4(r414_start.x, r414_start.y), r271_alsoThru(0.15, 0.6, r271_important), r271_flat(r271_RightSB - 1, r271_Descender, r271_widths(r414_sw, 0)), r271_curl(r271_RightSB, r271_Descender)));
                        return void 0;
                    });
                return r271_xn$createAndSaveGlyphImpl$2Lrc3c('sCurlyTail.' + r271_suffix, null, function () {
                    var _r420_t1;
                    var _r420_t0 = this;
                    var r420_currentGlyph = _r420_t0;
                    var r420_sw = r271_AdviceStroke2(2, 3, r271_XH);
                    r420_currentGlyph.include(r271_MarkSet.e());
                    r420_currentGlyph.include(r271_SmallSStrokeImpl(r271_doTS, r271_xn$CURLYTAIL$1aao, r420_sw, r271_EssLower));
                    r420_currentGlyph.include(r271_SAutoSlabStart(r271_doTS, r271_XH, r420_sw, r271_Hook));
                    r420_currentGlyph.include(r271_SAutoSlabEnd(r271_doBS, 0, r420_sw, r271_Hook));
                    return void 0;
                });
            }());
        }
        r271_xn$selectvariant$7Hrq('S', 'S');
        r271_xn$linkreducedvariant$5sIl8('S/sansSerif', 'S', r1_MathSansSerif);
        r271_xn$selectvariant$7Hrq('s', 's');
        r271_xn$linkreducedvariant$5sIl8('s/sansSerif', 's', r1_MathSansSerif);
        r271_xn$selectvariant$7Hrq('smcpS', 42801, new r271_xn$NamedParameterPair$2Lrc9b('follow', 'S'));
        r271_xn$selectvariant$7Hrq('revS', 423, new r271_xn$NamedParameterPair$2Lrc9b('follow', 'S'));
        r271_xn$selectvariant$7Hrq('revs', 424, new r271_xn$NamedParameterPair$2Lrc9b('follow', 's'));
        r271_alias('cyrl/Dze', 1029, 'S');
        r271_alias('cyrl/dze', 1109, 's');
        r271_alias('cyrl/ghe.italic', null, 'revs');
        r271_alias('cyrl/DzeRev', 42564, 'revS');
        r271_alias('cyrl/dzeRev', 42565, 'revs');
        r271_xn$selectvariant$7Hrq('DollarKernelStd', new r271_xn$NamedParameterPair$2Lrc9b('follow', 'S'));
        r271_xn$selectvariant$7Hrq('DollarKernelCap', new r271_xn$NamedParameterPair$2Lrc9b('follow', 'S'));
        r271_xn$selectvariant$7Hrq('SSwash', 11390);
        r271_xn$selectvariant$7Hrq('sSwash', 575);
        r271_xn$selectvariant$7Hrq('sCurlyTail', 122654, new r271_xn$NamedParameterPair$2Lrc9b('follow', 'sSwash'));
        r271_xn$selectvariant$7Hrq('S/descBase', new r271_xn$NamedParameterPair$2Lrc9b('shapeFrom', 'S'), new r271_xn$NamedParameterPair$2Lrc9b('follow', 'SRTail'));
        r271_xn$selectvariant$7Hrq('s/ascBase', new r271_xn$NamedParameterPair$2Lrc9b('shapeFrom', 's'));
        r271_xn$selectvariant$7Hrq('s/descBase', new r271_xn$NamedParameterPair$2Lrc9b('shapeFrom', 's'), new r271_xn$NamedParameterPair$2Lrc9b('follow', 'sRTail'));
        r271_xn$selectvariant$7Hrq('revs/descBase', new r271_xn$NamedParameterPair$2Lrc9b('shapeFrom', 'revs'), new r271_xn$NamedParameterPair$2Lrc9b('follow', 'sRTail'));
        r271_xn$selectvariant$7Hrq('s/phoneticRight');
        r271_xn$derivecomposites$7Hrq('SRTail', 42949, 'S/descBase', r271_RetroflexHook.l(r271_SB, 0, new r271_xn$NamedParameterPair$2Lrc9b('yAttach', r271_DToothlessRise), new r271_xn$NamedParameterPair$2Lrc9b('refSw', r271_AdviceStroke2(2, 3, r271_CAP))));
        r271_xn$derivecomposites$7Hrq('sRTail', 642, 's/descBase', r271_RetroflexHook.l(r271_SB, 0, new r271_xn$NamedParameterPair$2Lrc9b('yAttach', r271_DToothlessRise), new r271_xn$NamedParameterPair$2Lrc9b('refSw', r271_AdviceStroke2(2, 3, r271_XH))));
        r271_xn$derivecomposites$7Hrq('cyrl/gheDescender.italic', null, 'revs/descBase', r271_CyrDescender.r(r271_RightSB, 0, new r271_xn$NamedParameterPair$2Lrc9b('yAttach', r271_DToothlessRise), new r271_xn$NamedParameterPair$2Lrc9b('refSw', r271_AdviceStroke2(2, 3, r271_XH))));
        r271_xn$derivecomposites$7Hrq('cyrl/gheDHook.italic', null, 'revs/descBase', r271_PalatalHook.r(r271_RightSB, 0, new r271_xn$NamedParameterPair$2Lrc9b('yAttach', r271_DToothlessRise), new r271_xn$NamedParameterPair$2Lrc9b('refSw', r271_AdviceStroke2(2, 3, r271_XH))));
        r271_xn$derivecomposites$7Hrq('cyrl/ghayn.italic', null, 'revs', r271_FlatSlashShape(r271_Middle, r271_XH / 2, r271_OverlayStroke / 2, -0.2, 0.75));
        r271_xn$derivecomposites$7Hrq('cyrl/gheStrokeHook.italic', null, 'cyrl/gheDHook.italic', r271_FlatSlashShape(r271_Middle, r271_XH / 2, r271_OverlayStroke / 2, -0.2, 0.75));
        r271_xn$derivecomposites$7Hrq('sPalatalHook', 7562, 's', r271_PalatalHook.r(new r271_xn$NamedParameterPair$2Lrc9b('x', r1_mix(r271_Middle + r271_CorrectionOMidS, r271_RightSB, 0.75)), new r271_xn$NamedParameterPair$2Lrc9b('y', 0), new r271_xn$NamedParameterPair$2Lrc9b('yAttach', r1_mix(r271_O, r271_AdviceSArchDepth(r271_XH, -1, r271_AdviceStroke2(2, 3, r271_XH)), r271_archv.yFromX(0.75)))));
        r271_xn$derivecomposites$7Hrq('s/compLigLeft', null, 's/ascBase', function () {
            var _r450_t1;
            var _r450_t0 = this;
            var r450_currentGlyph = _r450_t0;
            r450_currentGlyph.ejectTagged('arcStartSerifR');
            var r450_sw = r271_ArcStartSerifWidth(r271_AdviceStroke2(2, 3, r271_XH));
            var r450_fine = r450_sw * r1_mix(r271_CThinB, 1, 0.6);
            var r450_hd = r271_FlatHookDepth(r271_DivFrame(1));
            var r450_yStart = r271_XH - r271_ArcStartSerifDepth(r271_SHook);
            var r450_neckLength = 0.5 * r271_Stroke;
            var r450_leftExt = 0.3 * (r271_RightSB - r271_SB) - 0.25 * r271_HVContrast * r450_sw;
            r450_currentGlyph.include(r271_dispiro(r271_widths.rhs(r450_fine), r271_flat(r271_RightSB - r450_fine * r271_HVContrast, r450_yStart, r271_heading(r271_Upward)), r271_curl(r271_RightSB - r450_fine * r271_HVContrast, r450_yStart + r450_neckLength, r271_heading(r271_Upward)), r271_alsoThru.g2(0.5, 0.5, r271_widths.center(r1_mix(r450_fine, r450_sw, 0.35))), r271_g4(r271_RightSB - r450_leftExt, Math.min(r1_mix(r271_XH, r271_Ascender, 0.5), r271_Ascender - 1.375 * r450_sw), r271_widths.lhs(r1_mix(r450_fine, r450_sw, 0.7))), r271_arcvh(), r271_flat(r271_RightSB, r271_Ascender, r271_widths.rhs.heading(r450_sw, r271_Rightward)), r271_curl(4 * r271_Width, r271_Ascender, r271_widths.rhs.heading(r450_sw, r271_Rightward))));
            return void 0;
        });
        r271_xn$derivecomposites$7Hrq('SCedilla', 350, 'S', 'cedillaExtShapeBelowOArc');
        r271_xn$derivecomposites$7Hrq('sCedilla', 351, 's', 'cedillaExtShapeBelowSOArc');
        r271_xn$createAndSaveGlyphImpl$2Lrc3c('mathbb/S', 120138, function () {
            var r455_sign, _r455_t4;
            var _r455_t3 = this;
            var r455_currentGlyph = _r455_t3;
            r455_currentGlyph.include(r271_MarkSet.capital());
            var r455_theta = Math.PI / 4;
            var _r455_t0 = [
                1,
                -1
            ];
            var _r455_t1 = _r455_t0.length;
            var _r455_t2 = 0;
            while (_r455_t2 < _r455_t1) {
                r455_sign = _r455_t0[_r455_t2];
                r455_currentGlyph.include(r271_SStrokeAlt(new r271_xn$NamedParameterPair$2Lrc9b('top', r271_CAP), new r271_xn$NamedParameterPair$2Lrc9b('hook', r271_Hook), new r271_xn$NamedParameterPair$2Lrc9b('swStart', r271_BBS * (r455_sign > 0 ? r271_CThin : 1)), new r271_xn$NamedParameterPair$2Lrc9b('swEnd', r271_BBS * (r455_sign < 0 ? r271_CThin : 1)), new r271_xn$NamedParameterPair$2Lrc9b('oXLeftTop', r271_O), new r271_xn$NamedParameterPair$2Lrc9b('ess', r271_BBD), new r271_xn$NamedParameterPair$2Lrc9b('offsetC', {
                    'x': 0.5 * r455_sign * r271_BBD * Math.sin(r455_theta),
                    'y': 0.5 * r455_sign * r271_BBD * Math.cos(r455_theta)
                }), new r271_xn$NamedParameterPair$2Lrc9b('offsetLT', {
                    'x': r455_sign > 0 ? r271_BBD / 2 : 0,
                    'y': (r455_sign > 0 ? 0.25 : 0.375) * r455_sign * r271_BBD * Math.cos(r455_theta)
                }), new r271_xn$NamedParameterPair$2Lrc9b('offsetRB', {
                    'x': r455_sign < 0 ? r271_BBD / 2 : 0,
                    'y': (r455_sign < 0 ? 0.25 : 0.375) * r455_sign * r271_BBD * Math.cos(r455_theta)
                })));
                _r455_t2 = _r455_t2 + 1;
            }
            return void 0;
        });
        r271_xn$createAndSaveGlyphImpl$2Lrc3c('mathbb/s', 120164, function () {
            var r470_sign, _r470_t4;
            var _r470_t3 = this;
            var r470_currentGlyph = _r470_t3;
            r470_currentGlyph.include(r271_MarkSet.e());
            var r470_theta = Math.PI / 5;
            var _r470_t0 = [
                1,
                -1
            ];
            var _r470_t1 = _r470_t0.length;
            var _r470_t2 = 0;
            while (_r470_t2 < _r470_t1) {
                r470_sign = _r470_t0[_r470_t2];
                r470_currentGlyph.include(r271_SStrokeAlt(new r271_xn$NamedParameterPair$2Lrc9b('top', r271_XH), new r271_xn$NamedParameterPair$2Lrc9b('hook', r271_SHook), new r271_xn$NamedParameterPair$2Lrc9b('swStart', r271_BBS * (r470_sign > 0 ? r271_CThin : 1)), new r271_xn$NamedParameterPair$2Lrc9b('swEnd', r271_BBS * (r470_sign < 0 ? r271_CThin : 1)), new r271_xn$NamedParameterPair$2Lrc9b('oXLeftTop', r271_OX / 8), new r271_xn$NamedParameterPair$2Lrc9b('ess', r271_BBD), new r271_xn$NamedParameterPair$2Lrc9b('offsetC', {
                    'x': 0.5 * r470_sign * r271_BBD * Math.sin(r470_theta),
                    'y': 0.5 * r470_sign * r271_BBD * Math.cos(r470_theta)
                }), new r271_xn$NamedParameterPair$2Lrc9b('offsetLT', {
                    'x': r470_sign > 0 ? r271_BBD / 2 : 0,
                    'y': (r470_sign > 0 ? 0.25 : 0.375) * r470_sign * r271_BBD * Math.cos(r470_theta)
                }), new r271_xn$NamedParameterPair$2Lrc9b('offsetRB', {
                    'x': r470_sign < 0 ? r271_BBD / 2 : 0,
                    'y': (r470_sign < 0 ? 0.25 : 0.375) * r470_sign * r271_BBD * Math.cos(r470_theta)
                })));
                _r470_t2 = _r470_t2 + 1;
            }
            return void 0;
        });
        var r271_DollarConfig = {
            'open': [
                0.95,
                0.05,
                r271_Descender / 2,
                0,
                'std'
            ],
            'through': [
                0.95,
                0.05,
                r271_Descender / 2,
                1,
                'std'
            ],
            'interrupted': [
                0.95,
                0.05,
                r271_Descender / 2,
                2,
                'std'
            ],
            'openCap': [
                0.88,
                0.12,
                0,
                0,
                'cap'
            ],
            'throughCap': [
                0.88,
                0.12,
                0,
                1,
                'cap'
            ],
            'interruptedCap': [
                0.88,
                0.12,
                0,
                2,
                'cap'
            ]
        };
        var _r271_t16 = Object.entries(r271_DollarConfig)[Symbol.iterator]();
        var _r271_t17 = void 0;
        while (!(_r271_t17 = _r271_t16.next()).done) {
            _r271_t18 = _r271_t17.value;
            r271_suffix = _r271_t18[0];
            r271_kTop = _r271_t18[1][0];
            r271_kBot = _r271_t18[1][1];
            r271_overflow = _r271_t18[1][2];
            r271_fillType = _r271_t18[1][3];
            r271_selector = _r271_t18[1][4];
            _r271_t18[1];
            (function () {
                return r271_xn$createAndSaveGlyphImpl$2Lrc3c('dollar/bar.' + r271_suffix, null, function () {
                    var r488_cofine, r488_gap, r488_yMid, r488_yTermLeft, r488_yTermRight, _r488_t1;
                    var _r488_t0 = this;
                    var r488_currentGlyph = _r488_t0;
                    var r488_top = r271_CAP * r271_kTop;
                    var r488_bot = r271_CAP * r271_kBot;
                    var r488_w = r271_AdviceStroke(3);
                    var r488_fine = r271_AdviceStroke(r271_StrokeWidthBlend(3, 5.5));
                    r488_currentGlyph.include(r271_dispiro(r271_widths.center(r488_w), r271_flat(r271_Middle, r488_top - r271_HalfStroke), r271_curl(r271_Middle, r271_CAP - r271_overflow, r271_heading(r271_Upward))));
                    r488_currentGlyph.include(r271_dispiro(r271_widths.center(r488_w), r271_flat(r271_Middle, r271_overflow, r271_heading(r271_Upward)), r271_curl(r271_Middle, r488_bot + r271_HalfStroke)));
                    if (r271_fillType === 1)
                        r488_currentGlyph.include(r271_VBar.m(r271_Middle, r488_bot + r271_HalfStroke, r488_top - r271_HalfStroke, r488_fine));
                    if (r271_fillType === 2) {
                        r488_cofine = r271_AdviceStroke(4);
                        r488_gap = r488_w / r271_Stroke * r271_EssUpper + Math.max((r488_top - r488_bot) / 6, r271_AdviceStroke2(3, 3, r488_top - r488_bot));
                        r488_yMid = r1_mix(r488_bot, r488_top, 0.5);
                        r488_yTermLeft = r1_mix(r488_yMid, r488_top - r271_AdviceSArchDepth(r488_top - r488_bot, -1, r488_w), 0.5);
                        r488_yTermRight = r1_mix(r488_yMid, r488_bot + r271_AdviceSArchDepth(r488_top - r488_bot, -1, r488_w), 0.5);
                        r488_currentGlyph.include(r271_difference(r271_union(r271_dispiro(r271_flat(r271_Middle, r488_top - r271_HalfStroke, r271_widths.center.heading(r488_cofine, r271_Downward)), r271_curl(r271_Middle, r1_mix(r488_bot, r488_top, 0.5), r271_widths.center.heading(r488_fine, r271_Downward))), r271_dispiro(r271_flat(r271_Middle, r488_bot + r271_HalfStroke, r271_widths.center.heading(r488_cofine, r271_Upward)), r271_curl(r271_Middle, r1_mix(r488_bot, r488_top, 0.5), r271_widths.center.heading(r488_fine, r271_Upward)))), r271_dispiro(r271_corner(0, r488_yTermLeft, r271_widths.center(r488_gap)), r271_corner(r271_Width, r488_yTermRight))));
                    }
                    r1_DependentSelector.set(r488_currentGlyph, r271_selector);
                    return void 0;
                });
            }());
        }
        r271_xn$selectvariant$7Hrq('dollar/bar', new r271_xn$NamedParameterPair$2Lrc9b('follow', 'dollar'));
        return r271_CreateDependentComposite('dollar', '$', 'dollar/bar', {
            'std': 'DollarKernelStd',
            'cap': 'DollarKernelCap'
        });
    });
    return void 0;
});
