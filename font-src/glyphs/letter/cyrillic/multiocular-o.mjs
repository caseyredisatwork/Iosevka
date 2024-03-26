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
    r269_xn$Capture_Ext$2Lrc2b['$defineGlyphBlockImpl$'](r269_xn$Capture_Ext$2Lrc2b, 'Letter-Cyrillic-Multiocular-O', function (r270_xn$Capture$2Lrc8, r270_xn$ExportCapture$2Lrc4b) {
        var r270_suffix, r270_DrawAt, r270_kdr, _r270_t9, _r270_t10, _r270_t11, _r270_t12, _r270_tag13;
        var _r270_t0 = r270_xn$Capture$2Lrc8;
        var r270_xn$createAndSaveGlyphImpl$2Lrc3c = _r270_t0['$createAndSaveGlyphImpl$'];
        var r270_xn$NamedParameterPair$2Lrc9b = _r270_t0['$NamedParameterPair$'];
        var r270_xn$assignUnicodeImpl$2Lrc8b = _r270_t0['$assignUnicodeImpl$'];
        var r270_xn$execState$2Lrc0b = _r270_t0['$execState$'];
        var r270_para = _r270_t0.para;
        var r270_DivFrame = _r270_t0.DivFrame;
        var _r270_t1 = r270_xn$Capture$2Lrc8.Metrics;
        var r270_Ascender = _r270_t1.Ascender;
        var r270_Descender = _r270_t1.Descender;
        var r270_SmallArchDepth = _r270_t1.SmallArchDepth;
        var _r270_t2 = r270_xn$Capture$2Lrc8.SpiroFns;
        var _r270_t3 = r270_xn$Capture$2Lrc8.BooleFns;
        var r270_union = _r270_t3.union;
        var _r270_t4 = r270_xn$Capture$2Lrc8.CommonShapes.resolve();
        var r270_DotAt = _r270_t4.DotAt;
        var r270_OShape = _r270_t4.OShape;
        var r270_DotVariants = _r270_t4.DotVariants;
        var _r270_t5 = r270_xn$Capture$2Lrc8['Common-Derivatives'].resolve();
        var r270_xn$selectvariant$7Hrq = _r270_t5['select-variant'];
        var _r270_t6 = r270_xn$Capture$2Lrc8['Mark-Overlay'].resolve();
        var r270_InnerDot = _r270_t6.InnerDot;
        var _r270_t7 = Object.entries(r270_DotVariants)[Symbol.iterator]();
        var _r270_t8 = void 0;
        while (!(_r270_t8 = _r270_t7.next()).done) {
            _r270_t9 = _r270_t8.value;
            r270_suffix = _r270_t9[0];
            r270_DrawAt = _r270_t9[1][0];
            r270_kdr = _r270_t9[1][1];
            _r270_t9[1];
            (function () {
                return r270_xn$createAndSaveGlyphImpl$2Lrc3c('cyrl/multiocularO.' + r270_suffix, null, function () {
                    var _r279_t1;
                    var _r279_t0 = this;
                    var r279_currentGlyph = _r279_t0;
                    var r279_df = r270_DivFrame(r270_para.diversityM, 6);
                    var r279_subDf = r279_df.slice(5, 2);
                    r279_currentGlyph.setWidth(r279_df.width);
                    r279_currentGlyph.include(r279_df.markSet.bp());
                    var r279_pMidRowBottom = 0.327;
                    var r279_pMidRowSw = -0.25;
                    var r279_middleRowBottom = r1_mix(r270_Descender, r270_Ascender, r279_pMidRowBottom) + r279_pMidRowSw * r279_df.mvs;
                    var r279_middleRowTop = r1_mix(r270_Descender, r270_Ascender, 1 - r279_pMidRowBottom) - r279_pMidRowSw * r279_df.mvs;
                    var r279_SingleEye = function (r282_pX, r282_pY) {
                        var _r282_t0, _r282_t1;
                        var r282_yBot = r279_middleRowBottom + r282_pY * (r279_middleRowBottom - r270_Descender);
                        var r282_yTop = r279_middleRowTop + r282_pY * (r270_Ascender - r279_middleRowTop);
                        var r282_xLeft = r279_subDf.leftSB + r282_pX / 3 * (r279_df.width - r279_subDf.width);
                        var r282_xRight = r279_subDf.rightSB + r282_pX / 3 * (r279_df.width - r279_subDf.width);
                        var r282_ada = r279_subDf.archDepthA(r270_SmallArchDepth);
                        var r282_adb = r279_subDf.archDepthB(r270_SmallArchDepth);
                        var r282_dotSpace = r270_InnerDot.spaceOfDf(r279_subDf);
                        var r282_kHeight2 = Math.sqrt(r270_InnerDot.spaceOfDf(r270_DivFrame(1)) / r282_dotSpace) * 1.5;
                        return r270_union(r270_OShape.NoOvershoot(r282_yTop, r282_yBot, r282_xLeft, r282_xRight, r279_subDf.mvs, r282_ada, r282_adb), r270_InnerDot(r1_mix(r282_xLeft, r282_xRight, 0.5), r1_mix(r282_yTop, r282_yBot, 0.5), r282_kHeight2, r270_DrawAt === r270_DotAt, r270_kdr, r282_dotSpace, 5));
                    };
                    r279_currentGlyph.include(r279_SingleEye(0, 0));
                    r279_currentGlyph.include(r279_SingleEye(1, 0));
                    r279_currentGlyph.include(r279_SingleEye(2, 0));
                    r279_currentGlyph.include(r279_SingleEye(3, 0));
                    r279_currentGlyph.include(r279_SingleEye(0.5, +1));
                    r279_currentGlyph.include(r279_SingleEye(1.5, +1));
                    r279_currentGlyph.include(r279_SingleEye(2.5, +1));
                    r279_currentGlyph.include(r279_SingleEye(0.5, -1));
                    r279_currentGlyph.include(r279_SingleEye(1.5, -1));
                    r279_currentGlyph.include(r279_SingleEye(2.5, -1));
                    return void 0;
                });
            }());
        }
        return r270_xn$selectvariant$7Hrq('cyrl/multiocularO', 42606, new r270_xn$NamedParameterPair$2Lrc9b('follow', 'diacriticDot'));
    });
    return void 0;
});
