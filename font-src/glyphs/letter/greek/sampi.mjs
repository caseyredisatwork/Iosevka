'use strict';
import * as _s0_t0 from '../../../support/utils.mjs';
import * as _s0_t1 from '../../../meta/aesthetics.mjs';
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
var r1_DesignParameters = _r1_t9.DesignParameters;
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
    r270_xn$Capture_Ext$2Lrc2b['$defineGlyphBlockImpl$'](r270_xn$Capture_Ext$2Lrc2b, 'Letter-Greek-Arachaic-Sampi', function (r271_xn$Capture$2Lrc8, r271_xn$ExportCapture$2Lrc4b) {
        var _r271_t5, _r271_t6;
        var _r271_t0 = r271_xn$Capture$2Lrc8;
        var r271_xn$createAndSaveGlyphImpl$2Lrc3c = _r271_t0['$createAndSaveGlyphImpl$'];
        var r271_xn$NamedParameterPair$2Lrc9b = _r271_t0['$NamedParameterPair$'];
        var r271_xn$assignUnicodeImpl$2Lrc8b = _r271_t0['$assignUnicodeImpl$'];
        var r271_xn$execState$2Lrc0b = _r271_t0['$execState$'];
        var r271_para = _r271_t0.para;
        var r271_DivFrame = _r271_t0.DivFrame;
        var _r271_t1 = r271_xn$Capture$2Lrc8.Metrics;
        var r271_CAP = _r271_t1.CAP;
        var r271_XH = _r271_t1.XH;
        var r271_Descender = _r271_t1.Descender;
        var r271_Stroke = _r271_t1.Stroke;
        var r271_SLAB = _r271_t1.SLAB;
        var r271_MidJutSide = _r271_t1.MidJutSide;
        var _r271_t2 = r271_xn$Capture$2Lrc8.SpiroFns;
        var _r271_t3 = r271_xn$Capture$2Lrc8.BooleFns;
        var _r271_t4 = r271_xn$Capture$2Lrc8.CommonShapes.resolve();
        var r271_HSerif = _r271_t4.HSerif;
        var r271_HBar = _r271_t4.HBar;
        var r271_VBar = _r271_t4.VBar;
        var r271_KSampiDepth = 0.45;
        var r271_SampiShape = function (r273_df, r273_top, r273_bottom, r273_fDoSerifs) {
            var _r273_t0, _r273_t1;
            return function () {
                var _r275_t1;
                var _r275_t0 = this;
                var r275_currentGlyph = _r275_t0;
                r275_currentGlyph.include(r271_VBar.l(r273_df.leftSB, r273_top, r1_mix(r273_top - r271_Stroke, r273_bottom, r271_KSampiDepth), r273_df.mvs));
                r275_currentGlyph.include(r271_VBar.r(r273_df.rightSB, r273_top, r1_mix(r273_top - r271_Stroke, r273_bottom, r271_KSampiDepth), r273_df.mvs));
                r275_currentGlyph.include(r271_VBar.m(r273_df.middle, r273_top, r273_bottom, r273_df.mvs));
                r275_currentGlyph.include(r271_HBar.t(r273_df.leftSB, r273_df.rightSB, r273_top));
                if (r273_fDoSerifs && r271_SLAB)
                    r275_currentGlyph.include(r271_HSerif.mb(r273_df.middle, 0, r271_MidJutSide));
                return void 0;
            };
        };
        r271_xn$createAndSaveGlyphImpl$2Lrc3c('grek/SampiArchaic', 882, function () {
            var _r283_t1;
            var _r283_t0 = this;
            var r283_currentGlyph = _r283_t0;
            var r283_df = r271_DivFrame(r271_para.diversityM, 3);
            r283_currentGlyph.setWidth(r283_df.width);
            r283_currentGlyph.include(r283_df.markSet.capital());
            r283_currentGlyph.include(r271_SampiShape(r283_df, r271_CAP, 0, true));
            return void 0;
        });
        return r271_xn$createAndSaveGlyphImpl$2Lrc3c('grek/sampiArchaic', 883, function () {
            var _r289_t1;
            var _r289_t0 = this;
            var r289_currentGlyph = _r289_t0;
            var r289_df = r271_DivFrame(r271_para.diversityM, 3);
            r289_currentGlyph.setWidth(r289_df.width);
            r289_currentGlyph.include(r289_df.markSet.p());
            r289_currentGlyph.include(r271_SampiShape(r289_df, r271_XH, r271_Descender, false));
            return void 0;
        });
    });
    return void 0;
});
r1_xn$GlyphBlocks$2Lrc2b.push(function (r295_xn$Capture_Ext$2Lrc2b) {
    var _r295_t0, _r295_t1;
    r295_xn$Capture_Ext$2Lrc2b['$defineGlyphBlockImpl$'](r295_xn$Capture_Ext$2Lrc2b, 'Letter-Greek-Sampi', function (r296_xn$Capture$2Lrc8, r296_xn$ExportCapture$2Lrc4b) {
        var _r296_t5, _r296_t6;
        var _r296_t0 = r296_xn$Capture$2Lrc8;
        var r296_xn$createAndSaveGlyphImpl$2Lrc3c = _r296_t0['$createAndSaveGlyphImpl$'];
        var r296_xn$NamedParameterPair$2Lrc9b = _r296_t0['$NamedParameterPair$'];
        var r296_xn$assignUnicodeImpl$2Lrc8b = _r296_t0['$assignUnicodeImpl$'];
        var r296_xn$execState$2Lrc0b = _r296_t0['$execState$'];
        var r296_MarkSet = _r296_t0.MarkSet;
        var _r296_t1 = r296_xn$Capture$2Lrc8.Metrics;
        var r296_Width = _r296_t1.Width;
        var r296_SB = _r296_t1.SB;
        var r296_CAP = _r296_t1.CAP;
        var r296_XH = _r296_t1.XH;
        var r296_Descender = _r296_t1.Descender;
        var r296_HVContrast = _r296_t1.HVContrast;
        var r296_O = _r296_t1.O;
        var r296_OX = _r296_t1.OX;
        var r296_Stroke = _r296_t1.Stroke;
        var r296_Jut = _r296_t1.Jut;
        var r296_SLAB = _r296_t1.SLAB;
        var r296_HalfStroke = _r296_t1.HalfStroke;
        var r296_RightSB = _r296_t1.RightSB;
        var r296_Middle = _r296_t1.Middle;
        var r296_AdviceStroke = _r296_t1.AdviceStroke;
        var _r296_t2 = r296_xn$Capture$2Lrc8.SpiroFns;
        var r296_g4 = _r296_t2.g4;
        var r296_corner = _r296_t2.corner;
        var r296_flat = _r296_t2.flat;
        var r296_curl = _r296_t2.curl;
        var r296_close = _r296_t2.close;
        var r296_widths = _r296_t2.widths;
        var r296_dispiro = _r296_t2.dispiro;
        var r296_xn$spirooutline$1aao = _r296_t2['spiro-outline'];
        var _r296_t3 = r296_xn$Capture$2Lrc8.BooleFns;
        var r296_union = _r296_t3.union;
        var r296_intersection = _r296_t3.intersection;
        var r296_difference = _r296_t3.difference;
        var _r296_t4 = r296_xn$Capture$2Lrc8.CommonShapes.resolve();
        var r296_HSerif = _r296_t4.HSerif;
        var r296_ExtLineCenter = _r296_t4.ExtLineCenter;
        var r296_MaskAbove = _r296_t4.MaskAbove;
        var r296_MaskBelow = _r296_t4.MaskBelow;
        r296_xn$createAndSaveGlyphImpl$2Lrc3c('grek/Sampi', 992, function () {
            var _r300_t1;
            var _r300_t0 = this;
            var r300_currentGlyph = _r300_t0;
            r300_currentGlyph.include(r296_MarkSet.capital());
            var r300_sw = r296_AdviceStroke(3);
            var r300_fine = r296_AdviceStroke(4.25);
            var r300_rightStrokeShift = 0.45 * r300_sw * r296_HVContrast;
            var r300_leftStrokeShift = 0.45 * r300_fine * r296_HVContrast;
            var r300_LeftSideMask = function () {
                var _r302_t0, _r302_t1;
                return r296_xn$spirooutline$1aao(r296_corner(r296_RightSB - r296_HalfStroke * r296_HVContrast + r296_O, 0), r296_corner(r296_Middle, r296_CAP), r296_corner(-2 * r296_Width, r296_CAP), r296_corner(-2 * r296_Width, 0));
            };
            r300_currentGlyph.include(r296_intersection(r296_MaskBelow(r296_CAP), r296_MaskAbove(0), r296_ExtLineCenter(2, r300_sw, r296_RightSB - r300_rightStrokeShift, 0, r296_Middle, r296_CAP)));
            r300_currentGlyph.include(r296_intersection(r300_LeftSideMask(), r296_union(r296_ExtLineCenter(2, r300_fine, r296_SB + r300_leftStrokeShift, 0, r296_Middle, r296_CAP), r296_ExtLineCenter(2, r300_fine, r1_mix(r296_SB, r296_RightSB, 0.45), 0, r1_mix(r296_SB, r296_RightSB, 0.95) - r300_leftStrokeShift, r296_CAP))));
            if (r296_SLAB)
                r300_currentGlyph.include(r296_difference(r296_HSerif.mb(r296_RightSB - 0.5 * r300_sw * r296_HVContrast, 0, r296_Jut), r300_LeftSideMask()));
            return void 0;
        });
        return r296_xn$createAndSaveGlyphImpl$2Lrc3c('grek/sampi', 993, function () {
            var _r308_t1;
            var _r308_t0 = this;
            var r308_currentGlyph = _r308_t0;
            r308_currentGlyph.include(r296_MarkSet.p());
            var r308_x1 = r1_mix(r296_SB, r296_RightSB, 0.95);
            var r308_SampiKnots = function (r310_offset) {
                var _r310_t0, _r310_t1;
                return [
                    r296_g4(r296_SB, r296_XH - r296_O + r310_offset),
                    r296_g4(r1_mix(r296_SB, r296_RightSB, 0.5), r1_mix(r296_XH + r310_offset, r296_Descender - r310_offset, 0.125)),
                    r296_g4.down.mid(r296_RightSB - r296_OX + r310_offset, r1_mix(r296_Descender, r296_XH, 0.25)),
                    r296_g4(r308_x1, r296_Descender + r296_O - r310_offset)
                ];
            };
            r308_currentGlyph.include(r296_dispiro(r296_widths.rhs(), r308_SampiKnots(0)));
            r308_currentGlyph.include(r296_intersection(r296_xn$spirooutline$1aao(r308_SampiKnots(r296_O), r296_close()), r296_union(r296_dispiro(r296_widths.center(r296_Stroke * 1.5 + r296_XH / 6), r296_flat(r296_SB, r296_XH - r296_O), r296_curl(r308_x1, r296_Descender + r296_O)), r296_xn$spirooutline$1aao(r296_corner(r296_SB, r296_CAP), r296_corner(r296_SB, r296_XH - r296_O), r296_corner(r308_x1, r296_Descender - r296_O), r296_corner(2 * r296_Width, r296_Descender - r296_O), r296_corner(2 * r296_Width, r296_CAP), r296_close())), r296_union(r296_ExtLineCenter(2, r296_Stroke, r1_mix(r296_SB, r308_x1, 0.35) + 0, r1_mix(r296_XH, r296_Descender, 0.35) + 0, r1_mix(r296_SB, r308_x1, 0.35) + (r296_XH - r296_Descender), r1_mix(r296_XH, r296_Descender, 0.35) + (r308_x1 - r296_SB)), r296_ExtLineCenter(2, r296_Stroke, r1_mix(r296_SB, r308_x1, 0.65) + 0, r1_mix(r296_XH, r296_Descender, 0.65) + 0, r1_mix(r296_SB, r308_x1, 0.65) + (r296_XH - r296_Descender), r1_mix(r296_XH, r296_Descender, 0.65) + (r308_x1 - r296_SB)))));
            return void 0;
        });
    });
    return void 0;
});
