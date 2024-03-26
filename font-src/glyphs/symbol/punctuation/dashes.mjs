'use strict';
import * as _s0_t0 from '../../../support/utils.mjs';
import * as _s0_t1 from '../../../support/gr.mjs';
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
var r1_Joining = _r1_t9.Joining;
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
    r270_xn$Capture_Ext$2Lrc2b['$defineGlyphBlockImpl$'](r270_xn$Capture_Ext$2Lrc2b, 'Symbol-Punctuation-Dashes', function (r271_xn$Capture$2Lrc8, r271_xn$ExportCapture$2Lrc4b) {
        var _r271_t7, _r271_t8, _r271_t9, _r271_tag10, _r271_t11, _r271_tag12;
        var _r271_t0 = r271_xn$Capture$2Lrc8;
        var r271_xn$createAndSaveGlyphImpl$2Lrc3c = _r271_t0['$createAndSaveGlyphImpl$'];
        var r271_xn$NamedParameterPair$2Lrc9b = _r271_t0['$NamedParameterPair$'];
        var r271_xn$assignUnicodeImpl$2Lrc8b = _r271_t0['$assignUnicodeImpl$'];
        var r271_xn$execState$2Lrc0b = _r271_t0['$execState$'];
        var r271_para = _r271_t0.para;
        var r271_MarkSet = _r271_t0.MarkSet;
        var r271_DivFrame = _r271_t0.DivFrame;
        var _r271_t1 = r271_xn$Capture$2Lrc8.Metrics;
        var r271_UPM = _r271_t1.UPM;
        var r271_Width = _r271_t1.Width;
        var r271_SB = _r271_t1.SB;
        var r271_CAP = _r271_t1.CAP;
        var r271_XH = _r271_t1.XH;
        var r271_Descender = _r271_t1.Descender;
        var r271_SymbolMid = _r271_t1.SymbolMid;
        var r271_Stroke = _r271_t1.Stroke;
        var r271_WideWidth1 = _r271_t1.WideWidth1;
        var r271_RightSB = _r271_t1.RightSB;
        var r271_OperatorStroke = _r271_t1.OperatorStroke;
        var _r271_t2 = r271_xn$Capture$2Lrc8.SpiroFns;
        var _r271_t3 = r271_xn$Capture$2Lrc8.BooleFns;
        var r271_union = _r271_t3.union;
        var _r271_t4 = r271_xn$Capture$2Lrc8.CommonShapes.resolve();
        var r271_HBar = _r271_t4.HBar;
        var r271_VBar = _r271_t4.VBar;
        var r271_xn$clearanchors$1aao = _r271_t4['clear-anchors'];
        var _r271_t5 = r271_xn$Capture$2Lrc8['Common-Derivatives'].resolve();
        var r271_xn$selectvariant$7Hrq = _r271_t5['select-variant'];
        var r271_xn$referglyph$1aao = _r271_t5['refer-glyph'];
        var r271_alias = _r271_t5.alias;
        var r271_xn$derivemultipartglyphs$7Hrq65 = _r271_t5['derive-multi-part-glyphs'];
        var _r271_t6 = r271_xn$Capture$2Lrc8['Symbol-Math-Relation-Common'].resolve();
        var r271_EqualHalfSpace = _r271_t6.EqualHalfSpace;
        (function () {
            var r276_suffix, r276_yBar, _r276_t2, _r276_t3, _r276_tag4;
            var r276_openBoxGap = Math.max(r271_Stroke * 1.25, r271_XH / 4);
            var r276_OpenBoxSide = function (r277_y) {
                var _r277_t0, _r277_t1;
                return r271_union(r271_VBar.l(r271_SB, r277_y, r277_y + r276_openBoxGap, r271_OperatorStroke), r271_VBar.r(r271_RightSB, r277_y, r277_y + r276_openBoxGap, r271_OperatorStroke));
            };
            var r276_OpenBoxShoulderSide = function (r278_y) {
                var _r278_t0, _r278_t1;
                return r271_union(r276_OpenBoxSide(r278_y), r271_HBar.t(r1_mix(0, r271_SB, 0.25), r271_SB, r278_y + r276_openBoxGap, r271_OperatorStroke), r271_HBar.t(r1_mix(r271_Width, r271_RightSB, 0.25), r271_RightSB, r278_y + r276_openBoxGap, r271_OperatorStroke));
            };
            r271_xn$ExportCapture$2Lrc4b(function () {
                var _r280_t0, _r280_t1;
                return { 'UnderScoreConfig': r276_UnderScoreConfig };
            });
            var r276_UnderScoreConfig = {
                'aboveBaseline': [0],
                'high': [-r271_Stroke],
                'low': [r271_Descender]
            };
            var r276_joiningOverlap = -r271_Width / 6;
            var _r276_t0 = Object.entries(r276_UnderScoreConfig)[Symbol.iterator]();
            var _r276_t1 = void 0;
            while (!(_r276_t1 = _r276_t0.next()).done) {
                _r276_t2 = _r276_t1.value;
                r276_suffix = _r276_t2[0];
                r276_yBar = _r276_t2[1][0];
                _r276_t2[1];
                (function () {
                    r271_xn$createAndSaveGlyphImpl$2Lrc3c('underscore.' + r276_suffix, null, r271_HBar.b(r271_SB, r271_RightSB, r276_yBar));
                    r271_xn$createAndSaveGlyphImpl$2Lrc3c('doubleUnderscore.' + r276_suffix, null, function () {
                        var _r287_t1;
                        var _r287_t0 = this;
                        var r287_currentGlyph = _r287_t0;
                        r287_currentGlyph.include(r271_HBar.b(r271_SB, r271_RightSB, r276_yBar), true, true);
                        r287_currentGlyph.include(r271_HBar.b(r271_SB, r271_RightSB, r276_yBar - r276_openBoxGap));
                        return void 0;
                    });
                    r271_xn$createAndSaveGlyphImpl$2Lrc3c('openBox.' + r276_suffix, null, function () {
                        var _r292_t1;
                        var _r292_t0 = this;
                        var r292_currentGlyph = _r292_t0;
                        r292_currentGlyph.include(r271_HBar.b(r271_SB, r271_RightSB, r276_yBar), true, true);
                        r292_currentGlyph.include(r276_OpenBoxSide(r276_yBar + r271_Stroke / 2));
                        return void 0;
                    });
                    return r271_xn$createAndSaveGlyphImpl$2Lrc3c('openBoxShoulder.' + r276_suffix, null, function () {
                        var _r297_t1;
                        var _r297_t0 = this;
                        var r297_currentGlyph = _r297_t0;
                        r297_currentGlyph.include(r271_HBar.b(r271_SB, r271_RightSB, r276_yBar), true, true);
                        r297_currentGlyph.include(r276_OpenBoxShoulderSide(r276_yBar + r271_Stroke / 2));
                        return void 0;
                    });
                }());
            }
            r271_xn$selectvariant$7Hrq('underscore', '_');
            r271_xn$selectvariant$7Hrq('openBox', 9251, new r271_xn$NamedParameterPair$2Lrc9b('follow', 'underscore'));
            r271_xn$selectvariant$7Hrq('openBoxShoulder', 9085, new r271_xn$NamedParameterPair$2Lrc9b('follow', 'underscore'));
            return r271_xn$selectvariant$7Hrq('doubleUnderscore', 8215, new r271_xn$NamedParameterPair$2Lrc9b('follow', 'underscore'));
        }());
        r271_xn$createAndSaveGlyphImpl$2Lrc3c('hyphen', '-', function () {
            var _r305_t1;
            var _r305_t0 = this;
            var r305_currentGlyph = _r305_t0;
            var r305_df = r271_DivFrame(r271_para.diversityF);
            r305_currentGlyph.setWidth(r305_df.width);
            r305_currentGlyph.include(r271_HBar.m(r305_df.leftSB, r305_df.rightSB, r271_SymbolMid));
            return void 0;
        });
        r271_alias('softhyphen', 173, 'hyphen');
        r271_alias('gpHyphen', 8208, 'hyphen');
        r271_alias('nbHyphen', 8209, 'hyphen');
        r271_alias('hyphenBullet', 8259, 'hyphen');
        r271_xn$createAndSaveGlyphImpl$2Lrc3c('figureDash', 8210, r271_HBar.m(r271_SB, r271_RightSB, r271_SymbolMid));
        r271_xn$createAndSaveGlyphImpl$2Lrc3c('overline', 8254, r271_HBar.t(r271_SB, r271_RightSB, r271_CAP));
        r271_xn$createAndSaveGlyphImpl$2Lrc3c('enDash', 8211, function () {
            var _r312_t1;
            var _r312_t0 = this;
            var r312_currentGlyph = _r312_t0;
            r312_currentGlyph.setWidth(r271_Width);
            r312_currentGlyph.include(r271_HBar.m(r1_mix(0, r271_SB, 0.5), r1_mix(r271_Width, r271_RightSB, 0.5), r271_SymbolMid));
            return void 0;
        });
        (function () {
            var r317_FMosaicWide, r317_MosaicNameSuffix, r317_MosaicWidth, r317_MosaicWidthScalar, _r317_t3, _r317_t5, _r317_t6, _r317_tag7;
            var r317_WidthKinds = [
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
            var _r317_t0 = r317_WidthKinds;
            var _r317_t1 = _r317_t0.length;
            var _r317_t2 = 0;
            var _r317_t4 = _r317_t2 < _r317_t1;
            while (_r317_t4) {
                _r317_t3 = _r317_t0[_r317_t2];
                r317_FMosaicWide = _r317_t3[0];
                r317_MosaicNameSuffix = _r317_t3[1];
                r317_MosaicWidth = _r317_t3[2];
                r317_MosaicWidthScalar = _r317_t3[3];
                (function () {
                    var r320_MosaicDesiredWidth = r271_WideWidth1;
                    var r320_MosaicMiddle = r317_MosaicWidth / 2;
                    var r320_MosaicUnitWidth = r317_MosaicWidth / r317_MosaicWidthScalar;
                    var r320_MangleUnicode = function (r321_unicode, r321__desiredOverride) {
                        var _r321_t0, _r321_t1;
                        return r317_MosaicWidth === (r321__desiredOverride || r320_MosaicDesiredWidth) ? r321_unicode : void 0;
                    };
                    var r320_MangleName = function (r322_name) {
                        var _r322_t0, _r322_t1;
                        return r322_name + r317_MosaicNameSuffix;
                    };
                    var r320_emDashWidth = r271_para.isQuasiProportional && r317_MosaicWidthScalar > 1 ? r271_UPM : r317_MosaicWidth;
                    r271_xn$createAndSaveGlyphImpl$2Lrc3c(r320_MangleName('emDash'), r320_MangleUnicode(8212), function () {
                        var _r325_t1;
                        var _r325_t0 = this;
                        var r325_currentGlyph = _r325_t0;
                        r325_currentGlyph.setWidth(r320_emDashWidth);
                        r325_currentGlyph.include(r271_HBar.m(0, r320_emDashWidth, r271_SymbolMid));
                        return void 0;
                    });
                    return r271_alias(r320_MangleName('horizontalBar'), r320_MangleUnicode(8213), r320_MangleName('emDash'));
                }());
                _r317_t5 = _r317_t2 = _r317_t2 + 1;
                _r317_t4 = _r317_t2 < _r317_t1;
            }
            return _r317_t5;
        }());
        r271_xn$derivemultipartglyphs$7Hrq65('hyphenDieresis', 11802, [
            'figureDash',
            'dieresisAbove'
        ], function (r328_src, r328_sel) {
            var _r328_t0, _r328_t1;
            return function () {
                var _r330_t1;
                var _r330_t0 = this;
                var r330_currentGlyph = _r330_t0;
                r330_currentGlyph.include(r271_xn$referglyph$1aao(r328_src[0]), true, true);
                r330_currentGlyph.include(r271_MarkSet.plus());
                r330_currentGlyph.include(r271_xn$referglyph$1aao(r328_src[1]));
                r330_currentGlyph.include(r271_xn$clearanchors$1aao());
                return void 0;
            };
        });
        return r271_xn$createAndSaveGlyphImpl$2Lrc3c('dblHyphen', 11840, function () {
            var _r337_t1;
            var _r337_t0 = this;
            var r337_currentGlyph = _r337_t0;
            var r337_df = r271_DivFrame(r271_para.diversityF);
            r337_currentGlyph.setWidth(r337_df.width);
            r337_currentGlyph.include(r271_HBar.m(r337_df.leftSB, r337_df.rightSB, r271_SymbolMid + r271_EqualHalfSpace));
            r337_currentGlyph.include(r271_HBar.m(r337_df.leftSB, r337_df.rightSB, r271_SymbolMid - r271_EqualHalfSpace));
            return void 0;
        });
    });
    return void 0;
});
