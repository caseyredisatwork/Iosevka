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
    r270_xn$Capture_Ext$2Lrc2b['$defineGlyphBlockImpl$'](r270_xn$Capture_Ext$2Lrc2b, 'Letter-Latin-Upper-F', function (r271_xn$Capture$2Lrc8, r271_xn$ExportCapture$2Lrc4b) {
        var r271_suffix, r271_lt, r271_lb, r271_v, _r271_t9, _r271_t11, _r271_t12, _r271_t13, _r271_tag14;
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
        var r271_DesignParameters = _r271_t1.DesignParameters;
        var r271_Width = _r271_t1.Width;
        var r271_SB = _r271_t1.SB;
        var r271_CAP = _r271_t1.CAP;
        var r271_XH = _r271_t1.XH;
        var r271_HVContrast = _r271_t1.HVContrast;
        var r271_O = _r271_t1.O;
        var r271_Stroke = _r271_t1.Stroke;
        var r271_VJut = _r271_t1.VJut;
        var r271_VJutStroke = _r271_t1.VJutStroke;
        var r271_HalfStroke = _r271_t1.HalfStroke;
        var r271_RightSB = _r271_t1.RightSB;
        var r271_Middle = _r271_t1.Middle;
        var r271_SideJut = _r271_t1.SideJut;
        var r271_AdviceStroke2 = _r271_t1.AdviceStroke2;
        var r271_MidJutSide = _r271_t1.MidJutSide;
        var _r271_t2 = r271_xn$Capture$2Lrc8.SpiroFns;
        var _r271_t3 = r271_xn$Capture$2Lrc8.BooleFns;
        var r271_union = _r271_t3.union;
        var r271_difference = _r271_t3.difference;
        var _r271_t4 = r271_xn$Capture$2Lrc8.CommonShapes.resolve();
        var r271_Rect = _r271_t4.Rect;
        var r271_HSerif = _r271_t4.HSerif;
        var r271_VSerif = _r271_t4.VSerif;
        var r271_HBar = _r271_t4.HBar;
        var r271_VBar = _r271_t4.VBar;
        var _r271_t5 = r271_xn$Capture$2Lrc8['Common-Derivatives'].resolve();
        var r271_xn$selectvariant$7Hrq = _r271_t5['select-variant'];
        var r271_xn$referglyph$1aao = _r271_t5['refer-glyph'];
        var r271_turned = _r271_t5.turned;
        var r271_xn$deriveglyphs$7Hrq = _r271_t5['derive-glyphs'];
        var r271_xn$linkreducedvariant$5sIl8 = _r271_t5['link-reduced-variant'];
        var _r271_t6 = r271_xn$Capture$2Lrc8['Letter-Shared-Shapes'].resolve();
        var r271_LetterBarOverlay = _r271_t6.LetterBarOverlay;
        var r271_PalatalHook = _r271_t6.PalatalHook;
        r271_xn$ExportCapture$2Lrc4b(function () {
            var _r276_t0, _r276_t1;
            return { 'xMidBarShrink': r271_xMidBarShrink };
        });
        var r271_xMidBarShrink = function (r277_serifV) {
            var _r277_t0, _r277_t1;
            return Math.max(r271_HalfStroke, (r271_RightSB - r271_SB) * 0.15) + (r277_serifV ? r271_Stroke * 0.25 : 0);
        };
        r271_xn$ExportCapture$2Lrc4b(function () {
            var _r279_t0, _r279_t1;
            return { 'yMidBar': r271_yMidBar };
        });
        var r271_yMidBar = function (r280_top, r280_y) {
            var _r280_t0, _r280_t1;
            return r280_top * r1_fallback(r280_y, r271_DesignParameters.upperEBarPos);
        };
        r271_xn$ExportCapture$2Lrc4b(function () {
            var _r282_t0, _r282_t1;
            return { 'EFVJutLength': r271_EFVJutLength };
        });
        var r271_EFVJutLength = function (r283_top, r283_pyBar, r283_stroke) {
            var _r283_t0, _r283_t1;
            var r283_jutTop = Math.min(r271_VJut, r283_top - r1_mix(r283_top - r283_stroke, r271_yMidBar(r283_top, r283_pyBar) + r283_stroke / 2, 0.5));
            var r283_jutBot = Math.min(r271_VJut, r1_mix(r283_stroke, r271_yMidBar(r283_top, r283_pyBar) - r283_stroke / 2, 0.5));
            return [
                r283_jutTop,
                r283_jutBot
            ];
        };
        var r271_xFBarLeft = r271_SB * 1.5;
        var r271_xFBarRight = r271_Width - r271_SB * 1.5;
        var r271_FShape = function () {
            var _r284_t6;
            var _r284_t7 = arguments;
            var _r284_t0 = [].slice.call(_r284_t7, 0);
            var _r284_t1 = [];
            var _r284_t2 = 0;
            while (_r284_t2 < _r284_t0.length) {
                if (!(_r284_t0[_r284_t2] instanceof r271_xn$NamedParameterPair$2Lrc9b))
                    _r284_t1.push(_r284_t0[_r284_t2]);
                _r284_t2 = _r284_t2 + 1;
            }
            var _r284_t3 = _r284_t0;
            var _r284_t4 = _r284_t3.length;
            var _r284_t5 = 0;
            while (_r284_t5 < _r284_t4) {
                _r284_t2 = _r284_t3[_r284_t5];
                if (_r284_t2 && _r284_t2 instanceof r271_xn$NamedParameterPair$2Lrc9b && _r284_t2.left === 'top')
                    r284_top = _r284_t2.right;
                if (_r284_t2 && _r284_t2 instanceof r271_xn$NamedParameterPair$2Lrc9b && _r284_t2.left === 'pyBar')
                    r284_pyBar = _r284_t2.right;
                if (_r284_t2 && _r284_t2 instanceof r271_xn$NamedParameterPair$2Lrc9b && _r284_t2.left === 'serifLT')
                    r284_serifLT = _r284_t2.right;
                if (_r284_t2 && _r284_t2 instanceof r271_xn$NamedParameterPair$2Lrc9b && _r284_t2.left === 'serifLB')
                    r284_serifLB = _r284_t2.right;
                if (_r284_t2 && _r284_t2 instanceof r271_xn$NamedParameterPair$2Lrc9b && _r284_t2.left === 'serifV')
                    r284_serifV = _r284_t2.right;
                if (_r284_t2 && _r284_t2 instanceof r271_xn$NamedParameterPair$2Lrc9b && _r284_t2.left === 'stroke')
                    r284_stroke = _r284_t2.right;
                _r284_t5 = _r284_t5 + 1;
            }
            var r284_top = r1_fallback(r284_top, _r284_t1[0]);
            var r284_pyBar = r1_fallback(r284_pyBar, _r284_t1[1]);
            var r284_serifLT = r1_fallback(r284_serifLT, _r284_t1[2]);
            var r284_serifLB = r1_fallback(r284_serifLB, _r284_t1[3]);
            var r284_serifV = r1_fallback(r284_serifV, _r284_t1[4]);
            var r284_stroke = r1_fallback(r284_stroke, _r284_t1[5], r271_AdviceStroke2(2, 3, r284_top));
            return function () {
                var r290_jutTop, r290_jutBot, _r290_t0, _r290_t2;
                var _r290_t1 = this;
                var r290_currentGlyph = _r290_t1;
                r290_currentGlyph.include(r271_VBar.l(r271_xFBarLeft, 0, r284_top, r284_stroke));
                r290_currentGlyph.include(r271_HBar.t(r271_xFBarLeft - r271_O, r271_RightSB, r284_top, r284_stroke));
                r290_currentGlyph.include(r271_tagged('crossBar', r271_HBar.m(r271_xFBarLeft - r271_O, r271_RightSB - r271_xMidBarShrink(r284_serifV), r271_yMidBar(r284_top, r284_pyBar), r284_stroke)));
                if (r284_serifLT)
                    r290_currentGlyph.include(r271_HSerif.lt(r271_xFBarLeft, r284_top, r271_SideJut));
                if (r284_serifLB) {
                    r290_currentGlyph.include(r271_tagged('serifBottom', r271_HSerif.lb(r271_xFBarLeft, 0, r271_SideJut)));
                    r290_currentGlyph.include(r271_tagged('serifBottom', r271_HSerif.rb(r271_xFBarLeft + r271_HalfStroke * r271_HVContrast, 0, r271_MidJutSide)));
                }
                if (r284_serifV) {
                    _r290_t0 = r271_EFVJutLength(r284_top, r284_pyBar, r284_stroke);
                    r290_jutTop = _r290_t0[0];
                    r290_jutBot = _r290_t0[1];
                    r290_currentGlyph.include(r271_VSerif.dr(r271_RightSB, r284_top, r290_jutTop));
                }
                return void 0;
            };
        };
        var r271_FConfig = {
            'serifless': [
                false,
                false,
                false
            ],
            'topLeftSerifed': [
                true,
                false,
                false
            ],
            'serifed': [
                true,
                true,
                true
            ]
        };
        var _r271_t7 = Object.entries(r271_FConfig)[Symbol.iterator]();
        var _r271_t8 = void 0;
        while (!(_r271_t8 = _r271_t7.next()).done) {
            _r271_t9 = _r271_t8.value;
            r271_suffix = _r271_t9[0];
            r271_lt = _r271_t9[1][0];
            r271_lb = _r271_t9[1][1];
            r271_v = _r271_t9[1][2];
            _r271_t9[1];
            (function () {
                r271_xn$createAndSaveGlyphImpl$2Lrc3c('F.' + r271_suffix, null, function () {
                    var _r303_t1;
                    var _r303_t0 = this;
                    var r303_currentGlyph = _r303_t0;
                    r303_currentGlyph.include(r271_MarkSet.capital());
                    r303_currentGlyph.include(r271_FShape(r271_CAP, new r271_xn$NamedParameterPair$2Lrc9b('serifLT', r271_lt), new r271_xn$NamedParameterPair$2Lrc9b('serifLB', r271_lb), new r271_xn$NamedParameterPair$2Lrc9b('serifV', r271_v)));
                    return void 0;
                });
                r271_xn$createAndSaveGlyphImpl$2Lrc3c('currency/frenchFrancSign.' + r271_suffix, null, function () {
                    var _r311_t1;
                    var _r311_t0 = this;
                    var r311_currentGlyph = _r311_t0;
                    r311_currentGlyph.include(r271_xn$referglyph$1aao('F.' + r271_suffix), r271_AS_BASE, r271_ALSO_METRICS);
                    r311_currentGlyph.ejectTagged('crossBar');
                    r311_currentGlyph.include(r271_LetterBarOverlay.l.in(new r271_xn$NamedParameterPair$2Lrc9b('x', r271_xFBarLeft), new r271_xn$NamedParameterPair$2Lrc9b('bot', 0), new r271_xn$NamedParameterPair$2Lrc9b('top', r271_CAP), new r271_xn$NamedParameterPair$2Lrc9b('py', 0.375)));
                    r311_currentGlyph.include(r271_LetterBarOverlay.l.in(new r271_xn$NamedParameterPair$2Lrc9b('x', r271_xFBarLeft), new r271_xn$NamedParameterPair$2Lrc9b('bot', 0), new r271_xn$NamedParameterPair$2Lrc9b('top', r271_CAP - r271_Stroke), new r271_xn$NamedParameterPair$2Lrc9b('py', 0.625)));
                    return void 0;
                });
                r271_xn$createAndSaveGlyphImpl$2Lrc3c('FBar.' + r271_suffix, null, function () {
                    var _r326_t1;
                    var _r326_t0 = this;
                    var r326_currentGlyph = _r326_t0;
                    r326_currentGlyph.include(r271_xn$referglyph$1aao('F.' + r271_suffix), r271_AS_BASE, r271_ALSO_METRICS);
                    r326_currentGlyph.include(r271_LetterBarOverlay.l.in(new r271_xn$NamedParameterPair$2Lrc9b('x', r271_xFBarLeft), new r271_xn$NamedParameterPair$2Lrc9b('bot', r271_yMidBar(r271_CAP) + r271_HalfStroke), new r271_xn$NamedParameterPair$2Lrc9b('top', r271_CAP - r271_Stroke), new r271_xn$NamedParameterPair$2Lrc9b('space', [
                        0,
                        r271_RightSB - (r271_v ? r271_VJutStroke * r271_HVContrast : 0)
                    ])));
                    return void 0;
                });
                return r271_xn$createAndSaveGlyphImpl$2Lrc3c('smcpF.' + r271_suffix, null, function () {
                    var _r335_t1;
                    var _r335_t0 = this;
                    var r335_currentGlyph = _r335_t0;
                    r335_currentGlyph.include(r271_MarkSet.e());
                    r335_currentGlyph.include(r271_FShape(r271_XH, new r271_xn$NamedParameterPair$2Lrc9b('serifLT', r271_lt), new r271_xn$NamedParameterPair$2Lrc9b('serifLB', r271_lb), new r271_xn$NamedParameterPair$2Lrc9b('serifV', r271_v)));
                    return void 0;
                });
            }());
        }
        r271_xn$selectvariant$7Hrq('F', 'F');
        r271_xn$linkreducedvariant$5sIl8('F/sansSerif', 'F', r1_MathSansSerif);
        r271_xn$selectvariant$7Hrq('smcpF', 42800, new r271_xn$NamedParameterPair$2Lrc9b('follow', 'F'));
        r271_xn$selectvariant$7Hrq('FBar', 42904, new r271_xn$NamedParameterPair$2Lrc9b('follow', 'F'));
        r271_xn$selectvariant$7Hrq('currency/frenchFrancSign', 8355, new r271_xn$NamedParameterPair$2Lrc9b('follow', 'F'));
        var _r271_t10 = r271_xn$Capture$2Lrc8['Letter-Blackboard'].resolve();
        var r271_BBS = _r271_t10.BBS;
        var r271_BBD = _r271_t10.BBD;
        r271_xn$createAndSaveGlyphImpl$2Lrc3c('mathbb/F', 120125, function () {
            var _r347_t1;
            var _r347_t0 = this;
            var r347_currentGlyph = _r347_t0;
            r347_currentGlyph.include(r271_MarkSet.capital());
            r347_currentGlyph.include(r271_union(r271_VBar.l(r271_xFBarLeft + r271_BBD, 0, r271_CAP, r271_BBS), r271_HBar.b(r271_xFBarLeft, r271_xFBarLeft + r271_BBD, 0, r271_BBS), r271_difference(r271_FShape(r271_CAP, new r271_xn$NamedParameterPair$2Lrc9b('stroke', r271_BBS)), r271_Rect(r271_CAP - r271_BBS, r271_BBS, r271_xFBarLeft + r271_BBS * r271_HVContrast, r271_xFBarLeft + r271_BBD))));
            return void 0;
        });
        r271_turned('turnF', 8498, 'F', r271_Middle, r271_CAP / 2);
        r271_turned('turnSmcpF', 8526, 'smcpF', r271_Middle, r271_XH / 2);
        return r271_xn$deriveglyphs$7Hrq('Fltail', 401, 'F', function (r351_src, r351_gr) {
            var _r351_t0, _r351_t1;
            return function () {
                var _r353_t1;
                var _r353_t0 = this;
                var r353_currentGlyph = _r353_t0;
                r353_currentGlyph.include(r271_xn$referglyph$1aao(r351_src), r271_AS_BASE, r271_ALSO_METRICS);
                r353_currentGlyph.ejectTagged('serifBottom');
                r353_currentGlyph.include(r271_PalatalHook.lExt(r271_xFBarLeft, 0));
                return void 0;
            };
        });
    });
    return void 0;
});
