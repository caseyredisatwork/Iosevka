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
    r269_xn$Capture_Ext$2Lrc2b['$defineGlyphBlockImpl$'](r269_xn$Capture_Ext$2Lrc2b, 'Letter-Cyrillic-Te-Comb', function (r270_xn$Capture$2Lrc8, r270_xn$ExportCapture$2Lrc4b) {
        var _r270_t7, _r270_t8;
        var _r270_t0 = r270_xn$Capture$2Lrc8;
        var r270_xn$createAndSaveGlyphImpl$2Lrc3c = _r270_t0['$createAndSaveGlyphImpl$'];
        var r270_xn$NamedParameterPair$2Lrc9b = _r270_t0['$NamedParameterPair$'];
        var r270_xn$assignUnicodeImpl$2Lrc8b = _r270_t0['$assignUnicodeImpl$'];
        var r270_xn$execState$2Lrc0b = _r270_t0['$execState$'];
        var _r270_t1 = r270_xn$Capture$2Lrc8.Metrics;
        var r270_XH = _r270_t1.XH;
        var _r270_t2 = r270_xn$Capture$2Lrc8.SpiroFns;
        var _r270_t3 = r270_xn$Capture$2Lrc8.BooleFns;
        var _r270_t4 = r270_xn$Capture$2Lrc8.CommonShapes.resolve();
        var r270_HBar = _r270_t4.HBar;
        var r270_VBar = _r270_t4.VBar;
        var _r270_t5 = r270_xn$Capture$2Lrc8['Mark-Shared-Metrics'].resolve();
        var r270_markMiddle = _r270_t5.markMiddle;
        var r270_markExtend = _r270_t5.markExtend;
        var r270_markFine = _r270_t5.markFine;
        var _r270_t6 = r270_xn$Capture$2Lrc8['Mark-Above'].resolve();
        var r270_aboveMarkTop = _r270_t6.aboveMarkTop;
        var r270_aboveMarkBot = _r270_t6.aboveMarkBot;
        var r270_aboveMarkMid = _r270_t6.aboveMarkMid;
        var r270_aboveMarkStack = _r270_t6.aboveMarkStack;
        return r270_xn$createAndSaveGlyphImpl$2Lrc3c('cyrl/teAbove', null, function () {
            var _r276_t1;
            var _r276_t0 = this;
            var r276_currentGlyph = _r276_t0;
            r276_currentGlyph.setWidth(0);
            r276_currentGlyph.setMarkAnchor('above', r270_markMiddle, r270_XH, r270_markMiddle, r270_aboveMarkStack);
            r276_currentGlyph.setBaseAnchor('aboveBraceL', r270_markMiddle - r270_markExtend, r270_aboveMarkMid);
            r276_currentGlyph.setBaseAnchor('aboveBraceR', r270_markMiddle + r270_markExtend, r270_aboveMarkMid);
            var r276_ext = r270_markExtend * 1.5;
            r276_currentGlyph.include(r270_VBar.m(r270_markMiddle - r276_ext, r270_aboveMarkBot, r270_aboveMarkTop, r270_markFine * 2));
            r276_currentGlyph.include(r270_VBar.m(r270_markMiddle, r270_aboveMarkBot, r270_aboveMarkTop, r270_markFine * 2));
            r276_currentGlyph.include(r270_VBar.m(r270_markMiddle + r276_ext, r270_aboveMarkBot, r270_aboveMarkTop, r270_markFine * 2));
            r276_currentGlyph.include(r270_HBar.t(r270_markMiddle - r276_ext, r270_markMiddle + r276_ext, r270_aboveMarkTop, r270_markFine * 2));
            return void 0;
        });
    });
    return void 0;
});
