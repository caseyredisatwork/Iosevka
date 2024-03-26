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
var r1_fallback = _r1_t8.fallback;
var r1_SuffixCfg = _r1_t8.SuffixCfg;
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
    r270_xn$Capture_Ext$2Lrc2b['$defineGlyphBlockImpl$'](r270_xn$Capture_Ext$2Lrc2b, 'Digits-Seven', function (r271_xn$Capture$2Lrc8, r271_xn$ExportCapture$2Lrc4b) {
        var r271_suffix, r271_Body, r271_Serif, _r271_t9, _r271_t11, _r271_t12, _r271_t13, _r271_tag14;
        var _r271_t0 = r271_xn$Capture$2Lrc8;
        var r271_xn$createAndSaveGlyphImpl$2Lrc3c = _r271_t0['$createAndSaveGlyphImpl$'];
        var r271_xn$NamedParameterPair$2Lrc9b = _r271_t0['$NamedParameterPair$'];
        var r271_xn$assignUnicodeImpl$2Lrc8b = _r271_t0['$assignUnicodeImpl$'];
        var r271_xn$execState$2Lrc0b = _r271_t0['$execState$'];
        var r271_MarkSet = _r271_t0.MarkSet;
        var _r271_t1 = r271_xn$Capture$2Lrc8.Metrics;
        var r271_SB = _r271_t1.SB;
        var r271_CAP = _r271_t1.CAP;
        var r271_HVContrast = _r271_t1.HVContrast;
        var r271_Downward = _r271_t1.Downward;
        var r271_O = _r271_t1.O;
        var r271_OX = _r271_t1.OX;
        var r271_Stroke = _r271_t1.Stroke;
        var r271_LongJut = _r271_t1.LongJut;
        var r271_VJut = _r271_t1.VJut;
        var r271_HalfStroke = _r271_t1.HalfStroke;
        var r271_RightSB = _r271_t1.RightSB;
        var r271_AdviceStroke = _r271_t1.AdviceStroke;
        var _r271_t2 = r271_xn$Capture$2Lrc8.SpiroFns;
        var r271_g4 = _r271_t2.g4;
        var r271_g2 = _r271_t2.g2;
        var r271_corner = _r271_t2.corner;
        var r271_end = _r271_t2.end;
        var r271_straight = _r271_t2.straight;
        var r271_widths = _r271_t2.widths;
        var r271_heading = _r271_t2.heading;
        var r271_alsoThru = _r271_t2.alsoThru;
        var r271_dispiro = _r271_t2.dispiro;
        var _r271_t3 = r271_xn$Capture$2Lrc8.BooleFns;
        var r271_union = _r271_t3.union;
        var r271_intersection = _r271_t3.intersection;
        var _r271_t4 = r271_xn$Capture$2Lrc8.CommonShapes.resolve();
        var r271_Rect = _r271_t4.Rect;
        var r271_VSerif = _r271_t4.VSerif;
        var r271_HBar = _r271_t4.HBar;
        var r271_ExtLineCenter = _r271_t4.ExtLineCenter;
        var r271_DiagCorDs = _r271_t4.DiagCorDs;
        var r271_MaskAbove = _r271_t4.MaskAbove;
        var r271_MaskBelow = _r271_t4.MaskBelow;
        var _r271_t5 = r271_xn$Capture$2Lrc8['Common-Derivatives'].resolve();
        var r271_xn$selectvariant$7Hrq = _r271_t5['select-variant'];
        var r271_xn$referglyph$1aao = _r271_t5['refer-glyph'];
        var _r271_t6 = r271_xn$Capture$2Lrc8['Digits-Shared'].resolve();
        var r271_OnumMarks = _r271_t6.OnumMarks;
        var r271_ShiftDown = _r271_t6.ShiftDown;
        var r271_CodeLnum = _r271_t6.CodeLnum;
        var r271_CodeOnum = _r271_t6.CodeOnum;
        var r271_SevenXLeft = r1_mix(r271_SB, r271_RightSB, 0.28);
        var r271_StraightBody = function (r275_top) {
            var _r275_t0, _r275_t1;
            return r271_union(r271_HBar.t(r271_SB, r271_RightSB, r275_top), r271_intersection(r271_Rect(r275_top - r271_Stroke, 0, r271_SB, r271_RightSB), r271_dispiro(r271_widths.rhs(), r271_corner(r271_RightSB, r275_top - r271_Stroke), r271_corner(r1_mix(r271_RightSB, r271_SevenXLeft + 0.75 * r271_Stroke * r271_HVContrast, 2), r1_mix(r275_top - r271_Stroke, 0, 2)))));
        };
        var r271_SevenXLeftBend = r1_mix(r271_SB, r271_RightSB, 0.38);
        var r271_BendBody = function (r276_top) {
            var _r276_t0, _r276_t1;
            return r271_union(r271_HBar.t(r271_SB, r271_RightSB, r276_top), r271_intersection(r271_MaskBelow(r276_top - r271_Stroke), r271_MaskAbove(0), r271_dispiro(r271_widths.rhs(), r271_g4(r271_RightSB, r276_top - r271_Stroke), r271_g4.down.mid(r271_SevenXLeftBend + 0.6 * r271_Stroke * r271_HVContrast, 0, r271_heading(r271_Downward)), r271_g4(r271_RightSB, -r276_top + r271_Stroke))));
        };
        var r271_CurlyBody = function (r277_top) {
            var _r277_t0, _r277_t1;
            return r271_union(r271_HBar.t(r271_SB, r271_RightSB - r271_HalfStroke, r277_top), r271_intersection(r271_MaskBelow(r277_top), r271_MaskAbove(0), r271_dispiro(r271_g4.down.start(r271_RightSB, r277_top, r271_widths.rhs.heading(r271_Stroke, r271_Downward)), r271_alsoThru.g2(0.5, 0.5), r271_g4.down.mid(r271_SevenXLeftBend + 0.6 * r271_Stroke * r271_HVContrast, 0, r271_heading(r271_Downward)), r271_alsoThru.g2(0.5, 0.5), r271_g4.down.end(r271_RightSB, -r277_top, r271_widths.rhs.heading(r271_Stroke, r271_Downward)))));
        };
        var r271_StartSerif = function (r278_top) {
            var _r278_t0, _r278_t1;
            return r271_VSerif.dl(r271_SB + (r271_OX - r271_O), r278_top, r271_VJut);
        };
        var r271_StartSerifThick = function (r279_top) {
            var _r279_t0, _r279_t1;
            return r271_VSerif.dl(r271_SB + (r271_OX - r271_O), r279_top, r271_VJut, r271_AdviceStroke(2.75));
        };
        var r271_Crossbar = function (r280_top) {
            var _r280_t0, _r280_t1;
            return function () {
                var _r282_t1;
                var _r282_t0 = this;
                var r282_currentGlyph = _r282_t0;
                var r282_m = r1_mix(r271_SevenXLeft, r271_RightSB - r271_HalfStroke * r271_HVContrast, 0.5);
                r282_currentGlyph.include(r271_HBar.m(r282_m - r271_Stroke * r271_HVContrast * 0.25 - r271_LongJut * 0.8, r282_m + r271_Stroke * r271_HVContrast * 0.25 + r271_LongJut * 0.7, r1_mix(0, r280_top - r271_Stroke * 0.25, 0.5)));
                return void 0;
            };
        };
        var r271_BendCrossbar = function (r284_top) {
            var _r284_t0, _r284_t1;
            return function () {
                var _r286_t1;
                var _r286_t0 = this;
                var r286_currentGlyph = _r286_t0;
                var r286_m = r1_mix(r271_SevenXLeftBend, r271_RightSB - r271_HalfStroke * r271_HVContrast, 0.25) + 0.125 * r271_Stroke;
                r286_currentGlyph.include(r271_HBar.m(r286_m - r271_Stroke * r271_HVContrast * 0.25 - r271_LongJut * 0.8, r286_m + r271_Stroke * r271_HVContrast * 0.25 + r271_LongJut * 0.7, r1_mix(0, r284_top - r271_Stroke * 0.25, 0.5)));
                return void 0;
            };
        };
        var r271_CurlyCrossbar = function (r288_top) {
            var _r288_t0, _r288_t1;
            return function () {
                var _r290_t1;
                var _r290_t0 = this;
                var r290_currentGlyph = _r290_t0;
                var r290_m = r1_mix(r271_SevenXLeftBend, r271_RightSB - r271_HalfStroke * r271_HVContrast, 0.375);
                r290_currentGlyph.include(r271_HBar.m(r290_m - r271_Stroke * r271_HVContrast * 0.25 - r271_LongJut * 0.8, r290_m + r271_Stroke * r271_HVContrast * 0.25 + r271_LongJut * 0.7, r1_mix(0, r288_top - r271_Stroke * 0.25, 0.5)));
                return void 0;
            };
        };
        var r271_SevenConfig = r1_SuffixCfg.weave({
            'straight': r271_StraightBody,
            'bend': r271_BendBody,
            'curly': r271_CurlyBody
        }, {
            'serifless': void 0,
            'serifed': r271_StartSerif
        }, function (r292_body) {
            var _r292_t0, _r292_t1, _r292_t2;
            return {
                '': void 0,
                'crossbar': (_r292_t0 = r292_body, _r292_t0 === 'straight' ? r271_Crossbar : _r292_t0 === 'bend' ? r271_BendCrossbar : _r292_t0 === 'curly' ? r271_CurlyCrossbar : void 0)
            };
        });
        var _r271_t7 = Object.entries(r271_SevenConfig)[Symbol.iterator]();
        var _r271_t8 = void 0;
        while (!(_r271_t8 = _r271_t7.next()).done) {
            _r271_t9 = _r271_t8.value;
            r271_suffix = _r271_t9[0];
            r271_Body = _r271_t9[1][0];
            r271_Serif = _r271_t9[1][1];
            r271_Crossbar = _r271_t9[1][2];
            _r271_t9[1];
            (function () {
                r271_xn$createAndSaveGlyphImpl$2Lrc3c('seven.lnum.' + r271_suffix, null, function () {
                    var _r298_t1;
                    var _r298_t0 = this;
                    var r298_currentGlyph = _r298_t0;
                    r298_currentGlyph.include(r271_MarkSet.capital());
                    if (r271_Body)
                        r298_currentGlyph.include(r271_Body(r271_CAP));
                    if (r271_Serif)
                        r298_currentGlyph.include(r271_Serif(r271_CAP));
                    if (r271_Crossbar)
                        r298_currentGlyph.include(r271_Crossbar(r271_CAP));
                    return void 0;
                });
                return r271_xn$createAndSaveGlyphImpl$2Lrc3c('seven.onum.' + r271_suffix, null, function () {
                    var _r305_t1;
                    var _r305_t0 = this;
                    var r305_currentGlyph = _r305_t0;
                    r305_currentGlyph.include(r271_OnumMarks.p());
                    r305_currentGlyph.include(r271_xn$referglyph$1aao('seven.lnum.' + r271_suffix));
                    r305_currentGlyph.include(r271_ShiftDown());
                    return void 0;
                });
            }());
        }
        r271_xn$selectvariant$7Hrq('seven.lnum', r271_CodeLnum('7'), new r271_xn$NamedParameterPair$2Lrc9b('follow', 'seven'));
        r271_xn$selectvariant$7Hrq('seven.onum', r271_CodeOnum('7'), new r271_xn$NamedParameterPair$2Lrc9b('follow', 'seven'));
        var _r271_t10 = r271_xn$Capture$2Lrc8['Letter-Blackboard'].resolve();
        var r271_BBS = _r271_t10.BBS;
        var r271_BBD = _r271_t10.BBD;
        return r271_xn$createAndSaveGlyphImpl$2Lrc3c('mathbb/seven', 120799, function () {
            var _r314_t1;
            var _r314_t0 = this;
            var r314_currentGlyph = _r314_t0;
            r314_currentGlyph.include(r271_MarkSet.capital());
            var r314_tr = r271_RightSB - r271_BBS / 2;
            var r314_kDiag = r271_DiagCorDs(r271_CAP - r271_BBS, r314_tr - r271_SevenXLeft, r271_BBD * 0.75);
            var r314_xTerm = r271_SevenXLeft - 0.25 * r314_kDiag * r271_BBD;
            r314_currentGlyph.include(r271_union(r271_HBar.t(r271_SB, r271_RightSB, r271_CAP, r271_BBS), r271_intersection(r271_Rect(r271_CAP, 0, 0, r271_RightSB), r271_union(r271_HBar.b(r314_xTerm, r314_xTerm + r314_kDiag * r271_BBD, 0, r271_BBS), r271_ExtLineCenter(2, r271_BBS, r314_tr, r271_CAP - r271_BBS, r314_xTerm + r314_kDiag * r271_BBD, 0), r271_ExtLineCenter(2, r271_BBS, r314_tr - r271_BBD, r271_CAP - r271_BBS, r314_xTerm, 0)))));
            return void 0;
        });
    });
    return void 0;
});
