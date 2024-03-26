'use strict';
import * as _s0_t0 from '../../support/utils.mjs';
import * as _s0_t1 from '../../support/util/mask-bit.mjs';
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
var r1_maskBits = _r1_t9.maskBits;
var r1_popCountByte = _r1_t9.popCountByte;
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
    r270_xn$Capture_Ext$2Lrc2b['$defineGlyphBlockImpl$'](r270_xn$Capture_Ext$2Lrc2b, 'Symbol-Braille', function (r271_xn$Capture$2Lrc8, r271_xn$ExportCapture$2Lrc4b) {
        var r271_stage, r271_F, r271_byte, _r271_t9, _r271_t10, _r271_t11, _r271_t12, _r271_t13, _r271_t15;
        var _r271_t0 = r271_xn$Capture$2Lrc8;
        var r271_xn$createAndSaveGlyphImpl$2Lrc3c = _r271_t0['$createAndSaveGlyphImpl$'];
        var r271_xn$NamedParameterPair$2Lrc9b = _r271_t0['$NamedParameterPair$'];
        var r271_xn$assignUnicodeImpl$2Lrc8b = _r271_t0['$assignUnicodeImpl$'];
        var r271_xn$execState$2Lrc0b = _r271_t0['$execState$'];
        var r271_recursive = _r271_t0.recursive;
        var _r271_t1 = r271_xn$Capture$2Lrc8.Metrics;
        var r271_Width = _r271_t1.Width;
        var r271_SymbolMid = _r271_t1.SymbolMid;
        var r271_PictTop = _r271_t1.PictTop;
        var r271_HalfStroke = _r271_t1.HalfStroke;
        var r271_Middle = _r271_t1.Middle;
        var r271_PeriodRadius = _r271_t1.PeriodRadius;
        var r271_AdviceStroke = _r271_t1.AdviceStroke;
        var _r271_t2 = r271_xn$Capture$2Lrc8.SpiroFns;
        var _r271_t3 = r271_xn$Capture$2Lrc8.BooleFns;
        if (r271_recursive)
            return void 0;
        var _r271_t4 = r271_xn$Capture$2Lrc8.CommonShapes.resolve();
        var r271_DotAt = _r271_t4.DotAt;
        var r271_ForceUpright = _r271_t4.ForceUpright;
        var _r271_t5 = r271_xn$Capture$2Lrc8['Common-Derivatives'].resolve();
        var r271_xn$referglyph$1aao = _r271_t5['refer-glyph'];
        var r271_left = r271_Middle - 0.25 * r271_Width;
        var r271_right = r271_Middle + 0.25 * r271_Width;
        var r271_offsetY = 0.3 * (r271_SymbolMid - r271_PictTop);
        var r271_stress = 0.5 * r271_AdviceStroke(3.375);
        var r271_dotRadius = r271_PeriodRadius * Math.min(1, r271_stress / r271_HalfStroke);
        var r271_BrailleYCoord = function (r274_y) {
            var _r274_t0, _r274_t1;
            return r271_SymbolMid + r274_y * r271_offsetY;
        };
        var r271_BrailleOutlineShape = function (r275_byte) {
            var _r275_t0, _r275_t1;
            return function () {
                var _r277_t2, _r277_t4;
                var _r277_t3 = this;
                var r277_currentGlyph = _r277_t3;
                var _r277_t0 = 0;
                var _r277_t1 = 8;
                var r277_bit = _r277_t0;
                while (r277_bit < _r277_t1) {
                    if (r1_maskBit(r275_byte, r277_bit))
                        r277_currentGlyph.include((_r277_t2 = r277_bit, 0 === _r277_t2 ? r271_DotAt(r271_left, r271_BrailleYCoord(-3), r271_dotRadius) : 1 === _r277_t2 ? r271_DotAt(r271_left, r271_BrailleYCoord(-1), r271_dotRadius) : 2 === _r277_t2 ? r271_DotAt(r271_left, r271_BrailleYCoord(1), r271_dotRadius) : 3 === _r277_t2 ? r271_DotAt(r271_right, r271_BrailleYCoord(-3), r271_dotRadius) : 4 === _r277_t2 ? r271_DotAt(r271_right, r271_BrailleYCoord(-1), r271_dotRadius) : 5 === _r277_t2 ? r271_DotAt(r271_right, r271_BrailleYCoord(1), r271_dotRadius) : 6 === _r277_t2 ? r271_DotAt(r271_left, r271_BrailleYCoord(3), r271_dotRadius) : 7 === _r277_t2 ? r271_DotAt(r271_right, r271_BrailleYCoord(3), r271_dotRadius) : void 0));
                    r277_bit = r277_bit + 1;
                }
                return void 0;
            };
        };
        var r271_BrailleReferenceShape = function (r281_byte) {
            var _r281_t0, _r281_t1;
            return function () {
                var _r283_t3;
                var _r283_t2 = this;
                var r283_currentGlyph = _r283_t2;
                var _r283_t0 = 0;
                var _r283_t1 = 8;
                var r283_bit = _r283_t0;
                while (r283_bit < _r283_t1) {
                    if (r1_maskBit(r281_byte, r283_bit))
                        r283_currentGlyph.include(r271_xn$referglyph$1aao('braille' + (r283_bit + 1)));
                    r283_bit = r283_bit + 1;
                }
                return void 0;
            };
        };
        var r271_BrailleHalvesShape = function (r287_byte) {
            var _r287_t0, _r287_t1;
            return function () {
                var _r289_t1;
                var _r289_t0 = this;
                var r289_currentGlyph = _r289_t0;
                var r289_leftHalf = r1_maskBits(r287_byte, 71);
                var r289_rightHalf = r1_maskBits(r287_byte, 184);
                r289_currentGlyph.include(r271_xn$referglyph$1aao(r271_brailleGlyphName(r289_leftHalf)));
                r289_currentGlyph.include(r271_xn$referglyph$1aao(r271_brailleGlyphName(r289_rightHalf)));
                return void 0;
            };
        };
        var r271_brailleBuildStage = function (r292_byte) {
            var _r292_t0, _r292_t1;
            if (1 === r1_popCountByte(r292_byte))
                return 1;
            if (!r1_maskBits(r292_byte, 71) || !r1_maskBits(r292_byte, 184))
                return 2;
            return 3;
        };
        var r271_brailleGlyphName = function (r293_byte) {
            var _r293_t2, _r293_t3;
            var r293_dots = [];
            var _r293_t0 = 0;
            var _r293_t1 = 8;
            var r293_bit = _r293_t0;
            while (r293_bit < _r293_t1) {
                if (r1_maskBit(r293_byte, r293_bit))
                    r293_dots.push(r293_bit + 1);
                r293_bit = r293_bit + 1;
            }
            return 'braille' + r293_dots.join('');
        };
        var r271_stageConfig = [
            [
                1,
                r271_BrailleOutlineShape
            ],
            [
                2,
                r271_BrailleReferenceShape
            ],
            [
                3,
                r271_BrailleHalvesShape
            ]
        ];
        var _r271_t6 = r271_stageConfig;
        var _r271_t7 = _r271_t6.length;
        var _r271_t8 = 0;
        var _r271_t14 = _r271_t8 < _r271_t7;
        while (_r271_t14) {
            _r271_t9 = _r271_t6[_r271_t8];
            r271_stage = _r271_t9[0];
            r271_F = _r271_t9[1];
            _r271_t10 = 1;
            _r271_t11 = 256;
            r271_byte = _r271_t10;
            while (r271_byte < _r271_t11) {
                if (r271_stage === r271_brailleBuildStage(r271_byte))
                    r271_xn$createAndSaveGlyphImpl$2Lrc3c(r271_brailleGlyphName(r271_byte), 10240 + r271_byte, function () {
                        var _r301_t1;
                        var _r301_t0 = this;
                        var r301_currentGlyph = _r301_t0;
                        r301_currentGlyph.include(r271_ForceUpright());
                        r301_currentGlyph.include(r271_F(r271_byte));
                        return void 0;
                    });
                r271_byte = r271_byte + 1;
            }
            _r271_t15 = _r271_t8 = _r271_t8 + 1;
            _r271_t14 = _r271_t8 < _r271_t7;
        }
        return _r271_t15;
    });
    return void 0;
});
