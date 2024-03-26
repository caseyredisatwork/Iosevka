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
    r270_xn$Capture_Ext$2Lrc2b['$defineGlyphBlockImpl$'](r270_xn$Capture_Ext$2Lrc2b, 'Letter-Latin-Eth', function (r271_xn$Capture$2Lrc8, r271_xn$ExportCapture$2Lrc4b) {
        var _r271_t6, _r271_t7;
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
        var r271_Ascender = _r271_t1.Ascender;
        var r271_TanSlope = _r271_t1.TanSlope;
        var r271_HVContrast = _r271_t1.HVContrast;
        var r271_O = _r271_t1.O;
        var r271_OX = _r271_t1.OX;
        var r271_Stroke = _r271_t1.Stroke;
        var r271_CThin = _r271_t1.CThin;
        var r271_RightSB = _r271_t1.RightSB;
        var r271_Middle = _r271_t1.Middle;
        var r271_ArchDepthA = _r271_t1.ArchDepthA;
        var r271_ArchDepthB = _r271_t1.ArchDepthB;
        var r271_SmallArchDepthA = _r271_t1.SmallArchDepthA;
        var r271_SmallArchDepthB = _r271_t1.SmallArchDepthB;
        var r271_CorrectionOMidX = _r271_t1.CorrectionOMidX;
        var r271_CorrectionOMidS = _r271_t1.CorrectionOMidS;
        var r271_AdviceStroke = _r271_t1.AdviceStroke;
        var r271_OverlayStroke = _r271_t1.OverlayStroke;
        var r271_ShoulderFine = _r271_t1.ShoulderFine;
        var r271_YSmoothMidR = _r271_t1.YSmoothMidR;
        var r271_YSmoothMidL = _r271_t1.YSmoothMidL;
        var _r271_t2 = r271_xn$Capture$2Lrc8.SpiroFns;
        var r271_g4 = _r271_t2.g4;
        var r271_flat = _r271_t2.flat;
        var r271_curl = _r271_t2.curl;
        var r271_end = _r271_t2.end;
        var r271_straight = _r271_t2.straight;
        var r271_widths = _r271_t2.widths;
        var r271_quadControls = _r271_t2.quadControls;
        var r271_archv = _r271_t2.archv;
        var r271_arcvh = _r271_t2.arcvh;
        var r271_dispiro = _r271_t2.dispiro;
        var _r271_t3 = r271_xn$Capture$2Lrc8.BooleFns;
        var r271_union = _r271_t3.union;
        var r271_intersection = _r271_t3.intersection;
        var _r271_t4 = r271_xn$Capture$2Lrc8.CommonShapes.resolve();
        var r271_MaskBelow = _r271_t4.MaskBelow;
        var _r271_t5 = r271_xn$Capture$2Lrc8['Common-Derivatives'].resolve();
        var r271_xn$selectvariant$7Hrq = _r271_t5['select-variant'];
        var r271_xn$derivecomposites$7Hrq = _r271_t5['derive-composites'];
        var r271_fine = r271_Stroke * r271_CThin;
        var r271_coFine = r1_mix(r271_fine, r271_Stroke, 0.5);
        var r271_yMid = r271_Ascender * 0.6;
        var r271_yMid2 = r1_mix(r271_yMid, r271_YSmoothMidR(r271_yMid, 0, r271_SmallArchDepthA, r271_SmallArchDepthB), 0.875);
        var r271_ArcStartKnots = function () {
            var _r274_t0, _r274_t1;
            return [
                r271_g4.right.start(r271_Middle + r271_CorrectionOMidS - r271_TanSlope * (r271_Stroke - r271_fine), r271_O + r271_Stroke - r271_fine + 1 / 16, r271_widths.lhs(r271_fine)),
                r271_straight.up.mid(r271_RightSB - r271_OX - (1 - r271_CThin) * r271_Stroke * r271_HVContrast, r271_YSmoothMidR(r271_yMid, 0, r271_SmallArchDepthA, r271_SmallArchDepthB)),
                r271_arcvh(),
                r271_g4(r271_Middle - r271_CorrectionOMidS, r271_yMid - r271_O, r271_widths.lhs()),
                r271_archv(),
                r271_g4(r271_SB + r271_OX, r271_YSmoothMidL(r271_yMid, 0, r271_SmallArchDepthA, r271_SmallArchDepthB)),
                r271_arcvh(),
                r271_g4(r271_Middle + r271_CorrectionOMidS, r271_O),
                r271_archv(),
                r271_flat(r271_RightSB - r271_OX, r271_YSmoothMidR(r271_yMid, 0, r271_SmallArchDepthA, r271_SmallArchDepthB), r271_widths.lhs(r271_coFine)),
                r271_curl(r271_RightSB - r271_OX, r271_yMid2)
            ];
        };
        r271_xn$createAndSaveGlyphImpl$2Lrc3c('dInsular.curly-bar', null, function () {
            var _r277_t1;
            var _r277_t0 = this;
            var r277_currentGlyph = _r277_t0;
            r277_currentGlyph.include(r271_MarkSet.b());
            r277_currentGlyph.include(r271_dispiro(r271_ArcStartKnots(), r271_quadControls(0, 0.8), r271_g4(r271_SB + r271_Stroke * 1.1, r271_Ascender, r271_widths.lhs())));
            return void 0;
        });
        r271_xn$createAndSaveGlyphImpl$2Lrc3c('dInsular.straight-bar', null, function () {
            var _r282_t1;
            var _r282_t0 = this;
            var r282_currentGlyph = _r282_t0;
            r282_currentGlyph.include(r271_MarkSet.b());
            var r282_yMockBarStart = r271_yMid2 + r271_Stroke * 0.3;
            var r282_xTerminal = r1_mix(r271_SB, r271_RightSB, 0.4) + 0.5 * r271_Stroke * r271_HVContrast;
            var r282_pStraightBarStart = 0.75 - r271_Stroke / r271_Ascender;
            r282_currentGlyph.include(r271_intersection(r271_MaskBelow(r271_Ascender), r271_dispiro(r271_ArcStartKnots(), r271_flat(r1_mix(r271_Width, r282_xTerminal, r282_pStraightBarStart), r1_mix(r282_yMockBarStart, r271_CAP, r282_pStraightBarStart), r271_widths.lhs()), r271_curl(r1_mix(r271_Width, r282_xTerminal, 2), r1_mix(r282_yMockBarStart, r271_CAP, 2)))));
            return void 0;
        });
        r271_xn$selectvariant$7Hrq('dInsular', 42874, new r271_xn$NamedParameterPair$2Lrc9b('follow', 'eth'));
        r271_xn$selectvariant$7Hrq('partial', 8706, new r271_xn$NamedParameterPair$2Lrc9b('shapeFrom', 'dInsular'));
        r271_xn$derivecomposites$7Hrq('eth', 240, 'dInsular', r271_dispiro(r271_widths.center(r271_OverlayStroke), r271_flat(r1_mix(r271_SB, r271_RightSB, 0.1), r1_mix(r271_XH, r271_Ascender, -0.05)), r271_curl(r1_mix(r271_SB, r271_RightSB, 0.95), r1_mix(r271_XH, r271_Ascender, 0.35))));
        return r271_xn$createAndSaveGlyphImpl$2Lrc3c('DInsular', 42873, function () {
            var _r289_t1;
            var _r289_t0 = this;
            var r289_currentGlyph = _r289_t0;
            r289_currentGlyph.include(r271_MarkSet.capital());
            var r289_df = r271_DivFrame(1);
            var r289_fine = r1_mix(r271_ShoulderFine, r271_Stroke, 0.125);
            var r289_cofine = r271_Stroke - r289_fine;
            var r289_top = r271_CAP - r271_O;
            r289_currentGlyph.include(r271_union(r271_dispiro(r271_flat(r289_df.middle + r271_Stroke * r271_TanSlope - r271_O, r289_top - r289_cofine, r271_widths.lhs(r289_fine)), r271_curl(r289_df.middle - r271_CorrectionOMidX * r289_fine, r289_top - r289_cofine), r271_archv(), r271_flat(r289_df.leftSB, r271_CAP - r271_ArchDepthA, r271_widths.lhs(r271_Stroke)), r271_curl(r289_df.leftSB, r271_ArchDepthB), r271_arcvh(), r271_g4(r289_df.middle + r271_CorrectionOMidS, 0), r271_archv(), r271_flat(r289_df.rightSB, r271_ArchDepthA), r271_curl(r289_df.rightSB, r271_CAP - r271_ArchDepthB), r271_arcvh(), r271_straight.left.end(r289_df.middle - r271_CorrectionOMidS, r289_top)), r271_dispiro(r271_flat(r289_df.middle + r271_CorrectionOMidS, r289_top, r271_widths.lhs(r271_AdviceStroke(3))), r271_curl(r1_mix(0, r289_df.leftSB, 0.5), r289_top))));
            return void 0;
        });
    });
    return void 0;
});
