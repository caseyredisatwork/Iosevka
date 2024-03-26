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
    r269_xn$Capture_Ext$2Lrc2b['$defineGlyphBlockImpl$'](r269_xn$Capture_Ext$2Lrc2b, 'Symbol-Punctuation-Asterisk', function (r270_xn$Capture$2Lrc8, r270_xn$ExportCapture$2Lrc4b) {
        var r270_sides, r270_size, r270_rot, r270_pFine, r270_stroke, r270_name, r270_dual, r270_triple, r270_high, r270_slashTop, r270_sMid, r270_midXH, r270_slashBot, _r270_t9, _r270_t10, _r270_t11, _r270_t12, _r270_tag13, _r270_t14, _r270_tag15;
        var _r270_t0 = r270_xn$Capture$2Lrc8;
        var r270_xn$createAndSaveGlyphImpl$2Lrc3c = _r270_t0['$createAndSaveGlyphImpl$'];
        var r270_xn$NamedParameterPair$2Lrc9b = _r270_t0['$NamedParameterPair$'];
        var r270_xn$assignUnicodeImpl$2Lrc8b = _r270_t0['$assignUnicodeImpl$'];
        var r270_xn$execState$2Lrc0b = _r270_t0['$execState$'];
        var _r270_t1 = r270_xn$Capture$2Lrc8.Metrics;
        var r270_Width = _r270_t1.Width;
        var r270_XH = _r270_t1.XH;
        var r270_SymbolMid = _r270_t1.SymbolMid;
        var r270_ParenTop = _r270_t1.ParenTop;
        var r270_ApparentTranslate = _r270_t1.ApparentTranslate;
        var r270_Stroke = _r270_t1.Stroke;
        var r270_LongJut = _r270_t1.LongJut;
        var r270_WideWidth1 = _r270_t1.WideWidth1;
        var r270_Middle = _r270_t1.Middle;
        var r270_AdviceStroke = _r270_t1.AdviceStroke;
        var r270_GeometryStroke = _r270_t1.GeometryStroke;
        var _r270_t2 = r270_xn$Capture$2Lrc8.SpiroFns;
        var r270_flat = _r270_t2.flat;
        var r270_curl = _r270_t2.curl;
        var r270_widths = _r270_t2.widths;
        var r270_dispiro = _r270_t2.dispiro;
        var _r270_t3 = r270_xn$Capture$2Lrc8.BooleFns;
        var _r270_t4 = r270_xn$Capture$2Lrc8.CommonShapes.resolve();
        var r270_ScaleAround = _r270_t4.ScaleAround;
        var r270_WithTransform = _r270_t4.WithTransform;
        var _r270_t5 = r270_xn$Capture$2Lrc8['Common-Derivatives'].resolve();
        var r270_xn$selectvariant$7Hrq = _r270_t5['select-variant'];
        var r270_xn$referglyph$1aao = _r270_t5['refer-glyph'];
        var r270_yHigh = r270_ParenTop - r270_LongJut * 2;
        var r270_yHigh_DT = r270_ParenTop - r270_LongJut * 1.5;
        var r270_yLow = r1_mix(r270_SymbolMid, r270_yHigh, -1);
        var r270_yLow_DT = r1_mix(r270_SymbolMid, r270_yHigh_DT, -1);
        var r270_asteriskKinds = [
            [
                [
                    5,
                    1.2,
                    0,
                    0.4,
                    r270_Stroke
                ],
                [
                    'asterisk',
                    'dualAsterisk',
                    'asterism'
                ],
                [
                    'pentaHigh',
                    'pentaST',
                    'pentaSMid',
                    'midXH',
                    'pentaSB'
                ]
            ],
            [
                [
                    6,
                    1.2,
                    0,
                    0.4,
                    r270_Stroke
                ],
                [
                    'asterisk',
                    'dualAsterisk',
                    'asterism'
                ],
                [
                    'hexHigh',
                    'hexST',
                    'hexSMid',
                    '',
                    'hexSB'
                ]
            ],
            [
                [
                    5,
                    1.2,
                    1,
                    0.4,
                    r270_Stroke
                ],
                [
                    'asterisk',
                    'dualAsterisk',
                    'asterism'
                ],
                [
                    'turnPentaHigh',
                    'turnPentaST',
                    'turnPentaSMid',
                    '',
                    'turnPentaSB'
                ]
            ],
            [
                [
                    6,
                    1.2,
                    0.5,
                    0.4,
                    r270_Stroke
                ],
                [
                    'asterisk',
                    'dualAsterisk',
                    'asterism'
                ],
                [
                    'turnHexHigh',
                    'turnHexST',
                    'turnHexSMid',
                    '',
                    'turnHexSB'
                ]
            ],
            [
                [
                    5,
                    1,
                    0,
                    0.4,
                    r270_GeometryStroke
                ],
                [
                    'opAsterisk',
                    '',
                    ''
                ],
                [
                    '',
                    '',
                    'low',
                    '',
                    ''
                ]
            ],
            [
                [
                    8,
                    1.2,
                    0.5,
                    0.4,
                    r270_AdviceStroke(3)
                ],
                [
                    'flower',
                    '',
                    ''
                ],
                [
                    'high',
                    'ST',
                    'sMid',
                    '',
                    ''
                ]
            ]
        ];
        var _r270_t6 = r270_asteriskKinds;
        var _r270_t7 = _r270_t6.length;
        var _r270_t8 = 0;
        while (_r270_t8 < _r270_t7) {
            _r270_t9 = _r270_t6[_r270_t8];
            r270_sides = _r270_t9[0][0];
            r270_size = _r270_t9[0][1];
            r270_rot = _r270_t9[0][2];
            r270_pFine = _r270_t9[0][3];
            r270_stroke = _r270_t9[0][4];
            _r270_t9[0];
            r270_name = _r270_t9[1][0];
            r270_dual = _r270_t9[1][1];
            r270_triple = _r270_t9[1][2];
            _r270_t9[1];
            r270_high = _r270_t9[2][0];
            r270_slashTop = _r270_t9[2][1];
            r270_sMid = _r270_t9[2][2];
            r270_midXH = _r270_t9[2][3];
            r270_slashBot = _r270_t9[2][4];
            _r270_t9[2];
            r270_xn$createAndSaveGlyphImpl$2Lrc3c(r270_name + '.' + r270_sMid, null, function () {
                var r277_s, r277_c, _r277_t3;
                var _r277_t2 = this;
                var r277_currentGlyph = _r277_t2;
                var r277_radius = r270_LongJut * r270_size;
                var r277_fine = r270_stroke * r270_pFine;
                var r277_final = 0.5 * Math.min(r270_stroke, r277_radius * Math.PI / r270_sides);
                var _r277_t0 = 0;
                var _r277_t1 = r270_sides;
                var r277_j = _r277_t0;
                while (r277_j < _r277_t1) {
                    r277_s = Math.sin((2 * r277_j / r270_sides + r270_rot) * Math.PI);
                    r277_c = Math.cos((2 * r277_j / r270_sides + r270_rot) * Math.PI);
                    r277_currentGlyph.include(r270_dispiro(r270_flat(r270_Middle, r270_SymbolMid, r270_widths(r277_fine, r277_fine)), r270_curl(r270_Middle + r277_radius * r277_s, r270_SymbolMid + r277_radius * r277_c, r270_widths(r277_final, r277_final))));
                    r277_j = r277_j + 1;
                }
                return void 0;
            });
            if (r270_high)
                r270_xn$createAndSaveGlyphImpl$2Lrc3c(r270_name + '.' + r270_high, null, function () {
                    var _r282_t1;
                    var _r282_t0 = this;
                    var r282_currentGlyph = _r282_t0;
                    r282_currentGlyph.include(r270_xn$referglyph$1aao(r270_name + '.' + r270_sMid), true, true);
                    r282_currentGlyph.include(r270_ApparentTranslate(0, 2 * (r270_yHigh - r270_SymbolMid)));
                    return void 0;
                });
            if (r270_slashTop)
                r270_xn$createAndSaveGlyphImpl$2Lrc3c(r270_name + '.' + r270_slashTop, null, function () {
                    var _r287_t1;
                    var _r287_t0 = this;
                    var r287_currentGlyph = _r287_t0;
                    r287_currentGlyph.include(r270_xn$referglyph$1aao(r270_name + '.' + r270_sMid), true, true);
                    r287_currentGlyph.include(r270_ApparentTranslate(0, r270_yHigh - r270_SymbolMid));
                    return void 0;
                });
            if (r270_midXH)
                r270_xn$createAndSaveGlyphImpl$2Lrc3c(r270_name + '.' + r270_midXH, null, function () {
                    var _r292_t1;
                    var _r292_t0 = this;
                    var r292_currentGlyph = _r292_t0;
                    r292_currentGlyph.include(r270_xn$referglyph$1aao(r270_name + '.' + r270_sMid), true, true);
                    r292_currentGlyph.include(r270_ApparentTranslate(0, r270_XH / 2 - r270_SymbolMid));
                    return void 0;
                });
            if (r270_slashBot)
                r270_xn$createAndSaveGlyphImpl$2Lrc3c(r270_name + '.' + r270_slashBot, null, function () {
                    var _r297_t1;
                    var _r297_t0 = this;
                    var r297_currentGlyph = _r297_t0;
                    r297_currentGlyph.include(r270_xn$referglyph$1aao(r270_name + '.' + r270_sMid), true, true);
                    r297_currentGlyph.include(r270_ApparentTranslate(0, r270_yLow - r270_SymbolMid));
                    return void 0;
                });
            if (r270_dual)
                r270_xn$createAndSaveGlyphImpl$2Lrc3c(r270_dual + '.' + r270_sMid, null, function () {
                    var _r302_t1;
                    var _r302_t0 = this;
                    var r302_currentGlyph = _r302_t0;
                    r302_currentGlyph.include(r270_WithTransform(r270_ApparentTranslate(0, r270_yHigh_DT - r270_SymbolMid), r270_xn$referglyph$1aao(r270_name + '.' + r270_sMid)), true, true);
                    r302_currentGlyph.include(r270_WithTransform(r270_ApparentTranslate(0, r270_yLow_DT - r270_SymbolMid), r270_xn$referglyph$1aao(r270_name + '.' + r270_sMid)));
                    return void 0;
                });
            if (r270_triple)
                (function () {
                    var r307_FMosaicWide, r307_MosaicNameSuffix, r307_MosaicWidth, r307_MosaicWidthScalar, _r307_t3, _r307_t5, _r307_t6, _r307_tag7;
                    var r307_WidthKinds = [
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
                    var _r307_t0 = r307_WidthKinds;
                    var _r307_t1 = _r307_t0.length;
                    var _r307_t2 = 0;
                    var _r307_t4 = _r307_t2 < _r307_t1;
                    while (_r307_t4) {
                        _r307_t3 = _r307_t0[_r307_t2];
                        r307_FMosaicWide = _r307_t3[0];
                        r307_MosaicNameSuffix = _r307_t3[1];
                        r307_MosaicWidth = _r307_t3[2];
                        r307_MosaicWidthScalar = _r307_t3[3];
                        (function () {
                            var r310_MosaicDesiredWidth = r270_WideWidth1;
                            var r310_MosaicMiddle = r307_MosaicWidth / 2;
                            var r310_MosaicUnitWidth = r307_MosaicWidth / r307_MosaicWidthScalar;
                            var r310_MangleUnicode = function (r311_unicode, r311__desiredOverride) {
                                var _r311_t0, _r311_t1;
                                return r307_MosaicWidth === (r311__desiredOverride || r310_MosaicDesiredWidth) ? r311_unicode : void 0;
                            };
                            var r310_MangleName = function (r312_name) {
                                var _r312_t0, _r312_t1;
                                return r312_name + r307_MosaicNameSuffix;
                            };
                            var r310_scale = Math.sqrt(r307_MosaicWidthScalar / 2);
                            return r270_xn$createAndSaveGlyphImpl$2Lrc3c(r310_MangleName(r270_triple) + '.' + r270_sMid, null, function () {
                                var _r315_t1;
                                var _r315_t0 = this;
                                var r315_currentGlyph = _r315_t0;
                                r315_currentGlyph.setWidth(r307_MosaicWidth);
                                r315_currentGlyph.include(r270_xn$createAndSaveGlyphImpl$2Lrc3c(null, null, function () {
                                    var _r320_t1;
                                    var _r320_t0 = this;
                                    var r320_currentGlyph = _r320_t0;
                                    r320_currentGlyph.include(r270_xn$referglyph$1aao(r270_name + '.' + r270_sMid), true, true);
                                    r320_currentGlyph.include(r270_ScaleAround(r270_Middle, r270_SymbolMid, r310_scale, r310_scale));
                                    r320_currentGlyph.include(r270_ApparentTranslate(r307_MosaicWidth * 0.5 - r270_Width / 2, r270_yHigh_DT - r270_SymbolMid));
                                    return void 0;
                                }));
                                r315_currentGlyph.include(r270_xn$createAndSaveGlyphImpl$2Lrc3c(null, null, function () {
                                    var _r327_t1;
                                    var _r327_t0 = this;
                                    var r327_currentGlyph = _r327_t0;
                                    r327_currentGlyph.include(r270_xn$referglyph$1aao(r270_name + '.' + r270_sMid), true, true);
                                    r327_currentGlyph.include(r270_ScaleAround(r270_Middle, r270_SymbolMid, r310_scale, r310_scale));
                                    r327_currentGlyph.include(r270_ApparentTranslate(r307_MosaicWidth * 0.75 - r270_Width / 2, r270_yLow_DT - r270_SymbolMid));
                                    return void 0;
                                }));
                                r315_currentGlyph.include(r270_xn$createAndSaveGlyphImpl$2Lrc3c(null, null, function () {
                                    var _r334_t1;
                                    var _r334_t0 = this;
                                    var r334_currentGlyph = _r334_t0;
                                    r334_currentGlyph.include(r270_xn$referglyph$1aao(r270_name + '.' + r270_sMid), true, true);
                                    r334_currentGlyph.include(r270_ScaleAround(r270_Middle, r270_SymbolMid, r310_scale, r310_scale));
                                    r334_currentGlyph.include(r270_ApparentTranslate(r307_MosaicWidth * 0.25 - r270_Width / 2, r270_yLow_DT - r270_SymbolMid));
                                    return void 0;
                                }));
                                return void 0;
                            });
                        }());
                        _r307_t5 = _r307_t2 = _r307_t2 + 1;
                        _r307_t4 = _r307_t2 < _r307_t1;
                    }
                    return _r307_t5;
                }());
            _r270_t8 = _r270_t8 + 1;
        }
        r270_xn$selectvariant$7Hrq('asterisk', '*');
        r270_xn$selectvariant$7Hrq('asterisk/slashTop', new r270_xn$NamedParameterPair$2Lrc9b('shapeFrom', 'asterisk'));
        r270_xn$selectvariant$7Hrq('asterisk/slashBot', 8270, new r270_xn$NamedParameterPair$2Lrc9b('shapeFrom', 'asterisk'));
        r270_xn$selectvariant$7Hrq('asterisk/sMid', new r270_xn$NamedParameterPair$2Lrc9b('shapeFrom', 'asterisk'));
        r270_xn$selectvariant$7Hrq('asterisk/sMid/ligComment', new r270_xn$NamedParameterPair$2Lrc9b('shapeFrom', 'asterisk'), new r270_xn$NamedParameterPair$2Lrc9b('follow', 'asterisk/sMid'));
        r270_xn$selectvariant$7Hrq('dualAsterisk', 8273, new r270_xn$NamedParameterPair$2Lrc9b('follow', 'asterisk/sMid'));
        r270_xn$selectvariant$7Hrq('flower', 8277);
        return function () {
            var r346_FMosaicWide, r346_MosaicNameSuffix, r346_MosaicWidth, r346_MosaicWidthScalar, _r346_t3, _r346_t5, _r346_t6, _r346_tag7;
            var r346_WidthKinds = [
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
            var _r346_t0 = r346_WidthKinds;
            var _r346_t1 = _r346_t0.length;
            var _r346_t2 = 0;
            var _r346_t4 = _r346_t2 < _r346_t1;
            while (_r346_t4) {
                _r346_t3 = _r346_t0[_r346_t2];
                r346_FMosaicWide = _r346_t3[0];
                r346_MosaicNameSuffix = _r346_t3[1];
                r346_MosaicWidth = _r346_t3[2];
                r346_MosaicWidthScalar = _r346_t3[3];
                (function () {
                    var r349_MosaicDesiredWidth = r270_WideWidth1;
                    var r349_MosaicMiddle = r346_MosaicWidth / 2;
                    var r349_MosaicUnitWidth = r346_MosaicWidth / r346_MosaicWidthScalar;
                    var r349_MangleUnicode = function (r350_unicode, r350__desiredOverride) {
                        var _r350_t0, _r350_t1;
                        return r346_MosaicWidth === (r350__desiredOverride || r349_MosaicDesiredWidth) ? r350_unicode : void 0;
                    };
                    var r349_MangleName = function (r351_name) {
                        var _r351_t0, _r351_t1;
                        return r351_name + r346_MosaicNameSuffix;
                    };
                    return r270_xn$selectvariant$7Hrq(r349_MangleName('asterism'), r349_MangleUnicode(8258), new r270_xn$NamedParameterPair$2Lrc9b('follow', 'asterisk/sMid'));
                }());
                _r346_t5 = _r346_t2 = _r346_t2 + 1;
                _r346_t4 = _r346_t2 < _r346_t1;
            }
            return _r346_t5;
        }();
    });
    return void 0;
});
