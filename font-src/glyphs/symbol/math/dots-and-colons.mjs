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
    r269_xn$Capture_Ext$2Lrc2b['$defineGlyphBlockImpl$'](r269_xn$Capture_Ext$2Lrc2b, 'Symbol-Math-Dots-And-Colons', function (r270_xn$Capture$2Lrc8, r270_xn$ExportCapture$2Lrc4b) {
        var r270_suffix, r270_DrawAt, r270_kDotRadius, r270_overshoot, _r270_t8, _r270_t9, _r270_t10, _r270_t11, _r270_tag12, _r270_t13, _r270_tag14;
        var _r270_t0 = r270_xn$Capture$2Lrc8;
        var r270_xn$createAndSaveGlyphImpl$2Lrc3c = _r270_t0['$createAndSaveGlyphImpl$'];
        var r270_xn$NamedParameterPair$2Lrc9b = _r270_t0['$NamedParameterPair$'];
        var r270_xn$assignUnicodeImpl$2Lrc8b = _r270_t0['$assignUnicodeImpl$'];
        var r270_xn$execState$2Lrc0b = _r270_t0['$execState$'];
        var _r270_t1 = r270_xn$Capture$2Lrc8.Metrics;
        var r270_Width = _r270_t1.Width;
        var r270_XH = _r270_t1.XH;
        var r270_SymbolMid = _r270_t1.SymbolMid;
        var r270_Stroke = _r270_t1.Stroke;
        var r270_PeriodSize = _r270_t1.PeriodSize;
        var r270_WideWidth1 = _r270_t1.WideWidth1;
        var r270_Middle = _r270_t1.Middle;
        var r270_PeriodRadius = _r270_t1.PeriodRadius;
        var r270_AdviceStroke = _r270_t1.AdviceStroke;
        var r270_OperatorStroke = _r270_t1.OperatorStroke;
        var _r270_t2 = r270_xn$Capture$2Lrc8.SpiroFns;
        var _r270_t3 = r270_xn$Capture$2Lrc8.BooleFns;
        var _r270_t4 = r270_xn$Capture$2Lrc8.CommonShapes.resolve();
        var r270_DotVariants = _r270_t4.DotVariants;
        var _r270_t5 = r270_xn$Capture$2Lrc8['Common-Derivatives'].resolve();
        var r270_xn$selectvariant$7Hrq = _r270_t5['select-variant'];
        var _r270_t6 = Object.entries(r270_DotVariants)[Symbol.iterator]();
        var _r270_t7 = void 0;
        while (!(_r270_t7 = _r270_t6.next()).done) {
            _r270_t8 = _r270_t7.value;
            r270_suffix = _r270_t8[0];
            r270_DrawAt = _r270_t8[1][0];
            r270_kDotRadius = _r270_t8[1][1];
            r270_overshoot = _r270_t8[1][2];
            _r270_t8[1];
            (function () {
                var _r275_t0, _r275_tag1;
                var r275_radius1 = r270_PeriodRadius * r270_kDotRadius * r270_OperatorStroke / r270_Stroke;
                var r275_radius = Math.min(r275_radius1, 0.5 * r270_AdviceStroke(3.5, r270_Width / r270_kDotRadius) * r270_PeriodSize * r270_kDotRadius / r270_Stroke);
                var r275_left = r1_mix(0, r270_Width, 1 / 4);
                var r275_right = r1_mix(0, r270_Width, 3 / 4);
                var r275_yUpperColon = r270_SymbolMid + r270_XH / 2 - r275_radius;
                var r275_yLowerColon = r270_SymbolMid - r270_XH / 2 + r275_radius;
                r270_xn$createAndSaveGlyphImpl$2Lrc3c('therefore.' + r270_suffix, null, function () {
                    var _r278_t1;
                    var _r278_t0 = this;
                    var r278_currentGlyph = _r278_t0;
                    r278_currentGlyph.include(r270_DrawAt(r270_Middle, r275_yUpperColon, r275_radius - r270_overshoot));
                    r278_currentGlyph.include(r270_DrawAt(r275_left, r275_yLowerColon, r275_radius - r270_overshoot));
                    r278_currentGlyph.include(r270_DrawAt(r275_right, r275_yLowerColon, r275_radius - r270_overshoot));
                    return void 0;
                });
                r270_xn$createAndSaveGlyphImpl$2Lrc3c('because.' + r270_suffix, null, function () {
                    var _r284_t1;
                    var _r284_t0 = this;
                    var r284_currentGlyph = _r284_t0;
                    r284_currentGlyph.include(r270_DrawAt(r270_Middle, r275_yLowerColon, r275_radius - r270_overshoot));
                    r284_currentGlyph.include(r270_DrawAt(r275_left, r275_yUpperColon, r275_radius - r270_overshoot));
                    r284_currentGlyph.include(r270_DrawAt(r275_right, r275_yUpperColon, r275_radius - r270_overshoot));
                    return void 0;
                });
                r270_xn$createAndSaveGlyphImpl$2Lrc3c('mathcolon.' + r270_suffix, null, function () {
                    var _r290_t1;
                    var _r290_t0 = this;
                    var r290_currentGlyph = _r290_t0;
                    r290_currentGlyph.include(r270_DrawAt(r270_Middle, r275_yLowerColon, r275_radius - r270_overshoot));
                    r290_currentGlyph.include(r270_DrawAt(r270_Middle, r275_yUpperColon, r275_radius - r270_overshoot));
                    return void 0;
                });
                r270_xn$createAndSaveGlyphImpl$2Lrc3c('coloncolon.' + r270_suffix, null, function () {
                    var _r295_t1;
                    var _r295_t0 = this;
                    var r295_currentGlyph = _r295_t0;
                    r295_currentGlyph.include(r270_DrawAt(r275_left, r275_yUpperColon, r275_radius - r270_overshoot));
                    r295_currentGlyph.include(r270_DrawAt(r275_right, r275_yUpperColon, r275_radius - r270_overshoot));
                    r295_currentGlyph.include(r270_DrawAt(r275_left, r275_yLowerColon, r275_radius - r270_overshoot));
                    r295_currentGlyph.include(r270_DrawAt(r275_right, r275_yLowerColon, r275_radius - r270_overshoot));
                    return void 0;
                });
                r270_xn$createAndSaveGlyphImpl$2Lrc3c('mathCDot.' + r270_suffix, null, function () {
                    var _r302_t1;
                    var _r302_t0 = this;
                    var r302_currentGlyph = _r302_t0;
                    r302_currentGlyph.include(r270_DrawAt(r270_Middle, r270_SymbolMid, r275_radius - r270_overshoot));
                    return void 0;
                });
                r270_xn$createAndSaveGlyphImpl$2Lrc3c('mathCDotInner.' + r270_suffix, null, function () {
                    var _r306_t1;
                    var _r306_t0 = this;
                    var r306_currentGlyph = _r306_t0;
                    r306_currentGlyph.include(r270_DrawAt(r270_Middle, r270_SymbolMid, r275_radius * r270_OperatorStroke / r270_Stroke - r270_overshoot));
                    return void 0;
                });
                return function () {
                    var r310_FMosaicWide, r310_MosaicNameSuffix, r310_MosaicWidth, r310_MosaicWidthScalar, _r310_t3, _r310_t5, _r310_t6, _r310_tag7;
                    var r310_WidthKinds = [
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
                    var _r310_t0 = r310_WidthKinds;
                    var _r310_t1 = _r310_t0.length;
                    var _r310_t2 = 0;
                    var _r310_t4 = _r310_t2 < _r310_t1;
                    while (_r310_t4) {
                        _r310_t3 = _r310_t0[_r310_t2];
                        r310_FMosaicWide = _r310_t3[0];
                        r310_MosaicNameSuffix = _r310_t3[1];
                        r310_MosaicWidth = _r310_t3[2];
                        r310_MosaicWidthScalar = _r310_t3[3];
                        (function () {
                            var r313_MosaicDesiredWidth = r270_WideWidth1;
                            var r313_MosaicMiddle = r310_MosaicWidth / 2;
                            var r313_MosaicUnitWidth = r310_MosaicWidth / r310_MosaicWidthScalar;
                            var r313_MangleUnicode = function (r314_unicode, r314__desiredOverride) {
                                var _r314_t0, _r314_t1;
                                return r310_MosaicWidth === (r314__desiredOverride || r313_MosaicDesiredWidth) ? r314_unicode : void 0;
                            };
                            var r313_MangleName = function (r315_name) {
                                var _r315_t0, _r315_t1;
                                return r315_name + r310_MosaicNameSuffix;
                            };
                            return r270_xn$createAndSaveGlyphImpl$2Lrc3c('' + r313_MangleName('mathCDotBig') + '.' + r270_suffix, null, function () {
                                var _r318_t1;
                                var _r318_t0 = this;
                                var r318_currentGlyph = _r318_t0;
                                r318_currentGlyph.setWidth(r310_MosaicWidth);
                                r318_currentGlyph.include(r270_DrawAt(r313_MosaicMiddle, r270_SymbolMid, r275_radius1 - r270_overshoot));
                                return void 0;
                            });
                        }());
                        _r310_t5 = _r310_t2 = _r310_t2 + 1;
                        _r310_t4 = _r310_t2 < _r310_t1;
                    }
                    return _r310_t5;
                }();
            }());
        }
        r270_xn$selectvariant$7Hrq('therefore', 8756, new r270_xn$NamedParameterPair$2Lrc9b('follow', 'punctuationDot'));
        r270_xn$selectvariant$7Hrq('because', 8757, new r270_xn$NamedParameterPair$2Lrc9b('follow', 'punctuationDot'));
        r270_xn$selectvariant$7Hrq('mathcolon', 8758, new r270_xn$NamedParameterPair$2Lrc9b('follow', 'punctuationDot'));
        r270_xn$selectvariant$7Hrq('coloncolon', 8759, new r270_xn$NamedParameterPair$2Lrc9b('follow', 'punctuationDot'));
        r270_xn$selectvariant$7Hrq('mathCDot', 8901, new r270_xn$NamedParameterPair$2Lrc9b('follow', 'punctuationDot'));
        r270_xn$selectvariant$7Hrq('mathCDotInner', new r270_xn$NamedParameterPair$2Lrc9b('follow', 'punctuationDot'));
        return function () {
            var r329_FMosaicWide, r329_MosaicNameSuffix, r329_MosaicWidth, r329_MosaicWidthScalar, _r329_t3, _r329_t5, _r329_t6, _r329_tag7;
            var r329_WidthKinds = [
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
            var _r329_t0 = r329_WidthKinds;
            var _r329_t1 = _r329_t0.length;
            var _r329_t2 = 0;
            var _r329_t4 = _r329_t2 < _r329_t1;
            while (_r329_t4) {
                _r329_t3 = _r329_t0[_r329_t2];
                r329_FMosaicWide = _r329_t3[0];
                r329_MosaicNameSuffix = _r329_t3[1];
                r329_MosaicWidth = _r329_t3[2];
                r329_MosaicWidthScalar = _r329_t3[3];
                (function () {
                    var r332_MosaicDesiredWidth = r270_WideWidth1;
                    var r332_MosaicMiddle = r329_MosaicWidth / 2;
                    var r332_MosaicUnitWidth = r329_MosaicWidth / r329_MosaicWidthScalar;
                    var r332_MangleUnicode = function (r333_unicode, r333__desiredOverride) {
                        var _r333_t0, _r333_t1;
                        return r329_MosaicWidth === (r333__desiredOverride || r332_MosaicDesiredWidth) ? r333_unicode : void 0;
                    };
                    var r332_MangleName = function (r334_name) {
                        var _r334_t0, _r334_t1;
                        return r334_name + r329_MosaicNameSuffix;
                    };
                    return r270_xn$selectvariant$7Hrq(r332_MangleName('mathCDotBig'), new r270_xn$NamedParameterPair$2Lrc9b('follow', 'punctuationDot'));
                }());
                _r329_t5 = _r329_t2 = _r329_t2 + 1;
                _r329_t4 = _r329_t2 < _r329_t1;
            }
            return _r329_t5;
        }();
    });
    return void 0;
});
