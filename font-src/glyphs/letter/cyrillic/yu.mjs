'use strict';
import * as _s0_t0 from '../../../support/utils.mjs';
var _s0_t1;
export {
    _s0_t1 as apply
};
var r1_apply, _r1_t0, _r1_t1, _r1_t2, _r1_t3, _r1_t4, _r1_t5, _r1_t6, _r1_t7;
var _r1_t8 = _s0_t0;
var r1_mix = _r1_t8.mix;
var r1_barMixL = _r1_t8.barMixL;
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
    r269_xn$Capture_Ext$2Lrc2b['$defineGlyphBlockImpl$'](r269_xn$Capture_Ext$2Lrc2b, 'Letter-Cyrillic-Yu', function (r270_xn$Capture$2Lrc8, r270_xn$ExportCapture$2Lrc4b) {
        var _r270_t7, _r270_t8;
        var _r270_t0 = r270_xn$Capture$2Lrc8;
        var r270_xn$createAndSaveGlyphImpl$2Lrc3c = _r270_t0['$createAndSaveGlyphImpl$'];
        var r270_xn$NamedParameterPair$2Lrc9b = _r270_t0['$NamedParameterPair$'];
        var r270_xn$assignUnicodeImpl$2Lrc8b = _r270_t0['$assignUnicodeImpl$'];
        var r270_xn$execState$2Lrc0b = _r270_t0['$execState$'];
        var r270_para = _r270_t0.para;
        var r270_DivFrame = _r270_t0.DivFrame;
        var _r270_t1 = r270_xn$Capture$2Lrc8.Metrics;
        var r270_CAP = _r270_t1.CAP;
        var r270_XH = _r270_t1.XH;
        var r270_Ascender = _r270_t1.Ascender;
        var r270_HVContrast = _r270_t1.HVContrast;
        var r270_ArchDepthA = _r270_t1.ArchDepthA;
        var r270_ArchDepthB = _r270_t1.ArchDepthB;
        var r270_SmallArchDepthA = _r270_t1.SmallArchDepthA;
        var r270_SmallArchDepthB = _r270_t1.SmallArchDepthB;
        var r270_StrokeWidthBlend = _r270_t1.StrokeWidthBlend;
        var _r270_t2 = r270_xn$Capture$2Lrc8.SpiroFns;
        var _r270_t3 = r270_xn$Capture$2Lrc8.BooleFns;
        var _r270_t4 = r270_xn$Capture$2Lrc8.CommonShapes.resolve();
        var r270_OShape = _r270_t4.OShape;
        var _r270_t5 = r270_xn$Capture$2Lrc8['Common-Derivatives'].resolve();
        var _r270_t6 = r270_xn$Capture$2Lrc8['Letter-Cyrillic-Iotified-A'].resolve();
        var r270_Iotified = _r270_t6.Iotified;
        var r270_xn$SLABALL$5sIl = 1;
        var r270_xn$SLABLOWER$5sIl = 2;
        var r270_xn$SLABBULGARIAN$5sIl = 3;
        var r270_xn$SLABNONE$5sIl = 0;
        var r270_xn$SLABFULL$5sIl = 1;
        var r270_xn$SLABOUTWARD$5sIl = 2;
        var r270_CyrYuShape = function (r274_df, r274_slabType, r274_top, r274_xtop, r274_ada, r274_adb) {
            var _r274_t0, _r274_t1;
            return function () {
                var _r276_t1;
                var _r276_t0 = this;
                var r276_currentGlyph = _r276_t0;
                var r276_xm = r1_barMixL(r274_df.leftSB, r274_df.rightSB, r274_df.mvs * r270_HVContrast, r270_StrokeWidthBlend(0.4, 0.45));
                r276_currentGlyph.include(r270_OShape(r274_top, 0, r276_xm, r274_df.rightSB, r274_df.mvs, r274_ada * 0.7 * r274_df.div, r274_adb * 0.7 * r274_df.div));
                r276_currentGlyph.include(r274_slabType === r270_xn$SLABBULGARIAN$5sIl ? r270_Iotified.ascender(r274_df, r274_xtop, r276_xm, r274_top / 2) : r270_Iotified.full(r274_df, r274_xtop, r276_xm, r274_top / 2, new r270_xn$NamedParameterPair$2Lrc9b('fCapital', r274_slabType === r270_xn$SLABALL$5sIl)));
                return void 0;
            };
        };
        var r270_CyrRevYuShape = function (r280_df, r280_slabType, r280_top, r280_xtop, r280_ada, r280_adb) {
            var _r280_t0, _r280_t1;
            return function () {
                var _r282_t1;
                var _r282_t0 = this;
                var r282_currentGlyph = _r282_t0;
                var r282_xm = r1_barMixL(r280_df.leftSB, r280_df.rightSB, r280_df.mvs * r270_HVContrast, r270_StrokeWidthBlend(0.4, 0.45));
                var r282_revXm = r280_df.leftSB + r280_df.rightSB - r282_xm;
                r282_currentGlyph.include(r270_OShape(r280_top, 0, r280_df.leftSB, r282_revXm, r280_df.mvs, r280_ada * 0.7 * r280_df.div, r280_adb * 0.7 * r280_df.div));
                var r282_useItalicShape = r280_slabType !== r270_xn$SLABALL$5sIl && r270_para.isItalic;
                var r282_slabTop = r282_useItalicShape ? r270_xn$SLABNONE$5sIl : r270_xn$SLABFULL$5sIl;
                var r282_slabBottom = r282_useItalicShape ? r270_xn$SLABOUTWARD$5sIl : r270_xn$SLABFULL$5sIl;
                r282_currentGlyph.include(r270_Iotified.RevShape(r280_df, r280_xtop, new r270_xn$NamedParameterPair$2Lrc9b('hBarLeft', r282_revXm), new r270_xn$NamedParameterPair$2Lrc9b('hBarY', r280_top / 2), new r270_xn$NamedParameterPair$2Lrc9b('slabTop', r282_slabTop), new r270_xn$NamedParameterPair$2Lrc9b('slabBottom', r282_slabBottom)));
                return void 0;
            };
        };
        r270_xn$createAndSaveGlyphImpl$2Lrc3c('cyrl/Yu', 1070, function () {
            var _r291_t1;
            var _r291_t0 = this;
            var r291_currentGlyph = _r291_t0;
            var r291_df = r270_DivFrame(r270_para.diversityM, 3);
            r291_currentGlyph.setWidth(r291_df.width);
            r291_currentGlyph.include(r291_df.markSet.capital());
            r291_currentGlyph.include(r270_CyrYuShape(r291_df, r270_xn$SLABALL$5sIl, r270_CAP, r270_CAP, r270_ArchDepthA, r270_ArchDepthB));
            return void 0;
        });
        r270_xn$createAndSaveGlyphImpl$2Lrc3c('cyrl/yu', 1102, function () {
            var _r297_t1;
            var _r297_t0 = this;
            var r297_currentGlyph = _r297_t0;
            var r297_df = r270_DivFrame(r270_para.diversityM, 3);
            r297_currentGlyph.setWidth(r297_df.width);
            r297_currentGlyph.include(r297_df.markSet.e());
            r297_currentGlyph.include(r270_CyrYuShape(r297_df, r270_xn$SLABLOWER$5sIl, r270_XH, r270_XH, r270_SmallArchDepthA, r270_SmallArchDepthB));
            return void 0;
        });
        r270_xn$createAndSaveGlyphImpl$2Lrc3c('cyrl/yu.BGR', null, function () {
            var _r303_t1;
            var _r303_t0 = this;
            var r303_currentGlyph = _r303_t0;
            var r303_df = r270_DivFrame(r270_para.diversityM, 3);
            r303_currentGlyph.setWidth(r303_df.width);
            r303_currentGlyph.include(r303_df.markSet.b());
            r303_currentGlyph.include(r270_CyrYuShape(r303_df, r270_xn$SLABBULGARIAN$5sIl, r270_XH, r270_Ascender, r270_SmallArchDepthA, r270_SmallArchDepthB));
            return void 0;
        });
        r270_xn$createAndSaveGlyphImpl$2Lrc3c('cyrl/YuRev', 42580, function () {
            var _r309_t1;
            var _r309_t0 = this;
            var r309_currentGlyph = _r309_t0;
            var r309_df = r270_DivFrame(r270_para.diversityM, 3);
            r309_currentGlyph.setWidth(r309_df.width);
            r309_currentGlyph.include(r309_df.markSet.capital());
            r309_currentGlyph.include(r270_CyrRevYuShape(r309_df, r270_xn$SLABALL$5sIl, r270_CAP, r270_CAP, r270_ArchDepthA, r270_ArchDepthB));
            return void 0;
        });
        return r270_xn$createAndSaveGlyphImpl$2Lrc3c('cyrl/yuRev', 42581, function () {
            var _r315_t1;
            var _r315_t0 = this;
            var r315_currentGlyph = _r315_t0;
            var r315_df = r270_DivFrame(r270_para.diversityM, 3);
            r315_currentGlyph.setWidth(r315_df.width);
            r315_currentGlyph.include(r315_df.markSet.e());
            r315_currentGlyph.include(r270_CyrRevYuShape(r315_df, r270_xn$SLABLOWER$5sIl, r270_XH, r270_XH, r270_SmallArchDepthA, r270_SmallArchDepthB));
            return void 0;
        });
    });
    return void 0;
});
