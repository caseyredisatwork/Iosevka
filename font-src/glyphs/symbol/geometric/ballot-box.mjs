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
    r270_xn$Capture_Ext$2Lrc2b['$defineGlyphBlockImpl$'](r270_xn$Capture_Ext$2Lrc2b, 'Symbol-Geometric-Dice', function (r271_xn$Capture$2Lrc8, r271_xn$ExportCapture$2Lrc4b) {
        var _r271_t4, _r271_t5, _r271_t6, _r271_tag7;
        var _r271_t0 = r271_xn$Capture$2Lrc8;
        var r271_xn$createAndSaveGlyphImpl$2Lrc3c = _r271_t0['$createAndSaveGlyphImpl$'];
        var r271_xn$NamedParameterPair$2Lrc9b = _r271_t0['$NamedParameterPair$'];
        var r271_xn$assignUnicodeImpl$2Lrc8b = _r271_t0['$assignUnicodeImpl$'];
        var r271_xn$execState$2Lrc0b = _r271_t0['$execState$'];
        var r271_AS_BASE = _r271_t0.AS_BASE;
        var r271_ALSO_METRICS = _r271_t0.ALSO_METRICS;
        var _r271_t1 = r271_xn$Capture$2Lrc8.Metrics;
        var r271_WideWidth1 = _r271_t1.WideWidth1;
        var r271_AdviceStroke = _r271_t1.AdviceStroke;
        var r271_GeometryStroke = _r271_t1.GeometryStroke;
        var _r271_t2 = r271_xn$Capture$2Lrc8.SpiroFns;
        var r271_corner = _r271_t2.corner;
        var r271_widths = _r271_t2.widths;
        var r271_dispiro = _r271_t2.dispiro;
        var r271_xn$spirooutline$1aao = _r271_t2['spiro-outline'];
        var _r271_t3 = r271_xn$Capture$2Lrc8.BooleFns;
        var r271_union = _r271_t3.union;
        var r271_intersection = _r271_t3.intersection;
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
                    var _r277_t1 = r271_xn$Capture$2Lrc8['Common-Derivatives'].resolve();
                    var r277_xn$referglyph$1aao = _r277_t1['refer-glyph'];
                    var r277_alias = _r277_t1.alias;
                    var _r277_t2 = r271_xn$Capture$2Lrc8['Symbol-Geometric-Shared'].resolve();
                    var r277_GeometricDim = _r277_t2.GeometricDim;
                    var r277_UnicodeWeightGrade = _r277_t2.UnicodeWeightGrade;
                    var r277_GeometricSizes = _r277_t2.GeometricSizes;
                    var r277_Geom = r277_GeometricDim(r277_MosaicUnitWidth, r274_MosaicWidth);
                    r277_alias(r277_MangleName('ballotBox'), r277_MangleUnicode(9744), r277_MangleName('whiteSquare'));
                    var r277_bbGap = Math.max(r277_Geom.Size / 6, r271_AdviceStroke(5, r277_Geom.Scalar));
                    var r277_swMark = Math.min(r271_GeometryStroke, r271_AdviceStroke(5, r277_Geom.Scalar));
                    var r277_bbSize = r277_Geom.Size - r277_bbGap - r277_swMark * 0.75;
                    r271_xn$createAndSaveGlyphImpl$2Lrc3c(r277_MangleName('checkedBallotBox'), r277_MangleUnicode(9745), function () {
                        var _r285_t1;
                        var _r285_t0 = this;
                        var r285_currentGlyph = _r285_t0;
                        var r285_k1 = 0.4;
                        var r285_k2 = 0.425;
                        var r285_k3 = 1;
                        r285_currentGlyph.include(r277_xn$referglyph$1aao(r277_MangleName('whiteSquare')), r271_AS_BASE, r271_ALSO_METRICS);
                        var r285_z1 = r271_corner(r277_Geom.MidX - r277_bbSize, r1_mix(r277_Geom.MidY - r277_bbSize, r277_Geom.MidY + r277_bbSize, r285_k1));
                        var r285_z2 = r271_corner(r1_mix(r277_Geom.MidX - r277_bbSize, r277_Geom.MidX + r277_bbSize, r285_k2), r277_Geom.MidY - r277_bbSize);
                        var r285_z3 = r271_corner(r277_Geom.MidX + r277_bbSize, r1_mix(r277_Geom.MidY - r277_bbSize, r277_Geom.MidY + r277_bbSize, r285_k3));
                        r285_currentGlyph.include(r271_intersection(r271_xn$spirooutline$1aao(r285_z1, r285_z2, r285_z3, r271_corner(r285_z1.x, r285_z3.y)), r271_union(r271_dispiro(r271_widths.lhs(r277_swMark), r285_z1, r285_z2), r271_dispiro(r271_widths.lhs(r277_swMark), r285_z2, r285_z3))));
                        return void 0;
                    });
                    return r271_xn$createAndSaveGlyphImpl$2Lrc3c(r277_MangleName('crossBallotBox'), r277_MangleUnicode(9746), function () {
                        var _r290_t1;
                        var _r290_t0 = this;
                        var r290_currentGlyph = _r290_t0;
                        r290_currentGlyph.include(r277_xn$referglyph$1aao(r277_MangleName('whiteSquare')), r271_AS_BASE, r271_ALSO_METRICS);
                        r290_currentGlyph.include(r271_dispiro(r271_widths.center(r277_swMark), r271_corner(r277_Geom.MidX - r277_bbSize, r277_Geom.MidY - r277_bbSize), r271_corner(r277_Geom.MidX + r277_bbSize, r277_Geom.MidY + r277_bbSize)));
                        r290_currentGlyph.include(r271_dispiro(r271_widths.center(r277_swMark), r271_corner(r277_Geom.MidX + r277_bbSize, r277_Geom.MidY - r277_bbSize), r271_corner(r277_Geom.MidX - r277_bbSize, r277_Geom.MidY + r277_bbSize)));
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
