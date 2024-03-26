'use strict';
import * as _s0_t0 from '../../../support/utils.mjs';
import * as _s0_t1 from '../../../support/gr.mjs';
var _s0_t2;
export {
    _s0_t2 as apply
};
var r1_apply, _r1_t0, _r1_t1, _r1_t2, _r1_t3, _r1_t4, _r1_t5, _r1_t6, _r1_t7;
var _r1_t8 = _s0_t0;
var r1_mix = _r1_t8.mix;
var r1_linreg = _r1_t8.linreg;
var r1_clamp = _r1_t8.clamp;
var r1_fallback = _r1_t8.fallback;
var _r1_t9 = _s0_t1;
var r1_DependentSelector = _r1_t9.DependentSelector;
var r1_xn$GlyphBlocks$2Lrc2b = [];
_s0_t2 = r1_apply = function () {
    var r266_block, _r266_t4, _r266_t6;
    var _r266_t3 = this;
    var _r266_t0 = r1_xn$GlyphBlocks$2Lrc2b;
    var _r266_t1 = _r266_t0.length;
    var _r266_t2 = 0;
    var _r266_t5 = _r266_t2 < _r266_t1;
    while (_r266_t5) {
        _r266_t6 = (r266_block = _r266_t0[_r266_t2], r266_block(_r266_t3), _r266_t2 = _r266_t2 + 1);
        _r266_t5 = _r266_t2 < _r266_t1;
    }
    return _r266_t6;
};
r1_xn$GlyphBlocks$2Lrc2b.push(function (r270_xn$Capture_Ext$2Lrc2b) {
    var _r270_t0, _r270_t1;
    r270_xn$Capture_Ext$2Lrc2b['$defineGlyphBlockImpl$'](r270_xn$Capture_Ext$2Lrc2b, 'Symbol-Punctuation-Quotes-And-Primes', function (r271_xn$Capture$2Lrc8, r271_xn$ExportCapture$2Lrc4b) {
        var _r271_t7, _r271_t8;
        var _r271_t0 = r271_xn$Capture$2Lrc8;
        var r271_xn$createAndSaveGlyphImpl$2Lrc3c = _r271_t0['$createAndSaveGlyphImpl$'];
        var r271_xn$NamedParameterPair$2Lrc9b = _r271_t0['$NamedParameterPair$'];
        var r271_xn$assignUnicodeImpl$2Lrc8b = _r271_t0['$assignUnicodeImpl$'];
        var r271_xn$execState$2Lrc0b = _r271_t0['$execState$'];
        var r271_para = _r271_t0.para;
        var r271_DivFrame = _r271_t0.DivFrame;
        var _r271_t1 = r271_xn$Capture$2Lrc8.Metrics;
        var r271_Width = _r271_t1.Width;
        var r271_SB = _r271_t1.SB;
        var r271_CAP = _r271_t1.CAP;
        var r271_XH = _r271_t1.XH;
        var r271_Ascender = _r271_t1.Ascender;
        var r271_Descender = _r271_t1.Descender;
        var r271_Translate = _r271_t1.Translate;
        var r271_ApparentTranslate = _r271_t1.ApparentTranslate;
        var r271_Downward = _r271_t1.Downward;
        var r271_Rightward = _r271_t1.Rightward;
        var r271_Leftward = _r271_t1.Leftward;
        var r271_O = _r271_t1.O;
        var r271_Stroke = _r271_t1.Stroke;
        var r271_PeriodSize = _r271_t1.PeriodSize;
        var r271_HalfStroke = _r271_t1.HalfStroke;
        var r271_RightSB = _r271_t1.RightSB;
        var r271_Middle = _r271_t1.Middle;
        var r271_AdviceStroke = _r271_t1.AdviceStroke;
        var _r271_t2 = r271_xn$Capture$2Lrc8.SpiroFns;
        var r271_g4 = _r271_t2.g4;
        var r271_flat = _r271_t2.flat;
        var r271_curl = _r271_t2.curl;
        var r271_end = _r271_t2.end;
        var r271_straight = _r271_t2.straight;
        var r271_widths = _r271_t2.widths;
        var r271_heading = _r271_t2.heading;
        var r271_archv = _r271_t2.archv;
        var r271_arcvh = _r271_t2.arcvh;
        var r271_dispiro = _r271_t2.dispiro;
        var _r271_t3 = r271_xn$Capture$2Lrc8.BooleFns;
        var _r271_t4 = r271_xn$Capture$2Lrc8.CommonShapes.resolve();
        var r271_FlipAround = _r271_t4.FlipAround;
        var _r271_t5 = r271_xn$Capture$2Lrc8['Common-Derivatives'].resolve();
        var r271_xn$selectvariant$7Hrq = _r271_t5['select-variant'];
        var r271_xn$referglyph$1aao = _r271_t5['refer-glyph'];
        var r271_alias = _r271_t5.alias;
        var r271_turned = _r271_t5.turned;
        var r271_xn$deriveglyphs$7Hrq = _r271_t5['derive-glyphs'];
        var r271_xn$derivecomposites$7Hrq = _r271_t5['derive-composites'];
        r271_xn$Capture$2Lrc8['Symbol-Punctuation-Small'].resolve();
        var _r271_t6 = r271_xn$Capture$2Lrc8['Letter-Shared'].resolve();
        var r271_CreateDependentComposite = _r271_t6.CreateDependentComposite;
        var r271_quoteTop = r271_CAP * 1.05;
        var r271_quoteBottom = r271_XH * 0.85;
        var r271_yCurlyQuotes = r1_mix(r271_quoteBottom, r271_quoteTop, 0.5);
        var r271_commaLow = r271_Descender * 0.9;
        var r271_ratio = Math.min(1, (r271_quoteTop - r271_quoteBottom) / (r271_PeriodSize - r271_commaLow));
        r271_xn$deriveglyphs$7Hrq('lowSingleQuote', 8218, 'comma', function (r276_src, r276_gr) {
            var _r276_t0, _r276_t1;
            return function () {
                var _r278_t1;
                var _r278_t0 = this;
                var r278_currentGlyph = _r278_t0;
                var r278_df = r271_DivFrame(r271_para.diversityF);
                r278_currentGlyph.setWidth(r278_df.width);
                r278_currentGlyph.include(r271_xn$referglyph$1aao(r276_src));
                r278_currentGlyph.include(r271_FlipAround(r278_df.middle, 0, r271_ratio, r271_ratio));
                return void 0;
            };
        });
        r271_xn$deriveglyphs$7Hrq('revLowSingleQuote', null, 'revComma', function (r282_src, r282_gr) {
            var _r282_t0, _r282_t1;
            return function () {
                var _r284_t1;
                var _r284_t0 = this;
                var r284_currentGlyph = _r284_t0;
                var r284_df = r271_DivFrame(r271_para.diversityF);
                r284_currentGlyph.setWidth(r284_df.width);
                r284_currentGlyph.include(r271_xn$referglyph$1aao(r282_src));
                r284_currentGlyph.include(r271_FlipAround(r284_df.middle, 0, r271_ratio, r271_ratio));
                return void 0;
            };
        });
        r271_xn$deriveglyphs$7Hrq('openSingleQuote', 8216, 'lowSingleQuote', function (r288_src, r288_gr) {
            var _r288_t0, _r288_t1;
            return function () {
                var _r290_t1;
                var _r290_t0 = this;
                var r290_currentGlyph = _r290_t0;
                var r290_df = r271_DivFrame(r271_para.diversityF);
                r290_currentGlyph.setWidth(r290_df.width);
                r290_currentGlyph.include(r271_xn$referglyph$1aao(r288_src));
                r290_currentGlyph.include(r271_FlipAround(r290_df.middle, r1_mix(r1_mix(r271_PeriodSize, r271_commaLow, 0.5), r271_yCurlyQuotes, 0.5)));
                return void 0;
            };
        });
        r271_xn$deriveglyphs$7Hrq('closeSingleQuote', 8217, 'openSingleQuote', function (r294_src, r294_gr) {
            var _r294_t0, _r294_t1;
            return function () {
                var _r296_t1;
                var _r296_t0 = this;
                var r296_currentGlyph = _r296_t0;
                var r296_df = r271_DivFrame(r271_para.diversityF);
                r296_currentGlyph.setWidth(r296_df.width);
                r296_currentGlyph.include(r271_xn$referglyph$1aao(r294_src));
                r296_currentGlyph.include(r271_FlipAround(r296_df.middle, r271_yCurlyQuotes));
                return void 0;
            };
        });
        r271_xn$deriveglyphs$7Hrq('revSingleQuote', 8219, 'revComma', function (r300_src, r300_gr) {
            var _r300_t0, _r300_t1;
            return function () {
                var _r302_t1;
                var _r302_t0 = this;
                var r302_currentGlyph = _r302_t0;
                var r302_df = r271_DivFrame(r271_para.diversityF);
                r302_currentGlyph.setWidth(r302_df.width);
                r302_currentGlyph.include(r271_xn$referglyph$1aao(r300_src));
                r302_currentGlyph.include(r271_FlipAround(r302_df.middle, 0, r271_ratio, r271_ratio));
                r302_currentGlyph.include(r271_FlipAround(r302_df.middle, r1_mix(r1_mix(r271_PeriodSize, r271_commaLow, 0.5), r271_yCurlyQuotes, 0.5)));
                r302_currentGlyph.include(r271_FlipAround(r302_df.middle, r271_yCurlyQuotes));
                return void 0;
            };
        });
        var r271_DoubleQuoteProc = function (r308_gn) {
            var _r308_t0, _r308_t1;
            return function () {
                var _r310_t1;
                var _r310_t0 = this;
                var r310_currentGlyph = _r310_t0;
                var r310_dfSingle = r271_DivFrame(r271_para.diversityF);
                var r310_dist = r271_Width * 0.225;
                r310_currentGlyph.include(r271_xn$referglyph$1aao(r308_gn));
                r310_currentGlyph.include(r271_Translate(-r310_dist * 2, 0));
                r310_currentGlyph.include(r271_xn$referglyph$1aao(r308_gn));
                r310_currentGlyph.include(r271_Translate(r310_dist + r271_Middle - r310_dfSingle.middle, 0));
                return void 0;
            };
        };
        r271_xn$deriveglyphs$7Hrq('lowDoubleQuote', 8222, 'lowSingleQuote', r271_DoubleQuoteProc);
        r271_xn$deriveglyphs$7Hrq('openDoubleQuote', 8220, 'openSingleQuote', r271_DoubleQuoteProc);
        r271_xn$deriveglyphs$7Hrq('closeDoubleQuote', 8221, 'closeSingleQuote', r271_DoubleQuoteProc);
        r271_xn$deriveglyphs$7Hrq('revDoubleQuote', 8223, 'revSingleQuote', r271_DoubleQuoteProc);
        r271_xn$deriveglyphs$7Hrq('revLowDoubleQuote', 11842, 'revLowSingleQuote', r271_DoubleQuoteProc);
        r271_alias('mdfTurncomma', 699, 'openSingleQuote');
        r271_alias('mdfApostrophe', 700, 'closeSingleQuote');
        r271_alias('mdfRevComma', 701, 'revSingleQuote');
        r271_alias('mdfDoubleApostrophe', 750, 'closeDoubleQuote');
        r271_xn$createAndSaveGlyphImpl$2Lrc3c('prime', 8242, function () {
            var _r317_t1;
            var _r317_t0 = this;
            var r317_currentGlyph = _r317_t0;
            var r317_df = r271_DivFrame(r271_para.diversityF);
            r317_currentGlyph.setWidth(r317_df.width);
            var r317_wide = r271_Width * 0.1;
            r317_currentGlyph.include(r271_dispiro(r271_widths.center(r271_Stroke * 1.2), r271_flat(r317_df.middle + r317_wide, r271_quoteTop, r271_heading(r271_Downward)), r271_curl(r317_df.middle - r317_wide, r271_quoteBottom, r271_widths.heading(r271_HalfStroke, r271_HalfStroke, r271_Downward))));
            return void 0;
        });
        r271_xn$createAndSaveGlyphImpl$2Lrc3c('doubleprime', 8243, function () {
            var _r322_t1;
            var _r322_t0 = this;
            var r322_currentGlyph = _r322_t0;
            var r322_dfSingle = r271_DivFrame(r271_para.diversityF);
            var r322_d = 0.25 * (r271_RightSB - r271_SB);
            r322_currentGlyph.include(r271_xn$referglyph$1aao('prime'));
            r322_currentGlyph.include(r271_Translate(-r322_d * 2, 0));
            r322_currentGlyph.include(r271_xn$referglyph$1aao('prime'));
            r322_currentGlyph.include(r271_Translate(r322_d + r271_Middle - r322_dfSingle.middle, 0));
            return void 0;
        });
        r271_xn$createAndSaveGlyphImpl$2Lrc3c('tripleprime', 8244, function () {
            var _r329_t1;
            var _r329_t0 = this;
            var r329_currentGlyph = _r329_t0;
            var r329_df = r271_DivFrame(r271_para.diversityM);
            r329_currentGlyph.setWidth(r329_df.width);
            var r329_wide = r271_Width * 0.1;
            var r329_d = r329_df.width * 0.3;
            var r329_fine = 0.5 * r271_AdviceStroke(3.5);
            r329_currentGlyph.include(r271_dispiro(r271_widths.center(r329_fine * 2 * 1.2), r271_flat(r329_df.middle + r329_wide, r271_quoteTop, r271_heading(r271_Downward)), r271_curl(r329_df.middle - r329_wide, r271_quoteBottom, r271_widths.heading(r329_fine, r329_fine, r271_Downward))));
            r329_currentGlyph.include(r271_dispiro(r271_widths.center(r329_fine * 2 * 1.2), r271_flat(r329_df.middle - r329_d + r329_wide, r271_quoteTop, r271_heading(r271_Downward)), r271_curl(r329_df.middle - r329_d - r329_wide, r271_quoteBottom, r271_widths.heading(r329_fine, r329_fine, r271_Downward))));
            r329_currentGlyph.include(r271_dispiro(r271_widths.center(r329_fine * 2 * 1.2), r271_flat(r329_df.middle + r329_d + r329_wide, r271_quoteTop, r271_heading(r271_Downward)), r271_curl(r329_df.middle + r329_d - r329_wide, r271_quoteBottom, r271_widths.heading(r329_fine, r329_fine, r271_Downward))));
            return void 0;
        });
        r271_xn$createAndSaveGlyphImpl$2Lrc3c('quadPrime', 8279, function () {
            var _r336_t1;
            var _r336_t0 = this;
            var r336_currentGlyph = _r336_t0;
            var r336_df = r271_DivFrame(r271_para.diversityM);
            r336_currentGlyph.setWidth(r336_df.width);
            var r336_wide = r271_Width * 0.1;
            var r336_fine = 0.5 * r271_AdviceStroke(4);
            var r336_d = r336_df.width * 0.15 - r336_fine / 6;
            r336_currentGlyph.include(r271_dispiro(r271_widths.center(r336_fine * 2 * 1.2), r271_flat(r336_df.middle - r336_d + r336_wide, r271_quoteTop, r271_heading(r271_Downward)), r271_curl(r336_df.middle - r336_d - r336_wide, r271_quoteBottom, r271_widths.heading(r336_fine, r336_fine, r271_Downward))));
            r336_currentGlyph.include(r271_dispiro(r271_widths.center(r336_fine * 2 * 1.2), r271_flat(r336_df.middle + r336_d + r336_wide, r271_quoteTop, r271_heading(r271_Downward)), r271_curl(r336_df.middle + r336_d - r336_wide, r271_quoteBottom, r271_widths.heading(r336_fine, r336_fine, r271_Downward))));
            r336_currentGlyph.include(r271_dispiro(r271_widths.center(r336_fine * 2 * 1.2), r271_flat(r336_df.middle - 3 * r336_d + r336_wide, r271_quoteTop, r271_heading(r271_Downward)), r271_curl(r336_df.middle - 3 * r336_d - r336_wide, r271_quoteBottom, r271_widths.heading(r336_fine, r336_fine, r271_Downward))));
            r336_currentGlyph.include(r271_dispiro(r271_widths.center(r336_fine * 2 * 1.2), r271_flat(r336_df.middle + 3 * r336_d + r336_wide, r271_quoteTop, r271_heading(r271_Downward)), r271_curl(r336_df.middle + 3 * r336_d - r336_wide, r271_quoteBottom, r271_widths.heading(r336_fine, r336_fine, r271_Downward))));
            return void 0;
        });
        r271_xn$createAndSaveGlyphImpl$2Lrc3c('revprime', 8245, function () {
            var _r344_t1;
            var _r344_t0 = this;
            var r344_currentGlyph = _r344_t0;
            var r344_df = r271_DivFrame(r271_para.diversityF);
            r344_currentGlyph.setWidth(r344_df.width);
            var r344_wide = -r271_Width * 0.1;
            r344_currentGlyph.include(r271_dispiro(r271_widths.center(r271_Stroke * 1.2), r271_flat(r344_df.middle + r344_wide, r271_quoteTop, r271_heading(r271_Downward)), r271_curl(r344_df.middle - r344_wide, r271_quoteBottom, r271_widths.heading(r271_HalfStroke, r271_HalfStroke, r271_Downward))));
            return void 0;
        });
        r271_xn$createAndSaveGlyphImpl$2Lrc3c('revdoubleprime', 8246, function () {
            var _r349_t1;
            var _r349_t0 = this;
            var r349_currentGlyph = _r349_t0;
            var r349_dfSingle = r271_DivFrame(r271_para.diversityF);
            var r349_d = 0.25 * (r271_RightSB - r271_SB);
            r349_currentGlyph.include(r271_xn$referglyph$1aao('revprime'));
            r349_currentGlyph.include(r271_Translate(-r349_d * 2, 0));
            r349_currentGlyph.include(r271_xn$referglyph$1aao('revprime'));
            r349_currentGlyph.include(r271_Translate(r349_d + r271_Middle - r349_dfSingle.middle, 0));
            return void 0;
        });
        r271_xn$createAndSaveGlyphImpl$2Lrc3c('revtripleprime', 8247, function () {
            var _r356_t1;
            var _r356_t0 = this;
            var r356_currentGlyph = _r356_t0;
            var r356_df = r271_DivFrame(r271_para.diversityM);
            r356_currentGlyph.setWidth(r356_df.width);
            var r356_wide = -r271_Width * 0.1;
            var r356_d = r356_df.width * 0.3;
            var r356_fine = 0.5 * r271_AdviceStroke(3.5);
            r356_currentGlyph.include(r271_dispiro(r271_widths.center(r356_fine * 2 * 1.2), r271_flat(r356_df.middle + r356_wide, r271_quoteTop, r271_heading(r271_Downward)), r271_curl(r356_df.middle - r356_wide, r271_quoteBottom, r271_widths.heading(r356_fine, r356_fine, r271_Downward))));
            r356_currentGlyph.include(r271_dispiro(r271_widths.center(r356_fine * 2 * 1.2), r271_flat(r356_df.middle - r356_d + r356_wide, r271_quoteTop, r271_heading(r271_Downward)), r271_curl(r356_df.middle - r356_d - r356_wide, r271_quoteBottom, r271_widths.heading(r356_fine, r356_fine, r271_Downward))));
            r356_currentGlyph.include(r271_dispiro(r271_widths.center(r356_fine * 2 * 1.2), r271_flat(r356_df.middle + r356_d + r356_wide, r271_quoteTop, r271_heading(r271_Downward)), r271_curl(r356_df.middle + r356_d - r356_wide, r271_quoteBottom, r271_widths.heading(r356_fine, r356_fine, r271_Downward))));
            return void 0;
        });
        r271_alias('mdfPrime', 697, 'prime');
        r271_alias('grek/numberSign', 884, 'prime');
        r271_alias('mdfDoublePrime', 698, 'doubleprime');
        r271_xn$derivecomposites$7Hrq('grek/lowNumberSign', 885, 'prime', r271_ApparentTranslate(0, r1_mix(r1_mix(r1_mix(r271_PeriodSize, r271_commaLow, 0.5), r271_yCurlyQuotes, 0.5), r271_quoteBottom, -1) - r271_quoteTop));
        var r271_StraightQuoteShape = function (r361_df, r361_t, r361_b) {
            var _r361_t0, _r361_t1;
            return r271_dispiro(r271_widths.center(r271_Stroke * 1.1), r271_g4.down.start(r361_df.middle, r361_t, r271_heading(r271_Downward)), r271_g4(r361_df.middle, r361_b, r271_widths.center.heading(r271_Stroke * 0.95, r271_Downward)));
        };
        r271_xn$createAndSaveGlyphImpl$2Lrc3c('asciiSingleQuote/body/straight', null, function () {
            var _r364_t1;
            var _r364_t0 = this;
            var r364_currentGlyph = _r364_t0;
            var r364_df = r271_DivFrame(r271_para.diversityF);
            r364_currentGlyph.setWidth(r364_df.width);
            r364_currentGlyph.include(r271_StraightQuoteShape(r364_df, r271_quoteTop, r271_quoteBottom));
            return void 0;
        });
        r271_xn$createAndSaveGlyphImpl$2Lrc3c('asciiSingleQuote/body/straight/HW', null, function () {
            var _r369_t1;
            var _r369_t0 = this;
            var r369_currentGlyph = _r369_t0;
            r369_currentGlyph.include(r271_StraightQuoteShape(r271_DivFrame(1), r271_quoteTop, r271_quoteBottom));
            return void 0;
        });
        r271_xn$createAndSaveGlyphImpl$2Lrc3c('Saltillo', 42891, function () {
            var _r373_t1;
            var _r373_t0 = this;
            var r373_currentGlyph = _r373_t0;
            var r373_df = r271_DivFrame(r271_para.diversityF);
            r373_currentGlyph.setWidth(r373_df.width);
            r373_currentGlyph.include(r373_df.markSet.capital());
            r373_currentGlyph.include(r271_StraightQuoteShape(r373_df, r271_CAP, 0.625 * r271_XH));
            return void 0;
        });
        r271_xn$createAndSaveGlyphImpl$2Lrc3c('saltillo', 42892, function () {
            var _r379_t1;
            var _r379_t0 = this;
            var r379_currentGlyph = _r379_t0;
            var r379_df = r271_DivFrame(r271_para.diversityF);
            r379_currentGlyph.setWidth(r379_df.width);
            r379_currentGlyph.include(r379_df.markSet.b());
            r379_currentGlyph.include(r271_StraightQuoteShape(r379_df, r271_Ascender, r271_XH));
            return void 0;
        });
        r271_xn$createAndSaveGlyphImpl$2Lrc3c('asciiGrave/selector.straight', null, function () {
            var _r385_t1;
            var _r385_t0 = this;
            var r385_currentGlyph = _r385_t0;
            var r385_df = r271_DivFrame(r271_para.diversityF);
            r385_currentGlyph.setWidth(r385_df.width);
            r1_DependentSelector.set(r385_currentGlyph, 'straight');
            return void 0;
        });
        r271_xn$createAndSaveGlyphImpl$2Lrc3c('asciiGrave/selector.raisedInverseComma', null, function () {
            var _r389_t1;
            var _r389_t0 = this;
            var r389_currentGlyph = _r389_t0;
            var r389_df = r271_DivFrame(r271_para.diversityF);
            r389_currentGlyph.setWidth(r389_df.width);
            r1_DependentSelector.set(r389_currentGlyph, 'raisedInverseComma');
            return void 0;
        });
        r271_xn$createAndSaveGlyphImpl$2Lrc3c('asciiGrave/selector.raisedTurnComma', null, function () {
            var _r393_t1;
            var _r393_t0 = this;
            var r393_currentGlyph = _r393_t0;
            var r393_df = r271_DivFrame(r271_para.diversityF);
            r393_currentGlyph.setWidth(r393_df.width);
            r1_DependentSelector.set(r393_currentGlyph, 'raisedTurnComma');
            return void 0;
        });
        r271_xn$createAndSaveGlyphImpl$2Lrc3c('asciiSingleQuote/selector.straight', null, function () {
            var _r397_t1;
            var _r397_t0 = this;
            var r397_currentGlyph = _r397_t0;
            var r397_df = r271_DivFrame(r271_para.diversityF);
            r397_currentGlyph.setWidth(r397_df.width);
            r1_DependentSelector.set(r397_currentGlyph, 'straight');
            return void 0;
        });
        r271_xn$createAndSaveGlyphImpl$2Lrc3c('asciiSingleQuote/selector.raisedComma', null, function () {
            var _r401_t1;
            var _r401_t0 = this;
            var r401_currentGlyph = _r401_t0;
            var r401_df = r271_DivFrame(r271_para.diversityF);
            r401_currentGlyph.setWidth(r401_df.width);
            r1_DependentSelector.set(r401_currentGlyph, 'raisedComma');
            return void 0;
        });
        r271_xn$selectvariant$7Hrq('asciiSingleQuote/selector', new r271_xn$NamedParameterPair$2Lrc9b('follow', 'asciiSingleQuote'));
        r271_xn$selectvariant$7Hrq('asciiGrave/selector', new r271_xn$NamedParameterPair$2Lrc9b('follow', 'asciiGrave'));
        r271_CreateDependentComposite('asciiGrave', 96, 'asciiGrave/selector', {
            'straight': 'asciiGrave/body/straight',
            'raisedInverseComma': 'revSingleQuote',
            'raisedTurnComma': 'openSingleQuote'
        });
        r271_CreateDependentComposite('asciiSingleQuote', 39, 'asciiSingleQuote/selector', {
            'straight': 'asciiSingleQuote/body/straight',
            'raisedComma': 'closeSingleQuote'
        });
        r271_alias('mdfStress', 712, 'asciiSingleQuote/body/straight');
        r271_turned('mdfSecondaryStress', 716, 'asciiSingleQuote/body/straight', r271_Middle, r271_XH / 2);
        r271_xn$createAndSaveGlyphImpl$2Lrc3c('asciiDoubleQuote', 34, function () {
            var _r407_t1;
            var _r407_t0 = this;
            var r407_currentGlyph = _r407_t0;
            var r407_dfSingle = r271_DivFrame(r271_para.diversityF);
            var r407_dist = 0.2 * r271_Width;
            r407_currentGlyph.include(r271_xn$referglyph$1aao('asciiSingleQuote/body/straight'));
            r407_currentGlyph.include(r271_Translate(-r407_dist * 2, 0));
            r407_currentGlyph.include(r271_xn$referglyph$1aao('asciiSingleQuote/body/straight'));
            r407_currentGlyph.include(r271_Translate(r407_dist + r271_Middle - r407_dfSingle.middle, 0));
            return void 0;
        });
        r271_xn$createAndSaveGlyphImpl$2Lrc3c('modifierLetterLeftHalfRing', 703, function () {
            var _r414_t1;
            var _r414_t0 = this;
            var r414_currentGlyph = _r414_t0;
            var r414_height = r271_quoteTop - r271_quoteBottom;
            r414_currentGlyph.include(r271_dispiro(r271_g4.left.start(r271_Middle + r414_height / 4, r271_quoteTop - r271_O, r271_widths.lhs.heading(r271_AdviceStroke(3), r271_Leftward)), r271_archv(), r271_g4.down.mid(r271_Middle - r414_height / 4 + r271_O, r1_mix(r271_quoteBottom, r271_quoteTop, 0.5), r271_widths.lhs.heading(r271_AdviceStroke(3.5), r271_Downward)), r271_arcvh(), r271_g4.right.end(r271_Middle + r414_height / 4, r271_quoteBottom + r271_O, r271_widths.lhs.heading(r271_AdviceStroke(3), r271_Rightward))));
            return void 0;
        });
        return r271_turned('modifierLetterRightHalfRing', 702, 'modifierLetterLeftHalfRing', r271_Middle, r1_mix(r271_quoteBottom, r271_quoteTop, 0.5));
    });
    return void 0;
});
