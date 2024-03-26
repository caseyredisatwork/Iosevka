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
    r270_xn$Capture_Ext$2Lrc2b['$defineGlyphBlockImpl$'](r270_xn$Capture_Ext$2Lrc2b, 'Letter-Greek-Upper-Phi', function (r271_xn$Capture$2Lrc8, r271_xn$ExportCapture$2Lrc4b) {
        var _r271_t7, _r271_t8;
        var _r271_t0 = r271_xn$Capture$2Lrc8;
        var r271_xn$createAndSaveGlyphImpl$2Lrc3c = _r271_t0['$createAndSaveGlyphImpl$'];
        var r271_xn$NamedParameterPair$2Lrc9b = _r271_t0['$NamedParameterPair$'];
        var r271_xn$assignUnicodeImpl$2Lrc8b = _r271_t0['$assignUnicodeImpl$'];
        var r271_xn$execState$2Lrc0b = _r271_t0['$execState$'];
        var r271_para = _r271_t0.para;
        var r271_AS_BASE = _r271_t0.AS_BASE;
        var r271_ALSO_METRICS = _r271_t0.ALSO_METRICS;
        var r271_tagged = _r271_t0.tagged;
        var r271_DivFrame = _r271_t0.DivFrame;
        var _r271_t1 = r271_xn$Capture$2Lrc8.Metrics;
        var r271_CAP = _r271_t1.CAP;
        var r271_XH = _r271_t1.XH;
        var r271_Ascender = _r271_t1.Ascender;
        var r271_Descender = _r271_t1.Descender;
        var r271_HVContrast = _r271_t1.HVContrast;
        var r271_O = _r271_t1.O;
        var r271_Stroke = _r271_t1.Stroke;
        var r271_Jut = _r271_t1.Jut;
        var r271_SLAB = _r271_t1.SLAB;
        var r271_HalfStroke = _r271_t1.HalfStroke;
        var r271_ArchDepthA = _r271_t1.ArchDepthA;
        var r271_ArchDepthB = _r271_t1.ArchDepthB;
        var r271_MidJutSide = _r271_t1.MidJutSide;
        var _r271_t2 = r271_xn$Capture$2Lrc8.SpiroFns;
        var r271_flat = _r271_t2.flat;
        var r271_curl = _r271_t2.curl;
        var r271_widths = _r271_t2.widths;
        var r271_archv = _r271_t2.archv;
        var r271_dispiro = _r271_t2.dispiro;
        var _r271_t3 = r271_xn$Capture$2Lrc8.BooleFns;
        var _r271_t4 = r271_xn$Capture$2Lrc8.CommonShapes.resolve();
        var r271_OShape = _r271_t4.OShape;
        var r271_OShapeFlatTB = _r271_t4.OShapeFlatTB;
        var r271_HSerif = _r271_t4.HSerif;
        var r271_VBar = _r271_t4.VBar;
        var _r271_t5 = r271_xn$Capture$2Lrc8['Common-Derivatives'].resolve();
        var r271_xn$selectvariant$7Hrq = _r271_t5['select-variant'];
        var r271_xn$referglyph$1aao = _r271_t5['refer-glyph'];
        var _r271_t6 = r271_xn$Capture$2Lrc8['Letter-Shared-Shapes'].resolve();
        var r271_FlatHookDepth = _r271_t6.FlatHookDepth;
        var r271_VarPhiRing = function (r275_fFlatTB, r275_df, r275_y1, r275_y2) {
            var _r275_t0, _r275_t1;
            return function () {
                var _r277_t1;
                var _r277_t0 = this;
                var r277_currentGlyph = _r277_t0;
                var r277_gap = Math.max(r275_df.mvs, 0.25 * (r275_df.rightSB - r275_df.leftSB));
                r277_currentGlyph.include(r271_VBar.m(r275_df.middle, r275_y1, r275_y2, r275_df.mvs));
                r277_currentGlyph.include(r275_fFlatTB ? r271_OShapeFlatTB(r275_y2, r275_y1, r275_df.leftSB, r275_df.rightSB, r275_df.mvs, r271_ArchDepthA * r275_df.div, r271_ArchDepthB * r275_df.div, r277_gap) : r271_OShape(r275_y2, r275_y1, r275_df.leftSB, r275_df.rightSB, r275_df.mvs, r271_ArchDepthA * r275_df.div, r271_ArchDepthB * r275_df.div));
                return void 0;
            };
        };
        var r271_GrekCapitalPhiImpl = function (r280_fFlatTB, r280_df) {
            var _r280_t0, _r280_t1;
            return function () {
                var _r282_t1;
                var _r282_t0 = this;
                var r282_currentGlyph = _r282_t0;
                var r282_y1 = r1_mix(r271_SLAB ? r271_Stroke : 0, r271_SLAB ? r271_CAP - r271_Stroke : r271_CAP, 0.125);
                var r282_y2 = r1_mix(r271_SLAB ? r271_Stroke : 0, r271_SLAB ? r271_CAP - r271_Stroke : r271_CAP, 0.875);
                r282_currentGlyph.include(r271_VarPhiRing(r280_fFlatTB, r280_df, r282_y1, r282_y2));
                r282_currentGlyph.include(r271_VBar.m(r280_df.middle, 0, r282_y1 + r271_HalfStroke));
                r282_currentGlyph.include(r271_VBar.m(r280_df.middle, r282_y2 - r271_HalfStroke, r271_CAP));
                if (r271_SLAB) {
                    r282_currentGlyph.include(r271_tagged('serifMT', r271_HSerif.mt(r280_df.middle, r271_CAP, r271_MidJutSide)));
                    r282_currentGlyph.include(r271_tagged('serifMB', r271_HSerif.mb(r280_df.middle, 0, r271_MidJutSide)));
                }
                return void 0;
            };
        };
        r271_xn$createAndSaveGlyphImpl$2Lrc3c('grek/Phi', 934, function () {
            var _r290_t1;
            var _r290_t0 = this;
            var r290_currentGlyph = _r290_t0;
            var r290_df = r271_DivFrame(r271_para.diversityM, 3);
            r290_currentGlyph.setWidth(r290_df.width);
            r290_currentGlyph.include(r290_df.markSet.capital());
            r290_currentGlyph.include(r271_GrekCapitalPhiImpl(0, r290_df));
            return void 0;
        });
        r271_xn$createAndSaveGlyphImpl$2Lrc3c('cyrl/Ef', 1060, function () {
            var _r296_t1;
            var _r296_t0 = this;
            var r296_currentGlyph = _r296_t0;
            var r296_df = r271_DivFrame(r271_para.diversityM, 3);
            r296_currentGlyph.setWidth(r296_df.width);
            r296_currentGlyph.include(r296_df.markSet.capital());
            r296_currentGlyph.include(r271_GrekCapitalPhiImpl(1, r296_df));
            return void 0;
        });
        r271_xn$createAndSaveGlyphImpl$2Lrc3c('grek/varphi', 981, function () {
            var _r302_t1;
            var _r302_t0 = this;
            var r302_currentGlyph = _r302_t0;
            var r302_df = r271_DivFrame(r271_para.diversityM, 3);
            r302_currentGlyph.setWidth(r302_df.width);
            r302_currentGlyph.include(r302_df.markSet.bp());
            r302_currentGlyph.include(r271_VarPhiRing(0, r302_df, 0, r271_XH));
            r302_currentGlyph.include(r271_VBar.m(r302_df.middle, r271_Descender, r271_HalfStroke));
            r302_currentGlyph.include(r271_VBar.m(r302_df.middle, r271_XH - r271_HalfStroke, r271_Ascender));
            return void 0;
        });
        r271_xn$createAndSaveGlyphImpl$2Lrc3c('cyrl/ef.serifless', null, function () {
            var _r310_t1;
            var _r310_t0 = this;
            var r310_currentGlyph = _r310_t0;
            var r310_df = r271_DivFrame(r271_para.diversityM, 3);
            r310_currentGlyph.setWidth(r310_df.width);
            r310_currentGlyph.include(r310_df.markSet.bp());
            r310_currentGlyph.include(r271_VarPhiRing(1, r310_df, 0, r271_XH));
            r310_currentGlyph.include(r271_VBar.m(r310_df.middle, r271_Descender, r271_HalfStroke));
            r310_currentGlyph.include(r271_VBar.m(r310_df.middle, r271_XH - r271_HalfStroke, r271_Ascender));
            return void 0;
        });
        r271_xn$createAndSaveGlyphImpl$2Lrc3c('cyrl/ef.topSerifed', null, function () {
            var _r318_t1;
            var _r318_t0 = this;
            var r318_currentGlyph = _r318_t0;
            var r318_df = r271_DivFrame(r271_para.diversityM, 3);
            r318_currentGlyph.include(r271_xn$referglyph$1aao('cyrl/ef.serifless'), r271_AS_BASE, r271_ALSO_METRICS);
            r318_currentGlyph.include(r271_tagged('serifMT', r271_HSerif.lt(r318_df.middle, r271_Ascender, r271_Jut)));
            return void 0;
        });
        r271_xn$createAndSaveGlyphImpl$2Lrc3c('cyrl/ef.serifed', null, function () {
            var _r323_t1;
            var _r323_t0 = this;
            var r323_currentGlyph = _r323_t0;
            var r323_df = r271_DivFrame(r271_para.diversityM, 3);
            r323_currentGlyph.include(r271_xn$referglyph$1aao('cyrl/ef.serifless'), r271_AS_BASE, r271_ALSO_METRICS);
            r323_currentGlyph.include(r271_tagged('serifMT', r271_HSerif.lt(r323_df.middle, r271_Ascender, r271_Jut)));
            r323_currentGlyph.include(r271_tagged('serifMB', r271_HSerif.mb(r323_df.middle, r271_Descender, r271_Jut)));
            return void 0;
        });
        r271_xn$createAndSaveGlyphImpl$2Lrc3c('cyrl/ef.cursive', null, function () {
            var _r329_t1;
            var _r329_t0 = this;
            var r329_currentGlyph = _r329_t0;
            var r329_df = r271_DivFrame(r271_para.diversityM, 3);
            r329_currentGlyph.setWidth(r329_df.width);
            r329_currentGlyph.include(r329_df.markSet.bp());
            r329_currentGlyph.include(r271_VarPhiRing(1, r329_df, 0, r271_XH));
            var r329_hd = r271_FlatHookDepth(r329_df);
            var r329_xCrossLeft = r1_mix(0, r329_df.leftSB, r1_mix(1, r329_df.div, 2));
            var r329_xCrossRight = r1_mix(r329_df.width, r329_df.rightSB, r1_mix(1, r329_df.div, 2));
            var r329_xBarLeft = r329_df.middle - r271_HalfStroke * r271_HVContrast;
            var r329_xBarRight = r329_df.middle + r271_HalfStroke * r271_HVContrast;
            r329_currentGlyph.include(r271_dispiro(r271_flat(r329_xCrossRight, r271_Ascender, r271_widths.lhs()), r271_curl(Math.min(r329_xBarLeft + r329_hd.x, r329_xCrossRight - 0.1), r271_Ascender), r271_archv(), r271_flat(r329_xBarLeft, Math.max(r271_XH, r271_Ascender - r329_hd.y)), r271_curl(r329_xBarLeft, r271_XH + r271_O)));
            r329_currentGlyph.include(r271_dispiro(r271_flat(r329_xCrossLeft, r271_Descender, r271_widths.lhs()), r271_curl(Math.max(r329_xBarRight - r329_hd.x, r329_xCrossLeft + 0.1), r271_Descender), r271_archv(), r271_flat(r329_xBarRight, Math.min(0, r271_Descender + r329_hd.y)), r271_curl(r329_xBarRight, 0 - r271_O)));
            return void 0;
        });
        r271_xn$selectvariant$7Hrq('cyrl/ef', 1092);
        return r271_xn$selectvariant$7Hrq('latn/phi', 632, new r271_xn$NamedParameterPair$2Lrc9b('shapeFrom', 'cyrl/ef'));
    });
    return void 0;
});
