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
    r269_xn$Capture_Ext$2Lrc2b['$defineGlyphBlockImpl$'](r269_xn$Capture_Ext$2Lrc2b, 'Symbol-Punctuation-Ties', function (r270_xn$Capture$2Lrc8, r270_xn$ExportCapture$2Lrc4b) {
        var _r270_t6, _r270_t7;
        var _r270_t0 = r270_xn$Capture$2Lrc8;
        var r270_xn$createAndSaveGlyphImpl$2Lrc3c = _r270_t0['$createAndSaveGlyphImpl$'];
        var r270_xn$NamedParameterPair$2Lrc9b = _r270_t0['$NamedParameterPair$'];
        var r270_xn$assignUnicodeImpl$2Lrc8b = _r270_t0['$assignUnicodeImpl$'];
        var r270_xn$execState$2Lrc0b = _r270_t0['$execState$'];
        var _r270_t1 = r270_xn$Capture$2Lrc8.Metrics;
        var r270_SB = _r270_t1.SB;
        var r270_CAP = _r270_t1.CAP;
        var r270_Descender = _r270_t1.Descender;
        var r270_Rightward = _r270_t1.Rightward;
        var r270_OX = _r270_t1.OX;
        var r270_RightSB = _r270_t1.RightSB;
        var r270_Middle = _r270_t1.Middle;
        var r270_OperatorStroke = _r270_t1.OperatorStroke;
        var _r270_t2 = r270_xn$Capture$2Lrc8.SpiroFns;
        var r270_g4 = _r270_t2.g4;
        var r270_widths = _r270_t2.widths;
        var r270_heading = _r270_t2.heading;
        var r270_quadControls = _r270_t2.quadControls;
        var r270_dispiro = _r270_t2.dispiro;
        var _r270_t3 = r270_xn$Capture$2Lrc8.BooleFns;
        var r270_union = _r270_t3.union;
        var _r270_t4 = r270_xn$Capture$2Lrc8.CommonShapes.resolve();
        var _r270_t5 = r270_xn$Capture$2Lrc8['Common-Derivatives'].resolve();
        var r270_TieShape = function (r273_y, r273_k) {
            var _r273_t0, _r273_t1;
            return r270_dispiro(r270_widths[r273_k > 0 ? 'rhs' : 'lhs'](r270_OperatorStroke), r270_g4(r270_SB + r270_OX, r273_y), r270_quadControls(0.5, 1), r270_g4.right.mid(r270_Middle, r273_y - r273_k * r270_Descender / 3, r270_heading(r270_Rightward)), r270_quadControls(0.5, 0), r270_g4(r270_RightSB - r270_OX, r273_y));
        };
        r270_xn$createAndSaveGlyphImpl$2Lrc3c('overTie', 8256, r270_TieShape(r270_CAP, 1));
        r270_xn$createAndSaveGlyphImpl$2Lrc3c('underTie', 8255, r270_TieShape(0, -1));
        r270_xn$createAndSaveGlyphImpl$2Lrc3c('overAndUnderTie', 8272, r270_union(r270_TieShape(r270_CAP, 1), r270_TieShape(0, -1)));
        r270_xn$createAndSaveGlyphImpl$2Lrc3c('invertedUnderTie', 8276, r270_TieShape(0, 1));
        return r270_xn$createAndSaveGlyphImpl$2Lrc3c('symbolMidTie', null, r270_TieShape(-r270_Descender / 3, 2));
    });
    return void 0;
});
