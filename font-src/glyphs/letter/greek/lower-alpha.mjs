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
    r269_xn$Capture_Ext$2Lrc2b['$defineGlyphBlockImpl$'](r269_xn$Capture_Ext$2Lrc2b, 'Letter-Greek-Lower-Alpha', function (r270_xn$Capture$2Lrc8, r270_xn$ExportCapture$2Lrc4b) {
        var _r270_t6, _r270_t7;
        var _r270_t0 = r270_xn$Capture$2Lrc8;
        var r270_xn$createAndSaveGlyphImpl$2Lrc3c = _r270_t0['$createAndSaveGlyphImpl$'];
        var r270_xn$NamedParameterPair$2Lrc9b = _r270_t0['$NamedParameterPair$'];
        var r270_xn$assignUnicodeImpl$2Lrc8b = _r270_t0['$assignUnicodeImpl$'];
        var r270_xn$execState$2Lrc0b = _r270_t0['$execState$'];
        var r270_MarkSet = _r270_t0.MarkSet;
        var _r270_t1 = r270_xn$Capture$2Lrc8.Metrics;
        var r270_SB = _r270_t1.SB;
        var r270_XH = _r270_t1.XH;
        var r270_Downward = _r270_t1.Downward;
        var r270_O = _r270_t1.O;
        var r270_OX = _r270_t1.OX;
        var r270_Stroke = _r270_t1.Stroke;
        var r270_OverlayPos = _r270_t1.OverlayPos;
        var r270_RightSB = _r270_t1.RightSB;
        var r270_SmallArchDepthA = _r270_t1.SmallArchDepthA;
        var r270_SmallArchDepthB = _r270_t1.SmallArchDepthB;
        var r270_CorrectionOMidS = _r270_t1.CorrectionOMidS;
        var r270_AdviceStroke = _r270_t1.AdviceStroke;
        var _r270_t2 = r270_xn$Capture$2Lrc8.SpiroFns;
        var r270_g4 = _r270_t2.g4;
        var r270_flat = _r270_t2.flat;
        var r270_curl = _r270_t2.curl;
        var r270_widths = _r270_t2.widths;
        var r270_heading = _r270_t2.heading;
        var r270_bezControls = _r270_t2.bezControls;
        var r270_archv = _r270_t2.archv;
        var r270_arcvh = _r270_t2.arcvh;
        var r270_dispiro = _r270_t2.dispiro;
        var _r270_t3 = r270_xn$Capture$2Lrc8.BooleFns;
        var _r270_t4 = r270_xn$Capture$2Lrc8.CommonShapes.resolve();
        var _r270_t5 = r270_xn$Capture$2Lrc8['Common-Derivatives'].resolve();
        var r270_xn$selectvariant$7Hrq = _r270_t5['select-variant'];
        var r270_alias = _r270_t5.alias;
        r270_xn$createAndSaveGlyphImpl$2Lrc3c('grek/alpha.crossing', null, function () {
            var _r275_t1;
            var _r275_t0 = this;
            var r275_currentGlyph = _r275_t0;
            r275_currentGlyph.include(r270_MarkSet.e());
            var r275_middle = r1_mix(r270_SB, r270_RightSB, 0.42);
            var r275_fine = r270_AdviceStroke(3.25);
            var r275_k1 = 0.25;
            var r275_k2 = 0.5;
            var r275_k3 = 0.35;
            r275_currentGlyph.include(r270_dispiro(r270_widths.rhs(r275_fine), r270_g4(r270_RightSB - r270_OX * 1.75, r270_XH, r270_heading(r270_Downward)), r270_bezControls(r275_k1, r275_k2, r275_k3, 1, 6), r270_g4.left.mid(r275_middle + r270_CorrectionOMidS, r270_O, r270_widths(0, r270_Stroke)), r270_archv(), r270_flat(r270_SB + r270_OX * 2, r270_SmallArchDepthB), r270_curl(r270_SB + r270_OX * 2, r270_XH - r270_SmallArchDepthA), r270_arcvh(), r270_g4.right.mid(r275_middle - r270_CorrectionOMidS, r270_XH - r270_O, r270_widths(0, r270_Stroke)), r270_bezControls(1 - r275_k3, 0, 1 - r275_k1, 1 - r275_k2, 6), r270_g4(r270_RightSB - r270_OX * 2, 0, r270_widths.heading(0, r275_fine, r270_Downward))));
            r275_currentGlyph.setBaseAnchor('overlay', r275_middle - r270_OX, r270_XH * r270_OverlayPos);
            return void 0;
        });
        r270_alias('grek/alpha.barred', null, 'a.singleStoreySerifless');
        r270_alias('grek/alpha.tailedBarred', null, 'a.singleStoreyTailed');
        r270_alias('grek/alpha.barredEarlessCorner', null, 'a.singleStoreyEarlessCornerSerifless');
        r270_alias('grek/alpha.tailedBarredEarlessCorner', null, 'a.singleStoreyEarlessCornerTailed');
        return r270_xn$selectvariant$7Hrq('grek/alpha', 945);
    });
    return void 0;
});
