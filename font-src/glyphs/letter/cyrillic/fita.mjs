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
    r269_xn$Capture_Ext$2Lrc2b['$defineGlyphBlockImpl$'](r269_xn$Capture_Ext$2Lrc2b, 'Letter-Cyrillic-Fita', function (r270_xn$Capture$2Lrc8, r270_xn$ExportCapture$2Lrc4b) {
        var _r270_t6, _r270_t7;
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
        var r270_RightSB = _r270_t1.RightSB;
        var r270_Middle = _r270_t1.Middle;
        var r270_ArchDepthA = _r270_t1.ArchDepthA;
        var r270_ArchDepthB = _r270_t1.ArchDepthB;
        var r270_SmallArchDepthA = _r270_t1.SmallArchDepthA;
        var r270_AdviceStroke2 = _r270_t1.AdviceStroke2;
        var _r270_t2 = r270_xn$Capture$2Lrc8.SpiroFns;
        var r270_g4 = _r270_t2.g4;
        var r270_widths = _r270_t2.widths;
        var r270_dispiro = _r270_t2.dispiro;
        var _r270_t3 = r270_xn$Capture$2Lrc8.BooleFns;
        var r270_union = _r270_t3.union;
        var r270_intersection = _r270_t3.intersection;
        var _r270_t4 = r270_xn$Capture$2Lrc8.CommonShapes.resolve();
        var r270_OShape = _r270_t4.OShape;
        var r270_OShapeOutline = _r270_t4.OShapeOutline;
        var _r270_t5 = r270_xn$Capture$2Lrc8['Common-Derivatives'].resolve();
        var r270_FitaWave = r270_XH / 16;
        var r270_FitaLeft = function (r273_sw) {
            var _r273_t0, _r273_t1;
            return r270_SB + r273_sw / 2 * r270_HVContrast;
        };
        var r270_FitaRight = function (r274_sw) {
            var _r274_t0, _r274_t1;
            return r270_RightSB - r274_sw / 2 * r270_HVContrast;
        };
        var r270_FitaCrossbar = function (r275_y, r275_sw, r275_swc) {
            var _r275_t0, _r275_t1;
            return r270_dispiro(r270_widths.center(r275_swc), r270_g4.right.mid(r1_mix(r270_FitaLeft(r275_sw), r270_Middle, -1), r275_y), r270_g4.right.mid(r1_mix(r270_FitaLeft(r275_sw), r270_Middle, -0.5), r275_y - r270_FitaWave), r270_g4(r270_FitaLeft(r275_sw), r275_y), r270_g4.right.mid(r1_mix(r270_FitaLeft(r275_sw), r270_Middle, 0.5), r275_y + r270_FitaWave), r270_g4(r270_Middle, r275_y), r270_g4.right.mid(r1_mix(r270_FitaRight(r275_sw), r270_Middle, 0.5), r275_y - r270_FitaWave), r270_g4(r270_FitaRight(r275_sw), r275_y), r270_g4.right.mid(r1_mix(r270_FitaRight(r275_sw), r270_Middle, -0.5), r275_y + r270_FitaWave), r270_g4.right.mid(r1_mix(r270_FitaRight(r275_sw), r270_Middle, -1), r275_y));
        };
        r270_xn$createAndSaveGlyphImpl$2Lrc3c('cyrl/Fita', 1138, function () {
            var _r278_t1;
            var _r278_t0 = this;
            var r278_currentGlyph = _r278_t0;
            var r278_sw = r270_AdviceStroke2(2, 3, r270_CAP);
            var r278_swc = Math.min(r270_FitaWave * 2, r270_AdviceStroke2(3, 4, r270_CAP));
            r278_currentGlyph.include(r270_MarkSet.capital());
            r278_currentGlyph.include(r270_union(r270_OShape(r270_CAP, 0, r270_SB, r270_RightSB, r278_sw, r270_ArchDepthA, r270_ArchDepthB), r270_intersection(r270_OShapeOutline.NoOvershoot(r270_CAP, 0, r270_SB, r270_RightSB, r278_sw, r270_ArchDepthA, r270_ArchDepthB), r270_FitaCrossbar(r270_CAP / 2, r278_sw, r278_swc))));
            return void 0;
        });
        return r270_xn$createAndSaveGlyphImpl$2Lrc3c('cyrl/fita', 1139, function () {
            var _r283_t1;
            var _r283_t0 = this;
            var r283_currentGlyph = _r283_t0;
            var r283_sw = r270_AdviceStroke2(2, 3, r270_XH);
            var r283_swc = Math.min(r270_FitaWave * 2, r270_AdviceStroke2(3, 4, r270_XH));
            r283_currentGlyph.include(r270_MarkSet.e());
            r283_currentGlyph.include(r270_union(r270_OShape(r270_XH, 0, r270_SB, r270_RightSB, r283_sw, r270_SmallArchDepthA, r270_SmallArchDepthA), r270_intersection(r270_OShapeOutline.NoOvershoot(r270_XH, 0, r270_SB, r270_RightSB, r283_sw, r270_SmallArchDepthA, r270_SmallArchDepthA), r270_FitaCrossbar(r270_XH / 2, r283_sw, r283_swc))));
            return void 0;
        });
    });
    return void 0;
});
