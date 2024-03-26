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
    r269_xn$Capture_Ext$2Lrc2b['$defineGlyphBlockImpl$'](r269_xn$Capture_Ext$2Lrc2b, 'Letter-Greek-Lower-Delta', function (r270_xn$Capture$2Lrc8, r270_xn$ExportCapture$2Lrc4b) {
        var _r270_t6, _r270_t7;
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
        var r270_Ascender = _r270_t1.Ascender;
        var r270_TanSlope = _r270_t1.TanSlope;
        var r270_HVContrast = _r270_t1.HVContrast;
        var r270_Rightward = _r270_t1.Rightward;
        var r270_O = _r270_t1.O;
        var r270_OX = _r270_t1.OX;
        var r270_Stroke = _r270_t1.Stroke;
        var r270_CThin = _r270_t1.CThin;
        var r270_RightSB = _r270_t1.RightSB;
        var r270_Middle = _r270_t1.Middle;
        var r270_SmallArchDepthA = _r270_t1.SmallArchDepthA;
        var r270_SmallArchDepthB = _r270_t1.SmallArchDepthB;
        var r270_CorrectionOMidS = _r270_t1.CorrectionOMidS;
        var r270_YSmoothMidR = _r270_t1.YSmoothMidR;
        var _r270_t2 = r270_xn$Capture$2Lrc8.SpiroFns;
        var r270_g4 = _r270_t2.g4;
        var r270_flat = _r270_t2.flat;
        var r270_curl = _r270_t2.curl;
        var r270_widths = _r270_t2.widths;
        var r270_heading = _r270_t2.heading;
        var r270_alsoThru = _r270_t2.alsoThru;
        var r270_alsoThruThem = _r270_t2.alsoThruThem;
        var r270_archv = _r270_t2.archv;
        var r270_arcvh = _r270_t2.arcvh;
        var r270_dispiro = _r270_t2.dispiro;
        var _r270_t3 = r270_xn$Capture$2Lrc8.BooleFns;
        var r270_intersection = _r270_t3.intersection;
        var _r270_t4 = r270_xn$Capture$2Lrc8.CommonShapes.resolve();
        var r270_HBar = _r270_t4.HBar;
        var r270_MaskBelow = _r270_t4.MaskBelow;
        var _r270_t5 = r270_xn$Capture$2Lrc8['Common-Derivatives'].resolve();
        var r270_xn$selectvariant$7Hrq = _r270_t5['select-variant'];
        var r270_alias = _r270_t5.alias;
        var r270_turned = _r270_t5.turned;
        r270_xn$createAndSaveGlyphImpl$2Lrc3c('grek/delta.rounded', null, function () {
            var _r275_t1;
            var _r275_t0 = this;
            var r275_currentGlyph = _r275_t0;
            r275_currentGlyph.include(r270_MarkSet.b());
            var r275_yRingTop = r270_Stroke * 0.25 + r270_Ascender * 0.619;
            var r275_xNeck = r1_mix(r270_SB, r270_RightSB, 0.06);
            var r275_xOTLeft = r1_mix(r270_SB, r270_RightSB, 0.5);
            var r275_fine = r270_Stroke * 0.5;
            r275_currentGlyph.include(r270_dispiro(r270_g4(r1_mix(r270_Middle, r270_RightSB, 0.85), r1_mix(r270_XH, r270_Ascender, 0.8), r270_widths.lhs()), r270_alsoThru(0.5, 0.7), r270_g4(r270_Middle, r270_Ascender - r270_O), r270_archv(2), r270_g4(r275_xNeck + r270_Stroke, r1_mix(r270_Ascender - r270_O - r270_Stroke, r275_yRingTop, 0.5), r270_widths.rhs()), r270_arcvh(2), r270_g4(r275_xOTLeft, r275_yRingTop, r270_heading(r270_Rightward)), r270_alsoThruThem([
                [
                    0.25,
                    0.05
                ],
                [
                    0.5,
                    0.13
                ]
            ]), r270_flat(r270_RightSB - r270_OX, r275_yRingTop - r270_SmallArchDepthB), r270_curl(r270_RightSB - r270_OX, r270_SmallArchDepthA), r270_arcvh(), r270_g4.left.mid(r270_Middle + r270_CorrectionOMidS, r270_O), r270_archv(), r270_flat(r270_SB + r270_OX, r270_SmallArchDepthB), r270_curl(r270_SB + r270_OX, r275_yRingTop - r270_SmallArchDepthA), r270_arcvh(), r270_g4(r275_xOTLeft, r275_yRingTop - (r270_Stroke - r275_fine) / 2, r270_widths(0, r275_fine))));
            return void 0;
        });
        r270_xn$createAndSaveGlyphImpl$2Lrc3c('grek/delta.flatTop', null, function () {
            var _r280_t1;
            var _r280_t0 = this;
            var r280_currentGlyph = _r280_t0;
            r280_currentGlyph.include(r270_MarkSet.b());
            var r280_fine = r270_Stroke * r270_CThin;
            var r280_coFine = r1_mix(r280_fine, r270_Stroke, 0.5);
            var r280_yTop = r270_Ascender - r270_Stroke;
            var r280_yMid = r270_Stroke * 0.25 + r1_mix(0, r270_XH, 7 / 8);
            var r280_yMid2 = r1_mix(r280_yMid, r270_YSmoothMidR(r280_yMid, 0, r270_SmallArchDepthA, r270_SmallArchDepthB), 0.95);
            var r280_yMid3 = r1_mix(r280_yMid, r270_YSmoothMidR(r280_yMid, 0, r270_SmallArchDepthA, r270_SmallArchDepthB), 0.5);
            var r280_yMockBarStart = r280_yMid3 + 2.25 * r270_Stroke;
            var r280_pStraightBarStart = 0.75 - r270_Stroke / r270_Ascender;
            r280_currentGlyph.include(r270_HBar.t(r270_SB, r270_RightSB, r270_Ascender));
            r280_currentGlyph.include(r270_intersection(r270_MaskBelow(r280_yTop), r270_dispiro(r270_g4.right.start(r270_Middle + r270_CorrectionOMidS - r270_TanSlope * (r270_Stroke - r280_fine), r270_O + r270_Stroke - r280_fine + 1 / 16, r270_widths.lhs(r280_fine)), r270_flat(r270_RightSB - r270_OX - (1 - r270_CThin) * r270_Stroke * r270_HVContrast, r270_SmallArchDepthA), r270_curl(r270_RightSB - r270_OX - (1 - r270_CThin) * r270_Stroke * r270_HVContrast, r280_yMid - r270_SmallArchDepthB), r270_arcvh(), r270_g4(r270_Middle - r270_CorrectionOMidS, r280_yMid - r270_O, r270_widths.lhs()), r270_archv(), r270_flat(r270_SB + r270_OX, r280_yMid - r270_SmallArchDepthA), r270_curl(r270_SB + r270_OX, r270_SmallArchDepthB), r270_arcvh(), r270_g4(r270_Middle + r270_CorrectionOMidS, r270_O), r270_archv(), r270_flat(r270_RightSB - r270_OX, r270_SmallArchDepthA, r270_widths.lhs(r280_coFine)), r270_curl(r270_RightSB - r270_OX, r280_yMid2), r270_flat(r1_mix(r270_Width, r270_SB, r280_pStraightBarStart), r1_mix(r280_yMockBarStart, r280_yTop, r280_pStraightBarStart), r270_widths.lhs()), r270_curl(r1_mix(r270_Width, r270_SB, 1), r1_mix(r280_yMockBarStart, r280_yTop, 1), r270_widths.rhs()))));
            return void 0;
        });
        r270_xn$selectvariant$7Hrq('grek/delta', 948);
        r270_alias('cyrl/be.SRB', null, 'grek/delta.rounded');
        r270_alias('latindelta', 7839, 'grek/delta');
        return r270_turned('turndelta', 397, 'grek/delta', r270_Middle, r270_XH / 2, r270_MarkSet.p());
    });
    return void 0;
});
