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
    r269_xn$Capture_Ext$2Lrc2b['$defineGlyphBlockImpl$'](r269_xn$Capture_Ext$2Lrc2b, 'Symbol-Punctuation-Ligation-Variants', function (r270_xn$Capture$2Lrc8, r270_xn$ExportCapture$2Lrc4b) {
        var r270_suffix, r270_pDelta, r270_baseName, _r270_t8, _r270_t9, _r270_t10, _r270_t11, _r270_t12, _r270_t13, _r270_t15, _r270_t16, _r270_t17;
        var _r270_t0 = r270_xn$Capture$2Lrc8;
        var r270_xn$createAndSaveGlyphImpl$2Lrc3c = _r270_t0['$createAndSaveGlyphImpl$'];
        var r270_xn$NamedParameterPair$2Lrc9b = _r270_t0['$NamedParameterPair$'];
        var r270_xn$assignUnicodeImpl$2Lrc8b = _r270_t0['$assignUnicodeImpl$'];
        var r270_xn$execState$2Lrc0b = _r270_t0['$execState$'];
        var r270_xn$glyphisneeded$1aao3 = _r270_t0['glyph-is-needed'];
        var _r270_t1 = r270_xn$Capture$2Lrc8.Metrics;
        var r270_Width = _r270_t1.Width;
        var r270_XH = _r270_t1.XH;
        var r270_Translate = _r270_t1.Translate;
        var r270_PeriodSize = _r270_t1.PeriodSize;
        var _r270_t2 = r270_xn$Capture$2Lrc8.SpiroFns;
        var _r270_t3 = r270_xn$Capture$2Lrc8.BooleFns;
        var _r270_t4 = r270_xn$Capture$2Lrc8.CommonShapes.resolve();
        var _r270_t5 = r270_xn$Capture$2Lrc8['Common-Derivatives'].resolve();
        var r270_xn$referglyph$1aao = _r270_t5['refer-glyph'];
        var r270_xn$deriveglyphs$7Hrq = _r270_t5['derive-glyphs'];
        r270_xn$Capture$2Lrc8['Symbol-Punctuation-Small'].resolve();
        r270_xn$Capture$2Lrc8['Symbol-Punctuation-Interpuncts'].resolve();
        r270_xn$Capture$2Lrc8['Symbol-Punctuation-Emotion'].resolve();
        var r270_dotLikePunctuations = [
            'colon',
            'colon/mid',
            'semicolon',
            'period',
            'period/mid',
            'comma',
            'exclam',
            'bar',
            'slash',
            'backslash',
            'question'
        ];
        var r270_deltas = {
            'dRight': 1,
            'dRightHalf': 0.5,
            'dMid': 0,
            'dLeftHalf': -0.5,
            'dLeft': -1
        };
        var r270_LigD = function (r276_baseName, r276_suffix, r276_pDelta) {
            var r276_delta, _r276_t0, _r276_t1;
            return r270_xn$glyphisneeded$1aao3(r276_baseName) ? (r276_delta = Math.max(0, r270_Width / 2 - (r270_XH - r270_PeriodSize) / 2), r270_xn$deriveglyphs$7Hrq(r276_baseName + '.lig.' + r276_suffix, null, r276_baseName, function (r277_src, r277_gr) {
                var _r277_t0, _r277_t1;
                return function () {
                    var _r279_t1;
                    var _r279_t0 = this;
                    var r279_currentGlyph = _r279_t0;
                    r279_currentGlyph.include(r270_xn$referglyph$1aao(r277_src), true, true);
                    r279_currentGlyph.include(r270_Translate(r276_delta * r276_pDelta, 0));
                    return void 0;
                };
            })) : void 0;
        };
        var _r270_t6 = Object.entries(r270_deltas)[Symbol.iterator]();
        var _r270_t7 = void 0;
        var _r270_t14 = !(_r270_t7 = _r270_t6.next()).done;
        while (_r270_t14) {
            _r270_t8 = _r270_t7.value;
            r270_suffix = _r270_t8[0];
            r270_pDelta = _r270_t8[1];
            _r270_t9 = r270_dotLikePunctuations;
            _r270_t10 = _r270_t9.length;
            _r270_t11 = 0;
            _r270_t16 = _r270_t11 < _r270_t10;
            while (_r270_t16) {
                _r270_t17 = (r270_baseName = _r270_t9[_r270_t11], r270_LigD(r270_baseName, r270_suffix, r270_pDelta), _r270_t11 = _r270_t11 + 1);
                _r270_t16 = _r270_t11 < _r270_t10;
            }
            _r270_t15 = _r270_t17;
            _r270_t14 = !(_r270_t7 = _r270_t6.next()).done;
        }
        return _r270_t15;
    });
    return void 0;
});
