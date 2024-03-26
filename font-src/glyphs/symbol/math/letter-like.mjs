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
    r269_xn$Capture_Ext$2Lrc2b['$defineGlyphBlockImpl$'](r269_xn$Capture_Ext$2Lrc2b, 'Symbol-Math-Letter-Like', function (r270_xn$Capture$2Lrc8, r270_xn$ExportCapture$2Lrc4b) {
        var _r270_t8, _r270_t9;
        var _r270_t0 = r270_xn$Capture$2Lrc8;
        var r270_xn$createAndSaveGlyphImpl$2Lrc3c = _r270_t0['$createAndSaveGlyphImpl$'];
        var r270_xn$NamedParameterPair$2Lrc9b = _r270_t0['$NamedParameterPair$'];
        var r270_xn$assignUnicodeImpl$2Lrc8b = _r270_t0['$assignUnicodeImpl$'];
        var r270_xn$execState$2Lrc0b = _r270_t0['$execState$'];
        var r270_para = _r270_t0.para;
        var r270_MarkSet = _r270_t0.MarkSet;
        var r270_DivFrame = _r270_t0.DivFrame;
        var _r270_t1 = r270_xn$Capture$2Lrc8.Metrics;
        var r270_SB = _r270_t1.SB;
        var r270_CAP = _r270_t1.CAP;
        var r270_SymbolMid = _r270_t1.SymbolMid;
        var r270_OperTop = _r270_t1.OperTop;
        var r270_OperBot = _r270_t1.OperBot;
        var r270_ApparentTranslate = _r270_t1.ApparentTranslate;
        var r270_O = _r270_t1.O;
        var r270_RightSB = _r270_t1.RightSB;
        var r270_Middle = _r270_t1.Middle;
        var r270_AdviceStroke = _r270_t1.AdviceStroke;
        var r270_OperatorStroke = _r270_t1.OperatorStroke;
        var _r270_t2 = r270_xn$Capture$2Lrc8.SpiroFns;
        var r270_flat = _r270_t2.flat;
        var r270_curl = _r270_t2.curl;
        var r270_widths = _r270_t2.widths;
        var r270_dispiro = _r270_t2.dispiro;
        var _r270_t3 = r270_xn$Capture$2Lrc8.BooleFns;
        var _r270_t4 = r270_xn$Capture$2Lrc8.CommonShapes.resolve();
        var r270_OShape = _r270_t4.OShape;
        var _r270_t5 = r270_xn$Capture$2Lrc8['Common-Derivatives'].resolve();
        var r270_alias = _r270_t5.alias;
        var r270_turned = _r270_t5.turned;
        var r270_xn$derivecomposites$7Hrq = _r270_t5['derive-composites'];
        var _r270_t6 = r270_xn$Capture$2Lrc8['Letter-Latin-Upper-A'].resolve();
        var r270_DeltaShape = _r270_t6.DeltaShape;
        var _r270_t7 = r270_xn$Capture$2Lrc8['Letter-Latin-Upper-E'].resolve();
        var r270_RevEShape = _r270_t7.RevEShape;
        r270_turned('forall', 8704, 'A.straightSerifless', r270_Middle, r270_CAP / 2);
        r270_alias('exists', 8707, 'revE.serifless');
        r270_turned('amalg', 10815, 'grek/Pi', r270_Middle, r270_CAP / 2);
        r270_xn$createAndSaveGlyphImpl$2Lrc3c('emptyset', 8709, function () {
            var _r277_t1;
            var _r277_t0 = this;
            var r277_currentGlyph = _r277_t0;
            r277_currentGlyph.include(r270_OShape(r270_CAP, 0, r270_SB, r270_RightSB, r270_OperatorStroke));
            r277_currentGlyph.include(r270_MarkSet.capital());
            var r277_fine = r270_OperatorStroke / 2;
            r277_currentGlyph.include(r270_dispiro(r270_widths.center(r270_OperatorStroke), r270_flat(r270_SB + r270_O + r277_fine, r1_mix(r270_CAP, 0, 1.05)), r270_curl(r270_RightSB - r270_O - r277_fine, r1_mix(0, r270_CAP, 1.05))));
            return void 0;
        });
        r270_xn$createAndSaveGlyphImpl$2Lrc3c('reverseEmptyset', 10672, function () {
            var _r283_t1;
            var _r283_t0 = this;
            var r283_currentGlyph = _r283_t0;
            r283_currentGlyph.include(r270_OShape(r270_CAP, 0, r270_SB, r270_RightSB, r270_OperatorStroke));
            r283_currentGlyph.include(r270_MarkSet.capital());
            var r283_fine = r270_OperatorStroke / 2;
            r283_currentGlyph.include(r270_dispiro(r270_widths.center(r270_OperatorStroke), r270_flat(r270_RightSB - r270_O - r283_fine, r1_mix(r270_CAP, 0, 1.05)), r270_curl(r270_SB + r270_O + r283_fine, r1_mix(0, r270_CAP, 1.05))));
            return void 0;
        });
        r270_xn$derivecomposites$7Hrq('emptysetOverbar', 10673, 'emptyset', 'sbRsbOverlineAbove');
        r270_xn$derivecomposites$7Hrq('emptysetRing', 10674, 'emptyset', 'ringAbove');
        r270_xn$derivecomposites$7Hrq('emptysetRightArrow', 10675, 'emptyset', 'rightArrowAbove');
        r270_xn$derivecomposites$7Hrq('emptysetLeftArrow', 10676, 'emptyset', 'leftArrowAbove');
        var r270_CodeNonApl = function (r287_u) {
            var _r287_t0, _r287_t1;
            return r270_para.variantSelector['__enableAplForm'] === 'enable' ? null : r287_u;
        };
        var r270_CodeApl = function (r288_u) {
            var _r288_t0, _r288_t1;
            return r270_para.variantSelector['__enableAplForm'] === 'enable' ? r288_u : null;
        };
        r270_xn$createAndSaveGlyphImpl$2Lrc3c('increment', r270_CodeNonApl(8710), function () {
            var _r291_t1;
            var _r291_t0 = this;
            var r291_currentGlyph = _r291_t0;
            r291_currentGlyph.include(r270_MarkSet.capital());
            r291_currentGlyph.include(r270_DeltaShape(new r270_xn$NamedParameterPair$2Lrc9b('df', r270_DivFrame(1)), new r270_xn$NamedParameterPair$2Lrc9b('fBarStraight', true), new r270_xn$NamedParameterPair$2Lrc9b('top', r270_CAP), new r270_xn$NamedParameterPair$2Lrc9b('sw', r270_OperatorStroke)));
            return void 0;
        });
        r270_xn$createAndSaveGlyphImpl$2Lrc3c('increment.aplForm', r270_CodeApl(8710), function () {
            var _r300_t1;
            var _r300_t0 = this;
            var r300_currentGlyph = _r300_t0;
            r300_currentGlyph.include(r270_MarkSet.oper());
            var r300_shapeHeight = r270_OperTop - r270_OperBot;
            r300_currentGlyph.include(r270_DeltaShape(new r270_xn$NamedParameterPair$2Lrc9b('df', r270_DivFrame(1)), new r270_xn$NamedParameterPair$2Lrc9b('fBarStraight', true), new r270_xn$NamedParameterPair$2Lrc9b('top', r300_shapeHeight), new r270_xn$NamedParameterPair$2Lrc9b('sw', r270_OperatorStroke)));
            r300_currentGlyph.include(r270_ApparentTranslate(0, r270_SymbolMid - r300_shapeHeight / 2));
            return void 0;
        });
        r270_xn$createAndSaveGlyphImpl$2Lrc3c('increment.aplThin', null, function () {
            var _r310_t1;
            var _r310_t0 = this;
            var r310_currentGlyph = _r310_t0;
            r310_currentGlyph.include(r270_MarkSet.oper());
            var r310_shapeHeight = r270_OperTop - r270_OperBot;
            r310_currentGlyph.include(r270_DeltaShape(new r270_xn$NamedParameterPair$2Lrc9b('df', r270_DivFrame(1)), new r270_xn$NamedParameterPair$2Lrc9b('fBarStraight', true), new r270_xn$NamedParameterPair$2Lrc9b('top', r310_shapeHeight), new r270_xn$NamedParameterPair$2Lrc9b('sw', r270_AdviceStroke(3.75))));
            r310_currentGlyph.include(r270_ApparentTranslate(0, r270_SymbolMid - r310_shapeHeight / 2));
            return void 0;
        });
        r270_turned('nabla', r270_CodeNonApl(8711), 'increment', r270_Middle, r270_CAP / 2);
        r270_turned('nabla.aplForm', r270_CodeApl(8711), 'increment.aplForm', r270_Middle, r270_SymbolMid);
        return r270_turned('nabla.aplThin', null, 'increment.aplThin', r270_Middle, r270_SymbolMid);
    });
    return void 0;
});
