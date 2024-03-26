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
var r1_Dotless = _r1_t9.Dotless;
var r1_CvDecompose = _r1_t9.CvDecompose;
var r1_MathSansSerif = _r1_t9.MathSansSerif;
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
    r270_xn$Capture_Ext$2Lrc2b['$defineGlyphBlockImpl$'](r270_xn$Capture_Ext$2Lrc2b, 'Letter-Latin-Upper-I', function (r271_xn$Capture$2Lrc8, r271_xn$ExportCapture$2Lrc4b) {
        var r271_suffix, r271_div, r271_Body, r271_jut, _r271_t10, _r271_t12, _r271_t13, _r271_t14, _r271_tag15;
        var _r271_t0 = r271_xn$Capture$2Lrc8;
        var r271_xn$createAndSaveGlyphImpl$2Lrc3c = _r271_t0['$createAndSaveGlyphImpl$'];
        var r271_xn$NamedParameterPair$2Lrc9b = _r271_t0['$NamedParameterPair$'];
        var r271_xn$assignUnicodeImpl$2Lrc8b = _r271_t0['$assignUnicodeImpl$'];
        var r271_xn$execState$2Lrc0b = _r271_t0['$execState$'];
        var r271_para = _r271_t0.para;
        var r271_MarkSet = _r271_t0.MarkSet;
        var r271_AS_BASE = _r271_t0.AS_BASE;
        var r271_ALSO_METRICS = _r271_t0.ALSO_METRICS;
        var r271_DivFrame = _r271_t0.DivFrame;
        var _r271_t1 = r271_xn$Capture$2Lrc8.Metrics;
        var r271_Width = _r271_t1.Width;
        var r271_SB = _r271_t1.SB;
        var r271_CAP = _r271_t1.CAP;
        var r271_XH = _r271_t1.XH;
        var r271_Ascender = _r271_t1.Ascender;
        var r271_ApparentTranslate = _r271_t1.ApparentTranslate;
        var r271_LongJut = _r271_t1.LongJut;
        var r271_Jut = _r271_t1.Jut;
        var r271_Middle = _r271_t1.Middle;
        var r271_MidJutCenter = _r271_t1.MidJutCenter;
        var _r271_t2 = r271_xn$Capture$2Lrc8.SpiroFns;
        var r271_straight = _r271_t2.straight;
        var _r271_t3 = r271_xn$Capture$2Lrc8.BooleFns;
        var _r271_t4 = r271_xn$Capture$2Lrc8.CommonShapes.resolve();
        var r271_HSerif = _r271_t4.HSerif;
        var r271_HBar = _r271_t4.HBar;
        var r271_VBar = _r271_t4.VBar;
        var r271_PointingTo = _r271_t4.PointingTo;
        var _r271_t5 = r271_xn$Capture$2Lrc8['Common-Derivatives'].resolve();
        var r271_xn$selectvariant$7Hrq = _r271_t5['select-variant'];
        var r271_xn$referglyph$1aao = _r271_t5['refer-glyph'];
        var r271_alias = _r271_t5.alias;
        var r271_xn$linkreducedvariant$5sIl8 = _r271_t5['link-reduced-variant'];
        var _r271_t6 = r271_xn$Capture$2Lrc8['Letter-Shared'].resolve();
        var r271_SetGrekUpperTonos = _r271_t6.SetGrekUpperTonos;
        var r271_CreateAccentedComposition = _r271_t6.CreateAccentedComposition;
        var r271_CreateOgonekComposition = _r271_t6.CreateOgonekComposition;
        var _r271_t7 = r271_xn$Capture$2Lrc8['Mark-Adjustment'].resolve();
        var r271_ExtendAboveBaseAnchors = _r271_t7.ExtendAboveBaseAnchors;
        var r271_ISeriflessShape = function (r276_df, r276_top, r276_bot, r276_jut) {
            var _r276_t0, _r276_t1;
            return function () {
                var _r278_t1;
                var _r278_t0 = this;
                var r278_currentGlyph = _r278_t0;
                r278_currentGlyph.include(r271_VBar.m(r276_df.middle, r276_bot, r276_top));
                return void 0;
            };
        };
        var r271_ISerifShape = function (r280_df, r280_top, r280_bot, r280_jut) {
            var _r280_t0, _r280_t1;
            return function () {
                var _r282_t1;
                var _r282_t0 = this;
                var r282_currentGlyph = _r282_t0;
                r282_currentGlyph.include(r271_VBar.m(r280_df.middle, r280_bot, r280_top));
                r282_currentGlyph.include(r271_HSerif.mb(r280_df.middle, r280_bot, r280_jut * r280_df.div));
                r282_currentGlyph.include(r271_HSerif.mt(r280_df.middle, r280_top, r280_jut * r280_df.div));
                r282_currentGlyph.setBaseAnchor('trailing', r280_df.middle + r280_jut * r280_df.div, r280_bot);
                return void 0;
            };
        };
        var r271_UpperIConfig = {
            'straight': [
                r271_para.diversityI,
                r271_ISeriflessShape,
                r271_LongJut
            ],
            'serifless': [
                r271_para.diversityII,
                r271_ISeriflessShape,
                r271_LongJut
            ],
            'serifed': [
                r271_para.diversityI,
                r271_ISerifShape,
                r271_LongJut
            ],
            'shortSerifed': [
                r271_para.diversityI,
                r271_ISerifShape,
                r271_MidJutCenter
            ]
        };
        var _r271_t8 = Object.entries(r271_UpperIConfig)[Symbol.iterator]();
        var _r271_t9 = void 0;
        while (!(_r271_t9 = _r271_t8.next()).done) {
            _r271_t10 = _r271_t9.value;
            r271_suffix = _r271_t10[0];
            r271_div = _r271_t10[1][0];
            r271_Body = _r271_t10[1][1];
            r271_jut = _r271_t10[1][2];
            _r271_t10[1];
            (function () {
                r271_xn$createAndSaveGlyphImpl$2Lrc3c('I.' + r271_suffix, null, function () {
                    var _r292_t1;
                    var _r292_t0 = this;
                    var r292_currentGlyph = _r292_t0;
                    var r292_df = r271_DivFrame(r271_div);
                    r292_currentGlyph.setWidth(r292_df.width);
                    r292_currentGlyph.include(r292_df.markSet.capital());
                    r292_currentGlyph.include(r271_Body(r292_df, r271_CAP, 0, r271_jut));
                    return void 0;
                });
                r271_xn$createAndSaveGlyphImpl$2Lrc3c('grek/Iota.' + r271_suffix, null, function () {
                    var _r298_t1;
                    var _r298_t0 = this;
                    var r298_currentGlyph = _r298_t0;
                    r298_currentGlyph.include(r271_xn$referglyph$1aao('I.' + r271_suffix), r271_AS_BASE, r271_ALSO_METRICS);
                    r298_currentGlyph.include(r271_SetGrekUpperTonos(0));
                    return void 0;
                });
                r271_xn$createAndSaveGlyphImpl$2Lrc3c('ISideways.' + r271_suffix, null, function () {
                    var _r303_t1;
                    var _r303_t0 = this;
                    var r303_currentGlyph = _r303_t0;
                    var r303_df = r271_DivFrame(r271_XH / r271_Width, 2, r271_XH * 0.1 / r271_SB);
                    r303_currentGlyph.include(r271_PointingTo(r271_Width, r271_XH, r271_Width, 0, function () {
                        var _r305_t0, _r305_t1;
                        return function () {
                            var _r307_t1;
                            var _r307_t0 = this;
                            var r307_currentGlyph = _r307_t0;
                            r307_currentGlyph.include(r271_Body(r303_df, r271_Width - r271_SB, 0, r271_jut));
                            r307_currentGlyph.include(r271_ApparentTranslate(0, 0.5 * r271_SB));
                            return void 0;
                        };
                    }));
                    return void 0;
                });
                return r271_xn$createAndSaveGlyphImpl$2Lrc3c('ILonga.' + r271_suffix, null, function () {
                    var _r312_t1;
                    var _r312_t0 = this;
                    var r312_currentGlyph = _r312_t0;
                    var r312_df = r271_DivFrame(r271_div);
                    r312_currentGlyph.setWidth(r312_df.width);
                    r312_currentGlyph.include(r312_df.markSet.capital());
                    var r312_top = r271_CAP + r271_Ascender - r271_XH;
                    r312_currentGlyph.include(r271_ExtendAboveBaseAnchors(r312_top));
                    r312_currentGlyph.include(r271_Body(r312_df, r312_top, 0, r271_jut));
                    return void 0;
                });
            }());
        }
        r271_xn$selectvariant$7Hrq('I', 'I');
        r271_xn$linkreducedvariant$5sIl8('I/sansSerif', 'I', r1_MathSansSerif);
        r271_xn$selectvariant$7Hrq('grek/Iota', 921, new r271_xn$NamedParameterPair$2Lrc9b('follow', 'I'));
        r271_xn$linkreducedvariant$5sIl8('grek/Iota/sansSerif', 'grek/Iota', r1_MathSansSerif, new r271_xn$NamedParameterPair$2Lrc9b('follow', 'I/sansSerif'));
        r271_alias('cyrl/UkrainianI', 1030, 'I');
        r271_CreateAccentedComposition('cyrl/Yi', 1031, 'I', 'dieresisAbove');
        r271_alias('cyrl/Palochka', 1216, 'I');
        r271_xn$selectvariant$7Hrq('ISideways', 42999, new r271_xn$NamedParameterPair$2Lrc9b('follow', 'I'));
        r271_xn$selectvariant$7Hrq('ILonga', 43006, new r271_xn$NamedParameterPair$2Lrc9b('follow', 'I'));
        r271_xn$createAndSaveGlyphImpl$2Lrc3c('smcpI', 618, function () {
            var _r323_t1;
            var _r323_t0 = this;
            var r323_currentGlyph = _r323_t0;
            var r323_df = r271_DivFrame(r271_para.diversityI);
            r323_currentGlyph.include(r323_df.markSet.e());
            r323_currentGlyph.setWidth(r323_df.width);
            r323_currentGlyph.include(r271_ISerifShape(r323_df, r271_XH, 0, r271_MidJutCenter));
            return void 0;
        });
        var _r271_t11 = r271_xn$Capture$2Lrc8['Letter-Blackboard'].resolve();
        var r271_BBS = _r271_t11.BBS;
        var r271_BBD = _r271_t11.BBD;
        var r271_BBBarCenter = _r271_t11.BBBarCenter;
        r271_xn$createAndSaveGlyphImpl$2Lrc3c('mathbb/I', 120128, function () {
            var _r330_t1;
            var _r330_t0 = this;
            var r330_currentGlyph = _r330_t0;
            r330_currentGlyph.include(r271_MarkSet.capital());
            r330_currentGlyph.include(r271_BBBarCenter(r271_Middle, 0, r271_CAP));
            r330_currentGlyph.include(r271_HBar.t(r271_Middle - r271_BBD / 2 - r271_Jut, r271_Middle + r271_BBD / 2 + r271_Jut, r271_CAP, r271_BBS));
            r330_currentGlyph.include(r271_HBar.b(r271_Middle - r271_BBD / 2 - r271_Jut, r271_Middle + r271_BBD / 2 + r271_Jut, 0, r271_BBS));
            return void 0;
        });
        r271_CreateAccentedComposition('smcpIBarOver', 7547, 'smcpI', 'barOver');
        return r271_CreateOgonekComposition('IOgonek', 302, 'I');
    });
    return void 0;
});
