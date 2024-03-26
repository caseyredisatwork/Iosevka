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
    r270_xn$Capture_Ext$2Lrc2b['$defineGlyphBlockImpl$'](r270_xn$Capture_Ext$2Lrc2b, 'Letter-Latin-Upper-AE-OE', function (r271_xn$Capture$2Lrc8, r271_xn$ExportCapture$2Lrc4b) {
        var r271_suffix, r271_fStraightBar, r271_slabKind, _r271_t9, _r271_t12, _r271_t15, _r271_t16, _r271_t17, _r271_t18, _r271_tag19, _r271_t20, _r271_tag21, _r271_t22, _r271_tag23;
        var _r271_t0 = r271_xn$Capture$2Lrc8;
        var r271_xn$createAndSaveGlyphImpl$2Lrc3c = _r271_t0['$createAndSaveGlyphImpl$'];
        var r271_xn$NamedParameterPair$2Lrc9b = _r271_t0['$NamedParameterPair$'];
        var r271_xn$assignUnicodeImpl$2Lrc8b = _r271_t0['$assignUnicodeImpl$'];
        var r271_xn$execState$2Lrc0b = _r271_t0['$execState$'];
        var r271_para = _r271_t0.para;
        var r271_AS_BASE = _r271_t0.AS_BASE;
        var r271_ALSO_METRICS = _r271_t0.ALSO_METRICS;
        var r271_DivFrame = _r271_t0.DivFrame;
        var _r271_t1 = r271_xn$Capture$2Lrc8.Metrics;
        var r271_DesignParameters = _r271_t1.DesignParameters;
        var r271_CAP = _r271_t1.CAP;
        var r271_XH = _r271_t1.XH;
        var r271_Translate = _r271_t1.Translate;
        var r271_HVContrast = _r271_t1.HVContrast;
        var r271_Upward = _r271_t1.Upward;
        var r271_Rightward = _r271_t1.Rightward;
        var r271_Leftward = _r271_t1.Leftward;
        var r271_O = _r271_t1.O;
        var r271_OX = _r271_t1.OX;
        var r271_Stroke = _r271_t1.Stroke;
        var r271_LongJut = _r271_t1.LongJut;
        var r271_Jut = _r271_t1.Jut;
        var r271_CThin = _r271_t1.CThin;
        var r271_SLAB = _r271_t1.SLAB;
        var r271_HalfStroke = _r271_t1.HalfStroke;
        var r271_ArchDepthA = _r271_t1.ArchDepthA;
        var r271_ArchDepthB = _r271_t1.ArchDepthB;
        var r271_AdviceStroke = _r271_t1.AdviceStroke;
        var r271_AdviceStroke2 = _r271_t1.AdviceStroke2;
        var r271_StrokeWidthBlend = _r271_t1.StrokeWidthBlend;
        var r271_MidJutSide = _r271_t1.MidJutSide;
        var _r271_t2 = r271_xn$Capture$2Lrc8.SpiroFns;
        var r271_g4 = _r271_t2.g4;
        var r271_corner = _r271_t2.corner;
        var r271_flat = _r271_t2.flat;
        var r271_curl = _r271_t2.curl;
        var r271_end = _r271_t2.end;
        var r271_straight = _r271_t2.straight;
        var r271_widths = _r271_t2.widths;
        var r271_heading = _r271_t2.heading;
        var r271_unimportant = _r271_t2.unimportant;
        var r271_quadControls = _r271_t2.quadControls;
        var r271_archv = _r271_t2.archv;
        var r271_arcvh = _r271_t2.arcvh;
        var r271_dispiro = _r271_t2.dispiro;
        var r271_xn$spirooutline$1aao = _r271_t2['spiro-outline'];
        var _r271_t3 = r271_xn$Capture$2Lrc8.BooleFns;
        var r271_intersection = _r271_t3.intersection;
        var _r271_t4 = r271_xn$Capture$2Lrc8.CommonShapes.resolve();
        var r271_HSerif = _r271_t4.HSerif;
        var r271_VSerif = _r271_t4.VSerif;
        var r271_HBar = _r271_t4.HBar;
        var r271_VBar = _r271_t4.VBar;
        var r271_DiagCor = _r271_t4.DiagCor;
        var r271_WithTransform = _r271_t4.WithTransform;
        var _r271_t5 = r271_xn$Capture$2Lrc8['Common-Derivatives'].resolve();
        var r271_xn$selectvariant$7Hrq = _r271_t5['select-variant'];
        var r271_xn$referglyph$1aao = _r271_t5['refer-glyph'];
        var r271_xn$queryglyph$1aao = _r271_t5['query-glyph'];
        var r271_alias = _r271_t5.alias;
        var _r271_t6 = r271_xn$Capture$2Lrc8['Letter-Latin-Upper-F'].resolve();
        var r271_EFVJutLength = _r271_t6.EFVJutLength;
        var r271_xn$SLABANONE$5sIl2 = 0;
        var r271_xn$SLABATOP$5sIl2 = 1;
        var r271_xn$SLABABASE$5sIl2 = 2;
        var r271_xn$SLABATRI$5sIl2 = 3;
        var r271_xn$SLABENONE$5sIl2 = 0;
        var r271_xn$SLABEALL$5sIl2 = 2;
        var r271_AESW = function (r275_df, r275_top) {
            var _r275_t0, _r275_t1;
            return Math.min(r275_df.mvs, r271_AdviceStroke2(3, 3, r275_top, r275_df.div));
        };
        var r271_AEAHalfCurly = function (r276_df, r276_top, r276_eleft, r276_sw) {
            var _r276_t0, _r276_t1;
            return function () {
                var _r278_t1;
                var _r278_t0 = this;
                var r278_currentGlyph = _r278_t0;
                var r278_fine = r271_AdviceStroke2(3, 4, r276_top, r276_df.div);
                r278_currentGlyph.include(r271_dispiro(r271_widths.rhs(r276_sw), r271_flat(r276_df.leftSB, 0, r271_heading(r271_Upward)), r271_curl(r276_df.leftSB, r276_top * 0.1, r271_heading(r271_Upward)), r271_quadControls(0, 0.3, 6, r271_unimportant), r271_g4(r276_eleft - r271_HalfStroke, r276_top, r271_widths.rhs(r278_fine))));
                r278_currentGlyph.include(r271_xn$spirooutline$1aao(r271_corner(r276_eleft - r271_HalfStroke, r276_top), r271_corner(r276_eleft, r276_top), r271_corner(r276_eleft, r276_top - r276_sw)));
                r278_currentGlyph.include(r271_intersection(r271_WithTransform(r271_Translate(-r271_O, 0), r271_xn$spirooutline$1aao(r271_corner(r276_df.leftSB, 0, r271_heading(r271_Upward)), r271_curl(r276_df.leftSB, r276_top * 0.1, r271_heading(r271_Upward)), r271_quadControls(0, 0.3, 6, r271_unimportant), r271_corner(r276_eleft - r271_HalfStroke, r276_top, r271_widths.rhs(r278_fine)), r271_corner(r276_eleft, r276_top), r271_corner(r276_eleft, 0))), r271_HBar.t(0, r276_eleft, r271_XH / 2, r276_sw)));
                return void 0;
            };
        };
        var r271_AEAHalfStraight = function (r282_df, r282_top, r282_eleft, r282_sw) {
            var _r282_t0, _r282_t1;
            return function () {
                var _r284_t1;
                var _r284_t0 = this;
                var r284_currentGlyph = _r284_t0;
                var r284_StraightSbShrink = r1_mix(1, r271_DesignParameters.straightVShapeSbShrink * r271_StrokeWidthBlend(1, 0.75), r271_SLAB ? 0.75 : 1);
                var r284_fine = r282_sw * r271_CThin * 1.15;
                var r284_pInktrap = 2 / 3;
                var r284_clearance = 0 - r271_OX;
                var r284_vxStartL = r282_df.leftSB * r284_StraightSbShrink;
                var r284_vxEndL = r282_df.middle - 0.75 * r282_sw * r271_HVContrast;
                var r284_dgCor = r271_DiagCor(r282_top, r282_df.width / 2, 0, r282_sw * 2);
                var r284_midSW = r284_dgCor * Math.min(r1_mix(r282_sw, r284_fine, r284_pInktrap), r271_AdviceStroke(3, r282_df.div));
                r284_currentGlyph.include(r271_dispiro(r271_widths.rhs(r282_sw * r284_dgCor), r271_flat(r1_mix(r284_vxStartL, r284_vxEndL, 0), r1_mix(0, r282_top, 0), r271_heading(r271_Upward)), r271_curl(r1_mix(r284_vxStartL, r284_vxEndL, r284_pInktrap), r1_mix(0, r282_top, r284_pInktrap), r271_widths.rhs.heading(r284_midSW, r271_Upward)), r271_g4(r1_mix(r284_vxStartL, r284_vxEndL, 1), r1_mix(0, r282_top, 1), r271_widths.rhs.heading(r284_fine, r271_Upward))));
                r284_currentGlyph.include(r271_intersection(r271_HBar.t(0, r282_eleft, r271_XH / 2, r282_sw), r271_xn$spirooutline$1aao(r271_flat(1 + r1_mix(r284_vxStartL, r284_vxEndL, 0), r1_mix(0, r282_top, 0)), r271_curl(1 + r1_mix(r284_vxStartL, r284_vxEndL, r284_pInktrap), r1_mix(0, r282_top, r284_pInktrap)), r271_corner(1 + r1_mix(r284_vxStartL, r284_vxEndL, 1), r1_mix(0, r282_top, 1)), r271_corner(r282_eleft, r282_top), r271_corner(r282_eleft, 0))));
                return void 0;
            };
        };
        var r271_AEAHalfSerifs = function (r287_df, r287_top, r287_slabKind) {
            var _r287_t0, _r287_t1;
            return function () {
                var _r289_t3;
                var _r289_t2 = this;
                var r289_currentGlyph = _r289_t2;
                var r289_sw = Math.min(r287_df.mvs, r271_AdviceStroke2(3, 3, r287_top, r287_df.div));
                var r289_eleft = r287_df.middle - r289_sw * 0.25 * r271_HVContrast;
                var _r289_t0 = r287_slabKind;
                if (_r289_t0 === r271_xn$SLABABASE$5sIl2 || _r289_t0 === r271_xn$SLABATRI$5sIl2) {
                    r289_currentGlyph.include(r271_HSerif.mb(r287_df.leftSB + r289_sw / 2 * r271_HVContrast, 0, r271_Jut, r289_sw));
                } else
                    void 0;
                var _r289_t1 = r287_slabKind;
                if (_r289_t1 === r271_xn$SLABATRI$5sIl2) {
                    r289_currentGlyph.include(r271_HSerif.lt(r287_df.middle, r287_top, r271_MidJutSide + r271_Stroke * r271_HVContrast * 0.25));
                } else if (_r289_t1 === r271_xn$SLABATOP$5sIl2) {
                    r289_currentGlyph.include(r271_HSerif.lt(r287_df.middle, r287_top, r1_mix(r271_MidJutSide, r271_LongJut, 0.5)));
                } else
                    void 0;
                return void 0;
            };
        };
        var r271_AEAHalf = function (r293_df, r293_top, r293_straight, r293_slabKind) {
            var _r293_t0, _r293_t1;
            return function () {
                var _r295_t1;
                var _r295_t0 = this;
                var r295_currentGlyph = _r295_t0;
                var r295_sw = r271_AESW(r293_df, r293_top);
                var r295_eleft = r293_df.middle - r295_sw * 0.25 * r271_HVContrast;
                r295_currentGlyph.include(r293_straight ? r271_AEAHalfStraight(r293_df, r293_top, r295_eleft, r295_sw) : r271_AEAHalfCurly(r293_df, r293_top, r295_eleft, r295_sw));
                r295_currentGlyph.include(r271_AEAHalfSerifs(r293_df, r293_top, r293_slabKind));
                return void 0;
            };
        };
        var r271_AEEHalf = function (r298_df, r298_top, r298_slabKind) {
            var _r298_t0, _r298_t1;
            return function () {
                var r300_jutTop, r300_jutBot, _r300_t1, _r300_t3;
                var _r300_t2 = this;
                var r300_currentGlyph = _r300_t2;
                var r300_eBarPos = r271_DesignParameters.upperEBarPos;
                var r300_sw = r271_AESW(r298_df, r298_top);
                var r300_eleft = r298_df.middle - r300_sw * 0.25 * r271_HVContrast;
                var r300_swVJut = Math.min(r300_sw, (r298_df.rightSB - r300_eleft - r300_sw * r271_HVContrast) * (4 / 5));
                r300_currentGlyph.include(r271_VBar.l(r300_eleft, 0, r298_top, r300_sw));
                r300_currentGlyph.include(r271_HBar.t(r300_eleft - r271_O, r298_df.rightSB, r298_top));
                r300_currentGlyph.include(r271_HBar.m(r300_eleft - r271_O, r298_df.rightSB - r300_sw / 4, r298_top * r300_eBarPos));
                r300_currentGlyph.include(r271_HBar.b(r300_eleft - r271_O, r298_df.rightSB, 0));
                var _r300_t0 = r298_slabKind;
                if (_r300_t0 === r271_xn$SLABEALL$5sIl2) {
                    _r300_t1 = r271_EFVJutLength(r298_top, r300_eBarPos, r300_sw);
                    r300_jutTop = _r300_t1[0];
                    r300_jutBot = _r300_t1[1];
                    r300_currentGlyph.include(r271_VSerif.dr(r298_df.rightSB, r298_top, r300_jutTop, r300_swVJut));
                    r300_currentGlyph.include(r271_VSerif.ur(r298_df.rightSB, 0, r300_jutBot, r300_swVJut));
                } else
                    void 0;
                return void 0;
            };
        };
        var r271_AConfig = {
            'straightSerifless': [
                true,
                r271_xn$SLABANONE$5sIl2
            ],
            'curlySerifless': [
                false,
                r271_xn$SLABANONE$5sIl2
            ],
            'straightTopSerifed': [
                true,
                r271_xn$SLABATOP$5sIl2
            ],
            'curlyTopSerifed': [
                false,
                r271_xn$SLABATOP$5sIl2
            ],
            'straightBaseSerifed': [
                true,
                r271_xn$SLABABASE$5sIl2
            ],
            'curlyBaseSerifed': [
                false,
                r271_xn$SLABABASE$5sIl2
            ],
            'straightTriSerifed': [
                true,
                r271_xn$SLABATRI$5sIl2
            ],
            'curlyTriSerifed': [
                false,
                r271_xn$SLABATRI$5sIl2
            ]
        };
        var r271_EConfig = {
            'serifless': [r271_xn$SLABENONE$5sIl2],
            'serifed': [r271_xn$SLABEALL$5sIl2]
        };
        var _r271_t7 = Object.entries(r271_AConfig)[Symbol.iterator]();
        var _r271_t8 = void 0;
        while (!(_r271_t8 = _r271_t7.next()).done) {
            _r271_t9 = _r271_t8.value;
            r271_suffix = _r271_t9[0];
            r271_fStraightBar = _r271_t9[1][0];
            r271_slabKind = _r271_t9[1][1];
            _r271_t9[1];
            (function () {
                r271_xn$createAndSaveGlyphImpl$2Lrc3c('AE/AHalf.' + r271_suffix, null, function () {
                    var _r312_t1;
                    var _r312_t0 = this;
                    var r312_currentGlyph = _r312_t0;
                    var r312_df = r271_DivFrame(r271_para.diversityM, 3);
                    r312_currentGlyph.setWidth(r312_df.width);
                    r312_currentGlyph.include(r312_df.markSet.capital());
                    r312_currentGlyph.setBaseAnchor('cvDecompose', 0, 0);
                    r312_currentGlyph.include(r271_AEAHalf(r312_df, r271_CAP, r271_fStraightBar, r271_slabKind));
                    return void 0;
                });
                return r271_xn$createAndSaveGlyphImpl$2Lrc3c('smcpAE/AHalf.' + r271_suffix, null, function () {
                    var _r319_t1;
                    var _r319_t0 = this;
                    var r319_currentGlyph = _r319_t0;
                    var r319_df = r271_DivFrame(r271_para.diversityM, 3);
                    r319_currentGlyph.setWidth(r319_df.width);
                    r319_currentGlyph.include(r319_df.markSet.e());
                    r319_currentGlyph.setBaseAnchor('cvDecompose', 0, 0);
                    r319_currentGlyph.include(r271_AEAHalf(r319_df, r271_XH, r271_fStraightBar, r271_slabKind));
                    return void 0;
                });
            }());
        }
        var _r271_t10 = Object.entries(r271_EConfig)[Symbol.iterator]();
        var _r271_t11 = void 0;
        while (!(_r271_t11 = _r271_t10.next()).done) {
            _r271_t12 = _r271_t11.value;
            r271_suffix = _r271_t12[0];
            r271_slabKind = _r271_t12[1][0];
            _r271_t12[1];
            (function () {
                r271_xn$createAndSaveGlyphImpl$2Lrc3c('AE/EHalf.' + r271_suffix, null, function () {
                    var _r329_t1;
                    var _r329_t0 = this;
                    var r329_currentGlyph = _r329_t0;
                    var r329_df = r271_DivFrame(r271_para.diversityM, 3);
                    r329_currentGlyph.setWidth(0);
                    r329_currentGlyph.setMarkAnchor('cvDecompose', 0, 0);
                    r329_currentGlyph.include(r271_AEEHalf(r329_df, r271_CAP, r271_slabKind));
                    return void 0;
                });
                return r271_xn$createAndSaveGlyphImpl$2Lrc3c('smcpAE/EHalf.' + r271_suffix, null, function () {
                    var _r335_t1;
                    var _r335_t0 = this;
                    var r335_currentGlyph = _r335_t0;
                    var r335_df = r271_DivFrame(r271_para.diversityM, 3);
                    r335_currentGlyph.setWidth(0);
                    r335_currentGlyph.setMarkAnchor('cvDecompose', 0, 0);
                    r335_currentGlyph.include(r271_AEEHalf(r335_df, r271_XH, r271_slabKind));
                    return void 0;
                });
            }());
        }
        r271_xn$selectvariant$7Hrq('AE/AHalf', new r271_xn$NamedParameterPair$2Lrc9b('follow', 'A'));
        r271_xn$selectvariant$7Hrq('AE/EHalf', new r271_xn$NamedParameterPair$2Lrc9b('follow', 'AE/EHalf'));
        r271_xn$selectvariant$7Hrq('smcpAE/AHalf', new r271_xn$NamedParameterPair$2Lrc9b('follow', 'A'));
        r271_xn$selectvariant$7Hrq('smcpAE/EHalf', new r271_xn$NamedParameterPair$2Lrc9b('follow', 'AE/EHalf'));
        r271_xn$createAndSaveGlyphImpl$2Lrc3c('AE', 198, function () {
            var _r345_t1;
            var _r345_t0 = this;
            var r345_currentGlyph = _r345_t0;
            r345_currentGlyph.include(r271_xn$referglyph$1aao('AE/AHalf'), r271_AS_BASE, r271_ALSO_METRICS);
            r345_currentGlyph.include(r271_xn$referglyph$1aao('AE/EHalf'));
            r1_CvDecompose.set(r345_currentGlyph, [
                'AE/AHalf',
                'AE/EHalf'
            ]);
            return void 0;
        });
        r271_xn$createAndSaveGlyphImpl$2Lrc3c('smcpAE', 7425, function () {
            var _r350_t1;
            var _r350_t0 = this;
            var r350_currentGlyph = _r350_t0;
            r350_currentGlyph.include(r271_xn$referglyph$1aao('smcpAE/AHalf'), r271_AS_BASE, r271_ALSO_METRICS);
            r350_currentGlyph.include(r271_xn$referglyph$1aao('smcpAE/EHalf'));
            r1_CvDecompose.set(r350_currentGlyph, [
                'smcpAE/AHalf',
                'smcpAE/EHalf'
            ]);
            return void 0;
        });
        r271_alias('cyrl/AE', 1236, 'AE');
        if (r271_xn$queryglyph$1aao('cyrl/AE'))
            r1_CvDecompose.set(r271_xn$queryglyph$1aao('cyrl/AE'), [
                'AE/AHalf',
                'AE/EHalf'
            ]);
        var r271_OEShape = function (r353_top, r353_df, r353_slabKind) {
            var _r353_t0, _r353_t1;
            return function () {
                var r355_jutTop, r355_jutBot, _r355_t1, _r355_t3;
                var _r355_t2 = this;
                var r355_currentGlyph = _r355_t2;
                var r355_eBarPos = r271_DesignParameters.upperEBarPos;
                var r355_sw = Math.min(r353_df.mvs, r271_AdviceStroke2(3, 3, r353_top, r353_df.div));
                var r355_eleft = r353_df.middle - r355_sw * (r271_SLAB ? 1 / 3 : 1 / 4) * r271_HVContrast;
                var r355_swVJut = Math.min(r355_sw, (r353_df.rightSB - r355_eleft - r355_sw * r271_HVContrast) * (4 / 5));
                r355_currentGlyph.include(r271_dispiro(r271_widths.lhs(r355_sw, 0), r271_straight.left.start(r355_eleft, r353_top, r271_heading(r271_Leftward)), r271_archv(), r271_flat(r353_df.leftSB, r353_top - r271_ArchDepthA), r271_curl(r353_df.leftSB, r271_ArchDepthB), r271_arcvh(), r271_straight.right.end(r355_eleft, 0, r271_heading(r271_Rightward))));
                r355_currentGlyph.include(r271_VBar.l(r355_eleft, 0, r353_top, r355_sw));
                r355_currentGlyph.include(r271_HBar.t(r355_eleft - r271_O, r353_df.rightSB, r353_top, r355_sw));
                r355_currentGlyph.include(r271_HBar.m(r355_eleft - r271_O, r353_df.rightSB - r355_sw / 4, r353_top * 0.54, r355_sw));
                r355_currentGlyph.include(r271_HBar.b(r355_eleft - r271_O, r353_df.rightSB, 0, r355_sw));
                var _r355_t0 = r353_slabKind;
                if (_r355_t0 === r271_xn$SLABEALL$5sIl2) {
                    _r355_t1 = r271_EFVJutLength(r353_top, r355_eBarPos, r355_sw);
                    r355_jutTop = _r355_t1[0];
                    r355_jutBot = _r355_t1[1];
                    r355_currentGlyph.include(r271_VSerif.dr(r353_df.rightSB, r353_top, r355_jutTop, r355_swVJut));
                    r355_currentGlyph.include(r271_VSerif.ur(r353_df.rightSB, 0, r355_jutBot, r355_swVJut));
                } else
                    void 0;
                return void 0;
            };
        };
        var _r271_t13 = Object.entries(r271_EConfig)[Symbol.iterator]();
        var _r271_t14 = void 0;
        while (!(_r271_t14 = _r271_t13.next()).done) {
            _r271_t15 = _r271_t14.value;
            r271_suffix = _r271_t15[0];
            r271_slabKind = _r271_t15[1][0];
            _r271_t15[1];
            (function () {
                r271_xn$createAndSaveGlyphImpl$2Lrc3c('OE.' + r271_suffix, null, function () {
                    var _r368_t1;
                    var _r368_t0 = this;
                    var r368_currentGlyph = _r368_t0;
                    var r368_df = r271_DivFrame(r271_para.diversityM, 3);
                    r368_currentGlyph.setWidth(r368_df.width);
                    r368_currentGlyph.include(r368_df.markSet.capital());
                    r368_currentGlyph.include(r271_OEShape(r271_CAP, r368_df, r271_slabKind));
                    return void 0;
                });
                return r271_xn$createAndSaveGlyphImpl$2Lrc3c('smcpOE.' + r271_suffix, null, function () {
                    var _r374_t1;
                    var _r374_t0 = this;
                    var r374_currentGlyph = _r374_t0;
                    var r374_df = r271_DivFrame(r271_para.diversityM, 3);
                    r374_currentGlyph.setWidth(r374_df.width);
                    r374_currentGlyph.include(r374_df.markSet.e());
                    r374_currentGlyph.include(r271_OEShape(r271_XH, r374_df, r271_slabKind));
                    return void 0;
                });
            }());
        }
        r271_xn$selectvariant$7Hrq('OE', 338, new r271_xn$NamedParameterPair$2Lrc9b('follow', 'AE/EHalf'));
        return r271_xn$selectvariant$7Hrq('smcpOE', 630, new r271_xn$NamedParameterPair$2Lrc9b('follow', 'AE/EHalf'));
    });
    return void 0;
});
