'use strict';
import * as _s0_t0 from '../../support/utils.mjs';
import * as _s0_t1 from '../../support/gr.mjs';
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
var r1_AnyCv = _r1_t9.AnyCv;
var r1_getGrMesh = _r1_t9.getGrMesh;
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
    r270_xn$Capture_Ext$2Lrc2b['$defineGlyphBlockImpl$'](r270_xn$Capture_Ext$2Lrc2b, 'Digits-Eight', function (r271_xn$Capture$2Lrc8, r271_xn$ExportCapture$2Lrc4b) {
        var _r271_t8, _r271_t9;
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
        var r271_HVContrast = _r271_t1.HVContrast;
        var r271_Upward = _r271_t1.Upward;
        var r271_Downward = _r271_t1.Downward;
        var r271_O = _r271_t1.O;
        var r271_OX = _r271_t1.OX;
        var r271_ArchDepth = _r271_t1.ArchDepth;
        var r271_Stroke = _r271_t1.Stroke;
        var r271_CThin = _r271_t1.CThin;
        var r271_RightSB = _r271_t1.RightSB;
        var r271_Middle = _r271_t1.Middle;
        var r271_ArchDepthA = _r271_t1.ArchDepthA;
        var r271_ArchDepthB = _r271_t1.ArchDepthB;
        var r271_CorrectionOMidX = _r271_t1.CorrectionOMidX;
        var r271_CorrectionOMidS = _r271_t1.CorrectionOMidS;
        var r271_AdviceStroke2 = _r271_t1.AdviceStroke2;
        var r271_StrokeWidthBlend = _r271_t1.StrokeWidthBlend;
        var r271_ArchDepthAOf = _r271_t1.ArchDepthAOf;
        var r271_ArchDepthBOf = _r271_t1.ArchDepthBOf;
        var r271_YSmoothMidR = _r271_t1.YSmoothMidR;
        var r271_YSmoothMidL = _r271_t1.YSmoothMidL;
        var _r271_t2 = r271_xn$Capture$2Lrc8.SpiroFns;
        var r271_g4 = _r271_t2.g4;
        var r271_g2 = _r271_t2.g2;
        var r271_corner = _r271_t2.corner;
        var r271_close = _r271_t2.close;
        var r271_end = _r271_t2.end;
        var r271_straight = _r271_t2.straight;
        var r271_widths = _r271_t2.widths;
        var r271_heading = _r271_t2.heading;
        var r271_alsoThru = _r271_t2.alsoThru;
        var r271_alsoThruThem = _r271_t2.alsoThruThem;
        var r271_archv = _r271_t2.archv;
        var r271_arcvh = _r271_t2.arcvh;
        var r271_dispiro = _r271_t2.dispiro;
        var r271_xn$spirooutline$1aao = _r271_t2['spiro-outline'];
        var _r271_t3 = r271_xn$Capture$2Lrc8.BooleFns;
        var r271_union = _r271_t3.union;
        var r271_difference = _r271_t3.difference;
        var _r271_t4 = r271_xn$Capture$2Lrc8.CommonShapes.resolve();
        var r271_MaskAbove = _r271_t4.MaskAbove;
        var r271_MaskBelow = _r271_t4.MaskBelow;
        var _r271_t5 = r271_xn$Capture$2Lrc8['Common-Derivatives'].resolve();
        var r271_xn$selectvariant$7Hrq = _r271_t5['select-variant'];
        var r271_alias = _r271_t5.alias;
        var _r271_t6 = r271_xn$Capture$2Lrc8['Digits-Shared'].resolve();
        var r271_CodeLnum = _r271_t6.CodeLnum;
        var r271_CodeOnum = _r271_t6.CodeOnum;
        var _r271_t7 = r271_xn$Capture$2Lrc8['Letter-Blackboard'].resolve();
        var r271_BBS = _r271_t7.BBS;
        var r271_BBD = _r271_t7.BBD;
        var r271_EightPr = r271_StrokeWidthBlend(0.85, 0.925);
        var r271_EightShape = function (r276_top) {
            var _r276_t0, _r276_t1;
            var r276_stroke = r271_AdviceStroke2(2, 3, r271_CAP);
            var r276_p = 0.96;
            var r276_l = r271_SB + r271_OX;
            var r276_r = r271_RightSB - r271_OX;
            return r271_dispiro(r271_widths.rhs(r276_stroke), r271_g4.right.mid(r271_Middle - r271_CorrectionOMidS, r276_top - r271_O), r271_archv(), r271_g4(r1_mix(r276_l, r276_r, r276_p), r276_top - r271_ArchDepthBOf(r271_ArchDepth * r271_EightPr * r276_p, r271_Width)), r271_alsoThru.g2(0.5, 0.5, r271_widths.center(r276_stroke)), r271_g4(r276_l, r271_ArchDepthBOf(r271_ArchDepth * r271_EightPr, r271_Width), r271_widths.lhs(r276_stroke)), r271_arcvh(), r271_g4.right.mid(r271_Middle + r271_CorrectionOMidS, r271_O), r271_archv(), r271_g4(r276_r, r271_ArchDepthAOf(r271_ArchDepth * r271_EightPr, r271_Width), r271_widths.lhs(r276_stroke)), r271_alsoThru.g2(0.5, 0.5, r271_widths.center(r276_stroke)), r271_g4(r1_mix(r276_r, r276_l, r276_p), r276_top - r271_ArchDepthAOf(r271_ArchDepth * r271_EightPr * r276_p, r271_Width), r271_widths.rhs(r276_stroke)), r271_arcvh(), r271_close());
        };
        r271_xn$createAndSaveGlyphImpl$2Lrc3c('eight.lnum.crossing', null, function () {
            var _r279_t1;
            var _r279_t0 = this;
            var r279_currentGlyph = _r279_t0;
            r279_currentGlyph.include(r271_MarkSet.capital());
            r279_currentGlyph.include(r271_EightShape(r271_CAP));
            return void 0;
        });
        var r271_EightCirclesShape = function (r282_stroke, r282_top) {
            var _r282_t0, _r282_t1;
            var r282_pShrink = 1;
            var r282_pSizeDiffY = r271_StrokeWidthBlend(0.95, 0.94);
            var r282_pSizeDiffX = r271_StrokeWidthBlend(0.95, 0.96);
            var r282_yMid = r282_top / (1 + r282_pSizeDiffY);
            var r282_ada = r271_ArchDepthAOf(r271_ArchDepth * 0.9, r271_Width);
            var r282_adb = r271_ArchDepthBOf(r271_ArchDepth * 0.9, r271_Width);
            var r282_adaTop = r271_ArchDepthAOf(r271_ArchDepth * 0.9 * r282_pSizeDiffY, r271_Width);
            var r282_adbTop = r271_ArchDepthBOf(r271_ArchDepth * 0.9 * r282_pSizeDiffY, r271_Width);
            var r282_botLeft = r1_mix(r271_SB, r271_RightSB, 1 - r282_pShrink);
            var r282_botRight = r1_mix(r271_SB, r271_RightSB, r282_pShrink);
            var r282_topLeft = r1_mix(r271_SB, r271_RightSB, 1 - r282_pShrink * r282_pSizeDiffX);
            var r282_topRight = r1_mix(r271_SB, r271_RightSB, r282_pShrink * r282_pSizeDiffX);
            var r282_fine = r282_stroke * r271_CThin;
            var r282_mc = r271_CorrectionOMidX * r282_stroke;
            var r282_coFine = r282_stroke / 2 - (r282_stroke - r282_fine);
            var r282_spT = r271_StrokeWidthBlend(2.08, 2.2);
            var r282_spB = r271_StrokeWidthBlend(2.18, 2.2);
            return r271_union(r271_dispiro(r271_widths.rhs(r282_stroke), r271_g4(r271_Middle - r282_mc, r282_top - r271_O), r271_archv.superness(r282_spB), r271_g4(r282_topRight - r271_OX, r271_YSmoothMidR(r282_top - r271_O, r282_yMid - r282_coFine, r282_adaTop, r282_adbTop)), r271_arcvh.superness(r282_spT), r271_g4(r271_Middle + r282_mc, r282_yMid - r282_coFine, r271_widths.rhs(r282_fine)), r271_archv.superness(r282_spT), r271_g4(r282_topLeft + r271_OX, r271_YSmoothMidL(r282_top - r271_O, r282_yMid - r282_coFine, r282_adaTop, r282_adbTop), r271_widths.rhs(r282_stroke)), r271_arcvh.superness(r282_spB), r271_close()), r271_dispiro(r271_widths.rhs(r282_stroke), r271_g4(r271_Middle + r282_mc, r271_O), r271_archv.superness(r282_spB), r271_g4(r282_botLeft + r271_OX, r271_YSmoothMidL(r282_yMid + r282_coFine, r271_O, r282_ada, r282_adb)), r271_arcvh.superness(r282_spT), r271_g4(r271_Middle - r282_mc, r282_yMid + r282_coFine, r271_widths.rhs(r282_fine)), r271_archv.superness(r282_spT), r271_g4(r282_botRight - r271_OX, r271_YSmoothMidR(r282_yMid + r282_coFine, r271_O, r282_ada, r282_adb), r271_widths.rhs(r282_stroke)), r271_arcvh.superness(r282_spB), r271_close()));
        };
        r271_xn$createAndSaveGlyphImpl$2Lrc3c('eight.lnum.twoCircles', null, function () {
            var _r285_t1;
            var _r285_t0 = this;
            var r285_currentGlyph = _r285_t0;
            r285_currentGlyph.include(r271_MarkSet.capital());
            r285_currentGlyph.include(r271_EightCirclesShape(r271_AdviceStroke2(2, 3, r271_CAP), r271_CAP));
            return void 0;
        });
        var r271_EightCrossingAsymmetricShape = function (r288_top) {
            var _r288_t0, _r288_t1;
            var r288_stroke = r271_AdviceStroke2(2, 3, r271_CAP);
            var r288_fine = r271_AdviceStroke2(3, 4, r271_CAP);
            var r288_p = 0.96;
            var r288_l = r271_SB + r271_OX;
            var r288_r = r271_RightSB - r271_OX;
            var r288_arch = r271_ArchDepth * r1_mix(1, r271_EightPr, 0.5);
            var r288_gap = (r288_r - r288_l) * 0.25;
            var r288_Spine = function (r289_kty) {
                var _r289_t0, _r289_t1;
                return [
                    r289_kty(r271_Middle - r271_CorrectionOMidS, r288_top - r271_O, r271_widths.lhs(r288_stroke)),
                    r271_archv(),
                    r271_g4(r1_mix(r288_r, r288_l, r288_p), r288_top - r271_ArchDepthAOf(r288_arch * r288_p, r271_Width)),
                    r271_alsoThruThem([
                        [
                            0.34,
                            0.45,
                            2 / 3
                        ],
                        [
                            0.66,
                            0.55,
                            1 / 3
                        ]
                    ], {
                        'blend': function (r290_rt) {
                            var _r290_t0, _r290_t1;
                            return r271_widths(r288_stroke * r290_rt, r288_stroke * (1 - r290_rt));
                        }
                    }),
                    r271_g4(r288_r, r271_ArchDepthAOf(r288_arch, r271_Width), r271_widths.rhs(r288_stroke)),
                    r271_arcvh(),
                    r289_kty(r271_Middle + r271_CorrectionOMidS, r271_O)
                ];
            };
            var r288_CoSpineMask = function (r291_xFar) {
                var _r291_t0, _r291_t1;
                return r271_xn$spirooutline$1aao(r271_corner(r291_xFar, 2 * r271_CAP), r271_corner(r271_Middle - r271_CorrectionOMidS, 2 * r271_CAP), r288_Spine(r271_corner), r271_corner(r271_Middle + r271_CorrectionOMidS, -r271_CAP), r271_corner(r291_xFar, -r271_CAP));
            };
            return r271_union(r271_difference(r271_dispiro(r271_g4.right.mid(r271_Middle - r271_CorrectionOMidS, r288_top - r271_O, r271_widths.rhs(r288_stroke)), r271_g4.down.mid(r1_mix(r288_l, r288_r, r288_p), r288_top - r271_ArchDepthBOf(r288_arch * r288_p, r271_Width)), r271_straight.left.end(0, r288_top * 0.4 - r288_stroke * 0.5, r271_widths.rhs(r288_fine))), r288_CoSpineMask(-r271_Width * 4), r271_MaskBelow(r288_arch)), r271_difference(r271_dispiro(r271_straight.left.start(r271_Width, r288_top * 0.6 + r288_stroke * 0.5, r271_widths.lhs(r288_fine)), r271_g4.down.mid(r288_l, r271_ArchDepthBOf(r288_arch, r271_Width), r271_widths.lhs(r288_stroke)), r271_g4.right.mid(r271_Middle + r271_CorrectionOMidS, r271_O)), r288_CoSpineMask(r271_Width * 4), r271_MaskAbove(r288_top - r288_arch * r288_p)), r271_dispiro(r288_Spine(r271_g4.left.mid)));
        };
        r271_xn$createAndSaveGlyphImpl$2Lrc3c('eight.lnum.crossingAsymmetric', null, function () {
            var _r294_t1;
            var _r294_t0 = this;
            var r294_currentGlyph = _r294_t0;
            r294_currentGlyph.include(r271_MarkSet.capital());
            r294_currentGlyph.include(r271_EightCrossingAsymmetricShape(r271_CAP));
            return void 0;
        });
        r271_xn$selectvariant$7Hrq('eight.lnum', r271_CodeLnum('8'), new r271_xn$NamedParameterPair$2Lrc9b('follow', 'eight'));
        r271_alias('eight.onum', r271_CodeOnum('8'), 'eight.lnum');
        r271_xn$createAndSaveGlyphImpl$2Lrc3c('rotatedPropto', null, function () {
            var _r300_t1;
            var _r300_t0 = this;
            var r300_currentGlyph = _r300_t0;
            var r300_p = 0.96;
            var r300_py = 0.4;
            var r300_l = r271_SB + r271_OX;
            var r300_r = r271_RightSB - r271_OX;
            r300_currentGlyph.include(r271_dispiro(r271_widths.lhs(), r271_straight.up.start(r300_r, 0, r271_heading(r271_Upward)), r271_alsoThru(0.5, 1 - r300_py, r271_widths(r271_Stroke * r300_py, r271_Stroke * (1 - r300_py))), r271_g4(r1_mix(r300_r, r300_l, r300_p), r271_CAP - r271_ArchDepthA * r300_p * r271_EightPr, r271_widths.rhs()), r271_arcvh(), r271_g4(r271_Middle - r271_CorrectionOMidS, r271_CAP - r271_O), r271_archv(), r271_g4(r1_mix(r300_l, r300_r, r300_p), r271_CAP - r271_ArchDepthB * r300_p * r271_EightPr), r271_alsoThru(0.5, r300_py, r271_widths(r271_Stroke * r300_py, r271_Stroke * (1 - r300_py))), r271_straight.down.end(r300_l, 0, r271_widths.heading(r271_Stroke, 0, r271_Downward))));
            return void 0;
        });
        var r271_BBEightSd = function () {
            var _r302_t6;
            var _r302_t7 = arguments;
            var _r302_t0 = [].slice.call(_r302_t7, 0);
            var _r302_t1 = [];
            var _r302_t2 = 0;
            while (_r302_t2 < _r302_t0.length) {
                if (!(_r302_t0[_r302_t2] instanceof r271_xn$NamedParameterPair$2Lrc9b))
                    _r302_t1.push(_r302_t0[_r302_t2]);
                _r302_t2 = _r302_t2 + 1;
            }
            var _r302_t3 = _r302_t0;
            var _r302_t4 = _r302_t3.length;
            var _r302_t5 = 0;
            while (_r302_t5 < _r302_t4) {
                _r302_t2 = _r302_t3[_r302_t5];
                if (_r302_t2 && _r302_t2 instanceof r271_xn$NamedParameterPair$2Lrc9b && _r302_t2.left === 'top')
                    r302_top = _r302_t2.right;
                if (_r302_t2 && _r302_t2 instanceof r271_xn$NamedParameterPair$2Lrc9b && _r302_t2.left === 'swStart')
                    r302_swStart = _r302_t2.right;
                if (_r302_t2 && _r302_t2 instanceof r271_xn$NamedParameterPair$2Lrc9b && _r302_t2.left === 'swEnd')
                    r302_swEnd = _r302_t2.right;
                if (_r302_t2 && _r302_t2 instanceof r271_xn$NamedParameterPair$2Lrc9b && _r302_t2.left === 'kTop')
                    r302_kTop = _r302_t2.right;
                if (_r302_t2 && _r302_t2 instanceof r271_xn$NamedParameterPair$2Lrc9b && _r302_t2.left === 'sign')
                    r302_sign = _r302_t2.right;
                if (_r302_t2 && _r302_t2 instanceof r271_xn$NamedParameterPair$2Lrc9b && _r302_t2.left === 'OffsetLT')
                    r302_OffsetLT = _r302_t2.right;
                if (_r302_t2 && _r302_t2 instanceof r271_xn$NamedParameterPair$2Lrc9b && _r302_t2.left === 'OffsetRB')
                    r302_OffsetRB = _r302_t2.right;
                if (_r302_t2 && _r302_t2 instanceof r271_xn$NamedParameterPair$2Lrc9b && _r302_t2.left === 'OffsetC')
                    r302_OffsetC = _r302_t2.right;
                _r302_t5 = _r302_t5 + 1;
            }
            var r302_top = r1_fallback(r302_top, _r302_t1[0]);
            var r302_swStart = r1_fallback(r302_swStart, _r302_t1[1]);
            var r302_swEnd = r1_fallback(r302_swEnd, _r302_t1[2]);
            var r302_kTop = r1_fallback(r302_kTop, _r302_t1[3]);
            var r302_sign = r1_fallback(r302_sign, _r302_t1[4]);
            var r302_OffsetLT = r1_fallback(r302_OffsetLT, _r302_t1[5]);
            var r302_OffsetRB = r1_fallback(r302_OffsetRB, _r302_t1[6]);
            var r302_OffsetC = r1_fallback(r302_OffsetC, _r302_t1[7]);
            var r302_stroke = Math.max(r302_swStart, r302_swEnd);
            var r302_fine = Math.min(r302_swStart, r302_swEnd);
            var r302_soStart = r302_stroke - r302_swStart;
            var r302_soEnd = r302_stroke - r302_swEnd;
            var r302_bbOvershoot = r271_BBD / 8;
            var r302_xLeftTop = r1_mix(r271_SB, r271_RightSB, 1 - r302_kTop) - r302_bbOvershoot;
            var r302_xRightTop = r1_mix(r271_SB, r271_RightSB, r302_kTop);
            var r302_xLeftBot = r271_SB + r271_OX;
            var r302_xRightBot = r271_RightSB - r271_OX + r302_bbOvershoot;
            var r302_ada = r271_ArchDepthAOf(r271_ArchDepth * r271_EightPr, r271_Width);
            var r302_adb = r271_ArchDepthBOf(r271_ArchDepth * r271_EightPr, r271_Width);
            var r302_NcCenterX = r1_mix(r302_xLeftTop, r302_xRightBot, 0.5);
            var r302_NcCenterY = r1_mix(r302_top - r302_ada, r302_ada, 0.5);
            var r302_Center = function (r307_s) {
                var _r307_t0, _r307_t1;
                return {
                    'x': r1_mix(r302_xLeftTop + r302_OffsetLT(r307_s).x, r302_xRightBot - r302_OffsetRB(r307_s).x, 0.5),
                    'y': r1_mix(r302_top - r302_ada, r302_ada, 0.5)
                };
            };
            return r271_dispiro(r271_g2(r302_Center(1).x + r302_OffsetC(1).x, r302_Center(1).y + r302_OffsetC(1).y, r271_widths.center(r302_stroke)), r271_g4(r302_xRightTop - r271_HVContrast * r302_soStart, r302_top - r302_adb, r271_widths.lhs(r302_fine)), r271_arcvh(), r271_g4(r271_Middle - r271_CorrectionOMidX * r302_stroke - r302_bbOvershoot / 2, r302_top - r271_O - r302_soStart), r271_archv(), r271_g4(r302_xLeftTop + r302_OffsetLT(r302_sign).x, r302_top - r302_ada + r302_OffsetLT(r302_sign).y), r271_g2(r302_Center(r302_sign).x + r302_OffsetC(r302_sign).x, r302_Center(r302_sign).y + r302_OffsetC(r302_sign).y, r271_widths.center(r302_stroke)), r271_g4(r302_xRightBot - r302_OffsetRB(r302_sign).x, r302_ada + r302_OffsetRB(r302_sign).y, r271_widths.rhs(r302_fine)), r271_arcvh(), r271_g4(r271_Middle + r271_CorrectionOMidX * r302_stroke + r302_bbOvershoot / 2, r271_O + r302_soEnd), r271_archv(), r271_g4(r302_xLeftBot + r271_HVContrast * r302_soEnd, r302_adb, r271_widths.rhs(r302_fine)), r271_g2(r302_Center(-1).x + r302_OffsetC(-1).x, r302_Center(-1).y + r302_OffsetC(-1).y, r271_widths.center(r302_stroke)));
        };
        return r271_xn$createAndSaveGlyphImpl$2Lrc3c('mathbb/eight', 120800, function () {
            var r310_sign, _r310_t4;
            var _r310_t3 = this;
            var r310_currentGlyph = _r310_t3;
            r310_currentGlyph.include(r271_MarkSet.capital());
            var r310_theta = Math.PI / 4;
            var _r310_t0 = [
                1,
                -1
            ];
            var _r310_t1 = _r310_t0.length;
            var _r310_t2 = 0;
            while (_r310_t2 < _r310_t1) {
                r310_sign = _r310_t0[_r310_t2];
                r310_currentGlyph.include(r271_BBEightSd(new r271_xn$NamedParameterPair$2Lrc9b('top', r271_CAP), new r271_xn$NamedParameterPair$2Lrc9b('swStart', r271_BBS * (r310_sign > 0 ? r271_CThin : 1)), new r271_xn$NamedParameterPair$2Lrc9b('swEnd', r271_BBS * (r310_sign < 0 ? r271_CThin : 1)), new r271_xn$NamedParameterPair$2Lrc9b('kTop', 0.96), new r271_xn$NamedParameterPair$2Lrc9b('ess', r271_BBD), new r271_xn$NamedParameterPair$2Lrc9b('sign', r310_sign), new r271_xn$NamedParameterPair$2Lrc9b('OffsetC', function (r321_s) {
                    var _r321_t0, _r321_t1;
                    return {
                        'x': 0.5 * r321_s * r271_BBD * Math.sin(r310_theta),
                        'y': 0.5 * r321_s * r271_BBD * Math.cos(r310_theta)
                    };
                }), new r271_xn$NamedParameterPair$2Lrc9b('OffsetLT', function (r323_s) {
                    var _r323_t0, _r323_t1;
                    return {
                        'x': r323_s > 0 ? r271_BBD / 2 : 0,
                        'y': (r323_s > 0 ? 0.25 : 0.375) * r323_s * r271_BBD * Math.cos(r310_theta)
                    };
                }), new r271_xn$NamedParameterPair$2Lrc9b('OffsetRB', function (r325_s) {
                    var _r325_t0, _r325_t1;
                    return {
                        'x': r325_s < 0 ? r271_BBD / 2 : 0,
                        'y': (r325_s < 0 ? 0.25 : 0.375) * r325_s * r271_BBD * Math.cos(r310_theta)
                    };
                })));
                _r310_t2 = _r310_t2 + 1;
            }
            return void 0;
        });
    });
    return void 0;
});
