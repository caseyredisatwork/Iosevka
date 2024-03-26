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
    r269_xn$Capture_Ext$2Lrc2b['$defineGlyphBlockImpl$'](r269_xn$Capture_Ext$2Lrc2b, 'Letter-Cyrillic-Lower-Blended-Uk', function (r270_xn$Capture$2Lrc8, r270_xn$ExportCapture$2Lrc4b) {
        var _r270_t6, _r270_t7;
        var _r270_t0 = r270_xn$Capture$2Lrc8;
        var r270_xn$createAndSaveGlyphImpl$2Lrc3c = _r270_t0['$createAndSaveGlyphImpl$'];
        var r270_xn$NamedParameterPair$2Lrc9b = _r270_t0['$NamedParameterPair$'];
        var r270_xn$assignUnicodeImpl$2Lrc8b = _r270_t0['$assignUnicodeImpl$'];
        var r270_xn$execState$2Lrc0b = _r270_t0['$execState$'];
        var r270_MarkSet = _r270_t0.MarkSet;
        var r270_DivFrame = _r270_t0.DivFrame;
        var _r270_t1 = r270_xn$Capture$2Lrc8.Metrics;
        var r270_Width = _r270_t1.Width;
        var r270_SB = _r270_t1.SB;
        var r270_Ascender = _r270_t1.Ascender;
        var r270_Upward = _r270_t1.Upward;
        var r270_Downward = _r270_t1.Downward;
        var r270_O = _r270_t1.O;
        var r270_OX = _r270_t1.OX;
        var r270_RightSB = _r270_t1.RightSB;
        var r270_Middle = _r270_t1.Middle;
        var r270_CorrectionOMidX = _r270_t1.CorrectionOMidX;
        var r270_AdviceStroke = _r270_t1.AdviceStroke;
        var r270_ArchDepthAOf = _r270_t1.ArchDepthAOf;
        var r270_ArchDepthBOf = _r270_t1.ArchDepthBOf;
        var _r270_t2 = r270_xn$Capture$2Lrc8.SpiroFns;
        var r270_g4 = _r270_t2.g4;
        var r270_widths = _r270_t2.widths;
        var r270_heading = _r270_t2.heading;
        var r270_archv = _r270_t2.archv;
        var r270_arcvh = _r270_t2.arcvh;
        var r270_dispiro = _r270_t2.dispiro;
        var _r270_t3 = r270_xn$Capture$2Lrc8.BooleFns;
        var _r270_t4 = r270_xn$Capture$2Lrc8.CommonShapes.resolve();
        var _r270_t5 = r270_xn$Capture$2Lrc8['Common-Derivatives'].resolve();
        return r270_xn$createAndSaveGlyphImpl$2Lrc3c('cyrl/uk', 42571, function () {
            var _r275_t1;
            var _r275_t0 = this;
            var r275_currentGlyph = _r275_t0;
            r275_currentGlyph.include(r270_MarkSet.b());
            var r275_kLeftX = 0.8;
            var r275_kLeftY = 0.875;
            var r275_kRightX = 1;
            var r275_kRightY = 1;
            var r275_yCross = r1_mix(0, r270_Ascender, 0.45);
            var r275_stress = r270_AdviceStroke(2.75);
            var r275_fine = r270_AdviceStroke(3);
            var r275_smallRingRadius = 0.25 * (r270_RightSB - r270_SB) + 0.5 * r275_fine;
            var r275_subDf = r270_DivFrame((2 * r275_smallRingRadius + 2 * r270_SB) / r270_Width);
            var r275_ada = r270_ArchDepthAOf(r275_smallRingRadius, r275_subDf.width);
            var r275_adb = r270_ArchDepthBOf(r275_smallRingRadius, r275_subDf.width);
            r275_currentGlyph.include(r270_dispiro(r270_g4.down.start(r1_mix(r270_Middle, r270_SB, r275_kLeftX), r1_mix(0, r270_Ascender, r275_kLeftY), r270_widths.lhs.heading(r275_stress, r270_Downward)), r270_g4(r270_Middle, r275_yCross, r270_widths.center(r275_stress)), r270_g4(r270_Middle + r275_smallRingRadius - r270_OX, r275_ada, r270_widths.rhs(r275_fine)), r270_arcvh(), r270_g4(r270_Middle + r270_CorrectionOMidX * r275_fine, r270_O), r270_archv(), r270_g4(r270_Middle - r275_smallRingRadius + r270_OX, r275_adb), r270_g4(r270_Middle, r275_yCross, r270_widths.center(r275_stress)), r270_g4.up.mid(r1_mix(r270_Middle, r270_RightSB, r275_kRightX), r1_mix(0, r270_Ascender, r275_kRightY), r270_widths.lhs.heading(r275_stress, r270_Upward))));
            return void 0;
        });
    });
    return void 0;
});
