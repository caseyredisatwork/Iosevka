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
    r270_xn$Capture_Ext$2Lrc2b['$defineGlyphBlockImpl$'](r270_xn$Capture_Ext$2Lrc2b, 'Letter-Latin-U', function (r271_xn$Capture$2Lrc8, r271_xn$ExportCapture$2Lrc4b) {
        var r271_suffix, r271_Base, r271_Slabs, r271_fLTSlab, _r271_t13, _r271_t16, _r271_t18, _r271_t19, _r271_t20, _r271_tag21, _r271_t22, _r271_tag23;
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
        var r271_DivFrame = _r271_t0.DivFrame;
        var _r271_t1 = r271_xn$Capture$2Lrc8.Metrics;
        var r271_Width = _r271_t1.Width;
        var r271_SB = _r271_t1.SB;
        var r271_CAP = _r271_t1.CAP;
        var r271_XH = _r271_t1.XH;
        var r271_Descender = _r271_t1.Descender;
        var r271_Translate = _r271_t1.Translate;
        var r271_HVContrast = _r271_t1.HVContrast;
        var r271_Upward = _r271_t1.Upward;
        var r271_Downward = _r271_t1.Downward;
        var r271_O = _r271_t1.O;
        var r271_Hook = _r271_t1.Hook;
        var r271_Stroke = _r271_t1.Stroke;
        var r271_AccentHeight = _r271_t1.AccentHeight;
        var r271_SLAB = _r271_t1.SLAB;
        var r271_HalfStroke = _r271_t1.HalfStroke;
        var r271_RightSB = _r271_t1.RightSB;
        var r271_Middle = _r271_t1.Middle;
        var r271_SideJut = _r271_t1.SideJut;
        var r271_ArchDepthA = _r271_t1.ArchDepthA;
        var r271_ArchDepthB = _r271_t1.ArchDepthB;
        var r271_SmallArchDepthA = _r271_t1.SmallArchDepthA;
        var r271_SmallArchDepthB = _r271_t1.SmallArchDepthB;
        var r271_CorrectionOMidX = _r271_t1.CorrectionOMidX;
        var r271_CorrectionOMidS = _r271_t1.CorrectionOMidS;
        var r271_AdviceStroke = _r271_t1.AdviceStroke;
        var r271_ShoulderFine = _r271_t1.ShoulderFine;
        var _r271_t2 = r271_xn$Capture$2Lrc8.SpiroFns;
        var r271_g4 = _r271_t2.g4;
        var r271_corner = _r271_t2.corner;
        var r271_flat = _r271_t2.flat;
        var r271_curl = _r271_t2.curl;
        var r271_end = _r271_t2.end;
        var r271_straight = _r271_t2.straight;
        var r271_widths = _r271_t2.widths;
        var r271_heading = _r271_t2.heading;
        var r271_archv = _r271_t2.archv;
        var r271_arcvh = _r271_t2.arcvh;
        var r271_dispiro = _r271_t2.dispiro;
        var r271_xn$spirooutline$1aao = _r271_t2['spiro-outline'];
        var _r271_t3 = r271_xn$Capture$2Lrc8.BooleFns;
        var r271_intersection = _r271_t3.intersection;
        var r271_difference = _r271_t3.difference;
        var _r271_t4 = r271_xn$Capture$2Lrc8.CommonShapes.resolve();
        var r271_xn$noshape$3cah = _r271_t4['no-shape'];
        var r271_HSerif = _r271_t4.HSerif;
        var r271_HBar = _r271_t4.HBar;
        var r271_VBar = _r271_t4.VBar;
        var r271_FlipAround = _r271_t4.FlipAround;
        var r271_PointingTo = _r271_t4.PointingTo;
        var _r271_t5 = r271_xn$Capture$2Lrc8['Common-Derivatives'].resolve();
        var r271_xn$selectvariant$7Hrq = _r271_t5['select-variant'];
        var r271_xn$referglyph$1aao = _r271_t5['refer-glyph'];
        var r271_alias = _r271_t5.alias;
        var r271_xn$deriveglyphs$7Hrq = _r271_t5['derive-glyphs'];
        var r271_xn$derivecomposites$7Hrq = _r271_t5['derive-composites'];
        var r271_xn$linkreducedvariant$5sIl8 = _r271_t5['link-reduced-variant'];
        var _r271_t6 = r271_xn$Capture$2Lrc8['Mark-Shared-Metrics'].resolve();
        var r271_markHalfStroke = _r271_t6.markHalfStroke;
        var _r271_t7 = r271_xn$Capture$2Lrc8['Letter-Shared'].resolve();
        var r271_CreateAccentedComposition = _r271_t7.CreateAccentedComposition;
        var r271_CreateOgonekComposition = _r271_t7.CreateOgonekComposition;
        var _r271_t8 = r271_xn$Capture$2Lrc8['Letter-Shared'].resolve();
        var r271_SetGrekUpperTonos = _r271_t8.SetGrekUpperTonos;
        var _r271_t9 = r271_xn$Capture$2Lrc8['Letter-Shared-Shapes'].resolve();
        var r271_nShoulder = _r271_t9.nShoulder;
        var r271_RightwardTailedBar = _r271_t9.RightwardTailedBar;
        var r271_DToothlessRise = _r271_t9.DToothlessRise;
        var r271_SerifFrame = _r271_t9.SerifFrame;
        var _r271_t10 = r271_xn$Capture$2Lrc8['Letter-Shared-Shapes'].resolve();
        var r271_CyrTailDescender = _r271_t10.CyrTailDescender;
        var r271_RetroflexHook = _r271_t10.RetroflexHook;
        var r271_VerticalHook = _r271_t10.VerticalHook;
        r271_xn$ExportCapture$2Lrc4b(function () {
            var _r280_t0, _r280_t1;
            return { 'UShape': r271_UShape };
        });
        var r271_UArcT = function () {
            var _r281_t6;
            var _r281_t7 = arguments;
            var _r281_t0 = [].slice.call(_r281_t7, 0);
            var _r281_t1 = [];
            var _r281_t2 = 0;
            while (_r281_t2 < _r281_t0.length) {
                if (!(_r281_t0[_r281_t2] instanceof r271_xn$NamedParameterPair$2Lrc9b))
                    _r281_t1.push(_r281_t0[_r281_t2]);
                _r281_t2 = _r281_t2 + 1;
            }
            var _r281_t3 = _r281_t0;
            var _r281_t4 = _r281_t3.length;
            var _r281_t5 = 0;
            while (_r281_t5 < _r281_t4) {
                _r281_t2 = _r281_t3[_r281_t5];
                if (_r281_t2 && _r281_t2 instanceof r271_xn$NamedParameterPair$2Lrc9b && _r281_t2.left === 'sink')
                    r281_sink = _r281_t2.right;
                if (_r281_t2 && _r281_t2 instanceof r271_xn$NamedParameterPair$2Lrc9b && _r281_t2.left === 'df')
                    r281_df = _r281_t2.right;
                if (_r281_t2 && _r281_t2 instanceof r271_xn$NamedParameterPair$2Lrc9b && _r281_t2.left === 'top')
                    r281_top = _r281_t2.right;
                if (_r281_t2 && _r281_t2 instanceof r271_xn$NamedParameterPair$2Lrc9b && _r281_t2.left === 'bottom')
                    r281_bottom = _r281_t2.right;
                if (_r281_t2 && _r281_t2 instanceof r271_xn$NamedParameterPair$2Lrc9b && _r281_t2.left === 'stroke')
                    r281_stroke = _r281_t2.right;
                if (_r281_t2 && _r281_t2 instanceof r271_xn$NamedParameterPair$2Lrc9b && _r281_t2.left === 'ada')
                    r281_ada = _r281_t2.right;
                if (_r281_t2 && _r281_t2 instanceof r271_xn$NamedParameterPair$2Lrc9b && _r281_t2.left === 'adb')
                    r281_adb = _r281_t2.right;
                if (_r281_t2 && _r281_t2 instanceof r271_xn$NamedParameterPair$2Lrc9b && _r281_t2.left === 'offset')
                    r281_offset = _r281_t2.right;
                _r281_t5 = _r281_t5 + 1;
            }
            var r281_sink = r1_fallback(r281_sink, _r281_t1[0]);
            var r281_df = r1_fallback(r281_df, _r281_t1[1]);
            var r281_top = r1_fallback(r281_top, _r281_t1[2]);
            var r281_bottom = r1_fallback(r281_bottom, _r281_t1[3]);
            var r281_stroke = r1_fallback(r281_stroke, _r281_t1[4], r271_Stroke);
            var r281_ada = r1_fallback(r281_ada, _r281_t1[5], r271_ArchDepthA);
            var r281_adb = r1_fallback(r281_adb, _r281_t1[6], r271_ArchDepthB);
            var r281_offset = r1_fallback(r281_offset, _r281_t1[7], 0);
            return r281_sink(r271_widths.lhs(r281_stroke), (r281_sink === r271_xn$spirooutline$1aao ? r271_corner : r271_flat)(r281_df.leftSB + r281_offset, r281_top, r271_heading(r271_Downward)), r271_curl(r281_df.leftSB + r281_offset, r281_bottom + r281_adb + r281_offset), r271_arcvh(), r271_g4(r281_df.middle + r271_CorrectionOMidX * r281_stroke, r281_bottom + r271_O + r281_offset), r271_archv(), r271_flat(r281_df.rightSB - r281_offset, r281_bottom + r281_ada + r281_offset), (r281_sink === r271_xn$spirooutline$1aao ? r271_corner : r271_curl)(r281_df.rightSB - r281_offset, r281_top, r271_heading(r271_Upward)));
        };
        var r271_UShape = function () {
            var _r286_t6;
            var _r286_t7 = arguments;
            var _r286_t0 = [].slice.call(_r286_t7, 0);
            var _r286_t1 = [];
            var _r286_t2 = 0;
            while (_r286_t2 < _r286_t0.length) {
                if (!(_r286_t0[_r286_t2] instanceof r271_xn$NamedParameterPair$2Lrc9b))
                    _r286_t1.push(_r286_t0[_r286_t2]);
                _r286_t2 = _r286_t2 + 1;
            }
            var _r286_t3 = _r286_t0;
            var _r286_t4 = _r286_t3.length;
            var _r286_t5 = 0;
            while (_r286_t5 < _r286_t4) {
                _r286_t2 = _r286_t3[_r286_t5];
                if (_r286_t2 && _r286_t2 instanceof r271_xn$NamedParameterPair$2Lrc9b && _r286_t2.left === 'df')
                    r286_df = _r286_t2.right;
                if (_r286_t2 && _r286_t2 instanceof r271_xn$NamedParameterPair$2Lrc9b && _r286_t2.left === 'top')
                    r286_top = _r286_t2.right;
                if (_r286_t2 && _r286_t2 instanceof r271_xn$NamedParameterPair$2Lrc9b && _r286_t2.left === 'bottom')
                    r286_bottom = _r286_t2.right;
                if (_r286_t2 && _r286_t2 instanceof r271_xn$NamedParameterPair$2Lrc9b && _r286_t2.left === 'stroke')
                    r286_stroke = _r286_t2.right;
                if (_r286_t2 && _r286_t2 instanceof r271_xn$NamedParameterPair$2Lrc9b && _r286_t2.left === 'ada')
                    r286_ada = _r286_t2.right;
                if (_r286_t2 && _r286_t2 instanceof r271_xn$NamedParameterPair$2Lrc9b && _r286_t2.left === 'adb')
                    r286_adb = _r286_t2.right;
                if (_r286_t2 && _r286_t2 instanceof r271_xn$NamedParameterPair$2Lrc9b && _r286_t2.left === 'offset')
                    r286_offset = _r286_t2.right;
                _r286_t5 = _r286_t5 + 1;
            }
            var r286_df = r1_fallback(r286_df, _r286_t1[0]);
            var r286_top = r1_fallback(r286_top, _r286_t1[1]);
            var r286_bottom = r1_fallback(r286_bottom, _r286_t1[2]);
            var r286_stroke = r1_fallback(r286_stroke, _r286_t1[3], r271_Stroke);
            var r286_ada = r1_fallback(r286_ada, _r286_t1[4], r271_ArchDepthA);
            var r286_adb = r1_fallback(r286_adb, _r286_t1[5], r271_ArchDepthB);
            var r286_offset = r1_fallback(r286_offset, _r286_t1[6], 0);
            return function () {
                var _r292_t1;
                var _r292_t0 = this;
                var r292_currentGlyph = _r292_t0;
                r292_currentGlyph.include(r271_UArcT(r271_dispiro, new r271_xn$NamedParameterPair$2Lrc9b('df', r286_df), new r271_xn$NamedParameterPair$2Lrc9b('top', r286_top), new r271_xn$NamedParameterPair$2Lrc9b('bottom', r286_bottom), new r271_xn$NamedParameterPair$2Lrc9b('stroke', r286_stroke), new r271_xn$NamedParameterPair$2Lrc9b('ada', r286_ada), new r271_xn$NamedParameterPair$2Lrc9b('adb', r286_adb), new r271_xn$NamedParameterPair$2Lrc9b('offset', r286_offset)));
                return void 0;
            };
        };
        var r271_UToothed = function (r301_df, r301_top) {
            var _r301_t0, _r301_t1;
            return function () {
                var _r303_t1;
                var _r303_t0 = this;
                var r303_currentGlyph = _r303_t0;
                r303_currentGlyph.setBaseAnchor('trailing', r301_df.rightSB, 0);
                r303_currentGlyph.include(r271_nShoulder(new r271_xn$NamedParameterPair$2Lrc9b('top', r301_top), new r271_xn$NamedParameterPair$2Lrc9b('left', r301_df.leftSB + r271_Stroke * r271_HVContrast), new r271_xn$NamedParameterPair$2Lrc9b('right', r301_df.rightSB), new r271_xn$NamedParameterPair$2Lrc9b('fine', r271_ShoulderFine)));
                r303_currentGlyph.include(r271_FlipAround(r301_df.middle, r301_top / 2));
                r303_currentGlyph.include(r271_VBar.r(r301_df.rightSB, 0, r301_top));
                return void 0;
            };
        };
        var r271_UTailed = function (r312_df, r312_top) {
            var _r312_t0, _r312_t1;
            return function () {
                var _r314_t1;
                var _r314_t0 = this;
                var r314_currentGlyph = _r314_t0;
                r314_currentGlyph.setBaseAnchor('trailing', r312_df.rightSB + r271_SideJut, 0);
                r314_currentGlyph.include(r271_nShoulder(new r271_xn$NamedParameterPair$2Lrc9b('top', r312_top), new r271_xn$NamedParameterPair$2Lrc9b('left', r312_df.leftSB + r271_Stroke * r271_HVContrast), new r271_xn$NamedParameterPair$2Lrc9b('right', r312_df.rightSB), new r271_xn$NamedParameterPair$2Lrc9b('fine', r271_ShoulderFine)));
                r314_currentGlyph.include(r271_FlipAround(r312_df.middle, r312_top / 2));
                r314_currentGlyph.include(r271_RightwardTailedBar(r312_df.rightSB, 0, r312_top));
                return void 0;
            };
        };
        var r271_UToothlessRounded = function (r323_df, r323_top) {
            var _r323_t0, _r323_t1;
            return function () {
                var _r325_t1;
                var _r325_t0 = this;
                var r325_currentGlyph = _r325_t0;
                r325_currentGlyph.include(r271_UShape(r323_df, r323_top, 0));
                return void 0;
            };
        };
        var r271_UToothlessRoundedSmall = function (r327_df, r327_top) {
            var _r327_t0, _r327_t1;
            return function () {
                var _r329_t1;
                var _r329_t0 = this;
                var r329_currentGlyph = _r329_t0;
                r329_currentGlyph.include(r271_UShape(r327_df, r327_top, 0, new r271_xn$NamedParameterPair$2Lrc9b('ada', r271_SmallArchDepthA), new r271_xn$NamedParameterPair$2Lrc9b('adb', r271_SmallArchDepthB)));
                return void 0;
            };
        };
        var r271_UToothlessCorner = function (r333_df, r333_top) {
            var _r333_t0, _r333_t1;
            return function () {
                var _r335_t1;
                var _r335_t0 = this;
                var r335_currentGlyph = _r335_t0;
                r335_currentGlyph.include(r271_VBar.l(r333_df.leftSB, 0, r333_top - r271_DToothlessRise));
                r335_currentGlyph.include(r271_dispiro(r271_widths.rhs(), r271_g4(r333_df.leftSB, r333_top - r271_DToothlessRise), r271_g4(r333_df.middle - r271_CorrectionOMidS, r333_top - r271_O), r271_archv(), r271_flat(r333_df.rightSB, r333_top - r271_ArchDepthB), r271_curl(r333_df.rightSB, 0, r271_heading(r271_Downward))));
                r335_currentGlyph.include(r271_FlipAround(r333_df.middle, r333_top / 2));
                return void 0;
            };
        };
        var r271_UToothlessCornerSmall = function (r339_df, r339_top) {
            var _r339_t0, _r339_t1;
            return function () {
                var _r341_t1;
                var _r341_t0 = this;
                var r341_currentGlyph = _r341_t0;
                r341_currentGlyph.include(r271_VBar.l(r339_df.leftSB, 0, r339_top - r271_DToothlessRise));
                r341_currentGlyph.include(r271_dispiro(r271_widths.rhs(), r271_g4(r339_df.leftSB, r339_top - r271_DToothlessRise), r271_g4(r339_df.middle - r271_CorrectionOMidS, r339_top - r271_O), r271_archv(), r271_flat(r339_df.rightSB, r339_top - r271_SmallArchDepthB), r271_curl(r339_df.rightSB, 0, r271_heading(r271_Downward))));
                r341_currentGlyph.include(r271_FlipAround(r339_df.middle, r339_top / 2));
                return void 0;
            };
        };
        var r271_UTopLeftSerif = function (r345_df, r345_yTop) {
            var _r345_t0, _r345_t1;
            return r271_tagged('serifLT', r271_HSerif.lt(r345_df.leftSB, r345_yTop, r271_SideJut));
        };
        var r271_UTopRightSerif = function (r346_df, r346_yTop) {
            var _r346_t0, _r346_t1;
            return r271_tagged('serifRT', r271_HSerif.lt(r346_df.rightSB - r271_Stroke * r271_HVContrast, r346_yTop, r271_SideJut));
        };
        var r271_UBottomRightSerif = function (r347_df, r347_yTop) {
            var _r347_t0, _r347_t1;
            return function () {
                var _r349_t1;
                var _r349_t0 = this;
                var r349_currentGlyph = _r349_t0;
                r349_currentGlyph.include(r271_tagged('serifRB', r271_HSerif.rb(r347_df.rightSB, 0, r271_SideJut)));
                var r349_trAnchor = r349_currentGlyph.baseAnchors.trailing;
                if (r349_trAnchor)
                    r349_currentGlyph.setBaseAnchor('trailing', r349_trAnchor.x + r271_SideJut, r349_trAnchor.y);
                return void 0;
            };
        };
        var r271_SmallUSlabs = function (r352_df, r352_top) {
            var _r352_t0, _r352_t1;
            return function () {
                var _r354_t1;
                var _r354_t0 = this;
                var r354_currentGlyph = _r354_t0;
                r354_currentGlyph.include(r271_UTopLeftSerif(r352_df, r352_top));
                if (!r271_para.isItalic)
                    r354_currentGlyph.include(r271_UTopRightSerif(r352_df, r352_top));
                r354_currentGlyph.include(r271_UBottomRightSerif(r352_df, r352_top));
                return void 0;
            };
        };
        var r271_UrtBaseSlabs = function (r358_df, r358_top) {
            var _r358_t0, _r358_t1;
            return function () {
                var _r360_t1;
                var _r360_t0 = this;
                var r360_currentGlyph = _r360_t0;
                r360_currentGlyph.include(r271_UTopLeftSerif(r358_df, r358_top));
                if (!r271_para.isItalic)
                    r360_currentGlyph.include(r271_UTopRightSerif(r358_df, r358_top));
                return void 0;
            };
        };
        var r271_SmallUTailedSlabs = function (r363_df, r363_top) {
            var _r363_t0, _r363_t1;
            return function () {
                var _r365_t1;
                var _r365_t0 = this;
                var r365_currentGlyph = _r365_t0;
                r365_currentGlyph.include(r271_UTopLeftSerif(r363_df, r363_top));
                if (!r271_para.isItalic)
                    r365_currentGlyph.include(r271_UTopRightSerif(r363_df, r363_top));
                return void 0;
            };
        };
        var r271_CapitalUMotionToothlessSlabs = function (r368_df, r368_top) {
            var _r368_t0, _r368_t1;
            return function () {
                var _r370_t1;
                var _r370_t0 = this;
                var r370_currentGlyph = _r370_t0;
                r370_currentGlyph.include(r271_HSerif.lt(r368_df.leftSB, r368_top, r271_SideJut));
                r370_currentGlyph.include(r271_HSerif.rt(r368_df.rightSB, r368_top, r271_SideJut));
                return void 0;
            };
        };
        var r271_SmallUToothlessSlabs = function (r373_df, r373_top) {
            var _r373_t0, _r373_t1;
            return function () {
                var _r375_t1;
                var _r375_t0 = this;
                var r375_currentGlyph = _r375_t0;
                r375_currentGlyph.include(r271_UTopLeftSerif(r373_df, r373_top));
                r375_currentGlyph.include(r271_UTopRightSerif(r373_df, r373_top));
                return void 0;
            };
        };
        var r271_SmallUMotionSlabs = function (r378_df, r378_top) {
            var _r378_t0, _r378_t1;
            return function () {
                var _r380_t1;
                var _r380_t0 = this;
                var r380_currentGlyph = _r380_t0;
                r380_currentGlyph.include(r271_UTopLeftSerif(r378_df, r378_top));
                r380_currentGlyph.include(r271_UBottomRightSerif(r378_df, r378_top));
                return void 0;
            };
        };
        var r271_SmallUBottomRightSlabs = function (r383_df, r383_top) {
            var _r383_t0, _r383_t1;
            return function () {
                var _r385_t1;
                var _r385_t0 = this;
                var r385_currentGlyph = _r385_t0;
                r385_currentGlyph.include(r271_UBottomRightSerif(r383_df, r383_top));
                return void 0;
            };
        };
        var r271_SmallUMotionTailedSlabs = function (r387_df, r387_top) {
            var _r387_t0, _r387_t1;
            return function () {
                var _r389_t1;
                var _r389_t0 = this;
                var r389_currentGlyph = _r389_t0;
                r389_currentGlyph.include(r271_UTopLeftSerif(r387_df, r387_top));
                return void 0;
            };
        };
        var r271_ToothlessSlabs = function (r391_df, r391_top) {
            var _r391_t0, _r391_t1;
            var r391_sf = r271_SerifFrame.fromDf(r391_df, r391_top, 0);
            return function () {
                var _r393_t1;
                var _r393_t0 = this;
                var r393_currentGlyph = _r393_t0;
                r393_currentGlyph.include(r391_sf.lt.full, true, true);
                r393_currentGlyph.include(r391_sf.rt.full);
                return void 0;
            };
        };
        var r271_CapitalUConfig = r1_SuffixCfg.weave({
            'toothed': r271_UToothed,
            'tailed': r271_UTailed,
            'toothlessCorner': r271_UToothlessCorner,
            'toothlessRounded': r271_UToothlessRounded
        }, function (r396_body) {
            var r396___, _r396_t0, _r396_t1, _r396_t2, _r396_t3;
            return {
                'serifless': [
                    r271_xn$noshape$3cah,
                    false
                ],
                'bilateralMotionSerifed': [
                    r271_CapitalUMotionToothlessSlabs,
                    true
                ],
                'unilateralMotionSerifed': (_r396_t0 = r396_body, _r396_t0 === 'toothed' ? [
                    r271_SmallUMotionSlabs,
                    true
                ] : (r396___ = _r396_t0, [
                    r271_SmallUMotionTailedSlabs,
                    true
                ])),
                'serifed': (_r396_t1 = r396_body, _r396_t1 === 'toothed' ? [
                    r271_SmallUSlabs,
                    true
                ] : _r396_t1 === 'tailed' ? [
                    r271_SmallUTailedSlabs,
                    true
                ] : (r396___ = _r396_t1, [
                    r271_ToothlessSlabs,
                    true
                ]))
            };
        });
        var _r271_t11 = Object.entries(r271_CapitalUConfig)[Symbol.iterator]();
        var _r271_t12 = void 0;
        while (!(_r271_t12 = _r271_t11.next()).done) {
            _r271_t13 = _r271_t12.value;
            r271_suffix = _r271_t13[0];
            r271_Base = _r271_t13[1][0];
            r271_Slabs = _r271_t13[1][1][0];
            r271_fLTSlab = _r271_t13[1][1][1];
            _r271_t13[1][1];
            _r271_t13[1];
            (function () {
                r271_xn$createAndSaveGlyphImpl$2Lrc3c('U.' + r271_suffix, null, function () {
                    var _r402_t1;
                    var _r402_t0 = this;
                    var r402_currentGlyph = _r402_t0;
                    var r402_df = r271_DivFrame(1);
                    r402_currentGlyph.include(r271_MarkSet.capital());
                    r402_currentGlyph.include(r271_Base(r402_df, r271_CAP));
                    r402_currentGlyph.include(r271_Slabs(r402_df, r271_CAP));
                    return void 0;
                });
                r271_xn$createAndSaveGlyphImpl$2Lrc3c('U/withTonos.' + r271_suffix, null, function () {
                    var _r408_t1;
                    var _r408_t0 = this;
                    var r408_currentGlyph = _r408_t0;
                    r408_currentGlyph.include(r271_xn$referglyph$1aao('U.' + r271_suffix), r271_AS_BASE, r271_ALSO_METRICS);
                    r408_currentGlyph.include(r271_SetGrekUpperTonos(r271_fLTSlab ? -r271_SideJut : 0));
                    return void 0;
                });
                return r271_xn$createAndSaveGlyphImpl$2Lrc3c('smcpU.' + r271_suffix, null, function () {
                    var _r413_t1;
                    var _r413_t0 = this;
                    var r413_currentGlyph = _r413_t0;
                    var r413_df = r271_DivFrame(1);
                    r413_currentGlyph.include(r271_MarkSet.e());
                    r413_currentGlyph.include(r271_Base(r413_df, r271_XH));
                    r413_currentGlyph.include(r271_Slabs(r413_df, r271_XH));
                    return void 0;
                });
            }());
        }
        var r271_SmallUConfig = r1_SuffixCfg.weave({
            'toothed': r271_UToothed,
            'tailed': r271_UTailed,
            'toothlessCorner': r271_UToothlessCorner,
            'toothlessRounded': r271_UToothlessRounded,
            'urtBase': r271_UToothed
        }, function (r417_body) {
            var r417___, _r417_t0, _r417_t1, _r417_t2, _r417_t3;
            return {
                'serifless': r271_xn$noshape$3cah,
                'bottomRightSerifed': r271_SmallUBottomRightSlabs,
                'motionSerifed': (_r417_t0 = r417_body, _r417_t0 === 'toothed' ? r271_SmallUMotionSlabs : (r417___ = _r417_t0, r271_SmallUMotionTailedSlabs)),
                'serifed': (_r417_t1 = r417_body, _r417_t1 === 'toothed' ? r271_SmallUSlabs : _r417_t1 === 'tailed' ? r271_SmallUTailedSlabs : _r417_t1 === 'urtBase' ? r271_UrtBaseSlabs : (r417___ = _r417_t1, r271_SmallUToothlessSlabs))
            };
        });
        var _r271_t14 = Object.entries(r271_SmallUConfig)[Symbol.iterator]();
        var _r271_t15 = void 0;
        while (!(_r271_t15 = _r271_t14.next()).done) {
            _r271_t16 = _r271_t15.value;
            r271_suffix = _r271_t16[0];
            r271_Base = _r271_t16[1][0];
            r271_Slabs = _r271_t16[1][1];
            _r271_t16[1];
            (function () {
                r271_xn$createAndSaveGlyphImpl$2Lrc3c('u.' + r271_suffix, null, function () {
                    var _r423_t1;
                    var _r423_t0 = this;
                    var r423_currentGlyph = _r423_t0;
                    var r423_df = r271_DivFrame(1);
                    r423_currentGlyph.include(r271_MarkSet.e());
                    r423_currentGlyph.include(r271_Base(r423_df, r271_XH));
                    r423_currentGlyph.include(r271_Slabs(r423_df, r271_XH));
                    return void 0;
                });
                r271_xn$createAndSaveGlyphImpl$2Lrc3c('grek/mu.' + r271_suffix, null, function () {
                    var _r429_t1;
                    var _r429_t0 = this;
                    var r429_currentGlyph = _r429_t0;
                    var r429_df = r271_DivFrame(1);
                    r429_currentGlyph.include(r271_MarkSet.p());
                    r429_currentGlyph.include(r271_Base(r429_df, r271_XH));
                    r429_currentGlyph.include(r271_dispiro(r271_widths.rhs(), r271_flat(r271_SB, r271_Descender, r271_heading(r271_Upward)), r271_curl(r271_SB, r271_Descender / 2, r271_heading(r271_Upward)), r271_straight.up.end(r271_SB, r271_SmallArchDepthB, r271_widths.heading(0, r271_AdviceStroke(4), r271_Upward))));
                    r429_currentGlyph.include(r271_Slabs(r429_df, r271_XH));
                    return void 0;
                });
                r271_xn$createAndSaveGlyphImpl$2Lrc3c('uSideways.' + r271_suffix, null, function () {
                    var _r436_t1;
                    var _r436_t0 = this;
                    var r436_currentGlyph = _r436_t0;
                    var r436_df = r271_DivFrame(r271_XH / r271_Width, 2, r271_XH * 0.1 / r271_SB);
                    r436_currentGlyph.include(r436_df.markSet.e());
                    r436_currentGlyph.include(r271_PointingTo(r271_Width, r271_XH, r271_Width, 0, function () {
                        var _r439_t0, _r439_t1;
                        return function () {
                            var _r441_t1;
                            var _r441_t0 = this;
                            var r441_currentGlyph = _r441_t0;
                            r441_currentGlyph.include(r271_Base(r436_df, r271_Width - r271_SB));
                            r441_currentGlyph.include(r271_Slabs(r436_df, r271_Width - r271_SB));
                            r441_currentGlyph.include(r271_Translate(0, r271_SB / 2));
                            return void 0;
                        };
                    }));
                    return void 0;
                });
                return r271_xn$createAndSaveGlyphImpl$2Lrc3c('uDieresisSidewaysBase.' + r271_suffix, null, function () {
                    var _r447_t1;
                    var _r447_t0 = this;
                    var r447_currentGlyph = _r447_t0;
                    var r447_df = r271_DivFrame(r271_XH / r271_Width, 2, r271_XH * 0.1 / r271_SB);
                    r447_currentGlyph.include(r447_df.markSet.e());
                    var r447_ww = r271_Width * r271_para.diversityM;
                    r447_currentGlyph.setWidth(r447_ww);
                    r447_currentGlyph.include(r271_PointingTo(r447_ww, r271_XH, r447_ww, 0, function () {
                        var _r451_t0, _r451_t1;
                        return function () {
                            var _r453_t1;
                            var _r453_t0 = this;
                            var r453_currentGlyph = _r453_t0;
                            r453_currentGlyph.include(r271_Base(r447_df, r447_ww - r271_SB - 0.75 * r271_para.diversityM * r271_AccentHeight));
                            r453_currentGlyph.include(r271_Slabs(r447_df, r447_ww - r271_SB - 0.75 * r271_para.diversityM * r271_AccentHeight));
                            r453_currentGlyph.include(r271_Translate(0, r271_SB / 2));
                            return void 0;
                        };
                    }));
                    return void 0;
                });
            }());
        }
        r271_xn$selectvariant$7Hrq('U', 'U');
        r271_xn$selectvariant$7Hrq('U/withTonos', new r271_xn$NamedParameterPair$2Lrc9b('follow', 'U'));
        r271_xn$linkreducedvariant$5sIl8('U/sansSerif', 'U', r1_MathSansSerif);
        r271_xn$selectvariant$7Hrq('smcpU', 7452, new r271_xn$NamedParameterPair$2Lrc9b('follow', 'U'));
        r271_xn$selectvariant$7Hrq('u', 'u');
        r271_xn$linkreducedvariant$5sIl8('u/sansSerif', 'u', r1_MathSansSerif);
        r271_xn$selectvariant$7Hrq('u/uRTailBase', new r271_xn$NamedParameterPair$2Lrc9b('shapeFrom', 'u'));
        r271_xn$selectvariant$7Hrq('grek/mu', 956);
        r271_xn$linkreducedvariant$5sIl8('grek/mu/sansSerif', 'grek/mu', r1_MathSansSerif);
        r271_xn$selectvariant$7Hrq('micro', 181, new r271_xn$NamedParameterPair$2Lrc9b('shapeFrom', 'grek/mu'));
        r271_xn$selectvariant$7Hrq('cyrl/i.italic', new r271_xn$NamedParameterPair$2Lrc9b('shapeFrom', 'u'));
        r271_xn$selectvariant$7Hrq('cyrl/i.italic.reduced', new r271_xn$NamedParameterPair$2Lrc9b('shapeFrom', 'u'));
        r271_alias('cyrl/i.BGR', null, 'cyrl/i.italic');
        r271_xn$selectvariant$7Hrq('uSideways', 7453, new r271_xn$NamedParameterPair$2Lrc9b('follow', 'u'));
        r271_xn$selectvariant$7Hrq('uDieresisSidewaysBase', null, new r271_xn$NamedParameterPair$2Lrc9b('follow', 'u'));
        r271_xn$deriveglyphs$7Hrq('cyrl/ibreve.BGR', null, 'cyrl/i.BGR', function (r465_src, r465_gr) {
            var _r465_t0, _r465_t1;
            return function () {
                var _r467_t1;
                var _r467_t0 = this;
                var r467_currentGlyph = _r467_t0;
                r467_currentGlyph.include(r271_xn$referglyph$1aao(r465_src), r271_AS_BASE, r271_ALSO_METRICS);
                r467_currentGlyph.include(r271_xn$referglyph$1aao('breveAbove'));
                return void 0;
            };
        });
        r271_xn$deriveglyphs$7Hrq('cyrl/igrave.BGR', null, 'cyrl/i.BGR', function (r470_src, r470_gr) {
            var _r470_t0, _r470_t1;
            return function () {
                var _r472_t1;
                var _r472_t0 = this;
                var r472_currentGlyph = _r472_t0;
                r472_currentGlyph.include(r271_xn$referglyph$1aao(r470_src), r271_AS_BASE, r271_ALSO_METRICS);
                r472_currentGlyph.include(r271_xn$referglyph$1aao('graveAbove'));
                return void 0;
            };
        });
        r271_xn$derivecomposites$7Hrq('cyrl/iShortTail.italic', null, 'cyrl/i.italic.reduced', r271_xn$referglyph$1aao('breveAbove'), r271_CyrTailDescender.rSideJut(r271_RightSB, 0));
        r271_xn$derivecomposites$7Hrq('uRTailBR', 7577, 'u/uRTailBase', r271_RetroflexHook.rSideJut(r271_RightSB, 0, new r271_xn$NamedParameterPair$2Lrc9b('yOverflow', r271_Stroke)));
        var r271_VHookTopShape = function (r476_df, r476_top, r476_ada, r476_adb) {
            var _r476_t0, _r476_t1;
            return function () {
                var _r478_t1;
                var _r478_t0 = this;
                var r478_currentGlyph = _r478_t0;
                r478_currentGlyph.include(r271_dispiro(r271_widths.lhs(), r271_flat(r476_df.leftSB, r476_top, r271_heading(r271_Downward)), r271_curl(r476_df.leftSB, r476_adb), r271_arcvh(), r271_g4(r271_Middle + r271_CorrectionOMidS, r271_O), r271_archv(), r271_flat(r476_df.rightSB, r476_ada), r271_curl(r476_df.rightSB, r476_top - r271_Hook - r271_HalfStroke, r271_heading(r271_Upward))));
                r478_currentGlyph.include(r271_VerticalHook.r(new r271_xn$NamedParameterPair$2Lrc9b('x', r476_df.rightSB), new r271_xn$NamedParameterPair$2Lrc9b('y', r476_top - r271_Hook - r271_HalfStroke), new r271_xn$NamedParameterPair$2Lrc9b('xDepth', -(r271_RightSB - r271_HalfStroke * r271_HVContrast - r271_Middle)), new r271_xn$NamedParameterPair$2Lrc9b('yDepth', -r271_Hook)));
                if (r271_SLAB)
                    r478_currentGlyph.include(r271_UTopLeftSerif(r476_df, r476_top));
                return void 0;
            };
        };
        r271_xn$createAndSaveGlyphImpl$2Lrc3c('VHookTop', 434, function () {
            var _r488_t1;
            var _r488_t0 = this;
            var r488_currentGlyph = _r488_t0;
            r488_currentGlyph.include(r271_MarkSet.capital());
            r488_currentGlyph.include(r271_VHookTopShape(r271_DivFrame(1), r271_CAP, r271_ArchDepthA, r271_ArchDepthB));
            return void 0;
        });
        r271_xn$createAndSaveGlyphImpl$2Lrc3c('vHookTop', 651, function () {
            var _r493_t1;
            var _r493_t0 = this;
            var r493_currentGlyph = _r493_t0;
            r493_currentGlyph.include(r271_MarkSet.e());
            r493_currentGlyph.include(r271_VHookTopShape(r271_DivFrame(1), r271_XH, r271_SmallArchDepthA, r271_SmallArchDepthB));
            return void 0;
        });
        r271_xn$deriveglyphs$7Hrq('uWithLightCentralizationStroke', null, 'u', function (r496_src, r496_gr) {
            var _r496_t0, _r496_t1;
            return function () {
                var _r498_t1;
                var _r498_t0 = this;
                var r498_currentGlyph = _r498_t0;
                r498_currentGlyph.include(r271_MarkSet.p());
                r498_currentGlyph.include(r271_xn$referglyph$1aao(r496_src));
                var r498_fine = r271_AdviceStroke(4);
                var r498_outStand = r271_SB * 0.75 + r498_fine * 0.25;
                var r498_outStandY = r271_SmallArchDepthB / 2 - r271_Descender * 0.6;
                var r498_yTurn = r271_SmallArchDepthB / 2;
                r498_currentGlyph.include(r271_difference(r271_dispiro(r271_widths.lhs(r498_fine), r271_corner(r271_SB + r498_outStand, r498_yTurn + r498_outStandY), r271_corner(r271_SB - r498_outStand, r498_yTurn - r498_outStandY)), r271_xn$spirooutline$1aao(r271_corner(r271_SB - r271_O, r271_XH), r271_curl(r271_SB - r271_O, r271_SmallArchDepthB), r271_arcvh(), r271_g4(r271_Middle + r271_CorrectionOMidS, -r271_O), r271_archv(), r271_flat(r271_RightSB + r271_O, r271_SmallArchDepthA), r271_corner(r271_RightSB + r271_O, r271_XH))));
                if (r271_SLAB)
                    r498_currentGlyph.include(r271_HSerif.lt(r271_SB, r271_XH, r271_SideJut));
                return void 0;
            };
        });
        var _r271_t17 = r271_xn$Capture$2Lrc8['Letter-Blackboard'].resolve();
        var r271_BBS = _r271_t17.BBS;
        var r271_BBD = _r271_t17.BBD;
        var r271_BBBarRight = _r271_t17.BBBarRight;
        r271_xn$createAndSaveGlyphImpl$2Lrc3c('mathbb/U', 120140, function () {
            var _r506_t1;
            var _r506_t0 = this;
            var r506_currentGlyph = _r506_t0;
            r506_currentGlyph.include(r271_MarkSet.capital());
            r506_currentGlyph.include(r271_HBar.t(r271_SB, r271_SB + r271_BBD, r271_CAP, r271_BBS));
            r506_currentGlyph.include(r271_UShape(r271_DivFrame(1), r271_CAP, 0, new r271_xn$NamedParameterPair$2Lrc9b('stroke', r271_BBS)));
            r506_currentGlyph.include(r271_intersection(r271_VBar.l(r271_SB + r271_BBD, 0, r271_CAP, r271_BBS), r271_UArcT(r271_xn$spirooutline$1aao, r271_DivFrame(1), r271_CAP, 0, new r271_xn$NamedParameterPair$2Lrc9b('stroke', r271_BBS), new r271_xn$NamedParameterPair$2Lrc9b('oper', true), new r271_xn$NamedParameterPair$2Lrc9b('offset', 1))));
            return void 0;
        });
        r271_xn$createAndSaveGlyphImpl$2Lrc3c('mathbb/u', 120166, function () {
            var _r517_t1;
            var _r517_t0 = this;
            var r517_currentGlyph = _r517_t0;
            var r517_df = r271_DivFrame(1, 2);
            r517_currentGlyph.include(r517_df.markSet.e());
            r517_currentGlyph.include(r271_xn$referglyph$1aao('mathbb/n'));
            r517_currentGlyph.include(r271_FlipAround(r271_Middle, r271_XH / 2));
            return void 0;
        });
        r271_CreateAccentedComposition('uDieresis', 252, 'u', 'dieresisAbove');
        r271_CreateAccentedComposition('uLongBarOver', 649, 'u', 'hStrike');
        r271_CreateAccentedComposition('smcpUStroke', 7550, 'smcpU', 'hStrike');
        r271_xn$deriveglyphs$7Hrq('uDieresisSidewaysMark', null, 'dieresisAboveAlwaysUpright', function (r521_gns) {
            var _r521_t0, _r521_t1;
            return function () {
                var _r523_t1;
                var _r523_t0 = this;
                var r523_currentGlyph = _r523_t0;
                var r523_ww = r271_Width * r271_para.diversityM;
                r523_currentGlyph.setWidth(0);
                r523_currentGlyph.include(r271_PointingTo(r523_ww, r271_XH, r523_ww, 0, function () {
                    var _r526_t0, _r526_t1;
                    return function () {
                        var _r528_t1;
                        var _r528_t0 = this;
                        var r528_currentGlyph = _r528_t0;
                        r528_currentGlyph.include(r271_xn$referglyph$1aao(r521_gns));
                        r528_currentGlyph.include(r271_Translate(r271_XH / 2 + r271_Width / 2, r523_ww - r271_SB - r271_XH - r271_AccentHeight));
                        r528_currentGlyph.include(r271_Translate(0, r271_SB / 2));
                        return void 0;
                    };
                }));
                return void 0;
            };
        });
        r271_CreateAccentedComposition('uDieresisSideways', 7454, 'uDieresisSidewaysBase', 'uDieresisSidewaysMark');
        r271_CreateOgonekComposition('UOgonek', 370, 'U');
        return r271_CreateOgonekComposition('uOgonek', 371, 'u');
    });
    return void 0;
});
