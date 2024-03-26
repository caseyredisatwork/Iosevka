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
    r270_xn$Capture_Ext$2Lrc2b['$defineGlyphBlockImpl$'](r270_xn$Capture_Ext$2Lrc2b, 'Letter-Latin-Upper-Q', function (r271_xn$Capture$2Lrc8, r271_xn$ExportCapture$2Lrc4b) {
        var r271_suffix, r271_body, r271_swTailInner, r271_tailShape, r271_mkCapital, r271_mkSmcp, _r271_t9, _r271_t10, _r271_t11, _r271_t12, _r271_tag13;
        var _r271_t0 = r271_xn$Capture$2Lrc8;
        var r271_xn$createAndSaveGlyphImpl$2Lrc3c = _r271_t0['$createAndSaveGlyphImpl$'];
        var r271_xn$NamedParameterPair$2Lrc9b = _r271_t0['$NamedParameterPair$'];
        var r271_xn$assignUnicodeImpl$2Lrc8b = _r271_t0['$assignUnicodeImpl$'];
        var r271_xn$execState$2Lrc0b = _r271_t0['$execState$'];
        var r271_MarkSet = _r271_t0.MarkSet;
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
        var r271_Rightward = _r271_t1.Rightward;
        var r271_Leftward = _r271_t1.Leftward;
        var r271_O = _r271_t1.O;
        var r271_OX = _r271_t1.OX;
        var r271_Hook = _r271_t1.Hook;
        var r271_HookX = _r271_t1.HookX;
        var r271_Stroke = _r271_t1.Stroke;
        var r271_CThin = _r271_t1.CThin;
        var r271_HalfStroke = _r271_t1.HalfStroke;
        var r271_RightSB = _r271_t1.RightSB;
        var r271_Middle = _r271_t1.Middle;
        var r271_ArchDepthA = _r271_t1.ArchDepthA;
        var r271_ArchDepthB = _r271_t1.ArchDepthB;
        var r271_CorrectionOMidX = _r271_t1.CorrectionOMidX;
        var r271_CorrectionOMidS = _r271_t1.CorrectionOMidS;
        var r271_AdviceStroke = _r271_t1.AdviceStroke;
        var r271_ShoulderFine = _r271_t1.ShoulderFine;
        var r271_StrokeWidthBlend = _r271_t1.StrokeWidthBlend;
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
        var r271_alsoThru = _r271_t2.alsoThru;
        var r271_archv = _r271_t2.archv;
        var r271_arcvh = _r271_t2.arcvh;
        var r271_dispiro = _r271_t2.dispiro;
        var _r271_t3 = r271_xn$Capture$2Lrc8.BooleFns;
        var r271_union = _r271_t3.union;
        var r271_intersection = _r271_t3.intersection;
        var r271_difference = _r271_t3.difference;
        var _r271_t4 = r271_xn$Capture$2Lrc8.CommonShapes.resolve();
        var r271_OShape = _r271_t4.OShape;
        var r271_OShapeOutline = _r271_t4.OShapeOutline;
        var r271_VBar = _r271_t4.VBar;
        var r271_DiagCor = _r271_t4.DiagCor;
        var r271_PointingTo = _r271_t4.PointingTo;
        var r271_MaskLeft = _r271_t4.MaskLeft;
        var r271_MaskBelowLine = _r271_t4.MaskBelowLine;
        var _r271_t5 = r271_xn$Capture$2Lrc8['Common-Derivatives'].resolve();
        var r271_xn$selectvariant$7Hrq = _r271_t5['select-variant'];
        var r271_alias = _r271_t5.alias;
        var _r271_t6 = r271_xn$Capture$2Lrc8['Letter-Blackboard'].resolve();
        var r271_BBS = _r271_t6.BBS;
        var r271_BBD = _r271_t6.BBD;
        r271_xn$Capture$2Lrc8['Letter-Latin-O'].resolve();
        var r271_TailDepth = 0 - r271_Hook;
        var r271_QStdBody = function (r276_df, r276_top, r276_sw) {
            var _r276_t0, _r276_t1;
            return r271_OShape(r276_top, 0, r276_df.leftSB, r276_df.rightSB, r276_sw, r271_ArchDepthA, r271_ArchDepthB);
        };
        var r271_QHorizontalTailedBody = function (r277_df, r277_top, r277_sw) {
            var _r277_t0, _r277_t1;
            var r277_fine = r1_mix(r271_ShoulderFine, r277_sw, 0.125);
            return r271_dispiro(r271_flat(r277_df.middle - r277_sw * r271_TanSlope + r271_O, r277_sw - r277_fine, r271_widths.lhs(r277_fine)), r271_curl(r277_df.middle + r271_CorrectionOMidX * r277_fine, r277_sw - r277_fine), r271_archv(), r271_flat(r277_df.rightSB, r271_ArchDepthA, r271_widths.lhs(r277_sw)), r271_curl(r277_df.rightSB, r277_top - r271_ArchDepthB), r271_arcvh(), r271_g4(r277_df.middle - r271_CorrectionOMidS, r277_top - r271_O), r271_archv(), r271_flat(r277_df.leftSB, r277_top - r271_ArchDepthA), r271_curl(r277_df.leftSB, r271_ArchDepthB), r271_arcvh(), r271_straight.right.end(r277_df.middle + r271_CorrectionOMidS, 0));
        };
        var r271_QOpenSwashyBody = function (r278_df, r278_top) {
            var _r278_t0, _r278_t1;
            return function () {
                var _r280_t1;
                var _r280_t0 = this;
                var r280_currentGlyph = _r280_t0;
                var r280_fine = r271_AdviceStroke(3.5);
                var r280_xLB0 = r1_mix(r278_df.leftSB, r278_df.rightSB, 1 / 16);
                var r280_xLB = r280_xLB0 + 0.6 * r271_HVContrast * r280_fine;
                var r280_yLB = r1_mix(0, r271_Descender, 1 - 1 / 32) + r271_O;
                var r280_xMBArc = r1_mix(r278_df.rightSB, r280_xLB, 0.5);
                var r280_yMBArc = r1_mix(r271_ArchDepthA, r280_yLB, 0.625) + r271_Stroke * (1 / 16);
                var r280_xRB0 = r1_mix(r278_df.rightSB, r278_df.width, 0.7);
                var r280_xRB = r280_xRB0 - 0.75 * r271_HVContrast * r271_Stroke;
                var r280_yRingStart = r271_XH / 12;
                var r280_notchOffset = -r271_Descender * 0.625 + r271_Stroke * 0.625 + r280_yRingStart / 2;
                var r280_tailSlope = 0.2 + 0.5 * (1 - r280_fine / r271_Stroke);
                r280_currentGlyph.include(r271_difference(r271_dispiro(r271_flat(r278_df.width, r280_yRingStart + r271_O, r271_widths.rhs.heading(r280_fine, r271_Leftward)), r271_curl(r278_df.middle + r271_CorrectionOMidS, r280_yRingStart + r271_O), r271_archv(), r271_flat(r278_df.leftSB + r271_OX, r280_yRingStart + r271_ArchDepthB, r271_widths.rhs(r271_Stroke)), r271_curl(r278_df.leftSB + r271_OX, r1_mix(r280_yRingStart, r278_top, 0.5), r271_heading(r271_Upward))), r271_MaskBelowLine(r1_mix(r280_xMBArc, r280_xLB0, 4), r1_mix(r280_yMBArc, r280_yLB, 4) + r280_notchOffset, r1_mix(r280_xLB0, r280_xMBArc, 4), r1_mix(r280_yLB, r280_yMBArc, 4) + r280_notchOffset)));
                r280_currentGlyph.include(r271_dispiro(r271_flat(r278_df.leftSB + r271_OX, r1_mix(r280_yRingStart, r278_top, 0.5), r271_widths.rhs.heading(r271_Stroke, r271_Upward)), r271_curl(r278_df.leftSB + r271_OX, r278_top - r271_ArchDepthA), r271_arcvh(), r271_g4(r278_df.middle - r271_CorrectionOMidS, r278_top - r271_O), r271_archv(), r271_flat(r278_df.rightSB - r271_OX, r278_top - r271_ArchDepthB), r271_curl(r278_df.rightSB - r271_OX, r271_ArchDepthA), r271_alsoThru.g2(0.5, 0.8, r271_widths.rhs(0.9 * r1_mix(r271_Stroke, r280_fine, 0.25))), r271_g2(r280_xMBArc, r280_yMBArc, r271_widths.rhs(0.8 * r1_mix(r271_Stroke, r280_fine, 0.5))), r271_alsoThru.g2(0.55, 0.35, r271_widths.rhs(0.9 * r1_mix(r271_Stroke, r280_fine, 0.75))), r271_g2(r280_xLB, r280_yLB, r271_widths.rhs(r280_fine))));
                r280_currentGlyph.include(r271_difference(r271_dispiro(r271_g2(r280_xLB, r280_yLB, r271_widths.lhs(r280_fine * r271_CThin)), r271_g2.right.mid(r1_mix(r280_xLB, r280_xRB, 1 / 4), r280_yLB - r271_Descender / 4 - r271_Stroke * (1 / 16), r271_widths.lhs.heading(r280_fine * r271_CThin, {
                    'x': r271_TanSlope + r280_tailSlope,
                    'y': 1
                })), r271_alsoThru.g2(0.5, 0.5), r271_g2.right.mid(r1_mix(r280_xLB, r280_xRB, 3 / 4) + r271_Stroke * r280_tailSlope, r271_Descender + r271_O, r271_widths.lhs.heading(r271_Stroke, {
                    'x': r271_TanSlope - r280_tailSlope,
                    'y': 1
                })), r271_archv(), r271_g2(r280_xRB0, r1_mix(r271_Descender, r280_xLB, 0.5), r271_widths.lhs.heading(r280_fine, r271_Upward))), r271_MaskLeft(r280_xLB)));
                return void 0;
            };
        };
        var r271_QStaraightTail = function (r284_df) {
            var _r284_t0, _r284_t1;
            var r284_shift = r271_StrokeWidthBlend(0, 0.25);
            return r271_dispiro(r271_widths.rhs(), r271_flat(r284_df.middle - r271_Stroke * r271_HVContrast * r284_shift - r271_TailDepth * 0.25, r271_TailDepth, r271_heading(r271_Upward)), r271_curl(r284_df.middle - r271_Stroke * r271_HVContrast * r284_shift, 0));
        };
        var r271_QCurlyTail = function (r285_df) {
            var _r285_t0, _r285_t1;
            var r285_shift = r271_StrokeWidthBlend(0.5, 0.6);
            var r285_startx = r285_df.middle + r271_Stroke * r285_shift * r271_HVContrast;
            return r271_dispiro(r271_widths.rhs(), r271_flat(r285_startx, r271_HalfStroke, r271_heading(r271_Downward)), r271_curl(r285_startx, 0, r271_heading(r271_Downward)), r271_arcvh(), r271_flat(Math.min(r285_df.middle + r271_HookX - 1, r285_startx - r271_TailDepth - r271_Stroke * r271_HVContrast), r271_Stroke + r271_TailDepth), r271_curl(r285_df.middle + r271_HookX, r271_Stroke + r271_TailDepth));
        };
        var r271_QCrossingCurlyTail = function (r286_df, r286_top, r286_sw) {
            var _r286_t0, _r286_t1;
            return r271_union(r271_VBar.m(r286_df.middle, r271_HalfStroke, r1_mix(r271_Descender, r271_HalfStroke, 1.75), r286_sw), r271_dispiro(r271_widths.rhs(), r271_flat(r286_df.middle + r271_HalfStroke * r271_HVContrast, r271_HalfStroke, r271_heading(r271_Downward)), r271_curl(r286_df.middle + r271_HalfStroke * r271_HVContrast, 0, r271_heading(r271_Downward)), r271_arcvh(), r271_flat(Math.min(r286_df.middle + r271_HookX - 1, r286_df.middle - r271_HalfStroke * r271_HVContrast - r271_TailDepth), r271_Stroke + r271_TailDepth), r271_curl(r286_df.middle + r271_HookX, r271_Stroke + r271_TailDepth)));
        };
        var r271_QCrossing = function (r287_df, r287_top, r287_sw) {
            var _r287_t0, _r287_t1;
            var r287_k = 1.5;
            var r287_cor = r271_DiagCor(r287_k * (r287_df.rightSB - r287_df.middle), r287_df.rightSB - r287_df.middle - r271_OX);
            var r287_shift = r271_XH * -0.1;
            return r271_dispiro(r271_widths.center(r287_cor * r287_sw), r271_flat(r287_df.rightSB, r287_shift, r271_heading(r271_Upward)), r271_curl(r287_df.middle + r271_OX, r287_k * (r287_df.rightSB - r287_df.middle) + r287_shift, r271_heading(r271_Upward)));
        };
        var r271_QCrossingBaseline = function (r288_df, r288_top, r288_sw) {
            var _r288_t0, _r288_t1;
            var r288_cor = r271_DiagCor(0.5 * (r288_top - r271_Stroke), r288_df.rightSB - r288_df.middle - r271_OX);
            return r271_dispiro(r271_widths.center(r288_cor * r288_sw), r271_flat(r288_df.rightSB, 0, r271_heading(r271_Upward)), r271_curl(r288_df.middle + r271_OX, 0.5 * (r288_top - r271_Stroke), r271_heading(r271_Upward)));
        };
        var r271_QVerticalCrossing = function (r289_df, r289_top, r289_sw) {
            var _r289_t0, _r289_t1;
            return r271_union(r271_VBar.m(r289_df.middle, r1_mix(r271_Descender, r271_HalfStroke, 1.75), 0, r289_sw), r271_VBar.m(r289_df.middle, 0, r271_TailDepth));
        };
        var r271_QHorizontalTail = function (r290_df, r290_tio, r290_sw) {
            var _r290_t0, _r290_t1;
            return r271_dispiro(r271_flat(r290_df.middle + r271_CorrectionOMidS, 0, r271_widths.lhs(r271_AdviceStroke(3))), r271_curl(r1_mix(r290_df.rightSB, r290_df.width, 0.5), 0));
        };
        var r271_detachedTailGap = Math.max(-0.25 * r271_Descender, r271_AdviceStroke(12));
        var r271_yObliqueTailStart = 0 - r271_detachedTailGap - r271_Stroke * 0.875;
        var r271_yObliqueTailEnd = r1_mix(0, r271_Descender, 0.75) - r271_Stroke * 0.5;
        var r271_xDetachedTailEnd = function (r291_df) {
            var _r291_t0, _r291_t1;
            return r1_mix(r291_df.rightSB, r291_df.width, 0.75);
        };
        var r271_kBendStartPartLeftLength = 0.5;
        var r271_xBendTailStart = function (r292_df) {
            var _r292_t0, _r292_t1;
            return r1_mix(r292_df.middle, r292_df.leftSB, r271_kBendStartPartLeftLength);
        };
        var r271_yBendTailStart = r1_mix(r271_yObliqueTailStart, r271_yObliqueTailEnd, r271_kBendStartPartLeftLength);
        var r271_QDetachedTail = function (r293_df) {
            var _r293_t0, _r293_t1;
            return r271_dispiro(r271_widths.lhs(r271_Stroke), r271_corner(r293_df.middle, r271_yObliqueTailStart, r271_heading(r271_Rightward)), r271_corner(r271_xDetachedTailEnd(r293_df), r271_yObliqueTailEnd, r271_heading(r271_Rightward)));
        };
        var r271_QDetachedBendTail = function (r294_df) {
            var _r294_t0, _r294_t1;
            return r271_union(r271_QDetachedTail(r294_df), r271_dispiro(r271_widths.lhs(r271_Stroke), r271_corner(r271_xBendTailStart(r294_df), r271_yBendTailStart, r271_heading(r271_Rightward)), r271_corner(r294_df.middle, r271_yObliqueTailStart, r271_heading(r271_Rightward))));
        };
        var r271_QSwashyTail = function () {
            var _r295_t0, _r295_t1;
            return function () {
                var _r297_t1;
                var _r297_t0 = this;
                var r297_currentGlyph = _r297_t0;
                return void 0;
            };
        };
        var r271_QInnerVertSw = Math.min(r271_AdviceStroke(3.5), (r271_RightSB - r271_SB - r271_Stroke * 2 * r271_HVContrast) / (2 * r271_HVContrast));
        var r271_QConfig = {
            'straight': [
                r271_QStdBody,
                r271_Stroke,
                r271_QStaraightTail,
                'bp',
                'p'
            ],
            'curlyTailed': [
                r271_QStdBody,
                r271_Stroke,
                r271_QCurlyTail,
                'bp',
                'p'
            ],
            'crossingCurlyTailed': [
                r271_QStdBody,
                r271_QInnerVertSw,
                r271_QCrossingCurlyTail,
                'bp',
                'p'
            ],
            'crossing': [
                r271_QStdBody,
                r271_AdviceStroke(4),
                r271_QCrossing,
                'capital',
                'e'
            ],
            'crossingBaseline': [
                r271_QStdBody,
                r271_AdviceStroke(4),
                r271_QCrossingBaseline,
                'capital',
                'e'
            ],
            'verticalCrossing': [
                r271_QStdBody,
                r271_QInnerVertSw,
                r271_QVerticalCrossing,
                'bp',
                'p'
            ],
            'horizontalTailed': [
                r271_QHorizontalTailedBody,
                r271_AdviceStroke(3),
                r271_QHorizontalTail,
                'capital',
                'e'
            ],
            'detachedTailed': [
                r271_QStdBody,
                r271_Stroke,
                r271_QDetachedTail,
                'bp',
                'p'
            ],
            'detachedBendTailed': [
                r271_QStdBody,
                r271_Stroke,
                r271_QDetachedBendTail,
                'bp',
                'p'
            ],
            'openSwash': [
                r271_QOpenSwashyBody,
                r271_Stroke,
                r271_QSwashyTail,
                'bp',
                'p'
            ]
        };
        var _r271_t7 = Object.entries(r271_QConfig)[Symbol.iterator]();
        var _r271_t8 = void 0;
        while (!(_r271_t8 = _r271_t7.next()).done) {
            _r271_t9 = _r271_t8.value;
            r271_suffix = _r271_t9[0];
            r271_body = _r271_t9[1][0];
            r271_swTailInner = _r271_t9[1][1];
            r271_tailShape = _r271_t9[1][2];
            r271_mkCapital = _r271_t9[1][3];
            r271_mkSmcp = _r271_t9[1][4];
            _r271_t9[1];
            (function () {
                r271_xn$createAndSaveGlyphImpl$2Lrc3c('Q.' + r271_suffix, null, function () {
                    var _r303_t1;
                    var _r303_t0 = this;
                    var r303_currentGlyph = _r303_t0;
                    var r303_df = r271_DivFrame(1);
                    r303_currentGlyph.include(r271_MarkSet[r271_mkCapital]());
                    r303_currentGlyph.include(r271_body(r303_df, r271_CAP, r271_Stroke));
                    r303_currentGlyph.include(r271_tailShape(r303_df, r271_CAP, r271_swTailInner));
                    return void 0;
                });
                r271_xn$createAndSaveGlyphImpl$2Lrc3c('smcpQ.' + r271_suffix, null, function () {
                    var _r309_t1;
                    var _r309_t0 = this;
                    var r309_currentGlyph = _r309_t0;
                    var r309_df = r271_DivFrame(1);
                    r309_currentGlyph.include(r271_MarkSet[r271_mkSmcp]());
                    r309_currentGlyph.include(r271_body(r309_df, r271_XH, r271_Stroke));
                    r309_currentGlyph.include(r271_tailShape(r309_df, r271_XH, r271_swTailInner));
                    return void 0;
                });
                return r271_xn$createAndSaveGlyphImpl$2Lrc3c('QSideways.' + r271_suffix, null, function () {
                    var _r315_t1;
                    var _r315_t0 = this;
                    var r315_currentGlyph = _r315_t0;
                    var r315_df = r271_DivFrame(r271_XH / r271_Width, 2, r271_XH * 0.1 / r271_SB);
                    r315_currentGlyph.include(r271_PointingTo(r271_Width, r271_XH, r271_Width, 0, function () {
                        var _r317_t0, _r317_t1;
                        return function () {
                            var _r319_t1;
                            var _r319_t0 = this;
                            var r319_currentGlyph = _r319_t0;
                            r319_currentGlyph.include(r271_body(r315_df, r271_Width - r271_SB, r271_Stroke));
                            r319_currentGlyph.include(r271_tailShape(r315_df, r271_Width - r271_SB, r271_swTailInner));
                            return void 0;
                        };
                    }));
                    return void 0;
                });
            }());
        }
        r271_xn$selectvariant$7Hrq('Q', 'Q');
        r271_alias('cyrl/Qa', 1306, 'Q');
        r271_xn$selectvariant$7Hrq('smcpQ', 42927, new r271_xn$NamedParameterPair$2Lrc9b('follow', 'Q'));
        r271_xn$selectvariant$7Hrq('QSideways', 8506, new r271_xn$NamedParameterPair$2Lrc9b('follow', 'Q'));
        return r271_xn$createAndSaveGlyphImpl$2Lrc3c('mathbb/Q', 8474, function () {
            var _r326_t1;
            var _r326_t0 = this;
            var r326_currentGlyph = _r326_t0;
            var r326_QInner = function () {
                var _r327_t0, _r327_t1;
                return r271_OShapeOutline.NoOvershoot(r271_CAP, 0, r271_SB, r271_RightSB, r271_BBS, r271_ArchDepthA, r271_ArchDepthB);
            };
            r326_currentGlyph.include(r271_MarkSet.capDesc());
            r326_currentGlyph.include(r271_OShape(r271_CAP, 0, r271_SB, r271_RightSB, r271_BBS, r271_ArchDepthA, r271_ArchDepthB));
            r326_currentGlyph.include(r271_intersection(r326_QInner(), r271_union(r271_VBar.l(r271_SB + r271_BBD, 0, r271_CAP, r271_BBS), r271_VBar.r(r271_RightSB - r271_BBD, 0, r271_CAP, r271_BBS))));
            var r326_terminalX = r271_Middle + r271_HookX;
            var r326_tailDeltaX = r271_BBD / 2;
            var r326_qTerminalY = r271_BBS - r271_Hook - r271_BBD / 4;
            var r326_QTail = function (r331_x) {
                var _r331_t0, _r331_t1;
                return r271_dispiro(r271_widths.center(r271_BBS), r271_flat(r331_x, r271_CAP / 2), r271_curl(r331_x, 0), r271_arcvh(), r271_flat(Math.min(r326_terminalX - 1, r331_x - r326_qTerminalY), r326_qTerminalY), r271_curl(r326_terminalX, r326_qTerminalY));
            };
            r326_currentGlyph.include(r271_difference(r271_union(r326_QTail(r271_Middle - r326_tailDeltaX), r326_QTail(r271_Middle + r326_tailDeltaX)), r326_QInner()));
            return void 0;
        });
    });
    return void 0;
});
