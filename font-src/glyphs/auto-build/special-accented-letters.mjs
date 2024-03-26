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
    r268_xn$Capture_Ext$2Lrc2b['$defineGlyphBlockImpl$'](r268_xn$Capture_Ext$2Lrc2b, 'Autobuild-DCaron', function (r269_xn$Capture$2Lrc8, r269_xn$ExportCapture$2Lrc4b) {
        var _r269_t8, _r269_t9;
        var _r269_t0 = r269_xn$Capture$2Lrc8;
        var r269_xn$createAndSaveGlyphImpl$2Lrc3c = _r269_t0['$createAndSaveGlyphImpl$'];
        var r269_xn$NamedParameterPair$2Lrc9b = _r269_t0['$NamedParameterPair$'];
        var r269_xn$assignUnicodeImpl$2Lrc8b = _r269_t0['$assignUnicodeImpl$'];
        var r269_xn$execState$2Lrc0b = _r269_t0['$execState$'];
        var r269_MarkSet = _r269_t0.MarkSet;
        var _r269_t1 = r269_xn$Capture$2Lrc8.Metrics;
        var r269_Width = _r269_t1.Width;
        var r269_SB = _r269_t1.SB;
        var r269_Translate = _r269_t1.Translate;
        var r269_RightSB = _r269_t1.RightSB;
        var r269_DotRadius = _r269_t1.DotRadius;
        var _r269_t2 = r269_xn$Capture$2Lrc8.SpiroFns;
        var _r269_t3 = r269_xn$Capture$2Lrc8.BooleFns;
        var _r269_t4 = r269_xn$Capture$2Lrc8.CommonShapes.resolve();
        var r269_WithDotVariants = _r269_t4.WithDotVariants;
        var _r269_t5 = r269_xn$Capture$2Lrc8['Common-Derivatives'].resolve();
        var r269_xn$referglyph$1aao = _r269_t5['refer-glyph'];
        var r269_xn$derivecomposites$7Hrq = _r269_t5['derive-composites'];
        var r269_xn$derivemultipartglyphs$7Hrq65 = _r269_t5['derive-multi-part-glyphs'];
        var _r269_t6 = r269_xn$Capture$2Lrc8['Recursive-Build'].resolve();
        var r269_Widen = _r269_t6.Widen;
        var _r269_t7 = r269_xn$Capture$2Lrc8['Mark-Shared-Metrics'].resolve();
        var r269_markExtend = _r269_t7.markExtend;
        r269_xn$Capture$2Lrc8['Letter-Latin-Lower-D'].resolve();
        r269_xn$derivemultipartglyphs$7Hrq65('dcaron', 271, [
            'd',
            'commaAbove'
        ], function (r275_srcs, r275_gr) {
            var _r275_t0, _r275_t1;
            return function () {
                var _r277_t2;
                var _r277_t1 = this;
                var r277_currentGlyph = _r277_t1;
                var _r277_t0 = r275_srcs;
                var r277_base = _r277_t0[0];
                var r277_mark = _r277_t0[1];
                r277_currentGlyph.include(r269_xn$referglyph$1aao(r277_mark));
                r277_currentGlyph.include(r269_Translate(r269_Width + (r269_RightSB - r269_SB) / 2 + r269_markExtend / 2, 0));
                var r277_f = r269_Widen([r277_base], 0.95, 1);
                r277_currentGlyph.include(r277_f.queryByName(r277_base));
                r277_currentGlyph.include(r269_MarkSet.b());
                return void 0;
            };
        });
        r269_WithDotVariants('LDotDot', null, function (r282_DrawAt, r282_kdr, r282_overshoot) {
            var _r282_t0, _r282_t1;
            return function () {
                var _r284_t1;
                var _r284_t0 = this;
                var r284_currentGlyph = _r284_t0;
                r284_currentGlyph.setWidth(0);
                r284_currentGlyph.include(r282_DrawAt(0, 0, r269_DotRadius * r282_kdr - r282_overshoot));
                r284_currentGlyph.setMarkAnchor('cvDecompose', 0, 0);
                return void 0;
            };
        });
        r269_xn$derivecomposites$7Hrq('LDot', 319, 'L', 'LDotDot');
        return r269_xn$derivecomposites$7Hrq('lDot', 320, 'lDotBase', 'LDotDot');
    });
    return void 0;
});
