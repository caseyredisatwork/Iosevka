'use strict';
import * as _s0_t0 from '../../../support/utils.mjs';
import * as _s0_t1 from '../../../support/gr.mjs';
import * as _s0_t2 from '../../../support/util/mask-bit.mjs';
var _s0_t3;
export {
    _s0_t3 as apply
};
var r1_apply, _r1_t0, _r1_t1, _r1_t2, _r1_t3, _r1_t4, _r1_t5, _r1_t6, _r1_t7;
var _r1_t8 = _s0_t0;
var r1_mix = _r1_t8.mix;
var r1_linreg = _r1_t8.linreg;
var r1_clamp = _r1_t8.clamp;
var r1_fallback = _r1_t8.fallback;
var _r1_t9 = _s0_t1;
var r1_Dotless = _r1_t9.Dotless;
var r1_CvDecompose = _r1_t9.CvDecompose;
var _r1_t10 = _s0_t2;
var r1_maskBit = _r1_t10.maskBit;
var r1_maskBits = _r1_t10.maskBits;
var r1_popCountByte = _r1_t10.popCountByte;
var r1_xn$GlyphBlocks$2Lrc2b = [];
_s0_t3 = r1_apply = function () {
    var r267_block, _r267_t4, _r267_t6;
    var _r267_t3 = this;
    var _r267_t0 = r1_xn$GlyphBlocks$2Lrc2b;
    var _r267_t1 = _r267_t0.length;
    var _r267_t2 = 0;
    var _r267_t5 = _r267_t2 < _r267_t1;
    while (_r267_t5) {
        _r267_t6 = (r267_block = _r267_t0[_r267_t2], r267_block(_r267_t3), _r267_t2 = _r267_t2 + 1);
        _r267_t5 = _r267_t2 < _r267_t1;
    }
    return _r267_t6;
};
r1_xn$GlyphBlocks$2Lrc2b.push(function (r271_xn$Capture_Ext$2Lrc2b) {
    var _r271_t0, _r271_t1;
    r271_xn$Capture_Ext$2Lrc2b['$defineGlyphBlockImpl$'](r271_xn$Capture_Ext$2Lrc2b, 'Letter-Latin-Long-S', function (r272_xn$Capture$2Lrc8, r272_xn$ExportCapture$2Lrc4b) {
        var r272_suffix, r272_serifStyle, r272_pShift, _r272_t12, _r272_t15, _r272_t16, _r272_t17, _r272_t18, _r272_tag19, _r272_t20, _r272_tag21;
        var _r272_t0 = r272_xn$Capture$2Lrc8;
        var r272_xn$createAndSaveGlyphImpl$2Lrc3c = _r272_t0['$createAndSaveGlyphImpl$'];
        var r272_xn$NamedParameterPair$2Lrc9b = _r272_t0['$NamedParameterPair$'];
        var r272_xn$assignUnicodeImpl$2Lrc8b = _r272_t0['$assignUnicodeImpl$'];
        var r272_xn$execState$2Lrc0b = _r272_t0['$execState$'];
        var r272_MarkSet = _r272_t0.MarkSet;
        var r272_tagged = _r272_t0.tagged;
        var r272_DivFrame = _r272_t0.DivFrame;
        var _r272_t1 = r272_xn$Capture$2Lrc8.Metrics;
        var r272_DesignParameters = _r272_t1.DesignParameters;
        var r272_Width = _r272_t1.Width;
        var r272_XH = _r272_t1.XH;
        var r272_Ascender = _r272_t1.Ascender;
        var r272_Descender = _r272_t1.Descender;
        var r272_Translate = _r272_t1.Translate;
        var r272_TanSlope = _r272_t1.TanSlope;
        var r272_HVContrast = _r272_t1.HVContrast;
        var r272_Upward = _r272_t1.Upward;
        var r272_Downward = _r272_t1.Downward;
        var r272_O = _r272_t1.O;
        var r272_Hook = _r272_t1.Hook;
        var r272_HookX = _r272_t1.HookX;
        var r272_Stroke = _r272_t1.Stroke;
        var r272_OverlayPos = _r272_t1.OverlayPos;
        var r272_LongJut = _r272_t1.LongJut;
        var r272_SLAB = _r272_t1.SLAB;
        var r272_IBalance2 = _r272_t1.IBalance2;
        var r272_JBalance = _r272_t1.JBalance;
        var r272_RBalance2 = _r272_t1.RBalance2;
        var r272_FBalance = _r272_t1.FBalance;
        var r272_HalfStroke = _r272_t1.HalfStroke;
        var r272_RightSB = _r272_t1.RightSB;
        var r272_Middle = _r272_t1.Middle;
        var r272_SideJut = _r272_t1.SideJut;
        var r272_ArchDepthA = _r272_t1.ArchDepthA;
        var r272_AdviceStroke = _r272_t1.AdviceStroke;
        var r272_MidJutCenter = _r272_t1.MidJutCenter;
        var _r272_t2 = r272_xn$Capture$2Lrc8.SpiroFns;
        var r272_g4 = _r272_t2.g4;
        var r272_flat = _r272_t2.flat;
        var r272_curl = _r272_t2.curl;
        var r272_widths = _r272_t2.widths;
        var r272_heading = _r272_t2.heading;
        var r272_archv = _r272_t2.archv;
        var r272_dispiro = _r272_t2.dispiro;
        var _r272_t3 = r272_xn$Capture$2Lrc8.BooleFns;
        var r272_union = _r272_t3.union;
        var r272_intersection = _r272_t3.intersection;
        var _r272_t4 = r272_xn$Capture$2Lrc8.CommonShapes.resolve();
        var r272_HSerif = _r272_t4.HSerif;
        var r272_HBar = _r272_t4.HBar;
        var r272_VBar = _r272_t4.VBar;
        var r272_hookstart = _r272_t4.hookstart;
        var r272_WithTransform = _r272_t4.WithTransform;
        var r272_MaskAbove = _r272_t4.MaskAbove;
        var r272_MaskBelow = _r272_t4.MaskBelow;
        var r272_MaskLeft = _r272_t4.MaskLeft;
        var _r272_t5 = r272_xn$Capture$2Lrc8['Common-Derivatives'].resolve();
        var r272_xn$selectvariant$7Hrq = _r272_t5['select-variant'];
        var r272_alias = _r272_t5.alias;
        var r272_xn$derivecomposites$7Hrq = _r272_t5['derive-composites'];
        var _r272_t6 = r272_xn$Capture$2Lrc8['Letter-Shared-Shapes'].resolve();
        var r272_CurlyTail = _r272_t6.CurlyTail;
        var r272_FlatHookDepth = _r272_t6.FlatHookDepth;
        var r272_LetterBarOverlay = _r272_t6.LetterBarOverlay;
        var _r272_t7 = r272_xn$Capture$2Lrc8['Letter-Shared-Shapes'].resolve();
        var r272_PalatalHook = _r272_t7.PalatalHook;
        var r272_RetroflexHook = _r272_t7.RetroflexHook;
        var r272_VerticalHook = _r272_t7.VerticalHook;
        var _r272_t8 = r272_xn$Capture$2Lrc8['Letter-Latin-Lower-F'].resolve();
        var r272_StdSmallFBarLeftPos = _r272_t8.StdSmallFBarLeftPos;
        var r272_StdSmallFBarLeftPos0 = _r272_t8.StdSmallFBarLeftPos0;
        var r272_fbar = _r272_t8.fbar;
        var _r272_t9 = r272_xn$Capture$2Lrc8['Letter-Latin-Lower-F'].resolve();
        var r272_SmallFDiagonalTail = _r272_t9.SmallFDiagonalTail;
        var r272_SLAB_SERIFLESS = 0;
        var r272_SLAB_BOTTOM = 1;
        var r272_SLAB_MIDDLE = 2;
        var r272_SLAB_MIDDLE_XH = 4;
        var r272_SLAB_DOUBLE = r272_SLAB_BOTTOM + r272_SLAB_MIDDLE;
        var r272_SLAB_DOUBLE_XH = r272_SLAB_BOTTOM + r272_SLAB_MIDDLE_XH;
        var r272_LongSUpperHalf = function (r279_sign, r279_x, r279_top, r279_bottom, r279_hookX, r279_hookY, r279__sw) {
            var _r279_t0, _r279_t1;
            var r279_hd = r272_FlatHookDepth(r272_DivFrame(1));
            var r279_sw = r1_fallback(r279__sw, r272_Stroke);
            return r272_dispiro(r272_widths.center(r279_sw), r272_flat(r279_x + r279_sign * r279_hookX, r279_top - r279_sw / 2), r272_curl(r279_x + r279_sign * Math.min(r279_hd.x - 0.25 * r279_sw * r272_HVContrast, r279_hookX - 0.1), r279_top - r279_sw / 2), r272_archv.superness(r272_DesignParameters.tightHookSuperness), r272_flat(r279_x, r279_top - r279_sw / 2 - Math.min(r279_hd.y, r279_hookY)), r272_curl(r279_x, r279_bottom, r272_heading(r272_Downward)));
        };
        var r272_LongSLowerHalf = function (r280_sign, r280_x, r280_top, r280_bottom, r280_hookX, r280_hookY, r280__sw) {
            var _r280_t0, _r280_t1;
            var r280_hd = r272_FlatHookDepth(r272_DivFrame(1));
            var r280_sw = r1_fallback(r280__sw, r272_Stroke);
            return r272_dispiro(r272_widths.center(r280_sw), r272_flat(r280_x - r280_sign * r280_hookX, r280_bottom + r280_sw / 2), r272_curl(r280_x - r280_sign * Math.min(r280_hd.x - 0.25 * r280_sw * r272_HVContrast, r280_hookX - 0.1), r280_bottom + r280_sw / 2), r272_archv.superness(r272_DesignParameters.tightHookSuperness), r272_flat(r280_x, r280_bottom + r280_sw / 2 + Math.min(r280_hd.y, r280_hookY)), r272_curl(r280_x, r280_top, r272_heading(r272_Upward)));
        };
        r272_xn$ExportCapture$2Lrc4b(function () {
            var _r282_t0, _r282_t1;
            return { 'LongSShape': r272_LongSShape };
        });
        var r272_LongSShape = function (r283_top, r283_bottom, r283_hookx, r283_hooky, r283_fine) {
            var _r283_t0, _r283_t1;
            return r272_union(r272_LongSUpperHalf(1, r272_Middle, r283_top, r1_mix(r283_top, r283_bottom, 0.5), r283_hookx, r283_hooky, r283_fine), r272_LongSLowerHalf(1, r272_Middle, r1_mix(r283_top, r283_bottom, 0.5), r283_bottom, r283_hookx, r283_hooky, r283_fine));
        };
        var r272_RevLongSShape = function (r284_top, r284_bottom, r284_hookx, r284_hooky, r284_fine) {
            var _r284_t0, _r284_t1;
            return r272_union(r272_LongSUpperHalf(-1, r272_Middle, r284_top, r1_mix(r284_top, r284_bottom, 0.5), r284_hookx, r284_hooky, r284_fine), r272_LongSLowerHalf(-1, r272_Middle, r1_mix(r284_top, r284_bottom, 0.5), r284_bottom, r284_hookx, r284_hooky, r284_fine));
        };
        var r272_StandardSerifs = function (r285_m0, r285_fSlab) {
            var _r285_t0, _r285_t1;
            return function () {
                var _r287_t1;
                var _r287_t0 = this;
                var r287_currentGlyph = _r287_t0;
                var r287_m = r285_m0 + r272_HVContrast * r272_HalfStroke;
                var r287_serifLength = 1 * r272_MidJutCenter;
                var r287_xSerifPos = r287_m + (r272_Middle - r287_m) / r272_Width * r287_serifLength;
                if (r1_maskBits(r285_fSlab, r272_SLAB_BOTTOM))
                    r287_currentGlyph.include(r272_tagged('serifLB', r272_HSerif.mb(r287_xSerifPos, 0, r287_serifLength)));
                if (r1_maskBits(r285_fSlab, r272_SLAB_MIDDLE))
                    r287_currentGlyph.include(r272_tagged('serifLM', r272_intersection(r272_MaskLeft(r287_m + 0.1), r272_HSerif.mt(r287_xSerifPos, r272_fbar, r287_serifLength))));
                if (r1_maskBits(r285_fSlab, r272_SLAB_MIDDLE_XH))
                    r287_currentGlyph.include(r272_tagged('serifLM', r272_intersection(r272_MaskLeft(r287_m + 0.1), r272_HSerif.mt(r287_xSerifPos, r272_XH, r287_serifLength))));
                return void 0;
            };
        };
        var r272_LongSBentHookBase = function (r291_y0, r291_m, r291_fSlab) {
            var _r291_t0, _r291_t1;
            return function () {
                var _r293_t1;
                var _r293_t0 = this;
                var r293_currentGlyph = _r293_t0;
                r293_currentGlyph.include(r272_dispiro(r272_widths.lhs(), r272_g4(r272_RightSB + r272_RBalance2 + Math.max(0, r291_m - r272_StdSmallFBarLeftPos0()), r272_Ascender - r272_Hook), r272_hookstart(r272_Ascender - r272_O), r272_flat(r291_m, r272_Ascender - r272_ArchDepthA), r272_curl(r291_m, 0, r272_heading(r272_Downward))));
                r293_currentGlyph.setBaseAnchor('overlay', r291_m + r272_Stroke * 0.65 * r272_HVContrast, r272_Ascender * r272_OverlayPos);
                r293_currentGlyph.include(r272_StandardSerifs(r291_m, r291_fSlab));
                return void 0;
            };
        };
        var r272_LongSBentHookOverlayBar = function (r297_m) {
            var _r297_t0, _r297_t1;
            return r272_LetterBarOverlay.m.in(new r272_xn$NamedParameterPair$2Lrc9b('x', r297_m + r272_HalfStroke * r272_HVContrast), new r272_xn$NamedParameterPair$2Lrc9b('bot', 0.75 * r272_XH - r272_Stroke), new r272_xn$NamedParameterPair$2Lrc9b('top', r272_Ascender - r272_Stroke), new r272_xn$NamedParameterPair$2Lrc9b('py', r272_OverlayPos));
        };
        var r272_LongSSymmetricOverlayBar = function (r302_m) {
            var _r302_t0, _r302_t1;
            return r272_LetterBarOverlay.m.in(new r272_xn$NamedParameterPair$2Lrc9b('x', r302_m), new r272_xn$NamedParameterPair$2Lrc9b('bot', 0.75 * r272_XH - r272_Stroke), new r272_xn$NamedParameterPair$2Lrc9b('top', r272_Ascender - r272_Stroke), new r272_xn$NamedParameterPair$2Lrc9b('py', r272_OverlayPos));
        };
        var r272_LongSFlatHookNoTailShape = function (r307_m, r307_yBot, r307_fSlab) {
            var _r307_t0, _r307_t1;
            return function () {
                var _r309_t1;
                var _r309_t0 = this;
                var r309_currentGlyph = _r309_t0;
                var r309_hd = r272_FlatHookDepth(r272_DivFrame(1));
                r309_currentGlyph.include(r272_dispiro(r272_widths.lhs(), r272_flat(r272_RightSB, r272_Ascender), r272_curl(r307_m + r309_hd.x, r272_Ascender), r272_archv(), r272_flat(r307_m, r272_Ascender - r309_hd.y), r272_curl(r307_m, r307_yBot, r272_heading(r272_Downward))));
                r309_currentGlyph.setBaseAnchor('overlay', r307_m + r272_Stroke * 0.65 * r272_HVContrast, r272_Ascender * r272_OverlayPos);
                r309_currentGlyph.include(r272_StandardSerifs(r307_m, r307_fSlab));
                return void 0;
            };
        };
        var r272_SerifSuffixes = {
            'Serifless': [
                r272_SLAB_SERIFLESS,
                1
            ],
            'MiddleSerifed': [
                r272_SLAB_MIDDLE,
                0.5
            ],
            'MiddleSerifedXH': [
                r272_SLAB_MIDDLE_XH,
                0.5
            ],
            'BottomSerifed': [
                r272_SLAB_BOTTOM,
                0.5
            ],
            'DoubleSerifed': [
                r272_SLAB_DOUBLE,
                0.5
            ],
            'DoubleSerifedXH': [
                r272_SLAB_DOUBLE_XH,
                0.5
            ]
        };
        var _r272_t10 = Object.entries(r272_SerifSuffixes)[Symbol.iterator]();
        var _r272_t11 = void 0;
        while (!(_r272_t11 = _r272_t10.next()).done) {
            _r272_t12 = _r272_t11.value;
            r272_suffix = _r272_t12[0];
            r272_serifStyle = _r272_t12[1][0];
            r272_pShift = _r272_t12[1][1];
            _r272_t12[1];
            (function () {
                r272_xn$createAndSaveGlyphImpl$2Lrc3c('longs.bentHook' + r272_suffix, null, function () {
                    var _r318_t1;
                    var _r318_t0 = this;
                    var r318_currentGlyph = _r318_t0;
                    r318_currentGlyph.include(r272_MarkSet.b());
                    var r318_m = r272_Middle - r272_JBalance - r272_HalfStroke * r272_HVContrast;
                    r318_currentGlyph.include(r272_LongSBentHookBase(0, r318_m, r272_serifStyle));
                    r272_xn$createAndSaveGlyphImpl$2Lrc3c('longsbar.bentHook' + r272_suffix, null, function () {
                        var _r323_t1;
                        var _r323_t0 = this;
                        _r323_t0.include(r318_currentGlyph, true, true);
                        _r323_t0.cloneRankFromGlyph(r318_currentGlyph);
                        return _r323_t0.include(r272_LongSBentHookOverlayBar(r318_m));
                    });
                    return void 0;
                });
                r272_xn$createAndSaveGlyphImpl$2Lrc3c('longs.flatHook' + r272_suffix, null, function () {
                    var _r326_t1;
                    var _r326_t0 = this;
                    var r326_currentGlyph = _r326_t0;
                    r326_currentGlyph.include(r272_MarkSet.b());
                    var r326_m = r272_Middle - r272_pShift * (r272_JBalance + r272_HalfStroke * r272_HVContrast);
                    r326_currentGlyph.include(r272_LongSFlatHookNoTailShape(r326_m, 0, r272_serifStyle));
                    r272_xn$createAndSaveGlyphImpl$2Lrc3c('longsbar.flatHook' + r272_suffix, null, function () {
                        var _r331_t1;
                        var _r331_t0 = this;
                        _r331_t0.include(r326_currentGlyph, true, true);
                        _r331_t0.cloneRankFromGlyph(r326_currentGlyph);
                        return _r331_t0.include(r272_LongSBentHookOverlayBar(r326_m));
                    });
                    return void 0;
                });
                return r272_xn$createAndSaveGlyphImpl$2Lrc3c('longs.flatHookExt' + r272_suffix, null, function () {
                    var _r334_t1;
                    var _r334_t0 = this;
                    var r334_currentGlyph = _r334_t0;
                    r334_currentGlyph.include(r272_MarkSet.b());
                    var r334_m = r272_Middle - r272_pShift * (r272_JBalance + r272_HalfStroke * r272_HVContrast);
                    r334_currentGlyph.include(r272_LongSFlatHookNoTailShape(r334_m, 0, r272_serifStyle));
                    r334_currentGlyph.include(r272_HBar.t(r272_RightSB, 2 * r272_Width, r272_Ascender));
                    return void 0;
                });
            }());
        }
        var r272_SerifSuffixesDescending = {
            '': [
                r272_SLAB_SERIFLESS,
                1
            ],
            'MiddleSerifed': [
                r272_SLAB_MIDDLE,
                0.5
            ],
            'MiddleSerifedXH': [
                r272_SLAB_MIDDLE_XH,
                0.5
            ]
        };
        var _r272_t13 = Object.entries(r272_SerifSuffixesDescending)[Symbol.iterator]();
        var _r272_t14 = void 0;
        while (!(_r272_t14 = _r272_t13.next()).done) {
            _r272_t15 = _r272_t14.value;
            r272_suffix = _r272_t15[0];
            r272_serifStyle = _r272_t15[1][0];
            r272_pShift = _r272_t15[1][1];
            _r272_t15[1];
            (function () {
                r272_xn$createAndSaveGlyphImpl$2Lrc3c('longs.flatHookDescending' + r272_suffix, null, function () {
                    var _r343_t1;
                    var _r343_t0 = this;
                    var r343_currentGlyph = _r343_t0;
                    r343_currentGlyph.include(r272_MarkSet.bp());
                    var r343_m = r272_Middle - r272_pShift * (r272_JBalance + r272_HalfStroke * r272_HVContrast);
                    r343_currentGlyph.include(r272_LongSFlatHookNoTailShape(r343_m, r272_Descender, false));
                    r343_currentGlyph.include(r272_StandardSerifs(r343_m, r272_serifStyle));
                    r272_xn$createAndSaveGlyphImpl$2Lrc3c('longsbar.flatHookDescending' + r272_suffix, null, function () {
                        var _r349_t1;
                        var _r349_t0 = this;
                        _r349_t0.include(r343_currentGlyph, true, true);
                        _r349_t0.cloneRankFromGlyph(r343_currentGlyph);
                        return _r349_t0.include(r272_LongSBentHookOverlayBar(r343_m));
                    });
                    return void 0;
                });
                r272_xn$createAndSaveGlyphImpl$2Lrc3c('longs.flatHookDescendingExt' + r272_suffix, null, function () {
                    var _r352_t1;
                    var _r352_t0 = this;
                    var r352_currentGlyph = _r352_t0;
                    r352_currentGlyph.include(r272_MarkSet.bp());
                    var r352_m = r272_Middle - r272_pShift * (r272_JBalance + r272_HalfStroke * r272_HVContrast);
                    r352_currentGlyph.include(r272_LongSFlatHookNoTailShape(r352_m, r272_Descender, false));
                    r352_currentGlyph.include(r272_HBar.t(r272_RightSB, 2 * r272_Width, r272_Ascender));
                    return void 0;
                });
                r272_xn$createAndSaveGlyphImpl$2Lrc3c('longs.flatHookTailed' + r272_suffix, null, function () {
                    var _r358_t1;
                    var _r358_t0 = this;
                    var r358_currentGlyph = _r358_t0;
                    r358_currentGlyph.include(r272_MarkSet.bp());
                    r358_currentGlyph.include(r272_LongSShape(r272_Ascender, r272_Descender, r272_HookX + 0.25 * r272_Stroke, r272_Hook));
                    r358_currentGlyph.include(r272_StandardSerifs(r272_Middle - r272_HalfStroke * r272_HVContrast, r272_serifStyle));
                    r272_xn$createAndSaveGlyphImpl$2Lrc3c('longsbar.flatHookTailed' + r272_suffix, null, function () {
                        var _r364_t1;
                        var _r364_t0 = this;
                        _r364_t0.include(r358_currentGlyph, true, true);
                        _r364_t0.cloneRankFromGlyph(r358_currentGlyph);
                        return _r364_t0.include(r272_LongSSymmetricOverlayBar(r272_Middle));
                    });
                    return void 0;
                });
                r272_xn$createAndSaveGlyphImpl$2Lrc3c('longs.flatHookTailedExt' + r272_suffix, null, function () {
                    var _r367_t1;
                    var _r367_t0 = this;
                    var r367_currentGlyph = _r367_t0;
                    r367_currentGlyph.include(r272_MarkSet.bp());
                    r367_currentGlyph.include(r272_LongSShape(r272_Ascender, r272_Descender, r272_HookX + 0.25 * r272_Stroke, r272_Hook));
                    r367_currentGlyph.include(r272_StandardSerifs(r272_Middle - r272_HalfStroke * r272_HVContrast, r272_serifStyle));
                    r367_currentGlyph.include(r272_HBar.t(r272_Middle + r272_HookX + (0.25 - r272_TanSlope) * r272_Stroke, 2 * r272_Width, r272_Ascender));
                    return void 0;
                });
                r272_xn$createAndSaveGlyphImpl$2Lrc3c('longs.flatHookDiagonalTailed' + r272_suffix, null, function () {
                    var _r374_t1;
                    var _r374_t0 = this;
                    var r374_currentGlyph = _r374_t0;
                    r374_currentGlyph.include(r272_MarkSet.bp());
                    r374_currentGlyph.include(r272_union(r272_intersection(r272_MaskAbove(0), r272_LongSShape(r272_Ascender, r272_Descender, r272_HookX + 0.25 * r272_Stroke, r272_Hook)), r272_SmallFDiagonalTail(r272_DivFrame(1), r272_Middle - r272_HalfStroke * r272_HVContrast), r272_StandardSerifs(r272_Middle - r272_HalfStroke * r272_HVContrast, r272_serifStyle)));
                    r272_xn$createAndSaveGlyphImpl$2Lrc3c('longsbar.flatHookDiagonalTailed' + r272_suffix, null, function () {
                        var _r379_t1;
                        var _r379_t0 = this;
                        _r379_t0.include(r374_currentGlyph, true, true);
                        _r379_t0.cloneRankFromGlyph(r374_currentGlyph);
                        return _r379_t0.include(r272_LongSSymmetricOverlayBar(r272_Middle));
                    });
                    return void 0;
                });
                r272_xn$createAndSaveGlyphImpl$2Lrc3c('longs.flatHookDiagonalTailedExt' + r272_suffix, null, function () {
                    var _r382_t1;
                    var _r382_t0 = this;
                    var r382_currentGlyph = _r382_t0;
                    r382_currentGlyph.include(r272_MarkSet.bp());
                    r382_currentGlyph.include(r272_union(r272_intersection(r272_MaskAbove(0), r272_LongSShape(r272_Ascender, r272_Descender, r272_HookX + 0.25 * r272_Stroke, r272_Hook)), r272_SmallFDiagonalTail(r272_DivFrame(1), r272_Middle - r272_HalfStroke * r272_HVContrast), r272_StandardSerifs(r272_Middle - r272_HalfStroke * r272_HVContrast, r272_serifStyle)));
                    r382_currentGlyph.include(r272_HBar.t(r272_Middle + r272_HookX + (0.25 - r272_TanSlope) * r272_Stroke, 2 * r272_Width, r272_Ascender));
                    return void 0;
                });
                r272_xn$createAndSaveGlyphImpl$2Lrc3c('longs.bentHookDescending' + r272_suffix, null, function () {
                    var _r388_t1;
                    var _r388_t0 = this;
                    var r388_currentGlyph = _r388_t0;
                    r388_currentGlyph.include(r272_MarkSet.bp());
                    var r388_m = r272_StdSmallFBarLeftPos(true);
                    r388_currentGlyph.include(r272_LongSBentHookBase(r272_XH / 2, r388_m, r272_SLAB_SERIFLESS));
                    r388_currentGlyph.include(r272_VBar.l(r388_m, r272_Descender, 0));
                    r388_currentGlyph.include(r272_StandardSerifs(r388_m, r272_serifStyle));
                    r272_xn$createAndSaveGlyphImpl$2Lrc3c('longsbar.bentHookDescending' + r272_suffix, null, function () {
                        var _r395_t1;
                        var _r395_t0 = this;
                        _r395_t0.include(r388_currentGlyph, true, true);
                        _r395_t0.cloneRankFromGlyph(r388_currentGlyph);
                        return _r395_t0.include(r272_LongSBentHookOverlayBar(r388_m));
                    });
                    return void 0;
                });
                r272_xn$createAndSaveGlyphImpl$2Lrc3c('longs.bentHookTailed' + r272_suffix, null, function () {
                    var _r398_t1;
                    var _r398_t0 = this;
                    var r398_currentGlyph = _r398_t0;
                    r398_currentGlyph.include(r272_MarkSet.bp());
                    var r398_m = r272_StdSmallFBarLeftPos(true);
                    r398_currentGlyph.include(r272_LongSBentHookBase(r272_XH / 2, r398_m, r272_SLAB_SERIFLESS));
                    r398_currentGlyph.include(r272_LongSLowerHalf(1, r398_m + r272_HalfStroke * r272_HVContrast, r272_XH / 2 - r272_O, r272_Descender, r272_HookX + 0.25 * r272_Stroke, r272_Hook, r272_Stroke));
                    r398_currentGlyph.include(r272_StandardSerifs(r398_m, r272_serifStyle));
                    r272_xn$createAndSaveGlyphImpl$2Lrc3c('longsbar.bentHookTailed' + r272_suffix, null, function () {
                        var _r405_t1;
                        var _r405_t0 = this;
                        _r405_t0.include(r398_currentGlyph, true, true);
                        _r405_t0.cloneRankFromGlyph(r398_currentGlyph);
                        return _r405_t0.include(r272_LongSBentHookOverlayBar(r398_m));
                    });
                    return void 0;
                });
                return r272_xn$createAndSaveGlyphImpl$2Lrc3c('longs.bentHookDiagonalTailed' + r272_suffix, null, function () {
                    var _r408_t1;
                    var _r408_t0 = this;
                    var r408_currentGlyph = _r408_t0;
                    r408_currentGlyph.include(r272_MarkSet.bp());
                    var r408_m = r272_StdSmallFBarLeftPos(true);
                    r408_currentGlyph.include(r272_LongSBentHookBase(r272_XH / 2, r408_m, r272_SLAB_SERIFLESS));
                    r408_currentGlyph.include(r272_SmallFDiagonalTail(r272_DivFrame(1), r408_m));
                    r408_currentGlyph.include(r272_StandardSerifs(r408_m, r272_serifStyle));
                    r272_xn$createAndSaveGlyphImpl$2Lrc3c('longsbar.bentHookDiagonalTailed' + r272_suffix, null, function () {
                        var _r415_t1;
                        var _r415_t0 = this;
                        _r415_t0.include(r408_currentGlyph, true, true);
                        _r415_t0.cloneRankFromGlyph(r408_currentGlyph);
                        return _r415_t0.include(r272_LongSBentHookOverlayBar(r408_m));
                    });
                    return void 0;
                });
            }());
        }
        r272_xn$createAndSaveGlyphImpl$2Lrc3c('eshBaseline', 43853, function () {
            var _r418_t1;
            var _r418_t0 = this;
            var r418_currentGlyph = _r418_t0;
            r418_currentGlyph.include(r272_MarkSet.b());
            r418_currentGlyph.include(r272_LongSShape(r272_Ascender, 0, r272_HookX + 0.25 * r272_Stroke, r272_Hook));
            return void 0;
        });
        r272_xn$selectvariant$7Hrq('longs', 383);
        r272_xn$selectvariant$7Hrq('longs/flatExt', new r272_xn$NamedParameterPair$2Lrc9b('shapeFrom', 'longs'));
        r272_xn$selectvariant$7Hrq('longsbar', 7837, new r272_xn$NamedParameterPair$2Lrc9b('follow', 'longs'));
        r272_alias('esh', 643, 'longs.flatHookTailed');
        r272_xn$derivecomposites$7Hrq('eshPalatalHook', 7563, 'esh', r272_PalatalHook.r(new r272_xn$NamedParameterPair$2Lrc9b('x', r272_RightSB), new r272_xn$NamedParameterPair$2Lrc9b('y', 0), new r272_xn$NamedParameterPair$2Lrc9b('xLink', r272_Middle), new r272_xn$NamedParameterPair$2Lrc9b('refSw', r272_AdviceStroke(3)), new r272_xn$NamedParameterPair$2Lrc9b('maskOut', r272_intersection(r272_MaskBelow(0), r272_MaskLeft(r272_Middle + r272_HVContrast * r272_HalfStroke)))));
        r272_xn$createAndSaveGlyphImpl$2Lrc3c('eshRetroflexHook', 7576, function () {
            var _r430_t1;
            var _r430_t0 = this;
            var r430_currentGlyph = _r430_t0;
            r430_currentGlyph.include(r272_MarkSet.bp());
            r430_currentGlyph.include(r272_LongSShape(r272_Ascender, 0, r272_HookX + 0.25 * r272_Stroke, r272_Hook));
            r430_currentGlyph.include(r272_RetroflexHook.l(new r272_xn$NamedParameterPair$2Lrc9b('x', r272_Middle - (r272_HookX + 0.25 * r272_Stroke)), new r272_xn$NamedParameterPair$2Lrc9b('y', 0), new r272_xn$NamedParameterPair$2Lrc9b('yOverflow', r272_Stroke)));
            return void 0;
        });
        r272_xn$createAndSaveGlyphImpl$2Lrc3c('eshCurlyTail', 646, function () {
            var _r439_t1;
            var _r439_t0 = this;
            var r439_currentGlyph = _r439_t0;
            r439_currentGlyph.include(r272_MarkSet.bp());
            var r439_fine = r272_AdviceStroke(3.5);
            var r439_rinner = r272_LongJut / 2 - r439_fine / 2;
            var r439_m1 = r272_Middle - r272_HalfStroke * r272_HVContrast - r272_FBalance;
            var r439_x2 = r1_mix(r272_RightSB, r439_m1, 0.25);
            var r439_y2 = r272_Descender + r272_O;
            r439_currentGlyph.include(r272_union(r272_LongSUpperHalf(1, r272_Middle - r272_FBalance, r272_Ascender, 0, r272_HookX + 0.25 * r272_Stroke, r272_Hook), r272_dispiro(r272_widths.lhs(), r272_flat(r439_m1, -r272_O, r272_heading(r272_Downward)), r272_curl(r439_m1, r272_Descender + r439_fine + r439_rinner * 2), r272_CurlyTail(new r272_xn$NamedParameterPair$2Lrc9b('fine', r439_fine), new r272_xn$NamedParameterPair$2Lrc9b('rinner', r439_rinner), new r272_xn$NamedParameterPair$2Lrc9b('xleft', r439_m1), new r272_xn$NamedParameterPair$2Lrc9b('bottom', r272_Descender), new r272_xn$NamedParameterPair$2Lrc9b('right', r439_m1 - r272_LongJut), new r272_xn$NamedParameterPair$2Lrc9b('x2', r439_x2), new r272_xn$NamedParameterPair$2Lrc9b('y2', r439_y2)))));
            return void 0;
        });
        r272_xn$createAndSaveGlyphImpl$2Lrc3c('iFishHook', 639, function () {
            var _r451_t1;
            var _r451_t0 = this;
            var r451_currentGlyph = _r451_t0;
            r451_currentGlyph.include(r272_MarkSet.p());
            var r451_balance = r272_IBalance2(r272_DivFrame(1));
            r451_currentGlyph.include(r272_WithTransform(r272_Translate(r451_balance, 0), function () {
                var _r455_t1;
                var _r455_t0 = this;
                var r455_currentGlyph = _r455_t0;
                r455_currentGlyph.include(r272_VBar.m(r272_Middle, r272_Descender, r272_XH - r272_Hook));
                r455_currentGlyph.include(r272_VerticalHook.m(r272_Middle, r272_XH - r272_Hook, -r272_LongJut + r451_balance, -r272_Hook + r272_HalfStroke));
                if (r272_SLAB)
                    r455_currentGlyph.include(r272_union(r272_HSerif.lb(r272_Middle - r272_HalfStroke * r272_HVContrast, r272_Descender, r272_SideJut + r451_balance), r272_HSerif.rb(r272_Middle + r272_HalfStroke * r272_HVContrast, r272_Descender, r272_SideJut)));
                return void 0;
            }));
            return void 0;
        });
        return r272_xn$createAndSaveGlyphImpl$2Lrc3c('iviby', 645, function () {
            var _r461_t1;
            var _r461_t0 = this;
            var r461_currentGlyph = _r461_t0;
            r461_currentGlyph.include(r272_MarkSet.p());
            r461_currentGlyph.include(r272_RevLongSShape(r272_XH, r272_Descender, r272_HookX + 0.25 * r272_Stroke, r272_Hook));
            return void 0;
        });
    });
    return void 0;
});
