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
var r1_clamp = _r1_t8.clamp;
var r1_fallback = _r1_t8.fallback;
var r1_SuffixCfg = _r1_t8.SuffixCfg;
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
    r270_xn$Capture_Ext$2Lrc2b['$defineGlyphBlockImpl$'](r270_xn$Capture_Ext$2Lrc2b, 'Letter-Latin-Upper-D', function (r271_xn$Capture$2Lrc8, r271_xn$ExportCapture$2Lrc4b) {
        var r271_suffix, r271_fRound, r271_fSlabTop, r271_fSlabBot, _r271_t9, _r271_t11, _r271_t12, _r271_t13, _r271_tag14;
        var _r271_t0 = r271_xn$Capture$2Lrc8;
        var r271_xn$createAndSaveGlyphImpl$2Lrc3c = _r271_t0['$createAndSaveGlyphImpl$'];
        var r271_xn$NamedParameterPair$2Lrc9b = _r271_t0['$NamedParameterPair$'];
        var r271_xn$assignUnicodeImpl$2Lrc8b = _r271_t0['$assignUnicodeImpl$'];
        var r271_xn$execState$2Lrc0b = _r271_t0['$execState$'];
        var r271_MarkSet = _r271_t0.MarkSet;
        var r271_AS_BASE = _r271_t0.AS_BASE;
        var r271_ALSO_METRICS = _r271_t0.ALSO_METRICS;
        var r271_tagged = _r271_t0.tagged;
        var r271_DivFrame = _r271_t0.DivFrame;
        var _r271_t1 = r271_xn$Capture$2Lrc8.Metrics;
        var r271_Width = _r271_t1.Width;
        var r271_SB = _r271_t1.SB;
        var r271_CAP = _r271_t1.CAP;
        var r271_XH = _r271_t1.XH;
        var r271_ApparentTranslate = _r271_t1.ApparentTranslate;
        var r271_HVContrast = _r271_t1.HVContrast;
        var r271_Rightward = _r271_t1.Rightward;
        var r271_Leftward = _r271_t1.Leftward;
        var r271_O = _r271_t1.O;
        var r271_OX = _r271_t1.OX;
        var r271_ArchDepth = _r271_t1.ArchDepth;
        var r271_Stroke = _r271_t1.Stroke;
        var r271_RightSB = _r271_t1.RightSB;
        var r271_SideJut = _r271_t1.SideJut;
        var r271_CorrectionOMidS = _r271_t1.CorrectionOMidS;
        var r271_OverlayStroke = _r271_t1.OverlayStroke;
        var r271_ArchDepthAOf = _r271_t1.ArchDepthAOf;
        var r271_ArchDepthBOf = _r271_t1.ArchDepthBOf;
        var r271_YSmoothMidR = _r271_t1.YSmoothMidR;
        var _r271_t2 = r271_xn$Capture$2Lrc8.SpiroFns;
        var r271_g4 = _r271_t2.g4;
        var r271_corner = _r271_t2.corner;
        var r271_flat = _r271_t2.flat;
        var r271_curl = _r271_t2.curl;
        var r271_widths = _r271_t2.widths;
        var r271_heading = _r271_t2.heading;
        var r271_archv = _r271_t2.archv;
        var r271_arcvh = _r271_t2.arcvh;
        var r271_dispiro = _r271_t2.dispiro;
        var r271_xn$spirooutline$1aao = _r271_t2['spiro-outline'];
        var _r271_t3 = r271_xn$Capture$2Lrc8.BooleFns;
        var r271_union = _r271_t3.union;
        var r271_intersection = _r271_t3.intersection;
        var _r271_t4 = r271_xn$Capture$2Lrc8.CommonShapes.resolve();
        var r271_HSerif = _r271_t4.HSerif;
        var r271_HBar = _r271_t4.HBar;
        var r271_VBar = _r271_t4.VBar;
        var r271_WithTransform = _r271_t4.WithTransform;
        var _r271_t5 = r271_xn$Capture$2Lrc8['Common-Derivatives'].resolve();
        var r271_xn$selectvariant$7Hrq = _r271_t5['select-variant'];
        var r271_xn$referglyph$1aao = _r271_t5['refer-glyph'];
        var r271_alias = _r271_t5.alias;
        var r271_xn$deriveglyphs$7Hrq = _r271_t5['derive-glyphs'];
        var r271_xn$derivecomposites$7Hrq = _r271_t5['derive-composites'];
        var r271_xn$linkreducedvariant$5sIl8 = _r271_t5['link-reduced-variant'];
        var _r271_t6 = r271_xn$Capture$2Lrc8['Letter-Shared-Shapes'].resolve();
        var r271_LetterBarOverlay = _r271_t6.LetterBarOverlay;
        var r271_LeftHook = _r271_t6.LeftHook;
        var r271_DArcShapeT = function (r275_sink, r275_df, r275_top, r275_right, r275_offset, r275_sw, r275_fRound) {
            var _r275_t0, _r275_t1;
            return function () {
                var _r277_t1;
                var _r277_t0 = this;
                var r277_currentGlyph = _r277_t0;
                var r277_mockWidth = r275_right + (r275_df.width - r275_df.rightSB);
                var r277_maxXSmoothWidth = r277_mockWidth - r275_df.leftSB * 2 - r275_sw * r271_HVContrast;
                var r277_dsmooth = r1_clamp(r275_sw * 1.5, r275_top * 0.499, r275_top / r271_CAP * r271_ArchDepth * 1.1);
                var r277_bsmooth = r1_clamp(r275_sw * 1.5, r277_maxXSmoothWidth, r277_mockWidth / r271_Width * r271_ArchDepth * 1.1);
                var r277_barchDepthRd = r1_clamp(r275_sw * 1.5, r277_maxXSmoothWidth, r277_mockWidth / r271_Width * r271_ArchDepth * 1.25);
                var r277_ada = r271_ArchDepthAOf(r277_dsmooth, r277_mockWidth);
                var r277_adb = r271_ArchDepthBOf(r277_dsmooth, r277_mockWidth);
                if (r275_fRound)
                    r277_currentGlyph.include(r275_sink(r271_widths.rhs(r275_sw), (r275_offset ? r271_corner : r271_flat)(r275_df.leftSB - r271_O, r275_top - r275_offset, r271_heading(r271_Rightward)), r271_curl(r275_right - r277_barchDepthRd - r271_CorrectionOMidS, r275_top - r275_offset), r271_archv(), r271_g4(r275_right - r271_OX - r275_offset, r271_YSmoothMidR(r275_top, 0, r277_ada, r277_adb)), r271_arcvh(), r271_flat(r275_right - r277_barchDepthRd + r271_CorrectionOMidS, r275_offset), (r275_offset ? r271_corner : r271_curl)(r275_df.leftSB - r271_O, r275_offset, r271_heading(r271_Leftward))));
                else
                    r277_currentGlyph.include(r275_sink(r271_widths.rhs(r275_sw), (r275_offset ? r271_corner : r271_flat)(r275_df.leftSB - r271_O, r275_top - r275_offset, r271_heading(r271_Rightward)), r271_curl(r275_right - r277_bsmooth - r271_CorrectionOMidS, r275_top - r275_offset), r271_archv(), r271_flat(r275_right - r271_OX - r275_offset, r275_top - r277_adb), r271_curl(r275_right - r271_OX - r275_offset, 0 + r277_ada), r271_arcvh(), r271_flat(r275_right - r277_bsmooth + r271_CorrectionOMidS, r275_offset), (r275_offset ? r271_corner : r271_curl)(r275_df.leftSB - r271_O, r275_offset, r271_heading(r271_Leftward))));
                return void 0;
            };
        };
        var r271_DShape = function (r280_df, r280_top, r280_right, r280_fRound, r280_slabTop, r280_slabBot) {
            var _r280_t0, _r280_t1;
            return function () {
                var _r282_t1;
                var _r282_t0 = this;
                var r282_currentGlyph = _r282_t0;
                r282_currentGlyph.include(r271_VBar.l(r280_df.leftSB, 0, r280_top, r280_df.mvs));
                r282_currentGlyph.include(r271_DArcShapeT(r271_dispiro, r280_df, r280_top, r280_right, 0, r280_df.mvs, r280_fRound));
                if (r280_slabTop)
                    r282_currentGlyph.include(r271_tagged('serifLT', r271_HSerif.lt(r280_df.leftSB, r280_top, r271_SideJut)));
                if (r280_slabBot)
                    r282_currentGlyph.include(r271_tagged('serifLB', r271_HSerif.lb(r280_df.leftSB, 0, r271_SideJut)));
                return void 0;
            };
        };
        var r271_DConfig = r1_SuffixCfg.weave({
            'standard': false,
            'moreRounded': true
        }, {
            'serifless': [
                false,
                false
            ],
            'unilateralSerifed': [
                true,
                false
            ],
            'bilateralSerifed': [
                true,
                true
            ]
        });
        var _r271_t7 = Object.entries(r271_DConfig)[Symbol.iterator]();
        var _r271_t8 = void 0;
        while (!(_r271_t8 = _r271_t7.next()).done) {
            _r271_t9 = _r271_t8.value;
            r271_suffix = _r271_t9[0];
            r271_fRound = _r271_t9[1][0];
            r271_fSlabTop = _r271_t9[1][1][0];
            r271_fSlabBot = _r271_t9[1][1][1];
            _r271_t9[1][1];
            _r271_t9[1];
            (function () {
                r271_xn$createAndSaveGlyphImpl$2Lrc3c('D.' + r271_suffix, null, function () {
                    var _r292_t1;
                    var _r292_t0 = this;
                    var r292_currentGlyph = _r292_t0;
                    r292_currentGlyph.include(r271_MarkSet.capital());
                    r292_currentGlyph.include(r271_DShape(r271_DivFrame(1), r271_CAP, r271_RightSB, r271_fRound, r271_fSlabTop, r271_fSlabBot));
                    return void 0;
                });
                r271_xn$createAndSaveGlyphImpl$2Lrc3c('smcpD.' + r271_suffix, null, function () {
                    var _r297_t1;
                    var _r297_t0 = this;
                    var r297_currentGlyph = _r297_t0;
                    r297_currentGlyph.include(r271_MarkSet.e());
                    r297_currentGlyph.include(r271_DShape(r271_DivFrame(1), r271_XH, r271_RightSB, r271_fRound, r271_fSlabTop, r271_fSlabBot));
                    return void 0;
                });
                r271_xn$createAndSaveGlyphImpl$2Lrc3c('romanFiveThousand.' + r271_suffix, null, function () {
                    var _r302_t1;
                    var _r302_t0 = this;
                    var r302_currentGlyph = _r302_t0;
                    var r302_df = r271_DivFrame(1, 3);
                    r302_currentGlyph.include(r271_MarkSet.capital());
                    r302_currentGlyph.include(r271_DShape(r302_df, r271_CAP, r302_df.rightSB, r271_fRound, r271_fSlabTop, r271_fSlabBot));
                    r302_currentGlyph.include(r271_WithTransform(r271_ApparentTranslate(0, r271_CAP * 0.2), r271_DShape(r302_df, r271_CAP * 0.6, r302_df.middle + r271_HVContrast * r302_df.mvs * 0.5, r271_fRound)));
                    return void 0;
                });
                return r271_xn$createAndSaveGlyphImpl$2Lrc3c('romanFiftyThousand.' + r271_suffix, null, function () {
                    var _r308_t1;
                    var _r308_t0 = this;
                    var r308_currentGlyph = _r308_t0;
                    var r308_df = r271_DivFrame(1, 4);
                    var r308_innerDist = r308_df.rightSB - r308_df.leftSB - 4 * r308_df.mvs * r271_HVContrast;
                    var r308_arcX1 = r308_df.leftSB + r308_innerDist * (1 / 3) + 2 * r308_df.mvs * r271_HVContrast;
                    var r308_arcX2 = r308_df.leftSB + r308_innerDist * (2 / 3) + 3 * r308_df.mvs * r271_HVContrast;
                    var r308_heightGap = r308_df.mvs + (r271_CAP - r308_df.mvs * 6) / 6;
                    r308_currentGlyph.include(r271_MarkSet.capital());
                    r308_currentGlyph.include(r271_DShape(r308_df, r271_CAP, r308_df.rightSB, r271_fRound, r271_fSlabTop, r271_fSlabBot));
                    r308_currentGlyph.include(r271_WithTransform(r271_ApparentTranslate(0, r308_heightGap), r271_DShape(r308_df, r271_CAP - 2 * r308_heightGap, r308_arcX2, r271_fRound)));
                    r308_currentGlyph.include(r271_WithTransform(r271_ApparentTranslate(0, 2 * r308_heightGap), r271_DShape(r308_df, r271_CAP - 4 * r308_heightGap, r308_arcX1, r271_fRound)));
                    return void 0;
                });
            }());
        }
        r271_xn$selectvariant$7Hrq('D', 'D');
        r271_xn$selectvariant$7Hrq('romanFiveThousand', 8577, new r271_xn$NamedParameterPair$2Lrc9b('follow', 'D'));
        r271_xn$selectvariant$7Hrq('romanFiftyThousand', 8583, new r271_xn$NamedParameterPair$2Lrc9b('follow', 'D'));
        r271_xn$linkreducedvariant$5sIl8('D/sansSerif', 'D', r1_MathSansSerif);
        r271_xn$deriveglyphs$7Hrq('Eth', 208, 'D', function (r315_src, r315_gr) {
            var _r315_t0, _r315_t1;
            return function () {
                var _r317_t1;
                var _r317_t0 = this;
                var r317_currentGlyph = _r317_t0;
                r317_currentGlyph.include(r271_xn$referglyph$1aao(r315_src), r271_AS_BASE, r271_ALSO_METRICS);
                r317_currentGlyph.include(r271_LetterBarOverlay.l.in(r271_SB, r271_Stroke, r271_CAP - r271_Stroke, new r271_xn$NamedParameterPair$2Lrc9b('space', [
                    0,
                    r271_RightSB - r271_Stroke * r271_HVContrast
                ])));
                return void 0;
            };
        });
        r271_alias('Dcroat', 272, 'Eth');
        r271_alias('arficanD', 393, 'Eth');
        r271_xn$derivecomposites$7Hrq('Dbar', 42951, 'D', r271_HBar.m(r271_SB - r271_OX, r271_RightSB + r271_OX, r271_CAP * 0.5, r271_OverlayStroke));
        r271_xn$selectvariant$7Hrq('smcpD', 7429, new r271_xn$NamedParameterPair$2Lrc9b('follow', 'D'));
        r271_xn$deriveglyphs$7Hrq('smcpEth', 7430, 'smcpD', function (r322_src, r322_gr) {
            var _r322_t0, _r322_t1;
            return function () {
                var _r324_t1;
                var _r324_t0 = this;
                var r324_currentGlyph = _r324_t0;
                r324_currentGlyph.include(r271_xn$referglyph$1aao(r322_src), r271_AS_BASE, r271_ALSO_METRICS);
                r324_currentGlyph.include(r271_LetterBarOverlay.l.in(r271_SB, r271_Stroke, r271_XH - r271_Stroke, new r271_xn$NamedParameterPair$2Lrc9b('space', [
                    0,
                    r271_RightSB - r271_Stroke * r271_HVContrast
                ])));
                return void 0;
            };
        });
        r271_xn$deriveglyphs$7Hrq('Dhookleft', 394, 'D', function (r328_src, r328_gr) {
            var _r328_t0, _r328_t1;
            return function () {
                var _r330_t1;
                var _r330_t0 = this;
                var r330_currentGlyph = _r330_t0;
                r330_currentGlyph.include(r271_xn$referglyph$1aao(r328_src), r271_AS_BASE, r271_ALSO_METRICS);
                r330_currentGlyph.ejectTagged('serifLT');
                r330_currentGlyph.include(r271_LeftHook(r271_SB, r271_CAP));
                return void 0;
            };
        });
        var _r271_t10 = r271_xn$Capture$2Lrc8['Letter-Blackboard'].resolve();
        var r271_BBS = _r271_t10.BBS;
        var r271_BBD = _r271_t10.BBD;
        return r271_xn$createAndSaveGlyphImpl$2Lrc3c('mathbb/D', 120123, function () {
            var _r337_t1;
            var _r337_t0 = this;
            var r337_currentGlyph = _r337_t0;
            var r337_df = r271_DivFrame(1);
            r337_currentGlyph.include(r337_df.markSet.capital());
            r337_currentGlyph.include(r271_VBar.l(r337_df.leftSB, 0, r271_CAP, r271_BBS));
            r337_currentGlyph.include(r271_DArcShapeT(r271_dispiro, r337_df, r271_CAP, r337_df.rightSB, 0, r271_BBS, false));
            r337_currentGlyph.include(r271_intersection(r271_DArcShapeT(r271_xn$spirooutline$1aao, r337_df, r271_CAP, r337_df.rightSB, 1, r271_BBS, false), r271_union(r271_VBar.l(r337_df.leftSB + r271_BBD, 0, r271_CAP, r271_BBS), r271_VBar.r(r337_df.rightSB - r271_BBD - r271_OX, 0, r271_CAP, r271_BBS))));
            return void 0;
        });
    });
    return void 0;
});
