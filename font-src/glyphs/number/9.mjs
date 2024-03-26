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
    r270_xn$Capture_Ext$2Lrc2b['$defineGlyphBlockImpl$'](r270_xn$Capture_Ext$2Lrc2b, 'Digits-Nine', function (r271_xn$Capture$2Lrc8, r271_xn$ExportCapture$2Lrc4b) {
        var _r271_t9, _r271_t10;
        var _r271_t0 = r271_xn$Capture$2Lrc8;
        var r271_xn$createAndSaveGlyphImpl$2Lrc3c = _r271_t0['$createAndSaveGlyphImpl$'];
        var r271_xn$NamedParameterPair$2Lrc9b = _r271_t0['$NamedParameterPair$'];
        var r271_xn$assignUnicodeImpl$2Lrc8b = _r271_t0['$assignUnicodeImpl$'];
        var r271_xn$execState$2Lrc0b = _r271_t0['$execState$'];
        var r271_MarkSet = _r271_t0.MarkSet;
        var _r271_t1 = r271_xn$Capture$2Lrc8.Metrics;
        var r271_CAP = _r271_t1.CAP;
        var r271_Middle = _r271_t1.Middle;
        var _r271_t2 = r271_xn$Capture$2Lrc8.SpiroFns;
        var _r271_t3 = r271_xn$Capture$2Lrc8.BooleFns;
        var _r271_t4 = r271_xn$Capture$2Lrc8.CommonShapes.resolve();
        var r271_FlipAround = _r271_t4.FlipAround;
        var _r271_t5 = r271_xn$Capture$2Lrc8['Common-Derivatives'].resolve();
        var r271_xn$selectvariant$7Hrq = _r271_t5['select-variant'];
        var _r271_t6 = r271_xn$Capture$2Lrc8['Digits-Shared'].resolve();
        var r271_OnumHeight = _r271_t6.OnumHeight;
        var r271_OnumMarks = _r271_t6.OnumMarks;
        var r271_ShiftDown = _r271_t6.ShiftDown;
        var r271_CodeLnum = _r271_t6.CodeLnum;
        var r271_CodeOnum = _r271_t6.CodeOnum;
        var _r271_t7 = r271_xn$Capture$2Lrc8['Digits-Six'].resolve();
        var r271_ClosedContourSixShape = _r271_t7.ClosedContourSixShape;
        var r271_OpenContourSixShape = _r271_t7.OpenContourSixShape;
        var r271_StraightBarSixShape = _r271_t7.StraightBarSixShape;
        r271_xn$createAndSaveGlyphImpl$2Lrc3c('nine.lnum.closedContour', null, function () {
            var _r278_t1;
            var _r278_t0 = this;
            var r278_currentGlyph = _r278_t0;
            r278_currentGlyph.include(r271_MarkSet.capital());
            r278_currentGlyph.include(r271_ClosedContourSixShape(r271_CAP));
            r278_currentGlyph.include(r271_FlipAround(r271_Middle, r271_CAP / 2));
            return void 0;
        });
        r271_xn$createAndSaveGlyphImpl$2Lrc3c('nine.onum.closedContour', null, function () {
            var _r284_t1;
            var _r284_t0 = this;
            var r284_currentGlyph = _r284_t0;
            r284_currentGlyph.include(r271_OnumMarks.p());
            r284_currentGlyph.include(r271_ClosedContourSixShape(r271_CAP));
            r284_currentGlyph.include(r271_FlipAround(r271_Middle, r271_OnumHeight / 2));
            return void 0;
        });
        r271_xn$createAndSaveGlyphImpl$2Lrc3c('nine.lnum.openContour', null, function () {
            var _r290_t1;
            var _r290_t0 = this;
            var r290_currentGlyph = _r290_t0;
            r290_currentGlyph.include(r271_MarkSet.capital());
            r290_currentGlyph.include(r271_OpenContourSixShape(r271_CAP));
            r290_currentGlyph.include(r271_FlipAround(r271_Middle, r271_CAP / 2));
            return void 0;
        });
        r271_xn$createAndSaveGlyphImpl$2Lrc3c('nine.onum.openContour', null, function () {
            var _r296_t1;
            var _r296_t0 = this;
            var r296_currentGlyph = _r296_t0;
            r296_currentGlyph.include(r271_OnumMarks.p());
            r296_currentGlyph.include(r271_OpenContourSixShape(r271_CAP));
            r296_currentGlyph.include(r271_FlipAround(r271_Middle, r271_OnumHeight / 2));
            return void 0;
        });
        r271_xn$createAndSaveGlyphImpl$2Lrc3c('nine.lnum.straightBar', null, function () {
            var _r302_t1;
            var _r302_t0 = this;
            var r302_currentGlyph = _r302_t0;
            r302_currentGlyph.include(r271_MarkSet.capital());
            r302_currentGlyph.include(r271_StraightBarSixShape(r271_CAP));
            r302_currentGlyph.include(r271_FlipAround(r271_Middle, r271_CAP / 2));
            return void 0;
        });
        r271_xn$createAndSaveGlyphImpl$2Lrc3c('nine.onum.straightBar', null, function () {
            var _r308_t1;
            var _r308_t0 = this;
            var r308_currentGlyph = _r308_t0;
            r308_currentGlyph.include(r271_OnumMarks.p());
            r308_currentGlyph.include(r271_StraightBarSixShape(r271_CAP));
            r308_currentGlyph.include(r271_FlipAround(r271_Middle, r271_OnumHeight / 2));
            return void 0;
        });
        r271_xn$selectvariant$7Hrq('nine.lnum', r271_CodeLnum('9'), new r271_xn$NamedParameterPair$2Lrc9b('follow', 'nine'));
        r271_xn$selectvariant$7Hrq('nine.onum', r271_CodeOnum('9'), new r271_xn$NamedParameterPair$2Lrc9b('follow', 'nine'));
        var _r271_t8 = r271_xn$Capture$2Lrc8['Letter-Blackboard'].resolve();
        var r271_BBS = _r271_t8.BBS;
        var r271_BBD = _r271_t8.BBD;
        return r271_xn$createAndSaveGlyphImpl$2Lrc3c('mathbb/nine', 120801, function () {
            var _r317_t1;
            var _r317_t0 = this;
            var r317_currentGlyph = _r317_t0;
            r317_currentGlyph.include(r271_MarkSet.capital());
            r317_currentGlyph.include(r271_StraightBarSixShape(r271_CAP, new r271_xn$NamedParameterPair$2Lrc9b('sw', r271_BBS), new r271_xn$NamedParameterPair$2Lrc9b('bbd', r271_BBD)));
            r317_currentGlyph.include(r271_FlipAround(r271_Middle, r271_CAP / 2));
            return void 0;
        });
    });
    return void 0;
});
