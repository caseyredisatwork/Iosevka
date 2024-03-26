'use strict';
import * as _s0_t0 from 'typo-geom';
import * as _s0_t1 from '../../support/utils.mjs';
import * as _s0_t2 from '../../meta/aesthetics.mjs';
import * as _s0_t3 from '../../support/gr.mjs';
import * as _s0_t4 from '../../support/geometry/box.mjs';
var _s0_t5;
export {
    _s0_t5 as apply
};
var r1_apply, _r1_t0, _r1_t1, _r1_t2, _r1_t3, _r1_t4, _r1_t5, _r1_t6, _r1_t7;
var _r1_t8 = _s0_t0;
var r1_Arcs = _r1_t8.Arcs;
var r1_Quadify = _r1_t8.Quadify;
var r1_ShapeConv = _r1_t8.ShapeConv;
var _r1_t9 = _s0_t1;
var r1_mix = _r1_t9.mix;
var r1_linreg = _r1_t9.linreg;
var r1_clamp = _r1_t9.clamp;
var r1_fallback = _r1_t9.fallback;
var _r1_t10 = _s0_t2;
var r1_DesignParameters = _r1_t10.DesignParameters;
var _r1_t11 = _s0_t3;
var r1_TieMark = _r1_t11.TieMark;
var r1_TieGlyph = _r1_t11.TieGlyph;
var _r1_t12 = _s0_t4;
var r1_Box = _r1_t12.Box;
var r1_xn$GlyphBlocks$2Lrc2b = [];
_s0_t5 = r1_apply = function () {
    var r269_block, _r269_t4, _r269_t6;
    var _r269_t3 = this;
    var _r269_t0 = r1_xn$GlyphBlocks$2Lrc2b;
    var _r269_t1 = _r269_t0.length;
    var _r269_t2 = 0;
    var _r269_t5 = _r269_t2 < _r269_t1;
    while (_r269_t5) {
        _r269_t6 = (r269_block = _r269_t0[_r269_t2], r269_block(_r269_t3), _r269_t2 = _r269_t2 + 1);
        _r269_t5 = _r269_t2 < _r269_t1;
    }
    return _r269_t6;
};
r1_xn$GlyphBlocks$2Lrc2b.push(function (r273_xn$Capture_Ext$2Lrc2b) {
    var _r273_t0, _r273_t1;
    r273_xn$Capture_Ext$2Lrc2b['$defineGlyphBlockImpl$'](r273_xn$Capture_Ext$2Lrc2b, 'Mark-Composite', function (r274_xn$Capture$2Lrc8, r274_xn$ExportCapture$2Lrc4b) {
        var _r274_t11, _r274_t12;
        var _r274_t0 = r274_xn$Capture$2Lrc8;
        var r274_xn$createAndSaveGlyphImpl$2Lrc3c = _r274_t0['$createAndSaveGlyphImpl$'];
        var r274_xn$NamedParameterPair$2Lrc9b = _r274_t0['$NamedParameterPair$'];
        var r274_xn$assignUnicodeImpl$2Lrc8b = _r274_t0['$assignUnicodeImpl$'];
        var r274_xn$execState$2Lrc0b = _r274_t0['$execState$'];
        var r274_AS_BASE = _r274_t0.AS_BASE;
        var _r274_t1 = r274_xn$Capture$2Lrc8.Metrics;
        var r274_Width = _r274_t1.Width;
        var r274_XH = _r274_t1.XH;
        var r274_Translate = _r274_t1.Translate;
        var r274_Upward = _r274_t1.Upward;
        var r274_Downward = _r274_t1.Downward;
        var r274_Rightward = _r274_t1.Rightward;
        var r274_DotRadius = _r274_t1.DotRadius;
        var r274_AdviceStroke = _r274_t1.AdviceStroke;
        var _r274_t2 = r274_xn$Capture$2Lrc8.SpiroFns;
        var r274_g4 = _r274_t2.g4;
        var r274_g2 = _r274_t2.g2;
        var r274_end = _r274_t2.end;
        var r274_widths = _r274_t2.widths;
        var r274_heading = _r274_t2.heading;
        var r274_alsoThru = _r274_t2.alsoThru;
        var r274_archv = _r274_t2.archv;
        var r274_arcvh = _r274_t2.arcvh;
        var r274_dispiro = _r274_t2.dispiro;
        var _r274_t3 = r274_xn$Capture$2Lrc8.BooleFns;
        var _r274_t4 = r274_xn$Capture$2Lrc8.CommonShapes.resolve();
        var _r274_t5 = r274_xn$Capture$2Lrc8['Common-Derivatives'].resolve();
        var r274_xn$referglyph$1aao = _r274_t5['refer-glyph'];
        var r274_xn$queryglyph$1aao = _r274_t5['query-glyph'];
        var r274_xn$deriveglyphs$7Hrq = _r274_t5['derive-glyphs'];
        var r274_xn$derivemultipartglyphs$7Hrq65 = _r274_t5['derive-multi-part-glyphs'];
        var _r274_t6 = r274_xn$Capture$2Lrc8['Mark-Shared-Metrics'].resolve();
        var r274_markExtend = _r274_t6.markExtend;
        var r274_markHalfStroke = _r274_t6.markHalfStroke;
        var r274_markStress = _r274_t6.markStress;
        var r274_markFine = _r274_t6.markFine;
        var _r274_t7 = r274_xn$Capture$2Lrc8['Mark-Shared-Metrics'].resolve();
        var r274_markMiddle = _r274_t7.markMiddle;
        var r274_markDotsRadius = _r274_t7.markDotsRadius;
        var _r274_t8 = r274_xn$Capture$2Lrc8['Mark-Above'].resolve();
        var r274_aboveMarkTop = _r274_t8.aboveMarkTop;
        var r274_aboveMarkBot = _r274_t8.aboveMarkBot;
        var r274_aboveMarkMid = _r274_t8.aboveMarkMid;
        var r274_aboveMarkStack = _r274_t8.aboveMarkStack;
        var _r274_t9 = r274_xn$Capture$2Lrc8['Mark-Above'].resolve();
        var r274_commaOvershoot = _r274_t9.commaOvershoot;
        var r274_commaAboveRadius = _r274_t9.commaAboveRadius;
        var _r274_t10 = r274_xn$Capture$2Lrc8['Mark-Below'].resolve();
        var r274_belowMarkBot = _r274_t10.belowMarkBot;
        var r274_belowMarkTop = _r274_t10.belowMarkTop;
        var r274_belowMarkMid = _r274_t10.belowMarkMid;
        var r274_GreekLRDoubleMark = function (r282_id, r282_unicode, r282_gnLeft, r282_gnRight) {
            var _r282_t0, _r282_t1;
            var r282_k = -r274_Width * 0.15;
            r274_xn$derivemultipartglyphs$7Hrq65(r282_id, null, [
                r282_gnLeft,
                r282_gnRight
            ], function (r283_srcs, r283_gr) {
                var _r283_t0, _r283_t1;
                return function () {
                    var _r285_t2;
                    var _r285_t1 = this;
                    var r285_currentGlyph = _r285_t1;
                    var _r285_t0 = r283_srcs;
                    var r285_leftPart = _r285_t0[0];
                    var r285_rightPart = _r285_t0[1];
                    r285_currentGlyph.setWidth(0);
                    r285_currentGlyph.include(r274_xn$referglyph$1aao(r285_leftPart));
                    r285_currentGlyph.include(r274_Translate(2 * r282_k, 0));
                    r285_currentGlyph.include(r274_xn$referglyph$1aao(r285_rightPart));
                    r285_currentGlyph.include(r274_Translate(0 - r282_k, 0));
                    r285_currentGlyph.setMarkAnchor('above', r274_markMiddle, r274_XH, r274_markMiddle, r274_aboveMarkStack);
                    r285_currentGlyph.setBaseAnchor('aboveBraceL', r274_markMiddle - 0.75 * r274_markExtend, r274_aboveMarkMid);
                    r285_currentGlyph.setBaseAnchor('aboveBraceR', r274_markMiddle + 0.75 * r274_markExtend, r274_aboveMarkMid);
                    return void 0;
                };
            });
            r274_xn$deriveglyphs$7Hrq('' + r282_id + 'GrekUpperTonos', null, r282_id, function (r294_src, r294_gr) {
                var _r294_t0, _r294_t1;
                return function () {
                    var _r296_t1;
                    var _r296_t0 = this;
                    var r296_currentGlyph = _r296_t0;
                    r296_currentGlyph.setWidth(0);
                    r296_currentGlyph.include(r274_xn$referglyph$1aao(r294_src));
                    r296_currentGlyph.setMarkAnchor('grekUpperTonos', r274_markMiddle - r282_k, r274_XH);
                    r296_currentGlyph.setBaseAnchor('aboveBraceL', r274_markMiddle - 0.75 * r274_markExtend, r274_aboveMarkMid);
                    r296_currentGlyph.setBaseAnchor('aboveBraceR', r274_markMiddle + 0.75 * r274_markExtend, r274_aboveMarkMid);
                    return void 0;
                };
            });
            return r282_unicode ? r274_xn$deriveglyphs$7Hrq('spaced' + r282_id, r282_unicode, r282_id, function (r302_src, r302_gr) {
                var _r302_t0, _r302_t1;
                return function () {
                    var _r304_t1;
                    var _r304_t0 = this;
                    var r304_currentGlyph = _r304_t0;
                    r304_currentGlyph.include(r274_xn$referglyph$1aao('markBaseSpace'), r274_AS_BASE);
                    r304_currentGlyph.setWidth(r274_xn$queryglyph$1aao('markBaseSpace').advanceWidth);
                    r304_currentGlyph.include(r274_xn$referglyph$1aao(r302_src));
                    return void 0;
                };
            }) : void 0;
        };
        r274_GreekLRDoubleMark('psiliVaria', 8141, 'commaAbove', 'variaAbove');
        r274_GreekLRDoubleMark('psiliOxia', 8142, 'commaAbove', 'oxiaAbove');
        r274_GreekLRDoubleMark('dasiaVaria', 8157, 'revCommaAbove', 'variaAbove');
        r274_GreekLRDoubleMark('dasiaOxia', 8158, 'revCommaAbove', 'oxiaAbove');
        var r274_yc = r274_aboveMarkTop - r274_commaAboveRadius + r274_DotRadius * 0.3 + r274_commaOvershoot;
        r274_xn$deriveglyphs$7Hrq('psiliPerispomeni', null, 'commaAbove', function (r308_src, r308_gr) {
            var _r308_t0, _r308_t1;
            return function () {
                var _r310_t1;
                var _r310_t0 = this;
                var r310_currentGlyph = _r310_t0;
                r310_currentGlyph.setWidth(0);
                r310_currentGlyph.include(r274_xn$referglyph$1aao(r308_src));
                var r310_radius = Math.max(r274_markExtend - r274_commaAboveRadius, r274_commaAboveRadius * 1.25);
                r310_currentGlyph.include(r274_dispiro(r274_widths.lhs(Math.min(r274_markHalfStroke * 2, r274_AdviceStroke(6.5) * 1.25)), r274_g4.up.start(r274_markMiddle - r310_radius, r274_yc, r274_heading(r274_Upward)), r274_arcvh(), r274_g4.right.mid(r274_markMiddle, r274_yc + r310_radius), r274_archv(), r274_g4.down.end(r274_markMiddle + r310_radius, r274_yc, r274_heading(r274_Downward))));
                r310_currentGlyph.setMarkAnchor('above', r274_markMiddle, r274_XH, r274_markMiddle, r274_aboveMarkStack + r274_markHalfStroke * 2);
                r310_currentGlyph.setBaseAnchor('aboveBraceL', r274_markMiddle - 0.5 * r274_markExtend, r274_aboveMarkMid + r274_markHalfStroke);
                r310_currentGlyph.setBaseAnchor('aboveBraceR', r274_markMiddle + 0.5 * r274_markExtend, r274_aboveMarkMid + r274_markHalfStroke);
                return void 0;
            };
        });
        r274_xn$deriveglyphs$7Hrq('psiliPerispomeniGrekUpperTonos', null, 'psiliPerispomeni', function (r317_src, r317_gr) {
            var _r317_t0, _r317_t1;
            return function () {
                var _r319_t1;
                var _r319_t0 = this;
                var r319_currentGlyph = _r319_t0;
                r319_currentGlyph.setWidth(0);
                r319_currentGlyph.include(r274_xn$referglyph$1aao(r317_src));
                r319_currentGlyph.setMarkAnchor('grekUpperTonos', r274_markMiddle, r274_XH);
                r319_currentGlyph.setBaseAnchor('aboveBraceL', r274_markMiddle - 0.5 * r274_markExtend, r274_aboveMarkMid + r274_markHalfStroke);
                r319_currentGlyph.setBaseAnchor('aboveBraceR', r274_markMiddle + 0.5 * r274_markExtend, r274_aboveMarkMid + r274_markHalfStroke);
                return void 0;
            };
        });
        r274_xn$deriveglyphs$7Hrq('spaced_psiliPerispomeni', 8143, 'psiliPerispomeni', function (r325_src, r325_gr) {
            var _r325_t0, _r325_t1;
            return function () {
                var _r327_t1;
                var _r327_t0 = this;
                var r327_currentGlyph = _r327_t0;
                r327_currentGlyph.include(r274_xn$referglyph$1aao('markBaseSpace'), r274_AS_BASE);
                r327_currentGlyph.setWidth(r274_xn$queryglyph$1aao('markBaseSpace').advanceWidth);
                r327_currentGlyph.include(r274_xn$referglyph$1aao(r325_src));
                return void 0;
            };
        });
        r274_xn$deriveglyphs$7Hrq('dasiaPerispomeni', null, 'revCommaAbove', function (r331_src, r331_gr) {
            var _r331_t0, _r331_t1;
            return function () {
                var _r333_t1;
                var _r333_t0 = this;
                var r333_currentGlyph = _r333_t0;
                r333_currentGlyph.setWidth(0);
                r333_currentGlyph.include(r274_xn$referglyph$1aao(r331_src));
                var r333_radius = Math.max(r274_markExtend - r274_commaAboveRadius, r274_commaAboveRadius * 1.25);
                r333_currentGlyph.include(r274_dispiro(r274_widths.lhs(Math.min(r274_markHalfStroke * 2, r274_AdviceStroke(6.5) * 1.25)), r274_g4.up.start(r274_markMiddle - r333_radius, r274_yc, r274_heading(r274_Upward)), r274_arcvh(), r274_g4.right.mid(r274_markMiddle, r274_yc + r333_radius), r274_archv(), r274_g4.down.end(r274_markMiddle + r333_radius, r274_yc, r274_heading(r274_Downward))));
                r333_currentGlyph.setMarkAnchor('above', r274_markMiddle, r274_XH, r274_markMiddle, r274_aboveMarkStack + r274_markHalfStroke * 2);
                r333_currentGlyph.setBaseAnchor('aboveBraceL', r274_markMiddle - 0.5 * r274_markExtend, r274_aboveMarkMid + r274_markHalfStroke);
                r333_currentGlyph.setBaseAnchor('aboveBraceR', r274_markMiddle + 0.5 * r274_markExtend, r274_aboveMarkMid + r274_markHalfStroke);
                return void 0;
            };
        });
        r274_xn$deriveglyphs$7Hrq('dasiaPerispomeniGrekUpperTonos', null, 'dasiaPerispomeni', function (r340_src, r340_gr) {
            var _r340_t0, _r340_t1;
            return function () {
                var _r342_t1;
                var _r342_t0 = this;
                var r342_currentGlyph = _r342_t0;
                r342_currentGlyph.setWidth(0);
                r342_currentGlyph.include(r274_xn$referglyph$1aao(r340_src));
                r342_currentGlyph.setMarkAnchor('grekUpperTonos', r274_markMiddle, r274_XH);
                r342_currentGlyph.setBaseAnchor('aboveBraceL', r274_markMiddle - 0.5 * r274_markExtend, r274_aboveMarkMid + r274_markHalfStroke);
                r342_currentGlyph.setBaseAnchor('aboveBraceR', r274_markMiddle + 0.5 * r274_markExtend, r274_aboveMarkMid + r274_markHalfStroke);
                return void 0;
            };
        });
        r274_xn$deriveglyphs$7Hrq('spaced_dasiaPerispomeni', 8159, 'dasiaPerispomeni', function (r348_src, r348_gr) {
            var _r348_t0, _r348_t1;
            return function () {
                var _r350_t1;
                var _r350_t0 = this;
                var r350_currentGlyph = _r350_t0;
                r350_currentGlyph.include(r274_xn$referglyph$1aao('markBaseSpace'), r274_AS_BASE);
                r350_currentGlyph.setWidth(r274_xn$queryglyph$1aao('markBaseSpace').advanceWidth);
                r350_currentGlyph.include(r274_xn$referglyph$1aao(r348_src));
                return void 0;
            };
        });
        return r274_xn$deriveglyphs$7Hrq('cyrlPsiliPokrytieAbove', null, 'commaAbove', function (r354_src, r354_gr) {
            var _r354_t0, _r354_t1;
            return function () {
                var _r356_t1;
                var _r356_t0 = this;
                var r356_currentGlyph = _r356_t0;
                r356_currentGlyph.setWidth(0);
                r356_currentGlyph.include(r274_xn$referglyph$1aao(r354_src));
                var r356_radius = Math.max(r274_markExtend - r274_commaAboveRadius, r274_commaAboveRadius * 1.25);
                var r356_sw = Math.min(r274_markHalfStroke * 2, r274_AdviceStroke(6.5) * 1.25);
                r356_currentGlyph.include(r274_dispiro(r274_widths.lhs(r356_sw), r274_g4.up.start(r274_markMiddle - r356_radius, r274_yc, r274_heading(r274_Upward)), r274_arcvh(), r274_g2.right.mid(r274_markMiddle, r274_yc + r356_radius), r274_alsoThru.g2(0.5, 0.5), r274_g2.right.end(r274_markMiddle + Math.max(r356_radius, r274_markExtend * 2), r274_yc, r274_heading(r274_Rightward))));
                r356_currentGlyph.setMarkAnchor('above', r274_markMiddle, r274_XH, r274_markMiddle, r274_aboveMarkStack + r274_markHalfStroke * 2);
                r356_currentGlyph.setBaseAnchor('aboveBraceL', r274_markMiddle - r274_markExtend, r274_aboveMarkMid + r274_markHalfStroke);
                r356_currentGlyph.setBaseAnchor('aboveBraceR', r274_markMiddle + r274_markExtend, r274_aboveMarkMid + r274_markHalfStroke);
                return void 0;
            };
        });
    });
    return void 0;
});
