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
    r269_xn$Capture_Ext$2Lrc2b['$defineGlyphBlockImpl$'](r269_xn$Capture_Ext$2Lrc2b, 'Letter-Greek-Lower-Gamma', function (r270_xn$Capture$2Lrc8, r270_xn$ExportCapture$2Lrc4b) {
        var _r270_t7, _r270_t8;
        var _r270_t0 = r270_xn$Capture$2Lrc8;
        var r270_xn$createAndSaveGlyphImpl$2Lrc3c = _r270_t0['$createAndSaveGlyphImpl$'];
        var r270_xn$NamedParameterPair$2Lrc9b = _r270_t0['$NamedParameterPair$'];
        var r270_xn$assignUnicodeImpl$2Lrc8b = _r270_t0['$assignUnicodeImpl$'];
        var r270_xn$execState$2Lrc0b = _r270_t0['$execState$'];
        var r270_MarkSet = _r270_t0.MarkSet;
        var _r270_t1 = r270_xn$Capture$2Lrc8.Metrics;
        var r270_SB = _r270_t1.SB;
        var r270_XH = _r270_t1.XH;
        var r270_Descender = _r270_t1.Descender;
        var r270_HVContrast = _r270_t1.HVContrast;
        var r270_Downward = _r270_t1.Downward;
        var r270_O = _r270_t1.O;
        var r270_Stroke = _r270_t1.Stroke;
        var r270_HalfStroke = _r270_t1.HalfStroke;
        var r270_RightSB = _r270_t1.RightSB;
        var _r270_t2 = r270_xn$Capture$2Lrc8.SpiroFns;
        var r270_g4 = _r270_t2.g4;
        var r270_flat = _r270_t2.flat;
        var r270_curl = _r270_t2.curl;
        var r270_widths = _r270_t2.widths;
        var r270_heading = _r270_t2.heading;
        var r270_important = _r270_t2.important;
        var r270_bezControls = _r270_t2.bezControls;
        var r270_quadControls = _r270_t2.quadControls;
        var r270_dispiro = _r270_t2.dispiro;
        var _r270_t3 = r270_xn$Capture$2Lrc8.BooleFns;
        var _r270_t4 = r270_xn$Capture$2Lrc8.CommonShapes.resolve();
        var r270_HBar = _r270_t4.HBar;
        var r270_DiagCorDs = _r270_t4.DiagCorDs;
        var _r270_t5 = r270_xn$Capture$2Lrc8['Common-Derivatives'].resolve();
        var _r270_t6 = r270_xn$Capture$2Lrc8['Letter-Blackboard'].resolve();
        var r270_BBS = _r270_t6.BBS;
        var r270_BBD = _r270_t6.BBD;
        var r270_BBBarLeft = _r270_t6.BBBarLeft;
        r270_xn$createAndSaveGlyphImpl$2Lrc3c('grek/gamma', 947, function () {
            var _r276_t1;
            var _r276_t0 = this;
            var r276_currentGlyph = _r276_t0;
            r276_currentGlyph.include(r270_MarkSet.p());
            var r276_xMid = r1_mix(r270_SB, r270_RightSB, 0.46) + r270_HalfStroke * r270_HVContrast;
            var r276_xStart = r270_SB + 0.4 * r270_Stroke * r270_HVContrast;
            r276_currentGlyph.include(r270_dispiro(r270_g4(r276_xStart, r270_XH - r270_O, r270_widths.rhs()), r270_bezControls(0.33, 0.17, 1, 0.62, 6, r270_important), r270_flat(r276_xMid, 0), r270_curl(r276_xMid, r270_Descender, r270_heading(r270_Downward))));
            r276_currentGlyph.include(r270_dispiro(r270_widths.rhs(), r270_flat(r270_RightSB, r270_XH, r270_heading(r270_Downward)), r270_curl(r270_RightSB, r270_XH * 0.9, r270_heading(r270_Downward)), r270_quadControls(0, 0.3, 6), r270_g4(r276_xMid, 0, r270_widths.rhs(r270_Stroke * 0.9))));
            return void 0;
        });
        return r270_xn$createAndSaveGlyphImpl$2Lrc3c('mathbb/grek/gamma', 8509, function () {
            var r282_ob, r282_ot, _r282_t3, _r282_t5;
            var _r282_t4 = this;
            var r282_currentGlyph = _r282_t4;
            r282_currentGlyph.include(r270_MarkSet.p());
            var r282_cor = r270_DiagCorDs(r270_XH - r270_Descender, r270_RightSB - r270_SB, r270_BBD);
            var r282_swEqv = 2 * r270_BBS + r270_BBD;
            var r282_xMid = r1_mix(r270_SB, r270_RightSB, 0.46) + 0.46 * r282_swEqv * r270_HVContrast;
            var r282_xStart = r270_SB + 0.4 * r282_swEqv * r270_HVContrast;
            r282_currentGlyph.include(r270_HBar.t(r282_xStart - r270_BBD, r282_xStart + (r282_cor - 1) * r270_BBD, r270_XH, r270_BBS));
            r282_currentGlyph.include(r270_HBar.b(r282_xMid - r270_BBD, r282_xMid, r270_Descender, r270_BBS));
            var _r282_t0 = [
                [
                    0,
                    r282_cor - 1
                ],
                [
                    -1,
                    -1
                ]
            ];
            var _r282_t1 = _r282_t0.length;
            var _r282_t2 = 0;
            while (_r282_t2 < _r282_t1) {
                _r282_t3 = _r282_t0[_r282_t2];
                r282_ob = _r282_t3[0];
                r282_ot = _r282_t3[1];
                r282_currentGlyph.include(r270_dispiro(r270_g4(r282_xStart + r282_ot * r270_BBD, r270_XH, r270_widths.rhs.heading(r270_BBS, r270_Downward)), r270_bezControls(0.33, 0.17, 1, 0.62, 6, r270_important), r270_flat(r282_xMid + r282_ob * r270_BBD, 0), r270_curl(r282_xMid + r282_ob * r270_BBD, r270_Descender, r270_heading(r270_Downward))));
                _r282_t2 = _r282_t2 + 1;
            }
            r282_currentGlyph.include(r270_dispiro(r270_widths.rhs(r270_BBS), r270_flat(r270_RightSB, r270_XH, r270_heading(r270_Downward)), r270_curl(r270_RightSB, r270_XH * 0.9, r270_heading(r270_Downward)), r270_quadControls(0, 0.3, 6), r270_g4(r282_xMid, 0, r270_widths.rhs(r270_BBS * 0.9))));
            return void 0;
        });
    });
    return void 0;
});
