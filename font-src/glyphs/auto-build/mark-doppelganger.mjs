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
    r273_xn$Capture_Ext$2Lrc2b['$defineGlyphBlockImpl$'](r273_xn$Capture_Ext$2Lrc2b, 'Mark-Doppelganger', function (r274_xn$Capture$2Lrc8, r274_xn$ExportCapture$2Lrc4b) {
        var r274_AnchorMap, r274_gn, r274_g, r274_handled, r274_akFrom, r274_akTo, r274_toGN, _r274_t4, _r274_t5, _r274_t6, _r274_t7, _r274_t8, _r274_t9, _r274_t10, _r274_t11, _r274_t12, _r274_t13, _r274_t14, _r274_t15, _r274_t16, _r274_t17, _r274_t18, _r274_t19;
        var _r274_t0 = r274_xn$Capture$2Lrc8;
        var r274_xn$createAndSaveGlyphImpl$2Lrc3c = _r274_t0['$createAndSaveGlyphImpl$'];
        var r274_xn$NamedParameterPair$2Lrc9b = _r274_t0['$NamedParameterPair$'];
        var r274_xn$assignUnicodeImpl$2Lrc8b = _r274_t0['$assignUnicodeImpl$'];
        var r274_xn$execState$2Lrc0b = _r274_t0['$execState$'];
        var r274_recursive = _r274_t0.recursive;
        var r274_glyphStore = _r274_t0.glyphStore;
        var r274_AS_BASE = _r274_t0.AS_BASE;
        var r274_ALSO_METRICS = _r274_t0.ALSO_METRICS;
        var _r274_t1 = r274_xn$Capture$2Lrc8.Metrics;
        var _r274_t2 = r274_xn$Capture$2Lrc8.SpiroFns;
        var _r274_t3 = r274_xn$Capture$2Lrc8.BooleFns;
        if (!r274_recursive) {
            _r274_t4 = r274_xn$Capture$2Lrc8.CommonShapes.resolve();
            _r274_t5 = r274_xn$Capture$2Lrc8['Common-Derivatives'].resolve();
            r274_AnchorMap = [
                [
                    'above',
                    'tieAbove'
                ],
                [
                    'below',
                    'tieBelow'
                ]
            ];
            _r274_t6 = r274_glyphStore.namedEntries()[Symbol.iterator]();
            _r274_t7 = void 0;
            _r274_t16 = !(_r274_t7 = _r274_t6.next()).done;
            while (_r274_t16) {
                _r274_t8 = _r274_t7.value;
                r274_gn = _r274_t8[0];
                r274_g = _r274_t8[1];
                r274_handled = false;
                _r274_t9 = r274_AnchorMap;
                _r274_t10 = _r274_t9.length;
                _r274_t11 = 0;
                _r274_t18 = _r274_t11 < _r274_t10;
                while (_r274_t18) {
                    _r274_t19 = (_r274_t12 = _r274_t9[_r274_t11], r274_akFrom = _r274_t12[0], r274_akTo = _r274_t12[1], !r274_handled && r274_g.markAnchors && r274_g.markAnchors[r274_akFrom] ? (r274_handled = true, r274_toGN = r1_TieMark.amendName(r274_gn), r274_xn$createAndSaveGlyphImpl$2Lrc3c(r274_toGN, null, function () {
                        var _r281_t1;
                        var _r281_t0 = this;
                        var r281_currentGlyph = _r281_t0;
                        r281_currentGlyph.include(r274_g, r274_AS_BASE, r274_ALSO_METRICS);
                        r281_currentGlyph.markAnchors[r274_akTo] = r281_currentGlyph.markAnchors[r274_akFrom];
                        r281_currentGlyph.deleteMarkAnchor(r274_akFrom);
                        r281_currentGlyph.baseAnchors[r274_akTo] = r281_currentGlyph.baseAnchors[r274_akFrom];
                        r281_currentGlyph.deleteBaseAnchor(r274_akFrom);
                        return void 0;
                    }), r1_TieMark.set(r274_g, r274_toGN)) : void 0, _r274_t11 = _r274_t11 + 1);
                    _r274_t18 = _r274_t11 < _r274_t10;
                }
                _r274_t17 = _r274_t19;
                _r274_t16 = !(_r274_t7 = _r274_t6.next()).done;
            }
            return _r274_t17;
        } else
            return void 0;
    });
    return void 0;
});
