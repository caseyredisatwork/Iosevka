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
    r269_xn$Capture_Ext$2Lrc2b['$defineGlyphBlockImpl$'](r269_xn$Capture_Ext$2Lrc2b, 'Letter-Cyrillic-Omega', function (r270_xn$Capture$2Lrc8, r270_xn$ExportCapture$2Lrc4b) {
        var _r270_t7, _r270_t8;
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
        var r270_Rightward = _r270_t1.Rightward;
        var r270_Leftward = _r270_t1.Leftward;
        var r270_O = _r270_t1.O;
        var r270_CThin = _r270_t1.CThin;
        var r270_ArchDepthA = _r270_t1.ArchDepthA;
        var r270_ArchDepthB = _r270_t1.ArchDepthB;
        var r270_CorrectionOMidX = _r270_t1.CorrectionOMidX;
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
        var _r270_t4 = r270_xn$Capture$2Lrc8.CommonShapes.resolve();
        var _r270_t5 = r270_xn$Capture$2Lrc8['Common-Derivatives'].resolve();
        var _r270_t6 = r270_xn$Capture$2Lrc8['Letter-Shared'].resolve();
        var r270_CreateAccentedComposition = _r270_t6.CreateAccentedComposition;
        r270_xn$Capture$2Lrc8['Letter-Latin-W'].resolve();
        r270_xn$Capture$2Lrc8['Letter-Cyrillic-Te-Comb'].resolve();
        var r270_CyrlOmegaShape = function (r276_df, r276_top, r276_p1, r276_p2) {
            var _r276_t0, _r276_t1;
            return function () {
                var _r278_t1;
                var _r278_t0 = this;
                var r278_currentGlyph = _r278_t0;
                var r278_fine = r270_AdviceStroke(3, r276_df.div);
                var r278_mfine = r278_fine * r270_CThin;
                var r278_minHookDepth = Math.min(0.625 * (r276_df.middle - r276_df.leftSB - r278_fine * r270_HVContrast), 1 / 3 * (r276_df.rightSB - r276_df.leftSB));
                var r278_xMidBarLeft = r276_df.middle - r278_fine / 2 * r270_HVContrast;
                var r278_xMidBarRight = r276_df.middle + r278_fine / 2 * r270_HVContrast;
                var r278_xMidBarCoLeft = r276_df.middle - (r278_mfine - r278_fine / 2) * r270_HVContrast;
                var r278_xMidBarCoRight = r276_df.middle + (r278_mfine - r278_fine / 2) * r270_HVContrast;
                var r278_y3 = r276_top * r276_p1;
                var r278_y4 = r276_top * r276_p2;
                r278_currentGlyph.include(r270_dispiro(r270_widths.lhs(r278_fine), r270_g4.left.start(Math.max(r1_mix(r276_df.leftSB, r278_xMidBarRight, 0.5), r276_df.leftSB + r278_fine * r270_HVContrast + r278_minHookDepth) - r270_CorrectionOMidX * r278_fine, r276_top), r270_archv(8), r270_flat(r276_df.leftSB, r276_top - r270_ArchDepthA), r270_curl(r276_df.leftSB, r270_ArchDepthB), r270_arcvh(8), r270_g4(r1_mix(r276_df.leftSB, r278_xMidBarRight, 0.5), r270_O, r270_heading(r270_Rightward)), r270_archv(8), r270_flat(r278_xMidBarCoRight, r278_y3, r270_widths.heading(r278_mfine, 0, r270_Upward)), r270_curl(r278_xMidBarCoRight, r278_y4, r270_heading(r270_Upward))));
                r278_currentGlyph.include(r270_dispiro(r270_widths.rhs(r278_fine), r270_g4.right.start(Math.min(r1_mix(r276_df.rightSB, r278_xMidBarLeft, 0.5), r276_df.rightSB - r278_fine * r270_HVContrast - r278_minHookDepth) - r270_CorrectionOMidX * r278_fine, r276_top), r270_archv(8), r270_flat(r276_df.rightSB, r276_top - r270_ArchDepthB), r270_curl(r276_df.rightSB, r270_ArchDepthA), r270_arcvh(8), r270_g4(r1_mix(r276_df.rightSB, r278_xMidBarLeft, 0.5), r270_O, r270_heading(r270_Leftward)), r270_archv(8), r270_flat(r278_xMidBarCoLeft, r278_y3, r270_widths.heading(0, r278_mfine, r270_Upward)), r270_curl(r278_xMidBarCoLeft, r278_y4, r270_heading(r270_Upward))));
                return void 0;
            };
        };
        r270_xn$createAndSaveGlyphImpl$2Lrc3c('cyrl/BroadOmega', 42572, function () {
            var _r283_t1;
            var _r283_t0 = this;
            var r283_currentGlyph = _r283_t0;
            var r283_df = r270_DivFrame(r270_para.diversityM, 3);
            r283_currentGlyph.setWidth(r283_df.width);
            r283_currentGlyph.include(r270_DivFrame(r283_df.div).markSet.capital());
            r283_currentGlyph.include(r270_CyrlOmegaShape(r283_df, r270_CAP, 0.3, 0.31));
            return void 0;
        });
        r270_xn$createAndSaveGlyphImpl$2Lrc3c('cyrl/broadOmega', 42573, function () {
            var _r289_t1;
            var _r289_t0 = this;
            var r289_currentGlyph = _r289_t0;
            var r289_df = r270_DivFrame(r270_para.diversityM, 3);
            r289_currentGlyph.setWidth(r289_df.width);
            r289_currentGlyph.include(r270_DivFrame(r289_df.div).markSet.e());
            r289_currentGlyph.include(r270_CyrlOmegaShape(r289_df, r270_XH, 0.3, 0.31));
            return void 0;
        });
        r270_CreateAccentedComposition('cyrl/Ot', 1150, 'cyrl/Omega', 'cyrl/teAbove');
        return r270_CreateAccentedComposition('cyrl/ot', 1151, 'cyrl/omega', 'cyrl/teAbove');
    });
    return void 0;
});
