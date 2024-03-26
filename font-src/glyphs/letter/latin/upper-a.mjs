'use strict';
import * as _s0_t0 from '../../../support/utils.mjs';
import * as _s0_t1 from '../../../support/gr.mjs';
import * as _s0_t2 from '../../../support/util/mask-bit.mjs';
var _s0_t3;
export {
    _s0_t3 as apply
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
var _r1_t10 = _s0_t2;
var r1_maskBits = _r1_t10.maskBits;
var r1_bitOr = _r1_t10.bitOr;
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
    r271_xn$Capture_Ext$2Lrc2b['$defineGlyphBlockImpl$'](r271_xn$Capture_Ext$2Lrc2b, 'Letter-Latin-Upper-A', function (r272_xn$Capture$2Lrc8, r272_xn$ExportCapture$2Lrc4b) {
        var r272_suffix, r272_fStraightBar, r272_slabKind, _r272_t12, _r272_t15, _r272_t16, _r272_t17, _r272_tag18;
        var _r272_t0 = r272_xn$Capture$2Lrc8;
        var r272_xn$createAndSaveGlyphImpl$2Lrc3c = _r272_t0['$createAndSaveGlyphImpl$'];
        var r272_xn$NamedParameterPair$2Lrc9b = _r272_t0['$NamedParameterPair$'];
        var r272_xn$assignUnicodeImpl$2Lrc8b = _r272_t0['$assignUnicodeImpl$'];
        var r272_xn$execState$2Lrc0b = _r272_t0['$execState$'];
        var r272_MarkSet = _r272_t0.MarkSet;
        var r272_AS_BASE = _r272_t0.AS_BASE;
        var r272_ALSO_METRICS = _r272_t0.ALSO_METRICS;
        var r272_tagged = _r272_t0.tagged;
        var r272_DivFrame = _r272_t0.DivFrame;
        var _r272_t1 = r272_xn$Capture$2Lrc8.Metrics;
        var r272_Width = _r272_t1.Width;
        var r272_SB = _r272_t1.SB;
        var r272_CAP = _r272_t1.CAP;
        var r272_XH = _r272_t1.XH;
        var r272_HVContrast = _r272_t1.HVContrast;
        var r272_Stroke = _r272_t1.Stroke;
        var r272_LongJut = _r272_t1.LongJut;
        var r272_SLAB = _r272_t1.SLAB;
        var r272_HalfStroke = _r272_t1.HalfStroke;
        var r272_RightSB = _r272_t1.RightSB;
        var r272_Middle = _r272_t1.Middle;
        var r272_SideJut = _r272_t1.SideJut;
        var r272_OverlayStroke = _r272_t1.OverlayStroke;
        var r272_MidJutSide = _r272_t1.MidJutSide;
        var _r272_t2 = r272_xn$Capture$2Lrc8.SpiroFns;
        var r272_straight = _r272_t2.straight;
        var _r272_t3 = r272_xn$Capture$2Lrc8.BooleFns;
        var r272_union = _r272_t3.union;
        var r272_intersection = _r272_t3.intersection;
        var _r272_t4 = r272_xn$Capture$2Lrc8.CommonShapes.resolve();
        var r272_HSerif = _r272_t4.HSerif;
        var r272_NeedSlab = _r272_t4.NeedSlab;
        var r272_HBar = _r272_t4.HBar;
        var r272_HOverlayBar = _r272_t4.HOverlayBar;
        var r272_VBar = _r272_t4.VBar;
        var r272_FlipAround = _r272_t4.FlipAround;
        var r272_MaskLeft = _r272_t4.MaskLeft;
        var _r272_t5 = r272_xn$Capture$2Lrc8['Common-Derivatives'].resolve();
        var r272_xn$selectvariant$7Hrq = _r272_t5['select-variant'];
        var r272_xn$referglyph$1aao = _r272_t5['refer-glyph'];
        var r272_alias = _r272_t5.alias;
        var r272_turned = _r272_t5.turned;
        var r272_xn$deriveglyphs$7Hrq = _r272_t5['derive-glyphs'];
        var r272_xn$linkreducedvariant$5sIl8 = _r272_t5['link-reduced-variant'];
        var _r272_t6 = r272_xn$Capture$2Lrc8['Mark-Shared-Metrics'].resolve();
        var r272_markHalfStroke = _r272_t6.markHalfStroke;
        var _r272_t7 = r272_xn$Capture$2Lrc8['Letter-Shared'].resolve();
        var r272_SetGrekUpperTonos = _r272_t7.SetGrekUpperTonos;
        var r272_CreateOgonekComposition = _r272_t7.CreateOgonekComposition;
        var _r272_t8 = r272_xn$Capture$2Lrc8['Letter-Shared-Shapes'].resolve();
        var r272_SerifFrame = _r272_t8.SerifFrame;
        var _r272_t9 = r272_xn$Capture$2Lrc8['Letter-Latin-V'].resolve();
        var r272_VShapeOutline = _r272_t9.VShapeOutline;
        var r272_VShape = _r272_t9.VShape;
        var r272_xn$SLABNONE$5sIl = 0;
        var r272_xn$SLABTOP$5sIl = 1;
        var r272_xn$SLABLEFT$5sIl = 2;
        var r272_xn$SLABRIGHT$5sIl = 4;
        r272_xn$ExportCapture$2Lrc4b(function () {
            var _r280_t0, _r280_t1;
            return { 'AMaskShape': r272_AMaskShape };
        });
        var r272_AMaskShape = function () {
            var _r281_t6;
            var _r281_t7 = arguments;
            var _r281_t0 = [].slice.call(_r281_t7, 0);
            var _r281_t1 = [];
            var _r281_t2 = 0;
            while (_r281_t2 < _r281_t0.length) {
                if (!(_r281_t0[_r281_t2] instanceof r272_xn$NamedParameterPair$2Lrc9b))
                    _r281_t1.push(_r281_t0[_r281_t2]);
                _r281_t2 = _r281_t2 + 1;
            }
            var _r281_t3 = _r281_t0;
            var _r281_t4 = _r281_t3.length;
            var _r281_t5 = 0;
            while (_r281_t5 < _r281_t4) {
                _r281_t2 = _r281_t3[_r281_t5];
                if (_r281_t2 && _r281_t2 instanceof r272_xn$NamedParameterPair$2Lrc9b && _r281_t2.left === 'df')
                    r281_df = _r281_t2.right;
                if (_r281_t2 && _r281_t2 instanceof r272_xn$NamedParameterPair$2Lrc9b && _r281_t2.left === 'fBarStraight')
                    r281_fBarStraight = _r281_t2.right;
                if (_r281_t2 && _r281_t2 instanceof r272_xn$NamedParameterPair$2Lrc9b && _r281_t2.left === 'top')
                    r281_top = _r281_t2.right;
                if (_r281_t2 && _r281_t2 instanceof r272_xn$NamedParameterPair$2Lrc9b && _r281_t2.left === 'sw')
                    r281_sw = _r281_t2.right;
                _r281_t5 = _r281_t5 + 1;
            }
            var r281_df = r1_fallback(r281_df, _r281_t1[0]);
            var r281_fBarStraight = r1_fallback(r281_fBarStraight, _r281_t1[1]);
            var r281_top = r1_fallback(r281_top, _r281_t1[2]);
            var r281_sw = r1_fallback(r281_sw, _r281_t1[3]);
            return r272_xn$createAndSaveGlyphImpl$2Lrc3c(null, null, function () {
                var _r288_t1;
                var _r288_t0 = this;
                var r288_currentGlyph = _r288_t0;
                r288_currentGlyph.include(r272_VShapeOutline(r281_df, r281_fBarStraight, r281_top, r281_sw));
                r288_currentGlyph.include(r272_FlipAround(r281_df.width / 2, r281_top / 2));
                return void 0;
            });
        };
        var r272_ABarPosition = function (r291_fBaseSlabs, r291_top) {
            var _r291_t0, _r291_t1;
            return r1_mix(r291_fBaseSlabs ? r272_Stroke : 0, r291_top, r272_XH / 2 / r272_CAP);
        };
        r272_xn$ExportCapture$2Lrc4b(function () {
            var _r293_t0, _r293_t1;
            return { 'AConfig': r272_AConfig };
        });
        var r272_AConfig = r1_SuffixCfg.weave({
            'straight': true,
            'curly': false
        }, {
            'serifless': r272_xn$SLABNONE$5sIl,
            'topSerifed': r272_xn$SLABTOP$5sIl,
            'baseSerifed': r1_bitOr(r272_xn$SLABLEFT$5sIl, r272_xn$SLABRIGHT$5sIl),
            'triSerifed': r1_bitOr(r272_xn$SLABTOP$5sIl, r272_xn$SLABLEFT$5sIl, r272_xn$SLABRIGHT$5sIl)
        });
        var r272_ASerifs = function (r294_df, r294_top, r294_sw, r294_slabKind) {
            var _r294_t0, _r294_t1;
            return function () {
                var _r296_t1;
                var _r296_t0 = this;
                var r296_currentGlyph = _r296_t0;
                var r296_sf = r272_SerifFrame.fromDf(r294_df, r294_top, 0);
                if (r1_maskBits(r294_slabKind, r272_xn$SLABLEFT$5sIl))
                    r296_currentGlyph.include(r296_sf.lb.full);
                if (r1_maskBits(r294_slabKind, r272_xn$SLABRIGHT$5sIl))
                    r296_currentGlyph.include(r296_sf.rb.full);
                if (r1_maskBits(r294_slabKind, r272_xn$SLABTOP$5sIl))
                    r296_currentGlyph.include(r272_intersection(r272_MaskLeft(r294_df.middle), r1_maskBits(r294_slabKind, r1_bitOr(r272_xn$SLABLEFT$5sIl, r272_xn$SLABRIGHT$5sIl)) ? r272_HSerif.lt(r294_df.middle, r294_top, r272_MidJutSide + r294_sw * r272_HVContrast * 0.25, r296_sf.swSerif) : r272_HSerif.lt(r294_df.middle, r294_top, r1_mix(r272_MidJutSide, r272_LongJut, 0.5), r296_sf.swSerif)));
                return void 0;
            };
        };
        r272_xn$ExportCapture$2Lrc4b(function () {
            var _r301_t0, _r301_t1;
            return { 'ALetterShape': r272_ALetterShape };
        });
        var r272_ALetterShape = function () {
            var _r302_t6;
            var _r302_t7 = arguments;
            var _r302_t0 = [].slice.call(_r302_t7, 0);
            var _r302_t1 = [];
            var _r302_t2 = 0;
            while (_r302_t2 < _r302_t0.length) {
                if (!(_r302_t0[_r302_t2] instanceof r272_xn$NamedParameterPair$2Lrc9b))
                    _r302_t1.push(_r302_t0[_r302_t2]);
                _r302_t2 = _r302_t2 + 1;
            }
            var _r302_t3 = _r302_t0;
            var _r302_t4 = _r302_t3.length;
            var _r302_t5 = 0;
            while (_r302_t5 < _r302_t4) {
                _r302_t2 = _r302_t3[_r302_t5];
                if (_r302_t2 && _r302_t2 instanceof r272_xn$NamedParameterPair$2Lrc9b && _r302_t2.left === 'df')
                    r302_df = _r302_t2.right;
                if (_r302_t2 && _r302_t2 instanceof r272_xn$NamedParameterPair$2Lrc9b && _r302_t2.left === 'fStraightBar')
                    r302_fStraightBar = _r302_t2.right;
                if (_r302_t2 && _r302_t2 instanceof r272_xn$NamedParameterPair$2Lrc9b && _r302_t2.left === 'slabKind')
                    r302_slabKind = _r302_t2.right;
                if (_r302_t2 && _r302_t2 instanceof r272_xn$NamedParameterPair$2Lrc9b && _r302_t2.left === 'top')
                    r302_top = _r302_t2.right;
                if (_r302_t2 && _r302_t2 instanceof r272_xn$NamedParameterPair$2Lrc9b && _r302_t2.left === 'sw')
                    r302_sw = _r302_t2.right;
                _r302_t5 = _r302_t5 + 1;
            }
            var r302_df = r1_fallback(r302_df, _r302_t1[0]);
            var r302_fStraightBar = r1_fallback(r302_fStraightBar, _r302_t1[1]);
            var r302_slabKind = r1_fallback(r302_slabKind, _r302_t1[2]);
            var r302_top = r1_fallback(r302_top, _r302_t1[3]);
            var r302_sw = r1_fallback(r302_sw, _r302_t1[4]);
            return r272_xn$createAndSaveGlyphImpl$2Lrc3c(null, null, function () {
                var _r309_t1;
                var _r309_t0 = this;
                var r309_currentGlyph = _r309_t0;
                r309_currentGlyph.include(r272_VShape(r302_df, r302_fStraightBar, r302_top, r302_sw));
                r309_currentGlyph.include(r272_FlipAround(r302_df.middle, r302_top / 2));
                var r309_yBar = r272_ABarPosition(r1_maskBits(r302_slabKind, r1_bitOr(r272_xn$SLABLEFT$5sIl, r272_xn$SLABRIGHT$5sIl)), r302_top);
                r309_currentGlyph.include(r272_tagged('crossBar', r272_intersection(r272_HBar.t(0, r302_df.width, r309_yBar), r272_AMaskShape(r302_df, r302_fStraightBar, r302_top, r302_sw))));
                r309_currentGlyph.include(r272_ASerifs(r302_df, r302_top, r302_sw, r302_slabKind));
                return void 0;
            });
        };
        var _r272_t10 = Object.entries(r272_AConfig)[Symbol.iterator]();
        var _r272_t11 = void 0;
        while (!(_r272_t11 = _r272_t10.next()).done) {
            _r272_t12 = _r272_t11.value;
            r272_suffix = _r272_t12[0];
            r272_fStraightBar = _r272_t12[1][0];
            r272_slabKind = _r272_t12[1][1];
            _r272_t12[1];
            (function () {
                var r316_AShapeImpl = function (r317_mak, r317_top, r317_fGrek, r317_fOverlays) {
                    var _r317_t0, _r317_t1;
                    return function () {
                        var r319_yBar, _r319_t1;
                        var _r319_t0 = this;
                        var r319_currentGlyph = _r319_t0;
                        var r319_df = r272_DivFrame(1);
                        r319_currentGlyph.include(r319_df.markSet[r317_mak]());
                        r319_currentGlyph.setBaseAnchor('trailing', r319_df.rightSB, 0);
                        if (r317_fGrek)
                            r319_currentGlyph.include(r272_SetGrekUpperTonos((r319_df.rightSB - r319_df.leftSB) * (r1_maskBits(r272_slabKind, r272_xn$SLABTOP$5sIl) ? 0 : 0.2)));
                        r319_currentGlyph.include(r272_ALetterShape(new r272_xn$NamedParameterPair$2Lrc9b('df', r319_df), new r272_xn$NamedParameterPair$2Lrc9b('top', r317_top), new r272_xn$NamedParameterPair$2Lrc9b('sw', r272_Stroke), new r272_xn$NamedParameterPair$2Lrc9b('fStraightBar', r272_fStraightBar), new r272_xn$NamedParameterPair$2Lrc9b('slabKind', r272_slabKind)));
                        if (r317_fOverlays) {
                            r319_yBar = r272_ABarPosition(r1_maskBits(r272_slabKind, r1_bitOr(r272_xn$SLABLEFT$5sIl, r272_xn$SLABRIGHT$5sIl)), r317_top);
                            r319_currentGlyph.ejectTagged('crossBar');
                            r319_currentGlyph.include(r272_HOverlayBar(r1_mix(0, r272_SB, 0.5), r1_mix(r272_Width, r272_RightSB, 0.5), r319_yBar - r272_HalfStroke + 0.5 * r272_OverlayStroke));
                            r319_currentGlyph.include(r272_HOverlayBar(r1_mix(0, r272_SB, 0.5), r1_mix(r272_Width, r272_RightSB, 0.5), r1_mix(r319_yBar, r317_top, 0.25)));
                        }
                        return void 0;
                    };
                };
                r272_xn$createAndSaveGlyphImpl$2Lrc3c('A.' + r272_suffix, null, r316_AShapeImpl('capital', r272_CAP));
                r272_xn$createAndSaveGlyphImpl$2Lrc3c('grek/Alpha.' + r272_suffix, null, r316_AShapeImpl('capital', r272_CAP, true));
                r272_xn$createAndSaveGlyphImpl$2Lrc3c('smcpA.' + r272_suffix, null, r316_AShapeImpl('e', r272_XH));
                return r272_xn$createAndSaveGlyphImpl$2Lrc3c('currency/australSign.' + r272_suffix, null, r316_AShapeImpl('capital', r272_CAP, false, true));
            }());
        }
        r272_xn$selectvariant$7Hrq('A', 'A');
        r272_xn$linkreducedvariant$5sIl8('A/sansSerif', 'A', r1_MathSansSerif);
        r272_xn$selectvariant$7Hrq('smcpA', 7424, new r272_xn$NamedParameterPair$2Lrc9b('follow', 'A'));
        r272_xn$selectvariant$7Hrq('grek/Alpha', 913, new r272_xn$NamedParameterPair$2Lrc9b('follow', 'A'));
        r272_xn$selectvariant$7Hrq('currency/australSign', 8371, new r272_xn$NamedParameterPair$2Lrc9b('follow', 'A'));
        r272_xn$linkreducedvariant$5sIl8('grek/Alpha/sansSerif', 'grek/Alpha', r1_MathSansSerif, new r272_xn$NamedParameterPair$2Lrc9b('follow', 'A/sansSerif'));
        r272_alias('cyrl/A', 1040, 'A');
        r272_turned('turnA', 11375, 'A', r272_Middle, r272_CAP / 2);
        r272_xn$ExportCapture$2Lrc4b(function () {
            var _r341_t0, _r341_t1;
            return { 'LambdaShape': r272_LambdaShape };
        });
        var r272_LambdaShape = function () {
            var _r342_t6;
            var _r342_t7 = arguments;
            var _r342_t0 = [].slice.call(_r342_t7, 0);
            var _r342_t1 = [];
            var _r342_t2 = 0;
            while (_r342_t2 < _r342_t0.length) {
                if (!(_r342_t0[_r342_t2] instanceof r272_xn$NamedParameterPair$2Lrc9b))
                    _r342_t1.push(_r342_t0[_r342_t2]);
                _r342_t2 = _r342_t2 + 1;
            }
            var _r342_t3 = _r342_t0;
            var _r342_t4 = _r342_t3.length;
            var _r342_t5 = 0;
            while (_r342_t5 < _r342_t4) {
                _r342_t2 = _r342_t3[_r342_t5];
                if (_r342_t2 && _r342_t2 instanceof r272_xn$NamedParameterPair$2Lrc9b && _r342_t2.left === 'df')
                    r342_df = _r342_t2.right;
                if (_r342_t2 && _r342_t2 instanceof r272_xn$NamedParameterPair$2Lrc9b && _r342_t2.left === 'fBarStraight')
                    r342_fBarStraight = _r342_t2.right;
                if (_r342_t2 && _r342_t2 instanceof r272_xn$NamedParameterPair$2Lrc9b && _r342_t2.left === 'top')
                    r342_top = _r342_t2.right;
                if (_r342_t2 && _r342_t2 instanceof r272_xn$NamedParameterPair$2Lrc9b && _r342_t2.left === 'sw')
                    r342_sw = _r342_t2.right;
                if (_r342_t2 && _r342_t2 instanceof r272_xn$NamedParameterPair$2Lrc9b && _r342_t2.left === 'slab')
                    r342_slab = _r342_t2.right;
                _r342_t5 = _r342_t5 + 1;
            }
            var r342_df = r1_fallback(r342_df, _r342_t1[0]);
            var r342_fBarStraight = r1_fallback(r342_fBarStraight, _r342_t1[1]);
            var r342_top = r1_fallback(r342_top, _r342_t1[2]);
            var r342_sw = r1_fallback(r342_sw, _r342_t1[3]);
            var r342_slab = r1_fallback(r342_slab, _r342_t1[4], r272_SLAB);
            return function () {
                var _r348_t1;
                var _r348_t0 = this;
                var r348_currentGlyph = _r348_t0;
                r348_currentGlyph.include(r272_VShape(r342_df, r342_fBarStraight, r342_top, r342_sw));
                r348_currentGlyph.include(r272_FlipAround(r342_df.middle, r342_top / 2));
                var r348_sf = r272_SerifFrame.fromDf(r342_df, r342_top, 0);
                r348_currentGlyph.include(r272_NeedSlab(r342_slab, function () {
                    var _r353_t1;
                    var _r353_t0 = this;
                    var r353_currentGlyph = _r353_t0;
                    r353_currentGlyph.include(r348_sf.lb.full, true, true);
                    r353_currentGlyph.include(r348_sf.rb.full);
                    return void 0;
                }));
                return void 0;
            };
        };
        r272_xn$createAndSaveGlyphImpl$2Lrc3c('grek/Lambda.straight', null, function () {
            var _r358_t1;
            var _r358_t0 = this;
            var r358_currentGlyph = _r358_t0;
            r358_currentGlyph.include(r272_MarkSet.capital(), true, true);
            r358_currentGlyph.include(r272_LambdaShape(r272_DivFrame(1), true, r272_CAP, r272_Stroke));
            return void 0;
        });
        r272_xn$createAndSaveGlyphImpl$2Lrc3c('grek/Lambda.curly', null, function () {
            var _r363_t1;
            var _r363_t0 = this;
            var r363_currentGlyph = _r363_t0;
            r363_currentGlyph.include(r272_MarkSet.capital(), true, true);
            r363_currentGlyph.include(r272_LambdaShape(r272_DivFrame(1), false, r272_CAP, r272_Stroke));
            return void 0;
        });
        r272_xn$createAndSaveGlyphImpl$2Lrc3c('grek/smcpLambda.straight', null, function () {
            var _r368_t1;
            var _r368_t0 = this;
            var r368_currentGlyph = _r368_t0;
            r368_currentGlyph.include(r272_MarkSet.e(), true, true);
            r368_currentGlyph.include(r272_LambdaShape(r272_DivFrame(1), true, r272_XH, r272_Stroke));
            return void 0;
        });
        r272_xn$createAndSaveGlyphImpl$2Lrc3c('grek/smcpLambda.curly', null, function () {
            var _r373_t1;
            var _r373_t0 = this;
            var r373_currentGlyph = _r373_t0;
            r373_currentGlyph.include(r272_MarkSet.e(), true, true);
            r373_currentGlyph.include(r272_LambdaShape(r272_DivFrame(1), false, r272_XH, r272_Stroke));
            return void 0;
        });
        r272_xn$selectvariant$7Hrq('grek/Lambda', 923);
        r272_xn$selectvariant$7Hrq('grek/smcpLambda', 7463, new r272_xn$NamedParameterPair$2Lrc9b('follow', 'grek/Lambda'));
        r272_alias('latinLambda', 581, 'grek/Lambda');
        r272_xn$ExportCapture$2Lrc4b(function () {
            var _r378_t0, _r378_t1;
            return { 'DeltaShape': r272_DeltaShape };
        });
        var r272_DeltaShape = function () {
            var _r379_t6;
            var _r379_t7 = arguments;
            var _r379_t0 = [].slice.call(_r379_t7, 0);
            var _r379_t1 = [];
            var _r379_t2 = 0;
            while (_r379_t2 < _r379_t0.length) {
                if (!(_r379_t0[_r379_t2] instanceof r272_xn$NamedParameterPair$2Lrc9b))
                    _r379_t1.push(_r379_t0[_r379_t2]);
                _r379_t2 = _r379_t2 + 1;
            }
            var _r379_t3 = _r379_t0;
            var _r379_t4 = _r379_t3.length;
            var _r379_t5 = 0;
            while (_r379_t5 < _r379_t4) {
                _r379_t2 = _r379_t3[_r379_t5];
                if (_r379_t2 && _r379_t2 instanceof r272_xn$NamedParameterPair$2Lrc9b && _r379_t2.left === 'df')
                    r379_df = _r379_t2.right;
                if (_r379_t2 && _r379_t2 instanceof r272_xn$NamedParameterPair$2Lrc9b && _r379_t2.left === 'top')
                    r379_top = _r379_t2.right;
                if (_r379_t2 && _r379_t2 instanceof r272_xn$NamedParameterPair$2Lrc9b && _r379_t2.left === 'sw')
                    r379_sw = _r379_t2.right;
                if (_r379_t2 && _r379_t2 instanceof r272_xn$NamedParameterPair$2Lrc9b && _r379_t2.left === 'fBarStraight')
                    r379_fBarStraight = _r379_t2.right;
                _r379_t5 = _r379_t5 + 1;
            }
            var r379_df = r1_fallback(r379_df, _r379_t1[0]);
            var r379_top = r1_fallback(r379_top, _r379_t1[1]);
            var r379_sw = r1_fallback(r379_sw, _r379_t1[2]);
            var r379_fBarStraight = r1_fallback(r379_fBarStraight, _r379_t1[3]);
            return r272_union(r272_LambdaShape(new r272_xn$NamedParameterPair$2Lrc9b('df', r379_df), new r272_xn$NamedParameterPair$2Lrc9b('fBarStraight', r379_fBarStraight), new r272_xn$NamedParameterPair$2Lrc9b('top', r379_top), new r272_xn$NamedParameterPair$2Lrc9b('sw', r379_sw), new r272_xn$NamedParameterPair$2Lrc9b('slab', false)), r272_intersection(r272_HBar.b(0, r379_df.width, 0, r379_sw), r272_AMaskShape(r379_df, r379_fBarStraight, r379_top, r379_sw)));
        };
        r272_xn$createAndSaveGlyphImpl$2Lrc3c('grek/Delta.straight', null, function () {
            var _r391_t1;
            var _r391_t0 = this;
            var r391_currentGlyph = _r391_t0;
            r391_currentGlyph.include(r272_MarkSet.capital(), true, true);
            r391_currentGlyph.include(r272_DeltaShape(new r272_xn$NamedParameterPair$2Lrc9b('df', r272_DivFrame(1)), new r272_xn$NamedParameterPair$2Lrc9b('fBarStraight', true), new r272_xn$NamedParameterPair$2Lrc9b('top', r272_CAP), new r272_xn$NamedParameterPair$2Lrc9b('sw', r272_Stroke)));
            return void 0;
        });
        r272_xn$createAndSaveGlyphImpl$2Lrc3c('grek/Delta.curly', null, function () {
            var _r400_t1;
            var _r400_t0 = this;
            var r400_currentGlyph = _r400_t0;
            r400_currentGlyph.include(r272_MarkSet.capital(), true, true);
            r400_currentGlyph.include(r272_DeltaShape(new r272_xn$NamedParameterPair$2Lrc9b('df', r272_DivFrame(1)), new r272_xn$NamedParameterPair$2Lrc9b('fBarStraight', false), new r272_xn$NamedParameterPair$2Lrc9b('top', r272_CAP), new r272_xn$NamedParameterPair$2Lrc9b('sw', r272_Stroke)));
            return void 0;
        });
        r272_xn$selectvariant$7Hrq('grek/Delta', 916);
        r272_xn$deriveglyphs$7Hrq('cyrl/De.BGR', null, 'grek/Delta', function (r407_src, r407_gr) {
            var _r407_t0, _r407_t1;
            return function () {
                var _r409_t1;
                var _r409_t0 = this;
                var r409_currentGlyph = _r409_t0;
                r409_currentGlyph.include(r272_xn$referglyph$1aao(r407_src), r272_AS_BASE, r272_ALSO_METRICS);
                var r409_descenderOverflow = r272_SLAB ? r272_SideJut : (r272_RightSB - r272_SB) * 0.075;
                var r409_xCutLeft = r272_SB;
                var r409_xCutRight = r272_RightSB;
                r409_currentGlyph.include(r272_HBar.b(r409_xCutLeft - r409_descenderOverflow, r409_xCutRight + r409_descenderOverflow, 0));
                r409_currentGlyph.include(r272_VBar.l(r409_xCutLeft - r409_descenderOverflow, -r272_LongJut + r272_HalfStroke, r272_Stroke));
                r409_currentGlyph.include(r272_VBar.r(r409_xCutRight + r409_descenderOverflow, -r272_LongJut + r272_HalfStroke, r272_Stroke));
                return void 0;
            };
        });
        var _r272_t13 = r272_xn$Capture$2Lrc8['Letter-Blackboard'].resolve();
        var r272_BBS = _r272_t13.BBS;
        var r272_BBD = _r272_t13.BBD;
        var _r272_t14 = r272_xn$Capture$2Lrc8['Letter-Latin-V'].resolve();
        var r272_BBVShape = _r272_t14.BBVShape;
        var r272_BBVInnerMaskShape = _r272_t14.BBVInnerMaskShape;
        r272_xn$createAndSaveGlyphImpl$2Lrc3c('mathbb/A', 120120, function () {
            var _r418_t1;
            var _r418_t0 = this;
            var r418_currentGlyph = _r418_t0;
            r418_currentGlyph.include(r272_MarkSet.capital());
            r418_currentGlyph.include(r272_union(r272_BBVShape(r272_SB, r272_RightSB, 1, 1, r272_CAP), r272_intersection(r272_BBVInnerMaskShape(r272_SB, r272_RightSB, 1, 1, r272_CAP), r272_HBar.t(0, r272_Width, r272_CAP - r272_XH / 2, r272_BBS))));
            r418_currentGlyph.include(r272_FlipAround(r272_Middle, r272_CAP / 2));
            return void 0;
        });
        return r272_CreateOgonekComposition('AOgonek', 260, 'A');
    });
    return void 0;
});
