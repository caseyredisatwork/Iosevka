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
    r270_xn$Capture_Ext$2Lrc2b['$defineGlyphBlockImpl$'](r270_xn$Capture_Ext$2Lrc2b, 'Letter-Cyrillic-Dzzhe-Zhwe', function (r271_xn$Capture$2Lrc8, r271_xn$ExportCapture$2Lrc4b) {
        var _r271_t7, _r271_t8, _r271_t9, _r271_tag10, _r271_t11, _r271_tag12, _r271_t13, _r271_tag14;
        var _r271_t0 = r271_xn$Capture$2Lrc8;
        var r271_xn$createAndSaveGlyphImpl$2Lrc3c = _r271_t0['$createAndSaveGlyphImpl$'];
        var r271_xn$NamedParameterPair$2Lrc9b = _r271_t0['$NamedParameterPair$'];
        var r271_xn$assignUnicodeImpl$2Lrc8b = _r271_t0['$assignUnicodeImpl$'];
        var r271_xn$execState$2Lrc0b = _r271_t0['$execState$'];
        var r271_para = _r271_t0.para;
        var r271_DivFrame = _r271_t0.DivFrame;
        var _r271_t1 = r271_xn$Capture$2Lrc8.Metrics;
        var r271_CAP = _r271_t1.CAP;
        var r271_XH = _r271_t1.XH;
        var r271_ApparentTranslate = _r271_t1.ApparentTranslate;
        var r271_HVContrast = _r271_t1.HVContrast;
        var r271_OX = _r271_t1.OX;
        var r271_Hook = _r271_t1.Hook;
        var r271_SHook = _r271_t1.SHook;
        var r271_Stroke = _r271_t1.Stroke;
        var r271_LongJut = _r271_t1.LongJut;
        var r271_SLAB = _r271_t1.SLAB;
        var r271_SideJut = _r271_t1.SideJut;
        var r271_AdviceStroke = _r271_t1.AdviceStroke;
        var r271_StrokeWidthBlend = _r271_t1.StrokeWidthBlend;
        var _r271_t2 = r271_xn$Capture$2Lrc8.SpiroFns;
        var r271_straight = _r271_t2.straight;
        var r271_dispiro = _r271_t2.dispiro;
        var r271_xn$spirooutline$1aao = _r271_t2['spiro-outline'];
        var _r271_t3 = r271_xn$Capture$2Lrc8.BooleFns;
        var r271_difference = _r271_t3.difference;
        var _r271_t4 = r271_xn$Capture$2Lrc8.CommonShapes.resolve();
        var r271_HBar = _r271_t4.HBar;
        var r271_WithTransform = _r271_t4.WithTransform;
        var _r271_t5 = r271_xn$Capture$2Lrc8['Common-Derivatives'].resolve();
        var r271_xn$selectvariant$7Hrq = _r271_t5['select-variant'];
        var r271_xn$derivecomposites$7Hrq = _r271_t5['derive-composites'];
        var _r271_t6 = r271_xn$Capture$2Lrc8['Letter-Greek-Lower-Epsilon'].resolve();
        var r271_CyrZe = _r271_t6.CyrZe;
        var r271_SubDfDim = function (r275_pShift, r275_keeps, r275_df, r275__o) {
            var _r275_t0, _r275_t1;
            var r275_subDf = r275_df.slice(4, r275_keeps, r275__o);
            var r275_subDfFullShift = (r275_df.rightSB - r275_subDf.rightSB) / (4 - r275_keeps);
            var r275_shift = r275_pShift * r275_subDfFullShift;
            var r275_sw = r271_AdviceStroke(3.3, r275_df.slice(4, 3, r275__o).div);
            return {
                'subDf': r275_subDf,
                'shift': r275_shift,
                'sw': r275_sw
            };
        };
        (function () {
            var _r277_t0 = r271_xn$Capture$2Lrc8['Mark-Adjustment'].resolve();
            var r277_ExtendBelowBaseAnchors = _r277_t0.ExtendBelowBaseAnchors;
            var _r277_t1 = r271_xn$Capture$2Lrc8['Letter-Cyrillic-De'].resolve();
            var r277_CyrDeShape = _r277_t1.CyrDeShape;
            var r277_CyrDeItalicShapeT = _r277_t1.CyrDeItalicShapeT;
            var r277_CyrDzzheDeShape = function (r280_df, r280_top) {
                var _r280_t0, _r280_t1;
                return function () {
                    var _r282_t2;
                    var _r282_t1 = this;
                    var r282_currentGlyph = _r282_t1;
                    var _r282_t0 = r271_SubDfDim(0, 2, r280_df, r271_OX);
                    var r282_subDf = _r282_t0.subDf;
                    var r282_sw = _r282_t0.sw;
                    var r282_left = r271_SLAB ? r282_subDf.leftSB + 0.5 * r271_SideJut : r282_subDf.leftSB;
                    r282_currentGlyph.include(r277_CyrDeShape(r280_top, r282_left, r282_subDf.rightSB, r282_sw));
                    return void 0;
                };
            };
            var r277_CyrDzzheDeItalicShape = function (r284_df) {
                var _r284_t0, _r284_t1;
                return function () {
                    var _r286_t2;
                    var _r286_t1 = this;
                    var r286_currentGlyph = _r286_t1;
                    var _r286_t0 = r271_SubDfDim(0, 2, r284_df, r271_OX);
                    var r286_subDf = _r286_t0.subDf;
                    var r286_sw = _r286_t0.sw;
                    r286_currentGlyph.include(r277_CyrDeItalicShapeT(r271_dispiro, r286_subDf, r286_sw));
                    return void 0;
                };
            };
            r271_xn$createAndSaveGlyphImpl$2Lrc3c('cyrl/Dzzhe/left', null, function () {
                var _r290_t1;
                var _r290_t0 = this;
                var r290_currentGlyph = _r290_t0;
                var r290_df = r271_DivFrame(r271_para.diversityM, 3.5);
                r290_currentGlyph.setWidth(r290_df.width);
                r290_currentGlyph.include(r290_df.markSet.capital());
                r290_currentGlyph.include(r277_ExtendBelowBaseAnchors(-r271_LongJut + 0.5 * r271_Stroke));
                r290_currentGlyph.setBaseAnchor('cvDecompose', 0, 0);
                r290_currentGlyph.include(r277_CyrDzzheDeShape(r290_df, r271_CAP));
                return void 0;
            });
            r271_xn$createAndSaveGlyphImpl$2Lrc3c('cyrl/dzzhe.upright/left', null, function () {
                var _r298_t1;
                var _r298_t0 = this;
                var r298_currentGlyph = _r298_t0;
                var r298_df = r271_DivFrame(r271_para.diversityM, 3.5);
                r298_currentGlyph.setWidth(r298_df.width);
                r298_currentGlyph.include(r298_df.markSet.e());
                r298_currentGlyph.include(r277_ExtendBelowBaseAnchors(-r271_LongJut + 0.5 * r271_Stroke));
                r298_currentGlyph.setBaseAnchor('cvDecompose', 0, 0);
                r298_currentGlyph.include(r277_CyrDzzheDeShape(r298_df, r271_XH));
                return void 0;
            });
            return r271_xn$createAndSaveGlyphImpl$2Lrc3c('cyrl/dzzhe.italic/left', null, function () {
                var _r306_t1;
                var _r306_t0 = this;
                var r306_currentGlyph = _r306_t0;
                var r306_df = r271_DivFrame(r271_para.diversityM, 3.5);
                r306_currentGlyph.setWidth(r306_df.width);
                r306_currentGlyph.include(r306_df.markSet.b());
                r306_currentGlyph.setBaseAnchor('cvDecompose', 0, 0);
                r306_currentGlyph.include(r277_CyrDzzheDeItalicShape(r306_df));
                return void 0;
            });
        }());
        (function () {
            var r312_suffix, r312_slabTop, r312_slabBot, _r312_t2, _r312_t4, _r312_t5, _r312_tag6;
            var r312_xn$SLABNONE$5sIl = 0;
            var r312_xn$SLABCLASSICAL$5sIl = 1;
            var r312_xn$SLABINWARD$5sIl = 2;
            var r312_ZeConfig = {
                'serifless': [
                    r312_xn$SLABNONE$5sIl,
                    r312_xn$SLABNONE$5sIl
                ],
                'unilateralSerifed': [
                    r312_xn$SLABCLASSICAL$5sIl,
                    r312_xn$SLABNONE$5sIl
                ],
                'bilateralSerifed': [
                    r312_xn$SLABCLASSICAL$5sIl,
                    r312_xn$SLABCLASSICAL$5sIl
                ],
                'unilateralInwardSerifed': [
                    r312_xn$SLABINWARD$5sIl,
                    r312_xn$SLABNONE$5sIl
                ],
                'bilateralInwardSerifed': [
                    r312_xn$SLABINWARD$5sIl,
                    r312_xn$SLABINWARD$5sIl
                ]
            };
            var r312_CyrZhweZeShape = function (r313_slabTop, r313_slabBot, r313_df, r313_top, r313_hook) {
                var _r313_t0, _r313_t1;
                return function () {
                    var _r315_t2;
                    var _r315_t1 = this;
                    var r315_currentGlyph = _r315_t1;
                    var _r315_t0 = r271_SubDfDim(0, 2, r313_df, r271_OX);
                    var r315_subDf = _r315_t0.subDf;
                    var r315_sw = _r315_t0.sw;
                    var r315_ze = r271_CyrZe(r313_slabTop, r313_slabBot, r313_top, 0, r315_subDf.leftSB, r315_subDf.rightSB, 0.65, r313_hook, r315_sw);
                    r315_currentGlyph.include(r315_ze.Shape());
                    r315_currentGlyph.include(r315_ze.AutoStartSerifL());
                    r315_currentGlyph.include(r315_ze.AutoEndSerifL());
                    return void 0;
                };
            };
            var _r312_t0 = Object.entries(r312_ZeConfig)[Symbol.iterator]();
            var _r312_t1 = void 0;
            var _r312_t3 = !(_r312_t1 = _r312_t0.next()).done;
            while (_r312_t3) {
                _r312_t2 = _r312_t1.value;
                r312_suffix = _r312_t2[0];
                r312_slabTop = _r312_t2[1][0];
                r312_slabBot = _r312_t2[1][1];
                _r312_t2[1];
                _r312_t4 = function () {
                    r271_xn$createAndSaveGlyphImpl$2Lrc3c('cyrl/Zhwe/left.' + r312_suffix, null, function () {
                        var _r324_t1;
                        var _r324_t0 = this;
                        var r324_currentGlyph = _r324_t0;
                        var r324_df = r271_DivFrame(r271_para.diversityM, 3.5);
                        r324_currentGlyph.setWidth(r324_df.width);
                        r324_currentGlyph.include(r324_df.markSet.capital());
                        r324_currentGlyph.setBaseAnchor('cvDecompose', 0, 0);
                        r324_currentGlyph.include(r312_CyrZhweZeShape(r312_slabTop, r312_slabBot, r324_df, r271_CAP, r271_Hook));
                        return void 0;
                    });
                    return r271_xn$createAndSaveGlyphImpl$2Lrc3c('cyrl/zhwe/left.' + r312_suffix, null, function () {
                        var _r331_t1;
                        var _r331_t0 = this;
                        var r331_currentGlyph = _r331_t0;
                        var r331_df = r271_DivFrame(r271_para.diversityM, 3.5);
                        r331_currentGlyph.setWidth(r331_df.width);
                        r331_currentGlyph.include(r331_df.markSet.e());
                        r331_currentGlyph.setBaseAnchor('cvDecompose', 0, 0);
                        r331_currentGlyph.include(r312_CyrZhweZeShape(r312_slabTop, r312_slabBot, r331_df, r271_XH, r271_SHook));
                        return void 0;
                    });
                }();
                _r312_t3 = !(_r312_t1 = _r312_t0.next()).done;
            }
            return _r312_t4;
        }());
        (function () {
            var r337_suffix, r337_legShape, r337_fSlab, _r337_t4, _r337_t6, _r337_t7, _r337_tag8;
            var _r337_t0 = r271_xn$Capture$2Lrc8['Letter-Cyrillic-Zhe'].resolve();
            var r337_Zhe = _r337_t0.Zhe;
            var r337_CyrRightZheShape = function (r339_legShape, r339_fSlab, r339_df, r339_top, r339_barLeft) {
                var _r339_t0, _r339_t1;
                return function () {
                    var _r341_t2;
                    var _r341_t1 = this;
                    var r341_currentGlyph = _r341_t1;
                    var _r341_t0 = r271_SubDfDim(1, 3, r339_df, r271_OX);
                    var r341_subDf = _r341_t0.subDf;
                    var r341_shift = _r341_t0.shift;
                    var r341_sw = _r341_t0.sw;
                    r341_currentGlyph.include(r271_WithTransform(r271_ApparentTranslate(r341_shift, 0), r337_Zhe.HalfShape(r339_legShape, r339_fSlab, r341_subDf, 0, r339_top, r339_top)));
                    r341_currentGlyph.include(r271_HBar.m(r339_barLeft, r341_shift + r341_subDf.middle, 0.5 * r339_top, r341_sw));
                    return void 0;
                };
            };
            var r337_DzzheLeft = function (r344_df) {
                var _r344_t1, _r344_t2;
                var _r344_t0 = r271_SubDfDim(0, 2, r344_df, r271_OX);
                var r344_subDf = _r344_t0.subDf;
                var r344_sw = _r344_t0.sw;
                var r344_swInner = r344_sw * r271_AdviceStroke(2.75) / r271_Stroke;
                return r1_mix(r344_subDf.leftSB, r344_subDf.rightSB, r271_StrokeWidthBlend(0.95, 0.96)) - 0.5 * r271_HVContrast * r344_swInner;
            };
            var r337_ZhweZheShape = function (r345_legShape, r345_fSlab, r345_df, r345_top, r345_hook) {
                var _r345_t0, _r345_t1;
                return function () {
                    var _r347_t2;
                    var _r347_t1 = this;
                    var r347_currentGlyph = _r347_t1;
                    var _r347_t0 = r271_SubDfDim(0, 2, r345_df, r271_OX);
                    var r347_subDf = _r347_t0.subDf;
                    var r347_sw = _r347_t0.sw;
                    var r347_ze = r271_CyrZe(0, 0, r345_top, 0, r347_subDf.leftSB, r347_subDf.rightSB, 0.65, r345_hook, 0.5 * r347_sw);
                    r347_currentGlyph.include(r271_difference(r337_CyrRightZheShape(r345_legShape, r345_fSlab, r345_df, r345_top, r347_subDf.middle), r347_ze.ShapeMask()));
                    return void 0;
                };
            };
            var _r337_t1 = r271_xn$Capture$2Lrc8['Letter-Cyrillic-De'].resolve();
            var r337_CyrDeItalicShapeT = _r337_t1.CyrDeItalicShapeT;
            var r337_DzzheZheItalicShape = function (r350_legShape, r350_fSlab, r350_df) {
                var _r350_t0, _r350_t1;
                return function () {
                    var _r352_t2;
                    var _r352_t1 = this;
                    var r352_currentGlyph = _r352_t1;
                    var _r352_t0 = r271_SubDfDim(0, 2, r350_df, r271_OX);
                    var r352_subDf = _r352_t0.subDf;
                    var r352_sw = _r352_t0.sw;
                    r352_currentGlyph.include(r271_difference(r337_CyrRightZheShape(r350_legShape, r350_fSlab, r350_df, r271_XH, r352_subDf.middle), r337_CyrDeItalicShapeT(r271_xn$spirooutline$1aao, r352_subDf, r352_sw)));
                    return void 0;
                };
            };
            var r337_ZheConfig = {
                'straight': [
                    r337_Zhe.StraightLegs,
                    r271_SLAB
                ],
                'curly': [
                    r337_Zhe.CurlyLegs,
                    r271_SLAB
                ],
                'symmetricTouching': [
                    r337_Zhe.TouchingLegs,
                    r271_SLAB
                ],
                'symmetricConnected': [
                    r337_Zhe.ConnectingLegs,
                    r271_SLAB
                ]
            };
            var _r337_t2 = Object.entries(r337_ZheConfig)[Symbol.iterator]();
            var _r337_t3 = void 0;
            var _r337_t5 = !(_r337_t3 = _r337_t2.next()).done;
            while (_r337_t5) {
                _r337_t4 = _r337_t3.value;
                r337_suffix = _r337_t4[0];
                r337_legShape = _r337_t4[1][0];
                r337_fSlab = _r337_t4[1][1];
                _r337_t4[1];
                _r337_t6 = function () {
                    r271_xn$createAndSaveGlyphImpl$2Lrc3c('cyrl/Dzzhe/right.' + r337_suffix, null, function () {
                        var _r359_t1;
                        var _r359_t0 = this;
                        var r359_currentGlyph = _r359_t0;
                        var r359_df = r271_DivFrame(r271_para.diversityM, 3.5);
                        r359_currentGlyph.setWidth(r359_df.width);
                        r359_currentGlyph.include(r359_df.markSet.capital());
                        r359_currentGlyph.include(r337_CyrRightZheShape(r337_legShape, r337_fSlab, r359_df, r271_CAP, r337_DzzheLeft(r359_df)));
                        return void 0;
                    });
                    r271_xn$createAndSaveGlyphImpl$2Lrc3c('cyrl/dzzhe.upright/right.' + r337_suffix, null, function () {
                        var _r365_t1;
                        var _r365_t0 = this;
                        var r365_currentGlyph = _r365_t0;
                        var r365_df = r271_DivFrame(r271_para.diversityM, 3.5);
                        r365_currentGlyph.setWidth(r365_df.width);
                        r365_currentGlyph.include(r365_df.markSet.e());
                        r365_currentGlyph.include(r337_CyrRightZheShape(r337_legShape, r337_fSlab, r365_df, r271_XH, r337_DzzheLeft(r365_df)));
                        return void 0;
                    });
                    r271_xn$createAndSaveGlyphImpl$2Lrc3c('cyrl/dzzhe.italic/right.' + r337_suffix, null, function () {
                        var _r371_t1;
                        var _r371_t0 = this;
                        var r371_currentGlyph = _r371_t0;
                        var r371_df = r271_DivFrame(r271_para.diversityM, 3.5);
                        r371_currentGlyph.setWidth(r371_df.width);
                        r371_currentGlyph.include(r371_df.markSet.e());
                        r371_currentGlyph.include(r337_DzzheZheItalicShape(r337_legShape, r337_fSlab, r371_df));
                        return void 0;
                    });
                    r271_xn$createAndSaveGlyphImpl$2Lrc3c('cyrl/Zhwe/right.' + r337_suffix, null, function () {
                        var _r377_t1;
                        var _r377_t0 = this;
                        var r377_currentGlyph = _r377_t0;
                        var r377_df = r271_DivFrame(r271_para.diversityM, 3.5);
                        r377_currentGlyph.setWidth(r377_df.width);
                        r377_currentGlyph.include(r377_df.markSet.capital());
                        r377_currentGlyph.setBaseAnchor('cvDecompose', 0, 0);
                        r377_currentGlyph.include(r337_ZhweZheShape(r337_legShape, r337_fSlab, r377_df, r271_CAP, r271_Hook));
                        return void 0;
                    });
                    return r271_xn$createAndSaveGlyphImpl$2Lrc3c('cyrl/zhwe/right.' + r337_suffix, null, function () {
                        var _r384_t1;
                        var _r384_t0 = this;
                        var r384_currentGlyph = _r384_t0;
                        var r384_df = r271_DivFrame(r271_para.diversityM, 3.5);
                        r384_currentGlyph.setWidth(r384_df.width);
                        r384_currentGlyph.include(r384_df.markSet.e());
                        r384_currentGlyph.setBaseAnchor('cvDecompose', 0, 0);
                        r384_currentGlyph.include(r337_ZhweZheShape(r337_legShape, r337_fSlab, r384_df, r271_XH, r271_SHook));
                        return void 0;
                    });
                }();
                _r337_t5 = !(_r337_t3 = _r337_t2.next()).done;
            }
            return _r337_t6;
        }());
        r271_xn$selectvariant$7Hrq('cyrl/Dzzhe/right', new r271_xn$NamedParameterPair$2Lrc9b('follow', 'cyrl/Zhe'));
        r271_xn$selectvariant$7Hrq('cyrl/dzzhe.upright/right', new r271_xn$NamedParameterPair$2Lrc9b('follow', 'cyrl/zhe'));
        r271_xn$selectvariant$7Hrq('cyrl/dzzhe.italic/right', new r271_xn$NamedParameterPair$2Lrc9b('follow', 'cyrl/zhe'));
        r271_xn$selectvariant$7Hrq('cyrl/Zhwe/right', new r271_xn$NamedParameterPair$2Lrc9b('follow', 'cyrl/Zhe'));
        r271_xn$selectvariant$7Hrq('cyrl/zhwe/right', new r271_xn$NamedParameterPair$2Lrc9b('follow', 'cyrl/zhe'));
        r271_xn$selectvariant$7Hrq('cyrl/Zhwe/left', new r271_xn$NamedParameterPair$2Lrc9b('follow', 'cyrl/Ze'));
        r271_xn$selectvariant$7Hrq('cyrl/zhwe/left', new r271_xn$NamedParameterPair$2Lrc9b('follow', 'cyrl/ze'));
        r271_xn$derivecomposites$7Hrq('cyrl/Dzzhe', 1322, 'cyrl/Dzzhe/left', 'cyrl/Dzzhe/right');
        r271_xn$derivecomposites$7Hrq('cyrl/dzzhe.upright', null, 'cyrl/dzzhe.upright/left', 'cyrl/dzzhe.upright/right');
        r271_xn$derivecomposites$7Hrq('cyrl/dzzhe.italic', null, 'cyrl/dzzhe.italic/left', 'cyrl/dzzhe.italic/right');
        r271_xn$derivecomposites$7Hrq('cyrl/Zhwe', 42628, 'cyrl/Zhwe/left', 'cyrl/Zhwe/right');
        return r271_xn$derivecomposites$7Hrq('cyrl/zhwe', 42629, 'cyrl/zhwe/left', 'cyrl/zhwe/right');
    });
    return void 0;
});
