'use strict';
import * as _s0_t0 from '../../../support/utils.mjs';
import * as _s0_t1 from '../../../support/gr.mjs';
var _s0_t2;
export {
    _s0_t2 as apply
};
var r1_apply, _r1_t0, _r1_t1, _r1_t3, _r1_t4, _r1_t5, _r1_t6, _r1_t7, _r1_t10;
var _r1_t2 = function _r1_t10(r374_t) {
    var r374_n, r374_i, r374_a, _r374_t3, _r374_t4, _r374_t5, _r374_t6, _r374_t7, _r374_t8, _r374_t9, _r374_t10, _r374_t11, _r374_t12, _r374_t13, _r374_t14, _r374_t15, _r374_t16, _r374_t17, _r374_t18, _r374_t19, _r374_t20, _r374_t21, _r374_t22, _r374_t23, _r374_t24, _r374_t25, _r374_t26;
    var _r374_t0 = function () {
        _r374_t7 = function (_r374_t8) {
            _r374_t0 = function () {
                throw 'Iteration Stopped';
            };
            return {
                'done': true,
                'value': _r374_t8
            };
        };
        _r374_t9 = r374_t instanceof Array;
        if (_r374_t9) {
            _r374_t10 = r374_n = r374_t.length;
            _r374_t11 = r374_i = 0;
            _r374_t12 = function (_r374_t14) {
                return _r374_t7(_r374_t14);
            };
            _r374_t13 = function (_r374_t15) {
                _r374_t16 = r374_i < r374_n;
                if (_r374_t16) {
                    _r374_t0 = function (_r374_t17) {
                        return _r374_t13(r374_i = r374_i + 1);
                    };
                    return {
                        'value': [
                            r374_i,
                            r374_t[r374_i]
                        ],
                        'done': false
                    };
                } else
                    return _r374_t12(_r374_t15);
            };
            return _r374_t13();
        } else {
            _r374_t18 = r374_a = Object.keys(r374_t);
            _r374_t19 = r374_n = r374_a.length;
            _r374_t20 = r374_i = 0;
            _r374_t21 = function (_r374_t23) {
                return _r374_t7(_r374_t23);
            };
            _r374_t22 = function (_r374_t24) {
                _r374_t25 = r374_i < r374_n;
                if (_r374_t25) {
                    _r374_t0 = function (_r374_t26) {
                        return _r374_t22(r374_i = r374_i + 1);
                    };
                    return {
                        'value': [
                            r374_a[r374_i],
                            r374_t[r374_a[r374_i]]
                        ],
                        'done': false
                    };
                } else
                    return _r374_t21(_r374_t24);
            };
            return _r374_t22();
        }
    };
    var _r374_t1 = function (x) {
        try {
            return _r374_t0(x);
        } catch (ex) {
            return _r374_t2(ex);
        }
    };
    var _r374_t2 = function (e) {
        throw e;
    };
    if (this instanceof _r1_t10)
        _r374_t3 = this;
    else {
        _r374_t4 = function () {
            void 0;
        };
        _r374_t4.prototype = _r1_t10.prototype;
        _r374_t3 = new _r374_t4();
    }
    _r374_t3[Symbol.iterator] = function () {
        return _r374_t3;
    };
    _r374_t3.next = _r374_t1;
    _r374_t3.throw = function (x) {
        return _r374_t2(x);
    };
    return _r374_t3;
};
var _r1_t8 = _s0_t0;
var r1_mix = _r1_t8.mix;
var r1_fallback = _r1_t8.fallback;
var r1_SuffixCfg = _r1_t8.SuffixCfg;
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
    r270_xn$Capture_Ext$2Lrc2b['$defineGlyphBlockImpl$'](r270_xn$Capture_Ext$2Lrc2b, 'Letter-Latin-W', function (r271_xn$Capture$2Lrc8, r271_xn$ExportCapture$2Lrc4b) {
        var r271_suffix, r271_implT, r271_hookTopImplT, r271_bodyType, r271_slabType, _r271_t10, _r271_t13, _r271_t14, _r271_t15, _r271_tag16;
        var _r271_t0 = r271_xn$Capture$2Lrc8;
        var r271_xn$createAndSaveGlyphImpl$2Lrc3c = _r271_t0['$createAndSaveGlyphImpl$'];
        var r271_xn$NamedParameterPair$2Lrc9b = _r271_t0['$NamedParameterPair$'];
        var r271_xn$assignUnicodeImpl$2Lrc8b = _r271_t0['$assignUnicodeImpl$'];
        var r271_xn$execState$2Lrc0b = _r271_t0['$execState$'];
        var r271_para = _r271_t0.para;
        var r271_MarkSet = _r271_t0.MarkSet;
        var r271_tagged = _r271_t0.tagged;
        var r271_DivFrame = _r271_t0.DivFrame;
        var _r271_t1 = r271_xn$Capture$2Lrc8.Metrics;
        var r271_SB = _r271_t1.SB;
        var r271_CAP = _r271_t1.CAP;
        var r271_XH = _r271_t1.XH;
        var r271_ApparentTranslate = _r271_t1.ApparentTranslate;
        var r271_TanSlope = _r271_t1.TanSlope;
        var r271_HVContrast = _r271_t1.HVContrast;
        var r271_Upward = _r271_t1.Upward;
        var r271_Downward = _r271_t1.Downward;
        var r271_O = _r271_t1.O;
        var r271_OX = _r271_t1.OX;
        var r271_TailX = _r271_t1.TailX;
        var r271_TailY = _r271_t1.TailY;
        var r271_Stroke = _r271_t1.Stroke;
        var r271_Jut = _r271_t1.Jut;
        var r271_CThin = _r271_t1.CThin;
        var r271_SLAB = _r271_t1.SLAB;
        var r271_HalfStroke = _r271_t1.HalfStroke;
        var r271_RightSB = _r271_t1.RightSB;
        var r271_Middle = _r271_t1.Middle;
        var r271_CorrectionOMidX = _r271_t1.CorrectionOMidX;
        var r271_AdviceStroke = _r271_t1.AdviceStroke;
        var r271_AdviceStroke2 = _r271_t1.AdviceStroke2;
        var _r271_t2 = r271_xn$Capture$2Lrc8.SpiroFns;
        var r271_g4 = _r271_t2.g4;
        var r271_corner = _r271_t2.corner;
        var r271_flat = _r271_t2.flat;
        var r271_curl = _r271_t2.curl;
        var r271_end = _r271_t2.end;
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
        var r271_difference = _r271_t3.difference;
        var _r271_t4 = r271_xn$Capture$2Lrc8.CommonShapes.resolve();
        var r271_xn$noshape$3cah = _r271_t4['no-shape'];
        var r271_HSerif = _r271_t4.HSerif;
        var r271_NeedSlab = _r271_t4.NeedSlab;
        var r271_FlipAround = _r271_t4.FlipAround;
        var r271_DiagCorDs = _r271_t4.DiagCorDs;
        var _r271_t5 = r271_xn$Capture$2Lrc8['Common-Derivatives'].resolve();
        var r271_xn$selectvariant$7Hrq = _r271_t5['select-variant'];
        var r271_alias = _r271_t5.alias;
        var r271_turned = _r271_t5.turned;
        var r271_xn$linkreducedvariant$5sIl8 = _r271_t5['link-reduced-variant'];
        var _r271_t6 = r271_xn$Capture$2Lrc8['Letter-Shared-Shapes'].resolve();
        var r271_DiagonalTailInnerRadius = _r271_t6.DiagonalTailInnerRadius;
        var r271_SerifFrame = _r271_t6.SerifFrame;
        var r271_VerticalHook = _r271_t6.VerticalHook;
        var _r271_t7 = r271_xn$Capture$2Lrc8['Letter-Latin-Upper-M'].resolve();
        var r271_MShape = _r271_t7.MShape;
        var r271_xn$FORMCURLY$5sIl = 0;
        var r271_xn$FORMSTRAIGHT$5sIl = 1;
        var r271_xn$FORMFLATTOP$5sIl5 = 2;
        var r271_xn$FORMDOUBLEV$5sIl7 = 3;
        var r271_xn$FORMASYMMETRIC$5sIl = 4;
        var r271_xn$FORMCYRLOMEGA$5sIl5 = 5;
        var r271_xn$SERIFSNONE$7Hrq = 0;
        var r271_xn$SERIFSAUTO$7Hrq = 1;
        var r271_xn$SERIFSMOTION$7Hrq = 2;
        var r271_xn$SERIFSDOUBLEV$7Hrq7 = 3;
        var r271_xn$SERIFSASYMMETRIC$7Hrq = 4;
        var r271_xn$SERIFSCURSIVE$7Hrq = 5;
        var r271_xn$SERIFSCYRLOMEGA$7Hrq5 = 6;
        var r271_xn$SERIFSALL$7Hrq = 7;
        var r271_xn$SERIFSDOUBLEVALL$7Hrq72 = 8;
        var r271_xn$SERIFSASYMMETRICALL$7Hrq1b = 9;
        var r271_CwFineOuter = 5;
        var r271_CwFineInner = 6;
        var r271_CwFineOuterStraight = 5.5;
        var r271_CwFineInnerStraight = 5.5;
        var r271_CwFineInnerDoubleV = 4.25;
        var r271_CwOuterStrokeCurly = 2.5;
        var r271_CwOuterStrokeStraight1 = 2.5;
        var r271_CwOuterStrokeStraight2 = 3;
        var r271_CwDoubleV = 3.625;
        var r271_CwCyrlOmega = 3;
        var r271_CwWCoCurly = 5;
        var r271_CwWCoStraight = 3.5;
        var r271_CwWCoDoubleV = 3.5;
        var r271_PXBot1Curly = 0.25;
        var r271_PXBot1Straight = 0.235;
        var r271_WDim = function (r276_df, r276_top, r276_bodyType) {
            var r276__, r276___, _r276_t0, _r276_t1, _r276_t2, _r276_t3, _r276_t4, _r276_t5, _r276_t6, _r276_t7, _r276_t8, _r276_t9, _r276_t10, _r276_t11;
            var r276_strokeOuter = (_r276_t0 = r276_bodyType, _r276_t0 === r271_xn$FORMCURLY$5sIl ? r271_AdviceStroke(r271_CwOuterStrokeCurly, Math.sqrt(r276_df.div)) : _r276_t0 === r271_xn$FORMSTRAIGHT$5sIl ? r271_AdviceStroke(r271_CwOuterStrokeStraight1, Math.sqrt(r276_df.div)) : _r276_t0 === r271_xn$FORMFLATTOP$5sIl5 ? r271_AdviceStroke(r271_CwOuterStrokeStraight2, Math.sqrt(r276_df.div)) : _r276_t0 === r271_xn$FORMDOUBLEV$5sIl7 ? r271_AdviceStroke(r271_CwDoubleV, Math.sqrt(r276_df.div)) : _r276_t0 === r271_xn$FORMASYMMETRIC$5sIl ? r271_AdviceStroke(r271_CwDoubleV, Math.sqrt(r276_df.div)) : _r276_t0 === r271_xn$FORMCYRLOMEGA$5sIl5 ? r271_AdviceStroke(r271_CwCyrlOmega, Math.sqrt(r276_df.div)) : void 0);
            var r276_fineOuter = (_r276_t1 = r276_bodyType, _r276_t1 === r271_xn$FORMCURLY$5sIl ? r271_AdviceStroke(r271_CwFineOuter, r276_df.div) : _r276_t1 === r271_xn$FORMSTRAIGHT$5sIl ? r271_AdviceStroke(r271_CwFineOuterStraight, Math.sqrt(r276_df.div)) : _r276_t1 === r271_xn$FORMFLATTOP$5sIl5 ? r271_AdviceStroke(r271_CwFineOuterStraight, Math.sqrt(r276_df.div)) : _r276_t1 === r271_xn$FORMDOUBLEV$5sIl7 ? r271_AdviceStroke(r271_CwDoubleV, Math.sqrt(r276_df.div)) : _r276_t1 === r271_xn$FORMASYMMETRIC$5sIl ? r271_AdviceStroke(r271_CwDoubleV, Math.sqrt(r276_df.div)) : _r276_t1 === r271_xn$FORMCYRLOMEGA$5sIl5 ? r271_AdviceStroke(r271_CwCyrlOmega, Math.sqrt(r276_df.div)) : void 0);
            var r276_fineInner = (_r276_t2 = r276_bodyType, _r276_t2 === r271_xn$FORMCURLY$5sIl ? r271_AdviceStroke(r271_CwFineInner, r276_df.div) : _r276_t2 === r271_xn$FORMSTRAIGHT$5sIl ? r271_AdviceStroke(r271_CwFineInnerStraight, Math.sqrt(r276_df.div)) : _r276_t2 === r271_xn$FORMFLATTOP$5sIl5 ? r271_AdviceStroke(r271_CwFineInnerStraight, Math.sqrt(r276_df.div)) : _r276_t2 === r271_xn$FORMDOUBLEV$5sIl7 ? r271_AdviceStroke(r271_CwFineInnerDoubleV, Math.sqrt(r276_df.div)) : _r276_t2 === r271_xn$FORMASYMMETRIC$5sIl ? r271_AdviceStroke(r271_CwDoubleV, Math.sqrt(r276_df.div)) : _r276_t2 === r271_xn$FORMCYRLOMEGA$5sIl5 ? r271_AdviceStroke(r271_CwCyrlOmega, Math.sqrt(r276_df.div)) : void 0);
            var r276_fineHeight = (r276_fineOuter + r276_fineInner) / 2;
            var r276_wCo = (_r276_t3 = r276_bodyType, _r276_t3 === r271_xn$FORMCURLY$5sIl ? r271_AdviceStroke(r271_CwWCoCurly, r276_df.div) : _r276_t3 === r271_xn$FORMSTRAIGHT$5sIl ? r271_AdviceStroke(r271_CwWCoStraight, r276_df.div) : _r276_t3 === r271_xn$FORMFLATTOP$5sIl5 ? r271_AdviceStroke(r271_CwWCoStraight, r276_df.div) : _r276_t3 === r271_xn$FORMDOUBLEV$5sIl7 ? r271_AdviceStroke(r271_CwWCoDoubleV, r276_df.div) : _r276_t3 === r271_xn$FORMASYMMETRIC$5sIl ? r271_AdviceStroke(r271_CwWCoDoubleV, r276_df.div) : _r276_t3 === r271_xn$FORMCYRLOMEGA$5sIl5 ? r271_AdviceStroke(r271_CwWCoDoubleV, r276_df.div) : void 0);
            var r276_wCo2 = (_r276_t4 = r276_bodyType, _r276_t4 === r271_xn$FORMCYRLOMEGA$5sIl5 ? r271_AdviceStroke(r271_CwCyrlOmega, r276_df.div) : (r276__ = _r276_t4, r276_wCo));
            var r276_kWCoShrink = r271_CThin;
            var r276_pxBot1 = (_r276_t5 = r276_bodyType, _r276_t5 === r271_xn$FORMCURLY$5sIl ? 0.25 : _r276_t5 === r271_xn$FORMSTRAIGHT$5sIl ? 0.235 : _r276_t5 === r271_xn$FORMFLATTOP$5sIl5 ? 0.235 : _r276_t5 === r271_xn$FORMDOUBLEV$5sIl7 ? 0.315 : _r276_t5 === r271_xn$FORMASYMMETRIC$5sIl ? 0.3 : _r276_t5 === r271_xn$FORMCYRLOMEGA$5sIl5 ? 0.265 : void 0);
            var r276_botMixOffset = 0.5 * r271_HVContrast * r276_wCo2;
            var r276_xBot1 = (r276_bodyType ? r271_O : 0) + r1_mix(r276_df.leftSB + r276_botMixOffset, r276_df.rightSB - r276_botMixOffset, r276_pxBot1);
            var r276_xBot2 = r276_df.width - r276_xBot1;
            var r276_topWithoutSerif = r271_SLAB ? r276_top - r271_Stroke : r276_top;
            var r276_wMidHeight = (_r276_t6 = r276_bodyType, _r276_t6 === r271_xn$FORMCURLY$5sIl ? r276_top * 0.6 : _r276_t6 === r271_xn$FORMSTRAIGHT$5sIl ? r276_topWithoutSerif * 0.72 : _r276_t6 === r271_xn$FORMFLATTOP$5sIl5 ? r276_topWithoutSerif : _r276_t6 === r271_xn$FORMDOUBLEV$5sIl7 ? r276_top : _r276_t6 === r271_xn$FORMASYMMETRIC$5sIl ? r276_top : _r276_t6 === r271_xn$FORMCYRLOMEGA$5sIl5 ? r276_top : void 0);
            var r276_xRight1 = (_r276_t7 = r276_bodyType, _r276_t7 === r271_xn$FORMDOUBLEV$5sIl7 || _r276_t7 === r271_xn$FORMASYMMETRIC$5sIl || _r276_t7 === r271_xn$FORMCYRLOMEGA$5sIl5 ? r1_mix(r276_df.leftSB + r276_botMixOffset, r276_df.rightSB - r276_botMixOffset, 2 * r276_pxBot1) : (r276___ = _r276_t7, r276_bodyType < r271_xn$FORMDOUBLEV$5sIl7 ? r276_df.middle : void 0));
            var r276_xLeft2 = r276_df.width - r276_xRight1;
            var r276_corWCo = r271_DiagCorDs(r276_wMidHeight, r276_xRight1 - r276_xBot1, r276_wCo);
            var r276_wCoCr = r276_corWCo * r276_wCo;
            var r276_corFOuter = r271_DiagCorDs(r276_top, r276_xBot1 - r276_df.leftSB, r276_fineOuter);
            var r276_fineOuterCr = Math.min(r276_kWCoShrink * r276_wCoCr, r276_corFOuter * r276_fineOuter);
            var r276_strokeOuterCr = r276_corFOuter * r276_strokeOuter;
            var r276_corFInner = r271_DiagCorDs(r276_wMidHeight, r276_xRight1 - r276_xBot1, r276_fineInner);
            var r276_fineInnerCr = Math.min(r276_wCoCr, r276_corFInner * r276_fineInner);
            var r276_fineInnerCrTop = (_r276_t8 = r276_bodyType, _r276_t8 === r271_xn$FORMDOUBLEV$5sIl7 ? r276_fineInnerCr : _r276_t8 === r271_xn$FORMASYMMETRIC$5sIl ? r276_fineInnerCr : _r276_t8 === r271_xn$FORMCYRLOMEGA$5sIl5 ? r276_fineInnerCr : (r276___ = _r276_t8, r276_kWCoShrink * r276_wCoCr));
            var r276_curlyStraightSegLength = (_r276_t9 = r276_bodyType, _r276_t9 === r271_xn$FORMCURLY$5sIl ? 0.25 : (r276___ = _r276_t9, 0.05));
            return {
                'xBot1': r276_xBot1,
                'xBot2': r276_xBot2,
                'strokeOuter': r276_strokeOuter,
                'strokeOuterCr': r276_strokeOuterCr,
                'fineOuter': r276_fineOuter,
                'fineOuterCr': r276_fineOuterCr,
                'fineInner': r276_fineInner,
                'fineInnerCr': r276_fineInnerCr,
                'fineInnerCrTop': r276_fineInnerCrTop,
                'fineHeight': r276_fineHeight,
                'wMidHeight': r276_wMidHeight,
                'xRight1': r276_xRight1,
                'xLeft2': r276_xLeft2,
                'wCoCr': r276_wCoCr,
                'curlyStraightSegLength': r276_curlyStraightSegLength
            };
        };
        var r271_WShapeImpl = function (r277_df, r277_top, r277_bodyType, r277_slabType) {
            var _r277_t0, _r277_t1;
            return function () {
                var r279__, r279___, r279_jut, _r279_t0, _r279_t1, _r279_t2, _r279_t3, _r279_t4, _r279_t5, _r279_t7;
                var _r279_t6 = this;
                var r279_currentGlyph = _r279_t6;
                var r279_dim = r271_WDim(r277_df, r277_top, r277_bodyType);
                r279_currentGlyph.include(r271_tagged('strokeDown1', (_r279_t0 = r277_bodyType, _r279_t0 === r271_xn$FORMCURLY$5sIl || _r279_t0 === r271_xn$FORMCYRLOMEGA$5sIl5 ? r271_dispiro(r271_widths.lhs(r279_dim.strokeOuter), r271_flat(r277_df.leftSB, r277_top, r271_heading(r271_Downward)), r271_curl(r277_df.leftSB, r277_top * (1 - r279_dim.curlyStraightSegLength), r271_heading(r271_Downward)), r271_quadControls(0, 0.3, 6, r271_unimportant), r271_g4(r279_dim.xBot1 - 0.5 * r271_HVContrast * r279_dim.wCoCr, 0, r271_widths.lhs.heading(r279_dim.fineOuterCr, r271_Downward))) : (r279__ = _r279_t0, r271_dispiro(r271_widths.lhs(r279_dim.strokeOuterCr), r271_flat(r277_df.leftSB + r271_O * 2, r277_top, r271_heading(r271_Downward)), r271_g4(r279_dim.xBot1 - 0.5 * r271_HVContrast * r279_dim.wCoCr, 0, r271_widths.lhs.heading(r279_dim.fineOuterCr, r271_Downward)))))));
                r279_currentGlyph.include(r271_tagged('strokeUp2', (_r279_t1 = r277_bodyType, _r279_t1 === r271_xn$FORMCURLY$5sIl || _r279_t1 === r271_xn$FORMCYRLOMEGA$5sIl5 ? r271_dispiro(r271_widths.rhs(r279_dim.strokeOuter), r271_flat(r277_df.rightSB, r277_top, r271_heading(r271_Downward)), r271_curl(r277_df.rightSB, r277_top * (1 - r279_dim.curlyStraightSegLength), r271_heading(r271_Downward)), r271_quadControls(0, 0.3, 6, r271_unimportant), r271_g4(r279_dim.xBot2 + 0.5 * r271_HVContrast * r279_dim.wCoCr, 0, r271_widths.rhs.heading(r279_dim.fineOuterCr, r271_Downward))) : (r279__ = _r279_t1, r271_dispiro(r271_widths.rhs(r279_dim.strokeOuterCr), r271_flat(r277_df.rightSB - r271_O * 2, r277_top, r271_heading(r271_Downward)), r271_g4(r279_dim.xBot2 + 0.5 * r271_HVContrast * r279_dim.wCoCr, 0, r271_widths.rhs.heading(r279_dim.fineOuterCr, r271_Downward)))))));
                var r279_kTopShift = (_r279_t2 = r277_bodyType, _r279_t2 === r271_xn$FORMDOUBLEV$5sIl7 ? 0 : _r279_t2 === r271_xn$FORMASYMMETRIC$5sIl ? 0 : _r279_t2 === r271_xn$FORMCYRLOMEGA$5sIl5 ? 0 : (r279___ = _r279_t2, 1));
                var r279_k1 = 0.5;
                var r279_k2 = 1 - r279_k1;
                var r279_shiftT = r279_kTopShift * r271_HVContrast * (0.5 * r279_dim.wCoCr - 0.5 * r279_dim.fineInnerCrTop);
                var r279_shiftB = r271_HVContrast * (0.5 * r279_dim.wCoCr - 0.5 * r279_dim.fineOuterCr);
                r279_currentGlyph.include(r271_tagged('strokeUp1', r271_difference(r271_dispiro(r271_flat(r279_dim.xRight1 - r279_shiftT, r279_dim.wMidHeight, r271_widths.center.heading(r279_dim.fineInnerCrTop, r271_Downward)), r271_curl(r279_dim.xBot1 + r279_shiftB, 0, r271_widths.center.heading(r279_dim.fineOuterCr, r271_Downward))), (_r279_t3 = r277_bodyType, _r279_t3 === r271_xn$FORMCYRLOMEGA$5sIl5 ? r271_xn$spirooutline$1aao(r271_corner(r277_df.width, r279_dim.wMidHeight + 1), r271_corner(r279_dim.xLeft2, r279_dim.wMidHeight + 1), r271_flat(r279_dim.xLeft2, r279_dim.wMidHeight), r271_curl(r279_dim.xLeft2, r279_dim.wMidHeight * (1 - r279_dim.curlyStraightSegLength)), r271_quadControls(0, 0.3, 6, r271_unimportant), r271_corner(r279_dim.xBot2 - r279_shiftB, 0), r271_corner(r277_df.width, 0)) : _r279_t3 === r271_xn$FORMASYMMETRIC$5sIl ? r271_xn$spirooutline$1aao(r271_corner(r279_dim.xLeft2, r279_dim.wMidHeight), r271_corner(r279_dim.xBot2, 0), r271_corner(r277_df.width, 0), r271_corner(r277_df.width, r279_dim.wMidHeight)) : (r279__ = _r279_t3, r271_xn$noshape$3cah())))));
                r279_currentGlyph.include(r271_tagged('strokeDown2', (_r279_t4 = r277_bodyType, _r279_t4 === r271_xn$FORMCYRLOMEGA$5sIl5 ? r271_dispiro(r271_flat(r279_dim.xLeft2 - 0.5 * r271_HVContrast * r279_dim.strokeOuter, r279_dim.wMidHeight, r271_widths.lhs.heading(r279_dim.strokeOuter, r271_Downward)), r271_curl(r279_dim.xLeft2 - 0.5 * r271_HVContrast * r279_dim.strokeOuter, r279_dim.wMidHeight * (1 - r279_dim.curlyStraightSegLength), r271_heading(r271_Downward)), r271_quadControls(0, 0.3, 6, r271_unimportant), r271_g4(r279_dim.xBot2 - r279_shiftB, 0, r271_widths.center.heading(r279_dim.fineOuterCr, r271_Downward))) : (r279__ = _r279_t4, r271_dispiro(r271_flat(r279_dim.xLeft2 + r279_shiftT, r279_dim.wMidHeight, r271_widths.center.heading(r279_dim.fineInnerCrTop, r271_Downward)), r271_curl(r279_dim.xBot2 - r279_shiftB, 0, r271_widths.center.heading(r279_dim.fineOuterCr, r271_Downward)))))));
                var r279_oSlabPos = r277_bodyType ? r271_O * 2 : 0;
                var r279_sf = r271_SerifFrame(r277_top, 0, r277_df.leftSB, r277_df.rightSB, new r271_xn$NamedParameterPair$2Lrc9b('hSplit', 3));
                var r279_sfm = r271_SerifFrame(r277_top, 0, r277_df.leftSB + r279_oSlabPos, r277_df.rightSB - r279_oSlabPos, new r271_xn$NamedParameterPair$2Lrc9b('hSplit', 3));
                r279_currentGlyph.include((_r279_t5 = r277_slabType, _r279_t5 === r271_xn$SERIFSNONE$7Hrq ? function () {
                    var _r316_t1;
                    var _r316_t0 = this;
                    var r316_currentGlyph = _r316_t0;
                    return void 0;
                } : _r279_t5 === r271_xn$SERIFSAUTO$7Hrq ? r271_NeedSlab(r271_SLAB, function () {
                    var _r312_t1;
                    var _r312_t0 = this;
                    var r312_currentGlyph = _r312_t0;
                    r312_currentGlyph.include(r279_sf.lt.full, true, true);
                    r312_currentGlyph.include(r279_sf.rt.full);
                    return void 0;
                }) : _r279_t5 === r271_xn$SERIFSALL$7Hrq ? function () {
                    var _r308_t1;
                    var _r308_t0 = this;
                    var r308_currentGlyph = _r308_t0;
                    r308_currentGlyph.include(r279_sf.lt.full, true, true);
                    r308_currentGlyph.include(r279_sf.rt.full);
                    return void 0;
                } : _r279_t5 === r271_xn$SERIFSMOTION$7Hrq ? r279_sfm.lt.outer : _r279_t5 === r271_xn$SERIFSDOUBLEV$7Hrq7 ? r271_NeedSlab(r271_SLAB, function () {
                    var _r304_t1;
                    var _r304_t0 = this;
                    var r304_currentGlyph = _r304_t0;
                    r304_currentGlyph.include(r279_sfm.lt.outer, true, true);
                    r304_currentGlyph.include(r279_sfm.rt.outer);
                    return void 0;
                }) : _r279_t5 === r271_xn$SERIFSDOUBLEVALL$7Hrq72 ? function () {
                    var _r300_t1;
                    var _r300_t0 = this;
                    var r300_currentGlyph = _r300_t0;
                    r300_currentGlyph.include(r279_sfm.lt.outer, true, true);
                    r300_currentGlyph.include(r279_sfm.rt.outer);
                    return void 0;
                } : _r279_t5 === r271_xn$SERIFSASYMMETRIC$7Hrq ? r271_NeedSlab(r271_SLAB, function () {
                    var _r296_t1;
                    var _r296_t0 = this;
                    var r296_currentGlyph = _r296_t0;
                    r296_currentGlyph.include(r279_sfm.lt.outer, true, true);
                    r296_currentGlyph.include(r279_sfm.rt.full);
                    return void 0;
                }) : _r279_t5 === r271_xn$SERIFSASYMMETRICALL$7Hrq1b ? function () {
                    var _r292_t1;
                    var _r292_t0 = this;
                    var r292_currentGlyph = _r292_t0;
                    r292_currentGlyph.include(r279_sfm.lt.outer, true, true);
                    r292_currentGlyph.include(r279_sfm.rt.full);
                    return void 0;
                } : _r279_t5 === r271_xn$SERIFSCURSIVE$7Hrq ? r271_NeedSlab(r271_SLAB, r279_sf.lt.outer) : _r279_t5 === r271_xn$SERIFSCYRLOMEGA$7Hrq5 ? (r279_jut = Math.min(r271_Jut, 0.5 * r271_HVContrast * r279_dim.strokeOuter + 0.375 * (r279_dim.xLeft2 - r277_df.leftSB - 1.5 * r271_HVContrast * r279_dim.strokeOuter)), r271_NeedSlab(r271_SLAB, function () {
                    var _r288_t1;
                    var _r288_t0 = this;
                    var r288_currentGlyph = _r288_t0;
                    r288_currentGlyph.include(r271_HSerif.mtAsymmetric(r277_df.leftSB + 0.5 * r271_HVContrast * r279_dim.strokeOuter, r279_dim.wMidHeight, r279_jut, r279_jut), true, true);
                    r288_currentGlyph.include(r271_HSerif.mtAsymmetric(r279_dim.xLeft2, r279_dim.wMidHeight, r279_jut, r279_jut));
                    return void 0;
                })) : void 0));
                return void 0;
            };
        };
        var r271_WHooktopShape = function (r317_df, r317_top, r317_bodyType, r317_serifsType) {
            var _r317_t0, _r317_t1;
            return function () {
                var _r319_t1;
                var _r319_t0 = this;
                var r319_currentGlyph = _r319_t0;
                r319_currentGlyph.include(r271_WShapeImpl(r317_df, r317_top, r317_bodyType, r317_serifsType));
                var r319_dim = r271_WDim(r317_df, r317_top, r317_bodyType);
                r319_currentGlyph.ejectTagged('strokeUp2');
                r319_currentGlyph.ejectTagged('serifRT');
                r319_currentGlyph.include(r271_dispiro(r271_widths.rhs(r319_dim.strokeOuter), r271_straight.down.start(r317_df.rightSB, r317_top - r271_TailY - 0.5 * r319_dim.strokeOuter - r271_O, r271_heading(r271_Downward)), r271_quadControls(0, 0.3, 6, r271_unimportant), r271_g4(r319_dim.xBot2 + 0.5 * r271_HVContrast * r319_dim.wCoCr, 0, r271_widths.rhs.heading(r319_dim.fineOuterCr, r271_Downward))));
                r319_currentGlyph.include(r271_VerticalHook.r(new r271_xn$NamedParameterPair$2Lrc9b('x', r317_df.rightSB), new r271_xn$NamedParameterPair$2Lrc9b('y', r317_top - r271_TailY - 0.5 * r319_dim.strokeOuter - r271_O), new r271_xn$NamedParameterPair$2Lrc9b('xDepth', r271_TailX), new r271_xn$NamedParameterPair$2Lrc9b('yDepth', -r271_TailY), new r271_xn$NamedParameterPair$2Lrc9b('sw', r319_dim.strokeOuter)));
                return void 0;
            };
        };
        var r271_WVertSides = function (r330_df, r330_top, r330_bodyType, r330_slabType) {
            var _r330_t0, _r330_t1;
            return function () {
                var r332____, _r332_t0, _r332_t2;
                var _r332_t1 = this;
                var r332_currentGlyph = _r332_t1;
                r332_currentGlyph.include(r271_xn$createAndSaveGlyphImpl$2Lrc3c(null, null, function () {
                    var _r336_t1;
                    var _r336_t0 = this;
                    var r336_currentGlyph = _r336_t0;
                    r336_currentGlyph.include(r271_MShape(r330_top, r330_df, new r271_xn$NamedParameterPair$2Lrc9b('form', 2), new r271_xn$NamedParameterPair$2Lrc9b('slabType', 0)));
                    r336_currentGlyph.include(r271_FlipAround(r330_df.width / 2, r330_top / 2));
                    return void 0;
                }));
                var r332_sf = r271_SerifFrame(r330_top, 0, r330_df.leftSB, r330_df.rightSB);
                r332_currentGlyph.include((_r332_t0 = r330_slabType, _r332_t0 === r271_xn$SERIFSAUTO$7Hrq ? r271_NeedSlab(r271_SLAB, function () {
                    var _r349_t1;
                    var _r349_t0 = this;
                    var r349_currentGlyph = _r349_t0;
                    r349_currentGlyph.include(r332_sf.lt.full, true, true);
                    r349_currentGlyph.include(r332_sf.rt.full);
                    return void 0;
                }) : _r332_t0 === r271_xn$SERIFSALL$7Hrq ? function () {
                    var _r345_t1;
                    var _r345_t0 = this;
                    var r345_currentGlyph = _r345_t0;
                    r345_currentGlyph.include(r332_sf.lt.full, true, true);
                    r345_currentGlyph.include(r332_sf.rt.full);
                    return void 0;
                } : _r332_t0 === r271_xn$SERIFSMOTION$7Hrq ? r332_sf.lt.outer : (r332____ = _r332_t0, function () {
                    var _r343_t1;
                    var _r343_t0 = this;
                    var r343_currentGlyph = _r343_t0;
                    return void 0;
                })));
                return void 0;
            };
        };
        var r271_WVSHookTopShape = function (r352_df, r352_top, r352_bodyType, r352_serifsType) {
            var _r352_t0, _r352_t1;
            return function () {
                var _r354_t1;
                var _r354_t0 = this;
                var r354_currentGlyph = _r354_t0;
                r354_currentGlyph.include(r271_WVertSides(r352_df, r352_top, r352_bodyType, r352_serifsType));
                r354_currentGlyph.ejectTagged('strokeLeftBar');
                r354_currentGlyph.ejectTagged('serifRT');
                r354_currentGlyph.include(r271_dispiro(r271_widths.rhs(), r271_flat(r352_df.rightSB, r352_top - r271_TailY - r271_HalfStroke - r271_O, r271_heading(r271_Downward)), r271_curl(r352_df.rightSB, Math.min(0.8 * r352_top, r352_top - r271_TailY - r271_HalfStroke - 0.1), r271_heading(r271_Downward)), r271_straight.down.end(r352_df.rightSB, 0, r271_widths.rhs.heading(r271_AdviceStroke(4, r352_df.div), r271_Downward))));
                r354_currentGlyph.include(r271_VerticalHook.r(r352_df.rightSB, r352_top - r271_TailY - r271_HalfStroke - r271_O, r271_TailX, -r271_TailY));
                return void 0;
            };
        };
        var r271_WCursiveImplImpl = function (r360_fHookTop, r360_df, r360_top, r360_bodyType, r360_slabType) {
            var _r360_t0, _r360_t1;
            return function () {
                var r362____, _r362_t0, _r362_t2;
                var _r362_t1 = this;
                var r362_currentGlyph = _r362_t1;
                var r362_fine = r271_AdviceStroke(3.25, r360_df.div);
                var r362_mfine = r362_fine * r271_CThin;
                var r362_x0 = r1_mix(r360_df.leftSB, r360_df.rightSB, 0.1);
                var r362_y0 = r360_top - r271_O;
                var r362_y1 = r1_mix(0, r360_top, 0.8);
                var r362_x1 = r360_df.leftSB + 0 * r271_OX;
                var r362_y3 = r1_mix(r362_fine, r360_top, 0.375);
                var r362_y4 = r1_mix(r362_y3, r360_top, 0.5);
                var r362_rInY = 1 * r271_DiagonalTailInnerRadius();
                r362_currentGlyph.include(r271_dispiro(r271_widths.lhs(r362_fine), r271_flat(r362_x1, r360_top, r271_heading(r271_Downward)), r271_curl(r362_x1, r362_fine + r362_rInY, r271_heading(r271_Downward)), r271_arcvh(16), r271_g4(Math.min(r1_mix(r362_x1 + r362_fine * r271_HVContrast, r360_df.middle - r362_fine / 2 * r271_HVContrast, 0.5) - (r362_fine - r362_mfine) * r271_HVContrast, r362_x1 + r362_fine * r271_HVContrast + r362_rInY), r271_O, r271_heading({
                    'x': r271_TanSlope + 0.5 * (r362_fine - r362_mfine) / r362_fine,
                    'y': 1
                })), r271_archv(16), r271_flat(r360_df.middle + (r362_mfine - r362_fine / 2) * r271_HVContrast, r362_y3, r271_widths.heading(r362_mfine, 0, r271_Upward)), r271_curl(r360_df.middle + (r362_mfine - r362_fine / 2) * r271_HVContrast, r362_y4, r271_heading(r271_Upward))));
                if (r360_fHookTop) {
                    r362_currentGlyph.include(r271_VerticalHook.r(r360_df.rightSB, r360_top - r271_TailY - 0.5 * r362_fine - r271_O, r271_TailX, -r271_TailY, r362_fine));
                    r362_currentGlyph.include(r271_dispiro(r271_widths.rhs(r362_fine), r271_flat(r360_df.width - r362_x1, r360_top - r271_TailY - 0.5 * r362_fine - r271_O, r271_heading(r271_Downward)), r271_curl(r360_df.width - r362_x1, r362_y3, r271_heading(r271_Downward)), r271_arcvh(16), r271_g4(r1_mix(r360_df.width - r362_x1, r360_df.middle - r362_fine / 2 * r271_HVContrast, 0.5) + r362_fine * r271_CorrectionOMidX, r271_O), r271_archv(16), r271_flat(r360_df.middle - (r362_mfine - r362_fine / 2) * r271_HVContrast, r362_y3, r271_widths.heading(0, r362_mfine, r271_Upward)), r271_curl(r360_df.middle - (r362_mfine - r362_fine / 2) * r271_HVContrast, r362_y4, r271_heading(r271_Upward))));
                } else
                    r362_currentGlyph.include(r271_dispiro(r271_widths.rhs(r362_fine), r271_g4(r360_df.width - r362_x0, r362_y0), r271_g4(r360_df.width - r362_x1 - r271_OX, r360_top / 2), r271_arcvh(16), r271_g4(r1_mix(r360_df.width - r362_x1, r360_df.middle - r362_fine / 2 * r271_HVContrast, 0.5) + r362_fine * r271_CorrectionOMidX, r271_O), r271_archv(16), r271_flat(r360_df.middle - (r362_mfine - r362_fine / 2) * r271_HVContrast, r362_y3, r271_widths.heading(0, r362_mfine, r271_Upward)), r271_curl(r360_df.middle - (r362_mfine - r362_fine / 2) * r271_HVContrast, r362_y4, r271_heading(r271_Upward))));
                var r362_sf = r271_SerifFrame(r360_top, 0, r362_x1, r360_df.rightSB);
                r362_currentGlyph.include((_r362_t0 = r360_slabType, _r362_t0 === r271_xn$SERIFSCURSIVE$7Hrq ? r271_NeedSlab(r271_SLAB, r362_sf.lt.outer) : _r362_t0 === r271_xn$SERIFSMOTION$7Hrq ? r362_sf.lt.outer : (r362____ = _r362_t0, function () {
                    var _r369_t1;
                    var _r369_t0 = this;
                    var r369_currentGlyph = _r369_t0;
                    return void 0;
                })));
                return void 0;
            };
        };
        var r271_WCursiveImpl = function (r370_df, r370_top, r370_bodyType, r370_serifsType) {
            var _r370_t0, _r370_t1;
            return r271_WCursiveImplImpl(false, r370_df, r370_top, r370_bodyType, r370_serifsType);
        };
        var r271_WHookTopCursive = function (r371_df, r371_top, r371_bodyType, r371_serifsType) {
            var _r371_t0, _r371_t1;
            return r271_WCursiveImplImpl(true, r371_df, r371_top, r371_bodyType, r371_serifsType);
        };
        var r271_WConfig = r1_SuffixCfg.weave({
            'straight': [
                r271_WShapeImpl,
                r271_WHooktopShape,
                r271_xn$FORMSTRAIGHT$5sIl
            ],
            'straightAsymmetric': [
                r271_WShapeImpl,
                r271_WHooktopShape,
                r271_xn$FORMASYMMETRIC$5sIl
            ],
            'straightDoubleV': [
                r271_WShapeImpl,
                r271_WHooktopShape,
                r271_xn$FORMDOUBLEV$5sIl7
            ],
            'straightFlatTop': [
                r271_WShapeImpl,
                r271_WHooktopShape,
                r271_xn$FORMFLATTOP$5sIl5
            ],
            'straightVerticalSides': [
                r271_WVertSides,
                r271_WVSHookTopShape,
                r271_xn$FORMSTRAIGHT$5sIl
            ],
            'curly': [
                r271_WShapeImpl,
                r271_WHooktopShape,
                r271_xn$FORMCURLY$5sIl
            ],
            'cursive': [
                r271_WCursiveImpl,
                r271_WHookTopCursive,
                r271_xn$FORMCURLY$5sIl
            ],
            'cyrlCapialOmega': [
                r271_WShapeImpl,
                r271_WHooktopShape,
                r271_xn$FORMCYRLOMEGA$5sIl5
            ],
            'cyrlSmallOmega': [
                r271_WShapeImpl,
                r271_WHooktopShape,
                r271_xn$FORMCYRLOMEGA$5sIl5
            ]
        }, function (r372_body) {
            var r372___, _r372_t0, _r372_t1, _r372_t2;
            return r372_body === 'cyrlCapialOmega' || r372_body === 'cyrlSmallOmega' ? { '': r271_xn$SERIFSCYRLOMEGA$7Hrq5 } : {
                'serifless': r271_xn$SERIFSNONE$7Hrq,
                'motionSerifed': r271_xn$SERIFSMOTION$7Hrq,
                'serifed': (_r372_t0 = r372_body, _r372_t0 === 'straightAsymmetric' ? r271_xn$SERIFSASYMMETRICALL$7Hrq1b : _r372_t0 === 'straightDoubleV' ? r271_xn$SERIFSDOUBLEVALL$7Hrq72 : _r372_t0 === 'cursive' ? r271_xn$SERIFSMOTION$7Hrq : (r372___ = _r372_t0, r271_xn$SERIFSALL$7Hrq))
            };
        });
        var _r271_t8 = _r1_t2(r271_WConfig)[Symbol.iterator]();
        var _r271_t9 = void 0;
        while (!(_r271_t9 = _r271_t8.next()).done) {
            _r271_t10 = _r271_t9.value;
            r271_suffix = _r271_t10[0];
            r271_implT = _r271_t10[1][0][0];
            r271_hookTopImplT = _r271_t10[1][0][1];
            r271_bodyType = _r271_t10[1][0][2];
            _r271_t10[1][0];
            r271_slabType = _r271_t10[1][1];
            _r271_t10[1];
            (function () {
                r271_xn$createAndSaveGlyphImpl$2Lrc3c('W.' + r271_suffix, null, function () {
                    var _r380_t1;
                    var _r380_t0 = this;
                    var r380_currentGlyph = _r380_t0;
                    var r380_df = r271_DivFrame(r271_para.diversityM, 3);
                    r380_currentGlyph.setWidth(r380_df.width);
                    r380_currentGlyph.include(r380_df.markSet.capital());
                    r380_currentGlyph.include(r271_implT(r380_df, r271_CAP, r271_bodyType, r271_slabType));
                    return void 0;
                });
                r271_xn$createAndSaveGlyphImpl$2Lrc3c('w.' + r271_suffix, null, function () {
                    var _r386_t1;
                    var _r386_t0 = this;
                    var r386_currentGlyph = _r386_t0;
                    var r386_df = r271_DivFrame(r271_para.diversityM, 3);
                    r386_currentGlyph.setWidth(r386_df.width);
                    r386_currentGlyph.include(r386_df.markSet.e());
                    r386_currentGlyph.include(r271_implT(r386_df, r271_XH, r271_bodyType, r271_slabType));
                    return void 0;
                });
                r271_xn$createAndSaveGlyphImpl$2Lrc3c('ww.' + r271_suffix, null, function () {
                    var _r392_t1;
                    var _r392_t0 = this;
                    var r392_currentGlyph = _r392_t0;
                    var r392_df = r271_DivFrame(1, 3);
                    var r392_gap = r271_CAP * 0.05;
                    r392_currentGlyph.setWidth(r392_df.width);
                    r392_currentGlyph.include(r392_df.markSet.capital());
                    r392_currentGlyph.include(r271_implT(r392_df, r271_CAP / 2 - r392_gap / 2, r271_bodyType, r271_slabType));
                    r392_currentGlyph.include(r271_ApparentTranslate(0, r271_CAP / 2 + r392_gap));
                    r392_currentGlyph.include(r271_implT(r392_df, r271_CAP / 2 - r392_gap / 2, r271_bodyType, r271_slabType));
                    return void 0;
                });
                if (r271_hookTopImplT)
                    r271_xn$createAndSaveGlyphImpl$2Lrc3c('WHookTop.' + r271_suffix, null, function () {
                        var _r400_t1;
                        var _r400_t0 = this;
                        var r400_currentGlyph = _r400_t0;
                        var r400_df = r271_DivFrame(r271_para.diversityM, 3);
                        r400_currentGlyph.setWidth(r400_df.width);
                        r400_currentGlyph.include(r400_df.markSet.capital());
                        r400_currentGlyph.include(r271_hookTopImplT(r400_df, r271_CAP, r271_bodyType, r271_slabType));
                        return void 0;
                    });
                return r271_hookTopImplT ? r271_xn$createAndSaveGlyphImpl$2Lrc3c('wHookTop.' + r271_suffix, null, function () {
                    var _r406_t1;
                    var _r406_t0 = this;
                    var r406_currentGlyph = _r406_t0;
                    var r406_df = r271_DivFrame(r271_para.diversityM, 3);
                    r406_currentGlyph.setWidth(r406_df.width);
                    r406_currentGlyph.include(r406_df.markSet.e());
                    r406_currentGlyph.include(r271_hookTopImplT(r406_df, r271_XH, r271_bodyType, r271_slabType));
                    return void 0;
                }) : void 0;
            }());
        }
        r271_xn$selectvariant$7Hrq('W', 'W');
        r271_xn$linkreducedvariant$5sIl8('W/sansSerif', 'W', r1_MathSansSerif);
        r271_xn$selectvariant$7Hrq('WHookTop', 11378);
        r271_xn$selectvariant$7Hrq('w', 'w');
        r271_xn$linkreducedvariant$5sIl8('w/sansSerif', 'w', r1_MathSansSerif);
        r271_xn$selectvariant$7Hrq('smcpW', 7457, new r271_xn$NamedParameterPair$2Lrc9b('shapeFrom', 'w'), new r271_xn$NamedParameterPair$2Lrc9b('follow', 'W'));
        r271_xn$selectvariant$7Hrq('ww', 684, new r271_xn$NamedParameterPair$2Lrc9b('follow', 'w'));
        r271_xn$selectvariant$7Hrq('wHookTop', 11379);
        r271_alias('cyrl/We', 1308, 'W');
        r271_alias('cyrl/we', 1309, 'w');
        r271_turned('turnw', 653, 'w', r271_Middle * r271_para.diversityM, r271_XH / 2);
        r271_alias('cyrl/Omega', 1120, 'W.cyrlCapialOmega');
        r271_alias('cyrl/omega', 1121, r271_para.isItalic ? 'w.cyrlSmallOmega' : 'w.cyrlCapialOmega');
        var _r271_t11 = r271_xn$Capture$2Lrc8['Letter-Blackboard'].resolve();
        var r271_BBS = _r271_t11.BBS;
        var r271_BBD = _r271_t11.BBD;
        var _r271_t12 = r271_xn$Capture$2Lrc8['Letter-Latin-V'].resolve();
        var r271_BBVShape = _r271_t12.BBVShape;
        var r271_BBVOuterMaskShape = _r271_t12.BBVOuterMaskShape;
        var r271_BBWShape = function (r415_top) {
            var _r415_t0, _r415_t1;
            var r415_offset = r271_BBD * 2;
            var r415_ksW = r271_AdviceStroke2(8, 2, r415_top) / r271_BBS;
            var r415_kdW = Math.min(r415_ksW, 3 / 4);
            return r271_union(r271_difference(r271_BBVShape(r271_SB, r271_RightSB - r415_offset, r415_kdW, r415_ksW, r415_top), r271_BBVOuterMaskShape(r271_SB + r415_offset, r271_RightSB, r415_kdW, r415_ksW, r415_top)), r271_BBVShape(r271_SB + r415_offset, r271_RightSB, r415_kdW, r415_ksW, r415_top));
        };
        r271_xn$createAndSaveGlyphImpl$2Lrc3c('mathbb/W', 120142, function () {
            var _r418_t1;
            var _r418_t0 = this;
            var r418_currentGlyph = _r418_t0;
            r418_currentGlyph.include(r271_MarkSet.capital(), true, true);
            r418_currentGlyph.include(r271_BBWShape(r271_CAP));
            return void 0;
        });
        return r271_xn$createAndSaveGlyphImpl$2Lrc3c('mathbb/w', 120168, function () {
            var _r423_t1;
            var _r423_t0 = this;
            var r423_currentGlyph = _r423_t0;
            r423_currentGlyph.include(r271_MarkSet.e(), true, true);
            r423_currentGlyph.include(r271_BBWShape(r271_XH));
            return void 0;
        });
    });
    return void 0;
});
