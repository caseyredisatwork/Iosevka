'use strict';
import * as _s0_t0 from '../../../support/utils.mjs';
import * as _s0_t1 from '../../../support/util/mask-bit.mjs';
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
var r1_maskBit = _r1_t9.maskBit;
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
    r270_xn$Capture_Ext$2Lrc2b['$defineGlyphBlockImpl$'](r270_xn$Capture_Ext$2Lrc2b, 'Symbol-Pictograph-I-Ching', function (r271_xn$Capture$2Lrc8, r271_xn$ExportCapture$2Lrc4b) {
        var _r271_t6, _r271_t7;
        var _r271_t0 = r271_xn$Capture$2Lrc8;
        var r271_xn$createAndSaveGlyphImpl$2Lrc3c = _r271_t0['$createAndSaveGlyphImpl$'];
        var r271_xn$NamedParameterPair$2Lrc9b = _r271_t0['$NamedParameterPair$'];
        var r271_xn$assignUnicodeImpl$2Lrc8b = _r271_t0['$assignUnicodeImpl$'];
        var r271_xn$execState$2Lrc0b = _r271_t0['$execState$'];
        var _r271_t1 = r271_xn$Capture$2Lrc8.Metrics;
        var r271_Width = _r271_t1.Width;
        var r271_SB = _r271_t1.SB;
        var r271_SymbolMid = _r271_t1.SymbolMid;
        var r271_OperBot = _r271_t1.OperBot;
        var r271_PictTop = _r271_t1.PictTop;
        var r271_PictBot = _r271_t1.PictBot;
        var r271_ApparentTranslate = _r271_t1.ApparentTranslate;
        var r271_HVContrast = _r271_t1.HVContrast;
        var r271_RightSB = _r271_t1.RightSB;
        var r271_Middle = _r271_t1.Middle;
        var r271_AdviceStroke = _r271_t1.AdviceStroke;
        var _r271_t2 = r271_xn$Capture$2Lrc8.SpiroFns;
        var _r271_t3 = r271_xn$Capture$2Lrc8.BooleFns;
        var _r271_t4 = r271_xn$Capture$2Lrc8.CommonShapes.resolve();
        var r271_HBar = _r271_t4.HBar;
        var r271_WithTransform = _r271_t4.WithTransform;
        var _r271_t5 = r271_xn$Capture$2Lrc8['Common-Derivatives'].resolve();
        var r271_xn$referglyph$1aao = _r271_t5['refer-glyph'];
        r271_xn$createAndSaveGlyphImpl$2Lrc3c('iChing/barYin', null, function () {
            var _r276_t1;
            var _r276_t0 = this;
            var r276_currentGlyph = _r276_t0;
            var r276_bar = r271_AdviceStroke(3);
            var r276_gap = Math.max(r271_Width / 8, r271_AdviceStroke(5));
            r276_currentGlyph.include(r271_HBar.m(r271_SB, r271_Middle - r276_gap / 2 * r271_HVContrast, 0, r276_bar));
            r276_currentGlyph.include(r271_HBar.m(r271_Middle + r276_gap / 2 * r271_HVContrast, r271_RightSB, 0, r276_bar));
            return void 0;
        });
        r271_xn$createAndSaveGlyphImpl$2Lrc3c('iChing/barYang', null, function () {
            var _r281_t1;
            var _r281_t0 = this;
            var r281_currentGlyph = _r281_t0;
            var r281_bar = r271_AdviceStroke(3);
            r281_currentGlyph.include(r271_HBar.m(r271_SB, r271_RightSB, 0, r281_bar));
            return void 0;
        });
        r271_xn$createAndSaveGlyphImpl$2Lrc3c('iChing/barRen', null, function () {
            var _r285_t1;
            var _r285_t0 = this;
            var r285_currentGlyph = _r285_t0;
            var r285_bar = r271_AdviceStroke(3);
            var r285_gap = Math.max(r271_Width / 8, r271_AdviceStroke(5));
            var r285_width = (r271_RightSB - r271_SB - 2 * r285_gap * r271_HVContrast) / 3;
            r285_currentGlyph.include(r271_HBar.m(r271_SB, r271_SB + r285_width, 0, r285_bar));
            r285_currentGlyph.include(r271_HBar.m(r271_Middle - 0.5 * r285_width, r271_Middle + 0.5 * r285_width, 0, r285_bar));
            r285_currentGlyph.include(r271_HBar.m(r271_RightSB - r285_width, r271_RightSB, 0, r285_bar));
            return void 0;
        });
        var r271_patterns = function (r289_n, r289_su) {
            var _r289_t2, _r289_t3, _r289_t5;
            var _r289_t0 = 0;
            var _r289_t1 = Math.pow(2, r289_n);
            var r289_offset = _r289_t0;
            var _r289_t4 = r289_offset < _r289_t1;
            while (_r289_t4) {
                _r289_t5 = (r271_xn$createAndSaveGlyphImpl$2Lrc3c('iChing/Pattern/' + r289_n + '/' + r289_offset, r289_su + r289_offset, function () {
                    var _r294_t3;
                    var _r294_t2 = this;
                    var r294_currentGlyph = _r294_t2;
                    var r294_offsetY = 2 / 3 * (r271_OperBot - r271_PictTop) / r289_n;
                    var r294_startY = r271_SymbolMid - r294_offsetY * (r289_n - 1) / 2;
                    var _r294_t0 = 0;
                    var _r294_t1 = r289_n;
                    var r294_bit = _r294_t0;
                    while (r294_bit < _r294_t1) {
                        r294_currentGlyph.include(r271_WithTransform(r271_ApparentTranslate(0, r294_startY + r294_offsetY * r294_bit), r271_xn$referglyph$1aao(!r1_maskBit(r289_offset, r294_bit) ? 'iChing/barYang' : 'iChing/barYin')));
                        r294_bit = r294_bit + 1;
                    }
                    return void 0;
                }), r289_offset = r289_offset + 1);
                _r289_t4 = r289_offset < _r289_t1;
            }
            return _r289_t5;
        };
        var r271_hexagramPatterns = function (r298_su, r298_order) {
            var _r298_t2, _r298_t3, _r298_t5;
            var _r298_t0 = 0;
            var _r298_t1 = 64;
            var r298_offset = _r298_t0;
            var _r298_t4 = r298_offset < _r298_t1;
            while (_r298_t4) {
                _r298_t5 = (r271_xn$createAndSaveGlyphImpl$2Lrc3c('iChing/Pattern/6/' + r298_offset, r298_su + r298_offset, function () {
                    var _r303_t3;
                    var _r303_t2 = this;
                    var r303_currentGlyph = _r303_t2;
                    var r303_offsetY = (r271_PictBot - r271_PictTop) / 6;
                    var r303_startY = r271_SymbolMid - r303_offsetY * (6 - 1) / 2;
                    var _r303_t0 = 0;
                    var _r303_t1 = 6;
                    var r303_bit = _r303_t0;
                    while (r303_bit < _r303_t1) {
                        r303_currentGlyph.include(r271_WithTransform(r271_ApparentTranslate(0, r303_startY + r303_offsetY * r303_bit), r271_xn$referglyph$1aao(!r1_maskBit(r298_order[r298_offset], r303_bit) ? 'iChing/barYang' : 'iChing/barYin')));
                        r303_bit = r303_bit + 1;
                    }
                    return void 0;
                }), r298_offset = r298_offset + 1);
                _r298_t4 = r298_offset < _r298_t1;
            }
            return _r298_t5;
        };
        var r271_stringPattern = function (r307_pat) {
            var _r307_t0, _r307_t1;
            return function () {
                var r309___, _r309_t2, _r309_t4;
                var _r309_t3 = this;
                var r309_currentGlyph = _r309_t3;
                var r309_n = r307_pat.length;
                var r309_offsetY = (r309_n >= 4 ? 1 : 2 / 3) * (r271_OperBot - r271_PictTop) / r309_n;
                var r309_startY = r271_SymbolMid - r309_offsetY * (r309_n - 1) / 2;
                var _r309_t0 = 0;
                var _r309_t1 = r309_n;
                var r309_bit = _r309_t0;
                while (r309_bit < _r309_t1) {
                    r309_currentGlyph.include(r271_WithTransform(r271_ApparentTranslate(0, r309_startY + r309_offsetY * r309_bit), r271_xn$referglyph$1aao((_r309_t2 = r307_pat[r309_bit], _r309_t2 === '0' ? 'iChing/barYang' : _r309_t2 === '1' ? 'iChing/barYin' : (r309___ = _r309_t2, 'iChing/barRen')))));
                    r309_bit = r309_bit + 1;
                }
                return void 0;
            };
        };
        var r271_stringPatterns = function (r313_su, r313_pats) {
            var r313_pat, _r313_t2, _r313_t3, _r313_t5;
            var _r313_t0 = 0;
            var _r313_t1 = r313_pats.length;
            var r313_offset = _r313_t0;
            var _r313_t4 = r313_offset < _r313_t1;
            while (_r313_t4) {
                _r313_t5 = (r313_pat = r313_pats[r313_offset], r271_xn$createAndSaveGlyphImpl$2Lrc3c('iChing/Pattern/txj/' + r313_pat, r313_su + r313_offset, r271_stringPattern(r313_pat)), r313_offset = r313_offset + 1);
                _r313_t4 = r313_offset < _r313_t1;
            }
            return _r313_t5;
        };
        var r271_ternaryPatterns = function (r317_n, r317_su) {
            var r317_pat, _r317_t2, _r317_t3, _r317_t5;
            var _r317_t0 = 0;
            var _r317_t1 = Math.pow(3, r317_n);
            var r317_offset = _r317_t0;
            var _r317_t4 = r317_offset < _r317_t1;
            while (_r317_t4) {
                _r317_t5 = (r317_pat = r317_offset.toString(3).padStart(r317_n, '0'), r271_xn$createAndSaveGlyphImpl$2Lrc3c('iChing/Pattern/txj/' + r317_pat, r317_su + r317_offset, r271_stringPattern(r317_pat)), r317_offset = r317_offset + 1);
                _r317_t4 = r317_offset < _r317_t1;
            }
            return _r317_t5;
        };
        r271_patterns(1, 9866);
        r271_patterns(2, 9868);
        r271_patterns(3, 9776);
        r271_hexagramPatterns(19904, [
            0,
            63,
            29,
            46,
            5,
            40,
            47,
            61,
            4,
            8,
            7,
            56,
            16,
            2,
            55,
            59,
            25,
            38,
            15,
            60,
            26,
            22,
            62,
            31,
            24,
            6,
            30,
            33,
            45,
            18,
            49,
            35,
            48,
            3,
            58,
            23,
            20,
            10,
            53,
            43,
            14,
            28,
            1,
            32,
            57,
            39,
            41,
            37,
            17,
            34,
            27,
            54,
            52,
            11,
            19,
            50,
            36,
            9,
            44,
            13,
            12,
            51,
            21,
            42
        ]);
        r271_stringPatterns(119552, [
            '2',
            '02',
            '12',
            '20',
            '21',
            '22'
        ]);
        return r271_ternaryPatterns(4, 119558);
    });
    return void 0;
});
