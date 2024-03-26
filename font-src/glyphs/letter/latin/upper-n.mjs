'use strict';
import * as _s0_t0 from '../../../support/utils.mjs';
import * as _s0_t1 from '../../../support/gr.mjs';
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
var r1_Dotless = _r1_t9.Dotless;
var r1_CvDecompose = _r1_t9.CvDecompose;
var r1_MathSansSerif = _r1_t9.MathSansSerif;
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
    r270_xn$Capture_Ext$2Lrc2b['$defineGlyphBlockImpl$'](r270_xn$Capture_Ext$2Lrc2b, 'Letter-Latin-Upper-N', function (r271_xn$Capture$2Lrc8, r271_xn$ExportCapture$2Lrc4b) {
        var r271_suffix, r271_bodyType, r271_crD, r271_slabType, _r271_t10, _r271_t12, _r271_t13, _r271_t14, _r271_tag15;
        var _r271_t0 = r271_xn$Capture$2Lrc8;
        var r271_xn$createAndSaveGlyphImpl$2Lrc3c = _r271_t0['$createAndSaveGlyphImpl$'];
        var r271_xn$NamedParameterPair$2Lrc9b = _r271_t0['$NamedParameterPair$'];
        var r271_xn$assignUnicodeImpl$2Lrc8b = _r271_t0['$assignUnicodeImpl$'];
        var r271_xn$execState$2Lrc0b = _r271_t0['$execState$'];
        var r271_MarkSet = _r271_t0.MarkSet;
        var r271_AS_BASE = _r271_t0.AS_BASE;
        var r271_ALSO_METRICS = _r271_t0.ALSO_METRICS;
        var _r271_t1 = r271_xn$Capture$2Lrc8.Metrics;
        var r271_Width = _r271_t1.Width;
        var r271_SB = _r271_t1.SB;
        var r271_CAP = _r271_t1.CAP;
        var r271_XH = _r271_t1.XH;
        var r271_Descender = _r271_t1.Descender;
        var r271_HVContrast = _r271_t1.HVContrast;
        var r271_Upward = _r271_t1.Upward;
        var r271_Downward = _r271_t1.Downward;
        var r271_SLAB = _r271_t1.SLAB;
        var r271_RightSB = _r271_t1.RightSB;
        var r271_AdviceStroke = _r271_t1.AdviceStroke;
        var _r271_t2 = r271_xn$Capture$2Lrc8.SpiroFns;
        var r271_corner = _r271_t2.corner;
        var r271_flat = _r271_t2.flat;
        var r271_curl = _r271_t2.curl;
        var r271_end = _r271_t2.end;
        var r271_straight = _r271_t2.straight;
        var r271_widths = _r271_t2.widths;
        var r271_heading = _r271_t2.heading;
        var r271_dispiro = _r271_t2.dispiro;
        var _r271_t3 = r271_xn$Capture$2Lrc8.BooleFns;
        var r271_union = _r271_t3.union;
        var r271_intersection = _r271_t3.intersection;
        var _r271_t4 = r271_xn$Capture$2Lrc8.CommonShapes.resolve();
        var r271_xn$noshape$3cah = _r271_t4['no-shape'];
        var r271_Rect = _r271_t4.Rect;
        var r271_NeedSlab = _r271_t4.NeedSlab;
        var r271_VBar = _r271_t4.VBar;
        var r271_ExtLineCenter = _r271_t4.ExtLineCenter;
        var _r271_t5 = r271_xn$Capture$2Lrc8['Common-Derivatives'].resolve();
        var r271_xn$selectvariant$7Hrq = _r271_t5['select-variant'];
        var r271_xn$referglyph$1aao = _r271_t5['refer-glyph'];
        var r271_alias = _r271_t5.alias;
        var r271_xn$derivecomposites$7Hrq = _r271_t5['derive-composites'];
        var r271_xn$linkreducedvariant$5sIl8 = _r271_t5['link-reduced-variant'];
        var r271_xn$aliasreducedvariant$1aao8 = _r271_t5['alias-reduced-variant'];
        var _r271_t6 = r271_xn$Capture$2Lrc8['Mark-Shared-Metrics'].resolve();
        var r271_markHalfStroke = _r271_t6.markHalfStroke;
        var _r271_t7 = r271_xn$Capture$2Lrc8['Letter-Shared-Shapes'].resolve();
        var r271_CyrDescender = _r271_t7.CyrDescender;
        var r271_SerifFrame = _r271_t7.SerifFrame;
        var r271_PalatalHook = _r271_t7.PalatalHook;
        var r271_EngHook = _r271_t7.EngHook;
        var r271_xn$BODYSYMMETRIC$5sIl = 1;
        var r271_xn$BODYASYMMETRIC$5sIl = 2;
        var r271_xn$SLABNONE$5sIl = 0;
        var r271_xn$SLABAUTO$5sIl = 1;
        var r271_xn$SLABMOTION$5sIl = 2;
        var r271_xn$SLABALL$5sIl = 3;
        var r271_NShape = function () {
            var _r276_t6;
            var _r276_t7 = arguments;
            var _r276_t0 = [].slice.call(_r276_t7, 0);
            var _r276_t1 = [];
            var _r276_t2 = 0;
            while (_r276_t2 < _r276_t0.length) {
                if (!(_r276_t0[_r276_t2] instanceof r271_xn$NamedParameterPair$2Lrc9b))
                    _r276_t1.push(_r276_t0[_r276_t2]);
                _r276_t2 = _r276_t2 + 1;
            }
            var _r276_t3 = _r276_t0;
            var _r276_t4 = _r276_t3.length;
            var _r276_t5 = 0;
            while (_r276_t5 < _r276_t4) {
                _r276_t2 = _r276_t3[_r276_t5];
                if (_r276_t2 && _r276_t2 instanceof r271_xn$NamedParameterPair$2Lrc9b && _r276_t2.left === 'bodyType')
                    r276_bodyType = _r276_t2.right;
                if (_r276_t2 && _r276_t2 instanceof r271_xn$NamedParameterPair$2Lrc9b && _r276_t2.left === 'slabType')
                    r276_slabType = _r276_t2.right;
                if (_r276_t2 && _r276_t2 instanceof r271_xn$NamedParameterPair$2Lrc9b && _r276_t2.left === 'top')
                    r276_top = _r276_t2.right;
                if (_r276_t2 && _r276_t2 instanceof r271_xn$NamedParameterPair$2Lrc9b && _r276_t2.left === 'left')
                    r276_left = _r276_t2.right;
                if (_r276_t2 && _r276_t2 instanceof r271_xn$NamedParameterPair$2Lrc9b && _r276_t2.left === 'right')
                    r276_right = _r276_t2.right;
                if (_r276_t2 && _r276_t2 instanceof r271_xn$NamedParameterPair$2Lrc9b && _r276_t2.left === 'crowd')
                    r276_crowd = _r276_t2.right;
                if (_r276_t2 && _r276_t2 instanceof r271_xn$NamedParameterPair$2Lrc9b && _r276_t2.left === 'crDiag')
                    r276_crDiag = _r276_t2.right;
                _r276_t5 = _r276_t5 + 1;
            }
            var r276_bodyType = r1_fallback(r276_bodyType, _r276_t1[0]);
            var r276_slabType = r1_fallback(r276_slabType, _r276_t1[1]);
            var r276_top = r1_fallback(r276_top, _r276_t1[2]);
            var r276_left = r1_fallback(r276_left, _r276_t1[3]);
            var r276_right = r1_fallback(r276_right, _r276_t1[4]);
            var r276_crowd = r1_fallback(r276_crowd, _r276_t1[5], 2);
            var r276_crDiag = r1_fallback(r276_crDiag, _r276_t1[6], 4);
            return function () {
                var _r282_t0, _r282_t1, _r282_t2, _r282_t3, _r282_t5;
                var _r282_t4 = this;
                var r282_currentGlyph = _r282_t4;
                var r282_swDiag = r271_AdviceStroke(r276_crDiag);
                var r282_stroke = r271_AdviceStroke(r276_crowd);
                var r282_yEnd = (_r282_t0 = r276_bodyType, _r282_t0 === r271_xn$BODYSYMMETRIC$5sIl ? 0 : _r282_t0 === r271_xn$BODYASYMMETRIC$5sIl ? r276_top * 0.375 : void 0);
                r282_currentGlyph.include(r271_union((_r282_t1 = r276_bodyType, _r282_t1 === r271_xn$BODYSYMMETRIC$5sIl ? r271_dispiro(r271_flat(r276_left, 0, r271_widths.heading(0, r282_stroke, r271_Upward)), r271_curl(r276_left, r276_top * 0.4, r271_heading(r271_Upward)), r271_straight.up.end(r276_left, r276_top, r271_widths.heading(0, r282_swDiag, r271_Upward))) : _r282_t1 === r271_xn$BODYASYMMETRIC$5sIl ? r271_VBar.l(r276_left, 0, r276_top, r282_stroke) : void 0), (_r282_t2 = r276_bodyType, _r282_t2 === r271_xn$BODYSYMMETRIC$5sIl ? r271_dispiro(r271_flat(r276_right, r276_top, r271_widths.heading(0, r282_stroke, r271_Downward)), r271_curl(r276_right, r276_top * 0.6, r271_heading(r271_Downward)), r271_straight.down.end(r276_right, 0, r271_widths.heading(0, r282_swDiag, r271_Downward))) : _r282_t2 === r271_xn$BODYASYMMETRIC$5sIl ? r271_VBar.r(r276_right, 0, r276_top, r282_stroke) : void 0), r271_intersection(r271_Rect(r276_top, 0, r276_left, r276_right), r271_ExtLineCenter(2, r282_swDiag, r276_left + r282_swDiag, r276_top, r276_right - r282_swDiag, r282_yEnd))));
                var r282_sf = r271_SerifFrame(r276_top, 0, r276_left, r276_right, new r271_xn$NamedParameterPair$2Lrc9b('swRef', r282_stroke));
                r282_currentGlyph.include((_r282_t3 = r276_slabType, _r282_t3 === r271_xn$SLABALL$5sIl ? function () {
                    var _r295_t1;
                    var _r295_t0 = this;
                    var r295_currentGlyph = _r295_t0;
                    r295_currentGlyph.include(r282_sf.lt.outer, true, true);
                    r295_currentGlyph.include(r282_sf.lb.full);
                    r295_currentGlyph.include(r282_sf.rt.full);
                    return void 0;
                } : _r282_t3 === r271_xn$SLABAUTO$5sIl ? r271_NeedSlab(r271_SLAB, function () {
                    var _r290_t1;
                    var _r290_t0 = this;
                    var r290_currentGlyph = _r290_t0;
                    r290_currentGlyph.include(r282_sf.lt.outer, true, true);
                    r290_currentGlyph.include(r282_sf.lb.full);
                    r290_currentGlyph.include(r282_sf.rt.full);
                    return void 0;
                }) : _r282_t3 === r271_xn$SLABMOTION$5sIl ? function () {
                    var _r287_t1;
                    var _r287_t0 = this;
                    var r287_currentGlyph = _r287_t0;
                    r287_currentGlyph.include(r282_sf.lt.outer, true, true);
                    return void 0;
                } : _r282_t3 === r271_xn$SLABNONE$5sIl ? r271_xn$noshape$3cah() : void 0));
                return void 0;
            };
        };
        var r271_NConfig = {
            'standardSerifless': [
                r271_xn$BODYSYMMETRIC$5sIl,
                4,
                r271_xn$SLABNONE$5sIl
            ],
            'standardMotionSerifed': [
                r271_xn$BODYSYMMETRIC$5sIl,
                4,
                r271_xn$SLABMOTION$5sIl
            ],
            'standardSerifed': [
                r271_xn$BODYSYMMETRIC$5sIl,
                4,
                r271_xn$SLABALL$5sIl
            ],
            'asymmetricSerifless': [
                r271_xn$BODYASYMMETRIC$5sIl,
                3,
                r271_xn$SLABNONE$5sIl
            ],
            'asymmetricMotionSerifed': [
                r271_xn$BODYASYMMETRIC$5sIl,
                3,
                r271_xn$SLABMOTION$5sIl
            ],
            'asymmetricSerifed': [
                r271_xn$BODYASYMMETRIC$5sIl,
                3,
                r271_xn$SLABALL$5sIl
            ]
        };
        var _r271_t8 = Object.entries(r271_NConfig)[Symbol.iterator]();
        var _r271_t9 = void 0;
        while (!(_r271_t9 = _r271_t8.next()).done) {
            _r271_t10 = _r271_t9.value;
            r271_suffix = _r271_t10[0];
            r271_bodyType = _r271_t10[1][0];
            r271_crD = _r271_t10[1][1];
            r271_slabType = _r271_t10[1][2];
            _r271_t10[1];
            (function () {
                r271_xn$createAndSaveGlyphImpl$2Lrc3c('N.' + r271_suffix, null, function () {
                    var _r304_t1;
                    var _r304_t0 = this;
                    var r304_currentGlyph = _r304_t0;
                    r304_currentGlyph.include(r271_MarkSet.capital());
                    r304_currentGlyph.include(r271_NShape(r271_bodyType, r271_slabType, r271_CAP, r271_SB, r271_RightSB, new r271_xn$NamedParameterPair$2Lrc9b('crDiag', r271_crD)));
                    r304_currentGlyph.setBaseAnchor('trailing', r271_RightSB - r271_markHalfStroke, 0);
                    return void 0;
                });
                r271_xn$createAndSaveGlyphImpl$2Lrc3c('Eng.' + r271_suffix, null, function () {
                    var _r311_t1;
                    var _r311_t0 = this;
                    var r311_currentGlyph = _r311_t0;
                    r311_currentGlyph.include(r271_MarkSet.capDesc());
                    r311_currentGlyph.include(r271_NShape(r271_bodyType, r271_slabType, r271_CAP, r271_SB, r271_RightSB, new r271_xn$NamedParameterPair$2Lrc9b('crDiag', r271_crD)));
                    r311_currentGlyph.include(r271_EngHook(r271_RightSB, 0, r271_Descender));
                    return void 0;
                });
                r271_xn$createAndSaveGlyphImpl$2Lrc3c('NLTail.' + r271_suffix, null, function () {
                    var _r318_t1;
                    var _r318_t0 = this;
                    var r318_currentGlyph = _r318_t0;
                    r318_currentGlyph.include(r271_xn$referglyph$1aao('N.' + r271_suffix), r271_AS_BASE, r271_ALSO_METRICS);
                    r318_currentGlyph.ejectTagged('serifLB');
                    r318_currentGlyph.include(r271_PalatalHook.lExt(r271_SB, 0));
                    return void 0;
                });
                r271_xn$createAndSaveGlyphImpl$2Lrc3c('smcpN.' + r271_suffix, null, function () {
                    var _r324_t1;
                    var _r324_t0 = this;
                    var r324_currentGlyph = _r324_t0;
                    r324_currentGlyph.include(r271_MarkSet.e());
                    r324_currentGlyph.include(r271_NShape(r271_bodyType, r271_slabType, r271_XH, r271_SB, r271_RightSB, new r271_xn$NamedParameterPair$2Lrc9b('crDiag', r271_crD)));
                    r324_currentGlyph.setBaseAnchor('trailing', r271_RightSB - r271_markHalfStroke, 0);
                    return void 0;
                });
                return r271_xn$createAndSaveGlyphImpl$2Lrc3c('currency/nairaSignBase.' + r271_suffix, null, function () {
                    var _r331_t1;
                    var _r331_t0 = this;
                    var r331_currentGlyph = _r331_t0;
                    r331_currentGlyph.include(r271_NShape(r271_bodyType, r271_slabType, r271_CAP, r271_SB * 1.25, r271_Width - r271_SB * 1.25, new r271_xn$NamedParameterPair$2Lrc9b('crowd', 3.5), new r271_xn$NamedParameterPair$2Lrc9b('crDiag', 4)));
                    return void 0;
                });
            }());
        }
        r271_xn$selectvariant$7Hrq('N', 'N');
        r271_xn$linkreducedvariant$5sIl8('N/sansSerif', 'N', r1_MathSansSerif);
        r271_alias('grek/Nu', 925, 'N');
        r271_xn$aliasreducedvariant$1aao8('grek/Nu/sansSerif', 'grek/Nu', 'N/sansSerif', r1_MathSansSerif);
        r271_xn$derivecomposites$7Hrq('NDescender', 42896, 'N', r271_CyrDescender.rSideJut(r271_RightSB, 0));
        r271_xn$selectvariant$7Hrq('Eng', 330, new r271_xn$NamedParameterPair$2Lrc9b('follow', 'N'));
        r271_xn$selectvariant$7Hrq('smcpN', 628, new r271_xn$NamedParameterPair$2Lrc9b('follow', 'N'));
        r271_xn$selectvariant$7Hrq('NLTail', 413, new r271_xn$NamedParameterPair$2Lrc9b('follow', 'N'));
        r271_xn$selectvariant$7Hrq('currency/nairaSignBase', new r271_xn$NamedParameterPair$2Lrc9b('follow', 'N'));
        var _r271_t11 = r271_xn$Capture$2Lrc8['Letter-Blackboard'].resolve();
        var r271_BBS = _r271_t11.BBS;
        var r271_BBD = _r271_t11.BBD;
        return r271_xn$createAndSaveGlyphImpl$2Lrc3c('mathbb/N', 8469, function () {
            var _r342_t1;
            var _r342_t0 = this;
            var r342_currentGlyph = _r342_t0;
            r342_currentGlyph.include(r271_MarkSet.capital());
            r342_currentGlyph.include(r271_VBar.l(r271_SB, 0, r271_CAP, r271_BBS));
            r342_currentGlyph.include(r271_VBar.r(r271_RightSB, 0, r271_CAP, r271_BBS));
            r342_currentGlyph.include(r271_intersection(r271_Rect(r271_CAP, 0, r271_SB, r271_RightSB), r271_union(r271_dispiro(r271_widths.center(r271_BBS), r271_corner(r271_SB + r271_BBS * r271_HVContrast, r271_CAP), r271_corner(r271_RightSB - r271_BBS * r271_HVContrast / 2, r271_CAP / 5)), r271_dispiro(r271_widths.center(r271_BBS), r271_corner(r271_SB + r271_BBS * r271_HVContrast / 2, r271_CAP - r271_CAP / 5), r271_corner(r271_RightSB - r271_BBS * r271_HVContrast, 0)))));
            return void 0;
        });
    });
    return void 0;
});
r1_xn$GlyphBlocks$2Lrc2b.push(function (r349_xn$Capture_Ext$2Lrc2b) {
    var _r349_t0, _r349_t1;
    r349_xn$Capture_Ext$2Lrc2b['$defineGlyphBlockImpl$'](r349_xn$Capture_Ext$2Lrc2b, 'Letter-Latin-Inverse-Upper-N', function (r350_xn$Capture$2Lrc8, r350_xn$ExportCapture$2Lrc4b) {
        var _r350_t7, _r350_t8;
        var _r350_t0 = r350_xn$Capture$2Lrc8;
        var r350_xn$createAndSaveGlyphImpl$2Lrc3c = _r350_t0['$createAndSaveGlyphImpl$'];
        var r350_xn$NamedParameterPair$2Lrc9b = _r350_t0['$NamedParameterPair$'];
        var r350_xn$assignUnicodeImpl$2Lrc8b = _r350_t0['$assignUnicodeImpl$'];
        var r350_xn$execState$2Lrc0b = _r350_t0['$execState$'];
        var r350_MarkSet = _r350_t0.MarkSet;
        var _r350_t1 = r350_xn$Capture$2Lrc8.Metrics;
        var r350_SB = _r350_t1.SB;
        var r350_CAP = _r350_t1.CAP;
        var r350_XH = _r350_t1.XH;
        var r350_Upward = _r350_t1.Upward;
        var r350_Downward = _r350_t1.Downward;
        var r350_SLAB = _r350_t1.SLAB;
        var r350_RightSB = _r350_t1.RightSB;
        var r350_AdviceStroke = _r350_t1.AdviceStroke;
        var _r350_t2 = r350_xn$Capture$2Lrc8.SpiroFns;
        var r350_flat = _r350_t2.flat;
        var r350_curl = _r350_t2.curl;
        var r350_end = _r350_t2.end;
        var r350_straight = _r350_t2.straight;
        var r350_widths = _r350_t2.widths;
        var r350_heading = _r350_t2.heading;
        var r350_dispiro = _r350_t2.dispiro;
        var _r350_t3 = r350_xn$Capture$2Lrc8.BooleFns;
        var _r350_t4 = r350_xn$Capture$2Lrc8.CommonShapes.resolve();
        var r350_NeedSlab = _r350_t4.NeedSlab;
        var _r350_t5 = r350_xn$Capture$2Lrc8['Common-Derivatives'].resolve();
        var r350_xn$referglyph$1aao = _r350_t5['refer-glyph'];
        var r350_alias = _r350_t5.alias;
        var r350_xn$derivecomposites$7Hrq = _r350_t5['derive-composites'];
        var _r350_t6 = r350_xn$Capture$2Lrc8['Letter-Shared-Shapes'].resolve();
        var r350_CyrTailDescender = _r350_t6.CyrTailDescender;
        var r350_SerifFrame = _r350_t6.SerifFrame;
        var r350_xn$SLABINVNONE$5sIl4 = 0;
        var r350_xn$SLABINVALL$5sIl4 = 1;
        var r350_xn$SLABINVDIGAMMA$5sIl4 = 2;
        var r350_InverseNSerifs = function (r354_mode, r354_top, r354__left, r354__right) {
            var _r354_t0, _r354_t1;
            return function () {
                var _r356_t1;
                var _r356_t0 = this;
                var r356_currentGlyph = _r356_t0;
                var r356_left = r1_fallback(r354__left, r350_SB);
                var r356_right = r1_fallback(r354__right, r350_RightSB);
                var r356_sf = r350_SerifFrame(r354_top, 0, r356_left, r356_right);
                if (r354_mode === r350_xn$SLABINVALL$5sIl4)
                    r356_currentGlyph.include(r356_sf.lb.outer);
                if (r354_mode === r350_xn$SLABINVALL$5sIl4)
                    r356_currentGlyph.include(r356_sf.rt.outer);
                if (r354_mode)
                    r356_currentGlyph.include(r356_sf.lt.full);
                if (r354_mode)
                    r356_currentGlyph.include(r356_sf.rb.full);
                return void 0;
            };
        };
        var r350_InverseNShape = function (r361_mode, r361_top) {
            var _r361_t0, _r361_t1;
            return function () {
                var _r363_t1;
                var _r363_t0 = this;
                var r363_currentGlyph = _r363_t0;
                var r363_topstroke = r350_AdviceStroke(4);
                var r363_halftopstroke = r363_topstroke / 2;
                r363_currentGlyph.include(r350_dispiro(r350_widths.lhs(), r350_flat(r350_RightSB, 0, r350_heading(r350_Upward)), r350_curl(r350_RightSB, r361_top * 0.4, r350_heading(r350_Upward)), r350_straight.up.end(r350_RightSB, r361_top, r350_widths.heading(r363_topstroke, 0, r350_Upward))));
                r363_currentGlyph.include(r350_dispiro(r350_widths.lhs(), r350_flat(r350_SB, r361_top, r350_heading(r350_Downward)), r350_curl(r350_SB, r361_top * 0.6, r350_heading(r350_Downward)), r350_straight.down.end(r350_SB, 0, r350_widths.heading(r363_topstroke, 0, r350_Downward))));
                r363_currentGlyph.include(r350_dispiro(r350_flat(r350_RightSB - r363_halftopstroke, r361_top, r350_widths.heading(0, r363_topstroke, r350_Downward)), r350_curl(r350_SB + r363_halftopstroke, 0, r350_widths.heading(r363_topstroke, 0, r350_Downward))));
                r363_currentGlyph.include(r350_NeedSlab(r350_SLAB, r350_InverseNSerifs(r361_mode, r361_top)));
                return void 0;
            };
        };
        r350_xn$createAndSaveGlyphImpl$2Lrc3c('cyrl/I', 1048, function () {
            var _r370_t1;
            var _r370_t0 = this;
            var r370_currentGlyph = _r370_t0;
            r370_currentGlyph.include(r350_MarkSet.capital());
            r370_currentGlyph.include(r350_InverseNShape(r350_xn$SLABINVALL$5sIl4, r350_CAP));
            return void 0;
        });
        r350_xn$createAndSaveGlyphImpl$2Lrc3c('cyrl/i.upright', null, function () {
            var _r375_t1;
            var _r375_t0 = this;
            var r375_currentGlyph = _r375_t0;
            r375_currentGlyph.include(r350_MarkSet.e());
            r375_currentGlyph.include(r350_InverseNShape(r350_xn$SLABINVALL$5sIl4, r350_XH));
            return void 0;
        });
        r350_xn$createAndSaveGlyphImpl$2Lrc3c('grek/DigammaPamphylian', 886, function () {
            var _r380_t1;
            var _r380_t0 = this;
            var r380_currentGlyph = _r380_t0;
            r380_currentGlyph.include(r350_MarkSet.capital());
            r380_currentGlyph.include(r350_InverseNShape(r350_xn$SLABINVDIGAMMA$5sIl4, r350_CAP));
            return void 0;
        });
        r350_xn$createAndSaveGlyphImpl$2Lrc3c('grek/digammaPamphylian', 887, function () {
            var _r385_t1;
            var _r385_t0 = this;
            var r385_currentGlyph = _r385_t0;
            r385_currentGlyph.include(r350_MarkSet.e());
            r385_currentGlyph.include(r350_InverseNShape(r350_xn$SLABINVNONE$5sIl4, r350_XH));
            return void 0;
        });
        r350_alias('cyrl/smcpI', 7438, 'cyrl/i.upright');
        r350_xn$derivecomposites$7Hrq('cyrl/IShortTail', 1162, 'cyrl/I', r350_xn$referglyph$1aao('breveAbove'), r350_CyrTailDescender.rSideJut(r350_RightSB, 0));
        return r350_xn$derivecomposites$7Hrq('cyrl/iShortTail.upright', null, 'cyrl/i.upright', r350_xn$referglyph$1aao('breveAbove'), r350_CyrTailDescender.rSideJut(r350_RightSB, 0));
    });
    return void 0;
});
