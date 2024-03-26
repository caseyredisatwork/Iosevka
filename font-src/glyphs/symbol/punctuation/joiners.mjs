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
    r269_xn$Capture_Ext$2Lrc2b['$defineGlyphBlockImpl$'](r269_xn$Capture_Ext$2Lrc2b, 'Symbol-Punctuation-Joiners', function (r270_xn$Capture$2Lrc8, r270_xn$ExportCapture$2Lrc4b) {
        var _r270_t4, _r270_t5, _r270_t6, _r270_tag7;
        var _r270_t0 = r270_xn$Capture$2Lrc8;
        var r270_xn$createAndSaveGlyphImpl$2Lrc3c = _r270_t0['$createAndSaveGlyphImpl$'];
        var r270_xn$NamedParameterPair$2Lrc9b = _r270_t0['$NamedParameterPair$'];
        var r270_xn$assignUnicodeImpl$2Lrc8b = _r270_t0['$assignUnicodeImpl$'];
        var r270_xn$execState$2Lrc0b = _r270_t0['$execState$'];
        var _r270_t1 = r270_xn$Capture$2Lrc8.Metrics;
        var r270_Width = _r270_t1.Width;
        var r270_CAP = _r270_t1.CAP;
        var r270_Descender = _r270_t1.Descender;
        var r270_AdviceStroke = _r270_t1.AdviceStroke;
        var _r270_t2 = r270_xn$Capture$2Lrc8.SpiroFns;
        var r270_corner = _r270_t2.corner;
        var r270_widths = _r270_t2.widths;
        var r270_dispiro = _r270_t2.dispiro;
        var r270_xn$spirooutline$1aao = _r270_t2['spiro-outline'];
        var _r270_t3 = r270_xn$Capture$2Lrc8.BooleFns;
        var r270_difference = _r270_t3.difference;
        return function () {
            var _r272_t0 = r270_xn$Capture$2Lrc8.CommonShapes.resolve();
            var r272_VBar = _r272_t0.VBar;
            var r272_fine = r270_AdviceStroke(6);
            var r272_size = r270_Width * 0.25;
            r270_xn$createAndSaveGlyphImpl$2Lrc3c('zwj', 8205, function () {
                var _r276_t1;
                var _r276_t0 = this;
                var r276_currentGlyph = _r276_t0;
                r276_currentGlyph.setWidth(0);
                r276_currentGlyph.include(r272_VBar.m(0, r270_Descender, r270_CAP, r272_fine));
                r276_currentGlyph.include(r270_dispiro(r270_widths.center(r272_fine), r270_corner(-r272_size, r270_CAP), r270_corner(+r272_size, r270_CAP + 2 * r272_size)));
                r276_currentGlyph.include(r270_dispiro(r270_widths.center(r272_fine), r270_corner(+r272_size, r270_CAP), r270_corner(-r272_size, r270_CAP + 2 * r272_size)));
                return void 0;
            });
            return r270_xn$createAndSaveGlyphImpl$2Lrc3c('zwnj', 8204, function () {
                var _r283_t1;
                var _r283_t0 = this;
                var r283_currentGlyph = _r283_t0;
                r283_currentGlyph.setWidth(0);
                r283_currentGlyph.include(r272_VBar.m(0, r270_Descender, r270_CAP, r272_fine));
                var r283_outerSize = r272_size + 0.5 * r272_fine * Math.sqrt(2);
                var r283_innerSize = r272_size - 0.5 * r272_fine * Math.sqrt(2);
                r283_currentGlyph.include(r270_difference(r270_xn$spirooutline$1aao(r270_widths.center(r272_fine), r270_corner(-r283_outerSize, r270_CAP + r272_size), r270_corner(0, r270_CAP + r272_size - r283_outerSize), r270_corner(+r283_outerSize, r270_CAP + r272_size), r270_corner(0, r270_CAP + r272_size + r283_outerSize)), r270_xn$spirooutline$1aao(r270_widths.center(r272_fine), r270_corner(-r283_innerSize, r270_CAP + r272_size), r270_corner(0, r270_CAP + r272_size - r283_innerSize), r270_corner(+r283_innerSize, r270_CAP + r272_size), r270_corner(0, r270_CAP + r272_size + r283_innerSize))));
                return void 0;
            });
        }();
    });
    return void 0;
});
