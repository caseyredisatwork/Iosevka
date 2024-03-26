'use strict';
import * as _s0_t0 from '../../support/utils.mjs';
import * as _s0_t1 from '../../support/gr.mjs';
var _s0_t2;
export {
    _s0_t2 as apply
};
var r1_apply, _r1_t0, _r1_t1, _r1_t3, _r1_t4, _r1_t5, _r1_t6, _r1_t7, _r1_t10;
var _r1_t2 = function _r1_t10(r325_t) {
    var r325_n, r325_i, r325_a, _r325_t3, _r325_t4, _r325_t5, _r325_t6, _r325_t7, _r325_t8, _r325_t9, _r325_t10, _r325_t11, _r325_t12, _r325_t13, _r325_t14, _r325_t15, _r325_t16, _r325_t17, _r325_t18, _r325_t19, _r325_t20, _r325_t21, _r325_t22, _r325_t23, _r325_t24, _r325_t25, _r325_t26;
    var _r325_t0 = function () {
        _r325_t7 = function (_r325_t8) {
            _r325_t0 = function () {
                throw 'Iteration Stopped';
            };
            return {
                'done': true,
                'value': _r325_t8
            };
        };
        _r325_t9 = r325_t instanceof Array;
        if (_r325_t9) {
            _r325_t10 = r325_n = r325_t.length;
            _r325_t11 = r325_i = 0;
            _r325_t12 = function (_r325_t14) {
                return _r325_t7(_r325_t14);
            };
            _r325_t13 = function (_r325_t15) {
                _r325_t16 = r325_i < r325_n;
                if (_r325_t16) {
                    _r325_t0 = function (_r325_t17) {
                        return _r325_t13(r325_i = r325_i + 1);
                    };
                    return {
                        'value': [
                            r325_i,
                            r325_t[r325_i]
                        ],
                        'done': false
                    };
                } else
                    return _r325_t12(_r325_t15);
            };
            return _r325_t13();
        } else {
            _r325_t18 = r325_a = Object.keys(r325_t);
            _r325_t19 = r325_n = r325_a.length;
            _r325_t20 = r325_i = 0;
            _r325_t21 = function (_r325_t23) {
                return _r325_t7(_r325_t23);
            };
            _r325_t22 = function (_r325_t24) {
                _r325_t25 = r325_i < r325_n;
                if (_r325_t25) {
                    _r325_t0 = function (_r325_t26) {
                        return _r325_t22(r325_i = r325_i + 1);
                    };
                    return {
                        'value': [
                            r325_a[r325_i],
                            r325_t[r325_a[r325_i]]
                        ],
                        'done': false
                    };
                } else
                    return _r325_t21(_r325_t24);
            };
            return _r325_t22();
        }
    };
    var _r325_t1 = function (x) {
        try {
            return _r325_t0(x);
        } catch (ex) {
            return _r325_t2(ex);
        }
    };
    var _r325_t2 = function (e) {
        throw e;
    };
    if (this instanceof _r1_t10)
        _r325_t3 = this;
    else {
        _r325_t4 = function () {
            void 0;
        };
        _r325_t4.prototype = _r1_t10.prototype;
        _r325_t3 = new _r325_t4();
    }
    _r325_t3[Symbol.iterator] = function () {
        return _r325_t3;
    };
    _r325_t3.next = _r325_t1;
    _r325_t3.throw = function (x) {
        return _r325_t2(x);
    };
    return _r325_t3;
};
var _r1_t8 = _s0_t0;
var r1_mix = _r1_t8.mix;
var r1_clamp = _r1_t8.clamp;
var r1_fallback = _r1_t8.fallback;
var r1_SuffixCfg = _r1_t8.SuffixCfg;
var _r1_t9 = _s0_t1;
var r1_AnyCv = _r1_t9.AnyCv;
var r1_getGrMesh = _r1_t9.getGrMesh;
var r1_VS01 = _r1_t9.VS01;
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
    r270_xn$Capture_Ext$2Lrc2b['$defineGlyphBlockImpl$'](r270_xn$Capture_Ext$2Lrc2b, 'Digits-Zero', function (r271_xn$Capture$2Lrc8, r271_xn$ExportCapture$2Lrc4b) {
        var r271_suffix, r271_Outline, r271_Overlay, r271_Postproc, r271_infix, r271_height, r271_Marks, _r271_t9, _r271_t10, _r271_t11, _r271_t12, _r271_t14, _r271_t15;
        var _r271_t0 = r271_xn$Capture$2Lrc8;
        var r271_xn$createAndSaveGlyphImpl$2Lrc3c = _r271_t0['$createAndSaveGlyphImpl$'];
        var r271_xn$NamedParameterPair$2Lrc9b = _r271_t0['$NamedParameterPair$'];
        var r271_xn$assignUnicodeImpl$2Lrc8b = _r271_t0['$assignUnicodeImpl$'];
        var r271_xn$execState$2Lrc0b = _r271_t0['$execState$'];
        var r271_MarkSet = _r271_t0.MarkSet;
        var _r271_t1 = r271_xn$Capture$2Lrc8.Metrics;
        var r271_Width = _r271_t1.Width;
        var r271_SB = _r271_t1.SB;
        var r271_CAP = _r271_t1.CAP;
        var r271_ApparentTranslate = _r271_t1.ApparentTranslate;
        var r271_HVContrast = _r271_t1.HVContrast;
        var r271_O = _r271_t1.O;
        var r271_OX = _r271_t1.OX;
        var r271_Stroke = _r271_t1.Stroke;
        var r271_HalfStroke = _r271_t1.HalfStroke;
        var r271_RightSB = _r271_t1.RightSB;
        var r271_Middle = _r271_t1.Middle;
        var r271_DotRadius = _r271_t1.DotRadius;
        var r271_SmallArchDepthA = _r271_t1.SmallArchDepthA;
        var r271_SmallArchDepthB = _r271_t1.SmallArchDepthB;
        var r271_CorrectionOMidX = _r271_t1.CorrectionOMidX;
        var r271_CorrectionOMidS = _r271_t1.CorrectionOMidS;
        var r271_AdviceStroke = _r271_t1.AdviceStroke;
        var r271_OverlayStroke = _r271_t1.OverlayStroke;
        var r271_ArchDepthAOf = _r271_t1.ArchDepthAOf;
        var r271_ArchDepthBOf = _r271_t1.ArchDepthBOf;
        var r271_YSmoothMidR = _r271_t1.YSmoothMidR;
        var r271_YSmoothMidL = _r271_t1.YSmoothMidL;
        var _r271_t2 = r271_xn$Capture$2Lrc8.SpiroFns;
        var r271_g4 = _r271_t2.g4;
        var r271_g2 = _r271_t2.g2;
        var r271_flat = _r271_t2.flat;
        var r271_curl = _r271_t2.curl;
        var r271_close = _r271_t2.close;
        var r271_widths = _r271_t2.widths;
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
        var r271_Rect = _r271_t4.Rect;
        var r271_OShapeT = _r271_t4.OShapeT;
        var r271_OShape = _r271_t4.OShape;
        var r271_OShapeOutline = _r271_t4.OShapeOutline;
        var r271_VBar = _r271_t4.VBar;
        var r271_WithTransform = _r271_t4.WithTransform;
        var r271_MaskAbove = _r271_t4.MaskAbove;
        var r271_MaskBelow = _r271_t4.MaskBelow;
        var r271_MaskRight = _r271_t4.MaskRight;
        var _r271_t5 = r271_xn$Capture$2Lrc8['Common-Derivatives'].resolve();
        var r271_xn$selectvariant$7Hrq = _r271_t5['select-variant'];
        var r271_xn$queryglyph$1aao = _r271_t5['query-glyph'];
        var _r271_t6 = r271_xn$Capture$2Lrc8['Digits-Shared'].resolve();
        var r271_OnumHeight = _r271_t6.OnumHeight;
        var r271_OnumMarks = _r271_t6.OnumMarks;
        var r271_CodeLnum = _r271_t6.CodeLnum;
        var r271_CodeOnum = _r271_t6.CodeOnum;
        var r271_CircleInnerWidth = r271_RightSB - r271_SB - r271_HVContrast * r271_Stroke * 2;
        var r271_SplitSlashGap = r271_Stroke * r271_HVContrast + r1_clamp(r271_CircleInnerWidth / 5, r271_CircleInnerWidth / 3, r271_AdviceStroke(5) * r271_HVContrast);
        var r271_CutoutVerticalStrokeWidth = Math.max(0.2 * r271_CircleInnerWidth, Math.min(0.4 * r271_CircleInnerWidth, r271_AdviceStroke(3)));
        var r271_CutoutStrokeWidth = function (r275_top) {
            var _r275_t0, _r275_t1;
            return Math.max(0.1 * r275_top, Math.min(0.125 * r275_top, 0.5 * r271_CircleInnerWidth, r271_AdviceStroke(3)));
        };
        var r271_OvalShapeT = function (r276_sink, r276_t, r276_b, r276_l, r276_r, r276_pHAdj) {
            var _r276_leti0, _r276_t1, _r276_t2, _r276_t4, _r276_tag5;
            var _r276_t3 = r1_mix(r276_l, r276_r, 0.5);
            return function (_r276_leti0) {
                var r277_m = _r276_leti0;
                return r276_sink(r271_widths.rhs(), r271_g4(r277_m - r1_fallback(r276_pHAdj, 1) * r271_CorrectionOMidS, r276_t - r271_O), r271_archv(), r271_g4(r276_r, r271_YSmoothMidR(r276_t, r276_b, r271_SmallArchDepthA, r271_SmallArchDepthB)), r271_arcvh(), r271_g4(r277_m + r1_fallback(r276_pHAdj, 1) * r271_CorrectionOMidS, r276_b + r271_O), r271_archv(), r271_g4(r276_l, r271_YSmoothMidL(r276_t, r276_b, r271_SmallArchDepthA, r271_SmallArchDepthB)), r271_arcvh(), r271_close());
            }(_r276_t3);
        };
        var r271_DiamondShapeT = function (r278_sink, r278_t, r278_b, r278_l, r278_r) {
            var _r278_t0, _r278_t1;
            var r278_fine = r271_AdviceStroke(3);
            var r278_body = r271_AdviceStroke(2);
            var r278_sw1 = r278_fine;
            var r278_sw2 = r1_mix(r278_body, r278_fine, 0.375);
            var r278_mxb = r1_mix(r278_l, r278_r, 0.5) + r271_CorrectionOMidX * r278_fine;
            var r278_mxt = r1_mix(r278_l, r278_r, 0.5) - r271_CorrectionOMidX * r278_fine;
            var r278_myl = r271_YSmoothMidL(r278_t, r278_b);
            var r278_myr = r271_YSmoothMidR(r278_t, r278_b);
            var r278_p1 = 0.45 + 0.8 * (r278_fine / (r278_r - r278_l));
            var r278_p2 = 0.15 + 0.5 * (r278_fine / (r278_t - r278_b));
            var r278_p3 = 0.35 + 0.8 * (r278_body / (r278_t - r278_b));
            var r278_p4 = 0.15 + 0 * (r278_body / (r278_r - r278_l));
            var r278_pcx = 0.5;
            var r278_pcy = 0.1;
            return r278_sink(r271_g2.right.mid.r(r278_mxb, r278_b + r271_O, r271_widths.lhs(r278_fine)), r271_alsoThru.g2(r278_pcx, r278_pcy), r271_flat(r1_mix(r278_mxb, r278_r, r278_p1), r1_mix(r278_b, r278_myr, r278_p2), r271_widths.lhs(r278_sw1)), r271_curl(r1_mix(r278_mxb, r278_r, 1 - r278_p4), r1_mix(r278_b, r278_myr, 1 - r278_p3), r271_widths.lhs(r278_sw2)), r271_g2.up.mid(r278_r - r271_O, r278_myr, r271_widths.lhs(r278_body)), r271_flat(r1_mix(r278_r, r278_mxt, r278_p4), r1_mix(r278_myr, r278_t, r278_p3), r271_widths.lhs(r278_sw2)), r271_curl(r1_mix(r278_r, r278_mxt, 1 - r278_p1), r1_mix(r278_myr, r278_t, 1 - r278_p2), r271_widths.lhs(r278_sw1)), r271_alsoThru.g2(1 - r278_pcx, 1 - r278_pcy), r271_g2.left.mid(r278_mxt, r278_t - r271_O, r271_widths.lhs(r278_fine)), r271_alsoThru.g2(r278_pcx, r278_pcy), r271_flat(r1_mix(r278_mxt, r278_l, r278_p1), r1_mix(r278_t, r278_myl, r278_p2), r271_widths.lhs(r278_sw1)), r271_curl(r1_mix(r278_mxt, r278_l, 1 - r278_p4), r1_mix(r278_t, r278_myl, 1 - r278_p3), r271_widths.lhs(r278_sw2)), r271_g2.down.mid(r278_l + r271_O, r278_myl, r271_widths.lhs(r278_body)), r271_flat(r1_mix(r278_l, r278_mxb, r278_p4), r1_mix(r278_myl, r278_b, r278_p3), r271_widths.lhs(r278_sw2)), r271_curl(r1_mix(r278_l, r278_mxb, 1 - r278_p1), r1_mix(r278_myl, r278_b, 1 - r278_p2), r271_widths.lhs(r278_sw1)), r271_alsoThru.g2(1 - r278_pcx, 1 - r278_pcy), r271_g2.right.mid.l(r278_mxb, r278_b + r271_O, r271_widths.lhs(r278_fine)), r271_close());
        };
        var r271_ZeroShapeBase = function (r279_shapeT) {
            var _r279_t0, _r279_t1, _r279_t2, _r279_tag3;
            return function () {
                var r282_Shape, r282_Mask;
                var r282_exports = {};
                var r282_outlineT = function (r289_sink, r289_offsetX, r289_offsetY, r289_top) {
                    var _r289_t0, _r289_t1;
                    return r279_shapeT(r289_sink, r289_top - r289_offsetY, r289_offsetY, r271_SB + r289_offsetX, r271_RightSB - r289_offsetX);
                };
                r282_exports.Shape = r282_Shape = function (r291_top) {
                    var _r291_t0, _r291_t1;
                    return r282_outlineT(r271_dispiro, 0, 0, r291_top);
                };
                r282_exports.Mask = r282_Mask = function (r293_top) {
                    var _r293_t0, _r293_t1;
                    return r282_outlineT(r271_xn$spirooutline$1aao, 1, 1, r293_top);
                };
                return r282_exports;
            }();
        };
        var r271_Capsule = r271_ZeroShapeBase(r271_OShapeT);
        var r271_Oval = r271_ZeroShapeBase(r271_OvalShapeT);
        var r271_Diamond = r271_ZeroShapeBase(r271_DiamondShapeT);
        var r271_InsetShape = function (r294_zero, r294_overlay, r294_fnMask, r294_height) {
            var _r294_t0, _r294_t1;
            return function () {
                var _r296_t1;
                var _r296_t0 = this;
                var r296_currentGlyph = _r296_t0;
                r296_currentGlyph.include(r294_zero);
                if (r294_fnMask)
                    r296_currentGlyph.include(r271_intersection(r294_overlay, r271_WithTransform(r271_ApparentTranslate(-r271_SplitSlashGap, 0), r294_fnMask(r294_height)), r271_WithTransform(r271_ApparentTranslate(r271_SplitSlashGap, 0), r294_fnMask(r294_height))));
                else
                    r296_currentGlyph.include(r294_overlay);
                return void 0;
            };
        };
        var r271_Cutout = function (r300_zero, r300_overlay, r300_fnMask, r300_height) {
            var _r300_t0, _r300_t1;
            return function () {
                var _r302_t1;
                var _r302_t0 = this;
                var r302_currentGlyph = _r302_t0;
                if (r300_overlay)
                    r302_currentGlyph.include(r271_difference(r300_zero, r300_overlay));
                else
                    r302_currentGlyph.include(r300_zero);
                return void 0;
            };
        };
        var r271_ZeroSlash = function (r305_top) {
            var _r305_t0, _r305_t1;
            return r271_dispiro(r271_flat(0, r305_top * (1 - 0.77), r271_widths.center(r271_OverlayStroke)), r271_curl(r271_Width, r305_top * 0.77));
        };
        var r271_ZeroRevSlash = function (r306_top) {
            var _r306_t0, _r306_t1;
            return r271_dispiro(r271_flat(0, r306_top * 0.77, r271_widths.center(r271_OverlayStroke)), r271_curl(r271_Width, r306_top * (1 - 0.77)));
        };
        var r271_ZeroTallSlash = function (r307_top) {
            var _r307_t0, _r307_t1;
            return r271_dispiro(r271_flat(0, 0, r271_widths.center(r271_OverlayStroke)), r271_curl(r271_Width, r307_top));
        };
        var r271_ZeroTallRevSlash = function (r308_top) {
            var _r308_t0, _r308_t1;
            return r271_dispiro(r271_flat(0, r308_top, r271_widths.center(r271_OverlayStroke)), r271_curl(r271_Width, 0));
        };
        var r271_CutoutSlash = function (r309_top) {
            var _r309_t0, _r309_t1;
            return r271_dispiro(r271_flat(0, r309_top * (1 - 0.77), r271_widths.center(r271_CutoutStrokeWidth(r309_top))), r271_curl(r271_Width, r309_top * 0.77));
        };
        var r271_CutoutRevSlash = function (r310_top) {
            var _r310_t0, _r310_t1;
            return r271_dispiro(r271_flat(0, r310_top * 0.77, r271_widths.center(r271_CutoutStrokeWidth(r310_top))), r271_curl(r271_Width, r310_top * (1 - 0.77)));
        };
        var r271_CutoutTallSlash = function (r311_top) {
            var _r311_t0, _r311_t1;
            return r271_dispiro(r271_flat(0, 0, r271_widths.center(r271_CutoutStrokeWidth(r311_top))), r271_curl(r271_Width, r311_top));
        };
        var r271_CutoutTallRevSlash = function (r312_top) {
            var _r312_t0, _r312_t1;
            return r271_dispiro(r271_flat(0, r312_top, r271_widths.center(r271_CutoutStrokeWidth(r312_top))), r271_curl(r271_Width, 0));
        };
        var r271_CutoutVerticalBar = function (r313_top) {
            var _r313_t0, _r313_t1;
            return r271_VBar.m(r271_Middle, 0 + r271_O, r313_top - r271_O, r271_CutoutVerticalStrokeWidth);
        };
        var r271_TopRightCutoutSlash = function (r314_top) {
            var _r314_t0, _r314_t1;
            return r271_intersection(r271_MaskRight(r271_Middle), r271_dispiro(r271_flat(0, r314_top - r271_Width * 0.875, r271_widths.center(r271_CutoutStrokeWidth(r314_top))), r271_curl(r271_Width * 0.875, r314_top)));
        };
        var r271_BrokenTallSlash = function (r315_top) {
            var _r315_t0, _r315_t1;
            return r271_difference(r271_dispiro(r271_widths.center(Math.min(r271_CircleInnerWidth * 0.5, r271_OverlayStroke)), r271_flat(r271_SB + r271_OX + 0.5 * r271_OverlayStroke, r1_mix(r315_top, 0, 1.05)), r271_curl(r271_RightSB - r271_OX - 0.5 * r271_OverlayStroke, r1_mix(0, r315_top, 1.05))), r271_intersection(r271_MaskAbove(r315_top * 0.425), r271_MaskBelow(r315_top * (1 - 0.425))));
        };
        var r271_BrokenTallRevSlash = function (r316_top) {
            var _r316_t0, _r316_t1;
            return r271_difference(r271_dispiro(r271_widths.center(Math.min(r271_CircleInnerWidth * 0.5, r271_OverlayStroke)), r271_flat(r271_SB + r271_OX + 0.5 * r271_OverlayStroke, r1_mix(0, r316_top, 1.05)), r271_curl(r271_RightSB - r271_OX - 0.5 * r271_OverlayStroke, r1_mix(r316_top, 0, 1.05))), r271_intersection(r271_MaskAbove(r316_top * 0.425), r271_MaskBelow(r316_top * (1 - 0.425))));
        };
        var r271_BrokenVerticalBar = function (r317_top) {
            var _r317_t0, _r317_t1;
            return r271_difference(r271_VBar.m(r271_Middle, 0 + r271_O, r317_top - r271_O, Math.min(r271_CircleInnerWidth * 0.375, r271_OverlayStroke)), r271_intersection(r271_MaskAbove(r317_top * (1 / 2 - 1 / 16)), r271_MaskBelow(r317_top * (1 / 2 + 1 / 16))));
        };
        var r271_ZeroDotShape = function (r318_top) {
            var _r318_t0, _r318_t1;
            var r318_halfDotWidth = Math.min(r271_DotRadius, r271_CircleInnerWidth / 4);
            return r271_OShapeOutline.NoOvershoot(r318_top / 2 + r271_DotRadius, r318_top / 2 - r271_DotRadius, r271_Middle + r318_halfDotWidth, r271_Middle - r318_halfDotWidth, r271_Stroke * r318_halfDotWidth * 2 / r271_Width, r271_ArchDepthAOf(r318_halfDotWidth, r318_halfDotWidth * 2), r271_ArchDepthBOf(r318_halfDotWidth, r318_halfDotWidth * 2));
        };
        var r271_ZeroLongDotShape = function (r319_top) {
            var _r319_t0, _r319_t1;
            var r319_halfDotWidth = Math.min(r271_HalfStroke, r271_CircleInnerWidth / 4);
            var r319_halfDotHeight = Math.max(r271_DotRadius, Math.min((r319_top - r271_Stroke * 2) / 4, (r319_top - r271_Stroke * 2 - (r271_CircleInnerWidth - r319_halfDotWidth * 2)) / 2));
            return r271_OShapeOutline.NoOvershoot(r319_top / 2 + r319_halfDotHeight, r319_top / 2 - r319_halfDotHeight, r271_Middle + r319_halfDotWidth, r271_Middle - r319_halfDotWidth, r271_Stroke * r319_halfDotWidth * 2 / r271_Width, r271_ArchDepthAOf(r319_halfDotWidth, r319_halfDotWidth * 2), r271_ArchDepthBOf(r319_halfDotWidth, r319_halfDotWidth * 2));
        };
        var r271_ZeroOvalDotShape = function (r320_top) {
            var _r320_t0, _r320_t1;
            var r320_halfDotWidth = Math.min(r271_DotRadius, r271_CircleInnerWidth / 4);
            return r271_OvalShapeT(r271_xn$spirooutline$1aao, r320_top / 2 + r271_DotRadius - r271_O, r320_top / 2 - r271_DotRadius + r271_O, r271_Middle - r320_halfDotWidth + r271_OX, r271_Middle + r320_halfDotWidth - r271_OX, 0);
        };
        var r271_ZeroOvalLongDotShape = function (r321_top) {
            var _r321_t0, _r321_t1;
            var r321_halfDotWidth = Math.min(r271_HalfStroke, r271_CircleInnerWidth / 4);
            var r321_halfDotHeight = Math.max(r271_DotRadius, Math.min((r321_top - r271_Stroke * 2) / 4, (r321_top - r271_Stroke * 2 - (r271_CircleInnerWidth - r321_halfDotWidth * 2)) / 2));
            return r271_OvalShapeT(r271_xn$spirooutline$1aao, r321_top / 2 + r321_halfDotHeight - r271_O, r321_top / 2 - r321_halfDotHeight + r271_O, r271_Middle - r321_halfDotWidth + r271_OX, r271_Middle + r321_halfDotWidth - r271_OX, 0);
        };
        var r271_ZeroConfig = r1_SuffixCfg.weave({
            '': r271_Capsule,
            'oval': r271_Oval,
            'diamond': r271_Diamond
        }, {
            'unslashed': [
                null,
                null
            ],
            'slashed': [
                r271_ZeroSlash,
                null
            ],
            'reverseSlashed': [
                r271_ZeroRevSlash,
                null
            ],
            'tallSlashed': [
                r271_ZeroTallSlash,
                null
            ],
            'tallReverseSlashed': [
                r271_ZeroTallRevSlash,
                null
            ],
            'dotted': [
                r271_ZeroDotShape,
                null
            ],
            'longDotted': [
                r271_ZeroLongDotShape,
                null
            ],
            'slashedSplit': [
                r271_ZeroSlash,
                r271_InsetShape
            ],
            'reverseSlashedSplit': [
                r271_ZeroRevSlash,
                r271_InsetShape
            ],
            'brokenSlash': [
                r271_BrokenTallSlash,
                null
            ],
            'brokenReverseSlash': [
                r271_BrokenTallRevSlash,
                null
            ],
            'brokenVerticalBar': [
                r271_BrokenVerticalBar,
                null
            ],
            'slashedCutout': [
                r271_CutoutSlash,
                r271_Cutout
            ],
            'reverseSlashedCutout': [
                r271_CutoutRevSlash,
                r271_Cutout
            ],
            'tallSlashedCutout': [
                r271_CutoutTallSlash,
                r271_Cutout
            ],
            'tallReverseSlashedCutout': [
                r271_CutoutTallRevSlash,
                r271_Cutout
            ],
            'verticalBarCutout': [
                r271_CutoutVerticalBar,
                r271_Cutout
            ],
            'topRightCutout': [
                r271_TopRightCutoutSlash,
                r271_Cutout
            ]
        });
        var r271_Heights = {
            'lnum': [
                r271_CAP,
                function () {
                    var _r322_t0, _r322_t1;
                    return r271_MarkSet.capital();
                }
            ],
            'onum': [
                r271_OnumHeight,
                function () {
                    var _r323_t0, _r323_t1;
                    return r271_OnumMarks.e();
                }
            ]
        };
        var _r271_t7 = _r1_t2(r271_ZeroConfig)[Symbol.iterator]();
        var _r271_t8 = void 0;
        while (!(_r271_t8 = _r271_t7.next()).done) {
            _r271_t9 = _r271_t8.value;
            r271_suffix = _r271_t9[0];
            r271_Outline = _r271_t9[1][0];
            r271_Overlay = _r271_t9[1][1][0];
            r271_Postproc = _r271_t9[1][1][1];
            _r271_t9[1][1];
            _r271_t9[1];
            _r271_t10 = _r1_t2(r271_Heights)[Symbol.iterator]();
            _r271_t11 = void 0;
            while (!(_r271_t11 = _r271_t10.next()).done) {
                _r271_t12 = _r271_t11.value;
                r271_infix = _r271_t12[0];
                r271_height = _r271_t12[1][0];
                r271_Marks = _r271_t12[1][1];
                _r271_t12[1];
                r271_xn$createAndSaveGlyphImpl$2Lrc3c('zero.' + r271_infix + '.' + r271_suffix, null, function () {
                    var _r331_t1;
                    var _r331_t0 = this;
                    var r331_currentGlyph = _r331_t0;
                    r331_currentGlyph.include(r271_Marks());
                    var r331_zeroShape = r271_Outline.Shape(r271_height);
                    var r331_overlayShape = r271_Overlay ? r271_Overlay(r271_height) : null;
                    if (r271_Postproc)
                        r331_currentGlyph.include(r271_Postproc(r331_zeroShape, r331_overlayShape, r271_Outline.Mask, r271_height));
                    else {
                        r331_currentGlyph.include(r331_zeroShape);
                        if (r271_Overlay)
                            if (r271_Outline.Mask)
                                r331_currentGlyph.include(r271_intersection(r331_overlayShape, r271_Outline.Mask(r271_height)));
                            else
                                r331_currentGlyph.include(r331_overlayShape);
                    }
                    return void 0;
                });
            }
        }
        r271_xn$selectvariant$7Hrq('zero.lnum', r271_CodeLnum('0'), new r271_xn$NamedParameterPair$2Lrc9b('follow', 'zero'));
        r271_xn$selectvariant$7Hrq('zero.onum', r271_CodeOnum('0'), new r271_xn$NamedParameterPair$2Lrc9b('follow', 'zero'));
        r271_xn$selectvariant$7Hrq('zero.lnum/forceSlashed', new r271_xn$NamedParameterPair$2Lrc9b('follow', 'zero/forceSlashed'), new r271_xn$NamedParameterPair$2Lrc9b('shapeFrom', 'zero.lnum'));
        r271_xn$selectvariant$7Hrq('zero.onum/forceSlashed', new r271_xn$NamedParameterPair$2Lrc9b('follow', 'zero/forceSlashed'), new r271_xn$NamedParameterPair$2Lrc9b('shapeFrom', 'zero.onum'));
        r271_xn$selectvariant$7Hrq('zero.lnum/forceUnslashed', new r271_xn$NamedParameterPair$2Lrc9b('follow', 'zero/forceUnslashed'), new r271_xn$NamedParameterPair$2Lrc9b('shapeFrom', 'zero.lnum'));
        r271_xn$selectvariant$7Hrq('zero.onum/forceUnslashed', new r271_xn$NamedParameterPair$2Lrc9b('follow', 'zero/forceUnslashed'), new r271_xn$NamedParameterPair$2Lrc9b('shapeFrom', 'zero.onum'));
        if (r271_xn$queryglyph$1aao('zero.lnum'))
            r1_VS01.set(r271_xn$queryglyph$1aao('zero.lnum'), 'zero.lnum/forceSlashed');
        if (r271_xn$queryglyph$1aao('zero.onum'))
            r1_VS01.set(r271_xn$queryglyph$1aao('zero.onum'), 'zero.onum/forceSlashed');
        var _r271_t13 = r271_xn$Capture$2Lrc8['Letter-Blackboard'].resolve();
        var r271_BBS = _r271_t13.BBS;
        var r271_BBD = _r271_t13.BBD;
        return r271_xn$createAndSaveGlyphImpl$2Lrc3c('mathbb/zero', 120792, function () {
            var _r350_t1;
            var _r350_t0 = this;
            var r350_currentGlyph = _r350_t0;
            r350_currentGlyph.include(r271_MarkSet.capital());
            r350_currentGlyph.include(r271_OShape(r271_CAP, 0, r271_SB, r271_RightSB, r271_BBS));
            r350_currentGlyph.include(r271_intersection(r271_OShapeOutline.NoOvershoot(r271_CAP, 0, r271_SB, r271_RightSB, r271_BBS), r271_union(r271_VBar.l(r271_SB + r271_OX + r271_BBD, 0, r271_CAP, r271_BBS), r271_VBar.r(r271_RightSB - r271_OX - r271_BBD, 0, r271_CAP, r271_BBS), r271_intersection(r271_Rect(r271_CAP, 0, r271_SB + r271_BBD, r271_RightSB - r271_BBD), r271_dispiro(r271_flat(0, r271_CAP * (1 - 0.77), r271_widths.center(r271_BBS)), r271_curl(r271_Width, r271_CAP * 0.77))))));
            return void 0;
        });
    });
    return void 0;
});
