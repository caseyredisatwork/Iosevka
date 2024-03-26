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
    r270_xn$Capture_Ext$2Lrc2b['$defineGlyphBlockImpl$'](r270_xn$Capture_Ext$2Lrc2b, 'Letter-Latin-Upper-Y', function (r271_xn$Capture$2Lrc8, r271_xn$ExportCapture$2Lrc4b) {
        var r271_suffix, r271_bodyType, r271_slabType, _r271_t12, _r271_t14, _r271_t15, _r271_t16, _r271_tag17;
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
        var r271_HVContrast = _r271_t1.HVContrast;
        var r271_O = _r271_t1.O;
        var r271_OX = _r271_t1.OX;
        var r271_TailX = _r271_t1.TailX;
        var r271_TailY = _r271_t1.TailY;
        var r271_Stroke = _r271_t1.Stroke;
        var r271_SLAB = _r271_t1.SLAB;
        var r271_HalfStroke = _r271_t1.HalfStroke;
        var r271_RightSB = _r271_t1.RightSB;
        var r271_Middle = _r271_t1.Middle;
        var r271_SideJut = _r271_t1.SideJut;
        var r271_AdviceStroke = _r271_t1.AdviceStroke;
        var r271_OverlayStroke = _r271_t1.OverlayStroke;
        var r271_MidJutSide = _r271_t1.MidJutSide;
        var _r271_t2 = r271_xn$Capture$2Lrc8.SpiroFns;
        var r271_g4 = _r271_t2.g4;
        var r271_straight = _r271_t2.straight;
        var r271_widths = _r271_t2.widths;
        var r271_unimportant = _r271_t2.unimportant;
        var r271_quadControls = _r271_t2.quadControls;
        var r271_dispiro = _r271_t2.dispiro;
        var _r271_t3 = r271_xn$Capture$2Lrc8.BooleFns;
        var r271_union = _r271_t3.union;
        var r271_intersection = _r271_t3.intersection;
        var r271_difference = _r271_t3.difference;
        var _r271_t4 = r271_xn$Capture$2Lrc8.CommonShapes.resolve();
        var r271_Rect = _r271_t4.Rect;
        var r271_HSerif = _r271_t4.HSerif;
        var r271_HBar = _r271_t4.HBar;
        var r271_HOverlayBar = _r271_t4.HOverlayBar;
        var r271_VBar = _r271_t4.VBar;
        var r271_ExtLineCenter = _r271_t4.ExtLineCenter;
        var _r271_t5 = r271_xn$Capture$2Lrc8['Common-Derivatives'].resolve();
        var r271_xn$selectvariant$7Hrq = _r271_t5['select-variant'];
        var r271_xn$referglyph$1aao = _r271_t5['refer-glyph'];
        var r271_alias = _r271_t5.alias;
        var r271_turned = _r271_t5.turned;
        var r271_xn$derivecomposites$7Hrq = _r271_t5['derive-composites'];
        var r271_xn$linkreducedvariant$5sIl8 = _r271_t5['link-reduced-variant'];
        var _r271_t6 = r271_xn$Capture$2Lrc8['Letter-Shared'].resolve();
        var r271_CreateAccentedComposition = _r271_t6.CreateAccentedComposition;
        var _r271_t7 = r271_xn$Capture$2Lrc8['Letter-Latin-X'].resolve();
        var r271_HalfXStrand = _r271_t7.HalfXStrand;
        var _r271_t8 = r271_xn$Capture$2Lrc8['Letter-Shared'].resolve();
        var r271_SetGrekUpperTonos = _r271_t8.SetGrekUpperTonos;
        var _r271_t9 = r271_xn$Capture$2Lrc8['Letter-Shared-Shapes'].resolve();
        var r271_SerifFrame = _r271_t9.SerifFrame;
        var r271_WithSerifOverflowMask = _r271_t9.WithSerifOverflowMask;
        var r271_xn$BODYCURLY$5sIl = 0;
        var r271_xn$BODYSTRAIGHT$5sIl = 1;
        var r271_xn$SLABNONE$5sIl = 0;
        var r271_xn$SLABALL$5sIl = 1;
        var r271_xn$SLABBASE$5sIl = 2;
        var r271_xn$SLABMOTION$5sIl = 3;
        var r271_YCrossPos = function (r278_top, r278_bot) {
            var _r278_t0, _r278_t1;
            return r1_mix(r278_bot, r278_top, 0.4);
        };
        var r271_YSlabs = function (r279_slabType, r279_top, r279_bot) {
            var _r279_t0, _r279_t1;
            return function () {
                var _r281_t2;
                var _r281_t1 = this;
                var r281_currentGlyph = _r281_t1;
                var r281_sf = r271_SerifFrame.fromDf(r271_DivFrame(1), r279_top, 0);
                var _r281_t0 = r279_slabType;
                if (_r281_t0 === r271_xn$SLABALL$5sIl) {
                    r281_currentGlyph.include(function () {
                        var _r286_t1;
                        var _r286_t0 = this;
                        var r286_currentGlyph = _r286_t0;
                        r286_currentGlyph.include(r281_sf.lt.full, true, true);
                        r286_currentGlyph.include(r281_sf.rt.full);
                        return void 0;
                    });
                    r281_currentGlyph.include(r271_HSerif.mb(r271_Middle, r279_bot, r271_MidJutSide));
                } else if (_r281_t0 === r271_xn$SLABMOTION$5sIl) {
                    r281_currentGlyph.include(r281_sf.lt.outer);
                } else if (_r281_t0 === r271_xn$SLABBASE$5sIl) {
                    r281_currentGlyph.include(r271_HSerif.mb(r271_Middle, r279_bot, r271_MidJutSide));
                } else
                    void 0;
                return void 0;
            };
        };
        var r271_YShape = function (r290_bodyType, r290_slabType, r290_top, r290_bot) {
            var _r290_t0, _r290_t1;
            return function () {
                var _r292_t1;
                var _r292_t0 = this;
                var r292_currentGlyph = _r292_t0;
                var r292_cross = r271_YCrossPos(r290_top, r290_bot);
                var r292_maskLT = r290_slabType === r271_xn$SLABALL$5sIl || r290_slabType === r271_xn$SLABMOTION$5sIl;
                var r292_maskRT = r290_slabType === r271_xn$SLABALL$5sIl;
                r292_currentGlyph.include(r271_tagged('strokeLT', r271_WithSerifOverflowMask(r292_maskLT, r290_top, r290_bot, r271_SB, r271_RightSB, r271_HalfXStrand(r290_bodyType, r271_SLAB, r271_SB, r290_top, r271_Middle, r292_cross, 0.1, 0.4, 0.28))));
                r292_currentGlyph.include(r271_tagged('strokeRT', r271_WithSerifOverflowMask(r292_maskRT, r290_top, r290_bot, r271_SB, r271_RightSB, r271_HalfXStrand(r290_bodyType, r271_SLAB, r271_RightSB, r290_top, r271_Middle, r292_cross, 0.1, 0.4, 0.28))));
                r292_currentGlyph.include(r271_tagged('strokeVMid', r271_VBar.m(r271_Middle, r290_bot, r292_cross + r271_HalfStroke)));
                r292_currentGlyph.setBaseAnchor('overlay', r271_Middle, r292_cross);
                return void 0;
            };
        };
        var r271_YenOverlayShape = function (r297_slabType) {
            var _r297_t0, _r297_t1;
            return function () {
                var r299_otherwise, _r299_t1, _r299_t3;
                var _r299_t2 = this;
                var r299_currentGlyph = _r299_t2;
                var _r299_t0 = (_r299_t1 = r297_slabType, _r299_t1 === r271_xn$SLABALL$5sIl || _r299_t1 === r271_xn$SLABBASE$5sIl ? [
                    0.25,
                    r271_Stroke
                ] : (r299_otherwise = _r299_t1, [
                    0,
                    0
                ]));
                var r299_ks = _r299_t0[0];
                var r299_bot = _r299_t0[1];
                r299_currentGlyph.include(r271_HOverlayBar(r271_SB, r271_RightSB, r1_mix(r299_bot, r271_YCrossPos(r271_CAP, 0), 0.5) - r271_OverlayStroke * r299_ks));
                r299_currentGlyph.include(r271_HOverlayBar(r271_SB, r271_RightSB, r1_mix(r299_bot, r271_YCrossPos(r271_CAP, 0), 1)));
                return void 0;
            };
        };
        var r271_YHookLeftHookedStroke = function (r302_top, r302_bot) {
            var _r302_t0, _r302_t1;
            var r302_cross = r271_YCrossPos(r302_top, r302_bot);
            return r271_dispiro(r271_widths.lhs(), r271_straight.right.start(r271_SB - r271_TailX / 3, r302_top - r271_Stroke - r271_O), r271_g4(r271_SB + r271_TailX / 3, r302_top - r271_TailY, r271_widths.lhs(r271_AdviceStroke(2.75))), r271_quadControls(0.55, 0.7, 32, r271_unimportant), r271_g4(r271_Middle - r271_Stroke / 2 * r271_HVContrast, r302_cross, r271_widths.lhs(r271_AdviceStroke(3.5))));
        };
        var r271_YHookRightHookedStroke = function (r303_top, r303_bot) {
            var _r303_t0, _r303_t1;
            var r303_cross = r271_YCrossPos(r303_top, r303_bot);
            return r271_dispiro(r271_widths.rhs(), r271_straight.left.start(r271_RightSB + r271_TailX / 3, r303_top - r271_Stroke - r271_O), r271_g4(r271_RightSB - r271_TailX / 3, r303_top - r271_TailY, r271_widths.rhs(r271_AdviceStroke(2.75))), r271_quadControls(0.55, 0.7, 32, r271_unimportant), r271_g4(r271_Middle + r271_Stroke / 2 * r271_HVContrast, r303_cross, r271_widths.rhs(r271_AdviceStroke(3.5))));
        };
        var r271_YHookTopShape = function (r304_bodyType, r304_slabType, r304_top, r304_bot) {
            var _r304_t0, _r304_t1;
            return function () {
                var _r306_t1;
                var _r306_t0 = this;
                var r306_currentGlyph = _r306_t0;
                r306_currentGlyph.include(r271_YShape(r304_bodyType, r304_slabType, r304_top, r304_bot));
                r306_currentGlyph.ejectTagged('strokeRT');
                r306_currentGlyph.include(r271_YHookRightHookedStroke(r304_top, r304_bot));
                return void 0;
            };
        };
        var r271_UpsilonHookedSymbolShape = function (r310_top, r310_bot) {
            var _r310_t0, _r310_t1;
            return function () {
                var _r312_t1;
                var _r312_t0 = this;
                var r312_currentGlyph = _r312_t0;
                var r312_cross = r271_YCrossPos(r310_top, r310_bot);
                r312_currentGlyph.include(r271_VBar.m(r271_Middle, r310_bot, r312_cross + r271_HalfStroke));
                r312_currentGlyph.include(r271_YHookLeftHookedStroke(r310_top, r310_bot));
                r312_currentGlyph.include(r271_YHookRightHookedStroke(r310_top, r310_bot));
                return void 0;
            };
        };
        var r271_YConfig = {
            'straightSerifless': [
                r271_xn$BODYSTRAIGHT$5sIl,
                r271_xn$SLABNONE$5sIl
            ],
            'curlySerifless': [
                r271_xn$BODYCURLY$5sIl,
                r271_xn$SLABNONE$5sIl
            ],
            'straightBaseSerifed': [
                r271_xn$BODYSTRAIGHT$5sIl,
                r271_xn$SLABBASE$5sIl
            ],
            'curlyBaseSerifed': [
                r271_xn$BODYCURLY$5sIl,
                r271_xn$SLABBASE$5sIl
            ],
            'straightMotionSerifed': [
                r271_xn$BODYSTRAIGHT$5sIl,
                r271_xn$SLABMOTION$5sIl
            ],
            'curlyMotionSerifed': [
                r271_xn$BODYCURLY$5sIl,
                r271_xn$SLABMOTION$5sIl
            ],
            'straightSerifed': [
                r271_xn$BODYSTRAIGHT$5sIl,
                r271_xn$SLABALL$5sIl
            ],
            'curlySerifed': [
                r271_xn$BODYCURLY$5sIl,
                r271_xn$SLABALL$5sIl
            ]
        };
        var _r271_t10 = Object.entries(r271_YConfig)[Symbol.iterator]();
        var _r271_t11 = void 0;
        while (!(_r271_t11 = _r271_t10.next()).done) {
            _r271_t12 = _r271_t11.value;
            r271_suffix = _r271_t12[0];
            r271_bodyType = _r271_t12[1][0];
            r271_slabType = _r271_t12[1][1];
            _r271_t12[1];
            (function () {
                r271_xn$createAndSaveGlyphImpl$2Lrc3c('Y.' + r271_suffix, null, function () {
                    var _r321_t1;
                    var _r321_t0 = this;
                    var r321_currentGlyph = _r321_t0;
                    r321_currentGlyph.include(r271_MarkSet.capital());
                    r321_currentGlyph.include(r271_YShape(r271_bodyType, r271_slabType, r271_CAP, 0));
                    r321_currentGlyph.include(r271_YSlabs(r271_slabType, r271_CAP, 0));
                    return void 0;
                });
                r271_xn$createAndSaveGlyphImpl$2Lrc3c('grek/Upsilon.' + r271_suffix, null, function () {
                    var _r327_t1;
                    var _r327_t0 = this;
                    var r327_currentGlyph = _r327_t0;
                    r327_currentGlyph.include(r271_xn$referglyph$1aao('Y.' + r271_suffix), r271_AS_BASE, r271_ALSO_METRICS);
                    r327_currentGlyph.include(r271_SetGrekUpperTonos(r271_slabType === r271_xn$SLABNONE$5sIl || r271_slabType === r271_xn$SLABBASE$5sIl ? r271_OX : r271_OX - r271_SideJut));
                    return void 0;
                });
                r271_xn$createAndSaveGlyphImpl$2Lrc3c('smcpY.' + r271_suffix, null, function () {
                    var _r332_t1;
                    var _r332_t0 = this;
                    var r332_currentGlyph = _r332_t0;
                    r332_currentGlyph.include(r271_MarkSet.e());
                    r332_currentGlyph.include(r271_YShape(r271_bodyType, r271_slabType, r271_XH, 0));
                    r332_currentGlyph.include(r271_YSlabs(r271_slabType, r271_XH, 0));
                    return void 0;
                });
                r271_xn$createAndSaveGlyphImpl$2Lrc3c('YHookTop.' + r271_suffix, null, function () {
                    var _r338_t1;
                    var _r338_t0 = this;
                    var r338_currentGlyph = _r338_t0;
                    r338_currentGlyph.include(r271_MarkSet.capital());
                    r338_currentGlyph.include(r271_YHookTopShape(r271_bodyType, r271_slabType, r271_CAP, 0));
                    r338_currentGlyph.include(r271_YSlabs(r271_slabType, r271_CAP, 0));
                    r338_currentGlyph.ejectTagged('serifRT');
                    return void 0;
                });
                r271_xn$createAndSaveGlyphImpl$2Lrc3c('cyrl/ue.' + r271_suffix, null, function () {
                    var _r345_t1;
                    var _r345_t0 = this;
                    var r345_currentGlyph = _r345_t0;
                    r345_currentGlyph.include(r271_MarkSet.p());
                    r345_currentGlyph.include(r271_YShape(r271_bodyType, r271_slabType, r271_XH, r271_Descender));
                    r345_currentGlyph.include(r271_YSlabs(r271_slabType, r271_XH, r271_Descender));
                    return void 0;
                });
                r271_xn$createAndSaveGlyphImpl$2Lrc3c('grek/upsilonHookedSymbolShape.' + r271_suffix, null, function () {
                    var _r351_t1;
                    var _r351_t0 = this;
                    var r351_currentGlyph = _r351_t0;
                    r351_currentGlyph.include(r271_MarkSet.capital());
                    r351_currentGlyph.include(r271_UpsilonHookedSymbolShape(r271_CAP, 0));
                    r351_currentGlyph.include(r271_YSlabs(r271_slabType, r271_CAP, 0));
                    r351_currentGlyph.ejectTagged('serifLT');
                    r351_currentGlyph.ejectTagged('serifRT');
                    r351_currentGlyph.include(r271_SetGrekUpperTonos(r271_OX - r271_TailX / 3));
                    return void 0;
                });
                r271_xn$createAndSaveGlyphImpl$2Lrc3c('YStroke.' + r271_suffix, null, function () {
                    var _r360_t1;
                    var _r360_t0 = this;
                    var r360_currentGlyph = _r360_t0;
                    r360_currentGlyph.include(r271_xn$referglyph$1aao('Y.' + r271_suffix), r271_AS_BASE, r271_ALSO_METRICS);
                    var r360_b = r271_YCrossPos(r271_CAP, 0);
                    var r360_t = r271_CAP - (r271_slabType === r271_xn$SLABALL$5sIl || r271_slabType === r271_xn$SLABMOTION$5sIl ? r271_Stroke : 0);
                    r360_currentGlyph.include(r271_HOverlayBar(r1_mix(0, r271_SB, 0.5), r1_mix(r271_Width, r271_RightSB, 0.5), r1_mix(r360_b, r360_t, 0.5), Math.min(r271_OverlayStroke, (r360_t - r360_b) * 0.625)));
                    return void 0;
                });
                return r271_xn$createAndSaveGlyphImpl$2Lrc3c('currency/yenSign.' + r271_suffix, null, function () {
                    var _r365_t1;
                    var _r365_t0 = this;
                    var r365_currentGlyph = _r365_t0;
                    r365_currentGlyph.include(r271_xn$referglyph$1aao('Y.' + r271_suffix), r271_AS_BASE, r271_ALSO_METRICS);
                    r365_currentGlyph.include(r271_YenOverlayShape(r271_slabType));
                    return void 0;
                });
            }());
        }
        r271_xn$selectvariant$7Hrq('Y', 'Y');
        r271_xn$linkreducedvariant$5sIl8('Y/sansSerif', 'Y', r1_MathSansSerif);
        r271_xn$selectvariant$7Hrq('YHookTop', 435, new r271_xn$NamedParameterPair$2Lrc9b('follow', 'Y'));
        r271_xn$selectvariant$7Hrq('smcpY', 655, new r271_xn$NamedParameterPair$2Lrc9b('follow', 'Y'));
        r271_xn$selectvariant$7Hrq('cyrl/ue', 1199, new r271_xn$NamedParameterPair$2Lrc9b('follow', 'Y'));
        r271_xn$selectvariant$7Hrq('grek/upsilonHookedSymbolShape', 978);
        r271_turned('turnSansSerifY', 8516, 'Y/sansSerif', r271_Middle, r271_CAP / 2);
        r271_xn$selectvariant$7Hrq('grek/Upsilon', 933, new r271_xn$NamedParameterPair$2Lrc9b('follow', 'Y'));
        r271_xn$linkreducedvariant$5sIl8('grek/Upsilon/sansSerif', 'grek/Upsilon', r1_MathSansSerif, new r271_xn$NamedParameterPair$2Lrc9b('follow', 'Y/sansSerif'));
        r271_alias('cyrl/Ue', 1198, 'Y');
        r271_xn$selectvariant$7Hrq('currency/yenSign', 165, new r271_xn$NamedParameterPair$2Lrc9b('follow', 'Y'));
        r271_xn$createAndSaveGlyphImpl$2Lrc3c('YStrokeOverlay', null, r271_HOverlayBar(r1_mix(0, r271_SB, 0.5), r1_mix(r271_Width, r271_RightSB, 0.5), r1_mix(0, r271_CAP, 0.75)));
        r271_xn$derivecomposites$7Hrq('YStroke', 590, 'Y', 'YStrokeOverlay');
        r271_CreateAccentedComposition('cyrl/KazakhShortU', 1200, 'cyrl/Ue', 'barOver');
        r271_CreateAccentedComposition('cyrl/KazakhShortu', 1201, 'cyrl/ue', 'barOver');
        var _r271_t13 = r271_xn$Capture$2Lrc8['Letter-Blackboard'].resolve();
        var r271_BBS = _r271_t13.BBS;
        var r271_BBD = _r271_t13.BBD;
        return r271_xn$createAndSaveGlyphImpl$2Lrc3c('mathbb/Y', 120144, function () {
            var _r378_t1;
            var _r378_t0 = this;
            var r378_currentGlyph = _r378_t0;
            var r378_yCross = r271_CAP * 0.4;
            r378_currentGlyph.include(r271_MarkSet.capital());
            r378_currentGlyph.include(r271_HBar.t(r271_SB, r271_SB + r271_BBD, r271_CAP, r271_BBS));
            r378_currentGlyph.include(r271_intersection(r271_Rect(r271_CAP, 0, -r271_Width, 2 * r271_Width), r271_union(r271_difference(r271_ExtLineCenter(1, r271_BBS, r271_SB, r271_CAP, r271_Middle - r271_BBD / 2, r378_yCross), r271_Rect(r271_CAP, 0, r271_Middle - r271_BBD / 2 + r271_BBS / 2 * r271_HVContrast, r271_Width * 2)), r271_difference(r271_ExtLineCenter(1, r271_BBS, r271_SB + r271_BBD, r271_CAP, r271_Middle + r271_BBD / 2, r378_yCross), r271_Rect(r271_CAP, 0, r271_Middle + r271_BBD / 2 + r271_BBS / 2 * r271_HVContrast, r271_Width * 2)))));
            r378_currentGlyph.include(r271_intersection(r271_Rect(r271_CAP, r378_yCross, -r271_Width, 2 * r271_Width), r271_ExtLineCenter(1, r271_BBS, r271_RightSB, r271_CAP, r271_Middle + r271_BBD / 2, r378_yCross)));
            r378_currentGlyph.include(r271_HBar.b(r271_Middle - r271_BBD / 2, r271_Middle + r271_BBD / 2, 0, r271_BBS));
            r378_currentGlyph.include(r271_union(r271_VBar.m(r271_Middle - r271_BBD / 2, 0, r378_yCross, r271_BBS), r271_VBar.m(r271_Middle + r271_BBD / 2, 0, r378_yCross, r271_BBS)));
            return void 0;
        });
    });
    return void 0;
});
