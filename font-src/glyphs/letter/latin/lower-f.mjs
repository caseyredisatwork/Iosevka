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
    r270_xn$Capture_Ext$2Lrc2b['$defineGlyphBlockImpl$'](r270_xn$Capture_Ext$2Lrc2b, 'Letter-Latin-Lower-F', function (r271_xn$Capture$2Lrc8, r271_xn$ExportCapture$2Lrc4b) {
        var r271_suffix, r271_Body, r271_df, r271_pBar, r271_ch, r271_mk, r271_yBar, _r271_t11, _r271_t13, _r271_t14, _r271_t15, _r271_tag16;
        var _r271_t0 = r271_xn$Capture$2Lrc8;
        var r271_xn$createAndSaveGlyphImpl$2Lrc3c = _r271_t0['$createAndSaveGlyphImpl$'];
        var r271_xn$NamedParameterPair$2Lrc9b = _r271_t0['$NamedParameterPair$'];
        var r271_xn$assignUnicodeImpl$2Lrc8b = _r271_t0['$assignUnicodeImpl$'];
        var r271_xn$execState$2Lrc0b = _r271_t0['$execState$'];
        var r271_para = _r271_t0.para;
        var r271_MarkSet = _r271_t0.MarkSet;
        var r271_AS_BASE = _r271_t0.AS_BASE;
        var r271_ALSO_METRICS = _r271_t0.ALSO_METRICS;
        var r271_DivFrame = _r271_t0.DivFrame;
        var _r271_t1 = r271_xn$Capture$2Lrc8.Metrics;
        var r271_DesignParameters = _r271_t1.DesignParameters;
        var r271_Width = _r271_t1.Width;
        var r271_SB = _r271_t1.SB;
        var r271_CAP = _r271_t1.CAP;
        var r271_XH = _r271_t1.XH;
        var r271_Ascender = _r271_t1.Ascender;
        var r271_Descender = _r271_t1.Descender;
        var r271_Translate = _r271_t1.Translate;
        var r271_TanSlope = _r271_t1.TanSlope;
        var r271_HVContrast = _r271_t1.HVContrast;
        var r271_Upward = _r271_t1.Upward;
        var r271_Downward = _r271_t1.Downward;
        var r271_O = _r271_t1.O;
        var r271_OX = _r271_t1.OX;
        var r271_Hook = _r271_t1.Hook;
        var r271_Stroke = _r271_t1.Stroke;
        var r271_LongJut = _r271_t1.LongJut;
        var r271_Jut = _r271_t1.Jut;
        var r271_VJutStroke = _r271_t1.VJutStroke;
        var r271_RBalance2 = _r271_t1.RBalance2;
        var r271_HalfStroke = _r271_t1.HalfStroke;
        var r271_RightSB = _r271_t1.RightSB;
        var r271_ArchDepthA = _r271_t1.ArchDepthA;
        var r271_AdviceStroke = _r271_t1.AdviceStroke;
        var _r271_t2 = r271_xn$Capture$2Lrc8.SpiroFns;
        var r271_g4 = _r271_t2.g4;
        var r271_corner = _r271_t2.corner;
        var r271_flat = _r271_t2.flat;
        var r271_curl = _r271_t2.curl;
        var r271_widths = _r271_t2.widths;
        var r271_heading = _r271_t2.heading;
        var r271_archv = _r271_t2.archv;
        var r271_dispiro = _r271_t2.dispiro;
        var r271_xn$spirooutline$1aao = _r271_t2['spiro-outline'];
        var _r271_t3 = r271_xn$Capture$2Lrc8.BooleFns;
        var r271_intersection = _r271_t3.intersection;
        var r271_difference = _r271_t3.difference;
        var _r271_t4 = r271_xn$Capture$2Lrc8.CommonShapes.resolve();
        var r271_Rect = _r271_t4.Rect;
        var r271_HSerif = _r271_t4.HSerif;
        var r271_HBar = _r271_t4.HBar;
        var r271_VBar = _r271_t4.VBar;
        var r271_hookstart = _r271_t4.hookstart;
        var r271_HCrossBar = _r271_t4.HCrossBar;
        var _r271_t5 = r271_xn$Capture$2Lrc8['Common-Derivatives'].resolve();
        var r271_xn$selectvariant$7Hrq = _r271_t5['select-variant'];
        var r271_xn$referglyph$1aao = _r271_t5['refer-glyph'];
        var r271_xn$linkreducedvariant$5sIl8 = _r271_t5['link-reduced-variant'];
        var _r271_t6 = r271_xn$Capture$2Lrc8['Letter-Shared'].resolve();
        var r271_CreateAccentedComposition = _r271_t6.CreateAccentedComposition;
        var _r271_t7 = r271_xn$Capture$2Lrc8['Letter-Shared-Shapes'].resolve();
        var r271_FlatHookDepth = _r271_t7.FlatHookDepth;
        var r271_DiagonalTailL = _r271_t7.DiagonalTailL;
        var r271_DiagonalTailStdDepth = _r271_t7.DiagonalTailStdDepth;
        var _r271_t8 = r271_xn$Capture$2Lrc8['Letter-Shared-Shapes'].resolve();
        var r271_LetterBarOverlay = _r271_t8.LetterBarOverlay;
        var r271_PalatalHook = _r271_t8.PalatalHook;
        var r271_SetPalatalHookPos = function (r277_barLeft) {
            var _r277_t0, _r277_t1;
            return function () {
                var _r279_t1;
                var _r279_t0 = this;
                var r279_currentGlyph = _r279_t0;
                r279_currentGlyph.setBaseAnchor('palatalHookPos', r277_barLeft + (r271_Stroke + Math.max(r271_VJutStroke, r271_Width / 12)) * r271_HVContrast, 0);
                return void 0;
            };
        };
        r271_xn$ExportCapture$2Lrc4b(function () {
            var _r282_t0, _r282_t1;
            return { 'fbar': r271_fbar };
        });
        var r271_fbar = r271_XH * r271_DesignParameters.fBarPosToXH + r271_Stroke * r271_DesignParameters.fbarStrokeAdj;
        var r271_SmallFBottomSerif = function (r283_df) {
            var _r283_t0, _r283_t1;
            return function () {
                var _r285_t1;
                var _r285_t0 = this;
                var r285_currentGlyph = _r285_t0;
                var r285_l = r1_mix(r283_df.leftSB, r283_df.rightSB, 0.02) + r271_HalfStroke * r271_TanSlope;
                var r285_r = r1_mix(r283_df.leftSB, r283_df.rightSB, 0.875) + r271_HalfStroke * r271_TanSlope;
                r285_currentGlyph.include(r271_dispiro(r271_widths.lhs(), r271_flat(r285_l, 0), r271_curl(r285_r, 0)));
                r285_currentGlyph.setBaseAnchor('palatalHookPos', r285_r, 0);
                return void 0;
            };
        };
        var r271_NarrowBottomSerif = function (r288_df) {
            var _r288_t0, _r288_t1;
            return function () {
                var _r290_t1;
                var _r290_t0 = this;
                var r290_currentGlyph = _r290_t0;
                r290_currentGlyph.include(r271_HSerif.mb(r288_df.middle, 0, r271_LongJut * r288_df.div));
                r290_currentGlyph.setBaseAnchor('palatalHookPos', r288_df.middle + r271_LongJut * r288_df.div + r271_HalfStroke * r271_TanSlope, 0);
                return void 0;
            };
        };
        var r271_StdFShapeT = function (r293_sink, r293_offset, r293_barleft, r293_sw) {
            var _r293_t0, _r293_t1;
            return r293_sink(r271_widths.lhs(r293_sw), r271_g4(Math.max(r293_barleft + r293_offset + 2.125 * r293_sw * r271_HVContrast, r271_RightSB + r271_RBalance2 - (r271_OX - r271_O) - r293_offset), r271_Ascender - r271_Hook * 0.75), r271_hookstart(r271_Ascender - r271_O - r293_offset, new r271_xn$NamedParameterPair$2Lrc9b('tight', true)), r271_flat(r293_barleft + r293_offset, r271_CAP - r271_ArchDepthA * 0.8), (r293_offset ? r271_corner : r271_curl)(r293_barleft + r293_offset, 0, r271_heading(r271_Downward)), r293_offset ? [r271_corner(r271_RightSB + r271_RBalance2 - (r271_OX - r271_O) - r293_offset, 0)] : []);
        };
        var r271_SmallFDownExtension = function (r295_barLeft) {
            var _r295_t0, _r295_t1;
            return r271_VBar.l(r295_barLeft, 0.1, r271_Descender * 0.9);
        };
        var r271_SmallFDownHook = function (r296_df, r296_barRight, r296_counterHookLeft) {
            var _r296_t0, _r296_t1;
            var r296_hd = r271_FlatHookDepth(r296_df);
            return r271_dispiro(r271_widths.lhs(), r271_flat(r296_counterHookLeft, r271_Descender), r271_curl(Math.max(r296_barRight - r296_hd.x, r296_counterHookLeft + 0.1), r271_Descender), r271_archv.superness(r271_DesignParameters.tightHookSuperness), r271_flat(r296_barRight, Math.min(0, r271_Descender + r296_hd.y)), r271_curl(r296_barRight, 0.1, r271_heading(r271_Upward)));
        };
        r271_xn$ExportCapture$2Lrc4b(function () {
            var _r298_t0, _r298_t1;
            return { 'SmallFDiagonalTail': r271_SmallFDiagonalTail };
        });
        var r271_SmallFDiagonalTail = function (r299_df, r299_barLeft) {
            var _r299_t0, _r299_t1;
            var r299_xBarMiddle = r299_barLeft + r271_HalfStroke * r271_HVContrast;
            return r271_dispiro(r271_flat(r299_xBarMiddle, 0.1, r271_widths.center.heading(r271_Stroke, r271_Downward)), r271_DiagonalTailL(r299_df, r299_xBarMiddle, r271_Descender, r271_DiagonalTailStdDepth(r299_df, r271_Stroke), r271_Stroke));
        };
        r271_xn$ExportCapture$2Lrc4b(function () {
            var _r301_t0, _r301_t1;
            return { 'StdSmallFBarLeftPos': r271_StdSmallFBarLeftPos };
        });
        var r271_StdSmallFBarLeftPos = function (r302_barAtCenter) {
            var _r302_t0, _r302_t1;
            return r1_mix(r271_SB, r271_RightSB, r302_barAtCenter ? 0.45 : 0.35) - r271_Stroke * (r302_barAtCenter ? 0.45 : 0.25) * r271_HVContrast;
        };
        r271_xn$ExportCapture$2Lrc4b(function () {
            var _r304_t0, _r304_t1;
            return { 'StdSmallFBarLeftPos0': r271_StdSmallFBarLeftPos0 };
        });
        var r271_StdSmallFBarLeftPos0 = function () {
            var _r305_t0, _r305_t1;
            return r1_mix(r271_SB, r271_RightSB, 0.35) - r271_Stroke * 0.25 * r271_HVContrast;
        };
        var r271_StandardSmallFShape = function (r306_df, r306_m, r306_bh, r306_counterHook) {
            var _r306_t0, _r306_t1;
            return function () {
                var r308_barRight, r308_crossRight, r308_counterHookLeft, _r308_t2;
                var _r308_t1 = this;
                var r308_currentGlyph = _r308_t1;
                var r308_barAtCenter = r306_counterHook === r271_xn$CHHOOK$3cah || r306_counterHook === r271_xn$CHDIAGONALHOOK$3cah9;
                var r308_barLeft0 = r271_StdSmallFBarLeftPos0();
                var r308_barLeft = r271_StdSmallFBarLeftPos(r308_barAtCenter);
                r308_currentGlyph.setBaseAnchor('overlay', r308_barLeft + 0.5 * r271_Stroke * r271_HVContrast, r306_bh / 2);
                r308_currentGlyph.include(r271_StdFShapeT(r271_dispiro, 0, r308_barLeft0, r271_Stroke));
                r308_currentGlyph.include(r271_Translate(r308_barLeft - r308_barLeft0, 0));
                r308_currentGlyph.include(r271_HCrossBar.top(r271_SB, r1_mix(r271_SB, r271_RightSB, r306_m), r306_bh));
                var _r308_t0 = r306_counterHook;
                if (_r308_t0 === r271_xn$CHNONE$3cah) {
                    r308_currentGlyph.include(r271_SetPalatalHookPos(r308_barLeft));
                } else if (_r308_t0 === r271_xn$CHEXTENSION$3cah) {
                    r308_currentGlyph.include(r271_SmallFDownExtension(r308_barLeft));
                } else if (_r308_t0 === r271_xn$CHHOOK$3cah) {
                    r308_barRight = r308_barLeft + r271_Stroke * r271_HVContrast;
                    r308_crossRight = r1_mix(r306_df.width, r306_df.rightSB, r306_m);
                    r308_counterHookLeft = Math.max(r271_SB, r308_barRight - (r308_crossRight - r308_barLeft));
                    r308_currentGlyph.include(r271_SmallFDownHook(r306_df, r308_barRight, r308_counterHookLeft));
                } else if (_r308_t0 === r271_xn$CHDIAGONALHOOK$3cah9) {
                    r308_currentGlyph.include(r271_SmallFDiagonalTail(r306_df, r308_barLeft));
                } else if (_r308_t0 === r271_xn$CHSERIF$3cah) {
                    r308_currentGlyph.include(r271_SmallFBottomSerif(r306_df));
                } else
                    void 0;
                return void 0;
            };
        };
        var r271_NarrowFShape = function (r318_clcStyle) {
            var _r318_t0, _r318_t1;
            return function (r319_df, r319_m, r319_bh, r319_counterHook) {
                var _r319_t0, _r319_t1;
                return function () {
                    var r321___, r321_barRight, r321_counterHookLeft, _r321_t0, _r321_t1, _r321_t2, _r321_t5;
                    var _r321_t4 = this;
                    var r321_currentGlyph = _r321_t4;
                    var r321_topHookExt = (_r321_t0 = r318_clcStyle, _r321_t0 === 1 ? r271_Width : _r321_t0 === 2 ? r271_Jut : _r321_t0 === 3 ? r271_Jut : (r321___ = _r321_t0, 0));
                    var r321_topHookHdExt = (_r321_t1 = r318_clcStyle, _r321_t1 === 1 ? 1 : (r321___ = _r321_t1, 0));
                    var r321_crossBarExt = (_r321_t2 = r318_clcStyle, _r321_t2 === 1 ? r271_Jut : _r321_t2 === 3 ? r271_Jut : (r321___ = _r321_t2, 0));
                    var r321_barAtCenter = r319_counterHook === r271_xn$CHHOOK$3cah || r319_counterHook === r271_xn$CHDIAGONALHOOK$3cah9;
                    var r321_crossLeft = r1_mix(0, r319_df.leftSB, r319_m);
                    var r321_crossRight = r1_mix(r319_df.width, r319_df.rightSB, r319_m);
                    var r321_barLeft = r321_barAtCenter ? r319_df.middle - r271_HalfStroke * r271_HVContrast : r1_mix(r321_crossLeft, r321_crossRight, 0.42) - r271_Stroke * 0.375 * r271_HVContrast;
                    var r321_hd = r271_FlatHookDepth(r319_df);
                    r321_currentGlyph.setBaseAnchor('overlay', r321_barLeft + 0.5 * r271_Stroke * r271_HVContrast, r319_bh / 2);
                    r321_currentGlyph.include(r271_dispiro(r271_widths.lhs(), r271_flat(r321_crossRight + r321_topHookExt, r271_Ascender), r271_curl(Math.min(r321_barLeft + r321_hd.x * (1 + r321_topHookHdExt), r321_crossRight - 0.1), r271_Ascender), r271_archv.superness(r271_DesignParameters.tightHookSuperness), r271_flat(r321_barLeft, Math.max(r271_XH, r271_Ascender - r321_hd.y)), r271_curl(r321_barLeft, 0, r271_heading(r271_Downward))));
                    r321_currentGlyph.include(r271_HCrossBar.top(r321_crossLeft, r321_crossRight + r321_crossBarExt, r319_bh));
                    var _r321_t3 = r319_counterHook;
                    if (_r321_t3 === r271_xn$CHNONE$3cah) {
                        r321_currentGlyph.include(r271_SetPalatalHookPos(r321_barLeft));
                    } else if (_r321_t3 === r271_xn$CHEXTENSION$3cah) {
                        r321_currentGlyph.include(r271_SmallFDownExtension(r321_barLeft));
                    } else if (_r321_t3 === r271_xn$CHHOOK$3cah) {
                        r321_barRight = r321_barLeft + r271_Stroke * r271_HVContrast;
                        r321_crossRight = r1_mix(r319_df.width, r319_df.rightSB, r319_m);
                        r321_counterHookLeft = r321_barRight - (r321_crossRight - r321_barLeft);
                        r321_currentGlyph.include(r271_SmallFDownHook(r319_df, r321_barRight, r321_counterHookLeft));
                    } else if (_r321_t3 === r271_xn$CHDIAGONALHOOK$3cah9) {
                        r321_currentGlyph.include(r271_SmallFDiagonalTail(r319_df, r321_barLeft));
                    } else if (_r321_t3 === r271_xn$CHSERIF$3cah) {
                        r321_currentGlyph.include(r271_NarrowBottomSerif(r319_df));
                    } else
                        void 0;
                    return void 0;
                };
            };
        };
        var r271_xn$CHNONE$3cah = 0;
        var r271_xn$CHSERIF$3cah = 1;
        var r271_xn$CHEXTENSION$3cah = 2;
        var r271_xn$CHHOOK$3cah = 3;
        var r271_xn$CHDIAGONALHOOK$3cah9 = 4;
        var r271_dfNarrowF = r271_DivFrame(r271_para.diversityF);
        var r271_pNarrowSide = r1_mix(1, r271_para.diversityF, 1.5);
        var r271_SmallFConfig = r1_SuffixCfg.weave({
            '': [
                r271_StandardSmallFShape,
                r271_DivFrame(1)
            ],
            'flatHook': [
                r271_NarrowFShape(0),
                r271_dfNarrowF
            ],
            'flatHookCLC1': [
                r271_NarrowFShape(1),
                r271_dfNarrowF
            ],
            'flatHookCLC2': [
                r271_NarrowFShape(2),
                r271_dfNarrowF
            ],
            'flatHookCLC3': [
                r271_NarrowFShape(3),
                r271_dfNarrowF
            ]
        }, function (r330_body) {
            var _r330_t0, _r330_t1;
            return {
                'serifless': [
                    r330_body ? r271_pNarrowSide : 0.95,
                    r271_xn$CHNONE$3cah,
                    'b'
                ],
                'serifed': [
                    r330_body ? r271_pNarrowSide : 0.95,
                    r271_xn$CHSERIF$3cah,
                    'b'
                ],
                'extended': [
                    r330_body ? r271_pNarrowSide : 0.95,
                    r271_xn$CHEXTENSION$3cah,
                    'bp'
                ],
                'tailed': [
                    r330_body ? r271_pNarrowSide : 1,
                    r271_xn$CHHOOK$3cah,
                    'bp'
                ],
                'diagonalTailed': [
                    r330_body ? r271_pNarrowSide : 1,
                    r271_xn$CHDIAGONALHOOK$3cah9,
                    'bp'
                ]
            };
        }, {
            '': r271_fbar,
            'crossbarAtXHeight': r271_XH
        });
        var _r271_t9 = Object.entries(r271_SmallFConfig)[Symbol.iterator]();
        var _r271_t10 = void 0;
        while (!(_r271_t10 = _r271_t9.next()).done) {
            _r271_t11 = _r271_t10.value;
            r271_suffix = _r271_t11[0];
            r271_Body = _r271_t11[1][0][0];
            r271_df = _r271_t11[1][0][1];
            _r271_t11[1][0];
            r271_pBar = _r271_t11[1][1][0];
            r271_ch = _r271_t11[1][1][1];
            r271_mk = _r271_t11[1][1][2];
            _r271_t11[1][1];
            r271_yBar = _r271_t11[1][2];
            _r271_t11[1];
            (function () {
                r271_xn$createAndSaveGlyphImpl$2Lrc3c('f.' + r271_suffix, null, function () {
                    var _r336_t1;
                    var _r336_t0 = this;
                    var r336_currentGlyph = _r336_t0;
                    r336_currentGlyph.setWidth(r271_df.width);
                    r336_currentGlyph.include(r271_df.markSet[r271_mk]());
                    r336_currentGlyph.include(r271_Body(r271_df, r271_pBar, r271_yBar, r271_ch));
                    return void 0;
                });
                return r271_xn$createAndSaveGlyphImpl$2Lrc3c('fPalatalHook.' + r271_suffix, null, function () {
                    var r342_attach, r342_pos, r342_gap, _r342_t1;
                    var _r342_t0 = this;
                    var r342_currentGlyph = _r342_t0;
                    r342_currentGlyph.include(r271_xn$referglyph$1aao('f.' + r271_suffix), r271_AS_BASE, r271_ALSO_METRICS);
                    if (r342_currentGlyph.baseAnchors.palatalHookPos) {
                        r342_attach = r342_currentGlyph.gizmo.unapply(r342_currentGlyph.baseAnchors.overlay);
                        r342_pos = r342_currentGlyph.gizmo.unapply(r342_currentGlyph.baseAnchors.palatalHookPos);
                        r342_gap = Math.max(r271_Width / 8, r271_AdviceStroke(8));
                        r342_currentGlyph.include(r271_PalatalHook.r(new r271_xn$NamedParameterPair$2Lrc9b('xLink', r342_attach.x), new r271_xn$NamedParameterPair$2Lrc9b('x', r342_pos.x), new r271_xn$NamedParameterPair$2Lrc9b('y', r342_pos.y)));
                    }
                    return void 0;
                });
            }());
        }
        r271_xn$selectvariant$7Hrq('f', 'f');
        r271_xn$linkreducedvariant$5sIl8('f/sansSerif', 'f', r1_MathSansSerif);
        r271_xn$selectvariant$7Hrq('fLenis', 43829, new r271_xn$NamedParameterPair$2Lrc9b('shapeFrom', 'f'));
        r271_xn$selectvariant$7Hrq('fLTail', 402, new r271_xn$NamedParameterPair$2Lrc9b('shapeFrom', 'f'));
        r271_xn$selectvariant$7Hrq('f/compLigLeft1', new r271_xn$NamedParameterPair$2Lrc9b('shapeFrom', 'f'));
        r271_xn$selectvariant$7Hrq('f/compLigLeft2', new r271_xn$NamedParameterPair$2Lrc9b('shapeFrom', 'f'));
        r271_xn$selectvariant$7Hrq('f/compLigLeft3', new r271_xn$NamedParameterPair$2Lrc9b('shapeFrom', 'f'));
        r271_xn$selectvariant$7Hrq('f/phoneticLeft', new r271_xn$NamedParameterPair$2Lrc9b('shapeFrom', 'f'));
        r271_xn$selectvariant$7Hrq('fPalatalHook', 7554, new r271_xn$NamedParameterPair$2Lrc9b('follow', 'f/tailless'));
        var _r271_t12 = r271_xn$Capture$2Lrc8['Letter-Blackboard'].resolve();
        var r271_BBS = _r271_t12.BBS;
        var r271_BBD = _r271_t12.BBD;
        return r271_xn$createAndSaveGlyphImpl$2Lrc3c('mathbb/f', 120151, function () {
            var _r358_t1;
            var _r358_t0 = this;
            var r358_currentGlyph = _r358_t0;
            r358_currentGlyph.include(r271_MarkSet.b());
            var r358_barLeft = r1_mix(r271_SB, r271_RightSB, 0.35) - r271_BBD * 0.25 * r271_HVContrast;
            r358_currentGlyph.include(r271_StdFShapeT(r271_dispiro, 0, r358_barLeft, r271_BBS));
            r358_currentGlyph.include(r271_intersection(r271_VBar.l(r358_barLeft + r271_BBD, 0, r271_Ascender, r271_BBS), r271_StdFShapeT(r271_xn$spirooutline$1aao, 1, r358_barLeft, r271_BBS)));
            r358_currentGlyph.include(r271_difference(r271_HCrossBar.top(r271_SB, r1_mix(r271_SB, r271_RightSB, 0.95), r271_fbar, r271_BBS), r271_Rect(r271_Ascender, 0, r358_barLeft, r358_barLeft + r271_BBD)));
            r358_currentGlyph.include(r271_HBar.b(r358_barLeft, r358_barLeft + r271_BBD, 0, r271_BBS));
            return void 0;
        });
    });
    return void 0;
});
