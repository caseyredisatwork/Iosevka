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
    r269_xn$Capture_Ext$2Lrc2b['$defineGlyphBlockImpl$'](r269_xn$Capture_Ext$2Lrc2b, 'Symbol-Pictograph-Checking-Marks', function (r270_xn$Capture$2Lrc8, r270_xn$ExportCapture$2Lrc4b) {
        var _r270_t7, _r270_t8, _r270_t9, _r270_tag10, _r270_t11, _r270_tag12;
        var _r270_t0 = r270_xn$Capture$2Lrc8;
        var r270_xn$createAndSaveGlyphImpl$2Lrc3c = _r270_t0['$createAndSaveGlyphImpl$'];
        var r270_xn$NamedParameterPair$2Lrc9b = _r270_t0['$NamedParameterPair$'];
        var r270_xn$assignUnicodeImpl$2Lrc8b = _r270_t0['$assignUnicodeImpl$'];
        var r270_xn$execState$2Lrc0b = _r270_t0['$execState$'];
        var _r270_t1 = r270_xn$Capture$2Lrc8.Metrics;
        var r270_Width = _r270_t1.Width;
        var r270_SB = _r270_t1.SB;
        var r270_SymbolMid = _r270_t1.SymbolMid;
        var r270_PictTop = _r270_t1.PictTop;
        var r270_PictBot = _r270_t1.PictBot;
        var r270_Upward = _r270_t1.Upward;
        var r270_Downward = _r270_t1.Downward;
        var r270_WideWidth1 = _r270_t1.WideWidth1;
        var r270_RightSB = _r270_t1.RightSB;
        var _r270_t2 = r270_xn$Capture$2Lrc8.SpiroFns;
        var r270_g4 = _r270_t2.g4;
        var r270_corner = _r270_t2.corner;
        var r270_widths = _r270_t2.widths;
        var r270_heading = _r270_t2.heading;
        var r270_alsoThru = _r270_t2.alsoThru;
        var r270_dispiro = _r270_t2.dispiro;
        var _r270_t3 = r270_xn$Capture$2Lrc8.BooleFns;
        var _r270_t4 = r270_xn$Capture$2Lrc8.CommonShapes.resolve();
        var r270_DiagCor = _r270_t4.DiagCor;
        var r270_NameUni = _r270_t4.NameUni;
        var _r270_t5 = r270_xn$Capture$2Lrc8['Common-Derivatives'].resolve();
        var _r270_t6 = r270_xn$Capture$2Lrc8['Symbol-Geometric-Shared'].resolve();
        var r270_GeometricDim = _r270_t6.GeometricDim;
        var r270_UnicodeWeightGrade = _r270_t6.UnicodeWeightGrade;
        (function () {
            var r276_FMosaicWide, r276_MosaicNameSuffix, r276_MosaicWidth, r276_MosaicWidthScalar, _r276_t3, _r276_t5, _r276_t6, _r276_tag7;
            var r276_WidthKinds = [
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
            var _r276_t0 = r276_WidthKinds;
            var _r276_t1 = _r276_t0.length;
            var _r276_t2 = 0;
            var _r276_t4 = _r276_t2 < _r276_t1;
            while (_r276_t4) {
                _r276_t3 = _r276_t0[_r276_t2];
                r276_FMosaicWide = _r276_t3[0];
                r276_MosaicNameSuffix = _r276_t3[1];
                r276_MosaicWidth = _r276_t3[2];
                r276_MosaicWidthScalar = _r276_t3[3];
                (function () {
                    var _r279_t0, _r279_tag1;
                    var r279_MosaicDesiredWidth = r270_WideWidth1;
                    var r279_MosaicMiddle = r276_MosaicWidth / 2;
                    var r279_MosaicUnitWidth = r276_MosaicWidth / r276_MosaicWidthScalar;
                    var r279_MangleUnicode = function (r280_unicode, r280__desiredOverride) {
                        var _r280_t0, _r280_t1;
                        return r276_MosaicWidth === (r280__desiredOverride || r279_MosaicDesiredWidth) ? r280_unicode : void 0;
                    };
                    var r279_MangleName = function (r281_name) {
                        var _r281_t0, _r281_t1;
                        return r281_name + r276_MosaicNameSuffix;
                    };
                    return function () {
                        var r283_unicode, r283_sw, _r283_t3, _r283_t7, _r283_t11, _r283_t13;
                        var r283_Geom = r270_GeometricDim(r279_MosaicUnitWidth, r276_MosaicWidth);
                        var r283_lightSw = r270_UnicodeWeightGrade(3, r283_Geom.Scalar);
                        var r283_heavySw = r270_UnicodeWeightGrade(9, r283_Geom.Scalar);
                        var r283_ptMaxWidth = r276_MosaicWidth - r270_SB;
                        var r283_ptHeight0 = 1.5 * (r270_Width - r270_SB / 2) * Math.pow(r276_MosaicWidth / r279_MosaicUnitWidth, 1 / 4);
                        var r283_ptHeight = r283_ptHeight0 * r283_ptHeight0 / Math.hypot(r283_ptHeight0, Math.min(r283_ptHeight0, r283_ptMaxWidth));
                        var r283_ptWidth = Math.min(r283_ptMaxWidth, r283_ptHeight);
                        var r283_ptMidX = r276_MosaicWidth / 2;
                        var r283_ptSB = (r276_MosaicWidth - r283_ptWidth) / 2;
                        var r283_ptRSB = r276_MosaicWidth - r283_ptSB;
                        var r283_ptTop = r270_SymbolMid + r283_ptHeight / 2;
                        var r283_ptBot = r270_SymbolMid - r283_ptHeight / 2;
                        var _r283_t0 = [
                            [
                                10003,
                                r283_lightSw
                            ],
                            [
                                10004,
                                r283_heavySw
                            ]
                        ];
                        var _r283_t1 = _r283_t0.length;
                        var _r283_t2 = 0;
                        while (_r283_t2 < _r283_t1) {
                            _r283_t3 = _r283_t0[_r283_t2];
                            r283_unicode = _r283_t3[0];
                            r283_sw = _r283_t3[1];
                            r270_xn$createAndSaveGlyphImpl$2Lrc3c(r279_MangleName(r270_NameUni(r283_unicode)), r279_MangleUnicode(r283_unicode), function () {
                                var _r288_t1;
                                var _r288_t0 = this;
                                var r288_currentGlyph = _r288_t0;
                                r288_currentGlyph.setWidth(r276_MosaicWidth);
                                r288_currentGlyph.include(r270_dispiro(r270_widths.center(r283_sw), r270_g4(r283_ptSB, r1_mix(r283_ptBot, r283_ptTop, 0.46)), r270_alsoThru(0.5, 0.4), r270_g4(r1_mix(r283_ptSB, r283_ptRSB, 0.4), r1_mix(r283_ptBot, r283_ptTop, 0.05), r270_heading(r270_Downward))));
                                r288_currentGlyph.include(r270_dispiro(r270_widths.center(r283_sw), r270_g4(r1_mix(r283_ptSB, r283_ptRSB, 0.4), r1_mix(r283_ptBot, r283_ptTop, 0.05), r270_heading(r270_Upward)), r270_alsoThru(0.5, 0.6), r270_g4(r283_ptRSB, r1_mix(r283_ptBot, r283_ptTop, 0.9))));
                                return void 0;
                            });
                            _r283_t2 = _r283_t2 + 1;
                        }
                        var _r283_t4 = [
                            [
                                10005,
                                r283_lightSw
                            ],
                            [
                                10006,
                                r283_heavySw
                            ]
                        ];
                        var _r283_t5 = _r283_t4.length;
                        var _r283_t6 = 0;
                        while (_r283_t6 < _r283_t5) {
                            _r283_t7 = _r283_t4[_r283_t6];
                            r283_unicode = _r283_t7[0];
                            r283_sw = _r283_t7[1];
                            r270_xn$createAndSaveGlyphImpl$2Lrc3c(r279_MangleName(r270_NameUni(r283_unicode)), r279_MangleUnicode(r283_unicode), function () {
                                var _r296_t1;
                                var _r296_t0 = this;
                                var r296_currentGlyph = _r296_t0;
                                r296_currentGlyph.setWidth(r276_MosaicWidth);
                                r296_currentGlyph.include(r270_dispiro(r270_widths.center(r283_sw), r270_g4(r283_ptRSB, r283_ptTop), r270_g4(r283_ptSB, r283_ptBot)));
                                r296_currentGlyph.include(r270_dispiro(r270_widths.center(r283_sw), r270_g4(r283_ptSB, r283_ptTop), r270_g4(r283_ptRSB, r283_ptBot)));
                                return void 0;
                            });
                            _r283_t6 = _r283_t6 + 1;
                        }
                        var _r283_t8 = [
                            [
                                10007,
                                r283_lightSw
                            ],
                            [
                                10008,
                                r283_heavySw
                            ]
                        ];
                        var _r283_t9 = _r283_t8.length;
                        var _r283_t10 = 0;
                        var _r283_t12 = _r283_t10 < _r283_t9;
                        while (_r283_t12) {
                            _r283_t13 = (_r283_t11 = _r283_t8[_r283_t10], r283_unicode = _r283_t11[0], r283_sw = _r283_t11[1], r270_xn$createAndSaveGlyphImpl$2Lrc3c(r279_MangleName(r270_NameUni(r283_unicode)), r279_MangleUnicode(r283_unicode), function () {
                                var _r304_t1;
                                var _r304_t0 = this;
                                var r304_currentGlyph = _r304_t0;
                                r304_currentGlyph.setWidth(r276_MosaicWidth);
                                r304_currentGlyph.include(r270_dispiro(r270_widths.center(r283_sw), r270_g4(r1_mix(r283_ptSB, r283_ptRSB, 1.05), r1_mix(r270_SymbolMid, r283_ptTop, 1.02)), r270_alsoThru(0.53, 0.45), r270_g4(r1_mix(r283_ptSB, r283_ptRSB, -0.05), r1_mix(r270_SymbolMid, r283_ptBot, 1.05))));
                                r304_currentGlyph.include(r270_dispiro(r270_widths.center(r283_sw), r270_g4(r283_ptSB, r1_mix(r283_ptBot, r283_ptTop, 0.96)), r270_alsoThru(0.47, 0.5), r270_g4(r283_ptRSB, r1_mix(r283_ptBot, r283_ptTop, 0.05))));
                                return void 0;
                            }), _r283_t10 = _r283_t10 + 1);
                            _r283_t12 = _r283_t10 < _r283_t9;
                        }
                        return _r283_t13;
                    }();
                }());
                _r276_t5 = _r276_t2 = _r276_t2 + 1;
                _r276_t4 = _r276_t2 < _r276_t1;
            }
            return _r276_t5;
        }());
        return function () {
            var r309_unicode, r309_sw, r309_op, _r309_t3, _r309_t5;
            var r309_Geom = r270_GeometricDim(r270_Width, r270_Width);
            var r309_lightSw = r270_UnicodeWeightGrade(3, r309_Geom.Scalar);
            var r309_mediumSw = r270_UnicodeWeightGrade(5, r309_Geom.Scalar);
            var r309_heavySw = r270_UnicodeWeightGrade(9, r309_Geom.Scalar);
            var r309_ExtBracketConfig = [
                [
                    10092,
                    r309_lightSw,
                    1
                ],
                [
                    10093,
                    r309_lightSw,
                    0
                ],
                [
                    10094,
                    r309_mediumSw,
                    1
                ],
                [
                    10095,
                    r309_mediumSw,
                    0
                ],
                [
                    10096,
                    r309_heavySw,
                    1
                ],
                [
                    10097,
                    r309_heavySw,
                    0
                ]
            ];
            var _r309_t0 = r309_ExtBracketConfig;
            var _r309_t1 = _r309_t0.length;
            var _r309_t2 = 0;
            var _r309_t4 = _r309_t2 < _r309_t1;
            while (_r309_t4) {
                _r309_t5 = (_r309_t3 = _r309_t0[_r309_t2], r309_unicode = _r309_t3[0], r309_sw = _r309_t3[1], r309_op = _r309_t3[2], r270_xn$createAndSaveGlyphImpl$2Lrc3c(r270_NameUni(r309_unicode), r309_unicode, function () {
                    var _r313_t1;
                    var _r313_t0 = this;
                    var r313_currentGlyph = _r313_t0;
                    var r313_cor = r270_DiagCor(r270_PictTop - r270_PictBot, 2 * (r270_RightSB - r270_SB));
                    r313_currentGlyph.include(r270_dispiro(r270_widths.center(r309_sw * r313_cor), r270_corner(r1_mix(r270_SB + r309_sw / 2, r270_RightSB - r309_sw / 2, r309_op), r270_PictTop, r270_heading(r270_Downward)), r270_corner(r1_mix(r270_SB + r309_sw / 2, r270_RightSB - r309_sw / 2, 1 - r309_op), r270_SymbolMid, r270_heading(r270_Downward)), r270_corner(r1_mix(r270_SB + r309_sw / 2, r270_RightSB - r309_sw / 2, r309_op), r270_PictBot, r270_heading(r270_Downward))));
                    return void 0;
                }), _r309_t2 = _r309_t2 + 1);
                _r309_t4 = _r309_t2 < _r309_t1;
            }
            return _r309_t5;
        }();
    });
    return void 0;
});
