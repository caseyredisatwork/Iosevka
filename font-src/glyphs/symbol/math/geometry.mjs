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
    r269_xn$Capture_Ext$2Lrc2b['$defineGlyphBlockImpl$'](r269_xn$Capture_Ext$2Lrc2b, 'Symbol-Math-Geometry', function (r270_xn$Capture$2Lrc8, r270_xn$ExportCapture$2Lrc4b) {
        var _r270_t6, _r270_t7;
        var _r270_t0 = r270_xn$Capture$2Lrc8;
        var r270_xn$createAndSaveGlyphImpl$2Lrc3c = _r270_t0['$createAndSaveGlyphImpl$'];
        var r270_xn$NamedParameterPair$2Lrc9b = _r270_t0['$NamedParameterPair$'];
        var r270_xn$assignUnicodeImpl$2Lrc8b = _r270_t0['$assignUnicodeImpl$'];
        var r270_xn$execState$2Lrc0b = _r270_t0['$execState$'];
        var r270_AS_BASE = _r270_t0.AS_BASE;
        var r270_ALSO_METRICS = _r270_t0.ALSO_METRICS;
        var _r270_t1 = r270_xn$Capture$2Lrc8.Metrics;
        var r270_Width = _r270_t1.Width;
        var r270_SB = _r270_t1.SB;
        var r270_SymbolMid = _r270_t1.SymbolMid;
        var r270_Middle = _r270_t1.Middle;
        var r270_GeometryStroke = _r270_t1.GeometryStroke;
        var _r270_t2 = r270_xn$Capture$2Lrc8.SpiroFns;
        var r270_g2 = _r270_t2.g2;
        var r270_corner = _r270_t2.corner;
        var r270_flat = _r270_t2.flat;
        var r270_curl = _r270_t2.curl;
        var r270_widths = _r270_t2.widths;
        var r270_dispiro = _r270_t2.dispiro;
        var r270_xn$spirooutline$1aao = _r270_t2['spiro-outline'];
        var _r270_t3 = r270_xn$Capture$2Lrc8.BooleFns;
        var r270_union = _r270_t3.union;
        var r270_intersection = _r270_t3.intersection;
        var _r270_t4 = r270_xn$Capture$2Lrc8.CommonShapes.resolve();
        var r270_RingStrokeAt = _r270_t4.RingStrokeAt;
        var _r270_t5 = r270_xn$Capture$2Lrc8['Common-Derivatives'].resolve();
        var r270_xn$referglyph$1aao = _r270_t5['refer-glyph'];
        var r270_turned = _r270_t5.turned;
        var r270_kBox = 2 / 3;
        var r270_leftBox = r270_SB * r270_kBox;
        var r270_rightBox = r270_Width - r270_SB * r270_kBox;
        var r270_radiusBox = (r270_rightBox - r270_leftBox) / 2;
        var r270_topBox = r270_SymbolMid + r270_radiusBox;
        var r270_bottomBox = r270_SymbolMid - r270_radiusBox;
        r270_xn$createAndSaveGlyphImpl$2Lrc3c('mathRightTriangle', 8895, function () {
            var _r275_t1;
            var _r275_t0 = this;
            var r275_currentGlyph = _r275_t0;
            r275_currentGlyph.include(r270_intersection(r270_xn$spirooutline$1aao(r270_corner(r270_leftBox, r270_bottomBox), r270_corner(r270_rightBox, r270_bottomBox), r270_corner(r270_rightBox, r270_topBox)), r270_union(r270_dispiro(r270_widths.lhs(r270_GeometryStroke), r270_flat(r270_leftBox, r270_bottomBox), r270_curl(r270_rightBox, r270_bottomBox)), r270_dispiro(r270_widths.lhs(r270_GeometryStroke), r270_flat(r270_rightBox, r270_bottomBox), r270_curl(r270_rightBox, r270_topBox)), r270_dispiro(r270_widths.lhs(r270_GeometryStroke), r270_flat(r270_rightBox, r270_topBox), r270_curl(r270_leftBox, r270_bottomBox)))));
            return void 0;
        });
        r270_xn$createAndSaveGlyphImpl$2Lrc3c('angle', 8736, function () {
            var _r279_t1;
            var _r279_t0 = this;
            var r279_currentGlyph = _r279_t0;
            r279_currentGlyph.include(r270_intersection(r270_xn$spirooutline$1aao(r270_corner(r270_leftBox, r270_bottomBox), r270_corner(r270_rightBox, r270_bottomBox), r270_corner(r270_rightBox, r270_topBox)), r270_union(r270_dispiro(r270_widths.lhs(r270_GeometryStroke), r270_flat(r270_leftBox, r270_bottomBox), r270_curl(r270_rightBox, r270_bottomBox)), r270_dispiro(r270_widths.lhs(r270_GeometryStroke), r270_flat(r270_rightBox, r270_topBox), r270_curl(r270_leftBox, r270_bottomBox)))));
            return void 0;
        });
        r270_turned('turnAngle', 10658, 'angle', r270_Middle, r270_SymbolMid);
        r270_xn$createAndSaveGlyphImpl$2Lrc3c('revAngle', 10659, function () {
            var _r283_t1;
            var _r283_t0 = this;
            var r283_currentGlyph = _r283_t0;
            r283_currentGlyph.include(r270_intersection(r270_xn$spirooutline$1aao(r270_corner(r270_leftBox, r270_topBox), r270_corner(r270_leftBox, r270_bottomBox), r270_corner(r270_rightBox, r270_bottomBox)), r270_union(r270_dispiro(r270_widths.lhs(r270_GeometryStroke), r270_flat(r270_leftBox, r270_bottomBox), r270_curl(r270_rightBox, r270_bottomBox)), r270_dispiro(r270_widths.rhs(r270_GeometryStroke), r270_flat(r270_leftBox, r270_topBox), r270_curl(r270_rightBox, r270_bottomBox)))));
            return void 0;
        });
        r270_xn$createAndSaveGlyphImpl$2Lrc3c('measuredAngle', 8737, function () {
            var _r287_t1;
            var _r287_t0 = this;
            var r287_currentGlyph = _r287_t0;
            r287_currentGlyph.include(r270_xn$referglyph$1aao('angle'), r270_AS_BASE, r270_ALSO_METRICS);
            r287_currentGlyph.include(r270_intersection(r270_xn$spirooutline$1aao(r270_corner(r270_leftBox, r270_bottomBox - Math.tan(15 / 180 * Math.PI) * r270_radiusBox), r270_corner(r270_rightBox, r270_bottomBox - Math.tan(15 / 180 * Math.PI) * r270_radiusBox), r270_corner(r270_rightBox, r270_bottomBox + 2 * Math.tan(60 / 180 * Math.PI) * r270_radiusBox), r270_corner(r270_leftBox, r270_bottomBox)), r270_RingStrokeAt(r270_leftBox, r270_bottomBox, 1.2 * r270_radiusBox + r270_GeometryStroke, r270_GeometryStroke)));
            return void 0;
        });
        r270_xn$createAndSaveGlyphImpl$2Lrc3c('sphericalAngle', 8738, function () {
            var _r292_t1;
            var _r292_t0 = this;
            var r292_currentGlyph = _r292_t0;
            r292_currentGlyph.include(r270_intersection(r270_xn$spirooutline$1aao(r270_corner(r270_leftBox, r270_SymbolMid), r270_corner(r270_rightBox, r270_bottomBox), r270_corner(r270_rightBox, r270_topBox)), r270_union(r270_dispiro(r270_widths.lhs(r270_GeometryStroke), r270_flat(r270_leftBox, r270_SymbolMid), r270_curl(r270_rightBox, r270_bottomBox)), r270_dispiro(r270_widths.lhs(r270_GeometryStroke), r270_flat(r270_rightBox, r270_topBox), r270_curl(r270_leftBox, r270_SymbolMid)))));
            r292_currentGlyph.include(r270_intersection(r270_xn$spirooutline$1aao(r270_corner(r270_leftBox, r270_SymbolMid), r270_corner(r270_rightBox, r270_SymbolMid - 2 * Math.tan(45 / 180 * Math.PI) * r270_radiusBox), r270_corner(r270_rightBox, r270_SymbolMid + 2 * Math.tan(45 / 180 * Math.PI) * r270_radiusBox)), r270_RingStrokeAt(r270_leftBox, r270_SymbolMid, 1.2 * r270_radiusBox + r270_GeometryStroke, r270_GeometryStroke)));
            return void 0;
        });
        r270_xn$createAndSaveGlyphImpl$2Lrc3c('rightAngle', 8735, function () {
            var _r297_t1;
            var _r297_t0 = this;
            var r297_currentGlyph = _r297_t0;
            r297_currentGlyph.include(r270_intersection(r270_xn$spirooutline$1aao(r270_corner(r270_leftBox, r270_bottomBox), r270_corner(r270_rightBox, r270_bottomBox), r270_corner(r270_rightBox, r270_topBox), r270_corner(r270_leftBox, r270_topBox)), r270_union(r270_dispiro(r270_widths.lhs(r270_GeometryStroke), r270_flat(r270_leftBox, r270_bottomBox), r270_curl(r270_rightBox, r270_bottomBox)), r270_dispiro(r270_widths.lhs(r270_GeometryStroke), r270_flat(r270_leftBox, r270_topBox), r270_curl(r270_leftBox, r270_bottomBox)))));
            return void 0;
        });
        r270_xn$createAndSaveGlyphImpl$2Lrc3c('rightAngleWithArc', 8894, function () {
            var _r301_t1;
            var _r301_t0 = this;
            var r301_currentGlyph = _r301_t0;
            r301_currentGlyph.include(r270_xn$referglyph$1aao('rightAngle'), r270_AS_BASE, r270_ALSO_METRICS);
            r301_currentGlyph.include(r270_intersection(r270_xn$spirooutline$1aao(r270_corner(r270_leftBox, r270_bottomBox), r270_corner(r270_rightBox, r270_bottomBox), r270_corner(r270_rightBox, r270_topBox), r270_corner(r270_leftBox, r270_topBox)), r270_RingStrokeAt(r270_leftBox, r270_bottomBox, 1.2 * r270_radiusBox + r270_GeometryStroke, r270_GeometryStroke)));
            return void 0;
        });
        r270_xn$createAndSaveGlyphImpl$2Lrc3c('revRightAngle', 11262, function () {
            var _r306_t1;
            var _r306_t0 = this;
            var r306_currentGlyph = _r306_t0;
            r306_currentGlyph.include(r270_intersection(r270_xn$spirooutline$1aao(r270_corner(r270_leftBox, r270_bottomBox), r270_corner(r270_rightBox, r270_bottomBox), r270_corner(r270_rightBox, r270_topBox), r270_corner(r270_leftBox, r270_topBox)), r270_union(r270_dispiro(r270_widths.lhs(r270_GeometryStroke), r270_flat(r270_leftBox, r270_bottomBox), r270_curl(r270_rightBox, r270_bottomBox)), r270_dispiro(r270_widths.rhs(r270_GeometryStroke), r270_flat(r270_rightBox, r270_topBox), r270_curl(r270_rightBox, r270_bottomBox)))));
            return void 0;
        });
        return r270_xn$createAndSaveGlyphImpl$2Lrc3c('sineWave', 8767, function () {
            var _r310_t3;
            var _r310_t2 = this;
            var r310_currentGlyph = _r310_t2;
            var r310_N = 64;
            var r310_knots = [];
            var r310_Wave = function (r311_x) {
                var _r311_t0, _r311_t1;
                return Math.sin(r311_x) + 0.05 * Math.sin(3 * r311_x);
            };
            var _r310_t0 = 0;
            var _r310_t1 = r310_N;
            var r310_t = _r310_t0;
            while (r310_t <= _r310_t1) {
                r310_knots.push(r270_g2(r1_mix(r270_leftBox, r270_rightBox, r310_t / r310_N), r1_mix(r270_bottomBox, r270_topBox, 0.5 + 0.5 * r310_Wave(2 * Math.PI * r310_t / r310_N))));
                r310_t = r310_t + 1;
            }
            r310_currentGlyph.include(r270_dispiro(r270_widths.center(r270_GeometryStroke), r310_knots));
            return void 0;
        });
    });
    return void 0;
});
