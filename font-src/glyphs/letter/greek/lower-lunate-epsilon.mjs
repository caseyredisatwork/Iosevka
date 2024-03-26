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
    r269_xn$Capture_Ext$2Lrc2b['$defineGlyphBlockImpl$'](r269_xn$Capture_Ext$2Lrc2b, 'Letter-Greek-Lower-Lunate-Epsilon', function (r270_xn$Capture$2Lrc8, r270_xn$ExportCapture$2Lrc4b) {
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
        var r270_HVContrast = _r270_t1.HVContrast;
        var r270_Rightward = _r270_t1.Rightward;
        var r270_Leftward = _r270_t1.Leftward;
        var r270_O = _r270_t1.O;
        var r270_Stroke = _r270_t1.Stroke;
        var r270_HalfStroke = _r270_t1.HalfStroke;
        var r270_RightSB = _r270_t1.RightSB;
        var r270_SmallArchDepthA = _r270_t1.SmallArchDepthA;
        var r270_SmallArchDepthB = _r270_t1.SmallArchDepthB;
        var r270_AdviceStroke2 = _r270_t1.AdviceStroke2;
        var r270_YSmoothMidR = _r270_t1.YSmoothMidR;
        var r270_YSmoothMidL = _r270_t1.YSmoothMidL;
        var _r270_t2 = r270_xn$Capture$2Lrc8.SpiroFns;
        var r270_g4 = _r270_t2.g4;
        var r270_flat = _r270_t2.flat;
        var r270_curl = _r270_t2.curl;
        var r270_widths = _r270_t2.widths;
        var r270_heading = _r270_t2.heading;
        var r270_archv = _r270_t2.archv;
        var r270_arcvh = _r270_t2.arcvh;
        var r270_dispiro = _r270_t2.dispiro;
        var _r270_t3 = r270_xn$Capture$2Lrc8.BooleFns;
        var _r270_t4 = r270_xn$Capture$2Lrc8.CommonShapes.resolve();
        var r270_HBar = _r270_t4.HBar;
        var _r270_t5 = r270_xn$Capture$2Lrc8['Common-Derivatives'].resolve();
        r270_xn$createAndSaveGlyphImpl$2Lrc3c('grek/lowerLunateEpsilon', 1013, function () {
            var _r275_t1;
            var _r275_t0 = this;
            var r275_currentGlyph = _r275_t0;
            r275_currentGlyph.include(r270_MarkSet.e());
            r275_currentGlyph.include(r270_dispiro(r270_widths.lhs(), r270_flat(r270_RightSB, r270_XH, r270_heading(r270_Leftward)), r270_curl(r1_mix(r270_SB, r270_RightSB, 0.625), r270_XH, r270_heading(r270_Leftward)), r270_archv(), r270_g4(r270_SB + r270_O, r270_YSmoothMidL(r270_XH, 0, r270_SmallArchDepthA, r270_SmallArchDepthB)), r270_arcvh(), r270_flat(r1_mix(r270_SB, r270_RightSB, 0.625), 0, r270_heading(r270_Rightward)), r270_curl(r270_RightSB, 0, r270_heading(r270_Rightward))));
            r275_currentGlyph.include(r270_HBar.m(r270_SB + r270_HalfStroke * r270_HVContrast, r1_mix(r270_SB, r270_RightSB, 0.75) + 0.25 * r270_Stroke, r270_XH / 2, r270_AdviceStroke2(2, 3, r270_XH)));
            return void 0;
        });
        return r270_xn$createAndSaveGlyphImpl$2Lrc3c('grek/lowerLunateEpsilonRev', 1014, function () {
            var _r281_t1;
            var _r281_t0 = this;
            var r281_currentGlyph = _r281_t0;
            r281_currentGlyph.include(r270_MarkSet.e());
            r281_currentGlyph.include(r270_dispiro(r270_widths.rhs(), r270_flat(r270_SB, r270_XH, r270_heading(r270_Rightward)), r270_curl(r1_mix(r270_RightSB, r270_SB, 0.625), r270_XH, r270_heading(r270_Rightward)), r270_archv(), r270_g4(r270_RightSB - r270_O, r270_YSmoothMidR(r270_XH, 0, r270_SmallArchDepthA, r270_SmallArchDepthB)), r270_arcvh(), r270_flat(r1_mix(r270_RightSB, r270_SB, 0.625), 0, r270_heading(r270_Leftward)), r270_curl(r270_SB, 0, r270_heading(r270_Leftward))));
            r281_currentGlyph.include(r270_HBar.m(r1_mix(r270_RightSB, r270_SB, 0.75) - 0.25 * r270_Stroke, r270_RightSB - r270_HalfStroke * r270_HVContrast, r270_XH / 2, r270_AdviceStroke2(2, 3, r270_XH)));
            return void 0;
        });
    });
    return void 0;
});
