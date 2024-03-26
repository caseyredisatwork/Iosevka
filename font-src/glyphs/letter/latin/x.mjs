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
var r1_clamp = _r1_t8.clamp;
var r1_fallback = _r1_t8.fallback;
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
    r270_xn$Capture_Ext$2Lrc2b['$defineGlyphBlockImpl$'](r270_xn$Capture_Ext$2Lrc2b, 'Letter-Latin-X', function (r271_xn$Capture$2Lrc8, r271_xn$ExportCapture$2Lrc4b) {
        var r271_suffix, r271_baseShape, r271_serifShape, r271_fMaskBase, _r271_t11, _r271_t13, _r271_t14, _r271_t15, _r271_tag16, _r271_t17, _r271_tag18;
        var _r271_t0 = r271_xn$Capture$2Lrc8;
        var r271_xn$createAndSaveGlyphImpl$2Lrc3c = _r271_t0['$createAndSaveGlyphImpl$'];
        var r271_xn$NamedParameterPair$2Lrc9b = _r271_t0['$NamedParameterPair$'];
        var r271_xn$assignUnicodeImpl$2Lrc8b = _r271_t0['$assignUnicodeImpl$'];
        var r271_xn$execState$2Lrc0b = _r271_t0['$execState$'];
        var r271_MarkSet = _r271_t0.MarkSet;
        var r271_AS_BASE = _r271_t0.AS_BASE;
        var r271_ALSO_METRICS = _r271_t0.ALSO_METRICS;
        var r271_tagged = _r271_t0.tagged;
        var r271_DivFrame = _r271_t0.DivFrame;
        var _r271_t1 = r271_xn$Capture$2Lrc8.Metrics;
        var r271_Width = _r271_t1.Width;
        var r271_SB = _r271_t1.SB;
        var r271_CAP = _r271_t1.CAP;
        var r271_XH = _r271_t1.XH;
        var r271_Descender = _r271_t1.Descender;
        var r271_TanSlope = _r271_t1.TanSlope;
        var r271_HVContrast = _r271_t1.HVContrast;
        var r271_Upward = _r271_t1.Upward;
        var r271_Downward = _r271_t1.Downward;
        var r271_O = _r271_t1.O;
        var r271_OX = _r271_t1.OX;
        var r271_Hook = _r271_t1.Hook;
        var r271_ArchDepth = _r271_t1.ArchDepth;
        var r271_Stroke = _r271_t1.Stroke;
        var r271_HalfStroke = _r271_t1.HalfStroke;
        var r271_RightSB = _r271_t1.RightSB;
        var r271_Middle = _r271_t1.Middle;
        var r271_SideJut = _r271_t1.SideJut;
        var r271_AdviceStroke = _r271_t1.AdviceStroke;
        var r271_AdviceStroke2 = _r271_t1.AdviceStroke2;
        var r271_StrokeWidthBlend = _r271_t1.StrokeWidthBlend;
        var r271_ArchDepthAOf = _r271_t1.ArchDepthAOf;
        var r271_ArchDepthBOf = _r271_t1.ArchDepthBOf;
        var _r271_t2 = r271_xn$Capture$2Lrc8.SpiroFns;
        var r271_corner = _r271_t2.corner;
        var r271_flat = _r271_t2.flat;
        var r271_curl = _r271_t2.curl;
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
        var r271_Rect = _r271_t4.Rect;
        var r271_HSerif = _r271_t4.HSerif;
        var r271_HBar = _r271_t4.HBar;
        var r271_HOverlayBar = _r271_t4.HOverlayBar;
        var r271_FlipAround = _r271_t4.FlipAround;
        var r271_DiagCor = _r271_t4.DiagCor;
        var r271_ExtLineCenter = _r271_t4.ExtLineCenter;
        var r271_DiagCorDs = _r271_t4.DiagCorDs;
        var _r271_t5 = r271_xn$Capture$2Lrc8['Common-Derivatives'].resolve();
        var r271_xn$selectvariant$7Hrq = _r271_t5['select-variant'];
        var r271_xn$referglyph$1aao = _r271_t5['refer-glyph'];
        var r271_alias = _r271_t5.alias;
        var r271_xn$deriveglyphs$7Hrq = _r271_t5['derive-glyphs'];
        var r271_xn$derivecomposites$7Hrq = _r271_t5['derive-composites'];
        var r271_xn$linkreducedvariant$5sIl8 = _r271_t5['link-reduced-variant'];
        var r271_xn$aliasreducedvariant$1aao8 = _r271_t5['alias-reduced-variant'];
        var _r271_t6 = r271_xn$Capture$2Lrc8['Letter-Shared-Shapes'].resolve();
        var r271_ShoulderMidKnotRhs = _r271_t6.ShoulderMidKnotRhs;
        var r271_SerifFrame = _r271_t6.SerifFrame;
        var r271_WithSerifOverflowMask = _r271_t6.WithSerifOverflowMask;
        var _r271_t7 = r271_xn$Capture$2Lrc8['Letter-Shared-Shapes'].resolve();
        var r271_DiagonalTailInnerRadius = _r271_t7.DiagonalTailInnerRadius;
        var r271_DiagonalTailF = _r271_t7.DiagonalTailF;
        var _r271_t8 = r271_xn$Capture$2Lrc8['Letter-Shared-Shapes'].resolve();
        var r271_CyrDescender = _r271_t8.CyrDescender;
        var r271_PalatalHook = _r271_t8.PalatalHook;
        r271_xn$ExportCapture$2Lrc4b(function () {
            var _r278_t0, _r278_t1;
            return { 'HalfXStrand': r271_HalfXStrand };
        });
        var r271_HalfXStrand = function (r279_stb, r279_fSlab, r279__leftx, r279_lefty, r279_rightx, r279_righty, r279_turn, r279_pStraight, r279_tension, r279__fine) {
            var _r279_t0, _r279_t1;
            return function () {
                var r281_hst, r281_hse, r281_leftx2, r281_height, r281_slabClearance, r281_turnyleft, r281_cyleft, r281_straightxleft, r281_straightyleft, _r281_t1;
                var _r281_t0 = this;
                var r281_currentGlyph = _r281_t0;
                var r281_sbCor = r279_stb ? r271_StrokeWidthBlend(1, 6) * r271_OX * (Math.abs(r279_lefty - r279_righty) / r271_CAP) : 0;
                var r281_leftx = r279__leftx + (r271_HalfStroke * r271_HVContrast + Math.max(-r271_SideJut, r281_sbCor)) * (r279_rightx > r279__leftx ? 1 : -1);
                var r281_fine = (r279__fine || r271_Stroke) * 0.5;
                if (r279_stb) {
                    r281_hst = r271_HalfStroke * r271_DiagCor(r279_righty - r279_lefty, r279_rightx - r281_leftx, 0, 0);
                    r281_hse = r271_HalfStroke * Math.min(0.97, r271_AdviceStroke(3) / r271_Stroke);
                    r281_leftx2 = r279__leftx + (r281_hst * r271_HVContrast + Math.max(-r271_SideJut, r281_sbCor)) * (r279_rightx > r279__leftx ? 1 : -1);
                    r281_currentGlyph.include(r271_dispiro(r271_corner(r281_leftx2, r279_lefty, r271_widths.heading(r281_hst, r281_hst, r279_lefty < r279_righty ? r271_Upward : r271_Downward)), r271_corner(r279_rightx, r279_righty, r271_widths(r281_hse, r281_hse))));
                } else {
                    r281_height = Math.abs(r279_lefty - r279_righty);
                    r281_slabClearance = r279_fSlab ? r271_AdviceStroke2(2, 3, r281_height) : 0;
                    r281_turnyleft = r1_mix(r279_lefty, r279_righty, r279_fSlab ? Math.max(r279_turn, r281_slabClearance / r281_height) : r279_turn);
                    r281_cyleft = r1_mix(r281_turnyleft, r279_righty, r279_tension);
                    r281_straightxleft = r1_mix(r281_leftx, r279_rightx, r279_pStraight);
                    r281_straightyleft = r1_mix(r281_cyleft, r279_righty, r279_pStraight);
                    r281_currentGlyph.include(r271_dispiro(r271_widths.center(), r271_flat(r281_leftx, r279_lefty, r271_heading(r279_lefty < r279_righty ? r271_Upward : r271_Downward)), r271_curl(r281_leftx, r281_turnyleft, r271_heading(r279_lefty < r279_righty ? r271_Upward : r271_Downward)), r271_quadControls(0, (r281_cyleft - r281_turnyleft) / (r281_straightyleft - r281_turnyleft), 24), r271_flat(r281_straightxleft, r281_straightyleft), r271_curl(r279_rightx, r279_righty)));
                }
                return void 0;
            };
        };
        r271_xn$ExportCapture$2Lrc4b(function () {
            var _r285_t0, _r285_t1;
            return { 'XStrand': r271_XStrand };
        });
        var r271_XStrand = function (r286_stb, r286_slab, r286__leftx, r286_lefty, r286__rightx, r286_righty, r286_turn, r286_pStraight, r286_tension) {
            var _r286_t0, _r286_t1;
            return function () {
                var _r288_t1;
                var _r288_t0 = this;
                var r288_currentGlyph = _r288_t0;
                var r288_middlex = r1_mix(r286__leftx, r286__rightx, 0.5);
                var r288_middley = r1_mix(r286_lefty, r286_righty, 0.5);
                r288_currentGlyph.include(r271_HalfXStrand(r286_stb, r286_slab, r286__leftx, r286_lefty, r288_middlex, r288_middley, r286_turn, r286_pStraight, r286_tension));
                r288_currentGlyph.include(r271_HalfXStrand(r286_stb, r286_slab, r286__rightx, r286_righty, r288_middlex, r288_middley, r286_turn, r286_pStraight, r286_tension));
                return void 0;
            };
        };
        var r271_Shape = function () {
            var r293_StraightBase, r293_CurlyBase, r293_CursiveBase, r293_FullSerifs, r293_MotionSerifs, r293_MotionSerifsBilateral;
            var r293_exports = {};
            var r293_XBase = function (r300_fStraight, r300_fSlab, r300_top, r300_bottom, r300_turn, r300_tension) {
                var _r300_t0, _r300_t1;
                return function () {
                    var _r302_t1;
                    var _r302_t0 = this;
                    var r302_currentGlyph = _r302_t0;
                    r302_currentGlyph.include(r271_XStrand(r300_fStraight, r300_fSlab, r271_SB, r300_bottom, r271_RightSB, r300_top, r300_turn, 0.4, r300_tension), true, true);
                    r302_currentGlyph.include(r271_XStrand(r300_fStraight, r300_fSlab, r271_SB, r300_top, r271_RightSB, r300_bottom, r300_turn, 0.4, r300_tension));
                    return void 0;
                };
            };
            r293_exports.StraightBase = r293_StraightBase = function (r306_fSlab, r306_top, r306_bottom, r306_turn, r306_tension) {
                var _r306_t0, _r306_t1;
                return r293_XBase(true, r306_fSlab, r306_top, r306_bottom, r306_turn, r306_tension);
            };
            r293_exports.CurlyBase = r293_CurlyBase = function (r308_fSlab, r308_top, r308_bottom, r308_turn, r308_tension) {
                var _r308_t0, _r308_t1;
                return r293_XBase(false, r308_fSlab, r308_top, r308_bottom, r308_turn, r308_tension);
            };
            var r293_XCursiveHalfShape = function (r309_top, r309_bottom) {
                var _r309_t0, _r309_t1;
                return function () {
                    var _r311_t1;
                    var _r311_t0 = this;
                    var r311_currentGlyph = _r311_t0;
                    var r311_ada = r271_ArchDepthAOf(r271_ArchDepth * 0.8, r271_Width / 2);
                    var r311_adb = r271_ArchDepthBOf(r271_ArchDepth * 0.8, r271_Width / 2);
                    var r311_kThin = 0.55;
                    var r311_swEnd = r271_AdviceStroke(2.75);
                    var r311_swMid = r271_AdviceStroke(3);
                    var r311_xCenterRight = r271_Middle + r271_HVContrast * r311_swMid / 2;
                    var r311_xCenterLeft = r271_Middle - r271_HVContrast * r311_swMid / 2;
                    var r311_xTurn = r1_mix(r271_RightSB - r311_swEnd * r271_HVContrast, r311_xCenterRight, 0.5);
                    var r311_hook1Depth = r271_Hook + r271_Stroke * 0.125;
                    var r311_hook1StraightDepth = Math.min(r311_hook1Depth - r311_swEnd * 1.125, Math.max(1, r311_hook1Depth / 5 - r311_swEnd / 4));
                    var r311_fineMid = r311_swMid * r311_kThin;
                    var r311_rIn = Math.max(0.2 * (r271_RightSB - r271_SB) - 0.7 * r271_Stroke * r271_HVContrast, r271_AdviceStroke(16));
                    var r311_flatHookDepth = 0.7 * (r271_RightSB - r271_SB) - r311_swEnd - 1.5 * r311_rIn;
                    var r311_upperHalf = r311_currentGlyph.include(r271_dispiro(r271_flat(r311_xCenterRight - r271_HVContrast * r311_fineMid, r1_mix(r309_bottom, r309_top, 0.5) + r271_O, r271_widths.rhs.heading(r311_fineMid, r271_Upward)), r271_curl(r311_xCenterRight - r271_HVContrast * r311_fineMid, r309_top - r311_ada), r271_arcvh(), r271_ShoulderMidKnotRhs(r311_xTurn, r309_top - r271_O, r311_fineMid, r311_swEnd, +1, -1), r271_archv(), r271_flat(r271_RightSB - r271_OX, r309_top - r311_hook1Depth + r311_hook1StraightDepth, r271_heading(r271_Downward)), r271_curl(r271_RightSB - r271_OX, r309_top - r311_hook1Depth, r271_heading(r271_Downward))));
                    var r311_lowerHalf = r311_currentGlyph.include(r271_dispiro(r271_flat(r311_xCenterRight - 0.5 * r271_HVContrast * r311_fineMid, r1_mix(r309_bottom, r309_top, 0.5) - r271_O, r271_widths.center(r311_fineMid)), r271_curl(r311_xCenterRight - 0.5 * r271_HVContrast * r311_fineMid, r309_bottom + Math.min(r311_adb, r311_swMid + r311_rIn)), r271_arcvh(16), r271_DiagonalTailF(1, r271_DivFrame(1), r311_xCenterRight - 0.5 * r271_HVContrast * r271_Stroke + r271_TanSlope * r311_rIn, r309_bottom, r311_rIn, 50, r311_flatHookDepth, r271_Stroke)));
                    var r311_lowerHalfLastKnot = r311_lowerHalf.rhsKnots[r311_lowerHalf.rhsKnots.length - 1];
                    r311_currentGlyph.setBaseAnchor('cyrlDescenderAttach', r311_lowerHalfLastKnot.x, r311_lowerHalfLastKnot.y);
                    return void 0;
                };
            };
            r293_exports.CursiveBase = r293_CursiveBase = function (r316_fSerifs, r316_top, r316_bottom, r316_turn, r316_tension) {
                var _r316_t0, _r316_t1;
                return function () {
                    var _r318_t1;
                    var _r318_t0 = this;
                    var r318_currentGlyph = _r318_t0;
                    r318_currentGlyph.include(r293_XCursiveHalfShape(r316_top, r316_bottom));
                    r318_currentGlyph.include(r271_FlipAround(r271_Middle, r1_mix(r316_bottom, r316_top, 0.5)));
                    r318_currentGlyph.include(r293_XCursiveHalfShape(r316_top, r316_bottom));
                    return void 0;
                };
            };
            r293_exports.FullSerifs = r293_FullSerifs = function (r323_top, r323_bot) {
                var _r323_leti0, _r323_t1, _r323_t2, _r323_t4, _r323_tag5;
                var _r323_t3 = r271_SerifFrame.fromDf(r271_DivFrame(1), r323_top, r323_bot);
                return function (_r323_leti0) {
                    var r324_sf = _r323_leti0;
                    return function () {
                        var _r326_t1;
                        var _r326_t0 = this;
                        var r326_currentGlyph = _r326_t0;
                        r326_currentGlyph.include(r324_sf.lt.full, true, true);
                        r326_currentGlyph.include(r324_sf.rt.full);
                        r326_currentGlyph.include(r324_sf.lb.full);
                        r326_currentGlyph.include(r324_sf.rb.full);
                        return void 0;
                    };
                }(_r323_t3);
            };
            r293_exports.MotionSerifs = r293_MotionSerifs = function (r332_top, r332_bot) {
                var _r332_t0, _r332_t1;
                return function () {
                    var _r334_t1;
                    var _r334_t0 = this;
                    var r334_currentGlyph = _r334_t0;
                    r334_currentGlyph.include(r271_tagged('serifLT', r271_HSerif.lt(r271_SB, r332_top, r271_SideJut)));
                    return void 0;
                };
            };
            r293_exports.MotionSerifsBilateral = r293_MotionSerifsBilateral = function (r337_top, r337_bot) {
                var _r337_t0, _r337_t1;
                return function () {
                    var _r339_t1;
                    var _r339_t0 = this;
                    var r339_currentGlyph = _r339_t0;
                    r339_currentGlyph.include(r271_tagged('serifLT', r271_HSerif.lt(r271_SB, r337_top, r271_SideJut)));
                    r339_currentGlyph.include(r271_tagged('serifRB', r271_HSerif.rb(r271_RightSB, r337_bot, r271_SideJut)));
                    return void 0;
                };
            };
            return r293_exports;
        }();
        var r271_Config = {
            'straightSerifless': [
                r271_Shape.StraightBase,
                null,
                false
            ],
            'curlySerifless': [
                r271_Shape.CurlyBase,
                null,
                false
            ],
            'cursive': [
                r271_Shape.CursiveBase,
                null,
                false
            ],
            'straightSerifed': [
                r271_Shape.StraightBase,
                r271_Shape.FullSerifs,
                true
            ],
            'curlySerifed': [
                r271_Shape.CurlyBase,
                r271_Shape.FullSerifs,
                true
            ],
            'straightMotionSerifed': [
                r271_Shape.StraightBase,
                r271_Shape.MotionSerifs,
                false
            ],
            'curlyMotionSerifed': [
                r271_Shape.CurlyBase,
                r271_Shape.MotionSerifs,
                false
            ],
            'straightBilateralMotionSerifed': [
                r271_Shape.StraightBase,
                r271_Shape.MotionSerifsBilateral,
                false
            ],
            'curlyBilateralMotionSerifed': [
                r271_Shape.CurlyBase,
                r271_Shape.MotionSerifsBilateral,
                false
            ]
        };
        var _r271_t9 = Object.entries(r271_Config)[Symbol.iterator]();
        var _r271_t10 = void 0;
        while (!(_r271_t10 = _r271_t9.next()).done) {
            _r271_t11 = _r271_t10.value;
            r271_suffix = _r271_t11[0];
            r271_baseShape = _r271_t11[1][0];
            r271_serifShape = _r271_t11[1][1];
            r271_fMaskBase = _r271_t11[1][2];
            _r271_t11[1];
            (function () {
                var r344_letterShape = function (r345_top, r345_bottom, r345_turn, r345_tension) {
                    var _r345_t0, _r345_t1;
                    return function () {
                        var _r347_t1;
                        var _r347_t0 = this;
                        var r347_currentGlyph = _r347_t0;
                        var r347_base = r271_baseShape(r271_fMaskBase, r345_top, r345_bottom, r345_turn, r345_tension);
                        r347_currentGlyph.include(r271_WithSerifOverflowMask(r271_fMaskBase, r345_top, r345_bottom, r271_SB, r271_RightSB, r347_base));
                        if (r271_serifShape)
                            r347_currentGlyph.include(r271_serifShape(r345_top, r345_bottom));
                        return void 0;
                    };
                };
                r271_xn$createAndSaveGlyphImpl$2Lrc3c('X.' + r271_suffix, null, function () {
                    var _r352_t1;
                    var _r352_t0 = this;
                    var r352_currentGlyph = _r352_t0;
                    r352_currentGlyph.include(r271_MarkSet.capital());
                    r352_currentGlyph.include(r344_letterShape(r271_CAP, 0, 0.1, 0.28));
                    return void 0;
                });
                r271_xn$createAndSaveGlyphImpl$2Lrc3c('x.' + r271_suffix, null, function () {
                    var _r357_t1;
                    var _r357_t0 = this;
                    var r357_currentGlyph = _r357_t0;
                    r357_currentGlyph.include(r271_MarkSet.e());
                    r357_currentGlyph.include(r344_letterShape(r271_XH, 0, 0.1, 0.24));
                    return void 0;
                });
                r271_xn$createAndSaveGlyphImpl$2Lrc3c('latn/chi.' + r271_suffix, null, function () {
                    var _r362_t1;
                    var _r362_t0 = this;
                    var r362_currentGlyph = _r362_t0;
                    r362_currentGlyph.include(r271_MarkSet.p());
                    r362_currentGlyph.include(r344_letterShape(r271_XH, r271_Descender, 0.05, 0.11));
                    return void 0;
                });
                return r271_xn$createAndSaveGlyphImpl$2Lrc3c('latn/Chi.' + r271_suffix, null, function () {
                    var _r367_t1;
                    var _r367_t0 = this;
                    var r367_currentGlyph = _r367_t0;
                    r367_currentGlyph.include(r271_MarkSet.capDesc());
                    r367_currentGlyph.include(r344_letterShape(r271_CAP, r271_Descender, 0.05, 0.11));
                    return void 0;
                });
            }());
        }
        r271_xn$selectvariant$7Hrq('X', 'X');
        r271_xn$linkreducedvariant$5sIl8('X/sansSerif', 'X', r1_MathSansSerif);
        r271_alias('grek/Chi', 935, 'X');
        r271_xn$aliasreducedvariant$1aao8('grek/Chi/sansSerif', 'grek/Chi', 'X/sansSerif', r1_MathSansSerif);
        r271_alias('cyrl/Ha', 1061, 'X');
        r271_xn$selectvariant$7Hrq('x', 'x');
        r271_xn$linkreducedvariant$5sIl8('x/sansSerif', 'x', r1_MathSansSerif);
        r271_xn$selectvariant$7Hrq('cyrl/ha', 1093, new r271_xn$NamedParameterPair$2Lrc9b('shapeFrom', 'x'));
        r271_xn$selectvariant$7Hrq('grek/chi', 967, new r271_xn$NamedParameterPair$2Lrc9b('shapeFrom', 'latn/chi'));
        r271_xn$selectvariant$7Hrq('latn/chi', 43859, new r271_xn$NamedParameterPair$2Lrc9b('follow', 'x'));
        r271_xn$selectvariant$7Hrq('latn/Chi', 42931, new r271_xn$NamedParameterPair$2Lrc9b('follow', 'X'));
        var r271_AddDescender = function (r374_Ctor) {
            var _r374_t0, _r374_t1;
            return function (r375_src, r375_sel) {
                var _r375_t0, _r375_t1;
                return function () {
                    var r377_attach, r377_sw, _r377_t1;
                    var _r377_t0 = this;
                    var r377_currentGlyph = _r377_t0;
                    r377_currentGlyph.include(r271_xn$referglyph$1aao(r375_src), r271_AS_BASE, r271_ALSO_METRICS);
                    var r377_attachAnchor = r377_currentGlyph.baseAnchors.cyrlDescenderAttach;
                    if (r377_attachAnchor) {
                        r377_attach = r377_currentGlyph.gizmo.unapply(r377_attachAnchor);
                        r377_currentGlyph.include(r374_Ctor.r(r377_attach.x, 0, new r271_xn$NamedParameterPair$2Lrc9b('yAttach', r377_attach.y)));
                    } else {
                        r377_sw = r374_Ctor.Sw(r271_Stroke);
                        r377_currentGlyph.include(r374_Ctor.r(new r271_xn$NamedParameterPair$2Lrc9b('x', r271_RightSB + r271_SideJut + r377_sw * r271_TanSlope), new r271_xn$NamedParameterPair$2Lrc9b('y', 0), new r271_xn$NamedParameterPair$2Lrc9b('xLink', r271_RightSB - r271_HVContrast * r271_HalfStroke)));
                    }
                    return void 0;
                };
            };
        };
        r271_xn$deriveglyphs$7Hrq('cyrl/HaDescender', 1202, 'cyrl/Ha', r271_AddDescender(r271_CyrDescender));
        r271_xn$deriveglyphs$7Hrq('cyrl/haDescender', 1203, 'cyrl/ha', r271_AddDescender(r271_CyrDescender));
        r271_xn$deriveglyphs$7Hrq('cyrl/HaHook', 1276, 'cyrl/Ha', r271_AddDescender(r271_PalatalHook));
        r271_xn$deriveglyphs$7Hrq('cyrl/haHook', 1277, 'cyrl/ha', r271_AddDescender(r271_PalatalHook));
        r271_alias('xPalatalHook', 7565, 'cyrl/haHook');
        var r271_CyrlHaBarShape = function (r385_top) {
            var _r385_t0, _r385_t1;
            return r271_HOverlayBar(r1_mix(r271_SB, r271_RightSB, 0.08), r1_mix(r271_SB, r271_RightSB, 0.92), r385_top / 2);
        };
        r271_xn$derivecomposites$7Hrq('cyrl/HaBar', 1278, 'cyrl/Ha', r271_CyrlHaBarShape(r271_CAP));
        r271_xn$derivecomposites$7Hrq('cyrl/haBar', 1279, 'cyrl/ha', r271_CyrlHaBarShape(r271_XH));
        var _r271_t12 = r271_xn$Capture$2Lrc8['Letter-Blackboard'].resolve();
        var r271_BBS = _r271_t12.BBS;
        var r271_BBD = _r271_t12.BBD;
        var r271_BBXShape = function (r387_l, r387_r, r387_top) {
            var _r387_leti0, _r387_t1, _r387_t2, _r387_t4, _r387_tag5;
            var _r387_t3 = r271_DiagCorDs(r387_top, r387_r - r387_l, r271_BBD);
            return function (_r387_leti0) {
                var r388_kDiag = _r387_leti0;
                return r271_union(r271_intersection(r271_Rect(r387_top, 0, -r271_Width, r271_Width * 2), r271_union(r271_ExtLineCenter(1, r271_BBS, r387_l, r387_top, r387_r - r388_kDiag * r271_BBD, 0), r271_ExtLineCenter(1, r271_BBS, r387_l + r388_kDiag * r271_BBD, r387_top, r387_r, 0))), r271_HBar.t(r387_l, r387_l + r388_kDiag * r271_BBD, r387_top, r271_BBS), r271_HBar.b(r387_r, r387_r - r388_kDiag * r271_BBD, 0, r271_BBS), r271_intersection(r271_Rect(r387_top, 0, -r271_Width, r271_Width * 2), r271_difference(r271_ExtLineCenter(1, r271_BBS, r387_l, 0, r387_r, r387_top), r271_xn$spirooutline$1aao(r271_corner(r387_l, r387_top), r271_corner(r387_l + r388_kDiag * r271_BBD, r387_top), r271_corner(r387_r, 0), r271_corner(r387_r - r388_kDiag * r271_BBD, 0)))));
            }(_r387_t3);
        };
        r271_xn$createAndSaveGlyphImpl$2Lrc3c('mathbb/X', 120143, function () {
            var _r391_t1;
            var _r391_t0 = this;
            var r391_currentGlyph = _r391_t0;
            r391_currentGlyph.include(r271_MarkSet.capital(), true, true);
            r391_currentGlyph.include(r271_BBXShape(r271_SB, r271_RightSB, r271_CAP));
            return void 0;
        });
        return r271_xn$createAndSaveGlyphImpl$2Lrc3c('mathbb/x', 120169, function () {
            var _r396_t1;
            var _r396_t0 = this;
            var r396_currentGlyph = _r396_t0;
            r396_currentGlyph.include(r271_MarkSet.e(), true, true);
            r396_currentGlyph.include(r271_BBXShape(r271_SB, r271_RightSB, r271_XH));
            return void 0;
        });
    });
    return void 0;
});
