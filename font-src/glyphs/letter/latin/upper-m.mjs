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
var r1_fallback = _r1_t8.fallback;
var r1_SuffixCfg = _r1_t8.SuffixCfg;
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
    r270_xn$Capture_Ext$2Lrc2b['$defineGlyphBlockImpl$'](r270_xn$Capture_Ext$2Lrc2b, 'Letter-Latin-Upper-M', function (r271_xn$Capture$2Lrc8, r271_xn$ExportCapture$2Lrc4b) {
        var r271_suffix, r271_slanted, r271_form, r271_slab, _r271_t9, _r271_t11, _r271_t12, _r271_t13, _r271_tag14, _r271_t19, _r271_tag20, _r271_t26, _r271_tag27;
        var _r271_t0 = r271_xn$Capture$2Lrc8;
        var r271_xn$createAndSaveGlyphImpl$2Lrc3c = _r271_t0['$createAndSaveGlyphImpl$'];
        var r271_xn$NamedParameterPair$2Lrc9b = _r271_t0['$NamedParameterPair$'];
        var r271_xn$assignUnicodeImpl$2Lrc8b = _r271_t0['$assignUnicodeImpl$'];
        var r271_xn$execState$2Lrc0b = _r271_t0['$execState$'];
        var r271_para = _r271_t0.para;
        var r271_MarkSet = _r271_t0.MarkSet;
        var r271_tagged = _r271_t0.tagged;
        var r271_DivFrame = _r271_t0.DivFrame;
        var _r271_t1 = r271_xn$Capture$2Lrc8.Metrics;
        var r271_Width = _r271_t1.Width;
        var r271_CAP = _r271_t1.CAP;
        var r271_XH = _r271_t1.XH;
        var r271_Descender = _r271_t1.Descender;
        var r271_HVContrast = _r271_t1.HVContrast;
        var r271_Upward = _r271_t1.Upward;
        var r271_Downward = _r271_t1.Downward;
        var r271_Stroke = _r271_t1.Stroke;
        var r271_VJut = _r271_t1.VJut;
        var r271_VJutStroke = _r271_t1.VJutStroke;
        var r271_SLAB = _r271_t1.SLAB;
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
        var r271_xn$spirooutline$1aao = _r271_t2['spiro-outline'];
        var _r271_t3 = r271_xn$Capture$2Lrc8.BooleFns;
        var r271_union = _r271_t3.union;
        var r271_intersection = _r271_t3.intersection;
        var r271_difference = _r271_t3.difference;
        var _r271_t4 = r271_xn$Capture$2Lrc8.CommonShapes.resolve();
        var r271_xn$noshape$3cah = _r271_t4['no-shape'];
        var r271_Rect = _r271_t4.Rect;
        var r271_VSerif = _r271_t4.VSerif;
        var r271_NeedSlab = _r271_t4.NeedSlab;
        var r271_HBar = _r271_t4.HBar;
        var r271_VBar = _r271_t4.VBar;
        var r271_ExtLineCenter = _r271_t4.ExtLineCenter;
        var r271_DiagCorDs = _r271_t4.DiagCorDs;
        var _r271_t5 = r271_xn$Capture$2Lrc8['Common-Derivatives'].resolve();
        var r271_xn$selectvariant$7Hrq = _r271_t5['select-variant'];
        var r271_alias = _r271_t5.alias;
        var r271_turned = _r271_t5.turned;
        var r271_xn$derivecomposites$7Hrq = _r271_t5['derive-composites'];
        var r271_xn$linkreducedvariant$5sIl8 = _r271_t5['link-reduced-variant'];
        var r271_xn$aliasreducedvariant$1aao8 = _r271_t5['alias-reduced-variant'];
        var r271_HalfAdvance = _r271_t5.HalfAdvance;
        var _r271_t6 = r271_xn$Capture$2Lrc8['Letter-Shared-Shapes'].resolve();
        var r271_SerifFrame = _r271_t6.SerifFrame;
        var r271_CyrTailDescender = _r271_t6.CyrTailDescender;
        var r271_PalatalHook = _r271_t6.PalatalHook;
        var r271_xn$FORMFLAT$5sIl = 0;
        var r271_xn$FORMHANGING$5sIl = 1;
        var r271_xn$FORMTURNW$5sIl5 = 2;
        var r271_xn$FORMSAN$5sIl = 3;
        var r271_xn$FORMSANSMALL$5sIl4 = 4;
        var r271_xn$SLABNONE$5sIl = 0;
        var r271_xn$SLABAUTO$5sIl = 1;
        var r271_xn$SLABMOTION$5sIl = 2;
        var r271_xn$SLABSMALLCYRILLIC$5sIl6 = 3;
        var r271_xn$SLABFULL$5sIl = 4;
        r271_xn$ExportCapture$2Lrc4b(function () {
            var _r276_t0, _r276_t1;
            return { 'MShape': r271_MShape };
        });
        var r271_MShape = function () {
            var _r277_t6;
            var _r277_t7 = arguments;
            var _r277_t0 = [].slice.call(_r277_t7, 0);
            var _r277_t1 = [];
            var _r277_t2 = 0;
            while (_r277_t2 < _r277_t0.length) {
                if (!(_r277_t0[_r277_t2] instanceof r271_xn$NamedParameterPair$2Lrc9b))
                    _r277_t1.push(_r277_t0[_r277_t2]);
                _r277_t2 = _r277_t2 + 1;
            }
            var _r277_t3 = _r277_t0;
            var _r277_t4 = _r277_t3.length;
            var _r277_t5 = 0;
            while (_r277_t5 < _r277_t4) {
                _r277_t2 = _r277_t3[_r277_t5];
                if (_r277_t2 && _r277_t2 instanceof r271_xn$NamedParameterPair$2Lrc9b && _r277_t2.left === 'top')
                    r277_top = _r277_t2.right;
                if (_r277_t2 && _r277_t2 instanceof r271_xn$NamedParameterPair$2Lrc9b && _r277_t2.left === 'df')
                    r277_df = _r277_t2.right;
                if (_r277_t2 && _r277_t2 instanceof r271_xn$NamedParameterPair$2Lrc9b && _r277_t2.left === 'form')
                    r277_form = _r277_t2.right;
                if (_r277_t2 && _r277_t2 instanceof r271_xn$NamedParameterPair$2Lrc9b && _r277_t2.left === 'slabType')
                    r277_slabType = _r277_t2.right;
                if (_r277_t2 && _r277_t2 instanceof r271_xn$NamedParameterPair$2Lrc9b && _r277_t2.left === 'slanted')
                    r277_slanted = _r277_t2.right;
                if (_r277_t2 && _r277_t2 instanceof r271_xn$NamedParameterPair$2Lrc9b && _r277_t2.left === 'kMidHang')
                    r277_kMidHang = _r277_t2.right;
                _r277_t5 = _r277_t5 + 1;
            }
            var r277_top = r1_fallback(r277_top, _r277_t1[0]);
            var r277_df = r1_fallback(r277_df, _r277_t1[1]);
            var r277_form = r1_fallback(r277_form, _r277_t1[2]);
            var r277_slabType = r1_fallback(r277_slabType, _r277_t1[3]);
            var r277_slanted = r1_fallback(r277_slanted, _r277_t1[4]);
            var r277_kMidHang = r1_fallback(r277_kMidHang, _r277_t1[5], r277_df.div);
            return function () {
                var r283___, _r283_t0, _r283_t1, _r283_t2, _r283_t3, _r283_t4, _r283_t5, _r283_t7;
                var _r283_t6 = this;
                var r283_currentGlyph = _r283_t6;
                var r283_sidesSlope = r277_slanted ? 0.04 : 0;
                var r283_xLeftTop = r277_df.leftSB + r277_top * r283_sidesSlope;
                var r283_xRightTop = r277_df.rightSB - r277_top * r283_sidesSlope;
                var r283_swSideBot = (_r283_t0 = r277_form, _r283_t0 === r271_xn$FORMSANSMALL$5sIl4 ? r271_AdviceStroke(2.5, r277_df.div) : _r283_t0 === r271_xn$FORMSAN$5sIl ? r271_AdviceStroke(2.5, r277_df.div) : _r283_t0 === r271_xn$FORMTURNW$5sIl5 ? r271_AdviceStroke(2.5, r277_df.div) : _r283_t0 === r271_xn$FORMHANGING$5sIl ? r271_AdviceStroke(2.5, r277_df.div) : (r283___ = _r283_t0, r271_AdviceStroke(2.75, r277_df.div)));
                var r283_swSideTop = (_r283_t1 = r277_form, _r283_t1 === r271_xn$FORMSANSMALL$5sIl4 ? r271_AdviceStroke(3, r277_df.div) : _r283_t1 === r271_xn$FORMSAN$5sIl ? r271_AdviceStroke(3, r277_df.div) : _r283_t1 === r271_xn$FORMTURNW$5sIl5 ? r271_AdviceStroke(3, r277_df.div) : (r283___ = _r283_t1, r271_AdviceStroke(4, r277_df.div)));
                var r283_swMiddle = r271_AdviceStroke(4.5, r277_df.div);
                var r283_middleY = (_r283_t2 = r277_form, _r283_t2 === r271_xn$FORMSANSMALL$5sIl4 ? r277_top * 0.55 : _r283_t2 === r271_xn$FORMSAN$5sIl ? r277_top * 0.55 : _r283_t2 === r271_xn$FORMTURNW$5sIl5 ? r277_top * 0.45 : _r283_t2 === r271_xn$FORMHANGING$5sIl ? r277_top * 0.3 / (r277_kMidHang * r277_kMidHang) : (r283___ = _r283_t2, r271_SLAB ? r271_Stroke : 0));
                var r283_kMidShift = (_r283_t3 = r277_form, _r283_t3 === r271_xn$FORMFLAT$5sIl ? 0.75 : (r283___ = _r283_t3, 0.5));
                var r283_kMidBotStrokeShrink = (_r283_t4 = r277_form, _r283_t4 === r271_xn$FORMFLAT$5sIl ? r1_mix(1, r277_df.div, -0.5) : (r283___ = _r283_t4, 1));
                var r283_swMiddleShrunk = r283_kMidBotStrokeShrink * r283_swMiddle;
                r283_currentGlyph.include(r271_tagged('strokeLeftBar', r271_dispiro(r271_flat(r277_df.leftSB, r277_form === r271_xn$FORMSANSMALL$5sIl4 ? r271_Descender : 0, r271_widths.heading(0, r283_swSideBot, r271_Upward)), r271_curl(r1_mix(r277_df.leftSB, r283_xLeftTop, 0.2), r277_top * 0.2, r271_heading(r271_Upward)), r271_straight.up.end(r283_xLeftTop, r277_top, r271_widths.heading(0, r283_swSideTop, r271_Upward)))));
                r283_currentGlyph.include(r271_tagged('strokeRightBar', r271_dispiro(r271_flat(r277_df.rightSB, 0, r271_widths.heading(r283_swSideBot, 0, r271_Upward)), r271_curl(r1_mix(r277_df.rightSB, r283_xRightTop, 0.2), r277_top * 0.2, r271_heading(r271_Upward)), r271_straight.up.end(r283_xRightTop, r277_top, r271_widths.heading(r283_swSideTop, 0, r271_Upward)))));
                r283_currentGlyph.include(r271_dispiro(r271_flat(r283_xLeftTop + r283_kMidShift * r283_swSideTop * r271_HVContrast, r277_top, r271_widths.lhs.heading(r283_swMiddle, r271_Downward)), r271_curl(r277_df.middle - 0.5 * r283_swMiddleShrunk * r271_HVContrast, r283_middleY, r271_widths.lhs.heading(r283_swMiddleShrunk, r271_Downward))));
                r283_currentGlyph.include(r271_dispiro(r271_flat(r283_xRightTop - r283_kMidShift * r283_swSideTop * r271_HVContrast, r277_top, r271_widths.rhs.heading(r283_swMiddle, r271_Downward)), r271_curl(r277_df.middle + 0.5 * r283_swMiddleShrunk * r271_HVContrast, r283_middleY, r271_widths.rhs.heading(r283_swMiddleShrunk, r271_Downward))));
                var r283_sfT = r271_SerifFrame(r277_top, 0, r283_xLeftTop, r283_xRightTop, new r271_xn$NamedParameterPair$2Lrc9b('swRef', r283_swSideBot), new r271_xn$NamedParameterPair$2Lrc9b('hSplit', 3));
                var r283_sfB = r271_SerifFrame(r277_top, 0, r277_df.leftSB, r277_df.rightSB, new r271_xn$NamedParameterPair$2Lrc9b('swRef', r283_swSideBot), new r271_xn$NamedParameterPair$2Lrc9b('hSplit', 3));
                r283_currentGlyph.include((_r283_t5 = r277_slabType, _r283_t5 === r271_xn$SLABNONE$5sIl ? r271_xn$noshape$3cah() : _r283_t5 === r271_xn$SLABFULL$5sIl ? function () {
                    var _r309_t1;
                    var _r309_t0 = this;
                    var r309_currentGlyph = _r309_t0;
                    r309_currentGlyph.include(r283_sfT.lt.outer, true, true);
                    r309_currentGlyph.include(r283_sfT.rt.outer);
                    r309_currentGlyph.include(r283_sfB.lb.full);
                    r309_currentGlyph.include(r283_sfB.rb.full);
                    return void 0;
                } : _r283_t5 === r271_xn$SLABAUTO$5sIl ? r271_NeedSlab(r271_SLAB, function () {
                    var _r303_t1;
                    var _r303_t0 = this;
                    var r303_currentGlyph = _r303_t0;
                    r303_currentGlyph.include(r283_sfT.lt.outer, true, true);
                    r303_currentGlyph.include(r283_sfT.rt.outer);
                    r303_currentGlyph.include(r283_sfB.lb.full);
                    r303_currentGlyph.include(r283_sfB.rb.full);
                    return void 0;
                }) : _r283_t5 === r271_xn$SLABMOTION$5sIl ? function () {
                    var _r300_t1;
                    var _r300_t0 = this;
                    var r300_currentGlyph = _r300_t0;
                    r300_currentGlyph.include(r283_sfT.lt.outer, true, true);
                    return void 0;
                } : _r283_t5 === r271_xn$SLABSMALLCYRILLIC$5sIl6 ? function () {
                    var _r294_t1;
                    var _r294_t0 = this;
                    var r294_currentGlyph = _r294_t0;
                    r294_currentGlyph.include(r283_sfT.lt.outer, true, true);
                    r294_currentGlyph.include(r271_para.isItalic ? r271_xn$noshape$3cah() : r283_sfT.rt.outer);
                    r294_currentGlyph.include(r271_para.isItalic ? r283_sfB.lb.outer : r283_sfB.lb.full);
                    r294_currentGlyph.include(r271_para.isItalic ? r283_sfB.rb.outer : r283_sfB.rb.full);
                    return void 0;
                } : void 0));
                return { 'swSideBot': r283_swSideBot };
            };
        };
        var r271_CyrSoftEmShape = function () {
            var _r314_t6;
            var _r314_t7 = arguments;
            var _r314_t0 = [].slice.call(_r314_t7, 0);
            var _r314_t1 = [];
            var _r314_t2 = 0;
            while (_r314_t2 < _r314_t0.length) {
                if (!(_r314_t0[_r314_t2] instanceof r271_xn$NamedParameterPair$2Lrc9b))
                    _r314_t1.push(_r314_t0[_r314_t2]);
                _r314_t2 = _r314_t2 + 1;
            }
            var _r314_t3 = _r314_t0;
            var _r314_t4 = _r314_t3.length;
            var _r314_t5 = 0;
            while (_r314_t5 < _r314_t4) {
                _r314_t2 = _r314_t3[_r314_t5];
                if (_r314_t2 && _r314_t2 instanceof r271_xn$NamedParameterPair$2Lrc9b && _r314_t2.left === 'top')
                    r314_top = _r314_t2.right;
                if (_r314_t2 && _r314_t2 instanceof r271_xn$NamedParameterPair$2Lrc9b && _r314_t2.left === 'df')
                    r314_df = _r314_t2.right;
                if (_r314_t2 && _r314_t2 instanceof r271_xn$NamedParameterPair$2Lrc9b && _r314_t2.left === 'form')
                    r314_form = _r314_t2.right;
                if (_r314_t2 && _r314_t2 instanceof r271_xn$NamedParameterPair$2Lrc9b && _r314_t2.left === 'slabType')
                    r314_slabType = _r314_t2.right;
                if (_r314_t2 && _r314_t2 instanceof r271_xn$NamedParameterPair$2Lrc9b && _r314_t2.left === 'slanted')
                    r314_slanted = _r314_t2.right;
                _r314_t5 = _r314_t5 + 1;
            }
            var r314_top = r1_fallback(r314_top, _r314_t1[0]);
            var r314_df = r1_fallback(r314_df, _r314_t1[1]);
            var r314_form = r1_fallback(r314_form, _r314_t1[2]);
            var r314_slabType = r1_fallback(r314_slabType, _r314_t1[3]);
            var r314_slanted = r1_fallback(r314_slanted, _r314_t1[4]);
            return function () {
                var r320___, _r320_t0, _r320_t2;
                var _r320_t1 = this;
                var r320_currentGlyph = _r320_t1;
                var r320_subDf = r314_df.slice(4, 3);
                var r320_sidesSlope = r314_slanted ? 0.04 : 0;
                var r320_xRightTop = r320_subDf.rightSB - r314_top * r320_sidesSlope;
                var r320_swSideBot = (_r320_t0 = r314_form, _r320_t0 === r271_xn$FORMSANSMALL$5sIl4 ? r271_AdviceStroke(2.5, r320_subDf.div) : _r320_t0 === r271_xn$FORMSAN$5sIl ? r271_AdviceStroke(2.5, r320_subDf.div) : _r320_t0 === r271_xn$FORMTURNW$5sIl5 ? r271_AdviceStroke(2.5, r320_subDf.div) : _r320_t0 === r271_xn$FORMHANGING$5sIl ? r271_AdviceStroke(2.5, r320_subDf.div) : (r320___ = _r320_t0, r271_AdviceStroke(2.75, r320_subDf.div)));
                r320_currentGlyph.include(r271_MShape(r314_top, r320_subDf, r314_form, r314_slabType, r314_slanted, new r271_xn$NamedParameterPair$2Lrc9b('kMidHang', r314_df.div)));
                r320_currentGlyph.include(r271_HBar.t(r320_xRightTop, r314_df.rightSB, r314_top, r320_swSideBot));
                if (r271_SLAB)
                    r320_currentGlyph.include(r271_VSerif.dr(r314_df.rightSB, r314_top, r271_VJut, r320_swSideBot * r271_VJutStroke / r271_Stroke));
                return void 0;
            };
        };
        var r271_MConfig = r1_SuffixCfg.combine(r1_SuffixCfg.weave({
            '': false,
            'slantedSides': true
        }, {
            'hanging': r271_xn$FORMHANGING$5sIl,
            'flatBottom': r271_xn$FORMFLAT$5sIl
        }, {
            'serifless': r271_xn$SLABNONE$5sIl,
            'motionSerifed': r271_xn$SLABMOTION$5sIl,
            'smallCyrl': r271_xn$SLABSMALLCYRILLIC$5sIl6,
            'serifed': r271_xn$SLABFULL$5sIl
        }), {
            'grekCapitalSan': [
                false,
                r271_xn$FORMSAN$5sIl,
                r271_xn$SLABAUTO$5sIl
            ],
            'grekSmallSan': [
                false,
                r271_xn$FORMSANSMALL$5sIl4,
                r271_xn$SLABNONE$5sIl
            ]
        });
        var _r271_t7 = Object.entries(r271_MConfig)[Symbol.iterator]();
        var _r271_t8 = void 0;
        while (!(_r271_t8 = _r271_t7.next()).done) {
            _r271_t9 = _r271_t8.value;
            r271_suffix = _r271_t9[0];
            r271_slanted = _r271_t9[1][0];
            r271_form = _r271_t9[1][1];
            r271_slab = _r271_t9[1][2];
            _r271_t9[1];
            (function () {
                r271_xn$createAndSaveGlyphImpl$2Lrc3c('M.' + r271_suffix, null, function () {
                    var _r330_t1;
                    var _r330_t0 = this;
                    var r330_currentGlyph = _r330_t0;
                    var r330_df = r271_DivFrame(r271_para.diversityM, 3);
                    r330_currentGlyph.setWidth(r330_df.width);
                    r330_currentGlyph.include(r330_df.markSet.capital());
                    r330_currentGlyph.include(r271_MShape(r271_CAP, r330_df, r271_form, r271_slab, r271_slanted));
                    return void 0;
                });
                r271_xn$createAndSaveGlyphImpl$2Lrc3c('MLTail.' + r271_suffix, null, function () {
                    var _r336_t1;
                    var _r336_t0 = this;
                    var r336_currentGlyph = _r336_t0;
                    var r336_df = r271_DivFrame(r271_para.diversityM, 3);
                    r336_currentGlyph.setWidth(r336_df.width);
                    r336_currentGlyph.include(r336_df.markSet.capital());
                    var r336_ret_M = r336_currentGlyph.include(r271_MShape(r271_CAP, r336_df, r271_form, r271_slab, r271_slanted));
                    r336_currentGlyph.ejectTagged('serifRB');
                    r336_currentGlyph.include(r271_PalatalHook.rExt(r336_df.rightSB, 0, new r271_xn$NamedParameterPair$2Lrc9b('sw', r336_ret_M.swSideBot)));
                    return void 0;
                });
                r271_xn$createAndSaveGlyphImpl$2Lrc3c('smcpM.' + r271_suffix, null, function () {
                    var _r345_t1;
                    var _r345_t0 = this;
                    var r345_currentGlyph = _r345_t0;
                    var r345_df = r271_DivFrame(r271_para.diversityM, 3);
                    r345_currentGlyph.setWidth(r345_df.width);
                    r345_currentGlyph.include(r345_df.markSet.e());
                    r345_currentGlyph.include(r271_MShape(r271_XH, r345_df, r271_form, r271_slab, r271_slanted));
                    return void 0;
                });
                r271_xn$createAndSaveGlyphImpl$2Lrc3c('smcpMWithDescender.' + r271_suffix, null, function () {
                    var _r351_t1;
                    var _r351_t0 = this;
                    var r351_currentGlyph = _r351_t0;
                    var r351_df = r271_DivFrame(r271_para.diversityM, 3);
                    r351_currentGlyph.setWidth(r351_df.width);
                    r351_currentGlyph.include(r351_df.markSet.p());
                    r351_currentGlyph.include(r271_MShape(r271_XH, r351_df, r271_form, r271_slab, r271_slanted));
                    return void 0;
                });
                r271_xn$createAndSaveGlyphImpl$2Lrc3c('cyrl/EmSoft.' + r271_suffix, null, function () {
                    var _r357_t1;
                    var _r357_t0 = this;
                    var r357_currentGlyph = _r357_t0;
                    var r357_df = r271_DivFrame(r271_para.diversityM, 3);
                    r357_currentGlyph.setWidth(r357_df.width);
                    r357_currentGlyph.include(r357_df.markSet.capital());
                    r357_currentGlyph.include(r271_CyrSoftEmShape(r271_CAP, r357_df, r271_form, r271_slab, r271_slanted));
                    return void 0;
                });
                return r271_xn$createAndSaveGlyphImpl$2Lrc3c('cyrl/emSoft.' + r271_suffix, null, function () {
                    var _r363_t1;
                    var _r363_t0 = this;
                    var r363_currentGlyph = _r363_t0;
                    var r363_df = r271_DivFrame(r271_para.diversityM, 3);
                    r363_currentGlyph.setWidth(r363_df.width);
                    r363_currentGlyph.include(r363_df.markSet.e());
                    r363_currentGlyph.include(r271_CyrSoftEmShape(r271_XH, r363_df, r271_form, r271_slab, r271_slanted));
                    return void 0;
                });
            }());
        }
        r271_xn$selectvariant$7Hrq('M', 'M');
        r271_xn$linkreducedvariant$5sIl8('M/sansSerif', 'M', r1_MathSansSerif);
        r271_xn$selectvariant$7Hrq('MLTail', 11374, new r271_xn$NamedParameterPair$2Lrc9b('follow', 'M'));
        r271_xn$selectvariant$7Hrq('smcpM', 7437, new r271_xn$NamedParameterPair$2Lrc9b('follow', 'M'));
        r271_xn$selectvariant$7Hrq('cyrl/em', 1084, new r271_xn$NamedParameterPair$2Lrc9b('shapeFrom', 'smcpM'));
        r271_alias('grek/Mu', 924, 'M');
        r271_xn$aliasreducedvariant$1aao8('grek/Mu/sansSerif', 'grek/Mu', 'M/sansSerif', r1_MathSansSerif);
        r271_alias('cyrl/Em', 1052, 'M');
        r271_xn$selectvariant$7Hrq('cyrl/EmSoft', 42598, new r271_xn$NamedParameterPair$2Lrc9b('follow', 'M'));
        r271_xn$selectvariant$7Hrq('cyrl/emSoft', 42599, new r271_xn$NamedParameterPair$2Lrc9b('follow', 'cyrl/em'));
        var _r271_t15 = r271_xn$derivecomposites$7Hrq;
        var _r271_t16 = 'cyrl/EmTail';
        var _r271_t17 = 1229;
        var _r271_t18 = 'cyrl/Em';
        var _r271_t21 = function () {
            var r373_df = r271_DivFrame(r271_para.diversityM, 3);
            return r271_CyrTailDescender.rSideJut(r373_df.rightSB, 0, new r271_xn$NamedParameterPair$2Lrc9b('sw', r373_df.mvs));
        }();
        _r271_t15(_r271_t16, _r271_t17, _r271_t18, _r271_t21);
        var _r271_t22 = r271_xn$derivecomposites$7Hrq;
        var _r271_t23 = 'cyrl/emTail';
        var _r271_t24 = 1230;
        var _r271_t25 = 'cyrl/em';
        var _r271_t28 = function () {
            var r376_df = r271_DivFrame(r271_para.diversityM, 3);
            return r271_CyrTailDescender.rSideJut(r376_df.rightSB, 0, new r271_xn$NamedParameterPair$2Lrc9b('sw', r376_df.mvs));
        }();
        _r271_t22(_r271_t23, _r271_t24, _r271_t25, _r271_t28);
        r271_alias('grek/San', 1018, 'M.grekCapitalSan');
        r271_alias('grek/san', 1019, 'smcpMWithDescender.grekSmallSan');
        r271_turned('turnM', null, 'M', r271_HalfAdvance, r271_CAP / 2);
        var _r271_t10 = r271_xn$Capture$2Lrc8['Letter-Blackboard'].resolve();
        var r271_BBS = _r271_t10.BBS;
        var r271_BBD = _r271_t10.BBD;
        var r271_BBBarRight = _r271_t10.BBBarRight;
        return r271_xn$createAndSaveGlyphImpl$2Lrc3c('mathbb/M', 120132, function () {
            var _r381_t1;
            var _r381_t0 = this;
            var r381_currentGlyph = _r381_t0;
            var r381_df = r271_DivFrame(1, 3);
            var r381_bbs = r271_AdviceStroke(8);
            var r381_bbd = r271_BBD * Math.min(3 / 4, r381_bbs / r271_BBS);
            var r381_kDiag = r271_DiagCorDs(r271_CAP, r381_df.rightSB - r381_df.leftSB, r381_bbd);
            var r381_yTurnPos = r271_CAP * 0.25;
            r381_currentGlyph.include(r271_MarkSet.capital());
            r381_currentGlyph.include(r271_VBar.l(r381_df.leftSB, 0, r271_CAP, r381_bbs));
            r381_currentGlyph.include(r271_BBBarRight(r381_df.rightSB, 0, r271_CAP, new r271_xn$NamedParameterPair$2Lrc9b('bbd', r381_bbd), new r271_xn$NamedParameterPair$2Lrc9b('bbs', r381_bbs)));
            var r381_xLeft = r381_df.leftSB + 0.5 * r381_bbs * r271_HVContrast;
            var r381_xRight = r381_df.rightSB - r381_bbd - 0.5 * r381_bbs * r271_HVContrast;
            var r381_xMiddle = r1_mix(r381_xLeft, r381_xRight, 0.5);
            r381_currentGlyph.include(r271_HBar.t(r381_xLeft, r381_xLeft + r381_kDiag * r381_bbd, r271_CAP, r381_bbs));
            r381_currentGlyph.include(r271_intersection(r271_Rect(r271_CAP, r381_yTurnPos, r381_xLeft, r381_xRight), r271_ExtLineCenter(2, r381_bbs, r381_xRight, r271_CAP, r381_xMiddle, r381_yTurnPos)));
            r381_currentGlyph.include(r271_difference(r271_intersection(r271_Rect(r271_CAP, r381_yTurnPos, r381_xLeft, r381_xRight), r271_union(r271_ExtLineCenter(2, r381_bbs, r381_xLeft, r271_CAP, r381_xMiddle, r381_yTurnPos), r271_ExtLineCenter(2, r381_bbs, r381_xLeft + r381_kDiag * r381_bbd, r271_CAP, r381_xMiddle + r381_kDiag * r381_bbd, r381_yTurnPos))), r271_xn$spirooutline$1aao(r271_corner(r271_Width * 4, r1_mix(r271_CAP, r381_yTurnPos, -1)), r271_corner(r1_mix(r381_xRight, r381_xMiddle, -1), r1_mix(r271_CAP, r381_yTurnPos, -1)), r271_corner(r1_mix(r381_xRight, r381_xMiddle, 2), r1_mix(r271_CAP, r381_yTurnPos, 2)), r271_corner(r271_Width * 4, r1_mix(r271_CAP, r381_yTurnPos, 2)))));
            return void 0;
        });
    });
    return void 0;
});
