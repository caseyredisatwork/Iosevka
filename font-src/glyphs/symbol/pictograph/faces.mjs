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
    r269_xn$Capture_Ext$2Lrc2b['$defineGlyphBlockImpl$'](r269_xn$Capture_Ext$2Lrc2b, 'Symbol-Pictograph-Faces', function (r270_xn$Capture$2Lrc8, r270_xn$ExportCapture$2Lrc4b) {
        var _r270_t6, _r270_t7, _r270_t8, _r270_tag9;
        var _r270_t0 = r270_xn$Capture$2Lrc8;
        var r270_xn$createAndSaveGlyphImpl$2Lrc3c = _r270_t0['$createAndSaveGlyphImpl$'];
        var r270_xn$NamedParameterPair$2Lrc9b = _r270_t0['$NamedParameterPair$'];
        var r270_xn$assignUnicodeImpl$2Lrc8b = _r270_t0['$assignUnicodeImpl$'];
        var r270_xn$execState$2Lrc0b = _r270_t0['$execState$'];
        var _r270_t1 = r270_xn$Capture$2Lrc8.Metrics;
        var r270_Width = _r270_t1.Width;
        var r270_SB = _r270_t1.SB;
        var r270_SymbolMid = _r270_t1.SymbolMid;
        var r270_PictTop = _r270_t1.PictTop;
        var r270_PictBot = _r270_t1.PictBot;
        var r270_SmallArchDepth = _r270_t1.SmallArchDepth;
        var r270_Stroke = _r270_t1.Stroke;
        var r270_WideWidth1 = _r270_t1.WideWidth1;
        var r270_DotRadius = _r270_t1.DotRadius;
        var r270_AdviceStroke = _r270_t1.AdviceStroke;
        var r270_ArchDepthAOf = _r270_t1.ArchDepthAOf;
        var r270_ArchDepthBOf = _r270_t1.ArchDepthBOf;
        var _r270_t2 = r270_xn$Capture$2Lrc8.SpiroFns;
        var r270_g4 = _r270_t2.g4;
        var r270_widths = _r270_t2.widths;
        var r270_dispiro = _r270_t2.dispiro;
        var _r270_t3 = r270_xn$Capture$2Lrc8.BooleFns;
        var r270_union = _r270_t3.union;
        var r270_difference = _r270_t3.difference;
        var _r270_t4 = r270_xn$Capture$2Lrc8.CommonShapes.resolve();
        var r270_DotAt = _r270_t4.DotAt;
        var r270_OShape = _r270_t4.OShape;
        var r270_OShapeOutline = _r270_t4.OShapeOutline;
        var r270_FlipAround = _r270_t4.FlipAround;
        var _r270_t5 = r270_xn$Capture$2Lrc8['Common-Derivatives'].resolve();
        return function () {
            var r275_FMosaicWide, r275_MosaicNameSuffix, r275_MosaicWidth, r275_MosaicWidthScalar, _r275_t3, _r275_t5, _r275_t6, _r275_tag7;
            var r275_WidthKinds = [
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
            var _r275_t0 = r275_WidthKinds;
            var _r275_t1 = _r275_t0.length;
            var _r275_t2 = 0;
            var _r275_t4 = _r275_t2 < _r275_t1;
            while (_r275_t4) {
                _r275_t3 = _r275_t0[_r275_t2];
                r275_FMosaicWide = _r275_t3[0];
                r275_MosaicNameSuffix = _r275_t3[1];
                r275_MosaicWidth = _r275_t3[2];
                r275_MosaicWidthScalar = _r275_t3[3];
                (function () {
                    var r278_MosaicDesiredWidth = r270_WideWidth1;
                    var r278_MosaicMiddle = r275_MosaicWidth / 2;
                    var r278_MosaicUnitWidth = r275_MosaicWidth / r275_MosaicWidthScalar;
                    var r278_MangleUnicode = function (r279_unicode, r279__desiredOverride) {
                        var _r279_t0, _r279_t1;
                        return r275_MosaicWidth === (r279__desiredOverride || r278_MosaicDesiredWidth) ? r279_unicode : void 0;
                    };
                    var r278_MangleName = function (r280_name) {
                        var _r280_t0, _r280_t1;
                        return r280_name + r275_MosaicNameSuffix;
                    };
                    var r278_faceTop = r1_mix(r270_SymbolMid, r270_PictTop, 0.75);
                    var r278_faceBot = r1_mix(r270_SymbolMid, r270_PictBot, 0.75);
                    var r278_faceWidth = Math.min(r275_MosaicWidth - r270_SB * 2, r278_faceTop - r278_faceBot);
                    var r278_faceMiddle = r275_MosaicWidth / 2;
                    var r278_faceLeft = r278_faceMiddle - r278_faceWidth / 2;
                    var r278_faceRight = r278_faceMiddle + r278_faceWidth / 2;
                    var r278_faceSma = r270_ArchDepthAOf(r270_SmallArchDepth * r275_MosaicWidthScalar, r275_MosaicWidth);
                    var r278_faceSmb = r270_ArchDepthBOf(r270_SmallArchDepth * r275_MosaicWidthScalar, r275_MosaicWidth);
                    var r278_faceStroke = r270_AdviceStroke(5, (r278_faceWidth + r270_SB * 2) / r270_Width);
                    var r278_faceInnerStroke = r270_AdviceStroke(6 * Math.sqrt(r275_MosaicWidthScalar), (r278_faceWidth + r270_SB * 2) / r270_Width);
                    var r278_eyeRadius = r270_DotRadius / r270_Stroke * r278_faceInnerStroke;
                    var r278_eyeHeight = 0.625;
                    var r278_mouthDepth = 0.025 * Math.sqrt(r275_MosaicWidthScalar);
                    var r278_FaceRing = function (r281_F) {
                        var _r281_t0, _r281_t1;
                        return r281_F(r278_faceTop, r278_faceBot, r278_faceLeft, r278_faceRight, r278_faceStroke, r278_faceSma, r278_faceSmb);
                    };
                    var r278_FaceEyes = function (r282_width) {
                        var _r282_t0, _r282_t1;
                        return r270_union(r270_DotAt(r278_faceMiddle - r282_width / 2 + r278_eyeRadius / 2, r1_mix(r278_faceBot, r278_faceTop, r278_eyeHeight), r278_eyeRadius), r270_DotAt(r278_faceMiddle + r282_width / 2 - r278_eyeRadius / 2, r1_mix(r278_faceBot, r278_faceTop, r278_eyeHeight), r278_eyeRadius));
                    };
                    var r278_SmileFace = function (r283_k, r283_width) {
                        var _r283_t0, _r283_t1;
                        return r270_union(r278_FaceEyes(r283_width), r270_dispiro(r270_widths.center(r278_faceInnerStroke), r270_g4(r278_faceMiddle - r283_width / 2, r1_mix(r278_faceBot, r278_faceTop, 1 - r278_eyeHeight + r283_k * r278_mouthDepth)), r270_g4(r278_faceMiddle, r1_mix(r278_faceBot, r278_faceTop, 1 - r278_eyeHeight - r283_k * r278_mouthDepth)), r270_g4(r278_faceMiddle + r283_width / 2, r1_mix(r278_faceBot, r278_faceTop, 1 - r278_eyeHeight + r283_k * r278_mouthDepth))));
                    };
                    r270_xn$createAndSaveGlyphImpl$2Lrc3c(r278_MangleName('whiteSadFace'), r278_MangleUnicode(9785), function () {
                        var _r286_t1;
                        var _r286_t0 = this;
                        var r286_currentGlyph = _r286_t0;
                        r286_currentGlyph.setWidth(r275_MosaicWidth);
                        r286_currentGlyph.include(r270_union(r278_FaceRing(r270_OShape), r278_SmileFace(-1, 0.6 * (r278_faceWidth - r278_faceStroke * 2))));
                        return void 0;
                    });
                    r270_xn$createAndSaveGlyphImpl$2Lrc3c(r278_MangleName('whiteSmileFace'), r278_MangleUnicode(9786), function () {
                        var _r291_t1;
                        var _r291_t0 = this;
                        var r291_currentGlyph = _r291_t0;
                        r291_currentGlyph.setWidth(r275_MosaicWidth);
                        r291_currentGlyph.include(r270_union(r278_FaceRing(r270_OShape), r278_SmileFace(1, 0.6 * (r278_faceWidth - r278_faceStroke * 2))));
                        return void 0;
                    });
                    r270_xn$createAndSaveGlyphImpl$2Lrc3c(r278_MangleName('blackSmileFace'), r278_MangleUnicode(9787), function () {
                        var _r296_t1;
                        var _r296_t0 = this;
                        var r296_currentGlyph = _r296_t0;
                        r296_currentGlyph.setWidth(r275_MosaicWidth);
                        r296_currentGlyph.include(r270_difference(r278_FaceRing(r270_OShapeOutline), r278_SmileFace(1, 0.6 * (r278_faceWidth - r278_faceStroke * 2))));
                        return void 0;
                    });
                    r270_xn$createAndSaveGlyphImpl$2Lrc3c(r278_MangleName('neutralFace'), r278_MangleUnicode(128528), function () {
                        var _r301_t1;
                        var _r301_t0 = this;
                        var r301_currentGlyph = _r301_t0;
                        r301_currentGlyph.setWidth(r275_MosaicWidth);
                        r301_currentGlyph.include(r270_union(r278_FaceRing(r270_OShape), r278_SmileFace(0, 0.6 * (r278_faceWidth - r278_faceStroke * 2))));
                        return void 0;
                    });
                    r270_xn$createAndSaveGlyphImpl$2Lrc3c(r278_MangleName('mouthlessFace'), r278_MangleUnicode(128566), function () {
                        var _r306_t1;
                        var _r306_t0 = this;
                        var r306_currentGlyph = _r306_t0;
                        r306_currentGlyph.setWidth(r275_MosaicWidth);
                        r306_currentGlyph.include(r270_union(r278_FaceRing(r270_OShape), r278_FaceEyes(0.6 * (r278_faceWidth - r278_faceStroke * 2))));
                        return void 0;
                    });
                    r270_xn$createAndSaveGlyphImpl$2Lrc3c(r278_MangleName('slightFrownFace'), r278_MangleUnicode(128577), function () {
                        var _r311_t1;
                        var _r311_t0 = this;
                        var r311_currentGlyph = _r311_t0;
                        r311_currentGlyph.setWidth(r275_MosaicWidth);
                        r311_currentGlyph.include(r270_union(r278_FaceRing(r270_OShape), r278_SmileFace(-0.5, 0.6 * (r278_faceWidth - r278_faceStroke * 2))));
                        return void 0;
                    });
                    r270_xn$createAndSaveGlyphImpl$2Lrc3c(r278_MangleName('slightSmileFace'), r278_MangleUnicode(128578), function () {
                        var _r316_t1;
                        var _r316_t0 = this;
                        var r316_currentGlyph = _r316_t0;
                        r316_currentGlyph.setWidth(r275_MosaicWidth);
                        r316_currentGlyph.include(r270_union(r278_FaceRing(r270_OShape), r278_SmileFace(0.5, 0.6 * (r278_faceWidth - r278_faceStroke * 2))));
                        return void 0;
                    });
                    return r270_xn$createAndSaveGlyphImpl$2Lrc3c(r278_MangleName('upsideDownFace'), r278_MangleUnicode(128579), function () {
                        var _r321_t1;
                        var _r321_t0 = this;
                        var r321_currentGlyph = _r321_t0;
                        r321_currentGlyph.setWidth(r275_MosaicWidth);
                        r321_currentGlyph.include(r270_union(r278_FaceRing(r270_OShape), r278_SmileFace(1, 0.6 * (r278_faceWidth - r278_faceStroke * 2))));
                        r321_currentGlyph.include(r270_FlipAround(r275_MosaicWidth / 2, r1_mix(r278_faceTop, r278_faceBot, 0.5)));
                        return void 0;
                    });
                }());
                _r275_t5 = _r275_t2 = _r275_t2 + 1;
                _r275_t4 = _r275_t2 < _r275_t1;
            }
            return _r275_t5;
        }();
    });
    return void 0;
});
