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
    r270_xn$Capture_Ext$2Lrc2b['$defineGlyphBlockImpl$'](r270_xn$Capture_Ext$2Lrc2b, 'Letter-Latin-Lower-D', function (r271_xn$Capture$2Lrc8, r271_xn$ExportCapture$2Lrc4b) {
        var r271_suffix, r271_Body, r271_topSerif, r271_bottomSerif, r271_fSerif, _r271_t12, _r271_t15, _r271_t17, _r271_t18, _r271_t19, _r271_tag20, _r271_t21, _r271_tag22;
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
        var r271_Ascender = _r271_t1.Ascender;
        var r271_Translate = _r271_t1.Translate;
        var r271_ApparentTranslate = _r271_t1.ApparentTranslate;
        var r271_HVContrast = _r271_t1.HVContrast;
        var r271_Downward = _r271_t1.Downward;
        var r271_O = _r271_t1.O;
        var r271_OX = _r271_t1.OX;
        var r271_Hook = _r271_t1.Hook;
        var r271_SmallArchDepth = _r271_t1.SmallArchDepth;
        var r271_Stroke = _r271_t1.Stroke;
        var r271_VJut = _r271_t1.VJut;
        var r271_HalfStroke = _r271_t1.HalfStroke;
        var r271_RightSB = _r271_t1.RightSB;
        var r271_SideJut = _r271_t1.SideJut;
        var r271_AdviceStroke = _r271_t1.AdviceStroke;
        var r271_OverlayStroke = _r271_t1.OverlayStroke;
        var _r271_t2 = r271_xn$Capture$2Lrc8.SpiroFns;
        var r271_flat = _r271_t2.flat;
        var r271_curl = _r271_t2.curl;
        var r271_widths = _r271_t2.widths;
        var r271_heading = _r271_t2.heading;
        var r271_dispiro = _r271_t2.dispiro;
        var _r271_t3 = r271_xn$Capture$2Lrc8.BooleFns;
        var r271_union = _r271_t3.union;
        var r271_intersection = _r271_t3.intersection;
        var _r271_t4 = r271_xn$Capture$2Lrc8.CommonShapes.resolve();
        var r271_OShapeOutline = _r271_t4.OShapeOutline;
        var r271_HSerif = _r271_t4.HSerif;
        var r271_VSerif = _r271_t4.VSerif;
        var r271_HBar = _r271_t4.HBar;
        var r271_VBar = _r271_t4.VBar;
        var r271_WithTransform = _r271_t4.WithTransform;
        var _r271_t5 = r271_xn$Capture$2Lrc8['Common-Derivatives'].resolve();
        var r271_xn$selectvariant$7Hrq = _r271_t5['select-variant'];
        var r271_xn$referglyph$1aao = _r271_t5['refer-glyph'];
        var r271_alias = _r271_t5.alias;
        var r271_xn$derivecomposites$7Hrq = _r271_t5['derive-composites'];
        var r271_xn$linkreducedvariant$5sIl8 = _r271_t5['link-reduced-variant'];
        var r271_xn$derivemultipartglyphs$7Hrq65 = _r271_t5['derive-multi-part-glyphs'];
        var _r271_t6 = r271_xn$Capture$2Lrc8['Letter-Shared'].resolve();
        var r271_CreateAccentedComposition = _r271_t6.CreateAccentedComposition;
        var _r271_t7 = r271_xn$Capture$2Lrc8['Letter-Shared-Shapes'].resolve();
        var r271_OBarRight = _r271_t7.OBarRight;
        var r271_RightwardTailedBar = _r271_t7.RightwardTailedBar;
        var r271_DToothlessRise = _r271_t7.DToothlessRise;
        var r271_DMBlend = _r271_t7.DMBlend;
        var _r271_t8 = r271_xn$Capture$2Lrc8['Letter-Shared-Shapes'].resolve();
        var r271_CurlyTail = _r271_t8.CurlyTail;
        var r271_LetterBarOverlay = _r271_t8.LetterBarOverlay;
        var r271_SerifFrame = _r271_t8.SerifFrame;
        var _r271_t9 = r271_xn$Capture$2Lrc8['Letter-Shared-Shapes'].resolve();
        var r271_UpwardHookShape = _r271_t9.UpwardHookShape;
        var r271_PalatalHook = _r271_t9.PalatalHook;
        var r271_RetroflexHook = _r271_t9.RetroflexHook;
        var r271_TopHook = _r271_t9.TopHook;
        var r271_ToothedBody = function (r278_df, r278_yTop) {
            var _r278_t0, _r278_t1;
            return r271_union(r271_OBarRight.shape(new r271_xn$NamedParameterPair$2Lrc9b('left', r278_df.leftSB), new r271_xn$NamedParameterPair$2Lrc9b('right', r278_df.rightSB), new r271_xn$NamedParameterPair$2Lrc9b('sw', r278_df.mvs), new r271_xn$NamedParameterPair$2Lrc9b('ada', r278_df.archDepthA(r271_SmallArchDepth, r278_df.mvs)), new r271_xn$NamedParameterPair$2Lrc9b('adb', r278_df.archDepthB(r271_SmallArchDepth, r278_df.mvs))), r271_tagged('rightBar', r271_VBar.r(r278_df.rightSB, 0, r278_yTop)));
        };
        var r271_ToothlessCornerBody = function (r284_df, r284_yTop) {
            var _r284_t0, _r284_t1;
            return r271_union(r271_OBarRight.toothless(new r271_xn$NamedParameterPair$2Lrc9b('left', r284_df.leftSB), new r271_xn$NamedParameterPair$2Lrc9b('right', r284_df.rightSB), new r271_xn$NamedParameterPair$2Lrc9b('sw', r284_df.mvs), new r271_xn$NamedParameterPair$2Lrc9b('rise', r271_DToothlessRise), new r271_xn$NamedParameterPair$2Lrc9b('mBlend', r271_DMBlend), new r271_xn$NamedParameterPair$2Lrc9b('ada', r284_df.archDepthA(r271_SmallArchDepth, r284_df.mvs)), new r271_xn$NamedParameterPair$2Lrc9b('adb', r284_df.archDepthB(r271_SmallArchDepth, r284_df.mvs))), r271_tagged('rightBar', r271_VBar.r(r284_df.rightSB, r271_DToothlessRise, r284_yTop)));
        };
        var r271_ToothlessCornerHBBBody = function (r292_df, r292_yTop) {
            var _r292_t0, _r292_t1;
            return r271_union(r271_OBarRight.toothless(new r271_xn$NamedParameterPair$2Lrc9b('left', r292_df.leftSB), new r271_xn$NamedParameterPair$2Lrc9b('right', r292_df.rightSB), new r271_xn$NamedParameterPair$2Lrc9b('sw', r292_df.mvs), new r271_xn$NamedParameterPair$2Lrc9b('rise', r271_DToothlessRise), new r271_xn$NamedParameterPair$2Lrc9b('mBlend', r271_DMBlend), new r271_xn$NamedParameterPair$2Lrc9b('ada', r292_df.archDepthA(r271_SmallArchDepth, r292_df.mvs)), new r271_xn$NamedParameterPair$2Lrc9b('adb', r292_df.archDepthB(r271_SmallArchDepth, r292_df.mvs))), r271_tagged('rightBar', r271_VBar.r(r292_df.rightSB, 0, r292_yTop)));
        };
        var r271_ToothlessRoundedBody = function (r300_df, r300_yTop) {
            var _r300_t0, _r300_t1;
            return r271_OBarRight.rounded(new r271_xn$NamedParameterPair$2Lrc9b('left', r300_df.leftSB), new r271_xn$NamedParameterPair$2Lrc9b('right', r300_df.rightSB), new r271_xn$NamedParameterPair$2Lrc9b('sw', r300_df.mvs), new r271_xn$NamedParameterPair$2Lrc9b('yTerminal', r300_yTop), new r271_xn$NamedParameterPair$2Lrc9b('ada', r300_df.archDepthA(r271_SmallArchDepth, r300_df.mvs)), new r271_xn$NamedParameterPair$2Lrc9b('adb', r300_df.archDepthB(r271_SmallArchDepth, r300_df.mvs)));
        };
        var r271_ToothlessRoundedHBBBody = function (r307_df, r307_yTop) {
            var _r307_t0, _r307_t1;
            return r271_union(r271_ToothlessRoundedBody(r307_df, r307_yTop), r271_tagged('rightBar', r271_VBar.r(r307_df.rightSB, 0, r307_yTop)));
        };
        var r271_TailedBody = function (r308_df, r308_yTop) {
            var _r308_t0, _r308_t1;
            return r271_union(r271_OBarRight.shape(new r271_xn$NamedParameterPair$2Lrc9b('left', r308_df.leftSB), new r271_xn$NamedParameterPair$2Lrc9b('right', r308_df.rightSB), new r271_xn$NamedParameterPair$2Lrc9b('sw', r308_df.mvs), new r271_xn$NamedParameterPair$2Lrc9b('ada', r308_df.archDepthA(r271_SmallArchDepth, r308_df.mvs)), new r271_xn$NamedParameterPair$2Lrc9b('adb', r308_df.archDepthB(r271_SmallArchDepth, r308_df.mvs))), r271_RightwardTailedBar(r308_df.rightSB, 0, r308_yTop));
        };
        var r271_TopSerif = function (r314_df, r314_yTop) {
            var _r314_t0, _r314_t1;
            return r271_tagged('serifRT', r271_HSerif.lt(r314_df.rightSB - r271_Stroke * r271_HVContrast, r314_yTop, r271_SideJut));
        };
        var r271_BaseSerif = function (r315_df, r315_yTop) {
            var _r315_t0, _r315_t1;
            return r271_tagged('serifRB', r271_HSerif.rb(r315_df.rightSB, 0, r271_SideJut));
        };
        var r271_DConfig = r1_SuffixCfg.weave({
            'toothed': r271_ToothedBody,
            'toothlessCorner': r271_ToothlessCornerBody,
            'toothlessCornerHBB': r271_ToothlessCornerHBBBody,
            'toothlessRounded': r271_ToothlessRoundedBody,
            'toothlessRoundedHBB': r271_ToothlessRoundedHBBBody,
            'tailed': r271_TailedBody
        }, function (r316_body) {
            var _r316_t0, _r316_t1;
            return {
                'serifless': [
                    null,
                    null
                ],
                'topSerifed': [
                    r271_TopSerif,
                    null
                ],
                'bottomSerifed': [
                    null,
                    r271_BaseSerif
                ],
                'serifed': [
                    r271_TopSerif,
                    r271_BaseSerif
                ]
            };
        });
        var _r271_t10 = Object.entries(r271_DConfig)[Symbol.iterator]();
        var _r271_t11 = void 0;
        while (!(_r271_t11 = _r271_t10.next()).done) {
            _r271_t12 = _r271_t11.value;
            r271_suffix = _r271_t12[0];
            r271_Body = _r271_t12[1][0];
            r271_topSerif = _r271_t12[1][1][0];
            r271_bottomSerif = _r271_t12[1][1][1];
            _r271_t12[1][1];
            _r271_t12[1];
            (function () {
                var r319_yOverlay = r1_mix(r271_XH, r271_Ascender - (r271_topSerif ? r271_Stroke : 0), 0.5);
                r271_xn$createAndSaveGlyphImpl$2Lrc3c('d.' + r271_suffix, null, function () {
                    var _r322_t1;
                    var _r322_t0 = this;
                    var r322_currentGlyph = _r322_t0;
                    var r322_df = r271_DivFrame(1);
                    r322_currentGlyph.include(r322_df.markSet.b());
                    r322_currentGlyph.include(r271_Body(r322_df, r271_Ascender));
                    if (r271_topSerif)
                        r322_currentGlyph.include(r271_topSerif(r322_df, r271_Ascender));
                    if (r271_bottomSerif)
                        r322_currentGlyph.include(r271_bottomSerif(r322_df, r271_Ascender));
                    r322_currentGlyph.setBaseAnchor('overlayOnExtension', r322_df.rightSB - 0.5 * r271_Stroke * r271_HVContrast, r319_yOverlay);
                    return void 0;
                });
                r271_xn$createAndSaveGlyphImpl$2Lrc3c('dcroat.' + r271_suffix, null, function () {
                    var _r330_t1;
                    var _r330_t0 = this;
                    var r330_currentGlyph = _r330_t0;
                    var r330_df = r271_DivFrame(1);
                    r330_currentGlyph.include(r271_xn$referglyph$1aao('d.' + r271_suffix), r271_AS_BASE, r271_ALSO_METRICS);
                    r330_currentGlyph.include(r271_LetterBarOverlay.r.in(r330_df.rightSB, r271_XH, r271_Ascender - (r271_topSerif ? r271_Stroke : 0)));
                    return void 0;
                });
                r271_xn$createAndSaveGlyphImpl$2Lrc3c('latn/de.' + r271_suffix, null, function () {
                    var _r335_t1;
                    var _r335_t0 = this;
                    var r335_currentGlyph = _r335_t0;
                    var r335_df = r271_DivFrame(1);
                    r335_currentGlyph.include(r271_xn$referglyph$1aao('d.' + r271_suffix), r271_AS_BASE, r271_ALSO_METRICS);
                    var r335_xLeft = r1_mix(r335_df.rightSB, r335_df.leftSB, 0.9);
                    r335_currentGlyph.include(r271_HBar.t(r335_xLeft, r335_df.rightSB + r271_O, r271_CAP));
                    if (r271_topSerif)
                        r335_currentGlyph.include(r271_VSerif.dl(r335_xLeft, r271_CAP, Math.min(r271_VJut, 0.8 * (r271_Ascender - r271_XH))));
                    return void 0;
                });
                r271_xn$createAndSaveGlyphImpl$2Lrc3c('dHookTop.' + r271_suffix, null, function () {
                    var _r341_t1;
                    var _r341_t0 = this;
                    var r341_currentGlyph = _r341_t0;
                    var r341_df = r271_DivFrame(1);
                    r341_currentGlyph.include(r341_df.markSet.b());
                    r341_currentGlyph.include(r271_Body(r341_df, r271_Ascender - r271_Hook - r271_HalfStroke));
                    r341_currentGlyph.include(r271_TopHook.rBarInner(r341_df.rightSB, 0, r271_Ascender));
                    return void 0;
                });
                return r271_xn$createAndSaveGlyphImpl$2Lrc3c('cyrl/djeKomi.' + r271_suffix, null, function () {
                    var r347_sf2, _r347_t1;
                    var _r347_t0 = this;
                    var r347_currentGlyph = _r347_t0;
                    var r347_df = r271_DivFrame(1, 3);
                    r347_currentGlyph.include(r347_df.markSet.b());
                    var r347_dfHalf = r347_df.slice(3, 2);
                    r347_currentGlyph.include(r271_Body(r347_dfHalf, r271_Ascender));
                    r347_currentGlyph.ejectTagged('rightBar');
                    r347_currentGlyph.include(r271_WithTransform(r271_ApparentTranslate(r347_df.width - r347_dfHalf.width, 0), r271_UpwardHookShape(new r271_xn$NamedParameterPair$2Lrc9b('left', r347_dfHalf.leftSB), new r271_xn$NamedParameterPair$2Lrc9b('right', r347_dfHalf.rightSB), new r271_xn$NamedParameterPair$2Lrc9b('ybegin', r271_Ascender), new r271_xn$NamedParameterPair$2Lrc9b('yend', r271_XH / 2), new r271_xn$NamedParameterPair$2Lrc9b('ada', r347_dfHalf.archDepthA(r271_SmallArchDepth, r347_df.mvs)), new r271_xn$NamedParameterPair$2Lrc9b('adb', r347_dfHalf.archDepthB(r271_SmallArchDepth, r347_df.mvs)), new r271_xn$NamedParameterPair$2Lrc9b('sw', r347_df.mvs))));
                    if (r271_topSerif)
                        r347_currentGlyph.include(r271_topSerif(r347_dfHalf, r271_Ascender));
                    if (r271_bottomSerif) {
                        r347_sf2 = r271_SerifFrame.fromDf(r347_df, r271_XH / 2, 0).slice(1, 2);
                        r347_currentGlyph.include(r347_sf2.rt.full);
                    }
                    return void 0;
                });
            }());
        }
        r271_xn$selectvariant$7Hrq('d', 'd');
        r271_xn$selectvariant$7Hrq('dcroat', 273, new r271_xn$NamedParameterPair$2Lrc9b('follow', 'd'));
        r271_xn$selectvariant$7Hrq('latn/de', 396, new r271_xn$NamedParameterPair$2Lrc9b('follow', 'd'));
        r271_alias('cyrl/deKomi', 1281, 'd');
        r271_xn$linkreducedvariant$5sIl8('d/sansSerif', 'd', r1_MathSansSerif);
        r271_xn$linkreducedvariant$5sIl8('d/phoneticLeft', 'd');
        r271_xn$linkreducedvariant$5sIl8('d/hookBottomBase', 'd');
        r271_CreateAccentedComposition('dTildeOver', 7533, 'd', 'tildeOverOnExension');
        r271_xn$selectvariant$7Hrq('dHookTop', 599);
        r271_xn$linkreducedvariant$5sIl8('dHookTop/hookBottomBase', 'dHookTop');
        r271_xn$selectvariant$7Hrq('cyrl/djeKomi', 1283);
        r271_xn$derivecomposites$7Hrq('dPalatalHook', 7553, 'd/hookBottomBase', r271_PalatalHook.r(new r271_xn$NamedParameterPair$2Lrc9b('xLink', r271_RightSB), new r271_xn$NamedParameterPair$2Lrc9b('x', r271_RightSB + r271_SideJut), new r271_xn$NamedParameterPair$2Lrc9b('y', 0)));
        r271_xn$derivecomposites$7Hrq('dHookBottom', 598, 'd/hookBottomBase', r271_RetroflexHook.rExt(r271_RightSB, 0));
        r271_xn$derivecomposites$7Hrq('dHookTopBottom', 7569, 'dHookTop/hookBottomBase', r271_RetroflexHook.rExt(r271_RightSB, 0));
        r271_xn$derivemultipartglyphs$7Hrq65('dDot', 7691, [
            'd',
            'dotAbove'
        ], function (r366_srcs, r366_gr) {
            var _r366_t0, _r366_t1;
            return function () {
                var _r368_t2;
                var _r368_t1 = this;
                var r368_currentGlyph = _r368_t1;
                var _r368_t0 = r366_srcs;
                var r368_base = _r368_t0[0];
                var r368_mark = _r368_t0[1];
                r368_currentGlyph.include(r271_xn$referglyph$1aao(r368_mark));
                r368_currentGlyph.include(r271_Translate(r271_Width - r271_HalfStroke, 0));
                r368_currentGlyph.include(r271_xn$referglyph$1aao(r368_base), r271_AS_BASE);
                return void 0;
            };
        });
        r271_xn$derivecomposites$7Hrq('dBar', 42952, 'd', r271_HBar.m(r271_SB - r271_OX, r271_RightSB + r271_OX, r271_XH * 0.5, r271_OverlayStroke));
        r271_xn$derivecomposites$7Hrq('currency/dongSign', 8363, 'dcroat', 'sbRsbUnderlineBelow');
        var r271_DCurlyTailConfig = {
            'toothedSerifless': [false],
            'toothedTopSerifed': [true]
        };
        var _r271_t13 = Object.entries(r271_DCurlyTailConfig)[Symbol.iterator]();
        var _r271_t14 = void 0;
        while (!(_r271_t14 = _r271_t13.next()).done) {
            _r271_t15 = _r271_t14.value;
            r271_suffix = _r271_t15[0];
            r271_fSerif = _r271_t15[1][0];
            _r271_t15[1];
            (function () {
                return r271_xn$createAndSaveGlyphImpl$2Lrc3c('dCurlyTail.' + r271_suffix, null, function () {
                    var _r377_t1;
                    var _r377_t0 = this;
                    var r377_currentGlyph = _r377_t0;
                    var r377_fine = r271_AdviceStroke(4);
                    var r377_rinner = r1_clamp(r271_Width * 0.065, r271_XH * 0.05, r377_fine * 0.35);
                    var r377_wide = r271_Stroke;
                    var r377_m1 = Math.min(r271_RightSB, r271_Width - r377_rinner * 2 - r377_fine - r271_OX);
                    var r377_x2 = r1_mix(r271_SB, r377_m1, 0.5);
                    var r377_y2 = 0 - r377_fine - r377_rinner * 1.25;
                    r377_currentGlyph.include(r271_MarkSet.b());
                    r377_currentGlyph.include(r271_OBarRight.shape(new r271_xn$NamedParameterPair$2Lrc9b('left', r271_SB), new r271_xn$NamedParameterPair$2Lrc9b('right', r377_m1)));
                    r377_currentGlyph.include(r271_dispiro(r271_widths.rhs(), r271_flat(r377_m1, r271_Ascender, r271_heading(r271_Downward)), r271_curl(r377_m1, r377_rinner * 2 + r377_fine), r271_CurlyTail(r377_fine, r377_rinner, r377_m1, 0, r377_m1 + r377_rinner * 2 + r377_fine, r377_x2, r377_y2)));
                    if (r271_fSerif)
                        r377_currentGlyph.include(r271_HSerif.lt(r377_m1 - r271_Stroke * r271_HVContrast, r271_Ascender, r271_SideJut));
                    return void 0;
                });
            }());
        }
        r271_xn$selectvariant$7Hrq('dCurlyTail', 545);
        var _r271_t16 = r271_xn$Capture$2Lrc8['Letter-Blackboard'].resolve();
        var r271_BBS = _r271_t16.BBS;
        var r271_BBD = _r271_t16.BBD;
        var r271_BBBarRight = _r271_t16.BBBarRight;
        return r271_xn$createAndSaveGlyphImpl$2Lrc3c('mathbb/d', 120149, function () {
            var _r387_t1;
            var _r387_t0 = this;
            var r387_currentGlyph = _r387_t0;
            r387_currentGlyph.include(r271_MarkSet.b());
            r387_currentGlyph.include(r271_BBBarRight(r271_RightSB, 0, r271_Ascender));
            r387_currentGlyph.include(r271_intersection(r271_OShapeOutline.NoOvershoot(r271_XH, 0, r271_SB, r271_RightSB - r271_BBD - r271_BBS * r271_HVContrast), r271_VBar.l(r271_SB + r271_BBD + r271_OX, 0, r271_XH, r271_BBS)));
            r387_currentGlyph.include(r271_OBarRight.shape(new r271_xn$NamedParameterPair$2Lrc9b('right', r271_RightSB - r271_BBD), new r271_xn$NamedParameterPair$2Lrc9b('sw', r271_BBS)));
            return void 0;
        });
    });
    return void 0;
});
