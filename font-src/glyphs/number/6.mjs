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
    r270_xn$Capture_Ext$2Lrc2b['$defineGlyphBlockImpl$'](r270_xn$Capture_Ext$2Lrc2b, 'Digits-Six', function (r271_xn$Capture$2Lrc8, r271_xn$ExportCapture$2Lrc4b) {
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
        var r271_O = _r271_t1.O;
        var r271_Hook = _r271_t1.Hook;
        var r271_SmallArchDepth = _r271_t1.SmallArchDepth;
        var r271_Stroke = _r271_t1.Stroke;
        var r271_CThin = _r271_t1.CThin;
        var r271_CThinB = _r271_t1.CThinB;
        var r271_HalfStroke = _r271_t1.HalfStroke;
        var r271_RightSB = _r271_t1.RightSB;
        var r271_Middle = _r271_t1.Middle;
        var r271_AdviceStroke = _r271_t1.AdviceStroke;
        var _r271_t2 = r271_xn$Capture$2Lrc8.SpiroFns;
        var r271_g4 = _r271_t2.g4;
        var r271_flat = _r271_t2.flat;
        var r271_curl = _r271_t2.curl;
        var r271_straight = _r271_t2.straight;
        var r271_widths = _r271_t2.widths;
        var r271_quadControls = _r271_t2.quadControls;
        var r271_archv = _r271_t2.archv;
        var r271_arcvh = _r271_t2.arcvh;
        var r271_dispiro = _r271_t2.dispiro;
        var _r271_t3 = r271_xn$Capture$2Lrc8.BooleFns;
        var r271_intersection = _r271_t3.intersection;
        var _r271_t4 = r271_xn$Capture$2Lrc8.CommonShapes.resolve();
        var r271_KnotAdj = _r271_t4.KnotAdj;
        var r271_Rect = _r271_t4.Rect;
        var r271_HBar = _r271_t4.HBar;
        var r271_hookend = _r271_t4.hookend;
        var r271_DiagCorDs = _r271_t4.DiagCorDs;
        var _r271_t5 = r271_xn$Capture$2Lrc8['Common-Derivatives'].resolve();
        var r271_xn$selectvariant$7Hrq = _r271_t5['select-variant'];
        var r271_alias = _r271_t5.alias;
        var _r271_t6 = r271_xn$Capture$2Lrc8['Digits-Shared'].resolve();
        var r271_CodeLnum = _r271_t6.CodeLnum;
        var r271_CodeOnum = _r271_t6.CodeOnum;
        r271_xn$ExportCapture$2Lrc4b(function () {
            var _r276_t0, _r276_t1;
            return { 'OpenContourSixShape': r271_OpenContourSixShape };
        });
        var r271_OpenContourSixShape = function (r277_charTop) {
            var _r277_t0, _r277_t1;
            return function () {
                var _r279_t1;
                var _r279_t0 = this;
                var r279_currentGlyph = _r279_t0;
                var r279_oTop = r277_charTop * 0.55 + r271_Stroke / 2;
                var r279_fine = r271_Stroke * r271_CThinB;
                var r279_coFine = Math.max(r271_AdviceStroke(3.5), r271_Stroke - r279_fine / 2);
                r279_currentGlyph.include(r271_dispiro(r271_widths.rhs(r279_fine), r271_KnotAdj.ArchBot.o(new r271_xn$NamedParameterPair$2Lrc9b('ty', r271_g4.left.start), r271_Middle - r271_TanSlope * (r271_Stroke - r279_fine), r271_Stroke - r279_fine), r271_archv(), r271_KnotAdj.BowlLeft.o(r271_g4, r271_SB + (r271_Stroke - r279_fine) * r271_HVContrast, r279_oTop / 2), r271_arcvh(), r271_KnotAdj.ArchTop.o(r271_Middle, r279_oTop, r271_widths.rhs()), r271_archv(), r271_KnotAdj.BowlRight.o(r271_g4.down.mid, r271_RightSB, r279_oTop / 2), r271_arcvh(), r271_KnotAdj.ArchBot.o(new r271_xn$NamedParameterPair$2Lrc9b('ty', r271_g4.left.mid), r271_Middle, 0), r271_archv(), r271_KnotAdj.BowlLeft.o(r271_g4.up.mid, r271_SB, r279_oTop / 2 + r271_Stroke * 0.3, r271_widths.rhs(r279_coFine)), r271_quadControls(0, 0.85), r271_g4(r1_mix(r271_SB, r271_RightSB, 0.85) - 0.25 * r271_Stroke * r271_HVContrast, r277_charTop - r271_O, r271_widths.rhs())));
                return void 0;
            };
        };
        r271_xn$ExportCapture$2Lrc4b(function () {
            var _r284_t0, _r284_t1;
            return { 'ClosedContourSixShape': r271_ClosedContourSixShape };
        });
        var r271_ClosedContourSixShape = function (r285_top) {
            var _r285_t0, _r285_t1;
            return function () {
                var _r287_t1;
                var _r287_t0 = this;
                var r287_currentGlyph = _r287_t0;
                var r287_oTop = Math.max(2 * r271_SmallArchDepth + 0.1, r285_top * 0.55 + r271_HalfStroke);
                r287_currentGlyph.include(r271_dispiro(r271_widths.rhs(r271_Stroke * r271_CThinB), r271_KnotAdj.BowlLeft.o(r271_straight.up.start, r271_SB + r271_Stroke * (1 - r271_CThinB) * r271_HVContrast, r287_oTop - r271_SmallArchDepth), r271_arcvh(), r271_KnotAdj.ArchTop.o(r271_Middle, r287_oTop, r271_widths.rhs(r271_Stroke)), r271_archv(), r271_KnotAdj.BowlRight.o(r271_flat, r271_RightSB, r287_oTop - r271_SmallArchDepth), r271_KnotAdj.BowlRight.o(r271_curl, r271_RightSB, 0 + r271_SmallArchDepth), r271_arcvh(), r271_KnotAdj.ArchBot.o(r271_Middle, 0), r271_archv(), r271_KnotAdj.BowlLeft.o(r271_flat, r271_SB, r271_SmallArchDepth), r271_KnotAdj.BowlLeft.o(r271_curl, r271_SB, r285_top - r271_SmallArchDepth), r271_hookend(r285_top - r271_O), r271_g4(r271_RightSB, r285_top - r271_Hook)));
                return void 0;
            };
        };
        r271_xn$ExportCapture$2Lrc4b(function () {
            var _r290_t0, _r290_t1;
            return { 'StraightBarSixShape': r271_StraightBarSixShape };
        });
        var r271_StraightBarSixShape = function () {
            var _r291_t6;
            var _r291_t7 = arguments;
            var _r291_t0 = [].slice.call(_r291_t7, 0);
            var _r291_t1 = [];
            var _r291_t2 = 0;
            while (_r291_t2 < _r291_t0.length) {
                if (!(_r291_t0[_r291_t2] instanceof r271_xn$NamedParameterPair$2Lrc9b))
                    _r291_t1.push(_r291_t0[_r291_t2]);
                _r291_t2 = _r291_t2 + 1;
            }
            var _r291_t3 = _r291_t0;
            var _r291_t4 = _r291_t3.length;
            var _r291_t5 = 0;
            while (_r291_t5 < _r291_t4) {
                _r291_t2 = _r291_t3[_r291_t5];
                if (_r291_t2 && _r291_t2 instanceof r271_xn$NamedParameterPair$2Lrc9b && _r291_t2.left === 'charTop')
                    r291_charTop = _r291_t2.right;
                if (_r291_t2 && _r291_t2 instanceof r271_xn$NamedParameterPair$2Lrc9b && _r291_t2.left === 'sw')
                    r291_sw = _r291_t2.right;
                if (_r291_t2 && _r291_t2 instanceof r271_xn$NamedParameterPair$2Lrc9b && _r291_t2.left === 'bbd')
                    r291_bbd = _r291_t2.right;
                _r291_t5 = _r291_t5 + 1;
            }
            var r291_charTop = r1_fallback(r291_charTop, _r291_t1[0]);
            var r291_sw = r1_fallback(r291_sw, _r291_t1[1], r271_Stroke);
            var r291_bbd = r1_fallback(r291_bbd, _r291_t1[2], 0);
            return function () {
                var _r297_t1;
                var _r297_t0 = this;
                var r297_currentGlyph = _r297_t0;
                var r297_oTop = r291_charTop * 0.55 + r291_sw / 2;
                var r297_fine = r291_sw * r271_CThin;
                var r297_coFine = Math.max(r291_sw * r271_CThin, r291_sw - r297_fine / 2);
                var r297_xMockBarStart = 0;
                var r297_yMockBarStart = r271_KnotAdj.BowlLeft.yOf(r297_oTop / 2 + r291_sw * 0.3);
                var r297_xTerminal0 = r1_mix(r271_SB, r271_RightSB, 0.6) - 0.5 * r291_sw * r271_HVContrast;
                var r297_kDiagBbd = r271_DiagCorDs(r291_charTop - r297_yMockBarStart, r297_xTerminal0 - r297_xMockBarStart, r291_bbd);
                var r297_xTerminal = r297_xTerminal0 + r297_kDiagBbd * r291_bbd / 2;
                var r297_pStraightBarStart = 0.75 - r291_sw / r291_charTop;
                r297_currentGlyph.include(r271_intersection(r271_Rect(r291_charTop, -r291_charTop, -r271_Width, 2 * r271_Width), r271_dispiro(r271_widths.rhs(r297_fine), r271_KnotAdj.ArchBot.o(new r271_xn$NamedParameterPair$2Lrc9b('ty', r271_g4.left.start), r271_Middle + r291_bbd / 2 - r271_TanSlope * (r291_sw - r297_fine), r291_sw - r297_fine + 1 / 16), r271_archv(), r271_KnotAdj.BowlLeft.o(r271_g4.up.mid, r271_SB + r291_bbd + (r291_sw - r297_fine) * r271_HVContrast + 1 / 16, r297_oTop / 2), r271_arcvh(), r271_KnotAdj.ArchTop.o(r271_Middle + r291_bbd / 2, r297_oTop, r271_widths.rhs(r291_sw)), r271_archv(), r271_KnotAdj.BowlRight.o(r271_g4.down.mid, r271_RightSB, r297_oTop / 2), r271_arcvh(), r271_KnotAdj.ArchBot.o(new r271_xn$NamedParameterPair$2Lrc9b('ty', r271_g4.left.mid), r271_Middle + r291_bbd / 2, 0), r271_archv(), r271_KnotAdj.BowlLeft.o(r271_g4.up.mid, r271_SB + r291_bbd, r297_oTop / 2 + r291_sw * 0.3, r271_widths.rhs(r297_coFine)), r271_flat(r1_mix(r297_xMockBarStart + r291_bbd, r297_xTerminal, r297_pStraightBarStart), r1_mix(r297_yMockBarStart, r291_charTop, r297_pStraightBarStart), r271_widths.rhs(r291_sw)), r271_curl(r1_mix(r297_xMockBarStart + r291_bbd, r297_xTerminal, 2), r1_mix(r297_yMockBarStart, r291_charTop, 2)))));
                if (r291_bbd)
                    r297_currentGlyph.include(r271_HBar.t(r297_xTerminal - r297_kDiagBbd * r291_bbd, r297_xTerminal, r291_charTop, r291_sw));
                if (r291_bbd)
                    r297_currentGlyph.include(r271_intersection(r271_Rect(r291_charTop, -r291_charTop, -r271_Width, 2 * r271_Width), r271_dispiro(r271_KnotAdj.ArchBot.o(new r271_xn$NamedParameterPair$2Lrc9b('ty', r271_g4.left.mid), r271_Middle + r291_bbd / 2, 0, r271_widths.rhs(r291_sw)), r271_archv(), r271_KnotAdj.BowlLeft.o(r271_g4.up.mid, r271_SB, r297_oTop / 2 + r291_sw * 0.3), r271_flat(r1_mix(r297_xMockBarStart, r297_xTerminal - r297_kDiagBbd * r291_bbd, r297_pStraightBarStart), r1_mix(r297_yMockBarStart, r291_charTop, r297_pStraightBarStart)), r271_curl(r1_mix(r297_xMockBarStart, r297_xTerminal - r297_kDiagBbd * r291_bbd, 2), r1_mix(r297_yMockBarStart, r291_charTop, 2)))));
                return void 0;
            };
        };
        r271_xn$createAndSaveGlyphImpl$2Lrc3c('six.lnum.openContour', null, function () {
            var _r306_t1;
            var _r306_t0 = this;
            var r306_currentGlyph = _r306_t0;
            r306_currentGlyph.include(r271_MarkSet.capital());
            r306_currentGlyph.include(r271_OpenContourSixShape(r271_CAP));
            return void 0;
        });
        r271_xn$createAndSaveGlyphImpl$2Lrc3c('six.lnum.closedContour', null, function () {
            var _r311_t1;
            var _r311_t0 = this;
            var r311_currentGlyph = _r311_t0;
            r311_currentGlyph.include(r271_MarkSet.capital());
            r311_currentGlyph.include(r271_ClosedContourSixShape(r271_CAP));
            return void 0;
        });
        r271_xn$createAndSaveGlyphImpl$2Lrc3c('six.lnum.straightBar', null, function () {
            var _r316_t1;
            var _r316_t0 = this;
            var r316_currentGlyph = _r316_t0;
            r316_currentGlyph.include(r271_MarkSet.capital());
            r316_currentGlyph.include(r271_StraightBarSixShape(r271_CAP));
            return void 0;
        });
        r271_xn$selectvariant$7Hrq('six.lnum', r271_CodeLnum('6'), new r271_xn$NamedParameterPair$2Lrc9b('follow', 'six'));
        r271_alias('six.onum', r271_CodeOnum('6'), 'six.lnum');
        var _r271_t7 = r271_xn$Capture$2Lrc8['Letter-Blackboard'].resolve();
        var r271_BBS = _r271_t7.BBS;
        var r271_BBD = _r271_t7.BBD;
        return r271_xn$createAndSaveGlyphImpl$2Lrc3c('mathbb/six', 120798, function () {
            var _r323_t1;
            var _r323_t0 = this;
            var r323_currentGlyph = _r323_t0;
            r323_currentGlyph.include(r271_MarkSet.capital());
            r323_currentGlyph.include(r271_StraightBarSixShape(r271_CAP, new r271_xn$NamedParameterPair$2Lrc9b('sw', r271_BBS), new r271_xn$NamedParameterPair$2Lrc9b('bbd', r271_BBD)));
            return void 0;
        });
    });
    return void 0;
});
