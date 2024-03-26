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
    r269_xn$Capture_Ext$2Lrc2b['$defineGlyphBlockImpl$'](r269_xn$Capture_Ext$2Lrc2b, 'Letter-Greek-Lower-Phi', function (r270_xn$Capture$2Lrc8, r270_xn$ExportCapture$2Lrc4b) {
        var _r270_t6, _r270_t7;
        var _r270_t0 = r270_xn$Capture$2Lrc8;
        var r270_xn$createAndSaveGlyphImpl$2Lrc3c = _r270_t0['$createAndSaveGlyphImpl$'];
        var r270_xn$NamedParameterPair$2Lrc9b = _r270_t0['$NamedParameterPair$'];
        var r270_xn$assignUnicodeImpl$2Lrc8b = _r270_t0['$assignUnicodeImpl$'];
        var r270_xn$execState$2Lrc0b = _r270_t0['$execState$'];
        var r270_para = _r270_t0.para;
        var r270_DivFrame = _r270_t0.DivFrame;
        var _r270_t1 = r270_xn$Capture$2Lrc8.Metrics;
        var r270_XH = _r270_t1.XH;
        var r270_Descender = _r270_t1.Descender;
        var r270_HVContrast = _r270_t1.HVContrast;
        var r270_Downward = _r270_t1.Downward;
        var r270_Leftward = _r270_t1.Leftward;
        var r270_O = _r270_t1.O;
        var r270_OX = _r270_t1.OX;
        var r270_CorrectionOMidS = _r270_t1.CorrectionOMidS;
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
        var r270_VBar = _r270_t4.VBar;
        var _r270_t5 = r270_xn$Capture$2Lrc8['Common-Derivatives'].resolve();
        var r270_xn$referglyph$1aao = _r270_t5['refer-glyph'];
        r270_xn$createAndSaveGlyphImpl$2Lrc3c('taillessphi', 11383, function () {
            var _r275_t1;
            var _r275_t0 = this;
            var r275_currentGlyph = _r275_t0;
            var r275_df = r270_DivFrame(r270_para.diversityM, 3);
            r275_currentGlyph.setWidth(r275_df.width);
            r275_currentGlyph.include(r275_df.markSet.e());
            var r275_x0 = r1_mix(r275_df.leftSB, r275_df.rightSB, 0.1);
            var r275_y1 = r1_mix(0, r270_XH, 0.75);
            var r275_x1 = r275_df.leftSB + r270_OX * 2;
            var r275_y3 = r270_XH * 0.66;
            var r275_y4 = r270_XH * 0.65;
            r275_currentGlyph.include(r270_dispiro(r270_widths.lhs(r275_df.mvs), r270_g4(r275_x0, r270_XH), r270_g4(r275_x1, r270_XH * 0.55), r270_arcvh(), r270_g4(r275_df.middle + r270_CorrectionOMidS, r270_O), r270_archv(), r270_g4(r275_df.width - r275_x1, r270_XH * 0.55), r270_arcvh(8), r270_g4.left.mid(r1_mix(r275_df.width - r275_x1, r275_df.middle - r275_df.mvs / 2 * r270_HVContrast, 0.525), r270_XH, r270_heading(r270_Leftward)), r270_archv(), r270_flat(r275_df.middle - r275_df.mvs / 2 * r270_HVContrast, r275_y3), r270_curl(r275_df.middle - r275_df.mvs / 2 * r270_HVContrast, r275_df.mvs * 0.2, r270_heading(r270_Downward))));
            return void 0;
        });
        return r270_xn$createAndSaveGlyphImpl$2Lrc3c('grek/phi', 966, function () {
            var _r281_t1;
            var _r281_t0 = this;
            var r281_currentGlyph = _r281_t0;
            var r281_df = r270_DivFrame(r270_para.diversityM, 3);
            r281_currentGlyph.setWidth(r281_df.width);
            r281_currentGlyph.include(r281_df.markSet.p());
            r281_currentGlyph.include(r270_xn$referglyph$1aao('taillessphi'));
            r281_currentGlyph.include(r270_VBar.m(r281_df.middle, r270_Descender, r281_df.mvs * 0.2));
            return void 0;
        });
    });
    return void 0;
});
