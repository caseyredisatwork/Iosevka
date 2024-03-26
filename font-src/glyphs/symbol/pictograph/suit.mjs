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
    r270_xn$Capture_Ext$2Lrc2b['$defineGlyphBlockImpl$'](r270_xn$Capture_Ext$2Lrc2b, 'Symbol-Pictograph-Suit-Cards', function (r271_xn$Capture$2Lrc8, r271_xn$ExportCapture$2Lrc4b) {
        var _r271_t7, _r271_t8;
        var _r271_t0 = r271_xn$Capture$2Lrc8;
        var r271_xn$createAndSaveGlyphImpl$2Lrc3c = _r271_t0['$createAndSaveGlyphImpl$'];
        var r271_xn$NamedParameterPair$2Lrc9b = _r271_t0['$NamedParameterPair$'];
        var r271_xn$assignUnicodeImpl$2Lrc8b = _r271_t0['$assignUnicodeImpl$'];
        var r271_xn$execState$2Lrc0b = _r271_t0['$execState$'];
        var r271_para = _r271_t0.para;
        var r271_AS_BASE = _r271_t0.AS_BASE;
        var r271_DivFrame = _r271_t0.DivFrame;
        var _r271_t1 = r271_xn$Capture$2Lrc8.Metrics;
        var r271_Width = _r271_t1.Width;
        var r271_SymbolMid = _r271_t1.SymbolMid;
        var r271_PictTop = _r271_t1.PictTop;
        var r271_PictBot = _r271_t1.PictBot;
        var r271_Scale = _r271_t1.Scale;
        var r271_Translate = _r271_t1.Translate;
        var r271_O = _r271_t1.O;
        var r271_RightSB = _r271_t1.RightSB;
        var r271_Middle = _r271_t1.Middle;
        var r271_AdviceStroke = _r271_t1.AdviceStroke;
        var _r271_t2 = r271_xn$Capture$2Lrc8.SpiroFns;
        var r271_corner = _r271_t2.corner;
        var r271_flat = _r271_t2.flat;
        var r271_curl = _r271_t2.curl;
        var r271_widths = _r271_t2.widths;
        var r271_dispiro = _r271_t2.dispiro;
        var r271_xn$spirooutline$1aao = _r271_t2['spiro-outline'];
        var _r271_t3 = r271_xn$Capture$2Lrc8.BooleFns;
        var r271_union = _r271_t3.union;
        var r271_intersection = _r271_t3.intersection;
        var r271_difference = _r271_t3.difference;
        var _r271_t4 = r271_xn$Capture$2Lrc8.CommonShapes.resolve();
        var r271_RingAt = _r271_t4.RingAt;
        var r271_HBar = _r271_t4.HBar;
        var r271_VBar = _r271_t4.VBar;
        var r271_Ungizmo = _r271_t4.Ungizmo;
        var r271_Regizmo = _r271_t4.Regizmo;
        var _r271_t5 = r271_xn$Capture$2Lrc8['Common-Derivatives'].resolve();
        var r271_xn$referglyph$1aao = _r271_t5['refer-glyph'];
        var _r271_t6 = r271_xn$Capture$2Lrc8['Symbol-Pictograph-Heart'].resolve();
        var r271_HeartShapeImpl = _r271_t6.HeartShapeImpl;
        var r271_df = r271_DivFrame(r271_para.diversityM);
        var r271_sw = r271_AdviceStroke(4.25);
        var r271_suit = new r1_Box(r1_mix(r271_SymbolMid, r271_PictTop, 0.75), r1_mix(r271_SymbolMid, r271_PictBot, 0.75), r271_df.middle - r1_mix(r271_RightSB, r271_Width, 1 / 2) + r271_Middle, r271_df.middle + r1_mix(r271_RightSB, r271_Width, 1 / 2) - r271_Middle);
        var r271_wrap = function (r275_g) {
            var _r275_t0, _r275_t1;
            return function () {
                var _r277_t1;
                var _r277_t0 = this;
                var r277_currentGlyph = _r277_t0;
                r277_currentGlyph.setWidth(r271_df.width);
                r277_currentGlyph.include(r275_g, r271_AS_BASE);
                return void 0;
            };
        };
        r271_xn$createAndSaveGlyphImpl$2Lrc3c('heartSuit', 9829, r271_wrap(r271_HeartShapeImpl(r271_suit, 0, 0, 0)));
        r271_xn$createAndSaveGlyphImpl$2Lrc3c('whiteHeartSuit', 9825, r271_wrap(r271_difference(r271_xn$referglyph$1aao('heartSuit'), r271_HeartShapeImpl(r271_suit, r271_sw, 1.75, 0.8))));
        r271_xn$createAndSaveGlyphImpl$2Lrc3c('spadeSuit', 9824, r271_wrap(r271_union(r271_xn$createAndSaveGlyphImpl$2Lrc3c('.WF.font-src/glyphs/symbol/pictograph/suit.ptl.1', null, function () {
            var _r285_t1;
            var _r285_t0 = this;
            var r285_currentGlyph = _r285_t0;
            r285_currentGlyph.include(r271_HeartShapeImpl(r271_suit.withTop(r271_suit.mixY(1 / 0.975)), 0, 0, 0));
            r285_currentGlyph.include(r271_Ungizmo());
            r285_currentGlyph.include(r271_Translate(-r271_suit.xMid, -r271_suit.bottom));
            r285_currentGlyph.include(r271_Scale(1, -0.75));
            r285_currentGlyph.include(r271_Translate(r271_suit.xMid, r271_suit.top));
            r285_currentGlyph.include(r271_Regizmo());
            return void 0;
        }), r271_HBar.b(r1_mix(r271_df.leftSB, r271_df.rightSB, 0.25), r1_mix(r271_df.rightSB, r271_df.leftSB, 0.25), r271_suit.bottom, r271_sw), r271_VBar.m(r271_suit.xMid, r271_suit.bottom, r271_suit.mixY(1 - 0.75 * 0.75), r271_sw))));
        r271_xn$createAndSaveGlyphImpl$2Lrc3c('whiteSpadeSuit', 9828, r271_wrap(r271_difference(r271_xn$referglyph$1aao('spadeSuit'), r271_xn$createAndSaveGlyphImpl$2Lrc3c('.WF.font-src/glyphs/symbol/pictograph/suit.ptl.2', null, function () {
            var _r295_t1;
            var _r295_t0 = this;
            var r295_currentGlyph = _r295_t0;
            r295_currentGlyph.include(r271_HeartShapeImpl(r271_suit.withTop(r271_suit.mixY(1 / 0.975)), r271_sw, 2, 0));
            r295_currentGlyph.include(r271_Ungizmo());
            r295_currentGlyph.include(r271_Translate(-r271_suit.xMid, -r271_suit.bottom));
            r295_currentGlyph.include(r271_Scale(1, -0.75));
            r295_currentGlyph.include(r271_Translate(r271_suit.xMid, r271_suit.top));
            r295_currentGlyph.include(r271_Regizmo());
            return void 0;
        }))));
        var r271_clubTopY = r271_suit.mixY(0.78);
        var r271_clubTriangleHeight = (r271_suit.top - r271_suit.bottom) * 0.3;
        var r271_ClubTriangles = function (r302_r) {
            var _r302_t0, _r302_t1;
            return r271_union(r271_RingAt(r271_suit.xMid, r271_clubTopY, r302_r), r271_RingAt(r271_suit.xMid - r271_clubTriangleHeight / Math.sqrt(3), r271_clubTopY - r271_clubTriangleHeight, r302_r), r271_RingAt(r271_suit.xMid + r271_clubTriangleHeight / Math.sqrt(3), r271_clubTopY - r271_clubTriangleHeight, r302_r), r271_xn$spirooutline$1aao(r271_corner(r271_suit.xMid, r271_clubTopY), r271_corner(r271_suit.xMid - r271_clubTriangleHeight / Math.sqrt(3), r271_clubTopY - r271_clubTriangleHeight), r271_corner(r271_suit.xMid + r271_clubTriangleHeight / Math.sqrt(3), r271_clubTopY - r271_clubTriangleHeight)));
        };
        var r271_ClubShape = function (r303_r) {
            var _r303_t0, _r303_t1;
            return r271_xn$createAndSaveGlyphImpl$2Lrc3c('.WF.font-src/glyphs/symbol/pictograph/suit.ptl.3', null, r271_union(r271_ClubTriangles(r303_r), r271_HBar.b(r1_mix(r271_df.leftSB, r271_df.rightSB, 0.25), r1_mix(r271_df.rightSB, r271_df.leftSB, 0.25), r271_suit.bottom, r271_sw), r271_VBar.m(r271_suit.xMid, r271_suit.bottom, r271_suit.mixY(0.45), r271_sw)));
        };
        var r271_circleRadius = (r271_suit.top - r271_suit.bottom) * 0.18;
        r271_xn$createAndSaveGlyphImpl$2Lrc3c('clubSuit', 9827, r271_wrap(r271_ClubShape(r271_circleRadius)));
        r271_xn$createAndSaveGlyphImpl$2Lrc3c('whiteClubSuit', 9831, r271_wrap(function () {
            var _r308_t1;
            var _r308_t0 = this;
            var r308_currentGlyph = _r308_t0;
            var r308_ro = r271_circleRadius + r271_sw / 2;
            var r308_ri = r271_circleRadius - r271_sw / 2;
            r308_currentGlyph.include(r271_difference(r271_ClubShape(r308_ro), r271_ClubTriangles(r308_ri)));
            return void 0;
        }));
        r271_xn$createAndSaveGlyphImpl$2Lrc3c('diamondSuit', 9830, r271_wrap(r271_xn$spirooutline$1aao(r271_corner(r271_suit.xMid, r271_suit.top), r271_corner(r271_suit.right - r271_O, r271_SymbolMid), r271_corner(r271_suit.xMid, r271_suit.bottom), r271_corner(r271_suit.left + r271_O, r271_SymbolMid))));
        return r271_xn$createAndSaveGlyphImpl$2Lrc3c('whiteDiamondSuit', 9826, r271_wrap(r271_intersection(r271_xn$referglyph$1aao('diamondSuit'), r271_union(r271_dispiro(r271_widths.rhs(r271_sw), r271_flat(r271_suit.xMid, r271_suit.top), r271_curl(r271_suit.right - r271_O, r271_SymbolMid)), r271_dispiro(r271_widths.rhs(r271_sw), r271_flat(r271_suit.right - r271_O, r271_SymbolMid), r271_curl(r271_suit.xMid, r271_suit.bottom)), r271_dispiro(r271_widths.rhs(r271_sw), r271_flat(r271_suit.xMid, r271_suit.bottom), r271_curl(r271_suit.left + r271_O, r271_SymbolMid)), r271_dispiro(r271_widths.rhs(r271_sw), r271_flat(r271_suit.left + r271_O, r271_SymbolMid), r271_curl(r271_suit.xMid, r271_suit.top))))));
    });
    return void 0;
});
