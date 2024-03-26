'use strict';
import * as _s0_t0 from 'typo-geom';
import * as _s0_t1 from '../../support/geometry/curve-util.mjs';
import * as _s0_t2 from '../../support/utils.mjs';
import * as _s0_t3 from '../../meta/aesthetics.mjs';
import * as _s0_t4 from '../../support/gr.mjs';
import * as _s0_t5 from '../../support/geometry/box.mjs';
import * as _s0_t6 from '../../support/geometry/point.mjs';
var _s0_t7;
export {
    _s0_t7 as apply
};
var r1_apply, _r1_t0, _r1_t1, _r1_t2, _r1_t3, _r1_t4, _r1_t5, _r1_t6, _r1_t7;
var _r1_t8 = _s0_t0;
var r1_Arcs = _r1_t8.Arcs;
var r1_Quadify = _r1_t8.Quadify;
var r1_ShapeConv = _r1_t8.ShapeConv;
var _r1_t9 = _s0_t1;
var r1_OffsetCurve = _r1_t9.OffsetCurve;
var r1_BezToContoursSink = _r1_t9.BezToContoursSink;
var r1_GEOMETRY_PRECISION = _r1_t9.GEOMETRY_PRECISION;
var _r1_t10 = _s0_t2;
var r1_mix = _r1_t10.mix;
var r1_linreg = _r1_t10.linreg;
var r1_clamp = _r1_t10.clamp;
var r1_fallback = _r1_t10.fallback;
var _r1_t11 = _s0_t3;
var r1_DesignParameters = _r1_t11.DesignParameters;
var _r1_t12 = _s0_t4;
var r1_TieMark = _r1_t12.TieMark;
var r1_TieGlyph = _r1_t12.TieGlyph;
var _r1_t13 = _s0_t5;
var r1_Box = _r1_t13.Box;
var _r1_t14 = _s0_t6;
var r1_Point = _r1_t14.Point;
var r1_xn$GlyphBlocks$2Lrc2b = [];
_s0_t7 = r1_apply = function () {
    var r271_block, _r271_t4, _r271_t6;
    var _r271_t3 = this;
    var _r271_t0 = r1_xn$GlyphBlocks$2Lrc2b;
    var _r271_t1 = _r271_t0.length;
    var _r271_t2 = 0;
    var _r271_t5 = _r271_t2 < _r271_t1;
    while (_r271_t5) {
        _r271_t6 = (r271_block = _r271_t0[_r271_t2], r271_block(_r271_t3), _r271_t2 = _r271_t2 + 1);
        _r271_t5 = _r271_t2 < _r271_t1;
    }
    return _r271_t6;
};
r1_xn$GlyphBlocks$2Lrc2b.push(function (r275_xn$Capture_Ext$2Lrc2b) {
    var _r275_t0, _r275_t1;
    r275_xn$Capture_Ext$2Lrc2b['$defineGlyphBlockImpl$'](r275_xn$Capture_Ext$2Lrc2b, 'Mark-Above', function (r276_xn$Capture$2Lrc8, r276_xn$ExportCapture$2Lrc4b) {
        var r276_suffix, r276_DrawAt, r276_kdr, _r276_t11, _r276_t14, _r276_t17, _r276_t18, _r276_t19, _r276_t20, _r276_tag21, _r276_t22, _r276_tag23, _r276_t24, _r276_tag25, _r276_t26, _r276_tag27, _r276_t28, _r276_tag29;
        var _r276_t0 = r276_xn$Capture$2Lrc8;
        var r276_xn$createAndSaveGlyphImpl$2Lrc3c = _r276_t0['$createAndSaveGlyphImpl$'];
        var r276_xn$NamedParameterPair$2Lrc9b = _r276_t0['$NamedParameterPair$'];
        var r276_xn$assignUnicodeImpl$2Lrc8b = _r276_t0['$assignUnicodeImpl$'];
        var r276_xn$execState$2Lrc0b = _r276_t0['$execState$'];
        var r276_para = _r276_t0.para;
        var r276_DivFrame = _r276_t0.DivFrame;
        var _r276_t1 = r276_xn$Capture$2Lrc8.Metrics;
        var r276_DesignParameters = _r276_t1.DesignParameters;
        var r276_UPM = _r276_t1.UPM;
        var r276_Width = _r276_t1.Width;
        var r276_SB = _r276_t1.SB;
        var r276_CAP = _r276_t1.CAP;
        var r276_XH = _r276_t1.XH;
        var r276_Descender = _r276_t1.Descender;
        var r276_SymbolMid = _r276_t1.SymbolMid;
        var r276_Translate = _r276_t1.Translate;
        var r276_ApparentTranslate = _r276_t1.ApparentTranslate;
        var r276_TanSlope = _r276_t1.TanSlope;
        var r276_HVContrast = _r276_t1.HVContrast;
        var r276_Upward = _r276_t1.Upward;
        var r276_Downward = _r276_t1.Downward;
        var r276_Rightward = _r276_t1.Rightward;
        var r276_Leftward = _r276_t1.Leftward;
        var r276_O = _r276_t1.O;
        var r276_OX = _r276_t1.OX;
        var r276_ArchDepth = _r276_t1.ArchDepth;
        var r276_Stroke = _r276_t1.Stroke;
        var r276_AccentStackOffset = _r276_t1.AccentStackOffset;
        var r276_AccentClearance = _r276_t1.AccentClearance;
        var r276_AccentHeight = _r276_t1.AccentHeight;
        var r276_WideWidth1 = _r276_t1.WideWidth1;
        var r276_HalfStroke = _r276_t1.HalfStroke;
        var r276_RightSB = _r276_t1.RightSB;
        var r276_Middle = _r276_t1.Middle;
        var r276_DotRadius = _r276_t1.DotRadius;
        var r276_ArchDepthA = _r276_t1.ArchDepthA;
        var r276_ArchDepthB = _r276_t1.ArchDepthB;
        var r276_AdviceStroke = _r276_t1.AdviceStroke;
        var r276_OperatorStroke = _r276_t1.OperatorStroke;
        var r276_StrokeWidthBlend = _r276_t1.StrokeWidthBlend;
        var _r276_t2 = r276_xn$Capture$2Lrc8.SpiroFns;
        var r276_g4 = _r276_t2.g4;
        var r276_g2 = _r276_t2.g2;
        var r276_corner = _r276_t2.corner;
        var r276_flat = _r276_t2.flat;
        var r276_curl = _r276_t2.curl;
        var r276_end = _r276_t2.end;
        var r276_straight = _r276_t2.straight;
        var r276_widths = _r276_t2.widths;
        var r276_heading = _r276_t2.heading;
        var r276_alsoThru = _r276_t2.alsoThru;
        var r276_alsoThruThem = _r276_t2.alsoThruThem;
        var r276_quadControls = _r276_t2.quadControls;
        var r276_archv = _r276_t2.archv;
        var r276_arcvh = _r276_t2.arcvh;
        var r276_dispiro = _r276_t2.dispiro;
        var _r276_t3 = r276_xn$Capture$2Lrc8.BooleFns;
        var r276_union = _r276_t3.union;
        var r276_intersection = _r276_t3.intersection;
        var r276_difference = _r276_t3.difference;
        var _r276_t4 = r276_xn$Capture$2Lrc8.CommonShapes.resolve();
        var r276_Rect = _r276_t4.Rect;
        var r276_Ring = _r276_t4.Ring;
        var r276_DotAt = _r276_t4.DotAt;
        var r276_HBar = _r276_t4.HBar;
        var r276_VBar = _r276_t4.VBar;
        var r276_FlipAround = _r276_t4.FlipAround;
        var r276_ForceUpright = _r276_t4.ForceUpright;
        var r276_WithTransform = _r276_t4.WithTransform;
        var r276_ExtLineLhs = _r276_t4.ExtLineLhs;
        var r276_MaskAbove = _r276_t4.MaskAbove;
        var r276_MaskBelow = _r276_t4.MaskBelow;
        var r276_DotVariants = _r276_t4.DotVariants;
        var _r276_t5 = r276_xn$Capture$2Lrc8['Common-Derivatives'].resolve();
        var r276_xn$selectvariant$7Hrq = _r276_t5['select-variant'];
        var r276_xn$referglyph$1aao = _r276_t5['refer-glyph'];
        var r276_alias = _r276_t5.alias;
        var r276_turned = _r276_t5.turned;
        var r276_xn$deriveglyphs$7Hrq = _r276_t5['derive-glyphs'];
        var _r276_t6 = r276_xn$Capture$2Lrc8['Mark-Shared-Metrics'].resolve();
        var r276_markExtend = _r276_t6.markExtend;
        var r276_markStroke = _r276_t6.markStroke;
        var r276_markHalfStroke = _r276_t6.markHalfStroke;
        var r276_markStress = _r276_t6.markStress;
        var r276_markFine = _r276_t6.markFine;
        var _r276_t7 = r276_xn$Capture$2Lrc8['Mark-Shared-Metrics'].resolve();
        var r276_asciiMarkZoomX = _r276_t7.asciiMarkZoomX;
        var r276_asciiMarkZoomY = _r276_t7.asciiMarkZoomY;
        var _r276_t8 = r276_xn$Capture$2Lrc8['Mark-Shared-Metrics'].resolve();
        var r276_markMiddle = _r276_t8.markMiddle;
        var r276_markDotsRadius = _r276_t8.markDotsRadius;
        var r276_dialytikaRadius = _r276_t8.dialytikaRadius;
        r276_xn$ExportCapture$2Lrc4b(function () {
            var _r283_t0, _r283_t1;
            return {
                'aboveMarkTop': r276_aboveMarkTop,
                'aboveMarkBot': r276_aboveMarkBot,
                'aboveMarkMid': r276_aboveMarkMid,
                'aboveMarkStack': r276_aboveMarkStack
            };
        });
        var r276_aboveMarkTop = r276_XH + r276_AccentClearance + r276_AccentHeight;
        var r276_aboveMarkBot = r276_XH + r276_AccentClearance;
        var r276_aboveMarkMid = r1_mix(r276_aboveMarkBot, r276_aboveMarkTop, 0.5);
        var r276_aboveMarkStack = r276_XH + r276_AccentStackOffset;
        r276_xn$ExportCapture$2Lrc4b(function () {
            var _r285_t0, _r285_t1;
            return {
                'commaOvershoot': r276_commaOvershoot,
                'commaOvershoot2': r276_commaOvershoot2,
                'commaAboveRadius': r276_commaAboveRadius
            };
        });
        var r276_commaOvershoot = r276_O * r1_linreg(16, 0, 90, -1, r276_markStroke);
        var r276_commaOvershoot2 = r276_O * r1_linreg(16, 1, 90, -1, r276_markStroke);
        var r276_commaAboveRadius = 0.85 * r276_DotRadius * r276_markHalfStroke / r276_HalfStroke;
        var r276_StdAnchors = function () {
            var r288_impl, r288_narrow, r288_mediumNarrow, r288_medium, r288_mediumWide, r288_wide;
            var r288_exports = {};
            r288_exports.impl = r288_impl = function (r296_mk, r296_padding, r296_k) {
                var _r296_t0, _r296_t1;
                return function () {
                    var _r298_t1;
                    var _r298_t0 = this;
                    var r298_currentGlyph = _r298_t0;
                    if (r296_mk === 'above')
                        r298_currentGlyph.setMarkAnchor(r296_mk, r276_markMiddle, r276_XH - r296_padding * r276_AccentHeight, r276_markMiddle, r276_aboveMarkStack + r296_padding * r276_AccentHeight);
                    else
                        r298_currentGlyph.setMarkAnchor(r296_mk, r276_markMiddle, r276_XH - r296_padding * r276_AccentHeight);
                    r298_currentGlyph.setBaseAnchor('aboveBraceL', r276_markMiddle - r296_k * r276_markExtend, r276_aboveMarkMid);
                    r298_currentGlyph.setBaseAnchor('aboveBraceR', r276_markMiddle + r296_k * r276_markExtend, r276_aboveMarkMid);
                    return void 0;
                };
            };
            r288_exports.narrow = r288_narrow = function () {
                var _r304_t0, _r304_t1;
                return r288_impl('above', 0, 0);
            };
            r288_exports.mediumNarrow = r288_mediumNarrow = function () {
                var _r306_t0, _r306_t1;
                return r288_impl('above', 0, 0.25);
            };
            r288_exports.medium = r288_medium = function () {
                var _r308_t0, _r308_t1;
                return r288_impl('above', 0, 0.5);
            };
            r288_exports.mediumWide = r288_mediumWide = function () {
                var _r310_t0, _r310_t1;
                return r288_impl('above', 0, 0.75);
            };
            r288_exports.wide = r288_wide = function () {
                var _r312_t0, _r312_t1;
                return r288_impl('above', 0, 1);
            };
            return r288_exports;
        }();
        var _r276_t9 = Object.entries(r276_DotVariants)[Symbol.iterator]();
        var _r276_t10 = void 0;
        while (!(_r276_t10 = _r276_t9.next()).done) {
            _r276_t11 = _r276_t10.value;
            r276_suffix = _r276_t11[0];
            r276_DrawAt = _r276_t11[1][0];
            r276_kdr = _r276_t11[1][1];
            _r276_t11[1];
            (function () {
                r276_xn$createAndSaveGlyphImpl$2Lrc3c('dotAbove.' + r276_suffix, null, function () {
                    var _r318_t1;
                    var _r318_t0 = this;
                    var r318_currentGlyph = _r318_t0;
                    r318_currentGlyph.setWidth(0);
                    r318_currentGlyph.include(r276_StdAnchors.narrow());
                    r318_currentGlyph.include(r276_DrawAt(r276_markMiddle, r276_aboveMarkMid, r276_DotRadius * r276_kdr));
                    return void 0;
                });
                r276_xn$createAndSaveGlyphImpl$2Lrc3c('dieresisAbove.' + r276_suffix, null, function () {
                    var _r324_t1;
                    var _r324_t0 = this;
                    var r324_currentGlyph = _r324_t0;
                    r324_currentGlyph.setWidth(0);
                    r324_currentGlyph.include(r276_StdAnchors.wide());
                    r324_currentGlyph.include(r276_DrawAt(r276_markMiddle - r276_markExtend, r276_aboveMarkMid, r276_markDotsRadius * r276_kdr));
                    r324_currentGlyph.include(r276_DrawAt(r276_markMiddle + r276_markExtend, r276_aboveMarkMid, r276_markDotsRadius * r276_kdr));
                    return void 0;
                });
                r276_xn$createAndSaveGlyphImpl$2Lrc3c('dieresisAboveAlwaysUpright.' + r276_suffix, null, function () {
                    var _r331_t1;
                    var _r331_t0 = this;
                    var r331_currentGlyph = _r331_t0;
                    r331_currentGlyph.setWidth(0);
                    r331_currentGlyph.include(r276_StdAnchors.wide());
                    r331_currentGlyph.include(r276_ForceUpright());
                    r331_currentGlyph.include(r276_DrawAt(r276_markMiddle - r276_markExtend, r276_aboveMarkMid, r276_markDotsRadius * r276_kdr));
                    r331_currentGlyph.include(r276_DrawAt(r276_markMiddle + r276_markExtend, r276_aboveMarkMid, r276_markDotsRadius * r276_kdr));
                    return void 0;
                });
                r276_xn$createAndSaveGlyphImpl$2Lrc3c('dialytikaAbove.' + r276_suffix, null, function () {
                    var _r339_t1;
                    var _r339_t0 = this;
                    var r339_currentGlyph = _r339_t0;
                    r339_currentGlyph.setWidth(0);
                    r339_currentGlyph.include(r276_DrawAt(r276_markMiddle - r276_markExtend * 1.25, r276_aboveMarkMid, r276_dialytikaRadius * r276_kdr));
                    r339_currentGlyph.include(r276_DrawAt(r276_markMiddle + r276_markExtend * 1.25, r276_aboveMarkMid, r276_dialytikaRadius * r276_kdr));
                    return void 0;
                });
                r276_xn$createAndSaveGlyphImpl$2Lrc3c('tripleDotAbove.' + r276_suffix, null, function () {
                    var _r345_t1;
                    var _r345_t0 = this;
                    var r345_currentGlyph = _r345_t0;
                    r345_currentGlyph.setWidth(0);
                    var r345_height = r276_markExtend * Math.sqrt(3);
                    r345_currentGlyph.setMarkAnchor('above', r276_markMiddle, r276_XH, r276_markMiddle, r276_aboveMarkStack + r345_height);
                    r345_currentGlyph.setBaseAnchor('aboveBraceL', r276_markMiddle - r276_markExtend, r276_aboveMarkMid + r345_height / 2);
                    r345_currentGlyph.setBaseAnchor('aboveBraceR', r276_markMiddle + r276_markExtend, r276_aboveMarkMid + r345_height / 2);
                    r345_currentGlyph.include(r276_DrawAt(r276_markMiddle - r276_markExtend, r276_aboveMarkMid, r276_markDotsRadius * r276_kdr));
                    r345_currentGlyph.include(r276_DrawAt(r276_markMiddle + r276_markExtend, r276_aboveMarkMid, r276_markDotsRadius * r276_kdr));
                    r345_currentGlyph.include(r276_DrawAt(r276_markMiddle, r276_aboveMarkMid + r345_height, r276_markDotsRadius * r276_kdr));
                    return void 0;
                });
                r276_xn$createAndSaveGlyphImpl$2Lrc3c('elipsisAbove.' + r276_suffix, null, function () {
                    var _r355_t1;
                    var _r355_t0 = this;
                    var r355_currentGlyph = _r355_t0;
                    r355_currentGlyph.setWidth(0);
                    r355_currentGlyph.include(r276_StdAnchors.impl('above', 0, 1.5));
                    r355_currentGlyph.include(r276_DrawAt(r276_markMiddle - r276_markExtend * 1.5, r276_aboveMarkMid, r276_markDotsRadius * r276_kdr));
                    r355_currentGlyph.include(r276_DrawAt(r276_markMiddle, r276_aboveMarkMid, r276_markDotsRadius * r276_kdr));
                    r355_currentGlyph.include(r276_DrawAt(r276_markMiddle + r276_markExtend * 1.5, r276_aboveMarkMid, r276_markDotsRadius * r276_kdr));
                    return void 0;
                });
                return r276_xn$createAndSaveGlyphImpl$2Lrc3c('fourDotsAbove.' + r276_suffix, null, function () {
                    var _r363_t1;
                    var _r363_t0 = this;
                    var r363_currentGlyph = _r363_t0;
                    r363_currentGlyph.setWidth(0);
                    r363_currentGlyph.include(r276_StdAnchors.impl('above', 0, 2));
                    r363_currentGlyph.include(r276_DrawAt(r276_markMiddle - r276_markExtend * 2, r276_aboveMarkMid, r276_markDotsRadius * r276_kdr));
                    r363_currentGlyph.include(r276_DrawAt(r276_markMiddle - r276_markExtend * 2 / 3, r276_aboveMarkMid, r276_markDotsRadius * r276_kdr));
                    r363_currentGlyph.include(r276_DrawAt(r276_markMiddle + r276_markExtend * 2 / 3, r276_aboveMarkMid, r276_markDotsRadius * r276_kdr));
                    r363_currentGlyph.include(r276_DrawAt(r276_markMiddle + r276_markExtend * 2, r276_aboveMarkMid, r276_markDotsRadius * r276_kdr));
                    return void 0;
                });
            }());
        }
        r276_xn$selectvariant$7Hrq('dotAbove', 775, new r276_xn$NamedParameterPair$2Lrc9b('follow', 'diacriticDot'));
        r276_xn$selectvariant$7Hrq('dieresisAbove', 776, new r276_xn$NamedParameterPair$2Lrc9b('follow', 'diacriticDot'));
        r276_xn$selectvariant$7Hrq('dieresisAboveAlwaysUpright', new r276_xn$NamedParameterPair$2Lrc9b('follow', 'diacriticDot'));
        r276_xn$selectvariant$7Hrq('dialytikaAbove', new r276_xn$NamedParameterPair$2Lrc9b('follow', 'diacriticDot'));
        r276_xn$selectvariant$7Hrq('tripleDotAbove', 6836, new r276_xn$NamedParameterPair$2Lrc9b('follow', 'diacriticDot'));
        r276_xn$selectvariant$7Hrq('elipsisAbove', 8411, new r276_xn$NamedParameterPair$2Lrc9b('follow', 'diacriticDot'));
        r276_xn$selectvariant$7Hrq('fourDotsAbove', 8412, new r276_xn$NamedParameterPair$2Lrc9b('follow', 'diacriticDot'));
        r276_xn$ExportCapture$2Lrc4b(function () {
            var _r378_t0, _r378_t1;
            return {
                'RingDims': r276_RingDims,
                'RingShape': r276_RingShape
            };
        });
        var r276_RingDims = function (r379__radiusOut) {
            var _r379_t0, _r379_t1;
            var r379_radiusOut = r1_fallback(r379__radiusOut, r276_AccentHeight * r1_linreg(16, 0.5, 90, 0.75, r276_markStroke));
            var r379_radiusIn = r379_radiusOut - r276_markFine * r1_linreg(16, 2, 90, 1.75, r276_markStroke);
            return {
                'radiusIn': r379_radiusIn,
                'radiusOut': r379_radiusOut
            };
        };
        var r276_RingShape = function (r380_cx, r380_cy, r380__radiusOut) {
            var _r380_t0, _r380_t1;
            return function () {
                var _r382_t2;
                var _r382_t1 = this;
                var r382_currentGlyph = _r382_t1;
                var _r382_t0 = r276_RingDims(r380__radiusOut);
                var r382_radiusIn = _r382_t0.radiusIn;
                var r382_radiusOut = _r382_t0.radiusOut;
                r382_currentGlyph.include(r276_difference(r276_DotAt(r380_cx, r380_cy, r382_radiusOut), r276_DotAt(r380_cx, r380_cy, r382_radiusIn)));
                return void 0;
            };
        };
        r276_xn$createAndSaveGlyphImpl$2Lrc3c('ringAbove', 778, function () {
            var _r386_t1;
            var _r386_t0 = this;
            var r386_currentGlyph = _r386_t0;
            r386_currentGlyph.setWidth(0);
            r386_currentGlyph.include(r276_StdAnchors.medium());
            r386_currentGlyph.include(r276_RingShape(r276_markMiddle, r276_aboveMarkMid));
            return void 0;
        });
        r276_xn$createAndSaveGlyphImpl$2Lrc3c('dblRingAbove', 6834, function () {
            var _r392_t2;
            var _r392_t1 = this;
            var r392_currentGlyph = _r392_t1;
            r392_currentGlyph.setWidth(0);
            var _r392_t0 = r276_RingDims();
            var r392_radiusIn = _r392_t0.radiusIn;
            var r392_radiusOut = _r392_t0.radiusOut;
            var r392_k = 2 * (r392_radiusOut - (r392_radiusOut - r392_radiusIn) * 0.25);
            r392_currentGlyph.include(r276_WithTransform(r276_Translate(+r392_k / 2, 0), r276_xn$referglyph$1aao('ringAbove')));
            r392_currentGlyph.include(r276_WithTransform(r276_Translate(-r392_k / 2, 0), r276_xn$referglyph$1aao('ringAbove')));
            r392_currentGlyph.include(r276_StdAnchors.wide());
            return void 0;
        });
        var _r276_t12 = Object.entries(r276_DotVariants)[Symbol.iterator]();
        var _r276_t13 = void 0;
        while (!(_r276_t13 = _r276_t12.next()).done) {
            _r276_t14 = _r276_t13.value;
            r276_suffix = _r276_t14[0];
            r276_DrawAt = _r276_t14[1][0];
            r276_kdr = _r276_t14[1][1];
            _r276_t14[1];
            (function () {
                return r276_xn$createAndSaveGlyphImpl$2Lrc3c('dieresisRingAbove.' + r276_suffix, null, function () {
                    var _r402_t1;
                    var _r402_t0 = this;
                    var r402_currentGlyph = _r402_t0;
                    r402_currentGlyph.setWidth(0);
                    r402_currentGlyph.include(r276_StdAnchors.impl('above', 0, 1.5));
                    r402_currentGlyph.include(r276_RingShape(r276_markMiddle, r276_aboveMarkMid));
                    r402_currentGlyph.include(r276_DrawAt(r276_markMiddle + r276_markExtend * 1.7, r276_aboveMarkMid, r276_markDotsRadius * r276_kdr));
                    r402_currentGlyph.include(r276_DrawAt(r276_markMiddle - r276_markExtend * 1.7, r276_aboveMarkMid, r276_markDotsRadius * r276_kdr));
                    return void 0;
                });
            }());
        }
        r276_xn$selectvariant$7Hrq('dieresisRingAbove', 6833, new r276_xn$NamedParameterPair$2Lrc9b('follow', 'diacriticDot'));
        r276_xn$createAndSaveGlyphImpl$2Lrc3c('graveAbove', 768, function () {
            var _r411_t1;
            var _r411_t0 = this;
            var r411_currentGlyph = _r411_t0;
            r411_currentGlyph.setWidth(0);
            r411_currentGlyph.include(r276_StdAnchors.medium());
            r411_currentGlyph.include(r276_dispiro(r276_flat(r276_markMiddle + r276_markStress, r276_aboveMarkBot, r276_widths(r276_markFine, r276_markFine)), r276_curl(r276_markMiddle - 0.875 * r276_markExtend, r276_aboveMarkTop, r276_widths(r276_markStress, r276_markStress))));
            return void 0;
        });
        r276_xn$createAndSaveGlyphImpl$2Lrc3c('asciiGrave/body/straight', null, function () {
            var _r417_t1;
            var _r417_t0 = this;
            var r417_currentGlyph = _r417_t0;
            var r417_df = r276_DivFrame(r276_para.diversityF);
            r417_currentGlyph.setWidth(r417_df.width);
            r417_currentGlyph.include(r276_dispiro(r276_flat(r417_df.middle + r276_HalfStroke * 1.1 * r276_asciiMarkZoomX * Math.sqrt(r417_df.div), r1_mix(r276_aboveMarkMid, r276_aboveMarkBot, r276_asciiMarkZoomY), r276_widths.center(r276_Stroke * 0.9)), r276_curl(r417_df.middle - r276_markExtend * r276_asciiMarkZoomX * Math.sqrt(r417_df.div), r1_mix(r276_aboveMarkMid, r276_aboveMarkTop, r276_asciiMarkZoomY), r276_widths.center(r276_Stroke * 1.1))));
            return void 0;
        });
        r276_xn$createAndSaveGlyphImpl$2Lrc3c('acuteAbove', 769, function () {
            var _r422_t1;
            var _r422_t0 = this;
            var r422_currentGlyph = _r422_t0;
            r422_currentGlyph.setWidth(0);
            r422_currentGlyph.include(r276_StdAnchors.medium());
            r422_currentGlyph.include(r276_dispiro(r276_flat(r276_markMiddle - r276_markStress, r276_aboveMarkBot, r276_widths(r276_markFine, r276_markFine)), r276_curl(r276_markMiddle + 0.875 * r276_markExtend, r276_aboveMarkTop, r276_widths(r276_markStress, r276_markStress))));
            return void 0;
        });
        r276_xn$createAndSaveGlyphImpl$2Lrc3c('latin1acute', 180, function () {
            var _r428_t1;
            var _r428_t0 = this;
            var r428_currentGlyph = _r428_t0;
            var r428_df = r276_DivFrame(r276_para.diversityF);
            r428_currentGlyph.setWidth(r428_df.width);
            r428_currentGlyph.include(r276_dispiro(r276_flat(r428_df.middle - r276_HalfStroke * 1.1 * r276_asciiMarkZoomX * Math.sqrt(r428_df.div), r1_mix(r276_aboveMarkMid, r276_aboveMarkBot, r276_asciiMarkZoomY), r276_widths.center(r276_Stroke * 0.9)), r276_curl(r428_df.middle + r276_markExtend * r276_asciiMarkZoomX * Math.sqrt(r428_df.div), r1_mix(r276_aboveMarkMid, r276_aboveMarkTop, r276_asciiMarkZoomY), r276_widths.center(r276_Stroke * 1.1))));
            return void 0;
        });
        var r276_CaretCaronWidth = 2 * r276_markExtend + r276_markStress;
        var r276_CaretCaronMidSw = r276_StrokeWidthBlend(1.375, 1.25) * r276_markStroke;
        var r276_CaretCaronTerminalSw = r276_AdviceStroke(5);
        var r276_CaretLeftShape = function () {
            var _r431_t6;
            var _r431_t7 = arguments;
            var _r431_t0 = [].slice.call(_r431_t7, 0);
            var _r431_t1 = [];
            var _r431_t2 = 0;
            while (_r431_t2 < _r431_t0.length) {
                if (!(_r431_t0[_r431_t2] instanceof r276_xn$NamedParameterPair$2Lrc9b))
                    _r431_t1.push(_r431_t0[_r431_t2]);
                _r431_t2 = _r431_t2 + 1;
            }
            var _r431_t3 = _r431_t0;
            var _r431_t4 = _r431_t3.length;
            var _r431_t5 = 0;
            while (_r431_t5 < _r431_t4) {
                _r431_t2 = _r431_t3[_r431_t5];
                if (_r431_t2 && _r431_t2 instanceof r276_xn$NamedParameterPair$2Lrc9b && _r431_t2.left === 'top')
                    r431_top = _r431_t2.right;
                if (_r431_t2 && _r431_t2 instanceof r276_xn$NamedParameterPair$2Lrc9b && _r431_t2.left === 'bottom')
                    r431_bottom = _r431_t2.right;
                if (_r431_t2 && _r431_t2 instanceof r276_xn$NamedParameterPair$2Lrc9b && _r431_t2.left === 'xMiddle')
                    r431_xMiddle = _r431_t2.right;
                if (_r431_t2 && _r431_t2 instanceof r276_xn$NamedParameterPair$2Lrc9b && _r431_t2.left === 'width')
                    r431_width = _r431_t2.right;
                if (_r431_t2 && _r431_t2 instanceof r276_xn$NamedParameterPair$2Lrc9b && _r431_t2.left === 'swEnd')
                    r431_swEnd = _r431_t2.right;
                if (_r431_t2 && _r431_t2 instanceof r276_xn$NamedParameterPair$2Lrc9b && _r431_t2.left === 'swMid')
                    r431_swMid = _r431_t2.right;
                _r431_t5 = _r431_t5 + 1;
            }
            var r431_top = r1_fallback(r431_top, _r431_t1[0]);
            var r431_bottom = r1_fallback(r431_bottom, _r431_t1[1]);
            var r431_xMiddle = r1_fallback(r431_xMiddle, _r431_t1[2]);
            var r431_width = r1_fallback(r431_width, _r431_t1[3]);
            var r431_swEnd = r1_fallback(r431_swEnd, _r431_t1[4]);
            var r431_swMid = r1_fallback(r431_swMid, _r431_t1[5]);
            return r276_dispiro(r276_flat(r431_xMiddle - 0.5 * r431_width, r431_bottom, r276_widths.center(r431_swEnd)), r276_curl(r431_xMiddle, r431_top, r276_widths.center.heading(r431_swMid, r276_Upward)));
        };
        var r276_CaretRightShape = function () {
            var _r436_t6;
            var _r436_t7 = arguments;
            var _r436_t0 = [].slice.call(_r436_t7, 0);
            var _r436_t1 = [];
            var _r436_t2 = 0;
            while (_r436_t2 < _r436_t0.length) {
                if (!(_r436_t0[_r436_t2] instanceof r276_xn$NamedParameterPair$2Lrc9b))
                    _r436_t1.push(_r436_t0[_r436_t2]);
                _r436_t2 = _r436_t2 + 1;
            }
            var _r436_t3 = _r436_t0;
            var _r436_t4 = _r436_t3.length;
            var _r436_t5 = 0;
            while (_r436_t5 < _r436_t4) {
                _r436_t2 = _r436_t3[_r436_t5];
                if (_r436_t2 && _r436_t2 instanceof r276_xn$NamedParameterPair$2Lrc9b && _r436_t2.left === 'top')
                    r436_top = _r436_t2.right;
                if (_r436_t2 && _r436_t2 instanceof r276_xn$NamedParameterPair$2Lrc9b && _r436_t2.left === 'bottom')
                    r436_bottom = _r436_t2.right;
                if (_r436_t2 && _r436_t2 instanceof r276_xn$NamedParameterPair$2Lrc9b && _r436_t2.left === 'xMiddle')
                    r436_xMiddle = _r436_t2.right;
                if (_r436_t2 && _r436_t2 instanceof r276_xn$NamedParameterPair$2Lrc9b && _r436_t2.left === 'width')
                    r436_width = _r436_t2.right;
                if (_r436_t2 && _r436_t2 instanceof r276_xn$NamedParameterPair$2Lrc9b && _r436_t2.left === 'swEnd')
                    r436_swEnd = _r436_t2.right;
                if (_r436_t2 && _r436_t2 instanceof r276_xn$NamedParameterPair$2Lrc9b && _r436_t2.left === 'swMid')
                    r436_swMid = _r436_t2.right;
                _r436_t5 = _r436_t5 + 1;
            }
            var r436_top = r1_fallback(r436_top, _r436_t1[0]);
            var r436_bottom = r1_fallback(r436_bottom, _r436_t1[1]);
            var r436_xMiddle = r1_fallback(r436_xMiddle, _r436_t1[2]);
            var r436_width = r1_fallback(r436_width, _r436_t1[3]);
            var r436_swEnd = r1_fallback(r436_swEnd, _r436_t1[4]);
            var r436_swMid = r1_fallback(r436_swMid, _r436_t1[5]);
            return r276_dispiro(r276_flat(r436_xMiddle + 0.5 * r436_width, r436_bottom, r276_widths.center(r436_swEnd)), r276_curl(r436_xMiddle, r436_top, r276_widths.center.heading(r436_swMid, r276_Upward)));
        };
        var r276_CaretTopBarShape = function () {
            var _r441_t6;
            var _r441_t7 = arguments;
            var _r441_t0 = [].slice.call(_r441_t7, 0);
            var _r441_t1 = [];
            var _r441_t2 = 0;
            while (_r441_t2 < _r441_t0.length) {
                if (!(_r441_t0[_r441_t2] instanceof r276_xn$NamedParameterPair$2Lrc9b))
                    _r441_t1.push(_r441_t0[_r441_t2]);
                _r441_t2 = _r441_t2 + 1;
            }
            var _r441_t3 = _r441_t0;
            var _r441_t4 = _r441_t3.length;
            var _r441_t5 = 0;
            while (_r441_t5 < _r441_t4) {
                _r441_t2 = _r441_t3[_r441_t5];
                if (_r441_t2 && _r441_t2 instanceof r276_xn$NamedParameterPair$2Lrc9b && _r441_t2.left === 'top')
                    r441_top = _r441_t2.right;
                if (_r441_t2 && _r441_t2 instanceof r276_xn$NamedParameterPair$2Lrc9b && _r441_t2.left === 'xMiddle')
                    r441_xMiddle = _r441_t2.right;
                if (_r441_t2 && _r441_t2 instanceof r276_xn$NamedParameterPair$2Lrc9b && _r441_t2.left === 'width')
                    r441_width = _r441_t2.right;
                if (_r441_t2 && _r441_t2 instanceof r276_xn$NamedParameterPair$2Lrc9b && _r441_t2.left === 'pL')
                    r441_pL = _r441_t2.right;
                if (_r441_t2 && _r441_t2 instanceof r276_xn$NamedParameterPair$2Lrc9b && _r441_t2.left === 'pR')
                    r441_pR = _r441_t2.right;
                if (_r441_t2 && _r441_t2 instanceof r276_xn$NamedParameterPair$2Lrc9b && _r441_t2.left === 'swMid')
                    r441_swMid = _r441_t2.right;
                if (_r441_t2 && _r441_t2 instanceof r276_xn$NamedParameterPair$2Lrc9b && _r441_t2.left === 'swBar')
                    r441_swBar = _r441_t2.right;
                _r441_t5 = _r441_t5 + 1;
            }
            var r441_top = r1_fallback(r441_top, _r441_t1[0]);
            var r441_xMiddle = r1_fallback(r441_xMiddle, _r441_t1[1]);
            var r441_width = r1_fallback(r441_width, _r441_t1[2]);
            var r441_pL = r1_fallback(r441_pL, _r441_t1[3]);
            var r441_pR = r1_fallback(r441_pR, _r441_t1[4]);
            var r441_swMid = r1_fallback(r441_swMid, _r441_t1[5]);
            var r441_swBar = r1_fallback(r441_swBar, _r441_t1[6]);
            return r276_dispiro(r276_widths.rhs(r441_swBar), r276_flat(Math.min(r441_xMiddle + 0.5 * r441_width * r441_pL, r441_xMiddle - 0.5 * r441_swMid * r276_HVContrast), r441_top), r276_curl(Math.max(r441_xMiddle + 0.5 * r441_width * r441_pR, r441_xMiddle + 0.5 * r441_swMid * r276_HVContrast), r441_top));
        };
        var r276_CaretShape = function () {
            var _r446_t6;
            var _r446_t7 = arguments;
            var _r446_t0 = [].slice.call(_r446_t7, 0);
            var _r446_t1 = [];
            var _r446_t2 = 0;
            while (_r446_t2 < _r446_t0.length) {
                if (!(_r446_t0[_r446_t2] instanceof r276_xn$NamedParameterPair$2Lrc9b))
                    _r446_t1.push(_r446_t0[_r446_t2]);
                _r446_t2 = _r446_t2 + 1;
            }
            var _r446_t3 = _r446_t0;
            var _r446_t4 = _r446_t3.length;
            var _r446_t5 = 0;
            while (_r446_t5 < _r446_t4) {
                _r446_t2 = _r446_t3[_r446_t5];
                if (_r446_t2 && _r446_t2 instanceof r276_xn$NamedParameterPair$2Lrc9b && _r446_t2.left === 'top')
                    r446_top = _r446_t2.right;
                if (_r446_t2 && _r446_t2 instanceof r276_xn$NamedParameterPair$2Lrc9b && _r446_t2.left === 'bottom')
                    r446_bottom = _r446_t2.right;
                if (_r446_t2 && _r446_t2 instanceof r276_xn$NamedParameterPair$2Lrc9b && _r446_t2.left === 'xMiddle')
                    r446_xMiddle = _r446_t2.right;
                if (_r446_t2 && _r446_t2 instanceof r276_xn$NamedParameterPair$2Lrc9b && _r446_t2.left === 'width')
                    r446_width = _r446_t2.right;
                if (_r446_t2 && _r446_t2 instanceof r276_xn$NamedParameterPair$2Lrc9b && _r446_t2.left === 'swEnd')
                    r446_swEnd = _r446_t2.right;
                if (_r446_t2 && _r446_t2 instanceof r276_xn$NamedParameterPair$2Lrc9b && _r446_t2.left === 'swMid')
                    r446_swMid = _r446_t2.right;
                _r446_t5 = _r446_t5 + 1;
            }
            var r446_top = r1_fallback(r446_top, _r446_t1[0]);
            var r446_bottom = r1_fallback(r446_bottom, _r446_t1[1]);
            var r446_xMiddle = r1_fallback(r446_xMiddle, _r446_t1[2]);
            var r446_width = r1_fallback(r446_width, _r446_t1[3]);
            var r446_swEnd = r1_fallback(r446_swEnd, _r446_t1[4]);
            var r446_swMid = r1_fallback(r446_swMid, _r446_t1[5]);
            return r276_union(r276_CaretLeftShape(r446_top, r446_bottom, r446_xMiddle, r446_width, r446_swEnd, r446_swMid), r276_CaretRightShape(r446_top, r446_bottom, r446_xMiddle, r446_width, r446_swEnd, r446_swMid));
        };
        r276_xn$createAndSaveGlyphImpl$2Lrc3c('asciiCaret.high', null, function () {
            var _r453_t1;
            var _r453_t0 = this;
            var r453_currentGlyph = _r453_t0;
            r453_currentGlyph.include(r276_CaretShape(new r276_xn$NamedParameterPair$2Lrc9b('xMiddle', r276_Middle), new r276_xn$NamedParameterPair$2Lrc9b('width', 3 * r276_markExtend * r276_asciiMarkZoomX - 0.25 * r276_Stroke), new r276_xn$NamedParameterPair$2Lrc9b('top', r1_mix(r276_aboveMarkMid, r276_aboveMarkTop, r276_asciiMarkZoomY) + 0.5 * r276_Stroke), new r276_xn$NamedParameterPair$2Lrc9b('bottom', r1_mix(r276_aboveMarkMid, r276_aboveMarkBot, r276_asciiMarkZoomY)), new r276_xn$NamedParameterPair$2Lrc9b('swEnd', r276_Stroke * 1.05), new r276_xn$NamedParameterPair$2Lrc9b('swMid', r276_StrokeWidthBlend(1.25, 1) * r276_Stroke)));
            return void 0;
        });
        r276_xn$createAndSaveGlyphImpl$2Lrc3c('circumflexAbove', 770, function () {
            var _r463_t1;
            var _r463_t0 = this;
            var r463_currentGlyph = _r463_t0;
            r463_currentGlyph.setWidth(0);
            r463_currentGlyph.include(r276_StdAnchors.wide());
            r463_currentGlyph.include(r276_CaretShape(new r276_xn$NamedParameterPair$2Lrc9b('xMiddle', r276_markMiddle), new r276_xn$NamedParameterPair$2Lrc9b('width', r276_CaretCaronWidth), new r276_xn$NamedParameterPair$2Lrc9b('top', r276_aboveMarkTop + r276_markFine * 0.7), new r276_xn$NamedParameterPair$2Lrc9b('bottom', r276_aboveMarkBot + r276_markStress - r276_markFine), new r276_xn$NamedParameterPair$2Lrc9b('swEnd', r276_CaretCaronTerminalSw), new r276_xn$NamedParameterPair$2Lrc9b('swMid', r276_CaretCaronMidSw)));
            return void 0;
        });
        r276_xn$createAndSaveGlyphImpl$2Lrc3c('bardownAbove', 7622, function () {
            var _r475_t1;
            var _r475_t0 = this;
            var r475_currentGlyph = _r475_t0;
            r475_currentGlyph.setWidth(0);
            r475_currentGlyph.include(r276_StdAnchors.wide());
            r475_currentGlyph.include(r276_CaretRightShape(new r276_xn$NamedParameterPair$2Lrc9b('xMiddle', r276_markMiddle), new r276_xn$NamedParameterPair$2Lrc9b('width', r276_CaretCaronWidth), new r276_xn$NamedParameterPair$2Lrc9b('top', r276_aboveMarkTop + r276_markFine * 0.7), new r276_xn$NamedParameterPair$2Lrc9b('bottom', r276_aboveMarkBot + r276_markStress - r276_markFine), new r276_xn$NamedParameterPair$2Lrc9b('swEnd', r276_CaretCaronTerminalSw), new r276_xn$NamedParameterPair$2Lrc9b('swMid', r276_CaretCaronMidSw)));
            r475_currentGlyph.include(r276_CaretTopBarShape(new r276_xn$NamedParameterPair$2Lrc9b('xMiddle', r276_markMiddle), new r276_xn$NamedParameterPair$2Lrc9b('width', r276_CaretCaronWidth), new r276_xn$NamedParameterPair$2Lrc9b('top', r276_aboveMarkTop + r276_markFine * 0.7), new r276_xn$NamedParameterPair$2Lrc9b('pL', -1), new r276_xn$NamedParameterPair$2Lrc9b('pR', 0), new r276_xn$NamedParameterPair$2Lrc9b('swMid', r276_CaretCaronMidSw), new r276_xn$NamedParameterPair$2Lrc9b('swBar', 2 * r276_markFine)));
            return void 0;
        });
        r276_xn$createAndSaveGlyphImpl$2Lrc3c('upbarAbove', 7623, function () {
            var _r495_t1;
            var _r495_t0 = this;
            var r495_currentGlyph = _r495_t0;
            r495_currentGlyph.setWidth(0);
            r495_currentGlyph.include(r276_StdAnchors.wide());
            r495_currentGlyph.include(r276_CaretLeftShape(new r276_xn$NamedParameterPair$2Lrc9b('xMiddle', r276_markMiddle), new r276_xn$NamedParameterPair$2Lrc9b('width', r276_CaretCaronWidth), new r276_xn$NamedParameterPair$2Lrc9b('top', r276_aboveMarkTop + r276_markFine * 0.7), new r276_xn$NamedParameterPair$2Lrc9b('bottom', r276_aboveMarkBot + r276_markStress - r276_markFine), new r276_xn$NamedParameterPair$2Lrc9b('swEnd', r276_CaretCaronTerminalSw), new r276_xn$NamedParameterPair$2Lrc9b('swMid', r276_CaretCaronMidSw)));
            r495_currentGlyph.include(r276_CaretTopBarShape(new r276_xn$NamedParameterPair$2Lrc9b('xMiddle', r276_markMiddle), new r276_xn$NamedParameterPair$2Lrc9b('width', r276_CaretCaronWidth), new r276_xn$NamedParameterPair$2Lrc9b('top', r276_aboveMarkTop + r276_markFine * 0.7), new r276_xn$NamedParameterPair$2Lrc9b('pL', 0), new r276_xn$NamedParameterPair$2Lrc9b('pR', 1), new r276_xn$NamedParameterPair$2Lrc9b('swMid', r276_CaretCaronMidSw), new r276_xn$NamedParameterPair$2Lrc9b('swBar', 2 * r276_markFine)));
            return void 0;
        });
        var r276_CaronLeftShape = function () {
            var _r513_t6;
            var _r513_t7 = arguments;
            var _r513_t0 = [].slice.call(_r513_t7, 0);
            var _r513_t1 = [];
            var _r513_t2 = 0;
            while (_r513_t2 < _r513_t0.length) {
                if (!(_r513_t0[_r513_t2] instanceof r276_xn$NamedParameterPair$2Lrc9b))
                    _r513_t1.push(_r513_t0[_r513_t2]);
                _r513_t2 = _r513_t2 + 1;
            }
            var _r513_t3 = _r513_t0;
            var _r513_t4 = _r513_t3.length;
            var _r513_t5 = 0;
            while (_r513_t5 < _r513_t4) {
                _r513_t2 = _r513_t3[_r513_t5];
                if (_r513_t2 && _r513_t2 instanceof r276_xn$NamedParameterPair$2Lrc9b && _r513_t2.left === 'top')
                    r513_top = _r513_t2.right;
                if (_r513_t2 && _r513_t2 instanceof r276_xn$NamedParameterPair$2Lrc9b && _r513_t2.left === 'bottom')
                    r513_bottom = _r513_t2.right;
                if (_r513_t2 && _r513_t2 instanceof r276_xn$NamedParameterPair$2Lrc9b && _r513_t2.left === 'xMiddle')
                    r513_xMiddle = _r513_t2.right;
                if (_r513_t2 && _r513_t2 instanceof r276_xn$NamedParameterPair$2Lrc9b && _r513_t2.left === 'width')
                    r513_width = _r513_t2.right;
                if (_r513_t2 && _r513_t2 instanceof r276_xn$NamedParameterPair$2Lrc9b && _r513_t2.left === 'swEnd')
                    r513_swEnd = _r513_t2.right;
                if (_r513_t2 && _r513_t2 instanceof r276_xn$NamedParameterPair$2Lrc9b && _r513_t2.left === 'swMid')
                    r513_swMid = _r513_t2.right;
                _r513_t5 = _r513_t5 + 1;
            }
            var r513_top = r1_fallback(r513_top, _r513_t1[0]);
            var r513_bottom = r1_fallback(r513_bottom, _r513_t1[1]);
            var r513_xMiddle = r1_fallback(r513_xMiddle, _r513_t1[2]);
            var r513_width = r1_fallback(r513_width, _r513_t1[3]);
            var r513_swEnd = r1_fallback(r513_swEnd, _r513_t1[4]);
            var r513_swMid = r1_fallback(r513_swMid, _r513_t1[5]);
            return r276_dispiro(r276_flat(r513_xMiddle - 0.5 * r513_width, r513_top, r276_widths.center(r513_swEnd)), r276_curl(r513_xMiddle, r513_bottom, r276_widths.center.heading(r513_swMid, r276_Downward)));
        };
        var r276_CaronRightShape = function () {
            var _r518_t6;
            var _r518_t7 = arguments;
            var _r518_t0 = [].slice.call(_r518_t7, 0);
            var _r518_t1 = [];
            var _r518_t2 = 0;
            while (_r518_t2 < _r518_t0.length) {
                if (!(_r518_t0[_r518_t2] instanceof r276_xn$NamedParameterPair$2Lrc9b))
                    _r518_t1.push(_r518_t0[_r518_t2]);
                _r518_t2 = _r518_t2 + 1;
            }
            var _r518_t3 = _r518_t0;
            var _r518_t4 = _r518_t3.length;
            var _r518_t5 = 0;
            while (_r518_t5 < _r518_t4) {
                _r518_t2 = _r518_t3[_r518_t5];
                if (_r518_t2 && _r518_t2 instanceof r276_xn$NamedParameterPair$2Lrc9b && _r518_t2.left === 'top')
                    r518_top = _r518_t2.right;
                if (_r518_t2 && _r518_t2 instanceof r276_xn$NamedParameterPair$2Lrc9b && _r518_t2.left === 'bottom')
                    r518_bottom = _r518_t2.right;
                if (_r518_t2 && _r518_t2 instanceof r276_xn$NamedParameterPair$2Lrc9b && _r518_t2.left === 'xMiddle')
                    r518_xMiddle = _r518_t2.right;
                if (_r518_t2 && _r518_t2 instanceof r276_xn$NamedParameterPair$2Lrc9b && _r518_t2.left === 'width')
                    r518_width = _r518_t2.right;
                if (_r518_t2 && _r518_t2 instanceof r276_xn$NamedParameterPair$2Lrc9b && _r518_t2.left === 'swEnd')
                    r518_swEnd = _r518_t2.right;
                if (_r518_t2 && _r518_t2 instanceof r276_xn$NamedParameterPair$2Lrc9b && _r518_t2.left === 'swMid')
                    r518_swMid = _r518_t2.right;
                _r518_t5 = _r518_t5 + 1;
            }
            var r518_top = r1_fallback(r518_top, _r518_t1[0]);
            var r518_bottom = r1_fallback(r518_bottom, _r518_t1[1]);
            var r518_xMiddle = r1_fallback(r518_xMiddle, _r518_t1[2]);
            var r518_width = r1_fallback(r518_width, _r518_t1[3]);
            var r518_swEnd = r1_fallback(r518_swEnd, _r518_t1[4]);
            var r518_swMid = r1_fallback(r518_swMid, _r518_t1[5]);
            return r276_dispiro(r276_flat(r518_xMiddle + 0.5 * r518_width, r518_top, r276_widths.center(r518_swEnd)), r276_curl(r518_xMiddle, r518_bottom, r276_widths.center.heading(r518_swMid, r276_Downward)));
        };
        var r276_CaronBottomBarShape = function () {
            var _r523_t6;
            var _r523_t7 = arguments;
            var _r523_t0 = [].slice.call(_r523_t7, 0);
            var _r523_t1 = [];
            var _r523_t2 = 0;
            while (_r523_t2 < _r523_t0.length) {
                if (!(_r523_t0[_r523_t2] instanceof r276_xn$NamedParameterPair$2Lrc9b))
                    _r523_t1.push(_r523_t0[_r523_t2]);
                _r523_t2 = _r523_t2 + 1;
            }
            var _r523_t3 = _r523_t0;
            var _r523_t4 = _r523_t3.length;
            var _r523_t5 = 0;
            while (_r523_t5 < _r523_t4) {
                _r523_t2 = _r523_t3[_r523_t5];
                if (_r523_t2 && _r523_t2 instanceof r276_xn$NamedParameterPair$2Lrc9b && _r523_t2.left === 'bottom')
                    r523_bottom = _r523_t2.right;
                if (_r523_t2 && _r523_t2 instanceof r276_xn$NamedParameterPair$2Lrc9b && _r523_t2.left === 'xMiddle')
                    r523_xMiddle = _r523_t2.right;
                if (_r523_t2 && _r523_t2 instanceof r276_xn$NamedParameterPair$2Lrc9b && _r523_t2.left === 'width')
                    r523_width = _r523_t2.right;
                if (_r523_t2 && _r523_t2 instanceof r276_xn$NamedParameterPair$2Lrc9b && _r523_t2.left === 'pL')
                    r523_pL = _r523_t2.right;
                if (_r523_t2 && _r523_t2 instanceof r276_xn$NamedParameterPair$2Lrc9b && _r523_t2.left === 'pR')
                    r523_pR = _r523_t2.right;
                if (_r523_t2 && _r523_t2 instanceof r276_xn$NamedParameterPair$2Lrc9b && _r523_t2.left === 'swMid')
                    r523_swMid = _r523_t2.right;
                if (_r523_t2 && _r523_t2 instanceof r276_xn$NamedParameterPair$2Lrc9b && _r523_t2.left === 'swBar')
                    r523_swBar = _r523_t2.right;
                _r523_t5 = _r523_t5 + 1;
            }
            var r523_bottom = r1_fallback(r523_bottom, _r523_t1[0]);
            var r523_xMiddle = r1_fallback(r523_xMiddle, _r523_t1[1]);
            var r523_width = r1_fallback(r523_width, _r523_t1[2]);
            var r523_pL = r1_fallback(r523_pL, _r523_t1[3]);
            var r523_pR = r1_fallback(r523_pR, _r523_t1[4]);
            var r523_swMid = r1_fallback(r523_swMid, _r523_t1[5]);
            var r523_swBar = r1_fallback(r523_swBar, _r523_t1[6]);
            return r276_dispiro(r276_widths.lhs(r523_swBar), r276_flat(Math.min(r523_xMiddle + 0.5 * r523_width * r523_pL, r523_xMiddle - 0.5 * r523_swMid * r276_HVContrast), r523_bottom), r276_curl(Math.max(r523_xMiddle + 0.5 * r523_width * r523_pR, r523_xMiddle + 0.5 * r523_swMid * r276_HVContrast), r523_bottom));
        };
        var r276_CaronShape = function () {
            var _r528_t6;
            var _r528_t7 = arguments;
            var _r528_t0 = [].slice.call(_r528_t7, 0);
            var _r528_t1 = [];
            var _r528_t2 = 0;
            while (_r528_t2 < _r528_t0.length) {
                if (!(_r528_t0[_r528_t2] instanceof r276_xn$NamedParameterPair$2Lrc9b))
                    _r528_t1.push(_r528_t0[_r528_t2]);
                _r528_t2 = _r528_t2 + 1;
            }
            var _r528_t3 = _r528_t0;
            var _r528_t4 = _r528_t3.length;
            var _r528_t5 = 0;
            while (_r528_t5 < _r528_t4) {
                _r528_t2 = _r528_t3[_r528_t5];
                if (_r528_t2 && _r528_t2 instanceof r276_xn$NamedParameterPair$2Lrc9b && _r528_t2.left === 'top')
                    r528_top = _r528_t2.right;
                if (_r528_t2 && _r528_t2 instanceof r276_xn$NamedParameterPair$2Lrc9b && _r528_t2.left === 'bottom')
                    r528_bottom = _r528_t2.right;
                if (_r528_t2 && _r528_t2 instanceof r276_xn$NamedParameterPair$2Lrc9b && _r528_t2.left === 'xMiddle')
                    r528_xMiddle = _r528_t2.right;
                if (_r528_t2 && _r528_t2 instanceof r276_xn$NamedParameterPair$2Lrc9b && _r528_t2.left === 'width')
                    r528_width = _r528_t2.right;
                if (_r528_t2 && _r528_t2 instanceof r276_xn$NamedParameterPair$2Lrc9b && _r528_t2.left === 'swEnd')
                    r528_swEnd = _r528_t2.right;
                if (_r528_t2 && _r528_t2 instanceof r276_xn$NamedParameterPair$2Lrc9b && _r528_t2.left === 'swMid')
                    r528_swMid = _r528_t2.right;
                _r528_t5 = _r528_t5 + 1;
            }
            var r528_top = r1_fallback(r528_top, _r528_t1[0]);
            var r528_bottom = r1_fallback(r528_bottom, _r528_t1[1]);
            var r528_xMiddle = r1_fallback(r528_xMiddle, _r528_t1[2]);
            var r528_width = r1_fallback(r528_width, _r528_t1[3]);
            var r528_swEnd = r1_fallback(r528_swEnd, _r528_t1[4]);
            var r528_swMid = r1_fallback(r528_swMid, _r528_t1[5]);
            return r276_union(r276_CaronLeftShape(r528_top, r528_bottom, r528_xMiddle, r528_width, r528_swEnd, r528_swMid), r276_CaronRightShape(r528_top, r528_bottom, r528_xMiddle, r528_width, r528_swEnd, r528_swMid));
        };
        r276_xn$createAndSaveGlyphImpl$2Lrc3c('caronAbove', 780, function () {
            var _r535_t1;
            var _r535_t0 = this;
            var r535_currentGlyph = _r535_t0;
            r535_currentGlyph.setWidth(0);
            r535_currentGlyph.include(r276_StdAnchors.wide());
            r535_currentGlyph.include(r276_CaronShape(new r276_xn$NamedParameterPair$2Lrc9b('xMiddle', r276_markMiddle), new r276_xn$NamedParameterPair$2Lrc9b('width', r276_CaretCaronWidth), new r276_xn$NamedParameterPair$2Lrc9b('top', r276_aboveMarkTop - r276_markStress + 1.7 * r276_markFine), new r276_xn$NamedParameterPair$2Lrc9b('bottom', r276_aboveMarkBot), new r276_xn$NamedParameterPair$2Lrc9b('swEnd', r276_CaretCaronTerminalSw), new r276_xn$NamedParameterPair$2Lrc9b('swMid', r276_CaretCaronMidSw)));
            return void 0;
        });
        r276_xn$createAndSaveGlyphImpl$2Lrc3c('barupAbove', 7620, function () {
            var _r547_t1;
            var _r547_t0 = this;
            var r547_currentGlyph = _r547_t0;
            r547_currentGlyph.setWidth(0);
            r547_currentGlyph.include(r276_StdAnchors.wide());
            r547_currentGlyph.include(r276_CaronRightShape(new r276_xn$NamedParameterPair$2Lrc9b('xMiddle', r276_markMiddle), new r276_xn$NamedParameterPair$2Lrc9b('width', r276_CaretCaronWidth), new r276_xn$NamedParameterPair$2Lrc9b('top', r276_aboveMarkTop - r276_markStress + 1.7 * r276_markFine), new r276_xn$NamedParameterPair$2Lrc9b('bottom', r276_aboveMarkBot), new r276_xn$NamedParameterPair$2Lrc9b('swEnd', r276_CaretCaronTerminalSw), new r276_xn$NamedParameterPair$2Lrc9b('swMid', r276_CaretCaronMidSw)));
            r547_currentGlyph.include(r276_CaronBottomBarShape(new r276_xn$NamedParameterPair$2Lrc9b('xMiddle', r276_markMiddle), new r276_xn$NamedParameterPair$2Lrc9b('width', r276_CaretCaronWidth), new r276_xn$NamedParameterPair$2Lrc9b('bottom', r276_aboveMarkBot), new r276_xn$NamedParameterPair$2Lrc9b('pL', -1), new r276_xn$NamedParameterPair$2Lrc9b('pR', 0), new r276_xn$NamedParameterPair$2Lrc9b('swMid', r276_CaretCaronMidSw), new r276_xn$NamedParameterPair$2Lrc9b('swBar', 2 * r276_markFine)));
            return void 0;
        });
        r276_xn$createAndSaveGlyphImpl$2Lrc3c('downbarAbove', 7621, function () {
            var _r567_t1;
            var _r567_t0 = this;
            var r567_currentGlyph = _r567_t0;
            r567_currentGlyph.setWidth(0);
            r567_currentGlyph.include(r276_StdAnchors.wide());
            r567_currentGlyph.include(r276_CaronLeftShape(new r276_xn$NamedParameterPair$2Lrc9b('xMiddle', r276_markMiddle), new r276_xn$NamedParameterPair$2Lrc9b('width', r276_CaretCaronWidth), new r276_xn$NamedParameterPair$2Lrc9b('top', r276_aboveMarkTop - r276_markStress + 1.7 * r276_markFine), new r276_xn$NamedParameterPair$2Lrc9b('bottom', r276_aboveMarkBot), new r276_xn$NamedParameterPair$2Lrc9b('swEnd', r276_CaretCaronTerminalSw), new r276_xn$NamedParameterPair$2Lrc9b('swMid', r276_CaretCaronMidSw)));
            r567_currentGlyph.include(r276_CaronBottomBarShape(new r276_xn$NamedParameterPair$2Lrc9b('xMiddle', r276_markMiddle), new r276_xn$NamedParameterPair$2Lrc9b('width', r276_CaretCaronWidth), new r276_xn$NamedParameterPair$2Lrc9b('bottom', r276_aboveMarkBot), new r276_xn$NamedParameterPair$2Lrc9b('pL', 0), new r276_xn$NamedParameterPair$2Lrc9b('pR', 1), new r276_xn$NamedParameterPair$2Lrc9b('swMid', r276_CaretCaronMidSw), new r276_xn$NamedParameterPair$2Lrc9b('swBar', 2 * r276_markFine)));
            return void 0;
        });
        var r276_TildeKnots = function () {
            var _r585_t6;
            var _r585_t7 = arguments;
            var _r585_t0 = [].slice.call(_r585_t7, 0);
            var _r585_t1 = [];
            var _r585_t2 = 0;
            while (_r585_t2 < _r585_t0.length) {
                if (!(_r585_t0[_r585_t2] instanceof r276_xn$NamedParameterPair$2Lrc9b))
                    _r585_t1.push(_r585_t0[_r585_t2]);
                _r585_t2 = _r585_t2 + 1;
            }
            var _r585_t3 = _r585_t0;
            var _r585_t4 = _r585_t3.length;
            var _r585_t5 = 0;
            while (_r585_t5 < _r585_t4) {
                _r585_t2 = _r585_t3[_r585_t5];
                if (_r585_t2 && _r585_t2 instanceof r276_xn$NamedParameterPair$2Lrc9b && _r585_t2.left === 'ttop')
                    r585_ttop = _r585_t2.right;
                if (_r585_t2 && _r585_t2 instanceof r276_xn$NamedParameterPair$2Lrc9b && _r585_t2.left === 'tbot')
                    r585_tbot = _r585_t2.right;
                if (_r585_t2 && _r585_t2 instanceof r276_xn$NamedParameterPair$2Lrc9b && _r585_t2.left === 'leftEnd')
                    r585_leftEnd = _r585_t2.right;
                if (_r585_t2 && _r585_t2 instanceof r276_xn$NamedParameterPair$2Lrc9b && _r585_t2.left === 'rightEnd')
                    r585_rightEnd = _r585_t2.right;
                if (_r585_t2 && _r585_t2 instanceof r276_xn$NamedParameterPair$2Lrc9b && _r585_t2.left === 'hs')
                    r585_hs = _r585_t2.right;
                _r585_t5 = _r585_t5 + 1;
            }
            var r585_ttop = r1_fallback(r585_ttop, _r585_t1[0]);
            var r585_tbot = r1_fallback(r585_tbot, _r585_t1[1]);
            var r585_leftEnd = r1_fallback(r585_leftEnd, _r585_t1[2]);
            var r585_rightEnd = r1_fallback(r585_rightEnd, _r585_t1[3]);
            var r585_hs = r1_fallback(r585_hs, _r585_t1[4]);
            return function () {
                var _r591_t1;
                var _r591_t0 = this;
                var r591_currentGlyph = _r591_t0;
                var r591_fine = r585_hs * 8 / 9;
                var r591_hsvh = r585_hs * 2 / Math.abs(r585_ttop - r585_tbot);
                var r591_hvc = (r585_rightEnd - r585_leftEnd) / Math.abs(r585_ttop - r585_tbot);
                var r591_defaultHvc = r276_markExtend * 3 / (r276_aboveMarkTop - r276_aboveMarkBot - r276_markFine / 2);
                var r591_hsvhThin = 0.116;
                var r591_hsvhHeav = 0.732;
                var r591_tildeWave = r1_linreg(r591_hsvhThin, 2.925, r591_hsvhHeav, 2.375, r591_hsvh) * r1_linreg(r591_defaultHvc, 1, 4.35, 1.1, r591_hvc);
                var r591_tildeWaveX = 0.51;
                var r591_z1 = r591_currentGlyph.gizmo.apply({
                    'x': r585_leftEnd,
                    'y': r585_tbot
                });
                var r591_z2 = r591_currentGlyph.gizmo.apply({
                    'x': r1_mix(r585_leftEnd, r585_rightEnd, r591_tildeWaveX),
                    'y': r1_mix(r585_tbot, r585_ttop, r591_tildeWave)
                });
                var r591_z3 = r591_currentGlyph.gizmo.apply({
                    'x': r1_mix(r585_leftEnd, r585_rightEnd, 1 - r591_tildeWaveX),
                    'y': r1_mix(r585_tbot, r585_ttop, 1 - r591_tildeWave)
                });
                var r591_z4 = r591_currentGlyph.gizmo.apply({
                    'x': r585_rightEnd,
                    'y': r585_ttop
                });
                return [
                    r591_z1,
                    r591_z2,
                    r591_z3,
                    r591_z4
                ];
            };
        };
        r276_xn$ExportCapture$2Lrc4b(function () {
            var _r593_t0, _r593_t1;
            return { 'TildeShape': r276_TildeShape };
        });
        var r276_TildeShape = function () {
            var _r594_t6;
            var _r594_t7 = arguments;
            var _r594_t0 = [].slice.call(_r594_t7, 0);
            var _r594_t1 = [];
            var _r594_t2 = 0;
            while (_r594_t2 < _r594_t0.length) {
                if (!(_r594_t0[_r594_t2] instanceof r276_xn$NamedParameterPair$2Lrc9b))
                    _r594_t1.push(_r594_t0[_r594_t2]);
                _r594_t2 = _r594_t2 + 1;
            }
            var _r594_t3 = _r594_t0;
            var _r594_t4 = _r594_t3.length;
            var _r594_t5 = 0;
            while (_r594_t5 < _r594_t4) {
                _r594_t2 = _r594_t3[_r594_t5];
                if (_r594_t2 && _r594_t2 instanceof r276_xn$NamedParameterPair$2Lrc9b && _r594_t2.left === 'ttop')
                    r594_ttop = _r594_t2.right;
                if (_r594_t2 && _r594_t2 instanceof r276_xn$NamedParameterPair$2Lrc9b && _r594_t2.left === 'tbot')
                    r594_tbot = _r594_t2.right;
                if (_r594_t2 && _r594_t2 instanceof r276_xn$NamedParameterPair$2Lrc9b && _r594_t2.left === 'leftEnd')
                    r594_leftEnd = _r594_t2.right;
                if (_r594_t2 && _r594_t2 instanceof r276_xn$NamedParameterPair$2Lrc9b && _r594_t2.left === 'rightEnd')
                    r594_rightEnd = _r594_t2.right;
                if (_r594_t2 && _r594_t2 instanceof r276_xn$NamedParameterPair$2Lrc9b && _r594_t2.left === 'hs')
                    r594_hs = _r594_t2.right;
                _r594_t5 = _r594_t5 + 1;
            }
            var r594_ttop = r1_fallback(r594_ttop, _r594_t1[0]);
            var r594_tbot = r1_fallback(r594_tbot, _r594_t1[1]);
            var r594_leftEnd = r1_fallback(r594_leftEnd, _r594_t1[2]);
            var r594_rightEnd = r1_fallback(r594_rightEnd, _r594_t1[3]);
            var r594_hs = r1_fallback(r594_hs, _r594_t1[4]);
            return function () {
                var _r600_t2;
                var _r600_t1 = this;
                var r600_currentGlyph = _r600_t1;
                var _r600_t0 = r600_currentGlyph.include(r276_TildeKnots(r594_ttop, r594_tbot, r594_leftEnd, r594_rightEnd, r594_hs));
                var r600_z1 = _r600_t0[0];
                var r600_z2 = _r600_t0[1];
                var r600_z3 = _r600_t0[2];
                var r600_z4 = _r600_t0[3];
                var r600_bone = new r1_Arcs.Bez3(r600_z1, r600_z2, r600_z3, r600_z4);
                var r600_inner = new r1_OffsetCurve(r600_bone, +r594_hs, r276_HVContrast);
                var r600_outer = new r1_Arcs.Reverted(new r1_OffsetCurve(r600_bone, -r594_hs, r276_HVContrast));
                var r600_cs = new r1_BezToContoursSink();
                r1_ShapeConv.transferGenericShapeAsBezier([[
                        r600_inner,
                        r600_outer
                    ]], r600_cs, r1_GEOMETRY_PRECISION);
                r600_currentGlyph.includeContours(r600_cs.contours, 0, 0);
                return void 0;
            };
        };
        r276_xn$createAndSaveGlyphImpl$2Lrc3c('tildeAbove', 771, function () {
            var _r604_t1;
            var _r604_t0 = this;
            var r604_currentGlyph = _r604_t0;
            r604_currentGlyph.setWidth(0);
            r604_currentGlyph.include(r276_StdAnchors.wide());
            r604_currentGlyph.include(r276_TildeShape(new r276_xn$NamedParameterPair$2Lrc9b('ttop', r276_aboveMarkTop), new r276_xn$NamedParameterPair$2Lrc9b('tbot', r276_aboveMarkBot + r276_markFine / 2), new r276_xn$NamedParameterPair$2Lrc9b('leftEnd', r276_markMiddle - r276_markExtend * 1.5), new r276_xn$NamedParameterPair$2Lrc9b('rightEnd', r276_markMiddle + r276_markExtend * 1.5), new r276_xn$NamedParameterPair$2Lrc9b('hs', r276_markHalfStroke)));
            return void 0;
        });
        r276_xn$createAndSaveGlyphImpl$2Lrc3c('asciiTilde.high', null, function () {
            var _r615_t1;
            var _r615_t0 = this;
            var r615_currentGlyph = _r615_t0;
            r615_currentGlyph.include(r276_TildeShape(new r276_xn$NamedParameterPair$2Lrc9b('ttop', r1_mix(r276_aboveMarkMid, r276_aboveMarkTop, r276_asciiMarkZoomY)), new r276_xn$NamedParameterPair$2Lrc9b('tbot', r1_mix(r276_aboveMarkMid, r276_aboveMarkBot + r276_markFine / 2, r276_asciiMarkZoomY)), new r276_xn$NamedParameterPair$2Lrc9b('leftEnd', r276_SB), new r276_xn$NamedParameterPair$2Lrc9b('rightEnd', r276_RightSB), new r276_xn$NamedParameterPair$2Lrc9b('hs', r276_OperatorStroke / 2)));
            return void 0;
        });
        (function () {
            var r624_FMosaicWide, r624_MosaicNameSuffix, r624_MosaicWidth, r624_MosaicWidthScalar, _r624_t3, _r624_t5, _r624_t6, _r624_tag7;
            var r624_WidthKinds = [
                [
                    0,
                    '.NWID',
                    r276_xn$Capture$2Lrc8.Metrics.Width,
                    1
                ],
                [
                    1,
                    '.WWID',
                    r276_xn$Capture$2Lrc8.Metrics.WideWidth0,
                    2
                ]
            ];
            var _r624_t0 = r624_WidthKinds;
            var _r624_t1 = _r624_t0.length;
            var _r624_t2 = 0;
            var _r624_t4 = _r624_t2 < _r624_t1;
            while (_r624_t4) {
                _r624_t3 = _r624_t0[_r624_t2];
                r624_FMosaicWide = _r624_t3[0];
                r624_MosaicNameSuffix = _r624_t3[1];
                r624_MosaicWidth = _r624_t3[2];
                r624_MosaicWidthScalar = _r624_t3[3];
                (function () {
                    var r627_MosaicDesiredWidth = r276_WideWidth1;
                    var r627_MosaicMiddle = r624_MosaicWidth / 2;
                    var r627_MosaicUnitWidth = r624_MosaicWidth / r624_MosaicWidthScalar;
                    var r627_MangleUnicode = function (r628_unicode, r628__desiredOverride) {
                        var _r628_t0, _r628_t1;
                        return r624_MosaicWidth === (r628__desiredOverride || r627_MosaicDesiredWidth) ? r628_unicode : void 0;
                    };
                    var r627_MangleName = function (r629_name) {
                        var _r629_t0, _r629_t1;
                        return r629_name + r624_MosaicNameSuffix;
                    };
                    var r627_emDashWidth = r276_para.isQuasiProportional && r624_MosaicWidthScalar > 1 ? r276_UPM : r624_MosaicWidth;
                    return r276_xn$createAndSaveGlyphImpl$2Lrc3c(r627_MangleName('swungDash.high'), null, function () {
                        var _r632_t1;
                        var _r632_t0 = this;
                        var r632_currentGlyph = _r632_t0;
                        r632_currentGlyph.setWidth(r627_emDashWidth);
                        r632_currentGlyph.include(r276_TildeShape(new r276_xn$NamedParameterPair$2Lrc9b('ttop', r1_mix(r276_aboveMarkMid, r276_aboveMarkTop, r276_asciiMarkZoomY)), new r276_xn$NamedParameterPair$2Lrc9b('tbot', r1_mix(r276_aboveMarkMid, r276_aboveMarkBot + r276_markFine / 2, r276_asciiMarkZoomY)), new r276_xn$NamedParameterPair$2Lrc9b('leftEnd', r276_SB), new r276_xn$NamedParameterPair$2Lrc9b('rightEnd', r627_emDashWidth - r276_SB), new r276_xn$NamedParameterPair$2Lrc9b('hs', r276_OperatorStroke / 2)));
                        return void 0;
                    });
                }());
                _r624_t5 = _r624_t2 = _r624_t2 + 1;
                _r624_t4 = _r624_t2 < _r624_t1;
            }
            return _r624_t5;
        }());
        var r276_OverlayTildeT = function (r640_sink) {
            var _r640_t0, _r640_t1;
            var r640_t = r1_mix(r276_aboveMarkMid, r276_aboveMarkTop, r276_asciiMarkZoomY);
            var r640_b = r1_mix(r276_aboveMarkMid, r276_aboveMarkBot + r276_markFine / 2, r276_asciiMarkZoomY);
            var r640_offset = r276_SymbolMid - r1_mix(r640_t, r640_b, 1 / 2);
            return r640_sink(new r276_xn$NamedParameterPair$2Lrc9b('ttop', r640_t + r640_offset), new r276_xn$NamedParameterPair$2Lrc9b('tbot', r640_b + r640_offset), new r276_xn$NamedParameterPair$2Lrc9b('leftEnd', r1_mix(0, r276_SB, 1 / 3)), new r276_xn$NamedParameterPair$2Lrc9b('rightEnd', r1_mix(r276_Width, r276_RightSB, 1 / 3)), new r276_xn$NamedParameterPair$2Lrc9b('hs', r276_AdviceStroke(4) / 2));
        };
        r276_xn$createAndSaveGlyphImpl$2Lrc3c('overlayTildeOperator', null, function () {
            var _r648_t1;
            var _r648_t0 = this;
            var r648_currentGlyph = _r648_t0;
            r648_currentGlyph.include(r276_OverlayTildeT(r276_TildeShape));
            return void 0;
        });
        r276_xn$createAndSaveGlyphImpl$2Lrc3c('overlayTildeOperatorAboveMask', null, function () {
            var _r652_t2;
            var _r652_t1 = this;
            var r652_currentGlyph = _r652_t1;
            var r652_FarRight = r276_Width * 4;
            var r652_FarLeft = -r276_Width * 3;
            var r652_FarAbove = r276_CAP * 4;
            var _r652_t0 = r652_currentGlyph.include(r276_OverlayTildeT(r276_TildeKnots));
            var r652_z1 = _r652_t0[0];
            var r652_z2 = _r652_t0[1];
            var r652_z3 = _r652_t0[2];
            var r652_z4 = _r652_t0[3];
            var r652_arcs = [[
                    new r1_Arcs.Bez3(r652_z1, r652_z2, r652_z3, r652_z4),
                    new r1_Arcs.StraightSegment(r652_z4, r1_Point.withX(r652_z4, r652_FarRight)),
                    new r1_Arcs.StraightSegment(r1_Point.withX(r652_z4, r652_FarRight), r1_Point.corner(r652_FarRight, r652_FarAbove)),
                    new r1_Arcs.StraightSegment(r1_Point.corner(r652_FarRight, r652_FarAbove), r1_Point.corner(r652_FarLeft, r652_FarAbove)),
                    new r1_Arcs.StraightSegment(r1_Point.corner(r652_FarLeft, r652_FarAbove), r1_Point.withX(r652_z1, r652_FarLeft)),
                    new r1_Arcs.StraightSegment(r1_Point.withX(r652_z1, r652_FarLeft), r652_z1)
                ]];
            var r652_cs = new r1_BezToContoursSink();
            r1_ShapeConv.transferGenericShapeAsBezier(r652_arcs, r652_cs, r1_GEOMETRY_PRECISION);
            r652_currentGlyph.includeContours(r652_cs.contours, 0, 0);
            return void 0;
        });
        r276_xn$createAndSaveGlyphImpl$2Lrc3c('.WF.font-src/glyphs/marks/above.ptl.1', null, function () {
            var r656_suffix, r656_DrawAt, r656_kdr, _r656_t2, _r656_t4, _r656_t5, _r656_tag6;
            var _r656_t3 = this;
            var r656_currentGlyph = _r656_t3;
            r656_currentGlyph.setWidth(0);
            r656_currentGlyph.include(r276_StdAnchors.wide());
            var r656_m = r1_mix(r276_aboveMarkBot, r276_aboveMarkTop, 0.4);
            var r656_ttop = r1_mix(r656_m, r276_aboveMarkTop, 0.7);
            var r656_tbot = r1_mix(r656_m, r276_aboveMarkBot + r276_markFine / 2, 0.7);
            var r656_fine = r276_AdviceStroke(4.5) / 2;
            r656_currentGlyph.include(r276_TildeShape(new r276_xn$NamedParameterPair$2Lrc9b('ttop', r656_ttop), new r276_xn$NamedParameterPair$2Lrc9b('tbot', r656_tbot), new r276_xn$NamedParameterPair$2Lrc9b('leftEnd', r276_markMiddle - r276_markExtend * 1.5), new r276_xn$NamedParameterPair$2Lrc9b('rightEnd', r276_markMiddle + r276_markExtend * 1.5), new r276_xn$NamedParameterPair$2Lrc9b('hs', r656_fine)));
            r276_xn$createAndSaveGlyphImpl$2Lrc3c('tildeSlashAbove', 842, function () {
                var _r666_t1;
                var _r666_t0 = this;
                _r666_t0.include(r656_currentGlyph, true, true);
                _r666_t0.cloneRankFromGlyph(r656_currentGlyph);
                return _r666_t0.include(function () {
                    var _r668_t1;
                    var _r668_t0 = this;
                    var r668_currentGlyph = _r668_t0;
                    r668_currentGlyph.include(r276_dispiro(r276_widths.center(r656_fine * 2), r276_flat(r276_markMiddle + r276_markExtend * 0.2, r1_mix(r656_tbot, r656_ttop, 1.5)), r276_curl(r276_markMiddle - r276_markExtend * 0.2, r1_mix(r656_ttop, r656_tbot, 1.5))));
                    return void 0;
                });
            });
            var _r656_t0 = Object.entries(r276_DotVariants)[Symbol.iterator]();
            var _r656_t1 = void 0;
            while (!(_r656_t1 = _r656_t0.next()).done) {
                _r656_t2 = _r656_t1.value;
                r656_suffix = _r656_t2[0];
                r656_DrawAt = _r656_t2[1][0];
                r656_kdr = _r656_t2[1][1];
                _r656_t2[1];
                (function () {
                    return r276_xn$createAndSaveGlyphImpl$2Lrc3c('tildedotdotAbove.' + r656_suffix, null, function () {
                        var _r675_t1;
                        var _r675_t0 = this;
                        _r675_t0.include(r656_currentGlyph, true, true);
                        _r675_t0.cloneRankFromGlyph(r656_currentGlyph);
                        return _r675_t0.include(function () {
                            var _r677_t1;
                            var _r677_t0 = this;
                            var r677_currentGlyph = _r677_t0;
                            r677_currentGlyph.include(r276_StdAnchors.impl('above', 1 / 4, 1));
                            var r677_r = 0.75 * r276_DotRadius * r656_fine / r276_HalfStroke;
                            r677_currentGlyph.include(r656_DrawAt(r276_markMiddle, r1_mix(r656_tbot, r656_ttop, 1.5), r677_r * r656_kdr));
                            r677_currentGlyph.include(r656_DrawAt(r276_markMiddle, r1_mix(r656_ttop, r656_tbot, 1.5), r677_r * r656_kdr));
                            return void 0;
                        });
                    });
                }());
            }
            return void 0;
        });
        r276_xn$selectvariant$7Hrq('tildedotdotAbove', 843, new r276_xn$NamedParameterPair$2Lrc9b('follow', 'diacriticDot'));
        r276_xn$createAndSaveGlyphImpl$2Lrc3c('dblTildeAbove', 844, function () {
            var _r684_t1;
            var _r684_t0 = this;
            var r684_currentGlyph = _r684_t0;
            r684_currentGlyph.setWidth(0);
            r684_currentGlyph.include(r276_StdAnchors.impl('above', 1 / 4, 1));
            var r684_m = r276_aboveMarkBot;
            var r684_ttop = r1_mix(r684_m, r276_aboveMarkTop, 0.7);
            var r684_tbot = r1_mix(r684_m, r276_aboveMarkBot + r276_markFine / 2, 0.7);
            var r684_addTilde = function () {
                var _r687_t0, _r687_t1;
                return r276_TildeShape(new r276_xn$NamedParameterPair$2Lrc9b('ttop', r684_ttop), new r276_xn$NamedParameterPair$2Lrc9b('tbot', r684_tbot), new r276_xn$NamedParameterPair$2Lrc9b('leftEnd', r276_markMiddle - r276_markExtend * 1.5), new r276_xn$NamedParameterPair$2Lrc9b('rightEnd', r276_markMiddle + r276_markExtend * 1.5), new r276_xn$NamedParameterPair$2Lrc9b('hs', r276_AdviceStroke(4.5) / 2));
            };
            var r684_shift = (r684_ttop - r684_tbot) * 1.2;
            r684_currentGlyph.include(r684_addTilde());
            r684_currentGlyph.include(r276_ApparentTranslate(0, r684_shift));
            r684_currentGlyph.include(r684_addTilde());
            r684_currentGlyph.include(r276_ApparentTranslate(0, -0.5 * r684_shift));
            return void 0;
        });
        r276_xn$createAndSaveGlyphImpl$2Lrc3c('macronAbove', 772, function () {
            var _r699_t1;
            var _r699_t0 = this;
            var r699_currentGlyph = _r699_t0;
            r699_currentGlyph.setWidth(0);
            r699_currentGlyph.include(r276_StdAnchors.wide());
            var r699_leftEnd = r276_markMiddle - r276_markExtend * 1.5;
            var r699_rightEnd = r276_markMiddle + r276_markExtend * 1.5;
            r699_currentGlyph.include(r276_dispiro(r276_flat(r699_leftEnd, r276_aboveMarkMid, r276_widths(r276_markHalfStroke, r276_markHalfStroke)), r276_curl(r699_rightEnd, r276_aboveMarkMid)));
            return void 0;
        });
        r276_xn$createAndSaveGlyphImpl$2Lrc3c('overlineAbove', 773, function () {
            var _r705_t1;
            var _r705_t0 = this;
            var r705_currentGlyph = _r705_t0;
            r705_currentGlyph.setWidth(0);
            r705_currentGlyph.include(r276_StdAnchors.impl('above', 0, 2));
            r705_currentGlyph.include(r276_dispiro(r276_flat(0 - r276_Width, r276_aboveMarkMid, r276_widths(r276_markHalfStroke, r276_markHalfStroke)), r276_curl(0, r276_aboveMarkMid)));
            return void 0;
        });
        r276_xn$createAndSaveGlyphImpl$2Lrc3c('sbRsbOverlineAbove', null, function () {
            var _r711_t1;
            var _r711_t0 = this;
            var r711_currentGlyph = _r711_t0;
            r711_currentGlyph.setWidth(0);
            r711_currentGlyph.include(r276_StdAnchors.impl('above', 0, 1.5));
            r711_currentGlyph.include(r276_dispiro(r276_flat(r276_SB - r276_Width, r276_aboveMarkMid, r276_widths(r276_markHalfStroke, r276_markHalfStroke)), r276_curl(r276_RightSB - r276_Width, r276_aboveMarkMid)));
            return void 0;
        });
        r276_xn$createAndSaveGlyphImpl$2Lrc3c('dblOverlineAbove', 831, function () {
            var _r717_t1;
            var _r717_t0 = this;
            var r717_currentGlyph = _r717_t0;
            r717_currentGlyph.setWidth(0);
            r717_currentGlyph.include(r276_StdAnchors.impl('above', 0, 2));
            var r717_boxsw = Math.min(r276_markFine * 2, (r276_aboveMarkTop - r276_aboveMarkBot) / 3);
            r717_currentGlyph.include(r276_dispiro(r276_widths.lhs(r717_boxsw), r276_flat(0 - r276_Width, r276_aboveMarkBot), r276_curl(0, r276_aboveMarkBot)));
            r717_currentGlyph.include(r276_dispiro(r276_widths.rhs(r717_boxsw), r276_flat(0 - r276_Width, r276_aboveMarkTop), r276_curl(0, r276_aboveMarkTop)));
            return void 0;
        });
        r276_xn$createAndSaveGlyphImpl$2Lrc3c('breveAbove', 774, function () {
            var _r724_t1;
            var _r724_t0 = this;
            var r724_currentGlyph = _r724_t0;
            r724_currentGlyph.setWidth(0);
            r724_currentGlyph.include(r276_StdAnchors.wide());
            var r724_leftEnd = r276_markMiddle - r276_markExtend * 1.2;
            var r724_rightEnd = r276_markMiddle + r276_markExtend * 1.2;
            r724_currentGlyph.include(r276_dispiro(r276_g4.down.start(r724_leftEnd, r276_aboveMarkTop, r276_widths.heading(r276_markHalfStroke, r276_markHalfStroke, r276_Downward)), r276_arcvh(), r276_g4.right.mid(r276_markMiddle, r276_aboveMarkBot + r276_markHalfStroke, r276_heading(r276_Rightward)), r276_archv(), r276_g4.up.end(r724_rightEnd, r276_aboveMarkTop, r276_heading(r276_Upward))));
            return void 0;
        });
        r276_xn$createAndSaveGlyphImpl$2Lrc3c('archAbove', 785, function () {
            var _r730_t1;
            var _r730_t0 = this;
            var r730_currentGlyph = _r730_t0;
            r730_currentGlyph.setWidth(0);
            r730_currentGlyph.include(r276_StdAnchors.wide());
            var r730_leftEnd = r276_markMiddle - r276_markExtend * 1.2;
            var r730_rightEnd = r276_markMiddle + r276_markExtend * 1.2;
            r730_currentGlyph.include(r276_dispiro(r276_g4.up.start(r730_leftEnd, r276_aboveMarkBot, r276_widths.heading(r276_markHalfStroke, r276_markHalfStroke, r276_Upward)), r276_arcvh(), r276_g4.right.mid(r276_markMiddle, r276_aboveMarkTop - r276_markHalfStroke, r276_heading(r276_Rightward)), r276_archv(), r276_g4.down.end(r730_rightEnd, r276_aboveMarkBot, r276_heading(r276_Downward))));
            return void 0;
        });
        r276_xn$createAndSaveGlyphImpl$2Lrc3c('hookAbove', 777, function () {
            var _r736_t1;
            var _r736_t0 = this;
            var r736_currentGlyph = _r736_t0;
            r736_currentGlyph.setWidth(0);
            r736_currentGlyph.include(r276_StdAnchors.medium());
            var r736_fine = Math.min(r276_markFine, (r276_aboveMarkTop - r276_aboveMarkBot) * 0.2);
            var r736_hookBot = r276_aboveMarkBot - r736_fine / 2;
            var r736_hookTop = r1_mix(r276_aboveMarkBot, r276_aboveMarkTop, 0.9) + r736_fine / 2;
            r736_currentGlyph.include(r276_dispiro(r276_widths.lhs(r736_fine * 2), r276_flat(r276_markMiddle - r736_fine * r276_HVContrast, r736_hookBot, r276_heading(r276_Rightward)), r276_curl(r276_markMiddle + r736_fine * 0.4, r736_hookBot, r276_heading(r276_Rightward)), r276_archv(), r276_g4.up.mid(r276_markMiddle + r276_markExtend - r276_O, r1_mix(r736_hookBot, r736_hookTop, r276_ArchDepthB / (r276_ArchDepthB + r276_ArchDepthA)), r276_heading(r276_Upward)), r276_arcvh(), r276_flat(r276_markMiddle + r736_fine * 0.4, r736_hookTop, r276_heading(r276_Leftward)), r276_curl(r276_markMiddle - r276_markExtend + r736_fine, r736_hookTop, r276_heading(r276_Leftward))));
            return void 0;
        });
        r276_xn$createAndSaveGlyphImpl$2Lrc3c('doubleGraveAbove', 783, function () {
            var _r742_t1;
            var _r742_t0 = this;
            var r742_currentGlyph = _r742_t0;
            r742_currentGlyph.setWidth(0);
            r742_currentGlyph.include(r276_StdAnchors.wide());
            var r742_m1 = r276_markMiddle - r276_markExtend * 0.85;
            var r742_m2 = r276_markMiddle + r276_markExtend * 0.85;
            r742_currentGlyph.include(r276_dispiro(r276_flat(r742_m1 + r276_markStress, r276_aboveMarkBot, r276_widths(r276_markFine, r276_markFine)), r276_curl(r742_m1 - r276_markExtend, r276_aboveMarkTop, r276_widths(r276_markStress, r276_markStress))));
            r742_currentGlyph.include(r276_dispiro(r276_flat(r742_m2 + r276_markStress, r276_aboveMarkBot, r276_widths(r276_markFine, r276_markFine)), r276_curl(r742_m2 - r276_markExtend, r276_aboveMarkTop, r276_widths(r276_markStress, r276_markStress))));
            return void 0;
        });
        r276_xn$createAndSaveGlyphImpl$2Lrc3c('doubleAcuteAbove', 779, function () {
            var _r749_t1;
            var _r749_t0 = this;
            var r749_currentGlyph = _r749_t0;
            r749_currentGlyph.setWidth(0);
            r749_currentGlyph.include(r276_StdAnchors.wide());
            var r749_m1 = r276_markMiddle - r276_markExtend * 0.85;
            var r749_m2 = r276_markMiddle + r276_markExtend * 0.85;
            r749_currentGlyph.include(r276_dispiro(r276_flat(r749_m1 - r276_markStress, r276_aboveMarkBot, r276_widths(r276_markFine, r276_markFine)), r276_curl(r749_m1 + r276_markExtend, r276_aboveMarkTop, r276_widths(r276_markStress, r276_markStress))));
            r749_currentGlyph.include(r276_dispiro(r276_flat(r749_m2 - r276_markStress, r276_aboveMarkBot, r276_widths(r276_markFine, r276_markFine)), r276_curl(r749_m2 + r276_markExtend, r276_aboveMarkTop, r276_widths(r276_markStress, r276_markStress))));
            return void 0;
        });
        r276_xn$createAndSaveGlyphImpl$2Lrc3c('tripleAcuteAbove', 6859, function () {
            var _r756_t1;
            var _r756_t0 = this;
            var r756_currentGlyph = _r756_t0;
            r756_currentGlyph.setWidth(0);
            r756_currentGlyph.include(r276_StdAnchors.impl('above', 0, 1.5));
            var r756_fine = 0.5 * r276_AdviceStroke(6);
            var r756_stress = 1.2 * r756_fine;
            var r756_m1 = r276_markMiddle - r276_markExtend * 1.275;
            var r756_m2 = r276_markMiddle;
            var r756_m3 = r276_markMiddle + r276_markExtend * 1.275;
            r756_currentGlyph.include(r276_dispiro(r276_flat(r756_m1 - r276_markStress, r276_aboveMarkBot, r276_widths(r756_fine, r756_fine)), r276_curl(r756_m1 + r276_markExtend, r276_aboveMarkTop, r276_widths(r756_stress, r756_stress))));
            r756_currentGlyph.include(r276_dispiro(r276_flat(r756_m2 - r276_markStress, r276_aboveMarkBot, r276_widths(r756_fine, r756_fine)), r276_curl(r756_m2 + r276_markExtend, r276_aboveMarkTop, r276_widths(r756_stress, r756_stress))));
            r756_currentGlyph.include(r276_dispiro(r276_flat(r756_m3 - r276_markStress, r276_aboveMarkBot, r276_widths(r756_fine, r756_fine)), r276_curl(r756_m3 + r276_markExtend, r276_aboveMarkTop, r276_widths(r756_stress, r756_stress))));
            return void 0;
        });
        r276_xn$createAndSaveGlyphImpl$2Lrc3c('commaAbove.round', null, function () {
            var _r764_t1;
            var _r764_t0 = this;
            var r764_currentGlyph = _r764_t0;
            r764_currentGlyph.setWidth(0);
            r764_currentGlyph.include(r276_StdAnchors.narrow());
            var r764_radius = r276_commaAboveRadius;
            r764_currentGlyph.include(r276_Ring(r276_aboveMarkTop + r276_commaOvershoot, r276_aboveMarkTop - r764_radius * 2 + r276_commaOvershoot, r276_markMiddle - r764_radius, r276_markMiddle + r764_radius));
            r764_currentGlyph.include(r276_dispiro(r276_widths.rhs(Math.min(r764_radius, r276_markFine * r1_linreg(16, 2, 90, 1.75, r276_markStroke))), r276_straight.down.start(r276_markMiddle + r764_radius, r276_aboveMarkTop - r764_radius + r276_commaOvershoot), r276_quadControls(0, 0.6), r276_g4(r1_mix(r276_markMiddle, r276_markMiddle - r764_radius, 0.2), r276_aboveMarkBot - r764_radius - r276_commaOvershoot2)));
            r764_currentGlyph.include(r276_ApparentTranslate(0, r276_DotRadius * 0.3));
            return void 0;
        });
        r276_xn$createAndSaveGlyphImpl$2Lrc3c('commaAbove.square', null, function () {
            var _r772_t1;
            var _r772_t0 = this;
            var r772_currentGlyph = _r772_t0;
            r772_currentGlyph.setWidth(0);
            r772_currentGlyph.include(r276_StdAnchors.narrow());
            var r772_radius = r276_commaAboveRadius * r276_DesignParameters.squareDotScalar;
            r772_currentGlyph.include(r276_Rect(r276_aboveMarkTop, r276_aboveMarkTop - r772_radius * 2, r276_markMiddle - r772_radius, r276_markMiddle + r772_radius));
            r772_currentGlyph.include(r276_dispiro(r276_widths.rhs(Math.min(r772_radius, r276_markFine * r1_linreg(16, 2, 90, 1.75, r276_markStroke))), r276_flat(r276_markMiddle + r772_radius, r276_aboveMarkTop, r276_heading(r276_Downward)), r276_curl(r276_markMiddle + r772_radius, r276_aboveMarkTop - 2 * r772_radius, r276_heading(r276_Downward)), r276_quadControls(0, 0.6), r276_g4(r1_mix(r276_markMiddle, r276_markMiddle - r772_radius, 0.2), r276_aboveMarkBot - r772_radius - r276_commaOvershoot2)));
            r772_currentGlyph.include(r276_ApparentTranslate(0, r276_DotRadius * 0.3));
            return void 0;
        });
        r276_xn$selectvariant$7Hrq('commaAbove', 787, new r276_xn$NamedParameterPair$2Lrc9b('follow', 'diacriticDot'));
        r276_xn$selectvariant$7Hrq('commaAbove/asPunctuation', new r276_xn$NamedParameterPair$2Lrc9b('shapeFrom', 'commaAbove'), new r276_xn$NamedParameterPair$2Lrc9b('follow', 'punctuationDot'));
        r276_xn$deriveglyphs$7Hrq('commaGrekUpperTonos', null, 'commaAbove', function (r781_src, r781_gr) {
            var _r781_t0, _r781_t1;
            return function () {
                var _r783_t1;
                var _r783_t0 = this;
                var r783_currentGlyph = _r783_t0;
                r783_currentGlyph.setWidth(0);
                r783_currentGlyph.include(r276_xn$referglyph$1aao(r781_src));
                r783_currentGlyph.include(r276_StdAnchors.impl('grekUpperTonos', 0, 0));
                return void 0;
            };
        });
        r276_xn$deriveglyphs$7Hrq('turnCommaAbove', 786, 'commaAbove', function (r787_src, r787_gr) {
            var _r787_t0, _r787_t1;
            return function () {
                var _r789_t1;
                var _r789_t0 = this;
                var r789_currentGlyph = _r789_t0;
                r789_currentGlyph.setWidth(0);
                r789_currentGlyph.include(r276_xn$referglyph$1aao(r787_src));
                r789_currentGlyph.include(r276_FlipAround(r276_markMiddle, r1_mix(r276_aboveMarkTop, r276_aboveMarkBot - r276_commaAboveRadius, 0.5) + r276_DotRadius * 0.3 + r276_commaOvershoot / 2));
                r789_currentGlyph.include(r276_StdAnchors.narrow());
                return void 0;
            };
        });
        r276_xn$createAndSaveGlyphImpl$2Lrc3c('revCommaAbove.round', null, function () {
            var _r796_t1;
            var _r796_t0 = this;
            var r796_currentGlyph = _r796_t0;
            r796_currentGlyph.setWidth(0);
            r796_currentGlyph.include(r276_StdAnchors.narrow());
            var r796_radius = r276_commaAboveRadius;
            r796_currentGlyph.include(r276_Ring(r276_aboveMarkTop + r276_commaOvershoot, r276_aboveMarkTop - r796_radius * 2 + r276_commaOvershoot, r276_markMiddle - r796_radius, r276_markMiddle + r796_radius));
            r796_currentGlyph.include(r276_dispiro(r276_widths.lhs(Math.min(r796_radius, r276_markFine * r1_linreg(16, 2, 90, 1.75, r276_markStroke))), r276_straight.down.start(r276_markMiddle - r796_radius, r276_aboveMarkTop - r796_radius + r276_commaOvershoot), r276_quadControls(0, 0.6), r276_g4(r1_mix(r276_markMiddle, r276_markMiddle + r796_radius, 0.2), r276_aboveMarkBot - r796_radius - r276_commaOvershoot2)));
            r796_currentGlyph.include(r276_ApparentTranslate(0, r276_DotRadius * 0.3));
            return void 0;
        });
        r276_xn$createAndSaveGlyphImpl$2Lrc3c('revCommaAbove.square', null, function () {
            var _r804_t1;
            var _r804_t0 = this;
            var r804_currentGlyph = _r804_t0;
            r804_currentGlyph.setWidth(0);
            r804_currentGlyph.include(r276_StdAnchors.narrow());
            var r804_radius = r276_commaAboveRadius * r276_DesignParameters.squareDotScalar;
            r804_currentGlyph.include(r276_Rect(r276_aboveMarkTop + r276_commaOvershoot, r276_aboveMarkTop - r804_radius * 2 + r276_commaOvershoot, r276_markMiddle - r804_radius, r276_markMiddle + r804_radius));
            r804_currentGlyph.include(r276_dispiro(r276_widths.lhs(Math.min(r804_radius, r276_markFine * r1_linreg(16, 2, 90, 1.75, r276_markStroke))), r276_flat(r276_markMiddle - r804_radius, r276_aboveMarkTop, r276_heading(r276_Downward)), r276_curl(r276_markMiddle - r804_radius, r276_aboveMarkTop - 2 * r804_radius, r276_heading(r276_Downward)), r276_quadControls(0, 0.6), r276_g4(r1_mix(r276_markMiddle, r276_markMiddle + r804_radius, 0.2), r276_aboveMarkBot - r804_radius - r276_commaOvershoot2)));
            r804_currentGlyph.include(r276_ApparentTranslate(0, r276_DotRadius * 0.3));
            return void 0;
        });
        r276_xn$selectvariant$7Hrq('revCommaAbove', 788, new r276_xn$NamedParameterPair$2Lrc9b('follow', 'diacriticDot'));
        r276_xn$deriveglyphs$7Hrq('revCommaGrekUpperTonos', null, 'revCommaAbove', function (r811_src, r811_gr) {
            var _r811_t0, _r811_t1;
            return function () {
                var _r813_t1;
                var _r813_t0 = this;
                var r813_currentGlyph = _r813_t0;
                r813_currentGlyph.setWidth(0);
                r813_currentGlyph.include(r276_xn$referglyph$1aao(r811_src));
                r813_currentGlyph.include(r276_StdAnchors.impl('grekUpperTonos', 0, 0));
                return void 0;
            };
        });
        r276_xn$createAndSaveGlyphImpl$2Lrc3c('barAbove', 781, function () {
            var _r819_t1;
            var _r819_t0 = this;
            var r819_currentGlyph = _r819_t0;
            r819_currentGlyph.setWidth(0);
            r819_currentGlyph.include(r276_StdAnchors.narrow());
            r819_currentGlyph.include(r276_VBar.m(r276_markMiddle, r276_aboveMarkBot, r276_aboveMarkTop, r276_markStroke));
            return void 0;
        });
        r276_xn$createAndSaveGlyphImpl$2Lrc3c('ascenderBarAbove', null, function () {
            var _r825_t1;
            var _r825_t0 = this;
            var r825_currentGlyph = _r825_t0;
            r825_currentGlyph.setWidth(0);
            r825_currentGlyph.include(r276_StdAnchors.narrow());
            r825_currentGlyph.include(r276_VBar.m(r276_markMiddle, r1_mix(r276_XH, r276_aboveMarkBot, 0.5), r276_CAP, r276_markStroke));
            return void 0;
        });
        r276_xn$createAndSaveGlyphImpl$2Lrc3c('dblBarAbove', 782, function () {
            var _r831_t1;
            var _r831_t0 = this;
            var r831_currentGlyph = _r831_t0;
            r831_currentGlyph.setWidth(0);
            r831_currentGlyph.include(r276_StdAnchors.mediumWide());
            r831_currentGlyph.include(r276_VBar.m(r276_markMiddle - r276_markExtend * 0.75, r276_aboveMarkBot, r276_aboveMarkTop, r276_markStroke));
            r831_currentGlyph.include(r276_VBar.m(r276_markMiddle + r276_markExtend * 0.75, r276_aboveMarkBot, r276_aboveMarkTop, r276_markStroke));
            return void 0;
        });
        r276_xn$createAndSaveGlyphImpl$2Lrc3c('bridgeAbove', 838, function () {
            var _r838_t1;
            var _r838_t0 = this;
            var r838_currentGlyph = _r838_t0;
            r838_currentGlyph.setWidth(0);
            r838_currentGlyph.include(r276_StdAnchors.wide());
            r838_currentGlyph.include(r276_VBar.m(r276_markMiddle - r276_markExtend, r276_aboveMarkBot, r276_aboveMarkTop, r276_markFine * 2));
            r838_currentGlyph.include(r276_VBar.m(r276_markMiddle + r276_markExtend, r276_aboveMarkBot, r276_aboveMarkTop, r276_markFine * 2));
            r838_currentGlyph.include(r276_HBar.t(r276_markMiddle - r276_markExtend, r276_markMiddle + r276_markExtend, r276_aboveMarkTop, r276_markFine * 2));
            return void 0;
        });
        r276_xn$createAndSaveGlyphImpl$2Lrc3c('wideBridgeAbove', 8425, function () {
            var _r846_t1;
            var _r846_t0 = this;
            var r846_currentGlyph = _r846_t0;
            r846_currentGlyph.setWidth(0);
            r846_currentGlyph.include(r276_StdAnchors.impl('above', 0, 1.5));
            r846_currentGlyph.include(r276_VBar.m(r276_SB - r276_Width, r276_aboveMarkBot, r276_aboveMarkTop, r276_markFine * 2));
            r846_currentGlyph.include(r276_VBar.m(r276_RightSB - r276_Width, r276_aboveMarkBot, r276_aboveMarkTop, r276_markFine * 2));
            r846_currentGlyph.include(r276_HBar.t(r276_SB - r276_Width, r276_RightSB - r276_Width, r276_aboveMarkTop, r276_markFine * 2));
            return void 0;
        });
        r276_xn$createAndSaveGlyphImpl$2Lrc3c('yerikAbove', 830, function () {
            var _r854_t1;
            var _r854_t0 = this;
            var r854_currentGlyph = _r854_t0;
            r854_currentGlyph.setWidth(0);
            r854_currentGlyph.include(r276_StdAnchors.narrow());
            r854_currentGlyph.include(r276_dispiro(r276_widths.center(r276_markFine * 2), r276_g2(r276_markMiddle - r276_markFine * 0.5, r276_aboveMarkBot, r276_heading(r276_Upward)), r276_alsoThruThem([
                [
                    0.9,
                    0.36
                ],
                [
                    0.1,
                    0.64
                ]
            ], r276_heading(r276_Upward)), r276_g2(r276_markMiddle + r276_markFine * 0.5, r276_aboveMarkTop, r276_heading(r276_Upward))));
            return void 0;
        });
        var _r276_t15 = Object.entries(r276_DotVariants)[Symbol.iterator]();
        var _r276_t16 = void 0;
        while (!(_r276_t16 = _r276_t15.next()).done) {
            _r276_t17 = _r276_t16.value;
            r276_suffix = _r276_t17[0];
            r276_DrawAt = _r276_t17[1][0];
            r276_kdr = _r276_t17[1][1];
            _r276_t17[1];
            (function () {
                return r276_xn$createAndSaveGlyphImpl$2Lrc3c('candrabinduAbove.' + r276_suffix, null, function () {
                    var _r863_t1;
                    var _r863_t0 = this;
                    var r863_currentGlyph = _r863_t0;
                    r863_currentGlyph.setWidth(0);
                    var r863_fine = r276_AdviceStroke(6.5);
                    var r863_arcSw = Math.min(r276_markStroke, r863_fine * 1.25);
                    var r863_radius = Math.max(r276_markExtend - r276_DotRadius, r863_fine * 1.35);
                    var r863_yDot = r1_mix(r276_aboveMarkBot, r276_aboveMarkTop, 0.625);
                    r863_currentGlyph.include(r276_dispiro(r276_widths.rhs(r863_arcSw), r276_g4.down.start(r276_markMiddle - r863_radius, r863_yDot, r276_heading(r276_Downward)), r276_arcvh(), r276_g4.right.mid(r276_markMiddle, r863_yDot - r863_radius), r276_archv(), r276_g4.up.end(r276_markMiddle + r863_radius, r863_yDot, r276_heading(r276_Upward))));
                    r863_currentGlyph.include(r276_DrawAt(r276_markMiddle, r863_yDot, r863_fine * r276_kdr));
                    r863_currentGlyph.include(r276_ApparentTranslate(0, r863_fine * 0.5));
                    r863_currentGlyph.include(r276_StdAnchors.mediumWide());
                    return void 0;
                });
            }());
        }
        r276_xn$selectvariant$7Hrq('candrabinduAbove', 784, new r276_xn$NamedParameterPair$2Lrc9b('follow', 'diacriticDot'));
        r276_turned('turncandrabinduAbove', 850, 'candrabinduAbove', r276_markMiddle, r276_aboveMarkMid);
        r276_alias('graveToneAbove', 832, 'graveAbove');
        r276_alias('acuteToneAbove', 833, 'acuteAbove');
        r276_xn$createAndSaveGlyphImpl$2Lrc3c('tonosAbove', null, function () {
            var _r872_t1;
            var _r872_t0 = this;
            var r872_currentGlyph = _r872_t0;
            r872_currentGlyph.setWidth(0);
            r872_currentGlyph.include(r276_StdAnchors.narrow());
            var r872_shift = 0.05 * r276_markExtend + (r276_markStress - r276_markFine) * r276_HVContrast;
            r872_currentGlyph.include(r276_dispiro(r276_flat(r276_markMiddle + r872_shift, r276_aboveMarkTop + 0.4 * r276_markStress, r276_widths.center.heading(r276_markStress * 2, r276_Downward)), r276_curl(r276_markMiddle - 0.5 * r872_shift, r276_aboveMarkBot, r276_widths.center.heading(r276_markFine * 2, r276_Downward))));
            return void 0;
        });
        r276_xn$createAndSaveGlyphImpl$2Lrc3c('tonosGrekUpperTonos', null, function () {
            var _r878_t1;
            var _r878_t0 = this;
            var r878_currentGlyph = _r878_t0;
            r878_currentGlyph.setWidth(0);
            r878_currentGlyph.include(r276_xn$referglyph$1aao('tonosAbove'));
            r878_currentGlyph.include(r276_StdAnchors.impl('grekUpperTonos', 0, 0));
            return void 0;
        });
        r276_xn$createAndSaveGlyphImpl$2Lrc3c('variaAbove', null, function () {
            var _r884_t1;
            var _r884_t0 = this;
            var r884_currentGlyph = _r884_t0;
            r884_currentGlyph.setWidth(0);
            r884_currentGlyph.include(r276_StdAnchors.medium());
            r884_currentGlyph.include(r276_dispiro(r276_flat(r276_markMiddle + r276_markStress, r276_aboveMarkBot - r276_markFine * 0.5, r276_widths(r276_markFine, r276_markFine)), r276_curl(r276_markMiddle - r276_markExtend * 0.5, r276_aboveMarkTop + r276_markStress * 0.25, r276_widths(r276_markStress, r276_markStress))));
            return void 0;
        });
        r276_xn$createAndSaveGlyphImpl$2Lrc3c('variaGrekUpperTonos', null, function () {
            var _r890_t1;
            var _r890_t0 = this;
            var r890_currentGlyph = _r890_t0;
            r890_currentGlyph.setWidth(0);
            r890_currentGlyph.include(r276_xn$referglyph$1aao('variaAbove'));
            r890_currentGlyph.include(r276_StdAnchors.impl('grekUpperTonos', 0, 0));
            return void 0;
        });
        r276_xn$createAndSaveGlyphImpl$2Lrc3c('oxiaAbove', null, function () {
            var _r896_t1;
            var _r896_t0 = this;
            var r896_currentGlyph = _r896_t0;
            r896_currentGlyph.setWidth(0);
            r896_currentGlyph.include(r276_StdAnchors.medium());
            r896_currentGlyph.include(r276_dispiro(r276_flat(r276_markMiddle - r276_markStress, r276_aboveMarkBot - r276_markFine * 0.5, r276_widths(r276_markFine, r276_markFine)), r276_curl(r276_markMiddle + r276_markExtend * 0.5, r276_aboveMarkTop + r276_markStress * 0.25, r276_widths(r276_markStress, r276_markStress))));
            return void 0;
        });
        r276_xn$createAndSaveGlyphImpl$2Lrc3c('oxiaGrekUpperTonos', null, function () {
            var _r902_t1;
            var _r902_t0 = this;
            var r902_currentGlyph = _r902_t0;
            r902_currentGlyph.setWidth(0);
            r902_currentGlyph.include(r276_xn$referglyph$1aao('oxiaAbove'));
            r902_currentGlyph.include(r276_StdAnchors.impl('grekUpperTonos', 0, 0));
            return void 0;
        });
        r276_xn$createAndSaveGlyphImpl$2Lrc3c('perispomeniAbove', 834, function () {
            var _r908_t1;
            var _r908_t0 = this;
            var r908_currentGlyph = _r908_t0;
            r908_currentGlyph.setWidth(0);
            r908_currentGlyph.include(r276_xn$referglyph$1aao('archAbove'));
            r908_currentGlyph.include(r276_StdAnchors.wide());
            return void 0;
        });
        r276_alias('koronisAbove', 835, 'commaAbove');
        r276_xn$createAndSaveGlyphImpl$2Lrc3c('dialytikaTonosAbove', 836, function () {
            var _r914_t1;
            var _r914_t0 = this;
            var r914_currentGlyph = _r914_t0;
            r914_currentGlyph.setWidth(0);
            r914_currentGlyph.include(r276_WithTransform(r276_ApparentTranslate(0, -1 / 8 * r276_AccentHeight), r276_xn$referglyph$1aao('dialytikaAbove')));
            r914_currentGlyph.include(r276_WithTransform(r276_ApparentTranslate(0, 0), r276_xn$referglyph$1aao('tonosAbove')));
            r914_currentGlyph.include(r276_StdAnchors.wide());
            return void 0;
        });
        r276_xn$createAndSaveGlyphImpl$2Lrc3c('dialytikaVariaAbove', null, function () {
            var _r921_t1;
            var _r921_t0 = this;
            var r921_currentGlyph = _r921_t0;
            r921_currentGlyph.setWidth(0);
            var r921_shift = 0.125 * (r276_markExtend * 0.875 - r276_markStress);
            r921_currentGlyph.include(r276_WithTransform(r276_ApparentTranslate(0, -1 / 8 * r276_AccentHeight), r276_xn$referglyph$1aao('dialytikaAbove')));
            r921_currentGlyph.include(r276_WithTransform(r276_ApparentTranslate(r921_shift, 0), r276_xn$referglyph$1aao('variaAbove')));
            r921_currentGlyph.include(r276_StdAnchors.wide());
            return void 0;
        });
        r276_xn$createAndSaveGlyphImpl$2Lrc3c('dialytikaOxiaAbove', null, function () {
            var _r928_t1;
            var _r928_t0 = this;
            var r928_currentGlyph = _r928_t0;
            r928_currentGlyph.setWidth(0);
            var r928_shift = 0.125 * (r276_markExtend * 0.875 - r276_markStress);
            r928_currentGlyph.include(r276_WithTransform(r276_ApparentTranslate(0, -1 / 8 * r276_AccentHeight), r276_xn$referglyph$1aao('dialytikaAbove')));
            r928_currentGlyph.include(r276_WithTransform(r276_ApparentTranslate(-r928_shift, 0), r276_xn$referglyph$1aao('oxiaAbove')));
            r928_currentGlyph.include(r276_StdAnchors.wide());
            return void 0;
        });
        r276_xn$createAndSaveGlyphImpl$2Lrc3c('crossAbove', 829, function () {
            var _r935_t1;
            var _r935_t0 = this;
            var r935_currentGlyph = _r935_t0;
            r935_currentGlyph.setWidth(0);
            r935_currentGlyph.include(r276_StdAnchors.mediumWide());
            r935_currentGlyph.include(r276_dispiro(r276_flat(r276_markMiddle - r276_markExtend, r276_aboveMarkTop, r276_widths(r276_markFine, r276_markFine)), r276_curl(r276_markMiddle + r276_markExtend, r276_aboveMarkBot)));
            r935_currentGlyph.include(r276_dispiro(r276_flat(r276_markMiddle - r276_markExtend, r276_aboveMarkBot, r276_widths(r276_markFine, r276_markFine)), r276_curl(r276_markMiddle + r276_markExtend, r276_aboveMarkTop)));
            return void 0;
        });
        r276_xn$createAndSaveGlyphImpl$2Lrc3c('lessAbove', 7678, function () {
            var _r942_t1;
            var _r942_t0 = this;
            var r942_currentGlyph = _r942_t0;
            r942_currentGlyph.setWidth(0);
            r942_currentGlyph.include(r276_StdAnchors.mediumWide());
            var r942_top = r276_aboveMarkTop;
            var r942_bot = r276_aboveMarkBot;
            var r942_exp = Math.sqrt(1 + Math.pow((r942_top - r942_bot) / r276_markExtend, 2));
            r942_currentGlyph.include(r276_dispiro(r276_widths.center(r276_markFine * 2), r276_flat(r276_markMiddle + r276_markExtend, r942_top), r276_curl(r276_markMiddle - r276_markExtend, r1_mix(r942_top, r942_bot, 0.5), r276_widths.center.heading(r276_markFine * r942_exp, r276_Leftward))));
            r942_currentGlyph.include(r276_dispiro(r276_widths.center(r276_markFine * 2), r276_flat(r276_markMiddle + r276_markExtend, r942_bot), r276_curl(r276_markMiddle - r276_markExtend, r1_mix(r942_top, r942_bot, 0.5), r276_widths.center.heading(r276_markFine * r942_exp, r276_Leftward))));
            return void 0;
        });
        r276_turned('greaterAbove', 848, 'lessAbove', r276_markMiddle, r276_aboveMarkMid);
        r276_xn$createAndSaveGlyphImpl$2Lrc3c('upArrowHeadAbove', 57346, function () {
            var _r949_t1;
            var _r949_t0 = this;
            var r949_currentGlyph = _r949_t0;
            r949_currentGlyph.setWidth(0);
            r949_currentGlyph.include(r276_StdAnchors.medium());
            var r949_top = r276_aboveMarkTop;
            var r949_bot = r276_aboveMarkBot;
            var r949_exp = Math.sqrt(1 + Math.pow(3 * r276_markExtend / (r949_top - r949_bot), 2));
            r949_currentGlyph.include(r276_dispiro(r276_widths.center(r276_markFine * 2), r276_flat(r276_markMiddle - r276_markExtend, r949_bot), r276_curl(r276_markMiddle, r949_top, r276_widths.center.heading(r276_markFine * r949_exp, r276_Upward))));
            r949_currentGlyph.include(r276_dispiro(r276_widths.center(r276_markFine * 2), r276_flat(r276_markMiddle + r276_markExtend, r949_bot), r276_curl(r276_markMiddle, r949_top, r276_widths.center.heading(r276_markFine * r949_exp, r276_Upward))));
            return void 0;
        });
        r276_turned('downArrowHeadAbove', 57347, 'upArrowHeadAbove', r276_markMiddle, r276_aboveMarkMid);
        var r276_xn$ArrowheadForArrowMarkAboveUp$7KZjb = function () {
            var _r954_t0, _r954_t1;
            return r276_xn$createAndSaveGlyphImpl$2Lrc3c(null, null, function () {
                var _r957_t1;
                var _r957_t0 = this;
                var r957_currentGlyph = _r957_t0;
                var r957_fine = r276_AdviceStroke(6) / 2;
                var r957_top = r276_aboveMarkTop;
                var r957_bot = r276_aboveMarkMid;
                var r957_left = r276_markMiddle - r276_markExtend * 0.75;
                var r957_right = r276_markMiddle + r276_markExtend * 0.75;
                var r957_exp = Math.sqrt(1 + 2 * (r957_top - r957_bot) / (r957_right - r957_left) * (2 * (r957_top - r957_bot)) / (r957_right - r957_left));
                r957_currentGlyph.include(r276_dispiro(r276_widths.center(r957_fine * 2), r276_flat(r957_left, r957_bot), r276_curl(r1_mix(r957_left, r957_right, 0.5), r957_top, r276_widths.heading(r957_fine * r957_exp, r957_fine * r957_exp, r276_Rightward))));
                r957_currentGlyph.include(r276_dispiro(r276_widths.center(r957_fine * 2), r276_flat(r957_right, r957_bot), r276_curl(r1_mix(r957_left, r957_right, 0.5), r957_top, r276_widths.heading(r957_fine * r957_exp, r957_fine * r957_exp, r276_Leftward))));
                return void 0;
            });
        };
        var r276_xn$ArrowheadForArrowMarkAboveDown$7KZjb = function () {
            var _r960_t0, _r960_t1;
            return r276_xn$createAndSaveGlyphImpl$2Lrc3c(null, null, function () {
                var _r963_t1;
                var _r963_t0 = this;
                var r963_currentGlyph = _r963_t0;
                r963_currentGlyph.include(r276_xn$ArrowheadForArrowMarkAboveUp$7KZjb());
                r963_currentGlyph.include(r276_FlipAround(r276_markMiddle, r276_aboveMarkMid));
                return void 0;
            });
        };
        r276_VBar.mForArrowMarkAbove = function () {
            var _r966_t0, _r966_t1;
            return function () {
                var _r968_t1;
                var _r968_t0 = this;
                var r968_currentGlyph = _r968_t0;
                var r968_fine = r276_AdviceStroke(6) / 2;
                r968_currentGlyph.include(r276_VBar.m(r276_markMiddle, r276_aboveMarkTop, r276_aboveMarkBot, r968_fine * 2));
                return void 0;
            };
        };
        var r276_xn$ArrowheadForArrowMarkAboveLeft$7KZjb = function () {
            var _r970_t0, _r970_t1;
            return r276_xn$createAndSaveGlyphImpl$2Lrc3c(null, null, function () {
                var _r973_t1;
                var _r973_t0 = this;
                var r973_currentGlyph = _r973_t0;
                var r973_fine = r276_AdviceStroke(5.75) / 2;
                var r973_top = r276_aboveMarkTop;
                var r973_bot = r276_aboveMarkBot;
                var r973_left = r276_markMiddle - r276_markExtend * 1.5;
                var r973_right = r276_markMiddle - r276_markExtend * 0.5;
                var r973_exp = Math.sqrt(1 + (r973_top - r973_bot) / (2 * (r973_right - r973_left)) * (r973_top - r973_bot) / (2 * (r973_right - r973_left)));
                r973_currentGlyph.include(r276_dispiro(r276_widths.center(r973_fine * 2), r276_flat(r973_right, r973_top), r276_curl(r973_left, r1_mix(r973_top, r973_bot, 0.5), r276_widths.heading(r973_fine * r973_exp, r973_fine * r973_exp, r276_Downward))));
                r973_currentGlyph.include(r276_dispiro(r276_widths.center(r973_fine * 2), r276_flat(r973_right, r973_bot), r276_curl(r973_left, r1_mix(r973_top, r973_bot, 0.5), r276_widths.heading(r973_fine * r973_exp, r973_fine * r973_exp, r276_Upward))));
                return void 0;
            });
        };
        var r276_xn$ArrowheadForArrowMarkAboveRight$7KZjb = function () {
            var _r976_t0, _r976_t1;
            return r276_xn$createAndSaveGlyphImpl$2Lrc3c(null, null, function () {
                var _r979_t1;
                var _r979_t0 = this;
                var r979_currentGlyph = _r979_t0;
                r979_currentGlyph.include(r276_xn$ArrowheadForArrowMarkAboveLeft$7KZjb());
                r979_currentGlyph.include(r276_FlipAround(r276_markMiddle, r276_aboveMarkMid));
                return void 0;
            });
        };
        r276_HBar.mForArrowMarkAbove = function () {
            var _r982_t0, _r982_t1;
            return function () {
                var _r984_t1;
                var _r984_t0 = this;
                var r984_currentGlyph = _r984_t0;
                var r984_fine = r276_AdviceStroke(5.75) / 2;
                r984_currentGlyph.include(r276_HBar.m(r276_markMiddle - r276_markExtend * 1.5, r276_markMiddle + r276_markExtend * 1.5, r276_aboveMarkMid, r984_fine * 2));
                return void 0;
            };
        };
        r276_xn$createAndSaveGlyphImpl$2Lrc3c('upArrowAbove', null, function () {
            var _r988_t1;
            var _r988_t0 = this;
            var r988_currentGlyph = _r988_t0;
            r988_currentGlyph.setWidth(0);
            r988_currentGlyph.include(r276_StdAnchors.medium());
            r988_currentGlyph.include(r276_xn$ArrowheadForArrowMarkAboveUp$7KZjb());
            r988_currentGlyph.include(r276_VBar.mForArrowMarkAbove());
            return void 0;
        });
        r276_xn$createAndSaveGlyphImpl$2Lrc3c('downArrowAbove', 6835, function () {
            var _r995_t1;
            var _r995_t0 = this;
            var r995_currentGlyph = _r995_t0;
            r995_currentGlyph.setWidth(0);
            r995_currentGlyph.include(r276_StdAnchors.medium());
            r995_currentGlyph.include(r276_xn$ArrowheadForArrowMarkAboveDown$7KZjb());
            r995_currentGlyph.include(r276_VBar.mForArrowMarkAbove());
            return void 0;
        });
        r276_xn$createAndSaveGlyphImpl$2Lrc3c('leftArrowAbove', 8406, function () {
            var _r1002_t1;
            var _r1002_t0 = this;
            var r1002_currentGlyph = _r1002_t0;
            r1002_currentGlyph.setWidth(0);
            r1002_currentGlyph.include(r276_StdAnchors.wide());
            r1002_currentGlyph.include(r276_xn$ArrowheadForArrowMarkAboveLeft$7KZjb());
            r1002_currentGlyph.include(r276_HBar.mForArrowMarkAbove());
            return void 0;
        });
        r276_xn$createAndSaveGlyphImpl$2Lrc3c('rightArrowAbove', 8407, function () {
            var _r1009_t1;
            var _r1009_t0 = this;
            var r1009_currentGlyph = _r1009_t0;
            r1009_currentGlyph.setWidth(0);
            r1009_currentGlyph.include(r276_StdAnchors.wide());
            r1009_currentGlyph.include(r276_xn$ArrowheadForArrowMarkAboveRight$7KZjb());
            r1009_currentGlyph.include(r276_HBar.mForArrowMarkAbove());
            return void 0;
        });
        r276_xn$createAndSaveGlyphImpl$2Lrc3c('lrArrowAbove', 8417, function () {
            var _r1016_t1;
            var _r1016_t0 = this;
            var r1016_currentGlyph = _r1016_t0;
            r1016_currentGlyph.setWidth(0);
            r1016_currentGlyph.include(r276_StdAnchors.wide());
            r1016_currentGlyph.include(r276_xn$ArrowheadForArrowMarkAboveLeft$7KZjb());
            r1016_currentGlyph.include(r276_xn$ArrowheadForArrowMarkAboveRight$7KZjb());
            r1016_currentGlyph.include(r276_HBar.mForArrowMarkAbove());
            return void 0;
        });
        r276_alias('cyrlDasiaAbove', 1157, 'revCommaAbove');
        r276_alias('cyrlPsiliAbove', 1158, 'commaAbove');
        r276_xn$createAndSaveGlyphImpl$2Lrc3c('cyrlPalatilizationAbove', 1156, function () {
            var _r1024_t1;
            var _r1024_t0 = this;
            var r1024_currentGlyph = _r1024_t0;
            r1024_currentGlyph.setWidth(0);
            r1024_currentGlyph.include(r276_StdAnchors.wide());
            var r1024_leftEnd = r276_markMiddle - r276_markExtend * 2;
            var r1024_rightEnd = r276_markMiddle + r276_markExtend * 1.2;
            r1024_currentGlyph.include(r276_dispiro(r276_g4.up.start(r1024_rightEnd, r276_aboveMarkBot, r276_widths.heading(r276_markHalfStroke, r276_markHalfStroke, r276_Upward)), r276_arcvh(), r276_g2.left.mid(r276_markMiddle, r276_aboveMarkTop - r276_markHalfStroke, r276_heading(r276_Leftward)), r276_alsoThru.g2(0.5, 0.5), r276_g2.left.end(r1024_leftEnd, r1_mix(r276_aboveMarkBot, r276_aboveMarkTop, 0.5) - r276_markHalfStroke, r276_heading(r276_Leftward))));
            return void 0;
        });
        r276_xn$createAndSaveGlyphImpl$2Lrc3c('cyrlPokrytieAbove', 1159, function () {
            var _r1030_t1;
            var _r1030_t0 = this;
            var r1030_currentGlyph = _r1030_t0;
            r1030_currentGlyph.setWidth(0);
            r1030_currentGlyph.include(r276_StdAnchors.wide());
            var r1030_leftEnd = r276_markMiddle - r276_markExtend * 1.2;
            var r1030_rightEnd = r276_markMiddle + r276_markExtend * 2;
            r1030_currentGlyph.include(r276_dispiro(r276_g4.up.start(r1030_leftEnd, r276_aboveMarkBot, r276_widths.heading(r276_markHalfStroke, r276_markHalfStroke, r276_Upward)), r276_arcvh(), r276_g2.right.mid(r276_markMiddle, r276_aboveMarkTop - r276_markHalfStroke, r276_heading(r276_Rightward)), r276_alsoThru.g2(0.5, 0.5), r276_g2.right.end(r1030_rightEnd, r1_mix(r276_aboveMarkBot, r276_aboveMarkTop, 0.5) - r276_markHalfStroke, r276_heading(r276_Rightward))));
            return void 0;
        });
        r276_xn$createAndSaveGlyphImpl$2Lrc3c('cyrlTitloAbove', 1155, function () {
            var _r1036_t1;
            var _r1036_t0 = this;
            var r1036_currentGlyph = _r1036_t0;
            r1036_currentGlyph.setWidth(0);
            r1036_currentGlyph.include(r276_StdAnchors.wide());
            r1036_currentGlyph.include(r276_VBar.m(r276_markMiddle - r276_markExtend, r276_aboveMarkBot, r276_aboveMarkMid + r276_markFine, r276_markFine * 2));
            r1036_currentGlyph.include(r276_VBar.m(r276_markMiddle + r276_markExtend, r276_aboveMarkMid - r276_markFine, r276_aboveMarkTop, r276_markFine * 2));
            r1036_currentGlyph.include(r276_HBar.m(r276_markMiddle - r276_markExtend, r276_markMiddle + r276_markExtend, r276_aboveMarkMid, r276_markFine * 2));
            return void 0;
        });
        r276_xn$createAndSaveGlyphImpl$2Lrc3c('zigzagAbove', 859, function () {
            var _r1044_t1;
            var _r1044_t0 = this;
            var r1044_currentGlyph = _r1044_t0;
            r1044_currentGlyph.setWidth(0);
            r1044_currentGlyph.include(r276_StdAnchors.mediumWide());
            var r1044_ext = 0.625 * r276_markExtend + r276_markFine;
            var r1044_coSlope = 0.2;
            var r1044_fr = new r1_Box(r276_aboveMarkTop, r276_aboveMarkBot, r276_markMiddle - r1044_ext, r276_markMiddle + r1044_ext);
            r1044_currentGlyph.include(r276_HBar.m(r1044_fr.left, r1044_fr.right, r1044_fr.yMid, r276_markFine * 2));
            r1044_currentGlyph.include(r276_intersection(r276_MaskBelow(r1044_fr.top), r276_MaskAbove(r1044_fr.yMid - r276_markFine), r276_ExtLineLhs(4, r276_markFine * 2, r1044_fr.left + r1044_coSlope * (r1044_fr.top - r1044_fr.yMid - r276_markFine), r1044_fr.top, r1044_fr.left - 2 * r276_markFine * r1044_coSlope, r1044_fr.yMid - r276_markFine)));
            r1044_currentGlyph.include(r276_intersection(r276_MaskAbove(r1044_fr.bot), r276_MaskBelow(r1044_fr.yMid + r276_markFine), r276_ExtLineLhs(4, r276_markFine * 2, r1044_fr.right - r1044_coSlope * (r1044_fr.yMid - r1044_fr.bot - r276_markFine), r1044_fr.bot, r1044_fr.right + 2 * r276_markFine * r1044_coSlope, r1044_fr.yMid + r276_markFine)));
            return void 0;
        });
        r276_xn$createAndSaveGlyphImpl$2Lrc3c('ogonekAbove', 7630, function () {
            var _r1052_t1;
            var _r1052_t0 = this;
            var r1052_currentGlyph = _r1052_t0;
            r1052_currentGlyph.setWidth(0);
            r1052_currentGlyph.setMarkAnchor('above', r276_markMiddle, r276_XH, r276_markMiddle, r276_aboveMarkStack);
            r1052_currentGlyph.setBaseAnchor('aboveBraceL', r276_markMiddle - 0.25 * r276_markExtend, r276_aboveMarkMid);
            r1052_currentGlyph.setBaseAnchor('aboveBraceR', r276_markMiddle + 0.25 * r276_markExtend + 0.25 * r276_HVContrast * r276_markStroke, r276_aboveMarkMid);
            var r1052_fine = r276_AdviceStroke(8);
            var r1052_depth = 0 - r276_Descender - r276_markStroke;
            var r1052_fullExt = 7 / 16 * r1052_depth + 0.125 * r276_markStress;
            var r1052_extR = 0.25 * r1052_fullExt;
            var r1052_extL = 0.5 * r1052_fullExt + 0.375 * r276_markStroke + Math.max(0.125 * r276_markExtend, 1.5 * r276_TanSlope * r276_markStroke);
            var r1052_turnSlope = 0.5 * ((r276_markStroke - r1052_fine) / r276_markStroke - (r276_ArchDepthB - r276_ArchDepth) / r276_ArchDepth);
            r1052_currentGlyph.include(r276_intersection(r276_MaskAbove(r276_XH + r276_O), r276_dispiro(r276_g4(r276_markMiddle + r1_mix(r1052_extR, -r1052_extL, 0.75), r276_XH, r276_widths.rhs.heading(r1052_fine, r276_Rightward)), r276_alsoThru(0.5, 0.375 - 0.2 * r276_markStroke / r1052_depth, r276_widths.rhs(r1_mix(r1052_fine, r276_markStroke, 0.25))), r276_g4.up.mid(r276_markMiddle + r1052_extR, r276_XH + 0.75 * r1052_depth, r276_widths.rhs.heading(r276_markStroke, {
                'x': -r276_HVContrast,
                'y': -r1052_turnSlope
            })), r276_arcvh(r276_widths.rhs(r276_markStroke)), r276_g4(r276_markMiddle + r1_mix(r1052_extR, -r1052_extL, 0.625), r276_XH + r1052_depth - r276_O, r276_heading(r276_Leftward)), r276_g4(r276_markMiddle - r1052_extL, r276_XH + r1052_depth - 0.5 * r276_O, r276_heading(r276_Leftward)))));
            return void 0;
        });
        r276_xn$createAndSaveGlyphImpl$2Lrc3c('leftHalfCircleAbove', 849, function () {
            var _r1060_t2;
            var _r1060_t1 = this;
            var r1060_currentGlyph = _r1060_t1;
            r1060_currentGlyph.setWidth(0);
            r1060_currentGlyph.include(r276_StdAnchors.narrow());
            var _r1060_t0 = r276_RingDims();
            var r1060_radiusIn = _r1060_t0.radiusIn;
            var r1060_radiusOut = _r1060_t0.radiusOut;
            r1060_currentGlyph.include(r276_dispiro(r276_g4.left.start(r276_markMiddle, r276_aboveMarkTop, r276_widths.center.heading(r1060_radiusOut - r1060_radiusIn, r276_Leftward)), r276_archv(), r276_g4.down.mid(r276_markMiddle - (r276_aboveMarkTop - r276_aboveMarkBot) / 2, r1_mix(r276_aboveMarkTop, r276_aboveMarkBot, 0.5), r276_heading(r276_Downward)), r276_arcvh(), r276_g4.right.end(r276_markMiddle, r276_aboveMarkBot, r276_heading(r276_Rightward))));
            r1060_currentGlyph.include(r276_Translate((r276_aboveMarkTop - r276_aboveMarkBot) / 4, 0));
            return void 0;
        });
        r276_xn$createAndSaveGlyphImpl$2Lrc3c('rightHalfCircleAbove', 855, function () {
            var _r1067_t2;
            var _r1067_t1 = this;
            var r1067_currentGlyph = _r1067_t1;
            r1067_currentGlyph.setWidth(0);
            r1067_currentGlyph.include(r276_StdAnchors.narrow());
            var _r1067_t0 = r276_RingDims();
            var r1067_radiusIn = _r1067_t0.radiusIn;
            var r1067_radiusOut = _r1067_t0.radiusOut;
            r1067_currentGlyph.include(r276_dispiro(r276_g4.right.start(r276_markMiddle, r276_aboveMarkTop, r276_widths.center.heading(r1067_radiusOut - r1067_radiusIn, r276_Rightward)), r276_archv(), r276_g4.down.mid(r276_markMiddle + (r276_aboveMarkTop - r276_aboveMarkBot) / 2, r1_mix(r276_aboveMarkTop, r276_aboveMarkBot, 0.5), r276_heading(r276_Downward)), r276_arcvh(), r276_g4.left.end(r276_markMiddle, r276_aboveMarkBot, r276_heading(r276_Leftward))));
            r1067_currentGlyph.include(r276_Translate(-(r276_aboveMarkTop - r276_aboveMarkBot) / 4, 0));
            return void 0;
        });
        r276_xn$createAndSaveGlyphImpl$2Lrc3c('dblBreveAbove', 6855, function () {
            var _r1074_t1;
            var _r1074_t0 = this;
            var r1074_currentGlyph = _r1074_t0;
            r1074_currentGlyph.setWidth(0);
            r1074_currentGlyph.include(r276_StdAnchors.wide());
            var r1074_sw = r276_AdviceStroke(3.5) / r276_Stroke * r276_markStroke;
            var r1074_extend = (r276_aboveMarkTop - r276_aboveMarkBot - 0.5 * r276_markStroke) * 1.25;
            r1074_currentGlyph.include(r276_dispiro(r276_g4.down.start(r276_markMiddle - r1074_extend, r276_aboveMarkTop, r276_widths.center.heading(r1074_sw, r276_Downward)), r276_arcvh(), r276_g4.right.mid(r1_mix(r276_markMiddle, r276_markMiddle - r1074_extend, 0.5), r276_aboveMarkBot + 0.5 * r1074_sw, r276_heading(r276_Rightward)), r276_archv(), r276_g4.up.end(r276_markMiddle, r276_aboveMarkTop, r276_heading(r276_Upward))));
            r1074_currentGlyph.include(r276_dispiro(r276_g4.down.start(r276_markMiddle, r276_aboveMarkTop, r276_widths.center.heading(r1074_sw, r276_Downward)), r276_arcvh(), r276_g4.right.mid(r1_mix(r276_markMiddle, r276_markMiddle + r1074_extend, 0.5), r276_aboveMarkBot + 0.5 * r1074_sw, r276_heading(r276_Rightward)), r276_archv(), r276_g4.up.end(r276_markMiddle + r1074_extend, r276_aboveMarkTop, r276_heading(r276_Upward))));
            return void 0;
        });
        r276_xn$createAndSaveGlyphImpl$2Lrc3c('dblArchAbove', null, function () {
            var _r1081_t1;
            var _r1081_t0 = this;
            var r1081_currentGlyph = _r1081_t0;
            r1081_currentGlyph.setWidth(0);
            r1081_currentGlyph.include(r276_xn$referglyph$1aao('dblBreveAbove'));
            r1081_currentGlyph.include(r276_FlipAround(r276_markMiddle, r1_mix(r276_aboveMarkTop, r276_aboveMarkBot, 0.5)));
            r1081_currentGlyph.include(r276_StdAnchors.wide());
            return void 0;
        });
        r276_xn$createAndSaveGlyphImpl$2Lrc3c('plusAbove', 6856, function () {
            var _r1088_t1;
            var _r1088_t0 = this;
            var r1088_currentGlyph = _r1088_t0;
            r1088_currentGlyph.setWidth(0);
            r1088_currentGlyph.include(r276_StdAnchors.mediumWide());
            r1088_currentGlyph.include(r276_VBar.m(r276_markMiddle, r276_aboveMarkBot, r276_aboveMarkTop, r276_markFine * 2));
            r1088_currentGlyph.include(r276_HBar.m(r276_markMiddle - r276_markExtend, r276_markMiddle + r276_markExtend, r276_aboveMarkMid, r276_markFine * 2));
            return void 0;
        });
        r276_xn$createAndSaveGlyphImpl$2Lrc3c('upTackAbove', 7669, function () {
            var _r1095_t1;
            var _r1095_t0 = this;
            var r1095_currentGlyph = _r1095_t0;
            r1095_currentGlyph.setWidth(0);
            r1095_currentGlyph.include(r276_StdAnchors.medium());
            r1095_currentGlyph.include(r276_VBar.m(r276_markMiddle, r276_aboveMarkBot, r276_aboveMarkTop, r276_markFine * 2));
            r1095_currentGlyph.include(r276_HBar.b(r276_markMiddle - r276_markExtend, r276_markMiddle + r276_markExtend, r276_aboveMarkBot, r276_markFine * 2));
            return void 0;
        });
        r276_xn$createAndSaveGlyphImpl$2Lrc3c('downTackAbove', null, function () {
            var _r1102_t1;
            var _r1102_t0 = this;
            var r1102_currentGlyph = _r1102_t0;
            r1102_currentGlyph.setWidth(0);
            r1102_currentGlyph.include(r276_StdAnchors.medium());
            r1102_currentGlyph.include(r276_VBar.m(r276_markMiddle, r276_aboveMarkBot, r276_aboveMarkTop, r276_markFine * 2));
            r1102_currentGlyph.include(r276_HBar.t(r276_markMiddle - r276_markExtend, r276_markMiddle + r276_markExtend, r276_aboveMarkTop, r276_markFine * 2));
            return void 0;
        });
        r276_xn$createAndSaveGlyphImpl$2Lrc3c('leftParenAbove', 6849, function () {
            var _r1109_t1;
            var _r1109_t0 = this;
            var r1109_currentGlyph = _r1109_t0;
            r1109_currentGlyph.setWidth(0);
            r1109_currentGlyph.setMarkAnchor('aboveBraceL', r276_markMiddle, r276_aboveMarkMid, r276_markMiddle - r276_markExtend, r276_aboveMarkMid);
            var r1109_braceDepth = r276_markExtend * 0.25;
            var r1109_left = r276_markMiddle - 1.5 * r276_markExtend;
            r1109_currentGlyph.include(r276_dispiro(r276_widths.lhs(r276_markFine), r276_g4(r1109_left + r1109_braceDepth, r276_aboveMarkTop + r276_markFine), r276_g4(r1109_left + r276_OX, r276_aboveMarkMid), r276_g4(r1109_left + r1109_braceDepth, r276_aboveMarkBot - r276_markFine)));
            return void 0;
        });
        r276_xn$createAndSaveGlyphImpl$2Lrc3c('rightParenAbove', 6850, function () {
            var _r1115_t1;
            var _r1115_t0 = this;
            var r1115_currentGlyph = _r1115_t0;
            r1115_currentGlyph.setWidth(0);
            r1115_currentGlyph.setMarkAnchor('aboveBraceR', r276_markMiddle, r276_aboveMarkMid, r276_markMiddle + r276_markExtend, r276_aboveMarkMid);
            var r1115_braceDepth = r276_markExtend * 0.25;
            var r1115_right = r276_markMiddle + 1.5 * r276_markExtend;
            r1115_currentGlyph.include(r276_dispiro(r276_widths.rhs(r276_markFine), r276_g4(r1115_right - r1115_braceDepth, r276_aboveMarkTop + r276_markFine), r276_g4(r1115_right - r276_OX, r276_aboveMarkMid), r276_g4(r1115_right - r1115_braceDepth, r276_aboveMarkBot - r276_markFine)));
            return void 0;
        });
        r276_xn$createAndSaveGlyphImpl$2Lrc3c('braceAbove', 6843, function () {
            var _r1121_t1;
            var _r1121_t0 = this;
            var r1121_currentGlyph = _r1121_t0;
            r1121_currentGlyph.setWidth(0);
            r1121_currentGlyph.include(r276_xn$referglyph$1aao('leftParenAbove'));
            r1121_currentGlyph.include(r276_xn$referglyph$1aao('rightParenAbove'));
            return void 0;
        });
        r276_xn$createAndSaveGlyphImpl$2Lrc3c('leftBrackAbove', null, function () {
            var _r1127_t1;
            var _r1127_t0 = this;
            var r1127_currentGlyph = _r1127_t0;
            r1127_currentGlyph.setWidth(0);
            r1127_currentGlyph.setMarkAnchor('aboveBraceL', r276_markMiddle, r276_aboveMarkMid, r276_markMiddle - r276_markExtend, r276_aboveMarkMid);
            var r1127_braceDepth = r276_markExtend * 0.75;
            var r1127_left = r276_markMiddle - 1.75 * r276_markExtend;
            r1127_currentGlyph.include(r276_VBar.l(r1127_left, r276_aboveMarkBot, r276_aboveMarkTop, r276_markFine));
            r1127_currentGlyph.include(r276_HBar.t(r1127_left, r1127_left + r1127_braceDepth, r276_aboveMarkTop, r276_markFine));
            r1127_currentGlyph.include(r276_HBar.b(r1127_left, r1127_left + r1127_braceDepth, r276_aboveMarkBot, r276_markFine));
            return void 0;
        });
        r276_xn$createAndSaveGlyphImpl$2Lrc3c('rightBrackAbove', null, function () {
            var _r1135_t1;
            var _r1135_t0 = this;
            var r1135_currentGlyph = _r1135_t0;
            r1135_currentGlyph.setWidth(0);
            r1135_currentGlyph.setMarkAnchor('aboveBraceR', r276_markMiddle, r276_aboveMarkMid, r276_markMiddle + r276_markExtend, r276_aboveMarkMid);
            var r1135_braceDepth = r276_markExtend * 0.75;
            var r1135_right = r276_markMiddle + 1.75 * r276_markExtend;
            r1135_currentGlyph.include(r276_VBar.r(r1135_right, r276_aboveMarkBot, r276_aboveMarkTop, r276_markFine));
            r1135_currentGlyph.include(r276_HBar.t(r1135_right - r1135_braceDepth, r1135_right, r276_aboveMarkTop, r276_markFine));
            r1135_currentGlyph.include(r276_HBar.b(r1135_right - r1135_braceDepth, r1135_right, r276_aboveMarkBot, r276_markFine));
            return void 0;
        });
        return r276_xn$createAndSaveGlyphImpl$2Lrc3c('parenAbove', 6853, function () {
            var _r1143_t1;
            var _r1143_t0 = this;
            var r1143_currentGlyph = _r1143_t0;
            r1143_currentGlyph.setWidth(0);
            r1143_currentGlyph.include(r276_xn$referglyph$1aao('leftBrackAbove'));
            r1143_currentGlyph.include(r276_xn$referglyph$1aao('rightBrackAbove'));
            return void 0;
        });
    });
    return void 0;
});
