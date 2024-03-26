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
    r270_xn$Capture_Ext$2Lrc2b['$defineGlyphBlockImpl$'](r270_xn$Capture_Ext$2Lrc2b, 'Letter-Greek-Upper-Omega', function (r271_xn$Capture$2Lrc8, r271_xn$ExportCapture$2Lrc4b) {
        var _r271_t7, _r271_t8;
        var _r271_t0 = r271_xn$Capture$2Lrc8;
        var r271_xn$createAndSaveGlyphImpl$2Lrc3c = _r271_t0['$createAndSaveGlyphImpl$'];
        var r271_xn$NamedParameterPair$2Lrc9b = _r271_t0['$NamedParameterPair$'];
        var r271_xn$assignUnicodeImpl$2Lrc8b = _r271_t0['$assignUnicodeImpl$'];
        var r271_xn$execState$2Lrc0b = _r271_t0['$execState$'];
        var r271_MarkSet = _r271_t0.MarkSet;
        var _r271_t1 = r271_xn$Capture$2Lrc8.Metrics;
        var r271_Width = _r271_t1.Width;
        var r271_SB = _r271_t1.SB;
        var r271_CAP = _r271_t1.CAP;
        var r271_XH = _r271_t1.XH;
        var r271_Leftward = _r271_t1.Leftward;
        var r271_O = _r271_t1.O;
        var r271_Stroke = _r271_t1.Stroke;
        var r271_CThin = _r271_t1.CThin;
        var r271_HalfStroke = _r271_t1.HalfStroke;
        var r271_RightSB = _r271_t1.RightSB;
        var r271_Middle = _r271_t1.Middle;
        var r271_ArchDepthA = _r271_t1.ArchDepthA;
        var r271_ArchDepthB = _r271_t1.ArchDepthB;
        var r271_SmallArchDepthA = _r271_t1.SmallArchDepthA;
        var r271_SmallArchDepthB = _r271_t1.SmallArchDepthB;
        var r271_CorrectionOMidS = _r271_t1.CorrectionOMidS;
        var _r271_t2 = r271_xn$Capture$2Lrc8.SpiroFns;
        var r271_g4 = _r271_t2.g4;
        var r271_flat = _r271_t2.flat;
        var r271_curl = _r271_t2.curl;
        var r271_widths = _r271_t2.widths;
        var r271_heading = _r271_t2.heading;
        var r271_archv = _r271_t2.archv;
        var r271_arcvh = _r271_t2.arcvh;
        var r271_dispiro = _r271_t2.dispiro;
        var _r271_t3 = r271_xn$Capture$2Lrc8.BooleFns;
        var _r271_t4 = r271_xn$Capture$2Lrc8.CommonShapes.resolve();
        var r271_HBar = _r271_t4.HBar;
        var r271_VBar = _r271_t4.VBar;
        var r271_FlipAround = _r271_t4.FlipAround;
        var _r271_t5 = r271_xn$Capture$2Lrc8['Common-Derivatives'].resolve();
        var r271_turned = _r271_t5.turned;
        var _r271_t6 = r271_xn$Capture$2Lrc8['Letter-Shared'].resolve();
        var r271_CreateAccentedComposition = _r271_t6.CreateAccentedComposition;
        var r271_SetGrekUpperTonos = _r271_t6.SetGrekUpperTonos;
        var r271_UpperOmegaShape = function (r275_top, r275_extend, r275_ada, r275_adb) {
            var _r275_t0, _r275_t1;
            return function () {
                var _r277_t1;
                var _r277_t0 = this;
                var r277_currentGlyph = _r277_t0;
                var r277_fine = r271_Stroke * r271_CThin;
                var r277_x1 = r1_mix(r271_SB, r271_RightSB, 0.4);
                var r277_x2 = r271_Width - r277_x1;
                var r277_yattach = r275_top * r275_extend + r271_Stroke;
                r277_currentGlyph.include(r271_dispiro(r271_g4(r277_x1, r277_yattach - r277_fine, r271_widths.heading(0, r277_fine, r271_Leftward)), r271_archv(), r271_flat(r271_SB, r277_yattach - r271_Stroke + r275_adb, r271_widths(0, r271_Stroke)), r271_curl(r271_SB, r275_top - r275_ada), r271_arcvh(), r271_g4(r271_Middle - r271_CorrectionOMidS, r275_top - r271_O), r271_archv(), r271_flat(r271_RightSB, r275_top - r275_adb), r271_curl(r271_RightSB, r277_yattach - r271_Stroke + r275_ada), r271_arcvh(), r271_g4(r277_x2, r277_yattach - r277_fine, r271_widths.heading(0, r277_fine, r271_Leftward))));
                r277_currentGlyph.include(r271_VBar.r(r277_x1, 0, r277_yattach, r277_fine));
                r277_currentGlyph.include(r271_HBar.m(r271_SB, r277_x1, r271_HalfStroke));
                r277_currentGlyph.include(r271_VBar.l(r277_x2, 0, r277_yattach, r277_fine));
                r277_currentGlyph.include(r271_HBar.m(r277_x2, r271_RightSB, r271_HalfStroke));
                return void 0;
            };
        };
        r271_xn$createAndSaveGlyphImpl$2Lrc3c('grek/Omega', 937, function () {
            var _r285_t1;
            var _r285_t0 = this;
            var r285_currentGlyph = _r285_t0;
            r285_currentGlyph.include(r271_MarkSet.capital());
            r285_currentGlyph.include(r271_SetGrekUpperTonos(0));
            r285_currentGlyph.include(r271_UpperOmegaShape(r271_CAP, 0.08, r271_ArchDepthA, r271_ArchDepthB));
            return void 0;
        });
        r271_xn$createAndSaveGlyphImpl$2Lrc3c('grek/smcpOmega', 43877, function () {
            var _r291_t1;
            var _r291_t0 = this;
            var r291_currentGlyph = _r291_t0;
            r291_currentGlyph.include(r271_MarkSet.e());
            r291_currentGlyph.include(r271_UpperOmegaShape(r271_XH, 0.08, r271_SmallArchDepthA, r271_SmallArchDepthB));
            return void 0;
        });
        r271_xn$createAndSaveGlyphImpl$2Lrc3c('latn/Upsilon', 433, function () {
            var _r296_t1;
            var _r296_t0 = this;
            var r296_currentGlyph = _r296_t0;
            r296_currentGlyph.include(r271_MarkSet.capital());
            r296_currentGlyph.include(r271_UpperOmegaShape(r271_CAP, 0.08, r271_ArchDepthA, r271_ArchDepthB));
            r296_currentGlyph.include(r271_FlipAround(r271_Middle, r271_CAP / 2));
            return void 0;
        });
        return r271_turned('latn/upsilon', 650, 'grek/smcpOmega', r271_Middle, r271_XH / 2);
    });
    return void 0;
});
