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
    r269_xn$Capture_Ext$2Lrc2b['$defineGlyphBlockImpl$'](r269_xn$Capture_Ext$2Lrc2b, 'Letter-Cyrillic-Yat', function (r270_xn$Capture$2Lrc8, r270_xn$ExportCapture$2Lrc4b) {
        var _r270_t11, _r270_t12;
        var _r270_t0 = r270_xn$Capture$2Lrc8;
        var r270_xn$createAndSaveGlyphImpl$2Lrc3c = _r270_t0['$createAndSaveGlyphImpl$'];
        var r270_xn$NamedParameterPair$2Lrc9b = _r270_t0['$NamedParameterPair$'];
        var r270_xn$assignUnicodeImpl$2Lrc8b = _r270_t0['$assignUnicodeImpl$'];
        var r270_xn$execState$2Lrc0b = _r270_t0['$execState$'];
        var r270_para = _r270_t0.para;
        var r270_tagged = _r270_t0.tagged;
        var r270_DivFrame = _r270_t0.DivFrame;
        var _r270_t1 = r270_xn$Capture$2Lrc8.Metrics;
        var r270_Width = _r270_t1.Width;
        var r270_SB = _r270_t1.SB;
        var r270_CAP = _r270_t1.CAP;
        var r270_XH = _r270_t1.XH;
        var r270_Ascender = _r270_t1.Ascender;
        var r270_ApparentTranslate = _r270_t1.ApparentTranslate;
        var r270_HVContrast = _r270_t1.HVContrast;
        var r270_O = _r270_t1.O;
        var r270_Stroke = _r270_t1.Stroke;
        var r270_VJut = _r270_t1.VJut;
        var r270_VJutStroke = _r270_t1.VJutStroke;
        var r270_SLAB = _r270_t1.SLAB;
        var r270_RightSB = _r270_t1.RightSB;
        var r270_SideJut = _r270_t1.SideJut;
        var r270_SmallArchDepthB = _r270_t1.SmallArchDepthB;
        var r270_AdviceStroke = _r270_t1.AdviceStroke;
        var r270_OverlayStroke = _r270_t1.OverlayStroke;
        var r270_ShoulderFine = _r270_t1.ShoulderFine;
        var _r270_t2 = r270_xn$Capture$2Lrc8.SpiroFns;
        var r270_dispiro = _r270_t2.dispiro;
        var _r270_t3 = r270_xn$Capture$2Lrc8.BooleFns;
        var _r270_t4 = r270_xn$Capture$2Lrc8.CommonShapes.resolve();
        var r270_HSerif = _r270_t4.HSerif;
        var r270_VSerif = _r270_t4.VSerif;
        var r270_HBar = _r270_t4.HBar;
        var r270_VBar = _r270_t4.VBar;
        var r270_WithTransform = _r270_t4.WithTransform;
        var _r270_t5 = r270_xn$Capture$2Lrc8['Common-Derivatives'].resolve();
        var r270_alias = _r270_t5.alias;
        var _r270_t6 = r270_xn$Capture$2Lrc8['Letter-Shared-Metrics'].resolve();
        var r270_BowlXDepth = _r270_t6.BowlXDepth;
        var _r270_t7 = r270_xn$Capture$2Lrc8['Letter-Shared-Shapes'].resolve();
        var r270_LetterBarOverlay = _r270_t7.LetterBarOverlay;
        var _r270_t8 = r270_xn$Capture$2Lrc8['Letter-Cyrillic-Yeri'].resolve();
        var r270_CyrlYeriUprightShape = _r270_t8.CyrlYeriUprightShape;
        var r270_CyrlYeriCursiveShape = _r270_t8.CyrlYeriCursiveShape;
        var _r270_t9 = r270_xn$Capture$2Lrc8['Letter-Cyrillic-Iotified-A'].resolve();
        var r270_Iotified = _r270_t9.Iotified;
        var r270_xBarLeft = function (r277_df) {
            var _r277_t0, _r277_t1;
            return Math.max(r277_df.rightSB - (r270_RightSB - r270_SB), r270_SLAB ? r1_mix(r277_df.leftSB, r277_df.rightSB, 0.35) - r277_df.mvs / 2 * r270_HVContrast : r1_mix(r277_df.leftSB, r277_df.rightSB, 0.2));
        };
        var r270_YatShape = function (r280_df, r280_top, r280_pBar, r280_fLowerCase, r280__sw, r280__xCrossbarLeftOverride) {
            var _r280_t0, _r280_t1;
            return function () {
                var r282_swSerif, r282_vJut, _r282_t1;
                var _r282_t0 = this;
                var r282_currentGlyph = _r282_t0;
                var r282_sw = r1_fallback(r280__sw, r280_df.mvs);
                var r282_xYeriLeft = r270_xBarLeft(r280_df);
                r282_currentGlyph.include(r270_CyrlYeriUprightShape(r280_top, new r270_xn$NamedParameterPair$2Lrc9b('left', r282_xYeriLeft), new r270_xn$NamedParameterPair$2Lrc9b('right', r280_df.rightSB - r270_O * 2), new r270_xn$NamedParameterPair$2Lrc9b('pBar', r280_pBar), new r270_xn$NamedParameterPair$2Lrc9b('stroke', r282_sw)));
                var r282_cTop = r270_SLAB ? r280_top - r270_Stroke / 2 : r280_top;
                var r282__xCrossbarLeft = r1_mix(0, r280_df.leftSB, r270_SLAB ? 0.25 : 0.375);
                var r282_xCrossbarLeft = r1_fallback(r280__xCrossbarLeftOverride, r282__xCrossbarLeft);
                var r282_xCrossbarRight = r1_mix(r282__xCrossbarLeft, r282_xYeriLeft + 0.5 * r270_HVContrast * r282_sw, 2);
                var r282_yCrossbar = r1_mix(r280_top * r280_pBar + r282_sw / 2, r282_cTop, r270_SLAB ? 0.625 : 0.5) + 0.25 * r270_OverlayStroke;
                r282_currentGlyph.include(r270_HBar.t(r282_xCrossbarLeft, r282_xCrossbarRight, r282_yCrossbar, r270_OverlayStroke));
                if (r270_SLAB) {
                    r282_swSerif = Math.min(r270_VJutStroke * r282_sw / r270_Stroke, 0.625 * (r282_xYeriLeft - r282__xCrossbarLeft));
                    r282_vJut = Math.min(r270_VJut, r270_OverlayStroke + 0.5 * (r282_yCrossbar - r270_OverlayStroke - r280_top * r280_pBar));
                    r282_currentGlyph.include(r270_tagged('serifDL', r270_VSerif.dl(r282_xCrossbarLeft, r282_yCrossbar, r282_vJut, r282_swSerif)));
                    r282_currentGlyph.include(r270_tagged('serifDR', r270_VSerif.dr(r282_xCrossbarRight, r282_yCrossbar, r282_vJut, r282_swSerif)));
                    if (r280_fLowerCase) {
                        r282_currentGlyph.ejectTagged('serifYeriLT');
                        r282_currentGlyph.include(r270_tagged('serifLT', r270_HSerif.lt(r282_xYeriLeft, r270_Ascender, r270_SideJut, r282_sw)));
                    }
                }
                return void 0;
            };
        };
        r270_xn$createAndSaveGlyphImpl$2Lrc3c('cyrl/Yat', 1122, function () {
            var _r295_t1;
            var _r295_t0 = this;
            var r295_currentGlyph = _r295_t0;
            var r295_df = r270_DivFrame(r1_mix(1, r270_para.diversityM, 0.5));
            r295_currentGlyph.setWidth(r295_df.width);
            r295_currentGlyph.include(r295_df.markSet.capital());
            r295_currentGlyph.include(r270_YatShape(r295_df, r270_CAP, 0.5, false));
            return void 0;
        });
        r270_xn$createAndSaveGlyphImpl$2Lrc3c('cyrl/yat.upright', null, function () {
            var _r301_t1;
            var _r301_t0 = this;
            var r301_currentGlyph = _r301_t0;
            var r301_df = r270_DivFrame(r1_mix(1, r270_para.diversityM, 0.5));
            r301_currentGlyph.setWidth(r301_df.width);
            r301_currentGlyph.include(r301_df.markSet.b());
            r301_currentGlyph.include(r270_YatShape(r301_df, r270_Ascender, 0.375, true));
            return void 0;
        });
        var r270_IotifiedYatShape = function (r305_df, r305_top, r305_pBar, r305_fLowerCase) {
            var _r305_t0, _r305_t1;
            return function () {
                var _r307_t1;
                var _r307_t0 = this;
                var r307_currentGlyph = _r307_t0;
                var r307_gap = 0.25 * (r305_df.width - 2 * r305_df.leftSB - (r270_SLAB ? 2.5 : 4.5) * r305_df.mvs);
                var r307_divSub = (r305_df.width - r307_gap - r305_df.mvs) / r270_Width;
                var r307_dfSub = r270_DivFrame(r307_divSub, 2);
                var r307_shift = r270_Width * (r305_df.div - r307_divSub);
                r307_currentGlyph.include(r270_WithTransform(r270_ApparentTranslate(r307_shift, 0), r270_YatShape(r307_dfSub, r305_top, r305_pBar, r305_fLowerCase, r305_df.mvs, r305_df.leftSB - r307_shift)));
                r307_currentGlyph.ejectTagged('serifDL');
                if (r305_fLowerCase)
                    r307_currentGlyph.include(r270_Iotified.ascender(r305_df, r305_top, 0, new r270_xn$NamedParameterPair$2Lrc9b('fCapital', false)));
                else
                    r307_currentGlyph.include(r270_Iotified.full(r305_df, r305_top, 0, new r270_xn$NamedParameterPair$2Lrc9b('fCapital', true)));
                return void 0;
            };
        };
        r270_xn$createAndSaveGlyphImpl$2Lrc3c('cyrl/YatIotified', 42578, function () {
            var _r316_t1;
            var _r316_t0 = this;
            var r316_currentGlyph = _r316_t0;
            var r316_df = r270_DivFrame(r270_para.diversityM, 3);
            r316_currentGlyph.setWidth(r316_df.width);
            r316_currentGlyph.include(r316_df.markSet.capital());
            r316_currentGlyph.include(r270_IotifiedYatShape(r316_df, r270_CAP, 0.5, false));
            return void 0;
        });
        r270_xn$createAndSaveGlyphImpl$2Lrc3c('cyrl/yatIotified', 42579, function () {
            var _r322_t1;
            var _r322_t0 = this;
            var r322_currentGlyph = _r322_t0;
            var r322_df = r270_DivFrame(r270_para.diversityM, 3);
            r322_currentGlyph.setWidth(r322_df.width);
            r322_currentGlyph.include(r322_df.markSet.b());
            r322_currentGlyph.include(r270_IotifiedYatShape(r322_df, r270_Ascender, 0.375, true));
            return void 0;
        });
        var _r270_t10 = r270_xn$Capture$2Lrc8['Letter-Shared-Shapes'].resolve();
        var r270_nShoulderKnots = _r270_t10.nShoulderKnots;
        r270_xn$createAndSaveGlyphImpl$2Lrc3c('cyrl/yat.italic', null, function () {
            var _r329_t1;
            var _r329_t0 = this;
            var r329_currentGlyph = _r329_t0;
            var r329_df = r270_DivFrame(r270_para.diversityM, 3);
            var r329_fine = r270_AdviceStroke(4, r329_df.div);
            var r329_xMidBarLeft = r329_df.middle - 0.5 * r329_df.mvs * r270_HVContrast;
            var r329_xMidBarRight = r329_df.middle + 0.5 * r329_df.mvs * r270_HVContrast;
            r329_currentGlyph.setWidth(r329_df.width);
            r329_currentGlyph.include(r329_df.markSet.e());
            r329_currentGlyph.include(r270_VBar.l(r329_df.leftSB, 0, r270_XH, r329_df.mvs));
            r329_currentGlyph.include(r270_dispiro(r270_nShoulderKnots(new r270_xn$NamedParameterPair$2Lrc9b('left', r329_df.leftSB + r329_df.mvs * r270_HVContrast), new r270_xn$NamedParameterPair$2Lrc9b('right', r329_xMidBarRight), new r270_xn$NamedParameterPair$2Lrc9b('fine', r270_ShoulderFine), new r270_xn$NamedParameterPair$2Lrc9b('bottom', r270_XH - r270_SmallArchDepthB - 0.1), new r270_xn$NamedParameterPair$2Lrc9b('stroke', r329_df.mvs))));
            r329_currentGlyph.include(r270_CyrlYeriCursiveShape(r270_XH, r329_xMidBarLeft, r329_df.rightSB, new r270_xn$NamedParameterPair$2Lrc9b('stroke', r329_df.mvs), new r270_xn$NamedParameterPair$2Lrc9b('yStart', r270_XH - r270_SmallArchDepthB)));
            r329_currentGlyph.ejectTagged('serifYeriLT');
            if (r270_SLAB) {
                if (!r270_para.isItalic)
                    r329_currentGlyph.include(r270_tagged('serifLB', r270_HSerif.lb(r329_df.leftSB, 0, r270_SideJut)));
                r329_currentGlyph.include(r270_tagged('serifLT', r270_HSerif.lt(r329_df.leftSB, r270_XH, r270_SideJut)));
            }
            return void 0;
        });
        return r270_alias('latn/yatSakha.italic', null, 'cyrl/yat.italic');
    });
    return void 0;
});
