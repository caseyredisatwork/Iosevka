'use strict';
import * as _s0_t0 from '../../../support/utils.mjs';
import * as _s0_t1 from '../../../support/gr.mjs';
import * as _s0_t2 from '../../../support/util/mask-bit.mjs';
var _s0_t3;
export {
    _s0_t3 as apply
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
var _r1_t10 = _s0_t2;
var r1_bitOr = _r1_t10.bitOr;
var r1_xn$GlyphBlocks$2Lrc2b = [];
_s0_t3 = r1_apply = function () {
    var r267_block, _r267_t4, _r267_t6;
    var _r267_t3 = this;
    var _r267_t0 = r1_xn$GlyphBlocks$2Lrc2b;
    var _r267_t1 = _r267_t0.length;
    var _r267_t2 = 0;
    var _r267_t5 = _r267_t2 < _r267_t1;
    while (_r267_t5) {
        _r267_t6 = (r267_block = _r267_t0[_r267_t2], r267_block(_r267_t3), _r267_t2 = _r267_t2 + 1);
        _r267_t5 = _r267_t2 < _r267_t1;
    }
    return _r267_t6;
};
r1_xn$GlyphBlocks$2Lrc2b.push(function (r271_xn$Capture_Ext$2Lrc2b) {
    var _r271_t0, _r271_t1;
    r271_xn$Capture_Ext$2Lrc2b['$defineGlyphBlockImpl$'](r271_xn$Capture_Ext$2Lrc2b, 'Letter-Latin-Upper-AE-OE', function (r272_xn$Capture$2Lrc8, r272_xn$ExportCapture$2Lrc4b) {
        var r272_prefix, r272_code, r272_mk, r272_height, _r272_t11, _r272_t12, _r272_t13, _r272_t14, _r272_tag15;
        var _r272_t0 = r272_xn$Capture$2Lrc8;
        var r272_xn$createAndSaveGlyphImpl$2Lrc3c = _r272_t0['$createAndSaveGlyphImpl$'];
        var r272_xn$NamedParameterPair$2Lrc9b = _r272_t0['$NamedParameterPair$'];
        var r272_xn$assignUnicodeImpl$2Lrc8b = _r272_t0['$assignUnicodeImpl$'];
        var r272_xn$execState$2Lrc0b = _r272_t0['$execState$'];
        var r272_para = _r272_t0.para;
        var r272_AS_BASE = _r272_t0.AS_BASE;
        var r272_ALSO_METRICS = _r272_t0.ALSO_METRICS;
        var r272_DivFrame = _r272_t0.DivFrame;
        var _r272_t1 = r272_xn$Capture$2Lrc8.Metrics;
        var r272_CAP = _r272_t1.CAP;
        var r272_XH = _r272_t1.XH;
        var r272_ApparentTranslate = _r272_t1.ApparentTranslate;
        var r272_OX = _r272_t1.OX;
        var r272_Stroke = _r272_t1.Stroke;
        var r272_AdviceStroke = _r272_t1.AdviceStroke;
        var _r272_t2 = r272_xn$Capture$2Lrc8.SpiroFns;
        var _r272_t3 = r272_xn$Capture$2Lrc8.BooleFns;
        var r272_intersection = _r272_t3.intersection;
        var r272_difference = _r272_t3.difference;
        var _r272_t4 = r272_xn$Capture$2Lrc8.CommonShapes.resolve();
        var r272_WithTransform = _r272_t4.WithTransform;
        var r272_MaskAbove = _r272_t4.MaskAbove;
        var _r272_t5 = r272_xn$Capture$2Lrc8['Common-Derivatives'].resolve();
        var r272_xn$selectvariant$7Hrq = _r272_t5['select-variant'];
        var r272_xn$referglyph$1aao = _r272_t5['refer-glyph'];
        var r272_xn$derivemultipartglyphs$7Hrq65 = _r272_t5['derive-multi-part-glyphs'];
        var r272_xn$addglyphdependency$9Jrj6 = _r272_t5['add-glyph-dependency'];
        var _r272_t6 = r272_xn$Capture$2Lrc8['Letter-Latin-Upper-F'].resolve();
        var r272_EFVJutLength = _r272_t6.EFVJutLength;
        var _r272_t7 = r272_xn$Capture$2Lrc8['Letter-Latin-Upper-A'].resolve();
        var r272_AMaskShape = _r272_t7.AMaskShape;
        var r272_ALetterShape = _r272_t7.ALetterShape;
        var _r272_t8 = r272_xn$Capture$2Lrc8['Letter-Latin-Lower-AE-OE'].resolve();
        var r272_SubDfAndShift = _r272_t8.SubDfAndShift;
        var r272_AHalfShape = function (r278_pShift, r278_df, r278_top, r278_fStraightBar, r278_slabKind) {
            var _r278_t1, _r278_t2;
            var _r278_t0 = r272_SubDfAndShift(r278_pShift, r278_df);
            var r278_subDf = _r278_t0[0];
            var r278_shift = _r278_t0[1];
            return r272_WithTransform(r272_ApparentTranslate(r278_shift, 0), r272_ALetterShape(r278_subDf, r278_fStraightBar, r278_slabKind, r278_top, r278_df.mvs));
        };
        var r272_AHalfShapeMask = function (r279_pShift, r279_df, r279_top, r279_fStraightBar, r279_slabKind) {
            var _r279_t1, _r279_t2;
            var _r279_t0 = r272_SubDfAndShift(r279_pShift, r279_df);
            var r279_subDf = _r279_t0[0];
            var r279_shift = _r279_t0[1];
            return r272_WithTransform(r272_ApparentTranslate(r279_shift, 0), r272_AMaskShape(r279_subDf, r279_fStraightBar, r279_top, r279_df.mvs));
        };
        var r272_xn$SLABNONE$5sIl = 0;
        var r272_xn$SLABTOP$5sIl = 1;
        var r272_xn$SLABLEFT$5sIl = 2;
        var r272_xn$SLABRIGHT$5sIl = 4;
        var r272_ALetters = {
            'AA': [
                42802,
                'capital',
                r272_CAP
            ],
            'smcpAA': [
                null,
                'e',
                r272_XH
            ]
        };
        var r272_AConfig = {
            'straightSerifless': [
                true,
                r272_xn$SLABNONE$5sIl,
                r272_xn$SLABNONE$5sIl
            ],
            'curlySerifless': [
                false,
                r272_xn$SLABNONE$5sIl,
                r272_xn$SLABNONE$5sIl
            ],
            'straightTopSerifed': [
                true,
                r272_xn$SLABTOP$5sIl,
                r272_xn$SLABTOP$5sIl
            ],
            'curlyTopSerifed': [
                false,
                r272_xn$SLABTOP$5sIl,
                r272_xn$SLABTOP$5sIl
            ],
            'straightBaseSerifed': [
                true,
                r272_xn$SLABLEFT$5sIl,
                r272_xn$SLABRIGHT$5sIl
            ],
            'curlyBaseSerifed': [
                false,
                r272_xn$SLABLEFT$5sIl,
                r272_xn$SLABRIGHT$5sIl
            ],
            'straightTriSerifed': [
                true,
                r1_bitOr(r272_xn$SLABTOP$5sIl, r272_xn$SLABLEFT$5sIl),
                r1_bitOr(r272_xn$SLABTOP$5sIl, r272_xn$SLABRIGHT$5sIl)
            ],
            'curlyTriSerifed': [
                false,
                r1_bitOr(r272_xn$SLABTOP$5sIl, r272_xn$SLABLEFT$5sIl),
                r1_bitOr(r272_xn$SLABTOP$5sIl, r272_xn$SLABRIGHT$5sIl)
            ]
        };
        var _r272_t9 = Object.entries(r272_ALetters)[Symbol.iterator]();
        var _r272_t10 = void 0;
        while (!(_r272_t10 = _r272_t9.next()).done) {
            _r272_t11 = _r272_t10.value;
            r272_prefix = _r272_t11[0];
            r272_code = _r272_t11[1][0];
            r272_mk = _r272_t11[1][1];
            r272_height = _r272_t11[1][2];
            _r272_t11[1];
            (function () {
                var r282_suffix, r282_fStraightBar, r282_skLeft, r282_skRight, _r282_t2, _r282_t3, _r282_tag4;
                var _r282_t0 = Object.entries(r272_AConfig)[Symbol.iterator]();
                var _r282_t1 = void 0;
                while (!(_r282_t1 = _r282_t0.next()).done) {
                    _r282_t2 = _r282_t1.value;
                    r282_suffix = _r282_t2[0];
                    r282_fStraightBar = _r282_t2[1][0];
                    r282_skLeft = _r282_t2[1][1];
                    r282_skRight = _r282_t2[1][2];
                    _r282_t2[1];
                    (function () {
                        r272_xn$createAndSaveGlyphImpl$2Lrc3c('' + r272_prefix + '/Left.' + r282_suffix, null, function () {
                            var _r288_t1;
                            var _r288_t0 = this;
                            var r288_currentGlyph = _r288_t0;
                            var r288_df = r272_DivFrame(r272_para.diversityM, 3.5);
                            r288_currentGlyph.setWidth(r288_df.width);
                            r288_currentGlyph.include(r288_df.markSet[r272_mk]());
                            r288_currentGlyph.setBaseAnchor('cvDecompose', 0, 0);
                            r288_currentGlyph.include(r272_AHalfShape(0, r288_df, r272_height, r282_fStraightBar, r282_skLeft));
                            return void 0;
                        });
                        r272_xn$createAndSaveGlyphImpl$2Lrc3c('' + r272_prefix + '/LeftMask.' + r282_suffix, null, function () {
                            var _r295_t1;
                            var _r295_t0 = this;
                            var r295_currentGlyph = _r295_t0;
                            var r295_df = r272_DivFrame(r272_para.diversityM, 3.5);
                            r295_currentGlyph.setWidth(r295_df.width);
                            r295_currentGlyph.include(r295_df.markSet[r272_mk]());
                            r295_currentGlyph.setBaseAnchor('cvDecompose', 0, 0);
                            r295_currentGlyph.include(r272_AHalfShapeMask(0, r295_df, r272_height, r282_fStraightBar, r282_skLeft));
                            return void 0;
                        });
                        r272_xn$createAndSaveGlyphImpl$2Lrc3c('' + r272_prefix + '/Right.' + r282_suffix, null, function () {
                            var _r302_t1;
                            var _r302_t0 = this;
                            var r302_currentGlyph = _r302_t0;
                            var r302_df = r272_DivFrame(r272_para.diversityM, 3.5);
                            r302_currentGlyph.setWidth(0);
                            r302_currentGlyph.include(r302_df.markSet[r272_mk]());
                            r302_currentGlyph.setMarkAnchor('cvDecompose', 0, 0, 0, 0);
                            r302_currentGlyph.include(r272_AHalfShape(1, r302_df, r272_height, r282_fStraightBar, r282_skRight));
                            return void 0;
                        });
                        return r272_xn$createAndSaveGlyphImpl$2Lrc3c('' + r272_prefix + '/RightMask.' + r282_suffix, null, function () {
                            var _r309_t1;
                            var _r309_t0 = this;
                            var r309_currentGlyph = _r309_t0;
                            var r309_df = r272_DivFrame(r272_para.diversityM, 3.5);
                            r309_currentGlyph.setWidth(0);
                            r309_currentGlyph.include(r309_df.markSet[r272_mk]());
                            r309_currentGlyph.setMarkAnchor('cvDecompose', 0, 0, 0, 0);
                            r309_currentGlyph.include(r272_AHalfShapeMask(1, r309_df, r272_height, r282_fStraightBar, r282_skRight));
                            return void 0;
                        });
                    }());
                }
                r272_xn$selectvariant$7Hrq('' + r272_prefix + '/Left', new r272_xn$NamedParameterPair$2Lrc9b('follow', 'A'));
                r272_xn$selectvariant$7Hrq('' + r272_prefix + '/LeftMask', new r272_xn$NamedParameterPair$2Lrc9b('follow', 'A'));
                r272_xn$selectvariant$7Hrq('' + r272_prefix + '/Right', new r272_xn$NamedParameterPair$2Lrc9b('follow', 'A'));
                r272_xn$selectvariant$7Hrq('' + r272_prefix + '/RightMask', new r272_xn$NamedParameterPair$2Lrc9b('follow', 'A'));
                return r272_xn$derivemultipartglyphs$7Hrq65(r272_prefix, r272_code, [
                    '' + r272_prefix + '/Left',
                    '' + r272_prefix + '/LeftMask',
                    '' + r272_prefix + '/Right',
                    '' + r272_prefix + '/RightMask'
                ], function (r318_srcs, r318_gr) {
                    var _r318_t0, _r318_t1;
                    return function () {
                        var _r320_t2;
                        var _r320_t1 = this;
                        var r320_currentGlyph = _r320_t1;
                        var r320_df = r272_DivFrame(r272_para.diversityM, 3.5);
                        var r320_topSerifGap = Math.max(0.1 * (r320_df.rightSB - r320_df.leftSB), r272_AdviceStroke(6));
                        var _r320_t0 = r318_srcs;
                        var r320_left = _r320_t0[0];
                        var r320_leftMask = _r320_t0[1];
                        var r320_right = _r320_t0[2];
                        var r320_rightMask = _r320_t0[3];
                        r320_currentGlyph.include(r272_xn$addglyphdependency$9Jrj6(r320_left));
                        r320_currentGlyph.include(r272_xn$addglyphdependency$9Jrj6(r320_leftMask));
                        r320_currentGlyph.include(r272_xn$addglyphdependency$9Jrj6(r320_right));
                        r320_currentGlyph.include(r272_xn$addglyphdependency$9Jrj6(r320_rightMask));
                        r320_currentGlyph.include(r272_xn$referglyph$1aao(r320_left), r272_AS_BASE, r272_ALSO_METRICS);
                        r320_currentGlyph.include(r272_difference(r272_xn$referglyph$1aao(r320_right), r272_xn$referglyph$1aao(r320_leftMask), r272_difference(r272_intersection(r272_MaskAbove(r272_height - r272_Stroke), r272_WithTransform(r272_ApparentTranslate(r320_topSerifGap, 0), r272_xn$referglyph$1aao(r320_leftMask))), r272_WithTransform(r272_ApparentTranslate(r272_OX - 0.1, 0), r272_xn$referglyph$1aao(r320_rightMask)))));
                        return void 0;
                    };
                });
            }());
        }
        return r272_xn$derivemultipartglyphs$7Hrq65('AO', 42804, [
            'AA/Left',
            'AA/LeftMask',
            'OO/right'
        ], function (r327_srcs, r327_gr) {
            var _r327_t0, _r327_t1;
            return function () {
                var _r329_t2;
                var _r329_t1 = this;
                var r329_currentGlyph = _r329_t1;
                var r329_df = r272_DivFrame(r272_para.diversityM, 3.5);
                var r329_topSerifGap = Math.max(0.1 * (r329_df.rightSB - r329_df.leftSB), r272_AdviceStroke(6));
                var _r329_t0 = r327_srcs;
                var r329_left = _r329_t0[0];
                var r329_leftMask = _r329_t0[1];
                var r329_right = _r329_t0[2];
                r329_currentGlyph.include(r272_xn$referglyph$1aao(r329_left), r272_AS_BASE, r272_ALSO_METRICS);
                r329_currentGlyph.include(r272_difference(r272_xn$referglyph$1aao(r329_right), r272_xn$referglyph$1aao(r329_leftMask)));
                return void 0;
            };
        });
    });
    return void 0;
});
