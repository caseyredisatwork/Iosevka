'use strict';
import * as _s0_t0 from '../../../support/utils.mjs';
var _s0_t1;
export {
    _s0_t1 as apply
};
var r1_apply, _r1_t0, _r1_t1, _r1_t2, _r1_t3, _r1_t4, _r1_t5, _r1_t6, _r1_t7;
var _r1_t8 = _s0_t0;
var r1_mix = _r1_t8.mix;
var r1_linreg = _r1_t8.linreg;
var r1_clamp = _r1_t8.clamp;
var r1_fallback = _r1_t8.fallback;
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
    r269_xn$Capture_Ext$2Lrc2b['$defineGlyphBlockImpl$'](r269_xn$Capture_Ext$2Lrc2b, 'Symbol-Punctuation-Percentages', function (r270_xn$Capture$2Lrc8, r270_xn$ExportCapture$2Lrc4b) {
        var _r270_t6, _r270_t7;
        var _r270_t0 = r270_xn$Capture$2Lrc8;
        var r270_xn$createAndSaveGlyphImpl$2Lrc3c = _r270_t0['$createAndSaveGlyphImpl$'];
        var r270_xn$NamedParameterPair$2Lrc9b = _r270_t0['$NamedParameterPair$'];
        var r270_xn$assignUnicodeImpl$2Lrc8b = _r270_t0['$assignUnicodeImpl$'];
        var r270_xn$execState$2Lrc0b = _r270_t0['$execState$'];
        var r270_para = _r270_t0.para;
        var r270_DivFrame = _r270_t0.DivFrame;
        var _r270_t1 = r270_xn$Capture$2Lrc8.Metrics;
        var r270_Width = _r270_t1.Width;
        var r270_SB = _r270_t1.SB;
        var r270_CAP = _r270_t1.CAP;
        var r270_Translate = _r270_t1.Translate;
        var r270_HVContrast = _r270_t1.HVContrast;
        var r270_Upward = _r270_t1.Upward;
        var r270_Downward = _r270_t1.Downward;
        var r270_O = _r270_t1.O;
        var r270_Stroke = _r270_t1.Stroke;
        var r270_WideWidth0 = _r270_t1.WideWidth0;
        var r270_WideWidth1 = _r270_t1.WideWidth1;
        var r270_RightSB = _r270_t1.RightSB;
        var r270_PeriodRadius = _r270_t1.PeriodRadius;
        var r270_ArchDepthA = _r270_t1.ArchDepthA;
        var r270_ArchDepthB = _r270_t1.ArchDepthB;
        var r270_CorrectionOMidX = _r270_t1.CorrectionOMidX;
        var r270_AdviceStroke = _r270_t1.AdviceStroke;
        var r270_AdviceStroke2 = _r270_t1.AdviceStroke2;
        var r270_NarrowUnicodeT = _r270_t1.NarrowUnicodeT;
        var r270_WideUnicodeT = _r270_t1.WideUnicodeT;
        var _r270_t2 = r270_xn$Capture$2Lrc8.SpiroFns;
        var r270_corner = _r270_t2.corner;
        var r270_flat = _r270_t2.flat;
        var r270_curl = _r270_t2.curl;
        var r270_widths = _r270_t2.widths;
        var r270_heading = _r270_t2.heading;
        var r270_dispiro = _r270_t2.dispiro;
        var r270_xn$spirooutline$1aao = _r270_t2['spiro-outline'];
        var _r270_t3 = r270_xn$Capture$2Lrc8.BooleFns;
        var r270_difference = _r270_t3.difference;
        var _r270_t4 = r270_xn$Capture$2Lrc8.CommonShapes.resolve();
        var r270_OShape = _r270_t4.OShape;
        var r270_OShapeOutline = _r270_t4.OShapeOutline;
        var r270_HBar = _r270_t4.HBar;
        var r270_VBar = _r270_t4.VBar;
        var r270_DiagCorDs = _r270_t4.DiagCorDs;
        var r270_WithDotVariants = _r270_t4.WithDotVariants;
        var _r270_t5 = r270_xn$Capture$2Lrc8['Common-Derivatives'].resolve();
        var r270_xn$selectvariant$7Hrq = _r270_t5['select-variant'];
        var r270_NarrowUnicode = r270_NarrowUnicodeT(r270_WideWidth1);
        var r270_WideUnicode = r270_WideUnicodeT(r270_WideWidth1);
        var r270_PercentBarCor = function (r273_df, r273_sw) {
            var _r273_t0, _r273_t1;
            return r270_HVContrast / Math.sqrt(1 - Math.pow((r273_df.rightSB - r273_df.leftSB - r273_sw) / (r270_CAP - 0), 2));
        };
        var r270_PercentBarShape = function (r274_df, r274_sw) {
            var _r274_t0, _r274_t1;
            var r274_cor = r270_PercentBarCor(r274_df, r274_sw);
            return r270_xn$spirooutline$1aao(r270_corner(r274_df.leftSB, 0), r270_corner(r274_df.rightSB - r274_sw * r274_cor, r270_CAP), r270_corner(r274_df.rightSB, r270_CAP), r270_corner(r274_df.leftSB + r274_sw * r274_cor, 0));
        };
        r270_xn$createAndSaveGlyphImpl$2Lrc3c('percent.dots', null, function () {
            var _r277_t1;
            var _r277_t0 = this;
            var r277_currentGlyph = _r277_t0;
            r277_currentGlyph.include(r270_PercentBarShape(r270_DivFrame(1), r270_Stroke));
            var r277_dotwidth = r270_AdviceStroke(4) * 1.5;
            r277_currentGlyph.include(r270_VBar.l(r270_SB, r1_mix(r270_CAP, 0, 0.3), r270_CAP, r277_dotwidth));
            r277_currentGlyph.include(r270_VBar.r(r270_RightSB, 0, r1_mix(0, r270_CAP, 0.3), r277_dotwidth));
            return void 0;
        });
        r270_WithDotVariants('commercialMinusSign', 8274, function (r281_DrawAt, r281_kdr, r281_overshoot) {
            var _r281_t0, _r281_t1;
            return function () {
                var _r283_t1;
                var _r283_t0 = this;
                var r283_currentGlyph = _r283_t0;
                r283_currentGlyph.include(r270_PercentBarShape(r270_DivFrame(1), r270_AdviceStroke(4)));
                var r283_r = r270_PeriodRadius * r281_kdr;
                r283_currentGlyph.include(r281_DrawAt(r270_SB + r283_r, r270_CAP - r283_r, r283_r - r281_overshoot));
                r283_currentGlyph.include(r281_DrawAt(r270_RightSB - r283_r, 0 + r283_r, r283_r - r281_overshoot));
                return void 0;
            };
        });
        r270_xn$createAndSaveGlyphImpl$2Lrc3c('permille.NWID.dots', null, function () {
            var _r289_t1;
            var _r289_t0 = this;
            var r289_currentGlyph = _r289_t0;
            var r289_df = r270_DivFrame(r270_para.diversityM);
            r289_currentGlyph.setWidth(r289_df.width);
            var r289_refSw = r270_AdviceStroke(4, r289_df.div);
            r289_currentGlyph.include(r270_PercentBarShape(r289_df, r289_refSw));
            var r289_dotwidth = r289_refSw * 1.5;
            r289_currentGlyph.include(r270_VBar.l(r270_SB, r1_mix(r270_CAP, 0, 0.3), r270_CAP, r289_dotwidth));
            var r289_gap = (r289_df.width - r289_df.leftSB) * 0.9 - r289_refSw * r270_PercentBarCor(r289_df, r289_refSw);
            var r289_lowerDotWidth = 1.5 * r270_AdviceStroke(3, r289_gap / r270_Width);
            r289_currentGlyph.include(r270_VBar.r(r270_RightSB - r289_gap * 0.45, 0, r1_mix(0, r270_CAP, 0.3), r289_lowerDotWidth));
            r289_currentGlyph.include(r270_VBar.r(r270_RightSB, 0, r1_mix(0, r270_CAP, 0.3), r289_lowerDotWidth));
            return void 0;
        });
        r270_xn$createAndSaveGlyphImpl$2Lrc3c('basepoint.NWID.dots', null, function () {
            var _r297_t1;
            var _r297_t0 = this;
            var r297_currentGlyph = _r297_t0;
            var r297_df = r270_DivFrame(r270_para.diversityM);
            var r297_slopeDf = r270_DivFrame(r270_para.diversityM * 0.8);
            r297_currentGlyph.setWidth(r297_df.width);
            var r297_refSw = r270_AdviceStroke(5, r297_df.div);
            r297_currentGlyph.include(r270_PercentBarShape(r297_slopeDf, r297_refSw));
            var r297_dotwidth = r297_refSw * 1.5;
            r297_currentGlyph.include(r270_VBar.l(r270_SB, r1_mix(r270_CAP, 0, 0.3), r270_CAP, r297_dotwidth));
            var r297_gap = (r297_df.width - r297_df.leftSB) * 0.9 - r297_refSw * r270_PercentBarCor(r297_slopeDf, r297_refSw);
            var r297_lowerDotWidth = 1.5 * r270_AdviceStroke(4, r297_gap / r270_Width);
            r297_currentGlyph.include(r270_VBar.r(r270_RightSB - r297_gap * 0.6, 0, r1_mix(0, r270_CAP, 0.3), r297_lowerDotWidth));
            r297_currentGlyph.include(r270_VBar.r(r270_RightSB - r297_gap * 0.3, 0, r1_mix(0, r270_CAP, 0.3), r297_lowerDotWidth));
            r297_currentGlyph.include(r270_VBar.r(r270_RightSB, 0, r1_mix(0, r270_CAP, 0.3), r297_lowerDotWidth));
            return void 0;
        });
        r270_xn$createAndSaveGlyphImpl$2Lrc3c('percent.ringsContinuousSlash', null, function () {
            var _r306_t1;
            var _r306_t0 = this;
            var r306_currentGlyph = _r306_t0;
            r306_currentGlyph.setWidth(r270_Width);
            var r306_l = r270_SB / 2;
            var r306_r = r270_Width - r306_l;
            var r306_m = r1_mix(r306_l, r306_r, 1 / 2);
            var r306_ada = r270_ArchDepthA * 0.5;
            var r306_adb = r270_ArchDepthB * 0.5;
            var r306_swRing = r270_AdviceStroke(3.75);
            var r306_swBar = r270_AdviceStroke(3.75);
            var r306_fineBar = r270_AdviceStroke(4.5);
            var r306_halfGapRing = r270_AdviceStroke(6) / 2;
            var r306_cor = r270_DiagCorDs(r270_CAP, r306_r - r306_l, r306_swBar);
            r306_currentGlyph.include(r270_OShape(r270_CAP, r270_CAP / 2 + r306_halfGapRing, r306_l, r306_m - r306_halfGapRing, r306_swRing, r306_ada, r306_adb));
            r306_currentGlyph.include(r270_OShape(r270_CAP / 2 - r306_halfGapRing, 0, r306_m + r306_halfGapRing, r306_r, r306_swRing, r306_ada, r306_adb));
            r306_currentGlyph.include(r270_dispiro(r270_corner(r306_r, r270_CAP, r270_widths.rhs.heading(r306_swBar * r306_cor, r270_Downward)), r270_corner(r1_mix(r306_r, r306_l, 0.5), r1_mix(r270_CAP, 0, 0.5), r270_widths.center.heading(r306_fineBar * r306_cor, r270_Downward)), r270_corner(r306_l, 0, r270_widths.lhs.heading(r306_swBar * r306_cor, r270_Downward))));
            var r306_perMilleOffset = r270_Width + r306_l - r306_halfGapRing * 1.5 - r306_m;
            var r306_ConnnectedBar = function () {
                var _r311_t0, _r311_t1;
                return r270_difference(r270_HBar.t(r1_mix(r306_l, r306_m - r306_halfGapRing, 0.5) - r270_CorrectionOMidX * r306_swRing, r306_r - r306_swBar * r270_HVContrast, r270_CAP, r306_fineBar), r270_OShapeOutline.NoOvershoot(r270_CAP, r270_CAP / 2 + r306_halfGapRing, r306_l, r306_m - r306_halfGapRing, r306_swRing, r306_ada, r306_adb));
            };
            var r306_PerMilleProc = function () {
                var _r312_t0, _r312_t1;
                return function () {
                    var _r314_t1;
                    var _r314_t0 = this;
                    var r314_currentGlyph = _r314_t0;
                    r314_currentGlyph.setWidth(r270_WideWidth0);
                    r314_currentGlyph.include(r270_OShape(r270_CAP / 2 - r306_halfGapRing, 0, r306_m + r306_halfGapRing + r306_perMilleOffset, r306_r + r306_perMilleOffset, r306_swRing, r306_ada, r306_adb));
                    r314_currentGlyph.include(r270_Translate((r270_WideWidth0 - r306_r - r306_perMilleOffset) / 2, 0));
                    return void 0;
                };
            };
            var r306_BasePointProc = function () {
                var _r318_t0, _r318_t1;
                return function () {
                    var _r320_t1;
                    var _r320_t0 = this;
                    var r320_currentGlyph = _r320_t0;
                    r320_currentGlyph.setWidth(r270_WideWidth0);
                    r320_currentGlyph.include(r270_OShape(r270_CAP / 2 - r306_halfGapRing, 0, r306_m + r306_halfGapRing + r306_perMilleOffset, r306_r + r306_perMilleOffset, r306_swRing, r306_ada, r306_adb));
                    r320_currentGlyph.include(r270_OShape(r270_CAP / 2 - r306_halfGapRing, 0, r306_m + r306_halfGapRing + 2 * r306_perMilleOffset, r306_r + 2 * r306_perMilleOffset, r306_swRing, r306_ada, r306_adb));
                    r320_currentGlyph.include(r270_Translate((r270_WideWidth0 - r306_r - 2 * r306_perMilleOffset) / 2, 0));
                    return void 0;
                };
            };
            r270_xn$createAndSaveGlyphImpl$2Lrc3c('percent.ringsContinuousSlashAlsoConnected', null, function () {
                var _r327_t1;
                var _r327_t0 = this;
                _r327_t0.include(r306_currentGlyph, true, true);
                _r327_t0.cloneRankFromGlyph(r306_currentGlyph);
                return _r327_t0.include(r306_ConnnectedBar());
            });
            r270_xn$createAndSaveGlyphImpl$2Lrc3c('permille.WWID.ringsContinuousSlash', null, function () {
                var _r330_t1;
                var _r330_t0 = this;
                _r330_t0.include(r306_currentGlyph, true, true);
                _r330_t0.cloneRankFromGlyph(r306_currentGlyph);
                return _r330_t0.include(r306_PerMilleProc());
            });
            r270_xn$createAndSaveGlyphImpl$2Lrc3c('basepoint.WWID.ringsContinuousSlash', null, function () {
                var _r333_t1;
                var _r333_t0 = this;
                _r333_t0.include(r306_currentGlyph, true, true);
                _r333_t0.cloneRankFromGlyph(r306_currentGlyph);
                return _r333_t0.include(r306_BasePointProc());
            });
            r270_xn$createAndSaveGlyphImpl$2Lrc3c('permille.WWID.ringsContinuousSlashAlsoConnected', null, function () {
                var _r336_t1;
                var _r336_t0 = this;
                _r336_t0.include(r306_currentGlyph, true, true);
                _r336_t0.cloneRankFromGlyph(r306_currentGlyph);
                return _r336_t0.include(function () {
                    var _r338_t1;
                    var _r338_t0 = this;
                    var r338_currentGlyph = _r338_t0;
                    r338_currentGlyph.include(r306_ConnnectedBar(), true, true);
                    r338_currentGlyph.include(r306_PerMilleProc());
                    return void 0;
                });
            });
            r270_xn$createAndSaveGlyphImpl$2Lrc3c('basepoint.WWID.ringsContinuousSlashAlsoConnected', null, function () {
                var _r343_t1;
                var _r343_t0 = this;
                _r343_t0.include(r306_currentGlyph, true, true);
                _r343_t0.cloneRankFromGlyph(r306_currentGlyph);
                return _r343_t0.include(function () {
                    var _r345_t1;
                    var _r345_t0 = this;
                    var r345_currentGlyph = _r345_t0;
                    r345_currentGlyph.include(r306_ConnnectedBar(), true, true);
                    r345_currentGlyph.include(r306_BasePointProc());
                    return void 0;
                });
            });
            return void 0;
        });
        r270_xn$createAndSaveGlyphImpl$2Lrc3c('percent.ringsSegmentedSlash', null, function () {
            var _r350_t1;
            var _r350_t0 = this;
            var r350_currentGlyph = _r350_t0;
            r350_currentGlyph.setWidth(r270_Width);
            var r350_l = r270_SB / 2;
            var r350_r = r270_Width - r350_l;
            var r350_m = r1_mix(r350_l, r350_r, 1 / 2);
            var r350_ada = r270_ArchDepthA * 0.5;
            var r350_adb = r270_ArchDepthB * 0.5;
            var r350_swRing = r270_AdviceStroke(3.5);
            var r350_swBar = r270_AdviceStroke(3);
            var r350_fine = r270_AdviceStroke(4);
            var r350_cor = r270_DiagCorDs(r270_CAP, r350_r - r350_l, r350_swBar);
            var r350_pTerm = r350_fine / 2 / Math.hypot(r270_CAP, r350_r - r350_l);
            var r350_pFine = 1 / 2 - Math.max(r270_CAP / 10, r270_Stroke / 2) / Math.hypot(r270_CAP, r350_r - r350_l);
            r350_currentGlyph.include(r270_OShape(r270_CAP, r270_CAP / 2, r350_l, r350_m, r350_swRing, r350_ada, r350_adb));
            r350_currentGlyph.include(r270_OShape(r270_CAP / 2, 0, r350_m, r350_r, r350_swRing, r350_ada, r350_adb));
            r350_currentGlyph.include(r270_dispiro(r270_widths.rhs(r350_swBar * r350_cor), r270_flat(r350_r, r270_CAP, r270_heading(r270_Downward)), r270_curl(r1_mix(r350_r, r350_l, r350_pFine), r1_mix(r270_CAP, 0, r350_pFine), r270_widths.heading(r350_fine * r350_cor, 0, r270_Downward))));
            r350_currentGlyph.include(r270_dispiro(r270_widths.rhs(r350_swBar * r350_cor), r270_flat(r350_l, 0, r270_heading(r270_Upward)), r270_curl(r1_mix(r350_l, r350_r, r350_pFine), r1_mix(0, r270_CAP, r350_pFine), r270_widths.heading(r350_fine * r350_cor, 0, r270_Upward))));
            return void 0;
        });
        r270_xn$createAndSaveGlyphImpl$2Lrc3c('.WF.font-src/glyphs/symbol/punctuation/percentages.ptl.1', null, function () {
            var _r358_t1;
            var _r358_t0 = this;
            var r358_currentGlyph = _r358_t0;
            var r358_width = r270_Width * r270_para.diversityM;
            var r358_rightSB = r358_width - r270_SB;
            r358_currentGlyph.setWidth(r358_width);
            var r358_l = r270_SB / 2;
            var r358_r = r358_width - r358_l;
            var r358_m = r1_mix(r358_l, r358_r, 1 / 2);
            var r358_ada = r270_ArchDepthA * 0.5 * r270_para.diversityM;
            var r358_adb = r270_ArchDepthB * 0.5 * r270_para.diversityM;
            var r358_sw = r270_AdviceStroke2(4, 5, r270_CAP, r270_para.diversityM);
            var r358_fine = r270_AdviceStroke2(5, 5, r270_CAP, r270_para.diversityM);
            var r358_cor = r270_HVContrast / Math.sqrt(1 - Math.pow((r358_r - r358_l - r358_sw) / (r270_CAP - 0), 2));
            var r358_pTerm = r358_fine / 2 / Math.hypot(r270_CAP, r358_r - r358_l);
            var r358_pFine = 1 / 2 - r270_Stroke / 2 / Math.hypot(r270_CAP, r358_r - r358_l);
            var r358_otop = r270_CAP / 2 - Math.max(r270_CAP / 5, r358_fine * 2) / 2;
            var r358_coOtop = r270_CAP - r358_otop;
            r358_currentGlyph.include(r270_OShape(r270_CAP, r270_CAP - r358_otop, r358_l, r358_m, r358_sw, r358_ada, r358_adb));
            r358_currentGlyph.include(r270_dispiro(r270_flat(r358_l, r1_mix(r358_otop, r358_coOtop, 0.3), r270_widths.center(r358_fine)), r270_curl(r358_r, r270_CAP - r358_otop, r270_widths.center(r358_sw))));
            r270_xn$createAndSaveGlyphImpl$2Lrc3c('permille.NWID.ringsContinuousSlash', null, function () {
                var _r364_t1;
                var _r364_t0 = this;
                _r364_t0.include(r358_currentGlyph, true, true);
                _r364_t0.cloneRankFromGlyph(r358_currentGlyph);
                return _r364_t0.include(function () {
                    var _r366_t1;
                    var _r366_t0 = this;
                    var r366_currentGlyph = _r366_t0;
                    var r366_l1 = r358_l - r270_O;
                    var r366_r2 = r358_r;
                    var r366_gap = (r270_SB / 2 - r270_O * 2) * r270_para.diversityM;
                    var r366_fill = (r366_r2 - r366_l1 - r366_gap) / 2;
                    var r366_r1 = r366_l1 + r366_fill;
                    var r366_l2 = r366_r1 + r366_gap;
                    var r366_swp = r270_AdviceStroke2(4, 5, r270_CAP, r270_para.diversityM);
                    r366_currentGlyph.include(r270_OShape(r358_otop, 0, r366_l1, r366_r1, r366_swp, r358_ada, r358_adb));
                    r366_currentGlyph.include(r270_OShape(r358_otop, 0, r366_l2, r366_r2, r366_swp, r358_ada, r358_adb));
                    return void 0;
                });
            });
            r270_xn$createAndSaveGlyphImpl$2Lrc3c('basepoint.NWID.ringsContinuousSlash', null, function () {
                var _r371_t1;
                var _r371_t0 = this;
                _r371_t0.include(r358_currentGlyph, true, true);
                _r371_t0.cloneRankFromGlyph(r358_currentGlyph);
                return _r371_t0.include(function () {
                    var _r373_t1;
                    var _r373_t0 = this;
                    var r373_currentGlyph = _r373_t0;
                    var r373_l1 = r358_l - r270_O;
                    var r373_r3 = r358_r;
                    var r373_gap = (r270_SB / 2 - r270_O) * r270_para.diversityM;
                    var r373_fill = (r373_r3 - r373_l1 - 2 * r373_gap) / 3;
                    var r373_r1 = r373_l1 + r373_fill;
                    var r373_l2 = r373_r1 + r373_gap;
                    var r373_r2 = r373_l2 + r373_fill;
                    var r373_l3 = r373_r2 + r373_gap;
                    var r373_swp = r270_AdviceStroke2(6, 5, r270_CAP, r270_para.diversityM);
                    var r373_smap = r270_ArchDepthA * (1 / 3) * r270_para.diversityM;
                    var r373_smbp = r270_ArchDepthB * (1 / 3) * r270_para.diversityM;
                    r373_currentGlyph.include(r270_OShape(r358_otop, 0, r373_l1, r373_r1, r373_swp, r373_smap, r373_smbp));
                    r373_currentGlyph.include(r270_OShape(r358_otop, 0, r373_l2, r373_r2, r373_swp, r373_smap, r373_smbp));
                    r373_currentGlyph.include(r270_OShape(r358_otop, 0, r373_l3, r373_r3, r373_swp, r373_smap, r373_smbp));
                    return void 0;
                });
            });
            return void 0;
        });
        r270_xn$selectvariant$7Hrq('percent', '%');
        r270_xn$selectvariant$7Hrq('permille.NWID', r270_NarrowUnicode(8240), new r270_xn$NamedParameterPair$2Lrc9b('follow', 'permille.NWID'));
        r270_xn$selectvariant$7Hrq('permille.WWID', r270_WideUnicode(8240), new r270_xn$NamedParameterPair$2Lrc9b('follow', 'permille.WWID'));
        r270_xn$selectvariant$7Hrq('basepoint.NWID', r270_NarrowUnicode(8241), new r270_xn$NamedParameterPair$2Lrc9b('follow', 'permille.NWID'));
        return r270_xn$selectvariant$7Hrq('basepoint.WWID', r270_WideUnicode(8241), new r270_xn$NamedParameterPair$2Lrc9b('follow', 'permille.WWID'));
    });
    return void 0;
});
