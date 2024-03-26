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
    r270_xn$Capture_Ext$2Lrc2b['$defineGlyphBlockImpl$'](r270_xn$Capture_Ext$2Lrc2b, 'Digits-Shared', function (r271_xn$Capture$2Lrc8, r271_xn$ExportCapture$2Lrc4b) {
        var r271_CodeOnum, _r271_t4, _r271_t5;
        var _r271_t0 = r271_xn$Capture$2Lrc8;
        var r271_xn$createAndSaveGlyphImpl$2Lrc3c = _r271_t0['$createAndSaveGlyphImpl$'];
        var r271_xn$NamedParameterPair$2Lrc9b = _r271_t0['$NamedParameterPair$'];
        var r271_xn$assignUnicodeImpl$2Lrc8b = _r271_t0['$assignUnicodeImpl$'];
        var r271_xn$execState$2Lrc0b = _r271_t0['$execState$'];
        var r271_para = _r271_t0.para;
        var r271_MarkSet = _r271_t0.MarkSet;
        var _r271_t1 = r271_xn$Capture$2Lrc8.Metrics;
        var r271_CAP = _r271_t1.CAP;
        var r271_XH = _r271_t1.XH;
        var r271_Translate = _r271_t1.Translate;
        var r271_TanSlope = _r271_t1.TanSlope;
        var _r271_t2 = r271_xn$Capture$2Lrc8.SpiroFns;
        var _r271_t3 = r271_xn$Capture$2Lrc8.BooleFns;
        r271_xn$ExportCapture$2Lrc4b(function () {
            var _r273_t0, _r273_t1;
            return { 'OnumHeight': r271_OnumHeight };
        });
        var r271_OnumHeight = r271_XH * r271_para.onumZeroHeightRatio;
        r271_xn$ExportCapture$2Lrc4b(function () {
            var _r275_t0, _r275_t1;
            return { 'ShiftDown': r271_ShiftDown };
        });
        var r271_ShiftDown = function () {
            var _r276_t0, _r276_t1;
            return r271_Translate((r271_OnumHeight - r271_CAP) * r271_TanSlope, r271_OnumHeight - r271_CAP);
        };
        r271_xn$ExportCapture$2Lrc4b(function () {
            var _r278_t0, _r278_t1;
            return { 'OnumMarks': r271_OnumMarks };
        });
        var r271_OnumMarks = {
            'e': r271_MarkSet.OfZone({
                'top': r271_OnumHeight,
                'bot': 0
            }),
            'p': r271_MarkSet.OfZone({
                'top': r271_OnumHeight,
                'bot': r271_OnumHeight - r271_CAP
            })
        };
        r271_xn$ExportCapture$2Lrc4b(function () {
            var _r280_t0, _r280_t1;
            return {
                'CodeLnum': r271_CodeLnum,
                'CodeOnum': r271_CodeOnum
            };
        });
        var r271_CodeLnum = function (r281_u) {
            var _r281_t0, _r281_t1;
            return r271_para.variantSelector['__defaultDigitForm'] === 'oldStyle' ? null : r281_u;
        };
        return r271_CodeOnum = function (r282_u) {
            var _r282_t0, _r282_t1;
            return r271_para.variantSelector['__defaultDigitForm'] === 'oldStyle' ? r282_u : null;
        };
    });
    return void 0;
});
