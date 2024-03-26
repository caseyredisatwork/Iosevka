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
    r270_xn$Capture_Ext$2Lrc2b['$defineGlyphBlockImpl$'](r270_xn$Capture_Ext$2Lrc2b, 'Letter-Latin-Glottal-Stop', function (r271_xn$Capture$2Lrc8, r271_xn$ExportCapture$2Lrc4b) {
        var _r271_t8, _r271_t9;
        var _r271_t0 = r271_xn$Capture$2Lrc8;
        var r271_xn$createAndSaveGlyphImpl$2Lrc3c = _r271_t0['$createAndSaveGlyphImpl$'];
        var r271_xn$NamedParameterPair$2Lrc9b = _r271_t0['$NamedParameterPair$'];
        var r271_xn$assignUnicodeImpl$2Lrc8b = _r271_t0['$assignUnicodeImpl$'];
        var r271_xn$execState$2Lrc0b = _r271_t0['$execState$'];
        var r271_MarkSet = _r271_t0.MarkSet;
        var r271_AS_BASE = _r271_t0.AS_BASE;
        var _r271_t1 = r271_xn$Capture$2Lrc8.Metrics;
        var r271_SB = _r271_t1.SB;
        var r271_XH = _r271_t1.XH;
        var r271_Ascender = _r271_t1.Ascender;
        var r271_HVContrast = _r271_t1.HVContrast;
        var r271_Downward = _r271_t1.Downward;
        var r271_O = _r271_t1.O;
        var r271_Hook = _r271_t1.Hook;
        var r271_Stroke = _r271_t1.Stroke;
        var r271_Jut = _r271_t1.Jut;
        var r271_SLAB = _r271_t1.SLAB;
        var r271_HalfStroke = _r271_t1.HalfStroke;
        var r271_RightSB = _r271_t1.RightSB;
        var r271_Middle = _r271_t1.Middle;
        var r271_AdviceGlottalStopArchDepth = _r271_t1.AdviceGlottalStopArchDepth;
        var _r271_t2 = r271_xn$Capture$2Lrc8.SpiroFns;
        var r271_g4 = _r271_t2.g4;
        var r271_g2 = _r271_t2.g2;
        var r271_flat = _r271_t2.flat;
        var r271_curl = _r271_t2.curl;
        var r271_widths = _r271_t2.widths;
        var r271_heading = _r271_t2.heading;
        var r271_important = _r271_t2.important;
        var r271_alsoThru = _r271_t2.alsoThru;
        var r271_dispiro = _r271_t2.dispiro;
        var _r271_t3 = r271_xn$Capture$2Lrc8.BooleFns;
        var _r271_t4 = r271_xn$Capture$2Lrc8.CommonShapes.resolve();
        var r271_HSerif = _r271_t4.HSerif;
        var r271_hookstart = _r271_t4.hookstart;
        var _r271_t5 = r271_xn$Capture$2Lrc8['Common-Derivatives'].resolve();
        var r271_xn$referglyph$1aao = _r271_t5['refer-glyph'];
        var r271_alias = _r271_t5.alias;
        var r271_turned = _r271_t5.turned;
        var _r271_t6 = r271_xn$Capture$2Lrc8['Mark-Shared-Metrics'].resolve();
        var r271_markHalfStroke = _r271_t6.markHalfStroke;
        var _r271_t7 = r271_xn$Capture$2Lrc8['Letter-Shared-Shapes'].resolve();
        var r271_LetterBarOverlay = _r271_t7.LetterBarOverlay;
        r271_xn$createAndSaveGlyphImpl$2Lrc3c('glottalStop', 660, function () {
            var _r278_t1;
            var _r278_t0 = this;
            var r278_currentGlyph = _r278_t0;
            r278_currentGlyph.include(r271_MarkSet.b());
            r278_currentGlyph.include(r271_dispiro(r271_widths.rhs(), r271_g4(r271_SB, r271_Ascender - r271_Hook), r271_hookstart(r271_Ascender - r271_O), r271_g4(r271_RightSB, r271_Ascender - r271_AdviceGlottalStopArchDepth(r271_Ascender, 1)), r271_alsoThru.g2(0.5, 0.5, r271_important), r271_flat(r271_Middle + r271_HalfStroke * r271_HVContrast, r271_XH * 0.3), r271_curl(r271_Middle + r271_HalfStroke * r271_HVContrast, 0, r271_heading(r271_Downward))));
            if (r271_SLAB)
                r278_currentGlyph.include(r271_HSerif.mb(r271_Middle, 0, r271_Jut));
            return void 0;
        });
        r271_alias('capGlottalStop', 577, 'glottalStop');
        r271_xn$createAndSaveGlyphImpl$2Lrc3c('revGlottalStop', 661, function () {
            var _r284_t1;
            var _r284_t0 = this;
            var r284_currentGlyph = _r284_t0;
            r284_currentGlyph.include(r271_MarkSet.b());
            r284_currentGlyph.include(r271_dispiro(r271_widths.lhs(), r271_g4(r271_RightSB, r271_Ascender - r271_Hook), r271_hookstart(r271_Ascender - r271_O), r271_g4(r271_SB, r271_Ascender - r271_AdviceGlottalStopArchDepth(r271_Ascender, -1)), r271_alsoThru.g2(0.5, 0.5, r271_important), r271_flat(r271_Middle - r271_HalfStroke * r271_HVContrast, r271_XH * 0.3), r271_curl(r271_Middle - r271_HalfStroke * r271_HVContrast, 0, r271_heading(r271_Downward))));
            if (r271_SLAB)
                r284_currentGlyph.include(r271_HSerif.mb(r271_Middle, 0, r271_Jut));
            return void 0;
        });
        r271_xn$createAndSaveGlyphImpl$2Lrc3c('smallGlottalStop', 578, function () {
            var _r290_t1;
            var _r290_t0 = this;
            var r290_currentGlyph = _r290_t0;
            r290_currentGlyph.include(r271_MarkSet.e());
            r290_currentGlyph.include(r271_dispiro(r271_widths.rhs(), r271_g4(r271_SB, r271_XH - r271_Hook), r271_hookstart(r271_XH - r271_O), r271_g4(r271_RightSB, r271_XH - r271_AdviceGlottalStopArchDepth(r271_XH, 1)), r271_alsoThru.g2(0.5, 0.5, r271_important), r271_flat(r271_Middle + r271_HalfStroke * r271_HVContrast, r271_XH * 0.15), r271_curl(r271_Middle + r271_HalfStroke * r271_HVContrast, 0, r271_heading(r271_Downward))));
            if (r271_SLAB)
                r290_currentGlyph.include(r271_HSerif.mb(r271_Middle, 0, r271_Jut));
            return void 0;
        });
        r271_xn$createAndSaveGlyphImpl$2Lrc3c('smallRevGlottalStop', null, function () {
            var _r296_t1;
            var _r296_t0 = this;
            var r296_currentGlyph = _r296_t0;
            r296_currentGlyph.include(r271_MarkSet.e());
            r296_currentGlyph.include(r271_dispiro(r271_widths.lhs(), r271_g4(r271_RightSB, r271_XH - r271_Hook), r271_hookstart(r271_XH - r271_O), r271_g4(r271_SB, r271_XH - r271_AdviceGlottalStopArchDepth(r271_XH, -1)), r271_alsoThru.g2(0.5, 0.5, r271_important), r271_flat(r271_Middle - r271_HalfStroke * r271_HVContrast, r271_XH * 0.15), r271_curl(r271_Middle - r271_HalfStroke * r271_HVContrast, 0, r271_heading(r271_Downward))));
            if (r271_SLAB)
                r296_currentGlyph.include(r271_HSerif.mb(r271_Middle, 0, r271_Jut));
            return void 0;
        });
        r271_turned('invGlottalStop', 662, 'revGlottalStop', r271_Middle, r271_Ascender / 2);
        r271_xn$createAndSaveGlyphImpl$2Lrc3c('glottalStopBar', 673, function () {
            var _r302_t1;
            var _r302_t0 = this;
            var r302_currentGlyph = _r302_t0;
            r302_currentGlyph.include(r271_xn$referglyph$1aao('glottalStop'), r271_AS_BASE);
            r302_currentGlyph.include(r271_LetterBarOverlay.m.in(r271_Middle, r271_SLAB ? r271_Stroke : 0, r271_Ascender * 0.5, 0.5));
            return void 0;
        });
        return r271_xn$createAndSaveGlyphImpl$2Lrc3c('revGlottalStopBar', 674, function () {
            var _r307_t1;
            var _r307_t0 = this;
            var r307_currentGlyph = _r307_t0;
            r307_currentGlyph.include(r271_xn$referglyph$1aao('revGlottalStop'), r271_AS_BASE);
            r307_currentGlyph.include(r271_LetterBarOverlay.m.in(r271_Middle, r271_SLAB ? r271_Stroke : 0, r271_Ascender * 0.5, 0.5));
            return void 0;
        });
    });
    return void 0;
});
