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
var r1_fallback = _r1_t8.fallback;
var r1_SuffixCfg = _r1_t8.SuffixCfg;
var _r1_t9 = _s0_t1;
var r1_Dotless = _r1_t9.Dotless;
var r1_CvDecompose = _r1_t9.CvDecompose;
var r1_MathSansSerif = _r1_t9.MathSansSerif;
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
    r270_xn$Capture_Ext$2Lrc2b['$defineGlyphBlockImpl$'](r270_xn$Capture_Ext$2Lrc2b, 'Letter-Latin-Upper-R', function (r271_xn$Capture$2Lrc8, r271_xn$ExportCapture$2Lrc4b) {
        var r271_suffix, r271_legShape, r271_fOpen, r271_fTailed, r271_slabs, r271_revSlabs, r271_fMotion, r271_fSlabBot, r271_bpCap, r271_bpXH, _r271_t11, _r271_t12, _r271_t13;
        var _r271_t0 = r271_xn$Capture$2Lrc8;
        var r271_xn$createAndSaveGlyphImpl$2Lrc3c = _r271_t0['$createAndSaveGlyphImpl$'];
        var r271_xn$NamedParameterPair$2Lrc9b = _r271_t0['$NamedParameterPair$'];
        var r271_xn$assignUnicodeImpl$2Lrc8b = _r271_t0['$assignUnicodeImpl$'];
        var r271_xn$execState$2Lrc0b = _r271_t0['$execState$'];
        var r271_para = _r271_t0.para;
        var r271_MarkSet = _r271_t0.MarkSet;
        var r271_AS_BASE = _r271_t0.AS_BASE;
        var r271_ALSO_METRICS = _r271_t0.ALSO_METRICS;
        var r271_tagged = _r271_t0.tagged;
        var _r271_t1 = r271_xn$Capture$2Lrc8.Metrics;
        var r271_Width = _r271_t1.Width;
        var r271_SB = _r271_t1.SB;
        var r271_CAP = _r271_t1.CAP;
        var r271_XH = _r271_t1.XH;
        var r271_Descender = _r271_t1.Descender;
        var r271_Translate = _r271_t1.Translate;
        var r271_ApparentTranslate = _r271_t1.ApparentTranslate;
        var r271_HVContrast = _r271_t1.HVContrast;
        var r271_Upward = _r271_t1.Upward;
        var r271_Downward = _r271_t1.Downward;
        var r271_Rightward = _r271_t1.Rightward;
        var r271_Leftward = _r271_t1.Leftward;
        var r271_O = _r271_t1.O;
        var r271_OX = _r271_t1.OX;
        var r271_Hook = _r271_t1.Hook;
        var r271_AHook = _r271_t1.AHook;
        var r271_Stroke = _r271_t1.Stroke;
        var r271_HBarPos = _r271_t1.HBarPos;
        var r271_Jut = _r271_t1.Jut;
        var r271_CThinB = _r271_t1.CThinB;
        var r271_SLAB = _r271_t1.SLAB;
        var r271_HalfStroke = _r271_t1.HalfStroke;
        var r271_RightSB = _r271_t1.RightSB;
        var r271_Middle = _r271_t1.Middle;
        var r271_SideJut = _r271_t1.SideJut;
        var r271_AdviceStroke2 = _r271_t1.AdviceStroke2;
        var _r271_t2 = r271_xn$Capture$2Lrc8.SpiroFns;
        var r271_g4 = _r271_t2.g4;
        var r271_corner = _r271_t2.corner;
        var r271_flat = _r271_t2.flat;
        var r271_curl = _r271_t2.curl;
        var r271_straight = _r271_t2.straight;
        var r271_widths = _r271_t2.widths;
        var r271_heading = _r271_t2.heading;
        var r271_quadControls = _r271_t2.quadControls;
        var r271_archv = _r271_t2.archv;
        var r271_dispiro = _r271_t2.dispiro;
        var _r271_t3 = r271_xn$Capture$2Lrc8.BooleFns;
        var r271_union = _r271_t3.union;
        var r271_intersection = _r271_t3.intersection;
        var r271_difference = _r271_t3.difference;
        var _r271_t4 = r271_xn$Capture$2Lrc8.CommonShapes.resolve();
        var r271_Rect = _r271_t4.Rect;
        var r271_HSerif = _r271_t4.HSerif;
        var r271_HBar = _r271_t4.HBar;
        var r271_VBar = _r271_t4.VBar;
        var r271_DiagCor = _r271_t4.DiagCor;
        var r271_WithTransform = _r271_t4.WithTransform;
        var r271_MaskLeft = _r271_t4.MaskLeft;
        var _r271_t5 = r271_xn$Capture$2Lrc8['Common-Derivatives'].resolve();
        var r271_xn$selectvariant$7Hrq = _r271_t5['select-variant'];
        var r271_xn$referglyph$1aao = _r271_t5['refer-glyph'];
        var r271_turned = _r271_t5.turned;
        var r271_xn$deriveglyphs$7Hrq = _r271_t5['derive-glyphs'];
        var r271_xn$linkreducedvariant$5sIl8 = _r271_t5['link-reduced-variant'];
        var _r271_t6 = r271_xn$Capture$2Lrc8['Letter-Latin-Upper-P'].resolve();
        var r271_PShape = _r271_t6.PShape;
        var r271_RevPShape = _r271_t6.RevPShape;
        var r271_PBarPosY = _r271_t6.PBarPosY;
        var r271_PRotundaShape = _r271_t6.PRotundaShape;
        var r271_BBPShape = _r271_t6.BBPShape;
        var r271_PShapeOutline = _r271_t6.PShapeOutline;
        var _r271_t7 = r271_xn$Capture$2Lrc8['Letter-Blackboard'].resolve();
        var r271_BBS = _r271_t7.BBS;
        var r271_BBD = _r271_t7.BBD;
        var _r271_t8 = r271_xn$Capture$2Lrc8['Letter-Shared-Shapes'].resolve();
        var r271_RightwardTailedBar = _r271_t8.RightwardTailedBar;
        var r271_RetroflexHook = _r271_t8.RetroflexHook;
        var r271_xn$LEGSHAPECURLY$9Jrj6 = 0;
        var r271_xn$LEGSHAPESTRAIGHT$9Jrj6 = 1;
        var r271_xn$LEGSHAPESTANDING$9Jrj6 = 2;
        var r271_RLegTerminalX = function (r277_legShape, r277_right, r277_sw) {
            var _r277_t0, _r277_t1;
            return r277_right - (r277_legShape ? r271_OX * 2 : 0);
        };
        var r271_RSlabExtraShift = function (r278_slab, r278_sw) {
            var _r278_t0, _r278_t1;
            return r278_slab ? -r271_Jut / 2 + 0.5 * r278_sw * r271_HVContrast : 0;
        };
        var r271_RLegDiagCor = function (r279_top, r279_bottom, r279_left, r279_right, r279_extraShift, r279_sw) {
            var _r279_t0, _r279_t1;
            return r271_DiagCor(r279_top - r279_bottom, r279_right - r279_left - r279_extraShift, 0, r279_sw);
        };
        var r271_RStandingLegFine = function (r280_sw) {
            var _r280_t0, _r280_t1;
            return r280_sw * r271_CThinB;
        };
        var r271_RStandingLegBend = function (r281_left, r281_right, r281_top, r281_bottom, r281_sw) {
            var _r281_t0, _r281_t1;
            return Math.min((r281_right - r281_left) * 0.99, Math.max(r281_sw * 1.5, (r281_right - r281_left) * 0.875));
        };
        var r271_RStandingBottomOverflow = function (r282_slab) {
            var _r282_t0, _r282_t1;
            return r282_slab ? 0 : 2 * r271_OX;
        };
        var r271_xn$RLegShapeStraight$5Frx = function () {
            var _r283_t6;
            var _r283_t7 = arguments;
            var _r283_t0 = [].slice.call(_r283_t7, 0);
            var _r283_t1 = [];
            var _r283_t2 = 0;
            while (_r283_t2 < _r283_t0.length) {
                if (!(_r283_t0[_r283_t2] instanceof r271_xn$NamedParameterPair$2Lrc9b))
                    _r283_t1.push(_r283_t0[_r283_t2]);
                _r283_t2 = _r283_t2 + 1;
            }
            var _r283_t3 = _r283_t0;
            var _r283_t4 = _r283_t3.length;
            var _r283_t5 = 0;
            while (_r283_t5 < _r283_t4) {
                _r283_t2 = _r283_t3[_r283_t5];
                if (_r283_t2 && _r283_t2 instanceof r271_xn$NamedParameterPair$2Lrc9b && _r283_t2.left === 'top')
                    r283_top = _r283_t2.right;
                if (_r283_t2 && _r283_t2 instanceof r271_xn$NamedParameterPair$2Lrc9b && _r283_t2.left === 'bottom')
                    r283_bottom = _r283_t2.right;
                if (_r283_t2 && _r283_t2 instanceof r271_xn$NamedParameterPair$2Lrc9b && _r283_t2.left === 'left')
                    r283_left = _r283_t2.right;
                if (_r283_t2 && _r283_t2 instanceof r271_xn$NamedParameterPair$2Lrc9b && _r283_t2.left === 'right')
                    r283_right = _r283_t2.right;
                if (_r283_t2 && _r283_t2 instanceof r271_xn$NamedParameterPair$2Lrc9b && _r283_t2.left === 'charTop')
                    r283_charTop = _r283_t2.right;
                if (_r283_t2 && _r283_t2 instanceof r271_xn$NamedParameterPair$2Lrc9b && _r283_t2.left === 'slab')
                    r283_slab = _r283_t2.right;
                if (_r283_t2 && _r283_t2 instanceof r271_xn$NamedParameterPair$2Lrc9b && _r283_t2.left === 'sw')
                    r283_sw = _r283_t2.right;
                if (_r283_t2 && _r283_t2 instanceof r271_xn$NamedParameterPair$2Lrc9b && _r283_t2.left === 'extraShift')
                    r283_extraShift = _r283_t2.right;
                _r283_t5 = _r283_t5 + 1;
            }
            var r283_top = r1_fallback(r283_top, _r283_t1[0]);
            var r283_bottom = r1_fallback(r283_bottom, _r283_t1[1]);
            var r283_left = r1_fallback(r283_left, _r283_t1[2]);
            var r283_right = r1_fallback(r283_right, _r283_t1[3]);
            var r283_charTop = r1_fallback(r283_charTop, _r283_t1[4]);
            var r283_slab = r1_fallback(r283_slab, _r283_t1[5]);
            var r283_sw = r1_fallback(r283_sw, _r283_t1[6]);
            var r283_extraShift = r1_fallback(r283_extraShift, _r283_t1[7]);
            return function () {
                var _r289_t1;
                var _r289_t0 = this;
                var r289_currentGlyph = _r289_t0;
                var r289_shift = r271_RSlabExtraShift(r283_slab, r283_sw);
                var r289_xLeftTop = Math.max(r271_PShape.BarPos + r283_sw * r271_HVContrast, r283_left - 0.5 * r283_sw * r271_HVContrast + r289_shift);
                var r289_xRightBottom = r271_RLegTerminalX(r271_xn$LEGSHAPESTRAIGHT$9Jrj6, r283_right, r283_sw) + r289_shift;
                var r289_xRightBottomSerifStart = r289_xRightBottom - 0.25 * r283_sw * r271_HVContrast;
                r289_currentGlyph.include(r271_intersection(r271_Rect(r283_top, r283_bottom, -r271_Width, r283_slab ? r289_xRightBottomSerifStart : 2 * r271_Width), r271_dispiro(r271_corner(r289_xLeftTop, r283_top, r271_widths.lhs(r283_sw)), r271_corner(r289_xRightBottom, r283_bottom, r271_widths.rhs(r283_sw)))));
                if (r283_slab)
                    r289_currentGlyph.include(r271_HSerif.rb(r289_xRightBottomSerifStart, r283_bottom, r271_SideJut + r271_Jut / 8));
                return void 0;
            };
        };
        var r271_xn$RLegShapeCurly$5Frx = function () {
            var _r292_t6;
            var _r292_t7 = arguments;
            var _r292_t0 = [].slice.call(_r292_t7, 0);
            var _r292_t1 = [];
            var _r292_t2 = 0;
            while (_r292_t2 < _r292_t0.length) {
                if (!(_r292_t0[_r292_t2] instanceof r271_xn$NamedParameterPair$2Lrc9b))
                    _r292_t1.push(_r292_t0[_r292_t2]);
                _r292_t2 = _r292_t2 + 1;
            }
            var _r292_t3 = _r292_t0;
            var _r292_t4 = _r292_t3.length;
            var _r292_t5 = 0;
            while (_r292_t5 < _r292_t4) {
                _r292_t2 = _r292_t3[_r292_t5];
                if (_r292_t2 && _r292_t2 instanceof r271_xn$NamedParameterPair$2Lrc9b && _r292_t2.left === 'top')
                    r292_top = _r292_t2.right;
                if (_r292_t2 && _r292_t2 instanceof r271_xn$NamedParameterPair$2Lrc9b && _r292_t2.left === 'bottom')
                    r292_bottom = _r292_t2.right;
                if (_r292_t2 && _r292_t2 instanceof r271_xn$NamedParameterPair$2Lrc9b && _r292_t2.left === 'left')
                    r292_left = _r292_t2.right;
                if (_r292_t2 && _r292_t2 instanceof r271_xn$NamedParameterPair$2Lrc9b && _r292_t2.left === 'right')
                    r292_right = _r292_t2.right;
                if (_r292_t2 && _r292_t2 instanceof r271_xn$NamedParameterPair$2Lrc9b && _r292_t2.left === 'charTop')
                    r292_charTop = _r292_t2.right;
                if (_r292_t2 && _r292_t2 instanceof r271_xn$NamedParameterPair$2Lrc9b && _r292_t2.left === 'slab')
                    r292_slab = _r292_t2.right;
                if (_r292_t2 && _r292_t2 instanceof r271_xn$NamedParameterPair$2Lrc9b && _r292_t2.left === 'sw')
                    r292_sw = _r292_t2.right;
                if (_r292_t2 && _r292_t2 instanceof r271_xn$NamedParameterPair$2Lrc9b && _r292_t2.left === 'extraShift')
                    r292_extraShift = _r292_t2.right;
                _r292_t5 = _r292_t5 + 1;
            }
            var r292_top = r1_fallback(r292_top, _r292_t1[0]);
            var r292_bottom = r1_fallback(r292_bottom, _r292_t1[1]);
            var r292_left = r1_fallback(r292_left, _r292_t1[2]);
            var r292_right = r1_fallback(r292_right, _r292_t1[3]);
            var r292_charTop = r1_fallback(r292_charTop, _r292_t1[4]);
            var r292_slab = r1_fallback(r292_slab, _r292_t1[5]);
            var r292_sw = r1_fallback(r292_sw, _r292_t1[6]);
            var r292_extraShift = r1_fallback(r292_extraShift, _r292_t1[7]);
            return function () {
                var _r298_t1;
                var _r298_t0 = this;
                var r298_currentGlyph = _r298_t0;
                var r298_xRightBottom = r271_RLegTerminalX(r271_xn$LEGSHAPECURLY$9Jrj6, r292_right, r292_sw);
                r298_currentGlyph.include(r271_intersection(r271_Rect(r292_top, r292_bottom, -r271_Width, 2 * r271_Width), r271_dispiro(r271_widths.center(r292_sw), r271_g4.up.start(r298_xRightBottom - 0.5 * r292_sw * r271_HVContrast, r292_bottom, r271_heading(r271_Upward)), r271_quadControls(0, 0.4, 8), r271_g4(r292_left, r292_top))));
                if (r292_slab)
                    r298_currentGlyph.include(r271_HSerif.rb(r292_right, r292_bottom, r271_SideJut + r271_Jut / 8));
                return void 0;
            };
        };
        var r271_xn$RLegShapeStanding$5Frx = function () {
            var _r301_t6;
            var _r301_t7 = arguments;
            var _r301_t0 = [].slice.call(_r301_t7, 0);
            var _r301_t1 = [];
            var _r301_t2 = 0;
            while (_r301_t2 < _r301_t0.length) {
                if (!(_r301_t0[_r301_t2] instanceof r271_xn$NamedParameterPair$2Lrc9b))
                    _r301_t1.push(_r301_t0[_r301_t2]);
                _r301_t2 = _r301_t2 + 1;
            }
            var _r301_t3 = _r301_t0;
            var _r301_t4 = _r301_t3.length;
            var _r301_t5 = 0;
            while (_r301_t5 < _r301_t4) {
                _r301_t2 = _r301_t3[_r301_t5];
                if (_r301_t2 && _r301_t2 instanceof r271_xn$NamedParameterPair$2Lrc9b && _r301_t2.left === 'top')
                    r301_top = _r301_t2.right;
                if (_r301_t2 && _r301_t2 instanceof r271_xn$NamedParameterPair$2Lrc9b && _r301_t2.left === 'bottom')
                    r301_bottom = _r301_t2.right;
                if (_r301_t2 && _r301_t2 instanceof r271_xn$NamedParameterPair$2Lrc9b && _r301_t2.left === 'left')
                    r301_left = _r301_t2.right;
                if (_r301_t2 && _r301_t2 instanceof r271_xn$NamedParameterPair$2Lrc9b && _r301_t2.left === 'right')
                    r301_right = _r301_t2.right;
                if (_r301_t2 && _r301_t2 instanceof r271_xn$NamedParameterPair$2Lrc9b && _r301_t2.left === 'charTop')
                    r301_charTop = _r301_t2.right;
                if (_r301_t2 && _r301_t2 instanceof r271_xn$NamedParameterPair$2Lrc9b && _r301_t2.left === 'slab')
                    r301_slab = _r301_t2.right;
                if (_r301_t2 && _r301_t2 instanceof r271_xn$NamedParameterPair$2Lrc9b && _r301_t2.left === 'sw')
                    r301_sw = _r301_t2.right;
                if (_r301_t2 && _r301_t2 instanceof r271_xn$NamedParameterPair$2Lrc9b && _r301_t2.left === 'extraShift')
                    r301_extraShift = _r301_t2.right;
                _r301_t5 = _r301_t5 + 1;
            }
            var r301_top = r1_fallback(r301_top, _r301_t1[0]);
            var r301_bottom = r1_fallback(r301_bottom, _r301_t1[1]);
            var r301_left = r1_fallback(r301_left, _r301_t1[2]);
            var r301_right = r1_fallback(r301_right, _r301_t1[3]);
            var r301_charTop = r1_fallback(r301_charTop, _r301_t1[4]);
            var r301_slab = r1_fallback(r301_slab, _r301_t1[5]);
            var r301_sw = r1_fallback(r301_sw, _r301_t1[6]);
            var r301_extraShift = r1_fallback(r301_extraShift, _r301_t1[7]);
            return function () {
                var _r307_t1;
                var _r307_t0 = this;
                var r307_currentGlyph = _r307_t0;
                var r307_fine = r271_RStandingLegFine(r301_sw);
                var r307_bend = r271_RStandingLegBend(r301_left, r301_right, r301_top, r301_bottom, r301_sw);
                var r307_ytopRef = r301_top;
                var r307_yTopStroke = r301_top - r301_sw / 2 + r307_fine;
                var r307_yOffset = r1_mix(r301_bottom, r301_top, 0.2);
                var r307_xOverflow = r271_RStandingBottomOverflow(r301_slab);
                r307_currentGlyph.include(r271_dispiro(r271_widths.rhs(r307_fine), r271_flat(r301_left, r307_yTopStroke, r271_heading(r271_Rightward)), r271_curl(r301_right - r307_bend, r307_yTopStroke, r271_heading(r271_Rightward)), r271_archv(), r271_flat(r301_right + r271_O, Math.max(r307_yOffset + 1, r307_ytopRef - r307_bend * r301_charTop / r271_CAP), r271_widths.rhs.heading(r301_sw, r271_Downward)), r271_curl(r301_right + r271_O, r307_yOffset, r271_heading(r271_Downward)), r271_curl(r301_right + r271_O - r307_xOverflow, r301_bottom, r271_heading(r271_Downward))));
                if (r301_slab)
                    r307_currentGlyph.include(r271_HSerif.rb(r301_right, r301_bottom, r271_SideJut));
                return void 0;
            };
        };
        var r271_RLegShapes = [
            r271_xn$RLegShapeCurly$5Frx,
            r271_xn$RLegShapeStraight$5Frx,
            r271_xn$RLegShapeStanding$5Frx
        ];
        var r271_RevRLegTerminalX = function (r310_legShape, r310_left, r310_sw) {
            var _r310_t0, _r310_t1;
            return r310_left + (r310_legShape ? r271_OX * 2 : 0);
        };
        var r271_xn$RevRLegShapeStraight$3DrD = function () {
            var _r311_t6;
            var _r311_t7 = arguments;
            var _r311_t0 = [].slice.call(_r311_t7, 0);
            var _r311_t1 = [];
            var _r311_t2 = 0;
            while (_r311_t2 < _r311_t0.length) {
                if (!(_r311_t0[_r311_t2] instanceof r271_xn$NamedParameterPair$2Lrc9b))
                    _r311_t1.push(_r311_t0[_r311_t2]);
                _r311_t2 = _r311_t2 + 1;
            }
            var _r311_t3 = _r311_t0;
            var _r311_t4 = _r311_t3.length;
            var _r311_t5 = 0;
            while (_r311_t5 < _r311_t4) {
                _r311_t2 = _r311_t3[_r311_t5];
                if (_r311_t2 && _r311_t2 instanceof r271_xn$NamedParameterPair$2Lrc9b && _r311_t2.left === 'top')
                    r311_top = _r311_t2.right;
                if (_r311_t2 && _r311_t2 instanceof r271_xn$NamedParameterPair$2Lrc9b && _r311_t2.left === 'bottom')
                    r311_bottom = _r311_t2.right;
                if (_r311_t2 && _r311_t2 instanceof r271_xn$NamedParameterPair$2Lrc9b && _r311_t2.left === 'left')
                    r311_left = _r311_t2.right;
                if (_r311_t2 && _r311_t2 instanceof r271_xn$NamedParameterPair$2Lrc9b && _r311_t2.left === 'right')
                    r311_right = _r311_t2.right;
                if (_r311_t2 && _r311_t2 instanceof r271_xn$NamedParameterPair$2Lrc9b && _r311_t2.left === 'charTop')
                    r311_charTop = _r311_t2.right;
                if (_r311_t2 && _r311_t2 instanceof r271_xn$NamedParameterPair$2Lrc9b && _r311_t2.left === 'slab')
                    r311_slab = _r311_t2.right;
                if (_r311_t2 && _r311_t2 instanceof r271_xn$NamedParameterPair$2Lrc9b && _r311_t2.left === 'sw')
                    r311_sw = _r311_t2.right;
                if (_r311_t2 && _r311_t2 instanceof r271_xn$NamedParameterPair$2Lrc9b && _r311_t2.left === 'extraShift')
                    r311_extraShift = _r311_t2.right;
                _r311_t5 = _r311_t5 + 1;
            }
            var r311_top = r1_fallback(r311_top, _r311_t1[0]);
            var r311_bottom = r1_fallback(r311_bottom, _r311_t1[1]);
            var r311_left = r1_fallback(r311_left, _r311_t1[2]);
            var r311_right = r1_fallback(r311_right, _r311_t1[3]);
            var r311_charTop = r1_fallback(r311_charTop, _r311_t1[4]);
            var r311_slab = r1_fallback(r311_slab, _r311_t1[5]);
            var r311_sw = r1_fallback(r311_sw, _r311_t1[6]);
            var r311_extraShift = r1_fallback(r311_extraShift, _r311_t1[7]);
            return function () {
                var _r317_t1;
                var _r317_t0 = this;
                var r317_currentGlyph = _r317_t0;
                var r317_shift = r271_RSlabExtraShift(r311_slab, r311_sw);
                var r317_xLeftBottom = r271_RevRLegTerminalX(r271_xn$LEGSHAPESTRAIGHT$9Jrj6, r311_left, r311_sw) - r317_shift;
                var r317_xLeftBottomSerifStart = r317_xLeftBottom + 0.25 * r311_sw * r271_HVContrast;
                var r317_xRightTop = Math.min(r271_RightSB - r271_PShape.BarPos - r311_sw * r271_HVContrast, r311_right + 0.5 * r311_sw * r271_HVContrast - r317_shift);
                r317_currentGlyph.include(r271_intersection(r271_Rect(r311_top, r311_bottom, r311_slab ? r317_xLeftBottomSerifStart : -r271_Width, 2 * r271_Width), r271_dispiro(r271_corner(r317_xRightTop, r311_top, r271_widths.rhs(r311_sw)), r271_corner(r317_xLeftBottom, r311_bottom, r271_widths.lhs(r311_sw)))));
                if (r311_slab)
                    r317_currentGlyph.include(r271_HSerif.lb(r317_xLeftBottomSerifStart, r311_bottom, r271_SideJut + r271_Jut / 8));
                return void 0;
            };
        };
        var r271_xn$RevRLegShapeCurly$3DrD = function () {
            var _r320_t6;
            var _r320_t7 = arguments;
            var _r320_t0 = [].slice.call(_r320_t7, 0);
            var _r320_t1 = [];
            var _r320_t2 = 0;
            while (_r320_t2 < _r320_t0.length) {
                if (!(_r320_t0[_r320_t2] instanceof r271_xn$NamedParameterPair$2Lrc9b))
                    _r320_t1.push(_r320_t0[_r320_t2]);
                _r320_t2 = _r320_t2 + 1;
            }
            var _r320_t3 = _r320_t0;
            var _r320_t4 = _r320_t3.length;
            var _r320_t5 = 0;
            while (_r320_t5 < _r320_t4) {
                _r320_t2 = _r320_t3[_r320_t5];
                if (_r320_t2 && _r320_t2 instanceof r271_xn$NamedParameterPair$2Lrc9b && _r320_t2.left === 'top')
                    r320_top = _r320_t2.right;
                if (_r320_t2 && _r320_t2 instanceof r271_xn$NamedParameterPair$2Lrc9b && _r320_t2.left === 'bottom')
                    r320_bottom = _r320_t2.right;
                if (_r320_t2 && _r320_t2 instanceof r271_xn$NamedParameterPair$2Lrc9b && _r320_t2.left === 'left')
                    r320_left = _r320_t2.right;
                if (_r320_t2 && _r320_t2 instanceof r271_xn$NamedParameterPair$2Lrc9b && _r320_t2.left === 'right')
                    r320_right = _r320_t2.right;
                if (_r320_t2 && _r320_t2 instanceof r271_xn$NamedParameterPair$2Lrc9b && _r320_t2.left === 'charTop')
                    r320_charTop = _r320_t2.right;
                if (_r320_t2 && _r320_t2 instanceof r271_xn$NamedParameterPair$2Lrc9b && _r320_t2.left === 'slab')
                    r320_slab = _r320_t2.right;
                if (_r320_t2 && _r320_t2 instanceof r271_xn$NamedParameterPair$2Lrc9b && _r320_t2.left === 'sw')
                    r320_sw = _r320_t2.right;
                if (_r320_t2 && _r320_t2 instanceof r271_xn$NamedParameterPair$2Lrc9b && _r320_t2.left === 'extraShift')
                    r320_extraShift = _r320_t2.right;
                _r320_t5 = _r320_t5 + 1;
            }
            var r320_top = r1_fallback(r320_top, _r320_t1[0]);
            var r320_bottom = r1_fallback(r320_bottom, _r320_t1[1]);
            var r320_left = r1_fallback(r320_left, _r320_t1[2]);
            var r320_right = r1_fallback(r320_right, _r320_t1[3]);
            var r320_charTop = r1_fallback(r320_charTop, _r320_t1[4]);
            var r320_slab = r1_fallback(r320_slab, _r320_t1[5]);
            var r320_sw = r1_fallback(r320_sw, _r320_t1[6]);
            var r320_extraShift = r1_fallback(r320_extraShift, _r320_t1[7]);
            return function () {
                var _r326_t1;
                var _r326_t0 = this;
                var r326_currentGlyph = _r326_t0;
                var r326_xLeftBottom = r271_RevRLegTerminalX(r271_xn$LEGSHAPECURLY$9Jrj6, r320_left, r320_sw);
                r326_currentGlyph.include(r271_intersection(r271_Rect(r320_top, 0, -r271_Width, 2 * r271_Width), r271_dispiro(r271_widths.center(r320_sw), r271_g4.up.start(r326_xLeftBottom + 0.5 * r320_sw * r271_HVContrast, r320_bottom, r271_heading(r271_Upward)), r271_quadControls(0, 0.4, 8), r271_g4(r320_right, r320_top))));
                if (r320_slab)
                    r326_currentGlyph.include(r271_HSerif.lb(r320_left, r320_bottom, r271_SideJut + r271_Jut / 8));
                return void 0;
            };
        };
        var r271_xn$RevRLegShapeStanding$3DrD = function () {
            var _r329_t6;
            var _r329_t7 = arguments;
            var _r329_t0 = [].slice.call(_r329_t7, 0);
            var _r329_t1 = [];
            var _r329_t2 = 0;
            while (_r329_t2 < _r329_t0.length) {
                if (!(_r329_t0[_r329_t2] instanceof r271_xn$NamedParameterPair$2Lrc9b))
                    _r329_t1.push(_r329_t0[_r329_t2]);
                _r329_t2 = _r329_t2 + 1;
            }
            var _r329_t3 = _r329_t0;
            var _r329_t4 = _r329_t3.length;
            var _r329_t5 = 0;
            while (_r329_t5 < _r329_t4) {
                _r329_t2 = _r329_t3[_r329_t5];
                if (_r329_t2 && _r329_t2 instanceof r271_xn$NamedParameterPair$2Lrc9b && _r329_t2.left === 'top')
                    r329_top = _r329_t2.right;
                if (_r329_t2 && _r329_t2 instanceof r271_xn$NamedParameterPair$2Lrc9b && _r329_t2.left === 'bottom')
                    r329_bottom = _r329_t2.right;
                if (_r329_t2 && _r329_t2 instanceof r271_xn$NamedParameterPair$2Lrc9b && _r329_t2.left === 'left')
                    r329_left = _r329_t2.right;
                if (_r329_t2 && _r329_t2 instanceof r271_xn$NamedParameterPair$2Lrc9b && _r329_t2.left === 'right')
                    r329_right = _r329_t2.right;
                if (_r329_t2 && _r329_t2 instanceof r271_xn$NamedParameterPair$2Lrc9b && _r329_t2.left === 'charTop')
                    r329_charTop = _r329_t2.right;
                if (_r329_t2 && _r329_t2 instanceof r271_xn$NamedParameterPair$2Lrc9b && _r329_t2.left === 'slab')
                    r329_slab = _r329_t2.right;
                if (_r329_t2 && _r329_t2 instanceof r271_xn$NamedParameterPair$2Lrc9b && _r329_t2.left === 'sw')
                    r329_sw = _r329_t2.right;
                if (_r329_t2 && _r329_t2 instanceof r271_xn$NamedParameterPair$2Lrc9b && _r329_t2.left === 'extraShift')
                    r329_extraShift = _r329_t2.right;
                _r329_t5 = _r329_t5 + 1;
            }
            var r329_top = r1_fallback(r329_top, _r329_t1[0]);
            var r329_bottom = r1_fallback(r329_bottom, _r329_t1[1]);
            var r329_left = r1_fallback(r329_left, _r329_t1[2]);
            var r329_right = r1_fallback(r329_right, _r329_t1[3]);
            var r329_charTop = r1_fallback(r329_charTop, _r329_t1[4]);
            var r329_slab = r1_fallback(r329_slab, _r329_t1[5]);
            var r329_sw = r1_fallback(r329_sw, _r329_t1[6]);
            var r329_extraShift = r1_fallback(r329_extraShift, _r329_t1[7]);
            return function () {
                var _r335_t1;
                var _r335_t0 = this;
                var r335_currentGlyph = _r335_t0;
                var r335_fine = r271_RStandingLegFine(r329_sw);
                var r335_bend = r271_RStandingLegBend(r329_left, r329_right, r329_top, r329_bottom, r329_sw);
                var r335_ytopRef = r329_top;
                var r335_yTopStroke = r329_top - r329_sw / 2 + r335_fine;
                var r335_yOffset = r1_mix(r329_bottom, r329_top, 0.2);
                var r335_xOverflow = r271_RStandingBottomOverflow(r329_slab);
                r335_currentGlyph.include(r271_dispiro(r271_widths.lhs(r335_fine), r271_flat(r329_right, r335_yTopStroke, r271_heading(r271_Leftward)), r271_curl(r329_left + r335_bend, r335_yTopStroke, r271_heading(r271_Leftward)), r271_archv(), r271_flat(r329_left - r271_O, Math.max(r335_yOffset + 1, r335_ytopRef - r335_bend * r329_charTop / r271_CAP), r271_widths.lhs.heading(r329_sw, r271_Downward)), r271_curl(r329_left - r271_O, r335_yOffset, r271_heading(r271_Downward)), r271_curl(r329_left - r271_O + r335_xOverflow, r329_bottom, r271_heading(r271_Downward))));
                if (r329_slab)
                    r335_currentGlyph.include(r271_HSerif.lb(r329_left, r329_bottom, r271_SideJut));
                return void 0;
            };
        };
        var r271_RevRLegShapes = [
            r271_xn$RevRLegShapeCurly$3DrD,
            r271_xn$RevRLegShapeStraight$3DrD,
            r271_xn$RevRLegShapeStanding$3DrD
        ];
        var r271_RBarPos = function (r338_charTop, r338_slab) {
            var _r338_t0, _r338_t1;
            return r271_PShape.BarPos;
        };
        var r271_RLegTop = function (r339_charTop, r339_sw, r339_bp) {
            var _r339_t0, _r339_t1;
            return r339_sw / 2 + r271_PBarPosY(r339_charTop, r339_sw, r339_bp);
        };
        var r271_RShape = function () {
            var _r340_t6;
            var _r340_t7 = arguments;
            var _r340_t0 = [].slice.call(_r340_t7, 0);
            var _r340_t1 = [];
            var _r340_t2 = 0;
            while (_r340_t2 < _r340_t0.length) {
                if (!(_r340_t0[_r340_t2] instanceof r271_xn$NamedParameterPair$2Lrc9b))
                    _r340_t1.push(_r340_t0[_r340_t2]);
                _r340_t2 = _r340_t2 + 1;
            }
            var _r340_t3 = _r340_t0;
            var _r340_t4 = _r340_t3.length;
            var _r340_t5 = 0;
            while (_r340_t5 < _r340_t4) {
                _r340_t2 = _r340_t3[_r340_t5];
                if (_r340_t2 && _r340_t2 instanceof r271_xn$NamedParameterPair$2Lrc9b && _r340_t2.left === 'legShape')
                    r340_legShape = _r340_t2.right;
                if (_r340_t2 && _r340_t2 instanceof r271_xn$NamedParameterPair$2Lrc9b && _r340_t2.left === 'top')
                    r340_top = _r340_t2.right;
                if (_r340_t2 && _r340_t2 instanceof r271_xn$NamedParameterPair$2Lrc9b && _r340_t2.left === 'bp')
                    r340_bp = _r340_t2.right;
                if (_r340_t2 && _r340_t2 instanceof r271_xn$NamedParameterPair$2Lrc9b && _r340_t2.left === 'mul')
                    r340_mul = _r340_t2.right;
                if (_r340_t2 && _r340_t2 instanceof r271_xn$NamedParameterPair$2Lrc9b && _r340_t2.left === 'slab')
                    r340_slab = _r340_t2.right;
                if (_r340_t2 && _r340_t2 instanceof r271_xn$NamedParameterPair$2Lrc9b && _r340_t2.left === 'open')
                    r340_open = _r340_t2.right;
                _r340_t5 = _r340_t5 + 1;
            }
            var r340_legShape = r1_fallback(r340_legShape, _r340_t1[0]);
            var r340_top = r1_fallback(r340_top, _r340_t1[1]);
            var r340_bp = r1_fallback(r340_bp, _r340_t1[2]);
            var r340_mul = r1_fallback(r340_mul, _r340_t1[3], 1);
            var r340_slab = r1_fallback(r340_slab, _r340_t1[4], null);
            var r340_open = r1_fallback(r340_open, _r340_t1[5], false);
            return function () {
                var _r346_t1;
                var _r346_t0 = this;
                var r346_currentGlyph = _r346_t0;
                var r346_right = r271_RightSB - r271_O - (r340_slab ? r271_Jut / 8 : 0);
                r346_currentGlyph.include(r271_difference(r271_PShape(r340_top, new r271_xn$NamedParameterPair$2Lrc9b('mul', r340_mul), new r271_xn$NamedParameterPair$2Lrc9b('overshoot', r271_O), new r271_xn$NamedParameterPair$2Lrc9b('slab', r340_slab), new r271_xn$NamedParameterPair$2Lrc9b('bp', r340_bp)), r340_open ? r271_PShape.OpenGap(new r271_xn$NamedParameterPair$2Lrc9b('mul', r340_mul), new r271_xn$NamedParameterPair$2Lrc9b('bp', r340_bp), new r271_xn$NamedParameterPair$2Lrc9b('top', r340_top), new r271_xn$NamedParameterPair$2Lrc9b('bot', r271_fSlabBot ? r271_Stroke : 0)) : function () {
                    var _r357_t1;
                    var _r357_t0 = this;
                    var r357_currentGlyph = _r357_t0;
                    return void 0;
                }));
                r346_currentGlyph.include(r271_difference(r271_RLegShapes[r340_legShape](r271_RLegTop(r340_top, r271_Stroke, r340_bp), 0, r271_Middle, r346_right, r340_top, r340_slab === r271_PShape.SlabSymmetric, r271_Stroke, 0), r340_open ? r271_PShape.OpenGap(new r271_xn$NamedParameterPair$2Lrc9b('mul', r340_mul), new r271_xn$NamedParameterPair$2Lrc9b('bp', r340_bp), new r271_xn$NamedParameterPair$2Lrc9b('top', r340_top), new r271_xn$NamedParameterPair$2Lrc9b('bot', 0)) : function () {
                    var _r364_t1;
                    var _r364_t0 = this;
                    var r364_currentGlyph = _r364_t0;
                    return void 0;
                }));
                return void 0;
            };
        };
        var r271_RRotundaShape = function () {
            var _r365_t6;
            var _r365_t7 = arguments;
            var _r365_t0 = [].slice.call(_r365_t7, 0);
            var _r365_t1 = [];
            var _r365_t2 = 0;
            while (_r365_t2 < _r365_t0.length) {
                if (!(_r365_t0[_r365_t2] instanceof r271_xn$NamedParameterPair$2Lrc9b))
                    _r365_t1.push(_r365_t0[_r365_t2]);
                _r365_t2 = _r365_t2 + 1;
            }
            var _r365_t3 = _r365_t0;
            var _r365_t4 = _r365_t3.length;
            var _r365_t5 = 0;
            while (_r365_t5 < _r365_t4) {
                _r365_t2 = _r365_t3[_r365_t5];
                if (_r365_t2 && _r365_t2 instanceof r271_xn$NamedParameterPair$2Lrc9b && _r365_t2.left === 'legShape')
                    r365_legShape = _r365_t2.right;
                if (_r365_t2 && _r365_t2 instanceof r271_xn$NamedParameterPair$2Lrc9b && _r365_t2.left === 'top')
                    r365_top = _r365_t2.right;
                if (_r365_t2 && _r365_t2 instanceof r271_xn$NamedParameterPair$2Lrc9b && _r365_t2.left === 'mul')
                    r365_mul = _r365_t2.right;
                if (_r365_t2 && _r365_t2 instanceof r271_xn$NamedParameterPair$2Lrc9b && _r365_t2.left === 'pmRotunda')
                    r365_pmRotunda = _r365_t2.right;
                if (_r365_t2 && _r365_t2 instanceof r271_xn$NamedParameterPair$2Lrc9b && _r365_t2.left === 'endX')
                    r365_endX = _r365_t2.right;
                if (_r365_t2 && _r365_t2 instanceof r271_xn$NamedParameterPair$2Lrc9b && _r365_t2.left === 'hook')
                    r365_hook = _r365_t2.right;
                if (_r365_t2 && _r365_t2 instanceof r271_xn$NamedParameterPair$2Lrc9b && _r365_t2.left === 'pBar')
                    r365_pBar = _r365_t2.right;
                if (_r365_t2 && _r365_t2 instanceof r271_xn$NamedParameterPair$2Lrc9b && _r365_t2.left === 'slab')
                    r365_slab = _r365_t2.right;
                _r365_t5 = _r365_t5 + 1;
            }
            var r365_legShape = r1_fallback(r365_legShape, _r365_t1[0]);
            var r365_top = r1_fallback(r365_top, _r365_t1[1]);
            var r365_mul = r1_fallback(r365_mul, _r365_t1[2], 1);
            var r365_pmRotunda = r1_fallback(r365_pmRotunda, _r365_t1[3], 0);
            var r365_endX = r1_fallback(r365_endX, _r365_t1[4], r271_Middle);
            var r365_hook = r1_fallback(r365_hook, _r365_t1[5], r271_Hook);
            var r365_pBar = r1_fallback(r365_pBar, _r365_t1[6], 1);
            var r365_slab = r1_fallback(r365_slab, _r365_t1[7], null);
            return function () {
                var _r371_t1;
                var _r371_t0 = this;
                var r371_currentGlyph = _r371_t0;
                var r371_bp = r365_pBar * r271_RBarPos(r365_top, false);
                var r371_legTop = r271_RLegTop(r365_top, r271_Stroke, r371_bp);
                var r371_right = r271_RightSB - r271_O - (r365_slab ? r271_Jut / 8 : 0);
                var r371_cor = r271_RLegDiagCor(r371_legTop, 0, r365_endX, r371_right, 0, r271_Stroke);
                var r371_endX1 = r365_endX - (r365_legShape ? r271_HalfStroke * r371_cor * r271_HVContrast : r271_HalfStroke) + (r365_legShape ? r271_RSlabExtraShift(r271_SLAB, r271_Stroke) : 0);
                r371_currentGlyph.include(r271_PRotundaShape(r365_top, new r271_xn$NamedParameterPair$2Lrc9b('mul', r365_mul), new r271_xn$NamedParameterPair$2Lrc9b('bp', r371_bp), new r271_xn$NamedParameterPair$2Lrc9b('overshoot', r271_O), new r271_xn$NamedParameterPair$2Lrc9b('slab', false), new r271_xn$NamedParameterPair$2Lrc9b('endX', r371_endX1), new r271_xn$NamedParameterPair$2Lrc9b('hook', r365_hook)));
                r371_currentGlyph.include(r271_difference(r271_RLegShapes[r365_legShape](r371_legTop, 0, r365_endX, r371_right, r365_top, r365_slab === r271_PShape.SlabSymmetric, r271_Stroke, 0), r271_MaskLeft(r371_endX1)));
                return void 0;
            };
        };
        var r271_RevRShape = function () {
            var _r380_t6;
            var _r380_t7 = arguments;
            var _r380_t0 = [].slice.call(_r380_t7, 0);
            var _r380_t1 = [];
            var _r380_t2 = 0;
            while (_r380_t2 < _r380_t0.length) {
                if (!(_r380_t0[_r380_t2] instanceof r271_xn$NamedParameterPair$2Lrc9b))
                    _r380_t1.push(_r380_t0[_r380_t2]);
                _r380_t2 = _r380_t2 + 1;
            }
            var _r380_t3 = _r380_t0;
            var _r380_t4 = _r380_t3.length;
            var _r380_t5 = 0;
            while (_r380_t5 < _r380_t4) {
                _r380_t2 = _r380_t3[_r380_t5];
                if (_r380_t2 && _r380_t2 instanceof r271_xn$NamedParameterPair$2Lrc9b && _r380_t2.left === 'legShape')
                    r380_legShape = _r380_t2.right;
                if (_r380_t2 && _r380_t2 instanceof r271_xn$NamedParameterPair$2Lrc9b && _r380_t2.left === 'top')
                    r380_top = _r380_t2.right;
                if (_r380_t2 && _r380_t2 instanceof r271_xn$NamedParameterPair$2Lrc9b && _r380_t2.left === 'bp')
                    r380_bp = _r380_t2.right;
                if (_r380_t2 && _r380_t2 instanceof r271_xn$NamedParameterPair$2Lrc9b && _r380_t2.left === 'slab')
                    r380_slab = _r380_t2.right;
                if (_r380_t2 && _r380_t2 instanceof r271_xn$NamedParameterPair$2Lrc9b && _r380_t2.left === 'mul')
                    r380_mul = _r380_t2.right;
                if (_r380_t2 && _r380_t2 instanceof r271_xn$NamedParameterPair$2Lrc9b && _r380_t2.left === 'tailedShape')
                    r380_tailedShape = _r380_t2.right;
                if (_r380_t2 && _r380_t2 instanceof r271_xn$NamedParameterPair$2Lrc9b && _r380_t2.left === 'open')
                    r380_open = _r380_t2.right;
                _r380_t5 = _r380_t5 + 1;
            }
            var r380_legShape = r1_fallback(r380_legShape, _r380_t1[0]);
            var r380_top = r1_fallback(r380_top, _r380_t1[1]);
            var r380_bp = r1_fallback(r380_bp, _r380_t1[2]);
            var r380_slab = r1_fallback(r380_slab, _r380_t1[3], null);
            var r380_mul = r1_fallback(r380_mul, _r380_t1[4], 1);
            var r380_tailedShape = r1_fallback(r380_tailedShape, _r380_t1[5], false);
            var r380_open = r1_fallback(r380_open, _r380_t1[6], false);
            return function () {
                var _r386_t1;
                var _r386_t0 = this;
                var r386_currentGlyph = _r386_t0;
                var r386_left = r271_SB + r271_O + (r380_slab ? r271_Jut / 8 : 0);
                r386_currentGlyph.include(r271_difference(r271_RevPShape(r380_top, new r271_xn$NamedParameterPair$2Lrc9b('mul', r380_mul), new r271_xn$NamedParameterPair$2Lrc9b('overshoot', r271_O), new r271_xn$NamedParameterPair$2Lrc9b('slab', r380_slab), new r271_xn$NamedParameterPair$2Lrc9b('bp', r380_bp)), r380_open ? r271_RevPShape.OpenGap(new r271_xn$NamedParameterPair$2Lrc9b('mul', r380_mul), new r271_xn$NamedParameterPair$2Lrc9b('bp', r380_bp), new r271_xn$NamedParameterPair$2Lrc9b('top', r380_top), new r271_xn$NamedParameterPair$2Lrc9b('bot', r271_fSlabBot ? r271_Stroke : 0)) : function () {
                    var _r397_t1;
                    var _r397_t0 = this;
                    var r397_currentGlyph = _r397_t0;
                    return void 0;
                }));
                r386_currentGlyph.include(r271_difference(r271_RevRLegShapes[r380_legShape](r271_RLegTop(r380_top, r271_Stroke, r380_bp), 0, r386_left, r271_Middle, r380_top, !!r380_slab, r271_Stroke, 0), r380_open ? r271_RevPShape.OpenGap(new r271_xn$NamedParameterPair$2Lrc9b('mul', r380_mul), new r271_xn$NamedParameterPair$2Lrc9b('bp', r380_bp), new r271_xn$NamedParameterPair$2Lrc9b('top', r380_top), new r271_xn$NamedParameterPair$2Lrc9b('bot', 0)) : function () {
                    var _r404_t1;
                    var _r404_t0 = this;
                    var r404_currentGlyph = _r404_t0;
                    return void 0;
                }));
                if (r380_tailedShape) {
                    r386_currentGlyph.ejectTagged('strokeR');
                    r386_currentGlyph.ejectTagged('serifRB');
                    r386_currentGlyph.include(r271_tagged('strokeR', r271_RightwardTailedBar(r271_Width - r271_SB * r380_mul, 0, r380_top)));
                }
                return void 0;
            };
        };
        var r271_StrikeAnchor = function () {
            var _r408_t0, _r408_t1;
            return function () {
                var _r410_t1;
                var _r410_t0 = this;
                var r410_currentGlyph = _r410_t0;
                r410_currentGlyph.setBaseAnchor('strike', r271_Middle, r1_mix(r271_PBarPosY(r271_CAP, r271_Stroke, r271_RBarPos(r271_CAP, r271_SLAB)), r271_CAP, 0.5));
                return void 0;
            };
        };
        var r271_RConfig = r1_SuffixCfg.weave({
            'straight': r271_xn$LEGSHAPESTRAIGHT$9Jrj6,
            'curly': r271_xn$LEGSHAPECURLY$9Jrj6,
            'standing': r271_xn$LEGSHAPESTANDING$9Jrj6
        }, {
            '': false,
            'open': true
        }, {
            '': false,
            'tailed': true
        }, {
            'serifless': [
                null,
                null
            ],
            'motionSerifed': [
                r271_PShape.SlabMotion,
                r271_RevPShape.SlabMotion
            ],
            'serifed': [
                r271_PShape.SlabSymmetric,
                r271_RevPShape.SlabSymmetric
            ],
            'smallCyrl': [
                r271_PShape.SlabMotion,
                r271_para.isItalic ? r271_RevPShape.SlabCyrlItalic : r271_RevPShape.SlabSymmetric
            ]
        });
        var _r271_t9 = Object.entries(r271_RConfig)[Symbol.iterator]();
        var _r271_t10 = void 0;
        while (!(_r271_t10 = _r271_t9.next()).done) {
            _r271_t11 = _r271_t10.value;
            r271_suffix = _r271_t11[0];
            r271_legShape = _r271_t11[1][0];
            r271_fOpen = _r271_t11[1][1];
            r271_fTailed = _r271_t11[1][2];
            r271_slabs = _r271_t11[1][3][0];
            r271_revSlabs = _r271_t11[1][3][1];
            _r271_t11[1][3];
            _r271_t11[1];
            r271_fMotion = r271_slabs === r271_PShape.SlabMotion;
            r271_fSlabBot = r271_slabs && r271_slabs !== r271_PShape.SlabMotion;
            r271_bpCap = r271_RBarPos(r271_CAP, r271_fSlabBot);
            r271_bpXH = r271_RBarPos(r271_XH, r271_fSlabBot);
            r271_xn$createAndSaveGlyphImpl$2Lrc3c('R.' + r271_suffix, null, function () {
                var _r415_t1;
                var _r415_t0 = this;
                var r415_currentGlyph = _r415_t0;
                r415_currentGlyph.include(r271_MarkSet.capital());
                r415_currentGlyph.include(r271_StrikeAnchor());
                r415_currentGlyph.include(r271_RShape(r271_legShape, r271_CAP, new r271_xn$NamedParameterPair$2Lrc9b('slab', r271_slabs), new r271_xn$NamedParameterPair$2Lrc9b('bp', r271_bpCap), new r271_xn$NamedParameterPair$2Lrc9b('open', r271_fOpen)));
                return void 0;
            });
            r271_xn$createAndSaveGlyphImpl$2Lrc3c('smcpR.' + r271_suffix, null, function () {
                var _r424_t1;
                var _r424_t0 = this;
                var r424_currentGlyph = _r424_t0;
                r424_currentGlyph.include(r271_MarkSet.e());
                r424_currentGlyph.include(r271_StrikeAnchor());
                r424_currentGlyph.include(r271_RShape(r271_legShape, r271_XH, new r271_xn$NamedParameterPair$2Lrc9b('slab', r271_slabs), new r271_xn$NamedParameterPair$2Lrc9b('bp', r271_bpXH), new r271_xn$NamedParameterPair$2Lrc9b('open', r271_fOpen)));
                return void 0;
            });
            if (!r271_fMotion && !r271_fOpen)
                r271_xn$createAndSaveGlyphImpl$2Lrc3c('RRotunda.' + r271_suffix, null, function () {
                    var _r433_t1;
                    var _r433_t0 = this;
                    var r433_currentGlyph = _r433_t0;
                    r433_currentGlyph.include(r271_MarkSet.capital());
                    r433_currentGlyph.include(r271_RRotundaShape(r271_legShape, r271_CAP, new r271_xn$NamedParameterPair$2Lrc9b('hook', r271_Hook), new r271_xn$NamedParameterPair$2Lrc9b('pBar', 0.9), new r271_xn$NamedParameterPair$2Lrc9b('slab', r271_slabs)));
                    return void 0;
                });
            if (!r271_fMotion && !r271_fOpen)
                r271_xn$createAndSaveGlyphImpl$2Lrc3c('rRotunda.' + r271_suffix, null, function () {
                    var _r441_t1;
                    var _r441_t0 = this;
                    var r441_currentGlyph = _r441_t0;
                    r441_currentGlyph.include(r271_MarkSet.e());
                    r441_currentGlyph.include(r271_RRotundaShape(r271_legShape, r271_XH, new r271_xn$NamedParameterPair$2Lrc9b('hook', r271_AHook), new r271_xn$NamedParameterPair$2Lrc9b('pBar', 0.9), new r271_xn$NamedParameterPair$2Lrc9b('slab', r271_slabs)));
                    return void 0;
                });
            r271_xn$createAndSaveGlyphImpl$2Lrc3c('cyrl/Ya.' + r271_suffix, null, function () {
                var _r449_t1;
                var _r449_t0 = this;
                var r449_currentGlyph = _r449_t0;
                r449_currentGlyph.include(r271_MarkSet.capital());
                r449_currentGlyph.include(r271_StrikeAnchor());
                r449_currentGlyph.include(r271_RevRShape(r271_legShape, r271_CAP, new r271_xn$NamedParameterPair$2Lrc9b('slab', r271_revSlabs), new r271_xn$NamedParameterPair$2Lrc9b('bp', r271_bpCap), new r271_xn$NamedParameterPair$2Lrc9b('open', r271_fOpen)));
                return void 0;
            });
            r271_xn$createAndSaveGlyphImpl$2Lrc3c('cyrl/ya.' + r271_suffix, null, function () {
                var _r458_t1;
                var _r458_t0 = this;
                var r458_currentGlyph = _r458_t0;
                r458_currentGlyph.include(r271_MarkSet.e());
                r458_currentGlyph.include(r271_StrikeAnchor());
                r458_currentGlyph.include(r271_RevRShape(r271_legShape, r271_XH, new r271_xn$NamedParameterPair$2Lrc9b('slab', r271_revSlabs), new r271_xn$NamedParameterPair$2Lrc9b('bp', r271_bpXH), new r271_xn$NamedParameterPair$2Lrc9b('tailedShape', r271_fTailed), new r271_xn$NamedParameterPair$2Lrc9b('open', r271_fOpen)));
                return void 0;
            });
            r271_xn$createAndSaveGlyphImpl$2Lrc3c('Yr.' + r271_suffix, null, function () {
                var _r468_t1;
                var _r468_t0 = this;
                var r468_currentGlyph = _r468_t0;
                r468_currentGlyph.include(r271_MarkSet.capDesc());
                var r468_top = r271_CAP * 0.85;
                var r468_bp = 0.45;
                var r468_legTop = r271_RLegTop(r468_top, r271_Stroke, r468_bp);
                var r468_right = r271_RightSB - r271_O - (r271_SLAB ? r271_Jut / 8 : 0);
                r468_currentGlyph.include(r271_VBar.l(r271_SB, r468_top - 1, r271_CAP));
                r468_currentGlyph.include(r271_difference(r271_PShape(r468_top, new r271_xn$NamedParameterPair$2Lrc9b('mul', 1), new r271_xn$NamedParameterPair$2Lrc9b('bp', r468_bp), new r271_xn$NamedParameterPair$2Lrc9b('slab', r271_slabs)), r271_fOpen ? r271_PShape.OpenGap(new r271_xn$NamedParameterPair$2Lrc9b('mul', 1), new r271_xn$NamedParameterPair$2Lrc9b('bp', r468_bp), new r271_xn$NamedParameterPair$2Lrc9b('top', r468_top), new r271_xn$NamedParameterPair$2Lrc9b('bot', r271_fSlabBot ? r271_Stroke : 0)) : function () {
                    var _r480_t1;
                    var _r480_t0 = this;
                    var r480_currentGlyph = _r480_t0;
                    return void 0;
                }));
                r468_currentGlyph.include(r271_difference(r271_RLegShapes[r271_legShape](r468_legTop, r271_Descender, r271_Middle, r468_right, r468_top - r271_Descender, r271_slabs === r271_PShape.SlabSymmetric, r271_Stroke, 0), r271_fOpen ? r271_PShape.OpenGap(new r271_xn$NamedParameterPair$2Lrc9b('mul', 1), new r271_xn$NamedParameterPair$2Lrc9b('bp', r468_bp), new r271_xn$NamedParameterPair$2Lrc9b('top', r468_top), new r271_xn$NamedParameterPair$2Lrc9b('bot', 0)) : function () {
                    var _r487_t1;
                    var _r487_t0 = this;
                    var r487_currentGlyph = _r487_t0;
                    return void 0;
                }));
                return void 0;
            });
            r271_xn$createAndSaveGlyphImpl$2Lrc3c('currency/indianRupeeSign.' + r271_suffix, null, function () {
                var _r490_t1;
                var _r490_t0 = this;
                var r490_currentGlyph = _r490_t0;
                var r490_bp = r271_RBarPos(r271_CAP, 0);
                r490_currentGlyph.include(r271_intersection(r271_Rect(r271_CAP, 0, r271_SB, r271_Width), r271_WithTransform(r271_Translate(-r271_Width / 8, 0), r271_PShape(r271_CAP, new r271_xn$NamedParameterPair$2Lrc9b('bp', r490_bp), new r271_xn$NamedParameterPair$2Lrc9b('withBar', false)))));
                var r490_right = r271_RightSB - r271_O - (r271_legShape ? 0 : r271_Width / 16);
                r490_currentGlyph.include(r271_RLegShapes[r271_legShape](r271_RLegTop(r271_CAP, r271_Stroke, r490_bp), 0, r271_Width * 0.375, r490_right, r271_CAP, r271_slabs === r271_PShape.SlabSymmetric, r271_Stroke, 0));
                var r490_sw = r271_AdviceStroke2(2, 4, r271_CAP);
                r490_currentGlyph.include(r271_HBar.t(r271_SB, r271_RightSB, r271_CAP, r490_sw));
                r490_currentGlyph.include(r271_HBar.m(r271_SB, r271_RightSB, r1_mix(r271_CAP, r271_PBarPosY(r271_CAP, r271_Stroke, r490_bp), 0.5), r490_sw));
                return void 0;
            });
        }
        r271_xn$selectvariant$7Hrq('R', 'R');
        r271_xn$linkreducedvariant$5sIl8('R/sansSerif', 'R', r1_MathSansSerif);
        r271_xn$selectvariant$7Hrq('smcpR', 640, new r271_xn$NamedParameterPair$2Lrc9b('follow', 'R'));
        r271_turned('turnSmapR', 7450, 'smcpR', r271_Middle, r271_XH / 2);
        r271_xn$selectvariant$7Hrq('RRotunda', 42842);
        r271_xn$selectvariant$7Hrq('rRotunda', 42843, new r271_xn$NamedParameterPair$2Lrc9b('follow', 'RRotunda'));
        r271_xn$selectvariant$7Hrq('cyrl/Ya', 1071);
        r271_xn$selectvariant$7Hrq('cyrl/ya', 1103);
        r271_xn$selectvariant$7Hrq('revSmcpR', 7449, new r271_xn$NamedParameterPair$2Lrc9b('shapeFrom', 'cyrl/ya'), new r271_xn$NamedParameterPair$2Lrc9b('follow', 'R'));
        r271_turned('invSmcpR', 641, 'revSmcpR', r271_Middle, r271_XH / 2);
        r271_xn$selectvariant$7Hrq('Yr', 422, new r271_xn$NamedParameterPair$2Lrc9b('follow', 'R'));
        r271_xn$selectvariant$7Hrq('currency/indianRupeeSign', 8377, new r271_xn$NamedParameterPair$2Lrc9b('follow', 'RRotunda'));
        r271_xn$deriveglyphs$7Hrq('RBar', 588, 'R', function (r503_src, r503_gr) {
            var _r503_t0, _r503_t1;
            return function () {
                var _r505_t1;
                var _r505_t0 = this;
                var r505_currentGlyph = _r505_t0;
                r505_currentGlyph.include(r271_xn$referglyph$1aao(r503_src), r271_AS_BASE, r271_ALSO_METRICS);
                r505_currentGlyph.include(r271_HBar.m(r1_mix(0, r271_SB, 0.3), r271_SB - r271_O, (r271_CAP - r271_Stroke) * r271_RBarPos(r271_CAP, r271_SLAB) + r271_Stroke * 0.25));
                return void 0;
            };
        });
        r271_xn$deriveglyphs$7Hrq('RRTail', 11364, 'R', function (r508_src, r508_gr) {
            var _r508_t0, _r508_t1;
            return function () {
                var _r510_t1;
                var _r510_t0 = this;
                var r510_currentGlyph = _r510_t0;
                r510_currentGlyph.include(r271_xn$referglyph$1aao(r508_src), r271_AS_BASE, r271_ALSO_METRICS);
                r510_currentGlyph.ejectTagged('serifLB');
                r510_currentGlyph.include(r271_RetroflexHook.lExt(r271_SB, 0));
                return void 0;
            };
        });
        return r271_xn$createAndSaveGlyphImpl$2Lrc3c('mathbb/R', 8477, function () {
            var _r516_t1;
            var _r516_t0 = this;
            var r516_currentGlyph = _r516_t0;
            var r516_SingleLeg = function () {
                var _r517_t0, _r517_t1;
                return r271_xn$RLegShapeStraight$5Frx((r271_CAP - r271_BBS) * r271_HBarPos, 0, r271_Middle, r271_RightSB - r271_O, r271_CAP, false, r271_BBS, r271_BBD / 2);
            };
            var r516_terminalX = r271_RLegTerminalX(r271_xn$LEGSHAPESTRAIGHT$9Jrj6, r271_RightSB - r271_O, r271_BBS);
            r516_currentGlyph.include(r271_MarkSet.capital());
            r516_currentGlyph.include(r271_BBPShape(new r271_xn$NamedParameterPair$2Lrc9b('mul', 1), new r271_xn$NamedParameterPair$2Lrc9b('overshoot', r271_O)));
            r516_currentGlyph.include(r271_difference(r271_union(r516_SingleLeg(), r271_WithTransform(r271_ApparentTranslate(-r271_BBD, 0), r516_SingleLeg()), r271_HBar.b(r516_terminalX - r271_BBD - r271_BBS * r271_HVContrast, r516_terminalX - r271_BBS * r271_HVContrast, 0, r271_BBS)), r271_PShapeOutline(r271_CAP, new r271_xn$NamedParameterPair$2Lrc9b('sw', r271_BBS), new r271_xn$NamedParameterPair$2Lrc9b('mul', 1), new r271_xn$NamedParameterPair$2Lrc9b('overshoot', r271_O), new r271_xn$NamedParameterPair$2Lrc9b('offset', 1)), r271_MaskLeft(r271_SB + r271_BBD)));
            return void 0;
        });
    });
    return void 0;
});
