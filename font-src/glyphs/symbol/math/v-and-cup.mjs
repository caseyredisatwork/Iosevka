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
    r269_xn$Capture_Ext$2Lrc2b['$defineGlyphBlockImpl$'](r269_xn$Capture_Ext$2Lrc2b, 'Symbol-Math-VAndCup', function (r270_xn$Capture$2Lrc8, r270_xn$ExportCapture$2Lrc4b) {
        var _r270_leti11, _r270_leti12, _r270_leti13, _r270_leti14, _r270_leti15, _r270_leti16, _r270_leti17, _r270_leti18, _r270_leti19, _r270_t20, _r270_t21, _r270_t26, _r270_tag27, _r270_t33, _r270_tag34, _r270_t40, _r270_tag41, _r270_t47, _r270_tag48, _r270_t54, _r270_tag55, _r270_t61, _r270_tag62, _r270_t68, _r270_tag69, _r270_t75, _r270_tag76, _r270_t82, _r270_tag83;
        var _r270_t0 = r270_xn$Capture$2Lrc8;
        var r270_xn$createAndSaveGlyphImpl$2Lrc3c = _r270_t0['$createAndSaveGlyphImpl$'];
        var r270_xn$NamedParameterPair$2Lrc9b = _r270_t0['$NamedParameterPair$'];
        var r270_xn$assignUnicodeImpl$2Lrc8b = _r270_t0['$assignUnicodeImpl$'];
        var r270_xn$execState$2Lrc0b = _r270_t0['$execState$'];
        var r270_AS_BASE = _r270_t0.AS_BASE;
        var r270_ALSO_METRICS = _r270_t0.ALSO_METRICS;
        var r270_DivFrame = _r270_t0.DivFrame;
        var _r270_t1 = r270_xn$Capture$2Lrc8.Metrics;
        var r270_Width = _r270_t1.Width;
        var r270_SB = _r270_t1.SB;
        var r270_SymbolMid = _r270_t1.SymbolMid;
        var r270_OperTop = _r270_t1.OperTop;
        var r270_OperBot = _r270_t1.OperBot;
        var r270_Scale = _r270_t1.Scale;
        var r270_Translate = _r270_t1.Translate;
        var r270_HVContrast = _r270_t1.HVContrast;
        var r270_Downward = _r270_t1.Downward;
        var r270_ArchDepth = _r270_t1.ArchDepth;
        var r270_Stroke = _r270_t1.Stroke;
        var r270_CThin = _r270_t1.CThin;
        var r270_HalfStroke = _r270_t1.HalfStroke;
        var r270_RightSB = _r270_t1.RightSB;
        var r270_Middle = _r270_t1.Middle;
        var r270_DotRadius = _r270_t1.DotRadius;
        var r270_AdviceStroke = _r270_t1.AdviceStroke;
        var r270_OperatorStroke = _r270_t1.OperatorStroke;
        var r270_ArchDepthAOf = _r270_t1.ArchDepthAOf;
        var r270_ArchDepthBOf = _r270_t1.ArchDepthBOf;
        var _r270_t2 = r270_xn$Capture$2Lrc8.SpiroFns;
        var r270_g4 = _r270_t2.g4;
        var r270_corner = _r270_t2.corner;
        var r270_flat = _r270_t2.flat;
        var r270_curl = _r270_t2.curl;
        var r270_end = _r270_t2.end;
        var r270_straight = _r270_t2.straight;
        var r270_widths = _r270_t2.widths;
        var r270_heading = _r270_t2.heading;
        var r270_dispiro = _r270_t2.dispiro;
        var r270_xn$spirooutline$1aao = _r270_t2['spiro-outline'];
        var _r270_t3 = r270_xn$Capture$2Lrc8.BooleFns;
        var r270_union = _r270_t3.union;
        var r270_intersection = _r270_t3.intersection;
        var r270_difference = _r270_t3.difference;
        var _r270_t4 = r270_xn$Capture$2Lrc8.CommonShapes.resolve();
        var r270_HBar = _r270_t4.HBar;
        var r270_VBar = _r270_t4.VBar;
        var r270_Ungizmo = _r270_t4.Ungizmo;
        var r270_Regizmo = _r270_t4.Regizmo;
        var r270_FlipAround = _r270_t4.FlipAround;
        var r270_WithDotVariants = _r270_t4.WithDotVariants;
        var _r270_t5 = r270_xn$Capture$2Lrc8['Common-Derivatives'].resolve();
        var r270_xn$referglyph$1aao = _r270_t5['refer-glyph'];
        var r270_alias = _r270_t5.alias;
        var r270_turned = _r270_t5.turned;
        var _r270_t6 = r270_xn$Capture$2Lrc8['Letter-Latin-U'].resolve();
        var r270_UShape = _r270_t6.UShape;
        var _r270_t7 = r270_xn$Capture$2Lrc8['Letter-Greek-Pi'].resolve();
        var r270_PiShape = _r270_t7.PiShape;
        var _r270_t8 = r270_xn$Capture$2Lrc8['Symbol-Arrow'].resolve();
        var r270_ArrowShape = _r270_t8.ArrowShape;
        var _r270_t9 = r270_xn$Capture$2Lrc8['Symbol-Math-Relation-Common'].resolve();
        var r270_EqualHalfSpace = _r270_t9.EqualHalfSpace;
        var _r270_t10 = r270_xn$Capture$2Lrc8.NotGlyphFn.resolve();
        var r270_NotGlyphSw = _r270_t10.NotGlyphSw;
        var r270_VeeShape = function (r278_top, r278_bot, r278_sw) {
            var _r278_t0, _r278_t1;
            return r270_union(r270_dispiro(r270_widths.lhs(r1_fallback(r278_sw, r270_OperatorStroke)), r270_flat(r270_SB, r278_top, r270_heading(r270_Downward)), r270_curl(r270_Middle - r270_HalfStroke * r270_HVContrast, r278_bot, r270_heading(r270_Downward))), r270_dispiro(r270_widths.rhs(r1_fallback(r278_sw, r270_OperatorStroke)), r270_flat(r270_RightSB, r278_top, r270_heading(r270_Downward)), r270_curl(r270_Middle + r270_HalfStroke * r270_HVContrast, r278_bot, r270_heading(r270_Downward))));
        };
        var r270_WedgeShape = function (r279_top, r279_bot, r279_sw) {
            var _r279_t0, _r279_t1;
            return r270_xn$createAndSaveGlyphImpl$2Lrc3c(null, null, function () {
                var _r282_t1;
                var _r282_t0 = this;
                var r282_currentGlyph = _r282_t0;
                r282_currentGlyph.include(r270_VeeShape(r279_top, r279_bot, r279_sw));
                r282_currentGlyph.include(r270_FlipAround(r270_Middle, r1_mix(r279_top, r279_bot, 0.5)));
                return void 0;
            });
        };
        r270_xn$createAndSaveGlyphImpl$2Lrc3c('wedge', 8743, r270_WedgeShape(r270_OperTop, r270_OperBot));
        r270_xn$createAndSaveGlyphImpl$2Lrc3c('vee', 8744, r270_VeeShape(r270_OperTop, r270_OperBot));
        r270_xn$createAndSaveGlyphImpl$2Lrc3c('wedge/aplThin', null, r270_WedgeShape(r270_OperTop, r270_OperBot, r270_AdviceStroke(4)));
        r270_xn$createAndSaveGlyphImpl$2Lrc3c('vee/aplThin', null, r270_VeeShape(r270_OperTop, r270_OperBot, r270_AdviceStroke(4)));
        var r270_WedgeBarGap = function () {
            var _r289_t0, _r289_t1;
            return Math.max(r270_AdviceStroke(4), (r270_OperTop - r270_OperBot) / 8);
        };
        var _r270_t22 = r270_xn$createAndSaveGlyphImpl$2Lrc3c;
        var _r270_t23 = 'math/logic/xor';
        var _r270_t24 = 8891;
        var _r270_t25 = r270_WedgeBarGap();
        var _r270_t28 = function (_r270_leti11) {
            var r291_gap = _r270_leti11;
            return r270_union(r270_HBar.b(r270_SB, r270_RightSB, r270_OperBot, r270_OperatorStroke), r270_VeeShape(r270_OperTop, r270_OperBot + r270_OperatorStroke + r291_gap));
        }(_r270_t25);
        _r270_t22(_r270_t23, _r270_t24, _r270_t28);
        var _r270_t29 = r270_xn$createAndSaveGlyphImpl$2Lrc3c;
        var _r270_t30 = 'math/logic/nand';
        var _r270_t31 = 8892;
        var _r270_t32 = r270_WedgeBarGap();
        var _r270_t35 = function (_r270_leti12) {
            var r293_gap = _r270_leti12;
            return r270_union(r270_HBar.t(r270_SB, r270_RightSB, r270_OperTop, r270_OperatorStroke), r270_WedgeShape(r270_OperTop - r270_OperatorStroke - r293_gap, r270_OperBot));
        }(_r270_t32);
        _r270_t29(_r270_t30, _r270_t31, _r270_t35);
        var _r270_t36 = r270_xn$createAndSaveGlyphImpl$2Lrc3c;
        var _r270_t37 = 'math/logic/nor';
        var _r270_t38 = 8893;
        var _r270_t39 = r270_WedgeBarGap();
        var _r270_t42 = function (_r270_leti13) {
            var r295_gap = _r270_leti13;
            return r270_union(r270_HBar.t(r270_SB, r270_RightSB, r270_OperTop, r270_OperatorStroke), r270_VeeShape(r270_OperTop - r270_OperatorStroke - r295_gap, r270_OperBot));
        }(_r270_t39);
        _r270_t36(_r270_t37, _r270_t38, _r270_t42);
        r270_xn$createAndSaveGlyphImpl$2Lrc3c('curlyVee', 8910, function () {
            var _r298_t1;
            var _r298_t0 = this;
            var r298_currentGlyph = _r298_t0;
            var r298_fine = r270_CThin * r270_OperatorStroke;
            r298_currentGlyph.include(r270_dispiro(r270_g4(r270_SB, r270_OperTop, r270_widths.center(r270_OperatorStroke)), r270_straight.down.end(r270_Middle - r270_OperatorStroke / 2 * r270_HVContrast, r270_OperBot, r270_widths.heading(r298_fine, 0, r270_Downward))));
            r298_currentGlyph.include(r270_dispiro(r270_widths.center(r270_OperatorStroke), r270_g4(r270_RightSB, r270_OperTop, r270_widths.center(r270_OperatorStroke)), r270_straight.down.end(r270_Middle + r270_OperatorStroke / 2 * r270_HVContrast, r270_OperBot, r270_widths.heading(0, r298_fine, r270_Downward))));
            return void 0;
        });
        r270_turned('curlyWedge', 8911, 'curlyVee', r270_Middle, r270_SymbolMid);
        r270_xn$createAndSaveGlyphImpl$2Lrc3c('mt/projection', 8965, r270_union(r270_HBar.t(r270_SB, r270_RightSB, r270_OperTop, r270_OperatorStroke), r270_WedgeShape(r270_OperTop - r270_OperatorStroke, r270_OperBot)));
        var _r270_t43 = r270_xn$createAndSaveGlyphImpl$2Lrc3c;
        var _r270_t44 = 'mt/perspective';
        var _r270_t45 = 8966;
        var _r270_t46 = r270_WedgeBarGap();
        var _r270_t49 = function (_r270_leti14) {
            var r303_gap = _r270_leti14;
            return r270_union(r270_HBar.t(r270_SB, r270_RightSB, r270_OperTop, r270_OperatorStroke), r270_HBar.t(r270_SB, r270_RightSB, r270_OperTop - r270_OperatorStroke - r303_gap, r270_OperatorStroke), r270_WedgeShape(r270_OperTop - 2 * r270_OperatorStroke - r303_gap, r270_OperBot));
        }(_r270_t46);
        _r270_t43(_r270_t44, _r270_t45, _r270_t49);
        r270_xn$createAndSaveGlyphImpl$2Lrc3c('doubleVee', 10836, function () {
            var _r306_t1;
            var _r306_t0 = this;
            var r306_currentGlyph = _r306_t0;
            var r306_sw = r270_AdviceStroke(6);
            r306_currentGlyph.include(r270_dispiro(r270_widths.center(r306_sw), r270_flat(r270_SB, r270_OperTop, r270_heading(r270_Downward)), r270_curl(r270_Middle, r270_OperBot, r270_heading(r270_Downward))));
            r306_currentGlyph.include(r270_dispiro(r270_widths.center(r306_sw), r270_flat(r270_RightSB, r270_OperTop, r270_heading(r270_Downward)), r270_curl(r270_Middle, r270_OperBot, r270_heading(r270_Downward))));
            var r306_offsetRatio = 1 / 4;
            var r306_bias = (r270_RightSB - r270_SB) * r306_offsetRatio;
            var r306_a = r270_dispiro(r270_widths.center(r306_sw), r270_flat(r270_SB + r306_bias, r270_OperTop, r270_heading(r270_Downward)), r270_curl(r270_Middle + r306_bias, r270_OperBot, r270_heading(r270_Downward)));
            var r306_b = r270_dispiro(r270_widths.center(r306_sw), r270_flat(r270_RightSB - r306_bias, r270_OperTop, r270_heading(r270_Downward)), r270_curl(r270_Middle - r306_bias, r270_OperBot, r270_heading(r270_Downward)));
            r306_currentGlyph.include(r270_union(r270_intersection(r306_a, r306_b), r270_difference(r270_union(r306_a, r306_b), r270_xn$spirooutline$1aao(r270_corner(0, r270_OperBot), r270_corner(r270_Width, r270_OperBot), r270_corner(r270_Width, r1_mix(r270_OperBot, r270_OperTop, 1 - 2 * r306_offsetRatio)), r270_corner(0, r1_mix(r270_OperBot, r270_OperTop, 1 - 2 * r306_offsetRatio))))));
            return void 0;
        });
        r270_turned('doubleWedge', 10835, 'doubleVee', r270_Middle, r270_SymbolMid);
        var _r270_t50 = r270_xn$createAndSaveGlyphImpl$2Lrc3c;
        var _r270_t51 = 'math/logic/equalAnd';
        var _r270_t52 = 10846;
        var _r270_t53 = r270_WedgeBarGap();
        var _r270_t56 = function (_r270_leti15) {
            var r311_gap = _r270_leti15;
            return r270_union(r270_HBar.t(r270_SB, r270_RightSB, r270_OperTop + r270_EqualHalfSpace * 0.75, r270_OperatorStroke), r270_HBar.t(r270_SB, r270_RightSB, r270_OperTop - r270_EqualHalfSpace * 0.75, r270_OperatorStroke), r270_WedgeShape(r270_OperTop - r270_OperatorStroke - r270_EqualHalfSpace * 0.75 - r311_gap, r270_OperBot));
        }(_r270_t53);
        _r270_t50(_r270_t51, _r270_t52, _r270_t56);
        var _r270_t57 = r270_xn$createAndSaveGlyphImpl$2Lrc3c;
        var _r270_t58 = 'math/logic/xand';
        var _r270_t59 = 10847;
        var _r270_t60 = r270_WedgeBarGap();
        var _r270_t63 = function (_r270_leti16) {
            var r313_gap = _r270_leti16;
            return r270_union(r270_HBar.b(r270_SB, r270_RightSB, r270_OperBot, r270_OperatorStroke), r270_WedgeShape(r270_OperTop, r270_OperBot + r270_OperatorStroke + r313_gap));
        }(_r270_t60);
        _r270_t57(_r270_t58, _r270_t59, _r270_t63);
        var _r270_t64 = r270_xn$createAndSaveGlyphImpl$2Lrc3c;
        var _r270_t65 = 'math/logic/andEqual';
        var _r270_t66 = 10848;
        var _r270_t67 = r270_WedgeBarGap();
        var _r270_t70 = function (_r270_leti17) {
            var r315_gap = _r270_leti17;
            return r270_union(r270_HBar.b(r270_SB, r270_RightSB, r270_OperBot - r270_EqualHalfSpace * 0.75, r270_OperatorStroke), r270_HBar.b(r270_SB, r270_RightSB, r270_OperBot + r270_EqualHalfSpace * 0.75, r270_OperatorStroke), r270_WedgeShape(r270_OperTop, r270_OperBot + r270_OperatorStroke + r270_EqualHalfSpace * 0.75 + r315_gap));
        }(_r270_t67);
        _r270_t64(_r270_t65, _r270_t66, _r270_t70);
        r270_alias('veeUnderbar', 10849, 'math/logic/xor');
        r270_turned('math/logic/equalOr', 10850, 'math/logic/andEqual', r270_Middle, r270_SymbolMid);
        r270_turned('math/logic/orEqual', 10851, 'math/logic/equalAnd', r270_Middle, r270_SymbolMid);
        r270_xn$createAndSaveGlyphImpl$2Lrc3c('cup', 8746, function () {
            var _r318_t1;
            var _r318_t0 = this;
            var r318_currentGlyph = _r318_t0;
            r318_currentGlyph.include(r270_UShape(r270_DivFrame(1), r270_OperTop, r270_OperBot, new r270_xn$NamedParameterPair$2Lrc9b('stroke', r270_OperatorStroke)));
            return void 0;
        });
        r270_turned('cap', 8745, 'cup', r270_Middle, r270_SymbolMid);
        var r270_ThinCupStroke = r270_AdviceStroke(4);
        r270_xn$createAndSaveGlyphImpl$2Lrc3c('thinCup', null, function () {
            var _r323_t1;
            var _r323_t0 = this;
            var r323_currentGlyph = _r323_t0;
            r323_currentGlyph.include(r270_UShape(r270_DivFrame(1), r270_OperTop, r270_OperBot, new r270_xn$NamedParameterPair$2Lrc9b('stroke', r270_ThinCupStroke)));
            return void 0;
        });
        r270_WithDotVariants('cupDot', 8845, function (r326_DrawAt, r326_kdr, r326_overshoot) {
            var _r326_t0, _r326_t1;
            return function () {
                var _r328_t1;
                var _r328_t0 = this;
                var r328_currentGlyph = _r328_t0;
                r328_currentGlyph.include(r270_xn$referglyph$1aao('thinCup'), r270_AS_BASE, r270_ALSO_METRICS);
                r328_currentGlyph.include(r326_DrawAt(r270_Middle, r270_OperBot + r270_ArchDepth, Math.min(r270_DotRadius * r326_kdr, (r270_RightSB - r270_SB - r270_ThinCupStroke * r270_HVContrast * 2) * (1 / 3)) - r326_overshoot));
                return void 0;
            };
        });
        r270_xn$createAndSaveGlyphImpl$2Lrc3c('cupArrowLeft', 8844, function () {
            var _r333_t1;
            var _r333_t0 = this;
            var r333_currentGlyph = _r333_t0;
            r333_currentGlyph.include(r270_xn$referglyph$1aao('thinCup'), r270_AS_BASE, r270_ALSO_METRICS);
            var r333_mockUpscale = r270_ThinCupStroke / r270_AdviceStroke(6);
            var r333_arrowLength = r333_mockUpscale * Math.min(r270_RightSB - r270_SB - r270_ThinCupStroke * r270_HVContrast * 2, r270_Width * 0.6);
            r333_currentGlyph.include(r270_xn$createAndSaveGlyphImpl$2Lrc3c(null, null, function () {
                var _r338_t1;
                var _r338_t0 = this;
                var r338_currentGlyph = _r338_t0;
                r338_currentGlyph.include(r270_ArrowShape(r270_Middle + r333_arrowLength / 2, r270_OperBot + r270_ArchDepth, r270_Middle - r333_arrowLength / 2, r270_OperBot + r270_ArchDepth, r333_arrowLength * 0.5));
                r338_currentGlyph.include(r270_Ungizmo());
                r338_currentGlyph.include(r270_Translate(-r270_Middle, -r270_OperBot - r270_ArchDepth));
                r338_currentGlyph.include(r270_Scale(1 / r333_mockUpscale, 1 / r333_mockUpscale));
                r338_currentGlyph.include(r270_Translate(r270_Middle, r270_OperBot + r270_ArchDepth));
                r338_currentGlyph.include(r270_Regizmo());
                return void 0;
            }));
            return void 0;
        });
        var r270_cupInnerPlusSw = r270_AdviceStroke(6);
        var r270_cupInnerPlusSize = Math.min(r270_RightSB - r270_SB - r270_ThinCupStroke * r270_HVContrast * (2 + 0.5 * r270_cupInnerPlusSw / r270_ThinCupStroke), (r270_RightSB - r270_SB) * 0.8);
        r270_xn$createAndSaveGlyphImpl$2Lrc3c('cupPlus', 8846, function () {
            var _r347_t1;
            var _r347_t0 = this;
            var r347_currentGlyph = _r347_t0;
            r347_currentGlyph.include(r270_xn$referglyph$1aao('thinCup'), r270_AS_BASE, r270_ALSO_METRICS);
            r347_currentGlyph.include(r270_dispiro(r270_widths.center(r270_cupInnerPlusSw), r270_corner(r270_Middle - r270_cupInnerPlusSize / 2, r270_OperBot + r270_ArchDepth), r270_corner(r270_Middle + r270_cupInnerPlusSize / 2, r270_OperBot + r270_ArchDepth)));
            r347_currentGlyph.include(r270_dispiro(r270_widths.center(r270_cupInnerPlusSw), r270_corner(r270_Middle, r270_OperBot + r270_ArchDepth - r270_cupInnerPlusSize / 2), r270_corner(r270_Middle, r270_OperBot + r270_ArchDepth + r270_cupInnerPlusSize / 2)));
            return void 0;
        });
        r270_xn$createAndSaveGlyphImpl$2Lrc3c('doubleCup', 8915, function () {
            var _r353_t1;
            var _r353_t0 = this;
            var r353_currentGlyph = _r353_t0;
            var r353_sw = r270_AdviceStroke(6);
            var r353_gap = Math.max(r270_Width / 8, r353_sw / 2);
            r353_currentGlyph.include(r270_UShape(r270_DivFrame(1), r270_OperTop, r270_OperBot, new r270_xn$NamedParameterPair$2Lrc9b('stroke', r353_sw)));
            r353_currentGlyph.include(r270_UShape(r270_DivFrame(1), r270_OperTop, r270_OperBot, new r270_xn$NamedParameterPair$2Lrc9b('stroke', r353_sw), new r270_xn$NamedParameterPair$2Lrc9b('offset', r353_sw + r353_gap), new r270_xn$NamedParameterPair$2Lrc9b('ada', r270_ArchDepthAOf(r270_ArchDepth - r353_sw - r353_gap, r270_Width)), new r270_xn$NamedParameterPair$2Lrc9b('adb', r270_ArchDepthBOf(r270_ArchDepth - r353_sw - r353_gap, r270_Width))));
            return void 0;
        });
        r270_turned('doubleCap', 8914, 'doubleCup', r270_Middle, r270_SymbolMid);
        var r270_pitchForkTop = r1_mix(r270_OperBot, r270_OperTop, 1.2) + r270_Stroke / 4;
        var r270_pitchForkSw = r270_AdviceStroke(3.25);
        r270_xn$createAndSaveGlyphImpl$2Lrc3c('pitchFork', 8916, function () {
            var _r363_t1;
            var _r363_t0 = this;
            var r363_currentGlyph = _r363_t0;
            r363_currentGlyph.include(r270_UShape(r270_DivFrame(1), r270_OperTop, r270_OperBot, new r270_xn$NamedParameterPair$2Lrc9b('stroke', r270_pitchForkSw)), true, true);
            r363_currentGlyph.include(r270_FlipAround(r270_Middle, r270_SymbolMid));
            r363_currentGlyph.include(r270_VBar.m(r270_Middle, r270_OperBot, r270_pitchForkTop, r270_pitchForkSw));
            return void 0;
        });
        r270_xn$createAndSaveGlyphImpl$2Lrc3c('elementUp', 10194, function () {
            var _r370_t1;
            var _r370_t0 = this;
            var r370_currentGlyph = _r370_t0;
            r370_currentGlyph.include(r270_xn$referglyph$1aao('thinCup'), r270_AS_BASE, r270_ALSO_METRICS);
            r370_currentGlyph.include(r270_VBar.m(r270_Middle, r270_OperBot, r270_OperTop, r270_ThinCupStroke));
            return void 0;
        });
        r270_turned('capDot', 10816, 'cupDot', r270_Middle, r270_SymbolMid);
        r270_xn$createAndSaveGlyphImpl$2Lrc3c('cupMinus', 10817, function () {
            var _r375_t1;
            var _r375_t0 = this;
            var r375_currentGlyph = _r375_t0;
            r375_currentGlyph.include(r270_xn$referglyph$1aao('thinCup'), r270_AS_BASE, r270_ALSO_METRICS);
            r375_currentGlyph.include(r270_HBar.m(r270_Middle - r270_cupInnerPlusSize / 2, r270_Middle + r270_cupInnerPlusSize / 2, r270_OperBot + r270_ArchDepth, r270_cupInnerPlusSw));
            return void 0;
        });
        var _r270_t71 = r270_xn$createAndSaveGlyphImpl$2Lrc3c;
        var _r270_t72 = 'cupOverbar';
        var _r270_t73 = 10818;
        var _r270_t74 = r270_WedgeBarGap();
        var _r270_t77 = function (_r270_leti18) {
            var r379_gap = _r270_leti18;
            return function () {
                var _r381_t1;
                var _r381_t0 = this;
                var r381_currentGlyph = _r381_t0;
                r381_currentGlyph.include(r270_UShape(r270_DivFrame(1), r270_OperTop - r270_OperatorStroke - r379_gap, r270_OperBot, new r270_xn$NamedParameterPair$2Lrc9b('stroke', r270_OperatorStroke)));
                r381_currentGlyph.include(r270_HBar.t(r270_SB, r270_RightSB, r270_OperTop, r270_OperatorStroke));
                return void 0;
            };
        }(_r270_t74);
        _r270_t71(_r270_t72, _r270_t73, _r270_t77);
        var _r270_t78 = r270_xn$createAndSaveGlyphImpl$2Lrc3c;
        var _r270_t79 = 'capOverbar';
        var _r270_t80 = 10819;
        var _r270_t81 = r270_WedgeBarGap();
        var _r270_t84 = function (_r270_leti19) {
            var r386_gap = _r270_leti19;
            return function () {
                var _r388_t1;
                var _r388_t0 = this;
                var r388_currentGlyph = _r388_t0;
                r388_currentGlyph.include(r270_UShape(r270_DivFrame(1), r270_OperTop, r270_OperBot + r270_OperatorStroke + r386_gap, new r270_xn$NamedParameterPair$2Lrc9b('stroke', r270_OperatorStroke)));
                r388_currentGlyph.include(r270_FlipAround(r270_Middle, r270_SymbolMid));
                r388_currentGlyph.include(r270_HBar.t(r270_SB, r270_RightSB, r270_OperTop, r270_OperatorStroke));
                return void 0;
            };
        }(_r270_t81);
        _r270_t78(_r270_t79, _r270_t80, _r270_t84);
        r270_turned('elementDown', 10969, 'elementUp', r270_Middle, r270_SymbolMid);
        r270_xn$createAndSaveGlyphImpl$2Lrc3c('transversalIntersection', 10971, function () {
            var _r395_t1;
            var _r395_t0 = this;
            var r395_currentGlyph = _r395_t0;
            r395_currentGlyph.include(r270_UShape(r270_DivFrame(1), r270_OperTop, r270_OperBot, new r270_xn$NamedParameterPair$2Lrc9b('stroke', r270_pitchForkSw)), true, true);
            r395_currentGlyph.include(r270_FlipAround(r270_Middle, r270_SymbolMid));
            r395_currentGlyph.include(r270_VBar.m(r270_Middle, r270_OperBot + r270_OperTop - r270_pitchForkTop, r270_pitchForkTop, r270_pitchForkSw));
            return void 0;
        });
        r270_xn$createAndSaveGlyphImpl$2Lrc3c('pitchForkTee', 10970, function () {
            var _r402_t1;
            var _r402_t0 = this;
            var r402_currentGlyph = _r402_t0;
            r402_currentGlyph.include(r270_xn$referglyph$1aao('pitchFork'), r270_AS_BASE, r270_ALSO_METRICS);
            r402_currentGlyph.include(r270_HBar.t(r270_SB, r270_RightSB, r270_pitchForkTop, r270_pitchForkSw));
            return void 0;
        });
        r270_xn$createAndSaveGlyphImpl$2Lrc3c('nonForking', 10973, function () {
            var _r407_t1;
            var _r407_t0 = this;
            var r407_currentGlyph = _r407_t0;
            r407_currentGlyph.include(r270_UShape(r270_DivFrame(1), r270_SymbolMid, r270_OperBot, new r270_xn$NamedParameterPair$2Lrc9b('stroke', r270_pitchForkSw)));
            r407_currentGlyph.include(r270_VBar.m(r270_Middle, r270_OperBot, r270_OperTop, r270_pitchForkSw));
            return void 0;
        });
        r270_xn$createAndSaveGlyphImpl$2Lrc3c('forking', 10972, function () {
            var _r413_t1;
            var _r413_t0 = this;
            var r413_currentGlyph = _r413_t0;
            r413_currentGlyph.include(r270_xn$referglyph$1aao('nonForking'), r270_AS_BASE, r270_ALSO_METRICS);
            r413_currentGlyph.include(r270_dispiro(r270_widths.center(r270_NotGlyphSw), r270_flat(r270_SB, r270_OperBot), r270_curl(r270_RightSB, r270_OperTop)));
            return void 0;
        });
        r270_xn$createAndSaveGlyphImpl$2Lrc3c('squareCap', 8851, function () {
            var _r418_t1;
            var _r418_t0 = this;
            var r418_currentGlyph = _r418_t0;
            r418_currentGlyph.include(r270_PiShape(r270_DivFrame(1), r270_OperTop, r270_OperBot, new r270_xn$NamedParameterPair$2Lrc9b('shrinkRate', 0), new r270_xn$NamedParameterPair$2Lrc9b('fine', r270_OperatorStroke), new r270_xn$NamedParameterPair$2Lrc9b('doSerif', false)));
            return void 0;
        });
        return r270_turned('squareCup', 8852, 'squareCap', r270_Middle, r270_SymbolMid);
    });
    return void 0;
});
