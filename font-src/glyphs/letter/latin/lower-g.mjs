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
    r270_xn$Capture_Ext$2Lrc2b['$defineGlyphBlockImpl$'](r270_xn$Capture_Ext$2Lrc2b, 'Letter-Latin-Lower-G', function (r271_xn$Capture$2Lrc8, r271_xn$ExportCapture$2Lrc4b) {
        var r271_suffix, r271_hookShape, r271_bodyShape, r271_hookStart, _r271_t11, _r271_t13, _r271_t14, _r271_t15, _r271_tag16, _r271_t17, _r271_tag18;
        var _r271_t0 = r271_xn$Capture$2Lrc8;
        var r271_xn$createAndSaveGlyphImpl$2Lrc3c = _r271_t0['$createAndSaveGlyphImpl$'];
        var r271_xn$NamedParameterPair$2Lrc9b = _r271_t0['$NamedParameterPair$'];
        var r271_xn$assignUnicodeImpl$2Lrc8b = _r271_t0['$assignUnicodeImpl$'];
        var r271_xn$execState$2Lrc0b = _r271_t0['$execState$'];
        var r271_MarkSet = _r271_t0.MarkSet;
        var r271_AS_BASE = _r271_t0.AS_BASE;
        var r271_ALSO_METRICS = _r271_t0.ALSO_METRICS;
        var r271_tagged = _r271_t0.tagged;
        var r271_DivFrame = _r271_t0.DivFrame;
        var _r271_t1 = r271_xn$Capture$2Lrc8.Metrics;
        var r271_DesignParameters = _r271_t1.DesignParameters;
        var r271_Width = _r271_t1.Width;
        var r271_SB = _r271_t1.SB;
        var r271_CAP = _r271_t1.CAP;
        var r271_XH = _r271_t1.XH;
        var r271_Descender = _r271_t1.Descender;
        var r271_HVContrast = _r271_t1.HVContrast;
        var r271_Downward = _r271_t1.Downward;
        var r271_Rightward = _r271_t1.Rightward;
        var r271_O = _r271_t1.O;
        var r271_OX = _r271_t1.OX;
        var r271_SHook = _r271_t1.SHook;
        var r271_Stroke = _r271_t1.Stroke;
        var r271_CThin = _r271_t1.CThin;
        var r271_HalfStroke = _r271_t1.HalfStroke;
        var r271_RightSB = _r271_t1.RightSB;
        var r271_Middle = _r271_t1.Middle;
        var r271_SideJut = _r271_t1.SideJut;
        var r271_SmallArchDepthA = _r271_t1.SmallArchDepthA;
        var r271_SmallArchDepthB = _r271_t1.SmallArchDepthB;
        var r271_CorrectionOMidS = _r271_t1.CorrectionOMidS;
        var r271_AdviceStroke = _r271_t1.AdviceStroke;
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
        var r271_intersection = _r271_t3.intersection;
        var _r271_t4 = r271_xn$Capture$2Lrc8.CommonShapes.resolve();
        var r271_OShape = _r271_t4.OShape;
        var r271_OShapeOutline = _r271_t4.OShapeOutline;
        var r271_HSerif = _r271_t4.HSerif;
        var r271_HBar = _r271_t4.HBar;
        var r271_VBar = _r271_t4.VBar;
        var r271_hookend = _r271_t4.hookend;
        var r271_FlipAround = _r271_t4.FlipAround;
        var r271_MaskBelow = _r271_t4.MaskBelow;
        var r271_MaskLeft = _r271_t4.MaskLeft;
        var _r271_t5 = r271_xn$Capture$2Lrc8['Common-Derivatives'].resolve();
        var r271_xn$selectvariant$7Hrq = _r271_t5['select-variant'];
        var r271_xn$referglyph$1aao = _r271_t5['refer-glyph'];
        var r271_alias = _r271_t5.alias;
        var r271_turned = _r271_t5.turned;
        var r271_xn$derivecomposites$7Hrq = _r271_t5['derive-composites'];
        var r271_xn$linkreducedvariant$5sIl8 = _r271_t5['link-reduced-variant'];
        var _r271_t6 = r271_xn$Capture$2Lrc8['Mark-Adjustment'].resolve();
        var r271_ExtendAboveBaseAnchors = _r271_t6.ExtendAboveBaseAnchors;
        var _r271_t7 = r271_xn$Capture$2Lrc8['Letter-Shared-Shapes'].resolve();
        var r271_OBarLeft = _r271_t7.OBarLeft;
        var r271_OBarRight = _r271_t7.OBarRight;
        var r271_DToothlessRise = _r271_t7.DToothlessRise;
        var r271_DMBlend = _r271_t7.DMBlend;
        var _r271_t8 = r271_xn$Capture$2Lrc8['Letter-Shared-Shapes'].resolve();
        var r271_FlatHookDepth = _r271_t8.FlatHookDepth;
        var r271_CurlyTail = _r271_t8.CurlyTail;
        var r271_PalatalHook = _r271_t8.PalatalHook;
        var r271_TopHook = _r271_t8.TopHook;
        var r271_OverlayW = function (r277_bw) {
            var _r277_t0, _r277_t1;
            return function () {
                var _r279_t1;
                var _r279_t0 = this;
                var r279_currentGlyph = _r279_t0;
                var r279_l = r1_mix(0, r271_SB, 0.3);
                var r279_r = r1_mix(r271_Width, r271_RightSB, 0.3);
                r279_currentGlyph.include(r271_HBar.m(r279_l, r279_r, r279_currentGlyph.baseAnchors.overlay.y, r277_bw));
                return void 0;
            };
        };
        var r271_obwDoubleStorey = Math.min(r271_AdviceStroke(5), 0.5 / 3 * (r271_CAP - r271_Stroke * 4));
        r271_xn$createAndSaveGlyphImpl$2Lrc3c('g.doubleStorey', null, function () {
            var _r283_t1;
            var _r283_t0 = this;
            var r283_currentGlyph = _r283_t0;
            r283_currentGlyph.include(r271_MarkSet.p());
            var r283_obot = r271_XH * r271_DesignParameters.gBarPos - r271_O - r271_Stroke * 0.4;
            r283_currentGlyph.include(r271_OShape(r271_XH, r283_obot, r271_SB, r271_RightSB - 0.3 * r271_SB));
            var r283_gleftx = r1_mix(0, r271_SB, 0.85) + r271_OX;
            var r283_grightx = r1_mix(r271_Width, r271_RightSB, 0.825) - r271_OX;
            var r283_groundy = Math.round(r1_mix(r271_Descender, r271_XH * r271_DesignParameters.gBarPos, 0.64) + r271_HalfStroke);
            var r283_gtipy = r1_mix(r283_groundy, r283_obot + r271_Stroke + r271_O, 1.005) - r271_Stroke * r271_CThin;
            r283_currentGlyph.include(r271_dispiro(r271_g4.left.start(r1_mix(r271_SB, r271_RightSB, 0.4), r283_gtipy, r271_widths(0, r271_Stroke * r271_CThin)), r271_g4(r1_mix(r271_SB, r271_RightSB, 0.0575) + r271_Stroke * 0.85, r1_mix(r283_groundy, r283_gtipy, 0.5), r271_widths.rhs(r271_Stroke * r1_mix(r271_CThin, 1, 0.5))), r271_flat(r1_mix(r271_SB, r271_RightSB, 0.435), r283_groundy, r271_widths(0, r271_Stroke)), r271_curl(r1_mix(r271_RightSB, r271_SB, 0.435), r283_groundy), r271_archv(4), r271_g4(r283_grightx, r1_mix(r271_Descender + r271_O, r283_groundy, 1.06 * r271_SmallArchDepthA / (r271_SmallArchDepthA + r271_SmallArchDepthB))), r271_arcvh(), r271_g4(r271_Middle + r271_CorrectionOMidS, r271_Descender + r271_O), r271_archv(), r271_g4(r283_gleftx, r1_mix(r271_Descender + r271_O, r283_groundy, 1.06 * r271_SmallArchDepthB / (r271_SmallArchDepthA + r271_SmallArchDepthB))), r271_arcvh(), r271_g4(r1_mix(r271_SB, r271_RightSB, 0.435), r283_groundy, r271_heading(r271_Rightward))));
            var r283_gm = r1_mix(r271_SB, r271_RightSB - 0.3 * r271_SB, 0.5);
            r283_currentGlyph.include(r271_xn$spirooutline$1aao(r271_corner(r271_RightSB + 0.25 * r271_SB - r271_OX, r271_XH), r271_corner(r271_RightSB + 0.25 * r271_SB - r271_OX, r271_XH - r271_Stroke), r271_corner(r283_gm, r271_XH - r271_Stroke - r271_O), r271_corner(r283_gm, r271_XH)));
            r283_currentGlyph.setBaseAnchor('overlay', r271_Middle, r1_mix(r271_Descender + r271_O, r283_groundy, 0.5));
            r283_currentGlyph.setBaseAnchor('strike', r271_Middle, r271_XH / 2);
            r271_xn$createAndSaveGlyphImpl$2Lrc3c('gBar.doubleStorey', null, function () {
                var _r292_t1;
                var _r292_t0 = this;
                _r292_t0.include(r283_currentGlyph, true, true);
                _r292_t0.cloneRankFromGlyph(r283_currentGlyph);
                return _r292_t0.include(r271_OverlayW(r271_obwDoubleStorey));
            });
            return void 0;
        });
        r271_xn$createAndSaveGlyphImpl$2Lrc3c('g.openDoubleStorey', null, function () {
            var _r295_t1;
            var _r295_t0 = this;
            var r295_currentGlyph = _r295_t0;
            r295_currentGlyph.include(r271_MarkSet.p());
            var r295_obot = r271_XH * r271_DesignParameters.gBarPos - r271_O - r271_Stroke * 0.4;
            r295_currentGlyph.include(r271_OShape(r271_XH, r295_obot, r271_SB, r271_RightSB - 0.3 * r271_SB));
            var r295_gleftx = r1_mix(0, r271_SB, 0.85) + r271_OX;
            var r295_grightx = r1_mix(r271_Width, r271_RightSB, 0.825) - r271_OX;
            var r295_groundy = Math.round(r1_mix(r271_Descender, r271_XH * r271_DesignParameters.gBarPos, 0.64) + r271_HalfStroke);
            var r295_gtipy = r1_mix(r295_groundy, r295_obot + r271_Stroke + r271_O, 1.005) - r271_Stroke * r271_CThin;
            r295_currentGlyph.include(r271_dispiro(r271_g4.left.start(r1_mix(r271_SB, r271_RightSB, 0.4), r295_gtipy, r271_widths(0, r271_Stroke * r271_CThin)), r271_g4(r1_mix(r271_SB, r271_RightSB, 0.0575) + r271_Stroke * 0.85, r1_mix(r295_groundy, r295_gtipy, 0.5), r271_widths.rhs(r271_Stroke * r1_mix(r271_CThin, 1, 0.5))), r271_flat(r1_mix(r271_SB, r271_RightSB, 0.435), r295_groundy, r271_widths(0, r271_Stroke)), r271_curl(r1_mix(r271_RightSB, r271_SB, 0.435), r295_groundy), r271_archv(4), r271_g4(r295_grightx, r1_mix(r271_Descender + r271_O, r295_groundy, 1.06 * r271_SmallArchDepthA / (r271_SmallArchDepthA + r271_SmallArchDepthB))), r271_hookend(r271_Descender + r271_O), r271_g4(r295_gleftx, r1_mix(r271_Descender + r271_O, r295_groundy, 1.06 * r271_SmallArchDepthB / (r271_SmallArchDepthA + r271_SmallArchDepthB)))));
            var r295_gm = r1_mix(r271_SB, r271_RightSB - 0.3 * r271_SB, 0.5);
            r295_currentGlyph.include(r271_xn$spirooutline$1aao(r271_corner(r271_RightSB + 0.25 * r271_SB - r271_OX, r271_XH), r271_corner(r271_RightSB + 0.25 * r271_SB - r271_OX, r271_XH - r271_Stroke), r271_corner(r295_gm, r271_XH - r271_Stroke - r271_O), r271_corner(r295_gm, r271_XH)));
            r295_currentGlyph.setBaseAnchor('overlay', r271_Middle, r1_mix(r271_Descender + r271_O, r295_groundy, 0.5));
            r295_currentGlyph.setBaseAnchor('strike', r271_Middle, r271_XH / 2);
            r271_xn$createAndSaveGlyphImpl$2Lrc3c('gBar.openDoubleStorey', null, function () {
                var _r304_t1;
                var _r304_t0 = this;
                _r304_t0.include(r295_currentGlyph, true, true);
                _r304_t0.cloneRankFromGlyph(r295_currentGlyph);
                return _r304_t0.include(r271_OverlayW(r271_obwDoubleStorey));
            });
            return void 0;
        });
        var r271_SingleStorey = function () {
            var r307_RoundHookT, r307_RoundHook, r307_FlatHook, r307_CrossedHook, r307_SeriflessBody, r307_SerifedBody, r307_EarlessCornerBody, r307_EarlessRoundedBody;
            var r307_exports = {};
            r307_exports.RoundHookT = r307_RoundHookT = function (r315_sink, r315_df, r315_yTop, r315_offset, r315_sw) {
                var _r315_t0, _r315_t1;
                return r315_sink(r271_widths.rhs(r315_sw), (r315_sink === r271_xn$spirooutline$1aao ? r271_corner : r271_flat)(r315_df.rightSB - r315_offset, r315_yTop, r271_heading(r271_Downward)), r271_curl(r315_df.rightSB - r315_offset, r271_Descender + r271_SmallArchDepthA), r271_hookend(r271_Descender + r271_O + r315_offset), r271_g4(r315_df.leftSB + r315_offset, r271_Descender + r271_SHook), r315_sink === r271_xn$spirooutline$1aao ? [r271_corner(r315_df.leftSB, r271_XH)] : []);
            };
            r307_exports.RoundHook = r307_RoundHook = function (r317_df, r317_y0) {
                var _r317_t0, _r317_t1;
                return r307_RoundHookT(r271_dispiro, r317_df, r317_y0, 0, r317_df.mvs);
            };
            r307_exports.FlatHook = r307_FlatHook = function (r319_df, r319_y0) {
                var _r319_t0, _r319_t1;
                var r319_hd = r271_FlatHookDepth(r319_df, 9 / 8);
                var r319_xTerminal = Math.min(r319_df.rightSB - r319_hd.x - 0.1, r1_mix(r319_df.leftSB, r319_df.rightSB, 1 / 5));
                return r271_dispiro(r271_widths.rhs(r319_df.mvs), r271_flat(r319_df.rightSB, r319_y0, r271_heading(r271_Downward)), r271_curl(r319_df.rightSB, r271_Descender + r319_hd.y), r271_arcvh.superness(r271_DesignParameters.tightHookSuperness), r271_flat(r319_df.rightSB - r319_hd.x, r271_Descender), r271_curl(r319_xTerminal, r271_Descender));
            };
            r307_exports.CrossedHook = r307_CrossedHook = function (r321_df, r321_y0) {
                var _r321_t0, _r321_t1;
                var r321_fine = r271_AdviceStroke(3.5, r321_df.div);
                var r321_m1 = r321_df.rightSB - r321_df.mvs * r271_HVContrast;
                var r321_rinner = (-r271_Descender - 2 * r321_fine) / 3;
                var r321_x2 = r1_mix(r321_df.rightSB, r321_m1, 0.25);
                var r321_y2 = r271_Descender + r271_O;
                return r271_dispiro(r271_widths.rhs(r321_df.mvs), r271_flat(r321_df.rightSB, r321_y0, r271_heading(r271_Downward)), r271_curl(r321_df.rightSB, r271_Descender + r271_SmallArchDepthA), r271_CurlyTail(r321_fine, r321_rinner, r321_m1, r271_Descender, r321_df.leftSB, r321_x2, r321_y2));
            };
            r307_exports.SeriflessBody = r307_SeriflessBody = function (r323_df, r323_top) {
                var _r323_t0, _r323_t1;
                return function () {
                    var _r325_t1;
                    var _r325_t0 = this;
                    var r325_currentGlyph = _r325_t0;
                    r325_currentGlyph.include(r271_OBarRight.shape(new r271_xn$NamedParameterPair$2Lrc9b('top', r323_top), new r271_xn$NamedParameterPair$2Lrc9b('left', r323_df.leftSB), new r271_xn$NamedParameterPair$2Lrc9b('right', r323_df.rightSB), new r271_xn$NamedParameterPair$2Lrc9b('sw', r323_df.mvs)));
                    return void 0;
                };
            };
            r307_exports.SerifedBody = r307_SerifedBody = function (r332_df, r332_top) {
                var _r332_t0, _r332_t1;
                return function () {
                    var _r334_t1;
                    var _r334_t0 = this;
                    var r334_currentGlyph = _r334_t0;
                    r334_currentGlyph.include(r307_SeriflessBody(r332_df, r332_top));
                    r334_currentGlyph.include(r271_tagged('serifRT', r271_HSerif.rt(r332_df.rightSB, r332_top, r271_SideJut)));
                    return void 0;
                };
            };
            r307_exports.EarlessCornerBody = r307_EarlessCornerBody = function (r338_df, r338_top) {
                var _r338_t0, _r338_t1;
                return function () {
                    var _r340_t1;
                    var _r340_t0 = this;
                    var r340_currentGlyph = _r340_t0;
                    r340_currentGlyph.include(r271_OBarLeft.toothless(new r271_xn$NamedParameterPair$2Lrc9b('top', r338_top), new r271_xn$NamedParameterPair$2Lrc9b('left', r338_df.leftSB), new r271_xn$NamedParameterPair$2Lrc9b('right', r338_df.rightSB), new r271_xn$NamedParameterPair$2Lrc9b('rise', r271_DToothlessRise), new r271_xn$NamedParameterPair$2Lrc9b('mBlend', r271_DMBlend), new r271_xn$NamedParameterPair$2Lrc9b('sw', r338_df.mvs)));
                    r340_currentGlyph.include(r271_FlipAround(r338_df.middle, r338_top / 2));
                    return void 0;
                };
            };
            r307_exports.EarlessRoundedBody = r307_EarlessRoundedBody = function (r350_df, r350_top) {
                var _r350_t0, _r350_t1;
                return function () {
                    var _r352_t1;
                    var _r352_t0 = this;
                    var r352_currentGlyph = _r352_t0;
                    r352_currentGlyph.include(r271_OBarLeft.rounded(new r271_xn$NamedParameterPair$2Lrc9b('top', r350_top), new r271_xn$NamedParameterPair$2Lrc9b('left', r350_df.leftSB), new r271_xn$NamedParameterPair$2Lrc9b('right', r350_df.rightSB), new r271_xn$NamedParameterPair$2Lrc9b('yTerminal', r271_XH - r271_SmallArchDepthA), new r271_xn$NamedParameterPair$2Lrc9b('sw', r350_df.mvs)));
                    r352_currentGlyph.include(r271_FlipAround(r350_df.middle, r350_top / 2));
                    return void 0;
                };
            };
            return r307_exports;
        }();
        var r271_SingleStoreyConfig = r1_SuffixCfg.weave({
            'singleStorey': r271_SingleStorey.RoundHook,
            'singleStoreyFlatHook': r271_SingleStorey.FlatHook
        }, {
            'serifless': [
                r271_SingleStorey.SeriflessBody,
                0
            ],
            'serifed': [
                r271_SingleStorey.SerifedBody,
                0
            ],
            'earlessCorner': [
                r271_SingleStorey.EarlessCornerBody,
                r271_DToothlessRise
            ],
            'earlessCornerHTB': [
                r271_SingleStorey.EarlessCornerBody,
                0
            ],
            'earlessRounded': [
                r271_SingleStorey.EarlessRoundedBody,
                r271_XH - r271_SmallArchDepthA
            ],
            'earlessRoundedHTB': [
                r271_SingleStorey.EarlessRoundedBody,
                0
            ]
        });
        var _r271_t9 = Object.entries(r271_SingleStoreyConfig)[Symbol.iterator]();
        var _r271_t10 = void 0;
        while (!(_r271_t10 = _r271_t9.next()).done) {
            _r271_t11 = _r271_t10.value;
            r271_suffix = _r271_t11[0];
            r271_hookShape = _r271_t11[1][0];
            r271_bodyShape = _r271_t11[1][1][0];
            r271_hookStart = _r271_t11[1][1][1];
            _r271_t11[1][1];
            _r271_t11[1];
            (function () {
                r271_xn$createAndSaveGlyphImpl$2Lrc3c('g.' + r271_suffix, null, function () {
                    var _r365_t1;
                    var _r365_t0 = this;
                    var r365_currentGlyph = _r365_t0;
                    r365_currentGlyph.include(r271_MarkSet.p());
                    r365_currentGlyph.setBaseAnchor('overlay', r271_Middle, r271_XH / 2);
                    r365_currentGlyph.setBaseAnchor('strike', r271_Middle, r271_XH / 2);
                    var r365_df = r271_DivFrame(1);
                    r365_currentGlyph.include(r271_bodyShape(r365_df, r271_XH));
                    r365_currentGlyph.include(r271_hookShape(r365_df, r271_XH - r271_hookStart));
                    return void 0;
                });
                r271_xn$createAndSaveGlyphImpl$2Lrc3c('GScript.' + r271_suffix, null, function () {
                    var _r373_t1;
                    var _r373_t0 = this;
                    var r373_currentGlyph = _r373_t0;
                    r373_currentGlyph.include(r271_MarkSet.capDesc());
                    r373_currentGlyph.setBaseAnchor('overlay', r271_Middle, r271_CAP / 2);
                    var r373_df = r271_DivFrame(1);
                    r373_currentGlyph.include(r271_bodyShape(r373_df, r271_CAP));
                    r373_currentGlyph.include(r271_hookShape(r373_df, r271_CAP - r271_hookStart));
                    return void 0;
                });
                r271_xn$createAndSaveGlyphImpl$2Lrc3c('gPalatalHook.' + r271_suffix, null, function () {
                    var _r380_t1;
                    var _r380_t0 = this;
                    var r380_currentGlyph = _r380_t0;
                    r380_currentGlyph.include(r271_MarkSet.p());
                    r380_currentGlyph.setBaseAnchor('overlay', r271_Middle, r271_XH / 2);
                    var r380_dfSub = r271_DivFrame(0.75, 2);
                    r380_currentGlyph.include(r271_bodyShape(r380_dfSub, r271_XH));
                    r380_currentGlyph.include(r271_hookShape(r380_dfSub, r271_XH - r271_hookStart));
                    r380_currentGlyph.include(r271_PalatalHook.r(new r271_xn$NamedParameterPair$2Lrc9b('x', r271_RightSB), new r271_xn$NamedParameterPair$2Lrc9b('y', 0), new r271_xn$NamedParameterPair$2Lrc9b('xLink', r380_dfSub.rightSB), new r271_xn$NamedParameterPair$2Lrc9b('refSw', r380_dfSub.mvs), new r271_xn$NamedParameterPair$2Lrc9b('maskOut', r271_intersection(r271_MaskBelow(0), r271_MaskLeft(r380_dfSub.rightSB)))));
                    return void 0;
                });
                r271_xn$createAndSaveGlyphImpl$2Lrc3c('gBar.' + r271_suffix, null, function () {
                    var _r393_t1;
                    var _r393_t0 = this;
                    var r393_currentGlyph = _r393_t0;
                    r393_currentGlyph.include(r271_xn$referglyph$1aao('g.' + r271_suffix), r271_AS_BASE, r271_ALSO_METRICS);
                    r393_currentGlyph.include(r271_OverlayW(r271_AdviceStroke2(2, 4, r271_XH)));
                    return void 0;
                });
                return r271_xn$createAndSaveGlyphImpl$2Lrc3c('gScriptCrossedTail.' + r271_suffix, null, function () {
                    var _r398_t1;
                    var _r398_t0 = this;
                    var r398_currentGlyph = _r398_t0;
                    r398_currentGlyph.include(r271_MarkSet.p());
                    r398_currentGlyph.setBaseAnchor('overlay', r271_Middle, r271_XH / 2);
                    var r398_df = r271_DivFrame(1);
                    r398_currentGlyph.include(r271_bodyShape(r398_df, r271_XH));
                    r398_currentGlyph.include(r271_SingleStorey.CrossedHook(r398_df, r271_XH - r271_hookStart));
                    return void 0;
                });
            }());
        }
        r271_xn$selectvariant$7Hrq('g', 'g');
        r271_xn$linkreducedvariant$5sIl8('g/sansSerif', 'g', r1_MathSansSerif);
        r271_turned('turng', 7543, 'g', r271_Middle, r1_mix(r271_Descender, r271_XH, 0.5));
        r271_xn$selectvariant$7Hrq('gBar', 485, new r271_xn$NamedParameterPair$2Lrc9b('follow', 'g'));
        r271_xn$selectvariant$7Hrq('gScript/hookTopBase', null, new r271_xn$NamedParameterPair$2Lrc9b('shapeFrom', 'g'));
        r271_xn$selectvariant$7Hrq('gScript', 609, new r271_xn$NamedParameterPair$2Lrc9b('shapeFrom', 'g'), new r271_xn$NamedParameterPair$2Lrc9b('follow', 'gScript'));
        r271_xn$selectvariant$7Hrq('GScript', 42924, new r271_xn$NamedParameterPair$2Lrc9b('follow', 'gScript'));
        r271_xn$selectvariant$7Hrq('gPalatalHook', 7555, new r271_xn$NamedParameterPair$2Lrc9b('follow', 'gScript'));
        r271_xn$selectvariant$7Hrq('gScriptCrossedTail', 43830);
        r271_alias('cyrl/de.SRB', null, 'gScript');
        r271_alias('cyrl/de.BGR', null, 'gScript');
        r271_xn$derivecomposites$7Hrq('gScriptHookTop', 608, 'gScript/hookTopBase', r271_TopHook.rBarOuter(r271_RightSB, 0, r271_XH));
        var _r271_t12 = r271_xn$Capture$2Lrc8['Letter-Blackboard'].resolve();
        var r271_BBS = _r271_t12.BBS;
        var r271_BBD = _r271_t12.BBD;
        var r271_BBBarRight = _r271_t12.BBBarRight;
        return r271_xn$createAndSaveGlyphImpl$2Lrc3c('mathbb/g', 120152, function () {
            var _r412_t1;
            var _r412_t0 = this;
            var r412_currentGlyph = _r412_t0;
            r412_currentGlyph.include(r271_MarkSet.p());
            r412_currentGlyph.include(r271_intersection(r271_OShapeOutline.NoOvershoot(r271_XH, 0, r271_SB, r271_RightSB - r271_BBD - r271_BBS * r271_HVContrast), r271_VBar.l(r271_SB + r271_BBD + r271_OX, 0, r271_XH, r271_BBS)));
            r412_currentGlyph.include(r271_OBarRight.shape(new r271_xn$NamedParameterPair$2Lrc9b('left', r271_SB), new r271_xn$NamedParameterPair$2Lrc9b('right', r271_RightSB - r271_BBD), new r271_xn$NamedParameterPair$2Lrc9b('sw', r271_BBS)));
            r412_currentGlyph.include(r271_SingleStorey.RoundHookT(r271_dispiro, r271_DivFrame(1), r271_XH, 0, r271_BBS));
            r412_currentGlyph.include(r271_HBar.t(r271_RightSB - r271_BBD, r271_RightSB, r271_XH, r271_BBS));
            r412_currentGlyph.include(r271_intersection(r271_VBar.r(r271_RightSB - r271_BBD, r271_Descender, r271_XH, r271_BBS), r271_SingleStorey.RoundHookT(r271_xn$spirooutline$1aao, r271_DivFrame(1), r271_XH, 1, r271_BBS)));
            return void 0;
        });
    });
    return void 0;
});
