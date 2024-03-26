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
    r270_xn$Capture_Ext$2Lrc2b['$defineGlyphBlockImpl$'](r270_xn$Capture_Ext$2Lrc2b, 'Letter-Latin-Lower-P', function (r271_xn$Capture$2Lrc8, r271_xn$ExportCapture$2Lrc4b) {
        var r271_suffix, r271_Body, r271_Serifs, r271_doBS, _r271_t12, _r271_t14, _r271_t15, _r271_t16, _r271_tag17;
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
        var r271_XH = _r271_t1.XH;
        var r271_Descender = _r271_t1.Descender;
        var r271_HVContrast = _r271_t1.HVContrast;
        var r271_O = _r271_t1.O;
        var r271_OX = _r271_t1.OX;
        var r271_Stroke = _r271_t1.Stroke;
        var r271_HalfStroke = _r271_t1.HalfStroke;
        var r271_RightSB = _r271_t1.RightSB;
        var r271_Middle = _r271_t1.Middle;
        var r271_SmallArchDepthA = _r271_t1.SmallArchDepthA;
        var r271_CorrectionOMidS = _r271_t1.CorrectionOMidS;
        var r271_AdviceStroke = _r271_t1.AdviceStroke;
        var r271_MidJutSide = _r271_t1.MidJutSide;
        var _r271_t2 = r271_xn$Capture$2Lrc8.SpiroFns;
        var r271_flat = _r271_t2.flat;
        var r271_curl = _r271_t2.curl;
        var r271_widths = _r271_t2.widths;
        var r271_archv = _r271_t2.archv;
        var r271_dispiro = _r271_t2.dispiro;
        var _r271_t3 = r271_xn$Capture$2Lrc8.BooleFns;
        var r271_intersection = _r271_t3.intersection;
        var _r271_t4 = r271_xn$Capture$2Lrc8.CommonShapes.resolve();
        var r271_xn$noshape$3cah = _r271_t4['no-shape'];
        var r271_OShapeOutline = _r271_t4.OShapeOutline;
        var r271_VBar = _r271_t4.VBar;
        var r271_MaskBelow = _r271_t4.MaskBelow;
        var r271_MaskLeft = _r271_t4.MaskLeft;
        var _r271_t5 = r271_xn$Capture$2Lrc8['Common-Derivatives'].resolve();
        var r271_xn$selectvariant$7Hrq = _r271_t5['select-variant'];
        var r271_xn$referglyph$1aao = _r271_t5['refer-glyph'];
        var r271_xn$deriveglyphs$7Hrq = _r271_t5['derive-glyphs'];
        var r271_xn$linkreducedvariant$5sIl8 = _r271_t5['link-reduced-variant'];
        var _r271_t6 = r271_xn$Capture$2Lrc8['Mark-Adjustment'].resolve();
        var r271_ExtendAboveBaseAnchors = _r271_t6.ExtendAboveBaseAnchors;
        var _r271_t7 = r271_xn$Capture$2Lrc8['Letter-Shared'].resolve();
        var r271_CreateAccentedComposition = _r271_t7.CreateAccentedComposition;
        var _r271_t8 = r271_xn$Capture$2Lrc8['Letter-Shared-Shapes'].resolve();
        var r271_OBarLeft = _r271_t8.OBarLeft;
        var r271_DToothlessRise = _r271_t8.DToothlessRise;
        var r271_DMBlend = _r271_t8.DMBlend;
        var _r271_t9 = r271_xn$Capture$2Lrc8['Letter-Shared-Shapes'].resolve();
        var r271_TopHook = _r271_t9.TopHook;
        var r271_PalatalHook = _r271_t9.PalatalHook;
        var r271_SerifFrame = _r271_t9.SerifFrame;
        var r271_SmallPSerifLT = function () {
            var _r278_t0, _r278_t1;
            return r271_SerifFrame.fromDf(r271_DivFrame(1), r271_XH, r271_Descender).lt.outer;
        };
        var r271_SmallPSerifLB = function () {
            var _r279_t0, _r279_t1;
            return r271_SerifFrame.fromDf(r271_DivFrame(1), r271_XH, r271_Descender).lb.fullSide;
        };
        var r271_EaredBody = function () {
            var _r280_t0, _r280_t1;
            return function () {
                var _r282_t1;
                var _r282_t0 = this;
                var r282_currentGlyph = _r282_t0;
                r282_currentGlyph.include(r271_tagged('bowl', r271_OBarLeft.shape()));
                r282_currentGlyph.include(r271_tagged('stemLeft', r271_VBar.l(r271_SB, r271_Descender, r271_XH)));
                return void 0;
            };
        };
        var r271_EarlessCornerBody = function () {
            var _r285_t0, _r285_t1;
            return function () {
                var _r287_t1;
                var _r287_t0 = this;
                var r287_currentGlyph = _r287_t0;
                r287_currentGlyph.include(r271_tagged('bowl', r271_OBarLeft.toothlessTop(new r271_xn$NamedParameterPair$2Lrc9b('rise', r271_DToothlessRise), new r271_xn$NamedParameterPair$2Lrc9b('mBlend', r271_DMBlend))));
                r287_currentGlyph.include(r271_tagged('stemLeft', r271_VBar.l(r271_SB, r271_Descender, r271_XH - r271_DToothlessRise)));
                return void 0;
            };
        };
        var r271_EarlessRoundedBody = function () {
            var _r292_t0, _r292_t1;
            return function () {
                var _r294_t1;
                var _r294_t0 = this;
                var r294_currentGlyph = _r294_t0;
                r294_currentGlyph.include(r271_tagged('bowl', r271_OBarLeft.roundedTop(new r271_xn$NamedParameterPair$2Lrc9b('yTerminal', r271_Descender))));
                return void 0;
            };
        };
        var r271_FullSerifs = function () {
            var _r297_t0, _r297_t1;
            return function () {
                var _r299_t1;
                var _r299_t0 = this;
                var r299_currentGlyph = _r299_t0;
                r299_currentGlyph.include(r271_SmallPSerifLT());
                r299_currentGlyph.include(r271_SmallPSerifLB());
                return void 0;
            };
        };
        var r271_MotionSerif = function () {
            var _r302_t0, _r302_t1;
            return r271_SmallPSerifLT();
        };
        var r271_BottomSerif = function () {
            var _r303_t0, _r303_t1;
            return r271_SmallPSerifLB();
        };
        var r271_PConfig = r1_SuffixCfg.weave({
            'eared': r271_EaredBody,
            'earlessCorner': r271_EarlessCornerBody,
            'earlessRounded': r271_EarlessRoundedBody
        }, {
            'serifless': [
                r271_xn$noshape$3cah,
                false
            ],
            'motionSerifed': [
                r271_MotionSerif,
                false
            ],
            'bottomSerifed': [
                r271_BottomSerif,
                true
            ],
            'serifed': [
                r271_FullSerifs,
                true
            ]
        });
        var _r271_t10 = Object.entries(r271_PConfig)[Symbol.iterator]();
        var _r271_t11 = void 0;
        while (!(_r271_t11 = _r271_t10.next()).done) {
            _r271_t12 = _r271_t11.value;
            r271_suffix = _r271_t12[0];
            r271_Body = _r271_t12[1][0];
            r271_Serifs = _r271_t12[1][1][0];
            r271_doBS = _r271_t12[1][1][1];
            _r271_t12[1][1];
            _r271_t12[1];
            (function () {
                var r306_yOverlay = r1_mix(0, r271_Descender + (r271_doBS ? r271_Stroke : 0), 0.5);
                r271_xn$createAndSaveGlyphImpl$2Lrc3c('p.' + r271_suffix, null, function () {
                    var _r309_t1;
                    var _r309_t0 = this;
                    var r309_currentGlyph = _r309_t0;
                    r309_currentGlyph.include(r271_MarkSet.p());
                    r309_currentGlyph.include(r271_Body());
                    r309_currentGlyph.include(r271_Serifs());
                    r309_currentGlyph.setBaseAnchor('overlayOnExtension', r271_SB + 0.5 * r271_Stroke * r271_HVContrast, r306_yOverlay);
                    r309_currentGlyph.setBaseAnchor('strike', r271_Middle, r271_XH / 2);
                    return void 0;
                });
                return r271_xn$createAndSaveGlyphImpl$2Lrc3c('pPalatalHook.' + r271_suffix, null, function () {
                    var _r317_t1;
                    var _r317_t0 = this;
                    var r317_currentGlyph = _r317_t0;
                    r317_currentGlyph.include(r271_xn$referglyph$1aao('p.' + r271_suffix), r271_AS_BASE, r271_ALSO_METRICS);
                    var r317_tinyGap = Math.max(r271_Width / 32, r271_AdviceStroke(24));
                    var r317_xMask = Math.max(r271_SB + r271_HVContrast * r271_Stroke + 2 * r317_tinyGap, r271_SB + 0.5 * r271_HVContrast * r271_Stroke + r271_MidJutSide + r317_tinyGap);
                    r317_currentGlyph.include(r271_PalatalHook.r(new r271_xn$NamedParameterPair$2Lrc9b('x', r1_mix(r271_Middle + r271_CorrectionOMidS, r271_RightSB, 0.75)), new r271_xn$NamedParameterPair$2Lrc9b('y', 0), new r271_xn$NamedParameterPair$2Lrc9b('yAttach', r1_mix(r271_O, r271_SmallArchDepthA, r271_archv.yFromX(0.75))), new r271_xn$NamedParameterPair$2Lrc9b('maskOut', r271_intersection(r271_MaskBelow(0), r271_MaskLeft(r317_xMask)))));
                    return void 0;
                });
            }());
        }
        r271_xn$selectvariant$7Hrq('p', 'p');
        r271_xn$linkreducedvariant$5sIl8('p/sansSerif', 'p', r1_MathSansSerif);
        r271_xn$linkreducedvariant$5sIl8('p/hookTopBase', 'p');
        r271_xn$selectvariant$7Hrq('cyrl/er', 1088, new r271_xn$NamedParameterPair$2Lrc9b('shapeFrom', 'p'), new r271_xn$NamedParameterPair$2Lrc9b('follow', 'p'));
        r271_xn$selectvariant$7Hrq('pPalatalHook', 7560, new r271_xn$NamedParameterPair$2Lrc9b('follow', 'p'));
        r271_CreateAccentedComposition('pTildeOver', 7537, 'p', 'tildeOverOnExension');
        r271_xn$deriveglyphs$7Hrq('cyrl/rrTick', 1167, 'cyrl/er', function (r327_src, r327_gr) {
            var _r327_t0, _r327_t1;
            return function () {
                var _r329_t1;
                var _r329_t0 = this;
                var r329_currentGlyph = _r329_t0;
                r329_currentGlyph.include(r271_xn$referglyph$1aao(r327_src), r271_AS_BASE, r271_ALSO_METRICS);
                r329_currentGlyph.include(r271_dispiro(r271_widths.center(r271_AdviceStroke(4)), r271_flat(r1_mix(r271_SB, r271_RightSB, 0.5), r271_HalfStroke + r271_XH * 0.25), r271_curl(r1_mix(r271_SB, r271_RightSB, 0.875), r271_HalfStroke - r271_XH * 0.25)));
                return void 0;
            };
        });
        r271_xn$deriveglyphs$7Hrq('pHookTop', 421, 'p/hookTopBase', function (r332_src, r332_gr) {
            var _r332_t0, _r332_t1;
            return function () {
                var _r334_t1;
                var _r334_t0 = this;
                var r334_currentGlyph = _r334_t0;
                r334_currentGlyph.include(r271_xn$referglyph$1aao(r332_src), r271_AS_BASE, r271_ALSO_METRICS);
                r334_currentGlyph.ejectTagged('serifLT');
                r334_currentGlyph.ejectTagged('stemLeft');
                r334_currentGlyph.include(r271_TopHook.lBarOuter(r271_SB, r271_Descender, r271_XH));
                return void 0;
            };
        });
        var _r271_t13 = r271_xn$Capture$2Lrc8['Letter-Blackboard'].resolve();
        var r271_BBS = _r271_t13.BBS;
        var r271_BBD = _r271_t13.BBD;
        var r271_BBBarLeft = _r271_t13.BBBarLeft;
        return r271_xn$createAndSaveGlyphImpl$2Lrc3c('mathbb/p', 120161, function () {
            var _r342_t1;
            var _r342_t0 = this;
            var r342_currentGlyph = _r342_t0;
            r342_currentGlyph.include(r271_MarkSet.p());
            r342_currentGlyph.include(r271_BBBarLeft(r271_SB, r271_Descender, r271_XH));
            r342_currentGlyph.include(r271_intersection(r271_OShapeOutline.NoOvershoot(r271_XH, 0, r271_SB + r271_BBD + r271_BBS * r271_HVContrast, r271_RightSB), r271_VBar.r(r271_RightSB - r271_BBD - r271_OX, 0, r271_XH, r271_BBS)));
            r342_currentGlyph.include(r271_OBarLeft.shape(new r271_xn$NamedParameterPair$2Lrc9b('left', r271_SB + r271_BBD), new r271_xn$NamedParameterPair$2Lrc9b('sw', r271_BBS)));
            return void 0;
        });
    });
    return void 0;
});
