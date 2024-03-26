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
    r269_xn$Capture_Ext$2Lrc2b['$defineGlyphBlockImpl$'](r269_xn$Capture_Ext$2Lrc2b, 'Symbol-Pictograph-Flags', function (r270_xn$Capture$2Lrc8, r270_xn$ExportCapture$2Lrc4b) {
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
        var r270_PictTop = _r270_t1.PictTop;
        var r270_PictBot = _r270_t1.PictBot;
        var r270_Translate = _r270_t1.Translate;
        var r270_HVContrast = _r270_t1.HVContrast;
        var r270_Rightward = _r270_t1.Rightward;
        var r270_Leftward = _r270_t1.Leftward;
        var r270_RightSB = _r270_t1.RightSB;
        var r270_Middle = _r270_t1.Middle;
        var r270_AdviceStroke = _r270_t1.AdviceStroke;
        var _r270_t2 = r270_xn$Capture$2Lrc8.SpiroFns;
        var r270_g4 = _r270_t2.g4;
        var r270_corner = _r270_t2.corner;
        var r270_flat = _r270_t2.flat;
        var r270_curl = _r270_t2.curl;
        var r270_close = _r270_t2.close;
        var r270_widths = _r270_t2.widths;
        var r270_heading = _r270_t2.heading;
        var r270_alsoThru = _r270_t2.alsoThru;
        var r270_dispiro = _r270_t2.dispiro;
        var r270_xn$spirooutline$1aao = _r270_t2['spiro-outline'];
        var _r270_t3 = r270_xn$Capture$2Lrc8.BooleFns;
        var _r270_t4 = r270_xn$Capture$2Lrc8.CommonShapes.resolve();
        var r270_VBar = _r270_t4.VBar;
        var _r270_t5 = r270_xn$Capture$2Lrc8['Common-Derivatives'].resolve();
        var r270_sw = r270_AdviceStroke(5);
        var r270_flagDown = 0.07 * (r270_ParenTop - r270_ParenBot);
        var r270_delta = 1;
        var r270_curliness = 0.85;
        var r270_FlagBar = function () {
            var _r273_t0, _r273_t1;
            return r270_VBar.m(r270_SB, r270_PictBot, r270_PictTop, r270_sw);
        };
        r270_xn$createAndSaveGlyphImpl$2Lrc3c('blackflag', 9873, function () {
            var _r276_t1;
            var _r276_t0 = this;
            var r276_currentGlyph = _r276_t0;
            r276_currentGlyph.include(r270_xn$spirooutline$1aao(r270_corner(r270_SB, r270_PictTop), r270_curl(r270_SB + r270_delta, r270_PictTop), r270_alsoThru(0.5, 1 - r270_curliness), r270_g4(r270_Middle, r270_PictTop - r270_flagDown / 2), r270_alsoThru(0.5, r270_curliness), r270_flat(r270_RightSB - r270_delta, r270_PictTop - r270_flagDown), r270_corner(r270_RightSB, r270_PictTop - r270_flagDown), r270_corner(r270_RightSB, r270_SymbolMid - r270_flagDown), r270_curl(r270_RightSB - r270_delta, r270_SymbolMid - r270_flagDown), r270_alsoThru(0.5, 1 - r270_curliness), r270_g4(r270_Middle, r270_SymbolMid - r270_flagDown / 2), r270_alsoThru(0.5, r270_curliness), r270_flat(r270_SB + r270_delta, r270_SymbolMid), r270_corner(r270_SB, r270_SymbolMid), r270_close()));
            r276_currentGlyph.include(r270_Translate(r270_sw / 2 * r270_HVContrast, 0));
            r276_currentGlyph.include(r270_FlagBar());
            return void 0;
        });
        return r270_xn$createAndSaveGlyphImpl$2Lrc3c('whiteflag', 9872, function () {
            var _r282_t1;
            var _r282_t0 = this;
            var r282_currentGlyph = _r282_t0;
            r282_currentGlyph.include(r270_VBar.r(r270_RightSB, r270_SymbolMid - r270_flagDown, r270_PictTop - r270_flagDown, r270_sw));
            r282_currentGlyph.include(r270_dispiro(r270_widths.rhs(r270_sw), r270_flat(r270_SB, r270_PictTop, r270_heading(r270_Rightward)), r270_curl(r270_SB + r270_delta, r270_PictTop, r270_heading(r270_Rightward)), r270_alsoThru(0.5, 1 - r270_curliness), r270_g4(r270_Middle, r270_PictTop - r270_flagDown / 2), r270_alsoThru(0.5, r270_curliness), r270_flat(r270_RightSB - r270_delta, r270_PictTop - r270_flagDown, r270_heading(r270_Rightward)), r270_curl(r270_RightSB, r270_PictTop - r270_flagDown, r270_heading(r270_Rightward))));
            r282_currentGlyph.include(r270_dispiro(r270_widths.rhs(r270_sw), r270_flat(r270_RightSB, r270_SymbolMid - r270_sw / 2 - r270_flagDown, r270_heading(r270_Leftward)), r270_curl(r270_RightSB - r270_delta, r270_SymbolMid - r270_sw / 2 - r270_flagDown, r270_heading(r270_Leftward)), r270_alsoThru(0.5, 1 - r270_curliness), r270_g4(r270_Middle, r270_SymbolMid - r270_sw / 2 - r270_flagDown / 2), r270_alsoThru(0.5, r270_curliness), r270_flat(r270_SB + r270_delta, r270_SymbolMid - r270_sw / 2, r270_heading(r270_Leftward)), r270_curl(r270_SB, r270_SymbolMid - r270_sw / 2, r270_heading(r270_Leftward))));
            r282_currentGlyph.include(r270_Translate(r270_sw / 2 * r270_HVContrast, 0));
            r282_currentGlyph.include(r270_FlagBar());
            return void 0;
        });
    });
    return void 0;
});
