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
    r269_xn$Capture_Ext$2Lrc2b['$defineGlyphBlockImpl$'](r269_xn$Capture_Ext$2Lrc2b, 'Letter-Greek-Lower-Omega', function (r270_xn$Capture$2Lrc8, r270_xn$ExportCapture$2Lrc4b) {
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
        var r270_Upward = _r270_t1.Upward;
        var r270_Downward = _r270_t1.Downward;
        var r270_Rightward = _r270_t1.Rightward;
        var r270_Leftward = _r270_t1.Leftward;
        var r270_O = _r270_t1.O;
        var r270_OX = _r270_t1.OX;
        var r270_CThin = _r270_t1.CThin;
        var r270_HalfStroke = _r270_t1.HalfStroke;
        var r270_CorrectionOMidS = _r270_t1.CorrectionOMidS;
        var r270_AdviceStroke = _r270_t1.AdviceStroke;
        var _r270_t2 = r270_xn$Capture$2Lrc8.SpiroFns;
        var r270_g4 = _r270_t2.g4;
        var r270_flat = _r270_t2.flat;
        var r270_curl = _r270_t2.curl;
        var r270_widths = _r270_t2.widths;
        var r270_heading = _r270_t2.heading;
        var r270_archv = _r270_t2.archv;
        var r270_arcvh = _r270_t2.arcvh;
        var r270_dispiro = _r270_t2.dispiro;
        var _r270_t3 = r270_xn$Capture$2Lrc8.BooleFns;
        var r270_union = _r270_t3.union;
        var r270_difference = _r270_t3.difference;
        var _r270_t4 = r270_xn$Capture$2Lrc8.CommonShapes.resolve();
        var r270_HBar = _r270_t4.HBar;
        var r270_MaskAbove = _r270_t4.MaskAbove;
        var _r270_t5 = r270_xn$Capture$2Lrc8['Common-Derivatives'].resolve();
        var r270_alias = _r270_t5.alias;
        var r270_LowerOmegaShape = function (r273_df, r273_top, r273_p1, r273_p2) {
            var _r273_t0, _r273_t1;
            return function () {
                var _r275_t1;
                var _r275_t0 = this;
                var r275_currentGlyph = _r275_t0;
                var r275_fine = r270_AdviceStroke(3, r273_df.div);
                var r275_mfine = r275_fine * r270_CThin;
                var r275_x0 = r1_mix(r273_df.leftSB, r273_df.rightSB, 0.1);
                var r275_y0 = r273_top - r270_O;
                var r275_y1 = r1_mix(0, r273_top, 0.8);
                var r275_x1 = r273_df.leftSB + r270_OX;
                var r275_y3 = r273_top * r273_p1;
                var r275_y4 = r273_top * r273_p2;
                r275_currentGlyph.include(r270_dispiro(r270_widths.lhs(r275_fine), r270_g4(r275_x0, r275_y0), r270_g4(r275_x1, r273_top / 2), r270_arcvh(8), r270_g4(r1_mix(r275_x1, r273_df.middle + r275_fine / 2 * r270_HVContrast, 0.5), r270_O, r270_heading(r270_Rightward)), r270_archv(8), r270_flat(r273_df.middle + (r275_mfine - r275_fine / 2) * r270_HVContrast, r275_y3, r270_widths.heading(r275_mfine, 0, r270_Upward)), r270_curl(r273_df.middle + (r275_mfine - r275_fine / 2) * r270_HVContrast, r275_y4, r270_heading(r270_Upward))));
                r275_currentGlyph.include(r270_dispiro(r270_widths.rhs(r275_fine), r270_g4(r273_df.width - r275_x0, r275_y0), r270_g4(r273_df.width - r275_x1, r273_top / 2), r270_arcvh(8), r270_g4(r1_mix(r273_df.width - r275_x1, r273_df.middle - r275_fine / 2 * r270_HVContrast, 0.5), r270_O, r270_heading(r270_Leftward)), r270_archv(8), r270_flat(r273_df.middle - (r275_mfine - r275_fine / 2) * r270_HVContrast, r275_y3, r270_widths.heading(0, r275_mfine, r270_Upward)), r270_curl(r273_df.middle - (r275_mfine - r275_fine / 2) * r270_HVContrast, r275_y4, r270_heading(r270_Upward))));
                return void 0;
            };
        };
        r270_xn$createAndSaveGlyphImpl$2Lrc3c('grek/omega', 969, function () {
            var _r280_t1;
            var _r280_t0 = this;
            var r280_currentGlyph = _r280_t0;
            var r280_df = r270_DivFrame(r270_para.diversityM, 3);
            r280_currentGlyph.setWidth(r280_df.width);
            r280_currentGlyph.include(r270_DivFrame(r280_df.div).markSet.e());
            r280_currentGlyph.include(r270_LowerOmegaShape(r280_df, r270_XH, 0.5, 0.65));
            return void 0;
        });
        r270_xn$createAndSaveGlyphImpl$2Lrc3c('grek/pomega', 982, function () {
            var _r286_t1;
            var _r286_t0 = this;
            var r286_currentGlyph = _r286_t0;
            var r286_df = r270_DivFrame(r270_para.diversityM, 3);
            r286_currentGlyph.setWidth(r286_df.width);
            r286_currentGlyph.include(r270_DivFrame(r286_df.div).markSet.e());
            r286_currentGlyph.include(r270_union(r270_HBar.m(r286_df.leftSB, r286_df.rightSB, r270_XH - r270_HalfStroke), r270_difference(r270_LowerOmegaShape(r286_df, r270_XH, 0.5, 0.65), r270_MaskAbove(r270_XH))));
            return void 0;
        });
        r270_xn$createAndSaveGlyphImpl$2Lrc3c('closeomega', 631, function () {
            var _r292_t1;
            var _r292_t0 = this;
            var r292_currentGlyph = _r292_t0;
            var r292_df = r270_DivFrame(r270_para.diversityM, 3);
            r292_currentGlyph.setWidth(r292_df.width);
            r292_currentGlyph.include(r270_DivFrame(r292_df.div).markSet.e());
            var r292_fine = r270_AdviceStroke(3);
            var r292_mfine = r292_fine * r270_CThin;
            var r292_x0 = r292_df.middle - r270_CorrectionOMidS;
            var r292_y0 = r270_XH - r270_O;
            var r292_y1 = r1_mix(0, r270_XH, 0.45);
            var r292_x1 = r292_df.leftSB + r270_OX;
            var r292_y3 = r270_XH / 2;
            var r292_y4 = r270_XH * 0.65;
            r292_currentGlyph.include(r270_dispiro(r270_widths.rhs(r292_mfine), r270_flat(r292_df.middle + (r292_mfine - r292_fine / 2) * r270_HVContrast, r292_y4, r270_heading(r270_Downward)), r270_curl(r292_df.middle + (r292_mfine - r292_fine / 2) * r270_HVContrast, r292_y3, r270_heading(r270_Downward)), r270_arcvh(8), r270_g4(r1_mix(r292_x1, r292_df.middle + r292_fine / 2 * r270_HVContrast, 0.5), r270_O, r270_widths.heading(0, r292_fine, r270_Leftward)), r270_archv(8), r270_g4(r292_x1, r292_y1), r270_arcvh(), r270_g4(r292_x0, r292_y0), r270_archv(), r270_g4(r292_df.width - r292_x1, r292_y1), r270_arcvh(8), r270_g4(r1_mix(r292_df.width - r292_x1, r292_df.middle - r292_fine / 2 * r270_HVContrast, 0.5), r270_O, r270_heading(r270_Leftward)), r270_archv(8), r270_flat(r292_df.middle - (r292_mfine - r292_fine / 2) * r270_HVContrast, r292_y3, r270_widths.heading(0, r292_mfine, r270_Upward)), r270_curl(r292_df.middle - (r292_mfine - r292_fine / 2) * r270_HVContrast, r292_y4, r270_heading(r270_Upward))));
            return void 0;
        });
        r270_xn$createAndSaveGlyphImpl$2Lrc3c('latn/Omega', 42934, function () {
            var _r298_t1;
            var _r298_t0 = this;
            var r298_currentGlyph = _r298_t0;
            var r298_df = r270_DivFrame(r270_para.diversityM, 3);
            r298_currentGlyph.setWidth(r298_df.width);
            r298_currentGlyph.include(r270_DivFrame(r298_df.div).markSet.capital());
            r298_currentGlyph.include(r270_LowerOmegaShape(r298_df, r270_CAP, 0.5, 0.65));
            return void 0;
        });
        return r270_alias('latn/omega', 42935, 'grek/omega');
    });
    return void 0;
});
