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
    r269_xn$Capture_Ext$2Lrc2b['$defineGlyphBlockImpl$'](r269_xn$Capture_Ext$2Lrc2b, 'Letter-Cyrillic-BigYus', function (r270_xn$Capture$2Lrc8, r270_xn$ExportCapture$2Lrc4b) {
        var _r270_t8, _r270_t9;
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
        var r270_HVContrast = _r270_t1.HVContrast;
        var r270_O = _r270_t1.O;
        var r270_SLAB = _r270_t1.SLAB;
        var r270_AdviceStroke = _r270_t1.AdviceStroke;
        var _r270_t2 = r270_xn$Capture$2Lrc8.SpiroFns;
        var r270_corner = _r270_t2.corner;
        var r270_xn$spirooutline$1aao = _r270_t2['spiro-outline'];
        var _r270_t3 = r270_xn$Capture$2Lrc8.BooleFns;
        var r270_union = _r270_t3.union;
        var r270_intersection = _r270_t3.intersection;
        var _r270_t4 = r270_xn$Capture$2Lrc8.CommonShapes.resolve();
        var r270_HBar = _r270_t4.HBar;
        var r270_VBar = _r270_t4.VBar;
        var _r270_t5 = r270_xn$Capture$2Lrc8['Common-Derivatives'].resolve();
        var _r270_t6 = r270_xn$Capture$2Lrc8['Letter-Shared-Shapes'].resolve();
        var r270_SerifFrame = _r270_t6.SerifFrame;
        var _r270_t7 = r270_xn$Capture$2Lrc8['Letter-Cyrillic-Iotified-A'].resolve();
        var r270_Iotified = _r270_t7.Iotified;
        var r270_BigYusLegMaskShape = function (r275_df, r275_top, r275_yp, r275__fine) {
            var _r275_t0, _r275_t1;
            var r275_fine = r1_fallback(r275__fine, r270_AdviceStroke(3.3, r275_df.div));
            var r275_midx = r1_mix(r275_df.leftSB, r275_df.middle, 0.3);
            var r275_yb = r275_top * r275_yp;
            return r270_xn$spirooutline$1aao(r270_corner(r275_df.leftSB + r270_O * 2, 0), r270_corner(r275_df.width - r275_df.leftSB - r270_O * 2, 0), r270_corner(r275_df.width - r275_midx, r275_yb), r270_corner(r275_midx, r275_yb));
        };
        var r270_CyrBigYusShape = function (r276_df, r276_top, r276_yp, r276__fine) {
            var _r276_t0, _r276_t1;
            return function () {
                var r278_sf, _r278_t1;
                var _r278_t0 = this;
                var r278_currentGlyph = _r278_t0;
                var r278_fine = r1_fallback(r276__fine, r270_AdviceStroke(3.3, r276_df.div));
                var r278_cor = r270_HVContrast;
                var r278_midx = r1_mix(r276_df.leftSB, r276_df.middle, 0.3);
                var r278_midx2 = Math.min(r276_df.middle - r278_fine * r278_cor, r1_mix(r276_df.leftSB, r276_df.middle, 0.75));
                var r278_yb = r276_top * r276_yp;
                var r278_tovershoot = 2;
                r278_currentGlyph.include(r270_union(r270_xn$spirooutline$1aao(r270_corner(r276_df.leftSB + r270_O * 2, 0), r270_corner(r276_df.leftSB + r278_fine * r278_cor + r270_O * 2, 0), r270_corner(r278_midx + r278_fine * r278_cor, r278_yb), r270_corner(r278_midx, r278_yb)), r270_xn$spirooutline$1aao(r270_corner(r278_midx2 + r278_fine * r278_cor, r278_yb), r270_corner(r276_df.leftSB + r278_fine * r278_cor + r270_O * r278_tovershoot, r276_top), r270_corner(r276_df.leftSB + r270_O * r278_tovershoot, r276_top), r270_corner(r278_midx2, r278_yb)), r270_xn$spirooutline$1aao(r270_corner(r276_df.width - r276_df.leftSB - r270_O * 2, 0), r270_corner(r276_df.width - r276_df.leftSB - r278_fine * r278_cor - r270_O * 2, 0), r270_corner(r276_df.width - r278_midx - r278_fine * r278_cor, r278_yb), r270_corner(r276_df.width - r278_midx, r278_yb)), r270_xn$spirooutline$1aao(r270_corner(r276_df.width - r278_midx2 - r278_fine * r278_cor, r278_yb), r270_corner(r276_df.width - r276_df.leftSB - r278_fine * r278_cor - r270_O * r278_tovershoot, r276_top), r270_corner(r276_df.width - r276_df.leftSB - r270_O * r278_tovershoot, r276_top), r270_corner(r276_df.width - r278_midx2, r278_yb)), r270_HBar.t(r278_midx, r276_df.width - r278_midx, r278_yb, r278_fine), r270_HBar.t(r276_df.leftSB + r270_O * r278_tovershoot + r270_HVContrast * r278_fine * 0.99, r276_df.rightSB - r270_O * r278_tovershoot - r270_HVContrast * r278_fine * 0.99, r276_top, r278_fine)));
                r278_currentGlyph.include(r270_tagged('barM', r270_VBar.m(r276_df.middle, 0, r278_yb, r278_fine)));
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
        var r270_CyrBlendedYusShape = function (r285_df, r285_top, r285_yp, r285_yp2, r285__fine) {
            var _r285_t0, _r285_t1;
            return function () {
                var _r287_t1;
                var _r287_t0 = this;
                var r287_currentGlyph = _r287_t0;
                var r287_fine = r1_fallback(r285__fine, r270_AdviceStroke(3.3, r285_df.div));
                r287_currentGlyph.include(r270_CyrBigYusShape(r285_df, r285_top, r285_yp, r287_fine));
                r287_currentGlyph.ejectTagged('barM');
                var r287_yb2 = r285_top * r285_yp2;
                r287_currentGlyph.include(r270_tagged('barM', r270_VBar.m(r285_df.middle, 0, r287_yb2, r287_fine)));
                r287_currentGlyph.include(r270_intersection(r270_HBar.t(r285_df.leftSB, r285_df.rightSB, r287_yb2, r287_fine), r270_BigYusLegMaskShape(r285_df, r285_top, r285_yp, r287_fine)));
                return void 0;
            };
        };
        r270_xn$createAndSaveGlyphImpl$2Lrc3c('cyrl/BigYus', 1130, function () {
            var _r294_t1;
            var _r294_t0 = this;
            var r294_currentGlyph = _r294_t0;
            var r294_df = r270_DivFrame(r270_para.diversityM, 3);
            r294_currentGlyph.setWidth(r294_df.width);
            r294_currentGlyph.include(r294_df.markSet.capital());
            r294_currentGlyph.include(r270_CyrBigYusShape(r294_df, r270_CAP, 0.575));
            return void 0;
        });
        r270_xn$createAndSaveGlyphImpl$2Lrc3c('cyrl/bigYus', 1131, function () {
            var _r300_t1;
            var _r300_t0 = this;
            var r300_currentGlyph = _r300_t0;
            var r300_df = r270_DivFrame(1, 3);
            r300_currentGlyph.setWidth(r300_df.width);
            r300_currentGlyph.include(r300_df.markSet.e());
            r300_currentGlyph.include(r270_CyrBigYusShape(r300_df, r270_XH, 0.55));
            return void 0;
        });
        r270_xn$createAndSaveGlyphImpl$2Lrc3c('cyrl/BlendedYus', 42586, function () {
            var _r306_t1;
            var _r306_t0 = this;
            var r306_currentGlyph = _r306_t0;
            var r306_df = r270_DivFrame(r270_para.diversityM, 3);
            r306_currentGlyph.setWidth(r306_df.width);
            r306_currentGlyph.include(r306_df.markSet.capital());
            r306_currentGlyph.include(r270_CyrBlendedYusShape(r306_df, r270_CAP, 0.575, 0.575 * 0.65));
            return void 0;
        });
        r270_xn$createAndSaveGlyphImpl$2Lrc3c('cyrl/blendedYus', 42587, function () {
            var _r312_t1;
            var _r312_t0 = this;
            var r312_currentGlyph = _r312_t0;
            var r312_df = r270_DivFrame(1, 3);
            r312_currentGlyph.setWidth(r312_df.width);
            r312_currentGlyph.include(r312_df.markSet.e());
            r312_currentGlyph.include(r270_CyrBlendedYusShape(r312_df, r270_XH, 0.55, 0.55 * 0.65));
            return void 0;
        });
        var r270_CyrIotifiedBigYusShape = function (r316_fCapital, r316_df, r316_top, r316_yp) {
            var _r316_t0, _r316_t1;
            return function () {
                var r318_sf, _r318_t1;
                var _r318_t0 = this;
                var r318_currentGlyph = _r318_t0;
                var r318_gap = (r316_df.width - 2 * r316_df.leftSB - 4 * r316_df.mvs) / 3;
                var r318_divSub = (r316_df.width - r318_gap - r316_df.mvs) / r270_Width;
                var r318_dfSub = r270_DivFrame(r318_divSub, 3);
                r318_currentGlyph.include(r270_CyrBigYusShape(r318_dfSub, r316_top, r316_yp, r316_df.mvs));
                r318_currentGlyph.ejectTagged('serifMB');
                r318_currentGlyph.ejectTagged('serifRB');
                r318_currentGlyph.include(r270_Translate(r270_Width * (r316_df.div - r318_divSub), 0));
                r318_currentGlyph.include(r270_Iotified.outer(r316_df, r316_top, new r270_xn$NamedParameterPair$2Lrc9b('hBarRight', r1_mix(r316_df.leftSB, r316_df.rightSB, 2 / 3)), new r270_xn$NamedParameterPair$2Lrc9b('hBarY', r316_top * r316_yp - r316_df.mvs * 0.5), new r270_xn$NamedParameterPair$2Lrc9b('fCapital', r316_fCapital)));
                if (r270_SLAB) {
                    r318_sf = r270_SerifFrame.fromDf(r316_df, r316_top, 0, new r270_xn$NamedParameterPair$2Lrc9b('swSerif', r316_df.mvs));
                    r318_currentGlyph.include(r318_sf.rb.outer);
                }
                return void 0;
            };
        };
        r270_xn$createAndSaveGlyphImpl$2Lrc3c('cyrl/BigYusIotified', 1132, function () {
            var _r331_t1;
            var _r331_t0 = this;
            var r331_currentGlyph = _r331_t0;
            var r331_df = r270_DivFrame(r270_para.diversityM, 4);
            r331_currentGlyph.setWidth(r331_df.width);
            r331_currentGlyph.include(r331_df.markSet.capital());
            r331_currentGlyph.include(r270_CyrIotifiedBigYusShape(true, r331_df, r270_CAP, 0.575));
            return void 0;
        });
        return r270_xn$createAndSaveGlyphImpl$2Lrc3c('cyrl/bigYusIotified', 1133, function () {
            var _r337_t1;
            var _r337_t0 = this;
            var r337_currentGlyph = _r337_t0;
            var r337_df = r270_DivFrame(r270_para.diversityM, 4);
            r337_currentGlyph.setWidth(r337_df.width);
            r337_currentGlyph.include(r337_df.markSet.e());
            r337_currentGlyph.include(r270_CyrIotifiedBigYusShape(false, r337_df, r270_XH, 0.55));
            return void 0;
        });
    });
    return void 0;
});
