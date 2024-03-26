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
    r269_xn$Capture_Ext$2Lrc2b['$defineGlyphBlockImpl$'](r269_xn$Capture_Ext$2Lrc2b, 'Symbol-Math-Circled', function (r270_xn$Capture$2Lrc8, r270_xn$ExportCapture$2Lrc4b) {
        var _r270_t6, _r270_t7, _r270_t8, _r270_tag9;
        var _r270_t0 = r270_xn$Capture$2Lrc8;
        var r270_xn$createAndSaveGlyphImpl$2Lrc3c = _r270_t0['$createAndSaveGlyphImpl$'];
        var r270_xn$NamedParameterPair$2Lrc9b = _r270_t0['$NamedParameterPair$'];
        var r270_xn$assignUnicodeImpl$2Lrc8b = _r270_t0['$assignUnicodeImpl$'];
        var r270_xn$execState$2Lrc0b = _r270_t0['$execState$'];
        var r270_MarkSet = _r270_t0.MarkSet;
        var _r270_t1 = r270_xn$Capture$2Lrc8.Metrics;
        var r270_SB = _r270_t1.SB;
        var r270_SymbolMid = _r270_t1.SymbolMid;
        var r270_PlusTop = _r270_t1.PlusTop;
        var r270_PlusBot = _r270_t1.PlusBot;
        var r270_WideWidth1 = _r270_t1.WideWidth1;
        var r270_RightSB = _r270_t1.RightSB;
        var r270_Middle = _r270_t1.Middle;
        var r270_GeometryStroke = _r270_t1.GeometryStroke;
        var _r270_t2 = r270_xn$Capture$2Lrc8.SpiroFns;
        var _r270_t3 = r270_xn$Capture$2Lrc8.BooleFns;
        var r270_union = _r270_t3.union;
        var r270_intersection = _r270_t3.intersection;
        var _r270_t4 = r270_xn$Capture$2Lrc8.CommonShapes.resolve();
        var r270_HBar = _r270_t4.HBar;
        var r270_VBar = _r270_t4.VBar;
        var r270_xn$clearanchors$1aao = _r270_t4['clear-anchors'];
        var _r270_t5 = r270_xn$Capture$2Lrc8['Common-Derivatives'].resolve();
        var r270_xn$referglyph$1aao = _r270_t5['refer-glyph'];
        var r270_xn$deriveglyphs$7Hrq = _r270_t5['derive-glyphs'];
        var r270_MakeMathCircled = function (r273_u, r273_inner) {
            var _r273_t0, _r273_t1;
            return r270_xn$deriveglyphs$7Hrq('mathCircled{' + r273_inner + '}', r273_u, r273_inner, function (r274_src, r274_gr) {
                var _r274_t0, _r274_t1;
                return function () {
                    var _r276_t1;
                    var _r276_t0 = this;
                    var r276_currentGlyph = _r276_t0;
                    r276_currentGlyph.include(r270_xn$referglyph$1aao('mathO'), true, true);
                    r276_currentGlyph.include(r270_intersection(r270_xn$referglyph$1aao('mathOOutline'), r270_xn$referglyph$1aao(r274_src)));
                    return void 0;
                };
            });
        };
        r270_MakeMathCircled(8853, 'innerPlus');
        r270_MakeMathCircled(8854, 'innerMinus');
        r270_MakeMathCircled(8855, 'innerMultiply');
        r270_MakeMathCircled(8856, 'innerMultiplyStroke1');
        r270_MakeMathCircled(8857, 'mathCDotInner');
        r270_MakeMathCircled(8858, 'whiteSmallCircle.NWID');
        r270_MakeMathCircled(8859, 'mathAsterisk');
        r270_MakeMathCircled(10678, 'innerVerticalBar');
        r270_MakeMathCircled(10680, 'innerMultiplyStroke2');
        r270_MakeMathCircled(10682, 'innerIsraeliPlus');
        r270_MakeMathCircled(10684, 'rotatedInnerDivide');
        r270_MakeMathCircled(10686, 'whiteVerySmallCircle.NWID');
        r270_MakeMathCircled(10687, 'blackVerySmallCircle.NWID');
        r270_MakeMathCircled(10808, 'innerDivide');
        var r270_MakeMathLeftHalfCircled = function (r279_u, r279_inner) {
            var _r279_t0, _r279_t1;
            return r270_xn$deriveglyphs$7Hrq('mathLeftHalfCircled{' + r279_inner + '}', r279_u, r279_inner, function (r280_src, r280_gr) {
                var _r280_t0, _r280_t1;
                return function () {
                    var _r282_t1;
                    var _r282_t0 = this;
                    var r282_currentGlyph = _r282_t0;
                    r282_currentGlyph.include(r270_xn$referglyph$1aao('mathOlefthalf'), true, true);
                    r282_currentGlyph.include(r270_intersection(r270_xn$referglyph$1aao('mathOOutline'), r270_xn$referglyph$1aao(r280_src)));
                    return void 0;
                };
            });
        };
        var r270_MakeMathRightHalfCircled = function (r285_u, r285_inner) {
            var _r285_t0, _r285_t1;
            return r270_xn$deriveglyphs$7Hrq('mathRightHalfCircled{' + r285_inner + '}', r285_u, r285_inner, function (r286_src, r286_gr) {
                var _r286_t0, _r286_t1;
                return function () {
                    var _r288_t1;
                    var _r288_t0 = this;
                    var r288_currentGlyph = _r288_t0;
                    r288_currentGlyph.include(r270_xn$referglyph$1aao('mathOrighthalf'), true, true);
                    r288_currentGlyph.include(r270_intersection(r270_xn$referglyph$1aao('mathOOutline'), r270_xn$referglyph$1aao(r286_src)));
                    return void 0;
                };
            });
        };
        r270_MakeMathLeftHalfCircled(10797, 'innerPlus');
        r270_MakeMathRightHalfCircled(10798, 'innerPlus');
        r270_MakeMathLeftHalfCircled(10804, 'innerMultiply');
        r270_MakeMathRightHalfCircled(10805, 'innerMultiply');
        r270_xn$createAndSaveGlyphImpl$2Lrc3c(10806, null, function () {
            var _r293_t1;
            var _r293_t0 = this;
            var r293_currentGlyph = _r293_t0;
            r293_currentGlyph.include(r270_xn$referglyph$1aao('mathCircled{innerMultiply}'), true, true);
            r293_currentGlyph.include(r270_MarkSet.plus());
            r293_currentGlyph.include(r270_xn$referglyph$1aao('circumflexAbove'));
            r293_currentGlyph.include(r270_xn$clearanchors$1aao());
            return void 0;
        });
        (function () {
            var r300_FMosaicWide, r300_MosaicNameSuffix, r300_MosaicWidth, r300_MosaicWidthScalar, _r300_t3, _r300_t5, _r300_t6, _r300_tag7;
            var r300_WidthKinds = [
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
            var _r300_t0 = r300_WidthKinds;
            var _r300_t1 = _r300_t0.length;
            var _r300_t2 = 0;
            var _r300_t4 = _r300_t2 < _r300_t1;
            while (_r300_t4) {
                _r300_t3 = _r300_t0[_r300_t2];
                r300_FMosaicWide = _r300_t3[0];
                r300_MosaicNameSuffix = _r300_t3[1];
                r300_MosaicWidth = _r300_t3[2];
                r300_MosaicWidthScalar = _r300_t3[3];
                (function () {
                    var r303_MosaicDesiredWidth = r270_WideWidth1;
                    var r303_MosaicMiddle = r300_MosaicWidth / 2;
                    var r303_MosaicUnitWidth = r300_MosaicWidth / r300_MosaicWidthScalar;
                    var r303_MangleUnicode = function (r304_unicode, r304__desiredOverride) {
                        var _r304_t0, _r304_t1;
                        return r300_MosaicWidth === (r304__desiredOverride || r303_MosaicDesiredWidth) ? r304_unicode : void 0;
                    };
                    var r303_MangleName = function (r305_name) {
                        var _r305_t0, _r305_t1;
                        return r305_name + r300_MosaicNameSuffix;
                    };
                    var r303_MakeMathBigCircled = function (r306_u, r306_inner) {
                        var _r306_t0, _r306_t1;
                        return r270_xn$deriveglyphs$7Hrq(r303_MangleName('mathBigCircled{' + r306_inner + '}'), r303_MangleUnicode(r306_u), r303_MangleName(r306_inner), function (r307_src, r307_gr) {
                            var _r307_t0, _r307_t1;
                            return function () {
                                var _r309_t1;
                                var _r309_t0 = this;
                                var r309_currentGlyph = _r309_t0;
                                r309_currentGlyph.include(r270_xn$referglyph$1aao(r303_MangleName('mathOBig')), true, true);
                                r309_currentGlyph.include(r270_intersection(r270_xn$referglyph$1aao(r303_MangleName('mathOOutlineBig')), r270_xn$referglyph$1aao(r307_src)));
                                return void 0;
                            };
                        });
                    };
                    r303_MakeMathBigCircled(10752, 'mathCDotBig');
                    r303_MakeMathBigCircled(10753, 'innerPlusBig');
                    return r303_MakeMathBigCircled(10754, 'innerMultiplyBig');
                }());
                _r300_t5 = _r300_t2 = _r300_t2 + 1;
                _r300_t4 = _r300_t2 < _r300_t1;
            }
            return _r300_t5;
        }());
        r270_xn$createAndSaveGlyphImpl$2Lrc3c(8861, null, function () {
            var _r314_t1;
            var _r314_t0 = this;
            var r314_currentGlyph = _r314_t0;
            r314_currentGlyph.include(r270_xn$referglyph$1aao('mathO'), true, true);
            r314_currentGlyph.include(r270_intersection(r270_xn$referglyph$1aao('mathOOutline'), r270_HBar.m(r270_SB + r270_GeometryStroke, r270_RightSB - r270_GeometryStroke, r270_SymbolMid, r270_GeometryStroke)));
            return void 0;
        });
        var r270_eqS = Math.min(r270_GeometryStroke, (r270_RightSB - r270_SB) / 8);
        var r270_eqD = Math.max(r270_eqS, (r270_RightSB - r270_SB) / 6);
        r270_xn$createAndSaveGlyphImpl$2Lrc3c(8860, null, function () {
            var _r319_t1;
            var _r319_t0 = this;
            var r319_currentGlyph = _r319_t0;
            r319_currentGlyph.include(r270_xn$referglyph$1aao('mathO'), true, true);
            r319_currentGlyph.include(r270_intersection(r270_xn$referglyph$1aao('mathOOutline'), r270_union(r270_HBar.m(r270_SB + r270_eqS, r270_RightSB - r270_eqS, r270_SymbolMid + r270_eqD, r270_eqS), r270_HBar.m(r270_SB + r270_eqS, r270_RightSB - r270_eqS, r270_SymbolMid - r270_eqD, r270_eqS))));
            return void 0;
        });
        r270_xn$createAndSaveGlyphImpl$2Lrc3c(10679, null, function () {
            var _r324_t1;
            var _r324_t0 = this;
            var r324_currentGlyph = _r324_t0;
            r324_currentGlyph.include(r270_xn$referglyph$1aao('mathO'), true, true);
            r324_currentGlyph.include(r270_intersection(r270_xn$referglyph$1aao('mathOOutline'), r270_union(r270_VBar.m(r270_Middle + r270_eqD, r270_PlusBot + r270_eqS, r270_PlusTop - r270_eqS, r270_eqS), r270_VBar.m(r270_Middle - r270_eqD, r270_PlusBot + r270_eqS, r270_PlusTop - r270_eqS, r270_eqS))));
            return void 0;
        });
        return r270_xn$createAndSaveGlyphImpl$2Lrc3c(10681, null, function () {
            var _r329_t1;
            var _r329_t0 = this;
            var r329_currentGlyph = _r329_t0;
            r329_currentGlyph.include(r270_xn$referglyph$1aao('mathO'), true, true);
            r329_currentGlyph.include(r270_intersection(r270_xn$referglyph$1aao('mathOOutline'), r270_union(r270_VBar.m(r270_Middle, r270_PlusTop, r270_SymbolMid - r270_eqD, r270_eqS), r270_HBar.m(r270_SB + r270_eqS, r270_RightSB - r270_eqS, r270_SymbolMid - r270_eqD, r270_eqS))));
            return void 0;
        });
    });
    return void 0;
});
