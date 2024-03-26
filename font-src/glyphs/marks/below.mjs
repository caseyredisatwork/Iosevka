'use strict';
import * as _s0_t0 from 'typo-geom';
import * as _s0_t1 from '../../support/utils.mjs';
import * as _s0_t2 from '../../meta/aesthetics.mjs';
import * as _s0_t3 from '../../support/gr.mjs';
import * as _s0_t4 from '../../support/geometry/box.mjs';
var _s0_t5;
export {
    _s0_t5 as apply
};
var r1_apply, _r1_t0, _r1_t1, _r1_t2, _r1_t3, _r1_t4, _r1_t5, _r1_t6, _r1_t7;
var _r1_t8 = _s0_t0;
var r1_Arcs = _r1_t8.Arcs;
var r1_Quadify = _r1_t8.Quadify;
var r1_ShapeConv = _r1_t8.ShapeConv;
var _r1_t9 = _s0_t1;
var r1_mix = _r1_t9.mix;
var r1_linreg = _r1_t9.linreg;
var r1_clamp = _r1_t9.clamp;
var r1_fallback = _r1_t9.fallback;
var _r1_t10 = _s0_t2;
var r1_DesignParameters = _r1_t10.DesignParameters;
var _r1_t11 = _s0_t3;
var r1_TieMark = _r1_t11.TieMark;
var r1_TieGlyph = _r1_t11.TieGlyph;
var _r1_t12 = _s0_t4;
var r1_Box = _r1_t12.Box;
var r1_xn$GlyphBlocks$2Lrc2b = [];
_s0_t5 = r1_apply = function () {
    var r269_block, _r269_t4, _r269_t6;
    var _r269_t3 = this;
    var _r269_t0 = r1_xn$GlyphBlocks$2Lrc2b;
    var _r269_t1 = _r269_t0.length;
    var _r269_t2 = 0;
    var _r269_t5 = _r269_t2 < _r269_t1;
    while (_r269_t5) {
        _r269_t6 = (r269_block = _r269_t0[_r269_t2], r269_block(_r269_t3), _r269_t2 = _r269_t2 + 1);
        _r269_t5 = _r269_t2 < _r269_t1;
    }
    return _r269_t6;
};
r1_xn$GlyphBlocks$2Lrc2b.push(function (r273_xn$Capture_Ext$2Lrc2b) {
    var _r273_t0, _r273_t1;
    r273_xn$Capture_Ext$2Lrc2b['$defineGlyphBlockImpl$'](r273_xn$Capture_Ext$2Lrc2b, 'Mark-Below', function (r274_xn$Capture$2Lrc8, r274_xn$ExportCapture$2Lrc4b) {
        var _r274_t8, _r274_t9, _r274_t10, _r274_tag11;
        var _r274_t0 = r274_xn$Capture$2Lrc8;
        var r274_xn$createAndSaveGlyphImpl$2Lrc3c = _r274_t0['$createAndSaveGlyphImpl$'];
        var r274_xn$NamedParameterPair$2Lrc9b = _r274_t0['$NamedParameterPair$'];
        var r274_xn$assignUnicodeImpl$2Lrc8b = _r274_t0['$assignUnicodeImpl$'];
        var r274_xn$execState$2Lrc0b = _r274_t0['$execState$'];
        var _r274_t1 = r274_xn$Capture$2Lrc8.Metrics;
        var r274_Width = _r274_t1.Width;
        var r274_SB = _r274_t1.SB;
        var r274_XH = _r274_t1.XH;
        var r274_Translate = _r274_t1.Translate;
        var r274_HVContrast = _r274_t1.HVContrast;
        var r274_Rightward = _r274_t1.Rightward;
        var r274_Leftward = _r274_t1.Leftward;
        var r274_O = _r274_t1.O;
        var r274_OX = _r274_t1.OX;
        var r274_Stroke = _r274_t1.Stroke;
        var r274_AccentStackOffset = _r274_t1.AccentStackOffset;
        var r274_AccentClearance = _r274_t1.AccentClearance;
        var r274_AccentHeight = _r274_t1.AccentHeight;
        var r274_RightSB = _r274_t1.RightSB;
        var r274_AdviceStroke = _r274_t1.AdviceStroke;
        var r274_AdviceStroke2 = _r274_t1.AdviceStroke2;
        var _r274_t2 = r274_xn$Capture$2Lrc8.SpiroFns;
        var r274_g4 = _r274_t2.g4;
        var r274_flat = _r274_t2.flat;
        var r274_curl = _r274_t2.curl;
        var r274_widths = _r274_t2.widths;
        var r274_heading = _r274_t2.heading;
        var r274_archv = _r274_t2.archv;
        var r274_arcvh = _r274_t2.arcvh;
        var r274_dispiro = _r274_t2.dispiro;
        var _r274_t3 = r274_xn$Capture$2Lrc8.BooleFns;
        var r274_union = _r274_t3.union;
        var _r274_t4 = r274_xn$Capture$2Lrc8.CommonShapes.resolve();
        var r274_HBar = _r274_t4.HBar;
        var r274_VBar = _r274_t4.VBar;
        var r274_FlipAround = _r274_t4.FlipAround;
        var r274_WithTransform = _r274_t4.WithTransform;
        var _r274_t5 = r274_xn$Capture$2Lrc8['Common-Derivatives'].resolve();
        var r274_xn$referglyph$1aao = _r274_t5['refer-glyph'];
        var r274_xn$queryglyph$1aao = _r274_t5['query-glyph'];
        var r274_xn$deriveglyphs$7Hrq = _r274_t5['derive-glyphs'];
        var _r274_t6 = r274_xn$Capture$2Lrc8['Mark-Shared-Metrics'].resolve();
        var r274_markExtend = _r274_t6.markExtend;
        var r274_markStroke = _r274_t6.markStroke;
        var r274_markStress = _r274_t6.markStress;
        var r274_markFine = _r274_t6.markFine;
        var _r274_t7 = r274_xn$Capture$2Lrc8['Mark-Shared-Metrics'].resolve();
        var r274_markMiddle = _r274_t7.markMiddle;
        var r274_markDotsRadius = _r274_t7.markDotsRadius;
        r274_xn$ExportCapture$2Lrc4b(function () {
            var _r280_t0, _r280_t1;
            return {
                'belowMarkBot': r274_belowMarkBot,
                'belowMarkTop': r274_belowMarkTop,
                'belowMarkMid': r274_belowMarkMid,
                'belowMarkStack': r274_belowMarkStack
            };
        });
        var r274_belowMarkBot = 0 - r274_AccentClearance - r274_AccentHeight;
        var r274_belowMarkTop = 0 - r274_AccentClearance;
        var r274_belowMarkMid = r1_mix(r274_belowMarkBot, r274_belowMarkTop, 0.5);
        var r274_belowMarkStack = 0 - r274_AccentStackOffset;
        var r274_StdAnchors = function () {
            var r283_impl, r283_narrow, r283_mediumNarrow, r283_medium, r283_mediumWide, r283_wide;
            var r283_exports = {};
            r283_exports.impl = r283_impl = function (r291_padding, r291_k) {
                var _r291_t0, _r291_t1;
                return function () {
                    var _r293_t1;
                    var _r293_t0 = this;
                    var r293_currentGlyph = _r293_t0;
                    r293_currentGlyph.setMarkAnchor('below', r274_markMiddle, 0 + r291_padding * r274_AccentHeight, r274_markMiddle, r274_belowMarkStack - r291_padding * r274_AccentHeight);
                    r293_currentGlyph.setBaseAnchor('belowBraceL', r274_markMiddle - r291_k * r274_markExtend, r274_belowMarkMid);
                    r293_currentGlyph.setBaseAnchor('belowBraceR', r274_markMiddle + r291_k * r274_markExtend, r274_belowMarkMid);
                    return void 0;
                };
            };
            r283_exports.narrow = r283_narrow = function () {
                var _r298_t0, _r298_t1;
                return r283_impl(0, 0);
            };
            r283_exports.mediumNarrow = r283_mediumNarrow = function () {
                var _r300_t0, _r300_t1;
                return r283_impl(0, 0.25);
            };
            r283_exports.medium = r283_medium = function () {
                var _r302_t0, _r302_t1;
                return r283_impl(0, 0.5);
            };
            r283_exports.mediumWide = r283_mediumWide = function () {
                var _r304_t0, _r304_t1;
                return r283_impl(0, 0.75);
            };
            r283_exports.wide = r283_wide = function () {
                var _r306_t0, _r306_t1;
                return r283_impl(0, 1);
            };
            return r283_exports;
        }();
        r274_xn$createAndSaveGlyphImpl$2Lrc3c('blankBelow', null, function () {
            var _r309_t1;
            var _r309_t0 = this;
            var r309_currentGlyph = _r309_t0;
            r309_currentGlyph.setWidth(0);
            r309_currentGlyph.include(r274_StdAnchors.narrow());
            return void 0;
        });
        var r274_CedillaShape = function (r312_ext) {
            var _r312_t0, _r312_t1;
            var r312_fine = Math.min(r274_AdviceStroke(6), 0.75 * (r274_belowMarkTop - r274_belowMarkBot - r274_markStroke));
            var r312_cedillaTop = r274_belowMarkTop + 0.875 * r312_fine;
            var r312_cedillaBot = r274_belowMarkBot;
            return r274_union(r274_VBar.m(r274_markMiddle, r312_ext, r312_cedillaTop - r312_fine, r274_markStroke), r274_dispiro(r274_flat(r274_markMiddle - 0.5 * r274_markStroke * r274_HVContrast, r312_cedillaTop, r274_widths.rhs.heading(r312_fine, r274_Rightward)), r274_curl(r274_markMiddle, r312_cedillaTop, r274_heading(r274_Rightward)), r274_archv(), r274_g4(r274_markMiddle + r274_markExtend - r274_O, r1_mix(r312_cedillaTop, r312_cedillaBot, 0.5), r274_widths.rhs.heading(r1_mix(r312_fine, r274_markStroke, 0.5), {
                'x': r274_HVContrast,
                'y': -0.5 * (r274_markStroke - r312_fine) / r274_markStroke
            })), r274_arcvh(), r274_flat(r274_markMiddle, r312_cedillaBot, r274_widths.rhs.heading(r274_markStroke, r274_Leftward)), r274_curl(r274_markMiddle - r274_markExtend, r312_cedillaBot, r274_heading(r274_Leftward))));
        };
        r274_xn$createAndSaveGlyphImpl$2Lrc3c('cedillaExtShapeBelow', null, function () {
            var _r315_t1;
            var _r315_t0 = this;
            var r315_currentGlyph = _r315_t0;
            r315_currentGlyph.setWidth(0);
            r315_currentGlyph.include(r274_StdAnchors.medium());
            r315_currentGlyph.include(r274_CedillaShape(2 * r274_Stroke));
            return void 0;
        });
        r274_xn$createAndSaveGlyphImpl$2Lrc3c('cedillaExtShapeBelowOArc', null, function () {
            var _r321_t1;
            var _r321_t0 = this;
            var r321_currentGlyph = _r321_t0;
            r321_currentGlyph.setWidth(0);
            r321_currentGlyph.include(r274_StdAnchors.medium());
            r321_currentGlyph.include(r274_CedillaShape(r274_Stroke + r274_O));
            return void 0;
        });
        r274_xn$createAndSaveGlyphImpl$2Lrc3c('cedillaExtShapeBelowSOArc', null, function () {
            var _r327_t1;
            var _r327_t0 = this;
            var r327_currentGlyph = _r327_t0;
            r327_currentGlyph.setWidth(0);
            r327_currentGlyph.include(r274_StdAnchors.medium());
            r327_currentGlyph.include(r274_CedillaShape(r274_AdviceStroke2(2, 3, r274_XH) + r274_O));
            return void 0;
        });
        r274_xn$createAndSaveGlyphImpl$2Lrc3c('cedillaBelow', 807, function () {
            var _r333_t1;
            var _r333_t0 = this;
            var r333_currentGlyph = _r333_t0;
            r333_currentGlyph.setWidth(0);
            r333_currentGlyph.include(r274_StdAnchors.medium());
            r333_currentGlyph.include(r274_CedillaShape(0));
            return void 0;
        });
        r274_xn$createAndSaveGlyphImpl$2Lrc3c('iotaBelow', 837, function () {
            var _r339_t1;
            var _r339_t0 = this;
            var r339_currentGlyph = _r339_t0;
            r339_currentGlyph.setWidth(0);
            r339_currentGlyph.include(r274_StdAnchors.narrow());
            r339_currentGlyph.include(r274_VBar.m(r274_markMiddle, r274_belowMarkBot, r274_belowMarkTop, r274_markStroke));
            return void 0;
        });
        r274_xn$createAndSaveGlyphImpl$2Lrc3c('iotaLF', null, function () {
            var _r345_t1;
            var _r345_t0 = this;
            var r345_currentGlyph = _r345_t0;
            r345_currentGlyph.setWidth(0);
            r345_currentGlyph.setMarkAnchor('lf', r274_markMiddle, 0, r274_markMiddle, r274_belowMarkStack);
            r345_currentGlyph.include(r274_VBar.m(r274_markMiddle, r274_belowMarkBot, r274_belowMarkTop, r274_markStroke));
            return void 0;
        });
        r274_xn$createAndSaveGlyphImpl$2Lrc3c('leftTackBelow', 792, function () {
            var _r351_t1;
            var _r351_t0 = this;
            var r351_currentGlyph = _r351_t0;
            r351_currentGlyph.setWidth(0);
            r351_currentGlyph.include(r274_StdAnchors.mediumWide());
            r351_currentGlyph.include(r274_VBar.r(r274_markMiddle + r274_markExtend, r274_belowMarkBot, r274_belowMarkTop, r274_markFine * 2));
            r351_currentGlyph.include(r274_HBar.m(r274_markMiddle - r274_markExtend, r274_markMiddle + r274_markExtend, r1_mix(r274_belowMarkTop, r274_belowMarkBot, 0.5), r274_markFine * 2));
            return void 0;
        });
        r274_xn$createAndSaveGlyphImpl$2Lrc3c('rightTackBelow', 793, function () {
            var _r358_t1;
            var _r358_t0 = this;
            var r358_currentGlyph = _r358_t0;
            r358_currentGlyph.setWidth(0);
            r358_currentGlyph.include(r274_StdAnchors.mediumWide());
            r358_currentGlyph.include(r274_VBar.l(r274_markMiddle - r274_markExtend, r274_belowMarkBot, r274_belowMarkTop, r274_markFine * 2));
            r358_currentGlyph.include(r274_HBar.m(r274_markMiddle - r274_markExtend, r274_markMiddle + r274_markExtend, r1_mix(r274_belowMarkTop, r274_belowMarkBot, 0.5), r274_markFine * 2));
            return void 0;
        });
        r274_xn$createAndSaveGlyphImpl$2Lrc3c('leftAngleBelow', 841, function () {
            var _r365_t1;
            var _r365_t0 = this;
            var r365_currentGlyph = _r365_t0;
            r365_currentGlyph.setWidth(0);
            r365_currentGlyph.include(r274_StdAnchors.mediumWide());
            r365_currentGlyph.include(r274_VBar.r(r274_markMiddle + r274_markExtend, r274_belowMarkBot, r274_belowMarkTop, r274_markFine * 2));
            r365_currentGlyph.include(r274_HBar.t(r274_markMiddle - r274_markExtend, r274_markMiddle + r274_markExtend, r274_belowMarkTop, r274_markFine * 2));
            return void 0;
        });
        r274_xn$createAndSaveGlyphImpl$2Lrc3c('minusBelow', 800, function () {
            var _r372_t1;
            var _r372_t0 = this;
            var r372_currentGlyph = _r372_t0;
            r372_currentGlyph.setWidth(0);
            r372_currentGlyph.include(r274_StdAnchors.wide());
            r372_currentGlyph.include(r274_VBar.m(r274_markMiddle - r274_markExtend, r274_belowMarkBot, r274_belowMarkTop, r274_markFine * 2));
            r372_currentGlyph.include(r274_VBar.m(r274_markMiddle + r274_markExtend, r274_belowMarkBot, r274_belowMarkTop, r274_markFine * 2));
            r372_currentGlyph.include(r274_HBar.m(r274_markMiddle - r274_markExtend, r274_markMiddle + r274_markExtend, r274_belowMarkMid, r274_markFine * 2));
            return void 0;
        });
        r274_xn$createAndSaveGlyphImpl$2Lrc3c('bridgeBelow', 810, function () {
            var _r380_t1;
            var _r380_t0 = this;
            var r380_currentGlyph = _r380_t0;
            r380_currentGlyph.setWidth(0);
            r380_currentGlyph.include(r274_StdAnchors.wide());
            r380_currentGlyph.include(r274_VBar.m(r274_markMiddle - r274_markExtend, r274_belowMarkBot, r274_belowMarkTop, r274_markFine * 2));
            r380_currentGlyph.include(r274_VBar.m(r274_markMiddle + r274_markExtend, r274_belowMarkBot, r274_belowMarkTop, r274_markFine * 2));
            r380_currentGlyph.include(r274_HBar.t(r274_markMiddle - r274_markExtend, r274_markMiddle + r274_markExtend, r274_belowMarkTop, r274_markFine * 2));
            return void 0;
        });
        r274_xn$createAndSaveGlyphImpl$2Lrc3c('boxBelow', 827, function () {
            var _r388_t1;
            var _r388_t0 = this;
            var r388_currentGlyph = _r388_t0;
            r388_currentGlyph.setWidth(0);
            r388_currentGlyph.include(r274_StdAnchors.wide());
            var r388_boxsw = Math.min(r274_markFine * 2, (r274_belowMarkTop - r274_belowMarkBot) / 3);
            r388_currentGlyph.include(r274_VBar.m(r274_markMiddle - r274_markExtend, r274_belowMarkBot, r274_belowMarkTop, r274_markFine * 2));
            r388_currentGlyph.include(r274_VBar.m(r274_markMiddle + r274_markExtend, r274_belowMarkBot, r274_belowMarkTop, r274_markFine * 2));
            r388_currentGlyph.include(r274_HBar.b(r274_markMiddle - r274_markExtend, r274_markMiddle + r274_markExtend, r274_belowMarkBot, r388_boxsw));
            r388_currentGlyph.include(r274_HBar.t(r274_markMiddle - r274_markExtend, r274_markMiddle + r274_markExtend, r274_belowMarkTop, r388_boxsw));
            return void 0;
        });
        r274_xn$createAndSaveGlyphImpl$2Lrc3c('equalBelow', 839, function () {
            var _r397_t1;
            var _r397_t0 = this;
            var r397_currentGlyph = _r397_t0;
            r397_currentGlyph.setWidth(0);
            r397_currentGlyph.include(r274_StdAnchors.mediumWide());
            var r397_boxsw = Math.min(r274_markFine * 2, (r274_belowMarkTop - r274_belowMarkBot) / 3);
            r397_currentGlyph.include(r274_HBar.b(r274_markMiddle - r274_markExtend, r274_markMiddle + r274_markExtend, r274_belowMarkBot, r397_boxsw));
            r397_currentGlyph.include(r274_HBar.t(r274_markMiddle - r274_markExtend, r274_markMiddle + r274_markExtend, r274_belowMarkTop, r397_boxsw));
            return void 0;
        });
        r274_xn$createAndSaveGlyphImpl$2Lrc3c('shelfBelow', null, function () {
            var _r404_t1;
            var _r404_t0 = this;
            var r404_currentGlyph = _r404_t0;
            r404_currentGlyph.setWidth(0);
            r404_currentGlyph.include(r274_StdAnchors.impl(0, 1.5));
            r404_currentGlyph.include(r274_VBar.m(r274_SB - r274_Width, r274_belowMarkBot, r274_belowMarkTop, r274_markFine * 2));
            r404_currentGlyph.include(r274_VBar.m(r274_RightSB - r274_Width, r274_belowMarkBot, r274_belowMarkTop, r274_markFine * 2));
            r404_currentGlyph.include(r274_HBar.b(r274_SB - r274_Width, r274_RightSB - r274_Width, r274_belowMarkBot, r274_markFine * 2));
            return void 0;
        });
        r274_xn$createAndSaveGlyphImpl$2Lrc3c('openShelfBelow', null, function () {
            var _r412_t1;
            var _r412_t0 = this;
            var r412_currentGlyph = _r412_t0;
            r412_currentGlyph.setWidth(0);
            r412_currentGlyph.include(r274_StdAnchors.impl(0, 1.5));
            r412_currentGlyph.include(r274_VBar.m(r274_SB - r274_Width, r274_belowMarkBot, r274_belowMarkTop, r274_markFine * 2));
            r412_currentGlyph.include(r274_HBar.b(r274_SB - r274_Width, r274_RightSB - r274_Width, r274_belowMarkBot, r274_markFine * 2));
            return void 0;
        });
        var r274_mirrorAnchor = function (r417_gs, r417_gt, r417_srcCls, r417_dstCls) {
            var r417_a, _r417_t0, _r417_t1;
            if (r417_gs.markAnchors[r417_srcCls]) {
                r417_a = r417_gs.gizmo.unapply(r417_gs.markAnchors[r417_srcCls]);
                r417_gt.setMarkAnchor(r417_dstCls, r1_mix(r274_markMiddle, r417_a.x, -1), r1_mix(r274_XH / 2, r417_a.y, -1));
            }
            return r417_gs.baseAnchors[r417_srcCls] ? (r417_a = r417_gs.gizmo.unapply(r417_gs.baseAnchors[r417_srcCls]), r417_gt.setBaseAnchor(r417_dstCls, r1_mix(r274_markMiddle, r417_a.x, -1), r1_mix(r274_XH / 2, r417_a.y, -1))) : void 0;
        };
        var r274_TurnAboveMarkToBelow = function (r418_gnBelowMark, r418_unicodeBelowMark, r418_gnAboveMark) {
            var _r418_t0, _r418_t1;
            return r274_xn$deriveglyphs$7Hrq(r418_gnBelowMark, r418_unicodeBelowMark, r418_gnAboveMark, function (r419_src, r419_gr) {
                var _r419_t0, _r419_t1;
                return function () {
                    var _r421_t1;
                    var _r421_t0 = this;
                    var r421_currentGlyph = _r421_t0;
                    r421_currentGlyph.setWidth(0);
                    r421_currentGlyph.include(r274_xn$referglyph$1aao(r419_src));
                    r421_currentGlyph.include(r274_FlipAround(r274_markMiddle, r274_XH / 2));
                    var r421_aboveGlyph = r274_xn$queryglyph$1aao(r419_src);
                    if (r421_aboveGlyph) {
                        r274_mirrorAnchor(r421_aboveGlyph, r421_currentGlyph, 'above', 'below');
                        r274_mirrorAnchor(r421_aboveGlyph, r421_currentGlyph, 'aboveBraceL', 'belowBraceR');
                        r274_mirrorAnchor(r421_aboveGlyph, r421_currentGlyph, 'aboveBraceR', 'belowBraceL');
                    }
                    return void 0;
                };
            });
        };
        r274_TurnAboveMarkToBelow('graveBelow', 790, 'graveAbove');
        r274_TurnAboveMarkToBelow('acuteBelow', 791, 'acuteAbove');
        r274_TurnAboveMarkToBelow('leftHalfCircleBelow', 796, 'rightHalfCircleAbove');
        r274_TurnAboveMarkToBelow('upTackBelow', 797, 'downTackAbove');
        r274_TurnAboveMarkToBelow('downTackBelow', 798, 'upTackAbove');
        r274_TurnAboveMarkToBelow('plusBelow', 799, 'plusAbove');
        r274_TurnAboveMarkToBelow('dotBelow', 803, 'dotAbove');
        r274_TurnAboveMarkToBelow('dieresisBelow', 804, 'dieresisAbove');
        r274_TurnAboveMarkToBelow('ringBelow', 805, 'ringAbove');
        r274_TurnAboveMarkToBelow('commaBelow', 806, 'turnCommaAbove');
        r274_TurnAboveMarkToBelow('ogonekBelow', 808, 'ogonekAbove');
        r274_TurnAboveMarkToBelow('barBelow', 809, 'barAbove');
        r274_TurnAboveMarkToBelow('dblBreveBelow', 811, 'dblArchAbove');
        r274_TurnAboveMarkToBelow('caronBelow', 812, 'circumflexAbove');
        r274_TurnAboveMarkToBelow('circumflexBelow', 813, 'caronAbove');
        r274_TurnAboveMarkToBelow('breveBelow', 814, 'archAbove');
        r274_TurnAboveMarkToBelow('archBelow', 815, 'breveAbove');
        r274_TurnAboveMarkToBelow('tildeBelow', 816, 'tildeAbove');
        r274_TurnAboveMarkToBelow('macronBelow', 817, 'macronAbove');
        r274_TurnAboveMarkToBelow('underlineBelow', 818, 'overlineAbove');
        r274_TurnAboveMarkToBelow('dblUnderlineBelow', 819, 'dblOverlineAbove');
        r274_TurnAboveMarkToBelow('rightHalfCircleBelow', 825, 'leftHalfCircleAbove');
        r274_TurnAboveMarkToBelow('invBridgeBelow', 826, 'bridgeAbove');
        r274_TurnAboveMarkToBelow('dblArchBelow', 828, 'dblBreveAbove');
        r274_TurnAboveMarkToBelow('descenderBarBelow', null, 'ascenderBarAbove');
        r274_TurnAboveMarkToBelow('dblBarBelow', 840, 'dblBarAbove');
        r274_TurnAboveMarkToBelow('lrArrowBelow', 845, 'lrArrowAbove');
        r274_TurnAboveMarkToBelow('upArrowBelow', 846, 'downArrowAbove');
        r274_TurnAboveMarkToBelow('crossBelow', 851, 'crossAbove');
        r274_TurnAboveMarkToBelow('lessBelow', 852, 'greaterAbove');
        r274_TurnAboveMarkToBelow('greaterBelow', 853, 'lessAbove');
        r274_TurnAboveMarkToBelow('dblRingBelow', 858, 'dblRingAbove');
        r274_TurnAboveMarkToBelow('zigzagBelow', 7631, 'zigzagAbove');
        r274_TurnAboveMarkToBelow('wideInvertedBridgeBelow', 7673, 'wideBridgeAbove');
        r274_TurnAboveMarkToBelow('dblTildeBelow', 7677, 'dblTildeAbove');
        r274_TurnAboveMarkToBelow('elipsisBelow', 8424, 'elipsisAbove');
        r274_TurnAboveMarkToBelow('leftArrowBelow', 8430, 'rightArrowAbove');
        r274_TurnAboveMarkToBelow('rightArrowBelow', 8431, 'leftArrowAbove');
        r274_TurnAboveMarkToBelow('upArrowHeadBelow', 57348, 'downArrowHeadAbove');
        r274_TurnAboveMarkToBelow('downArrowHeadBelow', 57349, 'upArrowHeadAbove');
        r274_TurnAboveMarkToBelow('sbRsbUnderlineBelow', null, 'sbRsbOverlineAbove');
        r274_xn$createAndSaveGlyphImpl$2Lrc3c('greaterAndUpArrowheadBelow', 854, function () {
            var _r427_t1;
            var _r427_t0 = this;
            var r427_currentGlyph = _r427_t0;
            r427_currentGlyph.setWidth(0);
            r427_currentGlyph.include(r274_WithTransform(r274_Translate(-r274_markExtend, 0), r274_xn$referglyph$1aao('greaterBelow')));
            r427_currentGlyph.include(r274_WithTransform(r274_Translate(+r274_markExtend, 0), r274_xn$referglyph$1aao('upArrowHeadBelow')));
            r427_currentGlyph.include(r274_StdAnchors.impl(0, 1.5));
            return void 0;
        });
        r274_xn$createAndSaveGlyphImpl$2Lrc3c('greaterAndDownArrowheadBelow', 7679, function () {
            var _r434_t1;
            var _r434_t0 = this;
            var r434_currentGlyph = _r434_t0;
            r434_currentGlyph.setWidth(0);
            r434_currentGlyph.include(r274_WithTransform(r274_Translate(-r274_markExtend, 0), r274_xn$referglyph$1aao('greaterBelow')));
            r434_currentGlyph.include(r274_WithTransform(r274_Translate(+r274_markExtend, 0), r274_xn$referglyph$1aao('downArrowHeadBelow')));
            r434_currentGlyph.include(r274_StdAnchors.impl(0, 1.5));
            return void 0;
        });
        r274_xn$createAndSaveGlyphImpl$2Lrc3c('dblCrossBelow', 6837, function () {
            var _r441_t1;
            var _r441_t0 = this;
            var r441_currentGlyph = _r441_t0;
            r441_currentGlyph.setWidth(0);
            r441_currentGlyph.include(r274_WithTransform(r274_Translate(-r274_markExtend, 0), r274_xn$referglyph$1aao('crossBelow')));
            r441_currentGlyph.include(r274_WithTransform(r274_Translate(+r274_markExtend, 0), r274_xn$referglyph$1aao('crossBelow')));
            r441_currentGlyph.include(r274_StdAnchors.impl(0, 1.5));
            return void 0;
        });
        r274_xn$createAndSaveGlyphImpl$2Lrc3c('leftParenBelow', 6851, function () {
            var _r448_t1;
            var _r448_t0 = this;
            var r448_currentGlyph = _r448_t0;
            r448_currentGlyph.setWidth(0);
            r448_currentGlyph.setMarkAnchor('belowBraceL', r274_markMiddle, r274_belowMarkMid, r274_markMiddle - r274_markExtend, r274_belowMarkMid);
            var r448_braceDepth = r274_markExtend * 0.25;
            var r448_left = r274_markMiddle - 1.5 * r274_markExtend;
            r448_currentGlyph.include(r274_dispiro(r274_widths.lhs(r274_markFine), r274_g4(r448_left + r448_braceDepth, r274_belowMarkTop + r274_markFine), r274_g4(r448_left + r274_OX, r274_belowMarkMid), r274_g4(r448_left + r448_braceDepth, r274_belowMarkBot - r274_markFine)));
            return void 0;
        });
        r274_xn$createAndSaveGlyphImpl$2Lrc3c('rightParenBelow', 6852, function () {
            var _r454_t1;
            var _r454_t0 = this;
            var r454_currentGlyph = _r454_t0;
            r454_currentGlyph.setWidth(0);
            r454_currentGlyph.setMarkAnchor('belowBraceR', r274_markMiddle, r274_belowMarkMid, r274_markMiddle + r274_markExtend, r274_belowMarkMid);
            var r454_braceDepth = r274_markExtend * 0.25;
            var r454_right = r274_markMiddle + 1.5 * r274_markExtend;
            r454_currentGlyph.include(r274_dispiro(r274_widths.rhs(r274_markFine), r274_g4(r454_right - r454_braceDepth, r274_belowMarkTop + r274_markFine), r274_g4(r454_right - r274_OX, r274_belowMarkMid), r274_g4(r454_right - r454_braceDepth, r274_belowMarkBot - r274_markFine)));
            return void 0;
        });
        return r274_xn$createAndSaveGlyphImpl$2Lrc3c('parenBelow', 6845, function () {
            var _r460_t1;
            var _r460_t0 = this;
            var r460_currentGlyph = _r460_t0;
            r460_currentGlyph.setWidth(0);
            r460_currentGlyph.include(r274_xn$referglyph$1aao('leftParenBelow'));
            r460_currentGlyph.include(r274_xn$referglyph$1aao('rightParenBelow'));
            return void 0;
        });
    });
    return void 0;
});
