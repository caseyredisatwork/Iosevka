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
var r1_Dotless = _r1_t9.Dotless;
var r1_CvDecompose = _r1_t9.CvDecompose;
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
    r270_xn$Capture_Ext$2Lrc2b['$defineGlyphBlockImpl$'](r270_xn$Capture_Ext$2Lrc2b, 'Letter-Latin-Egyptological', function (r271_xn$Capture$2Lrc8, r271_xn$ExportCapture$2Lrc4b) {
        var _r271_t9, _r271_t10;
        var _r271_t0 = r271_xn$Capture$2Lrc8;
        var r271_xn$createAndSaveGlyphImpl$2Lrc3c = _r271_t0['$createAndSaveGlyphImpl$'];
        var r271_xn$NamedParameterPair$2Lrc9b = _r271_t0['$NamedParameterPair$'];
        var r271_xn$assignUnicodeImpl$2Lrc8b = _r271_t0['$assignUnicodeImpl$'];
        var r271_xn$execState$2Lrc0b = _r271_t0['$execState$'];
        var r271_MarkSet = _r271_t0.MarkSet;
        var _r271_t1 = r271_xn$Capture$2Lrc8.Metrics;
        var r271_CAP = _r271_t1.CAP;
        var r271_XH = _r271_t1.XH;
        var r271_Downward = _r271_t1.Downward;
        var r271_Rightward = _r271_t1.Rightward;
        var r271_Leftward = _r271_t1.Leftward;
        var r271_O = _r271_t1.O;
        var r271_Middle = _r271_t1.Middle;
        var r271_AdviceStroke = _r271_t1.AdviceStroke;
        var r271_AdviceStroke2 = _r271_t1.AdviceStroke2;
        var _r271_t2 = r271_xn$Capture$2Lrc8.SpiroFns;
        var r271_g4 = _r271_t2.g4;
        var r271_end = _r271_t2.end;
        var r271_widths = _r271_t2.widths;
        var r271_heading = _r271_t2.heading;
        var r271_archv = _r271_t2.archv;
        var r271_arcvh = _r271_t2.arcvh;
        var r271_dispiro = _r271_t2.dispiro;
        var _r271_t3 = r271_xn$Capture$2Lrc8.BooleFns;
        var _r271_t4 = r271_xn$Capture$2Lrc8.CommonShapes.resolve();
        var _r271_t5 = r271_xn$Capture$2Lrc8['Common-Derivatives'].resolve();
        var r271_xn$referglyph$1aao = _r271_t5['refer-glyph'];
        var _r271_t6 = r271_xn$Capture$2Lrc8['Letter-Shared'].resolve();
        var r271_CreateAccentedComposition = _r271_t6.CreateAccentedComposition;
        var r271_EgyptologicalYodComponent = function (r275_sw, r275_x, r275_bot, r275_top) {
            var _r275_t0, _r275_t1;
            return function () {
                var _r277_t1;
                var _r277_t0 = this;
                var r277_currentGlyph = _r277_t0;
                var r277_rad = (r275_top - r275_bot) / 2;
                var r277_wid = r277_rad * 1.2;
                var r277_balance = r277_wid * 0.55;
                r277_currentGlyph.include(r271_dispiro(r271_widths.rhs(r275_sw), r271_g4.right.start(r275_x - r277_balance, r275_top - r271_O, r271_heading(r271_Rightward)), r271_archv(), r271_g4.down.mid(r275_x + r277_wid - r277_balance, r1_mix(r275_bot, r275_top, 0.5), r271_heading(r271_Downward)), r271_arcvh(), r271_g4.left.end(r275_x - r277_balance, r275_bot + r271_O, r271_heading(r271_Leftward))));
                return void 0;
            };
        };
        var r271_EgyptologicalAyinComponent = function (r279_sw, r279_x, r279_bot, r279_top) {
            var _r279_t0, _r279_t1;
            return function () {
                var _r281_t1;
                var _r281_t0 = this;
                var r281_currentGlyph = _r281_t0;
                var r281_rad = (r279_top - r279_bot) / 2;
                var r281_wid = r281_rad * 1.2;
                var r281_balance = r281_wid * 0.55;
                r281_currentGlyph.include(r271_dispiro(r271_widths.lhs(r279_sw), r271_g4.left.start(r279_x + r281_balance, r279_top - r271_O, r271_heading(r271_Leftward)), r271_archv(), r271_g4.down.mid(r279_x - r281_wid + r281_balance, r1_mix(r279_bot, r279_top, 0.5), r271_heading(r271_Downward)), r271_arcvh(), r271_g4.right.end(r279_x + r281_balance, r279_bot + r271_O, r271_heading(r271_Rightward))));
                return void 0;
            };
        };
        var r271_EgyptologicalAlefShape = function (r283_bot, r283_top) {
            var _r283_t0, _r283_t1;
            return function () {
                var _r285_t1;
                var _r285_t0 = this;
                var r285_currentGlyph = _r285_t0;
                var r285_sw = r271_AdviceStroke2(4, 4, r283_top);
                var r285_gap = Math.max(r285_sw / 2, r283_top / 12);
                var r285_rad = (r283_top - r285_gap) / 4;
                r285_currentGlyph.include(r271_EgyptologicalYodComponent(r285_sw, r271_Middle, r283_top - r285_rad * 2, r283_top));
                r285_currentGlyph.include(r271_EgyptologicalYodComponent(r285_sw, r271_Middle, r283_bot, r283_bot + r285_rad * 2));
                return void 0;
            };
        };
        var r271_EgyptologicalAyinShape = function (r288_bot, r288_top) {
            var _r288_t0, _r288_t1;
            return function () {
                var _r290_t1;
                var _r290_t0 = this;
                var r290_currentGlyph = _r290_t0;
                var r290_sw = r271_AdviceStroke2(4, 4, r288_top);
                var r290_gap = Math.max(r290_sw / 2, r288_top / 12);
                var r290_rad = (r288_top + r290_gap) / 4;
                r290_currentGlyph.include(r271_EgyptologicalAyinComponent(r290_sw, r271_Middle, r288_top - r290_rad * 2, r288_top));
                return void 0;
            };
        };
        r271_xn$createAndSaveGlyphImpl$2Lrc3c('EgyptologicalCapitalAlef', 42786, function () {
            var _r294_t1;
            var _r294_t0 = this;
            var r294_currentGlyph = _r294_t0;
            r294_currentGlyph.include(r271_MarkSet.capital());
            r294_currentGlyph.include(r271_EgyptologicalAlefShape(0, r271_CAP));
            return void 0;
        });
        r271_xn$createAndSaveGlyphImpl$2Lrc3c('EgyptologicalSmallAlef', 42787, function () {
            var _r299_t1;
            var _r299_t0 = this;
            var r299_currentGlyph = _r299_t0;
            r299_currentGlyph.include(r271_MarkSet.e());
            r299_currentGlyph.include(r271_EgyptologicalAlefShape(0, r271_XH));
            return void 0;
        });
        r271_xn$createAndSaveGlyphImpl$2Lrc3c('EgyptologicalCapitalAyin', 42788, function () {
            var _r304_t1;
            var _r304_t0 = this;
            var r304_currentGlyph = _r304_t0;
            r304_currentGlyph.include(r271_MarkSet.capital());
            r304_currentGlyph.include(r271_EgyptologicalAyinShape(0, r271_CAP));
            return void 0;
        });
        r271_xn$createAndSaveGlyphImpl$2Lrc3c('EgyptologicalSmallAyin', 42789, function () {
            var _r309_t1;
            var _r309_t0 = this;
            var r309_currentGlyph = _r309_t0;
            r309_currentGlyph.include(r271_MarkSet.e());
            r309_currentGlyph.include(r271_EgyptologicalAyinShape(0, r271_XH));
            return void 0;
        });
        var _r271_t7 = r271_xn$Capture$2Lrc8['Mark-Shared-Metrics'].resolve();
        var r271_markMiddle = _r271_t7.markMiddle;
        var _r271_t8 = r271_xn$Capture$2Lrc8['Mark-Above'].resolve();
        var r271_aboveMarkTop = _r271_t8.aboveMarkTop;
        var r271_aboveMarkBot = _r271_t8.aboveMarkBot;
        var r271_aboveMarkMid = _r271_t8.aboveMarkMid;
        var r271_aboveMarkStack = _r271_t8.aboveMarkStack;
        r271_xn$createAndSaveGlyphImpl$2Lrc3c('EgyptologicalYodAbove', 57360, function () {
            var _r316_t1;
            var _r316_t0 = this;
            var r316_currentGlyph = _r316_t0;
            r316_currentGlyph.setWidth(0);
            r316_currentGlyph.setMarkAnchor('above', r271_markMiddle, r271_XH, r271_markMiddle, r271_aboveMarkStack);
            r316_currentGlyph.setBaseAnchor('aboveBraceL', r271_markMiddle, r271_aboveMarkMid);
            r316_currentGlyph.setBaseAnchor('aboveBraceR', r271_markMiddle, r271_aboveMarkMid);
            var r316_fine = r271_AdviceStroke(5);
            r316_currentGlyph.include(r271_EgyptologicalYodComponent(r316_fine, r271_markMiddle, r271_aboveMarkBot, r271_aboveMarkTop));
            return void 0;
        });
        r271_xn$createAndSaveGlyphImpl$2Lrc3c('EgyptologicalYodTonos', null, function () {
            var _r324_t1;
            var _r324_t0 = this;
            var r324_currentGlyph = _r324_t0;
            r324_currentGlyph.setWidth(0);
            r324_currentGlyph.include(r271_xn$referglyph$1aao('EgyptologicalYodAbove'));
            r324_currentGlyph.setMarkAnchor('grekUpperTonos', r271_markMiddle, r271_XH);
            r324_currentGlyph.setBaseAnchor('aboveBraceL', r271_markMiddle, r271_aboveMarkMid);
            r324_currentGlyph.setBaseAnchor('aboveBraceR', r271_markMiddle, r271_aboveMarkMid);
            return void 0;
        });
        r271_CreateAccentedComposition('AGlottal', 42938, 'grek/Alpha', 'EgyptologicalYodTonos');
        r271_CreateAccentedComposition('IGlottal', 42940, 'grek/Iota', 'EgyptologicalYodTonos');
        return r271_CreateAccentedComposition('UGlottal', 42942, 'U/withTonos', 'EgyptologicalYodTonos');
    });
    return void 0;
});
