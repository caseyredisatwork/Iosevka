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
    r269_xn$Capture_Ext$2Lrc2b['$defineGlyphBlockImpl$'](r269_xn$Capture_Ext$2Lrc2b, 'Letter-Cyrillic-Dzhe', function (r270_xn$Capture$2Lrc8, r270_xn$ExportCapture$2Lrc4b) {
        var r270_suffix, _r270_t10, _r270_t11, _r270_t12, _r270_tag13;
        var _r270_t0 = r270_xn$Capture$2Lrc8;
        var r270_xn$createAndSaveGlyphImpl$2Lrc3c = _r270_t0['$createAndSaveGlyphImpl$'];
        var r270_xn$NamedParameterPair$2Lrc9b = _r270_t0['$NamedParameterPair$'];
        var r270_xn$assignUnicodeImpl$2Lrc8b = _r270_t0['$assignUnicodeImpl$'];
        var r270_xn$execState$2Lrc0b = _r270_t0['$execState$'];
        var r270_MarkSet = _r270_t0.MarkSet;
        var r270_AS_BASE = _r270_t0.AS_BASE;
        var r270_ALSO_METRICS = _r270_t0.ALSO_METRICS;
        var r270_DivFrame = _r270_t0.DivFrame;
        var _r270_t1 = r270_xn$Capture$2Lrc8.Metrics;
        var r270_SB = _r270_t1.SB;
        var r270_CAP = _r270_t1.CAP;
        var r270_XH = _r270_t1.XH;
        var r270_Descender = _r270_t1.Descender;
        var r270_Stroke = _r270_t1.Stroke;
        var r270_SLAB = _r270_t1.SLAB;
        var r270_RightSB = _r270_t1.RightSB;
        var r270_Middle = _r270_t1.Middle;
        var _r270_t2 = r270_xn$Capture$2Lrc8.SpiroFns;
        var _r270_t3 = r270_xn$Capture$2Lrc8.BooleFns;
        var _r270_t4 = r270_xn$Capture$2Lrc8.CommonShapes.resolve();
        var r270_HBar = _r270_t4.HBar;
        var r270_VBar = _r270_t4.VBar;
        var _r270_t5 = r270_xn$Capture$2Lrc8['Common-Derivatives'].resolve();
        var r270_xn$selectvariant$7Hrq = _r270_t5['select-variant'];
        var r270_xn$referglyph$1aao = _r270_t5['refer-glyph'];
        var _r270_t6 = r270_xn$Capture$2Lrc8['Letter-Shared-Shapes'].resolve();
        var r270_SerifFrame = _r270_t6.SerifFrame;
        var r270_CyrDzheShape = function (r274_top) {
            var _r274_t0, _r274_t1;
            return function () {
                var _r276_leti0, _r276_t2, _r276_t3, _r276_t4, _r276_tag5;
                var _r276_t1 = this;
                var r276_currentGlyph = _r276_t1;
                r276_currentGlyph.include(r270_VBar.l(r270_SB, 0, r274_top));
                r276_currentGlyph.include(r270_HBar.b(r270_SB, r270_RightSB, 0));
                r276_currentGlyph.include(r270_VBar.r(r270_RightSB, 0, r274_top));
                r276_currentGlyph.include(r270_VBar.m(r270_Middle, r270_Descender, r270_Stroke));
                if (r270_SLAB) {
                    _r276_t3 = r270_SerifFrame.fromDf(r270_DivFrame(1), r274_top, 0);
                    (function (_r276_leti0) {
                        var r281_sf = _r276_leti0;
                        return r276_currentGlyph.include(function () {
                            var _r284_t1;
                            var _r284_t0 = this;
                            var r284_currentGlyph = _r284_t0;
                            r284_currentGlyph.include(r281_sf.lt.full, true, true);
                            r284_currentGlyph.include(r281_sf.rt.full);
                            r284_currentGlyph.include(r281_sf.lb.outer);
                            r284_currentGlyph.include(r281_sf.rb.outer);
                            return void 0;
                        });
                    }(_r276_t3));
                }
                return void 0;
            };
        };
        r270_xn$createAndSaveGlyphImpl$2Lrc3c('cyrl/Dzhe', 1039, function () {
            var _r291_t1;
            var _r291_t0 = this;
            var r291_currentGlyph = _r291_t0;
            r291_currentGlyph.include(r270_MarkSet.capDesc());
            r291_currentGlyph.include(r270_CyrDzheShape(r270_CAP));
            return void 0;
        });
        r270_xn$createAndSaveGlyphImpl$2Lrc3c('cyrl/dzhe.upright', null, function () {
            var _r296_t1;
            var _r296_t0 = this;
            var r296_currentGlyph = _r296_t0;
            r296_currentGlyph.include(r270_MarkSet.p());
            r296_currentGlyph.include(r270_CyrDzheShape(r270_XH));
            return void 0;
        });
        var r270_ItalicVariants = [
            'toothedSerifless',
            'toothedMotionSerifed',
            'toothedBottomRightSerifed',
            'toothedSerifed',
            'tailedSerifless',
            'tailedMotionSerifed',
            'tailedSerifed'
        ];
        var _r270_t7 = r270_ItalicVariants;
        var _r270_t8 = _r270_t7.length;
        var _r270_t9 = 0;
        while (_r270_t9 < _r270_t8) {
            r270_suffix = _r270_t7[_r270_t9];
            (function () {
                return r270_xn$createAndSaveGlyphImpl$2Lrc3c('cyrl/dzhe.italic.' + r270_suffix, null, function () {
                    var _r304_t1;
                    var _r304_t0 = this;
                    var r304_currentGlyph = _r304_t0;
                    r304_currentGlyph.include(r270_xn$referglyph$1aao('u.' + r270_suffix), r270_AS_BASE, r270_ALSO_METRICS);
                    r304_currentGlyph.include(r270_xn$referglyph$1aao('descenderBarBelow'));
                    return void 0;
                });
            }());
            _r270_t9 = _r270_t9 + 1;
        }
        return r270_xn$selectvariant$7Hrq('cyrl/dzhe.italic');
    });
    return void 0;
});
