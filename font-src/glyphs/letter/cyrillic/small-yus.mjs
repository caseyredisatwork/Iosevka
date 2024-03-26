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
    r269_xn$Capture_Ext$2Lrc2b['$defineGlyphBlockImpl$'](r269_xn$Capture_Ext$2Lrc2b, 'Letter-Cyrillic-SmallYus', function (r270_xn$Capture$2Lrc8, r270_xn$ExportCapture$2Lrc4b) {
        var _r270_t9, _r270_t10;
        var _r270_t0 = r270_xn$Capture$2Lrc8;
        var r270_xn$createAndSaveGlyphImpl$2Lrc3c = _r270_t0['$createAndSaveGlyphImpl$'];
        var r270_xn$NamedParameterPair$2Lrc9b = _r270_t0['$NamedParameterPair$'];
        var r270_xn$assignUnicodeImpl$2Lrc8b = _r270_t0['$assignUnicodeImpl$'];
        var r270_xn$execState$2Lrc0b = _r270_t0['$execState$'];
        var r270_para = _r270_t0.para;
        var r270_tagged = _r270_t0.tagged;
        var r270_DivFrame = _r270_t0.DivFrame;
        var _r270_t1 = r270_xn$Capture$2Lrc8.Metrics;
        var r270_Width = _r270_t1.Width;
        var r270_CAP = _r270_t1.CAP;
        var r270_XH = _r270_t1.XH;
        var r270_Translate = _r270_t1.Translate;
        var r270_SLAB = _r270_t1.SLAB;
        var r270_AdviceStroke = _r270_t1.AdviceStroke;
        var _r270_t2 = r270_xn$Capture$2Lrc8.SpiroFns;
        var _r270_t3 = r270_xn$Capture$2Lrc8.BooleFns;
        var r270_intersection = _r270_t3.intersection;
        var _r270_t4 = r270_xn$Capture$2Lrc8.CommonShapes.resolve();
        var r270_HBar = _r270_t4.HBar;
        var r270_VBar = _r270_t4.VBar;
        var _r270_t5 = r270_xn$Capture$2Lrc8['Common-Derivatives'].resolve();
        var r270_xn$selectvariant$7Hrq = _r270_t5['select-variant'];
        var _r270_t6 = r270_xn$Capture$2Lrc8['Letter-Shared-Shapes'].resolve();
        var r270_SerifFrame = _r270_t6.SerifFrame;
        var _r270_t7 = r270_xn$Capture$2Lrc8['Letter-Latin-Upper-A'].resolve();
        var r270_LambdaShape = _r270_t7.LambdaShape;
        var r270_DeltaShape = _r270_t7.DeltaShape;
        var r270_AMaskShape = _r270_t7.AMaskShape;
        var _r270_t8 = r270_xn$Capture$2Lrc8['Letter-Cyrillic-Iotified-A'].resolve();
        var r270_Iotified = _r270_t8.Iotified;
        var r270_CyrSmallYusShape = function (r276_df, r276_top, r276_straightBar, r276__fine) {
            var _r276_t0, _r276_t1;
            return function () {
                var r278_sf, _r278_t1;
                var _r278_t0 = this;
                var r278_currentGlyph = _r278_t0;
                var r278_fine = r1_fallback(r276__fine, r270_AdviceStroke(3.3, r276_df.div));
                r278_currentGlyph.include(r270_LambdaShape(new r270_xn$NamedParameterPair$2Lrc9b('df', r276_df), new r270_xn$NamedParameterPair$2Lrc9b('fBarStraight', r276_straightBar), new r270_xn$NamedParameterPair$2Lrc9b('top', r276_top), new r270_xn$NamedParameterPair$2Lrc9b('sw', r278_fine), new r270_xn$NamedParameterPair$2Lrc9b('slab', false)));
                r278_currentGlyph.include(r270_intersection(r270_HBar.t(r276_df.leftSB, r276_df.rightSB, r276_top / 2, r278_fine), r270_AMaskShape(r276_df, r276_straightBar, r276_top, r278_fine)));
                r278_currentGlyph.include(r270_VBar.m(r276_df.middle, r276_top / 2, 0, r278_fine));
                if (r270_SLAB) {
                    r278_sf = r270_SerifFrame.fromDf(r276_df, r276_top, 0, new r270_xn$NamedParameterPair$2Lrc9b('swSerif', r278_fine));
                    r278_currentGlyph.include(r270_tagged('serifLB', r278_sf.lb.outer));
                    r278_currentGlyph.include(r270_tagged('serifRB', r278_sf.rb.outer));
                    if (r278_sf.enoughSpaceForFullSerifs)
                        r278_currentGlyph.include(r270_tagged('serifMB', r278_sf.mb.full));
                }
                return void 0;
            };
        };
        var r270_CyrClosedSmallYusShape = function (r291_df, r291_top, r291_straightBar, r291__fine) {
            var _r291_t0, _r291_t1;
            return function () {
                var r293_sf, _r293_t1;
                var _r293_t0 = this;
                var r293_currentGlyph = _r293_t0;
                var r293_fine = r1_fallback(r291__fine, r270_AdviceStroke(2.75, r291_df.div));
                r293_currentGlyph.include(r270_DeltaShape(new r270_xn$NamedParameterPair$2Lrc9b('df', r291_df), new r270_xn$NamedParameterPair$2Lrc9b('top', r291_top), new r270_xn$NamedParameterPair$2Lrc9b('sw', r293_fine), new r270_xn$NamedParameterPair$2Lrc9b('fBarStraight', r291_straightBar), new r270_xn$NamedParameterPair$2Lrc9b('slab', false)));
                r293_currentGlyph.include(r270_intersection(r270_HBar.t(r291_df.leftSB, r291_df.rightSB, r291_top / 2, r293_fine), r270_AMaskShape(r291_df, r291_straightBar, r291_top, r293_fine)));
                if (r270_SLAB) {
                    r293_sf = r270_SerifFrame.fromDf(r291_df, r291_top, 0, new r270_xn$NamedParameterPair$2Lrc9b('swSerif', r293_fine));
                    r293_currentGlyph.include(r270_tagged('serifLB', r293_sf.lb.outer));
                    r293_currentGlyph.include(r270_tagged('serifRB', r293_sf.rb.outer));
                }
                return void 0;
            };
        };
        r270_xn$createAndSaveGlyphImpl$2Lrc3c('.WF.font-src/glyphs/letter/cyrillic/small-yus.ptl.1', null, function () {
            var _r306_t1;
            var _r306_t0 = this;
            var r306_currentGlyph = _r306_t0;
            var r306_df = r270_DivFrame(r270_para.diversityM, 3);
            r306_currentGlyph.setWidth(r306_df.width);
            r306_currentGlyph.include(r306_df.markSet.capital());
            r270_xn$createAndSaveGlyphImpl$2Lrc3c('cyrl/SmallYus.straight', null, function () {
                var _r311_t1;
                var _r311_t0 = this;
                _r311_t0.include(r306_currentGlyph, true, true);
                _r311_t0.cloneRankFromGlyph(r306_currentGlyph);
                return _r311_t0.include(r270_CyrSmallYusShape(r306_df, r270_CAP, true));
            });
            r270_xn$createAndSaveGlyphImpl$2Lrc3c('cyrl/SmallYus.curly', null, function () {
                var _r314_t1;
                var _r314_t0 = this;
                _r314_t0.include(r306_currentGlyph, true, true);
                _r314_t0.cloneRankFromGlyph(r306_currentGlyph);
                return _r314_t0.include(r270_CyrSmallYusShape(r306_df, r270_CAP, false));
            });
            return void 0;
        });
        r270_xn$createAndSaveGlyphImpl$2Lrc3c('.WF.font-src/glyphs/letter/cyrillic/small-yus.ptl.2', null, function () {
            var _r317_t1;
            var _r317_t0 = this;
            var r317_currentGlyph = _r317_t0;
            var r317_df = r270_DivFrame(1, 3);
            r317_currentGlyph.setWidth(r317_df.width);
            r317_currentGlyph.include(r317_df.markSet.e());
            r270_xn$createAndSaveGlyphImpl$2Lrc3c('cyrl/smallYus.straight', null, function () {
                var _r322_t1;
                var _r322_t0 = this;
                _r322_t0.include(r317_currentGlyph, true, true);
                _r322_t0.cloneRankFromGlyph(r317_currentGlyph);
                return _r322_t0.include(r270_CyrSmallYusShape(r317_df, r270_XH, true));
            });
            r270_xn$createAndSaveGlyphImpl$2Lrc3c('cyrl/smallYus.curly', null, function () {
                var _r325_t1;
                var _r325_t0 = this;
                _r325_t0.include(r317_currentGlyph, true, true);
                _r325_t0.cloneRankFromGlyph(r317_currentGlyph);
                return _r325_t0.include(r270_CyrSmallYusShape(r317_df, r270_XH, false));
            });
            return void 0;
        });
        r270_xn$createAndSaveGlyphImpl$2Lrc3c('.WF.font-src/glyphs/letter/cyrillic/small-yus.ptl.3', null, function () {
            var _r328_t1;
            var _r328_t0 = this;
            var r328_currentGlyph = _r328_t0;
            var r328_df = r270_DivFrame(1);
            r328_currentGlyph.setWidth(r328_df.width);
            r328_currentGlyph.include(r328_df.markSet.capital());
            r270_xn$createAndSaveGlyphImpl$2Lrc3c('cyrl/SmallYusClosed.straight', null, function () {
                var _r333_t1;
                var _r333_t0 = this;
                _r333_t0.include(r328_currentGlyph, true, true);
                _r333_t0.cloneRankFromGlyph(r328_currentGlyph);
                return _r333_t0.include(r270_CyrClosedSmallYusShape(r328_df, r270_CAP, true));
            });
            r270_xn$createAndSaveGlyphImpl$2Lrc3c('cyrl/SmallYusClosed.curly', null, function () {
                var _r336_t1;
                var _r336_t0 = this;
                _r336_t0.include(r328_currentGlyph, true, true);
                _r336_t0.cloneRankFromGlyph(r328_currentGlyph);
                return _r336_t0.include(r270_CyrClosedSmallYusShape(r328_df, r270_CAP, false));
            });
            return void 0;
        });
        r270_xn$createAndSaveGlyphImpl$2Lrc3c('.WF.font-src/glyphs/letter/cyrillic/small-yus.ptl.4', null, function () {
            var _r339_t1;
            var _r339_t0 = this;
            var r339_currentGlyph = _r339_t0;
            var r339_df = r270_DivFrame(1);
            r339_currentGlyph.setWidth(r339_df.width);
            r339_currentGlyph.include(r339_df.markSet.e());
            r270_xn$createAndSaveGlyphImpl$2Lrc3c('cyrl/smallYusClosed.straight', null, function () {
                var _r344_t1;
                var _r344_t0 = this;
                _r344_t0.include(r339_currentGlyph, true, true);
                _r344_t0.cloneRankFromGlyph(r339_currentGlyph);
                return _r344_t0.include(r270_CyrClosedSmallYusShape(r339_df, r270_XH, true));
            });
            r270_xn$createAndSaveGlyphImpl$2Lrc3c('cyrl/smallYusClosed.curly', null, function () {
                var _r347_t1;
                var _r347_t0 = this;
                _r347_t0.include(r339_currentGlyph, true, true);
                _r347_t0.cloneRankFromGlyph(r339_currentGlyph);
                return _r347_t0.include(r270_CyrClosedSmallYusShape(r339_df, r270_XH, false));
            });
            return void 0;
        });
        r270_xn$selectvariant$7Hrq('cyrl/SmallYus', 1126, new r270_xn$NamedParameterPair$2Lrc9b('follow', 'grek/Lambda'));
        r270_xn$selectvariant$7Hrq('cyrl/smallYus', 1127, new r270_xn$NamedParameterPair$2Lrc9b('follow', 'grek/Lambda'));
        r270_xn$selectvariant$7Hrq('cyrl/SmallYusClosed', 42584, new r270_xn$NamedParameterPair$2Lrc9b('follow', 'grek/Lambda'));
        r270_xn$selectvariant$7Hrq('cyrl/smallYusClosed', 42585, new r270_xn$NamedParameterPair$2Lrc9b('follow', 'grek/Lambda'));
        var r270_CyrIotifiedSmallYusShape = function (r352_fClosed, r352_fCapital, r352_df, r352_top, r352_straightBar) {
            var _r352_t0, _r352_t1;
            return function () {
                var r354_sf, _r354_t1;
                var _r354_t0 = this;
                var r354_currentGlyph = _r354_t0;
                var r354_gap = (r352_df.width - 2 * r352_df.leftSB - 4 * r352_df.mvs) / 3;
                var r354_divSub = (r352_df.width - r354_gap - r352_df.mvs) / r270_Width;
                var r354_dfSub = r270_DivFrame(r354_divSub, 3);
                if (r352_fClosed)
                    r354_currentGlyph.include(r270_CyrClosedSmallYusShape(r354_dfSub, r352_top, r352_straightBar, r352_df.mvs));
                else
                    r354_currentGlyph.include(r270_CyrSmallYusShape(r354_dfSub, r352_top, r352_straightBar, r352_df.mvs));
                if (!r352_fClosed)
                    r354_currentGlyph.ejectTagged('serifMB');
                r354_currentGlyph.ejectTagged('serifRB');
                r354_currentGlyph.include(r270_Translate(r270_Width * (r352_df.div - r354_divSub), 0));
                r354_currentGlyph.include(r270_Iotified.A(r352_df, r352_top, new r270_xn$NamedParameterPair$2Lrc9b('hBarRight', r1_mix(r352_df.leftSB, r352_df.rightSB, 2 / 3)), new r270_xn$NamedParameterPair$2Lrc9b('hBarY', r352_top / 2 - r352_df.mvs * 0.5), new r270_xn$NamedParameterPair$2Lrc9b('fCapital', r352_fCapital)));
                if (r270_SLAB) {
                    r354_sf = r270_SerifFrame.fromDf(r352_df, r352_top, 0, new r270_xn$NamedParameterPair$2Lrc9b('swSerif', r352_df.mvs));
                    r354_currentGlyph.include(r354_sf.rb.outer);
                }
                return void 0;
            };
        };
        r270_xn$createAndSaveGlyphImpl$2Lrc3c('.WF.font-src/glyphs/letter/cyrillic/small-yus.ptl.5', null, function () {
            var _r368_t1;
            var _r368_t0 = this;
            var r368_currentGlyph = _r368_t0;
            var r368_df = r270_DivFrame(r270_para.diversityM, 4);
            r368_currentGlyph.setWidth(r368_df.width);
            r368_currentGlyph.include(r368_df.markSet.capital());
            r270_xn$createAndSaveGlyphImpl$2Lrc3c('cyrl/SmallYusIotified.straight', null, function () {
                var _r373_t1;
                var _r373_t0 = this;
                _r373_t0.include(r368_currentGlyph, true, true);
                _r373_t0.cloneRankFromGlyph(r368_currentGlyph);
                return _r373_t0.include(r270_CyrIotifiedSmallYusShape(false, true, r368_df, r270_CAP, true));
            });
            r270_xn$createAndSaveGlyphImpl$2Lrc3c('cyrl/SmallYusIotified.curly', null, function () {
                var _r376_t1;
                var _r376_t0 = this;
                _r376_t0.include(r368_currentGlyph, true, true);
                _r376_t0.cloneRankFromGlyph(r368_currentGlyph);
                return _r376_t0.include(r270_CyrIotifiedSmallYusShape(false, true, r368_df, r270_CAP, false));
            });
            return void 0;
        });
        r270_xn$createAndSaveGlyphImpl$2Lrc3c('.WF.font-src/glyphs/letter/cyrillic/small-yus.ptl.6', null, function () {
            var _r379_t1;
            var _r379_t0 = this;
            var r379_currentGlyph = _r379_t0;
            var r379_df = r270_DivFrame(r270_para.diversityM, 4);
            r379_currentGlyph.setWidth(r379_df.width);
            r379_currentGlyph.include(r379_df.markSet.e());
            r270_xn$createAndSaveGlyphImpl$2Lrc3c('cyrl/smallYusIotified.straight', null, function () {
                var _r384_t1;
                var _r384_t0 = this;
                _r384_t0.include(r379_currentGlyph, true, true);
                _r384_t0.cloneRankFromGlyph(r379_currentGlyph);
                return _r384_t0.include(r270_CyrIotifiedSmallYusShape(false, false, r379_df, r270_XH, true));
            });
            r270_xn$createAndSaveGlyphImpl$2Lrc3c('cyrl/smallYusIotified.curly', null, function () {
                var _r387_t1;
                var _r387_t0 = this;
                _r387_t0.include(r379_currentGlyph, true, true);
                _r387_t0.cloneRankFromGlyph(r379_currentGlyph);
                return _r387_t0.include(r270_CyrIotifiedSmallYusShape(false, false, r379_df, r270_XH, false));
            });
            return void 0;
        });
        r270_xn$createAndSaveGlyphImpl$2Lrc3c('.WF.font-src/glyphs/letter/cyrillic/small-yus.ptl.7', null, function () {
            var _r390_t1;
            var _r390_t0 = this;
            var r390_currentGlyph = _r390_t0;
            var r390_df = r270_DivFrame(r270_para.diversityM, 4);
            r390_currentGlyph.setWidth(r390_df.width);
            r390_currentGlyph.include(r390_df.markSet.capital());
            r270_xn$createAndSaveGlyphImpl$2Lrc3c('cyrl/SmallYusClosedIotified.straight', null, function () {
                var _r395_t1;
                var _r395_t0 = this;
                _r395_t0.include(r390_currentGlyph, true, true);
                _r395_t0.cloneRankFromGlyph(r390_currentGlyph);
                return _r395_t0.include(r270_CyrIotifiedSmallYusShape(true, true, r390_df, r270_CAP, true));
            });
            r270_xn$createAndSaveGlyphImpl$2Lrc3c('cyrl/SmallYusClosedIotified.curly', null, function () {
                var _r398_t1;
                var _r398_t0 = this;
                _r398_t0.include(r390_currentGlyph, true, true);
                _r398_t0.cloneRankFromGlyph(r390_currentGlyph);
                return _r398_t0.include(r270_CyrIotifiedSmallYusShape(true, true, r390_df, r270_CAP, false));
            });
            return void 0;
        });
        r270_xn$createAndSaveGlyphImpl$2Lrc3c('.WF.font-src/glyphs/letter/cyrillic/small-yus.ptl.8', null, function () {
            var _r401_t1;
            var _r401_t0 = this;
            var r401_currentGlyph = _r401_t0;
            var r401_df = r270_DivFrame(r270_para.diversityM, 4);
            r401_currentGlyph.setWidth(r401_df.width);
            r401_currentGlyph.include(r401_df.markSet.e());
            r270_xn$createAndSaveGlyphImpl$2Lrc3c('cyrl/smallYusClosedIotified.straight', null, function () {
                var _r406_t1;
                var _r406_t0 = this;
                _r406_t0.include(r401_currentGlyph, true, true);
                _r406_t0.cloneRankFromGlyph(r401_currentGlyph);
                return _r406_t0.include(r270_CyrIotifiedSmallYusShape(true, false, r401_df, r270_XH, true));
            });
            r270_xn$createAndSaveGlyphImpl$2Lrc3c('cyrl/smallYusClosedIotified.curly', null, function () {
                var _r409_t1;
                var _r409_t0 = this;
                _r409_t0.include(r401_currentGlyph, true, true);
                _r409_t0.cloneRankFromGlyph(r401_currentGlyph);
                return _r409_t0.include(r270_CyrIotifiedSmallYusShape(true, false, r401_df, r270_XH, false));
            });
            return void 0;
        });
        r270_xn$selectvariant$7Hrq('cyrl/SmallYusIotified', 1128, new r270_xn$NamedParameterPair$2Lrc9b('follow', 'grek/Lambda'));
        r270_xn$selectvariant$7Hrq('cyrl/smallYusIotified', 1129, new r270_xn$NamedParameterPair$2Lrc9b('follow', 'grek/Lambda'));
        r270_xn$selectvariant$7Hrq('cyrl/SmallYusClosedIotified', 42588, new r270_xn$NamedParameterPair$2Lrc9b('follow', 'grek/Lambda'));
        return r270_xn$selectvariant$7Hrq('cyrl/smallYusClosedIotified', 42589, new r270_xn$NamedParameterPair$2Lrc9b('follow', 'grek/Lambda'));
    });
    return void 0;
});
