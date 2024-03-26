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
    r269_xn$Capture_Ext$2Lrc2b['$defineGlyphBlockImpl$'](r269_xn$Capture_Ext$2Lrc2b, 'Symbol-Punctuation-Interpuncts', function (r270_xn$Capture$2Lrc8, r270_xn$ExportCapture$2Lrc4b) {
        var r270_suffix, r270_DrawAt, r270_kDotRadius, r270_overshoot, _r270_t8, _r270_t9, _r270_t10, _r270_t11, _r270_tag12;
        var _r270_t0 = r270_xn$Capture$2Lrc8;
        var r270_xn$createAndSaveGlyphImpl$2Lrc3c = _r270_t0['$createAndSaveGlyphImpl$'];
        var r270_xn$NamedParameterPair$2Lrc9b = _r270_t0['$NamedParameterPair$'];
        var r270_xn$assignUnicodeImpl$2Lrc8b = _r270_t0['$assignUnicodeImpl$'];
        var r270_xn$execState$2Lrc0b = _r270_t0['$execState$'];
        var r270_para = _r270_t0.para;
        var r270_DivFrame = _r270_t0.DivFrame;
        var _r270_t1 = r270_xn$Capture$2Lrc8.Metrics;
        var r270_SymbolMid = _r270_t1.SymbolMid;
        var r270_PeriodRadius = _r270_t1.PeriodRadius;
        var _r270_t2 = r270_xn$Capture$2Lrc8.SpiroFns;
        var _r270_t3 = r270_xn$Capture$2Lrc8.BooleFns;
        var _r270_t4 = r270_xn$Capture$2Lrc8.CommonShapes.resolve();
        var r270_DotVariants = _r270_t4.DotVariants;
        var _r270_t5 = r270_xn$Capture$2Lrc8['Common-Derivatives'].resolve();
        var r270_xn$selectvariant$7Hrq = _r270_t5['select-variant'];
        var r270_alias = _r270_t5.alias;
        r270_xn$Capture$2Lrc8['Symbol-Punctuation-Small'].resolve();
        var _r270_t6 = Object.entries(r270_DotVariants)[Symbol.iterator]();
        var _r270_t7 = void 0;
        while (!(_r270_t7 = _r270_t6.next()).done) {
            _r270_t8 = _r270_t7.value;
            r270_suffix = _r270_t8[0];
            r270_DrawAt = _r270_t8[1][0];
            r270_kDotRadius = _r270_t8[1][1];
            r270_overshoot = _r270_t8[1][2];
            _r270_t8[1];
            (function () {
                return r270_xn$createAndSaveGlyphImpl$2Lrc3c('interpunct.' + r270_suffix, null, function () {
                    var _r279_t1;
                    var _r279_t0 = this;
                    var r279_currentGlyph = _r279_t0;
                    var r279_df = r270_DivFrame(r270_para.diversityF);
                    r279_currentGlyph.setWidth(r279_df.width);
                    r279_currentGlyph.include(r270_DrawAt(r279_df.middle, r270_SymbolMid, r270_PeriodRadius * r270_kDotRadius - r270_overshoot));
                    return void 0;
                });
            }());
        }
        r270_xn$selectvariant$7Hrq('interpunct', 183, new r270_xn$NamedParameterPair$2Lrc9b('follow', 'punctuationDot'));
        r270_alias('period/mid', null, 'interpunct');
        r270_alias('greekbullet', 903, 'interpunct');
        r270_alias('hyphenpoint', 8231, 'interpunct');
        r270_alias('wordseparatormiddledot', 11825, 'interpunct');
        return r270_alias('sinologicaldot', 42895, 'interpunct');
    });
    return void 0;
});
