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
    r269_xn$Capture_Ext$2Lrc2b['$defineGlyphBlockImpl$'](r269_xn$Capture_Ext$2Lrc2b, 'Symbol-Math-Other', function (r270_xn$Capture$2Lrc8, r270_xn$ExportCapture$2Lrc4b) {
        var _r270_t7, _r270_t8;
        var _r270_t0 = r270_xn$Capture$2Lrc8;
        var r270_xn$createAndSaveGlyphImpl$2Lrc3c = _r270_t0['$createAndSaveGlyphImpl$'];
        var r270_xn$NamedParameterPair$2Lrc9b = _r270_t0['$NamedParameterPair$'];
        var r270_xn$assignUnicodeImpl$2Lrc8b = _r270_t0['$assignUnicodeImpl$'];
        var r270_xn$execState$2Lrc0b = _r270_t0['$execState$'];
        var _r270_t1 = r270_xn$Capture$2Lrc8.Metrics;
        var r270_Width = _r270_t1.Width;
        var r270_SB = _r270_t1.SB;
        var r270_SymbolMid = _r270_t1.SymbolMid;
        var r270_ParenTop = _r270_t1.ParenTop;
        var r270_ParenBot = _r270_t1.ParenBot;
        var r270_TackTop = _r270_t1.TackTop;
        var r270_TackBot = _r270_t1.TackBot;
        var r270_Downward = _r270_t1.Downward;
        var r270_RightSB = _r270_t1.RightSB;
        var r270_Middle = _r270_t1.Middle;
        var r270_OverlayStroke = _r270_t1.OverlayStroke;
        var r270_OperatorStroke = _r270_t1.OperatorStroke;
        var _r270_t2 = r270_xn$Capture$2Lrc8.SpiroFns;
        var r270_flat = _r270_t2.flat;
        var r270_curl = _r270_t2.curl;
        var r270_widths = _r270_t2.widths;
        var r270_heading = _r270_t2.heading;
        var r270_dispiro = _r270_t2.dispiro;
        var _r270_t3 = r270_xn$Capture$2Lrc8.BooleFns;
        var _r270_t4 = r270_xn$Capture$2Lrc8.CommonShapes.resolve();
        var r270_HBar = _r270_t4.HBar;
        var _r270_t5 = r270_xn$Capture$2Lrc8['Common-Derivatives'].resolve();
        var r270_xn$referglyph$1aao = _r270_t5['refer-glyph'];
        var r270_alias = _r270_t5.alias;
        var _r270_t6 = r270_xn$Capture$2Lrc8.NotGlyphFn.resolve();
        var r270_NotGlyphSw = _r270_t6.NotGlyphSw;
        r270_alias('mathBullet', 8729, 'bullet');
        r270_alias('whiteDiamondOperator', 8900, 'whiteDiamondOperatorImpl.NWID');
        r270_alias('mathstar', 8902, 'blackStar.NWID');
        r270_xn$createAndSaveGlyphImpl$2Lrc3c('notdivides', 8740, function () {
            var _r276_t1;
            var _r276_t0 = this;
            var r276_currentGlyph = _r276_t0;
            r276_currentGlyph.include(r270_xn$referglyph$1aao('stile'));
            r276_currentGlyph.include(r270_dispiro(r270_widths.center(r270_NotGlyphSw), r270_flat(r1_mix(r270_SB, r270_RightSB, 0.1), r1_mix(r270_SymbolMid, r270_TackBot, 0.5)), r270_curl(r1_mix(r270_SB, r270_RightSB, 0.9), r1_mix(r270_SymbolMid, r270_TackTop, 0.5))));
            return void 0;
        });
        r270_xn$createAndSaveGlyphImpl$2Lrc3c('notparallel', 8742, function () {
            var _r281_t1;
            var _r281_t0 = this;
            var r281_currentGlyph = _r281_t0;
            r281_currentGlyph.include(r270_xn$referglyph$1aao('parallel'));
            r281_currentGlyph.include(r270_dispiro(r270_widths.center(r270_NotGlyphSw), r270_flat(r270_SB, r1_mix(r270_SymbolMid, r270_TackBot, 0.5)), r270_curl(r270_RightSB, r1_mix(r270_SymbolMid, r270_TackTop, 0.5))));
            return void 0;
        });
        r270_xn$createAndSaveGlyphImpl$2Lrc3c('barStroke', 10186, function () {
            var _r286_t1;
            var _r286_t0 = this;
            var r286_currentGlyph = _r286_t0;
            r286_currentGlyph.include(r270_xn$referglyph$1aao('stile'));
            r286_currentGlyph.include(r270_HBar.m(r1_mix(r270_SB, r270_RightSB, 0.1), r1_mix(r270_SB, r270_RightSB, 0.9), r270_SymbolMid, r270_OverlayStroke));
            return void 0;
        });
        r270_xn$createAndSaveGlyphImpl$2Lrc3c('revnotdivides', 10990, function () {
            var _r291_t1;
            var _r291_t0 = this;
            var r291_currentGlyph = _r291_t0;
            r291_currentGlyph.include(r270_xn$referglyph$1aao('stile'));
            r291_currentGlyph.include(r270_dispiro(r270_widths.center(r270_NotGlyphSw), r270_flat(r1_mix(r270_SB, r270_RightSB, 0.1), r1_mix(r270_SymbolMid, r270_TackTop, 0.5)), r270_curl(r1_mix(r270_SB, r270_RightSB, 0.9), r1_mix(r270_SymbolMid, r270_TackBot, 0.5))));
            return void 0;
        });
        r270_xn$createAndSaveGlyphImpl$2Lrc3c('doubleBarStroke', 10994, function () {
            var _r296_t1;
            var _r296_t0 = this;
            var r296_currentGlyph = _r296_t0;
            r296_currentGlyph.include(r270_xn$referglyph$1aao('parallel'));
            r296_currentGlyph.include(r270_HBar.m(r270_SB, r270_RightSB, r270_SymbolMid, r270_OverlayStroke));
            return void 0;
        });
        r270_xn$createAndSaveGlyphImpl$2Lrc3c('doubleBarTilde', 10995, function () {
            var _r301_t1;
            var _r301_t0 = this;
            var r301_currentGlyph = _r301_t0;
            r301_currentGlyph.include(r270_xn$referglyph$1aao('parallel'), true, true);
            r301_currentGlyph.include(r270_xn$referglyph$1aao('sym'));
            return void 0;
        });
        r270_xn$createAndSaveGlyphImpl$2Lrc3c('tripleBarStroke', 10997, function () {
            var _r306_t1;
            var _r306_t0 = this;
            var r306_currentGlyph = _r306_t0;
            r306_currentGlyph.include(r270_xn$referglyph$1aao('interleave'));
            r306_currentGlyph.include(r270_HBar.m(r1_mix(r270_SB, 0, 0.5), r1_mix(r270_RightSB, r270_Width, 0.5), r270_SymbolMid, r270_OverlayStroke));
            return void 0;
        });
        return r270_xn$createAndSaveGlyphImpl$2Lrc3c('sqrt', 8730, function () {
            var _r311_t1;
            var _r311_t0 = this;
            var r311_currentGlyph = _r311_t0;
            r311_currentGlyph.include(r270_dispiro(r270_widths.center(r270_OperatorStroke), r270_flat(r270_SB, r1_mix(r270_ParenBot, r270_ParenTop, 0.45)), r270_curl(r270_Middle, r270_ParenBot, r270_heading(r270_Downward))));
            r311_currentGlyph.include(r270_dispiro(r270_widths.center(r270_OperatorStroke), r270_flat(r270_Width, r270_ParenTop), r270_curl(r270_Middle, r270_ParenBot, r270_heading(r270_Downward))));
            return void 0;
        });
    });
    return void 0;
});
