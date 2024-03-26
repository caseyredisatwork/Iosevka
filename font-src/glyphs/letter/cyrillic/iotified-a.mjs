'use strict';
import * as _s0_t0 from '../../../support/utils.mjs';
import * as _s0_t1 from '../../../support/util/mask-bit.mjs';
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
var r1_bitOr = _r1_t9.bitOr;
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
    r270_xn$Capture_Ext$2Lrc2b['$defineGlyphBlockImpl$'](r270_xn$Capture_Ext$2Lrc2b, 'Letter-Cyrillic-Iotified-A', function (r271_xn$Capture$2Lrc8, r271_xn$ExportCapture$2Lrc4b) {
        var _r271_t8, _r271_t9, _r271_t10, _r271_tag11, _r271_t12, _r271_tag13, _r271_t14, _r271_tag15, _r271_t16, _r271_tag17;
        var _r271_t0 = r271_xn$Capture$2Lrc8;
        var r271_xn$createAndSaveGlyphImpl$2Lrc3c = _r271_t0['$createAndSaveGlyphImpl$'];
        var r271_xn$NamedParameterPair$2Lrc9b = _r271_t0['$NamedParameterPair$'];
        var r271_xn$assignUnicodeImpl$2Lrc8b = _r271_t0['$assignUnicodeImpl$'];
        var r271_xn$execState$2Lrc0b = _r271_t0['$execState$'];
        var r271_para = _r271_t0.para;
        var r271_tagged = _r271_t0.tagged;
        var r271_DivFrame = _r271_t0.DivFrame;
        var _r271_t1 = r271_xn$Capture$2Lrc8.Metrics;
        var r271_Width = _r271_t1.Width;
        var r271_SB = _r271_t1.SB;
        var r271_CAP = _r271_t1.CAP;
        var r271_XH = _r271_t1.XH;
        var r271_ApparentTranslate = _r271_t1.ApparentTranslate;
        var r271_HVContrast = _r271_t1.HVContrast;
        var r271_OX = _r271_t1.OX;
        var r271_SLAB = _r271_t1.SLAB;
        var r271_AdviceStroke = _r271_t1.AdviceStroke;
        var _r271_t2 = r271_xn$Capture$2Lrc8.SpiroFns;
        var _r271_t3 = r271_xn$Capture$2Lrc8.BooleFns;
        var r271_intersection = _r271_t3.intersection;
        var r271_difference = _r271_t3.difference;
        var _r271_t4 = r271_xn$Capture$2Lrc8.CommonShapes.resolve();
        var r271_HBar = _r271_t4.HBar;
        var r271_VBar = _r271_t4.VBar;
        var r271_WithTransform = _r271_t4.WithTransform;
        var r271_MaskBelow = _r271_t4.MaskBelow;
        var r271_MaskLeft = _r271_t4.MaskLeft;
        var _r271_t5 = r271_xn$Capture$2Lrc8['Common-Derivatives'].resolve();
        var r271_xn$selectvariant$7Hrq = _r271_t5['select-variant'];
        var _r271_t6 = r271_xn$Capture$2Lrc8['Letter-Shared-Shapes'].resolve();
        var r271_SerifFrame = _r271_t6.SerifFrame;
        var _r271_t7 = r271_xn$Capture$2Lrc8['Letter-Latin-Lower-AE-OE'].resolve();
        var r271_SubDfAndShift = _r271_t7.SubDfAndShift;
        var r271_xn$SLABNONE$5sIl = 0;
        var r271_xn$SLABFULL$5sIl = 1;
        var r271_xn$SLABOUTWARD$5sIl = 2;
        r271_xn$ExportCapture$2Lrc4b(function () {
            var _r277_t0, _r277_t1;
            return { 'Iotified': r271_Iotified };
        });
        var r271_Iotified = function () {
            var r280_Shape, r280_RevShape, r280_full, r280_outer, r280_A, r280_ascender;
            var r280_exports = {};
            r280_exports.Shape = r280_Shape = function () {
                var _r288_t6;
                var _r288_t7 = arguments;
                var _r288_t0 = [].slice.call(_r288_t7, 0);
                var _r288_t1 = [];
                var _r288_t2 = 0;
                while (_r288_t2 < _r288_t0.length) {
                    if (!(_r288_t0[_r288_t2] instanceof r271_xn$NamedParameterPair$2Lrc9b))
                        _r288_t1.push(_r288_t0[_r288_t2]);
                    _r288_t2 = _r288_t2 + 1;
                }
                var _r288_t3 = _r288_t0;
                var _r288_t4 = _r288_t3.length;
                var _r288_t5 = 0;
                while (_r288_t5 < _r288_t4) {
                    _r288_t2 = _r288_t3[_r288_t5];
                    if (_r288_t2 && _r288_t2 instanceof r271_xn$NamedParameterPair$2Lrc9b && _r288_t2.left === 'df')
                        r288_df = _r288_t2.right;
                    if (_r288_t2 && _r288_t2 instanceof r271_xn$NamedParameterPair$2Lrc9b && _r288_t2.left === 'top')
                        r288_top = _r288_t2.right;
                    if (_r288_t2 && _r288_t2 instanceof r271_xn$NamedParameterPair$2Lrc9b && _r288_t2.left === 'hBarRight')
                        r288_hBarRight = _r288_t2.right;
                    if (_r288_t2 && _r288_t2 instanceof r271_xn$NamedParameterPair$2Lrc9b && _r288_t2.left === 'hBarY')
                        r288_hBarY = _r288_t2.right;
                    if (_r288_t2 && _r288_t2 instanceof r271_xn$NamedParameterPair$2Lrc9b && _r288_t2.left === 'slabTop')
                        r288_slabTop = _r288_t2.right;
                    if (_r288_t2 && _r288_t2 instanceof r271_xn$NamedParameterPair$2Lrc9b && _r288_t2.left === 'slabBottom')
                        r288_slabBottom = _r288_t2.right;
                    if (_r288_t2 && _r288_t2 instanceof r271_xn$NamedParameterPair$2Lrc9b && _r288_t2.left === 'swSerif')
                        r288_swSerif = _r288_t2.right;
                    _r288_t5 = _r288_t5 + 1;
                }
                var r288_df = r1_fallback(r288_df, _r288_t1[0]);
                var r288_top = r1_fallback(r288_top, _r288_t1[1]);
                var r288_hBarRight = r1_fallback(r288_hBarRight, _r288_t1[2]);
                var r288_hBarY = r1_fallback(r288_hBarY, _r288_t1[3], r288_top / 2);
                var r288_slabTop = r1_fallback(r288_slabTop, _r288_t1[4], false);
                var r288_slabBottom = r1_fallback(r288_slabBottom, _r288_t1[5], false);
                var r288_swSerif = r1_fallback(r288_swSerif, _r288_t1[6], r288_df.mvs);
                return function () {
                    var r294___, _r294_t0, _r294_t1, _r294_t3;
                    var _r294_t2 = this;
                    var r294_currentGlyph = _r294_t2;
                    r294_currentGlyph.include(r271_VBar.l(r288_df.leftSB, 0, r288_top, r288_df.mvs));
                    if (r288_hBarRight > r288_df.leftSB)
                        r294_currentGlyph.include(r271_HBar.m(r288_df.leftSB, r288_hBarRight, r288_hBarY, r288_df.mvs));
                    var r294_sf = r271_SerifFrame.fromDf(r288_df, r288_top, 0, new r271_xn$NamedParameterPair$2Lrc9b('swSerif', r288_swSerif));
                    if (r271_SLAB) {
                        r294_currentGlyph.include(r271_tagged('serifLT', (_r294_t0 = r288_slabTop, _r294_t0 === r271_xn$SLABFULL$5sIl ? r294_sf.lt.full : _r294_t0 === r271_xn$SLABOUTWARD$5sIl ? r294_sf.lt.outer : (r294___ = _r294_t0, function () {
                            var _r300_t1;
                            var _r300_t0 = this;
                            var r300_currentGlyph = _r300_t0;
                            return void 0;
                        }))));
                        r294_currentGlyph.include(r271_tagged('serifLB', (_r294_t1 = r288_slabBottom, _r294_t1 === r271_xn$SLABFULL$5sIl ? r294_sf.lb.full : _r294_t1 === r271_xn$SLABOUTWARD$5sIl ? r294_sf.lb.outer : (r294___ = _r294_t1, function () {
                            var _r303_t1;
                            var _r303_t0 = this;
                            var r303_currentGlyph = _r303_t0;
                            return void 0;
                        }))));
                    }
                    return void 0;
                };
            };
            r280_exports.RevShape = r280_RevShape = function () {
                var _r305_t6;
                var _r305_t7 = arguments;
                var _r305_t0 = [].slice.call(_r305_t7, 0);
                var _r305_t1 = [];
                var _r305_t2 = 0;
                while (_r305_t2 < _r305_t0.length) {
                    if (!(_r305_t0[_r305_t2] instanceof r271_xn$NamedParameterPair$2Lrc9b))
                        _r305_t1.push(_r305_t0[_r305_t2]);
                    _r305_t2 = _r305_t2 + 1;
                }
                var _r305_t3 = _r305_t0;
                var _r305_t4 = _r305_t3.length;
                var _r305_t5 = 0;
                while (_r305_t5 < _r305_t4) {
                    _r305_t2 = _r305_t3[_r305_t5];
                    if (_r305_t2 && _r305_t2 instanceof r271_xn$NamedParameterPair$2Lrc9b && _r305_t2.left === 'df')
                        r305_df = _r305_t2.right;
                    if (_r305_t2 && _r305_t2 instanceof r271_xn$NamedParameterPair$2Lrc9b && _r305_t2.left === 'top')
                        r305_top = _r305_t2.right;
                    if (_r305_t2 && _r305_t2 instanceof r271_xn$NamedParameterPair$2Lrc9b && _r305_t2.left === 'hBarLeft')
                        r305_hBarLeft = _r305_t2.right;
                    if (_r305_t2 && _r305_t2 instanceof r271_xn$NamedParameterPair$2Lrc9b && _r305_t2.left === 'hBarY')
                        r305_hBarY = _r305_t2.right;
                    if (_r305_t2 && _r305_t2 instanceof r271_xn$NamedParameterPair$2Lrc9b && _r305_t2.left === 'slabTop')
                        r305_slabTop = _r305_t2.right;
                    if (_r305_t2 && _r305_t2 instanceof r271_xn$NamedParameterPair$2Lrc9b && _r305_t2.left === 'slabBottom')
                        r305_slabBottom = _r305_t2.right;
                    if (_r305_t2 && _r305_t2 instanceof r271_xn$NamedParameterPair$2Lrc9b && _r305_t2.left === 'swSerif')
                        r305_swSerif = _r305_t2.right;
                    _r305_t5 = _r305_t5 + 1;
                }
                var r305_df = r1_fallback(r305_df, _r305_t1[0]);
                var r305_top = r1_fallback(r305_top, _r305_t1[1]);
                var r305_hBarLeft = r1_fallback(r305_hBarLeft, _r305_t1[2]);
                var r305_hBarY = r1_fallback(r305_hBarY, _r305_t1[3], r305_top / 2);
                var r305_slabTop = r1_fallback(r305_slabTop, _r305_t1[4], false);
                var r305_slabBottom = r1_fallback(r305_slabBottom, _r305_t1[5], false);
                var r305_swSerif = r1_fallback(r305_swSerif, _r305_t1[6], r305_df.mvs);
                return function () {
                    var r311___, _r311_t0, _r311_t1, _r311_t3;
                    var _r311_t2 = this;
                    var r311_currentGlyph = _r311_t2;
                    r311_currentGlyph.include(r271_VBar.r(r305_df.rightSB, 0, r305_top, r305_df.mvs));
                    if (r305_hBarLeft < r305_df.rightSB)
                        r311_currentGlyph.include(r271_HBar.m(r305_hBarLeft, r305_df.rightSB, r305_hBarY, r305_df.mvs));
                    var r311_sf = r271_SerifFrame.fromDf(r305_df, r305_top, 0, new r271_xn$NamedParameterPair$2Lrc9b('swSerif', r305_swSerif));
                    if (r271_SLAB) {
                        r311_currentGlyph.include(r271_tagged('serifRT', (_r311_t0 = r305_slabTop, _r311_t0 === r271_xn$SLABFULL$5sIl ? r311_sf.rt.full : _r311_t0 === r271_xn$SLABOUTWARD$5sIl ? r311_sf.rt.outer : (r311___ = _r311_t0, function () {
                            var _r317_t1;
                            var _r317_t0 = this;
                            var r317_currentGlyph = _r317_t0;
                            return void 0;
                        }))));
                        r311_currentGlyph.include(r271_tagged('serifRB', (_r311_t1 = r305_slabBottom, _r311_t1 === r271_xn$SLABFULL$5sIl ? r311_sf.rb.full : _r311_t1 === r271_xn$SLABOUTWARD$5sIl ? r311_sf.rb.outer : (r311___ = _r311_t1, function () {
                            var _r320_t1;
                            var _r320_t0 = this;
                            var r320_currentGlyph = _r320_t0;
                            return void 0;
                        }))));
                    }
                    return void 0;
                };
            };
            r280_exports.full = r280_full = function () {
                var _r322_t6;
                var _r322_t7 = arguments;
                var _r322_t0 = [].slice.call(_r322_t7, 0);
                var _r322_t1 = [];
                var _r322_t2 = 0;
                while (_r322_t2 < _r322_t0.length) {
                    if (!(_r322_t0[_r322_t2] instanceof r271_xn$NamedParameterPair$2Lrc9b))
                        _r322_t1.push(_r322_t0[_r322_t2]);
                    _r322_t2 = _r322_t2 + 1;
                }
                var _r322_t3 = _r322_t0;
                var _r322_t4 = _r322_t3.length;
                var _r322_t5 = 0;
                while (_r322_t5 < _r322_t4) {
                    _r322_t2 = _r322_t3[_r322_t5];
                    if (_r322_t2 && _r322_t2 instanceof r271_xn$NamedParameterPair$2Lrc9b && _r322_t2.left === 'df')
                        r322_df = _r322_t2.right;
                    if (_r322_t2 && _r322_t2 instanceof r271_xn$NamedParameterPair$2Lrc9b && _r322_t2.left === 'top')
                        r322_top = _r322_t2.right;
                    if (_r322_t2 && _r322_t2 instanceof r271_xn$NamedParameterPair$2Lrc9b && _r322_t2.left === 'hBarRight')
                        r322_hBarRight = _r322_t2.right;
                    if (_r322_t2 && _r322_t2 instanceof r271_xn$NamedParameterPair$2Lrc9b && _r322_t2.left === 'hBarY')
                        r322_hBarY = _r322_t2.right;
                    if (_r322_t2 && _r322_t2 instanceof r271_xn$NamedParameterPair$2Lrc9b && _r322_t2.left === 'fCapital')
                        r322_fCapital = _r322_t2.right;
                    if (_r322_t2 && _r322_t2 instanceof r271_xn$NamedParameterPair$2Lrc9b && _r322_t2.left === 'swSerif')
                        r322_swSerif = _r322_t2.right;
                    _r322_t5 = _r322_t5 + 1;
                }
                var r322_df = r1_fallback(r322_df, _r322_t1[0]);
                var r322_top = r1_fallback(r322_top, _r322_t1[1]);
                var r322_hBarRight = r1_fallback(r322_hBarRight, _r322_t1[2]);
                var r322_hBarY = r1_fallback(r322_hBarY, _r322_t1[3]);
                var r322_fCapital = r1_fallback(r322_fCapital, _r322_t1[4], false);
                var r322_swSerif = r1_fallback(r322_swSerif, _r322_t1[5], r322_df.mvs);
                var r322_useItalicShape = !r322_fCapital && r271_para.isItalic;
                return r280_Shape(new r271_xn$NamedParameterPair$2Lrc9b('df', r322_df), new r271_xn$NamedParameterPair$2Lrc9b('top', r322_top), new r271_xn$NamedParameterPair$2Lrc9b('hBarRight', r322_hBarRight), new r271_xn$NamedParameterPair$2Lrc9b('hBarY', r322_hBarY), new r271_xn$NamedParameterPair$2Lrc9b('slabTop', r322_useItalicShape ? r271_xn$SLABOUTWARD$5sIl : r271_xn$SLABFULL$5sIl), new r271_xn$NamedParameterPair$2Lrc9b('slabBottom', r322_useItalicShape ? r271_xn$SLABNONE$5sIl : r271_xn$SLABFULL$5sIl), new r271_xn$NamedParameterPair$2Lrc9b('swSerif', r322_swSerif));
            };
            r280_exports.outer = r280_outer = function () {
                var _r335_t6;
                var _r335_t7 = arguments;
                var _r335_t0 = [].slice.call(_r335_t7, 0);
                var _r335_t1 = [];
                var _r335_t2 = 0;
                while (_r335_t2 < _r335_t0.length) {
                    if (!(_r335_t0[_r335_t2] instanceof r271_xn$NamedParameterPair$2Lrc9b))
                        _r335_t1.push(_r335_t0[_r335_t2]);
                    _r335_t2 = _r335_t2 + 1;
                }
                var _r335_t3 = _r335_t0;
                var _r335_t4 = _r335_t3.length;
                var _r335_t5 = 0;
                while (_r335_t5 < _r335_t4) {
                    _r335_t2 = _r335_t3[_r335_t5];
                    if (_r335_t2 && _r335_t2 instanceof r271_xn$NamedParameterPair$2Lrc9b && _r335_t2.left === 'df')
                        r335_df = _r335_t2.right;
                    if (_r335_t2 && _r335_t2 instanceof r271_xn$NamedParameterPair$2Lrc9b && _r335_t2.left === 'top')
                        r335_top = _r335_t2.right;
                    if (_r335_t2 && _r335_t2 instanceof r271_xn$NamedParameterPair$2Lrc9b && _r335_t2.left === 'hBarRight')
                        r335_hBarRight = _r335_t2.right;
                    if (_r335_t2 && _r335_t2 instanceof r271_xn$NamedParameterPair$2Lrc9b && _r335_t2.left === 'hBarY')
                        r335_hBarY = _r335_t2.right;
                    if (_r335_t2 && _r335_t2 instanceof r271_xn$NamedParameterPair$2Lrc9b && _r335_t2.left === 'fCapital')
                        r335_fCapital = _r335_t2.right;
                    if (_r335_t2 && _r335_t2 instanceof r271_xn$NamedParameterPair$2Lrc9b && _r335_t2.left === 'swSerif')
                        r335_swSerif = _r335_t2.right;
                    _r335_t5 = _r335_t5 + 1;
                }
                var r335_df = r1_fallback(r335_df, _r335_t1[0]);
                var r335_top = r1_fallback(r335_top, _r335_t1[1]);
                var r335_hBarRight = r1_fallback(r335_hBarRight, _r335_t1[2]);
                var r335_hBarY = r1_fallback(r335_hBarY, _r335_t1[3]);
                var r335_fCapital = r1_fallback(r335_fCapital, _r335_t1[4], false);
                var r335_swSerif = r1_fallback(r335_swSerif, _r335_t1[5], r335_df.mvs);
                var r335_useItalicShape = !r335_fCapital && r271_para.isItalic;
                return r280_Shape(new r271_xn$NamedParameterPair$2Lrc9b('df', r335_df), new r271_xn$NamedParameterPair$2Lrc9b('top', r335_top), new r271_xn$NamedParameterPair$2Lrc9b('hBarRight', r335_hBarRight), new r271_xn$NamedParameterPair$2Lrc9b('hBarY', r335_hBarY), new r271_xn$NamedParameterPair$2Lrc9b('slabTop', r271_xn$SLABOUTWARD$5sIl), new r271_xn$NamedParameterPair$2Lrc9b('slabBottom', r335_useItalicShape ? r271_xn$SLABNONE$5sIl : r271_xn$SLABOUTWARD$5sIl), new r271_xn$NamedParameterPair$2Lrc9b('swSerif', r335_swSerif));
            };
            r280_exports.A = r280_A = function () {
                var _r348_t6;
                var _r348_t7 = arguments;
                var _r348_t0 = [].slice.call(_r348_t7, 0);
                var _r348_t1 = [];
                var _r348_t2 = 0;
                while (_r348_t2 < _r348_t0.length) {
                    if (!(_r348_t0[_r348_t2] instanceof r271_xn$NamedParameterPair$2Lrc9b))
                        _r348_t1.push(_r348_t0[_r348_t2]);
                    _r348_t2 = _r348_t2 + 1;
                }
                var _r348_t3 = _r348_t0;
                var _r348_t4 = _r348_t3.length;
                var _r348_t5 = 0;
                while (_r348_t5 < _r348_t4) {
                    _r348_t2 = _r348_t3[_r348_t5];
                    if (_r348_t2 && _r348_t2 instanceof r271_xn$NamedParameterPair$2Lrc9b && _r348_t2.left === 'df')
                        r348_df = _r348_t2.right;
                    if (_r348_t2 && _r348_t2 instanceof r271_xn$NamedParameterPair$2Lrc9b && _r348_t2.left === 'top')
                        r348_top = _r348_t2.right;
                    if (_r348_t2 && _r348_t2 instanceof r271_xn$NamedParameterPair$2Lrc9b && _r348_t2.left === 'hBarRight')
                        r348_hBarRight = _r348_t2.right;
                    if (_r348_t2 && _r348_t2 instanceof r271_xn$NamedParameterPair$2Lrc9b && _r348_t2.left === 'hBarY')
                        r348_hBarY = _r348_t2.right;
                    if (_r348_t2 && _r348_t2 instanceof r271_xn$NamedParameterPair$2Lrc9b && _r348_t2.left === 'fCapital')
                        r348_fCapital = _r348_t2.right;
                    if (_r348_t2 && _r348_t2 instanceof r271_xn$NamedParameterPair$2Lrc9b && _r348_t2.left === 'swSerif')
                        r348_swSerif = _r348_t2.right;
                    _r348_t5 = _r348_t5 + 1;
                }
                var r348_df = r1_fallback(r348_df, _r348_t1[0]);
                var r348_top = r1_fallback(r348_top, _r348_t1[1]);
                var r348_hBarRight = r1_fallback(r348_hBarRight, _r348_t1[2]);
                var r348_hBarY = r1_fallback(r348_hBarY, _r348_t1[3]);
                var r348_fCapital = r1_fallback(r348_fCapital, _r348_t1[4], false);
                var r348_swSerif = r1_fallback(r348_swSerif, _r348_t1[5], r348_df.mvs);
                var r348_useItalicShape = !r348_fCapital && r271_para.isItalic;
                return r280_Shape(new r271_xn$NamedParameterPair$2Lrc9b('df', r348_df), new r271_xn$NamedParameterPair$2Lrc9b('top', r348_top), new r271_xn$NamedParameterPair$2Lrc9b('hBarRight', r348_hBarRight), new r271_xn$NamedParameterPair$2Lrc9b('hBarY', r348_hBarY), new r271_xn$NamedParameterPair$2Lrc9b('slabTop', r348_useItalicShape ? r271_xn$SLABOUTWARD$5sIl : r271_xn$SLABFULL$5sIl), new r271_xn$NamedParameterPair$2Lrc9b('slabBottom', r348_useItalicShape ? r271_xn$SLABNONE$5sIl : r271_xn$SLABOUTWARD$5sIl), new r271_xn$NamedParameterPair$2Lrc9b('swSerif', r348_swSerif));
            };
            r280_exports.ascender = r280_ascender = function () {
                var _r361_t6;
                var _r361_t7 = arguments;
                var _r361_t0 = [].slice.call(_r361_t7, 0);
                var _r361_t1 = [];
                var _r361_t2 = 0;
                while (_r361_t2 < _r361_t0.length) {
                    if (!(_r361_t0[_r361_t2] instanceof r271_xn$NamedParameterPair$2Lrc9b))
                        _r361_t1.push(_r361_t0[_r361_t2]);
                    _r361_t2 = _r361_t2 + 1;
                }
                var _r361_t3 = _r361_t0;
                var _r361_t4 = _r361_t3.length;
                var _r361_t5 = 0;
                while (_r361_t5 < _r361_t4) {
                    _r361_t2 = _r361_t3[_r361_t5];
                    if (_r361_t2 && _r361_t2 instanceof r271_xn$NamedParameterPair$2Lrc9b && _r361_t2.left === 'df')
                        r361_df = _r361_t2.right;
                    if (_r361_t2 && _r361_t2 instanceof r271_xn$NamedParameterPair$2Lrc9b && _r361_t2.left === 'top')
                        r361_top = _r361_t2.right;
                    if (_r361_t2 && _r361_t2 instanceof r271_xn$NamedParameterPair$2Lrc9b && _r361_t2.left === 'hBarRight')
                        r361_hBarRight = _r361_t2.right;
                    if (_r361_t2 && _r361_t2 instanceof r271_xn$NamedParameterPair$2Lrc9b && _r361_t2.left === 'hBarY')
                        r361_hBarY = _r361_t2.right;
                    if (_r361_t2 && _r361_t2 instanceof r271_xn$NamedParameterPair$2Lrc9b && _r361_t2.left === 'fCapital')
                        r361_fCapital = _r361_t2.right;
                    if (_r361_t2 && _r361_t2 instanceof r271_xn$NamedParameterPair$2Lrc9b && _r361_t2.left === 'swSerif')
                        r361_swSerif = _r361_t2.right;
                    _r361_t5 = _r361_t5 + 1;
                }
                var r361_df = r1_fallback(r361_df, _r361_t1[0]);
                var r361_top = r1_fallback(r361_top, _r361_t1[1]);
                var r361_hBarRight = r1_fallback(r361_hBarRight, _r361_t1[2]);
                var r361_hBarY = r1_fallback(r361_hBarY, _r361_t1[3]);
                var r361_fCapital = r1_fallback(r361_fCapital, _r361_t1[4], false);
                var r361_swSerif = r1_fallback(r361_swSerif, _r361_t1[5], r361_df.mvs);
                var r361_useItalicShape = !r361_fCapital && r271_para.isItalic;
                return r280_Shape(new r271_xn$NamedParameterPair$2Lrc9b('df', r361_df), new r271_xn$NamedParameterPair$2Lrc9b('top', r361_top), new r271_xn$NamedParameterPair$2Lrc9b('hBarRight', r361_hBarRight), new r271_xn$NamedParameterPair$2Lrc9b('hBarY', r361_hBarY), new r271_xn$NamedParameterPair$2Lrc9b('slabTop', r271_xn$SLABOUTWARD$5sIl), new r271_xn$NamedParameterPair$2Lrc9b('slabBottom', r361_useItalicShape ? r271_xn$SLABNONE$5sIl : r271_xn$SLABFULL$5sIl), new r271_xn$NamedParameterPair$2Lrc9b('swSerif', r361_swSerif));
            };
            return r280_exports;
        }();
        (function () {
            var r374_suffix, r374_fStraightBar, r374_slabKind, _r374_t3, _r374_t5, _r374_t6, _r374_tag7;
            var _r374_t0 = r271_xn$Capture$2Lrc8['Letter-Latin-Upper-A'].resolve();
            var r374_AMaskShape = _r374_t0.AMaskShape;
            var r374_ALetterShape = _r374_t0.ALetterShape;
            var r374_AConfig = _r374_t0.AConfig;
            var _r374_t1 = Object.entries(r374_AConfig)[Symbol.iterator]();
            var _r374_t2 = void 0;
            var _r374_t4 = !(_r374_t2 = _r374_t1.next()).done;
            while (_r374_t4) {
                _r374_t3 = _r374_t2.value;
                r374_suffix = _r374_t3[0];
                r374_fStraightBar = _r374_t3[1][0];
                r374_slabKind = _r374_t3[1][1];
                _r374_t3[1];
                _r374_t5 = function () {
                    return r271_xn$createAndSaveGlyphImpl$2Lrc3c('cyrl/AIotified.' + r374_suffix, null, function () {
                        var _r381_t1;
                        var _r381_t0 = this;
                        var r381_currentGlyph = _r381_t0;
                        var r381_df = r271_DivFrame(r271_para.diversityM, 3.5);
                        r381_currentGlyph.setWidth(r381_df.width);
                        r381_currentGlyph.include(r381_df.markSet.capital());
                        var r381_gap = (r381_df.width - 2 * r381_df.leftSB - 4 * r381_df.mvs) / 3;
                        var r381_divSub = (r381_df.width - r381_gap - r381_df.mvs) / r271_Width;
                        var r381_subDf = r271_DivFrame(r381_divSub, 2, r381_df.leftSB / r271_SB, r381_df.mvs, 0);
                        var r381_shift = r271_Width * (r381_df.div - r381_divSub);
                        var r381_xIotifiedBarRight = r381_df.leftSB + r271_HVContrast * r381_df.mvs;
                        var r381_botGap = Math.max((r381_df.rightSB - r381_df.leftSB) * 0.08, r271_AdviceStroke(6));
                        r381_currentGlyph.include(r271_difference(r271_WithTransform(r271_ApparentTranslate(r381_shift, 0), r374_ALetterShape(r381_subDf, r374_fStraightBar, r374_slabKind, r271_CAP, r381_df.mvs)), r271_intersection(r271_MaskBelow(r381_df.mvs), r271_MaskLeft(r1_mix(r381_xIotifiedBarRight, Math.min(r381_subDf.leftSB + r381_shift, r381_xIotifiedBarRight + r381_botGap), 0.5)))));
                        r381_currentGlyph.include(r271_difference(r271_Iotified.A(r381_df, r271_CAP, r1_mix(r381_df.leftSB, r381_df.rightSB, 3 / 4), r271_CAP / 2, new r271_xn$NamedParameterPair$2Lrc9b('fCapital', true)), r271_WithTransform(r271_ApparentTranslate(r381_shift, 0), r374_AMaskShape(r381_subDf, r374_fStraightBar, r271_CAP, r381_df.mvs))));
                        return void 0;
                    });
                }();
                _r374_t4 = !(_r374_t2 = _r374_t1.next()).done;
            }
            return _r374_t5;
        }());
        (function () {
            var r388_suffix, r388_body, _r388_t3, _r388_t5, _r388_t6, _r388_tag7;
            var _r388_t0 = r271_xn$Capture$2Lrc8['Letter-Latin-Lower-A'].resolve();
            var r388_DoubleStorey = _r388_t0.DoubleStorey;
            var r388_DoubleStoreyConfig = {
                'doubleStoreySerifless': [r388_DoubleStorey.Serifless],
                'doubleStoreySerifed': [r388_DoubleStorey.Serifed],
                'doubleStoreyTailed': [r388_DoubleStorey.Tailed],
                'doubleStoreyToothlessCorner': [r388_DoubleStorey.ToothlessCorner],
                'doubleStoreyToothlessRounded': [r388_DoubleStorey.ToothlessRounded]
            };
            var _r388_t1 = Object.entries(r388_DoubleStoreyConfig)[Symbol.iterator]();
            var _r388_t2 = void 0;
            var _r388_t4 = !(_r388_t2 = _r388_t1.next()).done;
            while (_r388_t4) {
                _r388_t3 = _r388_t2.value;
                r388_suffix = _r388_t3[0];
                r388_body = _r388_t3[1][0];
                _r388_t3[1];
                _r388_t5 = function () {
                    return r271_xn$createAndSaveGlyphImpl$2Lrc3c('cyrl/aIotified.' + r388_suffix, null, function () {
                        var _r395_t2;
                        var _r395_t1 = this;
                        var r395_currentGlyph = _r395_t1;
                        var r395_df = r271_DivFrame(r271_para.diversityM, 3);
                        r395_currentGlyph.setWidth(r395_df.width);
                        r395_currentGlyph.include(r395_df.markSet.e());
                        var _r395_t0 = r271_SubDfAndShift(1, r395_df);
                        var r395_subDf = _r395_t0[0];
                        var r395_shift = _r395_t0[1];
                        r395_currentGlyph.include(r271_WithTransform(r271_ApparentTranslate(r395_shift, 0), r388_body(r395_subDf, r395_df.mvs)));
                        r395_currentGlyph.include(r271_difference(r271_Iotified.full(r395_df, r271_XH, r1_mix(r395_df.leftSB, r395_df.rightSB, 3 / 4), r271_XH / 2), r271_WithTransform(r271_ApparentTranslate(r395_shift, 0), r388_DoubleStorey.GetMask(r388_body, r395_df, r395_df.mvs))));
                        return void 0;
                    });
                }();
                _r388_t4 = !(_r388_t2 = _r388_t1.next()).done;
            }
            return _r388_t5;
        }());
        (function () {
            var r401_suffix, r401_body, _r401_t3, _r401_t5, _r401_t6, _r401_tag7;
            var _r401_t0 = r271_xn$Capture$2Lrc8['Letter-Latin-Lower-E'].resolve();
            var r401_SmallEShape = _r401_t0.SmallEShape;
            var r401_SmallERoundedShape = _r401_t0.SmallERoundedShape;
            var r401_EShape = function (r403_pShift, r403_df, r403_body) {
                var _r403_t0, _r403_t1;
                return void 0;
            };
            var r401_Config = {
                'flatCrossbar': [r401_SmallEShape],
                'rounded': [r401_SmallERoundedShape]
            };
            var _r401_t1 = Object.entries(r401_Config)[Symbol.iterator]();
            var _r401_t2 = void 0;
            var _r401_t4 = !(_r401_t2 = _r401_t1.next()).done;
            while (_r401_t4) {
                _r401_t3 = _r401_t2.value;
                r401_suffix = _r401_t3[0];
                r401_body = _r401_t3[1][0];
                _r401_t3[1];
                _r401_t5 = function () {
                    return r271_xn$createAndSaveGlyphImpl$2Lrc3c('latn/eIotified.' + r401_suffix, null, function () {
                        var _r409_t2;
                        var _r409_t1 = this;
                        var r409_currentGlyph = _r409_t1;
                        var r409_df = r271_DivFrame(r271_para.diversityM, 3);
                        r409_currentGlyph.setWidth(r409_df.width);
                        r409_currentGlyph.include(r409_df.markSet.e());
                        var _r409_t0 = r271_SubDfAndShift(1, r409_df, r271_OX);
                        var r409_subDf = _r409_t0[0];
                        var r409_shift = _r409_t0[1];
                        r409_currentGlyph.include(r271_WithTransform(r271_ApparentTranslate(r409_shift, 0), r401_body(r409_subDf, r271_XH, r409_df.mvs)));
                        r409_currentGlyph.include(r271_Iotified.full(r409_df, r271_XH, r409_df.middle, r271_XH / 2));
                        return void 0;
                    });
                }();
                _r401_t4 = !(_r401_t2 = _r401_t1.next()).done;
            }
            return _r401_t5;
        }());
        r271_xn$selectvariant$7Hrq('cyrl/AIotified', 42582, new r271_xn$NamedParameterPair$2Lrc9b('follow', 'A'));
        r271_xn$selectvariant$7Hrq('cyrl/aIotified', 42583, new r271_xn$NamedParameterPair$2Lrc9b('follow', 'a/turnABase'));
        return r271_xn$selectvariant$7Hrq('latn/eIotified', 43873, new r271_xn$NamedParameterPair$2Lrc9b('follow', 'e'));
    });
    return void 0;
});
