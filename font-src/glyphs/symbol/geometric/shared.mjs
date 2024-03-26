'use strict';
import * as _s0_t0 from '../../../support/utils.mjs';
import * as _s0_t1 from '../../../meta/aesthetics.mjs';
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
var r1_DesignParameters = _r1_t9.DesignParameters;
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
    r270_xn$Capture_Ext$2Lrc2b['$defineGlyphBlockImpl$'](r270_xn$Capture_Ext$2Lrc2b, 'Symbol-Geometric-Shared', function (r271_xn$Capture$2Lrc8, r271_xn$ExportCapture$2Lrc4b) {
        var r271_GeometricSizes, _r271_t4, _r271_t5;
        var _r271_t0 = r271_xn$Capture$2Lrc8;
        var r271_xn$createAndSaveGlyphImpl$2Lrc3c = _r271_t0['$createAndSaveGlyphImpl$'];
        var r271_xn$NamedParameterPair$2Lrc9b = _r271_t0['$NamedParameterPair$'];
        var r271_xn$assignUnicodeImpl$2Lrc8b = _r271_t0['$assignUnicodeImpl$'];
        var r271_xn$execState$2Lrc0b = _r271_t0['$execState$'];
        var r271_para = _r271_t0.para;
        var _r271_t1 = r271_xn$Capture$2Lrc8.Metrics;
        var r271_DesignParameters = _r271_t1.DesignParameters;
        var r271_Width = _r271_t1.Width;
        var r271_SB = _r271_t1.SB;
        var r271_SymbolMid = _r271_t1.SymbolMid;
        var r271_AdviceStroke = _r271_t1.AdviceStroke;
        var r271_GeometryStroke = _r271_t1.GeometryStroke;
        var r271_StrokeWidthBlend = _r271_t1.StrokeWidthBlend;
        var _r271_t2 = r271_xn$Capture$2Lrc8.SpiroFns;
        var _r271_t3 = r271_xn$Capture$2Lrc8.BooleFns;
        r271_xn$ExportCapture$2Lrc4b(function () {
            var _r273_t0, _r273_t1;
            return { 'GeometricDim': r271_GeometricDim };
        });
        var r271_GeometricDim = function (r274_unitWidth, r274_fullWidth) {
            var _r274_t0, _r274_t1;
            var r274_s = r274_fullWidth / r274_unitWidth;
            var r274_sb = 0.625 * r271_SB * r274_s * r274_s;
            var r274_tallSize = 0.5 * r271_para.arrowHeight * (r274_unitWidth - r274_sb) * Math.pow(r274_s, 1 / 3);
            var r274_size = Math.min(0.5 * r274_fullWidth - r274_sb, r274_tallSize);
            return {
                'UnitWidth': r274_unitWidth,
                'Scalar': r274_s,
                'Size': r274_size,
                'TallSize': r274_tallSize,
                'Width': r274_fullWidth,
                'Left': 0.5 * r274_fullWidth - r274_size,
                'MidX': 0.5 * r274_fullWidth,
                'Right': 0.5 * r274_fullWidth + r274_size,
                'Top': r271_SymbolMid + r274_size,
                'MidY': r271_SymbolMid,
                'Bot': r271_SymbolMid - r274_size
            };
        };
        r271_xn$ExportCapture$2Lrc4b(function () {
            var _r276_t0, _r276_t1;
            return { 'UnicodeWeightGrade': r271_UnicodeWeightGrade };
        });
        var r271_UnicodeWeightGrade = function (r277_n, r277_s) {
            var _r277_t0, _r277_t1;
            var r277_kwPow = 1;
            var r277_kkw = 2 / Math.pow(4, r277_kwPow);
            var r277_kw = 10 - r277_s - r277_kkw * Math.pow(r277_n, r277_kwPow);
            var r277_mulPow = function (r278_ss, r278_pm) {
                var _r278_t0, _r278_t1;
                return (1 / 4 + r278_ss / 8) * r271_StrokeWidthBlend(2, 1);
            };
            var r277_kMul = Math.pow(r277_n, r277_mulPow(r277_s)) / Math.pow(4, r277_mulPow(2));
            var r277_kAdj = r271_GeometryStroke / r271_AdviceStroke(6);
            return r277_kMul * r277_kAdj * r271_AdviceStroke(r277_kw);
        };
        r271_xn$ExportCapture$2Lrc4b(function () {
            var _r280_t0, _r280_t1;
            return { 'GeometricSizes': r271_GeometricSizes };
        });
        return r271_GeometricSizes = function (r281_Geom) {
            var _r281_t0, _r281_t1;
            return {
                'Large': { 'size': r271_DesignParameters.GeometricLargeX(r281_Geom.Width, r281_Geom.UnitWidth) },
                'Medium': { 'size': r271_DesignParameters.geometric_medium_x },
                'MediumSmall': {
                    'size': r271_DesignParameters.geometric_medium_small_x,
                    'sw': Math.min(r271_GeometryStroke, r271_AdviceStroke(5, r281_Geom.Scalar))
                },
                'Small': {
                    'size': r271_DesignParameters.geometric_small_x,
                    'sw': Math.min(r271_GeometryStroke, r271_AdviceStroke(6, r281_Geom.Scalar))
                },
                'SlightlySmall': {
                    'size': r271_DesignParameters.geometric_slightly_small_x,
                    'sw': Math.min(r271_GeometryStroke, r271_AdviceStroke(6.5, r281_Geom.Scalar))
                },
                'VerySmall': {
                    'size': r271_DesignParameters.geometric_very_small_x,
                    'sw': Math.min(r271_GeometryStroke, r271_AdviceStroke(7, r281_Geom.Scalar))
                },
                'Tiny': {
                    'size': r271_DesignParameters.geometric_tiny_x,
                    'sw': Math.min(r271_GeometryStroke, r271_AdviceStroke(8, r281_Geom.Scalar))
                },
                'Oblique': { 'sw': Math.min(r271_GeometryStroke, r271_AdviceStroke(4.75, r281_Geom.Scalar)) },
                'MediumOblique': {
                    'size': r271_DesignParameters.geometric_medium_x,
                    'sw': Math.min(r271_GeometryStroke, r271_AdviceStroke(4.75, r281_Geom.Scalar))
                },
                'MediumSmallOblique': {
                    'size': r271_DesignParameters.geometric_medium_small_x,
                    'sw': Math.min(r271_GeometryStroke, r271_AdviceStroke(5.25, r281_Geom.Scalar))
                },
                'SmallOblique': {
                    'size': r271_DesignParameters.geometric_small_x,
                    'sw': Math.min(r271_GeometryStroke, r271_AdviceStroke(6.25, r281_Geom.Scalar))
                },
                'VerySmallOblique': {
                    'size': r271_DesignParameters.geometric_very_small_x,
                    'sw': Math.min(r271_GeometryStroke, r271_AdviceStroke(7.25, r281_Geom.Scalar))
                },
                'TinyOblique': {
                    'size': r271_DesignParameters.geometric_tiny_x,
                    'sw': Math.min(r271_GeometryStroke, r271_AdviceStroke(8.25, r281_Geom.Scalar))
                },
                'TinyInner': { 'innerSize': 1 / 4 },
                'SmallInner': { 'innerSize': 1 / 3 },
                'MediumInner': { 'innerSize': 2 / 3 }
            };
        };
    });
    return void 0;
});
