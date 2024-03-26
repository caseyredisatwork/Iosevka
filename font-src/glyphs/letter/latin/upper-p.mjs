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
    r270_xn$Capture_Ext$2Lrc2b['$defineGlyphBlockImpl$'](r270_xn$Capture_Ext$2Lrc2b, 'Letter-Latin-Upper-P', function (r271_xn$Capture$2Lrc8, r271_xn$ExportCapture$2Lrc4b) {
        var r271_suffix, r271_fGap, r271_slabs, r271_revSlabs, _r271_t12, _r271_t13, _r271_t14, _r271_t15, _r271_tag16;
        var _r271_t0 = r271_xn$Capture$2Lrc8;
        var r271_xn$createAndSaveGlyphImpl$2Lrc3c = _r271_t0['$createAndSaveGlyphImpl$'];
        var r271_xn$NamedParameterPair$2Lrc9b = _r271_t0['$NamedParameterPair$'];
        var r271_xn$assignUnicodeImpl$2Lrc8b = _r271_t0['$assignUnicodeImpl$'];
        var r271_xn$execState$2Lrc0b = _r271_t0['$execState$'];
        var r271_MarkSet = _r271_t0.MarkSet;
        var r271_AS_BASE = _r271_t0.AS_BASE;
        var r271_ALSO_METRICS = _r271_t0.ALSO_METRICS;
        var r271_tagged = _r271_t0.tagged;
        var _r271_t1 = r271_xn$Capture$2Lrc8.Metrics;
        var r271_Width = _r271_t1.Width;
        var r271_SB = _r271_t1.SB;
        var r271_CAP = _r271_t1.CAP;
        var r271_XH = _r271_t1.XH;
        var r271_TanSlope = _r271_t1.TanSlope;
        var r271_HVContrast = _r271_t1.HVContrast;
        var r271_Rightward = _r271_t1.Rightward;
        var r271_Leftward = _r271_t1.Leftward;
        var r271_O = _r271_t1.O;
        var r271_OX = _r271_t1.OX;
        var r271_Hook = _r271_t1.Hook;
        var r271_ArchDepth = _r271_t1.ArchDepth;
        var r271_Stroke = _r271_t1.Stroke;
        var r271_HBarPos = _r271_t1.HBarPos;
        var r271_Jut = _r271_t1.Jut;
        var r271_SLAB = _r271_t1.SLAB;
        var r271_HalfStroke = _r271_t1.HalfStroke;
        var r271_RightSB = _r271_t1.RightSB;
        var r271_Middle = _r271_t1.Middle;
        var r271_SideJut = _r271_t1.SideJut;
        var r271_CorrectionOMidX = _r271_t1.CorrectionOMidX;
        var r271_AdviceStroke = _r271_t1.AdviceStroke;
        var r271_OverlayStroke = _r271_t1.OverlayStroke;
        var r271_ArchDepthAOf = _r271_t1.ArchDepthAOf;
        var r271_ArchDepthBOf = _r271_t1.ArchDepthBOf;
        var r271_MidJutSide = _r271_t1.MidJutSide;
        var r271_YSmoothMidR = _r271_t1.YSmoothMidR;
        var r271_YSmoothMidL = _r271_t1.YSmoothMidL;
        var _r271_t2 = r271_xn$Capture$2Lrc8.SpiroFns;
        var r271_g4 = _r271_t2.g4;
        var r271_flat = _r271_t2.flat;
        var r271_curl = _r271_t2.curl;
        var r271_widths = _r271_t2.widths;
        var r271_heading = _r271_t2.heading;
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
        var r271_VBar = _r271_t4.VBar;
        var r271_hookstart = _r271_t4.hookstart;
        var _r271_t5 = r271_xn$Capture$2Lrc8['Common-Derivatives'].resolve();
        var r271_xn$selectvariant$7Hrq = _r271_t5['select-variant'];
        var r271_xn$referglyph$1aao = _r271_t5['refer-glyph'];
        var r271_alias = _r271_t5.alias;
        var r271_xn$deriveglyphs$7Hrq = _r271_t5['derive-glyphs'];
        var r271_xn$derivecomposites$7Hrq = _r271_t5['derive-composites'];
        var r271_xn$linkreducedvariant$5sIl8 = _r271_t5['link-reduced-variant'];
        var _r271_t6 = r271_xn$Capture$2Lrc8['Letter-Shared'].resolve();
        var r271_SetGrekUpperTonos = _r271_t6.SetGrekUpperTonos;
        var _r271_t7 = r271_xn$Capture$2Lrc8['Letter-Shared-Metrics'].resolve();
        var r271_BowlXDepth = _r271_t7.BowlXDepth;
        var _r271_t8 = r271_xn$Capture$2Lrc8['Letter-Shared-Shapes'].resolve();
        var r271_LetterBarOverlay = _r271_t8.LetterBarOverlay;
        var r271_LeftHook = _r271_t8.LeftHook;
        var _r271_t9 = r271_xn$Capture$2Lrc8['Letter-Blackboard'].resolve();
        var r271_BBS = _r271_t9.BBS;
        var r271_BBD = _r271_t9.BBD;
        r271_xn$ExportCapture$2Lrc4b(function () {
            var _r279_t0, _r279_t1;
            return {
                'PShape': r271_PShape,
                'PShapeOutline': r271_PShapeOutline,
                'RevPShape': r271_RevPShape,
                'PBarPosY': r271_PBarPosY,
                'PRotundaShape': r271_PRotundaShape,
                'BBPShape': r271_BBPShape
            };
        });
        var r271_PBarPosY = function (r280_top, r280_sw, r280_bp) {
            var _r280_t0, _r280_t1;
            return (r280_top - r280_sw) * r280_bp - r280_sw * r271_PShape.SwBelowBar;
        };
        var r271_PRotundaOutlineKnots = function (r281_top, r281_mul, r281_bp, r281_overshoot, r281_sw, r281_offset, r281_endX, r281_hook) {
            var _r281_t0, _r281_t1;
            var r281_bowlTop = r281_top * 1 - r281_offset;
            var r281_bowlBottom = r271_PBarPosY(r281_top, r281_sw, r281_bp) + r281_offset;
            var r281_turnRadius = r271_BowlXDepth(r281_bowlTop, r281_bowlBottom, r271_SB, r271_RightSB, r281_sw);
            var r281_ada = r271_ArchDepthAOf(r271_ArchDepth * 0.9, r271_Width);
            var r281_adb = r271_ArchDepthBOf(r271_ArchDepth * 0.9, r271_Width);
            var r281_right = r271_RightSB - r281_offset;
            var r281_turn = r271_YSmoothMidR(r281_bowlTop, r281_bowlBottom, r281_ada, r281_adb);
            return [
                r271_g4(r271_SB * r281_mul - r271_O, r281_bowlTop - r281_hook),
                r271_hookstart(r281_bowlTop - r271_O),
                r271_g4(r281_right - r281_overshoot, r281_turn),
                r271_arcvh(),
                r271_flat(Math.max(r281_endX + 0.01 + r281_sw / 2 * r271_TanSlope, r271_Middle) + r271_CorrectionOMidX * r281_sw * 0.5, r281_bowlBottom),
                r271_curl(r281_endX, r281_bowlBottom, r271_heading(r271_Leftward))
            ];
        };
        var r271_PShapeOutlineKnots = function (r282_top, r282_mul, r282_bp, r282_overshoot, r282_sw, r282_offset) {
            var _r282_t0, _r282_t1;
            var r282_bowlTop = r282_top * 1 - r282_offset;
            var r282_bowlBottom = r271_PBarPosY(r282_top, r282_sw, r282_bp) + r282_offset;
            var r282_turnRadius = r271_BowlXDepth(r282_bowlTop, r282_bowlBottom, r271_SB, r271_RightSB, r282_sw);
            var r282_ada = r271_ArchDepthAOf(r271_ArchDepth * 0.9, r271_Width);
            var r282_adb = r271_ArchDepthBOf(r271_ArchDepth * 0.9, r271_Width);
            var r282_right = r271_RightSB - r282_offset;
            var r282_turn = r271_YSmoothMidR(r282_bowlTop, r282_bowlBottom, r282_ada, r282_adb);
            return [
                r271_flat(r271_SB * r282_mul - r271_O, r282_bowlTop, r271_heading(r271_Rightward)),
                r271_curl(r282_right - r282_turnRadius - r271_CorrectionOMidX * r282_sw, r282_bowlTop),
                r271_archv(),
                r271_g4(r282_right - r282_overshoot, r282_turn),
                r271_arcvh(),
                r271_flat(r282_right - r282_turnRadius + r271_CorrectionOMidX * r282_sw, r282_bowlBottom),
                r271_curl(r271_SB * r282_mul - r271_O, r282_bowlBottom, r271_heading(r271_Leftward))
            ];
        };
        var r271_RevPshapeOutlineKnots = function (r283_top, r283_mul, r283_bp, r283_overshoot, r283_sw, r283_offset) {
            var _r283_t0, _r283_t1;
            var r283_bowlTop = r283_top * 1 - r283_offset;
            var r283_bowlBottom = (r283_top - r283_sw) * r283_bp - r283_sw * r271_PShape.SwBelowBar + r283_offset;
            var r283_turnRadius = r271_BowlXDepth(r283_bowlTop, r283_bowlBottom, r271_SB, r271_RightSB, r283_sw);
            var r283_ada = r271_ArchDepthAOf(r271_ArchDepth * 0.9, r271_Width);
            var r283_adb = r271_ArchDepthBOf(r271_ArchDepth * 0.9, r271_Width);
            var r283_left = r271_SB + r283_offset;
            var r283_turn = r271_YSmoothMidL(r283_bowlTop, r283_bowlBottom, r283_ada, r283_adb);
            return [
                r271_flat(r271_Width - r271_SB * r283_mul + r271_O, r283_bowlTop, r271_heading(r271_Leftward)),
                r271_curl(r283_left + r283_turnRadius - r271_CorrectionOMidX * r283_sw, r283_bowlTop),
                r271_archv(),
                r271_g4(r283_left + r283_overshoot, r283_turn),
                r271_arcvh(),
                r271_flat(r283_left + r283_turnRadius + r271_CorrectionOMidX * r283_sw, r283_bowlBottom),
                r271_curl(r271_Width - r271_SB * r283_mul + r271_O, r283_bowlBottom, r271_heading(r271_Rightward))
            ];
        };
        var r271_PShapeOutline = function () {
            var _r284_t6;
            var _r284_t7 = arguments;
            var _r284_t0 = [].slice.call(_r284_t7, 0);
            var _r284_t1 = [];
            var _r284_t2 = 0;
            while (_r284_t2 < _r284_t0.length) {
                if (!(_r284_t0[_r284_t2] instanceof r271_xn$NamedParameterPair$2Lrc9b))
                    _r284_t1.push(_r284_t0[_r284_t2]);
                _r284_t2 = _r284_t2 + 1;
            }
            var _r284_t3 = _r284_t0;
            var _r284_t4 = _r284_t3.length;
            var _r284_t5 = 0;
            while (_r284_t5 < _r284_t4) {
                _r284_t2 = _r284_t3[_r284_t5];
                if (_r284_t2 && _r284_t2 instanceof r271_xn$NamedParameterPair$2Lrc9b && _r284_t2.left === 'top')
                    r284_top = _r284_t2.right;
                if (_r284_t2 && _r284_t2 instanceof r271_xn$NamedParameterPair$2Lrc9b && _r284_t2.left === 'mul')
                    r284_mul = _r284_t2.right;
                if (_r284_t2 && _r284_t2 instanceof r271_xn$NamedParameterPair$2Lrc9b && _r284_t2.left === 'bp')
                    r284_bp = _r284_t2.right;
                if (_r284_t2 && _r284_t2 instanceof r271_xn$NamedParameterPair$2Lrc9b && _r284_t2.left === 'overshoot')
                    r284_overshoot = _r284_t2.right;
                if (_r284_t2 && _r284_t2 instanceof r271_xn$NamedParameterPair$2Lrc9b && _r284_t2.left === 'sw')
                    r284_sw = _r284_t2.right;
                if (_r284_t2 && _r284_t2 instanceof r271_xn$NamedParameterPair$2Lrc9b && _r284_t2.left === 'offset')
                    r284_offset = _r284_t2.right;
                _r284_t5 = _r284_t5 + 1;
            }
            var r284_top = r1_fallback(r284_top, _r284_t1[0]);
            var r284_mul = r1_fallback(r284_mul, _r284_t1[1], r271_PShape.defaultMul);
            var r284_bp = r1_fallback(r284_bp, _r284_t1[2], r271_PShape.BarPos);
            var r284_overshoot = r1_fallback(r284_overshoot, _r284_t1[3], r271_PShape.defaultOvershoot);
            var r284_sw = r1_fallback(r284_sw, _r284_t1[4], r271_Stroke);
            var r284_offset = r1_fallback(r284_offset, _r284_t1[5], 0);
            return function () {
                var _r290_t1;
                var _r290_t0 = this;
                var r290_currentGlyph = _r290_t0;
                r290_currentGlyph.include(r271_xn$spirooutline$1aao(r271_PShapeOutlineKnots(r284_top, r284_mul, r284_bp, r284_overshoot, r284_sw, r284_offset)));
                return void 0;
            };
        };
        var r271_PShape = function () {
            var _r292_t6;
            var _r292_t7 = arguments;
            var _r292_t0 = [].slice.call(_r292_t7, 0);
            var _r292_t1 = [];
            var _r292_t2 = 0;
            while (_r292_t2 < _r292_t0.length) {
                if (!(_r292_t0[_r292_t2] instanceof r271_xn$NamedParameterPair$2Lrc9b))
                    _r292_t1.push(_r292_t0[_r292_t2]);
                _r292_t2 = _r292_t2 + 1;
            }
            var _r292_t3 = _r292_t0;
            var _r292_t4 = _r292_t3.length;
            var _r292_t5 = 0;
            while (_r292_t5 < _r292_t4) {
                _r292_t2 = _r292_t3[_r292_t5];
                if (_r292_t2 && _r292_t2 instanceof r271_xn$NamedParameterPair$2Lrc9b && _r292_t2.left === 'top')
                    r292_top = _r292_t2.right;
                if (_r292_t2 && _r292_t2 instanceof r271_xn$NamedParameterPair$2Lrc9b && _r292_t2.left === 'mul')
                    r292_mul = _r292_t2.right;
                if (_r292_t2 && _r292_t2 instanceof r271_xn$NamedParameterPair$2Lrc9b && _r292_t2.left === 'bp')
                    r292_bp = _r292_t2.right;
                if (_r292_t2 && _r292_t2 instanceof r271_xn$NamedParameterPair$2Lrc9b && _r292_t2.left === 'overshoot')
                    r292_overshoot = _r292_t2.right;
                if (_r292_t2 && _r292_t2 instanceof r271_xn$NamedParameterPair$2Lrc9b && _r292_t2.left === 'sw')
                    r292_sw = _r292_t2.right;
                if (_r292_t2 && _r292_t2 instanceof r271_xn$NamedParameterPair$2Lrc9b && _r292_t2.left === 'slab')
                    r292_slab = _r292_t2.right;
                if (_r292_t2 && _r292_t2 instanceof r271_xn$NamedParameterPair$2Lrc9b && _r292_t2.left === 'withBar')
                    r292_withBar = _r292_t2.right;
                _r292_t5 = _r292_t5 + 1;
            }
            var r292_top = r1_fallback(r292_top, _r292_t1[0]);
            var r292_mul = r1_fallback(r292_mul, _r292_t1[1], r271_PShape.defaultMul);
            var r292_bp = r1_fallback(r292_bp, _r292_t1[2], r271_PShape.BarPos);
            var r292_overshoot = r1_fallback(r292_overshoot, _r292_t1[3], r271_PShape.defaultOvershoot);
            var r292_sw = r1_fallback(r292_sw, _r292_t1[4], r271_Stroke);
            var r292_slab = r1_fallback(r292_slab, _r292_t1[5], null);
            var r292_withBar = r1_fallback(r292_withBar, _r292_t1[6], true);
            return function () {
                var _r298_t1;
                var _r298_t0 = this;
                var r298_currentGlyph = _r298_t0;
                r298_currentGlyph.include(r271_dispiro(r271_widths.rhs(r292_sw), r271_PShapeOutlineKnots(r292_top, r292_mul, r292_bp, r292_overshoot, r292_sw, 0)));
                if (r292_withBar)
                    r298_currentGlyph.include(r271_tagged('strokeL', r271_VBar.l(r271_SB * r292_mul, 0, r292_top, r292_sw)));
                if (r292_slab)
                    r298_currentGlyph.include(r292_slab(r292_top, r292_sw, r292_mul));
                return void 0;
            };
        };
        var r271_PRotundaShape = function () {
            var _r302_t6;
            var _r302_t7 = arguments;
            var _r302_t0 = [].slice.call(_r302_t7, 0);
            var _r302_t1 = [];
            var _r302_t2 = 0;
            while (_r302_t2 < _r302_t0.length) {
                if (!(_r302_t0[_r302_t2] instanceof r271_xn$NamedParameterPair$2Lrc9b))
                    _r302_t1.push(_r302_t0[_r302_t2]);
                _r302_t2 = _r302_t2 + 1;
            }
            var _r302_t3 = _r302_t0;
            var _r302_t4 = _r302_t3.length;
            var _r302_t5 = 0;
            while (_r302_t5 < _r302_t4) {
                _r302_t2 = _r302_t3[_r302_t5];
                if (_r302_t2 && _r302_t2 instanceof r271_xn$NamedParameterPair$2Lrc9b && _r302_t2.left === 'top')
                    r302_top = _r302_t2.right;
                if (_r302_t2 && _r302_t2 instanceof r271_xn$NamedParameterPair$2Lrc9b && _r302_t2.left === 'mul')
                    r302_mul = _r302_t2.right;
                if (_r302_t2 && _r302_t2 instanceof r271_xn$NamedParameterPair$2Lrc9b && _r302_t2.left === 'bp')
                    r302_bp = _r302_t2.right;
                if (_r302_t2 && _r302_t2 instanceof r271_xn$NamedParameterPair$2Lrc9b && _r302_t2.left === 'overshoot')
                    r302_overshoot = _r302_t2.right;
                if (_r302_t2 && _r302_t2 instanceof r271_xn$NamedParameterPair$2Lrc9b && _r302_t2.left === 'sw')
                    r302_sw = _r302_t2.right;
                if (_r302_t2 && _r302_t2 instanceof r271_xn$NamedParameterPair$2Lrc9b && _r302_t2.left === 'slab')
                    r302_slab = _r302_t2.right;
                if (_r302_t2 && _r302_t2 instanceof r271_xn$NamedParameterPair$2Lrc9b && _r302_t2.left === 'endX')
                    r302_endX = _r302_t2.right;
                if (_r302_t2 && _r302_t2 instanceof r271_xn$NamedParameterPair$2Lrc9b && _r302_t2.left === 'hook')
                    r302_hook = _r302_t2.right;
                _r302_t5 = _r302_t5 + 1;
            }
            var r302_top = r1_fallback(r302_top, _r302_t1[0]);
            var r302_mul = r1_fallback(r302_mul, _r302_t1[1], r271_PShape.defaultMul);
            var r302_bp = r1_fallback(r302_bp, _r302_t1[2], r271_PShape.BarPos);
            var r302_overshoot = r1_fallback(r302_overshoot, _r302_t1[3], r271_PShape.defaultOvershoot);
            var r302_sw = r1_fallback(r302_sw, _r302_t1[4], r271_Stroke);
            var r302_slab = r1_fallback(r302_slab, _r302_t1[5], r271_SLAB);
            var r302_endX = r1_fallback(r302_endX, _r302_t1[6], r271_SB);
            var r302_hook = r1_fallback(r302_hook, _r302_t1[7], r271_Hook);
            return function () {
                var _r308_t1;
                var _r308_t0 = this;
                var r308_currentGlyph = _r308_t0;
                r308_currentGlyph.include(r271_dispiro(r271_widths.rhs(r302_sw), r271_PRotundaOutlineKnots(r302_top, r302_mul, r302_bp, r302_overshoot, r302_sw, 0, r302_endX, r302_hook)));
                return void 0;
            };
        };
        var r271_RevPShape = function () {
            var _r310_t6;
            var _r310_t7 = arguments;
            var _r310_t0 = [].slice.call(_r310_t7, 0);
            var _r310_t1 = [];
            var _r310_t2 = 0;
            while (_r310_t2 < _r310_t0.length) {
                if (!(_r310_t0[_r310_t2] instanceof r271_xn$NamedParameterPair$2Lrc9b))
                    _r310_t1.push(_r310_t0[_r310_t2]);
                _r310_t2 = _r310_t2 + 1;
            }
            var _r310_t3 = _r310_t0;
            var _r310_t4 = _r310_t3.length;
            var _r310_t5 = 0;
            while (_r310_t5 < _r310_t4) {
                _r310_t2 = _r310_t3[_r310_t5];
                if (_r310_t2 && _r310_t2 instanceof r271_xn$NamedParameterPair$2Lrc9b && _r310_t2.left === 'top')
                    r310_top = _r310_t2.right;
                if (_r310_t2 && _r310_t2 instanceof r271_xn$NamedParameterPair$2Lrc9b && _r310_t2.left === 'mul')
                    r310_mul = _r310_t2.right;
                if (_r310_t2 && _r310_t2 instanceof r271_xn$NamedParameterPair$2Lrc9b && _r310_t2.left === 'bp')
                    r310_bp = _r310_t2.right;
                if (_r310_t2 && _r310_t2 instanceof r271_xn$NamedParameterPair$2Lrc9b && _r310_t2.left === 'overshoot')
                    r310_overshoot = _r310_t2.right;
                if (_r310_t2 && _r310_t2 instanceof r271_xn$NamedParameterPair$2Lrc9b && _r310_t2.left === 'sw')
                    r310_sw = _r310_t2.right;
                if (_r310_t2 && _r310_t2 instanceof r271_xn$NamedParameterPair$2Lrc9b && _r310_t2.left === 'slab')
                    r310_slab = _r310_t2.right;
                _r310_t5 = _r310_t5 + 1;
            }
            var r310_top = r1_fallback(r310_top, _r310_t1[0]);
            var r310_mul = r1_fallback(r310_mul, _r310_t1[1], r271_PShape.defaultMul);
            var r310_bp = r1_fallback(r310_bp, _r310_t1[2], r271_PShape.BarPos);
            var r310_overshoot = r1_fallback(r310_overshoot, _r310_t1[3], r271_PShape.defaultOvershoot);
            var r310_sw = r1_fallback(r310_sw, _r310_t1[4], r271_Stroke);
            var r310_slab = r1_fallback(r310_slab, _r310_t1[5], r271_SLAB);
            return function () {
                var _r316_t1;
                var _r316_t0 = this;
                var r316_currentGlyph = _r316_t0;
                r316_currentGlyph.include(r271_tagged('bowl', r271_dispiro(r271_widths.lhs(r310_sw), r271_RevPshapeOutlineKnots(r310_top, r310_mul, r310_bp, r310_overshoot, r310_sw, 0))));
                r316_currentGlyph.include(r271_tagged('strokeR', r271_VBar.r(r271_Width - r271_SB * r310_mul, 0, r310_top, r310_sw)));
                if (r310_slab)
                    r316_currentGlyph.include(r310_slab(r310_top, r310_sw, r310_mul));
                return void 0;
            };
        };
        r271_PShape.defaultMul = 1.25;
        r271_PShape.defaultOvershoot = r271_OX * 2;
        r271_PShape.BarPos = 1 - r271_HBarPos;
        r271_PShape.SwBelowBar = 0.25;
        r271_PShape.SlabMotion = function (r320_top, r320_sw, r320_mul) {
            var _r320_t0, _r320_t1;
            return function () {
                var _r322_t1;
                var _r322_t0 = this;
                var r322_currentGlyph = _r322_t0;
                r322_currentGlyph.include(r271_tagged('serifLT', r271_HSerif.lt(r271_SB * r320_mul, r320_top, r271_SideJut, r320_sw)));
                return void 0;
            };
        };
        r271_PShape.SlabSymmetric = function (r324_top, r324_sw, r324_mul) {
            var _r324_t0, _r324_t1;
            return function () {
                var _r326_t1;
                var _r326_t0 = this;
                var r326_currentGlyph = _r326_t0;
                r326_currentGlyph.include(r271_PShape.SlabMotion(r324_top, r324_sw, r324_mul));
                r326_currentGlyph.include(r271_tagged('serifLB', r271_HSerif.mb(r271_SB * r324_mul + 0.5 * r324_sw * r271_HVContrast, 0, r271_Jut, r324_sw)));
                return void 0;
            };
        };
        r271_PShape.SlabAsymmetric = function (r329_top, r329_sw, r329_mul) {
            var _r329_t0, _r329_t1;
            return function () {
                var _r331_t1;
                var _r331_t0 = this;
                var r331_currentGlyph = _r331_t0;
                r331_currentGlyph.include(r271_PShape.SlabMotion(r329_top, r329_sw, r329_mul));
                r331_currentGlyph.include(r271_tagged('serifLB', r271_union(r271_HSerif.lb(r271_SB * r329_mul, 0, r271_SideJut, r329_sw), r271_HSerif.rb(r271_SB * r329_mul + 0.5 * r329_sw * r271_HVContrast, 0, r271_MidJutSide, r329_sw))));
                return void 0;
            };
        };
        r271_PShape.OpenGap = function () {
            var _r334_t6;
            var _r334_t7 = arguments;
            var _r334_t0 = [].slice.call(_r334_t7, 0);
            var _r334_t1 = [];
            var _r334_t2 = 0;
            while (_r334_t2 < _r334_t0.length) {
                if (!(_r334_t0[_r334_t2] instanceof r271_xn$NamedParameterPair$2Lrc9b))
                    _r334_t1.push(_r334_t0[_r334_t2]);
                _r334_t2 = _r334_t2 + 1;
            }
            var _r334_t3 = _r334_t0;
            var _r334_t4 = _r334_t3.length;
            var _r334_t5 = 0;
            while (_r334_t5 < _r334_t4) {
                _r334_t2 = _r334_t3[_r334_t5];
                if (_r334_t2 && _r334_t2 instanceof r271_xn$NamedParameterPair$2Lrc9b && _r334_t2.left === 'top')
                    r334_top = _r334_t2.right;
                if (_r334_t2 && _r334_t2 instanceof r271_xn$NamedParameterPair$2Lrc9b && _r334_t2.left === 'bot')
                    r334_bot = _r334_t2.right;
                if (_r334_t2 && _r334_t2 instanceof r271_xn$NamedParameterPair$2Lrc9b && _r334_t2.left === 'mul')
                    r334_mul = _r334_t2.right;
                if (_r334_t2 && _r334_t2 instanceof r271_xn$NamedParameterPair$2Lrc9b && _r334_t2.left === 'bp')
                    r334_bp = _r334_t2.right;
                if (_r334_t2 && _r334_t2 instanceof r271_xn$NamedParameterPair$2Lrc9b && _r334_t2.left === 'sw')
                    r334_sw = _r334_t2.right;
                _r334_t5 = _r334_t5 + 1;
            }
            var r334_top = r1_fallback(r334_top, _r334_t1[0]);
            var r334_bot = r1_fallback(r334_bot, _r334_t1[1], 0);
            var r334_mul = r1_fallback(r334_mul, _r334_t1[2], r271_PShape.defaultMul);
            var r334_bp = r1_fallback(r334_bp, _r334_t1[3], r271_PShape.BarPos);
            var r334_sw = r1_fallback(r334_sw, _r334_t1[4], r271_Stroke);
            return r271_VBar.l(r271_SB * r334_mul + r334_sw * r271_HVContrast, Math.min(r271_PBarPosY(r334_top, r334_sw, r334_bp) - 0.5 * r334_sw - 0.1, r334_bot), Math.max(r271_PBarPosY(r334_top, r334_sw, r334_bp) + 0.5 * r334_sw + 0.1, r1_mix(r334_top, r271_PBarPosY(r334_top, r334_sw, r334_bp), 0.5)), 0.2 * (r271_RightSB - r271_SB) * (r271_AdviceStroke(5) / r271_Stroke));
        };
        r271_RevPShape.SlabMotion = function (r339_top, r339_sw, r339_mul) {
            var _r339_t0, _r339_t1;
            return function () {
                var _r341_t1;
                var _r341_t0 = this;
                var r341_currentGlyph = _r341_t0;
                r341_currentGlyph.include(r271_tagged('serifRT', r271_HSerif.rt(r271_Width - r271_SB * r339_mul, r339_top, r271_SideJut, r339_sw)));
                return void 0;
            };
        };
        r271_RevPShape.SlabSymmetric = function (r343_top, r343_sw, r343_mul) {
            var _r343_t0, _r343_t1;
            return function () {
                var _r345_t1;
                var _r345_t0 = this;
                var r345_currentGlyph = _r345_t0;
                r345_currentGlyph.include(r271_RevPShape.SlabMotion(r343_top, r343_sw, r343_mul));
                r345_currentGlyph.include(r271_tagged('serifRB', r271_HSerif.mb(r271_Width - r271_SB * r343_mul - r271_HalfStroke * r271_HVContrast, 0, r271_Jut, r343_sw)));
                return void 0;
            };
        };
        r271_RevPShape.SlabCyrlItalic = function (r348_top, r348_sw, r348_mul) {
            var _r348_t0, _r348_t1;
            return function () {
                var _r350_t1;
                var _r350_t0 = this;
                var r350_currentGlyph = _r350_t0;
                r350_currentGlyph.include(r271_tagged('serifRB', r271_HSerif.rb(r271_Width - r271_SB * r348_mul, 0, r271_SideJut, r348_sw)));
                return void 0;
            };
        };
        r271_RevPShape.SlabAsymmetric = function (r352_top, r352_sw, r352_mul) {
            var _r352_t0, _r352_t1;
            return function () {
                var _r354_t1;
                var _r354_t0 = this;
                var r354_currentGlyph = _r354_t0;
                r354_currentGlyph.include(r271_RevPShape.SlabMotion(r352_top, r352_sw, r352_mul));
                r354_currentGlyph.include(r271_tagged('serifRB', r271_union(r271_HSerif.rb(r271_Width - r271_SB * r352_mul, 0, r271_SideJut, r352_sw), r271_HSerif.lb(r271_Width - r271_SB * r352_mul - 0.5 * r352_sw * r271_HVContrast, 0, r271_MidJutSide, r352_sw))));
                return void 0;
            };
        };
        r271_RevPShape.OpenGap = function () {
            var _r357_t6;
            var _r357_t7 = arguments;
            var _r357_t0 = [].slice.call(_r357_t7, 0);
            var _r357_t1 = [];
            var _r357_t2 = 0;
            while (_r357_t2 < _r357_t0.length) {
                if (!(_r357_t0[_r357_t2] instanceof r271_xn$NamedParameterPair$2Lrc9b))
                    _r357_t1.push(_r357_t0[_r357_t2]);
                _r357_t2 = _r357_t2 + 1;
            }
            var _r357_t3 = _r357_t0;
            var _r357_t4 = _r357_t3.length;
            var _r357_t5 = 0;
            while (_r357_t5 < _r357_t4) {
                _r357_t2 = _r357_t3[_r357_t5];
                if (_r357_t2 && _r357_t2 instanceof r271_xn$NamedParameterPair$2Lrc9b && _r357_t2.left === 'top')
                    r357_top = _r357_t2.right;
                if (_r357_t2 && _r357_t2 instanceof r271_xn$NamedParameterPair$2Lrc9b && _r357_t2.left === 'bot')
                    r357_bot = _r357_t2.right;
                if (_r357_t2 && _r357_t2 instanceof r271_xn$NamedParameterPair$2Lrc9b && _r357_t2.left === 'mul')
                    r357_mul = _r357_t2.right;
                if (_r357_t2 && _r357_t2 instanceof r271_xn$NamedParameterPair$2Lrc9b && _r357_t2.left === 'bp')
                    r357_bp = _r357_t2.right;
                if (_r357_t2 && _r357_t2 instanceof r271_xn$NamedParameterPair$2Lrc9b && _r357_t2.left === 'sw')
                    r357_sw = _r357_t2.right;
                _r357_t5 = _r357_t5 + 1;
            }
            var r357_top = r1_fallback(r357_top, _r357_t1[0]);
            var r357_bot = r1_fallback(r357_bot, _r357_t1[1], 0);
            var r357_mul = r1_fallback(r357_mul, _r357_t1[2], r271_PShape.defaultMul);
            var r357_bp = r1_fallback(r357_bp, _r357_t1[3], r271_PShape.BarPos);
            var r357_sw = r1_fallback(r357_sw, _r357_t1[4], r271_Stroke);
            return r271_VBar.r(r271_Width - r271_SB * r357_mul - r357_sw * r271_HVContrast, Math.min(r271_PBarPosY(r357_top, r357_sw, r357_bp) - 0.5 * r357_sw - 0.1, r357_bot), Math.max(r271_PBarPosY(r357_top, r357_sw, r357_bp) + 0.5 * r357_sw + 0.1, r1_mix(r357_top, r271_PBarPosY(r357_top, r357_sw, r357_bp), 0.5)), 0.2 * (r271_RightSB - r271_SB) * (r271_AdviceStroke(5) / r271_Stroke));
        };
        var r271_PConfig = {
            'closedSerifless': [
                false,
                null,
                null
            ],
            'openSerifless': [
                true,
                null,
                null
            ],
            'closedMotionSerifed': [
                false,
                r271_PShape.SlabMotion,
                r271_RevPShape.SlabMotion
            ],
            'openMotionSerifed': [
                true,
                r271_PShape.SlabMotion,
                r271_RevPShape.SlabMotion
            ],
            'closedSerifed': [
                false,
                r271_PShape.SlabAsymmetric,
                r271_RevPShape.SlabAsymmetric
            ],
            'openSerifed': [
                true,
                r271_PShape.SlabAsymmetric,
                r271_RevPShape.SlabAsymmetric
            ]
        };
        var _r271_t10 = Object.entries(r271_PConfig)[Symbol.iterator]();
        var _r271_t11 = void 0;
        while (!(_r271_t11 = _r271_t10.next()).done) {
            _r271_t12 = _r271_t11.value;
            r271_suffix = _r271_t12[0];
            r271_fGap = _r271_t12[1][0];
            r271_slabs = _r271_t12[1][1];
            r271_revSlabs = _r271_t12[1][2];
            _r271_t12[1];
            (function () {
                var r364_fSlabBot = r271_slabs && r271_slabs !== r271_PShape.SlabMotion;
                r271_xn$createAndSaveGlyphImpl$2Lrc3c('P.' + r271_suffix, null, function () {
                    var _r367_t1;
                    var _r367_t0 = this;
                    var r367_currentGlyph = _r367_t0;
                    r367_currentGlyph.include(r271_MarkSet.capital());
                    r367_currentGlyph.include(r271_difference(r271_PShape(r271_CAP, new r271_xn$NamedParameterPair$2Lrc9b('slab', r271_slabs)), r271_fGap ? r271_PShape.OpenGap(new r271_xn$NamedParameterPair$2Lrc9b('top', r271_CAP), new r271_xn$NamedParameterPair$2Lrc9b('bot', r364_fSlabBot ? r271_Stroke : 0)) : function () {
                        var _r374_t1;
                        var _r374_t0 = this;
                        var r374_currentGlyph = _r374_t0;
                        return void 0;
                    }));
                    return void 0;
                });
                r271_xn$createAndSaveGlyphImpl$2Lrc3c('grek/Rho.' + r271_suffix, null, function () {
                    var _r377_t1;
                    var _r377_t0 = this;
                    var r377_currentGlyph = _r377_t0;
                    r377_currentGlyph.include(r271_xn$referglyph$1aao('P.' + r271_suffix), r271_AS_BASE, r271_ALSO_METRICS);
                    r377_currentGlyph.include(r271_SetGrekUpperTonos(r271_slabs ? -r271_SideJut : 0));
                    return void 0;
                });
                r271_xn$createAndSaveGlyphImpl$2Lrc3c('smcpP.' + r271_suffix, null, function () {
                    var _r382_t1;
                    var _r382_t0 = this;
                    var r382_currentGlyph = _r382_t0;
                    r382_currentGlyph.include(r271_MarkSet.e());
                    r382_currentGlyph.include(r271_difference(r271_PShape(r271_XH, new r271_xn$NamedParameterPair$2Lrc9b('slab', r271_slabs)), r271_fGap ? r271_PShape.OpenGap(new r271_xn$NamedParameterPair$2Lrc9b('top', r271_XH), new r271_xn$NamedParameterPair$2Lrc9b('bot', r364_fSlabBot ? r271_Stroke : 0)) : function () {
                        var _r389_t1;
                        var _r389_t0 = this;
                        var r389_currentGlyph = _r389_t0;
                        return void 0;
                    }));
                    return void 0;
                });
                r271_xn$createAndSaveGlyphImpl$2Lrc3c('currency/rubleSign.' + r271_suffix, null, function () {
                    var _r392_t1;
                    var _r392_t0 = this;
                    var r392_currentGlyph = _r392_t0;
                    r392_currentGlyph.include(r271_xn$referglyph$1aao('P.' + r271_suffix), r271_AS_BASE, r271_ALSO_METRICS);
                    var r392_bar1pos = r271_PBarPosY(r271_CAP, r271_Stroke, r271_PShape.BarPos) + r271_HalfStroke;
                    var r392_xCrossBarLeft = r271_SB - r271_SideJut;
                    var r392_xPLeft = r271_SB * r271_PShape.defaultMul + r271_HalfStroke * r271_HVContrast;
                    var r392_xCrossBarRight = r1_mix(r271_SB, r271_RightSB, 0.8);
                    var r392_yBase = r271_slabs === r271_PShape.SlabAsymmetric ? r271_Stroke : 0;
                    var r392_yCrossbar = Math.max(r1_mix(r392_yBase, r392_bar1pos - r271_HalfStroke, 1 / 2), r1_mix(r392_yBase, r392_bar1pos - r271_HalfStroke, 2 / 3) - r271_OverlayStroke / 2);
                    r392_currentGlyph.include(r271_HOverlayBar(r392_xCrossBarLeft, r392_xPLeft, r392_bar1pos, r271_Stroke));
                    r392_currentGlyph.include(r271_HOverlayBar(r392_xCrossBarLeft, r392_xCrossBarRight, r392_yCrossbar));
                    return void 0;
                });
                r271_xn$createAndSaveGlyphImpl$2Lrc3c('PHookLeft.' + r271_suffix, null, function () {
                    var _r398_t1;
                    var _r398_t0 = this;
                    var r398_currentGlyph = _r398_t0;
                    r398_currentGlyph.include(r271_xn$referglyph$1aao('P.' + r271_suffix), r271_AS_BASE);
                    r398_currentGlyph.ejectTagged('serifLT');
                    r398_currentGlyph.include(r271_LeftHook(r271_SB * 1.25, r271_CAP));
                    return void 0;
                });
                return r271_xn$createAndSaveGlyphImpl$2Lrc3c('currency/pesoSign.' + r271_suffix, null, function () {
                    var _r404_t1;
                    var _r404_t0 = this;
                    var r404_currentGlyph = _r404_t0;
                    r404_currentGlyph.include(r271_xn$referglyph$1aao('P.' + r271_suffix), r271_AS_BASE, r271_ALSO_METRICS);
                    var r404_bar1pos = r271_PBarPosY(r271_CAP, r271_Stroke, r271_PShape.BarPos);
                    var r404_sw = r271_AdviceStroke(7);
                    var r404_gap = r404_sw + Math.max(r404_sw, r271_CAP * 0.06);
                    r404_currentGlyph.include(r271_HOverlayBar(r1_mix(0, r271_SB, 0.5), r1_mix(r271_Width, r271_RightSB, 0.5) - r271_O, r1_mix(r404_bar1pos, r271_CAP, 0.5) + 0.5 * r404_gap, r404_sw));
                    r404_currentGlyph.include(r271_HOverlayBar(r1_mix(0, r271_SB, 0.5), r1_mix(r271_Width, r271_RightSB, 0.5) - r271_O, r1_mix(r404_bar1pos, r271_CAP, 0.5) - 0.5 * r404_gap, r404_sw));
                    return void 0;
                });
            }());
        }
        r271_xn$selectvariant$7Hrq('P', 'P');
        r271_xn$linkreducedvariant$5sIl8('P/sansSerif', 'P', r1_MathSansSerif);
        r271_xn$selectvariant$7Hrq('smcpP', 7448, new r271_xn$NamedParameterPair$2Lrc9b('follow', 'P'));
        r271_alias('grek/smcpRho', 7465, 'smcpP');
        r271_xn$selectvariant$7Hrq('grek/Rho', 929, new r271_xn$NamedParameterPair$2Lrc9b('follow', 'P'));
        r271_xn$linkreducedvariant$5sIl8('grek/Rho/sansSerif', 'grek/Rho', r1_MathSansSerif, new r271_xn$NamedParameterPair$2Lrc9b('follow', 'P/sansSerif'));
        r271_alias('cyrl/Er', 1056, 'P');
        r271_xn$selectvariant$7Hrq('currency/rubleSign', 8381);
        r271_xn$selectvariant$7Hrq('currency/pesoSign', 8369, new r271_xn$NamedParameterPair$2Lrc9b('follow', 'P'));
        r271_xn$selectvariant$7Hrq('PHookLeft', 420);
        r271_xn$deriveglyphs$7Hrq('cyrl/ErTick', 1166, 'cyrl/Er', function (r412_src, r412_gr) {
            var _r412_t0, _r412_t1;
            return function () {
                var _r414_t1;
                var _r414_t0 = this;
                var r414_currentGlyph = _r414_t0;
                r414_currentGlyph.include(r271_xn$referglyph$1aao(r412_src), r271_AS_BASE, r271_ALSO_METRICS);
                var r414_yBowl = r271_PBarPosY(r271_CAP, r271_Stroke, r271_PShape.BarPos) + 0.75 * r271_Stroke;
                r414_currentGlyph.include(r271_dispiro(r271_widths.center(r271_AdviceStroke(4)), r271_flat(r1_mix(r271_SB, r271_RightSB, 0.5), r414_yBowl + r271_XH * 0.25), r271_curl(r1_mix(r271_SB, r271_RightSB, 0.875), r414_yBowl - r271_XH * 0.25)));
                return void 0;
            };
        });
        r271_xn$createAndSaveGlyphImpl$2Lrc3c('PBar/overlay', null, r271_LetterBarOverlay.l.in(new r271_xn$NamedParameterPair$2Lrc9b('x', r271_SB * r271_PShape.defaultMul), new r271_xn$NamedParameterPair$2Lrc9b('bot', r271_PBarPosY(r271_CAP, r271_Stroke, r271_PShape.BarPos) + r271_Stroke), new r271_xn$NamedParameterPair$2Lrc9b('top', r271_CAP - r271_Stroke), new r271_xn$NamedParameterPair$2Lrc9b('space', [
            0,
            r271_RightSB - r271_Stroke * r271_HVContrast
        ])));
        r271_xn$derivecomposites$7Hrq('PBar', 11363, 'P', 'PBar/overlay');
        var r271_BBPShape = function () {
            var _r422_t6;
            var _r422_t7 = arguments;
            var _r422_t0 = [].slice.call(_r422_t7, 0);
            var _r422_t1 = [];
            var _r422_t2 = 0;
            while (_r422_t2 < _r422_t0.length) {
                if (!(_r422_t0[_r422_t2] instanceof r271_xn$NamedParameterPair$2Lrc9b))
                    _r422_t1.push(_r422_t0[_r422_t2]);
                _r422_t2 = _r422_t2 + 1;
            }
            var _r422_t3 = _r422_t0;
            var _r422_t4 = _r422_t3.length;
            var _r422_t5 = 0;
            while (_r422_t5 < _r422_t4) {
                _r422_t2 = _r422_t3[_r422_t5];
                if (_r422_t2 && _r422_t2 instanceof r271_xn$NamedParameterPair$2Lrc9b && _r422_t2.left === 'mul')
                    r422_mul = _r422_t2.right;
                if (_r422_t2 && _r422_t2 instanceof r271_xn$NamedParameterPair$2Lrc9b && _r422_t2.left === 'overshoot')
                    r422_overshoot = _r422_t2.right;
                _r422_t5 = _r422_t5 + 1;
            }
            var r422_mul = r1_fallback(r422_mul, _r422_t1[0], r271_PShape.defaultMul);
            var r422_overshoot = r1_fallback(r422_overshoot, _r422_t1[1], r271_PShape.defaultOvershoot);
            return function () {
                var _r428_t1;
                var _r428_t0 = this;
                var r428_currentGlyph = _r428_t0;
                var r428_sb = r271_SB * r422_mul;
                r428_currentGlyph.include(r271_difference(r271_PShape(r271_CAP, new r271_xn$NamedParameterPair$2Lrc9b('sw', r271_BBS), new r271_xn$NamedParameterPair$2Lrc9b('mul', r422_mul), new r271_xn$NamedParameterPair$2Lrc9b('overshoot', r422_overshoot), new r271_xn$NamedParameterPair$2Lrc9b('slab', false)), r271_Rect(r271_CAP - r271_BBS, 0, r428_sb + r271_HVContrast * r271_BBS / 2, r428_sb + r271_BBD)));
                r428_currentGlyph.include(r271_VBar.l(r428_sb, 0, r271_CAP, r271_BBS));
                r428_currentGlyph.include(r271_VBar.l(r428_sb + r271_BBD, 0, r271_CAP, r271_BBS));
                r428_currentGlyph.include(r271_HBar.b(r428_sb, r428_sb + r271_BBD, 0, r271_BBS));
                r428_currentGlyph.include(r271_intersection(r271_PShapeOutline(r271_CAP, new r271_xn$NamedParameterPair$2Lrc9b('sw', r271_BBS), new r271_xn$NamedParameterPair$2Lrc9b('mul', r422_mul), new r271_xn$NamedParameterPair$2Lrc9b('overshoot', r422_overshoot), new r271_xn$NamedParameterPair$2Lrc9b('offset', 1)), r271_VBar.r(r271_RightSB - r422_overshoot - r271_BBD, 0, r271_CAP, r271_BBS)));
                return void 0;
            };
        };
        return r271_xn$createAndSaveGlyphImpl$2Lrc3c('mathbb/P', 8473, function () {
            var _r444_t1;
            var _r444_t0 = this;
            var r444_currentGlyph = _r444_t0;
            r444_currentGlyph.include(r271_MarkSet.capital(), true, true);
            r444_currentGlyph.include(r271_BBPShape());
            return void 0;
        });
    });
    return void 0;
});
