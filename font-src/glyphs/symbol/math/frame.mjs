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
    r269_xn$Capture_Ext$2Lrc2b['$defineGlyphBlockImpl$'](r269_xn$Capture_Ext$2Lrc2b, 'Symbol-Math-Frame', function (r270_xn$Capture$2Lrc8, r270_xn$ExportCapture$2Lrc4b) {
        var _r270_t6, _r270_t7, _r270_t8, _r270_tag9;
        var _r270_t0 = r270_xn$Capture$2Lrc8;
        var r270_xn$createAndSaveGlyphImpl$2Lrc3c = _r270_t0['$createAndSaveGlyphImpl$'];
        var r270_xn$NamedParameterPair$2Lrc9b = _r270_t0['$NamedParameterPair$'];
        var r270_xn$assignUnicodeImpl$2Lrc8b = _r270_t0['$assignUnicodeImpl$'];
        var r270_xn$execState$2Lrc0b = _r270_t0['$execState$'];
        var _r270_t1 = r270_xn$Capture$2Lrc8.Metrics;
        var r270_Width = _r270_t1.Width;
        var r270_SB = _r270_t1.SB;
        var r270_SymbolMid = _r270_t1.SymbolMid;
        var r270_TackTop = _r270_t1.TackTop;
        var r270_TackBot = _r270_t1.TackBot;
        var r270_Downward = _r270_t1.Downward;
        var r270_Rightward = _r270_t1.Rightward;
        var r270_Leftward = _r270_t1.Leftward;
        var r270_O = _r270_t1.O;
        var r270_WideWidth1 = _r270_t1.WideWidth1;
        var r270_Middle = _r270_t1.Middle;
        var r270_AdviceStroke = _r270_t1.AdviceStroke;
        var r270_GeometryStroke = _r270_t1.GeometryStroke;
        var _r270_t2 = r270_xn$Capture$2Lrc8.SpiroFns;
        var r270_g4 = _r270_t2.g4;
        var r270_corner = _r270_t2.corner;
        var r270_flat = _r270_t2.flat;
        var r270_curl = _r270_t2.curl;
        var r270_close = _r270_t2.close;
        var r270_end = _r270_t2.end;
        var r270_widths = _r270_t2.widths;
        var r270_heading = _r270_t2.heading;
        var r270_archv = _r270_t2.archv;
        var r270_arcvh = _r270_t2.arcvh;
        var r270_dispiro = _r270_t2.dispiro;
        var r270_xn$spirooutline$1aao = _r270_t2['spiro-outline'];
        var _r270_t3 = r270_xn$Capture$2Lrc8.BooleFns;
        var r270_union = _r270_t3.union;
        var r270_intersection = _r270_t3.intersection;
        var _r270_t4 = r270_xn$Capture$2Lrc8.CommonShapes.resolve();
        var _r270_t5 = r270_xn$Capture$2Lrc8['Common-Derivatives'].resolve();
        var r270_xn$referglyph$1aao = _r270_t5['refer-glyph'];
        r270_xn$ExportCapture$2Lrc4b(function () {
            var _r274_t0, _r274_t1;
            return { 'MathEnclosureSw': r270_MathEnclosureSw };
        });
        var r270_MathEnclosureSw = r270_AdviceStroke(4);
        var r270_kBox = 2 / 3;
        var r270_leftBox = r270_SB * r270_kBox;
        var r270_rightBox = r270_Width - r270_SB * r270_kBox;
        var r270_radiusBox = (r270_rightBox - r270_leftBox) / 2;
        var r270_topBox = r270_SymbolMid + r270_radiusBox;
        var r270_bottomBox = r270_SymbolMid - r270_radiusBox;
        var r270_kCircle = 2 / 3;
        var r270_leftCircle = r270_SB * r270_kCircle;
        var r270_rightCircle = r270_Width - r270_SB * r270_kCircle;
        var r270_radiusCircle = (r270_rightCircle - r270_leftCircle) / 2;
        r270_xn$createAndSaveGlyphImpl$2Lrc3c('mathO', null, function () {
            var _r277_t1;
            var _r277_t0 = this;
            var r277_currentGlyph = _r277_t0;
            r277_currentGlyph.include(r270_dispiro(r270_widths.lhs(r270_MathEnclosureSw), r270_g4(r270_Middle, r270_SymbolMid + r270_radiusCircle - r270_O), r270_archv(void 0, 2), r270_g4(r270_leftCircle + r270_O, r270_SymbolMid), r270_arcvh(void 0, 2), r270_g4(r270_Middle, r270_SymbolMid - r270_radiusCircle + r270_O), r270_archv(void 0, 2), r270_g4(r270_rightCircle - r270_O, r270_SymbolMid), r270_arcvh(void 0, 2), r270_close()));
            return void 0;
        });
        r270_xn$createAndSaveGlyphImpl$2Lrc3c('mathOlefthalf', null, function () {
            var _r281_t1;
            var _r281_t0 = this;
            var r281_currentGlyph = _r281_t0;
            r281_currentGlyph.include(r270_dispiro(r270_g4.left.start(r270_Middle, r270_SymbolMid + r270_radiusCircle - r270_O, r270_widths.lhs.heading(r270_MathEnclosureSw, r270_Leftward)), r270_archv(), r270_g4.down.mid(r270_leftCircle + r270_O, r270_SymbolMid, r270_heading(r270_Downward)), r270_arcvh(), r270_g4.right.end(r270_Middle, r270_SymbolMid - r270_radiusCircle + r270_O, r270_heading(r270_Rightward))));
            return void 0;
        });
        r270_xn$createAndSaveGlyphImpl$2Lrc3c('mathOrighthalf', null, function () {
            var _r285_t1;
            var _r285_t0 = this;
            var r285_currentGlyph = _r285_t0;
            r285_currentGlyph.include(r270_dispiro(r270_g4.right.start(r270_Middle, r270_SymbolMid + r270_radiusCircle - r270_O, r270_widths.rhs.heading(r270_MathEnclosureSw, r270_Rightward)), r270_archv(), r270_g4.down.mid(r270_rightCircle - r270_O, r270_SymbolMid, r270_heading(r270_Downward)), r270_arcvh(), r270_g4.left.end(r270_Middle, r270_SymbolMid - r270_radiusCircle + r270_O, r270_heading(r270_Leftward))));
            return void 0;
        });
        r270_xn$createAndSaveGlyphImpl$2Lrc3c('mathOOutline', null, function () {
            var _r289_t1;
            var _r289_t0 = this;
            var r289_currentGlyph = _r289_t0;
            r289_currentGlyph.include(r270_xn$spirooutline$1aao(r270_g4(r270_Middle, r270_SymbolMid + r270_radiusCircle), r270_archv(void 0, 2), r270_g4(r270_leftCircle, r270_SymbolMid), r270_arcvh(void 0, 2), r270_g4(r270_Middle, r270_SymbolMid - r270_radiusCircle), r270_archv(void 0, 2), r270_g4(r270_rightCircle, r270_SymbolMid), r270_arcvh(void 0, 2), r270_close()));
            return void 0;
        });
        r270_xn$createAndSaveGlyphImpl$2Lrc3c('mathBoxOutline', null, function () {
            var _r293_t1;
            var _r293_t0 = this;
            var r293_currentGlyph = _r293_t0;
            r293_currentGlyph.include(r270_xn$spirooutline$1aao(r270_corner(r270_leftBox, r270_topBox), r270_corner(r270_leftBox, r270_bottomBox), r270_corner(r270_rightBox, r270_bottomBox), r270_corner(r270_rightBox, r270_topBox)));
            return void 0;
        });
        r270_xn$createAndSaveGlyphImpl$2Lrc3c('mathBox', null, function () {
            var _r297_t1;
            var _r297_t0 = this;
            var r297_currentGlyph = _r297_t0;
            r297_currentGlyph.include(r270_intersection(r270_xn$referglyph$1aao('mathBoxOutline'), r270_union(r270_dispiro(r270_widths.lhs(r270_MathEnclosureSw), r270_flat(r270_leftBox, r270_topBox), r270_curl(r270_leftBox, r270_bottomBox)), r270_dispiro(r270_widths.lhs(r270_MathEnclosureSw), r270_flat(r270_leftBox, r270_bottomBox), r270_curl(r270_rightBox, r270_bottomBox)), r270_dispiro(r270_widths.lhs(r270_MathEnclosureSw), r270_flat(r270_rightBox, r270_bottomBox), r270_curl(r270_rightBox, r270_topBox)), r270_dispiro(r270_widths.lhs(r270_MathEnclosureSw), r270_flat(r270_rightBox, r270_topBox), r270_curl(r270_leftBox, r270_topBox)))));
            return void 0;
        });
        return function () {
            var r301_FMosaicWide, r301_MosaicNameSuffix, r301_MosaicWidth, r301_MosaicWidthScalar, _r301_t3, _r301_t5, _r301_t6, _r301_tag7;
            var r301_WidthKinds = [
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
            var _r301_t0 = r301_WidthKinds;
            var _r301_t1 = _r301_t0.length;
            var _r301_t2 = 0;
            var _r301_t4 = _r301_t2 < _r301_t1;
            while (_r301_t4) {
                _r301_t3 = _r301_t0[_r301_t2];
                r301_FMosaicWide = _r301_t3[0];
                r301_MosaicNameSuffix = _r301_t3[1];
                r301_MosaicWidth = _r301_t3[2];
                r301_MosaicWidthScalar = _r301_t3[3];
                (function () {
                    var r304_MosaicDesiredWidth = r270_WideWidth1;
                    var r304_MosaicMiddle = r301_MosaicWidth / 2;
                    var r304_MosaicUnitWidth = r301_MosaicWidth / r301_MosaicWidthScalar;
                    var r304_MangleUnicode = function (r305_unicode, r305__desiredOverride) {
                        var _r305_t0, _r305_t1;
                        return r301_MosaicWidth === (r305__desiredOverride || r304_MosaicDesiredWidth) ? r305_unicode : void 0;
                    };
                    var r304_MangleName = function (r306_name) {
                        var _r306_t0, _r306_t1;
                        return r306_name + r301_MosaicNameSuffix;
                    };
                    var r304_radiusBig = (r270_TackTop - r270_TackBot) / 2 * Math.sqrt(r301_MosaicWidthScalar);
                    var r304_leftBig = r304_MosaicMiddle - r304_radiusBig;
                    var r304_rightBig = r304_MosaicMiddle + r304_radiusBig;
                    r270_xn$createAndSaveGlyphImpl$2Lrc3c(r304_MangleName('mathOBig'), null, function () {
                        var _r309_t1;
                        var _r309_t0 = this;
                        var r309_currentGlyph = _r309_t0;
                        r309_currentGlyph.setWidth(r301_MosaicWidth);
                        r309_currentGlyph.include(r270_dispiro(r270_widths.lhs(r270_GeometryStroke), r270_g4(r304_MosaicMiddle, r270_SymbolMid + r304_radiusBig - r270_O), r270_archv(void 0, 2), r270_g4(r304_leftBig + r270_O, r270_SymbolMid), r270_arcvh(void 0, 2), r270_g4(r304_MosaicMiddle, r270_SymbolMid - r304_radiusBig + r270_O), r270_archv(void 0, 2), r270_g4(r304_rightBig - r270_O, r270_SymbolMid), r270_arcvh(void 0, 2), r270_close()));
                        return void 0;
                    });
                    return r270_xn$createAndSaveGlyphImpl$2Lrc3c(r304_MangleName('mathOOutlineBig'), null, function () {
                        var _r314_t1;
                        var _r314_t0 = this;
                        var r314_currentGlyph = _r314_t0;
                        r314_currentGlyph.setWidth(r301_MosaicWidth);
                        r314_currentGlyph.include(r270_xn$spirooutline$1aao(r270_g4(r304_MosaicMiddle, r270_SymbolMid + r304_radiusBig), r270_archv(void 0, 2), r270_g4(r304_leftBig, r270_SymbolMid), r270_arcvh(void 0, 2), r270_g4(r304_MosaicMiddle, r270_SymbolMid - r304_radiusBig), r270_archv(void 0, 2), r270_g4(r304_rightBig, r270_SymbolMid), r270_arcvh(void 0, 2), r270_close()));
                        return void 0;
                    });
                }());
                _r301_t5 = _r301_t2 = _r301_t2 + 1;
                _r301_t4 = _r301_t2 < _r301_t1;
            }
            return _r301_t5;
        }();
    });
    return void 0;
});
