'use strict';
import * as _s0_t0 from '../../support/utils.mjs';
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
    r269_xn$Capture_Ext$2Lrc2b['$defineGlyphBlockImpl$'](r269_xn$Capture_Ext$2Lrc2b, 'Symbol-Mosaic', function (r270_xn$Capture$2Lrc8, r270_xn$ExportCapture$2Lrc4b) {
        var _r270_t6, _r270_t7, _r270_t8, _r270_tag9;
        var _r270_t0 = r270_xn$Capture$2Lrc8;
        var r270_xn$createAndSaveGlyphImpl$2Lrc3c = _r270_t0['$createAndSaveGlyphImpl$'];
        var r270_xn$NamedParameterPair$2Lrc9b = _r270_t0['$NamedParameterPair$'];
        var r270_xn$assignUnicodeImpl$2Lrc8b = _r270_t0['$assignUnicodeImpl$'];
        var r270_xn$execState$2Lrc0b = _r270_t0['$execState$'];
        var r270_recursive = _r270_t0.recursive;
        var r270_fontMetrics = _r270_t0.fontMetrics;
        var _r270_t1 = r270_xn$Capture$2Lrc8.Metrics;
        var r270_Width = _r270_t1.Width;
        var r270_HVContrast = _r270_t1.HVContrast;
        var r270_Upward = _r270_t1.Upward;
        var r270_Downward = _r270_t1.Downward;
        var r270_Rightward = _r270_t1.Rightward;
        var r270_Leftward = _r270_t1.Leftward;
        var r270_O = _r270_t1.O;
        var r270_WideWidth4 = _r270_t1.WideWidth4;
        var r270_AdviceStroke = _r270_t1.AdviceStroke;
        var _r270_t2 = r270_xn$Capture$2Lrc8.SpiroFns;
        var r270_corner = _r270_t2.corner;
        var r270_flat = _r270_t2.flat;
        var r270_curl = _r270_t2.curl;
        var r270_widths = _r270_t2.widths;
        var r270_heading = _r270_t2.heading;
        var r270_arcvh = _r270_t2.arcvh;
        var r270_dispiro = _r270_t2.dispiro;
        var r270_xn$spirooutline$1aao = _r270_t2['spiro-outline'];
        var _r270_t3 = r270_xn$Capture$2Lrc8.BooleFns;
        var r270_union = _r270_t3.union;
        var r270_intersection = _r270_t3.intersection;
        var r270_difference = _r270_t3.difference;
        if (r270_recursive)
            return void 0;
        var _r270_t4 = r270_xn$Capture$2Lrc8.CommonShapes.resolve();
        var r270_Rect = _r270_t4.Rect;
        var r270_HBar = _r270_t4.HBar;
        var r270_VBar = _r270_t4.VBar;
        var r270_ForceUpright = _r270_t4.ForceUpright;
        var _r270_t5 = r270_xn$Capture$2Lrc8['Common-Derivatives'].resolve();
        var r270_xn$referglyph$1aao = _r270_t5['refer-glyph'];
        var r270_MosaicTop = r270_fontMetrics.os2.sTypoAscender;
        var r270_MosaicBottom = r270_fontMetrics.os2.sTypoDescender;
        return function () {
            var r275_FMosaicWide, r275_MosaicNameSuffix, r275_MosaicWidth, r275_MosaicWidthScalar, _r275_t3, _r275_t5, _r275_t6, _r275_tag7;
            var r275_WidthKinds = [
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
            var _r275_t0 = r275_WidthKinds;
            var _r275_t1 = _r275_t0.length;
            var _r275_t2 = 0;
            var _r275_t4 = _r275_t2 < _r275_t1;
            while (_r275_t4) {
                _r275_t3 = _r275_t0[_r275_t2];
                r275_FMosaicWide = _r275_t3[0];
                r275_MosaicNameSuffix = _r275_t3[1];
                r275_MosaicWidth = _r275_t3[2];
                r275_MosaicWidthScalar = _r275_t3[3];
                (function () {
                    var _r278_t0, _r278_tag1, _r278_t2, _r278_tag3, _r278_t4, _r278_tag5, _r278_t6, _r278_tag7;
                    var r278_MosaicDesiredWidth = r270_WideWidth4;
                    var r278_MosaicMiddle = r275_MosaicWidth / 2;
                    var r278_MosaicUnitWidth = r275_MosaicWidth / r275_MosaicWidthScalar;
                    var r278_MangleUnicode = function (r279_unicode, r279__desiredOverride) {
                        var _r279_t0, _r279_t1;
                        return r275_MosaicWidth === (r279__desiredOverride || r278_MosaicDesiredWidth) ? r279_unicode : void 0;
                    };
                    var r278_MangleName = function (r280_name) {
                        var _r280_t0, _r280_t1;
                        return r280_name + r275_MosaicNameSuffix;
                    };
                    var r278_top = r270_MosaicTop;
                    var r278_bottom = r270_MosaicBottom;
                    var r278_left = 0;
                    var r278_right = r275_MosaicWidth;
                    var r278_PatternCorner23 = function (r281_bit) {
                        var _r281_t1, _r281_t2;
                        var _r281_t0 = r281_bit;
                        return 1 === _r281_t0 ? r270_corner(r1_mix(r278_left, r278_right, 0 / 2), r1_mix(r278_top, r278_bottom, 0 / 3)) : 2 === _r281_t0 ? r270_corner(r1_mix(r278_left, r278_right, 1 / 2), r1_mix(r278_top, r278_bottom, 0 / 3)) : 3 === _r281_t0 ? r270_corner(r1_mix(r278_left, r278_right, 2 / 2), r1_mix(r278_top, r278_bottom, 0 / 3)) : 4 === _r281_t0 ? r270_corner(r1_mix(r278_left, r278_right, 0 / 2), r1_mix(r278_top, r278_bottom, 1 / 3)) : 5 === _r281_t0 ? r270_corner(r1_mix(r278_left, r278_right, 2 / 2), r1_mix(r278_top, r278_bottom, 1 / 3)) : 6 === _r281_t0 ? r270_corner(r1_mix(r278_left, r278_right, 0 / 2), r1_mix(r278_top, r278_bottom, 2 / 3)) : 7 === _r281_t0 ? r270_corner(r1_mix(r278_left, r278_right, 2 / 2), r1_mix(r278_top, r278_bottom, 2 / 3)) : 8 === _r281_t0 ? r270_corner(r1_mix(r278_left, r278_right, 0 / 2), r1_mix(r278_top, r278_bottom, 3 / 3)) : 9 === _r281_t0 ? r270_corner(r1_mix(r278_left, r278_right, 1 / 2), r1_mix(r278_top, r278_bottom, 3 / 3)) : 0 === _r281_t0 ? r270_corner(r1_mix(r278_left, r278_right, 2 / 2), r1_mix(r278_top, r278_bottom, 3 / 3)) : void 0;
                    };
                    var r278_PatternCorner22 = function (r282_bit) {
                        var _r282_t1, _r282_t2;
                        var _r282_t0 = r282_bit;
                        return 1 === _r282_t0 ? r270_corner(r1_mix(r278_left, r278_right, 0 / 2), r1_mix(r278_top, r278_bottom, 0 / 2)) : 2 === _r282_t0 ? r270_corner(r1_mix(r278_left, r278_right, 1 / 2), r1_mix(r278_top, r278_bottom, 0 / 2)) : 3 === _r282_t0 ? r270_corner(r1_mix(r278_left, r278_right, 2 / 2), r1_mix(r278_top, r278_bottom, 0 / 2)) : 4 === _r282_t0 ? r270_corner(r1_mix(r278_left, r278_right, 0 / 2), r1_mix(r278_top, r278_bottom, 1 / 2)) : 5 === _r282_t0 ? r270_corner(r1_mix(r278_left, r278_right, 1 / 2), r1_mix(r278_top, r278_bottom, 1 / 2)) : 6 === _r282_t0 ? r270_corner(r1_mix(r278_left, r278_right, 2 / 2), r1_mix(r278_top, r278_bottom, 1 / 2)) : 7 === _r282_t0 ? r270_corner(r1_mix(r278_left, r278_right, 0 / 2), r1_mix(r278_top, r278_bottom, 2 / 2)) : 8 === _r282_t0 ? r270_corner(r1_mix(r278_left, r278_right, 1 / 2), r1_mix(r278_top, r278_bottom, 2 / 2)) : 9 === _r282_t0 ? r270_corner(r1_mix(r278_left, r278_right, 2 / 2), r1_mix(r278_top, r278_bottom, 2 / 2)) : void 0;
                    };
                    var r278_PatternPolygon22 = function (r283_bits) {
                        var _r283_t0, _r283_t1;
                        return r270_xn$spirooutline$1aao(r283_bits.map(function (r284_x) {
                            var _r284_t0, _r284_t1;
                            return r278_PatternCorner22(r284_x - 0);
                        }));
                    };
                    var r278_BEGlyphName = function (r285_unicode) {
                        var _r285_t0, _r285_t1;
                        return r278_MangleName('be' + r285_unicode.toString(16).toUpperCase());
                    };
                    var r278_BMGlyphName = function (r286_unicode) {
                        var _r286_t0, _r286_t1;
                        return r278_MangleName('blockMosaic/' + r286_unicode.toString(16).toUpperCase());
                    };
                    var r278_BdGlyphName = function (r287_unicode) {
                        var _r287_t0, _r287_t1;
                        return r278_MangleName('bd' + r287_unicode.toString(16).toUpperCase());
                    };
                    (function () {
                        var r289_BlockMosaicTile = function (r290_w, r290_h, r290_id) {
                            var _r290_t0, _r290_t1;
                            return function () {
                                var _r292_t1;
                                var _r292_t0 = this;
                                var r292_currentGlyph = _r292_t0;
                                var r292_column = r290_id % r290_w;
                                var r292_row = Math.floor(r290_id / r290_w);
                                var r292_cw = (r278_right - r278_left) / r290_w;
                                var r292_ch = (r278_top - r278_bottom) / r290_h;
                                r292_currentGlyph.include(r270_xn$spirooutline$1aao(r270_corner(r292_column * r292_cw, r278_top - r292_row * r292_ch), r270_corner((r292_column + 1) * r292_cw, r278_top - r292_row * r292_ch), r270_corner((r292_column + 1) * r292_cw, r278_top - (r292_row + 1) * r292_ch), r270_corner(r292_column * r292_cw, r278_top - (r292_row + 1) * r292_ch)));
                                return void 0;
                            };
                        };
                        var r289_BlockMosaicPattern = function (r294_w, r294_h, r294_bits) {
                            var _r294_t0, _r294_t1;
                            return function () {
                                var _r296_t1;
                                var _r296_t0 = this;
                                var r296_currentGlyph = _r296_t0;
                                if (r294_bits.length > 0)
                                    r296_currentGlyph.include(r270_union(r289_BlockMosaicTile(r294_w, r294_h, r294_bits[0]), r289_BlockMosaicPattern(r294_w, r294_h, r294_bits.slice(1))));
                                return void 0;
                            };
                        };
                        var r289_BlockMosaic23 = function (r298_unicode, r298_pattern) {
                            var _r298_t0, _r298_t1;
                            return r270_xn$createAndSaveGlyphImpl$2Lrc3c(r278_BMGlyphName(r298_unicode), r278_MangleUnicode(r298_unicode), function () {
                                var _r301_t1;
                                var _r301_t0 = this;
                                var r301_currentGlyph = _r301_t0;
                                r301_currentGlyph.setWidth(r275_MosaicWidth);
                                r301_currentGlyph.include(r270_ForceUpright());
                                r301_currentGlyph.include(r289_BlockMosaicPattern(2, 3, r298_pattern.split('').map(function (r305_x) {
                                    var _r305_t0, _r305_t1;
                                    return r305_x - 1;
                                })));
                                return void 0;
                            });
                        };
                        var r289_BlockMosaic = function (r306_unicode, r306_w, r306_h, r306_pattern) {
                            var _r306_t0, _r306_t1;
                            return r270_xn$createAndSaveGlyphImpl$2Lrc3c(r278_BMGlyphName(r306_unicode), r278_MangleUnicode(r306_unicode), function () {
                                var _r309_t1;
                                var _r309_t0 = this;
                                var r309_currentGlyph = _r309_t0;
                                r309_currentGlyph.setWidth(r275_MosaicWidth);
                                r309_currentGlyph.include(r270_ForceUpright());
                                r309_currentGlyph.include(r289_BlockMosaicPattern(r306_w, r306_h, r306_pattern));
                                return void 0;
                            });
                        };
                        r289_BlockMosaic23(129792, '1');
                        r289_BlockMosaic23(129793, '2');
                        r289_BlockMosaic23(129794, '12');
                        r289_BlockMosaic23(129795, '3');
                        r289_BlockMosaic23(129796, '13');
                        r289_BlockMosaic23(129797, '23');
                        r289_BlockMosaic23(129798, '123');
                        r289_BlockMosaic23(129799, '4');
                        r289_BlockMosaic23(129800, '14');
                        r289_BlockMosaic23(129801, '24');
                        r289_BlockMosaic23(129802, '124');
                        r289_BlockMosaic23(129803, '34');
                        r289_BlockMosaic23(129804, '134');
                        r289_BlockMosaic23(129805, '234');
                        r289_BlockMosaic23(129806, '1234');
                        r289_BlockMosaic23(129807, '5');
                        r289_BlockMosaic23(129808, '15');
                        r289_BlockMosaic23(129809, '25');
                        r289_BlockMosaic23(129810, '125');
                        r289_BlockMosaic23(129811, '35');
                        r289_BlockMosaic23(129812, '235');
                        r289_BlockMosaic23(129813, '1235');
                        r289_BlockMosaic23(129814, '45');
                        r289_BlockMosaic23(129815, '145');
                        r289_BlockMosaic23(129816, '245');
                        r289_BlockMosaic23(129817, '1245');
                        r289_BlockMosaic23(129818, '345');
                        r289_BlockMosaic23(129819, '1345');
                        r289_BlockMosaic23(129820, '2345');
                        r289_BlockMosaic23(129821, '12345');
                        r289_BlockMosaic23(129822, '6');
                        r289_BlockMosaic23(129823, '16');
                        r289_BlockMosaic23(129824, '26');
                        r289_BlockMosaic23(129825, '126');
                        r289_BlockMosaic23(129826, '36');
                        r289_BlockMosaic23(129827, '136');
                        r289_BlockMosaic23(129828, '236');
                        r289_BlockMosaic23(129829, '1236');
                        r289_BlockMosaic23(129830, '46');
                        r289_BlockMosaic23(129831, '146');
                        r289_BlockMosaic23(129832, '1246');
                        r289_BlockMosaic23(129833, '346');
                        r289_BlockMosaic23(129834, '1346');
                        r289_BlockMosaic23(129835, '2346');
                        r289_BlockMosaic23(129836, '12346');
                        r289_BlockMosaic23(129837, '56');
                        r289_BlockMosaic23(129838, '156');
                        r289_BlockMosaic23(129839, '256');
                        r289_BlockMosaic23(129840, '1256');
                        r289_BlockMosaic23(129841, '356');
                        r289_BlockMosaic23(129842, '1356');
                        r289_BlockMosaic23(129843, '2356');
                        r289_BlockMosaic23(129844, '12356');
                        r289_BlockMosaic23(129845, '456');
                        r289_BlockMosaic23(129846, '1456');
                        r289_BlockMosaic23(129847, '2456');
                        r289_BlockMosaic23(129848, '12456');
                        r289_BlockMosaic23(129849, '3456');
                        r289_BlockMosaic23(129850, '13456');
                        r289_BlockMosaic23(129851, '23456');
                        r289_BlockMosaic(129941, 4, 4, [
                            0,
                            2,
                            5,
                            7,
                            8,
                            10,
                            13,
                            15
                        ]);
                        r289_BlockMosaic(129942, 4, 4, [
                            1,
                            3,
                            4,
                            6,
                            9,
                            11,
                            12,
                            14
                        ]);
                        return r289_BlockMosaic(129943, 4, 4, [
                            4,
                            5,
                            6,
                            7,
                            12,
                            13,
                            14,
                            15
                        ]);
                    }());
                    (function () {
                        var r314_SmoothMosaic23 = function (r315_unicode, r315_pattern) {
                            var _r315_t0, _r315_t1;
                            return r270_xn$createAndSaveGlyphImpl$2Lrc3c(r278_MangleName('blockMosaicSmooth23/' + r315_pattern), r278_MangleUnicode(r315_unicode), function () {
                                var _r318_t1;
                                var _r318_t0 = this;
                                var r318_currentGlyph = _r318_t0;
                                r318_currentGlyph.setWidth(r275_MosaicWidth);
                                r318_currentGlyph.include(r270_ForceUpright());
                                var r318_corners = r315_pattern.split('').map(function (r321_x) {
                                    var _r321_t0, _r321_t1;
                                    return r278_PatternCorner23(r321_x - 0);
                                });
                                r318_currentGlyph.include(r270_xn$spirooutline$1aao(r318_corners));
                                return void 0;
                            });
                        };
                        r314_SmoothMosaic23(129852, '689');
                        r314_SmoothMosaic23(129853, '680');
                        r314_SmoothMosaic23(129854, '489');
                        r314_SmoothMosaic23(129855, '480');
                        r314_SmoothMosaic23(129856, '189');
                        r314_SmoothMosaic23(129857, '42308');
                        r314_SmoothMosaic23(129858, '4308');
                        r314_SmoothMosaic23(129859, '62308');
                        r314_SmoothMosaic23(129860, '6308');
                        r314_SmoothMosaic23(129861, '2308');
                        r314_SmoothMosaic23(129862, '6508');
                        r314_SmoothMosaic23(129863, '970');
                        r314_SmoothMosaic23(129864, '870');
                        r314_SmoothMosaic23(129865, '950');
                        r314_SmoothMosaic23(129866, '850');
                        r314_SmoothMosaic23(129867, '930');
                        r314_SmoothMosaic23(129868, '25081');
                        r314_SmoothMosaic23(129869, '5081');
                        r314_SmoothMosaic23(129870, '27081');
                        r314_SmoothMosaic23(129871, '7081');
                        r314_SmoothMosaic23(129872, '2081');
                        r314_SmoothMosaic23(129873, '7084');
                        r314_SmoothMosaic23(129874, '69031');
                        r314_SmoothMosaic23(129875, '6031');
                        r314_SmoothMosaic23(129876, '49031');
                        r314_SmoothMosaic23(129877, '4031');
                        r314_SmoothMosaic23(129878, '9031');
                        r314_SmoothMosaic23(129879, '142');
                        r314_SmoothMosaic23(129880, '143');
                        r314_SmoothMosaic23(129881, '162');
                        r314_SmoothMosaic23(129882, '163');
                        r314_SmoothMosaic23(129883, '182');
                        r314_SmoothMosaic23(129884, '1653');
                        r314_SmoothMosaic23(129885, '18973');
                        r314_SmoothMosaic23(129886, '1873');
                        r314_SmoothMosaic23(129887, '18953');
                        r314_SmoothMosaic23(129888, '1853');
                        r314_SmoothMosaic23(129889, '1893');
                        r314_SmoothMosaic23(129890, '235');
                        r314_SmoothMosaic23(129891, '135');
                        r314_SmoothMosaic23(129892, '237');
                        r314_SmoothMosaic23(129893, '137');
                        r314_SmoothMosaic23(129894, '230');
                        r314_SmoothMosaic23(129895, '1473');
                        var r314_SmoothMosaic22 = function (r323_unicode, r323_pattern) {
                            var _r323_t0, _r323_t1;
                            return r270_xn$createAndSaveGlyphImpl$2Lrc3c(r278_MangleName('blockMosaicSmooth22/' + r323_pattern), r278_MangleUnicode(r323_unicode), function () {
                                var _r326_t1;
                                var _r326_t0 = this;
                                var r326_currentGlyph = _r326_t0;
                                r326_currentGlyph.setWidth(r275_MosaicWidth);
                                r326_currentGlyph.include(r270_ForceUpright());
                                var r326_corners = r323_pattern.split('').map(function (r329_x) {
                                    var _r329_t0, _r329_t1;
                                    return r278_PatternCorner22(r329_x - 0);
                                });
                                r326_currentGlyph.include(r270_xn$spirooutline$1aao(r326_corners));
                                return void 0;
                            });
                        };
                        r314_SmoothMosaic22(129896, '15793');
                        r314_SmoothMosaic22(129897, '17935');
                        r314_SmoothMosaic22(129898, '17953');
                        r314_SmoothMosaic22(129899, '17593');
                        r314_SmoothMosaic22(129900, '175');
                        r314_SmoothMosaic22(129901, '315');
                        r314_SmoothMosaic22(129902, '359');
                        r314_SmoothMosaic22(129903, '579');
                        r314_SmoothMosaic22(129946, '1379');
                        return r314_SmoothMosaic22(129947, '1739');
                    }());
                    (function () {
                        var r332_unicode, r332_lt, r332_rt, r332_lb, r332_rb, _r332_t5, _r332_t7;
                        var r332_FillBlock = function (r333_hStart, r333_hEnd, r333_vStart, r333_vEnd) {
                            var _r333_t0, _r333_t1;
                            return r270_xn$spirooutline$1aao(r270_corner(r1_mix(r278_left, r278_right, r333_hStart), r1_mix(r278_bottom, r278_top, r333_vStart)), r270_corner(r1_mix(r278_left, r278_right, r333_hStart), r1_mix(r278_bottom, r278_top, r333_vEnd)), r270_corner(r1_mix(r278_left, r278_right, r333_hEnd), r1_mix(r278_bottom, r278_top, r333_vEnd)), r270_corner(r1_mix(r278_left, r278_right, r333_hEnd), r1_mix(r278_bottom, r278_top, r333_vStart)));
                        };
                        var r332_BlockElementGlyph = function (r334_unicode, r334_hStart, r334_hEnd, r334_vStart, r334_vEnd) {
                            var _r334_t0, _r334_t1;
                            return r270_xn$createAndSaveGlyphImpl$2Lrc3c(r278_BEGlyphName(r334_unicode), r278_MangleUnicode(r334_unicode), function () {
                                var _r337_t1;
                                var _r337_t0 = this;
                                var r337_currentGlyph = _r337_t0;
                                r337_currentGlyph.setWidth(r275_MosaicWidth);
                                r337_currentGlyph.include(r270_ForceUpright());
                                r337_currentGlyph.include(r332_FillBlock(r334_hStart, r334_hEnd, r334_vStart, r334_vEnd));
                                return void 0;
                            });
                        };
                        var r332_BlockElementGlyph2 = function (r341_unicode, r341_hStart1, r341_hEnd1, r341_vStart1, r341_vEnd1, r341_hStart2, r341_hEnd2, r341_vStart2, r341_vEnd2) {
                            var _r341_t0, _r341_t1;
                            return r270_xn$createAndSaveGlyphImpl$2Lrc3c(r278_BEGlyphName(r341_unicode), r278_MangleUnicode(r341_unicode), function () {
                                var _r344_t1;
                                var _r344_t0 = this;
                                var r344_currentGlyph = _r344_t0;
                                r344_currentGlyph.setWidth(r275_MosaicWidth);
                                r344_currentGlyph.include(r270_ForceUpright());
                                r344_currentGlyph.include(r270_union(r332_FillBlock(r341_hStart1, r341_hEnd1, r341_vStart1, r341_vEnd1), r332_FillBlock(r341_hStart2, r341_hEnd2, r341_vStart2, r341_vEnd2)));
                                return void 0;
                            });
                        };
                        r332_BlockElementGlyph(9608, 0, 1, 0, 1);
                        r332_BlockElementGlyph(129926, 0, 1, 1 / 8, 1);
                        r332_BlockElementGlyph(129925, 0, 1, 2 / 8, 1);
                        r332_BlockElementGlyph(129924, 0, 1, 3 / 8, 1);
                        r332_BlockElementGlyph(9600, 0, 1, 1 / 2, 1);
                        r332_BlockElementGlyph(129923, 0, 1, 5 / 8, 1);
                        r332_BlockElementGlyph(129922, 0, 1, 6 / 8, 1);
                        r332_BlockElementGlyph(9620, 0, 1, 7 / 8, 1);
                        r332_BlockElementGlyph(9621, 7 / 8, 1, 0, 1);
                        r332_BlockElementGlyph(129927, 6 / 8, 1, 0, 1);
                        r332_BlockElementGlyph(129928, 5 / 8, 1, 0, 1);
                        r332_BlockElementGlyph(9616, 1 / 2, 1, 0, 1);
                        r332_BlockElementGlyph(129929, 3 / 8, 1, 0, 1);
                        r332_BlockElementGlyph(129930, 2 / 8, 1, 0, 1);
                        r332_BlockElementGlyph(129931, 1 / 8, 1, 0, 1);
                        var _r332_t0 = 1;
                        var _r332_t1 = 8;
                        var r332_fill = _r332_t0;
                        while (r332_fill < _r332_t1) {
                            r332_BlockElementGlyph(9600 + r332_fill, 0, 1, 0, r332_fill / 8);
                            r332_BlockElementGlyph(9616 - r332_fill, 0, r332_fill / 8, 0, 1);
                            if (r332_fill >= 2 && r332_fill <= 7) {
                                r332_BlockElementGlyph(129904 - 2 + r332_fill, (r332_fill - 1) / 8, r332_fill / 8, 0, 1);
                                r332_BlockElementGlyph(129910 - 2 + r332_fill, 0, 1, 1 - (r332_fill - 1) / 8, 1 - r332_fill / 8);
                            }
                            r332_fill = r332_fill + 1;
                        }
                        r332_BlockElementGlyph2(129916, 0, 1 / 8, 0, 1, 0, 1, 0, 1 / 8);
                        r332_BlockElementGlyph2(129917, 0, 1 / 8, 0, 1, 0, 1, 7 / 8, 1);
                        r332_BlockElementGlyph2(129918, 7 / 8, 1, 0, 1, 0, 1, 7 / 8, 1);
                        r332_BlockElementGlyph2(129919, 7 / 8, 1, 0, 1, 0, 1, 0, 1 / 8);
                        r332_BlockElementGlyph2(129920, 0, 1, 7 / 8, 1, 0, 1, 0, 1 / 8);
                        r270_xn$createAndSaveGlyphImpl$2Lrc3c(r278_BEGlyphName(129921), r278_MangleUnicode(129921), function () {
                            var _r352_t1;
                            var _r352_t0 = this;
                            var r352_currentGlyph = _r352_t0;
                            r352_currentGlyph.setWidth(r275_MosaicWidth);
                            r352_currentGlyph.include(r270_ForceUpright());
                            r352_currentGlyph.include(r270_union(r332_FillBlock(0, 1, 7 / 8, 1), r332_FillBlock(0, 1, 5 / 8, 6 / 8), r332_FillBlock(0, 1, 3 / 8, 4 / 8), r332_FillBlock(0, 1, 0, 1 / 8)));
                            return void 0;
                        });
                        r270_xn$createAndSaveGlyphImpl$2Lrc3c(r278_BEGlyphName(129973), r278_MangleUnicode(129973), function () {
                            var _r358_t1;
                            var _r358_t0 = this;
                            var r358_currentGlyph = _r358_t0;
                            r358_currentGlyph.setWidth(r275_MosaicWidth);
                            r358_currentGlyph.include(r270_ForceUpright());
                            r358_currentGlyph.include(r270_xn$referglyph$1aao(r278_MangleName('arrowLeft')));
                            r358_currentGlyph.include(r270_xn$referglyph$1aao(r278_BEGlyphName(129920)));
                            return void 0;
                        });
                        r270_xn$createAndSaveGlyphImpl$2Lrc3c(r278_BEGlyphName(129974), r278_MangleUnicode(129974), function () {
                            var _r365_t1;
                            var _r365_t0 = this;
                            var r365_currentGlyph = _r365_t0;
                            r365_currentGlyph.setWidth(r275_MosaicWidth);
                            r365_currentGlyph.include(r270_ForceUpright());
                            r365_currentGlyph.include(r270_xn$referglyph$1aao(r278_MangleName('arrowRight')));
                            r365_currentGlyph.include(r270_xn$referglyph$1aao(r278_BEGlyphName(129920)));
                            return void 0;
                        });
                        r270_xn$createAndSaveGlyphImpl$2Lrc3c(r278_BEGlyphName(129975), r278_MangleUnicode(129975), function () {
                            var _r372_t1;
                            var _r372_t0 = this;
                            var r372_currentGlyph = _r372_t0;
                            r372_currentGlyph.setWidth(r275_MosaicWidth);
                            r372_currentGlyph.include(r270_ForceUpright());
                            r372_currentGlyph.include(r270_xn$referglyph$1aao(r278_MangleName('arrowDown')));
                            r372_currentGlyph.include(r270_xn$referglyph$1aao(r278_BEGlyphName(9621)));
                            return void 0;
                        });
                        r270_xn$createAndSaveGlyphImpl$2Lrc3c(r278_BEGlyphName(129976), r278_MangleUnicode(129976), function () {
                            var _r379_t1;
                            var _r379_t0 = this;
                            var r379_currentGlyph = _r379_t0;
                            r379_currentGlyph.setWidth(r275_MosaicWidth);
                            r379_currentGlyph.include(r270_ForceUpright());
                            r379_currentGlyph.include(r270_xn$referglyph$1aao(r278_MangleName('arrowUp')));
                            r379_currentGlyph.include(r270_xn$referglyph$1aao(r278_BEGlyphName(9621)));
                            return void 0;
                        });
                        r270_xn$createAndSaveGlyphImpl$2Lrc3c(r278_BEGlyphName(129980), r278_MangleUnicode(129980), function () {
                            var _r386_t1;
                            var _r386_t0 = this;
                            var r386_currentGlyph = _r386_t0;
                            r386_currentGlyph.setWidth(r275_MosaicWidth);
                            r386_currentGlyph.include(r270_ForceUpright());
                            r386_currentGlyph.include(r270_xn$referglyph$1aao(r278_MangleName('blackSmallCircle')));
                            r386_currentGlyph.include(r270_xn$referglyph$1aao(r278_BEGlyphName(9621)));
                            r386_currentGlyph.include(r270_xn$referglyph$1aao(r278_BEGlyphName(129920)));
                            return void 0;
                        });
                        var r332_Shade = function (r392__steps, r392_fill, r392_box) {
                            var _r392_t0, _r392_t1;
                            return function () {
                                var _r394_t1;
                                var _r394_t0 = this;
                                var r394_currentGlyph = _r394_t0;
                                var r394_steps = Math.abs(r392__steps);
                                var r394_sign = r392__steps >= 0 ? 1 : -1;
                                var r394_sw = (r278_top - r278_bottom) / r394_steps * r392_fill;
                                var r394_skew = Math.round(r275_MosaicWidth / r270_Width) * (r278_top - r278_bottom) / 2;
                                r394_currentGlyph.include(r270_ForceUpright());
                                r394_currentGlyph.include(r270_intersection(function () {
                                    var r398_y0, r398_y1, _r398_t3;
                                    var _r398_t2 = this;
                                    var r398_currentGlyph = _r398_t2;
                                    var _r398_t0 = -r394_steps * 4 - 2;
                                    var _r398_t1 = r394_steps * 4 + 2;
                                    var r398_j = _r398_t0;
                                    while (r398_j < _r398_t1) {
                                        r398_y0 = r1_mix(r278_top, r278_bottom, r398_j / r394_steps);
                                        r398_y1 = r398_y0 + r394_sign * r394_skew;
                                        r398_currentGlyph.include(r270_xn$spirooutline$1aao(r270_corner(0, r398_y0 - r394_sw / 2), r270_corner(r275_MosaicWidth, r398_y1 - r394_sw / 2), r270_corner(r275_MosaicWidth, r398_y1 + r394_sw / 2), r270_corner(0, r398_y0 + r394_sw / 2)));
                                        r398_j = r398_j + 1;
                                    }
                                    return void 0;
                                }, r1_fallback(r392_box, r332_FillBlock(0, 1, 0, 1))));
                                return void 0;
                            };
                        };
                        var r332_FillLight = 1 / 8;
                        var r332_FillMedium = 1 / 4;
                        var r332_FillHeavy = 1 / 2;
                        r270_xn$createAndSaveGlyphImpl$2Lrc3c(r278_MangleName('lightShade'), r278_MangleUnicode(9617), function () {
                            var _r403_t1;
                            var _r403_t0 = this;
                            var r403_currentGlyph = _r403_t0;
                            r403_currentGlyph.setWidth(r275_MosaicWidth);
                            r403_currentGlyph.include(r332_Shade(4, r332_FillLight));
                            return void 0;
                        });
                        r270_xn$createAndSaveGlyphImpl$2Lrc3c(r278_MangleName('denseShade'), null, function () {
                            var _r408_t1;
                            var _r408_t0 = this;
                            var r408_currentGlyph = _r408_t0;
                            r408_currentGlyph.setWidth(r275_MosaicWidth);
                            r408_currentGlyph.include(r332_Shade(16, r332_FillHeavy));
                            return void 0;
                        });
                        var r332_MediumShade = function (r411_unicode, r411_bits) {
                            var _r411_t0, _r411_t1;
                            return r270_xn$createAndSaveGlyphImpl$2Lrc3c(r278_BEGlyphName(r411_unicode), r278_MangleUnicode(r411_unicode), function () {
                                var _r414_t1;
                                var _r414_t0 = this;
                                var r414_currentGlyph = _r414_t0;
                                r414_currentGlyph.setWidth(r275_MosaicWidth);
                                r414_currentGlyph.include(r332_Shade(8, r332_FillMedium, r278_PatternPolygon22(r411_bits)));
                                return void 0;
                            });
                        };
                        var r332_InverseMediumShade = function (r417_unicode, r417_bits) {
                            var _r417_t0, _r417_t1;
                            return r270_xn$createAndSaveGlyphImpl$2Lrc3c(r278_BEGlyphName(r417_unicode), r278_MangleUnicode(r417_unicode), function () {
                                var _r420_t1;
                                var _r420_t0 = this;
                                var r420_currentGlyph = _r420_t0;
                                r420_currentGlyph.setWidth(r275_MosaicWidth);
                                r420_currentGlyph.include(r332_Shade(-8, 1 - r332_FillMedium, r278_PatternPolygon22(r417_bits)));
                                r420_currentGlyph.include(r270_difference(r332_FillBlock(0, 1, 0, 1), r278_PatternPolygon22(r417_bits)));
                                return void 0;
                            });
                        };
                        r332_MediumShade(9618, [
                            1,
                            3,
                            9,
                            7
                        ]);
                        r332_MediumShade(129932, [
                            1,
                            2,
                            8,
                            7
                        ]);
                        r332_MediumShade(129933, [
                            2,
                            3,
                            9,
                            8
                        ]);
                        r332_MediumShade(129934, [
                            1,
                            3,
                            6,
                            4
                        ]);
                        r332_MediumShade(129935, [
                            4,
                            6,
                            9,
                            7
                        ]);
                        r332_InverseMediumShade(129936, [
                            1,
                            3,
                            9,
                            7
                        ]);
                        r332_InverseMediumShade(129940, [
                            1,
                            2,
                            8,
                            7
                        ]);
                        r332_InverseMediumShade(129938, [
                            1,
                            3,
                            6,
                            4
                        ]);
                        r332_InverseMediumShade(129937, [
                            4,
                            6,
                            9,
                            7
                        ]);
                        r332_MediumShade(129948, [
                            1,
                            3,
                            7
                        ]);
                        r332_MediumShade(129949, [
                            1,
                            3,
                            9
                        ]);
                        r332_MediumShade(129950, [
                            3,
                            7,
                            9
                        ]);
                        r332_MediumShade(129951, [
                            1,
                            7,
                            9
                        ]);
                        r270_xn$createAndSaveGlyphImpl$2Lrc3c(r278_MangleName('heavyShade'), r278_MangleUnicode(9619), function () {
                            var _r426_t1;
                            var _r426_t0 = this;
                            var r426_currentGlyph = _r426_t0;
                            r426_currentGlyph.setWidth(r275_MosaicWidth);
                            r426_currentGlyph.include(r332_Shade(8, r332_FillHeavy));
                            return void 0;
                        });
                        r270_xn$createAndSaveGlyphImpl$2Lrc3c(r278_MangleName('upperLeftToLowerRightFill'), r278_MangleUnicode(129944), function () {
                            var _r431_t1;
                            var _r431_t0 = this;
                            var r431_currentGlyph = _r431_t0;
                            r431_currentGlyph.setWidth(r275_MosaicWidth);
                            r431_currentGlyph.include(r332_Shade(-4, r332_FillHeavy));
                            return void 0;
                        });
                        r270_xn$createAndSaveGlyphImpl$2Lrc3c(r278_MangleName('upperRightToLowerLeftFill'), r278_MangleUnicode(129945), function () {
                            var _r436_t1;
                            var _r436_t0 = this;
                            var r436_currentGlyph = _r436_t0;
                            r436_currentGlyph.setWidth(r275_MosaicWidth);
                            r436_currentGlyph.include(r332_Shade(4, r332_FillHeavy));
                            return void 0;
                        });
                        var r332_filldata = [
                            [
                                9622,
                                0,
                                0,
                                1,
                                0
                            ],
                            [
                                9623,
                                0,
                                0,
                                0,
                                1
                            ],
                            [
                                9624,
                                1,
                                0,
                                0,
                                0
                            ],
                            [
                                9625,
                                1,
                                0,
                                1,
                                1
                            ],
                            [
                                9626,
                                1,
                                0,
                                0,
                                1
                            ],
                            [
                                9627,
                                1,
                                1,
                                1,
                                0
                            ],
                            [
                                9628,
                                1,
                                1,
                                0,
                                1
                            ],
                            [
                                9629,
                                0,
                                1,
                                0,
                                0
                            ],
                            [
                                9630,
                                0,
                                1,
                                1,
                                0
                            ],
                            [
                                9631,
                                0,
                                1,
                                1,
                                1
                            ]
                        ];
                        var _r332_t2 = r332_filldata;
                        var _r332_t3 = _r332_t2.length;
                        var _r332_t4 = 0;
                        var _r332_t6 = _r332_t4 < _r332_t3;
                        while (_r332_t6) {
                            _r332_t7 = (_r332_t5 = _r332_t2[_r332_t4], r332_unicode = _r332_t5[0], r332_lt = _r332_t5[1], r332_rt = _r332_t5[2], r332_lb = _r332_t5[3], r332_rb = _r332_t5[4], r270_xn$createAndSaveGlyphImpl$2Lrc3c(r278_BEGlyphName(r332_unicode), r278_MangleUnicode(r332_unicode), function () {
                                var _r443_t1;
                                var _r443_t0 = this;
                                var r443_currentGlyph = _r443_t0;
                                r443_currentGlyph.setWidth(r275_MosaicWidth);
                                r443_currentGlyph.include(r270_ForceUpright());
                                var r443_t = r278_top;
                                var r443_b = r278_bottom;
                                var r443_l = 0;
                                var r443_r = r275_MosaicWidth;
                                var r443_mx = r1_mix(r443_l, r443_r, 0.5);
                                var r443_my = r1_mix(r443_b, r443_t, 0.5);
                                if (r332_lt)
                                    r443_currentGlyph.include(r270_xn$spirooutline$1aao(r270_corner(r443_l, r443_t), r270_corner(r443_l, r443_my), r270_corner(r443_mx, r443_my), r270_corner(r443_mx, r443_t)));
                                if (r332_rt)
                                    r443_currentGlyph.include(r270_xn$spirooutline$1aao(r270_corner(r443_mx, r443_t), r270_corner(r443_mx, r443_my), r270_corner(r443_r, r443_my), r270_corner(r443_r, r443_t)));
                                if (r332_lb)
                                    r443_currentGlyph.include(r270_xn$spirooutline$1aao(r270_corner(r443_l, r443_my), r270_corner(r443_l, r443_b), r270_corner(r443_mx, r443_b), r270_corner(r443_mx, r443_my)));
                                if (r332_rb)
                                    r443_currentGlyph.include(r270_xn$spirooutline$1aao(r270_corner(r443_mx, r443_my), r270_corner(r443_mx, r443_b), r270_corner(r443_r, r443_b), r270_corner(r443_r, r443_my)));
                                return void 0;
                            }), _r332_t4 = _r332_t4 + 1);
                            _r332_t6 = _r332_t4 < _r332_t3;
                        }
                        return _r332_t7;
                    }());
                    return function () {
                        var r451_light = r270_AdviceStroke(3.5);
                        var r451_heavy = Math.max(r451_light * 2, r270_Width * 0.15);
                        var r451_midx = r275_MosaicWidth / 2;
                        var r451_verticalOvershoot = 1.02;
                        var r451_topy = r1_mix(r278_bottom, r278_top, r451_verticalOvershoot);
                        var r451_boty = r1_mix(r278_top, r278_bottom, r451_verticalOvershoot);
                        var r451_midy = r1_mix(r451_boty, r451_topy, 0.5);
                        var r451_boxdraw = function (r452_unicode, r452_u, r452_d, r452_l, r452_r) {
                            var _r452_t0, _r452_t1;
                            return r270_xn$createAndSaveGlyphImpl$2Lrc3c(r278_BdGlyphName(r452_unicode), r278_MangleUnicode(r452_unicode), function () {
                                var _r455_t1;
                                var _r455_t0 = this;
                                var r455_currentGlyph = _r455_t0;
                                r455_currentGlyph.setWidth(r275_MosaicWidth);
                                r455_currentGlyph.include(r270_ForceUpright());
                                var r455_stopH = Math.max(r452_u, r452_d) / 2;
                                var r455_stopV = Math.max(r452_l, r452_r) / 2;
                                if (r452_l)
                                    r455_currentGlyph.include(r270_HBar.m(0, r451_midx + r455_stopH, r451_midy, r452_l));
                                if (r452_r)
                                    r455_currentGlyph.include(r270_HBar.m(r451_midx - r455_stopH, r275_MosaicWidth, r451_midy, r452_r));
                                if (r452_d)
                                    r455_currentGlyph.include(r270_VBar.m(r451_midx, r451_boty, r451_midy + r455_stopV, r452_d));
                                if (r452_u)
                                    r455_currentGlyph.include(r270_VBar.m(r451_midx, r451_midy - r455_stopV, r451_topy, r452_u));
                                return void 0;
                            });
                        };
                        var r451_dlboxdraw = function (r462_unicode, r462_u, r462_d, r462_l, r462_r) {
                            var _r462_t0, _r462_t1;
                            return r270_xn$createAndSaveGlyphImpl$2Lrc3c(r278_BdGlyphName(r462_unicode), r278_MangleUnicode(r462_unicode), function () {
                                var _r465_t1;
                                var _r465_t0 = this;
                                var r465_currentGlyph = _r465_t0;
                                r465_currentGlyph.setWidth(r275_MosaicWidth);
                                r465_currentGlyph.include(r270_ForceUpright());
                                var r465_stopH = Math.max(r462_u, r462_d) - r451_light * 1 - r451_light * 0.5 * r270_HVContrast;
                                var r465_stopV = Math.max(r462_l, r462_r) - r451_light * 1.5;
                                var r465_capH = Math.max(r462_u, r462_d) - r451_light * 1;
                                var r465_capV = Math.max(r462_l, r462_r) - r451_light * 1;
                                if (r462_l) {
                                    r465_currentGlyph.include(r270_HBar.m(0, r451_midx - r465_stopH, r451_midy + (r462_l - r451_light), r451_light));
                                    if (r462_l > r451_light)
                                        r465_currentGlyph.include(r270_HBar.m(0, r451_midx - r465_stopH, r451_midy - (r462_l - r451_light), r451_light));
                                }
                                if (r462_r) {
                                    r465_currentGlyph.include(r270_HBar.m(r451_midx + r465_stopH, r275_MosaicWidth, r451_midy + (r462_r - r451_light), r451_light));
                                    if (r462_r > r451_light)
                                        r465_currentGlyph.include(r270_HBar.m(r451_midx + r465_stopH, r275_MosaicWidth, r451_midy - (r462_r - r451_light), r451_light));
                                }
                                if (r462_d) {
                                    r465_currentGlyph.include(r270_VBar.m(r451_midx + (r462_d - r451_light), r451_boty, r451_midy - r465_stopV, r451_light));
                                    if (r462_d > r451_light)
                                        r465_currentGlyph.include(r270_VBar.m(r451_midx - (r462_d - r451_light), r451_boty, r451_midy - r465_stopV, r451_light));
                                }
                                if (r462_u) {
                                    r465_currentGlyph.include(r270_VBar.m(r451_midx + (r462_u - r451_light), r451_midy + r465_stopV, r451_topy, r451_light));
                                    if (r462_u > r451_light)
                                        r465_currentGlyph.include(r270_VBar.m(r451_midx - (r462_u - r451_light), r451_midy + r465_stopV, r451_topy, r451_light));
                                }
                                if (r465_stopH > 0 && !r462_u)
                                    r465_currentGlyph.include(r270_HBar.m(r451_midx - r465_stopH - r451_light * r270_HVContrast, r451_midx + r465_stopH + r451_light * r270_HVContrast, r451_midy + r465_capV, r451_light));
                                if (r465_stopH > 0 && !r462_d)
                                    r465_currentGlyph.include(r270_HBar.m(r451_midx - r465_stopH - r451_light * r270_HVContrast, r451_midx + r465_stopH + r451_light * r270_HVContrast, r451_midy - r465_capV, r451_light));
                                if (r465_stopV > 0 && !r462_l)
                                    r465_currentGlyph.include(r270_VBar.m(r451_midx - r465_capH, r451_midy - r465_stopV - r451_light, r451_midy + r465_stopV + r451_light, r451_light));
                                if (r465_stopV > 0 && !r462_r)
                                    r465_currentGlyph.include(r270_VBar.m(r451_midx + r465_capH, r451_midy - r465_stopV - r451_light, r451_midy + r465_stopV + r451_light, r451_light));
                                return void 0;
                            });
                        };
                        var r451_complexBoxDraw = function (r480_unicodeStart, r480_U, r480_D, r480_L, r480_R, r480_fn, r480_dl) {
                            var r480_u, r480_d, r480_l, r480_r, r480_newcome, r480_masked, r480_existing, _r480_t3, _r480_t4, _r480_t5, _r480_t6, _r480_t7, _r480_t8, _r480_t10;
                            var r480_order = [
                                [
                                    r451_light,
                                    r451_light,
                                    r451_light,
                                    r451_light
                                ],
                                [
                                    r451_light,
                                    r451_light,
                                    r451_heavy,
                                    r451_light
                                ],
                                [
                                    r451_light,
                                    r451_light,
                                    r451_light,
                                    r451_heavy
                                ],
                                [
                                    r451_light,
                                    r451_light,
                                    r451_heavy,
                                    r451_heavy
                                ],
                                [
                                    r451_heavy,
                                    r451_light,
                                    r451_light,
                                    r451_light
                                ],
                                [
                                    r451_light,
                                    r451_heavy,
                                    r451_light,
                                    r451_light
                                ],
                                [
                                    r451_heavy,
                                    r451_heavy,
                                    r451_light,
                                    r451_light
                                ],
                                [
                                    r451_heavy,
                                    r451_light,
                                    r451_heavy,
                                    r451_light
                                ],
                                [
                                    r451_heavy,
                                    r451_light,
                                    r451_light,
                                    r451_heavy
                                ],
                                [
                                    r451_light,
                                    r451_heavy,
                                    r451_heavy,
                                    r451_light
                                ],
                                [
                                    r451_light,
                                    r451_heavy,
                                    r451_light,
                                    r451_heavy
                                ],
                                [
                                    r451_heavy,
                                    r451_light,
                                    r451_heavy,
                                    r451_heavy
                                ],
                                [
                                    r451_light,
                                    r451_heavy,
                                    r451_heavy,
                                    r451_heavy
                                ],
                                [
                                    r451_heavy,
                                    r451_heavy,
                                    r451_heavy,
                                    r451_light
                                ],
                                [
                                    r451_heavy,
                                    r451_heavy,
                                    r451_light,
                                    r451_heavy
                                ],
                                [
                                    r451_heavy,
                                    r451_heavy,
                                    r451_heavy,
                                    r451_heavy
                                ]
                            ];
                            var r480_existings = [];
                            var r480_n = 0;
                            var _r480_t0 = r480_order;
                            var _r480_t1 = _r480_t0.length;
                            var _r480_t2 = 0;
                            var _r480_t9 = _r480_t2 < _r480_t1;
                            while (_r480_t9) {
                                _r480_t3 = _r480_t0[_r480_t2];
                                r480_u = _r480_t3[0];
                                r480_d = _r480_t3[1];
                                r480_l = _r480_t3[2];
                                r480_r = _r480_t3[3];
                                r480_newcome = true;
                                r480_masked = [
                                    r480_U * r480_u,
                                    r480_D * r480_d,
                                    r480_L * r480_l,
                                    r480_R * r480_r
                                ];
                                _r480_t4 = r480_existings;
                                _r480_t5 = _r480_t4.length;
                                _r480_t6 = 0;
                                while (_r480_t6 < _r480_t5) {
                                    r480_existing = _r480_t4[_r480_t6];
                                    if ('' + r480_existing === '' + r480_masked)
                                        r480_newcome = false;
                                    _r480_t6 = _r480_t6 + 1;
                                }
                                if (r480_newcome) {
                                    if (!r480_dl || (!r480_masked[0] || !r480_masked[1] || r480_masked[0] === r480_masked[1]) && (!r480_masked[2] || !r480_masked[3] || r480_masked[2] === r480_masked[3]) && (r480_masked[0] > r451_light || r480_masked[1] > r451_light || r480_masked[2] > r451_light || r480_masked[3] > r451_light)) {
                                        r1_fallback(r480_fn, r451_boxdraw).apply(null, [r480_unicodeStart + r480_n].concat(r480_masked));
                                        r480_n = r480_n + 1;
                                    }
                                    r480_existings.push(r480_masked);
                                }
                                _r480_t10 = _r480_t2 = _r480_t2 + 1;
                                _r480_t9 = _r480_t2 < _r480_t1;
                            }
                            return _r480_t10;
                        };
                        r451_boxdraw(9472, 0, 0, r451_light, r451_light);
                        r451_boxdraw(9473, 0, 0, r451_heavy, r451_heavy);
                        r451_boxdraw(9474, r451_light, r451_light, 0, 0);
                        r451_boxdraw(9475, r451_heavy, r451_heavy, 0, 0);
                        r451_boxdraw(9588, 0, 0, r451_light, 0);
                        r451_boxdraw(9589, r451_light, 0, 0, 0);
                        r451_boxdraw(9590, 0, 0, 0, r451_light);
                        r451_boxdraw(9591, 0, r451_light, 0, 0);
                        r451_boxdraw(9592, 0, 0, r451_heavy, 0);
                        r451_boxdraw(9593, r451_heavy, 0, 0, 0);
                        r451_boxdraw(9594, 0, 0, 0, r451_heavy);
                        r451_boxdraw(9595, 0, r451_heavy, 0, 0);
                        r451_boxdraw(9596, 0, 0, r451_light, r451_heavy);
                        r451_boxdraw(9597, r451_light, r451_heavy, 0, 0);
                        r451_boxdraw(9598, 0, 0, r451_heavy, r451_light);
                        r451_boxdraw(9599, r451_heavy, r451_light, 0, 0);
                        r451_dlboxdraw(9552, 0, 0, r451_heavy, r451_heavy);
                        r451_dlboxdraw(9553, r451_heavy, r451_heavy, 0, 0);
                        r451_complexBoxDraw(9484, 0, 1, 0, 1);
                        r451_complexBoxDraw(9488, 0, 1, 1, 0);
                        r451_complexBoxDraw(9492, 1, 0, 0, 1);
                        r451_complexBoxDraw(9496, 1, 0, 1, 0);
                        r451_complexBoxDraw(9500, 1, 1, 0, 1);
                        r451_complexBoxDraw(9508, 1, 1, 1, 0);
                        r451_complexBoxDraw(9516, 0, 1, 1, 1);
                        r451_complexBoxDraw(9524, 1, 0, 1, 1);
                        r451_complexBoxDraw(9532, 1, 1, 1, 1);
                        r451_complexBoxDraw(9554, 0, 1, 0, 1, r451_dlboxdraw, 1);
                        r451_complexBoxDraw(9557, 0, 1, 1, 0, r451_dlboxdraw, 1);
                        r451_complexBoxDraw(9560, 1, 0, 0, 1, r451_dlboxdraw, 1);
                        r451_complexBoxDraw(9563, 1, 0, 1, 0, r451_dlboxdraw, 1);
                        r451_complexBoxDraw(9566, 1, 1, 0, 1, r451_dlboxdraw, 1);
                        r451_complexBoxDraw(9569, 1, 1, 1, 0, r451_dlboxdraw, 1);
                        r451_complexBoxDraw(9572, 0, 1, 1, 1, r451_dlboxdraw, 1);
                        r451_complexBoxDraw(9575, 1, 0, 1, 1, r451_dlboxdraw, 1);
                        r451_complexBoxDraw(9578, 1, 1, 1, 1, r451_dlboxdraw, 1);
                        var r451_hDashed = function (r483_unicode, r483_segments, r483_weight) {
                            var _r483_t0, _r483_t1;
                            return r270_xn$createAndSaveGlyphImpl$2Lrc3c(r278_BdGlyphName(r483_unicode), r278_MangleUnicode(r483_unicode), function () {
                                var _r486_t3;
                                var _r486_t2 = this;
                                var r486_currentGlyph = _r486_t2;
                                r486_currentGlyph.setWidth(r275_MosaicWidth);
                                r486_currentGlyph.include(r270_ForceUpright());
                                var _r486_t0 = 0;
                                var _r486_t1 = r483_segments;
                                var r486_j = _r486_t0;
                                while (r486_j < _r486_t1) {
                                    r486_currentGlyph.include(r270_HBar.m(r1_mix(r275_MosaicWidth * r486_j / r483_segments, r275_MosaicWidth * (r486_j + 1) / r483_segments, 0.2), r1_mix(r275_MosaicWidth * r486_j / r483_segments, r275_MosaicWidth * (r486_j + 1) / r483_segments, 0.8), r451_midy, r483_weight));
                                    r486_j = r486_j + 1;
                                }
                                return void 0;
                            });
                        };
                        var r451_vDashed = function (r491_unicode, r491_segments, r491_weight) {
                            var _r491_t0, _r491_t1;
                            return r270_xn$createAndSaveGlyphImpl$2Lrc3c(r278_BdGlyphName(r491_unicode), r278_MangleUnicode(r491_unicode), function () {
                                var _r494_t3;
                                var _r494_t2 = this;
                                var r494_currentGlyph = _r494_t2;
                                r494_currentGlyph.setWidth(r275_MosaicWidth);
                                r494_currentGlyph.include(r270_ForceUpright());
                                var _r494_t0 = 0;
                                var _r494_t1 = r491_segments;
                                var r494_j = _r494_t0;
                                while (r494_j < _r494_t1) {
                                    r494_currentGlyph.include(r270_VBar.m(r451_midx, r1_mix(r1_mix(r451_boty, r451_topy, r494_j / r491_segments), r1_mix(r451_boty, r451_topy, (r494_j + 1) / r491_segments), 0.2), r1_mix(r1_mix(r451_boty, r451_topy, r494_j / r491_segments), r1_mix(r451_boty, r451_topy, (r494_j + 1) / r491_segments), 0.8), r491_weight));
                                    r494_j = r494_j + 1;
                                }
                                return void 0;
                            });
                        };
                        r451_hDashed(9476, 3, r451_light);
                        r451_hDashed(9477, 3, r451_heavy);
                        r451_hDashed(9480, 4, r451_light);
                        r451_hDashed(9481, 4, r451_heavy);
                        r451_hDashed(9548, 2, r451_light);
                        r451_hDashed(9549, 2, r451_heavy);
                        r451_vDashed(9478, 3, r451_light);
                        r451_vDashed(9479, 3, r451_heavy);
                        r451_vDashed(9482, 4, r451_light);
                        r451_vDashed(9483, 4, r451_heavy);
                        r451_vDashed(9550, 2, r451_light);
                        r451_vDashed(9551, 2, r451_heavy);
                        var r451_bdArcRadius = Math.min(r451_midx + r270_O * 2, (r451_midy - r451_boty) / 2);
                        r270_xn$createAndSaveGlyphImpl$2Lrc3c(r278_BdGlyphName(9581), r278_MangleUnicode(9581), function () {
                            var _r501_t1;
                            var _r501_t0 = this;
                            var r501_currentGlyph = _r501_t0;
                            r501_currentGlyph.setWidth(r275_MosaicWidth);
                            r501_currentGlyph.include(r270_ForceUpright());
                            r501_currentGlyph.include(r270_dispiro(r270_widths.center(r451_light), r270_flat(r451_midx, r451_boty, r270_heading(r270_Upward)), r270_curl(r451_midx, r451_midy - r451_bdArcRadius, r270_heading(r270_Upward)), r270_arcvh(), r270_flat(r451_midx + r451_bdArcRadius, r451_midy, r270_heading(r270_Rightward)), r270_curl(r275_MosaicWidth, r451_midy, r270_heading(r270_Rightward))));
                            return void 0;
                        });
                        r270_xn$createAndSaveGlyphImpl$2Lrc3c(r278_BdGlyphName(9582), r278_MangleUnicode(9582), function () {
                            var _r507_t1;
                            var _r507_t0 = this;
                            var r507_currentGlyph = _r507_t0;
                            r507_currentGlyph.setWidth(r275_MosaicWidth);
                            r507_currentGlyph.include(r270_ForceUpright());
                            r507_currentGlyph.include(r270_dispiro(r270_widths.center(r451_light), r270_flat(r451_midx, r451_boty, r270_heading(r270_Upward)), r270_curl(r451_midx, r451_midy - r451_bdArcRadius, r270_heading(r270_Upward)), r270_arcvh(), r270_flat(r451_midx - r451_bdArcRadius, r451_midy, r270_heading(r270_Leftward)), r270_curl(0, r451_midy, r270_heading(r270_Leftward))));
                            return void 0;
                        });
                        r270_xn$createAndSaveGlyphImpl$2Lrc3c(r278_BdGlyphName(9583), r278_MangleUnicode(9583), function () {
                            var _r513_t1;
                            var _r513_t0 = this;
                            var r513_currentGlyph = _r513_t0;
                            r513_currentGlyph.setWidth(r275_MosaicWidth);
                            r513_currentGlyph.include(r270_ForceUpright());
                            r513_currentGlyph.include(r270_dispiro(r270_widths.center(r451_light), r270_flat(r451_midx, r451_topy, r270_heading(r270_Downward)), r270_curl(r451_midx, r451_midy + r451_bdArcRadius, r270_heading(r270_Downward)), r270_arcvh(), r270_flat(r451_midx - r451_bdArcRadius, r451_midy, r270_heading(r270_Leftward)), r270_curl(0, r451_midy, r270_heading(r270_Leftward))));
                            return void 0;
                        });
                        r270_xn$createAndSaveGlyphImpl$2Lrc3c(r278_BdGlyphName(9584), r278_MangleUnicode(9584), function () {
                            var _r519_t1;
                            var _r519_t0 = this;
                            var r519_currentGlyph = _r519_t0;
                            r519_currentGlyph.setWidth(r275_MosaicWidth);
                            r519_currentGlyph.include(r270_ForceUpright());
                            r519_currentGlyph.include(r270_dispiro(r270_widths.center(r451_light), r270_flat(r451_midx, r451_topy, r270_heading(r270_Downward)), r270_curl(r451_midx, r451_midy + r451_bdArcRadius, r270_heading(r270_Downward)), r270_arcvh(), r270_flat(r451_midx + r451_bdArcRadius, r451_midy, r270_heading(r270_Rightward)), r270_curl(r275_MosaicWidth, r451_midy, r270_heading(r270_Rightward))));
                            return void 0;
                        });
                        r270_xn$createAndSaveGlyphImpl$2Lrc3c(r278_BdGlyphName(9585), r278_MangleUnicode(9585), function () {
                            var _r525_t1;
                            var _r525_t0 = this;
                            var r525_currentGlyph = _r525_t0;
                            r525_currentGlyph.setWidth(r275_MosaicWidth);
                            r525_currentGlyph.include(r270_ForceUpright());
                            r525_currentGlyph.include(r270_dispiro(r270_widths.center(r451_light), r270_flat(r275_MosaicWidth, r451_topy), r270_curl(0, r451_boty)));
                            return void 0;
                        });
                        r270_xn$createAndSaveGlyphImpl$2Lrc3c(r278_BdGlyphName(9586), r278_MangleUnicode(9586), function () {
                            var _r531_t1;
                            var _r531_t0 = this;
                            var r531_currentGlyph = _r531_t0;
                            r531_currentGlyph.setWidth(r275_MosaicWidth);
                            r531_currentGlyph.include(r270_ForceUpright());
                            r531_currentGlyph.include(r270_dispiro(r270_widths.center(r451_light), r270_flat(0, r451_topy), r270_curl(r275_MosaicWidth, r451_boty)));
                            return void 0;
                        });
                        r270_xn$createAndSaveGlyphImpl$2Lrc3c(r278_BdGlyphName(9587), r278_MangleUnicode(9587), function () {
                            var _r537_t1;
                            var _r537_t0 = this;
                            var r537_currentGlyph = _r537_t0;
                            r537_currentGlyph.setWidth(r275_MosaicWidth);
                            r537_currentGlyph.include(r270_ForceUpright());
                            r537_currentGlyph.include(r270_xn$referglyph$1aao(r278_BdGlyphName(9585)));
                            r537_currentGlyph.include(r270_xn$referglyph$1aao(r278_BdGlyphName(9586)));
                            return void 0;
                        });
                        var r451_DiamondBarRaw = function (r542_hStart, r542_vStart, r542_hEnd, r542_vEnd) {
                            var _r542_t0, _r542_t1;
                            var r542_zStartX = r1_mix(r278_left, r278_right, r542_hStart);
                            var r542_zStartY = r1_mix(r278_bottom, r278_top, r542_vStart);
                            var r542_zEndX = r1_mix(r278_left, r278_right, r542_hEnd);
                            var r542_zEndY = r1_mix(r278_bottom, r278_top, r542_vEnd);
                            return r270_dispiro(r270_widths.center(r451_light), r270_corner(r1_mix(r542_zStartX, r542_zEndX, -1), r1_mix(r542_zStartY, r542_zEndY, -1)), r270_corner(r1_mix(r542_zStartX, r542_zEndX, +2), r1_mix(r542_zStartY, r542_zEndY, +2)));
                        };
                        var r451_DiamondMask = function () {
                            var _r543_t0, _r543_t1;
                            return r270_xn$spirooutline$1aao(r270_corner(r1_mix(r278_left, r278_right, 0), r1_mix(r278_bottom, r278_top, 0)), r270_corner(r1_mix(r278_left, r278_right, 0), r1_mix(r278_bottom, r278_top, 1)), r270_corner(r1_mix(r278_left, r278_right, 1), r1_mix(r278_bottom, r278_top, 1)), r270_corner(r1_mix(r278_left, r278_right, 1), r1_mix(r278_bottom, r278_top, 0)));
                        };
                        var r451_DiamondBoxDrawing = function (r544_unicode, r544_a, r544_b, r544_c, r544_d) {
                            var _r544_t0, _r544_t1;
                            return r270_xn$createAndSaveGlyphImpl$2Lrc3c(r278_BdGlyphName(r544_unicode), r278_MangleUnicode(r544_unicode), function () {
                                var _r547_t1;
                                var _r547_t0 = this;
                                var r547_currentGlyph = _r547_t0;
                                var r547_candidates = [];
                                if (r544_a)
                                    r547_candidates.push(r451_DiamondBarRaw(0.5, 1, 0, 0.5));
                                if (r544_b)
                                    r547_candidates.push(r451_DiamondBarRaw(1, 0.5, 0.5, 1));
                                if (r544_c)
                                    r547_candidates.push(r451_DiamondBarRaw(0, 0.5, 0.5, 0));
                                if (r544_d)
                                    r547_candidates.push(r451_DiamondBarRaw(0.5, 0, 1, 0.5));
                                r547_currentGlyph.setWidth(r275_MosaicWidth);
                                r547_currentGlyph.include(r270_ForceUpright());
                                r547_currentGlyph.include(r270_intersection(r451_DiamondMask(), r270_union.apply(null, r547_candidates)));
                                return void 0;
                            });
                        };
                        r451_DiamondBoxDrawing(129952, 1, 0, 0, 0);
                        r451_DiamondBoxDrawing(129953, 0, 1, 0, 0);
                        r451_DiamondBoxDrawing(129954, 0, 0, 1, 0);
                        r451_DiamondBoxDrawing(129955, 0, 0, 0, 1);
                        r451_DiamondBoxDrawing(129956, 1, 0, 1, 0);
                        r451_DiamondBoxDrawing(129957, 0, 1, 0, 1);
                        r451_DiamondBoxDrawing(129958, 0, 0, 1, 1);
                        r451_DiamondBoxDrawing(129959, 1, 1, 0, 0);
                        r451_DiamondBoxDrawing(129960, 1, 0, 0, 1);
                        r451_DiamondBoxDrawing(129961, 0, 1, 1, 0);
                        r451_DiamondBoxDrawing(129962, 0, 1, 1, 1);
                        r451_DiamondBoxDrawing(129963, 1, 0, 1, 1);
                        r451_DiamondBoxDrawing(129964, 1, 1, 0, 1);
                        r451_DiamondBoxDrawing(129965, 1, 1, 1, 0);
                        r451_DiamondBoxDrawing(129966, 1, 1, 1, 1);
                        r270_xn$createAndSaveGlyphImpl$2Lrc3c(r278_BEGlyphName(129981), r278_MangleUnicode(129981), function () {
                            var _r553_t1;
                            var _r553_t0 = this;
                            var r553_currentGlyph = _r553_t0;
                            r553_currentGlyph.setWidth(r275_MosaicWidth);
                            r553_currentGlyph.include(r270_ForceUpright());
                            r553_currentGlyph.include(r270_difference(function () {
                                var _r558_t1;
                                var _r558_t0 = this;
                                var r558_currentGlyph = _r558_t0;
                                r558_currentGlyph.include(r270_xn$referglyph$1aao(r278_BEGlyphName(9608)));
                                return void 0;
                            }, function () {
                                var _r561_t1;
                                var _r561_t0 = this;
                                var r561_currentGlyph = _r561_t0;
                                r561_currentGlyph.include(r270_xn$referglyph$1aao(r278_BdGlyphName(9587)));
                                return void 0;
                            }));
                            return void 0;
                        });
                        r270_xn$createAndSaveGlyphImpl$2Lrc3c(r278_BEGlyphName(129982), r278_MangleUnicode(129982), function () {
                            var _r565_t1;
                            var _r565_t0 = this;
                            var r565_currentGlyph = _r565_t0;
                            r565_currentGlyph.setWidth(r275_MosaicWidth);
                            r565_currentGlyph.include(r270_ForceUpright());
                            r565_currentGlyph.include(r270_difference(function () {
                                var _r570_t1;
                                var _r570_t0 = this;
                                var r570_currentGlyph = _r570_t0;
                                r570_currentGlyph.include(r270_xn$referglyph$1aao(r278_BEGlyphName(9608)));
                                return void 0;
                            }, function () {
                                var _r573_t1;
                                var _r573_t0 = this;
                                var r573_currentGlyph = _r573_t0;
                                r573_currentGlyph.include(r270_xn$referglyph$1aao(r278_BdGlyphName(129955)));
                                return void 0;
                            }));
                            return void 0;
                        });
                        r270_xn$createAndSaveGlyphImpl$2Lrc3c(r278_BdGlyphName(129983), r278_MangleUnicode(129983), function () {
                            var _r577_t1;
                            var _r577_t0 = this;
                            var r577_currentGlyph = _r577_t0;
                            r577_currentGlyph.setWidth(r275_MosaicWidth);
                            r577_currentGlyph.include(r270_ForceUpright());
                            r577_currentGlyph.include(r270_difference(function () {
                                var _r582_t1;
                                var _r582_t0 = this;
                                var r582_currentGlyph = _r582_t0;
                                r582_currentGlyph.include(r270_xn$referglyph$1aao(r278_BEGlyphName(9608)));
                                return void 0;
                            }, function () {
                                var _r585_t1;
                                var _r585_t0 = this;
                                var r585_currentGlyph = _r585_t0;
                                r585_currentGlyph.include(r270_xn$referglyph$1aao(r278_BdGlyphName(129966)));
                                return void 0;
                            }));
                            return void 0;
                        });
                        return r270_xn$createAndSaveGlyphImpl$2Lrc3c(r278_BdGlyphName(129967), r278_MangleUnicode(129967), function () {
                            var _r589_t1;
                            var _r589_t0 = this;
                            var r589_currentGlyph = _r589_t0;
                            r589_currentGlyph.setWidth(r275_MosaicWidth);
                            r589_currentGlyph.include(r270_ForceUpright());
                            r589_currentGlyph.include(r270_intersection(function () {
                                var _r594_t1;
                                var _r594_t0 = this;
                                var r594_currentGlyph = _r594_t0;
                                r594_currentGlyph.include(r270_xn$referglyph$1aao(r278_BdGlyphName(9532)));
                                return void 0;
                            }, r270_Rect(r1_mix(r278_bottom, r278_top, 0.35), r1_mix(r278_bottom, r278_top, 0.65), 0, r275_MosaicWidth)));
                            return void 0;
                        });
                    }();
                }());
                _r275_t5 = _r275_t2 = _r275_t2 + 1;
                _r275_t4 = _r275_t2 < _r275_t1;
            }
            return _r275_t5;
        }();
    });
    return void 0;
});
r1_xn$GlyphBlocks$2Lrc2b.push(function (r598_xn$Capture_Ext$2Lrc2b) {
    var _r598_t0, _r598_t1;
    r598_xn$Capture_Ext$2Lrc2b['$defineGlyphBlockImpl$'](r598_xn$Capture_Ext$2Lrc2b, 'Symbol-Mosaic-Powerline', function (r599_xn$Capture$2Lrc8, r599_xn$ExportCapture$2Lrc4b) {
        var _r599_t6, _r599_t7, _r599_t8, _r599_tag9;
        var _r599_t0 = r599_xn$Capture$2Lrc8;
        var r599_xn$createAndSaveGlyphImpl$2Lrc3c = _r599_t0['$createAndSaveGlyphImpl$'];
        var r599_xn$NamedParameterPair$2Lrc9b = _r599_t0['$NamedParameterPair$'];
        var r599_xn$assignUnicodeImpl$2Lrc8b = _r599_t0['$assignUnicodeImpl$'];
        var r599_xn$execState$2Lrc0b = _r599_t0['$execState$'];
        var r599_para = _r599_t0.para;
        var r599_fontMetrics = _r599_t0.fontMetrics;
        var _r599_t1 = r599_xn$Capture$2Lrc8.Metrics;
        var r599_Downward = _r599_t1.Downward;
        var r599_Rightward = _r599_t1.Rightward;
        var r599_Leftward = _r599_t1.Leftward;
        var r599_O = _r599_t1.O;
        var r599_WideWidth4 = _r599_t1.WideWidth4;
        var r599_AdviceStroke = _r599_t1.AdviceStroke;
        var _r599_t2 = r599_xn$Capture$2Lrc8.SpiroFns;
        var r599_g4 = _r599_t2.g4;
        var r599_corner = _r599_t2.corner;
        var r599_flat = _r599_t2.flat;
        var r599_curl = _r599_t2.curl;
        var r599_widths = _r599_t2.widths;
        var r599_heading = _r599_t2.heading;
        var r599_dispiro = _r599_t2.dispiro;
        var r599_xn$spirooutline$1aao = _r599_t2['spiro-outline'];
        var _r599_t3 = r599_xn$Capture$2Lrc8.BooleFns;
        var r599_union = _r599_t3.union;
        var r599_intersection = _r599_t3.intersection;
        var _r599_t4 = r599_xn$Capture$2Lrc8.CommonShapes.resolve();
        var r599_HBar = _r599_t4.HBar;
        var r599_FlipAround = _r599_t4.FlipAround;
        var r599_ForceUpright = _r599_t4.ForceUpright;
        var _r599_t5 = r599_xn$Capture$2Lrc8['Common-Derivatives'].resolve();
        var r599_xn$referglyph$1aao = _r599_t5['refer-glyph'];
        var r599_MosaicTop = r599_fontMetrics.os2.sTypoAscender;
        var r599_MosaicBottom = r599_fontMetrics.os2.sTypoDescender;
        return function () {
            var r604_FMosaicWide, r604_MosaicNameSuffix, r604_MosaicWidth, r604_MosaicWidthScalar, _r604_t3, _r604_t5, _r604_t6, _r604_tag7;
            var r604_WidthKinds = [
                [
                    0,
                    '.NWID',
                    r599_xn$Capture$2Lrc8.Metrics.Width,
                    1
                ],
                [
                    1,
                    '.WWID',
                    r599_xn$Capture$2Lrc8.Metrics.WideWidth0,
                    2
                ]
            ];
            var _r604_t0 = r604_WidthKinds;
            var _r604_t1 = _r604_t0.length;
            var _r604_t2 = 0;
            var _r604_t4 = _r604_t2 < _r604_t1;
            while (_r604_t4) {
                _r604_t3 = _r604_t0[_r604_t2];
                r604_FMosaicWide = _r604_t3[0];
                r604_MosaicNameSuffix = _r604_t3[1];
                r604_MosaicWidth = _r604_t3[2];
                r604_MosaicWidthScalar = _r604_t3[3];
                (function () {
                    var r607_MosaicDesiredWidth = r599_WideWidth4;
                    var r607_MosaicMiddle = r604_MosaicWidth / 2;
                    var r607_MosaicUnitWidth = r604_MosaicWidth / r604_MosaicWidthScalar;
                    var r607_MangleUnicode = function (r608_unicode, r608__desiredOverride) {
                        var _r608_t0, _r608_t1;
                        return r604_MosaicWidth === (r608__desiredOverride || r607_MosaicDesiredWidth) ? r608_unicode : void 0;
                    };
                    var r607_MangleName = function (r609_name) {
                        var _r609_t0, _r609_t1;
                        return r609_name + r604_MosaicNameSuffix;
                    };
                    var r607_pwlMidOrig = (r599_MosaicTop + r599_MosaicBottom) / 2;
                    var r607_pwlTop = (r599_MosaicTop - r607_pwlMidOrig) * r599_para.powerlineScaleY + r599_para.powerlineShiftY + r607_pwlMidOrig;
                    var r607_pwlBot = (r599_MosaicBottom - r607_pwlMidOrig) * r599_para.powerlineScaleY + r599_para.powerlineShiftY + r607_pwlMidOrig;
                    var r607_pwlMid = r1_mix(r607_pwlBot, r607_pwlTop, 1 / 2);
                    var r607_pwlNear = 0 * r599_para.powerlineScaleX + r599_para.powerlineShiftX;
                    var r607_pwlFar = r604_MosaicWidth * r599_para.powerlineScaleX + r599_para.powerlineShiftX;
                    var r607_RotatedPowerline = function (r610_gidNew, r610_unicodeNew, r610_gidSource) {
                        var _r610_t0, _r610_t1;
                        return r599_xn$createAndSaveGlyphImpl$2Lrc3c(r607_MangleName(r610_gidNew), r607_MangleUnicode(r610_unicodeNew), function () {
                            var _r613_t1;
                            var _r613_t0 = this;
                            var r613_currentGlyph = _r613_t0;
                            r613_currentGlyph.setWidth(r604_MosaicWidth);
                            r613_currentGlyph.include(r599_ForceUpright());
                            r613_currentGlyph.include(r599_xn$referglyph$1aao(r607_MangleName(r610_gidSource)));
                            r613_currentGlyph.include(r599_FlipAround(r604_MosaicWidth / 2, r607_pwlMid));
                            return void 0;
                        });
                    };
                    r599_xn$createAndSaveGlyphImpl$2Lrc3c(r607_MangleName('powerline/triangleRight'), r607_MangleUnicode(57520), function () {
                        var _r620_t1;
                        var _r620_t0 = this;
                        var r620_currentGlyph = _r620_t0;
                        r620_currentGlyph.setWidth(r604_MosaicWidth);
                        r620_currentGlyph.include(r599_ForceUpright());
                        r620_currentGlyph.include(r599_xn$spirooutline$1aao(r599_corner(r607_pwlNear + r599_O, r607_pwlTop), r599_corner(r607_pwlNear, r607_pwlTop), r599_corner(r607_pwlFar, r607_pwlMid), r599_corner(r607_pwlNear, r607_pwlBot), r599_corner(r607_pwlNear + r599_O, r607_pwlBot)));
                        return void 0;
                    });
                    r599_xn$createAndSaveGlyphImpl$2Lrc3c(r607_MangleName('powerline/angleRight'), r607_MangleUnicode(57521), function () {
                        var _r626_t1;
                        var _r626_t0 = this;
                        var r626_currentGlyph = _r626_t0;
                        r626_currentGlyph.setWidth(r604_MosaicWidth);
                        r626_currentGlyph.include(r599_ForceUpright());
                        var r626_fine = r599_AdviceStroke(4);
                        r626_currentGlyph.include(r599_intersection(r599_xn$spirooutline$1aao(r599_corner(r607_pwlNear - r604_MosaicWidth, r607_pwlTop), r599_corner(r607_pwlNear, r607_pwlTop), r599_corner(r607_pwlFar, r607_pwlMid), r599_corner(r607_pwlNear, r607_pwlBot), r599_corner(r607_pwlNear - r604_MosaicWidth, r607_pwlBot)), r599_union(r599_dispiro(r599_widths.rhs(r626_fine), r599_flat(r607_pwlNear, r607_pwlTop), r599_curl(r607_pwlFar, r607_pwlMid)), r599_dispiro(r599_widths.rhs(r626_fine), r599_flat(r607_pwlFar, r607_pwlMid), r599_curl(r607_pwlNear, r607_pwlBot)))));
                        return void 0;
                    });
                    r607_RotatedPowerline('powerline/triangleLeft', 57522, 'powerline/triangleRight');
                    r607_RotatedPowerline('powerline/angleLeft', 57523, 'powerline/angleRight');
                    r599_xn$createAndSaveGlyphImpl$2Lrc3c(r607_MangleName('powerline/hemiCircleRight'), r607_MangleUnicode(57524), function () {
                        var _r632_t1;
                        var _r632_t0 = this;
                        var r632_currentGlyph = _r632_t0;
                        r632_currentGlyph.setWidth(r604_MosaicWidth);
                        r632_currentGlyph.include(r599_ForceUpright());
                        r632_currentGlyph.include(r599_xn$spirooutline$1aao(r599_corner(r607_pwlNear + r599_O, r607_pwlTop), r599_g4(r607_pwlNear, r607_pwlTop), r599_g4.down.mid(r607_pwlFar, r607_pwlMid), r599_g4(r607_pwlNear, r607_pwlBot), r599_corner(r607_pwlNear + r599_O, r607_pwlBot)));
                        return void 0;
                    });
                    r599_xn$createAndSaveGlyphImpl$2Lrc3c(r607_MangleName('powerline/arcRight'), r607_MangleUnicode(57525), function () {
                        var _r638_t1;
                        var _r638_t0 = this;
                        var r638_currentGlyph = _r638_t0;
                        r638_currentGlyph.setWidth(r604_MosaicWidth);
                        r638_currentGlyph.include(r599_ForceUpright());
                        var r638_fine = r599_AdviceStroke(4);
                        r638_currentGlyph.include(r599_dispiro(r599_widths.rhs(r638_fine), r599_corner(r607_pwlNear + r599_O, r607_pwlTop, r599_heading(r599_Rightward)), r599_g4(r607_pwlNear, r607_pwlTop, r599_heading(r599_Rightward)), r599_g4.down.mid(r607_pwlFar, r607_pwlMid, r599_heading(r599_Downward)), r599_g4(r607_pwlNear, r607_pwlBot, r599_heading(r599_Leftward)), r599_corner(r607_pwlNear + r599_O, r607_pwlBot, r599_heading(r599_Leftward))));
                        return void 0;
                    });
                    r607_RotatedPowerline('powerline/hemiCircleLeft', 57526, 'powerline/hemiCircleRight');
                    r607_RotatedPowerline('powerline/arcLeft', 57527, 'powerline/arcRight');
                    r599_xn$createAndSaveGlyphImpl$2Lrc3c(r607_MangleName('powerline/underline'), r607_MangleUnicode(57518), function () {
                        var _r644_t1;
                        var _r644_t0 = this;
                        var r644_currentGlyph = _r644_t0;
                        r644_currentGlyph.setWidth(r604_MosaicWidth);
                        r644_currentGlyph.include(r599_ForceUpright());
                        var r644_fine = r599_AdviceStroke(4);
                        r644_currentGlyph.include(r599_HBar.b(0, r604_MosaicWidth, r607_pwlBot));
                        return void 0;
                    });
                    r599_xn$createAndSaveGlyphImpl$2Lrc3c(r607_MangleName('powerline/overline'), r607_MangleUnicode(57519), function () {
                        var _r650_t1;
                        var _r650_t0 = this;
                        var r650_currentGlyph = _r650_t0;
                        r650_currentGlyph.setWidth(r604_MosaicWidth);
                        r650_currentGlyph.include(r599_ForceUpright());
                        var r650_fine = r599_AdviceStroke(4);
                        r650_currentGlyph.include(r599_HBar.t(0, r604_MosaicWidth, r607_pwlTop));
                        return void 0;
                    });
                    r599_xn$createAndSaveGlyphImpl$2Lrc3c(r607_MangleName('powerline/cornerBottomLeft'), r607_MangleUnicode(57528), function () {
                        var _r656_t1;
                        var _r656_t0 = this;
                        var r656_currentGlyph = _r656_t0;
                        r656_currentGlyph.setWidth(r604_MosaicWidth);
                        r656_currentGlyph.include(r599_ForceUpright());
                        r656_currentGlyph.include(r599_xn$spirooutline$1aao(r599_corner(r607_pwlNear + r599_O, r607_pwlTop), r599_corner(r607_pwlNear, r607_pwlTop), r599_corner(r607_pwlFar, r607_pwlBot), r599_corner(r607_pwlNear + r599_O, r607_pwlBot)));
                        return void 0;
                    });
                    r599_xn$createAndSaveGlyphImpl$2Lrc3c(r607_MangleName('powerline/slashBottomLeft'), r607_MangleUnicode(57529), function () {
                        var _r662_t1;
                        var _r662_t0 = this;
                        var r662_currentGlyph = _r662_t0;
                        r662_currentGlyph.setWidth(r604_MosaicWidth);
                        r662_currentGlyph.include(r599_ForceUpright());
                        var r662_fine = r599_AdviceStroke(4);
                        r662_currentGlyph.include(r599_dispiro(r599_widths.rhs(r662_fine), r599_flat(r607_pwlNear, r607_pwlTop), r599_curl(r607_pwlFar, r607_pwlBot)));
                        return void 0;
                    });
                    r599_xn$createAndSaveGlyphImpl$2Lrc3c(r607_MangleName('powerline/cornerTopLeft'), r607_MangleUnicode(57532), function () {
                        var _r668_t1;
                        var _r668_t0 = this;
                        var r668_currentGlyph = _r668_t0;
                        r668_currentGlyph.setWidth(r604_MosaicWidth);
                        r668_currentGlyph.include(r599_ForceUpright());
                        r668_currentGlyph.include(r599_xn$spirooutline$1aao(r599_corner(r607_pwlNear + r599_O, r607_pwlTop), r599_corner(r607_pwlNear, r607_pwlTop), r599_corner(r607_pwlFar, r607_pwlTop), r599_corner(r607_pwlNear + r599_O, r607_pwlBot)));
                        return void 0;
                    });
                    r599_xn$createAndSaveGlyphImpl$2Lrc3c(r607_MangleName('powerline/slashTopLeft'), r607_MangleUnicode(57533), function () {
                        var _r674_t1;
                        var _r674_t0 = this;
                        var r674_currentGlyph = _r674_t0;
                        r674_currentGlyph.setWidth(r604_MosaicWidth);
                        r674_currentGlyph.include(r599_ForceUpright());
                        var r674_fine = r599_AdviceStroke(4);
                        r674_currentGlyph.include(r599_dispiro(r599_widths.rhs(r674_fine), r599_flat(r607_pwlNear, r607_pwlBot), r599_curl(r607_pwlFar, r607_pwlTop)));
                        return void 0;
                    });
                    r607_RotatedPowerline('powerline/cornerBottomRight', 57530, 'powerline/cornerTopLeft');
                    r607_RotatedPowerline('powerline/slashBottomRight', 57531, 'powerline/slashTopLeft');
                    r607_RotatedPowerline('powerline/cornerTopRight', 57534, 'powerline/cornerBottomLeft');
                    return r607_RotatedPowerline('powerline/slashTopRight', 57535, 'powerline/slashBottomLeft');
                }());
                _r604_t5 = _r604_t2 = _r604_t2 + 1;
                _r604_t4 = _r604_t2 < _r604_t1;
            }
            return _r604_t5;
        }();
    });
    return void 0;
});
r1_xn$GlyphBlocks$2Lrc2b.push(function (r680_xn$Capture_Ext$2Lrc2b) {
    var _r680_t0, _r680_t1;
    r680_xn$Capture_Ext$2Lrc2b['$defineGlyphBlockImpl$'](r680_xn$Capture_Ext$2Lrc2b, 'Symbol-Mosaic-NotDef', function (r681_xn$Capture$2Lrc8, r681_xn$ExportCapture$2Lrc4b) {
        var _r681_t6, _r681_t7;
        var _r681_t0 = r681_xn$Capture$2Lrc8;
        var r681_xn$createAndSaveGlyphImpl$2Lrc3c = _r681_t0['$createAndSaveGlyphImpl$'];
        var r681_xn$NamedParameterPair$2Lrc9b = _r681_t0['$NamedParameterPair$'];
        var r681_xn$assignUnicodeImpl$2Lrc8b = _r681_t0['$assignUnicodeImpl$'];
        var r681_xn$execState$2Lrc0b = _r681_t0['$execState$'];
        var _r681_t1 = r681_xn$Capture$2Lrc8.Metrics;
        var r681_SB = _r681_t1.SB;
        var r681_CAP = _r681_t1.CAP;
        var r681_RightSB = _r681_t1.RightSB;
        var r681_AdviceStroke = _r681_t1.AdviceStroke;
        var _r681_t2 = r681_xn$Capture$2Lrc8.SpiroFns;
        var _r681_t3 = r681_xn$Capture$2Lrc8.BooleFns;
        var r681_union = _r681_t3.union;
        var r681_intersection = _r681_t3.intersection;
        var r681_difference = _r681_t3.difference;
        var _r681_t4 = r681_xn$Capture$2Lrc8.CommonShapes.resolve();
        var r681_Rect = _r681_t4.Rect;
        var _r681_t5 = r681_xn$Capture$2Lrc8['Common-Derivatives'].resolve();
        var r681_xn$referglyph$1aao = _r681_t5['refer-glyph'];
        return r681_xn$createAndSaveGlyphImpl$2Lrc3c('.notdef', null, function () {
            var _r686_t1;
            var _r686_t0 = this;
            var r686_currentGlyph = _r686_t0;
            var r686_sw = r681_AdviceStroke(8);
            r686_currentGlyph.include(r681_union(r681_intersection(function () {
                var _r689_t1;
                var _r689_t0 = this;
                var r689_currentGlyph = _r689_t0;
                r689_currentGlyph.include(r681_xn$referglyph$1aao('be2592.NWID'));
                return void 0;
            }, r681_Rect(r681_CAP, 0, r681_SB, r681_RightSB)), r681_difference(r681_Rect(r681_CAP, 0, r681_SB, r681_RightSB), r681_Rect(r681_CAP - r686_sw, 0 + r686_sw, r681_SB + r686_sw, r681_RightSB - r686_sw))));
            r686_currentGlyph.glyphRank = 9999;
            return void 0;
        });
    });
    return void 0;
});
r1_xn$GlyphBlocks$2Lrc2b.push(function (r693_xn$Capture_Ext$2Lrc2b) {
    var _r693_t0, _r693_t1;
    r693_xn$Capture_Ext$2Lrc2b['$defineGlyphBlockImpl$'](r693_xn$Capture_Ext$2Lrc2b, 'Symbol-Geometric-Mosaic-Inverted', function (r694_xn$Capture$2Lrc8, r694_xn$ExportCapture$2Lrc4b) {
        var _r694_t4, _r694_t5, _r694_t6, _r694_tag7;
        var _r694_t0 = r694_xn$Capture$2Lrc8;
        var r694_xn$createAndSaveGlyphImpl$2Lrc3c = _r694_t0['$createAndSaveGlyphImpl$'];
        var r694_xn$NamedParameterPair$2Lrc9b = _r694_t0['$NamedParameterPair$'];
        var r694_xn$assignUnicodeImpl$2Lrc8b = _r694_t0['$assignUnicodeImpl$'];
        var r694_xn$execState$2Lrc0b = _r694_t0['$execState$'];
        var r694_fontMetrics = _r694_t0.fontMetrics;
        var _r694_t1 = r694_xn$Capture$2Lrc8.Metrics;
        var r694_WideWidth1 = _r694_t1.WideWidth1;
        var _r694_t2 = r694_xn$Capture$2Lrc8.SpiroFns;
        var _r694_t3 = r694_xn$Capture$2Lrc8.BooleFns;
        var r694_difference = _r694_t3.difference;
        return function () {
            var r697_FMosaicWide, r697_MosaicNameSuffix, r697_MosaicWidth, r697_MosaicWidthScalar, _r697_t3, _r697_t5, _r697_t6, _r697_tag7;
            var r697_WidthKinds = [
                [
                    0,
                    '.NWID',
                    r694_xn$Capture$2Lrc8.Metrics.Width,
                    1
                ],
                [
                    1,
                    '.WWID',
                    r694_xn$Capture$2Lrc8.Metrics.WideWidth0,
                    2
                ]
            ];
            var _r697_t0 = r697_WidthKinds;
            var _r697_t1 = _r697_t0.length;
            var _r697_t2 = 0;
            var _r697_t4 = _r697_t2 < _r697_t1;
            while (_r697_t4) {
                _r697_t3 = _r697_t0[_r697_t2];
                r697_FMosaicWide = _r697_t3[0];
                r697_MosaicNameSuffix = _r697_t3[1];
                r697_MosaicWidth = _r697_t3[2];
                r697_MosaicWidthScalar = _r697_t3[3];
                (function () {
                    var r700_MosaicDesiredWidth = r694_WideWidth1;
                    var r700_MosaicMiddle = r697_MosaicWidth / 2;
                    var r700_MosaicUnitWidth = r697_MosaicWidth / r697_MosaicWidthScalar;
                    var r700_MangleUnicode = function (r701_unicode, r701__desiredOverride) {
                        var _r701_t0, _r701_t1;
                        return r697_MosaicWidth === (r701__desiredOverride || r700_MosaicDesiredWidth) ? r701_unicode : void 0;
                    };
                    var r700_MangleName = function (r702_name) {
                        var _r702_t0, _r702_t1;
                        return r702_name + r697_MosaicNameSuffix;
                    };
                    var _r700_t0 = r694_xn$Capture$2Lrc8.CommonShapes.resolve();
                    var _r700_t1 = r694_xn$Capture$2Lrc8['Common-Derivatives'].resolve();
                    var r700_xn$referglyph$1aao = _r700_t1['refer-glyph'];
                    var _r700_t2 = r694_xn$Capture$2Lrc8['Symbol-Geometric-Shared'].resolve();
                    var r700_GeometricDim = _r700_t2.GeometricDim;
                    var r700_UnicodeWeightGrade = _r700_t2.UnicodeWeightGrade;
                    var r700_GeometricSizes = _r700_t2.GeometricSizes;
                    var r700_MosaicTop = r694_fontMetrics.os2.sTypoAscender;
                    var r700_MosaicBottom = r694_fontMetrics.os2.sTypoDescender;
                    r694_xn$createAndSaveGlyphImpl$2Lrc3c(r700_MangleName('uni25D8'), r700_MangleUnicode(9688), function () {
                        var _r708_t1;
                        var _r708_t0 = this;
                        var r708_currentGlyph = _r708_t0;
                        r708_currentGlyph.setWidth(r697_MosaicWidth);
                        r708_currentGlyph.include(r694_difference(r700_xn$referglyph$1aao(r700_MangleName('be2588')), r700_xn$referglyph$1aao(r700_MangleName('blackCircle'))));
                        r708_currentGlyph.include(r694_difference(r700_xn$referglyph$1aao(r700_MangleName('be2588')), r700_xn$referglyph$1aao(r700_MangleName('blackCircle'))));
                        return void 0;
                    });
                    r694_xn$createAndSaveGlyphImpl$2Lrc3c(r700_MangleName('uni25DA'), r700_MangleUnicode(9690), function () {
                        var _r714_t1;
                        var _r714_t0 = this;
                        var r714_currentGlyph = _r714_t0;
                        r714_currentGlyph.setWidth(r697_MosaicWidth);
                        r714_currentGlyph.include(r694_difference(r700_xn$referglyph$1aao(r700_MangleName('be2580')), r700_xn$referglyph$1aao(r700_MangleName('whiteCircle'))));
                        return void 0;
                    });
                    r694_xn$createAndSaveGlyphImpl$2Lrc3c(r700_MangleName('uni25DB'), r700_MangleUnicode(9691), function () {
                        var _r719_t1;
                        var _r719_t0 = this;
                        var r719_currentGlyph = _r719_t0;
                        r719_currentGlyph.setWidth(r697_MosaicWidth);
                        r719_currentGlyph.include(r694_difference(r700_xn$referglyph$1aao(r700_MangleName('be2584')), r700_xn$referglyph$1aao(r700_MangleName('whiteCircle'))));
                        return void 0;
                    });
                    return r694_xn$createAndSaveGlyphImpl$2Lrc3c(r700_MangleName('uni25D9'), r700_MangleUnicode(9689), function () {
                        var _r724_t1;
                        var _r724_t0 = this;
                        var r724_currentGlyph = _r724_t0;
                        r724_currentGlyph.setWidth(r697_MosaicWidth);
                        r724_currentGlyph.include(r700_xn$referglyph$1aao(r700_MangleName('uni25DA')));
                        r724_currentGlyph.include(r700_xn$referglyph$1aao(r700_MangleName('uni25DB')));
                        return void 0;
                    });
                }());
                _r697_t5 = _r697_t2 = _r697_t2 + 1;
                _r697_t4 = _r697_t2 < _r697_t1;
            }
            return _r697_t5;
        }();
    });
    return void 0;
});
