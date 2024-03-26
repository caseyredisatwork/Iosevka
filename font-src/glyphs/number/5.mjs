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
    r270_xn$Capture_Ext$2Lrc2b['$defineGlyphBlockImpl$'](r270_xn$Capture_Ext$2Lrc2b, 'Digits-Five', function (r271_xn$Capture$2Lrc8, r271_xn$ExportCapture$2Lrc4b) {
        var _r271_t8, _r271_t9;
        var _r271_t0 = r271_xn$Capture$2Lrc8;
        var r271_xn$createAndSaveGlyphImpl$2Lrc3c = _r271_t0['$createAndSaveGlyphImpl$'];
        var r271_xn$NamedParameterPair$2Lrc9b = _r271_t0['$NamedParameterPair$'];
        var r271_xn$assignUnicodeImpl$2Lrc8b = _r271_t0['$assignUnicodeImpl$'];
        var r271_xn$execState$2Lrc0b = _r271_t0['$execState$'];
        var r271_MarkSet = _r271_t0.MarkSet;
        var _r271_t1 = r271_xn$Capture$2Lrc8.Metrics;
        var r271_DesignParameters = _r271_t1.DesignParameters;
        var r271_Width = _r271_t1.Width;
        var r271_SB = _r271_t1.SB;
        var r271_CAP = _r271_t1.CAP;
        var r271_XH = _r271_t1.XH;
        var r271_HVContrast = _r271_t1.HVContrast;
        var r271_Upward = _r271_t1.Upward;
        var r271_O = _r271_t1.O;
        var r271_OX = _r271_t1.OX;
        var r271_Hook = _r271_t1.Hook;
        var r271_AHook = _r271_t1.AHook;
        var r271_Stroke = _r271_t1.Stroke;
        var r271_VJut = _r271_t1.VJut;
        var r271_SLAB = _r271_t1.SLAB;
        var r271_RightSB = _r271_t1.RightSB;
        var r271_Middle = _r271_t1.Middle;
        var r271_ArchDepthA = _r271_t1.ArchDepthA;
        var r271_ArchDepthB = _r271_t1.ArchDepthB;
        var r271_YSmoothMidR = _r271_t1.YSmoothMidR;
        var _r271_t2 = r271_xn$Capture$2Lrc8.SpiroFns;
        var r271_g4 = _r271_t2.g4;
        var r271_flat = _r271_t2.flat;
        var r271_widths = _r271_t2.widths;
        var r271_heading = _r271_t2.heading;
        var r271_dispiro = _r271_t2.dispiro;
        var r271_xn$spirooutline$1aao = _r271_t2['spiro-outline'];
        var _r271_t3 = r271_xn$Capture$2Lrc8.BooleFns;
        var r271_union = _r271_t3.union;
        var r271_intersection = _r271_t3.intersection;
        var r271_difference = _r271_t3.difference;
        var _r271_t4 = r271_xn$Capture$2Lrc8.CommonShapes.resolve();
        var r271_Rect = _r271_t4.Rect;
        var r271_VSerif = _r271_t4.VSerif;
        var r271_HBar = _r271_t4.HBar;
        var r271_VBar = _r271_t4.VBar;
        var r271_hookstart = _r271_t4.hookstart;
        var r271_hookend = _r271_t4.hookend;
        var _r271_t5 = r271_xn$Capture$2Lrc8['Common-Derivatives'].resolve();
        var r271_xn$selectvariant$7Hrq = _r271_t5['select-variant'];
        var _r271_t6 = r271_xn$Capture$2Lrc8['Digits-Shared'].resolve();
        var r271_OnumMarks = _r271_t6.OnumMarks;
        var r271_ShiftDown = _r271_t6.ShiftDown;
        var r271_CodeLnum = _r271_t6.CodeLnum;
        var r271_CodeOnum = _r271_t6.CodeOnum;
        var r271_FiveShape = function () {
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
                if (_r275_t2 && _r275_t2 instanceof r271_xn$NamedParameterPair$2Lrc9b && _r275_t2.left === 'bp')
                    r275_bp = _r275_t2.right;
                if (_r275_t2 && _r275_t2 instanceof r271_xn$NamedParameterPair$2Lrc9b && _r275_t2.left === 'sw')
                    r275_sw = _r275_t2.right;
                if (_r275_t2 && _r275_t2 instanceof r271_xn$NamedParameterPair$2Lrc9b && _r275_t2.left === 'bbd')
                    r275_bbd = _r275_t2.right;
                if (_r275_t2 && _r275_t2 instanceof r271_xn$NamedParameterPair$2Lrc9b && _r275_t2.left === 'obl')
                    r275_obl = _r275_t2.right;
                if (_r275_t2 && _r275_t2 instanceof r271_xn$NamedParameterPair$2Lrc9b && _r275_t2.left === 'zt')
                    r275_zt = _r275_t2.right;
                _r275_t5 = _r275_t5 + 1;
            }
            var r275_top = r1_fallback(r275_top, _r275_t1[0]);
            var r275_bp = r1_fallback(r275_bp, _r275_t1[1]);
            var r275_sw = r1_fallback(r275_sw, _r275_t1[2], r271_Stroke);
            var r275_bbd = r1_fallback(r275_bbd, _r275_t1[3], 0);
            var r275_obl = r1_fallback(r275_obl, _r275_t1[4], 0);
            var r275_zt = r1_fallback(r275_zt, _r275_t1[5], 0);
            return function () {
                var _r281_t1;
                var _r281_t0 = this;
                var r281_currentGlyph = _r281_t0;
                var r281_t1 = r275_top * r275_bp * 0.8;
                var r281_t2 = r275_top * r275_bp;
                var r281_ycurly = r271_YSmoothMidR(r281_t2, 0, r271_ArchDepthA, r271_ArchDepthB);
                var r281_xleft = r1_mix(r271_SB, r271_RightSB, 0.025) + r275_zt;
                var r281_xright = r1_mix(r271_RightSB, r271_SB, 0.05) - (r271_OX - r271_O);
                var r281_FiveStroke = r271_dispiro(r271_widths.rhs(r275_sw), r271_g4(r281_xleft, r281_t2 - r271_AHook * r275_top / r271_CAP), r271_hookstart(r281_t2 - r271_O), r271_g4(r271_RightSB - r271_OX, r281_ycurly), r271_hookend(r271_O), r271_g4(r271_SB, r271_Hook * r275_top / r271_CAP));
                var r281_FiveStrokeMask = r271_xn$spirooutline$1aao(r271_g4(r281_xleft + 1, r281_t2 - r271_AHook * r275_top / r271_CAP), r271_hookstart(r281_t2 - r271_O - 1), r271_g4(r271_RightSB - r271_OX - 1, r281_ycurly), r271_hookend(r271_O + 1), r271_g4(r271_SB + 1, r271_Hook * r275_top / r271_CAP));
                var r281_kGap = 0.144 - 0.1 * r275_sw / r281_t2;
                r281_currentGlyph.include(r271_difference(function () {
                    var _r284_t1;
                    var _r284_t0 = this;
                    var r284_currentGlyph = _r284_t0;
                    var r284_fiveStroke = r284_currentGlyph.include(r281_FiveStroke);
                    var r284_firstKnot = r284_fiveStroke.rhsKnots[0];
                    var r284_oblCor = Math.hypot(1, r275_obl);
                    var r284_xVBar = r284_firstKnot.x - r284_oblCor * r275_sw * r271_HVContrast;
                    var r284_xVBarOffset = (r275_top - r284_firstKnot.y) * r275_obl;
                    r284_currentGlyph.include(r271_HBar.t(r275_zt ? r271_SB : r284_xVBar + r284_xVBarOffset, r281_xright, r275_top, r275_sw));
                    r284_currentGlyph.include(r271_union(r271_intersection(r271_Rect(r284_firstKnot.y + r275_sw, r284_firstKnot.y, 0, r271_Width), r271_dispiro(r271_flat(r284_xVBar, r284_firstKnot.y, r271_widths.rhs.heading(r275_sw, r271_Upward)), r271_flat(r284_xVBar + r284_xVBarOffset, r275_top, r271_heading(r271_Upward)))), r271_intersection(r271_Rect(r275_top, r284_firstKnot.y + r275_sw, 0, r271_Width), r271_dispiro(r271_flat(r284_xVBar, r284_firstKnot.y, r271_widths.rhs.heading(r284_oblCor * r275_sw, r271_Upward)), r271_flat(r284_xVBar + r284_xVBarOffset, r275_top, r271_heading(r271_Upward))))));
                    if (r275_bbd) {
                        r284_currentGlyph.include(r271_intersection(r281_FiveStrokeMask, r271_VBar.r(r271_RightSB - r271_OX - r275_bbd, 0, r271_CAP, r275_sw)));
                        r284_currentGlyph.include(r271_difference(r271_VBar.r(r284_firstKnot.x + r275_bbd, 0, r271_CAP, r275_sw), r281_FiveStrokeMask, r271_Rect(r281_t2 / 2, 0, 0, r271_Width)));
                    }
                    return void 0;
                }, r271_Rect(r281_t2 / 2 + r281_t2 * r281_kGap, r281_t2 / 2 - r281_t2 * r281_kGap, 0, r271_Middle)));
                if (!r275_bbd && r271_SLAB)
                    r281_currentGlyph.include(r271_VSerif.dr(r281_xright, r275_top, r271_VJut));
                return void 0;
            };
        };
        r271_xn$createAndSaveGlyphImpl$2Lrc3c('five.lnum.verticalUpperLeftBar', null, function () {
            var _r293_t1;
            var _r293_t0 = this;
            var r293_currentGlyph = _r293_t0;
            r293_currentGlyph.include(r271_MarkSet.capital());
            r293_currentGlyph.include(r271_FiveShape(r271_CAP, r271_DesignParameters.fiveBarPos));
            return void 0;
        });
        r271_xn$createAndSaveGlyphImpl$2Lrc3c('five.onum.verticalUpperLeftBar', null, function () {
            var _r298_t1;
            var _r298_t0 = this;
            var r298_currentGlyph = _r298_t0;
            r298_currentGlyph.include(r271_OnumMarks.p());
            r298_currentGlyph.include(r271_FiveShape(r271_CAP, r271_DesignParameters.fiveBarPos));
            r298_currentGlyph.include(r271_ShiftDown());
            return void 0;
        });
        r271_xn$createAndSaveGlyphImpl$2Lrc3c('five.lnum.obliqueUpperLeftBar', null, function () {
            var _r304_t1;
            var _r304_t0 = this;
            var r304_currentGlyph = _r304_t0;
            r304_currentGlyph.include(r271_MarkSet.capital());
            r304_currentGlyph.include(r271_FiveShape(r271_CAP, r271_DesignParameters.fiveBarPos, new r271_xn$NamedParameterPair$2Lrc9b('obl', 1 / 12)));
            return void 0;
        });
        r271_xn$createAndSaveGlyphImpl$2Lrc3c('five.onum.obliqueUpperLeftBar', null, function () {
            var _r310_t1;
            var _r310_t0 = this;
            var r310_currentGlyph = _r310_t0;
            r310_currentGlyph.include(r271_OnumMarks.p());
            r310_currentGlyph.include(r271_FiveShape(r271_CAP, r271_DesignParameters.fiveBarPos, new r271_xn$NamedParameterPair$2Lrc9b('obl', 1 / 12)));
            r310_currentGlyph.include(r271_ShiftDown());
            return void 0;
        });
        r271_xn$selectvariant$7Hrq('five.lnum', r271_CodeLnum('5'), new r271_xn$NamedParameterPair$2Lrc9b('follow', 'five'));
        r271_xn$selectvariant$7Hrq('five.onum', r271_CodeOnum('5'), new r271_xn$NamedParameterPair$2Lrc9b('follow', 'five'));
        r271_xn$createAndSaveGlyphImpl$2Lrc3c('zhuangToneFive', 444, function () {
            var _r319_t1;
            var _r319_t0 = this;
            var r319_currentGlyph = _r319_t0;
            r319_currentGlyph.include(r271_MarkSet.capital());
            r319_currentGlyph.include(r271_FiveShape(r271_CAP, r271_DesignParameters.fiveBarPos, new r271_xn$NamedParameterPair$2Lrc9b('zt', (r271_RightSB - r271_SB) * 0.05)));
            return void 0;
        });
        r271_xn$createAndSaveGlyphImpl$2Lrc3c('zhuangtonefive', 445, function () {
            var _r325_t1;
            var _r325_t0 = this;
            var r325_currentGlyph = _r325_t0;
            r325_currentGlyph.include(r271_MarkSet.e());
            r325_currentGlyph.include(r271_FiveShape(r271_XH, r271_DesignParameters.fiveBarPos, new r271_xn$NamedParameterPair$2Lrc9b('zt', (r271_RightSB - r271_SB) * 0.05)));
            return void 0;
        });
        var _r271_t7 = r271_xn$Capture$2Lrc8['Letter-Blackboard'].resolve();
        var r271_BBS = _r271_t7.BBS;
        var r271_BBD = _r271_t7.BBD;
        return r271_xn$createAndSaveGlyphImpl$2Lrc3c('mathbb/five', 120797, function () {
            var _r332_t1;
            var _r332_t0 = this;
            var r332_currentGlyph = _r332_t0;
            r332_currentGlyph.include(r271_MarkSet.capital());
            r332_currentGlyph.include(r271_FiveShape(r271_CAP, r271_DesignParameters.fiveBarPos, new r271_xn$NamedParameterPair$2Lrc9b('sw', r271_BBS), new r271_xn$NamedParameterPair$2Lrc9b('bbd', r271_BBD)));
            return void 0;
        });
    });
    return void 0;
});
