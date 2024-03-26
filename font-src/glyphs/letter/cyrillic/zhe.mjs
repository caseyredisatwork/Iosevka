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
    r269_xn$Capture_Ext$2Lrc2b['$defineGlyphBlockImpl$'](r269_xn$Capture_Ext$2Lrc2b, 'Letter-Cyrillic-Zhe', function (r270_xn$Capture$2Lrc8, r270_xn$ExportCapture$2Lrc4b) {
        var r270_suffix, r270_legShape, r270_fSlab, _r270_t9, _r270_t10, _r270_t11, _r270_t12, _r270_tag13, _r270_t14, _r270_tag15;
        var _r270_t0 = r270_xn$Capture$2Lrc8;
        var r270_xn$createAndSaveGlyphImpl$2Lrc3c = _r270_t0['$createAndSaveGlyphImpl$'];
        var r270_xn$NamedParameterPair$2Lrc9b = _r270_t0['$NamedParameterPair$'];
        var r270_xn$assignUnicodeImpl$2Lrc8b = _r270_t0['$assignUnicodeImpl$'];
        var r270_xn$execState$2Lrc0b = _r270_t0['$execState$'];
        var r270_para = _r270_t0.para;
        var r270_AS_BASE = _r270_t0.AS_BASE;
        var r270_ALSO_METRICS = _r270_t0.ALSO_METRICS;
        var r270_DivFrame = _r270_t0.DivFrame;
        var _r270_t1 = r270_xn$Capture$2Lrc8.Metrics;
        var r270_CAP = _r270_t1.CAP;
        var r270_XH = _r270_t1.XH;
        var r270_Ascender = _r270_t1.Ascender;
        var r270_Descender = _r270_t1.Descender;
        var r270_HVContrast = _r270_t1.HVContrast;
        var r270_Upward = _r270_t1.Upward;
        var r270_Downward = _r270_t1.Downward;
        var r270_O = _r270_t1.O;
        var r270_Jut = _r270_t1.Jut;
        var r270_SLAB = _r270_t1.SLAB;
        var r270_SideJut = _r270_t1.SideJut;
        var r270_AdviceStroke = _r270_t1.AdviceStroke;
        var _r270_t2 = r270_xn$Capture$2Lrc8.SpiroFns;
        var r270_g4 = _r270_t2.g4;
        var r270_corner = _r270_t2.corner;
        var r270_straight = _r270_t2.straight;
        var r270_widths = _r270_t2.widths;
        var r270_heading = _r270_t2.heading;
        var r270_bezControls = _r270_t2.bezControls;
        var r270_quadControls = _r270_t2.quadControls;
        var r270_dispiro = _r270_t2.dispiro;
        var r270_xn$spirooutline$1aao = _r270_t2['spiro-outline'];
        var _r270_t3 = r270_xn$Capture$2Lrc8.BooleFns;
        var r270_union = _r270_t3.union;
        var r270_intersection = _r270_t3.intersection;
        var r270_difference = _r270_t3.difference;
        var _r270_t4 = r270_xn$Capture$2Lrc8.CommonShapes.resolve();
        var r270_HSerif = _r270_t4.HSerif;
        var r270_HBar = _r270_t4.HBar;
        var r270_VBar = _r270_t4.VBar;
        var r270_DiagCor = _r270_t4.DiagCor;
        var r270_ExtLineLhs = _r270_t4.ExtLineLhs;
        var r270_ExtLineRhs = _r270_t4.ExtLineRhs;
        var r270_MaskAbove = _r270_t4.MaskAbove;
        var r270_MaskBelow = _r270_t4.MaskBelow;
        var r270_MaskLeft = _r270_t4.MaskLeft;
        var r270_MaskRight = _r270_t4.MaskRight;
        var _r270_t5 = r270_xn$Capture$2Lrc8['Common-Derivatives'].resolve();
        var r270_xn$selectvariant$7Hrq = _r270_t5['select-variant'];
        var r270_xn$referglyph$1aao = _r270_t5['refer-glyph'];
        var _r270_t6 = r270_xn$Capture$2Lrc8['Letter-Shared-Shapes'].resolve();
        var r270_CyrDescender = _r270_t6.CyrDescender;
        r270_xn$ExportCapture$2Lrc4b(function () {
            var _r275_t0, _r275_t1;
            return { 'Zhe': r270_Zhe };
        });
        var r270_Zhe = function () {
            var r278_Descender, r278_StraightLegs, r278_CurlyLegs, r278_TouchingLegs, r278_ConnectingLegs, r278_Shape, r278_HalfShape;
            var r278_exports = {};
            var r278_ZheSw = function (r285_df) {
                var _r285_t0, _r285_t1;
                return r270_AdviceStroke(3.3, r285_df.div);
            };
            var r278_ZheSw2 = function (r286_df) {
                var _r286_t0, _r286_t1;
                return r270_AdviceStroke(4, r286_df.div);
            };
            var r278_ZheSw3 = function (r287_df) {
                var _r287_t0, _r287_t1;
                return r270_AdviceStroke(3.7, r287_df.div);
            };
            var r278_Overshoot = function (r288_fSlab, r288_df) {
                var _r288_t0, _r288_t1;
                return r288_fSlab ? 0 : r270_O * 3 * r288_df.div;
            };
            var r278_CenterBar = function (r289_fSlab, r289_df, r289_bot, r289_midTop) {
                var _r289_t0, _r289_t1;
                return function () {
                    var _r291_t1;
                    var _r291_t0 = this;
                    var r291_currentGlyph = _r291_t0;
                    r291_currentGlyph.include(r270_VBar.m(r289_df.middle, r289_bot, r289_midTop, r278_ZheSw(r289_df)));
                    if (r289_fSlab && !r270_para.isItalic && r289_df.width > 7 * r270_para.refJut) {
                        r291_currentGlyph.include(r270_HSerif.mb(r289_df.middle, r289_bot, r270_Jut));
                        r291_currentGlyph.include(r270_HSerif.mt(r289_df.middle, r289_midTop, r270_Jut));
                    }
                    return void 0;
                };
            };
            var r278_LegSerifs = function (r295_fSlab, r295_fHalf, r295_df, r295_bot, r295_top) {
                var _r295_t0, _r295_t1;
                return function () {
                    var _r297_t1;
                    var _r297_t0 = this;
                    var r297_currentGlyph = _r297_t0;
                    var r297_fine = r278_ZheSw(r295_df);
                    var r297_fineK = 0.1;
                    if (r295_fSlab) {
                        if (!r295_fHalf) {
                            r297_currentGlyph.include(r270_HSerif.lt(r295_df.leftSB + r297_fine * r297_fineK, r295_top, r270_SideJut, r297_fine));
                            r297_currentGlyph.include(r270_HSerif.lb(r295_df.leftSB + r297_fine * r297_fineK, r295_bot, r270_SideJut, r297_fine));
                        }
                        r297_currentGlyph.include(r270_HSerif.rt(r295_df.rightSB - r297_fine * r297_fineK, r295_top, r270_SideJut, r297_fine));
                        r297_currentGlyph.include(r270_HSerif.rb(r295_df.rightSB - r297_fine * r297_fineK, r295_bot, r270_SideJut, r297_fine));
                    }
                    return void 0;
                };
            };
            r278_exports.Descender = r278_Descender = function (r303_fSlab, r303_df) {
                var _r303_t0, _r303_t1;
                var r303_sw = r278_ZheSw(r303_df);
                var r303_fineK = 0.1;
                return r270_CyrDescender.rSideJut(new r270_xn$NamedParameterPair$2Lrc9b('x', r303_df.rightSB - r303_fineK * r303_sw - r278_Overshoot(r303_fSlab, r303_df)), new r270_xn$NamedParameterPair$2Lrc9b('y', 0), new r270_xn$NamedParameterPair$2Lrc9b('refSw', r303_sw), new r270_xn$NamedParameterPair$2Lrc9b('sideJut', r270_SideJut));
            };
            r278_exports.StraightLegs = r278_StraightLegs = function (r309_fSlab, r309_fHalf, r309_df, r309_bot, r309_top) {
                var _r309_t0, _r309_t1;
                var r309_fine = r278_ZheSw(r309_df);
                var r309_overshoot = r278_Overshoot(r309_fSlab, r309_df);
                var r309_attach1X = r309_df.middle - 0.5 * r270_HVContrast * r309_fine;
                var r309_attach1Y = r1_mix(r309_bot, r309_top, 0.42) - r309_fine;
                var r309_attach2Y = r1_mix(r309_bot, r309_top, 0.72) + r309_fine;
                var r309_mask = function () {
                    var _r310_t0, _r310_t1;
                    return r270_xn$spirooutline$1aao(r270_corner(r309_df.leftSB + r309_overshoot + 0.1, r309_top), r270_corner(r309_attach1X, r309_attach1Y + 0.1), r270_corner(r309_df.width - r309_attach1X, r309_attach1Y + 0.1), r270_corner(r309_df.rightSB - r309_overshoot - 0.1, r309_top));
                };
                var r309_rightShape = r270_union(r270_intersection(r270_MaskRight(r309_df.middle), r270_ExtLineRhs(4, r309_fine, r309_df.rightSB - r309_overshoot, r309_top, r309_df.width - r309_attach1X, r309_attach1Y)), r270_intersection(r270_MaskRight(r309_df.middle), r270_difference(r270_ExtLineLhs(4, r309_fine, r309_df.rightSB - r309_overshoot, r309_bot, r309_df.width - r309_attach1X, r309_attach2Y), r309_mask())));
                var r309_fullShape = r309_fHalf ? r309_rightShape : r270_union(r309_rightShape, r270_intersection(r270_MaskLeft(r309_df.middle), r270_ExtLineLhs(4, r309_fine, r309_df.leftSB + r309_overshoot, r309_top, r309_attach1X, r309_attach1Y)), r270_intersection(r270_MaskLeft(r309_df.middle), r270_difference(r270_ExtLineRhs(4, r309_fine, r309_df.leftSB + r309_overshoot, r309_bot, r309_attach1X, r309_attach2Y), r309_mask())));
                return r270_intersection(r270_MaskBelow(r309_top), r270_MaskAbove(r309_bot), r309_fullShape);
            };
            r278_exports.CurlyLegs = r278_CurlyLegs = function (r312_fSlab, r312_fHalf, r312_df, r312_bot, r312_top) {
                var _r312_t0, _r312_t1;
                var r312_fine = r278_ZheSw(r312_df);
                var r312_fine2 = r278_ZheSw3(r312_df);
                var r312_overshoot = r312_fSlab ? 0 : 2 * r270_O * r312_df.div;
                var r312_attach1X = r312_df.middle - 0.5 * r270_HVContrast * r312_fine;
                var r312_attach1Y = r1_mix(r312_bot, r312_top, r312_fSlab ? 0.325 : 0.375);
                var r312_attach2Y = r1_mix(r312_bot, r312_top, 0.75);
                var r312_upperCurvature = function () {
                    var _r313_t0, _r313_t1;
                    return r270_bezControls(0, 0.3, 0.5, 0.75, 8);
                };
                var r312_lowerCurvature = function () {
                    var _r314_t0, _r314_t1;
                    return r270_quadControls(0, 0.3, 8);
                };
                var r312_rightShape = r270_union(r270_dispiro(r270_g4.down.start(r312_df.rightSB - r312_overshoot, r312_top, r270_widths.rhs.heading(r312_fine, r270_Downward)), r312_upperCurvature(), r270_g4(r312_df.width - r312_attach1X, r312_attach1Y, r270_widths.rhs(r312_fine2))), r270_difference(r270_dispiro(r270_g4.up.start(r312_df.rightSB - r312_overshoot, r312_bot, r270_widths.lhs.heading(r312_fine, r270_Upward)), r312_lowerCurvature(), r270_g4(r312_df.width - r312_attach1X, r312_attach2Y, r270_widths.center(r312_fine2))), r270_intersection(r270_MaskRight(r312_df.middle), r270_xn$spirooutline$1aao(r270_corner.down.start(r312_df.rightSB - r312_overshoot - 0.1, r312_top), r312_lowerCurvature(), r270_corner(r312_df.width - r312_attach1X, r312_attach1Y + 0.1), r270_corner(r312_df.middle, r312_top)))));
                var r312_fullShape = r312_fHalf ? r312_rightShape : r270_union(r312_rightShape, r270_dispiro(r270_g4.down.start(r312_df.leftSB + r312_overshoot, r312_top, r270_widths.lhs.heading(r312_fine, r270_Downward)), r312_upperCurvature(), r270_g4(r312_attach1X, r312_attach1Y, r270_widths.lhs(r312_fine2))), r270_difference(r270_dispiro(r270_g4.up.start(r312_df.leftSB + r312_overshoot, r312_bot, r270_widths.rhs.heading(r312_fine, r270_Upward)), r312_lowerCurvature(), r270_g4(r312_attach1X, r312_attach2Y, r270_widths.center(r312_fine2))), r270_intersection(r270_MaskLeft(r312_df.middle), r270_xn$spirooutline$1aao(r270_corner.down.start(r312_df.leftSB + r312_overshoot + 0.1, r312_top), r312_lowerCurvature(), r270_corner(r312_attach1X, r312_attach1Y + 0.1), r270_corner(r312_df.middle, r312_top)))));
                return r270_intersection(r270_MaskBelow(r312_top), r270_MaskAbove(r312_bot), r312_fullShape);
            };
            r278_exports.TouchingLegs = r278_TouchingLegs = function (r316_fSlab, r316_fHalf, r316_df, r316_bot, r316_top) {
                var _r316_t0, _r316_t1;
                return r278_ConnectedLegsImpl(1, r316_fSlab, r316_fHalf, r316_df, r316_bot, r316_top);
            };
            r278_exports.ConnectingLegs = r278_ConnectingLegs = function (r318_fSlab, r318_fHalf, r318_df, r318_bot, r318_top) {
                var _r318_t0, _r318_t1;
                return r278_ConnectedLegsImpl(0.6, r318_fSlab, r318_fHalf, r318_df, r318_bot, r318_top);
            };
            var r278_ConnectedLegsImpl = function (r319_k, r319_fSlab, r319_fHalf, r319_df, r319_bot, r319_top) {
                var _r319_t0, _r319_t1;
                var r319_fine = r278_ZheSw(r319_df);
                var r319_cor = r270_DiagCor(r319_top - r319_bot, r319_df.rightSB - r319_df.leftSB);
                var r319_midX = r1_mix(r319_df.leftSB, r319_df.middle - r270_HVContrast * r319_cor * r319_fine, r319_k);
                var r319_midY = r1_mix(r319_bot, r319_top, 0.5);
                var r319_overshoot = r278_Overshoot(r319_fSlab, r319_df);
                var r319_rightShape = r270_union(r270_intersection(r270_MaskBelow(r319_midY), r270_MaskAbove(r319_bot), r270_ExtLineLhs(4, r319_fine, r319_df.rightSB - r319_overshoot, r319_bot, r319_df.width - r319_midX, r319_midY)), r270_intersection(r270_MaskBelow(r319_top), r270_MaskAbove(r319_midY), r270_ExtLineRhs(4, r319_fine, r319_df.rightSB - r319_overshoot, r319_top, r319_df.width - r319_midX, r319_midY)));
                var r319_fullShape = r319_fHalf ? r319_rightShape : r270_union(r319_rightShape, r270_intersection(r270_MaskBelow(r319_midY), r270_MaskAbove(r319_bot), r270_ExtLineRhs(4, r319_fine, r319_df.leftSB + r319_overshoot, r319_bot, r319_midX, r319_midY)), r270_intersection(r270_MaskBelow(r319_top), r270_MaskAbove(r319_midY), r270_ExtLineLhs(4, r319_fine, r319_df.leftSB + r319_overshoot, r319_top, r319_midX, r319_midY)));
                return r270_union(r319_fullShape, r270_HBar.m(r319_fHalf ? r319_df.middle : r319_midX, r319_df.width - r319_midX, r319_midY, r319_fine));
            };
            r278_exports.Shape = r278_Shape = function (r321_Legs, r321_fSlab, r321_df, r321_bot, r321_top, r321_midTop) {
                var _r321_t0, _r321_t1;
                return function () {
                    var _r323_t1;
                    var _r323_t0 = this;
                    var r323_currentGlyph = _r323_t0;
                    r323_currentGlyph.include(r278_CenterBar(r321_fSlab, r321_df, r321_bot, r321_midTop));
                    r323_currentGlyph.include(r321_Legs(r321_fSlab, false, r321_df, r321_bot, r321_top));
                    r323_currentGlyph.include(r278_LegSerifs(r321_fSlab, false, r321_df, r321_bot, r321_top));
                    return void 0;
                };
            };
            r278_exports.HalfShape = r278_HalfShape = function (r328_Legs, r328_fSlab, r328_df, r328_bot, r328_top) {
                var _r328_t0, _r328_t1;
                return function () {
                    var _r330_t1;
                    var _r330_t0 = this;
                    var r330_currentGlyph = _r330_t0;
                    r330_currentGlyph.include(r278_CenterBar(r328_fSlab, r328_df, r328_bot, r328_top));
                    r330_currentGlyph.include(r328_Legs(r328_fSlab, true, r328_df, r328_bot, r328_top));
                    r330_currentGlyph.include(r278_LegSerifs(r328_fSlab, true, r328_df, r328_bot, r328_top));
                    return void 0;
                };
            };
            return r278_exports;
        }();
        var r270_ZheConfig = {
            'straight': [
                r270_Zhe.StraightLegs,
                r270_SLAB
            ],
            'curly': [
                r270_Zhe.CurlyLegs,
                r270_SLAB
            ],
            'symmetricTouching': [
                r270_Zhe.TouchingLegs,
                r270_SLAB
            ],
            'symmetricConnected': [
                r270_Zhe.ConnectingLegs,
                r270_SLAB
            ]
        };
        var _r270_t7 = Object.entries(r270_ZheConfig)[Symbol.iterator]();
        var _r270_t8 = void 0;
        while (!(_r270_t8 = _r270_t7.next()).done) {
            _r270_t9 = _r270_t8.value;
            r270_suffix = _r270_t9[0];
            r270_legShape = _r270_t9[1][0];
            r270_fSlab = _r270_t9[1][1];
            _r270_t9[1];
            (function () {
                r270_xn$createAndSaveGlyphImpl$2Lrc3c('cyrl/Zhe.' + r270_suffix, null, function () {
                    var _r339_t1;
                    var _r339_t0 = this;
                    var r339_currentGlyph = _r339_t0;
                    var r339_df = r270_DivFrame(r270_para.diversityM, 3);
                    r339_currentGlyph.setWidth(r339_df.width);
                    r339_currentGlyph.include(r339_df.markSet.capital());
                    r339_currentGlyph.include(r270_Zhe.Shape(r270_legShape, r270_fSlab, r339_df, 0, r270_CAP, r270_CAP));
                    return void 0;
                });
                r270_xn$createAndSaveGlyphImpl$2Lrc3c('cyrl/ZheDescender.' + r270_suffix, null, function () {
                    var _r345_t1;
                    var _r345_t0 = this;
                    var r345_currentGlyph = _r345_t0;
                    var r345_df = r270_DivFrame(r270_para.diversityM, 3);
                    r345_currentGlyph.include(r270_xn$referglyph$1aao('cyrl/Zhe.' + r270_suffix), r270_AS_BASE, r270_ALSO_METRICS);
                    r345_currentGlyph.include(r270_Zhe.Descender(r270_fSlab, r345_df));
                    return void 0;
                });
                r270_xn$createAndSaveGlyphImpl$2Lrc3c('cyrl/zhe.' + r270_suffix, null, function () {
                    var _r350_t1;
                    var _r350_t0 = this;
                    var r350_currentGlyph = _r350_t0;
                    var r350_df = r270_DivFrame(r270_para.diversityM, 3);
                    r350_currentGlyph.setWidth(r350_df.width);
                    r350_currentGlyph.include(r350_df.markSet.e());
                    r350_currentGlyph.include(r270_Zhe.Shape(r270_legShape, r270_fSlab, r350_df, 0, r270_XH, r270_XH));
                    return void 0;
                });
                r270_xn$createAndSaveGlyphImpl$2Lrc3c('cyrl/zheDescender.' + r270_suffix, null, function () {
                    var _r356_t1;
                    var _r356_t0 = this;
                    var r356_currentGlyph = _r356_t0;
                    var r356_df = r270_DivFrame(r270_para.diversityM, 3);
                    r356_currentGlyph.include(r270_xn$referglyph$1aao('cyrl/zhe.' + r270_suffix), r270_AS_BASE, r270_ALSO_METRICS);
                    r356_currentGlyph.include(r270_Zhe.Descender(r270_fSlab, r356_df));
                    return void 0;
                });
                return r270_xn$createAndSaveGlyphImpl$2Lrc3c('cyrl/zhe.BGR.' + r270_suffix, null, function () {
                    var _r361_t1;
                    var _r361_t0 = this;
                    var r361_currentGlyph = _r361_t0;
                    var r361_df = r270_DivFrame(r270_para.diversityM, 3);
                    r361_currentGlyph.setWidth(r361_df.width);
                    r361_currentGlyph.include(r361_df.markSet.b());
                    r361_currentGlyph.include(r270_Zhe.Shape(r270_legShape, r270_fSlab, r361_df, 0, r270_XH, r270_Ascender));
                    return void 0;
                });
            }());
        }
        r270_xn$selectvariant$7Hrq('cyrl/Zhe', 1046);
        r270_xn$selectvariant$7Hrq('cyrl/ZheDescender', 1174, new r270_xn$NamedParameterPair$2Lrc9b('follow', 'cyrl/Zhe'));
        r270_xn$selectvariant$7Hrq('cyrl/zhe', 1078);
        r270_xn$selectvariant$7Hrq('cyrl/zhe.BGR', new r270_xn$NamedParameterPair$2Lrc9b('follow', 'cyrl/zhe'));
        return r270_xn$selectvariant$7Hrq('cyrl/zheDescender', 1175, new r270_xn$NamedParameterPair$2Lrc9b('follow', 'cyrl/zhe'));
    });
    return void 0;
});
