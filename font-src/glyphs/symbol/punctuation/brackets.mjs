'use strict';
import * as _s0_t0 from '../../../support/utils.mjs';
import * as _s0_t1 from '../../../support/gr.mjs';
import * as _s0_t2 from '../../../meta/aesthetics.mjs';
var _s0_t3;
export {
    _s0_t3 as apply
};
var r1_apply, _r1_t0, _r1_t1, _r1_t2, _r1_t3, _r1_t4, _r1_t5, _r1_t6, _r1_t7;
var _r1_t8 = _s0_t0;
var r1_mix = _r1_t8.mix;
var r1_linreg = _r1_t8.linreg;
var r1_clamp = _r1_t8.clamp;
var r1_fallback = _r1_t8.fallback;
var _r1_t9 = _s0_t1;
var r1_Joining = _r1_t9.Joining;
var _r1_t10 = _s0_t2;
var r1_DesignParameters = _r1_t10.DesignParameters;
var r1_xn$GlyphBlocks$2Lrc2b = [];
_s0_t3 = r1_apply = function () {
    var r267_block, _r267_t4, _r267_t6;
    var _r267_t3 = this;
    var _r267_t0 = r1_xn$GlyphBlocks$2Lrc2b;
    var _r267_t1 = _r267_t0.length;
    var _r267_t2 = 0;
    var _r267_t5 = _r267_t2 < _r267_t1;
    while (_r267_t5) {
        _r267_t6 = (r267_block = _r267_t0[_r267_t2], r267_block(_r267_t3), _r267_t2 = _r267_t2 + 1);
        _r267_t5 = _r267_t2 < _r267_t1;
    }
    return _r267_t6;
};
r1_xn$GlyphBlocks$2Lrc2b.push(function (r271_xn$Capture_Ext$2Lrc2b) {
    var _r271_t0, _r271_t1;
    r271_xn$Capture_Ext$2Lrc2b['$defineGlyphBlockImpl$'](r271_xn$Capture_Ext$2Lrc2b, 'Symbol-Punctuation-Brackets', function (r272_xn$Capture$2Lrc8, r272_xn$ExportCapture$2Lrc4b) {
        var _r272_t6, _r272_t7, _r272_t8, _r272_tag9, _r272_t10, _r272_tag11, _r272_t12, _r272_tag13, _r272_t14, _r272_tag15, _r272_t16, _r272_tag17, _r272_t18, _r272_tag19, _r272_t20, _r272_tag21, _r272_t22, _r272_tag23;
        var _r272_t0 = r272_xn$Capture$2Lrc8;
        var r272_xn$createAndSaveGlyphImpl$2Lrc3c = _r272_t0['$createAndSaveGlyphImpl$'];
        var r272_xn$NamedParameterPair$2Lrc9b = _r272_t0['$NamedParameterPair$'];
        var r272_xn$assignUnicodeImpl$2Lrc8b = _r272_t0['$assignUnicodeImpl$'];
        var r272_xn$execState$2Lrc0b = _r272_t0['$execState$'];
        var r272_AS_BASE = _r272_t0.AS_BASE;
        var r272_ALSO_METRICS = _r272_t0.ALSO_METRICS;
        var r272_fontMetrics = _r272_t0.fontMetrics;
        var _r272_t1 = r272_xn$Capture$2Lrc8.Metrics;
        var r272_DesignParameters = _r272_t1.DesignParameters;
        var r272_Width = _r272_t1.Width;
        var r272_SB = _r272_t1.SB;
        var r272_SymbolMid = _r272_t1.SymbolMid;
        var r272_ParenTop = _r272_t1.ParenTop;
        var r272_ParenBot = _r272_t1.ParenBot;
        var r272_HVContrast = _r272_t1.HVContrast;
        var r272_Upward = _r272_t1.Upward;
        var r272_Downward = _r272_t1.Downward;
        var r272_Leftward = _r272_t1.Leftward;
        var r272_O = _r272_t1.O;
        var r272_Stroke = _r272_t1.Stroke;
        var r272_CThin = _r272_t1.CThin;
        var r272_EssUpper = _r272_t1.EssUpper;
        var r272_HalfStroke = _r272_t1.HalfStroke;
        var r272_RightSB = _r272_t1.RightSB;
        var r272_Middle = _r272_t1.Middle;
        var r272_AdviceStroke = _r272_t1.AdviceStroke;
        var r272_OperatorStroke = _r272_t1.OperatorStroke;
        var _r272_t2 = r272_xn$Capture$2Lrc8.SpiroFns;
        var r272_g4 = _r272_t2.g4;
        var r272_corner = _r272_t2.corner;
        var r272_flat = _r272_t2.flat;
        var r272_curl = _r272_t2.curl;
        var r272_end = _r272_t2.end;
        var r272_straight = _r272_t2.straight;
        var r272_widths = _r272_t2.widths;
        var r272_heading = _r272_t2.heading;
        var r272_alsoThru = _r272_t2.alsoThru;
        var r272_quadControls = _r272_t2.quadControls;
        var r272_archv = _r272_t2.archv;
        var r272_arcvh = _r272_t2.arcvh;
        var r272_dispiro = _r272_t2.dispiro;
        var r272_xn$spirooutline$1aao = _r272_t2['spiro-outline'];
        var _r272_t3 = r272_xn$Capture$2Lrc8.BooleFns;
        var r272_union = _r272_t3.union;
        var r272_intersection = _r272_t3.intersection;
        var _r272_t4 = r272_xn$Capture$2Lrc8.CommonShapes.resolve();
        var r272_Rect = _r272_t4.Rect;
        var r272_HBar = _r272_t4.HBar;
        var r272_VBar = _r272_t4.VBar;
        var r272_FlipAround = _r272_t4.FlipAround;
        var r272_ForceUpright = _r272_t4.ForceUpright;
        var r272_MaskAbove = _r272_t4.MaskAbove;
        var r272_MaskBelow = _r272_t4.MaskBelow;
        var _r272_t5 = r272_xn$Capture$2Lrc8['Common-Derivatives'].resolve();
        var r272_xn$selectvariant$7Hrq = _r272_t5['select-variant'];
        var r272_xn$referglyph$1aao = _r272_t5['refer-glyph'];
        var r272_alias = _r272_t5.alias;
        var r272_turned = _r272_t5.turned;
        var r272_MosaicTop = r272_fontMetrics.os2.sTypoAscender;
        var r272_MosaicBottom = r272_fontMetrics.os2.sTypoDescender;
        var r272_MosaicHeight = r272_MosaicTop - r272_MosaicBottom;
        var r272_Paren = function () {
            var r277_Dim, r277_Shape, r277_UpperShape, r277_ExtensionShape, r277_LowerShape, r277_ShapeMask;
            var r277_exports = {};
            r277_exports.Dim = r277_Dim = function () {
                var _r285_t6;
                var _r285_t7 = arguments;
                var _r285_t0 = [].slice.call(_r285_t7, 0);
                var _r285_t1 = [];
                var _r285_t2 = 0;
                while (_r285_t2 < _r285_t0.length) {
                    if (!(_r285_t0[_r285_t2] instanceof r272_xn$NamedParameterPair$2Lrc9b))
                        _r285_t1.push(_r285_t0[_r285_t2]);
                    _r285_t2 = _r285_t2 + 1;
                }
                var _r285_t3 = _r285_t0;
                var _r285_t4 = _r285_t3.length;
                var _r285_t5 = 0;
                while (_r285_t5 < _r285_t4) {
                    _r285_t2 = _r285_t3[_r285_t5];
                    if (_r285_t2 && _r285_t2 instanceof r272_xn$NamedParameterPair$2Lrc9b && _r285_t2.left === 'delta')
                        r285_delta = _r285_t2.right;
                    if (_r285_t2 && _r285_t2 instanceof r272_xn$NamedParameterPair$2Lrc9b && _r285_t2.left === 'dp')
                        r285_dp = _r285_t2.right;
                    if (_r285_t2 && _r285_t2 instanceof r272_xn$NamedParameterPair$2Lrc9b && _r285_t2.left === 'sw')
                        r285_sw = _r285_t2.right;
                    _r285_t5 = _r285_t5 + 1;
                }
                var r285_delta = r1_fallback(r285_delta, _r285_t1[0], 0);
                var r285_dp = r1_fallback(r285_dp, _r285_t1[1], r1_DesignParameters);
                var r285_sw = r1_fallback(r285_sw, _r285_t1[2], r272_Stroke);
                return {
                    'outside': r1_mix(r272_SB, r272_RightSB, r285_dp.parenOutside) - r285_delta - r285_dp.parenOutsideSwAdj * r272_HVContrast * r285_sw + r272_O,
                    'inside': r1_mix(r272_SB, r272_RightSB, r285_dp.parenInside) - r285_dp.parenInsideSwAdj * r272_HVContrast * r285_sw,
                    'bottom': r1_mix(r272_SymbolMid, r272_ParenBot, 1 + r285_dp.parenOvershoot) - r285_delta,
                    'top': r1_mix(r272_SymbolMid, r272_ParenTop, 1 + r285_dp.parenOvershoot) + r285_delta,
                    'mid': r272_SymbolMid
                };
            };
            r277_exports.Shape = r277_Shape = function () {
                var _r291_t6;
                var _r291_t7 = arguments;
                var _r291_t0 = [].slice.call(_r291_t7, 0);
                var _r291_t1 = [];
                var _r291_t2 = 0;
                while (_r291_t2 < _r291_t0.length) {
                    if (!(_r291_t0[_r291_t2] instanceof r272_xn$NamedParameterPair$2Lrc9b))
                        _r291_t1.push(_r291_t0[_r291_t2]);
                    _r291_t2 = _r291_t2 + 1;
                }
                var _r291_t3 = _r291_t0;
                var _r291_t4 = _r291_t3.length;
                var _r291_t5 = 0;
                while (_r291_t5 < _r291_t4) {
                    _r291_t2 = _r291_t3[_r291_t5];
                    if (_r291_t2 && _r291_t2 instanceof r272_xn$NamedParameterPair$2Lrc9b && _r291_t2.left === 'sw')
                        r291_sw = _r291_t2.right;
                    if (_r291_t2 && _r291_t2 instanceof r272_xn$NamedParameterPair$2Lrc9b && _r291_t2.left === 'dp')
                        r291_dp = _r291_t2.right;
                    _r291_t5 = _r291_t5 + 1;
                }
                var r291_sw = r1_fallback(r291_sw, _r291_t1[0], r272_Stroke);
                var r291_dp = r1_fallback(r291_dp, _r291_t1[1], r1_DesignParameters);
                var r291_dim = r277_Dim(0, r291_dp, new r272_xn$NamedParameterPair$2Lrc9b('sw', r291_sw));
                return r272_dispiro(r272_widths.lhs(r291_sw), r272_g4(r291_dim.inside, r291_dim.top), r272_quadControls(1, 1 - r291_dp.parenCurliness), r272_g4(r291_dim.outside, r291_dim.mid), r272_quadControls(0, r291_dp.parenCurliness), r272_g4(r291_dim.inside, r291_dim.bottom));
            };
            r277_exports.UpperShape = r277_UpperShape = function (r298_sw) {
                var _r298_leti0, _r298_t1, _r298_t2, _r298_t4, _r298_tag5;
                var _r298_t3 = r277_Dim(0, new r272_xn$NamedParameterPair$2Lrc9b('sw', r298_sw));
                return function (_r298_leti0) {
                    var r299_dim = _r298_leti0;
                    return r272_dispiro(r272_widths.lhs(r298_sw), r272_g4(r299_dim.inside, r299_dim.top), r272_quadControls(1, 1 - r1_DesignParameters.parenCurliness), r272_g4.down.end(r299_dim.outside, r272_MosaicBottom, r272_heading(r272_Downward)));
                }(_r298_t3);
            };
            r277_exports.ExtensionShape = r277_ExtensionShape = function (r302_sw) {
                var _r302_leti0, _r302_t1, _r302_t2, _r302_t4, _r302_tag5;
                var _r302_t3 = r277_Dim(0, new r272_xn$NamedParameterPair$2Lrc9b('sw', r302_sw));
                return function (_r302_leti0) {
                    var r303_dim = _r302_leti0;
                    return r272_dispiro(r272_widths.lhs(r302_sw), r272_g4.down.start(r303_dim.outside, r272_MosaicTop, r272_heading(r272_Downward)), r272_g4.down.end(r303_dim.outside, r272_MosaicBottom, r272_heading(r272_Downward)));
                }(_r302_t3);
            };
            r277_exports.LowerShape = r277_LowerShape = function (r306_sw) {
                var _r306_leti0, _r306_t1, _r306_t2, _r306_t4, _r306_tag5;
                var _r306_t3 = r277_Dim(0, new r272_xn$NamedParameterPair$2Lrc9b('sw', r306_sw));
                return function (_r306_leti0) {
                    var r307_dim = _r306_leti0;
                    return r272_dispiro(r272_widths.lhs(r306_sw), r272_g4.down.start(r307_dim.outside, r272_MosaicTop, r272_heading(r272_Downward)), r272_quadControls(0, r1_DesignParameters.parenCurliness), r272_g4(r307_dim.inside, r307_dim.bottom));
                }(_r306_t3);
            };
            r277_exports.ShapeMask = r277_ShapeMask = function (r310_sw, r310_delta) {
                var _r310_leti0, _r310_t1, _r310_t2, _r310_t4, _r310_tag5;
                var _r310_t3 = r277_Dim(r310_delta, new r272_xn$NamedParameterPair$2Lrc9b('sw', r310_sw));
                return function (_r310_leti0) {
                    var r311_dim = _r310_leti0;
                    return r272_xn$spirooutline$1aao(r272_corner(r311_dim.inside, r311_dim.top), r272_quadControls(1, 1 - r1_DesignParameters.parenCurliness), r272_g4(r311_dim.outside, r311_dim.mid), r272_quadControls(0, r1_DesignParameters.parenCurliness), r272_corner(r311_dim.inside, r311_dim.bottom));
                }(_r310_t3);
            };
            return r277_exports;
        }();
        (function () {
            r272_xn$createAndSaveGlyphImpl$2Lrc3c('parenLeft.normal', null, function () {
                var _r317_t1;
                var _r317_t0 = this;
                var r317_currentGlyph = _r317_t0;
                r317_currentGlyph.include(r272_Paren.Shape(r272_Stroke));
                return void 0;
            });
            r272_xn$createAndSaveGlyphImpl$2Lrc3c('parenLeft.largeContour', null, function () {
                var _r321_t1;
                var _r321_t0 = this;
                var r321_currentGlyph = _r321_t0;
                var r321_dp = {
                    'parenOutside': 0.25 * r272_DesignParameters.parenOutside,
                    'parenInside': r272_DesignParameters.parenInside,
                    'parenOutsideSwAdj': r272_DesignParameters.parenOutsideSwAdj,
                    'parenInsideSwAdj': r272_DesignParameters.parenInsideSwAdj,
                    'parenCurliness': r1_mix(1, r272_DesignParameters.parenCurliness, 0.5),
                    'parenOvershoot': r272_DesignParameters.parenOvershoot
                };
                r321_currentGlyph.include(r272_Paren.Shape(r272_Stroke, r321_dp));
                return void 0;
            });
            r272_xn$createAndSaveGlyphImpl$2Lrc3c('parenLeft.flatArc', 10222, function () {
                var _r325_t1;
                var _r325_t0 = this;
                var r325_currentGlyph = _r325_t0;
                var r325_dp = {
                    'parenOutside': 0.5 * r272_DesignParameters.parenOutside,
                    'parenInside': r272_DesignParameters.parenInside,
                    'parenOutsideSwAdj': r272_DesignParameters.parenOutsideSwAdj,
                    'parenInsideSwAdj': r272_DesignParameters.parenInsideSwAdj,
                    'parenCurliness': r1_mix(1, r272_DesignParameters.parenCurliness, 0.5),
                    'parenOvershoot': r272_DesignParameters.parenOvershoot
                };
                var r325_dim = r272_Paren.Dim(0, r325_dp);
                r325_currentGlyph.include(r272_dispiro(r272_widths.lhs(), r272_g4.left.start(r325_dim.inside, r325_dim.top), r272_archv(), r272_flat(r325_dim.outside, r1_mix(r325_dim.bottom, r325_dim.top, 0.65)), r272_curl(r325_dim.outside, r1_mix(r325_dim.bottom, r325_dim.top, 0.35)), r272_arcvh(), r272_g4.right.start(r325_dim.inside, r325_dim.bottom)));
                return void 0;
            });
            r272_turned('parenRight.normal', null, 'parenLeft.normal', r272_Middle, r272_SymbolMid);
            r272_turned('parenRight.largeContour', null, 'parenLeft.largeContour', r272_Middle, r272_SymbolMid);
            r272_turned('parenRight.flatArc', 10223, 'parenLeft.flatArc', r272_Middle, r272_SymbolMid);
            r272_xn$selectvariant$7Hrq('parenLeft', '(');
            r272_xn$selectvariant$7Hrq('parenRight', ')');
            r272_xn$createAndSaveGlyphImpl$2Lrc3c('parenLeftUpper', 9115, function () {
                var _r329_t1;
                var _r329_t0 = this;
                var r329_currentGlyph = _r329_t0;
                r329_currentGlyph.include(r272_ForceUpright());
                r329_currentGlyph.include(r272_Paren.UpperShape(r272_Stroke));
                return void 0;
            });
            r272_xn$createAndSaveGlyphImpl$2Lrc3c('parenLeftExtension', 9116, function () {
                var _r334_t1;
                var _r334_t0 = this;
                var r334_currentGlyph = _r334_t0;
                r334_currentGlyph.include(r272_ForceUpright());
                r334_currentGlyph.include(r272_Paren.ExtensionShape(r272_Stroke));
                return void 0;
            });
            r272_xn$createAndSaveGlyphImpl$2Lrc3c('parenLeftLower', 9117, function () {
                var _r339_t1;
                var _r339_t0 = this;
                var r339_currentGlyph = _r339_t0;
                r339_currentGlyph.include(r272_ForceUpright());
                r339_currentGlyph.include(r272_Paren.LowerShape(r272_Stroke));
                return void 0;
            });
            r272_turned('parenRightLower', 9120, 'parenLeftUpper', r272_Middle, r272_SymbolMid);
            r272_turned('parenRightExtension', 9119, 'parenLeftExtension', r272_Middle, r272_SymbolMid);
            r272_turned('parenRightupper', 9118, 'parenLeftLower', r272_Middle, r272_SymbolMid);
            r272_xn$createAndSaveGlyphImpl$2Lrc3c('zNotationParenLeft', 10631, function () {
                var _r344_t1;
                var _r344_t0 = this;
                var r344_currentGlyph = _r344_t0;
                var r344_fine = r272_AdviceStroke(4);
                var r344_dim = r272_Paren.Dim(0, new r272_xn$NamedParameterPair$2Lrc9b('sw', r344_fine));
                r344_currentGlyph.include(r272_intersection(r272_Rect(r1_mix(r344_dim.bottom, r344_dim.top, 2), r1_mix(r344_dim.top, r344_dim.bottom, 2), 0, r344_dim.inside), r272_union(r272_Paren.Shape(r344_fine), r272_intersection(r272_VBar.r(r344_dim.inside, r344_dim.bottom, r344_dim.top, r344_fine), r272_Paren.ShapeMask(r344_fine, r272_O)))));
                return void 0;
            });
            return r272_turned('zNotationParenRight', 10632, 'zNotationParenLeft', r272_Middle, r272_SymbolMid);
        }());
        var r272_Bracket = function () {
            var r349_HDim, r349_Mask, r349_Shape;
            var r349_exports = {};
            r349_exports.HDim = r349_HDim = function (r357_barLeft, r357_ext) {
                var _r357_t0, _r357_t1, _r357_t2, _r357_tag3;
                return function () {
                    var r360_l, r360_r;
                    var r360_exports = {};
                    r360_exports.l = r360_l = r1_fallback(r357_barLeft, r1_mix(r272_SB, r272_RightSB, r1_DesignParameters.bracketOutside) - r1_DesignParameters.bracketOutsideSwAdj * r272_HVContrast * r272_Stroke);
                    r360_exports.r = r360_r = r1_fallback(r357_ext, 0) + r1_mix(r272_SB, r272_RightSB, r1_DesignParameters.bracketInside);
                    return r360_exports;
                }();
            };
            r349_exports.Mask = r349_Mask = function () {
                var _r370_t0, _r370_t1;
                return r272_Rect(r272_MosaicTop, r272_MosaicBottom, -r272_Width, 2 * r272_Width);
            };
            r349_exports.Shape = r349_Shape = function (r372_top, r372_bottom, r372_barLeft, r372_ext) {
                var _r372_t0, _r372_t1;
                return function () {
                    var _r374_t1;
                    var _r374_t0 = this;
                    var r374_currentGlyph = _r374_t0;
                    var r374_hDim = r349_HDim(r372_barLeft, r372_ext);
                    r374_currentGlyph.include(r272_HBar.b(r374_hDim.l, r374_hDim.r, r372_bottom));
                    r374_currentGlyph.include(r272_HBar.t(r374_hDim.l, r374_hDim.r, r372_top));
                    r374_currentGlyph.include(r272_VBar.l(r374_hDim.l, r372_bottom, r372_top));
                    return void 0;
                };
            };
            return r349_exports;
        }();
        (function () {
            r272_xn$createAndSaveGlyphImpl$2Lrc3c('bracketLeft', '[', r272_Bracket.Shape(r272_ParenTop, r272_ParenBot));
            r272_xn$createAndSaveGlyphImpl$2Lrc3c('bracketLeftUHalf', 11810, r272_intersection(r272_xn$referglyph$1aao('bracketLeft'), r272_MaskAbove(r272_SymbolMid)));
            r272_xn$createAndSaveGlyphImpl$2Lrc3c('bracketLeftLHalf', 11812, r272_intersection(r272_xn$referglyph$1aao('bracketLeft'), r272_MaskBelow(r272_SymbolMid)));
            r272_xn$createAndSaveGlyphImpl$2Lrc3c('ligExtBracketLeft', null, function () {
                var _r385_t1;
                var _r385_t0 = this;
                var r385_currentGlyph = _r385_t0;
                r1_Joining.set(r385_currentGlyph, r1_Joining.Classes.Right);
                r385_currentGlyph.include(r272_Bracket.Shape(r272_ParenTop, r272_ParenBot, r272_Middle - r272_HalfStroke * r272_HVContrast, r1_mix(r272_SB, r272_RightSB, r272_DesignParameters.bracketInside)));
                return void 0;
            });
            r272_xn$createAndSaveGlyphImpl$2Lrc3c('bracketLeftUpper', 9121, function () {
                var _r389_t1;
                var _r389_t0 = this;
                var r389_currentGlyph = _r389_t0;
                r389_currentGlyph.include(r272_ForceUpright());
                r389_currentGlyph.include(r272_intersection(r272_Bracket.Mask(), r272_Bracket.Shape(r272_ParenTop, r272_ParenBot - r272_MosaicHeight)));
                return void 0;
            });
            r272_xn$createAndSaveGlyphImpl$2Lrc3c('bracketLeftExtension', 9122, function () {
                var _r394_t1;
                var _r394_t0 = this;
                var r394_currentGlyph = _r394_t0;
                r394_currentGlyph.include(r272_ForceUpright());
                r394_currentGlyph.include(r272_intersection(r272_Bracket.Mask(), r272_Bracket.Shape(r272_ParenTop + r272_MosaicHeight, r272_ParenBot - r272_MosaicHeight)));
                return void 0;
            });
            r272_xn$createAndSaveGlyphImpl$2Lrc3c('bracketLeftLower', 9123, function () {
                var _r399_t1;
                var _r399_t0 = this;
                var r399_currentGlyph = _r399_t0;
                r399_currentGlyph.include(r272_ForceUpright());
                r399_currentGlyph.include(r272_intersection(r272_Bracket.Mask(), r272_Bracket.Shape(r272_ParenTop + r272_MosaicHeight, r272_ParenBot)));
                return void 0;
            });
            r272_xn$createAndSaveGlyphImpl$2Lrc3c('dblBracketLeft', 10214, function () {
                var _r404_t1;
                var _r404_t0 = this;
                var r404_currentGlyph = _r404_t0;
                var r404_hDim = r272_Bracket.HDim();
                var r404_sw = Math.min((r404_hDim.r - r404_hDim.l) / 5, r272_AdviceStroke(4));
                r404_currentGlyph.include(r272_union(r272_HBar.b(r404_hDim.l, r404_hDim.r, r272_ParenBot), r272_HBar.t(r404_hDim.l, r404_hDim.r, r272_ParenTop), r272_VBar.l(r404_hDim.l, r272_ParenBot, r272_ParenTop, r404_sw), r272_VBar.m(r1_mix(r404_hDim.l, r404_hDim.r, 1 / 2), r272_ParenBot, r272_ParenTop, r404_sw)));
                return void 0;
            });
            r272_xn$createAndSaveGlyphImpl$2Lrc3c('bracketBarLeft', 8261, function () {
                var _r408_t1;
                var _r408_t0 = this;
                var r408_currentGlyph = _r408_t0;
                var r408_hDim = r272_Bracket.HDim();
                r408_currentGlyph.include(r272_union(r272_HBar.b(r408_hDim.l, r408_hDim.r, r272_ParenBot), r272_HBar.t(r408_hDim.l, r408_hDim.r, r272_ParenTop), r272_HBar.m(r408_hDim.l, r408_hDim.r, r1_mix(r272_ParenBot, r272_ParenTop, 0.5)), r272_VBar.l(r408_hDim.l, r272_ParenBot, r272_ParenTop)));
                return void 0;
            });
            r272_xn$createAndSaveGlyphImpl$2Lrc3c('barBarLeft', 11808, function () {
                var _r412_t1;
                var _r412_t0 = this;
                var r412_currentGlyph = _r412_t0;
                var r412_hDim = r272_Bracket.HDim();
                r412_currentGlyph.include(r272_union(r272_HBar.m(r412_hDim.l, r412_hDim.r, r1_mix(r272_ParenBot, r272_ParenTop, 0.5)), r272_VBar.l(r412_hDim.l, r272_ParenBot, r272_ParenTop)));
                return void 0;
            });
            r272_turned('bracketRight', ']', 'bracketLeft', r272_Middle, r272_SymbolMid);
            r272_turned('bracketRightUHalf', 11811, 'bracketLeftLHalf', r272_Middle, r272_SymbolMid);
            r272_turned('bracketRightLHalf', 11813, 'bracketLeftUHalf', r272_Middle, r272_SymbolMid);
            r272_turned('bracketRightLower', 9126, 'bracketLeftUpper', r272_Middle, r272_SymbolMid);
            r272_turned('bracketRightExtension', 9125, 'bracketLeftExtension', r272_Middle, r272_SymbolMid);
            r272_turned('bracketRightUpper', 9124, 'bracketLeftLower', r272_Middle, r272_SymbolMid);
            r272_turned('dblBracketRight', 10215, 'dblBracketLeft', r272_Middle, r272_SymbolMid);
            r272_turned('bracketBarRight', 8262, 'bracketBarLeft', r272_Middle, r272_SymbolMid);
            r272_turned('barBarRight', 11809, 'barBarLeft', r272_Middle, r272_SymbolMid);
            return r272_xn$createAndSaveGlyphImpl$2Lrc3c('ligExtBracketRight', null, function () {
                var _r416_t1;
                var _r416_t0 = this;
                var r416_currentGlyph = _r416_t0;
                r416_currentGlyph.include(r272_xn$referglyph$1aao('ligExtBracketLeft'), r272_AS_BASE, r272_ALSO_METRICS);
                r416_currentGlyph.include(r272_FlipAround(r272_Middle, r272_SymbolMid));
                r1_Joining.set(r416_currentGlyph, r1_Joining.Classes.Left);
                return void 0;
            });
        }());
        var r272_Brace = function () {
            var r421_UpperHalfShape, r421_LowerHalfShape, r421_UpperThirdShape, r421_LowerThirdShape, r421_CenterThirdShape, r421_ExtensionShape, r421_CurlyShape;
            var r421_exports = {};
            var r421_Dim = function () {
                var _r428_t0, _r428_t1;
                var r428_parenCenter = r1_mix(r272_SB, r272_RightSB, r1_mix(r1_DesignParameters.braceInside, r1_DesignParameters.braceOutside, 0.5));
                var r428_radius = Math.min(r1_mix(r272_SB, r272_RightSB, r1_DesignParameters.braceInside) - r428_parenCenter, (r272_ParenTop - r272_SymbolMid - r272_Stroke * 1.5) / 2);
                return {
                    'parenCenter': r428_parenCenter,
                    'radius': r428_radius
                };
            };
            r421_exports.UpperHalfShape = r421_UpperHalfShape = function (r430_top, r430_bottom, r430_sw, r430_pExt) {
                var _r430_t0, _r430_t1;
                return function () {
                    var _r432_t2;
                    var _r432_t1 = this;
                    var r432_currentGlyph = _r432_t1;
                    var _r432_t0 = r421_Dim();
                    var r432_parenCenter = _r432_t0.parenCenter;
                    var r432_radius = _r432_t0.radius;
                    var r432_xIns = r1_mix(r272_SB, r272_RightSB, r1_DesignParameters.braceInside);
                    var r432_xTip = r1_mix(r272_SB, r272_RightSB, r1_DesignParameters.braceOutside);
                    r432_currentGlyph.include(r272_dispiro(r272_flat((1 + r1_fallback(r430_pExt, 0)) * r432_xIns, r430_top, r272_widths.center.heading(r430_sw, r272_Leftward)), r272_curl(r432_xIns - 0.1, r430_top, r272_heading(r272_Leftward)), r272_archv(), r272_flat(r432_parenCenter, r430_top - r432_radius, r272_heading(r272_Downward)), r272_curl(r432_parenCenter, r430_bottom + r432_radius, r272_heading(r272_Downward)), r272_arcvh(), r272_straight.left.end(r432_xTip, r430_bottom, r272_heading(r272_Leftward))));
                    return void 0;
                };
            };
            r421_exports.LowerHalfShape = r421_LowerHalfShape = function (r435_top, r435_bottom, r435_sw, r435_pExt) {
                var _r435_t0, _r435_t1;
                return function () {
                    var _r437_t2;
                    var _r437_t1 = this;
                    var r437_currentGlyph = _r437_t1;
                    var _r437_t0 = r421_Dim();
                    var r437_parenCenter = _r437_t0.parenCenter;
                    var r437_radius = _r437_t0.radius;
                    var r437_xIns = r1_mix(r272_SB, r272_RightSB, r1_DesignParameters.braceInside);
                    var r437_xTip = r1_mix(r272_SB, r272_RightSB, r1_DesignParameters.braceOutside);
                    r437_currentGlyph.include(r272_dispiro(r272_flat((1 + r1_fallback(r435_pExt, 0)) * r437_xIns, r435_bottom, r272_widths.center.heading(r435_sw, r272_Leftward)), r272_curl(r437_xIns - 0.1, r435_bottom, r272_heading(r272_Leftward)), r272_archv(), r272_flat(r437_parenCenter, r435_bottom + r437_radius, r272_heading(r272_Upward)), r272_curl(r437_parenCenter, r435_top - r437_radius, r272_heading(r272_Upward)), r272_arcvh(), r272_straight.left.end(r437_xTip, r435_top, r272_heading(r272_Leftward))));
                    return void 0;
                };
            };
            r421_exports.UpperThirdShape = r421_UpperThirdShape = function (r440_top, r440_bottom, r440_sw) {
                var _r440_t0, _r440_t1;
                return function () {
                    var _r442_t2;
                    var _r442_t1 = this;
                    var r442_currentGlyph = _r442_t1;
                    var _r442_t0 = r421_Dim();
                    var r442_parenCenter = _r442_t0.parenCenter;
                    var r442_radius = _r442_t0.radius;
                    r442_currentGlyph.include(r272_intersection(r272_Bracket.Mask(), r421_UpperHalfShape(r440_top, r440_bottom - r272_MosaicHeight, r440_sw)));
                    return void 0;
                };
            };
            r421_exports.LowerThirdShape = r421_LowerThirdShape = function (r445_top, r445_bottom, r445_sw) {
                var _r445_t0, _r445_t1;
                return function () {
                    var _r447_t2;
                    var _r447_t1 = this;
                    var r447_currentGlyph = _r447_t1;
                    var _r447_t0 = r421_Dim();
                    var r447_parenCenter = _r447_t0.parenCenter;
                    var r447_radius = _r447_t0.radius;
                    r447_currentGlyph.include(r272_intersection(r272_Bracket.Mask(), r421_LowerHalfShape(r445_top + r272_MosaicHeight, r445_bottom, r445_sw)));
                    return void 0;
                };
            };
            r421_exports.CenterThirdShape = r421_CenterThirdShape = function (r450_top, r450_bottom, r450_sw) {
                var _r450_t0, _r450_t1;
                return function () {
                    var _r452_t2;
                    var _r452_t1 = this;
                    var r452_currentGlyph = _r452_t1;
                    var _r452_t0 = r421_Dim();
                    var r452_parenCenter = _r452_t0.parenCenter;
                    var r452_radius = _r452_t0.radius;
                    r452_currentGlyph.include(r272_intersection(r272_Bracket.Mask(), r272_union(r421_UpperHalfShape(r450_top + r272_MosaicHeight, r1_mix(r450_bottom, r450_top, 0.5), r450_sw), r421_LowerHalfShape(r1_mix(r450_bottom, r450_top, 0.5), r450_bottom - r272_MosaicHeight, r450_sw))));
                    return void 0;
                };
            };
            r421_exports.ExtensionShape = r421_ExtensionShape = function (r455_top, r455_bottom, r455_sw) {
                var _r455_t0, _r455_t1;
                return function () {
                    var _r457_t2;
                    var _r457_t1 = this;
                    var r457_currentGlyph = _r457_t1;
                    var _r457_t0 = r421_Dim();
                    var r457_parenCenter = _r457_t0.parenCenter;
                    var r457_radius = _r457_t0.radius;
                    r457_currentGlyph.include(r272_intersection(r272_Bracket.Mask(), r272_union(r421_UpperHalfShape(r455_top + r272_MosaicHeight, r455_bottom - r272_MosaicHeight, r455_sw))));
                    return void 0;
                };
            };
            r421_exports.CurlyShape = r421_CurlyShape = function (r460_sw, r460_pFlatIn, r460_pFlatOut, r460_pExt) {
                var _r460_t0, _r460_t1;
                return function () {
                    var _r462_t1;
                    var _r462_t0 = this;
                    var r462_currentGlyph = _r462_t0;
                    var r462_hs = r460_sw / 2;
                    var r462_xIns = r1_mix(r272_SB, r272_RightSB, r1_DesignParameters.braceInside);
                    var r462_xOus = r1_mix(r272_SB, r272_RightSB, r1_DesignParameters.braceOutside);
                    var r462_m1 = r1_mix(r462_xIns, r462_xOus, r1_DesignParameters.braceCurlyM1 * (1 + 0.5 * r460_pFlatIn));
                    var r462_m2 = r1_mix(r462_xIns, r462_xOus, r1_DesignParameters.braceCurlyM2 * (1 + 0.5 * r460_pFlatOut));
                    var r462_braceRadiusLowLimit = (r272_ParenTop - r272_SymbolMid - r460_sw) * (1 / 3) + r462_hs;
                    var r462_radius1 = r460_sw / 16 + r1_mix(Math.min(r462_xIns - r462_m1, r462_braceRadiusLowLimit), r460_sw, 0.75 * r460_pFlatIn);
                    var r462_radius2 = r460_sw / 16 + r1_mix(Math.min(r462_m2 - r462_xOus, r462_braceRadiusLowLimit), r460_sw, 0.75 * r460_pFlatOut) - r462_hs;
                    var r462_ess = r1_mix(r460_sw, r272_EssUpper * r460_sw / r272_Stroke, 0.25);
                    var r462_top = r1_mix(r272_SymbolMid, r272_ParenTop, 1 + r1_DesignParameters.braceOvershoot);
                    var r462_bot = r1_mix(r272_SymbolMid, r272_ParenBot, 1 + r1_DesignParameters.braceOvershoot);
                    var r462_flatLengthIn = Math.max(0.1, r460_pFlatIn * (r462_xIns - r462_xOus));
                    var r462_flatLengthOut = Math.max(0.1, r460_pFlatOut * (r462_xIns - r462_xOus));
                    var r462_fine = r460_sw * r272_CThin;
                    r462_currentGlyph.include(r272_dispiro(r272_flat(r462_xIns * (1 + r460_pExt), r462_top - r462_hs, r272_widths.center.heading(r460_sw, r272_Leftward)), r272_curl(r462_xIns - r462_flatLengthIn, r462_top - r462_hs, r272_heading(r272_Leftward)), r272_archv.superness(2.2 + r460_pFlatIn), r272_g4.down.mid(r462_m1, r462_top - r462_radius1, r272_heading(r272_Downward)), r272_alsoThru(0.5, 0.5, r272_widths(r462_ess / 2, r462_ess / 2)), r272_g4.down.mid(r462_m2, r272_SymbolMid + r462_radius2, r272_widths.center.heading(r460_sw, r272_Downward)), r272_arcvh(), r272_flat(r462_xOus + r462_flatLengthOut, r272_SymbolMid + (r460_sw - r462_fine) / 2, r272_widths.center.heading(r462_fine, r272_Leftward)), r272_curl(r462_xOus, r272_SymbolMid + (r460_sw - r462_fine) / 2, r272_heading(r272_Leftward))));
                    r462_currentGlyph.include(r272_dispiro(r272_flat(r462_xIns * (1 + r460_pExt), r462_bot + r462_hs, r272_widths.center.heading(r460_sw, r272_Leftward)), r272_curl(r462_xIns - r462_flatLengthIn, r462_bot + r462_hs, r272_heading(r272_Leftward)), r272_archv.superness(2.2 + r460_pFlatIn), r272_g4.up.mid(r462_m1, r462_bot + r462_radius1, r272_heading(r272_Upward)), r272_alsoThru(0.5, 0.5, r272_widths(r462_ess / 2, r462_ess / 2)), r272_g4.up.mid(r462_m2, r272_SymbolMid - r462_radius2, r272_widths.center.heading(r460_sw, r272_Upward)), r272_arcvh(), r272_flat(r462_xOus + r462_flatLengthOut, r272_SymbolMid - (r460_sw - r462_fine) / 2, r272_widths.center.heading(r462_fine, r272_Leftward)), r272_curl(r462_xOus, r272_SymbolMid - (r460_sw - r462_fine) / 2, r272_heading(r272_Leftward))));
                    return void 0;
                };
            };
            return r421_exports;
        }();
        (function () {
            var _r466_t0, _r466_tag1, _r466_t2, _r466_tag3, _r466_t4, _r466_tag5;
            (function () {
                var r468_top = r1_mix(r272_SymbolMid, r272_ParenTop, 1 + r272_DesignParameters.braceOvershoot) - r272_HalfStroke;
                var r468_bot = r1_mix(r272_SymbolMid, r272_ParenBot, 1 + r272_DesignParameters.braceOvershoot) + r272_HalfStroke;
                r272_xn$createAndSaveGlyphImpl$2Lrc3c('braceLeft.straight', null, function () {
                    var _r471_t1;
                    var _r471_t0 = this;
                    var r471_currentGlyph = _r471_t0;
                    r471_currentGlyph.include(r272_Brace.UpperHalfShape(r468_top, r272_SymbolMid, r272_Stroke));
                    r471_currentGlyph.include(r272_Brace.LowerHalfShape(r272_SymbolMid, r468_bot, r272_Stroke));
                    return void 0;
                });
                r272_turned('braceRight.straight', null, 'braceLeft.straight', r272_Middle, r272_SymbolMid);
                r272_xn$createAndSaveGlyphImpl$2Lrc3c('ligExtBraceLeft.straight', null, function () {
                    var _r476_t1;
                    var _r476_t0 = this;
                    var r476_currentGlyph = _r476_t0;
                    r1_Joining.set(r476_currentGlyph, r1_Joining.Classes.Right);
                    r476_currentGlyph.include(r272_Brace.UpperHalfShape(r468_top, r272_SymbolMid, r272_Stroke, 1));
                    r476_currentGlyph.include(r272_Brace.LowerHalfShape(r272_SymbolMid, r468_bot, r272_Stroke, 1));
                    return void 0;
                });
                r272_xn$createAndSaveGlyphImpl$2Lrc3c('ligExtBraceRight.straight', null, function () {
                    var _r481_t1;
                    var _r481_t0 = this;
                    var r481_currentGlyph = _r481_t0;
                    r481_currentGlyph.include(r272_xn$referglyph$1aao('ligExtBraceLeft.straight'), r272_AS_BASE, r272_ALSO_METRICS);
                    r481_currentGlyph.include(r272_FlipAround(r272_Middle, r272_SymbolMid));
                    r1_Joining.set(r481_currentGlyph, r1_Joining.Classes.Left);
                    return void 0;
                });
                r272_xn$createAndSaveGlyphImpl$2Lrc3c('braceLeftUpper', 9127, function () {
                    var _r486_t1;
                    var _r486_t0 = this;
                    var r486_currentGlyph = _r486_t0;
                    r486_currentGlyph.include(r272_ForceUpright());
                    r486_currentGlyph.include(r272_Brace.UpperThirdShape(r468_top, r468_bot, r272_Stroke));
                    return void 0;
                });
                r272_turned('braceRightLower', 9133, 'braceLeftUpper', r272_Middle, r272_SymbolMid);
                r272_xn$createAndSaveGlyphImpl$2Lrc3c('braceLeftLower', 9129, function () {
                    var _r491_t1;
                    var _r491_t0 = this;
                    var r491_currentGlyph = _r491_t0;
                    r491_currentGlyph.include(r272_ForceUpright());
                    r491_currentGlyph.include(r272_Brace.LowerThirdShape(r468_top, r468_bot, r272_Stroke));
                    return void 0;
                });
                r272_turned('braceRightUpper', 9131, 'braceLeftLower', r272_Middle, r272_SymbolMid);
                r272_xn$createAndSaveGlyphImpl$2Lrc3c('braceLeftMiddle', 9128, function () {
                    var _r496_t1;
                    var _r496_t0 = this;
                    var r496_currentGlyph = _r496_t0;
                    r496_currentGlyph.include(r272_ForceUpright());
                    r496_currentGlyph.include(r272_Brace.CenterThirdShape(r468_top, r468_bot, r272_Stroke));
                    return void 0;
                });
                r272_turned('braceRightMiddle', 9132, 'braceLeftMiddle', r272_Middle, r272_SymbolMid);
                r272_xn$createAndSaveGlyphImpl$2Lrc3c('braceExtension', 9130, function () {
                    var _r501_t1;
                    var _r501_t0 = this;
                    var r501_currentGlyph = _r501_t0;
                    r501_currentGlyph.include(r272_ForceUpright());
                    r501_currentGlyph.include(r272_Brace.ExtensionShape(r468_top, r468_bot, r272_Stroke));
                    return void 0;
                });
                r272_xn$createAndSaveGlyphImpl$2Lrc3c('whiteBraceLeft.straight', null, function () {
                    var _r506_t1;
                    var _r506_t0 = this;
                    var r506_currentGlyph = _r506_t0;
                    var r506_fine = r272_AdviceStroke(4);
                    var r506_xIns = r1_mix(r272_SB, r272_RightSB, r272_DesignParameters.braceInside);
                    r506_currentGlyph.include(r272_Brace.UpperHalfShape(r468_top, r272_SymbolMid, r506_fine));
                    r506_currentGlyph.include(r272_Brace.LowerHalfShape(r272_SymbolMid, r468_bot, r506_fine));
                    r506_currentGlyph.include(r272_VBar.r(r506_xIns, r468_bot + r506_fine / 2, r468_top - r506_fine / 2, r506_fine));
                    return void 0;
                });
                return r272_turned('whiteBraceRight.straight', null, 'whiteBraceLeft.straight', r272_Middle, r272_SymbolMid);
            }());
            (function () {
                var r511_top = r1_mix(r272_SymbolMid, r272_ParenTop, 1 + r272_DesignParameters.braceOvershoot);
                var r511_bot = r1_mix(r272_SymbolMid, r272_ParenBot, 1 + r272_DesignParameters.braceOvershoot);
                r272_xn$createAndSaveGlyphImpl$2Lrc3c('upperLeftOrLowerRightfBrace', 9136, function () {
                    var _r514_t1;
                    var _r514_t0 = this;
                    var r514_currentGlyph = _r514_t0;
                    r514_currentGlyph.include(r272_ForceUpright());
                    r514_currentGlyph.include(r272_Brace.UpperHalfShape(r511_top - r272_HalfStroke, r511_bot + r272_HalfStroke, r272_Stroke));
                    return void 0;
                });
                return r272_xn$createAndSaveGlyphImpl$2Lrc3c('upperRightOrLowerLeftfBrace', 9137, function () {
                    var _r519_t1;
                    var _r519_t0 = this;
                    var r519_currentGlyph = _r519_t0;
                    r519_currentGlyph.include(r272_ForceUpright());
                    r519_currentGlyph.include(r272_Brace.LowerHalfShape(r511_top - r272_HalfStroke, r511_bot + r272_HalfStroke, r272_Stroke));
                    return void 0;
                });
            }());
            (function () {
                var r523_suffix, r523_pFlatIn, r523_pFlatOut, _r523_t2, _r523_t4, _r523_t5, _r523_tag6;
                var r523_CurlyBraceConfig = {
                    'curly': [
                        0,
                        0
                    ],
                    'curlyFlatBoundary': [
                        0.25,
                        0.05
                    ]
                };
                var _r523_t0 = Object.entries(r523_CurlyBraceConfig)[Symbol.iterator]();
                var _r523_t1 = void 0;
                var _r523_t3 = !(_r523_t1 = _r523_t0.next()).done;
                while (_r523_t3) {
                    _r523_t2 = _r523_t1.value;
                    r523_suffix = _r523_t2[0];
                    r523_pFlatIn = _r523_t2[1][0];
                    r523_pFlatOut = _r523_t2[1][1];
                    _r523_t2[1];
                    _r523_t4 = function () {
                        r272_xn$createAndSaveGlyphImpl$2Lrc3c('braceLeft.' + r523_suffix, null, r272_Brace.CurlyShape(r272_Stroke, r523_pFlatIn, r523_pFlatOut, 0));
                        r272_turned('braceRight.' + r523_suffix, null, 'braceLeft.' + r523_suffix, r272_Middle, r272_SymbolMid);
                        r272_xn$createAndSaveGlyphImpl$2Lrc3c('ligExtBraceLeft.' + r523_suffix, null, function () {
                            var _r530_t1;
                            var _r530_t0 = this;
                            var r530_currentGlyph = _r530_t0;
                            r1_Joining.set(r530_currentGlyph, r1_Joining.Classes.Right);
                            r530_currentGlyph.include(r272_Brace.CurlyShape(r272_Stroke, r523_pFlatIn, r523_pFlatOut, 1));
                            return void 0;
                        });
                        r272_xn$createAndSaveGlyphImpl$2Lrc3c('ligExtBraceRight.' + r523_suffix, null, function () {
                            var _r534_t1;
                            var _r534_t0 = this;
                            var r534_currentGlyph = _r534_t0;
                            r534_currentGlyph.include(r272_xn$referglyph$1aao('ligExtBraceLeft.' + r523_suffix), r272_AS_BASE, r272_ALSO_METRICS);
                            r534_currentGlyph.include(r272_FlipAround(r272_Middle, r272_SymbolMid));
                            r1_Joining.set(r534_currentGlyph, r1_Joining.Classes.Left);
                            return void 0;
                        });
                        r272_xn$createAndSaveGlyphImpl$2Lrc3c('whiteBraceLeft.' + r523_suffix, null, function () {
                            var _r539_t1;
                            var _r539_t0 = this;
                            var r539_currentGlyph = _r539_t0;
                            var r539_fine = r272_AdviceStroke(4);
                            var r539_xIns = r1_mix(r272_SB, r272_RightSB, r272_DesignParameters.braceInside);
                            var r539_top = r1_mix(r272_SymbolMid, r272_ParenTop, 1 + r272_DesignParameters.braceOvershoot);
                            var r539_bot = r1_mix(r272_SymbolMid, r272_ParenBot, 1 + r272_DesignParameters.braceOvershoot);
                            r539_currentGlyph.include(r272_Brace.CurlyShape(r539_fine, r523_pFlatIn, r523_pFlatOut, 0));
                            r539_currentGlyph.include(r272_VBar.r(r539_xIns, r539_bot + r539_fine / 2, r539_top - r539_fine / 2, r539_fine));
                            return void 0;
                        });
                        return r272_turned('whiteBraceRight.' + r523_suffix, null, 'whiteBraceLeft.' + r523_suffix, r272_Middle, r272_SymbolMid);
                    }();
                    _r523_t3 = !(_r523_t1 = _r523_t0.next()).done;
                }
                return _r523_t4;
            }());
            r272_xn$selectvariant$7Hrq('braceLeft', '{');
            r272_xn$selectvariant$7Hrq('braceRight', '}');
            r272_xn$selectvariant$7Hrq('ligExtBraceLeft', new r272_xn$NamedParameterPair$2Lrc9b('follow', 'braceLeft'));
            r272_xn$selectvariant$7Hrq('ligExtBraceRight', new r272_xn$NamedParameterPair$2Lrc9b('follow', 'braceRight'));
            r272_xn$selectvariant$7Hrq('whiteBraceLeft', 10627, new r272_xn$NamedParameterPair$2Lrc9b('follow', 'braceLeft'));
            return r272_xn$selectvariant$7Hrq('whiteBraceRight', 10628, new r272_xn$NamedParameterPair$2Lrc9b('follow', 'braceRight'));
        }());
        (function () {
            var r547_AngleLeftShape = function (r548_outside, r548_inside, r548_sw) {
                var _r548_t0, _r548_t1;
                var r548_fatten = Math.hypot(1, (r548_inside - r548_outside - r272_O) / (r272_ParenTop - r272_SymbolMid));
                return r272_union(r272_dispiro(r272_widths.lhs(r548_sw), r272_flat(r548_inside, r272_ParenTop), r272_curl(r548_outside + r272_O, r272_SymbolMid, r272_widths.heading(r548_sw * r548_fatten, 0, r272_Downward))), r272_dispiro(r272_widths.rhs(r548_sw), r272_flat(r548_inside, r272_ParenBot), r272_curl(r548_outside + r272_O, r272_SymbolMid, r272_widths.heading(0, r548_sw * r548_fatten, r272_Upward))));
            };
            r272_xn$createAndSaveGlyphImpl$2Lrc3c('angleLeft', 9001, function () {
                var _r551_t1;
                var _r551_t0 = this;
                var r551_currentGlyph = _r551_t0;
                var r551_dim = r272_Paren.Dim(new r272_xn$NamedParameterPair$2Lrc9b('delta', 0));
                r551_currentGlyph.include(r547_AngleLeftShape(r551_dim.outside, r551_dim.inside, r272_OperatorStroke));
                return void 0;
            });
            r272_xn$createAndSaveGlyphImpl$2Lrc3c('dblAngleLeft', 10218, function () {
                var _r556_t1;
                var _r556_t0 = this;
                var r556_currentGlyph = _r556_t0;
                var r556_dim = r272_Paren.Dim(new r272_xn$NamedParameterPair$2Lrc9b('delta', 0), new r272_xn$NamedParameterPair$2Lrc9b('sw', r272_OperatorStroke));
                var r556_fine = Math.min(r272_OperatorStroke, r272_AdviceStroke(3.5));
                var r556_farOutside = r556_dim.outside / 2;
                var r556_middle = r1_mix(r556_farOutside, r556_dim.inside, 0.5);
                r556_currentGlyph.include(r547_AngleLeftShape(r556_farOutside, r556_middle, r556_fine));
                r556_currentGlyph.include(r547_AngleLeftShape(r556_middle, r556_dim.inside, r556_fine));
                return void 0;
            });
            r272_turned('angleRight', 9002, 'angleLeft', r272_Middle, r272_SymbolMid);
            r272_turned('dblAngleRight', 10219, 'dblAngleLeft', r272_Middle, r272_SymbolMid);
            r272_alias('mathAngleLeft', 10216, 'angleLeft');
            return r272_alias('mathAngleRight', 10217, 'angleRight');
        }());
        return function () {
            r272_xn$createAndSaveGlyphImpl$2Lrc3c('ceilingLeft', 8968, function () {
                var _r565_t1;
                var _r565_t0 = this;
                var r565_currentGlyph = _r565_t0;
                r565_currentGlyph.include(r272_HBar.t(r1_mix(r272_SB, r272_RightSB, r272_DesignParameters.bracketOutside), r1_mix(r272_SB, r272_RightSB, r272_DesignParameters.bracketInside), r272_ParenTop));
                r565_currentGlyph.include(r272_VBar.l(r1_mix(r272_SB, r272_RightSB, r272_DesignParameters.bracketOutside), r272_ParenBot, r272_ParenTop));
                return void 0;
            });
            r272_xn$createAndSaveGlyphImpl$2Lrc3c('floorLeft', 8970, function () {
                var _r570_t1;
                var _r570_t0 = this;
                var r570_currentGlyph = _r570_t0;
                r570_currentGlyph.include(r272_HBar.b(r1_mix(r272_SB, r272_RightSB, r272_DesignParameters.bracketOutside), r1_mix(r272_SB, r272_RightSB, r272_DesignParameters.bracketInside), r272_ParenBot));
                r570_currentGlyph.include(r272_VBar.l(r1_mix(r272_SB, r272_RightSB, r272_DesignParameters.bracketOutside), r272_ParenBot, r272_ParenTop));
                return void 0;
            });
            r272_turned('floorRight', 8971, 'ceilingLeft', r272_Middle, r272_SymbolMid);
            return r272_turned('ceilingRight', 8969, 'floorLeft', r272_Middle, r272_SymbolMid);
        }();
    });
    return void 0;
});
