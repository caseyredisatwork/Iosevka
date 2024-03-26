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
    r269_xn$Capture_Ext$2Lrc2b['$defineGlyphBlockImpl$'](r269_xn$Capture_Ext$2Lrc2b, 'NotGlyphFn', function (r270_xn$Capture$2Lrc8, r270_xn$ExportCapture$2Lrc4b) {
        var _r270_t6, _r270_t7;
        var _r270_t0 = r270_xn$Capture$2Lrc8;
        var r270_xn$createAndSaveGlyphImpl$2Lrc3c = _r270_t0['$createAndSaveGlyphImpl$'];
        var r270_xn$NamedParameterPair$2Lrc9b = _r270_t0['$NamedParameterPair$'];
        var r270_xn$assignUnicodeImpl$2Lrc8b = _r270_t0['$assignUnicodeImpl$'];
        var r270_xn$execState$2Lrc0b = _r270_t0['$execState$'];
        var _r270_t1 = r270_xn$Capture$2Lrc8.Metrics;
        var r270_SB = _r270_t1.SB;
        var r270_BgOpTop = _r270_t1.BgOpTop;
        var r270_BgOpBot = _r270_t1.BgOpBot;
        var r270_Translate = _r270_t1.Translate;
        var r270_RightSB = _r270_t1.RightSB;
        var r270_AdviceStroke = _r270_t1.AdviceStroke;
        var _r270_t2 = r270_xn$Capture$2Lrc8.SpiroFns;
        var r270_flat = _r270_t2.flat;
        var r270_curl = _r270_t2.curl;
        var r270_widths = _r270_t2.widths;
        var r270_dispiro = _r270_t2.dispiro;
        var _r270_t3 = r270_xn$Capture$2Lrc8.BooleFns;
        var _r270_t4 = r270_xn$Capture$2Lrc8.CommonShapes.resolve();
        var r270_WithTransform = _r270_t4.WithTransform;
        var r270_AsRadical = _r270_t4.AsRadical;
        var _r270_t5 = r270_xn$Capture$2Lrc8['Common-Derivatives'].resolve();
        var r270_xn$referglyph$1aao = _r270_t5['refer-glyph'];
        var r270_xn$queryglyph$1aao = _r270_t5['query-glyph'];
        r270_xn$ExportCapture$2Lrc4b(function () {
            var _r274_t0, _r274_t1;
            return {
                'NotGlyphSw': r270_NotGlyphSw,
                'notGlyph': r270_notGlyph
            };
        });
        var r270_NotGlyphSw = r270_AdviceStroke(4.5);
        var r270_notGlyphGeneric = function (r275_newid, r275_unicode, r275_oldid, r275_top, r275_bot, r275_prop, r275_shift, r275_F) {
            var _r275_t0, _r275_t1;
            var r275_component = r275_F(r1_fallback(r275_top, r270_BgOpTop), r1_fallback(r275_bot, r270_BgOpBot), r1_mix(r270_SB, r270_RightSB, r1_fallback(r275_prop, 0.25)), r1_mix(r270_RightSB, r270_SB, r1_fallback(r275_prop, 0.25)), r270_NotGlyphSw, r1_fallback(r275_shift, 0));
            return r270_xn$createAndSaveGlyphImpl$2Lrc3c(r275_newid || 'not' + r275_oldid, r275_unicode, function () {
                var _r278_t1;
                var _r278_t0 = this;
                var r278_currentGlyph = _r278_t0;
                r278_currentGlyph.include(r270_xn$referglyph$1aao(r275_oldid));
                r278_currentGlyph.include(r275_component);
                return void 0;
            });
        };
        var r270_notGlyph = function () {
            var _r281_t6;
            var _r281_t7 = arguments;
            var _r281_t0 = [].slice.call(_r281_t7, 0);
            var _r281_t1 = [];
            var _r281_t2 = 0;
            while (_r281_t2 < _r281_t0.length) {
                if (!(_r281_t0[_r281_t2] instanceof r270_xn$NamedParameterPair$2Lrc9b))
                    _r281_t1.push(_r281_t0[_r281_t2]);
                _r281_t2 = _r281_t2 + 1;
            }
            var _r281_t3 = _r281_t0;
            var _r281_t4 = _r281_t3.length;
            var _r281_t5 = 0;
            while (_r281_t5 < _r281_t4) {
                _r281_t2 = _r281_t3[_r281_t5];
                if (_r281_t2 && _r281_t2 instanceof r270_xn$NamedParameterPair$2Lrc9b && _r281_t2.left === 'newid')
                    r281_newid = _r281_t2.right;
                if (_r281_t2 && _r281_t2 instanceof r270_xn$NamedParameterPair$2Lrc9b && _r281_t2.left === 'unicode')
                    r281_unicode = _r281_t2.right;
                if (_r281_t2 && _r281_t2 instanceof r270_xn$NamedParameterPair$2Lrc9b && _r281_t2.left === 'oldid')
                    r281_oldid = _r281_t2.right;
                if (_r281_t2 && _r281_t2 instanceof r270_xn$NamedParameterPair$2Lrc9b && _r281_t2.left === 'top')
                    r281_top = _r281_t2.right;
                if (_r281_t2 && _r281_t2 instanceof r270_xn$NamedParameterPair$2Lrc9b && _r281_t2.left === 'bot')
                    r281_bot = _r281_t2.right;
                if (_r281_t2 && _r281_t2 instanceof r270_xn$NamedParameterPair$2Lrc9b && _r281_t2.left === 'prop')
                    r281_prop = _r281_t2.right;
                if (_r281_t2 && _r281_t2 instanceof r270_xn$NamedParameterPair$2Lrc9b && _r281_t2.left === 'shift')
                    r281_shift = _r281_t2.right;
                _r281_t5 = _r281_t5 + 1;
            }
            var r281_newid = r1_fallback(r281_newid, _r281_t1[0]);
            var r281_unicode = r1_fallback(r281_unicode, _r281_t1[1]);
            var r281_oldid = r1_fallback(r281_oldid, _r281_t1[2]);
            var r281_top = r1_fallback(r281_top, _r281_t1[3]);
            var r281_bot = r1_fallback(r281_bot, _r281_t1[4]);
            var r281_prop = r1_fallback(r281_prop, _r281_t1[5]);
            var r281_shift = r1_fallback(r281_shift, _r281_t1[6]);
            return r270_notGlyphGeneric(r281_newid, r281_unicode, r281_oldid, r281_top, r281_bot, r281_prop, r281_shift, function (r286_t, r286_b, r286_l, r286_r, r286_sw, r286_sh) {
                var _r286_t0, _r286_t1;
                var r286_slashBarName = '.NotGlyphSlash{' + r286_l + '}{' + r286_r + '}{' + r286_t + '}{' + r286_b + '}{' + r286_sw + '}';
                if (!r270_xn$queryglyph$1aao(r286_slashBarName))
                    r270_xn$createAndSaveGlyphImpl$2Lrc3c(r286_slashBarName, null, r270_AsRadical(r270_dispiro(r270_widths.center(r286_sw), r270_flat(r286_l, r286_b), r270_curl(r286_r, r286_t))));
                return function () {
                    var _r289_t1;
                    var _r289_t0 = this;
                    var r289_currentGlyph = _r289_t0;
                    r289_currentGlyph.include(r270_WithTransform(r270_Translate(r286_sh, 0), r270_xn$referglyph$1aao(r286_slashBarName)));
                    return void 0;
                };
            });
        };
        r270_notGlyph.right2 = function () {
            var _r291_t6;
            var _r291_t7 = arguments;
            var _r291_t0 = [].slice.call(_r291_t7, 0);
            var _r291_t1 = [];
            var _r291_t2 = 0;
            while (_r291_t2 < _r291_t0.length) {
                if (!(_r291_t0[_r291_t2] instanceof r270_xn$NamedParameterPair$2Lrc9b))
                    _r291_t1.push(_r291_t0[_r291_t2]);
                _r291_t2 = _r291_t2 + 1;
            }
            var _r291_t3 = _r291_t0;
            var _r291_t4 = _r291_t3.length;
            var _r291_t5 = 0;
            while (_r291_t5 < _r291_t4) {
                _r291_t2 = _r291_t3[_r291_t5];
                if (_r291_t2 && _r291_t2 instanceof r270_xn$NamedParameterPair$2Lrc9b && _r291_t2.left === 'newid')
                    r291_newid = _r291_t2.right;
                if (_r291_t2 && _r291_t2 instanceof r270_xn$NamedParameterPair$2Lrc9b && _r291_t2.left === 'unicode')
                    r291_unicode = _r291_t2.right;
                if (_r291_t2 && _r291_t2 instanceof r270_xn$NamedParameterPair$2Lrc9b && _r291_t2.left === 'oldid')
                    r291_oldid = _r291_t2.right;
                if (_r291_t2 && _r291_t2 instanceof r270_xn$NamedParameterPair$2Lrc9b && _r291_t2.left === 'top')
                    r291_top = _r291_t2.right;
                if (_r291_t2 && _r291_t2 instanceof r270_xn$NamedParameterPair$2Lrc9b && _r291_t2.left === 'bot')
                    r291_bot = _r291_t2.right;
                if (_r291_t2 && _r291_t2 instanceof r270_xn$NamedParameterPair$2Lrc9b && _r291_t2.left === 'prop')
                    r291_prop = _r291_t2.right;
                if (_r291_t2 && _r291_t2 instanceof r270_xn$NamedParameterPair$2Lrc9b && _r291_t2.left === 'shift')
                    r291_shift = _r291_t2.right;
                _r291_t5 = _r291_t5 + 1;
            }
            var r291_newid = r1_fallback(r291_newid, _r291_t1[0]);
            var r291_unicode = r1_fallback(r291_unicode, _r291_t1[1]);
            var r291_oldid = r1_fallback(r291_oldid, _r291_t1[2]);
            var r291_top = r1_fallback(r291_top, _r291_t1[3]);
            var r291_bot = r1_fallback(r291_bot, _r291_t1[4]);
            var r291_prop = r1_fallback(r291_prop, _r291_t1[5]);
            var r291_shift = r1_fallback(r291_shift, _r291_t1[6]);
            return r270_notGlyph(r291_newid, r291_unicode, r291_oldid, r291_top, r291_bot, r291_prop, -r270_NotGlyphSw);
        };
        r270_notGlyph.right = function () {
            var _r296_t6;
            var _r296_t7 = arguments;
            var _r296_t0 = [].slice.call(_r296_t7, 0);
            var _r296_t1 = [];
            var _r296_t2 = 0;
            while (_r296_t2 < _r296_t0.length) {
                if (!(_r296_t0[_r296_t2] instanceof r270_xn$NamedParameterPair$2Lrc9b))
                    _r296_t1.push(_r296_t0[_r296_t2]);
                _r296_t2 = _r296_t2 + 1;
            }
            var _r296_t3 = _r296_t0;
            var _r296_t4 = _r296_t3.length;
            var _r296_t5 = 0;
            while (_r296_t5 < _r296_t4) {
                _r296_t2 = _r296_t3[_r296_t5];
                if (_r296_t2 && _r296_t2 instanceof r270_xn$NamedParameterPair$2Lrc9b && _r296_t2.left === 'newid')
                    r296_newid = _r296_t2.right;
                if (_r296_t2 && _r296_t2 instanceof r270_xn$NamedParameterPair$2Lrc9b && _r296_t2.left === 'unicode')
                    r296_unicode = _r296_t2.right;
                if (_r296_t2 && _r296_t2 instanceof r270_xn$NamedParameterPair$2Lrc9b && _r296_t2.left === 'oldid')
                    r296_oldid = _r296_t2.right;
                if (_r296_t2 && _r296_t2 instanceof r270_xn$NamedParameterPair$2Lrc9b && _r296_t2.left === 'top')
                    r296_top = _r296_t2.right;
                if (_r296_t2 && _r296_t2 instanceof r270_xn$NamedParameterPair$2Lrc9b && _r296_t2.left === 'bot')
                    r296_bot = _r296_t2.right;
                if (_r296_t2 && _r296_t2 instanceof r270_xn$NamedParameterPair$2Lrc9b && _r296_t2.left === 'prop')
                    r296_prop = _r296_t2.right;
                if (_r296_t2 && _r296_t2 instanceof r270_xn$NamedParameterPair$2Lrc9b && _r296_t2.left === 'shift')
                    r296_shift = _r296_t2.right;
                _r296_t5 = _r296_t5 + 1;
            }
            var r296_newid = r1_fallback(r296_newid, _r296_t1[0]);
            var r296_unicode = r1_fallback(r296_unicode, _r296_t1[1]);
            var r296_oldid = r1_fallback(r296_oldid, _r296_t1[2]);
            var r296_top = r1_fallback(r296_top, _r296_t1[3]);
            var r296_bot = r1_fallback(r296_bot, _r296_t1[4]);
            var r296_prop = r1_fallback(r296_prop, _r296_t1[5]);
            var r296_shift = r1_fallback(r296_shift, _r296_t1[6]);
            return r270_notGlyph(r296_newid, r296_unicode, r296_oldid, r296_top, r296_bot, r296_prop, -r270_NotGlyphSw * 0.5);
        };
        r270_notGlyph.left = function () {
            var _r301_t6;
            var _r301_t7 = arguments;
            var _r301_t0 = [].slice.call(_r301_t7, 0);
            var _r301_t1 = [];
            var _r301_t2 = 0;
            while (_r301_t2 < _r301_t0.length) {
                if (!(_r301_t0[_r301_t2] instanceof r270_xn$NamedParameterPair$2Lrc9b))
                    _r301_t1.push(_r301_t0[_r301_t2]);
                _r301_t2 = _r301_t2 + 1;
            }
            var _r301_t3 = _r301_t0;
            var _r301_t4 = _r301_t3.length;
            var _r301_t5 = 0;
            while (_r301_t5 < _r301_t4) {
                _r301_t2 = _r301_t3[_r301_t5];
                if (_r301_t2 && _r301_t2 instanceof r270_xn$NamedParameterPair$2Lrc9b && _r301_t2.left === 'newid')
                    r301_newid = _r301_t2.right;
                if (_r301_t2 && _r301_t2 instanceof r270_xn$NamedParameterPair$2Lrc9b && _r301_t2.left === 'unicode')
                    r301_unicode = _r301_t2.right;
                if (_r301_t2 && _r301_t2 instanceof r270_xn$NamedParameterPair$2Lrc9b && _r301_t2.left === 'oldid')
                    r301_oldid = _r301_t2.right;
                if (_r301_t2 && _r301_t2 instanceof r270_xn$NamedParameterPair$2Lrc9b && _r301_t2.left === 'top')
                    r301_top = _r301_t2.right;
                if (_r301_t2 && _r301_t2 instanceof r270_xn$NamedParameterPair$2Lrc9b && _r301_t2.left === 'bot')
                    r301_bot = _r301_t2.right;
                if (_r301_t2 && _r301_t2 instanceof r270_xn$NamedParameterPair$2Lrc9b && _r301_t2.left === 'prop')
                    r301_prop = _r301_t2.right;
                if (_r301_t2 && _r301_t2 instanceof r270_xn$NamedParameterPair$2Lrc9b && _r301_t2.left === 'shift')
                    r301_shift = _r301_t2.right;
                _r301_t5 = _r301_t5 + 1;
            }
            var r301_newid = r1_fallback(r301_newid, _r301_t1[0]);
            var r301_unicode = r1_fallback(r301_unicode, _r301_t1[1]);
            var r301_oldid = r1_fallback(r301_oldid, _r301_t1[2]);
            var r301_top = r1_fallback(r301_top, _r301_t1[3]);
            var r301_bot = r1_fallback(r301_bot, _r301_t1[4]);
            var r301_prop = r1_fallback(r301_prop, _r301_t1[5]);
            var r301_shift = r1_fallback(r301_shift, _r301_t1[6]);
            return r270_notGlyph(r301_newid, r301_unicode, r301_oldid, r301_top, r301_bot, r301_prop, r270_NotGlyphSw * 0.5);
        };
        return r270_notGlyph.generic = function () {
            var _r306_t6;
            var _r306_t7 = arguments;
            var _r306_t0 = [].slice.call(_r306_t7, 0);
            var _r306_t1 = [];
            var _r306_t2 = 0;
            while (_r306_t2 < _r306_t0.length) {
                if (!(_r306_t0[_r306_t2] instanceof r270_xn$NamedParameterPair$2Lrc9b))
                    _r306_t1.push(_r306_t0[_r306_t2]);
                _r306_t2 = _r306_t2 + 1;
            }
            var _r306_t3 = _r306_t0;
            var _r306_t4 = _r306_t3.length;
            var _r306_t5 = 0;
            while (_r306_t5 < _r306_t4) {
                _r306_t2 = _r306_t3[_r306_t5];
                if (_r306_t2 && _r306_t2 instanceof r270_xn$NamedParameterPair$2Lrc9b && _r306_t2.left === 'newid')
                    r306_newid = _r306_t2.right;
                if (_r306_t2 && _r306_t2 instanceof r270_xn$NamedParameterPair$2Lrc9b && _r306_t2.left === 'unicode')
                    r306_unicode = _r306_t2.right;
                if (_r306_t2 && _r306_t2 instanceof r270_xn$NamedParameterPair$2Lrc9b && _r306_t2.left === 'oldid')
                    r306_oldid = _r306_t2.right;
                if (_r306_t2 && _r306_t2 instanceof r270_xn$NamedParameterPair$2Lrc9b && _r306_t2.left === 'top')
                    r306_top = _r306_t2.right;
                if (_r306_t2 && _r306_t2 instanceof r270_xn$NamedParameterPair$2Lrc9b && _r306_t2.left === 'bot')
                    r306_bot = _r306_t2.right;
                if (_r306_t2 && _r306_t2 instanceof r270_xn$NamedParameterPair$2Lrc9b && _r306_t2.left === 'prop')
                    r306_prop = _r306_t2.right;
                if (_r306_t2 && _r306_t2 instanceof r270_xn$NamedParameterPair$2Lrc9b && _r306_t2.left === 'shift')
                    r306_shift = _r306_t2.right;
                if (_r306_t2 && _r306_t2 instanceof r270_xn$NamedParameterPair$2Lrc9b && _r306_t2.left === 'F')
                    r306_F = _r306_t2.right;
                _r306_t5 = _r306_t5 + 1;
            }
            var r306_newid = r1_fallback(r306_newid, _r306_t1[0]);
            var r306_unicode = r1_fallback(r306_unicode, _r306_t1[1]);
            var r306_oldid = r1_fallback(r306_oldid, _r306_t1[2]);
            var r306_top = r1_fallback(r306_top, _r306_t1[3]);
            var r306_bot = r1_fallback(r306_bot, _r306_t1[4]);
            var r306_prop = r1_fallback(r306_prop, _r306_t1[5]);
            var r306_shift = r1_fallback(r306_shift, _r306_t1[6]);
            var r306_F = r1_fallback(r306_F, _r306_t1[7]);
            return r270_notGlyphGeneric(r306_newid, r306_unicode, r306_oldid, r306_top, r306_bot, r306_prop, r306_shift, r306_F);
        };
    });
    return void 0;
});
