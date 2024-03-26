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
    r269_xn$Capture_Ext$2Lrc2b['$defineGlyphBlockImpl$'](r269_xn$Capture_Ext$2Lrc2b, 'Symbol-Math-Logicals', function (r270_xn$Capture$2Lrc8, r270_xn$ExportCapture$2Lrc4b) {
        var _r270_t6, _r270_t7;
        var _r270_t0 = r270_xn$Capture$2Lrc8;
        var r270_xn$createAndSaveGlyphImpl$2Lrc3c = _r270_t0['$createAndSaveGlyphImpl$'];
        var r270_xn$NamedParameterPair$2Lrc9b = _r270_t0['$NamedParameterPair$'];
        var r270_xn$assignUnicodeImpl$2Lrc8b = _r270_t0['$assignUnicodeImpl$'];
        var r270_xn$execState$2Lrc0b = _r270_t0['$execState$'];
        var _r270_t1 = r270_xn$Capture$2Lrc8.Metrics;
        var r270_DesignParameters = _r270_t1.DesignParameters;
        var r270_Width = _r270_t1.Width;
        var r270_SB = _r270_t1.SB;
        var r270_SymbolMid = _r270_t1.SymbolMid;
        var r270_TackTop = _r270_t1.TackTop;
        var r270_TackBot = _r270_t1.TackBot;
        var r270_HVContrast = _r270_t1.HVContrast;
        var r270_RightSB = _r270_t1.RightSB;
        var r270_Middle = _r270_t1.Middle;
        var r270_AdviceStroke = _r270_t1.AdviceStroke;
        var r270_OperatorStroke = _r270_t1.OperatorStroke;
        var _r270_t2 = r270_xn$Capture$2Lrc8.SpiroFns;
        var _r270_t3 = r270_xn$Capture$2Lrc8.BooleFns;
        var r270_difference = _r270_t3.difference;
        var _r270_t4 = r270_xn$Capture$2Lrc8.CommonShapes.resolve();
        var r270_Rect = _r270_t4.Rect;
        var r270_DotAt = _r270_t4.DotAt;
        var r270_OShape = _r270_t4.OShape;
        var r270_HBar = _r270_t4.HBar;
        var r270_VBar = _r270_t4.VBar;
        var _r270_t5 = r270_xn$Capture$2Lrc8['Common-Derivatives'].resolve();
        var r270_xn$referglyph$1aao = _r270_t5['refer-glyph'];
        var r270_turned = _r270_t5.turned;
        r270_xn$createAndSaveGlyphImpl$2Lrc3c('negate', 172, function () {
            var _r275_t1;
            var _r275_t0 = this;
            var r275_currentGlyph = _r275_t0;
            r275_currentGlyph.include(r270_xn$referglyph$1aao('minus'));
            r275_currentGlyph.include(r270_VBar.r(r270_RightSB, r270_SymbolMid - (r270_RightSB - r270_SB) * 0.55, r270_SymbolMid, r270_OperatorStroke));
            return void 0;
        });
        r270_xn$createAndSaveGlyphImpl$2Lrc3c('revNegate', 8976, function () {
            var _r280_t1;
            var _r280_t0 = this;
            var r280_currentGlyph = _r280_t0;
            r280_currentGlyph.include(r270_xn$referglyph$1aao('minus'));
            r280_currentGlyph.include(r270_VBar.l(r270_SB, r270_SymbolMid - (r270_RightSB - r270_SB) * 0.55, r270_SymbolMid, r270_OperatorStroke));
            return void 0;
        });
        r270_turned('turnedNegate', 8985, 'negate', r270_Middle, r270_SymbolMid);
        var r270_top = r270_TackTop;
        var r270_bot = r270_TackBot;
        r270_xn$createAndSaveGlyphImpl$2Lrc3c('stile', 8739, function () {
            var _r285_t1;
            var _r285_t0 = this;
            var r285_currentGlyph = _r285_t0;
            r285_currentGlyph.include(r270_VBar.m(r270_Middle, r270_bot, r270_top, r270_OperatorStroke));
            return void 0;
        });
        r270_xn$createAndSaveGlyphImpl$2Lrc3c('parallel', 8741, function () {
            var _r289_t1;
            var _r289_t0 = this;
            var r289_currentGlyph = _r289_t0;
            var r289_sw = r270_AdviceStroke(3.5);
            r289_currentGlyph.include(r270_VBar.m(r270_Middle - r270_Width * 0.175, r270_bot, r270_top, r289_sw));
            r289_currentGlyph.include(r270_VBar.m(r270_Middle + r270_Width * 0.175, r270_bot, r270_top, r289_sw));
            return void 0;
        });
        r270_xn$createAndSaveGlyphImpl$2Lrc3c('vdash', 8866, function () {
            var _r294_t1;
            var _r294_t0 = this;
            var r294_currentGlyph = _r294_t0;
            r294_currentGlyph.include(r270_HBar.m(r270_SB, r270_RightSB, r270_SymbolMid, r270_OperatorStroke));
            r294_currentGlyph.include(r270_VBar.l(r270_SB, r270_top, r270_bot, r270_OperatorStroke));
            return void 0;
        });
        r270_turned('dashv', 8867, 'vdash', r270_Middle, r270_SymbolMid);
        r270_xn$createAndSaveGlyphImpl$2Lrc3c('assert', 8870, function () {
            var _r299_t1;
            var _r299_t0 = this;
            var r299_currentGlyph = _r299_t0;
            var r299_l = r1_mix(r270_Middle, r270_SB, r270_DesignParameters.logic_narrow_shrink);
            var r299_r = r1_mix(r270_Middle, r270_RightSB, r270_DesignParameters.logic_narrow_shrink);
            r299_currentGlyph.include(r270_HBar.m(r299_l, r299_r, r270_SymbolMid, r270_OperatorStroke));
            r299_currentGlyph.include(r270_VBar.l(r299_l, r270_top, r270_bot, r270_OperatorStroke));
            return void 0;
        });
        r270_xn$createAndSaveGlyphImpl$2Lrc3c('models', 8871, function () {
            var _r304_t1;
            var _r304_t0 = this;
            var r304_currentGlyph = _r304_t0;
            var r304_l = r1_mix(r270_Middle, r270_SB, r270_DesignParameters.logic_narrow_shrink);
            var r304_r = r1_mix(r270_Middle, r270_RightSB, r270_DesignParameters.logic_narrow_shrink);
            r304_currentGlyph.include(r270_HBar.m(r304_l, r304_r, r1_mix(r270_SymbolMid, r270_top, 1 / 3), r270_OperatorStroke));
            r304_currentGlyph.include(r270_HBar.m(r304_l, r304_r, r1_mix(r270_SymbolMid, r270_bot, 1 / 3), r270_OperatorStroke));
            r304_currentGlyph.include(r270_VBar.l(r304_l, r270_top, r270_bot, r270_OperatorStroke));
            return void 0;
        });
        r270_xn$createAndSaveGlyphImpl$2Lrc3c('tautology', 8872, function () {
            var _r310_t1;
            var _r310_t0 = this;
            var r310_currentGlyph = _r310_t0;
            var r310_l = r1_mix(r270_Middle, r270_SB, 1);
            var r310_r = r1_mix(r270_Middle, r270_RightSB, 1);
            r310_currentGlyph.include(r270_HBar.m(r310_l, r310_r, r1_mix(r270_SymbolMid, r270_top, 1 / 3), r270_OperatorStroke));
            r310_currentGlyph.include(r270_HBar.m(r310_l, r310_r, r1_mix(r270_SymbolMid, r270_bot, 1 / 3), r270_OperatorStroke));
            r310_currentGlyph.include(r270_VBar.l(r310_l, r270_top, r270_bot, r270_OperatorStroke));
            return void 0;
        });
        r270_xn$createAndSaveGlyphImpl$2Lrc3c('forces', 8873, function () {
            var _r316_t1;
            var _r316_t0 = this;
            var r316_currentGlyph = _r316_t0;
            var r316_l = r1_mix(r270_Middle, r270_SB, 1);
            var r316_r = r1_mix(r270_Middle, r270_RightSB, 1);
            var r316_vs = r270_AdviceStroke(4);
            var r316_m = r1_mix(r316_l, r316_r - r316_vs, 3 / 5);
            r316_currentGlyph.include(r270_HBar.m(r316_m, r316_r, r270_SymbolMid, r270_OperatorStroke));
            r316_currentGlyph.include(r270_VBar.l(r316_l, r270_top, r270_bot, r316_vs));
            r316_currentGlyph.include(r270_VBar.m(r316_m, r270_top, r270_bot, r316_vs));
            return void 0;
        });
        r270_xn$createAndSaveGlyphImpl$2Lrc3c('tripleBarForces', 8874, function () {
            var _r322_t1;
            var _r322_t0 = this;
            var r322_currentGlyph = _r322_t0;
            var r322_l = r1_mix(r270_Middle, r270_SB, 1);
            var r322_r = r1_mix(r270_Middle, r270_RightSB, 1);
            var r322_vs = r270_AdviceStroke(5);
            var r322_m = r1_mix(r322_l, r322_r - r322_vs, 3 / 4);
            r322_currentGlyph.include(r270_HBar.m(r322_m, r322_r, r270_SymbolMid, r270_OperatorStroke));
            r322_currentGlyph.include(r270_VBar.l(r322_l, r270_top, r270_bot, r322_vs));
            r322_currentGlyph.include(r270_VBar.m(r322_m, r270_top, r270_bot, r322_vs));
            r322_currentGlyph.include(r270_VBar.m(r1_mix(r322_l, r322_m, 1 / 2) + r322_vs / 4 * r270_HVContrast, r270_top, r270_bot, r322_vs));
            return void 0;
        });
        r270_xn$createAndSaveGlyphImpl$2Lrc3c('doubleForces', 8875, function () {
            var _r329_t1;
            var _r329_t0 = this;
            var r329_currentGlyph = _r329_t0;
            var r329_l = r1_mix(r270_Middle, r270_SB, 1);
            var r329_r = r1_mix(r270_Middle, r270_RightSB, 1);
            var r329_vs = r270_AdviceStroke(4);
            var r329_m = r1_mix(r329_l, r329_r - r329_vs, 3 / 5);
            r329_currentGlyph.include(r270_HBar.m(r329_m, r329_r, r1_mix(r270_SymbolMid, r270_top, 1 / 3), r270_OperatorStroke));
            r329_currentGlyph.include(r270_HBar.m(r329_m, r329_r, r1_mix(r270_SymbolMid, r270_bot, 1 / 3), r270_OperatorStroke));
            r329_currentGlyph.include(r270_VBar.l(r329_l, r270_top, r270_bot, r329_vs));
            r329_currentGlyph.include(r270_VBar.m(r329_m, r270_top, r270_bot, r329_vs));
            return void 0;
        });
        r270_xn$createAndSaveGlyphImpl$2Lrc3c('top', 8868, function () {
            var _r336_t1;
            var _r336_t0 = this;
            var r336_currentGlyph = _r336_t0;
            r336_currentGlyph.include(r270_HBar.t(r270_SB, r270_RightSB, r270_top, r270_OperatorStroke));
            r336_currentGlyph.include(r270_VBar.m(r270_Middle, r270_top, r270_bot, r270_OperatorStroke));
            return void 0;
        });
        r270_xn$createAndSaveGlyphImpl$2Lrc3c('intercalate', 8890, function () {
            var _r341_t1;
            var _r341_t0 = this;
            var r341_currentGlyph = _r341_t0;
            var r341_l = r1_mix(r270_Middle, r270_SB, r270_DesignParameters.logic_narrow_shrink);
            var r341_r = r1_mix(r270_Middle, r270_RightSB, r270_DesignParameters.logic_narrow_shrink);
            r341_currentGlyph.include(r270_HBar.t(r341_l, r341_r, r270_top, r270_OperatorStroke));
            r341_currentGlyph.include(r270_VBar.m(r270_Middle, r270_top, r270_bot, r270_OperatorStroke));
            return void 0;
        });
        r270_xn$createAndSaveGlyphImpl$2Lrc3c('topring', 9045, function () {
            var _r346_t1;
            var _r346_t0 = this;
            var r346_currentGlyph = _r346_t0;
            var r346_mid = r1_mix(r270_bot, r270_top - r270_OperatorStroke / 2, 0.5);
            var r346_w = (r270_RightSB - r270_SB) * 0.4;
            var r346_fine = Math.min(r346_w / 2.5, r270_AdviceStroke(5));
            r346_currentGlyph.include(r270_HBar.t(r270_SB, r270_RightSB, r270_top, r270_OperatorStroke));
            r346_currentGlyph.include(r270_VBar.m(r270_Middle, r270_top, r346_mid + r346_w, r270_OperatorStroke));
            r346_currentGlyph.include(r270_VBar.m(r270_Middle, r346_mid - r346_w, r270_bot, r270_OperatorStroke));
            r346_currentGlyph.include(r270_VBar.m(r270_Middle, r346_mid + r346_w, r346_mid - r346_w, r346_fine));
            r346_currentGlyph.include(r270_OShape(r346_mid + r346_w, r346_mid - r346_w, r270_Middle - r346_w, r270_Middle + r346_w, r346_fine));
            return void 0;
        });
        r270_turned('bot', 8869, 'top', r270_Middle, r270_SymbolMid);
        r270_turned('botring', 9038, 'topring', r270_Middle, r270_SymbolMid);
        r270_xn$createAndSaveGlyphImpl$2Lrc3c('perpendicular', 10178, function () {
            var _r354_t1;
            var _r354_t0 = this;
            var r354_currentGlyph = _r354_t0;
            r354_currentGlyph.include(r270_HBar.b(r270_SB, r270_RightSB, 0, r270_OperatorStroke));
            r354_currentGlyph.include(r270_VBar.m(r270_Middle, r270_SymbolMid * 2, 0, r270_OperatorStroke));
            return void 0;
        });
        r270_xn$createAndSaveGlyphImpl$2Lrc3c('barRingAbove', 10991, function () {
            var _r359_t1;
            var _r359_t0 = this;
            var r359_currentGlyph = _r359_t0;
            var r359_sw = r270_AdviceStroke(4);
            var r359_radius = (r270_RightSB - r270_SB) / 6;
            r359_currentGlyph.include(r270_VBar.m(r270_Middle, r270_top - r359_radius - r359_sw / 2, r270_bot, r270_OperatorStroke));
            r359_currentGlyph.include(r270_difference(r270_DotAt(r270_Middle, r270_top, r359_radius + r359_sw), r270_DotAt(r270_Middle, r270_top, r359_radius)));
            return void 0;
        });
        r270_xn$createAndSaveGlyphImpl$2Lrc3c('botRingAbove', 10207, function () {
            var _r364_t1;
            var _r364_t0 = this;
            var r364_currentGlyph = _r364_t0;
            r364_currentGlyph.include(r270_xn$referglyph$1aao('barRingAbove'));
            r364_currentGlyph.include(r270_HBar.b(r270_SB, r270_RightSB, r270_bot, r270_OperatorStroke));
            return void 0;
        });
        r270_turned('barRingBelow', 10992, 'barRingAbove', r270_Middle, r270_SymbolMid);
        r270_turned('topRingBelow', 10993, 'botRingAbove', r270_Middle, r270_SymbolMid);
        r270_xn$createAndSaveGlyphImpl$2Lrc3c('interleave', 10996, function () {
            var _r369_t1;
            var _r369_t0 = this;
            var r369_currentGlyph = _r369_t0;
            var r369_sw = r270_AdviceStroke(4.25);
            r369_currentGlyph.include(r270_VBar.m(r270_Middle - r270_Width * 0.2625, r270_bot, r270_top, r369_sw));
            r369_currentGlyph.include(r270_VBar.m(r270_Middle, r270_bot, r270_top, r369_sw));
            r369_currentGlyph.include(r270_VBar.m(r270_Middle + r270_Width * 0.2625, r270_bot, r270_top, r369_sw));
            return void 0;
        });
        return r270_xn$createAndSaveGlyphImpl$2Lrc3c('endOfProof', 8718, function () {
            var _r375_t1;
            var _r375_t0 = this;
            var r375_currentGlyph = _r375_t0;
            r375_currentGlyph.include(r270_Rect(r270_TackTop, r270_TackBot, r270_SB, r270_RightSB));
            return void 0;
        });
    });
    return void 0;
});
