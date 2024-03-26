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
    r270_xn$Capture_Ext$2Lrc2b['$defineGlyphBlockImpl$'](r270_xn$Capture_Ext$2Lrc2b, 'Letter-Greek-Lower-Sigma-Final', function (r271_xn$Capture$2Lrc8, r271_xn$ExportCapture$2Lrc4b) {
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
        var r271_Descender = _r271_t1.Descender;
        var r271_HVContrast = _r271_t1.HVContrast;
        var r271_Upward = _r271_t1.Upward;
        var r271_Downward = _r271_t1.Downward;
        var r271_Leftward = _r271_t1.Leftward;
        var r271_O = _r271_t1.O;
        var r271_OX = _r271_t1.OX;
        var r271_Hook = _r271_t1.Hook;
        var r271_HookX = _r271_t1.HookX;
        var r271_Stroke = _r271_t1.Stroke;
        var r271_SLAB = _r271_t1.SLAB;
        var r271_HalfStroke = _r271_t1.HalfStroke;
        var r271_RightSB = _r271_t1.RightSB;
        var r271_Middle = _r271_t1.Middle;
        var r271_ArchDepthA = _r271_t1.ArchDepthA;
        var r271_ArchDepthB = _r271_t1.ArchDepthB;
        var r271_SmallArchDepthA = _r271_t1.SmallArchDepthA;
        var r271_SmallArchDepthB = _r271_t1.SmallArchDepthB;
        var r271_CorrectionOMidS = _r271_t1.CorrectionOMidS;
        var r271_AdviceStroke = _r271_t1.AdviceStroke;
        var r271_StrokeWidthBlend = _r271_t1.StrokeWidthBlend;
        var r271_MidJutSide = _r271_t1.MidJutSide;
        var _r271_t2 = r271_xn$Capture$2Lrc8.SpiroFns;
        var r271_g4 = _r271_t2.g4;
        var r271_g2 = _r271_t2.g2;
        var r271_flat = _r271_t2.flat;
        var r271_curl = _r271_t2.curl;
        var r271_straight = _r271_t2.straight;
        var r271_widths = _r271_t2.widths;
        var r271_heading = _r271_t2.heading;
        var r271_alsoThru = _r271_t2.alsoThru;
        var r271_archv = _r271_t2.archv;
        var r271_arcvh = _r271_t2.arcvh;
        var r271_dispiro = _r271_t2.dispiro;
        var _r271_t3 = r271_xn$Capture$2Lrc8.BooleFns;
        var r271_difference = _r271_t3.difference;
        var _r271_t4 = r271_xn$Capture$2Lrc8.CommonShapes.resolve();
        var r271_Rect = _r271_t4.Rect;
        var r271_HSerif = _r271_t4.HSerif;
        var r271_VBar = _r271_t4.VBar;
        var r271_hookstart = _r271_t4.hookstart;
        var _r271_t5 = r271_xn$Capture$2Lrc8['Common-Derivatives'].resolve();
        var r271_SignaFinalEndingKnots = function () {
            var _r274_t0, _r274_t1;
            return [
                r271_curl(r271_SB + r271_OX, r271_SmallArchDepthB),
                r271_arcvh(),
                r271_g4(r271_Middle + r271_CorrectionOMidS, 0),
                r271_alsoThru(0.5, 0.1353),
                r271_g4.down.mid(r271_RightSB - r271_Stroke * r271_HVContrast + r271_OX, r1_mix(r271_Descender, r271_Stroke, r271_StrokeWidthBlend(0.5, 0.49)), r271_heading(r271_Downward)),
                r271_arcvh(),
                r271_flat(r271_RightSB - r271_HookX + r271_OX, r271_Descender + r271_Stroke),
                r271_curl(Math.min(r271_RightSB - r271_Stroke * r271_HVContrast * 1.5, r271_RightSB - r271_HookX + r271_OX - 1), r271_Descender + r271_Stroke)
            ];
        };
        r271_xn$createAndSaveGlyphImpl$2Lrc3c('grek/sigma/fina', 962, function () {
            var _r277_t1;
            var _r277_t0 = this;
            var r277_currentGlyph = _r277_t0;
            r277_currentGlyph.include(r271_MarkSet.p());
            r277_currentGlyph.include(r271_dispiro(r271_widths.lhs(), r271_g4(r271_RightSB, r271_XH - r271_Hook), r271_hookstart(r271_XH - r271_O), r271_flat(r271_SB + r271_OX, r271_XH - r271_SmallArchDepthA), r271_SignaFinalEndingKnots()));
            return void 0;
        });
        r271_xn$createAndSaveGlyphImpl$2Lrc3c('grek/stigma', 987, function () {
            var _r282_t1;
            var _r282_t0 = this;
            var r282_currentGlyph = _r282_t0;
            r282_currentGlyph.include(r271_MarkSet.p());
            var r282_fine = r271_AdviceStroke(3);
            r282_currentGlyph.include(r271_dispiro(r271_widths.lhs(r282_fine), r271_straight.down.start(r271_RightSB - r282_fine * r271_HVContrast, r271_XH + 0.25 * r271_Hook, r271_heading(r271_Downward)), r271_g2(r1_mix(r271_Middle - r271_CorrectionOMidS, r271_RightSB - r282_fine * r271_HVContrast, 0.5), r271_XH - r271_O - r271_Hook * r271_StrokeWidthBlend(0.05, 0.025), r271_widths.lhs.heading(r271_Stroke, r271_Leftward)), r271_g4(r271_Middle - r271_CorrectionOMidS, r271_XH - r271_O), r271_archv(16), r271_flat(r271_SB + r271_OX, r271_XH - r271_SmallArchDepthA), r271_SignaFinalEndingKnots()));
            return void 0;
        });
        return r271_xn$createAndSaveGlyphImpl$2Lrc3c('grek/Stigma', 986, function () {
            var _r287_t1;
            var _r287_t0 = this;
            var r287_currentGlyph = _r287_t0;
            r287_currentGlyph.include(r271_MarkSet.capital());
            var r287_yAttach = (r271_SLAB ? r271_Stroke : 0) + r271_XH * 0.2;
            r287_currentGlyph.include(r271_difference(r271_dispiro(r271_widths.lhs(), r271_g4(r271_RightSB, r271_CAP - r271_Hook), r271_hookstart(r271_CAP - r271_O), r271_flat(r271_SB + r271_OX, r271_CAP - r271_ArchDepthA), r271_curl(r271_SB + r271_OX, r287_yAttach + r271_ArchDepthB), r271_arcvh(), r271_g4(r271_Middle + r271_CorrectionOMidS, r287_yAttach + r271_O), r271_archv(), r271_g4(r1_mix(r271_Middle, r271_RightSB, 2), r287_yAttach + r271_Hook * 2, r271_heading(r271_Upward))), r271_Rect(r287_yAttach + r271_Hook * 2 - r271_O, r271_Descender, r271_Middle + r271_HalfStroke * r271_HVContrast, 2 * r271_Width)));
            r287_currentGlyph.include(r271_VBar.m(r271_Middle, 0, r287_yAttach + r271_HalfStroke));
            if (r271_SLAB)
                r287_currentGlyph.include(r271_HSerif.mb(r271_Middle, 0, r271_MidJutSide));
            return void 0;
        });
    });
    return void 0;
});
