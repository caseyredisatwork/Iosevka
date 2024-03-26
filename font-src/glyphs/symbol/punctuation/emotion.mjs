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
    r269_xn$Capture_Ext$2Lrc2b['$defineGlyphBlockImpl$'](r269_xn$Capture_Ext$2Lrc2b, 'Symbol-Punctuation-Emotion', function (r270_xn$Capture$2Lrc8, r270_xn$ExportCapture$2Lrc4b) {
        var _r270_t7, _r270_t8, _r270_t9, _r270_tag10, _r270_t11, _r270_tag12;
        var _r270_t0 = r270_xn$Capture$2Lrc8;
        var r270_xn$createAndSaveGlyphImpl$2Lrc3c = _r270_t0['$createAndSaveGlyphImpl$'];
        var r270_xn$NamedParameterPair$2Lrc9b = _r270_t0['$NamedParameterPair$'];
        var r270_xn$assignUnicodeImpl$2Lrc8b = _r270_t0['$assignUnicodeImpl$'];
        var r270_xn$execState$2Lrc0b = _r270_t0['$execState$'];
        var r270_para = _r270_t0.para;
        var r270_DivFrame = _r270_t0.DivFrame;
        var _r270_t1 = r270_xn$Capture$2Lrc8.Metrics;
        var r270_Width = _r270_t1.Width;
        var r270_SB = _r270_t1.SB;
        var r270_CAP = _r270_t1.CAP;
        var r270_XH = _r270_t1.XH;
        var r270_Translate = _r270_t1.Translate;
        var r270_Rotate = _r270_t1.Rotate;
        var r270_TanSlope = _r270_t1.TanSlope;
        var r270_HVContrast = _r270_t1.HVContrast;
        var r270_Downward = _r270_t1.Downward;
        var r270_Rightward = _r270_t1.Rightward;
        var r270_Leftward = _r270_t1.Leftward;
        var r270_O = _r270_t1.O;
        var r270_OX = _r270_t1.OX;
        var r270_Hook = _r270_t1.Hook;
        var r270_Stroke = _r270_t1.Stroke;
        var r270_DotSize = _r270_t1.DotSize;
        var r270_EssQuestion = _r270_t1.EssQuestion;
        var r270_HalfStroke = _r270_t1.HalfStroke;
        var r270_RightSB = _r270_t1.RightSB;
        var r270_Middle = _r270_t1.Middle;
        var r270_DotRadius = _r270_t1.DotRadius;
        var r270_ArchDepthA = _r270_t1.ArchDepthA;
        var r270_ArchDepthB = _r270_t1.ArchDepthB;
        var r270_CorrectionOMidS = _r270_t1.CorrectionOMidS;
        var r270_YSmoothMidR = _r270_t1.YSmoothMidR;
        var r270_YSmoothMidL = _r270_t1.YSmoothMidL;
        var _r270_t2 = r270_xn$Capture$2Lrc8.SpiroFns;
        var r270_g4 = _r270_t2.g4;
        var r270_g2 = _r270_t2.g2;
        var r270_corner = _r270_t2.corner;
        var r270_flat = _r270_t2.flat;
        var r270_curl = _r270_t2.curl;
        var r270_end = _r270_t2.end;
        var r270_straight = _r270_t2.straight;
        var r270_widths = _r270_t2.widths;
        var r270_heading = _r270_t2.heading;
        var r270_alsoThru = _r270_t2.alsoThru;
        var r270_archv = _r270_t2.archv;
        var r270_arcvh = _r270_t2.arcvh;
        var r270_dispiro = _r270_t2.dispiro;
        var _r270_t3 = r270_xn$Capture$2Lrc8.BooleFns;
        var _r270_t4 = r270_xn$Capture$2Lrc8.CommonShapes.resolve();
        var r270_VBar = _r270_t4.VBar;
        var r270_hookstart = _r270_t4.hookstart;
        var r270_FlipAround = _r270_t4.FlipAround;
        var r270_DotVariants = _r270_t4.DotVariants;
        var _r270_t5 = r270_xn$Capture$2Lrc8['Common-Derivatives'].resolve();
        var r270_xn$selectvariant$7Hrq = _r270_t5['select-variant'];
        var r270_xn$referglyph$1aao = _r270_t5['refer-glyph'];
        var r270_alias = _r270_t5.alias;
        var r270_turned = _r270_t5.turned;
        var r270_xn$deriveglyphs$7Hrq = _r270_t5['derive-glyphs'];
        var r270_xn$derivecomposites$7Hrq = _r270_t5['derive-composites'];
        var _r270_t6 = r270_xn$Capture$2Lrc8['Letter-Shared-Shapes'].resolve();
        var r270_RetroflexHook = _r270_t6.RetroflexHook;
        var r270_emotionBottom = Math.max(r270_CAP * 0.3, r270_DotSize * 1.5);
        (function () {
            var r275_suffix, r275_DrawAt, r275_kdr, r275_overshoot, _r275_t2, _r275_t3, _r275_tag4;
            var _r275_t0 = Object.entries(r270_DotVariants)[Symbol.iterator]();
            var _r275_t1 = void 0;
            while (!(_r275_t1 = _r275_t0.next()).done) {
                _r275_t2 = _r275_t1.value;
                r275_suffix = _r275_t2[0];
                r275_DrawAt = _r275_t2[1][0];
                r275_kdr = _r275_t2[1][1];
                r275_overshoot = _r275_t2[1][2];
                _r275_t2[1];
                (function () {
                    var r278_dr = r270_DotRadius * r275_kdr;
                    r270_xn$createAndSaveGlyphImpl$2Lrc3c('exclam.' + r275_suffix, null, function () {
                        var _r281_t1;
                        var _r281_t0 = this;
                        var r281_currentGlyph = _r281_t0;
                        var r281_df = r270_DivFrame(r270_para.diversityF);
                        r281_currentGlyph.setWidth(r281_df.width);
                        r281_currentGlyph.include(r281_df.markSet.capital());
                        r281_currentGlyph.include(r270_VBar.m(r281_df.middle, r1_clamp(0, r270_CAP * 0.4, r270_emotionBottom * 1.18), r270_CAP));
                        r281_currentGlyph.include(r275_DrawAt(r281_df.middle, r278_dr, r278_dr - r275_overshoot));
                        return void 0;
                    });
                    r270_xn$createAndSaveGlyphImpl$2Lrc3c('question/dotPart.' + r275_suffix, null, function () {
                        var _r288_t1;
                        var _r288_t0 = this;
                        var r288_currentGlyph = _r288_t0;
                        r288_currentGlyph.setWidth(0);
                        r288_currentGlyph.include(r275_DrawAt(r270_Middle - r270_Width, r278_dr, r278_dr - r275_overshoot));
                        r288_currentGlyph.setMarkAnchor('cvDecompose', 0 - r270_Width, 0);
                        return void 0;
                    });
                    return r270_xn$createAndSaveGlyphImpl$2Lrc3c('questionDown/dotPart.' + r275_suffix, null, function () {
                        var _r294_t1;
                        var _r294_t0 = this;
                        var r294_currentGlyph = _r294_t0;
                        r294_currentGlyph.setWidth(0);
                        r294_currentGlyph.include(r275_DrawAt(r270_Middle - r270_Width, r270_XH - r278_dr, r278_dr - r275_overshoot));
                        r294_currentGlyph.setMarkAnchor('cvDecompose', 0 - r270_Width, 0);
                        return void 0;
                    });
                }());
            }
            r270_xn$selectvariant$7Hrq('exclam', '!', new r270_xn$NamedParameterPair$2Lrc9b('follow', 'punctuationDot'));
            r270_xn$selectvariant$7Hrq('question/dotPart', new r270_xn$NamedParameterPair$2Lrc9b('follow', 'punctuationDot'));
            r270_xn$selectvariant$7Hrq('questionDown/dotPart', new r270_xn$NamedParameterPair$2Lrc9b('follow', 'punctuationDot'));
            r270_xn$deriveglyphs$7Hrq('retroflexClickHook', 122634, 'exclam', function (r301_src, r301_sel) {
                var _r301_t0, _r301_t1;
                return function () {
                    var _r303_t1;
                    var _r303_t0 = this;
                    var r303_currentGlyph = _r303_t0;
                    var r303_df = r270_DivFrame(r270_para.diversityF);
                    r303_currentGlyph.include(r303_df.markSet.capDesc());
                    r303_currentGlyph.include(r270_xn$referglyph$1aao(r301_src));
                    r303_currentGlyph.include(r270_RetroflexHook.m(new r270_xn$NamedParameterPair$2Lrc9b('x', r303_df.middle), new r270_xn$NamedParameterPair$2Lrc9b('y', 0), new r270_xn$NamedParameterPair$2Lrc9b('yAttach', r270_DotRadius)));
                    return void 0;
                };
            });
            r270_alias('alveolarclick', 451, 'exclam');
            r270_turned('exclamDown', 161, 'exclam', r270_DivFrame(r270_para.diversityF).middle, r270_XH / 2);
            return r270_turned('alveolarpercussive', null, 'exclam', r270_DivFrame(r270_para.diversityF).middle, r270_CAP / 2);
        }());
        return function () {
            var r311_suffix, r311_Body, r311_RevBody, _r311_t2, _r311_t3, _r311_tag4;
            var r311_YConnectT = function (r312_top, r312_emotionBottom) {
                var _r312_t0, _r312_t1;
                return r1_mix(r312_emotionBottom, r312_top - r270_HalfStroke, 0.375);
            };
            var r311_SmoothShape = function (r313_top, r313_emotionBottom, r313_left, r313_right) {
                var _r313_t0, _r313_t1;
                return function () {
                    var _r315_t1;
                    var _r315_t0 = this;
                    var r315_currentGlyph = _r315_t0;
                    var r315_strokeEndCor = Math.hypot(1, r270_TanSlope);
                    r315_currentGlyph.include(r270_dispiro(r270_widths.rhs(), r270_g4(r313_left, r313_top - r270_Hook), r270_hookstart(r313_top - r270_O), r270_g4(r313_right, r313_top - r270_ArchDepthB * 0.9), r270_alsoThru.g2(0.5, 0.45, r270_widths.center(r270_EssQuestion)), r270_straight.down.end(r1_mix(r313_left, r313_right, 0.5) - r270_HalfStroke * r270_HVContrast * r315_strokeEndCor, r313_emotionBottom, r270_widths.lhs.heading(r270_Stroke * r315_strokeEndCor, r270_Downward))));
                    return void 0;
                };
            };
            var r311_RevSmoothShape = function (r317_top, r317_emotionBottom, r317_left, r317_right) {
                var _r317_t0, _r317_t1;
                return function () {
                    var _r319_t1;
                    var _r319_t0 = this;
                    var r319_currentGlyph = _r319_t0;
                    var r319_strokeEndCor = Math.hypot(1, r270_TanSlope);
                    r319_currentGlyph.include(r270_dispiro(r270_widths.lhs(), r270_g4(r317_right, r317_top - r270_Hook), r270_hookstart(r317_top - r270_O), r270_g4(r317_left, r317_top - r270_ArchDepthA * 0.9), r270_alsoThru.g2(0.5, 0.45, r270_widths.center(r270_EssQuestion)), r270_straight.down.end(r1_mix(r317_left, r317_right, 0.5) + r270_HalfStroke * r270_HVContrast * r319_strokeEndCor, r317_emotionBottom, r270_widths.rhs.heading(r270_Stroke * r319_strokeEndCor, r270_Downward))));
                    return void 0;
                };
            };
            var r311_CornerShape = function (r321_top, r321_emotionBottom, r321_left, r321_right) {
                var _r321_t0, _r321_t1;
                return function () {
                    var _r323_t1;
                    var _r323_t0 = this;
                    var r323_currentGlyph = _r323_t0;
                    var r323_questionYConnect = r311_YConnectT(r321_top, r321_emotionBottom);
                    r323_currentGlyph.include(r270_dispiro(r270_widths.rhs(), r270_g4(r321_left, r321_top - r270_Hook), r270_hookstart(r321_top - r270_O), r270_g4(r321_right - r270_OX, r270_YSmoothMidR(r321_top, r323_questionYConnect - r270_Stroke, r270_ArchDepthA, r270_ArchDepthB)), r270_arcvh(), r270_straight.left.end(r1_mix(r321_left, r321_right, 0.5), r323_questionYConnect - r270_Stroke, r270_heading(r270_Leftward))));
                    r323_currentGlyph.include(r270_VBar.m(r1_mix(r321_left, r321_right, 0.5), r321_emotionBottom, r323_questionYConnect));
                    return void 0;
                };
            };
            var r311_RevCornerShape = function (r326_top, r326_emotionBottom, r326_left, r326_right) {
                var _r326_t0, _r326_t1;
                return function () {
                    var _r328_t1;
                    var _r328_t0 = this;
                    var r328_currentGlyph = _r328_t0;
                    var r328_questionYConnect = r311_YConnectT(r326_top, r326_emotionBottom);
                    r328_currentGlyph.include(r270_dispiro(r270_widths.lhs(), r270_g4(r326_right, r326_top - r270_Hook), r270_hookstart(r326_top - r270_O), r270_g4(r326_left + r270_OX, r270_YSmoothMidL(r326_top, r328_questionYConnect - r270_Stroke, r270_ArchDepthA, r270_ArchDepthB)), r270_arcvh(), r270_straight.right.end(r1_mix(r326_left, r326_right, 0.5), r328_questionYConnect - r270_Stroke, r270_heading(r270_Rightward))));
                    r328_currentGlyph.include(r270_VBar.m(r1_mix(r326_left, r326_right, 0.5), r326_emotionBottom, r328_questionYConnect));
                    return void 0;
                };
            };
            var r311_CornerFlatShape = function (r331_top, r331_emotionBottom, r331_left, r331_right) {
                var _r331_t0, _r331_t1;
                return function () {
                    var _r333_t1;
                    var _r333_t0 = this;
                    var r333_currentGlyph = _r333_t0;
                    var r333_questionYConnect = r311_YConnectT(r331_top, r331_emotionBottom);
                    var r333_depth = Math.max(r270_Stroke * 1.5, (r331_right - r331_left) * 0.5);
                    r333_currentGlyph.include(r270_dispiro(r270_widths.rhs(), r270_flat(r1_mix(r331_left, r331_right, 0.125), r331_top, r270_heading(r270_Rightward)), r270_curl(r331_right - r333_depth - r270_CorrectionOMidS, r331_top), r270_archv(), r270_g4(r331_right - r270_OX, r270_YSmoothMidR(r331_top, r333_questionYConnect - r270_Stroke, r270_ArchDepthA, r270_ArchDepthB)), r270_arcvh(), r270_straight.left.end(r1_mix(r331_left, r331_right, 0.5), r333_questionYConnect - r270_Stroke, r270_heading(r270_Leftward))));
                    r333_currentGlyph.include(r270_VBar.m(r1_mix(r331_left, r331_right, 0.5), r331_emotionBottom, r333_questionYConnect));
                    return void 0;
                };
            };
            var r311_RevCornerFlatShape = function (r336_top, r336_emotionBottom, r336_left, r336_right) {
                var _r336_t0, _r336_t1;
                return function () {
                    var _r338_t1;
                    var _r338_t0 = this;
                    var r338_currentGlyph = _r338_t0;
                    var r338_questionYConnect = r311_YConnectT(r336_top, r336_emotionBottom);
                    var r338_depth = Math.max(r270_Stroke * 1.5, (r336_right - r336_left) * 0.5);
                    r338_currentGlyph.include(r270_dispiro(r270_widths.lhs(), r270_flat(r1_mix(r336_right, r336_left, 0.125), r336_top, r270_heading(r270_Leftward)), r270_curl(r336_left + r338_depth + r270_CorrectionOMidS, r336_top), r270_archv(), r270_g4(r336_left + r270_OX, r270_YSmoothMidL(r336_top, r338_questionYConnect - r270_Stroke, r270_ArchDepthA, r270_ArchDepthB)), r270_arcvh(), r270_straight.right.end(r1_mix(r336_left, r336_right, 0.5), r338_questionYConnect - r270_Stroke, r270_heading(r270_Rightward))));
                    r338_currentGlyph.include(r270_VBar.m(r1_mix(r336_left, r336_right, 0.5), r336_emotionBottom, r338_questionYConnect));
                    return void 0;
                };
            };
            var r311_Config = {
                'smooth': [
                    r311_SmoothShape,
                    r311_RevSmoothShape
                ],
                'corner': [
                    r311_CornerShape,
                    r311_RevCornerShape
                ],
                'cornerFlatHooked': [
                    r311_CornerFlatShape,
                    r311_RevCornerFlatShape
                ]
            };
            var _r311_t0 = Object.entries(r311_Config)[Symbol.iterator]();
            var _r311_t1 = void 0;
            while (!(_r311_t1 = _r311_t0.next()).done) {
                _r311_t2 = _r311_t1.value;
                r311_suffix = _r311_t2[0];
                r311_Body = _r311_t2[1][0];
                r311_RevBody = _r311_t2[1][1];
                _r311_t2[1];
                (function () {
                    r270_xn$createAndSaveGlyphImpl$2Lrc3c('question/hookPart.' + r311_suffix, null, function () {
                        var _r346_t1;
                        var _r346_t0 = this;
                        var r346_currentGlyph = _r346_t0;
                        r346_currentGlyph.include(r311_Body(r270_CAP, r270_emotionBottom, r270_SB, r270_RightSB));
                        r346_currentGlyph.setBaseAnchor('cvDecompose', 0, 0);
                        return void 0;
                    });
                    r270_xn$createAndSaveGlyphImpl$2Lrc3c('questionDown/hookPart.' + r311_suffix, null, function () {
                        var _r351_t1;
                        var _r351_t0 = this;
                        var r351_currentGlyph = _r351_t0;
                        r351_currentGlyph.include(r311_Body(r270_CAP, r270_emotionBottom, r270_SB, r270_RightSB));
                        r351_currentGlyph.include(r270_FlipAround(r270_Middle, r270_XH / 2));
                        r351_currentGlyph.setBaseAnchor('cvDecompose', 0, 0);
                        return void 0;
                    });
                    r270_xn$createAndSaveGlyphImpl$2Lrc3c('revQuestion/hookPart.' + r311_suffix, null, function () {
                        var _r357_t1;
                        var _r357_t0 = this;
                        var r357_currentGlyph = _r357_t0;
                        r357_currentGlyph.include(r311_RevBody(r270_CAP, r270_emotionBottom, r270_SB, r270_RightSB));
                        r357_currentGlyph.setBaseAnchor('cvDecompose', 0, 0);
                        return void 0;
                    });
                    var r343_InterroBangBodyImpl = function () {
                        var _r360_t0, _r360_t1;
                        return function () {
                            var _r362_t1;
                            var _r362_t0 = this;
                            var r362_currentGlyph = _r362_t0;
                            var r362_angle = 12 / 180 * Math.PI;
                            r362_currentGlyph.include(r311_Body(r270_CAP, r270_emotionBottom, r1_mix(r270_Middle, r270_SB, 0.75), r270_RightSB));
                            r362_currentGlyph.include(r270_Translate(-r270_Middle, -r270_DotRadius));
                            r362_currentGlyph.include(r270_Rotate(-2 * r362_angle));
                            r362_currentGlyph.include(r270_Translate(r270_Middle, r270_DotRadius));
                            r362_currentGlyph.include(r270_VBar.m(r270_Middle, r270_emotionBottom, r270_CAP));
                            r362_currentGlyph.include(r270_Translate(-r270_Middle, -r270_DotRadius));
                            r362_currentGlyph.include(r270_Rotate(1.2 * r362_angle));
                            r362_currentGlyph.include(r270_Translate(r270_Middle, r270_DotRadius));
                            return void 0;
                        };
                    };
                    r270_xn$createAndSaveGlyphImpl$2Lrc3c('interrobang/bodyPart.' + r311_suffix, null, function () {
                        var _r373_t1;
                        var _r373_t0 = this;
                        var r373_currentGlyph = _r373_t0;
                        r373_currentGlyph.include(r343_InterroBangBodyImpl());
                        r373_currentGlyph.setBaseAnchor('cvDecompose', 0, 0);
                        return void 0;
                    });
                    return r270_xn$createAndSaveGlyphImpl$2Lrc3c('interrobangDown/bodyPart.' + r311_suffix, null, function () {
                        var _r378_t1;
                        var _r378_t0 = this;
                        var r378_currentGlyph = _r378_t0;
                        r378_currentGlyph.include(r343_InterroBangBodyImpl());
                        r378_currentGlyph.include(r270_FlipAround(r270_Middle, r270_XH / 2));
                        r378_currentGlyph.setBaseAnchor('cvDecompose', 0, 0);
                        return void 0;
                    });
                }());
            }
            r270_xn$selectvariant$7Hrq('question/hookPart', new r270_xn$NamedParameterPair$2Lrc9b('follow', 'question'));
            r270_xn$derivecomposites$7Hrq('question', '?', 'question/hookPart', 'question/dotPart');
            r270_xn$selectvariant$7Hrq('questionDown/hookPart', new r270_xn$NamedParameterPair$2Lrc9b('follow', 'question'));
            r270_xn$derivecomposites$7Hrq('questionDown', 191, 'questionDown/hookPart', 'questionDown/dotPart');
            r270_xn$selectvariant$7Hrq('revQuestion/hookPart', new r270_xn$NamedParameterPair$2Lrc9b('follow', 'question'));
            r270_xn$derivecomposites$7Hrq('revQuestion', 11822, 'revQuestion/hookPart', 'question/dotPart');
            r270_alias('symbolForSubstituteFormTwo', 9254, 'revQuestion');
            r270_xn$selectvariant$7Hrq('interrobang/bodyPart', new r270_xn$NamedParameterPair$2Lrc9b('follow', 'question'));
            r270_xn$derivecomposites$7Hrq('interrobang', 8253, 'interrobang/bodyPart', 'question/dotPart');
            r270_xn$selectvariant$7Hrq('interrobangDown/bodyPart', new r270_xn$NamedParameterPair$2Lrc9b('follow', 'question'));
            return r270_xn$derivecomposites$7Hrq('gnaborretni', 11800, 'interrobangDown/bodyPart', 'questionDown/dotPart');
        }();
    });
    return void 0;
});
