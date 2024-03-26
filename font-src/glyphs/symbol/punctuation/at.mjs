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
    r269_xn$Capture_Ext$2Lrc2b['$defineGlyphBlockImpl$'](r269_xn$Capture_Ext$2Lrc2b, 'Symbol-Punctuation-At', function (r270_xn$Capture$2Lrc8, r270_xn$ExportCapture$2Lrc4b) {
        var r270_suffix, r270_body, r270_height, r270_fSolidInner, _r270_t8, _r270_t9, _r270_t10, _r270_t11, _r270_tag12;
        var _r270_t0 = r270_xn$Capture$2Lrc8;
        var r270_xn$createAndSaveGlyphImpl$2Lrc3c = _r270_t0['$createAndSaveGlyphImpl$'];
        var r270_xn$NamedParameterPair$2Lrc9b = _r270_t0['$NamedParameterPair$'];
        var r270_xn$assignUnicodeImpl$2Lrc8b = _r270_t0['$assignUnicodeImpl$'];
        var r270_xn$execState$2Lrc0b = _r270_t0['$execState$'];
        var r270_para = _r270_t0.para;
        var r270_DivFrame = _r270_t0.DivFrame;
        var _r270_t1 = r270_xn$Capture$2Lrc8.Metrics;
        var r270_SB = _r270_t1.SB;
        var r270_CAP = _r270_t1.CAP;
        var r270_SymbolMid = _r270_t1.SymbolMid;
        var r270_ParenTop = _r270_t1.ParenTop;
        var r270_ParenBot = _r270_t1.ParenBot;
        var r270_OperTop = _r270_t1.OperTop;
        var r270_OperBot = _r270_t1.OperBot;
        var r270_TanSlope = _r270_t1.TanSlope;
        var r270_HVContrast = _r270_t1.HVContrast;
        var r270_Upward = _r270_t1.Upward;
        var r270_Downward = _r270_t1.Downward;
        var r270_Rightward = _r270_t1.Rightward;
        var r270_Leftward = _r270_t1.Leftward;
        var r270_O = _r270_t1.O;
        var r270_Hook = _r270_t1.Hook;
        var r270_ArchDepth = _r270_t1.ArchDepth;
        var r270_Stroke = _r270_t1.Stroke;
        var r270_HalfStroke = _r270_t1.HalfStroke;
        var r270_RightSB = _r270_t1.RightSB;
        var r270_Middle = _r270_t1.Middle;
        var r270_ArchDepthA = _r270_t1.ArchDepthA;
        var r270_ArchDepthB = _r270_t1.ArchDepthB;
        var r270_ArchXAdjust = _r270_t1.ArchXAdjust;
        var r270_AdviceStroke = _r270_t1.AdviceStroke;
        var r270_ArchDepthAOf = _r270_t1.ArchDepthAOf;
        var r270_ArchDepthBOf = _r270_t1.ArchDepthBOf;
        var r270_HSwToV = _r270_t1.HSwToV;
        var _r270_t2 = r270_xn$Capture$2Lrc8.SpiroFns;
        var r270_g4 = _r270_t2.g4;
        var r270_corner = _r270_t2.corner;
        var r270_flat = _r270_t2.flat;
        var r270_curl = _r270_t2.curl;
        var r270_end = _r270_t2.end;
        var r270_straight = _r270_t2.straight;
        var r270_widths = _r270_t2.widths;
        var r270_heading = _r270_t2.heading;
        var r270_archv = _r270_t2.archv;
        var r270_arcvh = _r270_t2.arcvh;
        var r270_dispiro = _r270_t2.dispiro;
        var r270_xn$spirooutline$1aao = _r270_t2['spiro-outline'];
        var _r270_t3 = r270_xn$Capture$2Lrc8.BooleFns;
        var r270_union = _r270_t3.union;
        var _r270_t4 = r270_xn$Capture$2Lrc8.CommonShapes.resolve();
        var r270_hookend = _r270_t4.hookend;
        var _r270_t5 = r270_xn$Capture$2Lrc8['Common-Derivatives'].resolve();
        var r270_xn$selectvariant$7Hrq = _r270_t5['select-variant'];
        var r270_ThreeFoldShape = function (r273_height, r273_fSolidInner) {
            var _r273_t0, _r273_t1;
            return function () {
                var _r275_t1;
                var _r275_t0 = this;
                var r275_currentGlyph = _r275_t0;
                var r275_top = r270_SymbolMid + r273_height / 2;
                var r275_bot = r270_SymbolMid - r273_height / 2;
                var r275_otop = r1_mix(r275_bot, r275_top, 0.75);
                var r275_obot = r1_mix(r275_top, r275_bot, 0.8);
                var r275_sw = r270_AdviceStroke(3.5);
                var r275_m1 = r273_fSolidInner ? r1_mix(r270_SB, r270_RightSB, 0.5) : r1_mix(r270_SB + r275_sw, r270_RightSB - r275_sw, 0.47) - r275_sw / 2;
                var r275_m2 = r1_mix(r275_m1, r270_RightSB, 0.52) + r270_TanSlope * r275_sw;
                var r275_ada = r270_ArchDepthA * ((r270_RightSB - r275_m1) / (r270_RightSB - r270_SB) * 1.1);
                var r275_adb = r270_ArchDepthB * ((r270_RightSB - r275_m1) / (r270_RightSB - r270_SB) * 1.1);
                r275_currentGlyph.include(r270_union((r273_fSolidInner ? r270_xn$spirooutline$1aao : r270_dispiro)(r270_widths.lhs(r275_sw), r270_flat(r270_RightSB, r275_otop - r270_O, r270_heading(r270_Leftward)), r270_curl(r275_m2, r275_otop - r270_O), r270_archv(), r270_flat(r275_m1, r275_otop - r275_ada), r270_curl(r275_m1, r275_obot + r275_adb), r270_arcvh(), r270_g4(r275_m2, r275_obot + r270_O), r270_archv(), r270_flat(r270_RightSB, r275_obot + r275_ada), r270_curl(r270_RightSB, r275_otop - r270_O)), r270_dispiro(r270_widths.lhs(r275_sw), r270_flat(r270_RightSB, r275_obot + r275_ada), r270_curl(r270_RightSB, r275_top - r270_ArchDepthB), r270_arcvh(), r270_g4(r270_ArchXAdjust.top(r270_Middle, r275_sw), r275_top - r270_O, r270_widths(r270_Stroke, 0)), r270_archv(), r270_flat(r270_SB, r275_top - r270_ArchDepthA, r270_widths(r275_sw, 0)), r270_curl(r270_SB, r275_bot + r270_ArchDepthB), r270_arcvh(), r270_flat(r270_ArchXAdjust.bot(r270_Middle, r275_sw), r275_bot + r270_O, r270_widths(r270_Stroke, 0)), r270_curl(r270_RightSB - r270_HalfStroke + r270_TanSlope * r275_sw, r275_bot + r270_O))));
                return void 0;
            };
        };
        var r270_FourFoldShape = function (r277_height, r277_fSolidInner) {
            var _r277_t0, _r277_t1;
            return function () {
                var _r279_t1;
                var _r279_t0 = this;
                var r279_currentGlyph = _r279_t0;
                var r279_df = r270_DivFrame(r270_para.diversityM, r277_fSolidInner ? 3.25 : 4);
                r279_currentGlyph.setWidth(r279_df.width);
                var r279_top = r270_SymbolMid + r277_height / 2;
                var r279_bot = r270_SymbolMid - r277_height / 2;
                var r279_otop = r1_mix(r279_bot, r279_top, 0.75);
                var r279_obot = r1_mix(r279_top, r279_bot, 0.8);
                var r279_sw = r270_AdviceStroke(r277_fSolidInner ? 3.25 : 4, r279_df.div);
                var r279_swh = r270_AdviceStroke(r277_fSolidInner ? 3.25 : 3.75, r279_df.div);
                var r279_kM12 = r277_fSolidInner ? 0.4 : 1 / 3;
                var r279_kM12Sw = r277_fSolidInner ? 0.25 : 0.5;
                var r279_m1 = r1_mix(r279_df.leftSB + r270_HSwToV(r279_sw / 2), r279_df.rightSB - r270_HSwToV(r279_sw / 2), r279_kM12) - r270_HSwToV(r279_sw * r279_kM12Sw);
                var r279_m2 = r1_mix(r279_df.leftSB + r270_HSwToV(r279_sw / 2), r279_df.rightSB - r270_HSwToV(r279_sw / 2), 1 - r279_kM12) + r270_HSwToV(r279_sw * r279_kM12Sw);
                var r279_ad = r270_ArchDepth * Math.sqrt(r279_df.div);
                var r279_ada = r270_ArchDepthAOf(r279_ad, r279_df.width);
                var r279_adb = r270_ArchDepthBOf(r279_ad, r279_df.width);
                var r279_adInner = Math.max(r279_ad * (r279_m2 - r279_m1) / (r279_df.rightSB - r279_df.leftSB), r279_sw * 1.25);
                var r279_adaInner = r270_ArchDepthAOf(r279_adInner, r279_m2 - r279_m1 + r279_df.leftSB * 2);
                var r279_adbInner = r270_ArchDepthBOf(r279_adInner, r279_m2 - r279_m1 + r279_df.leftSB * 2);
                r279_currentGlyph.include(r270_union(r270_dispiro(r270_widths.lhs(r279_sw), r277_fSolidInner ? [] : [
                    r270_flat(r279_m2, r279_obot - r270_O, r270_heading(r270_Upward)),
                    r270_curl(r279_m2, r279_otop - r279_adbInner),
                    r270_arcvh(),
                    r270_g4(r270_ArchXAdjust.top(r279_df.middle, r279_sw), r279_otop - r270_O),
                    r270_archv(),
                    r270_flat(r279_m1, r279_otop - r279_adaInner),
                    r270_curl(r279_m1, r279_obot + r279_adbInner),
                    r270_arcvh()
                ], r270_flat(r279_df.middle, r279_obot), r270_curl(r279_df.rightSB - Math.max((r279_m2 - r279_m1) / 2, r279_sw * 1.5 * r270_HVContrast), r279_obot), r270_archv(), r270_flat(r279_df.rightSB, r279_obot + Math.max(r279_adaInner, r279_sw * 1.5)), r270_curl(r279_df.rightSB, r279_top - r279_adb), r270_arcvh(), r270_g4(r270_ArchXAdjust.top(r279_df.middle, r279_sw), r279_top - r270_O, r270_widths(r279_swh, 0)), r270_archv(), r270_flat(r279_df.leftSB, r279_top - r279_ada, r270_widths(r279_sw, 0)), r270_curl(r279_df.leftSB, r279_bot + r279_adb), r270_arcvh(), r270_flat(r270_ArchXAdjust.bot(r279_df.middle, r279_sw), r279_bot + r270_O, r270_widths(r279_swh, 0)), r270_curl(r279_df.rightSB - r270_HalfStroke + r270_TanSlope * r279_sw, r279_bot + r270_O)), r277_fSolidInner ? r270_xn$spirooutline$1aao(r270_corner(r279_m2, r279_obot), r270_curl(r279_m2, r279_otop - r279_adbInner), r270_arcvh(), r270_g4(r270_ArchXAdjust.top(r279_df.middle, r279_sw), r279_otop), r270_archv(), r270_flat(r279_m1, r279_otop - r279_adaInner), r270_curl(r279_m1, r279_obot + r279_adbInner), r270_arcvh(), r270_flat(r279_df.middle, r279_obot)) : function () {
                    var _r283_t1;
                    var _r283_t0 = this;
                    var r283_currentGlyph = _r283_t0;
                    return void 0;
                }));
                return void 0;
            };
        };
        var r270_CompactShape = function () {
            var _r284_t0, _r284_t1;
            return function () {
                var _r286_t1;
                var _r286_t0 = this;
                var r286_currentGlyph = _r286_t0;
                var r286_top = r270_CAP;
                var r286_obot = 0;
                var r286_otop = r1_mix(r286_obot, r286_top, 0.675);
                var r286_sw = r270_AdviceStroke(3.5);
                var r286_m1 = r1_mix(r270_SB + r286_sw, r270_RightSB - r286_sw, 0.53) + r286_sw / 2;
                var r286_m2 = r1_mix(r270_SB, r286_m1, 0.5) + r270_TanSlope * r286_sw;
                var r286_ada = r270_ArchDepthA * ((r286_m1 - r270_SB) / (r270_RightSB - r270_SB) * 1.1);
                var r286_adb = r270_ArchDepthB * ((r286_m1 - r270_SB) / (r270_RightSB - r270_SB) * 1.1);
                var r286_atTurnBot = r286_obot - r286_ada / 4;
                var r286_shrink = 0.6;
                r286_currentGlyph.include(r270_dispiro(r270_straight.up.start(r286_m1 - r286_sw * (1 - r286_shrink) * r270_HVContrast, r286_otop - r286_adb, r270_widths.heading(r286_sw * r286_shrink, 0, r270_Upward)), r270_arcvh(), r270_g4(r286_m2 - r286_sw * r270_TanSlope, r286_otop - r270_O, r270_widths.heading(r286_sw, 0, r270_Leftward)), r270_archv(), r270_flat(r270_SB, r286_otop - r286_ada), r270_curl(r270_SB, r286_obot + r286_adb), r270_arcvh(), r270_g4(r286_m2 - r286_sw * r270_TanSlope, r286_obot + r270_O, r270_heading(r270_Rightward)), r270_archv(), r270_straight.up.end(r286_m1 - r286_sw * (1 - r286_shrink) * r270_HVContrast, r286_obot + r286_ada, r270_widths.heading(r286_sw * r286_shrink, 0, r270_Upward))));
                r286_currentGlyph.include(r270_dispiro(r270_widths.lhs(r286_sw), r270_corner(r286_m1, r286_atTurnBot + r286_ada, r270_heading(r270_Upward)), r270_corner(r286_m1, r286_otop - r286_adb, r270_heading(r270_Upward)), r270_corner(r286_m1, r286_otop, r270_widths.heading(r286_sw * r286_shrink, 0, r270_Upward))));
                r286_currentGlyph.include(r270_dispiro(r270_widths.lhs(r286_sw * r286_shrink), r270_straight.down.start(r286_m1 - r286_sw * r286_shrink * r270_HVContrast, r286_atTurnBot + r286_ada, r270_heading(r270_Downward)), r270_arcvh(), r270_g4(r270_ArchXAdjust.bot(r1_mix(r286_m1 - r286_sw * r270_HVContrast, r270_RightSB, 0.5), r286_sw), r286_atTurnBot + r270_O, r270_widths.lhs(r286_sw)), r270_archv(), r270_flat(r270_RightSB, r286_atTurnBot + r286_ada), r270_curl(r270_RightSB, r286_top - r270_ArchDepthB), r270_hookend(r286_top - r270_O), r270_g4(r270_SB, r286_top - r270_Hook)));
                return void 0;
            };
        };
        var r270_NormalHeight = r1_mix(r270_OperTop - r270_OperBot, r270_ParenTop - r270_ParenBot, 0.6);
        var r270_TallHeight = r1_mix(r270_OperTop - r270_OperBot, r270_ParenTop - r270_ParenBot, 0.875);
        var r270_AtConfig = {
            'threefold': [
                r270_ThreeFoldShape,
                r270_NormalHeight,
                false
            ],
            'threefoldTall': [
                r270_ThreeFoldShape,
                r270_TallHeight,
                false
            ],
            'threefoldSolidInner': [
                r270_ThreeFoldShape,
                r270_NormalHeight,
                true
            ],
            'threefoldSolidInnerTall': [
                r270_ThreeFoldShape,
                r270_TallHeight,
                true
            ],
            'fourfold': [
                r270_FourFoldShape,
                r270_NormalHeight,
                false
            ],
            'fourfoldTall': [
                r270_FourFoldShape,
                r270_TallHeight,
                false
            ],
            'fourfoldSolidInner': [
                r270_FourFoldShape,
                r270_NormalHeight,
                true
            ],
            'fourfoldSolidInnerTall': [
                r270_FourFoldShape,
                r270_TallHeight,
                true
            ],
            'compact': [
                r270_CompactShape,
                r270_CAP,
                false
            ]
        };
        var _r270_t6 = Object.entries(r270_AtConfig)[Symbol.iterator]();
        var _r270_t7 = void 0;
        while (!(_r270_t7 = _r270_t6.next()).done) {
            _r270_t8 = _r270_t7.value;
            r270_suffix = _r270_t8[0];
            r270_body = _r270_t8[1][0];
            r270_height = _r270_t8[1][1];
            r270_fSolidInner = _r270_t8[1][2];
            _r270_t8[1];
            (function () {
                return r270_xn$createAndSaveGlyphImpl$2Lrc3c('at.' + r270_suffix, null, r270_body(r270_height, r270_fSolidInner));
            }());
        }
        return r270_xn$selectvariant$7Hrq('at', '@');
    });
    return void 0;
});
