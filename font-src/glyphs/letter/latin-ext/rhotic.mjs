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
var r1_IsSuperscript = _r1_t9.IsSuperscript;
var r1_IsSubscript = _r1_t9.IsSubscript;
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
    r270_xn$Capture_Ext$2Lrc2b['$defineGlyphBlockImpl$'](r270_xn$Capture_Ext$2Lrc2b, 'Letter-Latin-Rhotic', function (r271_xn$Capture$2Lrc8, r271_xn$ExportCapture$2Lrc4b) {
        var _r271_t7, _r271_t8;
        var _r271_t0 = r271_xn$Capture$2Lrc8;
        var r271_xn$createAndSaveGlyphImpl$2Lrc3c = _r271_t0['$createAndSaveGlyphImpl$'];
        var r271_xn$NamedParameterPair$2Lrc9b = _r271_t0['$NamedParameterPair$'];
        var r271_xn$assignUnicodeImpl$2Lrc8b = _r271_t0['$assignUnicodeImpl$'];
        var r271_xn$execState$2Lrc0b = _r271_t0['$execState$'];
        var r271_AS_BASE = _r271_t0.AS_BASE;
        var r271_ALSO_METRICS = _r271_t0.ALSO_METRICS;
        var _r271_t1 = r271_xn$Capture$2Lrc8.Metrics;
        var r271_Width = _r271_t1.Width;
        var r271_SB = _r271_t1.SB;
        var r271_CAP = _r271_t1.CAP;
        var r271_XH = _r271_t1.XH;
        var r271_Descender = _r271_t1.Descender;
        var r271_Scale = _r271_t1.Scale;
        var r271_Translate = _r271_t1.Translate;
        var r271_ApparentTranslate = _r271_t1.ApparentTranslate;
        var r271_HVContrast = _r271_t1.HVContrast;
        var r271_Downward = _r271_t1.Downward;
        var r271_Rightward = _r271_t1.Rightward;
        var r271_Stroke = _r271_t1.Stroke;
        var r271_AccentStackOffset = _r271_t1.AccentStackOffset;
        var r271_Middle = _r271_t1.Middle;
        var r271_AdviceStroke = _r271_t1.AdviceStroke;
        var _r271_t2 = r271_xn$Capture$2Lrc8.SpiroFns;
        var r271_g4 = _r271_t2.g4;
        var r271_g2 = _r271_t2.g2;
        var r271_flat = _r271_t2.flat;
        var r271_curl = _r271_t2.curl;
        var r271_widths = _r271_t2.widths;
        var r271_heading = _r271_t2.heading;
        var r271_arcvh = _r271_t2.arcvh;
        var r271_dispiro = _r271_t2.dispiro;
        var _r271_t3 = r271_xn$Capture$2Lrc8.BooleFns;
        var _r271_t4 = r271_xn$Capture$2Lrc8.CommonShapes.resolve();
        var r271_hookend = _r271_t4.hookend;
        var r271_Ungizmo = _r271_t4.Ungizmo;
        var r271_Regizmo = _r271_t4.Regizmo;
        var _r271_t5 = r271_xn$Capture$2Lrc8['Common-Derivatives'].resolve();
        var r271_xn$referglyph$1aao = _r271_t5['refer-glyph'];
        var _r271_t6 = r271_xn$Capture$2Lrc8['Mark-Shared-Metrics'].resolve();
        var r271_markFine = _r271_t6.markFine;
        r271_xn$ExportCapture$2Lrc4b(function () {
            var _r276_t0, _r276_t1;
            return { 'ErTail': r271_ErTail };
        });
        var r271_ErTail = function (r277_left, r277_y, r277_rise, r277_w, r277_dohook) {
            var _r277_t0, _r277_t1;
            return function () {
                var _r279_t1;
                var _r279_t0 = this;
                var r279_currentGlyph = _r279_t0;
                var r279_right = r271_Width;
                var r279_mid = r1_mix(r277_left, r279_right, 0.5);
                var r279_sw = r1_fallback(r277_w, r271_AdviceStroke(5));
                r279_currentGlyph.include(r271_dispiro(r271_widths.rhs(r279_sw), r271_g2(r277_left - r279_sw / 2 * r271_HVContrast, r277_y), r271_g2(r279_mid - r279_sw / 2 * r271_HVContrast, r277_y + r277_rise)));
                r279_currentGlyph.include(r271_dispiro(r271_widths.center(r279_sw), r271_flat(r279_mid, r277_y + r277_rise, r271_heading(r271_Downward)), r271_curl(r279_mid, r277_y + (r277_dohook ? 0 : r277_rise - 1), r271_heading(r271_Downward)), r277_dohook ? [r271_hookend(r277_y - r277_rise)] : [r271_arcvh()], r271_g4(r279_right - (r277_dohook ? r279_sw : 0), r277_y - (r277_dohook ? r277_rise * 0.5 : r277_rise), r277_dohook ? void 0 : r271_heading(r271_Rightward))));
                return void 0;
            };
        };
        r271_xn$createAndSaveGlyphImpl$2Lrc3c('rhoticHook', 734, function () {
            var _r284_t1;
            var _r284_t0 = this;
            var r284_currentGlyph = _r284_t0;
            r284_currentGlyph.include(r271_ErTail(-r271_Stroke * r271_HVContrast, r271_XH / 2, r271_XH * 0.3, r271_Stroke, true));
            return void 0;
        });
        r271_xn$createAndSaveGlyphImpl$2Lrc3c('rhoticHook/sup', null, function () {
            var _r288_t1;
            var _r288_t0 = this;
            var r288_currentGlyph = _r288_t0;
            var r288_sw = r271_AdviceStroke(3.5) / 0.7;
            r288_currentGlyph.include(r271_ErTail(-r271_Stroke * r271_HVContrast - 3 * r271_SB, r271_XH / 2, r271_XH * 0.3, r288_sw, true));
            r288_currentGlyph.include(r271_Ungizmo());
            r288_currentGlyph.include(r271_Translate(-r271_Middle, -r271_CAP));
            r288_currentGlyph.include(r271_Scale(0.7));
            r288_currentGlyph.include(r271_Translate(r271_Middle, r271_CAP + r271_AccentStackOffset / 2));
            r288_currentGlyph.include(r271_Regizmo());
            r1_IsSuperscript.set(r288_currentGlyph);
            return void 0;
        });
        return r271_xn$createAndSaveGlyphImpl$2Lrc3c('rhoticHook/sub', null, function () {
            var _r297_t1;
            var _r297_t0 = this;
            var r297_currentGlyph = _r297_t0;
            r297_currentGlyph.include(r271_xn$referglyph$1aao('rhoticHook/sup'), r271_AS_BASE, r271_ALSO_METRICS);
            r297_currentGlyph.include(r271_ApparentTranslate(0, r271_Descender / 2 - (r271_CAP + r271_AccentStackOffset / 2) + 0.7 * r271_CAP));
            r1_IsSubscript.set(r297_currentGlyph);
            return void 0;
        });
    });
    return void 0;
});
