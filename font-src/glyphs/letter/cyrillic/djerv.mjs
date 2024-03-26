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
    r269_xn$Capture_Ext$2Lrc2b['$defineGlyphBlockImpl$'](r269_xn$Capture_Ext$2Lrc2b, 'Letter-Cyrillic-Djerv', function (r270_xn$Capture$2Lrc8, r270_xn$ExportCapture$2Lrc4b) {
        var _r270_t8, _r270_t9;
        var _r270_t0 = r270_xn$Capture$2Lrc8;
        var r270_xn$createAndSaveGlyphImpl$2Lrc3c = _r270_t0['$createAndSaveGlyphImpl$'];
        var r270_xn$NamedParameterPair$2Lrc9b = _r270_t0['$NamedParameterPair$'];
        var r270_xn$assignUnicodeImpl$2Lrc8b = _r270_t0['$assignUnicodeImpl$'];
        var r270_xn$execState$2Lrc0b = _r270_t0['$execState$'];
        var r270_DivFrame = _r270_t0.DivFrame;
        var _r270_t1 = r270_xn$Capture$2Lrc8.Metrics;
        var r270_CAP = _r270_t1.CAP;
        var r270_XH = _r270_t1.XH;
        var r270_Stroke = _r270_t1.Stroke;
        var r270_SLAB = _r270_t1.SLAB;
        var r270_SmallArchDepthA = _r270_t1.SmallArchDepthA;
        var r270_SmallArchDepthB = _r270_t1.SmallArchDepthB;
        var r270_AdviceStroke2 = _r270_t1.AdviceStroke2;
        var _r270_t2 = r270_xn$Capture$2Lrc8.SpiroFns;
        var _r270_t3 = r270_xn$Capture$2Lrc8.BooleFns;
        var _r270_t4 = r270_xn$Capture$2Lrc8.CommonShapes.resolve();
        var r270_VBar = _r270_t4.VBar;
        var r270_FlipAround = _r270_t4.FlipAround;
        var _r270_t5 = r270_xn$Capture$2Lrc8['Common-Derivatives'].resolve();
        var _r270_t6 = r270_xn$Capture$2Lrc8['Letter-Shared-Shapes'].resolve();
        var r270_LetterBarOverlay = _r270_t6.LetterBarOverlay;
        var r270_SerifFrame = _r270_t6.SerifFrame;
        var _r270_t7 = r270_xn$Capture$2Lrc8['Letter-Latin-U'].resolve();
        var r270_UShape = _r270_t7.UShape;
        var r270_DjervBar = function (r275_df, r275_top, r275_py, r275_fSlab) {
            var _r275_t0, _r275_t1;
            var r275_stroke = r270_AdviceStroke2(2, 3, r275_top);
            return r270_LetterBarOverlay.m.in(new r270_xn$NamedParameterPair$2Lrc9b('x', r275_df.middle), new r270_xn$NamedParameterPair$2Lrc9b('bot', r275_top * r275_py), new r270_xn$NamedParameterPair$2Lrc9b('top', r275_top - (r275_fSlab ? r270_Stroke : 0)));
        };
        var r270_DjervShape = function (r279_df, r279_top, r279_py, r279_fSmall, r279_fSlab) {
            var _r279_t0, _r279_t1;
            return function () {
                var r281_sf, _r281_t1;
                var _r281_t0 = this;
                var r281_currentGlyph = _r281_t0;
                var r281_uBot = r279_top * (1 - r279_py);
                r281_currentGlyph.include(r270_VBar.m(r279_df.middle, 0, r281_uBot));
                r281_currentGlyph.include(r279_fSmall ? r270_UShape(r279_df, r279_top, r281_uBot, new r270_xn$NamedParameterPair$2Lrc9b('ada', r270_SmallArchDepthA), new r270_xn$NamedParameterPair$2Lrc9b('adb', r270_SmallArchDepthB)) : r270_UShape(r279_df, r279_top, r281_uBot));
                r281_currentGlyph.include(r270_FlipAround(r279_df.middle, r279_top / 2));
                if (r279_fSlab) {
                    r281_sf = r270_SerifFrame.fromDf(r279_df, r279_top, 0);
                    r281_currentGlyph.include(r281_sf.lb.full);
                    r281_currentGlyph.include(r281_sf.rb.full);
                    r281_currentGlyph.include(r281_sf.mt.full);
                }
                return void 0;
            };
        };
        r270_xn$createAndSaveGlyphImpl$2Lrc3c('cyrl/Djerv', 42568, function () {
            var _r292_t1;
            var _r292_t0 = this;
            var r292_currentGlyph = _r292_t0;
            var r292_df = r270_DivFrame(1);
            r292_currentGlyph.setWidth(r292_df.width);
            r292_currentGlyph.include(r292_df.markSet.capital());
            r292_currentGlyph.include(r270_DjervShape(r292_df, r270_CAP, 0.6, false, r270_SLAB));
            r292_currentGlyph.include(r270_DjervBar(r292_df, r270_CAP, 0.6, r270_SLAB));
            return void 0;
        });
        r270_xn$createAndSaveGlyphImpl$2Lrc3c('cyrl/djerv', 42569, function () {
            var _r299_t1;
            var _r299_t0 = this;
            var r299_currentGlyph = _r299_t0;
            var r299_df = r270_DivFrame(1);
            r299_currentGlyph.setWidth(r299_df.width);
            r299_currentGlyph.include(r299_df.markSet.e());
            r299_currentGlyph.include(r270_DjervShape(r299_df, r270_XH, 0.6, true, r270_SLAB));
            r299_currentGlyph.include(r270_DjervBar(r299_df, r270_XH, 0.6, r270_SLAB));
            return void 0;
        });
        return r270_xn$createAndSaveGlyphImpl$2Lrc3c('rStirrup', 43845, function () {
            var _r306_t1;
            var _r306_t0 = this;
            var r306_currentGlyph = _r306_t0;
            var r306_df = r270_DivFrame(1);
            r306_currentGlyph.setWidth(r306_df.width);
            r306_currentGlyph.include(r306_df.markSet.e());
            r306_currentGlyph.include(r270_DjervShape(r306_df, r270_XH, 0.6, false, false));
            return void 0;
        });
    });
    return void 0;
});
