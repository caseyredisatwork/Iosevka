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
    r270_xn$Capture_Ext$2Lrc2b['$defineGlyphBlockImpl$'](r270_xn$Capture_Ext$2Lrc2b, 'Letter-Latin-Lower-H', function (r271_xn$Capture$2Lrc8, r271_xn$ExportCapture$2Lrc4b) {
        var r271_suffix, r271_fTailed, r271_fHasTopSerif, r271_Serifs, _r271_t13, _r271_t15, _r271_t16, _r271_t17, _r271_tag18;
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
        var r271_XH = _r271_t1.XH;
        var r271_Ascender = _r271_t1.Ascender;
        var r271_Descender = _r271_t1.Descender;
        var r271_ApparentTranslate = _r271_t1.ApparentTranslate;
        var r271_HVContrast = _r271_t1.HVContrast;
        var r271_O = _r271_t1.O;
        var r271_TailY = _r271_t1.TailY;
        var r271_Stroke = _r271_t1.Stroke;
        var r271_Jut = _r271_t1.Jut;
        var r271_SLAB = _r271_t1.SLAB;
        var r271_HalfStroke = _r271_t1.HalfStroke;
        var r271_RightSB = _r271_t1.RightSB;
        var r271_Middle = _r271_t1.Middle;
        var r271_SideJut = _r271_t1.SideJut;
        var r271_SmallArchDepthB = _r271_t1.SmallArchDepthB;
        var r271_OverlayStroke = _r271_t1.OverlayStroke;
        var r271_ShoulderFine = _r271_t1.ShoulderFine;
        var _r271_t2 = r271_xn$Capture$2Lrc8.SpiroFns;
        var r271_corner = _r271_t2.corner;
        var r271_straight = _r271_t2.straight;
        var r271_widths = _r271_t2.widths;
        var r271_dispiro = _r271_t2.dispiro;
        var _r271_t3 = r271_xn$Capture$2Lrc8.BooleFns;
        var r271_union = _r271_t3.union;
        var r271_intersection = _r271_t3.intersection;
        var _r271_t4 = r271_xn$Capture$2Lrc8.CommonShapes.resolve();
        var r271_xn$noshape$3cah = _r271_t4['no-shape'];
        var r271_HSerif = _r271_t4.HSerif;
        var r271_HBar = _r271_t4.HBar;
        var r271_VBar = _r271_t4.VBar;
        var r271_FlipAround = _r271_t4.FlipAround;
        var r271_WithTransform = _r271_t4.WithTransform;
        var _r271_t5 = r271_xn$Capture$2Lrc8['Common-Derivatives'].resolve();
        var r271_xn$selectvariant$7Hrq = _r271_t5['select-variant'];
        var r271_xn$referglyph$1aao = _r271_t5['refer-glyph'];
        var r271_alias = _r271_t5.alias;
        var r271_turned = _r271_t5.turned;
        var r271_xn$deriveglyphs$7Hrq = _r271_t5['derive-glyphs'];
        var r271_xn$derivecomposites$7Hrq = _r271_t5['derive-composites'];
        var r271_xn$linkreducedvariant$5sIl8 = _r271_t5['link-reduced-variant'];
        var r271_xn$derivemultipartglyphs$7Hrq65 = _r271_t5['derive-multi-part-glyphs'];
        var _r271_t6 = r271_xn$Capture$2Lrc8['Mark-Shared-Metrics'].resolve();
        var r271_markExtend = _r271_t6.markExtend;
        var _r271_t7 = r271_xn$Capture$2Lrc8['Mark-Above'].resolve();
        var r271_aboveMarkMid = _r271_t7.aboveMarkMid;
        var _r271_t8 = r271_xn$Capture$2Lrc8['Mark-Below'].resolve();
        var r271_belowMarkMid = _r271_t8.belowMarkMid;
        var _r271_t9 = r271_xn$Capture$2Lrc8['Letter-Shared-Shapes'].resolve();
        var r271_RightwardTailedBar = _r271_t9.RightwardTailedBar;
        var r271_nShoulder = _r271_t9.nShoulder;
        var r271_nShoulderMask = _r271_t9.nShoulderMask;
        var r271_CyrDescender = _r271_t9.CyrDescender;
        var _r271_t10 = r271_xn$Capture$2Lrc8['Letter-Shared-Shapes'].resolve();
        var r271_TopHook = _r271_t10.TopHook;
        var r271_PalatalHook = _r271_t10.PalatalHook;
        var r271_EngHook = _r271_t10.EngHook;
        var r271_RetroflexHook = _r271_t10.RetroflexHook;
        var r271_SmallHSerifs = function (r279_tailed, r279_hookTop) {
            var _r279_t0, _r279_t1;
            return function () {
                var _r281_t1;
                var _r281_t0 = this;
                var r281_currentGlyph = _r281_t0;
                r281_currentGlyph.include(r271_SmallHLeftSerifs(r279_tailed, r279_hookTop));
                if (!r279_tailed)
                    r281_currentGlyph.include(r271_tagged('serifRB', r271_HSerif.mb(r271_RightSB - r271_HalfStroke * r271_HVContrast, 0, r271_Jut)));
                return void 0;
            };
        };
        var r271_SmallHLeftSerifs = function (r284_tailed, r284_hookTop) {
            var _r284_t0, _r284_t1;
            return function () {
                var _r286_t1;
                var _r286_t0 = this;
                var r286_currentGlyph = _r286_t0;
                if (!r284_hookTop)
                    r286_currentGlyph.include(r271_tagged('serifLT', r271_HSerif.lt(r271_SB, r271_Ascender, r271_SideJut)));
                r286_currentGlyph.include(r271_tagged('serifLB', r271_HSerif.mb(r271_SB + r271_HalfStroke * r271_HVContrast, 0, r271_Jut)));
                return void 0;
            };
        };
        var r271_SmallHMotionSerifs = function (r289_tailed, r289_hookTop) {
            var _r289_t0, _r289_t1;
            return function () {
                var _r291_t1;
                var _r291_t0 = this;
                var r291_currentGlyph = _r291_t0;
                if (!r289_hookTop)
                    r291_currentGlyph.include(r271_tagged('serifLT', r271_HSerif.lt(r271_SB, r271_Ascender, r271_SideJut)));
                if (!r289_tailed)
                    r291_currentGlyph.include(r271_tagged('serifRB', r271_HSerif.rb(r271_RightSB, 0, r271_SideJut)));
                return void 0;
            };
        };
        var r271_SmallHTopLeftSerifs = function (r294_tailed, r294_hookTop) {
            var _r294_t0, _r294_t1;
            return function () {
                var _r296_t1;
                var _r296_t0 = this;
                var r296_currentGlyph = _r296_t0;
                if (!r294_hookTop)
                    r296_currentGlyph.include(r271_tagged('serifLT', r271_HSerif.lt(r271_SB, r271_Ascender, r271_SideJut)));
                return void 0;
            };
        };
        r271_HBar.mOverlay = function (r298_fHasTopSerif) {
            var _r298_t0, _r298_t1;
            return function () {
                var _r300_t1;
                var _r300_t0 = this;
                var r300_currentGlyph = _r300_t0;
                var r300_barSpaceTop = r271_Ascender - (r298_fHasTopSerif ? r271_Stroke : 0);
                var r300_s = Math.min(r271_OverlayStroke, 0.625 * (r300_barSpaceTop - r271_XH));
                var r300_xOverlayStart = r1_mix(r271_SB, 0, 0.7);
                var r300_xOverlayEnd = r1_mix(r271_SB, r271_RightSB, 0.5);
                var r300_yOverlay = r1_mix(r271_XH, r300_barSpaceTop, 0.45) - r300_s / 2;
                r300_currentGlyph.include(r271_dispiro(r271_widths.lhs(r300_s), r271_corner(r300_xOverlayStart, r300_yOverlay), r271_corner(r271_SB + r271_HalfStroke * r271_HVContrast, r300_yOverlay)));
                r300_currentGlyph.include(r271_dispiro(r271_widths.lhs(r271_OverlayStroke), r271_corner(r271_SB + r271_HalfStroke * r271_HVContrast, r300_yOverlay), r271_corner(r300_xOverlayEnd, r300_yOverlay)));
                return void 0;
            };
        };
        var r271_HConfig = r1_SuffixCfg.weave({
            'straight': false,
            'tailed': true
        }, {
            'serifless': [
                false,
                r271_xn$noshape$3cah
            ],
            'serifed': [
                true,
                r271_SmallHSerifs
            ],
            'motionSerifed': [
                true,
                r271_SmallHMotionSerifs
            ],
            'topLeftSerifed': [
                true,
                r271_SmallHTopLeftSerifs
            ]
        });
        var _r271_t11 = Object.entries(r271_HConfig)[Symbol.iterator]();
        var _r271_t12 = void 0;
        while (!(_r271_t12 = _r271_t11.next()).done) {
            _r271_t13 = _r271_t12.value;
            r271_suffix = _r271_t13[0];
            r271_fTailed = _r271_t13[1][0];
            r271_fHasTopSerif = _r271_t13[1][1][0];
            r271_Serifs = _r271_t13[1][1][1];
            _r271_t13[1][1];
            _r271_t13[1];
            (function () {
                r271_xn$createAndSaveGlyphImpl$2Lrc3c('h.' + r271_suffix, null, function () {
                    var _r308_t1;
                    var _r308_t0 = this;
                    var r308_currentGlyph = _r308_t0;
                    r308_currentGlyph.include(r271_MarkSet.b());
                    r308_currentGlyph.include(r271_VBar.l(r271_SB, 0, r271_Ascender));
                    r308_currentGlyph.include(r271_nShoulder(new r271_xn$NamedParameterPair$2Lrc9b('left', r271_SB + r271_Stroke * r271_HVContrast), new r271_xn$NamedParameterPair$2Lrc9b('right', r271_RightSB), new r271_xn$NamedParameterPair$2Lrc9b('bottom', r271_fTailed ? r271_XH - r271_SmallArchDepthB + r271_O : 0)));
                    if (r271_fTailed)
                        r308_currentGlyph.include(r271_RightwardTailedBar(r271_RightSB, 0, r271_XH - r271_SmallArchDepthB));
                    r308_currentGlyph.include(r271_Serifs(r271_fTailed, false));
                    return void 0;
                });
                r271_xn$createAndSaveGlyphImpl$2Lrc3c('h/circumflexBase.' + r271_suffix, null, function () {
                    var _r319_t1;
                    var _r319_t0 = this;
                    var r319_currentGlyph = _r319_t0;
                    r319_currentGlyph.include(r271_xn$referglyph$1aao('h.' + r271_suffix), r271_AS_BASE, r271_ALSO_METRICS);
                    r319_currentGlyph.setBaseAnchor('above', r271_SB + r271_HVContrast * r271_HalfStroke, r271_Ascender);
                    return void 0;
                });
                r271_xn$createAndSaveGlyphImpl$2Lrc3c('hBar.' + r271_suffix, null, function () {
                    var _r324_t1;
                    var _r324_t0 = this;
                    var r324_currentGlyph = _r324_t0;
                    r324_currentGlyph.include(r271_xn$referglyph$1aao('h.' + r271_suffix), r271_AS_BASE, r271_ALSO_METRICS);
                    r324_currentGlyph.include(r271_HBar.mOverlay(r271_fHasTopSerif));
                    return void 0;
                });
                r271_xn$createAndSaveGlyphImpl$2Lrc3c('hHookTop.' + r271_suffix, null, function () {
                    var _r329_t1;
                    var _r329_t0 = this;
                    var r329_currentGlyph = _r329_t0;
                    r329_currentGlyph.include(r271_MarkSet.b());
                    r329_currentGlyph.include(r271_TopHook.lBarInner(r271_SB, 0, r271_Ascender));
                    r329_currentGlyph.include(r271_nShoulder(new r271_xn$NamedParameterPair$2Lrc9b('left', r271_SB + r271_Stroke * r271_HVContrast), new r271_xn$NamedParameterPair$2Lrc9b('right', r271_RightSB), new r271_xn$NamedParameterPair$2Lrc9b('bottom', r271_fTailed ? r271_XH - r271_SmallArchDepthB + r271_O : 0)));
                    if (r271_fTailed)
                        r329_currentGlyph.include(r271_RightwardTailedBar(r271_RightSB, 0, r271_XH - r271_SmallArchDepthB));
                    r329_currentGlyph.include(r271_Serifs(r271_fTailed, true));
                    return void 0;
                });
                r271_xn$createAndSaveGlyphImpl$2Lrc3c('hHookTopLTail.' + r271_suffix, null, function () {
                    var _r340_t1;
                    var _r340_t0 = this;
                    var r340_currentGlyph = _r340_t0;
                    r340_currentGlyph.include(r271_MarkSet.bp());
                    r340_currentGlyph.include(r271_xn$referglyph$1aao('hHookTop.' + r271_suffix));
                    r340_currentGlyph.ejectTagged('serifRB');
                    r340_currentGlyph.include(r271_EngHook(r271_RightSB, 0, r271_Descender));
                    return void 0;
                });
                r271_xn$createAndSaveGlyphImpl$2Lrc3c('heng.' + r271_suffix, null, function () {
                    var _r347_t1;
                    var _r347_t0 = this;
                    var r347_currentGlyph = _r347_t0;
                    r347_currentGlyph.include(r271_MarkSet.bp());
                    r347_currentGlyph.include(r271_xn$referglyph$1aao('h.' + r271_suffix));
                    r347_currentGlyph.ejectTagged('serifRB');
                    r347_currentGlyph.include(r271_EngHook(r271_RightSB, 0, r271_Descender));
                    return void 0;
                });
                return r271_xn$createAndSaveGlyphImpl$2Lrc3c('hengBar.' + r271_suffix, null, function () {
                    var _r354_t1;
                    var _r354_t0 = this;
                    var r354_currentGlyph = _r354_t0;
                    r354_currentGlyph.include(r271_xn$referglyph$1aao('heng.' + r271_suffix), r271_AS_BASE, r271_ALSO_METRICS);
                    r354_currentGlyph.include(r271_HBar.mOverlay(r271_fHasTopSerif));
                    return void 0;
                });
            }());
        }
        r271_xn$selectvariant$7Hrq('h', 'h');
        r271_xn$selectvariant$7Hrq('h/circumflexBase', new r271_xn$NamedParameterPair$2Lrc9b('follow', 'h'));
        r271_xn$linkreducedvariant$5sIl8('h/descBase', 'h');
        r271_xn$linkreducedvariant$5sIl8('h/sansSerif', 'h', r1_MathSansSerif);
        r271_xn$deriveglyphs$7Hrq('hCircumflex', 293, 'h/circumflexBase', function (r358_src, r358_gr) {
            var _r358_t0, _r358_t1;
            return function () {
                var _r360_t1;
                var _r360_t0 = this;
                var r360_currentGlyph = _r360_t0;
                r360_currentGlyph.include(r271_xn$referglyph$1aao(r358_src), r271_AS_BASE, r271_ALSO_METRICS);
                r360_currentGlyph.include(r271_xn$referglyph$1aao('circumflexAbove'));
                return void 0;
            };
        });
        r271_xn$deriveglyphs$7Hrq('hCaron', 543, 'h/circumflexBase', function (r363_src, r363_gr) {
            var _r363_t0, _r363_t1;
            return function () {
                var _r365_t1;
                var _r365_t0 = this;
                var r365_currentGlyph = _r365_t0;
                r365_currentGlyph.include(r271_xn$referglyph$1aao(r363_src), r271_AS_BASE, r271_ALSO_METRICS);
                r365_currentGlyph.include(r271_xn$referglyph$1aao('caronAbove'));
                return void 0;
            };
        });
        r271_xn$selectvariant$7Hrq('hBar', 295, new r271_xn$NamedParameterPair$2Lrc9b('follow', 'h'));
        r271_turned('turnh', 613, 'h', r271_Middle, r271_XH / 2, r271_MarkSet.p());
        r271_xn$selectvariant$7Hrq('hHookTop', 614);
        r271_xn$selectvariant$7Hrq('hHookTopLTail', 615);
        r271_xn$selectvariant$7Hrq('heng', 42791);
        r271_xn$selectvariant$7Hrq('cyrl/dje', 1106, new r271_xn$NamedParameterPair$2Lrc9b('follow', 'heng'), new r271_xn$NamedParameterPair$2Lrc9b('shapeFrom', 'hengBar'));
        r271_xn$selectvariant$7Hrq('cyrl/shha', 1211, new r271_xn$NamedParameterPair$2Lrc9b('shapeFrom', 'h'));
        r271_xn$derivecomposites$7Hrq('cyrl/shhaDescender', 1319, 'cyrl/shha', r271_CyrDescender.rSideJut(r271_RightSB, 0));
        r271_xn$derivecomposites$7Hrq('hPalatalHook', 42901, 'h/descBase', r271_PalatalHook.rSideJut(r271_RightSB, 0));
        r271_xn$derivecomposites$7Hrq('hDescender', 11368, 'h/descBase', r271_CyrDescender.rSideJut(r271_RightSB, 0));
        r271_xn$createAndSaveGlyphImpl$2Lrc3c('hookturnh', 686, function () {
            var _r374_t1;
            var _r374_t0 = this;
            var r374_currentGlyph = _r374_t0;
            r374_currentGlyph.include(r271_nShoulder(new r271_xn$NamedParameterPair$2Lrc9b('left', r271_SB + r271_Stroke * r271_HVContrast), new r271_xn$NamedParameterPair$2Lrc9b('right', r271_RightSB), new r271_xn$NamedParameterPair$2Lrc9b('bottom', r271_TailY + r271_HalfStroke)));
            r374_currentGlyph.include(r271_VBar.l(r271_SB, 0, r271_Ascender));
            r374_currentGlyph.include(r271_RetroflexHook.rExt(r271_RightSB, r271_TailY + r271_HalfStroke));
            r374_currentGlyph.include(r271_FlipAround(r271_Middle, r271_XH / 2));
            r374_currentGlyph.include(r271_MarkSet.p());
            if (r271_SLAB) {
                r374_currentGlyph.include(r271_HSerif.lt(r271_RightSB - r271_Stroke * r271_HVContrast, r271_XH, r271_SideJut));
                r374_currentGlyph.include(r271_HSerif.mb(r271_RightSB - r271_HalfStroke * r271_HVContrast, r271_Descender, r271_Jut));
            }
            return void 0;
        });
        r271_xn$createAndSaveGlyphImpl$2Lrc3c('hookturnhrtail', 687, function () {
            var _r387_t1;
            var _r387_t0 = this;
            var r387_currentGlyph = _r387_t0;
            r387_currentGlyph.include(r271_nShoulder(new r271_xn$NamedParameterPair$2Lrc9b('left', r271_SB + r271_Stroke * r271_HVContrast), new r271_xn$NamedParameterPair$2Lrc9b('right', r271_RightSB), new r271_xn$NamedParameterPair$2Lrc9b('bottom', r271_TailY + r271_HalfStroke)));
            r387_currentGlyph.include(r271_VBar.l(r271_SB, 0, r271_XH));
            r387_currentGlyph.include(r271_RetroflexHook.rExt(r271_RightSB, r271_TailY + r271_HalfStroke));
            r387_currentGlyph.include(r271_FlipAround(r271_Middle, r271_XH / 2));
            r387_currentGlyph.include(r271_RetroflexHook.rExt(r271_RightSB, r271_Descender + r271_TailY + r271_HalfStroke, new r271_xn$NamedParameterPair$2Lrc9b('yAttach', 0)));
            r387_currentGlyph.include(r271_MarkSet.p());
            if (r271_SLAB)
                r387_currentGlyph.include(r271_HSerif.lt(r271_RightSB - r271_Stroke * r271_HVContrast, r271_XH, r271_SideJut));
            return void 0;
        });
        r271_xn$derivemultipartglyphs$7Hrq65('hDot', 7715, [
            'h',
            'dotAbove'
        ], function (r399_srcs, r399_gr) {
            var _r399_t0, _r399_t1;
            return function () {
                var _r401_t2;
                var _r401_t1 = this;
                var r401_currentGlyph = _r401_t1;
                var _r401_t0 = r399_srcs;
                var r401_base = _r401_t0[0];
                var r401_mark = _r401_t0[1];
                r401_currentGlyph.include(r271_xn$referglyph$1aao(r401_base), r271_AS_BASE, r271_ALSO_METRICS);
                r401_currentGlyph.include(r271_WithTransform(r271_ApparentTranslate(r271_HVContrast * r271_HalfStroke, r271_XH - r271_Ascender), r271_xn$referglyph$1aao(r401_mark)));
                return void 0;
            };
        });
        r271_xn$deriveglyphs$7Hrq('hCedilla', 7721, 'h', function (r404_src, r404_gr) {
            var _r404_t0, _r404_t1;
            return function () {
                var _r406_t1;
                var _r406_t0 = this;
                var r406_currentGlyph = _r406_t0;
                var r406_shift = r271_Width + r271_SB - r271_Middle + r271_HalfStroke * r271_HVContrast;
                r406_currentGlyph.include(r271_xn$referglyph$1aao('cedillaBelow'));
                r406_currentGlyph.include(r271_ApparentTranslate(r406_shift, 0));
                r406_currentGlyph.include(r271_xn$referglyph$1aao(r404_src));
                r406_currentGlyph.include(r271_MarkSet.bp());
                r406_currentGlyph.setBaseAnchor('belowBraceL', -r271_Middle + r406_shift - 0.5 * r271_markExtend, r271_belowMarkMid);
                r406_currentGlyph.setBaseAnchor('belowBraceR', -r271_Middle + r406_shift + 0.5 * r271_markExtend, r271_belowMarkMid);
                return void 0;
            };
        });
        r271_alias('cyrl/tshe', 1115, 'hBar');
        var _r271_t14 = r271_xn$Capture$2Lrc8['Letter-Blackboard'].resolve();
        var r271_BBS = _r271_t14.BBS;
        var r271_BBD = _r271_t14.BBD;
        var r271_BBBarLeft = _r271_t14.BBBarLeft;
        return r271_xn$createAndSaveGlyphImpl$2Lrc3c('mathbb/h', 120153, function () {
            var _r416_t1;
            var _r416_t0 = this;
            var r416_currentGlyph = _r416_t0;
            var r416_df = r271_DivFrame(1, 2);
            var r416_bbs = r271_BBS;
            var r416_bbd = r271_BBD;
            r416_currentGlyph.setWidth(r416_df.width);
            r416_currentGlyph.include(r416_df.markSet.e());
            r416_currentGlyph.include(r271_BBBarLeft(r416_df.leftSB, 0, r271_Ascender));
            r416_currentGlyph.include(r271_union(r271_HBar.b(r416_df.rightSB - r416_bbd, r416_df.rightSB, 0, r416_bbs), r271_nShoulder(new r271_xn$NamedParameterPair$2Lrc9b('stroke', r416_bbs), new r271_xn$NamedParameterPair$2Lrc9b('left', r416_df.leftSB + r416_bbd + r416_bbs * r271_HVContrast), new r271_xn$NamedParameterPair$2Lrc9b('right', r416_df.rightSB), new r271_xn$NamedParameterPair$2Lrc9b('fine', r271_ShoulderFine)), r271_intersection(r271_VBar.r(r416_df.rightSB - r416_bbd, 0, r271_XH, r416_bbs), r271_nShoulderMask(new r271_xn$NamedParameterPair$2Lrc9b('stroke', r416_bbs), new r271_xn$NamedParameterPair$2Lrc9b('left', r416_df.leftSB + r416_bbd + r416_bbs * r271_HVContrast + 1), new r271_xn$NamedParameterPair$2Lrc9b('right', r416_df.rightSB - 1), new r271_xn$NamedParameterPair$2Lrc9b('top', r271_XH - 1), new r271_xn$NamedParameterPair$2Lrc9b('fine', r271_ShoulderFine)))));
            return void 0;
        });
    });
    return void 0;
});
