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
    r270_xn$Capture_Ext$2Lrc2b['$defineGlyphBlockImpl$'](r270_xn$Capture_Ext$2Lrc2b, 'Letter-Greek-Lower-Xi', function (r271_xn$Capture$2Lrc8, r271_xn$ExportCapture$2Lrc4b) {
        var _r271_t6, _r271_t7;
        var _r271_t0 = r271_xn$Capture$2Lrc8;
        var r271_xn$createAndSaveGlyphImpl$2Lrc3c = _r271_t0['$createAndSaveGlyphImpl$'];
        var r271_xn$NamedParameterPair$2Lrc9b = _r271_t0['$NamedParameterPair$'];
        var r271_xn$assignUnicodeImpl$2Lrc8b = _r271_t0['$assignUnicodeImpl$'];
        var r271_xn$execState$2Lrc0b = _r271_t0['$execState$'];
        var r271_MarkSet = _r271_t0.MarkSet;
        var _r271_t1 = r271_xn$Capture$2Lrc8.Metrics;
        var r271_Width = _r271_t1.Width;
        var r271_SB = _r271_t1.SB;
        var r271_Ascender = _r271_t1.Ascender;
        var r271_Descender = _r271_t1.Descender;
        var r271_HVContrast = _r271_t1.HVContrast;
        var r271_Downward = _r271_t1.Downward;
        var r271_Rightward = _r271_t1.Rightward;
        var r271_Leftward = _r271_t1.Leftward;
        var r271_O = _r271_t1.O;
        var r271_OX = _r271_t1.OX;
        var r271_Hook = _r271_t1.Hook;
        var r271_ArchDepth = _r271_t1.ArchDepth;
        var r271_Stroke = _r271_t1.Stroke;
        var r271_CThin = _r271_t1.CThin;
        var r271_CThinB = _r271_t1.CThinB;
        var r271_RightSB = _r271_t1.RightSB;
        var r271_ArchDepthAOf = _r271_t1.ArchDepthAOf;
        var r271_ArchDepthBOf = _r271_t1.ArchDepthBOf;
        var r271_YSmoothMidL = _r271_t1.YSmoothMidL;
        var _r271_t2 = r271_xn$Capture$2Lrc8.SpiroFns;
        var r271_g4 = _r271_t2.g4;
        var r271_flat = _r271_t2.flat;
        var r271_curl = _r271_t2.curl;
        var r271_widths = _r271_t2.widths;
        var r271_heading = _r271_t2.heading;
        var r271_archv = _r271_t2.archv;
        var r271_arcvh = _r271_t2.arcvh;
        var r271_dispiro = _r271_t2.dispiro;
        var _r271_t3 = r271_xn$Capture$2Lrc8.BooleFns;
        var _r271_t4 = r271_xn$Capture$2Lrc8.CommonShapes.resolve();
        var r271_HBar = _r271_t4.HBar;
        var r271_hookstart = _r271_t4.hookstart;
        var _r271_t5 = r271_xn$Capture$2Lrc8['Common-Derivatives'].resolve();
        var r271_xn$selectvariant$7Hrq = _r271_t5['select-variant'];
        var r271_xn$SHAPEROUNDED$1aao = 0;
        var r271_xn$SHAPEFLATTOP$1aao5 = 1;
        var r271_LowerXiShape = function (r274_shape) {
            var _r274_t0, _r274_t1;
            return function () {
                var r276___, _r276_t0, _r276_t1, _r276_t2, _r276_t3, _r276_t4, _r276_t5, _r276_t7;
                var _r276_t6 = this;
                var r276_currentGlyph = _r276_t6;
                var r276_adaTop = r271_ArchDepthAOf(r271_ArchDepth * 0.45, r271_Width);
                var r276_adbTop = r271_ArchDepthBOf(r271_ArchDepth * 0.45, r271_Width);
                var r276_adaBot = r271_ArchDepthAOf(r271_ArchDepth * 0.55, r271_Width);
                var r276_adbBot = r271_ArchDepthBOf(r271_ArchDepth * 0.55, r271_Width);
                var r276_fineTop = r271_Stroke * r271_CThinB;
                var r276_fine = r271_Stroke * r271_CThin;
                var r276_xBarStart = r1_mix(r271_SB, r271_RightSB, (_r276_t0 = r274_shape, _r276_t0 === r271_xn$SHAPEROUNDED$1aao ? 0.625 : _r276_t0 === r271_xn$SHAPEFLATTOP$1aao5 ? 0.75 : void 0));
                var r276_xBarEnd = r1_mix(r271_SB, r271_RightSB, (_r276_t1 = r274_shape, _r276_t1 === r271_xn$SHAPEROUNDED$1aao ? 0.75 : _r276_t1 === r271_xn$SHAPEFLATTOP$1aao5 ? 0.85 : void 0));
                var r276_yBar = r1_mix(0, r271_Ascender, 0.55);
                var r276_xUpperArcLeft = (_r276_t2 = r274_shape, _r276_t2 === r271_xn$SHAPEROUNDED$1aao ? r271_SB + 0 : _r276_t2 === r271_xn$SHAPEFLATTOP$1aao5 ? r1_mix(r271_SB, r271_RightSB, 0.075) + r271_OX : void 0);
                var r276_xLowerArcLeft = (_r276_t3 = r274_shape, _r276_t3 === r271_xn$SHAPEROUNDED$1aao ? r271_SB + r271_OX * 2 : _r276_t3 === r271_xn$SHAPEFLATTOP$1aao5 ? r1_mix(r271_SB, r271_RightSB, 0.025) + r271_OX * 2 : void 0);
                r276_currentGlyph.include((_r276_t4 = r274_shape, _r276_t4 === r271_xn$SHAPEFLATTOP$1aao5 ? r271_HBar.t(r271_SB, r271_RightSB, r271_Ascender) : (r276___ = _r276_t4, function () {
                    var _r279_t1;
                    var _r279_t0 = this;
                    var r279_currentGlyph = _r279_t0;
                    return void 0;
                })));
                r276_currentGlyph.include(r271_dispiro((_r276_t5 = r274_shape, _r276_t5 === r271_xn$SHAPEROUNDED$1aao ? [
                    r271_g4(r271_RightSB + r271_O, r271_Ascender - r271_Hook, r271_widths.lhs()),
                    r271_hookstart(r271_Ascender - r271_O)
                ] : _r276_t5 === r271_xn$SHAPEFLATTOP$1aao5 ? [
                    r271_flat(r276_xBarEnd, r271_Ascender - r271_Stroke + r276_fineTop, r271_widths.lhs(r276_fineTop)),
                    r271_curl(r276_xBarStart, r271_Ascender - r271_Stroke + r276_fineTop, r271_widths.lhs(r276_fineTop)),
                    r271_archv(16)
                ] : void 0), r271_g4(r276_xUpperArcLeft, r271_YSmoothMidL(r271_Ascender, r276_yBar - r271_Stroke, r276_adaTop, r276_adbTop), r271_widths.lhs()), r271_arcvh(16), r271_flat(r276_xBarStart, r276_yBar - r276_fine, r271_widths.lhs.heading(r276_fine, r271_Rightward)), r271_curl(r276_xBarEnd, r276_yBar - r276_fine, r271_widths.lhs.heading(r276_fine, r271_Rightward))));
                r276_currentGlyph.include(r271_dispiro(r271_flat(r276_xBarEnd, r276_yBar - r271_Stroke + r276_fine, r271_widths.lhs.heading(r276_fine, r271_Leftward)), r271_curl(r276_xBarStart, r276_yBar - r271_Stroke + r276_fine, r271_widths.lhs.heading(r276_fine, r271_Leftward)), r271_archv(16), r271_g4(r276_xLowerArcLeft, 0.9 * r271_YSmoothMidL(r276_yBar - r271_Stroke, r271_Stroke, r276_adaBot, r276_adbBot), r271_widths.lhs()), r271_arcvh(16), r271_g4(r1_mix(r276_xLowerArcLeft + r271_HVContrast * r271_Stroke, r271_RightSB - r271_HVContrast * r271_Stroke, 0.6), 0, r271_heading(r271_Rightward)), r271_archv(16), r271_g4.down.mid(r271_RightSB - r271_Stroke * r271_HVContrast, r1_mix(r271_Descender, r271_Stroke, 0.5), r271_heading(r271_Downward)), r271_arcvh(16), r271_flat(r271_RightSB - (r271_Stroke - r1_mix(r271_Descender, r271_Stroke, 0.5)) * 1.1, r271_Descender + r271_Stroke), r271_curl(Math.min(r271_RightSB - (r271_Stroke - r1_mix(r271_Descender, r271_Stroke, 0.5)) * 1.1 - 1, r1_mix(r271_SB, r271_RightSB, 0.5)), r271_Descender + r271_Stroke)));
                return void 0;
            };
        };
        r271_xn$createAndSaveGlyphImpl$2Lrc3c('grek/xi.flatTop', null, function () {
            var _r284_t1;
            var _r284_t0 = this;
            var r284_currentGlyph = _r284_t0;
            r284_currentGlyph.include(r271_MarkSet.bp());
            r284_currentGlyph.include(r271_LowerXiShape(r271_xn$SHAPEFLATTOP$1aao5));
            return void 0;
        });
        r271_xn$createAndSaveGlyphImpl$2Lrc3c('grek/xi.rounded', null, function () {
            var _r289_t1;
            var _r289_t0 = this;
            var r289_currentGlyph = _r289_t0;
            r289_currentGlyph.include(r271_MarkSet.bp());
            r289_currentGlyph.include(r271_LowerXiShape(r271_xn$SHAPEROUNDED$1aao));
            return void 0;
        });
        return r271_xn$selectvariant$7Hrq('grek/xi', 958);
    });
    return void 0;
});
