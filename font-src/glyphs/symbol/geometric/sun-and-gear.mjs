'use strict';
import * as _s0_t0 from '../../../support/utils.mjs';
import * as _s0_t1 from '../../../meta/aesthetics.mjs';
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
var r1_DesignParameters = _r1_t9.DesignParameters;
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
    r270_xn$Capture_Ext$2Lrc2b['$defineGlyphBlockImpl$'](r270_xn$Capture_Ext$2Lrc2b, 'Symbol-Geometric-Sun-And-Gear', function (r271_xn$Capture$2Lrc8, r271_xn$ExportCapture$2Lrc4b) {
        var _r271_t4, _r271_t5, _r271_t6, _r271_tag7;
        var _r271_t0 = r271_xn$Capture$2Lrc8;
        var r271_xn$createAndSaveGlyphImpl$2Lrc3c = _r271_t0['$createAndSaveGlyphImpl$'];
        var r271_xn$NamedParameterPair$2Lrc9b = _r271_t0['$NamedParameterPair$'];
        var r271_xn$assignUnicodeImpl$2Lrc8b = _r271_t0['$assignUnicodeImpl$'];
        var r271_xn$execState$2Lrc0b = _r271_t0['$execState$'];
        var _r271_t1 = r271_xn$Capture$2Lrc8.Metrics;
        var r271_Width = _r271_t1.Width;
        var r271_WideWidth1 = _r271_t1.WideWidth1;
        var r271_AdviceStroke = _r271_t1.AdviceStroke;
        var _r271_t2 = r271_xn$Capture$2Lrc8.SpiroFns;
        var r271_corner = _r271_t2.corner;
        var r271_widths = _r271_t2.widths;
        var r271_dispiro = _r271_t2.dispiro;
        var _r271_t3 = r271_xn$Capture$2Lrc8.BooleFns;
        return function () {
            var r274_FMosaicWide, r274_MosaicNameSuffix, r274_MosaicWidth, r274_MosaicWidthScalar, _r274_t3, _r274_t5, _r274_t6, _r274_tag7;
            var r274_WidthKinds = [
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
            var _r274_t0 = r274_WidthKinds;
            var _r274_t1 = _r274_t0.length;
            var _r274_t2 = 0;
            var _r274_t4 = _r274_t2 < _r274_t1;
            while (_r274_t4) {
                _r274_t3 = _r274_t0[_r274_t2];
                r274_FMosaicWide = _r274_t3[0];
                r274_MosaicNameSuffix = _r274_t3[1];
                r274_MosaicWidth = _r274_t3[2];
                r274_MosaicWidthScalar = _r274_t3[3];
                (function () {
                    var r277_MosaicDesiredWidth = r271_WideWidth1;
                    var r277_MosaicMiddle = r274_MosaicWidth / 2;
                    var r277_MosaicUnitWidth = r274_MosaicWidth / r274_MosaicWidthScalar;
                    var r277_MangleUnicode = function (r278_unicode, r278__desiredOverride) {
                        var _r278_t0, _r278_t1;
                        return r274_MosaicWidth === (r278__desiredOverride || r277_MosaicDesiredWidth) ? r278_unicode : void 0;
                    };
                    var r277_MangleName = function (r279_name) {
                        var _r279_t0, _r279_t1;
                        return r279_name + r274_MosaicNameSuffix;
                    };
                    var _r277_t0 = r271_xn$Capture$2Lrc8.CommonShapes.resolve();
                    var r277_RingAt = _r277_t0.RingAt;
                    var r277_RingStrokeAt = _r277_t0.RingStrokeAt;
                    var _r277_t1 = r271_xn$Capture$2Lrc8['Common-Derivatives'].resolve();
                    var _r277_t2 = r271_xn$Capture$2Lrc8['Symbol-Geometric-Shared'].resolve();
                    var r277_GeometricDim = _r277_t2.GeometricDim;
                    var r277_UnicodeWeightGrade = _r277_t2.UnicodeWeightGrade;
                    var r277_GeometricSizes = _r277_t2.GeometricSizes;
                    var r277_Geom = r277_GeometricDim(r277_MosaicUnitWidth, r274_MosaicWidth);
                    var r277_Size = r277_GeometricSizes(r277_Geom);
                    var r277_EightPointingRaysShape = function (r283_r) {
                        var _r283_t0, _r283_t1;
                        return function () {
                            var r285_theta, r285_c, r285_s, _r285_t3;
                            var _r285_t2 = this;
                            var r285_currentGlyph = _r285_t2;
                            var _r285_t0 = 0;
                            var _r285_t1 = 8;
                            var r285_n = _r285_t0;
                            while (r285_n < _r285_t1) {
                                r285_theta = r285_n / 8 * Math.PI * 2;
                                r285_c = Math.cos(r285_theta);
                                r285_s = Math.sin(r285_theta);
                                r285_currentGlyph.include(r271_dispiro(r271_widths.center(r277_rayWidth), r271_corner(r277_Geom.MidX + r285_c * r283_r, r277_Geom.MidY + r285_s * r283_r), r271_corner(r277_Geom.MidX + r285_c * r277_Geom.Size, r277_Geom.MidY + r285_s * r277_Geom.Size)));
                                r285_n = r285_n + 1;
                            }
                            return void 0;
                        };
                    };
                    var r277_rayWidth = r271_AdviceStroke(8, Math.sqrt(r277_Geom.Scalar));
                    var r277_rayInnerRadius = r277_Geom.Size * 0.56;
                    var r277_dotRadius = r277_Geom.Size * 0.44;
                    r271_xn$createAndSaveGlyphImpl$2Lrc3c(r277_MangleName('blackSunWithRays'), r277_MangleUnicode(9728), function () {
                        var _r291_t1;
                        var _r291_t0 = this;
                        var r291_currentGlyph = _r291_t0;
                        r291_currentGlyph.setWidth(r277_Geom.Width);
                        r291_currentGlyph.include(r277_EightPointingRaysShape(r277_rayInnerRadius));
                        r291_currentGlyph.include(r277_RingAt(r277_Geom.MidX, r277_Geom.MidY, r277_dotRadius));
                        return void 0;
                    });
                    r271_xn$createAndSaveGlyphImpl$2Lrc3c(r277_MangleName('whiteSunWithRays'), r277_MangleUnicode(9788), function () {
                        var _r297_t1;
                        var _r297_t0 = this;
                        var r297_currentGlyph = _r297_t0;
                        r297_currentGlyph.setWidth(r277_Geom.Width);
                        r297_currentGlyph.include(r277_EightPointingRaysShape(r277_rayInnerRadius));
                        r297_currentGlyph.include(r277_RingStrokeAt(r277_Geom.MidX, r277_Geom.MidY, r277_dotRadius, r277_rayWidth));
                        return void 0;
                    });
                    r271_xn$createAndSaveGlyphImpl$2Lrc3c(r277_MangleName('gear'), r277_MangleUnicode(9881), function () {
                        var _r303_t1;
                        var _r303_t0 = this;
                        var r303_currentGlyph = _r303_t0;
                        r303_currentGlyph.setWidth(r277_Geom.Width);
                        var r303_gearRingRad = r1_mix(r277_rayInnerRadius, r277_Geom.Size, 0.4);
                        r303_currentGlyph.include(r277_EightPointingRaysShape(r303_gearRingRad - r277_rayWidth / 2));
                        r303_currentGlyph.include(r277_RingStrokeAt(r277_Geom.MidX, r277_Geom.MidY, r303_gearRingRad, r277_rayWidth));
                        r303_currentGlyph.include(r277_RingAt(r277_Geom.MidX, r277_Geom.MidY, 0.4 * (r303_gearRingRad - r277_rayWidth)));
                        return void 0;
                    });
                    return r271_xn$createAndSaveGlyphImpl$2Lrc3c(r277_MangleName('helm'), r277_MangleUnicode(9096), function () {
                        var _r310_t1;
                        var _r310_t0 = this;
                        var r310_currentGlyph = _r310_t0;
                        r310_currentGlyph.setWidth(r277_Geom.Width);
                        var r310_gearRingRad = r1_mix(r277_rayInnerRadius, r277_Geom.Size, 0.4);
                        r310_currentGlyph.include(r277_EightPointingRaysShape(0));
                        r310_currentGlyph.include(r277_RingStrokeAt(r277_Geom.MidX, r277_Geom.MidY, r310_gearRingRad, r277_rayWidth));
                        r310_currentGlyph.include(r277_RingAt(r277_Geom.MidX, r277_Geom.MidY, 1.1 * r277_rayWidth));
                        return void 0;
                    });
                }());
                _r274_t5 = _r274_t2 = _r274_t2 + 1;
                _r274_t4 = _r274_t2 < _r274_t1;
            }
            return _r274_t5;
        }();
    });
    return void 0;
});
