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
    r270_xn$Capture_Ext$2Lrc2b['$defineGlyphBlockImpl$'](r270_xn$Capture_Ext$2Lrc2b, 'Symbol-Geometric-Shaded', function (r271_xn$Capture$2Lrc8, r271_xn$ExportCapture$2Lrc4b) {
        var _r271_t4, _r271_t5, _r271_t6, _r271_tag7;
        var _r271_t0 = r271_xn$Capture$2Lrc8;
        var r271_xn$createAndSaveGlyphImpl$2Lrc3c = _r271_t0['$createAndSaveGlyphImpl$'];
        var r271_xn$NamedParameterPair$2Lrc9b = _r271_t0['$NamedParameterPair$'];
        var r271_xn$assignUnicodeImpl$2Lrc8b = _r271_t0['$assignUnicodeImpl$'];
        var r271_xn$execState$2Lrc0b = _r271_t0['$execState$'];
        var _r271_t1 = r271_xn$Capture$2Lrc8.Metrics;
        var r271_Width = _r271_t1.Width;
        var r271_Downward = _r271_t1.Downward;
        var r271_Rightward = _r271_t1.Rightward;
        var r271_WideWidth1 = _r271_t1.WideWidth1;
        var r271_AdviceStroke = _r271_t1.AdviceStroke;
        var r271_GeometryStroke = _r271_t1.GeometryStroke;
        var _r271_t2 = r271_xn$Capture$2Lrc8.SpiroFns;
        var r271_flat = _r271_t2.flat;
        var r271_curl = _r271_t2.curl;
        var r271_widths = _r271_t2.widths;
        var r271_heading = _r271_t2.heading;
        var r271_dispiro = _r271_t2.dispiro;
        var _r271_t3 = r271_xn$Capture$2Lrc8.BooleFns;
        var r271_union = _r271_t3.union;
        var r271_intersection = _r271_t3.intersection;
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
                    var r277_VBar = _r277_t0.VBar;
                    var r277_ExtLineCenter = _r277_t0.ExtLineCenter;
                    var _r277_t1 = r271_xn$Capture$2Lrc8['Common-Derivatives'].resolve();
                    var r277_xn$referglyph$1aao = _r277_t1['refer-glyph'];
                    var _r277_t2 = r271_xn$Capture$2Lrc8['Symbol-Geometric-Shared'].resolve();
                    var r277_GeometricDim = _r277_t2.GeometricDim;
                    var r277_UnicodeWeightGrade = _r277_t2.UnicodeWeightGrade;
                    var r277_GeometricSizes = _r277_t2.GeometricSizes;
                    var r277_Geom = r277_GeometricDim(r277_MosaicUnitWidth, r274_MosaicWidth);
                    var r277_Size = r277_GeometricSizes(r277_Geom);
                    var r277_HShadeShape = function () {
                        var _r283_t0, _r283_t1;
                        var r283_lineWidth = Math.min(r271_GeometryStroke, (r277_Geom.Size * 2 - r271_GeometryStroke * 2) * 1 / 11);
                        var r283_top = r277_Geom.MidY + r277_Geom.Size - r271_GeometryStroke + r283_lineWidth / 2;
                        var r283_bot = r277_Geom.MidY - (r283_top - r277_Geom.MidY);
                        return r271_union(r271_dispiro(r271_widths.center(r283_lineWidth), r271_flat(r277_Geom.Left, r1_mix(r283_top, r283_bot, 0.25), r271_heading(r271_Rightward)), r271_curl(r277_Geom.Right, r1_mix(r283_top, r283_bot, 0.25), r271_heading(r271_Rightward))), r271_dispiro(r271_widths.center(r283_lineWidth), r271_flat(r277_Geom.Left, r1_mix(r283_top, r283_bot, 0.5), r271_heading(r271_Rightward)), r271_curl(r277_Geom.Right, r1_mix(r283_top, r283_bot, 0.5), r271_heading(r271_Rightward))), r271_dispiro(r271_widths.center(r283_lineWidth), r271_flat(r277_Geom.Left, r1_mix(r283_top, r283_bot, 0.75), r271_heading(r271_Rightward)), r271_curl(r277_Geom.Right, r1_mix(r283_top, r283_bot, 0.75), r271_heading(r271_Rightward))));
                    };
                    r271_xn$createAndSaveGlyphImpl$2Lrc3c(r277_MangleName('hShadeSquare'), r277_MangleUnicode(9636), function () {
                        var _r286_t1;
                        var _r286_t0 = this;
                        var r286_currentGlyph = _r286_t0;
                        r286_currentGlyph.setWidth(r277_Geom.Width);
                        r286_currentGlyph.include(r271_union(r277_xn$referglyph$1aao(r277_MangleName('whiteSquare')), r271_intersection(r277_xn$referglyph$1aao(r277_MangleName('blackSquare')), r277_HShadeShape())));
                        return void 0;
                    });
                    var r277_VShadeShape = function () {
                        var _r289_t0, _r289_t1;
                        var r289_lineWidth = Math.min(r271_GeometryStroke, (r277_Geom.Size * 2 - r271_GeometryStroke * 2) * 1 / 11);
                        var r289_r = r277_Geom.Width / 2 + r277_Geom.Size - r271_GeometryStroke + r289_lineWidth / 2;
                        var r289_l = r277_Geom.Width / 2 - (r289_r - r277_Geom.Width / 2);
                        return r271_union(r271_dispiro(r271_widths.center(r289_lineWidth), r271_flat(r1_mix(r289_l, r289_r, 0.25), r277_Geom.Top, r271_heading(r271_Downward)), r271_curl(r1_mix(r289_l, r289_r, 0.25), r277_Geom.Bot, r271_heading(r271_Downward))), r271_dispiro(r271_widths.center(r289_lineWidth), r271_flat(r1_mix(r289_l, r289_r, 0.5), r277_Geom.Top, r271_heading(r271_Downward)), r271_curl(r1_mix(r289_l, r289_r, 0.5), r277_Geom.Bot, r271_heading(r271_Downward))), r271_dispiro(r271_widths.center(r289_lineWidth), r271_flat(r1_mix(r289_l, r289_r, 0.75), r277_Geom.Top, r271_heading(r271_Downward)), r271_curl(r1_mix(r289_l, r289_r, 0.75), r277_Geom.Bot, r271_heading(r271_Downward))));
                    };
                    r277_VBar.mShadeShape = function () {
                        var _r290_t0, _r290_t1;
                        var r290_lineWidth = Math.min(r271_GeometryStroke, r271_AdviceStroke(5, r277_Geom.Scalar));
                        var r290_r = r277_Geom.Width / 2 + r277_Geom.Size - r271_GeometryStroke + r290_lineWidth / 2;
                        var r290_l = r277_Geom.Width / 2 - (r290_r - r277_Geom.Width / 2);
                        return r271_union(r271_dispiro(r271_widths.center(r290_lineWidth), r271_flat(r1_mix(r290_l, r290_r, 0.5), r277_Geom.Top, r271_heading(r271_Downward)), r271_curl(r1_mix(r290_l, r290_r, 0.5), r277_Geom.Bot, r271_heading(r271_Downward))));
                    };
                    r271_xn$createAndSaveGlyphImpl$2Lrc3c(r277_MangleName('vShadeSquare'), r277_MangleUnicode(9637), function () {
                        var _r293_t1;
                        var _r293_t0 = this;
                        var r293_currentGlyph = _r293_t0;
                        r293_currentGlyph.setWidth(r277_Geom.Width);
                        r293_currentGlyph.include(r271_union(r277_xn$referglyph$1aao(r277_MangleName('whiteSquare')), r271_intersection(r277_xn$referglyph$1aao(r277_MangleName('blackSquare')), r277_VShadeShape())));
                        return void 0;
                    });
                    r271_xn$createAndSaveGlyphImpl$2Lrc3c(r277_MangleName('vBarSquare'), r277_MangleUnicode(9707), function () {
                        var _r298_t1;
                        var _r298_t0 = this;
                        var r298_currentGlyph = _r298_t0;
                        r298_currentGlyph.setWidth(r277_Geom.Width);
                        r298_currentGlyph.include(r271_union(r277_xn$referglyph$1aao(r277_MangleName('whiteSquare')), r271_intersection(r277_xn$referglyph$1aao(r277_MangleName('blackSquare')), r277_VBar.mShadeShape())));
                        return void 0;
                    });
                    r271_xn$createAndSaveGlyphImpl$2Lrc3c(r277_MangleName('hvShadeSquare'), r277_MangleUnicode(9638), function () {
                        var _r303_t1;
                        var _r303_t0 = this;
                        var r303_currentGlyph = _r303_t0;
                        r303_currentGlyph.setWidth(r277_Geom.Width);
                        r303_currentGlyph.include(r271_union(r277_xn$referglyph$1aao(r277_MangleName('hShadeSquare')), r277_xn$referglyph$1aao(r277_MangleName('vShadeSquare'))));
                        return void 0;
                    });
                    var r277_DDiagShadeShape = function () {
                        var _r306_t0, _r306_t1;
                        var r306_lineWidth = Math.min(r271_GeometryStroke, (r277_Geom.Size * 2 - r271_GeometryStroke * 2) * 1 / 11);
                        var r306_top = r277_Geom.MidY + r277_Geom.Size;
                        var r306_bot = r277_Geom.MidY - (r306_top - r277_Geom.MidY);
                        return function () {
                            var _r308_t3;
                            var _r308_t2 = this;
                            var r308_currentGlyph = _r308_t2;
                            var _r308_t0 = -10;
                            var _r308_t1 = 10;
                            var r308_j = _r308_t0;
                            while (r308_j <= _r308_t1) {
                                r308_currentGlyph.include(r271_dispiro(r271_widths.center(r306_lineWidth), r271_flat(r277_Geom.Left, r1_mix(r306_top, r306_bot, r308_j / 4), r271_heading(r271_Rightward)), r271_curl(r277_Geom.Right, r1_mix(r306_top, r306_bot, r308_j / 4 + 1), r271_heading(r271_Rightward))));
                                r308_j = r308_j + 1;
                            }
                            return void 0;
                        };
                    };
                    var r277_UDiagShadeShape = function () {
                        var _r312_t0, _r312_t1;
                        var r312_lineWidth = Math.min(r271_GeometryStroke, (r277_Geom.Size * 2 - r271_GeometryStroke * 2) * 1 / 11);
                        var r312_top = r277_Geom.MidY + r277_Geom.Size;
                        var r312_bot = r277_Geom.MidY - (r312_top - r277_Geom.MidY);
                        return function () {
                            var _r314_t3;
                            var _r314_t2 = this;
                            var r314_currentGlyph = _r314_t2;
                            var _r314_t0 = -10;
                            var _r314_t1 = 10;
                            var r314_j = _r314_t0;
                            while (r314_j <= _r314_t1) {
                                r314_currentGlyph.include(r271_dispiro(r271_widths.center(r312_lineWidth), r271_flat(r277_Geom.Left, r1_mix(r312_top, r312_bot, r314_j / 4), r271_heading(r271_Rightward)), r271_curl(r277_Geom.Right, r1_mix(r312_top, r312_bot, r314_j / 4 - 1), r271_heading(r271_Rightward))));
                                r314_j = r314_j + 1;
                            }
                            return void 0;
                        };
                    };
                    r271_xn$createAndSaveGlyphImpl$2Lrc3c(r277_MangleName('dDiagShadeSquare'), r277_MangleUnicode(9639), function () {
                        var _r320_t1;
                        var _r320_t0 = this;
                        var r320_currentGlyph = _r320_t0;
                        r320_currentGlyph.setWidth(r277_Geom.Width);
                        r320_currentGlyph.include(r271_union(r277_xn$referglyph$1aao(r277_MangleName('whiteSquare')), r271_intersection(r277_xn$referglyph$1aao(r277_MangleName('blackSquare')), r277_DDiagShadeShape())));
                        return void 0;
                    });
                    r271_xn$createAndSaveGlyphImpl$2Lrc3c(r277_MangleName('uDiagShadeSquare'), r277_MangleUnicode(9640), function () {
                        var _r325_t1;
                        var _r325_t0 = this;
                        var r325_currentGlyph = _r325_t0;
                        r325_currentGlyph.setWidth(r277_Geom.Width);
                        r325_currentGlyph.include(r271_union(r277_xn$referglyph$1aao(r277_MangleName('whiteSquare')), r271_intersection(r277_xn$referglyph$1aao(r277_MangleName('blackSquare')), r277_UDiagShadeShape())));
                        return void 0;
                    });
                    r271_xn$createAndSaveGlyphImpl$2Lrc3c(r277_MangleName('udDiagShadeSquare'), r277_MangleUnicode(9641), function () {
                        var _r330_t1;
                        var _r330_t0 = this;
                        var r330_currentGlyph = _r330_t0;
                        r330_currentGlyph.setWidth(r277_Geom.Width);
                        r330_currentGlyph.include(r271_union(r277_xn$referglyph$1aao(r277_MangleName('dDiagShadeSquare')), r277_xn$referglyph$1aao(r277_MangleName('uDiagShadeSquare'))));
                        return void 0;
                    });
                    r271_xn$createAndSaveGlyphImpl$2Lrc3c(r277_MangleName('vShadeCircle'), r277_MangleUnicode(9677), function () {
                        var _r335_t1;
                        var _r335_t0 = this;
                        var r335_currentGlyph = _r335_t0;
                        r335_currentGlyph.setWidth(r277_Geom.Width);
                        r335_currentGlyph.include(r271_union(r277_xn$referglyph$1aao(r277_MangleName('whiteCircle')), r271_intersection(r277_xn$referglyph$1aao(r277_MangleName('blackCircleO')), r277_VShadeShape())));
                        return void 0;
                    });
                    return r271_xn$createAndSaveGlyphImpl$2Lrc3c(r277_MangleName('symbolForDeleteFormTwo'), r277_MangleUnicode(9253), function () {
                        var _r340_t1;
                        var _r340_t0 = this;
                        var r340_currentGlyph = _r340_t0;
                        var r340_sw = r277_UnicodeWeightGrade(3, r277_Geom.Scalar);
                        var r340_gap = 0.75 * r340_sw + Math.max(r277_Geom.Size * 0.125, r340_sw / 2);
                        r340_currentGlyph.setWidth(r277_Geom.Width);
                        r340_currentGlyph.include(r271_intersection(r277_xn$referglyph$1aao(r277_MangleName('blackSquare')), r271_union(r277_ExtLineCenter(4, r340_sw, r277_Geom.MidX - r277_Geom.Size, r277_Geom.MidY - r277_Geom.Size, r277_Geom.MidX + r277_Geom.Size, r277_Geom.MidY + r277_Geom.Size), r277_ExtLineCenter(4, r340_sw, r277_Geom.MidX - r277_Geom.Size + r340_gap, r277_Geom.MidY - r277_Geom.Size - r340_gap, r277_Geom.MidX + r277_Geom.Size + r340_gap, r277_Geom.MidY + r277_Geom.Size - r340_gap), r277_ExtLineCenter(4, r340_sw, r277_Geom.MidX - r277_Geom.Size - r340_gap, r277_Geom.MidY - r277_Geom.Size + r340_gap, r277_Geom.MidX + r277_Geom.Size - r340_gap, r277_Geom.MidY + r277_Geom.Size + r340_gap))));
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
