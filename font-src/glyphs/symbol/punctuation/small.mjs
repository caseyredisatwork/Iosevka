'use strict';
import * as _s0_t0 from '../../../support/utils.mjs';
import * as _s0_t1 from '../../../meta/aesthetics.mjs';
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
var r1_DesignParameters = _r1_t9.DesignParameters;
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
    r270_xn$Capture_Ext$2Lrc2b['$defineGlyphBlockImpl$'](r270_xn$Capture_Ext$2Lrc2b, 'Symbol-Punctuation-Small', function (r271_xn$Capture$2Lrc8, r271_xn$ExportCapture$2Lrc4b) {
        var r271_suffix, r271_DrawAt, r271_kDotRadius, r271_overshoot, _r271_t8, _r271_t11, _r271_t12, _r271_t13, _r271_t14, _r271_tag15, _r271_t16, _r271_tag17;
        var _r271_t0 = r271_xn$Capture$2Lrc8;
        var r271_xn$createAndSaveGlyphImpl$2Lrc3c = _r271_t0['$createAndSaveGlyphImpl$'];
        var r271_xn$NamedParameterPair$2Lrc9b = _r271_t0['$NamedParameterPair$'];
        var r271_xn$assignUnicodeImpl$2Lrc8b = _r271_t0['$assignUnicodeImpl$'];
        var r271_xn$execState$2Lrc0b = _r271_t0['$execState$'];
        var r271_para = _r271_t0.para;
        var r271_AS_BASE = _r271_t0.AS_BASE;
        var r271_ALSO_METRICS = _r271_t0.ALSO_METRICS;
        var r271_DivFrame = _r271_t0.DivFrame;
        var _r271_t1 = r271_xn$Capture$2Lrc8.Metrics;
        var r271_DesignParameters = _r271_t1.DesignParameters;
        var r271_Width = _r271_t1.Width;
        var r271_SB = _r271_t1.SB;
        var r271_CAP = _r271_t1.CAP;
        var r271_XH = _r271_t1.XH;
        var r271_Descender = _r271_t1.Descender;
        var r271_SymbolMid = _r271_t1.SymbolMid;
        var r271_Translate = _r271_t1.Translate;
        var r271_ApparentTranslate = _r271_t1.ApparentTranslate;
        var r271_GlobalTransform = _r271_t1.GlobalTransform;
        var r271_TanSlope = _r271_t1.TanSlope;
        var r271_HVContrast = _r271_t1.HVContrast;
        var r271_Rightward = _r271_t1.Rightward;
        var r271_Leftward = _r271_t1.Leftward;
        var r271_O = _r271_t1.O;
        var r271_Stroke = _r271_t1.Stroke;
        var r271_PeriodSize = _r271_t1.PeriodSize;
        var r271_CThin = _r271_t1.CThin;
        var r271_RightSB = _r271_t1.RightSB;
        var r271_Middle = _r271_t1.Middle;
        var r271_DotRadius = _r271_t1.DotRadius;
        var r271_PeriodRadius = _r271_t1.PeriodRadius;
        var r271_AdviceStroke = _r271_t1.AdviceStroke;
        var r271_OperatorStroke = _r271_t1.OperatorStroke;
        var _r271_t2 = r271_xn$Capture$2Lrc8.SpiroFns;
        var r271_g4 = _r271_t2.g4;
        var r271_flat = _r271_t2.flat;
        var r271_curl = _r271_t2.curl;
        var r271_close = _r271_t2.close;
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
        var _r271_t4 = r271_xn$Capture$2Lrc8.CommonShapes.resolve();
        var r271_SquareAt = _r271_t4.SquareAt;
        var r271_RingStrokeAt = _r271_t4.RingStrokeAt;
        var r271_HBar = _r271_t4.HBar;
        var r271_VBar = _r271_t4.VBar;
        var r271_WithTransform = _r271_t4.WithTransform;
        var r271_MaskAbove = _r271_t4.MaskAbove;
        var r271_DotVariants = _r271_t4.DotVariants;
        var _r271_t5 = r271_xn$Capture$2Lrc8['Common-Derivatives'].resolve();
        var r271_xn$selectvariant$7Hrq = _r271_t5['select-variant'];
        var r271_xn$referglyph$1aao = _r271_t5['refer-glyph'];
        var r271_alias = _r271_t5.alias;
        var r271_turned = _r271_t5.turned;
        var r271_xn$derivecomposites$7Hrq = _r271_t5['derive-composites'];
        var _r271_t6 = Object.entries(r271_DotVariants)[Symbol.iterator]();
        var _r271_t7 = void 0;
        while (!(_r271_t7 = _r271_t6.next()).done) {
            _r271_t8 = _r271_t7.value;
            r271_suffix = _r271_t8[0];
            r271_DrawAt = _r271_t8[1][0];
            r271_kDotRadius = _r271_t8[1][1];
            r271_overshoot = _r271_t8[1][2];
            _r271_t8[1];
            (function () {
                r271_xn$createAndSaveGlyphImpl$2Lrc3c('period.' + r271_suffix, null, function () {
                    var _r279_t1;
                    var _r279_t0 = this;
                    var r279_currentGlyph = _r279_t0;
                    var r279_df = r271_DivFrame(r271_para.diversityF);
                    r279_currentGlyph.setWidth(r279_df.width);
                    r279_currentGlyph.include(r271_DrawAt(r279_df.middle, r271_PeriodRadius * r271_kDotRadius, r271_PeriodRadius * r271_kDotRadius - r271_overshoot));
                    return void 0;
                });
                r271_xn$createAndSaveGlyphImpl$2Lrc3c('halfXhPeriod.' + r271_suffix, null, function () {
                    var _r284_t1;
                    var _r284_t0 = this;
                    var r284_currentGlyph = _r284_t0;
                    var r284_df = r271_DivFrame(r271_para.diversityF);
                    r284_currentGlyph.setWidth(r284_df.width);
                    r284_currentGlyph.include(r271_DrawAt(r284_df.middle, r271_XH / 2, r271_PeriodRadius * r271_kDotRadius - r271_overshoot));
                    return void 0;
                });
                r271_xn$createAndSaveGlyphImpl$2Lrc3c('xhPeriod.' + r271_suffix, null, function () {
                    var _r289_t1;
                    var _r289_t0 = this;
                    var r289_currentGlyph = _r289_t0;
                    var r289_df = r271_DivFrame(r271_para.diversityF);
                    r289_currentGlyph.setWidth(r289_df.width);
                    r289_currentGlyph.include(r271_DrawAt(r289_df.middle, r271_XH - r271_PeriodRadius * r271_kDotRadius, r271_PeriodRadius * r271_kDotRadius - r271_overshoot));
                    return void 0;
                });
                r271_xn$createAndSaveGlyphImpl$2Lrc3c('capPeriod.' + r271_suffix, null, function () {
                    var _r294_t1;
                    var _r294_t0 = this;
                    var r294_currentGlyph = _r294_t0;
                    var r294_df = r271_DivFrame(r271_para.diversityF);
                    r294_currentGlyph.setWidth(r294_df.width);
                    r294_currentGlyph.include(r271_DrawAt(r294_df.middle, r271_CAP - r271_PeriodRadius * r271_kDotRadius, r271_PeriodRadius * r271_kDotRadius - r271_overshoot));
                    return void 0;
                });
                r271_xn$createAndSaveGlyphImpl$2Lrc3c('smallPeriod.' + r271_suffix, null, function () {
                    var _r299_t1;
                    var _r299_t0 = this;
                    var r299_currentGlyph = _r299_t0;
                    var r299_df = r271_DivFrame(r271_para.diversityF);
                    r299_currentGlyph.setWidth(r299_df.width);
                    r299_currentGlyph.include(r271_DrawAt(r299_df.middle, r271_DotRadius * r271_kDotRadius, r271_DotRadius * r271_kDotRadius - r271_overshoot));
                    return void 0;
                });
                r271_xn$createAndSaveGlyphImpl$2Lrc3c('halfXhSmallPeriod.' + r271_suffix, null, function () {
                    var _r304_t1;
                    var _r304_t0 = this;
                    var r304_currentGlyph = _r304_t0;
                    var r304_df = r271_DivFrame(r271_para.diversityF);
                    r304_currentGlyph.setWidth(r304_df.width);
                    r304_currentGlyph.include(r271_DrawAt(r304_df.middle, r271_XH / 2, r271_DotRadius * r271_kDotRadius - r271_overshoot));
                    return void 0;
                });
                r271_xn$createAndSaveGlyphImpl$2Lrc3c('halfCapSmallPeriod.' + r271_suffix, null, function () {
                    var _r309_t1;
                    var _r309_t0 = this;
                    var r309_currentGlyph = _r309_t0;
                    var r309_df = r271_DivFrame(r271_para.diversityF);
                    r309_currentGlyph.setWidth(r309_df.width);
                    r309_currentGlyph.include(r271_DrawAt(r309_df.middle, r271_CAP / 2, r271_DotRadius * r271_kDotRadius - r271_overshoot));
                    return void 0;
                });
                r271_xn$createAndSaveGlyphImpl$2Lrc3c('xhSmallPeriod.' + r271_suffix, null, function () {
                    var _r314_t1;
                    var _r314_t0 = this;
                    var r314_currentGlyph = _r314_t0;
                    var r314_df = r271_DivFrame(r271_para.diversityF);
                    r314_currentGlyph.setWidth(r314_df.width);
                    r314_currentGlyph.include(r271_DrawAt(r314_df.middle, r271_XH - r271_DotRadius * r271_kDotRadius, r271_DotRadius * r271_kDotRadius - r271_overshoot));
                    return void 0;
                });
                return r271_xn$createAndSaveGlyphImpl$2Lrc3c('capSmallPeriod.' + r271_suffix, null, function () {
                    var _r319_t1;
                    var _r319_t0 = this;
                    var r319_currentGlyph = _r319_t0;
                    var r319_df = r271_DivFrame(r271_para.diversityF);
                    r319_currentGlyph.setWidth(r319_df.width);
                    r319_currentGlyph.include(r271_DrawAt(r319_df.middle, r271_CAP - r271_DotRadius * r271_kDotRadius, r271_DotRadius * r271_kDotRadius - r271_overshoot));
                    return void 0;
                });
            }());
        }
        r271_xn$selectvariant$7Hrq('period', '.', new r271_xn$NamedParameterPair$2Lrc9b('follow', 'punctuationDot'));
        var r271_CommaShapeT = function (r323_cx, r323_cy, r323_gp) {
            var _r323_t0, _r323_t1;
            return r271_xn$createAndSaveGlyphImpl$2Lrc3c(null, null, function () {
                var _r326_t2;
                var _r326_t1 = this;
                var r326_currentGlyph = _r326_t1;
                r326_currentGlyph.gizmo = r271_Translate(0, 0);
                r326_currentGlyph.include(r323_gp);
                var _r326_t0 = r271_GlobalTransform.apply({
                    'x': r323_cx,
                    'y': r323_cy
                });
                var r326_mx1 = _r326_t0.x;
                var r326_my1 = _r326_t0.y;
                r326_currentGlyph.include(r271_Translate(r326_mx1, r326_my1));
                return void 0;
            });
        };
        r271_xn$createAndSaveGlyphImpl$2Lrc3c('comma.round', null, function () {
            var _r331_t1;
            var _r331_t0 = this;
            var r331_currentGlyph = _r331_t0;
            var r331_df = r271_DivFrame(r271_para.diversityF);
            r331_currentGlyph.setWidth(r331_df.width);
            r331_currentGlyph.include(r271_CommaShapeT(r331_df.middle, 0, function () {
                var _r335_t1;
                var _r335_t0 = this;
                var r335_currentGlyph = _r335_t0;
                var r335_r = r271_PeriodRadius + 0;
                var r335_ro = r271_PeriodRadius - r271_O;
                var r335_sw = Math.min(r271_AdviceStroke(4), r271_PeriodSize * 0.4);
                var r335_swEnd = Math.min(r271_Stroke, r271_PeriodSize * 0.5);
                var r335_commaOverflow = r271_PeriodRadius - r335_swEnd * 0.5;
                var r335_rFill = r335_ro - r335_sw / 4;
                r335_currentGlyph.include(r271_union(r271_xn$spirooutline$1aao(r271_g4(r335_rFill, r335_rFill), r271_arcvh(), r271_g4(0, 0), r271_archv(), r271_g4(-r335_rFill, r335_rFill), r271_arcvh(), r271_g4(0, 2 * r335_rFill), r271_archv(), r271_close()), r271_dispiro(r271_g4(r335_r, r335_r, r271_widths.rhs(r335_sw / 4)), r271_arcvh(), r271_g4(0, r271_O, r271_widths.rhs(r335_sw / 2)), r271_archv(), r271_g4(-r335_ro, r335_r), r271_arcvh(), r271_g4(0, r335_r + r335_ro), r271_archv(), r271_g4(r335_ro, r335_r, r271_widths.rhs(r335_sw)), r271_quadControls(0 + r271_TanSlope / 2, 0.5 - r271_TanSlope * r335_r / r271_Descender, 12), r271_g4(-r335_commaOverflow + r271_Descender * r271_TanSlope, r271_Descender, r271_widths.rhs(r335_swEnd)))));
                return void 0;
            }));
            return void 0;
        });
        r271_xn$createAndSaveGlyphImpl$2Lrc3c('comma.square', null, function () {
            var _r339_t1;
            var _r339_t0 = this;
            var r339_currentGlyph = _r339_t0;
            var r339_df = r271_DivFrame(r271_para.diversityF);
            r339_currentGlyph.setWidth(r339_df.width);
            r339_currentGlyph.include(r271_WithTransform(r271_Translate(r339_df.middle, 0), function () {
                var _r343_t1;
                var _r343_t0 = this;
                var r343_currentGlyph = _r343_t0;
                var r343_r = r271_PeriodRadius * r271_DesignParameters.squareDotScalar + 0;
                var r343_sw = Math.min(r271_AdviceStroke(4), r271_PeriodSize * r271_DesignParameters.squareDotScalar * 0.4);
                var r343_swEnd = Math.min(r271_Stroke, r271_PeriodSize * r271_DesignParameters.squareDotScalar * 0.5);
                var r343_commaOverflow = r343_r - r343_swEnd * 0.5;
                r343_currentGlyph.include(r271_union(r271_SquareAt(0, r343_r, r343_r), r271_dispiro(r271_flat(r343_r, r343_r, r271_widths.rhs(r343_sw)), r271_curl(r343_r, 0, r271_widths.rhs(r343_sw)), r271_quadControls(0 + r271_TanSlope / 2, 0.5 - r271_TanSlope * r343_r / r271_Descender, 12), r271_g4(-r343_commaOverflow + r271_Descender * r271_TanSlope, r271_Descender, r271_widths.rhs(r343_swEnd)))));
                return void 0;
            }));
            return void 0;
        });
        r271_xn$createAndSaveGlyphImpl$2Lrc3c('revComma.round', null, function () {
            var _r347_t1;
            var _r347_t0 = this;
            var r347_currentGlyph = _r347_t0;
            var r347_df = r271_DivFrame(r271_para.diversityF);
            r347_currentGlyph.setWidth(r347_df.width);
            r347_currentGlyph.include(r271_CommaShapeT(r347_df.middle, 0, function () {
                var _r351_t1;
                var _r351_t0 = this;
                var r351_currentGlyph = _r351_t0;
                var r351_r = r271_PeriodRadius + 0;
                var r351_ro = r271_PeriodRadius - r271_O;
                var r351_sw = Math.min(r271_AdviceStroke(4), r271_PeriodSize * 0.4);
                var r351_swEnd = Math.min(r271_Stroke, r271_PeriodSize * 0.5);
                var r351_commaOverflow = r271_PeriodRadius - r351_swEnd * 0.5;
                var r351_rFill = r351_ro - r351_sw / 4;
                r351_currentGlyph.include(r271_union(r271_xn$spirooutline$1aao(r271_g4(r351_rFill, r351_rFill), r271_arcvh(), r271_g4(0, 0), r271_archv(), r271_g4(-r351_rFill, r351_rFill), r271_arcvh(), r271_g4(0, 2 * r351_rFill), r271_archv(), r271_close()), r271_dispiro(r271_g4(-r351_r, r351_r, r271_widths.lhs(r351_sw / 4)), r271_arcvh(), r271_g4(0, r271_O, r271_widths.lhs(r351_sw / 2)), r271_archv(), r271_g4(r351_ro, r351_r), r271_arcvh(), r271_g4(0, r351_r + r351_ro), r271_archv(), r271_g4(-r351_ro, r351_r, r271_widths.lhs(r351_sw)), r271_quadControls(0 - r271_TanSlope / 2, 0.5 - r271_TanSlope * r351_r / r271_Descender, 12), r271_g4(r351_commaOverflow + r271_Descender * r271_TanSlope, r271_Descender, r271_widths.lhs(r351_swEnd)))));
                return void 0;
            }));
            return void 0;
        });
        r271_xn$createAndSaveGlyphImpl$2Lrc3c('revComma.square', null, function () {
            var _r355_t1;
            var _r355_t0 = this;
            var r355_currentGlyph = _r355_t0;
            var r355_df = r271_DivFrame(r271_para.diversityF);
            r355_currentGlyph.setWidth(r355_df.width);
            r355_currentGlyph.include(r271_WithTransform(r271_Translate(r355_df.middle, 0), function () {
                var _r359_t1;
                var _r359_t0 = this;
                var r359_currentGlyph = _r359_t0;
                var r359_r = r271_PeriodRadius * r271_DesignParameters.squareDotScalar + 0;
                var r359_sw = Math.min(r271_AdviceStroke(4), r271_PeriodSize * r271_DesignParameters.squareDotScalar * 0.4);
                var r359_swEnd = Math.min(r271_Stroke, r271_PeriodSize * r271_DesignParameters.squareDotScalar * 0.5);
                var r359_commaOverflow = r359_r - r359_swEnd * 0.5;
                r359_currentGlyph.include(r271_union(r271_SquareAt(0, r359_r, r359_r), r271_dispiro(r271_flat(-r359_r, r359_r, r271_widths.lhs(r359_sw)), r271_curl(-r359_r, 0), r271_quadControls(0 - r271_TanSlope / 2, 0.5 - r271_TanSlope * r359_r / r271_Descender, 12), r271_g4(r359_commaOverflow + r271_Descender * r271_TanSlope, r271_Descender, r271_widths.lhs(r359_swEnd)))));
                return void 0;
            }));
            return void 0;
        });
        r271_xn$selectvariant$7Hrq('comma', ',', new r271_xn$NamedParameterPair$2Lrc9b('follow', 'punctuationDot'));
        r271_xn$selectvariant$7Hrq('revComma', 11841, new r271_xn$NamedParameterPair$2Lrc9b('follow', 'punctuationDot'));
        r271_turned('turnComma.round', null, 'comma.round', r271_DivFrame(r271_para.diversityF).middle, r271_PeriodRadius);
        r271_turned('turnComma.square', null, 'comma.square', r271_DivFrame(r271_para.diversityF).middle, r271_PeriodRadius * r271_DesignParameters.squareDotScalar);
        r271_xn$selectvariant$7Hrq('turnComma', 11826, new r271_xn$NamedParameterPair$2Lrc9b('follow', 'punctuationDot'));
        r271_xn$derivecomposites$7Hrq('raisedPeriod.round', null, 'period.round', r271_ApparentTranslate(0, r271_XH / 2 - r271_PeriodRadius));
        r271_xn$derivecomposites$7Hrq('raisedPeriod.square', null, 'period.square', r271_ApparentTranslate(0, r271_XH / 2 - r271_PeriodRadius * r271_DesignParameters.squareDotScalar));
        r271_xn$derivecomposites$7Hrq('raisedComma.round', null, 'comma.round', r271_ApparentTranslate(0, r271_XH / 2 - r271_PeriodRadius));
        r271_xn$derivecomposites$7Hrq('raisedComma.square', null, 'comma.square', r271_ApparentTranslate(0, r271_XH / 2 - r271_PeriodRadius * r271_DesignParameters.squareDotScalar));
        r271_xn$selectvariant$7Hrq('raisedPeriod', 11827, new r271_xn$NamedParameterPair$2Lrc9b('follow', 'punctuationDot'));
        r271_xn$selectvariant$7Hrq('raisedComma', 11828, new r271_xn$NamedParameterPair$2Lrc9b('follow', 'punctuationDot'));
        var _r271_t9 = Object.entries(r271_DotVariants)[Symbol.iterator]();
        var _r271_t10 = void 0;
        while (!(_r271_t10 = _r271_t9.next()).done) {
            _r271_t11 = _r271_t10.value;
            r271_suffix = _r271_t11[0];
            r271_DrawAt = _r271_t11[1][0];
            r271_kDotRadius = _r271_t11[1][1];
            r271_overshoot = _r271_t11[1][2];
            _r271_t11[1];
            (function () {
                r271_xn$createAndSaveGlyphImpl$2Lrc3c('colon.' + r271_suffix, null, function () {
                    var _r371_t1;
                    var _r371_t0 = this;
                    var r371_currentGlyph = _r371_t0;
                    r371_currentGlyph.include(r271_xn$referglyph$1aao('period.' + r271_suffix), r271_AS_BASE, r271_ALSO_METRICS);
                    r371_currentGlyph.include(r271_xn$referglyph$1aao('xhPeriod.' + r271_suffix));
                    r271_xn$createAndSaveGlyphImpl$2Lrc3c('colon/mid.' + r271_suffix, null, function () {
                        var _r376_t1;
                        var _r376_t0 = this;
                        _r376_t0.include(r371_currentGlyph, true, true);
                        _r376_t0.cloneRankFromGlyph(r371_currentGlyph);
                        return _r376_t0.include(function () {
                            var _r378_t1;
                            var _r378_t0 = this;
                            var r378_currentGlyph = _r378_t0;
                            r378_currentGlyph.include(r271_ApparentTranslate(0, r271_SymbolMid - r271_XH / 2));
                            return void 0;
                        });
                    });
                    return void 0;
                });
                r271_xn$createAndSaveGlyphImpl$2Lrc3c('capColon.' + r271_suffix, null, function () {
                    var _r382_t1;
                    var _r382_t0 = this;
                    var r382_currentGlyph = _r382_t0;
                    r382_currentGlyph.include(r271_xn$referglyph$1aao('period.' + r271_suffix), r271_AS_BASE, r271_ALSO_METRICS);
                    r382_currentGlyph.include(r271_xn$referglyph$1aao('capPeriod.' + r271_suffix));
                    return void 0;
                });
                r271_xn$createAndSaveGlyphImpl$2Lrc3c('modifierLetterColon.' + r271_suffix, null, function () {
                    var _r387_t1;
                    var _r387_t0 = this;
                    var r387_currentGlyph = _r387_t0;
                    var r387_df = r271_DivFrame(r271_para.diversityII);
                    r387_currentGlyph.setWidth(r387_df.width);
                    var r387_k = 0.9;
                    var r387_dr = r271_DotRadius * r271_kDotRadius;
                    r387_currentGlyph.include(r271_DrawAt(r387_df.middle, r1_mix(r387_dr, r271_XH - r387_dr, r387_k), r387_dr - r271_overshoot));
                    r387_currentGlyph.include(r271_DrawAt(r387_df.middle, r1_mix(r387_dr, r271_XH - r387_dr, 1 - r387_k), r387_dr - r271_overshoot));
                    return void 0;
                });
                r271_xn$createAndSaveGlyphImpl$2Lrc3c('modifierLetterRaisedColon.' + r271_suffix, null, function () {
                    var _r393_t1;
                    var _r393_t0 = this;
                    var r393_currentGlyph = _r393_t0;
                    var r393_df = r271_DivFrame(r271_para.diversityII);
                    r393_currentGlyph.setWidth(r393_df.width);
                    var r393_k = 0.9;
                    var r393_dr = r271_DotRadius * r271_kDotRadius;
                    r393_currentGlyph.include(r271_DrawAt(r393_df.middle, r271_CAP - r1_mix(r393_dr, r271_XH - r393_dr, r393_k), r393_dr - r271_overshoot));
                    r393_currentGlyph.include(r271_DrawAt(r393_df.middle, r271_CAP - r1_mix(r393_dr, r271_XH - r393_dr, 1 - r393_k), r393_dr - r271_overshoot));
                    return void 0;
                });
                r271_xn$createAndSaveGlyphImpl$2Lrc3c('semicolon.' + r271_suffix, null, function () {
                    var _r399_t1;
                    var _r399_t0 = this;
                    var r399_currentGlyph = _r399_t0;
                    r399_currentGlyph.include(r271_xn$referglyph$1aao('comma.' + r271_suffix), r271_AS_BASE, r271_ALSO_METRICS);
                    r399_currentGlyph.include(r271_xn$referglyph$1aao('xhPeriod.' + r271_suffix));
                    return void 0;
                });
                r271_xn$createAndSaveGlyphImpl$2Lrc3c('invertSemicolon.' + r271_suffix, null, function () {
                    var _r404_t1;
                    var _r404_t0 = this;
                    var r404_currentGlyph = _r404_t0;
                    r404_currentGlyph.include(r271_xn$referglyph$1aao('revComma.' + r271_suffix), r271_AS_BASE, r271_ALSO_METRICS);
                    r404_currentGlyph.include(r271_xn$referglyph$1aao('xhPeriod.' + r271_suffix));
                    return void 0;
                });
                var r368_multiDotShift = r271_RightSB - r271_DotRadius * r271_kDotRadius - r271_Middle;
                var r368_multiDotShiftDense = r1_mix(r271_Width, r271_RightSB, 0.5) - r271_DotRadius * r271_kDotRadius - r271_Middle;
                r271_xn$createAndSaveGlyphImpl$2Lrc3c('threeDotPunct.' + r271_suffix, null, function () {
                    var _r409_t1;
                    var _r409_t0 = this;
                    var r409_currentGlyph = _r409_t0;
                    r409_currentGlyph.include(r271_WithTransform(r271_ApparentTranslate(+r368_multiDotShift, 0), function () {
                        var _r412_t1;
                        var _r412_t0 = this;
                        var r412_currentGlyph = _r412_t0;
                        r412_currentGlyph.include(r271_xn$referglyph$1aao('smallPeriod.' + r271_suffix), true, true);
                        r412_currentGlyph.include(r271_xn$referglyph$1aao('xhSmallPeriod.' + r271_suffix));
                        return void 0;
                    }));
                    r409_currentGlyph.include(r271_WithTransform(r271_ApparentTranslate(-r368_multiDotShift, 0), function () {
                        var _r417_t1;
                        var _r417_t0 = this;
                        var r417_currentGlyph = _r417_t0;
                        r417_currentGlyph.include(r271_xn$referglyph$1aao('halfXhSmallPeriod.' + r271_suffix), true, true);
                        return void 0;
                    }));
                    return void 0;
                });
                r271_xn$createAndSaveGlyphImpl$2Lrc3c('fourDotPunct.' + r271_suffix, null, function () {
                    var _r421_t1;
                    var _r421_t0 = this;
                    var r421_currentGlyph = _r421_t0;
                    r421_currentGlyph.include(r271_xn$referglyph$1aao('smallPeriod.' + r271_suffix));
                    r421_currentGlyph.include(r271_xn$referglyph$1aao('xhSmallPeriod.' + r271_suffix));
                    r421_currentGlyph.include(r271_WithTransform(r271_ApparentTranslate(+r368_multiDotShiftDense, 0), function () {
                        var _r426_t1;
                        var _r426_t0 = this;
                        var r426_currentGlyph = _r426_t0;
                        r426_currentGlyph.include(r271_xn$referglyph$1aao('halfXhSmallPeriod.' + r271_suffix), true, true);
                        return void 0;
                    }));
                    r421_currentGlyph.include(r271_WithTransform(r271_ApparentTranslate(-r368_multiDotShiftDense, 0), function () {
                        var _r430_t1;
                        var _r430_t0 = this;
                        var r430_currentGlyph = _r430_t0;
                        r430_currentGlyph.include(r271_xn$referglyph$1aao('halfXhSmallPeriod.' + r271_suffix), true, true);
                        return void 0;
                    }));
                    return void 0;
                });
                r271_xn$createAndSaveGlyphImpl$2Lrc3c('capFourDotPunct.' + r271_suffix, null, function () {
                    var _r434_t1;
                    var _r434_t0 = this;
                    var r434_currentGlyph = _r434_t0;
                    r434_currentGlyph.include(r271_xn$referglyph$1aao('smallPeriod.' + r271_suffix));
                    r434_currentGlyph.include(r271_xn$referglyph$1aao('capSmallPeriod.' + r271_suffix));
                    r434_currentGlyph.include(r271_WithTransform(r271_ApparentTranslate(+r368_multiDotShiftDense, 0), function () {
                        var _r439_t1;
                        var _r439_t0 = this;
                        var r439_currentGlyph = _r439_t0;
                        r439_currentGlyph.include(r271_xn$referglyph$1aao('halfCapSmallPeriod.' + r271_suffix), true, true);
                        return void 0;
                    }));
                    r434_currentGlyph.include(r271_WithTransform(r271_ApparentTranslate(-r368_multiDotShiftDense, 0), function () {
                        var _r443_t1;
                        var _r443_t0 = this;
                        var r443_currentGlyph = _r443_t0;
                        r443_currentGlyph.include(r271_xn$referglyph$1aao('halfCapSmallPeriod.' + r271_suffix), true, true);
                        return void 0;
                    }));
                    return void 0;
                });
                r271_xn$createAndSaveGlyphImpl$2Lrc3c('fiveDotPunct.' + r271_suffix, null, function () {
                    var _r447_t1;
                    var _r447_t0 = this;
                    var r447_currentGlyph = _r447_t0;
                    r447_currentGlyph.include(r271_WithTransform(r271_ApparentTranslate(-r368_multiDotShiftDense, 0), function () {
                        var _r450_t1;
                        var _r450_t0 = this;
                        var r450_currentGlyph = _r450_t0;
                        r450_currentGlyph.include(r271_xn$referglyph$1aao('smallPeriod.' + r271_suffix), true, true);
                        r450_currentGlyph.include(r271_xn$referglyph$1aao('xhSmallPeriod.' + r271_suffix));
                        return void 0;
                    }));
                    r447_currentGlyph.include(r271_WithTransform(r271_ApparentTranslate(+r368_multiDotShiftDense, 0), function () {
                        var _r455_t1;
                        var _r455_t0 = this;
                        var r455_currentGlyph = _r455_t0;
                        r455_currentGlyph.include(r271_xn$referglyph$1aao('smallPeriod.' + r271_suffix), true, true);
                        r455_currentGlyph.include(r271_xn$referglyph$1aao('xhSmallPeriod.' + r271_suffix));
                        return void 0;
                    }));
                    r447_currentGlyph.include(r271_xn$referglyph$1aao('halfXhSmallPeriod.' + r271_suffix));
                    return void 0;
                });
                return r271_xn$createAndSaveGlyphImpl$2Lrc3c('dottedCross.' + r271_suffix, null, function () {
                    var _r461_t1;
                    var _r461_t0 = this;
                    var r461_currentGlyph = _r461_t0;
                    r461_currentGlyph.include(r271_HBar.m(r1_mix(0, r271_SB, 0.5), r1_mix(r271_Width, r271_RightSB, 0.5), r271_XH / 2, r271_OperatorStroke));
                    r461_currentGlyph.include(r271_VBar.m(r271_Middle, 0, r271_XH, r271_OperatorStroke));
                    var r461_radius = 0.5 * r271_AdviceStroke(3) * r271_HVContrast;
                    r461_currentGlyph.include(r271_DrawAt(r271_SB + r461_radius, r271_XH * 0.75, r271_kDotRadius * r461_radius - r271_overshoot));
                    r461_currentGlyph.include(r271_DrawAt(r271_SB + r461_radius, r271_XH * 0.25, r271_kDotRadius * r461_radius - r271_overshoot));
                    r461_currentGlyph.include(r271_DrawAt(r271_RightSB - r461_radius, r271_XH * 0.75, r271_kDotRadius * r461_radius - r271_overshoot));
                    r461_currentGlyph.include(r271_DrawAt(r271_RightSB - r461_radius, r271_XH * 0.25, r271_kDotRadius * r461_radius - r271_overshoot));
                    return void 0;
                });
            }());
        }
        r271_xn$selectvariant$7Hrq('colon', ':', new r271_xn$NamedParameterPair$2Lrc9b('follow', 'punctuationDot'));
        r271_xn$selectvariant$7Hrq('colon/mid', new r271_xn$NamedParameterPair$2Lrc9b('follow', 'punctuationDot'));
        r271_xn$selectvariant$7Hrq('modifierLetterColon', 42889, new r271_xn$NamedParameterPair$2Lrc9b('follow', 'punctuationDot'));
        r271_xn$selectvariant$7Hrq('modifierLetterRaisedColon', 760, new r271_xn$NamedParameterPair$2Lrc9b('follow', 'punctuationDot'));
        r271_xn$selectvariant$7Hrq('semicolon', ';', new r271_xn$NamedParameterPair$2Lrc9b('follow', 'punctuationDot'));
        r271_xn$selectvariant$7Hrq('invertSemicolon', 8271, new r271_xn$NamedParameterPair$2Lrc9b('follow', 'punctuationDot'));
        r271_xn$selectvariant$7Hrq('threeDotPunct', 8278, new r271_xn$NamedParameterPair$2Lrc9b('follow', 'punctuationDot'));
        r271_xn$selectvariant$7Hrq('fourDotPunct', 8280, new r271_xn$NamedParameterPair$2Lrc9b('follow', 'punctuationDot'));
        r271_xn$selectvariant$7Hrq('fiveDotPunct', 8281, new r271_xn$NamedParameterPair$2Lrc9b('follow', 'punctuationDot'));
        r271_xn$selectvariant$7Hrq('capColon', 8282, new r271_xn$NamedParameterPair$2Lrc9b('follow', 'punctuationDot'));
        r271_xn$selectvariant$7Hrq('capFourDotPunct', 8283, new r271_xn$NamedParameterPair$2Lrc9b('follow', 'punctuationDot'));
        r271_xn$selectvariant$7Hrq('dottedCross', 8284, new r271_xn$NamedParameterPair$2Lrc9b('follow', 'punctuationDot'));
        r271_alias('greekquestion', 894, 'semicolon');
        r271_turned('turnSemiColon', 11829, 'semicolon', r271_DivFrame(r271_para.diversityF).middle, r271_XH / 2);
        var r271_RingCommaStroke = function (r480_mx, r480_my, r480_rad, r480_s, r480_k1x, r480_k1y, r480_k2x, r480_k2y) {
            var _r480_t0, _r480_t1;
            var r480_u = r480_my + r480_rad;
            var r480_d = r480_my - r480_rad;
            var r480_l = r480_mx - r480_rad;
            var r480_r = r480_mx + r480_rad;
            var r480_fine = r480_s * r271_CThin;
            return r271_dispiro(r271_widths.rhs(r1_fallback(r480_fine)), r271_g4(r480_mx, r480_u - r480_s + r480_fine, r271_heading(r271_Rightward)), r271_archv(), r271_g4(r480_r - r480_s + r1_mix(r480_fine, r480_s, 0.5), r480_my, r271_widths.rhs(r1_mix(r480_fine, r480_s, 0.5))), r271_arcvh(), r271_g4(r480_mx, r480_d, r271_widths.rhs.heading(r480_s, r271_Leftward)), r271_archv(), r271_g4(r480_l, r480_my), r271_arcvh(), r271_g4(r480_mx, r480_u, r271_heading(r271_Rightward)), r271_archv(), r271_g4(r480_r, r480_my, r271_widths.rhs(r480_fine)), r271_flat(r480_mx + r480_rad * r480_k1x, r480_d + r480_rad * r480_k1y, r271_widths.rhs(r480_s)), r271_curl(r480_mx - r480_rad * r480_k2x, r480_d - r480_rad * r480_k2y));
        };
        r271_xn$createAndSaveGlyphImpl$2Lrc3c('hollowColon', 10626, function () {
            var _r483_t1;
            var _r483_t0 = this;
            var r483_currentGlyph = _r483_t0;
            var r483_df = r271_DivFrame(r271_para.diversityF);
            r483_currentGlyph.setWidth(r483_df.width);
            var r483_sw = r271_AdviceStroke(5);
            var r483_dotRadius = Math.max(r271_PeriodRadius, r271_XH / 8);
            r483_currentGlyph.include(r271_RingStrokeAt(r483_df.middle, r271_XH - r483_dotRadius, r483_dotRadius + r483_sw / 2 - r271_O, r483_sw));
            r483_currentGlyph.include(r271_RingStrokeAt(r483_df.middle, r483_dotRadius, r483_dotRadius + r483_sw / 2 - r271_O, r483_sw));
            return void 0;
        });
        r271_xn$createAndSaveGlyphImpl$2Lrc3c('zNotationSchemaComposition', 10783, function () {
            var _r489_t1;
            var _r489_t0 = this;
            var r489_currentGlyph = _r489_t0;
            var r489_df = r271_DivFrame(r271_para.diversityF);
            r489_currentGlyph.setWidth(r489_df.width);
            var r489_sw = r271_AdviceStroke(5);
            var r489_dotRadius = Math.max(r271_PeriodRadius, r271_XH / 8);
            r489_currentGlyph.include(r271_RingStrokeAt(r489_df.middle, r271_XH - r489_dotRadius, r489_dotRadius + r489_sw / 2 - r271_O, r489_sw));
            r489_currentGlyph.include(r271_intersection(r271_MaskAbove(r271_Descender), r271_RingCommaStroke(r489_df.middle, r489_dotRadius, r489_dotRadius + r489_sw / 2 - r271_O, r489_sw, 0.75, 0, 1, 3)));
            return void 0;
        });
        return r271_xn$createAndSaveGlyphImpl$2Lrc3c('zNotationRelationalComposition', 10814, function () {
            var _r495_t1;
            var _r495_t0 = this;
            var r495_currentGlyph = _r495_t0;
            var r495_df = r271_DivFrame(r271_para.diversityF);
            r495_currentGlyph.setWidth(r495_df.width);
            var r495_sw = r271_AdviceStroke(6.5);
            var r495_dotRadius = 0.625 * Math.max(r271_PeriodRadius, r271_XH / 8);
            r495_currentGlyph.include(r271_RingStrokeAt(r495_df.middle, 0.625 * r271_XH - r495_dotRadius, r495_dotRadius + r495_sw / 2 - r271_O, r495_sw));
            r495_currentGlyph.include(r271_intersection(r271_MaskAbove(r271_Descender * 0.75), r271_RingCommaStroke(r495_df.middle, r495_dotRadius, r495_dotRadius + r495_sw / 2 - r271_O, r495_sw, 0.75, 0, 0.75, 3)));
            return void 0;
        });
    });
    return void 0;
});
