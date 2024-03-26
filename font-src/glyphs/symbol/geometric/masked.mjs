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
    r270_xn$Capture_Ext$2Lrc2b['$defineGlyphBlockImpl$'](r270_xn$Capture_Ext$2Lrc2b, 'Symbol-Geometric-Masked', function (r271_xn$Capture$2Lrc8, r271_xn$ExportCapture$2Lrc4b) {
        var _r271_t4, _r271_t5, _r271_t6, _r271_tag7;
        var _r271_t0 = r271_xn$Capture$2Lrc8;
        var r271_xn$createAndSaveGlyphImpl$2Lrc3c = _r271_t0['$createAndSaveGlyphImpl$'];
        var r271_xn$NamedParameterPair$2Lrc9b = _r271_t0['$NamedParameterPair$'];
        var r271_xn$assignUnicodeImpl$2Lrc8b = _r271_t0['$assignUnicodeImpl$'];
        var r271_xn$execState$2Lrc0b = _r271_t0['$execState$'];
        var _r271_t1 = r271_xn$Capture$2Lrc8.Metrics;
        var r271_Width = _r271_t1.Width;
        var r271_Translate = _r271_t1.Translate;
        var r271_ApparentTranslate = _r271_t1.ApparentTranslate;
        var r271_HVContrast = _r271_t1.HVContrast;
        var r271_WideWidth1 = _r271_t1.WideWidth1;
        var r271_GeometryStroke = _r271_t1.GeometryStroke;
        var _r271_t2 = r271_xn$Capture$2Lrc8.SpiroFns;
        var r271_corner = _r271_t2.corner;
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
                    var _r277_t3, _r277_tag4, _r277_t5, _r277_tag6, _r277_t7, _r277_tag8, _r277_t9, _r277_tag10, _r277_t11, _r277_tag12, _r277_t13, _r277_tag14, _r277_t15, _r277_tag16, _r277_t17, _r277_tag18;
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
                    var r277_Rect = _r277_t0.Rect;
                    var r277_HBar = _r277_t0.HBar;
                    var r277_VBar = _r277_t0.VBar;
                    var r277_Ungizmo = _r277_t0.Ungizmo;
                    var r277_Regizmo = _r277_t0.Regizmo;
                    var r277_FlipAround = _r277_t0.FlipAround;
                    var r277_ScaleAround = _r277_t0.ScaleAround;
                    var r277_NameUni = _r277_t0.NameUni;
                    var r277_WithTransform = _r277_t0.WithTransform;
                    var r277_MaskBelow = _r277_t0.MaskBelow;
                    var r277_MaskLeft = _r277_t0.MaskLeft;
                    var _r277_t1 = r271_xn$Capture$2Lrc8['Common-Derivatives'].resolve();
                    var r277_xn$referglyph$1aao = _r277_t1['refer-glyph'];
                    var r277_alias = _r277_t1.alias;
                    var _r277_t2 = r271_xn$Capture$2Lrc8['Symbol-Geometric-Shared'].resolve();
                    var r277_GeometricDim = _r277_t2.GeometricDim;
                    var r277_UnicodeWeightGrade = _r277_t2.UnicodeWeightGrade;
                    var r277_GeometricSizes = _r277_t2.GeometricSizes;
                    var r277_Geom = r277_GeometricDim(r277_MosaicUnitWidth, r274_MosaicWidth);
                    var r277_Size = r277_GeometricSizes(r277_Geom);
                    var r277_UpperHalfMask = function () {
                        var _r283_t0, _r283_t1;
                        return r277_Rect(r277_Geom.MidY + r277_Geom.Size * 2, r277_Geom.MidY, 0, r277_Geom.Width);
                    };
                    var r277_LowerHalfMask = function () {
                        var _r284_t0, _r284_t1;
                        return r277_Rect(r277_Geom.MidY, r277_Geom.MidY - r277_Geom.Size * 2, 0, r277_Geom.Width);
                    };
                    var r277_LeftHalfMask = function () {
                        var _r285_t0, _r285_t1;
                        return r277_Rect(r277_Geom.MidY + r277_Geom.Size * 2, r277_Geom.MidY - r277_Geom.Size * 2, 0, r277_Geom.MidX);
                    };
                    var r277_RightHalfMask = function () {
                        var _r286_t0, _r286_t1;
                        return r277_Rect(r277_Geom.MidY + r277_Geom.Size * 2, r277_Geom.MidY - r277_Geom.Size * 2, r277_Geom.MidX, r277_Geom.Width);
                    };
                    var r277_UpperLeftQuarterMark = function () {
                        var _r287_t0, _r287_t1;
                        return r271_intersection(r277_UpperHalfMask(), r277_LeftHalfMask());
                    };
                    var r277_UpperRightQuarterMark = function () {
                        var _r288_t0, _r288_t1;
                        return r271_intersection(r277_UpperHalfMask(), r277_RightHalfMask());
                    };
                    var r277_LowerLeftQuarterMark = function () {
                        var _r289_t0, _r289_t1;
                        return r271_intersection(r277_LowerHalfMask(), r277_LeftHalfMask());
                    };
                    var r277_LowerRightQuarterMark = function () {
                        var _r290_t0, _r290_t1;
                        return r271_intersection(r277_LowerHalfMask(), r277_RightHalfMask());
                    };
                    var r277_UpperLeftHalfMark = function () {
                        var _r291_t0, _r291_t1;
                        return r271_xn$spirooutline$1aao(r271_corner(r277_Geom.MidX + r277_Geom.Size * 2, r277_Geom.MidY + r277_Geom.Size * 2), r271_corner(r277_Geom.MidX - r277_Geom.Size * 2, r277_Geom.MidY + r277_Geom.Size * 2), r271_corner(r277_Geom.MidX - r277_Geom.Size * 2, r277_Geom.MidY - r277_Geom.Size * 2));
                    };
                    var r277_LowerRightHalfMark = function () {
                        var _r292_t0, _r292_t1;
                        return r271_xn$spirooutline$1aao(r271_corner(r277_Geom.MidX + r277_Geom.Size * 2, r277_Geom.MidY + r277_Geom.Size * 2), r271_corner(r277_Geom.MidX - r277_Geom.Size * 2, r277_Geom.MidY - r277_Geom.Size * 2), r271_corner(r277_Geom.MidX + r277_Geom.Size * 2, r277_Geom.MidY - r277_Geom.Size * 2));
                    };
                    var r277_UpperRightHalfMark = function () {
                        var _r293_t0, _r293_t1;
                        return r271_xn$spirooutline$1aao(r271_corner(r277_Geom.MidX + r277_Geom.Size * 2, r277_Geom.MidY + r277_Geom.Size * 2), r271_corner(r277_Geom.MidX - r277_Geom.Size * 2, r277_Geom.MidY + r277_Geom.Size * 2), r271_corner(r277_Geom.MidX + r277_Geom.Size * 2, r277_Geom.MidY - r277_Geom.Size * 2));
                    };
                    var r277_LowerLeftHalfMark = function () {
                        var _r294_t0, _r294_t1;
                        return r271_xn$spirooutline$1aao(r271_corner(r277_Geom.MidX - r277_Geom.Size * 2, r277_Geom.MidY - r277_Geom.Size * 2), r271_corner(r277_Geom.MidX - r277_Geom.Size * 2, r277_Geom.MidY + r277_Geom.Size * 2), r271_corner(r277_Geom.MidX + r277_Geom.Size * 2, r277_Geom.MidY - r277_Geom.Size * 2));
                    };
                    (function () {
                        var r296_u, r296_WC, r296_LT, r296_LB, r296_RT, r296_RB, r296_pAngleStart, r296_pAngleEnd, _r296_t3, _r296_t7, _r296_t11, _r296_t13;
                        var r296_partialCircleQuarters = [
                            [
                                9680,
                                1,
                                1,
                                1,
                                0,
                                0
                            ],
                            [
                                9681,
                                1,
                                0,
                                0,
                                1,
                                1
                            ],
                            [
                                9682,
                                1,
                                0,
                                1,
                                0,
                                1
                            ],
                            [
                                9683,
                                1,
                                1,
                                0,
                                1,
                                0
                            ],
                            [
                                9684,
                                1,
                                0,
                                0,
                                1,
                                0
                            ],
                            [
                                9685,
                                1,
                                0,
                                1,
                                1,
                                1
                            ],
                            [
                                11210,
                                0,
                                1,
                                0,
                                1,
                                0
                            ],
                            [
                                11211,
                                0,
                                0,
                                1,
                                0,
                                1
                            ],
                            [
                                9686,
                                0,
                                1,
                                1,
                                0,
                                0
                            ],
                            [
                                9687,
                                0,
                                0,
                                0,
                                1,
                                1
                            ]
                        ];
                        var _r296_t0 = r296_partialCircleQuarters;
                        var _r296_t1 = _r296_t0.length;
                        var _r296_t2 = 0;
                        while (_r296_t2 < _r296_t1) {
                            _r296_t3 = _r296_t0[_r296_t2];
                            r296_u = _r296_t3[0];
                            r296_WC = _r296_t3[1];
                            r296_LT = _r296_t3[2];
                            r296_LB = _r296_t3[3];
                            r296_RT = _r296_t3[4];
                            r296_RB = _r296_t3[5];
                            r271_xn$createAndSaveGlyphImpl$2Lrc3c(r277_MangleName(r277_NameUni(r296_u)), r277_MangleUnicode(r296_u), function () {
                                var _r301_t1;
                                var _r301_t0 = this;
                                var r301_currentGlyph = _r301_t0;
                                r301_currentGlyph.setWidth(r277_Geom.Width);
                                r301_currentGlyph.include(r271_union(r271_xn$createAndSaveGlyphImpl$2Lrc3c(null, null, function () {
                                    var _r306_t1;
                                    var _r306_t0 = this;
                                    var r306_currentGlyph = _r306_t0;
                                    if (r296_WC)
                                        r306_currentGlyph.include(r277_xn$referglyph$1aao(r277_MangleName('whiteCircle')));
                                    return void 0;
                                }), r271_intersection(r277_xn$referglyph$1aao(r277_MangleName('blackCircleO')), r271_xn$createAndSaveGlyphImpl$2Lrc3c(null, null, function () {
                                    var _r310_t1;
                                    var _r310_t0 = this;
                                    var r310_currentGlyph = _r310_t0;
                                    if (r296_LT)
                                        r310_currentGlyph.include(r277_UpperLeftQuarterMark());
                                    if (r296_LB)
                                        r310_currentGlyph.include(r277_LowerLeftQuarterMark());
                                    if (r296_RT)
                                        r310_currentGlyph.include(r277_UpperRightQuarterMark());
                                    if (r296_RB)
                                        r310_currentGlyph.include(r277_LowerRightQuarterMark());
                                    return void 0;
                                }))));
                                return void 0;
                            });
                            _r296_t2 = _r296_t2 + 1;
                        }
                        var r296_arcQuarters = [
                            [
                                9692,
                                1,
                                0,
                                0,
                                0
                            ],
                            [
                                9693,
                                0,
                                0,
                                1,
                                0
                            ],
                            [
                                9694,
                                0,
                                0,
                                0,
                                1
                            ],
                            [
                                9695,
                                0,
                                1,
                                0,
                                0
                            ],
                            [
                                9696,
                                1,
                                0,
                                1,
                                0
                            ],
                            [
                                9697,
                                0,
                                1,
                                0,
                                1
                            ]
                        ];
                        var _r296_t4 = r296_arcQuarters;
                        var _r296_t5 = _r296_t4.length;
                        var _r296_t6 = 0;
                        while (_r296_t6 < _r296_t5) {
                            _r296_t7 = _r296_t4[_r296_t6];
                            r296_u = _r296_t7[0];
                            r296_LT = _r296_t7[1];
                            r296_LB = _r296_t7[2];
                            r296_RT = _r296_t7[3];
                            r296_RB = _r296_t7[4];
                            r271_xn$createAndSaveGlyphImpl$2Lrc3c(r277_MangleName(r277_NameUni(r296_u)), r277_MangleUnicode(r296_u), function () {
                                var _r319_t1;
                                var _r319_t0 = this;
                                var r319_currentGlyph = _r319_t0;
                                r319_currentGlyph.setWidth(r277_Geom.Width);
                                r319_currentGlyph.include(r271_intersection(r277_xn$referglyph$1aao(r277_MangleName('whiteCircle')), r271_xn$createAndSaveGlyphImpl$2Lrc3c(null, null, function () {
                                    var _r324_t1;
                                    var _r324_t0 = this;
                                    var r324_currentGlyph = _r324_t0;
                                    if (r296_LT)
                                        r324_currentGlyph.include(r277_UpperLeftQuarterMark());
                                    if (r296_LB)
                                        r324_currentGlyph.include(r277_LowerLeftQuarterMark());
                                    if (r296_RT)
                                        r324_currentGlyph.include(r277_UpperRightQuarterMark());
                                    if (r296_RB)
                                        r324_currentGlyph.include(r277_LowerRightQuarterMark());
                                    return void 0;
                                })));
                                return void 0;
                            });
                            _r296_t6 = _r296_t6 + 1;
                        }
                        var r296_progressCircleMaskPoint = function (r329_pAngle) {
                            var _r329_t0, _r329_t1;
                            return r271_corner(r277_Geom.MidX + Math.cos((0.5 - r329_pAngle * 2) * Math.PI) * r277_Geom.Width * 4, r277_Geom.MidY + Math.sin((0.5 - r329_pAngle * 2) * Math.PI) * r277_Geom.Width * 4);
                        };
                        var r296_progressCircleSections = [
                            [
                                60934,
                                -1 / 12,
                                1 / 12
                            ],
                            [
                                60935,
                                0,
                                1 / 3
                            ],
                            [
                                60936,
                                1 / 6,
                                1 / 2 + 1 / 24
                            ],
                            [
                                60937,
                                1 / 4,
                                3 / 4
                            ],
                            [
                                60938,
                                1 / 2 - 1 / 24,
                                5 / 6
                            ],
                            [
                                60939,
                                2 / 3,
                                1
                            ]
                        ];
                        var _r296_t8 = r296_progressCircleSections;
                        var _r296_t9 = _r296_t8.length;
                        var _r296_t10 = 0;
                        var _r296_t12 = _r296_t10 < _r296_t9;
                        while (_r296_t12) {
                            _r296_t13 = (_r296_t11 = _r296_t8[_r296_t10], r296_u = _r296_t11[0], r296_pAngleStart = _r296_t11[1], r296_pAngleEnd = _r296_t11[2], r271_xn$createAndSaveGlyphImpl$2Lrc3c(r277_MangleName(r277_NameUni(r296_u)), r277_MangleUnicode(r296_u), function () {
                                var _r334_t1;
                                var _r334_t0 = this;
                                var r334_currentGlyph = _r334_t0;
                                r334_currentGlyph.setWidth(r277_Geom.Width);
                                r334_currentGlyph.include(r271_intersection(r277_xn$referglyph$1aao(r277_MangleName('whiteCircle')), r271_xn$spirooutline$1aao(r271_corner(r277_Geom.MidX, r277_Geom.MidY), r296_progressCircleMaskPoint(r1_mix(r296_pAngleStart, r296_pAngleEnd, 0 / 4)), r296_progressCircleMaskPoint(r1_mix(r296_pAngleStart, r296_pAngleEnd, 1 / 4)), r296_progressCircleMaskPoint(r1_mix(r296_pAngleStart, r296_pAngleEnd, 2 / 4)), r296_progressCircleMaskPoint(r1_mix(r296_pAngleStart, r296_pAngleEnd, 3 / 4)), r296_progressCircleMaskPoint(r1_mix(r296_pAngleStart, r296_pAngleEnd, 4 / 4)))));
                                return void 0;
                            }), _r296_t10 = _r296_t10 + 1);
                            _r296_t12 = _r296_t10 < _r296_t9;
                        }
                        return _r296_t13;
                    }());
                    (function () {
                        var r338_u, r338_LT, r338_LB, r338_RT, r338_RB, r338_LTh, r338_LBh, r338_RTh, r338_RBh, _r338_t3, _r338_t5;
                        var r338_squareParts = [
                            [
                                9703,
                                1,
                                1,
                                0,
                                0,
                                0,
                                0,
                                0,
                                0
                            ],
                            [
                                9704,
                                0,
                                0,
                                1,
                                1,
                                0,
                                0,
                                0,
                                0
                            ],
                            [
                                9705,
                                0,
                                0,
                                0,
                                0,
                                1,
                                0,
                                0,
                                0
                            ],
                            [
                                11026,
                                1,
                                0,
                                1,
                                0,
                                0,
                                0,
                                0,
                                0
                            ],
                            [
                                11027,
                                0,
                                1,
                                0,
                                1,
                                0,
                                0,
                                0,
                                0
                            ],
                            [
                                11028,
                                0,
                                0,
                                0,
                                0,
                                0,
                                0,
                                1,
                                0
                            ],
                            [
                                11029,
                                0,
                                0,
                                0,
                                0,
                                0,
                                1,
                                0,
                                0
                            ],
                            [
                                9706,
                                0,
                                0,
                                0,
                                0,
                                0,
                                0,
                                0,
                                1
                            ]
                        ];
                        var _r338_t0 = r338_squareParts;
                        var _r338_t1 = _r338_t0.length;
                        var _r338_t2 = 0;
                        var _r338_t4 = _r338_t2 < _r338_t1;
                        while (_r338_t4) {
                            _r338_t5 = (_r338_t3 = _r338_t0[_r338_t2], r338_u = _r338_t3[0], r338_LT = _r338_t3[1], r338_LB = _r338_t3[2], r338_RT = _r338_t3[3], r338_RB = _r338_t3[4], r338_LTh = _r338_t3[5], r338_LBh = _r338_t3[6], r338_RTh = _r338_t3[7], r338_RBh = _r338_t3[8], r271_xn$createAndSaveGlyphImpl$2Lrc3c(r277_MangleName(r277_NameUni(r338_u)), r277_MangleUnicode(r338_u), function () {
                                var _r343_t1;
                                var _r343_t0 = this;
                                var r343_currentGlyph = _r343_t0;
                                r343_currentGlyph.setWidth(r277_Geom.Width);
                                r343_currentGlyph.include(r271_union(r277_xn$referglyph$1aao(r277_MangleName('whiteSquare')), r271_intersection(r277_xn$referglyph$1aao(r277_MangleName('blackSquare')), r271_xn$createAndSaveGlyphImpl$2Lrc3c(null, null, function () {
                                    var _r348_t1;
                                    var _r348_t0 = this;
                                    var r348_currentGlyph = _r348_t0;
                                    if (r338_LT)
                                        r348_currentGlyph.include(r277_UpperLeftQuarterMark());
                                    if (r338_LB)
                                        r348_currentGlyph.include(r277_LowerLeftQuarterMark());
                                    if (r338_RT)
                                        r348_currentGlyph.include(r277_UpperRightQuarterMark());
                                    if (r338_RB)
                                        r348_currentGlyph.include(r277_LowerRightQuarterMark());
                                    if (r338_LTh)
                                        r348_currentGlyph.include(r277_UpperLeftHalfMark());
                                    if (r338_LBh)
                                        r348_currentGlyph.include(r277_LowerLeftHalfMark());
                                    if (r338_RTh)
                                        r348_currentGlyph.include(r277_UpperRightHalfMark());
                                    if (r338_RBh)
                                        r348_currentGlyph.include(r277_LowerRightHalfMark());
                                    return void 0;
                                }))));
                                return void 0;
                            }), _r338_t2 = _r338_t2 + 1);
                            _r338_t4 = _r338_t2 < _r338_t1;
                        }
                        return _r338_t5;
                    }());
                    (function () {
                        var r358_u, r358_LT, r358_LB, r358_RT, r358_RB, r358_LTh, r358_LBh, r358_RTh, r358_RBh, _r358_t3, _r358_t5;
                        var r358_diamondParts = [
                            [
                                11030,
                                1,
                                1,
                                0,
                                0
                            ],
                            [
                                11031,
                                0,
                                0,
                                1,
                                1
                            ],
                            [
                                11032,
                                1,
                                0,
                                1,
                                0
                            ],
                            [
                                11033,
                                0,
                                1,
                                0,
                                1
                            ]
                        ];
                        var _r358_t0 = r358_diamondParts;
                        var _r358_t1 = _r358_t0.length;
                        var _r358_t2 = 0;
                        var _r358_t4 = _r358_t2 < _r358_t1;
                        while (_r358_t4) {
                            _r358_t5 = (_r358_t3 = _r358_t0[_r358_t2], r358_u = _r358_t3[0], r358_LT = _r358_t3[1], r358_LB = _r358_t3[2], r358_RT = _r358_t3[3], r358_RB = _r358_t3[4], r358_LTh = _r358_t3[5], r358_LBh = _r358_t3[6], r358_RTh = _r358_t3[7], r358_RBh = _r358_t3[8], r271_xn$createAndSaveGlyphImpl$2Lrc3c(r277_MangleName(r277_NameUni(r358_u)), r277_MangleUnicode(r358_u), function () {
                                var _r363_t1;
                                var _r363_t0 = this;
                                var r363_currentGlyph = _r363_t0;
                                r363_currentGlyph.setWidth(r277_Geom.Width);
                                r363_currentGlyph.include(r271_union(r277_xn$referglyph$1aao(r277_MangleName('whiteDiamond')), r271_intersection(r277_xn$referglyph$1aao(r277_MangleName('blackDiamond')), r271_xn$createAndSaveGlyphImpl$2Lrc3c(null, null, function () {
                                    var _r368_t1;
                                    var _r368_t0 = this;
                                    var r368_currentGlyph = _r368_t0;
                                    if (r358_LT)
                                        r368_currentGlyph.include(r277_UpperLeftQuarterMark());
                                    if (r358_LB)
                                        r368_currentGlyph.include(r277_LowerLeftQuarterMark());
                                    if (r358_RT)
                                        r368_currentGlyph.include(r277_UpperRightQuarterMark());
                                    if (r358_RB)
                                        r368_currentGlyph.include(r277_LowerRightQuarterMark());
                                    return void 0;
                                }))));
                                return void 0;
                            }), _r358_t2 = _r358_t2 + 1);
                            _r358_t4 = _r358_t2 < _r358_t1;
                        }
                        return _r358_t5;
                    }());
                    (function () {
                        var r374_u, r374_UP, r374_DN, r374_LH, r374_RH, _r374_t3, _r374_t5;
                        var r374_triangleParts = [
                            [
                                9709,
                                1,
                                0,
                                1,
                                0
                            ],
                            [
                                9710,
                                1,
                                0,
                                0,
                                1
                            ],
                            [
                                10728,
                                0,
                                1,
                                1,
                                0
                            ],
                            [
                                10729,
                                0,
                                1,
                                0,
                                1
                            ]
                        ];
                        var _r374_t0 = r374_triangleParts;
                        var _r374_t1 = _r374_t0.length;
                        var _r374_t2 = 0;
                        var _r374_t4 = _r374_t2 < _r374_t1;
                        while (_r374_t4) {
                            _r374_t5 = (_r374_t3 = _r374_t0[_r374_t2], r374_u = _r374_t3[0], r374_UP = _r374_t3[1], r374_DN = _r374_t3[2], r374_LH = _r374_t3[3], r374_RH = _r374_t3[4], r271_xn$createAndSaveGlyphImpl$2Lrc3c(r277_MangleName(r277_NameUni(r374_u)), r277_MangleUnicode(r374_u), function () {
                                var _r379_t1;
                                var _r379_t0 = this;
                                var r379_currentGlyph = _r379_t0;
                                r379_currentGlyph.setWidth(r277_Geom.Width);
                                r379_currentGlyph.include(r271_union(function () {
                                    var _r383_t1;
                                    var _r383_t0 = this;
                                    var r383_currentGlyph = _r383_t0;
                                    if (r374_UP)
                                        r383_currentGlyph.include(r277_xn$referglyph$1aao(r277_MangleName('whiteTriangleUp')));
                                    if (r374_DN)
                                        r383_currentGlyph.include(r277_xn$referglyph$1aao(r277_MangleName('whiteTriangleDown')));
                                    return void 0;
                                }, r271_intersection(function () {
                                    var _r387_t1;
                                    var _r387_t0 = this;
                                    var r387_currentGlyph = _r387_t0;
                                    if (r374_UP)
                                        r387_currentGlyph.include(r277_xn$referglyph$1aao(r277_MangleName('blackTriangleUp')));
                                    if (r374_DN)
                                        r387_currentGlyph.include(r277_xn$referglyph$1aao(r277_MangleName('blackTriangleDown')));
                                    return void 0;
                                }, function () {
                                    var _r391_t1;
                                    var _r391_t0 = this;
                                    var r391_currentGlyph = _r391_t0;
                                    if (r374_LH)
                                        r391_currentGlyph.include(r277_LeftHalfMask());
                                    if (r374_RH)
                                        r391_currentGlyph.include(r277_RightHalfMask());
                                    return void 0;
                                })));
                                return void 0;
                            }), _r374_t2 = _r374_t2 + 1);
                            _r374_t4 = _r374_t2 < _r374_t1;
                        }
                        return _r374_t5;
                    }());
                    (function () {
                        var r395_u, r395_lh, r395_rh, r395_bord, _r395_t3, _r395_t5;
                        var r395_starParts = [
                            [
                                11240,
                                1,
                                0,
                                0
                            ],
                            [
                                11241,
                                0,
                                1,
                                0
                            ],
                            [
                                11242,
                                1,
                                0,
                                1
                            ],
                            [
                                11243,
                                0,
                                1,
                                1
                            ]
                        ];
                        var _r395_t0 = r395_starParts;
                        var _r395_t1 = _r395_t0.length;
                        var _r395_t2 = 0;
                        var _r395_t4 = _r395_t2 < _r395_t1;
                        while (_r395_t4) {
                            _r395_t5 = (_r395_t3 = _r395_t0[_r395_t2], r395_u = _r395_t3[0], r395_lh = _r395_t3[1], r395_rh = _r395_t3[2], r395_bord = _r395_t3[3], r271_xn$createAndSaveGlyphImpl$2Lrc3c(r277_MangleName(r277_NameUni(r395_u)), r277_MangleUnicode(r395_u), function () {
                                var _r399_t1;
                                var _r399_t0 = this;
                                var r399_currentGlyph = _r399_t0;
                                r399_currentGlyph.setWidth(r277_Geom.Width);
                                if (r395_bord)
                                    r399_currentGlyph.include(r277_xn$referglyph$1aao(r277_MangleName('whiteStar')));
                                if (r395_lh)
                                    r399_currentGlyph.include(r271_intersection(r277_LeftHalfMask(), r277_xn$referglyph$1aao(r277_MangleName('blackStar'))));
                                if (r395_rh)
                                    r399_currentGlyph.include(r271_intersection(r277_RightHalfMask(), r277_xn$referglyph$1aao(r277_MangleName('blackStar'))));
                                return void 0;
                            }), _r395_t2 = _r395_t2 + 1);
                            _r395_t4 = _r395_t2 < _r395_t1;
                        }
                        return _r395_t5;
                    }());
                    (function () {
                        var r405_u, r405_frame, r405_T, r405_L, r405_B, r405_R, _r405_t3, _r405_t5;
                        var r405_quarterLineParts = [
                            [
                                9712,
                                'whiteSquare',
                                1,
                                1,
                                0,
                                0
                            ],
                            [
                                9713,
                                'whiteSquare',
                                0,
                                1,
                                1,
                                0
                            ],
                            [
                                9714,
                                'whiteSquare',
                                0,
                                0,
                                1,
                                1
                            ],
                            [
                                9715,
                                'whiteSquare',
                                1,
                                0,
                                0,
                                1
                            ],
                            [
                                9716,
                                'whiteCircle',
                                1,
                                1,
                                0,
                                0
                            ],
                            [
                                9717,
                                'whiteCircle',
                                0,
                                1,
                                1,
                                0
                            ],
                            [
                                9718,
                                'whiteCircle',
                                0,
                                0,
                                1,
                                1
                            ],
                            [
                                9719,
                                'whiteCircle',
                                1,
                                0,
                                0,
                                1
                            ]
                        ];
                        var _r405_t0 = r405_quarterLineParts;
                        var _r405_t1 = _r405_t0.length;
                        var _r405_t2 = 0;
                        var _r405_t4 = _r405_t2 < _r405_t1;
                        while (_r405_t4) {
                            _r405_t5 = (_r405_t3 = _r405_t0[_r405_t2], r405_u = _r405_t3[0], r405_frame = _r405_t3[1], r405_T = _r405_t3[2], r405_L = _r405_t3[3], r405_B = _r405_t3[4], r405_R = _r405_t3[5], r271_xn$createAndSaveGlyphImpl$2Lrc3c(r277_MangleName(r277_NameUni(r405_u)), r277_MangleUnicode(r405_u), function () {
                                var _r409_t1;
                                var _r409_t0 = this;
                                var r409_currentGlyph = _r409_t0;
                                var r409_hh = r271_GeometryStroke / 2 * r271_HVContrast;
                                var r409_hv = r271_GeometryStroke / 2;
                                var r409_s = r271_GeometryStroke;
                                r409_currentGlyph.setWidth(r277_Geom.Width);
                                r409_currentGlyph.include(r271_union(r277_xn$referglyph$1aao(r277_MangleName(r405_frame)), r405_L ? r277_HBar.m(r277_Geom.MidX - r277_Geom.Size + r409_hh, r277_Geom.MidX + r409_hh, r277_Geom.MidY, r409_s) : function () {
                                    var _r413_t1;
                                    var _r413_t0 = this;
                                    var r413_currentGlyph = _r413_t0;
                                    return void 0;
                                }, r405_R ? r277_HBar.m(r277_Geom.MidX + r277_Geom.Size - r409_hh, r277_Geom.MidX - r409_hh, r277_Geom.MidY, r409_s) : function () {
                                    var _r415_t1;
                                    var _r415_t0 = this;
                                    var r415_currentGlyph = _r415_t0;
                                    return void 0;
                                }, r405_T ? r277_VBar.m(r277_Geom.MidX, r277_Geom.MidY + r277_Geom.Size - r409_hv, r277_Geom.MidY - r409_hv, r409_s) : function () {
                                    var _r417_t1;
                                    var _r417_t0 = this;
                                    var r417_currentGlyph = _r417_t0;
                                    return void 0;
                                }, r405_B ? r277_VBar.m(r277_Geom.MidX, r277_Geom.MidY - r277_Geom.Size + r409_hv, r277_Geom.MidY + r409_hv, r409_s) : function () {
                                    var _r419_t1;
                                    var _r419_t0 = this;
                                    var r419_currentGlyph = _r419_t0;
                                    return void 0;
                                }));
                                return void 0;
                            }), _r405_t2 = _r405_t2 + 1);
                            _r405_t4 = _r405_t2 < _r405_t1;
                        }
                        return _r405_t5;
                    }());
                    (function () {
                        r271_xn$createAndSaveGlyphImpl$2Lrc3c(r277_MangleName('uni2389'), r277_MangleUnicode(9097), function () {
                            var _r424_t1;
                            var _r424_t0 = this;
                            var r424_currentGlyph = _r424_t0;
                            var r424_shiftUp = r271_ApparentTranslate(0, Math.max(0.5 * Math.sqrt(2) * r277_Size.MediumSmall.sw, r277_Geom.Size * (1 - r277_Size.MediumSmall.size)));
                            r424_currentGlyph.setWidth(r277_Geom.Width);
                            r424_currentGlyph.include(r277_xn$referglyph$1aao(r277_MangleName('whiteCircle')));
                            r424_currentGlyph.include(r271_intersection(r277_xn$referglyph$1aao(r277_MangleName('blackCircleO')), r271_union(r271_difference(r277_HBar.m(0, r277_Geom.Width, r277_Geom.MidY, r271_GeometryStroke), r277_WithTransform(r271_ApparentTranslate(0, 0.01), r277_WithTransform(r424_shiftUp, r277_xn$referglyph$1aao(r277_MangleName('blackMediumEqualDiamond'))))), r271_intersection(r277_MaskBelow(r277_Geom.MidY + r271_GeometryStroke / 2), r277_WithTransform(r424_shiftUp, r277_xn$referglyph$1aao(r277_MangleName('whiteMediumEqualDiamond')))))));
                            return void 0;
                        });
                        return r271_xn$createAndSaveGlyphImpl$2Lrc3c(r277_MangleName('uni238A'), r277_MangleUnicode(9098), function () {
                            var _r430_t1;
                            var _r430_t0 = this;
                            var r430_currentGlyph = _r430_t0;
                            r430_currentGlyph.setWidth(r277_Geom.Width);
                            r430_currentGlyph.include(r277_xn$referglyph$1aao(r277_MangleName('whiteCircle')));
                            r430_currentGlyph.include(r271_intersection(r277_xn$referglyph$1aao(r277_MangleName('blackCircleO')), r277_xn$referglyph$1aao(r277_MangleName('whiteEqualTriangleDown'))));
                            return void 0;
                        });
                    }());
                    return function () {
                        r277_alias(r277_MangleName('newMoon'), r277_MangleUnicode(127761), r277_MangleName('blackCircle'));
                        r277_alias(r277_MangleName('firstQuarterMoon'), r277_MangleUnicode(127763), r277_MangleName(r277_NameUni(9680)));
                        r277_alias(r277_MangleName('fullMoon'), r277_MangleUnicode(127765), r277_MangleName('whiteCircle'));
                        r277_alias(r277_MangleName('lastQuarterMoon'), r277_MangleUnicode(127767), r277_MangleName(r277_NameUni(9681)));
                        var r435_WaxingMoonMask = function () {
                            var _r436_t0, _r436_t1;
                            return r271_union(r277_MaskLeft(r277_Geom.MidX), function () {
                                var _r438_t1;
                                var _r438_t0 = this;
                                var r438_currentGlyph = _r438_t0;
                                r438_currentGlyph.include(r277_xn$referglyph$1aao(r277_MangleName('blackCircleO')), true, true);
                                r438_currentGlyph.include(r277_Ungizmo());
                                r438_currentGlyph.include(r277_ScaleAround(r277_Geom.MidX, r277_Geom.MidY, 0.625, 1 - 0.5 * r271_GeometryStroke / r277_Geom.Size));
                                r438_currentGlyph.include(r271_Translate(-r271_GeometryStroke * r271_HVContrast, 0));
                                r438_currentGlyph.include(r277_Regizmo());
                                return void 0;
                            });
                        };
                        r271_xn$createAndSaveGlyphImpl$2Lrc3c(r277_MangleName('waxingCrescentMoon'), r277_MangleUnicode(127762), function () {
                            var _r446_t1;
                            var _r446_t0 = this;
                            var r446_currentGlyph = _r446_t0;
                            r446_currentGlyph.setWidth(r277_Geom.Width);
                            r446_currentGlyph.include(r277_xn$referglyph$1aao(r277_MangleName('whiteCircle')));
                            r446_currentGlyph.include(r271_intersection(r277_xn$referglyph$1aao(r277_MangleName('blackCircleO')), r435_WaxingMoonMask()));
                            return void 0;
                        });
                        r271_xn$createAndSaveGlyphImpl$2Lrc3c(r277_MangleName('waxingGibbousMoon'), r277_MangleUnicode(127764), function () {
                            var _r452_t1;
                            var _r452_t0 = this;
                            var r452_currentGlyph = _r452_t0;
                            r452_currentGlyph.setWidth(r277_Geom.Width);
                            r452_currentGlyph.include(r277_xn$referglyph$1aao(r277_MangleName('whiteCircle')));
                            r452_currentGlyph.include(r271_difference(r277_xn$referglyph$1aao(r277_MangleName('blackCircleO')), function () {
                                var _r457_t1;
                                var _r457_t0 = this;
                                var r457_currentGlyph = _r457_t0;
                                r457_currentGlyph.include(r435_WaxingMoonMask(), true, true);
                                r457_currentGlyph.include(r277_FlipAround(r277_Geom.MidX, r277_Geom.MidY));
                                return void 0;
                            }));
                            return void 0;
                        });
                        r271_xn$createAndSaveGlyphImpl$2Lrc3c(r277_MangleName('waningGibbousMoon'), r277_MangleUnicode(127766), function () {
                            var _r462_t1;
                            var _r462_t0 = this;
                            var r462_currentGlyph = _r462_t0;
                            r462_currentGlyph.setWidth(r277_Geom.Width);
                            r462_currentGlyph.include(r277_xn$referglyph$1aao(r277_MangleName('whiteCircle')));
                            r462_currentGlyph.include(r271_difference(r277_xn$referglyph$1aao(r277_MangleName('blackCircleO')), r435_WaxingMoonMask()));
                            return void 0;
                        });
                        return r271_xn$createAndSaveGlyphImpl$2Lrc3c(r277_MangleName('waningCrescentMoon'), r277_MangleUnicode(127768), function () {
                            var _r468_t1;
                            var _r468_t0 = this;
                            var r468_currentGlyph = _r468_t0;
                            r468_currentGlyph.setWidth(r277_Geom.Width);
                            r468_currentGlyph.include(r277_xn$referglyph$1aao(r277_MangleName('whiteCircle')));
                            r468_currentGlyph.include(r271_intersection(r277_xn$referglyph$1aao(r277_MangleName('blackCircleO')), function () {
                                var _r473_t1;
                                var _r473_t0 = this;
                                var r473_currentGlyph = _r473_t0;
                                r473_currentGlyph.include(r435_WaxingMoonMask(), true, true);
                                r473_currentGlyph.include(r277_FlipAround(r277_Geom.MidX, r277_Geom.MidY));
                                return void 0;
                            }));
                            return void 0;
                        });
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
