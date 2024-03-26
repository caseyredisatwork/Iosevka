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
    r270_xn$Capture_Ext$2Lrc2b['$defineGlyphBlockImpl$'](r270_xn$Capture_Ext$2Lrc2b, 'Letter-Latin-Lower-I', function (r271_xn$Capture$2Lrc8, r271_xn$ExportCapture$2Lrc4b) {
        var r271_suffix, r271_Serif, r271_xMiddleT, r271_div, r271_y0R, _r271_t13, _r271_t14, _r271_t15, _r271_t16, _r271_tag17, _r271_t18, _r271_tag19, _r271_t20, _r271_tag21, _r271_t22, _r271_tag23, _r271_t24, _r271_tag25, _r271_t26, _r271_tag27, _r271_t28, _r271_tag29;
        var _r271_t0 = r271_xn$Capture$2Lrc8;
        var r271_xn$createAndSaveGlyphImpl$2Lrc3c = _r271_t0['$createAndSaveGlyphImpl$'];
        var r271_xn$NamedParameterPair$2Lrc9b = _r271_t0['$NamedParameterPair$'];
        var r271_xn$assignUnicodeImpl$2Lrc8b = _r271_t0['$assignUnicodeImpl$'];
        var r271_xn$execState$2Lrc0b = _r271_t0['$execState$'];
        var r271_para = _r271_t0.para;
        var r271_MarkSet = _r271_t0.MarkSet;
        var r271_AS_BASE = _r271_t0.AS_BASE;
        var r271_ALSO_METRICS = _r271_t0.ALSO_METRICS;
        var r271_tagged = _r271_t0.tagged;
        var r271_DivFrame = _r271_t0.DivFrame;
        var _r271_t1 = r271_xn$Capture$2Lrc8.Metrics;
        var r271_DesignParameters = _r271_t1.DesignParameters;
        var r271_UPM = _r271_t1.UPM;
        var r271_Width = _r271_t1.Width;
        var r271_SB = _r271_t1.SB;
        var r271_CAP = _r271_t1.CAP;
        var r271_XH = _r271_t1.XH;
        var r271_Ascender = _r271_t1.Ascender;
        var r271_Descender = _r271_t1.Descender;
        var r271_Translate = _r271_t1.Translate;
        var r271_ApparentTranslate = _r271_t1.ApparentTranslate;
        var r271_TanSlope = _r271_t1.TanSlope;
        var r271_HVContrast = _r271_t1.HVContrast;
        var r271_Upward = _r271_t1.Upward;
        var r271_Downward = _r271_t1.Downward;
        var r271_Rightward = _r271_t1.Rightward;
        var r271_Leftward = _r271_t1.Leftward;
        var r271_O = _r271_t1.O;
        var r271_Hook = _r271_t1.Hook;
        var r271_HookX = _r271_t1.HookX;
        var r271_Stroke = _r271_t1.Stroke;
        var r271_OverlayPos = _r271_t1.OverlayPos;
        var r271_LongJut = _r271_t1.LongJut;
        var r271_Jut = _r271_t1.Jut;
        var r271_VJutStroke = _r271_t1.VJutStroke;
        var r271_IBalance = _r271_t1.IBalance;
        var r271_IBalance2 = _r271_t1.IBalance2;
        var r271_HalfStroke = _r271_t1.HalfStroke;
        var r271_RightSB = _r271_t1.RightSB;
        var r271_Middle = _r271_t1.Middle;
        var r271_DotRadius = _r271_t1.DotRadius;
        var r271_SmallArchDepthB = _r271_t1.SmallArchDepthB;
        var r271_AdviceStroke = _r271_t1.AdviceStroke;
        var r271_OverlayStroke = _r271_t1.OverlayStroke;
        var r271_StrokeWidthBlend = _r271_t1.StrokeWidthBlend;
        var _r271_t2 = r271_xn$Capture$2Lrc8.SpiroFns;
        var r271_g4 = _r271_t2.g4;
        var r271_g2 = _r271_t2.g2;
        var r271_flat = _r271_t2.flat;
        var r271_curl = _r271_t2.curl;
        var r271_end = _r271_t2.end;
        var r271_straight = _r271_t2.straight;
        var r271_widths = _r271_t2.widths;
        var r271_heading = _r271_t2.heading;
        var r271_archv = _r271_t2.archv;
        var r271_arcvh = _r271_t2.arcvh;
        var r271_dispiro = _r271_t2.dispiro;
        var _r271_t3 = r271_xn$Capture$2Lrc8.BooleFns;
        var r271_union = _r271_t3.union;
        var r271_intersection = _r271_t3.intersection;
        var _r271_t4 = r271_xn$Capture$2Lrc8.CommonShapes.resolve();
        var r271_xn$noshape$3cah = _r271_t4['no-shape'];
        var r271_HSerif = _r271_t4.HSerif;
        var r271_HBar = _r271_t4.HBar;
        var r271_HOverlayBar = _r271_t4.HOverlayBar;
        var r271_VBar = _r271_t4.VBar;
        var r271_FlatSlashShape = _r271_t4.FlatSlashShape;
        var r271_hookend = _r271_t4.hookend;
        var r271_WithTransform = _r271_t4.WithTransform;
        var r271_MaskAbove = _r271_t4.MaskAbove;
        var r271_MaskBelow = _r271_t4.MaskBelow;
        var _r271_t5 = r271_xn$Capture$2Lrc8['Common-Derivatives'].resolve();
        var r271_xn$selectvariant$7Hrq = _r271_t5['select-variant'];
        var r271_xn$referglyph$1aao = _r271_t5['refer-glyph'];
        var r271_alias = _r271_t5.alias;
        var r271_turned = _r271_t5.turned;
        var r271_xn$deriveglyphs$7Hrq = _r271_t5['derive-glyphs'];
        var r271_xn$derivecomposites$7Hrq = _r271_t5['derive-composites'];
        var r271_xn$linkreducedvariant$5sIl8 = _r271_t5['link-reduced-variant'];
        var r271_HalfAdvance = _r271_t5.HalfAdvance;
        var r271_TurnMarks = _r271_t5.TurnMarks;
        var _r271_t6 = r271_xn$Capture$2Lrc8['Mark-Adjustment'].resolve();
        var r271_ExtendBelowBaseAnchors = _r271_t6.ExtendBelowBaseAnchors;
        var _r271_t7 = r271_xn$Capture$2Lrc8['Letter-Shared'].resolve();
        var r271_CreateCommaCaronComposition = _r271_t7.CreateCommaCaronComposition;
        var _r271_t8 = r271_xn$Capture$2Lrc8['Letter-Shared'].resolve();
        var r271_CreateAccentedComposition = _r271_t8.CreateAccentedComposition;
        var r271_CreateMultiAccentedComposition = _r271_t8.CreateMultiAccentedComposition;
        var r271_CreateOgonekComposition = _r271_t8.CreateOgonekComposition;
        var _r271_t9 = r271_xn$Capture$2Lrc8['Letter-Shared-Shapes'].resolve();
        var r271_FlatHookDepth = _r271_t9.FlatHookDepth;
        var r271_DiagonalTailR = _r271_t9.DiagonalTailR;
        var r271_DiagonalTailStdDepth = _r271_t9.DiagonalTailStdDepth;
        var _r271_t10 = r271_xn$Capture$2Lrc8['Letter-Shared-Shapes'].resolve();
        var r271_CurlyTail = _r271_t10.CurlyTail;
        var r271_BeltOverlay = _r271_t10.BeltOverlay;
        var r271_PalatalHook = _r271_t10.PalatalHook;
        var r271_RetroflexHook = _r271_t10.RetroflexHook;
        var r271_LetterBarOverlay = _r271_t10.LetterBarOverlay;
        r271_xn$ExportCapture$2Lrc4b(function () {
            var _r280_t0, _r280_t1;
            return { 'OverrideILMarks': r271_OverrideILMarks };
        });
        var r271_OverrideILMarks = function (r281_df, r281_xMiddle, r281_yTop) {
            var _r281_t0, _r281_t1;
            return function () {
                var _r283_t1;
                var _r283_t0 = this;
                var r283_currentGlyph = _r283_t0;
                r283_currentGlyph.setBaseAnchor('above', r281_xMiddle, r281_yTop);
                r283_currentGlyph.setBaseAnchor('below', r281_xMiddle, 0);
                r283_currentGlyph.setBaseAnchor('overlay', r281_xMiddle, r281_yTop * r271_OverlayPos);
                r283_currentGlyph.setBaseAnchor('topRight', r281_xMiddle + r281_df.rightSB - r281_df.middle, r281_yTop);
                return void 0;
            };
        };
        r271_xn$ExportCapture$2Lrc4b(function () {
            var _r289_t0, _r289_t1;
            return { 'OverrideILMarksSerifed': r271_OverrideILMarksSerifed };
        });
        var r271_OverrideILMarksSerifed = function (r290_df, r290_xMiddle, r290_yTop) {
            var _r290_t0, _r290_t1;
            return function () {
                var _r292_t1;
                var _r292_t0 = this;
                var r292_currentGlyph = _r292_t0;
                r292_currentGlyph.setBaseAnchor('above', r290_xMiddle, r290_yTop);
                r292_currentGlyph.setBaseAnchor('below', r290_xMiddle, 0);
                r292_currentGlyph.setBaseAnchor('overlay', r1_mix(r290_df.middle, r290_xMiddle, 0.5), r290_yTop * r271_OverlayPos);
                r292_currentGlyph.setBaseAnchor('topRight', r290_xMiddle + r290_df.rightSB - r290_df.middle, r290_yTop);
                return void 0;
            };
        };
        var r271_TailedDotlessXMiddle = function (r297_df, r297_addTopSerif) {
            var _r297_t0, _r297_t1;
            return r297_df.middle - (r297_addTopSerif ? 0 : r271_IBalance2(r297_df));
        };
        var r271_ItalicDotlessIShift = function (r298_df) {
            var _r298_t0, _r298_t1;
            return (1 - r298_df.div) * 0.2;
        };
        var r271_ItalicDotlessIXMiddle = function (r299_df) {
            var _r299_t0, _r299_t1;
            return r1_mix(r299_df.leftSB, r299_df.rightSB, r271_StrokeWidthBlend(0.42, 0.46) - r271_ItalicDotlessIShift(r299_df));
        };
        var r271_XMiddle = function () {
            var r302_Center, r302_Hooky, r302_HookyBottom, r302_Serifed, r302_Tailed, r302_TailedSerifed, r302_FlatTailed, r302_SerifedFlatTailed, r302_PhoneticLeft;
            var r302_exports = {};
            r302_exports.Center = r302_Center = function (r310_df) {
                var _r310_t0, _r310_t1;
                return r310_df.middle;
            };
            r302_exports.Hooky = r302_Hooky = function (r312_df) {
                var _r312_t0, _r312_t1;
                return r312_df.middle + r271_IBalance2(r312_df);
            };
            r302_exports.HookyBottom = r302_HookyBottom = function (r314_df) {
                var _r314_t0, _r314_t1;
                return r314_df.middle - r271_IBalance2(r314_df);
            };
            r302_exports.Serifed = r302_Serifed = function (r316_df) {
                var _r316_t0, _r316_t1;
                return r316_df.middle + r271_IBalance(r316_df);
            };
            r302_exports.Tailed = r302_Tailed = function (r318_df) {
                var _r318_t0, _r318_t1;
                return r271_para.isItalic ? r271_ItalicDotlessIXMiddle(r318_df) : r271_TailedDotlessXMiddle(r318_df, false);
            };
            r302_exports.TailedSerifed = r302_TailedSerifed = function (r320_df) {
                var _r320_t0, _r320_t1;
                return r271_para.isItalic ? r271_ItalicDotlessIXMiddle(r320_df) : r271_TailedDotlessXMiddle(r320_df, true);
            };
            r302_exports.FlatTailed = r302_FlatTailed = function (r322_df) {
                var _r322_t0, _r322_t1;
                return r271_TailedDotlessXMiddle(r322_df, false);
            };
            r302_exports.SerifedFlatTailed = r302_SerifedFlatTailed = function (r324_df) {
                var _r324_t0, _r324_t1;
                return r271_TailedDotlessXMiddle(r324_df, true);
            };
            r302_exports.PhoneticLeft = r302_PhoneticLeft = function (r326_df) {
                var _r326_t0, _r326_t1;
                return r326_df.leftSB + r271_Stroke * r271_HVContrast;
            };
            return r302_exports;
        }();
        var r271_Body = function () {
            var r329_Serifless, r329_HookyBottom, r329_Serifed, r329_Tailed, r329_FlatTailed, r329_DiagTailed, r329_PhoneticLeft;
            var r329_exports = {};
            r329_exports.Serifless = r329_Serifless = function (r337_df, r337_top, r337_xMiddle) {
                var _r337_t0, _r337_t1;
                return function () {
                    var _r339_t1;
                    var _r339_t0 = this;
                    var r339_currentGlyph = _r339_t0;
                    r339_currentGlyph.include(r271_OverrideILMarks(r337_df, r337_xMiddle, r337_top));
                    r339_currentGlyph.include(r271_VBar.m(r337_xMiddle, 0, r337_top, r337_df.mvs));
                    return void 0;
                };
            };
            r329_exports.HookyBottom = r329_HookyBottom = function (r343_df, r343_top, r343_xMiddle) {
                var _r343_t0, _r343_t1;
                return function () {
                    var _r345_t1;
                    var _r345_t0 = this;
                    var r345_currentGlyph = _r345_t0;
                    r345_currentGlyph.include(r271_OverrideILMarks(r343_df, r343_xMiddle, r343_top));
                    r345_currentGlyph.include(r271_VBar.m(r343_xMiddle, 0, r343_top, r343_df.mvs));
                    r345_currentGlyph.include(r271_tagged('serifRB', r271_HSerif.rb(r343_xMiddle, 0, r271_LongJut * r343_df.div, r271_Stroke, r343_df.mvs)));
                    r345_currentGlyph.setBaseAnchor('trailing', r343_xMiddle + r271_LongJut * r343_df.div, 0);
                    return void 0;
                };
            };
            r329_exports.Serifed = r329_Serifed = function (r351_df, r351_top, r351_xMiddle) {
                var _r351_t0, _r351_t1;
                return function () {
                    var _r353_t1;
                    var _r353_t0 = this;
                    var r353_currentGlyph = _r353_t0;
                    r353_currentGlyph.include(r271_OverrideILMarks(r351_df, r351_xMiddle, r351_top));
                    r353_currentGlyph.include(r271_VBar.m(r351_xMiddle, 0, r351_top, r351_df.mvs));
                    r353_currentGlyph.include(r271_tagged('serifB', r271_HSerif.mb(r351_df.middle, 0, r271_LongJut * r351_df.div)));
                    r353_currentGlyph.setBaseAnchor('trailing', r351_df.middle + r271_LongJut * r351_df.div, 0);
                    return void 0;
                };
            };
            var r329_ItalicDotlessIShape = function (r358_df, r358_top, r358_xMiddle) {
                var _r358_t0, _r358_t1;
                return function () {
                    var _r360_t1;
                    var _r360_t0 = this;
                    var r360_currentGlyph = _r360_t0;
                    var r360_fine = r271_AdviceStroke(3);
                    var r360_shift = r271_ItalicDotlessIShift(r358_df);
                    var r360_left = r358_xMiddle - 0.5 * r358_df.mvs * r271_HVContrast;
                    var r360_right = r1_mix(r358_df.leftSB, r358_df.rightSB, 1.1 - r360_shift);
                    var r360_rightTerm = Math.max(r360_right, r360_left + r271_HookX + r358_df.mvs);
                    var r360_middle = r1_mix(r360_left, r360_right, 0.55 * r358_df.div);
                    var r360_hookDepth = Math.max(r358_df.mvs * 0.9, r271_Hook * r271_StrokeWidthBlend(0.85, 1) * r358_df.div);
                    r360_currentGlyph.include(r271_dispiro(r271_widths.lhs(r358_df.mvs), r271_flat(r360_left, r358_top, r271_heading(r271_Downward)), r271_curl(r360_left, r271_SmallArchDepthB * 0.8), r271_hookend(r271_O), r271_g4(r360_rightTerm, r360_hookDepth, r271_widths.lhs(r360_fine))));
                    var r360_xDot = r358_xMiddle + r271_StrokeWidthBlend(0.25, 0) * r271_TanSlope * r358_df.width;
                    r360_currentGlyph.include(r271_OverrideILMarks(r358_df, r360_xDot, r358_top));
                    r360_currentGlyph.setBaseAnchor('trailing', r1_mix(r360_left, r360_rightTerm, 0.5), 0);
                    r360_currentGlyph.setBaseAnchor('palatalHookMask', r1_mix(r360_left, r360_rightTerm, 0.5), r271_HalfStroke + r271_O);
                    return void 0;
                };
            };
            var r329_TailedDotlessShape = function (r365_df, r365_top, r365_xMiddle) {
                var _r365_t0, _r365_t1;
                return function () {
                    var _r367_t1;
                    var _r367_t0 = this;
                    var r367_currentGlyph = _r367_t0;
                    var r367_tailLength = r271_LongJut * 1.05 * r1_mix(1, r365_df.div, 0.75);
                    var r367_hookScaleX = r1_mix(1, r365_df.div, 0.5);
                    var r367_hookScaleY = r1_mix(1, r365_df.div, 1.25);
                    var r367_x0 = r1_mix(0.5 * r365_df.mvs, 0.5 * r365_df.mvs + (r271_Hook - r365_df.mvs + 1) * 0.85 * r365_df.div + r271_IBalance2(r365_df), r367_hookScaleX);
                    var r367_x1 = r1_mix(0.5 * r365_df.mvs, Math.max(r271_Hook - 0.5 * r365_df.mvs + 1, r367_tailLength) + r271_IBalance2(r365_df), r367_hookScaleX);
                    r367_currentGlyph.include(r271_dispiro(r271_widths.center(r365_df.mvs), r271_flat(r365_xMiddle, r365_top, r271_heading(r271_Downward)), r271_curl(r365_xMiddle, Math.max(r365_df.mvs * 1.1, r1_mix(r365_df.mvs, r271_Hook, r367_hookScaleY))), r271_arcvh(16), r271_g2.right.mid(r365_xMiddle + r367_x0, 0.5 * r365_df.mvs + r271_O, r271_heading(r271_Rightward)), r271_g4(r365_xMiddle + r367_x1, 0.5 * r365_df.mvs + (1 - 2 * r367_hookScaleY) * r271_O, r271_heading(r271_Rightward))));
                    r367_currentGlyph.include(r271_OverrideILMarks(r365_df, r365_xMiddle, r365_top));
                    r367_currentGlyph.setBaseAnchor('trailing', r365_xMiddle + r367_x0, 0);
                    r367_currentGlyph.setBaseAnchor('palatalHookMask', r365_xMiddle + r367_x0, r271_HalfStroke + r271_O);
                    return void 0;
                };
            };
            r329_exports.Tailed = r329_Tailed = function (r373_df, r373_top, r373_xMiddle) {
                var _r373_t0, _r373_t1;
                return r271_para.isItalic ? r329_ItalicDotlessIShape(r373_df, r373_top, r373_xMiddle) : r329_TailedDotlessShape(r373_df, r373_top, r373_xMiddle);
            };
            r329_exports.FlatTailed = r329_FlatTailed = function (r375_df, r375_top, r375_xMiddle) {
                var _r375_t0, _r375_t1;
                return function () {
                    var _r377_t1;
                    var _r377_t0 = this;
                    var r377_currentGlyph = _r377_t0;
                    var r377_tailLength = r271_LongJut * 1.05 * r1_mix(1, r375_df.div, 0.75);
                    var r377_hd = r271_FlatHookDepth(r375_df);
                    var r377_xFinal = r375_xMiddle + Math.max(r377_hd.x - 0.5 * r375_df.mvs * r271_HVContrast + 1, r377_tailLength) + 0.5 * r375_df.mvs * r271_TanSlope;
                    r377_currentGlyph.include(r271_dispiro(r271_widths.center(r375_df.mvs), r271_flat(r375_xMiddle, r375_top, r271_heading(r271_Downward)), r271_curl(r375_xMiddle, r377_hd.y), r271_arcvh.superness(r271_DesignParameters.tightHookSuperness), r271_flat(r375_xMiddle + r377_hd.x - 0.5 * r375_df.mvs * r271_HVContrast, 0.5 * r375_df.mvs), r271_curl(r377_xFinal, 0.5 * r375_df.mvs)));
                    r377_currentGlyph.include(r271_OverrideILMarks(r375_df, r375_xMiddle, r375_top));
                    r377_currentGlyph.setBaseAnchor('trailing', r377_xFinal, 0);
                    return void 0;
                };
            };
            r329_exports.DiagTailed = r329_DiagTailed = function (r382_df, r382_top, r382_xMiddle) {
                var _r382_t0, _r382_t1;
                return function () {
                    var _r384_t1;
                    var _r384_t0 = this;
                    var r384_currentGlyph = _r384_t0;
                    r384_currentGlyph.include(r271_OverrideILMarks(r382_df, r382_xMiddle, r382_top));
                    r384_currentGlyph.setBaseAnchor('trailing', r382_xMiddle + 0.75 * r382_df.mvs * r271_HVContrast, 0);
                    r384_currentGlyph.setBaseAnchor('palatalHookMask', r384_currentGlyph.baseAnchors.trailing.x, r271_HalfStroke + r271_O);
                    r384_currentGlyph.include(r271_dispiro(r271_widths.center(r382_df.mvs), r271_flat(r382_xMiddle, r382_top, r271_heading(r271_Downward)), r271_DiagonalTailR(r382_df, r382_xMiddle, 0, r271_DiagonalTailStdDepth(r382_df, r382_df.mvs), r382_df.mvs)));
                    return void 0;
                };
            };
            r329_exports.PhoneticLeft = r329_PhoneticLeft = function (r390_df, r390_top, r390_xMiddle) {
                var _r390_t0, _r390_t1;
                return function () {
                    var _r392_t1;
                    var _r392_t0 = this;
                    var r392_currentGlyph = _r392_t0;
                    r392_currentGlyph.include(r271_dispiro(r271_widths.center(r390_df.mvs), r271_flat(r390_xMiddle, r390_top, r271_heading(r271_Downward)), r271_curl(r390_xMiddle, r271_Hook), r271_arcvh(), r271_flat(r390_xMiddle + r271_Hook - 0.5 * r390_df.mvs, 0.5 * r390_df.mvs), r271_curl(Math.max(r390_df.rightSB, r390_xMiddle + Math.max(r271_HookX, r271_LongJut * 1.05 * r390_df.div)), 0.5 * r390_df.mvs, r271_heading(r271_Rightward))));
                    return void 0;
                };
            };
            return r329_exports;
        }();
        var r271_Serifs = function () {
            var r396_Hooky, r396_Serifed, r396_SerifedShort;
            var r396_exports = {};
            r396_exports.Hooky = r396_Hooky = function (r404_df, r404_top, r404_xMiddle) {
                var _r404_t0, _r404_t1;
                return r271_HSerif.lt(r404_xMiddle, r404_top, r271_LongJut * r404_df.div, r271_Stroke, r404_df.mvs);
            };
            r396_exports.Serifed = r396_Serifed = function (r406_df, r406_top, r406_xMiddle) {
                var _r406_t0, _r406_t1;
                return r271_HSerif.lt(r406_xMiddle, r406_top, r271_LongJut * r406_df.div - (r406_xMiddle - r406_df.middle), r271_Stroke, r406_df.mvs);
            };
            r396_exports.SerifedShort = r396_SerifedShort = function (r408_df, r408_top, r408_xMiddle) {
                var _r408_t0, _r408_t1;
                return r271_HSerif.lt(r408_xMiddle, r408_top, r1_mix(r271_Jut, r271_LongJut * r408_df.div - (r408_xMiddle - r408_df.middle), 0.5), r271_Stroke, r408_df.mvs);
            };
            return r396_exports;
        }();
        var r271_calcPhoneticHookPos = function (r409_g) {
            var _r409_t0, _r409_t1;
            var r409_attach = r409_g.baseAnchors.trailing ? r409_g.gizmo.unapply(r409_g.baseAnchors.trailing) : r409_g.gizmo.unapply(r409_g.baseAnchors.overlay);
            var r409_posX = r409_g.baseAnchors.trailing ? r409_attach.x + r271_HVContrast * (0.5 * r271_VJutStroke) : r409_attach.x + r271_HVContrast * r271_HalfStroke + r271_PalatalHook.adviceGap(r271_Stroke);
            var r409_maskY = r409_g.baseAnchors.palatalHookMask ? r409_g.gizmo.unapply(r409_g.baseAnchors.palatalHookMask).y : r271_Stroke;
            return [
                r409_attach,
                r409_posX,
                r409_maskY
            ];
        };
        var r271_SmallILConfig = {
            'hooky': [
                r271_Body.Serifless,
                r271_Serifs.Hooky,
                r271_XMiddle.Hooky,
                r271_para.diversityII,
                0
            ],
            'zshaped': [
                r271_Body.HookyBottom,
                r271_Serifs.Hooky,
                r271_XMiddle.Center,
                r271_para.diversityI,
                r271_Stroke
            ],
            'serifless': [
                r271_Body.Serifless,
                null,
                r271_XMiddle.Center,
                r271_para.diversityII,
                0
            ],
            'serifed': [
                r271_Body.Serifed,
                r271_Serifs.Serifed,
                r271_XMiddle.Serifed,
                r271_para.diversityI,
                r271_Stroke
            ],
            'serifedAsymmetric': [
                r271_Body.Serifed,
                r271_Serifs.SerifedShort,
                r271_XMiddle.Serifed,
                r271_para.diversityI,
                r271_Stroke
            ],
            'tailed': [
                r271_Body.Tailed,
                null,
                r271_XMiddle.Tailed,
                r271_para.diversityII,
                r271_Stroke
            ],
            'tailedSerifed': [
                r271_Body.Tailed,
                r271_Serifs.Hooky,
                r271_XMiddle.TailedSerifed,
                r271_para.diversityI,
                r271_Stroke
            ],
            'flatTailed': [
                r271_Body.FlatTailed,
                null,
                r271_XMiddle.FlatTailed,
                r271_para.diversityII,
                r271_Stroke
            ],
            'serifedFlatTailed': [
                r271_Body.FlatTailed,
                r271_Serifs.Hooky,
                r271_XMiddle.SerifedFlatTailed,
                r271_para.diversityI,
                r271_Stroke
            ],
            'diagonalTailed': [
                r271_Body.DiagTailed,
                null,
                r271_XMiddle.FlatTailed,
                r271_para.diversityII,
                r271_Stroke
            ],
            'serifedDiagonalTailed': [
                r271_Body.DiagTailed,
                r271_Serifs.Hooky,
                r271_XMiddle.SerifedFlatTailed,
                r271_para.diversityI,
                r271_Stroke
            ],
            'hookyBottom': [
                r271_Body.HookyBottom,
                null,
                r271_XMiddle.HookyBottom,
                r271_para.diversityII,
                r271_Stroke
            ],
            'hookyDec': [
                r271_Body.Serifless,
                r271_Serifs.Hooky,
                r271_XMiddle.Hooky,
                r271_para.diversityI,
                0
            ],
            'seriflessDec': [
                r271_Body.Serifless,
                null,
                r271_XMiddle.Center,
                r271_para.diversityI,
                0
            ],
            'tailedDec': [
                r271_Body.Tailed,
                null,
                r271_XMiddle.Tailed,
                r271_para.diversityI,
                r271_Stroke
            ],
            'flatTailedDec': [
                r271_Body.FlatTailed,
                null,
                r271_XMiddle.FlatTailed,
                r271_para.diversityI,
                r271_Stroke
            ],
            'diagonalTailedDec': [
                r271_Body.DiagTailed,
                null,
                r271_XMiddle.FlatTailed,
                r271_para.diversityI,
                r271_Stroke
            ],
            'hookyBottomDec': [
                r271_Body.HookyBottom,
                null,
                r271_XMiddle.HookyBottom,
                r271_para.diversityI,
                r271_Stroke
            ],
            'hookyRTail': [
                r271_Body.Serifless,
                r271_Serifs.Hooky,
                r271_XMiddle.Center,
                r271_para.diversityII,
                0
            ],
            'seriflessRTail': [
                r271_Body.Serifless,
                null,
                r271_XMiddle.HookyBottom,
                r271_para.diversityII,
                0
            ],
            'hookyRTailDec': [
                r271_Body.Serifless,
                r271_Serifs.Hooky,
                r271_XMiddle.Center,
                r271_para.diversityI,
                0
            ],
            'seriflessRTailDec': [
                r271_Body.Serifless,
                null,
                r271_XMiddle.HookyBottom,
                r271_para.diversityI,
                0
            ],
            'hookyPL': [
                r271_Body.PhoneticLeft,
                r271_Serifs.Hooky,
                r271_XMiddle.PhoneticLeft,
                1,
                0
            ],
            'seriflessPL': [
                r271_Body.PhoneticLeft,
                null,
                r271_XMiddle.PhoneticLeft,
                1,
                0
            ]
        };
        var _r271_t11 = Object.entries(r271_SmallILConfig)[Symbol.iterator]();
        var _r271_t12 = void 0;
        while (!(_r271_t12 = _r271_t11.next()).done) {
            _r271_t13 = _r271_t12.value;
            r271_suffix = _r271_t13[0];
            r271_Body = _r271_t13[1][0];
            r271_Serif = _r271_t13[1][1];
            r271_xMiddleT = _r271_t13[1][2];
            r271_div = _r271_t13[1][3];
            r271_y0R = _r271_t13[1][4];
            _r271_t13[1];
            (function () {
                r271_xn$createAndSaveGlyphImpl$2Lrc3c('dotlessi.' + r271_suffix, null, function () {
                    var _r415_t1;
                    var _r415_t0 = this;
                    var r415_currentGlyph = _r415_t0;
                    var r415_df = r271_DivFrame(r271_div);
                    r415_currentGlyph.setWidth(r415_df.width);
                    r415_currentGlyph.include(r415_df.markSet.e());
                    var r415_xMiddle = r271_xMiddleT(r415_df);
                    r415_currentGlyph.include(r271_Body(r415_df, r271_XH, r415_xMiddle));
                    if (r271_Serif)
                        r415_currentGlyph.include(r271_tagged('serifLT', r271_Serif(r415_df, r271_XH, r415_xMiddle)));
                    return void 0;
                });
                r271_xn$createAndSaveGlyphImpl$2Lrc3c('latn/Iota.' + r271_suffix, null, function () {
                    var _r422_t1;
                    var _r422_t0 = this;
                    var r422_currentGlyph = _r422_t0;
                    var r422_df = r271_DivFrame(r271_div);
                    r422_currentGlyph.setWidth(r422_df.width);
                    r422_currentGlyph.include(r422_df.markSet.capital());
                    var r422_xMiddle = r271_xMiddleT(r422_df);
                    r422_currentGlyph.include(r271_Body(r422_df, r271_CAP, r422_xMiddle));
                    if (r271_Serif)
                        r422_currentGlyph.include(r271_tagged('serifLT', r271_Serif(r422_df, r271_CAP, r422_xMiddle)));
                    return void 0;
                });
                r271_xn$createAndSaveGlyphImpl$2Lrc3c('l.' + r271_suffix, null, function () {
                    var _r429_t1;
                    var _r429_t0 = this;
                    var r429_currentGlyph = _r429_t0;
                    var r429_df = r271_DivFrame(r271_div);
                    r429_currentGlyph.setWidth(r429_df.width);
                    r429_currentGlyph.include(r429_df.markSet.b());
                    var r429_xMiddle = r271_xMiddleT(r429_df);
                    r429_currentGlyph.include(r271_Body(r429_df, r271_Ascender, r429_xMiddle));
                    if (r271_Serif)
                        r429_currentGlyph.include(r271_tagged('serifLT', r271_Serif(r429_df, r271_Ascender, r429_xMiddle)));
                    return void 0;
                });
                r271_xn$createAndSaveGlyphImpl$2Lrc3c('lDotBase.' + r271_suffix, null, function () {
                    var _r436_t1;
                    var _r436_t0 = this;
                    var r436_currentGlyph = _r436_t0;
                    var r436_df = r271_DivFrame(r271_div);
                    r436_currentGlyph.setWidth(r436_df.width);
                    r436_currentGlyph.include(r271_xn$referglyph$1aao('l.' + r271_suffix), r271_AS_BASE);
                    r436_currentGlyph.include(r271_Translate(-r271_DotRadius / 2, 0));
                    r436_currentGlyph.setBaseAnchor('cvDecompose', Math.max(r436_df.middle + r271_HalfStroke + r271_DotRadius, r436_df.rightSB - r271_DotRadius), r1_mix(r271_y0R, r271_Ascender, 0.5));
                    return void 0;
                });
                r271_xn$createAndSaveGlyphImpl$2Lrc3c('lRTail.' + r271_suffix, null, function () {
                    var _r443_t1;
                    var _r443_t0 = this;
                    var r443_currentGlyph = _r443_t0;
                    var r443_df = r271_DivFrame(r271_div);
                    r443_currentGlyph.include(r271_xn$referglyph$1aao('l.' + r271_suffix), r271_AS_BASE, r271_ALSO_METRICS);
                    r443_currentGlyph.include(r271_RetroflexHook.mExt(r271_xMiddleT(r443_df), 0));
                    return void 0;
                });
                r271_xn$createAndSaveGlyphImpl$2Lrc3c('llWelsh.' + r271_suffix, null, function () {
                    var _r448_t1;
                    var _r448_t0 = this;
                    var r448_currentGlyph = _r448_t0;
                    var r448_subDf = r271_DivFrame(0.625, 1.5);
                    var r448_BodyShape = function () {
                        var _r449_t0, _r449_t1;
                        return r271_union(r271_Body(r448_subDf, r271_Ascender, r271_xMiddleT(r448_subDf)), r271_Serif ? r271_tagged('serifLT', r271_Serif(r448_subDf, r271_Ascender, r271_xMiddleT(r448_subDf))) : r271_xn$noshape$3cah());
                    };
                    r448_currentGlyph.include(r448_BodyShape());
                    r448_currentGlyph.include(r271_WithTransform(r271_ApparentTranslate(r271_Width - r448_subDf.width, 0), r448_BodyShape()));
                    r448_currentGlyph.include(r271_HOverlayBar(r1_mix(r271_SB, 0, 0.7), r1_mix(r271_RightSB, r271_Width, 0.7), 0.625 * r271_Ascender));
                    r448_currentGlyph.include(r271_MarkSet.b());
                    return void 0;
                });
                r271_xn$createAndSaveGlyphImpl$2Lrc3c('dotlessiRetroflexHook.' + r271_suffix, null, function () {
                    var _r456_t2;
                    var _r456_t1 = this;
                    var r456_currentGlyph = _r456_t1;
                    r456_currentGlyph.include(r271_xn$referglyph$1aao('dotlessi.' + r271_suffix), r271_AS_BASE, r271_ALSO_METRICS);
                    var _r456_t0 = r271_calcPhoneticHookPos(r456_currentGlyph);
                    var r456_attach = _r456_t0[0];
                    var r456_posX = _r456_t0[1];
                    var r456_maskY = _r456_t0[2];
                    r456_currentGlyph.include(r271_ExtendBelowBaseAnchors(r271_Descender));
                    r456_currentGlyph.include(r271_intersection(r271_MaskBelow(r456_maskY), r271_RetroflexHook.r(new r271_xn$NamedParameterPair$2Lrc9b('x', r456_posX), new r271_xn$NamedParameterPair$2Lrc9b('y', 0), new r271_xn$NamedParameterPair$2Lrc9b('xLink', r456_attach.x), new r271_xn$NamedParameterPair$2Lrc9b('yOverflow', r271_Stroke))));
                    return void 0;
                });
                r271_xn$createAndSaveGlyphImpl$2Lrc3c('lPalatalHook.' + r271_suffix, null, function () {
                    var _r466_t2;
                    var _r466_t1 = this;
                    var r466_currentGlyph = _r466_t1;
                    r466_currentGlyph.include(r271_xn$referglyph$1aao('l.' + r271_suffix), r271_AS_BASE, r271_ALSO_METRICS);
                    var _r466_t0 = r271_calcPhoneticHookPos(r466_currentGlyph);
                    var r466_attach = _r466_t0[0];
                    var r466_posX = _r466_t0[1];
                    var r466_maskY = _r466_t0[2];
                    r466_currentGlyph.include(r271_PalatalHook.r(new r271_xn$NamedParameterPair$2Lrc9b('x', r466_posX), new r271_xn$NamedParameterPair$2Lrc9b('y', 0), new r271_xn$NamedParameterPair$2Lrc9b('xLink', r466_attach.x), new r271_xn$NamedParameterPair$2Lrc9b('yOverflow', r271_Stroke), new r271_xn$NamedParameterPair$2Lrc9b('maskOut', r271_MaskAbove(r466_maskY))));
                    return void 0;
                });
                return r271_xn$createAndSaveGlyphImpl$2Lrc3c('lHighBar.' + r271_suffix, null, function () {
                    var _r476_t1;
                    var _r476_t0 = this;
                    var r476_currentGlyph = _r476_t0;
                    r476_currentGlyph.include(r271_xn$referglyph$1aao('l.' + r271_suffix), r271_AS_BASE, r271_ALSO_METRICS);
                    var r476_df = r271_DivFrame(r271_div);
                    r476_currentGlyph.include(r271_LetterBarOverlay.m.in(r271_xMiddleT(r476_df), r271_XH, r271_Ascender - (r271_Serif ? r271_Stroke : 0)));
                    return void 0;
                });
            }());
        }
        (function () {
            r271_xn$selectvariant$7Hrq('dotlessi', 305);
            r271_xn$linkreducedvariant$5sIl8('dotlessi/sansSerif', 'dotlessi', r1_MathSansSerif);
            r271_xn$selectvariant$7Hrq('dotlessi/compLigRight', new r271_xn$NamedParameterPair$2Lrc9b('shapeFrom', 'dotlessi'));
            r271_xn$selectvariant$7Hrq('dotlessi/ital', new r271_xn$NamedParameterPair$2Lrc9b('shapeFrom', 'dotlessi'));
            r271_xn$selectvariant$7Hrq('dotlessiRetroflexHook', new r271_xn$NamedParameterPair$2Lrc9b('follow', 'dotlessi'));
            r271_CreateOgonekComposition('iOgonek.dotless', null, 'dotlessi');
            r271_CreateAccentedComposition('i', 'i', 'dotlessi', 'dotAbove');
            r271_CreateAccentedComposition('i/sansSerif', null, 'dotlessi/sansSerif', 'dotAbove');
            r271_CreateAccentedComposition('cyrl/Ukrainiani', 1110, 'dotlessi', 'dotAbove');
            r271_CreateAccentedComposition('cyrl/yi', 1111, 'dotlessi', 'dieresisAbove');
            r271_CreateAccentedComposition('i/compLigRight', null, 'dotlessi/compLigRight', 'dotAbove');
            r271_xn$linkreducedvariant$5sIl8('i/sansSerif', 'i', r1_MathSansSerif);
            r271_xn$selectvariant$7Hrq('grek/iota', 953, new r271_xn$NamedParameterPair$2Lrc9b('shapeFrom', 'dotlessi'));
            r271_alias('latn/iota', 617, 'grek/iota');
            r271_alias('cyrl/iota', 42567, 'grek/iota');
            r271_xn$selectvariant$7Hrq('latn/Iota', 406, new r271_xn$NamedParameterPair$2Lrc9b('follow', 'grek/iota'));
            r271_alias('cyrl/Iota', 42566, 'latn/Iota');
            r271_turned('turni', 7433, 'i', r271_HalfAdvance, r271_XH / 2, r271_TurnMarks('p'));
            r271_CreateAccentedComposition('cyrl/ghe.SRB', null, 'dotlessi/ital', 'macronAbove');
            r271_CreateMultiAccentedComposition('cyrl/gje.SRB', null, 'dotlessi/ital', [
                'macronAbove',
                'acuteAbove'
            ]);
            r271_CreateAccentedComposition('dotlessiBarOver', null, 'dotlessi', 'barOver');
            r271_CreateAccentedComposition('iBarOver', 616, 'dotlessiBarOver', 'dotAbove');
            r271_CreateAccentedComposition('iOgonek', 303, 'iOgonek.dotless', 'dotAbove');
            return r271_CreateAccentedComposition('iRetroflexHook', 7574, 'dotlessiRetroflexHook', 'dotAbove');
        }());
        (function () {
            r271_xn$selectvariant$7Hrq('l', 'l');
            r271_xn$linkreducedvariant$5sIl8('l/sansSerif', 'l', r1_MathSansSerif);
            r271_xn$selectvariant$7Hrq('l/reduced/decompress', new r271_xn$NamedParameterPair$2Lrc9b('shapeFrom', 'l'));
            r271_xn$selectvariant$7Hrq('lRTail/decompress', new r271_xn$NamedParameterPair$2Lrc9b('follow', 'l/reduced/rtailDec'), new r271_xn$NamedParameterPair$2Lrc9b('shapeFrom', 'lRTail'));
            r271_alias('cyrl/palochka', 1231, 'l');
            r271_turned('turnl', 42881, 'l', r271_HalfAdvance, r271_XH / 2, r271_TurnMarks('p'));
            r271_xn$selectvariant$7Hrq('l/phoneticLeft', new r271_xn$NamedParameterPair$2Lrc9b('shapeFrom', 'l'));
            r271_xn$selectvariant$7Hrq('l/compLigRight', new r271_xn$NamedParameterPair$2Lrc9b('shapeFrom', 'l'));
            r271_xn$selectvariant$7Hrq('lDotBase', null, new r271_xn$NamedParameterPair$2Lrc9b('follow', 'l'));
            r271_xn$selectvariant$7Hrq('lRTail', 621, new r271_xn$NamedParameterPair$2Lrc9b('follow', 'l/reduced/rtail'));
            r271_xn$selectvariant$7Hrq('llWelsh', 7931, new r271_xn$NamedParameterPair$2Lrc9b('follow', 'l'));
            r271_xn$selectvariant$7Hrq('lPalatalHook', 7557, new r271_xn$NamedParameterPair$2Lrc9b('follow', 'l'));
            r271_xn$selectvariant$7Hrq('lHighBar', 42825, new r271_xn$NamedParameterPair$2Lrc9b('follow', 'l'));
            r271_xn$derivecomposites$7Hrq('lTildeOver', 619, 'l/reduced/decompress', 'tildeOver');
            r271_xn$derivecomposites$7Hrq('lDblTildeOver', 43832, 'l/reduced/decompress', 'dblTildeOver');
            r271_xn$derivecomposites$7Hrq('lRingOver', 43833, 'l/reduced/decompress', 'ringOver');
            r271_xn$createAndSaveGlyphImpl$2Lrc3c('lBeltOverlay', null, function () {
                var _r500_t1;
                var _r500_t0 = this;
                var r500_currentGlyph = _r500_t0;
                r500_currentGlyph.setMarkAnchor('overlay', 0, 0);
                r500_currentGlyph.include(r271_BeltOverlay.at(0, 0));
                return void 0;
            });
            r271_xn$derivecomposites$7Hrq('lBelt', 620, 'l/reduced/decompress', 'lBeltOverlay');
            r271_xn$derivecomposites$7Hrq('lBeltRTail', 42894, 'lRTail/decompress', 'lBeltOverlay');
            r271_CreateCommaCaronComposition('lcaron', 318, 'l');
            r271_xn$deriveglyphs$7Hrq('lSlash', 322, 'l', function (r503_src, r503_gr) {
                var _r503_t0, _r503_t1;
                return function () {
                    var _r505_t1;
                    var _r505_t0 = this;
                    var r505_currentGlyph = _r505_t0;
                    r505_currentGlyph.include(r271_xn$referglyph$1aao(r503_src), r271_AS_BASE, r271_ALSO_METRICS);
                    var r505_anchor = r505_currentGlyph.baseAnchors.overlay;
                    var r505_stretch = Math.sqrt(r505_currentGlyph.advanceWidth / r271_UPM * 2);
                    r505_currentGlyph.include(r271_FlatSlashShape(r505_anchor.x, r505_anchor.y, 0.5 * r271_OverlayStroke, 0.8 * r505_stretch, 0.4 * r505_stretch));
                    return void 0;
                };
            });
            var r487_CurlyTailShape = function (r508_df, r508_fSerif) {
                var _r508_t0, _r508_t1;
                return function () {
                    var _r510_t1;
                    var _r510_t0 = this;
                    var r510_currentGlyph = _r510_t0;
                    var r510_fine = r271_AdviceStroke(3.5);
                    var r510_rinner = r271_LongJut / 2 - r510_fine / 2;
                    var r510_m1 = r508_df.middle + r271_HalfStroke * r271_HVContrast;
                    var r510_x2 = r1_mix(r271_SB, r510_m1, 0.25);
                    var r510_y2 = -r510_fine;
                    if (r508_fSerif)
                        r510_currentGlyph.include(r271_HSerif.lt(r508_df.middle, r271_Ascender, r271_LongJut));
                    r510_currentGlyph.include(r271_dispiro(r271_widths.rhs(), r271_flat(r510_m1, r271_Ascender, r271_heading(r271_Downward)), r271_curl(r510_m1, r510_fine + r510_rinner * 2), r271_CurlyTail(r510_fine, r510_rinner, r510_m1, 0, r510_m1 + r271_LongJut, r510_x2, r510_y2)));
                    return void 0;
                };
            };
            r271_xn$createAndSaveGlyphImpl$2Lrc3c('lCurlyTail.serifless', null, function () {
                var _r515_t1;
                var _r515_t0 = this;
                var r515_currentGlyph = _r515_t0;
                var r515_df = r271_DivFrame(r271_para.diversityI);
                r515_currentGlyph.setWidth(r515_df.width);
                r515_currentGlyph.include(r515_df.markSet.b());
                r515_currentGlyph.include(r487_CurlyTailShape(r515_df, false));
                return void 0;
            });
            r271_xn$createAndSaveGlyphImpl$2Lrc3c('lCurlyTail.hooky', null, function () {
                var _r521_t1;
                var _r521_t0 = this;
                var r521_currentGlyph = _r521_t0;
                var r521_df = r271_DivFrame(r271_para.diversityI);
                r521_currentGlyph.setWidth(r521_df.width);
                r521_currentGlyph.include(r521_df.markSet.b());
                r521_currentGlyph.include(r487_CurlyTailShape(r521_df, true));
                return void 0;
            });
            r271_xn$selectvariant$7Hrq('lCurlyTail', 564);
            return r271_xn$createAndSaveGlyphImpl$2Lrc3c('looprevesh', 426, function () {
                var _r527_t1;
                var _r527_t0 = this;
                var r527_currentGlyph = _r527_t0;
                var r527_df = r271_DivFrame(r271_para.diversityI);
                r527_currentGlyph.setWidth(r527_df.width);
                r527_currentGlyph.include(r527_df.markSet.bp());
                var r527_fine = r271_AdviceStroke(4);
                r527_currentGlyph.include(r271_dispiro(r271_widths.center(r527_fine), r271_g4.down.start(r527_df.middle, r271_Ascender - r527_fine * 1.5, r271_heading(r271_Downward)), r271_arcvh(), r271_g4(r527_df.middle - r527_fine * 1, r271_Ascender - r527_fine * 2.5, r271_heading(r271_Leftward)), r271_archv(), r271_g4(r527_df.middle - r527_fine * 2, r271_Ascender - r527_fine * 1.5, r271_heading(r271_Upward)), r271_arcvh(), r271_g4(r527_df.middle - r527_fine * 1, r271_Ascender - r527_fine * 0.5, r271_heading(r271_Rightward)), r271_archv(), r271_flat(r527_df.middle, r271_Ascender - r527_fine * 1.5, r271_widths.heading(r271_HalfStroke, r271_HalfStroke, r271_Downward)), r271_curl(r527_df.middle, 0, r271_heading(r271_Downward)), r271_arcvh(), r271_straight.right.end(r527_df.middle + r271_HookX, -r271_Hook)));
                return void 0;
            });
        }());
        return function () {
            var _r532_t0 = r271_xn$Capture$2Lrc8['Letter-Blackboard'].resolve();
            var r532_BBS = _r532_t0.BBS;
            var r532_BBD = _r532_t0.BBD;
            var r532_BBBarCenter = _r532_t0.BBBarCenter;
            r271_xn$createAndSaveGlyphImpl$2Lrc3c('mathbb/dotlessi', null, function () {
                var _r536_t1;
                var _r536_t0 = this;
                var r536_currentGlyph = _r536_t0;
                r536_currentGlyph.include(r271_MarkSet.e());
                r536_currentGlyph.include(r532_BBBarCenter(r271_Middle, 0, r271_XH));
                r536_currentGlyph.include(r271_HBar.t(r271_Middle - r532_BBD / 2 - r271_Jut, r271_Middle, r271_XH, r532_BBS));
                r536_currentGlyph.include(r271_HBar.b(r271_Middle - r532_BBD / 2 - r271_Jut, r271_Middle + r532_BBD / 2 + r271_Jut, 0, r532_BBS));
                return void 0;
            });
            r271_xn$createAndSaveGlyphImpl$2Lrc3c('mathbb/i', 120154, function () {
                var _r543_t1;
                var _r543_t0 = this;
                var r543_currentGlyph = _r543_t0;
                r543_currentGlyph.include(r271_xn$referglyph$1aao('mathbb/dotlessi'), r271_AS_BASE, r271_ALSO_METRICS);
                r543_currentGlyph.include(r271_xn$referglyph$1aao('mathbb/dotAbove'));
                r1_Dotless.set(r543_currentGlyph, 'mathbb/dotlessi');
                return void 0;
            });
            return r271_xn$createAndSaveGlyphImpl$2Lrc3c('mathbb/l', 120157, function () {
                var _r548_t1;
                var _r548_t0 = this;
                var r548_currentGlyph = _r548_t0;
                r548_currentGlyph.include(r271_MarkSet.b());
                r548_currentGlyph.include(r532_BBBarCenter(r271_Middle, 0, r271_Ascender));
                r548_currentGlyph.include(r271_HBar.t(r271_Middle - r532_BBD / 2 - r271_Jut, r271_Middle, r271_Ascender, r532_BBS));
                r548_currentGlyph.include(r271_HBar.b(r271_Middle - r532_BBD / 2 - r271_Jut, r271_Middle + r532_BBD / 2 + r271_Jut, 0, r532_BBS));
                return void 0;
            });
        }();
    });
    return void 0;
});
