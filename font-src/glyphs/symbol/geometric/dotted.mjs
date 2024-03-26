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
    r270_xn$Capture_Ext$2Lrc2b['$defineGlyphBlockImpl$'](r270_xn$Capture_Ext$2Lrc2b, 'Symbol-Geometric-Dice', function (r271_xn$Capture$2Lrc8, r271_xn$ExportCapture$2Lrc4b) {
        var _r271_t4, _r271_t5, _r271_t6, _r271_tag7;
        var _r271_t0 = r271_xn$Capture$2Lrc8;
        var r271_xn$createAndSaveGlyphImpl$2Lrc3c = _r271_t0['$createAndSaveGlyphImpl$'];
        var r271_xn$NamedParameterPair$2Lrc9b = _r271_t0['$NamedParameterPair$'];
        var r271_xn$assignUnicodeImpl$2Lrc8b = _r271_t0['$assignUnicodeImpl$'];
        var r271_xn$execState$2Lrc0b = _r271_t0['$execState$'];
        var r271_AS_BASE = _r271_t0.AS_BASE;
        var r271_ALSO_METRICS = _r271_t0.ALSO_METRICS;
        var _r271_t1 = r271_xn$Capture$2Lrc8.Metrics;
        var r271_Width = _r271_t1.Width;
        var r271_Stroke = _r271_t1.Stroke;
        var r271_WideWidth1 = _r271_t1.WideWidth1;
        var r271_DotRadius = _r271_t1.DotRadius;
        var r271_PeriodRadius = _r271_t1.PeriodRadius;
        var r271_AdviceStroke = _r271_t1.AdviceStroke;
        var r271_GeometryStroke = _r271_t1.GeometryStroke;
        var _r271_t2 = r271_xn$Capture$2Lrc8.SpiroFns;
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
                    var r277_u, r277_frame, r277_dotSizeFactor, r277_dots, _r277_t6;
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
                    var r277_CircleDotAt = _r277_t0.CircleDotAt;
                    var r277_NameUni = _r277_t0.NameUni;
                    var _r277_t1 = r271_xn$Capture$2Lrc8['Common-Derivatives'].resolve();
                    var r277_xn$referglyph$1aao = _r277_t1['refer-glyph'];
                    var _r277_t2 = r271_xn$Capture$2Lrc8['Symbol-Geometric-Shared'].resolve();
                    var r277_GeometricDim = _r277_t2.GeometricDim;
                    var r277_UnicodeWeightGrade = _r277_t2.UnicodeWeightGrade;
                    var r277_GeometricSizes = _r277_t2.GeometricSizes;
                    var r277_Geom = r277_GeometricDim(r277_MosaicUnitWidth, r274_MosaicWidth);
                    var r277_diceCombinations = [
                        [
                            9856,
                            'whiteSquare',
                            7,
                            [[
                                    1,
                                    1
                                ]]
                        ],
                        [
                            9857,
                            'whiteSquare',
                            7,
                            [
                                [
                                    0,
                                    0
                                ],
                                [
                                    2,
                                    2
                                ]
                            ]
                        ],
                        [
                            9858,
                            'whiteSquare',
                            7,
                            [
                                [
                                    0,
                                    0
                                ],
                                [
                                    1,
                                    1
                                ],
                                [
                                    2,
                                    2
                                ]
                            ]
                        ],
                        [
                            9859,
                            'whiteSquare',
                            7,
                            [
                                [
                                    0,
                                    0
                                ],
                                [
                                    2,
                                    0
                                ],
                                [
                                    0,
                                    2
                                ],
                                [
                                    2,
                                    2
                                ]
                            ]
                        ],
                        [
                            9860,
                            'whiteSquare',
                            7,
                            [
                                [
                                    0,
                                    0
                                ],
                                [
                                    2,
                                    0
                                ],
                                [
                                    1,
                                    1
                                ],
                                [
                                    0,
                                    2
                                ],
                                [
                                    2,
                                    2
                                ]
                            ]
                        ],
                        [
                            9861,
                            'whiteSquare',
                            7,
                            [
                                [
                                    0,
                                    0
                                ],
                                [
                                    0,
                                    1
                                ],
                                [
                                    0,
                                    2
                                ],
                                [
                                    2,
                                    0
                                ],
                                [
                                    2,
                                    1
                                ],
                                [
                                    2,
                                    2
                                ]
                            ]
                        ],
                        [
                            9862,
                            'whiteCircle',
                            4.5,
                            [[
                                    5 / 3,
                                    1
                                ]]
                        ],
                        [
                            9863,
                            'whiteCircle',
                            4.5,
                            [
                                [
                                    1 / 3,
                                    1
                                ],
                                [
                                    5 / 3,
                                    1
                                ]
                            ]
                        ]
                    ];
                    var _r277_t3 = r277_diceCombinations;
                    var _r277_t4 = _r277_t3.length;
                    var _r277_t5 = 0;
                    while (_r277_t5 < _r277_t4) {
                        _r277_t6 = _r277_t3[_r277_t5];
                        r277_u = _r277_t6[0];
                        r277_frame = _r277_t6[1];
                        r277_dotSizeFactor = _r277_t6[2];
                        r277_dots = _r277_t6[3];
                        r271_xn$createAndSaveGlyphImpl$2Lrc3c(r277_MangleName(r277_NameUni(r277_u)), r277_MangleUnicode(r277_u), function () {
                            var r286_px, r286_py, _r286_t3, _r286_t5;
                            var _r286_t4 = this;
                            var r286_currentGlyph = _r286_t4;
                            r286_currentGlyph.include(r277_xn$referglyph$1aao(r277_MangleName(r277_frame)), r271_AS_BASE, r271_ALSO_METRICS);
                            var r286_dr = r271_DotRadius / r271_Stroke * Math.min(r271_AdviceStroke(r277_dotSizeFactor, r277_Geom.Scalar), r271_AdviceStroke(7, 2));
                            var r286_xLeftEx = r277_Geom.MidX - r277_Geom.Size + r271_GeometryStroke;
                            var r286_xRightEx = r277_Geom.MidX + r277_Geom.Size - r271_GeometryStroke;
                            var r286_yBottomEx = r277_Geom.MidY + r277_Geom.Size - r271_GeometryStroke;
                            var r286_yTopEx = r277_Geom.MidY - r277_Geom.Size + r271_GeometryStroke;
                            var r286_xLeft = r1_mix(r286_xLeftEx, r286_xRightEx, 1 / 5);
                            var r286_xRight = r1_mix(r286_xLeftEx, r286_xRightEx, 4 / 5);
                            var r286_yBottom = r1_mix(r286_yBottomEx, r286_yTopEx, 1 / 5);
                            var r286_yTop = r1_mix(r286_yBottomEx, r286_yTopEx, 4 / 5);
                            var _r286_t0 = r277_dots;
                            var _r286_t1 = _r286_t0.length;
                            var _r286_t2 = 0;
                            while (_r286_t2 < _r286_t1) {
                                _r286_t3 = _r286_t0[_r286_t2];
                                r286_px = _r286_t3[0];
                                r286_py = _r286_t3[1];
                                r286_currentGlyph.include(r277_CircleDotAt(r1_mix(r286_xLeft, r286_xRight, r286_px / 2), r1_mix(r286_yBottom, r286_yTop, r286_py / 2), r286_dr));
                                _r286_t2 = _r286_t2 + 1;
                            }
                            return void 0;
                        });
                        _r277_t5 = _r277_t5 + 1;
                    }
                    return r271_xn$createAndSaveGlyphImpl$2Lrc3c(r277_MangleName('dottedWhiteTriangle'), r277_MangleUnicode(9708), function () {
                        var _r292_t1;
                        var _r292_t0 = this;
                        var r292_currentGlyph = _r292_t0;
                        r292_currentGlyph.setWidth(r277_Geom.Width);
                        r292_currentGlyph.include(r277_xn$referglyph$1aao(r277_MangleName('whiteTriangleUp')));
                        r292_currentGlyph.include(r277_CircleDotAt(r277_Geom.MidX, r277_Geom.MidY - r277_Geom.Size / 3, Math.min(r277_Geom.Width / 8, r271_PeriodRadius)));
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
r1_xn$GlyphBlocks$2Lrc2b.push(function (r298_xn$Capture_Ext$2Lrc2b) {
    var _r298_t0, _r298_t1;
    r298_xn$Capture_Ext$2Lrc2b['$defineGlyphBlockImpl$'](r298_xn$Capture_Ext$2Lrc2b, 'Symbol-Geometric-Dotted', function (r299_xn$Capture$2Lrc8, r299_xn$ExportCapture$2Lrc4b) {
        var _r299_t4, _r299_t5, _r299_t6, _r299_tag7;
        var _r299_t0 = r299_xn$Capture$2Lrc8;
        var r299_xn$createAndSaveGlyphImpl$2Lrc3c = _r299_t0['$createAndSaveGlyphImpl$'];
        var r299_xn$NamedParameterPair$2Lrc9b = _r299_t0['$NamedParameterPair$'];
        var r299_xn$assignUnicodeImpl$2Lrc8b = _r299_t0['$assignUnicodeImpl$'];
        var r299_xn$execState$2Lrc0b = _r299_t0['$execState$'];
        var r299_DivFrame = _r299_t0.DivFrame;
        var _r299_t1 = r299_xn$Capture$2Lrc8.Metrics;
        var r299_Width = _r299_t1.Width;
        var r299_WideWidth4 = _r299_t1.WideWidth4;
        var r299_AdviceStroke = _r299_t1.AdviceStroke;
        var _r299_t2 = r299_xn$Capture$2Lrc8.SpiroFns;
        var _r299_t3 = r299_xn$Capture$2Lrc8.BooleFns;
        return function () {
            var r302_FMosaicWide, r302_MosaicNameSuffix, r302_MosaicWidth, r302_MosaicWidthScalar, _r302_t3, _r302_t5, _r302_t6, _r302_tag7;
            var r302_WidthKinds = [
                [
                    0,
                    '.NWID',
                    r299_xn$Capture$2Lrc8.Metrics.Width,
                    1
                ],
                [
                    1,
                    '.WWID',
                    r299_xn$Capture$2Lrc8.Metrics.WideWidth0,
                    2
                ]
            ];
            var _r302_t0 = r302_WidthKinds;
            var _r302_t1 = _r302_t0.length;
            var _r302_t2 = 0;
            var _r302_t4 = _r302_t2 < _r302_t1;
            while (_r302_t4) {
                _r302_t3 = _r302_t0[_r302_t2];
                r302_FMosaicWide = _r302_t3[0];
                r302_MosaicNameSuffix = _r302_t3[1];
                r302_MosaicWidth = _r302_t3[2];
                r302_MosaicWidthScalar = _r302_t3[3];
                (function () {
                    var r305_MosaicDesiredWidth = r299_WideWidth4;
                    var r305_MosaicMiddle = r302_MosaicWidth / 2;
                    var r305_MosaicUnitWidth = r302_MosaicWidth / r302_MosaicWidthScalar;
                    var r305_MangleUnicode = function (r306_unicode, r306__desiredOverride) {
                        var _r306_t0, _r306_t1;
                        return r302_MosaicWidth === (r306__desiredOverride || r305_MosaicDesiredWidth) ? r306_unicode : void 0;
                    };
                    var r305_MangleName = function (r307_name) {
                        var _r307_t0, _r307_t1;
                        return r307_name + r302_MosaicNameSuffix;
                    };
                    var _r305_t0 = r299_xn$Capture$2Lrc8.CommonShapes.resolve();
                    var r305_CircleRingAt = _r305_t0.CircleRingAt;
                    var _r305_t1 = r299_xn$Capture$2Lrc8['Common-Derivatives'].resolve();
                    var _r305_t2 = r299_xn$Capture$2Lrc8['Symbol-Geometric-Shared'].resolve();
                    var r305_GeometricDim = _r305_t2.GeometricDim;
                    var r305_UnicodeWeightGrade = _r305_t2.UnicodeWeightGrade;
                    var r305_GeometricSizes = _r305_t2.GeometricSizes;
                    var r305_Geom = r305_GeometricDim(r305_MosaicUnitWidth, r302_MosaicWidth);
                    var r305_Size = r305_GeometricSizes(r305_Geom);
                    r299_xn$createAndSaveGlyphImpl$2Lrc3c(r305_MangleName('dottedCircle'), r305_MangleUnicode(9676), function () {
                        var r313_angle, r313_cx, r313_cy, _r313_t3;
                        var _r313_t2 = this;
                        var r313_currentGlyph = _r313_t2;
                        r313_currentGlyph.setWidth(r305_Geom.Width);
                        r313_currentGlyph.include(r299_DivFrame(r305_Geom.Scalar).markSet.plus());
                        var r313_n = 12 * Math.ceil(r305_Geom.Scalar);
                        var r313_fine = r299_AdviceStroke(10);
                        var _r313_t0 = 0;
                        var _r313_t1 = r313_n;
                        var r313_j = _r313_t0;
                        while (r313_j < _r313_t1) {
                            r313_angle = Math.PI * 2 * r313_j / r313_n;
                            r313_cx = r305_Geom.MidX + (r305_Geom.Right - r305_Geom.MidX) * Math.cos(r313_angle);
                            r313_cy = r305_Geom.MidY + (r305_Geom.Right - r305_Geom.MidX) * Math.sin(r313_angle);
                            r313_currentGlyph.include(r305_CircleRingAt(r313_cx, r313_cy, r313_fine));
                            r313_j = r313_j + 1;
                        }
                        return void 0;
                    });
                    return r299_xn$createAndSaveGlyphImpl$2Lrc3c(r305_MangleName('dottedSquare'), r305_MangleUnicode(11034), function () {
                        var r320_t, _r320_t3;
                        var _r320_t2 = this;
                        var r320_currentGlyph = _r320_t2;
                        r320_currentGlyph.setWidth(r305_Geom.Width);
                        r320_currentGlyph.include(r299_DivFrame(r305_Geom.Scalar).markSet.plus());
                        var r320_n = 4 * Math.ceil(r305_Geom.Scalar);
                        var r320_fine = r299_AdviceStroke(10);
                        var r320_box = {
                            'Left': r305_Geom.Left + r320_fine,
                            'Right': r305_Geom.Right - r320_fine,
                            'Top': r305_Geom.Top - r320_fine,
                            'Bot': r305_Geom.Bot + r320_fine
                        };
                        var _r320_t0 = 0;
                        var _r320_t1 = r320_n;
                        var r320_j = _r320_t0;
                        while (r320_j < _r320_t1) {
                            r320_t = r320_j / r320_n;
                            r320_currentGlyph.include(r305_CircleRingAt(r320_box.Left, r1_mix(r320_box.Bot, r320_box.Top, r320_t), r320_fine));
                            r320_currentGlyph.include(r305_CircleRingAt(r1_mix(r320_box.Left, r320_box.Right, r320_t), r320_box.Top, r320_fine));
                            r320_currentGlyph.include(r305_CircleRingAt(r320_box.Right, r1_mix(r320_box.Top, r320_box.Bot, r320_t), r320_fine));
                            r320_currentGlyph.include(r305_CircleRingAt(r1_mix(r320_box.Right, r320_box.Left, r320_t), r320_box.Bot, r320_fine));
                            r320_j = r320_j + 1;
                        }
                        return void 0;
                    });
                }());
                _r302_t5 = _r302_t2 = _r302_t2 + 1;
                _r302_t4 = _r302_t2 < _r302_t1;
            }
            return _r302_t5;
        }();
    });
    return void 0;
});
