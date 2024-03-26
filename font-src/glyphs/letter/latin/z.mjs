'use strict';
import * as _s0_t0 from '../../../support/utils.mjs';
import * as _s0_t1 from '../../../support/gr.mjs';
var _s0_t2;
export {
    _s0_t2 as apply
};
var r1_apply, _r1_t0, _r1_t1, _r1_t3, _r1_t4, _r1_t5, _r1_t6, _r1_t7, _r1_t10;
var _r1_t2 = function _r1_t10(r342_t) {
    var r342_n, r342_i, r342_a, _r342_t3, _r342_t4, _r342_t5, _r342_t6, _r342_t7, _r342_t8, _r342_t9, _r342_t10, _r342_t11, _r342_t12, _r342_t13, _r342_t14, _r342_t15, _r342_t16, _r342_t17, _r342_t18, _r342_t19, _r342_t20, _r342_t21, _r342_t22, _r342_t23, _r342_t24, _r342_t25, _r342_t26;
    var _r342_t0 = function () {
        _r342_t7 = function (_r342_t8) {
            _r342_t0 = function () {
                throw 'Iteration Stopped';
            };
            return {
                'done': true,
                'value': _r342_t8
            };
        };
        _r342_t9 = r342_t instanceof Array;
        if (_r342_t9) {
            _r342_t10 = r342_n = r342_t.length;
            _r342_t11 = r342_i = 0;
            _r342_t12 = function (_r342_t14) {
                return _r342_t7(_r342_t14);
            };
            _r342_t13 = function (_r342_t15) {
                _r342_t16 = r342_i < r342_n;
                if (_r342_t16) {
                    _r342_t0 = function (_r342_t17) {
                        return _r342_t13(r342_i = r342_i + 1);
                    };
                    return {
                        'value': [
                            r342_i,
                            r342_t[r342_i]
                        ],
                        'done': false
                    };
                } else
                    return _r342_t12(_r342_t15);
            };
            return _r342_t13();
        } else {
            _r342_t18 = r342_a = Object.keys(r342_t);
            _r342_t19 = r342_n = r342_a.length;
            _r342_t20 = r342_i = 0;
            _r342_t21 = function (_r342_t23) {
                return _r342_t7(_r342_t23);
            };
            _r342_t22 = function (_r342_t24) {
                _r342_t25 = r342_i < r342_n;
                if (_r342_t25) {
                    _r342_t0 = function (_r342_t26) {
                        return _r342_t22(r342_i = r342_i + 1);
                    };
                    return {
                        'value': [
                            r342_a[r342_i],
                            r342_t[r342_a[r342_i]]
                        ],
                        'done': false
                    };
                } else
                    return _r342_t21(_r342_t24);
            };
            return _r342_t22();
        }
    };
    var _r342_t1 = function (x) {
        try {
            return _r342_t0(x);
        } catch (ex) {
            return _r342_t2(ex);
        }
    };
    var _r342_t2 = function (e) {
        throw e;
    };
    if (this instanceof _r1_t10)
        _r342_t3 = this;
    else {
        _r342_t4 = function () {
            void 0;
        };
        _r342_t4.prototype = _r1_t10.prototype;
        _r342_t3 = new _r342_t4();
    }
    _r342_t3[Symbol.iterator] = function () {
        return _r342_t3;
    };
    _r342_t3.next = _r342_t1;
    _r342_t3.throw = function (x) {
        return _r342_t2(x);
    };
    return _r342_t3;
};
var _r1_t8 = _s0_t0;
var r1_mix = _r1_t8.mix;
var r1_SuffixCfg = _r1_t8.SuffixCfg;
var r1_fallback = _r1_t8.fallback;
var _r1_t9 = _s0_t1;
var r1_CvDecompose = _r1_t9.CvDecompose;
var r1_MathSansSerif = _r1_t9.MathSansSerif;
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
    r270_xn$Capture_Ext$2Lrc2b['$defineGlyphBlockImpl$'](r270_xn$Capture_Ext$2Lrc2b, 'Letter-Latin-Z', function (r271_xn$Capture$2Lrc8, r271_xn$ExportCapture$2Lrc4b) {
        var r271_suffix, r271_capital, r271_small, r271_bsMask, r271_serifs, r271_slash, _r271_t13, _r271_t14, _r271_t15, _r271_t16, _r271_tag17;
        var _r271_t0 = r271_xn$Capture$2Lrc8;
        var r271_xn$createAndSaveGlyphImpl$2Lrc3c = _r271_t0['$createAndSaveGlyphImpl$'];
        var r271_xn$NamedParameterPair$2Lrc9b = _r271_t0['$NamedParameterPair$'];
        var r271_xn$assignUnicodeImpl$2Lrc8b = _r271_t0['$assignUnicodeImpl$'];
        var r271_xn$execState$2Lrc0b = _r271_t0['$execState$'];
        var r271_MarkSet = _r271_t0.MarkSet;
        var r271_tagged = _r271_t0.tagged;
        var _r271_t1 = r271_xn$Capture$2Lrc8.Metrics;
        var r271_Width = _r271_t1.Width;
        var r271_SB = _r271_t1.SB;
        var r271_CAP = _r271_t1.CAP;
        var r271_XH = _r271_t1.XH;
        var r271_Descender = _r271_t1.Descender;
        var r271_HVContrast = _r271_t1.HVContrast;
        var r271_Upward = _r271_t1.Upward;
        var r271_Downward = _r271_t1.Downward;
        var r271_Rightward = _r271_t1.Rightward;
        var r271_Leftward = _r271_t1.Leftward;
        var r271_O = _r271_t1.O;
        var r271_OX = _r271_t1.OX;
        var r271_Hook = _r271_t1.Hook;
        var r271_HookX = _r271_t1.HookX;
        var r271_Stroke = _r271_t1.Stroke;
        var r271_VJut = _r271_t1.VJut;
        var r271_SLAB = _r271_t1.SLAB;
        var r271_HalfStroke = _r271_t1.HalfStroke;
        var r271_RightSB = _r271_t1.RightSB;
        var r271_AdviceStroke = _r271_t1.AdviceStroke;
        var r271_AdviceStroke2 = _r271_t1.AdviceStroke2;
        var _r271_t2 = r271_xn$Capture$2Lrc8.SpiroFns;
        var r271_g4 = _r271_t2.g4;
        var r271_g2 = _r271_t2.g2;
        var r271_corner = _r271_t2.corner;
        var r271_flat = _r271_t2.flat;
        var r271_curl = _r271_t2.curl;
        var r271_end = _r271_t2.end;
        var r271_straight = _r271_t2.straight;
        var r271_widths = _r271_t2.widths;
        var r271_heading = _r271_t2.heading;
        var r271_important = _r271_t2.important;
        var r271_alsoThru = _r271_t2.alsoThru;
        var r271_archv = _r271_t2.archv;
        var r271_arcvh = _r271_t2.arcvh;
        var r271_dispiro = _r271_t2.dispiro;
        var r271_xn$spirooutline$1aao = _r271_t2['spiro-outline'];
        var _r271_t3 = r271_xn$Capture$2Lrc8.BooleFns;
        var r271_union = _r271_t3.union;
        var r271_intersection = _r271_t3.intersection;
        var r271_difference = _r271_t3.difference;
        var _r271_t4 = r271_xn$Capture$2Lrc8.CommonShapes.resolve();
        var r271_xn$noshape$3cah = _r271_t4['no-shape'];
        var r271_Rect = _r271_t4.Rect;
        var r271_VSerif = _r271_t4.VSerif;
        var r271_HBar = _r271_t4.HBar;
        var r271_VBar = _r271_t4.VBar;
        var _r271_t5 = r271_xn$Capture$2Lrc8['Common-Derivatives'].resolve();
        var r271_xn$selectvariant$7Hrq = _r271_t5['select-variant'];
        var r271_xn$referglyph$1aao = _r271_t5['refer-glyph'];
        var r271_alias = _r271_t5.alias;
        var r271_xn$derivecomposites$7Hrq = _r271_t5['derive-composites'];
        var r271_xn$linkreducedvariant$5sIl8 = _r271_t5['link-reduced-variant'];
        var r271_xn$aliasreducedvariant$1aao8 = _r271_t5['alias-reduced-variant'];
        var _r271_t6 = r271_xn$Capture$2Lrc8['Mark-Adjustment'].resolve();
        var r271_ExtendBelowBaseAnchors = _r271_t6.ExtendBelowBaseAnchors;
        var _r271_t7 = r271_xn$Capture$2Lrc8['Letter-Shared'].resolve();
        var r271_CreateAccentedComposition = _r271_t7.CreateAccentedComposition;
        var _r271_t8 = r271_xn$Capture$2Lrc8['Letter-Shared-Shapes'].resolve();
        var r271_HCurlyTail = _r271_t8.HCurlyTail;
        var r271_PalatalHook = _r271_t8.PalatalHook;
        var r271_RetroflexHook = _r271_t8.RetroflexHook;
        var r271_CyrDescender = _r271_t8.CyrDescender;
        var _r271_t9 = r271_xn$Capture$2Lrc8['Letter-Blackboard'].resolve();
        var r271_BBS = _r271_t9.BBS;
        var r271_BBD = _r271_t9.BBD;
        var _r271_t10 = r271_xn$Capture$2Lrc8['Letter-Latin-X'].resolve();
        var r271_XStrand = _r271_t10.XStrand;
        var r271_xn$MODEZ$5sIl = 0;
        var r271_xn$MODERTAIL$5sIl = 1;
        var r271_xn$MODEZDESC$5sIl = 2;
        var r271_xn$MODEZSWASH$5sIl = 3;
        var r271_DisplayBottomStroke = function (r279_mode) {
            var _r279_t0, _r279_t1;
            return !(r279_mode === r271_xn$MODEZDESC$5sIl || r279_mode === r271_xn$MODEZSWASH$5sIl);
        };
        var r271_ZSerifless = function (r280_top) {
            var _r280_t0, _r280_t1;
            return function () {
                var _r282_t1;
                var _r282_t0 = this;
                var r282_currentGlyph = _r282_t0;
                return void 0;
            };
        };
        var r271_ZStdSerifs = function (r283_top) {
            var _r283_t0, _r283_t1;
            return function () {
                var _r285_t1;
                var _r285_t0 = this;
                var r285_currentGlyph = _r285_t0;
                r285_currentGlyph.include(r271_tagged('serifLT', r271_VSerif.dl(r271_SB, r283_top, r271_VJut)));
                r285_currentGlyph.include(r271_tagged('serifRB', r271_VSerif.ur(r271_RightSB, 0, r271_VJut)));
                return void 0;
            };
        };
        var r271_ZMotionSerifsB = function (r288_top) {
            var _r288_t0, _r288_t1;
            return function () {
                var _r290_t1;
                var _r290_t0 = this;
                var r290_currentGlyph = _r290_t0;
                r290_currentGlyph.include(r271_tagged('serifRB', r271_VSerif.ur(r271_RightSB, 0, r271_VJut)));
                return void 0;
            };
        };
        var r271_ZMotionSerifsT = function (r292_top) {
            var _r292_t0, _r292_t1;
            return function () {
                var _r294_t1;
                var _r294_t0 = this;
                var r294_currentGlyph = _r294_t0;
                r294_currentGlyph.include(r271_tagged('serifLT', r271_VSerif.dl(r271_SB, r292_top, r271_VJut)));
                return void 0;
            };
        };
        var r271_ZBaseShape = function (r296_mode) {
            var _r296_t0, _r296_t1;
            return function () {
                var _r298_t1;
                var _r298_t0 = this;
                var r298_currentGlyph = _r298_t0;
                var r298_cor = 1.15 * r271_HVContrast;
                r298_currentGlyph.include(r271_tagged('strokeTop', r271_HBar.t(r271_SB, r271_RightSB, r271_CAP)));
                r298_currentGlyph.include(r271_xn$spirooutline$1aao(r271_corner(r271_SB, r296_mode === r271_xn$MODEZSWASH$5sIl ? 0 : r271_Stroke), r271_corner(r271_RightSB - r271_Stroke * r298_cor, r271_CAP - r271_Stroke), r271_corner(r271_RightSB, r271_CAP - r271_Stroke), r271_corner(r271_SB + r271_Stroke * r298_cor, r296_mode === r271_xn$MODEZSWASH$5sIl ? 0 : r271_Stroke)));
                if (r271_DisplayBottomStroke(r296_mode))
                    r298_currentGlyph.include(r271_tagged('strokeBottom', r271_HBar.b(r271_SB, r271_RightSB, 0)));
                return void 0;
            };
        };
        var r271_ZCurlyShape = function (r302_mode) {
            var _r302_t0, _r302_t1;
            return function () {
                var _r304_t1;
                var _r304_t0 = this;
                var r304_currentGlyph = _r304_t0;
                r304_currentGlyph.include(r271_tagged('strokeTop', r271_HBar.t(r271_SB, r271_RightSB - r271_Stroke * r271_HVContrast, r271_CAP)));
                r304_currentGlyph.include(r271_XStrand(false, r271_SLAB, r271_SB, 0, r271_RightSB, r271_CAP, 0.125, 0.4, 0.32));
                if (r271_DisplayBottomStroke(r302_mode))
                    r304_currentGlyph.include(r271_tagged('strokeBottom', r271_HBar.b(r271_SB + r271_Stroke * r271_HVContrast, r271_RightSB, 0)));
                return void 0;
            };
        };
        r271_HBar.mOver = function () {
            var _r308_t0, _r308_t1;
            return r271_xn$referglyph$1aao('barOver');
        };
        var r271_DBarOver = function () {
            var _r309_t0, _r309_t1;
            return r271_xn$referglyph$1aao('antiSlashOver');
        };
        var r271_SmallZBaseShape = function (r310_mode) {
            var _r310_t0, _r310_t1;
            return function () {
                var _r312_t1;
                var _r312_t0 = this;
                var r312_currentGlyph = _r312_t0;
                var r312_cor = 1.2 * r271_HVContrast;
                r312_currentGlyph.include(r271_tagged('strokeTop', r271_HBar.t(r271_SB, r271_RightSB, r271_XH)));
                r312_currentGlyph.include(r271_xn$spirooutline$1aao(r271_corner(r271_SB, r310_mode === r271_xn$MODEZSWASH$5sIl ? 0 : r271_Stroke), r271_corner(r271_RightSB - r271_Stroke * r312_cor, r271_XH - r271_Stroke), r271_corner(r271_RightSB, r271_XH - r271_Stroke), r271_corner(r271_SB + r271_Stroke * r312_cor, r310_mode === r271_xn$MODEZSWASH$5sIl ? 0 : r271_Stroke)));
                if (r271_DisplayBottomStroke(r310_mode))
                    r312_currentGlyph.include(r271_tagged('strokeBottom', r271_HBar.b(r271_SB, r271_RightSB, 0)));
                r312_currentGlyph.setBaseAnchor('trailing', r271_RightSB, 0);
                return void 0;
            };
        };
        var r271_SmallZCurlyShape = function (r317_mode) {
            var _r317_t0, _r317_t1;
            return function () {
                var _r319_t1;
                var _r319_t0 = this;
                var r319_currentGlyph = _r319_t0;
                r319_currentGlyph.include(r271_tagged('strokeTop', r271_HBar.t(r271_SB, r271_RightSB - r271_Stroke * r271_HVContrast, r271_XH)));
                r319_currentGlyph.include(r271_XStrand(false, r271_SLAB, r271_SB, 0, r271_RightSB, r271_XH, 0.125, 0.4, 0.36));
                if (r271_DisplayBottomStroke(r317_mode))
                    r319_currentGlyph.include(r271_tagged('strokeBottom', r271_HBar.b(r271_SB + r271_Stroke * r271_HVContrast, r271_RightSB, 0)));
                r319_currentGlyph.setBaseAnchor('trailing', r271_RightSB, 0);
                return void 0;
            };
        };
        var r271_ZCursiveShapeImpl = function (r324_top, r324_mode) {
            var _r324_t0, _r324_t1;
            return function () {
                var r326___, _r326_t0, _r326_t1, _r326_t3;
                var _r326_t2 = this;
                var r326_currentGlyph = _r326_t2;
                var r326_hookTerminalWidth = r271_AdviceStroke(3.5);
                var r326_xDiagWidth = 1 * r271_Stroke;
                var r326_yFootHeight = Math.max(0.15 * r324_top, r271_Stroke * 0.625);
                var r326_kFoot = 1 + 0.5 * r271_Stroke / r326_yFootHeight;
                var r326_yHookDepth = r271_Hook + r271_Stroke * 0.25;
                var r326_yHookStraightDepth = Math.min(r326_yHookDepth - r271_Stroke * 1.1, r326_yHookDepth / 3 - r271_Stroke / 4);
                var r326_xHookDepth = Math.max(0.25 * (r271_RightSB - r271_SB), r326_hookTerminalWidth * 1.5);
                var r326_xMockTailDepth = Math.max(0.375 * (r271_RightSB - r271_SB), r326_hookTerminalWidth * 1.375);
                var r326_kTop = 0.625;
                var r326_kBot = 0.625;
                var r326_yTailDepth = r271_Hook * 0.5;
                r326_currentGlyph.include(r271_tagged('strokeTop', r271_intersection(r271_xn$spirooutline$1aao(r271_corner(r271_SB, 0), r271_corner(-r271_Width, 0), r271_corner(-r271_Width, 2 * r324_top), r271_corner(r271_RightSB - r326_xDiagWidth, 2 * r324_top), r271_corner(r271_RightSB - r326_xDiagWidth, r324_top - r326_yFootHeight)), r271_dispiro(r271_flat(r271_SB + r271_OX, r324_top - r326_yHookDepth, r271_widths.rhs.heading(r326_hookTerminalWidth, r271_Upward)), r271_curl(r271_SB + r271_OX, r324_top - r326_yHookDepth + r326_yHookStraightDepth, r271_heading(r271_Upward)), r271_arcvh(), r271_g2.right.mid(r271_SB + r326_xHookDepth, r324_top - r271_O, r271_widths.rhs.heading(r271_Stroke, r271_Rightward)), r271_flat(r1_mix(r271_SB + r326_xMockTailDepth, r271_RightSB, r326_kTop), r324_top - r326_kTop * r326_yTailDepth), r271_curl(r271_RightSB, r324_top - r326_yTailDepth)))));
                r326_currentGlyph.include((_r326_t0 = r324_mode, _r326_t0 === r271_xn$MODEZSWASH$5sIl ? r271_xn$spirooutline$1aao(r271_corner(r271_SB, 0), r271_corner(r271_RightSB - r326_xDiagWidth, r324_top - r326_yFootHeight), r271_corner(r271_RightSB - r326_xDiagWidth, r324_top), r271_corner(r271_RightSB, r324_top), r271_corner(r271_RightSB, r324_top - r326_kFoot * r326_yFootHeight), r271_corner(r271_SB + r326_xDiagWidth, 0)) : (r326___ = _r326_t0, r271_xn$spirooutline$1aao(r271_corner(r271_SB, 0), r271_corner(r271_SB, r326_kFoot * r326_yFootHeight), r271_corner(r271_RightSB - r326_xDiagWidth, r324_top - r326_yFootHeight), r271_corner(r271_RightSB - r326_xDiagWidth, r324_top), r271_corner(r271_RightSB, r324_top), r271_corner(r271_RightSB, r324_top - r326_kFoot * r326_yFootHeight), r271_corner(r271_SB + r326_xDiagWidth, r326_yFootHeight), r271_corner(r271_SB + r326_xDiagWidth, 0)))));
                r326_currentGlyph.include(r271_tagged('strokeBottom', (_r326_t1 = r324_mode, _r326_t1 === r271_xn$MODERTAIL$5sIl ? r271_intersection(r271_xn$spirooutline$1aao(r271_corner(r271_SB + r326_xDiagWidth, r326_yFootHeight), r271_corner(r271_SB + r326_xDiagWidth, -r324_top), r271_corner(2 * r271_Width, -r324_top), r271_corner(2 * r271_Width, r324_top), r271_corner(r271_RightSB, r324_top)), r271_union(r271_VBar.r(r271_RightSB, 0, r326_yHookDepth, r326_hookTerminalWidth), r271_dispiro(r271_flat(r271_RightSB, r271_O, r271_widths.rhs.heading(r271_Stroke, r271_Leftward)), r271_g2(r271_RightSB - r326_xHookDepth, r271_O, r271_widths.rhs.heading(r271_Stroke, r271_Leftward)), r271_flat(r1_mix(r271_RightSB - r326_xHookDepth, r271_SB, r326_kBot), r326_kBot * r326_yTailDepth), r271_curl(r271_SB, r326_yTailDepth)))) : _r326_t1 === r271_xn$MODEZDESC$5sIl || _r326_t1 === r271_xn$MODEZSWASH$5sIl ? r271_xn$noshape$3cah() : (r326___ = _r326_t1, r271_intersection(r271_xn$spirooutline$1aao(r271_corner(r271_SB + r326_xDiagWidth, r326_yFootHeight), r271_corner(r271_SB + r326_xDiagWidth, -r324_top), r271_corner(2 * r271_Width, -r324_top), r271_corner(2 * r271_Width, r324_top), r271_corner(r271_RightSB, r324_top)), r271_dispiro(r271_flat(r271_RightSB - r271_OX, r326_yHookDepth, r271_widths.rhs.heading(r326_hookTerminalWidth, r271_Downward)), r271_curl(r271_RightSB - r271_OX, r326_yHookDepth - r326_yHookStraightDepth, r271_heading(r271_Downward)), r271_arcvh(), r271_g2.left.mid(r271_RightSB - r326_xHookDepth, r271_O, r271_widths.rhs.heading(r271_Stroke, r271_Leftward)), r271_flat(r1_mix(r271_RightSB - r326_xHookDepth, r271_SB, r326_kBot), r326_kBot * r326_yTailDepth), r271_curl(r271_SB, r326_yTailDepth)))))));
                if (r324_mode !== r271_xn$MODERTAIL$5sIl)
                    r326_currentGlyph.setBaseAnchor('trailing', r271_RightSB - 0.55 * r326_xHookDepth, 0);
                return void 0;
            };
        };
        var r271_ZCursiveShape = function (r331_mode) {
            var _r331_t0, _r331_t1;
            return r271_ZCursiveShapeImpl(r271_CAP, r331_mode);
        };
        var r271_SmallZCursiveShape = function (r332_mode) {
            var _r332_t0, _r332_t1;
            return r271_ZCursiveShapeImpl(r271_XH, r332_mode);
        };
        var r271_NoBottomStrokeMask = function (r333_top) {
            var _r333_t0, _r333_t1;
            return function () {
                var _r335_t1;
                var _r335_t0 = this;
                var r335_currentGlyph = _r335_t0;
                return void 0;
            };
        };
        var r271_CurlyBottomStrokeMask = function (r336_top) {
            var _r336_t0, _r336_t1;
            return r271_xn$spirooutline$1aao(r271_corner(0, 0), r271_corner(r271_SB, 0), r271_corner(r271_SB + r271_Stroke, r271_Stroke), r271_corner(0, r271_Stroke));
        };
        var r271_DTailBottomStroke = function () {
            var _r337_t0, _r337_t1;
            return r271_dispiro(r271_widths.lhs(), r271_flat(r271_SB, 0, r271_heading(r271_Rightward)), r271_curl(r271_RightSB - r271_HookX, 0), r271_archv(), r271_straight.down.end(r271_RightSB, -r271_Hook, r271_widths.heading(0, r271_Stroke, r271_Downward)));
        };
        var r271_SwashBottomStroke = function () {
            var _r338_t0, _r338_t1;
            return r271_dispiro(r271_widths.lhs(), r271_g4(r271_SB, 0), r271_alsoThru(0.36, 0.6, r271_important), r271_flat(r271_RightSB - 1, r271_Descender), r271_curl(r271_RightSB, r271_Descender));
        };
        var r271_ZemlyaBottomStroke = function () {
            var _r339_t0, _r339_t1;
            var r339_fine = r271_AdviceStroke(4);
            var r339_hx = Math.max(0.5 * r271_HookX, r339_fine * 1.25 * r271_HVContrast) + 0.125 * r271_HVContrast * r339_fine;
            return r271_dispiro(r271_widths.lhs(), r271_flat(r271_SB, 0, r271_heading(r271_Rightward)), r271_curl(r271_RightSB - r339_hx, 0), r271_archv(), r271_g4.down.mid(r271_RightSB - r271_O - r271_HVContrast * r339_fine, r1_mix(r271_Descender + r339_fine, 0, 0.5), r271_widths.lhs.heading(r339_fine, {
                'x': r271_HVContrast,
                'y': -(r339_fine - r271_Stroke) / r339_fine
            })), r271_arcvh(), r271_g2.left.mid(r271_RightSB - r339_hx, r271_Descender + r339_fine + r271_O), r271_alsoThru(0.5, 0.5, r271_widths.center(r339_fine)), r271_g2.left.mid(r271_SB + r339_hx, r1_mix(r271_Descender, 0, 0.75) - r339_fine, r271_widths.rhs(r339_fine)), r271_archv(), r271_g4.down.end(r271_SB + r271_O + r271_HVContrast * r339_fine, r271_Descender, r271_heading(r271_Downward)));
        };
        var r271_ZemlyaBottomStrokeCursive = function () {
            var _r340_t0, _r340_t1;
            var r340_fine = r271_AdviceStroke(4);
            var r340_hx = Math.max(0.5 * r271_HookX, r340_fine * 1.25 * r271_HVContrast) + 0.125 * r271_HVContrast * r340_fine;
            return r271_dispiro(r271_flat(r271_RightSB - r271_HVContrast * r340_fine, r271_HalfStroke, r271_widths.lhs.heading(r340_fine, r271_Downward)), r271_curl(r271_RightSB - r271_HVContrast * r340_fine, r1_mix(r271_Descender + r340_fine, 0, 0.5), r271_widths.lhs.heading(r340_fine, r271_Downward)), r271_arcvh(), r271_g2.left.mid(r271_RightSB - r340_hx, r271_Descender + r340_fine + r271_O), r271_alsoThru(0.5, 0.5, r271_widths.center(r340_fine)), r271_g2.left.mid(r271_SB + r340_hx, r1_mix(r271_Descender, 0, 0.75) - r340_fine, r271_widths.rhs(r340_fine)), r271_archv(), r271_g4.down.end(r271_SB + r271_O + r271_HVContrast * r340_fine, r271_Descender, r271_heading(r271_Downward)));
        };
        var r271_ZConfig = r1_SuffixCfg.weave({
            'straight': [
                r271_ZBaseShape,
                r271_SmallZBaseShape,
                r271_NoBottomStrokeMask
            ],
            'curly': [
                r271_ZCurlyShape,
                r271_SmallZCurlyShape,
                r271_CurlyBottomStrokeMask
            ],
            'cursive': [
                r271_ZCursiveShape,
                r271_SmallZCursiveShape,
                r271_NoBottomStrokeMask
            ]
        }, {
            '': [r271_ZSerifless],
            'serifless': [r271_ZSerifless],
            'serifed': [r271_ZStdSerifs],
            'bottomSerifed': [r271_ZMotionSerifsB],
            'topSerifed': [r271_ZMotionSerifsT]
        }, {
            '': [null],
            'withCrossBar': [r271_DBarOver],
            'withHorizontalCrossBar': [r271_HBar.mOver]
        });
        var _r271_t11 = _r1_t2(r271_ZConfig)[Symbol.iterator]();
        var _r271_t12 = void 0;
        while (!(_r271_t12 = _r271_t11.next()).done) {
            _r271_t13 = _r271_t12.value;
            r271_suffix = _r271_t13[0];
            r271_capital = _r271_t13[1][0][0];
            r271_small = _r271_t13[1][0][1];
            r271_bsMask = _r271_t13[1][0][2];
            _r271_t13[1][0];
            r271_serifs = _r271_t13[1][1][0];
            _r271_t13[1][1];
            r271_slash = _r271_t13[1][2][0];
            _r271_t13[1][2];
            _r271_t13[1];
            (function () {
                r271_xn$createAndSaveGlyphImpl$2Lrc3c('Z.' + r271_suffix, null, function () {
                    var _r348_t1;
                    var _r348_t0 = this;
                    var r348_currentGlyph = _r348_t0;
                    r348_currentGlyph.include(r271_MarkSet.capital());
                    r348_currentGlyph.include(r271_capital(r271_xn$MODEZ$5sIl));
                    if (r271_serifs)
                        r348_currentGlyph.include(r271_serifs(r271_CAP));
                    if (r271_slash)
                        r348_currentGlyph.include(r271_slash(r271_CAP));
                    return void 0;
                });
                r271_xn$createAndSaveGlyphImpl$2Lrc3c('Z/rtailBase.' + r271_suffix, null, function () {
                    var _r355_t1;
                    var _r355_t0 = this;
                    var r355_currentGlyph = _r355_t0;
                    r355_currentGlyph.include(r271_MarkSet.capital());
                    r355_currentGlyph.include(r271_capital(r271_xn$MODERTAIL$5sIl));
                    if (r271_serifs)
                        r355_currentGlyph.include(r271_serifs(r271_CAP));
                    if (r271_slash)
                        r355_currentGlyph.include(r271_slash(r271_CAP));
                    return void 0;
                });
                r271_xn$createAndSaveGlyphImpl$2Lrc3c('ZDTail.' + r271_suffix, null, function () {
                    var _r362_t1;
                    var _r362_t0 = this;
                    var r362_currentGlyph = _r362_t0;
                    r362_currentGlyph.include(r271_MarkSet.capDesc());
                    r362_currentGlyph.include(r271_capital(r271_xn$MODEZDESC$5sIl));
                    if (r271_serifs)
                        r362_currentGlyph.include(r271_serifs(r271_CAP));
                    if (r271_slash)
                        r362_currentGlyph.include(r271_slash(r271_CAP));
                    r362_currentGlyph.ejectTagged('serifRB');
                    r362_currentGlyph.include(r271_difference(r271_DTailBottomStroke(), r271_bsMask(r271_CAP)));
                    return void 0;
                });
                r271_xn$createAndSaveGlyphImpl$2Lrc3c('cyrl/Zemlya.' + r271_suffix, null, function () {
                    var _r371_t1;
                    var _r371_t0 = this;
                    var r371_currentGlyph = _r371_t0;
                    r371_currentGlyph.include(r271_MarkSet.capital());
                    r371_currentGlyph.include(r271_ExtendBelowBaseAnchors(r271_Descender));
                    if (r271_capital === r271_ZCursiveShape) {
                        r371_currentGlyph.include(r271_capital(r271_xn$MODERTAIL$5sIl));
                        if (r271_serifs)
                            r371_currentGlyph.include(r271_serifs(r271_CAP));
                        if (r271_slash)
                            r371_currentGlyph.include(r271_slash(r271_CAP));
                        r371_currentGlyph.include(r271_ZemlyaBottomStrokeCursive());
                    } else {
                        r371_currentGlyph.include(r271_capital(r271_xn$MODEZDESC$5sIl));
                        if (r271_serifs)
                            r371_currentGlyph.include(r271_serifs(r271_CAP));
                        if (r271_slash)
                            r371_currentGlyph.include(r271_slash(r271_CAP));
                        r371_currentGlyph.ejectTagged('serifRB');
                        r371_currentGlyph.include(r271_difference(r271_ZemlyaBottomStroke(), r271_bsMask(r271_CAP)));
                    }
                    return void 0;
                });
                r271_xn$createAndSaveGlyphImpl$2Lrc3c('ZSwash.' + r271_suffix, null, function () {
                    var _r385_t1;
                    var _r385_t0 = this;
                    var r385_currentGlyph = _r385_t0;
                    r385_currentGlyph.include(r271_MarkSet.capDesc());
                    r385_currentGlyph.include(r271_capital(r271_xn$MODEZSWASH$5sIl));
                    if (r271_serifs)
                        r385_currentGlyph.include(r271_serifs(r271_CAP));
                    if (r271_slash)
                        r385_currentGlyph.include(r271_slash(r271_CAP));
                    r385_currentGlyph.ejectTagged('serifRB');
                    r385_currentGlyph.include(r271_difference(r271_SwashBottomStroke(), r271_bsMask(r271_CAP)));
                    return void 0;
                });
                r271_xn$createAndSaveGlyphImpl$2Lrc3c('z.' + r271_suffix, null, function () {
                    var _r394_t1;
                    var _r394_t0 = this;
                    var r394_currentGlyph = _r394_t0;
                    r394_currentGlyph.include(r271_MarkSet.e());
                    r394_currentGlyph.include(r271_small(r271_xn$MODEZ$5sIl));
                    if (r271_serifs)
                        r394_currentGlyph.include(r271_serifs(r271_XH));
                    if (r271_slash)
                        r394_currentGlyph.include(r271_slash(r271_XH));
                    return void 0;
                });
                r271_xn$createAndSaveGlyphImpl$2Lrc3c('z/rtailBase.' + r271_suffix, null, function () {
                    var _r401_t1;
                    var _r401_t0 = this;
                    var r401_currentGlyph = _r401_t0;
                    r401_currentGlyph.include(r271_MarkSet.e());
                    r401_currentGlyph.include(r271_small(r271_xn$MODERTAIL$5sIl));
                    if (r271_serifs)
                        r401_currentGlyph.include(r271_serifs(r271_XH));
                    if (r271_slash)
                        r401_currentGlyph.include(r271_slash(r271_XH));
                    return void 0;
                });
                r271_xn$createAndSaveGlyphImpl$2Lrc3c('zDTail.' + r271_suffix, null, function () {
                    var _r408_t1;
                    var _r408_t0 = this;
                    var r408_currentGlyph = _r408_t0;
                    r408_currentGlyph.include(r271_MarkSet.p());
                    r408_currentGlyph.include(r271_small(r271_xn$MODEZDESC$5sIl));
                    if (r271_serifs)
                        r408_currentGlyph.include(r271_serifs(r271_XH));
                    if (r271_slash)
                        r408_currentGlyph.include(r271_slash(r271_XH));
                    r408_currentGlyph.ejectTagged('serifRB');
                    r408_currentGlyph.include(r271_difference(r271_DTailBottomStroke(), r271_bsMask(r271_XH)));
                    return void 0;
                });
                r271_xn$createAndSaveGlyphImpl$2Lrc3c('cyrl/zemlya.' + r271_suffix, null, function () {
                    var _r417_t1;
                    var _r417_t0 = this;
                    var r417_currentGlyph = _r417_t0;
                    r417_currentGlyph.include(r271_MarkSet.e());
                    r417_currentGlyph.include(r271_ExtendBelowBaseAnchors(r271_Descender));
                    if (r271_small === r271_SmallZCursiveShape) {
                        r417_currentGlyph.include(r271_small(r271_xn$MODERTAIL$5sIl));
                        if (r271_serifs)
                            r417_currentGlyph.include(r271_serifs(r271_XH));
                        if (r271_slash)
                            r417_currentGlyph.include(r271_slash(r271_XH));
                        r417_currentGlyph.include(r271_ZemlyaBottomStrokeCursive());
                    } else {
                        r417_currentGlyph.include(r271_small(r271_xn$MODEZDESC$5sIl));
                        if (r271_serifs)
                            r417_currentGlyph.include(r271_serifs(r271_XH));
                        if (r271_slash)
                            r417_currentGlyph.include(r271_slash(r271_XH));
                        r417_currentGlyph.ejectTagged('serifRB');
                        r417_currentGlyph.include(r271_difference(r271_ZemlyaBottomStroke(), r271_bsMask(r271_XH)));
                    }
                    return void 0;
                });
                r271_xn$createAndSaveGlyphImpl$2Lrc3c('zSwash.' + r271_suffix, null, function () {
                    var _r431_t1;
                    var _r431_t0 = this;
                    var r431_currentGlyph = _r431_t0;
                    r431_currentGlyph.include(r271_MarkSet.p());
                    r431_currentGlyph.include(r271_small(r271_xn$MODEZSWASH$5sIl));
                    if (r271_serifs)
                        r431_currentGlyph.include(r271_serifs(r271_XH));
                    if (r271_slash)
                        r431_currentGlyph.include(r271_slash(r271_XH));
                    r431_currentGlyph.ejectTagged('serifRB');
                    r431_currentGlyph.include(r271_difference(r271_SwashBottomStroke(), r271_bsMask(r271_XH)));
                    return void 0;
                });
                return r271_xn$createAndSaveGlyphImpl$2Lrc3c('zCurlyTail.' + r271_suffix, null, function () {
                    var _r440_t1;
                    var _r440_t0 = this;
                    var r440_currentGlyph = _r440_t0;
                    r440_currentGlyph.include(r271_MarkSet.e());
                    r440_currentGlyph.include(r271_small(r271_xn$MODEZDESC$5sIl));
                    if (r271_serifs)
                        r440_currentGlyph.include(r271_serifs(r271_XH));
                    if (r271_slash)
                        r440_currentGlyph.include(r271_slash(r271_XH));
                    r440_currentGlyph.ejectTagged('serifRB');
                    var r440_fine = r271_AdviceStroke2(5, 4, r271_XH);
                    var r440_rinner = Math.max(r271_XH * 0.04, r440_fine * 0.1);
                    var r440_x2 = r1_mix(r271_SB + r271_Stroke, r271_RightSB, 0.3);
                    var r440_x1 = r1_mix(r440_x2, r271_RightSB - r440_fine - r440_rinner * 1.5, 0.45);
                    var r440_y2 = -r271_XH * 0.2;
                    var r440_m1 = r271_RightSB - r440_fine / 2 - r440_rinner * 1.5 + r271_O;
                    r440_currentGlyph.include(r271_difference(r271_HCurlyTail(r440_fine, r271_Stroke, r440_rinner, r271_SB, r440_m1, r271_RightSB + r440_fine / 2, r440_x1, r440_x2, r440_y2), r271_bsMask(r271_XH)));
                    return void 0;
                });
            }());
        }
        r271_xn$selectvariant$7Hrq('Z', 'Z');
        r271_xn$linkreducedvariant$5sIl8('Z/sansSerif', 'Z', r1_MathSansSerif);
        r271_xn$linkreducedvariant$5sIl8('Z/reduced', 'Z');
        r271_xn$linkreducedvariant$5sIl8('Z/reduced/sansSerif', 'Z');
        r271_xn$selectvariant$7Hrq('Z/rtailBase', new r271_xn$NamedParameterPair$2Lrc9b('follow', 'Z'));
        r271_xn$selectvariant$7Hrq('smcpZ', 7458, new r271_xn$NamedParameterPair$2Lrc9b('shapeFrom', 'z'), new r271_xn$NamedParameterPair$2Lrc9b('follow', 'Z'));
        r271_xn$selectvariant$7Hrq('z', 'z');
        r271_xn$linkreducedvariant$5sIl8('z/sansSerif', 'z', r1_MathSansSerif);
        r271_xn$linkreducedvariant$5sIl8('z/reduced', 'z');
        r271_xn$selectvariant$7Hrq('z/rtailBase', new r271_xn$NamedParameterPair$2Lrc9b('follow', 'z'));
        r271_xn$selectvariant$7Hrq('ZDTail', 548, new r271_xn$NamedParameterPair$2Lrc9b('follow', 'ZDesc'));
        r271_xn$selectvariant$7Hrq('zDTail', 549, new r271_xn$NamedParameterPair$2Lrc9b('follow', 'zDesc'));
        r271_xn$selectvariant$7Hrq('ZSwash', 11391, new r271_xn$NamedParameterPair$2Lrc9b('follow', 'ZDesc'));
        r271_xn$selectvariant$7Hrq('zSwash', 576, new r271_xn$NamedParameterPair$2Lrc9b('follow', 'zDesc'));
        r271_xn$selectvariant$7Hrq('zCurlyTail', 657, new r271_xn$NamedParameterPair$2Lrc9b('follow', 'zDesc'));
        r271_xn$selectvariant$7Hrq('cyrl/Zemlya', 42560, new r271_xn$NamedParameterPair$2Lrc9b('follow', 'ZDesc'));
        r271_xn$selectvariant$7Hrq('cyrl/zemlya', 42561, new r271_xn$NamedParameterPair$2Lrc9b('follow', 'zDesc'));
        r271_xn$selectvariant$7Hrq('cyrl/Zemlya/reduced', new r271_xn$NamedParameterPair$2Lrc9b('follow', 'ZDesc/reduced'), new r271_xn$NamedParameterPair$2Lrc9b('shapeFrom', 'cyrl/Zemlya'));
        r271_xn$selectvariant$7Hrq('cyrl/zemlya/reduced', new r271_xn$NamedParameterPair$2Lrc9b('follow', 'zDesc/reduced'), new r271_xn$NamedParameterPair$2Lrc9b('shapeFrom', 'cyrl/zemlya'));
        r271_xn$derivecomposites$7Hrq('ZDesc', 11371, 'Z/rtailBase', r271_CyrDescender.r(r271_RightSB, 0));
        r271_xn$derivecomposites$7Hrq('zDesc', 11372, 'z/rtailBase', r271_CyrDescender.r(r271_RightSB, 0));
        r271_xn$derivecomposites$7Hrq('ZPalatalHook', 42950, 'Z/rtailBase', r271_PalatalHook.r(r271_RightSB, 0));
        r271_xn$derivecomposites$7Hrq('zPalatalHook', 7566, 'z/rtailBase', r271_PalatalHook.r(r271_RightSB, 0));
        r271_xn$derivecomposites$7Hrq('zRTailBR', 656, 'z/rtailBase', r271_RetroflexHook.r(r271_RightSB, 0));
        r271_alias('grek/Zeta', 918, 'Z/reduced');
        r271_xn$aliasreducedvariant$1aao8('grek/Zeta/sansSerif', 'grek/Zeta', 'Z/reduced/sansSerif', r1_MathSansSerif);
        var r271_BBZShape = function (r462_top) {
            var _r462_t0, _r462_t1;
            return function () {
                var _r464_t1;
                var _r464_t0 = this;
                var r464_currentGlyph = _r464_t0;
                r464_currentGlyph.include(r271_HBar.t(r271_SB, r271_RightSB, r462_top, r271_BBS));
                r464_currentGlyph.include(r271_HBar.b(r271_SB, r271_RightSB, 0, r271_BBS));
                r464_currentGlyph.include(r271_intersection(r271_Rect(r462_top, 0, r271_SB, r271_RightSB), r271_union(r271_dispiro(r271_widths.center(r271_BBS), r271_corner(r271_SB, r271_BBS / 2), r271_corner(r271_RightSB - r271_BBD, r462_top - r271_BBS / 2)), r271_dispiro(r271_widths.center(r271_BBS), r271_corner(r271_SB + r271_BBD, r271_BBS / 2), r271_corner(r271_RightSB, r462_top - r271_BBS / 2)))));
                r464_currentGlyph.include(r271_intersection(r271_union(r271_VBar.r(r271_RightSB, r462_top - r271_BBS * 2, r462_top, r271_BBS), r271_VBar.l(r271_SB, 0, r271_BBS * 2, r271_BBS)), r271_xn$spirooutline$1aao(r271_corner(r271_SB, r271_BBS / 2), r271_corner(r271_RightSB - r271_BBD, r462_top - r271_BBS / 2), r271_corner(r271_RightSB, r462_top - r271_BBS / 2), r271_corner(r271_SB + r271_BBD, r271_BBS / 2))));
                return void 0;
            };
        };
        r271_xn$createAndSaveGlyphImpl$2Lrc3c('mathbb/Z', 8484, function () {
            var _r471_t1;
            var _r471_t0 = this;
            var r471_currentGlyph = _r471_t0;
            r471_currentGlyph.include(r271_MarkSet.capital(), true, true);
            r471_currentGlyph.include(r271_BBZShape(r271_CAP));
            return void 0;
        });
        r271_xn$createAndSaveGlyphImpl$2Lrc3c('mathbb/z', 120171, function () {
            var _r476_t1;
            var _r476_t0 = this;
            var r476_currentGlyph = _r476_t0;
            r476_currentGlyph.include(r271_MarkSet.e(), true, true);
            r476_currentGlyph.include(r271_BBZShape(r271_XH));
            return void 0;
        });
        r271_CreateAccentedComposition('ZBar', 437, 'Z/reduced', 'barOver');
        r271_CreateAccentedComposition('zBar', 438, 'z/reduced', 'barOver');
        r271_CreateAccentedComposition('ZCaron', 381, 'Z', 'caronAbove', true);
        r271_CreateAccentedComposition('zCaron', 382, 'z', 'caronAbove', true);
        r271_CreateAccentedComposition('cyrl/ZemlyaBar', 42562, 'cyrl/Zemlya/reduced', 'barOver');
        return r271_CreateAccentedComposition('cyrl/zemlyaBar', 42563, 'cyrl/zemlya/reduced', 'barOver');
    });
    return void 0;
});
