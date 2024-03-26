'use strict';
import * as _s0_t0 from '../../support/geometry/transform.mjs';
import * as _s0_t1 from '../../support/utils.mjs';
import * as _s0_t2 from '../../support/gr.mjs';
import * as _s0_t3 from '../../support/geometry/spiro-control.mjs';
var _s0_t4;
export {
    _s0_t4 as apply
};
var r1_apply, _r1_t0, _r1_t1, _r1_t2, _r1_t3, _r1_t4, _r1_t5, _r1_t6, _r1_t7;
var _r1_t8 = _s0_t0;
var r1_Transform = _r1_t8.Transform;
var _r1_t9 = _s0_t1;
var r1_mix = _r1_t9.mix;
var r1_linreg = _r1_t9.linreg;
var r1_clamp = _r1_t9.clamp;
var r1_fallback = _r1_t9.fallback;
var _r1_t10 = _s0_t2;
var r1_Radical = _r1_t10.Radical;
var _r1_t11 = _s0_t3;
var r1_Interpolator = _r1_t11.Interpolator;
var r1_xn$GlyphBlocks$2Lrc2b = [];
_s0_t4 = r1_apply = function () {
    var r268_block, _r268_t4, _r268_t6;
    var _r268_t3 = this;
    var _r268_t0 = r1_xn$GlyphBlocks$2Lrc2b;
    var _r268_t1 = _r268_t0.length;
    var _r268_t2 = 0;
    var _r268_t5 = _r268_t2 < _r268_t1;
    while (_r268_t5) {
        _r268_t6 = (r268_block = _r268_t0[_r268_t2], r268_block(_r268_t3), _r268_t2 = _r268_t2 + 1);
        _r268_t5 = _r268_t2 < _r268_t1;
    }
    return _r268_t6;
};
r1_xn$GlyphBlocks$2Lrc2b.push(function (r272_xn$Capture_Ext$2Lrc2b) {
    var _r272_t0, _r272_t1;
    r272_xn$Capture_Ext$2Lrc2b['$defineGlyphBlockImpl$'](r272_xn$Capture_Ext$2Lrc2b, 'CommonShapes', function (r273_xn$Capture$2Lrc8, r273_xn$ExportCapture$2Lrc4b) {
        var r273_WithDotVariants, _r273_t5, _r273_t6, _r273_t7, _r273_tag8, _r273_t9, _r273_tag10, _r273_t11, _r273_tag12, _r273_t13, _r273_tag14, _r273_t15, _r273_tag16;
        var _r273_t0 = r273_xn$Capture$2Lrc8;
        var r273_xn$createAndSaveGlyphImpl$2Lrc3c = _r273_t0['$createAndSaveGlyphImpl$'];
        var r273_xn$NamedParameterPair$2Lrc9b = _r273_t0['$NamedParameterPair$'];
        var r273_xn$assignUnicodeImpl$2Lrc8b = _r273_t0['$assignUnicodeImpl$'];
        var r273_xn$execState$2Lrc0b = _r273_t0['$execState$'];
        var r273_para = _r273_t0.para;
        var _r273_t1 = r273_xn$Capture$2Lrc8.Metrics;
        var r273_DesignParameters = _r273_t1.DesignParameters;
        var r273_UPM = _r273_t1.UPM;
        var r273_Width = _r273_t1.Width;
        var r273_Contrast = _r273_t1.Contrast;
        var r273_Scale = _r273_t1.Scale;
        var r273_Translate = _r273_t1.Translate;
        var r273_ApparentTranslate = _r273_t1.ApparentTranslate;
        var r273_Rotate = _r273_t1.Rotate;
        var r273_TanSlope = _r273_t1.TanSlope;
        var r273_HVContrast = _r273_t1.HVContrast;
        var r273_Upward = _r273_t1.Upward;
        var r273_Downward = _r273_t1.Downward;
        var r273_Rightward = _r273_t1.Rightward;
        var r273_Leftward = _r273_t1.Leftward;
        var r273_O = _r273_t1.O;
        var r273_OX = _r273_t1.OX;
        var r273_OXHook = _r273_t1.OXHook;
        var r273_Stroke = _r273_t1.Stroke;
        var r273_LongJut = _r273_t1.LongJut;
        var r273_VJutStroke = _r273_t1.VJutStroke;
        var r273_TailAdjX = _r273_t1.TailAdjX;
        var r273_TailAdjY = _r273_t1.TailAdjY;
        var r273_SmallArchDepthA = _r273_t1.SmallArchDepthA;
        var r273_SmallArchDepthB = _r273_t1.SmallArchDepthB;
        var r273_CorrectionOMidX = _r273_t1.CorrectionOMidX;
        var r273_OverlayStroke = _r273_t1.OverlayStroke;
        var r273__SuperXY = _r273_t1['_SuperXY'];
        var r273_SmoothAdjust = _r273_t1.SmoothAdjust;
        var _r273_t2 = r273_xn$Capture$2Lrc8.SpiroFns;
        var r273_g4 = _r273_t2.g4;
        var r273_corner = _r273_t2.corner;
        var r273_flat = _r273_t2.flat;
        var r273_curl = _r273_t2.curl;
        var r273_close = _r273_t2.close;
        var r273_widths = _r273_t2.widths;
        var r273_heading = _r273_t2.heading;
        var r273_unimportant = _r273_t2.unimportant;
        var r273_archv = _r273_t2.archv;
        var r273_arcvh = _r273_t2.arcvh;
        var r273_dispiro = _r273_t2.dispiro;
        var r273_xn$spirooutline$1aao = _r273_t2['spiro-outline'];
        var _r273_t3 = r273_xn$Capture$2Lrc8.BooleFns;
        var _r273_t4 = r273_xn$Capture$2Lrc8['Common-Derivatives'].resolve();
        var r273_xn$selectvariant$7Hrq = _r273_t4['select-variant'];
        r273_xn$ExportCapture$2Lrc4b(function () {
            var _r276_t0, _r276_t1;
            return { 'no-shape': r273_xn$noshape$3cah };
        });
        var r273_xn$noshape$3cah = function () {
            var _r277_t0, _r277_t1;
            return { '__isNoShape': true };
        };
        r273_xn$ExportCapture$2Lrc4b(function () {
            var _r279_t0, _r279_t1;
            return { 'KnotAdj': r273_KnotAdj };
        });
        var r273_KnotAdj = function () {
            var r282_BowlLeft, r282_BowlRight, r282_ArchTop, r282_ArchBot;
            var r282_exports = {};
            var r282_BowlYAdjImpl = function (r289_sign, r289_y, r289_w) {
                var _r289_t0, _r289_t1;
                return r289_y + r289_sign * r273_TanSlope * r273_SmoothAdjust * r289_w / r273_Width;
            };
            r282_exports.BowlLeft = r282_BowlLeft = function () {
                var _r291_t6;
                var _r291_t7 = arguments;
                var _r291_t0 = [].slice.call(_r291_t7, 0);
                var _r291_t1 = [];
                var _r291_t2 = 0;
                while (_r291_t2 < _r291_t0.length) {
                    if (!(_r291_t0[_r291_t2] instanceof r273_xn$NamedParameterPair$2Lrc9b))
                        _r291_t1.push(_r291_t0[_r291_t2]);
                    _r291_t2 = _r291_t2 + 1;
                }
                var _r291_t3 = _r291_t0;
                var _r291_t4 = _r291_t3.length;
                var _r291_t5 = 0;
                while (_r291_t5 < _r291_t4) {
                    _r291_t2 = _r291_t3[_r291_t5];
                    if (_r291_t2 && _r291_t2 instanceof r273_xn$NamedParameterPair$2Lrc9b && _r291_t2.left === 'ty')
                        r291_ty = _r291_t2.right;
                    if (_r291_t2 && _r291_t2 instanceof r273_xn$NamedParameterPair$2Lrc9b && _r291_t2.left === 'x')
                        r291_x = _r291_t2.right;
                    if (_r291_t2 && _r291_t2 instanceof r273_xn$NamedParameterPair$2Lrc9b && _r291_t2.left === 'y')
                        r291_y = _r291_t2.right;
                    if (_r291_t2 && _r291_t2 instanceof r273_xn$NamedParameterPair$2Lrc9b && _r291_t2.left === 'af')
                        r291_af = _r291_t2.right;
                    if (_r291_t2 && _r291_t2 instanceof r273_xn$NamedParameterPair$2Lrc9b && _r291_t2.left === 'width')
                        r291_width = _r291_t2.right;
                    _r291_t5 = _r291_t5 + 1;
                }
                var r291_ty = r1_fallback(r291_ty, _r291_t1[0]);
                var r291_x = r1_fallback(r291_x, _r291_t1[1]);
                var r291_y = r1_fallback(r291_y, _r291_t1[2]);
                var r291_af = r1_fallback(r291_af, _r291_t1[3]);
                var r291_width = r1_fallback(r291_width, _r291_t1[4], r273_Width);
                return r291_ty(r291_x, r282_BowlYAdjImpl(+1, r291_y, r291_width), r291_af);
            };
            r282_BowlLeft.yOf = function () {
                var _r296_t6;
                var _r296_t7 = arguments;
                var _r296_t0 = [].slice.call(_r296_t7, 0);
                var _r296_t1 = [];
                var _r296_t2 = 0;
                while (_r296_t2 < _r296_t0.length) {
                    if (!(_r296_t0[_r296_t2] instanceof r273_xn$NamedParameterPair$2Lrc9b))
                        _r296_t1.push(_r296_t0[_r296_t2]);
                    _r296_t2 = _r296_t2 + 1;
                }
                var _r296_t3 = _r296_t0;
                var _r296_t4 = _r296_t3.length;
                var _r296_t5 = 0;
                while (_r296_t5 < _r296_t4) {
                    _r296_t2 = _r296_t3[_r296_t5];
                    if (_r296_t2 && _r296_t2 instanceof r273_xn$NamedParameterPair$2Lrc9b && _r296_t2.left === 'y')
                        r296_y = _r296_t2.right;
                    if (_r296_t2 && _r296_t2 instanceof r273_xn$NamedParameterPair$2Lrc9b && _r296_t2.left === 'width')
                        r296_width = _r296_t2.right;
                    _r296_t5 = _r296_t5 + 1;
                }
                var r296_y = r1_fallback(r296_y, _r296_t1[0]);
                var r296_width = r1_fallback(r296_width, _r296_t1[1], r273_Width);
                return r282_BowlYAdjImpl(+1, r296_y, r296_width);
            };
            r282_BowlLeft.o = function () {
                var _r301_t6;
                var _r301_t7 = arguments;
                var _r301_t0 = [].slice.call(_r301_t7, 0);
                var _r301_t1 = [];
                var _r301_t2 = 0;
                while (_r301_t2 < _r301_t0.length) {
                    if (!(_r301_t0[_r301_t2] instanceof r273_xn$NamedParameterPair$2Lrc9b))
                        _r301_t1.push(_r301_t0[_r301_t2]);
                    _r301_t2 = _r301_t2 + 1;
                }
                var _r301_t3 = _r301_t0;
                var _r301_t4 = _r301_t3.length;
                var _r301_t5 = 0;
                while (_r301_t5 < _r301_t4) {
                    _r301_t2 = _r301_t3[_r301_t5];
                    if (_r301_t2 && _r301_t2 instanceof r273_xn$NamedParameterPair$2Lrc9b && _r301_t2.left === 'ty')
                        r301_ty = _r301_t2.right;
                    if (_r301_t2 && _r301_t2 instanceof r273_xn$NamedParameterPair$2Lrc9b && _r301_t2.left === 'x')
                        r301_x = _r301_t2.right;
                    if (_r301_t2 && _r301_t2 instanceof r273_xn$NamedParameterPair$2Lrc9b && _r301_t2.left === 'y')
                        r301_y = _r301_t2.right;
                    if (_r301_t2 && _r301_t2 instanceof r273_xn$NamedParameterPair$2Lrc9b && _r301_t2.left === 'af')
                        r301_af = _r301_t2.right;
                    if (_r301_t2 && _r301_t2 instanceof r273_xn$NamedParameterPair$2Lrc9b && _r301_t2.left === 'width')
                        r301_width = _r301_t2.right;
                    _r301_t5 = _r301_t5 + 1;
                }
                var r301_ty = r1_fallback(r301_ty, _r301_t1[0]);
                var r301_x = r1_fallback(r301_x, _r301_t1[1]);
                var r301_y = r1_fallback(r301_y, _r301_t1[2]);
                var r301_af = r1_fallback(r301_af, _r301_t1[3]);
                var r301_width = r1_fallback(r301_width, _r301_t1[4], r273_Width);
                return r301_ty(r301_x + r273_OX, r282_BowlYAdjImpl(+1, r301_y, r301_width), r301_af);
            };
            r282_exports.BowlRight = r282_BowlRight = function () {
                var _r307_t6;
                var _r307_t7 = arguments;
                var _r307_t0 = [].slice.call(_r307_t7, 0);
                var _r307_t1 = [];
                var _r307_t2 = 0;
                while (_r307_t2 < _r307_t0.length) {
                    if (!(_r307_t0[_r307_t2] instanceof r273_xn$NamedParameterPair$2Lrc9b))
                        _r307_t1.push(_r307_t0[_r307_t2]);
                    _r307_t2 = _r307_t2 + 1;
                }
                var _r307_t3 = _r307_t0;
                var _r307_t4 = _r307_t3.length;
                var _r307_t5 = 0;
                while (_r307_t5 < _r307_t4) {
                    _r307_t2 = _r307_t3[_r307_t5];
                    if (_r307_t2 && _r307_t2 instanceof r273_xn$NamedParameterPair$2Lrc9b && _r307_t2.left === 'ty')
                        r307_ty = _r307_t2.right;
                    if (_r307_t2 && _r307_t2 instanceof r273_xn$NamedParameterPair$2Lrc9b && _r307_t2.left === 'x')
                        r307_x = _r307_t2.right;
                    if (_r307_t2 && _r307_t2 instanceof r273_xn$NamedParameterPair$2Lrc9b && _r307_t2.left === 'y')
                        r307_y = _r307_t2.right;
                    if (_r307_t2 && _r307_t2 instanceof r273_xn$NamedParameterPair$2Lrc9b && _r307_t2.left === 'af')
                        r307_af = _r307_t2.right;
                    if (_r307_t2 && _r307_t2 instanceof r273_xn$NamedParameterPair$2Lrc9b && _r307_t2.left === 'width')
                        r307_width = _r307_t2.right;
                    _r307_t5 = _r307_t5 + 1;
                }
                var r307_ty = r1_fallback(r307_ty, _r307_t1[0]);
                var r307_x = r1_fallback(r307_x, _r307_t1[1]);
                var r307_y = r1_fallback(r307_y, _r307_t1[2]);
                var r307_af = r1_fallback(r307_af, _r307_t1[3]);
                var r307_width = r1_fallback(r307_width, _r307_t1[4], r273_Width);
                return r307_ty(r307_x, r282_BowlYAdjImpl(-1, r307_y, r307_width), r307_af);
            };
            r282_BowlRight.yOf = function () {
                var _r312_t6;
                var _r312_t7 = arguments;
                var _r312_t0 = [].slice.call(_r312_t7, 0);
                var _r312_t1 = [];
                var _r312_t2 = 0;
                while (_r312_t2 < _r312_t0.length) {
                    if (!(_r312_t0[_r312_t2] instanceof r273_xn$NamedParameterPair$2Lrc9b))
                        _r312_t1.push(_r312_t0[_r312_t2]);
                    _r312_t2 = _r312_t2 + 1;
                }
                var _r312_t3 = _r312_t0;
                var _r312_t4 = _r312_t3.length;
                var _r312_t5 = 0;
                while (_r312_t5 < _r312_t4) {
                    _r312_t2 = _r312_t3[_r312_t5];
                    if (_r312_t2 && _r312_t2 instanceof r273_xn$NamedParameterPair$2Lrc9b && _r312_t2.left === 'y')
                        r312_y = _r312_t2.right;
                    if (_r312_t2 && _r312_t2 instanceof r273_xn$NamedParameterPair$2Lrc9b && _r312_t2.left === 'width')
                        r312_width = _r312_t2.right;
                    _r312_t5 = _r312_t5 + 1;
                }
                var r312_y = r1_fallback(r312_y, _r312_t1[0]);
                var r312_width = r1_fallback(r312_width, _r312_t1[1], r273_Width);
                return r282_BowlYAdjImpl(-1, r312_y, r312_width);
            };
            r282_BowlRight.o = function () {
                var _r317_t6;
                var _r317_t7 = arguments;
                var _r317_t0 = [].slice.call(_r317_t7, 0);
                var _r317_t1 = [];
                var _r317_t2 = 0;
                while (_r317_t2 < _r317_t0.length) {
                    if (!(_r317_t0[_r317_t2] instanceof r273_xn$NamedParameterPair$2Lrc9b))
                        _r317_t1.push(_r317_t0[_r317_t2]);
                    _r317_t2 = _r317_t2 + 1;
                }
                var _r317_t3 = _r317_t0;
                var _r317_t4 = _r317_t3.length;
                var _r317_t5 = 0;
                while (_r317_t5 < _r317_t4) {
                    _r317_t2 = _r317_t3[_r317_t5];
                    if (_r317_t2 && _r317_t2 instanceof r273_xn$NamedParameterPair$2Lrc9b && _r317_t2.left === 'ty')
                        r317_ty = _r317_t2.right;
                    if (_r317_t2 && _r317_t2 instanceof r273_xn$NamedParameterPair$2Lrc9b && _r317_t2.left === 'x')
                        r317_x = _r317_t2.right;
                    if (_r317_t2 && _r317_t2 instanceof r273_xn$NamedParameterPair$2Lrc9b && _r317_t2.left === 'y')
                        r317_y = _r317_t2.right;
                    if (_r317_t2 && _r317_t2 instanceof r273_xn$NamedParameterPair$2Lrc9b && _r317_t2.left === 'af')
                        r317_af = _r317_t2.right;
                    if (_r317_t2 && _r317_t2 instanceof r273_xn$NamedParameterPair$2Lrc9b && _r317_t2.left === 'width')
                        r317_width = _r317_t2.right;
                    _r317_t5 = _r317_t5 + 1;
                }
                var r317_ty = r1_fallback(r317_ty, _r317_t1[0]);
                var r317_x = r1_fallback(r317_x, _r317_t1[1]);
                var r317_y = r1_fallback(r317_y, _r317_t1[2]);
                var r317_af = r1_fallback(r317_af, _r317_t1[3]);
                var r317_width = r1_fallback(r317_width, _r317_t1[4], r273_Width);
                return r317_ty(r317_x - r273_OX, r282_BowlYAdjImpl(-1, r317_y, r317_width), r317_af);
            };
            r282_exports.ArchTop = r282_ArchTop = function () {
                var _r323_t6;
                var _r323_t7 = arguments;
                var _r323_t0 = [].slice.call(_r323_t7, 0);
                var _r323_t1 = [];
                var _r323_t2 = 0;
                while (_r323_t2 < _r323_t0.length) {
                    if (!(_r323_t0[_r323_t2] instanceof r273_xn$NamedParameterPair$2Lrc9b))
                        _r323_t1.push(_r323_t0[_r323_t2]);
                    _r323_t2 = _r323_t2 + 1;
                }
                var _r323_t3 = _r323_t0;
                var _r323_t4 = _r323_t3.length;
                var _r323_t5 = 0;
                while (_r323_t5 < _r323_t4) {
                    _r323_t2 = _r323_t3[_r323_t5];
                    if (_r323_t2 && _r323_t2 instanceof r273_xn$NamedParameterPair$2Lrc9b && _r323_t2.left === 'x')
                        r323_x = _r323_t2.right;
                    if (_r323_t2 && _r323_t2 instanceof r273_xn$NamedParameterPair$2Lrc9b && _r323_t2.left === 'y')
                        r323_y = _r323_t2.right;
                    if (_r323_t2 && _r323_t2 instanceof r273_xn$NamedParameterPair$2Lrc9b && _r323_t2.left === 'af')
                        r323_af = _r323_t2.right;
                    if (_r323_t2 && _r323_t2 instanceof r273_xn$NamedParameterPair$2Lrc9b && _r323_t2.left === 'ty')
                        r323_ty = _r323_t2.right;
                    if (_r323_t2 && _r323_t2 instanceof r273_xn$NamedParameterPair$2Lrc9b && _r323_t2.left === 'sw')
                        r323_sw = _r323_t2.right;
                    _r323_t5 = _r323_t5 + 1;
                }
                var r323_x = r1_fallback(r323_x, _r323_t1[0]);
                var r323_y = r1_fallback(r323_y, _r323_t1[1]);
                var r323_af = r1_fallback(r323_af, _r323_t1[2]);
                var r323_ty = r1_fallback(r323_ty, _r323_t1[3], r273_g4);
                var r323_sw = r1_fallback(r323_sw, _r323_t1[4], r273_Stroke);
                return r323_ty(r323_x - r273_CorrectionOMidX * r323_sw, r323_y, r323_af);
            };
            r282_ArchTop.o = function () {
                var _r328_t6;
                var _r328_t7 = arguments;
                var _r328_t0 = [].slice.call(_r328_t7, 0);
                var _r328_t1 = [];
                var _r328_t2 = 0;
                while (_r328_t2 < _r328_t0.length) {
                    if (!(_r328_t0[_r328_t2] instanceof r273_xn$NamedParameterPair$2Lrc9b))
                        _r328_t1.push(_r328_t0[_r328_t2]);
                    _r328_t2 = _r328_t2 + 1;
                }
                var _r328_t3 = _r328_t0;
                var _r328_t4 = _r328_t3.length;
                var _r328_t5 = 0;
                while (_r328_t5 < _r328_t4) {
                    _r328_t2 = _r328_t3[_r328_t5];
                    if (_r328_t2 && _r328_t2 instanceof r273_xn$NamedParameterPair$2Lrc9b && _r328_t2.left === 'x')
                        r328_x = _r328_t2.right;
                    if (_r328_t2 && _r328_t2 instanceof r273_xn$NamedParameterPair$2Lrc9b && _r328_t2.left === 'y')
                        r328_y = _r328_t2.right;
                    if (_r328_t2 && _r328_t2 instanceof r273_xn$NamedParameterPair$2Lrc9b && _r328_t2.left === 'af')
                        r328_af = _r328_t2.right;
                    if (_r328_t2 && _r328_t2 instanceof r273_xn$NamedParameterPair$2Lrc9b && _r328_t2.left === 'ty')
                        r328_ty = _r328_t2.right;
                    if (_r328_t2 && _r328_t2 instanceof r273_xn$NamedParameterPair$2Lrc9b && _r328_t2.left === 'sw')
                        r328_sw = _r328_t2.right;
                    _r328_t5 = _r328_t5 + 1;
                }
                var r328_x = r1_fallback(r328_x, _r328_t1[0]);
                var r328_y = r1_fallback(r328_y, _r328_t1[1]);
                var r328_af = r1_fallback(r328_af, _r328_t1[2]);
                var r328_ty = r1_fallback(r328_ty, _r328_t1[3], r273_g4);
                var r328_sw = r1_fallback(r328_sw, _r328_t1[4], r273_Stroke);
                return r328_ty(r328_x - r273_CorrectionOMidX * r328_sw, r328_y - r273_O, r328_af);
            };
            r282_exports.ArchBot = r282_ArchBot = function () {
                var _r334_t6;
                var _r334_t7 = arguments;
                var _r334_t0 = [].slice.call(_r334_t7, 0);
                var _r334_t1 = [];
                var _r334_t2 = 0;
                while (_r334_t2 < _r334_t0.length) {
                    if (!(_r334_t0[_r334_t2] instanceof r273_xn$NamedParameterPair$2Lrc9b))
                        _r334_t1.push(_r334_t0[_r334_t2]);
                    _r334_t2 = _r334_t2 + 1;
                }
                var _r334_t3 = _r334_t0;
                var _r334_t4 = _r334_t3.length;
                var _r334_t5 = 0;
                while (_r334_t5 < _r334_t4) {
                    _r334_t2 = _r334_t3[_r334_t5];
                    if (_r334_t2 && _r334_t2 instanceof r273_xn$NamedParameterPair$2Lrc9b && _r334_t2.left === 'x')
                        r334_x = _r334_t2.right;
                    if (_r334_t2 && _r334_t2 instanceof r273_xn$NamedParameterPair$2Lrc9b && _r334_t2.left === 'y')
                        r334_y = _r334_t2.right;
                    if (_r334_t2 && _r334_t2 instanceof r273_xn$NamedParameterPair$2Lrc9b && _r334_t2.left === 'af')
                        r334_af = _r334_t2.right;
                    if (_r334_t2 && _r334_t2 instanceof r273_xn$NamedParameterPair$2Lrc9b && _r334_t2.left === 'ty')
                        r334_ty = _r334_t2.right;
                    if (_r334_t2 && _r334_t2 instanceof r273_xn$NamedParameterPair$2Lrc9b && _r334_t2.left === 'sw')
                        r334_sw = _r334_t2.right;
                    _r334_t5 = _r334_t5 + 1;
                }
                var r334_x = r1_fallback(r334_x, _r334_t1[0]);
                var r334_y = r1_fallback(r334_y, _r334_t1[1]);
                var r334_af = r1_fallback(r334_af, _r334_t1[2]);
                var r334_ty = r1_fallback(r334_ty, _r334_t1[3], r273_g4);
                var r334_sw = r1_fallback(r334_sw, _r334_t1[4], r273_Stroke);
                return r334_ty(r334_x + r273_CorrectionOMidX * r334_sw, r334_y, r334_af);
            };
            r282_ArchBot.o = function () {
                var _r339_t6;
                var _r339_t7 = arguments;
                var _r339_t0 = [].slice.call(_r339_t7, 0);
                var _r339_t1 = [];
                var _r339_t2 = 0;
                while (_r339_t2 < _r339_t0.length) {
                    if (!(_r339_t0[_r339_t2] instanceof r273_xn$NamedParameterPair$2Lrc9b))
                        _r339_t1.push(_r339_t0[_r339_t2]);
                    _r339_t2 = _r339_t2 + 1;
                }
                var _r339_t3 = _r339_t0;
                var _r339_t4 = _r339_t3.length;
                var _r339_t5 = 0;
                while (_r339_t5 < _r339_t4) {
                    _r339_t2 = _r339_t3[_r339_t5];
                    if (_r339_t2 && _r339_t2 instanceof r273_xn$NamedParameterPair$2Lrc9b && _r339_t2.left === 'x')
                        r339_x = _r339_t2.right;
                    if (_r339_t2 && _r339_t2 instanceof r273_xn$NamedParameterPair$2Lrc9b && _r339_t2.left === 'y')
                        r339_y = _r339_t2.right;
                    if (_r339_t2 && _r339_t2 instanceof r273_xn$NamedParameterPair$2Lrc9b && _r339_t2.left === 'af')
                        r339_af = _r339_t2.right;
                    if (_r339_t2 && _r339_t2 instanceof r273_xn$NamedParameterPair$2Lrc9b && _r339_t2.left === 'ty')
                        r339_ty = _r339_t2.right;
                    if (_r339_t2 && _r339_t2 instanceof r273_xn$NamedParameterPair$2Lrc9b && _r339_t2.left === 'sw')
                        r339_sw = _r339_t2.right;
                    _r339_t5 = _r339_t5 + 1;
                }
                var r339_x = r1_fallback(r339_x, _r339_t1[0]);
                var r339_y = r1_fallback(r339_y, _r339_t1[1]);
                var r339_af = r1_fallback(r339_af, _r339_t1[2]);
                var r339_ty = r1_fallback(r339_ty, _r339_t1[3], r273_g4);
                var r339_sw = r1_fallback(r339_sw, _r339_t1[4], r273_Stroke);
                return r339_ty(r339_x + r273_CorrectionOMidX * r339_sw, r339_y + r273_O, r339_af);
            };
            return r282_exports;
        }();
        r273_xn$ExportCapture$2Lrc4b(function () {
            var _r345_t0, _r345_t1;
            return { 'Rect': r273_Rect };
        });
        var r273_Rect = function (r346_u, r346_d, r346_l, r346_r, r346_transformShiftOnly) {
            var _r346_t0, _r346_t1;
            return function () {
                var _r348_t1;
                var _r348_t0 = this;
                var r348_currentGlyph = _r348_t0;
                var r348_giz = r348_currentGlyph.gizmo;
                r348_currentGlyph.include(r273_xn$createAndSaveGlyphImpl$2Lrc3c(null, null, function () {
                    var r352_mx1, r352_my1, _r352_t0, _r352_t2;
                    var _r352_t1 = this;
                    var r352_currentGlyph = _r352_t1;
                    var r352_my = (r346_u + r346_d) / 2;
                    var r352_mx = (r346_l + r346_r) / 2;
                    r352_currentGlyph.gizmo = r346_transformShiftOnly ? r1_Transform.Id() : r348_giz;
                    r352_currentGlyph.include(r273_xn$spirooutline$1aao(r273_corner(r346_l, r346_d), r273_corner(r346_l, r346_u), r273_corner(r346_r, r346_u), r273_corner(r346_r, r346_d)));
                    if (r346_transformShiftOnly) {
                        _r352_t0 = r348_giz.apply({
                            'x': r352_mx,
                            'y': r352_my
                        });
                        r352_mx1 = _r352_t0.x;
                        r352_my1 = _r352_t0.y;
                        r352_currentGlyph.include(r273_Translate(r352_mx1 - r352_mx, r352_my1 - r352_my));
                    }
                    return void 0;
                }));
                return void 0;
            };
        };
        r273_xn$ExportCapture$2Lrc4b(function () {
            var _r356_t0, _r356_t1;
            return { 'SquareAt': r273_SquareAt };
        });
        var r273_SquareAt = function (r357_x, r357_y, r357_r) {
            var _r357_t0, _r357_t1;
            return r273_Rect(r357_y + r357_r, r357_y - r357_r, r357_x - r357_r, r357_x + r357_r);
        };
        r273_xn$ExportCapture$2Lrc4b(function () {
            var _r359_t0, _r359_t1;
            return { 'VERY-FAR': r273_xn$VERYFAR$5sIl };
        });
        var r273_xn$VERYFAR$5sIl = r273_UPM * 16;
        r273_xn$ExportCapture$2Lrc4b(function () {
            var _r361_t0, _r361_t1;
            return { 'MaskAbove': r273_MaskAbove };
        });
        var r273_MaskAbove = function (r362_y) {
            var _r362_t0, _r362_t1;
            return r273_Rect(r273_xn$VERYFAR$5sIl, r362_y, -r273_xn$VERYFAR$5sIl, r273_xn$VERYFAR$5sIl);
        };
        r273_xn$ExportCapture$2Lrc4b(function () {
            var _r364_t0, _r364_t1;
            return { 'MaskBelow': r273_MaskBelow };
        });
        var r273_MaskBelow = function (r365_y) {
            var _r365_t0, _r365_t1;
            return r273_Rect(r365_y, -r273_xn$VERYFAR$5sIl, -r273_xn$VERYFAR$5sIl, r273_xn$VERYFAR$5sIl);
        };
        r273_xn$ExportCapture$2Lrc4b(function () {
            var _r367_t0, _r367_t1;
            return { 'MaskLeft': r273_MaskLeft };
        });
        var r273_MaskLeft = function (r368_x) {
            var _r368_t0, _r368_t1;
            return r273_Rect(r273_xn$VERYFAR$5sIl, -r273_xn$VERYFAR$5sIl, -r273_xn$VERYFAR$5sIl, r368_x);
        };
        r273_xn$ExportCapture$2Lrc4b(function () {
            var _r370_t0, _r370_t1;
            return { 'MaskRight': r273_MaskRight };
        });
        var r273_MaskRight = function (r371_x) {
            var _r371_t0, _r371_t1;
            return r273_Rect(r273_xn$VERYFAR$5sIl, -r273_xn$VERYFAR$5sIl, r371_x, r273_xn$VERYFAR$5sIl);
        };
        r273_xn$ExportCapture$2Lrc4b(function () {
            var _r373_t0, _r373_t1;
            return { 'MaskAboveLine': r273_MaskAboveLine };
        });
        var r273_MaskAboveLine = function (r374_x1, r374_y1, r374_x2, r374_y2) {
            var _r374_t0, _r374_t1;
            return r273_xn$spirooutline$1aao(r273_corner(r374_x1, +r273_xn$VERYFAR$5sIl), r273_corner(r374_x1, r374_y1), r273_corner(r374_x2, r374_y2), r273_corner(r374_x2, +r273_xn$VERYFAR$5sIl));
        };
        r273_xn$ExportCapture$2Lrc4b(function () {
            var _r376_t0, _r376_t1;
            return { 'MaskBelowLine': r273_MaskBelowLine };
        });
        var r273_MaskBelowLine = function (r377_x1, r377_y1, r377_x2, r377_y2) {
            var _r377_t0, _r377_t1;
            return r273_xn$spirooutline$1aao(r273_corner(r377_x1, -r273_xn$VERYFAR$5sIl), r273_corner(r377_x1, r377_y1), r273_corner(r377_x2, r377_y2), r273_corner(r377_x2, -r273_xn$VERYFAR$5sIl));
        };
        r273_xn$ExportCapture$2Lrc4b(function () {
            var _r379_t0, _r379_t1;
            return { 'MaskLeftLine': r273_MaskLeftLine };
        });
        var r273_MaskLeftLine = function (r380_x1, r380_y1, r380_x2, r380_y2) {
            var _r380_t0, _r380_t1;
            return r273_xn$spirooutline$1aao(r273_corner(-r273_xn$VERYFAR$5sIl, r380_y1), r273_corner(r380_x1, r380_y1), r273_corner(r380_x2, r380_y2), r273_corner(-r273_xn$VERYFAR$5sIl, r380_y2));
        };
        r273_xn$ExportCapture$2Lrc4b(function () {
            var _r382_t0, _r382_t1;
            return { 'MaskRightLine': r273_MaskRightLine };
        });
        var r273_MaskRightLine = function (r383_x1, r383_y1, r383_x2, r383_y2) {
            var _r383_t0, _r383_t1;
            return r273_xn$spirooutline$1aao(r273_corner(+r273_xn$VERYFAR$5sIl, r383_y1), r273_corner(r383_x1, r383_y1), r273_corner(r383_x2, r383_y2), r273_corner(+r273_xn$VERYFAR$5sIl, r383_y2));
        };
        r273_xn$ExportCapture$2Lrc4b(function () {
            var _r385_t0, _r385_t1;
            return { 'HalfRectTriangle': r273_HalfRectTriangle };
        });
        var r273_HalfRectTriangle = function (r386_x1, r386_y1, r386_x2, r386_y2) {
            var _r386_t0, _r386_t1;
            return r273_xn$spirooutline$1aao(r273_corner(r386_x1, r386_y1), r273_corner(r386_x2, r386_y2), r273_corner(r386_x2, r386_y1));
        };
        r273_xn$ExportCapture$2Lrc4b(function () {
            var _r388_t0, _r388_t1;
            return { 'Ring': r273_Ring };
        });
        var r273_Ring = function (r389_u, r389_d, r389_l, r389_r, r389_transformShiftOnly) {
            var _r389_t0, _r389_t1;
            return function () {
                var _r391_t1;
                var _r391_t0 = this;
                var r391_currentGlyph = _r391_t0;
                var r391_giz = r391_currentGlyph.gizmo;
                r391_currentGlyph.include(r273_xn$createAndSaveGlyphImpl$2Lrc3c(null, null, function () {
                    var r395_mx1, r395_my1, _r395_t0, _r395_t2;
                    var _r395_t1 = this;
                    var r395_currentGlyph = _r395_t1;
                    var r395_my = (r389_u + r389_d) / 2;
                    var r395_mx = (r389_l + r389_r) / 2;
                    r395_currentGlyph.gizmo = r389_transformShiftOnly ? r1_Transform.Id() : r391_giz;
                    r395_currentGlyph.include(r273_xn$spirooutline$1aao(r273_g4(r395_mx, r389_d), r273_archv(), r273_g4(r389_l, r395_my), r273_arcvh(), r273_g4(r395_mx, r389_u), r273_archv(), r273_g4(r389_r, r395_my), r273_arcvh(), r273_close()));
                    if (r389_transformShiftOnly) {
                        _r395_t0 = r391_giz.apply({
                            'x': r395_mx,
                            'y': r395_my
                        });
                        r395_mx1 = _r395_t0.x;
                        r395_my1 = _r395_t0.y;
                        r395_currentGlyph.include(r273_Translate(r395_mx1 - r395_mx, r395_my1 - r395_my));
                    }
                    return void 0;
                }));
                return void 0;
            };
        };
        r273_xn$ExportCapture$2Lrc4b(function () {
            var _r399_t0, _r399_t1;
            return { 'RingAt': r273_RingAt };
        });
        var r273_RingAt = function (r400_x, r400_y, r400_r) {
            var _r400_t0, _r400_t1;
            return r273_Ring(r400_y + r400_r, r400_y - r400_r, r400_x - r400_r, r400_x + r400_r);
        };
        r273_xn$ExportCapture$2Lrc4b(function () {
            var _r402_t0, _r402_t1;
            return { 'DotAt': r273_DotAt };
        });
        var r273_DotAt = function (r403_x, r403_y, r403_r) {
            var _r403_t0, _r403_t1;
            return r273_Ring(r403_y + r403_r, r403_y - r403_r, r403_x - r403_r, r403_x + r403_r, true);
        };
        r273_xn$ExportCapture$2Lrc4b(function () {
            var _r405_t0, _r405_t1;
            return { 'RingStroke': r273_RingStroke };
        });
        var r273_RingStroke = function (r406_u, r406_d, r406_l, r406_r, r406_s, r406_transformShiftOnly) {
            var _r406_t0, _r406_t1;
            return function () {
                var _r408_t1;
                var _r408_t0 = this;
                var r408_currentGlyph = _r408_t0;
                var r408_giz = r408_currentGlyph.gizmo;
                r408_currentGlyph.include(r273_xn$createAndSaveGlyphImpl$2Lrc3c(null, null, function () {
                    var r412_mx1, r412_my1, _r412_t0, _r412_t2;
                    var _r412_t1 = this;
                    var r412_currentGlyph = _r412_t1;
                    var r412_my = (r406_u + r406_d) / 2;
                    var r412_mx = (r406_l + r406_r) / 2;
                    r412_currentGlyph.gizmo = r406_transformShiftOnly ? r1_Transform.Id() : r408_giz;
                    r412_currentGlyph.include(r273_dispiro(function () {
                        var _r414_t1;
                        var _r414_t0 = this;
                        return _r414_t0.gizmo = r412_currentGlyph.gizmo;
                    }, r273_widths.rhs(r1_fallback(r406_s, r273_Stroke)), r273_g4(r412_mx, r406_d, r273_heading(r273_Leftward)), r273_archv(), r273_g4(r406_l, r412_my), r273_arcvh(), r273_g4(r412_mx, r406_u, r273_heading(r273_Rightward)), r273_archv(), r273_g4(r406_r, r412_my), r273_arcvh(), r273_close()));
                    if (r406_transformShiftOnly) {
                        _r412_t0 = r408_giz.apply({
                            'x': r412_mx,
                            'y': r412_my
                        });
                        r412_mx1 = _r412_t0.x;
                        r412_my1 = _r412_t0.y;
                        r412_currentGlyph.include(r273_Translate(r412_mx1 - r412_mx, r412_my1 - r412_my));
                    }
                    return void 0;
                }));
                return void 0;
            };
        };
        r273_xn$ExportCapture$2Lrc4b(function () {
            var _r417_t0, _r417_t1;
            return { 'RingStrokeAt': r273_RingStrokeAt };
        });
        var r273_RingStrokeAt = function (r418_x, r418_y, r418_r, r418_s) {
            var _r418_t0, _r418_t1;
            return r273_RingStroke(r418_y + r418_r, r418_y - r418_r, r418_x - r418_r, r418_x + r418_r, r418_s);
        };
        r273_xn$ExportCapture$2Lrc4b(function () {
            var _r420_t0, _r420_t1;
            return { 'DotStrokeAt': r273_DotStrokeAt };
        });
        var r273_DotStrokeAt = function (r421_x, r421_y, r421_r, r421_s) {
            var _r421_t0, _r421_t1;
            return r273_RingStroke(r421_y + r421_r, r421_y - r421_r, r421_x - r421_r, r421_x + r421_r, r421_s, true);
        };
        r273_xn$ExportCapture$2Lrc4b(function () {
            var _r423_t0, _r423_t1;
            return { 'CircleRing': r273_CircleRing };
        });
        var r273_CircleRing = function (r424_u, r424_d, r424_l, r424_r, r424_transformShiftOnly) {
            var _r424_t0, _r424_t1;
            return function () {
                var _r426_t1;
                var _r426_t0 = this;
                var r426_currentGlyph = _r426_t0;
                var r426_giz = r426_currentGlyph.gizmo;
                r426_currentGlyph.include(r273_xn$createAndSaveGlyphImpl$2Lrc3c(null, null, function () {
                    var r430_mx1, r430_my1, _r430_t0, _r430_t2;
                    var _r430_t1 = this;
                    var r430_currentGlyph = _r430_t1;
                    var r430_my = (r424_u + r424_d) / 2;
                    var r430_mx = (r424_l + r424_r) / 2;
                    r430_currentGlyph.gizmo = r424_transformShiftOnly ? r1_Transform.Id() : r426_giz;
                    r430_currentGlyph.include(r273_xn$spirooutline$1aao(function () {
                        var _r432_t1;
                        var _r432_t0 = this;
                        return _r432_t0.gizmo = r430_currentGlyph.gizmo;
                    }, r273_g4(r430_mx, r424_d), r273_archv(32, 2), r273_g4(r424_l, r430_my), r273_arcvh(32, 2), r273_g4(r430_mx, r424_u), r273_archv(32, 2), r273_g4(r424_r, r430_my), r273_arcvh(32, 2), r273_close()));
                    if (r424_transformShiftOnly) {
                        _r430_t0 = r426_giz.apply({
                            'x': r430_mx,
                            'y': r430_my
                        });
                        r430_mx1 = _r430_t0.x;
                        r430_my1 = _r430_t0.y;
                        r430_currentGlyph.include(r273_Translate(r430_mx1 - r430_mx, r430_my1 - r430_my));
                    }
                    return void 0;
                }));
                return void 0;
            };
        };
        r273_xn$ExportCapture$2Lrc4b(function () {
            var _r435_t0, _r435_t1;
            return { 'CircleRingAt': r273_CircleRingAt };
        });
        var r273_CircleRingAt = function (r436_x, r436_y, r436_r) {
            var _r436_t0, _r436_t1;
            return r273_CircleRing(r436_y + r436_r, r436_y - r436_r, r436_x - r436_r, r436_x + r436_r);
        };
        r273_xn$ExportCapture$2Lrc4b(function () {
            var _r438_t0, _r438_t1;
            return { 'CircleDotAt': r273_CircleDotAt };
        });
        var r273_CircleDotAt = function (r439_x, r439_y, r439_r) {
            var _r439_t0, _r439_t1;
            return r273_CircleRing(r439_y + r439_r, r439_y - r439_r, r439_x - r439_r, r439_x + r439_r, true);
        };
        r273_xn$ExportCapture$2Lrc4b(function () {
            var _r441_t0, _r441_t1;
            return { 'RoundStrokeTerminalAt': r273_RoundStrokeTerminalAt };
        });
        var r273_RoundStrokeTerminalAt = function (r442_x, r442_y, r442_r) {
            var _r442_t0, _r442_t1;
            return r273_CircleRing(r442_y + r442_r, r442_y - r442_r, r442_x - r273_HVContrast * r442_r, r442_x + r273_HVContrast * r442_r, true);
        };
        r273_xn$ExportCapture$2Lrc4b(function () {
            var _r444_t0, _r444_t1;
            return { 'OShapeT': r273_OShapeT };
        });
        var r273_OShapeT = function (r445_sink, r445_u, r445_d, r445_l, r445_r, r445__width, r445__ada, r445__adb) {
            var r445_ymiddlea, r445_ymiddleb, _r445_t0, _r445_t1, _r445_t2;
            var r445_middle = (r445_l + r445_r) / 2;
            var r445_width = r1_fallback(r445__width, r273_Stroke);
            var r445_ada = r1_fallback(r445__ada, r273_SmallArchDepthA);
            var r445_adb = r1_fallback(r445__adb, r273_SmallArchDepthB);
            var r445_mc = r273_CorrectionOMidX * r445_width;
            if (r445_u - r445_d > r445_ada + r445_adb)
                return r445_sink(r273_widths(r445_width, 0), r273_g4(r445_middle - r445_mc, r445_u - r273_O), r273_archv(), r273_flat(r445_l + r273_OX, r445_u - r445_ada), r273_curl(r445_l + r273_OX, r445_d + r445_adb), r273_arcvh(), r273_g4(r445_middle + r445_mc, r445_d + r273_O), r273_archv(), r273_flat(r445_r - r273_OX, r445_d + r445_ada), r273_curl(r445_r - r273_OX, r445_u - r445_adb), r273_arcvh(), r273_close());
            else {
                r445_ymiddlea = r1_mix(r445_d, r445_u, r445_adb / (r445_ada + r445_adb));
                r445_ymiddleb = r1_mix(r445_d, r445_u, r445_ada / (r445_ada + r445_adb));
                return r445_sink(r273_widths(r445_width, 0), r273_g4(r445_middle - r445_mc, r445_u - r273_O), r273_archv(), r273_g4(r445_l + r273_OX, r445_ymiddlea), r273_arcvh(), r273_g4(r445_middle + r445_mc, r445_d + r273_O), r273_archv(), r273_g4(r445_r - r273_OX, r445_ymiddleb), r273_arcvh(), r273_close());
            }
        };
        r273_xn$ExportCapture$2Lrc4b(function () {
            var _r447_t0, _r447_t1;
            return { 'OShape': r273_OShape };
        });
        var r273_OShape = function (r448_u, r448_d, r448_l, r448_r, r448__width, r448__ada, r448__adb) {
            var _r448_t0, _r448_t1;
            return r273_OShapeT(r273_dispiro, r448_u, r448_d, r448_l, r448_r, r448__width, r448__ada, r448__adb);
        };
        r273_xn$ExportCapture$2Lrc4b(function () {
            var _r450_t0, _r450_t1;
            return { 'OShapeOutline': r273_OShapeOutline };
        });
        var r273_OShapeOutline = function (r451_u, r451_d, r451_l, r451_r, r451__width, r451__ada, r451__adb) {
            var _r451_t0, _r451_t1;
            return r273_OShapeT(r273_xn$spirooutline$1aao, r451_u, r451_d, r451_l, r451_r, r451__width, r451__ada, r451__adb);
        };
        r273_OShape.NoOvershoot = function (r452_u, r452_d, r452_l, r452_r, r452__width, r452__ada, r452__adb) {
            var _r452_t0, _r452_t1;
            return r273_OShape(r452_u + r273_O, r452_d - r273_O, r452_l - r273_OX, r452_r + r273_OX, r452__width, r452__ada, r452__adb);
        };
        r273_OShapeOutline.NoOvershoot = function (r453_u, r453_d, r453_l, r453_r, r453__width, r453__ada, r453__adb) {
            var _r453_t0, _r453_t1;
            return r273_OShapeOutline(r453_u + r273_O, r453_d - r273_O, r453_l - r273_OX, r453_r + r273_OX, r453__width, r453__ada, r453__adb);
        };
        r273_xn$ExportCapture$2Lrc4b(function () {
            var _r455_t0, _r455_t1;
            return { 'OShapeFlatTB': r273_OShapeFlatTB };
        });
        var r273_OShapeFlatTB = function (r456_u, r456_d, r456_l, r456_r, r456__width, r456__ada, r456__adb, r456_gap) {
            var _r456_t0, _r456_t1;
            return function () {
                var r458_ymiddlea, r458_ymiddleb, _r458_t1;
                var _r458_t0 = this;
                var r458_currentGlyph = _r458_t0;
                var r458_middle = (r456_l + r456_r) / 2;
                var r458_width = r1_fallback(r456__width, r273_Stroke);
                var r458_ada = r1_fallback(r456__ada, r273_SmallArchDepthA);
                var r458_adb = r1_fallback(r456__adb, r273_SmallArchDepthB);
                var r458_mc = r273_CorrectionOMidX * r458_width;
                if (r456_u - r456_d > r458_ada + r458_adb)
                    r458_currentGlyph.include(r273_dispiro(r273_flat(r458_middle - r458_mc, r456_u - r273_O, r273_widths.lhs(r458_width)), r273_curl(r458_middle - r458_mc - r456_gap / 2, r456_u - r273_O), r273_archv(), r273_flat(r456_l + r273_OX, r456_u - r458_ada), r273_curl(r456_l + r273_OX, r456_d + r458_adb), r273_arcvh(), r273_flat(r458_middle + r458_mc - r456_gap / 2, r456_d + r273_O), r273_curl(r458_middle + r458_mc + r456_gap / 2, r456_d + r273_O), r273_archv(), r273_flat(r456_r - r273_OX, r456_d + r458_ada), r273_curl(r456_r - r273_OX, r456_u - r458_adb), r273_arcvh(), r273_flat(r458_middle - r458_mc + r456_gap / 2, r456_u - r273_O), r273_curl(r458_middle - r458_mc, r456_u - r273_O)));
                else {
                    r458_ymiddlea = r1_mix(r456_d, r456_u, r458_adb / (r458_ada + r458_adb));
                    r458_ymiddleb = r1_mix(r456_d, r456_u, r458_ada / (r458_ada + r458_adb));
                    r458_currentGlyph.include(r273_dispiro(r273_flat(r458_middle - r458_mc, r456_u - r273_O, r273_widths.lhs(r458_width)), r273_curl(r458_middle - r458_mc - r456_gap / 2, r456_u - r273_O), r273_archv(), r273_g4(r456_l + r273_OX, r458_ymiddlea), r273_arcvh(), r273_flat(r458_middle + r458_mc - r456_gap / 2, r456_d + r273_O), r273_curl(r458_middle + r458_mc + r456_gap / 2, r456_d + r273_O), r273_archv(), r273_g4(r456_r - r273_OX, r458_ymiddleb), r273_arcvh(), r273_flat(r458_middle - r458_mc + r456_gap / 2, r456_u - r273_O), r273_curl(r458_middle - r458_mc, r456_u - r273_O)));
                }
                return void 0;
            };
        };
        r273_xn$ExportCapture$2Lrc4b(function () {
            var _r462_t0, _r462_t1;
            return { 'HSerif': r273_HSerif };
        });
        var r273_HSerif = function () {
            var r465_lt, r465_lb, r465_rt, r465_rb, r465_mt, r465_mtAsymmetric, r465_mb, r465_mbAsymmetric;
            var r465_exports = {};
            r465_exports.lt = r465_lt = function (r473_x, r473_y, r473_length, r473__sw, r473__swRef) {
                var _r473_t0, _r473_t1;
                return function () {
                    var _r475_t1;
                    var _r475_t0 = this;
                    var r475_currentGlyph = _r475_t0;
                    var r475_sw = r1_fallback(r473__sw, r273_Stroke);
                    var r475_swRef = r1_fallback(r473__swRef, r475_sw);
                    r475_currentGlyph.include(r273_dispiro(r273_flat(r473_x + 0.5 * r273_HVContrast * r475_swRef, r473_y, r273_widths.heading(r475_sw, 0, r273_Leftward)), r273_curl(r473_x - r473_length - r273_TanSlope * (r475_sw * r273_DesignParameters.serifShiftX), r473_y)));
                    return void 0;
                };
            };
            r465_exports.lb = r465_lb = function (r478_x, r478_y, r478_length, r478__sw, r478__swRef) {
                var _r478_t0, _r478_t1;
                return function () {
                    var _r480_t1;
                    var _r480_t0 = this;
                    var r480_currentGlyph = _r480_t0;
                    var r480_sw = r1_fallback(r478__sw, r273_Stroke);
                    var r480_swRef = r1_fallback(r478__swRef, r480_sw);
                    r480_currentGlyph.include(r273_dispiro(r273_flat(r478_x + 0.5 * r273_HVContrast * r480_swRef, r478_y, r273_widths.heading(0, r480_sw, r273_Leftward)), r273_curl(r478_x - r478_length + r273_TanSlope * (r480_sw * r273_DesignParameters.serifShiftX), r478_y)));
                    return void 0;
                };
            };
            r465_exports.rt = r465_rt = function (r483_x, r483_y, r483_length, r483__sw, r483__swRef) {
                var _r483_t0, _r483_t1;
                return function () {
                    var _r485_t1;
                    var _r485_t0 = this;
                    var r485_currentGlyph = _r485_t0;
                    var r485_sw = r1_fallback(r483__sw, r273_Stroke);
                    var r485_swRef = r1_fallback(r483__swRef, r485_sw);
                    r485_currentGlyph.include(r273_dispiro(r273_flat(r483_x - 0.5 * r273_HVContrast * r485_swRef, r483_y, r273_widths.heading(0, r485_sw, r273_Rightward)), r273_curl(r483_x + r483_length - r273_TanSlope * (r485_sw * r273_DesignParameters.serifShiftX), r483_y)));
                    return void 0;
                };
            };
            r465_exports.rb = r465_rb = function (r488_x, r488_y, r488_length, r488__sw, r488__swRef) {
                var _r488_t0, _r488_t1;
                return function () {
                    var _r490_t1;
                    var _r490_t0 = this;
                    var r490_currentGlyph = _r490_t0;
                    var r490_sw = r1_fallback(r488__sw, r273_Stroke);
                    var r490_swRef = r1_fallback(r488__swRef, r490_sw);
                    r490_currentGlyph.include(r273_dispiro(r273_flat(r488_x - 0.5 * r273_HVContrast * r490_swRef, r488_y, r273_widths.heading(r490_sw, 0, r273_Rightward)), r273_curl(r488_x + r488_length + r273_TanSlope * (r490_sw * r273_DesignParameters.serifShiftX), r488_y)));
                    return void 0;
                };
            };
            r465_exports.mt = r465_mt = function (r493_x, r493_y, r493_length, r493__sw) {
                var _r493_t0, _r493_t1;
                return r465_mtAsymmetric(r493_x, r493_y, r493_length, r493_length, r493__sw);
            };
            r465_exports.mtAsymmetric = r465_mtAsymmetric = function (r495_x, r495_y, r495_l, r495_r, r495__sw) {
                var _r495_t0, _r495_t1;
                var r495_sw = r1_fallback(r495__sw, r273_Stroke);
                return r273_dispiro(r273_flat(r495_x + r495_r - r273_TanSlope * (r495_sw * r273_DesignParameters.serifShiftX), r495_y, r273_widths(r495_sw, 0)), r273_curl(r495_x - r495_l - r273_TanSlope * (r495_sw * r273_DesignParameters.serifShiftX), r495_y));
            };
            r465_exports.mb = r465_mb = function (r497_x, r497_y, r497_length, r497__sw) {
                var _r497_t0, _r497_t1;
                return r465_mbAsymmetric(r497_x, r497_y, r497_length, r497_length, r497__sw);
            };
            r465_exports.mbAsymmetric = r465_mbAsymmetric = function (r499_x, r499_y, r499_l, r499_r, r499__sw) {
                var _r499_t0, _r499_t1;
                var r499_sw = r1_fallback(r499__sw, r273_Stroke);
                return r273_dispiro(r273_flat(r499_x + r499_r + r273_TanSlope * (r499_sw * r273_DesignParameters.serifShiftX), r499_y, r273_widths(0, r499_sw)), r273_curl(r499_x - r499_l + r273_TanSlope * (r499_sw * r273_DesignParameters.serifShiftX), r499_y));
            };
            return r465_exports;
        }();
        r273_xn$ExportCapture$2Lrc4b(function () {
            var _r501_t0, _r501_t1;
            return { 'VSerif': r273_VSerif };
        });
        var r273_VSerif = function () {
            var r504_dr, r504_ur, r504_dl, r504_ul;
            var r504_exports = {};
            r504_exports.dr = r504_dr = function (r512_x, r512_y, r512_length, r512_sw) {
                var _r512_t0, _r512_t1;
                return function () {
                    var _r514_t1;
                    var _r514_t0 = this;
                    var r514_currentGlyph = _r514_t0;
                    r514_currentGlyph.include(r273_dispiro(r273_widths.rhs(r1_fallback(r512_sw, r273_VJutStroke)), r273_flat(r512_x, r512_y, r273_heading(r273_Downward)), r273_curl(r512_x, r512_y - r512_length, r273_heading(r273_Downward))));
                    return void 0;
                };
            };
            r504_exports.ur = r504_ur = function (r517_x, r517_y, r517_length, r517_sw) {
                var _r517_t0, _r517_t1;
                return function () {
                    var _r519_t1;
                    var _r519_t0 = this;
                    var r519_currentGlyph = _r519_t0;
                    r519_currentGlyph.include(r273_dispiro(r273_widths.lhs(r1_fallback(r517_sw, r273_VJutStroke)), r273_flat(r517_x, r517_y, r273_heading(r273_Upward)), r273_curl(r517_x, r517_y + r517_length, r273_heading(r273_Upward))));
                    return void 0;
                };
            };
            r504_exports.dl = r504_dl = function (r522_x, r522_y, r522_length, r522_sw) {
                var _r522_t0, _r522_t1;
                return function () {
                    var _r524_t1;
                    var _r524_t0 = this;
                    var r524_currentGlyph = _r524_t0;
                    r524_currentGlyph.include(r273_dispiro(r273_widths.lhs(r1_fallback(r522_sw, r273_VJutStroke)), r273_flat(r522_x, r522_y, r273_heading(r273_Downward)), r273_curl(r522_x, r522_y - r522_length, r273_heading(r273_Downward))));
                    return void 0;
                };
            };
            r504_exports.ul = r504_ul = function (r527_x, r527_y, r527_length, r527_sw) {
                var _r527_t0, _r527_t1;
                return function () {
                    var _r529_t1;
                    var _r529_t0 = this;
                    var r529_currentGlyph = _r529_t0;
                    r529_currentGlyph.include(r273_dispiro(r273_widths.rhs(r1_fallback(r527_sw, r273_VJutStroke)), r273_flat(r527_x, r527_y, r273_heading(r273_Upward)), r273_curl(r527_x, r527_y + r527_length, r273_heading(r273_Upward))));
                    return void 0;
                };
            };
            return r504_exports;
        }();
        r273_xn$ExportCapture$2Lrc4b(function () {
            var _r532_t0, _r532_t1;
            return { 'NeedSlab': r273_NeedSlab };
        });
        var r273_NeedSlab = function (r533_level, r533_p) {
            var _r533_t0, _r533_t1;
            return r533_level ? r533_p : function () {
                var _r535_t1;
                var _r535_t0 = this;
                var r535_currentGlyph = _r535_t0;
                return void 0;
            };
        };
        r273_xn$ExportCapture$2Lrc4b(function () {
            var _r537_t0, _r537_t1;
            return { 'NeedNotItalic': r273_NeedNotItalic };
        });
        var r273_NeedNotItalic = function (r538_p) {
            var _r538_t0, _r538_t1;
            return r273_para.isItalic ? function () {
                var _r540_t1;
                var _r540_t0 = this;
                var r540_currentGlyph = _r540_t0;
                return void 0;
            } : r538_p;
        };
        r273_xn$ExportCapture$2Lrc4b(function () {
            var _r542_t0, _r542_t1;
            return { 'DiagCor': r273_DiagCor };
        });
        var r273_DiagCor = function (r543_dy, r543_dx, r543_dyt, r543_dxt) {
            var _r543_t0, _r543_t1;
            var r543_ay = Math.max(0, Math.abs(r543_dy) - r1_fallback(r543_dyt, 0));
            var r543_ax = Math.max(0, Math.abs(r543_dx) - r1_fallback(r543_dxt, 0));
            return Math.hypot(r543_ay, r543_ax) / r543_ay;
        };
        r273_xn$ExportCapture$2Lrc4b(function () {
            var _r545_t0, _r545_t1;
            return { 'DiagCorDs': r273_DiagCorDs };
        });
        var r273_DiagCorDs = function (r546_dy, r546_dx, r546_ds) {
            var _r546_t0, _r546_t1;
            var r546_kDiag = r273_DiagCor(r546_dy, r546_dx);
            var r546_n = 0;
            while (r546_n < 4) {
                r546_kDiag = r273_DiagCor(r546_dy, r546_dx - r546_ds * r546_kDiag);
                r546_n = r546_n + 1;
            }
            return r546_kDiag;
        };
        r273_xn$ExportCapture$2Lrc4b(function () {
            var _r548_t0, _r548_t1;
            return { 'HBar': r273_HBar };
        });
        var r273_HBar = function () {
            var r551_m, r551_t, r551_b;
            var r551_exports = {};
            r551_exports.m = r551_m = function (r559_xleft, r559_xright, r559_y, r559__fine) {
                var _r559_t0, _r559_t1;
                return r273_dispiro(r273_widths.center(r1_fallback(r559__fine, r273_Stroke)), r273_flat(r559_xleft, r559_y, r273_heading(r273_Rightward)), r273_curl(r559_xright, r559_y, r273_heading(r273_Rightward)));
            };
            r551_exports.t = r551_t = function (r561_xl, r561_xr, r561_y, r561__fine) {
                var _r561_t0, _r561_t1;
                return r551_m(r561_xl, r561_xr, r561_y - r1_fallback(r561__fine, r273_Stroke) * 0.5, r561__fine);
            };
            r551_exports.b = r551_b = function (r563_xl, r563_xr, r563_y, r563__fine) {
                var _r563_t0, _r563_t1;
                return r551_m(r563_xl, r563_xr, r563_y + r1_fallback(r563__fine, r273_Stroke) * 0.5, r563__fine);
            };
            return r551_exports;
        }();
        r273_xn$ExportCapture$2Lrc4b(function () {
            var _r565_t0, _r565_t1;
            return { 'VBar': r273_VBar };
        });
        var r273_VBar = function () {
            var r568_m, r568_l, r568_r;
            var r568_exports = {};
            r568_exports.m = r568_m = function (r576_x, r576_ydown, r576_yup, r576__sw) {
                var _r576_t0, _r576_t1;
                var r576_sw = r1_fallback(r576__sw, r273_Stroke);
                return r273_dispiro(r273_widths.center(r576_sw), r273_flat(r576_x, r576_ydown, r273_heading(r576_ydown < r576_yup ? r273_Upward : r273_Downward)), r273_curl(r576_x, r576_yup, r273_heading(r576_ydown < r576_yup ? r273_Upward : r273_Downward)));
            };
            r568_exports.l = r568_l = function (r578_x, r578_yd, r578_yu, r578__sw) {
                var _r578_t0, _r578_t1;
                return r568_m(r578_x + r1_fallback(r578__sw, r273_Stroke) * 0.5 * r273_HVContrast, r578_yd, r578_yu, r578__sw);
            };
            r568_exports.r = r568_r = function (r580_x, r580_yd, r580_yu, r580__sw) {
                var _r580_t0, _r580_t1;
                return r568_m(r580_x - r1_fallback(r580__sw, r273_Stroke) * 0.5 * r273_HVContrast, r580_yd, r580_yu, r580__sw);
            };
            return r568_exports;
        }();
        r273_xn$ExportCapture$2Lrc4b(function () {
            var _r582_t0, _r582_t1;
            return { 'HOverlayBar': r273_HOverlayBar };
        });
        var r273_HOverlayBar = function (r583_xleft, r583_xright, r583_y, r583_s) {
            var _r583_t0, _r583_t1;
            return r273_dispiro(r273_widths.center(r1_fallback(r583_s, r273_OverlayStroke)), r273_flat(r583_xleft, r583_y), r273_curl(r583_xright, r583_y));
        };
        r273_xn$ExportCapture$2Lrc4b(function () {
            var _r585_t0, _r585_t1;
            return { 'HCrossBar': r273_HCrossBar };
        });
        var r273_HCrossBar = function (r586_xl, r586_xr, r586_y, r586_s) {
            var _r586_t0, _r586_t1;
            return r273_dispiro(r273_widths.center(r1_fallback(r586_s, r273_OverlayStroke)), r273_flat(r586_xl, r586_y), r273_curl(r586_xr, r586_y));
        };
        r273_HCrossBar.top = function (r587_xl, r587_xr, r587_y, r587__s) {
            var _r587_t0, _r587_t1;
            var r587_s = r1_fallback(r587__s, r273_Stroke);
            return r273_HCrossBar(r587_xl - 0 * r587_s * r273_TanSlope, r587_xr - 0 * r587_s * r273_TanSlope, r587_y - 0.5 * r587_s, r587_s);
        };
        r273_HCrossBar.bottom = function (r588_xl, r588_xr, r588_y, r588__s) {
            var _r588_t0, _r588_t1;
            var r588_s = r1_fallback(r588__s, r273_Stroke);
            return r273_HCrossBar(r588_xl + 0 * r588_s * r273_TanSlope, r588_xr + 0 * r588_s * r273_TanSlope, r588_y + 0.5 * r588_s, r588_s);
        };
        r273_xn$ExportCapture$2Lrc4b(function () {
            var _r590_t0, _r590_t1;
            return { 'FlatSlashShape': r273_FlatSlashShape };
        });
        var r273_FlatSlashShape = function (r591_middlex, r591_middle, r591_fine, r591_kx, r591_ky) {
            var _r591_t0, _r591_t1;
            return function () {
                var _r593_t1;
                var _r593_t0 = this;
                var r593_currentGlyph = _r593_t0;
                r593_currentGlyph.include(r273_dispiro(r273_flat(r591_middlex - r273_LongJut * r1_fallback(r591_kx, 0.8), r591_middle - r273_LongJut * r1_fallback(r591_ky, 0.4), r273_widths(r591_fine, r591_fine)), r273_curl(r591_middlex + r273_LongJut * r1_fallback(r591_kx, 0.8), r591_middle + r273_LongJut * r1_fallback(r591_ky, 0.4))));
                return void 0;
            };
        };
        var r273_determineMixR = function (r595_w, r595_v, r595_u, r595_sw, r595_swash) {
            var r595_idepth, r595_iwidth, r595_adjust, _r595_t0, _r595_t1;
            if (!r595_swash && r595_w < r595_v)
                return 1 - r273_determineMixR(r595_v, r595_w, r595_u, r595_sw, r595_swash);
            var r595_superness = r273_DesignParameters.superness;
            var r595_r = r595_w <= r595_v ? 0.5 : true ? 1 / (Math.pow(1 - Math.pow(1 - r595_v / r595_w, r595_superness), 1 / r595_superness) + 1) : void 0;
            if (r595_swash) {
                r595_idepth = r595_w - r595_sw;
                r595_iwidth = r595_u * r595_r - r595_sw;
                if (r595_iwidth > 0 && r595_idepth > 0 && r595_iwidth / r595_idepth >= 2) {
                    r595_adjust = r1_clamp(0.975, 1, 1 - (r595_iwidth / r595_idepth - 2) * 0.0125);
                    r595_r = r595_r * r595_adjust;
                }
            } else
                r595_r = 0.5 + (r595_r - 0.5) * (r595_v + r595_w) / (r595_u * 2);
            if (r595_r < 0.5)
                r595_r = 0.5;
            return r595_r;
        };
        var r273_nHookSegments = 12;
        var r273_HookShape = function (r596_toStraight, r596_toFinish, r596_isStart, r596_y, r596_tight, r596__sw, r596__swItalicAdj, r596_noAdjTerminalY) {
            var r596_s, r596_fraction, r596_mixRatioAdjust, r596_fractionAfter, r596_myfinal, _r596_t2, _r596_t3, _r596_t4, _r596_tag5, _r596_t6;
            var r596_atBottom = r596_toStraight.y > r596_y;
            var r596_sw = r1_fallback(r596__sw, r273_Stroke);
            var r596_swItalicAdj = r1_fallback(r596__swItalicAdj, r596_sw);
            var r596_ltr = r596_isStart ? r596_toFinish.x < r596_toStraight.x : r596_toFinish.x > r596_toStraight.x;
            var r596_dtu = r596_isStart ? r596_y > r596_toFinish.y : r596_y < r596_toFinish.y;
            var r596_doSwash = !r596_tight && r273_para.isItalic && r596_ltr && r596_atBottom && !r596_isStart;
            var r596_superness = r596_tight ? r273_DesignParameters.tightHookSuperness : r273_DesignParameters.superness;
            r596_toFinish.x = r596_toFinish.x + r273_OXHook * (r596_ltr ? -1 : 1) * (r596_isStart ? -1 : 1);
            if (r596_doSwash) {
                r596_toFinish.x = r596_toFinish.x + r273_TailAdjX * r273_TanSlope;
                r596_toFinish.y = r596_toFinish.y - r273_TailAdjY * r273_TanSlope;
            }
            var r596_w = Math.abs(r596_toStraight.y - r596_y);
            var r596_v = Math.abs(r596_toFinish.y - r596_y);
            var r596_u = Math.abs(r596_toFinish.x - r596_toStraight.x);
            var r596_mixRatio = r273_determineMixR(r596_w, r596_v, r596_u, r596_sw, r596_doSwash);
            var r596_mxSwMultiplier = (r596_tight && r596_tight.shift ? r596_tight.shift : 1 - (r596_tight || 0)) * (r596_atBottom ? 1 : -1);
            var r596_mx = r1_mix(r596_toStraight.x, r596_toFinish.x, r596_mixRatio) + r596_mxSwMultiplier * r273_CorrectionOMidX * r596_swItalicAdj;
            var r596_keyKnot = r273_g4[r596_ltr ? 'right' : 'left'].mid(r596_mx, r596_y, !r596_tight ? void 0 : (r596_s = r596_ltr ? r273_Rightward : r273_Leftward, r273_heading({
                'x': r596_s.x * r1_fallback(r596_tight.skew, 1),
                'y': r596_s.y
            })));
            (function () {
                var r598_rad = Math.min(r596_w, r596_mixRatio * r596_u);
                var r598_skew0 = r1_clamp(0, r596_w, r596_w - r596_v) / r598_rad + (r1_clamp(1, 1.5, r596_mixRatio * r596_u / r596_w) - 1) * 0.5;
                var r598_depth = r596_v + r598_skew0 * r596_sw - r596_sw;
                var r598_shallowLimit = r596_sw / 2;
                var r598_skew = r1_clamp(0, 1 / 2, r598_skew0 + r1_clamp(0, r598_shallowLimit, r598_shallowLimit - r598_depth) / r598_rad);
                var r598_faf = r596_toFinish.af;
                r596_toFinish.af = function () {
                    var _r599_t0 = this;
                    var _r599_t1 = arguments;
                    if (r598_faf)
                        r598_faf.apply(_r599_t0, _r599_t1);
                    return _r599_t0.headsTo ? _r599_t0.headsTo(r596_doSwash ? {
                        'x': r273_Contrast / Math.sqrt(1 + r598_skew * r598_skew) * (r596_dtu ? -1 : 1),
                        'y': r598_skew / Math.sqrt(1 + r598_skew * r598_skew) * (r596_ltr ? 1 : -1)
                    } : {
                        'x': r273_Contrast * (r596_dtu ? -1 : 1),
                        'y': 0
                    }) : void 0;
                };
                return !r596_noAdjTerminalY && !r596_doSwash ? r596_toFinish.y = r596_toFinish.y + r598_skew * r596_sw * (r596_y > r596_toFinish.y ? -1 : +1) : void 0;
            }());
            var r596_segBefore = [];
            var r596_segAfter = [];
            var _r596_t0 = 1;
            var _r596_t1 = r273_nHookSegments;
            var r596_j = _r596_t0;
            while (r596_j < _r596_t1) {
                r596_fraction = r596_j / r273_nHookSegments;
                r596_mixRatioAdjust = Math.max(1 / 2, 1 / 2 + (r596_doSwash ? 1 : r596_tight ? 0 : 1 / 8) * (r596_mixRatio - 1 / 2));
                r596_fractionAfter = r596_fraction * (1 - r596_mixRatioAdjust) / r596_mixRatioAdjust;
                r596_myfinal = r273__SuperXY((1 - r596_mixRatioAdjust) / r596_mixRatioAdjust, r596_superness);
                r596_segBefore.push(r273_g4(r1_mix(r596_mx, r596_toStraight.x, r596_fraction), r1_mix(r596_y, r596_toStraight.y, 1 - r273__SuperXY(r596_fraction, r596_superness)), r273_unimportant));
                r596_segAfter.push(r273_g4(r1_mix(r596_mx, r596_toFinish.x, r596_fraction), r1_mix(r596_y, r596_toFinish.y, (1 - r273__SuperXY(r596_fractionAfter, r596_superness)) / (1 - r596_myfinal)), r273_unimportant));
                r596_j = r596_j + 1;
            }
            if (r596_isStart)
                return [
                    r596_segAfter.reverse(),
                    r596_keyKnot,
                    r596_segBefore
                ];
            else
                return [
                    r596_segBefore.reverse(),
                    r596_keyKnot,
                    r596_segAfter
                ];
        };
        var r273_hookStartBlender = function (r602_before, r602_after, r602_args) {
            var _r602_t0, _r602_t1;
            return r273_HookShape(r602_after, r602_before, true, r602_args.y, r602_args.tight, r602_args.sw, r602_args.swItalicAdj, r602_args.noAdjTerminalY);
        };
        var r273_hookEndBlender = function (r603_before, r603_after, r603_args) {
            var _r603_t0, _r603_t1;
            return r273_HookShape(r603_before, r603_after, false, r603_args.y, r603_args.tight, r603_args.sw, r603_args.swItalicAdj, r603_args.noAdjTerminalY);
        };
        r273_xn$ExportCapture$2Lrc4b(function () {
            var _r605_t0, _r605_t1;
            return { 'hookstart': r273_hookstart };
        });
        var r273_hookstart = function () {
            var _r606_t6;
            var _r606_t7 = arguments;
            var _r606_t0 = [].slice.call(_r606_t7, 0);
            var _r606_t1 = [];
            var _r606_t2 = 0;
            while (_r606_t2 < _r606_t0.length) {
                if (!(_r606_t0[_r606_t2] instanceof r273_xn$NamedParameterPair$2Lrc9b))
                    _r606_t1.push(_r606_t0[_r606_t2]);
                _r606_t2 = _r606_t2 + 1;
            }
            var _r606_t3 = _r606_t0;
            var _r606_t4 = _r606_t3.length;
            var _r606_t5 = 0;
            while (_r606_t5 < _r606_t4) {
                _r606_t2 = _r606_t3[_r606_t5];
                if (_r606_t2 && _r606_t2 instanceof r273_xn$NamedParameterPair$2Lrc9b && _r606_t2.left === 'y')
                    r606_y = _r606_t2.right;
                if (_r606_t2 && _r606_t2 instanceof r273_xn$NamedParameterPair$2Lrc9b && _r606_t2.left === 'tight')
                    r606_tight = _r606_t2.right;
                if (_r606_t2 && _r606_t2 instanceof r273_xn$NamedParameterPair$2Lrc9b && _r606_t2.left === 'sw')
                    r606_sw = _r606_t2.right;
                if (_r606_t2 && _r606_t2 instanceof r273_xn$NamedParameterPair$2Lrc9b && _r606_t2.left === 'swItalicAdj')
                    r606_swItalicAdj = _r606_t2.right;
                if (_r606_t2 && _r606_t2 instanceof r273_xn$NamedParameterPair$2Lrc9b && _r606_t2.left === 'noAdjTerminalY')
                    r606_noAdjTerminalY = _r606_t2.right;
                _r606_t5 = _r606_t5 + 1;
            }
            var r606_y = r1_fallback(r606_y, _r606_t1[0]);
            var r606_tight = r1_fallback(r606_tight, _r606_t1[1]);
            var r606_sw = r1_fallback(r606_sw, _r606_t1[2]);
            var r606_swItalicAdj = r1_fallback(r606_swItalicAdj, _r606_t1[3]);
            var r606_noAdjTerminalY = r1_fallback(r606_noAdjTerminalY, _r606_t1[4]);
            return r1_Interpolator(r273_hookStartBlender, {
                'y': r606_y,
                'tight': r606_tight,
                'sw': r606_sw,
                'swItalicAdj': r606_swItalicAdj,
                'noAdjTerminalY': r606_noAdjTerminalY
            });
        };
        r273_xn$ExportCapture$2Lrc4b(function () {
            var _r612_t0, _r612_t1;
            return { 'hookend': r273_hookend };
        });
        var r273_hookend = function () {
            var _r613_t6;
            var _r613_t7 = arguments;
            var _r613_t0 = [].slice.call(_r613_t7, 0);
            var _r613_t1 = [];
            var _r613_t2 = 0;
            while (_r613_t2 < _r613_t0.length) {
                if (!(_r613_t0[_r613_t2] instanceof r273_xn$NamedParameterPair$2Lrc9b))
                    _r613_t1.push(_r613_t0[_r613_t2]);
                _r613_t2 = _r613_t2 + 1;
            }
            var _r613_t3 = _r613_t0;
            var _r613_t4 = _r613_t3.length;
            var _r613_t5 = 0;
            while (_r613_t5 < _r613_t4) {
                _r613_t2 = _r613_t3[_r613_t5];
                if (_r613_t2 && _r613_t2 instanceof r273_xn$NamedParameterPair$2Lrc9b && _r613_t2.left === 'y')
                    r613_y = _r613_t2.right;
                if (_r613_t2 && _r613_t2 instanceof r273_xn$NamedParameterPair$2Lrc9b && _r613_t2.left === 'tight')
                    r613_tight = _r613_t2.right;
                if (_r613_t2 && _r613_t2 instanceof r273_xn$NamedParameterPair$2Lrc9b && _r613_t2.left === 'sw')
                    r613_sw = _r613_t2.right;
                if (_r613_t2 && _r613_t2 instanceof r273_xn$NamedParameterPair$2Lrc9b && _r613_t2.left === 'swItalicAdj')
                    r613_swItalicAdj = _r613_t2.right;
                if (_r613_t2 && _r613_t2 instanceof r273_xn$NamedParameterPair$2Lrc9b && _r613_t2.left === 'noAdjTerminalY')
                    r613_noAdjTerminalY = _r613_t2.right;
                _r613_t5 = _r613_t5 + 1;
            }
            var r613_y = r1_fallback(r613_y, _r613_t1[0]);
            var r613_tight = r1_fallback(r613_tight, _r613_t1[1]);
            var r613_sw = r1_fallback(r613_sw, _r613_t1[2]);
            var r613_swItalicAdj = r1_fallback(r613_swItalicAdj, _r613_t1[3]);
            var r613_noAdjTerminalY = r1_fallback(r613_noAdjTerminalY, _r613_t1[4]);
            return r1_Interpolator(r273_hookEndBlender, {
                'y': r613_y,
                'tight': r613_tight,
                'sw': r613_sw,
                'swItalicAdj': r613_swItalicAdj,
                'noAdjTerminalY': r613_noAdjTerminalY
            });
        };
        r273_xn$ExportCapture$2Lrc4b(function () {
            var _r619_t0, _r619_t1;
            return { 'Ungizmo': r273_Ungizmo };
        });
        var r273_Ungizmo = function () {
            var _r620_t0, _r620_t1;
            return function () {
                var _r622_t1;
                var _r622_t0 = this;
                var r622_currentGlyph = _r622_t0;
                r622_currentGlyph.include(_r622_t0.gizmo.inverse());
                return void 0;
            };
        };
        r273_xn$ExportCapture$2Lrc4b(function () {
            var _r625_t0, _r625_t1;
            return { 'Regizmo': r273_Regizmo };
        });
        var r273_Regizmo = function () {
            var _r626_t0, _r626_t1;
            return function () {
                var _r628_t1;
                var _r628_t0 = this;
                var r628_currentGlyph = _r628_t0;
                r628_currentGlyph.include(_r628_t0.gizmo);
                return void 0;
            };
        };
        r273_xn$ExportCapture$2Lrc4b(function () {
            var _r631_t0, _r631_t1;
            return { 'FlipAround': r273_FlipAround };
        });
        var r273_FlipAround = function (r632_x, r632_y, r632_sx, r632_sy) {
            var _r632_t0, _r632_t1;
            return function () {
                var _r634_t1;
                var _r634_t0 = this;
                var r634_currentGlyph = _r634_t0;
                r634_currentGlyph.include(r273_Ungizmo());
                r634_currentGlyph.include(r273_Translate(-r632_x, -r632_y));
                r634_currentGlyph.include(r273_Scale(r1_fallback(r632_sx, -1), r1_fallback(r632_sy, r632_sx, -1)));
                r634_currentGlyph.include(r273_Translate(r632_x, r632_y));
                r634_currentGlyph.include(r273_Regizmo());
                return void 0;
            };
        };
        r273_xn$ExportCapture$2Lrc4b(function () {
            var _r641_t0, _r641_t1;
            return { 'ScaleAround': r273_ScaleAround };
        });
        var r273_ScaleAround = r273_FlipAround;
        r273_xn$ExportCapture$2Lrc4b(function () {
            var _r643_t0, _r643_t1;
            return { 'Realign': r273_Realign };
        });
        var r273_Realign = function (r644_x, r644_y, r644_sx, r644_sy) {
            var _r644_t0, _r644_t1;
            return r273_ApparentTranslate(r644_sx - r644_x, r644_sy - r644_y);
        };
        r273_xn$ExportCapture$2Lrc4b(function () {
            var _r646_t0, _r646_t1;
            return { 'ForceUpright': r273_ForceUpright };
        });
        var r273_ForceUpright = function () {
            var _r647_t0, _r647_t1;
            return function () {
                var _r649_t1;
                var _r649_t0 = this;
                var r649_currentGlyph = _r649_t0;
                _r649_t0.gizmo = r1_Transform.Id();
                return void 0;
            };
        };
        r273_xn$ExportCapture$2Lrc4b(function () {
            var _r651_t0, _r651_t1;
            return { 'NameUni': r273_NameUni };
        });
        var r273_NameUni = function (r652_unicode) {
            var _r652_t0, _r652_t1;
            var r652_hex = r652_unicode.toString(16).toUpperCase();
            while (r652_hex.length < 4)
                r652_hex = '0' + r652_hex;
            return 'uni' + r652_hex;
        };
        r273_xn$ExportCapture$2Lrc4b(function () {
            var _r654_t0, _r654_t1;
            return { 'PointingTo': r273_PointingTo };
        });
        var r273_PointingTo = function (r655_x1, r655_y1, r655_x2, r655_y2, r655_G) {
            var _r655_t0, _r655_t1;
            return function () {
                var _r657_t1;
                var _r657_t0 = this;
                var r657_currentGlyph = _r657_t0;
                var r657_giz = _r657_t0.gizmo;
                var r657_g = r273_xn$createAndSaveGlyphImpl$2Lrc3c(null, null, function () {
                    var _r660_t3;
                    var _r660_t2 = this;
                    var r660_currentGlyph = _r660_t2;
                    _r660_t2.gizmo = r1_Transform.Id();
                    var _r660_t0 = r1_Transform.Id().apply({
                        'x': r655_x1,
                        'y': r655_y1
                    });
                    var r660_xo = _r660_t0.x;
                    var r660_yo = _r660_t0.y;
                    var _r660_t1 = r1_Transform.Id().apply({
                        'x': r655_x2,
                        'y': r655_y2
                    });
                    var r660_xt = _r660_t1.x;
                    var r660_yt = _r660_t1.y;
                    var r660_mag = Math.hypot(r660_yo - r660_yt, r660_xo - r660_xt);
                    r660_currentGlyph.include(r655_G(r660_mag));
                    r660_currentGlyph.include(r273_Rotate(Math.atan2(r660_yo - r660_yt, r660_xo - r660_xt)));
                    r660_currentGlyph.include(r273_Translate(r660_xt, r660_yt));
                    r660_currentGlyph.include(r657_giz);
                    return void 0;
                });
                r657_currentGlyph.include(r657_g);
                return void 0;
            };
        };
        r273_xn$ExportCapture$2Lrc4b(function () {
            var _r667_t0, _r667_t1;
            return { 'WithTransform': r273_WithTransform };
        });
        var r273_WithTransform = function (r668_tfm, r668_gr) {
            var _r668_t0, _r668_t1;
            return r273_xn$createAndSaveGlyphImpl$2Lrc3c(null, null, function () {
                var _r671_t1;
                var _r671_t0 = this;
                var r671_currentGlyph = _r671_t0;
                r671_currentGlyph.include(r668_gr, true, true);
                r671_currentGlyph.include(r668_tfm);
                return void 0;
            });
        };
        r273_xn$ExportCapture$2Lrc4b(function () {
            var _r675_t0, _r675_t1;
            return { 'clear-anchors': r273_xn$clearanchors$1aao };
        });
        var r273_xn$clearanchors$1aao = function () {
            var _r676_t0, _r676_t1;
            return function () {
                var _r678_t1;
                var _r678_t0 = this;
                var r678_currentGlyph = _r678_t0;
                r678_currentGlyph.markAnchors = {};
                r678_currentGlyph.markBnchors = {};
                return void 0;
            };
        };
        r273_xn$ExportCapture$2Lrc4b(function () {
            var _r680_t0, _r680_t1;
            return { 'AsRadical': r273_AsRadical };
        });
        var r273_AsRadical = function (r681_gr) {
            var _r681_t0, _r681_t1;
            return function () {
                var _r683_t1;
                var _r683_t0 = this;
                var r683_currentGlyph = _r683_t0;
                r1_Radical.set(r683_currentGlyph);
                r683_currentGlyph.include(r681_gr, true, true);
                return void 0;
            };
        };
        r273_xn$ExportCapture$2Lrc4b(function () {
            var _r686_t0, _r686_t1;
            return { 'ExtLineCenter': r273_ExtLineCenter };
        });
        var r273_ExtLineCenter = function (r687_k, r687_sw, r687_x1, r687_y1, r687_x2, r687_y2) {
            var _r687_t0, _r687_t1;
            return r273_dispiro(r273_widths.center(r687_sw), r273_corner(r1_mix(r687_x1, r687_x2, -r687_k), r1_mix(r687_y1, r687_y2, -r687_k)), r273_corner(r1_mix(r687_x1, r687_x2, 1 + r687_k), r1_mix(r687_y1, r687_y2, 1 + r687_k)));
        };
        r273_xn$ExportCapture$2Lrc4b(function () {
            var _r689_t0, _r689_t1;
            return { 'ExtLineLhs': r273_ExtLineLhs };
        });
        var r273_ExtLineLhs = function (r690_k, r690_sw, r690_x1, r690_y1, r690_x2, r690_y2) {
            var _r690_t0, _r690_t1;
            return r273_dispiro(r273_widths.lhs(r690_sw), r273_corner(r1_mix(r690_x1, r690_x2, -r690_k), r1_mix(r690_y1, r690_y2, -r690_k)), r273_corner(r1_mix(r690_x1, r690_x2, 1 + r690_k), r1_mix(r690_y1, r690_y2, 1 + r690_k)));
        };
        r273_xn$ExportCapture$2Lrc4b(function () {
            var _r692_t0, _r692_t1;
            return { 'ExtLineRhs': r273_ExtLineRhs };
        });
        var r273_ExtLineRhs = function (r693_k, r693_sw, r693_x1, r693_y1, r693_x2, r693_y2) {
            var _r693_t0, _r693_t1;
            return r273_dispiro(r273_widths.rhs(r693_sw), r273_corner(r1_mix(r693_x1, r693_x2, -r693_k), r1_mix(r693_y1, r693_y2, -r693_k)), r273_corner(r1_mix(r693_x1, r693_x2, 1 + r693_k), r1_mix(r693_y1, r693_y2, 1 + r693_k)));
        };
        r273_xn$ExportCapture$2Lrc4b(function () {
            var _r695_t0, _r695_t1;
            return { 'DotVariants': r273_DotVariants };
        });
        var r273_DotVariants = {
            'round': [
                r273_DotAt,
                1,
                r273_O
            ],
            'square': [
                r273_SquareAt,
                r273_DesignParameters.squareDotScalar,
                0
            ]
        };
        r273_xn$ExportCapture$2Lrc4b(function () {
            var _r697_t0, _r697_t1;
            return { 'WithDotVariants': r273_WithDotVariants };
        });
        return r273_WithDotVariants = function (r698_name, r698_unicode, r698_F) {
            var r698_suffix, r698_DrawAt, r698_kDotRadius, r698_overshoot, _r698_t2, _r698_t3, _r698_t4, _r698_t5, _r698_tag6;
            var _r698_t0 = Object.entries(r273_DotVariants)[Symbol.iterator]();
            var _r698_t1 = void 0;
            while (!(_r698_t1 = _r698_t0.next()).done) {
                _r698_t2 = _r698_t1.value;
                r698_suffix = _r698_t2[0];
                r698_DrawAt = _r698_t2[1][0];
                r698_kDotRadius = _r698_t2[1][1];
                r698_overshoot = _r698_t2[1][2];
                _r698_t2[1];
                (function () {
                    return r273_xn$createAndSaveGlyphImpl$2Lrc3c('' + r698_name + '.' + r698_suffix, null, r698_F(r698_DrawAt, r698_kDotRadius, r698_overshoot));
                }());
            }
            return r273_xn$selectvariant$7Hrq(r698_name, r698_unicode, new r273_xn$NamedParameterPair$2Lrc9b('follow', 'punctuationDot'));
        };
    });
    return void 0;
});
