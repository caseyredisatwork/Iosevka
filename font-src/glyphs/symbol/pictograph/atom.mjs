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
    r269_xn$Capture_Ext$2Lrc2b['$defineGlyphBlockImpl$'](r269_xn$Capture_Ext$2Lrc2b, 'Symbol-Pictograph-Atom', function (r270_xn$Capture$2Lrc8, r270_xn$ExportCapture$2Lrc4b) {
        var _r270_t7, _r270_t8, _r270_t9, _r270_tag10;
        var _r270_t0 = r270_xn$Capture$2Lrc8;
        var r270_xn$createAndSaveGlyphImpl$2Lrc3c = _r270_t0['$createAndSaveGlyphImpl$'];
        var r270_xn$NamedParameterPair$2Lrc9b = _r270_t0['$NamedParameterPair$'];
        var r270_xn$assignUnicodeImpl$2Lrc8b = _r270_t0['$assignUnicodeImpl$'];
        var r270_xn$execState$2Lrc0b = _r270_t0['$execState$'];
        var _r270_t1 = r270_xn$Capture$2Lrc8.Metrics;
        var r270_Width = _r270_t1.Width;
        var r270_WideWidth1 = _r270_t1.WideWidth1;
        var r270_AdviceStroke = _r270_t1.AdviceStroke;
        var _r270_t2 = r270_xn$Capture$2Lrc8.SpiroFns;
        var r270_g2 = _r270_t2.g2;
        var r270_close = _r270_t2.close;
        var r270_widths = _r270_t2.widths;
        var r270_dispiro = _r270_t2.dispiro;
        var _r270_t3 = r270_xn$Capture$2Lrc8.BooleFns;
        var _r270_t4 = r270_xn$Capture$2Lrc8.CommonShapes.resolve();
        var r270_DotAt = _r270_t4.DotAt;
        var _r270_t5 = r270_xn$Capture$2Lrc8['Common-Derivatives'].resolve();
        var _r270_t6 = r270_xn$Capture$2Lrc8['Symbol-Geometric-Shared'].resolve();
        var r270_GeometricDim = _r270_t6.GeometricDim;
        return function () {
            var r276_FMosaicWide, r276_MosaicNameSuffix, r276_MosaicWidth, r276_MosaicWidthScalar, _r276_t3, _r276_t5, _r276_t6, _r276_tag7;
            var r276_WidthKinds = [
                [
                    0,
                    '.NWID',
                    r270_xn$Capture$2Lrc8.Metrics.Width,
                    1
                ],
                [
                    1,
                    '.WWID',
                    r270_xn$Capture$2Lrc8.Metrics.WideWidth0,
                    2
                ]
            ];
            var _r276_t0 = r276_WidthKinds;
            var _r276_t1 = _r276_t0.length;
            var _r276_t2 = 0;
            var _r276_t4 = _r276_t2 < _r276_t1;
            while (_r276_t4) {
                _r276_t3 = _r276_t0[_r276_t2];
                r276_FMosaicWide = _r276_t3[0];
                r276_MosaicNameSuffix = _r276_t3[1];
                r276_MosaicWidth = _r276_t3[2];
                r276_MosaicWidthScalar = _r276_t3[3];
                (function () {
                    var _r279_t0, _r279_tag1;
                    var r279_MosaicDesiredWidth = r270_WideWidth1;
                    var r279_MosaicMiddle = r276_MosaicWidth / 2;
                    var r279_MosaicUnitWidth = r276_MosaicWidth / r276_MosaicWidthScalar;
                    var r279_MangleUnicode = function (r280_unicode, r280__desiredOverride) {
                        var _r280_t0, _r280_t1;
                        return r276_MosaicWidth === (r280__desiredOverride || r279_MosaicDesiredWidth) ? r280_unicode : void 0;
                    };
                    var r279_MangleName = function (r281_name) {
                        var _r281_t0, _r281_t1;
                        return r281_name + r276_MosaicNameSuffix;
                    };
                    return function () {
                        var r283_Geom = r270_GeometricDim(r279_MosaicUnitWidth, r276_MosaicWidth);
                        var r283_pEllipse = 3 / 7;
                        var r283_N = 3;
                        var r283_NN = 4 * r283_N;
                        return r270_xn$createAndSaveGlyphImpl$2Lrc3c(r279_MangleName('atomSymbol'), r279_MangleUnicode(9883), function () {
                            var _r286_t3, _r286_t4, _r286_tag5;
                            var _r286_t2 = this;
                            var r286_currentGlyph = _r286_t2;
                            r286_currentGlyph.setWidth(r283_Geom.Width);
                            var r286_sw = r270_AdviceStroke(12, Math.sqrt(r283_Geom.Scalar));
                            var _r286_t0 = 0;
                            var _r286_t1 = r283_N;
                            var r286_k = _r286_t0;
                            while (r286_k < _r286_t1) {
                                (function () {
                                    var r290_phi, r290_px, r290_py;
                                    var r290_theta = Math.PI * (r286_k / r283_N);
                                    var r290_knots = [];
                                    var _r290_t0 = 0;
                                    var _r290_t1 = r283_NN;
                                    var r290_m = _r290_t0;
                                    while (r290_m < _r290_t1) {
                                        r290_phi = 2 * Math.PI * (r290_m / r283_NN);
                                        r290_px = r283_pEllipse * r283_Geom.Size * Math.cos(r290_phi);
                                        r290_py = r283_Geom.Size * Math.sin(r290_phi);
                                        r290_knots.push(r270_g2(r283_Geom.MidX + Math.cos(r290_theta) * r290_px - Math.sin(r290_theta) * r290_py, r283_Geom.MidY + Math.sin(r290_theta) * r290_px + Math.cos(r290_theta) * r290_py));
                                        r290_m = r290_m + 1;
                                    }
                                    return r286_currentGlyph.include(r270_dispiro(r270_widths.rhs(r286_sw), r290_knots, r270_close()));
                                }());
                                r286_k = r286_k + 1;
                            }
                            r286_currentGlyph.include(r270_DotAt(r283_Geom.MidX, r283_Geom.MidY, r283_Geom.Size * 0.2));
                            return void 0;
                        });
                    }();
                }());
                _r276_t5 = _r276_t2 = _r276_t2 + 1;
                _r276_t4 = _r276_t2 < _r276_t1;
            }
            return _r276_t5;
        }();
    });
    return void 0;
});
