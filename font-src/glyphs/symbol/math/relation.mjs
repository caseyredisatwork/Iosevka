'use strict';
import * as _s0_t0 from '../../../support/utils.mjs';
import * as _s0_t1 from '../../../support/geometry/box.mjs';
import * as _s0_t2 from '../../../support/gr.mjs';
var _s0_t3;
export {
    _s0_t3 as apply
};
var r1_apply, _r1_t0, _r1_t1, _r1_t2, _r1_t3, _r1_t4, _r1_t5, _r1_t6, _r1_t7;
var _r1_t8 = _s0_t0;
var r1_mix = _r1_t8.mix;
var r1_linreg = _r1_t8.linreg;
var r1_clamp = _r1_t8.clamp;
var r1_fallback = _r1_t8.fallback;
var _r1_t9 = _s0_t1;
var r1_Box = _r1_t9.Box;
var _r1_t10 = _s0_t2;
var r1_Joining = _r1_t10.Joining;
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
    r271_xn$Capture_Ext$2Lrc2b['$defineGlyphBlockImpl$'](r271_xn$Capture_Ext$2Lrc2b, 'Symbol-Math-Relation-Common', function (r272_xn$Capture$2Lrc8, r272_xn$ExportCapture$2Lrc4b) {
        var r272_dSH, _r272_t6, _r272_t7;
        var _r272_t0 = r272_xn$Capture$2Lrc8;
        var r272_xn$createAndSaveGlyphImpl$2Lrc3c = _r272_t0['$createAndSaveGlyphImpl$'];
        var r272_xn$NamedParameterPair$2Lrc9b = _r272_t0['$NamedParameterPair$'];
        var r272_xn$assignUnicodeImpl$2Lrc8b = _r272_t0['$assignUnicodeImpl$'];
        var r272_xn$execState$2Lrc0b = _r272_t0['$execState$'];
        var _r272_t1 = r272_xn$Capture$2Lrc8.Metrics;
        var r272_DesignParameters = _r272_t1.DesignParameters;
        var r272_SB = _r272_t1.SB;
        var r272_XH = _r272_t1.XH;
        var r272_OperTop = _r272_t1.OperTop;
        var r272_OperBot = _r272_t1.OperBot;
        var r272_RightSB = _r272_t1.RightSB;
        var r272_AdviceStroke = _r272_t1.AdviceStroke;
        var _r272_t2 = r272_xn$Capture$2Lrc8.SpiroFns;
        var _r272_t3 = r272_xn$Capture$2Lrc8.BooleFns;
        var _r272_t4 = r272_xn$Capture$2Lrc8['Common-Derivatives'].resolve();
        var _r272_t5 = r272_xn$Capture$2Lrc8.CommonShapes.resolve();
        r272_xn$ExportCapture$2Lrc4b(function () {
            var _r276_t0, _r276_t1;
            return { 'EqualHoleWidth': r272_EqualHoleWidth };
        });
        var r272_EqualHoleWidth = r272_AdviceStroke(5);
        r272_xn$ExportCapture$2Lrc4b(function () {
            var _r278_t0, _r278_t1;
            return { 'EqualHalfSpace': r272_EqualHalfSpace };
        });
        var r272_EqualHalfSpace = (r272_OperTop - r272_OperBot) * 2 * r272_DesignParameters.equal_wideness;
        r272_xn$ExportCapture$2Lrc4b(function () {
            var _r280_t0, _r280_t1;
            return { 'LessSlope': r272_LessSlope };
        });
        var r272_LessSlope = 5 / 13 * (r272_OperTop - r272_OperBot) / (r272_RightSB - r272_SB);
        r272_xn$ExportCapture$2Lrc4b(function () {
            var _r282_t0, _r282_t1;
            return { 'dH': r272_dH };
        });
        var r272_dH = r272_LessSlope * (r272_RightSB - r272_SB);
        r272_xn$ExportCapture$2Lrc4b(function () {
            var _r284_t0, _r284_t1;
            return { 'dHSubstSimple': r272_dHSubstSimple };
        });
        var r272_dHSubstSimple = r272_dH * 1;
        r272_xn$ExportCapture$2Lrc4b(function () {
            var _r286_t0, _r286_t1;
            return { 'dHElem': r272_dHElem };
        });
        var r272_dHElem = r272_dH * 7 / 6;
        r272_xn$ExportCapture$2Lrc4b(function () {
            var _r288_t0, _r288_t1;
            return { 'dHSmallElem': r272_dHSmallElem };
        });
        var r272_dHSmallElem = r272_dH * (3 / 4);
        r272_xn$ExportCapture$2Lrc4b(function () {
            var _r290_t0, _r290_t1;
            return { 'lessEqDist': r272_lessEqDist };
        });
        var r272_lessEqDist = Math.max(r272_AdviceStroke(4), r272_XH * 0.16);
        r272_xn$ExportCapture$2Lrc4b(function () {
            var _r292_t0, _r292_t1;
            return { 'dSH': r272_dSH };
        });
        return r272_dSH = (r272_dH * 2 + r272_lessEqDist * 2) / 3;
    });
    return void 0;
});
r1_xn$GlyphBlocks$2Lrc2b.push(function (r295_xn$Capture_Ext$2Lrc2b) {
    var _r295_t0, _r295_t1;
    r295_xn$Capture_Ext$2Lrc2b['$defineGlyphBlockImpl$'](r295_xn$Capture_Ext$2Lrc2b, 'Symbol-Math-Relation-Equal', function (r296_xn$Capture$2Lrc8, r296_xn$ExportCapture$2Lrc4b) {
        var _r296_t7, _r296_t8;
        var _r296_t0 = r296_xn$Capture$2Lrc8;
        var r296_xn$createAndSaveGlyphImpl$2Lrc3c = _r296_t0['$createAndSaveGlyphImpl$'];
        var r296_xn$NamedParameterPair$2Lrc9b = _r296_t0['$NamedParameterPair$'];
        var r296_xn$assignUnicodeImpl$2Lrc8b = _r296_t0['$assignUnicodeImpl$'];
        var r296_xn$execState$2Lrc0b = _r296_t0['$execState$'];
        var r296_MarkSet = _r296_t0.MarkSet;
        var _r296_t1 = r296_xn$Capture$2Lrc8.Metrics;
        var r296_Width = _r296_t1.Width;
        var r296_SB = _r296_t1.SB;
        var r296_SymbolMid = _r296_t1.SymbolMid;
        var r296_ParenTop = _r296_t1.ParenTop;
        var r296_ParenBot = _r296_t1.ParenBot;
        var r296_ApparentTranslate = _r296_t1.ApparentTranslate;
        var r296_TanSlope = _r296_t1.TanSlope;
        var r296_Rightward = _r296_t1.Rightward;
        var r296_O = _r296_t1.O;
        var r296_Stroke = _r296_t1.Stroke;
        var r296_RightSB = _r296_t1.RightSB;
        var r296_Middle = _r296_t1.Middle;
        var r296_DotRadius = _r296_t1.DotRadius;
        var r296_AdviceStroke = _r296_t1.AdviceStroke;
        var r296_OperatorStroke = _r296_t1.OperatorStroke;
        var r296_ArchDepthAOf = _r296_t1.ArchDepthAOf;
        var r296_ArchDepthBOf = _r296_t1.ArchDepthBOf;
        var _r296_t2 = r296_xn$Capture$2Lrc8.SpiroFns;
        var r296_g4 = _r296_t2.g4;
        var r296_widths = _r296_t2.widths;
        var r296_heading = _r296_t2.heading;
        var r296_dispiro = _r296_t2.dispiro;
        var _r296_t3 = r296_xn$Capture$2Lrc8.BooleFns;
        var r296_union = _r296_t3.union;
        var r296_intersection = _r296_t3.intersection;
        var r296_difference = _r296_t3.difference;
        var _r296_t4 = r296_xn$Capture$2Lrc8.CommonShapes.resolve();
        var r296_Rect = _r296_t4.Rect;
        var r296_RingAt = _r296_t4.RingAt;
        var r296_RingStrokeAt = _r296_t4.RingStrokeAt;
        var r296_OShape = _r296_t4.OShape;
        var r296_OShapeOutline = _r296_t4.OShapeOutline;
        var r296_HBar = _r296_t4.HBar;
        var r296_VBar = _r296_t4.VBar;
        var r296_xn$clearanchors$1aao = _r296_t4['clear-anchors'];
        var r296_MaskLeft = _r296_t4.MaskLeft;
        var r296_MaskRight = _r296_t4.MaskRight;
        var r296_WithDotVariants = _r296_t4.WithDotVariants;
        var _r296_t5 = r296_xn$Capture$2Lrc8['Common-Derivatives'].resolve();
        var r296_xn$referglyph$1aao = _r296_t5['refer-glyph'];
        var r296_turned = _r296_t5.turned;
        var _r296_t6 = r296_xn$Capture$2Lrc8['Symbol-Math-Relation-Common'].resolve();
        var r296_EqualHalfSpace = _r296_t6.EqualHalfSpace;
        var r296_dH = _r296_t6.dH;
        var r296_EqualHoleWidth = _r296_t6.EqualHoleWidth;
        r296_xn$ExportCapture$2Lrc4b(function () {
            var _r301_t0, _r301_t1;
            return {
                'EqualShape': r296_EqualShape,
                'EqualHole': r296_EqualHole,
                'IdentShape': r296_IdentShape,
                'IdentHole': r296_IdentHole
            };
        });
        r296_xn$ExportCapture$2Lrc4b(function () {
            var _r303_t0, _r303_t1;
            return { 'EqualShape': r296_EqualShape };
        });
        var r296_EqualShape = function (r304_left, r304_right) {
            var _r304_t0, _r304_t1;
            return r296_union(r296_HBar.m(r304_left, r304_right, r296_SymbolMid + r296_EqualHalfSpace, r296_OperatorStroke), r296_HBar.m(r304_left, r304_right, r296_SymbolMid - r296_EqualHalfSpace, r296_OperatorStroke));
        };
        r296_xn$ExportCapture$2Lrc4b(function () {
            var _r306_t0, _r306_t1;
            return { 'EqualHole': r296_EqualHole };
        });
        var r296_EqualHole = function (r307_x) {
            var _r307_t0, _r307_t1;
            return r296_VBar.m(r307_x, r296_SymbolMid - r296_EqualHalfSpace, r296_SymbolMid + r296_EqualHalfSpace, r296_EqualHoleWidth);
        };
        r296_xn$ExportCapture$2Lrc4b(function () {
            var _r309_t0, _r309_t1;
            return { 'IdentShape': r296_IdentShape };
        });
        var r296_IdentShape = function (r310_left, r310_right) {
            var _r310_t0, _r310_t1;
            return r296_union(r296_HBar.m(r310_left, r310_right, r296_SymbolMid + r296_EqualHalfSpace * 1.5, r296_OperatorStroke), r296_HBar.m(r310_left, r310_right, r296_SymbolMid, r296_OperatorStroke), r296_HBar.m(r310_left, r310_right, r296_SymbolMid - r296_EqualHalfSpace * 1.5, r296_OperatorStroke));
        };
        r296_xn$ExportCapture$2Lrc4b(function () {
            var _r312_t0, _r312_t1;
            return { 'IdentHole': r296_IdentHole };
        });
        var r296_IdentHole = function (r313_x) {
            var _r313_t0, _r313_t1;
            return r296_VBar.m(r313_x, r296_SymbolMid - r296_EqualHalfSpace * 1.5, r296_SymbolMid + r296_EqualHalfSpace * 1.5, r296_EqualHoleWidth);
        };
        r296_xn$createAndSaveGlyphImpl$2Lrc3c('equal', '=', function () {
            var _r316_t1;
            var _r316_t0 = this;
            var r316_currentGlyph = _r316_t0;
            r316_currentGlyph.include(r296_EqualShape(r296_SB, r296_RightSB));
            return void 0;
        });
        var r296_EqDotDistance = r296_EqualHalfSpace * 2 + r296_DotRadius * r296_OperatorStroke / r296_Stroke;
        r296_WithDotVariants('oneDotApproxEq', 8784, function (r318_DrawAt, r318_kr, r318_ov) {
            var _r318_t0, _r318_t1;
            return function () {
                var _r320_t1;
                var _r320_t0 = this;
                var r320_currentGlyph = _r320_t0;
                var r320_dr = r296_DotRadius * r318_kr * r296_OperatorStroke / r296_Stroke;
                r320_currentGlyph.include(r296_xn$referglyph$1aao('equal'));
                r320_currentGlyph.include(r318_DrawAt(r296_Middle, r296_SymbolMid + r296_EqDotDistance, r320_dr - r318_ov));
                return void 0;
            };
        });
        r296_WithDotVariants('twoDotApproxEqCenter', 8785, function (r323_DrawAt, r323_kr, r323_ov) {
            var _r323_t0, _r323_t1;
            return function () {
                var _r325_t1;
                var _r325_t0 = this;
                var r325_currentGlyph = _r325_t0;
                var r325_dr = r296_DotRadius * r323_kr * r296_OperatorStroke / r296_Stroke;
                r325_currentGlyph.include(r296_xn$referglyph$1aao('equal'));
                r325_currentGlyph.include(r323_DrawAt(r296_Middle, r296_SymbolMid + r296_EqDotDistance, r325_dr - r323_ov));
                r325_currentGlyph.include(r323_DrawAt(r296_Middle, r296_SymbolMid - r296_EqDotDistance, r325_dr - r323_ov));
                return void 0;
            };
        });
        r296_WithDotVariants('twoDotApproxEq', 8786, function (r329_DrawAt, r329_kr, r329_ov) {
            var _r329_t0, _r329_t1;
            return function () {
                var _r331_t1;
                var _r331_t0 = this;
                var r331_currentGlyph = _r331_t0;
                var r331_dr = r296_DotRadius * r329_kr * r296_OperatorStroke / r296_Stroke;
                r331_currentGlyph.include(r296_xn$referglyph$1aao('equal'));
                r331_currentGlyph.include(r329_DrawAt(r1_mix(r296_SB, r296_RightSB, 1 / 6), r296_SymbolMid + r296_EqDotDistance, r331_dr - r329_ov));
                r331_currentGlyph.include(r329_DrawAt(r1_mix(r296_SB, r296_RightSB, 5 / 6), r296_SymbolMid - r296_EqDotDistance, r331_dr - r329_ov));
                return void 0;
            };
        });
        r296_WithDotVariants('twoDotApproxEqAlt', 8787, function (r335_DrawAt, r335_kr, r335_ov) {
            var _r335_t0, _r335_t1;
            return function () {
                var _r337_t1;
                var _r337_t0 = this;
                var r337_currentGlyph = _r337_t0;
                var r337_dr = r296_DotRadius * r335_kr * r296_OperatorStroke / r296_Stroke;
                r337_currentGlyph.include(r296_xn$referglyph$1aao('equal'));
                r337_currentGlyph.include(r335_DrawAt(r1_mix(r296_SB, r296_RightSB, 5 / 6), r296_SymbolMid + r296_EqDotDistance, r337_dr - r335_ov));
                r337_currentGlyph.include(r335_DrawAt(r1_mix(r296_SB, r296_RightSB, 1 / 6), r296_SymbolMid - r296_EqDotDistance, r337_dr - r335_ov));
                return void 0;
            };
        });
        r296_xn$createAndSaveGlyphImpl$2Lrc3c('ringInEqual', 8790, function () {
            var _r343_t1;
            var _r343_t0 = this;
            var r343_currentGlyph = _r343_t0;
            var r343_ringSw = r296_AdviceStroke(4);
            r343_currentGlyph.include(r296_difference(r296_xn$referglyph$1aao('equal'), r296_RingAt(r296_Middle, r296_SymbolMid, r296_EqualHalfSpace + r296_O + r343_ringSw / 2)));
            r343_currentGlyph.include(r296_RingStrokeAt(r296_Middle, r296_SymbolMid, r296_EqualHalfSpace + r343_ringSw / 2, r343_ringSw));
            return void 0;
        });
        r296_xn$createAndSaveGlyphImpl$2Lrc3c('ringEqual', 8791, function () {
            var _r348_t1;
            var _r348_t0 = this;
            var r348_currentGlyph = _r348_t0;
            r348_currentGlyph.include(r296_xn$referglyph$1aao('equal'), true, true);
            r348_currentGlyph.include(r296_MarkSet.plus());
            r348_currentGlyph.include(r296_xn$referglyph$1aao('ringAbove'));
            r348_currentGlyph.include(r296_xn$clearanchors$1aao());
            return void 0;
        });
        r296_xn$createAndSaveGlyphImpl$2Lrc3c('geometricallyEquivalentTo', 8782, function () {
            var _r355_t1;
            var _r355_t0 = this;
            var r355_currentGlyph = _r355_t0;
            var r355_ringSw = r296_AdviceStroke(4);
            var r355_halfGap = r296_EqualHalfSpace - r296_OperatorStroke / 2;
            var r355_outerRad = r296_EqualHalfSpace + r355_ringSw / 2;
            r355_currentGlyph.include(r296_difference(r296_xn$referglyph$1aao('equal'), r296_OShapeOutline.NoOvershoot(r296_SymbolMid + r296_EqualHalfSpace + r355_outerRad, r296_SymbolMid - r296_EqualHalfSpace - r355_outerRad, r296_Middle - r355_outerRad, r296_Middle + r355_outerRad, r355_ringSw, r296_ArchDepthAOf(r355_outerRad, r296_Width), r296_ArchDepthBOf(r355_outerRad, r296_Width))));
            r355_currentGlyph.include(r296_difference(r296_OShape(r296_SymbolMid + r296_EqualHalfSpace + r355_outerRad, r296_SymbolMid - r296_EqualHalfSpace - r355_outerRad, r296_Middle - r355_outerRad, r296_Middle + r355_outerRad, r355_ringSw, r296_ArchDepthAOf(r355_outerRad, r296_Width), r296_ArchDepthBOf(r355_outerRad, r296_Width)), r296_Rect(r296_SymbolMid + r355_halfGap, r296_SymbolMid - r355_halfGap, 0, r296_Width)));
            return void 0;
        });
        r296_xn$createAndSaveGlyphImpl$2Lrc3c('differenceBetween', 8783, function () {
            var _r360_t1;
            var _r360_t0 = this;
            var r360_currentGlyph = _r360_t0;
            r360_currentGlyph.include(r296_intersection(r296_Rect(r296_ParenTop, r296_SymbolMid, 0, r296_Width), r296_xn$referglyph$1aao('geometricallyEquivalentTo')));
            r360_currentGlyph.include(r296_intersection(r296_Rect(r296_SymbolMid, r296_ParenBot, 0, r296_Width), r296_xn$referglyph$1aao('equal')));
            return void 0;
        });
        r296_xn$createAndSaveGlyphImpl$2Lrc3c('ident', 8801, function () {
            var _r365_t1;
            var _r365_t0 = this;
            var r365_currentGlyph = _r365_t0;
            r365_currentGlyph.include(r296_IdentShape(r296_SB, r296_RightSB));
            return void 0;
        });
        r296_xn$createAndSaveGlyphImpl$2Lrc3c('iiiident', 8803, function () {
            var _r369_t1;
            var _r369_t0 = this;
            var r369_currentGlyph = _r369_t0;
            r369_currentGlyph.include(r296_HBar.m(r296_SB, r296_RightSB, r296_SymbolMid + r296_EqualHalfSpace * 2.25, r296_OperatorStroke));
            r369_currentGlyph.include(r296_HBar.m(r296_SB, r296_RightSB, r296_SymbolMid + r296_EqualHalfSpace * 0.75, r296_OperatorStroke));
            r369_currentGlyph.include(r296_HBar.m(r296_SB, r296_RightSB, r296_SymbolMid - r296_EqualHalfSpace * 0.75, r296_OperatorStroke));
            r369_currentGlyph.include(r296_HBar.m(r296_SB, r296_RightSB, r296_SymbolMid - r296_EqualHalfSpace * 2.25, r296_OperatorStroke));
            return void 0;
        });
        r296_xn$createAndSaveGlyphImpl$2Lrc3c('equivalentTo', 8781, function () {
            var _r376_t1;
            var _r376_t0 = this;
            var r376_currentGlyph = _r376_t0;
            var r376_kArcExtY1 = 3;
            var r376_kArcExtY2 = 3 + r296_TanSlope * 2;
            var r376_kArcExtX = 2;
            r376_currentGlyph.include(r296_intersection(r296_MaskRight(r296_SB), r296_MaskLeft(r296_RightSB), r296_union(r296_dispiro(r296_widths.center(r296_OperatorStroke), r296_g4(r1_mix(r296_Middle, r296_SB, r376_kArcExtX), r296_SymbolMid + r296_EqualHalfSpace * r376_kArcExtY1), r296_g4(r296_Middle, r296_SymbolMid + r296_EqualHalfSpace, r296_heading(r296_Rightward)), r296_g4(r1_mix(r296_Middle, r296_RightSB, r376_kArcExtX), r296_SymbolMid + r296_EqualHalfSpace * r376_kArcExtY2)), r296_dispiro(r296_widths.center(r296_OperatorStroke), r296_g4(r1_mix(r296_Middle, r296_SB, r376_kArcExtX), r296_SymbolMid - r296_EqualHalfSpace * r376_kArcExtY2), r296_g4(r296_Middle, r296_SymbolMid - r296_EqualHalfSpace, r296_heading(r296_Rightward)), r296_g4(r1_mix(r296_Middle, r296_RightSB, r376_kArcExtX), r296_SymbolMid - r296_EqualHalfSpace * r376_kArcExtY1)))));
            return void 0;
        });
        r296_xn$createAndSaveGlyphImpl$2Lrc3c('equalParallel', 8917, function () {
            var _r380_t1;
            var _r380_t0 = this;
            var r380_currentGlyph = _r380_t0;
            r380_currentGlyph.include(r296_xn$referglyph$1aao('equal'), true, true);
            r380_currentGlyph.include(r296_xn$referglyph$1aao('parallel'));
            return void 0;
        });
        r296_xn$createAndSaveGlyphImpl$2Lrc3c('equalDoubleSlash', 10723, function () {
            var _r385_t1;
            var _r385_t0 = this;
            var r385_currentGlyph = _r385_t0;
            r385_currentGlyph.include(r296_EqualShape(r1_mix(r296_SB, 0, 0.5), r1_mix(r296_RightSB, r296_Width, 0.5)), true, true);
            r385_currentGlyph.include(r296_xn$referglyph$1aao('slantedParallel'));
            return void 0;
        });
        r296_xn$createAndSaveGlyphImpl$2Lrc3c('equalDoubleSlashTilde', 10724, function () {
            var _r390_t1;
            var _r390_t0 = this;
            var r390_currentGlyph = _r390_t0;
            r390_currentGlyph.include(r296_xn$referglyph$1aao('equalDoubleSlash'), true, true);
            r390_currentGlyph.include(r296_MarkSet.tack());
            r390_currentGlyph.include(r296_xn$referglyph$1aao('tildeAbove'));
            r390_currentGlyph.include(r296_xn$clearanchors$1aao());
            return void 0;
        });
        r296_xn$createAndSaveGlyphImpl$2Lrc3c('identDoubleSlash', 10725, function () {
            var _r397_t1;
            var _r397_t0 = this;
            var r397_currentGlyph = _r397_t0;
            r397_currentGlyph.include(r296_IdentShape(r1_mix(r296_SB, 0, 0.5), r1_mix(r296_RightSB, r296_Width, 0.5)), true, true);
            r397_currentGlyph.include(r296_xn$referglyph$1aao('slantedParallel'));
            return void 0;
        });
        r296_xn$createAndSaveGlyphImpl$2Lrc3c('recordMark', 10727, function () {
            var _r402_t1;
            var _r402_t0 = this;
            var r402_currentGlyph = _r402_t0;
            r402_currentGlyph.include(r296_xn$referglyph$1aao('equal'), true, true);
            r402_currentGlyph.include(r296_xn$referglyph$1aao('stile'));
            return void 0;
        });
        r296_turned('equalDot', 10854, 'oneDotApproxEq', r296_Middle, r296_SymbolMid);
        r296_WithDotVariants('oneDotIdent', 10855, function (r405_DrawAt, r405_kr, r405_ov) {
            var _r405_t0, _r405_t1;
            return function () {
                var _r407_t1;
                var _r407_t0 = this;
                var r407_currentGlyph = _r407_t0;
                var r407_dr = r296_DotRadius * r405_kr * r296_OperatorStroke / r296_Stroke;
                r407_currentGlyph.include(r296_xn$referglyph$1aao('ident'));
                r407_currentGlyph.include(r405_DrawAt(r296_Middle, r296_SymbolMid + r296_EqualHalfSpace * 0.5 + r296_EqDotDistance, r407_dr - r405_ov));
                return void 0;
            };
        });
        r296_xn$createAndSaveGlyphImpl$2Lrc3c('identParallel', 10856, function () {
            var _r412_t1;
            var _r412_t0 = this;
            var r412_currentGlyph = _r412_t0;
            r412_currentGlyph.include(r296_xn$referglyph$1aao('ident'), true, true);
            r412_currentGlyph.include(r296_xn$referglyph$1aao('parallel'));
            return void 0;
        });
        r296_xn$createAndSaveGlyphImpl$2Lrc3c('identInterleave', 10857, function () {
            var _r417_t1;
            var _r417_t0 = this;
            var r417_currentGlyph = _r417_t0;
            r417_currentGlyph.include(r296_IdentShape(r1_mix(r296_SB, 0, 0.5), r1_mix(r296_RightSB, r296_Width, 0.5)), true, true);
            r417_currentGlyph.include(r296_xn$referglyph$1aao('interleave'));
            return void 0;
        });
        r296_xn$createAndSaveGlyphImpl$2Lrc3c('bumpEqual', 10926, function () {
            var _r422_t1;
            var _r422_t0 = this;
            var r422_currentGlyph = _r422_t0;
            r422_currentGlyph.include(r296_intersection(r296_Rect(r296_ParenTop, r296_SymbolMid, 0, r296_Width), r296_xn$referglyph$1aao('geometricallyEquivalentTo')));
            r422_currentGlyph.include(r296_ApparentTranslate(0, r296_EqualHalfSpace * 0.5));
            r422_currentGlyph.include(r296_HBar.m(r296_SB, r296_RightSB, r296_SymbolMid, r296_OperatorStroke));
            r422_currentGlyph.include(r296_HBar.m(r296_SB, r296_RightSB, r296_SymbolMid - r296_EqualHalfSpace * 1.5, r296_OperatorStroke));
            return void 0;
        });
        return r296_xn$createAndSaveGlyphImpl$2Lrc3c('groupMark', 11218, function () {
            var _r429_t1;
            var _r429_t0 = this;
            var r429_currentGlyph = _r429_t0;
            r429_currentGlyph.include(r296_xn$referglyph$1aao('ident'), true, true);
            r429_currentGlyph.include(r296_xn$referglyph$1aao('stile'));
            return void 0;
        });
    });
    return void 0;
});
r1_xn$GlyphBlocks$2Lrc2b.push(function (r434_xn$Capture_Ext$2Lrc2b) {
    var _r434_t0, _r434_t1;
    r434_xn$Capture_Ext$2Lrc2b['$defineGlyphBlockImpl$'](r434_xn$Capture_Ext$2Lrc2b, 'Symbol-Math-Relation-Addons', function (r435_xn$Capture$2Lrc8, r435_xn$ExportCapture$2Lrc4b) {
        var r435_EqEqBarNegation, _r435_t7, _r435_t8;
        var _r435_t0 = r435_xn$Capture$2Lrc8;
        var r435_xn$createAndSaveGlyphImpl$2Lrc3c = _r435_t0['$createAndSaveGlyphImpl$'];
        var r435_xn$NamedParameterPair$2Lrc9b = _r435_t0['$NamedParameterPair$'];
        var r435_xn$assignUnicodeImpl$2Lrc8b = _r435_t0['$assignUnicodeImpl$'];
        var r435_xn$execState$2Lrc0b = _r435_t0['$execState$'];
        var _r435_t1 = r435_xn$Capture$2Lrc8.Metrics;
        var r435_SymbolMid = _r435_t1.SymbolMid;
        var r435_Downward = _r435_t1.Downward;
        var r435_Middle = _r435_t1.Middle;
        var r435_AdviceStroke = _r435_t1.AdviceStroke;
        var _r435_t2 = r435_xn$Capture$2Lrc8.SpiroFns;
        var r435_flat = _r435_t2.flat;
        var r435_widths = _r435_t2.widths;
        var r435_heading = _r435_t2.heading;
        var r435_dispiro = _r435_t2.dispiro;
        var _r435_t3 = r435_xn$Capture$2Lrc8.BooleFns;
        var _r435_t4 = r435_xn$Capture$2Lrc8.CommonShapes.resolve();
        var _r435_t5 = r435_xn$Capture$2Lrc8['Common-Derivatives'].resolve();
        var _r435_t6 = r435_xn$Capture$2Lrc8['Symbol-Math-Relation-Common'].resolve();
        var r435_lessEqDist = _r435_t6.lessEqDist;
        var r435_dH = _r435_t6.dH;
        var r435_dSH = _r435_t6.dSH;
        r435_xn$ExportCapture$2Lrc4b(function () {
            var _r440_t0, _r440_t1;
            return {
                'lesslessSW': r435_lesslessSW,
                'lesslessSWO': r435_lesslessSWO,
                'llggHeight': r435_llggHeight
            };
        });
        var r435_lesslessSW = r435_AdviceStroke(4);
        var r435_lesslessSWO = Math.max(r435_lesslessSW, r435_lessEqDist);
        var r435_llggHeight = r435_dH * 2 + r435_lessEqDist * 2;
        r435_xn$ExportCapture$2Lrc4b(function () {
            var _r442_t0, _r442_t1;
            return { 'EqEqBarNegationImpl': r435_EqEqBarNegationImpl };
        });
        var r435_EqEqBarNegationImpl = function (r443_sw, r443_y1, r443_y2) {
            var _r443_t0, _r443_t1;
            return r435_dispiro(r435_widths.center(r443_sw), r435_flat(r435_Middle + r435_lessEqDist, r443_y1 + r435_lesslessSWO, r435_heading(r435_Downward)), r435_flat(r435_Middle - r435_lessEqDist, r443_y2 - r435_lesslessSWO, r435_heading(r435_Downward)));
        };
        r435_xn$ExportCapture$2Lrc4b(function () {
            var _r445_t0, _r445_t1;
            return { 'EqEqBarNegation': r435_EqEqBarNegation };
        });
        return r435_EqEqBarNegation = function () {
            var _r446_t0, _r446_t1;
            return r435_EqEqBarNegationImpl(r435_lesslessSW, r435_SymbolMid - r435_dSH + r435_lessEqDist * 2 / 3, r435_SymbolMid - r435_dSH - r435_lessEqDist);
        };
    });
    return void 0;
});
r1_xn$GlyphBlocks$2Lrc2b.push(function (r449_xn$Capture_Ext$2Lrc2b) {
    var _r449_t0, _r449_t1;
    r449_xn$Capture_Ext$2Lrc2b['$defineGlyphBlockImpl$'](r449_xn$Capture_Ext$2Lrc2b, 'Symbol-Math-Relation-Colons', function (r450_xn$Capture$2Lrc8, r450_xn$ExportCapture$2Lrc4b) {
        var _r450_t8, _r450_t9;
        var _r450_t0 = r450_xn$Capture$2Lrc8;
        var r450_xn$createAndSaveGlyphImpl$2Lrc3c = _r450_t0['$createAndSaveGlyphImpl$'];
        var r450_xn$NamedParameterPair$2Lrc9b = _r450_t0['$NamedParameterPair$'];
        var r450_xn$assignUnicodeImpl$2Lrc8b = _r450_t0['$assignUnicodeImpl$'];
        var r450_xn$execState$2Lrc0b = _r450_t0['$execState$'];
        var _r450_t1 = r450_xn$Capture$2Lrc8.Metrics;
        var r450_Width = _r450_t1.Width;
        var r450_SB = _r450_t1.SB;
        var r450_XH = _r450_t1.XH;
        var r450_SymbolMid = _r450_t1.SymbolMid;
        var r450_PlusTop = _r450_t1.PlusTop;
        var r450_PlusBot = _r450_t1.PlusBot;
        var r450_ApparentTranslate = _r450_t1.ApparentTranslate;
        var r450_Stroke = _r450_t1.Stroke;
        var r450_DotSize = _r450_t1.DotSize;
        var r450_RightSB = _r450_t1.RightSB;
        var r450_Middle = _r450_t1.Middle;
        var r450_DotRadius = _r450_t1.DotRadius;
        var r450_OperatorStroke = _r450_t1.OperatorStroke;
        var _r450_t2 = r450_xn$Capture$2Lrc8.SpiroFns;
        var _r450_t3 = r450_xn$Capture$2Lrc8.BooleFns;
        var _r450_t4 = r450_xn$Capture$2Lrc8.CommonShapes.resolve();
        var r450_HBar = _r450_t4.HBar;
        var r450_WithDotVariants = _r450_t4.WithDotVariants;
        var _r450_t5 = r450_xn$Capture$2Lrc8['Common-Derivatives'].resolve();
        var _r450_t6 = r450_xn$Capture$2Lrc8['Symbol-Arrow'].resolve();
        var r450_ArrowShape = _r450_t6.ArrowShape;
        var _r450_t7 = r450_xn$Capture$2Lrc8['Symbol-Math-Relation-Equal'].resolve();
        var r450_EqualShape = _r450_t7.EqualShape;
        var r450_ColonEqSbSquash = 0.5;
        var r450_ColonEqColonShape = function (r455_sign, r455_DrawAt, r455_kr, r455_ov) {
            var _r455_t0, _r455_t1;
            return r450_xn$createAndSaveGlyphImpl$2Lrc3c(null, null, function () {
                var _r458_t1;
                var _r458_t0 = this;
                var r458_currentGlyph = _r458_t0;
                var r458_dr = r450_DotRadius * r455_kr * r450_OperatorStroke / r450_Stroke;
                r458_currentGlyph.include(r455_DrawAt(r450_Middle, r458_dr, r458_dr - r455_ov));
                r458_currentGlyph.include(r455_DrawAt(r450_Middle, r450_XH - r458_dr, r458_dr - r455_ov));
                var r458_delta = Math.max(0, r450_Middle - r458_dr - r450_SB * r450_ColonEqSbSquash);
                r458_currentGlyph.include(r450_ApparentTranslate(r455_sign * r458_delta, r450_SymbolMid - r450_XH / 2));
                return void 0;
            });
        };
        r450_WithDotVariants('eqColon', 8789, function (r462_DrawAt, r462_kr, r462_ov) {
            var _r462_t0, _r462_t1;
            return function () {
                var _r464_t1;
                var _r464_t0 = this;
                var r464_currentGlyph = _r464_t0;
                r464_currentGlyph.include(r450_ColonEqColonShape(+1, r462_DrawAt, r462_kr, r462_ov));
                r464_currentGlyph.include(r450_EqualShape(r450_SB * r450_ColonEqSbSquash, r450_RightSB - r450_DotSize * r462_kr));
                return void 0;
            };
        });
        r450_WithDotVariants('colonEq', 8788, function (r467_DrawAt, r467_kr, r467_ov) {
            var _r467_t0, _r467_t1;
            return function () {
                var _r469_t1;
                var _r469_t0 = this;
                var r469_currentGlyph = _r469_t0;
                r469_currentGlyph.include(r450_ColonEqColonShape(-1, r467_DrawAt, r467_kr, r467_ov));
                r469_currentGlyph.include(r450_EqualShape(r450_SB + r450_DotSize * r467_kr, r450_Width - r450_SB * r450_ColonEqSbSquash));
                return void 0;
            };
        });
        return r450_WithDotVariants('colonArrow', 10740, function (r472_DrawAt, r472_kr, r472_ov) {
            var _r472_t0, _r472_t1;
            return function () {
                var _r474_t1;
                var _r474_t0 = this;
                var r474_currentGlyph = _r474_t0;
                var r474_barLeft = r450_SB + r450_DotSize * r472_kr;
                var r474_barRight = r450_Width - r450_SB * r450_ColonEqSbSquash;
                var r474_arrowHeadSize = Math.min((r450_PlusTop - r450_PlusBot) / 2, 0.75 * (r474_barRight - r474_barLeft));
                r474_currentGlyph.include(r450_ColonEqColonShape(-1, r472_DrawAt, r472_kr, r472_ov));
                r474_currentGlyph.include(r450_HBar.m(r1_mix(r450_SB, r474_barLeft, 0.8), r1_mix(r474_barLeft, r474_barRight, 0.5), r450_SymbolMid, r450_OperatorStroke));
                r474_currentGlyph.include(r450_ArrowShape(r474_barLeft, r450_SymbolMid, r474_barRight, r450_SymbolMid, r474_arrowHeadSize));
                return void 0;
            };
        });
    });
    return void 0;
});
r1_xn$GlyphBlocks$2Lrc2b.push(function (r480_xn$Capture_Ext$2Lrc2b) {
    var _r480_t0, _r480_t1;
    r480_xn$Capture_Ext$2Lrc2b['$defineGlyphBlockImpl$'](r480_xn$Capture_Ext$2Lrc2b, 'Symbol-Math-Relation-Sym', function (r481_xn$Capture$2Lrc8, r481_xn$ExportCapture$2Lrc4b) {
        var _r481_t9, _r481_t10;
        var _r481_t0 = r481_xn$Capture$2Lrc8;
        var r481_xn$createAndSaveGlyphImpl$2Lrc3c = _r481_t0['$createAndSaveGlyphImpl$'];
        var r481_xn$NamedParameterPair$2Lrc9b = _r481_t0['$NamedParameterPair$'];
        var r481_xn$assignUnicodeImpl$2Lrc8b = _r481_t0['$assignUnicodeImpl$'];
        var r481_xn$execState$2Lrc0b = _r481_t0['$execState$'];
        var r481_MarkSet = _r481_t0.MarkSet;
        var r481_AS_BASE = _r481_t0.AS_BASE;
        var _r481_t1 = r481_xn$Capture$2Lrc8.Metrics;
        var r481_SB = _r481_t1.SB;
        var r481_SymbolMid = _r481_t1.SymbolMid;
        var r481_OperTop = _r481_t1.OperTop;
        var r481_PlusTop = _r481_t1.PlusTop;
        var r481_PlusBot = _r481_t1.PlusBot;
        var r481_ApparentTranslate = _r481_t1.ApparentTranslate;
        var r481_Stroke = _r481_t1.Stroke;
        var r481_RightSB = _r481_t1.RightSB;
        var r481_Middle = _r481_t1.Middle;
        var r481_DotRadius = _r481_t1.DotRadius;
        var r481_OperatorStroke = _r481_t1.OperatorStroke;
        var _r481_t2 = r481_xn$Capture$2Lrc8.SpiroFns;
        var _r481_t3 = r481_xn$Capture$2Lrc8.BooleFns;
        var _r481_t4 = r481_xn$Capture$2Lrc8.CommonShapes.resolve();
        var r481_HBar = _r481_t4.HBar;
        var r481_xn$clearanchors$1aao = _r481_t4['clear-anchors'];
        var r481_WithDotVariants = _r481_t4.WithDotVariants;
        var _r481_t5 = r481_xn$Capture$2Lrc8['Common-Derivatives'].resolve();
        var r481_xn$referglyph$1aao = _r481_t5['refer-glyph'];
        var r481_VDual = _r481_t5.VDual;
        var _r481_t6 = r481_xn$Capture$2Lrc8['Mark-Above'].resolve();
        var r481_TildeShape = _r481_t6.TildeShape;
        var _r481_t7 = r481_xn$Capture$2Lrc8['Symbol-Math-Relation-Common'].resolve();
        var r481_EqualHalfSpace = _r481_t7.EqualHalfSpace;
        var _r481_t8 = r481_xn$Capture$2Lrc8['Symbol-Math-Relation-Addons'].resolve();
        var r481_EqEqBarNegationImpl = _r481_t8.EqEqBarNegationImpl;
        var r481_approxDist = r481_EqualHalfSpace * 1.75;
        var r481_symMag = (r481_OperTop - r481_SymbolMid) * 0.17;
        r481_xn$ExportCapture$2Lrc4b(function () {
            var _r488_t0, _r488_t1;
            return { 'symWave': r481_symWave };
        });
        var r481_symWave = function (r489_height, r489_mul, r489_sw) {
            var _r489_t0, _r489_t1;
            return r481_TildeShape(new r481_xn$NamedParameterPair$2Lrc9b('ttop', r489_height + r481_symMag * r489_mul), new r481_xn$NamedParameterPair$2Lrc9b('tbot', r489_height - r481_symMag * r489_mul), new r481_xn$NamedParameterPair$2Lrc9b('leftEnd', r481_SB), new r481_xn$NamedParameterPair$2Lrc9b('rightEnd', r481_RightSB), new r481_xn$NamedParameterPair$2Lrc9b('hs', r1_fallback(r489_sw, r481_OperatorStroke) / 2));
        };
        r481_xn$createAndSaveGlyphImpl$2Lrc3c('sym', 8764, r481_symWave(r481_SymbolMid, 1));
        r481_xn$createAndSaveGlyphImpl$2Lrc3c('flipSym', 8765, r481_symWave(r481_SymbolMid, -1));
        r481_WithDotVariants('twoDotSym', 8763, function (r497_DrawAt, r497_kr, r497_ov) {
            var _r497_t0, _r497_t1;
            return function () {
                var _r499_t1;
                var _r499_t0 = this;
                var r499_currentGlyph = _r499_t0;
                r499_currentGlyph.include(r481_xn$referglyph$1aao('sym'), true, true);
                r499_currentGlyph.include(r497_DrawAt(r481_Middle, r481_PlusTop, r481_DotRadius * r497_kr * r481_OperatorStroke / r481_Stroke - r497_ov));
                r499_currentGlyph.include(r497_DrawAt(r481_Middle, r481_PlusBot, r481_DotRadius * r497_kr * r481_OperatorStroke / r481_Stroke - r497_ov));
                return void 0;
            };
        });
        r481_VDual('approx', 8776, 'sym', r481_approxDist);
        r481_xn$createAndSaveGlyphImpl$2Lrc3c('aapprox', 8779, function () {
            var _r505_t1;
            var _r505_t0 = this;
            var r505_currentGlyph = _r505_t0;
            r505_currentGlyph.include(r481_symWave(r481_SymbolMid + r481_approxDist, 1));
            r505_currentGlyph.include(r481_symWave(r481_SymbolMid, 1));
            r505_currentGlyph.include(r481_symWave(r481_SymbolMid - r481_approxDist, 1));
            return void 0;
        });
        r481_xn$createAndSaveGlyphImpl$2Lrc3c('approxBar', 8778, function () {
            var _r511_t1;
            var _r511_t0 = this;
            var r511_currentGlyph = _r511_t0;
            r511_currentGlyph.include(r481_symWave(r481_SymbolMid + r481_approxDist, 1));
            r511_currentGlyph.include(r481_symWave(r481_SymbolMid, 1));
            r511_currentGlyph.include(r481_HBar.m(r481_SB, r481_RightSB, r481_SymbolMid - r481_approxDist, r481_OperatorStroke));
            return void 0;
        });
        r481_xn$createAndSaveGlyphImpl$2Lrc3c('barSym', 8770, function () {
            var _r517_t1;
            var _r517_t0 = this;
            var r517_currentGlyph = _r517_t0;
            r517_currentGlyph.include(r481_xn$referglyph$1aao('sym'), r481_AS_BASE);
            r517_currentGlyph.include(r481_ApparentTranslate(0, -r481_approxDist / 2));
            r517_currentGlyph.include(r481_HBar.m(r481_SB, r481_RightSB, r481_SymbolMid + r481_approxDist / 2, r481_OperatorStroke));
            return void 0;
        });
        r481_xn$createAndSaveGlyphImpl$2Lrc3c('symEq', 8771, function () {
            var _r523_t1;
            var _r523_t0 = this;
            var r523_currentGlyph = _r523_t0;
            r523_currentGlyph.include(r481_xn$referglyph$1aao('sym'), r481_AS_BASE);
            r523_currentGlyph.include(r481_ApparentTranslate(0, r481_approxDist / 2));
            r523_currentGlyph.include(r481_HBar.m(r481_SB, r481_RightSB, r481_SymbolMid - r481_approxDist / 2, r481_OperatorStroke));
            return void 0;
        });
        r481_xn$createAndSaveGlyphImpl$2Lrc3c('symEqEq', 8773, function () {
            var _r529_t1;
            var _r529_t0 = this;
            var r529_currentGlyph = _r529_t0;
            var r529_sympShift = r481_approxDist + r481_EqualHalfSpace * 1.5;
            r529_currentGlyph.include(r481_xn$referglyph$1aao('sym'), r481_AS_BASE);
            r529_currentGlyph.include(r481_ApparentTranslate(0, r529_sympShift / 2));
            r529_currentGlyph.include(r481_HBar.m(r481_SB, r481_RightSB, r481_SymbolMid - r529_sympShift / 2 + r481_EqualHalfSpace * 1.5, r481_OperatorStroke));
            r529_currentGlyph.include(r481_HBar.m(r481_SB, r481_RightSB, r481_SymbolMid - r529_sympShift / 2, r481_OperatorStroke));
            r481_xn$createAndSaveGlyphImpl$2Lrc3c('symEqEqBarNegated', 8774, function () {
                var _r535_t1;
                var _r535_t0 = this;
                _r535_t0.include(r529_currentGlyph, true, true);
                _r535_t0.cloneRankFromGlyph(r529_currentGlyph);
                return _r535_t0.include(r481_EqEqBarNegationImpl(r481_OperatorStroke, r481_SymbolMid - r529_sympShift / 2 + r481_EqualHalfSpace * 1.5, r481_SymbolMid - r529_sympShift / 2));
            });
            return void 0;
        });
        r481_xn$createAndSaveGlyphImpl$2Lrc3c('flipSymEq', 8909, function () {
            var _r538_t1;
            var _r538_t0 = this;
            var r538_currentGlyph = _r538_t0;
            r538_currentGlyph.include(r481_xn$referglyph$1aao('flipSym'), r481_AS_BASE);
            r538_currentGlyph.include(r481_ApparentTranslate(0, r481_approxDist / 2));
            r538_currentGlyph.include(r481_HBar.m(r481_SB, r481_RightSB, r481_SymbolMid - r481_approxDist / 2, r481_OperatorStroke));
            return void 0;
        });
        r481_xn$createAndSaveGlyphImpl$2Lrc3c('flipSymEqEq', 8780, function () {
            var _r544_t1;
            var _r544_t0 = this;
            var r544_currentGlyph = _r544_t0;
            var r544_sympShift = r481_approxDist + r481_EqualHalfSpace * 1.5;
            r544_currentGlyph.include(r481_xn$referglyph$1aao('flipSym'), r481_AS_BASE);
            r544_currentGlyph.include(r481_ApparentTranslate(0, r544_sympShift / 2));
            r544_currentGlyph.include(r481_HBar.m(r481_SB, r481_RightSB, r481_SymbolMid - r544_sympShift / 2 + r481_EqualHalfSpace * 1.5, r481_OperatorStroke));
            r544_currentGlyph.include(r481_HBar.m(r481_SB, r481_RightSB, r481_SymbolMid - r544_sympShift / 2, r481_OperatorStroke));
            return void 0;
        });
        r481_WithDotVariants('oneDotSym', 10858, function (r549_DrawAt, r549_kr, r549_ov) {
            var _r549_t0, _r549_t1;
            return function () {
                var _r551_t1;
                var _r551_t0 = this;
                var r551_currentGlyph = _r551_t0;
                r551_currentGlyph.include(r481_xn$referglyph$1aao('sym'), true, true);
                r551_currentGlyph.include(r549_DrawAt(r481_Middle, r481_PlusTop, r481_DotRadius * r549_kr * r481_OperatorStroke / r481_Stroke - r549_ov));
                return void 0;
            };
        });
        r481_WithDotVariants('twoDotSymAlt', 10859, function (r554_DrawAt, r554_kr, r554_ov) {
            var _r554_t0, _r554_t1;
            return function () {
                var _r556_t1;
                var _r556_t0 = this;
                var r556_currentGlyph = _r556_t0;
                var r556_dr = r481_DotRadius * r554_kr * r481_OperatorStroke / r481_Stroke;
                r556_currentGlyph.include(r481_xn$referglyph$1aao('sym'));
                r556_currentGlyph.include(r554_DrawAt(r1_mix(r481_SB, r481_RightSB, 1 / 6), r481_PlusBot, r556_dr - r554_ov));
                r556_currentGlyph.include(r554_DrawAt(r1_mix(r481_SB, r481_RightSB, 5 / 6), r481_PlusTop, r556_dr - r554_ov));
                return void 0;
            };
        });
        r481_xn$createAndSaveGlyphImpl$2Lrc3c('symMinusSym', 10860, function () {
            var _r562_t1;
            var _r562_t0 = this;
            var r562_currentGlyph = _r562_t0;
            r562_currentGlyph.include(r481_symWave(r481_SymbolMid + r481_approxDist, 1));
            r562_currentGlyph.include(r481_HBar.m(r481_SB, r481_RightSB, r481_SymbolMid, r481_OperatorStroke));
            r562_currentGlyph.include(r481_symWave(r481_SymbolMid - r481_approxDist, 1));
            return void 0;
        });
        r481_WithDotVariants('oneDotSymEqEq', 10861, function (r566_DrawAt, r566_kr, r566_ov) {
            var _r566_t0, _r566_t1;
            return function () {
                var _r568_t1;
                var _r568_t0 = this;
                var r568_currentGlyph = _r568_t0;
                r568_currentGlyph.include(r481_xn$referglyph$1aao('symEqEq'), true, true);
                r568_currentGlyph.include(r566_DrawAt(r481_Middle, r481_PlusTop + r481_EqualHalfSpace * 1.5, r481_DotRadius * r566_kr * r481_OperatorStroke / r481_Stroke - r566_ov));
                return void 0;
            };
        });
        r481_xn$createAndSaveGlyphImpl$2Lrc3c('approxCircumflex', 10863, function () {
            var _r573_t1;
            var _r573_t0 = this;
            var r573_currentGlyph = _r573_t0;
            r573_currentGlyph.include(r481_xn$referglyph$1aao('approx'), true, true);
            r573_currentGlyph.include(r481_MarkSet.plus());
            r573_currentGlyph.include(r481_xn$referglyph$1aao('circumflexAbove'));
            r573_currentGlyph.include(r481_xn$clearanchors$1aao());
            return void 0;
        });
        r481_xn$createAndSaveGlyphImpl$2Lrc3c('approxEqEq', 10864, function () {
            var _r580_t1;
            var _r580_t0 = this;
            var r580_currentGlyph = _r580_t0;
            r580_currentGlyph.include(r481_symWave(r481_SymbolMid + r481_approxDist * 1.375, 1));
            r580_currentGlyph.include(r481_symWave(r481_SymbolMid + r481_approxDist * 0.375, 1));
            r580_currentGlyph.include(r481_HBar.m(r481_SB, r481_RightSB, r481_SymbolMid - r481_approxDist * 1.5 + r481_EqualHalfSpace * 1.5, r481_OperatorStroke));
            r580_currentGlyph.include(r481_HBar.m(r481_SB, r481_RightSB, r481_SymbolMid - r481_approxDist * 1.5, r481_OperatorStroke));
            return void 0;
        });
        return r481_xn$createAndSaveGlyphImpl$2Lrc3c('eqEqSym', 10867, function () {
            var _r587_t1;
            var _r587_t0 = this;
            var r587_currentGlyph = _r587_t0;
            var r587_sympShift = r481_approxDist + r481_EqualHalfSpace * 1.5;
            r587_currentGlyph.include(r481_xn$referglyph$1aao('sym'), r481_AS_BASE);
            r587_currentGlyph.include(r481_ApparentTranslate(0, -r587_sympShift / 2));
            r587_currentGlyph.include(r481_HBar.m(r481_SB, r481_RightSB, r481_SymbolMid + r587_sympShift / 2 - r481_EqualHalfSpace * 1.5, r481_OperatorStroke));
            r587_currentGlyph.include(r481_HBar.m(r481_SB, r481_RightSB, r481_SymbolMid + r587_sympShift / 2, r481_OperatorStroke));
            return void 0;
        });
    });
    return void 0;
});
r1_xn$GlyphBlocks$2Lrc2b.push(function (r594_xn$Capture_Ext$2Lrc2b) {
    var _r594_t0, _r594_t1;
    r594_xn$Capture_Ext$2Lrc2b['$defineGlyphBlockImpl$'](r594_xn$Capture_Ext$2Lrc2b, 'Symbol-Math-Relation-Inequality', function (r595_xn$Capture$2Lrc8, r595_xn$ExportCapture$2Lrc4b) {
        var _r595_t9, _r595_t10, _r595_t11, _r595_tag12;
        var _r595_t0 = r595_xn$Capture$2Lrc8;
        var r595_xn$createAndSaveGlyphImpl$2Lrc3c = _r595_t0['$createAndSaveGlyphImpl$'];
        var r595_xn$NamedParameterPair$2Lrc9b = _r595_t0['$NamedParameterPair$'];
        var r595_xn$assignUnicodeImpl$2Lrc8b = _r595_t0['$assignUnicodeImpl$'];
        var r595_xn$execState$2Lrc0b = _r595_t0['$execState$'];
        var _r595_t1 = r595_xn$Capture$2Lrc8.Metrics;
        var r595_Width = _r595_t1.Width;
        var r595_SB = _r595_t1.SB;
        var r595_SymbolMid = _r595_t1.SymbolMid;
        var r595_ApparentTranslate = _r595_t1.ApparentTranslate;
        var r595_Rightward = _r595_t1.Rightward;
        var r595_Leftward = _r595_t1.Leftward;
        var r595_O = _r595_t1.O;
        var r595_Stroke = _r595_t1.Stroke;
        var r595_RightSB = _r595_t1.RightSB;
        var r595_Middle = _r595_t1.Middle;
        var r595_DotRadius = _r595_t1.DotRadius;
        var r595_AdviceStroke = _r595_t1.AdviceStroke;
        var r595_OperatorStroke = _r595_t1.OperatorStroke;
        var _r595_t2 = r595_xn$Capture$2Lrc8.SpiroFns;
        var r595_corner = _r595_t2.corner;
        var r595_flat = _r595_t2.flat;
        var r595_curl = _r595_t2.curl;
        var r595_widths = _r595_t2.widths;
        var r595_heading = _r595_t2.heading;
        var r595_dispiro = _r595_t2.dispiro;
        var r595_xn$spirooutline$1aao = _r595_t2['spiro-outline'];
        var _r595_t3 = r595_xn$Capture$2Lrc8.BooleFns;
        var r595_union = _r595_t3.union;
        var r595_intersection = _r595_t3.intersection;
        var r595_difference = _r595_t3.difference;
        var _r595_t4 = r595_xn$Capture$2Lrc8.CommonShapes.resolve();
        var r595_Rect = _r595_t4.Rect;
        var r595_HBar = _r595_t4.HBar;
        var r595_AsRadical = _r595_t4.AsRadical;
        var r595_WithDotVariants = _r595_t4.WithDotVariants;
        var _r595_t5 = r595_xn$Capture$2Lrc8['Common-Derivatives'].resolve();
        var r595_xn$selectvariant$7Hrq = _r595_t5['select-variant'];
        var r595_turned = _r595_t5.turned;
        var r595_xn$derivecomposites$7Hrq = _r595_t5['derive-composites'];
        var _r595_t6 = r595_xn$Capture$2Lrc8['Symbol-Math-Relation-Common'].resolve();
        var r595_dH = _r595_t6.dH;
        var r595_dSH = _r595_t6.dSH;
        var r595_lessEqDist = _r595_t6.lessEqDist;
        var _r595_t7 = r595_xn$Capture$2Lrc8['Symbol-Math-Relation-Sym'].resolve();
        var r595_symWave = _r595_t7.symWave;
        var _r595_t8 = r595_xn$Capture$2Lrc8['Symbol-Math-Relation-Addons'].resolve();
        var r595_lesslessSW = _r595_t8.lesslessSW;
        var r595_llggHeight = _r595_t8.llggHeight;
        r595_xn$Capture$2Lrc8['Symbol-Math-Relation-Addon-Glyphs'].resolve();
        var r595_LessGreaterExpansion = function (r602_top, r602_bot, r602_l, r602_r) {
            var _r602_t0, _r602_t1;
            return Math.sqrt(1 + (r602_top - r602_bot) / (2 * (r602_r - r602_l)) * (r602_top - r602_bot) / (2 * (r602_r - r602_l)));
        };
        var r595_LessMaskShape = function (r603_top, r603_bot, r603_l, r603_r) {
            var _r603_t0, _r603_t1;
            return r595_xn$spirooutline$1aao(r595_corner(r603_r, r603_top), r595_corner(r603_r, r603_bot), r595_corner(r603_l, r1_mix(r603_bot, r603_top, 0.5)));
        };
        var r595_GreaterMaskShape = function (r604_top, r604_bot, r604_l, r604_r) {
            var _r604_t0, _r604_t1;
            return r595_xn$spirooutline$1aao(r595_corner(r604_l, r604_top), r595_corner(r604_l, r604_bot), r595_corner(r604_r, r1_mix(r604_bot, r604_top, 0.5)));
        };
        var r595_LessShapeA = function (r605_top, r605_bot, r605_l, r605_r, r605_s, r605_p) {
            var _r605_t0, _r605_t1;
            var r605_exp = r595_LessGreaterExpansion(r605_top, r605_bot, r605_l, r605_r);
            var r605_pp = r1_fallback(r605_p, 1);
            return r595_dispiro(r595_widths.center(r605_s), r595_flat(r1_mix(r605_l, r605_r, r605_pp), r1_mix(r1_mix(r605_top, r605_bot, 0.5), r605_top, r605_pp)), r595_curl(r605_l, r1_mix(r605_top, r605_bot, 0.5), r595_widths.heading(r605_s / 2 * r605_exp, r605_s / 2 * r605_exp, r595_Leftward)));
        };
        var r595_LessShapeB = function (r606_top, r606_bot, r606_l, r606_r, r606_s, r606_p) {
            var _r606_t0, _r606_t1;
            var r606_exp = r595_LessGreaterExpansion(r606_top, r606_bot, r606_l, r606_r);
            var r606_pp = r1_fallback(r606_p, 1);
            return r595_dispiro(r595_widths.center(r606_s), r595_flat(r1_mix(r606_l, r606_r, r606_pp), r1_mix(r1_mix(r606_top, r606_bot, 0.5), r606_bot, r606_pp)), r595_curl(r606_l, r1_mix(r606_top, r606_bot, 0.5), r595_widths.heading(r606_s / 2 * r606_exp, r606_s / 2 * r606_exp, r595_Leftward)));
        };
        var r595_GreaterShapeA = function (r607_top, r607_bot, r607_l, r607_r, r607_s, r607_p) {
            var _r607_t0, _r607_t1;
            var r607_exp = r595_LessGreaterExpansion(r607_top, r607_bot, r607_l, r607_r);
            var r607_pp = r1_fallback(r607_p, 1);
            return r595_dispiro(r595_widths.center(r607_s), r595_flat(r1_mix(r607_r, r607_l, r607_pp), r1_mix(r1_mix(r607_top, r607_bot, 0.5), r607_top, r607_pp)), r595_curl(r607_r, r1_mix(r607_top, r607_bot, 0.5), r595_widths.heading(r607_s / 2 * r607_exp, r607_s / 2 * r607_exp, r595_Rightward)));
        };
        var r595_GreaterShapeB = function (r608_top, r608_bot, r608_l, r608_r, r608_s, r608_p) {
            var _r608_t0, _r608_t1;
            var r608_exp = r595_LessGreaterExpansion(r608_top, r608_bot, r608_l, r608_r);
            var r608_pp = r1_fallback(r608_p, 1);
            return r595_dispiro(r595_widths.center(r608_s), r595_flat(r1_mix(r608_r, r608_l, r608_pp), r1_mix(r1_mix(r608_top, r608_bot, 0.5), r608_bot, r608_pp)), r595_curl(r608_r, r1_mix(r608_top, r608_bot, 0.5), r595_widths.heading(r608_s / 2 * r608_exp, r608_s / 2 * r608_exp, r595_Rightward)));
        };
        r595_xn$ExportCapture$2Lrc4b(function () {
            var _r610_t0, _r610_t1;
            return { 'LessShape': r595_LessShape };
        });
        var r595_LessShape = function (r611_top, r611_bot, r611_l, r611_r, r611_s) {
            var _r611_t0, _r611_t1;
            return r595_union(r595_LessShapeA(r611_top, r611_bot, r611_l, r611_r, r1_fallback(r611_s, r595_OperatorStroke)), r595_LessShapeB(r611_top, r611_bot, r611_l, r611_r, r1_fallback(r611_s, r595_OperatorStroke)));
        };
        r595_xn$ExportCapture$2Lrc4b(function () {
            var _r613_t0, _r613_t1;
            return { 'LigationLessShape': r595_LigationLessShape };
        });
        var r595_LigationLessShape = function (r614_top, r614_bot, r614_l, r614_r, r614_s, r614_t, r614_gap) {
            var _r614_t0, _r614_t1;
            return r595_union(r595_intersection(r595_Rect(r1_mix(r614_bot, r614_top, 2), r1_mix(r614_top, r614_bot, 2), r1_mix(r614_r, r614_l, 2), r614_r), r595_union(r595_LessShapeA(r614_top, r614_bot, r614_l, r614_r, r1_fallback(r614_s, r595_OperatorStroke), 2), r595_LessShapeB(r614_top, r614_bot, r614_l, r614_r, r1_fallback(r614_s, r595_OperatorStroke), 2))), r595_intersection(r595_LessMaskShape(r614_top, r614_bot, r614_l, r614_r), r595_difference(r595_dispiro(r595_widths.lhs(r1_fallback(r614_t, r595_OperatorStroke)), r595_corner(r614_r, r614_bot), r595_corner(r614_r, r614_top)), r595_Rect(r1_mix(r614_top, r614_bot, 0.5) + r614_gap / 2, r1_mix(r614_top, r614_bot, 0.5) - r614_gap / 2, r614_l + r595_O, r614_r - r595_O))));
        };
        var r595_NormalSubsetShape = function (r615_top, r615_bot, r615_l, r615_r, r615_s) {
            var _r615_t0, _r615_t1;
            return r595_LigationLessShape(r615_top, r615_bot, r615_l, r615_r, r615_s, r615_s, 0);
        };
        r595_xn$ExportCapture$2Lrc4b(function () {
            var _r617_t0, _r617_t1;
            return { 'GreaterShape': r595_GreaterShape };
        });
        var r595_GreaterShape = function (r618_top, r618_bot, r618_l, r618_r, r618_s) {
            var _r618_t0, _r618_t1;
            return r595_union(r595_GreaterShapeA(r618_top, r618_bot, r618_l, r618_r, r1_fallback(r618_s, r595_OperatorStroke)), r595_GreaterShapeB(r618_top, r618_bot, r618_l, r618_r, r1_fallback(r618_s, r595_OperatorStroke)));
        };
        r595_xn$ExportCapture$2Lrc4b(function () {
            var _r620_t0, _r620_t1;
            return { 'LigationGreaterShape': r595_LigationGreaterShape };
        });
        var r595_LigationGreaterShape = function (r621_top, r621_bot, r621_l, r621_r, r621_s, r621_t, r621_gap) {
            var _r621_t0, _r621_t1;
            return r595_union(r595_intersection(r595_Rect(r1_mix(r621_bot, r621_top, 2), r1_mix(r621_top, r621_bot, 2), r1_mix(r621_l, r621_r, 2), r621_l), r595_union(r595_GreaterShapeA(r621_top, r621_bot, r621_l, r621_r, r1_fallback(r621_s, r595_OperatorStroke), 2), r595_GreaterShapeB(r621_top, r621_bot, r621_l, r621_r, r1_fallback(r621_s, r595_OperatorStroke), 2))), r595_intersection(r595_GreaterMaskShape(r621_top, r621_bot, r621_l, r621_r), r595_difference(r595_dispiro(r595_widths.rhs(r1_fallback(r621_t, r595_OperatorStroke)), r595_corner(r621_l, r621_bot), r595_corner(r621_l, r621_top)), r595_Rect(r1_mix(r621_top, r621_bot, 0.5) + r621_gap / 2, r1_mix(r621_top, r621_bot, 0.5) - r621_gap / 2, r621_l + r595_O, r621_r - r595_O))));
        };
        var r595_NormalSupersetShape = function (r622_top, r622_bot, r622_l, r622_r, r622_s) {
            var _r622_t0, _r622_t1;
            return r595_LigationGreaterShape(r622_top, r622_bot, r622_l, r622_r, r622_s, r622_s, 0);
        };
        r595_xn$createAndSaveGlyphImpl$2Lrc3c('less', '<', function () {
            var _r625_t1;
            var _r625_t0 = this;
            var r625_currentGlyph = _r625_t0;
            r625_currentGlyph.include(r595_LessShape(r595_SymbolMid + r595_dH, r595_SymbolMid - r595_dH, r595_SB, r595_RightSB));
            return void 0;
        });
        r595_WithDotVariants('lessDot', 8918, function (r627_DrawAt, r627_kr, r627_ov) {
            var _r627_t0, _r627_t1;
            return function () {
                var _r629_t1;
                var _r629_t0 = this;
                var r629_currentGlyph = _r629_t0;
                r629_currentGlyph.include(r595_LessShape(r595_SymbolMid + r595_dH, r595_SymbolMid - r595_dH, r595_SB, r595_RightSB, r595_AdviceStroke(4)), true, true);
                r629_currentGlyph.include(r627_DrawAt(r595_RightSB - r595_DotRadius, r595_SymbolMid, r595_DotRadius * r627_kr * r595_AdviceStroke(4) / r595_Stroke - r627_ov));
                return void 0;
            };
        });
        r595_xn$createAndSaveGlyphImpl$2Lrc3c('normalSubsetOf', 8882, function () {
            var _r634_t1;
            var _r634_t0 = this;
            var r634_currentGlyph = _r634_t0;
            r634_currentGlyph.include(r595_NormalSubsetShape(r595_SymbolMid + r595_dH, r595_SymbolMid - r595_dH, r595_SB, r595_RightSB));
            return void 0;
        });
        r595_xn$createAndSaveGlyphImpl$2Lrc3c('greater', '>', function () {
            var _r638_t1;
            var _r638_t0 = this;
            var r638_currentGlyph = _r638_t0;
            r638_currentGlyph.include(r595_GreaterShape(r595_SymbolMid + r595_dH, r595_SymbolMid - r595_dH, r595_SB, r595_RightSB));
            return void 0;
        });
        r595_WithDotVariants('greaterDot', 8919, function (r640_DrawAt, r640_kr, r640_ov) {
            var _r640_t0, _r640_t1;
            return function () {
                var _r642_t1;
                var _r642_t0 = this;
                var r642_currentGlyph = _r642_t0;
                r642_currentGlyph.include(r595_GreaterShape(r595_SymbolMid + r595_dH, r595_SymbolMid - r595_dH, r595_SB, r595_RightSB, r595_AdviceStroke(4)), true, true);
                r642_currentGlyph.include(r640_DrawAt(r595_SB + r595_DotRadius, r595_SymbolMid, r595_DotRadius * r640_kr * r595_AdviceStroke(4) / r595_Stroke - r640_ov));
                return void 0;
            };
        });
        r595_xn$createAndSaveGlyphImpl$2Lrc3c('normalSupersetOf', 8883, function () {
            var _r647_t1;
            var _r647_t0 = this;
            var r647_currentGlyph = _r647_t0;
            r647_currentGlyph.include(r595_NormalSupersetShape(r595_SymbolMid + r595_dH, r595_SymbolMid - r595_dH, r595_SB, r595_RightSB));
            return void 0;
        });
        r595_xn$createAndSaveGlyphImpl$2Lrc3c('lessEqUpper', null, r595_AsRadical(r595_LessShape(r595_SymbolMid + r595_dSH + r595_lessEqDist, r595_SymbolMid - r595_dSH + r595_lessEqDist, r595_SB, r595_RightSB)));
        r595_xn$createAndSaveGlyphImpl$2Lrc3c('greaterEqUpper', null, r595_AsRadical(r595_GreaterShape(r595_SymbolMid + r595_dSH + r595_lessEqDist, r595_SymbolMid - r595_dSH + r595_lessEqDist, r595_SB, r595_RightSB)));
        r595_xn$createAndSaveGlyphImpl$2Lrc3c('normalSubsetUpper', null, r595_AsRadical(r595_NormalSubsetShape(r595_SymbolMid + r595_dSH + r595_lessEqDist, r595_SymbolMid - r595_dSH + r595_lessEqDist, r595_SB, r595_RightSB)));
        r595_xn$createAndSaveGlyphImpl$2Lrc3c('normalSupersetUpper', null, r595_AsRadical(r595_NormalSupersetShape(r595_SymbolMid + r595_dSH + r595_lessEqDist, r595_SymbolMid - r595_dSH + r595_lessEqDist, r595_SB, r595_RightSB)));
        r595_xn$derivecomposites$7Hrq('less.narrow', null, 'lessEqUpper', r595_ApparentTranslate(0, -r595_lessEqDist));
        r595_xn$derivecomposites$7Hrq('lessEq', 8804, 'lessEqUpper', 'eqLower');
        r595_xn$derivecomposites$7Hrq('lessEqBarNegated', 10887, 'lessEqUpper', 'eqBarNegatedLower');
        r595_xn$derivecomposites$7Hrq('lessSym', 8818, 'lessEqUpper', 'symLower');
        r595_xn$derivecomposites$7Hrq('lessSymBarNegated', 8934, 'lessEqUpper', 'symBarNegatedLower');
        r595_xn$derivecomposites$7Hrq('lessEqSlant', 10877, 'lessEqUpper', r595_LessShapeB(r595_SymbolMid + r595_dH - r595_lessEqDist, r595_SymbolMid - r595_dH - r595_lessEqDist, r595_SB, r595_RightSB, r595_OperatorStroke));
        r595_WithDotVariants('lessEqSlantDot', 10879, function (r653_DrawAt, r653_kr, r653_ov) {
            var _r653_t0, _r653_t1;
            return function () {
                var _r655_t1;
                var _r655_t0 = this;
                var r655_currentGlyph = _r655_t0;
                r655_currentGlyph.include(r595_LessShape(r595_SymbolMid + r595_dSH + r595_lessEqDist, r595_SymbolMid - r595_dSH + r595_lessEqDist, r595_SB, r595_RightSB, r595_AdviceStroke(4)), true, true);
                r655_currentGlyph.include(r595_LessShapeB(r595_SymbolMid + r595_dH - r595_lessEqDist, r595_SymbolMid - r595_dH - r595_lessEqDist, r595_SB, r595_RightSB, r595_AdviceStroke(4)));
                r655_currentGlyph.include(r653_DrawAt(r595_RightSB - r595_DotRadius, r595_SymbolMid + r595_lessEqDist, r595_DotRadius * r653_kr * r595_AdviceStroke(4) / r595_Stroke - r653_ov));
                return void 0;
            };
        });
        r595_xn$derivecomposites$7Hrq('greater.narrow', null, 'greaterEqUpper', r595_ApparentTranslate(0, -r595_lessEqDist));
        r595_xn$derivecomposites$7Hrq('greaterEq', 8805, 'greaterEqUpper', 'eqLower');
        r595_xn$derivecomposites$7Hrq('greaterEqBarNegated', 10888, 'greaterEqUpper', 'eqBarNegatedLower');
        r595_xn$derivecomposites$7Hrq('greaterSym', 8819, 'greaterEqUpper', 'symLower');
        r595_xn$derivecomposites$7Hrq('greaterSymBarNegated', 8935, 'greaterEqUpper', 'symBarNegatedLower');
        r595_xn$derivecomposites$7Hrq('greaterEqSlant', 10878, 'greaterEqUpper', r595_GreaterShapeB(r595_SymbolMid + r595_dH - r595_lessEqDist, r595_SymbolMid - r595_dH - r595_lessEqDist, r595_SB, r595_RightSB, r595_OperatorStroke));
        r595_WithDotVariants('greaterEqSlantDot', 10880, function (r659_DrawAt, r659_kr, r659_ov) {
            var _r659_t0, _r659_t1;
            return function () {
                var _r661_t1;
                var _r661_t0 = this;
                var r661_currentGlyph = _r661_t0;
                r661_currentGlyph.include(r595_GreaterShape(r595_SymbolMid + r595_dSH + r595_lessEqDist, r595_SymbolMid - r595_dSH + r595_lessEqDist, r595_SB, r595_RightSB, r595_AdviceStroke(4)), true, true);
                r661_currentGlyph.include(r595_GreaterShapeB(r595_SymbolMid + r595_dH - r595_lessEqDist, r595_SymbolMid - r595_dH - r595_lessEqDist, r595_SB, r595_RightSB, r595_AdviceStroke(4)));
                r661_currentGlyph.include(r659_DrawAt(r595_SB + r595_DotRadius, r595_SymbolMid + r595_lessEqDist, r595_DotRadius * r659_kr * r595_AdviceStroke(4) / r595_Stroke - r659_ov));
                return void 0;
            };
        });
        r595_xn$derivecomposites$7Hrq('normalSubsetEq', 8884, 'normalSubsetUpper', 'eqLower');
        r595_xn$derivecomposites$7Hrq('normalSupersetEq', 8885, 'normalSupersetUpper', 'eqLower');
        r595_turned('turnGreaterEq', 8924, 'greaterEq', r595_Middle, r595_SymbolMid);
        r595_turned('turnLessEq', 8925, 'lessEq', r595_Middle, r595_SymbolMid);
        (function () {
            var r666_l = 0.3 * r595_Width;
            var r666_r = 2 * r595_Width - r666_l;
            var r666_l2 = r666_l - r595_Width;
            var r666_r2 = r666_r - r595_Width;
            r595_xn$createAndSaveGlyphImpl$2Lrc3c('less.lig2', null, function () {
                var _r669_t1;
                var _r669_t0 = this;
                var r669_currentGlyph = _r669_t0;
                r1_Joining.set(r669_currentGlyph, r1_Joining.Classes.Right);
                r669_currentGlyph.include(r595_LessShape(r595_SymbolMid + r595_dH + r595_lessEqDist, r595_SymbolMid - r595_dH + r595_lessEqDist, r666_l, r666_r));
                return void 0;
            });
            r595_xn$createAndSaveGlyphImpl$2Lrc3c('greater.lig2', null, function () {
                var _r673_t1;
                var _r673_t0 = this;
                var r673_currentGlyph = _r673_t0;
                r1_Joining.set(r673_currentGlyph, r1_Joining.Classes.Right);
                r673_currentGlyph.include(r595_GreaterShape(r595_SymbolMid + r595_dH + r595_lessEqDist, r595_SymbolMid - r595_dH + r595_lessEqDist, r666_l, r666_r));
                return void 0;
            });
            r595_xn$createAndSaveGlyphImpl$2Lrc3c('eq.at-lteq.lig2.flat', null, function () {
                var _r677_t1;
                var _r677_t0 = this;
                var r677_currentGlyph = _r677_t0;
                r1_Joining.set(r677_currentGlyph, r1_Joining.Classes.Left);
                r677_currentGlyph.include(r595_HBar.m(r666_l2, r666_r2, r595_SymbolMid - r595_dH - r595_lessEqDist, r595_OperatorStroke));
                r595_xn$createAndSaveGlyphImpl$2Lrc3c('eq.at-gteq.lig2.flat', null, function () {
                    var _r681_t1;
                    var _r681_t0 = this;
                    _r681_t0.include(r677_currentGlyph, true, true);
                    return _r681_t0.cloneRankFromGlyph(r677_currentGlyph);
                });
                return void 0;
            });
            r595_xn$createAndSaveGlyphImpl$2Lrc3c('eq.at-lteq.lig2.slanted', null, function () {
                var _r684_t1;
                var _r684_t0 = this;
                var r684_currentGlyph = _r684_t0;
                r1_Joining.set(r684_currentGlyph, r1_Joining.Classes.Left);
                r684_currentGlyph.include(r595_LessShapeB(r595_SymbolMid + r595_dH - r595_lessEqDist, r595_SymbolMid - r595_dH - r595_lessEqDist, r666_l2, r666_r2, r595_OperatorStroke));
                return void 0;
            });
            return r595_xn$createAndSaveGlyphImpl$2Lrc3c('eq.at-gteq.lig2.slanted', null, function () {
                var _r688_t1;
                var _r688_t0 = this;
                var r688_currentGlyph = _r688_t0;
                r1_Joining.set(r688_currentGlyph, r1_Joining.Classes.Left);
                r688_currentGlyph.include(r595_GreaterShapeB(r595_SymbolMid + r595_dH - r595_lessEqDist, r595_SymbolMid - r595_dH - r595_lessEqDist, r666_l2, r666_r2, r595_OperatorStroke));
                return void 0;
            });
        }());
        r595_xn$selectvariant$7Hrq('eq.at-lteq.lig2');
        r595_xn$selectvariant$7Hrq('eq.at-gteq.lig2');
        r595_xn$createAndSaveGlyphImpl$2Lrc3c('lessEqEqUpper', null, r595_AsRadical(r595_LessShape(r595_SymbolMid + r595_dSH + r595_lessEqDist, r595_SymbolMid - r595_dSH + r595_lessEqDist * 1.75, r595_SB, r595_RightSB, r595_lesslessSW)));
        r595_xn$createAndSaveGlyphImpl$2Lrc3c('greaterEqEqUpper', null, r595_AsRadical(r595_GreaterShape(r595_SymbolMid + r595_dSH + r595_lessEqDist, r595_SymbolMid - r595_dSH + r595_lessEqDist * 1.75, r595_SB, r595_RightSB, r595_lesslessSW)));
        r595_xn$derivecomposites$7Hrq('lessEqEq', 8806, 'lessEqEqUpper', 'eqEqLower');
        r595_xn$derivecomposites$7Hrq('lessEqEqBarNegated', 8808, 'lessEqEqUpper', 'eqEqBarNegatedLower');
        r595_xn$derivecomposites$7Hrq('lessSymSym', 10885, 'lessEqEqUpper', 'symSymLower');
        r595_xn$derivecomposites$7Hrq('lessSymSymBarNegated', 10889, 'lessEqEqUpper', 'symSymBarNegatedLower');
        r595_xn$derivecomposites$7Hrq('greaterEqEq', 8807, 'greaterEqEqUpper', 'eqEqLower');
        r595_xn$derivecomposites$7Hrq('greaterEqEqBarNegated', 8809, 'greaterEqEqUpper', 'eqEqBarNegatedLower');
        r595_xn$derivecomposites$7Hrq('greaterSymSym', 10886, 'greaterEqEqUpper', 'symSymLower');
        r595_xn$derivecomposites$7Hrq('greaterSymSymBarNegated', 10890, 'greaterEqEqUpper', 'symSymBarNegatedLower');
        r595_turned('turnGreaterEqSlant', 10901, 'greaterEqSlant', r595_Middle, r595_SymbolMid);
        r595_turned('turnLessEqSlant', 10902, 'lessEqSlant', r595_Middle, r595_SymbolMid);
        r595_turned('turnGreaterEqSlantDot', 10903, 'greaterEqSlantDot', r595_Middle, r595_SymbolMid);
        r595_turned('turnLessEqSlantDot', 10904, 'lessEqSlantDot', r595_Middle, r595_SymbolMid);
        r595_turned('turnGreaterEqEq', 10905, 'greaterEqEq', r595_Middle, r595_SymbolMid);
        r595_turned('turnLessEqEq', 10906, 'lessEqEq', r595_Middle, r595_SymbolMid);
        r595_turned('turnGreaterSym', 10909, 'greaterSym', r595_Middle, r595_SymbolMid);
        r595_turned('turnLessSym', 10910, 'lessSym', r595_Middle, r595_SymbolMid);
        r595_xn$createAndSaveGlyphImpl$2Lrc3c('lessGreater', 8822, function () {
            var _r694_t1;
            var _r694_t0 = this;
            var r694_currentGlyph = _r694_t0;
            r694_currentGlyph.include(r595_LessShape(r595_SymbolMid + r595_llggHeight / 2, r595_SymbolMid - r595_llggHeight / 6 + r595_lessEqDist, r595_SB, r595_RightSB, r595_lesslessSW));
            r694_currentGlyph.include(r595_GreaterShape(r595_SymbolMid + r595_llggHeight / 6 - r595_lessEqDist, r595_SymbolMid - r595_llggHeight / 2, r595_SB, r595_RightSB, r595_lesslessSW));
            return void 0;
        });
        r595_xn$createAndSaveGlyphImpl$2Lrc3c('greaterLess', 8823, function () {
            var _r699_t1;
            var _r699_t0 = this;
            var r699_currentGlyph = _r699_t0;
            r699_currentGlyph.include(r595_GreaterShape(r595_SymbolMid + r595_llggHeight / 2, r595_SymbolMid - r595_llggHeight / 6 + r595_lessEqDist, r595_SB, r595_RightSB, r595_lesslessSW));
            r699_currentGlyph.include(r595_LessShape(r595_SymbolMid + r595_llggHeight / 6 - r595_lessEqDist, r595_SymbolMid - r595_llggHeight / 2, r595_SB, r595_RightSB, r595_lesslessSW));
            return void 0;
        });
        r595_xn$createAndSaveGlyphImpl$2Lrc3c('lessEqGreater', 8922, function () {
            var _r704_t1;
            var _r704_t0 = this;
            var r704_currentGlyph = _r704_t0;
            r704_currentGlyph.include(r595_LessShape(r595_SymbolMid + r595_llggHeight / 2 + r595_lessEqDist, r595_SymbolMid - r595_llggHeight / 6 + r595_lessEqDist * 2, r595_SB, r595_RightSB, r595_lesslessSW));
            r704_currentGlyph.include(r595_GreaterShape(r595_SymbolMid + r595_llggHeight / 6 - r595_lessEqDist * 2, r595_SymbolMid - r595_llggHeight / 2 - r595_lessEqDist, r595_SB, r595_RightSB, r595_lesslessSW));
            r704_currentGlyph.include(r595_HBar.m(r595_SB, r595_RightSB, r595_SymbolMid, r595_lesslessSW));
            return void 0;
        });
        r595_xn$createAndSaveGlyphImpl$2Lrc3c('greaterEqLess', 8923, function () {
            var _r710_t1;
            var _r710_t0 = this;
            var r710_currentGlyph = _r710_t0;
            r710_currentGlyph.include(r595_GreaterShape(r595_SymbolMid + r595_llggHeight / 2 + r595_lessEqDist, r595_SymbolMid - r595_llggHeight / 6 + r595_lessEqDist * 2, r595_SB, r595_RightSB, r595_lesslessSW));
            r710_currentGlyph.include(r595_LessShape(r595_SymbolMid + r595_llggHeight / 6 - r595_lessEqDist * 2, r595_SymbolMid - r595_llggHeight / 2 - r595_lessEqDist, r595_SB, r595_RightSB, r595_lesslessSW));
            r710_currentGlyph.include(r595_HBar.m(r595_SB, r595_RightSB, r595_SymbolMid, r595_lesslessSW));
            return void 0;
        });
        r595_xn$createAndSaveGlyphImpl$2Lrc3c('lessless', 8810, function () {
            var _r716_t1;
            var _r716_t0 = this;
            var r716_currentGlyph = _r716_t0;
            r716_currentGlyph.include(r595_LessShape(r595_SymbolMid + r595_dH, r595_SymbolMid - r595_dH, r595_SB - r595_lessEqDist / 2, r595_RightSB - r595_lessEqDist * 2, r595_lesslessSW));
            r716_currentGlyph.include(r595_LessShape(r595_SymbolMid + r595_dH, r595_SymbolMid - r595_dH, r595_SB + r595_lessEqDist * 2, r595_RightSB + r595_lessEqDist / 2, r595_lesslessSW));
            return void 0;
        });
        return r595_xn$createAndSaveGlyphImpl$2Lrc3c('greatergreater', 8811, function () {
            var _r721_t1;
            var _r721_t0 = this;
            var r721_currentGlyph = _r721_t0;
            r721_currentGlyph.include(r595_GreaterShape(r595_SymbolMid + r595_dH, r595_SymbolMid - r595_dH, r595_SB - r595_lessEqDist / 2, r595_RightSB - r595_lessEqDist * 2, r595_lesslessSW));
            r721_currentGlyph.include(r595_GreaterShape(r595_SymbolMid + r595_dH, r595_SymbolMid - r595_dH, r595_SB + r595_lessEqDist * 2, r595_RightSB + r595_lessEqDist / 2, r595_lesslessSW));
            return void 0;
        });
    });
    return void 0;
});
r1_xn$GlyphBlocks$2Lrc2b.push(function (r726_xn$Capture_Ext$2Lrc2b) {
    var _r726_t0, _r726_t1;
    r726_xn$Capture_Ext$2Lrc2b['$defineGlyphBlockImpl$'](r726_xn$Capture_Ext$2Lrc2b, 'Symbol-Math-Relation-Precedes-Succeeds', function (r727_xn$Capture$2Lrc8, r727_xn$ExportCapture$2Lrc4b) {
        var _r727_t8, _r727_t9;
        var _r727_t0 = r727_xn$Capture$2Lrc8;
        var r727_xn$createAndSaveGlyphImpl$2Lrc3c = _r727_t0['$createAndSaveGlyphImpl$'];
        var r727_xn$NamedParameterPair$2Lrc9b = _r727_t0['$NamedParameterPair$'];
        var r727_xn$assignUnicodeImpl$2Lrc8b = _r727_t0['$assignUnicodeImpl$'];
        var r727_xn$execState$2Lrc0b = _r727_t0['$execState$'];
        var _r727_t1 = r727_xn$Capture$2Lrc8.Metrics;
        var r727_SB = _r727_t1.SB;
        var r727_SymbolMid = _r727_t1.SymbolMid;
        var r727_ApparentTranslate = _r727_t1.ApparentTranslate;
        var r727_Rightward = _r727_t1.Rightward;
        var r727_Leftward = _r727_t1.Leftward;
        var r727_CThin = _r727_t1.CThin;
        var r727_RightSB = _r727_t1.RightSB;
        var r727_Middle = _r727_t1.Middle;
        var r727_OperatorStroke = _r727_t1.OperatorStroke;
        var _r727_t2 = r727_xn$Capture$2Lrc8.SpiroFns;
        var r727_g4 = _r727_t2.g4;
        var r727_end = _r727_t2.end;
        var r727_straight = _r727_t2.straight;
        var r727_widths = _r727_t2.widths;
        var r727_heading = _r727_t2.heading;
        var r727_dispiro = _r727_t2.dispiro;
        var _r727_t3 = r727_xn$Capture$2Lrc8.BooleFns;
        var _r727_t4 = r727_xn$Capture$2Lrc8.CommonShapes.resolve();
        var r727_AsRadical = _r727_t4.AsRadical;
        var _r727_t5 = r727_xn$Capture$2Lrc8['Common-Derivatives'].resolve();
        var r727_turned = _r727_t5.turned;
        var r727_xn$derivecomposites$7Hrq = _r727_t5['derive-composites'];
        var _r727_t6 = r727_xn$Capture$2Lrc8['Symbol-Math-Relation-Common'].resolve();
        var r727_dH = _r727_t6.dH;
        var r727_dSH = _r727_t6.dSH;
        var r727_lessEqDist = _r727_t6.lessEqDist;
        var _r727_t7 = r727_xn$Capture$2Lrc8['Symbol-Math-Relation-Addons'].resolve();
        var r727_lesslessSW = _r727_t7.lesslessSW;
        r727_xn$Capture$2Lrc8['Symbol-Math-Relation-Addon-Glyphs'].resolve();
        var r727_PrecedesShapeA = function (r733_top, r733_bot, r733_l, r733_r, r733_s, r733_cth) {
            var _r733_t0, _r733_t1;
            var r733_fine = r733_s * r733_cth;
            return r727_dispiro(r727_widths.center(r733_s), r727_g4(r733_r, r733_top), r727_straight.left.end(r733_l, r1_mix(r733_top, r733_bot, 0.5) + r733_s / 2, r727_widths.heading(r733_fine, 0, r727_Leftward)));
        };
        var r727_PrecedesShapeB = function (r734_top, r734_bot, r734_l, r734_r, r734_s, r734_cth) {
            var _r734_t0, _r734_t1;
            var r734_fine = r734_s * r734_cth;
            return r727_dispiro(r727_widths.center(r734_s), r727_g4(r734_r, r734_bot), r727_straight.left.end(r734_l, r1_mix(r734_top, r734_bot, 0.5) - r734_s / 2, r727_widths.heading(0, r734_fine, r727_Leftward)));
        };
        var r727_SucceedsShapeA = function (r735_top, r735_bot, r735_l, r735_r, r735_s, r735_cth) {
            var _r735_t0, _r735_t1;
            var r735_fine = r735_s * r735_cth;
            return r727_dispiro(r727_widths.center(r735_s), r727_g4(r735_l, r735_top), r727_straight.right.end(r735_r, r1_mix(r735_top, r735_bot, 0.5) + r735_s / 2, r727_widths.heading(0, r735_fine, r727_Rightward)));
        };
        var r727_SucceedsShapeB = function (r736_top, r736_bot, r736_l, r736_r, r736_s, r736_cth) {
            var _r736_t0, _r736_t1;
            var r736_fine = r736_s * r736_cth;
            return r727_dispiro(r727_widths.center(r736_s), r727_g4(r736_l, r736_bot), r727_straight.right.end(r736_r, r1_mix(r736_top, r736_bot, 0.5) - r736_s / 2, r727_widths.heading(r736_fine, 0, r727_Rightward)));
        };
        var r727_PrecedesShape = function (r737_top, r737_bot, r737_l, r737_r, r737_s) {
            var _r737_t0, _r737_t1;
            return function () {
                var _r739_t1;
                var _r739_t0 = this;
                var r739_currentGlyph = _r739_t0;
                r739_currentGlyph.include(r727_PrecedesShapeA(r737_top, r737_bot, r737_l, r737_r, r1_fallback(r737_s, r727_OperatorStroke), r727_CThin));
                r739_currentGlyph.include(r727_PrecedesShapeB(r737_top, r737_bot, r737_l, r737_r, r1_fallback(r737_s, r727_OperatorStroke), r727_CThin));
                return void 0;
            };
        };
        var r727_SucceedsShape = function (r742_top, r742_bot, r742_l, r742_r, r742_s) {
            var _r742_t0, _r742_t1;
            return function () {
                var _r744_t1;
                var _r744_t0 = this;
                var r744_currentGlyph = _r744_t0;
                r744_currentGlyph.include(r727_SucceedsShapeA(r742_top, r742_bot, r742_l, r742_r, r1_fallback(r742_s, r727_OperatorStroke), r727_CThin));
                r744_currentGlyph.include(r727_SucceedsShapeB(r742_top, r742_bot, r742_l, r742_r, r1_fallback(r742_s, r727_OperatorStroke), r727_CThin));
                return void 0;
            };
        };
        r727_xn$createAndSaveGlyphImpl$2Lrc3c('precedes', 8826, r727_AsRadical(r727_PrecedesShape(r727_SymbolMid + r727_dH, r727_SymbolMid - r727_dH, r727_SB, r727_RightSB)));
        r727_xn$createAndSaveGlyphImpl$2Lrc3c('succeeds', 8827, r727_AsRadical(r727_SucceedsShape(r727_SymbolMid + r727_dH, r727_SymbolMid - r727_dH, r727_SB, r727_RightSB)));
        r727_xn$createAndSaveGlyphImpl$2Lrc3c('precedesEqUpper', null, r727_AsRadical(r727_PrecedesShape(r727_SymbolMid + r727_dSH + r727_lessEqDist, r727_SymbolMid - r727_dSH + r727_lessEqDist, r727_SB, r727_RightSB)));
        r727_xn$createAndSaveGlyphImpl$2Lrc3c('precedesEqEqUpper', null, r727_AsRadical(r727_PrecedesShape(r727_SymbolMid + r727_dSH + r727_lessEqDist, r727_SymbolMid - r727_dSH + r727_lessEqDist * 1.75, r727_SB, r727_RightSB, r727_lesslessSW)));
        r727_xn$createAndSaveGlyphImpl$2Lrc3c('succeedsEqUpper', null, r727_AsRadical(r727_SucceedsShape(r727_SymbolMid + r727_dSH + r727_lessEqDist, r727_SymbolMid - r727_dSH + r727_lessEqDist, r727_SB, r727_RightSB)));
        r727_xn$createAndSaveGlyphImpl$2Lrc3c('succeedsEqEqUpper', null, r727_AsRadical(r727_SucceedsShape(r727_SymbolMid + r727_dSH + r727_lessEqDist, r727_SymbolMid - r727_dSH + r727_lessEqDist * 1.75, r727_SB, r727_RightSB, r727_lesslessSW)));
        r727_xn$derivecomposites$7Hrq('precedes.narrow', null, 'precedesEqUpper', r727_ApparentTranslate(0, -r727_lessEqDist));
        r727_xn$derivecomposites$7Hrq('precedesEq', 10927, 'precedesEqUpper', 'eqLower');
        r727_xn$derivecomposites$7Hrq('precedesEqBarNegated', 10929, 'precedesEqUpper', 'eqBarNegatedLower');
        r727_xn$derivecomposites$7Hrq('precedesSym', 8830, 'precedesEqUpper', 'symLower');
        r727_xn$derivecomposites$7Hrq('precedesSymBarNegated', 8936, 'precedesEqUpper', 'symBarNegatedLower');
        r727_xn$derivecomposites$7Hrq('precedesEqSlant', 8828, 'precedesEqUpper', r727_PrecedesShapeB(r727_SymbolMid + r727_dH - r727_lessEqDist, r727_SymbolMid - r727_dH - r727_lessEqDist, r727_SB, r727_RightSB, r727_OperatorStroke, 1));
        r727_xn$derivecomposites$7Hrq('precedesEqEq', 10931, 'precedesEqEqUpper', 'eqEqLower');
        r727_xn$derivecomposites$7Hrq('precedesEqEqBarNegated', 10933, 'precedesEqEqUpper', 'eqEqBarNegatedLower');
        r727_xn$derivecomposites$7Hrq('precedesSymSym', 10935, 'precedesEqEqUpper', 'symSymLower');
        r727_xn$derivecomposites$7Hrq('precedesSymSymBarNegated', 10937, 'precedesEqEqUpper', 'symSymBarNegatedLower');
        r727_xn$derivecomposites$7Hrq('succeeds.narrow', null, 'succeedsEqUpper', r727_ApparentTranslate(0, -r727_lessEqDist));
        r727_xn$derivecomposites$7Hrq('succeedsEq', 10928, 'succeedsEqUpper', 'eqLower');
        r727_xn$derivecomposites$7Hrq('succeedsEqBarNegated', 10930, 'succeedsEqUpper', 'eqBarNegatedLower');
        r727_xn$derivecomposites$7Hrq('succeedsSym', 8831, 'succeedsEqUpper', 'symLower');
        r727_xn$derivecomposites$7Hrq('succeedsSymBarNegated', 8937, 'succeedsEqUpper', 'symBarNegatedLower');
        r727_xn$derivecomposites$7Hrq('succeedsEqSlant', 8829, 'succeedsEqUpper', r727_SucceedsShapeB(r727_SymbolMid + r727_dH - r727_lessEqDist, r727_SymbolMid - r727_dH - r727_lessEqDist, r727_SB, r727_RightSB, r727_OperatorStroke, 1));
        r727_xn$derivecomposites$7Hrq('succeedsEqEq', 10932, 'succeedsEqEqUpper', 'eqEqLower');
        r727_xn$derivecomposites$7Hrq('succeedsEqEqBarNegated', 10934, 'succeedsEqEqUpper', 'eqEqBarNegatedLower');
        r727_xn$derivecomposites$7Hrq('succeedsSymSym', 10936, 'succeedsEqEqUpper', 'symSymLower');
        r727_xn$derivecomposites$7Hrq('succeedsSymSymBarNegated', 10938, 'succeedsEqEqUpper', 'symSymBarNegatedLower');
        r727_turned('turnSucceedsEqSlant', 8926, 'succeedsEqSlant', r727_Middle, r727_SymbolMid);
        return r727_turned('turnPrecedesEqSlant', 8927, 'precedesEqSlant', r727_Middle, r727_SymbolMid);
    });
    return void 0;
});
r1_xn$GlyphBlocks$2Lrc2b.push(function (r755_xn$Capture_Ext$2Lrc2b) {
    var _r755_t0, _r755_t1;
    r755_xn$Capture_Ext$2Lrc2b['$defineGlyphBlockImpl$'](r755_xn$Capture_Ext$2Lrc2b, 'Symbol-Math-Relation-Precedes-Succeeds-Under-Relation', function (r756_xn$Capture$2Lrc8, r756_xn$ExportCapture$2Lrc4b) {
        var _r756_t7, _r756_t8;
        var _r756_t0 = r756_xn$Capture$2Lrc8;
        var r756_xn$createAndSaveGlyphImpl$2Lrc3c = _r756_t0['$createAndSaveGlyphImpl$'];
        var r756_xn$NamedParameterPair$2Lrc9b = _r756_t0['$NamedParameterPair$'];
        var r756_xn$assignUnicodeImpl$2Lrc8b = _r756_t0['$assignUnicodeImpl$'];
        var r756_xn$execState$2Lrc0b = _r756_t0['$execState$'];
        var _r756_t1 = r756_xn$Capture$2Lrc8.Metrics;
        var r756_SB = _r756_t1.SB;
        var r756_SymbolMid = _r756_t1.SymbolMid;
        var r756_Upward = _r756_t1.Upward;
        var r756_Downward = _r756_t1.Downward;
        var r756_Rightward = _r756_t1.Rightward;
        var r756_Leftward = _r756_t1.Leftward;
        var r756_O = _r756_t1.O;
        var r756_CThin = _r756_t1.CThin;
        var r756_RightSB = _r756_t1.RightSB;
        var r756_OperatorStroke = _r756_t1.OperatorStroke;
        var _r756_t2 = r756_xn$Capture$2Lrc8.SpiroFns;
        var r756_g4 = _r756_t2.g4;
        var r756_end = _r756_t2.end;
        var r756_straight = _r756_t2.straight;
        var r756_widths = _r756_t2.widths;
        var r756_heading = _r756_t2.heading;
        var r756_archv = _r756_t2.archv;
        var r756_arcvh = _r756_t2.arcvh;
        var r756_dispiro = _r756_t2.dispiro;
        var _r756_t3 = r756_xn$Capture$2Lrc8.BooleFns;
        var _r756_t4 = r756_xn$Capture$2Lrc8.CommonShapes.resolve();
        var r756_FlipAround = _r756_t4.FlipAround;
        var r756_AsRadical = _r756_t4.AsRadical;
        var _r756_t5 = r756_xn$Capture$2Lrc8['Common-Derivatives'].resolve();
        var _r756_t6 = r756_xn$Capture$2Lrc8['Symbol-Math-Relation-Common'].resolve();
        var r756_dH = _r756_t6.dH;
        var r756_PrecedesUnderRelationShape = function (r760_t, r760_b, r760_l, r760_r, r760_s) {
            var _r760_t0, _r760_t1;
            return function () {
                var _r762_t1;
                var _r762_t0 = this;
                var r762_currentGlyph = _r762_t0;
                var r762_yBias = r760_s * 0.375;
                var r762_fine = r760_s * r756_CThin;
                var r762_hookDepth = Math.max((r760_r - r760_l) / 4, r760_s * 2);
                var r762_hookWidth = Math.max((r760_t - r760_b) / 6, r760_s * 1.25);
                r762_currentGlyph.include(r756_dispiro(r756_straight.right.start(r760_r - r762_hookDepth, r760_t - r756_O + r762_yBias, r756_widths.rhs.heading(r760_s, r756_Rightward)), r756_archv(), r756_g4.down.mid(r760_r, r760_t - r762_hookWidth + r762_yBias, r756_heading(r756_Downward)), r756_arcvh(), r756_straight.left.end(r760_l, r1_mix(r760_t, r760_b, 0.5) + r760_s / 2 - r762_fine, r756_widths.rhs.heading(r762_fine, r756_Leftward))));
                r762_currentGlyph.include(r756_dispiro(r756_straight.right.start(r760_r - r762_hookDepth, r760_b + r756_O - r762_yBias, r756_widths.lhs.heading(r760_s, r756_Rightward)), r756_archv(), r756_g4.up.mid(r760_r, r760_b + r762_hookWidth - r762_yBias, r756_heading(r756_Upward)), r756_arcvh(), r756_straight.left.end(r760_l, r1_mix(r760_t, r760_b, 0.5) - r760_s / 2 + r762_fine, r756_widths.lhs.heading(r762_fine, r756_Leftward))));
                return void 0;
            };
        };
        var r756_SucceedsUnderRelationShape = function (r765_t, r765_b, r765_l, r765_r, r765_s) {
            var _r765_t0, _r765_t1;
            return r756_xn$createAndSaveGlyphImpl$2Lrc3c(null, null, function () {
                var _r768_t1;
                var _r768_t0 = this;
                var r768_currentGlyph = _r768_t0;
                r768_currentGlyph.include(r756_PrecedesUnderRelationShape(r765_t, r765_b, r765_l, r765_r, r765_s));
                r768_currentGlyph.include(r756_FlipAround(r1_mix(r765_l, r765_r, 0.5), r1_mix(r765_t, r765_b, 0.5)));
                return void 0;
            });
        };
        r756_xn$createAndSaveGlyphImpl$2Lrc3c('precedesUnderRelation', 8880, r756_AsRadical(r756_PrecedesUnderRelationShape(r756_SymbolMid + r756_dH, r756_SymbolMid - r756_dH, r756_SB, r756_RightSB, r756_OperatorStroke)));
        return r756_xn$createAndSaveGlyphImpl$2Lrc3c('succeedsUnderRelation', 8881, r756_AsRadical(r756_SucceedsUnderRelationShape(r756_SymbolMid + r756_dH, r756_SymbolMid - r756_dH, r756_SB, r756_RightSB, r756_OperatorStroke)));
    });
    return void 0;
});
r1_xn$GlyphBlocks$2Lrc2b.push(function (r775_xn$Capture_Ext$2Lrc2b) {
    var _r775_t0, _r775_t1;
    r775_xn$Capture_Ext$2Lrc2b['$defineGlyphBlockImpl$'](r775_xn$Capture_Ext$2Lrc2b, 'Symbol-Math-Relation-Subset', function (r776_xn$Capture$2Lrc8, r776_xn$ExportCapture$2Lrc4b) {
        var _r776_t7, _r776_t8;
        var _r776_t0 = r776_xn$Capture$2Lrc8;
        var r776_xn$createAndSaveGlyphImpl$2Lrc3c = _r776_t0['$createAndSaveGlyphImpl$'];
        var r776_xn$NamedParameterPair$2Lrc9b = _r776_t0['$NamedParameterPair$'];
        var r776_xn$assignUnicodeImpl$2Lrc8b = _r776_t0['$assignUnicodeImpl$'];
        var r776_xn$execState$2Lrc0b = _r776_t0['$execState$'];
        var _r776_t1 = r776_xn$Capture$2Lrc8.Metrics;
        var r776_Width = _r776_t1.Width;
        var r776_SB = _r776_t1.SB;
        var r776_SymbolMid = _r776_t1.SymbolMid;
        var r776_ApparentTranslate = _r776_t1.ApparentTranslate;
        var r776_HVContrast = _r776_t1.HVContrast;
        var r776_Rightward = _r776_t1.Rightward;
        var r776_Leftward = _r776_t1.Leftward;
        var r776_O = _r776_t1.O;
        var r776_Stroke = _r776_t1.Stroke;
        var r776_HalfStroke = _r776_t1.HalfStroke;
        var r776_RightSB = _r776_t1.RightSB;
        var r776_Middle = _r776_t1.Middle;
        var r776_DotRadius = _r776_t1.DotRadius;
        var r776_AdviceStroke = _r776_t1.AdviceStroke;
        var r776_AdviceStroke2 = _r776_t1.AdviceStroke2;
        var r776_OperatorStroke = _r776_t1.OperatorStroke;
        var _r776_t2 = r776_xn$Capture$2Lrc8.SpiroFns;
        var r776_g4 = _r776_t2.g4;
        var r776_corner = _r776_t2.corner;
        var r776_flat = _r776_t2.flat;
        var r776_curl = _r776_t2.curl;
        var r776_widths = _r776_t2.widths;
        var r776_heading = _r776_t2.heading;
        var r776_archv = _r776_t2.archv;
        var r776_arcvh = _r776_t2.arcvh;
        var r776_dispiro = _r776_t2.dispiro;
        var r776_xn$spirooutline$1aao = _r776_t2['spiro-outline'];
        var _r776_t3 = r776_xn$Capture$2Lrc8.BooleFns;
        var r776_union = _r776_t3.union;
        var r776_intersection = _r776_t3.intersection;
        var _r776_t4 = r776_xn$Capture$2Lrc8.CommonShapes.resolve();
        var r776_HBar = _r776_t4.HBar;
        var r776_VBar = _r776_t4.VBar;
        var r776_FlipAround = _r776_t4.FlipAround;
        var r776_AsRadical = _r776_t4.AsRadical;
        var r776_WithDotVariants = _r776_t4.WithDotVariants;
        var _r776_t5 = r776_xn$Capture$2Lrc8['Common-Derivatives'].resolve();
        var r776_xn$referglyph$1aao = _r776_t5['refer-glyph'];
        var r776_turned = _r776_t5.turned;
        var r776_xn$derivecomposites$7Hrq = _r776_t5['derive-composites'];
        var _r776_t6 = r776_xn$Capture$2Lrc8['Symbol-Math-Relation-Common'].resolve();
        var r776_dH = _r776_t6.dH;
        var r776_dSH = _r776_t6.dSH;
        var r776_dHSubstSimple = _r776_t6.dHSubstSimple;
        var r776_lessEqDist = _r776_t6.lessEqDist;
        var r776_dHElem = _r776_t6.dHElem;
        var r776_dHSmallElem = _r776_t6.dHSmallElem;
        r776_xn$Capture$2Lrc8['Symbol-Math-Relation-Addon-Glyphs'].resolve();
        var r776_SubsetMaskShape = function () {
            var _r781_t6;
            var _r781_t7 = arguments;
            var _r781_t0 = [].slice.call(_r781_t7, 0);
            var _r781_t1 = [];
            var _r781_t2 = 0;
            while (_r781_t2 < _r781_t0.length) {
                if (!(_r781_t0[_r781_t2] instanceof r776_xn$NamedParameterPair$2Lrc9b))
                    _r781_t1.push(_r781_t0[_r781_t2]);
                _r781_t2 = _r781_t2 + 1;
            }
            var _r781_t3 = _r781_t0;
            var _r781_t4 = _r781_t3.length;
            var _r781_t5 = 0;
            while (_r781_t5 < _r781_t4) {
                _r781_t2 = _r781_t3[_r781_t5];
                if (_r781_t2 && _r781_t2 instanceof r776_xn$NamedParameterPair$2Lrc9b && _r781_t2.left === 'top')
                    r781_top = _r781_t2.right;
                if (_r781_t2 && _r781_t2 instanceof r776_xn$NamedParameterPair$2Lrc9b && _r781_t2.left === 'bot')
                    r781_bot = _r781_t2.right;
                if (_r781_t2 && _r781_t2 instanceof r776_xn$NamedParameterPair$2Lrc9b && _r781_t2.left === 'sw')
                    r781_sw = _r781_t2.right;
                if (_r781_t2 && _r781_t2 instanceof r776_xn$NamedParameterPair$2Lrc9b && _r781_t2.left === 'offset')
                    r781_offset = _r781_t2.right;
                if (_r781_t2 && _r781_t2 instanceof r776_xn$NamedParameterPair$2Lrc9b && _r781_t2.left === 'xShift')
                    r781_xShift = _r781_t2.right;
                _r781_t5 = _r781_t5 + 1;
            }
            var r781_top = r1_fallback(r781_top, _r781_t1[0]);
            var r781_bot = r1_fallback(r781_bot, _r781_t1[1]);
            var r781_sw = r1_fallback(r781_sw, _r781_t1[2], r776_OperatorStroke);
            var r781_offset = r1_fallback(r781_offset, _r781_t1[3], 0);
            var r781_xShift = r1_fallback(r781_xShift, _r781_t1[4], 0);
            return r776_xn$spirooutline$1aao(r776_corner(r776_RightSB, r781_top - r781_offset, r776_heading(r776_Leftward)), r776_curl(r776_SB + Math.max(r781_sw * 1.5, (r781_xShift + r781_top - r781_bot) / 2), r781_top - r781_offset), r776_archv(), r776_g4(r776_SB + r781_xShift + r781_offset + r776_O, r1_mix(r781_top, r781_bot, 0.5)), r776_arcvh(), r776_flat(r776_SB + Math.max(r781_sw * 1.5, (r781_xShift + r781_top - r781_bot) / 2), r781_bot + r781_offset), r776_corner(r776_RightSB, r781_bot + r781_offset, r776_heading(r776_Rightward)));
        };
        var r776_SubsetShape = function () {
            var _r786_t6;
            var _r786_t7 = arguments;
            var _r786_t0 = [].slice.call(_r786_t7, 0);
            var _r786_t1 = [];
            var _r786_t2 = 0;
            while (_r786_t2 < _r786_t0.length) {
                if (!(_r786_t0[_r786_t2] instanceof r776_xn$NamedParameterPair$2Lrc9b))
                    _r786_t1.push(_r786_t0[_r786_t2]);
                _r786_t2 = _r786_t2 + 1;
            }
            var _r786_t3 = _r786_t0;
            var _r786_t4 = _r786_t3.length;
            var _r786_t5 = 0;
            while (_r786_t5 < _r786_t4) {
                _r786_t2 = _r786_t3[_r786_t5];
                if (_r786_t2 && _r786_t2 instanceof r776_xn$NamedParameterPair$2Lrc9b && _r786_t2.left === 'top')
                    r786_top = _r786_t2.right;
                if (_r786_t2 && _r786_t2 instanceof r776_xn$NamedParameterPair$2Lrc9b && _r786_t2.left === 'bot')
                    r786_bot = _r786_t2.right;
                if (_r786_t2 && _r786_t2 instanceof r776_xn$NamedParameterPair$2Lrc9b && _r786_t2.left === 'sw')
                    r786_sw = _r786_t2.right;
                if (_r786_t2 && _r786_t2 instanceof r776_xn$NamedParameterPair$2Lrc9b && _r786_t2.left === 'offset')
                    r786_offset = _r786_t2.right;
                if (_r786_t2 && _r786_t2 instanceof r776_xn$NamedParameterPair$2Lrc9b && _r786_t2.left === 'xShift')
                    r786_xShift = _r786_t2.right;
                _r786_t5 = _r786_t5 + 1;
            }
            var r786_top = r1_fallback(r786_top, _r786_t1[0]);
            var r786_bot = r1_fallback(r786_bot, _r786_t1[1]);
            var r786_sw = r1_fallback(r786_sw, _r786_t1[2], r776_OperatorStroke);
            var r786_offset = r1_fallback(r786_offset, _r786_t1[3], 0);
            var r786_xShift = r1_fallback(r786_xShift, _r786_t1[4], 0);
            return r776_dispiro(r776_widths.lhs(r786_sw), r776_flat(r776_RightSB, r786_top - r786_offset, r776_heading(r776_Leftward)), r776_curl(r776_SB + Math.max(r786_sw * 1.5, (r786_xShift + r786_top - r786_bot) / 2), r786_top - r786_offset), r776_archv(), r776_g4(r776_SB + r786_xShift + r786_offset + r776_O, r1_mix(r786_top, r786_bot, 0.5)), r776_arcvh(), r776_flat(r776_SB + Math.max(r786_sw * 1.5, (r786_xShift + r786_top - r786_bot) / 2), r786_bot + r786_offset), r776_curl(r776_RightSB, r786_bot + r786_offset, r776_heading(r776_Rightward)));
        };
        var r776_SupsetShape = function (r791_top, r791_bot, r791_sw) {
            var _r791_t0, _r791_t1;
            return function () {
                var _r793_t1;
                var _r793_t0 = this;
                var r793_currentGlyph = _r793_t0;
                r793_currentGlyph.include(r776_SubsetShape(r791_top, r791_bot, r791_sw));
                r793_currentGlyph.include(r776_FlipAround(r776_Middle, r1_mix(r791_top, r791_bot, 0.5)));
                return void 0;
            };
        };
        r776_xn$createAndSaveGlyphImpl$2Lrc3c('subst', 8834, r776_SubsetShape(r776_SymbolMid + r776_dHSubstSimple, r776_SymbolMid - r776_dHSubstSimple));
        r776_xn$createAndSaveGlyphImpl$2Lrc3c('subst/aplLeft', null, r776_SubsetShape(r776_SymbolMid + r776_dHSubstSimple, r776_SymbolMid - r776_dHSubstSimple, r776_AdviceStroke(3.5)));
        r776_xn$createAndSaveGlyphImpl$2Lrc3c('doubleSubst', 8912, function () {
            var _r800_t1;
            var _r800_t0 = this;
            var r800_currentGlyph = _r800_t0;
            var r800_sw = r776_AdviceStroke(6);
            var r800_gap = Math.max(r776_Width / 8, r800_sw / 2);
            r800_currentGlyph.include(r776_SubsetShape(r776_SymbolMid + r776_dHSubstSimple, r776_SymbolMid - r776_dHSubstSimple, new r776_xn$NamedParameterPair$2Lrc9b('sw', r800_sw)));
            r800_currentGlyph.include(r776_SubsetShape(r776_SymbolMid + r776_dHSubstSimple, r776_SymbolMid - r776_dHSubstSimple, new r776_xn$NamedParameterPair$2Lrc9b('sw', r800_sw), new r776_xn$NamedParameterPair$2Lrc9b('offset', r800_gap + r800_sw)));
            return void 0;
        });
        r776_turned('supst', 8835, 'subst', r776_Middle, r776_SymbolMid);
        r776_turned('doubleSupst', 8913, 'doubleSubst', r776_Middle, r776_SymbolMid);
        r776_xn$createAndSaveGlyphImpl$2Lrc3c('substBarUpper', null, r776_AsRadical(r776_SubsetShape(r776_SymbolMid + r776_dSH + r776_lessEqDist, r776_SymbolMid - r776_dSH + r776_lessEqDist)));
        r776_xn$createAndSaveGlyphImpl$2Lrc3c('supstBarUpper', null, r776_AsRadical(r776_SupsetShape(r776_SymbolMid + r776_dSH + r776_lessEqDist, r776_SymbolMid - r776_dSH + r776_lessEqDist)));
        r776_xn$derivecomposites$7Hrq('substBar', 8838, 'substBarUpper', 'eqLower');
        r776_xn$derivecomposites$7Hrq('substBarNoRise', null, 'subst', 'eqLower2');
        r776_xn$derivecomposites$7Hrq('substBarNegated', 8842, 'substBarUpper', 'eqBarNegatedLower');
        r776_xn$derivecomposites$7Hrq('supstBar', 8839, 'supstBarUpper', 'eqLower');
        r776_xn$derivecomposites$7Hrq('supstBarNoRise', null, 'supst', 'eqLower2');
        r776_xn$derivecomposites$7Hrq('supstBarNegated', 8843, 'supstBarUpper', 'eqBarNegatedLower');
        r776_xn$createAndSaveGlyphImpl$2Lrc3c('element', 8712, function () {
            var _r810_t1;
            var _r810_t0 = this;
            var r810_currentGlyph = _r810_t0;
            r810_currentGlyph.include(r776_SubsetShape(r776_SymbolMid + r776_dHElem, r776_SymbolMid - r776_dHElem));
            r810_currentGlyph.include(r776_HBar.m(r776_SB + r776_HalfStroke, r776_RightSB, r776_SymbolMid, r776_OperatorStroke));
            return void 0;
        });
        r776_xn$createAndSaveGlyphImpl$2Lrc3c('elementWithTwoHorizontalStrokes', 8953, function () {
            var _r815_t1;
            var _r815_t0 = this;
            var r815_currentGlyph = _r815_t0;
            var r815_sw = Math.min(r776_OperatorStroke, r776_AdviceStroke2(2, 4, 2 * r776_dHElem));
            r815_currentGlyph.include(r776_SubsetShape(r776_SymbolMid + r776_dHElem, r776_SymbolMid - r776_dHElem, new r776_xn$NamedParameterPair$2Lrc9b('sw', r815_sw)));
            r815_currentGlyph.include(r776_intersection(r776_SubsetMaskShape(r776_SymbolMid + r776_dHElem, r776_SymbolMid - r776_dHElem, new r776_xn$NamedParameterPair$2Lrc9b('sw', r815_sw), new r776_xn$NamedParameterPair$2Lrc9b('offset', 0.1)), r776_union(r776_HBar.m(r776_SB, r776_RightSB, r776_SymbolMid - r776_dHElem / 3 + r815_sw / 6, r815_sw), r776_HBar.m(r776_SB, r776_RightSB, r776_SymbolMid + r776_dHElem / 3 - r815_sw / 6, r815_sw))));
            return void 0;
        });
        r776_turned('turnElement', 8715, 'element', r776_Middle, r776_SymbolMid);
        r776_xn$createAndSaveGlyphImpl$2Lrc3c('smallElement', 8714, function () {
            var _r823_t1;
            var _r823_t0 = this;
            var r823_currentGlyph = _r823_t0;
            var r823_sw = r776_AdviceStroke2(3, 2.5, r776_dHSmallElem * 2);
            r823_currentGlyph.include(r776_SubsetShape(r776_SymbolMid + r776_dHSmallElem, r776_SymbolMid - r776_dHSmallElem, new r776_xn$NamedParameterPair$2Lrc9b('sw', r823_sw)));
            r823_currentGlyph.include(r776_HBar.m(r776_SB + r776_HalfStroke, r776_RightSB, r776_SymbolMid, r823_sw));
            return void 0;
        });
        r776_turned('turnSmallElement', 8717, 'smallElement', r776_Middle, r776_SymbolMid);
        r776_xn$createAndSaveGlyphImpl$2Lrc3c('aplElement', null, function () {
            var _r829_t1;
            var _r829_t0 = this;
            var r829_currentGlyph = _r829_t0;
            var r829_sw = r776_AdviceStroke2(3, 2.5, r776_dH * 2);
            r829_currentGlyph.include(r776_SubsetShape(r776_SymbolMid + r776_dH, r776_SymbolMid - r776_dH, new r776_xn$NamedParameterPair$2Lrc9b('sw', r829_sw)));
            r829_currentGlyph.include(r776_HBar.m(r776_SB + r776_HalfStroke, r776_RightSB, r776_SymbolMid, r829_sw));
            return void 0;
        });
        r776_xn$createAndSaveGlyphImpl$2Lrc3c('elementStroke', 8946, function () {
            var _r835_t1;
            var _r835_t0 = this;
            var r835_currentGlyph = _r835_t0;
            r835_currentGlyph.include(r776_SubsetShape(r776_SymbolMid + r776_dHElem, r776_SymbolMid - r776_dHElem, new r776_xn$NamedParameterPair$2Lrc9b('xShift', (r776_RightSB - r776_SB) * 0.2 + r776_Stroke * 0.25 * r776_HVContrast)));
            r835_currentGlyph.include(r776_HBar.m(r776_SB + r776_HalfStroke, r776_RightSB, r776_SymbolMid, r776_OperatorStroke));
            return void 0;
        });
        r776_turned('turnElementStroke', 8954, 'elementStroke', r776_Middle, r776_SymbolMid);
        var r776_ElementBarHalfHeight = function (r839_h) {
            var _r839_t0, _r839_t1;
            return r839_h / 2 - r776_OperatorStroke / 4;
        };
        r776_xn$createAndSaveGlyphImpl$2Lrc3c('elementBarAtEnd', 8947, function () {
            var _r842_t1;
            var _r842_t0 = this;
            var r842_currentGlyph = _r842_t0;
            r842_currentGlyph.include(r776_SubsetShape(r776_SymbolMid + r776_dHElem, r776_SymbolMid - r776_dHElem));
            r842_currentGlyph.include(r776_VBar.r(r776_RightSB, r776_SymbolMid - r776_ElementBarHalfHeight(r776_dHElem), r776_SymbolMid + r776_ElementBarHalfHeight(r776_dHElem), r776_OperatorStroke));
            r842_currentGlyph.include(r776_HBar.m(r776_SB + r776_HalfStroke, r776_RightSB, r776_SymbolMid, r776_OperatorStroke));
            return void 0;
        });
        r776_turned('turnElementBarAtEnd', 8955, 'elementBarAtEnd', r776_Middle, r776_SymbolMid);
        r776_xn$createAndSaveGlyphImpl$2Lrc3c('smallElementBarAtEnd', 8948, function () {
            var _r848_t1;
            var _r848_t0 = this;
            var r848_currentGlyph = _r848_t0;
            var r848_sw = r776_AdviceStroke2(3, 2.75, r776_dHSmallElem * 2);
            r848_currentGlyph.include(r776_SubsetShape(r776_SymbolMid + r776_dHSmallElem, r776_SymbolMid - r776_dHSmallElem, new r776_xn$NamedParameterPair$2Lrc9b('sw', r848_sw)));
            r848_currentGlyph.include(r776_VBar.r(r776_RightSB, r776_SymbolMid - r776_ElementBarHalfHeight(r776_dHSmallElem), r776_SymbolMid + r776_ElementBarHalfHeight(r776_dHSmallElem), r848_sw));
            r848_currentGlyph.include(r776_HBar.m(r776_SB + r776_HalfStroke, r776_RightSB, r776_SymbolMid, r848_sw));
            return void 0;
        });
        r776_turned('turnSmallElementBarAtEnd', 8956, 'smallElementBarAtEnd', r776_Middle, r776_SymbolMid);
        var r776_dSHElem = r776_dHElem * r776_dSH / r776_dH;
        r776_xn$createAndSaveGlyphImpl$2Lrc3c('elementAtUpper', null, function () {
            var _r855_t1;
            var _r855_t0 = this;
            var r855_currentGlyph = _r855_t0;
            r855_currentGlyph.include(r776_SubsetShape(r776_SymbolMid + r776_dSHElem, r776_SymbolMid - r776_dSHElem));
            r855_currentGlyph.include(r776_HBar.m(r776_SB + r776_HalfStroke, r776_RightSB, r776_SymbolMid, r776_OperatorStroke));
            return void 0;
        });
        r776_turned('turnElementAtUpper', null, 'elementAtUpper', r776_Middle, r776_SymbolMid);
        r776_WithDotVariants('elementOfWithDotAbove', 8949, function (r858_DrawAt, r858_kDotRadius, r858_overshoot) {
            var _r858_t0, _r858_t1;
            return function () {
                var _r860_t1;
                var _r860_t0 = this;
                var r860_currentGlyph = _r860_t0;
                r860_currentGlyph.include(r776_xn$referglyph$1aao('elementAtUpper'), true, true);
                r860_currentGlyph.include(r776_ApparentTranslate(0, -r776_lessEqDist));
                r860_currentGlyph.include(r858_DrawAt(r776_Middle, r776_SymbolMid + (r776_dSHElem + r776_lessEqDist), r858_kDotRadius + r776_DotRadius - r858_overshoot));
                return void 0;
            };
        });
        r776_xn$createAndSaveGlyphImpl$2Lrc3c(8950, null, function () {
            var _r866_t1;
            var _r866_t0 = this;
            var r866_currentGlyph = _r866_t0;
            r866_currentGlyph.include(r776_xn$referglyph$1aao('elementAtUpper'), true, true);
            r866_currentGlyph.include(r776_ApparentTranslate(0, -r776_lessEqDist));
            r866_currentGlyph.include(r776_HBar.m(r776_SB, r776_RightSB, r776_SymbolMid + (r776_dSHElem + r776_lessEqDist), r776_OperatorStroke));
            return void 0;
        });
        r776_xn$createAndSaveGlyphImpl$2Lrc3c(8957, null, function () {
            var _r872_t1;
            var _r872_t0 = this;
            var r872_currentGlyph = _r872_t0;
            r872_currentGlyph.include(r776_xn$referglyph$1aao('turnElementAtUpper'), true, true);
            r872_currentGlyph.include(r776_ApparentTranslate(0, -r776_lessEqDist));
            r872_currentGlyph.include(r776_HBar.m(r776_SB, r776_RightSB, r776_SymbolMid + (r776_dSHElem + r776_lessEqDist), r776_OperatorStroke));
            return void 0;
        });
        r776_xn$createAndSaveGlyphImpl$2Lrc3c(8952, null, function () {
            var _r878_t1;
            var _r878_t0 = this;
            var r878_currentGlyph = _r878_t0;
            r878_currentGlyph.include(r776_xn$referglyph$1aao('elementAtUpper'), true, true);
            r878_currentGlyph.include(r776_ApparentTranslate(0, +r776_lessEqDist));
            r878_currentGlyph.include(r776_HBar.m(r776_SB, r776_RightSB, r776_SymbolMid - (r776_dSHElem + r776_lessEqDist), r776_OperatorStroke));
            return void 0;
        });
        r776_xn$createAndSaveGlyphImpl$2Lrc3c(8951, null, function () {
            var _r884_t1;
            var _r884_t0 = this;
            var r884_currentGlyph = _r884_t0;
            r884_currentGlyph.include(r776_xn$referglyph$1aao('smallElement'), true, true);
            r884_currentGlyph.include(r776_ApparentTranslate(0, -(r776_dHSmallElem / r776_dHElem) * r776_lessEqDist));
            r884_currentGlyph.include(r776_HBar.m(r776_SB, r776_RightSB, r776_SymbolMid + (r776_dHSmallElem + r776_dHSmallElem / r776_dHElem * r776_lessEqDist), r776_OperatorStroke));
            return void 0;
        });
        return r776_xn$createAndSaveGlyphImpl$2Lrc3c(8958, null, function () {
            var _r890_t1;
            var _r890_t0 = this;
            var r890_currentGlyph = _r890_t0;
            r890_currentGlyph.include(r776_xn$referglyph$1aao('turnSmallElement'), true, true);
            r890_currentGlyph.include(r776_ApparentTranslate(0, -(r776_dHSmallElem / r776_dHElem) * r776_lessEqDist));
            r890_currentGlyph.include(r776_HBar.m(r776_SB, r776_RightSB, r776_SymbolMid + (r776_dHSmallElem + r776_dHSmallElem / r776_dHElem * r776_lessEqDist), r776_OperatorStroke));
            return void 0;
        });
    });
    return void 0;
});
r1_xn$GlyphBlocks$2Lrc2b.push(function (r896_xn$Capture_Ext$2Lrc2b) {
    var _r896_t0, _r896_t1;
    r896_xn$Capture_Ext$2Lrc2b['$defineGlyphBlockImpl$'](r896_xn$Capture_Ext$2Lrc2b, 'Symbol-Math-Relation-Precedes-Succeeds-Prefix-Suffix', function (r897_xn$Capture$2Lrc8, r897_xn$ExportCapture$2Lrc4b) {
        var _r897_t7, _r897_t8;
        var _r897_t0 = r897_xn$Capture$2Lrc8;
        var r897_xn$createAndSaveGlyphImpl$2Lrc3c = _r897_t0['$createAndSaveGlyphImpl$'];
        var r897_xn$NamedParameterPair$2Lrc9b = _r897_t0['$NamedParameterPair$'];
        var r897_xn$assignUnicodeImpl$2Lrc8b = _r897_t0['$assignUnicodeImpl$'];
        var r897_xn$execState$2Lrc0b = _r897_t0['$execState$'];
        var _r897_t1 = r897_xn$Capture$2Lrc8.Metrics;
        var r897_SB = _r897_t1.SB;
        var r897_SymbolMid = _r897_t1.SymbolMid;
        var r897_HalfStroke = _r897_t1.HalfStroke;
        var r897_RightSB = _r897_t1.RightSB;
        var r897_Middle = _r897_t1.Middle;
        var r897_OperatorStroke = _r897_t1.OperatorStroke;
        var _r897_t2 = r897_xn$Capture$2Lrc8.SpiroFns;
        var _r897_t3 = r897_xn$Capture$2Lrc8.BooleFns;
        var r897_union = _r897_t3.union;
        var _r897_t4 = r897_xn$Capture$2Lrc8.CommonShapes.resolve();
        var r897_HBar = _r897_t4.HBar;
        var r897_VBar = _r897_t4.VBar;
        var r897_FlipAround = _r897_t4.FlipAround;
        var r897_AsRadical = _r897_t4.AsRadical;
        var _r897_t5 = r897_xn$Capture$2Lrc8['Common-Derivatives'].resolve();
        var r897_xn$derivecomposites$7Hrq = _r897_t5['derive-composites'];
        var _r897_t6 = r897_xn$Capture$2Lrc8['Symbol-Math-Relation-Common'].resolve();
        var r897_dSH = _r897_t6.dSH;
        var r897_dHSubstSimple = _r897_t6.dHSubstSimple;
        var r897_lessEqDist = _r897_t6.lessEqDist;
        var r897_dHElem = _r897_t6.dHElem;
        r897_xn$Capture$2Lrc8['Symbol-Math-Relation-Addon-Glyphs'].resolve();
        var r897_PrefixShape = function (r902_top, r902_bot, r902_sw) {
            var _r902_t0, _r902_t1;
            return r897_union(r897_VBar.l(r897_SB, r902_bot, r902_top, r1_fallback(r902_sw, r897_OperatorStroke)), r897_HBar.t(r897_SB, r897_RightSB, r902_top, r1_fallback(r902_sw, r897_OperatorStroke)), r897_HBar.b(r897_SB, r897_RightSB, r902_bot, r1_fallback(r902_sw, r897_OperatorStroke)));
        };
        var r897_SuffixShape = function (r903_top, r903_bot, r903_sw) {
            var _r903_t0, _r903_t1;
            return function () {
                var _r905_t1;
                var _r905_t0 = this;
                var r905_currentGlyph = _r905_t0;
                r905_currentGlyph.include(r897_PrefixShape(r903_top, r903_bot, r903_sw));
                r905_currentGlyph.include(r897_FlipAround(r897_Middle, r1_mix(r903_top, r903_bot, 0.5)));
                return void 0;
            };
        };
        r897_xn$createAndSaveGlyphImpl$2Lrc3c('prefix', 8847, r897_PrefixShape(r897_SymbolMid + r897_dHSubstSimple, r897_SymbolMid - r897_dHSubstSimple));
        r897_xn$createAndSaveGlyphImpl$2Lrc3c('suffix', 8848, r897_SuffixShape(r897_SymbolMid + r897_dHSubstSimple, r897_SymbolMid - r897_dHSubstSimple));
        r897_xn$createAndSaveGlyphImpl$2Lrc3c('prefixBarUpper', null, r897_AsRadical(r897_PrefixShape(r897_SymbolMid + r897_dSH + r897_lessEqDist, r897_SymbolMid - r897_dSH + r897_lessEqDist)));
        r897_xn$createAndSaveGlyphImpl$2Lrc3c('suffixBarUpper', null, r897_AsRadical(r897_SuffixShape(r897_SymbolMid + r897_dSH + r897_lessEqDist, r897_SymbolMid - r897_dSH + r897_lessEqDist)));
        r897_xn$derivecomposites$7Hrq('prefixBar', 8849, 'prefixBarUpper', 'eqLower');
        r897_xn$derivecomposites$7Hrq('prefixBarNegated', 8932, 'prefixBarUpper', 'eqBarNegatedLower');
        r897_xn$derivecomposites$7Hrq('suffixBar', 8850, 'suffixBarUpper', 'eqLower');
        r897_xn$derivecomposites$7Hrq('suffixBarNegated', 8933, 'suffixBarUpper', 'eqBarNegatedLower');
        return r897_xn$createAndSaveGlyphImpl$2Lrc3c('prefixElement', 8959, function () {
            var _r914_t1;
            var _r914_t0 = this;
            var r914_currentGlyph = _r914_t0;
            r914_currentGlyph.include(r897_PrefixShape(r897_SymbolMid + r897_dHElem, r897_SymbolMid - r897_dHElem));
            r914_currentGlyph.include(r897_HBar.m(r897_SB + r897_HalfStroke, r897_RightSB, r897_SymbolMid));
            return void 0;
        });
    });
    return void 0;
});
r1_xn$GlyphBlocks$2Lrc2b.push(function (r919_xn$Capture_Ext$2Lrc2b) {
    var _r919_t0, _r919_t1;
    r919_xn$Capture_Ext$2Lrc2b['$defineGlyphBlockImpl$'](r919_xn$Capture_Ext$2Lrc2b, 'Symbol-Math-Relation-Between', function (r920_xn$Capture$2Lrc8, r920_xn$ExportCapture$2Lrc4b) {
        var _r920_t6, _r920_t7;
        var _r920_t0 = r920_xn$Capture$2Lrc8;
        var r920_xn$createAndSaveGlyphImpl$2Lrc3c = _r920_t0['$createAndSaveGlyphImpl$'];
        var r920_xn$NamedParameterPair$2Lrc9b = _r920_t0['$NamedParameterPair$'];
        var r920_xn$assignUnicodeImpl$2Lrc8b = _r920_t0['$assignUnicodeImpl$'];
        var r920_xn$execState$2Lrc0b = _r920_t0['$execState$'];
        var _r920_t1 = r920_xn$Capture$2Lrc8.Metrics;
        var r920_SB = _r920_t1.SB;
        var r920_PlusTop = _r920_t1.PlusTop;
        var r920_PlusBot = _r920_t1.PlusBot;
        var r920_RightSB = _r920_t1.RightSB;
        var r920_OperatorStroke = _r920_t1.OperatorStroke;
        var _r920_t2 = r920_xn$Capture$2Lrc8.SpiroFns;
        var r920_g4 = _r920_t2.g4;
        var r920_g2 = _r920_t2.g2;
        var r920_widths = _r920_t2.widths;
        var r920_alsoThru = _r920_t2.alsoThru;
        var r920_dispiro = _r920_t2.dispiro;
        var _r920_t3 = r920_xn$Capture$2Lrc8.BooleFns;
        var _r920_t4 = r920_xn$Capture$2Lrc8.CommonShapes.resolve();
        var _r920_t5 = r920_xn$Capture$2Lrc8['Common-Derivatives'].resolve();
        return r920_xn$createAndSaveGlyphImpl$2Lrc3c('between', 8812, function () {
            var _r925_t1;
            var _r925_t0 = this;
            var r925_currentGlyph = _r925_t0;
            var r925_frame = new r1_Box(r920_PlusTop + r920_OperatorStroke / 2, r920_PlusBot - r920_OperatorStroke / 2, r920_SB, r920_RightSB);
            var r925_kShape = 0.25;
            var r925_kExt = 0.2;
            r925_currentGlyph.include(r920_dispiro(r920_g4(r925_frame.mixX(r925_kExt), r925_frame.mixY(1), r920_widths.rhs(r920_OperatorStroke)), r920_alsoThru.g2(1 - r925_kShape, 0.5), r920_g4(r925_frame.mixX(1 - r925_kExt), r925_frame.mixY(0.5), r920_widths.center(r920_OperatorStroke)), r920_alsoThru.g2(r925_kShape, 0.5), r920_g4(r925_frame.mixX(r925_kExt), r925_frame.mixY(0), r920_widths.rhs(r920_OperatorStroke))));
            r925_currentGlyph.include(r920_dispiro(r920_g4(r925_frame.mixX(1 - r925_kExt), r925_frame.mixY(1), r920_widths.lhs(r920_OperatorStroke)), r920_alsoThru.g2(1 - r925_kShape, 0.5), r920_g4(r925_frame.mixX(r925_kExt), r925_frame.mixY(0.5), r920_widths.center(r920_OperatorStroke)), r920_alsoThru.g2(r925_kShape, 0.5), r920_g4(r925_frame.mixX(1 - r925_kExt), r925_frame.mixY(0), r920_widths.lhs(r920_OperatorStroke))));
            return void 0;
        });
    });
    return void 0;
});
r1_xn$GlyphBlocks$2Lrc2b.push(function (r930_xn$Capture_Ext$2Lrc2b) {
    var _r930_t0, _r930_t1;
    r930_xn$Capture_Ext$2Lrc2b['$defineGlyphBlockImpl$'](r930_xn$Capture_Ext$2Lrc2b, 'Symbol-Math-Relation-Addon-Glyphs', function (r931_xn$Capture$2Lrc8, r931_xn$ExportCapture$2Lrc4b) {
        var _r931_t9, _r931_t10;
        var _r931_t0 = r931_xn$Capture$2Lrc8;
        var r931_xn$createAndSaveGlyphImpl$2Lrc3c = _r931_t0['$createAndSaveGlyphImpl$'];
        var r931_xn$NamedParameterPair$2Lrc9b = _r931_t0['$NamedParameterPair$'];
        var r931_xn$assignUnicodeImpl$2Lrc8b = _r931_t0['$assignUnicodeImpl$'];
        var r931_xn$execState$2Lrc0b = _r931_t0['$execState$'];
        var _r931_t1 = r931_xn$Capture$2Lrc8.Metrics;
        var r931_SB = _r931_t1.SB;
        var r931_SymbolMid = _r931_t1.SymbolMid;
        var r931_Downward = _r931_t1.Downward;
        var r931_RightSB = _r931_t1.RightSB;
        var r931_Middle = _r931_t1.Middle;
        var r931_OperatorStroke = _r931_t1.OperatorStroke;
        var _r931_t2 = r931_xn$Capture$2Lrc8.SpiroFns;
        var r931_flat = _r931_t2.flat;
        var r931_widths = _r931_t2.widths;
        var r931_heading = _r931_t2.heading;
        var r931_dispiro = _r931_t2.dispiro;
        var _r931_t3 = r931_xn$Capture$2Lrc8.BooleFns;
        var r931_union = _r931_t3.union;
        var _r931_t4 = r931_xn$Capture$2Lrc8.CommonShapes.resolve();
        var r931_HBar = _r931_t4.HBar;
        var r931_AsRadical = _r931_t4.AsRadical;
        var _r931_t5 = r931_xn$Capture$2Lrc8['Common-Derivatives'].resolve();
        var r931_xn$referglyph$1aao = _r931_t5['refer-glyph'];
        var _r931_t6 = r931_xn$Capture$2Lrc8['Symbol-Math-Relation-Common'].resolve();
        var r931_dSH = _r931_t6.dSH;
        var r931_lessEqDist = _r931_t6.lessEqDist;
        var _r931_t7 = r931_xn$Capture$2Lrc8['Symbol-Math-Relation-Sym'].resolve();
        var r931_symWave = _r931_t7.symWave;
        var _r931_t8 = r931_xn$Capture$2Lrc8['Symbol-Math-Relation-Addons'].resolve();
        var r931_lesslessSW = _r931_t8.lesslessSW;
        var r931_EqEqBarNegation = _r931_t8.EqEqBarNegation;
        var r931_BarNegator = function (r937_symbolBottom, r937_dist) {
            var _r937_t0, _r937_t1;
            var r937_swo = Math.max(r931_OperatorStroke * 1.5, r937_dist * 1.5);
            return r931_dispiro(r931_widths.center(r931_OperatorStroke), r931_flat(r931_Middle + r937_dist, r937_symbolBottom - r937_dist + r937_swo, r931_heading(r931_Downward)), r931_flat(r931_Middle - r937_dist, r937_symbolBottom - r937_dist - r937_swo, r931_heading(r931_Downward)));
        };
        r931_xn$createAndSaveGlyphImpl$2Lrc3c('eqLower', null, r931_AsRadical(r931_HBar.m(r931_SB, r931_RightSB, r931_SymbolMid - r931_dSH - r931_lessEqDist, r931_OperatorStroke)));
        r931_xn$createAndSaveGlyphImpl$2Lrc3c('eqLower2', null, r931_AsRadical(r931_HBar.m(r931_SB, r931_RightSB, r931_SymbolMid - r931_dSH - 2 * r931_lessEqDist, r931_OperatorStroke)));
        r931_xn$createAndSaveGlyphImpl$2Lrc3c('eqBarNegatedLower', null, r931_AsRadical(r931_union(r931_xn$referglyph$1aao('eqLower'), r931_BarNegator(r931_SymbolMid - r931_dSH, r931_lessEqDist))));
        r931_xn$createAndSaveGlyphImpl$2Lrc3c('symLower', null, r931_AsRadical(r931_symWave(r931_SymbolMid - r931_dSH - r931_lessEqDist, 1)));
        r931_xn$createAndSaveGlyphImpl$2Lrc3c('symBarNegatedLower', null, r931_AsRadical(r931_union(r931_xn$referglyph$1aao('symLower'), r931_BarNegator(r931_SymbolMid - r931_dSH, r931_lessEqDist))));
        r931_xn$createAndSaveGlyphImpl$2Lrc3c('eqEqLower', null, r931_AsRadical(r931_union(r931_HBar.m(r931_SB, r931_RightSB, r931_SymbolMid - r931_dSH + r931_lessEqDist * 2 / 3, r931_lesslessSW), r931_HBar.m(r931_SB, r931_RightSB, r931_SymbolMid - r931_dSH - r931_lessEqDist, r931_lesslessSW))));
        r931_xn$createAndSaveGlyphImpl$2Lrc3c('symSymLower', null, r931_AsRadical(r931_union(r931_symWave(r931_SymbolMid - r931_dSH + r931_lessEqDist * 2 / 3, 1, r931_lesslessSW), r931_symWave(r931_SymbolMid - r931_dSH - r931_lessEqDist, 1, r931_lesslessSW))));
        r931_xn$createAndSaveGlyphImpl$2Lrc3c('eqEqBarNegatedLower', null, r931_AsRadical(r931_union(r931_xn$referglyph$1aao('eqEqLower'), r931_EqEqBarNegation())));
        return r931_xn$createAndSaveGlyphImpl$2Lrc3c('symSymBarNegatedLower', null, r931_AsRadical(r931_union(r931_xn$referglyph$1aao('symSymLower'), r931_EqEqBarNegation())));
    });
    return void 0;
});
