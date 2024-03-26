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
    r269_xn$Capture_Ext$2Lrc2b['$defineGlyphBlockImpl$'](r269_xn$Capture_Ext$2Lrc2b, 'Symbol-Punctuation-ParagraphAndSection', function (r270_xn$Capture$2Lrc8, r270_xn$ExportCapture$2Lrc4b) {
        var _r270_t6, _r270_t7;
        var _r270_t0 = r270_xn$Capture$2Lrc8;
        var r270_xn$createAndSaveGlyphImpl$2Lrc3c = _r270_t0['$createAndSaveGlyphImpl$'];
        var r270_xn$NamedParameterPair$2Lrc9b = _r270_t0['$NamedParameterPair$'];
        var r270_xn$assignUnicodeImpl$2Lrc8b = _r270_t0['$assignUnicodeImpl$'];
        var r270_xn$execState$2Lrc0b = _r270_t0['$execState$'];
        var _r270_t1 = r270_xn$Capture$2Lrc8.Metrics;
        var r270_Width = _r270_t1.Width;
        var r270_SB = _r270_t1.SB;
        var r270_SymbolMid = _r270_t1.SymbolMid;
        var r270_ParenTop = _r270_t1.ParenTop;
        var r270_ParenBot = _r270_t1.ParenBot;
        var r270_Leftward = _r270_t1.Leftward;
        var r270_O = _r270_t1.O;
        var r270_Hook = _r270_t1.Hook;
        var r270_Stroke = _r270_t1.Stroke;
        var r270_HalfStroke = _r270_t1.HalfStroke;
        var r270_RightSB = _r270_t1.RightSB;
        var r270_Middle = _r270_t1.Middle;
        var r270_ArchDepthA = _r270_t1.ArchDepthA;
        var r270_CorrectionOMidS = _r270_t1.CorrectionOMidS;
        var _r270_t2 = r270_xn$Capture$2Lrc8.SpiroFns;
        var r270_g4 = _r270_t2.g4;
        var r270_corner = _r270_t2.corner;
        var r270_flat = _r270_t2.flat;
        var r270_curl = _r270_t2.curl;
        var r270_widths = _r270_t2.widths;
        var r270_heading = _r270_t2.heading;
        var r270_alsoThru = _r270_t2.alsoThru;
        var r270_arcvh = _r270_t2.arcvh;
        var r270_dispiro = _r270_t2.dispiro;
        var r270_xn$spirooutline$1aao = _r270_t2['spiro-outline'];
        var _r270_t3 = r270_xn$Capture$2Lrc8.BooleFns;
        var r270_union = _r270_t3.union;
        var r270_intersection = _r270_t3.intersection;
        var _r270_t4 = r270_xn$Capture$2Lrc8.CommonShapes.resolve();
        var r270_hookstart = _r270_t4.hookstart;
        var r270_FlipAround = _r270_t4.FlipAround;
        var r270_WithTransform = _r270_t4.WithTransform;
        var r270_MaskAbove = _r270_t4.MaskAbove;
        var _r270_t5 = r270_xn$Capture$2Lrc8['Common-Derivatives'].resolve();
        return r270_xn$createAndSaveGlyphImpl$2Lrc3c('section', 167, function () {
            var _r275_t1;
            var _r275_t0 = this;
            var r275_currentGlyph = _r275_t0;
            var r275_top = r270_ParenTop;
            var r275_bot = r270_ParenBot;
            var r275_ada = r270_ArchDepthA;
            var r275_s = function (r276_sink, r276_offset) {
                var _r276_t0, _r276_t1;
                var r276_sBot = r1_mix(r275_bot, r275_top, 0.32) - r270_Stroke * 0.25;
                return r276_sink(r270_widths.lhs(), r270_g4(r270_RightSB - r276_offset, r275_top - r270_Hook), r270_hookstart(r275_top - r276_offset), r270_g4(r270_SB + r276_offset, r275_top - r275_ada), r270_alsoThru(0.5, 0.5, r270_widths(r270_HalfStroke, r270_HalfStroke)), r270_g4(r270_RightSB - r276_offset, r276_sBot + r275_ada, r270_widths.rhs()), r270_arcvh(), r270_flat(r270_Middle + r270_CorrectionOMidS, r276_sBot + r276_offset + r270_O), (r276_sink === r270_dispiro ? r270_curl : r270_corner)(0, r276_sBot + r276_offset + r270_O, r270_heading(r270_Leftward)), r276_sink === r270_dispiro ? [] : [
                    r270_corner(0, r1_mix(r275_bot, r275_top, 2)),
                    r270_corner(r270_Width, r1_mix(r275_bot, r275_top, 2)),
                    r270_corner(r270_Width, r275_top - r270_Hook - 0.1),
                    r270_corner(r270_RightSB, r275_top - r270_Hook - 0.1)
                ]);
            };
            var r275_halfShape = function () {
                var _r277_t0, _r277_t1;
                return r270_intersection(r275_s(r270_dispiro, 0), r270_union(r270_MaskAbove(r270_SymbolMid), r270_WithTransform(r270_FlipAround(r270_Middle, r270_SymbolMid), r275_s(r270_xn$spirooutline$1aao, 0.1))));
            };
            r275_currentGlyph.include(r270_union(r275_halfShape(), r270_WithTransform(r270_FlipAround(r270_Middle, r270_SymbolMid), r275_halfShape())));
            return void 0;
        });
    });
    return void 0;
});
