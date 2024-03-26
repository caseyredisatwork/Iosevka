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
    r269_xn$Capture_Ext$2Lrc2b['$defineGlyphBlockImpl$'](r269_xn$Capture_Ext$2Lrc2b, 'Letter-Cyrillic-Abkhasian-Ha', function (r270_xn$Capture$2Lrc8, r270_xn$ExportCapture$2Lrc4b) {
        var _r270_t6, _r270_t7;
        var _r270_t0 = r270_xn$Capture$2Lrc8;
        var r270_xn$createAndSaveGlyphImpl$2Lrc3c = _r270_t0['$createAndSaveGlyphImpl$'];
        var r270_xn$NamedParameterPair$2Lrc9b = _r270_t0['$NamedParameterPair$'];
        var r270_xn$assignUnicodeImpl$2Lrc8b = _r270_t0['$assignUnicodeImpl$'];
        var r270_xn$execState$2Lrc0b = _r270_t0['$execState$'];
        var r270_para = _r270_t0.para;
        var r270_DivFrame = _r270_t0.DivFrame;
        var _r270_t1 = r270_xn$Capture$2Lrc8.Metrics;
        var r270_CAP = _r270_t1.CAP;
        var r270_XH = _r270_t1.XH;
        var r270_HVContrast = _r270_t1.HVContrast;
        var r270_O = _r270_t1.O;
        var r270_OX = _r270_t1.OX;
        var r270_ArchDepth = _r270_t1.ArchDepth;
        var r270_SmallArchDepth = _r270_t1.SmallArchDepth;
        var r270_CorrectionOMidX = _r270_t1.CorrectionOMidX;
        var r270_ArchDepthAOf = _r270_t1.ArchDepthAOf;
        var r270_ArchDepthBOf = _r270_t1.ArchDepthBOf;
        var r270_YSmoothMidR = _r270_t1.YSmoothMidR;
        var r270_YSmoothMidL = _r270_t1.YSmoothMidL;
        var _r270_t2 = r270_xn$Capture$2Lrc8.SpiroFns;
        var r270_g4 = _r270_t2.g4;
        var r270_flat = _r270_t2.flat;
        var r270_curl = _r270_t2.curl;
        var r270_straight = _r270_t2.straight;
        var r270_widths = _r270_t2.widths;
        var r270_archv = _r270_t2.archv;
        var r270_arcvh = _r270_t2.arcvh;
        var r270_dispiro = _r270_t2.dispiro;
        var _r270_t3 = r270_xn$Capture$2Lrc8.BooleFns;
        var _r270_t4 = r270_xn$Capture$2Lrc8.CommonShapes.resolve();
        var _r270_t5 = r270_xn$Capture$2Lrc8['Common-Derivatives'].resolve();
        var r270_CyrlAbkHaShape = function (r273_df, r273_top, r273_sm) {
            var _r273_t0, _r273_t1;
            var r273_ada = r270_ArchDepthAOf(r273_sm, r273_df.width);
            var r273_adb = r270_ArchDepthBOf(r273_sm, r273_df.width);
            var r273_ada2 = r270_ArchDepthAOf(0.625 * r273_sm, r273_df.width);
            var r273_adb2 = r270_ArchDepthBOf(0.625 * r273_sm, r273_df.width);
            var r273_xm = r273_df.middle - 0.5 * r270_HVContrast * r273_df.mvs;
            var r273_y2 = r273_top * 0.75;
            return r270_dispiro(r270_g4.left.start(r273_df.middle - r270_CorrectionOMidX * r273_df.mvs, r273_top - r270_O, r270_widths.lhs(r273_df.mvs)), r270_archv(), r270_flat(r273_df.leftSB + r270_OX, r273_top - r273_ada), r270_curl(r273_df.leftSB + r270_OX, r273_adb), r270_arcvh(), r270_g4(r273_df.middle + r270_CorrectionOMidX * r273_df.mvs, r270_O), r270_archv(), r270_straight.up.mid(r273_df.rightSB - r270_OX, r270_YSmoothMidR(r273_y2 + r273_df.mvs / 2, 0, r273_ada2, r273_adb2)), r270_arcvh(), r270_g4(r1_mix(r273_xm, r273_df.rightSB, 0.5) - r270_CorrectionOMidX * r273_df.mvs, r273_y2), r270_archv(), r270_straight.down.mid(r273_xm, r270_YSmoothMidL(r273_y2 + r273_df.mvs / 2, 0, r273_ada2, r273_adb2)), r270_arcvh(), r270_g4(r273_df.rightSB - r270_O, r270_O));
        };
        r270_xn$createAndSaveGlyphImpl$2Lrc3c('cyrl/abk/Ha', 1192, function () {
            var _r276_t1;
            var _r276_t0 = this;
            var r276_currentGlyph = _r276_t0;
            var r276_df = r270_DivFrame(r270_para.diversityM, 3);
            r276_currentGlyph.setWidth(r276_df.width);
            r276_currentGlyph.include(r276_df.markSet.capital());
            r276_currentGlyph.include(r270_CyrlAbkHaShape(r276_df, r270_CAP, r270_ArchDepth));
            return void 0;
        });
        return r270_xn$createAndSaveGlyphImpl$2Lrc3c('cyrl/abk/ha', 1193, function () {
            var _r282_t1;
            var _r282_t0 = this;
            var r282_currentGlyph = _r282_t0;
            var r282_df = r270_DivFrame(r270_para.diversityM, 3);
            r282_currentGlyph.setWidth(r282_df.width);
            r282_currentGlyph.include(r282_df.markSet.e());
            r282_currentGlyph.include(r270_CyrlAbkHaShape(r282_df, r270_XH, r270_SmallArchDepth));
            return void 0;
        });
    });
    return void 0;
});
