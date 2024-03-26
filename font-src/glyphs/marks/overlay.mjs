'use strict';
import * as _s0_t0 from 'typo-geom';
import * as _s0_t1 from '../../support/utils.mjs';
import * as _s0_t2 from '../../meta/aesthetics.mjs';
import * as _s0_t3 from '../../support/gr.mjs';
import * as _s0_t4 from '../../support/geometry/box.mjs';
var _s0_t5;
export {
    _s0_t5 as apply
};
var r1_apply, _r1_t0, _r1_t1, _r1_t2, _r1_t3, _r1_t4, _r1_t5, _r1_t6, _r1_t7;
var _r1_t8 = _s0_t0;
var r1_Arcs = _r1_t8.Arcs;
var r1_Quadify = _r1_t8.Quadify;
var r1_ShapeConv = _r1_t8.ShapeConv;
var _r1_t9 = _s0_t1;
var r1_mix = _r1_t9.mix;
var r1_linreg = _r1_t9.linreg;
var r1_clamp = _r1_t9.clamp;
var r1_fallback = _r1_t9.fallback;
var _r1_t10 = _s0_t2;
var r1_DesignParameters = _r1_t10.DesignParameters;
var _r1_t11 = _s0_t3;
var r1_TieMark = _r1_t11.TieMark;
var r1_TieGlyph = _r1_t11.TieGlyph;
var _r1_t12 = _s0_t4;
var r1_Box = _r1_t12.Box;
var r1_xn$GlyphBlocks$2Lrc2b = [];
_s0_t5 = r1_apply = function () {
    var r269_block, _r269_t4, _r269_t6;
    var _r269_t3 = this;
    var _r269_t0 = r1_xn$GlyphBlocks$2Lrc2b;
    var _r269_t1 = _r269_t0.length;
    var _r269_t2 = 0;
    var _r269_t5 = _r269_t2 < _r269_t1;
    while (_r269_t5) {
        _r269_t6 = (r269_block = _r269_t0[_r269_t2], r269_block(_r269_t3), _r269_t2 = _r269_t2 + 1);
        _r269_t5 = _r269_t2 < _r269_t1;
    }
    return _r269_t6;
};
r1_xn$GlyphBlocks$2Lrc2b.push(function (r273_xn$Capture_Ext$2Lrc2b) {
    var _r273_t0, _r273_t1;
    r273_xn$Capture_Ext$2Lrc2b['$defineGlyphBlockImpl$'](r273_xn$Capture_Ext$2Lrc2b, 'Mark-Overlay', function (r274_xn$Capture$2Lrc8, r274_xn$ExportCapture$2Lrc4b) {
        var r274_suffix, r274_DrawAt, r274_kdr, _r274_t13, _r274_t14, _r274_t15, _r274_t16, _r274_tag17;
        var _r274_t0 = r274_xn$Capture$2Lrc8;
        var r274_xn$createAndSaveGlyphImpl$2Lrc3c = _r274_t0['$createAndSaveGlyphImpl$'];
        var r274_xn$NamedParameterPair$2Lrc9b = _r274_t0['$NamedParameterPair$'];
        var r274_xn$assignUnicodeImpl$2Lrc8b = _r274_t0['$assignUnicodeImpl$'];
        var r274_xn$execState$2Lrc0b = _r274_t0['$execState$'];
        var r274_para = _r274_t0.para;
        var r274_DivFrame = _r274_t0.DivFrame;
        var _r274_t1 = r274_xn$Capture$2Lrc8.Metrics;
        var r274_Width = _r274_t1.Width;
        var r274_SB = _r274_t1.SB;
        var r274_CAP = _r274_t1.CAP;
        var r274_XH = _r274_t1.XH;
        var r274_SymbolMid = _r274_t1.SymbolMid;
        var r274_ApparentTranslate = _r274_t1.ApparentTranslate;
        var r274_HVContrast = _r274_t1.HVContrast;
        var r274_O = _r274_t1.O;
        var r274_OX = _r274_t1.OX;
        var r274_Stroke = _r274_t1.Stroke;
        var r274_LongJut = _r274_t1.LongJut;
        var r274_RightSB = _r274_t1.RightSB;
        var r274_Middle = _r274_t1.Middle;
        var r274_DotRadius = _r274_t1.DotRadius;
        var r274_AdviceStroke = _r274_t1.AdviceStroke;
        var r274_OverlayStroke = _r274_t1.OverlayStroke;
        var r274_OperatorStroke = _r274_t1.OperatorStroke;
        var r274_StrokeWidthBlend = _r274_t1.StrokeWidthBlend;
        var r274_ArchDepthAOf = _r274_t1.ArchDepthAOf;
        var r274_ArchDepthBOf = _r274_t1.ArchDepthBOf;
        var _r274_t2 = r274_xn$Capture$2Lrc8.SpiroFns;
        var r274_flat = _r274_t2.flat;
        var r274_curl = _r274_t2.curl;
        var r274_widths = _r274_t2.widths;
        var r274_dispiro = _r274_t2.dispiro;
        var _r274_t3 = r274_xn$Capture$2Lrc8.BooleFns;
        var _r274_t4 = r274_xn$Capture$2Lrc8.CommonShapes.resolve();
        var r274_Rect = _r274_t4.Rect;
        var r274_DotAt = _r274_t4.DotAt;
        var r274_OShapeOutline = _r274_t4.OShapeOutline;
        var r274_HBar = _r274_t4.HBar;
        var r274_HOverlayBar = _r274_t4.HOverlayBar;
        var r274_VBar = _r274_t4.VBar;
        var r274_FlatSlashShape = _r274_t4.FlatSlashShape;
        var r274_WithTransform = _r274_t4.WithTransform;
        var r274_DotVariants = _r274_t4.DotVariants;
        var _r274_t5 = r274_xn$Capture$2Lrc8['Common-Derivatives'].resolve();
        var r274_xn$selectvariant$7Hrq = _r274_t5['select-variant'];
        var r274_xn$referglyph$1aao = _r274_t5['refer-glyph'];
        var _r274_t6 = r274_xn$Capture$2Lrc8['Mark-Shared-Metrics'].resolve();
        var r274_markExtend = _r274_t6.markExtend;
        var r274_MarkStroke = _r274_t6.MarkStroke;
        var r274_markStress = _r274_t6.markStress;
        var r274_markFine = _r274_t6.markFine;
        var _r274_t7 = r274_xn$Capture$2Lrc8['Mark-Shared-Metrics'].resolve();
        var r274_asciiMarkZoomX = _r274_t7.asciiMarkZoomX;
        var r274_asciiMarkZoomY = _r274_t7.asciiMarkZoomY;
        var _r274_t8 = r274_xn$Capture$2Lrc8['Mark-Shared-Metrics'].resolve();
        var r274_markMiddle = _r274_t8.markMiddle;
        var r274_markDotsRadius = _r274_t8.markDotsRadius;
        var _r274_t9 = r274_xn$Capture$2Lrc8['Mark-Above'].resolve();
        var r274_aboveMarkTop = _r274_t9.aboveMarkTop;
        var r274_aboveMarkBot = _r274_t9.aboveMarkBot;
        var r274_aboveMarkMid = _r274_t9.aboveMarkMid;
        var r274_TildeShape = _r274_t9.TildeShape;
        var r274_RingShape = _r274_t9.RingShape;
        var _r274_t10 = r274_xn$Capture$2Lrc8['Mark-Below'].resolve();
        var r274_belowMarkBot = _r274_t10.belowMarkBot;
        var r274_belowMarkTop = _r274_t10.belowMarkTop;
        var r274_belowMarkMid = _r274_t10.belowMarkMid;
        var r274_tildeHeight = 0.75 * (r274_aboveMarkTop - r274_aboveMarkBot);
        var r274_tildeHalfWidth = r274_markExtend + 0.4 * r274_Stroke * r274_HVContrast;
        r274_xn$createAndSaveGlyphImpl$2Lrc3c('tildeOver', 820, function () {
            var _r284_t1;
            var _r284_t0 = this;
            var r284_currentGlyph = _r284_t0;
            r284_currentGlyph.setWidth(0);
            r284_currentGlyph.setMarkAnchor('overlay', r274_markMiddle, r274_XH / 2, r274_markMiddle, r274_XH / 2);
            r284_currentGlyph.include(r274_TildeShape(new r274_xn$NamedParameterPair$2Lrc9b('ttop', r274_XH / 2 + r274_tildeHeight / 2), new r274_xn$NamedParameterPair$2Lrc9b('tbot', r274_XH / 2 - r274_tildeHeight / 2), new r274_xn$NamedParameterPair$2Lrc9b('leftEnd', r274_markMiddle - r274_tildeHalfWidth), new r274_xn$NamedParameterPair$2Lrc9b('rightEnd', r274_markMiddle + r274_tildeHalfWidth), new r274_xn$NamedParameterPair$2Lrc9b('hs', r274_AdviceStroke(4) / 2)));
            return void 0;
        });
        r274_xn$createAndSaveGlyphImpl$2Lrc3c('dblTildeOver', null, function () {
            var _r295_t1;
            var _r295_t0 = this;
            var r295_currentGlyph = _r295_t0;
            r295_currentGlyph.setWidth(0);
            r295_currentGlyph.setMarkAnchor('overlay', r274_markMiddle, r274_XH / 2, r274_markMiddle, r274_XH / 2);
            var r295_ttop = r274_XH / 2 + r274_tildeHeight / 2;
            var r295_tbot = r274_XH / 2 - r274_tildeHeight / 2;
            var r295_addTilde = function () {
                var _r298_t0, _r298_t1;
                return r274_TildeShape(new r274_xn$NamedParameterPair$2Lrc9b('ttop', r295_ttop), new r274_xn$NamedParameterPair$2Lrc9b('tbot', r295_tbot), new r274_xn$NamedParameterPair$2Lrc9b('leftEnd', r274_markMiddle - r274_tildeHalfWidth), new r274_xn$NamedParameterPair$2Lrc9b('rightEnd', r274_markMiddle + r274_tildeHalfWidth), new r274_xn$NamedParameterPair$2Lrc9b('hs', r274_AdviceStroke(4.5) / 2));
            };
            var r295_shift = (r295_ttop - r295_tbot) * 1.2;
            r295_currentGlyph.include(r295_addTilde());
            r295_currentGlyph.include(r274_ApparentTranslate(0, r295_shift));
            r295_currentGlyph.include(r295_addTilde());
            r295_currentGlyph.include(r274_ApparentTranslate(0, -0.5 * r295_shift));
            return void 0;
        });
        r274_xn$createAndSaveGlyphImpl$2Lrc3c('asciiTilde.symbolMid', null, function () {
            var _r310_t1;
            var _r310_t0 = this;
            var r310_currentGlyph = _r310_t0;
            r310_currentGlyph.include(r274_TildeShape(new r274_xn$NamedParameterPair$2Lrc9b('ttop', r274_SymbolMid + r274_tildeHeight * 0.5 * r274_asciiMarkZoomY), new r274_xn$NamedParameterPair$2Lrc9b('tbot', r274_SymbolMid - r274_tildeHeight * 0.5 * r274_asciiMarkZoomY), new r274_xn$NamedParameterPair$2Lrc9b('leftEnd', r274_SB), new r274_xn$NamedParameterPair$2Lrc9b('rightEnd', r274_RightSB), new r274_xn$NamedParameterPair$2Lrc9b('hs', r274_OperatorStroke / 2)));
            return void 0;
        });
        r274_xn$createAndSaveGlyphImpl$2Lrc3c('tildeOverOnExension', null, function () {
            var _r319_t1;
            var _r319_t0 = this;
            var r319_currentGlyph = _r319_t0;
            r319_currentGlyph.setWidth(0);
            r319_currentGlyph.setMarkAnchor('overlayOnExtension', r274_markMiddle, r274_XH / 2, r274_markMiddle, r274_XH / 2);
            r319_currentGlyph.include(r274_TildeShape(new r274_xn$NamedParameterPair$2Lrc9b('ttop', r274_XH / 2 + r274_tildeHeight / 3), new r274_xn$NamedParameterPair$2Lrc9b('tbot', r274_XH / 2 - r274_tildeHeight / 3), new r274_xn$NamedParameterPair$2Lrc9b('leftEnd', r274_markMiddle - r274_tildeHalfWidth), new r274_xn$NamedParameterPair$2Lrc9b('rightEnd', r274_markMiddle + r274_tildeHalfWidth), new r274_xn$NamedParameterPair$2Lrc9b('hs', r274_AdviceStroke(4) / 2)));
            return void 0;
        });
        r274_xn$createAndSaveGlyphImpl$2Lrc3c('barOver', 821, function () {
            var _r330_t1;
            var _r330_t0 = this;
            var r330_currentGlyph = _r330_t0;
            r330_currentGlyph.setWidth(0);
            r330_currentGlyph.setMarkAnchor('overlay', r274_markMiddle, r274_XH / 2, r274_markMiddle, r274_XH / 2);
            r330_currentGlyph.include(r274_HOverlayBar(r274_markMiddle - r274_LongJut * 0.75, r274_markMiddle + r274_LongJut * 0.75, r274_XH / 2));
            return void 0;
        });
        r274_xn$createAndSaveGlyphImpl$2Lrc3c('dblBarOver', null, function () {
            var _r336_t1;
            var _r336_t0 = this;
            var r336_currentGlyph = _r336_t0;
            r336_currentGlyph.setWidth(0);
            r336_currentGlyph.setMarkAnchor('overlay', r274_markMiddle, r274_XH / 2, r274_markMiddle, r274_XH / 2);
            var r336_gap = 0.2 * r274_CAP;
            r336_currentGlyph.include(r274_HOverlayBar(r274_markMiddle - r274_LongJut * 0.75, r274_markMiddle + r274_LongJut * 0.75, r274_XH / 2 + 0.5 * r336_gap));
            r336_currentGlyph.include(r274_HOverlayBar(r274_markMiddle - r274_LongJut * 0.75, r274_markMiddle + r274_LongJut * 0.75, r274_XH / 2 - 0.5 * r336_gap));
            return void 0;
        });
        r274_xn$createAndSaveGlyphImpl$2Lrc3c('shortSlashOver', 57344, function () {
            var _r343_t1;
            var _r343_t0 = this;
            var r343_currentGlyph = _r343_t0;
            r343_currentGlyph.setWidth(0);
            r343_currentGlyph.setMarkAnchor('overlay', r274_markMiddle, r274_XH / 2, r274_markMiddle, r274_XH / 2);
            r343_currentGlyph.include(r274_FlatSlashShape(r274_markMiddle, r274_XH / 2, 0.5 * r274_OverlayStroke));
            return void 0;
        });
        r274_xn$createAndSaveGlyphImpl$2Lrc3c('antiSlashOver', null, function () {
            var _r349_t1;
            var _r349_t0 = this;
            var r349_currentGlyph = _r349_t0;
            r349_currentGlyph.setWidth(0);
            r349_currentGlyph.setMarkAnchor('overlay', r274_markMiddle, r274_XH / 2, r274_markMiddle, r274_XH / 2);
            r349_currentGlyph.include(r274_FlatSlashShape(r274_markMiddle, r274_XH / 2, 0.5 * r274_OverlayStroke, 0.75, -0.3));
            return void 0;
        });
        r274_xn$createAndSaveGlyphImpl$2Lrc3c('ringOver', null, function () {
            var _r355_t1;
            var _r355_t0 = this;
            var r355_currentGlyph = _r355_t0;
            r355_currentGlyph.setWidth(0);
            r355_currentGlyph.setMarkAnchor('overlay', 0, 0, 0, 0);
            r355_currentGlyph.include(r274_RingShape(0, 0, r274_tildeHalfWidth));
            return void 0;
        });
        r274_xn$createAndSaveGlyphImpl$2Lrc3c('hStrike', null, function () {
            var _r361_t1;
            var _r361_t0 = this;
            var r361_currentGlyph = _r361_t0;
            r361_currentGlyph.setWidth(0);
            r361_currentGlyph.setMarkAnchor('strike', r274_markMiddle, r274_XH / 2, r274_markMiddle, r274_XH / 2);
            r361_currentGlyph.include(r274_HOverlayBar(r1_mix(0, r274_SB, 0.5) - r274_Width, r1_mix(r274_Width, r274_RightSB, 0.5) - r274_Width, r274_XH / 2));
            return void 0;
        });
        r274_xn$createAndSaveGlyphImpl$2Lrc3c('strikeThrough', 822, function () {
            var _r367_t1;
            var _r367_t0 = this;
            var r367_currentGlyph = _r367_t0;
            r367_currentGlyph.setWidth(0);
            r367_currentGlyph.setMarkAnchor('slash', r274_markMiddle, r274_XH / 2, r274_markMiddle, r274_XH / 2);
            r367_currentGlyph.include(r274_HOverlayBar(0 - r274_Width, 0, r274_XH / 2));
            return void 0;
        });
        r274_xn$createAndSaveGlyphImpl$2Lrc3c('oblStrike', null, function () {
            var _r373_t1;
            var _r373_t0 = this;
            var r373_currentGlyph = _r373_t0;
            r373_currentGlyph.setWidth(0);
            r373_currentGlyph.setMarkAnchor('strike', r274_markMiddle, r274_XH / 2, r274_markMiddle, r274_XH / 2);
            r373_currentGlyph.include(r274_dispiro(r274_widths.center(r274_OverlayStroke), r274_flat(r1_mix(0, r274_SB, 0.5) - r274_Width, 0.4 * r274_XH), r274_curl(r1_mix(r274_Width, r274_RightSB, 0.5) - r274_Width, 0.6 * r274_XH)));
            return void 0;
        });
        r274_xn$createAndSaveGlyphImpl$2Lrc3c('tildeStrike', null, function () {
            var _r379_t1;
            var _r379_t0 = this;
            var r379_currentGlyph = _r379_t0;
            r379_currentGlyph.setWidth(0);
            r379_currentGlyph.setMarkAnchor('strike', r274_markMiddle, r274_XH / 2, r274_markMiddle, r274_XH / 2);
            r379_currentGlyph.include(r274_TildeShape(new r274_xn$NamedParameterPair$2Lrc9b('ttop', r274_XH / 2 + r274_tildeHeight / 2), new r274_xn$NamedParameterPair$2Lrc9b('tbot', r274_XH / 2 - r274_tildeHeight / 2), new r274_xn$NamedParameterPair$2Lrc9b('leftEnd', r274_markMiddle - r274_Width / 2), new r274_xn$NamedParameterPair$2Lrc9b('rightEnd', r274_markMiddle + r274_Width / 2), new r274_xn$NamedParameterPair$2Lrc9b('hs', r274_OverlayStroke / 2)));
            return void 0;
        });
        r274_xn$createAndSaveGlyphImpl$2Lrc3c('tildeStrike2', null, function () {
            var _r390_t1;
            var _r390_t0 = this;
            var r390_currentGlyph = _r390_t0;
            r390_currentGlyph.setWidth(0);
            r390_currentGlyph.setMarkAnchor('strike', r274_markMiddle, r274_XH / 2, r274_markMiddle, r274_XH / 2);
            r390_currentGlyph.include(r274_TildeShape(new r274_xn$NamedParameterPair$2Lrc9b('ttop', r274_XH / 2 + r274_tildeHeight / 2), new r274_xn$NamedParameterPair$2Lrc9b('tbot', r274_XH / 2 - r274_tildeHeight / 2), new r274_xn$NamedParameterPair$2Lrc9b('leftEnd', r274_markMiddle - r274_Width / 2 + r274_SB), new r274_xn$NamedParameterPair$2Lrc9b('rightEnd', r274_markMiddle + r274_Width / 2 - r274_SB), new r274_xn$NamedParameterPair$2Lrc9b('hs', r274_OverlayStroke / 2)));
            return void 0;
        });
        r274_xn$createAndSaveGlyphImpl$2Lrc3c('tildeStrikeDivM', null, function () {
            var _r401_t1;
            var _r401_t0 = this;
            var r401_currentGlyph = _r401_t0;
            r401_currentGlyph.setWidth(0);
            r401_currentGlyph.setMarkAnchor('strike', r274_markMiddle, r274_XH / 2, r274_markMiddle, r274_XH / 2);
            r401_currentGlyph.include(r274_TildeShape(new r274_xn$NamedParameterPair$2Lrc9b('ttop', r274_XH / 2 + r274_tildeHeight / 2), new r274_xn$NamedParameterPair$2Lrc9b('tbot', r274_XH / 2 - r274_tildeHeight / 2), new r274_xn$NamedParameterPair$2Lrc9b('leftEnd', r274_markMiddle - r274_Width / 2 * r274_para.diversityM), new r274_xn$NamedParameterPair$2Lrc9b('rightEnd', r274_markMiddle + r274_Width / 2 * r274_para.diversityM), new r274_xn$NamedParameterPair$2Lrc9b('hs', r274_OverlayStroke / 2)));
            return void 0;
        });
        r274_xn$createAndSaveGlyphImpl$2Lrc3c('shortSlash', 823, function () {
            var _r412_t1;
            var _r412_t0 = this;
            var r412_currentGlyph = _r412_t0;
            r412_currentGlyph.setWidth(0);
            var r412_fine = 0.375 * r274_OverlayStroke;
            r412_currentGlyph.setMarkAnchor('slash', r274_markMiddle, r274_XH / 2, r274_markMiddle, r274_XH / 2);
            r412_currentGlyph.include(r274_dispiro(r274_flat(r274_SB - r274_O * 3 + r412_fine - r274_Width, r274_XH * -0.1, r274_widths(r412_fine, r412_fine)), r274_curl(r274_RightSB + r274_O * 3 - r412_fine - r274_Width, r274_XH * 1.1)));
            return void 0;
        });
        r274_xn$createAndSaveGlyphImpl$2Lrc3c('longSlash', 824, function () {
            var _r418_t1;
            var _r418_t0 = this;
            var r418_currentGlyph = _r418_t0;
            r418_currentGlyph.setWidth(0);
            var r418_fine = 0.375 * r274_OverlayStroke;
            r418_currentGlyph.setMarkAnchor('slash', r274_markMiddle, r274_XH / 2, r274_markMiddle, r274_XH / 2);
            r418_currentGlyph.include(r274_dispiro(r274_flat(r274_SB - r274_O * 3 + r418_fine - r274_Width, r274_XH * 0.5 - r274_CAP * 0.6, r274_widths(r418_fine, r418_fine)), r274_curl(r274_RightSB + r274_O * 3 - r418_fine - r274_Width, r274_XH * 0.5 + r274_CAP * 0.6)));
            return void 0;
        });
        r274_xn$createAndSaveGlyphImpl$2Lrc3c('wideSlash', null, function () {
            var _r424_t1;
            var _r424_t0 = this;
            var r424_currentGlyph = _r424_t0;
            r424_currentGlyph.setWidth(0);
            var r424_fine = 0.375 * r274_OverlayStroke;
            r424_currentGlyph.setMarkAnchor('slash', r274_markMiddle, r274_XH / 2, r274_markMiddle, r274_XH / 2);
            r424_currentGlyph.include(r274_dispiro(r274_flat(r274_SB + r274_O * 3 + r424_fine - r274_Width, r274_XH * -0.1, r274_widths(r424_fine, r424_fine)), r274_curl(r274_RightSB - r274_O * 3 - r424_fine - r274_Width, r274_XH * 1.1)));
            return void 0;
        });
        r274_xn$createAndSaveGlyphImpl$2Lrc3c('arrSlashOver', null, function () {
            var _r430_t1;
            var _r430_t0 = this;
            var r430_currentGlyph = _r430_t0;
            r430_currentGlyph.setWidth(0);
            var r430_fine = 0.375 * r274_OverlayStroke;
            var r430_dx = r274_Width * 0.1;
            var r430_dy = r274_Width * 0.4;
            r430_currentGlyph.setMarkAnchor('slash', r274_markMiddle, r274_XH / 2, r274_markMiddle, r274_XH / 2);
            r430_currentGlyph.include(r274_dispiro(r274_flat(r274_Middle - r430_dx - r274_Width, r274_XH / 2 - r430_dy, r274_widths(r430_fine, r430_fine)), r274_curl(r274_Middle + r430_dx - r274_Width, r274_XH / 2 + r430_dy)));
            return void 0;
        });
        r274_xn$createAndSaveGlyphImpl$2Lrc3c('arrVStrokeOver', null, function () {
            var _r436_t1;
            var _r436_t0 = this;
            var r436_currentGlyph = _r436_t0;
            r436_currentGlyph.setWidth(0);
            var r436_fine = 0.375 * r274_OverlayStroke;
            var r436_dx = r274_Width * 0;
            var r436_dy = r274_Width * 0.3;
            r436_currentGlyph.setMarkAnchor('slash', r274_markMiddle, r274_XH / 2, r274_markMiddle, r274_XH / 2);
            r436_currentGlyph.include(r274_dispiro(r274_flat(r274_Middle - r436_dx - r274_Width, r274_XH / 2 - r436_dy, r274_widths(r436_fine, r436_fine)), r274_curl(r274_Middle + r436_dx - r274_Width, r274_XH / 2 + r436_dy)));
            return void 0;
        });
        r274_xn$createAndSaveGlyphImpl$2Lrc3c('arrDblVStrokeOver', null, function () {
            var _r442_t1;
            var _r442_t0 = this;
            var r442_currentGlyph = _r442_t0;
            r442_currentGlyph.setWidth(0);
            var r442_fine = 0.3 * r274_OverlayStroke;
            var r442_dx = r274_Width * 0;
            var r442_dy = r274_Width * 0.3;
            var r442_gap = Math.max(r442_fine * 2, r274_Width / 10);
            r442_currentGlyph.setMarkAnchor('slash', r274_markMiddle, r274_XH / 2, r274_markMiddle, r274_XH / 2);
            r442_currentGlyph.include(r274_dispiro(r274_flat(r274_Middle - r442_dx - r274_Width - r442_gap, r274_XH / 2 - r442_dy, r274_widths(r442_fine, r442_fine)), r274_curl(r274_Middle + r442_dx - r274_Width - r442_gap, r274_XH / 2 + r442_dy)));
            r442_currentGlyph.include(r274_dispiro(r274_flat(r274_Middle - r442_dx - r274_Width + r442_gap, r274_XH / 2 - r442_dy, r274_widths(r442_fine, r442_fine)), r274_curl(r274_Middle + r442_dx - r274_Width + r442_gap, r274_XH / 2 + r442_dy)));
            return void 0;
        });
        r274_xn$createAndSaveGlyphImpl$2Lrc3c('arrHStrokeOver', null, function () {
            var _r449_t1;
            var _r449_t0 = this;
            var r449_currentGlyph = _r449_t0;
            r449_currentGlyph.setWidth(0);
            var r449_fine = 0.375 * r274_OverlayStroke;
            var r449_dx = r274_Width * 0.3;
            r449_currentGlyph.setMarkAnchor('slash', r274_markMiddle, r274_XH / 2, r274_markMiddle, r274_XH / 2);
            r449_currentGlyph.include(r274_dispiro(r274_flat(r274_Middle - r274_Width - r449_dx, r274_XH / 2, r274_widths(r449_fine, r449_fine)), r274_curl(r274_Middle - r274_Width + r449_dx, r274_XH / 2)));
            return void 0;
        });
        r274_xn$createAndSaveGlyphImpl$2Lrc3c('arrDblHStrokeOver', null, function () {
            var _r455_t1;
            var _r455_t0 = this;
            var r455_currentGlyph = _r455_t0;
            r455_currentGlyph.setWidth(0);
            var r455_fine = 0.3 * r274_OverlayStroke;
            var r455_dx = r274_Width * 0.3;
            var r455_gap = Math.max(r455_fine * 2, r274_Width / 10);
            r455_currentGlyph.setMarkAnchor('slash', r274_markMiddle, r274_XH / 2, r274_markMiddle, r274_XH / 2);
            r455_currentGlyph.include(r274_dispiro(r274_flat(r274_Middle - r274_Width - r455_dx, r274_XH / 2 - r455_gap, r274_widths(r455_fine, r455_fine)), r274_curl(r274_Middle - r274_Width + r455_dx, r274_XH / 2 - r455_gap)));
            r455_currentGlyph.include(r274_dispiro(r274_flat(r274_Middle - r274_Width - r455_dx, r274_XH / 2 + r455_gap, r274_widths(r455_fine, r455_fine)), r274_curl(r274_Middle - r274_Width + r455_dx, r274_XH / 2 + r455_gap)));
            return void 0;
        });
        r274_xn$createAndSaveGlyphImpl$2Lrc3c('leftTackOver', null, function () {
            var _r462_t1;
            var _r462_t0 = this;
            var r462_currentGlyph = _r462_t0;
            r462_currentGlyph.setWidth(0);
            r462_currentGlyph.setMarkAnchor('overlay', 0, 0, 0, 0);
            r462_currentGlyph.include(r274_VBar.m(r274_markExtend, -r274_XH / 4, r274_XH / 4, r274_MarkStroke));
            r462_currentGlyph.include(r274_HBar.m(-r274_markExtend, r274_markExtend, 0, r274_MarkStroke));
            return void 0;
        });
        r274_xn$createAndSaveGlyphImpl$2Lrc3c('rightTackOver', null, function () {
            var _r469_t1;
            var _r469_t0 = this;
            var r469_currentGlyph = _r469_t0;
            r469_currentGlyph.setWidth(0);
            r469_currentGlyph.setMarkAnchor('overlay', 0, 0, 0, 0);
            r469_currentGlyph.include(r274_VBar.m(-r274_markExtend, -r274_XH / 4, r274_XH / 4, r274_MarkStroke));
            r469_currentGlyph.include(r274_HBar.m(-r274_markExtend, r274_markExtend, 0, r274_MarkStroke));
            return void 0;
        });
        r274_xn$createAndSaveGlyphImpl$2Lrc3c('upTackOver', null, function () {
            var _r476_t1;
            var _r476_t0 = this;
            var r476_currentGlyph = _r476_t0;
            r476_currentGlyph.setWidth(0);
            r476_currentGlyph.setMarkAnchor('overlay', 0, 0, 0, 0);
            var r476_ext = Math.min(r274_markExtend, r274_belowMarkTop - r274_belowMarkBot);
            r476_currentGlyph.include(r274_VBar.m(0, -r476_ext, +r476_ext, r274_markFine * 2));
            r476_currentGlyph.include(r274_HBar.b(-r274_markExtend, +r274_markExtend, -r476_ext, r274_markFine * 2));
            return void 0;
        });
        r274_xn$createAndSaveGlyphImpl$2Lrc3c('downTackOver', null, function () {
            var _r483_t1;
            var _r483_t0 = this;
            var r483_currentGlyph = _r483_t0;
            r483_currentGlyph.setWidth(0);
            r483_currentGlyph.setMarkAnchor('overlay', 0, 0, 0, 0);
            var r483_ext = Math.min(r274_markExtend, r274_belowMarkTop - r274_belowMarkBot);
            r483_currentGlyph.include(r274_VBar.m(0, -r483_ext, +r483_ext, r274_markFine * 2));
            r483_currentGlyph.include(r274_HBar.t(-r274_markExtend, +r274_markExtend, +r483_ext, r274_markFine * 2));
            return void 0;
        });
        r274_xn$createAndSaveGlyphImpl$2Lrc3c('plusOver', null, function () {
            var _r490_t1;
            var _r490_t0 = this;
            var r490_currentGlyph = _r490_t0;
            r490_currentGlyph.setWidth(0);
            r490_currentGlyph.setMarkAnchor('overlay', 0, 0, 0, 0);
            var r490_ext = Math.min(r274_markExtend, r274_belowMarkTop - r274_belowMarkBot);
            r490_currentGlyph.include(r274_VBar.m(0, -r490_ext, +r490_ext, r274_markFine * 2));
            r490_currentGlyph.include(r274_HBar.m(-r274_markExtend, +r274_markExtend, 0, r274_markFine * 2));
            return void 0;
        });
        r274_xn$createAndSaveGlyphImpl$2Lrc3c('minusOver', null, function () {
            var _r497_t1;
            var _r497_t0 = this;
            var r497_currentGlyph = _r497_t0;
            r497_currentGlyph.setWidth(0);
            r497_currentGlyph.setMarkAnchor('overlay', 0, 0, 0, 0);
            var r497_ext = 0.5 * Math.min(r274_markExtend, r274_belowMarkTop - r274_belowMarkBot);
            r497_currentGlyph.include(r274_VBar.m(-r274_markExtend, -r497_ext, +r497_ext, r274_markFine * 2));
            r497_currentGlyph.include(r274_VBar.m(+r274_markExtend, -r497_ext, +r497_ext, r274_markFine * 2));
            r497_currentGlyph.include(r274_HBar.m(-r274_markExtend, +r274_markExtend, 0, r274_markFine * 2));
            return void 0;
        });
        r274_xn$createAndSaveGlyphImpl$2Lrc3c('equalOver', null, function () {
            var _r505_t1;
            var _r505_t0 = this;
            var r505_currentGlyph = _r505_t0;
            r505_currentGlyph.setWidth(0);
            r505_currentGlyph.setMarkAnchor('overlay', 0, 0, 0, 0);
            var r505_ext = Math.min(r274_markExtend, r274_belowMarkTop - r274_belowMarkBot);
            var r505_sw = Math.min(2 * r274_markFine, 2 / 3 * r505_ext);
            r505_currentGlyph.include(r274_HBar.t(-r274_markExtend, +r274_markExtend, +r505_ext, r505_sw));
            r505_currentGlyph.include(r274_HBar.b(-r274_markExtend, +r274_markExtend, -r505_ext, r505_sw));
            return void 0;
        });
        r274_xn$createAndSaveGlyphImpl$2Lrc3c('rightHalfCircleOver', null, function () {
            var _r512_t1;
            var _r512_t0 = this;
            var r512_currentGlyph = _r512_t0;
            r512_currentGlyph.setWidth(0);
            r512_currentGlyph.setMarkAnchor('overlay', 0, 0, 0, 0);
            r512_currentGlyph.include(r274_WithTransform(r274_ApparentTranslate(-r274_markMiddle, -r274_aboveMarkMid), r274_xn$referglyph$1aao('rightHalfCircleAbove')));
            return void 0;
        });
        r274_xn$createAndSaveGlyphImpl$2Lrc3c('leftHalfCircleOver', null, function () {
            var _r518_t1;
            var _r518_t0 = this;
            var r518_currentGlyph = _r518_t0;
            r518_currentGlyph.setWidth(0);
            r518_currentGlyph.setMarkAnchor('overlay', 0, 0, 0, 0);
            r518_currentGlyph.include(r274_WithTransform(r274_ApparentTranslate(-r274_markMiddle, -r274_aboveMarkMid), r274_xn$referglyph$1aao('leftHalfCircleAbove')));
            return void 0;
        });
        r274_xn$ExportCapture$2Lrc4b(function () {
            var _r523_t0, _r523_t1;
            return { 'InnerDot': r274_InnerDot };
        });
        var r274_InnerDot = function (r524_x, r524_y, r524_kHeight, r524_fRound, r524_kdr, r524__space, r524__div) {
            var _r524_t0, _r524_t1, _r524_t2;
            var r524_space = r1_fallback(r524__space, r274_InnerDot.spaceOfDf(r274_DivFrame(1)));
            var r524_div = r1_fallback(r524__div, 4);
            var r524_halfDotWidth = r524_kdr * Math.min(r274_DotRadius, r524_space / r524_div);
            var r524_halfDotHeight = r524_kdr * Math.min(r274_DotRadius, r524_halfDotWidth * r524_kHeight);
            if (r524_fRound)
                return r274_OShapeOutline.NoOvershoot(r524_y + r524_halfDotHeight, r524_y - r524_halfDotHeight, r524_x + r524_halfDotWidth, r524_x - r524_halfDotWidth, r274_Stroke * r524_halfDotWidth * 2 / r274_Width, r274_ArchDepthAOf(r524_halfDotWidth, r524_halfDotWidth * 2), r274_ArchDepthBOf(r524_halfDotWidth, r524_halfDotWidth * 2));
            else
                return r274_Rect(r524_y + r524_halfDotHeight, r524_y - r524_halfDotHeight, r524_x + r524_halfDotWidth, r524_x - r524_halfDotWidth);
        };
        r274_InnerDot.spaceOfDf = function (r525_df) {
            var _r525_t0, _r525_t1;
            return r525_df.rightSB - r525_df.leftSB - 2 * r274_OX - 2 * r274_HVContrast * r525_df.mvs;
        };
        var r274_InnerDot2 = function (r526_kHeight, r526_fRound, r526_kdr) {
            var _r526_t0, _r526_t1;
            return function () {
                var _r528_t1;
                var _r528_t0 = this;
                var r528_currentGlyph = _r528_t0;
                var r528_space = r274_InnerDot.spaceOfDf(r274_DivFrame(1));
                var r528_div = r274_StrokeWidthBlend(7, 5);
                var r528_halfDotWidth = r526_kdr * Math.min(r274_DotRadius, r528_space / r528_div);
                var r528_kHeight2 = r528_div / 4 * r526_kHeight;
                var r528_offset = (0.5 * r528_space - 2 * r528_halfDotWidth) / 3 + r528_halfDotWidth;
                r528_currentGlyph.include(r274_InnerDot(-r528_offset, 0, r528_kHeight2, r526_fRound, r526_kdr, r528_space, r528_div));
                r528_currentGlyph.include(r274_InnerDot(r528_offset, 0, r528_kHeight2, r526_fRound, r526_kdr, r528_space, r528_div));
                return void 0;
            };
        };
        var _r274_t11 = Object.entries(r274_DotVariants)[Symbol.iterator]();
        var _r274_t12 = void 0;
        while (!(_r274_t12 = _r274_t11.next()).done) {
            _r274_t13 = _r274_t12.value;
            r274_suffix = _r274_t13[0];
            r274_DrawAt = _r274_t13[1][0];
            r274_kdr = _r274_t13[1][1];
            _r274_t13[1];
            (function () {
                r274_xn$createAndSaveGlyphImpl$2Lrc3c('innerDot.' + r274_suffix, null, function () {
                    var _r536_t1;
                    var _r536_t0 = this;
                    var r536_currentGlyph = _r536_t0;
                    r536_currentGlyph.setWidth(0);
                    r536_currentGlyph.setMarkAnchor('slash', 0, 0, 0, 0);
                    r536_currentGlyph.include(r274_InnerDot(0, 0, 2, r274_DrawAt === r274_DotAt, r274_kdr));
                    return void 0;
                });
                r274_xn$createAndSaveGlyphImpl$2Lrc3c('innerDotSmall.' + r274_suffix, null, function () {
                    var _r542_t1;
                    var _r542_t0 = this;
                    var r542_currentGlyph = _r542_t0;
                    r542_currentGlyph.setWidth(0);
                    r542_currentGlyph.setMarkAnchor('slash', 0, 0, 0, 0);
                    r542_currentGlyph.include(r274_InnerDot(0, 0, 1.5, r274_DrawAt === r274_DotAt, r274_kdr));
                    return void 0;
                });
                r274_xn$createAndSaveGlyphImpl$2Lrc3c('innerDoubleDot.' + r274_suffix, null, function () {
                    var _r548_t1;
                    var _r548_t0 = this;
                    var r548_currentGlyph = _r548_t0;
                    r548_currentGlyph.setWidth(0);
                    r548_currentGlyph.setMarkAnchor('slash', 0, 0, 0, 0);
                    r548_currentGlyph.include(r274_InnerDot2(2, r274_DrawAt === r274_DotAt, r274_kdr));
                    return void 0;
                });
                return r274_xn$createAndSaveGlyphImpl$2Lrc3c('innerDoubleDotSmall.' + r274_suffix, null, function () {
                    var _r554_t1;
                    var _r554_t0 = this;
                    var r554_currentGlyph = _r554_t0;
                    r554_currentGlyph.setWidth(0);
                    r554_currentGlyph.setMarkAnchor('slash', 0, 0, 0, 0);
                    r554_currentGlyph.include(r274_InnerDot2(1.5, r274_DrawAt === r274_DotAt, r274_kdr));
                    return void 0;
                });
            }());
        }
        r274_xn$selectvariant$7Hrq('innerDot', new r274_xn$NamedParameterPair$2Lrc9b('follow', 'diacriticDot'));
        r274_xn$selectvariant$7Hrq('innerDotSmall', new r274_xn$NamedParameterPair$2Lrc9b('follow', 'diacriticDot'));
        r274_xn$selectvariant$7Hrq('innerDoubleDot', new r274_xn$NamedParameterPair$2Lrc9b('follow', 'diacriticDot'));
        return r274_xn$selectvariant$7Hrq('innerDoubleDotSmall', new r274_xn$NamedParameterPair$2Lrc9b('follow', 'diacriticDot'));
    });
    return void 0;
});
