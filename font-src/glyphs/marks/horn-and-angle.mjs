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
    r273_xn$Capture_Ext$2Lrc2b['$defineGlyphBlockImpl$'](r273_xn$Capture_Ext$2Lrc2b, 'Mark-Horn-And-Angle', function (r274_xn$Capture$2Lrc8, r274_xn$ExportCapture$2Lrc4b) {
        var r274_suffix, r274_DrawAt, r274_kdr, r274_glyphName, r274_pExtL, r274_pExtR, r274_cwMidStrokeWidth, r274_paren, _r274_t13, _r274_t16, _r274_t17, _r274_t18, _r274_t19, _r274_tag20, _r274_t22, _r274_t23, _r274_tag24;
        var _r274_t0 = r274_xn$Capture$2Lrc8;
        var r274_xn$createAndSaveGlyphImpl$2Lrc3c = _r274_t0['$createAndSaveGlyphImpl$'];
        var r274_xn$NamedParameterPair$2Lrc9b = _r274_t0['$NamedParameterPair$'];
        var r274_xn$assignUnicodeImpl$2Lrc8b = _r274_t0['$assignUnicodeImpl$'];
        var r274_xn$execState$2Lrc0b = _r274_t0['$execState$'];
        var _r274_t1 = r274_xn$Capture$2Lrc8.Metrics;
        var r274_DesignParameters = _r274_t1.DesignParameters;
        var r274_Width = _r274_t1.Width;
        var r274_SB = _r274_t1.SB;
        var r274_XH = _r274_t1.XH;
        var r274_Descender = _r274_t1.Descender;
        var r274_ApparentTranslate = _r274_t1.ApparentTranslate;
        var r274_TanSlope = _r274_t1.TanSlope;
        var r274_HVContrast = _r274_t1.HVContrast;
        var r274_Downward = _r274_t1.Downward;
        var r274_Rightward = _r274_t1.Rightward;
        var r274_Leftward = _r274_t1.Leftward;
        var r274_O = _r274_t1.O;
        var r274_OX = _r274_t1.OX;
        var r274_Hook = _r274_t1.Hook;
        var r274_HookX = _r274_t1.HookX;
        var r274_ArchDepth = _r274_t1.ArchDepth;
        var r274_Stroke = _r274_t1.Stroke;
        var r274_HalfStroke = _r274_t1.HalfStroke;
        var r274_RightSB = _r274_t1.RightSB;
        var r274_Middle = _r274_t1.Middle;
        var r274_DotRadius = _r274_t1.DotRadius;
        var r274_ArchDepthB = _r274_t1.ArchDepthB;
        var r274_AdviceStroke = _r274_t1.AdviceStroke;
        var _r274_t2 = r274_xn$Capture$2Lrc8.SpiroFns;
        var r274_g4 = _r274_t2.g4;
        var r274_flat = _r274_t2.flat;
        var r274_curl = _r274_t2.curl;
        var r274_end = _r274_t2.end;
        var r274_straight = _r274_t2.straight;
        var r274_widths = _r274_t2.widths;
        var r274_heading = _r274_t2.heading;
        var r274_alsoThru = _r274_t2.alsoThru;
        var r274_quadControls = _r274_t2.quadControls;
        var r274_archv = _r274_t2.archv;
        var r274_arcvh = _r274_t2.arcvh;
        var r274_dispiro = _r274_t2.dispiro;
        var _r274_t3 = r274_xn$Capture$2Lrc8.BooleFns;
        var r274_union = _r274_t3.union;
        var r274_intersection = _r274_t3.intersection;
        var r274_difference = _r274_t3.difference;
        var _r274_t4 = r274_xn$Capture$2Lrc8.CommonShapes.resolve();
        var r274_SquareAt = _r274_t4.SquareAt;
        var r274_RingAt = _r274_t4.RingAt;
        var r274_HBar = _r274_t4.HBar;
        var r274_VBar = _r274_t4.VBar;
        var r274_FlipAround = _r274_t4.FlipAround;
        var r274_MaskAbove = _r274_t4.MaskAbove;
        var r274_MaskRight = _r274_t4.MaskRight;
        var r274_DotVariants = _r274_t4.DotVariants;
        var _r274_t5 = r274_xn$Capture$2Lrc8['Common-Derivatives'].resolve();
        var r274_xn$selectvariant$7Hrq = _r274_t5['select-variant'];
        var r274_xn$referglyph$1aao = _r274_t5['refer-glyph'];
        var r274_xn$deriveglyphs$7Hrq = _r274_t5['derive-glyphs'];
        var _r274_t6 = r274_xn$Capture$2Lrc8['Mark-Shared-Metrics'].resolve();
        var r274_markExtend = _r274_t6.markExtend;
        var r274_markStroke = _r274_t6.markStroke;
        var r274_markStress = _r274_t6.markStress;
        var r274_markFine = _r274_t6.markFine;
        var _r274_t7 = r274_xn$Capture$2Lrc8['Mark-Shared-Metrics'].resolve();
        var r274_markMiddle = _r274_t7.markMiddle;
        var r274_markDotsRadius = _r274_t7.markDotsRadius;
        var _r274_t8 = r274_xn$Capture$2Lrc8['Mark-Above'].resolve();
        var r274_aboveMarkTop = _r274_t8.aboveMarkTop;
        var r274_aboveMarkBot = _r274_t8.aboveMarkBot;
        var r274_aboveMarkMid = _r274_t8.aboveMarkMid;
        var r274_aboveMarkStack = _r274_t8.aboveMarkStack;
        var _r274_t9 = r274_xn$Capture$2Lrc8['Mark-Above'].resolve();
        var r274_commaAboveRadius = _r274_t9.commaAboveRadius;
        var _r274_t10 = r274_xn$Capture$2Lrc8['Mark-Below'].resolve();
        var r274_belowMarkBot = _r274_t10.belowMarkBot;
        var r274_belowMarkTop = _r274_t10.belowMarkTop;
        var r274_belowMarkMid = _r274_t10.belowMarkMid;
        var r274_HornDim = function (r282_attX, r282_attY, r282_overshootX, r282_overshootY, r282_yrP) {
            var _r282_t0, _r282_t1;
            var r282_radius = r274_commaAboveRadius;
            var r282_hornFine = Math.min(r282_radius * 0.75, r274_markFine * 1.75);
            var r282_hornStroke = Math.min(r282_radius * 1, r274_markFine * 1.75);
            var r282_startX = r282_attX + 2 * r282_radius;
            var r282_startY = r282_attY + r282_yrP * r282_radius + (r274_aboveMarkTop - r274_aboveMarkBot) / 2;
            return {
                'radius': r282_radius,
                'hornFine': r282_hornFine,
                'hornStroke': r282_hornStroke,
                'startX': r282_startX,
                'startY': r282_startY
            };
        };
        var r274_HornMarkAnchor = function (r283_attX, r283_attY, r283_overshootX, r283_overshootY, r283_yrP) {
            var _r283_t0, _r283_t1;
            return function () {
                var _r285_t2;
                var _r285_t1 = this;
                var r285_currentGlyph = _r285_t1;
                var _r285_t0 = r274_HornDim(r283_attX, r283_attY, r283_overshootX, r283_overshootY, r283_yrP);
                var r285_radius = _r285_t0.radius;
                var r285_hornFine = _r285_t0.hornFine;
                var r285_startX = _r285_t0.startX;
                var r285_startY = _r285_t0.startY;
                r285_currentGlyph.setMarkAnchor('topRight', r283_attX, r283_attY, r285_startX, r285_startY);
                r285_currentGlyph.setBaseAnchor('aboveBraceL', r285_startX - r285_radius, r285_startY);
                r285_currentGlyph.setBaseAnchor('aboveBraceR', r285_startX - r285_radius, r285_startY);
                return void 0;
            };
        };
        r274_xn$ExportCapture$2Lrc4b(function () {
            var _r290_t0, _r290_t1;
            return { 'HornBaseAnchor': r274_HornBaseAnchor };
        });
        var r274_HornBaseAnchor = function (r291_attX, r291_attY, r291_overshootX, r291_overshootY, r291_yrP) {
            var _r291_t0, _r291_t1;
            return function () {
                var _r293_t2;
                var _r293_t1 = this;
                var r293_currentGlyph = _r293_t1;
                var _r293_t0 = r274_HornDim(r291_attX, r291_attY, r291_overshootX, r291_overshootY, r291_yrP);
                var r293_radius = _r293_t0.radius;
                var r293_hornFine = _r293_t0.hornFine;
                var r293_startX = _r293_t0.startX;
                var r293_startY = _r293_t0.startY;
                r293_currentGlyph.setBaseAnchor('topRight', r293_startX, r293_startY);
                r293_currentGlyph.setBaseAnchor('aboveBraceL', r293_startX - r293_radius, r293_startY);
                r293_currentGlyph.setBaseAnchor('aboveBraceR', r293_startX - r293_radius, r293_startY);
                return void 0;
            };
        };
        var r274_HornShape = function (r297_attX, r297_attY, r297_overshootX, r297_overshootY, r297_yrP) {
            var _r297_t0, _r297_t1;
            return function () {
                var _r299_t2;
                var _r299_t1 = this;
                var r299_currentGlyph = _r299_t1;
                var _r299_t0 = r274_HornDim(r297_attX, r297_attY, r297_overshootX, r297_overshootY, r297_yrP);
                var r299_radius = _r299_t0.radius;
                var r299_hornFine = _r299_t0.hornFine;
                var r299_hornStroke = _r299_t0.hornStroke;
                var r299_startX = _r299_t0.startX;
                var r299_startY = _r299_t0.startY;
                r299_currentGlyph.include(r274_union(r274_RingAt(r299_startX - r299_radius, r299_startY, r299_radius - r299_hornFine / 8), r274_dispiro(r274_g4(r299_startX + r274_OX, r299_startY, r274_widths.rhs(r299_hornFine / 4)), r274_arcvh(), r274_g4(r299_startX - r299_radius, r299_startY - r299_radius), r274_archv(), r274_g4(r299_startX - 2 * r299_radius, r299_startY), r274_arcvh(), r274_g4(r299_startX - r299_radius, r299_startY + r299_radius, r274_widths.rhs(r299_hornFine / 2)), r274_archv(), r274_g4(r299_startX, r299_startY, r274_widths.rhs(r299_hornFine)), r274_quadControls(0, 0.75, 16, {
                    'blend': function (r301_t) {
                        var _r301_t0, _r301_t1;
                        return r274_widths.rhs(r1_mix(r299_hornFine, r299_hornStroke, r301_t));
                    }
                }), r274_g4(r297_attX - r297_overshootX - r274_HalfStroke * r274_HVContrast, r297_attY - r297_overshootY - r274_Stroke, r274_widths.rhs(r299_hornStroke)))));
                return void 0;
            };
        };
        var r274_SquareHornShape = function (r302_attX, r302_attY, r302_overshootX, r302_overshootY, r302_yrP) {
            var _r302_t0, _r302_t1;
            return function () {
                var _r304_t2;
                var _r304_t1 = this;
                var r304_currentGlyph = _r304_t1;
                var _r304_t0 = r274_HornDim(r302_attX, r302_attY, r302_overshootX, r302_overshootY, r302_yrP);
                var r304_r = _r304_t0.radius;
                var r304_hornFine = _r304_t0.hornFine;
                var r304_hornStroke = _r304_t0.hornStroke;
                var r304_startX = _r304_t0.startX;
                var r304_startY = _r304_t0.startY;
                var r304_radius = r304_r * r274_DesignParameters.squareDotScalar;
                r304_currentGlyph.include(r274_union(r274_SquareAt(r304_startX - r304_radius, r304_startY, r304_radius), r274_dispiro(r274_flat(r304_startX, r304_startY + r304_radius, r274_widths.rhs.heading(r304_hornFine, r274_Downward)), r274_curl(r304_startX, r304_startY - r304_radius), r274_quadControls(0, 0.8, 8, {
                    'blend': function (r306_t) {
                        var _r306_t0, _r306_t1;
                        return r274_widths.rhs(r1_mix(r304_hornFine, r304_hornStroke, r306_t));
                    }
                }), r274_g4(r302_attX - r302_overshootX - r274_HalfStroke * r274_HVContrast, r302_attY - r302_overshootY - r274_Stroke, r274_widths.rhs(r304_hornStroke)))));
                return void 0;
            };
        };
        r274_xn$createAndSaveGlyphImpl$2Lrc3c('horn.round', null, function () {
            var _r309_t1;
            var _r309_t0 = this;
            var r309_currentGlyph = _r309_t0;
            r309_currentGlyph.setWidth(0);
            r309_currentGlyph.include(r274_HornShape(0, r274_XH, 0, 0, 0.5));
            r309_currentGlyph.include(r274_HornMarkAnchor(0, r274_XH, 0, 0, 0.5));
            return void 0;
        });
        r274_xn$createAndSaveGlyphImpl$2Lrc3c('horn.square', null, function () {
            var _r315_t1;
            var _r315_t0 = this;
            var r315_currentGlyph = _r315_t0;
            r315_currentGlyph.setWidth(0);
            r315_currentGlyph.include(r274_SquareHornShape(0, r274_XH, 0, 0, 0.5));
            r315_currentGlyph.include(r274_HornMarkAnchor(0, r274_XH, 0, 0, 0.5));
            return void 0;
        });
        r274_xn$selectvariant$7Hrq('horn', 795, new r274_xn$NamedParameterPair$2Lrc9b('follow', 'diacriticDot'));
        r274_xn$createAndSaveGlyphImpl$2Lrc3c('longHorn.round', null, function () {
            var _r322_t1;
            var _r322_t0 = this;
            var r322_currentGlyph = _r322_t0;
            r322_currentGlyph.setWidth(0);
            r322_currentGlyph.include(r274_HornShape(0, r274_XH, r274_Width / 2, r274_ArchDepthB, 0.5));
            r322_currentGlyph.include(r274_HornMarkAnchor(0, r274_XH, r274_Width / 2, r274_ArchDepthB, 0.5));
            return void 0;
        });
        r274_xn$createAndSaveGlyphImpl$2Lrc3c('longHorn.square', null, function () {
            var _r328_t1;
            var _r328_t0 = this;
            var r328_currentGlyph = _r328_t0;
            r328_currentGlyph.setWidth(0);
            r328_currentGlyph.include(r274_SquareHornShape(0, r274_XH, r274_Width / 2, r274_ArchDepthB, 0.5));
            r328_currentGlyph.include(r274_HornMarkAnchor(0, r274_XH, r274_Width / 2, r274_ArchDepthB, 0.5));
            return void 0;
        });
        r274_xn$selectvariant$7Hrq('longHorn', null, new r274_xn$NamedParameterPair$2Lrc9b('follow', 'diacriticDot'));
        r274_xn$createAndSaveGlyphImpl$2Lrc3c('leftangleTR', 794, function () {
            var _r335_t1;
            var _r335_t0 = this;
            var r335_currentGlyph = _r335_t0;
            r335_currentGlyph.setWidth(0);
            r335_currentGlyph.include(r274_VBar.l(0, r274_aboveMarkBot, r274_aboveMarkTop, r274_markFine * 2));
            r335_currentGlyph.include(r274_HBar.t(-r274_markExtend * 1.5, 0, r274_aboveMarkTop, r274_markFine * 2));
            r335_currentGlyph.setMarkAnchor('topRight', 0, r274_XH, 0, r274_aboveMarkTop);
            r335_currentGlyph.setBaseAnchor('aboveBraceL', -0.75 * r274_markExtend, r274_aboveMarkMid);
            r335_currentGlyph.setBaseAnchor('aboveBraceR', 0, r274_aboveMarkMid);
            return void 0;
        });
        var _r274_t11 = Object.entries(r274_DotVariants)[Symbol.iterator]();
        var _r274_t12 = void 0;
        while (!(_r274_t12 = _r274_t11.next()).done) {
            _r274_t13 = _r274_t12.value;
            r274_suffix = _r274_t13[0];
            r274_DrawAt = _r274_t13[1][0];
            r274_kdr = _r274_t13[1][1];
            _r274_t13[1];
            (function () {
                r274_xn$createAndSaveGlyphImpl$2Lrc3c('dotTL.' + r274_suffix, 856, function () {
                    var _r347_t2;
                    var _r347_t1 = this;
                    var r347_currentGlyph = _r347_t1;
                    r347_currentGlyph.setWidth(0);
                    var _r347_t0 = r274_HornDim(0, r274_XH, 0, 0, 0.5);
                    var r347_radius = _r347_t0.radius;
                    var r347_attX = _r347_t0.attX;
                    var r347_attY = _r347_t0.attY;
                    var r347_startX = _r347_t0.startX;
                    var r347_startY = _r347_t0.startY;
                    var r347_r = r1_mix(r347_radius, r274_DotRadius, 0.5);
                    r347_currentGlyph.include(r274_DrawAt(-r347_startX + r347_r, r347_startY, r347_r * r274_kdr));
                    r347_currentGlyph.setMarkAnchor('topLeft', 0, r274_XH, -r347_startX, r347_startY);
                    r347_currentGlyph.setBaseAnchor('aboveBraceL', r347_startX - r347_r, r347_startY);
                    r347_currentGlyph.setBaseAnchor('aboveBraceR', r347_startX - r347_r, r347_startY);
                    return void 0;
                });
                r274_xn$createAndSaveGlyphImpl$2Lrc3c('dotTR.' + r274_suffix, 856, function () {
                    var _r355_t2;
                    var _r355_t1 = this;
                    var r355_currentGlyph = _r355_t1;
                    r355_currentGlyph.setWidth(0);
                    var _r355_t0 = r274_HornDim(0, r274_XH, 0, 0, 0.5);
                    var r355_radius = _r355_t0.radius;
                    var r355_attX = _r355_t0.attX;
                    var r355_attY = _r355_t0.attY;
                    var r355_startX = _r355_t0.startX;
                    var r355_startY = _r355_t0.startY;
                    var r355_r = r1_mix(r355_radius, r274_DotRadius, 0.5);
                    r355_currentGlyph.include(r274_DrawAt(r355_startX - r355_r, r355_startY, r355_r * r274_kdr));
                    r355_currentGlyph.setMarkAnchor('topRight', 0, r274_XH, r355_startX, r355_startY);
                    r355_currentGlyph.setBaseAnchor('aboveBraceL', r355_startX - r355_r, r355_startY);
                    r355_currentGlyph.setBaseAnchor('aboveBraceR', r355_startX - r355_r, r355_startY);
                    return void 0;
                });
                return r274_xn$createAndSaveGlyphImpl$2Lrc3c('dotBL.' + r274_suffix, 856, function () {
                    var _r363_t2;
                    var _r363_t1 = this;
                    var r363_currentGlyph = _r363_t1;
                    r363_currentGlyph.setWidth(0);
                    var _r363_t0 = r274_HornDim(0, r274_XH, 0, 0, 0.5);
                    var r363_radius = _r363_t0.radius;
                    var r363_attX = _r363_t0.attX;
                    var r363_attY = _r363_t0.attY;
                    var r363_startX = _r363_t0.startX;
                    var r363_startY = _r363_t0.startY;
                    var r363_r = r1_mix(r363_radius, r274_DotRadius, 0.5);
                    r363_currentGlyph.include(r274_DrawAt(-r363_startX + r363_r, r274_XH - r363_startY, r363_r * r274_kdr));
                    r363_currentGlyph.setMarkAnchor('bottomLeft', 0, 0, -r363_startX, r274_XH - r363_startY);
                    r363_currentGlyph.setBaseAnchor('belowBraceL', r363_startX - r363_r, r363_startY);
                    r363_currentGlyph.setBaseAnchor('belowBraceR', r363_startX - r363_r, r363_startY);
                    return void 0;
                });
            }());
        }
        r274_xn$selectvariant$7Hrq('dotBL', 7674, new r274_xn$NamedParameterPair$2Lrc9b('follow', 'diacriticDot'));
        r274_xn$selectvariant$7Hrq('dotTL', 7672, new r274_xn$NamedParameterPair$2Lrc9b('follow', 'diacriticDot'));
        r274_xn$selectvariant$7Hrq('dotTR', 856, new r274_xn$NamedParameterPair$2Lrc9b('follow', 'diacriticDot'));
        r274_xn$deriveglyphs$7Hrq('commaTR', 789, 'commaAbove', function (r372_src, r372_gr) {
            var _r372_t0, _r372_t1;
            return function () {
                var _r374_t1;
                var _r374_t0 = this;
                var r374_currentGlyph = _r374_t0;
                r374_currentGlyph.setWidth(0);
                r374_currentGlyph.include(r274_xn$referglyph$1aao(r372_src));
                r374_currentGlyph.include(r274_ApparentTranslate(r274_RightSB - r274_Middle + r274_DotRadius, 0));
                r374_currentGlyph.setMarkAnchor('topRight', 0, r274_XH, 0, r274_aboveMarkTop);
                r374_currentGlyph.setBaseAnchor('aboveBraceL', -r274_SB + r274_DotRadius, r274_aboveMarkMid);
                r374_currentGlyph.setBaseAnchor('aboveBraceR', -r274_SB + r274_DotRadius, r274_aboveMarkMid);
                return void 0;
            };
        });
        r274_xn$createAndSaveGlyphImpl$2Lrc3c('rtailBR', 802, function () {
            var _r383_t1;
            var _r383_t0 = this;
            var r383_currentGlyph = _r383_t0;
            r383_currentGlyph.setWidth(0);
            r383_currentGlyph.setMarkAnchor('bottomRight', 0, 0, 0, r274_belowMarkBot);
            r383_currentGlyph.setBaseAnchor('belowBraceL', 0.5 * r274_HookX - 0.25 * r274_markExtend - 0.75 * r274_Stroke * r274_HVContrast, -0.5 * r274_Hook - r274_HalfStroke);
            r383_currentGlyph.setBaseAnchor('belowBraceR', 0.5 * r274_HookX + 0.25 * r274_markExtend - 0.5 * r274_Stroke * r274_HVContrast, -0.5 * r274_Hook - r274_HalfStroke);
            r383_currentGlyph.include(r274_dispiro(r274_widths.rhs(), r274_flat(0, -r274_O, r274_heading(r274_Downward)), r274_curl(0, 0, r274_heading(r274_Downward)), r274_straight.right.end(r274_HookX - r274_HalfStroke * r274_HVContrast, -r274_Hook + r274_HalfStroke)));
            return void 0;
        });
        r274_xn$createAndSaveGlyphImpl$2Lrc3c('ltailBR', 801, function () {
            var _r391_t1;
            var _r391_t0 = this;
            var r391_currentGlyph = _r391_t0;
            r391_currentGlyph.setWidth(0);
            r391_currentGlyph.setMarkAnchor('bottomRight', 0, 0, 0, r274_belowMarkBot);
            r391_currentGlyph.setBaseAnchor('belowBraceL', -0.5 * r274_HookX - 0.25 * r274_markExtend - 0.25 * r274_Stroke * r274_HVContrast, -0.5 * r274_Hook - r274_HalfStroke);
            r391_currentGlyph.setBaseAnchor('belowBraceR', -0.5 * r274_HookX + 0.25 * r274_markExtend - 0.25 * r274_Stroke * r274_HVContrast, -0.5 * r274_Hook - r274_HalfStroke);
            r391_currentGlyph.include(r274_dispiro(r274_widths.rhs(), r274_flat(0, -r274_O, r274_heading(r274_Downward)), r274_curl(0, 0, r274_heading(r274_Downward)), r274_straight.left.end(-r274_HookX - r274_HalfStroke * r274_HVContrast, -r274_Hook - r274_HalfStroke)));
            return void 0;
        });
        r274_xn$createAndSaveGlyphImpl$2Lrc3c('rightHalfCircleTR', null, function () {
            var _r399_t1;
            var _r399_t0 = this;
            var r399_currentGlyph = _r399_t0;
            r399_currentGlyph.setWidth(0);
            r399_currentGlyph.include(r274_xn$referglyph$1aao('leftHalfCircleBelow'));
            r399_currentGlyph.include(r274_FlipAround(r274_markMiddle, r274_XH / 2));
            r399_currentGlyph.clearAnchors();
            r399_currentGlyph.setMarkAnchor('topRight', r274_markMiddle, r274_XH, r274_markMiddle, r274_aboveMarkStack);
            r399_currentGlyph.setBaseAnchor('aboveBraceL', r274_markMiddle, r274_aboveMarkMid);
            r399_currentGlyph.setBaseAnchor('aboveBraceR', r274_markMiddle, r274_aboveMarkMid);
            return void 0;
        });
        var r274_ogonekTrConfig = {
            'ogonekTR': [
                7 / 16,
                1 / 8,
                1,
                0
            ],
            'ogonekTR_Y': [
                3 / 16,
                1,
                6,
                0.5
            ]
        };
        var _r274_t14 = Object.entries(r274_ogonekTrConfig)[Symbol.iterator]();
        var _r274_t15 = void 0;
        var _r274_t21 = !(_r274_t15 = _r274_t14.next()).done;
        while (_r274_t21) {
            _r274_t16 = _r274_t15.value;
            r274_glyphName = _r274_t16[0];
            r274_pExtL = _r274_t16[1][0];
            r274_pExtR = _r274_t16[1][1];
            r274_cwMidStrokeWidth = _r274_t16[1][2];
            r274_paren = _r274_t16[1][3];
            _r274_t16[1];
            _r274_t22 = function () {
                return r274_xn$createAndSaveGlyphImpl$2Lrc3c(r274_glyphName, null, function () {
                    var _r411_t1;
                    var _r411_t0 = this;
                    var r411_currentGlyph = _r411_t0;
                    r411_currentGlyph.setWidth(0);
                    var r411_fine = r274_AdviceStroke(8);
                    var r411_depth = 0 - r274_Descender - r274_markStroke;
                    var r411_extL = r274_pExtL * r411_depth + 0.125 * r274_markStress;
                    var r411_extR = Math.max(r274_pExtR * r274_markExtend, 1.5 * r274_TanSlope * r274_markStroke);
                    var r411_turnSlope = 0.5 * ((r274_markStroke - r411_fine) / r274_markStroke - (r274_ArchDepthB - r274_ArchDepth) / r274_ArchDepth);
                    var r411_swMid = Math.min(r274_markStroke, r274_AdviceStroke(r274_cwMidStrokeWidth));
                    r411_currentGlyph.include(r274_difference(r274_dispiro(r274_g4(r274_markMiddle, 0, r274_widths.rhs.heading(r411_fine, r274_Leftward)), r274_alsoThru(0.5, 0.375 - 0.2 * r274_markStroke / r411_depth, r274_widths.rhs(r1_mix(r411_fine, r411_swMid, 0.25))), r274_g4.down.mid(r274_markMiddle - r411_extL, -0.75 * r411_depth, r274_widths.rhs.heading(r411_swMid, {
                        'x': r274_HVContrast,
                        'y': r411_turnSlope
                    })), r274_arcvh(), r274_g4(r274_markMiddle + r1_mix(-r411_extL, r411_extR, 11 / 16), -r411_depth + r274_O, r274_widths.rhs.heading(r274_markStroke, r274_Rightward)), r274_g4(r274_markMiddle + r411_extR, -r411_depth + 0.5 * r274_O, r274_heading(r274_Rightward))), r274_intersection(r274_MaskAbove(0), r274_MaskRight(r274_markMiddle))));
                    r411_currentGlyph.setMarkAnchor('trailing', r274_markMiddle, 0, r274_markMiddle + r411_extR, -r411_depth - 0.5 * r274_O - r274_markStroke);
                    r411_currentGlyph.setBaseAnchor('belowBraceL', r274_markMiddle - r411_extL - r274_paren * r274_markExtend - 0.25 * r411_swMid * r274_HVContrast, -0.75 * r411_depth);
                    r411_currentGlyph.setBaseAnchor('belowBraceR', r274_markMiddle - 0.75 * r411_extL + r274_paren * r274_markExtend, -0.75 * r411_depth);
                    return void 0;
                });
            }();
            _r274_t21 = !(_r274_t15 = _r274_t14.next()).done;
        }
        return _r274_t22;
    });
    return void 0;
});
