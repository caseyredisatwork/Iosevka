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
    r270_xn$Capture_Ext$2Lrc2b['$defineGlyphBlockImpl$'](r270_xn$Capture_Ext$2Lrc2b, 'Letter-Greek-Lower-Upsilon', function (r271_xn$Capture$2Lrc8, r271_xn$ExportCapture$2Lrc4b) {
        var _r271_t6, _r271_t7;
        var _r271_t0 = r271_xn$Capture$2Lrc8;
        var r271_xn$createAndSaveGlyphImpl$2Lrc3c = _r271_t0['$createAndSaveGlyphImpl$'];
        var r271_xn$NamedParameterPair$2Lrc9b = _r271_t0['$NamedParameterPair$'];
        var r271_xn$assignUnicodeImpl$2Lrc8b = _r271_t0['$assignUnicodeImpl$'];
        var r271_xn$execState$2Lrc0b = _r271_t0['$execState$'];
        var r271_MarkSet = _r271_t0.MarkSet;
        var _r271_t1 = r271_xn$Capture$2Lrc8.Metrics;
        var r271_SB = _r271_t1.SB;
        var r271_XH = _r271_t1.XH;
        var r271_TanSlope = _r271_t1.TanSlope;
        var r271_Downward = _r271_t1.Downward;
        var r271_O = _r271_t1.O;
        var r271_OX = _r271_t1.OX;
        var r271_Stroke = _r271_t1.Stroke;
        var r271_SLAB = _r271_t1.SLAB;
        var r271_RightSB = _r271_t1.RightSB;
        var r271_SideJut = _r271_t1.SideJut;
        var r271_SmallArchDepthA = _r271_t1.SmallArchDepthA;
        var r271_SmallArchDepthB = _r271_t1.SmallArchDepthB;
        var r271_CorrectionOMidX = _r271_t1.CorrectionOMidX;
        var _r271_t2 = r271_xn$Capture$2Lrc8.SpiroFns;
        var r271_g4 = _r271_t2.g4;
        var r271_flat = _r271_t2.flat;
        var r271_curl = _r271_t2.curl;
        var r271_widths = _r271_t2.widths;
        var r271_heading = _r271_t2.heading;
        var r271_archv = _r271_t2.archv;
        var r271_arcvh = _r271_t2.arcvh;
        var r271_dispiro = _r271_t2.dispiro;
        var _r271_t3 = r271_xn$Capture$2Lrc8.BooleFns;
        var _r271_t4 = r271_xn$Capture$2Lrc8.CommonShapes.resolve();
        var r271_HSerif = _r271_t4.HSerif;
        var _r271_t5 = r271_xn$Capture$2Lrc8['Common-Derivatives'].resolve();
        var r271_LowerUpsilonShape = function () {
            var _r274_t6;
            var _r274_t7 = arguments;
            var _r274_t0 = [].slice.call(_r274_t7, 0);
            var _r274_t1 = [];
            var _r274_t2 = 0;
            while (_r274_t2 < _r274_t0.length) {
                if (!(_r274_t0[_r274_t2] instanceof r271_xn$NamedParameterPair$2Lrc9b))
                    _r274_t1.push(_r274_t0[_r274_t2]);
                _r274_t2 = _r274_t2 + 1;
            }
            var _r274_t3 = _r274_t0;
            var _r274_t4 = _r274_t3.length;
            var _r274_t5 = 0;
            while (_r274_t5 < _r274_t4) {
                _r274_t2 = _r274_t3[_r274_t5];
                if (_r274_t2 && _r274_t2 instanceof r271_xn$NamedParameterPair$2Lrc9b && _r274_t2.left === 'k')
                    r274_k = _r274_t2.right;
                if (_r274_t2 && _r274_t2 instanceof r271_xn$NamedParameterPair$2Lrc9b && _r274_t2.left === 'top')
                    r274_top = _r274_t2.right;
                if (_r274_t2 && _r274_t2 instanceof r271_xn$NamedParameterPair$2Lrc9b && _r274_t2.left === 'ada')
                    r274_ada = _r274_t2.right;
                if (_r274_t2 && _r274_t2 instanceof r271_xn$NamedParameterPair$2Lrc9b && _r274_t2.left === 'adb')
                    r274_adb = _r274_t2.right;
                if (_r274_t2 && _r274_t2 instanceof r271_xn$NamedParameterPair$2Lrc9b && _r274_t2.left === 'sw')
                    r274_sw = _r274_t2.right;
                _r274_t5 = _r274_t5 + 1;
            }
            var r274_k = r1_fallback(r274_k, _r274_t1[0]);
            var r274_top = r1_fallback(r274_top, _r274_t1[1]);
            var r274_ada = r1_fallback(r274_ada, _r274_t1[2]);
            var r274_adb = r1_fallback(r274_adb, _r274_t1[3]);
            var r274_sw = r1_fallback(r274_sw, _r274_t1[4], r271_Stroke);
            return function () {
                var _r280_t1;
                var _r280_t0 = this;
                var r280_currentGlyph = _r280_t0;
                var r280_xArcRight = r271_RightSB - r271_OX;
                var r280_yArcRight = r1_mix(0, r274_top, 0.6) - r274_sw * (0.2 + r271_TanSlope);
                var r280_xArcEnd = r1_mix(r271_SB, r271_RightSB, 0.82) + r274_sw * 0.375;
                var r280_yArcEnd = r274_top - r271_O + r271_Stroke * (0.1 - r271_TanSlope);
                r280_currentGlyph.include(r271_dispiro(r271_widths.lhs(r274_sw), r271_flat(r271_SB, r274_top, r271_heading(r271_Downward)), r271_curl(r271_SB, r274_adb), r271_arcvh(), r271_g4(r1_mix(r271_SB, r271_RightSB, r274_k) + r271_CorrectionOMidX * r274_sw, r271_O), r271_archv(), r271_g4(r280_xArcRight, r280_yArcRight), r271_g4(r280_xArcEnd, r280_yArcEnd)));
                return void 0;
            };
        };
        return r271_xn$createAndSaveGlyphImpl$2Lrc3c('grek/upsilon', 965, function () {
            var _r284_t1;
            var _r284_t0 = this;
            var r284_currentGlyph = _r284_t0;
            r284_currentGlyph.include(r271_MarkSet.e());
            r284_currentGlyph.include(r271_LowerUpsilonShape(0.5, r271_XH, r271_SmallArchDepthA, r271_SmallArchDepthB));
            if (r271_SLAB)
                r284_currentGlyph.include(r271_HSerif.lt(r271_SB, r271_XH, r271_SideJut));
            return void 0;
        });
    });
    return void 0;
});
