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
    r268_xn$Capture_Ext$2Lrc2b['$defineGlyphBlockImpl$'](r268_xn$Capture_Ext$2Lrc2b, 'Mark-Adjustment', function (r269_xn$Capture$2Lrc8, r269_xn$ExportCapture$2Lrc4b) {
        var r269_ExtendAboveBaseAnchors, _r269_t4, _r269_t5;
        var _r269_t0 = r269_xn$Capture$2Lrc8;
        var r269_xn$createAndSaveGlyphImpl$2Lrc3c = _r269_t0['$createAndSaveGlyphImpl$'];
        var r269_xn$NamedParameterPair$2Lrc9b = _r269_t0['$NamedParameterPair$'];
        var r269_xn$assignUnicodeImpl$2Lrc8b = _r269_t0['$assignUnicodeImpl$'];
        var r269_xn$execState$2Lrc0b = _r269_t0['$execState$'];
        var _r269_t1 = r269_xn$Capture$2Lrc8.Metrics;
        var _r269_t2 = r269_xn$Capture$2Lrc8.SpiroFns;
        var _r269_t3 = r269_xn$Capture$2Lrc8.BooleFns;
        r269_xn$ExportCapture$2Lrc4b(function () {
            var _r271_t0, _r271_t1;
            return { 'ExtendBelowBaseAnchors': r269_ExtendBelowBaseAnchors };
        });
        var r269_ExtendBelowBaseAnchors = function (r272_y) {
            var _r272_t0, _r272_t1;
            return function () {
                var r274_a, _r274_t1;
                var _r274_t0 = this;
                var r274_currentGlyph = _r274_t0;
                if (r274_currentGlyph.baseAnchors.below) {
                    r274_a = r274_currentGlyph.gizmo.unapply(r274_currentGlyph.baseAnchors.below);
                    if (r274_a.y > r272_y)
                        r274_currentGlyph.setBaseAnchor('below', r274_a.x, r272_y);
                }
                return void 0;
            };
        };
        r269_xn$ExportCapture$2Lrc4b(function () {
            var _r277_t0, _r277_t1;
            return { 'ExtendAboveBaseAnchors': r269_ExtendAboveBaseAnchors };
        });
        return r269_ExtendAboveBaseAnchors = function (r278_y) {
            var _r278_t0, _r278_t1;
            return function () {
                var r280_a, _r280_t1;
                var _r280_t0 = this;
                var r280_currentGlyph = _r280_t0;
                if (r280_currentGlyph.baseAnchors.above) {
                    r280_a = r280_currentGlyph.gizmo.unapply(r280_currentGlyph.baseAnchors.above);
                    if (r280_a.y < r278_y)
                        r280_currentGlyph.setBaseAnchor('above', r280_a.x, r278_y);
                }
                return void 0;
            };
        };
    });
    return void 0;
});
