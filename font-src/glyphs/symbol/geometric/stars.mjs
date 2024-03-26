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
    r270_xn$Capture_Ext$2Lrc2b['$defineGlyphBlockImpl$'](r270_xn$Capture_Ext$2Lrc2b, 'Symbol-Geometric-Stars', function (r271_xn$Capture$2Lrc8, r271_xn$ExportCapture$2Lrc4b) {
        var _r271_t4, _r271_t5, _r271_t6, _r271_tag7;
        var _r271_t0 = r271_xn$Capture$2Lrc8;
        var r271_xn$createAndSaveGlyphImpl$2Lrc3c = _r271_t0['$createAndSaveGlyphImpl$'];
        var r271_xn$NamedParameterPair$2Lrc9b = _r271_t0['$NamedParameterPair$'];
        var r271_xn$assignUnicodeImpl$2Lrc8b = _r271_t0['$assignUnicodeImpl$'];
        var r271_xn$execState$2Lrc0b = _r271_t0['$execState$'];
        var _r271_t1 = r271_xn$Capture$2Lrc8.Metrics;
        var r271_Width = _r271_t1.Width;
        var r271_WideWidth1 = _r271_t1.WideWidth1;
        var _r271_t2 = r271_xn$Capture$2Lrc8.SpiroFns;
        var r271_corner = _r271_t2.corner;
        var r271_widths = _r271_t2.widths;
        var r271_dispiro = _r271_t2.dispiro;
        var r271_xn$spirooutline$1aao = _r271_t2['spiro-outline'];
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
                    var r277_sides, r277_skip, r277_name, r277_unicode, r277_pMag, r277_phase, r277_pShrink, r277_sw, r277_cThin, _r277_t6, _r277_t10, _r277_t11, _r277_tag12, _r277_t14, _r277_t15, _r277_tag16;
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
                    var r277_StarCfg = [
                        {
                            'name': 'sixPointedBlackStar',
                            'unicode': 10038,
                            'sides': 6,
                            'skip': 1,
                            'pMag': 1.05,
                            'phase': 0,
                            'pShrink': 0.4
                        },
                        {
                            'name': 'eightPointedBlackStar',
                            'unicode': 10036,
                            'sides': 8,
                            'skip': 1,
                            'pMag': 1.15,
                            'phase': 0,
                            'pShrink': 0.25
                        },
                        {
                            'name': 'eightPointedRectilinearBlackStar',
                            'unicode': 10039,
                            'sides': 8,
                            'skip': 1,
                            'pMag': 1.05,
                            'phase': 1 / 8,
                            'pShrink': 0.4
                        },
                        {
                            'name': 'heavyEightPointedRectilinearBlackStar',
                            'unicode': 10040,
                            'sides': 8,
                            'skip': 1,
                            'pMag': 1.05,
                            'phase': 1 / 8,
                            'pShrink': 0.5
                        },
                        {
                            'name': 'twelvePointedBlackStar',
                            'unicode': 10041,
                            'sides': 12,
                            'skip': 1,
                            'pMag': 1.05,
                            'phase': 0,
                            'pShrink': 0.5
                        }
                    ];
                    var _r277_t3 = r277_StarCfg;
                    var _r277_t4 = _r277_t3.length;
                    var _r277_t5 = 0;
                    while (_r277_t5 < _r277_t4) {
                        _r277_t6 = _r277_t3[_r277_t5];
                        r277_sides = _r277_t6.sides;
                        r277_skip = _r277_t6.skip;
                        r277_name = _r277_t6.name;
                        r277_unicode = _r277_t6.unicode;
                        r277_pMag = _r277_t6.pMag;
                        r277_phase = _r277_t6.phase;
                        r277_pShrink = _r277_t6.pShrink;
                        (function () {
                            return r271_xn$createAndSaveGlyphImpl$2Lrc3c(r277_MangleName(r277_name), r277_MangleUnicode(r277_unicode), function () {
                                var r289_angle, r289_mag, _r289_t3;
                                var _r289_t2 = this;
                                var r289_currentGlyph = _r289_t2;
                                r289_currentGlyph.setWidth(r277_Geom.Width);
                                var r289_corners = [];
                                var _r289_t0 = 0;
                                var _r289_t1 = 2 * r277_sides;
                                var r289_j = _r289_t0;
                                while (r289_j < _r289_t1) {
                                    r289_angle = Math.PI * (r289_j * r277_skip / r277_sides + r277_phase);
                                    r289_mag = (r289_j % 2 ? r277_pShrink : 1) * r277_pMag;
                                    r289_corners.push(r271_corner(r277_Geom.MidX + r277_Geom.Size * r289_mag * Math.sin(r289_angle), r277_Geom.MidY + r277_Geom.Size * r289_mag * Math.cos(r289_angle)));
                                    r289_j = r289_j + 1;
                                }
                                r289_currentGlyph.include(r271_xn$spirooutline$1aao(r289_corners));
                                return void 0;
                            });
                        }());
                        _r277_t5 = _r277_t5 + 1;
                    }
                    var r277_extThinSw = r277_UnicodeWeightGrade(1, r277_Geom.Scalar);
                    var r277_extLightSw = r277_UnicodeWeightGrade(2, r277_Geom.Scalar);
                    var r277_lightSw = r277_UnicodeWeightGrade(3, r277_Geom.Scalar);
                    var r277_semiLightSw = r277_UnicodeWeightGrade(3.5, r277_Geom.Scalar);
                    var r277_normalSw = r277_UnicodeWeightGrade(4, r277_Geom.Scalar);
                    var r277_mediumSw = r277_UnicodeWeightGrade(5, r277_Geom.Scalar);
                    var r277_semiBoldSw = r277_UnicodeWeightGrade(6, r277_Geom.Scalar);
                    var r277_boldSw = r277_UnicodeWeightGrade(7, r277_Geom.Scalar);
                    var r277_exBoldSw = r277_UnicodeWeightGrade(8, r277_Geom.Scalar);
                    var r277_heavySw = r277_UnicodeWeightGrade(9, r277_Geom.Scalar);
                    var r277_veryHeavySw = r277_UnicodeWeightGrade(10, r277_Geom.Scalar);
                    var r277_exHeavySw = r277_UnicodeWeightGrade(11, r277_Geom.Scalar);
                    var r277_AsteriskCfg = [
                        {
                            'name': 'saltire',
                            'unicode': 9747,
                            'sides': 4,
                            'phase': 1 / 8,
                            'sw': r277_normalSw
                        },
                        {
                            'name': 'heavyGreekCross',
                            'unicode': 10010,
                            'sides': 4,
                            'phase': 0,
                            'sw': r277_heavySw
                        },
                        {
                            'name': 'heavyAsterisk',
                            'unicode': 10033,
                            'sides': 6,
                            'phase': 0,
                            'sw': r277_heavySw,
                            'cThin': 0.9
                        },
                        {
                            'name': 'eightSpokedAsterisk',
                            'unicode': 10035,
                            'sides': 8,
                            'phase': 0,
                            'sw': r277_normalSw,
                            'cThin': 0.75
                        },
                        {
                            'name': 'sixteenSpokedAsterisk',
                            'unicode': 10042,
                            'sides': 16,
                            'phase': 0,
                            'sw': r277_semiLightSw,
                            'cThin': 0.75
                        },
                        {
                            'name': 'crossMark',
                            'unicode': 10060,
                            'sides': 4,
                            'phase': 1 / 8,
                            'sw': r277_heavySw,
                            'pMag': r277_GeometricSizes(r277_Geom).Large.size
                        },
                        {
                            'name': 'lightVertBar',
                            'unicode': 10072,
                            'sides': 2,
                            'phase': 0,
                            'sw': r277_lightSw
                        },
                        {
                            'name': 'mediumVertBar',
                            'unicode': 10073,
                            'sides': 2,
                            'phase': 0,
                            'sw': r277_mediumSw
                        },
                        {
                            'name': 'heavyVertBar ',
                            'unicode': 10074,
                            'sides': 2,
                            'phase': 0,
                            'sw': r277_heavySw
                        },
                        {
                            'name': 'thinGreekCross',
                            'unicode': 128929,
                            'sides': 4,
                            'phase': 0,
                            'sw': r277_extLightSw
                        },
                        {
                            'name': 'lightGreekCross',
                            'unicode': 128930,
                            'sides': 4,
                            'phase': 0,
                            'sw': r277_lightSw
                        },
                        {
                            'name': 'mediumGreekCross',
                            'unicode': 128931,
                            'sides': 4,
                            'phase': 0,
                            'sw': r277_mediumSw
                        },
                        {
                            'name': 'boldGreekCross',
                            'unicode': 128932,
                            'sides': 4,
                            'phase': 0,
                            'sw': r277_boldSw
                        },
                        {
                            'name': 'exBoldGreekCross',
                            'unicode': 128933,
                            'sides': 4,
                            'phase': 0,
                            'sw': r277_exBoldSw
                        },
                        {
                            'name': 'veryHeavyGreekCross',
                            'unicode': 128934,
                            'sides': 4,
                            'phase': 0,
                            'sw': r277_veryHeavySw
                        },
                        {
                            'name': 'exHeavyGreekCross',
                            'unicode': 128935,
                            'sides': 4,
                            'phase': 0,
                            'sw': r277_exHeavySw
                        },
                        {
                            'name': 'thinSaltire',
                            'unicode': 128936,
                            'sides': 4,
                            'phase': 1 / 8,
                            'sw': r277_extLightSw
                        },
                        {
                            'name': 'lightSaltire',
                            'unicode': 128937,
                            'sides': 4,
                            'phase': 1 / 8,
                            'sw': r277_lightSw
                        },
                        {
                            'name': 'mediumSaltire',
                            'unicode': 128938,
                            'sides': 4,
                            'phase': 1 / 8,
                            'sw': r277_mediumSw
                        },
                        {
                            'name': 'boldSaltire',
                            'unicode': 128939,
                            'sides': 4,
                            'phase': 1 / 8,
                            'sw': r277_boldSw
                        },
                        {
                            'name': 'heavySaltire',
                            'unicode': 128940,
                            'sides': 4,
                            'phase': 1 / 8,
                            'sw': r277_heavySw
                        },
                        {
                            'name': 'veryHeavySaltire',
                            'unicode': 128941,
                            'sides': 4,
                            'phase': 1 / 8,
                            'sw': r277_veryHeavySw
                        },
                        {
                            'name': 'exHeavySaltire',
                            'unicode': 128942,
                            'sides': 4,
                            'phase': 1 / 8,
                            'sw': r277_exHeavySw
                        },
                        {
                            'name': 'lightAsterisk5',
                            'unicode': 128943,
                            'sides': 5,
                            'phase': 0,
                            'sw': r277_lightSw
                        },
                        {
                            'name': 'mediumAsterisk5',
                            'unicode': 128944,
                            'sides': 5,
                            'phase': 0,
                            'sw': r277_mediumSw
                        },
                        {
                            'name': 'boldAsterisk5',
                            'unicode': 128945,
                            'sides': 5,
                            'phase': 0,
                            'sw': r277_boldSw
                        },
                        {
                            'name': 'heavyAsterisk5',
                            'unicode': 128946,
                            'sides': 5,
                            'phase': 0,
                            'sw': r277_heavySw
                        },
                        {
                            'name': 'veryHeavyAsterisk5',
                            'unicode': 128947,
                            'sides': 5,
                            'phase': 0,
                            'sw': r277_veryHeavySw
                        },
                        {
                            'name': 'exHeavyAsterisk5',
                            'unicode': 128948,
                            'sides': 5,
                            'phase': 0,
                            'sw': r277_exHeavySw
                        },
                        {
                            'name': 'lightAsterisk6',
                            'unicode': 128949,
                            'sides': 6,
                            'phase': 0,
                            'sw': r277_lightSw,
                            'cThin': 0.9
                        },
                        {
                            'name': 'mediumAsterisk6',
                            'unicode': 128950,
                            'sides': 6,
                            'phase': 0,
                            'sw': r277_mediumSw,
                            'cThin': 0.9
                        },
                        {
                            'name': 'boldAsterisk6',
                            'unicode': 128951,
                            'sides': 6,
                            'phase': 0,
                            'sw': r277_boldSw,
                            'cThin': 0.9
                        },
                        {
                            'name': 'heavyAsterisk6',
                            'unicode': 128952,
                            'sides': 6,
                            'phase': 0,
                            'sw': r277_heavySw,
                            'cThin': 0.9
                        },
                        {
                            'name': 'veryHeavyAsterisk6',
                            'unicode': 128953,
                            'sides': 6,
                            'phase': 0,
                            'sw': r277_veryHeavySw,
                            'cThin': 0.9
                        },
                        {
                            'name': 'exHeavyAsterisk6',
                            'unicode': 128954,
                            'sides': 6,
                            'phase': 0,
                            'sw': r277_exHeavySw,
                            'cThin': 0.9
                        },
                        {
                            'name': 'lightAsterisk8',
                            'unicode': 128955,
                            'sides': 8,
                            'phase': 0,
                            'sw': r277_lightSw,
                            'cThin': 0.75
                        },
                        {
                            'name': 'mediumAsterisk8',
                            'unicode': 128956,
                            'sides': 8,
                            'phase': 0,
                            'sw': r277_mediumSw,
                            'cThin': 0.75
                        },
                        {
                            'name': 'boldAsterisk8',
                            'unicode': 128957,
                            'sides': 8,
                            'phase': 0,
                            'sw': r277_boldSw,
                            'cThin': 0.75
                        },
                        {
                            'name': 'heavyAsterisk8',
                            'unicode': 128958,
                            'sides': 8,
                            'phase': 0,
                            'sw': r277_exBoldSw,
                            'cThin': 0.75
                        },
                        {
                            'name': 'veryHeavyAsterisk8',
                            'unicode': 128959,
                            'sides': 8,
                            'phase': 0,
                            'sw': r277_heavySw,
                            'cThin': 0.75
                        }
                    ];
                    var _r277_t7 = r277_AsteriskCfg;
                    var _r277_t8 = _r277_t7.length;
                    var _r277_t9 = 0;
                    var _r277_t13 = _r277_t9 < _r277_t8;
                    while (_r277_t13) {
                        _r277_t10 = _r277_t7[_r277_t9];
                        r277_sides = _r277_t10.sides;
                        r277_name = _r277_t10.name;
                        r277_unicode = _r277_t10.unicode;
                        r277_phase = _r277_t10.phase;
                        r277_sw = _r277_t10.sw;
                        r277_cThin = _r277_t10.cThin;
                        r277_pMag = _r277_t10.pMag;
                        (function () {
                            return r271_xn$createAndSaveGlyphImpl$2Lrc3c(r277_MangleName(r277_name), r277_MangleUnicode(r277_unicode), function () {
                                var r300_angle, r300_mag, _r300_t3;
                                var _r300_t2 = this;
                                var r300_currentGlyph = _r300_t2;
                                r300_currentGlyph.setWidth(r277_Geom.Width);
                                var _r300_t0 = 0;
                                var _r300_t1 = r277_sides;
                                var r300_j = _r300_t0;
                                while (r300_j < _r300_t1) {
                                    r300_angle = 2 * Math.PI * (r300_j / r277_sides + r277_phase);
                                    r300_mag = r1_fallback(r277_pMag, 1);
                                    r300_currentGlyph.include(r271_dispiro(r271_corner(r277_Geom.MidX, r277_Geom.MidY, r271_widths.center(r277_sw * r1_fallback(r277_cThin, 1))), r271_corner(r277_Geom.MidX + r277_Geom.Size * r300_mag * Math.sin(-r300_angle), r277_Geom.MidY + r277_Geom.Size * r300_mag * Math.cos(-r300_angle), r271_widths.center(r277_sw))));
                                    r300_j = r300_j + 1;
                                }
                                return void 0;
                            });
                        }());
                        _r277_t14 = _r277_t9 = _r277_t9 + 1;
                        _r277_t13 = _r277_t9 < _r277_t8;
                    }
                    return _r277_t14;
                }());
                _r274_t5 = _r274_t2 = _r274_t2 + 1;
                _r274_t4 = _r274_t2 < _r274_t1;
            }
            return _r274_t5;
        }();
    });
    return void 0;
});
