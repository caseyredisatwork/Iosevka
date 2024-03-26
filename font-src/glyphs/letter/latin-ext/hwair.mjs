'use strict';
import * as _s0_t0 from '../../../support/utils.mjs';
import * as _s0_t1 from '../../../support/gr.mjs';
var _s0_t2;
export {
    _s0_t2 as apply
};
var r1_apply, _r1_t0, _r1_t1, _r1_t3, _r1_t4, _r1_t5, _r1_t6, _r1_t7, _r1_t10;
var _r1_t2 = function _r1_t10(r277_t) {
    var r277_n, r277_i, r277_a, _r277_t3, _r277_t4, _r277_t5, _r277_t6, _r277_t7, _r277_t8, _r277_t9, _r277_t10, _r277_t11, _r277_t12, _r277_t13, _r277_t14, _r277_t15, _r277_t16, _r277_t17, _r277_t18, _r277_t19, _r277_t20, _r277_t21, _r277_t22, _r277_t23, _r277_t24, _r277_t25, _r277_t26;
    var _r277_t0 = function () {
        _r277_t7 = function (_r277_t8) {
            _r277_t0 = function () {
                throw 'Iteration Stopped';
            };
            return {
                'done': true,
                'value': _r277_t8
            };
        };
        _r277_t9 = r277_t instanceof Array;
        if (_r277_t9) {
            _r277_t10 = r277_n = r277_t.length;
            _r277_t11 = r277_i = 0;
            _r277_t12 = function (_r277_t14) {
                return _r277_t7(_r277_t14);
            };
            _r277_t13 = function (_r277_t15) {
                _r277_t16 = r277_i < r277_n;
                if (_r277_t16) {
                    _r277_t0 = function (_r277_t17) {
                        return _r277_t13(r277_i = r277_i + 1);
                    };
                    return {
                        'value': [
                            r277_i,
                            r277_t[r277_i]
                        ],
                        'done': false
                    };
                } else
                    return _r277_t12(_r277_t15);
            };
            return _r277_t13();
        } else {
            _r277_t18 = r277_a = Object.keys(r277_t);
            _r277_t19 = r277_n = r277_a.length;
            _r277_t20 = r277_i = 0;
            _r277_t21 = function (_r277_t23) {
                return _r277_t7(_r277_t23);
            };
            _r277_t22 = function (_r277_t24) {
                _r277_t25 = r277_i < r277_n;
                if (_r277_t25) {
                    _r277_t0 = function (_r277_t26) {
                        return _r277_t22(r277_i = r277_i + 1);
                    };
                    return {
                        'value': [
                            r277_a[r277_i],
                            r277_t[r277_a[r277_i]]
                        ],
                        'done': false
                    };
                } else
                    return _r277_t21(_r277_t24);
            };
            return _r277_t22();
        }
    };
    var _r277_t1 = function (x) {
        try {
            return _r277_t0(x);
        } catch (ex) {
            return _r277_t2(ex);
        }
    };
    var _r277_t2 = function (e) {
        throw e;
    };
    if (this instanceof _r1_t10)
        _r277_t3 = this;
    else {
        _r277_t4 = function () {
            void 0;
        };
        _r277_t4.prototype = _r1_t10.prototype;
        _r277_t3 = new _r277_t4();
    }
    _r277_t3[Symbol.iterator] = function () {
        return _r277_t3;
    };
    _r277_t3.next = _r277_t1;
    _r277_t3.throw = function (x) {
        return _r277_t2(x);
    };
    return _r277_t3;
};
var _r1_t8 = _s0_t0;
var r1_mix = _r1_t8.mix;
var r1_linreg = _r1_t8.linreg;
var r1_clamp = _r1_t8.clamp;
var r1_fallback = _r1_t8.fallback;
var _r1_t9 = _s0_t1;
var r1_Dotless = _r1_t9.Dotless;
var r1_CvDecompose = _r1_t9.CvDecompose;
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
    r270_xn$Capture_Ext$2Lrc2b['$defineGlyphBlockImpl$'](r270_xn$Capture_Ext$2Lrc2b, 'Letter-Latin-Hwair', function (r271_xn$Capture$2Lrc8, r271_xn$ExportCapture$2Lrc4b) {
        var r271_suffix, r271_serifLT, r271_serifLB, r271_serifRT, _r271_t10, _r271_t11, _r271_t12, _r271_t13, _r271_tag14;
        var _r271_t0 = r271_xn$Capture$2Lrc8;
        var r271_xn$createAndSaveGlyphImpl$2Lrc3c = _r271_t0['$createAndSaveGlyphImpl$'];
        var r271_xn$NamedParameterPair$2Lrc9b = _r271_t0['$NamedParameterPair$'];
        var r271_xn$assignUnicodeImpl$2Lrc8b = _r271_t0['$assignUnicodeImpl$'];
        var r271_xn$execState$2Lrc0b = _r271_t0['$execState$'];
        var r271_para = _r271_t0.para;
        var r271_tagged = _r271_t0.tagged;
        var r271_DivFrame = _r271_t0.DivFrame;
        var _r271_t1 = r271_xn$Capture$2Lrc8.Metrics;
        var r271_XH = _r271_t1.XH;
        var r271_Ascender = _r271_t1.Ascender;
        var r271_HVContrast = _r271_t1.HVContrast;
        var r271_Upward = _r271_t1.Upward;
        var r271_Downward = _r271_t1.Downward;
        var r271_Rightward = _r271_t1.Rightward;
        var r271_O = _r271_t1.O;
        var r271_Jut = _r271_t1.Jut;
        var r271_SmallArchDepthA = _r271_t1.SmallArchDepthA;
        var r271_SmallArchDepthB = _r271_t1.SmallArchDepthB;
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
        var r271_VBar = _r271_t4.VBar;
        var _r271_t5 = r271_xn$Capture$2Lrc8['Common-Derivatives'].resolve();
        var r271_xn$selectvariant$7Hrq = _r271_t5['select-variant'];
        var _r271_t6 = r271_xn$Capture$2Lrc8['Letter-Shared-Shapes'].resolve();
        var r271_nShoulderKnots = _r271_t6.nShoulderKnots;
        var _r271_t7 = r271_xn$Capture$2Lrc8['Letter-Shared-Shapes'].resolve();
        var r271_SerifFrame = _r271_t7.SerifFrame;
        var r271_Variants = {
            'straightSerifless': [
                false,
                false,
                false
            ],
            'straightTopLeftSerifed': [
                true,
                false,
                false
            ],
            'straightSerifed': [
                true,
                true,
                true
            ]
        };
        var _r271_t8 = _r1_t2(r271_Variants)[Symbol.iterator]();
        var _r271_t9 = void 0;
        while (!(_r271_t9 = _r271_t8.next()).done) {
            _r271_t10 = _r271_t9.value;
            r271_suffix = _r271_t10[0];
            r271_serifLT = _r271_t10[1][0];
            r271_serifLB = _r271_t10[1][1];
            r271_serifRT = _r271_t10[1][2];
            _r271_t10[1];
            (function () {
                return r271_xn$createAndSaveGlyphImpl$2Lrc3c('hwair.' + r271_suffix, null, function () {
                    var _r283_t1, _r283_t2, _r283_tag3;
                    var _r283_t0 = this;
                    var r283_currentGlyph = _r283_t0;
                    var r283_df = r271_DivFrame(r271_para.diversityM, 3);
                    r283_currentGlyph.setWidth(r283_df.width);
                    r283_currentGlyph.include(r283_df.markSet.b());
                    r283_currentGlyph.include(r271_VBar.l(r283_df.leftSB, 0, r271_Ascender, r283_df.mvs));
                    r283_currentGlyph.include(r271_dispiro(r271_nShoulderKnots(r283_df.leftSB + r283_df.mvs * r271_HVContrast, r283_df.middle + r283_df.mvs * 0.5 * r271_HVContrast, r283_df.mvs * 0.4, void 0, r271_XH * 0.51, r271_SmallArchDepthA * 0.6 * r283_df.div, r271_SmallArchDepthB * 0.6 * r283_df.div, r283_df.mvs), r271_flat(r283_df.middle + r283_df.mvs * 0.5 * r271_HVContrast, r271_XH * 0.5, r271_heading(r271_Downward)), r271_curl(r283_df.middle + r283_df.mvs * 0.5 * r271_HVContrast, r271_SmallArchDepthB * 0.6 * r283_df.div), r271_arcvh(), r271_g4(r1_mix(r283_df.middle - r283_df.mvs * 0.5 * r271_HVContrast, r283_df.rightSB, 0.5), r271_O, r271_widths.heading(r283_df.mvs, 0, r271_Rightward)), r271_archv(), r271_flat(r283_df.rightSB, r271_SmallArchDepthA * 0.6 * r283_df.div), r271_curl(r283_df.rightSB, r271_XH, r271_heading(r271_Upward))));
                    (function () {
                        var r289_sf1 = r271_SerifFrame.fromDf(r283_df, r271_Ascender, 0);
                        var r289_sf2 = r271_SerifFrame.fromDf(r283_df, r271_XH, 0).slice(1, 2);
                        var r289_jut = r271_Jut * 0.75;
                        if (r271_serifLT)
                            r283_currentGlyph.include(r271_tagged('serifLT', r289_sf1.lt.outer));
                        if (r271_serifLB)
                            r283_currentGlyph.include(r271_tagged('serifLB', r289_sf1.lb.full));
                        return r271_serifRT ? r283_currentGlyph.include(r271_tagged('serifRT', r289_sf2.rt.full)) : void 0;
                    }());
                    return void 0;
                });
            }());
        }
        return r271_xn$selectvariant$7Hrq('hwair', 405, new r271_xn$NamedParameterPair$2Lrc9b('follow', 'heng'));
    });
    return void 0;
});
