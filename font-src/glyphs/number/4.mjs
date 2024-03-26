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
    r270_xn$Capture_Ext$2Lrc2b['$defineGlyphBlockImpl$'](r270_xn$Capture_Ext$2Lrc2b, 'Digits-Four', function (r271_xn$Capture$2Lrc8, r271_xn$ExportCapture$2Lrc4b) {
        var _r271_t8, _r271_t9;
        var _r271_t0 = r271_xn$Capture$2Lrc8;
        var r271_xn$createAndSaveGlyphImpl$2Lrc3c = _r271_t0['$createAndSaveGlyphImpl$'];
        var r271_xn$NamedParameterPair$2Lrc9b = _r271_t0['$NamedParameterPair$'];
        var r271_xn$assignUnicodeImpl$2Lrc8b = _r271_t0['$assignUnicodeImpl$'];
        var r271_xn$execState$2Lrc0b = _r271_t0['$execState$'];
        var r271_MarkSet = _r271_t0.MarkSet;
        var _r271_t1 = r271_xn$Capture$2Lrc8.Metrics;
        var r271_Width = _r271_t1.Width;
        var r271_SB = _r271_t1.SB;
        var r271_CAP = _r271_t1.CAP;
        var r271_HVContrast = _r271_t1.HVContrast;
        var r271_OX = _r271_t1.OX;
        var r271_Stroke = _r271_t1.Stroke;
        var r271_Jut = _r271_t1.Jut;
        var r271_SLAB = _r271_t1.SLAB;
        var r271_HalfStroke = _r271_t1.HalfStroke;
        var r271_RightSB = _r271_t1.RightSB;
        var r271_AdviceStroke = _r271_t1.AdviceStroke;
        var _r271_t2 = r271_xn$Capture$2Lrc8.SpiroFns;
        var r271_g4 = _r271_t2.g4;
        var r271_widths = _r271_t2.widths;
        var r271_dispiro = _r271_t2.dispiro;
        var _r271_t3 = r271_xn$Capture$2Lrc8.BooleFns;
        var r271_union = _r271_t3.union;
        var r271_intersection = _r271_t3.intersection;
        var r271_difference = _r271_t3.difference;
        var _r271_t4 = r271_xn$Capture$2Lrc8.CommonShapes.resolve();
        var r271_Rect = _r271_t4.Rect;
        var r271_HSerif = _r271_t4.HSerif;
        var r271_HBar = _r271_t4.HBar;
        var r271_VBar = _r271_t4.VBar;
        var _r271_t5 = r271_xn$Capture$2Lrc8['Common-Derivatives'].resolve();
        var r271_xn$selectvariant$7Hrq = _r271_t5['select-variant'];
        var _r271_t6 = r271_xn$Capture$2Lrc8['Digits-Shared'].resolve();
        var r271_OnumMarks = _r271_t6.OnumMarks;
        var r271_ShiftDown = _r271_t6.ShiftDown;
        var r271_CodeLnum = _r271_t6.CodeLnum;
        var r271_CodeOnum = _r271_t6.CodeOnum;
        var r271_FourStdShape = function () {
            var _r275_t6;
            var _r275_t7 = arguments;
            var _r275_t0 = [].slice.call(_r275_t7, 0);
            var _r275_t1 = [];
            var _r275_t2 = 0;
            while (_r275_t2 < _r275_t0.length) {
                if (!(_r275_t0[_r275_t2] instanceof r271_xn$NamedParameterPair$2Lrc9b))
                    _r275_t1.push(_r275_t0[_r275_t2]);
                _r275_t2 = _r275_t2 + 1;
            }
            var _r275_t3 = _r275_t0;
            var _r275_t4 = _r275_t3.length;
            var _r275_t5 = 0;
            while (_r275_t5 < _r275_t4) {
                _r275_t2 = _r275_t3[_r275_t5];
                if (_r275_t2 && _r275_t2 instanceof r271_xn$NamedParameterPair$2Lrc9b && _r275_t2.left === 'top')
                    r275_top = _r275_t2.right;
                if (_r275_t2 && _r275_t2 instanceof r271_xn$NamedParameterPair$2Lrc9b && _r275_t2.left === 'open')
                    r275_open = _r275_t2.right;
                if (_r275_t2 && _r275_t2 instanceof r271_xn$NamedParameterPair$2Lrc9b && _r275_t2.left === 'crossing')
                    r275_crossing = _r275_t2.right;
                if (_r275_t2 && _r275_t2 instanceof r271_xn$NamedParameterPair$2Lrc9b && _r275_t2.left === 'fine')
                    r275_fine = _r275_t2.right;
                if (_r275_t2 && _r275_t2 instanceof r271_xn$NamedParameterPair$2Lrc9b && _r275_t2.left === 'sw')
                    r275_sw = _r275_t2.right;
                if (_r275_t2 && _r275_t2 instanceof r271_xn$NamedParameterPair$2Lrc9b && _r275_t2.left === 'bbd')
                    r275_bbd = _r275_t2.right;
                _r275_t5 = _r275_t5 + 1;
            }
            var r275_top = r1_fallback(r275_top, _r275_t1[0]);
            var r275_open = r1_fallback(r275_open, _r275_t1[1]);
            var r275_crossing = r1_fallback(r275_crossing, _r275_t1[2]);
            var r275_fine = r1_fallback(r275_fine, _r275_t1[3], r271_AdviceStroke(3));
            var r275_sw = r1_fallback(r275_sw, _r275_t1[4], r271_Stroke);
            var r275_bbd = r1_fallback(r275_bbd, _r275_t1[5], 0);
            return function () {
                var _r281_t1;
                var _r281_t0 = this;
                var r281_currentGlyph = _r281_t0;
                var r281_yBar = r275_top * 0.3 + 0.625 * r275_sw;
                var r281_xVertBar = r1_mix(r271_SB, r271_RightSB, r275_crossing ? 0.75 : 0.9125) - r275_bbd * 0.75 + (r275_crossing ? 0.375 * r275_sw * r271_HVContrast : 0);
                var r281_yVertBarTop = r1_mix(r281_yBar - r275_sw, r275_top, r275_open ? 0.5 : 1) - (r275_open ? 0.3 * r275_sw : 0);
                var r281_xHBarTerminal = r275_crossing ? r271_RightSB : r281_xVertBar;
                var r281_xSlopeTop = r281_xVertBar - r275_sw * r271_HVContrast - (r275_open ? 0.25 : 1) * r275_fine * r271_HVContrast * (r275_crossing ? 0.25 : 0.5);
                r281_currentGlyph.include(r271_union(r271_VBar.r(r281_xVertBar, 0, r281_yVertBarTop, r275_sw), r271_difference(r271_HBar.t(r271_SB + r271_OX, r281_xHBarTerminal, r281_yBar, r275_sw), r271_Rect(r271_CAP, 0, r281_xVertBar, r281_xVertBar + r275_bbd)), r271_intersection(r275_open ? r271_Rect(r275_top, r281_yBar, 0, r271_Width) : r271_Rect(r275_top, r281_yBar, 0, r281_xVertBar), r271_dispiro(r271_widths.rhs(r275_fine), r271_g4(r271_SB + r271_OX, r281_yBar), r271_g4(r1_mix(r271_SB + r271_OX, r281_xSlopeTop, 2), r1_mix(r281_yBar, r275_top, 2))))));
                if (r275_bbd) {
                    r281_currentGlyph.include(r271_VBar.r(r281_xVertBar + r275_bbd, 0, r281_yVertBarTop, r275_sw));
                    r281_currentGlyph.include(r271_HBar.t(r281_xVertBar, r281_xVertBar + r275_bbd, r271_CAP, r275_sw));
                    r281_currentGlyph.include(r271_HBar.b(r281_xVertBar, r281_xVertBar + r275_bbd, 0, r275_sw));
                }
                if (!r275_bbd && r271_SLAB)
                    r281_currentGlyph.include(r271_HSerif.mb(r281_xVertBar - r271_HalfStroke * r271_HVContrast, 0, r271_Jut));
                return void 0;
            };
        };
        var r271_FourOpenShape = function (r287_top, r287_crossing) {
            var _r287_t0, _r287_t1;
            return function () {
                var _r289_t1;
                var _r289_t0 = this;
                var r289_currentGlyph = _r289_t0;
                var r289_yBar = r287_top * 0.4;
                var r289_fine = r271_AdviceStroke(3);
                var r289_xVertBar = r1_mix(r271_SB, r271_RightSB, r287_crossing ? 0.825 : 0.9125);
                var r289_xHBarTerminal = r287_crossing ? r271_RightSB : r289_xVertBar;
                r289_currentGlyph.include(r271_HBar.t(r271_SB, r289_xHBarTerminal, r289_yBar));
                r289_currentGlyph.include(r271_VBar.r(r289_xVertBar, 0, r1_mix(r289_yBar - r271_Stroke, r287_top, 0.75)));
                r289_currentGlyph.include(r271_VBar.l(r271_SB, r289_yBar, r287_top));
                if (r271_SLAB)
                    r289_currentGlyph.include(r271_HSerif.mb(r289_xVertBar - r271_HalfStroke * r271_HVContrast, 0, r271_Jut));
                return void 0;
            };
        };
        r271_xn$createAndSaveGlyphImpl$2Lrc3c('four.lnum.closed', null, function () {
            var _r296_t1;
            var _r296_t0 = this;
            var r296_currentGlyph = _r296_t0;
            r296_currentGlyph.include(r271_MarkSet.capital());
            r296_currentGlyph.include(r271_FourStdShape(r271_CAP, false, true));
            return void 0;
        });
        r271_xn$createAndSaveGlyphImpl$2Lrc3c('four.lnum.closedNonCrossing', null, function () {
            var _r301_t1;
            var _r301_t0 = this;
            var r301_currentGlyph = _r301_t0;
            r301_currentGlyph.include(r271_MarkSet.capital());
            r301_currentGlyph.include(r271_FourStdShape(r271_CAP, false, false));
            return void 0;
        });
        r271_xn$createAndSaveGlyphImpl$2Lrc3c('four.lnum.semiOpen', null, function () {
            var _r306_t1;
            var _r306_t0 = this;
            var r306_currentGlyph = _r306_t0;
            r306_currentGlyph.include(r271_MarkSet.capital());
            r306_currentGlyph.include(r271_FourStdShape(r271_CAP, true, true, new r271_xn$NamedParameterPair$2Lrc9b('fine', r271_AdviceStroke(2.75))));
            return void 0;
        });
        r271_xn$createAndSaveGlyphImpl$2Lrc3c('four.lnum.semiOpenNonCrossing', null, function () {
            var _r312_t1;
            var _r312_t0 = this;
            var r312_currentGlyph = _r312_t0;
            r312_currentGlyph.include(r271_MarkSet.capital());
            r312_currentGlyph.include(r271_FourStdShape(r271_CAP, true, false, new r271_xn$NamedParameterPair$2Lrc9b('fine', r271_AdviceStroke(2.75))));
            return void 0;
        });
        r271_xn$createAndSaveGlyphImpl$2Lrc3c('four.lnum.open', null, function () {
            var _r318_t1;
            var _r318_t0 = this;
            var r318_currentGlyph = _r318_t0;
            r318_currentGlyph.include(r271_MarkSet.capital());
            r318_currentGlyph.include(r271_FourOpenShape(r271_CAP, true));
            return void 0;
        });
        r271_xn$createAndSaveGlyphImpl$2Lrc3c('four.lnum.openNonCrossing', null, function () {
            var _r323_t1;
            var _r323_t0 = this;
            var r323_currentGlyph = _r323_t0;
            r323_currentGlyph.include(r271_MarkSet.capital());
            r323_currentGlyph.include(r271_FourOpenShape(r271_CAP, false));
            return void 0;
        });
        r271_xn$createAndSaveGlyphImpl$2Lrc3c('four.onum.closed', null, function () {
            var _r328_t1;
            var _r328_t0 = this;
            var r328_currentGlyph = _r328_t0;
            r328_currentGlyph.include(r271_OnumMarks.p());
            r328_currentGlyph.include(r271_FourStdShape(r271_CAP, false, true));
            r328_currentGlyph.include(r271_ShiftDown());
            return void 0;
        });
        r271_xn$createAndSaveGlyphImpl$2Lrc3c('four.onum.closedNonCrossing', null, function () {
            var _r334_t1;
            var _r334_t0 = this;
            var r334_currentGlyph = _r334_t0;
            r334_currentGlyph.include(r271_OnumMarks.p());
            r334_currentGlyph.include(r271_FourStdShape(r271_CAP, false, false));
            r334_currentGlyph.include(r271_ShiftDown());
            return void 0;
        });
        r271_xn$createAndSaveGlyphImpl$2Lrc3c('four.onum.semiOpen', null, function () {
            var _r340_t1;
            var _r340_t0 = this;
            var r340_currentGlyph = _r340_t0;
            r340_currentGlyph.include(r271_OnumMarks.p());
            r340_currentGlyph.include(r271_FourStdShape(r271_CAP, true, true));
            r340_currentGlyph.include(r271_ShiftDown());
            return void 0;
        });
        r271_xn$createAndSaveGlyphImpl$2Lrc3c('four.onum.semiOpenNonCrossing', null, function () {
            var _r346_t1;
            var _r346_t0 = this;
            var r346_currentGlyph = _r346_t0;
            r346_currentGlyph.include(r271_OnumMarks.p());
            r346_currentGlyph.include(r271_FourStdShape(r271_CAP, true, false));
            r346_currentGlyph.include(r271_ShiftDown());
            return void 0;
        });
        r271_xn$createAndSaveGlyphImpl$2Lrc3c('four.onum.open', null, function () {
            var _r352_t1;
            var _r352_t0 = this;
            var r352_currentGlyph = _r352_t0;
            r352_currentGlyph.include(r271_OnumMarks.p());
            r352_currentGlyph.include(r271_FourOpenShape(r271_CAP, true));
            r352_currentGlyph.include(r271_ShiftDown());
            return void 0;
        });
        r271_xn$createAndSaveGlyphImpl$2Lrc3c('four.onum.openNonCrossing', null, function () {
            var _r358_t1;
            var _r358_t0 = this;
            var r358_currentGlyph = _r358_t0;
            r358_currentGlyph.include(r271_OnumMarks.p());
            r358_currentGlyph.include(r271_FourOpenShape(r271_CAP, false));
            r358_currentGlyph.include(r271_ShiftDown());
            return void 0;
        });
        r271_xn$selectvariant$7Hrq('four.lnum', r271_CodeLnum('4'), new r271_xn$NamedParameterPair$2Lrc9b('follow', 'four'));
        r271_xn$selectvariant$7Hrq('four.onum', r271_CodeOnum('4'), new r271_xn$NamedParameterPair$2Lrc9b('follow', 'four'));
        var _r271_t7 = r271_xn$Capture$2Lrc8['Letter-Blackboard'].resolve();
        var r271_BBS = _r271_t7.BBS;
        var r271_BBD = _r271_t7.BBD;
        var r271_BBBarCenter = _r271_t7.BBBarCenter;
        return r271_xn$createAndSaveGlyphImpl$2Lrc3c('mathbb/four', 120796, function () {
            var _r367_t1;
            var _r367_t0 = this;
            var r367_currentGlyph = _r367_t0;
            r367_currentGlyph.include(r271_MarkSet.capital());
            r367_currentGlyph.include(r271_FourStdShape(r271_CAP, false, true, new r271_xn$NamedParameterPair$2Lrc9b('sw', r271_BBS), new r271_xn$NamedParameterPair$2Lrc9b('bbd', r271_BBD), new r271_xn$NamedParameterPair$2Lrc9b('fine', r271_BBS)));
            return void 0;
        });
    });
    return void 0;
});
