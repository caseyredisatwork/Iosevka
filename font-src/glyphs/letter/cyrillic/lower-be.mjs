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
    r269_xn$Capture_Ext$2Lrc2b['$defineGlyphBlockImpl$'](r269_xn$Capture_Ext$2Lrc2b, 'Letter-Cyrillic-Lower-Be', function (r270_xn$Capture$2Lrc8, r270_xn$ExportCapture$2Lrc4b) {
        var _r270_t6, _r270_t7;
        var _r270_t0 = r270_xn$Capture$2Lrc8;
        var r270_xn$createAndSaveGlyphImpl$2Lrc3c = _r270_t0['$createAndSaveGlyphImpl$'];
        var r270_xn$NamedParameterPair$2Lrc9b = _r270_t0['$NamedParameterPair$'];
        var r270_xn$assignUnicodeImpl$2Lrc8b = _r270_t0['$assignUnicodeImpl$'];
        var r270_xn$execState$2Lrc0b = _r270_t0['$execState$'];
        var r270_MarkSet = _r270_t0.MarkSet;
        var _r270_t1 = r270_xn$Capture$2Lrc8.Metrics;
        var r270_SB = _r270_t1.SB;
        var r270_XH = _r270_t1.XH;
        var r270_Ascender = _r270_t1.Ascender;
        var r270_HVContrast = _r270_t1.HVContrast;
        var r270_Rightward = _r270_t1.Rightward;
        var r270_O = _r270_t1.O;
        var r270_OX = _r270_t1.OX;
        var r270_Stroke = _r270_t1.Stroke;
        var r270_CThinB = _r270_t1.CThinB;
        var r270_RightSB = _r270_t1.RightSB;
        var r270_Middle = _r270_t1.Middle;
        var r270_SmallArchDepthA = _r270_t1.SmallArchDepthA;
        var r270_SmallArchDepthB = _r270_t1.SmallArchDepthB;
        var r270_CorrectionOMidS = _r270_t1.CorrectionOMidS;
        var _r270_t2 = r270_xn$Capture$2Lrc8.SpiroFns;
        var r270_g4 = _r270_t2.g4;
        var r270_flat = _r270_t2.flat;
        var r270_curl = _r270_t2.curl;
        var r270_widths = _r270_t2.widths;
        var r270_heading = _r270_t2.heading;
        var r270_important = _r270_t2.important;
        var r270_alsoThruThem = _r270_t2.alsoThruThem;
        var r270_archv = _r270_t2.archv;
        var r270_arcvh = _r270_t2.arcvh;
        var r270_dispiro = _r270_t2.dispiro;
        var _r270_t3 = r270_xn$Capture$2Lrc8.BooleFns;
        var _r270_t4 = r270_xn$Capture$2Lrc8.CommonShapes.resolve();
        var _r270_t5 = r270_xn$Capture$2Lrc8['Common-Derivatives'].resolve();
        return r270_xn$createAndSaveGlyphImpl$2Lrc3c('cyrl/be', 1073, function () {
            var _r275_t1;
            var _r275_t0 = this;
            var r275_currentGlyph = _r275_t0;
            var r275_yRingTop = Math.min(r270_XH + r270_O, r270_XH - r270_Stroke * 0.25);
            r275_currentGlyph.include(r270_MarkSet.b());
            r275_currentGlyph.include(r270_dispiro(r270_widths.rhs(r270_Stroke * r270_CThinB), r270_flat(r270_SB + r270_OX + r270_Stroke * (1 - r270_CThinB) * r270_HVContrast, r270_SmallArchDepthB), r270_curl(r270_SB + r270_OX + r270_Stroke * (1 - r270_CThinB) * r270_HVContrast, r275_yRingTop - r270_SmallArchDepthA), r270_arcvh(), r270_g4(r270_Middle - r270_CorrectionOMidS, r275_yRingTop - r270_O, r270_widths.rhs(r270_Stroke)), r270_archv(), r270_flat(r270_RightSB - r270_OX, r275_yRingTop - r270_SmallArchDepthB), r270_curl(r270_RightSB - r270_OX, r270_SmallArchDepthA), r270_arcvh(), r270_g4(r270_Middle + r270_CorrectionOMidS, r270_O), r270_archv(), r270_flat(r270_SB + r270_OX, r270_SmallArchDepthB), r270_curl(r270_SB + r270_OX, r275_yRingTop - r270_SmallArchDepthA), r270_alsoThruThem([
                [
                    0.3,
                    0.85
                ],
                [
                    0.65,
                    0.925
                ]
            ], r270_important, r270_g4), r270_g4(r270_RightSB - 1 / 16 * r270_Stroke * r270_HVContrast, r270_Ascender, r270_heading(r270_Rightward))));
            return void 0;
        });
    });
    return void 0;
});
