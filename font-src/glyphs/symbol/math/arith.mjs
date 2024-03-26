'use strict';
import * as _s0_t0 from '../../../support/utils.mjs';
var _s0_t1;
export {
    _s0_t1 as apply
};
var r1_apply, _r1_t0, _r1_t1, _r1_t2, _r1_t3, _r1_t4, _r1_t5, _r1_t6, _r1_t7;
var _r1_t8 = _s0_t0;
var r1_mix = _r1_t8.mix;
var r1_linreg = _r1_t8.linreg;
var r1_clamp = _r1_t8.clamp;
var r1_fallback = _r1_t8.fallback;
var r1_xn$GlyphBlocks$2Lrc2b = [];
_s0_t1 = r1_apply = function () {
    var r265_block, _r265_t4, _r265_t6;
    var _r265_t3 = this;
    var _r265_t0 = r1_xn$GlyphBlocks$2Lrc2b;
    var _r265_t1 = _r265_t0.length;
    var _r265_t2 = 0;
    var _r265_t5 = _r265_t2 < _r265_t1;
    while (_r265_t5) {
        _r265_t6 = (r265_block = _r265_t0[_r265_t2], r265_block(_r265_t3), _r265_t2 = _r265_t2 + 1);
        _r265_t5 = _r265_t2 < _r265_t1;
    }
    return _r265_t6;
};
r1_xn$GlyphBlocks$2Lrc2b.push(function (r269_xn$Capture_Ext$2Lrc2b) {
    var _r269_t0, _r269_t1;
    r269_xn$Capture_Ext$2Lrc2b['$defineGlyphBlockImpl$'](r269_xn$Capture_Ext$2Lrc2b, 'Symbol-Math-Arith', function (r270_xn$Capture$2Lrc8, r270_xn$ExportCapture$2Lrc4b) {
        var _r270_t9, _r270_t10, _r270_t11, _r270_tag12, _r270_t13, _r270_tag14, _r270_t15, _r270_tag16, _r270_t17, _r270_tag18, _r270_t19, _r270_tag20;
        var _r270_t0 = r270_xn$Capture$2Lrc8;
        var r270_xn$createAndSaveGlyphImpl$2Lrc3c = _r270_t0['$createAndSaveGlyphImpl$'];
        var r270_xn$NamedParameterPair$2Lrc9b = _r270_t0['$NamedParameterPair$'];
        var r270_xn$assignUnicodeImpl$2Lrc8b = _r270_t0['$assignUnicodeImpl$'];
        var r270_xn$execState$2Lrc0b = _r270_t0['$execState$'];
        var r270_MarkSet = _r270_t0.MarkSet;
        var _r270_t1 = r270_xn$Capture$2Lrc8.Metrics;
        var r270_Width = _r270_t1.Width;
        var r270_SB = _r270_t1.SB;
        var r270_XH = _r270_t1.XH;
        var r270_SymbolMid = _r270_t1.SymbolMid;
        var r270_ParenTop = _r270_t1.ParenTop;
        var r270_ParenBot = _r270_t1.ParenBot;
        var r270_PlusTop = _r270_t1.PlusTop;
        var r270_PlusBot = _r270_t1.PlusBot;
        var r270_ApparentTranslate = _r270_t1.ApparentTranslate;
        var r270_OX = _r270_t1.OX;
        var r270_Stroke = _r270_t1.Stroke;
        var r270_DotSize = _r270_t1.DotSize;
        var r270_WideWidth1 = _r270_t1.WideWidth1;
        var r270_RightSB = _r270_t1.RightSB;
        var r270_Middle = _r270_t1.Middle;
        var r270_DotRadius = _r270_t1.DotRadius;
        var r270_AdviceStroke = _r270_t1.AdviceStroke;
        var r270_OperatorStroke = _r270_t1.OperatorStroke;
        var r270_GeometryStroke = _r270_t1.GeometryStroke;
        var _r270_t2 = r270_xn$Capture$2Lrc8.SpiroFns;
        var r270_g2 = _r270_t2.g2;
        var r270_corner = _r270_t2.corner;
        var r270_flat = _r270_t2.flat;
        var r270_curl = _r270_t2.curl;
        var r270_widths = _r270_t2.widths;
        var r270_dispiro = _r270_t2.dispiro;
        var r270_xn$spirooutline$1aao = _r270_t2['spiro-outline'];
        var _r270_t3 = r270_xn$Capture$2Lrc8.BooleFns;
        var r270_union = _r270_t3.union;
        var r270_intersection = _r270_t3.intersection;
        var r270_difference = _r270_t3.difference;
        var _r270_t4 = r270_xn$Capture$2Lrc8.CommonShapes.resolve();
        var r270_Rect = _r270_t4.Rect;
        var r270_SquareAt = _r270_t4.SquareAt;
        var r270_DotAt = _r270_t4.DotAt;
        var r270_RingStrokeAt = _r270_t4.RingStrokeAt;
        var r270_HBar = _r270_t4.HBar;
        var r270_VBar = _r270_t4.VBar;
        var r270_xn$clearanchors$1aao = _r270_t4['clear-anchors'];
        var r270_DotVariants = _r270_t4.DotVariants;
        var _r270_t5 = r270_xn$Capture$2Lrc8['Common-Derivatives'].resolve();
        var r270_xn$selectvariant$7Hrq = _r270_t5['select-variant'];
        var r270_xn$referglyph$1aao = _r270_t5['refer-glyph'];
        var r270_alias = _r270_t5.alias;
        var r270_turned = _r270_t5.turned;
        var _r270_t6 = r270_xn$Capture$2Lrc8['Symbol-Math-Frame'].resolve();
        var r270_MathEnclosureSw = _r270_t6.MathEnclosureSw;
        var _r270_t7 = r270_xn$Capture$2Lrc8['Symbol-Math-Relation-Common'].resolve();
        var r270_EqualHalfSpace = _r270_t7.EqualHalfSpace;
        var _r270_t8 = r270_xn$Capture$2Lrc8['Symbol-Math-Relation-Sym'].resolve();
        var r270_symWave = _r270_t8.symWave;
        (function () {
            r270_xn$ExportCapture$2Lrc4b(function () {
                var _r279_t0, _r279_t1;
                return { 'PlusShape': r277_PlusShape };
            });
            var r277_PlusShape = function (r280_left, r280_right, r280_s, r280_sw) {
                var _r280_t0, _r280_t1;
                return r270_union(r270_HBar.m(r280_left, r280_right, r270_SymbolMid, r1_fallback(r280_sw, r270_OperatorStroke)), r270_VBar.m(r270_Middle + r1_fallback(r280_s, 0), r270_PlusTop, r270_PlusBot, r1_fallback(r280_sw, r270_OperatorStroke)));
            };
            r270_xn$createAndSaveGlyphImpl$2Lrc3c('plus', '+', r277_PlusShape(r270_SB, r270_RightSB));
            r270_xn$createAndSaveGlyphImpl$2Lrc3c('minus', 8722, r270_HBar.m(r270_SB, r270_RightSB, r270_SymbolMid, r270_OperatorStroke));
            var r277_IsraeliPlusShape = function (r283_left, r283_right, r283_s, r283_sw) {
                var _r283_t0, _r283_t1;
                return r270_union(r270_HBar.m(r283_left, r283_right, r270_SymbolMid, r1_fallback(r283_sw, r270_OperatorStroke)), r270_VBar.m(r270_Middle + r1_fallback(r283_s, 0), r270_PlusTop, r270_SymbolMid, r1_fallback(r283_sw, r270_OperatorStroke)));
            };
            r270_xn$createAndSaveGlyphImpl$2Lrc3c('israeliPlus', 64297, r277_IsraeliPlusShape(r270_SB, r270_RightSB));
            r270_xn$createAndSaveGlyphImpl$2Lrc3c('innerPlus', null, r277_PlusShape(r270_SB, r270_RightSB, 0, r270_MathEnclosureSw));
            r270_xn$createAndSaveGlyphImpl$2Lrc3c('innerMinus', null, r270_HBar.m(r270_SB, r270_RightSB, r270_SymbolMid, r270_MathEnclosureSw));
            r270_xn$createAndSaveGlyphImpl$2Lrc3c('innerVerticalBar', null, r270_VBar.m(r270_Middle, r270_PlusTop, r270_PlusBot, r270_MathEnclosureSw));
            r270_xn$createAndSaveGlyphImpl$2Lrc3c('innerIsraeliPlus', null, r277_IsraeliPlusShape(r270_SB, r270_RightSB, 0, r270_MathEnclosureSw));
            r270_xn$createAndSaveGlyphImpl$2Lrc3c('hermetianConjugateMatrixPlus', 8889, r270_difference(r277_PlusShape(r270_SB, r270_RightSB), r270_SquareAt(r270_Middle, r270_SymbolMid, r270_DotRadius)));
            r270_xn$createAndSaveGlyphImpl$2Lrc3c('plusminus', 177, function () {
                var _r292_t1;
                var _r292_t0 = this;
                var r292_currentGlyph = _r292_t0;
                r292_currentGlyph.include(r270_xn$referglyph$1aao('plus'));
                r292_currentGlyph.include(r270_HBar.b(r270_SB, r270_RightSB, 0, r270_OperatorStroke));
                return void 0;
            });
            r270_turned('minusplus', 8723, 'plusminus', r270_Middle, r270_SymbolMid);
            r270_xn$createAndSaveGlyphImpl$2Lrc3c('plustilde', 10790, function () {
                var _r297_t1;
                var _r297_t0 = this;
                var r297_currentGlyph = _r297_t0;
                r297_currentGlyph.include(r270_xn$referglyph$1aao('plus'));
                r297_currentGlyph.include(r270_symWave(0, 1));
                return void 0;
            });
            r270_turned('tildeplus', 10788, 'plustilde', r270_Middle, r270_SymbolMid);
            r270_xn$createAndSaveGlyphImpl$2Lrc3c('plusequal', 10866, function () {
                var _r302_t1;
                var _r302_t0 = this;
                var r302_currentGlyph = _r302_t0;
                r302_currentGlyph.include(r270_xn$referglyph$1aao('plus'));
                r302_currentGlyph.include(r270_ApparentTranslate(0, r270_EqualHalfSpace * 1.5));
                r302_currentGlyph.include(r270_HBar.b(r270_SB, r270_RightSB, r270_EqualHalfSpace * 1.5, r270_OperatorStroke));
                r302_currentGlyph.include(r270_HBar.b(r270_SB, r270_RightSB, 0, r270_OperatorStroke));
                return void 0;
            });
            r270_turned('equalplus', 10865, 'plusequal', r270_Middle, r270_SymbolMid);
            r270_xn$createAndSaveGlyphImpl$2Lrc3c('plusRing', 10786, function () {
                var _r309_t1;
                var _r309_t0 = this;
                var r309_currentGlyph = _r309_t0;
                r309_currentGlyph.include(r270_xn$referglyph$1aao('plus'), true, true);
                r309_currentGlyph.include(r270_MarkSet.plus());
                r309_currentGlyph.include(r270_xn$referglyph$1aao('ringAbove'));
                r309_currentGlyph.include(r270_xn$clearanchors$1aao());
                return void 0;
            });
            return r270_xn$createAndSaveGlyphImpl$2Lrc3c('plusCircumflex', 10787, function () {
                var _r316_t1;
                var _r316_t0 = this;
                var r316_currentGlyph = _r316_t0;
                r316_currentGlyph.include(r270_xn$referglyph$1aao('plus'), true, true);
                r316_currentGlyph.include(r270_MarkSet.plus());
                r316_currentGlyph.include(r270_xn$referglyph$1aao('circumflexAbove'));
                r316_currentGlyph.include(r270_xn$clearanchors$1aao());
                return void 0;
            });
        }());
        (function () {
            var r322_Size = 0.5 * (r270_RightSB - r270_SB) + 0.25 * r270_SB;
            var r322_swBowtie = r270_AdviceStroke(4.25);
            var r322_swBowtieHv = r270_AdviceStroke(4.75);
            var r322_MultiplyMask = function (r323_py, r323_p1, r323_p2) {
                var _r323_t0, _r323_t1;
                return r270_xn$spirooutline$1aao(r270_corner(r270_Middle - r323_p1 * r322_Size, r270_SymbolMid - r323_p1 * r323_py * r322_Size), r270_corner(r270_Middle + r323_p2 * r322_Size, r270_SymbolMid + r323_p2 * r323_py * r322_Size), r270_corner(r270_Middle + r323_p2 * r322_Size, r270_SymbolMid - r323_p2 * r323_py * r322_Size), r270_corner(r270_Middle - r323_p1 * r322_Size, r270_SymbolMid + r323_p1 * r323_py * r322_Size));
            };
            var r322_CoMultiplyMask = function (r324_py, r324_p1, r324_p2) {
                var _r324_t0, _r324_t1;
                return r270_xn$spirooutline$1aao(r270_corner(r270_Middle + r324_p2 * r322_Size, r270_SymbolMid + r324_p2 * r324_py * r322_Size), r270_corner(r270_Middle - r324_p1 * r322_Size, r270_SymbolMid - r324_p1 * r324_py * r322_Size), r270_corner(r270_Middle + r324_p2 * r322_Size, r270_SymbolMid - r324_p2 * r324_py * r322_Size), r270_corner(r270_Middle - r324_p1 * r322_Size, r270_SymbolMid + r324_p1 * r324_py * r322_Size));
            };
            var r322_MultiplyStroke1Shape = function (r325_s, r325_py, r325_p1, r325_p2) {
                var _r325_t0, _r325_t1;
                return r270_dispiro(r270_widths.center(r325_s), r270_flat(r270_Middle - r325_p1 * r322_Size, r270_SymbolMid - r325_p1 * r325_py * r322_Size), r270_curl(r270_Middle + r325_p2 * r322_Size, r270_SymbolMid + r325_p2 * r325_py * r322_Size));
            };
            var r322_MultiplyStroke2Shape = function (r326_s, r326_py, r326_p1, r326_p2) {
                var _r326_t0, _r326_t1;
                return r270_dispiro(r270_widths.center(r326_s), r270_flat(r270_Middle - r326_p1 * r322_Size, r270_SymbolMid + r326_p1 * r326_py * r322_Size), r270_curl(r270_Middle + r326_p2 * r322_Size, r270_SymbolMid - r326_p2 * r326_py * r322_Size));
            };
            r270_xn$createAndSaveGlyphImpl$2Lrc3c('multiply', 215, function () {
                var _r329_t1;
                var _r329_t0 = this;
                var r329_currentGlyph = _r329_t0;
                r329_currentGlyph.include(r322_MultiplyStroke1Shape(r270_OperatorStroke, 1, 1, 1));
                r329_currentGlyph.include(r322_MultiplyStroke2Shape(r270_OperatorStroke, 1, 1, 1));
                return void 0;
            });
            r270_xn$createAndSaveGlyphImpl$2Lrc3c('multiplyUnderbar', 10801, function () {
                var _r334_t1;
                var _r334_t0 = this;
                var r334_currentGlyph = _r334_t0;
                r334_currentGlyph.include(r270_xn$referglyph$1aao('multiply'));
                r334_currentGlyph.include(r270_HBar.b(r270_Middle - r322_Size, r270_Middle + r322_Size, 0, r270_OperatorStroke));
                return void 0;
            });
            r270_alias('vectorOrCrossProduct', 10799, 'multiply');
            r270_xn$createAndSaveGlyphImpl$2Lrc3c('multiplyInMulDiv', null, function () {
                var _r339_t1;
                var _r339_t0 = this;
                var r339_currentGlyph = _r339_t0;
                r339_currentGlyph.include(r322_MultiplyStroke1Shape(r322_swBowtie, 1, 1, 1));
                r339_currentGlyph.include(r322_MultiplyStroke2Shape(r322_swBowtie, 1, 1, 1));
                return void 0;
            });
            r270_xn$createAndSaveGlyphImpl$2Lrc3c('bowtie', 8904, function () {
                var _r344_t1;
                var _r344_t0 = this;
                var r344_currentGlyph = _r344_t0;
                r344_currentGlyph.include(r270_union(r270_intersection(r322_MultiplyMask(1, 1, 1), r270_union(r270_VBar.l(r270_Middle - r322_Size, r270_SymbolMid - r322_Size, r270_SymbolMid + r322_Size, r322_swBowtieHv), r270_VBar.r(r270_Middle + r322_Size, r270_SymbolMid - r322_Size, r270_SymbolMid + r322_Size, r322_swBowtieHv))), r270_intersection(r270_Rect(r270_ParenTop, r270_ParenBot, r270_Middle - r322_Size, r270_Middle + r322_Size), r270_union(r322_MultiplyStroke1Shape(r322_swBowtie, 1, 1, 1), r322_MultiplyStroke2Shape(r322_swBowtie, 1, 1, 1)))));
                return void 0;
            });
            r270_xn$createAndSaveGlyphImpl$2Lrc3c('bowtieLeft', 8905, function () {
                var _r348_t1;
                var _r348_t0 = this;
                var r348_currentGlyph = _r348_t0;
                r348_currentGlyph.include(r270_union(r270_intersection(r322_MultiplyMask(1, 1, 1), r270_VBar.l(r270_Middle - r322_Size, r270_SymbolMid - r322_Size, r270_SymbolMid + r322_Size, r322_swBowtieHv)), r270_intersection(r270_Rect(r270_ParenTop, r270_ParenBot, r270_Middle - r322_Size, r1_mix(r270_SB, r270_RightSB, 2)), r270_union(r322_MultiplyStroke1Shape(r322_swBowtie, 1, 1, 1), r322_MultiplyStroke2Shape(r322_swBowtie, 1, 1, 1)))));
                return void 0;
            });
            r270_xn$createAndSaveGlyphImpl$2Lrc3c('bowtieRight', 8906, function () {
                var _r352_t1;
                var _r352_t0 = this;
                var r352_currentGlyph = _r352_t0;
                r352_currentGlyph.include(r270_union(r270_intersection(r322_MultiplyMask(1, 1, 1), r270_VBar.r(r270_Middle + r322_Size, r270_SymbolMid - r322_Size, r270_SymbolMid + r322_Size, r322_swBowtieHv)), r270_intersection(r270_Rect(r270_ParenTop, r270_ParenBot, r1_mix(r270_RightSB, r270_SB, 2), r270_Middle + r322_Size), r270_union(r322_MultiplyStroke1Shape(r322_swBowtie, 1, 1, 1), r322_MultiplyStroke2Shape(r322_swBowtie, 1, 1, 1)))));
                return void 0;
            });
            r270_xn$createAndSaveGlyphImpl$2Lrc3c('bowtieBot', 10802, function () {
                var _r356_t1;
                var _r356_t0 = this;
                var r356_currentGlyph = _r356_t0;
                r356_currentGlyph.include(r270_union(r270_intersection(r322_CoMultiplyMask(1, 1, 1), r270_HBar.b(r270_Middle - r322_Size, r270_Middle + r322_Size, r270_SymbolMid - r322_Size, r322_swBowtieHv)), r270_intersection(r270_Rect(r270_ParenTop, r270_SymbolMid - r322_Size, -r270_Width, 2 * r270_Width), r270_union(r322_MultiplyStroke1Shape(r322_swBowtie, 1, 1, 1), r322_MultiplyStroke2Shape(r322_swBowtie, 1, 1, 1)))));
                return void 0;
            });
            r270_xn$createAndSaveGlyphImpl$2Lrc3c('bowtieWithLeftHalfBlack', 10705, r270_union(r270_xn$referglyph$1aao('bowtie'), r322_MultiplyMask(1, 1, 0)));
            r270_xn$createAndSaveGlyphImpl$2Lrc3c('bowtieWithRightHalfBlack', 10706, r270_union(r270_xn$referglyph$1aao('bowtie'), r322_MultiplyMask(1, 0, 1)));
            r270_xn$createAndSaveGlyphImpl$2Lrc3c('blackBowtie', 10707, r270_union(r270_xn$referglyph$1aao('bowtie'), r322_MultiplyMask(1, 1, 1)));
            r270_xn$createAndSaveGlyphImpl$2Lrc3c('timesWithLeftHalfBlack', 10708, r270_union(r270_xn$referglyph$1aao('bowtieLeft'), r322_MultiplyMask(1, 1, 0)));
            r270_xn$createAndSaveGlyphImpl$2Lrc3c('timesWithRightHalfBlack', 10709, r270_union(r270_xn$referglyph$1aao('bowtieRight'), r322_MultiplyMask(1, 0, 1)));
            var r322_HourglassStretch = 1.6;
            r270_xn$createAndSaveGlyphImpl$2Lrc3c('whiteHourglass', 10710, function () {
                var _r365_t1;
                var _r365_t0 = this;
                var r365_currentGlyph = _r365_t0;
                r365_currentGlyph.include(r270_union(r270_intersection(r322_CoMultiplyMask(r322_HourglassStretch, 1, 1), r270_union(r270_HBar.t(r270_Middle - r322_Size, r270_Middle + r322_Size, r270_SymbolMid + r322_HourglassStretch * r322_Size, r322_swBowtieHv), r270_HBar.b(r270_Middle - r322_Size, r270_Middle + r322_Size, r270_SymbolMid - r322_HourglassStretch * r322_Size, r322_swBowtieHv))), r270_intersection(r270_Rect(r270_SymbolMid + r322_HourglassStretch * r322_Size, r270_SymbolMid - r322_HourglassStretch * r322_Size, -r270_Width, 2 * r270_Width), r270_union(r322_MultiplyStroke1Shape(r322_swBowtie, r322_HourglassStretch, 1, 1), r322_MultiplyStroke2Shape(r322_swBowtie, r322_HourglassStretch, 1, 1)))));
                return void 0;
            });
            r270_xn$createAndSaveGlyphImpl$2Lrc3c('blackHourglass', 10711, function () {
                var _r369_t1;
                var _r369_t0 = this;
                var r369_currentGlyph = _r369_t0;
                r369_currentGlyph.include(r270_union(r270_xn$referglyph$1aao('whiteHourglass'), r322_CoMultiplyMask(r322_HourglassStretch, 1, 1)));
                return void 0;
            });
            r270_xn$createAndSaveGlyphImpl$2Lrc3c('leftSemidirectProduct', 8907, function () {
                var _r373_t1;
                var _r373_t0 = this;
                var r373_currentGlyph = _r373_t0;
                r373_currentGlyph.include(r322_MultiplyStroke1Shape(r270_OperatorStroke, 1, 1, 0));
                r373_currentGlyph.include(r322_MultiplyStroke2Shape(r270_OperatorStroke, 1, 1, 1));
                return void 0;
            });
            r270_xn$createAndSaveGlyphImpl$2Lrc3c('rightSemidirectProduct', 8908, function () {
                var _r378_t1;
                var _r378_t0 = this;
                var r378_currentGlyph = _r378_t0;
                r378_currentGlyph.include(r322_MultiplyStroke1Shape(r270_OperatorStroke, 1, 1, 1));
                r378_currentGlyph.include(r322_MultiplyStroke2Shape(r270_OperatorStroke, 1, 0, 1));
                return void 0;
            });
            r270_xn$createAndSaveGlyphImpl$2Lrc3c('innerMultiplyStroke1', null, function () {
                var _r383_t1;
                var _r383_t0 = this;
                var r383_currentGlyph = _r383_t0;
                r383_currentGlyph.include(r322_MultiplyStroke1Shape(r270_MathEnclosureSw, 1, 1, 1));
                return void 0;
            });
            r270_xn$createAndSaveGlyphImpl$2Lrc3c('innerMultiplyStroke2', null, function () {
                var _r387_t1;
                var _r387_t0 = this;
                var r387_currentGlyph = _r387_t0;
                r387_currentGlyph.include(r322_MultiplyStroke2Shape(r270_MathEnclosureSw, 1, 1, 1));
                return void 0;
            });
            return r270_xn$createAndSaveGlyphImpl$2Lrc3c('innerMultiply', null, function () {
                var _r391_t1;
                var _r391_t0 = this;
                var r391_currentGlyph = _r391_t0;
                r391_currentGlyph.include(r322_MultiplyStroke1Shape(r270_MathEnclosureSw, 1, 1, 1));
                r391_currentGlyph.include(r322_MultiplyStroke2Shape(r270_MathEnclosureSw, 1, 1, 1));
                return void 0;
            });
        }());
        r270_alias('mathAsterisk', 8727, 'opAsterisk.low');
        (function () {
            var r395_suffix, r395_DrawAt, r395_kDotRadius, r395_overshoot, _r395_t2, _r395_t3, _r395_tag4;
            var _r395_t0 = Object.entries(r270_DotVariants)[Symbol.iterator]();
            var _r395_t1 = void 0;
            while (!(_r395_t1 = _r395_t0.next()).done) {
                _r395_t2 = _r395_t1.value;
                r395_suffix = _r395_t2[0];
                r395_DrawAt = _r395_t2[1][0];
                r395_kDotRadius = _r395_t2[1][1];
                r395_overshoot = _r395_t2[1][2];
                _r395_t2[1];
                (function () {
                    var r398_dr = r270_DotRadius * r395_kDotRadius * r270_OperatorStroke / r270_Stroke;
                    r270_xn$createAndSaveGlyphImpl$2Lrc3c('dotplus.' + r395_suffix, null, function () {
                        var _r401_t1;
                        var _r401_t0 = this;
                        var r401_currentGlyph = _r401_t0;
                        var r401_gap = r270_AdviceStroke(12);
                        r401_currentGlyph.include(r270_union(r395_DrawAt(r270_Middle, r270_SymbolMid * 2 - r270_OperatorStroke / 2, r398_dr - r395_overshoot), r270_difference(r270_xn$referglyph$1aao('plus'), r395_DrawAt(r270_Middle, r270_SymbolMid * 2 - r270_OperatorStroke / 2, r398_dr + r401_gap - r395_overshoot))));
                        return void 0;
                    });
                    r270_xn$createAndSaveGlyphImpl$2Lrc3c('dotminus.' + r395_suffix, null, function () {
                        var _r405_t1;
                        var _r405_t0 = this;
                        var r405_currentGlyph = _r405_t0;
                        r405_currentGlyph.include(r270_xn$referglyph$1aao('minus'), true, true);
                        r405_currentGlyph.include(r395_DrawAt(r270_Middle, r270_PlusTop, r398_dr - r395_overshoot));
                        return void 0;
                    });
                    r270_xn$createAndSaveGlyphImpl$2Lrc3c('dottimes.' + r395_suffix, null, function () {
                        var _r410_t1;
                        var _r410_t0 = this;
                        var r410_currentGlyph = _r410_t0;
                        r410_currentGlyph.include(r270_xn$referglyph$1aao('multiply'));
                        var r410_sw = r270_AdviceStroke(4);
                        var r410_gap = (r270_RightSB - r270_SB) / 2;
                        r410_currentGlyph.include(r395_DrawAt(r270_Middle, r270_SymbolMid + r410_gap, r398_dr * r410_sw / r270_OperatorStroke - r395_overshoot));
                        return void 0;
                    });
                    r270_xn$createAndSaveGlyphImpl$2Lrc3c('geometricProportion.' + r395_suffix, null, function () {
                        var _r415_t1;
                        var _r415_t0 = this;
                        var r415_currentGlyph = _r415_t0;
                        r415_currentGlyph.include(r270_xn$referglyph$1aao('minus'), true, true);
                        r415_currentGlyph.include(r395_DrawAt(r270_SB + r398_dr, r270_PlusTop, r398_dr - r395_overshoot));
                        r415_currentGlyph.include(r395_DrawAt(r270_SB + r398_dr, r270_PlusBot, r398_dr - r395_overshoot));
                        r415_currentGlyph.include(r395_DrawAt(r270_RightSB - r398_dr, r270_PlusTop, r398_dr - r395_overshoot));
                        r415_currentGlyph.include(r395_DrawAt(r270_RightSB - r398_dr, r270_PlusBot, r398_dr - r395_overshoot));
                        return void 0;
                    });
                    r270_xn$createAndSaveGlyphImpl$2Lrc3c('minusColon.' + r395_suffix, null, function () {
                        var _r423_t1;
                        var _r423_t0 = this;
                        var r423_currentGlyph = _r423_t0;
                        r423_currentGlyph.include(r395_DrawAt(r270_Middle, r398_dr, r398_dr - r395_overshoot));
                        r423_currentGlyph.include(r395_DrawAt(r270_Middle, r270_XH - r398_dr, r398_dr - r395_overshoot));
                        var r423_sbSquash = 0.5;
                        var r423_delta = Math.max(0, r270_Middle - r398_dr - r270_SB * r423_sbSquash);
                        r423_currentGlyph.include(r270_ApparentTranslate(+r423_delta, r270_SymbolMid - r270_XH / 2));
                        r423_currentGlyph.include(r270_HBar.m(r270_SB * r423_sbSquash, r270_RightSB - r270_DotSize, r270_SymbolMid, r270_OperatorStroke));
                        return void 0;
                    });
                    r270_xn$createAndSaveGlyphImpl$2Lrc3c('divide.' + r395_suffix, null, function () {
                        var _r430_t1;
                        var _r430_t0 = this;
                        var r430_currentGlyph = _r430_t0;
                        r430_currentGlyph.include(r270_xn$referglyph$1aao('minus'));
                        var r430_gap = (r270_RightSB - r270_SB) / 2;
                        r430_currentGlyph.include(r395_DrawAt(r270_Middle, r270_SymbolMid + r430_gap, r398_dr - r395_overshoot));
                        r430_currentGlyph.include(r395_DrawAt(r270_Middle, r270_SymbolMid - r430_gap, r398_dr - r395_overshoot));
                        return void 0;
                    });
                    r270_xn$createAndSaveGlyphImpl$2Lrc3c('innerDivide.' + r395_suffix, null, function () {
                        var _r436_t1;
                        var _r436_t0 = this;
                        var r436_currentGlyph = _r436_t0;
                        r436_currentGlyph.include(r270_xn$referglyph$1aao('innerMinus'));
                        var r436_sw = r270_MathEnclosureSw / 1.5;
                        r436_currentGlyph.include(r395_DrawAt(r270_Middle, r1_mix(r270_SymbolMid, r270_PlusTop, 0.5), r398_dr * r436_sw / r270_OperatorStroke - r395_overshoot));
                        r436_currentGlyph.include(r395_DrawAt(r270_Middle, r1_mix(r270_SymbolMid, r270_PlusBot, 0.5), r398_dr * r436_sw / r270_OperatorStroke - r395_overshoot));
                        return void 0;
                    });
                    r270_xn$createAndSaveGlyphImpl$2Lrc3c('rotatedInnerDivide.' + r395_suffix, null, function () {
                        var _r442_t1;
                        var _r442_t0 = this;
                        var r442_currentGlyph = _r442_t0;
                        r442_currentGlyph.include(r270_xn$referglyph$1aao('innerMultiplyStroke1'));
                        var r442_sw = r270_MathEnclosureSw / 1.5;
                        r442_currentGlyph.include(r395_DrawAt(r1_mix(r270_Middle, r270_SB, 0.35), r1_mix(r270_SymbolMid, r270_PlusTop, 0.35), r398_dr * r442_sw / r270_OperatorStroke - r395_overshoot));
                        r442_currentGlyph.include(r395_DrawAt(r1_mix(r270_Middle, r270_RightSB, 0.35), r1_mix(r270_SymbolMid, r270_PlusBot, 0.35), r398_dr * r442_sw / r270_OperatorStroke - r395_overshoot));
                        return void 0;
                    });
                    r270_xn$createAndSaveGlyphImpl$2Lrc3c('divisionTimes.' + r395_suffix, null, function () {
                        var _r448_t1;
                        var _r448_t0 = this;
                        var r448_currentGlyph = _r448_t0;
                        var r448_sw = r270_AdviceStroke(4);
                        var r448_gap = (r270_RightSB - r270_SB) / 2;
                        r448_currentGlyph.include(r270_union(r270_xn$referglyph$1aao('multiplyInMulDiv'), r270_HBar.m(r270_SB, r270_RightSB, r270_SymbolMid, r448_sw), r395_DrawAt(r270_Middle, r270_SymbolMid + r448_gap, r398_dr * r448_sw / r270_OperatorStroke - r395_overshoot), r395_DrawAt(r270_Middle, r270_SymbolMid - r448_gap, r398_dr * r448_sw / r270_OperatorStroke - r395_overshoot)));
                        return void 0;
                    });
                    r270_xn$createAndSaveGlyphImpl$2Lrc3c('minusFallingDots.' + r395_suffix, null, function () {
                        var _r452_t1;
                        var _r452_t0 = this;
                        var r452_currentGlyph = _r452_t0;
                        r452_currentGlyph.include(r270_xn$referglyph$1aao('minus'));
                        var r452_gap = (r270_RightSB - r270_SB) / 2;
                        r452_currentGlyph.include(r395_DrawAt(r1_mix(r270_SB, r270_RightSB, 1 / 6), r270_SymbolMid + r452_gap, r398_dr - r395_overshoot));
                        r452_currentGlyph.include(r395_DrawAt(r1_mix(r270_SB, r270_RightSB, 5 / 6), r270_SymbolMid - r452_gap, r398_dr - r395_overshoot));
                        return void 0;
                    });
                    return r270_xn$createAndSaveGlyphImpl$2Lrc3c('minusRisingDots.' + r395_suffix, null, function () {
                        var _r458_t1;
                        var _r458_t0 = this;
                        var r458_currentGlyph = _r458_t0;
                        r458_currentGlyph.include(r270_xn$referglyph$1aao('minus'));
                        var r458_gap = (r270_RightSB - r270_SB) / 2;
                        r458_currentGlyph.include(r395_DrawAt(r1_mix(r270_SB, r270_RightSB, 1 / 6), r270_SymbolMid - r458_gap, r398_dr - r395_overshoot));
                        r458_currentGlyph.include(r395_DrawAt(r1_mix(r270_SB, r270_RightSB, 5 / 6), r270_SymbolMid + r458_gap, r398_dr - r395_overshoot));
                        return void 0;
                    });
                }());
            }
            r270_xn$selectvariant$7Hrq('dotplus', 8724, new r270_xn$NamedParameterPair$2Lrc9b('follow', 'punctuationDot'));
            r270_turned('plusdot', 10789, 'dotplus', r270_Middle, r270_SymbolMid);
            r270_xn$selectvariant$7Hrq('dotminus', 8760, new r270_xn$NamedParameterPair$2Lrc9b('follow', 'punctuationDot'));
            r270_turned('minusdot', 10794, 'dotminus', r270_Middle, r270_SymbolMid);
            r270_xn$selectvariant$7Hrq('dottimes', 10800, new r270_xn$NamedParameterPair$2Lrc9b('follow', 'punctuationDot'));
            r270_xn$selectvariant$7Hrq('geometricProportion', 8762, new r270_xn$NamedParameterPair$2Lrc9b('follow', 'punctuationDot'));
            r270_xn$selectvariant$7Hrq('minusColon', 8761, new r270_xn$NamedParameterPair$2Lrc9b('follow', 'punctuationDot'));
            r270_xn$selectvariant$7Hrq('divide', 247, new r270_xn$NamedParameterPair$2Lrc9b('follow', 'punctuationDot'));
            r270_xn$selectvariant$7Hrq('innerDivide', null, new r270_xn$NamedParameterPair$2Lrc9b('follow', 'punctuationDot'));
            r270_xn$selectvariant$7Hrq('rotatedInnerDivide', null, new r270_xn$NamedParameterPair$2Lrc9b('follow', 'punctuationDot'));
            r270_xn$selectvariant$7Hrq('divisionTimes', 8903, new r270_xn$NamedParameterPair$2Lrc9b('follow', 'punctuationDot'));
            r270_xn$selectvariant$7Hrq('minusFallingDots', 10795, new r270_xn$NamedParameterPair$2Lrc9b('follow', 'punctuationDot'));
            return r270_xn$selectvariant$7Hrq('minusRisingDots', 10796, new r270_xn$NamedParameterPair$2Lrc9b('follow', 'punctuationDot'));
        }());
        (function () {
            var r474_fine = r270_AdviceStroke(5.5);
            var r474_radius = Math.max((r270_RightSB - r270_SB) / 8, r474_fine / 2);
            var r474_barOffset = r474_radius;
            var r474_dotCenterOffset = r270_OX + r474_fine + r474_radius;
            r270_xn$createAndSaveGlyphImpl$2Lrc3c('originalOf', 8886, function () {
                var _r477_t1;
                var _r477_t0 = this;
                var r477_currentGlyph = _r477_t0;
                r477_currentGlyph.include(r270_difference(r270_union(r270_HBar.m(r270_SB + r474_barOffset, r270_RightSB - r474_barOffset, r270_SymbolMid, r270_OperatorStroke), r270_DotAt(r270_SB + r474_dotCenterOffset, r270_SymbolMid, r474_radius + r474_fine), r270_DotAt(r270_RightSB - r474_dotCenterOffset, r270_SymbolMid, r474_radius + r474_fine)), r270_DotAt(r270_SB + r474_dotCenterOffset, r270_SymbolMid, r474_radius)));
                return void 0;
            });
            r270_xn$createAndSaveGlyphImpl$2Lrc3c('imageOf', 8887, function () {
                var _r481_t1;
                var _r481_t0 = this;
                var r481_currentGlyph = _r481_t0;
                r481_currentGlyph.include(r270_difference(r270_union(r270_HBar.m(r270_SB + r474_barOffset, r270_RightSB - r474_barOffset, r270_SymbolMid, r270_OperatorStroke), r270_DotAt(r270_SB + r474_dotCenterOffset, r270_SymbolMid, r474_radius + r474_fine), r270_DotAt(r270_RightSB - r474_dotCenterOffset, r270_SymbolMid, r474_radius + r474_fine)), r270_DotAt(r270_RightSB - r474_dotCenterOffset, r270_SymbolMid, r474_radius)));
                return void 0;
            });
            var r474_singleSideFine = r270_AdviceStroke(4);
            var r474_singleSideRadius = Math.max((r270_RightSB - r270_SB) / 6, r474_singleSideFine / 2);
            r270_xn$createAndSaveGlyphImpl$2Lrc3c('multimap', 8888, function () {
                var _r485_t1;
                var _r485_t0 = this;
                var r485_currentGlyph = _r485_t0;
                r485_currentGlyph.include(r270_difference(r270_union(r270_HBar.m(r270_SB, r270_RightSB - r474_singleSideRadius, r270_SymbolMid, r270_OperatorStroke), r270_DotAt(r270_RightSB - r474_dotCenterOffset, r270_SymbolMid, r474_singleSideRadius + r474_singleSideFine)), r270_DotAt(r270_RightSB - r474_dotCenterOffset, r270_SymbolMid, r474_singleSideRadius)));
                return void 0;
            });
            r270_xn$createAndSaveGlyphImpl$2Lrc3c('leftMultimap', 10204, function () {
                var _r489_t1;
                var _r489_t0 = this;
                var r489_currentGlyph = _r489_t0;
                r489_currentGlyph.include(r270_difference(r270_union(r270_HBar.m(r270_SB + r474_singleSideRadius, r270_RightSB, r270_SymbolMid, r270_OperatorStroke), r270_DotAt(r270_SB + r474_dotCenterOffset, r270_SymbolMid, r474_singleSideRadius + r474_singleSideFine)), r270_DotAt(r270_SB + r474_dotCenterOffset, r270_SymbolMid, r474_singleSideRadius)));
                return void 0;
            });
            r270_xn$createAndSaveGlyphImpl$2Lrc3c('doubleMultimap', 10719, function () {
                var _r493_t1;
                var _r493_t0 = this;
                var r493_currentGlyph = _r493_t0;
                r493_currentGlyph.include(r270_difference(r270_union(r270_HBar.m(r270_SB + r474_barOffset, r270_RightSB - r474_barOffset, r270_SymbolMid, r270_OperatorStroke), r270_DotAt(r270_SB + r474_dotCenterOffset, r270_SymbolMid, r474_radius + r474_fine), r270_DotAt(r270_RightSB - r474_dotCenterOffset, r270_SymbolMid, r474_radius + r474_fine)), r270_union(r270_DotAt(r270_SB + r474_dotCenterOffset, r270_SymbolMid, r474_radius), r270_DotAt(r270_RightSB - r474_dotCenterOffset, r270_SymbolMid, r474_radius))));
                return void 0;
            });
            r270_xn$createAndSaveGlyphImpl$2Lrc3c('mathSmallCircle', 8728, r270_RingStrokeAt(r270_Middle, r270_SymbolMid, r474_singleSideRadius + r474_singleSideFine, r474_singleSideFine));
            return r270_alias('ringpoint', 11824, 'mathSmallCircle');
        }());
        r270_xn$createAndSaveGlyphImpl$2Lrc3c('wreathProduct', 8768, function () {
            var _r498_t1;
            var _r498_t0 = this;
            var r498_currentGlyph = _r498_t0;
            r498_currentGlyph.include(r270_dispiro(r270_widths.center(r270_OperatorStroke), r270_g2(r1_mix(r270_SB, r270_RightSB, 0.45), r1_mix(r270_PlusBot, r270_PlusTop, 1)), r270_g2(r1_mix(r270_SB, r270_RightSB, 0.64), r1_mix(r270_PlusBot, r270_PlusTop, 0.75)), r270_g2(r1_mix(r270_SB, r270_RightSB, 0.5), r1_mix(r270_PlusBot, r270_PlusTop, 0.5)), r270_g2(r1_mix(r270_SB, r270_RightSB, 0.36), r1_mix(r270_PlusBot, r270_PlusTop, 0.25)), r270_g2(r1_mix(r270_SB, r270_RightSB, 0.55), r1_mix(r270_PlusBot, r270_PlusTop, 0))));
            return void 0;
        });
        return function () {
            var r502_FMosaicWide, r502_MosaicNameSuffix, r502_MosaicWidth, r502_MosaicWidthScalar, _r502_t3, _r502_t5, _r502_t6, _r502_tag7;
            var r502_WidthKinds = [
                [
                    0,
                    '.NWID',
                    r270_xn$Capture$2Lrc8.Metrics.Width,
                    1
                ],
                [
                    1,
                    '.WWID',
                    r270_xn$Capture$2Lrc8.Metrics.WideWidth0,
                    2
                ]
            ];
            var _r502_t0 = r502_WidthKinds;
            var _r502_t1 = _r502_t0.length;
            var _r502_t2 = 0;
            var _r502_t4 = _r502_t2 < _r502_t1;
            while (_r502_t4) {
                _r502_t3 = _r502_t0[_r502_t2];
                r502_FMosaicWide = _r502_t3[0];
                r502_MosaicNameSuffix = _r502_t3[1];
                r502_MosaicWidth = _r502_t3[2];
                r502_MosaicWidthScalar = _r502_t3[3];
                (function () {
                    var r505_MosaicDesiredWidth = r270_WideWidth1;
                    var r505_MosaicMiddle = r502_MosaicWidth / 2;
                    var r505_MosaicUnitWidth = r502_MosaicWidth / r502_MosaicWidthScalar;
                    var r505_MangleUnicode = function (r506_unicode, r506__desiredOverride) {
                        var _r506_t0, _r506_t1;
                        return r502_MosaicWidth === (r506__desiredOverride || r505_MosaicDesiredWidth) ? r506_unicode : void 0;
                    };
                    var r505_MangleName = function (r507_name) {
                        var _r507_t0, _r507_t1;
                        return r507_name + r502_MosaicNameSuffix;
                    };
                    r270_xn$createAndSaveGlyphImpl$2Lrc3c(r505_MangleName('innerPlusBig'), null, function () {
                        var _r510_t1;
                        var _r510_t0 = this;
                        var r510_currentGlyph = _r510_t0;
                        r510_currentGlyph.setWidth(r502_MosaicWidth);
                        r510_currentGlyph.include(r270_union(r270_HBar.m(r270_SB, r502_MosaicWidth - r270_SB, r270_SymbolMid, r270_GeometryStroke), r270_VBar.m(r505_MosaicMiddle, r1_mix(r270_SymbolMid, r270_PlusTop, r502_MosaicWidthScalar), r1_mix(r270_SymbolMid, r270_PlusBot, r502_MosaicWidthScalar), r270_GeometryStroke)));
                        return void 0;
                    });
                    r270_xn$createAndSaveGlyphImpl$2Lrc3c(r505_MangleName('innerMultiplyStroke1Big'), null, function () {
                        var _r515_t1;
                        var _r515_t0 = this;
                        var r515_currentGlyph = _r515_t0;
                        r515_currentGlyph.setWidth(r502_MosaicWidth);
                        var r515_radius = (r270_RightSB - r270_SB) / 2 * Math.sqrt(r502_MosaicWidthScalar);
                        r515_currentGlyph.include(r270_dispiro(r270_widths.center(r270_GeometryStroke), r270_flat(r505_MosaicMiddle - r515_radius, r270_SymbolMid - r515_radius), r270_curl(r505_MosaicMiddle + r515_radius, r270_SymbolMid + r515_radius)));
                        return void 0;
                    });
                    r270_xn$createAndSaveGlyphImpl$2Lrc3c(r505_MangleName('innerMultiplyStroke2Big'), null, function () {
                        var _r520_t1;
                        var _r520_t0 = this;
                        var r520_currentGlyph = _r520_t0;
                        r520_currentGlyph.setWidth(r502_MosaicWidth);
                        var r520_radius = (r270_RightSB - r270_SB) / 2 * Math.sqrt(r502_MosaicWidthScalar);
                        r520_currentGlyph.include(r270_dispiro(r270_widths.center(r270_GeometryStroke), r270_flat(r505_MosaicMiddle + r520_radius, r270_SymbolMid - r520_radius), r270_curl(r505_MosaicMiddle - r520_radius, r270_SymbolMid + r520_radius)));
                        return void 0;
                    });
                    r270_xn$createAndSaveGlyphImpl$2Lrc3c(r505_MangleName('innerMultiplyBig'), null, function () {
                        var _r525_t1;
                        var _r525_t0 = this;
                        var r525_currentGlyph = _r525_t0;
                        r525_currentGlyph.setWidth(r502_MosaicWidth);
                        r525_currentGlyph.include(r270_xn$referglyph$1aao(r505_MangleName('innerMultiplyStroke1Big')));
                        r525_currentGlyph.include(r270_xn$referglyph$1aao(r505_MangleName('innerMultiplyStroke2Big')));
                        return void 0;
                    });
                    r270_xn$createAndSaveGlyphImpl$2Lrc3c(r505_MangleName('risingDiagonal'), r505_MangleUnicode(10187), function () {
                        var _r531_t1;
                        var _r531_t0 = this;
                        var r531_currentGlyph = _r531_t0;
                        r531_currentGlyph.setWidth(r502_MosaicWidth);
                        r531_currentGlyph.include(r270_dispiro(r270_widths.center(r270_OperatorStroke), r270_flat(r270_SB, r270_ParenBot), r270_curl(r502_MosaicWidth - r270_SB, r270_ParenTop)));
                        return void 0;
                    });
                    return r270_xn$createAndSaveGlyphImpl$2Lrc3c(r505_MangleName('fallingDiagonal'), r505_MangleUnicode(10189), function () {
                        var _r536_t1;
                        var _r536_t0 = this;
                        var r536_currentGlyph = _r536_t0;
                        r536_currentGlyph.setWidth(r502_MosaicWidth);
                        r536_currentGlyph.include(r270_dispiro(r270_widths.center(r270_OperatorStroke), r270_flat(r270_SB, r270_ParenTop), r270_curl(r502_MosaicWidth - r270_SB, r270_ParenBot)));
                        return void 0;
                    });
                }());
                _r502_t5 = _r502_t2 = _r502_t2 + 1;
                _r502_t4 = _r502_t2 < _r502_t1;
            }
            return _r502_t5;
        }();
    });
    return void 0;
});
