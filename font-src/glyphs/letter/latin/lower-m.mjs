'use strict';
import * as _s0_t0 from '../../../support/utils.mjs';
import * as _s0_t1 from '../../../support/gr.mjs';
var _s0_t2;
export {
    _s0_t2 as apply
};
var r1_apply, _r1_t0, _r1_t1, _r1_t3, _r1_t4, _r1_t5, _r1_t6, _r1_t7, _r1_t10;
var _r1_t2 = function _r1_t10(r374_t) {
    var r374_n, r374_i, r374_a, _r374_t3, _r374_t4, _r374_t5, _r374_t6, _r374_t7, _r374_t8, _r374_t9, _r374_t10, _r374_t11, _r374_t12, _r374_t13, _r374_t14, _r374_t15, _r374_t16, _r374_t17, _r374_t18, _r374_t19, _r374_t20, _r374_t21, _r374_t22, _r374_t23, _r374_t24, _r374_t25, _r374_t26;
    var _r374_t0 = function () {
        _r374_t7 = function (_r374_t8) {
            _r374_t0 = function () {
                throw 'Iteration Stopped';
            };
            return {
                'done': true,
                'value': _r374_t8
            };
        };
        _r374_t9 = r374_t instanceof Array;
        if (_r374_t9) {
            _r374_t10 = r374_n = r374_t.length;
            _r374_t11 = r374_i = 0;
            _r374_t12 = function (_r374_t14) {
                return _r374_t7(_r374_t14);
            };
            _r374_t13 = function (_r374_t15) {
                _r374_t16 = r374_i < r374_n;
                if (_r374_t16) {
                    _r374_t0 = function (_r374_t17) {
                        return _r374_t13(r374_i = r374_i + 1);
                    };
                    return {
                        'value': [
                            r374_i,
                            r374_t[r374_i]
                        ],
                        'done': false
                    };
                } else
                    return _r374_t12(_r374_t15);
            };
            return _r374_t13();
        } else {
            _r374_t18 = r374_a = Object.keys(r374_t);
            _r374_t19 = r374_n = r374_a.length;
            _r374_t20 = r374_i = 0;
            _r374_t21 = function (_r374_t23) {
                return _r374_t7(_r374_t23);
            };
            _r374_t22 = function (_r374_t24) {
                _r374_t25 = r374_i < r374_n;
                if (_r374_t25) {
                    _r374_t0 = function (_r374_t26) {
                        return _r374_t22(r374_i = r374_i + 1);
                    };
                    return {
                        'value': [
                            r374_a[r374_i],
                            r374_t[r374_a[r374_i]]
                        ],
                        'done': false
                    };
                } else
                    return _r374_t21(_r374_t24);
            };
            return _r374_t22();
        }
    };
    var _r374_t1 = function (x) {
        try {
            return _r374_t0(x);
        } catch (ex) {
            return _r374_t2(ex);
        }
    };
    var _r374_t2 = function (e) {
        throw e;
    };
    if (this instanceof _r1_t10)
        _r374_t3 = this;
    else {
        _r374_t4 = function () {
            void 0;
        };
        _r374_t4.prototype = _r1_t10.prototype;
        _r374_t3 = new _r374_t4();
    }
    _r374_t3[Symbol.iterator] = function () {
        return _r374_t3;
    };
    _r374_t3.next = _r374_t1;
    _r374_t3.throw = function (x) {
        return _r374_t2(x);
    };
    return _r374_t3;
};
var _r1_t8 = _s0_t0;
var r1_mix = _r1_t8.mix;
var r1_fallback = _r1_t8.fallback;
var r1_SuffixCfg = _r1_t8.SuffixCfg;
var _r1_t9 = _s0_t1;
var r1_Dotless = _r1_t9.Dotless;
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
    r270_xn$Capture_Ext$2Lrc2b['$defineGlyphBlockImpl$'](r270_xn$Capture_Ext$2Lrc2b, 'Letter-Latin-Lower-M', function (r271_xn$Capture$2Lrc8, r271_xn$ExportCapture$2Lrc4b) {
        var r271_suffix, r271_Body, r271_earless, r271_shortLeg, r271_tailed, r271_Serifs, _r271_t12, _r271_t14, _r271_t15, _r271_t20, _r271_tag21, _r271_t27, _r271_tag28, _r271_t30, _r271_tag31;
        var _r271_t0 = r271_xn$Capture$2Lrc8;
        var r271_xn$createAndSaveGlyphImpl$2Lrc3c = _r271_t0['$createAndSaveGlyphImpl$'];
        var r271_xn$NamedParameterPair$2Lrc9b = _r271_t0['$NamedParameterPair$'];
        var r271_xn$assignUnicodeImpl$2Lrc8b = _r271_t0['$assignUnicodeImpl$'];
        var r271_xn$execState$2Lrc0b = _r271_t0['$execState$'];
        var r271_para = _r271_t0.para;
        var r271_tagged = _r271_t0.tagged;
        var r271_DivFrame = _r271_t0.DivFrame;
        var _r271_t1 = r271_xn$Capture$2Lrc8.Metrics;
        var r271_Width = _r271_t1.Width;
        var r271_SB = _r271_t1.SB;
        var r271_CAP = _r271_t1.CAP;
        var r271_XH = _r271_t1.XH;
        var r271_Descender = _r271_t1.Descender;
        var r271_Translate = _r271_t1.Translate;
        var r271_TanSlope = _r271_t1.TanSlope;
        var r271_HVContrast = _r271_t1.HVContrast;
        var r271_Downward = _r271_t1.Downward;
        var r271_Rightward = _r271_t1.Rightward;
        var r271_O = _r271_t1.O;
        var r271_SmallArchDepth = _r271_t1.SmallArchDepth;
        var r271_Stroke = _r271_t1.Stroke;
        var r271_CThin = _r271_t1.CThin;
        var r271_SLAB = _r271_t1.SLAB;
        var r271_SideJut = _r271_t1.SideJut;
        var r271_CorrectionOMidS = _r271_t1.CorrectionOMidS;
        var r271_AdviceStroke = _r271_t1.AdviceStroke;
        var r271_ShoulderFine = _r271_t1.ShoulderFine;
        var _r271_t2 = r271_xn$Capture$2Lrc8.SpiroFns;
        var r271_g4 = _r271_t2.g4;
        var r271_g2 = _r271_t2.g2;
        var r271_corner = _r271_t2.corner;
        var r271_flat = _r271_t2.flat;
        var r271_curl = _r271_t2.curl;
        var r271_close = _r271_t2.close;
        var r271_straight = _r271_t2.straight;
        var r271_widths = _r271_t2.widths;
        var r271_heading = _r271_t2.heading;
        var r271_archv = _r271_t2.archv;
        var r271_arcvh = _r271_t2.arcvh;
        var r271_dispiro = _r271_t2.dispiro;
        var r271_xn$spirooutline$1aao = _r271_t2['spiro-outline'];
        var _r271_t3 = r271_xn$Capture$2Lrc8.BooleFns;
        var r271_union = _r271_t3.union;
        var r271_intersection = _r271_t3.intersection;
        var _r271_t4 = r271_xn$Capture$2Lrc8.CommonShapes.resolve();
        var r271_xn$noshape$3cah = _r271_t4['no-shape'];
        var r271_HBar = _r271_t4.HBar;
        var r271_VBar = _r271_t4.VBar;
        var r271_FlipAround = _r271_t4.FlipAround;
        var r271_PointingTo = _r271_t4.PointingTo;
        var _r271_t5 = r271_xn$Capture$2Lrc8['Common-Derivatives'].resolve();
        var r271_xn$selectvariant$7Hrq = _r271_t5['select-variant'];
        var r271_xn$referglyph$1aao = _r271_t5['refer-glyph'];
        var r271_alias = _r271_t5.alias;
        var r271_turned = _r271_t5.turned;
        var r271_xn$derivecomposites$7Hrq = _r271_t5['derive-composites'];
        var r271_xn$linkreducedvariant$5sIl8 = _r271_t5['link-reduced-variant'];
        var r271_HalfAdvance = _r271_t5.HalfAdvance;
        var _r271_t6 = r271_xn$Capture$2Lrc8['Letter-Shared'].resolve();
        var r271_CreateAccentedComposition = _r271_t6.CreateAccentedComposition;
        var _r271_t7 = r271_xn$Capture$2Lrc8['Letter-Shared-Shapes'].resolve();
        var r271_SerifFrame = _r271_t7.SerifFrame;
        var r271_RightwardTailedBar = _r271_t7.RightwardTailedBar;
        var r271_DToothlessRise = _r271_t7.DToothlessRise;
        var r271_DMBlend = _r271_t7.DMBlend;
        var _r271_t8 = r271_xn$Capture$2Lrc8['Letter-Shared-Shapes'].resolve();
        var r271_nShoulder = _r271_t8.nShoulder;
        var r271_nShoulderMask = _r271_t8.nShoulderMask;
        var _r271_t9 = r271_xn$Capture$2Lrc8['Letter-Shared-Shapes'].resolve();
        var r271_CyrDescender = _r271_t9.CyrDescender;
        var r271_PalatalHook = _r271_t9.PalatalHook;
        var r271_CurlyTail = _r271_t9.CurlyTail;
        var r271_SmallMSmooth = function (r278_df) {
            var _r278_t0, _r278_t1;
            return r278_df.div * (0.5 * r271_SmallArchDepth + 0.375 * r271_Stroke);
        };
        var r271_SmallMShoulderSpiro = function () {
            var _r279_t6;
            var _r279_t7 = arguments;
            var _r279_t0 = [].slice.call(_r279_t7, 0);
            var _r279_t1 = [];
            var _r279_t2 = 0;
            while (_r279_t2 < _r279_t0.length) {
                if (!(_r279_t0[_r279_t2] instanceof r271_xn$NamedParameterPair$2Lrc9b))
                    _r279_t1.push(_r279_t0[_r279_t2]);
                _r279_t2 = _r279_t2 + 1;
            }
            var _r279_t3 = _r279_t0;
            var _r279_t4 = _r279_t3.length;
            var _r279_t5 = 0;
            while (_r279_t5 < _r279_t4) {
                _r279_t2 = _r279_t3[_r279_t5];
                if (_r279_t2 && _r279_t2 instanceof r271_xn$NamedParameterPair$2Lrc9b && _r279_t2.left === 'left')
                    r279_left = _r279_t2.right;
                if (_r279_t2 && _r279_t2 instanceof r271_xn$NamedParameterPair$2Lrc9b && _r279_t2.left === 'right')
                    r279_right = _r279_t2.right;
                if (_r279_t2 && _r279_t2 instanceof r271_xn$NamedParameterPair$2Lrc9b && _r279_t2.left === 'top')
                    r279_top = _r279_t2.right;
                if (_r279_t2 && _r279_t2 instanceof r271_xn$NamedParameterPair$2Lrc9b && _r279_t2.left === 'bottom')
                    r279_bottom = _r279_t2.right;
                if (_r279_t2 && _r279_t2 instanceof r271_xn$NamedParameterPair$2Lrc9b && _r279_t2.left === 'width')
                    r279_width = _r279_t2.right;
                if (_r279_t2 && _r279_t2 instanceof r271_xn$NamedParameterPair$2Lrc9b && _r279_t2.left === 'fine')
                    r279_fine = _r279_t2.right;
                if (_r279_t2 && _r279_t2 instanceof r271_xn$NamedParameterPair$2Lrc9b && _r279_t2.left === 'df')
                    r279_df = _r279_t2.right;
                if (_r279_t2 && _r279_t2 instanceof r271_xn$NamedParameterPair$2Lrc9b && _r279_t2.left === 'coBottom')
                    r279_coBottom = _r279_t2.right;
                _r279_t5 = _r279_t5 + 1;
            }
            var r279_left = r1_fallback(r279_left, _r279_t1[0]);
            var r279_right = r1_fallback(r279_right, _r279_t1[1]);
            var r279_top = r1_fallback(r279_top, _r279_t1[2]);
            var r279_bottom = r1_fallback(r279_bottom, _r279_t1[3]);
            var r279_width = r1_fallback(r279_width, _r279_t1[4]);
            var r279_fine = r1_fallback(r279_fine, _r279_t1[5]);
            var r279_df = r1_fallback(r279_df, _r279_t1[6]);
            var r279_coBottom = r1_fallback(r279_coBottom, _r279_t1[7]);
            return function () {
                var _r285_t1;
                var _r285_t0 = this;
                var r285_currentGlyph = _r285_t0;
                var r285_fix = r271_TanSlope * r271_Stroke * r271_HVContrast * r279_width / r271_Stroke;
                var r285_sm = r271_SmallMSmooth(r279_df) + r285_fix / 2;
                r285_currentGlyph.include(r271_xn$spirooutline$1aao(r271_corner(r279_right - r279_width * r271_HVContrast, Math.min(r279_top - r285_sm - 0.1, r279_bottom)), r271_curl(r279_right - r279_width * r271_HVContrast, r279_top - r285_sm + r285_fix), r271_arcvh(8), r271_g2(r1_mix(r279_left, r279_right - r279_width * r271_HVContrast, 0.5), r279_top - r271_O - r279_width), r271_archv(8), r271_flat(r279_left, r279_top - r285_sm - r285_fix), r271_corner(r279_left, r279_top - r285_sm - r285_fix - 1), r279_coBottom !== void 0 ? [
                    r271_corner(r279_left, r279_coBottom),
                    r271_corner(r279_left - r279_fine, r279_coBottom)
                ] : [], r271_corner(r279_left - r279_fine, r279_top - r285_sm - 1), r271_curl(r279_left - r279_fine, r279_top - r285_sm), r271_arcvh(8), r271_g2(r1_mix(r279_left - r279_fine * r271_HVContrast, r279_right, 0.5), r279_top - r271_O), r271_archv(8), r271_flat(r279_right, r279_top - r285_sm), r271_corner(r279_right, Math.min(r279_top - r285_sm - 0.1, r279_bottom)), r271_close()));
                return void 0;
            };
        };
        var r271_RevSmallMShoulderSpiro = function () {
            var _r287_t6;
            var _r287_t7 = arguments;
            var _r287_t0 = [].slice.call(_r287_t7, 0);
            var _r287_t1 = [];
            var _r287_t2 = 0;
            while (_r287_t2 < _r287_t0.length) {
                if (!(_r287_t0[_r287_t2] instanceof r271_xn$NamedParameterPair$2Lrc9b))
                    _r287_t1.push(_r287_t0[_r287_t2]);
                _r287_t2 = _r287_t2 + 1;
            }
            var _r287_t3 = _r287_t0;
            var _r287_t4 = _r287_t3.length;
            var _r287_t5 = 0;
            while (_r287_t5 < _r287_t4) {
                _r287_t2 = _r287_t3[_r287_t5];
                if (_r287_t2 && _r287_t2 instanceof r271_xn$NamedParameterPair$2Lrc9b && _r287_t2.left === 'left')
                    r287_left = _r287_t2.right;
                if (_r287_t2 && _r287_t2 instanceof r271_xn$NamedParameterPair$2Lrc9b && _r287_t2.left === 'right')
                    r287_right = _r287_t2.right;
                if (_r287_t2 && _r287_t2 instanceof r271_xn$NamedParameterPair$2Lrc9b && _r287_t2.left === 'top')
                    r287_top = _r287_t2.right;
                if (_r287_t2 && _r287_t2 instanceof r271_xn$NamedParameterPair$2Lrc9b && _r287_t2.left === 'bottom')
                    r287_bottom = _r287_t2.right;
                if (_r287_t2 && _r287_t2 instanceof r271_xn$NamedParameterPair$2Lrc9b && _r287_t2.left === 'width')
                    r287_width = _r287_t2.right;
                if (_r287_t2 && _r287_t2 instanceof r271_xn$NamedParameterPair$2Lrc9b && _r287_t2.left === 'fine')
                    r287_fine = _r287_t2.right;
                if (_r287_t2 && _r287_t2 instanceof r271_xn$NamedParameterPair$2Lrc9b && _r287_t2.left === 'df')
                    r287_df = _r287_t2.right;
                if (_r287_t2 && _r287_t2 instanceof r271_xn$NamedParameterPair$2Lrc9b && _r287_t2.left === 'coBottom')
                    r287_coBottom = _r287_t2.right;
                _r287_t5 = _r287_t5 + 1;
            }
            var r287_left = r1_fallback(r287_left, _r287_t1[0]);
            var r287_right = r1_fallback(r287_right, _r287_t1[1]);
            var r287_top = r1_fallback(r287_top, _r287_t1[2]);
            var r287_bottom = r1_fallback(r287_bottom, _r287_t1[3]);
            var r287_width = r1_fallback(r287_width, _r287_t1[4]);
            var r287_fine = r1_fallback(r287_fine, _r287_t1[5]);
            var r287_df = r1_fallback(r287_df, _r287_t1[6]);
            var r287_coBottom = r1_fallback(r287_coBottom, _r287_t1[7]);
            return function () {
                var _r293_t1;
                var _r293_t0 = this;
                var r293_currentGlyph = _r293_t0;
                var r293_fix = r271_TanSlope * r271_Stroke * r271_HVContrast * r287_width / r271_Stroke;
                var r293_sm = r271_SmallMSmooth(r287_df) - r293_fix / 2;
                r293_currentGlyph.include(r271_xn$spirooutline$1aao(r271_corner(r287_left + r287_width * r271_HVContrast, Math.min(r287_top - r293_sm - 0.1, r287_bottom)), r271_curl(r287_left + r287_width * r271_HVContrast, r287_top - r293_sm - r293_fix), r271_arcvh(8), r271_g2(r1_mix(r287_right, r287_left + r287_width * r271_HVContrast, 0.5), r287_top - r271_O - r287_width), r271_archv(8), r271_flat(r287_right, r287_top - r293_sm - r293_fix), r271_corner(r287_right, r287_top - r293_sm - r293_fix - 1), r287_coBottom !== void 0 ? [
                    r271_corner(r287_right, r287_coBottom),
                    r271_corner(r287_right + r287_fine, r287_coBottom)
                ] : [], r271_corner(r287_right + r287_fine, r287_top - r293_sm - 1), r271_curl(r287_right + r287_fine, r287_top - r293_sm), r271_arcvh(8), r271_g2(r1_mix(r287_right + r287_fine * r271_HVContrast, r287_left, 0.5), r287_top - r271_O), r271_archv(8), r271_flat(r287_left, r287_top - r293_sm), r271_corner(r287_left, Math.min(r287_top - r293_sm - 0.1, r287_bottom)), r271_close()));
                return void 0;
            };
        };
        var r271_SmallMTopLeftSerif = function (r295_df, r295_top, r295_lbot) {
            var _r295_t0, _r295_t1;
            var r295_sf = r271_SerifFrame.fromDf(r295_df, r295_top, 0);
            return r295_sf.lt.outer;
        };
        var r271_SmallMBottomLeftSerif = function (r296_df, r296_top, r296_lbot) {
            var _r296_t0, _r296_t1;
            var r296_sf = r271_SerifFrame.fromDf(r296_df, r296_top, r296_lbot);
            return r296_sf.enoughSpaceForFullSerifs ? r296_sf.lb.full : r296_sf.lb.outer;
        };
        var r271_SmallMBottomMiddleSerif = function (r297_df, r297_top, r297_mbot) {
            var _r297_t0, _r297_t1;
            var r297_sf = r271_SerifFrame.fromDf(r297_df, r297_top, r297_mbot);
            return r297_sf.enoughSpaceForFullSerifs ? r297_sf.mb.full : r271_xn$noshape$3cah();
        };
        var r271_SmallMBottomRightSerif = function (r298_df, r298_top, r298_rbot) {
            var _r298_t0, _r298_t1;
            var r298_sf = r271_SerifFrame.fromDf(r298_df, r298_top, r298_rbot);
            return r298_sf.enoughSpaceForFullSerifs ? r298_sf.rb.full : r298_sf.rb.outer;
        };
        var r271_SmallMBottomMotionRightSerif = function (r299_df, r299_top, r299_rbot) {
            var _r299_t0, _r299_t1;
            var r299_sf = r271_SerifFrame.fromDf(r299_df, r299_top, r299_rbot);
            return r299_sf.rb.outer;
        };
        var r271_FullSerifs = function (r300_df, r300_top, r300_lbot, r300_mbot, r300_rbot, r300_tailed, r300_earless) {
            var _r300_t0, _r300_t1;
            return function () {
                var _r302_t1;
                var _r302_t0 = this;
                var r302_currentGlyph = _r302_t0;
                if (!r300_earless)
                    r302_currentGlyph.include(r271_SmallMTopLeftSerif(r300_df, r300_top, r300_lbot));
                r302_currentGlyph.include(r271_SmallMBottomLeftSerif(r300_df, r300_top, r300_lbot));
                r302_currentGlyph.include(r271_SmallMBottomMiddleSerif(r300_df, r300_top, r300_mbot));
                if (!r300_tailed)
                    r302_currentGlyph.include(r271_SmallMBottomRightSerif(r300_df, r300_top, r300_rbot));
                return void 0;
            };
        };
        var r271_AutoSerifs = function (r307_df, r307_top, r307_lbot, r307_mbot, r307_rbot, r307_tailed, r307_earless) {
            var _r307_t0, _r307_t1;
            return r271_SLAB ? r271_FullSerifs(r307_df, r307_top, r307_lbot, r307_mbot, r307_rbot, r307_tailed, r307_earless) : r271_xn$noshape$3cah();
        };
        var r271_LtSerifs = function (r308_df, r308_top, r308_lbot, r308_mbot, r308_rbot, r308_tailed, r308_earless) {
            var _r308_t0, _r308_t1;
            return function () {
                var _r310_t1;
                var _r310_t0 = this;
                var r310_currentGlyph = _r310_t0;
                r310_currentGlyph.include(r271_SmallMTopLeftSerif(r308_df, r308_top, r308_lbot));
                return void 0;
            };
        };
        var r271_LtRbSerifs = function (r312_df, r312_top, r312_lbot, r312_mbot, r312_rbot, r312_tailed, r312_earless) {
            var _r312_t0, _r312_t1;
            return function () {
                var _r314_t1;
                var _r314_t0 = this;
                var r314_currentGlyph = _r314_t0;
                r314_currentGlyph.include(r271_SmallMTopLeftSerif(r312_df, r312_top, r312_lbot));
                r314_currentGlyph.include(r271_SmallMBottomMotionRightSerif(r312_df, r312_top, r312_rbot));
                return void 0;
            };
        };
        var r271_dfM = function () {
            var _r317_t0, _r317_t1;
            return r271_DivFrame(r271_para.diversityM, 3);
        };
        var r271_SmallMArches = function (r318_top, r318_lbot, r318_mbot, r318_rbot, r318_df) {
            var _r318_t0, _r318_t1;
            return function () {
                var _r320_t1;
                var _r320_t0 = this;
                var r320_currentGlyph = _r320_t0;
                r320_currentGlyph.include(r271_SmallMShoulderSpiro(new r271_xn$NamedParameterPair$2Lrc9b('df', r318_df), new r271_xn$NamedParameterPair$2Lrc9b('left', r318_df.leftSB + r318_df.mvs * r271_HVContrast), new r271_xn$NamedParameterPair$2Lrc9b('right', r318_df.middle + r318_df.mvs / 2 * r271_HVContrast), new r271_xn$NamedParameterPair$2Lrc9b('top', r318_top), new r271_xn$NamedParameterPair$2Lrc9b('bottom', r318_mbot), new r271_xn$NamedParameterPair$2Lrc9b('width', r318_df.mvs), new r271_xn$NamedParameterPair$2Lrc9b('fine', r318_df.mvs * r271_ShoulderFine / r271_Stroke)));
                r320_currentGlyph.include(r271_SmallMShoulderSpiro(new r271_xn$NamedParameterPair$2Lrc9b('df', r318_df), new r271_xn$NamedParameterPair$2Lrc9b('left', r318_df.middle + r318_df.mvs * 0.5 * r271_HVContrast), new r271_xn$NamedParameterPair$2Lrc9b('right', r318_df.rightSB), new r271_xn$NamedParameterPair$2Lrc9b('top', r318_top), new r271_xn$NamedParameterPair$2Lrc9b('bottom', r318_rbot), new r271_xn$NamedParameterPair$2Lrc9b('width', r318_df.mvs), new r271_xn$NamedParameterPair$2Lrc9b('fine', r318_df.mvs * r271_ShoulderFine / r271_Stroke)));
                r320_currentGlyph.include(r271_tagged('barL', r271_VBar.l(r318_df.leftSB, r318_lbot, r318_top, r318_df.mvs)));
                return void 0;
            };
        };
        var r271_SmallMShortLegHeight = function (r338_top, r338_df) {
            var _r338_t0, _r338_t1;
            return (r338_top - r338_df.mvs) * 0.45;
        };
        var r271_SmallMSmoothHeight = function (r339_top, r339_df) {
            var _r339_t0, _r339_t1;
            return r339_top - r271_SmallMSmooth(r339_df) - r271_TanSlope * r271_Stroke;
        };
        var r271_EarlessCornerDoubleArchSmallMShape = function (r340_top, r340_lbot, r340_mbot, r340_rbot, r340_df) {
            var _r340_t0, _r340_t1;
            return function () {
                var _r342_t1;
                var _r342_t0 = this;
                var r342_currentGlyph = _r342_t0;
                r342_currentGlyph.include(r271_dispiro(r271_widths.rhs(r340_df.mvs), r271_g4(r340_df.leftSB, r340_top - r271_DToothlessRise), r271_g4.right.mid(r1_mix(r340_df.leftSB, r340_df.middle + r340_df.mvs / 2 * r271_HVContrast, 0.5), r340_top - r271_O, r271_heading(r271_Rightward)), r271_g4(r340_df.middle + r340_df.mvs / 2 * r271_HVContrast, r340_top - r271_DToothlessRise)));
                r342_currentGlyph.include(r271_dispiro(r271_widths.rhs(r340_df.mvs), r271_g4(r340_df.middle - r340_df.mvs / 2 * r271_HVContrast, r340_top - r271_DToothlessRise), r271_g4.right.mid(r1_mix(r340_df.rightSB, r340_df.middle - r340_df.mvs / 2 * r271_HVContrast, 0.5), r340_top - r271_O, r271_heading(r271_Rightward)), r271_archv(), r271_flat(r340_df.rightSB, r340_top - r271_SmallMSmooth(r340_df), r271_heading(r271_Downward)), r271_curl(r340_df.rightSB, r340_rbot, r271_heading(r271_Downward))));
                r342_currentGlyph.include(r271_tagged('barL', r271_VBar.l(r340_df.leftSB, r340_lbot, r340_top - r271_DToothlessRise, r340_df.mvs)));
                r342_currentGlyph.include(r271_tagged('barM', r271_VBar.m(r340_df.middle, r340_mbot, r340_top - r271_DToothlessRise, r340_df.mvs)));
                return void 0;
            };
        };
        var r271_EarlessRoundedDoubleArchSmallMShape = function (r347_top, r347_lbot, r347_mbot, r347_rbot, r347_df) {
            var _r347_t0, _r347_t1;
            return function () {
                var _r349_t1;
                var _r349_t0 = this;
                var r349_currentGlyph = _r349_t0;
                r349_currentGlyph.include(r271_union(r271_RevSmallMShoulderSpiro(new r271_xn$NamedParameterPair$2Lrc9b('df', r347_df), new r271_xn$NamedParameterPair$2Lrc9b('left', r347_df.leftSB), new r271_xn$NamedParameterPair$2Lrc9b('right', r347_df.middle - r347_df.mvs / 2 * r271_HVContrast), new r271_xn$NamedParameterPair$2Lrc9b('top', r347_top), new r271_xn$NamedParameterPair$2Lrc9b('bottom', r347_lbot), new r271_xn$NamedParameterPair$2Lrc9b('coBottom', r347_mbot), new r271_xn$NamedParameterPair$2Lrc9b('width', r347_df.mvs), new r271_xn$NamedParameterPair$2Lrc9b('fine', r347_df.mvs * r271_CThin)), r271_SmallMShoulderSpiro(new r271_xn$NamedParameterPair$2Lrc9b('df', r347_df), new r271_xn$NamedParameterPair$2Lrc9b('left', r347_df.middle + r347_df.mvs * 0.5 * r271_HVContrast), new r271_xn$NamedParameterPair$2Lrc9b('right', r347_df.rightSB), new r271_xn$NamedParameterPair$2Lrc9b('top', r347_top), new r271_xn$NamedParameterPair$2Lrc9b('bottom', r347_rbot), new r271_xn$NamedParameterPair$2Lrc9b('coBottom', r347_mbot), new r271_xn$NamedParameterPair$2Lrc9b('width', r347_df.mvs), new r271_xn$NamedParameterPair$2Lrc9b('fine', r347_df.mvs * r271_CThin))));
                return void 0;
            };
        };
        var r271_EarlessSingleArchSmallMShape = function (r367_top, r367_lbot, r367_mbot, r367_rbot, r367_df) {
            var _r367_t0, _r367_t1;
            return function () {
                var _r369_t1;
                var _r369_t0 = this;
                var r369_currentGlyph = _r369_t0;
                r369_currentGlyph.include(r271_tagged('barL', r271_VBar.l(r367_df.leftSB, r367_lbot, r367_top - r271_DToothlessRise, r367_df.mvs)));
                r369_currentGlyph.include(r271_tagged('barM', r271_VBar.m(r367_df.middle, r367_mbot, r367_top, r367_df.mvs)));
                r369_currentGlyph.include(r271_dispiro(r271_widths.rhs(r367_df.mvs), r271_g4(r367_df.leftSB, r367_top - r271_DToothlessRise), r271_g4(r367_df.middle - r271_CorrectionOMidS, r367_top - r271_O), r271_archv(), r271_flat(r367_df.rightSB, Math.max(r367_top - r271_SmallMSmooth(r367_df), r367_rbot + 0.1)), r271_curl(r367_df.rightSB, r367_rbot, r271_heading(r271_Downward))));
                return void 0;
            };
        };
        var r271_SmallMConfig = r1_SuffixCfg.weave({
            '': [
                r271_SmallMArches,
                0
            ],
            'earlessCornerDoubleArch': [
                r271_EarlessCornerDoubleArchSmallMShape,
                1
            ],
            'earlessRoundedDoubleArch': [
                r271_EarlessRoundedDoubleArchSmallMShape,
                1
            ],
            'earlessSingleArch': [
                r271_EarlessSingleArchSmallMShape,
                1
            ]
        }, {
            '': [0],
            'shortLeg': [1]
        }, {
            '': [0],
            'tailed': [1]
        }, {
            'serifless': [r271_xn$noshape$3cah],
            'serifed': [r271_FullSerifs],
            'topLeftSerifed': [r271_LtSerifs],
            'topLeftAndBottomRightSerifed': [r271_LtRbSerifs]
        });
        var _r271_t10 = _r1_t2(r271_SmallMConfig)[Symbol.iterator]();
        var _r271_t11 = void 0;
        while (!(_r271_t11 = _r271_t10.next()).done) {
            _r271_t12 = _r271_t11.value;
            r271_suffix = _r271_t12[0];
            r271_Body = _r271_t12[1][0][0];
            r271_earless = _r271_t12[1][0][1];
            _r271_t12[1][0];
            r271_shortLeg = _r271_t12[1][1][0];
            _r271_t12[1][1];
            r271_tailed = _r271_t12[1][2][0];
            _r271_t12[1][2];
            r271_Serifs = _r271_t12[1][3][0];
            _r271_t12[1][3];
            _r271_t12[1];
            (function () {
                var r377_mShapeBody = function (r378_df, r378_height) {
                    var _r378_t0, _r378_t1;
                    return function () {
                        var _r380_t1;
                        var _r380_t0 = this;
                        var r380_currentGlyph = _r380_t0;
                        r380_currentGlyph.include(r271_Body(r378_height, 0, r271_shortLeg ? r271_SmallMShortLegHeight(r378_height, r378_df) : 0, r271_tailed ? r271_SmallMSmoothHeight(r378_height, r378_df) + r271_O : 0, r378_df));
                        if (r271_tailed)
                            r380_currentGlyph.include(r271_RightwardTailedBar(r378_df.rightSB, 0, r271_SmallMSmoothHeight(r378_height, r378_df), new r271_xn$NamedParameterPair$2Lrc9b('sw', r378_df.mvs)));
                        r380_currentGlyph.include(r271_Serifs(r378_df, r378_height, 0, r271_shortLeg ? r271_SmallMShortLegHeight(r378_height, r378_df) : 0, 0, r271_tailed, r271_earless));
                        return void 0;
                    };
                };
                r271_xn$createAndSaveGlyphImpl$2Lrc3c('m.' + r271_suffix, null, function () {
                    var _r387_t1;
                    var _r387_t0 = this;
                    var r387_currentGlyph = _r387_t0;
                    var r387_df = r271_dfM();
                    r387_currentGlyph.setWidth(r387_df.width);
                    r387_currentGlyph.include(r387_df.markSet.e());
                    r387_currentGlyph.include(r377_mShapeBody(r387_df, r271_XH));
                    return void 0;
                });
                r271_xn$createAndSaveGlyphImpl$2Lrc3c('capitalSmallM.' + r271_suffix, null, function () {
                    var _r393_t1;
                    var _r393_t0 = this;
                    var r393_currentGlyph = _r393_t0;
                    var r393_df = r271_dfM();
                    r393_currentGlyph.setWidth(r393_df.width);
                    r393_currentGlyph.include(r393_df.markSet.capital());
                    r393_currentGlyph.include(r377_mShapeBody(r393_df, r271_CAP));
                    return void 0;
                });
                r271_xn$createAndSaveGlyphImpl$2Lrc3c('mLTail.' + r271_suffix, null, function () {
                    var _r399_t1;
                    var _r399_t0 = this;
                    var r399_currentGlyph = _r399_t0;
                    var r399_df = r271_dfM();
                    r399_currentGlyph.setWidth(r399_df.width);
                    r399_currentGlyph.include(r399_df.markSet.e());
                    r399_currentGlyph.include(r271_xn$referglyph$1aao('m.' + r271_suffix));
                    r399_currentGlyph.ejectTagged('serifRB');
                    r399_currentGlyph.include(r271_PalatalHook.rExt(r399_df.rightSB, 0, new r271_xn$NamedParameterPair$2Lrc9b('sw', r399_df.mvs)));
                    return void 0;
                });
                r271_xn$createAndSaveGlyphImpl$2Lrc3c('turnmLeg.' + r271_suffix, null, function () {
                    var _r408_t1;
                    var _r408_t0 = this;
                    var r408_currentGlyph = _r408_t0;
                    var r408_df = r271_dfM();
                    r408_currentGlyph.setWidth(r408_df.width);
                    r408_currentGlyph.include(r408_df.markSet.p());
                    r408_currentGlyph.include(r271_xn$referglyph$1aao('m.' + r271_suffix));
                    r408_currentGlyph.ejectTagged('serifLT');
                    r408_currentGlyph.include(r271_FlipAround(r408_df.middle, r271_XH / 2));
                    r408_currentGlyph.include(r271_VBar.r(r408_df.rightSB, r271_Descender, r271_XH, r408_df.mvs));
                    var r408_sf = r271_SerifFrame.fromDf(r408_df, r271_XH, r271_Descender);
                    if (r271_SLAB && r271_Serifs === r271_AutoSerifs)
                        r408_currentGlyph.include(r408_sf.rb.fullSide);
                    if (r271_Serifs === r271_LtRbSerifs || r271_Serifs === r271_LtSerifs)
                        r408_currentGlyph.include(r408_sf.rb.outer);
                    return void 0;
                });
                r271_xn$createAndSaveGlyphImpl$2Lrc3c('turnmSideways.' + r271_suffix, null, function () {
                    var _r419_t1;
                    var _r419_t0 = this;
                    var r419_currentGlyph = _r419_t0;
                    var r419_realHeight = r271_XH * r271_para.diversityM;
                    var r419_realTop = r271_XH / 2 + r419_realHeight / 2;
                    var r419_realBot = r271_XH / 2 - r419_realHeight / 2;
                    var r419_df = r271_DivFrame(r419_realHeight / r271_Width, 3, r271_XH * 0.1 / r271_SB);
                    r419_currentGlyph.include(r419_df.markSet.e());
                    r419_currentGlyph.include(r271_PointingTo(r271_Width, r419_realTop, r271_Width, r419_realBot, function () {
                        var _r422_t0, _r422_t1;
                        return function () {
                            var _r424_t1;
                            var _r424_t0 = this;
                            var r424_currentGlyph = _r424_t0;
                            r424_currentGlyph.include(r377_mShapeBody(r419_df, r271_Width - r271_SB));
                            r424_currentGlyph.include(r271_FlipAround(r419_df.middle, (r271_Width - r271_SB) / 2));
                            r424_currentGlyph.include(r271_Translate(0, r271_SB / 2));
                            return void 0;
                        };
                    }));
                    return void 0;
                });
                return r271_xn$createAndSaveGlyphImpl$2Lrc3c('mCrossedTail.' + r271_suffix, null, function () {
                    var r430_sf, _r430_t1;
                    var _r430_t0 = this;
                    var r430_currentGlyph = _r430_t0;
                    var r430_df = r271_DivFrame(r271_para.diversityM, 4);
                    r430_currentGlyph.setWidth(r430_df.width);
                    r430_currentGlyph.include(r430_df.markSet.e());
                    var r430_fine = r271_AdviceStroke(5.5, r430_df.div);
                    var r430_rinner = r271_XH * 0.15 - r430_fine * 0.75;
                    var r430_m1 = r430_df.rightSB - r430_df.mvs * r271_HVContrast;
                    var r430_m2 = r1_mix(r430_df.middle + 0.5 * r430_df.mvs * r271_HVContrast, r430_m1, 0.35) - 0.5 * r430_fine * r271_HVContrast;
                    var r430_x2 = r430_df.rightSB + r271_SideJut;
                    var r430_y2 = r430_rinner * 2 + r430_fine - r271_O;
                    r430_currentGlyph.include(r271_Body(r271_XH, 0, r271_shortLeg ? r271_SmallMShortLegHeight(r271_XH, r430_df) : 0, r430_y2 + r271_O, r430_df));
                    r430_currentGlyph.include(r271_dispiro(r271_straight.down.start(r430_df.rightSB, r430_y2 + r271_O, r271_widths.rhs.heading(r430_df.mvs, r271_Downward)), r271_CurlyTail(r430_fine, r430_rinner, r430_m1, 0, r430_m2, r430_x2, r430_y2, new r271_xn$NamedParameterPair$2Lrc9b('adj', 0))));
                    r430_currentGlyph.include(r271_Serifs(r430_df, r271_XH, 0, r271_shortLeg ? r271_SmallMShortLegHeight(r271_XH, r430_df) : 0, 0, true, r271_earless));
                    if (r271_SLAB && !r271_shortLeg && r271_Serifs === r271_FullSerifs) {
                        r430_sf = r271_SerifFrame.fromDf(r430_df, r271_XH, 0);
                        if (r430_sf.enoughSpaceForFullSerifs && r430_m2 - (r430_df.middle + r430_sf.jutIn) < 0.01 * r271_Width) {
                            r430_currentGlyph.ejectTagged('serifMB');
                            r430_currentGlyph.include(r430_sf.mb.left);
                        }
                    }
                    return void 0;
                });
            }());
        }
        r271_xn$selectvariant$7Hrq('m', 'm');
        r271_xn$selectvariant$7Hrq('m/tailless', new r271_xn$NamedParameterPair$2Lrc9b('shapeFrom', 'm'));
        r271_xn$selectvariant$7Hrq('capitalSmallM', new r271_xn$NamedParameterPair$2Lrc9b('follow', 'm'));
        r271_xn$linkreducedvariant$5sIl8('m/sansSerif', 'm', r1_MathSansSerif);
        r271_xn$selectvariant$7Hrq('cyrl/te.italic', new r271_xn$NamedParameterPair$2Lrc9b('shapeFrom', 'm'));
        r271_alias('cyrl/te.BGR', null, 'cyrl/te.italic');
        var _r271_t16 = r271_xn$derivecomposites$7Hrq;
        var _r271_t17 = 'cyrl/teDescender.italic';
        var _r271_t18 = null;
        var _r271_t19 = 'cyrl/te.italic';
        var _r271_t22 = function () {
            var r443_df = r271_DivFrame(r271_para.diversityM, 3);
            return r271_CyrDescender.rSideJut(r443_df.rightSB, 0, new r271_xn$NamedParameterPair$2Lrc9b('refSw', r443_df.mvs));
        }();
        _r271_t16(_r271_t17, _r271_t18, _r271_t19, _r271_t22);
        var _r271_t23 = r271_xn$derivecomposites$7Hrq;
        var _r271_t24 = 'mPalatalHook';
        var _r271_t25 = 7558;
        var _r271_t26 = 'm/tailless';
        var _r271_t29 = function () {
            var r446_df = r271_DivFrame(r271_para.diversityM, 3);
            return r271_PalatalHook.r(new r271_xn$NamedParameterPair$2Lrc9b('xLink', r446_df.rightSB), new r271_xn$NamedParameterPair$2Lrc9b('x', r446_df.rightSB + r271_SideJut), new r271_xn$NamedParameterPair$2Lrc9b('y', 0), new r271_xn$NamedParameterPair$2Lrc9b('refSw', r446_df.mvs));
        }();
        _r271_t23(_r271_t24, _r271_t25, _r271_t26, _r271_t29);
        r271_xn$selectvariant$7Hrq('mLTail', 625);
        r271_xn$selectvariant$7Hrq('turnmLeg', 624, new r271_xn$NamedParameterPair$2Lrc9b('follow', 'm'));
        r271_xn$selectvariant$7Hrq('turnmSideways', 7455, new r271_xn$NamedParameterPair$2Lrc9b('follow', 'm'));
        r271_xn$selectvariant$7Hrq('mCrossedTail', 43834, new r271_xn$NamedParameterPair$2Lrc9b('follow', 'mLTail'));
        r271_turned('turnm', 623, 'm', r271_HalfAdvance, r271_XH / 2);
        r271_turned('capitalTurnm', 412, 'capitalSmallM', r271_HalfAdvance, r271_CAP / 2);
        r271_xn$derivecomposites$7Hrq('currency/millSign', 8357, 'm', 'shortSlash');
        var _r271_t13 = r271_xn$Capture$2Lrc8['Letter-Blackboard'].resolve();
        var r271_BBS = _r271_t13.BBS;
        var r271_BBD = _r271_t13.BBD;
        var r271_BBBarLeft = _r271_t13.BBBarLeft;
        return r271_xn$createAndSaveGlyphImpl$2Lrc3c('mathbb/m', 120158, function () {
            var _r457_t1;
            var _r457_t0 = this;
            var r457_currentGlyph = _r457_t0;
            var r457_df = r271_DivFrame(1, 3);
            var r457_bbs = r271_AdviceStroke(8);
            var r457_bbd = r271_BBD * Math.min(3 / 4, r457_bbs / r271_BBS);
            var r457_xMid = r1_mix(r457_df.leftSB + r457_bbd + r457_bbs * r271_HVContrast, r457_df.rightSB, 0.5);
            r457_currentGlyph.setWidth(r457_df.width);
            r457_currentGlyph.include(r457_df.markSet.e());
            r457_currentGlyph.include(r271_BBBarLeft(r457_df.leftSB, 0, r271_XH, new r271_xn$NamedParameterPair$2Lrc9b('bbd', r457_bbd), new r271_xn$NamedParameterPair$2Lrc9b('bbs', r457_bbs)));
            r457_currentGlyph.include(r271_union(r271_HBar.b(r457_xMid - r457_bbd, r457_xMid, 0, r457_bbs), r271_nShoulder(new r271_xn$NamedParameterPair$2Lrc9b('stroke', r457_bbs), new r271_xn$NamedParameterPair$2Lrc9b('left', r457_df.leftSB + r457_bbd + r457_bbs * r271_HVContrast), new r271_xn$NamedParameterPair$2Lrc9b('right', r457_xMid), new r271_xn$NamedParameterPair$2Lrc9b('fine', r271_ShoulderFine)), r271_intersection(r271_VBar.r(r457_xMid - r457_bbd, 0, r271_XH, r457_bbs), r271_nShoulderMask(new r271_xn$NamedParameterPair$2Lrc9b('stroke', r457_bbs), new r271_xn$NamedParameterPair$2Lrc9b('left', r457_df.leftSB + r457_bbd + r457_bbs * r271_HVContrast + 1), new r271_xn$NamedParameterPair$2Lrc9b('right', r457_xMid - 1), new r271_xn$NamedParameterPair$2Lrc9b('top', r271_XH - 1), new r271_xn$NamedParameterPair$2Lrc9b('fine', r271_ShoulderFine)))));
            r457_currentGlyph.include(r271_union(r271_HBar.b(r457_df.rightSB - r457_bbd, r457_df.rightSB, 0, r457_bbs), r271_nShoulder(new r271_xn$NamedParameterPair$2Lrc9b('leftY0', 0), new r271_xn$NamedParameterPair$2Lrc9b('stroke', r457_bbs), new r271_xn$NamedParameterPair$2Lrc9b('left', r457_xMid), new r271_xn$NamedParameterPair$2Lrc9b('right', r457_df.rightSB), new r271_xn$NamedParameterPair$2Lrc9b('fine', r271_ShoulderFine)), r271_intersection(r271_VBar.r(r457_df.rightSB - r457_bbd, 0, r271_XH, r457_bbs), r271_nShoulderMask(new r271_xn$NamedParameterPair$2Lrc9b('stroke', r457_bbs), new r271_xn$NamedParameterPair$2Lrc9b('left', r457_xMid + 1), new r271_xn$NamedParameterPair$2Lrc9b('right', r457_df.rightSB - 1), new r271_xn$NamedParameterPair$2Lrc9b('top', r271_XH - 1), new r271_xn$NamedParameterPair$2Lrc9b('fine', r271_ShoulderFine)))));
            return void 0;
        });
    });
    return void 0;
});
