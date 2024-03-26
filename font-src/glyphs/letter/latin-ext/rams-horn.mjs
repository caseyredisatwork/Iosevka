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
    r270_xn$Capture_Ext$2Lrc2b['$defineGlyphBlockImpl$'](r270_xn$Capture_Ext$2Lrc2b, 'Letter-Latin-Rams-Horn', function (r271_xn$Capture$2Lrc8, r271_xn$ExportCapture$2Lrc4b) {
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
        var r271_TanSlope = _r271_t1.TanSlope;
        var r271_HVContrast = _r271_t1.HVContrast;
        var r271_Upward = _r271_t1.Upward;
        var r271_Downward = _r271_t1.Downward;
        var r271_Rightward = _r271_t1.Rightward;
        var r271_O = _r271_t1.O;
        var r271_Stroke = _r271_t1.Stroke;
        var r271_VJut = _r271_t1.VJut;
        var r271_SLAB = _r271_t1.SLAB;
        var r271_HalfStroke = _r271_t1.HalfStroke;
        var r271_RightSB = _r271_t1.RightSB;
        var r271_Middle = _r271_t1.Middle;
        var r271_CorrectionOMidX = _r271_t1.CorrectionOMidX;
        var r271_AdviceStroke = _r271_t1.AdviceStroke;
        var _r271_t2 = r271_xn$Capture$2Lrc8.SpiroFns;
        var r271_g4 = _r271_t2.g4;
        var r271_corner = _r271_t2.corner;
        var r271_close = _r271_t2.close;
        var r271_end = _r271_t2.end;
        var r271_straight = _r271_t2.straight;
        var r271_widths = _r271_t2.widths;
        var r271_heading = _r271_t2.heading;
        var r271_quadControls = _r271_t2.quadControls;
        var r271_archv = _r271_t2.archv;
        var r271_arcvh = _r271_t2.arcvh;
        var r271_dispiro = _r271_t2.dispiro;
        var r271_xn$spirooutline$1aao = _r271_t2['spiro-outline'];
        var _r271_t3 = r271_xn$Capture$2Lrc8.BooleFns;
        var r271_union = _r271_t3.union;
        var _r271_t4 = r271_xn$Capture$2Lrc8.CommonShapes.resolve();
        var r271_xn$noshape$3cah = _r271_t4['no-shape'];
        var r271_VSerif = _r271_t4.VSerif;
        var r271_FlipAround = _r271_t4.FlipAround;
        var _r271_t5 = r271_xn$Capture$2Lrc8['Common-Derivatives'].resolve();
        var _r271_t6 = r271_xn$Capture$2Lrc8['Letter-Shared-Shapes'].resolve();
        var r271_SerifFrame = _r271_t6.SerifFrame;
        var r271_LatinGammaShape = function (r275_bottom, r275_top) {
            var _r275_t0, _r275_t1;
            return function () {
                var _r277_t1;
                var _r277_t0 = this;
                var r277_currentGlyph = _r277_t0;
                var r277_hf = r271_AdviceStroke(4) / 2;
                var r277_d = r277_hf * 2 + r271_Width * 0.05;
                r277_currentGlyph.include(r271_dispiro(r271_widths.center(), r271_g4(r271_SB + r271_HalfStroke * r271_HVContrast + r271_O, r275_top, r271_heading(r271_Downward)), r271_quadControls(1, 0.7, 16), r271_g4(r271_Middle + r277_d - r277_hf, r275_bottom + r277_d * (1 - r271_TanSlope * 0.5), r271_widths(r277_hf, r277_hf)), r271_arcvh(), r271_g4(r271_Middle + r271_CorrectionOMidX * r277_hf * 2, r275_bottom + r277_hf), r271_archv(), r271_g4(r271_Middle - r277_d + r277_hf, r275_bottom + r277_d * (1 + r271_TanSlope * 0.5)), r271_quadControls(0, 0.3, 16), r271_g4(r271_RightSB - r271_HalfStroke * r271_HVContrast - r271_O, r275_top, r271_widths.heading(r271_HalfStroke, r271_HalfStroke, r271_Upward))));
                return void 0;
            };
        };
        r271_xn$createAndSaveGlyphImpl$2Lrc3c('latn/gamma', 611, function () {
            var r281_sf, _r281_t1;
            var _r281_t0 = this;
            var r281_currentGlyph = _r281_t0;
            r281_currentGlyph.include(r271_MarkSet.p());
            r281_currentGlyph.include(r271_LatinGammaShape(r271_Descender, r271_XH));
            if (r271_SLAB) {
                r281_sf = r271_SerifFrame.fromDf(r271_DivFrame(1), r271_XH, r271_Descender);
                r281_currentGlyph.include(function () {
                    var _r286_t1;
                    var _r286_t0 = this;
                    var r286_currentGlyph = _r286_t0;
                    r286_currentGlyph.include(r281_sf.lt.full, true, true);
                    r286_currentGlyph.include(r281_sf.rt.full);
                    return void 0;
                });
            }
            return void 0;
        });
        r271_xn$createAndSaveGlyphImpl$2Lrc3c('latn/Gamma', 404, function () {
            var r291_sf, _r291_t1;
            var _r291_t0 = this;
            var r291_currentGlyph = _r291_t0;
            r291_currentGlyph.include(r271_MarkSet.capDesc());
            r291_currentGlyph.include(r271_LatinGammaShape(r271_Descender, r271_CAP));
            if (r271_SLAB) {
                r291_sf = r271_SerifFrame.fromDf(r271_DivFrame(1), r271_CAP, r271_Descender);
                r291_currentGlyph.include(function () {
                    var _r296_t1;
                    var _r296_t0 = this;
                    var r296_currentGlyph = _r296_t0;
                    r296_currentGlyph.include(r291_sf.lt.full, true, true);
                    r296_currentGlyph.include(r291_sf.rt.full);
                    return void 0;
                });
            }
            return void 0;
        });
        var r271_RamsHornShape = function (r299_fFill, r299_bottom, r299_top) {
            var _r299_t0, _r299_t1;
            return function () {
                var _r301_t1;
                var _r301_t0 = this;
                var r301_currentGlyph = _r301_t0;
                var r301_k1 = 0.625;
                var r301_k2 = 0.7;
                var r301_kIntersection = 0.15;
                var r301_d = 0.25 * (r271_RightSB - r271_SB) * r301_k1 * r271_TanSlope;
                var r301_sw = r271_AdviceStroke(r271_SLAB ? 3 : 2.75);
                var r301_fine = r271_AdviceStroke(r271_SLAB ? 3.75 : 3.5);
                var r301_coFine = r1_mix(r301_sw, r301_fine, r301_kIntersection / r301_k2);
                var r301_fillOffset = r301_sw * 0.25;
                r301_currentGlyph.include(r271_union(r271_dispiro(r271_widths.rhs(r301_sw), r271_straight.right.start(r271_SB, r299_top, r271_heading(r271_Rightward)), r271_g4(r271_Middle, r1_mix(r299_top, r299_bottom, r301_kIntersection), r271_widths.rhs(r301_coFine)), r271_g4.down.mid(r1_mix(r271_Middle, r271_RightSB, r301_k1), r1_mix(r299_top, r299_bottom, r301_k2) - r301_d, r271_widths.rhs(r301_fine)), r271_arcvh(), r271_g4.left.mid(r271_Middle + r271_CorrectionOMidX * r301_fine, r299_bottom + r271_O), r271_archv(), r271_g4.up.mid(r1_mix(r271_Middle, r271_SB, r301_k1), r1_mix(r299_top, r299_bottom, r301_k2) + r301_d), r271_g4(r271_Middle, r1_mix(r299_top, r299_bottom, r301_kIntersection), r271_widths.rhs(r301_coFine)), r271_straight.right.end(r271_RightSB, r299_top, r271_widths.rhs.heading(r301_sw, r271_Rightward))), r299_fFill ? r271_xn$spirooutline$1aao(r271_corner(r271_Middle, r1_mix(r299_top, r299_bottom, r301_kIntersection) - r301_fillOffset), r271_g4.down.mid(r1_mix(r271_Middle, r271_RightSB, r301_k1) - r301_fillOffset, r1_mix(r299_top, r299_bottom, r301_k2) - r301_d), r271_g4.left.mid(r271_Middle + r271_CorrectionOMidX * r301_fine, r299_bottom + r301_fillOffset), r271_g4.up.mid(r1_mix(r271_Middle, r271_SB, r301_k1) + r301_fillOffset, r1_mix(r299_top, r299_bottom, r301_k2) + r301_d), r271_close()) : r271_xn$noshape$3cah()));
                if (r271_SLAB) {
                    r301_currentGlyph.include(r271_VSerif.dl(r271_SB, r299_top - r301_sw, r271_VJut * (r301_sw / r271_Stroke) - r301_sw, r301_fine));
                    r301_currentGlyph.include(r271_VSerif.dr(r271_RightSB, r299_top - r301_sw, r271_VJut * (r301_sw / r271_Stroke) - r301_sw, r301_fine));
                }
                return void 0;
            };
        };
        r271_xn$createAndSaveGlyphImpl$2Lrc3c('ramshorn', 612, function () {
            var _r307_t1;
            var _r307_t0 = this;
            var r307_currentGlyph = _r307_t0;
            r307_currentGlyph.include(r271_MarkSet.e());
            r307_currentGlyph.include(r271_RamsHornShape(false, 0, r271_XH));
            return void 0;
        });
        return r271_xn$createAndSaveGlyphImpl$2Lrc3c('latinAyin', 7461, function () {
            var _r312_t1;
            var _r312_t0 = this;
            var r312_currentGlyph = _r312_t0;
            r312_currentGlyph.include(r271_MarkSet.e());
            r312_currentGlyph.include(r271_RamsHornShape(true, 0, r271_XH));
            r312_currentGlyph.include(r271_FlipAround(r271_Middle, r271_XH / 2));
            return void 0;
        });
    });
    return void 0;
});
