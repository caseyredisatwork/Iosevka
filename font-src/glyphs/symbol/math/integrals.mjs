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
    r269_xn$Capture_Ext$2Lrc2b['$defineGlyphBlockImpl$'](r269_xn$Capture_Ext$2Lrc2b, 'Symbol-Math-Integrals', function (r270_xn$Capture$2Lrc8, r270_xn$ExportCapture$2Lrc4b) {
        var _r270_t7, _r270_t8;
        var _r270_t0 = r270_xn$Capture$2Lrc8;
        var r270_xn$createAndSaveGlyphImpl$2Lrc3c = _r270_t0['$createAndSaveGlyphImpl$'];
        var r270_xn$NamedParameterPair$2Lrc9b = _r270_t0['$NamedParameterPair$'];
        var r270_xn$assignUnicodeImpl$2Lrc8b = _r270_t0['$assignUnicodeImpl$'];
        var r270_xn$execState$2Lrc0b = _r270_t0['$execState$'];
        var r270_fontMetrics = _r270_t0.fontMetrics;
        var _r270_t1 = r270_xn$Capture$2Lrc8.Metrics;
        var r270_Width = _r270_t1.Width;
        var r270_SB = _r270_t1.SB;
        var r270_SymbolMid = _r270_t1.SymbolMid;
        var r270_BgOpTop = _r270_t1.BgOpTop;
        var r270_BgOpBot = _r270_t1.BgOpBot;
        var r270_Translate = _r270_t1.Translate;
        var r270_HVContrast = _r270_t1.HVContrast;
        var r270_Hook = _r270_t1.Hook;
        var r270_Stroke = _r270_t1.Stroke;
        var r270_RightSB = _r270_t1.RightSB;
        var r270_Middle = _r270_t1.Middle;
        var r270_DotRadius = _r270_t1.DotRadius;
        var r270_AdviceStroke = _r270_t1.AdviceStroke;
        var r270_OperatorStroke = _r270_t1.OperatorStroke;
        var _r270_t2 = r270_xn$Capture$2Lrc8.SpiroFns;
        var r270_corner = _r270_t2.corner;
        var r270_xn$spirooutline$1aao = _r270_t2['spiro-outline'];
        var _r270_t3 = r270_xn$Capture$2Lrc8.BooleFns;
        var r270_union = _r270_t3.union;
        var r270_intersection = _r270_t3.intersection;
        var r270_difference = _r270_t3.difference;
        var _r270_t4 = r270_xn$Capture$2Lrc8.CommonShapes.resolve();
        var r270_Rect = _r270_t4.Rect;
        var r270_OShape = _r270_t4.OShape;
        var r270_OShapeOutline = _r270_t4.OShapeOutline;
        var r270_ForceUpright = _r270_t4.ForceUpright;
        var r270_WithTransform = _r270_t4.WithTransform;
        var r270_MaskAbove = _r270_t4.MaskAbove;
        var r270_MaskBelow = _r270_t4.MaskBelow;
        var r270_MaskRight = _r270_t4.MaskRight;
        var r270_WithDotVariants = _r270_t4.WithDotVariants;
        var _r270_t5 = r270_xn$Capture$2Lrc8['Common-Derivatives'].resolve();
        var r270_HDual = _r270_t5.HDual;
        var _r270_t6 = r270_xn$Capture$2Lrc8['Letter-Latin-Long-S'].resolve();
        var r270_LongSShape = _r270_t6.LongSShape;
        var r270_MosaicTop = r270_fontMetrics.os2.sTypoAscender;
        var r270_MosaicBottom = r270_fontMetrics.os2.sTypoDescender;
        var r270_MosaicHeight = r270_MosaicTop - r270_MosaicBottom;
        var r270_IntHookY = r270_Hook * 0.75;
        r270_xn$createAndSaveGlyphImpl$2Lrc3c('integrate', 8747, function () {
            var _r276_t1;
            var _r276_t0 = this;
            var r276_currentGlyph = _r276_t0;
            r276_currentGlyph.include(r270_LongSShape(r270_BgOpTop, r270_BgOpBot, r270_Hook, r270_IntHookY, r270_OperatorStroke));
            return void 0;
        });
        r270_HDual('doubleIntegrate', 8748, 'integrate', 0.4 * r270_Width);
        r270_xn$createAndSaveGlyphImpl$2Lrc3c('integralUpper', 8992, function () {
            var _r280_t1;
            var _r280_t0 = this;
            var r280_currentGlyph = _r280_t0;
            r280_currentGlyph.include(r270_ForceUpright());
            r280_currentGlyph.include(r270_intersection(r270_Rect(r270_MosaicTop, r270_MosaicBottom, -r270_Width, 2 * r270_Width), r270_LongSShape(r270_BgOpTop, r270_BgOpBot - r270_MosaicHeight * 2, r270_Hook, r270_IntHookY, r270_OperatorStroke)));
            return void 0;
        });
        r270_xn$createAndSaveGlyphImpl$2Lrc3c('integralExtension', 9134, function () {
            var _r285_t1;
            var _r285_t0 = this;
            var r285_currentGlyph = _r285_t0;
            r285_currentGlyph.include(r270_ForceUpright());
            r285_currentGlyph.include(r270_intersection(r270_Rect(r270_MosaicTop, r270_MosaicBottom, -r270_Width, 2 * r270_Width), r270_LongSShape(r270_BgOpTop + r270_MosaicHeight, r270_BgOpBot - r270_MosaicHeight, r270_Hook, r270_IntHookY, r270_OperatorStroke)));
            return void 0;
        });
        r270_xn$createAndSaveGlyphImpl$2Lrc3c('integralLower', 8993, function () {
            var _r290_t1;
            var _r290_t0 = this;
            var r290_currentGlyph = _r290_t0;
            r290_currentGlyph.include(r270_ForceUpright());
            r290_currentGlyph.include(r270_intersection(r270_Rect(r270_MosaicTop, r270_MosaicBottom, -r270_Width, 2 * r270_Width), r270_LongSShape(r270_BgOpTop + r270_MosaicHeight * 2, r270_BgOpBot, r270_Hook, r270_IntHookY, r270_OperatorStroke)));
            return void 0;
        });
        r270_xn$createAndSaveGlyphImpl$2Lrc3c('tripleIntegrate', 8749, function () {
            var _r295_t1;
            var _r295_t0 = this;
            var r295_currentGlyph = _r295_t0;
            var r295_shape = function () {
                var _r296_t0, _r296_t1;
                return r270_LongSShape(r270_BgOpTop, r270_BgOpBot, r270_Hook * 0.75, r270_IntHookY, r270_AdviceStroke(4));
            };
            r295_currentGlyph.include(r295_shape());
            r295_currentGlyph.include(r270_Translate(-r270_Width * 0.275, 0));
            r295_currentGlyph.include(r295_shape());
            r295_currentGlyph.include(r270_Translate(-r270_Width * 0.275, 0));
            r295_currentGlyph.include(r295_shape());
            r295_currentGlyph.include(r270_Translate(r270_Width * 0.275, 0));
            return void 0;
        });
        var r270_IntegrateRingMask = function (r303_kx) {
            var _r303_t0, _r303_t1;
            return r270_OShapeOutline.NoOvershoot(r270_SymbolMid + (r270_RightSB - r270_SB) / 2, r270_SymbolMid - (r270_RightSB - r270_SB) / 2, r1_mix(0, r270_SB, r303_kx), r1_mix(r270_Width, r270_RightSB, r303_kx));
        };
        var r270_IntegrateRing = function (r304_kx, r304_sw) {
            var _r304_t0, _r304_t1;
            return r270_OShape(r270_SymbolMid + (r270_RightSB - r270_SB) / 2, r270_SymbolMid - (r270_RightSB - r270_SB) / 2, r1_mix(0, r270_SB, r304_kx), r1_mix(r270_Width, r270_RightSB, r304_kx), r304_sw);
        };
        var r270_RingIntFine = r270_AdviceStroke(4);
        r270_xn$createAndSaveGlyphImpl$2Lrc3c('ringIntegrate', 8750, r270_union(r270_difference(r270_LongSShape(r270_BgOpTop, r270_BgOpBot, r270_Hook, r270_IntHookY, r270_OperatorStroke), r270_IntegrateRingMask(1)), r270_intersection(r270_LongSShape(r270_BgOpTop, r270_BgOpBot, r270_Hook, r270_IntHookY, r270_RingIntFine), r270_IntegrateRingMask(1)), r270_IntegrateRing(1, r270_RingIntFine)));
        var r270_RingIntDotSize = r270_DotRadius * r270_OperatorStroke / r270_Stroke;
        var r270_RingIntSideShift = (r270_RightSB - r270_SB) * 0.375 - r270_OperatorStroke * r270_HVContrast;
        r270_WithDotVariants('ringDotIntegrate', 10773, function (r306_DrawAt, r306_kdr, r306_ov) {
            var _r306_t0, _r306_t1;
            return r270_union(r270_difference(r270_LongSShape(r270_BgOpTop, r270_BgOpBot, r270_Hook, r270_IntHookY, r270_OperatorStroke), r270_IntegrateRingMask(1)), r270_IntegrateRing(1, r270_RingIntFine), r306_DrawAt(r270_Middle, r270_SymbolMid, r270_RingIntDotSize * r306_kdr - r306_ov));
        });
        r270_WithDotVariants('rightHalfRingDotIntegrate', 10771, function (r307_DrawAt, r307_kdr, r307_ov) {
            var _r307_t0, _r307_t1;
            return r270_union(r270_difference(r270_LongSShape(r270_BgOpTop, r270_BgOpBot, r270_Hook, r270_IntHookY, r270_OperatorStroke), r270_IntegrateRingMask(1)), r270_intersection(r270_IntegrateRing(1, r270_RingIntFine), r270_MaskRight(r270_Middle - r270_OperatorStroke / 2 * r270_HVContrast)), r307_DrawAt(r270_Middle, r270_SymbolMid, r270_RingIntDotSize * r307_kdr - r307_ov));
        });
        r270_WithDotVariants('shiftedRightHalfRingDotIntegrate', 10772, function (r308_DrawAt, r308_kdr, r308_ov) {
            var _r308_t0, _r308_t1;
            return r270_union(r270_difference(r270_LongSShape(r270_BgOpTop, r270_BgOpBot, r270_Hook, r270_IntHookY, r270_OperatorStroke), r270_WithTransform(r270_Translate(r270_RingIntSideShift, 0), r270_IntegrateRingMask(1))), r270_intersection(r270_WithTransform(r270_Translate(r270_RingIntSideShift, 0), r270_IntegrateRing(1, r270_RingIntFine)), r270_MaskRight(r270_Middle - r270_OperatorStroke / 2 * r270_HVContrast)), r308_DrawAt(r270_Middle + r270_RingIntSideShift, r270_SymbolMid, r270_RingIntDotSize * r308_kdr - r308_ov));
        });
        var r270_RingIntArrowSize = r270_Hook / 2;
        var r270_RingIntArrowGap = Math.max(r270_AdviceStroke(6), r270_RingIntArrowSize / 4);
        var r270_RingIntegrateArrowHead = function (r309_sz, r309_gap, r309_kx, r309_sw) {
            var _r309_t0, _r309_t1;
            var r309_cx = r1_mix(r270_Width, r270_RightSB, r309_kx) - 0.5 * r309_sw * r270_HVContrast;
            return r270_xn$spirooutline$1aao(r270_corner(r309_cx - (r309_sz + r309_gap), r270_SymbolMid + r309_sz / 2), r270_corner(r309_cx + (r309_sz + r309_gap), r270_SymbolMid + r309_sz / 2), r270_corner(r309_cx, r270_SymbolMid - r309_sz / 2 - r309_gap));
        };
        r270_xn$createAndSaveGlyphImpl$2Lrc3c('semiringIntegrateCw', 8753, r270_union(r270_LongSShape(r270_BgOpTop, r270_BgOpBot, r270_Hook, r270_IntHookY, r270_OperatorStroke), r270_difference(r270_IntegrateRing(1, r270_RingIntFine), r270_RingIntegrateArrowHead(r270_RingIntArrowSize, r270_RingIntArrowGap, 1, r270_RingIntFine), r270_MaskBelow(r270_SymbolMid)), r270_RingIntegrateArrowHead(r270_RingIntArrowSize, 0, 1, r270_RingIntFine)));
        r270_xn$createAndSaveGlyphImpl$2Lrc3c('semiringIntegrateCcw', 10769, r270_union(r270_LongSShape(r270_BgOpTop, r270_BgOpBot, r270_Hook, r270_IntHookY, r270_OperatorStroke), r270_difference(r270_IntegrateRing(1, r270_RingIntFine), r270_RingIntegrateArrowHead(-r270_RingIntArrowSize, -r270_RingIntArrowGap, 1, r270_RingIntFine), r270_MaskAbove(r270_SymbolMid)), r270_RingIntegrateArrowHead(-r270_RingIntArrowSize, 0, 1, r270_RingIntFine)));
        r270_xn$createAndSaveGlyphImpl$2Lrc3c('ringIntegrateCw', 8754, r270_union(r270_difference(r270_LongSShape(r270_BgOpTop, r270_BgOpBot, r270_Hook, r270_IntHookY, r270_OperatorStroke), r270_IntegrateRingMask(1)), r270_intersection(r270_LongSShape(r270_BgOpTop, r270_BgOpBot, r270_Hook, r270_IntHookY, r270_RingIntFine), r270_IntegrateRingMask(1)), r270_difference(r270_IntegrateRing(1, r270_RingIntFine), r270_RingIntegrateArrowHead(r270_RingIntArrowSize, r270_RingIntArrowGap, 1, r270_RingIntFine)), r270_RingIntegrateArrowHead(r270_RingIntArrowSize, 0, 1, r270_RingIntFine)));
        r270_xn$createAndSaveGlyphImpl$2Lrc3c('ringIntegrateCcw', 8755, r270_union(r270_difference(r270_LongSShape(r270_BgOpTop, r270_BgOpBot, r270_Hook, r270_IntHookY, r270_OperatorStroke), r270_IntegrateRingMask(1)), r270_intersection(r270_LongSShape(r270_BgOpTop, r270_BgOpBot, r270_Hook, r270_IntHookY, r270_RingIntFine), r270_IntegrateRingMask(1)), r270_difference(r270_IntegrateRing(1, r270_RingIntFine), r270_RingIntegrateArrowHead(-r270_RingIntArrowSize, -r270_RingIntArrowGap, 1, r270_RingIntFine)), r270_RingIntegrateArrowHead(-r270_RingIntArrowSize, 0, 1, r270_RingIntFine)));
        var r270_IntegrateBox = function (r314_kx, r314_sw) {
            var _r314_t0, _r314_t1;
            return r270_Rect(r270_SymbolMid + (r270_RightSB - r270_SB) / 2 - r314_sw, r270_SymbolMid - (r270_RightSB - r270_SB) / 2 + r314_sw, r1_mix(0, r270_SB, r314_kx) + r314_sw * r270_HVContrast, r1_mix(r270_Width, r270_RightSB, r314_kx) - r314_sw * r270_HVContrast);
        };
        r270_xn$createAndSaveGlyphImpl$2Lrc3c('boxIntegral', 10774, r270_union(r270_difference(r270_LongSShape(r270_BgOpTop, r270_BgOpBot, r270_Hook, r270_IntHookY, r270_OperatorStroke), r270_IntegrateBox(1, 0)), r270_intersection(r270_LongSShape(r270_BgOpTop, r270_BgOpBot, r270_Hook, r270_IntHookY, r270_RingIntFine), r270_IntegrateBox(1, 0)), r270_difference(r270_IntegrateBox(1, 0), r270_IntegrateBox(1, r270_RingIntFine))));
        r270_WithDotVariants('rightHalfBoxDotIntegral', 10770, function (r316_DrawAt, r316_kdr, r316_ov) {
            var _r316_t0, _r316_t1;
            return r270_union(r270_difference(r270_LongSShape(r270_BgOpTop, r270_BgOpBot, r270_Hook, r270_IntHookY, r270_OperatorStroke), r270_IntegrateBox(1, 0)), r270_difference(r270_intersection(r270_IntegrateBox(1, 0), r270_MaskRight(r270_Middle - r270_OperatorStroke / 2 * r270_HVContrast)), r270_IntegrateBox(1, r270_RingIntFine)), r316_DrawAt(r270_Middle, r270_SymbolMid, r270_RingIntDotSize * r316_kdr - r316_ov));
        });
        r270_xn$createAndSaveGlyphImpl$2Lrc3c('ringDoubleIntegrate', 8751, r270_union(r270_difference(r270_union(r270_WithTransform(r270_Translate(-r270_Width / 7, 0), r270_LongSShape(r270_BgOpTop, r270_BgOpBot, r270_Hook * 0.75, r270_IntHookY, r270_AdviceStroke(4))), r270_WithTransform(r270_Translate(+r270_Width / 7, 0), r270_LongSShape(r270_BgOpTop, r270_BgOpBot, r270_Hook * 0.75, r270_IntHookY, r270_AdviceStroke(4)))), r270_IntegrateRingMask(1 / 2)), r270_intersection(r270_union(r270_WithTransform(r270_Translate(-r270_Width / 7, 0), r270_LongSShape(r270_BgOpTop, r270_BgOpBot, r270_Hook * 0.75, r270_IntHookY, r270_AdviceStroke(5))), r270_WithTransform(r270_Translate(+r270_Width / 7, 0), r270_LongSShape(r270_BgOpTop, r270_BgOpBot, r270_Hook * 0.75, r270_IntHookY, r270_AdviceStroke(5)))), r270_IntegrateRingMask(1 / 2)), r270_IntegrateRing(1 / 2, r270_AdviceStroke(5))));
        return r270_xn$createAndSaveGlyphImpl$2Lrc3c('ringTripleIntegrate', 8752, r270_union(r270_difference(r270_union(r270_WithTransform(r270_Translate(-r270_Width * 0.225, 0), r270_LongSShape(r270_BgOpTop, r270_BgOpBot, r270_Hook * 0.625, r270_Hook * 0.625, r270_AdviceStroke(5))), r270_WithTransform(r270_Translate(+0, 0), r270_LongSShape(r270_BgOpTop, r270_BgOpBot, r270_Hook * 0.625, r270_Hook * 0.625, r270_AdviceStroke(5))), r270_WithTransform(r270_Translate(+r270_Width * 0.225, 0), r270_LongSShape(r270_BgOpTop, r270_BgOpBot, r270_Hook * 0.625, r270_Hook * 0.625, r270_AdviceStroke(5)))), r270_IntegrateRingMask(1 / 4)), r270_intersection(r270_union(r270_WithTransform(r270_Translate(-r270_Width * 0.225, 0), r270_LongSShape(r270_BgOpTop, r270_BgOpBot, r270_Hook * 0.625, r270_Hook * 0.625, r270_AdviceStroke(6))), r270_WithTransform(r270_Translate(+0, 0), r270_LongSShape(r270_BgOpTop, r270_BgOpBot, r270_Hook * 0.625, r270_Hook * 0.625, r270_AdviceStroke(6))), r270_WithTransform(r270_Translate(+r270_Width * 0.225, 0), r270_LongSShape(r270_BgOpTop, r270_BgOpBot, r270_Hook * 0.625, r270_Hook * 0.625, r270_AdviceStroke(6)))), r270_IntegrateRingMask(1 / 4)), r270_IntegrateRing(1 / 4, r270_AdviceStroke(6))));
    });
    return void 0;
});
