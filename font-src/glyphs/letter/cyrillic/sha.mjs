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
    r269_xn$Capture_Ext$2Lrc2b['$defineGlyphBlockImpl$'](r269_xn$Capture_Ext$2Lrc2b, 'Letter-Cyrillic-Sha', function (r270_xn$Capture$2Lrc8, r270_xn$ExportCapture$2Lrc4b) {
        var _r270_t7, _r270_t8;
        var _r270_t0 = r270_xn$Capture$2Lrc8;
        var r270_xn$createAndSaveGlyphImpl$2Lrc3c = _r270_t0['$createAndSaveGlyphImpl$'];
        var r270_xn$NamedParameterPair$2Lrc9b = _r270_t0['$NamedParameterPair$'];
        var r270_xn$assignUnicodeImpl$2Lrc8b = _r270_t0['$assignUnicodeImpl$'];
        var r270_xn$execState$2Lrc0b = _r270_t0['$execState$'];
        var r270_para = _r270_t0.para;
        var r270_AS_BASE = _r270_t0.AS_BASE;
        var r270_DivFrame = _r270_t0.DivFrame;
        var _r270_t1 = r270_xn$Capture$2Lrc8.Metrics;
        var r270_CAP = _r270_t1.CAP;
        var r270_XH = _r270_t1.XH;
        var r270_SLAB = _r270_t1.SLAB;
        var _r270_t2 = r270_xn$Capture$2Lrc8.SpiroFns;
        var _r270_t3 = r270_xn$Capture$2Lrc8.BooleFns;
        var r270_union = _r270_t3.union;
        var _r270_t4 = r270_xn$Capture$2Lrc8.CommonShapes.resolve();
        var r270_HBar = _r270_t4.HBar;
        var r270_VBar = _r270_t4.VBar;
        var r270_FlipAround = _r270_t4.FlipAround;
        var _r270_t5 = r270_xn$Capture$2Lrc8['Common-Derivatives'].resolve();
        var r270_xn$selectvariant$7Hrq = _r270_t5['select-variant'];
        var r270_xn$referglyph$1aao = _r270_t5['refer-glyph'];
        var r270_alias = _r270_t5.alias;
        var r270_turned = _r270_t5.turned;
        var r270_xn$derivecomposites$7Hrq = _r270_t5['derive-composites'];
        var _r270_t6 = r270_xn$Capture$2Lrc8['Letter-Shared-Shapes'].resolve();
        var r270_RightwardTailedBar = _r270_t6.RightwardTailedBar;
        var r270_CyrDescender = _r270_t6.CyrDescender;
        var r270_SerifFrame = _r270_t6.SerifFrame;
        var r270_CyrShaShape = function (r274_top, r274_df, r274_fInv) {
            var _r274_t0, _r274_t1;
            return function () {
                var r276_sf, _r276_t1;
                var _r276_t0 = this;
                var r276_currentGlyph = _r276_t0;
                r276_currentGlyph.include(r270_union((r274_fInv ? r270_HBar.t : r270_HBar.b)(r274_df.leftSB, r274_df.rightSB, r274_fInv ? r274_top : 0), r270_VBar.l(r274_df.leftSB, 0, r274_top, r274_df.mvs), r270_VBar.r(r274_df.rightSB, 0, r274_top, r274_df.mvs), r270_VBar.m(r274_df.middle, 0, r274_top, r274_df.mvs)));
                if (r270_SLAB) {
                    r276_sf = r270_SerifFrame.fromDf(r274_df, r274_top, 0, new r270_xn$NamedParameterPair$2Lrc9b('swSerif', r274_df.mvs));
                    if (r274_fInv) {
                        r276_currentGlyph.include(function () {
                            var _r281_t1;
                            var _r281_t0 = this;
                            var r281_currentGlyph = _r281_t0;
                            r281_currentGlyph.include(r276_sf.lt.outer, true, true);
                            r281_currentGlyph.include(r276_sf.rt.outer);
                            return void 0;
                        });
                        if (r276_sf.enoughSpaceForFullSerifs)
                            r276_currentGlyph.include(function () {
                                var _r286_t1;
                                var _r286_t0 = this;
                                var r286_currentGlyph = _r286_t0;
                                r286_currentGlyph.include(r276_sf.lb.full, true, true);
                                r286_currentGlyph.include(r276_sf.mb.full);
                                r286_currentGlyph.include(r276_sf.rb.full);
                                return void 0;
                            });
                        else
                            r276_currentGlyph.include(function () {
                                var _r292_t1;
                                var _r292_t0 = this;
                                var r292_currentGlyph = _r292_t0;
                                r292_currentGlyph.include(r276_sf.lb.outer, true, true);
                                r292_currentGlyph.include(r276_sf.rb.outer);
                                return void 0;
                            });
                    } else {
                        r276_currentGlyph.include(function () {
                            var _r297_t1;
                            var _r297_t0 = this;
                            var r297_currentGlyph = _r297_t0;
                            r297_currentGlyph.include(r276_sf.lb.outer, true, true);
                            r297_currentGlyph.include(r276_sf.rb.outer);
                            return void 0;
                        });
                        if (r276_sf.enoughSpaceForFullSerifs)
                            r276_currentGlyph.include(function () {
                                var _r302_t1;
                                var _r302_t0 = this;
                                var r302_currentGlyph = _r302_t0;
                                r302_currentGlyph.include(r276_sf.lt.full, true, true);
                                r302_currentGlyph.include(r276_sf.mt.full);
                                r302_currentGlyph.include(r276_sf.rt.full);
                                return void 0;
                            });
                        else
                            r276_currentGlyph.include(function () {
                                var _r308_t1;
                                var _r308_t0 = this;
                                var r308_currentGlyph = _r308_t0;
                                r308_currentGlyph.include(r276_sf.lt.outer, true, true);
                                r308_currentGlyph.include(r276_sf.rt.outer);
                                return void 0;
                            });
                    }
                }
                return void 0;
            };
        };
        r270_xn$createAndSaveGlyphImpl$2Lrc3c('cyrl/Sha', 1064, function () {
            var _r313_t1;
            var _r313_t0 = this;
            var r313_currentGlyph = _r313_t0;
            var r313_df = r270_DivFrame(r270_para.diversityM, 3);
            r313_currentGlyph.setWidth(r313_df.width);
            r313_currentGlyph.include(r313_df.markSet.capital());
            r313_currentGlyph.include(r270_CyrShaShape(r270_CAP, r313_df, false));
            return void 0;
        });
        r270_xn$createAndSaveGlyphImpl$2Lrc3c('cyrl/sha.upright', null, function () {
            var _r319_t1;
            var _r319_t0 = this;
            var r319_currentGlyph = _r319_t0;
            var r319_df = r270_DivFrame(r270_para.diversityM, 3);
            r319_currentGlyph.setWidth(r319_df.width);
            r319_currentGlyph.include(r319_df.markSet.e());
            r319_currentGlyph.include(r270_CyrShaShape(r270_XH, r319_df, false));
            return void 0;
        });
        r270_xn$createAndSaveGlyphImpl$2Lrc3c('cyrl/teThreeLeg', 7301, function () {
            var _r325_t1;
            var _r325_t0 = this;
            var r325_currentGlyph = _r325_t0;
            var r325_df = r270_DivFrame(r270_para.diversityM, 3);
            r325_currentGlyph.setWidth(r325_df.width);
            r325_currentGlyph.include(r325_df.markSet.e());
            r325_currentGlyph.include(r270_CyrShaShape(r270_XH, r325_df, true));
            return void 0;
        });
        r270_alias('smcpMTurned', 43002, 'cyrl/sha.upright');
        r270_turned('cyrl/sha.italic.toothedSerifless', null, 'm.serifless', r270_DivFrame(r270_para.diversityM, 3).middle, r270_XH / 2);
        r270_turned('cyrl/sha.italic.toothedSerifed', null, 'm.serifed', r270_DivFrame(r270_para.diversityM, 3).middle, r270_XH / 2);
        r270_turned('cyrl/sha.italic.toothedMotionSerifed', null, 'm.topLeftAndBottomRightSerifed', r270_DivFrame(r270_para.diversityM, 3).middle, r270_XH / 2);
        r270_xn$createAndSaveGlyphImpl$2Lrc3c('cyrl/sha.italic.toothedBottomRightSerifed', null, function () {
            var _r331_t1;
            var _r331_t0 = this;
            var r331_currentGlyph = _r331_t0;
            var r331_df = r270_DivFrame(r270_para.diversityM, 3);
            r331_currentGlyph.setWidth(r331_df.width);
            r331_currentGlyph.include(r270_xn$referglyph$1aao('m.topLeftAndBottomRightSerifed'), r270_AS_BASE);
            r331_currentGlyph.ejectTagged('serifRB');
            r331_currentGlyph.include(r270_FlipAround(r331_df.middle, r270_XH / 2));
            return void 0;
        });
        r270_xn$createAndSaveGlyphImpl$2Lrc3c('cyrl/sha.italic.tailedSerifless', null, function () {
            var _r338_t1;
            var _r338_t0 = this;
            var r338_currentGlyph = _r338_t0;
            var r338_df = r270_DivFrame(r270_para.diversityM, 3);
            r338_currentGlyph.setWidth(r338_df.width);
            r338_currentGlyph.include(r270_xn$referglyph$1aao('m.serifless'), r270_AS_BASE);
            r338_currentGlyph.ejectTagged('barL');
            r338_currentGlyph.include(r270_FlipAround(r338_df.middle, r270_XH / 2));
            r338_currentGlyph.include(r270_RightwardTailedBar(r338_df.rightSB, 0, r270_XH, new r270_xn$NamedParameterPair$2Lrc9b('sw', r338_df.mvs)));
            return void 0;
        });
        r270_xn$createAndSaveGlyphImpl$2Lrc3c('cyrl/sha.italic.tailedMotionSerifed', null, function () {
            var _r347_t1;
            var _r347_t0 = this;
            var r347_currentGlyph = _r347_t0;
            var r347_df = r270_DivFrame(r270_para.diversityM, 3);
            r347_currentGlyph.setWidth(r347_df.width);
            r347_currentGlyph.include(r270_xn$referglyph$1aao('m.topLeftAndBottomRightSerifed'), r270_AS_BASE);
            r347_currentGlyph.ejectTagged('barL');
            r347_currentGlyph.ejectTagged('serifLT');
            r347_currentGlyph.include(r270_FlipAround(r347_df.middle, r270_XH / 2));
            r347_currentGlyph.include(r270_RightwardTailedBar(r347_df.rightSB, 0, r270_XH, new r270_xn$NamedParameterPair$2Lrc9b('sw', r347_df.mvs)));
            return void 0;
        });
        r270_xn$createAndSaveGlyphImpl$2Lrc3c('cyrl/sha.italic.tailedSerifed', null, function () {
            var _r357_t1;
            var _r357_t0 = this;
            var r357_currentGlyph = _r357_t0;
            var r357_df = r270_DivFrame(r270_para.diversityM, 3);
            r357_currentGlyph.setWidth(r357_df.width);
            r357_currentGlyph.include(r270_xn$referglyph$1aao('m.serifed'), r270_AS_BASE);
            r357_currentGlyph.ejectTagged('barL');
            r357_currentGlyph.ejectTagged('serifLT');
            r357_currentGlyph.include(r270_FlipAround(r357_df.middle, r270_XH / 2));
            r357_currentGlyph.include(r270_RightwardTailedBar(r357_df.rightSB, 0, r270_XH, new r270_xn$NamedParameterPair$2Lrc9b('sw', r357_df.mvs)));
            return void 0;
        });
        r270_xn$createAndSaveGlyphImpl$2Lrc3c('cyrl/sha.italic.motionSerifedShachaBase', null, function () {
            var _r367_t1;
            var _r367_t0 = this;
            var r367_currentGlyph = _r367_t0;
            var r367_df = r270_DivFrame(r270_para.diversityM, 3);
            r367_currentGlyph.setWidth(r367_df.width);
            r367_currentGlyph.include(r270_xn$referglyph$1aao('m.topLeftAndBottomRightSerifed'), r270_AS_BASE);
            r367_currentGlyph.ejectTagged('serifLT');
            r367_currentGlyph.include(r270_FlipAround(r367_df.middle, r270_XH / 2));
            return void 0;
        });
        r270_xn$createAndSaveGlyphImpl$2Lrc3c('cyrl/sha.italic.serifedShachaBase', null, function () {
            var _r374_t1;
            var _r374_t0 = this;
            var r374_currentGlyph = _r374_t0;
            var r374_df = r270_DivFrame(r270_para.diversityM, 3);
            r374_currentGlyph.setWidth(r374_df.width);
            r374_currentGlyph.include(r270_xn$referglyph$1aao('m.serifed'), r270_AS_BASE);
            r374_currentGlyph.ejectTagged('serifLT');
            r374_currentGlyph.include(r270_FlipAround(r374_df.middle, r270_XH / 2));
            return void 0;
        });
        r270_xn$selectvariant$7Hrq('cyrl/sha.italic');
        r270_alias('cyrl/sha.BGR', null, 'cyrl/sha.italic');
        var r270_CyrShchaShape = function (r379_top, r379_df) {
            var _r379_t0, _r379_t1;
            return function () {
                var _r381_t1;
                var _r381_t0 = this;
                var r381_currentGlyph = _r381_t0;
                r381_currentGlyph.include(r270_CyrShaShape(r379_top, r379_df));
                r381_currentGlyph.include(r270_CyrDescender.rSideJut(r379_df.rightSB, 0, new r270_xn$NamedParameterPair$2Lrc9b('refSw', r379_df.mvs)));
                return void 0;
            };
        };
        r270_xn$createAndSaveGlyphImpl$2Lrc3c('cyrl/Shcha', 1065, function () {
            var _r387_t1;
            var _r387_t0 = this;
            var r387_currentGlyph = _r387_t0;
            var r387_df = r270_DivFrame(r270_para.diversityM, 3);
            r387_currentGlyph.setWidth(r387_df.width);
            r387_currentGlyph.include(r387_df.markSet.capital());
            r387_currentGlyph.include(r270_CyrShchaShape(r270_CAP, r387_df));
            return void 0;
        });
        r270_xn$createAndSaveGlyphImpl$2Lrc3c('cyrl/shcha.upright', null, function () {
            var _r393_t1;
            var _r393_t0 = this;
            var r393_currentGlyph = _r393_t0;
            var r393_df = r270_DivFrame(r270_para.diversityM, 3);
            r393_currentGlyph.setWidth(r393_df.width);
            r393_currentGlyph.include(r393_df.markSet.e());
            r393_currentGlyph.include(r270_CyrShchaShape(r270_XH, r393_df));
            return void 0;
        });
        r270_xn$createAndSaveGlyphImpl$2Lrc3c('cyrl/shcha.italic.toothedSerifless', null, function () {
            var _r399_t1;
            var _r399_t0 = this;
            var r399_currentGlyph = _r399_t0;
            var r399_df = r270_DivFrame(r270_para.diversityM, 3);
            r399_currentGlyph.setWidth(r399_df.width);
            r399_currentGlyph.include(r270_xn$referglyph$1aao('cyrl/sha.italic.toothedSerifless'), r270_AS_BASE);
            r399_currentGlyph.include(r270_CyrDescender.rSideJut(r399_df.rightSB, 0, new r270_xn$NamedParameterPair$2Lrc9b('refSw', r399_df.mvs)));
            return void 0;
        });
        r270_xn$createAndSaveGlyphImpl$2Lrc3c('cyrl/shcha.italic.toothedMotionSerifed', null, function () {
            var _r406_t1;
            var _r406_t0 = this;
            var r406_currentGlyph = _r406_t0;
            var r406_df = r270_DivFrame(r270_para.diversityM, 3);
            r406_currentGlyph.setWidth(r406_df.width);
            r406_currentGlyph.include(r270_xn$referglyph$1aao('cyrl/sha.italic.motionSerifedShachaBase'), r270_AS_BASE);
            r406_currentGlyph.include(r270_CyrDescender.rSideJut(r406_df.rightSB, 0, new r270_xn$NamedParameterPair$2Lrc9b('refSw', r406_df.mvs)));
            return void 0;
        });
        r270_xn$createAndSaveGlyphImpl$2Lrc3c('cyrl/shcha.italic.toothedSerifed', null, function () {
            var _r413_t1;
            var _r413_t0 = this;
            var r413_currentGlyph = _r413_t0;
            var r413_df = r270_DivFrame(r270_para.diversityM, 3);
            r413_currentGlyph.setWidth(r413_df.width);
            r413_currentGlyph.include(r270_xn$referglyph$1aao('cyrl/sha.italic.serifedShachaBase'), r270_AS_BASE);
            r413_currentGlyph.include(r270_CyrDescender.rSideJut(r413_df.rightSB, 0, new r270_xn$NamedParameterPair$2Lrc9b('refSw', r413_df.mvs)));
            return void 0;
        });
        r270_xn$selectvariant$7Hrq('cyrl/shcha.italic');
        r270_alias('cyrl/shcha.BGR', null, 'cyrl/shcha.italic');
        return r270_xn$derivecomposites$7Hrq('cyrl/te.SRB', null, 'cyrl/sha.italic', 'macronAbove');
    });
    return void 0;
});
