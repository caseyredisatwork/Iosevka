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
    r269_xn$Capture_Ext$2Lrc2b['$defineGlyphBlockImpl$'](r269_xn$Capture_Ext$2Lrc2b, 'Letter-Latin-Sakha-Yat', function (r270_xn$Capture$2Lrc8, r270_xn$ExportCapture$2Lrc4b) {
        var r270_suffix, r270_Yeri, _r270_t11, _r270_t12, _r270_t13, _r270_t14, _r270_tag15;
        var _r270_t0 = r270_xn$Capture$2Lrc8;
        var r270_xn$createAndSaveGlyphImpl$2Lrc3c = _r270_t0['$createAndSaveGlyphImpl$'];
        var r270_xn$NamedParameterPair$2Lrc9b = _r270_t0['$NamedParameterPair$'];
        var r270_xn$assignUnicodeImpl$2Lrc8b = _r270_t0['$assignUnicodeImpl$'];
        var r270_xn$execState$2Lrc0b = _r270_t0['$execState$'];
        var r270_para = _r270_t0.para;
        var r270_DivFrame = _r270_t0.DivFrame;
        var _r270_t1 = r270_xn$Capture$2Lrc8.Metrics;
        var r270_XH = _r270_t1.XH;
        var r270_HVContrast = _r270_t1.HVContrast;
        var r270_Jut = _r270_t1.Jut;
        var _r270_t2 = r270_xn$Capture$2Lrc8.SpiroFns;
        var r270_corner = _r270_t2.corner;
        var _r270_t3 = r270_xn$Capture$2Lrc8.BooleFns;
        var _r270_t4 = r270_xn$Capture$2Lrc8.CommonShapes.resolve();
        var _r270_t5 = r270_xn$Capture$2Lrc8['Common-Derivatives'].resolve();
        var r270_xn$selectvariant$7Hrq = _r270_t5['select-variant'];
        var _r270_t6 = r270_xn$Capture$2Lrc8['Letter-Shared-Shapes'].resolve();
        var r270_SerifFrame = _r270_t6.SerifFrame;
        var _r270_t7 = r270_xn$Capture$2Lrc8['Letter-Cyrillic-Yeri'].resolve();
        var r270_CyrlYeriUprightShape = _r270_t7.CyrlYeriUprightShape;
        var r270_CyrlYeriRoundShape = _r270_t7.CyrlYeriRoundShape;
        var r270_CyrlYeriCursiveShape = _r270_t7.CyrlYeriCursiveShape;
        var _r270_t8 = r270_xn$Capture$2Lrc8['Letter-Cyrillic-Iotified-A'].resolve();
        var r270_Iotified = _r270_t8.Iotified;
        var r270_SakhaYatShape = function (r276_Yeri, r276_df, r276_top) {
            var _r276_t0, _r276_t1;
            return function () {
                var _r278_t1;
                var _r278_t0 = this;
                var r278_currentGlyph = _r278_t0;
                var r278_jut = Math.min(r270_Jut, r270_Jut * 0.75 * r276_df.div);
                r278_currentGlyph.include(r276_Yeri(r276_top, new r270_xn$NamedParameterPair$2Lrc9b('left', r276_df.middle - r276_df.mvs / 2 * r270_HVContrast), new r270_xn$NamedParameterPair$2Lrc9b('right', r276_df.rightSB), new r270_xn$NamedParameterPair$2Lrc9b('stroke', r276_df.mvs), new r270_xn$NamedParameterPair$2Lrc9b('jut', r278_jut)));
                r278_currentGlyph.setWidth(r276_df.width);
                r278_currentGlyph.include(r270_Iotified.outer(r276_df, r276_top, r276_df.middle + r276_df.mvs / 2 * r270_HVContrast, r276_top - r276_df.mvs * 0.5));
                return void 0;
            };
        };
        var r270_YerConfig = {
            'corner': [r270_CyrlYeriUprightShape],
            'round': [r270_CyrlYeriRoundShape],
            'cursive': [r270_CyrlYeriCursiveShape]
        };
        var _r270_t9 = Object.entries(r270_YerConfig)[Symbol.iterator]();
        var _r270_t10 = void 0;
        while (!(_r270_t10 = _r270_t9.next()).done) {
            _r270_t11 = _r270_t10.value;
            r270_suffix = _r270_t11[0];
            r270_Yeri = _r270_t11[1][0];
            _r270_t11[1];
            (function () {
                return r270_xn$createAndSaveGlyphImpl$2Lrc3c('latn/yatSakha.upright.' + r270_suffix, null, function () {
                    var _r291_t1;
                    var _r291_t0 = this;
                    var r291_currentGlyph = _r291_t0;
                    var r291_df = r270_DivFrame(r270_para.diversityM, 3);
                    r291_currentGlyph.setWidth(r291_df.width);
                    r291_currentGlyph.include(r291_df.markSet.e());
                    r291_currentGlyph.include(r270_SakhaYatShape(r270_Yeri, r291_df, r270_XH));
                    return void 0;
                });
            }());
        }
        return r270_xn$selectvariant$7Hrq('latn/yatSakha.upright');
    });
    return void 0;
});
