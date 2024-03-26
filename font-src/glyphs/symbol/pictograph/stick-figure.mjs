'use strict';
import * as _s0_t0 from '../../../support/utils.mjs';
import * as _s0_t1 from '../../../support/geometry/box.mjs';
import * as _s0_t2 from '../../../support/geometry/transform.mjs';
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
var r1_Box = _r1_t9.Box;
var _r1_t10 = _s0_t2;
var r1_Transform = _r1_t10.Transform;
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
    r271_xn$Capture_Ext$2Lrc2b['$defineGlyphBlockImpl$'](r271_xn$Capture_Ext$2Lrc2b, 'Symbol-Pictograph-Stick-Figure', function (r272_xn$Capture$2Lrc8, r272_xn$ExportCapture$2Lrc4b) {
        var _r272_t6, _r272_t7, _r272_t8, _r272_tag9;
        var _r272_t0 = r272_xn$Capture$2Lrc8;
        var r272_xn$createAndSaveGlyphImpl$2Lrc3c = _r272_t0['$createAndSaveGlyphImpl$'];
        var r272_xn$NamedParameterPair$2Lrc9b = _r272_t0['$NamedParameterPair$'];
        var r272_xn$assignUnicodeImpl$2Lrc8b = _r272_t0['$assignUnicodeImpl$'];
        var r272_xn$execState$2Lrc0b = _r272_t0['$execState$'];
        var _r272_t1 = r272_xn$Capture$2Lrc8.Metrics;
        var r272_DesignParameters = _r272_t1.DesignParameters;
        var r272_Width = _r272_t1.Width;
        var r272_SB = _r272_t1.SB;
        var r272_SymbolMid = _r272_t1.SymbolMid;
        var r272_PlusTop = _r272_t1.PlusTop;
        var r272_PlusBot = _r272_t1.PlusBot;
        var r272_Scale = _r272_t1.Scale;
        var r272_Translate = _r272_t1.Translate;
        var r272_Rotate = _r272_t1.Rotate;
        var r272_WideWidth1 = _r272_t1.WideWidth1;
        var r272_AdviceStroke = _r272_t1.AdviceStroke;
        var _r272_t2 = r272_xn$Capture$2Lrc8.SpiroFns;
        var r272_g4 = _r272_t2.g4;
        var r272_corner = _r272_t2.corner;
        var r272_flat = _r272_t2.flat;
        var r272_curl = _r272_t2.curl;
        var r272_widths = _r272_t2.widths;
        var r272_xn$disablecontrast$3qIs = _r272_t2['disable-contrast'];
        var r272_unimportant = _r272_t2.unimportant;
        var r272_dispiro = _r272_t2.dispiro;
        var r272_xn$spirooutline$1aao = _r272_t2['spiro-outline'];
        var _r272_t3 = r272_xn$Capture$2Lrc8.BooleFns;
        var r272_union = _r272_t3.union;
        var _r272_t4 = r272_xn$Capture$2Lrc8.CommonShapes.resolve();
        var r272_DotAt = _r272_t4.DotAt;
        var r272_CircleDotAt = _r272_t4.CircleDotAt;
        var _r272_t5 = r272_xn$Capture$2Lrc8['Common-Derivatives'].resolve();
        var r272_PictographSw = r272_AdviceStroke(4);
        r272_xn$ExportCapture$2Lrc4b(function () {
            var _r276_t0, _r276_t1;
            return { 'StickFigureKit': r272_StickFigureKit };
        });
        var r272_StickFigureKit = function (r277_box, r277_tfm, r277_sw) {
            var _r277_t0, _r277_t1, _r277_t2, _r277_tag3;
            return function () {
                var r280_RoundSeg, r280_ArcVH, r280_ArcHV, r280_Box, r280_Circ;
                var r280_exports = {};
                r280_exports.RoundSeg = r280_RoundSeg = function (r288_h1, r288_v1, r288_h2, r288_v2, r288_cl, r288_cr) {
                    var _r288_t0, _r288_t1;
                    return function () {
                        var _r290_t1;
                        var _r290_t0 = this;
                        var r290_currentGlyph = _r290_t0;
                        var r290_z1 = r277_tfm.applyXY(r1_mix(r277_box.left, r277_box.right, r288_h1), r1_mix(r277_box.bottom, r277_box.top, r288_v1));
                        var r290_z2 = r277_tfm.applyXY(r1_mix(r277_box.left, r277_box.right, r288_h2), r1_mix(r277_box.bottom, r277_box.top, r288_v2));
                        r290_currentGlyph.include(r272_dispiro(r272_xn$disablecontrast$3qIs(), r272_widths.center(r277_sw), r272_corner(r290_z1.x, r290_z1.y), r272_corner(r290_z2.x, r290_z2.y)));
                        if (r288_cl)
                            r290_currentGlyph.include(r272_CircleDotAt(r290_z1.x, r290_z1.y, r277_sw / 2));
                        if (r288_cr)
                            r290_currentGlyph.include(r272_CircleDotAt(r290_z2.x, r290_z2.y, r277_sw / 2));
                        return void 0;
                    };
                };
                var r280_ArcImpl = function (r294_mode, r294_h1, r294_v1, r294_h2, r294_v2, r294_cl, r294_cr) {
                    var _r294_t0, _r294_t1;
                    return function () {
                        var r296_theta, r296_c, r296_s, r296_mx, r296_my, r296_zm, _r296_t3;
                        var _r296_t2 = this;
                        var r296_currentGlyph = _r296_t2;
                        var r296_z1 = r277_tfm.applyXY(r1_mix(r277_box.left, r277_box.right, r294_h1), r1_mix(r277_box.bottom, r277_box.top, r294_v1));
                        var r296_z2 = r277_tfm.applyXY(r1_mix(r277_box.left, r277_box.right, r294_h2), r1_mix(r277_box.bottom, r277_box.top, r294_v2));
                        var r296_zc = r277_tfm.applyXY(r1_mix(r277_box.left, r277_box.right, r294_mode ? r294_h1 : r294_h2), r1_mix(r277_box.bottom, r277_box.top, r294_mode ? r294_v2 : r294_v1));
                        var r296_innerKnots = [];
                        var _r296_t0 = 1;
                        var _r296_t1 = 64;
                        var r296_j = _r296_t0;
                        while (r296_j < _r296_t1) {
                            r296_theta = Math.PI / 2 * (r296_j / 64);
                            r296_c = Math.pow(Math.cos(r296_theta), 2 / r272_DesignParameters.superness);
                            r296_s = Math.pow(Math.sin(r296_theta), 2 / r272_DesignParameters.superness);
                            r296_mx = r1_mix(r277_box.left, r277_box.right, r1_mix(r294_h1, r294_h2, r294_mode ? 1 - r296_c : r296_s));
                            r296_my = r1_mix(r277_box.bottom, r277_box.top, r1_mix(r294_v1, r294_v2, r294_mode ? r296_s : 1 - r296_c));
                            r296_zm = r277_tfm.applyXY(r296_mx, r296_my);
                            r296_innerKnots.push(r272_g4(r296_zm.x, r296_zm.y, r272_unimportant));
                            r296_j = r296_j + 1;
                        }
                        r296_currentGlyph.include(r272_dispiro(r272_xn$disablecontrast$3qIs(), r272_widths.center(r277_sw), r272_flat(r296_z1.x, r296_z1.y), r272_curl(r1_mix(r296_z1.x, r296_zc.x, 0.001), r1_mix(r296_z1.y, r296_zc.y, 0.001)), r296_innerKnots, r272_flat(r1_mix(r296_z2.x, r296_zc.x, 0.001), r1_mix(r296_z2.y, r296_zc.y, 0.001)), r272_curl(r296_z2.x, r296_z2.y)));
                        if (r294_cl)
                            r296_currentGlyph.include(r272_CircleDotAt(r296_z1.x, r296_z1.y, r277_sw / 2));
                        if (r294_cr)
                            r296_currentGlyph.include(r272_CircleDotAt(r296_z2.x, r296_z2.y, r277_sw / 2));
                        return void 0;
                    };
                };
                r280_exports.ArcVH = r280_ArcVH = function (r302_h1, r302_v1, r302_h2, r302_v2, r302_cl, r302_cr) {
                    var _r302_t0, _r302_t1;
                    return r280_ArcImpl(1, r302_h1, r302_v1, r302_h2, r302_v2, r302_cl, r302_cr);
                };
                r280_exports.ArcHV = r280_ArcHV = function (r304_h1, r304_v1, r304_h2, r304_v2, r304_cl, r304_cr) {
                    var _r304_t0, _r304_t1;
                    return r280_ArcImpl(0, r304_h1, r304_v1, r304_h2, r304_v2, r304_cl, r304_cr);
                };
                r280_exports.Box = r280_Box = function (r306_h1, r306_v1, r306_h2, r306_v2) {
                    var _r306_t0, _r306_t1;
                    return function () {
                        var _r308_t1;
                        var _r308_t0 = this;
                        var r308_currentGlyph = _r308_t0;
                        var r308_z1 = r277_tfm.applyXY(r1_mix(r277_box.left, r277_box.right, r306_h1), r1_mix(r277_box.bottom, r277_box.top, r306_v1));
                        var r308_z2 = r277_tfm.applyXY(r1_mix(r277_box.left, r277_box.right, r306_h2), r1_mix(r277_box.bottom, r277_box.top, r306_v1));
                        var r308_z3 = r277_tfm.applyXY(r1_mix(r277_box.left, r277_box.right, r306_h2), r1_mix(r277_box.bottom, r277_box.top, r306_v2));
                        var r308_z4 = r277_tfm.applyXY(r1_mix(r277_box.left, r277_box.right, r306_h1), r1_mix(r277_box.bottom, r277_box.top, r306_v2));
                        r308_currentGlyph.include(r272_xn$spirooutline$1aao(r272_corner(r308_z1.x, r308_z1.y), r272_corner(r308_z2.x, r308_z2.y), r272_corner(r308_z3.x, r308_z3.y), r272_corner(r308_z4.x, r308_z4.y)));
                        return void 0;
                    };
                };
                r280_exports.Circ = r280_Circ = function (r311_h1, r311_v1, r311_pr) {
                    var _r311_t0, _r311_t1;
                    return function () {
                        var _r313_t1;
                        var _r313_t0 = this;
                        var r313_currentGlyph = _r313_t0;
                        var r313_z1 = r277_tfm.applyXY(r1_mix(r277_box.left, r277_box.right, r311_h1), r1_mix(r277_box.bottom, r277_box.top, r311_v1));
                        r313_currentGlyph.include(r272_DotAt(r313_z1.x, r313_z1.y, r311_pr * (r277_box.top - r277_box.bottom)));
                        return void 0;
                    };
                };
                return r280_exports;
            }();
        };
        r272_xn$ExportCapture$2Lrc4b(function () {
            var _r316_t0, _r316_t1;
            return { 'PointingHandShape': r272_PointingHandShape };
        });
        var r272_PointingHandShape = function (r317_box, r317_tfm, r317_sw) {
            var _r317_t0, _r317_t1;
            var r317_Kit = r272_StickFigureKit(r317_box, r317_tfm, r317_sw);
            return r272_union(r317_Kit.RoundSeg(0 / 24, 0 / 8, 0 / 24, 8 / 8, 1, 1), r317_Kit.RoundSeg(3 / 24, 7 / 8, 0 / 24, 8 / 8), r317_Kit.RoundSeg(3 / 24, 1 / 8, 0 / 24, 0 / 8), r317_Kit.RoundSeg(3 / 24, 7 / 8, 3 / 24, 1 / 8), r317_Kit.ArcVH(3 / 24, 7 / 8, 6 / 24, 8 / 8), r317_Kit.ArcVH(3 / 24, 1 / 8, 6 / 24, 0 / 8), r317_Kit.RoundSeg(6 / 24, 8 / 8, 22 / 24, 8 / 8), r317_Kit.ArcHV(22 / 24, 8 / 8, 24 / 24, 7 / 8), r317_Kit.ArcVH(24 / 24, 7 / 8, 22 / 24, 6 / 8), r317_Kit.RoundSeg(14 / 24, 6 / 8, 22 / 24, 6 / 8), r317_Kit.ArcHV(11 / 24, 8 / 8, 14 / 24, 6 / 8), r317_Kit.ArcVH(14 / 24, 6 / 8, 12 / 24, 5 / 8), r317_Kit.RoundSeg(9 / 24, 5 / 8, 12 / 24, 5 / 8, 1, 0), r317_Kit.ArcVH(9 / 24, 5 / 8, 3 / 24, 2 / 8), r317_Kit.ArcHV(15 / 24, 6 / 8, 17 / 24, 5 / 8), r317_Kit.ArcVH(17 / 24, 5 / 8, 15 / 24, 4 / 8), r317_Kit.RoundSeg(11 / 24, 4 / 8, 15 / 24, 4 / 8, 1, 0), r317_Kit.ArcHV(14 / 24, 4 / 8, 16 / 24, 3 / 8), r317_Kit.ArcVH(16 / 24, 3 / 8, 14 / 24, 2 / 8), r317_Kit.RoundSeg(8 / 24, 2 / 8, 14 / 24, 2 / 8, 1, 0), r317_Kit.ArcHV(13 / 24, 2 / 8, 15 / 24, 1 / 8), r317_Kit.ArcVH(15 / 24, 1 / 8, 13 / 24, 0 / 8), r317_Kit.RoundSeg(6 / 24, 0 / 8, 13 / 24, 0 / 8));
        };
        return function () {
            var r320_FMosaicWide, r320_MosaicNameSuffix, r320_MosaicWidth, r320_MosaicWidthScalar, _r320_t3, _r320_t5, _r320_t6, _r320_tag7;
            var r320_WidthKinds = [
                [
                    0,
                    '.NWID',
                    r272_xn$Capture$2Lrc8.Metrics.Width,
                    1
                ],
                [
                    1,
                    '.WWID',
                    r272_xn$Capture$2Lrc8.Metrics.WideWidth0,
                    2
                ]
            ];
            var _r320_t0 = r320_WidthKinds;
            var _r320_t1 = _r320_t0.length;
            var _r320_t2 = 0;
            var _r320_t4 = _r320_t2 < _r320_t1;
            while (_r320_t4) {
                _r320_t3 = _r320_t0[_r320_t2];
                r320_FMosaicWide = _r320_t3[0];
                r320_MosaicNameSuffix = _r320_t3[1];
                r320_MosaicWidth = _r320_t3[2];
                r320_MosaicWidthScalar = _r320_t3[3];
                (function () {
                    var r323_MosaicDesiredWidth = r272_WideWidth1;
                    var r323_MosaicMiddle = r320_MosaicWidth / 2;
                    var r323_MosaicUnitWidth = r320_MosaicWidth / r320_MosaicWidthScalar;
                    var r323_MangleUnicode = function (r324_unicode, r324__desiredOverride) {
                        var _r324_t0, _r324_t1;
                        return r320_MosaicWidth === (r324__desiredOverride || r323_MosaicDesiredWidth) ? r324_unicode : void 0;
                    };
                    var r323_MangleName = function (r325_name) {
                        var _r325_t0, _r325_t1;
                        return r325_name + r320_MosaicNameSuffix;
                    };
                    var r323_sb = r272_SB * (0.5 * r320_MosaicWidthScalar);
                    var r323_hBox = new r1_Box(r1_mix(r272_SymbolMid, r272_PlusTop, 0.5 * r320_MosaicWidthScalar), r1_mix(r272_SymbolMid, r272_PlusBot, 0.5 * r320_MosaicWidthScalar), r323_sb, r320_MosaicWidth - r323_sb);
                    var r323_vScalar = Math.sqrt(2 * r320_MosaicWidthScalar);
                    var r323_vBox = new r1_Box(r1_mix(r272_SymbolMid, r272_PlusTop, 0.5 * r323_vScalar), r1_mix(r272_SymbolMid, r272_PlusBot, 0.5 * r323_vScalar), r323_sb + 0.5 * (r320_MosaicWidth - r272_Width * r323_vScalar), r272_Width * r323_vScalar - r323_sb + 0.5 * (r320_MosaicWidth - r272_Width * r323_vScalar));
                    var r323_sw = r272_AdviceStroke(8, Math.sqrt(r320_MosaicWidthScalar));
                    r272_xn$createAndSaveGlyphImpl$2Lrc3c(r323_MangleName('whiteRightPointingIndex'), r323_MangleUnicode(9758), function () {
                        var _r328_t1;
                        var _r328_t0 = this;
                        var r328_currentGlyph = _r328_t0;
                        r328_currentGlyph.setWidth(r320_MosaicWidth);
                        r328_currentGlyph.include(r272_PointingHandShape(r323_hBox, r272_Translate(0, 0), r323_sw));
                        return void 0;
                    });
                    r272_xn$createAndSaveGlyphImpl$2Lrc3c(r323_MangleName('whiteLeftPointingIndex'), r323_MangleUnicode(9756), function () {
                        var _r333_t1;
                        var _r333_t0 = this;
                        var r333_currentGlyph = _r333_t0;
                        r333_currentGlyph.setWidth(r320_MosaicWidth);
                        var r333_tfm = r1_Transform.Combine(r272_Translate(-0.5 * r320_MosaicWidth, -r272_SymbolMid), r272_Scale(-1, 1), r272_Translate(+0.5 * r320_MosaicWidth, +r272_SymbolMid));
                        r333_currentGlyph.include(r272_PointingHandShape(r323_hBox, r333_tfm, r323_sw));
                        return void 0;
                    });
                    r272_xn$createAndSaveGlyphImpl$2Lrc3c(r323_MangleName('whiteDownPointingIndex'), r323_MangleUnicode(9759), function () {
                        var _r338_t1;
                        var _r338_t0 = this;
                        var r338_currentGlyph = _r338_t0;
                        r338_currentGlyph.setWidth(r320_MosaicWidth);
                        var r338_tfm = r1_Transform.Combine(r272_Translate(-0.5 * r320_MosaicWidth, -r272_SymbolMid), r272_Rotate(-0.5 * Math.PI), r272_Translate(+0.5 * r320_MosaicWidth, +r272_SymbolMid));
                        r338_currentGlyph.include(r272_PointingHandShape(r323_vBox, r338_tfm, r323_sw));
                        return void 0;
                    });
                    return r272_xn$createAndSaveGlyphImpl$2Lrc3c(r323_MangleName('whiteUpPointingIndex'), r323_MangleUnicode(9757), function () {
                        var _r343_t1;
                        var _r343_t0 = this;
                        var r343_currentGlyph = _r343_t0;
                        r343_currentGlyph.setWidth(r320_MosaicWidth);
                        var r343_tfm = r1_Transform.Combine(r272_Translate(-0.5 * r320_MosaicWidth, -r272_SymbolMid), r272_Scale(-1, 1), r272_Rotate(-0.5 * Math.PI), r272_Translate(+0.5 * r320_MosaicWidth, +r272_SymbolMid));
                        r343_currentGlyph.include(r272_PointingHandShape(r323_vBox, r343_tfm, r323_sw));
                        return void 0;
                    });
                }());
                _r320_t5 = _r320_t2 = _r320_t2 + 1;
                _r320_t4 = _r320_t2 < _r320_t1;
            }
            return _r320_t5;
        }();
    });
    return void 0;
});
