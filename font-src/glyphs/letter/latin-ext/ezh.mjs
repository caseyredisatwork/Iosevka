'use strict';
import * as _s0_t0 from '../../../support/utils.mjs';
import * as _s0_t1 from '../../../support/gr.mjs';
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
var r1_Dotless = _r1_t9.Dotless;
var r1_CvDecompose = _r1_t9.CvDecompose;
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
    r270_xn$Capture_Ext$2Lrc2b['$defineGlyphBlockImpl$'](r270_xn$Capture_Ext$2Lrc2b, 'Letter-Latin-Ezh', function (r271_xn$Capture$2Lrc8, r271_xn$ExportCapture$2Lrc4b) {
        var _r271_t7, _r271_t8;
        var _r271_t0 = r271_xn$Capture$2Lrc8;
        var r271_xn$createAndSaveGlyphImpl$2Lrc3c = _r271_t0['$createAndSaveGlyphImpl$'];
        var r271_xn$NamedParameterPair$2Lrc9b = _r271_t0['$NamedParameterPair$'];
        var r271_xn$assignUnicodeImpl$2Lrc8b = _r271_t0['$assignUnicodeImpl$'];
        var r271_xn$execState$2Lrc0b = _r271_t0['$execState$'];
        var r271_para = _r271_t0.para;
        var r271_MarkSet = _r271_t0.MarkSet;
        var r271_AS_BASE = _r271_t0.AS_BASE;
        var r271_ALSO_METRICS = _r271_t0.ALSO_METRICS;
        var _r271_t1 = r271_xn$Capture$2Lrc8.Metrics;
        var r271_SB = _r271_t1.SB;
        var r271_CAP = _r271_t1.CAP;
        var r271_XH = _r271_t1.XH;
        var r271_Ascender = _r271_t1.Ascender;
        var r271_Descender = _r271_t1.Descender;
        var r271_HVContrast = _r271_t1.HVContrast;
        var r271_Downward = _r271_t1.Downward;
        var r271_Rightward = _r271_t1.Rightward;
        var r271_Leftward = _r271_t1.Leftward;
        var r271_OX = _r271_t1.OX;
        var r271_Hook = _r271_t1.Hook;
        var r271_Stroke = _r271_t1.Stroke;
        var r271_VJut = _r271_t1.VJut;
        var r271_SLAB = _r271_t1.SLAB;
        var r271_HalfStroke = _r271_t1.HalfStroke;
        var r271_RightSB = _r271_t1.RightSB;
        var r271_Middle = _r271_t1.Middle;
        var r271_SideJut = _r271_t1.SideJut;
        var r271_SmallArchDepthA = _r271_t1.SmallArchDepthA;
        var r271_SmallArchDepthB = _r271_t1.SmallArchDepthB;
        var r271_CorrectionOMidS = _r271_t1.CorrectionOMidS;
        var r271_AdviceStroke2 = _r271_t1.AdviceStroke2;
        var _r271_t2 = r271_xn$Capture$2Lrc8.SpiroFns;
        var r271_g4 = _r271_t2.g4;
        var r271_corner = _r271_t2.corner;
        var r271_flat = _r271_t2.flat;
        var r271_curl = _r271_t2.curl;
        var r271_widths = _r271_t2.widths;
        var r271_heading = _r271_t2.heading;
        var r271_archv = _r271_t2.archv;
        var r271_arcvh = _r271_t2.arcvh;
        var r271_dispiro = _r271_t2.dispiro;
        var r271_xn$spirooutline$1aao = _r271_t2['spiro-outline'];
        var _r271_t3 = r271_xn$Capture$2Lrc8.BooleFns;
        var r271_union = _r271_t3.union;
        var _r271_t4 = r271_xn$Capture$2Lrc8.CommonShapes.resolve();
        var r271_HSerif = _r271_t4.HSerif;
        var r271_VSerif = _r271_t4.VSerif;
        var r271_HBar = _r271_t4.HBar;
        var r271_VBar = _r271_t4.VBar;
        var r271_hookend = _r271_t4.hookend;
        var _r271_t5 = r271_xn$Capture$2Lrc8['Common-Derivatives'].resolve();
        var r271_xn$selectvariant$7Hrq = _r271_t5['select-variant'];
        var r271_xn$referglyph$1aao = _r271_t5['refer-glyph'];
        var r271_alias = _r271_t5.alias;
        var _r271_t6 = r271_xn$Capture$2Lrc8['Letter-Shared-Shapes'].resolve();
        var r271_CurlyTail = _r271_t6.CurlyTail;
        var r271_SerifedArcEnd = _r271_t6.SerifedArcEnd;
        var r271_RetroflexHook = _r271_t6.RetroflexHook;
        var r271_StdTerminalShape = function (r275_top, r275_bot, r275_yMidBar) {
            var _r275_t0, _r275_t1;
            var r275_hookDepth = r271_Hook * (r275_top - r275_bot) / r1_fallback(r271_para.cap0, r271_CAP);
            var r275_pArc = r271_SmallArchDepthB / (r271_SmallArchDepthA + r271_SmallArchDepthB);
            return [
                r271_g4(r271_RightSB - r271_OX, r1_mix(r275_yMidBar, r275_bot, r275_pArc)),
                r271_hookend(r275_bot),
                r271_g4(r271_SB, r275_bot + r275_hookDepth)
            ];
        };
        var r271_HooklessTerminalShape = function (r276_p) {
            var _r276_t0, _r276_t1;
            return function (r277_top, r277_bot, r277_yMidBar) {
                var _r277_t0, _r277_t1;
                return [r271_g4.down.mid(r271_RightSB - r271_OX, r1_mix(r277_yMidBar, r277_bot, r276_p), r271_heading(r271_Downward))];
            };
        };
        r271_xn$ExportCapture$2Lrc4b(function () {
            var _r279_t0, _r279_t1;
            return { 'EzhShape': r271_EzhShape };
        });
        var r271_EzhShape = function () {
            var _r280_t6;
            var _r280_t7 = arguments;
            var _r280_t0 = [].slice.call(_r280_t7, 0);
            var _r280_t1 = [];
            var _r280_t2 = 0;
            while (_r280_t2 < _r280_t0.length) {
                if (!(_r280_t0[_r280_t2] instanceof r271_xn$NamedParameterPair$2Lrc9b))
                    _r280_t1.push(_r280_t0[_r280_t2]);
                _r280_t2 = _r280_t2 + 1;
            }
            var _r280_t3 = _r280_t0;
            var _r280_t4 = _r280_t3.length;
            var _r280_t5 = 0;
            while (_r280_t5 < _r280_t4) {
                _r280_t2 = _r280_t3[_r280_t5];
                if (_r280_t2 && _r280_t2 instanceof r271_xn$NamedParameterPair$2Lrc9b && _r280_t2.left === 'top')
                    r280_top = _r280_t2.right;
                if (_r280_t2 && _r280_t2 instanceof r271_xn$NamedParameterPair$2Lrc9b && _r280_t2.left === 'bot')
                    r280_bot = _r280_t2.right;
                if (_r280_t2 && _r280_t2 instanceof r271_xn$NamedParameterPair$2Lrc9b && _r280_t2.left === 'pleft')
                    r280_pleft = _r280_t2.right;
                if (_r280_t2 && _r280_t2 instanceof r271_xn$NamedParameterPair$2Lrc9b && _r280_t2.left === 'pright')
                    r280_pright = _r280_t2.right;
                if (_r280_t2 && _r280_t2 instanceof r271_xn$NamedParameterPair$2Lrc9b && _r280_t2.left === 'terminalShape')
                    r280_terminalShape = _r280_t2.right;
                _r280_t5 = _r280_t5 + 1;
            }
            var r280_top = r1_fallback(r280_top, _r280_t1[0]);
            var r280_bot = r1_fallback(r280_bot, _r280_t1[1]);
            var r280_pleft = r1_fallback(r280_pleft, _r280_t1[2]);
            var r280_pright = r1_fallback(r280_pright, _r280_t1[3]);
            var r280_terminalShape = r1_fallback(r280_terminalShape, _r280_t1[4]);
            return function () {
                var _r286_t1;
                var _r286_t0 = this;
                var r286_currentGlyph = _r286_t0;
                var r286_cor = 1.2 * r271_HVContrast;
                var r286_yMidBar = r1_mix(r280_bot, r280_top, 0.6);
                var r286_ezhLeft = r1_mix(r271_SB, r271_RightSB, r1_fallback(r280_pleft, 0.2));
                var r286_ezhRight = r1_mix(r271_SB, r271_RightSB, r1_fallback(r280_pright, 0.925));
                r286_currentGlyph.include(r271_union(r271_HBar.t(r271_SB, r286_ezhRight, r280_top), r271_xn$spirooutline$1aao(r271_corner(r286_ezhLeft, r286_yMidBar), r271_corner(r286_ezhLeft + r271_Stroke * r286_cor, r286_yMidBar - r271_HalfStroke), r271_corner(r286_ezhLeft + r271_Stroke * r286_cor, r286_yMidBar), r271_corner(r286_ezhRight, r280_top - r271_Stroke), r271_corner(r286_ezhRight - r271_Stroke * r286_cor, r280_top - r271_Stroke)), r271_dispiro(r271_widths.rhs(), r271_flat(r286_ezhLeft, r286_yMidBar, r271_heading(r271_Rightward)), r271_curl(r271_Middle - r271_CorrectionOMidS, r286_yMidBar), r271_archv(), r1_fallback(r280_terminalShape, r271_StdTerminalShape)(r280_top, r280_bot, r286_yMidBar))));
                if (r271_SLAB)
                    r286_currentGlyph.include(r271_VSerif.dl(r271_SB, r280_top, r271_VJut));
                return void 0;
            };
        };
        r271_xn$ExportCapture$2Lrc4b(function () {
            var _r290_t0, _r290_t1;
            return { 'RevEzhShape': r271_RevEzhShape };
        });
        var r271_RevEzhShape = function () {
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
                if (_r291_t2 && _r291_t2 instanceof r271_xn$NamedParameterPair$2Lrc9b && _r291_t2.left === 'top')
                    r291_top = _r291_t2.right;
                if (_r291_t2 && _r291_t2 instanceof r271_xn$NamedParameterPair$2Lrc9b && _r291_t2.left === 'bot')
                    r291_bot = _r291_t2.right;
                if (_r291_t2 && _r291_t2 instanceof r271_xn$NamedParameterPair$2Lrc9b && _r291_t2.left === 'pleft')
                    r291_pleft = _r291_t2.right;
                if (_r291_t2 && _r291_t2 instanceof r271_xn$NamedParameterPair$2Lrc9b && _r291_t2.left === 'pright')
                    r291_pright = _r291_t2.right;
                if (_r291_t2 && _r291_t2 instanceof r271_xn$NamedParameterPair$2Lrc9b && _r291_t2.left === 'hookless')
                    r291_hookless = _r291_t2.right;
                if (_r291_t2 && _r291_t2 instanceof r271_xn$NamedParameterPair$2Lrc9b && _r291_t2.left === 'ada')
                    r291_ada = _r291_t2.right;
                if (_r291_t2 && _r291_t2 instanceof r271_xn$NamedParameterPair$2Lrc9b && _r291_t2.left === 'adb')
                    r291_adb = _r291_t2.right;
                if (_r291_t2 && _r291_t2 instanceof r271_xn$NamedParameterPair$2Lrc9b && _r291_t2.left === 'diagCoeff')
                    r291_diagCoeff = _r291_t2.right;
                if (_r291_t2 && _r291_t2 instanceof r271_xn$NamedParameterPair$2Lrc9b && _r291_t2.left === 'pyBar')
                    r291_pyBar = _r291_t2.right;
                _r291_t5 = _r291_t5 + 1;
            }
            var r291_top = r1_fallback(r291_top, _r291_t1[0]);
            var r291_bot = r1_fallback(r291_bot, _r291_t1[1]);
            var r291_pleft = r1_fallback(r291_pleft, _r291_t1[2]);
            var r291_pright = r1_fallback(r291_pright, _r291_t1[3]);
            var r291_hookless = r1_fallback(r291_hookless, _r291_t1[4]);
            var r291_ada = r1_fallback(r291_ada, _r291_t1[5], r271_SmallArchDepthA);
            var r291_adb = r1_fallback(r291_adb, _r291_t1[6], r271_SmallArchDepthB);
            var r291_diagCoeff = r1_fallback(r291_diagCoeff, _r291_t1[7], 1.2);
            var r291_pyBar = r1_fallback(r291_pyBar, _r291_t1[8], 0.6);
            return function () {
                var _r297_t1;
                var _r297_t0 = this;
                var r297_currentGlyph = _r297_t0;
                var r297_cor = r291_diagCoeff * r271_HVContrast;
                var r297_yMidBar = r271_RevEzhShape.yMidBar(r291_top, r291_bot, r291_pyBar);
                var r297_ezhRight = r1_mix(r271_SB, r271_RightSB, r1_fallback(r291_pright, 0.8));
                var r297_ezhLeft = r1_mix(r271_SB, r271_RightSB, r1_fallback(r291_pleft, 0.075));
                r297_currentGlyph.include(r271_HBar.t(r297_ezhLeft, r271_RightSB, r291_top));
                r297_currentGlyph.include(r271_xn$spirooutline$1aao(r271_corner(r297_ezhRight, r297_yMidBar), r271_corner(r297_ezhRight - r271_Stroke * r297_cor, r297_yMidBar - r271_HalfStroke), r271_corner(r297_ezhRight - r271_Stroke * r297_cor, r297_yMidBar), r271_corner(r297_ezhLeft, r291_top - r271_Stroke), r271_corner(r297_ezhLeft + r271_Stroke * r297_cor, r291_top - r271_Stroke)));
                r297_currentGlyph.include(r271_dispiro(r271_widths.lhs(), r271_flat(r297_ezhRight, r297_yMidBar, r271_heading(r271_Leftward)), r271_curl(r271_Middle + r271_CorrectionOMidS, r297_yMidBar), r271_archv(), r291_hookless ? [r271_g4.down.mid(r271_SB + r271_OX, r271_RevEzhShape.yLoopLeft(r291_top, r291_bot, r291_pyBar, r291_ada, r291_adb))] : [
                    r271_g4(r271_SB + r271_OX, r271_RevEzhShape.yLoopLeft(r291_top, r291_bot, r291_pyBar, r291_ada, r291_adb)),
                    r271_hookend(r291_bot),
                    r271_g4(r271_RightSB, r291_bot + r271_Hook * ((r291_top - r291_bot) / r271_CAP))
                ]));
                if (r271_SLAB)
                    r297_currentGlyph.include(r271_VSerif.dr(r271_RightSB, r291_top, r271_VJut));
                return void 0;
            };
        };
        r271_RevEzhShape.yMidBar = function (r302_top, r302_bot, r302_pyBar) {
            var _r302_t0, _r302_t1;
            return r1_mix(r302_bot, r302_top, r302_pyBar);
        };
        r271_RevEzhShape.yLoopLeft = function (r303_top, r303_bot, r303_pyBar, r303_ada, r303_adb) {
            var _r303_t0, _r303_t1;
            return r1_mix(r271_RevEzhShape.yMidBar(r303_top, r303_bot, r303_pyBar), r303_bot, r303_ada / (r303_ada + r303_adb));
        };
        r271_xn$createAndSaveGlyphImpl$2Lrc3c('Ezh', 439, function () {
            var _r306_t1;
            var _r306_t0 = this;
            var r306_currentGlyph = _r306_t0;
            r306_currentGlyph.include(r271_MarkSet.capital());
            r306_currentGlyph.include(r271_EzhShape(r271_CAP, 0));
            return void 0;
        });
        r271_xn$createAndSaveGlyphImpl$2Lrc3c('smcpEzh', 7459, function () {
            var _r311_t1;
            var _r311_t0 = this;
            var r311_currentGlyph = _r311_t0;
            r311_currentGlyph.include(r271_MarkSet.e());
            r311_currentGlyph.include(r271_EzhShape(r271_XH, 0));
            return void 0;
        });
        r271_xn$createAndSaveGlyphImpl$2Lrc3c('ezh', 658, function () {
            var _r316_t1;
            var _r316_t0 = this;
            var r316_currentGlyph = _r316_t0;
            r316_currentGlyph.include(r271_MarkSet.p());
            r316_currentGlyph.include(r271_EzhShape(r271_XH, r271_Descender));
            return void 0;
        });
        r271_alias('cyrl/Ezh', 1248, 'Ezh');
        r271_alias('cyrl/ezh', 1249, 'ezh');
        r271_xn$createAndSaveGlyphImpl$2Lrc3c('revEzh', 440, function () {
            var _r321_t1;
            var _r321_t0 = this;
            var r321_currentGlyph = _r321_t0;
            r321_currentGlyph.include(r271_MarkSet.capital());
            r321_currentGlyph.include(r271_RevEzhShape(r271_CAP, 0));
            return void 0;
        });
        r271_xn$createAndSaveGlyphImpl$2Lrc3c('revezh', 441, function () {
            var _r326_t1;
            var _r326_t0 = this;
            var r326_currentGlyph = _r326_t0;
            r326_currentGlyph.include(r271_MarkSet.p());
            r326_currentGlyph.include(r271_RevEzhShape(r271_XH, r271_Descender));
            return void 0;
        });
        r271_xn$createAndSaveGlyphImpl$2Lrc3c('lyogh.serifless', null, function () {
            var _r331_t1;
            var _r331_t0 = this;
            var r331_currentGlyph = _r331_t0;
            r331_currentGlyph.include(r271_MarkSet.bp());
            r331_currentGlyph.include(r271_EzhShape(r271_XH, r271_Descender, 0.4));
            r331_currentGlyph.include(r271_VBar.l(r271_SB, r271_XH * 0.1, r271_Ascender));
            return void 0;
        });
        r271_xn$createAndSaveGlyphImpl$2Lrc3c('lyogh.hooky', null, function () {
            var _r337_t1;
            var _r337_t0 = this;
            var r337_currentGlyph = _r337_t0;
            r337_currentGlyph.include(r271_xn$referglyph$1aao('lyogh.serifless'), r271_AS_BASE, r271_ALSO_METRICS);
            r337_currentGlyph.include(r271_HSerif.lt(r271_SB, r271_Ascender, r271_SideJut));
            return void 0;
        });
        r271_xn$selectvariant$7Hrq('lyogh', 622);
        r271_xn$createAndSaveGlyphImpl$2Lrc3c('lyoghRTail.serifless', null, function () {
            var _r342_t1;
            var _r342_t0 = this;
            var r342_currentGlyph = _r342_t0;
            r342_currentGlyph.include(r271_MarkSet.b());
            r342_currentGlyph.include(r271_EzhShape(r271_XH, 0, 0.4));
            r342_currentGlyph.include(r271_VBar.l(r271_SB, 0, r271_Ascender));
            r342_currentGlyph.include(r271_RetroflexHook.lExt(r271_SB, 0));
            return void 0;
        });
        r271_xn$createAndSaveGlyphImpl$2Lrc3c('lyoghRTail.hooky', null, function () {
            var _r349_t1;
            var _r349_t0 = this;
            var r349_currentGlyph = _r349_t0;
            r349_currentGlyph.include(r271_xn$referglyph$1aao('lyoghRTail.serifless'), r271_AS_BASE, r271_ALSO_METRICS);
            r349_currentGlyph.include(r271_HSerif.lt(r271_SB, r271_Ascender, r271_SideJut));
            return void 0;
        });
        r271_xn$selectvariant$7Hrq('lyoghRTail', 122629, new r271_xn$NamedParameterPair$2Lrc9b('follow', 'lyogh'));
        r271_xn$createAndSaveGlyphImpl$2Lrc3c('ezhTail', 442, function () {
            var _r355_t1;
            var _r355_t0 = this;
            var r355_currentGlyph = _r355_t0;
            r355_currentGlyph.include(r271_MarkSet.p());
            var r355_b = r1_mix(r271_Descender, r271_XH, 0.25);
            r355_currentGlyph.include(r271_EzhShape(r271_XH, r355_b, new r271_xn$NamedParameterPair$2Lrc9b('terminalShape', r271_HooklessTerminalShape(0.5))));
            var r355_y = r1_mix(r1_mix(r355_b, r271_XH, 0.6), r355_b, 0.5);
            r355_currentGlyph.include(r271_dispiro(r271_widths.rhs(), r271_g4.down.mid(r271_RightSB - r271_OX, r355_y, r271_heading(r271_Downward)), r271_arcvh(), r271_flat(r1_mix(r271_SB, r271_RightSB, 0.45), r355_b), r271_curl(r1_mix(r271_SB, r271_RightSB, 0.4), r355_b), r271_archv(), r271_g4(r271_SB + r271_Stroke * r271_HVContrast, r1_mix(r271_Descender + r271_Stroke, r355_b, 0.5)), r271_arcvh(), r271_flat(r1_mix(r271_SB, r271_RightSB, 0.4), r271_Descender + r271_Stroke), r271_curl(r271_RightSB, r271_Descender + r271_Stroke)));
            return void 0;
        });
        r271_xn$createAndSaveGlyphImpl$2Lrc3c('ezhCurlyTail', 659, function () {
            var _r362_t1;
            var _r362_t0 = this;
            var r362_currentGlyph = _r362_t0;
            r362_currentGlyph.include(r271_MarkSet.p());
            var r362_p = r271_SmallArchDepthB / (r271_SmallArchDepthA + r271_SmallArchDepthB);
            r362_currentGlyph.include(r271_EzhShape(r271_XH, r271_Descender, new r271_xn$NamedParameterPair$2Lrc9b('terminalShape', r271_HooklessTerminalShape(r362_p))));
            var r362_fine = r271_AdviceStroke2(3, 5, r271_XH - r271_Descender);
            var r362_rinner = (r271_XH * 0.4 - r362_fine * 1.5) / 2;
            var r362_m1 = r271_RightSB - r271_Stroke * r271_HVContrast - r271_OX;
            var r362_x2 = r271_RightSB - r271_HalfStroke;
            var r362_y2 = r271_Descender;
            r362_currentGlyph.include(r271_dispiro(r271_widths.lhs(), r271_g4.down.mid(r362_m1, r1_mix(r1_mix(r271_Descender, r271_XH, 0.6), r271_Descender, r362_p), r271_heading(r271_Downward)), r271_CurlyTail(r362_fine, r362_rinner, r362_m1, r271_Descender, r271_SB, r362_x2, r362_y2)));
            return void 0;
        });
        var r271_RetroflexConnectionTerminal = function (r367_top, r367_bot, r367_yMidBar) {
            var _r367_t0, _r367_t1;
            var r367_hookDepth = r271_Hook * (r367_top - r367_bot) / r1_fallback(r271_para.cap0, r271_CAP);
            var r367_pArc = r271_SmallArchDepthB / (r271_SmallArchDepthA + r271_SmallArchDepthB);
            return [
                r271_g4(r271_RightSB - r271_OX, r1_mix(r367_yMidBar, r367_bot, r367_pArc)),
                r271_SerifedArcEnd.RtlRhs(r271_SB, r271_Middle, r367_bot, r271_Stroke, r367_hookDepth)
            ];
        };
        return r271_xn$createAndSaveGlyphImpl$2Lrc3c('ezhRetroflexHook', 7578, function () {
            var _r370_t1;
            var _r370_t0 = this;
            var r370_currentGlyph = _r370_t0;
            r370_currentGlyph.include(r271_MarkSet.p());
            r370_currentGlyph.include(r271_EzhShape(r271_XH, 0, new r271_xn$NamedParameterPair$2Lrc9b('terminalShape', r271_RetroflexConnectionTerminal)));
            r370_currentGlyph.include(r271_RetroflexHook.l(r271_SB, 0, new r271_xn$NamedParameterPair$2Lrc9b('yAttach', r271_Hook)));
            return void 0;
        });
    });
    return void 0;
});
