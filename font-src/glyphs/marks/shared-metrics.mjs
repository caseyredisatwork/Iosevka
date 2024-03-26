'use strict';
import * as _s0_t0 from 'typo-geom';
import * as _s0_t1 from '../../support/utils.mjs';
import * as _s0_t2 from '../../meta/aesthetics.mjs';
import * as _s0_t3 from '../../support/gr.mjs';
import * as _s0_t4 from '../../support/geometry/box.mjs';
var _s0_t5;
export {
    _s0_t5 as apply
};
var r1_apply, _r1_t0, _r1_t1, _r1_t2, _r1_t3, _r1_t4, _r1_t5, _r1_t6, _r1_t7;
var _r1_t8 = _s0_t0;
var r1_Arcs = _r1_t8.Arcs;
var r1_Quadify = _r1_t8.Quadify;
var r1_ShapeConv = _r1_t8.ShapeConv;
var _r1_t9 = _s0_t1;
var r1_mix = _r1_t9.mix;
var r1_linreg = _r1_t9.linreg;
var r1_clamp = _r1_t9.clamp;
var r1_fallback = _r1_t9.fallback;
var _r1_t10 = _s0_t2;
var r1_DesignParameters = _r1_t10.DesignParameters;
var _r1_t11 = _s0_t3;
var r1_TieMark = _r1_t11.TieMark;
var r1_TieGlyph = _r1_t11.TieGlyph;
var _r1_t12 = _s0_t4;
var r1_Box = _r1_t12.Box;
var r1_xn$GlyphBlocks$2Lrc2b = [];
_s0_t5 = r1_apply = function () {
    var r269_block, _r269_t4, _r269_t6;
    var _r269_t3 = this;
    var _r269_t0 = r1_xn$GlyphBlocks$2Lrc2b;
    var _r269_t1 = _r269_t0.length;
    var _r269_t2 = 0;
    var _r269_t5 = _r269_t2 < _r269_t1;
    while (_r269_t5) {
        _r269_t6 = (r269_block = _r269_t0[_r269_t2], r269_block(_r269_t3), _r269_t2 = _r269_t2 + 1);
        _r269_t5 = _r269_t2 < _r269_t1;
    }
    return _r269_t6;
};
r1_xn$GlyphBlocks$2Lrc2b.push(function (r273_xn$Capture_Ext$2Lrc2b) {
    var _r273_t0, _r273_t1;
    r273_xn$Capture_Ext$2Lrc2b['$defineGlyphBlockImpl$'](r273_xn$Capture_Ext$2Lrc2b, 'Mark-Shared-Metrics', function (r274_xn$Capture$2Lrc8, r274_xn$ExportCapture$2Lrc4b) {
        var r274_dialytikaRadius, _r274_t6, _r274_t7;
        var _r274_t0 = r274_xn$Capture$2Lrc8;
        var r274_xn$createAndSaveGlyphImpl$2Lrc3c = _r274_t0['$createAndSaveGlyphImpl$'];
        var r274_xn$NamedParameterPair$2Lrc9b = _r274_t0['$NamedParameterPair$'];
        var r274_xn$assignUnicodeImpl$2Lrc8b = _r274_t0['$assignUnicodeImpl$'];
        var r274_xn$execState$2Lrc0b = _r274_t0['$execState$'];
        var _r274_t1 = r274_xn$Capture$2Lrc8.Metrics;
        var r274_SB = _r274_t1.SB;
        var r274_XH = _r274_t1.XH;
        var r274_Stroke = _r274_t1.Stroke;
        var r274_AccentWidth = _r274_t1.AccentWidth;
        var r274_AccentHeight = _r274_t1.AccentHeight;
        var r274_HalfStroke = _r274_t1.HalfStroke;
        var r274_RightSB = _r274_t1.RightSB;
        var r274_Middle = _r274_t1.Middle;
        var r274_DotRadius = _r274_t1.DotRadius;
        var r274_AdviceStroke = _r274_t1.AdviceStroke;
        var r274_AdviceStroke2 = _r274_t1.AdviceStroke2;
        var _r274_t2 = r274_xn$Capture$2Lrc8.SpiroFns;
        var _r274_t3 = r274_xn$Capture$2Lrc8.BooleFns;
        var _r274_t4 = r274_xn$Capture$2Lrc8.CommonShapes.resolve();
        var _r274_t5 = r274_xn$Capture$2Lrc8['Common-Derivatives'].resolve();
        r274_xn$ExportCapture$2Lrc4b(function () {
            var _r278_t0, _r278_t1;
            return {
                'markExtend': r274_markExtend,
                'markStroke': r274_markStroke,
                'markHalfStroke': r274_markHalfStroke,
                'markStress': r274_markStress,
                'markFine': r274_markFine
            };
        });
        var r274_markExtend = r274_AccentWidth * 0.5;
        var r274_markStroke = Math.min(r274_AdviceStroke2(3.375, 4, r274_XH), 0.875 * r274_AccentHeight);
        var r274_markHalfStroke = 0.5 * r274_markStroke;
        var r274_markStress = r274_markHalfStroke * 1.1;
        var r274_markFine = Math.min(r274_markHalfStroke * 0.9, 0.5 * r274_AdviceStroke2(3.875, 4.25, r274_XH));
        r274_xn$ExportCapture$2Lrc4b(function () {
            var _r280_t0, _r280_t1;
            return {
                'asciiMarkZoomX': r274_asciiMarkZoomX,
                'asciiMarkZoomY': r274_asciiMarkZoomY
            };
        });
        var r274_asciiMarkZoomX = (r274_RightSB - r274_SB) / (r274_markExtend * 3);
        var r274_asciiMarkZoomY = 1.25 * r274_asciiMarkZoomX;
        r274_xn$ExportCapture$2Lrc4b(function () {
            var _r282_t0, _r282_t1;
            return {
                'markMiddle': r274_markMiddle,
                'markDotsRadius': r274_markDotsRadius,
                'dialytikaRadius': r274_dialytikaRadius
            };
        });
        var r274_markMiddle = -r274_Middle;
        var r274_markDotsRadius = r274_DotRadius * Math.min(1, r274_markStress / r274_HalfStroke);
        return r274_dialytikaRadius = r274_DotRadius * Math.min(1, r274_AdviceStroke(5) / r274_Stroke);
    });
    return void 0;
});
