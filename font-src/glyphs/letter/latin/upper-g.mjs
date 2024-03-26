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
    r270_xn$Capture_Ext$2Lrc2b['$defineGlyphBlockImpl$'](r270_xn$Capture_Ext$2Lrc2b, 'Letter-Latin-Upper-G', function (r271_xn$Capture$2Lrc8, r271_xn$ExportCapture$2Lrc4b) {
        var r271_suffix, r271_shape, r271_slabType, r271_crossBarShape, _r271_t12, _r271_t14, _r271_t15, _r271_t16, _r271_tag17;
        var _r271_t0 = r271_xn$Capture$2Lrc8;
        var r271_xn$createAndSaveGlyphImpl$2Lrc3c = _r271_t0['$createAndSaveGlyphImpl$'];
        var r271_xn$NamedParameterPair$2Lrc9b = _r271_t0['$NamedParameterPair$'];
        var r271_xn$assignUnicodeImpl$2Lrc8b = _r271_t0['$assignUnicodeImpl$'];
        var r271_xn$execState$2Lrc0b = _r271_t0['$execState$'];
        var r271_MarkSet = _r271_t0.MarkSet;
        var r271_DivFrame = _r271_t0.DivFrame;
        var _r271_t1 = r271_xn$Capture$2Lrc8.Metrics;
        var r271_Width = _r271_t1.Width;
        var r271_SB = _r271_t1.SB;
        var r271_CAP = _r271_t1.CAP;
        var r271_XH = _r271_t1.XH;
        var r271_Ascender = _r271_t1.Ascender;
        var r271_HVContrast = _r271_t1.HVContrast;
        var r271_Upward = _r271_t1.Upward;
        var r271_O = _r271_t1.O;
        var r271_OX = _r271_t1.OX;
        var r271_Hook = _r271_t1.Hook;
        var r271_Stroke = _r271_t1.Stroke;
        var r271_SLAB = _r271_t1.SLAB;
        var r271_RightSB = _r271_t1.RightSB;
        var r271_Middle = _r271_t1.Middle;
        var r271_ArchDepthA = _r271_t1.ArchDepthA;
        var r271_ArchDepthB = _r271_t1.ArchDepthB;
        var r271_SmallArchDepthA = _r271_t1.SmallArchDepthA;
        var r271_SmallArchDepthB = _r271_t1.SmallArchDepthB;
        var r271_CorrectionOMidS = _r271_t1.CorrectionOMidS;
        var r271_AdviceStroke = _r271_t1.AdviceStroke;
        var r271_ShoulderFine = _r271_t1.ShoulderFine;
        var _r271_t2 = r271_xn$Capture$2Lrc8.SpiroFns;
        var r271_g4 = _r271_t2.g4;
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
        var r271_union = _r271_t3.union;
        var r271_intersection = _r271_t3.intersection;
        var _r271_t4 = r271_xn$Capture$2Lrc8.CommonShapes.resolve();
        var r271_HBar = _r271_t4.HBar;
        var r271_VBar = _r271_t4.VBar;
        var r271_hookstart = _r271_t4.hookstart;
        var _r271_t5 = r271_xn$Capture$2Lrc8['Common-Derivatives'].resolve();
        var r271_xn$selectvariant$7Hrq = _r271_t5['select-variant'];
        var r271_turned = _r271_t5.turned;
        var r271_xn$derivecomposites$7Hrq = _r271_t5['derive-composites'];
        var r271_xn$linkreducedvariant$5sIl8 = _r271_t5['link-reduced-variant'];
        var _r271_t6 = r271_xn$Capture$2Lrc8['Mark-Adjustment'].resolve();
        var r271_ExtendAboveBaseAnchors = _r271_t6.ExtendAboveBaseAnchors;
        var _r271_t7 = r271_xn$Capture$2Lrc8['Letter-Shared-Shapes'].resolve();
        var r271_DToothlessRise = _r271_t7.DToothlessRise;
        var r271_ShoulderMidKnotLhs = _r271_t7.ShoulderMidKnotLhs;
        var _r271_t8 = r271_xn$Capture$2Lrc8['Letter-Shared-Shapes'].resolve();
        var r271_SerifedArcStart = _r271_t8.SerifedArcStart;
        var r271_TopHook = _r271_t8.TopHook;
        var _r271_t9 = r271_xn$Capture$2Lrc8['Letter-Shared-Shapes'].resolve();
        var r271_ArcStartSerif = _r271_t9.ArcStartSerif;
        var r271_LetterBarOverlay = _r271_t9.LetterBarOverlay;
        var r271_SerifFrame = _r271_t9.SerifFrame;
        var r271_TOOTHED = 0;
        var r271_xn$TOOTHLESSCORNER$5Frx = 1;
        var r271_xn$TOOTHLESSROUNDED$5Frx = 2;
        var r271_xn$CROSSBARNONE$9XZu = 0;
        var r271_xn$CROSSBARHOOKED$9XZu = 1;
        var r271_xn$CROSSBARCAPPED$9XZu = 2;
        var r271_xn$SLABNONE$5sIl = 0;
        var r271_xn$SLABLETTER$5sIl = 1;
        var r271_xn$SLABINWARD$5sIl = 2;
        var r271_xn$SLABHOOKTOP$5sIl5 = 10;
        var r271_GShape = function (r278_toothShape, r278_slabShape, r278_crossBarShape, r278_top, r278_ada, r278_adb, r278__yBarOverride) {
            var _r278_t0, _r278_t1;
            return function () {
                var r280___, _r280_t0, _r280_t2, _r280_t3, _r280_t5;
                var _r280_t4 = this;
                var r280_currentGlyph = _r280_t4;
                var r280_yBar = r1_fallback(r278__yBarOverride, r278_top * 0.52 + r271_Stroke * 0.25);
                var r280_fine = r271_ShoulderFine;
                var r280_knots = (_r280_t0 = r278_slabShape, _r280_t0 === r271_xn$SLABLETTER$5sIl || _r280_t0 === r271_xn$SLABHOOKTOP$5sIl5 ? r271_SerifedArcStart.RtlLhs(r271_RightSB, r271_Middle, r278_top, r271_Stroke, r271_Hook, r278_slabShape === r271_xn$SLABHOOKTOP$5sIl5) : _r280_t0 === r271_xn$SLABINWARD$5sIl ? [
                    r271_g4(r271_RightSB, r278_top - r271_DToothlessRise, r271_widths.lhs()),
                    r271_g4(r271_Middle - r271_CorrectionOMidS, r278_top - r271_O),
                    r271_archv()
                ] : (r280___ = _r280_t0, [
                    r271_widths.lhs(),
                    r271_g4(r271_RightSB, r278_top - r271_Hook),
                    r271_hookstart(r278_top - r271_O)
                ]));
                r280_knots.push(r271_flat(r271_SB + r271_OX, r278_top - r278_ada), r271_curl(r271_SB + r271_OX, r278_adb), r271_arcvh());
                var _r280_t1 = r278_toothShape;
                if (_r280_t1 === r271_TOOTHED) {
                    r280_knots.push(r271_ShoulderMidKnotLhs(r271_Middle, r271_O, r280_fine, r271_Stroke, 1, 1), r271_archv(), r271_straight.up.end(r271_RightSB - (r271_Stroke - r280_fine) * r271_HVContrast, r278_ada, r271_widths.heading(r280_fine, 0, r271_Upward)));
                } else if (_r280_t1 === r271_xn$TOOTHLESSCORNER$5Frx) {
                    r280_knots.push(r271_g4(r271_Middle + r271_CorrectionOMidS, r271_O), r271_g4(r271_RightSB, r271_DToothlessRise));
                } else if (_r280_t1 === r271_xn$TOOTHLESSROUNDED$5Frx) {
                    r280_knots.push(r271_g4(r271_Middle + r271_CorrectionOMidS, r271_O), r271_flat(r271_RightSB, r278_ada), r271_curl(r271_RightSB, r280_yBar, r271_heading(r271_Upward)));
                } else
                    void 0;
                r280_currentGlyph.include(r271_union(r271_dispiro.apply(null, r280_knots), r278_slabShape === r271_xn$SLABLETTER$5sIl ? r271_ArcStartSerif.R(r271_RightSB, r278_top, r271_Stroke, r271_Hook) : function () {
                    var _r283_t1;
                    var _r283_t0 = this;
                    var r283_currentGlyph = _r283_t0;
                    return void 0;
                }, r278_slabShape === r271_xn$SLABINWARD$5sIl ? r271_ArcStartSerif.InwardR(r271_RightSB, r278_top, r271_Stroke, r271_Hook) : function () {
                    var _r285_t1;
                    var _r285_t0 = this;
                    var r285_currentGlyph = _r285_t0;
                    return void 0;
                }, (_r280_t2 = r278_crossBarShape, _r280_t2 === r271_xn$CROSSBARNONE$9XZu ? function () {
                    var _r287_t1;
                    var _r287_t0 = this;
                    var r287_currentGlyph = _r287_t0;
                    return void 0;
                } : _r280_t2 === r271_xn$CROSSBARHOOKED$9XZu ? r271_HBar.t(r271_Middle, r271_RightSB, r280_yBar) : _r280_t2 === r271_xn$CROSSBARCAPPED$9XZu ? r271_HBar.t(r271_Middle, r1_mix(r271_RightSB, r271_Width, 0.625), r280_yBar) : void 0), (_r280_t3 = r278_toothShape, _r280_t3 === r271_TOOTHED ? r271_union(r271_VBar.r(r271_RightSB, r278_ada + r271_O, r280_yBar), r271_VBar.r(r271_RightSB, r278_ada, 0, Math.max(r271_AdviceStroke(5), r271_Stroke - r280_fine / 2))) : _r280_t3 === r271_xn$TOOTHLESSCORNER$5Frx ? r271_VBar.r(r271_RightSB, r271_DToothlessRise, r280_yBar) : _r280_t3 === r271_xn$TOOTHLESSROUNDED$5Frx ? function () {
                    var _r289_t1;
                    var _r289_t0 = this;
                    var r289_currentGlyph = _r289_t0;
                    return void 0;
                } : void 0)));
                return void 0;
            };
        };
        r271_xn$createAndSaveGlyphImpl$2Lrc3c('GBarOverlay', null, r271_LetterBarOverlay.r.in(new r271_xn$NamedParameterPair$2Lrc9b('x', r271_RightSB), new r271_xn$NamedParameterPair$2Lrc9b('bot', 0), new r271_xn$NamedParameterPair$2Lrc9b('top', r271_CAP / 2), new r271_xn$NamedParameterPair$2Lrc9b('space', [
            r271_SB + r271_Stroke * r271_HVContrast,
            r271_Width
        ])));
        var r271_GConfig = r1_SuffixCfg.weave({
            'toothed': r271_TOOTHED,
            'toothlessCorner': r271_xn$TOOTHLESSCORNER$5Frx,
            'toothlessRounded': r271_xn$TOOTHLESSROUNDED$5Frx
        }, {
            'serifless': r271_xn$SLABNONE$5sIl,
            'serifed': r271_xn$SLABLETTER$5sIl,
            'inwardSerifed': r271_xn$SLABINWARD$5sIl
        }, {
            'hookless': r271_xn$CROSSBARNONE$9XZu,
            'hooked': r271_xn$CROSSBARHOOKED$9XZu,
            'capped': r271_xn$CROSSBARCAPPED$9XZu
        });
        var _r271_t10 = Object.entries(r271_GConfig)[Symbol.iterator]();
        var _r271_t11 = void 0;
        while (!(_r271_t11 = _r271_t10.next()).done) {
            _r271_t12 = _r271_t11.value;
            r271_suffix = _r271_t12[0];
            r271_shape = _r271_t12[1][0];
            r271_slabType = _r271_t12[1][1];
            r271_crossBarShape = _r271_t12[1][2];
            _r271_t12[1];
            r271_xn$createAndSaveGlyphImpl$2Lrc3c('G.' + r271_suffix, null, function () {
                var _r298_t1;
                var _r298_t0 = this;
                var r298_currentGlyph = _r298_t0;
                r298_currentGlyph.include(r271_MarkSet.capital());
                r298_currentGlyph.include(r271_GShape(r271_shape, r271_slabType, r271_crossBarShape, r271_CAP, r271_ArchDepthA, r271_ArchDepthB));
                return void 0;
            });
            r271_xn$createAndSaveGlyphImpl$2Lrc3c('GHookTop.' + r271_suffix, null, function () {
                var _r303_t1;
                var _r303_t0 = this;
                var r303_currentGlyph = _r303_t0;
                r303_currentGlyph.include(r271_MarkSet.capital());
                r303_currentGlyph.include(r271_GShape(r271_shape, r271_xn$SLABHOOKTOP$5sIl5, r271_crossBarShape, r271_CAP, r271_ArchDepthA, r271_ArchDepthB));
                r303_currentGlyph.include(r271_TopHook.arcStart(r271_RightSB, r271_CAP, r271_Hook));
                r303_currentGlyph.include(r271_ExtendAboveBaseAnchors(r271_CAP + r271_Ascender - r271_XH));
                return void 0;
            });
            r271_xn$createAndSaveGlyphImpl$2Lrc3c('smcpG.' + r271_suffix, null, function () {
                var _r310_t1;
                var _r310_t0 = this;
                var r310_currentGlyph = _r310_t0;
                r310_currentGlyph.include(r271_MarkSet.e());
                r310_currentGlyph.include(r271_GShape(r271_shape, r271_slabType, r271_crossBarShape, r271_XH, r271_ArchDepthA, r271_ArchDepthB));
                return void 0;
            });
            r271_xn$createAndSaveGlyphImpl$2Lrc3c('smcpGHookTop.' + r271_suffix, null, function () {
                var _r315_t1;
                var _r315_t0 = this;
                var r315_currentGlyph = _r315_t0;
                r315_currentGlyph.include(r271_MarkSet.e());
                r315_currentGlyph.include(r271_GShape(r271_shape, r271_xn$SLABHOOKTOP$5sIl5, r271_crossBarShape, r271_XH, r271_ArchDepthA, r271_ArchDepthB));
                r315_currentGlyph.include(r271_TopHook.arcStart(r271_RightSB, r271_XH, r271_Hook));
                r315_currentGlyph.include(r271_ExtendAboveBaseAnchors(r271_Ascender));
                return void 0;
            });
        }
        r271_xn$selectvariant$7Hrq('G', 'G');
        r271_xn$linkreducedvariant$5sIl8('G/sansSerif', 'G', r1_MathSansSerif);
        r271_xn$selectvariant$7Hrq('smcpG', 610, new r271_xn$NamedParameterPair$2Lrc9b('follow', 'G'));
        r271_xn$selectvariant$7Hrq('GHookTop', 403);
        r271_xn$selectvariant$7Hrq('smcpGHookTop', 667, new r271_xn$NamedParameterPair$2Lrc9b('follow', 'GHookTop'));
        r271_turned('turnSansSerifG', 8513, 'G/sansSerif', r271_Middle, r271_CAP / 2);
        r271_turned('turnSmcpG', 122626, 'smcpG', r271_Middle, r271_XH / 2);
        r271_xn$derivecomposites$7Hrq('Gbar', 484, 'G', 'GBarOverlay');
        (function () {
            var r323_suffix, r323_slabType, _r323_t2;
            var r323_Config = {
                'serifless': [r271_xn$SLABNONE$5sIl],
                'unilateralSerifed': [r271_xn$SLABLETTER$5sIl],
                'unilateralInwardSerifed': [r271_xn$SLABINWARD$5sIl]
            };
            var _r323_t0 = Object.entries(r323_Config)[Symbol.iterator]();
            var _r323_t1 = void 0;
            while (!(_r323_t1 = _r323_t0.next()).done) {
                _r323_t2 = _r323_t1.value;
                r323_suffix = _r323_t2[0];
                r323_slabType = _r323_t2[1][0];
                _r323_t2[1];
                r271_xn$createAndSaveGlyphImpl$2Lrc3c('cyrl/SjeKomi.' + r323_suffix, null, function () {
                    var r327_sf2, _r327_t1;
                    var _r327_t0 = this;
                    var r327_currentGlyph = _r327_t0;
                    r327_currentGlyph.include(r271_MarkSet.capital());
                    r327_currentGlyph.include(r271_GShape(r271_xn$TOOTHLESSROUNDED$5Frx, r323_slabType, r271_xn$CROSSBARNONE$9XZu, r271_CAP, r271_ArchDepthA, r271_ArchDepthB, r271_CAP / 2));
                    if (r271_SLAB) {
                        r327_sf2 = r271_SerifFrame.fromDf(r271_DivFrame(1), r271_CAP / 2, 0);
                        r327_currentGlyph.include(r327_sf2.rt.full);
                    }
                    return void 0;
                });
                r271_xn$createAndSaveGlyphImpl$2Lrc3c('cyrl/sjeKomi.' + r323_suffix, null, function () {
                    var r333_sf2, _r333_t1;
                    var _r333_t0 = this;
                    var r333_currentGlyph = _r333_t0;
                    r333_currentGlyph.include(r271_MarkSet.e());
                    r333_currentGlyph.include(r271_GShape(r271_xn$TOOTHLESSROUNDED$5Frx, r323_slabType, r271_xn$CROSSBARNONE$9XZu, r271_XH, r271_SmallArchDepthA, r271_SmallArchDepthB, r271_XH / 2));
                    if (r271_SLAB) {
                        r333_sf2 = r271_SerifFrame.fromDf(r271_DivFrame(1), r271_XH / 2, 0);
                        r333_currentGlyph.include(r333_sf2.rt.full);
                    }
                    return void 0;
                });
            }
            r271_xn$selectvariant$7Hrq('cyrl/SjeKomi', 1292, new r271_xn$NamedParameterPair$2Lrc9b('follow', 'cTopSerifOnly'));
            return r271_xn$selectvariant$7Hrq('cyrl/sjeKomi', 1293, new r271_xn$NamedParameterPair$2Lrc9b('follow', 'cTopSerifOnly'));
        }());
        var _r271_t13 = r271_xn$Capture$2Lrc8['Letter-Blackboard'].resolve();
        var r271_BBS = _r271_t13.BBS;
        var r271_BBD = _r271_t13.BBD;
        var r271_BBBarRight = _r271_t13.BBBarRight;
        var r271_BBGArcT = function (r340_sink, r340_offset, r340_top, r340_ada, r340_adb, r340_xTerm, r340_yTerm) {
            var _r340_t0, _r340_t1;
            return r340_sink(r271_widths.lhs(r271_BBS), r271_g4(r271_RightSB - r340_offset, r340_top - r271_Hook), r271_hookstart(r340_top - r271_O - r340_offset), r271_flat(r271_SB + r271_OX + r340_offset, r340_top - r340_ada), r271_curl(r271_SB + r271_OX + r340_offset, r340_adb), r271_arcvh(), r271_g4(r1_mix(r271_SB, r340_xTerm, 0.5) + r271_CorrectionOMidS, r271_O + r340_offset), r271_archv(), r271_flat(r340_xTerm - r340_offset, r340_ada), r271_curl(r340_xTerm - r340_offset, r340_yTerm, r271_heading(r271_Upward)));
        };
        return r271_xn$createAndSaveGlyphImpl$2Lrc3c('mathbb/G', 120126, function () {
            var _r343_t1;
            var _r343_t0 = this;
            var r343_currentGlyph = _r343_t0;
            var r343_yBar = r271_CAP * 0.52 + r271_BBS * 0.25;
            r343_currentGlyph.include(r271_MarkSet.capital());
            r343_currentGlyph.include(r271_BBGArcT(r271_dispiro, 0, r271_CAP, r271_ArchDepthA, r271_ArchDepthB, r271_RightSB - r271_BBD, r343_yBar));
            r343_currentGlyph.include(r271_intersection(r271_BBGArcT(r271_xn$spirooutline$1aao, 1, r271_CAP, r271_ArchDepthA, r271_ArchDepthB, r271_RightSB - r271_BBD, r343_yBar), r271_VBar.l(r271_SB + r271_OX + r271_BBD, 0, r271_CAP, r271_BBS)));
            r343_currentGlyph.include(r271_BBBarRight(r271_RightSB, 0, r343_yBar));
            return void 0;
        });
    });
    return void 0;
});
