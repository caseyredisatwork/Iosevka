'use strict';
import * as _s0_t0 from '../../../support/utils.mjs';
import * as _s0_t1 from '../../../meta/aesthetics.mjs';
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
var r1_DesignParameters = _r1_t9.DesignParameters;
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
    r270_xn$Capture_Ext$2Lrc2b['$defineGlyphBlockImpl$'](r270_xn$Capture_Ext$2Lrc2b, 'Letter-Greek-Upper-Xi', function (r271_xn$Capture$2Lrc8, r271_xn$ExportCapture$2Lrc4b) {
        var _r271_t6, _r271_t7;
        var _r271_t0 = r271_xn$Capture$2Lrc8;
        var r271_xn$createAndSaveGlyphImpl$2Lrc3c = _r271_t0['$createAndSaveGlyphImpl$'];
        var r271_xn$NamedParameterPair$2Lrc9b = _r271_t0['$NamedParameterPair$'];
        var r271_xn$assignUnicodeImpl$2Lrc8b = _r271_t0['$assignUnicodeImpl$'];
        var r271_xn$execState$2Lrc0b = _r271_t0['$execState$'];
        var r271_MarkSet = _r271_t0.MarkSet;
        var _r271_t1 = r271_xn$Capture$2Lrc8.Metrics;
        var r271_SB = _r271_t1.SB;
        var r271_CAP = _r271_t1.CAP;
        var r271_OX = _r271_t1.OX;
        var r271_Stroke = _r271_t1.Stroke;
        var r271_VJut = _r271_t1.VJut;
        var r271_SLAB = _r271_t1.SLAB;
        var r271_RightSB = _r271_t1.RightSB;
        var r271_AdviceStroke = _r271_t1.AdviceStroke;
        var _r271_t2 = r271_xn$Capture$2Lrc8.SpiroFns;
        var _r271_t3 = r271_xn$Capture$2Lrc8.BooleFns;
        var _r271_t4 = r271_xn$Capture$2Lrc8.CommonShapes.resolve();
        var r271_VSerif = _r271_t4.VSerif;
        var r271_HBar = _r271_t4.HBar;
        var r271_VBar = _r271_t4.VBar;
        var _r271_t5 = r271_xn$Capture$2Lrc8['Common-Derivatives'].resolve();
        return r271_xn$createAndSaveGlyphImpl$2Lrc3c('grek/Xi', 926, function () {
            var _r276_t1;
            var _r276_t0 = this;
            var r276_currentGlyph = _r276_t0;
            r276_currentGlyph.include(r271_MarkSet.capital());
            var r276_xMidLeft = r1_mix(r271_SB, r271_RightSB, 0.125);
            var r276_xMidRight = r1_mix(r271_RightSB, r271_SB, 0.125);
            var r276_yBar = r1_mix(0, r271_CAP, 0.5) + r271_Stroke * 0.125;
            r276_currentGlyph.include(r271_HBar.m(r276_xMidLeft, r276_xMidRight, r276_yBar));
            r276_currentGlyph.include(r271_HBar.t(r271_SB + r271_OX, r271_RightSB - r271_OX, r271_CAP));
            r276_currentGlyph.include(r271_HBar.b(r271_SB + r271_OX, r271_RightSB - r271_OX, 0));
            if (r271_SLAB) {
                r276_currentGlyph.include(r271_VSerif.dl(r271_SB + r271_OX, r271_CAP, r271_VJut));
                r276_currentGlyph.include(r271_VSerif.dr(r271_RightSB - r271_OX, r271_CAP, r271_VJut));
                r276_currentGlyph.include(r271_VSerif.ul(r271_SB + r271_OX, 0, r271_VJut));
                r276_currentGlyph.include(r271_VSerif.ur(r271_RightSB - r271_OX, 0, r271_VJut));
                r276_currentGlyph.include(r271_VBar.l(r276_xMidLeft, r276_yBar - 0.5 * r271_VJut, r276_yBar + 0.5 * r271_VJut, r271_AdviceStroke(3.5)));
                r276_currentGlyph.include(r271_VBar.r(r276_xMidRight, r276_yBar - 0.5 * r271_VJut, r276_yBar + 0.5 * r271_VJut, r271_AdviceStroke(3.5)));
            }
            return void 0;
        });
    });
    return void 0;
});
