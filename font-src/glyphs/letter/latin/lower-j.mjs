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
    r270_xn$Capture_Ext$2Lrc2b['$defineGlyphBlockImpl$'](r270_xn$Capture_Ext$2Lrc2b, 'Letter-Latin-Lower-J', function (r271_xn$Capture$2Lrc8, r271_xn$ExportCapture$2Lrc4b) {
        var r271_suffix, r271_shapeId, r271_Serif, r271_xMiddleT, r271_div, _r271_t13, _r271_t14, _r271_t15, _r271_t16, _r271_tag17, _r271_t18, _r271_tag19, _r271_t20, _r271_tag21, _r271_t22, _r271_tag23, _r271_t24, _r271_tag25;
        var _r271_t0 = r271_xn$Capture$2Lrc8;
        var r271_xn$createAndSaveGlyphImpl$2Lrc3c = _r271_t0['$createAndSaveGlyphImpl$'];
        var r271_xn$NamedParameterPair$2Lrc9b = _r271_t0['$NamedParameterPair$'];
        var r271_xn$assignUnicodeImpl$2Lrc8b = _r271_t0['$assignUnicodeImpl$'];
        var r271_xn$execState$2Lrc0b = _r271_t0['$execState$'];
        var r271_para = _r271_t0.para;
        var r271_MarkSet = _r271_t0.MarkSet;
        var r271_AS_BASE = _r271_t0.AS_BASE;
        var r271_ALSO_METRICS = _r271_t0.ALSO_METRICS;
        var r271_tagged = _r271_t0.tagged;
        var r271_DivFrame = _r271_t0.DivFrame;
        var _r271_t1 = r271_xn$Capture$2Lrc8.Metrics;
        var r271_DesignParameters = _r271_t1.DesignParameters;
        var r271_Width = _r271_t1.Width;
        var r271_XH = _r271_t1.XH;
        var r271_Descender = _r271_t1.Descender;
        var r271_HVContrast = _r271_t1.HVContrast;
        var r271_Upward = _r271_t1.Upward;
        var r271_Downward = _r271_t1.Downward;
        var r271_O = _r271_t1.O;
        var r271_OX = _r271_t1.OX;
        var r271_OXHook = _r271_t1.OXHook;
        var r271_JHook = _r271_t1.JHook;
        var r271_Stroke = _r271_t1.Stroke;
        var r271_LongJut = _r271_t1.LongJut;
        var r271_IBalance2 = _r271_t1.IBalance2;
        var r271_JBalance = _r271_t1.JBalance;
        var r271_HalfStroke = _r271_t1.HalfStroke;
        var r271_RightSB = _r271_t1.RightSB;
        var r271_Middle = _r271_t1.Middle;
        var r271_ArchDepthA = _r271_t1.ArchDepthA;
        var r271_CorrectionOMidS = _r271_t1.CorrectionOMidS;
        var r271_AdviceStroke = _r271_t1.AdviceStroke;
        var _r271_t2 = r271_xn$Capture$2Lrc8.SpiroFns;
        var r271_g4 = _r271_t2.g4;
        var r271_corner = _r271_t2.corner;
        var r271_flat = _r271_t2.flat;
        var r271_curl = _r271_t2.curl;
        var r271_widths = _r271_t2.widths;
        var r271_heading = _r271_t2.heading;
        var r271_archv = _r271_t2.archv;
        var r271_dispiro = _r271_t2.dispiro;
        var r271_xn$spirooutline$1aao = _r271_t2['spiro-outline'];
        var _r271_t3 = r271_xn$Capture$2Lrc8.BooleFns;
        var r271_intersection = _r271_t3.intersection;
        var _r271_t4 = r271_xn$Capture$2Lrc8.CommonShapes.resolve();
        var r271_HSerif = _r271_t4.HSerif;
        var r271_HBar = _r271_t4.HBar;
        var r271_VBar = _r271_t4.VBar;
        var r271_hookend = _r271_t4.hookend;
        var _r271_t5 = r271_xn$Capture$2Lrc8['Common-Derivatives'].resolve();
        var r271_xn$selectvariant$7Hrq = _r271_t5['select-variant'];
        var r271_xn$referglyph$1aao = _r271_t5['refer-glyph'];
        var r271_xn$linkreducedvariant$5sIl8 = _r271_t5['link-reduced-variant'];
        var _r271_t6 = r271_xn$Capture$2Lrc8['Mark-Adjustment'].resolve();
        var r271_ExtendAboveBaseAnchors = _r271_t6.ExtendAboveBaseAnchors;
        var _r271_t7 = r271_xn$Capture$2Lrc8['Letter-Shared'].resolve();
        var r271_CreateAccentedComposition = _r271_t7.CreateAccentedComposition;
        var _r271_t8 = r271_xn$Capture$2Lrc8['Letter-Shared-Shapes'].resolve();
        var r271_CurlyTail = _r271_t8.CurlyTail;
        var r271_FlatHookDepth = _r271_t8.FlatHookDepth;
        var r271_LetterBarOverlay = _r271_t8.LetterBarOverlay;
        var _r271_t9 = r271_xn$Capture$2Lrc8['Letter-Shared-Shapes'].resolve();
        var r271_DiagonalTailL = _r271_t9.DiagonalTailL;
        var r271_DiagonalTailStdDepth = _r271_t9.DiagonalTailStdDepth;
        var r271_TopHook = _r271_t9.TopHook;
        var _r271_t10 = r271_xn$Capture$2Lrc8['Letter-Blackboard'].resolve();
        var r271_BBS = _r271_t10.BBS;
        var r271_BBD = _r271_t10.BBD;
        r271_xn$ExportCapture$2Lrc4b(function () {
            var _r280_t0, _r280_t1;
            return { 'FlatHookDotlessJShape': r271_FlatHookDotlessJShape };
        });
        var r271_FlatHookDotlessJShape = function () {
            var _r281_t6;
            var _r281_t7 = arguments;
            var _r281_t0 = [].slice.call(_r281_t7, 0);
            var _r281_t1 = [];
            var _r281_t2 = 0;
            while (_r281_t2 < _r281_t0.length) {
                if (!(_r281_t0[_r281_t2] instanceof r271_xn$NamedParameterPair$2Lrc9b))
                    _r281_t1.push(_r281_t0[_r281_t2]);
                _r281_t2 = _r281_t2 + 1;
            }
            var _r281_t3 = _r281_t0;
            var _r281_t4 = _r281_t3.length;
            var _r281_t5 = 0;
            while (_r281_t5 < _r281_t4) {
                _r281_t2 = _r281_t3[_r281_t5];
                if (_r281_t2 && _r281_t2 instanceof r271_xn$NamedParameterPair$2Lrc9b && _r281_t2.left === 'df')
                    r281_df = _r281_t2.right;
                if (_r281_t2 && _r281_t2 instanceof r271_xn$NamedParameterPair$2Lrc9b && _r281_t2.left === 'dfHook')
                    r281_dfHook = _r281_t2.right;
                if (_r281_t2 && _r281_t2 instanceof r271_xn$NamedParameterPair$2Lrc9b && _r281_t2.left === 'top')
                    r281_top = _r281_t2.right;
                if (_r281_t2 && _r281_t2 instanceof r271_xn$NamedParameterPair$2Lrc9b && _r281_t2.left === 'crossLeft')
                    r281_crossLeft = _r281_t2.right;
                if (_r281_t2 && _r281_t2 instanceof r271_xn$NamedParameterPair$2Lrc9b && _r281_t2.left === 'barCenter')
                    r281_barCenter = _r281_t2.right;
                if (_r281_t2 && _r281_t2 instanceof r271_xn$NamedParameterPair$2Lrc9b && _r281_t2.left === 'serif')
                    r281_serif = _r281_t2.right;
                _r281_t5 = _r281_t5 + 1;
            }
            var r281_df = r1_fallback(r281_df, _r281_t1[0]);
            var r281_dfHook = r1_fallback(r281_dfHook, _r281_t1[1]);
            var r281_top = r1_fallback(r281_top, _r281_t1[2]);
            var r281_crossLeft = r1_fallback(r281_crossLeft, _r281_t1[3]);
            var r281_barCenter = r1_fallback(r281_barCenter, _r281_t1[4]);
            var r281_serif = r1_fallback(r281_serif, _r281_t1[5]);
            return function () {
                var _r287_t1;
                var _r287_t0 = this;
                var r287_currentGlyph = _r287_t0;
                var r287_bar = r281_barCenter + r271_HalfStroke * r271_HVContrast;
                var r287_hd = r271_FlatHookDepth(r281_dfHook);
                var r287_terminal = Math.min(r287_bar - r287_hd.x - Math.max(r271_Stroke / 3, r281_df.width / 6), r281_crossLeft - r271_OX * 2);
                if (r281_serif)
                    r287_currentGlyph.include(r271_HSerif.lt(r281_barCenter, r281_top, r271_LongJut * r281_df.div));
                r287_currentGlyph.include(r271_dispiro(r271_widths.lhs(), r271_flat(r287_terminal, r271_Descender), r271_curl(r287_bar - r287_hd.x, r271_Descender), r271_archv.superness(r271_DesignParameters.tightHookSuperness), r271_flat(r287_bar, r271_Descender + r287_hd.y), r271_curl(r287_bar, r281_top, r271_heading(r271_Upward))));
                r287_currentGlyph.setBaseAnchor('above', r281_barCenter, r281_top);
                r287_currentGlyph.setBaseAnchor('trailing', r287_bar - r287_hd.x, r271_Descender);
                r287_currentGlyph.setBaseAnchor('overlay', r281_barCenter, r281_top / 2);
                return void 0;
            };
        };
        var r271_XMiddle = function () {
            var r295_Straight, r295_Hooky, r295_Regular, r295_FlatHookSerifless, r295_FlatHookSerifed;
            var r295_exports = {};
            r295_exports.Straight = r295_Straight = function (r303_df) {
                var _r303_t0, _r303_t1;
                return r303_df.middle;
            };
            r295_exports.Hooky = r295_Hooky = function (r305_df) {
                var _r305_t0, _r305_t1;
                return r305_df.middle + r271_IBalance2(r305_df);
            };
            r295_exports.Regular = r295_Regular = function (r307_df) {
                var _r307_t0, _r307_t1;
                return r307_df.middle + r271_JBalance;
            };
            r295_exports.FlatHookSerifless = r295_FlatHookSerifless = function (r309_df) {
                var _r309_t0, _r309_t1;
                return r309_df.middle + 0.25 * r271_JBalance * r309_df.div * r1_mix(1, r309_df.div, 2);
            };
            r295_exports.FlatHookSerifed = r295_FlatHookSerifed = function (r311_df) {
                var _r311_t0, _r311_t1;
                return r311_df.middle + r271_JBalance * r311_df.div;
            };
            return r295_exports;
        }();
        var r271_Body = function () {
            var r314_Regular, r314_Straight, r314_FlatHook, r314_DiagonalTailed;
            var r314_exports = {};
            r314_exports.Regular = r314_Regular = function (r322_df, r322_top, r322_xMiddle) {
                var _r322_t0, _r322_t1;
                return function () {
                    var _r324_t1;
                    var _r324_t0 = this;
                    var r324_currentGlyph = _r324_t0;
                    var r324_hookx = r322_xMiddle - r271_Width * 0.5 - r271_HalfStroke * r271_HVContrast + r271_OXHook;
                    var r324_turn = r322_xMiddle - r271_Width * 0.25 + r271_CorrectionOMidS;
                    r324_currentGlyph.setBaseAnchor('below', r1_mix(r324_hookx, r322_xMiddle, 0.5), r271_Descender);
                    r324_currentGlyph.include(r271_dispiro(r271_widths.rhs(), r271_flat(r322_xMiddle + r271_HalfStroke * r271_HVContrast, r322_top, r271_heading(r271_Downward)), r271_curl(r322_xMiddle + r271_HalfStroke * r271_HVContrast, r271_Descender + r271_ArchDepthA), r271_hookend(r271_Descender + r271_O), r271_g4(r324_hookx, r271_Descender + r271_JHook)));
                    return void 0;
                };
            };
            r314_exports.Straight = r314_Straight = function (r328_df, r328_top, r328_xMiddle) {
                var _r328_t0, _r328_t1;
                return function () {
                    var _r330_t1;
                    var _r330_t0 = this;
                    var r330_currentGlyph = _r330_t0;
                    r330_currentGlyph.include(r271_VBar.m(r328_xMiddle, r271_Descender, r328_top));
                    r330_currentGlyph.setBaseAnchor('below', r328_xMiddle, r271_Descender);
                    r330_currentGlyph.setBaseAnchor('trailing', r328_xMiddle + r271_HalfStroke * r271_HVContrast, r271_Descender);
                    return void 0;
                };
            };
            r314_exports.FlatHook = r314_FlatHook = function (r335_df, r335_top, r335_xMiddle) {
                var _r335_t0, _r335_t1;
                return function () {
                    var _r337_t1;
                    var _r337_t0 = this;
                    var r337_currentGlyph = _r337_t0;
                    var r337_dfHook = r271_DivFrame(r271_para.diversityI);
                    var r337_crossLeft = r335_df.middle - (r337_dfHook.middle - r1_mix(0, r337_dfHook.leftSB, r1_mix(1, r337_dfHook.div, 2)));
                    r337_currentGlyph.setWidth(r335_df.width);
                    r337_currentGlyph.include(r335_df.markSet.p());
                    r337_currentGlyph.include(r271_FlatHookDotlessJShape(r335_df, r337_dfHook, r335_top, new r271_xn$NamedParameterPair$2Lrc9b('crossLeft', r337_crossLeft), new r271_xn$NamedParameterPair$2Lrc9b('barCenter', r335_xMiddle), new r271_xn$NamedParameterPair$2Lrc9b('serif', false)));
                    return void 0;
                };
            };
            r314_exports.DiagonalTailed = r314_DiagonalTailed = function (r345_df, r345_top, r345_xMiddle) {
                var _r345_t0, _r345_t1;
                return function () {
                    var _r347_t1;
                    var _r347_t0 = this;
                    var r347_currentGlyph = _r347_t0;
                    var r347_dfHook = r271_DivFrame(r1_mix(r271_para.diversityI, r271_para.diversityII, 0.5));
                    r347_currentGlyph.include(r271_dispiro(r271_widths.center(), r271_flat(r345_xMiddle, r345_top, r271_heading(r271_Downward)), r271_DiagonalTailL(r345_df, r345_xMiddle, r271_Descender, r271_DiagonalTailStdDepth(r347_dfHook, r271_Stroke), r271_Stroke)));
                    r347_currentGlyph.setBaseAnchor('trailing', r345_xMiddle - r271_HalfStroke * r271_HVContrast, r271_Descender);
                    return void 0;
                };
            };
            return r314_exports;
        }();
        var r271_Serifs = function () {
            var r352_Long;
            var r352_exports = {};
            r352_exports.Long = r352_Long = function (r360_df, r360_top, r360_xMiddle) {
                var _r360_t0, _r360_t1;
                return r271_HSerif.lt(r360_xMiddle, r360_top, r271_LongJut * r360_df.div);
            };
            return r352_exports;
        }();
        var r271_Marks = function () {
            var r363_FullHook, r363_Straight;
            var r363_exports = {};
            r363_exports.FullHook = r363_FullHook = function (r371_df, r371_top, r371_xMiddle, r371_fSerifed) {
                var _r371_t0, _r371_t1;
                return function () {
                    var _r373_t1;
                    var _r373_t0 = this;
                    var r373_currentGlyph = _r373_t0;
                    r373_currentGlyph.setBaseAnchor('above', r371_xMiddle - (r371_fSerifed ? 1 : 0) * r271_Stroke * 0.166 * r271_HVContrast * r371_df.div, r371_top);
                    r373_currentGlyph.setBaseAnchor('overlay', r371_xMiddle - (r371_fSerifed ? 1 : 0) * r271_Stroke * 0.166 * r271_HVContrast * r371_df.div, r371_top / 2);
                    return void 0;
                };
            };
            r363_exports.Straight = r363_Straight = function (r377_df, r377_top, r377_xMiddle, r377_fSerifed) {
                var _r377_t0, _r377_t1;
                return function () {
                    var _r379_t1;
                    var _r379_t0 = this;
                    var r379_currentGlyph = _r379_t0;
                    r379_currentGlyph.setBaseAnchor('above', r377_xMiddle, r377_top);
                    r379_currentGlyph.setBaseAnchor('overlay', r377_xMiddle, r377_top / 2);
                    return void 0;
                };
            };
            return r363_exports;
        }();
        var r271_JConfig = {
            'serifless': [
                'Regular',
                null,
                r271_XMiddle.Regular,
                r271_Marks.FullHook,
                1
            ],
            'serifed': [
                'Regular',
                r271_Serifs.Long,
                r271_XMiddle.Regular,
                r271_Marks.FullHook,
                1
            ],
            'straightLine': [
                'Straight',
                null,
                r271_XMiddle.Straight,
                r271_Marks.Straight,
                r271_para.diversityII
            ],
            'hooky': [
                'Straight',
                r271_Serifs.Long,
                r271_XMiddle.Hooky,
                r271_Marks.Straight,
                r271_para.diversityII
            ],
            'flatHookSerifless': [
                'FlatHook',
                null,
                r271_XMiddle.FlatHookSerifless,
                r271_Marks.FullHook,
                r271_para.diversityII
            ],
            'flatHookSerifed': [
                'FlatHook',
                r271_Serifs.Long,
                r271_XMiddle.FlatHookSerifed,
                r271_Marks.FullHook,
                r271_para.diversityI
            ],
            'diagonalTailedSerifless': [
                'DiagonalTailed',
                null,
                r271_XMiddle.FlatHookSerifless,
                r271_Marks.FullHook,
                r271_para.diversityII
            ],
            'diagonalTailedSerifed': [
                'DiagonalTailed',
                r271_Serifs.Long,
                r271_XMiddle.FlatHookSerifed,
                r271_Marks.FullHook,
                r271_para.diversityI
            ]
        };
        var _r271_t11 = Object.entries(r271_JConfig)[Symbol.iterator]();
        var _r271_t12 = void 0;
        while (!(_r271_t12 = _r271_t11.next()).done) {
            _r271_t13 = _r271_t12.value;
            r271_suffix = _r271_t13[0];
            r271_shapeId = _r271_t13[1][0];
            r271_Serif = _r271_t13[1][1];
            r271_xMiddleT = _r271_t13[1][2];
            r271_Marks = _r271_t13[1][3];
            r271_div = _r271_t13[1][4];
            _r271_t13[1];
            (function () {
                var r384_df = r271_DivFrame(r271_div);
                var r384_xMiddle = r271_xMiddleT(r384_df);
                r271_xn$createAndSaveGlyphImpl$2Lrc3c('dotlessj.' + r271_suffix, null, function () {
                    var _r387_t1;
                    var _r387_t0 = this;
                    var r387_currentGlyph = _r387_t0;
                    r387_currentGlyph.setWidth(r384_df.width);
                    r387_currentGlyph.include(r384_df.markSet.p());
                    r387_currentGlyph.include(r271_Body[r271_shapeId](r384_df, r271_XH, r384_xMiddle));
                    if (r271_Serif)
                        r387_currentGlyph.include(r271_tagged('serifLT', r271_Serif(r384_df, r271_XH, r384_xMiddle)));
                    r387_currentGlyph.include(r271_Marks(r384_df, r271_XH, r384_xMiddle, !!r271_Serif));
                    return void 0;
                });
                r271_xn$createAndSaveGlyphImpl$2Lrc3c('dotlessjBar.' + r271_suffix, null, function () {
                    var _r395_t1;
                    var _r395_t0 = this;
                    var r395_currentGlyph = _r395_t0;
                    r395_currentGlyph.include(r271_xn$referglyph$1aao('dotlessj.' + r271_suffix), r271_AS_BASE, r271_ALSO_METRICS);
                    r395_currentGlyph.include(r271_LetterBarOverlay.m(r384_xMiddle, r271_XH / 2, new r271_xn$NamedParameterPair$2Lrc9b('space', [
                        0,
                        r384_df.width
                    ])));
                    return void 0;
                });
                return r271_xn$createAndSaveGlyphImpl$2Lrc3c('dotlessjBarHookTop.' + r271_suffix, null, function () {
                    var _r401_t1;
                    var _r401_t0 = this;
                    var r401_currentGlyph = _r401_t0;
                    r401_currentGlyph.include(r271_xn$referglyph$1aao('dotlessjBar.' + r271_suffix), r271_AS_BASE, r271_ALSO_METRICS);
                    r401_currentGlyph.include(r271_TopHook.mBarOuter(r384_xMiddle, r271_XH + r271_O, r271_XH));
                    return void 0;
                });
            }());
        }
        r271_xn$selectvariant$7Hrq('dotlessj', 567);
        r271_xn$selectvariant$7Hrq('dotlessjBar', 607, new r271_xn$NamedParameterPair$2Lrc9b('follow', 'dotlessj'));
        r271_xn$selectvariant$7Hrq('dotlessjBarHookTop', 644, new r271_xn$NamedParameterPair$2Lrc9b('follow', 'dotlessj/sansSerif'));
        r271_xn$linkreducedvariant$5sIl8('dotlessj/sansSerif', 'dotlessj', r1_MathSansSerif);
        r271_CreateAccentedComposition('j', 'j', 'dotlessj', 'dotAbove');
        r271_CreateAccentedComposition('j/sansSerif', null, 'dotlessj/sansSerif', 'dotAbove');
        r271_CreateAccentedComposition('grek/yot', 1011, 'dotlessj', 'dotAbove');
        r271_CreateAccentedComposition('cyrl/je', 1112, 'dotlessj', 'dotAbove');
        r271_xn$linkreducedvariant$5sIl8('j/sansSerif', 'j', r1_MathSansSerif);
        r271_xn$createAndSaveGlyphImpl$2Lrc3c('dotlessjCurlyTail.serifless', null, function () {
            var _r408_t1;
            var _r408_t0 = this;
            var r408_currentGlyph = _r408_t0;
            r408_currentGlyph.include(r271_MarkSet.p());
            r408_currentGlyph.setBaseAnchor('above', r271_Middle + r271_JBalance, r271_XH);
            var r408_fine = r271_AdviceStroke(3.5);
            var r408_rinner = r271_LongJut / 2 - r408_fine / 2;
            var r408_m1 = r271_Middle - r271_HalfStroke * r271_HVContrast + r271_JBalance;
            var r408_x2 = r1_mix(r271_RightSB, r408_m1, 0.25);
            var r408_y2 = r271_Descender + r271_O;
            r408_currentGlyph.include(r271_dispiro(r271_widths.lhs(), r271_flat(r408_m1, r271_XH, r271_heading(r271_Downward)), r271_curl(r408_m1, r271_Descender + r408_fine + r408_rinner * 2), r271_CurlyTail(r408_fine, r408_rinner, r408_m1, r271_Descender, r408_m1 - r271_LongJut, r408_x2, r408_y2)));
            return void 0;
        });
        r271_xn$createAndSaveGlyphImpl$2Lrc3c('dotlessjCurlyTail.serifed', null, function () {
            var _r414_t1;
            var _r414_t0 = this;
            var r414_currentGlyph = _r414_t0;
            r414_currentGlyph.include(r271_xn$referglyph$1aao('dotlessjCurlyTail.serifless'), r271_AS_BASE, r271_ALSO_METRICS);
            r414_currentGlyph.include(r271_HSerif.lt(r271_Middle + r271_JBalance, r271_XH, r271_LongJut));
            return void 0;
        });
        r271_xn$selectvariant$7Hrq('dotlessjCurlyTail');
        r271_CreateAccentedComposition('jCurlyTail', 669, 'dotlessjCurlyTail', 'dotAbove');
        r271_xn$createAndSaveGlyphImpl$2Lrc3c('mathbb/dotlessj', null, function () {
            var _r419_t1;
            var _r419_t0 = this;
            var r419_currentGlyph = _r419_t0;
            r419_currentGlyph.include(r271_MarkSet.p());
            var r419_center = r271_Middle + r271_JBalance + r271_BBD / 2;
            r419_currentGlyph.setBaseAnchor('above', r419_center - r271_HVContrast * r271_BBS / 2 - r271_BBD / 2, r271_XH);
            r419_currentGlyph.setBaseAnchor('overlay', r419_center - r271_HVContrast * r271_BBS / 2 - r271_BBD / 2, r271_XH / 2);
            var r419_hookx = r419_center - r271_Width * 0.5 - r271_BBD * r271_HVContrast + r271_OXHook;
            var r419_turn = r1_mix(r419_center, r419_hookx, 0.5) + r271_CorrectionOMidS;
            r419_currentGlyph.include(r271_dispiro(r271_widths.rhs(r271_BBS), r271_flat(r419_center, r271_XH, r271_heading(r271_Downward)), r271_curl(r419_center, r271_Descender + r271_ArchDepthA), r271_hookend(r271_Descender + r271_O), r271_g4(r419_hookx, r271_Descender + r271_JHook)));
            r419_currentGlyph.include(r271_HBar.t(r419_center - r271_BBD, r419_center, r271_XH, r271_BBS));
            r419_currentGlyph.include(r271_intersection(r271_VBar.r(r419_center - r271_BBD, r271_Descender, r271_XH, r271_BBS), r271_xn$spirooutline$1aao(r271_corner(r419_center, r271_XH, r271_heading(r271_Downward)), r271_curl(r419_center, r271_Descender + r271_ArchDepthA), r271_hookend(r271_Descender + r271_O), r271_g4(r419_hookx, r271_Descender + r271_JHook), r271_corner(r419_hookx, r271_XH))));
            return void 0;
        });
        return r271_xn$createAndSaveGlyphImpl$2Lrc3c('mathbb/j', 120155, function () {
            var _r428_t1;
            var _r428_t0 = this;
            var r428_currentGlyph = _r428_t0;
            r428_currentGlyph.include(r271_xn$referglyph$1aao('mathbb/dotlessj'), r271_AS_BASE, r271_ALSO_METRICS);
            r428_currentGlyph.include(r271_xn$referglyph$1aao('mathbb/dotAbove'));
            r1_Dotless.set(r428_currentGlyph, 'mathbb/dotlessj');
            return void 0;
        });
    });
    return void 0;
});
