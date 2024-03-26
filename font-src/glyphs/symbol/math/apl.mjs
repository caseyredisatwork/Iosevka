'use strict';
import * as _s0_t0 from '../../../support/utils.mjs';
import * as _s0_t1 from '../../../meta/aesthetics.mjs';
import * as _s0_t2 from '../../../support/geometry/point.mjs';
import * as _s0_t3 from '../../../support/gr.mjs';
var _s0_t4;
export {
    _s0_t4 as apply
};
var r1_apply, _r1_t0, _r1_t1, _r1_t2, _r1_t3, _r1_t4, _r1_t5, _r1_t6, _r1_t7;
var _r1_t8 = _s0_t0;
var r1_mix = _r1_t8.mix;
var r1_linreg = _r1_t8.linreg;
var r1_clamp = _r1_t8.clamp;
var r1_fallback = _r1_t8.fallback;
var _r1_t9 = _s0_t1;
var r1_DesignParameters = _r1_t9.DesignParameters;
var _r1_t10 = _s0_t2;
var r1_Point = _r1_t10.Point;
var _r1_t11 = _s0_t3;
var r1_AplForm = _r1_t11.AplForm;
var r1_xn$GlyphBlocks$2Lrc2b = [];
_s0_t4 = r1_apply = function () {
    var r268_block, _r268_t4, _r268_t6;
    var _r268_t3 = this;
    var _r268_t0 = r1_xn$GlyphBlocks$2Lrc2b;
    var _r268_t1 = _r268_t0.length;
    var _r268_t2 = 0;
    var _r268_t5 = _r268_t2 < _r268_t1;
    while (_r268_t5) {
        _r268_t6 = (r268_block = _r268_t0[_r268_t2], r268_block(_r268_t3), _r268_t2 = _r268_t2 + 1);
        _r268_t5 = _r268_t2 < _r268_t1;
    }
    return _r268_t6;
};
r1_xn$GlyphBlocks$2Lrc2b.push(function (r272_xn$Capture_Ext$2Lrc2b) {
    var _r272_t0, _r272_t1;
    r272_xn$Capture_Ext$2Lrc2b['$defineGlyphBlockImpl$'](r272_xn$Capture_Ext$2Lrc2b, 'Symbol-Math-APL', function (r273_xn$Capture$2Lrc8, r273_xn$ExportCapture$2Lrc4b) {
        var _r273_t7, _r273_t8;
        var _r273_t0 = r273_xn$Capture$2Lrc8;
        var r273_xn$createAndSaveGlyphImpl$2Lrc3c = _r273_t0['$createAndSaveGlyphImpl$'];
        var r273_xn$NamedParameterPair$2Lrc9b = _r273_t0['$NamedParameterPair$'];
        var r273_xn$assignUnicodeImpl$2Lrc8b = _r273_t0['$assignUnicodeImpl$'];
        var r273_xn$execState$2Lrc0b = _r273_t0['$execState$'];
        var r273_para = _r273_t0.para;
        var r273_glyphStore = _r273_t0.glyphStore;
        var r273_MarkSet = _r273_t0.MarkSet;
        var r273_AS_BASE = _r273_t0.AS_BASE;
        var r273_ALSO_METRICS = _r273_t0.ALSO_METRICS;
        var r273_DivFrame = _r273_t0.DivFrame;
        var _r273_t1 = r273_xn$Capture$2Lrc8.Metrics;
        var r273_Width = _r273_t1.Width;
        var r273_SB = _r273_t1.SB;
        var r273_SymbolMid = _r273_t1.SymbolMid;
        var r273_ParenTop = _r273_t1.ParenTop;
        var r273_ParenBot = _r273_t1.ParenBot;
        var r273_OperTop = _r273_t1.OperTop;
        var r273_OperBot = _r273_t1.OperBot;
        var r273_BgOpTop = _r273_t1.BgOpTop;
        var r273_BgOpBot = _r273_t1.BgOpBot;
        var r273_Translate = _r273_t1.Translate;
        var r273_ApparentTranslate = _r273_t1.ApparentTranslate;
        var r273_HVContrast = _r273_t1.HVContrast;
        var r273_O = _r273_t1.O;
        var r273_ArchDepth = _r273_t1.ArchDepth;
        var r273_Stroke = _r273_t1.Stroke;
        var r273_CThin = _r273_t1.CThin;
        var r273_RightSB = _r273_t1.RightSB;
        var r273_Middle = _r273_t1.Middle;
        var r273_ArchDepthA = _r273_t1.ArchDepthA;
        var r273_ArchDepthB = _r273_t1.ArchDepthB;
        var r273_CorrectionOMidX = _r273_t1.CorrectionOMidX;
        var r273_AdviceStroke = _r273_t1.AdviceStroke;
        var r273_OperatorStroke = _r273_t1.OperatorStroke;
        var _r273_t2 = r273_xn$Capture$2Lrc8.SpiroFns;
        var r273_g4 = _r273_t2.g4;
        var r273_corner = _r273_t2.corner;
        var r273_flat = _r273_t2.flat;
        var r273_curl = _r273_t2.curl;
        var r273_widths = _r273_t2.widths;
        var r273_archv = _r273_t2.archv;
        var r273_arcvh = _r273_t2.arcvh;
        var r273_dispiro = _r273_t2.dispiro;
        var r273_xn$spirooutline$1aao = _r273_t2['spiro-outline'];
        var _r273_t3 = r273_xn$Capture$2Lrc8.BooleFns;
        var r273_union = _r273_t3.union;
        var r273_intersection = _r273_t3.intersection;
        var r273_difference = _r273_t3.difference;
        var _r273_t4 = r273_xn$Capture$2Lrc8.CommonShapes.resolve();
        var r273_HBar = _r273_t4.HBar;
        var r273_VBar = _r273_t4.VBar;
        var r273_FlipAround = _r273_t4.FlipAround;
        var r273_ScaleAround = _r273_t4.ScaleAround;
        var r273_NameUni = _r273_t4.NameUni;
        var r273_WithTransform = _r273_t4.WithTransform;
        var r273_xn$clearanchors$1aao = _r273_t4['clear-anchors'];
        var r273_MaskLeft = _r273_t4.MaskLeft;
        var r273_MaskRight = _r273_t4.MaskRight;
        var _r273_t5 = r273_xn$Capture$2Lrc8['Common-Derivatives'].resolve();
        var r273_xn$referglyph$1aao = _r273_t5['refer-glyph'];
        var r273_xn$queryglyph$1aao = _r273_t5['query-glyph'];
        var r273_alias = _r273_t5.alias;
        var r273_xn$deriveglyphs$7Hrq = _r273_t5['derive-glyphs'];
        var r273_xn$derivecomposites$7Hrq = _r273_t5['derive-composites'];
        var r273_xn$derivemultipartglyphs$7Hrq65 = _r273_t5['derive-multi-part-glyphs'];
        var _r273_t6 = r273_xn$Capture$2Lrc8['Letter-Latin-U'].resolve();
        var r273_UShape = _r273_t6.UShape;
        var r273_aplBoxInnerTop = r273_BgOpTop;
        var r273_aplBoxInnerBot = r273_BgOpBot;
        var r273_aplBoxSW = r273_AdviceStroke(4.5);
        var r273_aplBoxTop = r1_mix(r273_SymbolMid, r273_aplBoxInnerTop, 1.1);
        var r273_aplBoxBot = r1_mix(r273_SymbolMid, r273_aplBoxInnerBot, 1.1);
        var r273_aplBoxInnerScale = Math.min((r273_Width - r273_aplBoxSW * 1.75) / r273_Width, (r273_aplBoxInnerTop - r273_aplBoxInnerBot) / (r273_ParenTop - r273_ParenBot));
        var r273_Overlay = function (r277_fnOverlay, r277_fnBackground) {
            var _r277_t0, _r277_t1;
            return function () {
                var r279_c, _r279_t2, _r279_t3, _r279_t5, _r279_t6, _r279_tag7;
                var _r279_t4 = this;
                var r279_currentGlyph = _r279_t4;
                var r279_sw = r273_AdviceStroke(6) / 2;
                var r279_candidates = [];
                var r279_segs = 3;
                var r279_overlay = r273_xn$createAndSaveGlyphImpl$2Lrc3c(null, null, function () {
                    var _r282_t1;
                    var _r282_t0 = this;
                    var r282_currentGlyph = _r282_t0;
                    r282_currentGlyph.include(r277_fnOverlay, r273_AS_BASE, r273_ALSO_METRICS);
                    return void 0;
                });
                var r279_background = r273_xn$createAndSaveGlyphImpl$2Lrc3c(null, null, function () {
                    var _r286_t1;
                    var _r286_t0 = this;
                    var r286_currentGlyph = _r286_t0;
                    r286_currentGlyph.include(r277_fnBackground, r273_AS_BASE, r273_ALSO_METRICS);
                    return void 0;
                });
                var r279_corners = r273_xn$createAndSaveGlyphImpl$2Lrc3c(null, null, function () {
                    var r290_c, r290_z, _r290_t3, _r290_t4, _r290_t5, _r290_t7, _r290_t8, _r290_tag9;
                    var _r290_t6 = this;
                    var r290_currentGlyph = _r290_t6;
                    _r290_t6.gizmo = r273_Translate(0, 0);
                    var _r290_t0 = r279_overlay.geometry.asContours();
                    var _r290_t1 = _r290_t0.length;
                    var _r290_t2 = 0;
                    while (_r290_t2 < _r290_t1) {
                        r290_c = _r290_t0[_r290_t2];
                        _r290_t3 = r290_c;
                        _r290_t4 = _r290_t3.length;
                        _r290_t5 = 0;
                        while (_r290_t5 < _r290_t4) {
                            r290_z = _r290_t3[_r290_t5];
                            (function () {
                                var r296_x, r296_y;
                                return r290_z.type === r1_Point.Type.Corner ? (r296_x = r290_z.x, r296_y = r290_z.y, r290_currentGlyph.include(r273_xn$spirooutline$1aao(r273_corner(r296_x - r279_sw, r296_y - r279_sw), r273_corner(r296_x + r279_sw, r296_y - r279_sw), r273_corner(r296_x + r279_sw, r296_y + r279_sw), r273_corner(r296_x - r279_sw, r296_y + r279_sw)))) : void 0;
                            }());
                            _r290_t5 = _r290_t5 + 1;
                        }
                        _r290_t2 = _r290_t2 + 1;
                    }
                    return void 0;
                });
                var _r279_t0 = 0 - r279_segs;
                var _r279_t1 = r279_segs;
                var r279_r = _r279_t0;
                while (r279_r <= _r279_t1) {
                    _r279_t2 = 0 - r279_segs;
                    _r279_t3 = r279_segs;
                    r279_c = _r279_t2;
                    while (r279_c <= _r279_t3) {
                        (function () {
                            var r303_dx = r279_r / r279_segs * r279_sw;
                            var r303_dy = r279_c / r279_segs * r279_sw;
                            return r279_candidates.push(r273_xn$createAndSaveGlyphImpl$2Lrc3c(null, null, function () {
                                var _r306_t1;
                                var _r306_t0 = this;
                                var r306_currentGlyph = _r306_t0;
                                r306_currentGlyph.include(r279_overlay);
                                r306_currentGlyph.include(r273_Translate(r303_dx, r303_dy));
                                return void 0;
                            }));
                        }());
                        r279_c = r279_c + 1;
                    }
                    r279_r = r279_r + 1;
                }
                r279_currentGlyph.include(r273_difference(r279_background, r279_corners, r273_union.apply(null, r279_candidates)));
                r279_currentGlyph.include(r279_overlay);
                return void 0;
            };
        };
        r273_xn$createAndSaveGlyphImpl$2Lrc3c('apl/quad', 9109, function () {
            var _r313_t1;
            var _r313_t0 = this;
            var r313_currentGlyph = _r313_t0;
            var r313_l = r1_mix(0, r273_SB, 1 / 3);
            var r313_r = r1_mix(r273_Width, r273_RightSB, 1 / 3);
            r313_currentGlyph.include(r273_HBar.t(r313_l, r313_r, r273_aplBoxTop, r273_aplBoxSW));
            r313_currentGlyph.include(r273_HBar.b(r313_l, r313_r, r273_aplBoxBot, r273_aplBoxSW));
            r313_currentGlyph.include(r273_VBar.l(r313_l, r273_aplBoxTop, r273_aplBoxBot, r273_aplBoxSW));
            r313_currentGlyph.include(r273_VBar.r(r313_r, r273_aplBoxTop, r273_aplBoxBot, r273_aplBoxSW));
            return void 0;
        });
        r273_xn$createAndSaveGlyphImpl$2Lrc3c('apl/quadShadow', null, function () {
            var _r320_t1;
            var _r320_t0 = this;
            var r320_currentGlyph = _r320_t0;
            var r320_l = r1_mix(0, r273_SB, 1 / 3);
            var r320_r = r1_mix(r273_Width, r273_RightSB, 1 / 3);
            r320_currentGlyph.include(r273_xn$spirooutline$1aao(r273_corner(r320_l, r273_aplBoxTop), r273_corner(r320_r, r273_aplBoxTop), r273_corner(r320_r, r273_aplBoxBot), r273_corner(r320_l, r273_aplBoxBot)));
            return void 0;
        });
        r273_xn$createAndSaveGlyphImpl$2Lrc3c('apl/iBar', 9014, function () {
            var _r324_t1;
            var _r324_t0 = this;
            var r324_currentGlyph = _r324_t0;
            var r324_l = r1_mix(0, r273_SB, 1 / 3);
            var r324_r = r1_mix(r273_Width, r273_RightSB, 1 / 3);
            r324_currentGlyph.include(r273_HBar.t(r324_l, r324_r, r273_OperTop, r273_aplBoxSW));
            r324_currentGlyph.include(r273_HBar.b(r324_l, r324_r, r273_OperBot, r273_aplBoxSW));
            r324_currentGlyph.include(r273_VBar.m(r273_Middle, r273_OperTop, r273_OperBot, r273_aplBoxSW));
            return void 0;
        });
        r273_xn$createAndSaveGlyphImpl$2Lrc3c('apl/squish', 9015, function () {
            var _r330_t1;
            var _r330_t0 = this;
            var r330_currentGlyph = _r330_t0;
            var r330_l = r1_mix(r273_SB, r273_RightSB, 1 / 8);
            var r330_r = r1_mix(r273_RightSB, r273_SB, 1 / 8);
            r330_currentGlyph.include(r273_union(r273_HBar.t(r330_l, r330_r, r273_aplBoxTop, r273_aplBoxSW), r273_HBar.b(r330_l, r330_r, r273_aplBoxBot, r273_aplBoxSW), r273_VBar.l(r330_l, r273_aplBoxTop, r273_aplBoxBot, r273_aplBoxSW), r273_VBar.r(r330_r, r273_aplBoxTop, r273_aplBoxBot, r273_aplBoxSW)));
            return void 0;
        });
        r273_xn$createAndSaveGlyphImpl$2Lrc3c('apl/lamp', 9053, function () {
            var _r334_t1;
            var _r334_t0 = this;
            var r334_currentGlyph = _r334_t0;
            var r334_shift = r273_OperTop - 2 * r273_ArchDepth - r273_OperBot;
            var r334_fine = r273_CThin * r273_AdviceStroke(4);
            var r334_InnerCircleMask = function (r335_sw) {
                var _r335_t0, _r335_t1;
                return r273_xn$spirooutline$1aao(r273_corner(r273_SB + r273_HVContrast * (r273_Stroke - r334_fine), r273_OperTop + r334_shift), r273_curl(r273_SB + r273_HVContrast * (r273_Stroke - r334_fine), r273_OperBot + r273_ArchDepthB + r334_shift), r273_arcvh(), r273_g4(r273_Middle + r273_CorrectionOMidX * r273_OperatorStroke, r273_OperBot + (r273_OperatorStroke - r335_sw) + r334_shift + r273_O), r273_archv(), r273_flat(r273_RightSB - r273_HVContrast * (r273_Stroke - r334_fine), r273_OperBot + r273_ArchDepthA + r334_shift), r273_corner(r273_RightSB - r273_HVContrast * (r273_Stroke - r334_fine), r273_OperTop + r334_shift));
            };
            r334_currentGlyph.include(r273_union(function () {
                var _r338_t1;
                var _r338_t0 = this;
                var r338_currentGlyph = _r338_t0;
                r338_currentGlyph.include(r273_UShape(r273_DivFrame(1), r273_OperTop, r273_OperBot, new r273_xn$NamedParameterPair$2Lrc9b('stroke', r273_OperatorStroke)), true, true);
                r338_currentGlyph.include(r273_FlipAround(r273_Middle, r273_SymbolMid));
                return void 0;
            }, r273_intersection(r273_UShape(r273_DivFrame(1), r273_OperTop + r334_shift, r273_OperBot + r334_shift, new r273_xn$NamedParameterPair$2Lrc9b('stroke', r273_OperatorStroke)), r334_InnerCircleMask(r273_OperatorStroke), function () {
                var _r344_t1;
                var _r344_t0 = this;
                var r344_currentGlyph = _r344_t0;
                r344_currentGlyph.include(r334_InnerCircleMask(r334_fine), true, true);
                r344_currentGlyph.include(r273_FlipAround(r273_Middle, r273_OperTop - r273_ArchDepth));
                return void 0;
            })));
            return void 0;
        });
        r273_xn$createAndSaveGlyphImpl$2Lrc3c('apl/bar', null, function () {
            var _r349_t1;
            var _r349_t0 = this;
            var r349_currentGlyph = _r349_t0;
            r349_currentGlyph.include(r273_VBar.m(r273_Middle, r273_aplBoxTop, r273_aplBoxBot, r273_aplBoxSW));
            return void 0;
        });
        r273_xn$createAndSaveGlyphImpl$2Lrc3c('apl/longBar', null, function () {
            var _r353_t1;
            var _r353_t0 = this;
            var r353_currentGlyph = _r353_t0;
            r353_currentGlyph.include(r273_VBar.m(r273_Middle, r273_aplBoxTop, r273_aplBoxBot, r273_aplBoxSW));
            return void 0;
        });
        r273_xn$createAndSaveGlyphImpl$2Lrc3c('apl/minus', null, function () {
            var _r357_t1;
            var _r357_t0 = this;
            var r357_currentGlyph = _r357_t0;
            r357_currentGlyph.include(r273_dispiro(r273_widths.center(r273_aplBoxSW), r273_flat(r273_RightSB, r1_mix(r273_OperTop, r273_OperBot, 0.5)), r273_curl(r273_SB, r1_mix(r273_OperTop, r273_OperBot, 0.5))));
            return void 0;
        });
        r273_xn$createAndSaveGlyphImpl$2Lrc3c('apl/backSlash', null, function () {
            var _r361_t1;
            var _r361_t0 = this;
            var r361_currentGlyph = _r361_t0;
            r361_currentGlyph.include(r273_dispiro(r273_widths.center(r273_aplBoxSW), r273_flat(r273_SB, r273_OperTop), r273_curl(r273_RightSB, r273_OperBot)));
            return void 0;
        });
        var r273_aplBoxed = function (r363_shape) {
            var _r363_t0, _r363_t1;
            return r273_Overlay(r273_xn$referglyph$1aao('apl/quad'), function () {
                var _r365_t1;
                var _r365_t0 = this;
                var r365_currentGlyph = _r365_t0;
                r365_currentGlyph.include(r273_intersection(r273_xn$referglyph$1aao('apl/quadShadow'), r363_shape));
                r365_currentGlyph.include(r273_ScaleAround(r273_Middle, r273_SymbolMid, r273_aplBoxInnerScale));
                return void 0;
            });
        };
        var r273_aplBoxedPhantom = function (r368_shape) {
            var _r368_t0, _r368_t1;
            return function () {
                var _r370_t1;
                var _r370_t0 = this;
                var r370_currentGlyph = _r370_t0;
                r370_currentGlyph.include(r273_intersection(r273_xn$referglyph$1aao('apl/quadShadow'), r368_shape));
                r370_currentGlyph.include(r273_ScaleAround(r273_Middle, r273_SymbolMid, r273_aplBoxInnerScale));
                return void 0;
            };
        };
        r273_alias('apl/iota', 9075, 'grek/iota');
        r273_alias('apl/rho', 9076, 'grek/rho');
        r273_alias('apl/omega', 9077, 'grek/omega');
        r273_alias('apl/alpha', 9082, 'grek/alpha');
        r273_xn$createAndSaveGlyphImpl$2Lrc3c(9016, null, r273_aplBoxed(r273_xn$referglyph$1aao('equal')));
        r273_xn$createAndSaveGlyphImpl$2Lrc3c(9018, null, r273_aplBoxed(r273_xn$referglyph$1aao('whiteDiamondOperator')));
        r273_xn$createAndSaveGlyphImpl$2Lrc3c(9019, null, r273_aplBoxed(r273_xn$referglyph$1aao('mathSmallCircle')));
        r273_xn$createAndSaveGlyphImpl$2Lrc3c(9020, null, r273_aplBoxed(r273_xn$referglyph$1aao('whiteCircle.NWID')));
        r273_xn$createAndSaveGlyphImpl$2Lrc3c(9025, null, r273_aplBoxed(r273_xn$referglyph$1aao('slash')));
        r273_xn$createAndSaveGlyphImpl$2Lrc3c(9026, null, r273_aplBoxed(r273_xn$referglyph$1aao('backslash')));
        r273_xn$createAndSaveGlyphImpl$2Lrc3c(9027, null, r273_aplBoxed(r273_xn$referglyph$1aao('less')));
        r273_xn$createAndSaveGlyphImpl$2Lrc3c(9028, null, r273_aplBoxed(r273_xn$referglyph$1aao('greater')));
        r273_xn$createAndSaveGlyphImpl$2Lrc3c(9031, null, r273_aplBoxed(r273_xn$referglyph$1aao('arrowLeft.NWID')));
        r273_xn$createAndSaveGlyphImpl$2Lrc3c(9032, null, r273_aplBoxed(r273_xn$referglyph$1aao('arrowRight.NWID')));
        r273_xn$createAndSaveGlyphImpl$2Lrc3c(9036, null, r273_aplBoxed(r273_xn$referglyph$1aao('vee')));
        r273_xn$createAndSaveGlyphImpl$2Lrc3c(9037, null, r273_aplBoxed(r273_xn$referglyph$1aao('increment.aplForm')));
        r273_xn$createAndSaveGlyphImpl$2Lrc3c(9040, null, r273_aplBoxed(r273_xn$referglyph$1aao('arrowUp.NWID')));
        r273_xn$createAndSaveGlyphImpl$2Lrc3c(9043, null, r273_aplBoxed(r273_xn$referglyph$1aao('wedge')));
        r273_xn$createAndSaveGlyphImpl$2Lrc3c(9044, null, r273_aplBoxed(r273_xn$referglyph$1aao('nabla.aplForm')));
        r273_xn$createAndSaveGlyphImpl$2Lrc3c(9047, null, r273_aplBoxed(r273_xn$referglyph$1aao('arrowDown.NWID')));
        r273_xn$createAndSaveGlyphImpl$2Lrc3c(9054, null, r273_aplBoxed(r273_xn$referglyph$1aao('asciiSingleQuote/body/straight')));
        r273_xn$createAndSaveGlyphImpl$2Lrc3c(9071, null, r273_aplBoxed(r273_xn$referglyph$1aao('notequal')));
        var r273_DeriveBoxed = function (r391_src) {
            var _r391_t0, _r391_t1;
            return r273_aplBoxed(r273_xn$referglyph$1aao(r391_src));
        };
        r273_xn$deriveglyphs$7Hrq('apl/boxedDivide', 9017, 'divide', r273_DeriveBoxed);
        r273_xn$deriveglyphs$7Hrq('apl/boxedColon', 9056, 'colon/mid', r273_DeriveBoxed);
        r273_xn$deriveglyphs$7Hrq('apl/quadQuestion', 9072, 'question', r273_DeriveBoxed);
        r273_xn$createAndSaveGlyphImpl$2Lrc3c(9021, null, function () {
            var _r394_t1;
            var _r394_t0 = this;
            var r394_currentGlyph = _r394_t0;
            r394_currentGlyph.include(r273_xn$referglyph$1aao('apl/bar'), true, true);
            r394_currentGlyph.include(r273_xn$referglyph$1aao('whiteCircle.NWID'));
            return void 0;
        });
        r273_xn$createAndSaveGlyphImpl$2Lrc3c(9022, null, function () {
            var _r399_t1;
            var _r399_t0 = this;
            var r399_currentGlyph = _r399_t0;
            r399_currentGlyph.include(r273_xn$referglyph$1aao('whiteCircle.NWID'), true, true);
            r399_currentGlyph.include(r273_xn$referglyph$1aao('whiteSmallCircle.NWID'));
            return void 0;
        });
        r273_xn$createAndSaveGlyphImpl$2Lrc3c(9023, null, function () {
            var _r404_t1;
            var _r404_t0 = this;
            var r404_currentGlyph = _r404_t0;
            r404_currentGlyph.include(r273_xn$referglyph$1aao('apl/minus'), true, true);
            r404_currentGlyph.include(r273_xn$referglyph$1aao('slash'));
            return void 0;
        });
        r273_xn$createAndSaveGlyphImpl$2Lrc3c(9024, null, function () {
            var _r409_t1;
            var _r409_t0 = this;
            var r409_currentGlyph = _r409_t0;
            r409_currentGlyph.include(r273_xn$referglyph$1aao('apl/minus'), true, true);
            r409_currentGlyph.include(r273_xn$referglyph$1aao('backslash'));
            return void 0;
        });
        r273_xn$createAndSaveGlyphImpl$2Lrc3c(9033, null, function () {
            var _r414_t1;
            var _r414_t0 = this;
            var r414_currentGlyph = _r414_t0;
            r414_currentGlyph.include(r273_xn$referglyph$1aao('apl/backSlash'), true, true);
            r414_currentGlyph.include(r273_xn$referglyph$1aao('whiteCircle.NWID'));
            return void 0;
        });
        r273_xn$createAndSaveGlyphImpl$2Lrc3c(9035, null, function () {
            var _r419_t1;
            var _r419_t0 = this;
            var r419_currentGlyph = _r419_t0;
            r419_currentGlyph.include(r273_xn$referglyph$1aao('increment.aplThin'), true, true);
            r419_currentGlyph.include(r273_xn$referglyph$1aao('apl/longBar'));
            return void 0;
        });
        r273_xn$createAndSaveGlyphImpl$2Lrc3c(9039, null, function () {
            var _r424_t1;
            var _r424_t0 = this;
            var r424_currentGlyph = _r424_t0;
            r424_currentGlyph.include(r273_xn$referglyph$1aao('arrowUp.NWID'), true, true);
            r424_currentGlyph.include(r273_xn$referglyph$1aao('minus'));
            return void 0;
        });
        r273_xn$createAndSaveGlyphImpl$2Lrc3c(9042, null, function () {
            var _r429_t1;
            var _r429_t0 = this;
            var r429_currentGlyph = _r429_t0;
            r429_currentGlyph.include(r273_xn$referglyph$1aao('nabla.aplThin'), true, true);
            r429_currentGlyph.include(r273_xn$referglyph$1aao('apl/longBar'));
            return void 0;
        });
        r273_xn$createAndSaveGlyphImpl$2Lrc3c(9046, null, function () {
            var _r434_t1;
            var _r434_t0 = this;
            var r434_currentGlyph = _r434_t0;
            r434_currentGlyph.include(r273_xn$referglyph$1aao('arrowDown.NWID'), true, true);
            r434_currentGlyph.include(r273_xn$referglyph$1aao('minus'));
            return void 0;
        });
        r273_xn$createAndSaveGlyphImpl$2Lrc3c(9049, null, function () {
            var _r439_t1;
            var _r439_t0 = this;
            var r439_currentGlyph = _r439_t0;
            r439_currentGlyph.include(r273_xn$referglyph$1aao('increment.aplForm'), true, true);
            r439_currentGlyph.include(r273_xn$referglyph$1aao('underlineBelow'));
            return void 0;
        });
        r273_xn$createAndSaveGlyphImpl$2Lrc3c(9062, null, function () {
            var _r444_t1;
            var _r444_t0 = this;
            var r444_currentGlyph = _r444_t0;
            r444_currentGlyph.include(r273_xn$referglyph$1aao('cup'), true, true);
            r444_currentGlyph.include(r273_xn$referglyph$1aao('apl/bar'));
            return void 0;
        });
        r273_xn$createAndSaveGlyphImpl$2Lrc3c(9069, null, function () {
            var _r449_t1;
            var _r449_t0 = this;
            var r449_currentGlyph = _r449_t0;
            r449_currentGlyph.include(r273_xn$referglyph$1aao('overlayTildeOperator'), true, true);
            r449_currentGlyph.include(r273_xn$referglyph$1aao('bar'));
            return void 0;
        });
        var r273_CenterSmallPunctuations = r273_ApparentTranslate(r273_Middle - r273_DivFrame(r273_para.diversityF).middle, 0);
        r273_xn$derivecomposites$7Hrq('apl/barComma', 9066, 'markDemoBaseSpace', 'comma', r273_CenterSmallPunctuations, 'minus');
        r273_xn$derivecomposites$7Hrq('apl/zeroTilde', 9068, 'zero.lnum/forceUnslashed', 'overlayTildeOperator');
        var r273_AplAccented = function (r452_u, r452_part1, r452_part2, r452_marks) {
            var _r452_t0, _r452_t1;
            return r273_xn$derivemultipartglyphs$7Hrq65(r273_NameUni(r452_u), r452_u, [
                r452_part1,
                r452_part2
            ], function (r453_srcs, r453_gr) {
                var _r453_t0, _r453_t1;
                return function () {
                    var _r455_t1;
                    var _r455_t0 = this;
                    var r455_currentGlyph = _r455_t0;
                    r455_currentGlyph.include(r273_xn$referglyph$1aao(r453_srcs[0]), true, true);
                    r455_currentGlyph.include(r452_marks);
                    r455_currentGlyph.include(r273_xn$referglyph$1aao(r453_srcs[1]));
                    r455_currentGlyph.include(r273_xn$clearanchors$1aao());
                    return void 0;
                };
            });
        };
        r273_AplAccented(9058, 'nabla.aplForm', 'dieresisAbove', r273_MarkSet.tack());
        r273_AplAccented(9057, 'top', 'dieresisAbove', r273_MarkSet.tack());
        r273_AplAccented(9059, 'asterisk.pentaSMid', 'dieresisAbove', r273_MarkSet.plus());
        r273_AplAccented(9060, 'mathSmallCircle', 'dieresisAbove', r273_MarkSet.plus());
        r273_AplAccented(9061, 'whiteCircle.NWID', 'dieresisAbove', r273_MarkSet.plus());
        r273_AplAccented(9064, 'asciiTilde.low', 'dieresisAbove', r273_MarkSet.plus());
        r273_AplAccented(9065, 'greater.narrow', 'dieresisAbove', r273_MarkSet.plus());
        r273_AplAccented(9034, 'bot', 'underlineBelow', r273_MarkSet.tack());
        r273_AplAccented(9048, 'asciiSingleQuote/body/straight/HW', 'underlineBelow', r273_MarkSet.plus());
        r273_AplAccented(9050, 'whiteDiamondOperator', 'underlineBelow', r273_MarkSet.plus());
        r273_AplAccented(9051, 'mathSmallCircle', 'underlineBelow', r273_MarkSet.plus());
        r273_AplAccented(9052, 'whiteCircle.NWID', 'underlineBelow', r273_MarkSet.plus());
        r273_AplAccented(9079, 'aplElement', 'underlineBelow', r273_MarkSet.plus());
        r273_xn$derivecomposites$7Hrq('apl/alphaBar', 9078, 'grek/alpha', r273_xn$referglyph$1aao('underlineBelow'), r273_xn$clearanchors$1aao());
        r273_xn$derivecomposites$7Hrq('apl/iotaBar', 9080, 'grek/iota', r273_xn$referglyph$1aao('underlineBelow'), r273_xn$clearanchors$1aao());
        r273_xn$derivecomposites$7Hrq('apl/omegaBar', 9081, 'grek/omega', r273_xn$referglyph$1aao('underlineBelow'), r273_xn$clearanchors$1aao());
        r273_xn$createAndSaveGlyphImpl$2Lrc3c(9041, null, function () {
            var _r462_t1;
            var _r462_t0 = this;
            var r462_currentGlyph = _r462_t0;
            r462_currentGlyph.include(r273_xn$referglyph$1aao('top'), true, true);
            r462_currentGlyph.include(r273_MarkSet.tack());
            r462_currentGlyph.include(r273_xn$referglyph$1aao('sbRsbOverlineAbove'));
            r462_currentGlyph.include(r273_xn$clearanchors$1aao());
            return void 0;
        });
        r273_xn$createAndSaveGlyphImpl$2Lrc3c(9029, null, function () {
            var _r469_t1;
            var _r469_t0 = this;
            var r469_currentGlyph = _r469_t0;
            r469_currentGlyph.include(r273_Overlay(r273_xn$referglyph$1aao('arrowLeft.NWID'), r273_xn$referglyph$1aao('apl/bar')), true, true);
            return void 0;
        });
        r273_xn$createAndSaveGlyphImpl$2Lrc3c(9030, null, function () {
            var _r473_t1;
            var _r473_t0 = this;
            var r473_currentGlyph = _r473_t0;
            r473_currentGlyph.include(r273_Overlay(r273_xn$referglyph$1aao('arrowRight.NWID'), r273_xn$referglyph$1aao('apl/bar')), true, true);
            return void 0;
        });
        r273_xn$createAndSaveGlyphImpl$2Lrc3c(9055, null, function () {
            var _r477_t1;
            var _r477_t0 = this;
            var r477_currentGlyph = _r477_t0;
            r477_currentGlyph.include(r273_intersection(r273_xn$referglyph$1aao('mathOOutline'), r273_xn$referglyph$1aao('opAsterisk.low')), true, true);
            r477_currentGlyph.include(r273_xn$referglyph$1aao('mathO'));
            return void 0;
        });
        r273_xn$deriveglyphs$7Hrq('apl/barSemicolon', 9070, 'semicolon', function (r480_src, r480_gr) {
            var _r480_t0, _r480_t1;
            return r273_Overlay(r273_WithTransform(r273_CenterSmallPunctuations, r273_xn$referglyph$1aao(r480_src)), r273_xn$referglyph$1aao('underscore.high'));
        });
        r273_xn$createAndSaveGlyphImpl$2Lrc3c(9063, null, function () {
            var _r483_t1;
            var _r483_t0 = this;
            var r483_currentGlyph = _r483_t0;
            r483_currentGlyph.include(r273_xn$referglyph$1aao('apl/bar'), true, true);
            r483_currentGlyph.include(r273_union(r273_intersection(r273_MaskLeft(r273_Middle), r273_xn$referglyph$1aao('subst/aplLeft')), r273_intersection(r273_MaskRight(r273_Middle), r273_xn$referglyph$1aao('subst'))));
            return void 0;
        });
        r273_xn$createAndSaveGlyphImpl$2Lrc3c(9067, null, function () {
            var _r488_t1;
            var _r488_t0 = this;
            var r488_currentGlyph = _r488_t0;
            r488_currentGlyph.include(r273_xn$referglyph$1aao('overlayTildeOperator'), true, true);
            r488_currentGlyph.include(r273_union(r273_difference(r273_xn$referglyph$1aao('nabla.aplThin'), r273_xn$referglyph$1aao('overlayTildeOperatorAboveMask')), r273_intersection(r273_xn$referglyph$1aao('nabla.aplForm'), r273_xn$referglyph$1aao('overlayTildeOperatorAboveMask'))));
            return void 0;
        });
        r273_xn$createAndSaveGlyphImpl$2Lrc3c(9073, null, function () {
            var _r493_t1;
            var _r493_t0 = this;
            var r493_currentGlyph = _r493_t0;
            r493_currentGlyph.include(r273_xn$referglyph$1aao('overlayTildeOperator'), true, true);
            r493_currentGlyph.include(r273_union(r273_difference(r273_xn$referglyph$1aao('vee/aplThin'), r273_xn$referglyph$1aao('overlayTildeOperatorAboveMask')), r273_intersection(r273_xn$referglyph$1aao('vee'), r273_xn$referglyph$1aao('overlayTildeOperatorAboveMask'))));
            return void 0;
        });
        r273_xn$createAndSaveGlyphImpl$2Lrc3c(9074, null, function () {
            var _r498_t1;
            var _r498_t0 = this;
            var r498_currentGlyph = _r498_t0;
            r498_currentGlyph.include(r273_xn$referglyph$1aao('overlayTildeOperator'), true, true);
            r498_currentGlyph.include(r273_union(r273_intersection(r273_xn$referglyph$1aao('wedge/aplThin'), r273_xn$referglyph$1aao('overlayTildeOperatorAboveMask')), r273_difference(r273_xn$referglyph$1aao('wedge'), r273_xn$referglyph$1aao('overlayTildeOperatorAboveMask'))));
            return void 0;
        });
        r273_xn$ExportCapture$2Lrc4b(function () {
            var _r502_t0, _r502_t1;
            return { 'LinkAplFormForNwidWwid': r273_LinkAplFormForNwidWwid };
        });
        var r273_LinkAplFormForNwidWwid = function (r503_gn) {
            var r503_us, r503_u, _r503_t0, _r503_t1, _r503_t2, _r503_t3, _r503_t4, _r503_t5, _r503_t6, _r503_t7, _r503_t8;
            var r503_gWwid = r273_xn$queryglyph$1aao('' + r503_gn + '.WWID');
            var r503_gNwid = r273_xn$queryglyph$1aao('' + r503_gn + '.NWID');
            if (r503_gWwid && r503_gNwid) {
                r1_AplForm.set(r503_gWwid, '' + r503_gn + '.NWID');
                if (r273_para.variantSelector['__enableAplForm'] === 'enable') {
                    r503_us = r273_glyphStore.queryUnicodeOf(r503_gWwid);
                    if (r503_us) {
                        r273_glyphStore.deleteUnicodeAssignmentsOf(r503_gWwid);
                        _r503_t0 = r503_us[Symbol.iterator]();
                        _r503_t1 = void 0;
                        _r503_t7 = !(_r503_t1 = _r503_t0.next()).done;
                        while (_r503_t7) {
                            _r503_t8 = (r503_u = _r503_t1.value, r273_glyphStore.encodeGlyph(r503_u, r503_gNwid));
                            _r503_t7 = !(_r503_t1 = _r503_t0.next()).done;
                        }
                        return _r503_t8;
                    } else
                        return void 0;
                } else
                    return void 0;
            } else
                return void 0;
        };
        r273_LinkAplFormForNwidWwid('whiteCircle');
        r273_LinkAplFormForNwidWwid('arrowLeft');
        r273_LinkAplFormForNwidWwid('arrowRight');
        r273_LinkAplFormForNwidWwid('arrowUp');
        r273_LinkAplFormForNwidWwid('arrowDown');
        r273_LinkAplFormForNwidWwid('arrowUpDown');
        r273_LinkAplFormForNwidWwid('arrowUpLeft');
        r273_LinkAplFormForNwidWwid('arrowDownLeft');
        r273_LinkAplFormForNwidWwid('hookArrowLeft');
        r273_LinkAplFormForNwidWwid('arrowLeftRightHR');
        r273_LinkAplFormForNwidWwid('dblArrowLeft');
        r273_LinkAplFormForNwidWwid('uni231C');
        r273_LinkAplFormForNwidWwid('uni2389');
        r273_LinkAplFormForNwidWwid('uni238A');
        r273_LinkAplFormForNwidWwid('uni25F6');
        return r273_LinkAplFormForNwidWwid('uni2687');
    });
    return void 0;
});
