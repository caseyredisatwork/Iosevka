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
    r269_xn$Capture_Ext$2Lrc2b['$defineGlyphBlockImpl$'](r269_xn$Capture_Ext$2Lrc2b, 'Letter-Cyrillic-Yeri', function (r270_xn$Capture$2Lrc8, r270_xn$ExportCapture$2Lrc4b) {
        var r270_suffix, r270_Yeri, r270_fTail, _r270_t11, _r270_t12, _r270_t13, _r270_t14, _r270_tag15;
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
        var r270_SB = _r270_t1.SB;
        var r270_CAP = _r270_t1.CAP;
        var r270_XH = _r270_t1.XH;
        var r270_TanSlope = _r270_t1.TanSlope;
        var r270_HVContrast = _r270_t1.HVContrast;
        var r270_Downward = _r270_t1.Downward;
        var r270_Rightward = _r270_t1.Rightward;
        var r270_Leftward = _r270_t1.Leftward;
        var r270_O = _r270_t1.O;
        var r270_OX = _r270_t1.OX;
        var r270_TailY = _r270_t1.TailY;
        var r270_ArchDepth = _r270_t1.ArchDepth;
        var r270_Stroke = _r270_t1.Stroke;
        var r270_Jut = _r270_t1.Jut;
        var r270_VJut = _r270_t1.VJut;
        var r270_VJutStroke = _r270_t1.VJutStroke;
        var r270_CThinB = _r270_t1.CThinB;
        var r270_SLAB = _r270_t1.SLAB;
        var r270_HalfStroke = _r270_t1.HalfStroke;
        var r270_RightSB = _r270_t1.RightSB;
        var r270_ArchDepthA = _r270_t1.ArchDepthA;
        var r270_ArchDepthB = _r270_t1.ArchDepthB;
        var r270_SmallArchDepthA = _r270_t1.SmallArchDepthA;
        var r270_SmallArchDepthB = _r270_t1.SmallArchDepthB;
        var r270_CorrectionOMidX = _r270_t1.CorrectionOMidX;
        var r270_AdviceStroke = _r270_t1.AdviceStroke;
        var r270_AdviceStroke2 = _r270_t1.AdviceStroke2;
        var r270_ArchDepthAOf = _r270_t1.ArchDepthAOf;
        var r270_ArchDepthBOf = _r270_t1.ArchDepthBOf;
        var r270_YSmoothMidR = _r270_t1.YSmoothMidR;
        var r270_YSmoothMidL = _r270_t1.YSmoothMidL;
        var _r270_t2 = r270_xn$Capture$2Lrc8.SpiroFns;
        var r270_g4 = _r270_t2.g4;
        var r270_corner = _r270_t2.corner;
        var r270_flat = _r270_t2.flat;
        var r270_curl = _r270_t2.curl;
        var r270_end = _r270_t2.end;
        var r270_widths = _r270_t2.widths;
        var r270_heading = _r270_t2.heading;
        var r270_archv = _r270_t2.archv;
        var r270_arcvh = _r270_t2.arcvh;
        var r270_dispiro = _r270_t2.dispiro;
        var r270_xn$spirooutline$1aao = _r270_t2['spiro-outline'];
        var _r270_t3 = r270_xn$Capture$2Lrc8.BooleFns;
        var r270_union = _r270_t3.union;
        var _r270_t4 = r270_xn$Capture$2Lrc8.CommonShapes.resolve();
        var r270_HSerif = _r270_t4.HSerif;
        var r270_VSerif = _r270_t4.VSerif;
        var r270_HBar = _r270_t4.HBar;
        var r270_VBar = _r270_t4.VBar;
        var _r270_t5 = r270_xn$Capture$2Lrc8['Common-Derivatives'].resolve();
        var r270_xn$selectvariant$7Hrq = _r270_t5['select-variant'];
        var r270_alias = _r270_t5.alias;
        var _r270_t6 = r270_xn$Capture$2Lrc8['Letter-Shared-Metrics'].resolve();
        var r270_BowlXDepth = _r270_t6.BowlXDepth;
        var _r270_t7 = r270_xn$Capture$2Lrc8['Letter-Shared-Shapes'].resolve();
        var r270_ShoulderMidKnotLhsRev = _r270_t7.ShoulderMidKnotLhsRev;
        var r270_RightwardTailedBar = _r270_t7.RightwardTailedBar;
        var _r270_t8 = r270_xn$Capture$2Lrc8['Letter-Shared-Shapes'].resolve();
        var r270_LetterBarOverlay = _r270_t8.LetterBarOverlay;
        var r270_UpwardHookShape = _r270_t8.UpwardHookShape;
        var r270_VerticalHook = _r270_t8.VerticalHook;
        var r270_SerifFrame = _r270_t8.SerifFrame;
        var r270_DefaultBarPos = 0.55;
        r270_xn$ExportCapture$2Lrc4b(function () {
            var _r277_t0, _r277_t1;
            return { 'CyrlYeriUprightShape': r270_CyrlYeriUprightShape };
        });
        var r270_CyrlYeriUprightShape = function () {
            var _r278_t6;
            var _r278_t7 = arguments;
            var _r278_t0 = [].slice.call(_r278_t7, 0);
            var _r278_t1 = [];
            var _r278_t2 = 0;
            while (_r278_t2 < _r278_t0.length) {
                if (!(_r278_t0[_r278_t2] instanceof r270_xn$NamedParameterPair$2Lrc9b))
                    _r278_t1.push(_r278_t0[_r278_t2]);
                _r278_t2 = _r278_t2 + 1;
            }
            var _r278_t3 = _r278_t0;
            var _r278_t4 = _r278_t3.length;
            var _r278_t5 = 0;
            while (_r278_t5 < _r278_t4) {
                _r278_t2 = _r278_t3[_r278_t5];
                if (_r278_t2 && _r278_t2 instanceof r270_xn$NamedParameterPair$2Lrc9b && _r278_t2.left === 'top')
                    r278_top = _r278_t2.right;
                if (_r278_t2 && _r278_t2 instanceof r270_xn$NamedParameterPair$2Lrc9b && _r278_t2.left === 'left')
                    r278_left = _r278_t2.right;
                if (_r278_t2 && _r278_t2 instanceof r270_xn$NamedParameterPair$2Lrc9b && _r278_t2.left === 'right')
                    r278_right = _r278_t2.right;
                if (_r278_t2 && _r278_t2 instanceof r270_xn$NamedParameterPair$2Lrc9b && _r278_t2.left === 'stroke')
                    r278_stroke = _r278_t2.right;
                if (_r278_t2 && _r278_t2 instanceof r270_xn$NamedParameterPair$2Lrc9b && _r278_t2.left === 'jut')
                    r278_jut = _r278_t2.right;
                if (_r278_t2 && _r278_t2 instanceof r270_xn$NamedParameterPair$2Lrc9b && _r278_t2.left === 'pBar')
                    r278_pBar = _r278_t2.right;
                if (_r278_t2 && _r278_t2 instanceof r270_xn$NamedParameterPair$2Lrc9b && _r278_t2.left === 'yStart')
                    r278_yStart = _r278_t2.right;
                _r278_t5 = _r278_t5 + 1;
            }
            var r278_top = r1_fallback(r278_top, _r278_t1[0]);
            var r278_left = r1_fallback(r278_left, _r278_t1[1], r270_SB);
            var r278_right = r1_fallback(r278_right, _r278_t1[2], r270_RightSB);
            var r278_stroke = r1_fallback(r278_stroke, _r278_t1[3], r270_Stroke);
            var r278_jut = r1_fallback(r278_jut, _r278_t1[4], r270_Jut);
            var r278_pBar = r1_fallback(r278_pBar, _r278_t1[5], r270_DefaultBarPos);
            var r278_yStart = r1_fallback(r278_yStart, _r278_t1[6], r278_top);
            return function () {
                var _r284_t1;
                var _r284_t0 = this;
                var r284_currentGlyph = _r284_t0;
                var r284_bowl = r278_top * r278_pBar + r270_HalfStroke;
                var r284_turnRadius = r270_BowlXDepth(r284_bowl, 0, r278_left, r278_right, r278_stroke);
                var r284_ada = r270_ArchDepthAOf(r270_ArchDepth, r278_right - r278_left + r270_SB * 2);
                var r284_adb = r270_ArchDepthBOf(r270_ArchDepth, r278_right - r278_left + r270_SB * 2);
                var r284_fine = r278_stroke * r270_CThinB;
                var r284_yTurnBottomL = r270_YSmoothMidL(r284_bowl, 0, r284_ada, r284_adb);
                var r284_yTurnBottomR = r270_YSmoothMidR(r284_bowl, 0, r284_ada, r284_adb);
                r284_currentGlyph.include(r270_union(r270_dispiro(r270_widths.lhs(r278_stroke), r270_flat(r278_left + r270_Stroke * 0.2, 0, r270_heading(r270_Rightward)), r270_curl(Math.max(r278_left + r278_stroke * r270_TanSlope, r278_right - r284_turnRadius) + r270_CorrectionOMidX * r278_stroke, 0), r270_archv(8), r270_g4(r278_right - r270_OX, r284_yTurnBottomR), r270_arcvh(8), r270_flat(Math.max(r278_left + r278_stroke * r270_TanSlope, r278_right - r284_turnRadius) - r270_CorrectionOMidX * r278_stroke, r284_bowl), r270_curl(r278_left + r270_Stroke * 0.2, r284_bowl, r270_heading(r270_Leftward))), r270_VBar.l(r278_left, 0, r278_yStart, r278_stroke)));
                if (r270_SLAB) {
                    r284_currentGlyph.include(r270_tagged('serifYeriLB', r270_HSerif.lb(r278_left, 0, r278_jut - r278_stroke / 2 * r270_HVContrast, r278_stroke)));
                    r284_currentGlyph.include(r270_tagged('serifYeriLT', r270_HSerif.mt(r278_left + r278_stroke / 2 * r270_HVContrast, r278_top, r278_jut, r278_stroke)));
                }
                return void 0;
            };
        };
        r270_xn$ExportCapture$2Lrc4b(function () {
            var _r289_t0, _r289_t1;
            return { 'CyrlYeriRoundShape': r270_CyrlYeriRoundShape };
        });
        var r270_CyrlYeriRoundShape = function () {
            var _r290_t6;
            var _r290_t7 = arguments;
            var _r290_t0 = [].slice.call(_r290_t7, 0);
            var _r290_t1 = [];
            var _r290_t2 = 0;
            while (_r290_t2 < _r290_t0.length) {
                if (!(_r290_t0[_r290_t2] instanceof r270_xn$NamedParameterPair$2Lrc9b))
                    _r290_t1.push(_r290_t0[_r290_t2]);
                _r290_t2 = _r290_t2 + 1;
            }
            var _r290_t3 = _r290_t0;
            var _r290_t4 = _r290_t3.length;
            var _r290_t5 = 0;
            while (_r290_t5 < _r290_t4) {
                _r290_t2 = _r290_t3[_r290_t5];
                if (_r290_t2 && _r290_t2 instanceof r270_xn$NamedParameterPair$2Lrc9b && _r290_t2.left === 'top')
                    r290_top = _r290_t2.right;
                if (_r290_t2 && _r290_t2 instanceof r270_xn$NamedParameterPair$2Lrc9b && _r290_t2.left === 'left')
                    r290_left = _r290_t2.right;
                if (_r290_t2 && _r290_t2 instanceof r270_xn$NamedParameterPair$2Lrc9b && _r290_t2.left === 'right')
                    r290_right = _r290_t2.right;
                if (_r290_t2 && _r290_t2 instanceof r270_xn$NamedParameterPair$2Lrc9b && _r290_t2.left === 'stroke')
                    r290_stroke = _r290_t2.right;
                if (_r290_t2 && _r290_t2 instanceof r270_xn$NamedParameterPair$2Lrc9b && _r290_t2.left === 'jut')
                    r290_jut = _r290_t2.right;
                if (_r290_t2 && _r290_t2 instanceof r270_xn$NamedParameterPair$2Lrc9b && _r290_t2.left === 'pBar')
                    r290_pBar = _r290_t2.right;
                if (_r290_t2 && _r290_t2 instanceof r270_xn$NamedParameterPair$2Lrc9b && _r290_t2.left === 'yStart')
                    r290_yStart = _r290_t2.right;
                _r290_t5 = _r290_t5 + 1;
            }
            var r290_top = r1_fallback(r290_top, _r290_t1[0]);
            var r290_left = r1_fallback(r290_left, _r290_t1[1], r270_SB);
            var r290_right = r1_fallback(r290_right, _r290_t1[2], r270_RightSB);
            var r290_stroke = r1_fallback(r290_stroke, _r290_t1[3], r270_Stroke);
            var r290_jut = r1_fallback(r290_jut, _r290_t1[4], r270_Jut);
            var r290_pBar = r1_fallback(r290_pBar, _r290_t1[5], r270_DefaultBarPos);
            var r290_yStart = r1_fallback(r290_yStart, _r290_t1[6], r290_top);
            return function () {
                var _r296_t1;
                var _r296_t0 = this;
                var r296_currentGlyph = _r296_t0;
                var r296_bowl = r290_top * r290_pBar + r270_HalfStroke;
                var r296_turnRadius = r270_BowlXDepth(r296_bowl, 0, r290_left, r290_right, r290_stroke);
                var r296_ada = r270_ArchDepthAOf(r270_ArchDepth, r290_right - r290_left + r270_SB * 2);
                var r296_adb = r270_ArchDepthBOf(r270_ArchDepth, r290_right - r290_left + r270_SB * 2);
                var r296_fine = r290_stroke * r270_CThinB;
                var r296_yTurnBottomL = r270_YSmoothMidL(r296_bowl, 0, r296_ada, r296_adb);
                var r296_yTurnBottomR = r270_YSmoothMidR(r296_bowl, 0, r296_ada, r296_adb);
                r296_currentGlyph.include(r270_dispiro(r270_flat(r290_left, Math.max(r290_yStart, r296_yTurnBottomL + 0.1), r270_widths.lhs.heading(r290_stroke, r270_Downward)), r270_curl(r290_left, r296_yTurnBottomL), r270_arcvh(), r270_g4(r1_mix(r290_left, r290_right, 0.5) + r270_CorrectionOMidX * r290_stroke, r270_O), r270_archv(), r270_g4(r290_right - r270_OX, r296_yTurnBottomR), r270_arcvh(), r270_flat(r1_mix(r290_left, r290_right, 0.5) - r270_CorrectionOMidX * r290_stroke, r296_bowl), r270_curl(r290_left + r270_Stroke * 0.2, r296_bowl, r270_heading(r270_Leftward))));
                if (r270_SLAB)
                    r296_currentGlyph.include(r270_tagged('serifYeriLT', r270_HSerif.lt(r290_left, r290_top, r290_jut - r290_stroke / 2 * r270_HVContrast, r290_stroke)));
                return void 0;
            };
        };
        r270_xn$ExportCapture$2Lrc4b(function () {
            var _r300_t0, _r300_t1;
            return { 'CyrlYeriCursiveShape': r270_CyrlYeriCursiveShape };
        });
        var r270_CyrlYeriCursiveShape = function () {
            var _r301_t6;
            var _r301_t7 = arguments;
            var _r301_t0 = [].slice.call(_r301_t7, 0);
            var _r301_t1 = [];
            var _r301_t2 = 0;
            while (_r301_t2 < _r301_t0.length) {
                if (!(_r301_t0[_r301_t2] instanceof r270_xn$NamedParameterPair$2Lrc9b))
                    _r301_t1.push(_r301_t0[_r301_t2]);
                _r301_t2 = _r301_t2 + 1;
            }
            var _r301_t3 = _r301_t0;
            var _r301_t4 = _r301_t3.length;
            var _r301_t5 = 0;
            while (_r301_t5 < _r301_t4) {
                _r301_t2 = _r301_t3[_r301_t5];
                if (_r301_t2 && _r301_t2 instanceof r270_xn$NamedParameterPair$2Lrc9b && _r301_t2.left === 'top')
                    r301_top = _r301_t2.right;
                if (_r301_t2 && _r301_t2 instanceof r270_xn$NamedParameterPair$2Lrc9b && _r301_t2.left === 'left')
                    r301_left = _r301_t2.right;
                if (_r301_t2 && _r301_t2 instanceof r270_xn$NamedParameterPair$2Lrc9b && _r301_t2.left === 'right')
                    r301_right = _r301_t2.right;
                if (_r301_t2 && _r301_t2 instanceof r270_xn$NamedParameterPair$2Lrc9b && _r301_t2.left === 'stroke')
                    r301_stroke = _r301_t2.right;
                if (_r301_t2 && _r301_t2 instanceof r270_xn$NamedParameterPair$2Lrc9b && _r301_t2.left === 'jut')
                    r301_jut = _r301_t2.right;
                if (_r301_t2 && _r301_t2 instanceof r270_xn$NamedParameterPair$2Lrc9b && _r301_t2.left === 'pBar')
                    r301_pBar = _r301_t2.right;
                if (_r301_t2 && _r301_t2 instanceof r270_xn$NamedParameterPair$2Lrc9b && _r301_t2.left === 'yStart')
                    r301_yStart = _r301_t2.right;
                _r301_t5 = _r301_t5 + 1;
            }
            var r301_top = r1_fallback(r301_top, _r301_t1[0]);
            var r301_left = r1_fallback(r301_left, _r301_t1[1], r270_SB);
            var r301_right = r1_fallback(r301_right, _r301_t1[2], r270_RightSB);
            var r301_stroke = r1_fallback(r301_stroke, _r301_t1[3], r270_Stroke);
            var r301_jut = r1_fallback(r301_jut, _r301_t1[4], r270_Jut);
            var r301_pBar = r1_fallback(r301_pBar, _r301_t1[5], r270_DefaultBarPos);
            var r301_yStart = r1_fallback(r301_yStart, _r301_t1[6], r301_top);
            return function () {
                var _r307_t1;
                var _r307_t0 = this;
                var r307_currentGlyph = _r307_t0;
                var r307_bowl = r301_top * r301_pBar + r270_HalfStroke;
                var r307_turnRadius = r270_BowlXDepth(r307_bowl, 0, r301_left, r301_right, r301_stroke);
                var r307_ada = r270_ArchDepthAOf(r270_ArchDepth, r301_right - r301_left + r270_SB * 2);
                var r307_adb = r270_ArchDepthBOf(r270_ArchDepth, r301_right - r301_left + r270_SB * 2);
                var r307_fine = r301_stroke * r270_CThinB;
                var r307_yTurnBottomL = r270_YSmoothMidL(r307_bowl, 0, r307_ada, r307_adb);
                var r307_yTurnBottomR = r270_YSmoothMidR(r307_bowl, 0, r307_ada, r307_adb);
                r307_currentGlyph.include(r270_dispiro(r270_flat(r301_left, Math.max(r301_yStart, r307_yTurnBottomL + 0.1), r270_widths.lhs.heading(r301_stroke, r270_Downward)), r270_curl(r301_left, r307_yTurnBottomL), r270_arcvh(), r270_g4(r1_mix(r301_left, r301_right, 0.5) + r270_CorrectionOMidX * r301_stroke, r270_O), r270_archv(), r270_g4(r301_right - r270_OX, r307_yTurnBottomR), r270_arcvh(), r270_ShoulderMidKnotLhsRev(r1_mix(r301_left, r301_right, 0.5), r307_bowl, r307_fine, r301_stroke, -1, -1), r270_archv(), r270_g4.down.end(r301_left + (r301_stroke - r307_fine) * r270_HVContrast, r307_yTurnBottomL, r270_widths.lhs.heading(r307_fine, r270_Downward))));
                if (r270_SLAB)
                    r307_currentGlyph.include(r270_tagged('serifYeriLT', r270_HSerif.lt(r301_left, r301_top, r301_jut - r301_stroke / 2 * r270_HVContrast, r301_stroke)));
                return void 0;
            };
        };
        var r270_RevCyrYeriShape = function () {
            var _r310_t6;
            var _r310_t7 = arguments;
            var _r310_t0 = [].slice.call(_r310_t7, 0);
            var _r310_t1 = [];
            var _r310_t2 = 0;
            while (_r310_t2 < _r310_t0.length) {
                if (!(_r310_t0[_r310_t2] instanceof r270_xn$NamedParameterPair$2Lrc9b))
                    _r310_t1.push(_r310_t0[_r310_t2]);
                _r310_t2 = _r310_t2 + 1;
            }
            var _r310_t3 = _r310_t0;
            var _r310_t4 = _r310_t3.length;
            var _r310_t5 = 0;
            while (_r310_t5 < _r310_t4) {
                _r310_t2 = _r310_t3[_r310_t5];
                if (_r310_t2 && _r310_t2 instanceof r270_xn$NamedParameterPair$2Lrc9b && _r310_t2.left === 'top')
                    r310_top = _r310_t2.right;
                if (_r310_t2 && _r310_t2 instanceof r270_xn$NamedParameterPair$2Lrc9b && _r310_t2.left === 'left')
                    r310_left = _r310_t2.right;
                if (_r310_t2 && _r310_t2 instanceof r270_xn$NamedParameterPair$2Lrc9b && _r310_t2.left === 'right')
                    r310_right = _r310_t2.right;
                if (_r310_t2 && _r310_t2 instanceof r270_xn$NamedParameterPair$2Lrc9b && _r310_t2.left === 'stroke')
                    r310_stroke = _r310_t2.right;
                if (_r310_t2 && _r310_t2 instanceof r270_xn$NamedParameterPair$2Lrc9b && _r310_t2.left === 'jut')
                    r310_jut = _r310_t2.right;
                if (_r310_t2 && _r310_t2 instanceof r270_xn$NamedParameterPair$2Lrc9b && _r310_t2.left === 'pBar')
                    r310_pBar = _r310_t2.right;
                _r310_t5 = _r310_t5 + 1;
            }
            var r310_top = r1_fallback(r310_top, _r310_t1[0]);
            var r310_left = r1_fallback(r310_left, _r310_t1[1], r270_SB);
            var r310_right = r1_fallback(r310_right, _r310_t1[2], r270_RightSB);
            var r310_stroke = r1_fallback(r310_stroke, _r310_t1[3], r270_Stroke);
            var r310_jut = r1_fallback(r310_jut, _r310_t1[4], r270_Jut);
            var r310_pBar = r1_fallback(r310_pBar, _r310_t1[5], r270_DefaultBarPos);
            return function () {
                var _r316_t1;
                var _r316_t0 = this;
                var r316_currentGlyph = _r316_t0;
                var r316_bowl = r310_top * r310_pBar + r270_HalfStroke;
                var r316_turnRadius = r316_bowl * 0.45;
                var r316_turnbottom = r1_mix(0, r316_bowl, r270_ArchDepthB / (r270_ArchDepthA + r270_ArchDepthB));
                var r316_trShrink = Math.pow((r310_right - r310_left) / (r270_RightSB - r270_SB), 0.5);
                r316_currentGlyph.include(r270_dispiro(r270_widths.rhs(r310_stroke), r270_flat(r310_right - r270_Stroke * 0.2, 0, r270_heading(r270_Leftward)), r270_curl(r310_left + r316_turnRadius * r316_trShrink + r270_CorrectionOMidX * r310_stroke, 0), r270_archv(), r270_g4(r310_left + r270_O, r316_turnbottom), r270_arcvh(), r270_flat(r310_left + r316_turnRadius * r316_trShrink - r270_CorrectionOMidX * r310_stroke, r316_bowl), r270_curl(r310_right - r270_Stroke * 0.2, r316_bowl, r270_heading(r270_Rightward))));
                r316_currentGlyph.include(r270_VBar.r(r310_right, 0, r310_top, r310_stroke));
                if (r270_SLAB) {
                    r316_currentGlyph.include(r270_tagged('serifYeriRB', r270_HSerif.rb(r310_right, 0, r310_jut - r310_stroke / 2 * r270_HVContrast, r310_stroke)));
                    r316_currentGlyph.include(r270_tagged('serifYeriRT', r270_HSerif.mt(r310_right - r310_stroke / 2 * r270_HVContrast, r310_top, r310_jut, r310_stroke)));
                }
                return void 0;
            };
        };
        var r270_RevCyrYeriRoundShape = function () {
            var _r321_t6;
            var _r321_t7 = arguments;
            var _r321_t0 = [].slice.call(_r321_t7, 0);
            var _r321_t1 = [];
            var _r321_t2 = 0;
            while (_r321_t2 < _r321_t0.length) {
                if (!(_r321_t0[_r321_t2] instanceof r270_xn$NamedParameterPair$2Lrc9b))
                    _r321_t1.push(_r321_t0[_r321_t2]);
                _r321_t2 = _r321_t2 + 1;
            }
            var _r321_t3 = _r321_t0;
            var _r321_t4 = _r321_t3.length;
            var _r321_t5 = 0;
            while (_r321_t5 < _r321_t4) {
                _r321_t2 = _r321_t3[_r321_t5];
                if (_r321_t2 && _r321_t2 instanceof r270_xn$NamedParameterPair$2Lrc9b && _r321_t2.left === 'top')
                    r321_top = _r321_t2.right;
                if (_r321_t2 && _r321_t2 instanceof r270_xn$NamedParameterPair$2Lrc9b && _r321_t2.left === 'left')
                    r321_left = _r321_t2.right;
                if (_r321_t2 && _r321_t2 instanceof r270_xn$NamedParameterPair$2Lrc9b && _r321_t2.left === 'right')
                    r321_right = _r321_t2.right;
                if (_r321_t2 && _r321_t2 instanceof r270_xn$NamedParameterPair$2Lrc9b && _r321_t2.left === 'stroke')
                    r321_stroke = _r321_t2.right;
                if (_r321_t2 && _r321_t2 instanceof r270_xn$NamedParameterPair$2Lrc9b && _r321_t2.left === 'jut')
                    r321_jut = _r321_t2.right;
                if (_r321_t2 && _r321_t2 instanceof r270_xn$NamedParameterPair$2Lrc9b && _r321_t2.left === 'pBar')
                    r321_pBar = _r321_t2.right;
                if (_r321_t2 && _r321_t2 instanceof r270_xn$NamedParameterPair$2Lrc9b && _r321_t2.left === 'yStart')
                    r321_yStart = _r321_t2.right;
                _r321_t5 = _r321_t5 + 1;
            }
            var r321_top = r1_fallback(r321_top, _r321_t1[0]);
            var r321_left = r1_fallback(r321_left, _r321_t1[1], r270_SB);
            var r321_right = r1_fallback(r321_right, _r321_t1[2], r270_RightSB);
            var r321_stroke = r1_fallback(r321_stroke, _r321_t1[3], r270_Stroke);
            var r321_jut = r1_fallback(r321_jut, _r321_t1[4], r270_Jut);
            var r321_pBar = r1_fallback(r321_pBar, _r321_t1[5], r270_DefaultBarPos);
            var r321_yStart = r1_fallback(r321_yStart, _r321_t1[6], r321_top);
            return function () {
                var _r327_t1;
                var _r327_t0 = this;
                var r327_currentGlyph = _r327_t0;
                var r327_bowl = r321_top * r321_pBar + r270_HalfStroke;
                var r327_turnRadius = r270_BowlXDepth(r327_bowl, 0, r321_left, r321_right, r321_stroke);
                var r327_ada = r270_ArchDepthAOf(r270_ArchDepth, r321_right - r321_left + r270_SB * 2);
                var r327_adb = r270_ArchDepthBOf(r270_ArchDepth, r321_right - r321_left + r270_SB * 2);
                var r327_fine = r321_stroke * r270_CThinB;
                var r327_yTurnBottomL = r270_YSmoothMidL(r327_bowl, 0, r327_ada, r327_adb);
                var r327_yTurnBottomR = r270_YSmoothMidR(r327_bowl, 0, r327_ada, r327_adb);
                r327_currentGlyph.include(r270_dispiro(r270_flat(r321_right, Math.max(r321_yStart, r327_yTurnBottomR + 0.1), r270_widths.rhs.heading(r321_stroke, r270_Downward)), r270_curl(r321_right, r327_yTurnBottomR), r270_arcvh(), r270_g4(r1_mix(r321_left, r321_right, 0.5) + r270_CorrectionOMidX * r321_stroke, r270_O), r270_archv(), r270_g4(r321_left + r270_OX, r327_yTurnBottomL), r270_arcvh(), r270_flat(r1_mix(r321_left, r321_right, 0.5) - r270_CorrectionOMidX * r321_stroke, r327_bowl), r270_curl(r321_right - r270_Stroke * 0.2, r327_bowl, r270_heading(r270_Rightward))));
                return void 0;
            };
        };
        var r270_CyrBackYerShape = function () {
            var _r329_t6;
            var _r329_t7 = arguments;
            var _r329_t0 = [].slice.call(_r329_t7, 0);
            var _r329_t1 = [];
            var _r329_t2 = 0;
            while (_r329_t2 < _r329_t0.length) {
                if (!(_r329_t0[_r329_t2] instanceof r270_xn$NamedParameterPair$2Lrc9b))
                    _r329_t1.push(_r329_t0[_r329_t2]);
                _r329_t2 = _r329_t2 + 1;
            }
            var _r329_t3 = _r329_t0;
            var _r329_t4 = _r329_t3.length;
            var _r329_t5 = 0;
            while (_r329_t5 < _r329_t4) {
                _r329_t2 = _r329_t3[_r329_t5];
                if (_r329_t2 && _r329_t2 instanceof r270_xn$NamedParameterPair$2Lrc9b && _r329_t2.left === 'Yeri')
                    r329_Yeri = _r329_t2.right;
                if (_r329_t2 && _r329_t2 instanceof r270_xn$NamedParameterPair$2Lrc9b && _r329_t2.left === 'top')
                    r329_top = _r329_t2.right;
                if (_r329_t2 && _r329_t2 instanceof r270_xn$NamedParameterPair$2Lrc9b && _r329_t2.left === 'left')
                    r329_left = _r329_t2.right;
                if (_r329_t2 && _r329_t2 instanceof r270_xn$NamedParameterPair$2Lrc9b && _r329_t2.left === 'right')
                    r329_right = _r329_t2.right;
                if (_r329_t2 && _r329_t2 instanceof r270_xn$NamedParameterPair$2Lrc9b && _r329_t2.left === 'stroke')
                    r329_stroke = _r329_t2.right;
                if (_r329_t2 && _r329_t2 instanceof r270_xn$NamedParameterPair$2Lrc9b && _r329_t2.left === 'jut')
                    r329_jut = _r329_t2.right;
                _r329_t5 = _r329_t5 + 1;
            }
            var r329_Yeri = r1_fallback(r329_Yeri, _r329_t1[0]);
            var r329_top = r1_fallback(r329_top, _r329_t1[1]);
            var r329_left = r1_fallback(r329_left, _r329_t1[2]);
            var r329_right = r1_fallback(r329_right, _r329_t1[3]);
            var r329_stroke = r1_fallback(r329_stroke, _r329_t1[4], r270_Stroke);
            var r329_jut = r1_fallback(r329_jut, _r329_t1[5], r270_Jut);
            return function () {
                var _r335_t1;
                var _r335_t0 = this;
                var r335_currentGlyph = _r335_t0;
                var r335_xLeftBarLeftEdge = Math.max(r329_right - (r270_RightSB - r270_SB), r270_SLAB ? r1_mix(r329_left, r329_right, 0.35) - 0.5 * r270_HVContrast * r329_stroke : r1_mix(r329_left, r329_right, 0.2) - 0.25 * r270_HVContrast * r329_stroke);
                var r335_xTopBarLeftEnd = r1_mix(0, r329_left, r270_SLAB ? 0.25 : 0.375);
                r335_currentGlyph.include(r270_HBar.t(r335_xTopBarLeftEnd, r270_Stroke * 0.1 + r335_xLeftBarLeftEdge, r329_top, r329_stroke));
                r335_currentGlyph.include(r329_Yeri(r329_top, new r270_xn$NamedParameterPair$2Lrc9b('left', r335_xLeftBarLeftEdge), new r270_xn$NamedParameterPair$2Lrc9b('right', r329_right), new r270_xn$NamedParameterPair$2Lrc9b('stroke', r329_stroke), new r270_xn$NamedParameterPair$2Lrc9b('jut', r329_jut)));
                if (r270_SLAB)
                    r335_currentGlyph.include(r270_VSerif.dl(r335_xTopBarLeftEnd, r329_top, r270_VJut, Math.min(r270_VJutStroke * r329_stroke / r270_Stroke, 0.625 * (r335_xLeftBarLeftEdge - r335_xTopBarLeftEnd))));
                return void 0;
            };
        };
        var r270_CyrNeutralYerShape = function () {
            var _r343_t6;
            var _r343_t7 = arguments;
            var _r343_t0 = [].slice.call(_r343_t7, 0);
            var _r343_t1 = [];
            var _r343_t2 = 0;
            while (_r343_t2 < _r343_t0.length) {
                if (!(_r343_t0[_r343_t2] instanceof r270_xn$NamedParameterPair$2Lrc9b))
                    _r343_t1.push(_r343_t0[_r343_t2]);
                _r343_t2 = _r343_t2 + 1;
            }
            var _r343_t3 = _r343_t0;
            var _r343_t4 = _r343_t3.length;
            var _r343_t5 = 0;
            while (_r343_t5 < _r343_t4) {
                _r343_t2 = _r343_t3[_r343_t5];
                if (_r343_t2 && _r343_t2 instanceof r270_xn$NamedParameterPair$2Lrc9b && _r343_t2.left === 'Yeri')
                    r343_Yeri = _r343_t2.right;
                if (_r343_t2 && _r343_t2 instanceof r270_xn$NamedParameterPair$2Lrc9b && _r343_t2.left === 'top')
                    r343_top = _r343_t2.right;
                if (_r343_t2 && _r343_t2 instanceof r270_xn$NamedParameterPair$2Lrc9b && _r343_t2.left === 'left')
                    r343_left = _r343_t2.right;
                if (_r343_t2 && _r343_t2 instanceof r270_xn$NamedParameterPair$2Lrc9b && _r343_t2.left === 'right')
                    r343_right = _r343_t2.right;
                if (_r343_t2 && _r343_t2 instanceof r270_xn$NamedParameterPair$2Lrc9b && _r343_t2.left === 'stroke')
                    r343_stroke = _r343_t2.right;
                if (_r343_t2 && _r343_t2 instanceof r270_xn$NamedParameterPair$2Lrc9b && _r343_t2.left === 'jut')
                    r343_jut = _r343_t2.right;
                _r343_t5 = _r343_t5 + 1;
            }
            var r343_Yeri = r1_fallback(r343_Yeri, _r343_t1[0]);
            var r343_top = r1_fallback(r343_top, _r343_t1[1]);
            var r343_left = r1_fallback(r343_left, _r343_t1[2]);
            var r343_right = r1_fallback(r343_right, _r343_t1[3]);
            var r343_stroke = r1_fallback(r343_stroke, _r343_t1[4], r270_Stroke);
            var r343_jut = r1_fallback(r343_jut, _r343_t1[5], r270_Jut);
            return function () {
                var _r349_t1;
                var _r349_t0 = this;
                var r349_currentGlyph = _r349_t0;
                var r349_xLeftBarLeftEdge = Math.max(r343_right - (r270_RightSB - r270_SB), r270_SLAB ? r1_mix(r343_left, r343_right, 0.35) - 0.5 * r270_HVContrast * r343_stroke : r1_mix(r343_left, r343_right, 0.2) - 0.25 * r270_HVContrast * r343_stroke);
                var r349_xTopBarLeftEnd = r1_mix(0, r343_left, r270_SLAB ? 0.25 : 0.375);
                r349_currentGlyph.include(r343_Yeri(r343_top, new r270_xn$NamedParameterPair$2Lrc9b('left', r349_xLeftBarLeftEdge), new r270_xn$NamedParameterPair$2Lrc9b('right', r343_right), new r270_xn$NamedParameterPair$2Lrc9b('stroke', r343_stroke), new r270_xn$NamedParameterPair$2Lrc9b('jut', r343_jut), new r270_xn$NamedParameterPair$2Lrc9b('yStart', r343_top - r270_TailY - 0.5 * r343_stroke)));
                r349_currentGlyph.ejectTagged('serifYeriLT');
                r349_currentGlyph.include(r270_VerticalHook.l(r349_xLeftBarLeftEdge, r343_top - r270_TailY - 0.5 * r343_stroke, r349_xTopBarLeftEnd - r349_xLeftBarLeftEdge - 0.5 * r343_stroke, -r270_TailY, r343_stroke));
                return void 0;
            };
        };
        var r270_CyrYeryShape = function (r358_Yeri, r358_df, r358_top, r358_fBackYer, r358_fTail) {
            var _r358_t0, _r358_t1;
            return function () {
                var _r360_t1;
                var _r360_t0 = this;
                var r360_currentGlyph = _r360_t0;
                var r360_sw = r358_fBackYer ? r270_AdviceStroke(3.25, r358_df.div) : r358_df.mvs;
                var r360_jut = Math.min(r270_Jut, Math.pow(r360_sw / r270_Stroke, 0.5) * r270_Jut);
                var r360_xm = r1_mix(r358_df.rightSB - r360_sw * r270_HVContrast, r358_df.middle + r360_sw / 2 * r270_HVContrast, 0.75);
                r360_currentGlyph.include(r358_fBackYer ? r270_CyrBackYerShape(r358_Yeri, new r270_xn$NamedParameterPair$2Lrc9b('top', r358_top), new r270_xn$NamedParameterPair$2Lrc9b('left', r358_df.leftSB), new r270_xn$NamedParameterPair$2Lrc9b('right', r360_xm), new r270_xn$NamedParameterPair$2Lrc9b('stroke', r360_sw), new r270_xn$NamedParameterPair$2Lrc9b('jut', r360_jut)) : r358_Yeri(new r270_xn$NamedParameterPair$2Lrc9b('top', r358_top), new r270_xn$NamedParameterPair$2Lrc9b('left', r358_df.leftSB), new r270_xn$NamedParameterPair$2Lrc9b('right', r360_xm), new r270_xn$NamedParameterPair$2Lrc9b('stroke', r360_sw), new r270_xn$NamedParameterPair$2Lrc9b('jut', r360_jut)));
                r360_currentGlyph.include(r358_fTail ? r270_RightwardTailedBar(r358_df.rightSB, 0, r358_top, r360_sw) : r270_VBar.r(r358_df.rightSB, 0, r358_top, r360_sw));
                if (r270_SLAB) {
                    r360_currentGlyph.include(r270_tagged('serifRT', r358_Yeri !== r270_CyrlYeriUprightShape ? function () {
                        var _r375_t1;
                        var _r375_t0 = this;
                        var r375_currentGlyph = _r375_t0;
                        return void 0;
                    } : r270_HSerif.mt(r358_df.rightSB - r360_sw / 2 * r270_HVContrast, r358_top, r360_jut, r360_sw)));
                    if (!r358_fTail)
                        r360_currentGlyph.include(r270_tagged('serifRB', r358_Yeri !== r270_CyrlYeriUprightShape ? r270_HSerif.rb(r358_df.rightSB, 0, r360_jut - 0.5 * r360_sw * r270_HVContrast, r360_sw) : r270_HSerif.mb(r358_df.rightSB - r360_sw / 2 * r270_HVContrast, 0, r360_jut, r360_sw)));
                }
                return void 0;
            };
        };
        var r270_ZhuangToneSixShape = function (r377_Yeri, r377_top) {
            var _r377_t0, _r377_t1;
            return function () {
                var _r379_t1;
                var _r379_t0 = this;
                var r379_currentGlyph = _r379_t0;
                r379_currentGlyph.include(r377_Yeri(r377_top));
                r379_currentGlyph.ejectTagged('serifYeriLT');
                var r379_s = Math.max(r270_Stroke, r270_XH * 0.1);
                r379_currentGlyph.include(r270_xn$spirooutline$1aao(r270_corner(r270_SB, r377_top), r270_corner(r270_SB - r270_O, r377_top), r270_corner(r270_SB - r270_O, r377_top - r379_s * 2), r270_corner(r270_SB, r377_top - r379_s * 2), r270_corner(r270_SB - r379_s, r377_top - r379_s)));
                return void 0;
            };
        };
        var r270_YerConfig = {
            'corner': [
                r270_CyrlYeriUprightShape,
                false
            ],
            'round': [
                r270_CyrlYeriRoundShape,
                false
            ],
            'cursive': [
                r270_CyrlYeriCursiveShape,
                false
            ],
            'cornerTailed': [
                r270_CyrlYeriUprightShape,
                true
            ],
            'roundTailed': [
                r270_CyrlYeriRoundShape,
                true
            ],
            'cursiveTailed': [
                r270_CyrlYeriCursiveShape,
                true
            ]
        };
        var r270_YeriOverlayBar = function (r383_df, r383_top) {
            var _r383_t0, _r383_t1;
            var r383_stroke = r270_AdviceStroke2(2, 3, r383_top);
            return r270_LetterBarOverlay.l.in(new r270_xn$NamedParameterPair$2Lrc9b('x', r383_df.leftSB), new r270_xn$NamedParameterPair$2Lrc9b('bot', r383_top * r270_DefaultBarPos + r383_stroke / 2), new r270_xn$NamedParameterPair$2Lrc9b('top', r383_top - (r270_SLAB ? r270_Stroke : 0)));
        };
        var _r270_t9 = Object.entries(r270_YerConfig)[Symbol.iterator]();
        var _r270_t10 = void 0;
        while (!(_r270_t10 = _r270_t9.next()).done) {
            _r270_t11 = _r270_t10.value;
            r270_suffix = _r270_t11[0];
            r270_Yeri = _r270_t11[1][0];
            r270_fTail = _r270_t11[1][1];
            _r270_t11[1];
            (function () {
                r270_xn$createAndSaveGlyphImpl$2Lrc3c('cyrl/Yeri.' + r270_suffix, null, function () {
                    var _r392_t1;
                    var _r392_t0 = this;
                    var r392_currentGlyph = _r392_t0;
                    var r392_df = r270_DivFrame(1);
                    r392_currentGlyph.setWidth(r392_df.width);
                    r392_currentGlyph.include(r392_df.markSet.capital());
                    r392_currentGlyph.include(r270_Yeri(new r270_xn$NamedParameterPair$2Lrc9b('left', r392_df.leftSB), new r270_xn$NamedParameterPair$2Lrc9b('right', r392_df.rightSB), r270_CAP));
                    return void 0;
                });
                r270_xn$createAndSaveGlyphImpl$2Lrc3c('cyrl/yeri.' + r270_suffix, null, function () {
                    var _r400_t1;
                    var _r400_t0 = this;
                    var r400_currentGlyph = _r400_t0;
                    var r400_df = r270_DivFrame(1);
                    r400_currentGlyph.setWidth(r400_df.width);
                    r400_currentGlyph.include(r400_df.markSet.e());
                    r400_currentGlyph.include(r270_Yeri(new r270_xn$NamedParameterPair$2Lrc9b('left', r400_df.leftSB), new r270_xn$NamedParameterPair$2Lrc9b('right', r400_df.rightSB), r270_XH));
                    return void 0;
                });
                r270_xn$createAndSaveGlyphImpl$2Lrc3c('cyrl/YeriBar.' + r270_suffix, null, function () {
                    var _r408_t1;
                    var _r408_t0 = this;
                    var r408_currentGlyph = _r408_t0;
                    var r408_df = r270_DivFrame(1);
                    r408_currentGlyph.setWidth(r408_df.width);
                    r408_currentGlyph.include(r408_df.markSet.capital());
                    r408_currentGlyph.include(r270_Yeri(new r270_xn$NamedParameterPair$2Lrc9b('left', r408_df.leftSB), new r270_xn$NamedParameterPair$2Lrc9b('right', r408_df.rightSB), r270_CAP));
                    r408_currentGlyph.include(r270_YeriOverlayBar(r408_df, r270_CAP));
                    return void 0;
                });
                r270_xn$createAndSaveGlyphImpl$2Lrc3c('cyrl/yeriBar.' + r270_suffix, null, function () {
                    var _r417_t1;
                    var _r417_t0 = this;
                    var r417_currentGlyph = _r417_t0;
                    var r417_df = r270_DivFrame(1);
                    r417_currentGlyph.setWidth(r417_df.width);
                    r417_currentGlyph.include(r417_df.markSet.e());
                    r417_currentGlyph.include(r270_Yeri(new r270_xn$NamedParameterPair$2Lrc9b('left', r417_df.leftSB), new r270_xn$NamedParameterPair$2Lrc9b('right', r417_df.rightSB), r270_XH));
                    r417_currentGlyph.include(r270_YeriOverlayBar(r417_df, r270_XH));
                    return void 0;
                });
                r270_xn$createAndSaveGlyphImpl$2Lrc3c('cyrl/Yer.' + r270_suffix, null, function () {
                    var _r426_t1;
                    var _r426_t0 = this;
                    var r426_currentGlyph = _r426_t0;
                    var r426_df = r270_DivFrame(r1_mix(1, r270_para.diversityM, 0.5));
                    r426_currentGlyph.setWidth(r426_df.width);
                    r426_currentGlyph.include(r426_df.markSet.capital());
                    r426_currentGlyph.include(r270_CyrBackYerShape(r270_Yeri, r270_CAP, new r270_xn$NamedParameterPair$2Lrc9b('left', r426_df.leftSB), new r270_xn$NamedParameterPair$2Lrc9b('right', r426_df.rightSB)));
                    return void 0;
                });
                r270_xn$createAndSaveGlyphImpl$2Lrc3c('cyrl/yer.' + r270_suffix, null, function () {
                    var _r434_t1;
                    var _r434_t0 = this;
                    var r434_currentGlyph = _r434_t0;
                    var r434_df = r270_DivFrame(r1_mix(1, r270_para.diversityM, 0.5));
                    r434_currentGlyph.setWidth(r434_df.width);
                    r434_currentGlyph.include(r434_df.markSet.e());
                    r434_currentGlyph.include(r270_CyrBackYerShape(r270_Yeri, r270_XH, new r270_xn$NamedParameterPair$2Lrc9b('left', r434_df.leftSB), new r270_xn$NamedParameterPair$2Lrc9b('right', r434_df.rightSB)));
                    return void 0;
                });
                r270_xn$createAndSaveGlyphImpl$2Lrc3c('cyrl/YerNeutral.' + r270_suffix, null, function () {
                    var _r442_t1;
                    var _r442_t0 = this;
                    var r442_currentGlyph = _r442_t0;
                    var r442_df = r270_DivFrame(r1_mix(1, r270_para.diversityM, 0.5));
                    r442_currentGlyph.setWidth(r442_df.width);
                    r442_currentGlyph.include(r442_df.markSet.capital());
                    r442_currentGlyph.include(r270_CyrNeutralYerShape(r270_Yeri, r270_CAP, new r270_xn$NamedParameterPair$2Lrc9b('left', r442_df.leftSB), new r270_xn$NamedParameterPair$2Lrc9b('right', r442_df.rightSB)));
                    return void 0;
                });
                r270_xn$createAndSaveGlyphImpl$2Lrc3c('cyrl/yerNeutral.' + r270_suffix, null, function () {
                    var _r450_t1;
                    var _r450_t0 = this;
                    var r450_currentGlyph = _r450_t0;
                    var r450_df = r270_DivFrame(r1_mix(1, r270_para.diversityM, 0.5));
                    r450_currentGlyph.setWidth(r450_df.width);
                    r450_currentGlyph.include(r450_df.markSet.e());
                    r450_currentGlyph.include(r270_CyrNeutralYerShape(r270_Yeri, r270_XH, new r270_xn$NamedParameterPair$2Lrc9b('left', r450_df.leftSB), new r270_xn$NamedParameterPair$2Lrc9b('right', r450_df.rightSB)));
                    return void 0;
                });
                r270_xn$createAndSaveGlyphImpl$2Lrc3c('cyrl/Yery.' + r270_suffix, null, function () {
                    var _r458_t1;
                    var _r458_t0 = this;
                    var r458_currentGlyph = _r458_t0;
                    var r458_df = r270_DivFrame(r1_mix(1, r270_para.diversityM, 1.5), 3);
                    r458_currentGlyph.setWidth(r458_df.width);
                    r458_currentGlyph.include(r458_df.markSet.capital());
                    r458_currentGlyph.include(r270_CyrYeryShape(r270_Yeri, r458_df, r270_CAP, false, r270_fTail));
                    return void 0;
                });
                r270_xn$createAndSaveGlyphImpl$2Lrc3c('cyrl/yery.' + r270_suffix, null, function () {
                    var _r464_t1;
                    var _r464_t0 = this;
                    var r464_currentGlyph = _r464_t0;
                    var r464_df = r270_DivFrame(r1_mix(1, r270_para.diversityM, 1.5), 3);
                    r464_currentGlyph.setWidth(r464_df.width);
                    r464_currentGlyph.include(r464_df.markSet.e());
                    r464_currentGlyph.include(r270_CyrYeryShape(r270_Yeri, r464_df, r270_XH, false, r270_fTail));
                    return void 0;
                });
                r270_xn$createAndSaveGlyphImpl$2Lrc3c('cyrl/YeryBack.' + r270_suffix, null, function () {
                    var _r470_t1;
                    var _r470_t0 = this;
                    var r470_currentGlyph = _r470_t0;
                    var r470_df = r270_DivFrame(r1_mix(1, r270_para.diversityM, 1.5), 3);
                    r470_currentGlyph.setWidth(r470_df.width);
                    r470_currentGlyph.include(r470_df.markSet.capital());
                    r470_currentGlyph.include(r270_CyrYeryShape(r270_Yeri, r470_df, r270_CAP, true, r270_fTail));
                    return void 0;
                });
                r270_xn$createAndSaveGlyphImpl$2Lrc3c('cyrl/yeryBack.' + r270_suffix, null, function () {
                    var _r476_t1;
                    var _r476_t0 = this;
                    var r476_currentGlyph = _r476_t0;
                    var r476_df = r270_DivFrame(r1_mix(1, r270_para.diversityM, 1.5), 3);
                    r476_currentGlyph.setWidth(r476_df.width);
                    r476_currentGlyph.include(r476_df.markSet.e());
                    r476_currentGlyph.include(r270_CyrYeryShape(r270_Yeri, r476_df, r270_XH, true, r270_fTail));
                    return void 0;
                });
                r270_xn$createAndSaveGlyphImpl$2Lrc3c('ZhuangToneSix.' + r270_suffix, null, function () {
                    var _r482_t1;
                    var _r482_t0 = this;
                    var r482_currentGlyph = _r482_t0;
                    r482_currentGlyph.include(r270_MarkSet.capital());
                    r482_currentGlyph.include(r270_ZhuangToneSixShape(r270_Yeri, r270_CAP));
                    return void 0;
                });
                return r270_xn$createAndSaveGlyphImpl$2Lrc3c('zhuangToneSix.' + r270_suffix, null, function () {
                    var _r487_t1;
                    var _r487_t0 = this;
                    var r487_currentGlyph = _r487_t0;
                    r487_currentGlyph.include(r270_MarkSet.e());
                    r487_currentGlyph.include(r270_ZhuangToneSixShape(r270_Yeri, r270_XH));
                    return void 0;
                });
            }());
        }
        r270_xn$selectvariant$7Hrq('cyrl/Yer', 1066);
        r270_xn$selectvariant$7Hrq('cyrl/yer', 1098);
        r270_xn$selectvariant$7Hrq('cyrl/yer.BGR', new r270_xn$NamedParameterPair$2Lrc9b('shapeFrom', 'cyrl/yer'));
        r270_xn$selectvariant$7Hrq('cyrl/Yery', 1067);
        r270_xn$selectvariant$7Hrq('cyrl/yery', 1099);
        r270_xn$selectvariant$7Hrq('cyrl/Yeri', 1068);
        r270_xn$selectvariant$7Hrq('cyrl/yeri', 1100);
        r270_xn$selectvariant$7Hrq('cyrl/yeri.BGR', new r270_xn$NamedParameterPair$2Lrc9b('shapeFrom', 'cyrl/yeri'));
        r270_xn$selectvariant$7Hrq('cyrl/YeriBar', 1164);
        r270_xn$selectvariant$7Hrq('cyrl/yeriBar', 1165);
        r270_xn$selectvariant$7Hrq('cyrl/YerNeutral', 42574, new r270_xn$NamedParameterPair$2Lrc9b('follow', 'cyrl/Yer'));
        r270_xn$selectvariant$7Hrq('cyrl/yerNeutral', 42575, new r270_xn$NamedParameterPair$2Lrc9b('follow', 'cyrl/yer'));
        r270_xn$selectvariant$7Hrq('cyrl/YeryBack', 42576, new r270_xn$NamedParameterPair$2Lrc9b('follow', 'cyrl/Yery'));
        r270_xn$selectvariant$7Hrq('cyrl/yeryBack', 42577, new r270_xn$NamedParameterPair$2Lrc9b('follow', 'cyrl/yery'));
        r270_xn$selectvariant$7Hrq('ZhuangToneSix', 388, new r270_xn$NamedParameterPair$2Lrc9b('follow', 'cyrl/Yer'));
        r270_xn$selectvariant$7Hrq('zhuangToneSix', 389, new r270_xn$NamedParameterPair$2Lrc9b('follow', 'cyrl/yer'));
        r270_xn$createAndSaveGlyphImpl$2Lrc3c('cyrl/Be', 1041, function () {
            var _r500_t1;
            var _r500_t0 = this;
            var r500_currentGlyph = _r500_t0;
            r500_currentGlyph.include(r270_MarkSet.capital());
            r500_currentGlyph.include(r270_CyrlYeriUprightShape(r270_CAP));
            r500_currentGlyph.include(r270_HBar.m(r270_SB, r1_mix(r270_SB, r270_RightSB, 0.9), r270_CAP - r270_HalfStroke));
            if (r270_SLAB)
                r500_currentGlyph.include(r270_VSerif.dr(r1_mix(r270_SB, r270_RightSB, 0.9), r270_CAP, r270_VJut));
            return void 0;
        });
        r270_alias('latinBe', 386, 'cyrl/Be');
        r270_xn$createAndSaveGlyphImpl$2Lrc3c('latinDe', 395, function () {
            var _r507_t1;
            var _r507_t0 = this;
            var r507_currentGlyph = _r507_t0;
            r507_currentGlyph.include(r270_MarkSet.capital());
            r507_currentGlyph.include(r270_RevCyrYeriShape(r270_CAP));
            r507_currentGlyph.include(r270_HBar.t(r1_mix(r270_RightSB, r270_SB, 0.9), r270_RightSB + r270_O, r270_CAP));
            if (r270_SLAB)
                r507_currentGlyph.include(r270_VSerif.dl(r1_mix(r270_RightSB, r270_SB, 0.9), r270_CAP, r270_VJut));
            return void 0;
        });
        r270_xn$createAndSaveGlyphImpl$2Lrc3c('cyrl/DeKomi', 1280, function () {
            var _r514_t1;
            var _r514_t0 = this;
            var r514_currentGlyph = _r514_t0;
            r514_currentGlyph.include(r270_MarkSet.capital());
            r514_currentGlyph.include(r270_RevCyrYeriShape(r270_CAP));
            return void 0;
        });
        return r270_xn$createAndSaveGlyphImpl$2Lrc3c('cyrl/DjeKomi', 1282, function () {
            var r519_sf2, _r519_t1;
            var _r519_t0 = this;
            var r519_currentGlyph = _r519_t0;
            var r519_df = r270_DivFrame(r270_para.diversityM, 3);
            r519_currentGlyph.setWidth(r519_df.width);
            r519_currentGlyph.include(r519_df.markSet.capital());
            var r519_xm = r519_df.middle + 0.5 * r519_df.mvs * r270_HVContrast;
            r519_currentGlyph.include(r270_RevCyrYeriRoundShape(r270_CAP, r519_df.leftSB, r519_xm, r519_df.mvs));
            r519_currentGlyph.include(r270_UpwardHookShape(new r270_xn$NamedParameterPair$2Lrc9b('left', r519_df.middle - 0.5 * r519_df.mvs * r270_HVContrast), new r270_xn$NamedParameterPair$2Lrc9b('right', r519_df.rightSB), new r270_xn$NamedParameterPair$2Lrc9b('ybegin', r270_CAP), new r270_xn$NamedParameterPair$2Lrc9b('yend', r270_CAP / 2), new r270_xn$NamedParameterPair$2Lrc9b('ada', r270_SmallArchDepthA * 0.6 * r519_df.div), new r270_xn$NamedParameterPair$2Lrc9b('adb', r270_SmallArchDepthB * 0.6 * r519_df.div), new r270_xn$NamedParameterPair$2Lrc9b('sw', r519_df.mvs)));
            if (r270_SLAB) {
                r519_currentGlyph.include(r270_HSerif.mt(r519_df.middle, r270_CAP, r270_Jut, r519_df.mvs));
                r519_sf2 = r270_SerifFrame.fromDf(r519_df, r270_CAP / 2, 0).slice(1, 2);
                r519_currentGlyph.include(r519_sf2.rt.full);
            }
            return void 0;
        });
    });
    return void 0;
});
