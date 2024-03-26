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
    r270_xn$Capture_Ext$2Lrc2b['$defineGlyphBlockImpl$'](r270_xn$Capture_Ext$2Lrc2b, 'Digits-Three', function (r271_xn$Capture$2Lrc8, r271_xn$ExportCapture$2Lrc4b) {
        var _r271_t9, _r271_t10;
        var _r271_t0 = r271_xn$Capture$2Lrc8;
        var r271_xn$createAndSaveGlyphImpl$2Lrc3c = _r271_t0['$createAndSaveGlyphImpl$'];
        var r271_xn$NamedParameterPair$2Lrc9b = _r271_t0['$NamedParameterPair$'];
        var r271_xn$assignUnicodeImpl$2Lrc8b = _r271_t0['$assignUnicodeImpl$'];
        var r271_xn$execState$2Lrc0b = _r271_t0['$execState$'];
        var r271_MarkSet = _r271_t0.MarkSet;
        var _r271_t1 = r271_xn$Capture$2Lrc8.Metrics;
        var r271_SB = _r271_t1.SB;
        var r271_CAP = _r271_t1.CAP;
        var r271_Rightward = _r271_t1.Rightward;
        var r271_Leftward = _r271_t1.Leftward;
        var r271_O = _r271_t1.O;
        var r271_Hook = _r271_t1.Hook;
        var r271_Stroke = _r271_t1.Stroke;
        var r271_HBarPos = _r271_t1.HBarPos;
        var r271_CThin = _r271_t1.CThin;
        var r271_RightSB = _r271_t1.RightSB;
        var r271_Middle = _r271_t1.Middle;
        var r271_ArchDepthA = _r271_t1.ArchDepthA;
        var r271_ArchDepthB = _r271_t1.ArchDepthB;
        var r271_YSmoothMidR = _r271_t1.YSmoothMidR;
        var _r271_t2 = r271_xn$Capture$2Lrc8.SpiroFns;
        var r271_g4 = _r271_t2.g4;
        var r271_flat = _r271_t2.flat;
        var r271_curl = _r271_t2.curl;
        var r271_widths = _r271_t2.widths;
        var r271_heading = _r271_t2.heading;
        var r271_dispiro = _r271_t2.dispiro;
        var r271_xn$spirooutline$1aao = _r271_t2['spiro-outline'];
        var _r271_t3 = r271_xn$Capture$2Lrc8.BooleFns;
        var r271_union = _r271_t3.union;
        var r271_intersection = _r271_t3.intersection;
        var _r271_t4 = r271_xn$Capture$2Lrc8.CommonShapes.resolve();
        var r271_VBar = _r271_t4.VBar;
        var r271_hookstart = _r271_t4.hookstart;
        var r271_hookend = _r271_t4.hookend;
        var _r271_t5 = r271_xn$Capture$2Lrc8['Common-Derivatives'].resolve();
        var r271_xn$selectvariant$7Hrq = _r271_t5['select-variant'];
        var r271_turned = _r271_t5.turned;
        var _r271_t6 = r271_xn$Capture$2Lrc8['Digits-Shared'].resolve();
        var r271_OnumHeight = _r271_t6.OnumHeight;
        var r271_OnumMarks = _r271_t6.OnumMarks;
        var r271_ShiftDown = _r271_t6.ShiftDown;
        var r271_CodeLnum = _r271_t6.CodeLnum;
        var r271_CodeOnum = _r271_t6.CodeOnum;
        var _r271_t7 = r271_xn$Capture$2Lrc8['Letter-Latin-Ezh'].resolve();
        var r271_EzhShape = _r271_t7.EzhShape;
        var r271_ThreeShapeT = function (r276_sink, r276_offset, r276_sw, r276_top) {
            var _r276_t0, _r276_t1;
            return function () {
                var _r278_t1;
                var _r278_t0 = this;
                var r278_currentGlyph = _r278_t0;
                var r278_barcenter = r276_top * r271_HBarPos;
                var r278_xMid = r1_mix(r271_SB, r271_RightSB, 0.4);
                var r278_fine = r276_sw * r271_CThin;
                r278_currentGlyph.include(r276_sink(r271_widths.rhs(r276_sw), r271_g4(r271_SB + r276_offset - r271_O, r276_top - r271_Hook), r271_hookstart(r276_top - r276_offset - r271_O), r271_g4(r271_RightSB - r276_offset, r271_YSmoothMidR(r276_top - r276_offset - r271_O, r278_barcenter - r276_sw / 2, r271_ArchDepthA, r271_ArchDepthB)), r271_flat(r278_xMid + 0.01, r278_barcenter - (r278_fine - r276_sw / 2), r271_widths.rhs.heading(r278_fine, r271_Leftward)), r271_curl(r278_xMid, r278_barcenter - (r278_fine - r276_sw / 2), r271_heading(r271_Leftward))));
                r278_currentGlyph.include(r276_sink(r271_widths.rhs(r278_fine), r271_flat(r278_xMid, r278_barcenter + (r278_fine - r276_sw / 2), r271_heading(r271_Rightward)), r271_curl(r278_xMid + 0.01, r278_barcenter + (r278_fine - r276_sw / 2), r271_heading(r271_Rightward)), r271_g4(r271_RightSB - r276_offset - r271_O * 2, r271_YSmoothMidR(r278_barcenter + r276_sw / 2, r276_offset + r271_O, r271_ArchDepthA, r271_ArchDepthB), r271_widths.rhs(r276_sw)), r271_hookend(r276_offset + r271_O), r271_g4(r271_SB + r276_offset + r271_O, r271_Hook)));
                return void 0;
            };
        };
        var r271_ThreeShape = function (r281_top) {
            var _r281_t0, _r281_t1;
            return r271_ThreeShapeT(r271_dispiro, 0, r271_Stroke, r281_top);
        };
        r271_xn$createAndSaveGlyphImpl$2Lrc3c('three.lnum.twoArcs', null, function () {
            var _r284_t1;
            var _r284_t0 = this;
            var r284_currentGlyph = _r284_t0;
            r284_currentGlyph.include(r271_MarkSet.capital());
            r284_currentGlyph.include(r271_ThreeShape(r271_CAP));
            return void 0;
        });
        r271_xn$createAndSaveGlyphImpl$2Lrc3c('three.lnum.flatTop', null, function () {
            var _r289_t1;
            var _r289_t0 = this;
            var r289_currentGlyph = _r289_t0;
            r289_currentGlyph.include(r271_MarkSet.capital());
            r289_currentGlyph.include(r271_EzhShape(r271_CAP, 0, 0.25, 0.975));
            return void 0;
        });
        r271_xn$createAndSaveGlyphImpl$2Lrc3c('three.onum.twoArcs', null, function () {
            var _r294_t1;
            var _r294_t0 = this;
            var r294_currentGlyph = _r294_t0;
            r294_currentGlyph.include(r271_OnumMarks.p());
            r294_currentGlyph.include(r271_ThreeShape(r271_CAP));
            r294_currentGlyph.include(r271_ShiftDown());
            return void 0;
        });
        r271_xn$createAndSaveGlyphImpl$2Lrc3c('three.onum.flatTop', null, function () {
            var _r300_t1;
            var _r300_t0 = this;
            var r300_currentGlyph = _r300_t0;
            r300_currentGlyph.include(r271_OnumMarks.p());
            r300_currentGlyph.include(r271_EzhShape(r271_CAP, 0, 0.25, 0.975));
            r300_currentGlyph.include(r271_ShiftDown());
            return void 0;
        });
        r271_xn$selectvariant$7Hrq('three.lnum', r271_CodeLnum('3'), new r271_xn$NamedParameterPair$2Lrc9b('follow', 'three'));
        r271_xn$selectvariant$7Hrq('three.onum', r271_CodeOnum('3'), new r271_xn$NamedParameterPair$2Lrc9b('follow', 'three'));
        r271_turned('turnDigitThree', 8587, 'three.lnum', r271_Middle, r271_CAP / 2);
        var _r271_t8 = r271_xn$Capture$2Lrc8['Letter-Blackboard'].resolve();
        var r271_BBS = _r271_t8.BBS;
        var r271_BBD = _r271_t8.BBD;
        return r271_xn$createAndSaveGlyphImpl$2Lrc3c('mathbb/three', 120795, function () {
            var _r309_t1;
            var _r309_t0 = this;
            var r309_currentGlyph = _r309_t0;
            r309_currentGlyph.include(r271_MarkSet.capital());
            r309_currentGlyph.include(r271_union(r271_ThreeShapeT(r271_dispiro, 0, r271_BBS, r271_CAP), r271_intersection(r271_ThreeShapeT(r271_xn$spirooutline$1aao, 1, r271_BBS, r271_CAP), r271_union(r271_VBar.r(r271_RightSB - r271_BBD, r271_CAP * r271_HBarPos, r271_CAP, r271_BBS), r271_VBar.r(r271_RightSB - r271_BBD - r271_O * 2, 0, r271_CAP * r271_HBarPos, r271_BBS)))));
            return void 0;
        });
    });
    return void 0;
});
