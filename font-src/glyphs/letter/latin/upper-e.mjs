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
    r270_xn$Capture_Ext$2Lrc2b['$defineGlyphBlockImpl$'](r270_xn$Capture_Ext$2Lrc2b, 'Letter-Latin-Upper-E', function (r271_xn$Capture$2Lrc8, r271_xn$ExportCapture$2Lrc4b) {
        var r271_suffix, r271_lt, r271_lb, r271_v, _r271_t11, _r271_t13, _r271_t14, _r271_t15, _r271_tag16;
        var _r271_t0 = r271_xn$Capture$2Lrc8;
        var r271_xn$createAndSaveGlyphImpl$2Lrc3c = _r271_t0['$createAndSaveGlyphImpl$'];
        var r271_xn$NamedParameterPair$2Lrc9b = _r271_t0['$NamedParameterPair$'];
        var r271_xn$assignUnicodeImpl$2Lrc8b = _r271_t0['$assignUnicodeImpl$'];
        var r271_xn$execState$2Lrc0b = _r271_t0['$execState$'];
        var r271_MarkSet = _r271_t0.MarkSet;
        var r271_AS_BASE = _r271_t0.AS_BASE;
        var r271_ALSO_METRICS = _r271_t0.ALSO_METRICS;
        var _r271_t1 = r271_xn$Capture$2Lrc8.Metrics;
        var r271_Width = _r271_t1.Width;
        var r271_SB = _r271_t1.SB;
        var r271_CAP = _r271_t1.CAP;
        var r271_XH = _r271_t1.XH;
        var r271_HVContrast = _r271_t1.HVContrast;
        var r271_O = _r271_t1.O;
        var r271_RightSB = _r271_t1.RightSB;
        var r271_Middle = _r271_t1.Middle;
        var r271_SideJut = _r271_t1.SideJut;
        var r271_AdviceStroke2 = _r271_t1.AdviceStroke2;
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
        var r271_alias = _r271_t5.alias;
        var r271_turned = _r271_t5.turned;
        var r271_xn$linkreducedvariant$5sIl8 = _r271_t5['link-reduced-variant'];
        var _r271_t6 = r271_xn$Capture$2Lrc8['Mark-Shared-Metrics'].resolve();
        var r271_markHalfStroke = _r271_t6.markHalfStroke;
        var _r271_t7 = r271_xn$Capture$2Lrc8['Letter-Shared'].resolve();
        var r271_SetGrekUpperTonos = _r271_t7.SetGrekUpperTonos;
        var r271_CreateOgonekComposition = _r271_t7.CreateOgonekComposition;
        var _r271_t8 = r271_xn$Capture$2Lrc8['Letter-Latin-Upper-F'].resolve();
        var r271_xMidBarShrink = _r271_t8.xMidBarShrink;
        var r271_yMidBar = _r271_t8.yMidBar;
        var r271_EFVJutLength = _r271_t8.EFVJutLength;
        var r271_kSB = 1;
        var r271_xEBarLeft = r271_SB * r271_kSB - r271_O;
        var r271_xRevEBarRight = r271_Width - r271_SB * r271_kSB + r271_O;
        var r271_EShape = function () {
            var _r277_t6;
            var _r277_t7 = arguments;
            var _r277_t0 = [].slice.call(_r277_t7, 0);
            var _r277_t1 = [];
            var _r277_t2 = 0;
            while (_r277_t2 < _r277_t0.length) {
                if (!(_r277_t0[_r277_t2] instanceof r271_xn$NamedParameterPair$2Lrc9b))
                    _r277_t1.push(_r277_t0[_r277_t2]);
                _r277_t2 = _r277_t2 + 1;
            }
            var _r277_t3 = _r277_t0;
            var _r277_t4 = _r277_t3.length;
            var _r277_t5 = 0;
            while (_r277_t5 < _r277_t4) {
                _r277_t2 = _r277_t3[_r277_t5];
                if (_r277_t2 && _r277_t2 instanceof r271_xn$NamedParameterPair$2Lrc9b && _r277_t2.left === 'top')
                    r277_top = _r277_t2.right;
                if (_r277_t2 && _r277_t2 instanceof r271_xn$NamedParameterPair$2Lrc9b && _r277_t2.left === 'pyBar')
                    r277_pyBar = _r277_t2.right;
                if (_r277_t2 && _r277_t2 instanceof r271_xn$NamedParameterPair$2Lrc9b && _r277_t2.left === 'serifLT')
                    r277_serifLT = _r277_t2.right;
                if (_r277_t2 && _r277_t2 instanceof r271_xn$NamedParameterPair$2Lrc9b && _r277_t2.left === 'serifLB')
                    r277_serifLB = _r277_t2.right;
                if (_r277_t2 && _r277_t2 instanceof r271_xn$NamedParameterPair$2Lrc9b && _r277_t2.left === 'serifV')
                    r277_serifV = _r277_t2.right;
                if (_r277_t2 && _r277_t2 instanceof r271_xn$NamedParameterPair$2Lrc9b && _r277_t2.left === 'stroke')
                    r277_stroke = _r277_t2.right;
                _r277_t5 = _r277_t5 + 1;
            }
            var r277_top = r1_fallback(r277_top, _r277_t1[0]);
            var r277_pyBar = r1_fallback(r277_pyBar, _r277_t1[1]);
            var r277_serifLT = r1_fallback(r277_serifLT, _r277_t1[2]);
            var r277_serifLB = r1_fallback(r277_serifLB, _r277_t1[3]);
            var r277_serifV = r1_fallback(r277_serifV, _r277_t1[4]);
            var r277_stroke = r1_fallback(r277_stroke, _r277_t1[5], r271_AdviceStroke2(2, 3, r277_top));
            return function () {
                var r283_jutTop, r283_jutBot, _r283_t0, _r283_t2;
                var _r283_t1 = this;
                var r283_currentGlyph = _r283_t1;
                r283_currentGlyph.include(r271_VBar.l(r271_xEBarLeft, 0, r277_top, r277_stroke));
                r283_currentGlyph.include(r271_HBar.t(r271_xEBarLeft - r271_O, r271_RightSB, r277_top, r277_stroke));
                r283_currentGlyph.include(r271_HBar.m(r271_xEBarLeft - r271_O, r271_RightSB - r271_xMidBarShrink(r277_serifV), r271_yMidBar(r277_top, r277_pyBar), r277_stroke));
                r283_currentGlyph.include(r271_HBar.b(r271_xEBarLeft - r271_O, r271_RightSB, 0, r277_stroke));
                if (r277_serifLT)
                    r283_currentGlyph.include(r271_HSerif.lt(r271_xEBarLeft, r277_top, r271_SideJut));
                if (r277_serifLB)
                    r283_currentGlyph.include(r271_HSerif.lb(r271_xEBarLeft, 0, r271_SideJut));
                if (r277_serifV) {
                    _r283_t0 = r271_EFVJutLength(r277_top, r277_pyBar, r277_stroke);
                    r283_jutTop = _r283_t0[0];
                    r283_jutBot = _r283_t0[1];
                    r283_currentGlyph.include(r271_VSerif.dr(r271_RightSB, r277_top, r283_jutTop));
                    r283_currentGlyph.include(r271_VSerif.ur(r271_RightSB, 0, r283_jutBot));
                }
                return void 0;
            };
        };
        r271_xn$ExportCapture$2Lrc4b(function () {
            var _r293_t0, _r293_t1;
            return { 'RevEShape': r271_RevEShape };
        });
        var r271_RevEShape = function () {
            var _r294_t6;
            var _r294_t7 = arguments;
            var _r294_t0 = [].slice.call(_r294_t7, 0);
            var _r294_t1 = [];
            var _r294_t2 = 0;
            while (_r294_t2 < _r294_t0.length) {
                if (!(_r294_t0[_r294_t2] instanceof r271_xn$NamedParameterPair$2Lrc9b))
                    _r294_t1.push(_r294_t0[_r294_t2]);
                _r294_t2 = _r294_t2 + 1;
            }
            var _r294_t3 = _r294_t0;
            var _r294_t4 = _r294_t3.length;
            var _r294_t5 = 0;
            while (_r294_t5 < _r294_t4) {
                _r294_t2 = _r294_t3[_r294_t5];
                if (_r294_t2 && _r294_t2 instanceof r271_xn$NamedParameterPair$2Lrc9b && _r294_t2.left === 'top')
                    r294_top = _r294_t2.right;
                if (_r294_t2 && _r294_t2 instanceof r271_xn$NamedParameterPair$2Lrc9b && _r294_t2.left === 'pyBar')
                    r294_pyBar = _r294_t2.right;
                if (_r294_t2 && _r294_t2 instanceof r271_xn$NamedParameterPair$2Lrc9b && _r294_t2.left === 'serifRT')
                    r294_serifRT = _r294_t2.right;
                if (_r294_t2 && _r294_t2 instanceof r271_xn$NamedParameterPair$2Lrc9b && _r294_t2.left === 'serifRB')
                    r294_serifRB = _r294_t2.right;
                if (_r294_t2 && _r294_t2 instanceof r271_xn$NamedParameterPair$2Lrc9b && _r294_t2.left === 'serifV')
                    r294_serifV = _r294_t2.right;
                if (_r294_t2 && _r294_t2 instanceof r271_xn$NamedParameterPair$2Lrc9b && _r294_t2.left === 'stroke')
                    r294_stroke = _r294_t2.right;
                _r294_t5 = _r294_t5 + 1;
            }
            var r294_top = r1_fallback(r294_top, _r294_t1[0]);
            var r294_pyBar = r1_fallback(r294_pyBar, _r294_t1[1]);
            var r294_serifRT = r1_fallback(r294_serifRT, _r294_t1[2]);
            var r294_serifRB = r1_fallback(r294_serifRB, _r294_t1[3]);
            var r294_serifV = r1_fallback(r294_serifV, _r294_t1[4]);
            var r294_stroke = r1_fallback(r294_stroke, _r294_t1[5], r271_AdviceStroke2(2, 3, r294_top));
            return function () {
                var r300_jutTop, r300_jutBot, _r300_t0, _r300_t2;
                var _r300_t1 = this;
                var r300_currentGlyph = _r300_t1;
                r300_currentGlyph.include(r271_VBar.r(r271_xRevEBarRight, 0, r294_top, r294_stroke));
                r300_currentGlyph.include(r271_HBar.t(r271_SB, r271_xRevEBarRight + r271_O, r294_top, r294_stroke));
                r300_currentGlyph.include(r271_HBar.m(r271_SB + r271_xMidBarShrink(r294_serifV), r271_xRevEBarRight + r271_O, r271_yMidBar(r294_top, r294_pyBar), r294_stroke));
                r300_currentGlyph.include(r271_HBar.b(r271_SB, r271_xRevEBarRight + r271_O, 0, r294_stroke));
                if (r294_serifRT)
                    r300_currentGlyph.include(r271_HSerif.rt(r271_xRevEBarRight, r294_top, r271_SideJut));
                if (r294_serifRB)
                    r300_currentGlyph.include(r271_HSerif.rb(r271_xRevEBarRight, 0, r271_SideJut));
                if (r294_serifV) {
                    _r300_t0 = r271_EFVJutLength(r294_top, r294_pyBar, r294_stroke);
                    r300_jutTop = _r300_t0[0];
                    r300_jutBot = _r300_t0[1];
                    r300_currentGlyph.include(r271_VSerif.dl(r271_SB, r294_top, r300_jutTop));
                    r300_currentGlyph.include(r271_VSerif.ul(r271_SB, 0, r300_jutBot));
                }
                return void 0;
            };
        };
        var r271_EConfig = {
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
        var _r271_t9 = Object.entries(r271_EConfig)[Symbol.iterator]();
        var _r271_t10 = void 0;
        while (!(_r271_t10 = _r271_t9.next()).done) {
            _r271_t11 = _r271_t10.value;
            r271_suffix = _r271_t11[0];
            r271_lt = _r271_t11[1][0];
            r271_lb = _r271_t11[1][1];
            r271_v = _r271_t11[1][2];
            _r271_t11[1];
            (function () {
                r271_xn$createAndSaveGlyphImpl$2Lrc3c('E.' + r271_suffix, null, function () {
                    var _r314_t1;
                    var _r314_t0 = this;
                    var r314_currentGlyph = _r314_t0;
                    r314_currentGlyph.include(r271_MarkSet.capital());
                    r314_currentGlyph.include(r271_EShape(r271_CAP, new r271_xn$NamedParameterPair$2Lrc9b('serifLT', r271_lt), new r271_xn$NamedParameterPair$2Lrc9b('serifLB', r271_lb), new r271_xn$NamedParameterPair$2Lrc9b('serifV', r271_v)));
                    r314_currentGlyph.setBaseAnchor('trailing', r271_RightSB, 0);
                    return void 0;
                });
                r271_xn$createAndSaveGlyphImpl$2Lrc3c('grek/Epsilon.' + r271_suffix, null, function () {
                    var _r323_t1;
                    var _r323_t0 = this;
                    var r323_currentGlyph = _r323_t0;
                    r323_currentGlyph.include(r271_xn$referglyph$1aao('E.' + r271_suffix), r271_AS_BASE, r271_ALSO_METRICS);
                    r323_currentGlyph.include(r271_SetGrekUpperTonos(r271_lt ? -r271_SideJut : 0));
                    return void 0;
                });
                r271_xn$createAndSaveGlyphImpl$2Lrc3c('smcpE.' + r271_suffix, null, function () {
                    var _r328_t1;
                    var _r328_t0 = this;
                    var r328_currentGlyph = _r328_t0;
                    r328_currentGlyph.include(r271_MarkSet.e());
                    r328_currentGlyph.include(r271_EShape(r271_XH, new r271_xn$NamedParameterPair$2Lrc9b('serifLT', r271_lt), new r271_xn$NamedParameterPair$2Lrc9b('serifLB', r271_lb), new r271_xn$NamedParameterPair$2Lrc9b('serifV', r271_v)));
                    r328_currentGlyph.setBaseAnchor('trailing', r271_RightSB - r271_markHalfStroke, 0);
                    return void 0;
                });
                return r271_xn$createAndSaveGlyphImpl$2Lrc3c('revE.' + r271_suffix, null, function () {
                    var _r337_t1;
                    var _r337_t0 = this;
                    var r337_currentGlyph = _r337_t0;
                    r337_currentGlyph.include(r271_MarkSet.capital());
                    r337_currentGlyph.include(r271_RevEShape(r271_CAP, new r271_xn$NamedParameterPair$2Lrc9b('serifRT', r271_lt), new r271_xn$NamedParameterPair$2Lrc9b('serifRB', r271_lb), new r271_xn$NamedParameterPair$2Lrc9b('serifV', r271_v)));
                    return void 0;
                });
            }());
        }
        r271_xn$selectvariant$7Hrq('E', 'E');
        r271_xn$linkreducedvariant$5sIl8('E/sansSerif', 'E', r1_MathSansSerif);
        r271_xn$selectvariant$7Hrq('grek/Epsilon', 917, new r271_xn$NamedParameterPair$2Lrc9b('follow', 'E'));
        r271_xn$linkreducedvariant$5sIl8('grek/Epsilon/sansSerif', 'grek/Epsilon', r1_MathSansSerif, new r271_xn$NamedParameterPair$2Lrc9b('follow', 'E/sansSerif'));
        r271_xn$selectvariant$7Hrq('smcpE', 7431, new r271_xn$NamedParameterPair$2Lrc9b('follow', 'E'));
        r271_alias('cyrl/Ie', 1045, 'E');
        r271_xn$selectvariant$7Hrq('revE', 398, new r271_xn$NamedParameterPair$2Lrc9b('follow', 'E'));
        r271_turned('turnSmcpE', 11387, 'smcpE', r271_Middle, r271_XH / 2);
        var _r271_t12 = r271_xn$Capture$2Lrc8['Letter-Blackboard'].resolve();
        var r271_BBS = _r271_t12.BBS;
        var r271_BBD = _r271_t12.BBD;
        r271_xn$createAndSaveGlyphImpl$2Lrc3c('mathbb/E', 120124, function () {
            var _r350_t1;
            var _r350_t0 = this;
            var r350_currentGlyph = _r350_t0;
            r350_currentGlyph.include(r271_MarkSet.capital());
            r350_currentGlyph.include(r271_union(r271_difference(r271_EShape(r271_CAP, new r271_xn$NamedParameterPair$2Lrc9b('serif', false), new r271_xn$NamedParameterPair$2Lrc9b('stroke', r271_BBS)), r271_Rect(r271_CAP - r271_BBS, r271_BBS, r271_xEBarLeft + r271_BBS * r271_HVContrast, r271_xEBarLeft + r271_BBD)), r271_VBar.l(r271_xEBarLeft + r271_BBD, 0, r271_CAP, r271_BBS)));
            return void 0;
        });
        return r271_CreateOgonekComposition('EOgonek', 280, 'E');
    });
    return void 0;
});
