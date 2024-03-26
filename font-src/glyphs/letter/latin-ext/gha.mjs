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
    r270_xn$Capture_Ext$2Lrc2b['$defineGlyphBlockImpl$'](r270_xn$Capture_Ext$2Lrc2b, 'Letter-Latin-Gha', function (r271_xn$Capture$2Lrc8, r271_xn$ExportCapture$2Lrc4b) {
        var _r271_t7, _r271_t8;
        var _r271_t0 = r271_xn$Capture$2Lrc8;
        var r271_xn$createAndSaveGlyphImpl$2Lrc3c = _r271_t0['$createAndSaveGlyphImpl$'];
        var r271_xn$NamedParameterPair$2Lrc9b = _r271_t0['$NamedParameterPair$'];
        var r271_xn$assignUnicodeImpl$2Lrc8b = _r271_t0['$assignUnicodeImpl$'];
        var r271_xn$execState$2Lrc0b = _r271_t0['$execState$'];
        var r271_para = _r271_t0.para;
        var r271_DivFrame = _r271_t0.DivFrame;
        var _r271_t1 = r271_xn$Capture$2Lrc8.Metrics;
        var r271_Width = _r271_t1.Width;
        var r271_CAP = _r271_t1.CAP;
        var r271_XH = _r271_t1.XH;
        var r271_Descender = _r271_t1.Descender;
        var r271_HVContrast = _r271_t1.HVContrast;
        var r271_Rightward = _r271_t1.Rightward;
        var r271_O = _r271_t1.O;
        var r271_SmallArchDepth = _r271_t1.SmallArchDepth;
        var r271_SLAB = _r271_t1.SLAB;
        var r271_ArchDepthAOf = _r271_t1.ArchDepthAOf;
        var r271_ArchDepthBOf = _r271_t1.ArchDepthBOf;
        var _r271_t2 = r271_xn$Capture$2Lrc8.SpiroFns;
        var r271_g4 = _r271_t2.g4;
        var r271_flat = _r271_t2.flat;
        var r271_curl = _r271_t2.curl;
        var r271_widths = _r271_t2.widths;
        var r271_heading = _r271_t2.heading;
        var r271_alsoThru = _r271_t2.alsoThru;
        var r271_dispiro = _r271_t2.dispiro;
        var _r271_t3 = r271_xn$Capture$2Lrc8.BooleFns;
        var _r271_t4 = r271_xn$Capture$2Lrc8.CommonShapes.resolve();
        var r271_OShape = _r271_t4.OShape;
        var r271_VBar = _r271_t4.VBar;
        var _r271_t5 = r271_xn$Capture$2Lrc8['Common-Derivatives'].resolve();
        var _r271_t6 = r271_xn$Capture$2Lrc8['Letter-Shared-Shapes'].resolve();
        var r271_SerifFrame = _r271_t6.SerifFrame;
        var r271_GhaShape = function (r275_df, r275_top) {
            var _r275_t0, _r275_t1;
            return function () {
                var r277_sf, _r277_t1;
                var _r277_t0 = this;
                var r277_currentGlyph = _r277_t0;
                var r277_abarRight = r275_df.middle + r275_df.mvs / 2 * r271_HVContrast;
                var r277_ada = r271_ArchDepthAOf(Math.max(r275_df.mvs * 1.125, r271_SmallArchDepth * 0.6 * r275_df.div), r271_Width * r275_df.div);
                var r277_adb = r271_ArchDepthBOf(Math.max(r275_df.mvs * 1.125, r271_SmallArchDepth * 0.6 * r275_df.div), r271_Width * r275_df.div);
                r277_currentGlyph.include(r271_OShape(r275_top, 0, r275_df.leftSB, r277_abarRight, r275_df.mvs, r277_ada, r277_adb));
                r277_currentGlyph.include(r271_VBar.r(r275_df.rightSB - r271_O, r271_Descender, r275_top, r275_df.mvs));
                r277_currentGlyph.include(r271_dispiro(r271_widths.lhs(r275_df.mvs), r271_flat(r275_df.middle, r275_top - r277_adb, r271_heading(r271_Rightward)), r271_curl(r275_df.middle + 1, r275_top - r277_adb, r271_heading(r271_Rightward)), r271_alsoThru(0.5, 0.15), r271_g4(r275_df.rightSB - r271_O - r275_df.mvs * r271_HVContrast, r275_top, r271_widths(0, r275_df.mvs))));
                if (r271_SLAB) {
                    r277_sf = r271_SerifFrame.fromDf(r275_df, r275_top, r271_Descender);
                    r277_currentGlyph.include(r277_sf.rb.full);
                }
                return void 0;
            };
        };
        r271_xn$createAndSaveGlyphImpl$2Lrc3c('Gha', 418, function () {
            var _r284_t1;
            var _r284_t0 = this;
            var r284_currentGlyph = _r284_t0;
            var r284_df = r271_DivFrame(r271_para.diversityM, 3);
            r284_currentGlyph.setWidth(r284_df.width);
            r284_currentGlyph.include(r284_df.markSet.capDesc());
            r284_currentGlyph.include(r271_GhaShape(r284_df, r271_CAP));
            return void 0;
        });
        return r271_xn$createAndSaveGlyphImpl$2Lrc3c('gha', 419, function () {
            var _r290_t1;
            var _r290_t0 = this;
            var r290_currentGlyph = _r290_t0;
            var r290_df = r271_DivFrame(r271_para.diversityM, 3);
            r290_currentGlyph.setWidth(r290_df.width);
            r290_currentGlyph.include(r290_df.markSet.p());
            r290_currentGlyph.include(r271_GhaShape(r290_df, r271_XH));
            return void 0;
        });
    });
    return void 0;
});
