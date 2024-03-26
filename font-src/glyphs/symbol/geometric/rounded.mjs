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
    r270_xn$Capture_Ext$2Lrc2b['$defineGlyphBlockImpl$'](r270_xn$Capture_Ext$2Lrc2b, 'Symbol-Geometric-Rounded', function (r271_xn$Capture$2Lrc8, r271_xn$ExportCapture$2Lrc4b) {
        var _r271_t4, _r271_t5, _r271_t6, _r271_tag7;
        var _r271_t0 = r271_xn$Capture$2Lrc8;
        var r271_xn$createAndSaveGlyphImpl$2Lrc3c = _r271_t0['$createAndSaveGlyphImpl$'];
        var r271_xn$NamedParameterPair$2Lrc9b = _r271_t0['$NamedParameterPair$'];
        var r271_xn$assignUnicodeImpl$2Lrc8b = _r271_t0['$assignUnicodeImpl$'];
        var r271_xn$execState$2Lrc0b = _r271_t0['$execState$'];
        var _r271_t1 = r271_xn$Capture$2Lrc8.Metrics;
        var r271_Width = _r271_t1.Width;
        var r271_Upward = _r271_t1.Upward;
        var r271_Downward = _r271_t1.Downward;
        var r271_Rightward = _r271_t1.Rightward;
        var r271_Leftward = _r271_t1.Leftward;
        var r271_WideWidth1 = _r271_t1.WideWidth1;
        var r271_WideWidth4 = _r271_t1.WideWidth4;
        var r271_AdviceStroke = _r271_t1.AdviceStroke;
        var r271_GeometryStroke = _r271_t1.GeometryStroke;
        var _r271_t2 = r271_xn$Capture$2Lrc8.SpiroFns;
        var r271_g4 = _r271_t2.g4;
        var r271_flat = _r271_t2.flat;
        var r271_curl = _r271_t2.curl;
        var r271_close = _r271_t2.close;
        var r271_widths = _r271_t2.widths;
        var r271_heading = _r271_t2.heading;
        var r271_archv = _r271_t2.archv;
        var r271_arcvh = _r271_t2.arcvh;
        var r271_dispiro = _r271_t2.dispiro;
        var r271_xn$spirooutline$1aao = _r271_t2['spiro-outline'];
        var _r271_t3 = r271_xn$Capture$2Lrc8.BooleFns;
        var r271_union = _r271_t3.union;
        var r271_difference = _r271_t3.difference;
        return function () {
            var r274_FMosaicWide, r274_MosaicNameSuffix, r274_MosaicWidth, r274_MosaicWidthScalar, _r274_t3, _r274_t5, _r274_t6, _r274_tag7;
            var r274_WidthKinds = [
                [
                    0,
                    '.NWID',
                    r271_xn$Capture$2Lrc8.Metrics.Width,
                    1
                ],
                [
                    1,
                    '.WWID',
                    r271_xn$Capture$2Lrc8.Metrics.WideWidth0,
                    2
                ]
            ];
            var _r274_t0 = r274_WidthKinds;
            var _r274_t1 = _r274_t0.length;
            var _r274_t2 = 0;
            var _r274_t4 = _r274_t2 < _r274_t1;
            while (_r274_t4) {
                _r274_t3 = _r274_t0[_r274_t2];
                r274_FMosaicWide = _r274_t3[0];
                r274_MosaicNameSuffix = _r274_t3[1];
                r274_MosaicWidth = _r274_t3[2];
                r274_MosaicWidthScalar = _r274_t3[3];
                (function () {
                    var r277_MosaicDesiredWidth = r271_WideWidth1;
                    var r277_MosaicMiddle = r274_MosaicWidth / 2;
                    var r277_MosaicUnitWidth = r274_MosaicWidth / r274_MosaicWidthScalar;
                    var r277_MangleUnicode = function (r278_unicode, r278__desiredOverride) {
                        var _r278_t0, _r278_t1;
                        return r274_MosaicWidth === (r278__desiredOverride || r277_MosaicDesiredWidth) ? r278_unicode : void 0;
                    };
                    var r277_MangleName = function (r279_name) {
                        var _r279_t0, _r279_t1;
                        return r279_name + r274_MosaicNameSuffix;
                    };
                    var _r277_t0 = r271_xn$Capture$2Lrc8.CommonShapes.resolve();
                    var r277_PointingTo = _r277_t0.PointingTo;
                    var _r277_t1 = r271_xn$Capture$2Lrc8['Common-Derivatives'].resolve();
                    var _r277_t2 = r271_xn$Capture$2Lrc8['Symbol-Geometric-Shared'].resolve();
                    var r277_GeometricDim = _r277_t2.GeometricDim;
                    var r277_UnicodeWeightGrade = _r277_t2.UnicodeWeightGrade;
                    var r277_GeometricSizes = _r277_t2.GeometricSizes;
                    var r277_Geom = r277_GeometricDim(r277_MosaicUnitWidth, r274_MosaicWidth);
                    var r277_Size = r277_GeometricSizes(r277_Geom);
                    r271_xn$createAndSaveGlyphImpl$2Lrc3c(r277_MangleName('roundwhitesquare'), r277_MangleUnicode(9634), function () {
                        var _r285_t1;
                        var _r285_t0 = this;
                        var r285_currentGlyph = _r285_t0;
                        r285_currentGlyph.setWidth(r277_Geom.Width);
                        var r285_cr = r277_Geom.Size - r271_GeometryStroke * 2;
                        r285_currentGlyph.include(r271_dispiro(r271_widths.lhs(r271_GeometryStroke), r271_flat(r277_Geom.MidX + 1, r277_Geom.MidY + r277_Geom.Size, r271_heading(r271_Leftward)), r271_curl(r277_Geom.MidX - r285_cr, r277_Geom.MidY + r277_Geom.Size, r271_heading(r271_Leftward)), r271_archv(), r271_flat(r277_Geom.MidX - r277_Geom.Size, r277_Geom.MidY + r285_cr, r271_heading(r271_Downward)), r271_curl(r277_Geom.MidX - r277_Geom.Size, r277_Geom.MidY - r285_cr, r271_heading(r271_Downward)), r271_arcvh(), r271_flat(r277_Geom.MidX - r285_cr, r277_Geom.MidY - r277_Geom.Size, r271_heading(r271_Rightward)), r271_curl(r277_Geom.MidX + r285_cr, r277_Geom.MidY - r277_Geom.Size, r271_heading(r271_Rightward)), r271_archv(), r271_flat(r277_Geom.MidX + r277_Geom.Size, r277_Geom.MidY - r285_cr, r271_heading(r271_Upward)), r271_curl(r277_Geom.MidX + r277_Geom.Size, r277_Geom.MidY + r285_cr, r271_heading(r271_Upward)), r271_arcvh(), r271_flat(r277_Geom.MidX + r285_cr, r277_Geom.MidY + r277_Geom.Size, r271_heading(r271_Leftward)), r271_curl(r277_Geom.MidX - 1, r277_Geom.MidY + r277_Geom.Size, r271_heading(r271_Leftward))));
                        return void 0;
                    });
                    var r277_ThickRoundedArrowBar = function (r288_x1, r288_y1, r288_x2, r288_y2, r288_r, r288_w) {
                        var _r288_t0, _r288_t1;
                        return function () {
                            var _r290_t1;
                            var _r290_t0 = this;
                            var r290_currentGlyph = _r290_t0;
                            r290_currentGlyph.include(r277_PointingTo(r288_x1, r288_y1, r288_x2, r288_y2, function (r292_mag) {
                                var _r292_t0, _r292_t1;
                                return r271_xn$spirooutline$1aao(r271_g4(-r288_r, 0), r271_arcvh(), r271_flat(0, r288_r), r271_curl(r292_mag, r288_r), r271_archv(), r271_g4(r292_mag + r288_r, 0), r271_arcvh(), r271_flat(r292_mag, -r288_r), r271_curl(0, -r288_r), r271_archv(), r271_close());
                            }));
                            return void 0;
                        };
                    };
                    return r271_xn$createAndSaveGlyphImpl$2Lrc3c(r277_MangleName('whiteHeavySaltireWithRoundedCorners'), r277_MangleUnicode(129984, r271_WideWidth4), function () {
                        var _r295_t1;
                        var _r295_t0 = this;
                        var r295_currentGlyph = _r295_t0;
                        r295_currentGlyph.setWidth(r277_Geom.Width);
                        var r295_inner = Math.max(r271_AdviceStroke(3), r271_Width / 8) / 2;
                        var r295_thick = r271_AdviceStroke(4);
                        var r295_left = r277_Geom.Left + (r295_inner + r295_thick);
                        var r295_right = r277_Geom.Right - (r295_inner + r295_thick);
                        var r295_bot = r277_Geom.Bot + (r295_inner + r295_thick);
                        var r295_top = r277_Geom.Top - (r295_inner + r295_thick);
                        r295_currentGlyph.include(r271_difference(r271_union(r277_ThickRoundedArrowBar(r295_left, r295_top, r295_right, r295_bot, r295_inner + r295_thick, 0), r277_ThickRoundedArrowBar(r295_right, r295_top, r295_left, r295_bot, r295_inner + r295_thick, 0)), r271_union(r277_ThickRoundedArrowBar(r295_left, r295_top, r295_right, r295_bot, r295_inner, 0), r277_ThickRoundedArrowBar(r295_right, r295_top, r295_left, r295_bot, r295_inner, 0))));
                        return void 0;
                    });
                }());
                _r274_t5 = _r274_t2 = _r274_t2 + 1;
                _r274_t4 = _r274_t2 < _r274_t1;
            }
            return _r274_t5;
        }();
    });
    return void 0;
});
