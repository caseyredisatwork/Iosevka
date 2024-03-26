'use strict';
import * as _s0_t0 from '../../../support/utils.mjs';
var _s0_t1;
export {
    _s0_t1 as apply
};
var r1_apply, _r1_t0, _r1_t1, _r1_t2, _r1_t3, _r1_t4, _r1_t5, _r1_t6, _r1_t7;
var _r1_t8 = _s0_t0;
var r1_mix = _r1_t8.mix;
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
    r269_xn$Capture_Ext$2Lrc2b['$defineGlyphBlockImpl$'](r269_xn$Capture_Ext$2Lrc2b, 'Letter-Greek-Lower-Zeta', function (r270_xn$Capture$2Lrc8, r270_xn$ExportCapture$2Lrc4b) {
        var _r270_t6, _r270_t7;
        var _r270_t0 = r270_xn$Capture$2Lrc8;
        var r270_xn$createAndSaveGlyphImpl$2Lrc3c = _r270_t0['$createAndSaveGlyphImpl$'];
        var r270_xn$NamedParameterPair$2Lrc9b = _r270_t0['$NamedParameterPair$'];
        var r270_xn$assignUnicodeImpl$2Lrc8b = _r270_t0['$assignUnicodeImpl$'];
        var r270_xn$execState$2Lrc0b = _r270_t0['$execState$'];
        var r270_MarkSet = _r270_t0.MarkSet;
        var _r270_t1 = r270_xn$Capture$2Lrc8.Metrics;
        var r270_SB = _r270_t1.SB;
        var r270_Ascender = _r270_t1.Ascender;
        var r270_Descender = _r270_t1.Descender;
        var r270_HVContrast = _r270_t1.HVContrast;
        var r270_Downward = _r270_t1.Downward;
        var r270_Rightward = _r270_t1.Rightward;
        var r270_Stroke = _r270_t1.Stroke;
        var r270_HalfStroke = _r270_t1.HalfStroke;
        var r270_RightSB = _r270_t1.RightSB;
        var r270_SmallArchDepthA = _r270_t1.SmallArchDepthA;
        var r270_SmallArchDepthB = _r270_t1.SmallArchDepthB;
        var r270_AdviceStroke = _r270_t1.AdviceStroke;
        var _r270_t2 = r270_xn$Capture$2Lrc8.SpiroFns;
        var r270_g4 = _r270_t2.g4;
        var r270_g2 = _r270_t2.g2;
        var r270_flat = _r270_t2.flat;
        var r270_curl = _r270_t2.curl;
        var r270_widths = _r270_t2.widths;
        var r270_heading = _r270_t2.heading;
        var r270_bezControls = _r270_t2.bezControls;
        var r270_archv = _r270_t2.archv;
        var r270_arcvh = _r270_t2.arcvh;
        var r270_dispiro = _r270_t2.dispiro;
        var _r270_t3 = r270_xn$Capture$2Lrc8.BooleFns;
        var _r270_t4 = r270_xn$Capture$2Lrc8.CommonShapes.resolve();
        var r270_HBar = _r270_t4.HBar;
        var _r270_t5 = r270_xn$Capture$2Lrc8['Common-Derivatives'].resolve();
        return r270_xn$createAndSaveGlyphImpl$2Lrc3c('grek/zeta', 950, function () {
            var _r275_t1;
            var _r275_t0 = this;
            var r275_currentGlyph = _r275_t0;
            var r275_fine = r270_AdviceStroke(3);
            r275_currentGlyph.include(r270_MarkSet.bp());
            r275_currentGlyph.include(r270_HBar.m(r270_SB, r270_RightSB, r270_Ascender - r270_HalfStroke));
            r275_currentGlyph.include(r270_dispiro(r270_g4(r270_RightSB, r270_Ascender - r270_Stroke, r270_widths.rhs(r275_fine)), r270_bezControls(0.7, 0.35, 1, 0.64, 12), r270_g4.down.mid(r270_SB + r270_Stroke * r270_HVContrast, r1_mix(0, r270_Ascender, 0.54 * r270_SmallArchDepthB / (r270_SmallArchDepthA + r270_SmallArchDepthB)), r270_widths.rhs(r270_Stroke)), r270_arcvh(16), r270_g2(r1_mix(r270_SB, r270_RightSB, 0.55), r270_Stroke, r270_heading(r270_Rightward)), r270_archv(16), r270_g4.down.mid(r270_RightSB, r1_mix(r270_Descender, r270_Stroke, 0.5), r270_heading(r270_Downward)), r270_arcvh(16), r270_flat(r270_RightSB - (r270_Stroke - r1_mix(r270_Descender, r270_Stroke, 0.5)) * 1.1, r270_Descender), r270_curl(Math.min(r270_RightSB - (r270_Stroke - r1_mix(r270_Descender, r270_Stroke, 0.5)) * 1.1 - 1, r1_mix(r270_SB, r270_RightSB, 0.5)), r270_Descender)));
            return void 0;
        });
    });
    return void 0;
});
