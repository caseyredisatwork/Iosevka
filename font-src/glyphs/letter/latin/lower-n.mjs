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
var r1_clamp = _r1_t8.clamp;
var r1_fallback = _r1_t8.fallback;
var r1_SuffixCfg = _r1_t8.SuffixCfg;
var _r1_t9 = _s0_t1;
var r1_Dotless = _r1_t9.Dotless;
var r1_CvDecompose = _r1_t9.CvDecompose;
var r1_MathSansSerif = _r1_t9.MathSansSerif;
var r1_Joining = _r1_t9.Joining;
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
    r270_xn$Capture_Ext$2Lrc2b['$defineGlyphBlockImpl$'](r270_xn$Capture_Ext$2Lrc2b, 'Letter-Latin-Lower-N', function (r271_xn$Capture$2Lrc8, r271_xn$ExportCapture$2Lrc4b) {
        var r271_suffix, r271_Body, r271_tailed, r271_sLT, r271_sLB, r271_sRB, _r271_t13, _r271_t15, _r271_t16, _r271_t17, _r271_tag18, _r271_t19, _r271_tag20;
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
        var r271_OX = _r271_t1.OX;
        var r271_HookX = _r271_t1.HookX;
        var r271_Stroke = _r271_t1.Stroke;
        var r271_Jut = _r271_t1.Jut;
        var r271_HalfStroke = _r271_t1.HalfStroke;
        var r271_RightSB = _r271_t1.RightSB;
        var r271_Middle = _r271_t1.Middle;
        var r271_SideJut = _r271_t1.SideJut;
        var r271_SmallArchDepthA = _r271_t1.SmallArchDepthA;
        var r271_SmallArchDepthB = _r271_t1.SmallArchDepthB;
        var r271_CorrectionOMidS = _r271_t1.CorrectionOMidS;
        var r271_AdviceStroke = _r271_t1.AdviceStroke;
        var r271_ShoulderFine = _r271_t1.ShoulderFine;
        var _r271_t2 = r271_xn$Capture$2Lrc8.SpiroFns;
        var r271_g4 = _r271_t2.g4;
        var r271_flat = _r271_t2.flat;
        var r271_curl = _r271_t2.curl;
        var r271_straight = _r271_t2.straight;
        var r271_widths = _r271_t2.widths;
        var r271_heading = _r271_t2.heading;
        var r271_archv = _r271_t2.archv;
        var r271_arcvh = _r271_t2.arcvh;
        var r271_dispiro = _r271_t2.dispiro;
        var _r271_t3 = r271_xn$Capture$2Lrc8.BooleFns;
        var r271_intersection = _r271_t3.intersection;
        var _r271_t4 = r271_xn$Capture$2Lrc8.CommonShapes.resolve();
        var r271_HSerif = _r271_t4.HSerif;
        var r271_HBar = _r271_t4.HBar;
        var r271_VBar = _r271_t4.VBar;
        var r271_WithTransform = _r271_t4.WithTransform;
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
        var _r271_t8 = r271_xn$Capture$2Lrc8['Letter-Shared-Shapes'].resolve();
        var r271_CurlyTail = _r271_t8.CurlyTail;
        var r271_nShoulder = _r271_t8.nShoulder;
        var r271_nShoulderKnots = _r271_t8.nShoulderKnots;
        var r271_nShoulderMask = _r271_t8.nShoulderMask;
        var _r271_t9 = r271_xn$Capture$2Lrc8['Letter-Shared-Shapes'].resolve();
        var r271_RightwardTailedBar = _r271_t9.RightwardTailedBar;
        var r271_DToothlessRise = _r271_t9.DToothlessRise;
        var r271_DMBlend = _r271_t9.DMBlend;
        var _r271_t10 = r271_xn$Capture$2Lrc8['Letter-Shared-Shapes'].resolve();
        var r271_CyrDescender = _r271_t10.CyrDescender;
        var r271_PalatalHook = _r271_t10.PalatalHook;
        var r271_RetroflexHook = _r271_t10.RetroflexHook;
        var r271_EngHook = _r271_t10.EngHook;
        var r271_AdjustTrailingAnchor = function () {
            var _r279_t0, _r279_t1;
            return function () {
                var _r281_t1;
                var _r281_t0 = this;
                var r281_currentGlyph = _r281_t0;
                var r281_trAnchor = r281_currentGlyph.baseAnchors.trailing;
                if (r281_trAnchor)
                    r281_currentGlyph.setBaseAnchor('trailing', r281_trAnchor.x + r271_SideJut, r281_trAnchor.y);
                return void 0;
            };
        };
        var r271_NHTB = function (r283_top) {
            var _r283_t0, _r283_t1;
            return r271_VBar.l(r271_SB, 0, r283_top);
        };
        var r271_NTopLeftSerif = function (r284_top) {
            var _r284_t0, _r284_t1;
            return r271_tagged('serifLT', r271_HSerif.lt(r271_SB, r284_top, r271_SideJut));
        };
        var r271_NBottomLeftSerif = function (r285_y) {
            var _r285_t0, _r285_t1;
            return r271_tagged('serifLB', r271_HSerif.mb(r271_SB + r271_HalfStroke * r271_HVContrast, r285_y, r271_Jut));
        };
        var r271_NBottomLeftOuterSerif = function (r286_y) {
            var _r286_t0, _r286_t1;
            return r271_tagged('serifLB', r271_HSerif.lb(r271_SB, r286_y, r271_SideJut));
        };
        var r271_NBottomRightSerifUpright = function (r287_y) {
            var _r287_t0, _r287_t1;
            return function () {
                var _r289_t1;
                var _r289_t0 = this;
                var r289_currentGlyph = _r289_t0;
                r289_currentGlyph.include(r271_tagged('serifRB', r271_HSerif.mb(r271_RightSB - r271_HalfStroke * r271_HVContrast, r287_y, r271_Jut)));
                r289_currentGlyph.include(r271_AdjustTrailingAnchor());
                return void 0;
            };
        };
        var r271_NBottomRightSerifItalic = function (r292_y) {
            var _r292_t0, _r292_t1;
            return function () {
                var _r294_t1;
                var _r294_t0 = this;
                var r294_currentGlyph = _r294_t0;
                r294_currentGlyph.include(r271_tagged('serifRB', r271_HSerif.rb(r271_RightSB, r292_y, r271_SideJut)));
                r294_currentGlyph.include(r271_AdjustTrailingAnchor());
                return void 0;
            };
        };
        var r271_EaredBody = function (r297_top, r297_left, r297_right, r297_yBR, r297_sw) {
            var _r297_t0, _r297_t1;
            return function () {
                var _r299_t1;
                var _r299_t0 = this;
                var r299_currentGlyph = _r299_t0;
                r299_currentGlyph.include(r271_VBar.l(r297_left, 0, r297_top, r297_sw));
                r299_currentGlyph.include(r271_nShoulder(new r271_xn$NamedParameterPair$2Lrc9b('left', r297_left + r297_sw * r271_HVContrast), new r271_xn$NamedParameterPair$2Lrc9b('right', r297_right), new r271_xn$NamedParameterPair$2Lrc9b('top', r297_top), new r271_xn$NamedParameterPair$2Lrc9b('bottom', r297_yBR), new r271_xn$NamedParameterPair$2Lrc9b('fine', r271_ShoulderFine), new r271_xn$NamedParameterPair$2Lrc9b('stroke', r297_sw)));
                return void 0;
            };
        };
        var r271_EarlessCornerBody = function (r308_top, r308_left, r308_right, r308_yBR, r308_sw) {
            var _r308_t0, _r308_t1;
            return function () {
                var _r310_t1;
                var _r310_t0 = this;
                var r310_currentGlyph = _r310_t0;
                r310_currentGlyph.include(r271_VBar.l(r308_left, 0, r308_top - r271_DToothlessRise, r308_sw));
                r310_currentGlyph.include(r271_dispiro(r271_widths.rhs(r308_sw), r271_g4(r308_left, r308_top - r271_DToothlessRise), r271_g4(r1_mix(r308_left, r308_right, 0.5) - r271_CorrectionOMidS, r308_top - r271_O), r271_archv(), r271_flat(r308_right, r308_top - r271_SmallArchDepthB), r271_curl(r308_right, r308_yBR, r271_heading(r271_Downward))));
                return void 0;
            };
        };
        var r271_EarlessRoundedBody = function (r313_top, r313_left, r313_right, r313_yBR, r313_sw) {
            var _r313_t0, _r313_t1;
            return function () {
                var _r315_t1;
                var _r315_t0 = this;
                var r315_currentGlyph = _r315_t0;
                r315_currentGlyph.include(r271_dispiro(r271_widths.rhs(r313_sw), r271_flat(r313_left, 0, r271_heading(r271_Upward)), r271_curl(r313_left, r313_top - r271_SmallArchDepthA), r271_arcvh(), r271_g4(r1_mix(r313_left, r313_right, 0.5) - r271_CorrectionOMidS, r313_top - r271_O), r271_archv(), r271_flat(r313_right, r313_top - r271_SmallArchDepthB), r271_curl(r313_right, r313_yBR, r271_heading(r271_Downward))));
                return void 0;
            };
        };
        var r271_EndingTail = function (r317_right, r317_yBot, r317_yBR, r317_sw) {
            var _r317_t0, _r317_t1;
            return function () {
                var _r319_t1;
                var _r319_t0 = this;
                var r319_currentGlyph = _r319_t0;
                r319_currentGlyph.include(r271_RightwardTailedBar(r317_right, r317_yBot, r317_yBR, r317_sw));
                r319_currentGlyph.include(r271_AdjustTrailingAnchor());
                return void 0;
            };
        };
        var r271_NConfig = r1_SuffixCfg.weave({
            '': r271_EaredBody,
            'earlessCorner': r271_EarlessCornerBody,
            'earlessRounded': r271_EarlessRoundedBody,
            'earlessCornerHTB': r271_EarlessCornerBody,
            'earlessRoundedHTB': r271_EarlessRoundedBody
        }, {
            'straight': 0,
            'tailed': 1
        }, function (r322_body, r322_tail) {
            var r322___, _r322_t0, _r322_t1, _r322_t2;
            return {
                'serifless': [
                    void 0,
                    void 0,
                    void 0
                ],
                'topLeftSerifed': [
                    r271_NTopLeftSerif,
                    void 0,
                    void 0
                ],
                'motionSerifed': [
                    r271_NTopLeftSerif,
                    void 0,
                    r322_tail !== 'tailed' ? r271_NBottomRightSerifItalic : void 0
                ],
                'serifed': [
                    (_r322_t0 = r322_body, _r322_t0 === 'earlessCorner' || _r322_t0 === 'earlessRounded' ? void 0 : _r322_t0 === 'earlessCornerHTB' || _r322_t0 === 'earlessRoundedHTB' ? r271_NHTB : (r322___ = _r322_t0, r271_NTopLeftSerif)),
                    r271_NBottomLeftSerif,
                    r322_tail !== 'tailed' ? r271_NBottomRightSerifUpright : void 0
                ]
            };
        });
        var _r271_t11 = Object.entries(r271_NConfig)[Symbol.iterator]();
        var _r271_t12 = void 0;
        while (!(_r271_t12 = _r271_t11.next()).done) {
            _r271_t13 = _r271_t12.value;
            r271_suffix = _r271_t13[0];
            r271_Body = _r271_t13[1][0];
            r271_tailed = _r271_t13[1][1];
            r271_sLT = _r271_t13[1][2][0];
            r271_sLB = _r271_t13[1][2][1];
            r271_sRB = _r271_t13[1][2][2];
            _r271_t13[1][2];
            _r271_t13[1];
            (function () {
                r271_xn$createAndSaveGlyphImpl$2Lrc3c('n.' + r271_suffix, null, function () {
                    var _r328_t1;
                    var _r328_t0 = this;
                    var r328_currentGlyph = _r328_t0;
                    r328_currentGlyph.include(r271_MarkSet.e());
                    r328_currentGlyph.setBaseAnchor('trailing', r271_RightSB, 0);
                    r328_currentGlyph.include(r271_Body(r271_XH, r271_SB, r271_RightSB, r271_tailed ? r271_XH - r271_SmallArchDepthB + r271_O : 0, r271_Stroke));
                    if (r271_tailed)
                        r328_currentGlyph.include(r271_EndingTail(r271_RightSB, 0, r271_XH - r271_SmallArchDepthB, r271_Stroke));
                    if (r271_sLT)
                        r328_currentGlyph.include(r271_sLT(r271_XH));
                    if (r271_sLB)
                        r328_currentGlyph.include(r271_sLB(0));
                    if (r271_sRB)
                        r328_currentGlyph.include(r271_sRB(0));
                    return void 0;
                });
                r271_xn$createAndSaveGlyphImpl$2Lrc3c('eng.' + r271_suffix, null, function () {
                    var _r338_t1;
                    var _r338_t0 = this;
                    var r338_currentGlyph = _r338_t0;
                    r338_currentGlyph.include(r271_MarkSet.p());
                    r338_currentGlyph.include(r271_Body(r271_XH, r271_SB, r271_RightSB, 0, r271_Stroke));
                    r338_currentGlyph.include(r271_EngHook(r271_RightSB, 0, r271_Descender));
                    if (r271_sLT)
                        r338_currentGlyph.include(r271_sLT(r271_XH));
                    if (r271_sLB)
                        r338_currentGlyph.include(r271_sLB(0));
                    return void 0;
                });
                r271_xn$createAndSaveGlyphImpl$2Lrc3c('nHookBottom.' + r271_suffix, null, function () {
                    var _r346_t1;
                    var _r346_t0 = this;
                    var r346_currentGlyph = _r346_t0;
                    r346_currentGlyph.include(r271_MarkSet.e());
                    r346_currentGlyph.include(r271_Body(r271_XH, r271_SB, r271_RightSB, 0, r271_Stroke));
                    r346_currentGlyph.include(r271_RetroflexHook.rExt(r271_RightSB, 0));
                    if (r271_sLT)
                        r346_currentGlyph.include(r271_sLT(r271_XH));
                    if (r271_sLB)
                        r346_currentGlyph.include(r271_sLB(0));
                    return void 0;
                });
                r271_xn$createAndSaveGlyphImpl$2Lrc3c('nCurlyTail.' + r271_suffix, null, function () {
                    var _r354_t1;
                    var _r354_t0 = this;
                    var r354_currentGlyph = _r354_t0;
                    r354_currentGlyph.include(r271_MarkSet.e());
                    var r354_fine = r271_AdviceStroke(4);
                    var r354_rinner = r1_clamp(r271_Width * 0.065, r271_XH * 0.05, r354_fine * 0.35);
                    var r354_sw = r271_AdviceStroke(3);
                    var r354_m1 = Math.min(r271_RightSB, r271_Width - r354_rinner * 2 - r354_fine - r271_OX);
                    var r354_x2 = r1_mix(r271_SB, r354_m1, 0.5);
                    var r354_y2 = -r354_fine;
                    r354_currentGlyph.include(r271_Body(r271_XH, r271_SB, r354_m1, r354_rinner * 2 + r354_fine, r354_sw));
                    r354_currentGlyph.include(r271_dispiro(r271_straight.down.start(r354_m1, r354_rinner * 2 + r354_fine - r271_O, r271_widths.rhs.heading(r354_sw, r271_Downward)), r271_CurlyTail(r354_fine, r354_rinner, r354_m1, 0, r354_m1 + r354_rinner * 2 + r354_fine, r354_x2, r354_y2)));
                    if (r271_sLT)
                        r354_currentGlyph.include(r271_sLT(r271_XH));
                    if (r271_sLB)
                        r354_currentGlyph.include(r271_sLB(0));
                    return void 0;
                });
                r271_xn$createAndSaveGlyphImpl$2Lrc3c('NExt.' + r271_suffix, null, function () {
                    var _r362_t1;
                    var _r362_t0 = this;
                    var r362_currentGlyph = _r362_t0;
                    r362_currentGlyph.include(r271_MarkSet.capDesc());
                    r362_currentGlyph.include(r271_Body(r271_CAP, r271_SB, r271_RightSB, r271_tailed ? r271_CAP - r271_SmallArchDepthB + r271_O : r271_Descender, r271_Stroke));
                    if (r271_tailed)
                        r362_currentGlyph.include(r271_EndingTail(r271_RightSB, r271_Descender, r271_CAP - r271_SmallArchDepthB, r271_Stroke));
                    if (r271_sLT)
                        r362_currentGlyph.include(r271_sLT(r271_CAP));
                    if (r271_sLB)
                        r362_currentGlyph.include(r271_sLB(0));
                    if (r271_sRB)
                        r362_currentGlyph.include(r271_sRB(r271_Descender));
                    return void 0;
                });
                r271_xn$createAndSaveGlyphImpl$2Lrc3c('nExt.' + r271_suffix, null, function () {
                    var _r371_t1;
                    var _r371_t0 = this;
                    var r371_currentGlyph = _r371_t0;
                    r371_currentGlyph.include(r271_MarkSet.p());
                    r371_currentGlyph.include(r271_Body(r271_XH, r271_SB, r271_RightSB, r271_tailed ? r271_XH - r271_SmallArchDepthB + r271_O : r271_Descender, r271_Stroke));
                    if (r271_tailed)
                        r371_currentGlyph.include(r271_EndingTail(r271_RightSB, r271_Descender, r271_XH - r271_SmallArchDepthB, r271_Stroke));
                    if (r271_sLT)
                        r371_currentGlyph.include(r271_sLT(r271_XH));
                    if (r271_sLB)
                        r371_currentGlyph.include(r271_sLB(0));
                    if (r271_sRB)
                        r371_currentGlyph.include(r271_sRB(r271_Descender));
                    return void 0;
                });
                r271_xn$createAndSaveGlyphImpl$2Lrc3c('grek/eta.' + r271_suffix, null, function () {
                    var _r380_t1;
                    var _r380_t0 = this;
                    var r380_currentGlyph = _r380_t0;
                    r380_currentGlyph.include(r271_MarkSet.p());
                    r380_currentGlyph.setBaseAnchor('lf', r271_SB + r271_HalfStroke, 0);
                    r380_currentGlyph.include(r271_Body(r271_XH, r271_SB, r271_RightSB, r271_Descender, r271_Stroke));
                    if (r271_sLT)
                        r380_currentGlyph.include(r271_sLT(r271_XH));
                    return void 0;
                });
                r271_xn$createAndSaveGlyphImpl$2Lrc3c('nCrossedTail.' + r271_suffix, null, function () {
                    var _r387_t1;
                    var _r387_t0 = this;
                    var r387_currentGlyph = _r387_t0;
                    r387_currentGlyph.include(r271_MarkSet.e());
                    var r387_fine = r271_AdviceStroke(4);
                    var r387_rinner = r271_XH * 0.15 - r387_fine * 0.75;
                    var r387_sw = r271_AdviceStroke(3);
                    var r387_m1 = r271_RightSB - r387_sw * r271_HVContrast;
                    var r387_m2 = r1_mix(r271_SB, r271_RightSB, 0.5) - 0.5 * r387_fine * r271_HVContrast;
                    var r387_x2 = r271_RightSB + r271_SideJut;
                    var r387_y2 = r387_rinner * 2 + r387_fine - r271_O;
                    r387_currentGlyph.include(r271_Body(r271_XH, r271_SB, r271_RightSB, r387_y2 + r271_O, r387_sw));
                    r387_currentGlyph.include(r271_dispiro(r271_straight.down.start(r271_RightSB, r387_y2, r271_widths.rhs.heading(r387_sw, r271_Downward)), r271_CurlyTail(r387_fine, r387_rinner, r387_m1, 0, r387_m2, r387_x2, r387_y2, new r271_xn$NamedParameterPair$2Lrc9b('adj', 0.2))));
                    if (r271_sLT)
                        r387_currentGlyph.include(r271_sLT(r271_XH));
                    if (r271_sLB)
                        r387_currentGlyph.include((r387_m2 - (r271_SB + r271_HalfStroke * r271_HVContrast + r271_Jut) > 0.01 * r271_Width ? r271_NBottomLeftSerif : r271_NBottomLeftOuterSerif)(0));
                    return void 0;
                });
                r271_xn$createAndSaveGlyphImpl$2Lrc3c('engCrossedTail.' + r271_suffix, null, function () {
                    var _r396_t1;
                    var _r396_t0 = this;
                    var r396_currentGlyph = _r396_t0;
                    r396_currentGlyph.include(r271_MarkSet.p());
                    r396_currentGlyph.include(r271_Body(r271_XH, r271_SB, r271_RightSB, 0, r271_Stroke));
                    var r396_fine = r271_AdviceStroke(3.5);
                    var r396_rinner = (-r271_Descender - 2 * r396_fine) / 3;
                    var r396_m1 = r271_RightSB - r271_Stroke * r271_HVContrast;
                    var r396_x2 = r1_mix(r271_RightSB, r396_m1, 0.25);
                    var r396_y2 = r271_Descender + r271_O;
                    r396_currentGlyph.include(r271_dispiro(r271_straight.down.start(r271_RightSB, -r271_O, r271_widths.rhs.heading(r271_Stroke, r271_Downward)), r271_CurlyTail(r396_fine, r396_rinner, r396_m1, r271_Descender, r396_m1 - r271_HookX, r396_x2, r396_y2)));
                    if (r271_sLT)
                        r396_currentGlyph.include(r271_sLT(r271_XH));
                    if (r271_sLB)
                        r396_currentGlyph.include(r271_sLB(0));
                    return void 0;
                });
                r271_xn$createAndSaveGlyphImpl$2Lrc3c('RInsular.' + r271_suffix, null, function () {
                    var _r404_t1;
                    var _r404_t0 = this;
                    var r404_currentGlyph = _r404_t0;
                    r404_currentGlyph.include(r271_MarkSet.capDesc());
                    r404_currentGlyph.include(r271_Body(r271_CAP, r271_SB, r271_RightSB, -r271_Descender, r271_Stroke));
                    r404_currentGlyph.include(r271_RetroflexHook.rExt(r271_RightSB, -r271_Descender));
                    r404_currentGlyph.include(r271_VBar.l(r271_SB, r271_Descender, 0));
                    if (r271_sLT)
                        r404_currentGlyph.include(r271_sLT(r271_CAP));
                    if (r271_sLB)
                        r404_currentGlyph.include(r271_sLB(r271_Descender));
                    return void 0;
                });
                return r271_xn$createAndSaveGlyphImpl$2Lrc3c('rInsular.' + r271_suffix, null, function () {
                    var _r413_t1;
                    var _r413_t0 = this;
                    var r413_currentGlyph = _r413_t0;
                    r413_currentGlyph.include(r271_MarkSet.p());
                    r413_currentGlyph.include(r271_Body(r271_XH, r271_SB, r271_RightSB, -r271_Descender, r271_Stroke));
                    r413_currentGlyph.include(r271_RetroflexHook.rExt(r271_RightSB, -r271_Descender));
                    r413_currentGlyph.include(r271_VBar.l(r271_SB, r271_Descender, 0));
                    if (r271_sLT)
                        r413_currentGlyph.include(r271_sLT(r271_XH));
                    if (r271_sLB)
                        r413_currentGlyph.include(r271_sLB(r271_Descender));
                    return void 0;
                });
            }());
        }
        r271_xn$selectvariant$7Hrq('n', 'n');
        r271_xn$linkreducedvariant$5sIl8('n/sansSerif', 'n', r1_MathSansSerif);
        r271_xn$linkreducedvariant$5sIl8('n/descBase', 'n');
        r271_xn$selectvariant$7Hrq('cyrl/pe.italic', new r271_xn$NamedParameterPair$2Lrc9b('shapeFrom', 'n'));
        r271_xn$selectvariant$7Hrq('cyrl/peItalicDescBase', new r271_xn$NamedParameterPair$2Lrc9b('shapeFrom', 'n'));
        r271_alias('cyrl/pe.BGR', null, 'n');
        r271_xn$selectvariant$7Hrq('eng', 331);
        r271_xn$linkreducedvariant$5sIl8('eng/phoneticRight', 'eng');
        r271_xn$selectvariant$7Hrq('nHookBottom', 627, new r271_xn$NamedParameterPair$2Lrc9b('follow', 'eng'));
        r271_xn$selectvariant$7Hrq('nCurlyTail', 565, new r271_xn$NamedParameterPair$2Lrc9b('follow', 'eng'));
        r271_xn$selectvariant$7Hrq('nCrossedTail', 43835, new r271_xn$NamedParameterPair$2Lrc9b('follow', 'eng'));
        r271_xn$selectvariant$7Hrq('engCrossedTail', 43836, new r271_xn$NamedParameterPair$2Lrc9b('follow', 'eng'));
        r271_xn$selectvariant$7Hrq('RInsular', 42882, new r271_xn$NamedParameterPair$2Lrc9b('follow', 'eng'));
        r271_xn$selectvariant$7Hrq('rInsular', 42883, new r271_xn$NamedParameterPair$2Lrc9b('follow', 'eng'));
        r271_xn$selectvariant$7Hrq('grek/eta', 951);
        r271_xn$linkreducedvariant$5sIl8('grek/eta/sansSerif', 'grek/eta', r1_MathSansSerif);
        r271_xn$selectvariant$7Hrq('NExt', 544, new r271_xn$NamedParameterPair$2Lrc9b('follow', 'n'));
        r271_xn$selectvariant$7Hrq('nExt', 414, new r271_xn$NamedParameterPair$2Lrc9b('follow', 'n'));
        r271_xn$derivecomposites$7Hrq('nDescender', 42897, 'n/descBase', r271_CyrDescender.rSideJut(r271_RightSB, 0));
        r271_xn$derivecomposites$7Hrq('nPalatalHook', 7559, 'n/descBase', r271_PalatalHook.rSideJut(r271_RightSB, 0));
        r271_xn$derivecomposites$7Hrq('cyrl/peDescender.italic', null, 'cyrl/peItalicDescBase', r271_CyrDescender.rSideJut(r271_RightSB, 0));
        (function () {
            r271_xn$deriveglyphs$7Hrq('nApostrophe/comma', null, 'commaAbove/asPunctuation', function (r432_src, r432_gr) {
                var _r432_t0, _r432_t1;
                return function () {
                    var _r434_t1;
                    var _r434_t0 = this;
                    var r434_currentGlyph = _r434_t0;
                    r434_currentGlyph.include(r271_WithTransform(r271_Translate(r271_Width + r271_SB - r271_Middle, 0), r271_xn$referglyph$1aao(r432_src)));
                    return void 0;
                };
            });
            return r271_xn$derivecomposites$7Hrq('nApostrophe', 329, 'n', 'nApostrophe/comma');
        }());
        r271_xn$deriveglyphs$7Hrq('nLTail', 626, 'n', function (r436_src, r436_srl) {
            var _r436_t0, _r436_t1;
            return function () {
                var _r438_t1;
                var _r438_t0 = this;
                var r438_currentGlyph = _r438_t0;
                r438_currentGlyph.include(r271_xn$referglyph$1aao(r436_src), r271_AS_BASE, r271_ALSO_METRICS);
                r438_currentGlyph.ejectTagged('serifLB');
                r438_currentGlyph.include(r271_PalatalHook.lExt(r271_SB, 0));
                return void 0;
            };
        });
        var _r271_t14 = r271_xn$Capture$2Lrc8['Letter-Blackboard'].resolve();
        var r271_BBS = _r271_t14.BBS;
        var r271_BBD = _r271_t14.BBD;
        var r271_BBBarLeft = _r271_t14.BBBarLeft;
        return r271_xn$createAndSaveGlyphImpl$2Lrc3c('mathbb/n', 120159, function () {
            var _r445_t1;
            var _r445_t0 = this;
            var r445_currentGlyph = _r445_t0;
            var r445_df = r271_DivFrame(1, 2);
            var r445_bbs = r271_BBS;
            var r445_bbd = r271_BBD;
            r445_currentGlyph.setWidth(r445_df.width);
            r445_currentGlyph.include(r445_df.markSet.e());
            r445_currentGlyph.include(r271_BBBarLeft(r445_df.leftSB, 0, r271_XH));
            r445_currentGlyph.include(r271_HBar.b(r445_df.rightSB - r445_bbd, r445_df.rightSB, 0, r445_bbs));
            r445_currentGlyph.include(r271_nShoulder(new r271_xn$NamedParameterPair$2Lrc9b('stroke', r445_bbs), new r271_xn$NamedParameterPair$2Lrc9b('left', r445_df.leftSB + r445_bbd + r445_bbs * r271_HVContrast), new r271_xn$NamedParameterPair$2Lrc9b('right', r445_df.rightSB), new r271_xn$NamedParameterPair$2Lrc9b('fine', r271_ShoulderFine)));
            r445_currentGlyph.include(r271_intersection(r271_VBar.r(r445_df.rightSB - r445_bbd, 0, r271_XH, r445_bbs), r271_nShoulderMask(new r271_xn$NamedParameterPair$2Lrc9b('stroke', r445_bbs), new r271_xn$NamedParameterPair$2Lrc9b('left', r445_df.leftSB + r445_bbd + r445_bbs * r271_HVContrast + 1), new r271_xn$NamedParameterPair$2Lrc9b('right', r445_df.rightSB - 1), new r271_xn$NamedParameterPair$2Lrc9b('top', r271_XH - 1), new r271_xn$NamedParameterPair$2Lrc9b('fine', r271_ShoulderFine))));
            return void 0;
        });
    });
    return void 0;
});
