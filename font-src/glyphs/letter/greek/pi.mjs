'use strict';
import * as _s0_t0 from '../../../support/utils.mjs';
import * as _s0_t1 from '../../../meta/aesthetics.mjs';
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
var r1_DesignParameters = _r1_t9.DesignParameters;
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
    r270_xn$Capture_Ext$2Lrc2b['$defineGlyphBlockImpl$'](r270_xn$Capture_Ext$2Lrc2b, 'Letter-Greek-Pi', function (r271_xn$Capture$2Lrc8, r271_xn$ExportCapture$2Lrc4b) {
        var _r271_t9, _r271_t10;
        var _r271_t0 = r271_xn$Capture$2Lrc8;
        var r271_xn$createAndSaveGlyphImpl$2Lrc3c = _r271_t0['$createAndSaveGlyphImpl$'];
        var r271_xn$NamedParameterPair$2Lrc9b = _r271_t0['$NamedParameterPair$'];
        var r271_xn$assignUnicodeImpl$2Lrc8b = _r271_t0['$assignUnicodeImpl$'];
        var r271_xn$execState$2Lrc0b = _r271_t0['$execState$'];
        var r271_para = _r271_t0.para;
        var r271_MarkSet = _r271_t0.MarkSet;
        var r271_AS_BASE = _r271_t0.AS_BASE;
        var r271_DivFrame = _r271_t0.DivFrame;
        var _r271_t1 = r271_xn$Capture$2Lrc8.Metrics;
        var r271_SB = _r271_t1.SB;
        var r271_CAP = _r271_t1.CAP;
        var r271_XH = _r271_t1.XH;
        var r271_HVContrast = _r271_t1.HVContrast;
        var r271_Stroke = _r271_t1.Stroke;
        var r271_SLAB = _r271_t1.SLAB;
        var r271_RightSB = _r271_t1.RightSB;
        var r271_ArchDepthA = _r271_t1.ArchDepthA;
        var r271_ArchDepthB = _r271_t1.ArchDepthB;
        var _r271_t2 = r271_xn$Capture$2Lrc8.SpiroFns;
        var _r271_t3 = r271_xn$Capture$2Lrc8.BooleFns;
        var _r271_t4 = r271_xn$Capture$2Lrc8.CommonShapes.resolve();
        var r271_HBar = _r271_t4.HBar;
        var r271_VBar = _r271_t4.VBar;
        var _r271_t5 = r271_xn$Capture$2Lrc8['Common-Derivatives'].resolve();
        var r271_xn$referglyph$1aao = _r271_t5['refer-glyph'];
        var r271_alias = _r271_t5.alias;
        var r271_xn$deriveglyphs$7Hrq = _r271_t5['derive-glyphs'];
        var r271_xn$derivecomposites$7Hrq = _r271_t5['derive-composites'];
        var _r271_t6 = r271_xn$Capture$2Lrc8['Letter-Blackboard'].resolve();
        var r271_BBS = _r271_t6.BBS;
        var r271_BBD = _r271_t6.BBD;
        var r271_BBBarLeft = _r271_t6.BBBarLeft;
        var r271_BBBarRight = _r271_t6.BBBarRight;
        var _r271_t7 = r271_xn$Capture$2Lrc8['Letter-Shared-Shapes'].resolve();
        var r271_RightwardTailedBar = _r271_t7.RightwardTailedBar;
        var r271_SerifFrame = _r271_t7.SerifFrame;
        var r271_nShoulder = _r271_t7.nShoulder;
        var _r271_t8 = r271_xn$Capture$2Lrc8['Letter-Shared-Shapes'].resolve();
        var r271_CyrDescender = _r271_t8.CyrDescender;
        var r271_MidHook = _r271_t8.MidHook;
        r271_xn$ExportCapture$2Lrc4b(function () {
            var _r278_t0, _r278_t1;
            return { 'PiShape': r271_PiShape };
        });
        var r271_PiShape = function () {
            var _r279_t6;
            var _r279_t7 = arguments;
            var _r279_t0 = [].slice.call(_r279_t7, 0);
            var _r279_t1 = [];
            var _r279_t2 = 0;
            while (_r279_t2 < _r279_t0.length) {
                if (!(_r279_t0[_r279_t2] instanceof r271_xn$NamedParameterPair$2Lrc9b))
                    _r279_t1.push(_r279_t0[_r279_t2]);
                _r279_t2 = _r279_t2 + 1;
            }
            var _r279_t3 = _r279_t0;
            var _r279_t4 = _r279_t3.length;
            var _r279_t5 = 0;
            while (_r279_t5 < _r279_t4) {
                _r279_t2 = _r279_t3[_r279_t5];
                if (_r279_t2 && _r279_t2 instanceof r271_xn$NamedParameterPair$2Lrc9b && _r279_t2.left === 'df')
                    r279_df = _r279_t2.right;
                if (_r279_t2 && _r279_t2 instanceof r271_xn$NamedParameterPair$2Lrc9b && _r279_t2.left === 'top')
                    r279_top = _r279_t2.right;
                if (_r279_t2 && _r279_t2 instanceof r271_xn$NamedParameterPair$2Lrc9b && _r279_t2.left === 'bottom')
                    r279_bottom = _r279_t2.right;
                if (_r279_t2 && _r279_t2 instanceof r271_xn$NamedParameterPair$2Lrc9b && _r279_t2.left === 'shrinkRate')
                    r279_shrinkRate = _r279_t2.right;
                if (_r279_t2 && _r279_t2 instanceof r271_xn$NamedParameterPair$2Lrc9b && _r279_t2.left === 'fine')
                    r279_fine = _r279_t2.right;
                if (_r279_t2 && _r279_t2 instanceof r271_xn$NamedParameterPair$2Lrc9b && _r279_t2.left === 'doSerif')
                    r279_doSerif = _r279_t2.right;
                if (_r279_t2 && _r279_t2 instanceof r271_xn$NamedParameterPair$2Lrc9b && _r279_t2.left === 'endShrink')
                    r279_endShrink = _r279_t2.right;
                if (_r279_t2 && _r279_t2 instanceof r271_xn$NamedParameterPair$2Lrc9b && _r279_t2.left === 'tailed')
                    r279_tailed = _r279_t2.right;
                _r279_t5 = _r279_t5 + 1;
            }
            var r279_df = r1_fallback(r279_df, _r279_t1[0]);
            var r279_top = r1_fallback(r279_top, _r279_t1[1]);
            var r279_bottom = r1_fallback(r279_bottom, _r279_t1[2]);
            var r279_shrinkRate = r1_fallback(r279_shrinkRate, _r279_t1[3], 0.05);
            var r279_fine = r1_fallback(r279_fine, _r279_t1[4], r271_Stroke);
            var r279_doSerif = r1_fallback(r279_doSerif, _r279_t1[5], false);
            var r279_endShrink = r1_fallback(r279_endShrink, _r279_t1[6], 0);
            var r279_tailed = r1_fallback(r279_tailed, _r279_t1[7], false);
            return function () {
                var r285_sf, _r285_t1;
                var _r285_t0 = this;
                var r285_currentGlyph = _r285_t0;
                var r285_shrink = r279_doSerif ? 0 : r279_shrinkRate * (r279_df.rightSB - r279_df.leftSB);
                var r285_endexpand = r279_doSerif ? 0 : -r279_endShrink * (r279_df.rightSB - r279_df.leftSB) || r285_shrink / 2;
                r285_currentGlyph.include(r271_HBar.t(r279_df.leftSB - r285_endexpand, r279_df.rightSB + r285_endexpand, r279_top, r279_fine));
                r285_currentGlyph.include(r271_VBar.l(r279_df.leftSB + r285_shrink, r279_bottom, r279_top - r279_fine / 2, r279_fine));
                if (r279_tailed)
                    r285_currentGlyph.include(r271_RightwardTailedBar(r279_df.rightSB - r285_shrink, r279_bottom, r279_top));
                else
                    r285_currentGlyph.include(r271_VBar.r(r279_df.rightSB - r285_shrink, r279_bottom, r279_top - r279_fine / 2, r279_fine));
                if (r279_doSerif) {
                    r285_sf = r271_SerifFrame(r279_top, r279_bottom, r279_df.leftSB + r285_shrink, r279_df.rightSB - r285_shrink, new r271_xn$NamedParameterPair$2Lrc9b('swRef', r279_fine));
                    r285_currentGlyph.include(function () {
                        var _r293_t1;
                        var _r293_t0 = this;
                        var r293_currentGlyph = _r293_t0;
                        r293_currentGlyph.include(r285_sf.lt.outer, true, true);
                        r293_currentGlyph.include(r285_sf.rt.outer);
                        r293_currentGlyph.include(r285_sf.lb.full);
                        r293_currentGlyph.include(r285_sf.rb.full);
                        return void 0;
                    });
                }
                return void 0;
            };
        };
        var r271_MathBBPiShape = function () {
            var _r298_t6;
            var _r298_t7 = arguments;
            var _r298_t0 = [].slice.call(_r298_t7, 0);
            var _r298_t1 = [];
            var _r298_t2 = 0;
            while (_r298_t2 < _r298_t0.length) {
                if (!(_r298_t0[_r298_t2] instanceof r271_xn$NamedParameterPair$2Lrc9b))
                    _r298_t1.push(_r298_t0[_r298_t2]);
                _r298_t2 = _r298_t2 + 1;
            }
            var _r298_t3 = _r298_t0;
            var _r298_t4 = _r298_t3.length;
            var _r298_t5 = 0;
            while (_r298_t5 < _r298_t4) {
                _r298_t2 = _r298_t3[_r298_t5];
                if (_r298_t2 && _r298_t2 instanceof r271_xn$NamedParameterPair$2Lrc9b && _r298_t2.left === 'df')
                    r298_df = _r298_t2.right;
                if (_r298_t2 && _r298_t2 instanceof r271_xn$NamedParameterPair$2Lrc9b && _r298_t2.left === 'top')
                    r298_top = _r298_t2.right;
                if (_r298_t2 && _r298_t2 instanceof r271_xn$NamedParameterPair$2Lrc9b && _r298_t2.left === 'bottom')
                    r298_bottom = _r298_t2.right;
                if (_r298_t2 && _r298_t2 instanceof r271_xn$NamedParameterPair$2Lrc9b && _r298_t2.left === 'shrinkRate')
                    r298_shrinkRate = _r298_t2.right;
                if (_r298_t2 && _r298_t2 instanceof r271_xn$NamedParameterPair$2Lrc9b && _r298_t2.left === 'endShrink')
                    r298_endShrink = _r298_t2.right;
                _r298_t5 = _r298_t5 + 1;
            }
            var r298_df = r1_fallback(r298_df, _r298_t1[0]);
            var r298_top = r1_fallback(r298_top, _r298_t1[1]);
            var r298_bottom = r1_fallback(r298_bottom, _r298_t1[2]);
            var r298_shrinkRate = r1_fallback(r298_shrinkRate, _r298_t1[3], 0.05);
            var r298_endShrink = r1_fallback(r298_endShrink, _r298_t1[4], 0);
            return function () {
                var _r304_t1;
                var _r304_t0 = this;
                var r304_currentGlyph = _r304_t0;
                var r304_shrink = r298_shrinkRate * (r298_df.rightSB - r298_df.leftSB);
                var r304_endexpand = -r298_endShrink * (r298_df.rightSB - r298_df.leftSB) || r304_shrink / 2;
                r304_currentGlyph.include(r271_HBar.t(r298_df.leftSB - r304_endexpand, r298_df.rightSB + r304_endexpand, r298_top, r271_BBS));
                r304_currentGlyph.include(r271_BBBarLeft(r298_df.leftSB + r304_shrink, r298_bottom, r298_top));
                r304_currentGlyph.include(r271_BBBarRight(r298_df.rightSB - r304_shrink, r298_bottom, r298_top));
                return void 0;
            };
        };
        r271_xn$createAndSaveGlyphImpl$2Lrc3c('grek/Pi', 928, function () {
            var _r310_t1;
            var _r310_t0 = this;
            var r310_currentGlyph = _r310_t0;
            r310_currentGlyph.include(r271_MarkSet.capital());
            r310_currentGlyph.include(r271_PiShape(r271_DivFrame(1), r271_CAP, 0, new r271_xn$NamedParameterPair$2Lrc9b('shrinkRate', 0), new r271_xn$NamedParameterPair$2Lrc9b('doSerif', r271_SLAB)));
            return void 0;
        });
        r271_alias('cyrl/Pe', 1055, 'grek/Pi');
        r271_xn$createAndSaveGlyphImpl$2Lrc3c('grek/smcpPi', 7464, function () {
            var _r317_t1;
            var _r317_t0 = this;
            var r317_currentGlyph = _r317_t0;
            r317_currentGlyph.include(r271_MarkSet.e());
            r317_currentGlyph.include(r271_PiShape(r271_DivFrame(1), r271_XH, 0, new r271_xn$NamedParameterPair$2Lrc9b('shrinkRate', 0), new r271_xn$NamedParameterPair$2Lrc9b('doSerif', r271_SLAB)));
            return void 0;
        });
        r271_xn$createAndSaveGlyphImpl$2Lrc3c('mathbb/grek/Pi', 8511, function () {
            var _r324_t1;
            var _r324_t0 = this;
            var r324_currentGlyph = _r324_t0;
            r324_currentGlyph.include(r271_MarkSet.capital());
            r324_currentGlyph.include(r271_MathBBPiShape(r271_DivFrame(1), r271_CAP, 0, new r271_xn$NamedParameterPair$2Lrc9b('shrinkRate', 0)));
            return void 0;
        });
        r271_xn$createAndSaveGlyphImpl$2Lrc3c('cyrl/pe.upright', null, function () {
            var _r330_t1;
            var _r330_t0 = this;
            var r330_currentGlyph = _r330_t0;
            r330_currentGlyph.include(r271_MarkSet.e());
            r330_currentGlyph.include(r271_PiShape(r271_DivFrame(1), r271_XH, 0, new r271_xn$NamedParameterPair$2Lrc9b('shrinkRate', 0), new r271_xn$NamedParameterPair$2Lrc9b('doSerif', r271_SLAB)));
            return void 0;
        });
        r271_xn$deriveglyphs$7Hrq('cyrl/pe.SRB', null, 'u', function (r335_src, r335_gr) {
            var _r335_t0, _r335_t1;
            return function () {
                var _r337_t1;
                var _r337_t0 = this;
                var r337_currentGlyph = _r337_t0;
                r337_currentGlyph.include(r271_xn$referglyph$1aao(r335_src), r271_AS_BASE);
                r337_currentGlyph.include(r271_xn$referglyph$1aao('macronAbove'));
                return void 0;
            };
        });
        r271_xn$derivecomposites$7Hrq('cyrl/PeDescender', 1316, 'cyrl/Pe', r271_CyrDescender.rSideJut(r271_RightSB, 0));
        r271_xn$derivecomposites$7Hrq('cyrl/peDescender.upright', null, 'cyrl/pe.upright', r271_CyrDescender.rSideJut(r271_RightSB, 0));
        r271_xn$createAndSaveGlyphImpl$2Lrc3c('grek/pi', 960, function () {
            var _r342_t1;
            var _r342_t0 = this;
            var r342_currentGlyph = _r342_t0;
            r342_currentGlyph.include(r271_MarkSet.e());
            r342_currentGlyph.include(r271_PiShape(r271_DivFrame(1), r271_XH, 0, new r271_xn$NamedParameterPair$2Lrc9b('doSerif', false), new r271_xn$NamedParameterPair$2Lrc9b('shrinkRate', 1 / 6 - 0.25 * r271_Stroke * r271_HVContrast / (r271_RightSB - r271_SB)), new r271_xn$NamedParameterPair$2Lrc9b('tailed', true)));
            return void 0;
        });
        r271_xn$createAndSaveGlyphImpl$2Lrc3c('mathbb/grek/pi', 8508, function () {
            var _r350_t1;
            var _r350_t0 = this;
            var r350_currentGlyph = _r350_t0;
            r350_currentGlyph.include(r271_MarkSet.e());
            r350_currentGlyph.include(r271_MathBBPiShape(r271_DivFrame(1), r271_XH, 0, new r271_xn$NamedParameterPair$2Lrc9b('shrinkRate', 0.06)));
            return void 0;
        });
        var r271_CyrlPeHookShape = function (r354_df, r354_top) {
            var _r354_t0, _r354_t1;
            return function () {
                var r356_sf, _r356_t1;
                var _r356_t0 = this;
                var r356_currentGlyph = _r356_t0;
                var r356_xm = r354_df.middle + 0.5 * r354_df.mvs * r271_HVContrast;
                r356_currentGlyph.include(r271_HBar.t(r354_df.leftSB, r356_xm, r354_top, r354_df.mvs));
                r356_currentGlyph.include(r271_VBar.l(r354_df.leftSB, 0, r354_top - r354_df.mvs / 2, r354_df.mvs));
                r356_currentGlyph.include(r271_VBar.r(r356_xm, 0, r354_top - r354_df.mvs / 2, r354_df.mvs));
                r356_currentGlyph.include(r271_MidHook.m(r354_df, r354_top));
                if (r271_SLAB) {
                    r356_sf = r271_SerifFrame.fromDf(r354_df, r354_top, 0).slice(0, 1);
                    if (r354_df.width > r271_para.refJut * 7) {
                        r356_currentGlyph.include(r356_sf.lt.outer);
                        r356_currentGlyph.include(r356_sf.rt.outer);
                        r356_currentGlyph.include(r356_sf.lb.full);
                        r356_currentGlyph.include(r356_sf.rb.full);
                    } else {
                        r356_currentGlyph.include(r356_sf.lt.outer);
                        r356_currentGlyph.include(r356_sf.rt.outer);
                        r356_currentGlyph.include(r356_sf.lb.outer);
                        r356_currentGlyph.include(r356_sf.rb.outer);
                    }
                }
                return void 0;
            };
        };
        r271_xn$createAndSaveGlyphImpl$2Lrc3c('cyrl/PeMidHook', 1190, function () {
            var _r371_t1;
            var _r371_t0 = this;
            var r371_currentGlyph = _r371_t0;
            var r371_df = r271_DivFrame(r271_para.diversityM, 3);
            r371_currentGlyph.setWidth(r371_df.width);
            r371_currentGlyph.include(r371_df.markSet.capDesc());
            r371_currentGlyph.include(r271_CyrlPeHookShape(r371_df, r271_CAP));
            return void 0;
        });
        r271_xn$createAndSaveGlyphImpl$2Lrc3c('cyrl/peMidHook.upright', null, function () {
            var _r377_t1;
            var _r377_t0 = this;
            var r377_currentGlyph = _r377_t0;
            var r377_df = r271_DivFrame(r271_para.diversityM, 3);
            r377_currentGlyph.setWidth(r377_df.width);
            r377_currentGlyph.include(r377_df.markSet.p());
            r377_currentGlyph.include(r271_CyrlPeHookShape(r377_df, r271_XH));
            return void 0;
        });
        return r271_xn$createAndSaveGlyphImpl$2Lrc3c('cyrl/peMidHook.italic', null, function () {
            var r383_sf, _r383_t1;
            var _r383_t0 = this;
            var r383_currentGlyph = _r383_t0;
            var r383_df = r271_DivFrame(r271_para.diversityM, 3);
            r383_currentGlyph.setWidth(r383_df.width);
            r383_currentGlyph.include(r383_df.markSet.p());
            var r383_xm = r383_df.middle + 0.5 * r383_df.mvs * r271_HVContrast;
            r383_currentGlyph.include(r271_VBar.l(r383_df.leftSB, 0, r271_XH, r383_df.mvs));
            r383_currentGlyph.include(r271_nShoulder(new r271_xn$NamedParameterPair$2Lrc9b('left', r383_df.leftSB + r383_df.mvs * r271_HVContrast), new r271_xn$NamedParameterPair$2Lrc9b('right', r383_xm), new r271_xn$NamedParameterPair$2Lrc9b('top', r271_XH), new r271_xn$NamedParameterPair$2Lrc9b('bottom', 0), new r271_xn$NamedParameterPair$2Lrc9b('ada', r271_ArchDepthA), new r271_xn$NamedParameterPair$2Lrc9b('adb', r271_ArchDepthB), new r271_xn$NamedParameterPair$2Lrc9b('stroke', r383_df.mvs)));
            r383_currentGlyph.include(r271_MidHook.m(r383_df, r271_XH));
            if (r271_SLAB) {
                r383_sf = r271_SerifFrame.fromDf(r383_df, r271_XH, 0).slice(0, 1);
                r383_currentGlyph.include(r383_sf.lt.outer);
                r383_currentGlyph.include(r383_sf.rb.outer);
            }
            return void 0;
        });
    });
    return void 0;
});
