'use strict';
var _s0_t0;
export {
    _s0_t0 as apply
};
var r1_apply, _r1_t0, _r1_t1, _r1_t2, _r1_t3, _r1_t4, _r1_t5, _r1_t6, _r1_t7;
var r1_xn$GlyphBlocks$2Lrc2b = [];
_s0_t0 = r1_apply = function () {
    var r264_block, _r264_t4, _r264_t6;
    var _r264_t3 = this;
    var _r264_t0 = r1_xn$GlyphBlocks$2Lrc2b;
    var _r264_t1 = _r264_t0.length;
    var _r264_t2 = 0;
    var _r264_t5 = _r264_t2 < _r264_t1;
    while (_r264_t5) {
        _r264_t6 = (r264_block = _r264_t0[_r264_t2], r264_block(_r264_t3), _r264_t2 = _r264_t2 + 1);
        _r264_t5 = _r264_t2 < _r264_t1;
    }
    return _r264_t6;
};
r1_xn$GlyphBlocks$2Lrc2b.push(function (r268_xn$Capture_Ext$2Lrc2b) {
    var _r268_t0, _r268_t1;
    r268_xn$Capture_Ext$2Lrc2b['$defineGlyphBlockImpl$'](r268_xn$Capture_Ext$2Lrc2b, 'Symbol-Geometric-Checking-Marks', function (r269_xn$Capture$2Lrc8, r269_xn$ExportCapture$2Lrc4b) {
        var _r269_t6, _r269_t7, _r269_t8, _r269_tag9;
        var _r269_t0 = r269_xn$Capture$2Lrc8;
        var r269_xn$createAndSaveGlyphImpl$2Lrc3c = _r269_t0['$createAndSaveGlyphImpl$'];
        var r269_xn$NamedParameterPair$2Lrc9b = _r269_t0['$NamedParameterPair$'];
        var r269_xn$assignUnicodeImpl$2Lrc8b = _r269_t0['$assignUnicodeImpl$'];
        var r269_xn$execState$2Lrc0b = _r269_t0['$execState$'];
        var _r269_t1 = r269_xn$Capture$2Lrc8.Metrics;
        var r269_Width = _r269_t1.Width;
        var r269_SB = _r269_t1.SB;
        var r269_SymbolMid = _r269_t1.SymbolMid;
        var r269_WideWidth1 = _r269_t1.WideWidth1;
        var r269_GeometryStroke = _r269_t1.GeometryStroke;
        var _r269_t2 = r269_xn$Capture$2Lrc8.SpiroFns;
        var _r269_t3 = r269_xn$Capture$2Lrc8.BooleFns;
        var r269_union = _r269_t3.union;
        var r269_intersection = _r269_t3.intersection;
        var _r269_t4 = r269_xn$Capture$2Lrc8.CommonShapes.resolve();
        var r269_Rect = _r269_t4.Rect;
        var r269_HBar = _r269_t4.HBar;
        var r269_VBar = _r269_t4.VBar;
        var r269_NameUni = _r269_t4.NameUni;
        var _r269_t5 = r269_xn$Capture$2Lrc8['Common-Derivatives'].resolve();
        return function () {
            var r274_FMosaicWide, r274_MosaicNameSuffix, r274_MosaicWidth, r274_MosaicWidthScalar, _r274_t3, _r274_t5, _r274_t6, _r274_tag7;
            var r274_WidthKinds = [
                [
                    0,
                    '.NWID',
                    r269_xn$Capture$2Lrc8.Metrics.Width,
                    1
                ],
                [
                    1,
                    '.WWID',
                    r269_xn$Capture$2Lrc8.Metrics.WideWidth0,
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
                    var _r277_t0, _r277_tag1;
                    var r277_MosaicDesiredWidth = r269_WideWidth1;
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
                    return function () {
                        var r281_unicode, r281_t, r281_b, r281_l, r281_r, _r281_t3, _r281_t5;
                        var r281_ptMaxWidth = r274_MosaicWidth - r269_SB;
                        var r281_ptHeight0 = 1.5 * (r269_Width - r269_SB / 2) * Math.pow(r274_MosaicWidth / r277_MosaicUnitWidth, 1 / 4);
                        var r281_ptHeight = r281_ptHeight0 * r281_ptHeight0 / Math.hypot(r281_ptHeight0, Math.min(r281_ptHeight0, r281_ptMaxWidth));
                        var r281_ptWidth = Math.min(r281_ptMaxWidth, r281_ptHeight);
                        var r281_ptMidX = r274_MosaicWidth / 2;
                        var r281_ptSB = (r274_MosaicWidth - r281_ptWidth) / 2;
                        var r281_ptRSB = r274_MosaicWidth - r281_ptSB;
                        var r281_ptTopFar = r269_SymbolMid + r281_ptHeight * 2;
                        var r281_ptTop = r269_SymbolMid + r281_ptHeight / 2;
                        var r281_ptBot = r269_SymbolMid - r281_ptHeight / 2;
                        var r281_ptBotFar = r269_SymbolMid - r281_ptHeight * 2;
                        var r281_CornerShapeConfig = [
                            [
                                8988,
                                r281_ptTopFar,
                                r269_SymbolMid,
                                -r274_MosaicWidth,
                                r274_MosaicWidth / 2
                            ],
                            [
                                8989,
                                r281_ptTopFar,
                                r269_SymbolMid,
                                r274_MosaicWidth / 2,
                                2 * r274_MosaicWidth
                            ],
                            [
                                8990,
                                r269_SymbolMid,
                                r281_ptBotFar,
                                -r274_MosaicWidth,
                                r274_MosaicWidth / 2
                            ],
                            [
                                8991,
                                r269_SymbolMid,
                                r281_ptBotFar,
                                r274_MosaicWidth / 2,
                                2 * r274_MosaicWidth
                            ]
                        ];
                        var _r281_t0 = r281_CornerShapeConfig;
                        var _r281_t1 = _r281_t0.length;
                        var _r281_t2 = 0;
                        var _r281_t4 = _r281_t2 < _r281_t1;
                        while (_r281_t4) {
                            _r281_t5 = (_r281_t3 = _r281_t0[_r281_t2], r281_unicode = _r281_t3[0], r281_t = _r281_t3[1], r281_b = _r281_t3[2], r281_l = _r281_t3[3], r281_r = _r281_t3[4], r269_xn$createAndSaveGlyphImpl$2Lrc3c(r277_MangleName(r269_NameUni(r281_unicode)), r277_MangleUnicode(r281_unicode), function () {
                                var _r285_t1;
                                var _r285_t0 = this;
                                var r285_currentGlyph = _r285_t0;
                                r285_currentGlyph.setWidth(r274_MosaicWidth);
                                r285_currentGlyph.include(r269_intersection(r269_Rect(r281_t, r281_b, r281_l, r281_r), r269_union(r269_VBar.l(r281_ptSB, r281_ptBot, r281_ptTop, r269_GeometryStroke), r269_VBar.r(r281_ptRSB, r281_ptBot, r281_ptTop, r269_GeometryStroke), r269_HBar.t(r281_ptSB, r281_ptRSB, r281_ptTop, r269_GeometryStroke), r269_HBar.b(r281_ptSB, r281_ptRSB, r281_ptBot, r269_GeometryStroke))));
                                return void 0;
                            }), _r281_t2 = _r281_t2 + 1);
                            _r281_t4 = _r281_t2 < _r281_t1;
                        }
                        return _r281_t5;
                    }();
                }());
                _r274_t5 = _r274_t2 = _r274_t2 + 1;
                _r274_t4 = _r274_t2 < _r274_t1;
            }
            return _r274_t5;
        }();
    });
    return void 0;
});
