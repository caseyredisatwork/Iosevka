'use strict';
import * as _s0_t0 from '../../support/utils.mjs';
var _s0_t1;
export {
    _s0_t1 as apply
};
var r1_apply, _r1_t0, _r1_t1, _r1_t2, _r1_t3, _r1_t4, _r1_t5, _r1_t6, _r1_t7;
var _r1_t8 = _s0_t0;
var r1_mix = _r1_t8.mix;
var r1_linreg = _r1_t8.linreg;
var r1_clamp = _r1_t8.clamp;
var r1_fallback = _r1_t8.fallback;
var r1_xn$GlyphBlocks$2Lrc2b = [];
_s0_t1 = r1_apply = function () {
    var r265_block, _r265_t4, _r265_t6;
    var _r265_t3 = this;
    var _r265_t0 = r1_xn$GlyphBlocks$2Lrc2b;
    var _r265_t1 = _r265_t0.length;
    var _r265_t2 = 0;
    var _r265_t5 = _r265_t2 < _r265_t1;
    while (_r265_t5) {
        _r265_t6 = (r265_block = _r265_t0[_r265_t2], r265_block(_r265_t3), _r265_t2 = _r265_t2 + 1);
        _r265_t5 = _r265_t2 < _r265_t1;
    }
    return _r265_t6;
};
r1_xn$GlyphBlocks$2Lrc2b.push(function (r269_xn$Capture_Ext$2Lrc2b) {
    var _r269_t0, _r269_t1;
    r269_xn$Capture_Ext$2Lrc2b['$defineGlyphBlockImpl$'](r269_xn$Capture_Ext$2Lrc2b, 'Shared-Symbol-Shapes', function (r270_xn$Capture$2Lrc8, r270_xn$ExportCapture$2Lrc4b) {
        var r270_CreateWaveShape, _r270_t6, _r270_t7;
        var _r270_t0 = r270_xn$Capture$2Lrc8;
        var r270_xn$createAndSaveGlyphImpl$2Lrc3c = _r270_t0['$createAndSaveGlyphImpl$'];
        var r270_xn$NamedParameterPair$2Lrc9b = _r270_t0['$NamedParameterPair$'];
        var r270_xn$assignUnicodeImpl$2Lrc8b = _r270_t0['$assignUnicodeImpl$'];
        var r270_xn$execState$2Lrc0b = _r270_t0['$execState$'];
        var _r270_t1 = r270_xn$Capture$2Lrc8.Metrics;
        var r270_Width = _r270_t1.Width;
        var r270_SymbolMid = _r270_t1.SymbolMid;
        var r270_TanSlope = _r270_t1.TanSlope;
        var _r270_t2 = r270_xn$Capture$2Lrc8.SpiroFns;
        var r270_g2 = _r270_t2.g2;
        var r270_end = _r270_t2.end;
        var r270_straight = _r270_t2.straight;
        var r270_widths = _r270_t2.widths;
        var r270_dispiro = _r270_t2.dispiro;
        var _r270_t3 = r270_xn$Capture$2Lrc8.BooleFns;
        var _r270_t4 = r270_xn$Capture$2Lrc8.CommonShapes.resolve();
        var _r270_t5 = r270_xn$Capture$2Lrc8['Common-Derivatives'].resolve();
        r270_xn$ExportCapture$2Lrc4b(function () {
            var _r274_t0, _r274_t1;
            return { 'CreateWaveShape': r270_CreateWaveShape };
        });
        return r270_CreateWaveShape = function (r275_dist, r275_sw, r275__phaesShift) {
            var _r275_t0, _r275_t1;
            var r275_WaveResolution = 256;
            var r275_WaveMagnitude = r275_dist * (3 / 4) - r275_sw / 2;
            var r275_WaveAdj = r270_TanSlope * r275_WaveMagnitude * -0.75;
            var r275_phaseShift = r1_fallback(r275__phaesShift, 0);
            var r275_WaveShapeImpl = function () {
                var _r276_t6;
                var _r276_t7 = arguments;
                var _r276_t0 = [].slice.call(_r276_t7, 0);
                var _r276_t1 = [];
                var _r276_t2 = 0;
                while (_r276_t2 < _r276_t0.length) {
                    if (!(_r276_t0[_r276_t2] instanceof r270_xn$NamedParameterPair$2Lrc9b))
                        _r276_t1.push(_r276_t0[_r276_t2]);
                    _r276_t2 = _r276_t2 + 1;
                }
                var _r276_t3 = _r276_t0;
                var _r276_t4 = _r276_t3.length;
                var _r276_t5 = 0;
                while (_r276_t5 < _r276_t4) {
                    _r276_t2 = _r276_t3[_r276_t5];
                    if (_r276_t2 && _r276_t2 instanceof r270_xn$NamedParameterPair$2Lrc9b && _r276_t2.left === 'left')
                        r276_left = _r276_t2.right;
                    if (_r276_t2 && _r276_t2 instanceof r270_xn$NamedParameterPair$2Lrc9b && _r276_t2.left === 'right')
                        r276_right = _r276_t2.right;
                    if (_r276_t2 && _r276_t2 instanceof r270_xn$NamedParameterPair$2Lrc9b && _r276_t2.left === 'ts')
                        r276_ts = _r276_t2.right;
                    if (_r276_t2 && _r276_t2 instanceof r270_xn$NamedParameterPair$2Lrc9b && _r276_t2.left === 'te')
                        r276_te = _r276_t2.right;
                    if (_r276_t2 && _r276_t2 instanceof r270_xn$NamedParameterPair$2Lrc9b && _r276_t2.left === 'xsJoin')
                        r276_xsJoin = _r276_t2.right;
                    if (_r276_t2 && _r276_t2 instanceof r270_xn$NamedParameterPair$2Lrc9b && _r276_t2.left === 'xfJoin')
                        r276_xfJoin = _r276_t2.right;
                    if (_r276_t2 && _r276_t2 instanceof r270_xn$NamedParameterPair$2Lrc9b && _r276_t2.left === 'diagJoinS')
                        r276_diagJoinS = _r276_t2.right;
                    if (_r276_t2 && _r276_t2 instanceof r270_xn$NamedParameterPair$2Lrc9b && _r276_t2.left === 'diagJoinF')
                        r276_diagJoinF = _r276_t2.right;
                    _r276_t5 = _r276_t5 + 1;
                }
                var r276_left = r1_fallback(r276_left, _r276_t1[0]);
                var r276_right = r1_fallback(r276_right, _r276_t1[1]);
                var r276_ts = r1_fallback(r276_ts, _r276_t1[2]);
                var r276_te = r1_fallback(r276_te, _r276_t1[3]);
                var r276_xsJoin = r1_fallback(r276_xsJoin, _r276_t1[4]);
                var r276_xfJoin = r1_fallback(r276_xfJoin, _r276_t1[5]);
                var r276_diagJoinS = r1_fallback(r276_diagJoinS, _r276_t1[6]);
                var r276_diagJoinF = r1_fallback(r276_diagJoinF, _r276_t1[7]);
                return function () {
                    var r282_theta, r282_waveRelY, _r282_t3;
                    var _r282_t2 = this;
                    var r282_currentGlyph = _r282_t2;
                    var r282_resolution = Math.ceil(r275_WaveResolution * (r276_te - r276_ts));
                    var r282_knots = [];
                    var _r282_t0 = 0;
                    var _r282_t1 = r282_resolution;
                    var r282_pr = _r282_t0;
                    while (r282_pr <= _r282_t1) {
                        r282_theta = (r275_phaseShift + r1_mix(r276_ts, r276_te, r282_pr / r282_resolution)) * Math.PI * 2;
                        r282_waveRelY = Math.sin(r282_theta) + 0.075 * Math.sin(r282_theta * 3);
                        r282_knots.push(r270_g2(r275_WaveAdj * r282_waveRelY + r1_mix(r276_left, r276_right, r282_pr / r282_resolution), r270_SymbolMid + r275_WaveMagnitude * r282_waveRelY));
                        r282_pr = r282_pr + 1;
                    }
                    r282_currentGlyph.include(r270_dispiro(r270_widths.center(r275_sw), r276_xsJoin === void 0 ? [] : r276_diagJoinS ? [r270_g2(r276_xsJoin, r270_SymbolMid)] : [r270_straight.right.start(r276_xsJoin, r270_SymbolMid)], r282_knots, r276_xfJoin === void 0 ? [] : r276_diagJoinF ? [r270_g2(r276_xfJoin, r270_SymbolMid)] : [r270_straight.right.end(r276_xfJoin, r270_SymbolMid)]));
                    return void 0;
                };
            };
            var r275_WaveShape = function () {
                var _r286_t6;
                var _r286_t7 = arguments;
                var _r286_t0 = [].slice.call(_r286_t7, 0);
                var _r286_t1 = [];
                var _r286_t2 = 0;
                while (_r286_t2 < _r286_t0.length) {
                    if (!(_r286_t0[_r286_t2] instanceof r270_xn$NamedParameterPair$2Lrc9b))
                        _r286_t1.push(_r286_t0[_r286_t2]);
                    _r286_t2 = _r286_t2 + 1;
                }
                var _r286_t3 = _r286_t0;
                var _r286_t4 = _r286_t3.length;
                var _r286_t5 = 0;
                while (_r286_t5 < _r286_t4) {
                    _r286_t2 = _r286_t3[_r286_t5];
                    if (_r286_t2 && _r286_t2 instanceof r270_xn$NamedParameterPair$2Lrc9b && _r286_t2.left === 'left')
                        r286_left = _r286_t2.right;
                    if (_r286_t2 && _r286_t2 instanceof r270_xn$NamedParameterPair$2Lrc9b && _r286_t2.left === 'right')
                        r286_right = _r286_t2.right;
                    if (_r286_t2 && _r286_t2 instanceof r270_xn$NamedParameterPair$2Lrc9b && _r286_t2.left === 'xsJoin')
                        r286_xsJoin = _r286_t2.right;
                    if (_r286_t2 && _r286_t2 instanceof r270_xn$NamedParameterPair$2Lrc9b && _r286_t2.left === 'xfJoin')
                        r286_xfJoin = _r286_t2.right;
                    if (_r286_t2 && _r286_t2 instanceof r270_xn$NamedParameterPair$2Lrc9b && _r286_t2.left === 'diagJoinS')
                        r286_diagJoinS = _r286_t2.right;
                    if (_r286_t2 && _r286_t2 instanceof r270_xn$NamedParameterPair$2Lrc9b && _r286_t2.left === 'diagJoinF')
                        r286_diagJoinF = _r286_t2.right;
                    if (_r286_t2 && _r286_t2 instanceof r270_xn$NamedParameterPair$2Lrc9b && _r286_t2.left === 'waveCount')
                        r286_waveCount = _r286_t2.right;
                    if (_r286_t2 && _r286_t2 instanceof r270_xn$NamedParameterPair$2Lrc9b && _r286_t2.left === 'unitWidth')
                        r286_unitWidth = _r286_t2.right;
                    _r286_t5 = _r286_t5 + 1;
                }
                var r286_left = r1_fallback(r286_left, _r286_t1[0]);
                var r286_right = r1_fallback(r286_right, _r286_t1[1]);
                var r286_xsJoin = r1_fallback(r286_xsJoin, _r286_t1[2]);
                var r286_xfJoin = r1_fallback(r286_xfJoin, _r286_t1[3]);
                var r286_diagJoinS = r1_fallback(r286_diagJoinS, _r286_t1[4]);
                var r286_diagJoinF = r1_fallback(r286_diagJoinF, _r286_t1[5]);
                var r286_waveCount = r1_fallback(r286_waveCount, _r286_t1[6], 1);
                var r286_unitWidth = r1_fallback(r286_unitWidth, _r286_t1[7], r270_Width);
                return r275_WaveShapeImpl(r286_unitWidth * -r286_left, r286_unitWidth * (1 + r286_right), -r286_left * r286_waveCount, (1 + r286_right) * r286_waveCount, r286_xsJoin, r286_xfJoin, r286_diagJoinS, r286_diagJoinF);
            };
            return r275_WaveShape;
        };
    });
    return void 0;
});
