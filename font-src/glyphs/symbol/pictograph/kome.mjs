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
    r269_xn$Capture_Ext$2Lrc2b['$defineGlyphBlockImpl$'](r269_xn$Capture_Ext$2Lrc2b, 'Symbol-Pictograph-Kome', function (r270_xn$Capture$2Lrc8, r270_xn$ExportCapture$2Lrc4b) {
        var _r270_t6, _r270_t7, _r270_t8, _r270_tag9;
        var _r270_t0 = r270_xn$Capture$2Lrc8;
        var r270_xn$createAndSaveGlyphImpl$2Lrc3c = _r270_t0['$createAndSaveGlyphImpl$'];
        var r270_xn$NamedParameterPair$2Lrc9b = _r270_t0['$NamedParameterPair$'];
        var r270_xn$assignUnicodeImpl$2Lrc8b = _r270_t0['$assignUnicodeImpl$'];
        var r270_xn$execState$2Lrc0b = _r270_t0['$execState$'];
        var _r270_t1 = r270_xn$Capture$2Lrc8.Metrics;
        var r270_SB = _r270_t1.SB;
        var r270_SymbolMid = _r270_t1.SymbolMid;
        var r270_ParenTop = _r270_t1.ParenTop;
        var r270_ParenBot = _r270_t1.ParenBot;
        var r270_WideWidth1 = _r270_t1.WideWidth1;
        var r270_RightSB = _r270_t1.RightSB;
        var r270_DotRadius = _r270_t1.DotRadius;
        var r270_AdviceStroke = _r270_t1.AdviceStroke;
        var _r270_t2 = r270_xn$Capture$2Lrc8.SpiroFns;
        var r270_flat = _r270_t2.flat;
        var r270_curl = _r270_t2.curl;
        var r270_widths = _r270_t2.widths;
        var r270_dispiro = _r270_t2.dispiro;
        var _r270_t3 = r270_xn$Capture$2Lrc8.BooleFns;
        var _r270_t4 = r270_xn$Capture$2Lrc8.CommonShapes.resolve();
        var r270_WithDotVariants = _r270_t4.WithDotVariants;
        var _r270_t5 = r270_xn$Capture$2Lrc8['Common-Derivatives'].resolve();
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
                    var r278_MosaicDesiredWidth = r270_WideWidth1;
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
                    return r270_WithDotVariants(r278_MangleName('kome'), r278_MangleUnicode(8251), function (r281_DrawAt, r281_kdr, r281_ov) {
                        var _r281_t0, _r281_t1;
                        return function () {
                            var _r283_t1;
                            var _r283_t0 = this;
                            var r283_currentGlyph = _r283_t0;
                            r283_currentGlyph.setWidth(r275_MosaicWidth);
                            var r283_sw = r270_AdviceStroke(3.75);
                            var r283_shapeSize = Math.min(r275_MosaicWidth / 2 - r270_SB, (r270_ParenTop - r270_ParenBot) / 2);
                            r283_currentGlyph.include(r270_dispiro(r270_widths.center(r283_sw), r270_flat(r275_MosaicWidth / 2 - r283_shapeSize, r270_SymbolMid - r283_shapeSize), r270_curl(r275_MosaicWidth / 2 + r283_shapeSize, r270_SymbolMid + r283_shapeSize)));
                            r283_currentGlyph.include(r270_dispiro(r270_widths.center(r283_sw), r270_flat(r275_MosaicWidth / 2 + r283_shapeSize, r270_SymbolMid - r283_shapeSize), r270_curl(r275_MosaicWidth / 2 - r283_shapeSize, r270_SymbolMid + r283_shapeSize)));
                            var r283_r0 = Math.min((r270_RightSB - r270_SB + r283_sw / Math.sqrt(2) - r283_sw * 3) / 4, r270_DotRadius * r281_kdr);
                            var r283_r = r283_shapeSize - r283_r0 + r283_sw / 2 / Math.sqrt(2);
                            r283_currentGlyph.include(r281_DrawAt(r275_MosaicWidth / 2 + r283_r, r270_SymbolMid, r283_r0 - r281_ov));
                            r283_currentGlyph.include(r281_DrawAt(r275_MosaicWidth / 2 - r283_r, r270_SymbolMid, r283_r0 - r281_ov));
                            r283_currentGlyph.include(r281_DrawAt(r275_MosaicWidth / 2, r270_SymbolMid + r283_r, r283_r0 - r281_ov));
                            r283_currentGlyph.include(r281_DrawAt(r275_MosaicWidth / 2, r270_SymbolMid - r283_r, r283_r0 - r281_ov));
                            return void 0;
                        };
                    });
                }());
                _r275_t5 = _r275_t2 = _r275_t2 + 1;
                _r275_t4 = _r275_t2 < _r275_t1;
            }
            return _r275_t5;
        }();
    });
    return void 0;
});
