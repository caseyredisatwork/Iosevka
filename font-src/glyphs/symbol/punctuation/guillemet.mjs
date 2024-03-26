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
    r269_xn$Capture_Ext$2Lrc2b['$defineGlyphBlockImpl$'](r269_xn$Capture_Ext$2Lrc2b, 'Symbol-Punctuation-Guillemet', function (r270_xn$Capture$2Lrc8, r270_xn$ExportCapture$2Lrc4b) {
        var _r270_t6, _r270_t7;
        var _r270_t0 = r270_xn$Capture$2Lrc8;
        var r270_xn$createAndSaveGlyphImpl$2Lrc3c = _r270_t0['$createAndSaveGlyphImpl$'];
        var r270_xn$NamedParameterPair$2Lrc9b = _r270_t0['$NamedParameterPair$'];
        var r270_xn$assignUnicodeImpl$2Lrc8b = _r270_t0['$assignUnicodeImpl$'];
        var r270_xn$execState$2Lrc0b = _r270_t0['$execState$'];
        var _r270_t1 = r270_xn$Capture$2Lrc8.Metrics;
        var r270_SB = _r270_t1.SB;
        var r270_SymbolMid = _r270_t1.SymbolMid;
        var r270_ParenTop = _r270_t1.ParenTop;
        var r270_ParenBot = _r270_t1.ParenBot;
        var r270_Translate = _r270_t1.Translate;
        var r270_Rightward = _r270_t1.Rightward;
        var r270_Leftward = _r270_t1.Leftward;
        var r270_RightSB = _r270_t1.RightSB;
        var r270_Middle = _r270_t1.Middle;
        var r270_AdviceStroke = _r270_t1.AdviceStroke;
        var _r270_t2 = r270_xn$Capture$2Lrc8.SpiroFns;
        var r270_g4 = _r270_t2.g4;
        var r270_widths = _r270_t2.widths;
        var r270_heading = _r270_t2.heading;
        var r270_quadControls = _r270_t2.quadControls;
        var r270_dispiro = _r270_t2.dispiro;
        var _r270_t3 = r270_xn$Capture$2Lrc8.BooleFns;
        var _r270_t4 = r270_xn$Capture$2Lrc8.CommonShapes.resolve();
        var _r270_t5 = r270_xn$Capture$2Lrc8['Common-Derivatives'].resolve();
        var r270_xn$referglyph$1aao = _r270_t5['refer-glyph'];
        var r270_turned = _r270_t5.turned;
        r270_xn$createAndSaveGlyphImpl$2Lrc3c('singleGuillemetLeft', 8249, function () {
            var _r275_t1;
            var _r275_t0 = this;
            var r275_currentGlyph = _r275_t0;
            var r275_top = r1_mix(r270_SymbolMid, r270_ParenTop, 0.5);
            var r275_bot = r1_mix(r270_SymbolMid, r270_ParenBot, 0.5);
            var r275_extension = 0.55;
            var r275_cor = 1;
            var r275_sw = r270_AdviceStroke(3.5);
            r275_currentGlyph.include(r270_dispiro(r270_widths.center(r275_sw), r270_g4(r1_mix(r270_Middle, r270_RightSB, r275_extension), r275_top), r270_quadControls(0.4, 0.75), r270_g4(r1_mix(r270_Middle, r270_SB, r275_extension), r1_mix(r275_top, r275_bot, 0.5), r270_widths.center.heading(r275_cor * r275_sw, r270_Leftward))));
            r275_currentGlyph.include(r270_dispiro(r270_widths.center(r275_sw * r275_cor), r270_g4(r1_mix(r270_Middle, r270_SB, r275_extension), r1_mix(r275_top, r275_bot, 0.5), r270_heading(r270_Rightward)), r270_quadControls(1 - 0.4, 1 - 0.75), r270_g4(r1_mix(r270_Middle, r270_RightSB, r275_extension), r275_bot, r270_widths.center(r275_sw))));
            r275_currentGlyph.include(r270_Translate(-(r270_RightSB - r270_SB) * 0.05, 0));
            return void 0;
        });
        r270_xn$createAndSaveGlyphImpl$2Lrc3c('guillemetLeft', 171, function () {
            var _r281_t1;
            var _r281_t0 = this;
            var r281_currentGlyph = _r281_t0;
            r281_currentGlyph.include(r270_xn$referglyph$1aao('singleGuillemetLeft'));
            r281_currentGlyph.include(r270_Translate((r270_RightSB - r270_SB) * 0.5, 0));
            r281_currentGlyph.include(r270_xn$referglyph$1aao('singleGuillemetLeft'));
            r281_currentGlyph.include(r270_Translate(-(r270_RightSB - r270_SB) * 0.25, 0));
            return void 0;
        });
        r270_turned('singleGuillemetRight', 8250, 'singleGuillemetLeft', r270_Middle, r270_SymbolMid);
        return r270_turned('guillemetRight', 187, 'guillemetLeft', r270_Middle, r270_SymbolMid);
    });
    return void 0;
});
