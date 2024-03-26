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
    r269_xn$Capture_Ext$2Lrc2b['$defineGlyphBlockImpl$'](r269_xn$Capture_Ext$2Lrc2b, 'Letter-Cyrillic-Tse', function (r270_xn$Capture$2Lrc8, r270_xn$ExportCapture$2Lrc4b) {
        var r270_suffix, r270_doST, r270_doSB, _r270_t9, _r270_t13, _r270_t14, _r270_t15, _r270_tag16, _r270_t17, _r270_tag18;
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
        var r270_HVContrast = _r270_t1.HVContrast;
        var r270_Rightward = _r270_t1.Rightward;
        var r270_OX = _r270_t1.OX;
        var r270_VJut = _r270_t1.VJut;
        var r270_SLAB = _r270_t1.SLAB;
        var r270_RightSB = _r270_t1.RightSB;
        var r270_SideJut = _r270_t1.SideJut;
        var r270_AdviceStroke = _r270_t1.AdviceStroke;
        var _r270_t2 = r270_xn$Capture$2Lrc8.SpiroFns;
        var r270_flat = _r270_t2.flat;
        var r270_curl = _r270_t2.curl;
        var r270_widths = _r270_t2.widths;
        var r270_heading = _r270_t2.heading;
        var r270_dispiro = _r270_t2.dispiro;
        var _r270_t3 = r270_xn$Capture$2Lrc8.BooleFns;
        var _r270_t4 = r270_xn$Capture$2Lrc8.CommonShapes.resolve();
        var r270_VSerif = _r270_t4.VSerif;
        var r270_HBar = _r270_t4.HBar;
        var r270_VBar = _r270_t4.VBar;
        var _r270_t5 = r270_xn$Capture$2Lrc8['Common-Derivatives'].resolve();
        var r270_xn$selectvariant$7Hrq = _r270_t5['select-variant'];
        var r270_xn$referglyph$1aao = _r270_t5['refer-glyph'];
        var r270_alias = _r270_t5.alias;
        var _r270_t6 = r270_xn$Capture$2Lrc8['Letter-Shared-Shapes'].resolve();
        var r270_SerifFrame = _r270_t6.SerifFrame;
        var r270_CyrDescender = _r270_t6.CyrDescender;
        var r270_CyrTseShape = function (r274_top, r274_fRev) {
            var _r274_t0, _r274_t1;
            return function () {
                var _r276_leti0, _r276_t2, _r276_t3, _r276_t4, _r276_tag5;
                var _r276_t1 = this;
                var r276_currentGlyph = _r276_t1;
                r276_currentGlyph.include(r270_VBar.l(r270_SB, 0, r274_top));
                r276_currentGlyph.include(r270_HBar.b(r270_SB, r270_RightSB, 0));
                r276_currentGlyph.include(r270_VBar.r(r270_RightSB, 0, r274_top));
                r276_currentGlyph.include(r274_fRev ? r270_CyrDescender.lSideJut(r270_SB, 0) : r270_CyrDescender.rSideJut(r270_RightSB, 0));
                if (r270_SLAB) {
                    _r276_t3 = r270_SerifFrame.fromDf(r270_DivFrame(1), r274_top, 0);
                    (function (_r276_leti0) {
                        var r281_sf = _r276_leti0;
                        r276_currentGlyph.include(r281_sf.lt.full);
                        r276_currentGlyph.include(r281_sf.rt.full);
                        r276_currentGlyph.include(r281_sf.lb.outer);
                        return r276_currentGlyph.include(r281_sf.rb.outer);
                    }(_r276_t3));
                }
                return void 0;
            };
        };
        r270_xn$createAndSaveGlyphImpl$2Lrc3c('cyrl/Tse', 1062, function () {
            var _r288_t1;
            var _r288_t0 = this;
            var r288_currentGlyph = _r288_t0;
            r288_currentGlyph.include(r270_MarkSet.capital());
            r288_currentGlyph.include(r270_CyrTseShape(r270_CAP, false));
            return void 0;
        });
        r270_xn$createAndSaveGlyphImpl$2Lrc3c('cyrl/tse.upright', null, function () {
            var _r293_t1;
            var _r293_t0 = this;
            var r293_currentGlyph = _r293_t0;
            r293_currentGlyph.include(r270_MarkSet.e());
            r293_currentGlyph.include(r270_CyrTseShape(r270_XH, false));
            return void 0;
        });
        r270_xn$createAndSaveGlyphImpl$2Lrc3c('cyrl/TseRev', 42592, function () {
            var _r298_t1;
            var _r298_t0 = this;
            var r298_currentGlyph = _r298_t0;
            r298_currentGlyph.include(r270_MarkSet.capital());
            r298_currentGlyph.include(r270_CyrTseShape(r270_CAP, true));
            return void 0;
        });
        r270_xn$createAndSaveGlyphImpl$2Lrc3c('cyrl/tseRev', 42593, function () {
            var _r303_t1;
            var _r303_t0 = this;
            var r303_currentGlyph = _r303_t0;
            r303_currentGlyph.include(r270_MarkSet.e());
            r303_currentGlyph.include(r270_CyrTseShape(r270_XH, true));
            return void 0;
        });
        var r270_TeTseConfig = {
            'serifless': [
                false,
                false
            ],
            'motionSerifed': [
                true,
                false
            ],
            'serifed': [
                true,
                true
            ]
        };
        var r270_CyrTeTseShape = function (r306_top, r306_slabTop, r306_slabBot) {
            var _r306_t0, _r306_t1;
            return function () {
                var r308_swVJut, _r308_t1;
                var _r308_t0 = this;
                var r308_currentGlyph = _r308_t0;
                var r308_sw = r270_AdviceStroke(2.75);
                var r308_left = r1_mix(r270_SB, r270_RightSB, 0.2) - 0.25 * r308_sw * r270_HVContrast + r270_OX;
                var r308_right = r270_RightSB - r270_OX;
                var r308_xTopBarLeft = r270_SB - r270_SideJut;
                var r308_xTopBarRight = r1_mix(r308_xTopBarLeft, r308_left + 0.5 * r308_sw * r270_HVContrast, 2);
                r308_currentGlyph.include(r270_VBar.l(r308_left, 0, r306_top, r308_sw));
                r308_currentGlyph.include(r270_HBar.b(r308_left, r308_right, 0, r308_sw));
                r308_currentGlyph.include(r270_VBar.r(r308_right, 0, r306_top, r308_sw));
                r308_currentGlyph.include(r270_dispiro(r270_widths.rhs(r308_sw), r270_flat(r308_xTopBarLeft, r306_top, r270_SLAB ? r270_heading(r270_Rightward) : null), r270_curl(r308_xTopBarRight, r306_top, r270_SLAB ? r270_heading(r270_Rightward) : null)));
                var r308_sf = r270_SerifFrame(r306_top, 0, r308_left, r308_right, new r270_xn$NamedParameterPair$2Lrc9b('swRef', r308_sw));
                r308_currentGlyph.include(r270_CyrDescender.rSideJut(r308_right, 0, new r270_xn$NamedParameterPair$2Lrc9b('sideJut', r308_sf.sideJut)));
                if (r306_slabTop) {
                    r308_currentGlyph.include(r308_sf.rt.outer);
                    r308_swVJut = Math.min(r270_AdviceStroke(4.5), 0.625 * (r308_left - r308_xTopBarLeft));
                    r308_currentGlyph.include(r270_VSerif.dl(r308_xTopBarLeft, r306_top, r270_VJut, r308_swVJut));
                    r308_currentGlyph.include(r270_VSerif.dr(r308_xTopBarRight, r306_top, r270_VJut, r308_swVJut));
                }
                if (r306_slabBot) {
                    r308_currentGlyph.include(r308_sf.lb.outer);
                    r308_currentGlyph.include(r308_sf.rb.outer);
                }
                return void 0;
            };
        };
        var _r270_t7 = Object.entries(r270_TeTseConfig)[Symbol.iterator]();
        var _r270_t8 = void 0;
        while (!(_r270_t8 = _r270_t7.next()).done) {
            _r270_t9 = _r270_t8.value;
            r270_suffix = _r270_t9[0];
            r270_doST = _r270_t9[1][0];
            r270_doSB = _r270_t9[1][1];
            _r270_t9[1];
            (function () {
                r270_xn$createAndSaveGlyphImpl$2Lrc3c('cyrl/TeTse.' + r270_suffix, null, function () {
                    var _r326_t1;
                    var _r326_t0 = this;
                    var r326_currentGlyph = _r326_t0;
                    r326_currentGlyph.include(r270_MarkSet.capital());
                    r326_currentGlyph.include(r270_CyrTeTseShape(r270_CAP, r270_doST, r270_doSB));
                    return void 0;
                });
                return r270_xn$createAndSaveGlyphImpl$2Lrc3c('cyrl/tetse.upright.' + r270_suffix, null, function () {
                    var _r331_t1;
                    var _r331_t0 = this;
                    var r331_currentGlyph = _r331_t0;
                    r331_currentGlyph.include(r270_MarkSet.e());
                    r331_currentGlyph.include(r270_CyrTeTseShape(r270_XH, r270_doST, r270_doSB));
                    return void 0;
                });
            }());
        }
        r270_xn$selectvariant$7Hrq('cyrl/TeTse', 1204, new r270_xn$NamedParameterPair$2Lrc9b('follow', 'T'));
        r270_xn$selectvariant$7Hrq('cyrl/tetse.upright', new r270_xn$NamedParameterPair$2Lrc9b('follow', 'T'));
        var r270_ItalicVariants = [
            'toothedSerifless',
            'toothedMotionSerifed',
            'toothedBottomRightSerifed',
            'toothedSerifed',
            'tailedSerifless',
            'tailedMotionSerifed',
            'tailedSerifed'
        ];
        var _r270_t10 = r270_ItalicVariants;
        var _r270_t11 = _r270_t10.length;
        var _r270_t12 = 0;
        while (_r270_t12 < _r270_t11) {
            r270_suffix = _r270_t10[_r270_t12];
            (function () {
                r270_xn$createAndSaveGlyphImpl$2Lrc3c('cyrl/tse.italic.' + r270_suffix, null, function () {
                    var _r341_t1;
                    var _r341_t0 = this;
                    var r341_currentGlyph = _r341_t0;
                    r341_currentGlyph.include(r270_xn$referglyph$1aao('u.' + r270_suffix), r270_AS_BASE);
                    r341_currentGlyph.ejectTagged('serifRB');
                    r341_currentGlyph.include(r270_CyrDescender.rSideJut(r270_RightSB, 0));
                    return void 0;
                });
                return r270_xn$createAndSaveGlyphImpl$2Lrc3c('cyrl/tetse.italic.' + r270_suffix, null, function () {
                    var _r347_t1;
                    var _r347_t0 = this;
                    var r347_currentGlyph = _r347_t0;
                    r347_currentGlyph.include(r270_xn$referglyph$1aao('u.' + r270_suffix), r270_AS_BASE, r270_ALSO_METRICS);
                    r347_currentGlyph.include(r270_xn$referglyph$1aao('tildeAbove'));
                    r347_currentGlyph.ejectTagged('serifRB');
                    r347_currentGlyph.include(r270_CyrDescender.rSideJut(r270_RightSB, 0));
                    return void 0;
                });
            }());
            _r270_t12 = _r270_t12 + 1;
        }
        r270_xn$selectvariant$7Hrq('cyrl/tse.italic');
        r270_xn$selectvariant$7Hrq('cyrl/tetse.italic', new r270_xn$NamedParameterPair$2Lrc9b('follow', 'cyrl/tse.italic'));
        return r270_alias('cyrl/tse.BGR', null, 'cyrl/tse.italic');
    });
    return void 0;
});
