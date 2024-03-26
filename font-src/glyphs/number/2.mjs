'use strict';
import * as _s0_t0 from '../../support/utils.mjs';
import * as _s0_t1 from '../../support/gr.mjs';
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
var r1_AnyCv = _r1_t9.AnyCv;
var r1_getGrMesh = _r1_t9.getGrMesh;
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
    r270_xn$Capture_Ext$2Lrc2b['$defineGlyphBlockImpl$'](r270_xn$Capture_Ext$2Lrc2b, 'Digits-Two', function (r271_xn$Capture$2Lrc8, r271_xn$ExportCapture$2Lrc4b) {
        var _r271_t8, _r271_t9;
        var _r271_t0 = r271_xn$Capture$2Lrc8;
        var r271_xn$createAndSaveGlyphImpl$2Lrc3c = _r271_t0['$createAndSaveGlyphImpl$'];
        var r271_xn$NamedParameterPair$2Lrc9b = _r271_t0['$NamedParameterPair$'];
        var r271_xn$assignUnicodeImpl$2Lrc8b = _r271_t0['$assignUnicodeImpl$'];
        var r271_xn$execState$2Lrc0b = _r271_t0['$execState$'];
        var r271_MarkSet = _r271_t0.MarkSet;
        var _r271_t1 = r271_xn$Capture$2Lrc8.Metrics;
        var r271_Width = _r271_t1.Width;
        var r271_SB = _r271_t1.SB;
        var r271_CAP = _r271_t1.CAP;
        var r271_TanSlope = _r271_t1.TanSlope;
        var r271_HVContrast = _r271_t1.HVContrast;
        var r271_Downward = _r271_t1.Downward;
        var r271_O = _r271_t1.O;
        var r271_OX = _r271_t1.OX;
        var r271_Hook = _r271_t1.Hook;
        var r271_Stroke = _r271_t1.Stroke;
        var r271_VJut = _r271_t1.VJut;
        var r271_SLAB = _r271_t1.SLAB;
        var r271_HalfStroke = _r271_t1.HalfStroke;
        var r271_RightSB = _r271_t1.RightSB;
        var r271_Middle = _r271_t1.Middle;
        var r271_AdviceGlottalStopArchDepth = _r271_t1.AdviceGlottalStopArchDepth;
        var r271_StrokeWidthBlend = _r271_t1.StrokeWidthBlend;
        var _r271_t2 = r271_xn$Capture$2Lrc8.SpiroFns;
        var r271_g4 = _r271_t2.g4;
        var r271_g2 = _r271_t2.g2;
        var r271_flat = _r271_t2.flat;
        var r271_curl = _r271_t2.curl;
        var r271_widths = _r271_t2.widths;
        var r271_heading = _r271_t2.heading;
        var r271_alsoThru = _r271_t2.alsoThru;
        var r271_dispiro = _r271_t2.dispiro;
        var r271_xn$spirooutline$1aao = _r271_t2['spiro-outline'];
        var _r271_t3 = r271_xn$Capture$2Lrc8.BooleFns;
        var r271_intersection = _r271_t3.intersection;
        var _r271_t4 = r271_xn$Capture$2Lrc8.CommonShapes.resolve();
        var r271_VSerif = _r271_t4.VSerif;
        var r271_HBar = _r271_t4.HBar;
        var r271_VBar = _r271_t4.VBar;
        var r271_hookstart = _r271_t4.hookstart;
        var _r271_t5 = r271_xn$Capture$2Lrc8['Common-Derivatives'].resolve();
        var r271_xn$selectvariant$7Hrq = _r271_t5['select-variant'];
        var r271_turned = _r271_t5.turned;
        var _r271_t6 = r271_xn$Capture$2Lrc8['Digits-Shared'].resolve();
        var r271_OnumHeight = _r271_t6.OnumHeight;
        var r271_OnumMarks = _r271_t6.OnumMarks;
        var r271_CodeLnum = _r271_t6.CodeLnum;
        var r271_CodeOnum = _r271_t6.CodeOnum;
        var r271_TwoStraightNeckArcT = function (r275_sink, r275_offset, r275_sw, r275_top) {
            var _r275_t0, _r275_t1;
            var r275_archDepth = r271_AdviceGlottalStopArchDepth(r275_top, 1) * 0.95;
            var r275_xLeft = r271_SB + r275_offset;
            var r275_xRight = r271_RightSB - r275_offset - r271_OX / 2;
            var r275_yPhRight = r275_top - r275_archDepth * 1.5 - r275_sw / 2 * (r275_top / r271_CAP - r271_TanSlope);
            var r275_pStraightBarStart = 0.75;
            return r275_sink(r271_widths.rhs(r275_sw), r271_g4(r275_xLeft, r275_top - r271_Hook), r271_hookstart(r275_top - r275_offset - r271_O), r271_g4.down.mid(r275_xRight, r275_top - r275_archDepth), r271_flat(r1_mix(r275_xLeft, r275_xRight, r275_pStraightBarStart), r1_mix(r275_sw, r275_yPhRight, r275_pStraightBarStart)), r271_curl(r275_xLeft, r275_sw, r271_widths.lhs(r275_sw)));
        };
        var r271_TwoArcShapeT = function (r276_sink, r276_offset, r276_sw, r276_top) {
            var _r276_t0, _r276_t1;
            var r276_archDepth = r271_AdviceGlottalStopArchDepth(r276_top, 1) * 0.95;
            return r276_sink(r271_widths.rhs(r276_sw), r271_g4(r271_SB + r276_offset, r276_top - r271_Hook), r271_hookstart(r276_top - r276_offset - r271_O), r271_g4.down.mid(r271_RightSB - r276_offset - r271_OX / 2, r276_top - r276_archDepth), r271_alsoThru.g2(0.5, r271_StrokeWidthBlend(0.425, 0.4, r276_sw) * r1_linreg(500, 1, 700, 0.95, r271_Width), r271_widths.center(r276_sw)), r271_flat(r271_SB - r276_offset, 1, r271_widths.heading(r276_sw, 0, r271_Downward)), r271_curl(r271_SB - r276_offset, 0, r271_heading(r271_Downward)));
        };
        var r271_TwoShape = function (r277_top) {
            var _r277_t0, _r277_t1;
            return function () {
                var _r279_t1;
                var _r279_t0 = this;
                var r279_currentGlyph = _r279_t0;
                r279_currentGlyph.include(r271_TwoArcShapeT(r271_dispiro, 0, r271_Stroke, r277_top));
                r279_currentGlyph.include(r271_HBar.b(r271_SB + r271_HalfStroke, r271_RightSB, 0));
                if (r271_SLAB)
                    r279_currentGlyph.include(r271_VSerif.ur(r271_RightSB, 0, r271_VJut));
                return void 0;
            };
        };
        var r271_TwoStraightNeckShape = function (r283_top) {
            var _r283_t0, _r283_t1;
            return function () {
                var _r285_t1;
                var _r285_t0 = this;
                var r285_currentGlyph = _r285_t0;
                r285_currentGlyph.include(r271_TwoStraightNeckArcT(r271_dispiro, 0, r271_Stroke, r283_top));
                r285_currentGlyph.include(r271_HBar.b(r271_SB, r271_RightSB, 0));
                if (r271_SLAB)
                    r285_currentGlyph.include(r271_VSerif.ur(r271_RightSB, 0, r271_VJut));
                return void 0;
            };
        };
        r271_xn$createAndSaveGlyphImpl$2Lrc3c('two.lnum.straightNeck', null, function () {
            var _r291_t1;
            var _r291_t0 = this;
            var r291_currentGlyph = _r291_t0;
            r291_currentGlyph.include(r271_MarkSet.capital());
            r291_currentGlyph.include(r271_TwoStraightNeckShape(r271_CAP));
            return void 0;
        });
        r271_xn$createAndSaveGlyphImpl$2Lrc3c('two.onum.straightNeck', null, function () {
            var _r296_t1;
            var _r296_t0 = this;
            var r296_currentGlyph = _r296_t0;
            r296_currentGlyph.include(r271_OnumMarks.e());
            r296_currentGlyph.include(r271_TwoStraightNeckShape(r271_OnumHeight));
            return void 0;
        });
        r271_xn$createAndSaveGlyphImpl$2Lrc3c('two.lnum.curlyNeck', null, function () {
            var _r301_t1;
            var _r301_t0 = this;
            var r301_currentGlyph = _r301_t0;
            r301_currentGlyph.include(r271_MarkSet.capital());
            r301_currentGlyph.include(r271_TwoShape(r271_CAP));
            return void 0;
        });
        r271_xn$createAndSaveGlyphImpl$2Lrc3c('two.onum.curlyNeck', null, function () {
            var _r306_t1;
            var _r306_t0 = this;
            var r306_currentGlyph = _r306_t0;
            r306_currentGlyph.include(r271_OnumMarks.e());
            r306_currentGlyph.include(r271_TwoShape(r271_OnumHeight));
            return void 0;
        });
        r271_xn$selectvariant$7Hrq('two.lnum', r271_CodeLnum('2'), new r271_xn$NamedParameterPair$2Lrc9b('follow', 'two'));
        r271_xn$selectvariant$7Hrq('two.onum', r271_CodeOnum('2'), new r271_xn$NamedParameterPair$2Lrc9b('follow', 'two'));
        r271_turned('turnDigitTwo', 8586, 'two.lnum', r271_Middle, r271_CAP / 2);
        var _r271_t7 = r271_xn$Capture$2Lrc8['Letter-Blackboard'].resolve();
        var r271_BBS = _r271_t7.BBS;
        var r271_BBD = _r271_t7.BBD;
        return r271_xn$createAndSaveGlyphImpl$2Lrc3c('mathbb/two', 120794, function () {
            var _r314_t1;
            var _r314_t0 = this;
            var r314_currentGlyph = _r314_t0;
            r314_currentGlyph.include(r271_MarkSet.capital());
            r314_currentGlyph.include(r271_TwoArcShapeT(r271_dispiro, 0, r271_BBS, r271_CAP));
            r314_currentGlyph.include(r271_intersection(r271_TwoArcShapeT(r271_xn$spirooutline$1aao, 1, r271_BBS, r271_CAP), r271_VBar.r(r271_RightSB - r271_OX / 2 - r271_BBD, 0, r271_CAP, r271_BBS)));
            r314_currentGlyph.include(r271_HBar.b(r271_SB + r271_BBS / 2 * r271_HVContrast, r271_RightSB, 0, r271_BBS));
            return void 0;
        });
    });
    return void 0;
});
