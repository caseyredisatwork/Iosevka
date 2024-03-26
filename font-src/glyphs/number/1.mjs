'use strict';
import * as _s0_t0 from '../../support/utils.mjs';
import * as _s0_t1 from '../../support/gr.mjs';
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
var r1_AnyCv = _r1_t9.AnyCv;
var r1_getGrMesh = _r1_t9.getGrMesh;
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
    r270_xn$Capture_Ext$2Lrc2b['$defineGlyphBlockImpl$'](r270_xn$Capture_Ext$2Lrc2b, 'Digits-One', function (r271_xn$Capture$2Lrc8, r271_xn$ExportCapture$2Lrc4b) {
        var r271_suffix, r271_Base, r271_pTS, r271_pBalance, _r271_t9, _r271_t11, _r271_t12, _r271_t13, _r271_tag14, _r271_t15, _r271_tag16;
        var _r271_t0 = r271_xn$Capture$2Lrc8;
        var r271_xn$createAndSaveGlyphImpl$2Lrc3c = _r271_t0['$createAndSaveGlyphImpl$'];
        var r271_xn$NamedParameterPair$2Lrc9b = _r271_t0['$NamedParameterPair$'];
        var r271_xn$assignUnicodeImpl$2Lrc8b = _r271_t0['$assignUnicodeImpl$'];
        var r271_xn$execState$2Lrc0b = _r271_t0['$execState$'];
        var r271_MarkSet = _r271_t0.MarkSet;
        var _r271_t1 = r271_xn$Capture$2Lrc8.Metrics;
        var r271_Width = _r271_t1.Width;
        var r271_CAP = _r271_t1.CAP;
        var r271_HVContrast = _r271_t1.HVContrast;
        var r271_Hook = _r271_t1.Hook;
        var r271_HookX = _r271_t1.HookX;
        var r271_Stroke = _r271_t1.Stroke;
        var r271_LongJut = _r271_t1.LongJut;
        var r271_OneBalance = _r271_t1.OneBalance;
        var r271_HalfStroke = _r271_t1.HalfStroke;
        var r271_Middle = _r271_t1.Middle;
        var r271_AdviceStroke = _r271_t1.AdviceStroke;
        var _r271_t2 = r271_xn$Capture$2Lrc8.SpiroFns;
        var r271_corner = _r271_t2.corner;
        var r271_flat = _r271_t2.flat;
        var r271_curl = _r271_t2.curl;
        var r271_widths = _r271_t2.widths;
        var r271_dispiro = _r271_t2.dispiro;
        var r271_xn$spirooutline$1aao = _r271_t2['spiro-outline'];
        var _r271_t3 = r271_xn$Capture$2Lrc8.BooleFns;
        var r271_intersection = _r271_t3.intersection;
        var _r271_t4 = r271_xn$Capture$2Lrc8.CommonShapes.resolve();
        var r271_HSerif = _r271_t4.HSerif;
        var r271_VBar = _r271_t4.VBar;
        var _r271_t5 = r271_xn$Capture$2Lrc8['Common-Derivatives'].resolve();
        var r271_xn$selectvariant$7Hrq = _r271_t5['select-variant'];
        var _r271_t6 = r271_xn$Capture$2Lrc8['Digits-Shared'].resolve();
        var r271_OnumHeight = _r271_t6.OnumHeight;
        var r271_OnumMarks = _r271_t6.OnumMarks;
        var r271_CodeLnum = _r271_t6.CodeLnum;
        var r271_CodeOnum = _r271_t6.CodeOnum;
        var r271_Shape = function () {
            var r277_Line, r277_Serifed, r277_FlatSerifed, r277_TopCut, r277_Base;
            var r277_exports = {};
            r277_exports.Line = r277_Line = function (r285_top, r285_balance, r285_pTopSerif) {
                var _r285_t0, _r285_t1;
                return r271_VBar.m(r271_Middle + r285_balance, 0, r285_top);
            };
            r277_exports.Serifed = r277_Serifed = function (r287_top, r287_balance, r287_pTopSerif) {
                var _r287_t0, _r287_t1;
                return function () {
                    var _r289_t1;
                    var _r289_t0 = this;
                    var r289_currentGlyph = _r289_t0;
                    var r289_topSW = r271_AdviceStroke(3.5);
                    r289_currentGlyph.include(r271_VBar.m(r271_Middle + r287_balance, 0, r287_top));
                    r289_currentGlyph.include(r271_dispiro(r271_flat(r271_Middle - r271_HalfStroke * r271_HVContrast + r287_balance, r287_top, r271_widths(r289_topSW, 0)), r271_curl(r271_Middle - r271_Stroke / 8 * r271_HVContrast - r271_HookX * 1.25 + r287_balance, r287_top - r271_Stroke / 8 - r271_Hook * r287_pTopSerif * (r287_top / r271_CAP))));
                    return void 0;
                };
            };
            r277_exports.FlatSerifed = r277_FlatSerifed = function (r293_top, r293_balance, r293_pTopSerif) {
                var _r293_t0, _r293_t1;
                return function () {
                    var _r295_t1;
                    var _r295_t0 = this;
                    var r295_currentGlyph = _r295_t0;
                    var r295_topSW = r271_AdviceStroke(3.5);
                    r295_currentGlyph.include(r271_VBar.m(r271_Middle + r293_balance, 0, r293_top));
                    r295_currentGlyph.include(r271_HSerif.lt(r271_Middle + r293_balance - r271_HalfStroke * r271_HVContrast, r293_top - r271_Stroke / 8 - r271_Hook * r293_pTopSerif * (r293_top / r271_CAP), r271_LongJut - r271_HalfStroke * r271_HVContrast));
                    return void 0;
                };
            };
            r277_exports.TopCut = r277_TopCut = function (r299_top, r299_balance, r299_pTopSerif) {
                var _r299_t0, _r299_t1;
                return function () {
                    var _r301_t1;
                    var _r301_t0 = this;
                    var r301_currentGlyph = _r301_t0;
                    var r301_sl = r271_Middle + r299_balance - 0.5 * r271_Stroke * r271_HVContrast;
                    var r301_sr = r271_Middle + r299_balance + 0.5 * r271_Stroke * r271_HVContrast;
                    r301_currentGlyph.include(r271_xn$spirooutline$1aao(r271_corner(r301_sr, 0), r271_corner(r301_sl, 0), r271_corner(r301_sl, r299_top - (r301_sr - r301_sl) * r299_pTopSerif), r271_corner(r301_sr, r299_top)));
                    return void 0;
                };
            };
            r277_exports.Base = r277_Base = function () {
                var _r304_t0, _r304_t1;
                return r271_HSerif.mb(r271_Middle, 0, r271_LongJut);
            };
            return r277_exports;
        }();
        var r271_OneConfig = {
            'line': [
                r271_Shape.Line,
                null,
                0.75,
                0
            ],
            'noBase': [
                r271_Shape.Serifed,
                null,
                0.75,
                1
            ],
            'base': [
                r271_Shape.Serifed,
                r271_Shape.Base,
                0.75,
                1
            ],
            'noBaseLongTopSerif': [
                r271_Shape.Serifed,
                null,
                1.875,
                1
            ],
            'baseLongTopSerif': [
                r271_Shape.Serifed,
                r271_Shape.Base,
                1.875,
                1
            ],
            'noBaseFlatTopSerif': [
                r271_Shape.FlatSerifed,
                null,
                0.75,
                1
            ],
            'baseFlatTopSerif': [
                r271_Shape.FlatSerifed,
                r271_Shape.Base,
                0.75,
                1
            ],
            'noBaseTopCut': [
                r271_Shape.TopCut,
                null,
                0.75,
                0
            ],
            'baseTopCut': [
                r271_Shape.TopCut,
                r271_Shape.Base,
                0.75,
                0
            ]
        };
        var _r271_t7 = Object.entries(r271_OneConfig)[Symbol.iterator]();
        var _r271_t8 = void 0;
        while (!(_r271_t8 = _r271_t7.next()).done) {
            _r271_t9 = _r271_t8.value;
            r271_suffix = _r271_t9[0];
            r271_Shape = _r271_t9[1][0];
            r271_Base = _r271_t9[1][1];
            r271_pTS = _r271_t9[1][2];
            r271_pBalance = _r271_t9[1][3];
            _r271_t9[1];
            (function () {
                var r307_balance = r271_pBalance * (r271_Base ? r271_OneBalance / 4 : r271_OneBalance);
                r271_xn$createAndSaveGlyphImpl$2Lrc3c('one.lnum.' + r271_suffix, null, function () {
                    var _r310_t1;
                    var _r310_t0 = this;
                    var r310_currentGlyph = _r310_t0;
                    r310_currentGlyph.include(r271_MarkSet.capital());
                    r310_currentGlyph.include(r271_Shape(r271_CAP, r307_balance, r271_pTS));
                    if (r271_Base)
                        r310_currentGlyph.include(r271_Base());
                    return void 0;
                });
                return r271_xn$createAndSaveGlyphImpl$2Lrc3c('one.onum.' + r271_suffix, null, function () {
                    var _r316_t1;
                    var _r316_t0 = this;
                    var r316_currentGlyph = _r316_t0;
                    r316_currentGlyph.include(r271_OnumMarks.e());
                    r316_currentGlyph.include(r271_Shape(r271_OnumHeight, r307_balance, r271_pTS * 5 / 6));
                    if (r271_Base)
                        r316_currentGlyph.include(r271_Base());
                    return void 0;
                });
            }());
        }
        r271_xn$selectvariant$7Hrq('one.lnum', r271_CodeLnum('1'), new r271_xn$NamedParameterPair$2Lrc9b('follow', 'one'));
        r271_xn$selectvariant$7Hrq('one.onum', r271_CodeOnum('1'), new r271_xn$NamedParameterPair$2Lrc9b('follow', 'one'));
        var _r271_t10 = r271_xn$Capture$2Lrc8['Letter-Blackboard'].resolve();
        var r271_BBS = _r271_t10.BBS;
        var r271_BBD = _r271_t10.BBD;
        var r271_BBBarCenter = _r271_t10.BBBarCenter;
        return r271_xn$createAndSaveGlyphImpl$2Lrc3c('mathbb/one', 120793, function () {
            var _r325_t1;
            var _r325_t0 = this;
            var r325_currentGlyph = _r325_t0;
            var r325_barCenter = r271_Middle + r271_OneBalance / 2;
            var r325_xSerifTerminal = r325_barCenter - r271_BBD / 8 * r271_HVContrast - r271_HookX * 1.25;
            var r325_ySerifTerminal = r271_CAP - r271_BBD / 8 - r271_Hook * 0.75;
            r325_currentGlyph.include(r271_MarkSet.capital());
            r325_currentGlyph.include(r271_intersection(r271_BBBarCenter(r325_barCenter, 0, r271_CAP), r271_xn$spirooutline$1aao(r271_corner(r325_barCenter + r271_BBD / 2, r271_CAP), r271_corner(r271_Width, r271_CAP), r271_corner(r271_Width, 0), r271_corner(0, 0), r271_corner(r325_xSerifTerminal, r325_ySerifTerminal))));
            r325_currentGlyph.include(r271_dispiro(r271_widths.lhs(r271_BBS), r271_corner(r325_barCenter + r271_BBD / 2, r271_CAP), r271_corner(r325_xSerifTerminal, r325_ySerifTerminal)));
            return void 0;
        });
    });
    return void 0;
});
