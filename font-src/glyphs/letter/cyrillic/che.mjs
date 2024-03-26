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
    r269_xn$Capture_Ext$2Lrc2b['$defineGlyphBlockImpl$'](r269_xn$Capture_Ext$2Lrc2b, 'Letter-Cyrillic-Che', function (r270_xn$Capture$2Lrc8, r270_xn$ExportCapture$2Lrc4b) {
        var _r270_t8, _r270_t9;
        var _r270_t0 = r270_xn$Capture$2Lrc8;
        var r270_xn$createAndSaveGlyphImpl$2Lrc3c = _r270_t0['$createAndSaveGlyphImpl$'];
        var r270_xn$NamedParameterPair$2Lrc9b = _r270_t0['$NamedParameterPair$'];
        var r270_xn$assignUnicodeImpl$2Lrc8b = _r270_t0['$assignUnicodeImpl$'];
        var r270_xn$execState$2Lrc0b = _r270_t0['$execState$'];
        var r270_para = _r270_t0.para;
        var r270_MarkSet = _r270_t0.MarkSet;
        var r270_AS_BASE = _r270_t0.AS_BASE;
        var r270_tagged = _r270_t0.tagged;
        var r270_DivFrame = _r270_t0.DivFrame;
        var _r270_t1 = r270_xn$Capture$2Lrc8.Metrics;
        var r270_SB = _r270_t1.SB;
        var r270_CAP = _r270_t1.CAP;
        var r270_XH = _r270_t1.XH;
        var r270_HVContrast = _r270_t1.HVContrast;
        var r270_Downward = _r270_t1.Downward;
        var r270_Rightward = _r270_t1.Rightward;
        var r270_Stroke = _r270_t1.Stroke;
        var r270_LongJut = _r270_t1.LongJut;
        var r270_SLAB = _r270_t1.SLAB;
        var r270_HalfStroke = _r270_t1.HalfStroke;
        var r270_RightSB = _r270_t1.RightSB;
        var r270_Middle = _r270_t1.Middle;
        var r270_ArchDepthB = _r270_t1.ArchDepthB;
        var r270_CorrectionOMidS = _r270_t1.CorrectionOMidS;
        var r270_OverlayStroke = _r270_t1.OverlayStroke;
        var r270_MidJutSide = _r270_t1.MidJutSide;
        var _r270_t2 = r270_xn$Capture$2Lrc8.SpiroFns;
        var r270_g4 = _r270_t2.g4;
        var r270_flat = _r270_t2.flat;
        var r270_curl = _r270_t2.curl;
        var r270_widths = _r270_t2.widths;
        var r270_heading = _r270_t2.heading;
        var r270_dispiro = _r270_t2.dispiro;
        var _r270_t3 = r270_xn$Capture$2Lrc8.BooleFns;
        var _r270_t4 = r270_xn$Capture$2Lrc8.CommonShapes.resolve();
        var r270_VBar = _r270_t4.VBar;
        var _r270_t5 = r270_xn$Capture$2Lrc8['Common-Derivatives'].resolve();
        var r270_xn$selectvariant$7Hrq = _r270_t5['select-variant'];
        var r270_xn$referglyph$1aao = _r270_t5['refer-glyph'];
        var r270_turned = _r270_t5.turned;
        var r270_xn$derivecomposites$7Hrq = _r270_t5['derive-composites'];
        var _r270_t6 = r270_xn$Capture$2Lrc8['Letter-Shared-Shapes'].resolve();
        var r270_SerifFrame = _r270_t6.SerifFrame;
        var r270_RightwardTailedBar = _r270_t6.RightwardTailedBar;
        var r270_DToothlessRise = _r270_t6.DToothlessRise;
        var _r270_t7 = r270_xn$Capture$2Lrc8['Letter-Shared-Shapes'].resolve();
        var r270_CyrDescender = _r270_t7.CyrDescender;
        var r270_xn$BODYSTRAIGHT$5sIl = 0;
        var r270_xn$BODYTAILED$5sIl = 1;
        var r270_xn$SLABNONE$5sIl = 0;
        var r270_xn$SLABALL$5sIl = 1;
        var r270_xn$SLABLOWER$5sIl = 2;
        var r270_xn$SLABTAILEDU$5sIl7 = 3;
        var r270_xn$SLABTAILEDI$5sIl7 = 4;
        var r270_xn$SLABALLBGR$5sIl4 = 5;
        var r270_xn$SLABTAILEDBGR$5sIl7 = 6;
        var r270_CyrCheShape = function (r275_top, r275_pyBar, r275_bodyType, r275_slabType) {
            var _r275_t0, _r275_t1;
            return function () {
                var r277___, _r277_t0, _r277_t1, _r277_t2, _r277_t3, _r277_t5;
                var _r277_t4 = this;
                var r277_currentGlyph = _r277_t4;
                var r277_bar = r275_top * r1_fallback(r275_pyBar, 0.5);
                r277_currentGlyph.include((_r277_t0 = r275_bodyType, _r277_t0 === r270_xn$BODYTAILED$5sIl ? r270_RightwardTailedBar(r270_RightSB, 0, r275_top) : (r277___ = _r277_t0, r270_VBar.r(r270_RightSB, 0, r275_top))));
                r277_currentGlyph.include(r270_dispiro(r270_widths.lhs(), r270_flat(r270_SB, r275_top, r270_heading(r270_Downward)), r270_curl(r270_SB, r277_bar + r270_ArchDepthB - r270_HalfStroke), r270_g4(r270_Middle + r270_CorrectionOMidS, r277_bar - r270_HalfStroke), r270_g4(r270_RightSB - 1 / 16, r277_bar - r270_HalfStroke + r270_DToothlessRise, r270_heading(r270_Rightward))));
                var r277_sf = r270_SerifFrame.fromDf(r270_DivFrame(1), r275_top, 0);
                r277_currentGlyph.include(r270_tagged('serifLT', (_r277_t1 = r275_slabType, _r277_t1 === r270_xn$SLABALL$5sIl ? r277_sf.lt.full : _r277_t1 === r270_xn$SLABTAILEDU$5sIl7 ? r277_sf.lt.full : _r277_t1 === r270_xn$SLABALLBGR$5sIl4 ? r277_sf.lt.outer : _r277_t1 === r270_xn$SLABTAILEDBGR$5sIl7 ? r277_sf.lt.outer : _r277_t1 === r270_xn$SLABLOWER$5sIl ? r277_sf.lt.outer : _r277_t1 === r270_xn$SLABTAILEDI$5sIl7 ? r277_sf.lt.outer : (r277___ = _r277_t1, function () {
                    var _r282_t1;
                    var _r282_t0 = this;
                    var r282_currentGlyph = _r282_t0;
                    return void 0;
                }))));
                r277_currentGlyph.include(r270_tagged('SerifRT', (_r277_t2 = r275_slabType, _r277_t2 === r270_xn$SLABALL$5sIl ? r277_sf.rt.full : _r277_t2 === r270_xn$SLABTAILEDU$5sIl7 ? r277_sf.rt.full : _r277_t2 === r270_xn$SLABALLBGR$5sIl4 ? r277_sf.rt.inner : _r277_t2 === r270_xn$SLABTAILEDBGR$5sIl7 ? r277_sf.rt.inner : (r277___ = _r277_t2, function () {
                    var _r285_t1;
                    var _r285_t0 = this;
                    var r285_currentGlyph = _r285_t0;
                    return void 0;
                }))));
                r277_currentGlyph.include(r270_tagged('SerifRB', (_r277_t3 = r275_slabType, _r277_t3 === r270_xn$SLABALL$5sIl ? r277_sf.rb.fullSide : _r277_t3 === r270_xn$SLABALLBGR$5sIl4 ? r277_sf.rb.fullSide : _r277_t3 === r270_xn$SLABLOWER$5sIl ? r277_sf.rb.outer : (r277___ = _r277_t3, function () {
                    var _r288_t1;
                    var _r288_t0 = this;
                    var r288_currentGlyph = _r288_t0;
                    return void 0;
                }))));
                return void 0;
            };
        };
        r270_xn$createAndSaveGlyphImpl$2Lrc3c('cyrl/Che', 1063, function () {
            var _r291_t1;
            var _r291_t0 = this;
            var r291_currentGlyph = _r291_t0;
            r291_currentGlyph.include(r270_MarkSet.capital());
            r291_currentGlyph.include(r270_CyrCheShape(r270_CAP, r270_SLAB ? 0.45 : 0.35, r270_xn$BODYSTRAIGHT$5sIl, r270_SLAB ? r270_xn$SLABALL$5sIl : r270_xn$SLABNONE$5sIl));
            return void 0;
        });
        r270_xn$createAndSaveGlyphImpl$2Lrc3c(1206, null, function () {
            var _r296_t1;
            var _r296_t0 = this;
            var r296_currentGlyph = _r296_t0;
            r296_currentGlyph.include(r270_xn$referglyph$1aao('cyrl/Che'), true, true);
            r296_currentGlyph.include(r270_CyrDescender.rSideJut(r270_RightSB, 0));
            return void 0;
        });
        r270_xn$createAndSaveGlyphImpl$2Lrc3c(1227, null, function () {
            var _r301_t1;
            var _r301_t0 = this;
            var r301_currentGlyph = _r301_t0;
            r301_currentGlyph.include(r270_xn$referglyph$1aao('cyrl/Che'), true, true);
            r301_currentGlyph.include(r270_CyrDescender.lSideJut(r270_RightSB - r270_HVContrast * r270_Stroke, 0, new r270_xn$NamedParameterPair$2Lrc9b('jut', r270_MidJutSide)));
            return void 0;
        });
        r270_xn$createAndSaveGlyphImpl$2Lrc3c('cyrl/che.standard', null, function () {
            var _r307_t1;
            var _r307_t0 = this;
            var r307_currentGlyph = _r307_t0;
            r307_currentGlyph.include(r270_MarkSet.e());
            r307_currentGlyph.include(r270_CyrCheShape(r270_XH, r270_SLAB ? 0.45 : 0.4, r270_xn$BODYSTRAIGHT$5sIl, r270_SLAB ? r270_para.isItalic ? r270_xn$SLABLOWER$5sIl : r270_xn$SLABALL$5sIl : r270_xn$SLABNONE$5sIl));
            return void 0;
        });
        r270_xn$createAndSaveGlyphImpl$2Lrc3c('cyrl/che.tailed', null, function () {
            var _r312_t1;
            var _r312_t0 = this;
            var r312_currentGlyph = _r312_t0;
            r312_currentGlyph.include(r270_MarkSet.e());
            r312_currentGlyph.include(r270_CyrCheShape(r270_XH, r270_SLAB ? 0.45 : 0.4, r270_xn$BODYTAILED$5sIl, r270_SLAB ? r270_para.isItalic ? r270_xn$SLABTAILEDI$5sIl7 : r270_xn$SLABTAILEDU$5sIl7 : r270_xn$SLABNONE$5sIl));
            return void 0;
        });
        r270_xn$createAndSaveGlyphImpl$2Lrc3c('cyrl/che.BGR.standard', null, function () {
            var _r317_t1;
            var _r317_t0 = this;
            var r317_currentGlyph = _r317_t0;
            r317_currentGlyph.include(r270_MarkSet.e());
            r317_currentGlyph.include(r270_CyrCheShape(r270_XH, r270_SLAB ? 0.45 : 0.4, r270_xn$BODYSTRAIGHT$5sIl, r270_SLAB ? r270_para.isItalic ? r270_xn$SLABLOWER$5sIl : r270_xn$SLABALLBGR$5sIl4 : r270_xn$SLABNONE$5sIl));
            return void 0;
        });
        r270_xn$createAndSaveGlyphImpl$2Lrc3c('cyrl/che.BGR.tailed', null, function () {
            var _r322_t1;
            var _r322_t0 = this;
            var r322_currentGlyph = _r322_t0;
            r322_currentGlyph.include(r270_MarkSet.e());
            r322_currentGlyph.include(r270_CyrCheShape(r270_XH, r270_SLAB ? 0.45 : 0.4, r270_xn$BODYTAILED$5sIl, r270_SLAB ? r270_para.isItalic ? r270_xn$SLABTAILEDI$5sIl7 : r270_xn$SLABTAILEDBGR$5sIl7 : r270_xn$SLABNONE$5sIl));
            return void 0;
        });
        r270_xn$selectvariant$7Hrq('cyrl/che', 1095);
        r270_xn$selectvariant$7Hrq('cyrl/che.BGR', new r270_xn$NamedParameterPair$2Lrc9b('follow', 'cyrl/che'));
        r270_xn$createAndSaveGlyphImpl$2Lrc3c(1207, null, function () {
            var _r328_t1;
            var _r328_t0 = this;
            var r328_currentGlyph = _r328_t0;
            r328_currentGlyph.include(r270_xn$referglyph$1aao('cyrl/che.standard'), true, true);
            r328_currentGlyph.include(r270_CyrDescender.rSideJut(r270_RightSB, 0));
            return void 0;
        });
        r270_xn$createAndSaveGlyphImpl$2Lrc3c(1228, null, function () {
            var _r333_t1;
            var _r333_t0 = this;
            var r333_currentGlyph = _r333_t0;
            r333_currentGlyph.include(r270_xn$referglyph$1aao('cyrl/che.standard'), true, true);
            r333_currentGlyph.include(r270_CyrDescender.lSideJut(r270_RightSB - r270_HVContrast * r270_Stroke, 0, new r270_xn$NamedParameterPair$2Lrc9b('jut', r270_MidJutSide)));
            return void 0;
        });
        r270_turned('cyrl/Shha', 1210, 'cyrl/Che', r270_Middle, r270_CAP / 2);
        r270_xn$derivecomposites$7Hrq('cyrl/ShhaDescender', 1318, 'cyrl/Shha', r270_CyrDescender.rSideJut(r270_RightSB, 0));
        var r270_SwCheVBar = Math.min(r270_OverlayStroke, 0.625 * (r270_RightSB - r270_SB - r270_Stroke * 2 * r270_HVContrast) / r270_HVContrast);
        r270_xn$createAndSaveGlyphImpl$2Lrc3c('cyrl/CheVBar', 1208, function () {
            var _r339_t1;
            var _r339_t0 = this;
            var r339_currentGlyph = _r339_t0;
            r339_currentGlyph.include(r270_xn$referglyph$1aao('cyrl/Che'), r270_AS_BASE);
            var r339_yc = r270_CAP * (r270_SLAB ? 0.45 : 0.35) + r270_Stroke * 0.1;
            r339_currentGlyph.include(r270_VBar.m(r270_Middle, r339_yc + r270_LongJut * 0.8, r339_yc - r270_LongJut * 0.8, r270_SwCheVBar));
            return void 0;
        });
        return r270_xn$createAndSaveGlyphImpl$2Lrc3c('cyrl/cheVBar', 1209, function () {
            var _r344_t1;
            var _r344_t0 = this;
            var r344_currentGlyph = _r344_t0;
            r344_currentGlyph.include(r270_xn$referglyph$1aao('cyrl/che'), r270_AS_BASE);
            var r344_yc = r270_XH * (r270_SLAB ? 0.45 : 0.35) + r270_Stroke * 0.1;
            r344_currentGlyph.include(r270_VBar.m(r270_Middle, r344_yc + r270_LongJut * 0.8, r344_yc - r270_LongJut * 0.8, r270_SwCheVBar));
            return void 0;
        });
    });
    return void 0;
});
