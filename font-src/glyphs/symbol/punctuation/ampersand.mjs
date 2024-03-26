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
    r269_xn$Capture_Ext$2Lrc2b['$defineGlyphBlockImpl$'](r269_xn$Capture_Ext$2Lrc2b, 'Symbol-Punctuation-Ampersand', function (r270_xn$Capture$2Lrc8, r270_xn$ExportCapture$2Lrc4b) {
        var _r270_t8, _r270_t9;
        var _r270_t0 = r270_xn$Capture$2Lrc8;
        var r270_xn$createAndSaveGlyphImpl$2Lrc3c = _r270_t0['$createAndSaveGlyphImpl$'];
        var r270_xn$NamedParameterPair$2Lrc9b = _r270_t0['$NamedParameterPair$'];
        var r270_xn$assignUnicodeImpl$2Lrc8b = _r270_t0['$assignUnicodeImpl$'];
        var r270_xn$execState$2Lrc0b = _r270_t0['$execState$'];
        var _r270_t1 = r270_xn$Capture$2Lrc8.Metrics;
        var r270_Width = _r270_t1.Width;
        var r270_SB = _r270_t1.SB;
        var r270_CAP = _r270_t1.CAP;
        var r270_Translate = _r270_t1.Translate;
        var r270_TanSlope = _r270_t1.TanSlope;
        var r270_HVContrast = _r270_t1.HVContrast;
        var r270_Upward = _r270_t1.Upward;
        var r270_Downward = _r270_t1.Downward;
        var r270_Rightward = _r270_t1.Rightward;
        var r270_Leftward = _r270_t1.Leftward;
        var r270_O = _r270_t1.O;
        var r270_OX = _r270_t1.OX;
        var r270_SHook = _r270_t1.SHook;
        var r270_ArchDepth = _r270_t1.ArchDepth;
        var r270_Stroke = _r270_t1.Stroke;
        var r270_OverlayPos = _r270_t1.OverlayPos;
        var r270_CThin = _r270_t1.CThin;
        var r270_HalfStroke = _r270_t1.HalfStroke;
        var r270_RightSB = _r270_t1.RightSB;
        var r270_Middle = _r270_t1.Middle;
        var r270_ArchDepthA = _r270_t1.ArchDepthA;
        var r270_ArchDepthB = _r270_t1.ArchDepthB;
        var r270_CorrectionOMidX = _r270_t1.CorrectionOMidX;
        var r270_CorrectionOMidS = _r270_t1.CorrectionOMidS;
        var r270_AdviceStroke = _r270_t1.AdviceStroke;
        var r270_AdviceStroke2 = _r270_t1.AdviceStroke2;
        var r270_ShoulderFine = _r270_t1.ShoulderFine;
        var r270_shoulderMidSkew = _r270_t1.shoulderMidSkew;
        var r270_ArchDepthAOf = _r270_t1.ArchDepthAOf;
        var r270_ArchDepthBOf = _r270_t1.ArchDepthBOf;
        var r270_YSmoothMidL = _r270_t1.YSmoothMidL;
        var _r270_t2 = r270_xn$Capture$2Lrc8.SpiroFns;
        var r270_g4 = _r270_t2.g4;
        var r270_corner = _r270_t2.corner;
        var r270_flat = _r270_t2.flat;
        var r270_curl = _r270_t2.curl;
        var r270_end = _r270_t2.end;
        var r270_widths = _r270_t2.widths;
        var r270_heading = _r270_t2.heading;
        var r270_alsoThru = _r270_t2.alsoThru;
        var r270_archv = _r270_t2.archv;
        var r270_arcvh = _r270_t2.arcvh;
        var r270_dispiro = _r270_t2.dispiro;
        var r270_xn$spirooutline$1aao = _r270_t2['spiro-outline'];
        var _r270_t3 = r270_xn$Capture$2Lrc8.BooleFns;
        var r270_union = _r270_t3.union;
        var r270_intersection = _r270_t3.intersection;
        var r270_difference = _r270_t3.difference;
        var _r270_t4 = r270_xn$Capture$2Lrc8.CommonShapes.resolve();
        var r270_Rect = _r270_t4.Rect;
        var r270_VBar = _r270_t4.VBar;
        var r270_hookstart = _r270_t4.hookstart;
        var r270_WithTransform = _r270_t4.WithTransform;
        var r270_MaskAbove = _r270_t4.MaskAbove;
        var r270_MaskBelow = _r270_t4.MaskBelow;
        var r270_MaskRight = _r270_t4.MaskRight;
        var _r270_t5 = r270_xn$Capture$2Lrc8['Common-Derivatives'].resolve();
        var r270_xn$selectvariant$7Hrq = _r270_t5['select-variant'];
        var _r270_t6 = r270_xn$Capture$2Lrc8['Letter-Latin-Ezh'].resolve();
        var r270_RevEzhShape = _r270_t6.RevEzhShape;
        var _r270_t7 = r270_xn$Capture$2Lrc8['Letter-Shared-Shapes'].resolve();
        var r270_DToothlessRise = _r270_t7.DToothlessRise;
        var r270_RightwardTailedBar = _r270_t7.RightwardTailedBar;
        var r270_SerifedArcEnd = _r270_t7.SerifedArcEnd;
        var r270_SwAmpersand = r270_AdviceStroke2(2.5, 3, r270_CAP);
        var r270_fineAmp = r270_AdviceStroke(3.5);
        var r270_pxUpperLoopRight = 0.75 + 0.5 * r270_Stroke / (r270_RightSB - r270_SB);
        var r270_pxUpperLoopLeft = 0.05;
        var r270_pXTerminal = 1.1;
        var r270_pStraightBar = 0.4;
        var r270_adaUpperLoop = r270_ArchDepthAOf(r270_ArchDepth * (r270_pxUpperLoopRight - r270_pxUpperLoopLeft), r270_Width);
        var r270_adbUpperLoop = r270_ArchDepthBOf(r270_ArchDepth * (r270_pxUpperLoopRight - r270_pxUpperLoopLeft), r270_Width);
        var r270_xTerminal = r1_mix(r270_SB, r270_RightSB, r270_pXTerminal) - r270_SwAmpersand * r270_HVContrast;
        var r270_xUpperLoopLeft = r1_mix(r270_SB, r270_RightSB, r270_pxUpperLoopLeft);
        var r270_yUpperLoopLeft = r270_CAP - r270_adaUpperLoop;
        var r270_xUpperLoopRight = r1_mix(r270_SB, r270_RightSB, r270_pxUpperLoopRight);
        var r270_yUpperLoopRight = r270_CAP - r270_adbUpperLoop;
        var r270_xUpperLoopTop = r1_mix(r270_xUpperLoopLeft, r270_xUpperLoopRight, 0.5);
        var r270_yMockUpperLoopLeftBottom = r270_CAP - r270_adaUpperLoop - r270_adbUpperLoop * 0.3;
        var r270_ClosedTipSw = r270_AdviceStroke(3);
        var r270_ClosedIncisedSw = r270_AdviceStroke(5);
        var r270_ClosedBottomSlopeVal = -0.5 * (r270_SwAmpersand - r270_ClosedIncisedSw) / r270_SwAmpersand;
        var r270_ClosedBottomSlope = {
            'x': r270_ClosedBottomSlopeVal,
            'y': -1
        };
        var r270_xClosedAmpersandBottom = r1_mix(r270_SB, r270_RightSB, 0.44) + (0.125 + 0.5 * r270_CorrectionOMidX + r270_ClosedBottomSlopeVal) * r270_SwAmpersand;
        var r270_ClosedAmpersandLeadDim = function (r275_sw, r275_swTip, r275_offset) {
            var _r275_t0, _r275_t1;
            var r275_x1 = r1_mix(r270_SB, r270_RightSB, 0.8) - r275_offset;
            var r275_x2 = r1_mix(r270_SB, r270_RightSB, r270_pXTerminal) + 0.1 * r275_sw * r270_HVContrast - r275_offset;
            var r275_y1 = 0;
            var r275_y2 = r270_CAP * 0.375 + r275_sw / 2;
            var r275_k1 = 0.5;
            return {
                'x1': r275_x1,
                'x2': r275_x2,
                'y1': r275_y1,
                'y2': r275_y2,
                'k1': r275_k1
            };
        };
        var r270_ClosedAmpersandLead = function (r276_sw, r276_swTip) {
            var _r276_t1, _r276_t2;
            var _r276_t0 = r270_ClosedAmpersandLeadDim(r276_sw, r276_swTip, 0);
            var r276_x1 = _r276_t0.x1;
            var r276_x2 = _r276_t0.x2;
            var r276_y1 = _r276_t0.y1;
            var r276_y2 = _r276_t0.y2;
            var r276_k1 = _r276_t0.k1;
            return r270_intersection(r270_MaskBelow(r276_y2), r270_dispiro(r270_flat(r1_mix(r276_x1, r276_x2, 4), r1_mix(r276_y1, r276_y2, 4), r270_widths.rhs(r276_swTip)), r270_curl(r1_mix(r276_x1, r276_x2, r276_k1), r1_mix(r276_y1, r276_y2, r276_k1)), r270_g4.left.mid(r270_xClosedAmpersandBottom, r270_O, r270_widths.rhs.heading(r276_sw, r270_ClosedBottomSlope))));
        };
        var r270_ClosedAmpersandLeadMask2 = function (r277_sw, r277_swTip) {
            var _r277_t1, _r277_t2;
            var _r277_t0 = r270_ClosedAmpersandLeadDim(r277_sw, r277_swTip, (r277_sw - r277_swTip) * r270_HVContrast);
            var r277_x1 = _r277_t0.x1;
            var r277_x2 = _r277_t0.x2;
            var r277_y1 = _r277_t0.y1;
            var r277_y2 = _r277_t0.y2;
            var r277_k1 = _r277_t0.k1;
            return r270_intersection(r270_MaskBelow(r277_y2), r270_xn$spirooutline$1aao(r270_flat(r1_mix(r277_x1, r277_x2, 4), r1_mix(r277_y1, r277_y2, 4), r270_widths.rhs(r277_swTip)), r270_curl(r1_mix(r277_x1, r277_x2, r277_k1), r1_mix(r277_y1, r277_y2, r277_k1)), r270_g4.left.mid(r270_xClosedAmpersandBottom, r270_O, r270_widths.rhs(r277_sw)), r270_corner(0, r270_O), r270_corner(0, r1_mix(r277_y1, r277_y2, 4))));
        };
        var r270_ClosedAmpersandLeadMask = function () {
            var _r278_t0, _r278_t1;
            return r270_union(r270_intersection(r270_MaskAbove(r1_mix(r270_yMockUpperLoopLeftBottom, 0, r270_pStraightBar)), r270_MaskRight(r270_xClosedAmpersandBottom)), r270_xn$spirooutline$1aao(r270_corner(r1_mix(r270_xUpperLoopLeft, r270_xTerminal, r270_pStraightBar), r1_mix(r270_yMockUpperLoopLeftBottom, 0, r270_pStraightBar)), r270_corner(r1_mix(r270_xUpperLoopLeft, r270_xTerminal, 2), -r270_yMockUpperLoopLeftBottom), r270_corner(r1_mix(r270_xUpperLoopLeft, r270_xTerminal, 4), -r270_yMockUpperLoopLeftBottom), r270_corner(r1_mix(r270_xUpperLoopLeft, r270_xTerminal, 4), r1_mix(r270_yMockUpperLoopLeftBottom, 0, r270_pStraightBar))));
        };
        r270_xn$createAndSaveGlyphImpl$2Lrc3c('ampersand.closed', null, r270_union(r270_intersection(r270_ClosedAmpersandLead(r270_SwAmpersand, r270_ClosedTipSw), r270_ClosedAmpersandLeadMask()), r270_difference(r270_intersection(r270_ClosedAmpersandLead(r270_SwAmpersand, r270_ClosedTipSw), r270_ClosedAmpersandLeadMask2(r270_SwAmpersand, r270_ClosedIncisedSw)), r270_ClosedAmpersandLeadMask()), r270_difference(r270_dispiro(r270_g4.left.mid(r270_xClosedAmpersandBottom, r270_O, r270_widths.rhs.heading(r270_SwAmpersand, r270_ClosedBottomSlope)), r270_archv(), r270_g4(r270_SB + r270_OX, r270_YSmoothMidL(0.66 * r270_yUpperLoopRight + r270_HalfStroke, r270_O, r270_ArchDepthA, r270_ArchDepthB)), r270_alsoThru(0.5, 0.5, r270_widths.center(r270_SwAmpersand)), r270_g4(r270_xUpperLoopRight, r270_yUpperLoopRight, r270_widths.lhs(r270_SwAmpersand)), r270_arcvh(), r270_g4(r270_xUpperLoopTop - r270_CorrectionOMidX * r270_SwAmpersand, r270_CAP - r270_O), r270_archv(), r270_g4(r270_xUpperLoopLeft, r270_yUpperLoopLeft), r270_flat(r1_mix(r270_xUpperLoopLeft, r270_xTerminal, r270_pStraightBar), r1_mix(r270_yMockUpperLoopLeftBottom, 0, r270_pStraightBar)), r270_curl(r1_mix(r270_xUpperLoopLeft, r270_xTerminal, 2), -r270_yMockUpperLoopLeftBottom)), r270_Rect(0, -r270_CAP * 2, r270_xTerminal, r270_Width * 2))));
        r270_xn$createAndSaveGlyphImpl$2Lrc3c('ampersand.upperOpen', null, r270_union(r270_intersection(r270_ClosedAmpersandLead(r270_SwAmpersand, r270_ClosedTipSw), r270_ClosedAmpersandLeadMask()), r270_difference(r270_intersection(r270_ClosedAmpersandLead(r270_SwAmpersand, r270_ClosedTipSw), r270_ClosedAmpersandLeadMask2(r270_SwAmpersand, r270_ClosedIncisedSw)), r270_ClosedAmpersandLeadMask()), r270_difference(r270_dispiro(r270_g4.left.mid(r270_xClosedAmpersandBottom, r270_O, r270_widths.rhs.heading(r270_SwAmpersand, r270_ClosedBottomSlope)), r270_archv(), r270_g4(r270_SB + r270_OX, r270_YSmoothMidL(0.66 * r270_yUpperLoopRight + r270_HalfStroke, r270_O, r270_ArchDepthA, r270_ArchDepthB)), r270_alsoThru(0.5, 0.5, r270_widths.center(r270_SwAmpersand)), r270_g4(r270_xUpperLoopRight, r270_yUpperLoopRight, r270_widths.lhs(r270_SwAmpersand))), r270_Rect(r270_CAP * 2, r270_yUpperLoopRight, 0, r270_Width), r270_Rect(r270_CAP * 2, 0.5 * r270_CAP, r270_Middle, r270_Width), r270_intersection(r270_Rect(r270_CAP * 2, r270_ArchDepthA, 0, r270_RightSB - r270_fineAmp * r270_HVContrast), r270_WithTransform(r270_Translate(-r270_O, 0), r270_xn$spirooutline$1aao(r270_g4.left.start(r270_xUpperLoopTop - r270_CorrectionOMidX * r270_SwAmpersand, r270_CAP - r270_O), r270_archv(), r270_g4(r270_xUpperLoopLeft, r270_yUpperLoopLeft), r270_flat(r1_mix(r270_xUpperLoopLeft, r270_xTerminal, r270_pStraightBar), r1_mix(r270_yMockUpperLoopLeftBottom, 0, r270_pStraightBar)), r270_corner(r1_mix(r270_xUpperLoopLeft, r270_xTerminal, 2), -r270_yMockUpperLoopLeftBottom), r270_corner(r1_mix(r270_xUpperLoopLeft, r270_xTerminal, 2) + r270_Width * 2, -r270_yMockUpperLoopLeftBottom), r270_corner(r1_mix(r270_xUpperLoopLeft, r270_xTerminal, 2) + r270_Width * 2, r270_CAP - r270_O))))), r270_difference(r270_dispiro(r270_g4.up.start(r270_xUpperLoopRight, r270_yUpperLoopRight, r270_widths.heading(r270_SwAmpersand, 0, r270_Upward)), r270_arcvh(), r270_g4(r270_xUpperLoopTop - r270_CorrectionOMidX * r270_SwAmpersand, r270_CAP - r270_O), r270_archv(), r270_g4(r270_xUpperLoopLeft, r270_yUpperLoopLeft), r270_flat(r1_mix(r270_xUpperLoopLeft, r270_xTerminal, r270_pStraightBar), r1_mix(r270_yMockUpperLoopLeftBottom, 0, r270_pStraightBar)), r270_curl(r1_mix(r270_xUpperLoopLeft, r270_xTerminal, 2), -r270_yMockUpperLoopLeftBottom)), r270_Rect(0, -r270_CAP * 2, r270_xTerminal, r270_Width * 2))));
        var r270_xLowerOpenRight = r1_mix(r270_xUpperLoopRight, r270_RightSB, 0.5);
        var r270_xLowerOpenBottom = r1_mix(r270_SB, r270_xLowerOpenRight, 0.5);
        var r270_yLowerOpenEnd = Math.max(r270_ArchDepthA + r270_fineAmp, r270_CAP * 0.45);
        var r270_xLowerOpenBarRight = r1_mix(r270_xLowerOpenRight, r270_Width, 0.5);
        var r270_xLowerOpenBarLeft = Math.min(r270_xLowerOpenRight - r270_HVContrast * r270_Stroke - r270_xLowerOpenBarRight + r270_xLowerOpenRight, r1_mix(r270_Middle, r270_xLowerOpenRight, 0.5));
        var r270_LowerOpenCrossbar = function (r281_y) {
            var _r281_t0, _r281_t1;
            return r270_dispiro(r270_widths.rhs(r270_fineAmp), r270_corner(r270_xLowerOpenBarLeft + r270_TanSlope * r270_fineAmp / 2, r281_y), r270_corner(r270_xLowerOpenBarRight + r270_TanSlope * r270_fineAmp / 2, r281_y));
        };
        r270_xn$createAndSaveGlyphImpl$2Lrc3c('ampersand.lowerOpen', null, r270_union(r270_LowerOpenCrossbar(r270_yLowerOpenEnd), r270_dispiro(r270_widths.rhs(r270_SwAmpersand), r270_flat(r270_xLowerOpenRight - r270_O, r270_yLowerOpenEnd, r270_heading(r270_Downward)), r270_curl(r270_xLowerOpenRight - r270_O, r270_ArchDepthA), r270_arcvh(), r270_g4(r270_xLowerOpenBottom + r270_CorrectionOMidX * r270_SwAmpersand, r270_O), r270_archv(), r270_g4(r270_SB + r270_O, r270_ArchDepthB), r270_alsoThru(0.5, 0.5, r270_widths.center(r270_SwAmpersand)), r270_g4(r270_xUpperLoopRight, r270_yUpperLoopRight, r270_widths.lhs(r270_SwAmpersand)), r270_arcvh(), r270_g4.left.mid(r270_xUpperLoopTop - r270_CorrectionOMidX * r270_SwAmpersand, r270_CAP - r270_O)), r270_difference(r270_dispiro(r270_g4.left.mid(r270_xUpperLoopTop - r270_CorrectionOMidX * r270_SwAmpersand, r270_CAP - r270_O, r270_widths.lhs(r270_SwAmpersand)), r270_archv(), r270_g4(r270_xUpperLoopLeft, r270_yUpperLoopLeft), r270_flat(r1_mix(r270_xUpperLoopLeft, r270_xTerminal, r270_pStraightBar), r1_mix(r270_yMockUpperLoopLeftBottom, 0, r270_pStraightBar)), r270_curl(r270_xTerminal, 0)), r270_xn$spirooutline$1aao(r270_g4.left.start(r270_xLowerOpenBottom + r270_CorrectionOMidX * r270_SwAmpersand, r270_O), r270_archv(), r270_g4(r270_SB + r270_OX, r270_YSmoothMidL(0.66 * r270_yUpperLoopRight + r270_HalfStroke, r270_O, r270_ArchDepthA, r270_ArchDepthB)), r270_alsoThru(0.5, 0.5, r270_widths.center(r270_SwAmpersand)), r270_g4(r270_xUpperLoopRight, r270_yUpperLoopRight), r270_arcvh(), r270_corner.left.end(r270_xUpperLoopTop - r270_CorrectionOMidX * r270_SwAmpersand, r270_CAP - r270_O), r270_corner(r270_xUpperLoopTop - r270_CorrectionOMidX * r270_SwAmpersand, r270_CAP * 2), r270_corner(r270_Width * 2, r270_CAP * 2), r270_corner(r270_Width * 2, r270_O)))));
        var r270_yEtMiddle = r270_CAP * r270_OverlayPos;
        var r270_adaEt = r270_CAP - r1_mix(r270_yEtMiddle + r270_SwAmpersand / 2, r270_CAP - r270_O - r270_SwAmpersand, r270_ArchDepthB / (r270_ArchDepthA + r270_ArchDepthB)) - r270_TanSlope * r270_HVContrast * r270_SwAmpersand;
        var r270_adbEt = r1_mix(r270_SwAmpersand + r270_O, r270_yEtMiddle - r270_SwAmpersand / 2, r270_ArchDepthB / (r270_ArchDepthA + r270_ArchDepthB)) + r270_TanSlope * r270_HVContrast * r270_SwAmpersand;
        var r270_fineEt = r270_SwAmpersand * r270_CThin;
        var r270_xEtLeft = r270_SB;
        var r270_xEtRight = r1_mix(r270_xUpperLoopRight, r270_RightSB, 0.5);
        var r270_xEtBottom = r1_mix(r270_xEtLeft, r270_xEtRight, 0.5);
        var r270_xEtCenterBarRight = r1_mix(r270_xEtRight, r270_Width, 0.5);
        var r270_yEtRightBarTop = r1_mix(r270_yEtMiddle + r270_SwAmpersand / 2, r270_CAP - r270_SHook, 0.375);
        var r270_xn$FORMTOOTHLESSCORNER$5sIl0b = 1;
        var r270_xn$FORMTOOTHLESSROUNDED$5sIl0b = 2;
        var r270_xn$FORMTOOTHED$5sIl = 3;
        var r270_EtUpperHalf = function () {
            var _r283_t0, _r283_t1;
            return r270_dispiro(r270_g4(r270_xEtRight, r270_CAP - r270_SHook, r270_widths.lhs()), r270_hookstart(r270_CAP - r270_O), r270_g4(r270_xEtLeft, r270_CAP - r270_adaEt), r270_arcvh(), r270_flat(r270_Middle, r270_yEtMiddle - (r270_fineEt - r270_SwAmpersand / 2), r270_widths.heading(r270_fineEt, 0, r270_Rightward)), r270_curl(r270_xEtCenterBarRight, r270_yEtMiddle - (r270_fineEt - r270_SwAmpersand / 2), r270_heading(r270_Rightward)));
        };
        var r270_EtLowerHalf = function (r284_form) {
            var r284__, _r284_t0, _r284_t1, _r284_t2;
            return r270_dispiro(r270_flat(r270_xEtCenterBarRight, r270_yEtMiddle + (r270_fineEt - r270_SwAmpersand / 2), r270_widths.heading(r270_fineEt, 0, r270_Leftward)), r270_curl(r270_Middle, r270_yEtMiddle + (r270_fineEt - r270_SwAmpersand / 2), r270_heading(r270_Leftward)), r270_archv(), r270_g4(r270_xEtLeft + r270_O * 2, r270_adbEt, r270_widths.lhs()), (_r284_t0 = r284_form, _r284_t0 === r270_xn$FORMTOOTHLESSCORNER$5sIl0b ? [
                r270_arcvh(),
                r270_g4(r270_xEtBottom + r270_CorrectionOMidS, r270_O),
                r270_g4(r270_xEtRight, r270_DToothlessRise)
            ] : _r284_t0 === r270_xn$FORMTOOTHLESSROUNDED$5sIl0b ? [
                r270_arcvh(),
                r270_g4(r270_xEtBottom + r270_CorrectionOMidS, r270_O),
                r270_archv(),
                r270_flat(r270_xEtRight, r270_adaEt),
                r270_curl(r270_xEtRight, r270_yEtRightBarTop, r270_heading(r270_Upward))
            ] : _r284_t0 === r270_xn$FORMTOOTHED$5sIl ? r270_SerifedArcEnd.LtrLhs(r270_xEtRight, r270_xEtBottom, 0, r270_Stroke, r270_adaEt, r270_Stroke) : (r284__ = _r284_t0, [])));
        };
        r270_xn$createAndSaveGlyphImpl$2Lrc3c('ampersand.etToothlessCorner', null, r270_union(r270_EtUpperHalf(), r270_EtLowerHalf(r270_xn$FORMTOOTHLESSCORNER$5sIl0b), r270_VBar.r(r270_xEtRight, r270_DToothlessRise, r270_yEtRightBarTop)));
        r270_xn$createAndSaveGlyphImpl$2Lrc3c('ampersand.etToothlessRounded', null, r270_union(r270_EtUpperHalf(), r270_EtLowerHalf(r270_xn$FORMTOOTHLESSROUNDED$5sIl0b)));
        r270_xn$createAndSaveGlyphImpl$2Lrc3c('ampersand.etToothed', null, r270_union(r270_EtUpperHalf(), r270_EtLowerHalf(r270_xn$FORMTOOTHED$5sIl), r270_VBar.r(r270_xEtRight, r270_adaEt + r270_O, r270_yEtRightBarTop), r270_VBar.r(r270_xEtRight, r270_adaEt, 0, Math.max(r270_AdviceStroke(5), r270_Stroke - r270_ShoulderFine / 2))));
        r270_xn$createAndSaveGlyphImpl$2Lrc3c('ampersand.etTailed', null, r270_union(r270_EtUpperHalf(), r270_EtLowerHalf(r270_xn$FORMTOOTHED$5sIl), r270_RightwardTailedBar(r270_xEtRight, 0, r270_yEtRightBarTop)));
        var r270_yEtFlatTopEnd = Math.max(r270_ArchDepthA + r270_fineAmp, r270_CAP * 0.4);
        var r270_yEtFlatTopBarPos = (r270_OverlayPos * r270_CAP + r270_Stroke * 0.625) / r270_CAP;
        var r270_skFlatTop = r270_shoulderMidSkew(r270_fineAmp, void 0);
        r270_xn$createAndSaveGlyphImpl$2Lrc3c('ampersand.flatTop', null, r270_union(r270_LowerOpenCrossbar(r270_yEtFlatTopEnd), r270_RevEzhShape(r270_CAP, 0, new r270_xn$NamedParameterPair$2Lrc9b('hookless', true), new r270_xn$NamedParameterPair$2Lrc9b('ada', r270_ArchDepthA), new r270_xn$NamedParameterPair$2Lrc9b('adb', r270_ArchDepthB), new r270_xn$NamedParameterPair$2Lrc9b('pyBar', r270_yEtFlatTopBarPos), new r270_xn$NamedParameterPair$2Lrc9b('diagCoeff', 1.2)), r270_dispiro(r270_widths.lhs(), r270_g4.down.start(r270_SB + r270_OX, r270_RevEzhShape.yLoopLeft(r270_CAP, 0, r270_yEtFlatTopBarPos, r270_adaEt, r270_adbEt)), r270_arcvh(), r270_g4.right.mid(r270_xLowerOpenBottom + r270_CorrectionOMidS, r270_O, r270_widths.heading(r270_Stroke, 0, {
            'y': 1,
            'x': r270_skFlatTop
        })), r270_archv(), r270_flat(r270_xLowerOpenRight - r270_OX, r270_adaEt, r270_widths.lhs(r270_fineAmp)), r270_curl(r270_xLowerOpenRight - r270_OX, r270_yEtFlatTopEnd, r270_heading(r270_Upward)))));
        return r270_xn$selectvariant$7Hrq('ampersand', '&');
    });
    return void 0;
});
