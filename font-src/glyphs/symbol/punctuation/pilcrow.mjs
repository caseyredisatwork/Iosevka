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
    r269_xn$Capture_Ext$2Lrc2b['$defineGlyphBlockImpl$'](r269_xn$Capture_Ext$2Lrc2b, 'Symbol-Punctuation-ParagraphAndSection', function (r270_xn$Capture$2Lrc8, r270_xn$ExportCapture$2Lrc4b) {
        var _r270_t6, _r270_t7;
        var _r270_t0 = r270_xn$Capture$2Lrc8;
        var r270_xn$createAndSaveGlyphImpl$2Lrc3c = _r270_t0['$createAndSaveGlyphImpl$'];
        var r270_xn$NamedParameterPair$2Lrc9b = _r270_t0['$NamedParameterPair$'];
        var r270_xn$assignUnicodeImpl$2Lrc8b = _r270_t0['$assignUnicodeImpl$'];
        var r270_xn$execState$2Lrc0b = _r270_t0['$execState$'];
        var r270_AS_BASE = _r270_t0.AS_BASE;
        var _r270_t1 = r270_xn$Capture$2Lrc8.Metrics;
        var r270_Width = _r270_t1.Width;
        var r270_SB = _r270_t1.SB;
        var r270_CAP = _r270_t1.CAP;
        var r270_Descender = _r270_t1.Descender;
        var r270_SymbolMid = _r270_t1.SymbolMid;
        var r270_PlusTop = _r270_t1.PlusTop;
        var r270_PlusBot = _r270_t1.PlusBot;
        var r270_Downward = _r270_t1.Downward;
        var r270_Rightward = _r270_t1.Rightward;
        var r270_Leftward = _r270_t1.Leftward;
        var r270_RightSB = _r270_t1.RightSB;
        var r270_Middle = _r270_t1.Middle;
        var r270_AdviceStroke = _r270_t1.AdviceStroke;
        var _r270_t2 = r270_xn$Capture$2Lrc8.SpiroFns;
        var r270_g4 = _r270_t2.g4;
        var r270_flat = _r270_t2.flat;
        var r270_curl = _r270_t2.curl;
        var r270_end = _r270_t2.end;
        var r270_straight = _r270_t2.straight;
        var r270_widths = _r270_t2.widths;
        var r270_heading = _r270_t2.heading;
        var r270_archv = _r270_t2.archv;
        var r270_arcvh = _r270_t2.arcvh;
        var r270_dispiro = _r270_t2.dispiro;
        var r270_xn$spirooutline$1aao = _r270_t2['spiro-outline'];
        var _r270_t3 = r270_xn$Capture$2Lrc8.BooleFns;
        var r270_union = _r270_t3.union;
        var _r270_t4 = r270_xn$Capture$2Lrc8.CommonShapes.resolve();
        var r270_VBar = _r270_t4.VBar;
        var r270_FlipAround = _r270_t4.FlipAround;
        var _r270_t5 = r270_xn$Capture$2Lrc8['Common-Derivatives'].resolve();
        var r270_xn$selectvariant$7Hrq = _r270_t5['select-variant'];
        var r270_xn$referglyph$1aao = _r270_t5['refer-glyph'];
        r270_xn$createAndSaveGlyphImpl$2Lrc3c('.WF.font-src/glyphs/symbol/punctuation/pilcrow.ptl.1', null, function () {
            var _r275_t1;
            var _r275_t0 = this;
            var r275_currentGlyph = _r275_t0;
            r275_currentGlyph.setWidth(r270_Width);
            var r275_sw = r270_AdviceStroke(3.6);
            r275_currentGlyph.include(r270_union(r270_dispiro(r270_widths.center(r275_sw), r270_flat(r270_RightSB - r275_sw / 4, r270_CAP - r275_sw / 2, r270_heading(r270_Leftward)), r270_curl(r270_Middle - r275_sw / 4, r270_CAP - r275_sw / 2, r270_heading(r270_Leftward)), r270_archv(), r270_g4.down.mid(r270_SB + r275_sw / 2, r1_mix(r270_CAP * 0.5, r270_CAP - r275_sw / 2, 0.5), r270_heading(r270_Downward)), r270_arcvh(), r270_straight.right.end(r270_Middle - r275_sw / 4, r270_CAP * 0.5, r270_heading(r270_Rightward))), r270_xn$spirooutline$1aao(r270_straight.left.start(r270_Middle - r275_sw / 4, r270_CAP - r275_sw / 2 - 0.1), r270_archv(), r270_g4.down.mid(r270_SB + r275_sw / 2 + 0.2, r1_mix(r270_CAP * 0.5, r270_CAP - r275_sw / 2, 0.5)), r270_arcvh(), r270_straight.right.end(r270_Middle - r275_sw / 4, r270_CAP * 0.5 + 0.1))));
            r270_xn$createAndSaveGlyphImpl$2Lrc3c('pilcrow.high', null, function () {
                var _r280_t1;
                var _r280_t0 = this;
                _r280_t0.include(r275_currentGlyph, true, true);
                _r280_t0.cloneRankFromGlyph(r275_currentGlyph);
                return _r280_t0.include(function () {
                    var _r282_t1;
                    var _r282_t0 = this;
                    var r282_currentGlyph = _r282_t0;
                    r282_currentGlyph.include(r270_VBar.m(r270_Middle + r275_sw / 4, 0, r270_CAP, r275_sw));
                    r282_currentGlyph.include(r270_VBar.m(r270_RightSB - r275_sw / 2, 0, r270_CAP, r275_sw));
                    return void 0;
                });
            });
            r270_xn$createAndSaveGlyphImpl$2Lrc3c('pilcrow.low', null, function () {
                var _r287_t1;
                var _r287_t0 = this;
                _r287_t0.include(r275_currentGlyph, true, true);
                _r287_t0.cloneRankFromGlyph(r275_currentGlyph);
                return _r287_t0.include(function () {
                    var _r289_t1;
                    var _r289_t0 = this;
                    var r289_currentGlyph = _r289_t0;
                    r289_currentGlyph.include(r270_VBar.m(r270_Middle + r275_sw / 4, r270_Descender, r270_CAP, r275_sw));
                    r289_currentGlyph.include(r270_VBar.m(r270_RightSB - r275_sw / 2, r270_Descender, r270_CAP, r275_sw));
                    return void 0;
                });
            });
            return void 0;
        });
        r270_xn$selectvariant$7Hrq('pilcrow', 182);
        r270_xn$createAndSaveGlyphImpl$2Lrc3c('.WF.font-src/glyphs/symbol/punctuation/pilcrow.ptl.2', null, function () {
            var _r294_t1;
            var _r294_t0 = this;
            var r294_currentGlyph = _r294_t0;
            r270_xn$createAndSaveGlyphImpl$2Lrc3c('revPilcrow.high', null, function () {
                var _r297_t1;
                var _r297_t0 = this;
                _r297_t0.include(r294_currentGlyph, true, true);
                _r297_t0.cloneRankFromGlyph(r294_currentGlyph);
                return _r297_t0.include(function () {
                    var _r299_t1;
                    var _r299_t0 = this;
                    var r299_currentGlyph = _r299_t0;
                    r299_currentGlyph.include(r270_xn$referglyph$1aao('pilcrow.high'), r270_AS_BASE);
                    r299_currentGlyph.include(r270_FlipAround(r270_Middle, r270_CAP / 2, -1, 1));
                    return void 0;
                });
            });
            r270_xn$createAndSaveGlyphImpl$2Lrc3c('revPilcrow.low', null, function () {
                var _r304_t1;
                var _r304_t0 = this;
                _r304_t0.include(r294_currentGlyph, true, true);
                _r304_t0.cloneRankFromGlyph(r294_currentGlyph);
                return _r304_t0.include(function () {
                    var _r306_t1;
                    var _r306_t0 = this;
                    var r306_currentGlyph = _r306_t0;
                    r306_currentGlyph.include(r270_xn$referglyph$1aao('pilcrow.low'), r270_AS_BASE);
                    r306_currentGlyph.include(r270_FlipAround(r270_Middle, r270_CAP / 2, -1, 1));
                    return void 0;
                });
            });
            return void 0;
        });
        r270_xn$selectvariant$7Hrq('revPilcrow', 8267);
        r270_xn$createAndSaveGlyphImpl$2Lrc3c('leftBullet', 8268, function () {
            var _r311_t1;
            var _r311_t0 = this;
            var r311_currentGlyph = _r311_t0;
            r311_currentGlyph.setWidth(r270_Width);
            var r311_sw = r270_AdviceStroke(3.6);
            r311_currentGlyph.include(r270_union(r270_dispiro(r270_widths.center(r311_sw), r270_flat(r270_RightSB - r311_sw / 4, r270_PlusTop - r311_sw / 2, r270_heading(r270_Leftward)), r270_curl(r270_Middle - r311_sw / 4, r270_PlusTop - r311_sw / 2, r270_heading(r270_Leftward)), r270_archv(), r270_g4.down.mid(r270_SB + r311_sw / 2, r270_SymbolMid, r270_heading(r270_Downward)), r270_arcvh(), r270_flat(r270_Middle - r311_sw / 4, r270_PlusBot + r311_sw / 2, r270_heading(r270_Rightward)), r270_curl(r270_RightSB - r311_sw / 4, r270_PlusBot + r311_sw / 2, r270_heading(r270_Rightward))), r270_xn$spirooutline$1aao(r270_straight.left.start(r270_Middle - r311_sw / 4, r270_PlusTop - r311_sw / 2 - 0.1, r270_heading(r270_Leftward)), r270_archv(), r270_g4.down.mid(r270_SB + r311_sw / 2 + 0.1, r270_SymbolMid, r270_heading(r270_Downward)), r270_arcvh(), r270_straight.right.end(r270_Middle - r311_sw / 4, r270_PlusBot + r311_sw / 2 + 0.1, r270_heading(r270_Rightward)))));
            r311_currentGlyph.include(r270_VBar.m(r270_Middle + r311_sw / 4, r270_PlusBot, r270_PlusTop, r311_sw));
            r311_currentGlyph.include(r270_VBar.m(r270_RightSB - r311_sw / 2, r270_PlusBot, r270_PlusTop, r311_sw));
            return void 0;
        });
        return r270_xn$createAndSaveGlyphImpl$2Lrc3c('rightBullet', 8269, function () {
            var _r318_t1;
            var _r318_t0 = this;
            var r318_currentGlyph = _r318_t0;
            r318_currentGlyph.include(r270_xn$referglyph$1aao('leftBullet'), r270_AS_BASE);
            r318_currentGlyph.include(r270_FlipAround(r270_Middle, r270_SymbolMid, -1, 1));
            return void 0;
        });
    });
    return void 0;
});
