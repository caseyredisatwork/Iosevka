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
    r270_xn$Capture_Ext$2Lrc2b['$defineGlyphBlockImpl$'](r270_xn$Capture_Ext$2Lrc2b, 'Letter-Latin-Lower-AE-OE', function (r271_xn$Capture$2Lrc8, r271_xn$ExportCapture$2Lrc4b) {
        var _r271_t7, _r271_t8, _r271_t9, _r271_tag10, _r271_t11, _r271_tag12, _r271_t13, _r271_tag14, _r271_t15, _r271_tag16, _r271_t17, _r271_tag18, _r271_t19, _r271_tag20, _r271_t21, _r271_tag22;
        var _r271_t0 = r271_xn$Capture$2Lrc8;
        var r271_xn$createAndSaveGlyphImpl$2Lrc3c = _r271_t0['$createAndSaveGlyphImpl$'];
        var r271_xn$NamedParameterPair$2Lrc9b = _r271_t0['$NamedParameterPair$'];
        var r271_xn$assignUnicodeImpl$2Lrc8b = _r271_t0['$assignUnicodeImpl$'];
        var r271_xn$execState$2Lrc0b = _r271_t0['$execState$'];
        var r271_para = _r271_t0.para;
        var r271_tagged = _r271_t0.tagged;
        var r271_DivFrame = _r271_t0.DivFrame;
        var _r271_t1 = r271_xn$Capture$2Lrc8.Metrics;
        var r271_CAP = _r271_t1.CAP;
        var r271_XH = _r271_t1.XH;
        var r271_ApparentTranslate = _r271_t1.ApparentTranslate;
        var r271_HVContrast = _r271_t1.HVContrast;
        var r271_OX = _r271_t1.OX;
        var r271_ArchDepth = _r271_t1.ArchDepth;
        var r271_SmallArchDepth = _r271_t1.SmallArchDepth;
        var r271_OverlayPos = _r271_t1.OverlayPos;
        var r271_LongJut = _r271_t1.LongJut;
        var r271_Jut = _r271_t1.Jut;
        var r271_VJut = _r271_t1.VJut;
        var r271_SideJut = _r271_t1.SideJut;
        var r271_OverlayStroke = _r271_t1.OverlayStroke;
        var _r271_t2 = r271_xn$Capture$2Lrc8.SpiroFns;
        var r271_flat = _r271_t2.flat;
        var r271_curl = _r271_t2.curl;
        var r271_widths = _r271_t2.widths;
        var r271_dispiro = _r271_t2.dispiro;
        var _r271_t3 = r271_xn$Capture$2Lrc8.BooleFns;
        var r271_union = _r271_t3.union;
        var r271_intersection = _r271_t3.intersection;
        var r271_difference = _r271_t3.difference;
        var _r271_t4 = r271_xn$Capture$2Lrc8.CommonShapes.resolve();
        var r271_DotAt = _r271_t4.DotAt;
        var r271_OShape = _r271_t4.OShape;
        var r271_HSerif = _r271_t4.HSerif;
        var r271_VSerif = _r271_t4.VSerif;
        var r271_HBar = _r271_t4.HBar;
        var r271_VBar = _r271_t4.VBar;
        var r271_FlipAround = _r271_t4.FlipAround;
        var r271_WithTransform = _r271_t4.WithTransform;
        var r271_MaskAbove = _r271_t4.MaskAbove;
        var r271_MaskBelow = _r271_t4.MaskBelow;
        var r271_DotVariants = _r271_t4.DotVariants;
        var _r271_t5 = r271_xn$Capture$2Lrc8['Common-Derivatives'].resolve();
        var r271_xn$selectvariant$7Hrq = _r271_t5['select-variant'];
        var r271_alias = _r271_t5.alias;
        var r271_turned = _r271_t5.turned;
        var r271_xn$derivecomposites$7Hrq = _r271_t5['derive-composites'];
        var _r271_t6 = r271_xn$Capture$2Lrc8['Letter-Shared-Shapes'].resolve();
        var r271_nShoulder = _r271_t6.nShoulder;
        var r271_OBarLeft = _r271_t6.OBarLeft;
        r271_xn$ExportCapture$2Lrc4b(function () {
            var _r276_t0, _r276_t1;
            return { 'SubDfAndShift': r271_SubDfAndShift };
        });
        var r271_SubDfAndShift = function (r277_pShift, r277_df, r277__o) {
            var _r277_t0, _r277_t1;
            var r277_subDf = r277_df.slice(3, 2, r277__o);
            var r277_subDfFullShift = r277_df.rightSB - r277_subDf.rightSB;
            var r277_shift = r277_pShift * r277_subDfFullShift;
            return [
                r277_subDf,
                r277_shift
            ];
        };
        (function () {
            var r279_suffix, r279_bodyR, _r279_t3, _r279_t5, _r279_t6, _r279_tag7;
            var r279_AAShape = function (r280_pShift, r280_df, r280_body, r280_o) {
                var _r280_t1, _r280_t2;
                var _r280_t0 = r271_SubDfAndShift(r280_pShift, r280_df, r280_o);
                var r280_subDf = _r280_t0[0];
                var r280_shift = _r280_t0[1];
                return r271_WithTransform(r271_ApparentTranslate(r280_shift, 0), r280_body(r280_subDf, r280_df.mvs));
            };
            var _r279_t0 = r271_xn$Capture$2Lrc8['Letter-Latin-Lower-A'].resolve();
            var r279_DoubleStorey = _r279_t0.DoubleStorey;
            var r279_DoubleStoreyConfig = {
                'doubleStoreySerifless': [r279_DoubleStorey.Serifless],
                'doubleStoreySerifed': [r279_DoubleStorey.Serifed],
                'doubleStoreyTailed': [r279_DoubleStorey.Tailed],
                'doubleStoreyToothlessCorner': [r279_DoubleStorey.ToothlessCorner],
                'doubleStoreyToothlessRounded': [r279_DoubleStorey.ToothlessRounded]
            };
            r271_xn$createAndSaveGlyphImpl$2Lrc3c('ae/a', null, function () {
                var _r284_t1;
                var _r284_t0 = this;
                var r284_currentGlyph = _r284_t0;
                var r284_df = r271_DivFrame(r271_para.diversityM, 3);
                r284_currentGlyph.include(r284_df.markSet.e());
                r284_currentGlyph.setWidth(r284_df.width);
                r284_currentGlyph.setBaseAnchor('cvDecompose', 0, 0);
                r284_currentGlyph.include(r279_AAShape(0, r284_df, r279_DoubleStorey.ToothlessRounded, 0));
                return void 0;
            });
            var _r279_t1 = Object.entries(r279_DoubleStoreyConfig)[Symbol.iterator]();
            var _r279_t2 = void 0;
            var _r279_t4 = !(_r279_t2 = _r279_t1.next()).done;
            while (_r279_t4) {
                _r279_t3 = _r279_t2.value;
                r279_suffix = _r279_t3[0];
                r279_bodyR = _r279_t3[1][0];
                _r279_t3[1];
                _r279_t5 = function () {
                    return r271_xn$createAndSaveGlyphImpl$2Lrc3c('aa.' + r279_suffix, null, function () {
                        var _r294_t1;
                        var _r294_t0 = this;
                        var r294_currentGlyph = _r294_t0;
                        var r294_df = r271_DivFrame(r271_para.diversityM, 3);
                        r294_currentGlyph.include(r294_df.markSet.e());
                        r294_currentGlyph.setWidth(r294_df.width);
                        var r294_left = function () {
                            var _r297_t0, _r297_t1;
                            return r279_AAShape(0, r294_df, r279_DoubleStorey.ToothlessRounded);
                        };
                        var r294_right = function () {
                            var _r298_t0, _r298_t1;
                            return r279_AAShape(1, r294_df, r279_bodyR);
                        };
                        r294_currentGlyph.include(r271_difference(r294_right(), r271_intersection(r271_MaskAbove(r271_XH * r271_OverlayPos * 1.02), r271_union(r271_WithTransform(r271_ApparentTranslate(-0.25 * r294_df.mvs, 0), r294_left()), r271_WithTransform(r271_ApparentTranslate(-0.5 * r294_df.mvs, 0), r294_left()), r271_WithTransform(r271_ApparentTranslate(-0.75 * r294_df.mvs, 0), r294_left()), r271_WithTransform(r271_ApparentTranslate(-1 * r294_df.mvs, 0), r294_left())))));
                        r294_currentGlyph.include(r271_difference(r294_left(), r271_intersection(r271_MaskBelow(r271_XH * r271_OverlayPos * 1.02), r271_union(r271_WithTransform(r271_ApparentTranslate(+0.25 * r294_df.mvs, 0), r294_right()), r271_WithTransform(r271_ApparentTranslate(+0.5 * r294_df.mvs, 0), r294_right()), r271_WithTransform(r271_ApparentTranslate(+0.75 * r294_df.mvs, 0), r294_right()), r271_WithTransform(r271_ApparentTranslate(+1 * r294_df.mvs, 0), r294_right())))));
                        return void 0;
                    });
                }();
                _r279_t4 = !(_r279_t2 = _r279_t1.next()).done;
            }
            return _r279_t5;
        }());
        (function () {
            var r302_oeOPart = function (r303_pShift, r303_df, r303_top, r303_ad) {
                var _r303_t1, _r303_t2;
                var _r303_t0 = r271_SubDfAndShift(r303_pShift, r303_df, r271_OX);
                var r303_subDf = _r303_t0[0];
                var r303_shift = _r303_t0[1];
                return r271_WithTransform(r271_ApparentTranslate(r303_shift, 0), r271_OShape(r303_top, 0, r303_subDf.leftSB, r303_subDf.rightSB, r303_df.mvs, r303_subDf.archDepthA(r303_ad), r303_subDf.archDepthB(r303_ad)));
            };
            r271_xn$createAndSaveGlyphImpl$2Lrc3c('oe/o', null, function () {
                var _r306_t1;
                var _r306_t0 = this;
                var r306_currentGlyph = _r306_t0;
                var r306_df = r271_DivFrame(r271_para.diversityM, 3);
                r306_currentGlyph.include(r306_df.markSet.e());
                r306_currentGlyph.setWidth(r306_df.width);
                r306_currentGlyph.setBaseAnchor('cvDecompose', 0, 0);
                r306_currentGlyph.include(r302_oeOPart(0, r306_df, r271_XH, r271_SmallArchDepth));
                return void 0;
            });
            r271_xn$createAndSaveGlyphImpl$2Lrc3c('ao/o', null, function () {
                var _r313_t1;
                var _r313_t0 = this;
                var r313_currentGlyph = _r313_t0;
                var r313_df = r271_DivFrame(r271_para.diversityM, 3);
                r313_currentGlyph.setWidth(r313_df.width);
                r313_currentGlyph.setMarkAnchor('cvDecompose', 0, 0);
                r313_currentGlyph.include(r302_oeOPart(1, r313_df, r271_XH, r271_SmallArchDepth));
                return void 0;
            });
            r271_xn$createAndSaveGlyphImpl$2Lrc3c('OO/left', null, function () {
                var _r319_t1;
                var _r319_t0 = this;
                var r319_currentGlyph = _r319_t0;
                var r319_df = r271_DivFrame(r271_para.diversityM, 3);
                r319_currentGlyph.include(r319_df.markSet.capital());
                r319_currentGlyph.setWidth(r319_df.width);
                r319_currentGlyph.setBaseAnchor('cvDecompose', 0, 0);
                r319_currentGlyph.include(r302_oeOPart(0, r319_df, r271_CAP, r271_ArchDepth));
                return void 0;
            });
            return r271_xn$createAndSaveGlyphImpl$2Lrc3c('OO/right', null, function () {
                var _r326_t1;
                var _r326_t0 = this;
                var r326_currentGlyph = _r326_t0;
                var r326_df = r271_DivFrame(r271_para.diversityM, 3);
                r326_currentGlyph.setWidth(r326_df.width);
                r326_currentGlyph.setMarkAnchor('cvDecompose', 0, 0);
                r326_currentGlyph.include(r302_oeOPart(1, r326_df, r271_CAP, r271_ArchDepth));
                return void 0;
            });
        }());
        (function () {
            var r331_suffix, r331_body, r331_revbody, _r331_t3, _r331_t5, _r331_t6, _r331_tag7;
            var _r331_t0 = r271_xn$Capture$2Lrc8['Letter-Latin-Lower-E'].resolve();
            var r331_SmallEShape = _r331_t0.SmallEShape;
            var r331_SmallERoundedShape = _r331_t0.SmallERoundedShape;
            var r331_RevSmallEShape = _r331_t0.RevSmallEShape;
            var r331_RevSmallERoundedShape = _r331_t0.RevSmallERoundedShape;
            var r331_EShape = function (r333_pShift, r333_df, r333_body) {
                var _r333_t1, _r333_t2;
                var _r333_t0 = r271_SubDfAndShift(r333_pShift, r333_df, r271_OX);
                var r333_subDf = _r333_t0[0];
                var r333_shift = _r333_t0[1];
                return r271_WithTransform(r271_ApparentTranslate(r333_shift, 0), r333_body(r333_subDf, r271_XH, r333_df.mvs));
            };
            var r331_InvEShape = function (r334_pShift, r334_df, r334_revbody) {
                var _r334_t1, _r334_t2;
                var _r334_t0 = r271_SubDfAndShift(r334_pShift, r334_df, r271_OX);
                var r334_subDf = _r334_t0[0];
                var r334_shift = _r334_t0[1];
                return r271_WithTransform(r271_ApparentTranslate(r334_shift, 0), r271_WithTransform(r271_FlipAround(r334_subDf.middle, r271_XH / 2), r334_revbody(r334_subDf, r271_XH, r334_df.mvs)));
            };
            var r331_Config = {
                'flatCrossbar': [
                    r331_SmallEShape,
                    r331_RevSmallEShape
                ],
                'rounded': [
                    r331_SmallERoundedShape,
                    r331_RevSmallERoundedShape
                ]
            };
            var _r331_t1 = Object.entries(r331_Config)[Symbol.iterator]();
            var _r331_t2 = void 0;
            var _r331_t4 = !(_r331_t2 = _r331_t1.next()).done;
            while (_r331_t4) {
                _r331_t3 = _r331_t2.value;
                r331_suffix = _r331_t3[0];
                r331_body = _r331_t3[1][0];
                r331_revbody = _r331_t3[1][1];
                _r331_t3[1];
                _r331_t5 = function () {
                    r271_xn$createAndSaveGlyphImpl$2Lrc3c('ae/e.' + r331_suffix, null, function () {
                        var _r340_t1;
                        var _r340_t0 = this;
                        var r340_currentGlyph = _r340_t0;
                        var r340_df = r271_DivFrame(r271_para.diversityM, 3);
                        r340_currentGlyph.setWidth(0);
                        r340_currentGlyph.setMarkAnchor('cvDecompose', 0, 0);
                        r340_currentGlyph.include(r331_EShape(1, r340_df, r331_body));
                        return void 0;
                    });
                    return r271_xn$createAndSaveGlyphImpl$2Lrc3c('aeInvE/right.' + r331_suffix, null, function () {
                        var _r346_t1;
                        var _r346_t0 = this;
                        var r346_currentGlyph = _r346_t0;
                        var r346_df = r271_DivFrame(r271_para.diversityM, 3);
                        r346_currentGlyph.setWidth(0);
                        r346_currentGlyph.setMarkAnchor('cvDecompose', 0, 0);
                        r346_currentGlyph.include(r331_InvEShape(1, r346_df, r331_revbody));
                        return void 0;
                    });
                }();
                _r331_t4 = !(_r331_t2 = _r331_t1.next()).done;
            }
            return _r331_t5;
        }());
        (function () {
            var r351_suffix, r351_fSlab, _r351_t2, _r351_t4, _r351_t5, _r351_tag6;
            var r351_ueUPart = function (r352_df, r352_fSlab) {
                var _r352_t0, _r352_t1;
                return r271_xn$createAndSaveGlyphImpl$2Lrc3c(null, null, function () {
                    var _r355_t2;
                    var _r355_t1 = this;
                    var r355_currentGlyph = _r355_t1;
                    var _r355_t0 = r271_SubDfAndShift(0, r352_df, 0);
                    var r355_subDf = _r355_t0[0];
                    var r355_ada = r355_subDf.archDepthA(r271_SmallArchDepth, r352_df.mvs);
                    var r355_adb = r355_subDf.archDepthB(r271_SmallArchDepth, r352_df.mvs);
                    var r355_abarRight = r352_df.middle + r352_df.mvs / 2 * r271_HVContrast;
                    r355_currentGlyph.include(r271_nShoulder(new r271_xn$NamedParameterPair$2Lrc9b('left', r355_abarRight), new r271_xn$NamedParameterPair$2Lrc9b('right', r352_df.rightSB - r271_OX), new r271_xn$NamedParameterPair$2Lrc9b('stroke', r352_df.mvs), new r271_xn$NamedParameterPair$2Lrc9b('ada', r355_adb), new r271_xn$NamedParameterPair$2Lrc9b('adb', r355_adb)));
                    r355_currentGlyph.include(r271_FlipAround(r352_df.middle, r271_XH / 2));
                    if (r352_fSlab)
                        r355_currentGlyph.include(r271_HSerif.lt(r352_df.leftSB, r271_XH, r271_SideJut));
                    return void 0;
                });
            };
            var r351_Config = {
                'serifed': [true],
                'serifless': [false]
            };
            var _r351_t0 = Object.entries(r351_Config)[Symbol.iterator]();
            var _r351_t1 = void 0;
            var _r351_t3 = !(_r351_t1 = _r351_t0.next()).done;
            while (_r351_t3) {
                _r351_t2 = _r351_t1.value;
                r351_suffix = _r351_t2[0];
                r351_fSlab = _r351_t2[1][0];
                _r351_t2[1];
                _r351_t4 = function () {
                    return r271_xn$createAndSaveGlyphImpl$2Lrc3c('ue/u.' + r351_suffix, null, function () {
                        var _r369_t1;
                        var _r369_t0 = this;
                        var r369_currentGlyph = _r369_t0;
                        var r369_df = r271_DivFrame(r271_para.diversityM, 3);
                        r369_currentGlyph.include(r369_df.markSet.e());
                        r369_currentGlyph.setWidth(r369_df.width);
                        r369_currentGlyph.setBaseAnchor('cvDecompose', 0, 0);
                        r369_currentGlyph.include(r351_ueUPart(r369_df, r351_fSlab));
                        return void 0;
                    });
                }();
                _r351_t3 = !(_r351_t1 = _r351_t0.next()).done;
            }
            return _r351_t4;
        }());
        (function () {
            var r375_suffix, r375_sty, r375_styBot, _r375_t3, _r375_t5, _r375_t6, _r375_tag7;
            var _r375_t0 = r271_xn$Capture$2Lrc8['Letter-Latin-C'].resolve();
            var r375_CLetterForm = _r375_t0.CLetterForm;
            var r375_CConfig = _r375_t0.CConfig;
            var r375_openOShape = function (r377_df, r377_sty, r377_styBot) {
                var _r377_t0, _r377_t1;
                return r271_xn$createAndSaveGlyphImpl$2Lrc3c(null, null, function () {
                    var _r380_t2;
                    var _r380_t1 = this;
                    var r380_currentGlyph = _r380_t1;
                    var _r380_t0 = r271_SubDfAndShift(0, r377_df, r271_OX);
                    var r380_subDf = _r380_t0[0];
                    var r380_ada = r380_subDf.archDepthA(r271_SmallArchDepth, r377_df.mvs);
                    var r380_adb = r380_subDf.archDepthB(r271_SmallArchDepth, r377_df.mvs);
                    var r380_lf = r375_CLetterForm(r380_subDf, r377_sty, r377_styBot, r271_XH, 0, new r271_xn$NamedParameterPair$2Lrc9b('ada', r380_subDf.archDepthA(r271_SmallArchDepth, r377_df.mvs)), new r271_xn$NamedParameterPair$2Lrc9b('adb', r380_subDf.archDepthB(r271_SmallArchDepth, r377_df.mvs)), new r271_xn$NamedParameterPair$2Lrc9b('sw', r377_df.mvs));
                    r380_currentGlyph.include(r380_lf.full());
                    r380_currentGlyph.include(r271_FlipAround(r380_subDf.width / 2, r271_XH / 2));
                    return void 0;
                });
            };
            var r375_xn$SLABFLAT$5sIl = 3;
            var r375_EsTeLeftShape = function (r386_df, r386_styBot) {
                var _r386_t0, _r386_t1;
                return r271_xn$createAndSaveGlyphImpl$2Lrc3c(null, null, function () {
                    var _r389_t1;
                    var _r389_t0 = this;
                    var r389_currentGlyph = _r389_t0;
                    var r389_subDf = r386_df.sliceFine(3, 2, 1 / 3);
                    var r389_ada = r389_subDf.archDepthA(r271_SmallArchDepth, r386_df.mvs);
                    var r389_adb = r389_subDf.archDepthB(r271_SmallArchDepth, r386_df.mvs);
                    var r389_lf = r375_CLetterForm(r389_subDf, r375_xn$SLABFLAT$5sIl, r386_styBot, r271_XH, 0, new r271_xn$NamedParameterPair$2Lrc9b('ada', r389_subDf.archDepthA(r271_SmallArchDepth, r386_df.mvs)), new r271_xn$NamedParameterPair$2Lrc9b('adb', r389_subDf.archDepthB(r271_SmallArchDepth, r386_df.mvs)), new r271_xn$NamedParameterPair$2Lrc9b('sw', r386_df.mvs));
                    r389_currentGlyph.include(r389_lf.full());
                    return void 0;
                });
            };
            var _r375_t1 = Object.entries(r375_CConfig)[Symbol.iterator]();
            var _r375_t2 = void 0;
            var _r375_t4 = !(_r375_t2 = _r375_t1.next()).done;
            while (_r375_t4) {
                _r375_t3 = _r375_t2.value;
                r375_suffix = _r375_t3[0];
                r375_sty = _r375_t3[1][0];
                r375_styBot = _r375_t3[1][1];
                _r375_t3[1];
                _r375_t5 = function () {
                    r271_xn$createAndSaveGlyphImpl$2Lrc3c('oeOpenO/left.' + r375_suffix, null, function () {
                        var _r399_t1;
                        var _r399_t0 = this;
                        var r399_currentGlyph = _r399_t0;
                        var r399_df = r271_DivFrame(r271_para.diversityM, 3);
                        r399_currentGlyph.include(r399_df.markSet.e());
                        r399_currentGlyph.setWidth(r399_df.width);
                        r399_currentGlyph.setBaseAnchor('cvDecompose', 0, 0);
                        r399_currentGlyph.include(r375_openOShape(r399_df, r375_sty, r375_styBot));
                        return void 0;
                    });
                    return r271_xn$createAndSaveGlyphImpl$2Lrc3c('cyrl/este/left.' + r375_suffix, null, function () {
                        var _r406_t1;
                        var _r406_t0 = this;
                        var r406_currentGlyph = _r406_t0;
                        var r406_df = r271_DivFrame(r271_para.diversityM, 3);
                        r406_currentGlyph.include(r406_df.markSet.e());
                        r406_currentGlyph.setWidth(r406_df.width);
                        r406_currentGlyph.setBaseAnchor('cvDecompose', 0, 0);
                        r406_currentGlyph.include(r375_EsTeLeftShape(r406_df, r375_styBot));
                        return void 0;
                    });
                }();
                _r375_t4 = !(_r375_t2 = _r375_t1.next()).done;
            }
            return _r375_t5;
        }());
        (function () {
            var r412_suffix, r412_doST, r412_doSB, _r412_t2, _r412_t4, _r412_t5, _r412_tag6;
            var r412_EsTeRightShape = function (r413_df, r413_doTopSerifs, r413_doBottomSerifs) {
                var _r413_t0, _r413_t1;
                return r271_xn$createAndSaveGlyphImpl$2Lrc3c(null, null, function () {
                    var r416_swVJut, r416_midJutCenter, _r416_t1;
                    var _r416_t0 = this;
                    var r416_currentGlyph = _r416_t0;
                    var r416_subDf = r413_df.sliceFine(3, 2, 1 / 3);
                    var r416_l = r416_subDf.rightSB;
                    var r416_m = r1_mix(r413_df.rightSB, r416_subDf.rightSB, 0.5);
                    var r416_r = r413_df.rightSB - 0.75 * r271_OX;
                    r416_currentGlyph.include(r271_VBar.m(r416_m, 0, r271_XH, r413_df.mvs));
                    r416_currentGlyph.include(r271_HBar.t(r416_l, r416_r, r271_XH, r413_df.mvs));
                    if (r413_doTopSerifs) {
                        r416_swVJut = Math.min(r413_df.mvs, 0.625 * (r416_r - r416_m - 0.5 * r413_df.mvs * r271_HVContrast));
                        r416_currentGlyph.include(r271_VSerif.dr(r416_r, r271_XH, r271_VJut, r416_swVJut));
                    }
                    if (r413_doBottomSerifs) {
                        r416_midJutCenter = Math.max(r271_Jut, r1_mix(0.5 * r413_df.mvs * r271_HVContrast, r271_LongJut, 0.6)) * (r416_subDf.width / r413_df.width);
                        r416_currentGlyph.include(r271_tagged('serifMB', r271_HSerif.rb(r416_m, 0, r416_midJutCenter, r413_df.mvs)));
                    }
                    return void 0;
                });
            };
            var r412_TConfig = {
                'serifless': [
                    false,
                    false
                ],
                'motionSerifed': [
                    true,
                    false
                ],
                'serifed': [
                    true,
                    true
                ]
            };
            var _r412_t0 = Object.entries(r412_TConfig)[Symbol.iterator]();
            var _r412_t1 = void 0;
            var _r412_t3 = !(_r412_t1 = _r412_t0.next()).done;
            while (_r412_t3) {
                _r412_t2 = _r412_t1.value;
                r412_suffix = _r412_t2[0];
                r412_doST = _r412_t2[1][0];
                r412_doSB = _r412_t2[1][1];
                _r412_t2[1];
                _r412_t4 = function () {
                    return r271_xn$createAndSaveGlyphImpl$2Lrc3c('cyrl/este/right.' + r412_suffix, null, function () {
                        var _r426_t1;
                        var _r426_t0 = this;
                        var r426_currentGlyph = _r426_t0;
                        var r426_df = r271_DivFrame(r271_para.diversityM, 3);
                        r426_currentGlyph.setWidth(0);
                        r426_currentGlyph.setMarkAnchor('cvDecompose', 0, 0);
                        r426_currentGlyph.include(r412_EsTeRightShape(r426_df, r412_doST, r412_doSB));
                        return void 0;
                    });
                }();
                _r412_t3 = !(_r412_t1 = _r412_t0.next()).done;
            }
            return _r412_t4;
        }());
        (function () {
            var r431_suffix, r431_DrawAt, r431_kdr, _r431_t3, _r431_t5, _r431_t6, _r431_tag7;
            var _r431_t0 = r271_xn$Capture$2Lrc8['Mark-Overlay'].resolve();
            var r431_InnerDot = _r431_t0.InnerDot;
            r271_xn$createAndSaveGlyphImpl$2Lrc3c('rightHalfSlashOverlay', null, function () {
                var _r435_t2;
                var _r435_t1 = this;
                var r435_currentGlyph = _r435_t1;
                var r435_fine = 0.375 * r271_OverlayStroke;
                var _r435_t0 = r271_SubDfAndShift(1, r271_DivFrame(r271_para.diversityM, 3), r271_OX);
                var r435_subDf = _r435_t0[0];
                var r435_shift = _r435_t0[1];
                r435_currentGlyph.include(r271_dispiro(r271_flat(r435_shift + r435_subDf.leftSB + r271_OX + r435_fine, r1_mix(r271_XH, 0, 1.05), r271_widths(r435_fine, r435_fine)), r271_curl(r435_shift + r435_subDf.rightSB - r271_OX - r435_fine, r1_mix(0, r271_XH, 1.05))));
                return void 0;
            });
            r271_xn$createAndSaveGlyphImpl$2Lrc3c('rightHalfBarOverlay', null, function () {
                var _r439_t2;
                var _r439_t1 = this;
                var r439_currentGlyph = _r439_t1;
                var _r439_t0 = r271_SubDfAndShift(1, r271_DivFrame(r271_para.diversityM, 3), r271_OX);
                var r439_subDf = _r439_t0[0];
                var r439_shift = _r439_t0[1];
                r439_currentGlyph.include(r271_HBar.m(r439_shift + r439_subDf.leftSB + r271_OX + 1, r439_shift + r439_subDf.rightSB - r271_OX - 1, r271_XH * 0.5, r271_OverlayStroke));
                return void 0;
            });
            var r431_OODots = function (r441_df, r441_kHeight, r441_fRound, r441_kdr) {
                var _r441_t0, _r441_t1;
                return function () {
                    var _r443_t2;
                    var _r443_t1 = this;
                    var r443_currentGlyph = _r443_t1;
                    var _r443_t0 = r271_SubDfAndShift(0, r441_df, r271_OX);
                    var r443_subDf = _r443_t0[0];
                    var r443_shift = _r443_t0[1];
                    var r443_space = r431_InnerDot.spaceOfDf(r443_subDf);
                    var r443_kHeight2 = Math.sqrt(r431_InnerDot.spaceOfDf(r271_DivFrame(1)) / r443_space) * r441_kHeight;
                    var r443_offset = 0.5 * (r443_space + r441_df.mvs * r271_HVContrast);
                    r443_currentGlyph.include(r431_InnerDot(-r443_offset, 0, r443_kHeight2, r441_fRound, r441_kdr, r443_space, 3));
                    r443_currentGlyph.include(r431_InnerDot(r443_offset, 0, r443_kHeight2, r441_fRound, r441_kdr, r443_space, 3));
                    return void 0;
                };
            };
            var _r431_t1 = Object.entries(r271_DotVariants)[Symbol.iterator]();
            var _r431_t2 = void 0;
            var _r431_t4 = !(_r431_t2 = _r431_t1.next()).done;
            while (_r431_t4) {
                _r431_t3 = _r431_t2.value;
                r431_suffix = _r431_t3[0];
                r431_DrawAt = _r431_t3[1][0];
                r431_kdr = _r431_t3[1][1];
                _r431_t3[1];
                _r431_t5 = function () {
                    r271_xn$createAndSaveGlyphImpl$2Lrc3c('OODots.' + r431_suffix, null, function () {
                        var _r451_t1;
                        var _r451_t0 = this;
                        var r451_currentGlyph = _r451_t0;
                        r451_currentGlyph.setWidth(0);
                        r451_currentGlyph.setMarkAnchor('slash', 0, 0, 0, 0);
                        var r451_df = r271_DivFrame(r271_para.diversityM, 3);
                        r451_currentGlyph.include(r431_OODots(r451_df, 2, r431_DrawAt === r271_DotAt, r431_kdr));
                        return void 0;
                    });
                    return r271_xn$createAndSaveGlyphImpl$2Lrc3c('ooDots.' + r431_suffix, null, function () {
                        var _r457_t1;
                        var _r457_t0 = this;
                        var r457_currentGlyph = _r457_t0;
                        r457_currentGlyph.setWidth(0);
                        r457_currentGlyph.setMarkAnchor('slash', 0, 0, 0, 0);
                        var r457_df = r271_DivFrame(r271_para.diversityM, 3);
                        r457_currentGlyph.include(r431_OODots(r457_df, 1.5, r431_DrawAt === r271_DotAt, r431_kdr));
                        return void 0;
                    });
                }();
                _r431_t4 = !(_r431_t2 = _r431_t1.next()).done;
            }
            return _r431_t5;
        }());
        r271_xn$selectvariant$7Hrq('aa', 42803, new r271_xn$NamedParameterPair$2Lrc9b('follow', 'a/turnABase'));
        r271_xn$selectvariant$7Hrq('ae/e', new r271_xn$NamedParameterPair$2Lrc9b('follow', 'e'));
        r271_xn$selectvariant$7Hrq('aeInvE/right', new r271_xn$NamedParameterPair$2Lrc9b('follow', 'e'));
        r271_xn$selectvariant$7Hrq('ue/u');
        r271_xn$selectvariant$7Hrq('oeOpenO/left', new r271_xn$NamedParameterPair$2Lrc9b('follow', 'c'));
        r271_xn$derivecomposites$7Hrq('ae', 230, 'ae/a', 'ae/e');
        r271_xn$derivecomposites$7Hrq('oe', 339, 'oe/o', 'ae/e');
        r271_xn$derivecomposites$7Hrq('ue', 7531, 'ue/u', 'ae/e');
        r271_xn$derivecomposites$7Hrq('ao', 42805, 'ae/a', 'ao/o');
        r271_xn$derivecomposites$7Hrq('oo', 42831, 'oe/o', 'ao/o');
        r271_xn$derivecomposites$7Hrq('uo', 43875, 'ue/u', 'ao/o');
        r271_xn$derivecomposites$7Hrq('oeOpenO', 43874, 'oeOpenO/left', 'ae/e');
        r271_xn$derivecomposites$7Hrq('aeInvE', 43825, 'ae/a', 'aeInvE/right');
        r271_xn$derivecomposites$7Hrq('oeInv', 43840, 'oe/o', 'aeInvE/right');
        r271_alias('cyrl/ae', 1237, 'ae');
        r271_alias('cyrl/oo', 42649, 'oo');
        r271_turned('turnae', 7426, 'ae', r271_DivFrame(r271_para.diversityM, 3).middle, r271_XH / 2);
        r271_turned('turnoe', 7444, 'oe', r271_DivFrame(r271_para.diversityM, 3).middle, r271_XH / 2);
        r271_xn$derivecomposites$7Hrq('turnoeSlashO', 43841, 'turnoe', 'rightHalfSlashOverlay');
        r271_xn$derivecomposites$7Hrq('turnoeBarO', 43842, 'turnoe', 'rightHalfBarOverlay');
        r271_xn$derivecomposites$7Hrq('OO', 42830, 'OO/left', 'OO/right');
        r271_alias('cyrl/OO', 42648, 'OO');
        r271_xn$selectvariant$7Hrq('OODots', new r271_xn$NamedParameterPair$2Lrc9b('follow', 'diacriticDot'));
        r271_xn$selectvariant$7Hrq('ooDots', new r271_xn$NamedParameterPair$2Lrc9b('follow', 'diacriticDot'));
        r271_xn$derivecomposites$7Hrq('cyrl/OOBinocular', 42604, 'cyrl/OO', 'OODots');
        r271_xn$derivecomposites$7Hrq('cyrl/ooBinocular', 42605, 'cyrl/oo', 'ooDots');
        r271_xn$selectvariant$7Hrq('cyrl/este/left', new r271_xn$NamedParameterPair$2Lrc9b('follow', 'cBottomSerifOnly'));
        r271_xn$selectvariant$7Hrq('cyrl/este/right', new r271_xn$NamedParameterPair$2Lrc9b('follow', 'T'));
        return r271_xn$derivecomposites$7Hrq('cyrl/este', null, 'cyrl/este/left', 'cyrl/este/right');
    });
    return void 0;
});
