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
    r269_xn$Capture_Ext$2Lrc2b['$defineGlyphBlockImpl$'](r269_xn$Capture_Ext$2Lrc2b, 'Letter-Cyrillic-Tshe', function (r270_xn$Capture$2Lrc8, r270_xn$ExportCapture$2Lrc4b) {
        var _r270_t7, _r270_t8;
        var _r270_t0 = r270_xn$Capture$2Lrc8;
        var r270_xn$createAndSaveGlyphImpl$2Lrc3c = _r270_t0['$createAndSaveGlyphImpl$'];
        var r270_xn$NamedParameterPair$2Lrc9b = _r270_t0['$NamedParameterPair$'];
        var r270_xn$assignUnicodeImpl$2Lrc8b = _r270_t0['$assignUnicodeImpl$'];
        var r270_xn$execState$2Lrc0b = _r270_t0['$execState$'];
        var r270_MarkSet = _r270_t0.MarkSet;
        var _r270_t1 = r270_xn$Capture$2Lrc8.Metrics;
        var r270_SB = _r270_t1.SB;
        var r270_CAP = _r270_t1.CAP;
        var r270_XH = _r270_t1.XH;
        var r270_HVContrast = _r270_t1.HVContrast;
        var r270_Rightward = _r270_t1.Rightward;
        var r270_OX = _r270_t1.OX;
        var r270_Jut = _r270_t1.Jut;
        var r270_VJut = _r270_t1.VJut;
        var r270_SLAB = _r270_t1.SLAB;
        var r270_RightSB = _r270_t1.RightSB;
        var r270_SideJut = _r270_t1.SideJut;
        var r270_AdviceStroke = _r270_t1.AdviceStroke;
        var _r270_t2 = r270_xn$Capture$2Lrc8.SpiroFns;
        var r270_flat = _r270_t2.flat;
        var r270_curl = _r270_t2.curl;
        var r270_widths = _r270_t2.widths;
        var r270_heading = _r270_t2.heading;
        var r270_dispiro = _r270_t2.dispiro;
        var _r270_t3 = r270_xn$Capture$2Lrc8.BooleFns;
        var _r270_t4 = r270_xn$Capture$2Lrc8.CommonShapes.resolve();
        var r270_HSerif = _r270_t4.HSerif;
        var r270_VSerif = _r270_t4.VSerif;
        var r270_VBar = _r270_t4.VBar;
        var _r270_t5 = r270_xn$Capture$2Lrc8['Common-Derivatives'].resolve();
        var _r270_t6 = r270_xn$Capture$2Lrc8['Letter-Shared-Shapes'].resolve();
        var r270_nShoulder = _r270_t6.nShoulder;
        return r270_xn$createAndSaveGlyphImpl$2Lrc3c('cyrl/Tshe', 1035, function () {
            var r276_swVJut, _r276_t1;
            var _r276_t0 = this;
            var r276_currentGlyph = _r276_t0;
            r276_currentGlyph.include(r270_MarkSet.capital());
            var r276_sw = r270_AdviceStroke(2.75);
            var r276_left = r1_mix(r270_SB, r270_RightSB, 0.2) + r270_OX;
            var r276_right = r270_RightSB - r270_OX;
            var r276_xTopBarLeft = r270_SB - r270_SideJut;
            var r276_xTopBarRightSym = 2 * r276_left + r270_HVContrast * r276_sw - r276_xTopBarLeft;
            var r276_xTopBarRight = Math.max(r276_xTopBarRightSym, r1_mix(r276_left, r270_RightSB, 0.475));
            r276_currentGlyph.include(r270_nShoulder(new r270_xn$NamedParameterPair$2Lrc9b('left', r276_left + r276_sw * r270_HVContrast), new r270_xn$NamedParameterPair$2Lrc9b('right', r276_right), new r270_xn$NamedParameterPair$2Lrc9b('top', Math.min(r270_XH, r270_SLAB ? r270_CAP - 1.25 * r270_VJut : r270_XH)), new r270_xn$NamedParameterPair$2Lrc9b('stroke', r276_sw)));
            r276_currentGlyph.include(r270_VBar.l(r276_left, 0, r270_CAP, r276_sw));
            r276_currentGlyph.include(r270_dispiro(r270_widths.rhs(r276_sw), r270_flat(r276_xTopBarLeft, r270_CAP, r270_SLAB ? r270_heading(r270_Rightward) : null), r270_curl(r276_xTopBarRight, r270_CAP, r270_SLAB ? r270_heading(r270_Rightward) : null)));
            if (r270_SLAB) {
                r276_swVJut = Math.min(r270_AdviceStroke(4.5), 0.625 * (r276_left - r276_xTopBarLeft));
                r276_currentGlyph.include(r270_HSerif.mb(r276_left + 0.5 * r270_HVContrast * r276_sw, 0, r270_Jut));
                r276_currentGlyph.include(r270_HSerif.mb(r276_right - 0.5 * r270_HVContrast * r276_sw, 0, r270_Jut));
                r276_currentGlyph.include(r270_VSerif.dl(r276_xTopBarLeft, r270_CAP, r270_VJut, r276_swVJut));
                r276_currentGlyph.include(r270_VSerif.dr(r276_xTopBarRight, r270_CAP, r270_VJut, r276_swVJut));
            }
            return void 0;
        });
    });
    return void 0;
});
