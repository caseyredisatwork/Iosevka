'use strict';
import * as _s0_t0 from '../support/geometry/point.mjs';
import * as _s0_t1 from '../support/geometry/transform.mjs';
import * as _s0_t2 from '../support/geometry/anchor.mjs';
import * as _s0_t3 from '../support/utils.mjs';
var _s0_t4;
export {
    _s0_t4 as calculateMetrics
};
var _s0_t5;
export {
    _s0_t5 as setFontMetrics
};
var _s0_t6;
export {
    _s0_t6 as copyFontMetrics
};
var _s0_t7;
export {
    _s0_t7 as compositeBaseAnchors
};
var _s0_t8;
export {
    _s0_t8 as DesignParameters
};
var _s0_t9;
export {
    _s0_t9 as GenDivFrame
};
var r1_calculateMetrics, r1_setFontMetrics, r1_copyFontMetrics, r1_compositeBaseAnchors, r1_DesignParameters, r1_GenDivFrame, _r1_t0, _r1_t1, _r1_t2, _r1_t3, _r1_t4, _r1_t5, _r1_t6, _r1_t7;
var _r1_t8 = _s0_t0;
var r1_Point = _r1_t8.Point;
var _r1_t9 = _s0_t1;
var r1_Transform = _r1_t9.Transform;
var _r1_t10 = _s0_t2;
var r1_Anchor = _r1_t10.Anchor;
var _r1_t11 = _s0_t3;
var r1_mix = _r1_t11.mix;
var r1_linreg = _r1_t11.linreg;
var r1_clamp = _r1_t11.clamp;
var r1_fallback = _r1_t11.fallback;
_s0_t4 = r1_calculateMetrics = function (r134_para) {
    var _r134_t0, _r134_t1;
    var r134_UPM = 1000;
    var r134_HalfUPM = r134_UPM / 2;
    var r134_Width = Math.round(r134_para.width);
    var r134_SB = r134_para.sb;
    var r134_CAP = r134_para.cap;
    var r134_XH = r134_para.xHeight;
    var r134_Ascender = r134_para.ascender;
    var r134_Descender = r1_fallback(r134_para.descender, r134_XH - r134_Ascender);
    var r134_Contrast = r1_fallback(r134_para.contrast, 1);
    var r134_SymbolMid = r134_para.symbolMid;
    var r134_ParenTop = r134_SymbolMid + r134_para.parenSize / 2;
    var r134_ParenBot = r134_SymbolMid - r134_para.parenSize / 2;
    var r134_OperTop = r134_SymbolMid + r134_para.operSize * (r134_Width - r134_SB * 2);
    var r134_OperBot = r134_SymbolMid - r134_para.operSize * (r134_Width - r134_SB * 2);
    var r134_TackTop = r134_SymbolMid + r134_para.tackSize * (r134_Width - r134_SB * 2);
    var r134_TackBot = r134_SymbolMid - r134_para.tackSize * (r134_Width - r134_SB * 2);
    var r134_PlusTop = r134_SymbolMid + r134_para.plusSize * (r134_Width - r134_SB * 2);
    var r134_PlusBot = r134_SymbolMid - r134_para.plusSize * (r134_Width - r134_SB * 2);
    var r134_PictTop = r134_SymbolMid + r134_para.pictSize * (r134_Width - r134_SB * 2);
    var r134_PictBot = r134_SymbolMid - r134_para.pictSize * (r134_Width - r134_SB * 2);
    var r134_BgOpTop = r134_SymbolMid + r134_para.bgopSize * (r134_Width - r134_SB * 2);
    var r134_BgOpBot = r134_SymbolMid - r134_para.bgopSize * (r134_Width - r134_SB * 2);
    var r134_Italify = function (r135_angle, r135_shift) {
        var _r135_t0, _r135_t1;
        var r135_slope = Math.tan(r1_fallback(r135_angle, r134_para.slopeAngle) / 180 * Math.PI);
        return new r1_Transform(1, r135_slope, 0, 1, r1_fallback(r135_shift, -r135_slope * r134_SymbolMid), 0);
    };
    var r134_Upright = function (r136_angle, r136_shift) {
        var _r136_t0, _r136_t1;
        return r134_Italify(r136_angle, r136_shift).inverse();
    };
    var r134_Scale = function (r137_sx, r137_sy) {
        var _r137_t0, _r137_t1;
        return new r1_Transform(r137_sx, 0, 0, r1_fallback(r137_sy, r137_sx), 0, 0);
    };
    var r134_Translate = function (r138_x, r138_y) {
        var _r138_t0, _r138_t1;
        return new r1_Transform(1, 0, 0, 1, r138_x, r138_y);
    };
    var r134_ApparentTranslate = function (r139_x, r139_y) {
        var _r139_t0, _r139_t1;
        return r134_Translate(r139_x + r134_TanSlope * r139_y, r139_y);
    };
    var r134_Rotate = function (r140_angle) {
        var _r140_t0, _r140_t1;
        return new r1_Transform(Math.cos(r140_angle), -Math.sin(r140_angle), Math.sin(r140_angle), Math.cos(r140_angle), 0, 0);
    };
    var r134_GlobalTransform = r134_Italify(r134_para.slopeAngle);
    var r134_TanSlope = r134_GlobalTransform.yx;
    var r134_SinSlope = Math.sin(r134_para.slopeAngle / 180 * Math.PI);
    var r134_CosSlope = Math.cos(r134_para.slopeAngle / 180 * Math.PI);
    var r134_HVContrast = r134_Contrast * r134_CosSlope + r134_SinSlope * r134_TanSlope;
    var r134_HSwToV = function (r141_sw) {
        var _r141_t0, _r141_t1;
        return r141_sw * r134_HVContrast;
    };
    var r134_Upward = new r1_Point(r1_Point.Type.Corner, -r134_HVContrast, 0);
    var r134_Downward = new r1_Point(r1_Point.Type.Corner, r134_HVContrast, 0);
    var r134_Rightward = new r1_Point(r1_Point.Type.Corner, 0, 1);
    var r134_Leftward = new r1_Point(r1_Point.Type.Corner, 0, -1);
    var r134_O = r134_para.overshoot;
    var r134_OX = r134_para.overshootx;
    var r134_OXHook = r134_para.oxhook;
    var r134_Hook = r134_para.hook;
    var r134_AHook = r134_para.ahook;
    var r134_SHook = r134_para.shook;
    var r134_RHook = r134_para.rhook;
    var r134_JHook = r134_para.jhook;
    var r134_FHook = r134_para.fhook;
    var r134_HookX = r134_para.hookx;
    var r134_TailX = r134_para.tailX;
    var r134_TailY = r134_para.tailY;
    var r134_ArchDepth = r134_para.archDepth;
    var r134_SmallArchDepth = r134_para.smallArchDepth;
    var r134_DarknessMockWidth = r134_Width < r134_HalfUPM ? r134_HalfUPM * Math.pow(r134_Width / r134_HalfUPM, 0.5) : r134_Width;
    var r134_DarknessMockWidth2 = r134_HalfUPM * Math.pow(r134_Width / r134_HalfUPM, 0.5);
    var r134_BaseFillRate = function (r142_con) {
        var _r142_t0, _r142_t1;
        return 1 / 2 + r134_para.stroke / (Math.max(r134_HalfUPM, r134_DarknessMockWidth2) - r134_SB * 2);
    };
    var r134_InverseCrowdedness = function (r143_con, r143_cow) {
        var _r143_t0, _r143_t1;
        return Math.tanh(r143_cow * Math.sqrt(r143_con)) / (r143_cow * Math.sqrt(r143_con));
    };
    var r134_advicestrokeImpl = function (r144_con, r144_cow, r144_div, r144_mul) {
        var _r144_t0, _r144_t1;
        var r144_gap = r134_DarknessMockWidth * r1_fallback(r144_div, 1) - r134_SB * 2;
        var r144_shrink = r134_BaseFillRate(r144_con) * r134_InverseCrowdedness(r144_con, r144_cow);
        return Math.min(r134_para.stroke, r1_fallback(r144_mul, 1) * r144_gap * r144_shrink);
    };
    var r134_AdviceStroke = function (r145_cow, r145_div, r145_mul) {
        var _r145_t0, _r145_t1;
        return r134_advicestrokeImpl(r134_HVContrast, r145_cow, r145_div, r145_mul);
    };
    var r134_AdviceStroke2 = function (r146_cowX, r146_cowY, r146_refH, r146_div) {
        var _r146_t0, _r146_t1;
        return Math.min(r134_advicestrokeImpl(r134_HVContrast, r146_cowX, r146_div), r134_advicestrokeImpl(1, r146_cowY, r146_refH / r134_DarknessMockWidth2));
    };
    var r134_Stroke = r134_AdviceStroke(2);
    var r134_DotSize = r1_fallback(r134_para.dotSize, r134_Stroke);
    var r134_PeriodSize = r1_fallback(r134_para.periodSize, r134_DotSize);
    var r134_HBarPos = r1_DesignParameters.hBarPos - 0.09 * r134_Stroke / r134_CAP;
    var r134_OverlayPos = r1_DesignParameters.overlayPos;
    var r134_Jut = r134_para.jut;
    var r134_LongJut = r134_para.longjut;
    var r134_VJut = r134_para.vjut;
    var r134_MidJutSide = Math.max(r134_Jut, r1_mix(0.5 * r134_Stroke * r134_HVContrast, r134_LongJut, 0.5));
    var r134_MidJutCenter = Math.max(r134_Jut, r1_mix(0.5 * r134_Stroke * r134_HVContrast, r134_LongJut, 0.6));
    var r134_AccentStackOffset = r134_para.accentStackOffset;
    var r134_AccentWidth = r134_para.accentWidth;
    var r134_AccentClearance = r134_para.accentClearance;
    var r134_AccentHeight = r134_para.accentHeight;
    var r134_CThin = r1_fallback(r134_para.cthin, 0.75);
    var r134_CThinB = r1_fallback(r134_para.cthinb, 0.5);
    var r134_SLAB = r134_para.slab;
    var r134_TailAdjX = r134_Width * 0.2;
    var r134_TailAdjY = r134_XH * 0.25;
    var r134_IBalance = function (r147_df) {
        var _r147_t0, _r147_t1;
        return r147_df.div * r147_df.div * r1_fallback(r134_para.ibalance, r134_LongJut * 0.04);
    };
    var r134_IBalance2 = function (r148_df) {
        var _r148_t0, _r148_t1;
        return r148_df.div * r1_fallback(r134_para.ibalance2, r134_LongJut * 0.14);
    };
    var r134_JBalance = r1_fallback(r134_para.jbalance, 0);
    var r134_JBalance2 = r1_fallback(r134_para.jbalance2, r134_Stroke * 0.25 + r134_LongJut * 0.04);
    var r134_TBalance = r1_fallback(r134_para.tbalance, r134_JBalance);
    var r134_TBalance2 = r1_fallback(r134_para.tbalance2, r134_TBalance);
    var r134_RBalance = r1_fallback(r134_para.rbalance, r134_JBalance * 0.3);
    var r134_RBalance2 = r1_fallback(r134_para.rbalance2, 0);
    var r134_FBalance = r1_fallback(r134_para.fbalance, 0);
    var r134_OneBalance = r1_fallback(r134_para.onebalance, 0);
    var r134_WideWidth0 = r134_para.isQuasiProportional ? r134_UPM : r134_Width * 2;
    var r134_WideWidth1 = r134_para.spacing >= 1 ? r134_WideWidth0 : r134_Width;
    var r134_WideWidth2 = r134_para.spacing >= 2 ? r134_WideWidth0 : r134_Width;
    var r134_WideWidth3 = r134_para.spacing >= 3 ? r134_WideWidth0 : r134_Width;
    var r134_WideWidth4 = r134_para.spacing >= 4 ? r134_WideWidth0 : r134_Width;
    var r134_NarrowUnicodeT = function (r149_wd) {
        var _r149_t0, _r149_t1;
        return function (r150_u) {
            var _r150_t0, _r150_t1;
            return r149_wd === r134_Width ? r150_u : null;
        };
    };
    var r134_WideUnicodeT = function (r151_wd) {
        var _r151_t0, _r151_t1;
        return function (r152_u) {
            var _r152_t0, _r152_t1;
            return r151_wd !== r134_Width ? r152_u : null;
        };
    };
    var r134_EssUpper = r134_Stroke * r1_fallback(r134_para.essRatioUpper, r134_para.essRatio, r134_Contrast);
    var r134_EssLower = r134_Stroke * r1_fallback(r134_para.essRatioLower, r134_para.essRatio, r134_Contrast);
    var r134_EssQuestion = r134_Stroke * r1_fallback(r134_para.essRatioQuestion, r134_para.essRatio, r134_Contrast);
    var r134_HalfStroke = r134_Stroke / 2;
    var r134_RightSB = r134_Width - r134_SB;
    var r134_Middle = r134_Width / 2;
    var r134_DotRadius = r134_DotSize / 2;
    var r134_PeriodRadius = r134_PeriodSize / 2;
    var r134_SideJut = r134_Jut - r134_HalfStroke * r134_HVContrast;
    var r134_VJutStroke = r134_AdviceStroke(3.5);
    var r134_StrokeWidthBlend = function (r153_min, r153_max, r153_sw) {
        var _r153_t0, _r153_t1;
        return r1_linreg(r134_para.canonicalStrokeWidthMin, r153_min, r134_para.canonicalStrokeWidthMax, r153_max, r1_fallback(r153_sw, r134_Stroke));
    };
    var r134_SmoothAdjust = r134_StrokeWidthBlend(80, 144);
    var r134_ArchDepthAOf = function (r154_archDepth, r154_width) {
        var _r154_t0, _r154_t1;
        return r154_archDepth - r134_TanSlope * r134_SmoothAdjust / r134_Width * r154_width;
    };
    var r134_ArchDepthBOf = function (r155_archDepth, r155_width) {
        var _r155_t0, _r155_t1;
        return r155_archDepth + r134_TanSlope * r134_SmoothAdjust / r134_Width * r155_width;
    };
    var r134_YSmoothMidR = function (r156_top, r156_bot, r156__ada, r156__adb) {
        var _r156_t0, _r156_t1;
        var r156_ada = r1_fallback(r156__ada, r134_ArchDepthA);
        var r156_adb = r1_fallback(r156__adb, r134_ArchDepthB);
        var r156_delta = (r156_adb - r156_ada) / 2;
        var r156_smOfSma = r156_ada + r156_delta;
        var r156_smOfSmb = r156_adb - r156_delta;
        var r156_yNotAdjusted = r1_mix(r156_top, r156_bot, r156_smOfSmb / (r156_smOfSma + r156_smOfSmb));
        return r156_yNotAdjusted - r156_delta * Math.min(1, (r156_top - r156_bot) / (r156_ada + r156_adb));
    };
    var r134_YSmoothMidL = function (r157_top, r157_bot, r157__ada, r157__adb) {
        var _r157_t0, _r157_t1;
        var r157_ada = r1_fallback(r157__ada, r134_ArchDepthA);
        var r157_adb = r1_fallback(r157__adb, r134_ArchDepthB);
        var r157_delta = (r157_adb - r157_ada) / 2;
        var r157_smOfSma = r157_ada + r157_delta;
        var r157_smOfSmb = r157_adb - r157_delta;
        var r157_yNotAdjusted = r1_mix(r157_top, r157_bot, r157_smOfSma / (r157_smOfSma + r157_smOfSmb));
        return r157_yNotAdjusted + r157_delta * Math.min(1, (r157_top - r157_bot) / (r157_ada + r157_adb));
    };
    var r134_ArchDepthA = r134_ArchDepth - r134_TanSlope * r134_SmoothAdjust;
    var r134_ArchDepthB = r134_ArchDepth + r134_TanSlope * r134_SmoothAdjust;
    var r134_SmallArchDepthA = r134_SmallArchDepth - r134_TanSlope * r134_SmoothAdjust;
    var r134_SmallArchDepthB = r134_SmallArchDepth + r134_TanSlope * r134_SmoothAdjust;
    var r134_CorrectionOMidX = r134_TanSlope * 0.9 * r134_StrokeWidthBlend(1.3, 0.9);
    var r134_CorrectionOMidS = r134_Stroke * r134_CorrectionOMidX;
    var r134_ArchXAdjust = {
        'top': function (r158_x, r158_sw) {
            var _r158_t0, _r158_t1;
            return r158_x - r134_CorrectionOMidX * r1_fallback(r158_sw, r134_Stroke);
        },
        'bottom': function (r159_x, r159_sw) {
            var _r159_t0, _r159_t1;
            return r159_x + r134_CorrectionOMidX * r1_fallback(r159_sw, r134_Stroke);
        },
        'bot': function (r160_x, r160_sw) {
            var _r160_t0, _r160_t1;
            return r160_x + r134_CorrectionOMidX * r1_fallback(r160_sw, r134_Stroke);
        }
    };
    var r134_OverlayStroke = r134_AdviceStroke(3.75);
    var r134_OperatorStroke = r134_AdviceStroke(2.75);
    var r134_GeometryStroke = r134_AdviceStroke(4);
    var r134_ShoulderFine = Math.min(r134_Stroke * r134_para.shoulderFineMin, r134_AdviceStroke(16));
    var r134__SuperXY = function (r161_x, r161_superness) {
        var _r161_t0, _r161_t1;
        return Math.pow(1 - Math.pow(r161_x, r1_fallback(r161_superness, r1_DesignParameters.superness)), 1 / r1_fallback(r161_superness, r1_DesignParameters.superness));
    };
    var r134_AdviceGlottalStopArchDepth = function (r162_y, r162_sign) {
        var _r162_t0, _r162_t1;
        return (r162_y - r134_Stroke) * 0.24 + r134_Stroke * 0.625 + r162_sign * r134_TanSlope * r134_SmoothAdjust;
    };
    var r134_shoulderMidSkew = function (r163__fine, r163__stroke) {
        var _r163_t0, _r163_t1;
        var r163_stroke = r1_fallback(r163__stroke, r134_Stroke);
        var r163_fine = r1_fallback(r163__fine, r134_ShoulderFine);
        return 0.5 * r134_Contrast * (r163_stroke - r163_fine) / r163_stroke;
    };
    return {
        'DesignParameters': r1_DesignParameters,
        'UPM': r134_UPM,
        'HalfUPM': r134_HalfUPM,
        'Width': r134_Width,
        'SB': r134_SB,
        'CAP': r134_CAP,
        'XH': r134_XH,
        'Ascender': r134_Ascender,
        'Descender': r134_Descender,
        'Contrast': r134_Contrast,
        'SymbolMid': r134_SymbolMid,
        'ParenTop': r134_ParenTop,
        'ParenBot': r134_ParenBot,
        'OperTop': r134_OperTop,
        'OperBot': r134_OperBot,
        'TackTop': r134_TackTop,
        'TackBot': r134_TackBot,
        'PlusTop': r134_PlusTop,
        'PlusBot': r134_PlusBot,
        'PictTop': r134_PictTop,
        'PictBot': r134_PictBot,
        'BgOpTop': r134_BgOpTop,
        'BgOpBot': r134_BgOpBot,
        'Italify': r134_Italify,
        'Upright': r134_Upright,
        'Scale': r134_Scale,
        'Translate': r134_Translate,
        'ApparentTranslate': r134_ApparentTranslate,
        'Rotate': r134_Rotate,
        'GlobalTransform': r134_GlobalTransform,
        'TanSlope': r134_TanSlope,
        'HVContrast': r134_HVContrast,
        'Upward': r134_Upward,
        'Downward': r134_Downward,
        'Rightward': r134_Rightward,
        'Leftward': r134_Leftward,
        'O': r134_O,
        'OX': r134_OX,
        'OXHook': r134_OXHook,
        'Hook': r134_Hook,
        'AHook': r134_AHook,
        'SHook': r134_SHook,
        'RHook': r134_RHook,
        'JHook': r134_JHook,
        'FHook': r134_FHook,
        'HookX': r134_HookX,
        'TailX': r134_TailX,
        'TailY': r134_TailY,
        'ArchDepth': r134_ArchDepth,
        'SmallArchDepth': r134_SmallArchDepth,
        'Stroke': r134_Stroke,
        'DotSize': r134_DotSize,
        'PeriodSize': r134_PeriodSize,
        'HBarPos': r134_HBarPos,
        'OverlayPos': r134_OverlayPos,
        'LongJut': r134_LongJut,
        'Jut': r134_Jut,
        'VJut': r134_VJut,
        'VJutStroke': r134_VJutStroke,
        'AccentStackOffset': r134_AccentStackOffset,
        'AccentWidth': r134_AccentWidth,
        'AccentClearance': r134_AccentClearance,
        'AccentHeight': r134_AccentHeight,
        'CThin': r134_CThin,
        'CThinB': r134_CThinB,
        'SLAB': r134_SLAB,
        'TailAdjX': r134_TailAdjX,
        'TailAdjY': r134_TailAdjY,
        'IBalance': r134_IBalance,
        'IBalance2': r134_IBalance2,
        'JBalance': r134_JBalance,
        'JBalance2': r134_JBalance2,
        'TBalance': r134_TBalance,
        'TBalance2': r134_TBalance2,
        'RBalance': r134_RBalance,
        'RBalance2': r134_RBalance2,
        'FBalance': r134_FBalance,
        'OneBalance': r134_OneBalance,
        'WideWidth0': r134_WideWidth0,
        'WideWidth1': r134_WideWidth1,
        'WideWidth2': r134_WideWidth2,
        'WideWidth3': r134_WideWidth3,
        'WideWidth4': r134_WideWidth4,
        'EssUpper': r134_EssUpper,
        'EssLower': r134_EssLower,
        'EssQuestion': r134_EssQuestion,
        'HalfStroke': r134_HalfStroke,
        'RightSB': r134_RightSB,
        'Middle': r134_Middle,
        'DotRadius': r134_DotRadius,
        'PeriodRadius': r134_PeriodRadius,
        'SideJut': r134_SideJut,
        'ArchDepthA': r134_ArchDepthA,
        'ArchDepthB': r134_ArchDepthB,
        'SmallArchDepthA': r134_SmallArchDepthA,
        'SmallArchDepthB': r134_SmallArchDepthB,
        'CorrectionOMidX': r134_CorrectionOMidX,
        'CorrectionOMidS': r134_CorrectionOMidS,
        'ArchXAdjust': r134_ArchXAdjust,
        'compositeBaseAnchors': r1_compositeBaseAnchors,
        'AdviceStroke': r134_AdviceStroke,
        'AdviceStroke2': r134_AdviceStroke2,
        'OverlayStroke': r134_OverlayStroke,
        'OperatorStroke': r134_OperatorStroke,
        'GeometryStroke': r134_GeometryStroke,
        'ShoulderFine': r134_ShoulderFine,
        '_SuperXY': r134__SuperXY,
        'AdviceGlottalStopArchDepth': r134_AdviceGlottalStopArchDepth,
        'shoulderMidSkew': r134_shoulderMidSkew,
        'StrokeWidthBlend': r134_StrokeWidthBlend,
        'ArchDepthAOf': r134_ArchDepthAOf,
        'ArchDepthBOf': r134_ArchDepthBOf,
        'SmoothAdjust': r134_SmoothAdjust,
        'MidJutSide': r134_MidJutSide,
        'MidJutCenter': r134_MidJutCenter,
        'YSmoothMidR': r134_YSmoothMidR,
        'YSmoothMidL': r134_YSmoothMidL,
        'HSwToV': r134_HSwToV,
        'NarrowUnicodeT': r134_NarrowUnicodeT,
        'WideUnicodeT': r134_WideUnicodeT
    };
};
_s0_t5 = r1_setFontMetrics = function (r165_para, r165_metrics, r165_fm) {
    var _r165_t1, _r165_t2;
    var _r165_t0 = r165_metrics;
    var r165_CAP = _r165_t0.CAP;
    var r165_Descender = _r165_t0.Descender;
    var r165_XH = _r165_t0.XH;
    var r165_Width = _r165_t0.Width;
    var r165_SymbolMid = _r165_t0.SymbolMid;
    var r165_leading = Math.round(r165_para.leading);
    var r165_asc = Math.round(r165_SymbolMid + r165_leading / 2);
    var r165_desc = Math.round(r165_SymbolMid - r165_leading / 2);
    var r165_descenderPad = Math.round(r1_fallback(r165_para.descenderPad, 0));
    var r165_winMetricAscenderPad = Math.round(r1_fallback(r165_para.winMetricAscenderPad, 0));
    var r165_winMetricDescenderPad = Math.round(r1_fallback(r165_para.winMetricDescenderPad, 0));
    r165_fm.os2.xAvgCharWidth = r165_Width;
    r165_fm.head.unitsPerEm = 1000;
    r165_fm.hhea.ascender = r165_asc;
    r165_fm.os2.usWinAscent = r165_asc + r165_winMetricAscenderPad;
    r165_fm.os2.sTypoAscender = r165_asc;
    r165_fm.hhea.descender = r165_Descender - r165_descenderPad;
    r165_fm.os2.usWinDescent = Math.abs(r165_desc) + r165_descenderPad + r165_winMetricDescenderPad;
    r165_fm.os2.sTypoDescender = r165_desc - r165_descenderPad;
    r165_fm.hhea.lineGap = r165_leading - r165_asc + r165_Descender;
    r165_fm.os2.sTypoLineGap = r165_leading - r165_asc + r165_desc;
    r165_fm.os2.sxHeight = r165_XH;
    r165_fm.os2.sCapHeight = r165_CAP;
    var r165_slope = Math.tan(r165_para.slopeAngle);
    r165_fm.post.italicAngle = Math.round(0 - r165_para.slopeAngle);
    r165_fm.hhea.caretSlopeRise = r165_para.slopeAngle ? 1000 : 1;
    r165_fm.hhea.caretSlopeRun = r165_para.slopeAngle ? -r165_slope * 1000 : 0;
    r165_fm.hhea.caretOffset = r165_para.slopeAngle ? -r165_slope * r165_para.symbolMid : 0;
    r165_fm.os2.yStrikeoutPosition = r165_para['os2.yStrikeoutPosition'];
    r165_fm.os2.yStrikeoutSize = r165_para['os2.yStrikeoutSize'];
    r165_fm.os2.ySubscriptXOffset = r165_para['os2.ySubscriptXOffset'];
    r165_fm.os2.ySubscriptXSize = r165_para['os2.ySubscriptXSize'];
    r165_fm.os2.ySubscriptYOffset = r165_para['os2.ySubscriptYOffset'];
    r165_fm.os2.ySubscriptYSize = r165_para['os2.ySubscriptYSize'];
    r165_fm.os2.ySuperscriptXOffset = r165_para['os2.ySuperscriptXOffset'];
    r165_fm.os2.ySuperscriptXSize = r165_para['os2.ySuperscriptXSize'];
    r165_fm.os2.ySuperscriptYOffset = r165_para['os2.ySuperscriptYOffset'];
    r165_fm.os2.ySuperscriptYSize = r165_para['os2.ySuperscriptYSize'];
    r165_fm.post.underlinePosition = r165_para['post.underlinePosition'];
    return r165_fm.post.underlineThickness = r165_para['post.underlineThickness'];
};
_s0_t6 = r1_copyFontMetrics = function (r167_fm1, r167_fm2) {
    var _r167_t0, _r167_t1;
    r167_fm2.os2.xAvgCharWidth = r167_fm1.os2.xAvgCharWidth;
    r167_fm2.head.unitsPerEm = r167_fm1.head.unitsPerEm;
    r167_fm2.hhea.ascender = r167_fm1.hhea.ascender;
    r167_fm2.os2.usWinAscent = r167_fm1.os2.usWinAscent;
    r167_fm2.os2.sTypoAscender = r167_fm1.os2.sTypoAscender;
    r167_fm2.hhea.descender = r167_fm1.hhea.descender;
    r167_fm2.os2.usWinDescent = r167_fm1.os2.usWinDescent;
    r167_fm2.os2.sTypoDescender = r167_fm1.os2.sTypoDescender;
    r167_fm2.hhea.lineGap = r167_fm1.hhea.lineGap;
    r167_fm2.os2.sTypoLineGap = r167_fm1.os2.sTypoLineGap;
    r167_fm2.os2.sxHeight = r167_fm1.os2.sxHeight;
    r167_fm2.os2.sCapHeight = r167_fm1.os2.sCapHeight;
    r167_fm2.post.italicAngle = r167_fm1.post.italicAngle;
    r167_fm2.hhea.caretSlopeRise = r167_fm1.hhea.caretSlopeRise;
    r167_fm2.hhea.caretSlopeRun = r167_fm1.hhea.caretSlopeRun;
    r167_fm2.hhea.caretOffset = r167_fm1.hhea.caretOffset;
    r167_fm2.os2.yStrikeoutPosition = r167_fm1.os2.yStrikeoutPosition;
    r167_fm2.os2.yStrikeoutSize = r167_fm1.os2.yStrikeoutSize;
    r167_fm2.os2.ySubscriptXOffset = r167_fm1.os2.ySubscriptXOffset;
    r167_fm2.os2.ySubscriptXSize = r167_fm1.os2.ySubscriptXSize;
    r167_fm2.os2.ySubscriptYOffset = r167_fm1.os2.ySubscriptYOffset;
    r167_fm2.os2.ySubscriptYSize = r167_fm1.os2.ySubscriptYSize;
    r167_fm2.os2.ySuperscriptXOffset = r167_fm1.os2.ySuperscriptXOffset;
    r167_fm2.os2.ySuperscriptXSize = r167_fm1.os2.ySuperscriptXSize;
    r167_fm2.os2.ySuperscriptYOffset = r167_fm1.os2.ySuperscriptYOffset;
    r167_fm2.os2.ySuperscriptYSize = r167_fm1.os2.ySuperscriptYSize;
    r167_fm2.post.underlinePosition = r167_fm1.post.underlinePosition;
    return r167_fm2.post.underlineThickness = r167_fm1.post.underlineThickness;
};
var r1_CMarkSet = function (r169_Super) {
    var _r169_t0, _r169_t1;
    var r169_Constructor = function () {
        var _r170_t0, _r170_t1;
        return void 0;
    };
    var r169_Type = function () {
        var _r171_t0 = this;
        var _r171_t1 = arguments;
        r169_Constructor.apply(_r171_t0, _r171_t1);
        return void 0;
    };
    var r169_Symbol = Symbol;
    (function () {
        var r173_protectedTerms, _r173_t0, _r173_t1;
        r169_Type.protectedTerms = r173_protectedTerms = Object.create(r169_Super.protectedTerms || null);
        r169_Constructor = function (r201_markAnchors, r201_baseAnchors) {
            var _r201_t1;
            var _r201_t0 = this;
            _r201_t0.markAnchors = r201_markAnchors;
            _r201_t0.baseAnchors = r201_baseAnchors;
            return void 0;
        };
        r169_Type.prototype.applyToGlyph = function (r207_g) {
            var _r207_t1;
            var _r207_t0 = this;
            return r207_g.copyAnchors(_r207_t0);
        };
        return void 0;
    }.call(r169_Type.prototype));
    return r169_Type;
}(Object);
_s0_t7 = r1_compositeBaseAnchors = function () {
    var r214_a, r214_k, _r214_t3, _r214_t4, _r214_t5, _r214_t6;
    var _r214_t7 = arguments;
    var r214_baseAnchorSink = {};
    var _r214_t0 = _r214_t7;
    var _r214_t1 = _r214_t0.length;
    var _r214_t2 = 0;
    while (_r214_t2 < _r214_t1) {
        r214_a = _r214_t0[_r214_t2];
        _r214_t3 = Object.keys(r214_a.baseAnchors);
        _r214_t4 = _r214_t3.length;
        _r214_t5 = 0;
        while (_r214_t5 < _r214_t4) {
            r214_k = _r214_t3[_r214_t5];
            r214_baseAnchorSink[r214_k] = new r1_Anchor(r214_a.baseAnchors[r214_k].x, r214_a.baseAnchors[r214_k].y, r214_a.baseAnchors[r214_k].type, r214_a.baseAnchors[r214_k].mbx, r214_a.baseAnchors[r214_k].mby);
            _r214_t5 = _r214_t5 + 1;
        }
        _r214_t2 = _r214_t2 + 1;
    }
    return new r1_CMarkSet(null, r214_baseAnchorSink);
};
var r1_MarksetDiv = function (r217_p, r217_sbMul, r217_me) {
    var _r217_t0, _r217_t1;
    var r217_width = r217_p * r217_me.Width;
    var r217_middle = r217_p * r217_me.Middle;
    var r217_leftSB = r217_me.SB;
    var r217_rightSB = r217_me.Width * r217_p - r217_me.SB;
    var r217_ta = function (r218_anchor) {
        var _r218_t0, _r218_t1;
        return new r1_Anchor(r218_anchor.x * r217_me.GlobalTransform.xx + r218_anchor.y * r217_me.TanSlope + r217_me.GlobalTransform.x, r218_anchor.x * r217_me.GlobalTransform.xy + r218_anchor.y * r217_me.GlobalTransform.yy + r217_me.GlobalTransform.y);
    };
    var r217_MarkAbove = function (r219_zone) {
        var _r219_t0, _r219_t1;
        return { 'baseAnchors': { 'above': r217_ta(new r1_Anchor(r217_middle, r219_zone.top)) } };
    };
    var r217_MarkBelow = function (r220_zone) {
        var _r220_t0, _r220_t1;
        return { 'baseAnchors': { 'below': r217_ta(new r1_Anchor(r217_middle, r220_zone.bot)) } };
    };
    var r217_MarkTopLeft = function (r221_zone) {
        var _r221_t0, _r221_t1;
        return { 'baseAnchors': { 'topLeft': r217_ta(new r1_Anchor(r217_leftSB, r221_zone.top)) } };
    };
    var r217_MarkTopRight = function (r222_zone) {
        var _r222_t0, _r222_t1;
        return { 'baseAnchors': { 'topRight': r217_ta(new r1_Anchor(r217_rightSB, r222_zone.top)) } };
    };
    var r217_MarkBottomLeft = function (r223_zone) {
        var _r223_t0, _r223_t1;
        return { 'baseAnchors': { 'bottomLeft': r217_ta(new r1_Anchor(r217_leftSB, r223_zone.bot)) } };
    };
    var r217_MarkBottomRight = function (r224_zone) {
        var _r224_t0, _r224_t1;
        return { 'baseAnchors': { 'bottomRight': r217_ta(new r1_Anchor(r217_rightSB, r224_zone.bot)) } };
    };
    var r217_markTieAbove = { 'baseAnchors': { 'tieAbove': r217_ta(new r1_Anchor(r217_width, r217_me.XH + r217_me.AccentStackOffset * 1.38)) } };
    var r217_markTieBelow = { 'baseAnchors': { 'tieBelow': r217_ta(new r1_Anchor(r217_width, r217_me.Descender)) } };
    var r217_buildStandardMarkSet = function (r225_zone) {
        var _r225_t0, _r225_t1;
        return function () {
            var _r226_t1;
            var _r226_t0 = this;
            if (_r226_t0.baseAnchors)
                throw new Error('A mark set is now a function. Please call it before inclusion');
            var r226_a = r1_compositeBaseAnchors(r217_MarkAbove(r225_zone), r217_MarkBelow(r225_zone), r217_MarkTopLeft(r225_zone), r217_MarkTopRight(r225_zone), r217_MarkBottomLeft(r225_zone), r217_MarkBottomRight(r225_zone), r217_markTieAbove, r217_markTieBelow);
            r226_a.baseAnchors.overlay = new r1_Anchor(r1_mix(r226_a.baseAnchors.below.x, r226_a.baseAnchors.above.x, r217_me.OverlayPos), r1_mix(r226_a.baseAnchors.below.y, r226_a.baseAnchors.above.y, r217_me.OverlayPos));
            r226_a.baseAnchors.slash = new r1_Anchor(r1_mix(r226_a.baseAnchors.below.x, r226_a.baseAnchors.above.x, 0.5), r1_mix(r226_a.baseAnchors.below.y, r226_a.baseAnchors.above.y, 0.5));
            r226_a.baseAnchors.strike = new r1_Anchor(r1_mix(r226_a.baseAnchors.below.x, r226_a.baseAnchors.above.x, 0.5), r1_mix(r226_a.baseAnchors.below.y, r226_a.baseAnchors.above.y, 0.5));
            return r226_a;
        };
    };
    return {
        'OfZone': r217_buildStandardMarkSet,
        'capital': r217_buildStandardMarkSet({
            'top': r217_me.CAP,
            'bot': 0
        }),
        'b': r217_buildStandardMarkSet({
            'top': r217_me.Ascender,
            'bot': 0
        }),
        'e': r217_buildStandardMarkSet({
            'top': r217_me.XH,
            'bot': 0
        }),
        'p': r217_buildStandardMarkSet({
            'top': r217_me.XH,
            'bot': r217_me.Descender
        }),
        'oper': r217_buildStandardMarkSet({
            'top': r217_me.OperTop,
            'bot': r217_me.OperBot
        }),
        'tack': r217_buildStandardMarkSet({
            'top': r217_me.TackTop,
            'bot': r217_me.TackBot
        }),
        'plus': r217_buildStandardMarkSet({
            'top': r217_me.PlusTop,
            'bot': r217_me.PlusBot
        }),
        'bp': r217_buildStandardMarkSet({
            'top': r217_me.Ascender,
            'bot': r217_me.Descender
        }),
        'capDesc': r217_buildStandardMarkSet({
            'top': r217_me.CAP,
            'bot': r217_me.Descender
        })
    };
};
_s0_t8 = r1_DesignParameters = {
    'straightVShapeSbShrink': 0.8,
    'straightSmallYShapeSbShrink': 0.8,
    'equal_wideness': 0.075,
    'logic_narrow_shrink': 0.75,
    'GeometricLargeX': function (r228_mw, r228_uw) {
        var _r228_t0, _r228_t1;
        return (r228_mw + r228_uw / 2) / r228_mw;
    },
    'geometric_tiny_x': 1 / 7,
    'geometric_very_small_x': 2.5 / 7,
    'geometric_slightly_small_x': 3.25 / 7,
    'geometric_small_x': 4 / 7,
    'geometric_medium_small_x': 4.75 / 7,
    'geometric_medium_x': 5.5 / 7,
    'arrow_size': 0.45,
    'parenOutside': 0.2,
    'parenOutsideSwAdj': 0.2,
    'parenInside': 0.9,
    'parenInsideSwAdj': 0.35,
    'parenCurliness': 0.7,
    'parenOvershoot': 0.0375,
    'bracketOutside': 0.2,
    'bracketOutsideSwAdj': 0.2,
    'bracketInside': 0.9,
    'braceOutside': 0.05,
    'braceInside': 0.9,
    'braceCurlyM1': 0.6,
    'braceCurlyM2': 0.45,
    'braceOvershoot': 0.02,
    'lllcrowdedness': 3 + 1 / 3,
    'hBarPos': 0.525,
    'eBarPos': 0.5,
    'fiveBarPos': 0.64,
    'overlayPos': 0.52,
    'fBarPosToXH': 0.875,
    'gBarPos': 0.42,
    'upperEBarPos': 0.52,
    'fbarStrokeAdj': 0.25,
    'superness': 2.275,
    'tightHookSuperness': 2.3,
    'serifShiftX': 0.6,
    'squareDotScalar': 0.95
};
_s0_t9 = r1_GenDivFrame = function (r230_metrics) {
    var _r230_t0, _r230_t1;
    var r230_CDivFrame = function (r232_Super) {
        var _r232_t0, _r232_t1;
        var r232_Constructor = function () {
            var _r233_t0, _r233_t1;
            return void 0;
        };
        var r232_Type = function () {
            var _r234_t0 = this;
            var _r234_t1 = arguments;
            r232_Constructor.apply(_r234_t0, _r234_t1);
            return void 0;
        };
        var r232_Symbol = Symbol;
        (function () {
            var r236_protectedTerms, _r236_t0, _r236_t1;
            r232_Type.protectedTerms = r236_protectedTerms = Object.create(r232_Super.protectedTerms || null);
            r232_Constructor = function (r264__div, r264__hPack, r264__sbMul, r264__mvs, r264__ox) {
                var _r264_t1;
                var _r264_t0 = this;
                var r264_ox = r1_fallback(r264__ox, 0);
                var r264_div = r1_fallback(r264__div, 1);
                var r264_hPack = Math.max(1, r1_fallback(r264__hPack, 0));
                var r264_mvs = r1_fallback(r264__mvs, r264__hPack ? r230_metrics.AdviceStroke(r264__hPack, r264_div) : r230_metrics.Stroke);
                var r264_sbMul = r1_fallback(r264__sbMul, Math.min(1, (r230_metrics.Width * r264_div - r264_hPack * r264_mvs) / (2 * r264_hPack * r230_metrics.SB)));
                _r264_t0.div = r264_div;
                _r264_t0.hPack = r264_hPack;
                _r264_t0.width = r230_metrics.Width * r264_div;
                _r264_t0.middle = r230_metrics.Middle * r264_div;
                _r264_t0.sb = r230_metrics.SB * r264_sbMul;
                _r264_t0.leftSB = r230_metrics.SB * r264_sbMul;
                _r264_t0.rightSB = r230_metrics.Width * r264_div - r230_metrics.SB * r264_sbMul;
                _r264_t0.mvs = r264_mvs;
                _r264_t0.markSet = r1_MarksetDiv(r264_div, r264_sbMul, r230_metrics);
                _r264_t0.ox = r264_ox;
                _r264_t0.widthNoOvershoot = _r264_t0.width - r264_ox;
                _r264_t0.divNoOvershoot = _r264_t0.widthNoOvershoot / r230_metrics.Width;
                return void 0;
            };
            r232_Type.prototype.archDepth = function (r270_d, r270__stroke) {
                var _r270_t1;
                var _r270_t0 = this;
                return Math.max(r270_d * _r270_t0.divNoOvershoot, 1.125 * r1_fallback(r270__stroke, _r270_t0.mvs));
            };
            r232_Type.prototype.archDepthA = function (r276_d, r276__stroke) {
                var _r276_t1;
                var _r276_t0 = this;
                return r230_metrics.ArchDepthAOf(_r276_t0.archDepth(r276_d, r276__stroke), _r276_t0.widthNoOvershoot);
            };
            r232_Type.prototype.archDepthB = function (r282_d, r282__stroke) {
                var _r282_t1;
                var _r282_t0 = this;
                return r230_metrics.ArchDepthBOf(_r282_t0.archDepth(r282_d, r282__stroke), _r282_t0.widthNoOvershoot);
            };
            r232_Type.prototype.slice = function (r288__divisions, r288__keeps, r288__o) {
                var _r288_t1;
                var _r288_t0 = this;
                var r288_o = r1_fallback(r288__o, 0);
                var r288_divisions = r1_fallback(r288__divisions, _r288_t0.hPack);
                var r288_keeps = r1_fallback(r288__keeps, 2);
                return _r288_t0.sliceFine(r288_divisions, r288_keeps, (r288_keeps - 1) / (r288_divisions - 1), r288_o);
            };
            r232_Type.prototype.sliceFine = function (r294_strokes, r294_keeps, r294_pGaps, r294__o) {
                var _r294_t1;
                var _r294_t0 = this;
                var r294_o = r1_fallback(r294__o, 0);
                var r294_oneStroke = r230_metrics.HVContrast * _r294_t0.mvs;
                var r294_totalGap = _r294_t0.rightSB - _r294_t0.leftSB - r294_strokes * r294_oneStroke - 2 * r294_o;
                var r294_subDfWidth = 2 * _r294_t0.leftSB + 2 * r294_o + r294_totalGap * r294_pGaps + r294_oneStroke * r294_keeps;
                var r294_subDfDiv = r294_subDfWidth / r230_metrics.Width;
                return new r230_CDivFrame(r294_subDfDiv, r294_keeps, _r294_t0.leftSB / r230_metrics.SB, _r294_t0.mvs, r294_o);
            };
            r232_Type.prototype.applyToGlyph = function (r300_g) {
                var _r300_t1;
                var _r300_t0 = this;
                r300_g.setWidth(_r300_t0.width);
                return _r300_t0;
            };
            return void 0;
        }.call(r232_Type.prototype));
        return r232_Type;
    }(Object);
    return function (r306__div, r306__hPack, r306__sbMul, r306__mvs, r306__ox) {
        var _r306_t0, _r306_t1;
        return new r230_CDivFrame(r306__div, r306__hPack, r306__sbMul, r306__mvs, r306__ox);
    };
};
