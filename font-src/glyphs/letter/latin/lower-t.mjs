'use strict';
import * as _s0_t0 from '../../../support/utils.mjs';
import * as _s0_t1 from '../../../support/gr.mjs';
var _s0_t2;
export {
    _s0_t2 as apply
};
var r1_apply, _r1_t0, _r1_t1, _r1_t3, _r1_t4, _r1_t5, _r1_t6, _r1_t7, _r1_t10;
var _r1_t2 = function _r1_t10(r463_t) {
    var r463_n, r463_i, r463_a, _r463_t3, _r463_t4, _r463_t5, _r463_t6, _r463_t7, _r463_t8, _r463_t9, _r463_t10, _r463_t11, _r463_t12, _r463_t13, _r463_t14, _r463_t15, _r463_t16, _r463_t17, _r463_t18, _r463_t19, _r463_t20, _r463_t21, _r463_t22, _r463_t23, _r463_t24, _r463_t25, _r463_t26;
    var _r463_t0 = function () {
        _r463_t7 = function (_r463_t8) {
            _r463_t0 = function () {
                throw 'Iteration Stopped';
            };
            return {
                'done': true,
                'value': _r463_t8
            };
        };
        _r463_t9 = r463_t instanceof Array;
        if (_r463_t9) {
            _r463_t10 = r463_n = r463_t.length;
            _r463_t11 = r463_i = 0;
            _r463_t12 = function (_r463_t14) {
                return _r463_t7(_r463_t14);
            };
            _r463_t13 = function (_r463_t15) {
                _r463_t16 = r463_i < r463_n;
                if (_r463_t16) {
                    _r463_t0 = function (_r463_t17) {
                        return _r463_t13(r463_i = r463_i + 1);
                    };
                    return {
                        'value': [
                            r463_i,
                            r463_t[r463_i]
                        ],
                        'done': false
                    };
                } else
                    return _r463_t12(_r463_t15);
            };
            return _r463_t13();
        } else {
            _r463_t18 = r463_a = Object.keys(r463_t);
            _r463_t19 = r463_n = r463_a.length;
            _r463_t20 = r463_i = 0;
            _r463_t21 = function (_r463_t23) {
                return _r463_t7(_r463_t23);
            };
            _r463_t22 = function (_r463_t24) {
                _r463_t25 = r463_i < r463_n;
                if (_r463_t25) {
                    _r463_t0 = function (_r463_t26) {
                        return _r463_t22(r463_i = r463_i + 1);
                    };
                    return {
                        'value': [
                            r463_a[r463_i],
                            r463_t[r463_a[r463_i]]
                        ],
                        'done': false
                    };
                } else
                    return _r463_t21(_r463_t24);
            };
            return _r463_t22();
        }
    };
    var _r463_t1 = function (x) {
        try {
            return _r463_t0(x);
        } catch (ex) {
            return _r463_t2(ex);
        }
    };
    var _r463_t2 = function (e) {
        throw e;
    };
    if (this instanceof _r1_t10)
        _r463_t3 = this;
    else {
        _r463_t4 = function () {
            void 0;
        };
        _r463_t4.prototype = _r1_t10.prototype;
        _r463_t3 = new _r463_t4();
    }
    _r463_t3[Symbol.iterator] = function () {
        return _r463_t3;
    };
    _r463_t3.next = _r463_t1;
    _r463_t3.throw = function (x) {
        return _r463_t2(x);
    };
    return _r463_t3;
};
var _r1_t8 = _s0_t0;
var r1_mix = _r1_t8.mix;
var r1_fallback = _r1_t8.fallback;
var r1_SuffixCfg = _r1_t8.SuffixCfg;
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
    r270_xn$Capture_Ext$2Lrc2b['$defineGlyphBlockImpl$'](r270_xn$Capture_Ext$2Lrc2b, 'Letter-Latin-Lower-T', function (r271_xn$Capture$2Lrc8, r271_xn$ExportCapture$2Lrc4b) {
        var r271_suffix, r271_df, r271_Style, r271_top, r271_yTop, r271_doBS, _r271_t14, _r271_t17, _r271_t20, _r271_t21, _r271_t22, _r271_t23, _r271_tag24, _r271_t25, _r271_tag26, _r271_t27, _r271_tag28, _r271_t29, _r271_tag30, _r271_t31, _r271_tag32, _r271_t33, _r271_tag34, _r271_t35, _r271_tag36, _r271_t37, _r271_tag38;
        var _r271_t0 = r271_xn$Capture$2Lrc8;
        var r271_xn$createAndSaveGlyphImpl$2Lrc3c = _r271_t0['$createAndSaveGlyphImpl$'];
        var r271_xn$NamedParameterPair$2Lrc9b = _r271_t0['$NamedParameterPair$'];
        var r271_xn$assignUnicodeImpl$2Lrc8b = _r271_t0['$assignUnicodeImpl$'];
        var r271_xn$execState$2Lrc0b = _r271_t0['$execState$'];
        var r271_para = _r271_t0.para;
        var r271_MarkSet = _r271_t0.MarkSet;
        var r271_AS_BASE = _r271_t0.AS_BASE;
        var r271_ALSO_METRICS = _r271_t0.ALSO_METRICS;
        var r271_DivFrame = _r271_t0.DivFrame;
        var _r271_t1 = r271_xn$Capture$2Lrc8.Metrics;
        var r271_DesignParameters = _r271_t1.DesignParameters;
        var r271_SB = _r271_t1.SB;
        var r271_XH = _r271_t1.XH;
        var r271_Ascender = _r271_t1.Ascender;
        var r271_Descender = _r271_t1.Descender;
        var r271_HVContrast = _r271_t1.HVContrast;
        var r271_Upward = _r271_t1.Upward;
        var r271_Downward = _r271_t1.Downward;
        var r271_O = _r271_t1.O;
        var r271_Hook = _r271_t1.Hook;
        var r271_SHook = _r271_t1.SHook;
        var r271_HookX = _r271_t1.HookX;
        var r271_ArchDepth = _r271_t1.ArchDepth;
        var r271_Stroke = _r271_t1.Stroke;
        var r271_LongJut = _r271_t1.LongJut;
        var r271_TBalance = _r271_t1.TBalance;
        var r271_TBalance2 = _r271_t1.TBalance2;
        var r271_HalfStroke = _r271_t1.HalfStroke;
        var r271_RightSB = _r271_t1.RightSB;
        var r271_Middle = _r271_t1.Middle;
        var r271_CorrectionOMidX = _r271_t1.CorrectionOMidX;
        var r271_CorrectionOMidS = _r271_t1.CorrectionOMidS;
        var r271_AdviceStroke = _r271_t1.AdviceStroke;
        var r271_StrokeWidthBlend = _r271_t1.StrokeWidthBlend;
        var _r271_t2 = r271_xn$Capture$2Lrc8.SpiroFns;
        var r271_g4 = _r271_t2.g4;
        var r271_g2 = _r271_t2.g2;
        var r271_corner = _r271_t2.corner;
        var r271_flat = _r271_t2.flat;
        var r271_curl = _r271_t2.curl;
        var r271_straight = _r271_t2.straight;
        var r271_widths = _r271_t2.widths;
        var r271_heading = _r271_t2.heading;
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
        var r271_HBar = _r271_t4.HBar;
        var r271_VBar = _r271_t4.VBar;
        var r271_hookend = _r271_t4.hookend;
        var r271_HCrossBar = _r271_t4.HCrossBar;
        var r271_MaskAbove = _r271_t4.MaskAbove;
        var r271_MaskBelow = _r271_t4.MaskBelow;
        var r271_MaskLeft = _r271_t4.MaskLeft;
        var _r271_t5 = r271_xn$Capture$2Lrc8['Common-Derivatives'].resolve();
        var r271_xn$selectvariant$7Hrq = _r271_t5['select-variant'];
        var r271_xn$referglyph$1aao = _r271_t5['refer-glyph'];
        var r271_turned = _r271_t5.turned;
        var r271_xn$deriveglyphs$7Hrq = _r271_t5['derive-glyphs'];
        var _r271_t6 = r271_xn$Capture$2Lrc8['Letter-Shared'].resolve();
        var r271_CreateAccentedComposition = _r271_t6.CreateAccentedComposition;
        var r271_CreateCommaCaronComposition = _r271_t6.CreateCommaCaronComposition;
        var _r271_t7 = r271_xn$Capture$2Lrc8['Letter-Shared-Shapes'].resolve();
        var r271_CurlyTail = _r271_t7.CurlyTail;
        var r271_FlatHookDepth = _r271_t7.FlatHookDepth;
        var r271_ConnectedCedilla = _r271_t7.ConnectedCedilla;
        var r271_SerifedArcEnd = _r271_t7.SerifedArcEnd;
        var _r271_t8 = r271_xn$Capture$2Lrc8['Letter-Shared-Shapes'].resolve();
        var r271_DiagonalTailR = _r271_t8.DiagonalTailR;
        var r271_DiagonalTailStdDepth = _r271_t8.DiagonalTailStdDepth;
        var r271_DToothlessRise = _r271_t8.DToothlessRise;
        var _r271_t9 = r271_xn$Capture$2Lrc8['Letter-Shared-Shapes'].resolve();
        var r271_TopHook = _r271_t9.TopHook;
        var r271_PalatalHook = _r271_t9.PalatalHook;
        var _r271_t10 = r271_xn$Capture$2Lrc8['Letter-Latin-S'].resolve();
        var r271_SAutoSlabEnd = _r271_t10.SAutoSlabEnd;
        var r271_AdviceSArchDepth = _r271_t10.AdviceSArchDepth;
        var _r271_t11 = r271_xn$Capture$2Lrc8['Letter-Blackboard'].resolve();
        var r271_BBS = _r271_t11.BBS;
        var r271_BBD = _r271_t11.BBD;
        var r271_dfNarrowT = r271_DivFrame(r271_para.diversityF);
        var r271_xSmallTBarLeftT = function (r280_df) {
            var _r280_t0, _r280_t1;
            return r280_df.middle - r271_TBalance * r280_df.div * r280_df.div - r271_HalfStroke * r271_HVContrast;
        };
        var r271_xSmallTCrossRefT = function (r281_df) {
            var _r281_t0, _r281_t1;
            return r271_xSmallTBarLeftT(r281_df) + r281_df.div * r271_TBalance2 + r271_HalfStroke * r271_HVContrast;
        };
        var r271_yCrossBar = r271_XH;
        var r271_yShortNeck1 = Math.max(r1_mix(r271_XH, r271_Ascender, 0.5), r1_mix(r271_XH, r271_Ascender, 0.875) - r271_Stroke * 0.125);
        var r271_yShortNeck2 = Math.max(r1_mix(r271_XH, r271_Ascender, 0.5), r1_mix(r271_XH, r271_Ascender, 0.75) - r271_Stroke * 0.125);
        var r271_Standard = function () {
            var r284_BarLeftPos, r284_HookShapeT, r284_CrossBar, r284_Body, r284_Retroflex, r284_PRBody;
            var r284_exports = {};
            r284_exports.BarLeftPos = r284_BarLeftPos = function (r292_df) {
                var _r292_t0, _r292_t1;
                return r271_xSmallTBarLeftT(r292_df);
            };
            r284_exports.HookShapeT = r284_HookShapeT = function (r294_sink, r294_df, r294_fCross, r294_offset, r294_top, r294_bot, r294_sw) {
                var _r294_t0, _r294_t1;
                var r294_xLeft = r294_fCross ? r294_df.middle - r271_HalfStroke * r271_HVContrast : r271_xSmallTBarLeftT(r294_df);
                var r294_hookx = r294_xLeft + Math.max((r294_df.width - r294_df.leftSB * 2) * 0.75 + r271_Stroke * 0.25 * r271_HVContrast, r271_Stroke * r271_HVContrast * 2.25);
                var r294_turn = r1_mix(r294_xLeft, r294_hookx, 0.5) + r271_CorrectionOMidS;
                var r294_adb = Math.max(r271_Hook, (r294_turn - r294_xLeft) * 1.2);
                return r294_sink(r271_widths.lhs(r294_sw), (r294_sink === r271_xn$spirooutline$1aao ? r271_corner : r271_flat)(r294_offset + r294_xLeft, r294_top, r271_heading(r271_Downward)), r271_curl(r294_offset + r294_xLeft, r294_bot + r294_adb), r271_hookend(r294_bot + r271_O + r294_offset, new r271_xn$NamedParameterPair$2Lrc9b('tight', !r271_para.isItalic)), r271_g4(r294_hookx - r294_offset, r294_bot + r271_Hook), r294_sink === r271_xn$spirooutline$1aao ? [r271_corner(r294_hookx - r294_offset, r294_top)] : []);
            };
            r284_exports.CrossBar = r284_CrossBar = function (r297_df) {
                var _r297_t0, _r297_t1;
                return r271_HCrossBar.top(r271_xSmallTCrossRefT(r297_df) - r271_LongJut * Math.sqrt(r297_df.div), r271_xSmallTCrossRefT(r297_df) + r271_LongJut * Math.sqrt(r297_df.div), r271_yCrossBar);
            };
            r284_exports.Body = r284_Body = function (r299_df, r299_top, r299_bot) {
                var _r299_t0, _r299_t1;
                return function () {
                    var _r301_t1;
                    var _r301_t0 = this;
                    var r301_currentGlyph = _r301_t0;
                    r301_currentGlyph.include(r284_CrossBar(r299_df));
                    var r301_g = r301_currentGlyph.include(r284_HookShapeT(r271_dispiro, r299_df, false, 0, r299_top, r299_bot, r271_Stroke));
                    var r301_gEnd = r301_g.knots[r301_g.knots.length - 1];
                    r301_currentGlyph.setBaseAnchor('bottomRight', r301_gEnd.x, r301_gEnd.y);
                    var r301_xLeft = r271_xSmallTBarLeftT(r299_df);
                    r301_currentGlyph.setBaseAnchor('above', r301_xLeft + 0.5 * r271_Stroke * r271_HVContrast, r299_top);
                    r301_currentGlyph.setBaseAnchor('hooktopAttach', r301_xLeft + 0.5 * r271_Stroke * r271_HVContrast, r299_top);
                    r301_currentGlyph.setBaseAnchor('below', r1_mix(r301_xLeft, r301_gEnd.x, r271_StrokeWidthBlend(0.375, 0.5)), r299_bot);
                    r301_currentGlyph.setBaseAnchor('overlay', r301_g.knots[0].x + 0.625 * r271_Stroke * r271_HVContrast, r271_XH * 0.58);
                    return void 0;
                };
            };
            r284_exports.Retroflex = r284_Retroflex = function (r310_df, r310_top, r310_bot) {
                var _r310_t0, _r310_t1;
                return r271_Flat.Retroflex(r310_df, r310_top, r310_bot);
            };
            r284_exports.PRBody = r284_PRBody = function (r312_df, r312_top, r312_bot) {
                var _r312_t0, _r312_t1;
                return function () {
                    var _r314_t1;
                    var _r314_t0 = this;
                    var r314_currentGlyph = _r314_t0;
                    r314_currentGlyph.include(r284_CrossBar(r312_df));
                    r314_currentGlyph.include(r284_HookShapeT(r271_dispiro, r312_df, true, 0, r312_top, r312_bot, r271_Stroke));
                    return void 0;
                };
            };
            return r284_exports;
        }();
        var r271_DiagTail = function () {
            var r319_BarLeftPos, r319_Body, r319_Retroflex, r319_PRBody;
            var r319_exports = {};
            var r319_HookShape = function (r326_df, r326_fCross, r326_top, r326_bot, r326_sw) {
                var _r326_t0, _r326_t1;
                var r326_xMid = r326_fCross ? r326_df.middle : r271_xSmallTBarLeftT(r326_df) + r271_HalfStroke * r271_HVContrast;
                return r271_dispiro(r271_flat(r326_xMid, r326_top, r271_widths.center.heading(r326_sw, r271_Downward)), r271_DiagonalTailR(r326_df, r326_xMid, r326_bot, r271_DiagonalTailStdDepth(r271_DivFrame(Math.sqrt(r326_df.div)), r326_sw), r326_sw));
            };
            r319_exports.BarLeftPos = r319_BarLeftPos = function (r328_df) {
                var _r328_t0, _r328_t1;
                return r271_xSmallTBarLeftT(r328_df);
            };
            r319_exports.Body = r319_Body = function (r330_df, r330_top) {
                var _r330_t0, _r330_t1;
                return function () {
                    var _r332_t1;
                    var _r332_t0 = this;
                    var r332_currentGlyph = _r332_t0;
                    r332_currentGlyph.include(r271_Standard.CrossBar(r330_df));
                    var r332_g = r332_currentGlyph.include(r319_HookShape(r330_df, false, r330_top, 0, r271_Stroke));
                    var r332_gEnd = r332_g.rhsKnots[r332_g.rhsKnots.length - 1];
                    r332_currentGlyph.setBaseAnchor('bottomRight', r332_gEnd.x, r332_gEnd.y);
                    r332_currentGlyph.setBaseAnchor('above', r271_xSmallTBarLeftT(r330_df) + 0.5 * r271_Stroke * r271_HVContrast, r330_top);
                    r332_currentGlyph.setBaseAnchor('hooktopAttach', r271_xSmallTBarLeftT(r330_df) + 0.5 * r271_Stroke * r271_HVContrast, r330_top);
                    r332_currentGlyph.setBaseAnchor('overlay', r332_g.knots[0].x + 0.125 * r271_Stroke * r271_HVContrast, r271_XH * 0.58);
                    return void 0;
                };
            };
            r319_exports.Retroflex = r319_Retroflex = function (r340_df, r340_top, r340_bot) {
                var _r340_t0, _r340_t1;
                return r271_Flat.Retroflex(r340_df, r340_top, r340_bot);
            };
            r319_exports.PRBody = r319_PRBody = function (r342_df, r342_top) {
                var _r342_t0, _r342_t1;
                return function () {
                    var _r344_t1;
                    var _r344_t0 = this;
                    var r344_currentGlyph = _r344_t0;
                    r344_currentGlyph.include(r271_Standard.CrossBar(r342_df));
                    r344_currentGlyph.include(r319_HookShape(r342_df, true, r342_top, 0, r271_Stroke));
                    return void 0;
                };
            };
            return r319_exports;
        }();
        var r271_Flat = function () {
            var r349_BarLeftPos, r349_Body, r349_Retroflex, r349_CrossRTBody, r349_PRBody;
            var r349_exports = {};
            var r349_CrossLeft = function (r356_df) {
                var _r356_t0, _r356_t1;
                return r1_mix(0, r356_df.leftSB, r1_mix(1, r356_df.div, 2));
            };
            var r349_CrossRight = function (r357_df) {
                var _r357_t0, _r357_t1;
                return r1_mix(r357_df.width, r357_df.rightSB, r1_mix(1, r357_df.div, 2));
            };
            var r349_NORMAL = 0;
            var r349_CROSS = 1;
            var r349_RETROFLEX = 2;
            var r349_PR = 3;
            r349_exports.BarLeftPos = r349_BarLeftPos = function (r359_df) {
                var _r359_t0, _r359_t1;
                return r1_mix(r349_CrossLeft(r359_df), r349_CrossRight(r359_df), 0.42) - 0.375 * r271_HVContrast * r271_Stroke;
            };
            r349_exports.Body = r349_Body = function (r361_df, r361_top, r361_bot) {
                var _r361_t0, _r361_t1;
                return r349_Impl(r349_NORMAL, r361_df, r361_top, r361_bot, 0);
            };
            r349_exports.Retroflex = r349_Retroflex = function (r363_df, r363_top, r363_bot) {
                var _r363_t0, _r363_t1;
                return r349_Impl(r349_CROSS, r363_df, r363_top, r363_bot, 0);
            };
            r349_exports.CrossRTBody = r349_CrossRTBody = function (r365_df, r365_top, r365_bot) {
                var _r365_t0, _r365_t1;
                return r349_Impl(r349_RETROFLEX, r365_df, r365_top, r365_bot, 0);
            };
            r349_exports.PRBody = r349_PRBody = function (r367_df, r367_top, r367_bot) {
                var _r367_t0, _r367_t1;
                return r349_Impl(r349_PR, r367_df, r367_top, r367_bot, 0);
            };
            var r349_Impl = function (r368_shape, r368_df, r368_top, r368_bot, r368_ext) {
                var _r368_t0, _r368_t1;
                return function () {
                    var r370___, _r370_t0, _r370_t1, _r370_t3;
                    var _r370_t2 = this;
                    var r370_currentGlyph = _r370_t2;
                    var r370_xCrossLeft = r349_CrossLeft(r368_df);
                    var r370_xCrossRight = r349_CrossRight(r368_df);
                    var r370_xBarLeft = (_r370_t0 = r368_shape, _r370_t0 === r349_CROSS || _r370_t0 === r349_PR ? r368_df.middle - 0.5 * r271_HVContrast * r271_Stroke : (r370___ = _r370_t0, r349_BarLeftPos(r368_df)));
                    var r370_hd = r271_FlatHookDepth(r368_df);
                    var r370_xTailEnd = (_r370_t1 = r368_shape, _r370_t1 === r349_RETROFLEX ? r370_xBarLeft + r271_HookX + r271_HalfStroke * r271_HVContrast : (r370___ = _r370_t1, r370_xCrossRight));
                    r370_currentGlyph.include(r271_union(r271_HCrossBar.top(r370_xCrossLeft, r370_xCrossRight + r368_ext, r271_yCrossBar), r271_dispiro(r271_widths.rhs(), r368_shape === r349_RETROFLEX || r368_shape === r349_CROSS ? r271_straight.left.start(r370_xTailEnd, r368_bot) : [
                        r271_flat(r370_xCrossRight, r368_bot),
                        r271_curl(Math.min(r370_xBarLeft + r370_hd.x, r370_xCrossRight - 1), r368_bot)
                    ], r271_archv.superness(r271_DesignParameters.tightHookSuperness), r271_flat(r370_xBarLeft, r368_shape === r349_RETROFLEX ? r368_bot + r271_Hook + r271_HalfStroke : r370_hd.y), r271_curl(r370_xBarLeft, r368_top, r271_heading(r271_Upward)))));
                    r370_currentGlyph.setBaseAnchor('above', r370_xBarLeft + 0.5 * r271_Stroke * r271_HVContrast, r368_top);
                    r370_currentGlyph.setBaseAnchor('hooktopAttach', r370_xBarLeft + 0.5 * r271_Stroke * r271_HVContrast, r368_top);
                    r370_currentGlyph.setBaseAnchor('topRight', r370_xCrossRight, r271_Ascender);
                    r370_currentGlyph.setBaseAnchor('overlay', r370_xBarLeft + 0.625 * r271_Stroke * r271_HVContrast, r271_XH * 0.58);
                    r370_currentGlyph.setBaseAnchor('below', r271_HalfStroke * r271_HVContrast + Math.min(r370_xBarLeft + 1 / 3 * r370_hd.x, r370_xCrossRight - 1), r368_bot);
                    r370_currentGlyph.setBaseAnchor('bottomRight', r370_xTailEnd, r368_bot);
                    r370_currentGlyph.setBaseAnchor('lTailHookAttach', r370_xTailEnd, r368_bot + r271_Stroke);
                    return void 0;
                };
            };
            return r349_exports;
        }();
        var r271_Cross = function () {
            var r381_BarLeftPos, r381_Body, r381_Retroflex, r381_LTBody, r381_PLBody;
            var r381_exports = {};
            r381_exports.BarLeftPos = r381_BarLeftPos = function (r389_df) {
                var _r389_t0, _r389_t1;
                return r389_df.middle - 0.5 * r271_HVContrast * r271_Stroke;
            };
            r381_exports.Body = r381_Body = function (r391_df, r391_top, r391_bot) {
                var _r391_t0, _r391_t1;
                return function () {
                    var _r393_t1;
                    var _r393_t0 = this;
                    var r393_currentGlyph = _r393_t0;
                    r393_currentGlyph.include(r271_VBar.m(r391_df.middle, 0, r391_top));
                    r393_currentGlyph.include(r271_HCrossBar.top(r391_df.middle - r271_LongJut * Math.sqrt(r391_df.div), r391_df.middle + r271_LongJut * Math.sqrt(r391_df.div), r271_yCrossBar));
                    r393_currentGlyph.setBaseAnchor('overlay', r391_df.middle, r271_XH * 0.58);
                    r393_currentGlyph.setBaseAnchor('hooktopAttach', r391_df.middle, r391_top);
                    return void 0;
                };
            };
            r381_exports.Retroflex = r381_Retroflex = function (r399_df, r399_top, r399_bot) {
                var _r399_t0, _r399_t1;
                return r271_Flat.CrossRTBody(r399_df, r399_top, r399_bot);
            };
            r381_exports.LTBody = r381_LTBody = function (r401_df, r401_top, r401_bot) {
                var _r401_t0, _r401_t1;
                return function () {
                    var _r403_t1;
                    var _r403_t0 = this;
                    var r403_currentGlyph = _r403_t0;
                    r403_currentGlyph.include(r381_Body(r401_df, r401_top, r401_bot));
                    var r403_xEnd = r401_df.middle + 1.25 * r271_HVContrast * r271_Stroke;
                    r403_currentGlyph.include(r271_HBar.b(r401_df.middle, r403_xEnd, 0));
                    r403_currentGlyph.setBaseAnchor('bottomRight', r403_xEnd, r401_bot);
                    r403_currentGlyph.setBaseAnchor('lTailHookAttach', r403_xEnd, r401_bot + r271_Stroke);
                    return void 0;
                };
            };
            r381_exports.PLBody = r381_PLBody = function (r409_df, r409_top, r409_bot) {
                var _r409_t0, _r409_t1;
                return function () {
                    var _r411_t1;
                    var _r411_t0 = this;
                    var r411_currentGlyph = _r411_t0;
                    r411_currentGlyph.include(r381_Body(r409_df, r409_top, r409_bot));
                    r411_currentGlyph.include(r271_HBar.b(r409_df.middle, r271_RightSB, 0));
                    return void 0;
                };
            };
            return r381_exports;
        }();
        var r271_HooklessAsymmetric = function () {
            var r416_BarLeftPos, r416_Body, r416_LTBody, r416_Retroflex, r416_PLBody, r416_PRBody;
            var r416_exports = {};
            r416_exports.BarLeftPos = r416_BarLeftPos = function (r424_df) {
                var _r424_t0, _r424_t1;
                return r271_xSmallTBarLeftT(r424_df);
            };
            r416_exports.Body = r416_Body = function (r426_df, r426_top, r426_bot) {
                var _r426_t0, _r426_t1;
                return function () {
                    var _r428_t1;
                    var _r428_t0 = this;
                    var r428_currentGlyph = _r428_t0;
                    var r428_xBarLeft = r271_xSmallTBarLeftT(r426_df);
                    r428_currentGlyph.include(r271_VBar.l(r428_xBarLeft, 0, r426_top));
                    r428_currentGlyph.include(r271_difference(r271_HCrossBar.top(r428_xBarLeft, r426_df.middle + r426_df.div * r271_LongJut, r271_yCrossBar), r271_MaskLeft(r428_xBarLeft - r271_O)));
                    r428_currentGlyph.setBaseAnchor('above', r428_xBarLeft + 0.5 * r271_HVContrast * r271_Stroke, r426_top);
                    r428_currentGlyph.setBaseAnchor('hooktopAttach', r428_xBarLeft + 0.5 * r271_HVContrast * r271_Stroke, r426_top);
                    r428_currentGlyph.setBaseAnchor('overlay', r428_xBarLeft + 0.625 * r271_HVContrast * r271_Stroke, r271_XH * 0.58);
                    r428_currentGlyph.setBaseAnchor('below', r428_xBarLeft + r271_HVContrast * r271_HalfStroke, r426_bot);
                    return void 0;
                };
            };
            r416_exports.LTBody = r416_LTBody = function (r436_df, r436_top, r436_bot) {
                var _r436_t0, _r436_t1;
                return function () {
                    var _r438_t1;
                    var _r438_t0 = this;
                    var r438_currentGlyph = _r438_t0;
                    r438_currentGlyph.include(r416_Body(r436_df, r436_top, r436_bot));
                    var r438_xBarLeft = r271_xSmallTBarLeftT(r436_df);
                    var r438_xEnd = r438_xBarLeft + 1.75 * r271_HVContrast * r271_Stroke;
                    r438_currentGlyph.include(r271_HBar.b(r438_xBarLeft, r438_xEnd, 0));
                    r438_currentGlyph.setBaseAnchor('bottomRight', r438_xEnd, r436_bot);
                    r438_currentGlyph.setBaseAnchor('lTailHookAttach', r438_xEnd, r436_bot + r271_Stroke);
                    return void 0;
                };
            };
            r416_exports.Retroflex = r416_Retroflex = function (r444_df, r444_top, r444_bot) {
                var _r444_t0, _r444_t1;
                return function () {
                    var _r446_t1;
                    var _r446_t0 = this;
                    var r446_currentGlyph = _r446_t0;
                    var r446_xBarLeft = r271_xSmallTBarLeftT(r444_df);
                    r446_currentGlyph.setBaseAnchor('hooktopAttach', r446_xBarLeft + 0.5 * r271_HVContrast * r271_Stroke, r444_top);
                    r446_currentGlyph.include(r271_dispiro(r271_widths.rhs(), r271_straight.left.start(r446_xBarLeft + r271_HookX + r271_HalfStroke * r271_HVContrast, r444_bot), r271_flat(r446_xBarLeft, r444_bot + r271_Hook + r271_HalfStroke), r271_curl(r446_xBarLeft, r444_top, r271_heading(r271_Upward))));
                    r446_currentGlyph.include(r271_difference(r271_HCrossBar.top(r446_xBarLeft, r444_df.middle + r444_df.div * r271_LongJut, r271_yCrossBar), r271_MaskLeft(r446_xBarLeft - r271_O)));
                    return void 0;
                };
            };
            r416_exports.PLBody = r416_PLBody = function (r451_df, r451_top, r451_bot) {
                var _r451_t0, _r451_t1;
                return function () {
                    var _r453_t1;
                    var _r453_t0 = this;
                    var r453_currentGlyph = _r453_t0;
                    r453_currentGlyph.include(r416_Body(r451_df, r451_top, r451_bot));
                    var r453_xBarLeft = r271_xSmallTBarLeftT(r451_df);
                    r453_currentGlyph.include(r271_HBar.b(r453_xBarLeft, r271_RightSB, 0));
                    return void 0;
                };
            };
            r416_exports.PRBody = r416_PRBody = function (r457_df, r457_top, r457_bot) {
                var _r457_t0, _r457_t1;
                return function () {
                    var _r459_t1;
                    var _r459_t0 = this;
                    var r459_currentGlyph = _r459_t0;
                    r459_currentGlyph.include(r271_VBar.m(r457_df.middle, 0, r457_top));
                    r459_currentGlyph.include(r271_HCrossBar.top(r457_df.middle, r457_df.middle + r457_df.div * r271_LongJut, r271_yCrossBar));
                    return void 0;
                };
            };
            return r416_exports;
        }();
        var r271_SmallTConfig = r1_SuffixCfg.weave({
            'standard': [
                r271_DivFrame(1),
                r271_Standard
            ],
            'diagonalTailed': [
                r271_dfNarrowT,
                r271_DiagTail
            ],
            'flatHook': [
                r271_dfNarrowT,
                r271_Flat
            ],
            'cross': [
                r271_dfNarrowT,
                r271_Cross
            ],
            'hooklessAsymmetric': [
                r271_dfNarrowT,
                r271_HooklessAsymmetric
            ]
        }, {
            '': r271_Ascender,
            'shortNeck': r271_yShortNeck1,
            'shortNeck2': r271_yShortNeck2
        });
        var _r271_t12 = _r1_t2(r271_SmallTConfig)[Symbol.iterator]();
        var _r271_t13 = void 0;
        while (!(_r271_t13 = _r271_t12.next()).done) {
            _r271_t14 = _r271_t13.value;
            r271_suffix = _r271_t14[0];
            r271_df = _r271_t14[1][0][0];
            r271_Style = _r271_t14[1][0][1];
            _r271_t14[1][0];
            r271_top = _r271_t14[1][1];
            _r271_t14[1];
            (function () {
                r271_xn$createAndSaveGlyphImpl$2Lrc3c('t.' + r271_suffix, null, function () {
                    var _r469_t1;
                    var _r469_t0 = this;
                    var r469_currentGlyph = _r469_t0;
                    r469_currentGlyph.setWidth(r271_df.width);
                    r469_currentGlyph.include(r271_df.markSet.b());
                    r469_currentGlyph.include(r271_Style.Body(r271_df, r271_top, 0));
                    return void 0;
                });
                r271_xn$createAndSaveGlyphImpl$2Lrc3c('t/phoneticLeft2.' + r271_suffix, null, function () {
                    var _r475_t1;
                    var _r475_t0 = this;
                    var r475_currentGlyph = _r475_t0;
                    r475_currentGlyph.setWidth(r271_df.width);
                    r475_currentGlyph.include(r271_df.markSet.b());
                    r475_currentGlyph.include((r271_Style.PLBody || r271_Style.Body)(r271_df, r271_top, 0));
                    return void 0;
                });
                r271_xn$createAndSaveGlyphImpl$2Lrc3c('t/phoneticLeft3.' + r271_suffix, null, function () {
                    var _r481_t1;
                    var _r481_t0 = this;
                    var r481_currentGlyph = _r481_t0;
                    r481_currentGlyph.setWidth(r271_df.width);
                    r481_currentGlyph.include(r271_df.markSet.b());
                    r481_currentGlyph.include(r271_difference((r271_Style.PRBody || r271_Style.Body)(r271_df, r271_top, 0), r271_MaskLeft(r1_mix(r271_df.leftSB, r271_df.middle - r271_HVContrast * r271_HalfStroke, 0.5))));
                    return void 0;
                });
                r271_xn$createAndSaveGlyphImpl$2Lrc3c('t/teshLeft.' + r271_suffix, null, function () {
                    var _r487_t1;
                    var _r487_t0 = this;
                    var r487_currentGlyph = _r487_t0;
                    var r487_df1 = r271_DivFrame(1);
                    r487_currentGlyph.setWidth(r487_df1.width);
                    r487_currentGlyph.include(r487_df1.markSet.b());
                    r487_currentGlyph.include(r271_Style.Body(r487_df1, r271_top, 0));
                    r487_currentGlyph.include(r271_HCrossBar.top(r487_df1.middle, r487_df1.width + r487_df1.middle, r271_yCrossBar));
                    return void 0;
                });
                r271_xn$createAndSaveGlyphImpl$2Lrc3c('tHookTop.' + r271_suffix, null, function () {
                    var _r494_t1;
                    var _r494_t0 = this;
                    var r494_currentGlyph = _r494_t0;
                    r494_currentGlyph.include(r271_xn$referglyph$1aao('t.' + r271_suffix), r271_AS_BASE, r271_ALSO_METRICS);
                    var r494_attach = r494_currentGlyph.gizmo.unapply(r494_currentGlyph.baseAnchors.hooktopAttach);
                    r494_currentGlyph.clearGeometry();
                    r494_currentGlyph.include(r271_union(r271_difference(r271_Style.Body(r271_df, r271_top, 0), r271_MaskAbove(r271_XH)), r271_TopHook.mBarInner(r494_attach.x, r271_XH, r271_Ascender)));
                    return void 0;
                });
                r271_xn$createAndSaveGlyphImpl$2Lrc3c('tLTail.' + r271_suffix, null, function () {
                    var _r499_t1;
                    var _r499_t0 = this;
                    var r499_currentGlyph = _r499_t0;
                    r499_currentGlyph.setWidth(r271_df.width);
                    r499_currentGlyph.include(r271_df.markSet.bp());
                    r499_currentGlyph.include((r271_Style.LTBody || r271_Style.Body)(r271_df, r271_top, 0));
                    var r499_attach = r499_currentGlyph.gizmo.unapply(r499_currentGlyph.baseAnchors.lTailHookAttach || r499_currentGlyph.baseAnchors.bottomRight);
                    r499_currentGlyph.include(r271_PalatalHook.r(new r271_xn$NamedParameterPair$2Lrc9b('x', r499_attach.x), new r271_xn$NamedParameterPair$2Lrc9b('y', 0), new r271_xn$NamedParameterPair$2Lrc9b('yAttach', r499_attach.y)));
                    return void 0;
                });
                r271_xn$createAndSaveGlyphImpl$2Lrc3c('tRTail.' + r271_suffix, null, function () {
                    var _r509_t1;
                    var _r509_t0 = this;
                    var r509_currentGlyph = _r509_t0;
                    r509_currentGlyph.setWidth(r271_df.width);
                    r509_currentGlyph.include(r271_df.markSet.bp());
                    r509_currentGlyph.include(r271_Style.Retroflex(r271_df, r271_top, r271_Descender));
                    return void 0;
                });
                r271_xn$createAndSaveGlyphImpl$2Lrc3c('tHookTopRTail.' + r271_suffix, null, function () {
                    var _r515_t1;
                    var _r515_t0 = this;
                    var r515_currentGlyph = _r515_t0;
                    r515_currentGlyph.setWidth(r271_df.width);
                    r515_currentGlyph.include(r271_df.markSet.bp());
                    r515_currentGlyph.include(r271_Style.Retroflex(r271_df, r271_XH, r271_Descender));
                    var r515_attach = r515_currentGlyph.gizmo.unapply(r515_currentGlyph.baseAnchors.hooktopAttach);
                    r515_currentGlyph.include(r271_TopHook.mBarInner(r515_attach.x, r271_XH, r271_Ascender));
                    return void 0;
                });
                r271_turned('turnt.' + r271_suffix, void 0, 't.' + r271_suffix, r271_df.middle, r271_XH / 2, r271_df.markSet.p());
                return r271_xn$createAndSaveGlyphImpl$2Lrc3c('tCurlyTail.' + r271_suffix, null, function () {
                    var _r522_t1;
                    var _r522_t0 = this;
                    var r522_currentGlyph = _r522_t0;
                    r522_currentGlyph.include(r271_MarkSet.b());
                    var r522_df = r271_DivFrame(1);
                    var r522_fine = r271_AdviceStroke(3.5);
                    var r522_rinner = r271_LongJut / 2 - r522_fine / 2;
                    var r522_xLeft = r271_Style.BarLeftPos(r522_df);
                    var r522_x2 = r1_mix(r271_SB, r522_xLeft, 0.4);
                    var r522_y2 = -r522_fine;
                    r522_currentGlyph.include(r271_difference(r271_Style.Body(r522_df, r271_top, 0), r271_MaskBelow(r271_yCrossBar - r271_Stroke - 0.1)));
                    r522_currentGlyph.include(r271_dispiro(r271_widths.lhs(), r271_flat(r522_xLeft, r271_yCrossBar - r271_Stroke, r271_heading(r271_Downward)), r271_curl(r522_xLeft, r522_fine + r522_rinner * 2), r271_CurlyTail(r522_fine, r522_rinner, r522_xLeft + r271_Stroke * r271_HVContrast, 0, r522_xLeft + r271_Stroke * r271_HVContrast + r271_LongJut, r522_x2, r522_y2)));
                    return void 0;
                });
            }());
        }
        r271_xn$selectvariant$7Hrq('t', 't');
        r271_xn$selectvariant$7Hrq('t/teshLeft', new r271_xn$NamedParameterPair$2Lrc9b('follow', 't'));
        r271_xn$selectvariant$7Hrq('t/phoneticLeft1', new r271_xn$NamedParameterPair$2Lrc9b('shapeFrom', 't'));
        r271_xn$selectvariant$7Hrq('t/phoneticLeft2');
        r271_xn$selectvariant$7Hrq('t/phoneticLeft3');
        r271_xn$selectvariant$7Hrq('turnt', 647, new r271_xn$NamedParameterPair$2Lrc9b('follow', 't'));
        r271_CreateCommaCaronComposition('tcaron', 357, 't');
        r271_xn$deriveglyphs$7Hrq('tCedilla', 355, 't', r271_ConnectedCedilla);
        r271_xn$selectvariant$7Hrq('tHookTop', 429);
        r271_xn$selectvariant$7Hrq('tLTail', 427);
        r271_xn$selectvariant$7Hrq('tRTail', 648);
        r271_xn$selectvariant$7Hrq('tCurlyTail', 566);
        r271_xn$selectvariant$7Hrq('tHookTopRTail', 122633);
        var r271_xn$SLABNONE$5sIl = 0;
        var r271_xn$SLABCLASSICAL$5sIl = 1;
        var r271_xn$SLABINWARD$5sIl = 2;
        var r271_TsLigStrokeShape = function (r529_df, r529_stroke, r529_top, r529_sb) {
            var r529___, _r529_t0, _r529_t1, _r529_t2;
            var r529_archDepth = r271_AdviceSArchDepth(r271_XH + 0.5 * r271_ArchDepth, -1, r529_stroke);
            return r271_dispiro(r271_widths.lhs(r529_stroke), r271_flat(r271_xSmallTBarLeftT(r529_df), r529_top, r271_heading(r271_Downward)), r271_curl(r271_xSmallTBarLeftT(r529_df), r271_XH, r271_heading(r271_Downward)), r271_alsoThru.g2(0.5, 0.5, r271_widths.center(r529_stroke)), r271_g4(r529_df.rightSB, r529_archDepth, r271_widths.rhs(r529_stroke)), (_r529_t0 = r529_sb, _r529_t0 === r271_xn$SLABCLASSICAL$5sIl ? r271_SerifedArcEnd.RtlRhs(r529_df.leftSB, r271_Middle, 0, r529_stroke, r271_SHook) : _r529_t0 === r271_xn$SLABINWARD$5sIl ? [
                r271_arcvh(),
                r271_g4(r529_df.middle + r271_CorrectionOMidX * r529_stroke, r271_O),
                r271_g4(r529_df.leftSB, r271_DToothlessRise)
            ] : (r529___ = _r529_t0, [
                r271_hookend(r271_O, new r271_xn$NamedParameterPair$2Lrc9b('sw', r529_stroke), new r271_xn$NamedParameterPair$2Lrc9b('swItalicAdj', r271_Stroke)),
                r271_g4(r529_df.leftSB, r271_SHook)
            ])));
        };
        var r271_TSUpperConfig = {
            'standard': [r271_Ascender],
            'standardShortNeck': [r271_yShortNeck1],
            'standardShortNeck2': [r271_yShortNeck2]
        };
        var _r271_t15 = Object.entries(r271_TSUpperConfig)[Symbol.iterator]();
        var _r271_t16 = void 0;
        while (!(_r271_t16 = _r271_t15.next()).done) {
            _r271_t17 = _r271_t16.value;
            r271_suffix = _r271_t17[0];
            r271_yTop = _r271_t17[1][0];
            _r271_t17[1];
            (function () {
                return r271_xn$createAndSaveGlyphImpl$2Lrc3c('tsLig/upperHalf.' + r271_suffix, null, function () {
                    var _r537_t1;
                    var _r537_t0 = this;
                    var r537_currentGlyph = _r537_t0;
                    var r537_df = r271_DivFrame(1);
                    r537_currentGlyph.setBaseAnchor('cvDecompose', 0, 0);
                    r537_currentGlyph.include(r271_difference(r271_TsLigStrokeShape(r537_df, r271_Stroke, r271_top, false), r271_MaskBelow(r271_XH)));
                    r537_currentGlyph.include(r271_Standard.CrossBar(r537_df));
                    return void 0;
                });
            }());
        }
        var r271_TSLowerConfig = {
            'serifless': [r271_xn$SLABNONE$5sIl],
            'bilateralSerifed': [r271_xn$SLABCLASSICAL$5sIl],
            'bilateralInwardSerifed': [r271_xn$SLABINWARD$5sIl]
        };
        var _r271_t18 = Object.entries(r271_TSLowerConfig)[Symbol.iterator]();
        var _r271_t19 = void 0;
        while (!(_r271_t19 = _r271_t18.next()).done) {
            _r271_t20 = _r271_t19.value;
            r271_suffix = _r271_t20[0];
            r271_doBS = _r271_t20[1][0];
            _r271_t20[1];
            (function () {
                return r271_xn$createAndSaveGlyphImpl$2Lrc3c('tsLig/lowerHalf.' + r271_suffix, null, function () {
                    var _r546_t1;
                    var _r546_t0 = this;
                    var r546_currentGlyph = _r546_t0;
                    var r546_df = r271_DivFrame(1);
                    r546_currentGlyph.include(r546_df.markSet.b());
                    r546_currentGlyph.setMarkAnchor('cvDecompose', 0, 0);
                    r546_currentGlyph.include(r271_intersection(r271_TsLigStrokeShape(r546_df, r271_Stroke, r271_Ascender, r271_doBS), r271_MaskBelow(r271_XH)));
                    r546_currentGlyph.include(r271_SAutoSlabEnd(r271_doBS, 0, r271_Stroke, r271_Hook));
                    return void 0;
                });
            }());
        }
        r271_xn$selectvariant$7Hrq('tsLig/upperHalf');
        r271_xn$selectvariant$7Hrq('tsLig/lowerHalf');
        r271_xn$createAndSaveGlyphImpl$2Lrc3c('tsLig', 446, function () {
            var _r553_t1;
            var _r553_t0 = this;
            var r553_currentGlyph = _r553_t0;
            r553_currentGlyph.include(r271_xn$referglyph$1aao('tsLig/upperHalf'), r271_AS_BASE, r271_ALSO_METRICS);
            r553_currentGlyph.include(r271_xn$referglyph$1aao('tsLig/lowerHalf'));
            r1_CvDecompose.set(r553_currentGlyph, [
                'tsLig/upperHalf',
                'tsLig/lowerHalf'
            ]);
            return void 0;
        });
        return r271_xn$createAndSaveGlyphImpl$2Lrc3c('mathbb/t', 120165, function () {
            var _r558_t1;
            var _r558_t0 = this;
            var r558_currentGlyph = _r558_t0;
            var r558_df = r271_DivFrame(1);
            r558_currentGlyph.include(r558_df.markSet.b());
            var r558_xLeft = r271_xSmallTBarLeftT(r558_df);
            r558_currentGlyph.include(r271_HBar.t(r558_xLeft, r558_xLeft + r271_BBD, r271_Ascender, r271_BBS));
            r558_currentGlyph.include(r271_Standard.HookShapeT(r271_dispiro, r558_df, false, 0, r271_Ascender, 0, r271_BBS));
            r558_currentGlyph.include(r271_intersection(r271_VBar.l(r558_xLeft + r271_BBD, 0, r271_Ascender, r271_BBS), r271_Standard.HookShapeT(r271_xn$spirooutline$1aao, r558_df, false, 1, r271_Ascender, 0, r271_BBS)));
            r558_currentGlyph.include(r271_difference(r271_HCrossBar.top(r558_xLeft + r271_BBD / 2 - r271_LongJut + r271_TBalance2, r558_xLeft + r271_BBD / 2 + r271_LongJut + r271_TBalance2, r271_yCrossBar, r271_BBS), r271_Rect(r271_Ascender, 0, r558_xLeft, r558_xLeft + r271_BBD)));
            return void 0;
        });
    });
    return void 0;
});
