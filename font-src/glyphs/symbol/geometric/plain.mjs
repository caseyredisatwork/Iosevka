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
    r270_xn$Capture_Ext$2Lrc2b['$defineGlyphBlockImpl$'](r270_xn$Capture_Ext$2Lrc2b, 'Symbol-Geometric-Plain', function (r271_xn$Capture$2Lrc8, r271_xn$ExportCapture$2Lrc4b) {
        var _r271_t4, _r271_t5, _r271_t6, _r271_tag7;
        var _r271_t0 = r271_xn$Capture$2Lrc8;
        var r271_xn$createAndSaveGlyphImpl$2Lrc3c = _r271_t0['$createAndSaveGlyphImpl$'];
        var r271_xn$NamedParameterPair$2Lrc9b = _r271_t0['$NamedParameterPair$'];
        var r271_xn$assignUnicodeImpl$2Lrc8b = _r271_t0['$assignUnicodeImpl$'];
        var r271_xn$execState$2Lrc0b = _r271_t0['$execState$'];
        var _r271_t1 = r271_xn$Capture$2Lrc8.Metrics;
        var r271_Width = _r271_t1.Width;
        var r271_Translate = _r271_t1.Translate;
        var r271_WideWidth1 = _r271_t1.WideWidth1;
        var r271_AdviceStroke = _r271_t1.AdviceStroke;
        var r271_GeometryStroke = _r271_t1.GeometryStroke;
        var _r271_t2 = r271_xn$Capture$2Lrc8.SpiroFns;
        var r271_g4 = _r271_t2.g4;
        var r271_g2 = _r271_t2.g2;
        var r271_corner = _r271_t2.corner;
        var r271_close = _r271_t2.close;
        var r271_widths = _r271_t2.widths;
        var r271_xn$disablecontrast$3qIs = _r271_t2['disable-contrast'];
        var r271_archv = _r271_t2.archv;
        var r271_arcvh = _r271_t2.arcvh;
        var r271_dispiro = _r271_t2.dispiro;
        var r271_xn$spirooutline$1aao = _r271_t2['spiro-outline'];
        var _r271_t3 = r271_xn$Capture$2Lrc8.BooleFns;
        var r271_union = _r271_t3.union;
        var r271_intersection = _r271_t3.intersection;
        var r271_difference = _r271_t3.difference;
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
                    var _r277_t3, _r277_tag4, _r277_t5, _r277_tag6, _r277_t7, _r277_tag8, _r277_t9, _r277_tag10, _r277_t11, _r277_tag12, _r277_t13, _r277_tag14, _r277_t15, _r277_tag16, _r277_t17, _r277_tag18, _r277_t19, _r277_tag20, _r277_t21, _r277_tag22, _r277_t23, _r277_tag24;
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
                    var _r277_t1 = r271_xn$Capture$2Lrc8['Common-Derivatives'].resolve();
                    var _r277_t2 = r271_xn$Capture$2Lrc8['Symbol-Geometric-Shared'].resolve();
                    var r277_GeometricDim = _r277_t2.GeometricDim;
                    var r277_UnicodeWeightGrade = _r277_t2.UnicodeWeightGrade;
                    var r277_GeometricSizes = _r277_t2.GeometricSizes;
                    var r277_Geom = r277_GeometricDim(r277_MosaicUnitWidth, r274_MosaicWidth);
                    var r277_Size = r277_GeometricSizes(r277_Geom);
                    var r277_StdBlackShape = function (r283_fn, r283_name, r283_unicode, r283_props) {
                        var _r283_t0, _r283_t1;
                        var r283_pp = r1_fallback(r283_props, {});
                        return r271_xn$createAndSaveGlyphImpl$2Lrc3c(r277_MangleName(r283_name), r277_MangleUnicode(r283_unicode), function () {
                            var _r286_t1;
                            var _r286_t0 = this;
                            var r286_currentGlyph = _r286_t0;
                            r286_currentGlyph.setWidth(r277_Geom.Width);
                            r286_currentGlyph.include(r283_fn(r1_fallback(r283_pp.cx, r277_Geom.MidX), r1_fallback(r283_pp.cy, r277_Geom.MidY), r277_Geom.Size * r1_fallback(r283_pp.size, 1), 0));
                            return void 0;
                        });
                    };
                    var r277_StdWhiteShapeImpl = function (r289_fn, r289_s, r289_out, r289_in, r289_props) {
                        var _r289_t0, _r289_t1;
                        var r289_pp = r1_fallback(r289_props, {});
                        var r289_sw = r1_fallback(r289_pp.sw, r271_GeometryStroke);
                        return r271_difference(r289_fn(r1_fallback(r289_pp.cx, r277_Geom.MidX), r1_fallback(r289_pp.cy, r277_Geom.MidY), r289_s * r277_Geom.Size * r1_fallback(r289_pp.size, 1) + r289_out * r289_sw, -r289_out * r289_sw), r289_fn(r1_fallback(r289_pp.cx, r277_Geom.MidX), r1_fallback(r289_pp.cy, r277_Geom.MidY), r289_s * r277_Geom.Size * r1_fallback(r289_pp.size, 1) - r289_in * r289_sw, r289_in * r289_sw));
                    };
                    var r277_ConvexWhitePolygonImpl = function (r290_fn, r290_props) {
                        var _r290_t0, _r290_t1;
                        var r290_pp = r1_fallback(r290_props, {});
                        var r290_sh = r271_xn$createAndSaveGlyphImpl$2Lrc3c(null, null, r290_fn(r1_fallback(r290_pp.cx, r277_Geom.MidX), r1_fallback(r290_pp.cy, r277_Geom.MidY), r277_Geom.Size * r1_fallback(r290_pp.size, 1), 0));
                        var r290_outlines = function () {
                            var r293_c, r293_j, r293_a, r293_b, _r293_t3, _r293_t4, _r293_t6;
                            var _r293_t5 = this;
                            var r293_currentGlyph = _r293_t5;
                            _r293_t5.gizmo = r271_Translate(0, 0);
                            var _r293_t0 = r290_sh.geometry.asContours();
                            var _r293_t1 = _r293_t0.length;
                            var _r293_t2 = 0;
                            while (_r293_t2 < _r293_t1) {
                                r293_c = _r293_t0[_r293_t2];
                                _r293_t3 = 0;
                                _r293_t4 = r293_c.length;
                                r293_j = _r293_t3;
                                while (r293_j < _r293_t4) {
                                    r293_a = r293_c[r293_j ? r293_j - 1 : r293_c.length - 1];
                                    r293_b = r293_c[r293_j];
                                    r293_currentGlyph.include(r271_dispiro(r271_xn$disablecontrast$3qIs(), r271_widths.center(r1_fallback(r290_pp.sw, r271_GeometryStroke) * 2), r271_corner(r1_mix(r293_a.x, r293_b.x, -2), r1_mix(r293_a.y, r293_b.y, -2)), r271_corner(r1_mix(r293_a.x, r293_b.x, +3), r1_mix(r293_a.y, r293_b.y, +3))));
                                    r293_j = r293_j + 1;
                                }
                                _r293_t2 = _r293_t2 + 1;
                            }
                            return void 0;
                        };
                        return r271_intersection(r290_sh, r290_outlines);
                    };
                    var r277_StdWhiteShape = function (r297_fn, r297_name, r297_unicode, r297_props) {
                        var _r297_t0, _r297_t1;
                        return r271_xn$createAndSaveGlyphImpl$2Lrc3c(r277_MangleName(r297_name), r277_MangleUnicode(r297_unicode), function () {
                            var _r300_t1;
                            var _r300_t0 = this;
                            var r300_currentGlyph = _r300_t0;
                            r300_currentGlyph.setWidth(r277_Geom.Width);
                            r300_currentGlyph.include(r277_StdWhiteShapeImpl(r297_fn, 1, 0, 1, r297_props));
                            return void 0;
                        });
                    };
                    var r277_StdWhiteContainingBlackShape = function (r303_fn, r303_name, r303_unicode, r303_props) {
                        var _r303_t0, _r303_t1;
                        var r303_pp = r1_fallback(r303_props, {});
                        return r271_xn$createAndSaveGlyphImpl$2Lrc3c(r277_MangleName(r303_name), r277_MangleUnicode(r303_unicode), function () {
                            var _r306_t1;
                            var _r306_t0 = this;
                            var r306_currentGlyph = _r306_t0;
                            r306_currentGlyph.setWidth(r277_Geom.Width);
                            var r306_sw = r1_fallback(r303_pp.sw, r271_GeometryStroke);
                            r306_currentGlyph.include(r303_fn(r1_fallback(r303_pp.cx, r277_Geom.MidX), r1_fallback(r303_pp.cy, r277_Geom.MidY), r1_fallback(r303_pp.innerSize, 0.5) * (r277_Geom.Size * r1_fallback(r303_pp.size, 1) - r306_sw), 0));
                            r306_currentGlyph.include(r277_StdWhiteShapeImpl(r303_fn, 1, 0, 1, r303_props));
                            return void 0;
                        });
                    };
                    var r277_ConvexPolygonWhiteContainingBlackShape = function (r310_fn, r310_name, r310_unicode, r310_props) {
                        var _r310_t0, _r310_t1;
                        var r310_pp = r1_fallback(r310_props, {});
                        return r271_xn$createAndSaveGlyphImpl$2Lrc3c(r277_MangleName(r310_name), r277_MangleUnicode(r310_unicode), function () {
                            var _r313_t1;
                            var _r313_t0 = this;
                            var r313_currentGlyph = _r313_t0;
                            r313_currentGlyph.setWidth(r277_Geom.Width);
                            var r313_sw = r1_fallback(r310_pp.sw, r271_GeometryStroke);
                            r313_currentGlyph.include(r310_fn(r1_fallback(r310_pp.cx, r277_Geom.MidX), r1_fallback(r310_pp.cy, r277_Geom.MidY), r1_fallback(r310_pp.innerSize, 0.5) * (r277_Geom.Size * r1_fallback(r310_pp.size, 1) - r313_sw), 0));
                            r313_currentGlyph.include(r277_ConvexWhitePolygonImpl(r310_fn, r310_props));
                            return void 0;
                        });
                    };
                    var r277_StdGeomTargetShape = function (r317_fn, r317_name, r317_unicode, r317_props) {
                        var _r317_t0, _r317_t1;
                        var r317_pp = r1_fallback(r317_props, {});
                        return r271_xn$createAndSaveGlyphImpl$2Lrc3c(r277_MangleName(r317_name), r277_MangleUnicode(r317_unicode), function () {
                            var _r320_t1;
                            var _r320_t0 = this;
                            var r320_currentGlyph = _r320_t0;
                            r320_currentGlyph.setWidth(r277_Geom.Width);
                            var r320_sw = r1_fallback(r317_pp.sw, r271_GeometryStroke);
                            r320_currentGlyph.include(r317_fn(r1_fallback(r317_pp.cx, r277_Geom.MidX), r1_fallback(r317_pp.cy, r277_Geom.MidY), r1_fallback(r317_pp.innerSize, 0.25) * (r277_Geom.Size * r1_fallback(r317_pp.size, 1) - r320_sw * 2), 0));
                            r320_currentGlyph.include(r277_StdWhiteShapeImpl(r317_fn, 1, 0, 1, r317_props));
                            r320_currentGlyph.include(r277_StdWhiteShapeImpl(r317_fn, r1_mix(1, r1_fallback(r317_pp.innerSize, 0.25), 0.5), 0, 1, r317_props));
                            return void 0;
                        });
                    };
                    var r277_StdDoubleWhite = function (r325_fn, r325_name, r325_unicode, r325_props) {
                        var _r325_t0, _r325_t1;
                        var r325_pp = r1_fallback(r325_props, {});
                        return r271_xn$createAndSaveGlyphImpl$2Lrc3c(r277_MangleName(r325_name), r277_MangleUnicode(r325_unicode), function () {
                            var _r328_t1;
                            var _r328_t0 = this;
                            var r328_currentGlyph = _r328_t0;
                            r328_currentGlyph.setWidth(r277_Geom.Width);
                            var r328_sw = r1_fallback(r325_pp.sw, r271_GeometryStroke);
                            r328_currentGlyph.include(r271_difference(r325_fn(r1_fallback(r325_pp.cx, r277_Geom.MidX), r1_fallback(r325_pp.cy, r277_Geom.MidY), 0.5 * (r277_Geom.Size * r1_fallback(r325_pp.size, 1) - r328_sw), 0), r325_fn(r1_fallback(r325_pp.cx, r277_Geom.MidX), r1_fallback(r325_pp.cy, r277_Geom.MidY), 0.5 * (r277_Geom.Size * r1_fallback(r325_pp.size, 1) - r328_sw) - r328_sw, r328_sw)));
                            r328_currentGlyph.include(r271_difference(r325_fn(r1_fallback(r325_pp.cx, r277_Geom.MidX), r1_fallback(r325_pp.cy, r277_Geom.MidY), r277_Geom.Size * r1_fallback(r325_pp.size, 1), 0), r325_fn(r1_fallback(r325_pp.cx, r277_Geom.MidX), r1_fallback(r325_pp.cy, r277_Geom.MidY), r277_Geom.Size * r1_fallback(r325_pp.size, 1) - r328_sw, r328_sw)));
                            return void 0;
                        });
                    };
                    var r277_ConvexWhitePolygon = function (r332_fn, r332_name, r332_unicode, r332_props) {
                        var _r332_t0, _r332_t1;
                        return r271_xn$createAndSaveGlyphImpl$2Lrc3c(r277_MangleName(r332_name), r277_MangleUnicode(r332_unicode), function () {
                            var _r335_t1;
                            var _r335_t0 = this;
                            var r335_currentGlyph = _r335_t0;
                            r335_currentGlyph.setWidth(r277_Geom.Width);
                            r335_currentGlyph.include(r277_ConvexWhitePolygonImpl(r332_fn, r332_props));
                            return void 0;
                        });
                    };
                    (function () {
                        var r339_SquareShape = function (r340_cx, r340_cy, r340_size) {
                            var _r340_t0, _r340_t1;
                            return r271_xn$spirooutline$1aao(r271_corner(r340_cx - r340_size, r340_cy + r340_size), r271_corner(r340_cx + r340_size, r340_cy + r340_size), r271_corner(r340_cx + r340_size, r340_cy - r340_size), r271_corner(r340_cx - r340_size, r340_cy - r340_size));
                        };
                        r277_StdBlackShape(r339_SquareShape, 'blackSquare', 9632);
                        r277_StdWhiteShape(r339_SquareShape, 'whiteSquare', 9633);
                        r277_StdWhiteShape(r339_SquareShape, 'lightWhiteSquare', 128910, { 'sw': r277_UnicodeWeightGrade(3, r277_Geom.Scalar) });
                        r277_StdWhiteShape(r339_SquareShape, 'mediumWhiteSquare', 128911, { 'sw': r277_UnicodeWeightGrade(5, r277_Geom.Scalar) });
                        r277_StdWhiteShape(r339_SquareShape, 'boldWhiteSquare', 128912, { 'sw': r277_UnicodeWeightGrade(7, r277_Geom.Scalar) });
                        r277_StdWhiteShape(r339_SquareShape, 'heavyWhiteSquare', 128913, { 'sw': r277_UnicodeWeightGrade(9, r277_Geom.Scalar) });
                        r277_StdWhiteShape(r339_SquareShape, 'veryHeavyWhiteSquare', 128914, { 'sw': r277_UnicodeWeightGrade(10, r277_Geom.Scalar) });
                        r277_StdWhiteShape(r339_SquareShape, 'exHeavyWhiteSquare', 128915, { 'sw': r277_UnicodeWeightGrade(11, r277_Geom.Scalar) });
                        r277_StdBlackShape(r339_SquareShape, 'blackLargeSquare', 11035, r277_Size.Large);
                        r277_StdBlackShape(r339_SquareShape, 'blackMediumSquare', 9724, r277_Size.Medium);
                        r277_StdBlackShape(r339_SquareShape, 'blackMediumSmallSquare', 9726, r277_Size.MediumSmall);
                        r277_StdBlackShape(r339_SquareShape, 'blackSmallSquare', 9642, r277_Size.Small);
                        r277_StdBlackShape(r339_SquareShape, 'blackVerySmallSquare', 11037, r277_Size.VerySmall);
                        r277_StdBlackShape(r339_SquareShape, 'blackSlightlySmallSquare', 128909, r277_Size.SlightlySmall);
                        r277_StdBlackShape(r339_SquareShape, 'blackTinySmallSquare', 128908, r277_Size.Tiny);
                        r277_StdBlackShape(r339_SquareShape, 'blackCenteredSquare', 11200);
                        r277_StdWhiteShape(r339_SquareShape, 'whiteLargeSquare', 11036, r277_Size.Large);
                        r277_StdWhiteShape(r339_SquareShape, 'whiteMediumSquare', 9723, r277_Size.Medium);
                        r277_StdWhiteShape(r339_SquareShape, 'whiteMediumSmallSquare', 9725, r277_Size.MediumSmall);
                        r277_StdWhiteShape(r339_SquareShape, 'whiteSmallSquare', 9643, r277_Size.Small);
                        r277_StdWhiteShape(r339_SquareShape, 'whiteVerySmallSquare', 11038, r277_Size.VerySmall);
                        r277_StdWhiteContainingBlackShape(r339_SquareShape, 'whiteSquareWithCenter', 9635);
                        r277_StdWhiteContainingBlackShape(r339_SquareShape, 'whiteSquareContainingBlackVerySmallSquare', 128916, r277_Size.TinyInner);
                        r277_StdWhiteContainingBlackShape(r339_SquareShape, 'whiteSquareContainingBlackMediumSquare', 128917, r277_Size.MediumInner);
                        r277_StdGeomTargetShape(r339_SquareShape, 'squareTarget', 128918);
                        var r339_TriangleRBFill = function (r341_cx, r341_cy, r341_size) {
                            var _r341_t0, _r341_t1;
                            return r271_xn$spirooutline$1aao(r271_corner(r341_cx + r341_size, r341_cy + r341_size), r271_corner(r341_cx + r341_size, r341_cy - r341_size), r271_corner(r341_cx - r341_size, r341_cy - r341_size));
                        };
                        var r339_TriangleLBFill = function (r342_cx, r342_cy, r342_size) {
                            var _r342_t0, _r342_t1;
                            return r271_xn$spirooutline$1aao(r271_corner(r342_cx - r342_size, r342_cy + r342_size), r271_corner(r342_cx + r342_size, r342_cy - r342_size), r271_corner(r342_cx - r342_size, r342_cy - r342_size));
                        };
                        var r339_TriangleLTFill = function (r343_cx, r343_cy, r343_size) {
                            var _r343_t0, _r343_t1;
                            return r271_xn$spirooutline$1aao(r271_corner(r343_cx - r343_size, r343_cy + r343_size), r271_corner(r343_cx + r343_size, r343_cy + r343_size), r271_corner(r343_cx - r343_size, r343_cy - r343_size));
                        };
                        var r339_TriangleRTFill = function (r344_cx, r344_cy, r344_size) {
                            var _r344_t0, _r344_t1;
                            return r271_xn$spirooutline$1aao(r271_corner(r344_cx - r344_size, r344_cy + r344_size), r271_corner(r344_cx + r344_size, r344_cy + r344_size), r271_corner(r344_cx + r344_size, r344_cy - r344_size));
                        };
                        r277_StdBlackShape(r339_TriangleRBFill, 'blackTriangleRB', 9698);
                        r277_ConvexWhitePolygon(r339_TriangleRBFill, 'whiteTriangleRB', 9727);
                        r277_StdBlackShape(r339_TriangleLBFill, 'blackTriangleLB', 9699);
                        r277_ConvexWhitePolygon(r339_TriangleLBFill, 'whiteTriangleLB', 9722);
                        r277_StdBlackShape(r339_TriangleLTFill, 'blackTriangleLT', 9700);
                        r277_ConvexWhitePolygon(r339_TriangleLTFill, 'whiteTriangleLT', 9720);
                        r277_StdBlackShape(r339_TriangleRTFill, 'blackTriangleRT', 9701);
                        return r277_ConvexWhitePolygon(r339_TriangleRTFill, 'whiteTriangleRT', 9721);
                    }());
                    (function () {
                        var r346_RectangleFill = function (r347_cx, r347_cy, r347_r) {
                            var _r347_t0, _r347_t1;
                            return r271_xn$spirooutline$1aao(r271_corner(r347_cx - r347_r, r347_cy + r347_r / 1.5), r271_corner(r347_cx + r347_r, r347_cy + r347_r / 1.5), r271_corner(r347_cx + r347_r, r347_cy - r347_r / 1.5), r271_corner(r347_cx - r347_r, r347_cy - r347_r / 1.5));
                        };
                        r277_StdBlackShape(r346_RectangleFill, 'blackRectangle', 9644);
                        r277_ConvexWhitePolygon(r346_RectangleFill, 'whiteRectangle', 9645);
                        var r346_LongRectangleFill = function (r348_cx, r348_cy, r348_r) {
                            var _r348_t0, _r348_t1;
                            var r348_rs = r277_Geom.TallSize / (r348_r * 1.5);
                            return r271_xn$spirooutline$1aao(r271_corner(r348_cx - r348_r * r348_rs, r348_cy + r348_r * r348_rs * 1.5), r271_corner(r348_cx + r348_r * r348_rs, r348_cy + r348_r * r348_rs * 1.5), r271_corner(r348_cx + r348_r * r348_rs, r348_cy - r348_r * r348_rs * 1.5), r271_corner(r348_cx - r348_r * r348_rs, r348_cy - r348_r * r348_rs * 1.5));
                        };
                        r277_StdBlackShape(r346_LongRectangleFill, 'blackLongRectangle', 9646);
                        r277_ConvexWhitePolygon(r346_LongRectangleFill, 'whiteLongRectangle', 9647);
                        var r346_ParallelogramFill = function (r349_cx, r349_cy, r349_r) {
                            var _r349_t0, _r349_t1;
                            var r349_skew = r349_r * 1 / 4;
                            return r271_xn$spirooutline$1aao(r271_corner(r349_cx - r349_r + r349_skew, r349_cy + r349_r / 1.5), r271_corner(r349_cx + r349_r + r349_skew, r349_cy + r349_r / 1.5), r271_corner(r349_cx + r349_r - r349_skew, r349_cy - r349_r / 1.5), r271_corner(r349_cx - r349_r - r349_skew, r349_cy - r349_r / 1.5));
                        };
                        r277_StdBlackShape(r346_ParallelogramFill, 'blackParallelogram', 9648);
                        return r277_ConvexWhitePolygon(r346_ParallelogramFill, 'whiteParallelogram', 9649);
                    }());
                    (function () {
                        var r351_triangleOvershoot = 2.1 / Math.sqrt(3);
                        var r351_TriangleUpFill = function (r352_cx, r352_cy, r352_size) {
                            var _r352_t0, _r352_t1;
                            return r271_xn$spirooutline$1aao(r271_corner(r352_cx, r352_cy + r352_size), r271_corner(r352_cx + r352_size * r351_triangleOvershoot, r352_cy - r352_size), r271_corner(r352_cx - r352_size * r351_triangleOvershoot, r352_cy - r352_size));
                        };
                        var r351_TriangleDownFill = function (r353_cx, r353_cy, r353_size) {
                            var _r353_t0, _r353_t1;
                            return r271_xn$spirooutline$1aao(r271_corner(r353_cx, r353_cy - r353_size), r271_corner(r353_cx + r353_size * r351_triangleOvershoot, r353_cy + r353_size), r271_corner(r353_cx - r353_size * r351_triangleOvershoot, r353_cy + r353_size));
                        };
                        var r351_TriangleLeftFill = function (r354_cx, r354_cy, r354_size) {
                            var _r354_t0, _r354_t1;
                            return r271_xn$spirooutline$1aao(r271_corner(r354_cx - r354_size, r354_cy), r271_corner(r354_cx + r354_size, r354_cy - r354_size * r351_triangleOvershoot), r271_corner(r354_cx + r354_size, r354_cy + r354_size * r351_triangleOvershoot));
                        };
                        var r351_TriangleLeftThinFill = function (r355_cx, r355_cy, r355_size) {
                            var _r355_t0, _r355_t1;
                            return r271_xn$spirooutline$1aao(r271_corner(r355_cx - r355_size, r355_cy), r271_corner(r355_cx + r355_size, r355_cy - r355_size * r351_triangleOvershoot * (2 / 3)), r271_corner(r355_cx + r355_size, r355_cy + r355_size * r351_triangleOvershoot * (2 / 3)));
                        };
                        var r351_TriangleRightFill = function (r356_cx, r356_cy, r356_size) {
                            var _r356_t0, _r356_t1;
                            return r271_xn$spirooutline$1aao(r271_corner(r356_cx + r356_size, r356_cy), r271_corner(r356_cx - r356_size, r356_cy - r356_size * r351_triangleOvershoot), r271_corner(r356_cx - r356_size, r356_cy + r356_size * r351_triangleOvershoot));
                        };
                        var r351_TriangleRightThinFill = function (r357_cx, r357_cy, r357_size) {
                            var _r357_t0, _r357_t1;
                            return r271_xn$spirooutline$1aao(r271_corner(r357_cx + r357_size, r357_cy), r271_corner(r357_cx - r357_size, r357_cy - r357_size * r351_triangleOvershoot * (2 / 3)), r271_corner(r357_cx - r357_size, r357_cy + r357_size * r351_triangleOvershoot * (2 / 3)));
                        };
                        var r351_IsoRtTriangleUpFill = function (r358_cx, r358_cy, r358_size) {
                            var _r358_t0, _r358_t1;
                            return r271_xn$spirooutline$1aao(r271_corner(r358_cx, r358_cy + r358_size / 2), r271_corner(r358_cx + r358_size, r358_cy - r358_size / 2), r271_corner(r358_cx - r358_size, r358_cy - r358_size / 2));
                        };
                        var r351_IsoRtTriangleDownFill = function (r359_cx, r359_cy, r359_size) {
                            var _r359_t0, _r359_t1;
                            return r271_xn$spirooutline$1aao(r271_corner(r359_cx + r359_size, r359_cy + r359_size / 2), r271_corner(r359_cx - r359_size, r359_cy + r359_size / 2), r271_corner(r359_cx, r359_cy - r359_size / 2));
                        };
                        var r351_IsoRtTriangleLeftFill = function (r360_cx, r360_cy, r360_size) {
                            var _r360_t0, _r360_t1;
                            return r271_xn$spirooutline$1aao(r271_corner(r360_cx - r360_size / 2, r360_cy), r271_corner(r360_cx + r360_size / 2, r360_cy - r360_size), r271_corner(r360_cx + r360_size / 2, r360_cy + r360_size));
                        };
                        var r351_IsoRtTriangleRightFill = function (r361_cx, r361_cy, r361_size) {
                            var _r361_t0, _r361_t1;
                            return r271_xn$spirooutline$1aao(r271_corner(r361_cx + r361_size / 2, r361_cy), r271_corner(r361_cx - r361_size / 2, r361_cy - r361_size), r271_corner(r361_cx - r361_size / 2, r361_cy + r361_size));
                        };
                        r277_StdBlackShape(r351_TriangleUpFill, 'blackTriangleUp', 9650, r277_Size.Oblique);
                        r277_ConvexWhitePolygon(r351_TriangleUpFill, 'whiteTriangleUp', 9651, r277_Size.Oblique);
                        r277_StdBlackShape(r351_TriangleUpFill, 'blackSmallTriangleUp', 9652, r277_Size.SmallOblique);
                        r277_ConvexWhitePolygon(r351_TriangleUpFill, 'whiteSmallTriangleUp', 9653, r277_Size.SmallOblique);
                        r277_StdBlackShape(r351_TriangleRightFill, 'blackTriangleRight', 9654, r277_Size.Oblique);
                        r277_ConvexWhitePolygon(r351_TriangleRightFill, 'whiteTriangleRight', 9655, r277_Size.Oblique);
                        r277_StdBlackShape(r351_TriangleRightFill, 'blackSmallTriangleRight', 9656, r277_Size.SmallOblique);
                        r277_ConvexWhitePolygon(r351_TriangleRightFill, 'whiteSmallTriangleRight', 9657, r277_Size.SmallOblique);
                        r277_StdBlackShape(r351_TriangleRightThinFill, 'blackThinTriangleRight', 9658, r277_Size.Oblique);
                        r277_ConvexWhitePolygon(r351_TriangleRightThinFill, 'whiteThinTriangleRight', 9659, r277_Size.Oblique);
                        r277_StdBlackShape(r351_TriangleDownFill, 'blackTriangleDown', 9660, r277_Size.Oblique);
                        r277_ConvexWhitePolygon(r351_TriangleDownFill, 'whiteTriangleDown', 9661, r277_Size.Oblique);
                        r277_StdBlackShape(r351_TriangleDownFill, 'blackSmallTriangleDown', 9662, r277_Size.SmallOblique);
                        r277_ConvexWhitePolygon(r351_TriangleDownFill, 'whiteSmallTriangleDown', 9663, r277_Size.SmallOblique);
                        r277_StdBlackShape(r351_TriangleLeftFill, 'blackTriangleLeft', 9664, r277_Size.Oblique);
                        r277_ConvexWhitePolygon(r351_TriangleLeftFill, 'whiteTriangleLeft', 9665, r277_Size.Oblique);
                        r277_StdBlackShape(r351_TriangleLeftFill, 'blackSmallTriangleLeft', 9666, r277_Size.SmallOblique);
                        r277_ConvexWhitePolygon(r351_TriangleLeftFill, 'whiteSmallTriangleLeft', 9667, r277_Size.SmallOblique);
                        r277_StdBlackShape(r351_TriangleLeftThinFill, 'blackThinTriangleLeft', 9668, r277_Size.Oblique);
                        r277_ConvexWhitePolygon(r351_TriangleLeftThinFill, 'whiteThinTriangleLeft', 9669, r277_Size.Oblique);
                        r277_StdBlackShape(r351_TriangleUpFill, 'blackCenterMediumTriangleUp', 11205, r277_Size.MediumOblique);
                        r277_StdBlackShape(r351_TriangleDownFill, 'blackCenterMediumTriangleDown', 11206, r277_Size.MediumOblique);
                        r277_StdBlackShape(r351_TriangleLeftFill, 'blackCenterMediumTriangleLeft', 11207, r277_Size.MediumOblique);
                        r277_StdBlackShape(r351_TriangleRightFill, 'blackCenterMediumTriangleRight', 11208, r277_Size.MediumOblique);
                        r277_StdBlackShape(r351_IsoRtTriangleLeftFill, 'isoRtTriangleLeft', 128896, r277_Size.Oblique);
                        r277_StdBlackShape(r351_IsoRtTriangleUpFill, 'isoRtTriangleUp', 128897, r277_Size.Oblique);
                        r277_StdBlackShape(r351_IsoRtTriangleRightFill, 'isoRtTriangleRight', 128898, r277_Size.Oblique);
                        r277_StdBlackShape(r351_IsoRtTriangleDownFill, 'isoRtTriangleDown', 128899, r277_Size.Oblique);
                        var r351_TriangularWedgeFill = function (r362_cx, r362_cy, r362_size) {
                            var _r362_t0, _r362_t1;
                            return r271_intersection(r351_TriangleUpFill(r362_cx, r362_cy, r362_size), r271_union(r271_dispiro(r271_widths.rhs(r271_GeometryStroke), r271_corner(r362_cx, r362_cy + r362_size), r271_corner(r362_cx + r362_size * r351_triangleOvershoot, r362_cy - r362_size)), r271_dispiro(r271_widths.lhs(r271_GeometryStroke), r271_corner(r362_cx, r362_cy + r362_size), r271_corner(r362_cx - r362_size * r351_triangleOvershoot, r362_cy - r362_size))));
                        };
                        var r351_TriangularVeeFill = function (r363_cx, r363_cy, r363_size) {
                            var _r363_t0, _r363_t1;
                            return r271_intersection(r351_TriangleDownFill(r363_cx, r363_cy, r363_size), r271_union(r271_dispiro(r271_widths.lhs(r271_GeometryStroke), r271_corner(r363_cx, r363_cy - r363_size), r271_corner(r363_cx + r363_size * r351_triangleOvershoot, r363_cy + r363_size)), r271_dispiro(r271_widths.rhs(r271_GeometryStroke), r271_corner(r363_cx, r363_cy - r363_size), r271_corner(r363_cx - r363_size * r351_triangleOvershoot, r363_cy + r363_size))));
                        };
                        r277_StdBlackShape(r351_TriangularWedgeFill, 'triangularWedge', null);
                        return r277_StdBlackShape(r351_TriangularVeeFill, 'triangularVee', null);
                    }());
                    (function () {
                        var r365_DiamondFill = function (r366_cx, r366_cy, r366_size) {
                            var _r366_t0, _r366_t1;
                            return r271_xn$spirooutline$1aao(r271_corner(r366_cx, r366_cy + r366_size), r271_corner(r366_cx + r366_size, r366_cy), r271_corner(r366_cx, r366_cy - r366_size), r271_corner(r366_cx - r366_size, r366_cy));
                        };
                        r277_StdBlackShape(r365_DiamondFill, 'blackDiamond', 9670, r277_Size.Oblique);
                        r277_StdBlackShape(r365_DiamondFill, 'blackCenteredDiamond', 11201, r277_Size.Oblique);
                        r277_StdWhiteShape(r365_DiamondFill, 'whiteDiamond', 9671, r277_Size.Oblique);
                        r277_StdWhiteShape(r365_DiamondFill, 'whiteDiamondOperatorImpl', null, Object.assign({}, r277_Size.Oblique, { 'sw': Math.sqrt(2) * r271_AdviceStroke(4) }));
                        r277_StdBlackShape(r365_DiamondFill, 'blackMediumDiamond', 11045, r277_Size.MediumOblique);
                        r277_StdBlackShape(r365_DiamondFill, 'blackSmallDiamond', 11049, r277_Size.SmallOblique);
                        r277_StdBlackShape(r365_DiamondFill, 'blackTinyDiamond', 128919, r277_Size.TinyOblique);
                        r277_StdBlackShape(r365_DiamondFill, 'blackVerySmallDiamond', 128920, r277_Size.VerySmallOblique);
                        r277_StdBlackShape(r365_DiamondFill, 'blackMediumSmallDiamond', 128921, r277_Size.MediumSmallOblique);
                        r277_StdWhiteShape(r365_DiamondFill, 'whiteMediumDiamond', 11046, r277_Size.MediumOblique);
                        r277_StdWhiteContainingBlackShape(r365_DiamondFill, 'whiteDiamondWithCenter', 9672, r277_Size.Oblique);
                        r277_StdWhiteContainingBlackShape(r365_DiamondFill, 'whiteDiamondContainingBlackVerySmallDiamond', 128922, Object.assign({}, r277_Size.TinyInner, r277_Size.Oblique));
                        r277_StdWhiteContainingBlackShape(r365_DiamondFill, 'whiteDiamondContainingBlackMediumDiamond', 128923, Object.assign({}, r277_Size.MediumInner, r277_Size.Oblique));
                        return r277_StdGeomTargetShape(r365_DiamondFill, 'diamondTarget', 128924, r277_Size.Oblique);
                    }());
                    (function () {
                        var r368_LonzengeFill = function (r369_cx, r369_cy, r369_size) {
                            var _r369_t0, _r369_t1;
                            return r271_xn$spirooutline$1aao(r271_corner(r369_cx, r369_cy + r369_size), r271_corner(r369_cx + r369_size * 2 / 3, r369_cy), r271_corner(r369_cx, r369_cy - r369_size), r271_corner(r369_cx - r369_size * 2 / 3, r369_cy));
                        };
                        r277_StdBlackShape(r368_LonzengeFill, 'blackLonzenge', 10731, r277_Size.Oblique);
                        r277_ConvexWhitePolygon(r368_LonzengeFill, 'whiteLonzenge', 9674, r277_Size.Oblique);
                        r277_StdBlackShape(r368_LonzengeFill, 'blackMediumLonzenge', 11047, r277_Size.MediumOblique);
                        r277_StdBlackShape(r368_LonzengeFill, 'blackSmallLonzenge', 11050, r277_Size.SmallOblique);
                        r277_ConvexWhitePolygon(r368_LonzengeFill, 'whiteMediumLonzenge', 11048, r277_Size.MediumOblique);
                        r277_ConvexWhitePolygon(r368_LonzengeFill, 'whiteSmallLonzenge', 11051, r277_Size.SmallOblique);
                        r277_StdBlackShape(r368_LonzengeFill, 'blackTinyLonzenge', 128925, r277_Size.TinyOblique);
                        r277_StdBlackShape(r368_LonzengeFill, 'blackVerySmallLonzenge', 128926, r277_Size.VerySmallOblique);
                        r277_StdBlackShape(r368_LonzengeFill, 'blackMediumSmallLonzenge', 128927, r277_Size.MediumSmallOblique);
                        return r277_ConvexPolygonWhiteContainingBlackShape(r368_LonzengeFill, 'whiteLozengeContainingBlackSmallLozenge', 128928, Object.assign({}, r277_Size.SmallInner, r277_Size.Oblique));
                    }());
                    (function () {
                        var r371_SquareLozengeShape = function (r372_cx, r372_cy, r372_size) {
                            var _r372_t0, _r372_t1;
                            var r372_p = 0.8;
                            return r271_xn$spirooutline$1aao(r271_corner(r372_cx - r372_size, r372_cy + r372_size), r271_g4(r372_cx, r372_cy + r372_p * r372_size), r271_corner(r372_cx + r372_size, r372_cy + r372_size), r271_g4(r372_cx + r372_p * r372_size, r372_cy), r271_corner(r372_cx + r372_size, r372_cy - r372_size), r271_g4(r372_cx, r372_cy - r372_p * r372_size), r271_corner(r372_cx - r372_size, r372_cy - r372_size), r271_g4(r372_cx - r372_p * r372_size, r372_cy), r271_close());
                        };
                        r277_StdWhiteShape(r371_SquareLozengeShape, 'squareLozenge', 8977, r277_Size.SmallOblique);
                        r277_StdWhiteShape(r371_SquareLozengeShape, 'rotatedWhiteFourPointedCusp', 11215, r277_Size.MediumOblique);
                        return r277_StdBlackShape(r371_SquareLozengeShape, 'rotatedBlackFourPointedCusp', 11213, r277_Size.MediumOblique);
                    }());
                    (function () {
                        var r374_CircleShape = function (r375_cx, r375_cy, r375_size) {
                            var _r375_t0, _r375_t1;
                            return r271_xn$spirooutline$1aao(r271_g4(r375_cx - r375_size, r375_cy), r271_arcvh.superness(2), r271_g4(r375_cx, r375_cy - r375_size), r271_archv.superness(2), r271_g4(r375_cx + r375_size, r375_cy), r271_arcvh.superness(2), r271_g4(r375_cx, r375_cy + r375_size), r271_archv.superness(2), r271_close());
                        };
                        var r374_CircleInvertInnerShape = function (r376_cx, r376_cy, r376_size, r376_sw) {
                            var _r376_t0, _r376_t1;
                            var r376_sizeOrig = r376_size + r376_sw;
                            var r376_rs = r277_Geom.TallSize / (r376_sizeOrig * 1.5);
                            return r374_CircleShape(r376_cx, r376_cy, r376_sizeOrig * r376_rs - r376_sw);
                        };
                        r277_StdBlackShape(r374_CircleShape, 'blackCircleO', null, { 'size': 0.995 });
                        r277_StdBlackShape(r374_CircleShape, 'blackCircle', 9679);
                        r277_StdWhiteShape(r374_CircleShape, 'whiteCircle', 9675);
                        r277_StdWhiteShape(r374_CircleShape, 'mediumWhiteCircle', 128901, { 'sw': r277_UnicodeWeightGrade(6, r277_Geom.Scalar) });
                        r277_StdWhiteShape(r374_CircleShape, 'boldWhiteCircle', 128902, { 'sw': r277_UnicodeWeightGrade(7, r277_Geom.Scalar) });
                        r277_StdWhiteShape(r374_CircleShape, 'heavyWhiteCircle', 128903, { 'sw': r277_UnicodeWeightGrade(9, r277_Geom.Scalar) });
                        r277_StdWhiteShape(r374_CircleShape, 'veryHeavyWhiteCircle', 128904, { 'sw': r277_UnicodeWeightGrade(10, r277_Geom.Scalar) });
                        r277_StdWhiteShape(r374_CircleShape, 'exHeavyWhiteCircle', 128905, { 'sw': r277_UnicodeWeightGrade(11, r277_Geom.Scalar) });
                        r277_StdWhiteShape(r374_CircleShape, 'heavyLargeCircle', 11093, Object.assign({ 'sw': r277_UnicodeWeightGrade(9, r277_Geom.Scalar) }, r277_Size.Large));
                        r277_StdBlackShape(r374_CircleShape, 'blackVerySmallCircle', null, r277_Size.VerySmall);
                        r277_StdBlackShape(r374_CircleShape, 'blackSmallCircle', null, r277_Size.Small);
                        r277_StdBlackShape(r374_CircleShape, 'blackMediumSmallCircle', 10625, r277_Size.MediumSmall);
                        r277_StdBlackShape(r374_CircleShape, 'blackSlightlySmallCircle', 128900, r277_Size.SlightlySmall);
                        r277_StdBlackShape(r374_CircleShape, 'blackMediumCircle', 9899, r277_Size.Medium);
                        r277_StdBlackShape(r374_CircleShape, 'blackLargeCircle', 11044, r277_Size.Large);
                        r277_StdWhiteShape(r374_CircleShape, 'whiteVerySmallCircle', null, r277_Size.VerySmall);
                        r277_StdWhiteShape(r374_CircleShape, 'whiteSmallCircle', null, r277_Size.Small);
                        r277_StdWhiteShape(r374_CircleShape, 'whiteMediumSmallCircle', 9900, r277_Size.MediumSmall);
                        r277_StdWhiteShape(r374_CircleShape, 'whiteMediumCircle', 9898, r277_Size.Medium);
                        r277_StdWhiteShape(r374_CircleShape, 'whiteLargeCircle', 9711, r277_Size.Large);
                        r277_StdDoubleWhite(r374_CircleShape, 'doubleWhiteCircle', 9678, { 'sw': Math.min(r271_GeometryStroke, r271_AdviceStroke(4, r277_Geom.Scalar)) });
                        r277_StdWhiteContainingBlackShape(r374_CircleShape, 'whiteCircleWithCenter', 9673);
                        r277_StdWhiteContainingBlackShape(r374_CircleShape, 'whiteCircleContainingBlackSmallCircle', 128906, r277_Size.SmallInner);
                        r277_StdGeomTargetShape(r374_CircleShape, 'circleTarget', 128907);
                        r277_StdBlackShape(r374_CircleInvertInnerShape, 'blackInvInnerCircle', null);
                        return r277_StdWhiteShape(r374_CircleInvertInnerShape, 'whiteInvInnerCircle', null);
                    }());
                    (function () {
                        var r378_EllipseFillT = function (r379_kx, r379_ky) {
                            var _r379_t0, _r379_t1;
                            return function (r380_cx, r380_cy, r380_r, r380_s) {
                                var _r380_t0, _r380_t1;
                                var r380_rOrig = r380_r + r380_s;
                                return r271_xn$spirooutline$1aao(r271_g4(r380_cx - (r380_rOrig * r379_kx - r380_s), r380_cy), r271_arcvh.superness(2), r271_g4(r380_cx, r380_cy - (r380_rOrig * r379_ky - r380_s)), r271_archv.superness(2), r271_g4(r380_cx + (r380_rOrig * r379_kx - r380_s), r380_cy), r271_arcvh.superness(2), r271_g4(r380_cx, r380_cy + (r380_rOrig * r379_ky - r380_s)), r271_archv.superness(2), r271_close());
                            };
                        };
                        r277_StdBlackShape(r378_EllipseFillT(1, 1 / 1.5), 'blackEllipse', 11052);
                        r277_StdWhiteShape(r378_EllipseFillT(1, 1 / 1.5), 'whiteEllipse', 11053);
                        r277_StdBlackShape(r378_EllipseFillT(1 / 1.5, 1), 'blackLongEllipse', 11054);
                        return r277_StdWhiteShape(r378_EllipseFillT(1 / 1.5, 1), 'whiteLongEllipse', 11055);
                    }());
                    (function () {
                        var r382_RegularPolygonFill = function (r383_sides, r383_skip, r383_overflow, r383_phase) {
                            var _r383_t0, _r383_t1;
                            return function (r384_cx, r384_cy, r384_size) {
                                var r384_angle, _r384_t2, _r384_t3;
                                var r384_corners = [];
                                var _r384_t0 = 0;
                                var _r384_t1 = r383_sides;
                                var r384_j = _r384_t0;
                                while (r384_j < _r384_t1) {
                                    r384_angle = 2 * Math.PI * r384_j * r383_skip / r383_sides + Math.PI * r383_phase;
                                    r384_corners.push(r271_corner(r384_cx + r384_size * r383_overflow * Math.sin(r384_angle), r384_cy + r384_size * r383_overflow * Math.cos(r384_angle)));
                                    r384_j = r384_j + 1;
                                }
                                return r271_xn$spirooutline$1aao(r384_corners);
                            };
                        };
                        r277_StdBlackShape(r382_RegularPolygonFill(5, 1, 1.05, 0), 'blackPentagon', 11039);
                        r277_StdBlackShape(r382_RegularPolygonFill(5, 1, 1.05, 1), 'turnBlackPentagon', 11202);
                        r277_ConvexWhitePolygon(r382_RegularPolygonFill(5, 1, 1.05, 0), 'whitePentagon', 11040);
                        r277_StdBlackShape(r382_RegularPolygonFill(5, 1, 1.05, 0.5), 'rhBlackPentagon', 11091);
                        r277_ConvexWhitePolygon(r382_RegularPolygonFill(5, 1, 1.05, 0.5), 'rhWhitePentagon', 11092);
                        r277_StdBlackShape(r382_RegularPolygonFill(6, 1, 1.05, 0), 'blackHexagon', 11042);
                        r277_ConvexWhitePolygon(r382_RegularPolygonFill(6, 1, 1.05, 0), 'whiteHexagon', 11041);
                        r277_ConvexWhitePolygon(r382_RegularPolygonFill(6, 1, 1.05, 0.5), 'hWhiteHexagon', 9108);
                        r277_StdBlackShape(r382_RegularPolygonFill(6, 1, 1.05, 0.5), 'hBlackHexagon', 11043);
                        r277_StdBlackShape(r382_RegularPolygonFill(8, 1, 1.05, 0), 'blackHorizontalOctagon', 11203);
                        r277_StdBlackShape(r382_RegularPolygonFill(8, 1, 1.05, 0.128), 'blackOctagon', 11204);
                        r277_ConvexWhitePolygon(r382_RegularPolygonFill(3, 1, 1, 1), 'whiteEqualTriangleDown', null);
                        r277_StdBlackShape(r382_RegularPolygonFill(4, 1, 1, 0.5), 'blackMediumEqualDiamond', null);
                        r277_ConvexWhitePolygon(r382_RegularPolygonFill(4, 1, 1, 0.5), 'whiteMediumEqualDiamond', null);
                        var r382_PentagramSw = function (r387_c) {
                            var _r387_t0, _r387_t1;
                            return { 'sw': r271_AdviceStroke(r387_c, Math.sqrt(r277_Geom.Scalar)) * Math.sqrt(5) };
                        };
                        r277_StdBlackShape(r382_RegularPolygonFill(5, 2, 1.1, 0), 'blackStar', 9733);
                        r277_StdWhiteShape(r382_RegularPolygonFill(5, 2, 1.1, 0), 'whiteStar', 9734, r382_PentagramSw(5.5));
                        r277_StdWhiteShape(r382_RegularPolygonFill(5, 2, 1.1, 0), 'whiteMediumStar', 11088, Object.assign(r382_PentagramSw(7), r277_Size.Medium));
                        r277_StdBlackShape(r382_RegularPolygonFill(5, 2, 1.1, 0), 'blackSmallStar', 11089, r277_Size.Small);
                        return r277_StdWhiteShape(r382_RegularPolygonFill(5, 2, 1.1, 0), 'whiteSmallStar', 11090, Object.assign(r382_PentagramSw(3), r277_Size.Small));
                    }());
                    (function () {
                        var r389_CurlyEdgeStar = function (r390_sides, r390_shrink, r390_overflow, r390_phase) {
                            var _r390_t0, _r390_t1;
                            return function (r391_cx, r391_cy, r391_size) {
                                var r391_angleCorner, r391_angleArc, _r391_t2, _r391_t3;
                                var r391_corners = [];
                                var _r391_t0 = 0;
                                var _r391_t1 = r390_sides;
                                var r391_j = _r391_t0;
                                while (r391_j < _r391_t1) {
                                    r391_angleCorner = 2 * Math.PI * r391_j / r390_sides + Math.PI * r390_phase;
                                    r391_angleArc = 2 * Math.PI * (r391_j + 1 / 2) / r390_sides + Math.PI * r390_phase;
                                    r391_corners.push(r271_corner(r391_cx + r391_size * r390_overflow * Math.sin(r391_angleCorner), r391_cy + r391_size * r390_overflow * Math.cos(r391_angleCorner)));
                                    r391_corners.push(r271_g2(r391_cx + r391_size * r390_shrink * Math.sin(r391_angleArc), r391_cy + r391_size * r390_shrink * Math.cos(r391_angleArc)));
                                    r391_j = r391_j + 1;
                                }
                                return r271_xn$spirooutline$1aao(r391_corners, r271_close());
                            };
                        };
                        var r389_PentagramSw = function (r394_c) {
                            var _r394_t0, _r394_t1;
                            return { 'sw': r271_AdviceStroke(r394_c, Math.sqrt(r277_Geom.Scalar)) * Math.sqrt(5) };
                        };
                        r277_StdBlackShape(r389_CurlyEdgeStar(4, 0.6, 1.1, 0), 'blackFourPrintedStar', 10022);
                        return r277_StdWhiteShape(r389_CurlyEdgeStar(4, 0.6, 1.1, 0), 'whiteFourPrintedStar', 10023, r389_PentagramSw(5));
                    }());
                    return function () {
                        var r396_RightArrowHeadShape = function (r397_cx, r397_cy, r397_size) {
                            var _r397_t0, _r397_t1;
                            return r271_xn$spirooutline$1aao(r271_corner(r397_cx - r397_size, r397_cy + r397_size), r271_corner(r397_cx + r397_size, r397_cy), r271_corner(r397_cx - r397_size, r397_cy - r397_size), r271_corner(r397_cx - 0.5 * r397_size, r397_cy));
                        };
                        return r277_StdBlackShape(r396_RightArrowHeadShape, 'blackArrowHeadRight', 10148, r277_Size.Oblique);
                    }();
                }());
                _r274_t5 = _r274_t2 = _r274_t2 + 1;
                _r274_t4 = _r274_t2 < _r274_t1;
            }
            return _r274_t5;
        }();
    });
    return void 0;
});
