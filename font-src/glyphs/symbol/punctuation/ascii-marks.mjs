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
    r269_xn$Capture_Ext$2Lrc2b['$defineGlyphBlockImpl$'](r269_xn$Capture_Ext$2Lrc2b, 'Symbol-Punctuation-Ascii-Marks', function (r270_xn$Capture$2Lrc8, r270_xn$ExportCapture$2Lrc4b) {
        var _r270_t8, _r270_t9, _r270_t10, _r270_tag11, _r270_t12, _r270_tag13;
        var _r270_t0 = r270_xn$Capture$2Lrc8;
        var r270_xn$createAndSaveGlyphImpl$2Lrc3c = _r270_t0['$createAndSaveGlyphImpl$'];
        var r270_xn$NamedParameterPair$2Lrc9b = _r270_t0['$NamedParameterPair$'];
        var r270_xn$assignUnicodeImpl$2Lrc8b = _r270_t0['$assignUnicodeImpl$'];
        var r270_xn$execState$2Lrc0b = _r270_t0['$execState$'];
        var r270_MarkSet = _r270_t0.MarkSet;
        var r270_AS_BASE = _r270_t0.AS_BASE;
        var r270_ALSO_METRICS = _r270_t0.ALSO_METRICS;
        var _r270_t1 = r270_xn$Capture$2Lrc8.Metrics;
        var r270_SB = _r270_t1.SB;
        var r270_XH = _r270_t1.XH;
        var r270_SymbolMid = _r270_t1.SymbolMid;
        var r270_PlusTop = _r270_t1.PlusTop;
        var r270_Scale = _r270_t1.Scale;
        var r270_Translate = _r270_t1.Translate;
        var r270_ApparentTranslate = _r270_t1.ApparentTranslate;
        var r270_Stroke = _r270_t1.Stroke;
        var r270_AccentStackOffset = _r270_t1.AccentStackOffset;
        var r270_AccentClearance = _r270_t1.AccentClearance;
        var r270_WideWidth1 = _r270_t1.WideWidth1;
        var r270_RightSB = _r270_t1.RightSB;
        var r270_Middle = _r270_t1.Middle;
        var r270_DotRadius = _r270_t1.DotRadius;
        var r270_OperatorStroke = _r270_t1.OperatorStroke;
        var _r270_t2 = r270_xn$Capture$2Lrc8.SpiroFns;
        var _r270_t3 = r270_xn$Capture$2Lrc8.BooleFns;
        var _r270_t4 = r270_xn$Capture$2Lrc8.CommonShapes.resolve();
        var r270_Ungizmo = _r270_t4.Ungizmo;
        var r270_Regizmo = _r270_t4.Regizmo;
        var r270_WithDotVariants = _r270_t4.WithDotVariants;
        var _r270_t5 = r270_xn$Capture$2Lrc8['Common-Derivatives'].resolve();
        var r270_xn$selectvariant$7Hrq = _r270_t5['select-variant'];
        var r270_xn$referglyph$1aao = _r270_t5['refer-glyph'];
        var r270_turned = _r270_t5.turned;
        var r270_xn$derivecomposites$7Hrq = _r270_t5['derive-composites'];
        var _r270_t6 = r270_xn$Capture$2Lrc8['Mark-Shared-Metrics'].resolve();
        var r270_markExtend = _r270_t6.markExtend;
        var _r270_t7 = r270_xn$Capture$2Lrc8['Mark-Above'].resolve();
        var r270_aboveMarkTop = _r270_t7.aboveMarkTop;
        var r270_aboveMarkMid = _r270_t7.aboveMarkMid;
        var r270_RingShape = _r270_t7.RingShape;
        r270_xn$Capture$2Lrc8['Symbol-Punctuation-Quotes-And-Primes'].resolve();
        var r270_MarkZoom = function (r276_w) {
            var _r276_t0, _r276_t1;
            return function () {
                var _r278_t1;
                var _r278_t0 = this;
                var r278_currentGlyph = _r278_t0;
                r278_currentGlyph.include(r270_Ungizmo());
                r278_currentGlyph.include(r270_Translate(-r276_w / 2, -r270_XH - r270_AccentStackOffset));
                r278_currentGlyph.include(r270_Scale((r270_RightSB - r270_SB) / (r270_markExtend * 3)));
                r278_currentGlyph.include(r270_Translate(r276_w / 2, r270_XH + r270_AccentStackOffset));
                r278_currentGlyph.include(r270_Regizmo());
                return void 0;
            };
        };
        r270_xn$createAndSaveGlyphImpl$2Lrc3c('asciiTilde.low', null, function () {
            var _r286_t1;
            var _r286_t0 = this;
            var r286_currentGlyph = _r286_t0;
            r286_currentGlyph.include(r270_xn$referglyph$1aao('asciiTilde.high'), true, true);
            r286_currentGlyph.include(r270_ApparentTranslate(0, r270_SymbolMid - r270_XH - r270_AccentStackOffset));
            r286_currentGlyph.include(r270_MarkSet.plus());
            return void 0;
        });
        r270_xn$createAndSaveGlyphImpl$2Lrc3c('asciiCaret.medium', null, function () {
            var _r292_t1;
            var _r292_t0 = this;
            var r292_currentGlyph = _r292_t0;
            r292_currentGlyph.include(r270_xn$referglyph$1aao('asciiCaret.high'), true, true);
            r292_currentGlyph.include(r270_ApparentTranslate(0, (r270_SymbolMid - r270_XH) / 2));
            r292_currentGlyph.include(r270_MarkSet.plus());
            return void 0;
        });
        r270_xn$createAndSaveGlyphImpl$2Lrc3c('asciiCaret.low', null, function () {
            var _r298_t1;
            var _r298_t0 = this;
            var r298_currentGlyph = _r298_t0;
            r298_currentGlyph.include(r270_xn$referglyph$1aao('asciiCaret.high'), true, true);
            r298_currentGlyph.include(r270_ApparentTranslate(0, r270_SymbolMid - r270_XH));
            r298_currentGlyph.include(r270_MarkSet.plus());
            return void 0;
        });
        r270_xn$createAndSaveGlyphImpl$2Lrc3c('caretAtBaseline', 8248, function () {
            var _r304_t1;
            var _r304_t0 = this;
            var r304_currentGlyph = _r304_t0;
            r304_currentGlyph.include(r270_xn$referglyph$1aao('asciiCaret.high'), true, true);
            r304_currentGlyph.include(r270_ApparentTranslate(0, 0 - r270_aboveMarkTop));
            r304_currentGlyph.include(r270_MarkSet.plus());
            return void 0;
        });
        r270_xn$selectvariant$7Hrq('asciiTilde', '~');
        r270_xn$selectvariant$7Hrq('asciiCaret', '^');
        r270_xn$createAndSaveGlyphImpl$2Lrc3c('ringTilde', 11803, function () {
            var _r310_t1;
            var _r310_t0 = this;
            var r310_currentGlyph = _r310_t0;
            r310_currentGlyph.include(r270_xn$referglyph$1aao('asciiTilde.symbolMid'));
            r310_currentGlyph.include(r270_RingShape(r270_Middle, r270_PlusTop + r270_AccentClearance));
            return void 0;
        });
        r270_WithDotVariants('dotTilde', 11806, function (r313_DrawAt, r313_kr, r313_ov) {
            var _r313_t0, _r313_t1;
            return function () {
                var _r315_t1;
                var _r315_t0 = this;
                var r315_currentGlyph = _r315_t0;
                r315_currentGlyph.include(r270_xn$referglyph$1aao('asciiTilde.symbolMid'), true, true);
                r315_currentGlyph.include(r313_DrawAt(r270_Middle, r270_PlusTop, r270_DotRadius * r313_kr * r270_OperatorStroke / r270_Stroke - r313_ov));
                return void 0;
            };
        });
        r270_turned('tildeDot', 11807, 'dotTilde', r270_Middle, r270_SymbolMid);
        (function () {
            var r320_FMosaicWide, r320_MosaicNameSuffix, r320_MosaicWidth, r320_MosaicWidthScalar, _r320_t3, _r320_t5, _r320_t6, _r320_tag7;
            var r320_WidthKinds = [
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
            var _r320_t0 = r320_WidthKinds;
            var _r320_t1 = _r320_t0.length;
            var _r320_t2 = 0;
            var _r320_t4 = _r320_t2 < _r320_t1;
            while (_r320_t4) {
                _r320_t3 = _r320_t0[_r320_t2];
                r320_FMosaicWide = _r320_t3[0];
                r320_MosaicNameSuffix = _r320_t3[1];
                r320_MosaicWidth = _r320_t3[2];
                r320_MosaicWidthScalar = _r320_t3[3];
                (function () {
                    var r323_MosaicDesiredWidth = r270_WideWidth1;
                    var r323_MosaicMiddle = r320_MosaicWidth / 2;
                    var r323_MosaicUnitWidth = r320_MosaicWidth / r320_MosaicWidthScalar;
                    var r323_MangleUnicode = function (r324_unicode, r324__desiredOverride) {
                        var _r324_t0, _r324_t1;
                        return r320_MosaicWidth === (r324__desiredOverride || r323_MosaicDesiredWidth) ? r324_unicode : void 0;
                    };
                    var r323_MangleName = function (r325_name) {
                        var _r325_t0, _r325_t1;
                        return r325_name + r320_MosaicNameSuffix;
                    };
                    return r270_xn$createAndSaveGlyphImpl$2Lrc3c(r323_MangleName('swungDash'), r323_MangleUnicode(8275), function () {
                        var _r328_t1;
                        var _r328_t0 = this;
                        var r328_currentGlyph = _r328_t0;
                        r328_currentGlyph.include(r270_xn$referglyph$1aao(r323_MangleName('swungDash.high')), r270_AS_BASE, r270_ALSO_METRICS);
                        r328_currentGlyph.include(r270_ApparentTranslate(0, r270_SymbolMid - r270_XH - r270_AccentStackOffset));
                        return void 0;
                    });
                }());
                _r320_t5 = _r320_t2 = _r320_t2 + 1;
                _r320_t4 = _r320_t2 < _r320_t1;
            }
            return _r320_t5;
        }());
        r270_xn$createAndSaveGlyphImpl$2Lrc3c('degree', 176, function () {
            var _r333_t1;
            var _r333_t0 = this;
            var r333_currentGlyph = _r333_t0;
            r333_currentGlyph.include(r270_xn$referglyph$1aao('markBaseSpace'), r270_AS_BASE, r270_ALSO_METRICS);
            r333_currentGlyph.include(r270_xn$referglyph$1aao('ringAbove'));
            r333_currentGlyph.include(r270_MarkZoom(r333_currentGlyph.advanceWidth));
            return void 0;
        });
        return function () {
            var r338_shift = r270_ApparentTranslate(0, r270_SymbolMid - r270_aboveMarkMid);
            r270_xn$derivecomposites$7Hrq('mdfMidGrave', 756, 'markBaseSpace', 'graveAbove', r338_shift);
            r270_xn$derivecomposites$7Hrq('mdfMidDoubleGrave', 757, 'markBaseSpace', 'doubleGraveAbove', r338_shift);
            r270_xn$derivecomposites$7Hrq('mdfMidDoubleAcute', 758, 'markBaseSpace', 'doubleAcuteAbove', r338_shift);
            r270_xn$derivecomposites$7Hrq('mdfShelf', 765, 'markBaseSpace', 'shelfBelow');
            return r270_xn$derivecomposites$7Hrq('mdfOpenShelf', 766, 'markBaseSpace', 'openShelfBelow');
        }();
    });
    return void 0;
});
