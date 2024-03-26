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
    r270_xn$Capture_Ext$2Lrc2b['$defineGlyphBlockImpl$'](r270_xn$Capture_Ext$2Lrc2b, 'Letter-Greek-Psi', function (r271_xn$Capture$2Lrc8, r271_xn$ExportCapture$2Lrc4b) {
        var _r271_t6, _r271_t7;
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
        var r271_Ascender = _r271_t1.Ascender;
        var r271_Descender = _r271_t1.Descender;
        var r271_Upward = _r271_t1.Upward;
        var r271_Downward = _r271_t1.Downward;
        var r271_Rightward = _r271_t1.Rightward;
        var r271_SLAB = _r271_t1.SLAB;
        var r271_HalfStroke = _r271_t1.HalfStroke;
        var r271_SideJut = _r271_t1.SideJut;
        var r271_ArchDepthA = _r271_t1.ArchDepthA;
        var r271_ArchDepthB = _r271_t1.ArchDepthB;
        var r271_MidJutSide = _r271_t1.MidJutSide;
        var _r271_t2 = r271_xn$Capture$2Lrc8.SpiroFns;
        var r271_g4 = _r271_t2.g4;
        var r271_flat = _r271_t2.flat;
        var r271_curl = _r271_t2.curl;
        var r271_widths = _r271_t2.widths;
        var r271_heading = _r271_t2.heading;
        var r271_archv = _r271_t2.archv;
        var r271_arcvh = _r271_t2.arcvh;
        var r271_dispiro = _r271_t2.dispiro;
        var _r271_t3 = r271_xn$Capture$2Lrc8.BooleFns;
        var _r271_t4 = r271_xn$Capture$2Lrc8.CommonShapes.resolve();
        var r271_HSerif = _r271_t4.HSerif;
        var r271_VBar = _r271_t4.VBar;
        var _r271_t5 = r271_xn$Capture$2Lrc8['Common-Derivatives'].resolve();
        var r271_alias = _r271_t5.alias;
        var r271_PsiBaseShape = function (r274_df, r274_y1, r274_y2, r274_y3, r274_y4, r274_doBotSerif, r274_doTopSerif, r274_doSideSerifL, r274_doSideSerifR) {
            var _r274_t0, _r274_t1;
            return function () {
                var _r276_t1;
                var _r276_t0 = this;
                var r276_currentGlyph = _r276_t0;
                r276_currentGlyph.include(r271_dispiro(r271_widths.lhs(r274_df.mvs), r271_flat(r274_df.leftSB, r274_y3, r271_heading(r271_Downward)), r271_curl(r274_df.leftSB, r274_y2 + r271_ArchDepthB * r274_df.div), r271_arcvh(), r271_g4(r274_df.middle, r274_y2, r271_heading(r271_Rightward)), r271_archv(), r271_flat(r274_df.rightSB, r274_y2 + r271_ArchDepthA * r274_df.div), r271_curl(r274_df.rightSB, r274_y3, r271_heading(r271_Upward))));
                r276_currentGlyph.include(r271_VBar.m(r274_df.middle, r274_y2, r274_y4, r274_df.mvs));
                r276_currentGlyph.include(r271_VBar.m(r274_df.middle, r274_y1, r274_y2 + r271_HalfStroke));
                if (r274_doSideSerifL)
                    r276_currentGlyph.include(r271_tagged('serifLT', r271_HSerif.lt(r274_df.leftSB, r274_y3, r271_SideJut)));
                if (r274_doSideSerifR)
                    r276_currentGlyph.include(r271_tagged('serifRT', r271_HSerif.rt(r274_df.rightSB, r274_y3, r271_SideJut)));
                if (r274_doTopSerif)
                    r276_currentGlyph.include(r271_tagged('serifMT', r271_HSerif.mt(r274_df.middle, r271_CAP, r271_MidJutSide)));
                if (r274_doBotSerif)
                    r276_currentGlyph.include(r271_tagged('serifMB', r271_HSerif.mb(r274_df.middle, 0, r271_MidJutSide)));
                return void 0;
            };
        };
        r271_xn$createAndSaveGlyphImpl$2Lrc3c('grek/Psi', 936, function () {
            var _r286_t1;
            var _r286_t0 = this;
            var r286_currentGlyph = _r286_t0;
            var r286_df = r271_DivFrame(r271_para.diversityM, 3);
            r286_currentGlyph.setWidth(r286_df.width);
            r286_currentGlyph.include(r286_df.markSet.capital());
            r286_currentGlyph.include(r271_PsiBaseShape(r286_df, 0, r271_CAP * 0.3, r271_CAP, r271_CAP, r271_SLAB, r271_SLAB && r286_df.width > r271_para.refJut * 7, r271_SLAB, r271_SLAB));
            return void 0;
        });
        r271_alias('cyrl/Psi', 1136, 'grek/Psi');
        r271_xn$createAndSaveGlyphImpl$2Lrc3c('smcpPsi', 7466, function () {
            var _r292_t1;
            var _r292_t0 = this;
            var r292_currentGlyph = _r292_t0;
            var r292_df = r271_DivFrame(r271_para.diversityM, 3);
            r292_currentGlyph.setWidth(r292_df.width);
            r292_currentGlyph.include(r292_df.markSet.e());
            r292_currentGlyph.include(r271_PsiBaseShape(r292_df, 0, r271_XH * 0.3, r271_XH, r271_XH, r271_SLAB, false, r271_SLAB, r271_SLAB));
            return void 0;
        });
        r271_xn$createAndSaveGlyphImpl$2Lrc3c('grek/psi', 968, function () {
            var _r298_t1;
            var _r298_t0 = this;
            var r298_currentGlyph = _r298_t0;
            var r298_df = r271_DivFrame(r271_para.diversityM, 3);
            r298_currentGlyph.setWidth(r298_df.width);
            r298_currentGlyph.include(r298_df.markSet.bp());
            r298_currentGlyph.include(r271_PsiBaseShape(r298_df, r271_Descender, 0, r271_XH, r271_Ascender, false, false, r271_SLAB, false));
            return void 0;
        });
        return r271_xn$createAndSaveGlyphImpl$2Lrc3c('cyrl/psi', 1137, function () {
            var _r304_t1;
            var _r304_t0 = this;
            var r304_currentGlyph = _r304_t0;
            var r304_df = r271_DivFrame(r271_para.diversityM, 3);
            r304_currentGlyph.setWidth(r304_df.width);
            r304_currentGlyph.include(r304_df.markSet.p());
            r304_currentGlyph.include(r271_PsiBaseShape(r304_df, r271_Descender, 0, r271_XH, r271_XH, false, false, r271_SLAB, false));
            return void 0;
        });
    });
    return void 0;
});
