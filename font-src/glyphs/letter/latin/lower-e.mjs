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
    r270_xn$Capture_Ext$2Lrc2b['$defineGlyphBlockImpl$'](r270_xn$Capture_Ext$2Lrc2b, 'Letter-Latin-Lower-E', function (r271_xn$Capture$2Lrc8, r271_xn$ExportCapture$2Lrc4b) {
        var r271_suffix, r271_Body, r271_RevBody, _r271_t15, _r271_t17, _r271_t18, _r271_t19, _r271_tag20;
        var _r271_t0 = r271_xn$Capture$2Lrc8;
        var r271_xn$createAndSaveGlyphImpl$2Lrc3c = _r271_t0['$createAndSaveGlyphImpl$'];
        var r271_xn$NamedParameterPair$2Lrc9b = _r271_t0['$NamedParameterPair$'];
        var r271_xn$assignUnicodeImpl$2Lrc8b = _r271_t0['$assignUnicodeImpl$'];
        var r271_xn$execState$2Lrc0b = _r271_t0['$execState$'];
        var r271_para = _r271_t0.para;
        var r271_MarkSet = _r271_t0.MarkSet;
        var r271_AS_BASE = _r271_t0.AS_BASE;
        var r271_ALSO_METRICS = _r271_t0.ALSO_METRICS;
        var r271_DivFrame = _r271_t0.DivFrame;
        var _r271_t1 = r271_xn$Capture$2Lrc8.Metrics;
        var r271_DesignParameters = _r271_t1.DesignParameters;
        var r271_Width = _r271_t1.Width;
        var r271_SB = _r271_t1.SB;
        var r271_CAP = _r271_t1.CAP;
        var r271_XH = _r271_t1.XH;
        var r271_Descender = _r271_t1.Descender;
        var r271_Translate = _r271_t1.Translate;
        var r271_TanSlope = _r271_t1.TanSlope;
        var r271_HVContrast = _r271_t1.HVContrast;
        var r271_Upward = _r271_t1.Upward;
        var r271_Downward = _r271_t1.Downward;
        var r271_Rightward = _r271_t1.Rightward;
        var r271_O = _r271_t1.O;
        var r271_OX = _r271_t1.OX;
        var r271_Hook = _r271_t1.Hook;
        var r271_AHook = _r271_t1.AHook;
        var r271_ArchDepth = _r271_t1.ArchDepth;
        var r271_SmallArchDepth = _r271_t1.SmallArchDepth;
        var r271_Stroke = _r271_t1.Stroke;
        var r271_LongJut = _r271_t1.LongJut;
        var r271_HalfStroke = _r271_t1.HalfStroke;
        var r271_RightSB = _r271_t1.RightSB;
        var r271_Middle = _r271_t1.Middle;
        var r271_ArchDepthA = _r271_t1.ArchDepthA;
        var r271_ArchDepthB = _r271_t1.ArchDepthB;
        var r271_CorrectionOMidX = _r271_t1.CorrectionOMidX;
        var r271_CorrectionOMidS = _r271_t1.CorrectionOMidS;
        var r271_AdviceStroke = _r271_t1.AdviceStroke;
        var r271_AdviceStroke2 = _r271_t1.AdviceStroke2;
        var r271_StrokeWidthBlend = _r271_t1.StrokeWidthBlend;
        var _r271_t2 = r271_xn$Capture$2Lrc8.SpiroFns;
        var r271_g4 = _r271_t2.g4;
        var r271_g2 = _r271_t2.g2;
        var r271_flat = _r271_t2.flat;
        var r271_curl = _r271_t2.curl;
        var r271_widths = _r271_t2.widths;
        var r271_heading = _r271_t2.heading;
        var r271_alsoThru = _r271_t2.alsoThru;
        var r271_alsoThruThem = _r271_t2.alsoThruThem;
        var r271_archv = _r271_t2.archv;
        var r271_arcvh = _r271_t2.arcvh;
        var r271_dispiro = _r271_t2.dispiro;
        var _r271_t3 = r271_xn$Capture$2Lrc8.BooleFns;
        var r271_union = _r271_t3.union;
        var r271_intersection = _r271_t3.intersection;
        var r271_difference = _r271_t3.difference;
        var _r271_t4 = r271_xn$Capture$2Lrc8.CommonShapes.resolve();
        var r271_xn$noshape$3cah = _r271_t4['no-shape'];
        var r271_OShapeOutline = _r271_t4.OShapeOutline;
        var r271_HBar = _r271_t4.HBar;
        var r271_VBar = _r271_t4.VBar;
        var r271_hookend = _r271_t4.hookend;
        var r271_FlipAround = _r271_t4.FlipAround;
        var r271_MaskBelow = _r271_t4.MaskBelow;
        var r271_MaskLeft = _r271_t4.MaskLeft;
        var _r271_t5 = r271_xn$Capture$2Lrc8['Common-Derivatives'].resolve();
        var r271_xn$selectvariant$7Hrq = _r271_t5['select-variant'];
        var r271_xn$referglyph$1aao = _r271_t5['refer-glyph'];
        var r271_alias = _r271_t5.alias;
        var r271_turned = _r271_t5.turned;
        var _r271_t6 = r271_xn$Capture$2Lrc8['Letter-Shared'].resolve();
        var r271_CreateDependentComposite = _r271_t6.CreateDependentComposite;
        var _r271_t7 = r271_xn$Capture$2Lrc8['Letter-Shared-Shapes'].resolve();
        var r271_FlatHookDepth = _r271_t7.FlatHookDepth;
        var r271_RetroflexHook = _r271_t7.RetroflexHook;
        var _r271_t8 = r271_xn$Capture$2Lrc8['Letter-Shared-Shapes'].resolve();
        var r271_SerifedArcEnd = _r271_t8.SerifedArcEnd;
        var r271_ArcEndSerif = _r271_t8.ArcEndSerif;
        var r271_DToothlessRise = _r271_t8.DToothlessRise;
        var _r271_t9 = r271_xn$Capture$2Lrc8['Mark-Shared-Metrics'].resolve();
        var r271_markExtend = _r271_t9.markExtend;
        var r271_markStroke = _r271_t9.markStroke;
        var r271_markStress = _r271_t9.markStress;
        var r271_markFine = _r271_t9.markFine;
        var _r271_t10 = r271_xn$Capture$2Lrc8['Mark-Above'].resolve();
        var r271_aboveMarkTop = _r271_t10.aboveMarkTop;
        var r271_aboveMarkBot = _r271_t10.aboveMarkBot;
        var r271_aboveMarkMid = _r271_t10.aboveMarkMid;
        var r271_aboveMarkStack = _r271_t10.aboveMarkStack;
        var _r271_t11 = r271_xn$Capture$2Lrc8['Mark-Adjustment'].resolve();
        var r271_ExtendBelowBaseAnchors = _r271_t11.ExtendBelowBaseAnchors;
        var _r271_t12 = r271_xn$Capture$2Lrc8['Letter-Latin-C'].resolve();
        var r271_CConfig = _r271_t12.CConfig;
        var r271_xTerminalR = function (r281_df) {
            var _r281_t0, _r281_t1;
            return r281_df.rightSB - r271_OX * (r271_para.isItalic ? 0 : 0.5);
        };
        var r271_HookHeight = function (r282_top, r282_stroke) {
            var _r282_t0, _r282_t1;
            return Math.min(r271_Hook, r271_AHook / r271_XH * r282_top, r271_para.isItalic ? r282_top : r282_stroke / 2 + (r282_top - r282_stroke * 3) / 4);
        };
        var r271_xn$SLABNONE$5sIl = 0;
        var r271_xn$SLABCLASSICAL$5sIl = 1;
        var r271_xn$SLABINWARD$5sIl = 2;
        r271_xn$ExportCapture$2Lrc4b(function () {
            var _r284_t0, _r284_t1;
            return { 'SmallEShape': r271_SmallEShape };
        });
        var r271_SmallEShape = function () {
            var _r285_t6;
            var _r285_t7 = arguments;
            var _r285_t0 = [].slice.call(_r285_t7, 0);
            var _r285_t1 = [];
            var _r285_t2 = 0;
            while (_r285_t2 < _r285_t0.length) {
                if (!(_r285_t0[_r285_t2] instanceof r271_xn$NamedParameterPair$2Lrc9b))
                    _r285_t1.push(_r285_t0[_r285_t2]);
                _r285_t2 = _r285_t2 + 1;
            }
            var _r285_t3 = _r285_t0;
            var _r285_t4 = _r285_t3.length;
            var _r285_t5 = 0;
            while (_r285_t5 < _r285_t4) {
                _r285_t2 = _r285_t3[_r285_t5];
                if (_r285_t2 && _r285_t2 instanceof r271_xn$NamedParameterPair$2Lrc9b && _r285_t2.left === 'df')
                    r285_df = _r285_t2.right;
                if (_r285_t2 && _r285_t2 instanceof r271_xn$NamedParameterPair$2Lrc9b && _r285_t2.left === 'top')
                    r285_top = _r285_t2.right;
                if (_r285_t2 && _r285_t2 instanceof r271_xn$NamedParameterPair$2Lrc9b && _r285_t2.left === 'stroke')
                    r285_stroke = _r285_t2.right;
                if (_r285_t2 && _r285_t2 instanceof r271_xn$NamedParameterPair$2Lrc9b && _r285_t2.left === 'barpos')
                    r285_barpos = _r285_t2.right;
                if (_r285_t2 && _r285_t2 instanceof r271_xn$NamedParameterPair$2Lrc9b && _r285_t2.left === 'bbd')
                    r285_bbd = _r285_t2.right;
                if (_r285_t2 && _r285_t2 instanceof r271_xn$NamedParameterPair$2Lrc9b && _r285_t2.left === 'tailSlab')
                    r285_tailSlab = _r285_t2.right;
                _r285_t5 = _r285_t5 + 1;
            }
            var r285_df = r1_fallback(r285_df, _r285_t1[0]);
            var r285_top = r1_fallback(r285_top, _r285_t1[1]);
            var r285_stroke = r1_fallback(r285_stroke, _r285_t1[2]);
            var r285_barpos = r1_fallback(r285_barpos, _r285_t1[3]);
            var r285_bbd = r1_fallback(r285_bbd, _r285_t1[4], 0);
            var r285_tailSlab = r1_fallback(r285_tailSlab, _r285_t1[5]);
            return function () {
                var r291___, _r291_t0, _r291_t1, _r291_t3;
                var _r291_t2 = this;
                var r291_currentGlyph = _r291_t2;
                var r291_barbottom = r285_top * r1_fallback(r285_barpos, r271_DesignParameters.eBarPos) - r285_stroke / 2;
                r291_currentGlyph.include(r271_HBar.b(r285_df.leftSB + r285_stroke / 2 + r271_OX + r285_bbd, r285_df.rightSB - r285_stroke / 2 - r271_OX, r291_barbottom, r285_stroke));
                var r291_path = r291_currentGlyph.include(r271_dispiro(r271_widths.lhs(r285_stroke), r271_flat(r285_df.rightSB - r271_OX, r291_barbottom, r271_heading(r271_Upward)), r271_curl(r285_df.rightSB - r271_OX, r285_top - r285_df.archDepthB(r271_SmallArchDepth)), r271_arcvh(), r271_g4(r285_df.middle - r271_CorrectionOMidS, r285_top - r271_O), r271_archv(), r271_flat(r285_df.leftSB + r271_OX, r285_top - r285_df.archDepthA(r271_SmallArchDepth)), r271_curl(r285_df.leftSB + r271_OX, 0 + r285_df.archDepthB(r271_SmallArchDepth)), (_r291_t0 = r285_tailSlab, _r291_t0 === r271_xn$SLABCLASSICAL$5sIl ? r271_SerifedArcEnd.LtrLhs(r285_df.rightSB, r285_df.middle, 0, r285_stroke, r271_HookHeight(r285_top, r285_stroke)) : _r291_t0 === r271_xn$SLABINWARD$5sIl ? [
                    r271_arcvh(),
                    r271_g4(r285_df.middle + r271_CorrectionOMidX * r285_stroke, r271_O),
                    r271_g4(r285_df.rightSB, r271_DToothlessRise)
                ] : (r291___ = _r291_t0, [
                    r271_hookend(r271_O, new r271_xn$NamedParameterPair$2Lrc9b('sw', r285_stroke)),
                    r271_g4(r271_xTerminalR(r285_df), r271_HookHeight(r285_top, r285_stroke))
                ]))));
                r291_currentGlyph.include((_r291_t1 = r285_tailSlab, _r291_t1 === r271_xn$SLABCLASSICAL$5sIl ? r271_ArcEndSerif.R(r285_df.rightSB, 0, r285_stroke, r271_HookHeight(r285_top, r285_stroke)) : _r291_t1 === r271_xn$SLABINWARD$5sIl ? r271_ArcEndSerif.InwardR(r285_df.rightSB, 0, r285_stroke, r271_HookHeight(r285_top, r285_stroke)) : (r291___ = _r291_t1, r271_xn$noshape$3cah())));
                return r291_path.rhsKnots[r291_path.rhsKnots.length - 1];
            };
        };
        r271_xn$ExportCapture$2Lrc4b(function () {
            var _r297_t0, _r297_t1;
            return { 'RevSmallEShape': r271_RevSmallEShape };
        });
        var r271_RevSmallEShape = function () {
            var _r298_t6;
            var _r298_t7 = arguments;
            var _r298_t0 = [].slice.call(_r298_t7, 0);
            var _r298_t1 = [];
            var _r298_t2 = 0;
            while (_r298_t2 < _r298_t0.length) {
                if (!(_r298_t0[_r298_t2] instanceof r271_xn$NamedParameterPair$2Lrc9b))
                    _r298_t1.push(_r298_t0[_r298_t2]);
                _r298_t2 = _r298_t2 + 1;
            }
            var _r298_t3 = _r298_t0;
            var _r298_t4 = _r298_t3.length;
            var _r298_t5 = 0;
            while (_r298_t5 < _r298_t4) {
                _r298_t2 = _r298_t3[_r298_t5];
                if (_r298_t2 && _r298_t2 instanceof r271_xn$NamedParameterPair$2Lrc9b && _r298_t2.left === 'df')
                    r298_df = _r298_t2.right;
                if (_r298_t2 && _r298_t2 instanceof r271_xn$NamedParameterPair$2Lrc9b && _r298_t2.left === 'top')
                    r298_top = _r298_t2.right;
                if (_r298_t2 && _r298_t2 instanceof r271_xn$NamedParameterPair$2Lrc9b && _r298_t2.left === 'stroke')
                    r298_stroke = _r298_t2.right;
                if (_r298_t2 && _r298_t2 instanceof r271_xn$NamedParameterPair$2Lrc9b && _r298_t2.left === 'barpos')
                    r298_barpos = _r298_t2.right;
                _r298_t5 = _r298_t5 + 1;
            }
            var r298_df = r1_fallback(r298_df, _r298_t1[0]);
            var r298_top = r1_fallback(r298_top, _r298_t1[1]);
            var r298_stroke = r1_fallback(r298_stroke, _r298_t1[2]);
            var r298_barpos = r1_fallback(r298_barpos, _r298_t1[3]);
            return function () {
                var _r304_t1;
                var _r304_t0 = this;
                var r304_currentGlyph = _r304_t0;
                var r304_barbottom = r298_top * r1_fallback(r298_barpos, r271_DesignParameters.eBarPos) - r271_HalfStroke;
                var r304_hookx = r298_df.leftSB;
                var r304_hookmiddle = r1_mix(r298_df.rightSB - r271_O, r304_hookx, 0.55) + r271_CorrectionOMidS;
                r304_currentGlyph.include(r271_HBar.b(r298_df.leftSB + r298_stroke / 2, r298_df.rightSB - r298_stroke / 2, r304_barbottom, r298_stroke));
                r304_currentGlyph.include(r271_dispiro(r271_widths.rhs(r298_stroke), r271_flat(r298_df.leftSB + r271_OX, r304_barbottom, r271_heading(r271_Upward)), r271_curl(r298_df.leftSB + r271_OX, r298_top - r298_df.archDepthA(r271_SmallArchDepth)), r271_arcvh(), r271_g4(r298_df.middle, r298_top - r271_O), r271_archv(), r271_flat(r298_df.rightSB - r271_OX, r298_top - r298_df.archDepthB(r271_SmallArchDepth)), r271_curl(r298_df.rightSB - r271_OX, r298_df.archDepthA(r271_SmallArchDepth)), r271_hookend(r271_O, new r271_xn$NamedParameterPair$2Lrc9b('sw', r298_stroke)), r271_g4(r298_df.width - r271_xTerminalR(r298_df), r271_HookHeight(r298_top, r298_stroke))));
                return void 0;
            };
        };
        r271_xn$ExportCapture$2Lrc4b(function () {
            var _r309_t0, _r309_t1;
            return { 'SmallERoundedShape': r271_SmallERoundedShape };
        });
        var r271_SmallERoundedShape = function () {
            var _r310_t6;
            var _r310_t7 = arguments;
            var _r310_t0 = [].slice.call(_r310_t7, 0);
            var _r310_t1 = [];
            var _r310_t2 = 0;
            while (_r310_t2 < _r310_t0.length) {
                if (!(_r310_t0[_r310_t2] instanceof r271_xn$NamedParameterPair$2Lrc9b))
                    _r310_t1.push(_r310_t0[_r310_t2]);
                _r310_t2 = _r310_t2 + 1;
            }
            var _r310_t3 = _r310_t0;
            var _r310_t4 = _r310_t3.length;
            var _r310_t5 = 0;
            while (_r310_t5 < _r310_t4) {
                _r310_t2 = _r310_t3[_r310_t5];
                if (_r310_t2 && _r310_t2 instanceof r271_xn$NamedParameterPair$2Lrc9b && _r310_t2.left === 'df')
                    r310_df = _r310_t2.right;
                if (_r310_t2 && _r310_t2 instanceof r271_xn$NamedParameterPair$2Lrc9b && _r310_t2.left === 'top')
                    r310_top = _r310_t2.right;
                if (_r310_t2 && _r310_t2 instanceof r271_xn$NamedParameterPair$2Lrc9b && _r310_t2.left === 'stroke')
                    r310_stroke = _r310_t2.right;
                if (_r310_t2 && _r310_t2 instanceof r271_xn$NamedParameterPair$2Lrc9b && _r310_t2.left === 'barpos')
                    r310_barpos = _r310_t2.right;
                _r310_t5 = _r310_t5 + 1;
            }
            var r310_df = r1_fallback(r310_df, _r310_t1[0]);
            var r310_top = r1_fallback(r310_top, _r310_t1[1]);
            var r310_stroke = r1_fallback(r310_stroke, _r310_t1[2]);
            var r310_barpos = r1_fallback(r310_barpos, _r310_t1[3]);
            return function () {
                var _r316_t1;
                var _r316_t0 = this;
                var r316_currentGlyph = _r316_t0;
                var r316_barbottom = r310_top * r1_fallback(r310_barpos, r271_para.isItalic ? 0.5 : 0.475) - r310_stroke / 2;
                var r316_pBarRight = 0.475 - r271_TanSlope * 0.5;
                var r316_pArcRight = r271_para.isItalic ? 0.425 - r271_TanSlope * 0.25 : r271_ArchDepthA / (r271_ArchDepthA + r271_ArchDepthB);
                var r316_xStart = r310_df.leftSB + 0.125 * r310_stroke * r271_HVContrast;
                var r316_pfIt = r271_para.isItalic ? 1 : 0;
                var r316_path = r316_currentGlyph.include(r271_dispiro(r271_widths.lhs(r310_stroke), (r271_para.isItalic ? r271_g2 : r271_flat)(r316_xStart, r316_barbottom - r316_pfIt * r271_StrokeWidthBlend(2, 3) * r271_O), r271_para.isItalic ? r271_alsoThru.g2(0.5, 0.8) : [], (r271_para.isItalic ? r271_g2 : r271_curl)(r1_mix(r316_xStart + (r271_para.isItalic ? 0.25 : 0) * r310_stroke * r271_HVContrast, r310_df.rightSB, r316_pBarRight), r316_barbottom + r316_pfIt * r271_StrokeWidthBlend(0.25, 1) * r271_O), r271_para.isItalic ? [] : r271_archv(), r271_g4(r310_df.rightSB - r271_OX, r1_mix(r316_barbottom, r310_top, r316_pArcRight)), r271_arcvh(), r271_g4(r310_df.middle - r271_CorrectionOMidS, r310_top - r271_O), r271_archv(), r271_flat(r310_df.leftSB + r271_OX, r310_top - r310_df.archDepthA(r271_SmallArchDepth)), r271_curl(r310_df.leftSB + r271_OX, 0 + r310_df.archDepthB(r271_SmallArchDepth)), r271_hookend(r271_O, new r271_xn$NamedParameterPair$2Lrc9b('sw', r310_stroke)), r271_g4(r271_xTerminalR(r310_df), r271_HookHeight(r310_top, r310_stroke))));
                return r316_path.rhsKnots[r316_path.rhsKnots.length - 1];
            };
        };
        r271_xn$ExportCapture$2Lrc4b(function () {
            var _r320_t0, _r320_t1;
            return { 'RevSmallERoundedShape': r271_RevSmallERoundedShape };
        });
        var r271_RevSmallERoundedShape = function () {
            var _r321_t6;
            var _r321_t7 = arguments;
            var _r321_t0 = [].slice.call(_r321_t7, 0);
            var _r321_t1 = [];
            var _r321_t2 = 0;
            while (_r321_t2 < _r321_t0.length) {
                if (!(_r321_t0[_r321_t2] instanceof r271_xn$NamedParameterPair$2Lrc9b))
                    _r321_t1.push(_r321_t0[_r321_t2]);
                _r321_t2 = _r321_t2 + 1;
            }
            var _r321_t3 = _r321_t0;
            var _r321_t4 = _r321_t3.length;
            var _r321_t5 = 0;
            while (_r321_t5 < _r321_t4) {
                _r321_t2 = _r321_t3[_r321_t5];
                if (_r321_t2 && _r321_t2 instanceof r271_xn$NamedParameterPair$2Lrc9b && _r321_t2.left === 'df')
                    r321_df = _r321_t2.right;
                if (_r321_t2 && _r321_t2 instanceof r271_xn$NamedParameterPair$2Lrc9b && _r321_t2.left === 'top')
                    r321_top = _r321_t2.right;
                if (_r321_t2 && _r321_t2 instanceof r271_xn$NamedParameterPair$2Lrc9b && _r321_t2.left === 'stroke')
                    r321_stroke = _r321_t2.right;
                if (_r321_t2 && _r321_t2 instanceof r271_xn$NamedParameterPair$2Lrc9b && _r321_t2.left === 'barpos')
                    r321_barpos = _r321_t2.right;
                _r321_t5 = _r321_t5 + 1;
            }
            var r321_df = r1_fallback(r321_df, _r321_t1[0]);
            var r321_top = r1_fallback(r321_top, _r321_t1[1]);
            var r321_stroke = r1_fallback(r321_stroke, _r321_t1[2]);
            var r321_barpos = r1_fallback(r321_barpos, _r321_t1[3]);
            return function () {
                var _r327_t1;
                var _r327_t0 = this;
                var r327_currentGlyph = _r327_t0;
                var r327_barbottom = r321_top * r1_fallback(r321_barpos, r271_para.isItalic ? 0.5 : 0.475) - r321_stroke / 2;
                var r327_pBarRight = 0.475 - r271_TanSlope * 0.5;
                var r327_pArcRight = r271_para.isItalic ? 0.425 + r271_TanSlope * 0.25 : r271_ArchDepthB / (r271_ArchDepthA + r271_ArchDepthB);
                var r327_xStart = r321_df.rightSB - 0.125 * r321_stroke * r271_HVContrast;
                var r327_pfIt = r271_para.isItalic ? 1 : 0;
                r327_currentGlyph.include(r271_dispiro(r271_widths.rhs(r321_stroke), (r271_para.isItalic ? r271_g2 : r271_flat)(r327_xStart, r327_barbottom - r327_pfIt * r271_StrokeWidthBlend(2, 3) * r271_O), r271_para.isItalic ? r271_alsoThru.g2(0.5, 0.8) : [], (r271_para.isItalic ? r271_g2 : r271_curl)(r1_mix(r327_xStart - (r271_para.isItalic ? 0.25 : 0) * r321_stroke * r271_HVContrast, r321_df.leftSB, r327_pBarRight), r327_barbottom + r327_pfIt * r271_StrokeWidthBlend(0.25, 1) * r271_O), r271_para.isItalic ? [] : r271_archv(), r271_g4(r321_df.leftSB + r271_OX, r1_mix(r327_barbottom, r321_top, r327_pArcRight)), r271_arcvh(), r271_g4(r321_df.middle - r271_CorrectionOMidS, r321_top - r271_O), r271_archv(), r271_flat(r321_df.rightSB - r271_OX, r321_top - r321_df.archDepthB(r271_SmallArchDepth)), r271_curl(r321_df.rightSB - r271_OX, 0 + r321_df.archDepthA(r271_SmallArchDepth)), r271_hookend(r271_O, new r271_xn$NamedParameterPair$2Lrc9b('sw', r321_stroke)), r271_g4(r321_df.width - r271_xTerminalR(r321_df), r271_HookHeight(r321_top, r321_stroke))));
                return void 0;
            };
        };
        var r271_SmallEConfig = {
            'flatCrossbar': [
                r271_SmallEShape,
                r271_RevSmallEShape
            ],
            'rounded': [
                r271_SmallERoundedShape,
                r271_RevSmallERoundedShape
            ]
        };
        var r271_AbkCheShape = function (r330_Body, r330_df, r330_top, r330_fDesc) {
            var _r330_t0, _r330_t1;
            return function () {
                var _r332_t1;
                var _r332_t0 = this;
                var r332_currentGlyph = _r332_t0;
                var r332_gap = (r330_df.width - 2 * r330_df.leftSB - 2.5 * r330_df.mvs) * 0.375 - 0.25 * r330_df.mvs * r271_HVContrast;
                var r332_divSub = (r330_df.width - r332_gap - r330_df.mvs) / r271_Width;
                var r332_dfSub = r271_DivFrame(r332_divSub, 2);
                r332_currentGlyph.include(r330_Body(r332_dfSub, r330_top, r330_df.mvs));
                if (r330_fDesc) {
                    r332_currentGlyph.include(r271_ExtendBelowBaseAnchors(-r271_LongJut + 0.5 * r271_Stroke));
                    r332_currentGlyph.include(r271_difference(r271_VBar.m(r332_dfSub.middle, -r271_LongJut + 0.5 * r271_Stroke, r330_df.mvs + r271_O, r271_AdviceStroke(3.5, r330_df.div)), r271_OShapeOutline.NoOvershoot(r330_top, 0, r332_dfSub.leftSB, r332_dfSub.rightSB, r330_df.mvs)));
                }
                r332_currentGlyph.include(r271_Translate(r271_Width * (r330_df.div - r332_divSub), 0));
                var r332_hd = r271_FlatHookDepth(r330_df);
                var r332_yBar = r330_top * r271_DesignParameters.eBarPos - 0.5 * r330_df.mvs;
                r332_currentGlyph.include(r271_intersection(r271_MaskLeft(r332_dfSub.leftSB + r271_Width * (r330_df.div - r332_divSub)), r271_dispiro(r271_flat(r330_df.leftSB - 0.25 * r330_df.mvs * r271_HVContrast, r332_yBar + r271_Hook, r271_widths.lhs.heading(r330_df.mvs, r271_Downward)), r271_curl(r330_df.leftSB - 0.25 * r330_df.mvs * r271_HVContrast, r332_yBar + Math.min(r271_Hook, r332_hd.y) - r330_df.mvs * 0.25, r271_heading(r271_Downward)), r271_arcvh(), r271_flat(Math.min(r330_df.leftSB + r332_hd.x - 0.5 * r330_df.mvs * r271_HVContrast, r332_dfSub.leftSB + r271_Width * (r330_df.div - r332_divSub)), r332_yBar), r271_curl(r332_dfSub.middle + r271_Width * (r330_df.div - r332_divSub), r332_yBar))));
                return void 0;
            };
        };
        var _r271_t13 = Object.entries(r271_SmallEConfig)[Symbol.iterator]();
        var _r271_t14 = void 0;
        while (!(_r271_t14 = _r271_t13.next()).done) {
            _r271_t15 = _r271_t14.value;
            r271_suffix = _r271_t15[0];
            r271_Body = _r271_t15[1][0];
            r271_RevBody = _r271_t15[1][1];
            _r271_t15[1];
            (function () {
                var r340_suffixSerif, r340_styTop, r340_styBot, _r340_t2, _r340_t3, _r340_tag4;
                r271_xn$createAndSaveGlyphImpl$2Lrc3c('e.' + r271_suffix, null, function () {
                    var _r343_t1;
                    var _r343_t0 = this;
                    var r343_currentGlyph = _r343_t0;
                    r343_currentGlyph.include(r271_MarkSet.e());
                    r343_currentGlyph.include(r271_Body(r271_DivFrame(1), r271_XH, r271_AdviceStroke2(2, 3, r271_XH)));
                    return void 0;
                });
                r271_xn$createAndSaveGlyphImpl$2Lrc3c('eOgonek.' + r271_suffix, null, function () {
                    var _r348_t1;
                    var _r348_t0 = this;
                    var r348_currentGlyph = _r348_t0;
                    r348_currentGlyph.include(r271_MarkSet.e());
                    var r348_lastKnot = r348_currentGlyph.include(r271_Body(r271_DivFrame(1), r271_XH, r271_AdviceStroke2(2, 3, r271_XH)));
                    var r348_fine = r271_AdviceStroke(8);
                    var r348_depth = 0 - r271_Descender - r271_markStroke;
                    var r348_extL = 7 / 16 * r348_depth + 0.25 * r271_markStress;
                    var r348_extR = Math.max(0.0625 * r271_markExtend, 1.5 * r271_TanSlope * r271_markStroke);
                    var r348_beginCoSlope = r271_para.isItalic ? 0.2 : 0;
                    r348_currentGlyph.setBaseAnchor('trailing', r271_RightSB + r348_extR, -r348_depth + 0.5 * r271_O - r271_markStroke);
                    r348_currentGlyph.setBaseAnchor('belowBraceL', r271_RightSB - r348_extL - 0.25 * r271_HVContrast * r271_markStroke, -0.75 * r348_depth);
                    r348_currentGlyph.setBaseAnchor('belowBraceR', r271_RightSB - 0.75 * r348_extL, -0.75 * r348_depth);
                    var r348_turnSlope = 0.5 * ((r271_markStroke - r348_fine) / r271_markStroke - (r271_ArchDepthB - r271_ArchDepth) / r271_ArchDepth);
                    r348_currentGlyph.include(r271_intersection(r271_MaskBelow(r348_lastKnot.y), r271_dispiro(r271_g4(r348_lastKnot.x, r348_lastKnot.y, r271_widths.rhs(r348_fine)), r271_g4(r348_lastKnot.x - r348_beginCoSlope * 0.01, r348_lastKnot.y - 0.01), r271_alsoThruThem.fromTWithOffset([
                        1 / 3,
                        2 / 3
                    ], {
                        'rx': function (r355_rt) {
                            var _r355_t0, _r355_t1;
                            return r355_rt;
                        },
                        'deltaX': function (r356_rt) {
                            var _r356_t0, _r356_t1;
                            return 0;
                        },
                        'ry': function (r357_rt) {
                            var _r357_t0, _r357_t1;
                            return 1 / 24 + r357_rt + (1 / 2 - r357_rt) * (3 / 8);
                        },
                        'deltaY': function (r358_rt) {
                            var _r358_t0, _r358_t1;
                            return -0.25 * r1_mix(r348_fine, r271_markStroke, r358_rt);
                        },
                        'modifier': function (r359_rt) {
                            var _r359_t0, _r359_t1;
                            return r271_widths.rhs(r1_mix(r348_fine, r271_markStroke, Math.pow(r359_rt, 2)));
                        }
                    }), r271_g4.down.mid(r271_RightSB - r348_extL, -0.75 * r348_depth, r271_widths.rhs.heading(r271_markStroke, {
                        'x': r271_HVContrast,
                        'y': r348_turnSlope
                    })), r271_arcvh(r271_widths.rhs(r271_markStroke)), r271_g4(r271_RightSB + r1_mix(-r348_extL, r348_extR, 11 / 16), -r348_depth + r271_O, r271_heading(r271_Rightward)), r271_g4(r271_RightSB + r348_extR, -r348_depth + 0.5 * r271_O, r271_heading(r271_Rightward)))));
                    return void 0;
                });
                r271_xn$createAndSaveGlyphImpl$2Lrc3c('eRetroflexHook.' + r271_suffix, null, function () {
                    var _r362_t1;
                    var _r362_t0 = this;
                    var r362_currentGlyph = _r362_t0;
                    r362_currentGlyph.include(r271_MarkSet.e());
                    var r362_lastKnot = r362_currentGlyph.include(r271_Body(r271_DivFrame(1), r271_XH, r271_AdviceStroke2(2, 3, r271_XH)));
                    r362_currentGlyph.include(r271_RetroflexHook.r(new r271_xn$NamedParameterPair$2Lrc9b('x', r362_lastKnot.x), new r271_xn$NamedParameterPair$2Lrc9b('y', 0), new r271_xn$NamedParameterPair$2Lrc9b('yAttach', r362_lastKnot.y)));
                    return void 0;
                });
                r271_xn$createAndSaveGlyphImpl$2Lrc3c('Schwa/selector.' + r271_suffix, null, function () {
                    var _r371_t1;
                    var _r371_t0 = this;
                    var r371_currentGlyph = _r371_t0;
                    r371_currentGlyph.include(r271_MarkSet.capital());
                    r371_currentGlyph.setBaseAnchor('cvDecompose', 0, 0);
                    r1_DependentSelector.set(r371_currentGlyph, r271_suffix);
                    return void 0;
                });
                var _r340_t0 = Object.entries(r271_CConfig)[Symbol.iterator]();
                var _r340_t1 = void 0;
                while (!(_r340_t1 = _r340_t0.next()).done) {
                    _r340_t2 = _r340_t1.value;
                    r340_suffixSerif = _r340_t2[0];
                    r340_styTop = _r340_t2[1][0];
                    r340_styBot = _r340_t2[1][1];
                    _r340_t2[1];
                    (function () {
                        return r271_xn$createAndSaveGlyphImpl$2Lrc3c('Schwa.' + r271_suffix + '.' + r340_suffixSerif, null, function () {
                            var _r379_t1;
                            var _r379_t0 = this;
                            var r379_currentGlyph = _r379_t0;
                            r379_currentGlyph.setMarkAnchor('cvDecompose', 0, 0);
                            r379_currentGlyph.include(r271_Body(r271_DivFrame(1), r271_CAP, r271_AdviceStroke2(2, 3, r271_CAP), new r271_xn$NamedParameterPair$2Lrc9b('tailSlab', r340_styTop)));
                            r379_currentGlyph.include(r271_FlipAround(r271_Middle, r271_CAP / 2));
                            return void 0;
                        });
                    }());
                }
                r271_xn$selectvariant$7Hrq('Schwa.' + r271_suffix, new r271_xn$NamedParameterPair$2Lrc9b('follow', 'CTopSerifOnly'));
                r271_xn$createAndSaveGlyphImpl$2Lrc3c('schwa.' + r271_suffix, null, function () {
                    var _r387_t1;
                    var _r387_t0 = this;
                    var r387_currentGlyph = _r387_t0;
                    r387_currentGlyph.include(r271_xn$referglyph$1aao('e.' + r271_suffix), r271_AS_BASE, r271_ALSO_METRICS);
                    r387_currentGlyph.include(r271_FlipAround(r271_Middle, r271_XH / 2));
                    return void 0;
                });
                r271_xn$createAndSaveGlyphImpl$2Lrc3c('eRev.' + r271_suffix, null, function () {
                    var _r392_t1;
                    var _r392_t0 = this;
                    var r392_currentGlyph = _r392_t0;
                    r392_currentGlyph.include(r271_MarkSet.e());
                    r392_currentGlyph.include(r271_RevBody(r271_DivFrame(1), r271_XH, r271_AdviceStroke2(2, 3, r271_XH)));
                    return void 0;
                });
                r271_xn$createAndSaveGlyphImpl$2Lrc3c('eBar.' + r271_suffix, null, function () {
                    var _r397_t1;
                    var _r397_t0 = this;
                    var r397_currentGlyph = _r397_t0;
                    r397_currentGlyph.include(r271_xn$referglyph$1aao('e.' + r271_suffix), r271_AS_BASE, r271_ALSO_METRICS);
                    r397_currentGlyph.include(r271_HBar.m(r1_mix(r271_SB, 0, 0.7), r1_mix(r271_RightSB, r271_Width, 0.7), r271_XH * 0.25 + r271_Stroke * 0.25, Math.min(r271_AdviceStroke(5), 0.25 * (r271_XH - 3 * r271_Stroke))));
                    return void 0;
                });
                r271_xn$createAndSaveGlyphImpl$2Lrc3c('cyrl/abk/Che.' + r271_suffix, null, function () {
                    var _r402_t1;
                    var _r402_t0 = this;
                    var r402_currentGlyph = _r402_t0;
                    var r402_df = r271_DivFrame(r271_para.diversityM, 2.5);
                    r402_currentGlyph.setWidth(r402_df.width);
                    r402_currentGlyph.include(r402_df.markSet.capital());
                    r402_currentGlyph.include(r271_AbkCheShape(r271_Body, r402_df, r271_CAP, 0));
                    return void 0;
                });
                r271_xn$createAndSaveGlyphImpl$2Lrc3c('cyrl/abk/che.' + r271_suffix, null, function () {
                    var _r408_t1;
                    var _r408_t0 = this;
                    var r408_currentGlyph = _r408_t0;
                    var r408_df = r271_DivFrame(r271_para.diversityM, 2.5);
                    r408_currentGlyph.setWidth(r408_df.width);
                    r408_currentGlyph.include(r408_df.markSet.e());
                    r408_currentGlyph.include(r271_AbkCheShape(r271_Body, r408_df, r271_XH, 0));
                    return void 0;
                });
                r271_xn$createAndSaveGlyphImpl$2Lrc3c('cyrl/abk/CheDescender.' + r271_suffix, null, function () {
                    var _r414_t1;
                    var _r414_t0 = this;
                    var r414_currentGlyph = _r414_t0;
                    var r414_df = r271_DivFrame(r271_para.diversityM, 2.5);
                    r414_currentGlyph.setWidth(r414_df.width);
                    r414_currentGlyph.include(r414_df.markSet.capital());
                    r414_currentGlyph.include(r271_AbkCheShape(r271_Body, r414_df, r271_CAP, 1));
                    return void 0;
                });
                return r271_xn$createAndSaveGlyphImpl$2Lrc3c('cyrl/abk/cheDescender.' + r271_suffix, null, function () {
                    var _r420_t1;
                    var _r420_t0 = this;
                    var r420_currentGlyph = _r420_t0;
                    var r420_df = r271_DivFrame(r271_para.diversityM, 2.5);
                    r420_currentGlyph.setWidth(r420_df.width);
                    r420_currentGlyph.include(r420_df.markSet.e());
                    r420_currentGlyph.include(r271_AbkCheShape(r271_Body, r420_df, r271_XH, 1));
                    return void 0;
                });
            }());
        }
        r271_xn$selectvariant$7Hrq('e', 'e');
        r271_alias('cyrl/ie', 1077, 'e');
        r271_turned('turne', 477, 'e', r271_Middle, r271_XH / 2);
        r271_xn$selectvariant$7Hrq('eOgonek', 281, new r271_xn$NamedParameterPair$2Lrc9b('follow', 'e'));
        r271_xn$selectvariant$7Hrq('eRetroflexHook', 7570, new r271_xn$NamedParameterPair$2Lrc9b('follow', 'e'));
        r271_xn$selectvariant$7Hrq('Schwa/selector', new r271_xn$NamedParameterPair$2Lrc9b('follow', 'Schwa'));
        r271_CreateDependentComposite('Schwa', 399, 'Schwa/selector', {
            'flatCrossbar': 'Schwa.flatCrossbar',
            'rounded': 'Schwa.rounded'
        });
        r271_alias('cyrl/Schwa', 1240, 'Schwa');
        r271_xn$selectvariant$7Hrq('schwa', 601);
        r271_alias('cyrl/schwa', 1241, 'turne');
        r271_xn$selectvariant$7Hrq('eRev', 600, new r271_xn$NamedParameterPair$2Lrc9b('follow', 'e'));
        r271_xn$selectvariant$7Hrq('eBar', 43827, new r271_xn$NamedParameterPair$2Lrc9b('follow', 'e'));
        r271_xn$selectvariant$7Hrq('cyrl/abk/Che', 1212, new r271_xn$NamedParameterPair$2Lrc9b('follow', 'e'));
        r271_xn$selectvariant$7Hrq('cyrl/abk/che', 1213, new r271_xn$NamedParameterPair$2Lrc9b('follow', 'e'));
        r271_xn$selectvariant$7Hrq('cyrl/abk/CheDescender', 1214, new r271_xn$NamedParameterPair$2Lrc9b('follow', 'e'));
        r271_xn$selectvariant$7Hrq('cyrl/abk/cheDescender', 1215, new r271_xn$NamedParameterPair$2Lrc9b('follow', 'e'));
        var _r271_t16 = r271_xn$Capture$2Lrc8['Letter-Blackboard'].resolve();
        var r271_BBS = _r271_t16.BBS;
        var r271_BBD = _r271_t16.BBD;
        return r271_xn$createAndSaveGlyphImpl$2Lrc3c('mathbb/e', 120150, function () {
            var _r436_t1;
            var _r436_t0 = this;
            var r436_currentGlyph = _r436_t0;
            r436_currentGlyph.include(r271_MarkSet.e());
            r436_currentGlyph.include(r271_SmallEShape(r271_DivFrame(1), r271_XH, r271_BBS, new r271_xn$NamedParameterPair$2Lrc9b('bbd', r271_BBD)));
            r436_currentGlyph.include(r271_intersection(r271_OShapeOutline.NoOvershoot(r271_XH, 0, r271_SB, r271_RightSB, r271_BBS), r271_union(r271_VBar.l(r271_SB + r271_BBD + r271_OX, 0, r271_XH, r271_BBS), r271_VBar.r(r271_RightSB - r271_BBD - r271_OX, r271_XH * r271_DesignParameters.eBarPos, r271_XH, r271_BBS))));
            return void 0;
        });
    });
    return void 0;
});
