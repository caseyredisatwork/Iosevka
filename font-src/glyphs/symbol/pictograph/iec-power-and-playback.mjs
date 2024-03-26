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
    r269_xn$Capture_Ext$2Lrc2b['$defineGlyphBlockImpl$'](r269_xn$Capture_Ext$2Lrc2b, 'Symbol-Pictograph-IEC-Power-And-Playback', function (r270_xn$Capture$2Lrc8, r270_xn$ExportCapture$2Lrc4b) {
        var _r270_t4, _r270_t5, _r270_t6, _r270_tag7;
        var _r270_t0 = r270_xn$Capture$2Lrc8;
        var r270_xn$createAndSaveGlyphImpl$2Lrc3c = _r270_t0['$createAndSaveGlyphImpl$'];
        var r270_xn$NamedParameterPair$2Lrc9b = _r270_t0['$NamedParameterPair$'];
        var r270_xn$assignUnicodeImpl$2Lrc8b = _r270_t0['$assignUnicodeImpl$'];
        var r270_xn$execState$2Lrc0b = _r270_t0['$execState$'];
        var r270_DivFrame = _r270_t0.DivFrame;
        var _r270_t1 = r270_xn$Capture$2Lrc8.Metrics;
        var r270_SB = _r270_t1.SB;
        var r270_SymbolMid = _r270_t1.SymbolMid;
        var r270_Translate = _r270_t1.Translate;
        var r270_HVContrast = _r270_t1.HVContrast;
        var r270_O = _r270_t1.O;
        var r270_WideWidth1 = _r270_t1.WideWidth1;
        var r270_AdviceStroke = _r270_t1.AdviceStroke;
        var r270_GeometryStroke = _r270_t1.GeometryStroke;
        var _r270_t2 = r270_xn$Capture$2Lrc8.SpiroFns;
        var r270_corner = _r270_t2.corner;
        var r270_xn$spirooutline$1aao = _r270_t2['spiro-outline'];
        var _r270_t3 = r270_xn$Capture$2Lrc8.BooleFns;
        var r270_union = _r270_t3.union;
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
                    var r276_RingAt = _r276_t0.RingAt;
                    var r276_RingStrokeAt = _r276_t0.RingStrokeAt;
                    var r276_CircleRingAt = _r276_t0.CircleRingAt;
                    var r276_VBar = _r276_t0.VBar;
                    var _r276_t1 = r270_xn$Capture$2Lrc8['Common-Derivatives'].resolve();
                    var r276_xn$referglyph$1aao = _r276_t1['refer-glyph'];
                    var r276_turned = _r276_t1.turned;
                    var r276_leftFW = 0 + r270_SB * r273_MosaicWidthScalar;
                    var r276_rightFW = r273_MosaicWidth - r270_SB * r273_MosaicWidthScalar;
                    var r276_squareRadiusFW = (r276_rightFW - r276_leftFW) / (2 * Math.pow(r273_MosaicWidthScalar, 0.3));
                    var r276_topFW = r270_SymbolMid + r276_squareRadiusFW;
                    var r276_bottomFW = r270_SymbolMid - r276_squareRadiusFW;
                    var r276_df = r270_DivFrame(r273_MosaicWidthScalar);
                    var r276_gap = Math.max(r276_squareRadiusFW / 8 * r273_MosaicWidthScalar, r270_GeometryStroke);
                    r270_xn$createAndSaveGlyphImpl$2Lrc3c(r276_MangleName('powerOff'), r276_MangleUnicode(11096), function () {
                        var _r283_t1;
                        var _r283_t0 = this;
                        var r283_currentGlyph = _r283_t0;
                        r283_currentGlyph.setWidth(r276_df.width);
                        r283_currentGlyph.include(r276_RingStrokeAt(r276_df.middle, r270_SymbolMid, r276_squareRadiusFW, r270_GeometryStroke));
                        return void 0;
                    });
                    r270_xn$createAndSaveGlyphImpl$2Lrc3c(r276_MangleName('powerOn'), r276_MangleUnicode(9213), function () {
                        var _r288_t1;
                        var _r288_t0 = this;
                        var r288_currentGlyph = _r288_t0;
                        r288_currentGlyph.setWidth(r276_df.width);
                        r288_currentGlyph.include(r276_Rect(r270_SymbolMid + r276_squareRadiusFW, r270_SymbolMid - r276_squareRadiusFW, r276_df.middle - r270_GeometryStroke / 2 * r270_HVContrast, r276_df.middle + r270_GeometryStroke / 2 * r270_HVContrast));
                        return void 0;
                    });
                    r270_xn$createAndSaveGlyphImpl$2Lrc3c(r276_MangleName('powerOnOff'), r276_MangleUnicode(9212), function () {
                        var _r293_t1;
                        var _r293_t0 = this;
                        var r293_currentGlyph = _r293_t0;
                        r293_currentGlyph.setWidth(r276_df.width);
                        r293_currentGlyph.include(r276_xn$referglyph$1aao(r276_MangleName('powerOff')));
                        r293_currentGlyph.include(r276_Rect(r270_SymbolMid + r276_squareRadiusFW - r270_GeometryStroke - r276_gap, r270_SymbolMid - r276_squareRadiusFW + r270_GeometryStroke + r276_gap, r276_df.middle - r270_GeometryStroke / 2 * r270_HVContrast, r276_df.middle + r270_GeometryStroke / 2 * r270_HVContrast));
                        return void 0;
                    });
                    r270_xn$createAndSaveGlyphImpl$2Lrc3c(r276_MangleName('powerStandby'), r276_MangleUnicode(9211), function () {
                        var _r299_t1;
                        var _r299_t0 = this;
                        var r299_currentGlyph = _r299_t0;
                        r299_currentGlyph.setWidth(r276_df.width);
                        r299_currentGlyph.include(r270_union(r270_difference(r276_xn$referglyph$1aao(r276_MangleName('powerOff')), r270_xn$spirooutline$1aao(r270_corner(r276_df.middle, r270_SymbolMid), r270_corner(r276_df.middle - r276_gap * 2 - r270_GeometryStroke * r270_HVContrast, r270_SymbolMid + r276_squareRadiusFW * 2), r270_corner(r276_df.middle + r276_gap * 2 + r270_GeometryStroke * r270_HVContrast, r270_SymbolMid + r276_squareRadiusFW * 2))), r276_Rect(r270_SymbolMid + 1.5 * r276_squareRadiusFW, r270_SymbolMid - 0 * r276_squareRadiusFW, r276_df.middle - r270_GeometryStroke / 2 * r270_HVContrast, r276_df.middle + r270_GeometryStroke / 2 * r270_HVContrast)));
                        return void 0;
                    });
                    r270_xn$createAndSaveGlyphImpl$2Lrc3c(r276_MangleName('powerSleep'), r276_MangleUnicode(9214), function () {
                        var _r304_t1;
                        var _r304_t0 = this;
                        var r304_currentGlyph = _r304_t0;
                        r304_currentGlyph.setWidth(r276_df.width);
                        r304_currentGlyph.include(r270_difference(r276_CircleRingAt(r276_df.middle, r270_SymbolMid, r276_squareRadiusFW), r276_CircleRingAt(r276_df.middle + r276_squareRadiusFW * 0.5, r270_SymbolMid + r276_squareRadiusFW * 0.35, r276_squareRadiusFW * 1.1)));
                        r304_currentGlyph.include(r270_Translate(r276_squareRadiusFW * 0.15, 0));
                        return void 0;
                    });
                    r270_xn$createAndSaveGlyphImpl$2Lrc3c(r276_MangleName('playback/record'), r276_MangleUnicode(9210), function () {
                        var _r310_t1;
                        var _r310_t0 = this;
                        var r310_currentGlyph = _r310_t0;
                        r310_currentGlyph.setWidth(r276_df.width);
                        r310_currentGlyph.include(r276_RingAt(r276_df.middle, r270_SymbolMid, r276_squareRadiusFW, r270_GeometryStroke));
                        return void 0;
                    });
                    r270_xn$createAndSaveGlyphImpl$2Lrc3c(r276_MangleName('playback/stop'), r276_MangleUnicode(9209), function () {
                        var _r315_t1;
                        var _r315_t0 = this;
                        var r315_currentGlyph = _r315_t0;
                        r315_currentGlyph.setWidth(r276_df.width);
                        r315_currentGlyph.include(r276_Rect(r270_SymbolMid + r276_squareRadiusFW, r270_SymbolMid - r276_squareRadiusFW, r276_df.middle - r276_squareRadiusFW, r276_df.middle + r276_squareRadiusFW));
                        return void 0;
                    });
                    r270_xn$createAndSaveGlyphImpl$2Lrc3c(r276_MangleName('playback/pause'), r276_MangleUnicode(9208), function () {
                        var _r320_t1;
                        var _r320_t0 = this;
                        var r320_currentGlyph = _r320_t0;
                        r320_currentGlyph.setWidth(r276_df.width);
                        r320_currentGlyph.include(r276_Rect(r270_SymbolMid + r276_squareRadiusFW, r270_SymbolMid - r276_squareRadiusFW, r276_df.middle - r276_squareRadiusFW, r276_df.middle - r276_squareRadiusFW / 3));
                        r320_currentGlyph.include(r276_Rect(r270_SymbolMid + r276_squareRadiusFW, r270_SymbolMid - r276_squareRadiusFW, r276_df.middle + r276_squareRadiusFW / 3, r276_df.middle + r276_squareRadiusFW));
                        return void 0;
                    });
                    var r276_trigRad = r276_squareRadiusFW - r270_O;
                    r270_xn$createAndSaveGlyphImpl$2Lrc3c(r276_MangleName('playback/down'), r276_MangleUnicode(9207), function () {
                        var _r326_t1;
                        var _r326_t0 = this;
                        var r326_currentGlyph = _r326_t0;
                        r326_currentGlyph.setWidth(r276_df.width);
                        r326_currentGlyph.include(r270_xn$spirooutline$1aao(r270_corner(r276_df.middle - r276_trigRad, r270_SymbolMid + r276_trigRad / 2), r270_corner(r276_df.middle + r276_trigRad, r270_SymbolMid + r276_trigRad / 2), r270_corner(r276_df.middle, r270_SymbolMid - r276_trigRad / 2)));
                        return void 0;
                    });
                    r270_xn$createAndSaveGlyphImpl$2Lrc3c(r276_MangleName('playback/up'), r276_MangleUnicode(9206), function () {
                        var _r331_t1;
                        var _r331_t0 = this;
                        var r331_currentGlyph = _r331_t0;
                        r331_currentGlyph.setWidth(r276_df.width);
                        r331_currentGlyph.include(r270_xn$spirooutline$1aao(r270_corner(r276_df.middle - r276_trigRad, r270_SymbolMid - r276_trigRad / 2), r270_corner(r276_df.middle + r276_trigRad, r270_SymbolMid - r276_trigRad / 2), r270_corner(r276_df.middle, r270_SymbolMid + r276_trigRad / 2)));
                        return void 0;
                    });
                    r270_xn$createAndSaveGlyphImpl$2Lrc3c(r276_MangleName('playback/right'), r276_MangleUnicode(9205), function () {
                        var _r336_t1;
                        var _r336_t0 = this;
                        var r336_currentGlyph = _r336_t0;
                        r336_currentGlyph.setWidth(r276_df.width);
                        r336_currentGlyph.include(r270_xn$spirooutline$1aao(r270_corner(r276_df.middle - r276_trigRad / 2, r270_SymbolMid - r276_trigRad), r270_corner(r276_df.middle - r276_trigRad / 2, r270_SymbolMid + r276_trigRad), r270_corner(r276_df.middle + r276_trigRad / 2, r270_SymbolMid)));
                        return void 0;
                    });
                    r270_xn$createAndSaveGlyphImpl$2Lrc3c(r276_MangleName('playback/left'), r276_MangleUnicode(9204), function () {
                        var _r341_t1;
                        var _r341_t0 = this;
                        var r341_currentGlyph = _r341_t0;
                        r341_currentGlyph.setWidth(r276_df.width);
                        r341_currentGlyph.include(r270_xn$spirooutline$1aao(r270_corner(r276_df.middle + r276_trigRad / 2, r270_SymbolMid - r276_trigRad), r270_corner(r276_df.middle + r276_trigRad / 2, r270_SymbolMid + r276_trigRad), r270_corner(r276_df.middle - r276_trigRad / 2, r270_SymbolMid)));
                        return void 0;
                    });
                    r270_xn$createAndSaveGlyphImpl$2Lrc3c(r276_MangleName('playback/eject'), r276_MangleUnicode(9167), function () {
                        var _r346_t1;
                        var _r346_t0 = this;
                        var r346_currentGlyph = _r346_t0;
                        r346_currentGlyph.setWidth(r276_df.width);
                        r346_currentGlyph.include(r276_Rect(r270_SymbolMid - r276_squareRadiusFW / 3, r270_SymbolMid - r276_squareRadiusFW, r276_df.middle - r276_squareRadiusFW, r276_df.middle + r276_squareRadiusFW));
                        r346_currentGlyph.include(r270_xn$spirooutline$1aao(r270_corner(r276_df.middle - r276_trigRad, r270_SymbolMid), r270_corner(r276_df.middle + r276_trigRad, r270_SymbolMid), r270_corner(r276_df.middle, r270_SymbolMid + r276_trigRad)));
                        return void 0;
                    });
                    r270_xn$createAndSaveGlyphImpl$2Lrc3c(r276_MangleName('playback/fastForward'), r276_MangleUnicode(9193), function () {
                        var _r352_t1;
                        var _r352_t0 = this;
                        var r352_currentGlyph = _r352_t0;
                        r352_currentGlyph.setWidth(r276_df.width);
                        r352_currentGlyph.include(r270_xn$spirooutline$1aao(r270_corner(r276_df.middle - r276_trigRad, r270_SymbolMid - r276_trigRad), r270_corner(r276_df.middle - r276_trigRad, r270_SymbolMid + r276_trigRad), r270_corner(r276_df.middle, r270_SymbolMid)));
                        r352_currentGlyph.include(r270_xn$spirooutline$1aao(r270_corner(r276_df.middle, r270_SymbolMid - r276_trigRad), r270_corner(r276_df.middle, r270_SymbolMid + r276_trigRad), r270_corner(r276_df.middle + r276_trigRad, r270_SymbolMid)));
                        return void 0;
                    });
                    r270_xn$createAndSaveGlyphImpl$2Lrc3c(r276_MangleName('playback/fastForwardToEnd'), r276_MangleUnicode(9197), function () {
                        var _r358_t1;
                        var _r358_t0 = this;
                        var r358_currentGlyph = _r358_t0;
                        r358_currentGlyph.setWidth(r276_df.width);
                        var r358_sw = Math.max(r270_AdviceStroke(6 * Math.sqrt(r276_df.div), r276_df.div), r276_trigRad / 6);
                        var r358_swh = r358_sw * r270_HVContrast;
                        r358_currentGlyph.include(r270_xn$spirooutline$1aao(r270_corner(r276_df.middle - r276_trigRad, r270_SymbolMid - r276_trigRad), r270_corner(r276_df.middle - r276_trigRad, r270_SymbolMid + r276_trigRad), r270_corner(r276_df.middle - r358_swh / 2, r270_SymbolMid)));
                        r358_currentGlyph.include(r270_xn$spirooutline$1aao(r270_corner(r276_df.middle - r358_swh / 2, r270_SymbolMid - r276_trigRad), r270_corner(r276_df.middle - r358_swh / 2, r270_SymbolMid + r276_trigRad), r270_corner(r276_df.middle + r276_trigRad - r358_swh, r270_SymbolMid)));
                        r358_currentGlyph.include(r276_VBar.r(r276_df.middle + r276_trigRad, r270_SymbolMid - r276_trigRad, r270_SymbolMid + r276_trigRad, r358_sw));
                        return void 0;
                    });
                    r270_xn$createAndSaveGlyphImpl$2Lrc3c(r276_MangleName('playback/playOrStop'), r276_MangleUnicode(9199), function () {
                        var _r365_t1;
                        var _r365_t0 = this;
                        var r365_currentGlyph = _r365_t0;
                        r365_currentGlyph.setWidth(r276_df.width);
                        var r365_sw = Math.max(r270_AdviceStroke(6 * Math.sqrt(r276_df.div), r276_df.div), r276_trigRad / 6);
                        var r365_swh = r365_sw * r270_HVContrast;
                        var r365_gap = Math.max(r270_AdviceStroke(4 * Math.sqrt(r276_df.div), r276_df.div), r276_trigRad / 4);
                        var r365_width = r276_trigRad + r365_swh * 2 + r365_gap;
                        r365_currentGlyph.include(r270_xn$spirooutline$1aao(r270_corner(r276_df.middle - r365_width / 2, r270_SymbolMid - r276_trigRad), r270_corner(r276_df.middle - r365_width / 2, r270_SymbolMid + r276_trigRad), r270_corner(r276_df.middle - r365_width / 2 + r276_trigRad, r270_SymbolMid)));
                        r365_currentGlyph.include(r276_VBar.r(r276_df.middle + r365_width / 2 - r365_swh - r365_gap, r270_SymbolMid - r276_trigRad, r270_SymbolMid + r276_trigRad, r365_sw));
                        r365_currentGlyph.include(r276_VBar.r(r276_df.middle + r365_width / 2, r270_SymbolMid - r276_trigRad, r270_SymbolMid + r276_trigRad, r365_sw));
                        return void 0;
                    });
                    r270_xn$createAndSaveGlyphImpl$2Lrc3c(r276_MangleName('playback/fastUpward'), r276_MangleUnicode(9195), function () {
                        var _r372_t1;
                        var _r372_t0 = this;
                        var r372_currentGlyph = _r372_t0;
                        r372_currentGlyph.setWidth(r276_df.width);
                        r372_currentGlyph.include(r270_xn$spirooutline$1aao(r270_corner(r276_df.middle - r276_trigRad, r270_SymbolMid - r276_trigRad), r270_corner(r276_df.middle + r276_trigRad, r270_SymbolMid - r276_trigRad), r270_corner(r276_df.middle, r270_SymbolMid)));
                        r372_currentGlyph.include(r270_xn$spirooutline$1aao(r270_corner(r276_df.middle - r276_trigRad, r270_SymbolMid), r270_corner(r276_df.middle + r276_trigRad, r270_SymbolMid), r270_corner(r276_df.middle, r270_SymbolMid + r276_trigRad)));
                        return void 0;
                    });
                    r276_turned(r276_MangleName('playback/fastBackward'), r276_MangleUnicode(9194), r276_MangleName('playback/fastForward'), r276_df.middle, r270_SymbolMid);
                    r276_turned(r276_MangleName('playback/fastBackwardToEnd'), r276_MangleUnicode(9198), r276_MangleName('playback/fastForwardToEnd'), r276_df.middle, r270_SymbolMid);
                    return r276_turned(r276_MangleName('playback/fastDownward'), r276_MangleUnicode(9196), r276_MangleName('playback/fastUpward'), r276_df.middle, r270_SymbolMid);
                }());
                _r273_t5 = _r273_t2 = _r273_t2 + 1;
                _r273_t4 = _r273_t2 < _r273_t1;
            }
            return _r273_t5;
        }();
    });
    return void 0;
});
