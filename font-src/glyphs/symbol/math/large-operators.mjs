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
    r269_xn$Capture_Ext$2Lrc2b['$defineGlyphBlockImpl$'](r269_xn$Capture_Ext$2Lrc2b, 'Symbol-Math-Large-Operators', function (r270_xn$Capture$2Lrc8, r270_xn$ExportCapture$2Lrc4b) {
        var _r270_t4, _r270_t5, _r270_t6, _r270_tag7;
        var _r270_t0 = r270_xn$Capture$2Lrc8;
        var r270_xn$createAndSaveGlyphImpl$2Lrc3c = _r270_t0['$createAndSaveGlyphImpl$'];
        var r270_xn$NamedParameterPair$2Lrc9b = _r270_t0['$NamedParameterPair$'];
        var r270_xn$assignUnicodeImpl$2Lrc8b = _r270_t0['$assignUnicodeImpl$'];
        var r270_xn$execState$2Lrc0b = _r270_t0['$execState$'];
        var r270_para = _r270_t0.para;
        var r270_DivFrame = _r270_t0.DivFrame;
        var r270_fontMetrics = _r270_t0.fontMetrics;
        var _r270_t1 = r270_xn$Capture$2Lrc8.Metrics;
        var r270_Width = _r270_t1.Width;
        var r270_SymbolMid = _r270_t1.SymbolMid;
        var r270_BgOpTop = _r270_t1.BgOpTop;
        var r270_BgOpBot = _r270_t1.BgOpBot;
        var r270_Downward = _r270_t1.Downward;
        var r270_ArchDepth = _r270_t1.ArchDepth;
        var r270_SLAB = _r270_t1.SLAB;
        var r270_WideWidth1 = _r270_t1.WideWidth1;
        var r270_OperatorStroke = _r270_t1.OperatorStroke;
        var r270_ArchDepthAOf = _r270_t1.ArchDepthAOf;
        var r270_ArchDepthBOf = _r270_t1.ArchDepthBOf;
        var _r270_t2 = r270_xn$Capture$2Lrc8.SpiroFns;
        var r270_flat = _r270_t2.flat;
        var r270_curl = _r270_t2.curl;
        var r270_widths = _r270_t2.widths;
        var r270_heading = _r270_t2.heading;
        var r270_dispiro = _r270_t2.dispiro;
        var _r270_t3 = r270_xn$Capture$2Lrc8.BooleFns;
        var r270_intersection = _r270_t3.intersection;
        return function () {
            var r273_FMosaicWide, r273_MosaicNameSuffix, r273_MosaicWidth, r273_MosaicWidthScalar, _r273_t3, _r273_t5, _r273_t6, _r273_tag7;
            var r273_WidthKinds = [
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
            var _r273_t0 = r273_WidthKinds;
            var _r273_t1 = _r273_t0.length;
            var _r273_t2 = 0;
            var _r273_t4 = _r273_t2 < _r273_t1;
            while (_r273_t4) {
                _r273_t3 = _r273_t0[_r273_t2];
                r273_FMosaicWide = _r273_t3[0];
                r273_MosaicNameSuffix = _r273_t3[1];
                r273_MosaicWidth = _r273_t3[2];
                r273_MosaicWidthScalar = _r273_t3[3];
                (function () {
                    var r276_MosaicDesiredWidth = r270_WideWidth1;
                    var r276_MosaicMiddle = r273_MosaicWidth / 2;
                    var r276_MosaicUnitWidth = r273_MosaicWidth / r273_MosaicWidthScalar;
                    var r276_MangleUnicode = function (r277_unicode, r277__desiredOverride) {
                        var _r277_t0, _r277_t1;
                        return r273_MosaicWidth === (r277__desiredOverride || r276_MosaicDesiredWidth) ? r277_unicode : void 0;
                    };
                    var r276_MangleName = function (r278_name) {
                        var _r278_t0, _r278_t1;
                        return r278_name + r273_MosaicNameSuffix;
                    };
                    var _r276_t0 = r270_xn$Capture$2Lrc8.CommonShapes.resolve();
                    var r276_DiagCorDs = _r276_t0.DiagCorDs;
                    var r276_MaskAbove = _r276_t0.MaskAbove;
                    var r276_MaskBelow = _r276_t0.MaskBelow;
                    var _r276_t1 = r270_xn$Capture$2Lrc8['Common-Derivatives'].resolve();
                    var r276_turned = _r276_t1.turned;
                    var _r276_t2 = r270_xn$Capture$2Lrc8['Letter-Latin-Long-S'].resolve();
                    var r276_LongSShape = _r276_t2.LongSShape;
                    var _r276_t3 = r270_xn$Capture$2Lrc8['Letter-Latin-U'].resolve();
                    var r276_UShape = _r276_t3.UShape;
                    var _r276_t4 = r270_xn$Capture$2Lrc8['Letter-Greek-Upper-Sigma'].resolve();
                    var r276_SigmaShape = _r276_t4.SigmaShape;
                    var _r276_t5 = r270_xn$Capture$2Lrc8['Letter-Greek-Pi'].resolve();
                    var r276_PiShape = _r276_t5.PiShape;
                    var _r276_t6 = r270_xn$Capture$2Lrc8['Letter-Blackboard'].resolve();
                    var r276_BBS = _r276_t6.BBS;
                    var r276_BBD = _r276_t6.BBD;
                    var r276_MosaicTop = r270_fontMetrics.os2.sTypoAscender;
                    var r276_MosaicBottom = r270_fontMetrics.os2.sTypoDescender;
                    var r276_MosaicHeight = r276_MosaicTop - r276_MosaicBottom;
                    var r276_diversityLargeOperators = Math.max(r270_para.diversityM, r273_MosaicWidth / r270_Width);
                    var r276_df = r270_DivFrame(r276_diversityLargeOperators, 0, r273_FMosaicWide ? r276_diversityLargeOperators : 1);
                    r270_xn$createAndSaveGlyphImpl$2Lrc3c(r276_MangleName('sum'), r276_MangleUnicode(8721), function () {
                        var _r288_t1;
                        var _r288_t0 = this;
                        var r288_currentGlyph = _r288_t0;
                        r288_currentGlyph.setWidth(r276_df.width);
                        r288_currentGlyph.include(r276_SigmaShape(r276_df, r270_BgOpTop, r270_BgOpBot, r270_OperatorStroke));
                        return void 0;
                    });
                    r270_xn$createAndSaveGlyphImpl$2Lrc3c(r276_MangleName('sumUpper'), r276_MangleUnicode(9138), function () {
                        var _r293_t1;
                        var _r293_t0 = this;
                        var r293_currentGlyph = _r293_t0;
                        r293_currentGlyph.setWidth(r276_df.width);
                        r293_currentGlyph.include(r270_intersection(r276_MaskAbove(r276_MosaicBottom), r276_SigmaShape(r276_df, r270_BgOpTop, r270_BgOpBot - r276_MosaicHeight * 2, r270_OperatorStroke, new r270_xn$NamedParameterPair$2Lrc9b('pCenter', 0.75))));
                        return void 0;
                    });
                    r270_xn$createAndSaveGlyphImpl$2Lrc3c(r276_MangleName('sumLower'), r276_MangleUnicode(9139), function () {
                        var _r299_t1;
                        var _r299_t0 = this;
                        var r299_currentGlyph = _r299_t0;
                        r299_currentGlyph.setWidth(r276_df.width);
                        r299_currentGlyph.include(r270_intersection(r276_MaskBelow(r276_MosaicTop), r276_SigmaShape(r276_df, r270_BgOpTop + r276_MosaicHeight * 2, r270_BgOpBot, r270_OperatorStroke, new r270_xn$NamedParameterPair$2Lrc9b('pCenter', 0.75))));
                        return void 0;
                    });
                    r270_xn$createAndSaveGlyphImpl$2Lrc3c(r276_MangleName('mathbb/sum'), r276_MangleUnicode(8512), function () {
                        var _r305_t1;
                        var _r305_t0 = this;
                        var r305_currentGlyph = _r305_t0;
                        r305_currentGlyph.setWidth(r276_df.width);
                        var r305_kDiag = r276_DiagCorDs(r270_BgOpTop - r270_BgOpBot, r276_df.rightSB - r276_df.leftSB, r276_BBD);
                        r305_currentGlyph.include(r276_SigmaShape(r276_df, r270_BgOpTop, r270_BgOpBot, r276_BBS, new r270_xn$NamedParameterPair$2Lrc9b('noSerif', true)));
                        r305_currentGlyph.include(r276_SigmaShape(r276_df, r270_BgOpTop, r270_BgOpBot, r276_BBS, new r270_xn$NamedParameterPair$2Lrc9b('noSerif', true), new r270_xn$NamedParameterPair$2Lrc9b('offsetLeft', r305_kDiag * r276_BBD)));
                        return void 0;
                    });
                    r270_xn$createAndSaveGlyphImpl$2Lrc3c(r276_MangleName('product'), r276_MangleUnicode(8719), function () {
                        var _r314_t1;
                        var _r314_t0 = this;
                        var r314_currentGlyph = _r314_t0;
                        r314_currentGlyph.setWidth(r276_df.width);
                        r314_currentGlyph.include(r276_PiShape(r276_df, r270_BgOpTop, r270_BgOpBot, new r270_xn$NamedParameterPair$2Lrc9b('shrinkRate', 0), new r270_xn$NamedParameterPair$2Lrc9b('fine', r270_OperatorStroke), new r270_xn$NamedParameterPair$2Lrc9b('doSerif', r270_SLAB)));
                        return void 0;
                    });
                    r276_turned(r276_MangleName('coproduct'), r276_MangleUnicode(8720), r276_MangleName('product'), r276_df.middle, r270_SymbolMid);
                    r270_xn$createAndSaveGlyphImpl$2Lrc3c(r276_MangleName('Vee'), r276_MangleUnicode(8897), function () {
                        var _r322_t1;
                        var _r322_t0 = this;
                        var r322_currentGlyph = _r322_t0;
                        r322_currentGlyph.setWidth(r276_df.width);
                        r322_currentGlyph.include(r270_dispiro(r270_widths.center(r270_OperatorStroke), r270_flat(r276_df.leftSB, r270_BgOpTop), r270_curl(r276_df.middle, r270_BgOpBot, r270_heading(r270_Downward))));
                        r322_currentGlyph.include(r270_dispiro(r270_widths.center(r270_OperatorStroke), r270_flat(r276_df.rightSB, r270_BgOpTop), r270_curl(r276_df.middle, r270_BgOpBot, r270_heading(r270_Downward))));
                        return void 0;
                    });
                    r276_turned(r276_MangleName('Wedge'), r276_MangleUnicode(8896), r276_MangleName('Vee'), r276_df.middle, r270_SymbolMid);
                    r270_xn$createAndSaveGlyphImpl$2Lrc3c(r276_MangleName('Cup'), r276_MangleUnicode(8899), function () {
                        var _r328_t1;
                        var _r328_t0 = this;
                        var r328_currentGlyph = _r328_t0;
                        r328_currentGlyph.setWidth(r276_df.width);
                        r328_currentGlyph.include(r276_UShape(r276_df, r270_BgOpTop, r270_BgOpBot, new r270_xn$NamedParameterPair$2Lrc9b('stroke', r270_OperatorStroke), new r270_xn$NamedParameterPair$2Lrc9b('ada', r270_ArchDepthAOf(r270_ArchDepth * Math.sqrt(r276_df.div), r276_df.width)), new r270_xn$NamedParameterPair$2Lrc9b('adb', r270_ArchDepthBOf(r270_ArchDepth * Math.sqrt(r276_df.div), r276_df.width))));
                        return void 0;
                    });
                    return r276_turned(r276_MangleName('Cap'), r276_MangleUnicode(8898), r276_MangleName('Cup'), r276_df.middle, r270_SymbolMid);
                }());
                _r273_t5 = _r273_t2 = _r273_t2 + 1;
                _r273_t4 = _r273_t2 < _r273_t1;
            }
            return _r273_t5;
        }();
    });
    return void 0;
});
