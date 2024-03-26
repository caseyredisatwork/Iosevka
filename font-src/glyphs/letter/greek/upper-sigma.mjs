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
    r270_xn$Capture_Ext$2Lrc2b['$defineGlyphBlockImpl$'](r270_xn$Capture_Ext$2Lrc2b, 'Letter-Greek-Upper-Sigma', function (r271_xn$Capture$2Lrc8, r271_xn$ExportCapture$2Lrc4b) {
        var _r271_t6, _r271_t7;
        var _r271_t0 = r271_xn$Capture$2Lrc8;
        var r271_xn$createAndSaveGlyphImpl$2Lrc3c = _r271_t0['$createAndSaveGlyphImpl$'];
        var r271_xn$NamedParameterPair$2Lrc9b = _r271_t0['$NamedParameterPair$'];
        var r271_xn$assignUnicodeImpl$2Lrc8b = _r271_t0['$assignUnicodeImpl$'];
        var r271_xn$execState$2Lrc0b = _r271_t0['$execState$'];
        var r271_MarkSet = _r271_t0.MarkSet;
        var r271_DivFrame = _r271_t0.DivFrame;
        var _r271_t1 = r271_xn$Capture$2Lrc8.Metrics;
        var r271_Width = _r271_t1.Width;
        var r271_CAP = _r271_t1.CAP;
        var r271_Stroke = _r271_t1.Stroke;
        var r271_VJut = _r271_t1.VJut;
        var r271_SLAB = _r271_t1.SLAB;
        var _r271_t2 = r271_xn$Capture$2Lrc8.SpiroFns;
        var r271_corner = _r271_t2.corner;
        var r271_xn$spirooutline$1aao = _r271_t2['spiro-outline'];
        var _r271_t3 = r271_xn$Capture$2Lrc8.BooleFns;
        var r271_union = _r271_t3.union;
        var _r271_t4 = r271_xn$Capture$2Lrc8.CommonShapes.resolve();
        var r271_VSerif = _r271_t4.VSerif;
        var r271_HBar = _r271_t4.HBar;
        var r271_DiagCor = _r271_t4.DiagCor;
        var _r271_t5 = r271_xn$Capture$2Lrc8['Common-Derivatives'].resolve();
        var r271_alias = _r271_t5.alias;
        r271_xn$ExportCapture$2Lrc4b(function () {
            var _r275_t0, _r275_t1;
            return { 'SigmaShape': r271_SigmaShape };
        });
        var r271_SigmaShape = function () {
            var _r276_t6;
            var _r276_t7 = arguments;
            var _r276_t0 = [].slice.call(_r276_t7, 0);
            var _r276_t1 = [];
            var _r276_t2 = 0;
            while (_r276_t2 < _r276_t0.length) {
                if (!(_r276_t0[_r276_t2] instanceof r271_xn$NamedParameterPair$2Lrc9b))
                    _r276_t1.push(_r276_t0[_r276_t2]);
                _r276_t2 = _r276_t2 + 1;
            }
            var _r276_t3 = _r276_t0;
            var _r276_t4 = _r276_t3.length;
            var _r276_t5 = 0;
            while (_r276_t5 < _r276_t4) {
                _r276_t2 = _r276_t3[_r276_t5];
                if (_r276_t2 && _r276_t2 instanceof r271_xn$NamedParameterPair$2Lrc9b && _r276_t2.left === 'df')
                    r276_df = _r276_t2.right;
                if (_r276_t2 && _r276_t2 instanceof r271_xn$NamedParameterPair$2Lrc9b && _r276_t2.left === 'top')
                    r276_top = _r276_t2.right;
                if (_r276_t2 && _r276_t2 instanceof r271_xn$NamedParameterPair$2Lrc9b && _r276_t2.left === 'bottom')
                    r276_bottom = _r276_t2.right;
                if (_r276_t2 && _r276_t2 instanceof r271_xn$NamedParameterPair$2Lrc9b && _r276_t2.left === 'fine')
                    r276_fine = _r276_t2.right;
                if (_r276_t2 && _r276_t2 instanceof r271_xn$NamedParameterPair$2Lrc9b && _r276_t2.left === 'noSerif')
                    r276_noSerif = _r276_t2.right;
                if (_r276_t2 && _r276_t2 instanceof r271_xn$NamedParameterPair$2Lrc9b && _r276_t2.left === 'pCenter')
                    r276_pCenter = _r276_t2.right;
                if (_r276_t2 && _r276_t2 instanceof r271_xn$NamedParameterPair$2Lrc9b && _r276_t2.left === 'offsetLeft')
                    r276_offsetLeft = _r276_t2.right;
                _r276_t5 = _r276_t5 + 1;
            }
            var r276_df = r1_fallback(r276_df, _r276_t1[0]);
            var r276_top = r1_fallback(r276_top, _r276_t1[1]);
            var r276_bottom = r1_fallback(r276_bottom, _r276_t1[2]);
            var r276_fine = r1_fallback(r276_fine, _r276_t1[3]);
            var r276_noSerif = r1_fallback(r276_noSerif, _r276_t1[4], false);
            var r276_pCenter = r1_fallback(r276_pCenter, _r276_t1[5], 0.5);
            var r276_offsetLeft = r1_fallback(r276_offsetLeft, _r276_t1[6], 0);
            return function () {
                var _r282_t1;
                var _r282_t0 = this;
                var r282_currentGlyph = _r282_t0;
                var r282_cor = r271_DiagCor(r276_top - r276_bottom, r276_df.rightSB - r276_df.leftSB);
                var r282_midx = r1_mix(r276_df.leftSB, r276_df.rightSB, r276_pCenter) - r276_fine / 2;
                r282_currentGlyph.include(r271_union(r271_HBar.t(r276_offsetLeft + r276_df.leftSB, r276_df.rightSB, r276_top, r276_fine), r271_HBar.b(r276_offsetLeft + r276_df.leftSB, r276_df.rightSB, r276_bottom, r276_fine), r271_xn$spirooutline$1aao(r271_corner(r276_df.leftSB + r276_offsetLeft, r276_bottom + r276_fine), r271_corner(r276_df.leftSB + r276_offsetLeft + r276_fine * r282_cor, r276_bottom + r276_fine), r271_corner(r282_midx + r276_offsetLeft + r276_fine * r282_cor, r1_mix(r276_bottom, r276_top, 0.5)), r271_corner(r276_df.leftSB + r276_offsetLeft + r276_fine * r282_cor, r276_top - r276_fine), r271_corner(r276_df.leftSB + r276_offsetLeft, r276_top - r276_fine), r271_corner(r282_midx + r276_offsetLeft, r1_mix(r276_bottom, r276_top, 0.5)))));
                if (!r276_noSerif && r271_SLAB) {
                    r282_currentGlyph.include(r271_VSerif.dr(r276_df.rightSB, r276_top, r271_VJut));
                    r282_currentGlyph.include(r271_VSerif.ur(r276_df.rightSB, r276_bottom, r271_VJut));
                }
                return void 0;
            };
        };
        r271_xn$createAndSaveGlyphImpl$2Lrc3c('grek/Sigma', 931, function () {
            var _r288_t1;
            var _r288_t0 = this;
            var r288_currentGlyph = _r288_t0;
            r288_currentGlyph.setWidth(r271_Width);
            r288_currentGlyph.include(r271_MarkSet.capital());
            r288_currentGlyph.include(r271_SigmaShape(r271_DivFrame(1), r271_CAP, 0, r271_Stroke));
            return void 0;
        });
        return r271_alias('latinSigma', 425, 'grek/Sigma');
    });
    return void 0;
});
