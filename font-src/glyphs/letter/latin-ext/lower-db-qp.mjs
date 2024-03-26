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
    r270_xn$Capture_Ext$2Lrc2b['$defineGlyphBlockImpl$'](r270_xn$Capture_Ext$2Lrc2b, 'Letter-Latin-Lower-DB-QP', function (r271_xn$Capture$2Lrc8, r271_xn$ExportCapture$2Lrc4b) {
        var _r271_t8, _r271_t9;
        var _r271_t0 = r271_xn$Capture$2Lrc8;
        var r271_xn$createAndSaveGlyphImpl$2Lrc3c = _r271_t0['$createAndSaveGlyphImpl$'];
        var r271_xn$NamedParameterPair$2Lrc9b = _r271_t0['$NamedParameterPair$'];
        var r271_xn$assignUnicodeImpl$2Lrc8b = _r271_t0['$assignUnicodeImpl$'];
        var r271_xn$execState$2Lrc0b = _r271_t0['$execState$'];
        var r271_para = _r271_t0.para;
        var r271_DivFrame = _r271_t0.DivFrame;
        var _r271_t1 = r271_xn$Capture$2Lrc8.Metrics;
        var r271_XH = _r271_t1.XH;
        var r271_Ascender = _r271_t1.Ascender;
        var r271_Descender = _r271_t1.Descender;
        var r271_HVContrast = _r271_t1.HVContrast;
        var r271_OX = _r271_t1.OX;
        var r271_SmallArchDepth = _r271_t1.SmallArchDepth;
        var r271_Jut = _r271_t1.Jut;
        var r271_SLAB = _r271_t1.SLAB;
        var r271_SideJut = _r271_t1.SideJut;
        var _r271_t2 = r271_xn$Capture$2Lrc8.SpiroFns;
        var _r271_t3 = r271_xn$Capture$2Lrc8.BooleFns;
        var _r271_t4 = r271_xn$Capture$2Lrc8.CommonShapes.resolve();
        var r271_HSerif = _r271_t4.HSerif;
        var r271_VBar = _r271_t4.VBar;
        var r271_FlipAround = _r271_t4.FlipAround;
        var _r271_t5 = r271_xn$Capture$2Lrc8['Common-Derivatives'].resolve();
        var _r271_t6 = r271_xn$Capture$2Lrc8['Letter-Shared-Shapes'].resolve();
        var r271_OBarLeft = _r271_t6.OBarLeft;
        var r271_UpwardHookShape = _r271_t6.UpwardHookShape;
        var r271_SerifFrame = _r271_t6.SerifFrame;
        var _r271_t7 = r271_xn$Capture$2Lrc8['Letter-Latin-Lower-AE-OE'].resolve();
        var r271_SubDfAndShift = _r271_t7.SubDfAndShift;
        var r271_DbCenterShape = function (r276_df) {
            var _r276_t0, _r276_t1;
            return function () {
                var _r278_t2;
                var _r278_t1 = this;
                var r278_currentGlyph = _r278_t1;
                var _r278_t0 = r271_SubDfAndShift(0, r276_df, r271_OX);
                var r278_subDf = _r278_t0[0];
                var r278_ada = r278_subDf.archDepthA(r271_SmallArchDepth, r276_df.mvs);
                var r278_adb = r278_subDf.archDepthB(r271_SmallArchDepth, r276_df.mvs);
                r278_currentGlyph.include(r271_OBarLeft.roundedTop(new r271_xn$NamedParameterPair$2Lrc9b('left', r276_df.middle - 0.5 * r276_df.mvs * r271_HVContrast), new r271_xn$NamedParameterPair$2Lrc9b('right', r276_df.rightSB), new r271_xn$NamedParameterPair$2Lrc9b('yTerminal', 0), new r271_xn$NamedParameterPair$2Lrc9b('sw', r276_df.mvs), new r271_xn$NamedParameterPair$2Lrc9b('ada', r278_ada), new r271_xn$NamedParameterPair$2Lrc9b('adb', r278_adb)));
                r278_currentGlyph.include(r271_FlipAround(r276_df.middle, r271_XH / 2));
                r278_currentGlyph.include(r271_OBarLeft.rounded(new r271_xn$NamedParameterPair$2Lrc9b('left', r276_df.middle - 0.5 * r276_df.mvs * r271_HVContrast), new r271_xn$NamedParameterPair$2Lrc9b('right', r276_df.rightSB), new r271_xn$NamedParameterPair$2Lrc9b('yTerminal', r271_XH / 2), new r271_xn$NamedParameterPair$2Lrc9b('sw', r276_df.mvs), new r271_xn$NamedParameterPair$2Lrc9b('ada', r278_ada), new r271_xn$NamedParameterPair$2Lrc9b('adb', r278_adb)));
                return void 0;
            };
        };
        r271_xn$createAndSaveGlyphImpl$2Lrc3c('db', 568, function () {
            var _r296_t1;
            var _r296_t0 = this;
            var r296_currentGlyph = _r296_t0;
            var r296_df = r271_DivFrame(r271_para.diversityM, 3);
            r296_currentGlyph.setWidth(r296_df.width);
            r296_currentGlyph.include(r296_df.markSet.b());
            r296_currentGlyph.include(r271_DbCenterShape(r296_df));
            r296_currentGlyph.include(r271_VBar.m(r296_df.middle, r271_XH, r271_Ascender, r296_df.mvs));
            if (r271_SLAB)
                r296_currentGlyph.include(r271_HSerif.lt(r296_df.middle - r296_df.mvs / 2 * r271_HVContrast, r271_Ascender, r271_SideJut));
            return void 0;
        });
        return r271_xn$createAndSaveGlyphImpl$2Lrc3c('qp', 569, function () {
            var _r304_t1;
            var _r304_t0 = this;
            var r304_currentGlyph = _r304_t0;
            var r304_df = r271_DivFrame(r271_para.diversityM, 3);
            r304_currentGlyph.setWidth(r304_df.width);
            r304_currentGlyph.include(r304_df.markSet.p());
            r304_currentGlyph.include(r271_DbCenterShape(r304_df));
            r304_currentGlyph.include(r271_FlipAround(r304_df.middle, r271_XH / 2));
            r304_currentGlyph.include(r271_VBar.m(r304_df.middle, r271_Descender, 0, r304_df.mvs));
            if (r271_SLAB)
                r304_currentGlyph.include(r271_HSerif.mb(r304_df.middle, r271_Descender, r271_Jut));
            return void 0;
        });
    });
    return void 0;
});
