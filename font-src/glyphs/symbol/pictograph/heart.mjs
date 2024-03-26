'use strict';
import * as _s0_t0 from '../../../support/utils.mjs';
import * as _s0_t1 from '../../../support/geometry/box.mjs';
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
var r1_Box = _r1_t9.Box;
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
    r270_xn$Capture_Ext$2Lrc2b['$defineGlyphBlockImpl$'](r270_xn$Capture_Ext$2Lrc2b, 'Symbol-Pictograph-Heart', function (r271_xn$Capture$2Lrc8, r271_xn$ExportCapture$2Lrc4b) {
        var _r271_t7, _r271_t8, _r271_t9, _r271_tag10;
        var _r271_t0 = r271_xn$Capture$2Lrc8;
        var r271_xn$createAndSaveGlyphImpl$2Lrc3c = _r271_t0['$createAndSaveGlyphImpl$'];
        var r271_xn$NamedParameterPair$2Lrc9b = _r271_t0['$NamedParameterPair$'];
        var r271_xn$assignUnicodeImpl$2Lrc8b = _r271_t0['$assignUnicodeImpl$'];
        var r271_xn$execState$2Lrc0b = _r271_t0['$execState$'];
        var _r271_t1 = r271_xn$Capture$2Lrc8.Metrics;
        var r271_Width = _r271_t1.Width;
        var r271_O = _r271_t1.O;
        var r271_WideWidth1 = _r271_t1.WideWidth1;
        var _r271_t2 = r271_xn$Capture$2Lrc8.SpiroFns;
        var r271_g4 = _r271_t2.g4;
        var r271_corner = _r271_t2.corner;
        var r271_close = _r271_t2.close;
        var r271_quadControls = _r271_t2.quadControls;
        var r271_archv = _r271_t2.archv;
        var r271_arcvh = _r271_t2.arcvh;
        var r271_xn$spirooutline$1aao = _r271_t2['spiro-outline'];
        var _r271_t3 = r271_xn$Capture$2Lrc8.BooleFns;
        var _r271_t4 = r271_xn$Capture$2Lrc8.CommonShapes.resolve();
        var _r271_t5 = r271_xn$Capture$2Lrc8['Common-Derivatives'].resolve();
        var _r271_t6 = r271_xn$Capture$2Lrc8['Symbol-Geometric-Shared'].resolve();
        var r271_GeometricDim = _r271_t6.GeometricDim;
        r271_xn$ExportCapture$2Lrc4b(function () {
            var _r276_t0, _r276_t1;
            return { 'HeartShapeImpl': r271_HeartShapeImpl };
        });
        var r271_HeartShapeImpl = function (r277_bound, r277_sw, r277_tip, r277_ext) {
            var _r277_t0, _r277_t1;
            var r277_heart = r277_bound.withTop(r277_bound.mixY(0.975));
            var r277_y2 = r277_heart.mixY(0.75);
            var r277_y3 = r277_heart.mixY(0.75);
            return r271_xn$spirooutline$1aao(r271_corner(r277_heart.xMid, r277_heart.bottom + r277_sw * r277_tip), r271_quadControls(1, 2 / 3), r271_g4(r277_heart.right - r271_O - r277_sw, r277_y2), r271_arcvh(), r271_g4(r277_heart.mixXMidRight(0.5), r277_heart.top - r277_sw * r277_tip / 1.75), r271_archv(), r277_sw ? [
                r271_corner(r277_heart.xMid + r277_sw / 3, r277_y3 - r277_sw * r277_ext),
                r271_corner(r277_heart.xMid - r277_sw / 3, r277_y3 - r277_sw * r277_ext)
            ] : r271_corner(r277_heart.xMid, r277_y3 - r277_sw), r271_arcvh(), r271_g4(r277_heart.mixXMidLeft(0.5), r277_heart.top - r277_sw * r277_tip / 1.75), r271_archv(), r271_g4(r277_heart.left + r271_O + r277_sw, r277_y2), r271_quadControls(0, 1 / 3), r271_close());
        };
        return function () {
            var r280_FMosaicWide, r280_MosaicNameSuffix, r280_MosaicWidth, r280_MosaicWidthScalar, _r280_t3, _r280_t5, _r280_t6, _r280_tag7;
            var r280_WidthKinds = [
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
            var _r280_t0 = r280_WidthKinds;
            var _r280_t1 = _r280_t0.length;
            var _r280_t2 = 0;
            var _r280_t4 = _r280_t2 < _r280_t1;
            while (_r280_t4) {
                _r280_t3 = _r280_t0[_r280_t2];
                r280_FMosaicWide = _r280_t3[0];
                r280_MosaicNameSuffix = _r280_t3[1];
                r280_MosaicWidth = _r280_t3[2];
                r280_MosaicWidthScalar = _r280_t3[3];
                (function () {
                    var r283_MosaicDesiredWidth = r271_WideWidth1;
                    var r283_MosaicMiddle = r280_MosaicWidth / 2;
                    var r283_MosaicUnitWidth = r280_MosaicWidth / r280_MosaicWidthScalar;
                    var r283_MangleUnicode = function (r284_unicode, r284__desiredOverride) {
                        var _r284_t0, _r284_t1;
                        return r280_MosaicWidth === (r284__desiredOverride || r283_MosaicDesiredWidth) ? r284_unicode : void 0;
                    };
                    var r283_MangleName = function (r285_name) {
                        var _r285_t0, _r285_t1;
                        return r285_name + r280_MosaicNameSuffix;
                    };
                    var r283_Geom = r271_GeometricDim(r283_MosaicUnitWidth, r280_MosaicWidth);
                    return r271_xn$createAndSaveGlyphImpl$2Lrc3c(r283_MangleName('blackHeart'), r283_MangleUnicode(10084), function () {
                        var _r288_t1;
                        var _r288_t0 = this;
                        var r288_currentGlyph = _r288_t0;
                        r288_currentGlyph.setWidth(r283_Geom.Width);
                        r288_currentGlyph.include(r271_HeartShapeImpl(new r1_Box(r283_Geom.Top, r283_Geom.Bot, r283_Geom.Left, r283_Geom.Right), 0, 0, 0));
                        return void 0;
                    });
                }());
                _r280_t5 = _r280_t2 = _r280_t2 + 1;
                _r280_t4 = _r280_t2 < _r280_t1;
            }
            return _r280_t5;
        }();
    });
    return void 0;
});
