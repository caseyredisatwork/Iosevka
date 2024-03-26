'use strict';
import * as _s0_t0 from '../../../support/utils.mjs';
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
    r269_xn$Capture_Ext$2Lrc2b['$defineGlyphBlockImpl$'](r269_xn$Capture_Ext$2Lrc2b, 'Letter-Cyrillic-De', function (r270_xn$Capture$2Lrc8, r270_xn$ExportCapture$2Lrc4b) {
        var r270_suffix, r270_st, r270_sb, _r270_t10, _r270_t13, _r270_t14, _r270_t15, _r270_t16, _r270_tag17, _r270_t18, _r270_tag19;
        var _r270_t0 = r270_xn$Capture$2Lrc8;
        var r270_xn$createAndSaveGlyphImpl$2Lrc3c = _r270_t0['$createAndSaveGlyphImpl$'];
        var r270_xn$NamedParameterPair$2Lrc9b = _r270_t0['$NamedParameterPair$'];
        var r270_xn$assignUnicodeImpl$2Lrc8b = _r270_t0['$assignUnicodeImpl$'];
        var r270_xn$execState$2Lrc0b = _r270_t0['$execState$'];
        var r270_para = _r270_t0.para;
        var r270_MarkSet = _r270_t0.MarkSet;
        var r270_tagged = _r270_t0.tagged;
        var r270_DivFrame = _r270_t0.DivFrame;
        var _r270_t1 = r270_xn$Capture$2Lrc8.Metrics;
        var r270_Width = _r270_t1.Width;
        var r270_SB = _r270_t1.SB;
        var r270_CAP = _r270_t1.CAP;
        var r270_XH = _r270_t1.XH;
        var r270_Ascender = _r270_t1.Ascender;
        var r270_Descender = _r270_t1.Descender;
        var r270_HVContrast = _r270_t1.HVContrast;
        var r270_O = _r270_t1.O;
        var r270_OX = _r270_t1.OX;
        var r270_Hook = _r270_t1.Hook;
        var r270_SmallArchDepth = _r270_t1.SmallArchDepth;
        var r270_Stroke = _r270_t1.Stroke;
        var r270_LongJut = _r270_t1.LongJut;
        var r270_VJut = _r270_t1.VJut;
        var r270_VJutStroke = _r270_t1.VJutStroke;
        var r270_CThinB = _r270_t1.CThinB;
        var r270_SLAB = _r270_t1.SLAB;
        var r270_RightSB = _r270_t1.RightSB;
        var r270_SideJut = _r270_t1.SideJut;
        var r270_CorrectionOMidX = _r270_t1.CorrectionOMidX;
        var r270_AdviceStroke = _r270_t1.AdviceStroke;
        var r270_StrokeWidthBlend = _r270_t1.StrokeWidthBlend;
        var _r270_t2 = r270_xn$Capture$2Lrc8.SpiroFns;
        var r270_g4 = _r270_t2.g4;
        var r270_flat = _r270_t2.flat;
        var r270_curl = _r270_t2.curl;
        var r270_widths = _r270_t2.widths;
        var r270_quadControls = _r270_t2.quadControls;
        var r270_archv = _r270_t2.archv;
        var r270_arcvh = _r270_t2.arcvh;
        var r270_dispiro = _r270_t2.dispiro;
        var _r270_t3 = r270_xn$Capture$2Lrc8.BooleFns;
        var r270_union = _r270_t3.union;
        var _r270_t4 = r270_xn$Capture$2Lrc8.CommonShapes.resolve();
        var r270_VSerif = _r270_t4.VSerif;
        var r270_HBar = _r270_t4.HBar;
        var r270_VBar = _r270_t4.VBar;
        var _r270_t5 = r270_xn$Capture$2Lrc8['Common-Derivatives'].resolve();
        var r270_xn$selectvariant$7Hrq = _r270_t5['select-variant'];
        var _r270_t6 = r270_xn$Capture$2Lrc8['Mark-Adjustment'].resolve();
        var r270_ExtendBelowBaseAnchors = _r270_t6.ExtendBelowBaseAnchors;
        var _r270_t7 = r270_xn$Capture$2Lrc8['Letter-Greek-Lower-Epsilon'].resolve();
        var r270_CyrZe = _r270_t7.CyrZe;
        var r270_EpsilonConfig = _r270_t7.EpsilonConfig;
        var r270_BottomExtension = 0.25 * r270_Stroke - r270_LongJut;
        r270_xn$ExportCapture$2Lrc4b(function () {
            var _r276_t0, _r276_t1;
            return {
                'CyrDeShape': r270_CyrDeShape,
                'CyrDeItalicShapeT': r270_CyrDeItalicShapeT
            };
        });
        var r270_CyrDeShape = function (r277_top, r277_left, r277_right, r277__sw, r277__desc) {
            var _r277_t0, _r277_t1;
            return function () {
                var _r279_t1;
                var _r279_t0 = this;
                var r279_currentGlyph = _r279_t0;
                var r279_descenderOverflow = r270_SLAB ? r270_SideJut : (r277_right - r277_left) * 0.075;
                var r279_xCutLeft = r277_left;
                var r279_xCutRight = r277_right;
                var r279_xTopLeft = r1_mix(r279_xCutLeft, r279_xCutRight, r270_StrokeWidthBlend(0.15, 0.1));
                var r279_xTopRight = r1_mix(r279_xCutLeft, r279_xCutRight, r270_StrokeWidthBlend(0.95, 0.96));
                var r279_swOuter = r1_fallback(r277__sw, r270_Stroke);
                var r279_swInner = r279_swOuter * r270_AdviceStroke(2.75) / r270_Stroke;
                var r279_desc = r1_fallback(r277__desc, r270_BottomExtension);
                r279_currentGlyph.include(r270_HBar.b(r279_xTopLeft, r279_xTopRight, 0, r279_swOuter));
                r279_currentGlyph.include(r270_VBar.r(r279_xTopRight, 0, r277_top, r279_swInner));
                r279_currentGlyph.include(r270_dispiro(r270_widths.lhs(r279_swInner), r270_flat(r279_xTopLeft, r277_top), r270_curl(r279_xTopLeft, r1_mix(0, r277_top, 0.625)), r270_g4(r279_xCutLeft, r279_swOuter)));
                r279_currentGlyph.include(r270_tagged('footL', r270_union(r270_HBar.b(r279_xCutLeft - r279_descenderOverflow, r279_xTopLeft, 0, r279_swOuter), r270_VBar.l(r279_xCutLeft - r279_descenderOverflow, r279_desc, 0.1, r279_swOuter))));
                r279_currentGlyph.include(r270_tagged('footR', r270_union(r270_HBar.b(r279_xTopRight, r279_xCutRight + r279_descenderOverflow, 0, r279_swOuter), r270_VBar.r(r279_xCutRight + r279_descenderOverflow, r279_desc, 0.1, r279_swOuter))));
                r279_currentGlyph.include(r270_SLAB ? r270_dispiro(r270_widths.rhs(r279_swOuter), r270_flat(r279_xTopLeft - r279_descenderOverflow, r277_top), r270_curl(r279_xTopRight + r279_descenderOverflow, r277_top)) : r270_HBar.t(r279_xTopLeft, r279_xTopRight, r277_top, r279_swOuter));
                return {
                    'desc': r279_desc,
                    'xTopLeft': r279_xTopLeft,
                    'xTopRight': r279_xTopRight
                };
            };
        };
        var r270_CyrSoftDeShape = function (r286_top, r286_left, r286_right, r286__sw) {
            var _r286_t0, _r286_t1;
            return function () {
                var _r288_t1;
                var _r288_t0 = this;
                var r288_currentGlyph = _r288_t0;
                var r288_descenderOverflow = r270_SLAB ? r270_SideJut : (r286_right - r286_left) * 0.075;
                var r288_sw = r1_fallback(r286__sw, r270_Stroke);
                var r288_xm = r270_SLAB ? r1_mix(r286_left, r286_right, 0.625) + 0.25 * r288_sw * r270_HVContrast : r1_mix(r286_left, r286_right, 0.75);
                var r288_xTopRight = r1_mix(r286_left, r288_xm, r270_StrokeWidthBlend(0.95, 0.96));
                r288_currentGlyph.include(r270_CyrDeShape(r286_top, r286_left, r288_xm, r286__sw));
                if (r270_SLAB) {
                    r288_currentGlyph.include(r270_HBar.t(r288_xTopRight + r288_descenderOverflow, r286_right, r286_top, r288_sw));
                    r288_currentGlyph.include(r270_VSerif.dr(r286_right, r286_top, r270_VJut, r288_sw * r270_VJutStroke / r270_Stroke));
                } else
                    r288_currentGlyph.include(r270_HBar.t(r288_xTopRight, r286_right, r286_top, r288_sw));
                return void 0;
            };
        };
        r270_xn$createAndSaveGlyphImpl$2Lrc3c('cyrl/De', 1044, function () {
            var _r295_t1;
            var _r295_t0 = this;
            var r295_currentGlyph = _r295_t0;
            r295_currentGlyph.include(r270_MarkSet.capital());
            r295_currentGlyph.include(r270_ExtendBelowBaseAnchors(r270_BottomExtension));
            r295_currentGlyph.include(r270_CyrDeShape(r270_CAP, r270_SB, r270_RightSB));
            return void 0;
        });
        r270_xn$createAndSaveGlyphImpl$2Lrc3c('cyrl/de.upright', null, function () {
            var _r301_t1;
            var _r301_t0 = this;
            var r301_currentGlyph = _r301_t0;
            r301_currentGlyph.include(r270_MarkSet.e());
            r301_currentGlyph.include(r270_ExtendBelowBaseAnchors(r270_BottomExtension));
            r301_currentGlyph.include(r270_CyrDeShape(r270_XH, r270_SB, r270_RightSB));
            return void 0;
        });
        r270_xn$createAndSaveGlyphImpl$2Lrc3c('cyrl/deLongLeg', 7297, function () {
            var _r307_t1;
            var _r307_t0 = this;
            var r307_currentGlyph = _r307_t0;
            r307_currentGlyph.include(r270_MarkSet.p());
            r307_currentGlyph.include(r270_CyrDeShape(r270_XH, r270_SB, r270_RightSB, r270_Stroke, r270_Descender));
            return void 0;
        });
        r270_xn$createAndSaveGlyphImpl$2Lrc3c('cyrl/DeSoft', 42594, function () {
            var _r312_t1;
            var _r312_t0 = this;
            var r312_currentGlyph = _r312_t0;
            var r312_df = r270_DivFrame(r270_para.diversityM, 3);
            r312_currentGlyph.setWidth(r312_df.width);
            r312_currentGlyph.include(r312_df.markSet.capital());
            r312_currentGlyph.include(r270_ExtendBelowBaseAnchors(r270_BottomExtension));
            r312_currentGlyph.include(r270_CyrSoftDeShape(r270_CAP, r312_df.leftSB, r312_df.rightSB, r312_df.mvs));
            return void 0;
        });
        r270_xn$createAndSaveGlyphImpl$2Lrc3c('cyrl/deSoft', 42595, function () {
            var _r319_t1;
            var _r319_t0 = this;
            var r319_currentGlyph = _r319_t0;
            var r319_df = r270_DivFrame(r270_para.diversityM, 3);
            r319_currentGlyph.setWidth(r319_df.width);
            r319_currentGlyph.include(r319_df.markSet.e());
            r319_currentGlyph.include(r270_ExtendBelowBaseAnchors(r270_BottomExtension));
            r319_currentGlyph.include(r270_CyrSoftDeShape(r270_XH, r319_df.leftSB, r319_df.rightSB, r319_df.mvs));
            return void 0;
        });
        var _r270_t8 = Object.entries(r270_EpsilonConfig)[Symbol.iterator]();
        var _r270_t9 = void 0;
        while (!(_r270_t9 = _r270_t8.next()).done) {
            _r270_t10 = _r270_t9.value;
            r270_suffix = _r270_t10[0];
            r270_st = _r270_t10[1][0];
            r270_sb = _r270_t10[1][1];
            _r270_t10[1];
            (function () {
                var r326_DzzeDescendershape = function (r327_de) {
                    var _r327_t0, _r327_t1;
                    var r327_sr = r1_mix(r270_RightSB, r270_Width, 0.5) - r270_O * 2;
                    var r327_sl = r1_mix(r327_sr, r327_de.xTopRight, 2);
                    var r327_sw = r270_AdviceStroke(2.5, (r327_sr - r327_sl + 2 * r270_SB) / r270_Width);
                    var r327_shapeBot = r327_de.desc - 0.5 * r327_sw;
                    var r327_hook = r270_Hook * (0 - r327_shapeBot) / r270_CAP;
                    var r327_ze = r270_CyrZe(3, r270_sb, r327_sw, r327_shapeBot, r327_sl, r327_sr, 0.65, r327_hook, r327_sw, 0.5 * r270_O, 0.5);
                    return r270_union(r327_ze.Shape(), r327_ze.AutoEndSerifL());
                };
                r270_xn$createAndSaveGlyphImpl$2Lrc3c('cyrl/Dzze.' + r270_suffix, null, function () {
                    var _r330_t1;
                    var _r330_t0 = this;
                    var r330_currentGlyph = _r330_t0;
                    r330_currentGlyph.include(r270_MarkSet.capital());
                    r330_currentGlyph.include(r270_ExtendBelowBaseAnchors(r270_BottomExtension));
                    var r330_de = r330_currentGlyph.include(r270_CyrDeShape(r270_CAP, r270_SB, r270_RightSB));
                    r330_currentGlyph.ejectTagged('footR');
                    r330_currentGlyph.include(r326_DzzeDescendershape(r330_de));
                    return void 0;
                });
                return r270_xn$createAndSaveGlyphImpl$2Lrc3c('cyrl/dzze.upright.' + r270_suffix, null, function () {
                    var _r338_t1;
                    var _r338_t0 = this;
                    var r338_currentGlyph = _r338_t0;
                    r338_currentGlyph.include(r270_MarkSet.e());
                    r338_currentGlyph.include(r270_ExtendBelowBaseAnchors(r270_BottomExtension));
                    var r338_de = r338_currentGlyph.include(r270_CyrDeShape(r270_XH, r270_SB, r270_RightSB));
                    r338_currentGlyph.ejectTagged('footR');
                    r338_currentGlyph.include(r326_DzzeDescendershape(r338_de));
                    return void 0;
                });
            }());
        }
        var r270_CyrDeItalicShapeT = function (r344_sink, r344_df, r344__sw) {
            var _r344_t0, _r344_t1;
            var r344_left = r344_df.leftSB;
            var r344_right = r344_df.rightSB;
            var r344_middle = r1_mix(r344_left, r344_right, 0.5);
            var r344_sw = r1_fallback(r344__sw, r344_df.mvs);
            var r344_ada = r344_df.archDepthA(r270_SmallArchDepth);
            var r344_adb = r344_df.archDepthB(r270_SmallArchDepth);
            return r344_sink(r270_widths.lhs(r344_sw * r270_CThinB), r270_flat(r344_right - r270_OX - r344_sw * r270_HVContrast * (1 - r270_CThinB), r344_ada), r270_curl(r344_right - r270_OX - r344_sw * r270_HVContrast * (1 - r270_CThinB), r270_XH - r344_adb), r270_arcvh(), r270_g4(r344_middle - r270_CorrectionOMidX * r344_df.mvs, r270_Ascender * 0.7 - r270_O, r270_widths.lhs(r344_sw)), r270_archv(), r270_flat(r344_left + r270_OX, r270_XH - r344_ada), r270_curl(r344_left + r270_OX, r344_adb), r270_arcvh(), r270_g4(r344_middle + r270_CorrectionOMidX * r344_sw, r270_O), r270_archv(), r270_flat(r344_right - r270_OX, r344_ada), r270_curl(r344_right - r270_OX, r270_XH - r344_adb), r270_quadControls(0, 0.8), r270_g4(r344_left + r344_sw * 1.1, r270_Ascender));
        };
        r270_xn$createAndSaveGlyphImpl$2Lrc3c('cyrl/de.italic', null, function () {
            var _r347_t1;
            var _r347_t0 = this;
            var r347_currentGlyph = _r347_t0;
            r347_currentGlyph.include(r270_MarkSet.b());
            r347_currentGlyph.include(r270_CyrDeItalicShapeT(r270_dispiro, r270_DivFrame(1)));
            return void 0;
        });
        var _r270_t11 = Object.entries(r270_EpsilonConfig)[Symbol.iterator]();
        var _r270_t12 = void 0;
        while (!(_r270_t12 = _r270_t11.next()).done) {
            _r270_t13 = _r270_t12.value;
            r270_suffix = _r270_t13[0];
            r270_st = _r270_t13[1][0];
            r270_sb = _r270_t13[1][1];
            _r270_t13[1];
            (function () {
                return r270_xn$createAndSaveGlyphImpl$2Lrc3c('cyrl/dzze.italic.' + r270_suffix, null, function () {
                    var _r355_t1;
                    var _r355_t0 = this;
                    var r355_currentGlyph = _r355_t0;
                    var r355_df = r270_DivFrame(r270_para.diversityM, 3);
                    r355_currentGlyph.setWidth(r355_df.width);
                    r355_currentGlyph.include(r355_df.markSet.bp());
                    var r355_dfLeft = r355_df.slice(3, 2, r270_OX);
                    r355_currentGlyph.include(r270_CyrDeItalicShapeT(r270_dispiro, r355_dfLeft));
                    var r355_xZeLeft = r355_dfLeft.leftSB + r355_df.width - r355_dfLeft.width + r270_OX;
                    var r355_xZeRight = r355_dfLeft.rightSB + r355_df.width - r355_dfLeft.width - r270_OX;
                    var r355_ze = r270_CyrZe(1, r270_sb, r270_XH, r270_Descender, r355_xZeLeft, r355_xZeRight, 0.65, r270_Hook, r355_df.mvs);
                    r355_currentGlyph.include(r270_union(r355_ze.Shape(), r355_ze.AutoEndSerifL()));
                    return void 0;
                });
            }());
        }
        r270_xn$selectvariant$7Hrq('cyrl/Dzze', 42632, new r270_xn$NamedParameterPair$2Lrc9b('follow', 'cyrl/ze/topAttached'));
        r270_xn$selectvariant$7Hrq('cyrl/dzze.upright', new r270_xn$NamedParameterPair$2Lrc9b('follow', 'cyrl/ze/topAttached'));
        return r270_xn$selectvariant$7Hrq('cyrl/dzze.italic', new r270_xn$NamedParameterPair$2Lrc9b('follow', 'cyrl/ze/topAttached'));
    });
    return void 0;
});
