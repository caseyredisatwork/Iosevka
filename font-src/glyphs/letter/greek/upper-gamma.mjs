'use strict';
import * as _s0_t0 from '../../../support/utils.mjs';
import * as _s0_t1 from '../../../support/gr.mjs';
import * as _s0_t2 from '../../../meta/aesthetics.mjs';
var _s0_t3;
export {
    _s0_t3 as apply
};
var r1_apply, _r1_t0, _r1_t1, _r1_t2, _r1_t3, _r1_t4, _r1_t5, _r1_t6, _r1_t7;
var _r1_t8 = _s0_t0;
var r1_mix = _r1_t8.mix;
var r1_linreg = _r1_t8.linreg;
var r1_clamp = _r1_t8.clamp;
var r1_fallback = _r1_t8.fallback;
var _r1_t9 = _s0_t1;
var r1_MathSansSerif = _r1_t9.MathSansSerif;
var _r1_t10 = _s0_t2;
var r1_DesignParameters = _r1_t10.DesignParameters;
var r1_xn$GlyphBlocks$2Lrc2b = [];
_s0_t3 = r1_apply = function () {
    var r267_block, _r267_t4, _r267_t6;
    var _r267_t3 = this;
    var _r267_t0 = r1_xn$GlyphBlocks$2Lrc2b;
    var _r267_t1 = _r267_t0.length;
    var _r267_t2 = 0;
    var _r267_t5 = _r267_t2 < _r267_t1;
    while (_r267_t5) {
        _r267_t6 = (r267_block = _r267_t0[_r267_t2], r267_block(_r267_t3), _r267_t2 = _r267_t2 + 1);
        _r267_t5 = _r267_t2 < _r267_t1;
    }
    return _r267_t6;
};
r1_xn$GlyphBlocks$2Lrc2b.push(function (r271_xn$Capture_Ext$2Lrc2b) {
    var _r271_t0, _r271_t1;
    r271_xn$Capture_Ext$2Lrc2b['$defineGlyphBlockImpl$'](r271_xn$Capture_Ext$2Lrc2b, 'Letter-Greek-Upper-Gamma', function (r272_xn$Capture$2Lrc8, r272_xn$ExportCapture$2Lrc4b) {
        var r272_suffix, r272_slabType, r272_doSB, _r272_t13, _r272_t14, _r272_t15, _r272_t16, _r272_tag17;
        var _r272_t0 = r272_xn$Capture$2Lrc8;
        var r272_xn$createAndSaveGlyphImpl$2Lrc3c = _r272_t0['$createAndSaveGlyphImpl$'];
        var r272_xn$NamedParameterPair$2Lrc9b = _r272_t0['$NamedParameterPair$'];
        var r272_xn$assignUnicodeImpl$2Lrc8b = _r272_t0['$assignUnicodeImpl$'];
        var r272_xn$execState$2Lrc0b = _r272_t0['$execState$'];
        var r272_MarkSet = _r272_t0.MarkSet;
        var r272_AS_BASE = _r272_t0.AS_BASE;
        var r272_ALSO_METRICS = _r272_t0.ALSO_METRICS;
        var r272_tagged = _r272_t0.tagged;
        var _r272_t1 = r272_xn$Capture$2Lrc8.Metrics;
        var r272_DesignParameters = _r272_t1.DesignParameters;
        var r272_SB = _r272_t1.SB;
        var r272_CAP = _r272_t1.CAP;
        var r272_XH = _r272_t1.XH;
        var r272_Descender = _r272_t1.Descender;
        var r272_ApparentTranslate = _r272_t1.ApparentTranslate;
        var r272_HVContrast = _r272_t1.HVContrast;
        var r272_O = _r272_t1.O;
        var r272_OX = _r272_t1.OX;
        var r272_Stroke = _r272_t1.Stroke;
        var r272_HBarPos = _r272_t1.HBarPos;
        var r272_OverlayPos = _r272_t1.OverlayPos;
        var r272_LongJut = _r272_t1.LongJut;
        var r272_Jut = _r272_t1.Jut;
        var r272_VJut = _r272_t1.VJut;
        var r272_SLAB = _r272_t1.SLAB;
        var r272_HalfStroke = _r272_t1.HalfStroke;
        var r272_RightSB = _r272_t1.RightSB;
        var r272_SideJut = _r272_t1.SideJut;
        var r272_ArchDepthA = _r272_t1.ArchDepthA;
        var r272_ArchDepthB = _r272_t1.ArchDepthB;
        var r272_MidJutSide = _r272_t1.MidJutSide;
        var _r272_t2 = r272_xn$Capture$2Lrc8.SpiroFns;
        var _r272_t3 = r272_xn$Capture$2Lrc8.BooleFns;
        var _r272_t4 = r272_xn$Capture$2Lrc8.CommonShapes.resolve();
        var r272_HSerif = _r272_t4.HSerif;
        var r272_VSerif = _r272_t4.VSerif;
        var r272_HBar = _r272_t4.HBar;
        var r272_VBar = _r272_t4.VBar;
        var _r272_t5 = r272_xn$Capture$2Lrc8['Common-Derivatives'].resolve();
        var r272_xn$selectvariant$7Hrq = _r272_t5['select-variant'];
        var r272_xn$referglyph$1aao = _r272_t5['refer-glyph'];
        var r272_xn$deriveglyphs$7Hrq = _r272_t5['derive-glyphs'];
        var r272_xn$derivecomposites$7Hrq = _r272_t5['derive-composites'];
        var r272_xn$linkreducedvariant$5sIl8 = _r272_t5['link-reduced-variant'];
        var _r272_t6 = r272_xn$Capture$2Lrc8['Letter-Shared-Shapes'].resolve();
        var r272_CyrDescender = _r272_t6.CyrDescender;
        var r272_MidHook = _r272_t6.MidHook;
        var _r272_t7 = r272_xn$Capture$2Lrc8['Letter-Shared-Shapes'].resolve();
        var r272_LetterBarOverlay = _r272_t7.LetterBarOverlay;
        var r272_PalatalHook = _r272_t7.PalatalHook;
        var _r272_t8 = r272_xn$Capture$2Lrc8['Letter-Blackboard'].resolve();
        var r272_BBS = _r272_t8.BBS;
        var r272_BBD = _r272_t8.BBD;
        var r272_BBBarLeft = _r272_t8.BBBarLeft;
        var _r272_t9 = r272_xn$Capture$2Lrc8['Letter-Latin-Upper-F'].resolve();
        var r272_xMidBarShrink = _r272_t9.xMidBarShrink;
        var _r272_t10 = r272_xn$Capture$2Lrc8['Mark-Adjustment'].resolve();
        var r272_ExtendAboveBaseAnchors = _r272_t10.ExtendAboveBaseAnchors;
        var r272_xn$SLABNONE$5sIl = 0;
        var r272_xn$SLABTR$5sIl = 1;
        var r272_xn$SLABLT$5sIl = 2;
        var r272_xn$SLABBOTTOM$5sIl = 3;
        var r272_xn$SLABALL$5sIl = 4;
        var r272_GammaBarLeft = r272_SB * 1.5;
        var r272_GammaShape = function (r280_top, r280_slabType) {
            var _r280_t0, _r280_t1;
            return function () {
                var _r282_t2;
                var _r282_t1 = this;
                var r282_currentGlyph = _r282_t1;
                r282_currentGlyph.include(r272_VBar.l(r272_GammaBarLeft, 0, r280_top));
                r282_currentGlyph.include(r272_HBar.t(r272_GammaBarLeft - r272_O, r272_RightSB - r272_OX, r280_top));
                var _r282_t0 = r280_slabType;
                if (_r282_t0 === r272_xn$SLABALL$5sIl) {
                    r282_currentGlyph.include(r272_HSerif.lt(r272_GammaBarLeft, r280_top, r272_SideJut));
                    r282_currentGlyph.include(r272_HSerif.lb(r272_GammaBarLeft + r272_HVContrast * r272_HalfStroke, 0, r272_Jut));
                    r282_currentGlyph.include(r272_HSerif.rb(r272_GammaBarLeft + r272_HVContrast * r272_HalfStroke, 0, r272_MidJutSide));
                    r282_currentGlyph.include(r272_tagged('serifRT', r272_VSerif.dr(r272_RightSB - r272_OX, r280_top, r272_VJut)));
                } else if (_r282_t0 === r272_xn$SLABBOTTOM$5sIl) {
                    r282_currentGlyph.include(r272_HSerif.lb(r272_GammaBarLeft + r272_HVContrast * r272_HalfStroke, 0, r272_Jut));
                    r282_currentGlyph.include(r272_HSerif.rb(r272_GammaBarLeft + r272_HVContrast * r272_HalfStroke, 0, r272_MidJutSide));
                } else if (_r282_t0 === r272_xn$SLABLT$5sIl) {
                    r282_currentGlyph.include(r272_HSerif.lt(r272_GammaBarLeft, r280_top, r272_SideJut));
                } else if (_r282_t0 === r272_xn$SLABTR$5sIl) {
                    r282_currentGlyph.include(r272_tagged('serifRT', r272_VSerif.dr(r272_RightSB - r272_OX, r280_top, r272_VJut)));
                } else
                    void 0;
                return void 0;
            };
        };
        var r272_GammaConfig = {
            'serifless': [
                r272_xn$SLABNONE$5sIl,
                false
            ],
            'topLeftSerifed': [
                r272_xn$SLABLT$5sIl,
                false
            ],
            'topRightSerifed': [
                r272_xn$SLABTR$5sIl,
                false
            ],
            'bottomSerifed': [
                r272_xn$SLABBOTTOM$5sIl,
                false
            ],
            'serifed': [
                r272_xn$SLABALL$5sIl,
                true
            ]
        };
        var _r272_t11 = Object.entries(r272_GammaConfig)[Symbol.iterator]();
        var _r272_t12 = void 0;
        while (!(_r272_t12 = _r272_t11.next()).done) {
            _r272_t13 = _r272_t12.value;
            r272_suffix = _r272_t13[0];
            r272_slabType = _r272_t13[1][0];
            r272_doSB = _r272_t13[1][1];
            _r272_t13[1];
            (function () {
                r272_xn$createAndSaveGlyphImpl$2Lrc3c('grek/Gamma.' + r272_suffix, null, function () {
                    var _r298_t1;
                    var _r298_t0 = this;
                    var r298_currentGlyph = _r298_t0;
                    r298_currentGlyph.include(r272_MarkSet.capital());
                    r298_currentGlyph.include(r272_GammaShape(r272_CAP, r272_slabType));
                    return void 0;
                });
                r272_xn$createAndSaveGlyphImpl$2Lrc3c('grek/Digamma.' + r272_suffix, null, function () {
                    var _r303_t1;
                    var _r303_t0 = this;
                    var r303_currentGlyph = _r303_t0;
                    r303_currentGlyph.include(r272_MarkSet.capital());
                    r303_currentGlyph.include(r272_GammaShape(r272_CAP, r272_slabType));
                    var r303_yBar = r272_CAP * r272_DesignParameters.upperEBarPos;
                    r303_currentGlyph.include(r272_HBar.m(r272_GammaBarLeft, r272_RightSB - r272_xMidBarShrink(r272_slabType), r303_yBar));
                    if (r272_slabType)
                        r303_currentGlyph.include(r272_tagged('serifRM', r272_VSerif.dr(r272_RightSB - r272_xMidBarShrink(r272_slabType), r303_yBar + r272_HalfStroke, r1_mix(r272_Stroke, r272_VJut, 0.5))));
                    return void 0;
                });
                r272_xn$createAndSaveGlyphImpl$2Lrc3c('cyrl/GheDescender.' + r272_suffix, null, function () {
                    var _r310_t1;
                    var _r310_t0 = this;
                    var r310_currentGlyph = _r310_t0;
                    r310_currentGlyph.include(r272_xn$referglyph$1aao('grek/Gamma.' + r272_suffix), r272_AS_BASE, r272_ALSO_METRICS);
                    r310_currentGlyph.include(r272_CyrDescender.rSideJut(new r272_xn$NamedParameterPair$2Lrc9b('x', r272_GammaBarLeft + r272_Stroke * r272_HVContrast), new r272_xn$NamedParameterPair$2Lrc9b('y', 0), new r272_xn$NamedParameterPair$2Lrc9b('jut', r272_MidJutSide)));
                    return void 0;
                });
                r272_xn$createAndSaveGlyphImpl$2Lrc3c('cyrl/GheDHook.' + r272_suffix, null, function () {
                    var _r318_t1;
                    var _r318_t0 = this;
                    var r318_currentGlyph = _r318_t0;
                    r318_currentGlyph.include(r272_xn$referglyph$1aao('grek/Gamma.' + r272_suffix), r272_AS_BASE, r272_ALSO_METRICS);
                    r318_currentGlyph.include(r272_PalatalHook.rSideJut(new r272_xn$NamedParameterPair$2Lrc9b('x', r272_GammaBarLeft + r272_Stroke * r272_HVContrast), new r272_xn$NamedParameterPair$2Lrc9b('y', 0), new r272_xn$NamedParameterPair$2Lrc9b('jut', r272_MidJutSide)));
                    return void 0;
                });
                r272_xn$createAndSaveGlyphImpl$2Lrc3c('cyrl/ghe.upright.' + r272_suffix, null, function () {
                    var _r326_t1;
                    var _r326_t0 = this;
                    var r326_currentGlyph = _r326_t0;
                    r326_currentGlyph.include(r272_MarkSet.e());
                    r326_currentGlyph.include(r272_GammaShape(r272_XH, r272_slabType));
                    return void 0;
                });
                r272_xn$createAndSaveGlyphImpl$2Lrc3c('cyrl/gheDescender.upright.' + r272_suffix, null, function () {
                    var _r331_t1;
                    var _r331_t0 = this;
                    var r331_currentGlyph = _r331_t0;
                    r331_currentGlyph.include(r272_xn$referglyph$1aao('cyrl/ghe.upright.' + r272_suffix), r272_AS_BASE, r272_ALSO_METRICS);
                    r331_currentGlyph.include(r272_CyrDescender.rSideJut(new r272_xn$NamedParameterPair$2Lrc9b('x', r272_GammaBarLeft + r272_Stroke * r272_HVContrast), new r272_xn$NamedParameterPair$2Lrc9b('y', 0), new r272_xn$NamedParameterPair$2Lrc9b('jut', r272_MidJutSide)));
                    return void 0;
                });
                r272_xn$createAndSaveGlyphImpl$2Lrc3c('cyrl/gheDHook.upright.' + r272_suffix, null, function () {
                    var _r339_t1;
                    var _r339_t0 = this;
                    var r339_currentGlyph = _r339_t0;
                    r339_currentGlyph.include(r272_xn$referglyph$1aao('cyrl/ghe.upright.' + r272_suffix), r272_AS_BASE, r272_ALSO_METRICS);
                    r339_currentGlyph.include(r272_PalatalHook.rSideJut(new r272_xn$NamedParameterPair$2Lrc9b('x', r272_GammaBarLeft + r272_Stroke * r272_HVContrast), new r272_xn$NamedParameterPair$2Lrc9b('y', 0), new r272_xn$NamedParameterPair$2Lrc9b('jut', r272_MidJutSide)));
                    return void 0;
                });
                r272_xn$createAndSaveGlyphImpl$2Lrc3c('cyrl/Ge.' + r272_suffix, null, function () {
                    var _r347_t1;
                    var _r347_t0 = this;
                    var r347_currentGlyph = _r347_t0;
                    r347_currentGlyph.include(r272_MarkSet.capital());
                    r347_currentGlyph.include(r272_ExtendAboveBaseAnchors(r272_CAP + r272_LongJut - 0.5 * r272_Stroke));
                    r347_currentGlyph.include(r272_GammaShape(r272_CAP, r272_slabType));
                    r347_currentGlyph.ejectTagged('serifRT');
                    r347_currentGlyph.include(r272_VBar.r(r272_RightSB - r272_OX, r272_CAP, r272_CAP + r272_LongJut - 0.5 * r272_Stroke));
                    return void 0;
                });
                r272_xn$createAndSaveGlyphImpl$2Lrc3c('cyrl/ge.upright.' + r272_suffix, null, function () {
                    var _r355_t1;
                    var _r355_t0 = this;
                    var r355_currentGlyph = _r355_t0;
                    r355_currentGlyph.include(r272_MarkSet.e());
                    r355_currentGlyph.include(r272_ExtendAboveBaseAnchors(r272_XH + r272_LongJut - 0.5 * r272_Stroke));
                    r355_currentGlyph.include(r272_GammaShape(r272_XH, r272_slabType));
                    r355_currentGlyph.ejectTagged('serifRT');
                    r355_currentGlyph.include(r272_VBar.r(r272_RightSB - r272_OX, r272_XH, r272_XH + r272_LongJut - 0.5 * r272_Stroke));
                    return void 0;
                });
                return r272_xn$createAndSaveGlyphImpl$2Lrc3c('cyrl/ge.italic.' + r272_suffix, null, function () {
                    var _r363_t1;
                    var _r363_t0 = this;
                    var r363_currentGlyph = _r363_t0;
                    r363_currentGlyph.include(r272_MarkSet.e());
                    r363_currentGlyph.include(r272_ExtendAboveBaseAnchors(r272_XH + r272_LongJut - 0.5 * r272_Stroke));
                    r363_currentGlyph.include(r272_GammaShape(r272_XH, r272_slabType));
                    r363_currentGlyph.ejectTagged('serifRT');
                    r363_currentGlyph.include(r272_VBar.r(r272_RightSB - r272_OX, r272_XH, r272_XH + r272_LongJut - 0.5 * r272_Stroke));
                    return void 0;
                });
            }());
        }
        r272_xn$selectvariant$7Hrq('grek/Gamma', 915);
        r272_xn$linkreducedvariant$5sIl8('grek/Gamma/sansSerif', 'grek/Gamma', r1_MathSansSerif);
        r272_xn$selectvariant$7Hrq('cyrl/Ghe', 1043, new r272_xn$NamedParameterPair$2Lrc9b('shapeFrom', 'grek/Gamma'));
        r272_xn$selectvariant$7Hrq('cyrl/GheDescender', 1270, new r272_xn$NamedParameterPair$2Lrc9b('follow', 'cyrl/Ghe'));
        r272_xn$selectvariant$7Hrq('cyrl/GheDHook', new r272_xn$NamedParameterPair$2Lrc9b('follow', 'cyrl/Ghe'));
        r272_xn$selectvariant$7Hrq('cyrl/Ge', 1168);
        r272_xn$selectvariant$7Hrq('cyrl/ghe.upright');
        r272_xn$selectvariant$7Hrq('cyrl/gheDescender.upright', new r272_xn$NamedParameterPair$2Lrc9b('follow', 'cyrl/ghe.upright'));
        r272_xn$selectvariant$7Hrq('cyrl/gheDHook.upright', new r272_xn$NamedParameterPair$2Lrc9b('follow', 'cyrl/ghe.upright'));
        r272_xn$selectvariant$7Hrq('grek/smcpGamma', 7462, new r272_xn$NamedParameterPair$2Lrc9b('shapeFrom', 'cyrl/ghe.upright'), new r272_xn$NamedParameterPair$2Lrc9b('follow', 'grek/Gamma'));
        r272_xn$selectvariant$7Hrq('cyrl/ge.upright');
        r272_xn$selectvariant$7Hrq('cyrl/ge.italic');
        r272_xn$selectvariant$7Hrq('grek/Digamma', 988, new r272_xn$NamedParameterPair$2Lrc9b('follow', 'grek/Gamma'));
        r272_xn$deriveglyphs$7Hrq('cyrl/GheMidHook', 1172, 'cyrl/Ghe', function (r377_src, r377_gr) {
            var _r377_t0, _r377_t1;
            return function () {
                var _r379_t1;
                var _r379_t0 = this;
                var r379_currentGlyph = _r379_t0;
                r379_currentGlyph.include(r272_xn$referglyph$1aao(r377_src), r272_AS_BASE, r272_ALSO_METRICS);
                r379_currentGlyph.include(r272_MarkSet.capDesc());
                r379_currentGlyph.include(r272_MidHook.general(new r272_xn$NamedParameterPair$2Lrc9b('left', r272_GammaBarLeft + r272_Stroke * r272_HVContrast), new r272_xn$NamedParameterPair$2Lrc9b('right', r272_RightSB), new r272_xn$NamedParameterPair$2Lrc9b('top', r272_CAP * r272_HBarPos + r272_Stroke / 4), new r272_xn$NamedParameterPair$2Lrc9b('ada', r272_ArchDepthA), new r272_xn$NamedParameterPair$2Lrc9b('adb', r272_ArchDepthB)));
                return void 0;
            };
        });
        r272_xn$deriveglyphs$7Hrq('cyrl/gheMidHook', 1173, 'cyrl/ghe.upright', function (r388_src, r388_gr) {
            var _r388_t0, _r388_t1;
            return function () {
                var _r390_t1;
                var _r390_t0 = this;
                var r390_currentGlyph = _r390_t0;
                r390_currentGlyph.include(r272_xn$referglyph$1aao(r388_src), r272_AS_BASE, r272_ALSO_METRICS);
                r390_currentGlyph.include(r272_MarkSet.p());
                r390_currentGlyph.include(r272_MidHook.general(new r272_xn$NamedParameterPair$2Lrc9b('left', r272_GammaBarLeft + r272_Stroke * r272_HVContrast), new r272_xn$NamedParameterPair$2Lrc9b('right', r272_RightSB), new r272_xn$NamedParameterPair$2Lrc9b('top', r272_XH * r272_HBarPos + r272_Stroke / 4), new r272_xn$NamedParameterPair$2Lrc9b('ada', r272_ArchDepthA * Math.pow(r272_HBarPos, 0.3)), new r272_xn$NamedParameterPair$2Lrc9b('adb', r272_ArchDepthB * Math.pow(r272_HBarPos, 0.3))));
                return void 0;
            };
        });
        var r272_GhaynOverlayBar = function (r399_top) {
            var _r399_t0, _r399_t1;
            return r272_LetterBarOverlay.l(r272_GammaBarLeft, r399_top * (1 - r272_OverlayPos));
        };
        r272_xn$derivecomposites$7Hrq('cyrl/Ghayn', 1170, 'cyrl/Ghe', r272_GhaynOverlayBar(r272_CAP));
        r272_xn$derivecomposites$7Hrq('cyrl/ghayn.upright', null, 'cyrl/ghe.upright', r272_GhaynOverlayBar(r272_XH));
        r272_xn$derivecomposites$7Hrq('cyrl/GheStrokeHook', 1274, 'cyrl/GheDHook', r272_GhaynOverlayBar(r272_CAP));
        r272_xn$derivecomposites$7Hrq('cyrl/gheStrokeHook.upright', null, 'cyrl/gheDHook.upright', r272_GhaynOverlayBar(r272_XH));
        r272_xn$createAndSaveGlyphImpl$2Lrc3c('mathbb/grek/Gamma', 8510, function () {
            var _r402_t1;
            var _r402_t0 = this;
            var r402_currentGlyph = _r402_t0;
            r402_currentGlyph.include(r272_MarkSet.capital());
            r402_currentGlyph.include(r272_BBBarLeft(r272_GammaBarLeft, 0, r272_CAP));
            r402_currentGlyph.include(r272_HBar.t(r272_GammaBarLeft, r272_RightSB, r272_CAP, r272_BBS));
            return void 0;
        });
        return r272_xn$createAndSaveGlyphImpl$2Lrc3c('digamma', 989, function () {
            var _r408_t1;
            var _r408_t0 = this;
            var r408_currentGlyph = _r408_t0;
            r408_currentGlyph.include(r272_MarkSet.p());
            r408_currentGlyph.include(r272_GammaShape(r272_XH - r272_Descender, r272_xn$SLABNONE$5sIl));
            r408_currentGlyph.include(r272_ApparentTranslate(0, r272_Descender));
            var r408_yBar = r1_mix(r272_Descender, r272_XH, r272_DesignParameters.upperEBarPos);
            r408_currentGlyph.include(r272_HBar.m(r272_GammaBarLeft, r272_RightSB - r272_xMidBarShrink(r272_SLAB), r408_yBar));
            return void 0;
        });
    });
    return void 0;
});
