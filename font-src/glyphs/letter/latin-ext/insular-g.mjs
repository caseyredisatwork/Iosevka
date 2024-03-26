'use strict';
import * as _s0_t0 from '../../../support/utils.mjs';
var _s0_t1;
export {
    _s0_t1 as apply
};
var r1_apply, _r1_t0, _r1_t1, _r1_t2, _r1_t3, _r1_t4, _r1_t5, _r1_t6, _r1_t7;
var _r1_t8 = _s0_t0;
var r1_mix = _r1_t8.mix;
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
    r269_xn$Capture_Ext$2Lrc2b['$defineGlyphBlockImpl$'](r269_xn$Capture_Ext$2Lrc2b, 'Letter-Latin-Insular-G', function (r270_xn$Capture$2Lrc8, r270_xn$ExportCapture$2Lrc4b) {
        var _r270_t6, _r270_t7;
        var _r270_t0 = r270_xn$Capture$2Lrc8;
        var r270_xn$createAndSaveGlyphImpl$2Lrc3c = _r270_t0['$createAndSaveGlyphImpl$'];
        var r270_xn$NamedParameterPair$2Lrc9b = _r270_t0['$NamedParameterPair$'];
        var r270_xn$assignUnicodeImpl$2Lrc8b = _r270_t0['$assignUnicodeImpl$'];
        var r270_xn$execState$2Lrc0b = _r270_t0['$execState$'];
        var r270_MarkSet = _r270_t0.MarkSet;
        var _r270_t1 = r270_xn$Capture$2Lrc8.Metrics;
        var r270_Width = _r270_t1.Width;
        var r270_SB = _r270_t1.SB;
        var r270_CAP = _r270_t1.CAP;
        var r270_XH = _r270_t1.XH;
        var r270_Descender = _r270_t1.Descender;
        var r270_HVContrast = _r270_t1.HVContrast;
        var r270_O = _r270_t1.O;
        var r270_Stroke = _r270_t1.Stroke;
        var r270_VJut = _r270_t1.VJut;
        var r270_SLAB = _r270_t1.SLAB;
        var r270_RightSB = _r270_t1.RightSB;
        var r270_Middle = _r270_t1.Middle;
        var r270_SmallArchDepthA = _r270_t1.SmallArchDepthA;
        var r270_SmallArchDepthB = _r270_t1.SmallArchDepthB;
        var r270_CorrectionOMidS = _r270_t1.CorrectionOMidS;
        var r270_AdviceStroke = _r270_t1.AdviceStroke;
        var _r270_t2 = r270_xn$Capture$2Lrc8.SpiroFns;
        var r270_g4 = _r270_t2.g4;
        var r270_g2 = _r270_t2.g2;
        var r270_corner = _r270_t2.corner;
        var r270_widths = _r270_t2.widths;
        var r270_heading = _r270_t2.heading;
        var r270_alsoThruThem = _r270_t2.alsoThruThem;
        var r270_bezControls = _r270_t2.bezControls;
        var r270_archv = _r270_t2.archv;
        var r270_arcvh = _r270_t2.arcvh;
        var r270_dispiro = _r270_t2.dispiro;
        var r270_xn$spirooutline$1aao = _r270_t2['spiro-outline'];
        var _r270_t3 = r270_xn$Capture$2Lrc8.BooleFns;
        var r270_difference = _r270_t3.difference;
        var _r270_t4 = r270_xn$Capture$2Lrc8.CommonShapes.resolve();
        var r270_VSerif = _r270_t4.VSerif;
        var r270_HBar = _r270_t4.HBar;
        var _r270_t5 = r270_xn$Capture$2Lrc8['Common-Derivatives'].resolve();
        var r270_turned = _r270_t5.turned;
        var r270_InsularGShape = function (r273_top, r273_bot) {
            var _r273_t0, _r273_t1;
            return function () {
                var _r275_t1;
                var _r275_t0 = this;
                var r275_currentGlyph = _r275_t0;
                var r275_fine = r270_AdviceStroke(4);
                var r275_pl = r270_SmallArchDepthB / (r270_SmallArchDepthA + r270_SmallArchDepthB);
                var r275_pr = r270_SmallArchDepthA / (r270_SmallArchDepthA + r270_SmallArchDepthB);
                var r275_fallArcShape = [
                    [
                        0.25,
                        0.1
                    ],
                    [
                        0.5,
                        0.21
                    ],
                    [
                        0.75,
                        0.38
                    ]
                ];
                var r275_xFirstTurn = r1_mix(r270_SB, r270_RightSB, 0.3) + (r270_SLAB ? 0.75 : 0.5) * r270_Stroke * r270_HVContrast;
                var r275_xIntersection = r1_mix(r275_xFirstTurn, r270_RightSB, 0.3) - 0.5 * r270_Stroke * r270_HVContrast;
                var r275_yIntersection = r1_mix(r273_bot, r273_top, 0.55) - 0.25 * r270_Stroke;
                var r275_yFirstTurn = r1_mix(r275_yIntersection, r273_top, 0.32) - 0.2 * r270_Stroke;
                var r275_yBottomRingLeft = r1_mix(r273_bot, r275_yIntersection, 0.875 * r275_pl) + 0.25 * r270_Stroke;
                var r275_yBottomRingRight = r1_mix(r273_bot, r275_yIntersection, 0.875 * r275_pr) + 0.25 * r270_Stroke;
                var r275_yPhantomBowlEnd = r1_mix(r273_bot, r275_yIntersection, 1.2);
                r275_currentGlyph.include(r270_HBar.t(r270_SB, r270_RightSB, r273_top));
                r275_currentGlyph.include(r270_dispiro(r270_g4(r270_RightSB, r273_top - r270_Stroke, r270_widths.rhs(r275_fine)), r270_bezControls(0.7, 0.35, 1, 0.6, 12), r270_g4.down.mid(r275_xFirstTurn, r275_yFirstTurn, r270_widths.rhs.heading(r270_Stroke, {
                    'x': r270_HVContrast,
                    'y': +0.1
                })), r270_g2(r275_xIntersection, r275_yIntersection, r270_widths.center(r270_Stroke)), r270_alsoThruThem(r275_fallArcShape), r270_g4.down.mid(r270_RightSB - r270_O, r275_yBottomRingRight, r270_widths.rhs()), r270_arcvh(), r270_g4.left.mid(r270_Middle + r270_CorrectionOMidS, r273_bot + r270_O)));
                r275_currentGlyph.include(r270_difference(r270_dispiro(r270_g4.left.mid(r270_Middle + r270_CorrectionOMidS, r273_bot + r270_O, r270_widths.rhs()), r270_archv(), r270_g4.up.mid(r270_SB + r270_O, r275_yBottomRingLeft), r270_g4(r270_Width - r275_xIntersection, r275_yIntersection, r270_widths.center(r275_fine)), r270_g4(r270_RightSB, r275_yPhantomBowlEnd)), r270_xn$spirooutline$1aao(r270_corner(r275_xFirstTurn, r273_top), r270_g4.down.mid(r275_xFirstTurn, r275_yFirstTurn), r270_g2(r275_xIntersection, r275_yIntersection), r270_alsoThruThem(r275_fallArcShape), r270_g4.down.mid(r270_RightSB - r270_O, r275_yBottomRingRight), r270_corner(r270_RightSB - r270_O, r273_bot), r270_corner(2 * r270_Width, r273_bot), r270_corner(2 * r270_Width, r273_top))));
                if (r270_SLAB)
                    r275_currentGlyph.include(r270_VSerif.dl(r270_SB, r273_top, r270_VJut));
                return void 0;
            };
        };
        r270_xn$createAndSaveGlyphImpl$2Lrc3c('gInsular', 7545, function () {
            var _r282_t1;
            var _r282_t0 = this;
            var r282_currentGlyph = _r282_t0;
            r282_currentGlyph.include(r270_MarkSet.p());
            r282_currentGlyph.include(r270_InsularGShape(r270_XH, r270_Descender));
            return void 0;
        });
        r270_xn$createAndSaveGlyphImpl$2Lrc3c('GInsular', 42877, function () {
            var _r287_t1;
            var _r287_t0 = this;
            var r287_currentGlyph = _r287_t0;
            r287_currentGlyph.include(r270_MarkSet.capital());
            r287_currentGlyph.include(r270_InsularGShape(r270_CAP, 0));
            return void 0;
        });
        r270_turned('GInsularTurned', 42878, 'GInsular', r270_Middle, r270_CAP / 2);
        return r270_turned('gInsularTurned', 42879, 'gInsular', r270_Middle, r1_mix(r270_Descender, r270_XH, 0.5));
    });
    return void 0;
});
