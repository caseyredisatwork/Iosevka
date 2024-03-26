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
    r269_xn$Capture_Ext$2Lrc2b['$defineGlyphBlockImpl$'](r269_xn$Capture_Ext$2Lrc2b, 'Symbol-Punctuation-Daggers', function (r270_xn$Capture$2Lrc8, r270_xn$ExportCapture$2Lrc4b) {
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
        var r270_RightSB = _r270_t1.RightSB;
        var r270_Middle = _r270_t1.Middle;
        var _r270_t2 = r270_xn$Capture$2Lrc8.SpiroFns;
        var _r270_t3 = r270_xn$Capture$2Lrc8.BooleFns;
        var _r270_t4 = r270_xn$Capture$2Lrc8.CommonShapes.resolve();
        var r270_HBar = _r270_t4.HBar;
        var r270_VBar = _r270_t4.VBar;
        var _r270_t5 = r270_xn$Capture$2Lrc8['Common-Derivatives'].resolve();
        var r270_xn$referglyph$1aao = _r270_t5['refer-glyph'];
        var r270_turned = _r270_t5.turned;
        r270_xn$createAndSaveGlyphImpl$2Lrc3c('dagger', 8224, function () {
            var _r275_t1;
            var _r275_t0 = this;
            var r275_currentGlyph = _r275_t0;
            r275_currentGlyph.include(r270_VBar.m(r270_Middle, r270_ParenBot, r270_ParenTop));
            r275_currentGlyph.include(r270_HBar.m(r270_SB, r270_RightSB, r1_mix(r270_ParenTop, r270_ParenBot, 0.33)));
            return void 0;
        });
        r270_xn$createAndSaveGlyphImpl$2Lrc3c('doubledagger', 8225, function () {
            var _r280_t1;
            var _r280_t0 = this;
            var r280_currentGlyph = _r280_t0;
            r280_currentGlyph.include(r270_xn$referglyph$1aao('dagger'));
            r280_currentGlyph.include(r270_HBar.m(r270_SB, r270_RightSB, r1_mix(r270_ParenTop, r270_ParenBot, 0.67)));
            return void 0;
        });
        r270_xn$createAndSaveGlyphImpl$2Lrc3c('leftHalfDagger', 11830, function () {
            var _r285_t1;
            var _r285_t0 = this;
            var r285_currentGlyph = _r285_t0;
            r285_currentGlyph.include(r270_VBar.m(r270_Middle, r270_ParenBot, r270_ParenTop));
            r285_currentGlyph.include(r270_HBar.m(r270_SB, r270_Middle, r1_mix(r270_ParenTop, r270_ParenBot, 0.33)));
            return void 0;
        });
        r270_xn$createAndSaveGlyphImpl$2Lrc3c('rightHalfDagger', 11831, function () {
            var _r290_t1;
            var _r290_t0 = this;
            var r290_currentGlyph = _r290_t0;
            r290_currentGlyph.include(r270_VBar.m(r270_Middle, r270_ParenBot, r270_ParenTop));
            r290_currentGlyph.include(r270_HBar.m(r270_Middle, r270_RightSB, r1_mix(r270_ParenTop, r270_ParenBot, 0.33)));
            return void 0;
        });
        r270_turned('turnDagger', 11832, 'dagger', r270_Middle, r270_SymbolMid);
        return r270_xn$createAndSaveGlyphImpl$2Lrc3c('tripleDagger', 11851, function () {
            var _r295_t1;
            var _r295_t0 = this;
            var r295_currentGlyph = _r295_t0;
            r295_currentGlyph.include(r270_VBar.m(r270_Middle, r270_ParenBot, r270_ParenTop));
            r295_currentGlyph.include(r270_HBar.m(r270_SB, r270_RightSB, r1_mix(r270_ParenTop, r270_ParenBot, 0.25)));
            r295_currentGlyph.include(r270_HBar.m(r270_SB, r270_RightSB, r270_SymbolMid));
            r295_currentGlyph.include(r270_HBar.m(r270_SB, r270_RightSB, r1_mix(r270_ParenTop, r270_ParenBot, 0.75)));
            return void 0;
        });
    });
    return void 0;
});
