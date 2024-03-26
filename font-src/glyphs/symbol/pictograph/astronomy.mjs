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
    r269_xn$Capture_Ext$2Lrc2b['$defineGlyphBlockImpl$'](r269_xn$Capture_Ext$2Lrc2b, 'Symbol-Pictograph-Astronomy', function (r270_xn$Capture$2Lrc8, r270_xn$ExportCapture$2Lrc4b) {
        var _r270_t7, _r270_t8, _r270_t9, _r270_tag10;
        var _r270_t0 = r270_xn$Capture$2Lrc8;
        var r270_xn$createAndSaveGlyphImpl$2Lrc3c = _r270_t0['$createAndSaveGlyphImpl$'];
        var r270_xn$NamedParameterPair$2Lrc9b = _r270_t0['$NamedParameterPair$'];
        var r270_xn$assignUnicodeImpl$2Lrc8b = _r270_t0['$assignUnicodeImpl$'];
        var r270_xn$execState$2Lrc0b = _r270_t0['$execState$'];
        var _r270_t1 = r270_xn$Capture$2Lrc8.Metrics;
        var r270_SB = _r270_t1.SB;
        var r270_SymbolMid = _r270_t1.SymbolMid;
        var r270_PictTop = _r270_t1.PictTop;
        var r270_PictBot = _r270_t1.PictBot;
        var r270_ApparentTranslate = _r270_t1.ApparentTranslate;
        var r270_Upward = _r270_t1.Upward;
        var r270_Downward = _r270_t1.Downward;
        var r270_Rightward = _r270_t1.Rightward;
        var r270_O = _r270_t1.O;
        var r270_OX = _r270_t1.OX;
        var r270_RightSB = _r270_t1.RightSB;
        var r270_Middle = _r270_t1.Middle;
        var r270_OperatorStroke = _r270_t1.OperatorStroke;
        var _r270_t2 = r270_xn$Capture$2Lrc8.SpiroFns;
        var r270_g4 = _r270_t2.g4;
        var r270_end = _r270_t2.end;
        var r270_widths = _r270_t2.widths;
        var r270_heading = _r270_t2.heading;
        var r270_archv = _r270_t2.archv;
        var r270_arcvh = _r270_t2.arcvh;
        var r270_dispiro = _r270_t2.dispiro;
        var _r270_t3 = r270_xn$Capture$2Lrc8.BooleFns;
        var _r270_t4 = r270_xn$Capture$2Lrc8.CommonShapes.resolve();
        var r270_OShape = _r270_t4.OShape;
        var r270_HBar = _r270_t4.HBar;
        var r270_VBar = _r270_t4.VBar;
        var _r270_t5 = r270_xn$Capture$2Lrc8['Common-Derivatives'].resolve();
        var r270_xn$referglyph$1aao = _r270_t5['refer-glyph'];
        var r270_turned = _r270_t5.turned;
        var _r270_t6 = r270_xn$Capture$2Lrc8['Symbol-Arrow'].resolve();
        var r270_ArrowShape = _r270_t6.ArrowShape;
        (function () {
            var r275_obot = r270_PictTop - r270_RightSB + r270_SB;
            r270_xn$createAndSaveGlyphImpl$2Lrc3c('neuter', 9906, function () {
                var _r278_t1;
                var _r278_t0 = this;
                var r278_currentGlyph = _r278_t0;
                r278_currentGlyph.include(r270_OShape(r270_PictTop, r275_obot, r270_SB, r270_RightSB, r270_OperatorStroke));
                r278_currentGlyph.include(r270_VBar.m(r270_Middle, r270_PictBot, r275_obot, r270_OperatorStroke));
                return void 0;
            });
            return r270_xn$createAndSaveGlyphImpl$2Lrc3c('venus', 9792, function () {
                var _r283_t1;
                var _r283_t0 = this;
                var r283_currentGlyph = _r283_t0;
                r283_currentGlyph.include(r270_xn$referglyph$1aao('neuter'));
                r283_currentGlyph.include(r270_HBar.m(r270_SB, r270_RightSB, r1_mix(r270_PictBot, r275_obot + r270_OperatorStroke, 0.5), r270_OperatorStroke));
                return void 0;
            });
        }());
        r270_turned('earth', 9793, 'venus', r270_Middle, r270_SymbolMid);
        r270_xn$createAndSaveGlyphImpl$2Lrc3c('mercury', 9791, function () {
            var _r288_t1;
            var _r288_t0 = this;
            var r288_currentGlyph = _r288_t0;
            r288_currentGlyph.include(r270_xn$referglyph$1aao('venus'));
            var r288_ext = (r270_RightSB - r270_SB) / 2;
            r288_currentGlyph.include(r270_ApparentTranslate(0, -r288_ext / 2));
            var r288_otop = r270_PictTop - r288_ext / 2 - r270_OperatorStroke / 4;
            r288_currentGlyph.include(r270_dispiro(r270_g4.down.start(r270_SB + r270_OX, r288_otop + r288_ext - r270_O, r270_widths.lhs.heading(r270_OperatorStroke, r270_Downward)), r270_arcvh(), r270_g4.right.mid(r270_Middle, r288_otop + r270_O, r270_heading(r270_Rightward)), r270_archv(), r270_g4.up.end(r270_RightSB - r270_OX, r288_otop + r288_ext - r270_O, r270_heading(r270_Upward))));
            return void 0;
        });
        return r270_xn$createAndSaveGlyphImpl$2Lrc3c('mars', 9794, function () {
            var _r294_t1;
            var _r294_t0 = this;
            var r294_currentGlyph = _r294_t0;
            var r294_otop = r270_PictBot + r270_RightSB - r270_SB;
            r294_currentGlyph.include(r270_OShape(r294_otop, r270_PictBot, r270_SB, r270_RightSB, r270_OperatorStroke));
            r294_currentGlyph.include(r270_ArrowShape(r270_Middle, r294_otop - r270_OperatorStroke / 3, r270_Middle, r270_PictTop, (r270_RightSB - r270_SB) * 0.4));
            return void 0;
        });
    });
    return void 0;
});
