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
    r269_xn$Capture_Ext$2Lrc2b['$defineGlyphBlockImpl$'](r269_xn$Capture_Ext$2Lrc2b, 'Letter-Greek-Lower-Kappa', function (r270_xn$Capture$2Lrc8, r270_xn$ExportCapture$2Lrc4b) {
        var _r270_t7, _r270_t8;
        var _r270_t0 = r270_xn$Capture$2Lrc8;
        var r270_xn$createAndSaveGlyphImpl$2Lrc3c = _r270_t0['$createAndSaveGlyphImpl$'];
        var r270_xn$NamedParameterPair$2Lrc9b = _r270_t0['$NamedParameterPair$'];
        var r270_xn$assignUnicodeImpl$2Lrc8b = _r270_t0['$assignUnicodeImpl$'];
        var r270_xn$execState$2Lrc0b = _r270_t0['$execState$'];
        var r270_AS_BASE = _r270_t0.AS_BASE;
        var r270_ALSO_METRICS = _r270_t0.ALSO_METRICS;
        var r270_DivFrame = _r270_t0.DivFrame;
        var _r270_t1 = r270_xn$Capture$2Lrc8.Metrics;
        var r270_XH = _r270_t1.XH;
        var r270_HVContrast = _r270_t1.HVContrast;
        var r270_Rightward = _r270_t1.Rightward;
        var r270_Leftward = _r270_t1.Leftward;
        var r270_SHook = _r270_t1.SHook;
        var r270_HookX = _r270_t1.HookX;
        var r270_Stroke = _r270_t1.Stroke;
        var r270_CThinB = _r270_t1.CThinB;
        var r270_HalfStroke = _r270_t1.HalfStroke;
        var r270_AdviceStroke = _r270_t1.AdviceStroke;
        var _r270_t2 = r270_xn$Capture$2Lrc8.SpiroFns;
        var r270_g2 = _r270_t2.g2;
        var r270_flat = _r270_t2.flat;
        var r270_curl = _r270_t2.curl;
        var r270_straight = _r270_t2.straight;
        var r270_widths = _r270_t2.widths;
        var r270_heading = _r270_t2.heading;
        var r270_alsoThru = _r270_t2.alsoThru;
        var r270_archv = _r270_t2.archv;
        var r270_dispiro = _r270_t2.dispiro;
        var _r270_t3 = r270_xn$Capture$2Lrc8.BooleFns;
        var _r270_t4 = r270_xn$Capture$2Lrc8.CommonShapes.resolve();
        var _r270_t5 = r270_xn$Capture$2Lrc8['Common-Derivatives'].resolve();
        var r270_xn$referglyph$1aao = _r270_t5['refer-glyph'];
        var _r270_t6 = r270_xn$Capture$2Lrc8['Letter-Shared-Shapes'].resolve();
        var r270_PalatalHook = _r270_t6.PalatalHook;
        var r270_DfKappasymbol = function () {
            var _r274_t0, _r274_t1;
            return r270_DivFrame(1, 3);
        };
        r270_xn$createAndSaveGlyphImpl$2Lrc3c('grek/kappaSymbol', 1008, function () {
            var _r277_t1;
            var _r277_t0 = this;
            var r277_currentGlyph = _r277_t0;
            var r277_df = r270_DfKappasymbol();
            r277_currentGlyph.include(r277_df.markSet.e());
            var r277_xLeft = r277_df.leftSB + 0.25 * r277_df.mvs * r270_HVContrast;
            var r277_xRight = r277_df.rightSB - 0.25 * r277_df.mvs * r270_HVContrast;
            var r277_yBottom = 0 + 0.2 * r270_Stroke;
            var r277_yTop = r270_XH - 0.2 * r270_Stroke;
            var r277_deltaX = 0.001 * (r277_xRight - r277_xLeft);
            var r277_deltaY = 0.001 * (r277_yTop - r277_yBottom);
            var r277_swTerm = r270_AdviceStroke(3);
            var r277_swTermThin = r277_swTerm * r270_CThinB;
            var r277_kArcX = 0.08;
            var r277_kArcY = 0.3;
            var r277_kSwMid = 0.1;
            r277_currentGlyph.include(r270_dispiro(r270_widths.center(r277_swTerm), r270_flat(r277_xLeft, r277_yBottom), r270_curl(r277_xRight, r277_yTop)));
            r277_currentGlyph.include(r270_dispiro(r270_widths.center(), r270_straight.right.start(r277_df.leftSB, r270_XH - r270_HalfStroke, r270_heading(r270_Rightward)), r270_archv(), r270_g2(r277_df.leftSB + 0.625 * r270_HookX, r270_XH - r270_SHook - r270_HalfStroke, r270_widths.center(r277_df.mvs)), r270_alsoThru.g2(r277_kArcX, r277_kArcY, r270_widths(r1_mix(r277_df.mvs / 2, r277_swTermThin / 2, r277_kSwMid), r1_mix(r277_df.mvs / 2, r277_swTerm / 2, r277_kSwMid))), r270_g2(r277_xLeft + r277_deltaX, r277_yBottom + r277_deltaY, r270_widths(r277_swTermThin / 2, r277_swTerm / 2)), r270_g2(r277_xLeft, r277_yBottom)));
            r277_currentGlyph.include(r270_dispiro(r270_widths.center(), r270_straight.left.start(r277_df.rightSB, 0 + r270_HalfStroke, r270_heading(r270_Leftward)), r270_archv(), r270_g2(r277_df.rightSB - 0.625 * r270_HookX, 0 + r270_SHook + r270_HalfStroke, r270_widths.center(r277_df.mvs)), r270_alsoThru.g2(r277_kArcX, r277_kArcY, r270_widths(r1_mix(r277_df.mvs / 2, r277_swTermThin / 2, r277_kSwMid), r1_mix(r277_df.mvs / 2, r277_swTerm / 2, r277_kSwMid))), r270_g2(r277_xRight - r277_deltaX, r277_yTop - r277_deltaY, r270_widths(r277_swTermThin / 2, r277_swTerm / 2)), r270_g2(r277_xRight, r277_yTop)));
            return void 0;
        });
        return r270_xn$createAndSaveGlyphImpl$2Lrc3c('grek/kaiSymbol', 983, function () {
            var _r284_t1;
            var _r284_t0 = this;
            var r284_currentGlyph = _r284_t0;
            r284_currentGlyph.include(r270_xn$referglyph$1aao('grek/kappaSymbol'), r270_AS_BASE, r270_ALSO_METRICS);
            var r284_df = r270_DfKappasymbol();
            r284_currentGlyph.include(r270_PalatalHook.rExt(r284_df.rightSB, 0, new r270_xn$NamedParameterPair$2Lrc9b('sw', r284_df.mvs), new r270_xn$NamedParameterPair$2Lrc9b('yAttach', r270_Stroke)));
            return void 0;
        });
    });
    return void 0;
});
