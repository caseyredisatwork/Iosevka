'use strict';
import * as _s0_t0 from '../../../support/utils.mjs';
import * as _s0_t1 from '../../../support/geometry/box.mjs';
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
var r1_Box = _r1_t9.Box;
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
    r270_xn$Capture_Ext$2Lrc2b['$defineGlyphBlockImpl$'](r270_xn$Capture_Ext$2Lrc2b, 'Symbol-Pictograph-Powerline-And-GUI', function (r271_xn$Capture$2Lrc8, r271_xn$ExportCapture$2Lrc4b) {
        var _r271_t7, _r271_t8, _r271_t9, _r271_tag10, _r271_t11, _r271_tag12;
        var _r271_t0 = r271_xn$Capture$2Lrc8;
        var r271_xn$createAndSaveGlyphImpl$2Lrc3c = _r271_t0['$createAndSaveGlyphImpl$'];
        var r271_xn$NamedParameterPair$2Lrc9b = _r271_t0['$NamedParameterPair$'];
        var r271_xn$assignUnicodeImpl$2Lrc8b = _r271_t0['$assignUnicodeImpl$'];
        var r271_xn$execState$2Lrc0b = _r271_t0['$execState$'];
        var r271_AS_BASE = _r271_t0.AS_BASE;
        var r271_ALSO_METRICS = _r271_t0.ALSO_METRICS;
        var _r271_t1 = r271_xn$Capture$2Lrc8.Metrics;
        var r271_DesignParameters = _r271_t1.DesignParameters;
        var r271_Width = _r271_t1.Width;
        var r271_SB = _r271_t1.SB;
        var r271_SymbolMid = _r271_t1.SymbolMid;
        var r271_ParenTop = _r271_t1.ParenTop;
        var r271_ParenBot = _r271_t1.ParenBot;
        var r271_TackTop = _r271_t1.TackTop;
        var r271_TackBot = _r271_t1.TackBot;
        var r271_Translate = _r271_t1.Translate;
        var r271_HVContrast = _r271_t1.HVContrast;
        var r271_Leftward = _r271_t1.Leftward;
        var r271_O = _r271_t1.O;
        var r271_WideWidth4 = _r271_t1.WideWidth4;
        var r271_RightSB = _r271_t1.RightSB;
        var r271_Middle = _r271_t1.Middle;
        var r271_PeriodRadius = _r271_t1.PeriodRadius;
        var r271_SmallArchDepthA = _r271_t1.SmallArchDepthA;
        var r271_SmallArchDepthB = _r271_t1.SmallArchDepthB;
        var r271_AdviceStroke = _r271_t1.AdviceStroke;
        var r271_GeometryStroke = _r271_t1.GeometryStroke;
        var _r271_t2 = r271_xn$Capture$2Lrc8.SpiroFns;
        var r271_g4 = _r271_t2.g4;
        var r271_corner = _r271_t2.corner;
        var r271_flat = _r271_t2.flat;
        var r271_curl = _r271_t2.curl;
        var r271_close = _r271_t2.close;
        var r271_widths = _r271_t2.widths;
        var r271_heading = _r271_t2.heading;
        var r271_dispiro = _r271_t2.dispiro;
        var r271_xn$spirooutline$1aao = _r271_t2['spiro-outline'];
        var _r271_t3 = r271_xn$Capture$2Lrc8.BooleFns;
        var r271_union = _r271_t3.union;
        var r271_intersection = _r271_t3.intersection;
        var r271_difference = _r271_t3.difference;
        var _r271_t4 = r271_xn$Capture$2Lrc8.CommonShapes.resolve();
        var r271_Rect = _r271_t4.Rect;
        var r271_DotAt = _r271_t4.DotAt;
        var r271_OShape = _r271_t4.OShape;
        var r271_OShapeOutline = _r271_t4.OShapeOutline;
        var r271_HBar = _r271_t4.HBar;
        var r271_VBar = _r271_t4.VBar;
        var r271_NameUni = _r271_t4.NameUni;
        var _r271_t5 = r271_xn$Capture$2Lrc8['Common-Derivatives'].resolve();
        var r271_xn$referglyph$1aao = _r271_t5['refer-glyph'];
        var _r271_t6 = r271_xn$Capture$2Lrc8['Symbol-Pictograph-Stick-Figure'].resolve();
        var r271_StickFigureKit = _r271_t6.StickFigureKit;
        var r271_PointingHandShape = _r271_t6.PointingHandShape;
        var r271_uiFigTop = r1_mix(r271_ParenBot, r271_ParenTop, 0.95);
        var r271_uiFigBot = r1_mix(r271_ParenBot, r271_ParenTop, 0.05);
        r271_xn$createAndSaveGlyphImpl$2Lrc3c('powerline/branch', 57504, function () {
            var _r277_t1;
            var _r277_t0 = this;
            var r277_currentGlyph = _r277_t0;
            var r277_fine = r271_AdviceStroke(3.5);
            var r277_y1 = r1_mix(r271_uiFigBot, r271_uiFigTop, 0.8);
            var r277_y2 = r1_mix(r271_uiFigBot, r271_uiFigTop, 0.2);
            r277_currentGlyph.include(r271_VBar.l(r271_SB, r271_uiFigBot, r271_uiFigTop, r277_fine));
            r277_currentGlyph.include(r271_dispiro(r271_widths.rhs(r277_fine), r271_flat(r271_RightSB, r277_y1), r271_curl(r271_RightSB, r1_mix(r277_y1, r277_y2, 0.4)), r271_g4(r271_SB + r277_fine * r271_HVContrast, r277_y2, r271_heading(r271_Leftward))));
            r277_currentGlyph.include(r271_DotAt(r271_RightSB - r277_fine * r271_HVContrast / 2, r277_y1, Math.max(r277_fine * 1.5, r271_PeriodRadius)));
            return void 0;
        });
        r271_xn$createAndSaveGlyphImpl$2Lrc3c('powerline/lock', 57506, function () {
            var _r283_t1;
            var _r283_t0 = this;
            var r283_currentGlyph = _r283_t0;
            var r283_fine = r271_AdviceStroke(3.5);
            var r283_lockTop = r1_mix(r271_uiFigBot, r271_uiFigTop, 0.6);
            var r283_lockLeft = r271_SB / 2;
            var r283_lockRight = r271_Width - r271_SB / 2;
            var r283_lockHoleWidth = 1 / 5;
            var r283_lockHoleLeft = r1_mix(r283_lockLeft, r283_lockRight, 1 / 2 - r283_lockHoleWidth / 2);
            var r283_lockHoleRight = r1_mix(r283_lockLeft, r283_lockRight, 1 / 2 + r283_lockHoleWidth / 2);
            var r283_lockHoleTop = r1_mix(r271_uiFigBot, r283_lockTop, 0.75);
            var r283_lockHoleBottom = r1_mix(r271_uiFigBot, r283_lockTop, 0.25);
            r283_currentGlyph.include(r271_union(r271_intersection(r271_xn$spirooutline$1aao(r271_corner(0, 2 * r271_uiFigTop), r271_corner(r271_Width, 2 * r271_uiFigTop), r271_corner(r271_Width, r283_lockTop - 1), r271_corner(0, r283_lockTop - 1), r271_close()), r271_OShape(r271_uiFigTop, r271_uiFigBot, r271_SB, r271_RightSB, r283_fine, r271_SmallArchDepthA, r271_SmallArchDepthB)), r271_difference(r271_xn$spirooutline$1aao(r271_corner(r283_lockLeft, r283_lockTop), r271_corner(r283_lockRight, r283_lockTop), r271_corner(r283_lockRight, r271_uiFigBot), r271_corner(r283_lockLeft, r271_uiFigBot), r271_close()), r271_OShapeOutline(r283_lockHoleTop, r283_lockHoleBottom, r283_lockHoleLeft, r283_lockHoleRight, r283_fine, r271_SmallArchDepthA * r283_lockHoleWidth, r271_SmallArchDepthB * r283_lockHoleWidth))));
            return void 0;
        });
        (function () {
            var r286_frameLeft = r1_mix(r271_SB, r271_RightSB, r271_DesignParameters.bracketOutside);
            var r286_frameRight = r1_mix(r271_RightSB, r271_SB, r271_DesignParameters.bracketOutside);
            var r286_progressBarGap = Math.min((r271_TackTop - r271_TackBot) / 6, r271_Width / 6, r271_AdviceStroke(5));
            r271_xn$createAndSaveGlyphImpl$2Lrc3c('powerline/progressBarStartEmpty', 60928, function () {
                var _r289_t1;
                var _r289_t0 = this;
                var r289_currentGlyph = _r289_t0;
                r289_currentGlyph.include(r271_VBar.l(r286_frameLeft, r271_TackTop, r271_TackBot, r271_GeometryStroke));
                r289_currentGlyph.include(r271_HBar.t(r286_frameLeft, r271_Width - r271_O, r271_TackTop, r271_GeometryStroke));
                r289_currentGlyph.include(r271_HBar.b(r286_frameLeft, r271_Width - r271_O, r271_TackBot, r271_GeometryStroke));
                return void 0;
            });
            r271_xn$createAndSaveGlyphImpl$2Lrc3c('powerline/progressBarMiddleEmpty', 60929, function () {
                var _r295_t1;
                var _r295_t0 = this;
                var r295_currentGlyph = _r295_t0;
                r295_currentGlyph.include(r271_HBar.t(r271_O, r271_Width - r271_O, r271_TackTop, r271_GeometryStroke));
                r295_currentGlyph.include(r271_HBar.b(r271_O, r271_Width - r271_O, r271_TackBot, r271_GeometryStroke));
                return void 0;
            });
            r271_xn$createAndSaveGlyphImpl$2Lrc3c('powerline/progressBarEndEmpty', 60930, function () {
                var _r300_t1;
                var _r300_t0 = this;
                var r300_currentGlyph = _r300_t0;
                r300_currentGlyph.include(r271_VBar.r(r286_frameRight, r271_TackTop, r271_TackBot, r271_GeometryStroke));
                r300_currentGlyph.include(r271_HBar.t(r271_O, r286_frameRight, r271_TackTop, r271_GeometryStroke));
                r300_currentGlyph.include(r271_HBar.b(r271_O, r286_frameRight, r271_TackBot, r271_GeometryStroke));
                return void 0;
            });
            r271_xn$createAndSaveGlyphImpl$2Lrc3c('powerline/progressBarStartFilled', 60931, function () {
                var _r306_t1;
                var _r306_t0 = this;
                var r306_currentGlyph = _r306_t0;
                r306_currentGlyph.include(r271_xn$referglyph$1aao('powerline/progressBarStartEmpty', r271_AS_BASE, r271_ALSO_METRICS));
                r306_currentGlyph.include(r271_Rect(r271_TackTop - r271_GeometryStroke - r286_progressBarGap, r271_TackBot + r271_GeometryStroke + r286_progressBarGap, r286_frameLeft + r271_GeometryStroke * r271_HVContrast + r286_progressBarGap * r271_HVContrast, r271_Width - r271_O));
                return void 0;
            });
            r271_xn$createAndSaveGlyphImpl$2Lrc3c('powerline/progressBarMiddleFilled', 60932, function () {
                var _r311_t1;
                var _r311_t0 = this;
                var r311_currentGlyph = _r311_t0;
                r311_currentGlyph.include(r271_xn$referglyph$1aao('powerline/progressBarMiddleEmpty', r271_AS_BASE, r271_ALSO_METRICS));
                r311_currentGlyph.include(r271_Rect(r271_TackTop - r271_GeometryStroke - r286_progressBarGap, r271_TackBot + r271_GeometryStroke + r286_progressBarGap, 0 + r271_O, r271_Width - r271_O));
                return void 0;
            });
            return r271_xn$createAndSaveGlyphImpl$2Lrc3c('powerline/progressBarEndFilled', 60933, function () {
                var _r316_t1;
                var _r316_t0 = this;
                var r316_currentGlyph = _r316_t0;
                r316_currentGlyph.include(r271_xn$referglyph$1aao('powerline/progressBarEndEmpty', r271_AS_BASE, r271_ALSO_METRICS));
                r316_currentGlyph.include(r271_Rect(r271_TackTop - r271_GeometryStroke - r286_progressBarGap, r271_TackBot + r271_GeometryStroke + r286_progressBarGap, 0 + r271_O, r286_frameRight - r271_GeometryStroke * r271_HVContrast - r286_progressBarGap * r271_HVContrast));
                return void 0;
            });
        }());
        return function () {
            var r321_FMosaicWide, r321_MosaicNameSuffix, r321_MosaicWidth, r321_MosaicWidthScalar, _r321_t3, _r321_t5, _r321_t6, _r321_tag7;
            var r321_WidthKinds = [
                [
                    0,
                    '.NWID',
                    r271_xn$Capture$2Lrc8.Metrics.Width,
                    1
                ],
                [
                    1,
                    '.WWID',
                    r271_xn$Capture$2Lrc8.Metrics.WideWidth0,
                    2
                ]
            ];
            var _r321_t0 = r321_WidthKinds;
            var _r321_t1 = _r321_t0.length;
            var _r321_t2 = 0;
            var _r321_t4 = _r321_t2 < _r321_t1;
            while (_r321_t4) {
                _r321_t3 = _r321_t0[_r321_t2];
                r321_FMosaicWide = _r321_t3[0];
                r321_MosaicNameSuffix = _r321_t3[1];
                r321_MosaicWidth = _r321_t3[2];
                r321_MosaicWidthScalar = _r321_t3[3];
                (function () {
                    var _r324_t0, _r324_tag1, _r324_t2, _r324_tag3, _r324_t4, _r324_tag5, _r324_t6, _r324_tag7, _r324_t8, _r324_tag9, _r324_t10, _r324_tag11;
                    var r324_MosaicDesiredWidth = r271_WideWidth4;
                    var r324_MosaicMiddle = r321_MosaicWidth / 2;
                    var r324_MosaicUnitWidth = r321_MosaicWidth / r321_MosaicWidthScalar;
                    var r324_MangleUnicode = function (r325_unicode, r325__desiredOverride) {
                        var _r325_t0, _r325_t1;
                        return r321_MosaicWidth === (r325__desiredOverride || r324_MosaicDesiredWidth) ? r325_unicode : void 0;
                    };
                    var r324_MangleName = function (r326_name) {
                        var _r326_t0, _r326_t1;
                        return r326_name + r321_MosaicNameSuffix;
                    };
                    (function () {
                        var r328_scaffold = {};
                        r328_scaffold.top = r1_mix(r271_uiFigBot, r271_uiFigTop, 0.85);
                        r328_scaffold.bot = r1_mix(r271_uiFigBot, r271_uiFigTop, 0.15);
                        r328_scaffold.width = (r271_Middle - r271_SB) * 2 * Math.pow(r321_MosaicWidth / r271_Width, 0.3);
                        r328_scaffold.xMiddle = r321_MosaicWidth / 2;
                        r328_scaffold.xLeft = r328_scaffold.xMiddle - r328_scaffold.width / 2;
                        r328_scaffold.xRight = r328_scaffold.xMiddle + r328_scaffold.width / 2;
                        return r271_xn$createAndSaveGlyphImpl$2Lrc3c(r324_MangleName('arrowheadShapedPointer'), r324_MangleUnicode(129968), function () {
                            var _r331_t1;
                            var _r331_t0 = this;
                            var r331_currentGlyph = _r331_t0;
                            r331_currentGlyph.setWidth(r321_MosaicWidth);
                            r331_currentGlyph.include(r271_xn$spirooutline$1aao(r271_corner(r328_scaffold.xLeft, r328_scaffold.top), r271_corner(r328_scaffold.xRight, r1_mix(r328_scaffold.bot, r328_scaffold.top, 1 / 4)), r271_corner(r1_mix(r328_scaffold.xLeft, r328_scaffold.xRight, 2 / 5), r1_mix(r328_scaffold.bot, r328_scaffold.top, 1 / 4)), r271_corner(r328_scaffold.xLeft, r328_scaffold.bot)));
                            return void 0;
                        });
                    }());
                    (function () {
                        var r335_BoxN = function (r336_n) {
                            var _r336_t0, _r336_t1;
                            return new r1_Box(r271_uiFigTop, r271_uiFigBot, r271_SB, r321_MosaicWidth * r336_n - r271_SB);
                        };
                        var r335_MosaicWidthMask = function () {
                            var _r337_t0, _r337_t1;
                            return r271_xn$spirooutline$1aao(r271_corner(0, r1_mix(r271_ParenBot, r271_ParenTop, -1)), r271_corner(r321_MosaicWidth, r1_mix(r271_ParenBot, r271_ParenTop, -1)), r271_corner(r321_MosaicWidth, r1_mix(r271_ParenBot, r271_ParenTop, +2)), r271_corner(0, r1_mix(r271_ParenBot, r271_ParenTop, +2)));
                        };
                        var r335_RunningManBody = function (r338_xOffset) {
                            var _r338_t0, _r338_t1;
                            var r338_Kit = r271_StickFigureKit(r335_BoxN(2), r271_Translate(r338_xOffset, 0), r271_AdviceStroke(4));
                            return r271_union(r338_Kit.RoundSeg(0 / 16, 3 / 8, 3 / 16, 5 / 8, 1, 1), r338_Kit.RoundSeg(3 / 16, 5 / 8, 10 / 16, 5 / 8), r338_Kit.RoundSeg(10 / 16, 5 / 8, 13 / 16, 7 / 8, 1, 1), r338_Kit.RoundSeg(4 / 16, 3 / 8, 9 / 16, 3 / 8, 1, 1), r338_Kit.RoundSeg(9 / 16, 3 / 8, 13 / 16, 0 / 8), r338_Kit.RoundSeg(13 / 16, 0 / 8, 15 / 16, 0 / 8, 1, 1), r338_Kit.RoundSeg(4 / 16, 6 / 16, 6 / 16, 3 / 16), r338_Kit.RoundSeg(6 / 16, 3 / 16, 0 / 16, 3 / 16, 1, 1), r338_Kit.RoundSeg(0 / 16, 3 / 16, 2 / 16, 0 / 8, 0, 1), r338_Kit.Box(4 / 16, 6 / 16, 8 / 16, 5 / 8));
                        };
                        var r335_RunningManHead = function (r339_xOffset) {
                            var _r339_t0, _r339_t1;
                            var r339_Kit = r271_StickFigureKit(r335_BoxN(2), r271_Translate(r339_xOffset, 0), r271_AdviceStroke(4));
                            return r339_Kit.Circ(6 / 16, 14 / 16, 5 / 32);
                        };
                        r271_xn$createAndSaveGlyphImpl$2Lrc3c(r324_MangleName('runningManLeft'), r324_MangleUnicode(129970), function () {
                            var _r342_t1;
                            var _r342_t0 = this;
                            var r342_currentGlyph = _r342_t0;
                            r342_currentGlyph.setWidth(r321_MosaicWidth);
                            r342_currentGlyph.include(r335_RunningManHead(0));
                            r342_currentGlyph.include(r271_intersection(r335_MosaicWidthMask(), r335_RunningManBody(0)));
                            return void 0;
                        });
                        r271_xn$createAndSaveGlyphImpl$2Lrc3c(r324_MangleName('runningManRight'), r324_MangleUnicode(129971), function () {
                            var _r348_t1;
                            var _r348_t0 = this;
                            var r348_currentGlyph = _r348_t0;
                            r348_currentGlyph.setWidth(r321_MosaicWidth);
                            r348_currentGlyph.include(r271_intersection(r335_MosaicWidthMask(), r335_RunningManBody(-r321_MosaicWidth)));
                            return void 0;
                        });
                        var r335_FolderBody = function (r351_xOffset) {
                            var _r351_t0, _r351_t1;
                            var r351_Kit = r271_StickFigureKit(r335_BoxN(2), r271_Translate(r351_xOffset, 0), r271_AdviceStroke(4));
                            return r271_union(r351_Kit.RoundSeg(0 / 16, 1 / 8, 0 / 16, 11 / 16), r351_Kit.RoundSeg(0 / 16, 11 / 16, 3 / 16, 7 / 8, 1, 1), r351_Kit.RoundSeg(3 / 16, 7 / 8, 6 / 16, 7 / 8), r351_Kit.RoundSeg(6 / 16, 7 / 8, 9 / 16, 11 / 16, 1, 1), r351_Kit.RoundSeg(9 / 16, 11 / 16, 16 / 16, 11 / 16, 0, 1), r351_Kit.RoundSeg(16 / 16, 11 / 16, 16 / 16, 1 / 8), r351_Kit.RoundSeg(0 / 16, 1 / 8, 16 / 16, 1 / 8, 1, 1));
                        };
                        r271_xn$createAndSaveGlyphImpl$2Lrc3c(r324_MangleName('folderLeft'), r324_MangleUnicode(129977), function () {
                            var _r354_t1;
                            var _r354_t0 = this;
                            var r354_currentGlyph = _r354_t0;
                            r354_currentGlyph.setWidth(r321_MosaicWidth);
                            r354_currentGlyph.include(r271_intersection(r335_MosaicWidthMask(), r335_FolderBody(0)));
                            return void 0;
                        });
                        r271_xn$createAndSaveGlyphImpl$2Lrc3c(r324_MangleName('folderRight'), r324_MangleUnicode(129978), function () {
                            var _r359_t1;
                            var _r359_t0 = this;
                            var r359_currentGlyph = _r359_t0;
                            r359_currentGlyph.setWidth(r321_MosaicWidth);
                            r359_currentGlyph.include(r271_intersection(r335_MosaicWidthMask(), r335_FolderBody(-r321_MosaicWidth)));
                            return void 0;
                        });
                        var r335_PointingHandBody = function (r362_xOffset) {
                            var _r362_t0, _r362_t1;
                            return r271_PointingHandShape(r335_BoxN(3), r271_Translate(r362_xOffset, 0), r271_AdviceStroke(4));
                        };
                        r271_xn$createAndSaveGlyphImpl$2Lrc3c(r324_MangleName('pointingHand1'), r324_MangleUnicode(129985), function () {
                            var _r365_t1;
                            var _r365_t0 = this;
                            var r365_currentGlyph = _r365_t0;
                            r365_currentGlyph.setWidth(r321_MosaicWidth);
                            r365_currentGlyph.include(r271_intersection(r335_MosaicWidthMask(), r335_PointingHandBody(0)));
                            return void 0;
                        });
                        r271_xn$createAndSaveGlyphImpl$2Lrc3c(r324_MangleName('pointingHand2'), r324_MangleUnicode(129986), function () {
                            var _r370_t1;
                            var _r370_t0 = this;
                            var r370_currentGlyph = _r370_t0;
                            r370_currentGlyph.setWidth(r321_MosaicWidth);
                            r370_currentGlyph.include(r271_intersection(r335_MosaicWidthMask(), r335_PointingHandBody(-r321_MosaicWidth)));
                            return void 0;
                        });
                        return r271_xn$createAndSaveGlyphImpl$2Lrc3c(r324_MangleName('pointingHand3'), r324_MangleUnicode(129987), function () {
                            var _r375_t1;
                            var _r375_t0 = this;
                            var r375_currentGlyph = _r375_t0;
                            r375_currentGlyph.setWidth(r321_MosaicWidth);
                            r375_currentGlyph.include(r271_intersection(r335_MosaicWidthMask(), r335_PointingHandBody(-r321_MosaicWidth * 2)));
                            return void 0;
                        });
                    }());
                    (function () {
                        var r379_scaffold = {};
                        r379_scaffold.top = r271_uiFigTop;
                        r379_scaffold.bot = r271_uiFigBot;
                        r379_scaffold.xMiddle = r321_MosaicWidth / 2;
                        r379_scaffold.headSize = (r271_uiFigTop - r271_uiFigBot) / 2.5;
                        r379_scaffold.legSize = (r271_Middle - r271_SB) * 2;
                        r379_scaffold.armSize = (r271_Middle - r271_SB / 2) * 2;
                        r379_scaffold.stroke = r271_AdviceStroke(3.5);
                        r379_scaffold.armRaiseK = 0.4;
                        r379_scaffold.yPelvis = r379_scaffold.bot + r379_scaffold.legSize / 2;
                        r379_scaffold.xLeftFoot = r379_scaffold.xMiddle - r379_scaffold.legSize / 2;
                        r379_scaffold.xRightFoot = r379_scaffold.xMiddle + r379_scaffold.legSize / 2;
                        r379_scaffold.yNeck = r379_scaffold.top - r379_scaffold.headSize;
                        r379_scaffold.xLeftHead = r379_scaffold.xMiddle - r379_scaffold.headSize / 2;
                        r379_scaffold.xRightHead = r379_scaffold.xMiddle + r379_scaffold.headSize / 2;
                        r379_scaffold.xLeftArm = r379_scaffold.xMiddle - r379_scaffold.armSize / 2;
                        r379_scaffold.xRightArm = r379_scaffold.xMiddle + r379_scaffold.armSize / 2;
                        r379_scaffold.yShoulder = function (r380_p) {
                            var _r380_t0, _r380_t1;
                            return r1_mix(r379_scaffold.yPelvis, r379_scaffold.yNeck, r380_p);
                        };
                        var r379_StickManHead = function () {
                            var _r381_t0, _r381_t1;
                            return r271_OShape(r379_scaffold.top - r271_O, r379_scaffold.yNeck + r271_O, r379_scaffold.xLeftHead + r271_O, r379_scaffold.xRightHead - r271_O, r379_scaffold.stroke);
                        };
                        var r379_StickManArms = function (r382_p, r382_kl, r382_kr) {
                            var _r382_t0, _r382_t1;
                            return r271_union(r271_dispiro(r271_widths.center(r379_scaffold.stroke), r271_corner(r379_scaffold.xMiddle, r379_scaffold.yShoulder(r382_p)), r271_corner(r379_scaffold.xLeftArm, r379_scaffold.yShoulder(r382_p) + r379_scaffold.armSize / 2 * r382_kl)), r271_dispiro(r271_widths.center(r379_scaffold.stroke), r271_corner(r379_scaffold.xMiddle, r379_scaffold.yShoulder(r382_p)), r271_corner(r379_scaffold.xRightArm, r379_scaffold.yShoulder(r382_p) + r379_scaffold.armSize / 2 * r382_kr)));
                        };
                        var r379_StickManBody = function (r383_kl, r383_kr) {
                            var _r383_t0, _r383_t1;
                            return function () {
                                var _r385_t1;
                                var _r385_t0 = this;
                                var r385_currentGlyph = _r385_t0;
                                r385_currentGlyph.include(r379_StickManHead());
                                r385_currentGlyph.include(r271_VBar.m(r379_scaffold.xMiddle, r379_scaffold.yPelvis, r379_scaffold.yNeck));
                                r385_currentGlyph.include(r271_dispiro(r271_widths.center(r379_scaffold.stroke), r271_corner(r379_scaffold.xMiddle, r379_scaffold.yPelvis), r271_corner(r379_scaffold.xLeftFoot, r379_scaffold.bot)));
                                r385_currentGlyph.include(r271_dispiro(r271_widths.center(r379_scaffold.stroke), r271_corner(r379_scaffold.xMiddle, r379_scaffold.yPelvis), r271_corner(r379_scaffold.xRightFoot, r379_scaffold.bot)));
                                r385_currentGlyph.include(r379_StickManArms(0.6, r383_kl, r383_kr));
                                return void 0;
                            };
                        };
                        var r379_StickManDressBody = function (r391_kl, r391_kr) {
                            var _r391_t0, _r391_t1;
                            return function () {
                                var _r393_t1;
                                var _r393_t0 = this;
                                var r393_currentGlyph = _r393_t0;
                                r393_currentGlyph.include(r271_OShape(r379_scaffold.top - r271_O, r379_scaffold.yNeck + r271_O, r379_scaffold.xLeftHead + r271_O, r379_scaffold.xRightHead - r271_O, r379_scaffold.stroke));
                                var r393_p = 0.7;
                                var r393_dressBottom = r1_mix(r379_scaffold.bot, r379_scaffold.yNeck, 0.25) - r379_scaffold.stroke / 2;
                                var r393_dressLeft = r379_scaffold.xLeftFoot - r379_scaffold.stroke / 2;
                                var r393_dressRight = r379_scaffold.xRightFoot + r379_scaffold.stroke / 2;
                                r393_currentGlyph.include(r379_StickManArms(r393_p, r391_kl, r391_kr));
                                r393_currentGlyph.include(r271_VBar.m(r379_scaffold.xMiddle, r379_scaffold.yShoulder(r393_p), r379_scaffold.yNeck));
                                r393_currentGlyph.include(r271_intersection(r271_xn$spirooutline$1aao(r271_corner(r379_scaffold.xMiddle, r379_scaffold.yShoulder(r393_p) + r379_scaffold.stroke), r271_corner(r393_dressRight, r393_dressBottom), r271_corner(r393_dressLeft, r393_dressBottom)), r271_union(r271_dispiro(r271_widths.rhs(r379_scaffold.stroke), r271_corner(r379_scaffold.xMiddle, r379_scaffold.yShoulder(r393_p) + r379_scaffold.stroke), r271_corner(r393_dressRight, r393_dressBottom)), r271_dispiro(r271_widths.rhs(r379_scaffold.stroke), r271_corner(r393_dressRight, r393_dressBottom), r271_corner(r393_dressLeft, r393_dressBottom)), r271_dispiro(r271_widths.rhs(r379_scaffold.stroke), r271_corner(r393_dressLeft, r393_dressBottom), r271_corner(r379_scaffold.xMiddle, r379_scaffold.yShoulder(r393_p) + r379_scaffold.stroke)))));
                                r393_currentGlyph.include(r271_VBar.m(r1_mix(r393_dressLeft, r393_dressRight, 0.3), r379_scaffold.bot, r393_dressBottom - r271_O, r379_scaffold.stroke));
                                r393_currentGlyph.include(r271_VBar.m(r1_mix(r393_dressLeft, r393_dressRight, 0.7), r379_scaffold.bot, r393_dressBottom - r271_O, r379_scaffold.stroke));
                                return void 0;
                            };
                        };
                        r271_xn$createAndSaveGlyphImpl$2Lrc3c(r324_MangleName('stickMan'), r324_MangleUnicode(129989), function () {
                            var _r402_t1;
                            var _r402_t0 = this;
                            var r402_currentGlyph = _r402_t0;
                            r402_currentGlyph.setWidth(r321_MosaicWidth);
                            r402_currentGlyph.include(r379_StickManBody(0, 0));
                            return void 0;
                        });
                        r271_xn$createAndSaveGlyphImpl$2Lrc3c(r324_MangleName('stickManArmsRaised'), r324_MangleUnicode(129990), function () {
                            var _r407_t1;
                            var _r407_t0 = this;
                            var r407_currentGlyph = _r407_t0;
                            r407_currentGlyph.setWidth(r321_MosaicWidth);
                            r407_currentGlyph.include(r379_StickManBody(r379_scaffold.armRaiseK, r379_scaffold.armRaiseK));
                            return void 0;
                        });
                        r271_xn$createAndSaveGlyphImpl$2Lrc3c(r324_MangleName('stickManLeaningLeft'), r324_MangleUnicode(129991), function () {
                            var _r412_t1;
                            var _r412_t0 = this;
                            var r412_currentGlyph = _r412_t0;
                            r412_currentGlyph.setWidth(r321_MosaicWidth);
                            r412_currentGlyph.include(r379_StickManBody(-r379_scaffold.armRaiseK, r379_scaffold.armRaiseK));
                            return void 0;
                        });
                        r271_xn$createAndSaveGlyphImpl$2Lrc3c(r324_MangleName('stickManLeaningRight'), r324_MangleUnicode(129992), function () {
                            var _r417_t1;
                            var _r417_t0 = this;
                            var r417_currentGlyph = _r417_t0;
                            r417_currentGlyph.setWidth(r321_MosaicWidth);
                            r417_currentGlyph.include(r379_StickManBody(r379_scaffold.armRaiseK, -r379_scaffold.armRaiseK));
                            return void 0;
                        });
                        return r271_xn$createAndSaveGlyphImpl$2Lrc3c(r324_MangleName('stickManWithDress'), r324_MangleUnicode(129993), function () {
                            var _r422_t1;
                            var _r422_t0 = this;
                            var r422_currentGlyph = _r422_t0;
                            r422_currentGlyph.setWidth(r321_MosaicWidth);
                            r422_currentGlyph.include(r379_StickManDressBody(0, 0));
                            return void 0;
                        });
                    }());
                    (function () {
                        var r426_scaffold = {};
                        r426_scaffold.top = r1_mix(r271_uiFigBot, r271_uiFigTop, 0.85);
                        r426_scaffold.bot = r1_mix(r271_uiFigBot, r271_uiFigTop, 0.15);
                        r426_scaffold.slope = 0.6;
                        r426_scaffold.width = (r271_Middle - r271_SB) * 2 * Math.pow(r321_MosaicWidth / r271_Width, 0.5);
                        r426_scaffold.stroke = r271_AdviceStroke(3.5);
                        r426_scaffold.xMiddle = r321_MosaicWidth / 2;
                        r426_scaffold.xLeft = r426_scaffold.xMiddle - r426_scaffold.width / 2;
                        r426_scaffold.xRight = r426_scaffold.xMiddle + r426_scaffold.width / 2;
                        r426_scaffold.xLeft2 = r426_scaffold.xMiddle - r426_scaffold.width;
                        r426_scaffold.xRight2 = r426_scaffold.xMiddle + r426_scaffold.width;
                        r426_scaffold.slopeRise = r426_scaffold.slope * r426_scaffold.width / 2;
                        var r426_ChevronUpperHalf = function (r427_flat) {
                            var _r427_t0, _r427_t1;
                            return r271_intersection(r271_xn$spirooutline$1aao(r271_corner(r426_scaffold.xMiddle, r426_scaffold.top), r271_corner(r426_scaffold.xLeft, r426_scaffold.top - r426_scaffold.slopeRise), r271_corner(r426_scaffold.xLeft, r426_scaffold.bot + r426_scaffold.stroke), r427_flat ? [] : [r271_corner(r426_scaffold.xMiddle, r426_scaffold.bot + r426_scaffold.stroke + r426_scaffold.slopeRise)], r271_corner(r426_scaffold.xRight, r426_scaffold.bot + r426_scaffold.stroke), r271_corner(r426_scaffold.xRight, r426_scaffold.top - r426_scaffold.slopeRise)), r271_union(r271_VBar.l(r426_scaffold.xLeft, r426_scaffold.bot, r426_scaffold.top, r426_scaffold.stroke), r271_VBar.r(r426_scaffold.xRight, r426_scaffold.bot, r426_scaffold.top, r426_scaffold.stroke), r271_dispiro(r271_widths.lhs(r426_scaffold.stroke), r271_corner(r426_scaffold.xMiddle, r426_scaffold.top), r271_corner(r426_scaffold.xLeft, r426_scaffold.top - r426_scaffold.slopeRise)), r271_dispiro(r271_widths.rhs(r426_scaffold.stroke), r271_corner(r426_scaffold.xMiddle, r426_scaffold.top), r271_corner(r426_scaffold.xRight, r426_scaffold.top - r426_scaffold.slopeRise))));
                        };
                        r271_xn$createAndSaveGlyphImpl$2Lrc3c(r324_MangleName('upPointingChevron'), r324_MangleUnicode(129994), function () {
                            var _r430_t1;
                            var _r430_t0 = this;
                            var r430_currentGlyph = _r430_t0;
                            r430_currentGlyph.setWidth(r321_MosaicWidth);
                            r430_currentGlyph.include(r426_ChevronUpperHalf(false));
                            r430_currentGlyph.include(r271_intersection(r271_xn$spirooutline$1aao(r271_corner(r426_scaffold.xLeft, r426_scaffold.top), r271_corner(r426_scaffold.xLeft, r426_scaffold.bot - r426_scaffold.stroke), r271_corner(r426_scaffold.xRight, r426_scaffold.bot - r426_scaffold.stroke), r271_corner(r426_scaffold.xRight, r426_scaffold.top)), r271_union(r271_dispiro(r271_widths.lhs(r426_scaffold.stroke), r271_corner(r426_scaffold.xMiddle, r426_scaffold.bot + r426_scaffold.slopeRise + r426_scaffold.stroke), r271_corner(r426_scaffold.xLeft2, r426_scaffold.bot - r426_scaffold.slopeRise + r426_scaffold.stroke)), r271_dispiro(r271_widths.rhs(r426_scaffold.stroke), r271_corner(r426_scaffold.xMiddle, r426_scaffold.bot + r426_scaffold.slopeRise + r426_scaffold.stroke), r271_corner(r426_scaffold.xRight2, r426_scaffold.bot - r426_scaffold.slopeRise + r426_scaffold.stroke)))));
                            return void 0;
                        });
                        return r271_xn$createAndSaveGlyphImpl$2Lrc3c(r324_MangleName('upPointingHouse'), r324_MangleUnicode(8962), function () {
                            var _r436_t1;
                            var _r436_t0 = this;
                            var r436_currentGlyph = _r436_t0;
                            r436_currentGlyph.setWidth(r321_MosaicWidth);
                            r436_currentGlyph.include(r426_ChevronUpperHalf(true));
                            r436_currentGlyph.include(r271_HBar.b(r426_scaffold.xLeft, r426_scaffold.xRight, r426_scaffold.stroke));
                            return void 0;
                        });
                    }());
                    (function () {
                        var r441_scaffold = {};
                        r441_scaffold.gap = r271_Width / 16;
                        r441_scaffold.stroke = r271_AdviceStroke(2) / 2;
                        r441_scaffold.top = r1_mix(r271_uiFigBot, r271_uiFigTop, 0.9) - r441_scaffold.stroke;
                        r441_scaffold.mid = r1_mix(r271_uiFigBot, r271_uiFigTop, 0.5);
                        r441_scaffold.bot = r1_mix(r271_uiFigBot, r271_uiFigTop, 0.1) + r441_scaffold.stroke;
                        r441_scaffold.width = (r271_Middle - r271_SB) * 2 * Math.pow(r321_MosaicWidth / r271_Width, 0.5);
                        r441_scaffold.left = r321_MosaicWidth / 2 - r441_scaffold.width / 2 + r441_scaffold.stroke / 2;
                        r441_scaffold.right = r321_MosaicWidth / 2 + r441_scaffold.width / 2 - r441_scaffold.stroke / 2;
                        var r441_StrokeV = function (r442_x, r442_yt, r442_yb) {
                            var _r442_t0, _r442_t1;
                            return r271_xn$spirooutline$1aao(r271_corner(r442_x, r442_yt - r441_scaffold.gap), r271_corner(r442_x + r441_scaffold.stroke, r442_yt - r441_scaffold.gap - r441_scaffold.stroke), r271_corner(r442_x + r441_scaffold.stroke, r442_yb + r441_scaffold.gap + r441_scaffold.stroke), r271_corner(r442_x, r442_yb + r441_scaffold.gap), r271_corner(r442_x - r441_scaffold.stroke, r442_yb + r441_scaffold.gap + r441_scaffold.stroke), r271_corner(r442_x - r441_scaffold.stroke, r442_yt - r441_scaffold.gap - r441_scaffold.stroke));
                        };
                        var r441_StrokeH = function (r443_xl, r443_xr, r443_y, r443_s) {
                            var _r443_t0, _r443_t1;
                            return r271_xn$spirooutline$1aao(r271_corner(r443_xl + r441_scaffold.gap, r443_y), r271_corner(r443_xl + r441_scaffold.gap + r441_scaffold.stroke, r443_y + r441_scaffold.stroke), r271_corner(r443_xr - r441_scaffold.gap - r441_scaffold.stroke, r443_y + r441_scaffold.stroke), r271_corner(r443_xr - r441_scaffold.gap, r443_y), r271_corner(r443_xr - r441_scaffold.gap - r441_scaffold.stroke, r443_y - r441_scaffold.stroke), r271_corner(r443_xl + r441_scaffold.gap + r441_scaffold.stroke, r443_y - r441_scaffold.stroke));
                        };
                        var r441_SegmentedDigit = function (r444_unicode, r444_a, r444_b, r444_c, r444_d, r444_e, r444_f, r444_g) {
                            var _r444_t0, _r444_t1;
                            return r271_xn$createAndSaveGlyphImpl$2Lrc3c(r324_MangleName(r271_NameUni(r444_unicode)), r324_MangleUnicode(r444_unicode), function () {
                                var _r447_t1;
                                var _r447_t0 = this;
                                var r447_currentGlyph = _r447_t0;
                                r447_currentGlyph.setWidth(r321_MosaicWidth);
                                if (r444_a)
                                    r447_currentGlyph.include(r441_StrokeH(r441_scaffold.left, r441_scaffold.right, r441_scaffold.top));
                                if (r444_b)
                                    r447_currentGlyph.include(r441_StrokeV(r441_scaffold.left, r441_scaffold.top, r441_scaffold.mid));
                                if (r444_c)
                                    r447_currentGlyph.include(r441_StrokeV(r441_scaffold.right, r441_scaffold.top, r441_scaffold.mid));
                                if (r444_d)
                                    r447_currentGlyph.include(r441_StrokeH(r441_scaffold.left, r441_scaffold.right, r441_scaffold.mid));
                                if (r444_e)
                                    r447_currentGlyph.include(r441_StrokeV(r441_scaffold.left, r441_scaffold.mid, r441_scaffold.bot));
                                if (r444_f)
                                    r447_currentGlyph.include(r441_StrokeV(r441_scaffold.right, r441_scaffold.mid, r441_scaffold.bot));
                                if (r444_g)
                                    r447_currentGlyph.include(r441_StrokeH(r441_scaffold.left, r441_scaffold.right, r441_scaffold.bot));
                                return void 0;
                            });
                        };
                        r441_SegmentedDigit(130032, 1, 1, 1, 0, 1, 1, 1);
                        r441_SegmentedDigit(130033, 0, 0, 1, 0, 0, 1, 0);
                        r441_SegmentedDigit(130034, 1, 0, 1, 1, 1, 0, 1);
                        r441_SegmentedDigit(130035, 1, 0, 1, 1, 0, 1, 1);
                        r441_SegmentedDigit(130036, 0, 1, 1, 1, 0, 1, 0);
                        r441_SegmentedDigit(130037, 1, 1, 0, 1, 0, 1, 1);
                        r441_SegmentedDigit(130038, 1, 1, 0, 1, 1, 1, 1);
                        r441_SegmentedDigit(130039, 1, 1, 1, 0, 0, 1, 0);
                        r441_SegmentedDigit(130040, 1, 1, 1, 1, 1, 1, 1);
                        return r441_SegmentedDigit(130041, 1, 1, 1, 1, 0, 1, 1);
                    }());
                    return function () {
                        return r271_xn$createAndSaveGlyphImpl$2Lrc3c(r324_MangleName('voidedGreekCross'), r324_MangleUnicode(129979), function () {
                            var _r460_t1;
                            var _r460_t0 = this;
                            var r460_currentGlyph = _r460_t0;
                            r460_currentGlyph.setWidth(r321_MosaicWidth);
                            var r460_sw = r271_AdviceStroke(4);
                            var r460_gap = Math.max(r271_Width / 8, r271_Width / 6 - r460_sw / 2, r271_AdviceStroke(3) - r460_sw / 2) / 2;
                            var r460_mid = r321_MosaicWidth / 2;
                            var r460_size = Math.min(r321_MosaicWidth - r271_SB * 2, r271_uiFigTop - r271_uiFigBot) / 2;
                            r460_currentGlyph.include(r271_union(r271_VBar.r(r460_mid - r460_gap, r271_SymbolMid + r460_gap, r271_SymbolMid + r460_size, r460_sw), r271_VBar.r(r460_mid - r460_gap, r271_SymbolMid - r460_gap, r271_SymbolMid - r460_size, r460_sw), r271_VBar.l(r460_mid + r460_gap, r271_SymbolMid + r460_gap, r271_SymbolMid + r460_size, r460_sw), r271_VBar.l(r460_mid + r460_gap, r271_SymbolMid - r460_gap, r271_SymbolMid - r460_size, r460_sw), r271_HBar.b(r460_mid - r460_size, r460_mid - r460_gap, r271_SymbolMid + r460_gap, r460_sw), r271_HBar.b(r460_mid + r460_size, r460_mid + r460_gap, r271_SymbolMid + r460_gap, r460_sw), r271_HBar.t(r460_mid - r460_size, r460_mid - r460_gap, r271_SymbolMid - r460_gap, r460_sw), r271_HBar.t(r460_mid + r460_size, r460_mid + r460_gap, r271_SymbolMid - r460_gap, r460_sw)));
                            return void 0;
                        });
                    }();
                }());
                _r321_t5 = _r321_t2 = _r321_t2 + 1;
                _r321_t4 = _r321_t2 < _r321_t1;
            }
            return _r321_t5;
        }();
    });
    return void 0;
});
