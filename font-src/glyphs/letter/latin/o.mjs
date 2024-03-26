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
    r270_xn$Capture_Ext$2Lrc2b['$defineGlyphBlockImpl$'](r270_xn$Capture_Ext$2Lrc2b, 'Letter-Latin-O', function (r271_xn$Capture$2Lrc8, r271_xn$ExportCapture$2Lrc4b) {
        var _r271_t12, _r271_t13;
        var _r271_t0 = r271_xn$Capture$2Lrc8;
        var r271_xn$createAndSaveGlyphImpl$2Lrc3c = _r271_t0['$createAndSaveGlyphImpl$'];
        var r271_xn$NamedParameterPair$2Lrc9b = _r271_t0['$NamedParameterPair$'];
        var r271_xn$assignUnicodeImpl$2Lrc8b = _r271_t0['$assignUnicodeImpl$'];
        var r271_xn$execState$2Lrc0b = _r271_t0['$execState$'];
        var r271_para = _r271_t0.para;
        var r271_MarkSet = _r271_t0.MarkSet;
        var r271_AS_BASE = _r271_t0.AS_BASE;
        var r271_ALSO_METRICS = _r271_t0.ALSO_METRICS;
        var r271_DivFrame = _r271_t0.DivFrame;
        var _r271_t1 = r271_xn$Capture$2Lrc8.Metrics;
        var r271_Width = _r271_t1.Width;
        var r271_SB = _r271_t1.SB;
        var r271_CAP = _r271_t1.CAP;
        var r271_XH = _r271_t1.XH;
        var r271_Descender = _r271_t1.Descender;
        var r271_ApparentTranslate = _r271_t1.ApparentTranslate;
        var r271_HVContrast = _r271_t1.HVContrast;
        var r271_Upward = _r271_t1.Upward;
        var r271_Downward = _r271_t1.Downward;
        var r271_O = _r271_t1.O;
        var r271_OX = _r271_t1.OX;
        var r271_ArchDepth = _r271_t1.ArchDepth;
        var r271_SmallArchDepth = _r271_t1.SmallArchDepth;
        var r271_Stroke = _r271_t1.Stroke;
        var r271_LongJut = _r271_t1.LongJut;
        var r271_RightSB = _r271_t1.RightSB;
        var r271_Middle = _r271_t1.Middle;
        var r271_DotRadius = _r271_t1.DotRadius;
        var r271_ArchDepthA = _r271_t1.ArchDepthA;
        var r271_ArchDepthB = _r271_t1.ArchDepthB;
        var r271_SmallArchDepthA = _r271_t1.SmallArchDepthA;
        var r271_SmallArchDepthB = _r271_t1.SmallArchDepthB;
        var r271_CorrectionOMidS = _r271_t1.CorrectionOMidS;
        var r271_AdviceStroke = _r271_t1.AdviceStroke;
        var r271_OverlayStroke = _r271_t1.OverlayStroke;
        var r271_StrokeWidthBlend = _r271_t1.StrokeWidthBlend;
        var r271_ArchDepthAOf = _r271_t1.ArchDepthAOf;
        var r271_ArchDepthBOf = _r271_t1.ArchDepthBOf;
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
        var _r271_t3 = r271_xn$Capture$2Lrc8.BooleFns;
        var r271_union = _r271_t3.union;
        var r271_intersection = _r271_t3.intersection;
        var r271_difference = _r271_t3.difference;
        var _r271_t4 = r271_xn$Capture$2Lrc8.CommonShapes.resolve();
        var r271_DotAt = _r271_t4.DotAt;
        var r271_OShape = _r271_t4.OShape;
        var r271_OShapeOutline = _r271_t4.OShapeOutline;
        var r271_HBar = _r271_t4.HBar;
        var r271_VBar = _r271_t4.VBar;
        var r271_PointingTo = _r271_t4.PointingTo;
        var r271_WithTransform = _r271_t4.WithTransform;
        var _r271_t5 = r271_xn$Capture$2Lrc8['Common-Derivatives'].resolve();
        var r271_xn$referglyph$1aao = _r271_t5['refer-glyph'];
        var r271_alias = _r271_t5.alias;
        var r271_xn$derivecomposites$7Hrq = _r271_t5['derive-composites'];
        var r271_xn$derivemultipartglyphs$7Hrq65 = _r271_t5['derive-multi-part-glyphs'];
        var _r271_t6 = r271_xn$Capture$2Lrc8['Mark-Shared-Metrics'].resolve();
        var r271_markHalfStroke = _r271_t6.markHalfStroke;
        var _r271_t7 = r271_xn$Capture$2Lrc8['Mark-Horn-And-Angle'].resolve();
        var r271_HornBaseAnchor = _r271_t7.HornBaseAnchor;
        var _r271_t8 = r271_xn$Capture$2Lrc8['Mark-Above'].resolve();
        var r271_RingDims = _r271_t8.RingDims;
        var r271_RingShape = _r271_t8.RingShape;
        var _r271_t9 = r271_xn$Capture$2Lrc8['Mark-Adjustment'].resolve();
        var r271_ExtendAboveBaseAnchors = _r271_t9.ExtendAboveBaseAnchors;
        var r271_ExtendBelowBaseAnchors = _r271_t9.ExtendBelowBaseAnchors;
        var _r271_t10 = r271_xn$Capture$2Lrc8['Letter-Shared'].resolve();
        var r271_CreateAccentedComposition = _r271_t10.CreateAccentedComposition;
        var r271_SetGrekUpperTonos = _r271_t10.SetGrekUpperTonos;
        var _r271_t11 = r271_xn$Capture$2Lrc8['Letter-Blackboard'].resolve();
        var r271_BBS = _r271_t11.BBS;
        var r271_BBD = _r271_t11.BBD;
        r271_xn$createAndSaveGlyphImpl$2Lrc3c('O', 'O', function () {
            var _r282_t1;
            var _r282_t0 = this;
            var r282_currentGlyph = _r282_t0;
            r282_currentGlyph.include(r271_MarkSet.capital());
            r282_currentGlyph.include(r271_OShape(r271_CAP, 0, r271_SB, r271_RightSB, void 0, r271_ArchDepthA, r271_ArchDepthB));
            return void 0;
        });
        r271_xn$createAndSaveGlyphImpl$2Lrc3c('smcpO', 7439, function () {
            var _r287_t1;
            var _r287_t0 = this;
            var r287_currentGlyph = _r287_t0;
            r287_currentGlyph.include(r271_MarkSet.e());
            r287_currentGlyph.include(r271_OShape(r271_XH, 0, r271_SB, r271_RightSB, void 0, r271_ArchDepthA, r271_ArchDepthB));
            return void 0;
        });
        r271_xn$createAndSaveGlyphImpl$2Lrc3c('o', 'o', function () {
            var _r292_t1;
            var _r292_t0 = this;
            var r292_currentGlyph = _r292_t0;
            r292_currentGlyph.include(r271_MarkSet.e());
            r292_currentGlyph.include(r271_OShape(r271_XH, 0, r271_SB, r271_RightSB, void 0, void 0, void 0));
            return void 0;
        });
        r271_xn$createAndSaveGlyphImpl$2Lrc3c('cyrl/oNarrow', 7298, function () {
            var _r297_t1;
            var _r297_t0 = this;
            var r297_currentGlyph = _r297_t0;
            var r297_df = r271_DivFrame(r271_para.diversityF, 2);
            r297_currentGlyph.setWidth(r297_df.width);
            r297_currentGlyph.include(r297_df.markSet.e());
            var r297_subDf = r271_DivFrame(0.75, 2);
            var r297_ada = r297_subDf.archDepthA(r271_SmallArchDepth, r297_subDf.mvs);
            var r297_adb = r297_subDf.archDepthB(r271_SmallArchDepth, r297_subDf.mvs);
            r297_currentGlyph.include(r271_WithTransform(r271_ApparentTranslate(0.5 * (r297_df.width - r297_subDf.width), 0), r271_OShape(r271_XH, 0, r297_subDf.leftSB, r297_subDf.rightSB, r297_subDf.mvs, r297_ada, r297_adb)));
            return void 0;
        });
        r271_xn$createAndSaveGlyphImpl$2Lrc3c('oSideways', 7441, function () {
            var _r303_t1;
            var _r303_t0 = this;
            var r303_currentGlyph = _r303_t0;
            r303_currentGlyph.include(r271_MarkSet.e());
            r303_currentGlyph.include(r271_PointingTo(r271_Width, r271_XH, r271_Width, 0, function () {
                var _r306_t0, _r306_t1;
                return r271_OShape(r271_Width - r271_SB / 2, r271_SB / 2, r271_XH * 0.1, r271_XH * 0.9, void 0, void 0, void 0);
            }));
            return void 0;
        });
        var r271_rBroadOn = r271_DotRadius * r271_StrokeWidthBlend(1.625, 1);
        r271_xn$createAndSaveGlyphImpl$2Lrc3c('cyrl/BroadOn', 1146, function () {
            var _r309_t1;
            var _r309_t0 = this;
            var r309_currentGlyph = _r309_t0;
            var r309_df = r271_DivFrame(1, 3);
            r309_currentGlyph.include(r271_MarkSet.capital());
            r309_currentGlyph.include(r271_OShape(r271_CAP, 0, r271_SB, r271_RightSB, r309_df.mvs, r271_ArchDepthA, r271_ArchDepthB));
            r309_currentGlyph.include(r271_DotAt(r271_Middle, r309_df.mvs / 2 + r271_O, r271_rBroadOn));
            r309_currentGlyph.include(r271_DotAt(r271_Middle, r271_CAP - r309_df.mvs / 2 - r271_O, r271_rBroadOn));
            return void 0;
        });
        r271_xn$createAndSaveGlyphImpl$2Lrc3c('cyrl/broadOn', 1147, function () {
            var _r316_t1;
            var _r316_t0 = this;
            var r316_currentGlyph = _r316_t0;
            var r316_df = r271_DivFrame(1, 3);
            r316_currentGlyph.include(r271_MarkSet.e());
            r316_currentGlyph.include(r271_OShape(r271_XH, 0, r271_SB, r271_RightSB, r316_df.mvs, void 0, void 0));
            r316_currentGlyph.include(r271_DotAt(r271_Middle, r316_df.mvs / 2 + r271_O, r271_rBroadOn));
            r316_currentGlyph.include(r271_DotAt(r271_Middle, r271_XH - r316_df.mvs / 2 - r271_O, r271_rBroadOn));
            return void 0;
        });
        r271_xn$createAndSaveGlyphImpl$2Lrc3c('grek/Omicron', 927, function () {
            var _r323_t1;
            var _r323_t0 = this;
            var r323_currentGlyph = _r323_t0;
            r323_currentGlyph.include(r271_xn$referglyph$1aao('O'), r271_AS_BASE, r271_ALSO_METRICS);
            r323_currentGlyph.include(r271_SetGrekUpperTonos(0));
            return void 0;
        });
        r271_alias('cyrl/O', 1054, 'O');
        r271_alias('grek/omicron', 959, 'o');
        r271_alias('cyrl/o', 1086, 'o');
        r271_xn$createAndSaveGlyphImpl$2Lrc3c('mathbb/O', 120134, function () {
            var _r328_t1;
            var _r328_t0 = this;
            var r328_currentGlyph = _r328_t0;
            r328_currentGlyph.include(r271_MarkSet.capital());
            r328_currentGlyph.include(r271_OShape(r271_CAP, 0, r271_SB, r271_RightSB, r271_BBS, r271_ArchDepthA, r271_ArchDepthB));
            r328_currentGlyph.include(r271_intersection(r271_OShapeOutline.NoOvershoot(r271_CAP, 0, r271_SB, r271_RightSB, r271_BBS, r271_ArchDepthA, r271_ArchDepthB), r271_union(r271_VBar.l(r271_SB + r271_OX + r271_BBD, 0, r271_CAP, r271_BBS), r271_VBar.r(r271_RightSB - r271_OX - r271_BBD, 0, r271_CAP, r271_BBS))));
            return void 0;
        });
        r271_xn$createAndSaveGlyphImpl$2Lrc3c('mathbb/o', 120160, function () {
            var _r334_t1;
            var _r334_t0 = this;
            var r334_currentGlyph = _r334_t0;
            r334_currentGlyph.include(r271_MarkSet.e());
            r334_currentGlyph.include(r271_OShape(r271_XH, 0, r271_SB, r271_RightSB, r271_BBS));
            r334_currentGlyph.include(r271_intersection(r271_OShapeOutline.NoOvershoot(r271_XH, 0, r271_SB, r271_RightSB, r271_BBS), r271_union(r271_VBar.l(r271_SB + r271_OX + r271_BBD, 0, r271_XH, r271_BBS), r271_VBar.r(r271_RightSB - r271_OX - r271_BBD, 0, r271_XH, r271_BBS))));
            return void 0;
        });
        r271_xn$derivemultipartglyphs$7Hrq65('OHorn', 416, [
            'O',
            'longHorn'
        ], function (r338_srcs, r338_gr) {
            var _r338_t0, _r338_t1;
            return function () {
                var _r340_t2;
                var _r340_t1 = this;
                var r340_currentGlyph = _r340_t1;
                var _r340_t0 = r338_srcs;
                var r340_base = _r340_t0[0];
                var r340_horn = _r340_t0[1];
                r340_currentGlyph.include(r271_MarkSet.capital());
                r340_currentGlyph.include(r271_HornBaseAnchor(r271_RightSB, r271_CAP, r271_Width / 2, r271_ArchDepthB, 0.5));
                r340_currentGlyph.include(r271_difference(r271_xn$createAndSaveGlyphImpl$2Lrc3c(null, null, function () {
                    var _r346_t1;
                    var _r346_t0 = this;
                    var r346_currentGlyph = _r346_t0;
                    r346_currentGlyph.include(r271_MarkSet.capital());
                    r346_currentGlyph.include(r271_xn$referglyph$1aao(r340_horn));
                    return void 0;
                }), r271_OShapeOutline.NoOvershoot(r271_CAP, 0, r271_SB, r271_RightSB, void 0, r271_ArchDepthA, r271_ArchDepthB)));
                r340_currentGlyph.include(r271_xn$referglyph$1aao(r340_base));
                return void 0;
            };
        });
        r271_xn$derivemultipartglyphs$7Hrq65('oHorn', 417, [
            'o',
            'longHorn'
        ], function (r350_srcs, r350_gr) {
            var _r350_t0, _r350_t1;
            return function () {
                var _r352_t2;
                var _r352_t1 = this;
                var r352_currentGlyph = _r352_t1;
                var _r352_t0 = r350_srcs;
                var r352_base = _r352_t0[0];
                var r352_horn = _r352_t0[1];
                r352_currentGlyph.include(r271_MarkSet.e());
                r352_currentGlyph.include(r271_HornBaseAnchor(r271_RightSB, r271_XH, r271_Width / 2, r271_ArchDepthB, 0.5));
                r352_currentGlyph.include(r271_difference(r271_xn$createAndSaveGlyphImpl$2Lrc3c(null, null, function () {
                    var _r358_t1;
                    var _r358_t0 = this;
                    var r358_currentGlyph = _r358_t0;
                    r358_currentGlyph.include(r271_MarkSet.e());
                    r358_currentGlyph.include(r271_xn$referglyph$1aao(r352_horn));
                    return void 0;
                }), r271_OShapeOutline.NoOvershoot(r271_XH, 0, r271_SB, r271_RightSB, void 0, void 0, void 0)));
                r352_currentGlyph.include(r271_xn$referglyph$1aao(r352_base));
                return void 0;
            };
        });
        r271_xn$createAndSaveGlyphImpl$2Lrc3c('OSlash', 216, function () {
            var _r364_t1;
            var _r364_t0 = this;
            var r364_currentGlyph = _r364_t0;
            var r364_fine = 0.5 * r271_OverlayStroke;
            r364_currentGlyph.include(r271_xn$referglyph$1aao('O'), r271_AS_BASE);
            r364_currentGlyph.include(r271_dispiro(r271_flat(r271_SB + r271_O + r364_fine, r1_mix(r271_CAP, 0, 1.05), r271_widths(r364_fine, r364_fine)), r271_curl(r271_RightSB - r271_O - r364_fine, r1_mix(0, r271_CAP, 1.05))));
            return void 0;
        });
        r271_xn$createAndSaveGlyphImpl$2Lrc3c('oSlash', 248, function () {
            var _r369_t1;
            var _r369_t0 = this;
            var r369_currentGlyph = _r369_t0;
            var r369_fine = 0.5 * r271_OverlayStroke;
            r369_currentGlyph.include(r271_xn$referglyph$1aao('o'), r271_AS_BASE);
            r369_currentGlyph.include(r271_dispiro(r271_flat(r271_SB + r271_O + r369_fine, r1_mix(r271_XH, 0, 1.05), r271_widths(r369_fine, r369_fine)), r271_curl(r271_RightSB - r271_O - r369_fine, r1_mix(0, r271_XH, 1.05))));
            return void 0;
        });
        r271_xn$createAndSaveGlyphImpl$2Lrc3c('oSlashSideways', 7443, function () {
            var _r374_t1;
            var _r374_t0 = this;
            var r374_currentGlyph = _r374_t0;
            r374_currentGlyph.include(r271_MarkSet.e());
            r374_currentGlyph.include(r271_PointingTo(r271_Width, r271_XH, r271_Width, 0, function () {
                var _r377_t0, _r377_t1;
                return function () {
                    var _r379_t1;
                    var _r379_t0 = this;
                    var r379_currentGlyph = _r379_t0;
                    var r379_fine = 0.5 * r271_OverlayStroke;
                    r379_currentGlyph.include(r271_OShape(r271_Width - r271_SB / 2, r271_SB / 2, r271_XH * 0.1, r271_XH * 0.9, void 0, void 0, void 0));
                    r379_currentGlyph.include(r271_dispiro(r271_flat(r271_SB + r271_O + r379_fine, r1_mix(r271_Width, 0, 1.05), r271_widths(r379_fine, r379_fine)), r271_curl(r271_XH - r271_SB - r271_O - r379_fine, r1_mix(0, r271_Width, 1.05))));
                    return void 0;
                };
            }));
            return void 0;
        });
        r271_xn$createAndSaveGlyphImpl$2Lrc3c('Obar', 415, function () {
            var _r384_t1;
            var _r384_t0 = this;
            var r384_currentGlyph = _r384_t0;
            r384_currentGlyph.include(r271_xn$referglyph$1aao('O'), r271_AS_BASE);
            r384_currentGlyph.include(r271_HBar.m(r271_SB + r271_OX + 1, r271_RightSB - r271_OX - 1, r271_CAP * 0.5, r271_OverlayStroke));
            return void 0;
        });
        r271_xn$createAndSaveGlyphImpl$2Lrc3c('obar', 629, function () {
            var _r389_t1;
            var _r389_t0 = this;
            var r389_currentGlyph = _r389_t0;
            r389_currentGlyph.include(r271_xn$referglyph$1aao('o'), r271_AS_BASE);
            r389_currentGlyph.include(r271_HBar.m(r271_SB + r271_OX + 1, r271_RightSB - r271_OX - 1, r271_XH * 0.5, r271_OverlayStroke));
            return void 0;
        });
        r271_xn$derivecomposites$7Hrq('cyrl/OMonocular', 42600, 'O', 'innerDot');
        r271_xn$derivecomposites$7Hrq('cyrl/oMonocular', 42601, 'o', 'innerDotSmall');
        r271_xn$derivecomposites$7Hrq('cyrl/OBinocular', 42602, 'O', 'innerDoubleDot');
        r271_xn$derivecomposites$7Hrq('cyrl/oBinocular', 42603, 'o', 'innerDoubleDotSmall');
        r271_alias('bullEye', 664, 'cyrl/OMonocular');
        r271_xn$createAndSaveGlyphImpl$2Lrc3c('cyrl/OCross', 42650, function () {
            var _r394_t1;
            var _r394_t0 = this;
            var r394_currentGlyph = _r394_t0;
            r394_currentGlyph.include(r271_xn$referglyph$1aao('O'), r271_AS_BASE);
            var r394_fine = r271_StrokeWidthBlend(1, 0.5) * r271_OverlayStroke;
            r394_currentGlyph.include(r271_HBar.m(r271_SB + r271_OX + 1, r271_RightSB - r271_OX - 1, r271_CAP * 0.5, r394_fine));
            r394_currentGlyph.include(r271_VBar.m(r271_Middle, r271_O + 1, r271_CAP - r271_O - 1, r394_fine));
            return void 0;
        });
        r271_xn$createAndSaveGlyphImpl$2Lrc3c('cyrl/oCross', 42651, function () {
            var _r400_t1;
            var _r400_t0 = this;
            var r400_currentGlyph = _r400_t0;
            r400_currentGlyph.include(r271_xn$referglyph$1aao('o'), r271_AS_BASE);
            var r400_fine = r271_StrokeWidthBlend(1, 0.5) * r271_OverlayStroke;
            r400_currentGlyph.include(r271_HBar.m(r271_SB + r271_OX + 1, r271_RightSB - r271_OX - 1, r271_XH * 0.5, r400_fine));
            r400_currentGlyph.include(r271_VBar.m(r271_Middle, r271_O + 1, r271_XH - r271_O - 1, r400_fine));
            return void 0;
        });
        r271_xn$createAndSaveGlyphImpl$2Lrc3c('romanThousandCD', 8576, function () {
            var _r406_t1;
            var _r406_t0 = this;
            var r406_currentGlyph = _r406_t0;
            var r406_df = r271_DivFrame(r271_para.diversityM, 3);
            r406_currentGlyph.setWidth(r406_df.width);
            r406_currentGlyph.include(r406_df.markSet.capital());
            r406_currentGlyph.include(r271_OShape(r271_CAP, 0, r406_df.leftSB, r406_df.rightSB, r406_df.mvs, r271_ArchDepthA, r271_ArchDepthB));
            r406_currentGlyph.include(r271_VBar.m(r406_df.middle, r406_df.mvs / 2, r271_CAP - r406_df.mvs / 2, r406_df.mvs));
            r406_currentGlyph.setBaseAnchor('trailing', r271_Middle, 0);
            return void 0;
        });
        r271_xn$createAndSaveGlyphImpl$2Lrc3c('romanTenThousand', 8578, function () {
            var _r414_t1;
            var _r414_t0 = this;
            var r414_currentGlyph = _r414_t0;
            var r414_df = r271_DivFrame(r271_para.diversityM, 5);
            var r414_innerDist = r414_df.rightSB - r414_df.leftSB - 5 * r414_df.mvs * r271_HVContrast;
            var r414_arcXL1 = r414_df.leftSB + r414_innerDist * (1 / 4) + 1 * r414_df.mvs * r271_HVContrast;
            var r414_arcXR1 = r414_df.leftSB + r414_innerDist * (3 / 4) + 4 * r414_df.mvs * r271_HVContrast;
            var r414_heightGap = Math.min(r414_df.mvs + (r271_CAP - r414_df.mvs * 4) / 5, r414_innerDist / 4 + r414_df.mvs);
            r414_currentGlyph.setWidth(r414_df.width);
            r414_currentGlyph.include(r414_df.markSet.capital());
            var r414_heightInner1 = r271_CAP - 2 * r414_heightGap;
            var r414_smInner1 = r1_clamp(r414_df.mvs * 1.5, 0.499 * r414_heightInner1, r271_ArchDepth * r414_heightInner1 / r271_CAP);
            var r414_adaInner1 = r271_ArchDepthAOf(r414_smInner1, r414_arcXR1 - r414_arcXL1 + r414_df.leftSB * 2);
            var r414_adbInner1 = r271_ArchDepthBOf(r414_smInner1, r414_arcXR1 - r414_arcXL1 + r414_df.leftSB * 2);
            r414_currentGlyph.include(r271_OShape(r271_CAP, 0, r414_df.leftSB, r414_df.rightSB, r414_df.mvs, r271_ArchDepthA, r271_ArchDepthB));
            r414_currentGlyph.include(r271_OShape(r271_CAP - r414_heightGap, 0 + r414_heightGap, r414_arcXL1, r414_arcXR1, r414_df.mvs, r414_adaInner1, r414_adbInner1));
            r414_currentGlyph.include(r271_VBar.m(r414_df.middle, r414_df.mvs / 2, r271_CAP - r414_df.mvs / 2, r414_df.mvs));
            return void 0;
        });
        r271_xn$createAndSaveGlyphImpl$2Lrc3c('romanHundredThousand', 8584, function () {
            var _r422_t1;
            var _r422_t0 = this;
            var r422_currentGlyph = _r422_t0;
            var r422_df = r271_DivFrame(r271_para.diversityM, 7);
            var r422_innerDist = r422_df.rightSB - r422_df.leftSB - 7 * r422_df.mvs * r271_HVContrast;
            var r422_arcXL1 = r422_df.leftSB + r422_innerDist * (1 / 6) + 1 * r422_df.mvs * r271_HVContrast;
            var r422_arcXR1 = r422_df.leftSB + r422_innerDist * (5 / 6) + 6 * r422_df.mvs * r271_HVContrast;
            var r422_arcXL2 = r422_df.leftSB + r422_innerDist * (2 / 6) + 2 * r422_df.mvs * r271_HVContrast;
            var r422_arcXR2 = r422_df.leftSB + r422_innerDist * (4 / 6) + 5 * r422_df.mvs * r271_HVContrast;
            var r422_heightGap = Math.min(r422_df.mvs + (r271_CAP - r422_df.mvs * 6) / 7, r422_innerDist / 6 + r422_df.mvs);
            r422_currentGlyph.setWidth(r422_df.width);
            r422_currentGlyph.include(r422_df.markSet.capital());
            var r422_heightInner1 = r271_CAP - 2 * r422_heightGap;
            var r422_heightInner2 = r271_CAP - 4 * r422_heightGap;
            var r422_smInner1 = r1_clamp(r422_df.mvs * 1.5, 0.499 * r422_heightInner1, r271_ArchDepth * r422_heightInner1 / r271_CAP);
            var r422_adaInner1 = r271_ArchDepthAOf(r422_smInner1, r422_arcXR1 - r422_arcXL1 + r422_df.leftSB * 2);
            var r422_adbInner1 = r271_ArchDepthBOf(r422_smInner1, r422_arcXR1 - r422_arcXL1 + r422_df.leftSB * 2);
            var r422_smInner2 = r1_clamp(r422_df.mvs * 1.5, 0.499 * r422_heightInner2, r271_ArchDepth * r422_heightInner2 / r271_CAP);
            var r422_adaInner2 = r271_ArchDepthAOf(r422_smInner2, r422_arcXR2 - r422_arcXL2 + r422_df.leftSB * 2);
            var r422_adbInner2 = r271_ArchDepthBOf(r422_smInner2, r422_arcXR2 - r422_arcXL2 + r422_df.leftSB * 2);
            r422_currentGlyph.include(r271_OShape(r271_CAP, 0, r422_df.leftSB, r422_df.rightSB, r422_df.mvs, r271_ArchDepthA, r271_ArchDepthB));
            r422_currentGlyph.include(r271_OShape(r271_CAP - r422_heightGap, 0 + r422_heightGap, r422_arcXL1, r422_arcXR1, r422_df.mvs, r422_adaInner1, r422_adbInner1));
            r422_currentGlyph.include(r271_OShape(r271_CAP - 2 * r422_heightGap, 0 + 2 * r422_heightGap, r422_arcXL2, r422_arcXR2, r422_df.mvs, r422_adaInner2, r422_adbInner2));
            r422_currentGlyph.include(r271_VBar.m(r422_df.middle, r422_df.mvs / 2, r271_CAP - r422_df.mvs / 2, r422_df.mvs));
            return void 0;
        });
        r271_alias('cyrl/Oe', 1256, 'Obar');
        r271_alias('grek/capSymbolTheta', 1012, 'Obar');
        r271_alias('cyrl/oe', 1257, 'obar');
        r271_xn$createAndSaveGlyphImpl$2Lrc3c('oupperhalf', 7446, function () {
            var _r431_t1;
            var _r431_t0 = this;
            var r431_currentGlyph = _r431_t0;
            r431_currentGlyph.include(r271_MarkSet.e());
            r431_currentGlyph.include(r271_dispiro(r271_widths.rhs(), r271_flat(r271_SB + r271_OX, r271_XH / 2, r271_heading(r271_Upward)), r271_curl(r271_SB + r271_OX, r271_XH - Math.min(r271_XH / 2 - 0.1, r271_SmallArchDepthA)), r271_arcvh(), r271_g4(r271_Middle - r271_CorrectionOMidS, r271_XH - r271_O), r271_archv(), r271_flat(r271_RightSB - r271_OX, r271_XH - Math.min(r271_XH / 2 - 0.1, r271_SmallArchDepthB)), r271_curl(r271_RightSB - r271_OX, r271_XH / 2, r271_heading(r271_Downward))));
            return void 0;
        });
        r271_xn$createAndSaveGlyphImpl$2Lrc3c('olowerhalf', 7447, function () {
            var _r436_t1;
            var _r436_t0 = this;
            var r436_currentGlyph = _r436_t0;
            r436_currentGlyph.include(r271_MarkSet.e());
            r436_currentGlyph.include(r271_dispiro(r271_widths.lhs(), r271_flat(r271_SB + r271_OX, r271_XH / 2, r271_heading(r271_Downward)), r271_curl(r271_SB + r271_OX, Math.min(r271_XH / 2 - 0.1, r271_SmallArchDepthB)), r271_arcvh(), r271_g4(r271_Middle + r271_CorrectionOMidS, r271_O), r271_archv(), r271_flat(r271_RightSB - r271_OX, Math.min(r271_XH / 2 - 0.1, r271_SmallArchDepthA)), r271_curl(r271_RightSB - r271_OX, r271_XH / 2, r271_heading(r271_Upward))));
            return void 0;
        });
        r271_xn$createAndSaveGlyphImpl$2Lrc3c('oWithLightCentralizationStroke', null, function () {
            var _r441_t1;
            var _r441_t0 = this;
            var r441_currentGlyph = _r441_t0;
            r441_currentGlyph.include(r271_MarkSet.p());
            r441_currentGlyph.include(r271_xn$referglyph$1aao('o'));
            var r441_fine = r271_AdviceStroke(4);
            var r441_outStand = r271_SB * 0.75 + r441_fine * 0.25;
            var r441_outStandY = r271_SmallArchDepthB / 2 - r271_Descender * 0.6;
            var r441_yTurn = r271_SmallArchDepthB / 2;
            r441_currentGlyph.include(r271_difference(r271_dispiro(r271_widths.lhs(r441_fine), r271_corner(r271_Middle, r441_yTurn + r441_outStandY), r271_corner(r271_SB - r441_outStand, r441_yTurn - r441_outStandY)), r271_OShapeOutline.NoOvershoot(r271_XH, 0, r271_SB, r271_RightSB, void 0, void 0, void 0)));
            return void 0;
        });
        r271_CreateAccentedComposition('oDieresis', 246, 'o', 'dieresisAbove');
        r271_xn$createAndSaveGlyphImpl$2Lrc3c('numeroRightHalf', null, function () {
            var _r447_t1;
            var _r447_t0 = this;
            var r447_currentGlyph = _r447_t0;
            r447_currentGlyph.include(r271_OShape(r271_XH, Math.max(r271_Stroke * 1.5, r271_CAP * 0.1), r271_SB, r271_RightSB, r271_Stroke, r271_ArchDepthA, r271_ArchDepthB));
            r447_currentGlyph.include(r271_HBar.b(r271_SB, r271_RightSB, 0));
            return void 0;
        });
        r271_CreateAccentedComposition('oSbRsbUnderlineBelow', null, 'o', 'sbRsbUnderlineBelow');
        r271_xn$createAndSaveGlyphImpl$2Lrc3c('oLowRingInside', 11386, function () {
            var _r452_t2;
            var _r452_t1 = this;
            var r452_currentGlyph = _r452_t1;
            r452_currentGlyph.include(r271_xn$referglyph$1aao('o'), r271_AS_BASE);
            var _r452_t0 = r271_RingDims();
            var r452_radiusIn = _r452_t0.radiusIn;
            var r452_radiusOut = _r452_t0.radiusOut;
            r452_currentGlyph.include(r271_RingShape(r271_Middle, r271_O + r271_Stroke + r452_radiusIn));
            return void 0;
        });
        r271_xn$createAndSaveGlyphImpl$2Lrc3c('OPolish', 42944, function () {
            var _r457_t1;
            var _r457_t0 = this;
            var r457_currentGlyph = _r457_t0;
            r457_currentGlyph.include(r271_xn$referglyph$1aao('O'), r271_AS_BASE);
            r457_currentGlyph.include(r271_MarkSet.capital());
            r457_currentGlyph.include(r271_ExtendAboveBaseAnchors(r271_CAP + r271_LongJut - 0.5 * r271_Stroke));
            r457_currentGlyph.include(r271_ExtendBelowBaseAnchors(-r271_LongJut + 0.5 * r271_Stroke));
            r457_currentGlyph.include(r271_VBar.m(r271_Middle, r271_CAP, r271_CAP + r271_LongJut - 0.5 * r271_Stroke));
            r457_currentGlyph.include(r271_VBar.m(r271_Middle, -r271_LongJut + 0.5 * r271_Stroke, 0));
            return void 0;
        });
        return r271_xn$createAndSaveGlyphImpl$2Lrc3c('oPolish', 42945, function () {
            var _r466_t1;
            var _r466_t0 = this;
            var r466_currentGlyph = _r466_t0;
            r466_currentGlyph.include(r271_xn$referglyph$1aao('o'), r271_AS_BASE);
            r466_currentGlyph.include(r271_MarkSet.e());
            r466_currentGlyph.include(r271_ExtendAboveBaseAnchors(r271_XH + r271_LongJut - 0.5 * r271_Stroke));
            r466_currentGlyph.include(r271_ExtendBelowBaseAnchors(-r271_LongJut + 0.5 * r271_Stroke));
            r466_currentGlyph.include(r271_VBar.m(r271_Middle, r271_XH, r271_XH + r271_LongJut - 0.5 * r271_Stroke));
            r466_currentGlyph.include(r271_VBar.m(r271_Middle, -r271_LongJut + 0.5 * r271_Stroke, 0));
            return void 0;
        });
    });
    return void 0;
});
