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
    r269_xn$Capture_Ext$2Lrc2b['$defineGlyphBlockImpl$'](r269_xn$Capture_Ext$2Lrc2b, 'Symbol-Pictograph-Metric-Marks', function (r270_xn$Capture$2Lrc8, r270_xn$ExportCapture$2Lrc4b) {
        var _r270_t6, _r270_t7;
        var _r270_t0 = r270_xn$Capture$2Lrc8;
        var r270_xn$createAndSaveGlyphImpl$2Lrc3c = _r270_t0['$createAndSaveGlyphImpl$'];
        var r270_xn$NamedParameterPair$2Lrc9b = _r270_t0['$NamedParameterPair$'];
        var r270_xn$assignUnicodeImpl$2Lrc8b = _r270_t0['$assignUnicodeImpl$'];
        var r270_xn$execState$2Lrc0b = _r270_t0['$execState$'];
        var r270_fontMetrics = _r270_t0.fontMetrics;
        var _r270_t1 = r270_xn$Capture$2Lrc8.Metrics;
        var r270_UPM = _r270_t1.UPM;
        var r270_Width = _r270_t1.Width;
        var r270_CAP = _r270_t1.CAP;
        var r270_XH = _r270_t1.XH;
        var r270_Descender = _r270_t1.Descender;
        var r270_SymbolMid = _r270_t1.SymbolMid;
        var r270_ParenTop = _r270_t1.ParenTop;
        var r270_ParenBot = _r270_t1.ParenBot;
        var r270_Middle = _r270_t1.Middle;
        var r270_ShoulderFine = _r270_t1.ShoulderFine;
        var _r270_t2 = r270_xn$Capture$2Lrc8.SpiroFns;
        var r270_corner = _r270_t2.corner;
        var r270_xn$spirooutline$1aao = _r270_t2['spiro-outline'];
        var _r270_t3 = r270_xn$Capture$2Lrc8.BooleFns;
        var _r270_t4 = r270_xn$Capture$2Lrc8.CommonShapes.resolve();
        var r270_HBar = _r270_t4.HBar;
        var r270_VBar = _r270_t4.VBar;
        var _r270_t5 = r270_xn$Capture$2Lrc8['Common-Derivatives'].resolve();
        r270_xn$createAndSaveGlyphImpl$2Lrc3c('metmark', 57359, function () {
            var _r275_t1;
            var _r275_t0 = this;
            var r275_currentGlyph = _r275_t0;
            r275_currentGlyph.include(r270_VBar.m(r270_Middle, -r270_fontMetrics.os2.usWinDescent, r270_fontMetrics.os2.usWinAscent, r270_ShoulderFine));
            r275_currentGlyph.include(r270_HBar.m(r270_Middle, r270_Width, 0, r270_ShoulderFine));
            r275_currentGlyph.include(r270_HBar.m(r270_Middle, r270_Width, r270_CAP, r270_ShoulderFine));
            r275_currentGlyph.include(r270_HBar.m(r270_Middle, r270_Width, r270_XH, r270_ShoulderFine));
            r275_currentGlyph.include(r270_HBar.m(r270_Middle, r270_Width, r270_Descender, r270_ShoulderFine));
            r275_currentGlyph.include(r270_HBar.m(0, r270_Middle, r270_SymbolMid, r270_ShoulderFine));
            r275_currentGlyph.include(r270_HBar.m(0, r270_Middle, r270_ParenTop, r270_ShoulderFine));
            r275_currentGlyph.include(r270_HBar.m(0, r270_Middle, r270_ParenBot, r270_ShoulderFine));
            return void 0;
        });
        var r270_MosaicTop = r270_fontMetrics.os2.sTypoAscender;
        var r270_MosaicBottom = r270_fontMetrics.os2.sTypoDescender;
        var r270_MarkerSize = r270_UPM / 12;
        var r270_MarkerBarWidth = r270_UPM / 50;
        r270_xn$createAndSaveGlyphImpl$2Lrc3c('boxMarkLeft', 57350, function () {
            var _r286_t1;
            var _r286_t0 = this;
            var r286_currentGlyph = _r286_t0;
            r286_currentGlyph.setWidth(0);
            r286_currentGlyph.include(r270_xn$spirooutline$1aao(r270_corner(0, r270_ParenTop), r270_corner(0, r270_ParenTop + r270_MarkerSize * 1.5), r270_corner(-r270_MarkerSize * 1.5, r270_ParenTop)));
            r286_currentGlyph.include(r270_xn$spirooutline$1aao(r270_corner(0, r270_ParenBot), r270_corner(0, r270_ParenBot - r270_MarkerSize * 1.5), r270_corner(-r270_MarkerSize * 1.5, r270_ParenBot)));
            return void 0;
        });
        r270_xn$createAndSaveGlyphImpl$2Lrc3c('boxMarkRight', 57351, function () {
            var _r292_t1;
            var _r292_t0 = this;
            var r292_currentGlyph = _r292_t0;
            r292_currentGlyph.setWidth(0);
            r292_currentGlyph.include(r270_xn$spirooutline$1aao(r270_corner(0, r270_ParenTop), r270_corner(0, r270_ParenTop + r270_MarkerSize * 1.5), r270_corner(+r270_MarkerSize * 1.5, r270_ParenTop)));
            r292_currentGlyph.include(r270_xn$spirooutline$1aao(r270_corner(0, r270_ParenBot), r270_corner(0, r270_ParenBot - r270_MarkerSize * 1.5), r270_corner(+r270_MarkerSize * 1.5, r270_ParenBot)));
            return void 0;
        });
        r270_xn$createAndSaveGlyphImpl$2Lrc3c('mosaicMarkLeft', 57352, function () {
            var _r298_t1;
            var _r298_t0 = this;
            var r298_currentGlyph = _r298_t0;
            r298_currentGlyph.setWidth(0);
            r298_currentGlyph.include(r270_xn$spirooutline$1aao(r270_corner(0, r270_MosaicTop), r270_corner(0, r270_MosaicTop + r270_MarkerSize * 1.5), r270_corner(-r270_MarkerSize * 1.5, r270_MosaicTop)));
            r298_currentGlyph.include(r270_xn$spirooutline$1aao(r270_corner(0, r270_MosaicBottom), r270_corner(0, r270_MosaicBottom - r270_MarkerSize * 1.5), r270_corner(-r270_MarkerSize * 1.5, r270_MosaicBottom)));
            return void 0;
        });
        r270_xn$createAndSaveGlyphImpl$2Lrc3c('mosaicMarkRight', 57353, function () {
            var _r304_t1;
            var _r304_t0 = this;
            var r304_currentGlyph = _r304_t0;
            r304_currentGlyph.setWidth(0);
            r304_currentGlyph.include(r270_xn$spirooutline$1aao(r270_corner(0, r270_MosaicTop), r270_corner(0, r270_MosaicTop + r270_MarkerSize * 1.5), r270_corner(+r270_MarkerSize * 1.5, r270_MosaicTop)));
            r304_currentGlyph.include(r270_xn$spirooutline$1aao(r270_corner(0, r270_MosaicBottom), r270_corner(0, r270_MosaicBottom - r270_MarkerSize * 1.5), r270_corner(+r270_MarkerSize * 1.5, r270_MosaicBottom)));
            return void 0;
        });
        r270_xn$createAndSaveGlyphImpl$2Lrc3c('baselineMarkUnder', 57354, function () {
            var _r310_t1;
            var _r310_t0 = this;
            var r310_currentGlyph = _r310_t0;
            r310_currentGlyph.setWidth(0);
            r310_currentGlyph.include(r270_HBar.m(-r270_Width * 2, r270_Width * 2, 0, r270_MarkerBarWidth));
            return void 0;
        });
        r270_xn$createAndSaveGlyphImpl$2Lrc3c('baselineMarkLeft', 57355, function () {
            var _r315_t1;
            var _r315_t0 = this;
            var r315_currentGlyph = _r315_t0;
            r315_currentGlyph.setWidth(0);
            r315_currentGlyph.include(r270_xn$spirooutline$1aao(r270_corner(0, 0), r270_corner(-r270_MarkerSize * 1.5, +r270_MarkerSize * 1.5), r270_corner(-r270_MarkerSize * 1.5, -r270_MarkerSize * 1.5)));
            return void 0;
        });
        return r270_xn$createAndSaveGlyphImpl$2Lrc3c('baselineMarkRight', 57356, function () {
            var _r320_t1;
            var _r320_t0 = this;
            var r320_currentGlyph = _r320_t0;
            r320_currentGlyph.setWidth(0);
            r320_currentGlyph.include(r270_xn$spirooutline$1aao(r270_corner(0, 0), r270_corner(+r270_MarkerSize * 1.5, +r270_MarkerSize * 1.5), r270_corner(+r270_MarkerSize * 1.5, -r270_MarkerSize * 1.5)));
            return void 0;
        });
    });
    return void 0;
});
