'use strict';
import * as _s0_t0 from '../../../support/utils.mjs';
import * as _s0_t1 from '../../../support/gr.mjs';
import * as _s0_t2 from '../../../meta/aesthetics.mjs';
var _s0_t3;
export {
    _s0_t3 as apply
};
var r1_apply, _r1_t0, _r1_t1, _r1_t2, _r1_t3, _r1_t4, _r1_t5, _r1_t6, _r1_t7;
var _r1_t8 = _s0_t0;
var r1_mix = _r1_t8.mix;
var r1_linreg = _r1_t8.linreg;
var r1_clamp = _r1_t8.clamp;
var r1_fallback = _r1_t8.fallback;
var _r1_t9 = _s0_t1;
var r1_Joining = _r1_t9.Joining;
var _r1_t10 = _s0_t2;
var r1_DesignParameters = _r1_t10.DesignParameters;
var r1_xn$GlyphBlocks$2Lrc2b = [];
_s0_t3 = r1_apply = function () {
    var r267_block, _r267_t4, _r267_t6;
    var _r267_t3 = this;
    var _r267_t0 = r1_xn$GlyphBlocks$2Lrc2b;
    var _r267_t1 = _r267_t0.length;
    var _r267_t2 = 0;
    var _r267_t5 = _r267_t2 < _r267_t1;
    while (_r267_t5) {
        _r267_t6 = (r267_block = _r267_t0[_r267_t2], r267_block(_r267_t3), _r267_t2 = _r267_t2 + 1);
        _r267_t5 = _r267_t2 < _r267_t1;
    }
    return _r267_t6;
};
r1_xn$GlyphBlocks$2Lrc2b.push(function (r271_xn$Capture_Ext$2Lrc2b) {
    var _r271_t0, _r271_t1;
    r271_xn$Capture_Ext$2Lrc2b['$defineGlyphBlockImpl$'](r271_xn$Capture_Ext$2Lrc2b, 'Symbol-Punctuation-Bar', function (r272_xn$Capture$2Lrc8, r272_xn$ExportCapture$2Lrc4b) {
        var _r272_t6, _r272_t7;
        var _r272_t0 = r272_xn$Capture$2Lrc8;
        var r272_xn$createAndSaveGlyphImpl$2Lrc3c = _r272_t0['$createAndSaveGlyphImpl$'];
        var r272_xn$NamedParameterPair$2Lrc9b = _r272_t0['$NamedParameterPair$'];
        var r272_xn$assignUnicodeImpl$2Lrc8b = _r272_t0['$assignUnicodeImpl$'];
        var r272_xn$execState$2Lrc0b = _r272_t0['$execState$'];
        var r272_AS_BASE = _r272_t0.AS_BASE;
        var _r272_t1 = r272_xn$Capture$2Lrc8.Metrics;
        var r272_DesignParameters = _r272_t1.DesignParameters;
        var r272_Width = _r272_t1.Width;
        var r272_SB = _r272_t1.SB;
        var r272_CAP = _r272_t1.CAP;
        var r272_XH = _r272_t1.XH;
        var r272_SymbolMid = _r272_t1.SymbolMid;
        var r272_ParenTop = _r272_t1.ParenTop;
        var r272_ParenBot = _r272_t1.ParenBot;
        var r272_HVContrast = _r272_t1.HVContrast;
        var r272_Stroke = _r272_t1.Stroke;
        var r272_HalfStroke = _r272_t1.HalfStroke;
        var r272_RightSB = _r272_t1.RightSB;
        var r272_Middle = _r272_t1.Middle;
        var r272_AdviceStroke = _r272_t1.AdviceStroke;
        var r272_OperatorStroke = _r272_t1.OperatorStroke;
        var _r272_t2 = r272_xn$Capture$2Lrc8.SpiroFns;
        var _r272_t3 = r272_xn$Capture$2Lrc8.BooleFns;
        var _r272_t4 = r272_xn$Capture$2Lrc8.CommonShapes.resolve();
        var r272_HBar = _r272_t4.HBar;
        var r272_VBar = _r272_t4.VBar;
        var r272_ForceUpright = _r272_t4.ForceUpright;
        var _r272_t5 = r272_xn$Capture$2Lrc8['Common-Derivatives'].resolve();
        var r272_xn$selectvariant$7Hrq = _r272_t5['select-variant'];
        var r272_xn$orthographicslanted$3DrD = _r272_t5['orthographic-slanted'];
        var r272_xn$referglyph$1aao = _r272_t5['refer-glyph'];
        var r272_alias = _r272_t5.alias;
        var r272_BarShape = function (r275_x, r275_gap) {
            var _r275_t0, _r275_t1;
            return function () {
                var _r277_t1;
                var _r277_t0 = this;
                var r277_currentGlyph = _r277_t0;
                r277_currentGlyph.setBaseAnchor('above', r275_x, r272_ParenTop);
                r277_currentGlyph.setBaseAnchor('below', r275_x, r272_ParenBot);
                r277_currentGlyph.include(r272_VBar.m(r275_x, r272_ParenBot + r275_gap, r272_ParenTop - r275_gap));
                return void 0;
            };
        };
        r272_xn$createAndSaveGlyphImpl$2Lrc3c('bar.upright', null, r272_BarShape(r272_Middle, 0));
        r272_xn$createAndSaveGlyphImpl$2Lrc3c('bar.slanted.naturalSlope', null, r272_BarShape(r272_Middle, 0));
        r272_xn$createAndSaveGlyphImpl$2Lrc3c('bar.slanted.forceUpright', null, function () {
            var _r285_t1;
            var _r285_t0 = this;
            var r285_currentGlyph = _r285_t0;
            r285_currentGlyph.include(r272_ForceUpright());
            r285_currentGlyph.include(r272_BarShape(r272_Middle, 0));
            return void 0;
        });
        r272_xn$createAndSaveGlyphImpl$2Lrc3c('ligBarInsideBracketLeft', null, function () {
            var _r290_t1;
            var _r290_t0 = this;
            var r290_currentGlyph = _r290_t0;
            r1_Joining.set(r290_currentGlyph, r1_Joining.Classes.Left);
            r290_currentGlyph.include(r272_BarShape(r1_mix(r272_SB, r272_RightSB, r272_DesignParameters.bracketOutside) + r272_HalfStroke * r272_HVContrast, r272_Stroke + Math.max(r272_AdviceStroke(5), r272_XH / 12)));
            return void 0;
        });
        r272_xn$createAndSaveGlyphImpl$2Lrc3c('ligBarInsideBracketRight', null, function () {
            var _r294_t1;
            var _r294_t0 = this;
            var r294_currentGlyph = _r294_t0;
            r1_Joining.set(r294_currentGlyph, r1_Joining.Classes.Right);
            r294_currentGlyph.include(r272_BarShape(r1_mix(r272_RightSB, r272_SB, r272_DesignParameters.bracketOutside) - r272_HalfStroke * r272_HVContrast, r272_Stroke + Math.max(r272_AdviceStroke(5), r272_XH / 12)));
            return void 0;
        });
        var r272_DoubleBarShape = function () {
            var _r296_t0, _r296_t1;
            return function () {
                var _r298_t1;
                var _r298_t0 = this;
                var r298_currentGlyph = _r298_t0;
                r298_currentGlyph.setBaseAnchor('above', r272_Middle, r272_ParenTop);
                r298_currentGlyph.setBaseAnchor('below', r272_Middle, r272_ParenBot);
                var r298_sw = r272_AdviceStroke(3.5);
                r298_currentGlyph.include(r272_VBar.m(r272_Middle - r272_Width * 0.175, r272_ParenBot, r272_ParenTop, r298_sw));
                r298_currentGlyph.include(r272_VBar.m(r272_Middle + r272_Width * 0.175, r272_ParenBot, r272_ParenTop, r298_sw));
                return void 0;
            };
        };
        r272_xn$createAndSaveGlyphImpl$2Lrc3c('doubleBar.upright', null, r272_DoubleBarShape());
        r272_xn$createAndSaveGlyphImpl$2Lrc3c('doubleBar.slanted.naturalSlope', null, r272_DoubleBarShape());
        r272_xn$createAndSaveGlyphImpl$2Lrc3c('doubleBar.slanted.forceUpright', null, function () {
            var _r307_t1;
            var _r307_t0 = this;
            var r307_currentGlyph = _r307_t0;
            r307_currentGlyph.include(r272_ForceUpright());
            r307_currentGlyph.include(r272_DoubleBarShape());
            return void 0;
        });
        var r272_TripleBarShape = function () {
            var _r310_t0, _r310_t1;
            return function () {
                var _r312_t1;
                var _r312_t0 = this;
                var r312_currentGlyph = _r312_t0;
                r312_currentGlyph.setBaseAnchor('above', r272_Middle, r272_ParenTop);
                r312_currentGlyph.setBaseAnchor('below', r272_Middle, r272_ParenBot);
                var r312_sw = r272_AdviceStroke(4.25);
                r312_currentGlyph.include(r272_VBar.m(r272_Middle - r272_Width * 0.2625, r272_ParenBot, r272_ParenTop, r312_sw));
                r312_currentGlyph.include(r272_VBar.m(r272_Middle, r272_ParenBot, r272_ParenTop, r312_sw));
                r312_currentGlyph.include(r272_VBar.m(r272_Middle + r272_Width * 0.2625, r272_ParenBot, r272_ParenTop, r312_sw));
                return void 0;
            };
        };
        r272_xn$createAndSaveGlyphImpl$2Lrc3c('tripleBar.upright', null, r272_TripleBarShape());
        r272_xn$createAndSaveGlyphImpl$2Lrc3c('tripleBar.slanted.naturalSlope', null, r272_TripleBarShape());
        r272_xn$createAndSaveGlyphImpl$2Lrc3c('tripleBar.slanted.forceUpright', null, function () {
            var _r322_t1;
            var _r322_t0 = this;
            var r322_currentGlyph = _r322_t0;
            r322_currentGlyph.include(r272_ForceUpright());
            r322_currentGlyph.include(r272_TripleBarShape());
            return void 0;
        });
        var r272_BrokenBarShape = function () {
            var _r325_t0, _r325_t1;
            return function () {
                var _r327_t1;
                var _r327_t0 = this;
                var r327_currentGlyph = _r327_t0;
                var r327_breakDist = Math.max(r272_Stroke, r272_CAP / 8);
                r327_currentGlyph.include(r272_VBar.m(r272_Middle, r272_SymbolMid + r327_breakDist / 2, r272_ParenTop));
                r327_currentGlyph.include(r272_VBar.m(r272_Middle, r272_ParenBot, r272_SymbolMid - r327_breakDist / 2));
                return void 0;
            };
        };
        r272_xn$createAndSaveGlyphImpl$2Lrc3c('brokenBar.upright', null, r272_BrokenBarShape());
        r272_xn$createAndSaveGlyphImpl$2Lrc3c('brokenBar.slanted.naturalSlope', null, r272_BrokenBarShape());
        r272_xn$createAndSaveGlyphImpl$2Lrc3c('brokenBar.slanted.forceUpright', null, function () {
            var _r334_t1;
            var _r334_t0 = this;
            var r334_currentGlyph = _r334_t0;
            r334_currentGlyph.include(r272_ForceUpright());
            r334_currentGlyph.include(r272_BrokenBarShape());
            return void 0;
        });
        r272_xn$createAndSaveGlyphImpl$2Lrc3c('palatoalveolarclick', 450, function () {
            var _r339_t1;
            var _r339_t0 = this;
            var r339_currentGlyph = _r339_t0;
            r339_currentGlyph.include(r272_xn$referglyph$1aao('bar.upright'), r272_AS_BASE);
            r339_currentGlyph.include(r272_HBar.b(r272_SB, r272_RightSB, r272_SymbolMid + r272_XH * 0.1, r272_OperatorStroke));
            r339_currentGlyph.include(r272_HBar.t(r272_SB, r272_RightSB, r272_SymbolMid - r272_XH * 0.1, r272_OperatorStroke));
            return void 0;
        });
        r272_xn$selectvariant$7Hrq('bar.slanted');
        r272_xn$orthographicslanted$3DrD('bar', '|');
        r272_xn$selectvariant$7Hrq('doubleBar.slanted', new r272_xn$NamedParameterPair$2Lrc9b('follow', 'bar.slanted'));
        r272_xn$orthographicslanted$3DrD('doubleBar', 8214);
        r272_xn$selectvariant$7Hrq('tripleBar.slanted', new r272_xn$NamedParameterPair$2Lrc9b('follow', 'bar.slanted'));
        r272_xn$orthographicslanted$3DrD('tripleBar', 11004);
        r272_xn$selectvariant$7Hrq('brokenBar.slanted', new r272_xn$NamedParameterPair$2Lrc9b('follow', 'bar.slanted'));
        r272_xn$orthographicslanted$3DrD('brokenBar', 166);
        r272_alias('dentalclick', 448, 'bar.upright');
        r272_alias('alveolarlateralclick', 449, 'doubleBar.upright');
        return r272_alias('retroflexlateralclick', 10624, 'tripleBar.upright');
    });
    return void 0;
});
