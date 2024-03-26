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
    r270_xn$Capture_Ext$2Lrc2b['$defineGlyphBlockImpl$'](r270_xn$Capture_Ext$2Lrc2b, 'Letter-Latin-Wynn', function (r271_xn$Capture$2Lrc8, r271_xn$ExportCapture$2Lrc4b) {
        var _r271_t7, _r271_t8;
        var _r271_t0 = r271_xn$Capture$2Lrc8;
        var r271_xn$createAndSaveGlyphImpl$2Lrc3c = _r271_t0['$createAndSaveGlyphImpl$'];
        var r271_xn$NamedParameterPair$2Lrc9b = _r271_t0['$NamedParameterPair$'];
        var r271_xn$assignUnicodeImpl$2Lrc8b = _r271_t0['$assignUnicodeImpl$'];
        var r271_xn$execState$2Lrc0b = _r271_t0['$execState$'];
        var r271_MarkSet = _r271_t0.MarkSet;
        var r271_DivFrame = _r271_t0.DivFrame;
        var _r271_t1 = r271_xn$Capture$2Lrc8.Metrics;
        var r271_Width = _r271_t1.Width;
        var r271_SB = _r271_t1.SB;
        var r271_CAP = _r271_t1.CAP;
        var r271_XH = _r271_t1.XH;
        var r271_Descender = _r271_t1.Descender;
        var r271_HVContrast = _r271_t1.HVContrast;
        var r271_O = _r271_t1.O;
        var r271_Hook = _r271_t1.Hook;
        var r271_Stroke = _r271_t1.Stroke;
        var r271_SLAB = _r271_t1.SLAB;
        var r271_RightSB = _r271_t1.RightSB;
        var r271_Middle = _r271_t1.Middle;
        var r271_ArchDepthBOf = _r271_t1.ArchDepthBOf;
        var _r271_t2 = r271_xn$Capture$2Lrc8.SpiroFns;
        var r271_g4 = _r271_t2.g4;
        var r271_widths = _r271_t2.widths;
        var r271_important = _r271_t2.important;
        var r271_alsoThru = _r271_t2.alsoThru;
        var r271_dispiro = _r271_t2.dispiro;
        var _r271_t3 = r271_xn$Capture$2Lrc8.BooleFns;
        var _r271_t4 = r271_xn$Capture$2Lrc8.CommonShapes.resolve();
        var r271_VBar = _r271_t4.VBar;
        var _r271_t5 = r271_xn$Capture$2Lrc8['Common-Derivatives'].resolve();
        var _r271_t6 = r271_xn$Capture$2Lrc8['Letter-Shared-Shapes'].resolve();
        var r271_SerifFrame = _r271_t6.SerifFrame;
        var r271_SerifedArcStart = _r271_t6.SerifedArcStart;
        var r271_WynnShape = function (r275_bot, r275_top) {
            var _r275_t0, _r275_t1;
            return function () {
                var r277_sf, _r277_t1;
                var _r277_t0 = this;
                var r277_currentGlyph = _r277_t0;
                r277_currentGlyph.include(r271_VBar.l(r271_SB, r275_bot, r275_top));
                var r277_bowlBottom = 0.5 * r271_Stroke + r1_mix(r275_bot, r275_top, 0.15);
                var r277_bowlStartDepth = 0.15 * (r275_top - r277_bowlBottom);
                var r277_yCounterPesudoBottom = r1_mix(r277_bowlBottom, r275_top, 0.333);
                r277_currentGlyph.include(r271_dispiro(r271_SerifedArcStart.LtrRhs(r271_SB, r271_Middle, r275_top, r271_Stroke, Math.max(r271_Hook, r277_bowlStartDepth), r271_Stroke), r271_g4(r271_RightSB - r271_O, r275_top - r271_ArchDepthBOf(0.5 * (r275_top - r277_yCounterPesudoBottom), r271_Width), r271_widths.rhs()), r271_alsoThru(0.25, 0.45, r271_important), r271_g4(r271_SB + r271_Stroke * r271_HVContrast, r277_bowlBottom)));
                if (r271_SLAB) {
                    r277_sf = r271_SerifFrame.fromDf(r271_DivFrame(1), r275_top, r275_bot);
                    r277_currentGlyph.include(r277_sf.lt.outer);
                    r277_currentGlyph.include(r277_sf.lb.fullSide);
                }
                return void 0;
            };
        };
        r271_xn$createAndSaveGlyphImpl$2Lrc3c('Wynn', 503, function () {
            var _r284_t1;
            var _r284_t0 = this;
            var r284_currentGlyph = _r284_t0;
            r284_currentGlyph.include(r271_MarkSet.capital());
            r284_currentGlyph.include(r271_WynnShape(0, r271_CAP));
            return void 0;
        });
        return r271_xn$createAndSaveGlyphImpl$2Lrc3c('wynn', 447, function () {
            var _r289_t1;
            var _r289_t0 = this;
            var r289_currentGlyph = _r289_t0;
            r289_currentGlyph.include(r271_MarkSet.p());
            r289_currentGlyph.include(r271_WynnShape(r271_Descender, r271_XH));
            return void 0;
        });
    });
    return void 0;
});
