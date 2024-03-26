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
    r270_xn$Capture_Ext$2Lrc2b['$defineGlyphBlockImpl$'](r270_xn$Capture_Ext$2Lrc2b, 'Letter-Latin-F-ligatures', function (r271_xn$Capture$2Lrc8, r271_xn$ExportCapture$2Lrc4b) {
        var _r271_t6, _r271_t7;
        var _r271_t0 = r271_xn$Capture$2Lrc8;
        var r271_xn$createAndSaveGlyphImpl$2Lrc3c = _r271_t0['$createAndSaveGlyphImpl$'];
        var r271_xn$NamedParameterPair$2Lrc9b = _r271_t0['$NamedParameterPair$'];
        var r271_xn$assignUnicodeImpl$2Lrc8b = _r271_t0['$assignUnicodeImpl$'];
        var r271_xn$execState$2Lrc0b = _r271_t0['$execState$'];
        var r271_para = _r271_t0.para;
        var r271_MarkSet = _r271_t0.MarkSet;
        var r271_AS_BASE = _r271_t0.AS_BASE;
        var r271_tagged = _r271_t0.tagged;
        var _r271_t1 = r271_xn$Capture$2Lrc8.Metrics;
        var r271_DesignParameters = _r271_t1.DesignParameters;
        var r271_Width = _r271_t1.Width;
        var r271_SB = _r271_t1.SB;
        var r271_XH = _r271_t1.XH;
        var r271_Ascender = _r271_t1.Ascender;
        var r271_Translate = _r271_t1.Translate;
        var r271_TanSlope = _r271_t1.TanSlope;
        var r271_HVContrast = _r271_t1.HVContrast;
        var r271_Upward = _r271_t1.Upward;
        var r271_O = _r271_t1.O;
        var r271_OXHook = _r271_t1.OXHook;
        var r271_Hook = _r271_t1.Hook;
        var r271_Stroke = _r271_t1.Stroke;
        var r271_Jut = _r271_t1.Jut;
        var r271_SLAB = _r271_t1.SLAB;
        var r271_JBalance = _r271_t1.JBalance;
        var r271_RBalance = _r271_t1.RBalance;
        var r271_HalfStroke = _r271_t1.HalfStroke;
        var r271_RightSB = _r271_t1.RightSB;
        var r271_Middle = _r271_t1.Middle;
        var r271_SideJut = _r271_t1.SideJut;
        var r271_ArchDepthA = _r271_t1.ArchDepthA;
        var _r271_t2 = r271_xn$Capture$2Lrc8.SpiroFns;
        var r271_g4 = _r271_t2.g4;
        var r271_flat = _r271_t2.flat;
        var r271_curl = _r271_t2.curl;
        var r271_widths = _r271_t2.widths;
        var r271_heading = _r271_t2.heading;
        var r271_dispiro = _r271_t2.dispiro;
        var _r271_t3 = r271_xn$Capture$2Lrc8.BooleFns;
        var _r271_t4 = r271_xn$Capture$2Lrc8.CommonShapes.resolve();
        var r271_HSerif = _r271_t4.HSerif;
        var r271_HBar = _r271_t4.HBar;
        var r271_VBar = _r271_t4.VBar;
        var r271_hookend = _r271_t4.hookend;
        var _r271_t5 = r271_xn$Capture$2Lrc8['Common-Derivatives'].resolve();
        var r271_xn$referglyph$1aao = _r271_t5['refer-glyph'];
        r271_xn$Capture$2Lrc8['Letter-Latin-Long-S'].resolve();
        var r271_fbar = r271_XH * r271_DesignParameters.fBarPosToXH + r271_Stroke * r271_DesignParameters.fbarStrokeAdj;
        var r271_shift = -(r271_Width * 0.055 + r271_SB * 0.5);
        var r271_barr = r271_RightSB;
        var r271_hbarleft = r271_SB + r271_shift + r271_Stroke * (r271_para.slopeAngle ? 0.5 : 0.25);
        r271_xn$createAndSaveGlyphImpl$2Lrc3c('f_i.upright', null, function () {
            var _r277_t1;
            var _r277_t0 = this;
            var r277_currentGlyph = _r277_t0;
            r277_currentGlyph.include(r271_MarkSet.b());
            r277_currentGlyph.include(r271_xn$createAndSaveGlyphImpl$2Lrc3c(null, null, function () {
                var _r282_t1;
                var _r282_t0 = this;
                var r282_currentGlyph = _r282_t0;
                r282_currentGlyph.include(r271_xn$referglyph$1aao('longs.bentHookSerifless'));
                r282_currentGlyph.include(r271_Translate(r271_shift, 0));
                return void 0;
            }));
            r277_currentGlyph.include(r271_VBar.r(r271_barr, 0, r271_fbar));
            r277_currentGlyph.include(r271_HBar.t(r271_hbarleft, r271_barr, r271_fbar));
            if (r271_SLAB)
                r277_currentGlyph.include(r271_tagged('serifRB', r271_HSerif.mb(r271_barr - r271_HalfStroke * r271_HVContrast, 0, r271_Jut)));
            return void 0;
        });
        r271_xn$createAndSaveGlyphImpl$2Lrc3c('f_i.italic', null, function () {
            var _r290_t1;
            var _r290_t0 = this;
            var r290_currentGlyph = _r290_t0;
            r290_currentGlyph.include(r271_MarkSet.b());
            r290_currentGlyph.include(r271_xn$createAndSaveGlyphImpl$2Lrc3c(null, null, function () {
                var _r295_t1;
                var _r295_t0 = this;
                var r295_currentGlyph = _r295_t0;
                r295_currentGlyph.include(r271_xn$referglyph$1aao('longs.flatHookTailed'));
                r295_currentGlyph.include(r271_Translate(r271_shift, 0));
                return void 0;
            }));
            r290_currentGlyph.include(r271_VBar.r(r271_barr, 0, r271_fbar));
            r290_currentGlyph.include(r271_HBar.t(r271_hbarleft, r271_barr, r271_fbar));
            if (r271_SLAB)
                r290_currentGlyph.include(r271_tagged('serifRB', r271_HSerif.rb(r271_barr, 0, r271_SideJut)));
            return void 0;
        });
        r271_xn$createAndSaveGlyphImpl$2Lrc3c('f_l.upright', null, function () {
            var _r303_t1;
            var _r303_t0 = this;
            var r303_currentGlyph = _r303_t0;
            var r303_m = r271_Middle - r271_JBalance - r271_HalfStroke * r271_HVContrast + r271_shift;
            r303_currentGlyph.include(r271_dispiro(r271_widths.rhs(), r271_flat(r303_m, 0, r271_heading(r271_Upward)), r271_curl(r303_m, r271_Ascender - r271_ArchDepthA), r271_hookend(r271_Ascender - r271_O), r271_g4(r271_barr + r271_OXHook, r271_Ascender - r271_Hook)));
            r303_currentGlyph.include(r271_VBar.r(r271_barr, 0, r271_Ascender - r271_Hook));
            r303_currentGlyph.include(r271_dispiro(r271_widths.rhs(), r271_flat(Math.min(r303_m - r271_Stroke * 0.3, r271_hbarleft) - r271_TanSlope * r271_HalfStroke, r271_fbar), r271_curl(r1_mix(r271_SB, r271_barr, 0.6) - r271_TanSlope * r271_HalfStroke, r271_fbar)));
            if (r271_SLAB) {
                r303_currentGlyph.include(r271_tagged('serifLB', r271_HSerif.mb(r303_m + r271_HalfStroke * r271_HVContrast + r271_RBalance * 0.35, 0, r271_Jut + r271_RBalance * 0.65)));
                r303_currentGlyph.include(r271_tagged('serifRB', r271_HSerif.mb(r271_barr - r271_HalfStroke * r271_HVContrast, 0, r271_Jut)));
            }
            return void 0;
        });
        return r271_xn$createAndSaveGlyphImpl$2Lrc3c('f_l.italic', null, function () {
            var _r311_t1;
            var _r311_t0 = this;
            var r311_currentGlyph = _r311_t0;
            r311_currentGlyph.include(r271_xn$createAndSaveGlyphImpl$2Lrc3c(null, null, function () {
                var _r315_t1;
                var _r315_t0 = this;
                var r315_currentGlyph = _r315_t0;
                r315_currentGlyph.include(r271_xn$referglyph$1aao('longs.flatHookTailed'), r271_AS_BASE);
                r315_currentGlyph.include(r271_Translate(r271_shift, 0));
                return void 0;
            }));
            r311_currentGlyph.include(r271_VBar.r(r271_barr, 0, r271_Ascender));
            r311_currentGlyph.include(r271_HBar.t(r271_hbarleft, r1_mix(r271_SB, r271_barr, 0.65), r271_fbar));
            if (r271_SLAB)
                r311_currentGlyph.include(r271_tagged('serifRB', r271_HSerif.rb(r271_barr, 0, r271_SideJut)));
            return void 0;
        });
    });
    return void 0;
});
