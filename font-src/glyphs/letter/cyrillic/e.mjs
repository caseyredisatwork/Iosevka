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
    r269_xn$Capture_Ext$2Lrc2b['$defineGlyphBlockImpl$'](r269_xn$Capture_Ext$2Lrc2b, 'Letter-Cyrillic-E', function (r270_xn$Capture$2Lrc8, r270_xn$ExportCapture$2Lrc4b) {
        var r270_suffix, r270_sty, r270_styBot, _r270_t10, _r270_t11, _r270_t12, _r270_t13, _r270_tag14;
        var _r270_t0 = r270_xn$Capture$2Lrc8;
        var r270_xn$createAndSaveGlyphImpl$2Lrc3c = _r270_t0['$createAndSaveGlyphImpl$'];
        var r270_xn$NamedParameterPair$2Lrc9b = _r270_t0['$NamedParameterPair$'];
        var r270_xn$assignUnicodeImpl$2Lrc8b = _r270_t0['$assignUnicodeImpl$'];
        var r270_xn$execState$2Lrc0b = _r270_t0['$execState$'];
        var r270_para = _r270_t0.para;
        var r270_MarkSet = _r270_t0.MarkSet;
        var r270_DivFrame = _r270_t0.DivFrame;
        var _r270_t1 = r270_xn$Capture$2Lrc8.Metrics;
        var r270_Width = _r270_t1.Width;
        var r270_SB = _r270_t1.SB;
        var r270_CAP = _r270_t1.CAP;
        var r270_XH = _r270_t1.XH;
        var r270_ApparentTranslate = _r270_t1.ApparentTranslate;
        var r270_RightSB = _r270_t1.RightSB;
        var r270_ArchDepthA = _r270_t1.ArchDepthA;
        var r270_ArchDepthB = _r270_t1.ArchDepthB;
        var r270_SmallArchDepthA = _r270_t1.SmallArchDepthA;
        var r270_SmallArchDepthB = _r270_t1.SmallArchDepthB;
        var r270_AdviceStroke2 = _r270_t1.AdviceStroke2;
        var _r270_t2 = r270_xn$Capture$2Lrc8.SpiroFns;
        var _r270_t3 = r270_xn$Capture$2Lrc8.BooleFns;
        var _r270_t4 = r270_xn$Capture$2Lrc8.CommonShapes.resolve();
        var r270_HBar = _r270_t4.HBar;
        var r270_WithTransform = _r270_t4.WithTransform;
        var _r270_t5 = r270_xn$Capture$2Lrc8['Common-Derivatives'].resolve();
        var r270_xn$selectvariant$7Hrq = _r270_t5['select-variant'];
        var _r270_t6 = r270_xn$Capture$2Lrc8['Letter-Latin-C'].resolve();
        var r270_CLetterForm = _r270_t6.CLetterForm;
        var r270_CConfig = _r270_t6.CConfig;
        var _r270_t7 = r270_xn$Capture$2Lrc8['Letter-Cyrillic-Iotified-A'].resolve();
        var r270_Iotified = _r270_t7.Iotified;
        var _r270_t8 = Object.entries(r270_CConfig)[Symbol.iterator]();
        var _r270_t9 = void 0;
        while (!(_r270_t9 = _r270_t8.next()).done) {
            _r270_t10 = _r270_t9.value;
            r270_suffix = _r270_t10[0];
            r270_sty = _r270_t10[1][0];
            r270_styBot = _r270_t10[1][1];
            _r270_t10[1];
            (function () {
                r270_xn$createAndSaveGlyphImpl$2Lrc3c('cyrl/E.' + r270_suffix, null, function () {
                    var _r280_t1;
                    var _r280_t0 = this;
                    var r280_currentGlyph = _r280_t0;
                    r280_currentGlyph.include(r270_MarkSet.capital());
                    var r280_lf = r270_CLetterForm(r270_DivFrame(1), r270_sty, r270_styBot, r270_CAP, 0);
                    r280_currentGlyph.include(r280_lf.revFull());
                    r280_currentGlyph.include(r270_HBar.m(r1_mix(r270_SB, r270_RightSB, 0.35), r270_RightSB, r270_CAP / 2, r270_AdviceStroke2(2, 3, r270_CAP)));
                    return void 0;
                });
                r270_xn$createAndSaveGlyphImpl$2Lrc3c('cyrl/e.' + r270_suffix, null, function () {
                    var _r286_t1;
                    var _r286_t0 = this;
                    var r286_currentGlyph = _r286_t0;
                    r286_currentGlyph.include(r270_MarkSet.e());
                    r286_currentGlyph.setBaseAnchor('cvDecompose', 0, 0);
                    var r286_lf = r270_CLetterForm(r270_DivFrame(1), r270_sty, r270_styBot, r270_XH, 0, new r270_xn$NamedParameterPair$2Lrc9b('ada', r270_SmallArchDepthA), new r270_xn$NamedParameterPair$2Lrc9b('adb', r270_SmallArchDepthB));
                    r286_currentGlyph.include(r286_lf.revFull());
                    r286_currentGlyph.include(r270_HBar.m(r1_mix(r270_SB, r270_RightSB, 0.35), r270_RightSB, r270_XH / 2, r270_AdviceStroke2(2, 3, r270_XH)));
                    return void 0;
                });
                r270_xn$createAndSaveGlyphImpl$2Lrc3c('cyrl/Ye.' + r270_suffix, null, function () {
                    var _r295_t1;
                    var _r295_t0 = this;
                    var r295_currentGlyph = _r295_t0;
                    r295_currentGlyph.include(r270_MarkSet.capital());
                    var r295_lf = r270_CLetterForm(r270_DivFrame(1), r270_sty, r270_styBot, r270_CAP, 0);
                    r295_currentGlyph.include(r295_lf.full());
                    r295_currentGlyph.include(r270_HBar.m(r270_SB, r1_mix(r270_RightSB, r270_SB, 0.35), r270_CAP / 2, r270_AdviceStroke2(2, 3, r270_CAP)));
                    return void 0;
                });
                r270_xn$createAndSaveGlyphImpl$2Lrc3c('cyrl/ye.' + r270_suffix, null, function () {
                    var _r301_t1;
                    var _r301_t0 = this;
                    var r301_currentGlyph = _r301_t0;
                    r301_currentGlyph.include(r270_MarkSet.e());
                    r301_currentGlyph.setBaseAnchor('cvDecompose', 0, 0);
                    var r301_lf = r270_CLetterForm(r270_DivFrame(1), r270_sty, r270_styBot, r270_XH, 0, new r270_xn$NamedParameterPair$2Lrc9b('ada', r270_SmallArchDepthA), new r270_xn$NamedParameterPair$2Lrc9b('adb', r270_SmallArchDepthB));
                    r301_currentGlyph.include(r301_lf.full());
                    r301_currentGlyph.include(r270_HBar.m(r270_SB, r1_mix(r270_RightSB, r270_SB, 0.35), r270_XH / 2, r270_AdviceStroke2(2, 3, r270_XH)));
                    return void 0;
                });
                var r277_IotifiedEShape = function (r308_fCapital, r308_df, r308_top, r308_ada, r308_adb) {
                    var _r308_t0, _r308_t1;
                    return function () {
                        var _r310_t1;
                        var _r310_t0 = this;
                        var r310_currentGlyph = _r310_t0;
                        var r310_gap = 0.25 * (r308_df.width - 2 * r308_df.leftSB - 2.5 * r308_df.mvs);
                        var r310_divSub = (r308_df.width - r310_gap - r308_df.mvs) / r270_Width;
                        var r310_dfSub = r270_DivFrame(r310_divSub, 2);
                        var r310_lf = r270_CLetterForm(r310_dfSub, r270_sty, r270_styBot, r308_top, 0, new r270_xn$NamedParameterPair$2Lrc9b('ada', r308_ada), new r270_xn$NamedParameterPair$2Lrc9b('adb', r308_adb), new r270_xn$NamedParameterPair$2Lrc9b('sw', r308_df.mvs));
                        r310_currentGlyph.include(r270_WithTransform(r270_ApparentTranslate(r270_Width * (r308_df.div - r310_divSub), 0), r310_lf.full()));
                        r310_currentGlyph.include(r270_Iotified.full(r308_df, r308_top, new r270_xn$NamedParameterPair$2Lrc9b('hBarRight', r1_mix(r308_df.leftSB, r308_df.rightSB, 3 / 4)), new r270_xn$NamedParameterPair$2Lrc9b('hBarY', r308_top / 2), new r270_xn$NamedParameterPair$2Lrc9b('fCapital', r308_fCapital)));
                        return void 0;
                    };
                };
                r270_xn$createAndSaveGlyphImpl$2Lrc3c('cyrl/EIotified.' + r270_suffix, null, function () {
                    var _r321_t1;
                    var _r321_t0 = this;
                    var r321_currentGlyph = _r321_t0;
                    var r321_df = r270_DivFrame(r270_para.diversityM, 3);
                    r321_currentGlyph.setWidth(r321_df.width);
                    r321_currentGlyph.include(r321_df.markSet.capital());
                    r321_currentGlyph.include(r277_IotifiedEShape(true, r321_df, r270_CAP, r270_ArchDepthA, r270_ArchDepthB));
                    return void 0;
                });
                return r270_xn$createAndSaveGlyphImpl$2Lrc3c('cyrl/eIotified.' + r270_suffix, null, function () {
                    var _r327_t1;
                    var _r327_t0 = this;
                    var r327_currentGlyph = _r327_t0;
                    var r327_df = r270_DivFrame(r270_para.diversityM, 3);
                    r327_currentGlyph.setWidth(r327_df.width);
                    r327_currentGlyph.include(r327_df.markSet.e());
                    r327_currentGlyph.include(r277_IotifiedEShape(false, r327_df, r270_XH, r270_SmallArchDepthA, r270_SmallArchDepthB));
                    return void 0;
                });
            }());
        }
        r270_xn$selectvariant$7Hrq('cyrl/E', 1069, new r270_xn$NamedParameterPair$2Lrc9b('follow', 'C'));
        r270_xn$selectvariant$7Hrq('cyrl/e', 1101, new r270_xn$NamedParameterPair$2Lrc9b('follow', 'c'));
        r270_xn$selectvariant$7Hrq('cyrl/Ye', 1028, new r270_xn$NamedParameterPair$2Lrc9b('follow', 'C'));
        r270_xn$selectvariant$7Hrq('cyrl/ye', 1108, new r270_xn$NamedParameterPair$2Lrc9b('follow', 'c'));
        r270_xn$selectvariant$7Hrq('cyrl/EIotified', 1124, new r270_xn$NamedParameterPair$2Lrc9b('follow', 'C'));
        return r270_xn$selectvariant$7Hrq('cyrl/eIotified', 1125, new r270_xn$NamedParameterPair$2Lrc9b('follow', 'c'));
    });
    return void 0;
});
