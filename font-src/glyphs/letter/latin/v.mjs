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
    r270_xn$Capture_Ext$2Lrc2b['$defineGlyphBlockImpl$'](r270_xn$Capture_Ext$2Lrc2b, 'Letter-Latin-V', function (r271_xn$Capture$2Lrc8, r271_xn$ExportCapture$2Lrc4b) {
        var r271_suffix, r271_Serifs, r271_fStraightBar, r271_pxBar, r271_fDoSerif, _r271_t10, _r271_t13, _r271_t14, _r271_t15, _r271_t16, _r271_tag17, _r271_t18, _r271_tag19;
        var _r271_t0 = r271_xn$Capture$2Lrc8;
        var r271_xn$createAndSaveGlyphImpl$2Lrc3c = _r271_t0['$createAndSaveGlyphImpl$'];
        var r271_xn$NamedParameterPair$2Lrc9b = _r271_t0['$NamedParameterPair$'];
        var r271_xn$assignUnicodeImpl$2Lrc8b = _r271_t0['$assignUnicodeImpl$'];
        var r271_xn$execState$2Lrc0b = _r271_t0['$execState$'];
        var r271_para = _r271_t0.para;
        var r271_MarkSet = _r271_t0.MarkSet;
        var r271_AS_BASE = _r271_t0.AS_BASE;
        var r271_ALSO_METRICS = _r271_t0.ALSO_METRICS;
        var r271_tagged = _r271_t0.tagged;
        var r271_DivFrame = _r271_t0.DivFrame;
        var _r271_t1 = r271_xn$Capture$2Lrc8.Metrics;
        var r271_DesignParameters = _r271_t1.DesignParameters;
        var r271_Width = _r271_t1.Width;
        var r271_SB = _r271_t1.SB;
        var r271_CAP = _r271_t1.CAP;
        var r271_XH = _r271_t1.XH;
        var r271_Ascender = _r271_t1.Ascender;
        var r271_Descender = _r271_t1.Descender;
        var r271_ApparentTranslate = _r271_t1.ApparentTranslate;
        var r271_TanSlope = _r271_t1.TanSlope;
        var r271_HVContrast = _r271_t1.HVContrast;
        var r271_Downward = _r271_t1.Downward;
        var r271_O = _r271_t1.O;
        var r271_OX = _r271_t1.OX;
        var r271_TailX = _r271_t1.TailX;
        var r271_TailY = _r271_t1.TailY;
        var r271_Stroke = _r271_t1.Stroke;
        var r271_CThin = _r271_t1.CThin;
        var r271_SLAB = _r271_t1.SLAB;
        var r271_HalfStroke = _r271_t1.HalfStroke;
        var r271_RightSB = _r271_t1.RightSB;
        var r271_Middle = _r271_t1.Middle;
        var r271_SideJut = _r271_t1.SideJut;
        var r271_CorrectionOMidX = _r271_t1.CorrectionOMidX;
        var r271_AdviceStroke = _r271_t1.AdviceStroke;
        var r271_StrokeWidthBlend = _r271_t1.StrokeWidthBlend;
        var r271_MidJutCenter = _r271_t1.MidJutCenter;
        var _r271_t2 = r271_xn$Capture$2Lrc8.SpiroFns;
        var r271_g4 = _r271_t2.g4;
        var r271_g2 = _r271_t2.g2;
        var r271_corner = _r271_t2.corner;
        var r271_flat = _r271_t2.flat;
        var r271_curl = _r271_t2.curl;
        var r271_straight = _r271_t2.straight;
        var r271_widths = _r271_t2.widths;
        var r271_heading = _r271_t2.heading;
        var r271_unimportant = _r271_t2.unimportant;
        var r271_quadControls = _r271_t2.quadControls;
        var r271_archv = _r271_t2.archv;
        var r271_arcvh = _r271_t2.arcvh;
        var r271_dispiro = _r271_t2.dispiro;
        var r271_xn$spirooutline$1aao = _r271_t2['spiro-outline'];
        var _r271_t3 = r271_xn$Capture$2Lrc8.BooleFns;
        var r271_union = _r271_t3.union;
        var r271_intersection = _r271_t3.intersection;
        var _r271_t4 = r271_xn$Capture$2Lrc8.CommonShapes.resolve();
        var r271_xn$noshape$3cah = _r271_t4['no-shape'];
        var r271_Rect = _r271_t4.Rect;
        var r271_OShape = _r271_t4.OShape;
        var r271_HSerif = _r271_t4.HSerif;
        var r271_HBar = _r271_t4.HBar;
        var r271_VBar = _r271_t4.VBar;
        var r271_FlipAround = _r271_t4.FlipAround;
        var r271_DiagCor = _r271_t4.DiagCor;
        var r271_WithTransform = _r271_t4.WithTransform;
        var r271_ExtLineCenter = _r271_t4.ExtLineCenter;
        var r271_DiagCorDs = _r271_t4.DiagCorDs;
        var _r271_t5 = r271_xn$Capture$2Lrc8['Common-Derivatives'].resolve();
        var r271_xn$selectvariant$7Hrq = _r271_t5['select-variant'];
        var r271_xn$referglyph$1aao = _r271_t5['refer-glyph'];
        var r271_alias = _r271_t5.alias;
        var r271_turned = _r271_t5.turned;
        var r271_xn$linkreducedvariant$5sIl8 = _r271_t5['link-reduced-variant'];
        r271_xn$ExportCapture$2Lrc4b(function () {
            var _r275_t0, _r275_t1;
            return {
                'VShape': r271_VShape,
                'VShapeOutline': r271_VShapeOutline
            };
        });
        var _r271_t6 = r271_xn$Capture$2Lrc8['Letter-Shared-Shapes'].resolve();
        var r271_DiagonalTailInnerRadius = _r271_t6.DiagonalTailInnerRadius;
        var r271_SerifFrame = _r271_t6.SerifFrame;
        var r271_PalatalHook = _r271_t6.PalatalHook;
        var _r271_t7 = r271_xn$Capture$2Lrc8['Letter-Blackboard'].resolve();
        var r271_BBS = _r271_t7.BBS;
        var r271_BBD = _r271_t7.BBD;
        var r271_VCornerHalfWidth = r271_HalfStroke * r271_HVContrast * 1.15;
        var r271_VCurviness = 0.3;
        var r271_VShapeFine = Math.max(r271_Stroke * (r271_SLAB ? r271_para.vtipfineSlab : r271_para.vtipfine), r271_VCornerHalfWidth * 1.2);
        var r271_VShapeFineStraight = r271_Stroke * r271_CThin * 1.15;
        var r271_pInktrap = 2 / 3;
        var r271_VShapeMiddleWidth = Math.min(r1_mix(r271_Stroke, r271_VShapeFineStraight, r271_pInktrap), r271_AdviceStroke(3));
        var r271_StraightSbShrink = r1_mix(1, r271_DesignParameters.straightVShapeSbShrink * r271_StrokeWidthBlend(1, 0.75), r271_SLAB ? 0.75 : 1);
        var r271_VShapeTopFlat = function (r278_top) {
            var _r278_t0, _r278_t1;
            return r271_SLAB ? Math.min(r278_top - r271_Stroke, r278_top * 0.9) : r278_top * 0.9;
        };
        var r271_VShapeOutline = function () {
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
                if (_r279_t2 && _r279_t2 instanceof r271_xn$NamedParameterPair$2Lrc9b && _r279_t2.left === 'df')
                    r279_df = _r279_t2.right;
                if (_r279_t2 && _r279_t2 instanceof r271_xn$NamedParameterPair$2Lrc9b && _r279_t2.left === 'fBarStraight')
                    r279_fBarStraight = _r279_t2.right;
                if (_r279_t2 && _r279_t2 instanceof r271_xn$NamedParameterPair$2Lrc9b && _r279_t2.left === 'top')
                    r279_top = _r279_t2.right;
                if (_r279_t2 && _r279_t2 instanceof r271_xn$NamedParameterPair$2Lrc9b && _r279_t2.left === 'sw')
                    r279_sw = _r279_t2.right;
                _r279_t5 = _r279_t5 + 1;
            }
            var r279_df = r1_fallback(r279_df, _r279_t1[0]);
            var r279_fBarStraight = r1_fallback(r279_fBarStraight, _r279_t1[1]);
            var r279_top = r1_fallback(r279_top, _r279_t1[2]);
            var r279_sw = r1_fallback(r279_sw, _r279_t1[3], r271_Stroke);
            return function () {
                var _r285_t1, _r285_t2, _r285_tag3, _r285_t4, _r285_tag5;
                var _r285_t0 = this;
                var r285_currentGlyph = _r285_t0;
                var r285_cornerHW = r271_VCornerHalfWidth * r279_sw / r271_Stroke;
                var r285_dgCor = r271_DiagCor(r279_top, r271_Width / 2, 0, r279_sw * 2);
                var r285_clearance = 0 - r271_OX;
                var r285_sbScale = r279_fBarStraight ? r271_StraightSbShrink : 1;
                var r285_vxStartL = r279_df.leftSB * r285_sbScale + r285_clearance;
                var r285_vxEndL = r279_df.middle - r285_cornerHW + r285_clearance;
                var r285_vxStartR = r279_df.width - r279_df.leftSB * r285_sbScale - r285_clearance;
                var r285_vxEndR = r279_df.middle + r285_cornerHW - r285_clearance;
                if (r279_fBarStraight)
                    (function () {
                        return r285_currentGlyph.include(r271_xn$spirooutline$1aao(r271_flat(r1_mix(r285_vxStartL, r285_vxEndL, 0), r1_mix(r279_top, 0, 0)), r271_curl(r1_mix(r285_vxStartL, r285_vxEndL, r271_pInktrap), r1_mix(r279_top, 0, r271_pInktrap)), r271_corner(r1_mix(r285_vxStartL, r285_vxEndL, 1), r1_mix(r279_top, 0, 1)), r271_corner(r1_mix(r285_vxStartR, r285_vxEndR, 1), r1_mix(r279_top, 0, 1)), r271_flat(r1_mix(r285_vxStartR, r285_vxEndR, r271_pInktrap), r1_mix(r279_top, 0, r271_pInktrap)), r271_curl(r1_mix(r285_vxStartR, r285_vxEndR, 0), r1_mix(r279_top, 0, 0))));
                    }());
                else
                    (function () {
                        return r285_currentGlyph.include(r271_xn$spirooutline$1aao(r271_flat(r285_vxStartL, r279_top), r271_curl(r285_vxStartL, r271_VShapeTopFlat(r279_top)), r271_quadControls(0, r271_VCurviness, 9, r271_unimportant), r271_corner(r285_vxEndL, 0), r271_corner(r285_vxEndR, 0), r271_quadControls(1, 1 - r271_VCurviness, 9, r271_unimportant), r271_flat(r285_vxStartR, r271_VShapeTopFlat(r279_top)), r271_curl(r285_vxStartR, r279_top)));
                    }());
                return void 0;
            };
        };
        var r271_VBottomCapShape = function (r292_df, r292_fBarStraight, r292_sw) {
            var _r292_t0, _r292_t1;
            var r292_cornerHW = r271_VCornerHalfWidth * r292_sw / r271_Stroke;
            return r271_xn$spirooutline$1aao(r271_corner(r292_df.middle + r292_cornerHW, 0), r271_corner(r292_df.middle - r292_cornerHW, 0), r271_corner(r292_df.middle, Math.min(r292_sw, r292_fBarStraight ? r271_VShapeFineStraight : r271_VShapeFine)));
        };
        var r271_VShape = function () {
            var _r293_t6;
            var _r293_t7 = arguments;
            var _r293_t0 = [].slice.call(_r293_t7, 0);
            var _r293_t1 = [];
            var _r293_t2 = 0;
            while (_r293_t2 < _r293_t0.length) {
                if (!(_r293_t0[_r293_t2] instanceof r271_xn$NamedParameterPair$2Lrc9b))
                    _r293_t1.push(_r293_t0[_r293_t2]);
                _r293_t2 = _r293_t2 + 1;
            }
            var _r293_t3 = _r293_t0;
            var _r293_t4 = _r293_t3.length;
            var _r293_t5 = 0;
            while (_r293_t5 < _r293_t4) {
                _r293_t2 = _r293_t3[_r293_t5];
                if (_r293_t2 && _r293_t2 instanceof r271_xn$NamedParameterPair$2Lrc9b && _r293_t2.left === 'df')
                    r293_df = _r293_t2.right;
                if (_r293_t2 && _r293_t2 instanceof r271_xn$NamedParameterPair$2Lrc9b && _r293_t2.left === 'fBarStraight')
                    r293_fBarStraight = _r293_t2.right;
                if (_r293_t2 && _r293_t2 instanceof r271_xn$NamedParameterPair$2Lrc9b && _r293_t2.left === 'top')
                    r293_top = _r293_t2.right;
                if (_r293_t2 && _r293_t2 instanceof r271_xn$NamedParameterPair$2Lrc9b && _r293_t2.left === 'sw')
                    r293_sw = _r293_t2.right;
                _r293_t5 = _r293_t5 + 1;
            }
            var r293_df = r1_fallback(r293_df, _r293_t1[0]);
            var r293_fBarStraight = r1_fallback(r293_fBarStraight, _r293_t1[1]);
            var r293_top = r1_fallback(r293_top, _r293_t1[2]);
            var r293_sw = r1_fallback(r293_sw, _r293_t1[3], r271_Stroke);
            return function () {
                var _r299_t1, _r299_t2, _r299_tag3, _r299_t4, _r299_tag5;
                var _r299_t0 = this;
                var r299_currentGlyph = _r299_t0;
                var r299_cornerHW = r271_VCornerHalfWidth * (r293_sw / r271_Stroke);
                var r299_fine = Math.min(r293_sw, (r293_fBarStraight ? r271_VShapeFineStraight : r271_VShapeFine) * (r293_sw / r271_Stroke));
                var r299_dgCor = r271_DiagCor(2 * r293_top, r271_Width, 0, 2 * r293_sw);
                var r299_sbScale = r293_fBarStraight ? r271_StraightSbShrink : 1;
                var r299_vxStartL = r293_df.leftSB * r299_sbScale;
                var r299_vxEndL = r293_df.middle - r299_cornerHW;
                var r299_vxStartR = r293_df.width - r293_df.leftSB * r299_sbScale;
                var r299_vxEndR = r293_df.middle + r299_cornerHW;
                if (r293_fBarStraight)
                    (function () {
                        var r301_midSW = r299_dgCor * r271_VShapeMiddleWidth / r271_Stroke * r293_sw;
                        r299_currentGlyph.include(r271_tagged('strokeDown', r271_dispiro(r271_widths.lhs(r293_sw * r299_dgCor), r271_flat(r1_mix(r299_vxStartL, r299_vxEndL, 0), r1_mix(r293_top, 0, 0), r271_heading(r271_Downward)), r271_curl(r1_mix(r299_vxStartL, r299_vxEndL, r271_pInktrap), r1_mix(r293_top, 0, r271_pInktrap), r271_widths.lhs.heading(r301_midSW, r271_Downward)), r271_g4(r1_mix(r299_vxStartL, r299_vxEndL, 1), r1_mix(r293_top, 0, 1), r271_widths.lhs.heading(r299_fine, r271_Downward)))));
                        return r299_currentGlyph.include(r271_tagged('strokeUp', r271_dispiro(r271_widths.rhs(r293_sw * r299_dgCor), r271_flat(r1_mix(r299_vxStartR, r299_vxEndR, 0), r1_mix(r293_top, 0, 0), r271_heading(r271_Downward)), r271_curl(r1_mix(r299_vxStartR, r299_vxEndR, r271_pInktrap), r1_mix(r293_top, 0, r271_pInktrap), r271_widths.rhs.heading(r301_midSW, r271_Downward)), r271_g4(r1_mix(r299_vxStartR, r299_vxEndR, 1), r1_mix(r293_top, 0, 1), r271_widths.rhs.heading(r299_fine, r271_Downward)))));
                    }());
                else
                    (function () {
                        r299_currentGlyph.include(r271_tagged('strokeDown', r271_dispiro(r271_widths.lhs(r293_sw), r271_flat(r299_vxStartL, r293_top, r271_heading(r271_Downward)), r271_curl(r299_vxStartL, r271_VShapeTopFlat(r293_top), r271_heading(r271_Downward)), r271_quadControls(0, r271_VCurviness, 9, r271_unimportant), r271_g4(r299_vxEndL, 0, r271_widths.lhs(r299_fine)))));
                        r299_currentGlyph.include(r271_tagged('strokeUp', r271_dispiro(r271_widths.rhs(r293_sw), r271_flat(r299_vxStartR, r293_top, r271_heading(r271_Downward)), r271_curl(r299_vxStartR, r271_VShapeTopFlat(r293_top), r271_heading(r271_Downward)), r271_quadControls(0, r271_VCurviness, 9, r271_unimportant), r271_g4(r299_vxEndR, 0, r271_widths.rhs(r299_fine)))));
                        return r299_currentGlyph.include(r271_VBottomCapShape(r293_df, r293_fBarStraight, r293_sw));
                    }());
                return void 0;
            };
        };
        var r271_VCursiveShapeBarPos = function (r309_k) {
            var _r309_t0, _r309_t1;
            return r1_mix(r271_SB, r271_RightSB, r309_k);
        };
        var r271_VCursiveShape = function () {
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
                if (_r310_t2 && _r310_t2 instanceof r271_xn$NamedParameterPair$2Lrc9b && _r310_t2.left === 'k')
                    r310_k = _r310_t2.right;
                if (_r310_t2 && _r310_t2 instanceof r271_xn$NamedParameterPair$2Lrc9b && _r310_t2.left === 'top')
                    r310_top = _r310_t2.right;
                if (_r310_t2 && _r310_t2 instanceof r271_xn$NamedParameterPair$2Lrc9b && _r310_t2.left === 'sw')
                    r310_sw = _r310_t2.right;
                _r310_t5 = _r310_t5 + 1;
            }
            var r310_k = r1_fallback(r310_k, _r310_t1[0]);
            var r310_top = r1_fallback(r310_top, _r310_t1[1]);
            var r310_sw = r1_fallback(r310_sw, _r310_t1[2], r271_Stroke);
            return function () {
                var _r316_t1;
                var _r316_t0 = this;
                var r316_currentGlyph = _r316_t0;
                var r316_xBar = r271_VCursiveShapeBarPos(r310_k);
                var r316_xArcRight = r271_RightSB - r271_OX;
                var r316_yArcRight = r1_mix(0, r310_top, 0.6) - r310_sw * 0.2;
                var r316_xArcEnd = r1_mix(r271_SB, r271_RightSB, 0.8) + r310_sw * 0.375;
                var r316_yArcEnd = r310_top - r271_O;
                var r316_rInY = r271_DiagonalTailInnerRadius();
                var r316_xArcMidBottom = r316_xBar + r310_sw * r271_HVContrast + r316_rInY * r271_HVContrast + r271_CorrectionOMidX * r310_sw;
                r316_currentGlyph.include(r271_dispiro(r271_widths.lhs(r310_sw), r271_flat(r316_xBar, r310_top, r271_heading(r271_Downward)), r271_curl(r316_xBar, (r310_sw + r316_rInY) * (1 + r271_TanSlope)), r271_arcvh(), r271_g2.right.mid(r316_xArcMidBottom, r271_O), r271_archv.superness(2), r271_g4(r316_xArcRight, r316_yArcRight), r271_g4(r316_xArcEnd, r316_yArcEnd)));
                r316_currentGlyph.setBaseAnchor('palatalHookAttach', r1_mix(r316_xArcMidBottom, r316_xArcRight, 0.5), r1_mix(r271_O, r316_yArcRight, r271_archv.yFromX(0.5, 2)));
                return void 0;
            };
        };
        var r271_VHookRightShape = function () {
            var _r319_t6;
            var _r319_t7 = arguments;
            var _r319_t0 = [].slice.call(_r319_t7, 0);
            var _r319_t1 = [];
            var _r319_t2 = 0;
            while (_r319_t2 < _r319_t0.length) {
                if (!(_r319_t0[_r319_t2] instanceof r271_xn$NamedParameterPair$2Lrc9b))
                    _r319_t1.push(_r319_t0[_r319_t2]);
                _r319_t2 = _r319_t2 + 1;
            }
            var _r319_t3 = _r319_t0;
            var _r319_t4 = _r319_t3.length;
            var _r319_t5 = 0;
            while (_r319_t5 < _r319_t4) {
                _r319_t2 = _r319_t3[_r319_t5];
                if (_r319_t2 && _r319_t2 instanceof r271_xn$NamedParameterPair$2Lrc9b && _r319_t2.left === 'df')
                    r319_df = _r319_t2.right;
                if (_r319_t2 && _r319_t2 instanceof r271_xn$NamedParameterPair$2Lrc9b && _r319_t2.left === 'fBarStraight')
                    r319_fBarStraight = _r319_t2.right;
                if (_r319_t2 && _r319_t2 instanceof r271_xn$NamedParameterPair$2Lrc9b && _r319_t2.left === 'top')
                    r319_top = _r319_t2.right;
                if (_r319_t2 && _r319_t2 instanceof r271_xn$NamedParameterPair$2Lrc9b && _r319_t2.left === 'sw')
                    r319_sw = _r319_t2.right;
                if (_r319_t2 && _r319_t2 instanceof r271_xn$NamedParameterPair$2Lrc9b && _r319_t2.left === 'hookWidthOuter')
                    r319_hookWidthOuter = _r319_t2.right;
                if (_r319_t2 && _r319_t2 instanceof r271_xn$NamedParameterPair$2Lrc9b && _r319_t2.left === 'hookWidthInner')
                    r319_hookWidthInner = _r319_t2.right;
                _r319_t5 = _r319_t5 + 1;
            }
            var r319_df = r1_fallback(r319_df, _r319_t1[0]);
            var r319_fBarStraight = r1_fallback(r319_fBarStraight, _r319_t1[1]);
            var r319_top = r1_fallback(r319_top, _r319_t1[2]);
            var r319_sw = r1_fallback(r319_sw, _r319_t1[3], r271_Stroke);
            var r319_hookWidthOuter = r1_fallback(r319_hookWidthOuter, _r319_t1[4], r271_TailX / 3);
            var r319_hookWidthInner = r1_fallback(r319_hookWidthInner, _r319_t1[5], r271_TailX / 3);
            return function () {
                var _r325_t1;
                var _r325_t0 = this;
                var r325_currentGlyph = _r325_t0;
                r325_currentGlyph.include(r271_VShape(r319_df, r319_fBarStraight, r319_top, new r271_xn$NamedParameterPair$2Lrc9b('sw', r319_sw)));
                r325_currentGlyph.ejectTagged('strokeUp');
                r325_currentGlyph.include(r271_VBottomCapShape(r319_df, r319_fBarStraight, r319_sw));
                r325_currentGlyph.include(r271_dispiro(r271_widths.rhs(r319_sw), r271_straight.left.start(r271_RightSB + r319_hookWidthOuter, r319_top - r319_sw - r271_O), r271_g4(r271_RightSB - r319_hookWidthInner, r319_top - 0.5 * r319_sw - r271_TailY), r271_quadControls(0.4, 0.75, 64, r271_unimportant), r271_g4(r271_Middle + r271_VCornerHalfWidth * r319_sw / r271_Stroke, 0, r271_widths.rhs(r271_VShapeFine * r319_sw / r271_Stroke))));
                return void 0;
            };
        };
        var r271_VSerifs = function (r331_df, r331_fBarStraight, r331_top) {
            var _r331_t0, _r331_t1;
            var r331_sbScale = r331_fBarStraight ? r271_StraightSbShrink : 1;
            var r331_sbOffset = r331_fBarStraight ? r271_OX * r271_StrokeWidthBlend(1, 2) : 0;
            var r331_sf = r271_SerifFrame(r331_top, 0, r331_df.leftSB * r331_sbScale - r331_sbOffset, r331_df.width - r331_df.leftSB * r331_sbScale + r331_sbOffset);
            return function () {
                var _r333_t1;
                var _r333_t0 = this;
                var r333_currentGlyph = _r333_t0;
                r333_currentGlyph.include(r331_sf.lt.full, true, true);
                r333_currentGlyph.include(r331_sf.rt.full);
                return void 0;
            };
        };
        var r271_VAutoSerifs = function (r336_df, r336_fBarStraight, r336_top) {
            var _r336_t0, _r336_t1;
            return r271_SLAB ? r271_VSerifs(r336_df, r336_fBarStraight, r336_top) : r271_xn$noshape$3cah();
        };
        var r271_VMotionSerifs = function (r337_df, r337_fBarStraight, r337_top) {
            var _r337_t0, _r337_t1;
            var r337_sbScale = r337_fBarStraight ? r271_StraightSbShrink : 1;
            var r337_sbOffset = r337_fBarStraight ? r271_OX * r271_StrokeWidthBlend(1, 2) : 0;
            var r337_sf = r271_SerifFrame(r337_top, 0, r337_df.leftSB * r337_sbScale - r337_sbOffset, r337_df.width - r337_df.leftSB * r337_sbScale + r337_sbOffset);
            return function () {
                var _r339_t1;
                var _r339_t0 = this;
                var r339_currentGlyph = _r339_t0;
                r339_currentGlyph.include(r337_sf.lt.outer, true, true);
                return void 0;
            };
        };
        var r271_VStandardConfig = {
            'straight': [
                r271_VAutoSerifs,
                true
            ],
            'curly': [
                r271_VAutoSerifs,
                false
            ],
            'straightSerifless': [
                r271_xn$noshape$3cah,
                true
            ],
            'curlySerifless': [
                r271_xn$noshape$3cah,
                false
            ],
            'straightMotionSerifed': [
                r271_VMotionSerifs,
                true
            ],
            'curlyMotionSerifed': [
                r271_VMotionSerifs,
                false
            ],
            'straightSerifed': [
                r271_VSerifs,
                true
            ],
            'curlySerifed': [
                r271_VSerifs,
                false
            ]
        };
        var _r271_t8 = Object.entries(r271_VStandardConfig)[Symbol.iterator]();
        var _r271_t9 = void 0;
        while (!(_r271_t9 = _r271_t8.next()).done) {
            _r271_t10 = _r271_t9.value;
            r271_suffix = _r271_t10[0];
            r271_Serifs = _r271_t10[1][0];
            r271_fStraightBar = _r271_t10[1][1];
            _r271_t10[1];
            (function () {
                r271_xn$createAndSaveGlyphImpl$2Lrc3c('V.' + r271_suffix, null, function () {
                    var _r346_t1;
                    var _r346_t0 = this;
                    var r346_currentGlyph = _r346_t0;
                    r346_currentGlyph.include(r271_MarkSet.capital());
                    r346_currentGlyph.include(r271_VShape(r271_DivFrame(1), r271_fStraightBar, r271_CAP, r271_Stroke));
                    r346_currentGlyph.include(r271_Serifs(r271_DivFrame(1), r271_fStraightBar, r271_CAP));
                    return void 0;
                });
                r271_xn$createAndSaveGlyphImpl$2Lrc3c('v.' + r271_suffix, null, function () {
                    var _r352_t1;
                    var _r352_t0 = this;
                    var r352_currentGlyph = _r352_t0;
                    r352_currentGlyph.include(r271_MarkSet.e());
                    r352_currentGlyph.include(r271_VShape(r271_DivFrame(1), r271_fStraightBar, r271_XH, r271_Stroke));
                    r352_currentGlyph.include(r271_Serifs(r271_DivFrame(1), r271_fStraightBar, r271_XH));
                    return void 0;
                });
                r271_xn$createAndSaveGlyphImpl$2Lrc3c('VHookRight.' + r271_suffix, null, function () {
                    var _r358_t1;
                    var _r358_t0 = this;
                    var r358_currentGlyph = _r358_t0;
                    r358_currentGlyph.include(r271_MarkSet.capital());
                    r358_currentGlyph.include(r271_VHookRightShape(r271_DivFrame(1), r271_fStraightBar, r271_CAP));
                    r358_currentGlyph.include(r271_Serifs(r271_DivFrame(1), r271_fStraightBar, r271_CAP));
                    r358_currentGlyph.ejectTagged('serifRT');
                    return void 0;
                });
                r271_xn$createAndSaveGlyphImpl$2Lrc3c('vHookRight.' + r271_suffix, null, function () {
                    var _r365_t1;
                    var _r365_t0 = this;
                    var r365_currentGlyph = _r365_t0;
                    r365_currentGlyph.include(r271_MarkSet.e());
                    r365_currentGlyph.include(r271_VHookRightShape(r271_DivFrame(1), r271_fStraightBar, r271_XH));
                    r365_currentGlyph.include(r271_Serifs(r271_DivFrame(1), r271_fStraightBar, r271_XH));
                    r365_currentGlyph.ejectTagged('serifRT');
                    return void 0;
                });
                r271_xn$createAndSaveGlyphImpl$2Lrc3c('cyrl/Uk.' + r271_suffix, null, function () {
                    var _r372_t1;
                    var _r372_t0 = this;
                    var r372_currentGlyph = _r372_t0;
                    r372_currentGlyph.include(r271_MarkSet.capital());
                    var r372_vPartHeight = r271_CAP * 0.45 + r271_HalfStroke;
                    r372_currentGlyph.include(r271_WithTransform(r271_ApparentTranslate(0, r271_CAP - r372_vPartHeight), function () {
                        var _r376_t1;
                        var _r376_t0 = this;
                        var r376_currentGlyph = _r376_t0;
                        r376_currentGlyph.include(r271_VHookRightShape(r271_DivFrame(1), r271_fStraightBar, r372_vPartHeight));
                        r376_currentGlyph.include(r271_Serifs(r271_DivFrame(1), r271_fStraightBar, r372_vPartHeight));
                        r376_currentGlyph.ejectTagged('serifRT');
                        return void 0;
                    }));
                    var r372_oHeight = r271_CAP - r372_vPartHeight + r271_Stroke + r271_O;
                    r372_currentGlyph.include(r271_OShape(r372_oHeight, 0, r271_SB, r271_RightSB, r271_AdviceStroke(2.75)));
                    r372_currentGlyph.include(r271_VBar.m(r271_Middle, 0.5 * r372_oHeight, r372_oHeight, r271_AdviceStroke(4)));
                    return void 0;
                });
                r271_xn$createAndSaveGlyphImpl$2Lrc3c('cyrl/ukUnblended.' + r271_suffix, null, function () {
                    var _r384_t1;
                    var _r384_t0 = this;
                    var r384_currentGlyph = _r384_t0;
                    r384_currentGlyph.include(r271_MarkSet.b());
                    var r384_vPartHeight = r271_Ascender * 0.45 + r271_HalfStroke;
                    r384_currentGlyph.include(r271_WithTransform(r271_ApparentTranslate(0, r271_Ascender - r384_vPartHeight), function () {
                        var _r388_t1;
                        var _r388_t0 = this;
                        var r388_currentGlyph = _r388_t0;
                        r388_currentGlyph.include(r271_VHookRightShape(r271_DivFrame(1), r271_fStraightBar, r384_vPartHeight));
                        r388_currentGlyph.include(r271_Serifs(r271_DivFrame(1), r271_fStraightBar, r384_vPartHeight));
                        r388_currentGlyph.ejectTagged('serifRT');
                        return void 0;
                    }));
                    r384_currentGlyph.include(r271_OShape(r271_Ascender - r384_vPartHeight + r271_Stroke + r271_O, 0, r271_SB, r271_RightSB));
                    return void 0;
                });
                r271_xn$createAndSaveGlyphImpl$2Lrc3c('cyrl/Yn.' + r271_suffix, null, function () {
                    var _r395_t1;
                    var _r395_t0 = this;
                    var r395_currentGlyph = _r395_t0;
                    r395_currentGlyph.include(r271_MarkSet.capDesc());
                    var r395_vPartHeight = r271_CAP * 0.875;
                    var r395_sw = r271_AdviceStroke(3);
                    r395_currentGlyph.include(r271_WithTransform(r271_FlipAround(r271_Middle, r271_CAP / 2), function () {
                        var _r399_t1;
                        var _r399_t0 = this;
                        var r399_currentGlyph = _r399_t0;
                        r399_currentGlyph.include(r271_VHookRightShape(r271_DivFrame(1), r271_fStraightBar, r395_vPartHeight, new r271_xn$NamedParameterPair$2Lrc9b('sw', r395_sw), new r271_xn$NamedParameterPair$2Lrc9b('hookWidthInner', r271_TailX / 3 - 0.25 * r271_HVContrast * r395_sw)));
                        r399_currentGlyph.include(r271_Serifs(r271_DivFrame(1), r271_fStraightBar, r395_vPartHeight));
                        r399_currentGlyph.ejectTagged('serifRT');
                        return void 0;
                    }));
                    r395_currentGlyph.include(r271_dispiro(r271_g4.down.start(r271_Middle, r271_CAP, r271_widths.center.heading(r271_AdviceStroke(6), r271_Downward)), r271_flat(r271_Middle, 0, r271_widths.center.heading(r395_sw, r271_Downward)), r271_curl(r271_Middle, r271_Descender, r271_widths.center.heading(r395_sw, r271_Downward))));
                    if (r271_SLAB)
                        r395_currentGlyph.include(r271_HSerif.mb(r271_Middle, r271_Descender, r271_MidJutCenter));
                    return void 0;
                });
                r271_xn$createAndSaveGlyphImpl$2Lrc3c('cyrl/yn.' + r271_suffix, null, function () {
                    var _r409_t1;
                    var _r409_t0 = this;
                    var r409_currentGlyph = _r409_t0;
                    r409_currentGlyph.include(r271_MarkSet.p());
                    var r409_vPartHeight = r271_XH * 1;
                    var r409_sw = r271_AdviceStroke(3);
                    r409_currentGlyph.include(r271_WithTransform(r271_FlipAround(r271_Middle, r271_XH / 2), function () {
                        var _r413_t1;
                        var _r413_t0 = this;
                        var r413_currentGlyph = _r413_t0;
                        r413_currentGlyph.include(r271_VHookRightShape(r271_DivFrame(1), r271_fStraightBar, r409_vPartHeight, new r271_xn$NamedParameterPair$2Lrc9b('sw', r409_sw), new r271_xn$NamedParameterPair$2Lrc9b('hookWidthInner', r271_TailX / 3 - 0.25 * r271_HVContrast * r409_sw)));
                        r413_currentGlyph.include(r271_Serifs(r271_DivFrame(1), r271_fStraightBar, r409_vPartHeight));
                        r413_currentGlyph.ejectTagged('serifRT');
                        return void 0;
                    }));
                    r409_currentGlyph.include(r271_dispiro(r271_g4.down.start(r271_Middle, r271_XH, r271_widths.center.heading(r271_AdviceStroke(6), r271_Downward)), r271_flat(r271_Middle, 0, r271_widths.center.heading(r409_sw, r271_Downward)), r271_curl(r271_Middle, r271_Descender, r271_widths.center.heading(r409_sw, r271_Downward))));
                    if (r271_SLAB)
                        r409_currentGlyph.include(r271_HSerif.mb(r271_Middle, r271_Descender, r271_MidJutCenter));
                    return void 0;
                });
                return r271_xn$createAndSaveGlyphImpl$2Lrc3c('vPalatalHook.' + r271_suffix, null, function () {
                    var _r423_t1;
                    var _r423_t0 = this;
                    var r423_currentGlyph = _r423_t0;
                    r423_currentGlyph.include(r271_xn$referglyph$1aao('v.' + r271_suffix), r271_AS_BASE, r271_ALSO_METRICS);
                    r423_currentGlyph.include(r271_PalatalHook.r(new r271_xn$NamedParameterPair$2Lrc9b('xLink', r271_Middle), new r271_xn$NamedParameterPair$2Lrc9b('x', r271_Middle + r271_HVContrast * r271_HalfStroke + r271_PalatalHook.adviceGap(r271_Stroke)), new r271_xn$NamedParameterPair$2Lrc9b('y', 0)));
                    return void 0;
                });
            }());
        }
        var r271_CursiveConfig = {
            'cursiveSerifless': [
                0,
                false
            ],
            'cursiveSerifed': [
                1 / 16,
                true
            ]
        };
        var _r271_t11 = Object.entries(r271_CursiveConfig)[Symbol.iterator]();
        var _r271_t12 = void 0;
        while (!(_r271_t12 = _r271_t11.next()).done) {
            _r271_t13 = _r271_t12.value;
            r271_suffix = _r271_t13[0];
            r271_pxBar = _r271_t13[1][0];
            r271_fDoSerif = _r271_t13[1][1];
            _r271_t13[1];
            (function () {
                r271_xn$createAndSaveGlyphImpl$2Lrc3c('v.' + r271_suffix, null, function () {
                    var r434_xBar, _r434_t1;
                    var _r434_t0 = this;
                    var r434_currentGlyph = _r434_t0;
                    r434_currentGlyph.include(r271_MarkSet.e());
                    r434_currentGlyph.include(r271_VCursiveShape(r271_pxBar, r271_XH, r271_Stroke));
                    if (r271_fDoSerif) {
                        r434_xBar = r271_VCursiveShapeBarPos(r271_pxBar);
                        r434_currentGlyph.include(r271_tagged('serifLT', r271_HSerif.lt(r434_xBar, r271_XH, r271_SideJut + r434_xBar - r271_SB)));
                    }
                    return void 0;
                });
                return r271_xn$createAndSaveGlyphImpl$2Lrc3c('vPalatalHook.' + r271_suffix, null, function () {
                    var _r440_t1;
                    var _r440_t0 = this;
                    var r440_currentGlyph = _r440_t0;
                    r440_currentGlyph.include(r271_xn$referglyph$1aao('v.' + r271_suffix), r271_AS_BASE, r271_ALSO_METRICS);
                    var r440_attach = r440_currentGlyph.gizmo.unapply(r440_currentGlyph.baseAnchors.palatalHookAttach);
                    r440_currentGlyph.include(r271_PalatalHook.r(new r271_xn$NamedParameterPair$2Lrc9b('x', r440_attach.x), new r271_xn$NamedParameterPair$2Lrc9b('y', 0), new r271_xn$NamedParameterPair$2Lrc9b('yAttach', r440_attach.y)));
                    return void 0;
                });
            }());
        }
        r271_xn$selectvariant$7Hrq('V', 'V');
        r271_xn$linkreducedvariant$5sIl8('V/sansSerif', 'V', r1_MathSansSerif);
        r271_xn$selectvariant$7Hrq('smcpV', 7456, new r271_xn$NamedParameterPair$2Lrc9b('shapeFrom', 'v'), new r271_xn$NamedParameterPair$2Lrc9b('follow', 'V'));
        r271_xn$selectvariant$7Hrq('v', 'v');
        r271_xn$selectvariant$7Hrq('v/nonCursive', new r271_xn$NamedParameterPair$2Lrc9b('shapeFrom', 'v'));
        r271_xn$linkreducedvariant$5sIl8('v/sansSerif', 'v', r1_MathSansSerif);
        r271_xn$selectvariant$7Hrq('vPalatalHook', 7564, new r271_xn$NamedParameterPair$2Lrc9b('follow', 'v'));
        r271_xn$selectvariant$7Hrq('vHookRight', 11377, new r271_xn$NamedParameterPair$2Lrc9b('follow', 'v/nonCursive'));
        r271_xn$selectvariant$7Hrq('cyrl/ukUnblended', 7304, new r271_xn$NamedParameterPair$2Lrc9b('follow', 'v/nonCursive'));
        r271_xn$selectvariant$7Hrq('cyrl/yn', 42591, new r271_xn$NamedParameterPair$2Lrc9b('follow', 'v/nonCursive'));
        r271_xn$selectvariant$7Hrq('cyrl/Izhitsa', 1140, new r271_xn$NamedParameterPair$2Lrc9b('follow', 'VHookRight'), new r271_xn$NamedParameterPair$2Lrc9b('shapeFrom', 'VHookRight'));
        r271_xn$selectvariant$7Hrq('cyrl/Uk', 42570, new r271_xn$NamedParameterPair$2Lrc9b('follow', 'VHookRight'));
        r271_xn$selectvariant$7Hrq('cyrl/Yn', 42590, new r271_xn$NamedParameterPair$2Lrc9b('follow', 'VHookRight'));
        r271_alias('cyrl/izhitsa', 1141, 'vHookRight');
        r271_turned('turnv', 652, 'v/nonCursive', r271_Middle, r271_XH / 2);
        r271_xn$ExportCapture$2Lrc4b(function () {
            var _r458_t0, _r458_t1;
            return {
                'BBVShape': r271_BBVShape,
                'BBVInnerMaskShape': r271_BBVInnerMaskShape,
                'BBVOuterMaskShape': r271_BBVOuterMaskShape
            };
        });
        var r271_BBVShape = function (r459_l, r459_r, r459_kd, r459_ks, r459_top) {
            var _r459_t0, _r459_t1;
            return function () {
                var _r461_t1;
                var _r461_t0 = this;
                var r461_currentGlyph = _r461_t0;
                var r461_m = r1_mix(r459_l, r459_r, 0.5);
                var r461_bbd = r271_BBD * r459_kd;
                var r461_bbs = r271_BBS * r459_ks;
                var r461_kDiag = r271_DiagCorDs(r459_top, (r459_r - r459_l) / 2, r461_bbd / 2);
                r461_currentGlyph.include(r271_intersection(r271_Rect(r459_top, 0, -r271_Width, 2 * r271_Width), r271_union(r271_ExtLineCenter(1, r461_bbs, r459_l, r459_top, r461_m - r461_kDiag * r461_bbd / 2, 0), r271_ExtLineCenter(1, r461_bbs, r459_l + r461_kDiag * r461_bbd, r459_top, r461_m + r461_kDiag * r461_bbd / 2, 0), r271_ExtLineCenter(1, r461_bbs, r459_r, r459_top, r461_m + r461_kDiag * r461_bbd / 2, 0))));
                r461_currentGlyph.include(r271_HBar.t(r459_l, r459_l + r461_kDiag * r461_bbd, r459_top, r461_bbs));
                r461_currentGlyph.include(r271_HBar.b(r461_m - r461_kDiag * r461_bbd / 2, r461_m + r461_kDiag * r461_bbd / 2, 0, r461_bbs));
                return void 0;
            };
        };
        var r271_BBVInnerMaskShape = function (r465_l, r465_r, r465_kd, r465_ks, r465_top) {
            var _r465_t0, _r465_t1;
            return function () {
                var _r467_t1;
                var _r467_t0 = this;
                var r467_currentGlyph = _r467_t0;
                var r467_m = r1_mix(r465_l, r465_r, 0.5);
                var r467_bbd = r271_BBD * r465_kd;
                var r467_kDiag = r271_DiagCorDs(r465_top, (r465_r - r465_l) / 2, r467_bbd / 2);
                r467_currentGlyph.include(r271_xn$spirooutline$1aao(r271_corner(r465_l + r467_kDiag * r467_bbd, r465_top), r271_corner(r465_r, r465_top), r271_corner(r467_m + r467_kDiag * r467_bbd / 2, 0)));
                return void 0;
            };
        };
        var r271_BBVOuterMaskShape = function (r469_l, r469_r, r469_kd, r469_ks, r469_top) {
            var _r469_t0, _r469_t1;
            return function () {
                var _r471_t1;
                var _r471_t0 = this;
                var r471_currentGlyph = _r471_t0;
                var r471_m = r1_mix(r469_l, r469_r, 0.5);
                var r471_bbd = r271_BBD * r469_kd;
                var r471_kDiag = r271_DiagCorDs(r469_top, (r469_r - r469_l) / 2, r471_bbd / 2);
                r471_currentGlyph.include(r271_xn$spirooutline$1aao(r271_corner(r469_l, r469_top), r271_corner(r469_r, r469_top), r271_corner(r471_m + r471_kDiag * r471_bbd / 2, 0), r271_corner(r471_m - r471_kDiag * r471_bbd / 2, 0)));
                return void 0;
            };
        };
        r271_xn$createAndSaveGlyphImpl$2Lrc3c('mathbb/V', 120141, function () {
            var _r475_t1;
            var _r475_t0 = this;
            var r475_currentGlyph = _r475_t0;
            r475_currentGlyph.include(r271_MarkSet.capital(), true, true);
            r475_currentGlyph.include(r271_BBVShape(r271_SB, r271_RightSB, 1, 1, r271_CAP));
            return void 0;
        });
        return r271_xn$createAndSaveGlyphImpl$2Lrc3c('mathbb/v', 120167, function () {
            var _r480_t1;
            var _r480_t0 = this;
            var r480_currentGlyph = _r480_t0;
            r480_currentGlyph.include(r271_MarkSet.e(), true, true);
            r480_currentGlyph.include(r271_BBVShape(r271_SB, r271_RightSB, 1, 1, r271_XH));
            return void 0;
        });
    });
    return void 0;
});
