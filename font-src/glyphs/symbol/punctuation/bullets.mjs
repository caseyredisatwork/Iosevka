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
    r269_xn$Capture_Ext$2Lrc2b['$defineGlyphBlockImpl$'](r269_xn$Capture_Ext$2Lrc2b, 'Symbol-Punctuation-Bullets', function (r270_xn$Capture$2Lrc8, r270_xn$ExportCapture$2Lrc4b) {
        var _r270_t6, _r270_t7;
        var _r270_t0 = r270_xn$Capture$2Lrc8;
        var r270_xn$createAndSaveGlyphImpl$2Lrc3c = _r270_t0['$createAndSaveGlyphImpl$'];
        var r270_xn$NamedParameterPair$2Lrc9b = _r270_t0['$NamedParameterPair$'];
        var r270_xn$assignUnicodeImpl$2Lrc8b = _r270_t0['$assignUnicodeImpl$'];
        var r270_xn$execState$2Lrc0b = _r270_t0['$execState$'];
        var _r270_t1 = r270_xn$Capture$2Lrc8.Metrics;
        var r270_Width = _r270_t1.Width;
        var r270_SymbolMid = _r270_t1.SymbolMid;
        var r270_O = _r270_t1.O;
        var r270_Middle = _r270_t1.Middle;
        var r270_AdviceStroke = _r270_t1.AdviceStroke;
        var _r270_t2 = r270_xn$Capture$2Lrc8.SpiroFns;
        var r270_corner = _r270_t2.corner;
        var r270_xn$spirooutline$1aao = _r270_t2['spiro-outline'];
        var _r270_t3 = r270_xn$Capture$2Lrc8.BooleFns;
        var r270_difference = _r270_t3.difference;
        var _r270_t4 = r270_xn$Capture$2Lrc8.CommonShapes.resolve();
        var r270_DotAt = _r270_t4.DotAt;
        var _r270_t5 = r270_xn$Capture$2Lrc8['Common-Derivatives'].resolve();
        var r270_BulletRadius = Math.max(r270_Width * 2 / 7, r270_AdviceStroke(3));
        r270_xn$createAndSaveGlyphImpl$2Lrc3c('bullet', 8226, r270_DotAt(r270_Middle, r270_SymbolMid, r270_BulletRadius - r270_O));
        r270_xn$createAndSaveGlyphImpl$2Lrc3c('triangularBullet', 8227, function () {
            var _r276_t1;
            var _r276_t0 = this;
            var r276_currentGlyph = _r276_t0;
            var r276_radius = r270_BulletRadius * 1.5;
            var r276_xMid = r270_Middle - r276_radius / 6;
            r276_currentGlyph.include(r270_xn$spirooutline$1aao(r270_corner(r276_xMid + r276_radius - r270_O, r270_SymbolMid), r270_corner(r276_xMid - r276_radius / 2, r270_SymbolMid - r276_radius / 2 * Math.sqrt(3)), r270_corner(r276_xMid - r276_radius / 2, r270_SymbolMid + r276_radius / 2 * Math.sqrt(3))));
            return void 0;
        });
        return r270_xn$createAndSaveGlyphImpl$2Lrc3c('whiteBullet', 9702, function () {
            var _r280_t1;
            var _r280_t0 = this;
            var r280_currentGlyph = _r280_t0;
            var r280_s = Math.min(r270_AdviceStroke(5), r270_BulletRadius * 0.5);
            r280_currentGlyph.include(r270_difference(r270_DotAt(r270_Middle, r270_SymbolMid, r270_BulletRadius - r270_O), r270_DotAt(r270_Middle, r270_SymbolMid, r270_BulletRadius - r270_O - r280_s)));
            return void 0;
        });
    });
    return void 0;
});
