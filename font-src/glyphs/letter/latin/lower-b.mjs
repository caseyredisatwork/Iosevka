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
    r270_xn$Capture_Ext$2Lrc2b['$defineGlyphBlockImpl$'](r270_xn$Capture_Ext$2Lrc2b, 'Letter-Latin-Lower-B', function (r271_xn$Capture$2Lrc8, r271_xn$ExportCapture$2Lrc4b) {
        var r271_suffix, r271_Body, r271_Serifs, r271_doTS, _r271_t11, _r271_t13, _r271_t14, _r271_t15, _r271_tag16;
        var _r271_t0 = r271_xn$Capture$2Lrc8;
        var r271_xn$createAndSaveGlyphImpl$2Lrc3c = _r271_t0['$createAndSaveGlyphImpl$'];
        var r271_xn$NamedParameterPair$2Lrc9b = _r271_t0['$NamedParameterPair$'];
        var r271_xn$assignUnicodeImpl$2Lrc8b = _r271_t0['$assignUnicodeImpl$'];
        var r271_xn$execState$2Lrc0b = _r271_t0['$execState$'];
        var r271_MarkSet = _r271_t0.MarkSet;
        var r271_AS_BASE = _r271_t0.AS_BASE;
        var r271_ALSO_METRICS = _r271_t0.ALSO_METRICS;
        var r271_tagged = _r271_t0.tagged;
        var _r271_t1 = r271_xn$Capture$2Lrc8.Metrics;
        var r271_Width = _r271_t1.Width;
        var r271_SB = _r271_t1.SB;
        var r271_XH = _r271_t1.XH;
        var r271_Ascender = _r271_t1.Ascender;
        var r271_Translate = _r271_t1.Translate;
        var r271_HVContrast = _r271_t1.HVContrast;
        var r271_O = _r271_t1.O;
        var r271_OX = _r271_t1.OX;
        var r271_Stroke = _r271_t1.Stroke;
        var r271_VJut = _r271_t1.VJut;
        var r271_HalfStroke = _r271_t1.HalfStroke;
        var r271_RightSB = _r271_t1.RightSB;
        var r271_Middle = _r271_t1.Middle;
        var r271_SideJut = _r271_t1.SideJut;
        var r271_SmallArchDepthA = _r271_t1.SmallArchDepthA;
        var r271_CorrectionOMidS = _r271_t1.CorrectionOMidS;
        var r271_OverlayStroke = _r271_t1.OverlayStroke;
        var _r271_t2 = r271_xn$Capture$2Lrc8.SpiroFns;
        var r271_flat = _r271_t2.flat;
        var r271_curl = _r271_t2.curl;
        var r271_widths = _r271_t2.widths;
        var r271_archv = _r271_t2.archv;
        var r271_dispiro = _r271_t2.dispiro;
        var _r271_t3 = r271_xn$Capture$2Lrc8.BooleFns;
        var r271_union = _r271_t3.union;
        var r271_intersection = _r271_t3.intersection;
        var _r271_t4 = r271_xn$Capture$2Lrc8.CommonShapes.resolve();
        var r271_xn$noshape$3cah = _r271_t4['no-shape'];
        var r271_OShapeOutline = _r271_t4.OShapeOutline;
        var r271_HSerif = _r271_t4.HSerif;
        var r271_VSerif = _r271_t4.VSerif;
        var r271_HBar = _r271_t4.HBar;
        var r271_VBar = _r271_t4.VBar;
        var _r271_t5 = r271_xn$Capture$2Lrc8['Common-Derivatives'].resolve();
        var r271_xn$selectvariant$7Hrq = _r271_t5['select-variant'];
        var r271_xn$referglyph$1aao = _r271_t5['refer-glyph'];
        var r271_xn$derivecomposites$7Hrq = _r271_t5['derive-composites'];
        var r271_xn$linkreducedvariant$5sIl8 = _r271_t5['link-reduced-variant'];
        var r271_xn$derivemultipartglyphs$7Hrq65 = _r271_t5['derive-multi-part-glyphs'];
        var _r271_t6 = r271_xn$Capture$2Lrc8['Letter-Shared'].resolve();
        var r271_CreateAccentedComposition = _r271_t6.CreateAccentedComposition;
        var _r271_t7 = r271_xn$Capture$2Lrc8['Letter-Shared-Shapes'].resolve();
        var r271_OBarLeft = _r271_t7.OBarLeft;
        var r271_DToothlessRise = _r271_t7.DToothlessRise;
        var r271_DMBlend = _r271_t7.DMBlend;
        var r271_TopHook = _r271_t7.TopHook;
        var _r271_t8 = r271_xn$Capture$2Lrc8['Letter-Shared-Shapes'].resolve();
        var r271_LetterBarOverlay = _r271_t8.LetterBarOverlay;
        var r271_PalatalHook = _r271_t8.PalatalHook;
        var r271_ToothedBody = function (r277_yTop) {
            var _r277_t0, _r277_t1;
            return r271_union(r271_OBarLeft.shape(), r271_VBar.l(r271_SB, 0, r277_yTop));
        };
        var r271_ToothlessCornerBody = function (r278_yTop) {
            var _r278_t0, _r278_t1;
            return r271_union(r271_OBarLeft.toothless(new r271_xn$NamedParameterPair$2Lrc9b('rise', r271_DToothlessRise), new r271_xn$NamedParameterPair$2Lrc9b('mBlend', r271_DMBlend)), r271_VBar.l(r271_SB, r271_DToothlessRise, r278_yTop));
        };
        var r271_ToothlessRoundedBody = function (r281_yTop) {
            var _r281_t0, _r281_t1;
            return r271_OBarLeft.rounded(new r271_xn$NamedParameterPair$2Lrc9b('yTerminal', r281_yTop));
        };
        var r271_LTSerifs = function () {
            var _r283_t0, _r283_t1;
            return r271_tagged('serifLT', r271_HSerif.lt(r271_SB, r271_Ascender, r271_SideJut));
        };
        var r271_LBSerifs = function () {
            var _r284_t0, _r284_t1;
            return r271_tagged('serifLB', r271_HSerif.lb(r271_SB, 0, r271_SideJut));
        };
        var r271_FullSerifs = function () {
            var _r285_t0, _r285_t1;
            return function () {
                var _r287_t1;
                var _r287_t0 = this;
                var r287_currentGlyph = _r287_t0;
                r287_currentGlyph.include(r271_LTSerifs(), true, true);
                r287_currentGlyph.include(r271_LBSerifs());
                return void 0;
            };
        };
        var r271_BConfig = r1_SuffixCfg.weave({
            'toothed': r271_ToothedBody,
            'toothlessCorner': r271_ToothlessCornerBody,
            'toothlessRounded': r271_ToothlessRoundedBody
        }, {
            'serifless': [
                r271_xn$noshape$3cah,
                false
            ],
            'motionSerifed': [
                r271_LTSerifs,
                true
            ],
            'bottomSerifed': [
                r271_LBSerifs,
                false
            ],
            'serifed': [
                r271_FullSerifs,
                true
            ]
        });
        var _r271_t9 = Object.entries(r271_BConfig)[Symbol.iterator]();
        var _r271_t10 = void 0;
        while (!(_r271_t10 = _r271_t9.next()).done) {
            _r271_t11 = _r271_t10.value;
            r271_suffix = _r271_t11[0];
            r271_Body = _r271_t11[1][0];
            r271_Serifs = _r271_t11[1][1][0];
            r271_doTS = _r271_t11[1][1][1];
            _r271_t11[1][1];
            _r271_t11[1];
            (function () {
                var r292_yOverlay = r1_mix(r271_XH, r271_Ascender - (r271_doTS ? r271_Stroke : 0), 0.5);
                r271_xn$createAndSaveGlyphImpl$2Lrc3c('b.' + r271_suffix, null, function () {
                    var _r295_t1;
                    var _r295_t0 = this;
                    var r295_currentGlyph = _r295_t0;
                    r295_currentGlyph.include(r271_MarkSet.b());
                    r295_currentGlyph.include(r271_Body(r271_Ascender));
                    r295_currentGlyph.include(r271_Serifs());
                    r295_currentGlyph.setBaseAnchor('overlayOnExtension', r271_SB + 0.5 * r271_Stroke * r271_HVContrast, r292_yOverlay);
                    r295_currentGlyph.setBaseAnchor('overlay', r271_Middle, r271_XH / 2);
                    return void 0;
                });
                r271_xn$createAndSaveGlyphImpl$2Lrc3c('bBar.' + r271_suffix, null, function () {
                    var _r303_t1;
                    var _r303_t0 = this;
                    var r303_currentGlyph = _r303_t0;
                    r303_currentGlyph.include(r271_xn$referglyph$1aao('b.' + r271_suffix), r271_AS_BASE, r271_ALSO_METRICS);
                    r303_currentGlyph.include(r271_LetterBarOverlay.l.in(r271_SB, r271_XH, r271_Ascender - (r271_doTS ? r271_Stroke : 0)));
                    return void 0;
                });
                r271_xn$createAndSaveGlyphImpl$2Lrc3c('bSlash.' + r271_suffix, null, function () {
                    var _r308_t1;
                    var _r308_t0 = this;
                    var r308_currentGlyph = _r308_t0;
                    r308_currentGlyph.include(r271_xn$referglyph$1aao('b.' + r271_suffix), r271_AS_BASE, r271_ALSO_METRICS);
                    r308_currentGlyph.include(r271_dispiro(r271_widths.center(r271_OverlayStroke), r271_flat(r1_mix(r271_SB, 0, 0.7), r292_yOverlay - r271_Ascender * 0.1), r271_curl(r1_mix(r271_SB, r271_RightSB, 0.625), r292_yOverlay + r271_Ascender * 0.05)));
                    return void 0;
                });
                r271_xn$createAndSaveGlyphImpl$2Lrc3c('latn/be.' + r271_suffix, null, function () {
                    var _r313_t1;
                    var _r313_t0 = this;
                    var r313_currentGlyph = _r313_t0;
                    r313_currentGlyph.include(r271_xn$referglyph$1aao('b.' + r271_suffix), r271_AS_BASE, r271_ALSO_METRICS);
                    r313_currentGlyph.include(r271_HBar.t(r271_SB - r271_O, r1_mix(r271_SB, r271_RightSB, 0.9), r271_Ascender));
                    if (r271_doTS)
                        r313_currentGlyph.include(r271_VSerif.dr(r1_mix(r271_SB, r271_RightSB, 0.9), r271_Ascender, r271_VJut));
                    return void 0;
                });
                return r271_xn$createAndSaveGlyphImpl$2Lrc3c('bHookTop.' + r271_suffix, null, function () {
                    var _r319_t1;
                    var _r319_t0 = this;
                    var r319_currentGlyph = _r319_t0;
                    r319_currentGlyph.include(r271_MarkSet.b());
                    r319_currentGlyph.include(r271_Body(r271_XH));
                    r319_currentGlyph.include(r271_TopHook.lBarInner(r271_SB, 0, r271_Ascender));
                    r319_currentGlyph.include(r271_Serifs());
                    r319_currentGlyph.ejectTagged('serifLT');
                    return void 0;
                });
            }());
        }
        r271_xn$selectvariant$7Hrq('b', 'b');
        r271_xn$selectvariant$7Hrq('bBar', 384, new r271_xn$NamedParameterPair$2Lrc9b('follow', 'b'));
        r271_xn$selectvariant$7Hrq('bSlash', 9250, new r271_xn$NamedParameterPair$2Lrc9b('follow', 'b'));
        r271_xn$selectvariant$7Hrq('latn/be', 387, new r271_xn$NamedParameterPair$2Lrc9b('follow', 'b'));
        r271_xn$derivecomposites$7Hrq('bPalatalHook', 7552, 'b', r271_PalatalHook.r(new r271_xn$NamedParameterPair$2Lrc9b('x', r1_mix(r271_Middle + r271_CorrectionOMidS, r271_RightSB, 0.75)), new r271_xn$NamedParameterPair$2Lrc9b('y', 0), new r271_xn$NamedParameterPair$2Lrc9b('yAttach', r1_mix(r271_O, r271_SmallArchDepthA, r271_archv.yFromX(0.75)))));
        r271_xn$linkreducedvariant$5sIl8('b/sansSerif', 'b', r1_MathSansSerif);
        r271_CreateAccentedComposition('bTildeOver', 7532, 'b', 'tildeOverOnExension');
        r271_xn$selectvariant$7Hrq('bHookTop', 595);
        r271_xn$derivemultipartglyphs$7Hrq65('bDot', 7683, [
            'b',
            'dotAbove'
        ], function (r331_srcs, r331_gr) {
            var _r331_t0, _r331_t1;
            return function () {
                var _r333_t2;
                var _r333_t1 = this;
                var r333_currentGlyph = _r333_t1;
                var _r333_t0 = r331_srcs;
                var r333_base = _r333_t0[0];
                var r333_mark = _r333_t0[1];
                r333_currentGlyph.include(r271_xn$referglyph$1aao(r333_mark));
                r333_currentGlyph.include(r271_Translate(r271_Width + r271_HalfStroke, 0));
                r333_currentGlyph.include(r271_xn$referglyph$1aao(r333_base), r271_AS_BASE);
                return void 0;
            };
        });
        var _r271_t12 = r271_xn$Capture$2Lrc8['Letter-Blackboard'].resolve();
        var r271_BBS = _r271_t12.BBS;
        var r271_BBD = _r271_t12.BBD;
        var r271_BBBarLeft = _r271_t12.BBBarLeft;
        return r271_xn$createAndSaveGlyphImpl$2Lrc3c('mathbb/b', 120147, function () {
            var _r340_t1;
            var _r340_t0 = this;
            var r340_currentGlyph = _r340_t0;
            r340_currentGlyph.include(r271_MarkSet.b());
            r340_currentGlyph.include(r271_BBBarLeft(r271_SB, 0, r271_Ascender));
            r340_currentGlyph.include(r271_intersection(r271_OShapeOutline.NoOvershoot(r271_XH, 0, r271_SB + r271_BBD + r271_BBS * r271_HVContrast, r271_RightSB), r271_VBar.r(r271_RightSB - r271_BBD - r271_OX, 0, r271_XH, r271_BBS)));
            r340_currentGlyph.include(r271_OBarLeft.shape(new r271_xn$NamedParameterPair$2Lrc9b('left', r271_SB + r271_BBD), new r271_xn$NamedParameterPair$2Lrc9b('sw', r271_BBS)));
            return void 0;
        });
    });
    return void 0;
});
