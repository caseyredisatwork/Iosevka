'use strict';
import * as _s0_t0 from '../../support/utils.mjs';
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
    r269_xn$Capture_Ext$2Lrc2b['$defineGlyphBlockImpl$'](r269_xn$Capture_Ext$2Lrc2b, 'Symbol-Arrow', function (r270_xn$Capture$2Lrc8, r270_xn$ExportCapture$2Lrc4b) {
        var _r270_t4, _r270_t5, _r270_t6, _r270_tag7;
        var _r270_t0 = r270_xn$Capture$2Lrc8;
        var r270_xn$createAndSaveGlyphImpl$2Lrc3c = _r270_t0['$createAndSaveGlyphImpl$'];
        var r270_xn$NamedParameterPair$2Lrc9b = _r270_t0['$NamedParameterPair$'];
        var r270_xn$assignUnicodeImpl$2Lrc8b = _r270_t0['$assignUnicodeImpl$'];
        var r270_xn$execState$2Lrc0b = _r270_t0['$execState$'];
        var r270_para = _r270_t0.para;
        var r270_AS_BASE = _r270_t0.AS_BASE;
        var r270_ALSO_METRICS = _r270_t0.ALSO_METRICS;
        var r270_DivFrame = _r270_t0.DivFrame;
        var _r270_t1 = r270_xn$Capture$2Lrc8.Metrics;
        var r270_DesignParameters = _r270_t1.DesignParameters;
        var r270_Width = _r270_t1.Width;
        var r270_SB = _r270_t1.SB;
        var r270_SymbolMid = _r270_t1.SymbolMid;
        var r270_OperTop = _r270_t1.OperTop;
        var r270_OperBot = _r270_t1.OperBot;
        var r270_ApparentTranslate = _r270_t1.ApparentTranslate;
        var r270_HVContrast = _r270_t1.HVContrast;
        var r270_Upward = _r270_t1.Upward;
        var r270_Downward = _r270_t1.Downward;
        var r270_Rightward = _r270_t1.Rightward;
        var r270_Leftward = _r270_t1.Leftward;
        var r270_O = _r270_t1.O;
        var r270_WideWidth1 = _r270_t1.WideWidth1;
        var r270_AdviceStroke = _r270_t1.AdviceStroke;
        var r270_OperatorStroke = _r270_t1.OperatorStroke;
        var _r270_t2 = r270_xn$Capture$2Lrc8.SpiroFns;
        var r270_g4 = _r270_t2.g4;
        var r270_corner = _r270_t2.corner;
        var r270_flat = _r270_t2.flat;
        var r270_curl = _r270_t2.curl;
        var r270_straight = _r270_t2.straight;
        var r270_widths = _r270_t2.widths;
        var r270_heading = _r270_t2.heading;
        var r270_archv = _r270_t2.archv;
        var r270_arcvh = _r270_t2.arcvh;
        var r270_dispiro = _r270_t2.dispiro;
        var r270_xn$spirooutline$1aao = _r270_t2['spiro-outline'];
        var _r270_t3 = r270_xn$Capture$2Lrc8.BooleFns;
        var r270_union = _r270_t3.union;
        var r270_intersection = _r270_t3.intersection;
        var r270_difference = _r270_t3.difference;
        return function () {
            var r273_FMosaicWide, r273_MosaicNameSuffix, r273_MosaicWidth, r273_MosaicWidthScalar, _r273_t3, _r273_t5, _r273_t6, _r273_tag7;
            var r273_WidthKinds = [
                [
                    0,
                    '.NWID',
                    r270_xn$Capture$2Lrc8.Metrics.Width,
                    1
                ],
                [
                    1,
                    '.WWID',
                    r270_xn$Capture$2Lrc8.Metrics.WideWidth0,
                    2
                ]
            ];
            var _r273_t0 = r273_WidthKinds;
            var _r273_t1 = _r273_t0.length;
            var _r273_t2 = 0;
            var _r273_t4 = _r273_t2 < _r273_t1;
            while (_r273_t4) {
                _r273_t3 = _r273_t0[_r273_t2];
                r273_FMosaicWide = _r273_t3[0];
                r273_MosaicNameSuffix = _r273_t3[1];
                r273_MosaicWidth = _r273_t3[2];
                r273_MosaicWidthScalar = _r273_t3[3];
                (function () {
                    var _r276_t3, _r276_tag4, _r276_t5, _r276_tag6, _r276_t7, _r276_tag8, _r276_t9, _r276_tag10, _r276_t11, _r276_tag12, _r276_t13, _r276_tag14, _r276_t15, _r276_tag16, _r276_t17, _r276_tag18, _r276_t19, _r276_tag20, _r276_t21, _r276_tag22, _r276_t23, _r276_tag24, _r276_t25, _r276_tag26, _r276_t27, _r276_tag28, _r276_t29, _r276_tag30, _r276_t31, _r276_tag32, _r276_t33, _r276_tag34, _r276_t35, _r276_tag36, _r276_t37, _r276_tag38, _r276_t39, _r276_tag40, _r276_t41, _r276_tag42, _r276_t43, _r276_tag44, _r276_t45, _r276_tag46, _r276_t47, _r276_tag48, _r276_t49, _r276_tag50, _r276_t51, _r276_tag52, _r276_t53, _r276_tag54, _r276_t55, _r276_tag56;
                    var r276_MosaicDesiredWidth = r270_WideWidth1;
                    var r276_MosaicMiddle = r273_MosaicWidth / 2;
                    var r276_MosaicUnitWidth = r273_MosaicWidth / r273_MosaicWidthScalar;
                    var r276_MangleUnicode = function (r277_unicode, r277__desiredOverride) {
                        var _r277_t0, _r277_t1;
                        return r273_MosaicWidth === (r277__desiredOverride || r276_MosaicDesiredWidth) ? r277_unicode : void 0;
                    };
                    var r276_MangleName = function (r278_name) {
                        var _r278_t0, _r278_t1;
                        return r278_name + r273_MosaicNameSuffix;
                    };
                    var _r276_t0 = r270_xn$Capture$2Lrc8.CommonShapes.resolve();
                    var r276_Rect = _r276_t0.Rect;
                    var r276_RoundStrokeTerminalAt = _r276_t0.RoundStrokeTerminalAt;
                    var r276_HBar = _r276_t0.HBar;
                    var r276_VBar = _r276_t0.VBar;
                    var r276_FlipAround = _r276_t0.FlipAround;
                    var r276_PointingTo = _r276_t0.PointingTo;
                    var r276_WithTransform = _r276_t0.WithTransform;
                    var r276_MaskAboveLine = _r276_t0.MaskAboveLine;
                    var r276_MaskBelowLine = _r276_t0.MaskBelowLine;
                    var r276_MaskLeftLine = _r276_t0.MaskLeftLine;
                    var r276_MaskRightLine = _r276_t0.MaskRightLine;
                    var _r276_t1 = r270_xn$Capture$2Lrc8['Common-Derivatives'].resolve();
                    var r276_xn$referglyph$1aao = _r276_t1['refer-glyph'];
                    var r276_HCombine = _r276_t1.HCombine;
                    var r276_VCombine = _r276_t1.VCombine;
                    var _r276_t2 = r270_xn$Capture$2Lrc8['Symbol-Geometric-Shared'].resolve();
                    var r276_UnicodeWeightGrade = _r276_t2.UnicodeWeightGrade;
                    var r276_arrowHeight = r270_para.arrowHeight * (r270_Width - r270_SB / 2) * Math.pow(r273_MosaicWidth / r276_MosaicUnitWidth, 1 / 3);
                    var r276_arrowWidth = Math.min(r273_MosaicWidth - r270_SB / 2, r276_arrowHeight);
                    var r276_arrowTop = r1_mix(r270_OperBot, r270_OperTop, 1 / 2) + r276_arrowHeight / 2;
                    var r276_arrowBot = r1_mix(r270_OperBot, r270_OperTop, 1 / 2) - r276_arrowHeight / 2;
                    var r276_arrowMidX = r273_MosaicWidth / 2;
                    var r276_arrowSB = (r273_MosaicWidth - r276_arrowWidth) / 2;
                    var r276_arrowRSB = r273_MosaicWidth - r276_arrowSB;
                    var r276_o = r270_O * 2;
                    var r276_arrowHeadSize = (r270_Width - r270_SB) * r270_DesignParameters.arrow_size * Math.pow(r276_arrowWidth / r270_Width, 0.5) - r270_AdviceStroke(5) / 4;
                    var r276_arrowSw = r270_OperatorStroke;
                    var r276_halfArrowSw = r276_arrowSw / 2;
                    var r276_bendArrowHeadSize = r1_mix(r276_arrowSw, r276_arrowHeadSize, 0.75);
                    var r276_fine = r270_AdviceStroke(3.5);
                    var r276_terminal = r270_AdviceStroke(5);
                    var r276_halfTerminal = r276_terminal / 2;
                    var r276_doubleArrowStemWidth = r276_arrowHeadSize * 1.1;
                    var r276_kLongArrowSB = r270_DivFrame(r273_MosaicWidthScalar, 4).leftSB / r270_DivFrame(r273_MosaicWidthScalar, 2).leftSB;
                    var r276_diagPropX = 1 / Math.pow(2, 1 / 4);
                    var r276_diagPropY = 1 / Math.pow(2, 1 / 4);
                    var r276_arrowDiagRSB = r1_mix(r276_arrowMidX, r276_arrowRSB, r276_diagPropX);
                    var r276_arrowDiagSB = r1_mix(r276_arrowMidX, r276_arrowSB, r276_diagPropX);
                    var r276_arrowDiagBot = r1_mix(r276_arrowMidX, r276_arrowBot, r276_diagPropY);
                    var r276_arrowDiagTop = r1_mix(r276_arrowMidX, r276_arrowTop, r276_diagPropY);
                    var r276_ArrowBar = function (r282_x1, r282_y1, r282_x2, r282_y2, r282_halfSw, r282_w) {
                        var _r282_t0, _r282_t1;
                        return r276_PointingTo(r282_x1, r282_y1, r282_x2, r282_y2, function (r283_mag) {
                            var _r283_t0, _r283_t1;
                            var r283_p = (r283_mag - r276_o - r282_halfSw * r1_fallback(r282_w, 1.1)) / r283_mag;
                            return r270_dispiro(r270_widths.center(r282_halfSw * 2), r270_flat(r283_mag * (1 - r283_p), 0), r270_curl(r283_mag, 0));
                        });
                    };
                    var r276_DashArrowBar = function (r284_x1, r284_y1, r284_x2, r284_y2, r284_halfSw, r284_gap, r284_stop, r284_w) {
                        var _r284_t0, _r284_t1;
                        return r276_PointingTo(r284_x1, r284_y1, r284_x2, r284_y2, function (r285_mag) {
                            var _r285_t0, _r285_t1;
                            return function () {
                                var _r287_t1;
                                var _r287_t0 = this;
                                var r287_currentGlyph = _r287_t0;
                                var r287_p = (r285_mag - r276_o - r284_halfSw * r1_fallback(r284_w, 1.1)) / r285_mag;
                                var r287_deltaT = (r284_gap + r284_stop) / r285_mag;
                                var r287_t = 0;
                                while (r287_t < r287_p) {
                                    r287_currentGlyph.include(r270_dispiro(r270_widths.center(r284_halfSw * 2), r270_flat(r1_mix(r285_mag * (1 - r287_p), r285_mag, r287_t), 0), r270_curl(r1_mix(r285_mag * (1 - r287_p), r285_mag, Math.min(r287_p, r287_t + r284_stop / r285_mag)), 0)));
                                    r287_t = r287_t + r287_deltaT;
                                }
                                return void 0;
                            };
                        });
                    };
                    var r276_HookArrowBar = function (r289_x1, r289_y1, r289_x2, r289_y2, r289_halfSw, r289_s, r289_w) {
                        var _r289_t0, _r289_t1;
                        return r276_PointingTo(r289_x1, r289_y1, r289_x2, r289_y2, function (r290_mag) {
                            var _r290_t0, _r290_t1;
                            var r290_p = (r290_mag - r276_o - r289_halfSw * r1_fallback(r289_w, 1.1)) / r290_mag;
                            return r270_dispiro(r270_widths.center(r289_halfSw * 2), r270_g4(r290_mag - Math.abs(r289_s) / 2 - 0.1, r289_s), r270_g4(r290_mag - Math.abs(r289_s) / 2, r289_s), r270_archv(), r270_g4(r290_mag - r270_O, r289_s / 2), r270_arcvh(), r270_flat(r290_mag - Math.abs(r289_s) / 2, 0), r270_curl(r1_mix(r290_mag, 0, r290_p), 0));
                        });
                    };
                    var r276_LoopArrowBar = function (r291_x1, r291_y1, r291_x2, r291_y2, r291_halfSw, r291_s, r291_w) {
                        var _r291_t0, _r291_t1;
                        return r276_PointingTo(r291_x1, r291_y1, r291_x2, r291_y2, function (r292_mag) {
                            var _r292_t0, _r292_t1;
                            var r292_p = (r292_mag - r276_o - r291_halfSw * r1_fallback(r291_w, 1.1)) / r292_mag;
                            return r270_dispiro(r270_widths.center(r291_halfSw * 2), r270_flat(r292_mag - Math.abs(r291_s), -r291_s, r270_heading(r291_s > 0 ? r270_Upward : r270_Downward)), r270_curl(r292_mag - Math.abs(r291_s), r291_s / 2), r270_g4(r292_mag - Math.abs(r291_s) / 2, r291_s, r270_heading(r270_Rightward)), r270_archv(), r270_g4(r292_mag - r270_O, r291_s / 2), r270_arcvh(), r270_flat(r292_mag - Math.abs(r291_s) / 2, 0), r270_curl(r1_mix(r292_mag, 0, r292_p), 0));
                        });
                    };
                    var r276_SemiHookArrowBar = function (r293_x1, r293_y1, r293_x2, r293_y2, r293_halfSw, r293_halfFine, r293_s, r293_w) {
                        var _r293_t0, _r293_t1;
                        return r276_PointingTo(r293_x1, r293_y1, r293_x2, r293_y2, function (r294_mag) {
                            var _r294_t0, _r294_t1;
                            var r294_p = (r294_mag - r276_o - r293_halfSw * r1_fallback(r293_w, 1.1)) / r294_mag;
                            return r270_dispiro(r270_straight[r293_s > 0 ? 'down' : 'up'].start(r294_mag - r270_O, r293_s, r270_widths.center(r293_halfFine * 2)), r270_arcvh(), r270_flat(r294_mag - Math.abs(r293_s) / 2, 0, r270_widths.center(r293_halfSw * 2)), r270_curl(r1_mix(r294_mag, 0, r294_p), 0));
                        });
                    };
                    var r276_ArrowHead = function (r295_x1, r295_y1, r295_x2, r295_y2, r295__size) {
                        var _r295_t0, _r295_t1;
                        return r270_union(r276_LHSHalfArrowHead(r295_x1, r295_y1, r295_x2, r295_y2, 0, r295__size), r276_RHSHalfArrowHead(r295_x1, r295_y1, r295_x2, r295_y2, 0, r295__size));
                    };
                    var r276_LHSHalfArrowHead = function (r296_x1, r296_y1, r296_x2, r296_y2, r296_width, r296__size) {
                        var _r296_t0, _r296_t1;
                        var r296_size = r1_fallback(r296__size, r276_arrowHeadSize);
                        return r270_xn$createAndSaveGlyphImpl$2Lrc3c(null, null, r276_PointingTo(r296_x1, r296_y1, r296_x2, r296_y2, function (r298_mag) {
                            var _r298_t0, _r298_t1;
                            return r270_dispiro(r270_widths.lhs(r276_fine), r270_flat(r276_o, r296_width / 2, r270_heading(r270_Downward)), r270_curl(r276_o + r296_size, -r296_size, r270_widths.lhs(r276_terminal)));
                        }));
                    };
                    var r276_RHSHalfArrowHead = function (r299_x1, r299_y1, r299_x2, r299_y2, r299_width, r299__size) {
                        var _r299_t0, _r299_t1;
                        var r299_size = r1_fallback(r299__size, r276_arrowHeadSize);
                        return r270_xn$createAndSaveGlyphImpl$2Lrc3c(null, null, r276_PointingTo(r299_x1, r299_y1, r299_x2, r299_y2, function (r301_mag) {
                            var _r301_t0, _r301_t1;
                            return r270_dispiro(r270_widths.rhs(r276_fine), r270_flat(r276_o, -r299_width / 2, r270_heading(r270_Upward)), r270_curl(r276_o + r299_size, r299_size, r270_widths.rhs(r276_terminal)));
                        }));
                    };
                    var r276_SsArrowHead = function (r302_x1, r302_y1, r302_x2, r302_y2, r302__size) {
                        var _r302_t0, _r302_t1;
                        return r270_union(r276_LHSHalfSsArrowHead(r302_x1, r302_y1, r302_x2, r302_y2, 0, r302__size), r276_RHSHalfSsArrowHead(r302_x1, r302_y1, r302_x2, r302_y2, 0, r302__size));
                    };
                    var r276_LHSHalfSsArrowHead = function (r303_x1, r303_y1, r303_x2, r303_y2, r303_width, r303__size) {
                        var _r303_t0, _r303_t1;
                        var r303_size = r1_fallback(r303__size, r276_arrowHeadSize);
                        return r270_xn$createAndSaveGlyphImpl$2Lrc3c(null, null, r276_PointingTo(r303_x1, r303_y1, r303_x2, r303_y2, function (r305_mag) {
                            var _r305_t0, _r305_t1;
                            return r270_dispiro(r270_widths.lhs(r276_fine), r270_flat(r276_o, r303_width / 2, r270_heading(r270_Downward)), r270_curl(r276_o + r303_size, -r303_size));
                        }));
                    };
                    var r276_RHSHalfSsArrowHead = function (r306_x1, r306_y1, r306_x2, r306_y2, r306_width, r306__size) {
                        var _r306_t0, _r306_t1;
                        var r306_size = r1_fallback(r306__size, r276_arrowHeadSize);
                        return r270_xn$createAndSaveGlyphImpl$2Lrc3c(null, null, r276_PointingTo(r306_x1, r306_y1, r306_x2, r306_y2, function (r308_mag) {
                            var _r308_t0, _r308_t1;
                            return r270_dispiro(r270_widths.rhs(r276_fine), r270_flat(r276_o, -r306_width / 2, r270_heading(r270_Upward)), r270_curl(r276_o + r306_size, r306_size));
                        }));
                    };
                    var r276_ArrowHeadMaskOut = function (r309_x1, r309_y1, r309_x2, r309_y2, r309__size) {
                        var _r309_t0, _r309_t1;
                        return r270_union(r276_RHSHalfArrowHeadMaskOut(r309_x1, r309_y1, r309_x2, r309_y2, 0, r309__size), r276_LHSHalfArrowHeadMaskOut(r309_x1, r309_y1, r309_x2, r309_y2, 0, r309__size));
                    };
                    var r276_RHSHalfArrowHeadMaskOut = function (r310_x1, r310_y1, r310_x2, r310_y2, r310_width, r310__size) {
                        var _r310_t0, _r310_t1;
                        var r310_size = r1_fallback(r310__size, r276_arrowHeadSize);
                        return r270_xn$createAndSaveGlyphImpl$2Lrc3c(null, null, r276_PointingTo(r310_x1, r310_y1, r310_x2, r310_y2, function (r312_mag) {
                            var _r312_t0, _r312_t1;
                            return r270_xn$spirooutline$1aao(r270_corner(r270_O, -r310_width / 2), r270_corner(r270_O + r310_size, r310_size), r270_corner(r276_o, r310_size), r270_corner(r276_o, -r310_width / 2));
                        }));
                    };
                    var r276_LHSHalfArrowHeadMaskOut = function (r313_x1, r313_y1, r313_x2, r313_y2, r313_width, r313__size) {
                        var _r313_t0, _r313_t1;
                        var r313_size = r1_fallback(r313__size, r276_arrowHeadSize);
                        return r270_xn$createAndSaveGlyphImpl$2Lrc3c(null, null, r276_PointingTo(r313_x1, r313_y1, r313_x2, r313_y2, function (r315_mag) {
                            var _r315_t0, _r315_t1;
                            return r270_xn$spirooutline$1aao(r270_corner(r270_O, +r313_width / 2), r270_corner(r270_O + r313_size, -r313_size), r270_corner(r276_o, -r313_size), r270_corner(r276_o, +r313_width / 2));
                        }));
                    };
                    var r276_TriangleArrowHead = function (r316_x1, r316_y1, r316_x2, r316_y2, r316_width, r316_length) {
                        var _r316_t0, _r316_t1;
                        return r270_xn$createAndSaveGlyphImpl$2Lrc3c(null, null, r276_PointingTo(r316_x1, r316_y1, r316_x2, r316_y2, function (r318_mag) {
                            var _r318_t0, _r318_t1;
                            return r270_xn$spirooutline$1aao(r270_corner(r276_o, 0), r270_corner(r316_length, r316_width - r276_o), r270_corner(r316_length, -r316_width + r276_o));
                        }));
                    };
                    var r276_ArrowShape = function (r319_x1, r319_y1, r319_x2, r319_y2, r319_size) {
                        var _r319_t0, _r319_t1;
                        return function () {
                            var _r321_t1;
                            var _r321_t0 = this;
                            var r321_currentGlyph = _r321_t0;
                            r321_currentGlyph.include(r276_ArrowHead(r319_x1, r319_y1, r319_x2, r319_y2, r319_size));
                            r321_currentGlyph.include(r276_ArrowBar(r319_x1, r319_y1, r319_x2, r319_y2, r276_halfArrowSw));
                            return void 0;
                        };
                    };
                    var r276_SsArrowShape = function (r324_x1, r324_y1, r324_x2, r324_y2, r324_size) {
                        var _r324_t0, _r324_t1;
                        return function () {
                            var _r326_t1;
                            var _r326_t0 = this;
                            var r326_currentGlyph = _r326_t0;
                            r326_currentGlyph.include(r276_SsArrowHead(r324_x1, r324_y1, r324_x2, r324_y2, r324_size));
                            r326_currentGlyph.include(r276_ArrowBar(r324_x1, r324_y1, r324_x2, r324_y2, r276_halfArrowSw));
                            return void 0;
                        };
                    };
                    var r276_DashArrowShape = function (r329_x1, r329_y1, r329_x2, r329_y2, r329_size) {
                        var _r329_t0, _r329_t1;
                        return function () {
                            var _r331_t1;
                            var _r331_t0 = this;
                            var r331_currentGlyph = _r331_t0;
                            var r331_gap = r270_AdviceStroke(6);
                            r331_currentGlyph.include(r276_ArrowHead(r329_x1, r329_y1, r329_x2, r329_y2, r329_size));
                            r331_currentGlyph.include(r276_DashArrowBar(r329_x1, r329_y1, r329_x2, r329_y2, r276_halfArrowSw, r331_gap, Math.max(r270_Width / 5, r331_gap * 3)));
                            return void 0;
                        };
                    };
                    var r276_HookArrowShape = function (r334_mul) {
                        var _r334_t0, _r334_t1;
                        return function (r335_x1, r335_y1, r335_x2, r335_y2, r335_size) {
                            var _r335_t0, _r335_t1;
                            return function () {
                                var _r337_t1;
                                var _r337_t0 = this;
                                var r337_currentGlyph = _r337_t0;
                                r337_currentGlyph.include(r276_ArrowHead(r335_x1, r335_y1, r335_x2, r335_y2, r335_size));
                                r337_currentGlyph.include(r276_HookArrowBar(r335_x1, r335_y1, r335_x2, r335_y2, r276_halfArrowSw, r335_size * r334_mul));
                                return void 0;
                            };
                        };
                    };
                    var r276_LoopArrowShape = function (r340_mul) {
                        var _r340_t0, _r340_t1;
                        return function (r341_x1, r341_y1, r341_x2, r341_y2, r341_size) {
                            var _r341_t0, _r341_t1;
                            return function () {
                                var _r343_t1;
                                var _r343_t0 = this;
                                var r343_currentGlyph = _r343_t0;
                                r343_currentGlyph.include(r276_ArrowHead(r341_x1, r341_y1, r341_x2, r341_y2, r341_size));
                                r343_currentGlyph.include(r276_LoopArrowBar(r341_x1, r341_y1, r341_x2, r341_y2, r276_halfArrowSw, r341_size * r340_mul));
                                return void 0;
                            };
                        };
                    };
                    var r276_ThickArrowShape = function (r346_color) {
                        var _r346_t0, _r346_t1;
                        return function (r347_x1, r347_y1, r347_x2, r347_y2) {
                            var _r347_t0, _r347_t1, _r347_t2;
                            var r347_headLen = r276_MosaicUnitWidth * Math.sqrt(r273_MosaicWidthScalar) * 0.4;
                            var r347_halfBarWidth = r347_headLen / 3;
                            var r347_headWidth = r347_halfBarWidth * 2;
                            var r347_fine = Math.min(r270_AdviceStroke(5), r347_halfBarWidth * 0.6);
                            var r347_mag = Math.hypot(r347_y2 - r347_y1, r347_x2 - r347_x1);
                            var r347_p = (r347_mag - r347_fine) / r347_mag;
                            var r347_p2 = (r347_mag - r347_fine * Math.sqrt(13) / 2) / r347_mag;
                            var r347_innerHeaderLengthShrink = r347_fine * (1 + Math.sqrt(13) / 2);
                            var r347_x1a = r1_mix(r347_x1, r347_x2, 1 - r347_p);
                            var r347_y1a = r1_mix(r347_y1, r347_y2, 1 - r347_p);
                            var r347_x2a = r1_mix(r347_x1, r347_x2, r347_p2);
                            var r347_y2a = r1_mix(r347_y1, r347_y2, r347_p2);
                            var r347_x1CoA = r1_mix(r347_x1, r347_x2, -0.05);
                            var r347_y1CoA = r1_mix(r347_y1, r347_y2, -0.05);
                            return _r347_t0 = r346_color, _r347_t0 === 'white' ? r270_difference(r270_union(r276_TriangleArrowHead(r347_x1, r347_y1, r347_x2, r347_y2, r347_headWidth, r347_headLen), r276_ArrowBar(r347_x1, r347_y1, r347_x2, r347_y2, r347_halfBarWidth + r347_fine / 2, 2)), r270_union(r276_TriangleArrowHead(r347_x1a, r347_y1a, r347_x2a, r347_y2a, r347_headWidth - r347_innerHeaderLengthShrink * r347_headWidth / r347_headLen, r347_headLen - r347_innerHeaderLengthShrink), r276_ArrowBar(r347_x1a, r347_y1a, r347_x2a, r347_y2a, r347_halfBarWidth - r347_fine / 2, 2))) : _r347_t0 === 'white-open' ? r270_difference(r270_union(r276_TriangleArrowHead(r347_x1, r347_y1, r347_x2, r347_y2, r347_headWidth, r347_headLen), r276_ArrowBar(r347_x1, r347_y1, r347_x2, r347_y2, r347_halfBarWidth + r347_fine / 2, 2)), r270_union(r276_TriangleArrowHead(r347_x1CoA, r347_y1CoA, r347_x2a, r347_y2a, r347_headWidth - r347_innerHeaderLengthShrink * r347_headWidth / r347_headLen, r347_headLen - r347_innerHeaderLengthShrink), r276_ArrowBar(r347_x1CoA, r347_y1CoA, r347_x2a, r347_y2a, r347_halfBarWidth - r347_fine / 2, 2))) : _r347_t0 === 'black' ? r270_union(r276_TriangleArrowHead(r347_x1, r347_y1, r347_x2, r347_y2, r347_headWidth, r347_headLen), r276_ArrowBar(r347_x1, r347_y1, r347_x2, r347_y2, r347_halfBarWidth, 2)) : _r347_t0 === 'blackSemiHookR' ? r270_union(r276_TriangleArrowHead(r347_x1, r347_y1, r347_x2, r347_y2, r347_headWidth, r347_headLen), r276_SemiHookArrowBar(r347_x1, r347_y1, r347_x2, r347_y2, r347_halfBarWidth, r276_halfTerminal, r347_headWidth, 2)) : _r347_t0 === 'blackSemiHookL' ? r270_union(r276_TriangleArrowHead(r347_x1, r347_y1, r347_x2, r347_y2, r347_headWidth, r347_headLen), r276_SemiHookArrowBar(r347_x1, r347_y1, r347_x2, r347_y2, r347_halfBarWidth, r276_halfTerminal, -r347_headWidth, 2)) : void 0;
                        };
                    };
                    var r276_RoundArrow = function () {
                        var r350_Shape;
                        var r350_exports = {};
                        var r350_Blob = function (r357_x, r357_y, r357_sw) {
                            var _r357_t0, _r357_t1;
                            return r276_RoundStrokeTerminalAt(r357_x, r357_y, r357_sw / 2);
                        };
                        var r350_Bar = function (r358_x1, r358_y1, r358_x2, r358_y2, r358_sw) {
                            var _r358_t0, _r358_t1;
                            return r276_PointingTo(r358_x1, r358_y1, r358_x2, r358_y2, function (r359_mag) {
                                var _r359_t0, _r359_t1;
                                return r270_union(r350_Blob(0, 0, r358_sw), r350_Blob(r359_mag, 0, r358_sw), r270_dispiro(r270_widths.center(r358_sw), r270_flat(0, 0), r270_curl(r359_mag, 0)));
                            });
                        };
                        var r350_Head = function (r360_x1, r360_y1, r360_x2, r360_y2, r360_sw, r360_headLen, r360_headWidth) {
                            var _r360_t0, _r360_t1;
                            return r276_PointingTo(r360_x1, r360_y1, r360_x2, r360_y2, function (r361_mag) {
                                var _r361_t0, _r361_t1;
                                return r270_union(r350_Blob(r360_headLen, r360_headWidth, r360_sw), r350_Blob(r360_headLen, -r360_headWidth, r360_sw), r270_dispiro(r270_widths.center(r360_sw), r270_flat(0, 0), r270_curl(r360_headLen, r360_headWidth)), r270_dispiro(r270_widths.center(r360_sw), r270_flat(0, 0), r270_curl(r360_headLen, -r360_headWidth)));
                            });
                        };
                        r350_exports.Shape = r350_Shape = function (r363_sw) {
                            var _r363_t0, _r363_t1;
                            return function (r364_x1, r364_y1, r364_x2, r364_y2) {
                                var _r364_t0, _r364_t1;
                                var r364_headLen = r276_MosaicUnitWidth * Math.sqrt(r273_MosaicWidthScalar) * 0.5;
                                var r364_headWidth = r364_headLen * 1;
                                var r364_mag = Math.hypot(r364_x2 - r364_x1, r364_y2 - r364_y1);
                                var r364_p = 1 - r363_sw / r364_mag;
                                var r364_pHalf = r1_mix(1, r364_p, 0.5);
                                var r364_x1a = r1_mix(r1_mix(r364_x1, r364_x2, 0.5), r364_x1, r364_p);
                                var r364_x2a = r1_mix(r1_mix(r364_x1, r364_x2, 0.5), r364_x2, r364_p);
                                var r364_y1a = r1_mix(r1_mix(r364_y1, r364_y2, 0.5), r364_y1, r364_p);
                                var r364_y2a = r1_mix(r1_mix(r364_y1, r364_y2, 0.5), r364_y2, r364_p);
                                return r270_union(r350_Bar(r364_x1a, r364_y1a, r364_x2a, r364_y2a, r363_sw), r350_Head(r364_x1a, r364_y1a, r364_x2a, r364_y2a, r363_sw, r364_pHalf * r364_headLen, r364_pHalf * r364_headWidth));
                            };
                        };
                        return r350_exports;
                    }();
                    var r276_BarbArrowHead = function (r365_x1, r365_y1, r365_x2, r365_y2, r365_width, r365_length, r365_thickness) {
                        var _r365_t0, _r365_t1;
                        return r270_xn$createAndSaveGlyphImpl$2Lrc3c(null, null, function () {
                            var _r368_t1;
                            var _r368_t0 = this;
                            var r368_currentGlyph = _r368_t0;
                            r368_currentGlyph.include(r276_PointingTo(r365_x1, r365_y1, r365_x2, r365_y2, function (r370_mag) {
                                var _r370_t0, _r370_t1;
                                return r270_xn$spirooutline$1aao(r270_corner(r276_o, 0), r270_corner(r365_length, r365_width - r276_o), r270_corner(r365_length + r365_thickness, r365_width - r276_o), r270_corner(r276_o + r365_thickness, 0), r270_corner(r365_length + r365_thickness, -r365_width + r276_o), r270_corner(r365_length, -r365_width + r276_o));
                            }));
                            return void 0;
                        });
                    };
                    var r276_BarbArrowShape = function (r371_k, r371_thickness) {
                        var _r371_t0, _r371_t1;
                        return function (r372_x1, r372_y1, r372_x2, r372_y2) {
                            var _r372_t0, _r372_t1;
                            var r372_headLen = r276_MosaicUnitWidth * Math.sqrt(r273_MosaicWidthScalar) * r371_k;
                            var r372_halfBarWidth = r371_thickness / 2;
                            return r270_union(r276_BarbArrowHead(r372_x1, r372_y1, r372_x2, r372_y2, r372_headLen, r372_headLen, r371_thickness * 1.125), r276_ArrowBar(r372_x1, r372_y1, r372_x2, r372_y2, r372_halfBarWidth, 2));
                        };
                    };
                    var r276_HalfArrowShape = function (r373_side) {
                        var _r373_t0, _r373_t1;
                        return function (r374_x1, r374_y1, r374_x2, r374_y2, r374_size) {
                            var _r374_t0, _r374_t1;
                            return function () {
                                var _r376_t1;
                                var _r376_t0 = this;
                                var r376_currentGlyph = _r376_t0;
                                r376_currentGlyph.include(r373_side(r374_x1, r374_y1, r374_x2, r374_y2, r276_arrowSw, r374_size));
                                r376_currentGlyph.include(r276_ArrowBar(r374_x1, r374_y1, r374_x2, r374_y2, r276_halfArrowSw, 1.75));
                                return void 0;
                            };
                        };
                    };
                    var r276_ArrowBarMaskOut = function (r379_d) {
                        var _r379_t0, _r379_t1;
                        return r270_xn$spirooutline$1aao(r270_corner(r270_O, 0), r270_corner(2 * r379_d + r270_O, 2 * r379_d), r270_corner(-2 * r379_d + r270_O, 2 * r379_d), r270_corner(-2 * r379_d + r270_O, -2 * r379_d), r270_corner(2 * r379_d + r270_O, -2 * r379_d));
                    };
                    var r276_DoubleArrowBarShape = function (r380_w, r380_x1, r380_y1, r380_x2, r380_y2) {
                        var _r380_t0, _r380_t1;
                        return r276_PointingTo(r380_x1, r380_y1, r380_x2, r380_y2, function (r381_mag) {
                            var _r381_t0, _r381_t1;
                            var r381_fine = Math.min(r380_w / 3, r276_arrowSw);
                            var r381_coFine = r380_w / 2 - r381_fine / 2;
                            return r270_difference(r270_union(r270_dispiro(r270_widths.center(r381_fine), r270_flat(0, +r381_coFine), r270_curl(r381_mag, +r381_coFine)), r270_dispiro(r270_widths.center(r381_fine), r270_flat(0, -r381_coFine), r270_curl(r381_mag, -r381_coFine))), r276_ArrowBarMaskOut(r381_coFine));
                        });
                    };
                    var r276_DoubleArrowShape = function (r382_w) {
                        var _r382_t0, _r382_t1;
                        return function (r383_x1, r383_y1, r383_x2, r383_y2, r383_size) {
                            var _r383_t0, _r383_t1;
                            return function () {
                                var _r385_t1;
                                var _r385_t0 = this;
                                var r385_currentGlyph = _r385_t0;
                                r385_currentGlyph.include(r276_ArrowHead(r383_x1, r383_y1, r383_x2, r383_y2, r383_size));
                                r385_currentGlyph.include(r276_DoubleArrowBarShape(r382_w, r383_x1, r383_y1, r383_x2, r383_y2));
                                return void 0;
                            };
                        };
                    };
                    var r276_TripleArrowBarShape = function (r388_w, r388_x1, r388_y1, r388_x2, r388_y2) {
                        var _r388_t0, _r388_t1;
                        return r276_PointingTo(r388_x1, r388_y1, r388_x2, r388_y2, function (r389_mag) {
                            var _r389_t0, _r389_t1;
                            var r389_fine = Math.min(r388_w / 4, r276_arrowSw);
                            var r389_coFine = r388_w / 2 - r389_fine / 2;
                            return r270_difference(r270_union(r270_dispiro(r270_widths.center(r389_fine), r270_flat(0, +r389_coFine), r270_curl(r389_mag, +r389_coFine)), r270_dispiro(r270_widths.center(r389_fine), r270_flat(0, 0), r270_curl(r389_mag, 0)), r270_dispiro(r270_widths.center(r389_fine), r270_flat(0, -r389_coFine), r270_curl(r389_mag, -r389_coFine))), r276_ArrowBarMaskOut(r389_coFine));
                        });
                    };
                    var r276_TripleArrowShape = function (r390_w) {
                        var _r390_t0, _r390_t1;
                        return function (r391_x1, r391_y1, r391_x2, r391_y2, r391_size) {
                            var _r391_t0, _r391_t1;
                            return function () {
                                var _r393_t1;
                                var _r393_t0 = this;
                                var r393_currentGlyph = _r393_t0;
                                r393_currentGlyph.include(r276_ArrowHead(r391_x1, r391_y1, r391_x2, r391_y2, r391_size));
                                r393_currentGlyph.include(r276_TripleArrowBarShape(r390_w, r391_x1, r391_y1, r391_x2, r391_y2));
                                return void 0;
                            };
                        };
                    };
                    var r276_QuadrupleArrowBarShape = function (r396_w, r396_x1, r396_y1, r396_x2, r396_y2) {
                        var _r396_t0, _r396_t1;
                        return r276_PointingTo(r396_x1, r396_y1, r396_x2, r396_y2, function (r397_mag) {
                            var _r397_t0, _r397_t1;
                            var r397_fine = Math.min(r396_w / 6.4, r276_arrowSw);
                            var r397_coFine = r396_w / 2 - r397_fine / 2;
                            return r270_difference(r270_union(r270_dispiro(r270_widths.center(r397_fine), r270_flat(0, +r397_coFine), r270_curl(r397_mag, +r397_coFine)), r270_dispiro(r270_widths.center(r397_fine), r270_flat(0, +r397_coFine / 3), r270_curl(r397_mag, +r397_coFine / 3)), r270_dispiro(r270_widths.center(r397_fine), r270_flat(0, -r397_coFine / 3), r270_curl(r397_mag, -r397_coFine / 3)), r270_dispiro(r270_widths.center(r397_fine), r270_flat(0, -r397_coFine), r270_curl(r397_mag, -r397_coFine))), r276_ArrowBarMaskOut(r397_coFine));
                        });
                    };
                    var r276_QuadrupleArrowShape = function (r398_w) {
                        var _r398_t0, _r398_t1;
                        return function (r399_x1, r399_y1, r399_x2, r399_y2, r399_size) {
                            var _r399_t0, _r399_t1;
                            return function () {
                                var _r401_t1;
                                var _r401_t0 = this;
                                var r401_currentGlyph = _r401_t0;
                                r401_currentGlyph.include(r276_ArrowHead(r399_x1, r399_y1, r399_x2, r399_y2, r399_size));
                                r401_currentGlyph.include(r276_QuadrupleArrowBarShape(r398_w, r399_x1, r399_y1, r399_x2, r399_y2));
                                return void 0;
                            };
                        };
                    };
                    var r276_dhArrowShape = function (r404_x1, r404_y1, r404_x2, r404_y2, r404_size) {
                        var _r404_t0, _r404_t1;
                        return function () {
                            var _r406_t1;
                            var _r406_t0 = this;
                            var r406_currentGlyph = _r406_t0;
                            var r406_mag = Math.hypot(r404_y2 - r404_y1, r404_x2 - r404_x1);
                            var r406_p = (r406_mag - r276_o - r404_size) / r406_mag;
                            r406_currentGlyph.include(r276_ArrowShape(r404_x1, r404_y1, r404_x2, r404_y2, r404_size));
                            r406_currentGlyph.include(r276_ArrowHead(r404_x1, r404_y1, r1_mix(r404_x1, r404_x2, r406_p), r1_mix(r404_y1, r404_y2, r406_p), r404_size));
                            return void 0;
                        };
                    };
                    var r276_htArrowShape = function (r409_x1, r409_y1, r409_x2, r409_y2, r409_size) {
                        var _r409_t0, _r409_t1;
                        return function () {
                            var _r411_t1;
                            var _r411_t0 = this;
                            var r411_currentGlyph = _r411_t0;
                            var r411_mag = Math.hypot(r409_y2 - r409_y1, r409_x2 - r409_x1);
                            var r411_p1 = (r409_size - r276_o - r276_halfArrowSw * 1.1) / r411_mag;
                            var r411_p2 = r409_size / r411_mag;
                            r411_currentGlyph.include(r276_ArrowShape(r1_mix(r409_x1, r409_x2, r411_p1), r1_mix(r409_y1, r409_y2, r411_p1), r409_x2, r409_y2, r409_size));
                            r411_currentGlyph.include(r276_ArrowHead(r409_x1, r409_y1, r1_mix(r409_x1, r409_x2, r411_p2), r1_mix(r409_y1, r409_y2, r411_p2), r409_size));
                            return void 0;
                        };
                    };
                    var r276_MkArrow = function (r414_shape, r414_id, r414_unicode, r414_x1, r414_y1, r414_x2, r414_y2, r414_width, r414_headSize) {
                        var _r414_t0, _r414_t1;
                        return r270_xn$createAndSaveGlyphImpl$2Lrc3c(r414_id, r414_unicode, function () {
                            var _r417_t1;
                            var _r417_t0 = this;
                            var r417_currentGlyph = _r417_t0;
                            r417_currentGlyph.setWidth(r1_fallback(r414_width, r273_MosaicWidth));
                            r417_currentGlyph.setBaseAnchor('slash', r1_mix(r414_x1, r414_x2, 2 / 5), r1_mix(r414_y1, r414_y2, 2 / 5));
                            r417_currentGlyph.include(r414_shape(r414_x1, r414_y1, r414_x2, r414_y2, r1_fallback(r414_headSize, r276_arrowHeadSize)));
                            return void 0;
                        });
                    };
                    var r276_DoubleArrow = function (r421_shape, r421_id, r421_unicode, r421_x1, r421_y1, r421_x2, r421_y2) {
                        var _r421_t0, _r421_t1;
                        return r270_xn$createAndSaveGlyphImpl$2Lrc3c(r421_id, r421_unicode, function () {
                            var _r424_t1;
                            var _r424_t0 = this;
                            var r424_currentGlyph = _r424_t0;
                            r424_currentGlyph.setWidth(r273_MosaicWidth);
                            r424_currentGlyph.setBaseAnchor('slash', r1_mix(r421_x1, r421_x2, 1 / 2), r1_mix(r421_y1, r421_y2, 1 / 2));
                            var r424_xm = r1_mix(r421_x1, r421_x2, 0.5);
                            var r424_ym = r1_mix(r421_y1, r421_y2, 0.5);
                            r424_currentGlyph.include(r421_shape(r424_xm, r424_ym, r421_x1, r421_y1, r276_arrowHeadSize));
                            r424_currentGlyph.include(r421_shape(r424_xm, r424_ym, r421_x2, r421_y2, r276_arrowHeadSize));
                            return void 0;
                        });
                    };
                    var r276_MkAngleArrow = function (r429_shape, r429_bar, r429_id, r429_unicode, r429_x1, r429_y1, r429_x2, r429_y2, r429_x3, r429_y3, r429_size) {
                        var _r429_t0, _r429_t1;
                        return r270_xn$createAndSaveGlyphImpl$2Lrc3c(r429_id, r429_unicode, function () {
                            var _r432_t1;
                            var _r432_t0 = this;
                            var r432_currentGlyph = _r432_t0;
                            r432_currentGlyph.setWidth(r273_MosaicWidth);
                            r432_currentGlyph.include(r270_union(r429_shape(r429_x2, r429_y2, r429_x3, r429_y3, r429_size), r429_bar(r429_x1, r429_y1, r429_x2, r429_y2)));
                            return void 0;
                        });
                    };
                    (function () {
                        var _r436_t0, _r436_t1, _r436_tag2;
                        r276_MkArrow(r276_ArrowShape, r276_MangleName('arrowLeft'), r276_MangleUnicode(8592), r276_arrowRSB, r270_SymbolMid, r276_arrowSB, r270_SymbolMid);
                        r276_MkArrow(r276_ArrowShape, r276_MangleName('arrowUp'), r276_MangleUnicode(8593), r276_arrowMidX, r276_arrowBot, r276_arrowMidX, r276_arrowTop);
                        r276_MkArrow(r276_ArrowShape, r276_MangleName('arrowRight'), r276_MangleUnicode(8594), r276_arrowSB, r270_SymbolMid, r276_arrowRSB, r270_SymbolMid);
                        r276_MkArrow(r276_ArrowShape, r276_MangleName('arrowDown'), r276_MangleUnicode(8595), r276_arrowMidX, r276_arrowTop, r276_arrowMidX, r276_arrowBot);
                        r276_MkArrow(r276_ArrowShape, r276_MangleName('arrowUpLeft'), r276_MangleUnicode(8598), r276_arrowDiagRSB, r276_arrowDiagBot, r276_arrowDiagSB, r276_arrowDiagTop);
                        r276_MkArrow(r276_ArrowShape, r276_MangleName('arrowUpRight'), r276_MangleUnicode(8599), r276_arrowDiagSB, r276_arrowDiagBot, r276_arrowDiagRSB, r276_arrowDiagTop);
                        r276_MkArrow(r276_ArrowShape, r276_MangleName('arrowDownRight'), r276_MangleUnicode(8600), r276_arrowDiagSB, r276_arrowDiagTop, r276_arrowDiagRSB, r276_arrowDiagBot);
                        r276_MkArrow(r276_ArrowShape, r276_MangleName('arrowDownLeft'), r276_MangleUnicode(8601), r276_arrowDiagRSB, r276_arrowDiagTop, r276_arrowDiagSB, r276_arrowDiagBot);
                        r276_MkArrow(r276_ArrowShape, r276_MangleName('arrowRightCompact'), null, r276_arrowSB, r270_SymbolMid, r276_arrowRSB, r270_SymbolMid, void 0, r276_bendArrowHeadSize);
                        r276_MkArrow(r276_ArrowShape, r276_MangleName('arrowLeftCompact'), null, r276_arrowRSB, r270_SymbolMid, r276_arrowSB, r270_SymbolMid, void 0, r276_bendArrowHeadSize);
                        if (r273_MosaicWidthScalar > 1 && !r270_para.forceMonospace)
                            _r436_t0 = function () {
                                var r438_l = r1_mix(0, r276_arrowSB, r276_kLongArrowSB);
                                var r438_r = r1_mix(r273_MosaicWidth, r276_arrowRSB, r276_kLongArrowSB);
                                r276_MkArrow(r276_ArrowShape, 'longArrowLeft', 10229, r438_r, r270_SymbolMid, r438_l, r270_SymbolMid);
                                return r276_MkArrow(r276_ArrowShape, 'longArrowRight', 10230, r438_l, r270_SymbolMid, r438_r, r270_SymbolMid);
                            }();
                        return _r436_t0;
                    }());
                    (function () {
                        r276_MkArrow(r276_DashArrowShape, r276_MangleName('dashArrowLeft'), r276_MangleUnicode(8672), r276_arrowRSB, r270_SymbolMid, r276_arrowSB, r270_SymbolMid);
                        r276_MkArrow(r276_DashArrowShape, r276_MangleName('dashArrowUp'), r276_MangleUnicode(8673), r276_arrowMidX, r276_arrowBot, r276_arrowMidX, r276_arrowTop);
                        r276_MkArrow(r276_DashArrowShape, r276_MangleName('dashArrowRight'), r276_MangleUnicode(8674), r276_arrowSB, r270_SymbolMid, r276_arrowRSB, r270_SymbolMid);
                        return r276_MkArrow(r276_DashArrowShape, r276_MangleName('dashArrowDown'), r276_MangleUnicode(8675), r276_arrowMidX, r276_arrowTop, r276_arrowMidX, r276_arrowBot);
                    }());
                    (function () {
                        r276_MkArrow(r276_HookArrowShape(1), r276_MangleName('hookArrowLeft'), r276_MangleUnicode(8617), r276_arrowRSB, r270_SymbolMid, r276_arrowSB, r270_SymbolMid);
                        r276_MkArrow(r276_HookArrowShape(-1), r276_MangleName('hookArrowRight'), r276_MangleUnicode(8618), r276_arrowSB, r270_SymbolMid, r276_arrowRSB, r270_SymbolMid);
                        r276_MkArrow(r276_HookArrowShape(-1), r276_MangleName('hookArrowUpLeft'), r276_MangleUnicode(10531), r276_arrowDiagRSB, r276_arrowDiagBot, r276_arrowDiagSB, r276_arrowDiagTop);
                        r276_MkArrow(r276_HookArrowShape(1), r276_MangleName('hookArrowUpRight'), r276_MangleUnicode(10532), r276_arrowDiagSB, r276_arrowDiagBot, r276_arrowDiagRSB, r276_arrowDiagTop);
                        r276_MkArrow(r276_HookArrowShape(-1), r276_MangleName('hookArrowDownRight'), r276_MangleUnicode(10533), r276_arrowDiagSB, r276_arrowDiagTop, r276_arrowDiagRSB, r276_arrowDiagBot);
                        return r276_MkArrow(r276_HookArrowShape(1), r276_MangleName('hookArrowDownLeft'), r276_MangleUnicode(10534), r276_arrowDiagRSB, r276_arrowDiagTop, r276_arrowDiagSB, r276_arrowDiagBot);
                    }());
                    (function () {
                        r276_MkArrow(r276_LoopArrowShape(1), r276_MangleName('loopArrowLeft'), r276_MangleUnicode(8619), r276_arrowRSB, r270_SymbolMid, r276_arrowSB, r270_SymbolMid);
                        return r276_MkArrow(r276_LoopArrowShape(-1), r276_MangleName('loopArrowRight'), r276_MangleUnicode(8620), r276_arrowSB, r270_SymbolMid, r276_arrowRSB, r270_SymbolMid);
                    }());
                    (function () {
                        var r446_arcSW = Math.min(r276_arrowSw, r270_AdviceStroke(4, r273_MosaicWidthScalar));
                        var r446_headSize = r1_mix(r446_arcSW, r276_arrowHeadSize, 0.5);
                        var r446_hsx0 = r270_HVContrast * r446_arcSW / 2;
                        var r446_hsx = r446_hsx0 + r446_headSize / 2;
                        var r446_hsx2 = r446_hsx0 + r273_MosaicWidthScalar / 4 * r446_headSize;
                        var r446_hsy = r446_arcSW / 2 + r446_headSize / 2;
                        var r446_MkHalfCircleArrow = function (r447_id, r447_unicode, r447_size, r447_sw, r447_z3, r447_tween32, r447_z2, r447_tween21, r447_z1, r447_z1t) {
                            var _r447_t0, _r447_t1;
                            return r270_xn$createAndSaveGlyphImpl$2Lrc3c(r276_MangleName(r447_id), r276_MangleUnicode(r447_unicode), function () {
                                var _r450_t1;
                                var _r450_t0 = this;
                                var r450_currentGlyph = _r450_t0;
                                r450_currentGlyph.setWidth(r273_MosaicWidth);
                                r450_currentGlyph.include(r276_ArrowHead(r447_z1.x, r447_z1.y, r447_z1t.x, r447_z1t.y, r447_size));
                                r450_currentGlyph.include(r270_difference(r270_dispiro(r270_widths.center(r447_sw), r447_z3, r447_tween32, r447_z2, r447_tween21, r447_z1, r447_z1t), r276_ArrowHeadMaskOut(r447_z1.x, r447_z1.y, r447_z1t.x, r447_z1t.y, r447_size)));
                                return void 0;
                            });
                        };
                        var r446_MkOpenCircleArrow = function (r454_id, r454_unicode, r454_size, r454_sw, r454_z4, r454_tween43, r454_z3, r454_tween32, r454_z2, r454_tween21, r454_z1, r454_z1t) {
                            var _r454_t0, _r454_t1;
                            return r270_xn$createAndSaveGlyphImpl$2Lrc3c(r276_MangleName(r454_id), r276_MangleUnicode(r454_unicode), function () {
                                var _r457_t1;
                                var _r457_t0 = this;
                                var r457_currentGlyph = _r457_t0;
                                r457_currentGlyph.setWidth(r273_MosaicWidth);
                                r457_currentGlyph.include(r276_ArrowHead(r454_z1.x, r454_z1.y, r454_z1t.x, r454_z1t.y, r454_size));
                                r457_currentGlyph.include(r270_difference(r270_dispiro(r270_widths.center(r454_sw), r454_z4, r454_tween43, r454_z3, r454_tween32, r454_z2, r454_tween21, r454_z1, r454_z1t), r276_ArrowHeadMaskOut(r454_z1.x, r454_z1.y, r454_z1t.x, r454_z1t.y, r454_size)));
                                return void 0;
                            });
                        };
                        r446_MkHalfCircleArrow('ccwHalfCircleArrowTop', 8630, r446_headSize, r446_arcSW, r270_g4(r276_arrowRSB - r446_hsx, r270_SymbolMid, r270_heading(r270_Upward)), r270_arcvh(), r270_g4(r276_arrowMidX, r276_arrowTop - r446_hsy, r270_heading(r270_Leftward)), r270_archv(), r270_flat(r276_arrowSB + r446_hsx, r270_SymbolMid), r270_curl(r276_arrowSB + r446_hsx, r270_SymbolMid - r446_headSize, r270_heading(r270_Downward)));
                        r446_MkHalfCircleArrow('cwHalfCircleArrowTop', 8631, r446_headSize, r446_arcSW, r270_g4(r276_arrowSB + r446_hsx, r270_SymbolMid, r270_heading(r270_Upward)), r270_arcvh(), r270_g4(r276_arrowMidX, r276_arrowTop - r446_hsy, r270_heading(r270_Rightward)), r270_archv(), r270_flat(r276_arrowRSB - r446_hsx, r270_SymbolMid), r270_curl(r276_arrowRSB - r446_hsx, r270_SymbolMid - r446_headSize, r270_heading(r270_Downward)));
                        r446_MkOpenCircleArrow('ccwOpenCircleArrow', 8634, r446_headSize, r446_arcSW, r270_g4(r276_arrowSB + r446_hsx2, r270_SymbolMid, r270_heading(r270_Downward)), r270_arcvh(), r270_g4(r276_arrowMidX, r276_arrowBot + r446_hsy, r270_heading(r270_Rightward)), r270_archv(), r270_g4(r276_arrowRSB - r446_hsx2, r270_SymbolMid, r270_heading(r270_Upward)), r270_arcvh(), r270_flat(r276_arrowMidX, r276_arrowTop - r446_hsy), r270_curl(r276_arrowMidX - r446_headSize, r276_arrowTop - r446_hsy, r270_heading(r270_Leftward)));
                        return r446_MkOpenCircleArrow('cwOpenCircleArrow', 8635, r446_headSize, r446_arcSW, r270_g4(r276_arrowRSB - r446_hsx2, r270_SymbolMid, r270_heading(r270_Downward)), r270_arcvh(), r270_g4(r276_arrowMidX, r276_arrowBot + r446_hsy, r270_heading(r270_Leftward)), r270_archv(), r270_g4(r276_arrowSB + r446_hsx2, r270_SymbolMid, r270_heading(r270_Upward)), r270_arcvh(), r270_flat(r276_arrowMidX, r276_arrowTop - r446_hsy), r270_curl(r276_arrowMidX + r446_headSize, r276_arrowTop - r446_hsy, r270_heading(r270_Rightward)));
                    }());
                    (function () {
                        var r462_bendL = r1_mix(r276_arrowMidX, r276_arrowSB, Math.max(r276_bendArrowHeadSize / (r276_arrowMidX - r276_arrowSB), Math.pow(0.6, 2 / r273_MosaicWidthScalar)));
                        var r462_bendR = r1_mix(r276_arrowMidX, r276_arrowRSB, Math.max(r276_bendArrowHeadSize / (r276_arrowMidX - r276_arrowSB), Math.pow(0.6, 2 / r273_MosaicWidthScalar)));
                        var r462_bendT = r270_SymbolMid + r276_bendArrowHeadSize * 2;
                        var r462_bendB = r270_SymbolMid - r276_bendArrowHeadSize * 2;
                        var r462_VBS = function (r463_x1, r463_y1, r463_x2, r463_y2) {
                            var _r463_t0, _r463_t1;
                            return r276_VBar.m(r463_x1, r463_y1, r463_y2 - 0.5 * r276_arrowSw, r276_arrowSw);
                        };
                        var r462_VBE = function (r464_x1, r464_y1, r464_x2, r464_y2) {
                            var _r464_t0, _r464_t1;
                            return r276_VBar.m(r464_x1, r464_y1, r464_y2 + 0.5 * r276_arrowSw, r276_arrowSw);
                        };
                        var r462_HBS = function (r465_x1, r465_y1, r465_x2, r465_y2) {
                            var _r465_t0, _r465_t1;
                            return r276_HBar.m(r465_x1, r465_x2 - 0.5 * r276_arrowSw, r465_y1, r276_arrowSw);
                        };
                        var r462_HBE = function (r466_x1, r466_y1, r466_x2, r466_y2) {
                            var _r466_t0, _r466_t1;
                            return r276_HBar.m(r466_x1, r466_x2 + 0.5 * r276_arrowSw, r466_y1, r276_arrowSw);
                        };
                        r276_MkAngleArrow(r276_ArrowShape, r462_VBE, r276_MangleName('Arrow-up-angle-bend-left'), r276_MangleUnicode(8624), r462_bendR, r276_arrowBot, r462_bendR, r276_arrowTop - r276_bendArrowHeadSize, r462_bendL, r276_arrowTop - r276_bendArrowHeadSize, r276_bendArrowHeadSize);
                        r276_MkAngleArrow(r276_ArrowShape, r462_VBE, r276_MangleName('Arrow-up-angle-bend-right'), r276_MangleUnicode(8625), r462_bendL, r276_arrowBot, r462_bendL, r276_arrowTop - r276_bendArrowHeadSize, r462_bendR, r276_arrowTop - r276_bendArrowHeadSize, r276_bendArrowHeadSize);
                        r276_MkAngleArrow(r276_ArrowShape, r462_VBS, r276_MangleName('Arrow-down-angle-bend-left'), r276_MangleUnicode(8626), r462_bendR, r276_arrowTop, r462_bendR, r276_arrowBot + r276_bendArrowHeadSize, r462_bendL, r276_arrowBot + r276_bendArrowHeadSize, r276_bendArrowHeadSize);
                        r276_MkAngleArrow(r276_ArrowShape, r462_VBS, r276_MangleName('Arrow-down-angle-bend-right'), r276_MangleUnicode(8627), r462_bendL, r276_arrowTop, r462_bendL, r276_arrowBot + r276_bendArrowHeadSize, r462_bendR, r276_arrowBot + r276_bendArrowHeadSize, r276_bendArrowHeadSize);
                        r276_MkAngleArrow(r276_ArrowShape, r462_HBE, r276_MangleName('Arrow-right-angle-bend-down'), r276_MangleUnicode(11022), r276_arrowSB, r270_SymbolMid, r276_arrowRSB - r276_bendArrowHeadSize, r270_SymbolMid, r276_arrowRSB - r276_bendArrowHeadSize, r462_bendB, r276_bendArrowHeadSize);
                        r276_MkAngleArrow(r276_ArrowShape, r462_HBE, r276_MangleName('Arrow-right-angle-bend-up'), r276_MangleUnicode(11023), r276_arrowSB, r270_SymbolMid, r276_arrowRSB - r276_bendArrowHeadSize, r270_SymbolMid, r276_arrowRSB - r276_bendArrowHeadSize, r462_bendT, r276_bendArrowHeadSize);
                        r276_MkAngleArrow(r276_ArrowShape, r462_HBS, r276_MangleName('Arrow-left-angle-bend-down'), r276_MangleUnicode(11024), r276_arrowRSB, r270_SymbolMid, r276_arrowSB + r276_bendArrowHeadSize, r270_SymbolMid, r276_arrowSB + r276_bendArrowHeadSize, r462_bendB, r276_bendArrowHeadSize);
                        r276_MkAngleArrow(r276_ArrowShape, r462_HBS, r276_MangleName('Arrow-left-angle-bend-up'), r276_MangleUnicode(11025), r276_arrowRSB, r270_SymbolMid, r276_arrowSB + r276_bendArrowHeadSize, r270_SymbolMid, r276_arrowSB + r276_bendArrowHeadSize, r462_bendT, r276_bendArrowHeadSize);
                        r276_MkAngleArrow(r276_ArrowShape, r462_HBE, r276_MangleName('Arrow-right-angle-down'), r276_MangleUnicode(8628), r276_arrowSB, r276_arrowTop, r276_arrowRSB - r276_arrowHeadSize, r276_arrowTop, r276_arrowRSB - r276_arrowHeadSize, r276_arrowBot, r276_arrowHeadSize);
                        return r276_MkAngleArrow(r276_ArrowShape, r462_VBS, r276_MangleName('Arrow-down-angle-left'), r276_MangleUnicode(8629), r276_arrowRSB, r276_arrowTop, r276_arrowRSB, r276_arrowBot + r276_arrowHeadSize, r276_arrowSB, r276_arrowBot + r276_arrowHeadSize, r276_arrowHeadSize);
                    }());
                    (function () {
                        r276_MkArrow(r276_HalfArrowShape(r276_RHSHalfArrowHead), r276_MangleName('arrowLeftHR'), r276_MangleUnicode(8636), r276_arrowRSB, r270_SymbolMid, r276_arrowSB, r270_SymbolMid);
                        r276_MkArrow(r276_HalfArrowShape(r276_LHSHalfArrowHead), r276_MangleName('arrowLeftHL'), r276_MangleUnicode(8637), r276_arrowRSB, r270_SymbolMid, r276_arrowSB, r270_SymbolMid);
                        r276_MkArrow(r276_HalfArrowShape(r276_RHSHalfArrowHead), r276_MangleName('arrowUpHR'), r276_MangleUnicode(8638), r276_arrowMidX, r276_arrowBot, r276_arrowMidX, r276_arrowTop);
                        r276_MkArrow(r276_HalfArrowShape(r276_LHSHalfArrowHead), r276_MangleName('arrowUpHL'), r276_MangleUnicode(8639), r276_arrowMidX, r276_arrowBot, r276_arrowMidX, r276_arrowTop);
                        r276_MkArrow(r276_HalfArrowShape(r276_LHSHalfArrowHead), r276_MangleName('arrowRightHL'), r276_MangleUnicode(8640), r276_arrowSB, r270_SymbolMid, r276_arrowRSB, r270_SymbolMid);
                        r276_MkArrow(r276_HalfArrowShape(r276_RHSHalfArrowHead), r276_MangleName('arrowRightHR'), r276_MangleUnicode(8641), r276_arrowSB, r270_SymbolMid, r276_arrowRSB, r270_SymbolMid);
                        r276_MkArrow(r276_HalfArrowShape(r276_LHSHalfArrowHead), r276_MangleName('arrowDownHL'), r276_MangleUnicode(8642), r276_arrowMidX, r276_arrowTop, r276_arrowMidX, r276_arrowBot);
                        return r276_MkArrow(r276_HalfArrowShape(r276_RHSHalfArrowHead), r276_MangleName('arrowDownHR'), r276_MangleUnicode(8643), r276_arrowMidX, r276_arrowTop, r276_arrowMidX, r276_arrowBot);
                    }());
                    (function () {
                        r276_DoubleArrow(r276_HalfArrowShape(r276_RHSHalfArrowHead), r276_MangleName('arrowLeftRightHR'), r276_MangleUnicode(10570), r276_arrowSB, r270_SymbolMid, r276_arrowRSB, r270_SymbolMid);
                        r276_DoubleArrow(r276_HalfArrowShape(r276_LHSHalfArrowHead), r276_MangleName('arrowLeftRightHL'), r276_MangleUnicode(10571), r276_arrowSB, r270_SymbolMid, r276_arrowRSB, r270_SymbolMid);
                        r276_DoubleArrow(r276_HalfArrowShape(r276_RHSHalfArrowHead), r276_MangleName('arrowUpDownHR'), r276_MangleUnicode(10572), r276_arrowMidX, r276_arrowTop, r276_arrowMidX, r276_arrowBot);
                        return r276_DoubleArrow(r276_HalfArrowShape(r276_LHSHalfArrowHead), r276_MangleName('arrowUpDownHL'), r276_MangleUnicode(10573), r276_arrowMidX, r276_arrowTop, r276_arrowMidX, r276_arrowBot);
                    }());
                    var r276_waveArrowAmplitude = (r270_Width - r270_SB) * r270_DesignParameters.arrow_size * (0.7 + 0.4 * r273_MosaicWidthScalar);
                    (function () {
                        var _r472_t0 = r270_xn$Capture$2Lrc8['Shared-Symbol-Shapes'].resolve();
                        var r472_CreateWaveShape = _r472_t0.CreateWaveShape;
                        var r472_WaveSw = r270_AdviceStroke(5.5 - r273_MosaicWidthScalar);
                        var r472_WaveShape = r472_CreateWaveShape(r276_waveArrowAmplitude * 0.4 + r472_WaveSw / 4 * r273_MosaicWidthScalar, r472_WaveSw);
                        var r472_rightTBias = r273_MosaicWidth / r276_MosaicUnitWidth - 1;
                        var r472_freeCoT = r276_arrowSB / r273_MosaicWidth;
                        var r472_connectedCoT = r276_arrowSB / r273_MosaicWidth + 9 / 32 * r273_MosaicWidthScalar;
                        var r472_mag = r276_arrowRSB - r276_arrowSB;
                        var r472_p = (r472_mag - r276_o - r276_halfArrowSw * 1.1) / r472_mag;
                        r270_xn$createAndSaveGlyphImpl$2Lrc3c(r276_MangleName('waveArrowLeftRight'), r276_MangleUnicode(8621), function () {
                            var _r476_t1;
                            var _r476_t0 = this;
                            var r476_currentGlyph = _r476_t0;
                            r476_currentGlyph.setWidth(r273_MosaicWidth);
                            r476_currentGlyph.include(r472_WaveShape(new r270_xn$NamedParameterPair$2Lrc9b('left', -r472_connectedCoT), new r270_xn$NamedParameterPair$2Lrc9b('right', r472_rightTBias - r472_connectedCoT), new r270_xn$NamedParameterPair$2Lrc9b('xsJoin', r1_mix(r276_arrowSB, r276_arrowRSB, 1 - r472_p)), new r270_xn$NamedParameterPair$2Lrc9b('xfJoin', r1_mix(r276_arrowSB, r276_arrowRSB, r472_p)), new r270_xn$NamedParameterPair$2Lrc9b('unitWidth', r276_MosaicUnitWidth), new r270_xn$NamedParameterPair$2Lrc9b('waveCount', 2 / r273_MosaicWidthScalar)));
                            r476_currentGlyph.include(r276_ArrowHead(r276_arrowSB, r270_SymbolMid, r276_arrowRSB, r270_SymbolMid));
                            r476_currentGlyph.include(r276_ArrowHead(r276_arrowRSB, r270_SymbolMid, r276_arrowSB, r270_SymbolMid));
                            return void 0;
                        });
                        r270_xn$createAndSaveGlyphImpl$2Lrc3c(r276_MangleName('waveArrowLeft'), r276_MangleUnicode(8604), function () {
                            var _r489_t1;
                            var _r489_t0 = this;
                            var r489_currentGlyph = _r489_t0;
                            r489_currentGlyph.setWidth(r273_MosaicWidth);
                            r489_currentGlyph.include(r472_WaveShape(new r270_xn$NamedParameterPair$2Lrc9b('left', -r472_connectedCoT), new r270_xn$NamedParameterPair$2Lrc9b('right', r472_rightTBias - r472_freeCoT), new r270_xn$NamedParameterPair$2Lrc9b('xsJoin', r1_mix(r276_arrowSB, r276_arrowRSB, 1 - r472_p)), new r270_xn$NamedParameterPair$2Lrc9b('unitWidth', r276_MosaicUnitWidth), new r270_xn$NamedParameterPair$2Lrc9b('waveCount', 2 / r273_MosaicWidthScalar)));
                            r489_currentGlyph.include(r276_ArrowHead(r276_arrowRSB, r270_SymbolMid, r276_arrowSB, r270_SymbolMid));
                            return void 0;
                        });
                        return r270_xn$createAndSaveGlyphImpl$2Lrc3c(r276_MangleName('waveArrowRight'), r276_MangleUnicode(8605), function () {
                            var _r500_t1;
                            var _r500_t0 = this;
                            var r500_currentGlyph = _r500_t0;
                            r500_currentGlyph.setWidth(r273_MosaicWidth);
                            r500_currentGlyph.include(r472_WaveShape(new r270_xn$NamedParameterPair$2Lrc9b('left', -r472_freeCoT), new r270_xn$NamedParameterPair$2Lrc9b('right', r472_rightTBias - r472_connectedCoT), new r270_xn$NamedParameterPair$2Lrc9b('xfJoin', r1_mix(r276_arrowSB, r276_arrowRSB, r472_p)), new r270_xn$NamedParameterPair$2Lrc9b('unitWidth', r276_MosaicUnitWidth), new r270_xn$NamedParameterPair$2Lrc9b('waveCount', 2 / r273_MosaicWidthScalar)));
                            r500_currentGlyph.include(r276_ArrowHead(r276_arrowSB, r270_SymbolMid, r276_arrowRSB, r270_SymbolMid));
                            return void 0;
                        });
                    }());
                    (function () {
                        var _r510_t0 = r270_xn$Capture$2Lrc8['Shared-Symbol-Shapes'].resolve();
                        var r510_CreateWaveShape = _r510_t0.CreateWaveShape;
                        var r510_WaveSw = r270_AdviceStroke(5.5 - r273_MosaicWidthScalar);
                        var r510_SquiggleArrowBarSide = function (r512_kMag1, r512_kMag2, r512_kL, r512_kR, r512_y0) {
                            var _r512_t2, _r512_t3;
                            var r512_mag = r276_arrowRSB - r276_arrowSB;
                            var r512_p = (r512_mag - r276_o - r276_halfArrowSw * 1.1) / r512_mag;
                            var r512_p2 = 0.75;
                            var r512_p2L = r1_mix(1, r512_p2, r1_mix(1, r512_kL, 1 / 2));
                            var r512_p2R = r1_mix(1, r512_p2, r1_mix(1, r512_kR, 1 / 2));
                            var r512_innerStops = 3 * r273_MosaicWidthScalar;
                            var r512_knots = [];
                            r512_knots.push(r270_corner(r1_mix(r276_arrowSB, r276_arrowRSB, r1_mix(0, 1 - r512_p, r512_kL)), r512_y0));
                            r512_knots.push(r270_corner(r1_mix(r276_arrowSB, r276_arrowRSB, 1 - r512_p2L), r512_y0));
                            var _r512_t0 = 0;
                            var _r512_t1 = r512_innerStops;
                            var r512_j = _r512_t0;
                            while (r512_j < _r512_t1) {
                                r512_knots.push(r270_corner(r1_mix(r276_arrowSB, r276_arrowRSB, r1_mix(1 - r512_p2L, r512_p2R, (r512_j + 1 / 2) / r512_innerStops)), r512_y0 + r276_waveArrowAmplitude * (r512_j % 2 ? r512_kMag1 : r512_kMag2)));
                                r512_j = r512_j + 1;
                            }
                            r512_knots.push(r270_corner(r1_mix(r276_arrowSB, r276_arrowRSB, r512_p2R), r512_y0));
                            r512_knots.push(r270_corner(r1_mix(r276_arrowSB, r276_arrowRSB, r1_mix(1, r512_p, r512_kR)), r512_y0));
                            return r512_knots;
                        };
                        var r510_SquiggleArrowBar = function (r514_kL, r514_kR) {
                            var _r514_t0, _r514_t1;
                            return r270_xn$spirooutline$1aao(r510_SquiggleArrowBarSide(0.3, -0.25, r514_kL, r514_kR, r270_SymbolMid + r276_arrowSw / 2), r510_SquiggleArrowBarSide(0.25, -0.3, r514_kL, r514_kR, r270_SymbolMid - r276_arrowSw / 2).reverse());
                        };
                        r270_xn$createAndSaveGlyphImpl$2Lrc3c(r276_MangleName('squiggleArrowLeft'), r276_MangleUnicode(8668), function () {
                            var _r517_t1;
                            var _r517_t0 = this;
                            var r517_currentGlyph = _r517_t0;
                            r517_currentGlyph.setWidth(r273_MosaicWidth);
                            r517_currentGlyph.include(r510_SquiggleArrowBar(1, 0));
                            r517_currentGlyph.include(r276_ArrowHead(r276_arrowRSB, r270_SymbolMid, r276_arrowSB, r270_SymbolMid));
                            return void 0;
                        });
                        return r270_xn$createAndSaveGlyphImpl$2Lrc3c(r276_MangleName('squiggleArrowRight'), r276_MangleUnicode(8669), function () {
                            var _r523_t1;
                            var _r523_t0 = this;
                            var r523_currentGlyph = _r523_t0;
                            r523_currentGlyph.setWidth(r273_MosaicWidth);
                            r523_currentGlyph.include(r510_SquiggleArrowBar(0, 1));
                            r523_currentGlyph.include(r276_ArrowHead(r276_arrowSB, r270_SymbolMid, r276_arrowRSB, r270_SymbolMid));
                            return void 0;
                        });
                    }());
                    (function () {
                        r276_MkArrow(r276_ThickArrowShape('white'), r276_MangleName('uni21E6'), r276_MangleUnicode(8678), r276_arrowRSB, r270_SymbolMid, r276_arrowSB, r270_SymbolMid);
                        r276_MkArrow(r276_ThickArrowShape('white'), r276_MangleName('uni21E7'), r276_MangleUnicode(8679), r276_arrowMidX, r276_arrowBot, r276_arrowMidX, r276_arrowTop);
                        r276_MkArrow(r276_ThickArrowShape('white'), r276_MangleName('uni21E8'), r276_MangleUnicode(8680), r276_arrowSB, r270_SymbolMid, r276_arrowRSB, r270_SymbolMid);
                        r276_MkArrow(r276_ThickArrowShape('white'), r276_MangleName('uni21E9'), r276_MangleUnicode(8681), r276_arrowMidX, r276_arrowTop, r276_arrowMidX, r276_arrowBot);
                        r276_MkArrow(r276_ThickArrowShape('white'), r276_MangleName('uni2B00'), r276_MangleUnicode(11008), r276_arrowDiagSB, r276_arrowDiagBot, r276_arrowDiagRSB, r276_arrowDiagTop);
                        r276_MkArrow(r276_ThickArrowShape('white'), r276_MangleName('uni2B01'), r276_MangleUnicode(11009), r276_arrowDiagRSB, r276_arrowDiagBot, r276_arrowDiagSB, r276_arrowDiagTop);
                        r276_MkArrow(r276_ThickArrowShape('white'), r276_MangleName('uni2B02'), r276_MangleUnicode(11010), r276_arrowDiagSB, r276_arrowDiagTop, r276_arrowDiagRSB, r276_arrowDiagBot);
                        r276_MkArrow(r276_ThickArrowShape('white'), r276_MangleName('uni2B03'), r276_MangleUnicode(11011), r276_arrowDiagRSB, r276_arrowDiagTop, r276_arrowDiagSB, r276_arrowDiagBot);
                        r276_DoubleArrow(r276_ThickArrowShape('white-open'), r276_MangleName('uni2B04'), r276_MangleUnicode(11012), r276_arrowSB, r270_SymbolMid, r276_arrowRSB, r270_SymbolMid);
                        r276_DoubleArrow(r276_ThickArrowShape('white-open'), r276_MangleName('uni21F3'), r276_MangleUnicode(8691), r276_arrowMidX, r276_arrowBot, r276_arrowMidX, r276_arrowTop);
                        r276_MkArrow(r276_ThickArrowShape('black'), r276_MangleName('uni2B05'), r276_MangleUnicode(11013), r276_arrowRSB, r270_SymbolMid, r276_arrowSB, r270_SymbolMid);
                        r276_MkArrow(r276_ThickArrowShape('black'), r276_MangleName('uni2B06'), r276_MangleUnicode(11014), r276_arrowMidX, r276_arrowBot, r276_arrowMidX, r276_arrowTop);
                        r276_MkArrow(r276_ThickArrowShape('black'), r276_MangleName('uni27A1'), r276_MangleUnicode(10145), r276_arrowSB, r270_SymbolMid, r276_arrowRSB, r270_SymbolMid);
                        r276_MkArrow(r276_ThickArrowShape('black'), r276_MangleName('uni2B95'), r276_MangleUnicode(11157), r276_arrowSB, r270_SymbolMid, r276_arrowRSB, r270_SymbolMid);
                        r276_MkArrow(r276_ThickArrowShape('black'), r276_MangleName('uni2B07'), r276_MangleUnicode(11015), r276_arrowMidX, r276_arrowTop, r276_arrowMidX, r276_arrowBot);
                        r276_MkArrow(r276_ThickArrowShape('black'), r276_MangleName('uni2B08'), r276_MangleUnicode(11016), r276_arrowDiagSB, r276_arrowDiagBot, r276_arrowDiagRSB, r276_arrowDiagTop);
                        r276_MkArrow(r276_ThickArrowShape('black'), r276_MangleName('uni2B09'), r276_MangleUnicode(11017), r276_arrowDiagRSB, r276_arrowDiagBot, r276_arrowDiagSB, r276_arrowDiagTop);
                        r276_MkArrow(r276_ThickArrowShape('black'), r276_MangleName('uni2B0A'), r276_MangleUnicode(11018), r276_arrowDiagSB, r276_arrowDiagTop, r276_arrowDiagRSB, r276_arrowDiagBot);
                        r276_MkArrow(r276_ThickArrowShape('black'), r276_MangleName('uni2B0B'), r276_MangleUnicode(11019), r276_arrowDiagRSB, r276_arrowDiagTop, r276_arrowDiagSB, r276_arrowDiagBot);
                        r276_DoubleArrow(r276_ThickArrowShape('black'), r276_MangleName('uni2B0C'), r276_MangleUnicode(11020), r276_arrowSB, r270_SymbolMid, r276_arrowRSB, r270_SymbolMid);
                        r276_DoubleArrow(r276_ThickArrowShape('black'), r276_MangleName('uni2B0D'), r276_MangleUnicode(11021), r276_arrowMidX, r276_arrowBot, r276_arrowMidX, r276_arrowTop);
                        r276_MkArrow(r276_ThickArrowShape('blackSemiHookL'), r276_MangleName('uni27A5'), r276_MangleUnicode(10149), r276_arrowSB, r270_SymbolMid, r276_arrowRSB, r270_SymbolMid);
                        return r276_MkArrow(r276_ThickArrowShape('blackSemiHookR'), r276_MangleName('uni27A6'), r276_MangleUnicode(10150), r276_arrowSB, r270_SymbolMid, r276_arrowRSB, r270_SymbolMid);
                    }());
                    (function () {
                        var r530_BarbHeavyWideHeaded = r276_BarbArrowShape(0.25, r276_UnicodeWeightGrade(9, r273_MosaicWidthScalar));
                        r276_MkArrow(r530_BarbHeavyWideHeaded, r276_MangleName('uni2794'), r276_MangleUnicode(10132), r276_arrowSB, r270_SymbolMid, r276_arrowRSB, r270_SymbolMid);
                        var r530_BarbGroup = function (r531_prefix, r531_b, r531_k, r531_w) {
                            var _r531_t0, _r531_t1;
                            var r531_BarbLight = r276_BarbArrowShape(r531_k, r276_UnicodeWeightGrade(r531_w, r273_MosaicWidthScalar));
                            r276_MkArrow(r531_BarbLight, r276_MangleName('' + r531_prefix + 'Left'), r276_MangleUnicode(r531_b + 0), r276_arrowRSB, r270_SymbolMid, r276_arrowSB, r270_SymbolMid);
                            r276_MkArrow(r531_BarbLight, r276_MangleName('' + r531_prefix + 'Up'), r276_MangleUnicode(r531_b + 1), r276_arrowMidX, r276_arrowBot, r276_arrowMidX, r276_arrowTop);
                            r276_MkArrow(r531_BarbLight, r276_MangleName('' + r531_prefix + 'Right'), r276_MangleUnicode(r531_b + 2), r276_arrowSB, r270_SymbolMid, r276_arrowRSB, r270_SymbolMid);
                            r276_MkArrow(r531_BarbLight, r276_MangleName('' + r531_prefix + 'Down'), r276_MangleUnicode(r531_b + 3), r276_arrowMidX, r276_arrowTop, r276_arrowMidX, r276_arrowBot);
                            r276_MkArrow(r531_BarbLight, r276_MangleName('' + r531_prefix + 'LT'), r276_MangleUnicode(r531_b + 4), r276_arrowDiagRSB, r276_arrowDiagBot, r276_arrowDiagSB, r276_arrowDiagTop);
                            r276_MkArrow(r531_BarbLight, r276_MangleName('' + r531_prefix + 'RT'), r276_MangleUnicode(r531_b + 5), r276_arrowDiagSB, r276_arrowDiagBot, r276_arrowDiagRSB, r276_arrowDiagTop);
                            r276_MkArrow(r531_BarbLight, r276_MangleName('' + r531_prefix + 'RB'), r276_MangleUnicode(r531_b + 6), r276_arrowDiagSB, r276_arrowDiagTop, r276_arrowDiagRSB, r276_arrowDiagBot);
                            return r276_MkArrow(r531_BarbLight, r276_MangleName('' + r531_prefix + 'LB'), r276_MangleUnicode(r531_b + 7), r276_arrowDiagRSB, r276_arrowDiagTop, r276_arrowDiagSB, r276_arrowDiagBot);
                        };
                        r530_BarbGroup('barbArrowLight', 129120, 0.375, 3);
                        r530_BarbGroup('barbArrow', 129128, 0.375, 5);
                        r530_BarbGroup('barbArrowMedium', 129136, 0.375, 7);
                        r530_BarbGroup('barbArrowHeavy', 129144, 0.375, 9);
                        return r530_BarbGroup('barbArrowVeryHeavy', 129152, 0.375, 10);
                    }());
                    (function () {
                        var r533_sw = r276_UnicodeWeightGrade(9, r273_MosaicWidthScalar);
                        return r276_MkArrow(r276_RoundArrow.Shape(r533_sw), r276_MangleName('heavyRoundArrowRight'), r276_MangleUnicode(10140), r276_arrowSB, r270_SymbolMid, r276_arrowRSB, r270_SymbolMid);
                    }());
                    (function () {
                        r276_MkArrow(r276_SsArrowShape, r276_MangleName('sansSerifArrowLeft'), r276_MangleUnicode(129104), r276_arrowRSB, r270_SymbolMid, r276_arrowSB, r270_SymbolMid);
                        r276_MkArrow(r276_SsArrowShape, r276_MangleName('sansSerifArrowUp'), r276_MangleUnicode(129105), r276_arrowMidX, r276_arrowBot, r276_arrowMidX, r276_arrowTop);
                        r276_MkArrow(r276_SsArrowShape, r276_MangleName('sansSerifArrowRight'), r276_MangleUnicode(129106), r276_arrowSB, r270_SymbolMid, r276_arrowRSB, r270_SymbolMid);
                        r276_MkArrow(r276_SsArrowShape, r276_MangleName('sansSerifArrowDown'), r276_MangleUnicode(129107), r276_arrowMidX, r276_arrowTop, r276_arrowMidX, r276_arrowBot);
                        r276_MkArrow(r276_SsArrowShape, r276_MangleName('sansSerifArrowUpLeft'), r276_MangleUnicode(129108), r276_arrowDiagRSB, r276_arrowDiagBot, r276_arrowDiagSB, r276_arrowDiagTop);
                        r276_MkArrow(r276_SsArrowShape, r276_MangleName('sansSerifArrowUpRight'), r276_MangleUnicode(129109), r276_arrowDiagSB, r276_arrowDiagBot, r276_arrowDiagRSB, r276_arrowDiagTop);
                        r276_MkArrow(r276_SsArrowShape, r276_MangleName('sansSerifArrowDownRight'), r276_MangleUnicode(129110), r276_arrowDiagSB, r276_arrowDiagTop, r276_arrowDiagRSB, r276_arrowDiagBot);
                        r276_MkArrow(r276_SsArrowShape, r276_MangleName('sansSerifArrowDownLeft'), r276_MangleUnicode(129111), r276_arrowDiagRSB, r276_arrowDiagTop, r276_arrowDiagSB, r276_arrowDiagBot);
                        r276_DoubleArrow(r276_SsArrowShape, r276_MangleName('sansSerifArrowLeftRight'), r276_MangleUnicode(129112), r276_arrowSB, r270_SymbolMid, r276_arrowRSB, r270_SymbolMid);
                        return r276_DoubleArrow(r276_SsArrowShape, r276_MangleName('sansSerifArrowUpDown'), r276_MangleUnicode(129113), r276_arrowMidX, r276_arrowTop, r276_arrowMidX, r276_arrowBot);
                    }());
                    (function () {
                        var r537_dasw = r276_doubleArrowStemWidth;
                        r276_MkArrow(r276_DoubleArrowShape(r537_dasw), r276_MangleName('dblArrowLeft'), r276_MangleUnicode(8656), r276_arrowRSB, r270_SymbolMid, r276_arrowSB, r270_SymbolMid);
                        r276_MkArrow(r276_DoubleArrowShape(r537_dasw), r276_MangleName('dblArrowRight'), r276_MangleUnicode(8658), r276_arrowSB, r270_SymbolMid, r276_arrowRSB, r270_SymbolMid);
                        r276_MkArrow(r276_DoubleArrowShape(r537_dasw), r276_MangleName('dblArrowUp'), r276_MangleUnicode(8657), r276_arrowMidX, r276_arrowBot, r276_arrowMidX, r276_arrowTop);
                        r276_MkArrow(r276_DoubleArrowShape(r537_dasw), r276_MangleName('dblArrowDown'), r276_MangleUnicode(8659), r276_arrowMidX, r276_arrowTop, r276_arrowMidX, r276_arrowBot);
                        r276_MkArrow(r276_DoubleArrowShape(r537_dasw), r276_MangleName('dblArrowUpLeft'), r276_MangleUnicode(8662), r276_arrowDiagRSB, r276_arrowDiagBot, r276_arrowDiagSB, r276_arrowDiagTop);
                        r276_MkArrow(r276_DoubleArrowShape(r537_dasw), r276_MangleName('dblArrowUpRight'), r276_MangleUnicode(8663), r276_arrowDiagSB, r276_arrowDiagBot, r276_arrowDiagRSB, r276_arrowDiagTop);
                        r276_MkArrow(r276_DoubleArrowShape(r537_dasw), r276_MangleName('dblArrowDownRight'), r276_MangleUnicode(8664), r276_arrowDiagSB, r276_arrowDiagTop, r276_arrowDiagRSB, r276_arrowDiagBot);
                        return r276_MkArrow(r276_DoubleArrowShape(r537_dasw), r276_MangleName('dblArrowDownLeft'), r276_MangleUnicode(8665), r276_arrowDiagRSB, r276_arrowDiagTop, r276_arrowDiagSB, r276_arrowDiagBot);
                    }());
                    (function () {
                        var r539_dasw = r276_doubleArrowStemWidth;
                        r276_MkArrow(r276_TripleArrowShape(r539_dasw), r276_MangleName('tripleArrowLeft'), r276_MangleUnicode(8666), r276_arrowRSB, r270_SymbolMid, r276_arrowSB, r270_SymbolMid);
                        r276_MkArrow(r276_TripleArrowShape(r539_dasw), r276_MangleName('tripleArrowRight'), r276_MangleUnicode(8667), r276_arrowSB, r270_SymbolMid, r276_arrowRSB, r270_SymbolMid);
                        r276_MkArrow(r276_TripleArrowShape(r539_dasw), r276_MangleName('tripleArrowUp'), r276_MangleUnicode(10506), r276_arrowMidX, r276_arrowBot, r276_arrowMidX, r276_arrowTop);
                        return r276_MkArrow(r276_TripleArrowShape(r539_dasw), r276_MangleName('tripleArrowDown'), r276_MangleUnicode(10507), r276_arrowMidX, r276_arrowTop, r276_arrowMidX, r276_arrowBot);
                    }());
                    (function () {
                        var r541_dasw = r276_doubleArrowStemWidth;
                        r276_MkArrow(r276_QuadrupleArrowShape(r541_dasw), r276_MangleName('quadrupleArrowUp'), r276_MangleUnicode(10224), r276_arrowMidX, r276_arrowBot, r276_arrowMidX, r276_arrowTop);
                        r276_MkArrow(r276_QuadrupleArrowShape(r541_dasw), r276_MangleName('quadrupleArrowDown'), r276_MangleUnicode(10225), r276_arrowMidX, r276_arrowTop, r276_arrowMidX, r276_arrowBot);
                        r276_MkArrow(r276_QuadrupleArrowShape(r541_dasw), r276_MangleName('quadrupleArrowLeft'), r276_MangleUnicode(11077), r276_arrowRSB, r270_SymbolMid, r276_arrowSB, r270_SymbolMid);
                        return r276_MkArrow(r276_QuadrupleArrowShape(r541_dasw), r276_MangleName('quadrupleArrowRight'), r276_MangleUnicode(11078), r276_arrowSB, r270_SymbolMid, r276_arrowRSB, r270_SymbolMid);
                    }());
                    (function () {
                        var _r543_t0, _r543_t1, _r543_tag2;
                        r276_MkArrow(r276_ArrowShape, r276_MangleName('arrowLeftK'), null, r276_arrowRSB, r270_SymbolMid, r276_arrowSB + r276_fine, r270_SymbolMid);
                        r276_MkArrow(r276_ArrowShape, r276_MangleName('arrowRightK'), null, r276_arrowSB, r270_SymbolMid, r276_arrowRSB - r276_fine, r270_SymbolMid);
                        r276_MkArrow(r276_ArrowShape, r276_MangleName('arrowUpK'), null, r276_arrowMidX, r276_arrowBot, r276_arrowMidX, r276_arrowTop - r276_fine);
                        r276_MkArrow(r276_ArrowShape, r276_MangleName('arrowDownK'), null, r276_arrowMidX, r276_arrowTop, r276_arrowMidX, r276_arrowBot + r276_fine);
                        r276_MkArrow(r276_ArrowShape, r276_MangleName('arrowLeftSK'), null, r276_arrowRSB - r276_fine / 2, r270_SymbolMid, r276_arrowSB, r270_SymbolMid);
                        r276_MkArrow(r276_ArrowShape, r276_MangleName('arrowRightSK'), null, r276_arrowSB + r276_fine / 2, r270_SymbolMid, r276_arrowRSB, r270_SymbolMid);
                        r276_MkArrow(r276_ArrowShape, r276_MangleName('arrowUpSK'), null, r276_arrowMidX, r276_arrowBot + r276_fine / 2, r276_arrowMidX, r276_arrowTop);
                        r276_MkArrow(r276_ArrowShape, r276_MangleName('arrowDownSK'), null, r276_arrowMidX, r276_arrowTop - r276_fine / 2, r276_arrowMidX, r276_arrowBot);
                        r276_MkArrow(r276_ArrowShape, r276_MangleName('arrowUpLeftTK'), null, r276_arrowRSB, r276_arrowBot, r276_arrowSB, r276_arrowTop - Math.max(r276_arrowWidth / 8, r276_fine * 1.5));
                        r270_xn$createAndSaveGlyphImpl$2Lrc3c(r276_MangleName('arrowBarLeft'), r276_MangleUnicode(8676), function () {
                            var _r546_t1;
                            var _r546_t0 = this;
                            var r546_currentGlyph = _r546_t0;
                            r546_currentGlyph.include(r276_xn$referglyph$1aao(r276_MangleName('arrowLeftK')), true, true);
                            r546_currentGlyph.include(r276_VBar.m(r276_arrowSB, r270_SymbolMid - r276_arrowHeadSize, r270_SymbolMid + r276_arrowHeadSize, r276_fine));
                            return void 0;
                        });
                        r270_xn$createAndSaveGlyphImpl$2Lrc3c(r276_MangleName('arrowBarRight'), r276_MangleUnicode(8677), function () {
                            var _r551_t1;
                            var _r551_t0 = this;
                            var r551_currentGlyph = _r551_t0;
                            r551_currentGlyph.include(r276_xn$referglyph$1aao(r276_MangleName('arrowRightK')), true, true);
                            r551_currentGlyph.include(r276_VBar.m(r276_arrowRSB, r270_SymbolMid - r276_arrowHeadSize, r270_SymbolMid + r276_arrowHeadSize, r276_fine));
                            return void 0;
                        });
                        r270_xn$createAndSaveGlyphImpl$2Lrc3c(r276_MangleName('arrowBarUp'), r276_MangleUnicode(10514), function () {
                            var _r556_t1;
                            var _r556_t0 = this;
                            var r556_currentGlyph = _r556_t0;
                            r556_currentGlyph.include(r276_xn$referglyph$1aao(r276_MangleName('arrowUpK')), true, true);
                            r556_currentGlyph.include(r276_HBar.m(r276_arrowMidX - r276_arrowHeadSize, r276_arrowMidX + r276_arrowHeadSize, r276_arrowTop, r276_fine));
                            return void 0;
                        });
                        r270_xn$createAndSaveGlyphImpl$2Lrc3c(r276_MangleName('arrowBarDown'), r276_MangleUnicode(10515), function () {
                            var _r561_t1;
                            var _r561_t0 = this;
                            var r561_currentGlyph = _r561_t0;
                            r561_currentGlyph.include(r276_xn$referglyph$1aao(r276_MangleName('arrowDownK')), true, true);
                            r561_currentGlyph.include(r276_HBar.m(r276_arrowMidX - r276_arrowHeadSize, r276_arrowMidX + r276_arrowHeadSize, r276_arrowBot, r276_fine));
                            return void 0;
                        });
                        r270_xn$createAndSaveGlyphImpl$2Lrc3c(r276_MangleName('barArrowLeft'), r276_MangleUnicode(8612), function () {
                            var _r566_t1;
                            var _r566_t0 = this;
                            var r566_currentGlyph = _r566_t0;
                            r566_currentGlyph.include(r276_xn$referglyph$1aao(r276_MangleName('arrowLeftSK')), true, true);
                            r566_currentGlyph.include(r276_VBar.m(r276_arrowRSB, r270_SymbolMid - r276_arrowHeadSize, r270_SymbolMid + r276_arrowHeadSize, r276_fine));
                            return void 0;
                        });
                        r270_xn$createAndSaveGlyphImpl$2Lrc3c(r276_MangleName('barArrowRight'), r276_MangleUnicode(8614), function () {
                            var _r571_t1;
                            var _r571_t0 = this;
                            var r571_currentGlyph = _r571_t0;
                            r571_currentGlyph.include(r276_xn$referglyph$1aao(r276_MangleName('arrowRightSK')), true, true);
                            r571_currentGlyph.include(r276_VBar.m(r276_arrowSB, r270_SymbolMid - r276_arrowHeadSize, r270_SymbolMid + r276_arrowHeadSize, r276_fine));
                            return void 0;
                        });
                        r270_xn$createAndSaveGlyphImpl$2Lrc3c(r276_MangleName('barArrowUp'), r276_MangleUnicode(8613), function () {
                            var _r576_t1;
                            var _r576_t0 = this;
                            var r576_currentGlyph = _r576_t0;
                            r576_currentGlyph.include(r276_xn$referglyph$1aao(r276_MangleName('arrowUpSK')), true, true);
                            r576_currentGlyph.include(r276_HBar.m(r276_arrowMidX - r276_arrowHeadSize, r276_arrowMidX + r276_arrowHeadSize, r276_arrowBot, r276_fine));
                            return void 0;
                        });
                        r270_xn$createAndSaveGlyphImpl$2Lrc3c(r276_MangleName('barArrowDown'), r276_MangleUnicode(8615), function () {
                            var _r581_t1;
                            var _r581_t0 = this;
                            var r581_currentGlyph = _r581_t0;
                            r581_currentGlyph.include(r276_xn$referglyph$1aao(r276_MangleName('arrowDownSK')), true, true);
                            r581_currentGlyph.include(r276_HBar.m(r276_arrowMidX - r276_arrowHeadSize, r276_arrowMidX + r276_arrowHeadSize, r276_arrowTop, r276_fine));
                            return void 0;
                        });
                        if (r273_MosaicWidthScalar > 1 && !r270_para.forceMonospace)
                            _r543_t0 = function () {
                                var r585_l = r1_mix(0, r276_arrowSB, r276_kLongArrowSB);
                                var r585_r = r1_mix(r273_MosaicWidth, r276_arrowRSB, r276_kLongArrowSB);
                                r276_MkArrow(r276_ArrowShape, 'longArrowLeftSK', null, r585_r - r276_fine / 2, r270_SymbolMid, r585_l, r270_SymbolMid);
                                r276_MkArrow(r276_ArrowShape, 'longArrowRightSK', null, r585_l + r276_fine / 2, r270_SymbolMid, r585_r, r270_SymbolMid);
                                r270_xn$createAndSaveGlyphImpl$2Lrc3c('longBarArrowLeft', 10235, function () {
                                    var _r588_t1;
                                    var _r588_t0 = this;
                                    var r588_currentGlyph = _r588_t0;
                                    r588_currentGlyph.include(r276_xn$referglyph$1aao('longArrowLeftSK'), true, true);
                                    r588_currentGlyph.include(r276_VBar.m(r585_r, r270_SymbolMid - r276_arrowHeadSize, r270_SymbolMid + r276_arrowHeadSize, r276_fine));
                                    return void 0;
                                });
                                return r270_xn$createAndSaveGlyphImpl$2Lrc3c('longBarArrowRight', 10236, function () {
                                    var _r593_t1;
                                    var _r593_t0 = this;
                                    var r593_currentGlyph = _r593_t0;
                                    r593_currentGlyph.include(r276_xn$referglyph$1aao('longArrowRightSK'), true, true);
                                    r593_currentGlyph.include(r276_VBar.m(r585_l, r270_SymbolMid - r276_arrowHeadSize, r270_SymbolMid + r276_arrowHeadSize, r276_fine));
                                    return void 0;
                                });
                            }();
                        return _r543_t0;
                    }());
                    (function () {
                        r276_DoubleArrow(r276_ArrowShape, r276_MangleName('arrowLeftRight'), r276_MangleUnicode(8596), r276_arrowSB, r270_SymbolMid, r276_arrowRSB, r270_SymbolMid);
                        r276_DoubleArrow(r276_ArrowShape, r276_MangleName('arrowUpDown'), r276_MangleUnicode(8597), r276_arrowMidX, r276_arrowTop, r276_arrowMidX, r276_arrowBot);
                        r276_DoubleArrow(r276_ArrowShape, r276_MangleName('arrowUpDown.bottomSpaceLeft'), void 0, r276_arrowMidX, r276_arrowTop, r276_arrowMidX, r276_arrowBot + r276_arrowSw * 1.5);
                        r276_DoubleArrow(r276_ArrowShape, r276_MangleName('arrowUpLeftAndDownRight'), r276_MangleUnicode(10529), r276_arrowDiagSB, r276_arrowDiagTop, r276_arrowDiagRSB, r276_arrowDiagBot);
                        r276_DoubleArrow(r276_ArrowShape, r276_MangleName('arrowUpRightAndDownLeft'), r276_MangleUnicode(10530), r276_arrowDiagRSB, r276_arrowDiagTop, r276_arrowDiagSB, r276_arrowDiagBot);
                        return r270_xn$createAndSaveGlyphImpl$2Lrc3c(r276_MangleName('arrowUpDownBar'), r276_MangleUnicode(8616), function () {
                            var _r600_t1;
                            var _r600_t0 = this;
                            var r600_currentGlyph = _r600_t0;
                            r600_currentGlyph.include(r276_xn$referglyph$1aao(r276_MangleName('arrowUpDown.bottomSpaceLeft')), true, true);
                            r600_currentGlyph.include(r276_HBar.b(r276_arrowSB, r276_arrowRSB, r276_arrowBot, r276_arrowSw));
                            return void 0;
                        });
                    }());
                    (function () {
                        var r604_dasw = r276_doubleArrowStemWidth;
                        r276_DoubleArrow(r276_DoubleArrowShape(r604_dasw), r276_MangleName('dblArrowLeftRight'), r276_MangleUnicode(8660), r276_arrowSB, r270_SymbolMid, r276_arrowRSB, r270_SymbolMid);
                        return r276_DoubleArrow(r276_DoubleArrowShape(r604_dasw), r276_MangleName('dblArrowUpDown'), r276_MangleUnicode(8661), r276_arrowMidX, r276_arrowTop, r276_arrowMidX, r276_arrowBot);
                    }());
                    (function () {
                        r276_MkArrow(r276_dhArrowShape, r276_MangleName('dhArrowLeft'), r276_MangleUnicode(8606), r276_arrowRSB, r270_SymbolMid, r276_arrowSB, r270_SymbolMid);
                        r276_MkArrow(r276_dhArrowShape, r276_MangleName('dhArrowRight'), r276_MangleUnicode(8608), r276_arrowSB, r270_SymbolMid, r276_arrowRSB, r270_SymbolMid);
                        r276_MkArrow(r276_dhArrowShape, r276_MangleName('dhArrowUp'), r276_MangleUnicode(8607), r276_arrowMidX, r276_arrowBot, r276_arrowMidX, r276_arrowTop);
                        return r276_MkArrow(r276_dhArrowShape, r276_MangleName('dhArrowDown'), r276_MangleUnicode(8609), r276_arrowMidX, r276_arrowTop, r276_arrowMidX, r276_arrowBot);
                    }());
                    (function () {
                        r276_MkArrow(r276_htArrowShape, r276_MangleName('htArrowLeft'), r276_MangleUnicode(8610), r276_arrowRSB, r270_SymbolMid, r276_arrowSB, r270_SymbolMid);
                        return r276_MkArrow(r276_htArrowShape, r276_MangleName('htArrowRight'), r276_MangleUnicode(8611), r276_arrowSB, r270_SymbolMid, r276_arrowRSB, r270_SymbolMid);
                    }());
                    (function () {
                        r270_xn$createAndSaveGlyphImpl$2Lrc3c(r276_MangleName('uni219A'), r276_MangleUnicode(8602), function () {
                            var _r613_t1;
                            var _r613_t0 = this;
                            var r613_currentGlyph = _r613_t0;
                            r613_currentGlyph.include(r276_xn$referglyph$1aao(r276_MangleName('arrowLeft')), true, true);
                            r613_currentGlyph.include(r276_xn$referglyph$1aao('arrSlashOver'));
                            return void 0;
                        });
                        r270_xn$createAndSaveGlyphImpl$2Lrc3c(r276_MangleName('uni219B'), r276_MangleUnicode(8603), function () {
                            var _r618_t1;
                            var _r618_t0 = this;
                            var r618_currentGlyph = _r618_t0;
                            r618_currentGlyph.include(r276_xn$referglyph$1aao(r276_MangleName('arrowRight')), true, true);
                            r618_currentGlyph.include(r276_xn$referglyph$1aao('arrSlashOver'));
                            return void 0;
                        });
                        r270_xn$createAndSaveGlyphImpl$2Lrc3c(r276_MangleName('uni21AE'), r276_MangleUnicode(8622), function () {
                            var _r623_t1;
                            var _r623_t0 = this;
                            var r623_currentGlyph = _r623_t0;
                            r623_currentGlyph.include(r276_xn$referglyph$1aao(r276_MangleName('arrowLeftRight')), true, true);
                            r623_currentGlyph.include(r276_xn$referglyph$1aao('arrSlashOver'));
                            return void 0;
                        });
                        r270_xn$createAndSaveGlyphImpl$2Lrc3c(r276_MangleName('uni21F7'), r276_MangleUnicode(8695), function () {
                            var _r628_t1;
                            var _r628_t0 = this;
                            var r628_currentGlyph = _r628_t0;
                            r628_currentGlyph.include(r276_xn$referglyph$1aao(r276_MangleName('arrowLeft')), true, true);
                            r628_currentGlyph.include(r276_xn$referglyph$1aao('arrVStrokeOver'));
                            return void 0;
                        });
                        r270_xn$createAndSaveGlyphImpl$2Lrc3c(r276_MangleName('uni21F8'), r276_MangleUnicode(8696), function () {
                            var _r633_t1;
                            var _r633_t0 = this;
                            var r633_currentGlyph = _r633_t0;
                            r633_currentGlyph.include(r276_xn$referglyph$1aao(r276_MangleName('arrowRight')), true, true);
                            r633_currentGlyph.include(r276_xn$referglyph$1aao('arrVStrokeOver'));
                            return void 0;
                        });
                        r270_xn$createAndSaveGlyphImpl$2Lrc3c(r276_MangleName('uni21F9'), r276_MangleUnicode(8697), function () {
                            var _r638_t1;
                            var _r638_t0 = this;
                            var r638_currentGlyph = _r638_t0;
                            r638_currentGlyph.include(r276_xn$referglyph$1aao(r276_MangleName('arrowLeftRight')), true, true);
                            r638_currentGlyph.include(r276_xn$referglyph$1aao('arrVStrokeOver'));
                            return void 0;
                        });
                        r270_xn$createAndSaveGlyphImpl$2Lrc3c(r276_MangleName('uni21FA'), r276_MangleUnicode(8698), function () {
                            var _r643_t1;
                            var _r643_t0 = this;
                            var r643_currentGlyph = _r643_t0;
                            r643_currentGlyph.include(r276_xn$referglyph$1aao(r276_MangleName('arrowLeft')), true, true);
                            r643_currentGlyph.include(r276_xn$referglyph$1aao('arrDblVStrokeOver'));
                            return void 0;
                        });
                        r270_xn$createAndSaveGlyphImpl$2Lrc3c(r276_MangleName('uni21FB'), r276_MangleUnicode(8699), function () {
                            var _r648_t1;
                            var _r648_t0 = this;
                            var r648_currentGlyph = _r648_t0;
                            r648_currentGlyph.include(r276_xn$referglyph$1aao(r276_MangleName('arrowRight')), true, true);
                            r648_currentGlyph.include(r276_xn$referglyph$1aao('arrDblVStrokeOver'));
                            return void 0;
                        });
                        r270_xn$createAndSaveGlyphImpl$2Lrc3c(r276_MangleName('uni21FC'), r276_MangleUnicode(8700), function () {
                            var _r653_t1;
                            var _r653_t0 = this;
                            var r653_currentGlyph = _r653_t0;
                            r653_currentGlyph.include(r276_xn$referglyph$1aao(r276_MangleName('arrowLeftRight')), true, true);
                            r653_currentGlyph.include(r276_xn$referglyph$1aao('arrDblVStrokeOver'));
                            return void 0;
                        });
                        r270_xn$createAndSaveGlyphImpl$2Lrc3c(r276_MangleName('uni21CD'), r276_MangleUnicode(8653), function () {
                            var _r658_t1;
                            var _r658_t0 = this;
                            var r658_currentGlyph = _r658_t0;
                            r658_currentGlyph.include(r276_xn$referglyph$1aao(r276_MangleName('dblArrowLeft')), true, true);
                            r658_currentGlyph.include(r276_xn$referglyph$1aao('arrSlashOver'));
                            return void 0;
                        });
                        r270_xn$createAndSaveGlyphImpl$2Lrc3c(r276_MangleName('uni21CE'), r276_MangleUnicode(8654), function () {
                            var _r663_t1;
                            var _r663_t0 = this;
                            var r663_currentGlyph = _r663_t0;
                            r663_currentGlyph.include(r276_xn$referglyph$1aao(r276_MangleName('dblArrowLeftRight')), true, true);
                            r663_currentGlyph.include(r276_xn$referglyph$1aao('arrSlashOver'));
                            return void 0;
                        });
                        r270_xn$createAndSaveGlyphImpl$2Lrc3c(r276_MangleName('uni21CF'), r276_MangleUnicode(8655), function () {
                            var _r668_t1;
                            var _r668_t0 = this;
                            var r668_currentGlyph = _r668_t0;
                            r668_currentGlyph.include(r276_xn$referglyph$1aao(r276_MangleName('dblArrowRight')), true, true);
                            r668_currentGlyph.include(r276_xn$referglyph$1aao('arrSlashOver'));
                            return void 0;
                        });
                        r270_xn$createAndSaveGlyphImpl$2Lrc3c(r276_MangleName('uni2908'), r276_MangleUnicode(10504), function () {
                            var _r673_t1;
                            var _r673_t0 = this;
                            var r673_currentGlyph = _r673_t0;
                            r673_currentGlyph.include(r276_xn$referglyph$1aao(r276_MangleName('arrowDown')), true, true);
                            r673_currentGlyph.include(r276_xn$referglyph$1aao('arrHStrokeOver'));
                            return void 0;
                        });
                        r270_xn$createAndSaveGlyphImpl$2Lrc3c(r276_MangleName('uni2909'), r276_MangleUnicode(10505), function () {
                            var _r678_t1;
                            var _r678_t0 = this;
                            var r678_currentGlyph = _r678_t0;
                            r678_currentGlyph.include(r276_xn$referglyph$1aao(r276_MangleName('arrowUp')), true, true);
                            r678_currentGlyph.include(r276_xn$referglyph$1aao('arrHStrokeOver'));
                            return void 0;
                        });
                        r270_xn$createAndSaveGlyphImpl$2Lrc3c(r276_MangleName('uni21DF'), r276_MangleUnicode(8671), function () {
                            var _r683_t1;
                            var _r683_t0 = this;
                            var r683_currentGlyph = _r683_t0;
                            r683_currentGlyph.include(r276_xn$referglyph$1aao(r276_MangleName('arrowDown')), true, true);
                            r683_currentGlyph.include(r276_xn$referglyph$1aao('arrDblHStrokeOver'));
                            return void 0;
                        });
                        return r270_xn$createAndSaveGlyphImpl$2Lrc3c(r276_MangleName('uni21DE'), r276_MangleUnicode(8670), function () {
                            var _r688_t1;
                            var _r688_t0 = this;
                            var r688_currentGlyph = _r688_t0;
                            r688_currentGlyph.include(r276_xn$referglyph$1aao(r276_MangleName('arrowUp')), true, true);
                            r688_currentGlyph.include(r276_xn$referglyph$1aao('arrDblHStrokeOver'));
                            return void 0;
                        });
                    }());
                    (function () {
                        var r692_hcDist = Math.max(r276_halfArrowSw * 5, r276_arrowWidth / 2);
                        r276_VCombine(r276_MangleName('uni21C4'), r276_MangleUnicode(8644), r276_MangleName('arrowRight'), r276_MangleName('arrowLeft'), r276_arrowHeadSize * 1.75);
                        r276_HCombine(r276_MangleName('uni21C5'), r276_MangleUnicode(8645), r276_MangleName('arrowUp'), r276_MangleName('arrowDown'), r692_hcDist);
                        r276_VCombine(r276_MangleName('uni21C6'), r276_MangleUnicode(8646), r276_MangleName('arrowLeft'), r276_MangleName('arrowRight'), r276_arrowHeadSize * 1.75);
                        r276_VCombine(r276_MangleName('uni21C7'), r276_MangleUnicode(8647), r276_MangleName('arrowLeft'), r276_MangleName('arrowLeft'), r276_arrowHeadSize * 1.75);
                        r276_HCombine(r276_MangleName('uni21C8'), r276_MangleUnicode(8648), r276_MangleName('arrowUp'), r276_MangleName('arrowUp'), r692_hcDist);
                        r276_VCombine(r276_MangleName('uni21C9'), r276_MangleUnicode(8649), r276_MangleName('arrowRight'), r276_MangleName('arrowRight'), r276_arrowHeadSize * 1.75);
                        r276_HCombine(r276_MangleName('uni21CA'), r276_MangleUnicode(8650), r276_MangleName('arrowDown'), r276_MangleName('arrowDown'), r692_hcDist);
                        r276_HCombine(r276_MangleName('uni21F5'), r276_MangleUnicode(8693), r276_MangleName('arrowDown'), r276_MangleName('arrowUp'), r692_hcDist);
                        r276_VCombine(r276_MangleName('uni21CB'), r276_MangleUnicode(8651), r276_MangleName('arrowLeftHR'), r276_MangleName('arrowRightHR'), r276_arrowHeadSize);
                        r276_VCombine(r276_MangleName('uni21CC'), r276_MangleUnicode(8652), r276_MangleName('arrowRightHL'), r276_MangleName('arrowLeftHL'), r276_arrowHeadSize);
                        r276_VCombine(r276_MangleName('uni21B9'), r276_MangleUnicode(8633), r276_MangleName('arrowBarLeft'), r276_MangleName('arrowBarRight'), r276_arrowHeadSize * 1.75);
                        r270_xn$createAndSaveGlyphImpl$2Lrc3c(r276_MangleName('uni21F6'), r276_MangleUnicode(8694), function () {
                            var _r695_t1;
                            var _r695_t0 = this;
                            var r695_currentGlyph = _r695_t0;
                            r695_currentGlyph.setWidth(r273_MosaicWidth);
                            var r695_distance = r276_bendArrowHeadSize * 2 - r276_arrowSw;
                            r695_currentGlyph.include(r276_WithTransform(r270_ApparentTranslate(0, +r695_distance), r276_xn$referglyph$1aao(r276_MangleName('arrowRightCompact'))));
                            r695_currentGlyph.include(r276_xn$referglyph$1aao(r276_MangleName('arrowRightCompact')));
                            r695_currentGlyph.include(r276_WithTransform(r270_ApparentTranslate(0, -r695_distance), r276_xn$referglyph$1aao(r276_MangleName('arrowRightCompact'))));
                            return void 0;
                        });
                        return r270_xn$createAndSaveGlyphImpl$2Lrc3c(r276_MangleName('uni2B31'), r276_MangleUnicode(11057), function () {
                            var _r702_t1;
                            var _r702_t0 = this;
                            var r702_currentGlyph = _r702_t0;
                            r702_currentGlyph.setWidth(r273_MosaicWidth);
                            var r702_distance = r276_bendArrowHeadSize * 2 - r276_arrowSw;
                            r702_currentGlyph.include(r276_WithTransform(r270_ApparentTranslate(0, +r702_distance), r276_xn$referglyph$1aao(r276_MangleName('arrowLeftCompact'))));
                            r702_currentGlyph.include(r276_xn$referglyph$1aao(r276_MangleName('arrowLeftCompact')));
                            r702_currentGlyph.include(r276_WithTransform(r270_ApparentTranslate(0, -r702_distance), r276_xn$referglyph$1aao(r276_MangleName('arrowLeftCompact'))));
                            return void 0;
                        });
                    }());
                    (function () {
                        return r270_xn$createAndSaveGlyphImpl$2Lrc3c(r276_MangleName('zigZagArrow'), r276_MangleUnicode(8623), function () {
                            var _r711_t1;
                            var _r711_t0 = this;
                            var r711_currentGlyph = _r711_t0;
                            r711_currentGlyph.setWidth(r273_MosaicWidth);
                            var r711_x2 = r1_mix(r276_arrowMidX, r276_arrowSB, 0.875 / Math.sqrt(r273_MosaicWidthScalar));
                            var r711_x3 = r1_mix(r276_arrowMidX, r276_arrowRSB, 0.875 / Math.sqrt(r273_MosaicWidthScalar));
                            var r711_x1 = r1_mix(r711_x2, r711_x3, 1 / 3);
                            var r711_x4 = r1_mix(r711_x2, r711_x3, 2 / 3);
                            var r711_y2 = r1_mix(r276_arrowBot, r276_arrowTop, 0.375);
                            var r711_y3 = r1_mix(r276_arrowBot, r276_arrowTop, 0.625);
                            var r711_magLastSeg = Math.hypot(r711_x3 - r711_x4, r711_y3 - r276_arrowBot);
                            var r711_x3ArrowHeadMock = r711_x3 - (r711_x3 - r711_x4) / r711_magLastSeg * r276_arrowSw * r270_HVContrast;
                            var r711_pLastSeg = (r711_magLastSeg - r276_o - 0.55 * r276_arrowSw) / r711_magLastSeg;
                            r711_currentGlyph.include(r270_union(r276_ArrowHead(r711_x3ArrowHeadMock, r711_y3, r711_x4, r276_arrowBot, r276_arrowHeadSize), r270_difference(r270_dispiro(r270_flat(r1_mix(r711_x3, r711_x4, r711_pLastSeg), r1_mix(r711_y3, r276_arrowBot, r711_pLastSeg), r270_widths.center(r276_arrowSw)), r270_curl(r711_x3, r711_y3, r270_widths.lhs(r276_arrowSw))), r276_MaskAboveLine(r711_x2, r711_y2, r711_x3, r711_y3)), r270_difference(r270_dispiro(r270_flat(r711_x3, r711_y3, r270_widths.lhs(r276_arrowSw)), r270_curl(r711_x2, r711_y2, r270_widths.rhs(r276_arrowSw))), r276_MaskRightLine(r711_x3, r711_y3, r711_x4, r276_arrowBot), r276_MaskLeftLine(r711_x2, r711_y2, r711_x1, r276_arrowTop)), r270_difference(r270_dispiro(r270_flat(r711_x2, r711_y2, r270_widths.rhs(r276_arrowSw)), r270_curl(r711_x1, r276_arrowTop, r270_widths.center(r276_arrowSw))), r276_MaskBelowLine(r711_x2, r711_y2, r711_x3, r711_y3))));
                            return void 0;
                        });
                    }());
                    (function () {
                        var r715_bodyWidth = Math.min(r276_arrowWidth, r276_arrowHeight * 0.6);
                        r270_xn$createAndSaveGlyphImpl$2Lrc3c(r276_MangleName('arrowUpThenNW'), r276_MangleUnicode(129200), function () {
                            var _r718_t1;
                            var _r718_t0 = this;
                            var r718_currentGlyph = _r718_t0;
                            r718_currentGlyph.setWidth(r273_MosaicWidth);
                            var r718_x1 = r276_arrowMidX + r715_bodyWidth / 2;
                            var r718_y1 = r276_arrowTop - r715_bodyWidth;
                            var r718_x2 = r276_arrowMidX - r715_bodyWidth / 2;
                            var r718_y2 = r276_arrowTop + 0;
                            r718_currentGlyph.include(r276_ArrowHead(r718_x1, r718_y1, r718_x2, r718_y2));
                            r718_currentGlyph.include(r270_intersection(r276_Rect(r276_arrowTop, r276_arrowBot, 0, r718_x1), r276_ArrowBar(r718_x1, r718_y1, r718_x2, r718_y2, r276_halfArrowSw)));
                            r718_currentGlyph.include(r270_intersection(r276_VBar.r(r718_x1, r276_arrowBot, r276_arrowTop, r276_arrowSw), r270_xn$spirooutline$1aao(r270_corner(r718_x1, r718_y1), r270_corner(r718_x2, r718_y2), r270_corner(r718_x2, r276_arrowBot), r270_corner(r718_x1, r276_arrowBot))));
                            return void 0;
                        });
                        r270_xn$createAndSaveGlyphImpl$2Lrc3c(r276_MangleName('arrowRightThenCurlbSW'), r276_MangleUnicode(129201), function () {
                            var _r725_t1;
                            var _r725_t0 = this;
                            var r725_currentGlyph = _r725_t0;
                            r725_currentGlyph.setWidth(r273_MosaicWidth);
                            var r725_x1 = r276_arrowMidX + r715_bodyWidth / 2;
                            var r725_y1 = r276_arrowBot + r715_bodyWidth;
                            var r725_x2 = r276_arrowMidX - r715_bodyWidth / 2;
                            var r725_y2 = r276_arrowBot + 0;
                            r725_currentGlyph.include(r276_ArrowHead(r725_x1, r725_y1, r725_x2, r725_y2));
                            r725_currentGlyph.include(r270_intersection(r276_Rect(r1_mix(r725_y1, r725_y2, 1 / 2), r276_arrowBot, 0, r725_x1), r276_ArrowBar(r725_x1, r725_y1, r725_x2, r725_y2, r276_halfArrowSw)));
                            r725_currentGlyph.include(r270_intersection(r276_Rect(r1_mix(r725_y1, r725_y2, 1), r276_arrowTop, r725_x2, r725_x1), r270_dispiro(r270_widths(r276_halfArrowSw, r276_halfArrowSw), r270_flat(r725_x2, r725_y2), r270_curl(r1_mix(r725_x2, r725_x1, 2 / 3), r1_mix(r725_y2, r725_y1, 2 / 3)), r270_g4.up.mid(r725_x1 - r276_halfArrowSw * r270_HVContrast, r1_mix(r725_y2, r276_arrowTop - r276_halfArrowSw, 0.75) - r276_halfArrowSw * 0.6), r270_arcvh(), r270_flat(r1_mix(r725_x2, r725_x1 - r276_halfArrowSw * r270_HVContrast, 0.5), r276_arrowTop - r276_halfArrowSw), r270_curl(r725_x2, r276_arrowTop - r276_halfArrowSw, r270_heading(r270_Leftward)))));
                            return void 0;
                        });
                        var r715_enclosedSize = r715_bodyWidth * 1.2 + r276_arrowSw;
                        r270_xn$createAndSaveGlyphImpl$2Lrc3c(r276_MangleName('uni21B8'), r276_MangleUnicode(8632), function () {
                            var _r732_t1;
                            var _r732_t0 = this;
                            var r732_currentGlyph = _r732_t0;
                            r732_currentGlyph.setWidth(r273_MosaicWidth);
                            var r732_x1 = r276_arrowMidX + r715_bodyWidth / 2;
                            var r732_x2 = r276_arrowMidX - r715_bodyWidth / 2;
                            r732_currentGlyph.include(r276_HBar.t(r732_x2, r732_x1, r270_SymbolMid + r715_enclosedSize / 2, r276_arrowSw));
                            r732_currentGlyph.include(r276_WithTransform(r270_ApparentTranslate(0, (r715_bodyWidth - r715_enclosedSize) / 2), r276_ArrowShape(r732_x1, r270_SymbolMid - r715_bodyWidth / 2, r732_x2, r270_SymbolMid + r715_bodyWidth / 2)));
                            return void 0;
                        });
                        r270_xn$createAndSaveGlyphImpl$2Lrc3c(r276_MangleName('uni21F1'), r276_MangleUnicode(8689), function () {
                            var _r738_t1;
                            var _r738_t0 = this;
                            var r738_currentGlyph = _r738_t0;
                            r738_currentGlyph.setWidth(r273_MosaicWidth);
                            var r738_x1 = r276_arrowMidX + r715_bodyWidth / 2;
                            var r738_x2 = r276_arrowMidX - r715_bodyWidth / 2;
                            var r738_y1 = r270_SymbolMid - r715_bodyWidth / 2;
                            var r738_y2 = r270_SymbolMid + r715_bodyWidth / 2;
                            r738_currentGlyph.include(r276_WithTransform(r270_ApparentTranslate((r715_enclosedSize - r715_bodyWidth) / 2, (r715_bodyWidth - r715_enclosedSize) / 2), r276_ArrowShape(r738_x1, r738_y1, r738_x2, r738_y2)));
                            r738_currentGlyph.include(r276_HBar.t(r276_arrowMidX - r715_enclosedSize / 2, r276_arrowMidX + r715_enclosedSize / 2, r270_SymbolMid + r715_enclosedSize / 2, r276_arrowSw));
                            r738_currentGlyph.include(r276_VBar.l(r276_arrowMidX - r715_enclosedSize / 2, r270_SymbolMid - r715_enclosedSize / 2, r270_SymbolMid + r715_enclosedSize / 2, r276_arrowSw));
                            return void 0;
                        });
                        return r270_xn$createAndSaveGlyphImpl$2Lrc3c(r276_MangleName('uni21F2'), r276_MangleUnicode(8690), function () {
                            var _r745_t1;
                            var _r745_t0 = this;
                            var r745_currentGlyph = _r745_t0;
                            r745_currentGlyph.include(r276_xn$referglyph$1aao(r276_MangleName('uni21F1')), r270_AS_BASE, r270_ALSO_METRICS);
                            r745_currentGlyph.include(r276_FlipAround(r276_arrowMidX, r270_SymbolMid));
                            return void 0;
                        });
                    }());
                    return r273_MosaicWidthScalar === 1 ? r270_xn$ExportCapture$2Lrc4b(function () {
                        var _r749_t0, _r749_t1;
                        return { 'ArrowShape': r276_ArrowShape };
                    }) : void 0;
                }());
                _r273_t5 = _r273_t2 = _r273_t2 + 1;
                _r273_t4 = _r273_t2 < _r273_t1;
            }
            return _r273_t5;
        }();
    });
    return void 0;
});
