'use strict';
import * as _s0_t0 from '../../../support/utils.mjs';
var _s0_t1;
export {
    _s0_t1 as apply
};
var r1_apply, _r1_t0, _r1_t1, _r1_t2, _r1_t3, _r1_t4, _r1_t5, _r1_t6, _r1_t7;
var r1_isFinite = isFinite;
var _r1_t8 = _s0_t0;
var r1_mix = _r1_t8.mix;
var r1_linreg = _r1_t8.linreg;
var r1_clamp = _r1_t8.clamp;
var r1_fallback = _r1_t8.fallback;
var r1_xn$GlyphBlocks$2Lrc2b = [];
_s0_t1 = r1_apply = function () {
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
    r270_xn$Capture_Ext$2Lrc2b['$defineGlyphBlockImpl$'](r270_xn$Capture_Ext$2Lrc2b, 'Letter-Greek-Lower-Epsilon', function (r271_xn$Capture$2Lrc8, r271_xn$ExportCapture$2Lrc4b) {
        var r271_suffix, r271_slabTop, r271_slabBot, _r271_t14, _r271_t15, _r271_t16, _r271_t17, _r271_tag18;
        var _r271_t0 = r271_xn$Capture$2Lrc8;
        var r271_xn$createAndSaveGlyphImpl$2Lrc3c = _r271_t0['$createAndSaveGlyphImpl$'];
        var r271_xn$NamedParameterPair$2Lrc9b = _r271_t0['$NamedParameterPair$'];
        var r271_xn$assignUnicodeImpl$2Lrc8b = _r271_t0['$assignUnicodeImpl$'];
        var r271_xn$execState$2Lrc0b = _r271_t0['$execState$'];
        var r271_para = _r271_t0.para;
        var r271_MarkSet = _r271_t0.MarkSet;
        var r271_DivFrame = _r271_t0.DivFrame;
        var _r271_t1 = r271_xn$Capture$2Lrc8.Metrics;
        var r271_SB = _r271_t1.SB;
        var r271_CAP = _r271_t1.CAP;
        var r271_XH = _r271_t1.XH;
        var r271_Descender = _r271_t1.Descender;
        var r271_TanSlope = _r271_t1.TanSlope;
        var r271_HVContrast = _r271_t1.HVContrast;
        var r271_Upward = _r271_t1.Upward;
        var r271_Downward = _r271_t1.Downward;
        var r271_Rightward = _r271_t1.Rightward;
        var r271_Leftward = _r271_t1.Leftward;
        var r271_O = _r271_t1.O;
        var r271_OX = _r271_t1.OX;
        var r271_Hook = _r271_t1.Hook;
        var r271_SHook = _r271_t1.SHook;
        var r271_Stroke = _r271_t1.Stroke;
        var r271_OverlayPos = _r271_t1.OverlayPos;
        var r271_CThin = _r271_t1.CThin;
        var r271_SLAB = _r271_t1.SLAB;
        var r271_HalfStroke = _r271_t1.HalfStroke;
        var r271_RightSB = _r271_t1.RightSB;
        var r271_Middle = _r271_t1.Middle;
        var r271_ArchDepthA = _r271_t1.ArchDepthA;
        var r271_ArchDepthB = _r271_t1.ArchDepthB;
        var r271_SmallArchDepthA = _r271_t1.SmallArchDepthA;
        var r271_SmallArchDepthB = _r271_t1.SmallArchDepthB;
        var r271_CorrectionOMidX = _r271_t1.CorrectionOMidX;
        var r271_CorrectionOMidS = _r271_t1.CorrectionOMidS;
        var r271_AdviceStroke = _r271_t1.AdviceStroke;
        var r271_AdviceStroke2 = _r271_t1.AdviceStroke2;
        var r271_YSmoothMidR = _r271_t1.YSmoothMidR;
        var r271_YSmoothMidL = _r271_t1.YSmoothMidL;
        var _r271_t2 = r271_xn$Capture$2Lrc8.SpiroFns;
        var r271_g4 = _r271_t2.g4;
        var r271_flat = _r271_t2.flat;
        var r271_curl = _r271_t2.curl;
        var r271_end = _r271_t2.end;
        var r271_widths = _r271_t2.widths;
        var r271_heading = _r271_t2.heading;
        var r271_archv = _r271_t2.archv;
        var r271_arcvh = _r271_t2.arcvh;
        var r271_dispiro = _r271_t2.dispiro;
        var r271_xn$spirooutline$1aao = _r271_t2['spiro-outline'];
        var _r271_t3 = r271_xn$Capture$2Lrc8.BooleFns;
        var r271_union = _r271_t3.union;
        var _r271_t4 = r271_xn$Capture$2Lrc8.CommonShapes.resolve();
        var r271_Rect = _r271_t4.Rect;
        var r271_VBar = _r271_t4.VBar;
        var r271_hookstart = _r271_t4.hookstart;
        var r271_hookend = _r271_t4.hookend;
        var _r271_t5 = r271_xn$Capture$2Lrc8['Common-Derivatives'].resolve();
        var r271_xn$selectvariant$7Hrq = _r271_t5['select-variant'];
        var r271_alias = _r271_t5.alias;
        var r271_turned = _r271_t5.turned;
        var r271_xn$derivecomposites$7Hrq = _r271_t5['derive-composites'];
        var _r271_t6 = r271_xn$Capture$2Lrc8['Mark-Adjustment'].resolve();
        var r271_ExtendBelowBaseAnchors = _r271_t6.ExtendBelowBaseAnchors;
        var _r271_t7 = r271_xn$Capture$2Lrc8['Letter-Shared'].resolve();
        var r271_CreateAccentedComposition = _r271_t7.CreateAccentedComposition;
        var _r271_t8 = r271_xn$Capture$2Lrc8['Letter-Shared-Shapes'].resolve();
        var r271_SerifedArcStart = _r271_t8.SerifedArcStart;
        var r271_SerifedArcEnd = _r271_t8.SerifedArcEnd;
        var r271_SerifFrame = _r271_t8.SerifFrame;
        var _r271_t9 = r271_xn$Capture$2Lrc8['Letter-Shared-Shapes'].resolve();
        var r271_InwardSlabArcStart = _r271_t9.InwardSlabArcStart;
        var r271_InwardSlabArcEnd = _r271_t9.InwardSlabArcEnd;
        var _r271_t10 = r271_xn$Capture$2Lrc8['Letter-Shared-Shapes'].resolve();
        var r271_ArcStartSerif = _r271_t10.ArcStartSerif;
        var r271_ArcEndSerif = _r271_t10.ArcEndSerif;
        var _r271_t11 = r271_xn$Capture$2Lrc8['Letter-Shared-Shapes'].resolve();
        var r271_DToothlessRise = _r271_t11.DToothlessRise;
        var r271_RetroflexHook = _r271_t11.RetroflexHook;
        var r271_CyrDescender = _r271_t11.CyrDescender;
        var r271_UpwardHookShape = _r271_t11.UpwardHookShape;
        var r271_xn$SLABNONE$5sIl = 0;
        var r271_xn$SLABCLASSICAL$5sIl = 1;
        var r271_xn$SLABINWARD$5sIl = 2;
        var r271_xn$FLATCONNECTION$5sIl = 3;
        var r271_StdBlend = 0.65;
        var r271_SmallEpsilon = function (r280_slabTop, r280_slabBot, r280_top, r280_bot, r280_blend, r280_hook) {
            var _r280_t0, _r280_t1, _r280_t2, _r280_tag3;
            return function () {
                var r283_Dim, r283_UpperShape, r283_LowerShape, r283_Shape, r283_AutoStartSerifR, r283_AutoEndSerifR;
                var r283_exports = {};
                r283_exports.Dim = r283_Dim = function () {
                    var _r291_t0, _r291_t1;
                    var r291_stroke = r271_AdviceStroke2(2, 3, r280_top - r280_bot);
                    var r291_midx = r1_mix(r271_SB, r271_RightSB, r280_blend);
                    var r291_midy = r1_mix(r280_bot, r280_top, r271_OverlayPos);
                    var r291_topHeight = r280_top - r280_bot;
                    var r291_midyHeight = r291_midy - r280_bot;
                    var r291_ada = r291_topHeight - r1_mix(r291_midyHeight + r291_stroke / 2, r291_topHeight - r271_O - r291_stroke, r271_ArchDepthB / (r271_ArchDepthA + r271_ArchDepthB)) - r271_TanSlope * r271_HVContrast * r291_stroke;
                    var r291_adb = r1_mix(r291_stroke + r271_O, r291_midyHeight - r291_stroke / 2, r271_ArchDepthB / (r271_ArchDepthA + r271_ArchDepthB)) + r271_TanSlope * r271_HVContrast * r291_stroke;
                    var r291_fine = r291_stroke * r271_CThin;
                    return {
                        'stroke': r291_stroke,
                        'midx': r291_midx,
                        'midy': r291_midy,
                        'ada': r291_ada,
                        'adb': r291_adb,
                        'fine': r291_fine
                    };
                };
                r283_exports.UpperShape = r283_UpperShape = function () {
                    var r293___, _r293_t1, _r293_t2, _r293_t3;
                    var _r293_t0 = r283_Dim();
                    var r293_stroke = _r293_t0.stroke;
                    var r293_midx = _r293_t0.midx;
                    var r293_midy = _r293_t0.midy;
                    var r293_ada = _r293_t0.ada;
                    var r293_adb = _r293_t0.adb;
                    var r293_fine = _r293_t0.fine;
                    return r271_dispiro((_r293_t1 = r280_slabTop, _r293_t1 === r271_xn$SLABCLASSICAL$5sIl ? r271_SerifedArcStart.RtlLhs(r271_RightSB, r271_Middle, r280_top, r293_stroke, r280_hook) : _r293_t1 === r271_xn$SLABINWARD$5sIl ? r271_InwardSlabArcStart.RtlLhs(r271_RightSB, r271_Middle, r280_top, r293_stroke, r280_hook) : (r293___ = _r293_t1, [
                        r271_g4(r271_RightSB + r271_O, r280_top - r280_hook, r271_widths.lhs()),
                        r271_hookstart(r280_top - r271_O)
                    ])), r271_g4(r271_SB, r271_YSmoothMidL(r280_top, r293_midy - r293_stroke / 2)), r271_arcvh(), r271_flat(r271_Middle, r293_midy - (r293_fine - r293_stroke / 2), r271_widths.heading(r293_fine, 0, r271_Rightward)), r271_curl(r293_midx, r293_midy - (r293_fine - r293_stroke / 2), r271_heading(r271_Rightward)));
                };
                r283_exports.LowerShape = r283_LowerShape = function () {
                    var r295___, _r295_t1, _r295_t2, _r295_t3;
                    var _r295_t0 = r283_Dim();
                    var r295_stroke = _r295_t0.stroke;
                    var r295_midx = _r295_t0.midx;
                    var r295_midy = _r295_t0.midy;
                    var r295_ada = _r295_t0.ada;
                    var r295_adb = _r295_t0.adb;
                    var r295_fine = _r295_t0.fine;
                    return r271_dispiro(r271_flat(r295_midx, r295_midy + (r295_fine - r295_stroke / 2), r271_widths.heading(r295_fine, 0, r271_Leftward)), r271_curl(r271_Middle, r295_midy + (r295_fine - r295_stroke / 2), r271_heading(r271_Leftward)), r271_archv(), r271_g4(r271_SB + r271_OX * 2, r271_YSmoothMidL(r295_midy + r295_stroke / 2, r280_bot), r271_widths.lhs()), (_r295_t1 = r280_slabBot, _r295_t1 === r271_xn$SLABCLASSICAL$5sIl ? r271_SerifedArcEnd.LtrLhs(r271_RightSB, r271_Middle, r280_bot, r295_stroke, r280_hook) : _r295_t1 === r271_xn$SLABINWARD$5sIl ? r271_InwardSlabArcEnd.LtrLhs(r271_RightSB, r271_Middle, r280_bot, r295_stroke, r280_hook) : (r295___ = _r295_t1, [
                        r271_hookend(r280_bot + r271_O),
                        r271_g4(r271_RightSB - r271_O, r280_bot + r280_hook)
                    ])));
                };
                r283_exports.Shape = r283_Shape = function () {
                    var _r297_t0, _r297_t1;
                    return r271_union(r283_UpperShape(), r283_LowerShape());
                };
                r283_exports.AutoStartSerifR = r283_AutoStartSerifR = function () {
                    var r299___, _r299_t1, _r299_t2, _r299_t3;
                    var _r299_t0 = r283_Dim();
                    var r299_stroke = _r299_t0.stroke;
                    return _r299_t1 = r280_slabTop, _r299_t1 === r271_xn$SLABCLASSICAL$5sIl ? r271_ArcStartSerif.R(r271_RightSB, r280_top, r299_stroke, r280_hook) : _r299_t1 === r271_xn$SLABINWARD$5sIl ? r271_ArcStartSerif.InwardR(r271_RightSB, r280_top, r299_stroke, r280_hook) : (r299___ = _r299_t1, function () {
                        var _r301_t1;
                        var _r301_t0 = this;
                        var r301_currentGlyph = _r301_t0;
                        return void 0;
                    });
                };
                r283_exports.AutoEndSerifR = r283_AutoEndSerifR = function () {
                    var r303___, _r303_t1, _r303_t2, _r303_t3;
                    var _r303_t0 = r283_Dim();
                    var r303_stroke = _r303_t0.stroke;
                    return _r303_t1 = r280_slabBot, _r303_t1 === r271_xn$SLABCLASSICAL$5sIl ? r271_ArcEndSerif.R(r271_RightSB, r280_bot, r303_stroke, r280_hook) : _r303_t1 === r271_xn$SLABINWARD$5sIl ? r271_ArcEndSerif.InwardR(r271_RightSB, r280_bot, r303_stroke, r280_hook) : (r303___ = _r303_t1, function () {
                        var _r305_t1;
                        var _r305_t0 = this;
                        var r305_currentGlyph = _r305_t0;
                        return void 0;
                    });
                };
                return r283_exports;
            }();
        };
        r271_xn$ExportCapture$2Lrc4b(function () {
            var _r307_t0, _r307_t1;
            return { 'CyrZe': r271_CyrZe };
        });
        var r271_CyrZe = function (r308_slabTop, r308_slabBot, r308_top, r308_bot, r308_left, r308_right, r308_blend, r308_hook, r308__stroke, r308__xo, r308__op) {
            var _r308_t0, _r308_t1, _r308_t2, _r308_tag3;
            return function () {
                var r311_Dim, r311_UpperShape, r311_LowerShape, r311_Shape, r311_ShapeMask, r311_ShapeHalf, r311_KsiBaseShape, r311_AutoStartSerifL, r311_AutoEndSerifL;
                var r311_exports = {};
                var r311_xo = r1_fallback(r308__xo, r271_OX);
                r311_exports.Dim = r311_Dim = function () {
                    var _r319_t0, _r319_t1;
                    var r319_stroke = r1_fallback(r308__stroke, r271_AdviceStroke2(2, 3, r308_top - r308_bot));
                    var r319_midx = r1_mix(r308_right, r308_left, r308_blend);
                    var r319_midy = r1_mix(r308_bot, r308_top, r1_fallback(r308__op, r271_OverlayPos));
                    var r319_topHeight = r308_top - r308_bot;
                    var r319_midyHeight = r319_midy - r308_bot;
                    var r319_adb = r319_topHeight - r1_mix(r319_midyHeight + r319_stroke / 2, r319_topHeight - r271_O - r319_stroke, r271_ArchDepthA / (r271_ArchDepthA + r271_ArchDepthB)) + r271_TanSlope * r271_HVContrast * r319_stroke;
                    var r319_ada = r1_mix(r319_stroke + r271_O, r319_midyHeight - r319_stroke / 2, r271_ArchDepthA / (r271_ArchDepthA + r271_ArchDepthB)) - r271_TanSlope * r271_HVContrast * r319_stroke;
                    var r319_fine = r319_stroke * r271_CThin;
                    return {
                        'stroke': r319_stroke,
                        'midx': r319_midx,
                        'midy': r319_midy,
                        'ada': r319_ada,
                        'adb': r319_adb,
                        'fine': r319_fine
                    };
                };
                var r311_CyrZeUpperShapeT = function (r320_sink) {
                    var r320___, _r320_t1, _r320_t2, _r320_t3;
                    var _r320_t0 = r311_Dim();
                    var r320_stroke = _r320_t0.stroke;
                    var r320_midx = _r320_t0.midx;
                    var r320_midy = _r320_t0.midy;
                    var r320_ada = _r320_t0.ada;
                    var r320_adb = _r320_t0.adb;
                    var r320_fine = _r320_t0.fine;
                    var r320_middle = (r308_left + r308_right) / 2;
                    return r320_sink((_r320_t1 = r308_slabTop, _r320_t1 === r271_xn$SLABCLASSICAL$5sIl ? r271_SerifedArcStart.LtrRhs(r308_left, r320_middle, r308_top, r320_stroke, r308_hook) : _r320_t1 === r271_xn$SLABINWARD$5sIl ? r271_InwardSlabArcStart.LtrRhs(r308_left, r320_middle, r308_top, r320_stroke, r308_hook) : _r320_t1 === r271_xn$FLATCONNECTION$5sIl ? [
                        r271_flat(r308_left - r311_xo, r308_top, r271_widths.rhs.heading(r320_stroke, r271_Rightward)),
                        r271_curl(r320_middle - r271_CorrectionOMidX * r320_stroke, r308_top, r271_heading(r271_Rightward))
                    ] : (r320___ = _r320_t1, [
                        r271_g4(r308_left - r311_xo, r308_top - r308_hook, r271_widths.rhs(r320_stroke)),
                        r271_hookstart(r308_top - r271_O)
                    ])), r271_g4(r308_right, r271_YSmoothMidR(r308_top, r320_midy - r320_stroke / 2)), r271_arcvh(), r271_flat(r320_middle, r320_midy - (r320_fine - r320_stroke / 2), r271_widths.heading(0, r320_fine, r271_Leftward)), r271_curl(r320_midx, r320_midy - (r320_fine - r320_stroke / 2), r271_heading(r271_Leftward)));
                };
                var r311_CyrZeLowerShapeT = function (r321_sink) {
                    var r321___, _r321_t1, _r321_t2, _r321_t3;
                    var _r321_t0 = r311_Dim();
                    var r321_stroke = _r321_t0.stroke;
                    var r321_midx = _r321_t0.midx;
                    var r321_midy = _r321_t0.midy;
                    var r321_ada = _r321_t0.ada;
                    var r321_adb = _r321_t0.adb;
                    var r321_fine = _r321_t0.fine;
                    var r321_middle = (r308_left + r308_right) / 2;
                    return r321_sink(r271_flat(r321_midx, r321_midy + (r321_fine - r321_stroke / 2), r271_widths.rhs.heading(r321_fine, r271_Rightward)), r271_curl(r321_middle, r321_midy + (r321_fine - r321_stroke / 2), r271_heading(r271_Rightward)), r271_archv(), r271_g4(r308_right - r311_xo * 2, r271_YSmoothMidR(r321_midy + r321_stroke / 2, r308_bot), r271_widths.rhs(r321_stroke)), (_r321_t1 = r308_slabBot, _r321_t1 === r271_xn$SLABCLASSICAL$5sIl ? r271_SerifedArcEnd.RtlRhs(r308_left, r321_middle, r308_bot, r321_stroke, r308_hook) : _r321_t1 === r271_xn$SLABINWARD$5sIl ? r271_InwardSlabArcEnd.RtlRhs(r308_left, r321_middle, r308_bot, r321_stroke, r308_hook) : (r321___ = _r321_t1, [
                        r271_hookend(r308_bot + r271_O, new r271_xn$NamedParameterPair$2Lrc9b('sw', r321_stroke)),
                        r271_g4(r308_left + r311_xo, r308_bot + r308_hook)
                    ])));
                };
                r311_exports.UpperShape = r311_UpperShape = function () {
                    var _r324_t0, _r324_t1;
                    return r311_CyrZeUpperShapeT(r271_dispiro);
                };
                r311_exports.LowerShape = r311_LowerShape = function () {
                    var _r326_t0, _r326_t1;
                    return r311_CyrZeLowerShapeT(r271_dispiro);
                };
                var r311_CyrZeLowerShapeHalf = function () {
                    var _r327_t1, _r327_t2;
                    var _r327_t0 = r311_Dim();
                    var r327_stroke = _r327_t0.stroke;
                    var r327_midx = _r327_t0.midx;
                    var r327_midy = _r327_t0.midy;
                    var r327_ada = _r327_t0.ada;
                    var r327_adb = _r327_t0.adb;
                    var r327_fine = _r327_t0.fine;
                    var r327_middle = (r308_left + r308_right) / 2;
                    return r271_dispiro(r271_flat(r327_midx, r327_midy + (r327_fine - r327_stroke / 2), r271_widths.rhs.heading(r327_fine, r271_Rightward)), r271_curl(r327_middle, r327_midy + (r327_fine - r327_stroke / 2), r271_heading(r271_Rightward)), r271_archv(), r271_g4.down.end(r308_right - r271_OX * 2, r271_YSmoothMidR(r327_midy + r327_stroke / 2, r308_bot), r271_widths.rhs.heading(r327_stroke, r271_Downward)));
                };
                var r311_CyrZeLowerShapeTailed = function () {
                    var _r328_t1, _r328_t2;
                    var _r328_t0 = r311_Dim();
                    var r328_stroke = _r328_t0.stroke;
                    var r328_midx = _r328_t0.midx;
                    var r328_midy = _r328_t0.midy;
                    var r328_ada = _r328_t0.ada;
                    var r328_adb = _r328_t0.adb;
                    var r328_fine = _r328_t0.fine;
                    var r328_middle = (r308_left + r308_right) / 2;
                    return r271_dispiro(r271_flat(r271_TanSlope * r271_Stroke + Math.max(r308_left + (r271_Stroke - r1_mix(r271_Descender, r271_Stroke, 0.5)) * 1.1 + 1, r328_middle), r271_Descender, r271_widths.rhs()), r271_curl(r271_TanSlope * r271_Stroke + r308_left + (r271_Stroke - r1_mix(r271_Descender, r271_Stroke, 0.5)) * 1.1, r271_Descender), r271_archv(), r271_g4.up.mid(r308_left + r271_HalfStroke * r271_HVContrast, r1_mix(r271_Descender, r271_Stroke, 0.5), r271_widths.center.heading(r271_Stroke, r271_Upward)), r271_arcvh(), r271_g4(r328_middle + r271_CorrectionOMidS, 0, r271_widths.lhs()), r271_archv(), r271_g4(r308_right - r271_OX * 2, r308_bot + r328_ada), r271_arcvh(), r271_flat(r328_middle, r328_midy + (r328_fine - r328_stroke / 2), r271_widths.heading(r328_fine, 0, r271_Leftward)), r271_curl(r328_midx, r328_midy + (r328_fine - r328_stroke / 2), r271_heading(r271_Leftward)));
                };
                r311_exports.Shape = r311_Shape = function () {
                    var _r330_t0, _r330_t1;
                    return r271_union(r311_CyrZeUpperShapeT(r271_dispiro), r311_CyrZeLowerShapeT(r271_dispiro));
                };
                r311_exports.ShapeMask = r311_ShapeMask = function () {
                    var _r332_t0, _r332_t1;
                    return r271_union(r311_CyrZeUpperShapeT(r271_xn$spirooutline$1aao), r311_CyrZeLowerShapeT(r271_xn$spirooutline$1aao));
                };
                r311_exports.ShapeHalf = r311_ShapeHalf = function () {
                    var _r334_t0, _r334_t1;
                    return r271_union(r311_CyrZeUpperShapeT(r271_dispiro), r311_CyrZeLowerShapeHalf());
                };
                r311_exports.KsiBaseShape = r311_KsiBaseShape = function () {
                    var _r336_t0, _r336_t1;
                    return r271_union(r311_CyrZeUpperShapeT(r271_dispiro), r311_CyrZeLowerShapeTailed());
                };
                r311_exports.AutoStartSerifL = r311_AutoStartSerifL = function () {
                    var r338___, _r338_t1, _r338_t2, _r338_t3;
                    var _r338_t0 = r311_Dim();
                    var r338_stroke = _r338_t0.stroke;
                    return _r338_t1 = r308_slabTop, _r338_t1 === r271_xn$SLABCLASSICAL$5sIl ? r271_ArcStartSerif.L(r308_left, r308_top, r338_stroke, r308_hook) : _r338_t1 === r271_xn$SLABINWARD$5sIl ? r271_ArcStartSerif.InwardL(r308_left, r308_top, r338_stroke, r308_hook) : (r338___ = _r338_t1, function () {
                        var _r340_t1;
                        var _r340_t0 = this;
                        var r340_currentGlyph = _r340_t0;
                        return void 0;
                    });
                };
                r311_exports.AutoEndSerifL = r311_AutoEndSerifL = function () {
                    var r342___, _r342_t1, _r342_t2, _r342_t3;
                    var _r342_t0 = r311_Dim();
                    var r342_stroke = _r342_t0.stroke;
                    return _r342_t1 = r308_slabBot, _r342_t1 === r271_xn$SLABCLASSICAL$5sIl ? r271_ArcEndSerif.L(r308_left, r308_bot, r342_stroke, r308_hook) : _r342_t1 === r271_xn$SLABINWARD$5sIl ? r271_ArcEndSerif.InwardL(r308_left, r308_bot, r342_stroke, r308_hook) : (r342___ = _r342_t1, function () {
                        var _r344_t1;
                        var _r344_t0 = this;
                        var r344_currentGlyph = _r344_t0;
                        return void 0;
                    });
                };
                return r311_exports;
            }();
        };
        r271_xn$ExportCapture$2Lrc4b(function () {
            var _r346_t0, _r346_t1;
            return { 'EpsilonConfig': r271_EpsilonConfig };
        });
        var r271_EpsilonConfig = {
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
            'seriflessDesc': [
                r271_xn$SLABNONE$5sIl,
                r271_xn$SLABCLASSICAL$5sIl
            ],
            'unilateralInwardSerifedDesc': [
                r271_xn$SLABINWARD$5sIl,
                r271_xn$SLABCLASSICAL$5sIl
            ]
        };
        var _r271_t12 = Object.entries(r271_EpsilonConfig)[Symbol.iterator]();
        var _r271_t13 = void 0;
        while (!(_r271_t13 = _r271_t12.next()).done) {
            _r271_t14 = _r271_t13.value;
            r271_suffix = _r271_t14[0];
            r271_slabTop = _r271_t14[1][0];
            r271_slabBot = _r271_t14[1][1];
            _r271_t14[1];
            (function () {
                r271_xn$createAndSaveGlyphImpl$2Lrc3c('latn/Epsilon.' + r271_suffix, null, function () {
                    var _r352_leti0, _r352_t2, _r352_t6, _r352_tag7;
                    var _r352_t1 = this;
                    var r352_currentGlyph = _r352_t1;
                    r352_currentGlyph.include(r271_MarkSet.capital());
                    var _r352_t3 = r352_currentGlyph;
                    var _r352_t4 = _r352_t3.include;
                    var _r352_t5 = r271_SmallEpsilon(r271_slabTop, r271_slabBot, r271_CAP, 0, r271_StdBlend, r271_Hook);
                    var _r352_t8 = function (_r352_leti0) {
                        var r355_eps = _r352_leti0;
                        return r271_union(r355_eps.Shape(), r355_eps.AutoStartSerifR(), r355_eps.AutoEndSerifR());
                    }(_r352_t5);
                    _r352_t4.call(_r352_t3, _r352_t8);
                    return void 0;
                });
                r271_xn$createAndSaveGlyphImpl$2Lrc3c('latn/epsilon.' + r271_suffix, null, function () {
                    var _r358_leti0, _r358_t2, _r358_t6, _r358_tag7;
                    var _r358_t1 = this;
                    var r358_currentGlyph = _r358_t1;
                    r358_currentGlyph.include(r271_MarkSet.e());
                    var _r358_t3 = r358_currentGlyph;
                    var _r358_t4 = _r358_t3.include;
                    var _r358_t5 = r271_SmallEpsilon(r271_slabTop, r271_slabBot, r271_XH, 0, r271_StdBlend, r271_SHook);
                    var _r358_t8 = function (_r358_leti0) {
                        var r361_eps = _r358_leti0;
                        return r271_union(r361_eps.Shape(), r361_eps.AutoStartSerifR(), r361_eps.AutoEndSerifR());
                    }(_r358_t5);
                    _r358_t4.call(_r358_t3, _r358_t8);
                    return void 0;
                });
                r271_xn$createAndSaveGlyphImpl$2Lrc3c('cyrl/Ze.' + r271_suffix, null, function () {
                    var _r364_leti0, _r364_t2, _r364_t6, _r364_tag7;
                    var _r364_t1 = this;
                    var r364_currentGlyph = _r364_t1;
                    r364_currentGlyph.include(r271_MarkSet.capital());
                    var _r364_t3 = r364_currentGlyph;
                    var _r364_t4 = _r364_t3.include;
                    var _r364_t5 = r271_CyrZe(r271_slabTop, r271_slabBot, r271_CAP, 0, r271_SB, r271_RightSB, r271_StdBlend, r271_Hook);
                    var _r364_t8 = function (_r364_leti0) {
                        var r367_ze = _r364_leti0;
                        return r271_union(r367_ze.Shape(), r367_ze.AutoStartSerifL(), r367_ze.AutoEndSerifL());
                    }(_r364_t5);
                    _r364_t4.call(_r364_t3, _r364_t8);
                    return void 0;
                });
                r271_xn$createAndSaveGlyphImpl$2Lrc3c('cyrl/ze.' + r271_suffix, null, function () {
                    var _r370_leti0, _r370_t2, _r370_t6, _r370_tag7;
                    var _r370_t1 = this;
                    var r370_currentGlyph = _r370_t1;
                    r370_currentGlyph.include(r271_MarkSet.e());
                    var _r370_t3 = r370_currentGlyph;
                    var _r370_t4 = _r370_t3.include;
                    var _r370_t5 = r271_CyrZe(r271_slabTop, r271_slabBot, r271_XH, 0, r271_SB, r271_RightSB, r271_StdBlend, r271_SHook);
                    var _r370_t8 = function (_r370_leti0) {
                        var r373_ze = _r370_leti0;
                        return r271_union(r373_ze.Shape(), r373_ze.AutoStartSerifL(), r373_ze.AutoEndSerifL());
                    }(_r370_t5);
                    _r370_t4.call(_r370_t3, _r370_t8);
                    return void 0;
                });
                r271_xn$createAndSaveGlyphImpl$2Lrc3c('cyrl/ze.BGR.' + r271_suffix, null, function () {
                    var _r376_leti0, _r376_t2, _r376_t6, _r376_tag7;
                    var _r376_t1 = this;
                    var r376_currentGlyph = _r376_t1;
                    r376_currentGlyph.include(r271_MarkSet.p());
                    var _r376_t3 = r376_currentGlyph;
                    var _r376_t4 = _r376_t3.include;
                    var _r376_t5 = r271_CyrZe(r271_slabTop, r271_slabBot, r271_XH, r271_Descender, r271_SB, r271_RightSB, r271_StdBlend, r271_SHook);
                    var _r376_t8 = function (_r376_leti0) {
                        var r379_ze = _r376_leti0;
                        return r271_union(r379_ze.Shape(), r379_ze.AutoStartSerifL(), r379_ze.AutoEndSerifL());
                    }(_r376_t5);
                    _r376_t4.call(_r376_t3, _r376_t8);
                    return void 0;
                });
                r271_xn$createAndSaveGlyphImpl$2Lrc3c('cyrl/DzjeKomi.' + r271_suffix, null, function () {
                    var _r382_t2;
                    var _r382_t1 = this;
                    var r382_currentGlyph = _r382_t1;
                    r382_currentGlyph.include(r271_MarkSet.capital());
                    var r382_ze = r271_CyrZe(r271_slabTop, r271_slabBot, r271_CAP, 0, r271_SB, r271_RightSB, r271_StdBlend, r271_Hook);
                    var _r382_t0 = r382_ze.Dim();
                    var r382_stroke = _r382_t0.stroke;
                    var r382_midy = _r382_t0.midy;
                    r382_currentGlyph.include(r382_ze.ShapeHalf());
                    r382_currentGlyph.include(r382_ze.AutoStartSerifL(r271_slabTop, r271_CAP, 0, r271_SB, r271_RightSB, r271_StdBlend));
                    r382_currentGlyph.include(r271_VBar.r(r271_RightSB - r271_OX * 2, 0, r271_YSmoothMidR(r382_midy + r382_stroke / 2, 0), r382_stroke));
                    r382_currentGlyph.include(r271_CyrDescender.rSideJut(r271_RightSB - r271_OX * 2, 0));
                    return void 0;
                });
                r271_xn$createAndSaveGlyphImpl$2Lrc3c('cyrl/dzjeKomi.' + r271_suffix, null, function () {
                    var _r390_t2;
                    var _r390_t1 = this;
                    var r390_currentGlyph = _r390_t1;
                    r390_currentGlyph.include(r271_MarkSet.e());
                    var r390_ze = r271_CyrZe(r271_slabTop, r271_slabBot, r271_XH, 0, r271_SB, r271_RightSB, r271_StdBlend, r271_SHook);
                    var _r390_t0 = r390_ze.Dim();
                    var r390_stroke = _r390_t0.stroke;
                    var r390_midy = _r390_t0.midy;
                    r390_currentGlyph.include(r390_ze.ShapeHalf());
                    r390_currentGlyph.include(r390_ze.AutoStartSerifL(r271_slabTop, r271_XH, 0, r271_SB, r271_RightSB, r271_StdBlend));
                    r390_currentGlyph.include(r271_VBar.r(r271_RightSB - r271_OX * 2, 0, r271_YSmoothMidR(r390_midy + r390_stroke / 2, 0), r390_stroke));
                    r390_currentGlyph.include(r271_CyrDescender.rSideJut(r271_RightSB - r271_OX * 2, 0));
                    return void 0;
                });
                r271_xn$createAndSaveGlyphImpl$2Lrc3c('cyrl/ZjeKomi.' + r271_suffix, null, function () {
                    var _r398_t2;
                    var _r398_t1 = this;
                    var r398_currentGlyph = _r398_t1;
                    var r398_df = r271_DivFrame(r271_para.diversityM, 3);
                    r398_currentGlyph.setWidth(r398_df.width);
                    r398_currentGlyph.include(r398_df.markSet.capital());
                    var r398_xm = r398_df.middle + 0.5 * r398_df.mvs * r271_HVContrast;
                    var r398_ze = r271_CyrZe(r271_slabTop, r271_slabBot, r271_CAP, 0, r398_df.leftSB, r398_xm, r271_StdBlend, r271_Hook, r398_df.mvs);
                    var _r398_t0 = r398_ze.Dim();
                    var r398_stroke = _r398_t0.stroke;
                    var r398_midy = _r398_t0.midy;
                    r398_currentGlyph.include(r398_ze.ShapeHalf());
                    r398_currentGlyph.include(r271_UpwardHookShape(new r271_xn$NamedParameterPair$2Lrc9b('left', r398_xm - r271_OX * 2 - r398_stroke * r271_HVContrast), new r271_xn$NamedParameterPair$2Lrc9b('right', r398_df.rightSB), new r271_xn$NamedParameterPair$2Lrc9b('ybegin', r271_YSmoothMidR(r398_midy + r398_stroke / 2, 0)), new r271_xn$NamedParameterPair$2Lrc9b('yend', r271_CAP / 2), new r271_xn$NamedParameterPair$2Lrc9b('ada', r271_ArchDepthA * 0.6 * r398_df.div), new r271_xn$NamedParameterPair$2Lrc9b('adb', r271_ArchDepthB * 0.6 * r398_df.div), new r271_xn$NamedParameterPair$2Lrc9b('sw', r398_stroke)));
                    r398_currentGlyph.include(r398_ze.AutoStartSerifL());
                    var r398_sf2 = r271_SerifFrame.fromDf(r398_df, r271_CAP / 2, 0).slice(1, 2);
                    if (r271_SLAB)
                        r398_currentGlyph.include(r398_sf2.rt.full);
                    return void 0;
                });
                r271_xn$createAndSaveGlyphImpl$2Lrc3c('cyrl/zjeKomi.' + r271_suffix, null, function () {
                    var _r414_t2;
                    var _r414_t1 = this;
                    var r414_currentGlyph = _r414_t1;
                    var r414_df = r271_DivFrame(r271_para.diversityM, 3);
                    r414_currentGlyph.setWidth(r414_df.width);
                    r414_currentGlyph.include(r414_df.markSet.e());
                    var r414_xm = r414_df.middle + 0.5 * r414_df.mvs * r271_HVContrast;
                    var r414_ze = r271_CyrZe(r271_slabTop, r271_slabBot, r271_XH, 0, r414_df.leftSB, r414_xm, r271_StdBlend, r271_Hook, r414_df.mvs);
                    var _r414_t0 = r414_ze.Dim();
                    var r414_stroke = _r414_t0.stroke;
                    var r414_midy = _r414_t0.midy;
                    r414_currentGlyph.include(r414_ze.ShapeHalf());
                    r414_currentGlyph.include(r271_UpwardHookShape(new r271_xn$NamedParameterPair$2Lrc9b('left', r414_xm - r271_OX * 2 - r414_stroke * r271_HVContrast), new r271_xn$NamedParameterPair$2Lrc9b('right', r414_df.rightSB), new r271_xn$NamedParameterPair$2Lrc9b('ybegin', r271_YSmoothMidR(r414_midy + r414_stroke / 2, 0)), new r271_xn$NamedParameterPair$2Lrc9b('yend', r271_XH / 2), new r271_xn$NamedParameterPair$2Lrc9b('ada', r271_SmallArchDepthA * 0.6 * r414_df.div), new r271_xn$NamedParameterPair$2Lrc9b('adb', r271_SmallArchDepthB * 0.6 * r414_df.div), new r271_xn$NamedParameterPair$2Lrc9b('sw', r414_stroke)));
                    r414_currentGlyph.include(r414_ze.AutoStartSerifL());
                    var r414_sf2 = r271_SerifFrame.fromDf(r414_df, r271_XH / 2, 0).slice(1, 2);
                    if (r271_SLAB)
                        r414_currentGlyph.include(r414_sf2.rt.full);
                    return void 0;
                });
                r271_xn$createAndSaveGlyphImpl$2Lrc3c('cyrl/KsiBase.' + r271_suffix, null, function () {
                    var _r430_leti0, _r430_t2, _r430_t6, _r430_tag7;
                    var _r430_t1 = this;
                    var r430_currentGlyph = _r430_t1;
                    r430_currentGlyph.include(r271_MarkSet.capDesc());
                    var _r430_t3 = r430_currentGlyph;
                    var _r430_t4 = _r430_t3.include;
                    var _r430_t5 = r271_CyrZe(r271_slabTop, r271_xn$SLABNONE$5sIl, r271_CAP, 0, r271_SB, r271_RightSB, r271_StdBlend, r271_Hook);
                    var _r430_t8 = function (_r430_leti0) {
                        var r433_ze = _r430_leti0;
                        return r271_union(r433_ze.KsiBaseShape(), r433_ze.AutoStartSerifL());
                    }(_r430_t5);
                    _r430_t4.call(_r430_t3, _r430_t8);
                    return void 0;
                });
                return r271_xn$createAndSaveGlyphImpl$2Lrc3c('cyrl/ksiBase.' + r271_suffix, null, function () {
                    var _r436_leti0, _r436_t2, _r436_t6, _r436_tag7;
                    var _r436_t1 = this;
                    var r436_currentGlyph = _r436_t1;
                    r436_currentGlyph.include(r271_MarkSet.p());
                    var _r436_t3 = r436_currentGlyph;
                    var _r436_t4 = _r436_t3.include;
                    var _r436_t5 = r271_CyrZe(r271_slabTop, r271_xn$SLABNONE$5sIl, r271_XH, 0, r271_SB, r271_RightSB, r271_StdBlend, r271_SHook);
                    var _r436_t8 = function (_r436_leti0) {
                        var r439_ze = _r436_leti0;
                        return r271_union(r439_ze.KsiBaseShape(), r439_ze.AutoStartSerifL());
                    }(_r436_t5);
                    _r436_t4.call(_r436_t3, _r436_t8);
                    return void 0;
                });
            }());
        }
        r271_alias('grek/epsilon', 949, 'latn/epsilon.serifless');
        r271_xn$selectvariant$7Hrq('latn/Epsilon', 400);
        r271_xn$selectvariant$7Hrq('latn/epsilon', 603);
        r271_turned('turnepsilon', 7432, 'latn/epsilon', r271_Middle, r271_XH / 2);
        r271_alias('cyrl/ZeRev', 1296, 'latn/Epsilon');
        r271_alias('cyrl/zeRev', 1297, 'latn/epsilon');
        r271_xn$selectvariant$7Hrq('cyrl/Ze', 1047);
        r271_xn$selectvariant$7Hrq('cyrl/ze', 1079);
        r271_xn$selectvariant$7Hrq('cyrl/KsiBase', new r271_xn$NamedParameterPair$2Lrc9b('follow', 'cyrl/Ksi'));
        r271_xn$selectvariant$7Hrq('cyrl/ksiBase', new r271_xn$NamedParameterPair$2Lrc9b('follow', 'cyrl/ksi'));
        r271_xn$selectvariant$7Hrq('cyrl/ze.BGR', new r271_xn$NamedParameterPair$2Lrc9b('follow', 'cyrl/ze'));
        r271_alias('latn/EpsilonRev', 42923, 'cyrl/Ze');
        r271_alias('latn/epsilonRev', 604, 'cyrl/ze');
        r271_xn$selectvariant$7Hrq('cyrl/ZjeKomi', 1284, new r271_xn$NamedParameterPair$2Lrc9b('follow', 'cyrl/Ksi'));
        r271_xn$selectvariant$7Hrq('cyrl/zjeKomi', 1285, new r271_xn$NamedParameterPair$2Lrc9b('follow', 'cyrl/ksi'));
        r271_xn$selectvariant$7Hrq('cyrl/DzjeKomi', 1286, new r271_xn$NamedParameterPair$2Lrc9b('follow', 'cyrl/Ksi'));
        r271_xn$selectvariant$7Hrq('cyrl/dzjeKomi', 1287, new r271_xn$NamedParameterPair$2Lrc9b('follow', 'cyrl/ksi'));
        r271_xn$derivecomposites$7Hrq('cyrl/ZeCedilla', 1176, 'cyrl/Ze', 'cedillaExtShapeBelowOArc');
        r271_xn$derivecomposites$7Hrq('cyrl/zeCedilla', 1177, 'cyrl/ze', 'cedillaExtShapeBelowSOArc');
        r271_xn$selectvariant$7Hrq('latn/epsilon/descBase', new r271_xn$NamedParameterPair$2Lrc9b('shapeFrom', 'latn/epsilon'));
        r271_xn$selectvariant$7Hrq('latn/epsilonRev/descBase', new r271_xn$NamedParameterPair$2Lrc9b('shapeFrom', 'cyrl/ze'), new r271_xn$NamedParameterPair$2Lrc9b('follow', 'latn/epsilon/descBase'));
        r271_xn$derivecomposites$7Hrq('latn/epsilonRetroflexHook', 7571, 'latn/epsilon/descBase', r271_RetroflexHook.r(r271_RightSB, 0, new r271_xn$NamedParameterPair$2Lrc9b('refSw', r271_AdviceStroke2(2, 3, r271_XH))));
        r271_xn$derivecomposites$7Hrq('latn/epsilonRevRetroflexHook', 7572, 'latn/epsilonRev/descBase', r271_RetroflexHook.l(r271_SB, 0, new r271_xn$NamedParameterPair$2Lrc9b('refSw', r271_AdviceStroke2(2, 3, r271_XH))), r271_ExtendBelowBaseAnchors(r271_Descender));
        r271_CreateAccentedComposition('cyrl/Ksi', 1134, 'cyrl/KsiBase', 'caronAbove');
        r271_CreateAccentedComposition('cyrl/ksi', 1135, 'cyrl/ksiBase', 'caronAbove');
        return r271_xn$createAndSaveGlyphImpl$2Lrc3c('voicedLaryngealSpirant', 7460, function () {
            var _r454_t1;
            var _r454_t0 = this;
            var r454_currentGlyph = _r454_t0;
            r454_currentGlyph.include(r271_MarkSet.b());
            var r454_blend = 0.505;
            var r454_midGap = Math.max(r271_AdviceStroke2(3, 12, r271_CAP), r271_CAP / 8 - r271_AdviceStroke2(3, 6, r271_XH));
            var r454_strokeV = r271_AdviceStroke(4);
            var r454_ze = r271_CyrZe(r271_xn$SLABNONE$5sIl, r271_xn$SLABNONE$5sIl, r271_CAP, r454_midGap, r271_SB, r271_RightSB, r454_blend, r271_Hook);
            var r454_dimUpper = r454_ze.Dim();
            var r454_epsilon = r271_SmallEpsilon(r271_xn$SLABNONE$5sIl, r271_xn$SLABNONE$5sIl, r271_CAP - r454_midGap, 0, r454_blend, r271_Hook);
            var r454_dimLower = r454_epsilon.Dim();
            r454_currentGlyph.include(r271_union(r454_epsilon.LowerShape(), r454_ze.UpperShape(), r271_Rect(r454_dimUpper.midy + r454_dimUpper.stroke / 2, r454_dimLower.midy - r454_dimLower.stroke / 2, r271_Middle - r454_strokeV / 2 * r271_HVContrast, r271_Middle + r454_strokeV / 2 * r271_HVContrast)));
            return void 0;
        });
    });
    return void 0;
});
