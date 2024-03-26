'use strict';
import * as _s0_t0 from '../../../support/utils.mjs';
import * as _s0_t1 from '../../../support/gr.mjs';
var _s0_t2;
export {
    _s0_t2 as apply
};
var r1_apply, _r1_t0, _r1_t1, _r1_t2, _r1_t3, _r1_t4, _r1_t5, _r1_t6, _r1_t7;
var _r1_t8 = _s0_t0;
var r1_mix = _r1_t8.mix;
var r1_linreg = _r1_t8.linreg;
var r1_fallback = _r1_t8.fallback;
var r1_SuffixCfg = _r1_t8.SuffixCfg;
var _r1_t9 = _s0_t1;
var r1_LowerYDotAtBelow = _r1_t9.LowerYDotAtBelow;
var r1_Dotless = _r1_t9.Dotless;
var r1_CvDecompose = _r1_t9.CvDecompose;
var r1_MathSansSerif = _r1_t9.MathSansSerif;
var r1_OgonekTrY = _r1_t9.OgonekTrY;
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
    r270_xn$Capture_Ext$2Lrc2b['$defineGlyphBlockImpl$'](r270_xn$Capture_Ext$2Lrc2b, 'Letter-Latin-Lower-Y', function (r271_xn$Capture$2Lrc8, r271_xn$ExportCapture$2Lrc4b) {
        var r271_suffix, r271_straightBar, r271_bottomShape, r271_slabKind, r271_hookShape, r271_DrawAt, r271_kdr, _r271_t13, _r271_t16, _r271_t19, _r271_t21, _r271_t22, _r271_t23, _r271_tag24, _r271_t25, _r271_tag26, _r271_t27, _r271_tag28, _r271_t29, _r271_tag30;
        var _r271_t0 = r271_xn$Capture$2Lrc8;
        var r271_xn$createAndSaveGlyphImpl$2Lrc3c = _r271_t0['$createAndSaveGlyphImpl$'];
        var r271_xn$NamedParameterPair$2Lrc9b = _r271_t0['$NamedParameterPair$'];
        var r271_xn$assignUnicodeImpl$2Lrc8b = _r271_t0['$assignUnicodeImpl$'];
        var r271_xn$execState$2Lrc0b = _r271_t0['$execState$'];
        var r271_para = _r271_t0.para;
        var r271_MarkSet = _r271_t0.MarkSet;
        var r271_DivFrame = _r271_t0.DivFrame;
        var _r271_t1 = r271_xn$Capture$2Lrc8.Metrics;
        var r271_DesignParameters = _r271_t1.DesignParameters;
        var r271_UPM = _r271_t1.UPM;
        var r271_Width = _r271_t1.Width;
        var r271_SB = _r271_t1.SB;
        var r271_CAP = _r271_t1.CAP;
        var r271_XH = _r271_t1.XH;
        var r271_Ascender = _r271_t1.Ascender;
        var r271_Descender = _r271_t1.Descender;
        var r271_Italify = _r271_t1.Italify;
        var r271_Scale = _r271_t1.Scale;
        var r271_Translate = _r271_t1.Translate;
        var r271_HVContrast = _r271_t1.HVContrast;
        var r271_Upward = _r271_t1.Upward;
        var r271_Downward = _r271_t1.Downward;
        var r271_Rightward = _r271_t1.Rightward;
        var r271_O = _r271_t1.O;
        var r271_Hook = _r271_t1.Hook;
        var r271_SHook = _r271_t1.SHook;
        var r271_TailX = _r271_t1.TailX;
        var r271_TailY = _r271_t1.TailY;
        var r271_Stroke = _r271_t1.Stroke;
        var r271_Jut = _r271_t1.Jut;
        var r271_AccentStackOffset = _r271_t1.AccentStackOffset;
        var r271_SLAB = _r271_t1.SLAB;
        var r271_HalfStroke = _r271_t1.HalfStroke;
        var r271_RightSB = _r271_t1.RightSB;
        var r271_Middle = _r271_t1.Middle;
        var r271_DotRadius = _r271_t1.DotRadius;
        var r271_SideJut = _r271_t1.SideJut;
        var r271_SmallArchDepthA = _r271_t1.SmallArchDepthA;
        var r271_CorrectionOMidS = _r271_t1.CorrectionOMidS;
        var r271_AdviceStroke = _r271_t1.AdviceStroke;
        var r271_AdviceStroke2 = _r271_t1.AdviceStroke2;
        var r271_OverlayStroke = _r271_t1.OverlayStroke;
        var r271_ShoulderFine = _r271_t1.ShoulderFine;
        var r271_StrokeWidthBlend = _r271_t1.StrokeWidthBlend;
        var _r271_t2 = r271_xn$Capture$2Lrc8.SpiroFns;
        var r271_g4 = _r271_t2.g4;
        var r271_corner = _r271_t2.corner;
        var r271_flat = _r271_t2.flat;
        var r271_curl = _r271_t2.curl;
        var r271_straight = _r271_t2.straight;
        var r271_widths = _r271_t2.widths;
        var r271_heading = _r271_t2.heading;
        var r271_quadControls = _r271_t2.quadControls;
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
        var r271_HSerif = _r271_t4.HSerif;
        var r271_HBar = _r271_t4.HBar;
        var r271_FlatSlashShape = _r271_t4.FlatSlashShape;
        var r271_hookend = _r271_t4.hookend;
        var r271_FlipAround = _r271_t4.FlipAround;
        var r271_DiagCor = _r271_t4.DiagCor;
        var r271_ExtLineCenter = _r271_t4.ExtLineCenter;
        var r271_DiagCorDs = _r271_t4.DiagCorDs;
        var r271_DotVariants = _r271_t4.DotVariants;
        var _r271_t5 = r271_xn$Capture$2Lrc8['Common-Derivatives'].resolve();
        var r271_xn$selectvariant$7Hrq = _r271_t5['select-variant'];
        var r271_xn$referglyph$1aao = _r271_t5['refer-glyph'];
        var r271_alias = _r271_t5.alias;
        var r271_turned = _r271_t5.turned;
        var r271_xn$deriveglyphs$7Hrq = _r271_t5['derive-glyphs'];
        var r271_xn$linkreducedvariant$5sIl8 = _r271_t5['link-reduced-variant'];
        var _r271_t6 = r271_xn$Capture$2Lrc8['Mark-Shared-Metrics'].resolve();
        var r271_markExtend = _r271_t6.markExtend;
        var r271_markStroke = _r271_t6.markStroke;
        var r271_markStress = _r271_t6.markStress;
        var r271_markFine = _r271_t6.markFine;
        var _r271_t7 = r271_xn$Capture$2Lrc8['Mark-Above'].resolve();
        var r271_aboveMarkTop = _r271_t7.aboveMarkTop;
        var r271_aboveMarkBot = _r271_t7.aboveMarkBot;
        var r271_aboveMarkMid = _r271_t7.aboveMarkMid;
        var r271_aboveMarkStack = _r271_t7.aboveMarkStack;
        var _r271_t8 = r271_xn$Capture$2Lrc8['Mark-Below'].resolve();
        var r271_belowMarkStack = _r271_t8.belowMarkStack;
        var _r271_t9 = r271_xn$Capture$2Lrc8['Letter-Shared'].resolve();
        var r271_CreateAccentedComposition = _r271_t9.CreateAccentedComposition;
        var _r271_t10 = r271_xn$Capture$2Lrc8['Letter-Shared-Shapes'].resolve();
        var r271_nShoulder = _r271_t10.nShoulder;
        var r271_FlatHookDepth = _r271_t10.FlatHookDepth;
        var r271_SerifFrame = _r271_t10.SerifFrame;
        var r271_BeltOverlay = _r271_t10.BeltOverlay;
        var r271_TopHook = _r271_t10.TopHook;
        var r271_xn$SLABNONE$5sIl = [
            false,
            false,
            false
        ];
        var r271_xn$SLABAUTO$5sIl = [
            r271_SLAB,
            r271_SLAB,
            false
        ];
        var r271_xn$SLABALL$5sIl = [
            true,
            true,
            false
        ];
        var r271_xn$SLABMOTION$5sIl = [
            false,
            false,
            true
        ];
        var r271_xn$SLABCURSIVEMOTION$5sIl8 = [
            true,
            true,
            true
        ];
        var r271_xn$BSSTRAIGHT$3cah = 0;
        var r271_xn$BSTURN$3cah = 1;
        var r271_xn$BSLOOP$3cah = 2;
        var r271_GenNonCursiveShape = function (r279_straightBar, r279_bottomShape, r279_slabKind) {
            var _r279_t0, _r279_t1, _r279_t2, _r279_tag3;
            return function () {
                var r282_SmallYShape, r282_SmallYHookTopShape, r282_SmallLambdaShape;
                var r282_exports = {};
                var _r282_t0 = r279_slabKind;
                var r282_doSlabTop = _r282_t0[0];
                var r282_doSlabBottom = _r282_t0[1];
                var r282_doSlabMotion = _r282_t0[2];
                var r282_useStraightBottom = r279_straightBar && !r279_bottomShape;
                var r282_slabCurly = r282_doSlabTop && !r279_straightBar;
                var r282_slabCurlyNoTurnT = r282_doSlabTop && !r279_straightBar && !r279_bottomShape;
                var r282_slabCurlyNoTurnB = r282_doSlabBottom && !r279_straightBar && !r279_bottomShape;
                var r282_bottomIsNotVertical = r282_doSlabBottom || r282_useStraightBottom || r279_bottomShape;
                var r282_px1 = 0.84;
                var r282_py1 = r271_StrokeWidthBlend(0.8, 0.76) * (r282_slabCurly ? r271_StrokeWidthBlend(1, 0.9) : 1);
                var r282_px2 = r282_slabCurlyNoTurnB ? r282_px1 : 0.95;
                var r282_py2VertBot = 0.88 * (r282_slabCurly ? r271_StrokeWidthBlend(1, 0.9) : 1);
                var r282_py2 = r282_slabCurlyNoTurnB ? r282_py1 : r282_bottomIsNotVertical ? 0.97 : r282_py2VertBot;
                var r282_pds = 0.1;
                var r282_pds2 = 0.01;
                var r282_dpy1 = (1 - r1_linreg(1 - r282_px2, 1 - r282_py2, r282_px1, r282_py1, 1)) / (1 - r282_py1);
                var r282_dpy2 = (1 - r1_linreg(1 - r282_px1, 1 - r282_py1, r282_px2, r282_py2, 1)) / (1 - r282_py2);
                var r282_yrstrokel0 = r271_Middle - r271_Width * 0.1;
                var r282_yrstrokel = r271_Middle - r271_Width * 0.1 + r271_Stroke * r271_HVContrast * (r282_bottomIsNotVertical ? 2 / 3 : 1 / 3) * (r282_slabCurly ? r271_StrokeWidthBlend(0.95, 0.97) : 1);
                var r282_yrstroker = r271_Width - r271_SB * (r279_straightBar ? r271_DesignParameters.straightSmallYShapeSbShrink : 1);
                var r282_yshrink = r271_StrokeWidthBlend(1, 0.85) * (r279_straightBar ? r271_AdviceStroke(3.25) / r271_Stroke : 1);
                var r282_yBottomJut = r271_Jut * 1.25;
                var r282_slabysize = r271_Jut * 1.25 * (r271_Width / r271_UPM) + r271_Stroke;
                var r282_slabyvx = 0.625;
                var r282_CalcDS = function (r289_top, r289_bottom) {
                    var _r289_t0, _r289_t1;
                    var r289_ds0 = (r289_top - r289_bottom) * r282_pds;
                    var r289_ds20 = (r289_top - r289_bottom) * r282_pds2;
                    var r289_ds = r282_slabCurly ? Math.max(r271_AdviceStroke2(3, 6, r289_top - r289_bottom), r289_ds0) : r289_ds0;
                    var r289_ds2 = r282_slabCurlyNoTurnB ? r289_ds : r289_ds20 + (r282_bottomIsNotVertical ? r282_slabysize * r282_slabyvx : 0);
                    return [
                        r289_ds,
                        r289_ds2
                    ];
                };
                var r282_yDiagCor = function (r290_dy) {
                    var _r290_t0, _r290_t1;
                    return r271_DiagCor(r290_dy, r282_yrstroker - r282_yrstrokel, 0, 0);
                };
                var r282_yTopKnots = function (r291_x, r291_top, r291_bottom, r291_ds, r291_dir) {
                    var _r291_t0, _r291_t1, _r291_t2;
                    var r291_hs = r271_HalfStroke * (r279_straightBar ? r282_yDiagCor(r291_top - r291_bottom) : 1);
                    var r291_hl = r291_hs - r291_hs * r291_dir;
                    var r291_hr = r291_hs + r291_hs * r291_dir;
                    if (r279_straightBar)
                        return [r271_flat(r291_x, r291_top, r271_widths.heading(r291_hl, r291_hr, r271_Downward))];
                    else
                        return [
                            r271_flat(r291_x, r291_top, r271_widths.heading(r291_hl, r291_hr, r271_Downward)),
                            r271_curl(r291_x, r291_top - r291_ds, r271_widths.heading(r291_hl, r291_hr, r271_Downward)),
                            r271_quadControls(0, r282_dpy1, 16)
                        ];
                };
                var r282_yOgonekAttach = function (r292_top, r292_bottom, r292_shrink, r292_hooktop) {
                    var _r292_t0, _r292_t1;
                    return function () {
                        var _r294_t2;
                        var _r294_t1 = this;
                        var r294_currentGlyph = _r294_t1;
                        var _r294_t0 = r282_CalcDS(r292_top, r292_bottom);
                        var r294_ds = _r294_t0[0];
                        var r294_ds2 = _r294_t0[1];
                        var r294_coJoinX = r279_straightBar && !r292_hooktop ? r282_yrstroker : r1_mix(r282_yrstrokel, r282_yrstroker, r282_px1);
                        var r294_coJoinY = r279_straightBar && !r292_hooktop ? r292_top : r1_mix(r292_bottom + r294_ds2, r292_top - r294_ds, r282_py1);
                        var r294_joinX = r1_mix(r282_yrstrokel, r282_yrstroker, 1 - r282_px2);
                        var r294_joinY = r1_mix(r292_bottom + r294_ds2, r292_top - r294_ds, 1 - r282_py2);
                        var r294_anchorX = r1_mix(r294_coJoinX, r294_joinX, (0 - r294_coJoinY) / (r294_joinY - r294_coJoinY));
                        r294_currentGlyph.setBaseAnchor('trailing', r294_anchorX, 0);
                        r1_OgonekTrY.set(r294_currentGlyph);
                        return void 0;
                    };
                };
                var r282_yBaseKnots = function (r296_top, r296_bottom, r296_shrink, r296_hooktop) {
                    var r296_joinHeight1, r296_k, r296_joinHeight3, r296_deltaX, r296_fine, r296_xLoopLeft, r296_xCenter, _r296_t1, _r296_t2;
                    var _r296_t0 = r282_CalcDS(r296_top, r296_bottom);
                    var r296_ds = _r296_t0[0];
                    var r296_ds2 = _r296_t0[1];
                    var r296_coJoinX = r1_mix(r282_yrstrokel, r282_yrstroker, r282_px1);
                    var r296_coJoinY = r1_mix(r296_bottom + r296_ds2, r296_top - r296_ds, r282_py1);
                    var r296_joinX = r1_mix(r282_yrstrokel, r282_yrstroker, 1 - r282_px2);
                    var r296_joinY = r1_mix(r296_bottom + r296_ds2, r296_top - r296_ds, 1 - r282_py2);
                    var r296_ConnectZ = function (r297_shrink) {
                        var _r297_t0, _r297_t1;
                        return r271_curl(r296_joinX, r296_joinY, r271_widths.rhs(r271_Stroke * r297_shrink));
                    };
                    return [
                        r279_straightBar && !r296_hooktop ? [] : [r271_flat(r296_coJoinX, r296_coJoinY)],
                        r282_useStraightBottom ? [
                            r296_ConnectZ(r296_shrink),
                            r271_curl(r1_mix(r282_yrstroker, r296_joinX, (r296_top - r296_bottom) / (r296_top - r296_joinY)), r296_bottom, r271_widths.heading(0, r271_Stroke * r282_yDiagCor(r296_top - r296_bottom), r271_Downward))
                        ] : r279_bottomShape === r271_xn$BSLOOP$3cah ? (r296_joinHeight1 = r282_yJoinHeight(r296_ds, r296_ds2, r296_top, r296_bottom, false), r296_k = 1 / Math.sin(Math.atan2(r296_joinX - r271_Middle, r296_joinY - r296_joinHeight1)) - 0.25, r296_joinHeight3 = Math.abs(r296_k) * r271_Stroke + r296_joinHeight1, r296_deltaX = Math.max(r282_yBottomJut, 1.2 * r271_HVContrast * r271_Stroke), r296_fine = r271_AdviceStroke(3), r296_xLoopLeft = Math.max(r271_SB * -0.25, r1_mix(r296_joinX, r282_yrstrokel - r296_deltaX, 2)), r296_xCenter = r1_mix(r296_xLoopLeft, r296_joinX, 0.5), [
                            r296_ConnectZ(r296_shrink),
                            r271_g4.left.mid(Math.min(r282_yrstrokel - r296_deltaX, r296_xCenter) + r271_CorrectionOMidS, r296_bottom, r271_widths.rhs()),
                            r271_archv(),
                            r271_g4.up.mid(r296_xLoopLeft, r1_mix(r296_bottom, r296_joinHeight3, 0.5), r271_widths.rhs.heading(r296_fine, r271_Upward)),
                            r271_arcvh(),
                            r271_flat(r296_xCenter, r296_joinHeight3, r271_heading(r271_Rightward)),
                            r271_curl(r271_Middle, r296_joinHeight3, r271_heading(r271_Rightward))
                        ]) : r279_bottomShape === r271_xn$BSTURN$3cah ? [
                            r296_ConnectZ(r296_shrink),
                            r271_flat(r282_yrstrokel - r282_slabysize, r296_bottom, r271_widths.rhs()),
                            r271_curl(Math.min(r282_yrstrokel - r282_slabysize - 0.1, r282_yrstrokel - r271_Stroke - r282_yBottomJut), r296_bottom)
                        ] : true ? [
                            r296_ConnectZ(1),
                            r271_quadControls(1, 1 - r282_dpy2, 16),
                            r271_flat(r282_yrstrokel, r296_bottom + r296_ds2, r271_widths.heading(0, r271_Stroke, r271_Downward)),
                            r271_curl(r282_yrstrokel, r296_bottom, r271_widths.heading(0, r271_Stroke, r271_Downward))
                        ] : void 0
                    ];
                };
                var r282_yBaseSerif = function (r298_top, r298_bottom) {
                    var _r298_t0, _r298_t1;
                    return function () {
                        var r300_xBaseKnot, _r300_t2;
                        var _r300_t1 = this;
                        var r300_currentGlyph = _r300_t1;
                        var _r300_t0 = r282_CalcDS(r298_top, r298_bottom);
                        var r300_ds = _r300_t0[0];
                        var r300_ds2 = _r300_t0[1];
                        var r300_joinX = r1_mix(r282_yrstrokel, r282_yrstroker, 1 - r282_px2);
                        var r300_joinY = r1_mix(r298_bottom + r300_ds2, r298_top - r300_ds, 1 - r282_py2);
                        if (r279_bottomShape)
                            return void 0;
                        if (r282_useStraightBottom) {
                            r300_xBaseKnot = r1_mix(r282_yrstroker, r300_joinX, (r298_top - r298_bottom) / (r298_top - r300_joinY));
                            r300_currentGlyph.include(r271_HSerif.lb(r300_xBaseKnot - r271_HalfStroke * r271_HVContrast, r298_bottom, r282_yBottomJut));
                        } else
                            r300_currentGlyph.include(r271_HSerif.lb(r282_yrstrokel - r271_HalfStroke * r271_HVContrast, r298_bottom, r282_yBottomJut));
                        return void 0;
                    };
                };
                var r282_yJoinProportion = function (r303_hooktop, r303_x) {
                    var _r303_t0, _r303_t1;
                    return r1_linreg(1 - r282_px2, 1 - r282_py2, r279_straightBar && !r303_hooktop ? 1 : r282_px1, r279_straightBar && !r303_hooktop ? 1 : r282_py1, (r303_x - r282_yrstrokel) / (r282_yrstroker - r282_yrstrokel));
                };
                var r282_yJoinHeight = function (r304_ds, r304_ds2, r304_top, r304_bottom, r304_hooktop) {
                    var _r304_t0, _r304_t1;
                    return r1_mix(r304_bottom + r304_ds2, r304_top - r304_ds, r282_yJoinProportion(r304_hooktop, r271_Middle));
                };
                var r282_yJoinKnots = function (r305_ds, r305_ds2, r305_top, r305_bottom, r305_hooktop) {
                    var _r305_t0, _r305_t1;
                    return [
                        r279_straightBar ? [] : [r271_flat(r1_mix(r271_Width - r282_yrstrokel, r271_Width - r282_yrstroker, r282_px1), r1_mix(r305_bottom + r305_ds2, r305_top - r305_ds, r282_py1))],
                        r271_curl(r271_Middle, r282_yJoinHeight(r305_ds, r305_ds2, r305_top, r305_bottom, r305_hooktop), r271_widths.lhs(r271_Stroke * r282_yshrink))
                    ];
                };
                var r282_SmallYStrokeSplitMask = function (r306_top, r306_bottom, r306_hooktop, r306_dir, r306_elev) {
                    var _r306_t1, _r306_t2;
                    var _r306_t0 = r282_CalcDS(r306_top, r306_bottom);
                    var r306_ds = _r306_t0[0];
                    var r306_ds2 = _r306_t0[1];
                    var r306_jp0 = r282_yJoinProportion(r306_hooktop, r271_Width / 2 - r271_Width / 2 * r306_dir);
                    var r306_jp1 = r282_yJoinProportion(r306_hooktop, r271_Width / 2 + r271_Width / 2 * r306_dir);
                    var r306_hs = 0.75 * r271_Stroke;
                    var r306_yLeft = r1_mix(r306_bottom + r306_ds2, r306_top - r306_ds, r306_jp1) + r306_hs - r1_fallback(r306_elev, 0);
                    var r306_yRight = r1_mix(r306_bottom + r306_ds2, r306_top - r306_ds, r306_jp0) + r306_hs - r1_fallback(r306_elev, 0);
                    var r306_yMin = Math.min(r306_bottom, r306_yLeft, r306_yRight);
                    return r271_xn$spirooutline$1aao(r271_corner(r271_Width, r306_yMin), r271_corner(r271_Width, r306_yRight), r271_corner(0, r306_yLeft), r271_corner(0, r306_yMin));
                };
                r282_exports.SmallYShape = r282_SmallYShape = function (r308_top, r308_bottom) {
                    var _r308_t0, _r308_t1;
                    return function () {
                        var _r310_leti1, _r310_t3, _r310_t4, _r310_t5, _r310_t6, _r310_t7, _r310_tag8, _r310_t9;
                        var _r310_t2 = this;
                        var r310_currentGlyph = _r310_t2;
                        var _r310_t0 = r282_CalcDS(r308_top, r308_bottom);
                        var r310_ds = _r310_t0[0];
                        var r310_ds2 = _r310_t0[1];
                        r310_currentGlyph.include(r282_yOgonekAttach(r308_top, r308_bottom, r282_yshrink));
                        r310_currentGlyph.include(r271_intersection(r282_SmallYStrokeSplitMask(r308_top, r308_bottom, false, 1), r271_dispiro(r282_yTopKnots(r282_yrstroker, r308_top, r308_bottom, r310_ds, 1), r282_yBaseKnots(r308_top, r308_bottom, 1))));
                        r310_currentGlyph.include(r271_difference(r271_dispiro(r282_yTopKnots(r282_yrstroker, r308_top, r308_bottom, r310_ds, 1), r282_yBaseKnots(r308_top, r308_bottom, r282_yshrink)), r282_SmallYStrokeSplitMask(r308_top, r308_bottom, false, 1, 1)));
                        r310_currentGlyph.include(r271_difference(r271_dispiro(r282_yTopKnots(r271_Width - r282_yrstroker, r308_top, r308_bottom, r310_ds, -1), r282_yJoinKnots(r310_ds, r310_ds2, r308_top, r308_bottom)), r282_SmallYStrokeSplitMask(r308_top, r308_bottom, false, -1), r271_Rect(r308_bottom + r271_HalfStroke, r308_bottom - r308_top, 0, r271_Width)));
                        if (r282_doSlabTop) {
                            _r310_t4 = r310_currentGlyph;
                            _r310_t5 = _r310_t4.include;
                            _r310_t6 = r271_SerifFrame.fromDf(r271_DivFrame(1), r308_top, r308_bottom);
                            _r310_t9 = function (_r310_leti1) {
                                var r316_sf = _r310_leti1;
                                return function () {
                                    var _r318_t1;
                                    var _r318_t0 = this;
                                    var r318_currentGlyph = _r318_t0;
                                    r318_currentGlyph.include(r316_sf.lt.full, true, true);
                                    r318_currentGlyph.include(r316_sf.rt.full);
                                    return void 0;
                                };
                            }(_r310_t6);
                            _r310_t5.call(_r310_t4, _r310_t9);
                        }
                        if (r282_doSlabBottom)
                            r310_currentGlyph.include(r282_yBaseSerif(r308_top, r308_bottom));
                        if (r282_doSlabMotion)
                            r310_currentGlyph.include(r271_HSerif.lt(r271_SB, r308_top, r271_SideJut));
                        return void 0;
                    };
                };
                r282_exports.SmallYHookTopShape = r282_SmallYHookTopShape = function (r324_top, r324_bottom) {
                    var _r324_t0, _r324_t1;
                    return function () {
                        var _r326_leti1, _r326_t3, _r326_t4, _r326_t5, _r326_t6, _r326_t7, _r326_tag8, _r326_t9;
                        var _r326_t2 = this;
                        var r326_currentGlyph = _r326_t2;
                        var _r326_t0 = r282_CalcDS(r324_top, r324_bottom);
                        var r326_ds = _r326_t0[0];
                        var r326_ds2 = _r326_t0[1];
                        r326_currentGlyph.include(r282_yOgonekAttach(r324_top, r324_bottom, r282_yshrink, true));
                        r326_currentGlyph.include(r271_intersection(r282_SmallYStrokeSplitMask(r324_top, r324_bottom, true, 1), r271_dispiro(r271_widths.rhs(), r271_straight.left.start(r1_mix(r282_yrstrokel, r282_yrstroker, r282_px1) - r271_HalfStroke + r271_TailX, r271_XH - r271_Stroke - r271_O), r282_yBaseKnots(r324_top, r324_bottom, 1, true))));
                        r326_currentGlyph.include(r271_difference(r271_dispiro(r271_widths.rhs(), r271_straight.left.start(r1_mix(r282_yrstrokel, r282_yrstroker, r282_px1) - r271_HalfStroke + r271_TailX, r271_XH - r271_Stroke - r271_O), r282_yBaseKnots(r324_top, r324_bottom, r282_yshrink, true)), r282_SmallYStrokeSplitMask(r324_top, r324_bottom, true, 1, 1)));
                        r326_currentGlyph.include(r271_difference(r271_dispiro(r271_widths.center(), r282_yTopKnots(r271_Width - r282_yrstroker, r324_top, r324_bottom, r326_ds, -1), r282_yJoinKnots(r326_ds, r326_ds2, r324_top, r324_bottom, true)), r282_SmallYStrokeSplitMask(r324_top, r324_bottom, true, -1), r271_Rect(r324_bottom + r271_HalfStroke, r324_bottom - r324_top, 0, r271_Width)));
                        if (r282_doSlabTop) {
                            _r326_t4 = r326_currentGlyph;
                            _r326_t5 = _r326_t4.include;
                            _r326_t6 = r271_SerifFrame.fromDf(r271_DivFrame(1), r324_top, r324_bottom);
                            _r326_t9 = function (_r326_leti1) {
                                var r332_sf = _r326_leti1;
                                return r332_sf.lt.full;
                            }(_r326_t6);
                            _r326_t5.call(_r326_t4, _r326_t9);
                        }
                        if (r282_doSlabBottom)
                            r326_currentGlyph.include(r282_yBaseSerif(r324_top, r324_bottom));
                        if (r282_doSlabMotion)
                            r326_currentGlyph.include(r271_HSerif.lt(r271_SB, r324_top, r271_SideJut));
                        return void 0;
                    };
                };
                r282_exports.SmallLambdaShape = r282_SmallLambdaShape = function (r336_top, r336_bottom) {
                    var _r336_t0, _r336_t1;
                    return r271_union(function () {
                        var _r338_t1;
                        var _r338_t0 = this;
                        var r338_currentGlyph = _r338_t0;
                        r338_currentGlyph.gizmo = r271_Italify(-r271_para.slopeAngle);
                        r338_currentGlyph.include(r282_SmallYShape(r336_top, r336_bottom));
                        r338_currentGlyph.gizmo = r271_Italify(+r271_para.slopeAngle);
                        r338_currentGlyph.include(r271_Translate(0, -r1_mix(r336_bottom, r336_top, 0.5)));
                        r338_currentGlyph.include(r271_Scale(1, -1));
                        r338_currentGlyph.include(r271_Translate(0, +r1_mix(r336_bottom, r336_top, 0.5)));
                        return void 0;
                    });
                };
                return r282_exports;
            }();
        };
        var r271_NonCursiveConfig = r1_SuffixCfg.weave({
            'straight': true,
            'curly': false
        }, {
            '': r271_xn$BSSTRAIGHT$3cah,
            'turn': r271_xn$BSTURN$3cah,
            'loop': r271_xn$BSLOOP$3cah
        }, {
            'serifless': r271_xn$SLABNONE$5sIl,
            'serifed': r271_xn$SLABALL$5sIl,
            'motionSerifed': r271_xn$SLABMOTION$5sIl
        });
        var _r271_t11 = Object.entries(r271_NonCursiveConfig)[Symbol.iterator]();
        var _r271_t12 = void 0;
        while (!(_r271_t12 = _r271_t11.next()).done) {
            _r271_t13 = _r271_t12.value;
            r271_suffix = _r271_t13[0];
            r271_straightBar = _r271_t13[1][0];
            r271_bottomShape = _r271_t13[1][1];
            r271_slabKind = _r271_t13[1][2];
            _r271_t13[1];
            (function () {
                var r345_Shapes = r271_GenNonCursiveShape(r271_straightBar, r271_bottomShape, r271_slabKind);
                r271_xn$createAndSaveGlyphImpl$2Lrc3c('y.' + r271_suffix, null, function () {
                    var _r348_t1;
                    var _r348_t0 = this;
                    var r348_currentGlyph = _r348_t0;
                    r348_currentGlyph.include(r271_MarkSet.p());
                    r348_currentGlyph.setBaseAnchor('strike', r271_Middle, r271_XH / 2);
                    r348_currentGlyph.setBaseAnchor('yBelowDot', r271_RightSB - 0.5 * r271_DotRadius, r271_Descender + r271_AccentStackOffset + r271_DotRadius);
                    r348_currentGlyph.include(r345_Shapes.SmallYShape(r271_XH, r271_Descender));
                    return void 0;
                });
                r271_xn$createAndSaveGlyphImpl$2Lrc3c('grek/lambda.' + r271_suffix, null, function () {
                    var _r355_t1;
                    var _r355_t0 = this;
                    var r355_currentGlyph = _r355_t0;
                    r355_currentGlyph.include(r271_MarkSet.b());
                    r355_currentGlyph.include(r345_Shapes.SmallLambdaShape(r271_Ascender, 0));
                    return void 0;
                });
                r271_xn$createAndSaveGlyphImpl$2Lrc3c('lambdaSlash.' + r271_suffix, null, function () {
                    var _r360_t1;
                    var _r360_t0 = this;
                    var r360_currentGlyph = _r360_t0;
                    r360_currentGlyph.include(r271_MarkSet.b());
                    r360_currentGlyph.include(r271_union(r271_FlatSlashShape(r1_mix(r271_SB, r271_RightSB, 0.45), r1_mix(0, r271_CAP, 0.8), r271_OverlayStroke / 2), r345_Shapes.SmallLambdaShape(r271_Ascender, 0)));
                    return void 0;
                });
                r271_xn$createAndSaveGlyphImpl$2Lrc3c('yHookTop.' + r271_suffix, null, function () {
                    var _r365_t1;
                    var _r365_t0 = this;
                    var r365_currentGlyph = _r365_t0;
                    r365_currentGlyph.include(r271_MarkSet.p());
                    r365_currentGlyph.setBaseAnchor('strike', r271_Middle, r271_XH / 2);
                    r365_currentGlyph.setBaseAnchor('yBelowDot', r271_RightSB - 0.5 * r271_DotRadius, r271_Descender + r271_AccentStackOffset + r271_DotRadius);
                    r365_currentGlyph.include(r345_Shapes.SmallYHookTopShape(r271_XH, r271_Descender));
                    return void 0;
                });
                return r271_xn$createAndSaveGlyphImpl$2Lrc3c('yCap.' + r271_suffix, null, function () {
                    var _r372_t1;
                    var _r372_t0 = this;
                    var r372_currentGlyph = _r372_t0;
                    r372_currentGlyph.include(r271_MarkSet.capital());
                    r372_currentGlyph.setBaseAnchor('strike', r271_Middle, r271_XH / 2 - r271_Descender);
                    r372_currentGlyph.include(r345_Shapes.SmallYShape(r271_CAP, 0));
                    return void 0;
                });
            }());
        }
        var r271_Cursive = function () {
            var r378_Arc, r378_Hook, r378_FlatHook, r378_Serifs;
            var r378_exports = {};
            r378_exports.Arc = r378_Arc = function (r386_top, r386_bottom) {
                var _r386_t0, _r386_t1;
                return r271_xn$createAndSaveGlyphImpl$2Lrc3c(null, null, function () {
                    var _r389_t1;
                    var _r389_t0 = this;
                    var r389_currentGlyph = _r389_t0;
                    r389_currentGlyph.include(r271_nShoulder(new r271_xn$NamedParameterPair$2Lrc9b('top', r386_top), new r271_xn$NamedParameterPair$2Lrc9b('bottom', r386_bottom), new r271_xn$NamedParameterPair$2Lrc9b('left', r271_SB + r271_Stroke * r271_HVContrast), new r271_xn$NamedParameterPair$2Lrc9b('right', r271_RightSB), new r271_xn$NamedParameterPair$2Lrc9b('fine', r271_ShoulderFine)));
                    r389_currentGlyph.include(r271_FlipAround(r271_Middle, r1_mix(r386_bottom, r386_top, 0.5)));
                    return void 0;
                });
            };
            r378_exports.Hook = r378_Hook = function (r398_y0, r398_bottom) {
                var _r398_t0, _r398_t1;
                return r271_dispiro(r271_widths.rhs(), r271_flat(r271_RightSB, r398_y0, r271_heading(r271_Downward)), r271_curl(r271_RightSB, r398_bottom + r271_SmallArchDepthA), r271_hookend(r398_bottom + r271_O), r271_g4(r271_SB, r398_bottom + r271_SHook));
            };
            r378_exports.FlatHook = r378_FlatHook = function (r400_y0, r400_bottom) {
                var _r400_t0, _r400_t1;
                var r400_hd = r271_FlatHookDepth(r271_DivFrame(1), 9 / 8);
                var r400_xTerminal = Math.min(r271_RightSB - r400_hd.x - 0.1, r1_mix(r271_SB, r271_RightSB, 1 / 5));
                return r271_dispiro(r271_widths.rhs(), r271_flat(r271_RightSB, r400_y0, r271_heading(r271_Downward)), r271_curl(r271_RightSB, r400_bottom + r400_hd.y), r271_arcvh(), r271_flat(r271_RightSB - r400_hd.x, r400_bottom), r271_curl(r400_xTerminal, r400_bottom));
            };
            r378_exports.Serifs = r378_Serifs = function (r402_top, r402_slabType) {
                var _r402_t1, _r402_t2;
                var _r402_t0 = r271_slabKind;
                var r402_doSlabTop = _r402_t0[0];
                var r402_doSlabBottom = _r402_t0[1];
                var r402_doSlabMotion = _r402_t0[2];
                var r402_sf = r271_SerifFrame.fromDf(r271_DivFrame(1), r402_top, 0);
                return !r402_doSlabTop ? r271_xn$noshape$3cah() : function () {
                    var _r404_t1;
                    var _r404_t0 = this;
                    var r404_currentGlyph = _r404_t0;
                    r404_currentGlyph.include(r402_doSlabMotion ? r402_sf.lt.outer : r402_sf.lt.full, true, true);
                    r404_currentGlyph.include(r402_doSlabMotion ? r271_xn$noshape$3cah() : r402_sf.rt.full);
                    return void 0;
                };
            };
            return r378_exports;
        }();
        var r271_CursiveConfig = r1_SuffixCfg.weave({
            'cursive': r271_Cursive.Hook,
            'cursiveFlatHook': r271_Cursive.FlatHook
        }, {
            'serifless': r271_xn$SLABNONE$5sIl,
            'serifed': r271_xn$SLABALL$5sIl,
            'motionSerifed': r271_xn$SLABCURSIVEMOTION$5sIl8
        });
        var _r271_t14 = Object.entries(r271_CursiveConfig)[Symbol.iterator]();
        var _r271_t15 = void 0;
        while (!(_r271_t15 = _r271_t14.next()).done) {
            _r271_t16 = _r271_t15.value;
            r271_suffix = _r271_t16[0];
            r271_hookShape = _r271_t16[1][0];
            r271_slabKind = _r271_t16[1][1];
            _r271_t16[1];
            (function () {
                r271_xn$createAndSaveGlyphImpl$2Lrc3c('y.' + r271_suffix, null, function () {
                    var _r412_t1;
                    var _r412_t0 = this;
                    var r412_currentGlyph = _r412_t0;
                    r412_currentGlyph.include(r271_MarkSet.p());
                    r412_currentGlyph.setBaseAnchor('overlay', r271_Middle, r271_XH / 2);
                    r412_currentGlyph.setBaseAnchor('yBelowDot', r271_Middle, r271_Descender);
                    r412_currentGlyph.include(r271_Cursive.Arc(r271_XH, 0));
                    r412_currentGlyph.include(r271_hookShape(r271_XH, r271_Descender));
                    r412_currentGlyph.include(r271_Cursive.Serifs(r271_XH, r271_slabKind));
                    return void 0;
                });
                r271_xn$createAndSaveGlyphImpl$2Lrc3c('yHookTop.' + r271_suffix, null, function () {
                    var _r421_t1;
                    var _r421_t0 = this;
                    var r421_currentGlyph = _r421_t0;
                    r421_currentGlyph.include(r271_MarkSet.p());
                    r421_currentGlyph.include(r271_Cursive.Arc(r271_XH, 0));
                    r421_currentGlyph.include(r271_hookShape(r271_XH - r271_TailY - r271_HalfStroke, r271_Descender));
                    r421_currentGlyph.include(r271_TopHook.rBarInner(r271_RightSB, 0, r271_XH));
                    r421_currentGlyph.include(r271_Cursive.Serifs(r271_XH, r271_slabKind));
                    r421_currentGlyph.ejectTagged('serifRT');
                    return void 0;
                });
                return r271_xn$createAndSaveGlyphImpl$2Lrc3c('yCap.' + r271_suffix, null, function () {
                    var _r430_t1;
                    var _r430_t0 = this;
                    var r430_currentGlyph = _r430_t0;
                    r430_currentGlyph.include(r271_MarkSet.capital());
                    r430_currentGlyph.include(r271_Cursive.Arc(r271_CAP, r271_CAP - r271_XH));
                    r430_currentGlyph.include(r271_hookShape(r271_CAP, 0));
                    r430_currentGlyph.include(r271_Cursive.Serifs(r271_CAP, r271_slabKind));
                    return void 0;
                });
            }());
        }
        r271_xn$selectvariant$7Hrq('y', 'y');
        r271_xn$selectvariant$7Hrq('y/nonCursive', new r271_xn$NamedParameterPair$2Lrc9b('shapeFrom', 'y'));
        r271_xn$linkreducedvariant$5sIl8('y/sansSerif', 'y', r1_MathSansSerif);
        r271_alias('cyrl/u', 1091, 'y');
        r271_turned('turny', 654, 'y/nonCursive', r271_Middle, r271_XH / 2, r271_MarkSet.b());
        r271_xn$deriveglyphs$7Hrq('turnyBelt', 122630, 'y/nonCursive', function (r436_src, r436_sel) {
            var _r436_t0, _r436_t1;
            return function () {
                var _r438_t1;
                var _r438_t0 = this;
                var r438_currentGlyph = _r438_t0;
                r438_currentGlyph.include(r271_MarkSet.b());
                r438_currentGlyph.include(r271_xn$referglyph$1aao(r436_src));
                r438_currentGlyph.include(r271_FlipAround(r271_Middle, r271_XH / 2));
                r438_currentGlyph.include(r271_BeltOverlay.at(r271_Middle, r271_XH));
                return void 0;
            };
        });
        var _r271_t17 = Object.entries(r271_DotVariants)[Symbol.iterator]();
        var _r271_t18 = void 0;
        while (!(_r271_t18 = _r271_t17.next()).done) {
            _r271_t19 = _r271_t18.value;
            r271_suffix = _r271_t19[0];
            r271_DrawAt = _r271_t19[1][0];
            r271_kdr = _r271_t19[1][1];
            _r271_t19[1];
            (function () {
                return r271_xn$createAndSaveGlyphImpl$2Lrc3c('yDotBelowDot1.' + r271_suffix, null, function () {
                    var _r448_t1;
                    var _r448_t0 = this;
                    var r448_currentGlyph = _r448_t0;
                    r448_currentGlyph.setMarkAnchor('yBelowDot', 0, 0, 0, r271_belowMarkStack);
                    r448_currentGlyph.include(r271_DrawAt(0, -r271_AccentStackOffset, r271_DotRadius * r271_kdr));
                    return void 0;
                });
            }());
        }
        r271_xn$selectvariant$7Hrq('yDotBelowDot1', new r271_xn$NamedParameterPair$2Lrc9b('follow', 'diacriticDot'));
        r271_CreateAccentedComposition('yDotBelow', 7925, 'y', 'yDotBelowDot1');
        r271_xn$selectvariant$7Hrq('yHookTop', 436, new r271_xn$NamedParameterPair$2Lrc9b('follow', 'y'));
        r271_xn$selectvariant$7Hrq('cyrl/U', 1059, new r271_xn$NamedParameterPair$2Lrc9b('shapeFrom', 'yCap'));
        r271_xn$selectvariant$7Hrq('yLoop', 7935, new r271_xn$NamedParameterPair$2Lrc9b('shapeFrom', 'y'));
        r271_xn$selectvariant$7Hrq('YLoop', 7934, new r271_xn$NamedParameterPair$2Lrc9b('follow', 'yLoop'), new r271_xn$NamedParameterPair$2Lrc9b('shapeFrom', 'yCap'));
        r271_xn$selectvariant$7Hrq('grek/lambda', 955);
        r271_xn$selectvariant$7Hrq('lambdaSlash', 411, new r271_xn$NamedParameterPair$2Lrc9b('follow', 'grek/lambda'));
        var _r271_t20 = r271_xn$Capture$2Lrc8['Letter-Blackboard'].resolve();
        var r271_BBS = _r271_t20.BBS;
        var r271_BBD = _r271_t20.BBD;
        return r271_xn$createAndSaveGlyphImpl$2Lrc3c('mathbb/y', 120170, function () {
            var _r461_t1;
            var _r461_t0 = this;
            var r461_currentGlyph = _r461_t0;
            var r461_kDiag = r271_DiagCorDs(r271_XH, (r271_RightSB - r271_SB) / 2, r271_BBD * 0.25);
            r461_currentGlyph.include(r271_MarkSet.p());
            r461_currentGlyph.include(r271_HBar.t(r271_SB, r271_SB + r461_kDiag * r271_BBD, r271_XH, r271_BBS));
            r461_currentGlyph.include(r271_intersection(r271_xn$spirooutline$1aao(r271_corner(r1_mix(r271_RightSB, r271_Middle, -1), r1_mix(r271_XH, 0, -1)), r271_corner(r1_mix(r271_RightSB, r271_Middle, 2), r1_mix(r271_XH, 0, 2)), r271_corner(-r271_Width * 2, r1_mix(r271_XH, 0, 2)), r271_corner(-r271_Width * 2, r1_mix(r271_XH, 0, -1))), r271_Rect(r271_XH, r271_Descender, -r271_Width, 2 * r271_Width), r271_union(r271_ExtLineCenter(1, r271_BBS, r271_SB, r271_XH, r271_Middle - 0.25 * r461_kDiag * r271_BBD, 0), r271_ExtLineCenter(1, r271_BBS, r271_SB + r461_kDiag * r271_BBD, r271_XH, r271_Middle + 0.75 * r461_kDiag * r271_BBD, 0))));
            r461_currentGlyph.include(r271_intersection(r271_Rect(r271_XH, r271_Descender, -r271_Width, 2 * r271_Width), r271_ExtLineCenter(1, r271_BBS, r271_RightSB, r271_XH, r271_Middle, 0)));
            return void 0;
        });
    });
    return void 0;
});
