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
    r270_xn$Capture_Ext$2Lrc2b['$defineGlyphBlockImpl$'](r270_xn$Capture_Ext$2Lrc2b, 'Letter-Latin-OU', function (r271_xn$Capture$2Lrc8, r271_xn$ExportCapture$2Lrc4b) {
        var _r271_t6, _r271_t7;
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
        var r271_Ascender = _r271_t1.Ascender;
        var r271_TanSlope = _r271_t1.TanSlope;
        var r271_HVContrast = _r271_t1.HVContrast;
        var r271_O = _r271_t1.O;
        var r271_Stroke = _r271_t1.Stroke;
        var r271_HBarPos = _r271_t1.HBarPos;
        var r271_CThin = _r271_t1.CThin;
        var r271_HalfStroke = _r271_t1.HalfStroke;
        var r271_RightSB = _r271_t1.RightSB;
        var r271_Middle = _r271_t1.Middle;
        var r271_ArchDepthA = _r271_t1.ArchDepthA;
        var r271_ArchDepthB = _r271_t1.ArchDepthB;
        var r271_CorrectionOMidS = _r271_t1.CorrectionOMidS;
        var _r271_t2 = r271_xn$Capture$2Lrc8.SpiroFns;
        var r271_g4 = _r271_t2.g4;
        var r271_end = _r271_t2.end;
        var r271_widths = _r271_t2.widths;
        var r271_archv = _r271_t2.archv;
        var r271_arcvh = _r271_t2.arcvh;
        var r271_dispiro = _r271_t2.dispiro;
        var _r271_t3 = r271_xn$Capture$2Lrc8.BooleFns;
        var _r271_t4 = r271_xn$Capture$2Lrc8.CommonShapes.resolve();
        var r271_OShape = _r271_t4.OShape;
        var _r271_t5 = r271_xn$Capture$2Lrc8['Common-Derivatives'].resolve();
        var r271_OuShape = function (r274_top, r274_yBar, r274_gapL, r274_gapR) {
            var _r274_t0, _r274_t1;
            return function () {
                var _r276_t1;
                var _r276_t0 = this;
                var r276_currentGlyph = _r276_t0;
                r276_currentGlyph.include(r271_OShape(r274_yBar + r271_HalfStroke, 0, r271_SB, r271_RightSB, void 0, r271_ArchDepthA, r271_ArchDepthB));
                var r276_xLeft = r1_clamp(r271_SB + 1.25 * r271_HVContrast * r271_Stroke, r1_mix(r271_SB, r271_RightSB, 0.4), r271_Middle - r271_Width * 0.05);
                var r276_d = 0.25 * r271_TanSlope * (r271_RightSB - r271_SB);
                r276_currentGlyph.include(r271_dispiro(r271_widths.lhs(), r271_g4.left.start(r276_xLeft - r271_CorrectionOMidS, r274_top - r274_gapL), r271_archv(), r271_g4.down.mid(r271_SB, r1_mix(r274_yBar - r271_HalfStroke, r274_top - r274_gapL, 0.5) + r276_d), r271_arcvh(), r271_g4(r271_Middle + r271_CorrectionOMidS, r274_yBar - r271_O - r271_HalfStroke + r271_Stroke * (1 - r271_CThin), r271_widths.lhs(r271_Stroke * r271_CThin)), r271_archv(), r271_g4.up.mid(r271_RightSB, r1_mix(r274_yBar - r271_HalfStroke, r274_top - r274_gapR, 0.5) - r276_d, r271_widths.lhs()), r271_arcvh(), r271_g4.left.end(r271_Width - r276_xLeft - r271_CorrectionOMidS, r274_top - r274_gapR)));
                return void 0;
            };
        };
        r271_xn$createAndSaveGlyphImpl$2Lrc3c('OU', 546, function () {
            var _r281_t1;
            var _r281_t0 = this;
            var r281_currentGlyph = _r281_t0;
            r281_currentGlyph.include(r271_MarkSet.capital());
            r281_currentGlyph.include(r271_OuShape(r271_CAP, r271_CAP * r271_HBarPos, r271_CAP * 0.05, 0));
            return void 0;
        });
        r271_xn$createAndSaveGlyphImpl$2Lrc3c('smcpOU', 7445, function () {
            var _r286_t1;
            var _r286_t0 = this;
            var r286_currentGlyph = _r286_t0;
            r286_currentGlyph.include(r271_MarkSet.e());
            r286_currentGlyph.include(r271_OuShape(r271_XH, r271_XH * r271_HBarPos, 0, 0));
            return void 0;
        });
        return r271_xn$createAndSaveGlyphImpl$2Lrc3c('ou', 547, function () {
            var _r291_t1;
            var _r291_t0 = this;
            var r291_currentGlyph = _r291_t0;
            r291_currentGlyph.include(r271_MarkSet.b());
            r291_currentGlyph.include(r271_OuShape(r271_Ascender, r271_Ascender * r1_mix(r271_HBarPos, r271_XH / r271_CAP, 0.5), 0, 0));
            return void 0;
        });
    });
    return void 0;
});
